# Earthsmart-ittokuya — Project Notes

## Overview

**Earthsmart-ittokuya** is a new initiative branched from the Orynexa platform. It focuses on integrating eco-conscious AI tooling with a curated set of open-source and frontier language models.

---

## Repository Setup

- **Working Branch:** `claude/new-earthsmart-ittokuya-repo-DGxZw`
- **Base Repo:** `suryabanshi/orynexa`
- **Stack:** Next.js (TypeScript), deployed via the `orynexa-webapp` directory

---

## Goals

- [ ] Set up a dedicated GitHub repository for Earthsmart-ittokuya
- [ ] Scaffold the webapp with Earthsmart branding
- [ ] Integrate supported models: Kimi-K2.5, GLM-5, MiniMax, DeepSeek, Qwen, Gemma
- [ ] Add eco-impact dashboard / sustainability metrics panel
- [ ] Connect NAS (buffalonas.jp) for data persistence

---

## Models Supported

| Model       | Provider   | Status   |
|-------------|------------|----------|
| Kimi-K2.5   | Moonshot   | Planned  |
| GLM-5       | Zhipu AI   | Planned  |
| MiniMax     | MiniMax    | Planned  |
| DeepSeek    | DeepSeek   | Planned  |
| Qwen        | Alibaba    | Planned  |
| Gemma       | Google     | Planned  |

---

## Architecture Notes

- **Frontend:** Next.js app in `/orynexa-webapp`
- **Config:** `next.config.ts`, `tsconfig.json`
- **CI/CD:** Datadog Synthetics (`datadog-synthetics.yml`)
- **Network:** NAS integration configured for `buffalonas.jp`

---

## Pending Actions

1. Create standalone GitHub repo `Earthsmart-ittokuya` under `suryabanshi` (requires elevated GitHub token permissions — do via [github.com/new](https://github.com/new))
2. Rebrand webapp header and landing page
3. Write API integration layer for each model provider
4. Define sustainability scoring schema

---

## Notes & Decisions

- **2026-08-25:** Attempted automated repo creation via GitHub MCP — blocked by integration permission (403). Manual creation required.
- Branch `claude/new-earthsmart-ittokuya-repo-DGxZw` is the active development branch.

---

*Last updated: 2026-08-25*
