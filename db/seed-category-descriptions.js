import { Client } from '@neondatabase/serverless';

const descriptions = {
  'veterinary-clinics':   'Licensed veterinarians for routine checkups, vaccines, and sick care.',
  'boarding-daycare':     'Safe overnight boarding and daytime care for dogs and cats.',
  'groomers':             'Professional bathing, haircuts, and nail trims for dogs and cats.',
  'pet-supply':           'Local stores with food, gear, and supplies for pets.',
  'pet-friendly-lodging': 'Hotels, motels, and rentals that welcome pets.',
  'shelters-rescues':     'Animal shelters and rescue groups placing animals in homes.',
  'spay-neuter':          'Low-cost spay and neuter clinics and assistance programs.',
  'trainers':             'Obedience training, puppy classes, and behavior programs.',
  'pet-sitters':          'In-home pet sitting and dog walking services.',
  'dog-parks-trails':     'Off-leash parks and pet-friendly hiking trails.',
};

const client = new Client(process.env.DB_URL);
await client.connect();

let updated = 0;
for (const [slug, desc] of Object.entries(descriptions)) {
  const { rowCount } = await client.query(
    `UPDATE categories SET description = $1 WHERE slug = $2`,
    [desc, slug]
  );
  if (rowCount > 0) { console.log(`+ ${slug}`); updated++; }
  else console.log(`  not found: ${slug}`);
}

await client.end();
console.log(`\nDone — ${updated} updated`);
