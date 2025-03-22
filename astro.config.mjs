import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abhiram2006.github.io/website/', // Full production URL
  base: '/website/',
  outDir: './docs',
  integrations: [sitemap()],
});
