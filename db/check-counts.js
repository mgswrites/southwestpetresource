import { Client } from '@neondatabase/serverless';
const c = new Client(process.env.DB_URL);
await c.connect();

console.log('\n=== Listings per category ===');
const { rows: cats } = await c.query(`
  SELECT cat.name, cat.slug, COUNT(lc.listing_id) as count
  FROM categories cat
  LEFT JOIN listing_categories lc ON lc.category_id = cat.id
  GROUP BY cat.id ORDER BY count DESC
`);
cats.forEach(r => console.log(`  ${String(r.count).padStart(3)}  ${r.slug}`));

console.log('\n=== Cities under 5 listings ===');
const { rows: cities } = await c.query(`
  SELECT r.name, r.state, r.slug, COUNT(l.id) as count
  FROM regions r
  LEFT JOIN listings l ON l.region_id = r.id
  GROUP BY r.id ORDER BY count ASC, r.state, r.name
`);
cities.filter(r => Number(r.count) < 5).forEach(r =>
  console.log(`  ${String(r.count).padStart(3)}  ${r.name}, ${r.state}  (${r.slug})`)
);
await c.end();
