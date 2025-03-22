import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/website/',
  trailingSlash: 'always', // Ensures paths like /website/notes/foo/
});
