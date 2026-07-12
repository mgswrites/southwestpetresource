import { neon } from '@neondatabase/serverless';

const sql = neon(import.meta.env.DATABASE_URL);

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Region {
  id: number;
  name: string;
  slug: string;
  state: string;
}

export interface Listing {
  id: number;
  name: string;
  slug: string;
  city: string;
  state: string;
  citySlug: string;
  regionSlug: string;
  address: string;
  phone: string;
  website: string;
  description: string;
  featured: boolean;
  verified: boolean;
  categorySlugs: string[];
  tags: string[];
}

export interface Guide {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  'veterinary-clinics':   '🩺',
  'shelters-rescues':     '🐾',
  'spay-neuter':          '🧑‍⚕️',
  'groomers':             '✂️',
  'boarding-daycare':     '🏡',
  'trainers':             '🎾',
  'pet-sitters':          '🚶',
  'pet-supply':           '🛍️',
  'dog-parks-trails':     '🌲',
  'pet-friendly-lodging': '🏨',
};

function normalizeListing(row: Record<string, unknown>): Listing {
  return {
    id:            row.id as number,
    name:          row.name as string,
    slug:          row.slug as string,
    city:          row.city as string,
    state:         row.state as string,
    citySlug:      row.city_slug as string,
    regionSlug:    row.city_slug as string,
    address:       row.address as string,
    phone:         row.phone as string,
    website:       row.website as string,
    description:   row.description as string,
    featured:      row.featured as boolean,
    verified:      row.verified as boolean,
    categorySlugs: (row.category_slugs as string[]) ?? [],
    tags:          (row.tags as string[]) ?? [],
  };
}

export async function getCategories(): Promise<Category[]> {
  const rows = await sql`SELECT id, name, slug, description FROM categories ORDER BY name`;
  return rows.map(r => ({
    id:          r.id as number,
    name:        r.name as string,
    slug:        r.slug as string,
    description: r.description as string,
    icon:        CATEGORY_ICONS[r.slug as string] ?? '🐾',
  }));
}

export async function getRegions(): Promise<Region[]> {
  const rows = await sql`SELECT id, name, slug, state FROM regions ORDER BY state, name`;
  return rows.map(r => ({
    id:    r.id as number,
    name:  r.name as string,
    slug:  r.slug as string,
    state: r.state as string,
  }));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const rows = await sql`SELECT * FROM categories WHERE slug = ${slug} LIMIT 1`;
  const r = rows[0];
  if (!r) return null;
  return {
    id:          r.id as number,
    name:        r.name as string,
    slug:        r.slug as string,
    description: r.description as string,
    icon:        CATEGORY_ICONS[r.slug as string] ?? '🐾',
  };
}

export async function getRegionBySlug(slug: string): Promise<Region | null> {
  const rows = await sql`SELECT * FROM regions WHERE slug = ${slug} LIMIT 1`;
  const r = rows[0];
  if (!r) return null;
  return { id: r.id as number, name: r.name as string, slug: r.slug as string, state: r.state as string };
}

export async function getRegionsByState(stateAbbr: string): Promise<Region[]> {
  const rows = await sql`SELECT id, name, slug, state FROM regions WHERE state = ${stateAbbr} ORDER BY name`;
  return rows.map(r => ({ id: r.id as number, name: r.name as string, slug: r.slug as string, state: r.state as string }));
}

export async function getAllListings(): Promise<Listing[]> {
  const rows = await sql`
    SELECT
      l.id, l.name, l.slug, l.city, l.state, l.address, l.phone, l.website,
      l.description, l.featured, l.verified, r.slug AS city_slug,
      array_agg(DISTINCT c.slug) AS category_slugs,
      coalesce(array_agg(DISTINCT t.name) FILTER (WHERE t.name IS NOT NULL), '{}') AS tags
    FROM listings l
    JOIN regions r             ON l.region_id = r.id
    JOIN listing_categories lc ON l.id = lc.listing_id
    JOIN categories c          ON lc.category_id = c.id
    LEFT JOIN listing_tags lt  ON l.id = lt.listing_id
    LEFT JOIN tags t           ON lt.tag_id = t.id
    GROUP BY l.id, r.slug
  `;
  return rows.map(r => normalizeListing(r as Record<string, unknown>));
}

export async function getFeaturedListings(): Promise<Listing[]> {
  const rows = await sql`
    SELECT
      l.id, l.name, l.slug, l.city, l.state, l.address, l.phone, l.website,
      l.description, l.featured, l.verified, r.slug AS city_slug,
      array_agg(DISTINCT c.slug) AS category_slugs,
      coalesce(array_agg(DISTINCT t.name) FILTER (WHERE t.name IS NOT NULL), '{}') AS tags
    FROM listings l
    JOIN regions r             ON l.region_id = r.id
    JOIN listing_categories lc ON l.id = lc.listing_id
    JOIN categories c          ON lc.category_id = c.id
    LEFT JOIN listing_tags lt  ON l.id = lt.listing_id
    LEFT JOIN tags t           ON lt.tag_id = t.id
    WHERE l.featured = true
    GROUP BY l.id, r.slug
  `;
  return rows.map(r => normalizeListing(r as Record<string, unknown>));
}

export async function getListingsForCategoryAndCity(categorySlug: string, citySlug: string): Promise<Listing[]> {
  const rows = await sql`
    SELECT
      l.id, l.name, l.slug, l.city, l.state, l.address, l.phone, l.website,
      l.description, l.featured, l.verified, r.slug AS city_slug,
      array_agg(DISTINCT c.slug) AS category_slugs,
      coalesce(array_agg(DISTINCT t.name) FILTER (WHERE t.name IS NOT NULL), '{}') AS tags
    FROM listings l
    JOIN regions r             ON l.region_id = r.id
    JOIN listing_categories lc ON l.id = lc.listing_id
    JOIN categories c          ON lc.category_id = c.id
    LEFT JOIN listing_tags lt  ON l.id = lt.listing_id
    LEFT JOIN tags t           ON lt.tag_id = t.id
    WHERE c.slug = ${categorySlug} AND r.slug = ${citySlug}
    GROUP BY l.id, r.slug
  `;
  return rows.map(r => normalizeListing(r as Record<string, unknown>));
}

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  const rows = await sql`
    SELECT
      l.id, l.name, l.slug, l.city, l.state, l.address, l.phone, l.website,
      l.description, l.featured, l.verified, r.slug AS city_slug,
      array_agg(DISTINCT c.slug) AS category_slugs,
      coalesce(array_agg(DISTINCT t.name) FILTER (WHERE t.name IS NOT NULL), '{}') AS tags
    FROM listings l
    JOIN regions r             ON l.region_id = r.id
    JOIN listing_categories lc ON l.id = lc.listing_id
    JOIN categories c          ON lc.category_id = c.id
    LEFT JOIN listing_tags lt  ON l.id = lt.listing_id
    LEFT JOIN tags t           ON lt.tag_id = t.id
    WHERE l.slug = ${slug}
    GROUP BY l.id, r.slug
    LIMIT 1
  `;
  return rows[0] ? normalizeListing(rows[0] as Record<string, unknown>) : null;
}

export async function getCitiesForCategory(categorySlug: string): Promise<Array<{name: string, slug: string, state: string}>> {
  const rows = await sql`
    SELECT DISTINCT r.name, r.slug, r.state
    FROM regions r
    JOIN listings l ON l.region_id = r.id
    JOIN listing_categories lc ON lc.listing_id = l.id
    JOIN categories c ON c.id = lc.category_id
    WHERE c.slug = ${categorySlug}
    ORDER BY r.state, r.name
  `;
  return rows.map(r => ({ name: r.name as string, slug: r.slug as string, state: r.state as string }));
}

export async function getGuides(): Promise<Guide[]> {
  const rows = await sql`
    SELECT id, title, slug, excerpt, body
    FROM guides
    ORDER BY coalesce(published_at, created_at) DESC
  `;
  return rows.map(r => ({
    id:      r.id as number,
    title:   r.title as string,
    slug:    r.slug as string,
    excerpt: r.excerpt as string,
    body:    r.body as string,
  }));
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  const rows = await sql`SELECT * FROM guides WHERE slug = ${slug} LIMIT 1`;
  const r = rows[0];
  if (!r) return null;
  return { id: r.id as number, title: r.title as string, slug: r.slug as string, excerpt: r.excerpt as string, body: r.body as string };
}
