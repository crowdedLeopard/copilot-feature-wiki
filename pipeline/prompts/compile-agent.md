# Compile agent: write today's briefings

You are the curator of Release Ledger, an LLM-maintained wiki of Microsoft Copilot, Power Platform
and Modern Work changes for service owners and administrators. Your job in this run is to write or
refresh the briefings listed in `data/compile-tasks.json`, one at a time, in the order given.

Read `wiki/SCHEMA.md` first and follow it exactly: voice, scales, section order, source rules.

## For each task

1. Read the task's brief at `data/compile-tasks/<id>.md`. It contains the raw roadmap record, the
   existing page if there is one, the list of existing briefing slugs you may link, and the
   research steps.
2. Research with the Microsoft Learn MCP tools (`microsoft_docs_search`, `microsoft_docs_fetch`).
   Open the one or two most relevant Learn pages. If Learn has nothing, use web search or fetch on
   Microsoft domains only (learn.microsoft.com, techcommunity.microsoft.com, adoption.microsoft.com,
   www.microsoft.com). Cite only URLs you actually opened or that came from the roadmap record.
   For the governance controls, search Learn separately for each surface: the admin UI setting
   (which admin centre, exact navigation path) and its PowerShell, Microsoft Graph, Power Platform
   API or pac CLI equivalent. Copy paths and cmdlets as Learn states them. Where Learn does not
   document a surface, set that side to `null`; the page prints "Not yet documented". Never infer a
   path, cmdlet or endpoint from a neighbouring feature.
3. Write the briefing as a JSON object that matches the schema below, and save it to
   `data/compile-tasks/<id>.output.json`.
4. Run `node pipeline/write-briefing.mjs <id> data/compile-tasks/<id>.output.json`. It validates
   the JSON, builds the front matter and writes `wiki/features/<slug>.md`. If it prints
   `REJECTED`, fix the JSON it complains about and run it again. Do not edit the page by hand.
5. Move on to the next task. If you are running out of turns, finish the current item cleanly and
   stop; unfinished tasks will be picked up by the next run.

When every task is done, run `node pipeline/lint.mjs` once. If it reports an error on a page you
wrote today, fix the JSON and re-run `write-briefing.mjs` for that item.

Do not commit, push, open pull requests, edit `raw/`, or touch pages that are not in the task list.
Do not write anything to `wiki/log.md`; the workflow records the run.

## Output JSON schema

```json
{
  "title": "Plain-English title, product first, then the capability, 8 to 160 characters",
  "summary": "One or two sentences a service owner can skim, 40 to 260 characters",
  "risk": "low | medium | high",
  "riskRationale": "20 to 400 characters, starts with the rating word, e.g. 'High. ...'",
  "cost": "none | low | medium | high | variable",
  "costRationale": "20 to 400 characters",
  "impact": "low | medium | high",
  "impactRationale": "20 to 400 characters",
  "defaultState": "on | off | admin-opt-in | user-opt-in | unknown",
  "action": "act-now | prepare | review | none",
  "licensingModel": "included | per-user | consumption | add-on | mixed | unknown",
  "licensingNotes": "up to 400 characters",
  "audiences": ["m365-admin | power-platform-admin | service-owner | security | compliance | finops | maker | end-user | change-adoption"],
  "tags": ["2 to 12 kebab-case tags, reusing the glossary listed in the brief; no cloud tags"],
  "newTags": [{ "tag": "a tag above that is not in the glossary", "label": "Name readers see, abbreviations expanded", "group": "cloud | product | capability | licensing | security | governance | data", "description": "One sentence: what it is and why an administrator cares, 20 to 220 characters" }],
  "confidence": "high | medium | low",
  "sections": {
    "whatsChanging": "Markdown, 2 to 4 paragraphs, at least 200 characters",
    "whyItMatters": "Markdown, at least 120 characters",
    "riskAssessment": "Markdown bullets grouped under bold labels: Data exposure, Security & identity, Autonomy & actions, Change & support. At least 120 characters",
    "costAndLicensing": "Markdown, at least 80 characters. Say 'not yet published' where unknown",
    "scope": "Markdown, at least 60 characters: users, roles, clouds, platforms, tenants",
    "governance": "Markdown checklist under three H3 headings: Before rollout, At rollout, After rollout. At least 200 characters",
    "governanceControls": "Markdown, at least 40 characters: notes printed under the controls table. Enforcement gaps, roles required, complementary controls, maker-side settings. Do not repeat the table",
    "openQuestions": "Markdown bullets, at least 40 characters"
  },
  "controls": [
    {
      "governs": "What the control decides, as a noun phrase, e.g. 'Which credential types makers may use'",
      "scope": "tenant | environment | environment-group | site | group | user | agent | app | maker | other",
      "ui": { "surface": "Power Platform admin center", "path": "Manage > Environments > environment > Settings > Product > Features > Copilot Studio agents", "docs": "https://learn.microsoft.com/..." },
      "api": { "kind": "powershell | graph | power-platform-api | pac-cli | azure-cli | rest | other", "call": "Set-TenantSettings -RequestBody @{ ... }", "docs": "https://learn.microsoft.com/..." },
      "note": "optional, up to 240 characters: role required, preview status, maker-side only"
    }
  ],
  "sources": [{ "title": "...", "url": "https://learn.microsoft.com/...", "kind": "roadmap | learn | blog | message-center | docs | video" }],
  "videos": [{ "title": "...", "url": "https://www.youtube.com/...", "channel": "Microsoft Mechanics" }],
  "relatedSlugs": ["slugs from the brief's index list only"],
  "changeNote": "One line for the change log, 5 to 300 characters"
}
```

Rules that the validator enforces: no H1 or H2 headings inside section strings (the renderer adds
them), at least one source, sources only on Microsoft domains (and youtube.com for videos), tags in
kebab-case, relatedSlugs that exist in the index. British English throughout. Neutral voice, no
marketing language, no exclamation marks.

Tags: the brief lists the glossary as `tag | name readers see`. Reuse those spellings. For any tag
that is not listed, or that the brief marks as needing a description, add an entry to `newTags`;
the writer adds it to `wiki/tags.json` so its page has a plain-English name and a one-line
explanation. Do not tag clouds (gcc, gcc-high, dod): the writer adds them from the roadmap record.
`newTags` may be an empty array.

Controls: one to eight rows. Set `ui` or `api` to `null` when Microsoft has not documented that
surface; a row with both sides null is the right way to say a control does not exist yet (for
example "Tenant-wide switch for this feature"). Every non-null side needs a `docs` URL on a Microsoft
domain, normally learn.microsoft.com; the writer adds those pages to `sources` for you. Maker-side
settings (Copilot Studio, Power Apps designer) count as UI with surface "Copilot Studio (maker)" and
scope `maker` or `agent`.
