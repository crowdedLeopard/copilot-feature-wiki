---
title: "Microsoft Dataverse: semantic data understanding for agents and Copilot"
slug: "microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use"
roadmapId: 577185
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Dataverse builds a semantic model from existing views, forms and metadata so agents and Copilot understand business data with less setup, with controls at environment, signal and table level."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Entitlement and billing follow the consuming experience: business-data grounding is included in the applicable licensed Microsoft 365 Copilot Chat scenario; participating usage-based experiences consume Copilot Credits. No separate semantic-model licence is stated."
audiences: ["power-platform-admin","maker","security","compliance","service-owner"]
tags: ["dataverse","semantic-model","agents","copilot","glossary","data-governance","knowledge-grounding"]
sources:
  - title: "Overview of Dataverse semantic model"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview"
    kind: "learn"
  - title: "Create and configure Dataverse semantic models"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "copilotglossaryterm EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577185"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577185"
    kind: "roadmap"
  - title: "Whether a table is included in a semantic model (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#add-or-remove-a-table"
    kind: "learn"
  - title: "Work IQ features, including semantic modeling, in the environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#environment-level-setting"
    kind: "learn"
videos: []
related: ["work-iq","copilot-credits"]
controls:
  - governs: "Whether a table is included in a semantic model"
    scope: "other"
    ui:
      surface: "Power Apps (maker)"
      path: "environment > More > Semantic models > model > Configure > Configure table sources > Included in model > table > Remove table"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#add-or-remove-a-table"
    api: null
    note: "Needs System Administrator, or Dataverse Search, Semantic Model and Environment Maker. New semantic model experience; select Save to persist changes. To include a table, select All tables and Add table instead."
  - governs: "Work IQ features, including semantic modeling, in the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#environment-level-setting"
    api: null
    note: "Needs an environment administrator account (the participation guide lists Power Platform Administrator). Turning Work IQ off makes business skills, semantic modeling and Dataverse access through Copilot Chat unavailable. Preview."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-24"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse semantic model for agentic use, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected control rows (table inclusion path and per-model scope; Work IQ switch merged with the environment row), the Autonomy bullet, cost wording and preview caveats."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 10 of 73 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the check: automatic enablement for existing environments is deferred, so default is not stated and action is prepare; licensing now mixed; table and signal paths, roles and security wording updated; Dataverse MCP and form names removed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 69
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "3addfb6dbdf3a432a92d72f7ea14a5d4"
---

## What's changing

Dataverse extracts semantic knowledge from metadata that already exists in an environment: table relationships, public views and sub-grid views, context summarized from forms and form fields, table and column description summaries and, if enabled, sample data rows. Agents and Copilot use it to interpret business intent rather than guess from schema names.

Makers can see the generated understanding per table in Power Apps, find gaps and add glossary entries for acronyms and business terms. The model regenerates every 12 hours, with manual regeneration available. Initial generation can take up to two hours. The following behaviour and controls are documented for the preview and remain subject to change.

The roadmap item is In development, lists a preview from June 2026 and targets general availability for November 2026 in Worldwide. Microsoft Learn documents the semantic model as a preview feature at the time of writing (November 2026).

## Why it matters

Better grounding reduces the manual setup for each agent and makes answers consistent across agents that share a model. That also means poorly described views or columns can propagate wrong interpretations everywhere that model is used.

Because the model is provisioned automatically when Copilot experiences over Dataverse are enabled, administrators should know it exists and decide which tables each model may cover.

## Risk assessment

**Data exposure**
- Sample data rows are off by default; enabling them exposes example values to the model. Sensitive or regulated tables can be excluded.

**Security & identity**
- Semantic-model configuration does not override Dataverse security roles or table-, column-, or record-level access controls; test answers with representative user permissions.

**Autonomy & actions**
- The semantic model supplies business context for agent reasoning; review action capabilities and approvals in each consuming agent.

**Change & support**
- Computed signals are read-only. Corrections are made through glossary entries, and changes apply to every app or agent sharing that model.

## Cost and licensing

Variable, and no separate charge for the semantic model is published. Microsoft's Work IQ costs page says that for Business Applications in Work IQ you track cost by the experiences people use rather than by a dedicated business applications category. Copilot Chat's applicable entitlement includes business-data grounding in the licensed chat scenario. For other agents, including Copilot Studio, the page points to the billing guidance for the consuming experience.

Indirect cost: the Work IQ default-settings page says some features, including semantic modeling, use extra storage for search indexes. Learn also notes that for consumption-based services, usage of underlying application services may continue to incur licence fees during the preview.

## Scope

Environments with Dataverse intelligence enabled, in the Worldwide cloud per the roadmap. Consumers named by Learn include Copilot in Power Apps, Microsoft Copilot, Sales Agent and Copilot Studio agents over Dataverse data.

Microsoft has deferred the previously documented November 2026 automatic enablement for existing environments; the [Work IQ default-settings page](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings) (preview) says to check it for updates. Work IQ is on by default for new public production environments, subject to the following exceptions. The listed exceptions are EU and EFTA environments, government-related environments and nonproduction environments (trial, sandbox and developer).

Changes to signal settings, table-level controls and glossary entries apply to the selected semantic model only. Models are named for the source that provisioned them, so review each model and its associated apps or agents.

## Governance guidance

### Before rollout
- Identify tables holding sensitive or regulated data and decide whether to exclude them.
- Review views and column descriptions that the model will learn from.

### At rollout
- Review each semantic model on the Semantic model page in Power Apps, with its associated apps or agents.

### After rollout
- Test agent answers after each regeneration.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a table is included in a semantic model</strong><br><small class="controls__note">Needs System Administrator, or Dataverse Search, Semantic Model and Environment Maker. New semantic model experience; select Save to persist changes. To include a table, select All tables and Add table instead.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › More › Semantic models › model › Configure › Configure table sources › Included in model › table › Remove table <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#add-or-remove-a-table" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ features, including semantic modeling, in the environment</strong><br><small>Environment</small><br><small class="controls__note">Needs an environment administrator account (the participation guide lists Power Platform Administrator). Turning Work IQ off makes business skills, semantic modeling and Dataverse access through Copilot Chat unavailable. Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#environment-level-setting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Most of the tuning is maker work: signal types, table inclusion and the glossary live on the Semantic models page in Power Apps, described in the [semantic model overview](https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview). In the new semantic model experience, open the selected model, select Configure, and under Manage signals turn the relevant signal On or Off, then select Save. Sample table rows requires regeneration before rows are available to agents.

In the new experience, open the selected model, select Configure and an included table, open Views or Relationships, turn the item On or Off, and select Save; the corresponding signal must first be enabled at model and table level, per the [fine-tune page](https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals). The Work IQ row is a broader switch for business skills, semantic modeling and Dataverse access through Microsoft 365 Copilot Chat, Research and Agent Builder, not a separately documented generation-only toggle.

Glossary entries are stored in the copilotglossaryterms table, which the [Dataverse Web API reference](https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm) lists with POST, GET, PATCH and DELETE operations.

## Open questions

- What is the billing treatment after preview?
- Which sovereign clouds will be supported?
- How are changes to the model audited?

<!-- rationale
risk: Medium. Metadata, summaries and optionally sample rows feed AI agents, so sensitive tables need explicit review, though disable controls exist.
cost: Variable. Copilot Credit consumption belongs to the consuming experience, while separate pricing for generating the semantic model is not published at the time of writing (November 2026).
impact: Medium. It changes the quality of answers from Copilot, Copilot Studio agents and Copilot in Power Apps for users of Dataverse data.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; Scope / default: The arrival default is not stated for the existing-environment rollout whose automatic enablement was deferred. | Found: Searched: Dataverse semantic model default enabled preview; Work IQ environment enable disable. Read semantic-model-overview, fine-tune-semantic-model-signals, default-settings and settings-features excerpts. Existing-environment enablement is deferred; new-production defaults are stated. | Fix: Keep defaultState unknown for the deferred existing-environment rollout, but add to Why it matters: 'Microsoft has not stated what happens on arrival for the deferred existing-environment rollout; qualifying new public production environments already have Work IQ on by default.' The latter default is documented at https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Table removal is reached in Power Apps through environment > More > Semantic models > model > Configure > Configure table sources > Included in model > table > Remove table. | Found: In the left navigation pane, select More, and if not in the More list, select Discover all, and then select Semantic models under AI section. ... Under Configure table sources, select ... Included in model ... Select Add table or Remove table, as appropriate. | Fix: Retain the direct More route, but add to controls[0].note and its rendered note: 'If Semantic models is not listed under More, select Discover all, then Semantic models under AI.' This is the conditional route in https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#select-a-semantic-model. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#add-or-remove-a-table
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist tells the reader to review each model and its associated apps or agents, but neither controls row describes that review. | Found: At rollout: 'Review each semantic model on the Semantic model page in Power Apps, with its associated apps or agents.' Controls rows: 'Whether a table is included in a semantic model'; 'Work IQ features, including semantic modeling, in the environment'. | Fix: The At rollout model-review step has no matching controls row. Without adding a row, remove that checklist bullet; the existing Scope paragraph already advises reviewing each model and its associated apps or agents.
-->
