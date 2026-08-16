// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://niyora.com',
  integrations: [
    // /lab holds unpicked homepage variants and /demo is a sandbox. Near-duplicate
    // homepages in the index would compete with the real one.
    sitemap({ filter: (page) => !/\/(lab|demo)\//.test(page) }),
  ],
});
