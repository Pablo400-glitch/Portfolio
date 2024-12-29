import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: "static",
  site:"https://Pablo400-glitch.github.io",
  base: '/Portfolio',
  integrations: [tailwind()],
  redirects: {
    '/': '/es'
  }
});