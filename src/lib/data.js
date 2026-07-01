import { neon } from '@neondatabase/serverless';

const sql = neon(import.meta.env.DATABASE_URL);

export const STATES = [
  { name: 'California',  slug: 'california',  abbr: 'CA' },
  { name: 'Nevada',      slug: 'nevada',       abbr: 'NV' },
  { name: 'Arizona',     slug: 'arizona',      abbr: 'AZ' },
  { name: 'New Mexico',  slug: 'new-mexico',   abbr: 'NM' },
  { name: 'Utah',        slug: 'utah',         abbr: 'UT' },
  { name: 'Colorado',    slug: 'colorado',     abbr: 'CO' },
  { name: 'Texas',       slug: 'texas',        abbr: 'TX' },
];

const CATEGORY_ICONS = {
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

function normalizeListing(row) {
  return {
    id:            row.id,
    name:          row.name,
    slug:          row.slug,
    city:          row.city,
    state:         row.state,
    citySlug:      row.city_slug,
    regionSlug:    row.city_slug,
    address:       row.address,
    phone:         row.phone,
    website:       row.website,
    description:   row.description,
    featured:      row.featured,
    verified:      row.verified,
    categorySlugs: row.category_slugs ?? [],
    tags:          row.tags ?? [],
  };
}

export async function getCategories() {
  const rows = await sql`SELECT id, name, slug, description FROM categories ORDER BY name`;
  return rows.map(r => ({ ...r, icon: CATEGORY_ICONS[r.slug] ?? '🐾' }));
}

export async function getRegions() {
  return sql`SELECT id, name, slug, state FROM regions ORDER BY state, name`;
}

export async function getCategoryBySlug(slug) {
  const rows = await sql`SELECT * FROM categories WHERE slug = ${slug} LIMIT 1`;
  const row = rows[0];
  return row ? { ...row, icon: CATEGORY_ICONS[row.slug] ?? '🐾' } : null;
}

export async function getRegionBySlug(slug) {
  const rows = await sql`SELECT * FROM regions WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ?? null;
}

export async function getAllListings() {
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
  return rows.map(normalizeListing);
}

export async function getFeaturedListings() {
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
  return rows.map(normalizeListing);
}

export async function getListingsForCategoryAndCity(categorySlug, citySlug) {
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
  return rows.map(normalizeListing);
}

export async function getListingBySlug(slug) {
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
  return rows[0] ? normalizeListing(rows[0]) : null;
}

export async function getGuides() {
  return sql`
    SELECT id, title, slug, excerpt, body
    FROM guides
    ORDER BY coalesce(published_at, created_at) DESC
  `;
}

export async function getGuideBySlug(slug) {
  const rows = await sql`SELECT * FROM guides WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ?? null;
}

export async function getRegionsByState(stateAbbr) {
  const rows = await sql`SELECT id, name, slug, state FROM regions WHERE state = ${stateAbbr} ORDER BY name`;
  return rows.map(r => ({ id: Number(r.id), name: String(r.name), slug: String(r.slug), state: String(r.state) }));
}
