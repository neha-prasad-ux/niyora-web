# AGENTS.md

Conventions for AI agents (Claude Code, Cursor, Copilot, ChatGPT, etc.) working on this repository.

This file follows the [agents.md](https://agents.md) convention: a single, predictable entry point for any agent that lands in this repo.

## What this repo is

Public marketing site for Niyora. Astro 6, static output, deployed to Cloudflare Pages. See [README.md](./README.md) for the full overview.

## What you can change

- Anything in `src/`, `public/`, `astro.config.mjs`, `package.json`, `tsconfig.json`.
- `.github/workflows/deploy.yml` if the deployment story changes — but coordinate, since both `main` and `staging` push paths go through it.
- Doc files (`README.md`, `DESIGN.md`, this file, `CLAUDE.md`).

## What needs care

- Copy in `index.astro`, `privacy/`, `terms/`. The privacy and terms pages are legal text — never reword without confirming with the maintainer.
- The orb visual in `components/OrbStage.astro`. The five tier colors and the parallax cadence are part of the brand, not arbitrary.
- The site has zero outbound runtime requests. Don't introduce trackers, analytics scripts, third-party fonts, or external embeds without explicit approval.

## How to work

1. **Branch off `main`.** Never commit directly to `main`. Branch names: `feat/<thing>`, `fix/<thing>`, `chore/<thing>`, `docs/<thing>`.
2. **Build before pushing.** `pnpm build` must pass — the CI will fail loudly otherwise.
3. **Open a PR.** A PR description should answer: what changed, why, anything visual to spot-check.
4. **Merge to `main`** after review. Cloudflare Pages picks it up automatically.
5. **Use `staging`** for anything visual you want to preview at staging.niyora.com first.

## Conventions

- **Commits**: signed, no AI attribution lines (a global hook strips them automatically).
- **Style**: small `.astro` components, scoped styles inside the component, no CSS frameworks.
- **Em dashes**: don't use `—` in user-facing copy. Use periods, commas, or new lines instead.
- **Comments**: write only when the *why* is non-obvious. Don't narrate what the code does.
- **Bundle weight**: every dependency is a tax on first paint. Justify additions.

## Useful commands

```bash
pnpm install              # install
pnpm dev                  # local dev server
pnpm build                # static build to dist/
pnpm preview              # preview built site
pnpm astro check          # type + content checks (when @astrojs/check is set up)

gh pr create              # open a PR for the current branch
gh run list --limit 5     # see recent CI runs
```

## Things that aren't obvious

- The orb is a stack of radial-gradient divs animated via CSS custom properties driven by scroll position. The five colors live in `OrbStage.astro` — keep them in sync with the app's `tiers.ts`.
- The fonts (Source Serif 4, Inter) are bundled via `@fontsource` packages, not loaded from a CDN. This is intentional for the privacy stance.
- The site is intentionally not internationalised. If a future PR adds i18n, the privacy/terms pages need legal review per locale.
