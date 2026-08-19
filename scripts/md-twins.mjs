// Post-build: write a markdown twin of every page (/faq/ -> /faq.md) plus llms.txt
// and llms-full.txt, so AI crawlers read clean text instead of parsing our HTML.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { htmlToMarkdown, decode } from './html-to-md.mjs';

const SITE = 'https://niyora.com';
const DIST = 'dist';
// Same exclusions as the sitemap: unpicked homepage variants and the sandbox.
const SKIP = /^(lab|demo)(\/|$)/;

const SECTIONS = [
  ['', 'Home'],
  ['blog', 'Blog'],
  ['compare', 'How Niyora compares'],
  ['pms', 'PMS symptoms'],
  ['research', 'Research'],
];

function pages(dir = DIST, base = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return pages(join(dir, e.name), base ? `${base}/${e.name}` : e.name);
    return e.name === 'index.html' && !SKIP.test(base) ? [{ slug: base, file: join(dir, e.name) }] : [];
  });
}

const meta = (html, re) => decode(html.match(re)?.[1] ?? '').trim();

const built = pages()
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map(({ slug, file }) => {
    const html = readFileSync(file, 'utf-8');
    const title = meta(html, /<title>([\s\S]*?)<\/title>/i);
    const description = meta(html, /<meta name="description" content="([^"]*)"/i);
    const url = `${SITE}/${slug ? `${slug}/` : ''}`;
    const mdPath = join(DIST, `${slug || 'index'}.md`);
    const body = `---\ntitle: ${title}\ndescription: ${description}\nurl: ${url}\n---\n\n${htmlToMarkdown(html, SITE)}`;
    mkdirSync(dirname(mdPath), { recursive: true });
    writeFileSync(mdPath, body);
    return { slug, title, description, body, mdUrl: `${SITE}/${slug || 'index'}.md` };
  });

const section = (slug) => (slug.includes('/') ? slug.split('/')[0] : slug === '' ? '' : 'page');
const label = (key) => SECTIONS.find(([k]) => k === key)?.[1] ?? 'Pages';

const index = [
  '# Niyora',
  '',
  '> A private iPhone app for the days before your period. Reflect on a hard moment, regulate in about a minute, respond with a clearer head. No account, and your personal details are stripped before anything is sent.',
  '',
  'Every page below is also served as markdown: add .md to the page URL. The full text of the site is at ' +
    `${SITE}/llms-full.txt. The research the app is built on is published as open data at ${SITE}/data/research.json.`,
  '',
];
for (const [key] of [...SECTIONS, ['page']]) {
  const group = built.filter((p) => (SECTIONS.some(([k]) => k === section(p.slug)) ? section(p.slug) : 'page') === key);
  if (!group.length) continue;
  index.push(`## ${label(key)}`, '');
  for (const p of group) index.push(`- [${p.title}](${p.mdUrl}): ${p.description}`);
  index.push('');
}

writeFileSync(join(DIST, 'llms.txt'), index.join('\n'));
writeFileSync(join(DIST, 'llms-full.txt'), built.map((p) => p.body).join('\n\n---\n\n'));
console.log(`[md-twins] ${built.length} .md pages, llms.txt, llms-full.txt`);
