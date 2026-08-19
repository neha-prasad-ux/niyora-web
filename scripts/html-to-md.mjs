// Turns a built page's <main> into markdown for the .md twin that LLM crawlers read.
// The input is our own generated HTML (simple, semantic), not arbitrary web pages,
// so a small regex pass beats pulling in turndown plus a table plugin.

const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

export function decode(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isNaN(n) ? m : String.fromCodePoint(n);
    }
    return NAMED[e.toLowerCase()] ?? m;
  });
}

const collapse = (s) => s.replace(/\s+/g, ' ').trim();
const strip = (s) => collapse(decode(s.replace(/<[^>]+>/g, '')));

function absolute(href, site) {
  if (!href || href.startsWith('#')) return href;
  return href.startsWith('/') ? site.replace(/\/$/, '') + href : href;
}

/** Inline markup inside one block: bold, italic, links. */
function inline(html, site) {
  const out = html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (m, t, c) => (strip(c) ? `**${strip(c)}**` : ''))
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (m, t, c) => (strip(c) ? `_${strip(c)}_` : ''))
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (m, c) => `\`${strip(c)}\``)
    .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, c) =>
      strip(c) ? `[${strip(c)}](${absolute(href, site)})` : '')
    .replace(/<[^>]+>/g, ' ');
  return collapse(decode(out));
}

function tableToMarkdown(html, site) {
  const rows = [...html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((r) =>
    [...r[1].matchAll(/<(td|th)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((c) => inline(c[2], site).replace(/\|/g, '\\|')));
  if (!rows.length) return '';
  const width = Math.max(...rows.map((r) => r.length));
  const pad = (r) => [...r, ...Array(width - r.length).fill('')];
  const [head, ...body] = rows;
  return [
    `| ${pad(head).join(' | ')} |`,
    `| ${Array(width).fill('---').join(' | ')} |`,
    ...body.map((r) => `| ${pad(r).join(' | ')} |`),
  ].join('\n');
}

/**
 * The compare pages lay their two columns out as a grid of divs, so in reading
 * order the sides are indistinguishable. Label each cell before flattening.
 */
function labelCompareCells(html) {
  return html.replace(
    /<div class="([^"]*\bcompare-(?:head|cell)\b[^"]*)"[^>]*>([\s\S]*?)<\/div>/gi,
    (m, cls, inner) => {
      const side = /\bthem\b/.test(cls) ? 'Other apps' : /\bus\b/.test(cls) ? 'Niyora' : null;
      if (!side) return m;
      return `<p>${side}: ${inner.replace(/<\/?p\b[^>]*>/gi, ' ')}</p>`;
    });
}

export function htmlToMarkdown(html, site = 'https://niyora.com') {
  let s = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  s = s.replace(/<(script|style|svg|noscript|template)\b[\s\S]*?<\/\1>/gi, '');
  s = labelCompareCells(s);
  s = s.replace(/<table\b[\s\S]*?<\/table>/gi, (t) => `\n\n${tableToMarkdown(t, site)}\n\n`);
  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (m, n, c) => `\n\n${'#'.repeat(+n)} ${inline(c, site)}\n\n`);
  s = s.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (m, c) => `\n- ${inline(c, site)}`);
  s = s.replace(/<(p|blockquote|figcaption)\b[^>]*>([\s\S]*?)<\/\1>/gi, (m, t, c) => `\n\n${inline(c, site)}\n\n`);
  // Leaf divs and spans carry real copy on this site (eyebrows, stat numbers).
  for (let i = 0; i < 6; i++) {
    const next = s.replace(/<(div|span)\b[^>]*>([^<]*)<\/\1>/gi, (m, t, c) =>
      c.includes('\n') ? `\n${c}\n` : strip(c) ? `\n\n${inline(c, site)}\n\n` : '\n');
    if (next === s) break;
    s = next;
  }
  s = inlineLeftovers(s, site);
  return s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

/** Whatever survives is wrapper markup plus loose text and links. */
function inlineLeftovers(s, site) {
  return s
    .split('\n')
    .map((line) => (/[<&]/.test(line) ? inline(line, site) : line))
    .join('\n');
}
