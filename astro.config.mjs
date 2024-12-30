import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: "static",
  site:"https://Pablo400-glitch.github.io",
  base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  integrations: [tailwind()],
  redirects: {
    '/': process.env.NODE_ENV === 'production' ? '/Portfolio/es' : '/es',
    '/es': process.env.NODE_ENV === 'production' ? '/Portfolio/es' : '/es',
    '/en': process.env.NODE_ENV === 'production' ? '/Portfolio/en' : '/en',
  }
});