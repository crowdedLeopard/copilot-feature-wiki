---
title: "Power Automate Process Mining: analyse processes with object-centric process mining"
slug: "power-automate-process-mining-analyze-processes-using-object-centric-process-mining"
roadmapId: 576870
topic: "power-platform"
products: ["Power Automate"]
summary: "Power Automate Process Mining can analyse event logs where one event touches several objects, such as orders and invoices. Makers ingest logs from Azure Data Lake or OneLake; process mining capacity licensing applies."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "review"
licensing:
  model: "mixed"
  notes: "Process mining is licensed as part of Power Automate: Power Automate Premium adds capacity per user, and the Process Mining add-on adds tenant-wide capacity. The OCPM pages name no separate licence or meter; this is not yet published."
audiences: ["power-platform-admin","maker","finops","service-owner"]
tags: ["power-automate","process-mining","object-centric","microsoft-fabric","licensing","security-roles"]
sources:
  - title: "Microsoft 365 Roadmap 576870"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576870"
    kind: "roadmap"
  - title: "Overview of object-centric process mining"
    url: "https://learn.microsoft.com/power-automate/object-centric-overview"
    kind: "learn"
  - title: "Ingest an object-centric event log"
    url: "https://learn.microsoft.com/power-automate/object-centric-ingest-event-log"
    kind: "learn"
  - title: "OCPM process overview"
    url: "https://learn.microsoft.com/power-automate/object-centric-process-overview"
    kind: "learn"
  - title: "Export OCPM semantic model into Fabric workspace"
    url: "https://learn.microsoft.com/power-automate/object-centric-semantic-model"
    kind: "learn"
  - title: "Overview of process mining and task mining in Power Automate"
    url: "https://learn.microsoft.com/power-automate/process-advisor-overview"
    kind: "learn"
  - title: "Security and privacy"
    url: "https://learn.microsoft.com/power-automate/process-advisor-security"
    kind: "learn"
  - title: "Ingest data from Fabric OneLake"
    url: "https://learn.microsoft.com/power-automate/process-mining-files-fabric-onelake"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "Improve automation monitoring with process map"
    url: "https://learn.microsoft.com/power-automate/automation-center-process-map"
    kind: "learn"
  - title: "Capacity add-ons"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on"
    kind: "learn"
  - title: "Tutorial: Allocate add-ons to environments (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons"
    kind: "learn"
  - title: "Currency Allocation - Patch Currency Allocation By Environment"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment"
    kind: "learn"
  - title: "OneLake compute and storage consumption"
    url: "https://learn.microsoft.com/fabric/onelake/onelake-consumption"
    kind: "learn"
  - title: "Microsoft Fabric permission model"
    url: "https://learn.microsoft.com/fabric/security/permission-model"
    kind: "learn"
  - title: "OneLake tenant settings"
    url: "https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake"
    kind: "learn"
videos: []
related: ["power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process","power-automate-process-mining-export-object-centric-process-mining-data-to-microsoft-fabri","power-automate-process-mining-get-support-for-normalized-schema-import-for-data-ingestion"]
controls:
  - governs: "Process mining capacity add-on allocated to an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Capacity add-ons > Summary > Add-ons > Manage"
      docs: "https://learn.microsoft.com/power-platform/admin/capacity-add-on"
    api:
      kind: "power-platform-api"
      call: "PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2022-03-01-preview"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons"
    note: "The current Currency Allocation API reference lists ProcessMiningDataStorage as an allocatable currency type; the generic UI page does not explicitly identify the Process Mining add-on."
  - governs: "Switch to turn object-centric process mining on or off"
    scope: "other"
    ui: null
    api: null
    note: "No setting specific to this feature is documented; Dataverse security roles control who can create and view processes."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:10:01"
changes:
  - date: "2026-11-18"
    note: "New briefing: object-centric process mining in Power Automate Process Mining, with ingestion prerequisites, capacity licensing and the controls Microsoft documents."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 69 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: Fabric export now described as creating a semantic model and report, capacity-pool and Fabric cost statements aligned with Learn, and the capacity allocation path and API note fixed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 71
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "e534a0c439f4973354e14f2963ca1d38"
---

## What's changing

Power Automate Process Mining now supports object-centric process mining (OCPM), which analyses a process by following the objects involved, such as orders, deliveries and invoices, instead of forcing every event into a single case ID. Microsoft's overview says OCPM models this by recording events that relate to many objects and object types in one process.

A maker creates an OCPM process from an object-centric event log. Per the ingest page, the log is stored as a CSV file in Azure Data Lake Gen2 or OneLake, and the maker selects **Process mining** > **Start here**, then **Object-centric process mining**. On the mapping screen the maker must map one Activity attribute, one Start event attribute and at least two Object type attributes. The wizard also offers an optional step to export the OCPM semantic model to a Fabric workspace, or to skip it. Once ingestion finishes, the maker lands on a Process overview with a process map, object counts and a process analysis widget with filters.

The roadmap item states the feature is Launched, with a target date of June CY2026 and a preview date of November CY2025. It lists General Availability and Preview as release phases, for Worldwide (Standard Multi-Tenant) on the web, and says it is enabled automatically for admins, makers and marketers. The Learn page for the OCPM process overview still carries a Preview label and says only the **Process overview** tab and the **Default** view are available in the preview, so the roadmap's release phases and Learn's labels should be read together.

## Why it matters

OCPM is a new analysis option for makers and analysts. The roadmap says the feature is enabled automatically, so there is no admin step to turn it on; the decisions that remain are who may build these models, where the source data sits, and whether the extra data fits the process mining capacity you have licensed.

The practical exposure is that the event logs describe business objects such as orders and invoices and are ingested from a data lake, with an optional copy of the semantic model going to a Fabric workspace. If nobody acts, nothing is documented as changing for users who do not build process mining models, but makers with the Environment maker role can start doing so.

## Risk assessment

**Data exposure**

- Ingestion reads an event log from Azure Data Lake Gen2 or OneLake, and the log carries object IDs and optional event and object attributes, including financial ones, which the ingest page calls optional but highly recommended. Check what the source files contain before makers point process mining at them.
- The optional export step writes the OCPM semantic model to a Fabric workspace and lakehouse the maker selects. Access to that copy is governed in Fabric, not in Power Automate.
- Process data counts against capacity: Learn says the process data stored uses mostly file capacity.

**Security & identity**

- Process mining relies on Dataverse security roles: the Environment maker role can create, share and contribute to processes, administrators and system customizers can access all processes in the environment, and the Process Mining User role can only view process reports.
- For OneLake, the process mining ingestion page requires the Fabric workspace to be shared with the Process Insight Prod service principal with an Admin role, and the user doing the initial workspace setup needs the Admin role.

**Autonomy & actions**

- No autonomous business actions are described for OCPM; optional export creates a semantic model and report in Fabric. The Process overview is an analytics view, and its Refresh Data button triggers full ingestion and creation of the process model.

**Change & support**

- Microsoft Learn documents no OCPM-specific on/off setting at the time of writing (November 2026), so control rests on roles, capacity and the source data stores.
- The roadmap lists both General Availability and Preview, and the Learn overview page labels the Process overview as preview. Expect functionality to change, and tell makers which tabs are available.

## Cost and licensing

Process mining is licensed as part of Microsoft Power Automate, according to the Learn process mining overview. Each Power Automate Premium licence adds 50 MB of process mining capacity to a tenant-wide capacity pool, up to a total of 100 GB. At 100 GB you need the Process Mining add-on, a tenant-wide licence available for Power Automate Premium that adds 100 GB of process mining capacity plus 2 GB of Dataverse database capacity and 1 TB of Dataverse file capacity.

The Power Platform licensing FAQ lists the add-on at $5,000 for 100 GB of data stored per month, with Power Automate Premium as the required prerequisite, and says capacity should be bought for the peak utilisation over a 12-month contract. Customers can view highest monthly process mining usage in the Power Platform admin center. The FAQ says Power BI licences are not included in Power Automate Process Mining.

The pages that describe OCPM name no licence or meter of their own. OCPM is part of Power Automate Process Mining and is subject to its published process mining capacity pool; a separate OCPM-specific meter is not yet published. Fabric export creates a semantic model on Fabric Lakehouse delta tables. OneLake lakehouse storage is billed pay-as-you-go per GB, and OneLake read and write requests consume Fabric Capacity Units.

## Scope

OCPM is part of Power Automate Process Mining on the web. The roadmap lists Worldwide (Standard Multi-Tenant) only and does not list GCC, GCC High or DoD.

Prerequisites on the Learn process mining overview: a Power Platform environment with a Dataverse database, and the Environment Maker role for users who create, share and contribute to processes. OneLake ingestion needs a Fabric workspace other than **My workspace**, the Fabric tenant setting **Users can access data stored in OneLake with apps external to Fabric** switched on, and the workspace shared with the Process Insight Prod service principal as Admin. No data transformation is available after ingestion, so logs must be in final event log format first.

## Governance guidance

### Before rollout

- Check how much process mining capacity your Power Automate Premium licences provide and whether the Process Mining add-on is held (first controls row).
- Identify which data lake containers and lakehouses hold event logs with object IDs or financial attributes, and decide which may be ingested.

### At rollout

- Tell makers that the roadmap says the feature is enabled automatically, and that the Learn Process overview is labelled Preview with a limited set of tabs.
- Agree whether makers should use the optional **Choose where to export** step or **Skip export**, since the export places a semantic model in a Fabric workspace.

### After rollout

- Review capacity usage in the Power Platform admin center against the licensed pool (first controls row).
- Watch Message center and the OCPM Learn pages for the Preview labels to be removed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Process mining capacity add-on allocated to an environment</strong><br><small>Environment</small><br><small class="controls__note">The current Currency Allocation API reference lists ProcessMiningDataStorage as an allocatable currency type; the generic UI page does not explicitly identify the Process Mining add-on.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Capacity add-ons › Summary › Add-ons › Manage <a href="https://learn.microsoft.com/power-platform/admin/capacity-add-on" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2022-03-01-preview</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to turn object-centric process mining on or off</strong><br><small class="controls__note">No setting specific to this feature is documented; Dataverse security roles control who can create and view processes.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns OCPM on or off in the Power Platform admin center or through an API at the time of writing (November 2026), hence the empty row. Access is governed by Dataverse security roles (Environment maker, Process Mining User, and the administrator and system customizer access described on the Learn security page); Microsoft's security page says not to assign the internal Process Mining Application role or change the privileges of the Process Mining User and Process Mining Application roles.

The current Currency Allocation API reference lists ProcessMiningDataStorage as an allocatable currency type; the generic UI page does not explicitly identify the Process Mining add-on. The tutorial uses API version 2022-03-01-preview; the current Currency Allocation reference documents 2024-10-01. The OneLake tenant setting is configured by a Fabric administrator in Fabric, outside Power Platform.

## Open questions

- Is any OCPM-specific meter planned, separate from the process mining capacity pool? Watch the Power Platform licensing FAQ and the process mining overview.
- Is there, or will there be, an environment or tenant setting to disable OCPM for makers? Watch the Learn pages for OCPM and the Power Platform admin center release notes.
- Which audit or activity log events record OCPM process creation, ingestion and sharing? None is documented for OCPM at the time of writing (November 2026).
- The roadmap shows both General Availability and Preview while the Learn Process overview page is labelled Preview: which parts are generally available, and what does the Fabric semantic model export (preview) require on the Fabric side?

<!-- rationale
risk: Medium. Makers load event logs from Azure Data Lake or OneLake into process mining, and an optional step exports the model to a Fabric workspace; Microsoft Learn documents no switch specific to this feature at the time of writing (November 2026).
cost: Medium. Process mining capacity comes from Power Automate Premium licences (50 MB each, up to 100 GB per tenant); beyond that the Process Mining add-on lists at $5,000 for 100 GB of data stored a month. OCPM-specific metering is not yet published.
impact: Medium. Makers and analysts who build process mining models notice it; the roadmap says it is enabled automatically.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls: first table row / command: The cited tutorial documents PATCH of the environment allocations endpoint with api-version=2022-03-01-preview to adjust add-on allocations. | Found: Invoke-RestMethod -Method Patch -Uri "https://api.powerplatform.com/licensing/environments/$EnvironmentId/allocations?api-version=2022-03-01-preview" | Fix: Append to controls[0].note: 'The request body sets currencyAllocations, with currencyType and allocated specifying each allocation.' These properties appear in the cited tutorial's request body. Keep the existing distinction between the tutorial's API version and the current reference. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons
- [supported, minor] Governance controls / role: A Fabric administrator can configure the OneLake tenant setting in Fabric. | Found: These roles provide access to the admin experience in Govern and control over organization-wide Fabric settings, usage metrics, and admin features, except for licensing. | Fix: Add https://learn.microsoft.com/fabric/admin/roles to sources for the Fabric administrator statement; retain the existing OneLake tenant-settings citation. | Source: https://learn.microsoft.com/fabric/admin/roles
- [contradicted, minor] Governance guidance: After rollout; controls[0] / consistency: The first controls row represents the checklist's capacity-usage monitoring control. | Found: Review capacity usage in the Power Platform admin center against the licensed pool (first controls row). / Process mining capacity add-on allocated to an environment | Fix: Remove '(first controls row)' from the After rollout usage-monitoring bullet: that row allocates capacity rather than displaying process mining usage. The checklist names capacity-usage monitoring without a corresponding row; do not add a row as part of this correction.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The controls table covers the checklist's optional Fabric export decision. | Found: Agree whether makers should use the optional Choose where to export step or Skip export / The controls table lists only capacity allocation and the undocumented OCPM on/off switch. | Fix: The At rollout export-decision bullet names a control with no table row. Remove that checklist bullet if table/checklist parity is required; retain the supported export description in What's changing. Do not add a control row as part of this correction.
-->
