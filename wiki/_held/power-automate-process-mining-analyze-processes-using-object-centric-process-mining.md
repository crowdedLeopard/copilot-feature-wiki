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
  - title: "Process mining capacity add-on allocated to an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-add-on"
    kind: "learn"
  - title: "Process mining capacity add-on allocated to an environment (Power Platform API)"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons"
    kind: "learn"
videos: []
related: ["power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process","power-automate-process-mining-export-object-centric-process-mining-data-to-microsoft-fabri","power-automate-process-mining-get-support-for-normalized-schema-import-for-data-ingestion"]
controls:
  - governs: "Process mining capacity add-on allocated to an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Capacity add-ons > Summary > Manage"
      docs: "https://learn.microsoft.com/power-platform/admin/capacity-add-on"
    api:
      kind: "power-platform-api"
      call: "PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2022-03-01-preview"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons"
    note: "General add-on allocation control: the pages read do not name the Process Mining add-on or its currency type, so Microsoft has not confirmed it applies here."
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
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 61
  unconfirmed: 2
  contradicted: 6
  attempts: 1
  hash: "5b78007b42911a6098c4dba4d34b7f7f"
---

## What's changing

Power Automate Process Mining now supports object-centric process mining (OCPM), which analyses a process by following the objects involved, such as orders, deliveries and invoices, instead of forcing every event into a single case ID. Microsoft's overview says OCPM models this by recording events that relate to many objects and object types in one process.

A maker creates an OCPM process from an object-centric event log. Per the ingest page, the log is stored as a CSV file in Azure Data Lake Gen2 or OneLake, and the maker selects **Process mining** > **Start here**, then **Object-centric process mining**. On the mapping screen the maker must map one Activity attribute, one Start event attribute and at least two Object type attributes. The wizard also offers an optional step to export the OCPM semantic model to a Fabric workspace, or to skip it. Once ingestion finishes, the maker lands on a Process overview with a process map, object counts and a process analysis widget with filters.

The roadmap item states the feature is Launched, with a target date of June CY2026 and a preview date of November CY2025. It lists General Availability and Preview as release phases, for Worldwide (Standard Multi-Tenant) on the web, and says it is enabled automatically for admins, makers and marketers. The Learn page for the OCPM process overview still carries a Preview label and says only the **Process overview** tab and the **Default** view are available in the preview, so the roadmap's release phases and Learn's labels should be read together.

## Why it matters

OCPM is a new analysis option for makers and analysts, and it does not change what existing processes or flows do. The roadmap says the feature is enabled automatically, so there is no admin step to turn it on; the decisions that remain are who may build these models, where the source data sits, and whether the extra data fits the process mining capacity you have licensed.

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

- No autonomous or write actions are described for OCPM. The Process overview is an analytics view, and its Refresh Data button triggers full ingestion and creation of the process model.

**Change & support**

- Microsoft Learn documents no OCPM-specific on/off setting at the time of writing (November 2026), so control rests on roles, capacity and the source data stores.
- The roadmap lists both General Availability and Preview, and the Learn overview page labels the Process overview as preview. Expect functionality to change, and tell makers which tabs are available.

## Cost and licensing

Process mining is licensed as part of Microsoft Power Automate, according to the Learn process mining overview. Each Power Automate Premium licence adds 50 MB of process mining capacity to a tenant-wide capacity pool, up to a total of 100 GB. At 100 GB you need the Process Mining add-on, a tenant-wide licence available for Power Automate Premium that adds 100 GB of process mining capacity plus 2 GB of Dataverse database capacity and 1 TB of Dataverse file capacity.

The Power Platform licensing FAQ lists the add-on at $5,000 for 100 GB of data stored per month, with Power Automate Premium as the required prerequisite, and says capacity should be bought for the peak utilisation over a 12-month contract. Customers can view highest monthly process mining usage in the Power Platform admin center. The FAQ says Power BI licences are not included in Power Automate Process Mining.

The pages that describe OCPM name no licence or meter of their own. Whether OCPM data draws on the same capacity pool, and what the Fabric export (preview) costs on the Fabric side, is not yet published.

## Scope

OCPM is part of Power Automate Process Mining on the web. The roadmap lists Worldwide (Standard Multi-Tenant) only and does not list GCC, GCC High or DoD.

Prerequisites on the Learn process mining overview: a Power Platform environment with a Dataverse database, and the Environment Maker role for users who create, share and contribute to processes. OneLake ingestion needs a Fabric workspace other than **My workspace**, the Fabric tenant setting **Users can access data stored in OneLake with apps external to Fabric** switched on, and the workspace shared with the Process Insight Prod service principal as Admin. No data transformation is available after ingestion, so logs must be in final event log format first.

## Governance guidance

### Before rollout

- Confirm which environments have a Dataverse database and who holds the Environment maker role, because that role is what lets a user create, share and contribute to process mining processes.
- Check how much process mining capacity your Power Automate Premium licences provide and whether the Process Mining add-on is held (first controls row).
- Ask your Fabric administrator whether the OneLake tenant setting **Users can access data stored in OneLake with apps external to Fabric** is switched on, if makers will ingest from OneLake.
- Identify which data lake containers and lakehouses hold event logs with object IDs or financial attributes, and decide which may be ingested.

### At rollout

- Tell makers that the roadmap says the feature is enabled automatically, and that the Learn Process overview is labelled Preview with a limited set of tabs.
- Agree whether makers should use the optional **Choose where to export** step or **Skip export**, since the export places a semantic model in a Fabric workspace.
- Give only the people who must view results the Process Mining User role, which can only view process reports.

### After rollout

- Review capacity usage in the Power Platform admin center against the licensed pool (first controls row).
- Review who is Admin on the Fabric workspace shared with the Process Insight Prod service principal.
- Watch Message center and the OCPM Learn pages for the Preview labels to be removed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Process mining capacity add-on allocated to an environment</strong><br><small>Environment</small><br><small class="controls__note">General add-on allocation control: the pages read do not name the Process Mining add-on or its currency type, so Microsoft has not confirmed it applies here.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Capacity add-ons › Summary › Manage <a href="https://learn.microsoft.com/power-platform/admin/capacity-add-on" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2022-03-01-preview</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to turn object-centric process mining on or off</strong><br><small class="controls__note">No setting specific to this feature is documented; Dataverse security roles control who can create and view processes.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns OCPM on or off in the Power Platform admin center or through an API at the time of writing (November 2026), hence the empty row. Access is governed by Dataverse security roles (Environment maker, Process Mining User, and the administrator and system customizer access described on the Learn security page); Microsoft's security page says not to assign the internal Process Mining Application role or change the privileges of the Process Mining User and Process Mining Application roles.

The capacity row is a general add-on control: the Learn page does not name the Process Mining add-on, so confirm it appears there. The OneLake tenant setting is configured by a Fabric administrator in Fabric, outside Power Platform.

## Open questions

- Does OCPM data count against the same 100 GB process mining capacity pool as case-centric processes, and is any OCPM-specific meter planned? Watch the Power Platform licensing FAQ and the process mining overview.
- Is there, or will there be, an environment or tenant setting to disable OCPM for makers? Watch the Learn pages for OCPM and the Power Platform admin center release notes.
- Which audit or activity log events record OCPM process creation, ingestion and sharing? None is documented for OCPM at the time of writing (November 2026).
- The roadmap shows both General Availability and Preview while the Learn Process overview page is labelled Preview: which parts are generally available, and what does the Fabric semantic model export (preview) require on the Fabric side?

<!-- rationale
risk: Medium. Makers load event logs from Azure Data Lake or OneLake into process mining, and an optional step exports the model to a Fabric workspace; Microsoft Learn documents no switch specific to this feature at the time of writing (November 2026).
cost: Medium. Process mining capacity comes from Power Automate Premium licences (50 MB each, up to 100 GB per tenant); beyond that the Process Mining add-on lists at $5,000 for 100 GB of data stored a month. OCPM-specific metering is not yet published.
impact: Medium. Makers and analysts who build process mining models notice it; the roadmap says it is enabled automatically, but nothing appears for other users until a maker ingests an object-centric event log.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: OCPM does not change what existing processes or flows do. | Found: Searched: "object-centric" "autonomous" "existing processes"; opened object-centric-overview, object-centric-ingest-event-log and object-centric-process-overview. They describe the new analysis workflow, not a guarantee about all existing processes or flows. | Fix: Remove 'and it does not change what existing processes or flows do'.
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: No write actions are described for OCPM. | Found: When you publish a process to Fabric workspace, it creates a new DirectLake semantic model and an empty Power BI report connected to the semantic model. | Fix: Replace 'No autonomous or write actions are described for OCPM' with 'No autonomous business actions are described for OCPM; optional export creates a semantic model and report in Fabric.' Cite https://learn.microsoft.com/power-automate/object-centric-semantic-model. | Source: https://learn.microsoft.com/power-automate/object-centric-semantic-model
- [contradicted, blocker] Cost and licensing; Open questions / licensing: Whether OCPM data draws on the existing process mining capacity pool is not yet published. | Found: Each Power Automate Premium license adds 50 MB of process mining capacity to a tenant-wide capacity pool up to a total of 100 GB. | Fix: Replace the capacity-pool uncertainty with 'OCPM is part of Power Automate Process Mining and is subject to its published process mining capacity pool.' Remove the matching capacity-pool question from Open questions; retain only the narrower question about a separate OCPM-specific meter. | Source: https://learn.microsoft.com/power-automate/process-advisor-overview
- [contradicted, blocker] Cost and licensing / cost: What the optional Fabric export costs on the Fabric side is not yet published. | Found: OneLake storage is billed at a pay-as-you-go rate per GB of data used and doesn't consume Fabric Capacity Units (CUs). Fabric items like lakehouses and warehouses consume OneLake storage. | Fix: Replace the Fabric-cost uncertainty with 'Fabric export creates a semantic model on Fabric Lakehouse delta tables. OneLake lakehouse storage is billed pay-as-you-go per GB, and OneLake read and write requests consume Fabric Capacity Units.' Cite https://learn.microsoft.com/power-automate/object-centric-semantic-model and https://learn.microsoft.com/fabric/onelake/onelake-consumption. | Source: https://learn.microsoft.com/fabric/onelake/onelake-consumption
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The allocation path is Power Platform admin center > Licensing > Capacity add-ons > Summary > Manage. | Found: On the Capacity page, select the Summary tab. On the Summary tab, do one of the following steps to open the Manage add-ons screen: - Scroll down to the Add-ons section, and select Manage. | Fix: Replace the path in controls[0].ui and the rendered table with 'Licensing > Capacity add-ons > Summary > Add-ons > Manage'; the existing path omits the Add-ons section. | Source: https://learn.microsoft.com/power-platform/admin/capacity-add-on
- [contradicted, blocker] controls[0].note; Governance controls table and prose / absence: Microsoft has not confirmed that the allocation API applies to Process Mining capacity or published its currency type. | Found: Allocate and deallocate the currencies for the environment. ExternalCurrencyType The available currency type that can be allocated to an environment. ProcessMiningDataStorage | Fix: Replace the API applicability warning in the control note and Governance controls prose with 'The current Currency Allocation API reference lists ProcessMiningDataStorage as an allocatable currency type; the generic UI page does not explicitly identify the Process Mining add-on.' Cite https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment. | Source: https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: The cited tutorial documents PATCH https://api.powerplatform.com/licensing/environments/{environmentId}/allocations?api-version=2022-03-01-preview for allocating add-ons. | Found: Invoke-RestMethod -Method Patch -Uri "https://api.powerplatform.com/licensing/environments/$EnvironmentId/allocations?api-version=2022-03-01-preview" | Fix: Keep the tutorial-backed endpoint, but add to its note: 'The tutorial uses API version 2022-03-01-preview; the current Currency Allocation reference documents 2024-10-01.' Cite https://learn.microsoft.com/rest/api/power-platform/licensing/currency-allocation/patch-currency-allocation-by-environment. The pre-check's missing-endpoint warning is not confirmed. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-allocate-capacity-addons
- [supported, minor] Risk assessment: Data exposure / applicability: Access to the exported Fabric copy is governed by Fabric permissions rather than Power Automate permissions. | Found: Workspace roles define access permissions for workspaces. ... Item permissions are used to control access to individual Fabric items within a workspace. | Fix: Add https://learn.microsoft.com/fabric/security/permission-model to sources for the Fabric access-control statement. | Source: https://learn.microsoft.com/fabric/security/permission-model
- [supported, minor] Governance guidance: Before rollout; Governance controls / admin-path: The OneLake external-app tenant setting is configured in Fabric, outside Power Platform. | Found: OneLake tenant settings are configured in Configurations > Tenant settings in the Govern section of the OneLake catalog. | Fix: Add https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake to sources for where the OneLake tenant setting is configured. | Source: https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist asks readers to check or assign controls that have no matching controls-table row. | Found: Confirm ... who holds the Environment maker role; Ask ... whether the OneLake tenant setting ... is switched on; Give ... the Process Mining User role; Review who is Admin on the Fabric workspace. The table contains only capacity allocation and an OCPM switch. | Fix: The Environment maker and Process Mining User assignments, OneLake external-app tenant setting, and Fabric workspace Admin review have no matching table row. Remove those checklist instructions to resolve the mismatch without adding unverified control rows.
- [unsupported, minor] rationale: impact / behaviour: Nothing appears for other users until a maker ingests an object-centric event log. | Found: Searched: "object-centric" "autonomous" "existing processes". Opened OCPM overview, ingestion and process overview. They establish when the generated overview appears, not that no other interface change appears to any other user. | Fix: Remove 'but nothing appears for other users until a maker ingests an object-centric event log' from the impact rationale.
-->
