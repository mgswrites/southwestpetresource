import { Client } from '@neondatabase/serverless';

const cities = [
  // California
  { name: 'Los Angeles',   slug: 'los-angeles',   state: 'CA' },
  { name: 'San Diego',     slug: 'san-diego',      state: 'CA' },
  { name: 'San Francisco', slug: 'san-francisco',  state: 'CA' },
  { name: 'Sacramento',    slug: 'sacramento',     state: 'CA' },
  { name: 'San Jose',      slug: 'san-jose',       state: 'CA' },
  { name: 'Fresno',        slug: 'fresno',         state: 'CA' },
  { name: 'Oakland',       slug: 'oakland',        state: 'CA' },
  { name: 'Santa Barbara', slug: 'santa-barbara',  state: 'CA' },
  { name: 'Palm Springs',  slug: 'palm-springs',   state: 'CA' },
  // Nevada
  { name: 'Las Vegas',     slug: 'las-vegas',      state: 'NV' },
  { name: 'Reno',          slug: 'reno',           state: 'NV' },
  { name: 'Henderson',     slug: 'henderson',      state: 'NV' },
  { name: 'Carson City',   slug: 'carson-city',    state: 'NV' },
  { name: 'Sparks',        slug: 'sparks',         state: 'NV' },
  // Arizona (adding to existing Tucson, Phoenix, Flagstaff)
  { name: 'Scottsdale',    slug: 'scottsdale',     state: 'AZ' },
  { name: 'Mesa',          slug: 'mesa',           state: 'AZ' },
  { name: 'Tempe',         slug: 'tempe',          state: 'AZ' },
  { name: 'Sedona',        slug: 'sedona',         state: 'AZ' },
  { name: 'Prescott',      slug: 'prescott',       state: 'AZ' },
  // New Mexico (adding to existing ABQ, Santa Fe, Las Cruces, Taos)
  { name: 'Rio Rancho',    slug: 'rio-rancho',     state: 'NM' },
  { name: 'Farmington',    slug: 'farmington',     state: 'NM' },
  { name: 'Roswell',       slug: 'roswell',        state: 'NM' },
  { name: 'Clovis',        slug: 'clovis',         state: 'NM' },
  // Utah
  { name: 'Salt Lake City',slug: 'salt-lake-city', state: 'UT' },
  { name: 'Provo',         slug: 'provo',          state: 'UT' },
  { name: 'Ogden',         slug: 'ogden',          state: 'UT' },
  { name: 'St. George',    slug: 'st-george',      state: 'UT' },
  { name: 'Park City',     slug: 'park-city',      state: 'UT' },
  { name: 'Moab',          slug: 'moab',           state: 'UT' },
  // Colorado (adding to existing Denver, Durango)
  { name: 'Colorado Springs', slug: 'colorado-springs', state: 'CO' },
  { name: 'Boulder',       slug: 'boulder',        state: 'CO' },
  { name: 'Fort Collins',  slug: 'fort-collins',   state: 'CO' },
  { name: 'Grand Junction',slug: 'grand-junction', state: 'CO' },
  { name: 'Aspen',         slug: 'aspen',          state: 'CO' },
  { name: 'Telluride',     slug: 'telluride',      state: 'CO' },
  // Texas
  { name: 'Austin',        slug: 'austin',         state: 'TX' },
  { name: 'Houston',       slug: 'houston',        state: 'TX' },
  { name: 'Dallas',        slug: 'dallas',         state: 'TX' },
  { name: 'San Antonio',   slug: 'san-antonio',    state: 'TX' },
  { name: 'El Paso',       slug: 'el-paso',        state: 'TX' },
  { name: 'Fort Worth',    slug: 'fort-worth',     state: 'TX' },
  { name: 'Lubbock',       slug: 'lubbock',        state: 'TX' },
  { name: 'Amarillo',      slug: 'amarillo',       state: 'TX' },
];

const client = new Client(process.env.DB_URL);
await client.connect();

let inserted = 0;
let skipped = 0;

for (const city of cities) {
  const { rows } = await client.query(
    `INSERT INTO regions (name, slug, state)
     VALUES ($1, $2, $3)
     ON CONFLICT (slug) DO NOTHING
     RETURNING id`,
    [city.name, city.slug, city.state]
  );
  if (rows.length > 0) { inserted++; console.log(`+ ${city.name}, ${city.state}`); }
  else { skipped++; console.log(`  skip ${city.slug} (exists)`); }
}

await client.end();
console.log(`\nDone — ${inserted} inserted, ${skipped} skipped`);
