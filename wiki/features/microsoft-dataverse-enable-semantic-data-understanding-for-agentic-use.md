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
action: "review"
licensing:
  model: "unknown"
  notes: "No separate licence stated. The consuming agents, such as Copilot Studio, have their own licensing and credit use."
audiences: ["power-platform-admin","maker","security","compliance","service-owner"]
tags: ["dataverse","semantic-model","agents","copilot","glossary","data-governance","knowledge-grounding"]
sources:
  - title: "Overview of Dataverse semantic model (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview"
    kind: "learn"
  - title: "Fine-tune semantic model signals (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577185"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577185"
    kind: "roadmap"
  - title: "Which tables, views and relationships join the semantic model (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#manage-the-semantic-model"
    kind: "learn"
  - title: "Work IQ participation for the environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq"
    kind: "learn"
videos: []
related: ["microsoft-dataverse-enable-ai-powered-business-workflows-in-work-iq-with-dataverse-build-d","microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column","dataverse-agent-users-entra-agent-identity","copilot-credits"]
controls:
  - governs: "Which tables, views and relationships join the semantic model"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "More > Semantic model > Configuration > Include in semantic model"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#manage-the-semantic-model"
    api: null
    note: "System Administrator, or the Semantic Model role together with Environment Maker."
  - governs: "Work IQ participation for the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq"
    api: null
  - governs: "Environment-level switch for semantic model generation"
    scope: "environment"
    ui: null
    api: null
    note: "Learn says admins can turn generation off per environment but gives no navigation path at review time."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse semantic model for agentic use, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 48
  unconfirmed: 1
  contradicted: 5
  attempts: 1
---

## What's changing

Dataverse extracts semantic knowledge from metadata that already exists in an environment: table relationships, public views and sub-grid views, form names, table and column description summaries and, if enabled, sample data rows. Agents and Copilot use it to interpret business intent rather than guess from schema names.

Makers can see the generated understanding per table in Power Apps, find gaps and add glossary entries for acronyms and business terms. The model regenerates every 12 hours, with manual regeneration available. Initial generation can take up to two hours.

The roadmap lists a preview from June 2026 and general availability targeted for November 2026 in Worldwide.

## Why it matters

Better grounding reduces the manual setup for each agent and makes answers consistent across agents that share a model. That also means poorly described views or columns can propagate wrong interpretations everywhere.

Because the model is provisioned automatically when Copilot experiences over Dataverse are enabled, administrators should know it exists and decide which tables it may cover.

## Risk assessment

**Data exposure**
- Sample data rows are off by default; enabling them exposes example values to the model. Sensitive or regulated tables can be excluded.

**Security & identity**
- Learn does not describe separate security enforcement; confirm that answers still respect Dataverse security roles.

**Autonomy & actions**
- The model informs how agents answer; it does not itself take actions.

**Change & support**
- Computed signals are read-only. Corrections are made through glossary entries, and changes apply to every agent sharing that model.

## Cost and licensing

Not yet published. The roadmap and Learn do not state a charge for the semantic model. Agents that use it, such as Copilot Studio agents, consume Copilot Credits under their own billing. Learn notes consumption-based services can still incur fees during preview.

## Scope

Environments with Dataverse intelligence enabled, in the Worldwide cloud per the roadmap. Consumers named by Learn include Dataverse MCP, Copilot in Power Apps, Microsoft Copilot, Sales Agent and Copilot Studio agents over Dataverse data.

## Governance guidance

### Before rollout
- [ ] Identify tables holding sensitive or regulated data and decide whether to exclude them.
- [ ] Review views and column descriptions that the model will learn from.
- [ ] Keep sample data rows off unless there is a clear need.

### At rollout
- [ ] Review the semantic model page in Power Apps for each environment.
- [ ] Set a glossary owner and a naming convention for terms.

### After rollout
- [ ] Test agent answers after each regeneration.
- [ ] Review glossary entries and disabled signals quarterly.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which tables, views and relationships join the semantic model</strong><br><small>Environment</small><br><small class="controls__note">System Administrator, or the Semantic Model role together with Environment Maker.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>More › Semantic model › Configuration › Include in semantic model <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#manage-the-semantic-model" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ participation for the environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Environment-level switch for semantic model generation</strong><br><small>Environment</small><br><small class="controls__note">Learn says admins can turn generation off per environment but gives no navigation path at review time.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Most of the tuning is maker work: signal types, table inclusion and the glossary live on the Semantic model page in Power Apps, described in the [semantic model overview](https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview). Admin governance is indirect, through the Work IQ environment feature and the roles that may edit the model. No API is documented for any of it.

## Open questions

- Is the semantic model subject to the same row and column security as the underlying data?
- What is the billing treatment after preview?
- Which sovereign clouds will be supported?
- How are changes to the model audited?

<!-- rationale
risk: Medium. Metadata, summaries and optionally sample rows feed AI agents, so sensitive tables need explicit review, though disable controls exist.
cost: Not yet published. Learn says the semantic model is provisioned automatically when Copilot experiences over Dataverse data are enabled, and consuming agents may bill separately.
impact: Medium. It changes the quality of answers from Copilot, Copilot Studio agents and Dataverse MCP for users of Dataverse data.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: defaultState / default: The semantic model is on automatically in the enabled environments described by the briefing. | Found: The platform automatically provisions the semantic model when you enable Copilot experiences over Dataverse data, so you don't need to set up anything manually to start. | Fix: Keep the conditional automatic-provisioning explanation. Cite https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings for automatic Work IQ enablement and its EU/EFTA, government-related and nonproduction exceptions; also acknowledge that settings-features still lists Dataverse intelligence switches as Off rather than silently harmonising the sources. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Consuming Copilot Studio agents have their own licensing and Copilot Credit consumption. | Found: Copilot Credits are the unit that measures agent usage. You calculate the total cost based on the sum of the Copilot Credits your organization uses. | Fix: Cite this billing page rather than relying only on the semantic-model pages. Say consuming experiences may incur their own charges; keep that separate from the unpublished charge for model generation, and qualify that billing depends on the consuming experience and entitlement. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: More > Semantic model > Configuration > Include in semantic model controls tables, views and relationships. | Found: Select Views or select Relationships to see the table's associated views and relationships. Find the item you want to exclude and turn it On or Off. | Fix: Limit this row to table inclusion: More > Semantic model > model > Configuration > table > Include in semantic model, followed by Save and sync. Add a separate item-control path: More > Semantic model > model > Configuration > table > Views or Relationships > item > On or Off. Mention Discover all if Semantic model is missing from More. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [contradicted, blocker] controls[0].scope; Governance controls table: Environment / applicability: The maker table, view and relationship settings apply across the environment. | Found: Changes you make to a semantic model, including signal settings, table-level controls, and glossary entries, only apply to that specific semantic model. They don't affect other semantic models in your environment. | Fix: Change the row's scope to other and explain that it governs the selected semantic model, not every model in the environment. Tell administrators to review each relevant model and its associated apps or agents. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Work IQ is configured in Power Platform admin center at Manage > Environments > environment > Settings > Product > Features > Work IQ. | Found: In the Manage pane, select Environments. On the Environments page, select an environment. In the command bar, select Settings. Expand Product, and then select Features. | Fix: Retain the path and add settings-features as a source for its Environments step. The cited manage-participation page documents the remainder, including Work IQ, but abbreviates navigation to 'Select Manage, and select the environment'. | Source: https://learn.microsoft.com/power-platform/admin/settings-features
- [supported, minor] controls[1].governs; Governance controls table / applicability: The Work IQ environment feature switch governs the availability of semantic models in that environment. | Found: Enable Work IQ features in the environments where you want to use semantic models, search indexing, business skills, and the Business Applications paths in the Work IQ MCP. | Fix: Rename this row to 'Work IQ features, including semantic modeling, in the environment'. Explain that enabling features is distinct from environment data participation, and that participation settings do not prevent agentic access to underlying data. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation
- [contradicted, blocker] controls[2].ui and api; controls[2].note; Governance controls table / absence: Microsoft provides no documented navigation path or automation for disabling semantic modeling at environment level. | Found: The Work IQ setting turns on business skills, semantic modeling, and access to Dataverse data through Microsoft 365 Copilot Chat, Research, and Agent Builder. If you turn off this setting, these features aren't available in the environment. | Fix: Merge this row with the Work IQ feature-switch row: Power Platform admin center > Manage > environment > Settings > Product > Features > Work IQ > Off. Explain that this is a broader switch, not a separately documented generation-only toggle. Keep automation null only for that narrowly defined equivalent. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The semantic model does not itself take actions. | Found: Searched: "Dataverse semantic model" "actions"; opened semantic-model-overview, fine-tune-semantic-model-signals and business-applications-work-iq. They describe grounding and reasoning but do not expressly state this negative. | Fix: Replace the categorical negative with the documented scope: 'The semantic model supplies business context for agent reasoning; review action capabilities and approvals in each consuming agent.'
- [supported, minor] What's changing; Risk assessment; Governance controls / behaviour: The documented regeneration, tuning and default behaviour describes the preview implementation. | Found: [This article is prerelease documentation and is subject to change.] This is a preview feature. | Fix: Add 'The following behaviour and controls are documented for the preview and remain subject to change' before describing them. Distinguish the roadmap's In development status and target dates from Learn's available preview documentation. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview
- [contradicted, minor] front matter: action / consistency: The review action rating fits a capability that changes nothing until an administrator or maker chooses it. | Found: action: "review"; defaultState: "on"; "the model is provisioned automatically when Copilot experiences over Dataverse are enabled"; targetDate: "November CY2026" | Fix: Set action to act-now for affected enabled environments: the page rates risk medium and describes automatic provisioning with a target in the run month. Cite default-settings, which also documents automatic enablement for eligible existing environments starting November 2026, and preserve its exceptions.
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control the governance checklist asks readers to review has a corresponding control row. | Found: Checklist: "Keep sample data rows off" and "Review glossary entries and disabled signals quarterly". Rows cover table inclusion, Work IQ participation and an environment generation switch only. | Fix: Add rows for signal-type/sample-row settings and glossary management. The tuning page gives model > How your data is understood > Sample table rows > On or Off > Save, and model > Glossary; cite fine-tune-semantic-model-signals. Keep model-specific scope explicit.
- [supported, minor] front matter: cost; Cost and licensing; rationale: cost / cost: Costs can vary through the consuming agents or services rather than a published dedicated semantic-generation meter. | Found: For Business Applications in Work IQ, you track cost by the experiences people use rather than by a dedicated business applications category. | Fix: Cite understand-costs and make the cost rationale start 'Variable.' Explain that Copilot Credit consumption belongs to the consuming experience, while separate semantic-generation pricing is not published. Do not describe the whole billing treatment as unpublished: licensed Copilot Chat grounding and Work IQ API consumption already have documented treatments. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs
-->
