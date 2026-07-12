import { Client } from '@neondatabase/serverless';
const c = new Client(process.env.DB_URL);
await c.connect();
const { rows } = await c.query('SELECT name, slug, state FROM regions ORDER BY state, name');
rows.forEach(r => console.log(`${r.state}  ${r.slug}  (${r.name})`));
await c.end();
