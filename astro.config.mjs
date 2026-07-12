import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import pagefind from 'astro-pagefind';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://www.southwestpetresource.com',
  integrations: [pagefind()],
});
