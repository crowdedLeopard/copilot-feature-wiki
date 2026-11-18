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
- The brief for a new briefing or a refresh lists "Controls the independent check has already confirmed":
  `pipeline/lib/confirmed-controls.mjs` collects every admin path and call on a live page whose check found no fault
  with that side (`confirmedSides`; a Graph or REST call only when it is a method and a path alone, the form SCHEMA asks
  for) and `confirmedForItem` picks the ones on pages about the same products, then on the topic's concept pages, then
  on the rest of the topic (16 paths, 10 calls). They are leads: the writer opens the page and uses the wording as
  given (SCHEMA, "Governance controls"). A correction's brief does not carry the list, because a correction adds no rows.
- `raw/` is immutable source material. Do not edit by hand.
- Message Center posts are the second source. `pipeline/ingest-message-center.mjs` reads one tenant's posts through
  Microsoft Graph (app permission `ServiceMessage.Read.All`; federated credential or `MC_CLIENT_SECRET`; skipped with a
  note until `MC_TENANT_ID` and `MC_CLIENT_ID` are set), keeps only posts whose text Microsoft sends to every tenant
  (`publicationCheck` in `pipeline/lib/message-center.mjs`: Data privacy tag, attachments, tenant words, email
  addresses, GUIDs and single-organisation wording are withheld, ids and reason codes only recorded) and stores them
  under `raw/message-center/` with the index `data/message-center.json`. The shared module files each post under a
  topic (linked roadmap item, then services, then title), gives the writer and verifier the posts for an item as
  record facts (`briefSection`), and `ingest.mjs` queues a `message-center` refresh when a post is newer than the
  briefing. An act-by date within about 90 days makes a briefing `act-now` (SCHEMA). The site shows deadlines only
  (Chris, 17 Nov 2026: the page must not recreate the admin centre): `/message-centre/` is the act-by list, each
  date linked to its briefing where one exists and otherwise to the post in the reader's own Message Center; matching
  briefings, the home page and the digest show the same dates. There is no page per post and no general feed; all of
  it hides until the source is connected. Setup for the tenant owner: `docs/message-centre.md`.
- `wiki/features/*.md` are the briefings. Front matter is validated by `pipeline/lib/schema.mjs` and `src/content.config.ts`.
- `pipeline/` holds the daily jobs: `ingest` (roadmap), `compile` (LLM writes briefings), `lint`, `index`, `digest`, `pdf`.
  Curation runs chain: `chain-next.mjs` records the run's AI credits in `data/spend.json` and, while the day stays under
  `COMPILE_DAILY_CREDITS` (15,000) and the run wrote something, the workflow starts the next run at once (`COMPILE_CHAIN=off`
  stops it). The four scheduled runs remain as the fallback.
  The compile step has three writers that share `pipeline/lib/briefing.mjs`: the Copilot CLI path (default:
  `compile-tasks.mjs` prepares `data/compile-tasks/`, `compile-copilot.mjs` runs one `copilot -p` session per item through
  `pipeline/lib/copilot.mjs`, each session follows `pipeline/prompts/compile-agent.md` via the one-item wrapper
  `compile-copilot-item.md` and calls `write-briefing.mjs`, `compile-finish.mjs` records the run and the AI credits), the
  Claude Code agent path (same tasks, the action follows `compile-agent.md` directly) and `compile.mjs` (direct Anthropic API).
  The workflow picks the writer from the `COMPILE_WRITER` repository variable. Keep page-writing logic in the shared module.
- Every briefing is checked by a second model before it is published: `verify-tasks.mjs` prepares `data/verify-tasks/`
  (pre-check file per page: dead links, admin-path words missing from the cited page, cmdlets missing from their reference,
  roadmap drift), `verify-run.mjs` runs one fresh session per page (Copilot CLI by default, `VERIFY_ENGINE` = copilot |
  claude-code | api | off) that follows `pipeline/prompts/verify-agent.md` and writes a verdict file, and
  `record-verification.mjs` / `pipeline/lib/verify.mjs` apply it: the verdict schema is `pipeline/lib/verify-schema.mjs`,
  severity alone decides (any blocker, or three majors, holds), a held page moves to `wiki/_held/` (not built) and
  `requeue-held.mjs` puts it at the front of the next writer run with the findings appended, up to `VERIFY_MAX_REVISIONS`
  (4 failed checks, three correction rounds; raised from 3 on 16 Nov 2026 for the pages whose findings predated PR 29 and kept once they cleared, since a further round costs about 85 AI credits and a parked page waits for a person; `holdReason` gives a page parked under the old cap its remaining round). A page at the cap is queued once more as a
  `fresh-draft` task (`parkedNext`; `compile-tasks.mjs` briefs it without the held text, `write-briefing.mjs` keeps its slug and
  history), and only a page whose fresh draft failed too is parked for a person. Each report records `standard` (`STANDARD_HASH`:
  a hash of SCHEMA.md and the two prompts), and when that changes a parked page gets one more fresh draft under the new rules. A correction is a repair, not a rewrite: `findingsComment` lists the faults to
  correct and the minor findings separately, and the writer carries the rest of the page over word for word and adds no
  control rows ("Correcting a held briefing" in `compile-agent.md`; pages that failed a second check failed on text the
  correction had added). Passing pages carry `verification` in their front matter; the full report is
  `wiki/verification/<slug>.json`, rendered as "How this briefing was checked" by `src/components/CheckReport.astro`. A failed check holds the
  page whenever it was created (Chris, 16 Nov 2026: "hide failures once checked"); `VERIFY_GRACE_EXISTING=1` would let a page
  created before 2026-11-16 stay live as `needs-correction` with a notice after its first failure, and `requeue-held.mjs`
  (`holdNeedingCorrection`) takes any page still online with that notice offline when the grace is off.
  `verify-finish.mjs` holds anything written in the run that was not checked, writes `data/held.json` and logs the run.
  On Copilot the verifier tries `gpt-6.1-sol` first (a different family from the writer), then `VERIFY_FALLBACK_MODELS`
  (default `gpt-5.6-sol,claude-sonnet-5.5,auto`); it uses the shared error classifier in `pipeline/lib/copilot.mjs`, stops
  the run on a refused token, runs `VERIFY_PARALLEL` (3) sessions at once, and spends at most `VERIFY_MAX_CREDITS`
  per page, `VERIFY_MAX_RUN_CREDITS` (2,000) and `VERIFY_RUN_MINUTES` (75) per run, so the job always reaches the
  commit step. `holdUnverified` never holds a page that was published at the run's start (`livedAtRunStart`, git
  `cat-file` on HEAD or `VERIFY_RUN_START_REF`): a rewrite the verifier did not reach stays live, not yet checked.
  Continuous checking (Chris, 16 Nov 2026: "completely factually correct and continuously verified"): the rule is
  `VERIFICATION` in `config/taxonomy.mjs`. The stamp carries `hash` (`pageHash`: front matter minus the stamp, log and
  dates, plus the body minus the findings comment), so `verificationDue` queues a page whose text changed at all
  (`changed-since-check`), whose cited Microsoft page changed (`source-changed`, from `pipeline/watch-sources.mjs`:
  a no-model step in every curation run that re-reads each learn.microsoft.com page the live pages cite once a day, paced
  and stopping on sustained HTTP 429 (Learn rate-limited 581 of 743 pages on 17 Nov 2026 when every run re-read them all), into `data/sources.json`,
  `pipeline/lib/sources.mjs`, change = Microsoft's `ms.date` moved) or whose check is older than `recheckDays` (7). Each
  check writes a line into the page's `changes` log (`checkNote`). `VERIFY_LIMIT` (24) is the number of such pages a run
  checks on top of everything it wrote. The site's `/accuracy/` page shows every page's state and next check.
- Each compile run is shared equally across the topics by `selectQueue` in `pipeline/lib/briefing.mjs` (refreshes first,
  then one item per topic in turn). `priorityFor` in `pipeline/ingest.mjs` orders items within a topic by admin relevance,
  recency and lead time. It must not weight topics against each other: that is how Modern Work went unbriefed until
  November 2026. `COMPILE_TOPIC` spends a whole run on one topic's backlog.
- Concept pages (`wiki/concepts/*.md`) explain one mechanism several briefings depend on, and are named after a tag
  (slug = tag id). `pipeline/lib/concepts.mjs` proposes them from the tags on live briefings (`conceptCandidates`; the
  rules are `CONCEPTS` in `config/taxonomy.mjs`), `compile-tasks.mjs` gives them up to `CONCEPTS.perRun` of a run's tasks
  (out of `COMPILE_LIMIT`, not on top; `COMPILE_CONCEPTS=0` turns them off), and the writer follows
  `pipeline/prompts/concept-agent.md` (one-item wrapper `concept-copilot-item.md`) and calls `write-concept.mjs`, which
  either writes the page or records a decline in `data/concepts.json`. `covers` in a concept's front matter lists other
  tags it explains; a briefing carrying the slug tag or a covered tag links to it on the site and in the Atlas. Concept
  pages go through the same verifier, hold and requeue as briefings; `pageKind` in `pipeline/lib/verify.mjs` picks the
  schema and the home directory. Pages without `kind: concept` were written by hand and are queued for a rewrite.
- Briefings are never deleted. `pipeline/lib/lifecycle.mjs` archives a page in place (front-matter `archived` block, a
  dated change note) when ingest finds its roadmap item cancelled, or missing from the feed for `LIFECYCLE.removedGraceDays`
  (`data/lifecycle.json` tracks last-seen dates). The site keeps the page's URL, lists it under `/archive/` and leaves it
  out of lists, the Atlas and the digest. Live pages untouched for `LIFECYCLE.reviewAfterDays` are queued as `review-due`,
  which takes its turn in the topic lanes rather than jumping the queue. Rules live in `config/taxonomy.mjs`.
- `.github/workflows/teams-digest.yml` posts one Adaptive Card a week (Monday 07:17 UTC) to a Teams channel through a
  Workflows webhook held in the `TEAMS_WEBHOOK_URL` secret. `pipeline/teams-digest.mjs` builds it from the committed
  briefings with `pipeline/lib/teams-card.mjs` (Act now first, one line each on risk, cost and control, taken from the
  ratings, the rationale comment and the first documented control); no model runs. Without the secret it posts nothing
  and shows the card in the run summary. `pipeline/teams-digest-preview.mjs` renders the card to PNG for review.
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
