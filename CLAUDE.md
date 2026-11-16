# Release Ledger

An LLM-maintained wiki of Microsoft Copilot, Power Platform and Modern Work changes, written for
service owners and administrators. Static site built with Astro, deployed to GitHub Pages, curated
daily by GitHub Actions.

- `wiki/SCHEMA.md` is the operating manual and editorial standard: the system prompt for the writing step and the
  standard the verifier checks against. Read it first. What a briefing may claim, how to research and how ratings are
  decided live there and nowhere else.
- `pipeline/prompts/compile-agent.md` is the writer's run procedure and output format; `pipeline/prompts/verify-agent.md`
  is the independent verifier's method and verdict format. `researchBrief` in `pipeline/lib/briefing.mjs` builds the
  per-item brief, which carries data only. Change wording in those three places, not in workflow files.
- `raw/` is immutable source material. Do not edit by hand.
- `wiki/features/*.md` are the briefings. Front matter is validated by `pipeline/lib/schema.mjs` and `src/content.config.ts`.
- `pipeline/` holds the daily jobs: `ingest` (roadmap), `compile` (LLM writes briefings), `lint`, `index`, `digest`, `pdf`.
  The compile step has three writers that share `pipeline/lib/briefing.mjs`: the Copilot CLI path (default:
  `compile-tasks.mjs` prepares `data/compile-tasks/`, `compile-copilot.mjs` runs one `copilot -p` session per item through
  `pipeline/lib/copilot.mjs`, each session follows `pipeline/prompts/compile-agent.md` via the one-item wrapper
  `compile-copilot-item.md` and calls `write-briefing.mjs`, `compile-finish.mjs` records the run and the AI credits), the
  Claude Code agent path (same tasks, the action follows `compile-agent.md` directly) and `compile.mjs` (direct Anthropic API).
  The workflow picks the writer from the `COMPILE_WRITER` repository variable. Keep page-writing logic in the shared module.
- Each compile run is shared equally across the topics by `selectQueue` in `pipeline/lib/briefing.mjs` (refreshes first,
  then one item per topic in turn). `priorityFor` in `pipeline/ingest.mjs` orders items within a topic by admin relevance,
  recency and lead time. It must not weight topics against each other: that is how Modern Work went unbriefed until
  November 2026. `COMPILE_TOPIC` spends a whole run on one topic's backlog.
- `src/` is the Astro site. Design tokens live in `src/styles/tokens.css`.
- The Atlas (`/atlas/`, the home page teaser and the plate in each briefing's Related section) is one canvas renderer,
  `src/scripts/atlas/engine.ts`, with no dependencies. `src/lib/graph.ts` builds its nodes and links (briefings,
  concepts and shared tags) from the content collections at build time and serves them as `atlas.json`.
  `src/lib/layout.ts` places them in three dimensions: a seeded force layout with one fixed home per topic, on a ring
  around a vertical axis, so the same wiki always gives the same map. The renderer projects it with its own camera
  (turn, tilt, zoom) and picks the opening view from the data. Colours come from the `--topic-*` and `--atlas-*` tokens.
- Tags are kebab-case ids; readers see the names in `wiki/tags.json`, the tag glossary (name, group, one-line description per tag).
  `pipeline/lib/tags.mjs` and `src/lib/tags.ts` read it. The compile step defines new tags (`newTags` in the model output) and never
  overwrites an entry; lint keeps tag lists canonical and adds US Government cloud tags from the roadmap record. Badge, rating,
  status and default-state help text lives in `config/taxonomy.mjs` and is shown as tooltips and in `src/components/Legend.astro`.
- Briefings are filed under one of five topics, defined in `config/taxonomy.mjs` (`TOPICS`). The topic is derived from
  an item's products, never chosen by the LLM. Pages written before November 2026 used `desk:`; `pipeline/lint.mjs`
  rewrites that line to `topic:` if one turns up.

Commands: `npm run dev`, `npm run build`, `npm run daily` (ingest, compile, lint, index), `npm run pdf` (after build).

The compile step runs on the repository owner's GitHub Copilot seat by default (Copilot CLI in Actions; the job's token
needs `copilot-requests: write`, no secret required; an optional `COPILOT_GITHUB_TOKEN` fine-grained PAT with the
"Copilot Requests" permission bills a specific user's seat instead). Spend is capped per briefing and per run
(`COMPILE_ITEM_MAX_CREDITS`, `COMPILE_MAX_CREDITS` repository variables) and logged in `wiki/log.md`. The CLI refuses a
credit cap under 30. `compile-copilot.mjs` preflights the token and model (falling back through `COPILOT_FALLBACK_MODELS`),
retries a fast failure once, writes a plain-English summary and annotations, and only escalates (red run, via the
`escalate` output and `data/last-compile.json`) after two failed runs in a row. Set `COMPILE_WRITER`
to `claude-code` (needs `CLAUDE_CODE_OAUTH_TOKEN`) or `api` (needs `ANTHROPIC_API_KEY`) to use Claude capacity instead.
Without a working writer, the pipeline still ingests and lints, and the site still builds.
