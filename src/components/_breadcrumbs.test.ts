import { describe, it, expect } from 'vitest';
import { breadcrumbs } from './_breadcrumbs';

describe('breadcrumbs', () => {
  it('always starts at Home and numbers the trail from one', () => {
    const b = breadcrumbs([{ name: 'Research', href: '/research/' }, { name: 'Gaps', href: '/research/gaps/' }]);
    expect(b.itemListElement.map((i) => i.name)).toEqual(['Home', 'Research', 'Gaps']);
    expect(b.itemListElement.map((i) => i.position)).toEqual([1, 2, 3]);
  });

  it('makes every item an absolute niyora.com url', () => {
    const b = breadcrumbs([{ name: 'Anxiety', href: '/pms/anxiety/' }]);
    expect(b.itemListElement[1].item).toBe('https://niyora.com/pms/anxiety/');
  });
});
