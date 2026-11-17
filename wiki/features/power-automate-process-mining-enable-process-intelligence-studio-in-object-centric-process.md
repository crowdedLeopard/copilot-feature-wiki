---
title: "Power Automate process mining: Process Intelligence Studio for object-centric models"
slug: "power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process"
roadmapId: 576765
topic: "power-platform"
products: ["Power Automate"]
summary: "The roadmap plans to extend the customisable Process Intelligence Studio workspace, with tabs, tile layouts and cascading filters, to object-centric process mining models."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "none"
licensing:
  model: "unknown"
  notes: "Additional licensing for this change is not yet published; the documented Power Automate process mining licensing remains the baseline."
audiences: ["maker","service-owner","power-platform-admin"]
tags: ["power-automate","process-mining","object-centric","process-intelligence","analytics"]
sources:
  - title: "Process intelligence experience overview"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-overview"
    kind: "learn"
  - title: "Overview of object-centric process mining"
    url: "https://learn.microsoft.com/power-automate/object-centric-overview"
    kind: "learn"
  - title: "OCPM process overview"
    url: "https://learn.microsoft.com/power-automate/object-centric-process-overview"
    kind: "learn"
  - title: "Ingest an object-centric event log"
    url: "https://learn.microsoft.com/power-automate/object-centric-ingest-event-log"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576765"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576765"
    kind: "roadmap"
  - title: "Capacity add-ons"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on"
    kind: "learn"
  - title: "List tenant settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/list-tenantsettings"
    kind: "learn"
  - title: "Currency Allocation - Patch Currency Allocation By Environment"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment"
    kind: "learn"
  - title: "Bring your own Azure Data Lake Storage Gen2"
    url: "https://learn.microsoft.com/power-automate/process-mining-byo-azure-data-lake"
    kind: "learn"
  - title: "Ingest data from Fabric OneLake"
    url: "https://learn.microsoft.com/power-automate/process-mining-files-fabric-onelake"
    kind: "learn"
  - title: "Azure Data Lake Storage hierarchical namespace"
    url: "https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-namespace#decide-whether-to-enable-a-hierarchical-namespace"
    kind: "learn"
  - title: "Storage tiers in OneLake"
    url: "https://learn.microsoft.com/fabric/onelake/onelake-storage-tiers#storage-tiers-and-onelake-consumption"
    kind: "learn"
  - title: "Who may allocate add-on capacity (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Process mining capacity allocated to an environment"
    scope: "environment"
    ui: null
    api:
      kind: "power-platform-api"
      call: "PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2024-10-01 with body {\"currencyAllocations\":[{\"currencyType\":\"ProcessMiningDataStorage\",\"allocated\":<count>}]}"
      docs: "https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment"
  - governs: "Who may allocate add-on capacity"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Settings > Power Platform settings > Tenant settings > Add-on capacity assignments > Only specific admins"
      docs: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity"
    api: null
    note: "The preview list-tenantsettings documentation defines disableCapacityAllocationByEnvironmentAdmins, but the Set-TenantSettings reference does not document a PowerShell call for this setting."
  - governs: "Switch for Process Intelligence Studio or object-centric models"
    scope: "environment"
    ui: null
    api: null
    note: "Access follows Power Automate environment roles and the storage location of the event log."
confidence: "medium"
created: "2026-11-15"
updated: "2026-11-17"
roadmapModified: "2026-10-16T19:08:49"
changes:
  - date: "2026-11-15"
    note: "New briefing: Process Intelligence Studio for object-centric process mining, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected the capacity allocation path and API call, added the PowerShell tenant setting for who may allocate capacity, softened the autonomy statement, attributed OCPM parity to the roadmap plan and raised impact to medium."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 42 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the filter scope to the current tab, removed the unconfirmed admin centre path for process mining capacity, reworded the licensing note and removed checklist items without a control row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 43 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Removed the unsupported Set-TenantSettings PowerShell call from the add-on capacity control and noted that the Set-TenantSettings reference does not document one."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 43
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f7d196f87ca1dd2000fb873ac8fc894a"
---

## What's changing

Process Intelligence Studio is the customisable analysis workspace in Power Automate Process Mining. It offers tab-based navigation, tiles (cards) arranged in flexible grid layouts and filters applied across all cards and visualisations on the current tab. The roadmap also describes saved workspace configurations that teams can reuse as analysis templates and share as standardised views.

The roadmap item plans to extend it to object-centric process mining (OCPM) models, where one event can relate to several objects such as orders, invoices and payments, and describes this as full functionality for OCPM models. Learn describes OCPM models built from an object-centric event log held in Azure Data Lake Gen2 or OneLake. Learn's OCPM process overview page currently documents a preview in which only the Process overview tab and the Default view are available.

The roadmap shows a preview targeted for September CY2026 and general availability targeted for October CY2026 in Worldwide; the status is In development. Learn calls the case-centric interface the process intelligence experience.

## Why it matters

If the roadmap plan holds, teams analysing multi-object processes get the same workspace as for case-centric ones. Governance impact is mostly about who can access event data and the saved views shared with colleagues.

## Risk assessment

**Data exposure**
- Event logs can contain business data such as order and invoice identifiers; access follows process and environment permissions.

**Security & identity**
- Learn mentions the Environment Maker role for creating processes.

**Autonomy & actions**
- The roadmap describes an analysis workspace, not a new autonomous automation capability.

**Change & support**
- Saved workspaces shared across teams need ownership to avoid conflicting views.

## Cost and licensing

Additional licensing for this change is not yet published; the documented Power Automate process mining licensing remains the baseline. Process mining has its own licensing in Power Automate, and OCPM data sits in Azure Data Lake or OneLake, which carries storage cost. Confirm current licence terms on Learn.

## Scope

Power Automate Process Mining users in the Worldwide cloud, on the web. The roadmap plans the workspace for both OCPM and case-centric process models.

## Governance guidance

### Before rollout
- Confirm which processes and event logs are used with OCPM, and whether each log is held in Azure Data Lake Gen2 or OneLake.

### At rollout
- Create shared templates for common analyses, and name an owner for each template that teams will share.

### After rollout
- Retire outdated saved workspaces so that teams do not compare conflicting views.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Process mining capacity allocated to an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2024-10-01 with body {&quot;currencyAllocations&quot;:[{&quot;currencyType&quot;:&quot;ProcessMiningDataStorage&quot;,&quot;allocated&quot;:&lt;count&gt;}]}</code> <a href="https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who may allocate add-on capacity</strong><br><small>Tenant</small><br><small class="controls__note">The preview list-tenantsettings documentation defines disableCapacityAllocationByEnvironmentAdmins, but the Set-TenantSettings reference does not document a PowerShell call for this setting.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Power Platform settings › Tenant settings › Add-on capacity assignments › Only specific admins <a href="https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for Process Intelligence Studio or object-centric models</strong><br><small>Environment</small><br><small class="controls__note">Access follows Power Automate environment roles and the storage location of the event log.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Governance here is capacity and roles rather than a feature flag. Capacity comes from Power Automate Premium licences and the Process Mining add-on, pooled tenant-wide and allocated per environment, as set out in the [licensing section](https://learn.microsoft.com/power-automate/process-advisor-overview#licensing). Roles for processes are described in [process mining security](https://learn.microsoft.com/power-automate/process-advisor-security). The programmability tutorial for [allocating add-ons](https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons) shows the API in a flow.

## Open questions

- Does OCPM need a separate licence or capacity?
- Which tile types are available for OCPM at launch?
- Are saved workspaces solution-aware?

<!-- rationale
risk: Low. The roadmap describes an analysis workspace over process data the organisation has already ingested, not a new autonomous automation capability.
cost: Low, provisional. No change to licensing is stated; existing Power Automate process mining licensing and data lake storage costs continue to apply.
impact: Medium. The roadmap says it is enabled automatically for admins, makers and marketers, and it affects specific roles: process analysts and process owners.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Governance controls table / absence: The Set-TenantSettings reference does not document a PowerShell call specifically for disableCapacityAllocationByEnvironmentAdmins. | Found: Searched: 'disableCapacityAllocationByEnvironmentAdmins update tenant settings API PowerShell'. Read the entire Set-TenantSettings reference: its example sets WalkMeOptOut and its parameters are RequestBody and ApiVersion; the capacity-allocation property is not present. | Fix: Add https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings to sources, and date the note's reference check 'at the time of writing (November 2026)'.
-->
