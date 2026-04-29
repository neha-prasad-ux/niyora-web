# DESIGN.md

The visual and tonal language for niyora.com. The site sells a feeling more than a feature list, so design choices matter as much as copy.

## Brand promise

> Calm in 60 seconds. Privacy-first. Nothing leaves your Mac.

Three claims, in this order:
1. The product is fast and small.
2. The product respects you.
3. The product earns trust through architecture, not promises.

Every visual decision should reinforce at least one of these. If a change doesn't, it probably shouldn't ship.

## Voice

- **Quiet, not chirpy.** No exclamation points. No "amazing," "incredible," "game-changing."
- **Direct, not preachy.** State what the product does. Trust the reader to decide.
- **Founder-spoken, not corporate.** First person works. "We" never works (there is no we yet).
- **No em dashes.** Use periods, commas, or new lines.
- **No emojis** in body copy. The orb is the visual cue; it doesn't need help.

## The orb

The hero element is a soft-edged radial-gradient orb that drifts as you scroll and shifts hue/saturation between sections. It is the brand. Treat it carefully.

- **Five tier colors** match the app's Soul tiers in `src/tiers.ts` (in the app repo). If you change one, change both.
- **Drift speed** is `scrollY * 0.08` in `OrbStage.astro`. Slower than scroll, faster than parallax-stopped.
- **`prefers-reduced-motion`** disables the drift entirely. Always test both states.
- **No bouncing, easing-out, or spring physics.** The orb behaves like breath: continuous, unhurried, with no abrupt stops.

## Soul tier palette

The five tier names and rough hue/sat values, in order of practice progression:

| Tier | Hue (HSL) | Saturation | Feeling |
|---|---:|---:|---|
| Spark | ~30 (warm orange) | 70% | First flame, beginner energy |
| Glow | ~335 (rose) | 70% | Settled, regular practice |
| Shine | ~280 (violet) | 65% | Confidence, deeper work |
| Radiance | ~230 (deep blue) | 65% | Steady, embodied |
| Brilliance | ~210 (cool blue) | 60% | Quiet mastery |

Each landing-page section anchors to one of these via `data-hue` / `data-sat` attributes. The IntersectionObserver in `OrbStage.astro` reads them and updates CSS custom properties.

## Typography

- **Body**: Poppins (300/400/500/600). Light enough to feel calm, weighted enough to be legible.
- **Headings**: Same family, weight 500–600. Generous line-height (1.2 for headings, 1.6 for body).
- **No display fonts, no script fonts, no novelty fonts.** Ever.
- **No font CDNs other than Google Fonts** for now. If we ever drop Google Fonts (privacy posture), self-host via `@fontsource`. Don't introduce a new CDN.

## Layout

- **Single scrollable column.** No sidebars, no sticky nav, no megafooter.
- **Wide gutters on desktop** (max content width ~720–780px). The orb needs negative space.
- **Full-bleed sections** with internal padding, separated by hue shifts rather than dividers.
- **Mobile**: single column, smaller orb, identical structure. No "mobile-first" CSS framework involved.

## Color and depth

- **Background**: `#07060f` — near-black with a faint indigo cast. Lets the orb glow without competing.
- **Text**: `#ffffffeb` (white at ~92% alpha). Slightly softer than pure white, easier on the eye for long reads.
- **Accents**: come from the orb. Avoid hard accent colors elsewhere; let the orb's hue bleed into eyebrow text and tier pills if needed.
- **Vignette**: a subtle dark radial overlay on the orb stage. Increases focus without muddying the page.

## Interaction

- **No hover states more elaborate than a slight opacity or color shift.**
- **No carousel, no modal, no toast, no scroll-jacking.** The page scrolls and the orb responds. That's the whole interaction grammar.
- **CTAs**: a single primary "Download for macOS" plus an optional ghost "How it works" anchor. Never two primary CTAs side by side.
- **Links** inherit text color and gain underline on hover. No bright blue.

## Performance posture

- **Static HTML and CSS, no client-side framework runtime.** Astro ships zero JS by default; we only have a few tens of lines of inline `<script type="module">` for the orb and IntersectionObserver.
- **Bundled fonts** when we move off Google Fonts.
- **No third-party analytics, pixel, or chat widget.** If a future request asks for one, push back hard.
- **Lighthouse**: aim for 100 on Accessibility and Best Practices, 95+ on Performance. Don't ship anything that drops Performance below 90.

## Privacy in the visual

- The site itself should embody the privacy promise. No outbound runtime requests beyond fonts. No scripts from third parties. The user should be able to inspect the page in DevTools and see only first-party requests (and Google Fonts until we self-host).

## Accessibility

- **Color contrast**: text on background ≥ 7:1. The orb's hue shift must not affect contrast on body text — it only tints non-essential decorative areas.
- **Reduced motion**: respected (orb stops drifting).
- **Focus rings**: visible. Don't suppress them globally.
- **Headings**: a single `<h1>` per page, semantic `<h2>` for sections, `<h3>` for sub-blocks.

## What's intentionally absent

- A blog
- A pricing page (the app is free for now)
- Testimonials or logos (we haven't earned them yet)
- A team page (single founder)
- A "trusted by" rail
- Any scroll-triggered animation other than the orb

If a future PR adds one of these, it should justify the addition against this list — not just "I think we need it."
