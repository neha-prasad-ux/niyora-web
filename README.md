# niyora-web

Marketing site for [Niyora](https://niyora.com) — a privacy-first macOS menu-bar app that nudges you to take a breath when you've been at the screen too long.

This is the public-facing site only. The app source lives in [neha-prasad-ux/niyora](https://github.com/neha-prasad-ux/niyora).

## What's here

- Hero with a parallax orb that shifts through the five Soul tiers (Spark, Glow, Shine, Radiance, Brilliance) as you scroll
- Six story sections: signal-driven reminders, soul tier progression, research basis, privacy stance, founder note, final CTA
- `/privacy` and `/terms` pages

## Stack

| Layer | Tech |
|---|---|
| Framework | [Astro 6](https://astro.build/) (static output) |
| Language | TypeScript |
| Styling | Plain CSS in `.astro` components |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com/) |
| CI / deploy | GitHub Actions → `cloudflare/wrangler-action` |
| Package manager | pnpm 9 |
| Node | 22+ |

## Run locally

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output to dist/
pnpm preview      # serve the built site
```

## Project layout

```
niyora-web/
├── src/
│   ├── layouts/Base.astro        # Shared <head>, fonts, base styles
│   ├── components/OrbStage.astro # Parallax orb that drives the tier story
│   └── pages/
│       ├── index.astro           # Landing page
│       ├── privacy/index.astro
│       └── terms/index.astro
├── public/                       # Static assets (favicon, icon.png)
├── astro.config.mjs
└── .github/workflows/deploy.yml  # CI deploy to Cloudflare Pages
```

## Deployment

Two Cloudflare Pages projects, one CI workflow.

| Branch | Pages project | Pages URL | Custom domain |
|---|---|---|---|
| `main` | `niyora-web` | `niyora-web.pages.dev` | `niyora.com`, `www.niyora.com` |
| `staging` | `niyora-web-staging` | `niyora-web-staging.pages.dev` | `staging.niyora.com` |

Pushing to either branch triggers `.github/workflows/deploy.yml`, which builds with pnpm and deploys via Wrangler. Required repo secrets:

- `CLOUDFLARE_API_TOKEN` — token with `Cloudflare Pages: Edit`, `Account Settings: Read`, `User Details: Read`, `Zone: Edit`, `DNS: Edit`
- `CLOUDFLARE_ACCOUNT_ID` — the Niyora Cloudflare account ID

DNS sits in Cloudflare; the apex and `www` use proxied CNAME flattening to the Pages project.

## Conventions

- All commits are signed (SSH).
- Changes land on `main` via PR. Force-pushing `main` is forbidden once branch protection is on.
- `staging` mirrors `main` plus whatever is being previewed; merge `staging` → `main` once verified.
- Keep components small and self-styled. Avoid pulling in CSS frameworks or component libraries — the design hinges on a calm, restrained visual language and bundle weight matters.
- See [DESIGN.md](./DESIGN.md) for the design language, [CLAUDE.md](./CLAUDE.md) and [AGENTS.md](./AGENTS.md) for AI/agent collaboration conventions.

## License

[MIT](./LICENSE) — © 2026 Neha Prasad.
