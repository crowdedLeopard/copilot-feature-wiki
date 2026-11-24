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
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "No separate licence is stated for the semantic model. Charges depend on the consuming experience and its entitlement, as the Work IQ costs page describes."
audiences: ["power-platform-admin","maker","security","compliance","service-owner"]
tags: ["dataverse","semantic-model","agents","copilot","glossary","data-governance","knowledge-grounding"]
sources:
  - title: "Overview of Dataverse semantic model (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview"
    kind: "learn"
  - title: "Fine-tune semantic model signals (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577185"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577185"
    kind: "roadmap"
  - title: "Whether a table is included in a semantic model (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#enable-or-disable-a-specific-table"
    kind: "learn"
  - title: "Work IQ features, including semantic modeling, in the environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#environment-level-setting"
    kind: "learn"
videos: []
related: ["work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","copilot-credits"]
controls:
  - governs: "Whether a table is included in a semantic model"
    scope: "other"
    ui:
      surface: "Power Apps (maker)"
      path: "More > Semantic model > model > Configuration > table > Include in semantic model > Save and sync"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#enable-or-disable-a-specific-table"
    api: null
    note: "Applies to the selected semantic model only. Needs System Administrator, or Semantic Model and Environment Maker. Preview. If Semantic model is not under More, select Discover all."
  - governs: "Work IQ features, including semantic modeling, in the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#environment-level-setting"
    api: null
    note: "Needs an environment administrator account. Turning Work IQ off makes business skills, semantic modeling and Dataverse access through Copilot Chat unavailable in the environment. Preview."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-16"
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
version: 3
verification:
  status: "held"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 61
  unconfirmed: 2
  contradicted: 10
  attempts: 1
  hash: "d22fe9e58e18312337b05b5a22fd44c7"
---

## What's changing

Dataverse extracts semantic knowledge from metadata that already exists in an environment: table relationships, public views and sub-grid views, form names, table and column description summaries and, if enabled, sample data rows. Agents and Copilot use it to interpret business intent rather than guess from schema names.

Makers can see the generated understanding per table in Power Apps, find gaps and add glossary entries for acronyms and business terms. The model regenerates every 12 hours, with manual regeneration available. Initial generation can take up to two hours. The following behaviour and controls are documented for the preview and remain subject to change.

The roadmap item is In development, lists a preview from June 2026 and targets general availability for November 2026 in Worldwide. Microsoft Learn documents the semantic model as a preview feature at the time of writing (November 2026).

## Why it matters

Better grounding reduces the manual setup for each agent and makes answers consistent across agents that share a model. That also means poorly described views or columns can propagate wrong interpretations everywhere that model is used.

Because the model is provisioned automatically when Copilot experiences over Dataverse are enabled, administrators should know it exists and decide which tables each model may cover.

## Risk assessment

**Data exposure**
- Sample data rows are off by default; enabling them exposes example values to the model. Sensitive or regulated tables can be excluded.

**Security & identity**
- Learn does not describe separate security enforcement; confirm that answers still respect Dataverse security roles.

**Autonomy & actions**
- The semantic model supplies business context for agent reasoning; review action capabilities and approvals in each consuming agent.

**Change & support**
- Computed signals are read-only. Corrections are made through glossary entries, and changes apply to every app or agent sharing that model.

## Cost and licensing

Variable, and no separate charge for the semantic model is published. Microsoft's Work IQ costs page says that for Business Applications in Work IQ you track cost by the experiences people use rather than by a dedicated business applications category. Copilot Chat's applicable entitlement includes business-data grounding in the licensed chat scenario. For other agents, including Copilot Studio, the page points to the billing guidance for the consuming experience.

Indirect cost: the Work IQ default-settings page says some features, including semantic modeling, use extra storage for search indexes. Learn also notes that for consumption-based services, usage of underlying application services may continue to incur licence fees during the preview.

## Scope

Environments with Dataverse intelligence enabled, in the Worldwide cloud per the roadmap. Consumers named by Learn include Dataverse MCP, Copilot in Power Apps, Microsoft Copilot, Sales Agent and Copilot Studio agents over Dataverse data.

The Work IQ default-settings page (preview) says that starting in November 2026 Microsoft turns on Business Applications in Work IQ for existing environments that are not exceptions. The listed exceptions are EU and EFTA environments, government-related environments and nonproduction environments (trial, sandbox and developer).

Changes to signal settings, table-level controls and glossary entries apply to the selected semantic model only. Models are named for the source that provisioned them, so review each model and its associated apps or agents.

## Governance guidance

### Before rollout
- Identify tables holding sensitive or regulated data and decide whether to exclude them.
- Review views and column descriptions that the model will learn from.
- Keep sample data rows off unless there is a clear need.

### At rollout
- Review each semantic model on the Semantic model page in Power Apps, with its associated apps or agents.
- Set a glossary owner and a naming convention for terms.

### After rollout
- Test agent answers after each regeneration.
- Review glossary entries and disabled signals quarterly.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a table is included in a semantic model</strong><br><small class="controls__note">Applies to the selected semantic model only. Needs System Administrator, or Semantic Model and Environment Maker. Preview. If Semantic model is not under More, select Discover all.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>More › Semantic model › model › Configuration › table › Include in semantic model › Save and sync <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#enable-or-disable-a-specific-table" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ features, including semantic modeling, in the environment</strong><br><small>Environment</small><br><small class="controls__note">Needs an environment administrator account. Turning Work IQ off makes business skills, semantic modeling and Dataverse access through Copilot Chat unavailable in the environment. Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#environment-level-setting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Most of the tuning is maker work: signal types, table inclusion and the glossary live on the Semantic model page in Power Apps, described in the [semantic model overview](https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview). Signal types, including Sample table rows, are turned On or Off under How your data is understood, then saved. Views and relationships inside a table are turned On or Off under Configuration, per the [fine-tune page](https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals). The Work IQ row is a broader switch for business skills, semantic modeling and Dataverse access through Microsoft 365 Copilot Chat, Research and Agent Builder, not a separately documented generation-only toggle. No API is documented for any of it.

## Open questions

- Is the semantic model subject to the same row and column security as the underlying data?
- What is the billing treatment after preview?
- Which sovereign clouds will be supported?
- How are changes to the model audited?

<!-- rationale
risk: Medium. Metadata, summaries and optionally sample rows feed AI agents, so sensitive tables need explicit review, though disable controls exist.
cost: Variable. Copilot Credit consumption belongs to the consuming experience, while separate pricing for generating the semantic model is not published at the time of writing (November 2026).
impact: Medium. It changes the quality of answers from Copilot, Copilot Studio agents and Dataverse MCP for users of Dataverse data.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState / default: The change is on by default for the typical existing enterprise environment. | Found: The plan to turn on Business Applications in Work IQ for existing environments that aren't listed as exceptions has been deferred from the previously documented November 2026 schedule. | Fix: Set defaultState to 'unknown' for arrival in existing environments. State: 'Automatic enablement for existing environments has been deferred; Work IQ is on by default for new public production environments, subject to the listed exceptions.' Cite https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
- [contradicted, blocker] front matter: licensing.model / licensing: Microsoft has not published how users are entitled to this capability. | Found: Microsoft 365 Copilot Chat: The applicable entitlement includes business-data grounding in the licensed chat scenario. You don't pay extra for it as a Work IQ API interaction. | Fix: Set licensing.model to 'mixed'. Replace the notes with: 'Entitlement and billing follow the consuming experience: business-data grounding is included in the applicable licensed Microsoft 365 Copilot Chat scenario; participating usage-based experiences consume Copilot Credits. No separate semantic-model licence is stated.' Cite https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs
- [unsupported, major] What's changing / behaviour: Form names are specifically extracted as semantic signals. | Found: Searched: 'semantic model forms names Dataverse'. Opened semantic-model-overview and fine-tune-semantic-model-signals. The overview states context summarized from forms and form fields, not specifically form names. | Fix: Replace 'form names' with 'context summarized from forms and form fields', as stated at https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview#how-the-semantic-model-works.
- [contradicted, blocker] Risk assessment: Security & identity; Open questions: row and column security / absence: Learn leaves the semantic model's relationship to Dataverse security enforcement unresolved. | Found: Table selection and signal settings define the context of the semantic model. They don't override or replace Dataverse security roles, table-, column-, or record-level access controls, or application-level configurations. | Fix: Replace the Security & identity bullet with: 'Semantic-model configuration does not override Dataverse security roles or table-, column-, or record-level access controls; test answers with representative user permissions.' Remove the open question asking whether row and column security applies. Cite https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#add-or-remove-a-table. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [unsupported, major] Scope; rationale: impact / behaviour: Learn specifically names Dataverse MCP as a consumer of this semantic model. | Found: Searched: 'Dataverse MCP semantic model', 'Dataverse MCP semantic understanding', 'Dataverse MCP semantic model search_data'. Opened semantic-model-overview, semantic-model-faq, data-platform-mcp and data-platform-mcp-faq; none states that Dataverse MCP consumes the model. | Fix: Remove 'Dataverse MCP' from the consumer list and impact rationale. The cited semantic-model-overview lists Copilot in Power Apps, Microsoft Copilot with Dataverse, Sales Agent in Microsoft 365 and Copilot Studio agents over Dataverse data.
- [contradicted, blocker] Scope / date: Starting in November 2026 Microsoft turns on Work IQ for existing environments that are not exceptions. | Found: The plan to turn on Business Applications in Work IQ for existing environments that aren't listed as exceptions has been deferred from the previously documented November 2026 schedule. | Fix: Replace the sentence with: 'Microsoft has deferred the previously documented November 2026 automatic enablement for existing environments. Work IQ is on by default for new public production environments, subject to the following exceptions.' Retain the exception list and cite https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: Table inclusion is configured through More > Semantic model > model > Configuration > table > Include in semantic model > Save and sync. | Found: Open the model and select Configure. Under Configure table sources, select All tables to find an available table, or Included in model to review the current selection. ... Select Add table or Remove table, as appropriate. | Fix: Replace controls[0].ui.path and the rendered exclusion path with 'environment > More > Semantic models > model > Configure > Configure table sources > Included in model > table > Remove table'. Set its docs link to https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#add-or-remove-a-table. State in the note: 'These steps apply to the new semantic model experience; select Save to persist changes. To include a table, select All tables and Add table instead.' The current article no longer documents Include in semantic model or Save and sync. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [contradicted, blocker] controls[0].note; Governance controls table / role: System Administrator, or Semantic Model and Environment Maker, is sufficient to manage the semantic model. | Found: You need either of the following security roles to manage the semantic model: System Administrator -or- Dataverse Search, Semantic Model and Environment Maker. | Fix: Replace the role sentence in controls[0].note and its rendered note with 'Needs System Administrator, or Dataverse Search, Semantic Model and Environment Maker.' Cite the existing fine-tune-semantic-model-signals prerequisites. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [contradicted, blocker] Governance controls: signal types prose / admin-path: Signal types, including Sample table rows, are switched under How your data is understood and then saved. | Found: Open the model and select Configure. Under Manage signals, turn the relevant signal On or Off. Select Save. | Fix: Replace the sentence with 'In the new semantic model experience, open the selected model, select Configure, and under Manage signals turn the relevant signal On or Off, then select Save. Sample table rows requires regeneration before rows are available to agents.' Cite https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#enable-or-disable-a-signal-type and its Enable sample data rows section. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [contradicted, blocker] Governance controls: views and relationships prose / admin-path: Views and relationships are turned On or Off under Configuration. | Found: Open the model, select Configure, and select an included table. Open Views or Relationships to review the generated items. ... Turn the relevant view or relationship On or Off. | Fix: Replace the sentence with 'In the new experience, open the selected model, select Configure and an included table, open Views or Relationships, turn the item On or Off, and select Save; the corresponding signal must first be enabled at model and table level.' Cite https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#enable-or-disable-a-specific-table-item. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [contradicted, blocker] Governance controls: No API is documented for any of it / absence: No API is documented for any semantic-model tuning, including glossary entries. | Found: Entity set path: [organization URI]/api/data/v9.2/copilotglossaryterms ... Operations supported: POSTGETPATCHDELETE ... description | Edm.String | Explanation of the term. ... term | Edm.String | Display name: Term | Fix: Remove 'No API is documented for any of it.' The CopilotGlossaryTerm Web API reference documents glossary operations and its skill navigation property links to dvtablesearch. Do not add a control row as part of this correction. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls table / admin-path: Discover all provides a fallback when semantic models are not listed under More. | Found: Select More, and if not in the More list, select Discover all, and then select Semantic models under AI section. | Fix: Replace the fallback sentence with 'If Semantic models is not under More, select Discover all > AI > Semantic models.' | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [supported, minor] controls[1].note; Governance controls table / role: The Work IQ environment setting requires an environment administrator account. | Found: You need an environment administrator account. | Fix: Retain this guidance but append 'Microsoft's participation guide lists Power Platform Administrator for managing settings.' Add https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation, whose prerequisites state 'Power Platform Administrator role to manage settings and assign other roles.' | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
- [contradicted, minor] Governance guidance; Governance controls table / consistency: Every control the governance checklist asks the reader to set or review is represented in the controls table. | Found: Checklist: 'Keep sample data rows off'; 'Set a glossary owner'; 'Review glossary entries and disabled signals quarterly.' Table: 'Whether a table is included in a semantic model'; 'Work IQ features ... in the environment'. | Fix: Remove 'Keep sample data rows off unless there is a clear need', 'Set a glossary owner and a naming convention for terms' and 'Review glossary entries and disabled signals quarterly' from the checklist. Retain their explanatory body coverage; do not add rows.
-->
