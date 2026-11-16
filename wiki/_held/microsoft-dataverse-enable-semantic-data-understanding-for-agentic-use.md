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
