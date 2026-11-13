# Release Ledger

An LLM-maintained wiki of Microsoft Copilot, Power Platform and Modern Work changes, written for
service owners and administrators. Static site built with Astro, deployed to GitHub Pages, curated
daily by GitHub Actions.

- `wiki/SCHEMA.md` is the operating manual and the system prompt for the curation step. Read it first.
- `raw/` is immutable source material. Do not edit by hand.
- `wiki/features/*.md` are the briefings. Front matter is validated by `pipeline/lib/schema.mjs` and `src/content.config.ts`.
- `pipeline/` holds the daily jobs: `ingest` (roadmap), `compile` (LLM writes briefings), `lint`, `index`, `digest`, `pdf`.
  The compile step has two implementations that share `pipeline/lib/briefing.mjs`: `compile.mjs` (direct API) and the
  Claude Code agent path (`compile-tasks.mjs` prepares `data/compile-tasks/`, the agent follows `pipeline/prompts/compile-agent.md`
  and calls `write-briefing.mjs` per item, `compile-finish.mjs` records the run). Keep page-writing logic in the shared module.
- `src/` is the Astro site. Design tokens live in `src/styles/tokens.css`.

Commands: `npm run dev`, `npm run build`, `npm run daily` (ingest, compile, lint, index), `npm run pdf` (after build).

The compile step needs a `CLAUDE_CODE_OAUTH_TOKEN` (Claude subscription, via the Claude Code GitHub Action) or an
`ANTHROPIC_API_KEY` repository secret. Without either, the pipeline still ingests and lints, and the site still builds.
