import { describe, it, expect } from 'vitest';
import { readdirSync, existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ALL_NAV_HREFS, GROUPS } from './_nav';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '../../dist');

function builtPages(dir: string, base = ''): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) out.push(...builtPages(resolve(dir, e.name), `${base}/${e.name}`));
    else if (e.name === 'index.html') out.push(base === '' ? '/' : `${base}/`);
  }
  return out;
}

/** Reachable from the /blog/ index, or deliberately hidden. */
const EXEMPT = (p: string) =>
  p === '/' || p.startsWith('/lab/') || (p.startsWith('/blog/') && p !== '/blog/');

describe('site navigation', () => {
  it('points every nav link at a page that exists', () => {
    const pages = new Set(builtPages(dist));
    if (pages.size === 0) return;
    for (const href of ALL_NAV_HREFS) expect(pages, href).toContain(href);
  });

  it('leaves no page outside the header, so nothing is orphaned again', () => {
    const pages = builtPages(dist);
    if (pages.length === 0) return;
    const inNav = new Set(ALL_NAV_HREFS);
    const missing = pages.filter((p) => !EXEMPT(p) && !inNav.has(p));
    expect(missing, `add these to _nav.ts: ${missing.join(', ')}`).toEqual([]);
  });

  it('gives each dropdown a hub page of its own', () => {
    for (const g of GROUPS) {
      expect(g.href, g.label).toMatch(/^\/[a-z-]+\/$/);
      expect(g.links.length, g.label).toBeGreaterThan(1);
    }
  });

  it('keeps About as its own tab rather than nesting it elsewhere', () => {
    expect(GROUPS.map((g) => g.href)).toContain('/about/');
    for (const g of GROUPS) {
      if (g.href === '/about/') continue;
      expect(g.links.map((l) => l.href), g.label).not.toContain('/about/');
    }
  });

  it('never lists the same destination twice in one dropdown', () => {
    for (const g of GROUPS) {
      const hrefs = g.links.map((l) => l.href);
      expect(new Set(hrefs).size, g.label).toBe(hrefs.length);
    }
  });

  it('renders exactly one footer on every page, never zero and never two', () => {
    const pages = builtPages(dist).filter((p) => !p.startsWith('/lab/'));
    if (pages.length === 0) return;
    for (const page of pages) {
      const file = resolve(dist, page === '/' ? 'index.html' : `${page.slice(1)}index.html`);
      const html = readFileSync(file, 'utf-8');
      const count = html.split('class="site-footer').length - 1;
      expect(count, page).toBe(1);
    }
  });

  it('gives the footer the same sections as the header', () => {
    const pages = builtPages(dist).filter((p) => !p.startsWith('/lab/'));
    if (pages.length === 0) return;
    const file = resolve(dist, `${pages.find((p) => p !== '/')!.slice(1)}index.html`);
    const html = readFileSync(file, 'utf-8');
    for (const g of GROUPS) {
      expect(html, `footer missing ${g.label}`).toContain(`class="foot-title" href="${g.href}"`);
    }
  });

  it('stays small enough to fit a header row', () => {
    expect(GROUPS.length).toBeLessThanOrEqual(5);
  });
});
