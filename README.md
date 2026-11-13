# Release Ledger

**Live site: https://crowdedleopard.github.io/copilot-feature-wiki/**

An LLM-maintained wiki of Microsoft Copilot, Power Platform and Modern Work changes, written for the
service owners and administrators who have to run them. Every briefing rates a feature for risk, cost
and impact, states its licensing, scope and default state, sets out governance steps and admin
controls, and cites Microsoft's own documentation. Each one can be downloaded as an A4 PDF or as
Markdown with its front matter intact.

The site is rebuilt every day at 06:00 UTC by GitHub Actions.

## How it works

The repository follows the [LLM wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f):
raw sources are never edited, the wiki is the compiled layer, one schema file is both the operating
manual and the system prompt, and an append-only log records every run.

| Layer | Path | What it is |
| --- | --- | --- |
| Schema | `wiki/SCHEMA.md` | Page format, rating scales, voice and refresh rules. Also the compile system prompt. |
| Raw | `raw/roadmap/items/*.json` | Immutable snapshots of in-scope Microsoft 365 Roadmap items. |
| Wiki | `wiki/features/*.md` | One briefing per feature, validated front matter plus eight fixed sections. |
| | `wiki/concepts/*.md` | Background pages the briefings link to (Copilot Credits, Managed Environments, agent identity, data policies). |
| | `wiki/digests/*.md` | One page per ISO week, regenerated daily. |
| | `wiki/index.md`, `wiki/log.md`, `wiki/lint-report.md` | Catalogue, append-only run log, latest lint result. |
| Data | `data/*.json` | Catalog, work queue, stats and lint output used by the site. |
| Pipeline | `pipeline/*.mjs` | `ingest`, `compile` (API) or `compile-tasks` + `write-briefing` + `compile-finish` (Claude Code), `lint`, `index`, `digest`, `pdf`, `screenshots`. Shared briefing logic in `pipeline/lib/briefing.mjs`. |
| Site | `src/`, `astro.config.mjs` | Astro static site. Design tokens in `src/styles/tokens.css`. |
| Taxonomy | `config/taxonomy.mjs` | Desks, product mapping, rating scales. Shared by the pipeline and the site. |

### The daily run (`.github/workflows/daily.yml`)

1. **Ingest** downloads the Microsoft 365 Roadmap, keeps in-scope items, snapshots them to `raw/`,
   and queues items that are new, changed status or were edited by Microsoft.
2. **Compile** has Claude write or rewrite briefings for the top of the queue, grounded with the
   Microsoft Learn MCP server and web search over Microsoft domains. It runs one of two ways,
   chosen by which repository secret exists (Settings → Secrets and variables → Actions):
   - `CLAUDE_CODE_OAUTH_TOKEN` (preferred): runs Claude Code through the official GitHub Action on a
     Claude Pro or Max subscription. Generate the token on your own machine with `claude setup-token`
     and paste the `sk-ant-oat01-…` value into the secret. The agent follows
     `pipeline/prompts/compile-agent.md`, and every page still goes through the same validator and
     renderer (`pipeline/write-briefing.mjs`).
   - `ANTHROPIC_API_KEY` (fallback): calls the API directly from `pipeline/compile.mjs`.
   - Neither: the step is skipped and everything else still runs.
3. **Lint** validates every page against the schema, quarantines failures, and flags broken links,
   status drift and stale pages.
4. **Index and digest** regenerate the catalogue, stats and this week's digest.
5. The changes are committed back to `main`, the site is built, each briefing is rendered to PDF,
   and the result is deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev              # Astro dev server
npm run ingest           # refresh raw/ and data/ from the roadmap
ANTHROPIC_API_KEY=... npm run compile   # write briefings (COMPILE_LIMIT, COMPILE_ONLY=<id,id>)
npm run lint:wiki && npm run index:wiki && npm run digest
npm run build && npm run pdf            # site + dist/downloads/*.pdf
npm run screenshots                     # screenshots/ for design review
```

## Correcting a page

Every page links to its Markdown file on GitHub. Edit the body freely; keep the front matter valid
(`npm run lint:wiki` tells you if it is not). Body edits survive the next run unless the roadmap
entry changes materially, in which case the page is rewritten and the change is noted in its log.

Release Ledger is independent and is not produced, endorsed or reviewed by Microsoft. Ratings are
editorial judgements; verify licensing and admin behaviour against the linked documentation.
