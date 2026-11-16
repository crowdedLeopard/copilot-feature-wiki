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
  - title: "Process mining capacity allocated to an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#allocate-or-change-capacity-in-an-environment"
    kind: "learn"
  - title: "Process mining capacity allocated to an environment (Power Platform API)"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment"
    kind: "learn"
  - title: "Who may allocate add-on capacity (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity"
    kind: "learn"
  - title: "Who may allocate add-on capacity (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Process mining capacity allocated to an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Capacity add-ons > Summary > Add-ons > Manage"
      docs: "https://learn.microsoft.com/power-platform/admin/capacity-add-on#allocate-or-change-capacity-in-an-environment"
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
    api:
      kind: "powershell"
      call: "Set-TenantSettings -RequestBody @{disableCapacityAllocationByEnvironmentAdmins=$true}"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings"
    note: "The setting definition is on a Learn page marked preview (list tenant settings)."
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
  - date: "2026-11-16"
    note: "Corrected the capacity allocation path and API call, added the PowerShell tenant setting for who may allocate capacity, softened the autonomy statement, attributed OCPM parity to the roadmap plan and raised impact to medium."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 42 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 39
  unconfirmed: 1
  contradicted: 2
  attempts: 2
  hash: "7d446e94835c418ff6f7571e333175cd"
---

## What's changing

Process Intelligence Studio is the customisable analysis workspace in Power Automate Process Mining. It offers tab-based navigation, tiles (cards) arranged in flexible grid layouts, filters applied once across all tiles, and saved workspace configurations that can be reused as templates.

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

Not yet published for this change. Process mining has its own licensing in Power Automate, and OCPM data sits in Azure Data Lake or OneLake, which carries storage cost. Confirm current licence terms on Learn.

## Scope

Power Automate Process Mining users in the Worldwide cloud, on the web. The roadmap plans the workspace for both OCPM and case-centric process models.

## Governance guidance

### Before rollout
- Confirm which processes and event logs are used with OCPM.
- Check who holds the Environment Maker role.

### At rollout
- Create shared templates for common analyses.

### After rollout
- Review who can see sensitive process data.
- Retire outdated saved workspaces.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Process mining capacity allocated to an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Capacity add-ons › Summary › Add-ons › Manage <a href="https://learn.microsoft.com/power-platform/admin/capacity-add-on#allocate-or-change-capacity-in-an-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2024-10-01 with body {&quot;currencyAllocations&quot;:[{&quot;currencyType&quot;:&quot;ProcessMiningDataStorage&quot;,&quot;allocated&quot;:&lt;count&gt;}]}</code> <a href="https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who may allocate add-on capacity</strong><br><small>Tenant</small><br><small class="controls__note">The setting definition is on a Learn page marked preview (list tenant settings).</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Power Platform settings › Tenant settings › Add-on capacity assignments › Only specific admins <a href="https://learn.microsoft.com/power-platform/admin/capacity-add-on#control-who-can-allocate-add-on-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-TenantSettings -RequestBody @{disableCapacityAllocationByEnvironmentAdmins=$true}</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
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

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[0].ui: applicability to Process mining capacity / applicability: The generic add-on allocation UI specifically permits allocation of Process Mining capacity. | Found: Searched: Power Automate process mining capacity allocation environment admin center ProcessMiningDataStorage; "process mining" "allocate" "capacity" "environment" "admin". Opened capacity-add-on and programmability-tutorial-allocate-capacity-addons; neither identifies Process Mining in the UI. | Fix: Set controls[0].ui to null and render that side as 'Not yet documented'. Keep its verified ProcessMiningDataStorage API call. The cited tutorial explicitly warns that not all add-ons are available in the admin UI, so the API enumeration alone does not establish UI availability.
- [contradicted, blocker] What's changing: filters applied once across all tiles / behaviour: The existing workspace applies filters across all tiles without restricting that statement to the active tab. | Found: Filters apply to all cards and visualizations on the current tab. | Fix: Replace 'filters applied once across all tiles' in What's changing with 'filters applied across all cards and visualisations on the current tab'. The roadmap-attributed summary may continue to describe the planned cascading filters. | Source: https://learn.microsoft.com/power-automate/process-mining-studio-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing; Cost and licensing; rationale: cost; Open questions / absence: Item-specific licensing changes or separate OCPM charges have not been published. | Found: Searched: object-centric process mining OCPM licensing Process Intelligence Studio Power Automate Premium capacity; "object-centric" "licensing" Power Automate. Opened process-advisor-overview, object-centric-overview, object-centric-ingest-event-log and power-automate-licensing/types. | Fix: Keep licensing.model unknown for the incremental change, but replace licensing.notes and the first Cost and licensing sentence with: 'Additional licensing for this change is not yet published; the documented Power Automate process mining licensing remains the baseline.' This avoids implying that baseline process mining entitlement is unconfirmed.
- [supported, minor] controls[2].note: storage location and access / applicability: The event-log storage source introduces access requirements for process mining. | Found: all users that have the Owner or Co-Owner role on the process must be attributed: Storage Blob Data Reader or Storage Blob Data Contributor role assigned Azure Resource Manager Reader role assigned, at minimum. | Fix: Add https://learn.microsoft.com/power-automate/process-mining-byo-azure-data-lake and https://learn.microsoft.com/power-automate/process-mining-files-fabric-onelake to sources for the statement about source-dependent access requirements. | Source: https://learn.microsoft.com/power-automate/process-mining-byo-azure-data-lake
- [supported, minor] What's changing: saved workspace configurations; Risk assessment: Change & support / record: The roadmap describes saved workspace configurations, reusable templates and views shared across the organisation. | Found: Process Intelligence Studio saves your workspace configurations, allowing teams to create reusable analysis templates and share standardized views across the organization for consistent process monitoring and improvement tracking. | Fix: Move 'saved workspace configurations that can be reused as templates' out of the unqualified current-capabilities sentence and replace it with: 'The roadmap also describes saved workspace configurations that teams can reuse as analysis templates and share as standardised views.'
- [supported, minor] Cost and licensing: Azure Data Lake storage; rationale: cost / cost: Azure Data Lake storage carries storage costs. | Found: To analyze differences in data storage prices, transaction prices, and storage capacity reservation pricing between accounts that have a flat namespace versus a hierarchical namespace, see Azure Data Lake Storage pricing. | Fix: Add https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-namespace#decide-whether-to-enable-a-hierarchical-namespace to sources for the Azure Data Lake storage-cost statement. | Source: https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-namespace#decide-whether-to-enable-a-hierarchical-namespace
- [supported, minor] Cost and licensing: OneLake storage; rationale: cost / cost: OneLake storage carries storage costs. | Found: Storage tiers affect both your pay-as-you-go rate for OneLake storage and your Fabric Capacity Unit (CU) consumption for OneLake transactions: Storage charges: The per-GB, per-month cost that's highest for hot storage and lowest for cold storage. | Fix: Add https://learn.microsoft.com/fabric/onelake/onelake-storage-tiers#storage-tiers-and-onelake-consumption to sources for the OneLake storage-cost statement. | Source: https://learn.microsoft.com/fabric/onelake/onelake-storage-tiers#storage-tiers-and-onelake-consumption
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls table / consistency: The checklist asks readers to review Environment Maker assignments and process-data access, but neither control has a corresponding table row. | Found: Check who holds the Environment Maker role. Review who can see sensitive process data. The table instead lists capacity allocation, who may allocate capacity, and an undocumented feature switch. | Fix: Remove the checklist bullets 'Check who holds the Environment Maker role' and 'Review who can see sensitive process data' to eliminate instructions for controls not represented in the table; do not add unverified control rows.
-->
