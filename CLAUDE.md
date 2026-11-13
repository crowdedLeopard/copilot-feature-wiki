# Release Ledger

An LLM-maintained wiki of Microsoft Copilot, Power Platform and Modern Work changes, written for
service owners and administrators. Static site built with Astro, deployed to GitHub Pages, curated
daily by GitHub Actions.

- `wiki/SCHEMA.md` is the operating manual and the system prompt for the curation step. Read it first.
- `raw/` is immutable source material. Do not edit by hand.
- `wiki/features/*.md` are the briefings. Front matter is validated by `pipeline/lib/schema.mjs` and `src/content.config.ts`.
- `pipeline/` holds the daily jobs: `ingest` (roadmap), `compile` (LLM writes briefings), `lint`, `index`, `digest`, `pdf`.
- `src/` is the Astro site. Design tokens live in `src/styles/tokens.css`.

Commands: `npm run dev`, `npm run build`, `npm run daily` (ingest, compile, lint, index), `npm run pdf` (after build).

The compile step needs `ANTHROPIC_API_KEY`. Without it the pipeline still ingests and lints, and the site still builds.
