import { getGuides, getAllListings, getCategories, getRegions } from '../lib/data';

export const GET = async () => {
  const baseUrl = 'https://swpetresource.com';
  const pages = ['', '/guides', '/guides/'];

  const [categories, regions, listings, guides] = await Promise.all([
    getCategories(),
    getRegions(),
    getAllListings(),
    getGuides(),
  ]);

  const listingUrls = categories.flatMap((category) =>
    regions.map((region) => `/listings/${category.slug}/${region.slug}`)
  );
  const listingDetailUrls = (listings as any[]).flatMap((listing) =>
    (listing.categorySlugs as string[]).map((categorySlug) => `/listings/${categorySlug}/${listing.citySlug}/${listing.slug}`)
  );
  const guideUrls = (guides as any[]).map((guide) => `/guides/${guide.slug}`);
  const allUrls = [...pages, ...listingUrls, ...listingDetailUrls, ...guideUrls];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allUrls
    .map((url) => `<url><loc>${baseUrl}${url}</loc></url>`)
    .join('')}\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
