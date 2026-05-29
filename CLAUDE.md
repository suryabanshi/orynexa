# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from within `orynexa-webapp/`:

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
npm run build      # production build
npm run lint       # run Next.js ESLint
```

There is no test runner configured. The CI pipeline runs Datadog Synthetic tests (tag `e2e-tests`) against a deployed environment on push/PR to `main`, using `DD_API_KEY` and `DD_APP_KEY` repository secrets.

## Architecture

This is a single-package Next.js App Router project (`orynexa-webapp/`) — a one-page marketing/landing site with no backend, no API routes, and no state management.

**File layout:**
- `app/layout.tsx` — root layout; sets `<html>`, `<body>`, and page-level metadata
- `app/page.tsx` — the entire page; all section content is defined as inline arrays at the top of this file
- `app/globals.css` — all styles; uses plain CSS with custom properties (no Tailwind, no CSS Modules)

**Styling conventions:**
- Design tokens live in `:root` in `globals.css` (`--core-black`, `--nexus-blue`, `--gold`, `--emerald`, etc.)
- Layout uses CSS Grid; responsive breakpoint is `@media(max-width: 900px)` which collapses multi-column grids to single column
- Font stack: Inter / Noto Sans JP for body; Orbitron / Rajdhani for the `.logo` wordmark; Space Grotesk for `h1`

**Content model:**
- Services and subsystem cards are plain arrays of `[title, description, LucideIcon]` tuples rendered by `.map()` in `page.tsx` — add or edit entries there
- Section IDs (`#home`, `#builds`, `#layers`, `#subsystems`, `#founder`, `#contact`) are used by the nav links

**Static assets:**
- Images are served from `public/`; the hero banner is `public/header-banner.jpg` and the founder photo is `public/founder-ceo.jpg`

**TypeScript:** `strict` mode is disabled (`tsconfig.json`); type checking is non-strict.

**Deployment:** Vercel (import the GitHub repo, deploy, configure custom domain via A record `76.76.21.21` / CNAME `cname.vercel-dns.com`).
