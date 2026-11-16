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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 33
  unconfirmed: 2
  contradicted: 4
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: previewDate; What's changing / record: The roadmap shows a preview from September 2026. | Found: "previewDate": "September CY2026", "status": "In development" | Fix: Replace 'a preview from September 2026' with 'a preview targeted for September CY2026'; the record still says In development on the verification date.
- [supported, minor] summary; What's changing; Why it matters; Scope / record: The item extends the full workspace to OCPM models alongside traditional case-centric models. | Found: Object-centric support: Extends full functionality to OCPM models, enabling multi-dimensional analysis of interconnected objects, relationships, and cross-object metrics within the same intuitive interface. | Fix: Attribute full workspace parity explicitly to the roadmap plan, rather than describing it as current OCPM behaviour. Add that https://learn.microsoft.com/power-automate/object-centric-process-overview currently documents an OCPM preview with only the Process overview tab and Default view.
- [supported, minor] What's changing; Cost and licensing / behaviour: OCPM models are built by ingesting an object-centric event log stored in Azure Data Lake Gen2 or OneLake. | Found: To access OCPM (object-centric process mining) in Power Automate Process Mining, first create a process model by ingesting the object-centric event log (OCEL). | Fix: Add https://learn.microsoft.com/power-automate/object-centric-ingest-event-log to sources; it explicitly instructs storing the event log in Azure Data Lake Gen2 or OneLake, whereas the cited conceptual overview does not. | Source: https://learn.microsoft.com/power-automate/object-centric-ingest-event-log
- [supported, minor] controls[2].note / applicability: The event log's storage location introduces access prerequisites. | Found: The Owner role (on a storage account level) must be attributed to the user performing the initial container setup (user then becomes the Owner of the process). | Fix: Cite https://learn.microsoft.com/power-automate/process-mining-byo-azure-data-lake and https://learn.microsoft.com/power-automate/process-mining-files-fabric-onelake for storage-specific prerequisites. Clarify that these are connection/setup permissions, not a claim that every report viewer needs direct storage access. | Source: https://learn.microsoft.com/power-automate/process-mining-byo-azure-data-lake
- [unsupported, major] Risk assessment: Autonomy & actions; rationale: risk / behaviour: The feature is analysis only and introduces no external actions. | Found: Searched: process intelligence experience actions analysis. Opened process-mining-studio-overview and object-centric-process-overview; they describe analytical functionality but do not expressly establish the blanket absence of external actions. | Fix: Replace the categorical absence with 'The roadmap describes an analysis workspace, not a new autonomous automation capability.' Keep the low-risk assessment as the wiki's judgement rather than an exhaustive product guarantee.
- [supported, minor] Cost and licensing; rationale: cost / cost: Azure Data Lake storage carries storage costs. | Found: Azure Data Lake Storage is priced at Azure Blob Storage levels. | Fix: Cite https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-introduction for the Azure Data Lake storage-cost statement. | Source: https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-introduction#azure-data-lake-storage-capabilities
- [supported, minor] Cost and licensing; rationale: cost / cost: OneLake storage carries storage costs. | Found: As you move from the hot tier to the cool or cold tier, static storage prices lower but transaction prices rise. | Fix: Cite https://learn.microsoft.com/fabric/onelake/onelake-storage-tiers for the OneLake storage-cost statement. | Source: https://learn.microsoft.com/fabric/onelake/onelake-storage-tiers
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The cited allocation page gives Licensing > Capacity add-ons > Add-ons > Manage. | Found: On the Capacity page, select the Summary tab. ... Scroll down to the Add-ons section, and select Manage. | Fix: Use 'Licensing > Capacity add-ons > Summary > Add-ons > Manage' for this docs URL. The separately linked programmability tutorial gives the older Add-ons tab > Manage route; mention that documentation difference rather than silently mixing the paths. | Source: https://learn.microsoft.com/power-platform/admin/capacity-add-on#allocate-or-change-capacity-in-an-environment
- [unsupported, blocker] controls[0].api; Governance controls table / command: 'Currency allocation operations (Power Platform licensing API)' supplies the API call for changing process mining allocations. | Found: Searched: Process mining capacity environment allocate. Opened currency-allocation and its Get/Patch references. The printed text is an operation-family description, not a call with an HTTP method, path, API version or allocation body. | Fix: Replace the label with 'PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2024-10-01' and document body {"currencyAllocations":[{"currencyType":"ProcessMiningDataStorage","allocated":<count>}]}. Set docs to https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment.
- [contradicted, blocker] controls[1].api; Governance controls table / absence: Automation for restricting who may allocate add-on capacity is not documented. | Found: disableCapacityAllocationByEnvironmentAdmins | Boolean | Ability to disable capacity allocation by environment administrators. Default value is false. | Fix: Replace null with PowerShell management using Set-TenantSettings -RequestBody @{disableCapacityAllocationByEnvironmentAdmins=$true}. Cite https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings and the setting definition at https://learn.microsoft.com/power-platform/admin/list-tenantsettings; flag the latter documentation as preview. | Source: https://learn.microsoft.com/power-platform/admin/list-tenantsettings#definitions
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist's controls for Environment Maker assignment and sensitive process access are represented in the controls table. | Found: Check who holds the Environment Maker role. ... Review who can see sensitive process data. ... Controls rows: capacity allocation, capacity allocators, and a missing feature switch. | Fix: Add controls rows for environment security-role assignments and process sharing/access, using the documented process mining security model. The note on the absent feature switch is not a row explaining either access control.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: An automatically enabled change for process analysts and owners has low impact because most users never see it. | Found: impact: low ... Low. Process analysts and owners use it; most users never see it. | Fix: Set impact to medium and explain that it affects specific analyst and process-owner roles. The scale reserves low for admins only or a small opt-in group; the record says this change is enabled automatically.
-->
