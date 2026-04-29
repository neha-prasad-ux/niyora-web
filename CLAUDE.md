# CLAUDE.md

Notes for Claude Code working on this repo.

> See [AGENTS.md](./AGENTS.md) for the rules that apply to **any** AI agent. This file adds Claude Code-specific tips on top of those.

## Quick orientation

- **What this is**: the public marketing site at niyora.com. Astro 6, static.
- **What this is not**: the app. App source lives at [neha-prasad-ux/niyora](https://github.com/neha-prasad-ux/niyora). If a request is about app behavior (reminders, soul tiers, breathing UI), you're in the wrong repo.
- **Why it matters**: this is the first thing prospects see. Every visual change ships to production within a minute of merge.

## Default workflow

1. **Read** [README.md](./README.md), [AGENTS.md](./AGENTS.md), [DESIGN.md](./DESIGN.md) before making nontrivial changes. They're short.
2. **Branch**: `feat/`, `fix/`, `chore/`, or `docs/` prefix. Never commit to `main`.
3. **Verify locally**: `pnpm build` must succeed. For visual changes, also `pnpm preview` and eyeball the result.
4. **Open a PR** with `gh pr create`. The PR description should answer *what* and *why* in two or three lines. No marketing language in PR descriptions.
5. **Merge** after the user reviews. CI deploys to Cloudflare Pages on merge to `main`.

## House style

- **Terse responses to the user.** Default to one sentence. Ask a question instead of explaining when in doubt.
- **No em dashes (—) in user-facing copy.** Use periods, commas, or new lines. This applies to site copy and to commit messages.
- **No AI attribution in commits.** A global commit-msg hook strips `Co-Authored-By: Claude` and similar lines automatically. Don't add them in the first place.
- **No comments narrating obvious code.** If a future reader can read the code and understand what it does, the comment is noise.
- **No new dependencies without a clear justification.** This is a static site; bundle size is brand.

## Things specific to this repo

- The orb's color story comes from `data-hue` and `data-sat` attributes on each `<section>`. Adding a new section means adding those attributes, otherwise the orb won't shift on it.
- Astro components carry scoped styles. Don't reach for global CSS unless the value is genuinely shared across the site (then it lives in `Base.astro`).
- `pnpm dev` boots at `localhost:4321`, not 3000.
- The repo is **private**. Don't reference an open-source license posture in copy without checking — the LICENSE is MIT but the repo visibility is private until launch.

## When you're unsure

- Stop and ask. The user is a non-developer founder. They prefer to be asked one focused question over reading a wall of context.
- For visual judgment calls (the orb, color tiers, typography), default to *less* — the design lives or dies by restraint.

## What lives where

| You want to change… | Open this |
|---|---|
| The hero or any landing section | `src/pages/index.astro` |
| The orb visual or animation | `src/components/OrbStage.astro` |
| Privacy policy / terms text | `src/pages/privacy/index.astro` / `src/pages/terms/index.astro` (legal — confirm before editing) |
| Site-wide head, fonts, base body styles | `src/layouts/Base.astro` |
| CI / deploy logic | `.github/workflows/deploy.yml` |
| What the agent should do | this file or `AGENTS.md` |
