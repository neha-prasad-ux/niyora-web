export interface NavLink { href: string; label: string }
export interface NavGroup { href: string; label: string; links: NavLink[] }

/**
 * Every page on the site belongs to exactly one group, so nothing is reachable
 * only by luck. Blog posts are the one exception: 19 of them belong behind the
 * /blog/ index, not in a dropdown. _nav.test.ts enforces the rest.
 */
export const GROUPS: NavGroup[] = [
  {
    href: '/pms/',
    label: 'Symptoms',
    links: [
      { href: '/quiz/', label: 'Take the two-minute check' },
      { href: '/pms/anxiety/', label: 'Anxiety' },
      { href: '/pms/anger/', label: 'Anger' },
      { href: '/pms/crying/', label: 'Crying' },
      { href: '/pms/brain-fog/', label: 'Brain fog' },
      { href: '/pms/insomnia/', label: 'Insomnia' },
      { href: '/pms/overwhelm/', label: 'Overwhelm' },
      { href: '/pms/', label: 'All symptoms' },
    ],
  },
  {
    href: '/research/',
    label: 'Research',
    links: [
      { href: '/research/', label: 'All 26 findings, graded' },
      { href: '/research/mechanism/', label: 'What is actually happening' },
      { href: '/research/micronutrients/', label: 'Calcium, magnesium, vitamin D' },
      { href: '/research/tools-with-evidence/', label: 'Things actually tested' },
      { href: '/research/differentials/', label: 'Is it PMS, or something else' },
      { href: '/research/inflammation-and-blood-sugar/', label: 'Inflammation and blood sugar' },
      { href: '/research/stress-and-cortisol/', label: 'Stress, history and cortisol' },
      { href: '/research/ovaries-and-nerves/', label: 'Your ovaries and your nerves' },
      { href: '/research/getting-help/', label: 'Getting help' },
      { href: '/research/gaps/', label: 'What nobody has studied' },
      { href: '/research/trials/', label: 'Trials you could join' },
    ],
  },
  {
    href: '/compare/',
    label: 'Compare',
    links: [
      { href: '/compare/privacy/', label: 'What apps do with your data' },
      { href: '/compare/niyora-vs-flo/', label: 'vs Flo' },
      { href: '/compare/niyora-vs-clue/', label: 'vs Clue' },
      { href: '/compare/niyora-vs-stardust/', label: 'vs Stardust' },
      { href: '/compare/niyora-vs-bearable/', label: 'vs Bearable' },
      { href: '/compare/niyora-vs-apple-cycle-tracking/', label: 'vs Apple Cycle Tracking' },
      { href: '/compare/niyora-vs-moody-month/', label: 'vs Moody Month' },
      { href: '/compare/niyora-vs-cara-care/', label: 'vs Cara Care' },
      { href: '/compare/niyora-vs-ai-companion/', label: 'vs an AI companion' },
      { href: '/compare/moon-ai-vs-other-ai/', label: 'Moon vs other AI' },
      { href: '/compare/alternatives-to-mood-trackers/', label: 'Alternatives to mood trackers' },
      { href: '/compare/', label: 'All comparisons' },
    ],
  },
  {
    href: '/blog/',
    label: 'Learn',
    links: [
      { href: '/blog/', label: 'Writing' },
      { href: '/guide/', label: 'The PMS guide' },
      { href: '/faq/', label: 'FAQ' },
      { href: '/changelog/', label: "What's new" },
    ],
  },
  {
    href: '/about/',
    label: 'About',
    links: [
      { href: '/about/', label: 'About Niyora' },
      { href: '/demo/', label: 'See it in motion' },
      { href: '/talk/', label: 'Talk to me' },
      { href: '/privacy/', label: 'Privacy' },
      { href: '/terms/', label: 'Terms' },
    ],
  },
];

export const SINGLES: NavLink[] = [];

export const ALL_NAV_HREFS: string[] = [
  ...GROUPS.flatMap((g) => [g.href, ...g.links.map((l) => l.href)]),
  ...SINGLES.map((l) => l.href),
];
