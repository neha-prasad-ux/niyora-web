// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Blog posts carry a real date, so they get a real lastmod. Nothing else does:
// a build-time stamp on every URL is noise Google learns to ignore.
const postDates = Object.fromEntries(
  readdirSync('./src/content/blog')
    .filter((f) => f.endsWith('.md'))
    .map((f) => [
      `/blog/${f.replace(/\.md$/, '')}/`,
      readFileSync(`./src/content/blog/${f}`, 'utf-8').match(/^date:\s*(\S+)/m)?.[1],
    ]),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://niyora.com',
  integrations: [
    // /lab holds unpicked homepage variants and /demo is a sandbox. Near-duplicate
    // homepages in the index would compete with the real one.
    sitemap({
      filter: (page) => !/\/(lab|demo)\//.test(page),
      serialize: (item) => {
        const date = postDates[new URL(item.url).pathname];
        return date ? { ...item, lastmod: new Date(date).toISOString() } : item;
      },
    }),
  ],
});
