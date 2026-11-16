---
title: "Power Automate process mining: Process Intelligence Studio for object-centric models"
slug: "power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process"
roadmapId: 576765
topic: "power-platform"
products: ["Power Automate"]
summary: "The customisable Process Intelligence Studio workspace, with tabs, tile layouts and cascading filters, extends to object-centric process mining models."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "unknown"
  notes: "Not stated. Process mining licensing is documented separately and has not been confirmed for this item."
audiences: ["maker","service-owner","power-platform-admin"]
tags: ["power-automate","process-mining","object-centric","process-intelligence","analytics"]
sources:
  - title: "Process intelligence experience overview"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-overview"
    kind: "learn"
  - title: "Overview of object-centric process mining"
    url: "https://learn.microsoft.com/power-automate/object-centric-overview"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576765"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576765"
    kind: "roadmap"
  - title: "Process mining capacity allocated to an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#allocate-or-change-capacity-in-an-environment"
    kind: "learn"
  - title: "Process mining capacity allocated to an environment (Power Platform API)"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation"
    kind: "learn"
  - title: "Who may allocate add-on capacity (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity"
    kind: "learn"
videos: []
related: ["power-automate-ai-assisted-ui-automation-repair","managed-environments"]
controls:
  - governs: "Process mining capacity allocated to an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Capacity add-ons > Add-ons > Manage"
      docs: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#allocate-or-change-capacity-in-an-environment"
    api:
      kind: "power-platform-api"
      call: "Currency allocation operations (Power Platform licensing API)"
      docs: "https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation"
  - governs: "Who may allocate add-on capacity"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Settings > Power Platform settings > Tenant settings > Add-on capacity assignments > Only specific admins"
      docs: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity"
    api: null
  - governs: "Switch for Process Intelligence Studio or object-centric models"
    scope: "environment"
    ui: null
    api: null
    note: "Access follows Power Automate environment roles and the storage location of the event log."
confidence: "medium"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:08:49"
changes:
  - date: "2026-11-15"
    note: "New briefing: Process Intelligence Studio for object-centric process mining, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Process Intelligence Studio is the customisable analysis workspace in Power Automate Process Mining. It offers tab-based navigation, tiles (cards) arranged in flexible grid layouts, filters applied once across all tiles, and saved workspace configurations that can be reused as templates.

This item extends it to object-centric process mining (OCPM) models, where one event can relate to several objects such as orders, invoices and payments. Learn describes OCPM models built from an object-centric event log held in Azure Data Lake Gen2 or OneLake.

The roadmap shows a preview from September 2026 and general availability targeted for October 2026 in Worldwide. Learn calls the case-centric interface the process intelligence experience.

## Why it matters

Teams analysing multi-object processes get the same workspace as for case-centric ones. Governance impact is mostly about who can access event data and the saved views shared with colleagues.

## Risk assessment

**Data exposure**
- Event logs can contain business data such as order and invoice identifiers; access follows process and environment permissions.

**Security & identity**
- Learn mentions the Environment Maker role for creating processes.

**Autonomy & actions**
- None; it is analysis only.

**Change & support**
- Saved workspaces shared across teams need ownership to avoid conflicting views.

## Cost and licensing

Not yet published for this change. Process mining has its own licensing in Power Automate, and OCPM data sits in Azure Data Lake or OneLake, which carries storage cost. Confirm current licence terms on Learn.

## Scope

Power Automate Process Mining users in the Worldwide cloud, on the web. Applies to OCPM and case-centric process models.

## Governance guidance

### Before rollout
- [ ] Confirm which processes and event logs are used with OCPM.
- [ ] Check who holds the Environment Maker role.

### At rollout
- [ ] Create shared templates for common analyses.

### After rollout
- [ ] Review who can see sensitive process data.
- [ ] Retire outdated saved workspaces.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Process mining capacity allocated to an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Capacity add-ons › Add-ons › Manage <a href="https://learn.microsoft.com/power-platform/admin/capacity-add-on#allocate-or-change-capacity-in-an-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>Currency allocation operations (Power Platform licensing API)</code> <a href="https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who may allocate add-on capacity</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Power Platform settings › Tenant settings › Add-on capacity assignments › Only specific admins <a href="https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for Process Intelligence Studio or object-centric models</strong><br><small>Environment</small><br><small class="controls__note">Access follows Power Automate environment roles and the storage location of the event log.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Governance here is capacity and roles rather than a feature flag. Capacity comes from Power Automate Premium licences and the Process Mining add-on, pooled tenant-wide and allocated per environment, as set out in the [licensing section](https://learn.microsoft.com/power-automate/process-advisor-overview#licensing). Roles for processes are described in [process mining security](https://learn.microsoft.com/power-automate/process-advisor-security). The programmability tutorial for [allocating add-ons](https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons) shows the API in a flow.

## Open questions

- Does OCPM need a separate licence or capacity?
- Which tile types are available for OCPM at launch?
- Are saved workspaces solution-aware?

<!-- rationale
risk: Low. It is an analysis interface over process data the organisation has already ingested, with no new external actions.
cost: Low, provisional. No change to licensing is stated; existing Power Automate process mining licensing and data lake storage costs continue to apply.
impact: Low. Process analysts and owners use it; most users never see it.
-->
