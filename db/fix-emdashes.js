import { Client } from '@neondatabase/serverless';

const client = new Client(process.env.DB_URL);
await client.connect();

const { rows } = await client.query(
  `UPDATE listings SET description = replace(description, '—', '-')
   WHERE description LIKE '%—%'
   RETURNING name`
);

console.log(`Updated ${rows.length} listings:`);
rows.forEach(r => console.log(' -', r.name));

await client.end();
