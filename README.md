# Release Ledger

**Live site: https://crowdedleopard.github.io/copilot-feature-wiki/**

An LLM-maintained wiki of Microsoft Copilot, Power Platform and Modern Work changes, written for the
service owners and administrators who have to run them. Every briefing rates a feature for risk, cost
and impact, states its licensing, scope and default state, sets out governance steps and admin
controls, and cites Microsoft's own documentation. Each one can be downloaded as an A4 PDF or as
Markdown with its front matter intact.

The site is rebuilt every day at 06:00 UTC by GitHub Actions.

The [Atlas](https://crowdedleopard.github.io/copilot-feature-wiki/atlas/) draws the ledger as a map of
linked pages in three dimensions. Every briefing and concept is a point in space, grouped by topic, and
a line joins two pages when one links to the other or when both carry the same tag. The map can be
turned and zoomed, and selecting a point shows its ratings and everything it connects to.

## How it works

The repository follows the [LLM wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f):
raw sources are never edited, the wiki is the compiled layer, one schema file is both the operating
manual and the system prompt, and an append-only log records every run.

| Layer | Path | What it is |
| --- | --- | --- |
| Schema | `wiki/SCHEMA.md` | The editorial standard: readers, evidence rules, research method, rating scales, voice and refresh rules. The writer's system prompt, and what the verifier checks against. |
| Raw | `raw/roadmap/items/*.json` | Immutable snapshots of in-scope Microsoft 365 Roadmap items. |
| | `raw/message-center/*.json` | Microsoft 365 Message Center posts read from the connected tenant, after the publication screen (`data/message-center.json` is the index). See [docs/message-centre.md](docs/message-centre.md). |
| Wiki | `wiki/features/*.md` | One briefing per feature, validated front matter plus eight fixed sections. |
| | `wiki/concepts/*.md` | Concept pages: one mechanism several briefings depend on (a meter, a policy type, an admin centre, an identity), explained once with its own controls table. Named after a tag, proposed by the daily run when enough briefings carry that tag, written and checked like a briefing. |
| | `wiki/digests/*.md` | One page per ISO week, regenerated daily. |
| | `wiki/verification/*.json` | The independent check's report for each briefing: verdict, every statement with its status, source and quote, and the history of earlier checks. Rendered on the page as "How this briefing was checked". |
| | `wiki/_held/*.md` | Briefings held back from publication: failed the check, or written but not yet checked. Not built. The writer takes them from here, with the verifier's findings appended, and rewrites them. |
| | `wiki/tags.json` | The tag glossary: for every tag, the name readers see, its group and a one-line explanation. The compile step adds new tags; existing entries are kept. |
| | `wiki/index.md`, `wiki/log.md`, `wiki/lint-report.md` | Catalogue, append-only run log, latest lint result. |
| Data | `data/*.json` | Catalog, work queue, stats, lint output and the held list (`held.json`) used by the site. |
| Pipeline | `pipeline/*.mjs` | `ingest`; `requeue-held`; `compile-tasks` + `compile-copilot` (Copilot CLI, default) or the Claude Code action + `write-briefing` + `compile-finish`, or `compile` (API); `verify-tasks` + `verify-run` + `verify-finish` (the independent check; `record-verification` applies one verdict, `verify` is the API engine); `lint`, `index`, `digest`, `pdf`, `screenshots`. Shared briefing logic in `pipeline/lib/briefing.mjs`, verification rules in `pipeline/lib/verify.mjs` and `verify-schema.mjs`, Copilot CLI plumbing in `pipeline/lib/copilot.mjs`. |
| Site | `src/`, `astro.config.mjs` | Astro static site. Design tokens in `src/styles/tokens.css`. |
| Atlas | `src/lib/graph.ts`, `src/lib/layout.ts`, `src/scripts/atlas/` | The ledger drawn as a three-dimensional map of linked pages at `/atlas/`: every briefing, concept and shared tag, and the links between them. Built from the wiki at build time, so it follows the daily run. |
| Taxonomy | `config/taxonomy.mjs` | Topics, product mapping, rating scales, cloud names and tag groups. Shared by the pipeline and the site. |

### The daily run (`.github/workflows/daily.yml`)

1. **Ingest** first reads the connected tenant's Message Center posts through Microsoft Graph
   (`ingest-message-center`; skipped, with a note, until a tenant is connected as
   [docs/message-centre.md](docs/message-centre.md) describes), keeps only posts whose text
   Microsoft sends to every tenant, and files each under the topic of the roadmap item it names.
   It then downloads the Microsoft 365 Roadmap, keeps in-scope items, snapshots them to `raw/`,
   and queues items that are new, changed status, were edited by Microsoft, or have a Message Center
   post newer than their briefing. It also archives briefings
   whose item Microsoft cancelled or which have been gone from the roadmap for 90 days (the page keeps
   its address and is listed under `/archive/`; nothing is deleted), and queues live pages untouched
   for 120 days (180 once launched) for a re-check.
2. **Compile** writes or rewrites a fixed number of briefings from the queue (24 per run). Four runs a
   day are scheduled, and a run that wrote something starts the next one as soon as it finishes while
   the day's AI credits stay under `COMPILE_DAILY_CREDITS` (default 15,000 per UTC day; `COMPILE_CHAIN=off`
   stops the chaining, and `pipeline/chain-next.mjs` records each run's spend in `data/spend.json` and
   `wiki/log.md`). Each run is shared equally across the five topics: refreshes of existing pages
   first, then one item per topic in turn, most admin-relevant first, so a topic with a long queue
   such as Modern Work never waits behind the others. Every briefing is grounded with the Microsoft
   Learn MCP server and fetches from Microsoft domains, follows `pipeline/prompts/compile-agent.md`,
   and goes through the same validator and renderer (`pipeline/write-briefing.mjs`) whichever
   writer runs. The writer is chosen by the `COMPILE_WRITER` repository variable (Settings →
   Secrets and variables → Actions → Variables), or per run by the `compile_writer` input:
   - `copilot` (default): GitHub Copilot CLI on the repository owner's Copilot seat, one session per
     briefing, billed in AI credits. No secret is needed: the job's token carries
     `copilot-requests: write`. To bill a specific user instead, add a `COPILOT_GITHUB_TOKEN` secret
     holding a fine-grained personal access token with the "Copilot Requests" permission. Model
     `claude-opus-5.5` unless `COPILOT_MODEL` says otherwise, falling back through
     `COPILOT_FALLBACK_MODELS` (default `claude-sonnet-5.5,auto`) if the seat refuses it; caps of
     300 credits per briefing and 200 per briefing per run (`COMPILE_ITEM_MAX_CREDITS`,
     `COMPILE_MAX_CREDITS`), with the spend recorded in `wiki/log.md` and the session transcripts
     kept as a run artifact for 14 days. The step first proves the token and model with a one-word
     prompt, retries a session that fails fast, and explains any failure in plain English in the
     run summary. A failed writer never stops the lint, build and deploy; one failure is a warning,
     two in a row mark the run failed so it is noticed.
   - `claude-code`: Claude Code through the official GitHub Action on a Claude Pro or Max
     subscription (`CLAUDE_CODE_OAUTH_TOKEN` secret, from `claude setup-token`).
   - `api`: the Anthropic API directly from `pipeline/compile.mjs` (`ANTHROPIC_API_KEY` secret).
   - `none`: the step is skipped and everything else still runs.


   Up to two of a run's tasks are **concept pages** (`COMPILE_CONCEPTS`, 0 turns them off; none on a
   run narrowed to one topic or to named items). `pipeline/lib/concepts.mjs` works out the
   candidates from the tags on live briefings, with the rules in `CONCEPTS` in
   `config/taxonomy.mjs`: a tag four or more briefings carry, in the licensing, security, governance
   or data groups (or a capability found in more than one topic), that no concept page explains
   yet. The writer follows `pipeline/prompts/concept-agent.md` and the "Concept pages" section of
   the schema, and either writes the page through `pipeline/write-concept.mjs` or declines the tag
   with a reason, which `data/concepts.json` remembers until twice as many briefings carry it.
   Concept pages are corrected, rewritten when six more briefings depend on them or after 120 days,
   and checked by the same verifier as briefings. The `api` writer does not write concept pages.
3. **Verify** re-reads every briefing written or refreshed in the run, plus a slice of the back
   catalogue (24 a page at a time by default, oldest check first), with a second model in a fresh
   session. The verifier follows `pipeline/prompts/verify-agent.md`: it lists every statement of
   fact on the page, checks record facts against the roadmap snapshot and everything else against
   Microsoft Learn, and writes one verdict file per page with each claim marked supported,
   unsupported or contradicted, the passage it rests on, and a severity. Before the model runs, a
   script checks the cited links, the admin-path words, the cmdlets and the roadmap fields, and
   hands it the leads. `pipeline/lib/verify.mjs` applies the rule: any blocking finding (a path,
   command, licence, price, date, default or role that is contradicted or unsupported), or three
   majors, holds the page. Held pages move to `wiki/_held/` and are not built; the next run's
   writer gets them first, with the findings appended, for up to two correction rounds, after which
   the page is parked for a person. Pages that pass are stamped (`verification` in the front
   matter) and show the full report on the site. Briefings published before the check existed
   stay live on their first failure, with a notice, while a corrected version is prepared
   (`VERIFY_GRACE_EXISTING=0` holds them too). A new page written in the run that the verifier did
   not reach is held as unverified rather than published unchecked; a page that was already
   published when the run started is never taken down for being unreached, it stays live and goes
   first in the next run. The engine is the
   `VERIFY_ENGINE` variable: `copilot` (default: the same seat as the writer, but a different
   model family first, `gpt-6.1-sol`, falling back through `gpt-5.6-sol`, `claude-sonnet-5.5` and
   `auto` when the seat refuses one; caps of 250 credits per page and 2,000 per run,
   `VERIFY_MAX_CREDITS` and `VERIFY_MAX_RUN_CREDITS`; a check cost about 63 credits in the first
   real run), `claude-code`, `api` or `off`. `VERIFY_MODEL`, `VERIFY_FALLBACK_MODELS`,
   `VERIFY_LIMIT` and the `verify_*` run inputs override the defaults. Checks run `VERIFY_PARALLEL`
   (3) at a time, and the verifier stops starting sessions after `VERIFY_RUN_MINUTES` (75), so the
   run always reaches lint, index and the commit; pages it did not reach are held or stay unchecked.
   A refused token stops the run with the reason in plain English in the run summary.
   Transcripts and verdicts are kept as a run artifact for 14 days.
4. **Lint** validates every page against the schema, quarantines failures, and flags broken links,
   status drift, stale pages, pages awaiting correction, stale checks and everything held.
5. **Index and digest** regenerate the catalogue (held pages are listed at the end), stats and
   this week's digest.
6. The changes are committed back to `main`, the site is built, each briefing is rendered to PDF,
   and the result is deployed to GitHub Pages.

### The weekly Teams digest (`.github/workflows/teams-digest.yml`)

Every Monday morning (07:17 UTC, so 07:17 in the UK in winter and 08:17 in summer) a second, much
smaller workflow posts one card to a Microsoft Teams channel: the briefings created or refreshed in
the last seven days, "Act now" first with one line each on risk, cost and where the control lives,
each linking to its briefing, then the counts for the rest of the week and buttons to the week's
digest page and the Act now list. `pipeline/teams-digest.mjs` builds the card from the committed
briefings (the ratings, the writer's rationales and the controls table), so no model runs and nothing
is spent. The card is an Adaptive Card sent to a Teams Workflows webhook, which is what replaced the
retired Office 365 connectors.

Setup, once, by someone who owns the channel:

1. In Teams, open the channel, choose **…** next to its name, then **Workflows**.
2. Pick the template **Post to a channel when a webhook request is received**, give it a name such
   as "Release Ledger weekly digest", confirm the team and channel, and add it. Leave "Who can trigger
   the flow" as **Anyone**: GitHub cannot sign in to your tenant.
3. Copy the URL the workflow shows when it is saved.
4. In this repository, Settings → Secrets and variables → Actions → **New repository secret**, name
   `TEAMS_WEBHOOK_URL`, paste the URL, save.
5. Actions → **Weekly digest to Teams** → **Run workflow** to post the first card straight away.

Without the secret the job still runs, shows the card it would have sent in the run summary, and
posts nothing. `TEAMS_DIGEST_DAYS` (7) and `TEAMS_DIGEST_MAX_ITEMS` (8) are optional repository
variables; the `dry_run` input builds the card without posting it. The exact request body of every
run is kept as a run artifact for 30 days. A card over Teams' 28 KB limit drops Act now items from the
bottom of the list and links to the rest. Workflows belong to the person who created them: if that
person leaves, an administrator can add a co-owner or a colleague can create a new workflow and
replace the secret. To look at the card locally, `npm run teams-digest:preview` renders it to
`screenshots/teams-digest/` with Microsoft's Adaptive Cards renderer.

## Local development

```bash
npm install
npm run dev              # Astro dev server
npm run ingest           # refresh raw/ and data/ from the roadmap
MC_TENANT_ID=... MC_CLIENT_ID=... MC_CLIENT_SECRET=... npm run ingest:mc   # read Message Center posts from a tenant (or MC_FIXTURE=<file> to test)
npm test                 # unit tests for the pipeline modules
ANTHROPIC_API_KEY=... npm run compile   # write briefings via the API (COMPILE_LIMIT, COMPILE_TOPIC=<topic id>, COMPILE_ONLY=<id,id>)
npm run compile:copilot                 # same, via a signed-in Copilot CLI (`copilot login` first; COPILOT_MODEL, COMPILE_LIMIT)
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
