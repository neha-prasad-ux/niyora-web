import { describe, it, expect } from 'vitest';
import { htmlToMarkdown, decode } from './html-to-md.mjs';

const page = (body: string) => `<html><body><main class="neat">${body}</main></body></html>`;

describe('htmlToMarkdown', () => {
  it('only takes the main content', () => {
    const md = htmlToMarkdown('<header>nav junk</header>' + page('<p>real copy</p>') + '<footer>footer junk</footer>');
    expect(md).toContain('real copy');
    expect(md).not.toContain('junk');
  });

  it('drops scripts, styles and decorative svg', () => {
    const md = htmlToMarkdown(page('<style>.a{color:red}</style><script>var x=1</script><svg><circle/></svg><p>copy</p>'));
    expect(md.trim()).toBe('copy');
  });

  it('makes headings, bold and site-absolute links', () => {
    const md = htmlToMarkdown(page('<h2 class="x">Title</h2><p>a <strong>bold</strong> <a href="/faq/">link</a></p>'));
    expect(md).toContain('## Title');
    expect(md).toContain('**bold**');
    expect(md).toContain('[link](https://niyora.com/faq/)');
  });

  it('labels which side of a compare grid a cell belongs to', () => {
    const md = htmlToMarkdown(
      page('<div class="compare-cell them" data-astro-cid-x><p>They log.</p></div><div class="compare-cell us"><p>We help.</p></div>'),
    );
    expect(md).toContain('Other apps: They log.');
    expect(md).toContain('Niyora: We help.');
  });

  it('keeps a table readable as a pipe table', () => {
    const md = htmlToMarkdown(page('<table><tr><th>Topic</th><th>Papers</th></tr><tr><td>Genetic</td><td>168</td></tr></table>'));
    expect(md).toContain('| Topic | Papers |');
    expect(md).toContain('| --- | --- |');
    expect(md).toContain('| Genetic | 168 |');
  });

  it('keeps blocks on separate lines instead of running them together', () => {
    const md = htmlToMarkdown(page('<div class="honest"><h2>Fair</h2><p>Point.</p></div>'));
    expect(md).toContain('## Fair\n\nPoint.');
  });

  it('decodes entities', () => {
    expect(decode('won&#39;t &amp; can&apos;t')).toBe("won't & can't");
  });
});
