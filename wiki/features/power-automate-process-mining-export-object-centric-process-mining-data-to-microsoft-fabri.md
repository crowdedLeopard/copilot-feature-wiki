---
title: "Power Automate process mining: export object-centric models to a Microsoft Fabric semantic model"
slug: "power-automate-process-mining-export-object-centric-process-mining-data-to-microsoft-fabri"
roadmapId: 577826
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers can publish an object-centric process mining model to a Fabric workspace as a Direct Lake semantic model for Power BI. It is an optional wizard step; review Fabric access and licensing before makers use it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Process mining is licensed through Power Automate Premium (per user) plus a Process Mining add-on for capacity; Power BI licences are not included. Fabric and Power BI platform licensing applies to the export's items; the OCPM pages name no separate export-specific licence or meter."
audiences: ["power-platform-admin","maker","service-owner","security"]
tags: ["power-automate","process-mining","object-centric","semantic-model","data-export","microsoft-fabric","power-bi","analytics"]
sources:
  - title: "Microsoft 365 Roadmap 577826"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577826"
    kind: "roadmap"
  - title: "Ingest an object-centric event log"
    url: "https://learn.microsoft.com/power-automate/object-centric-ingest-event-log"
    kind: "learn"
  - title: "Export OCPM semantic model into Fabric workspace"
    url: "https://learn.microsoft.com/power-automate/object-centric-semantic-model"
    kind: "learn"
  - title: "OCPM process overview"
    url: "https://learn.microsoft.com/power-automate/object-centric-process-overview"
    kind: "learn"
  - title: "Customize a report with your own Fabric workspace"
    url: "https://learn.microsoft.com/power-automate/process-mining-fabric-workspace"
    kind: "learn"
  - title: "Overview of process mining and task mining in Power Automate"
    url: "https://learn.microsoft.com/power-automate/process-advisor-overview"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "OneLake tenant settings"
    url: "https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake"
    kind: "learn"
  - title: "Tenants - Update Tenant Setting"
    url: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting"
    kind: "learn"
  - title: "Understand Microsoft Fabric licenses and capacity"
    url: "https://learn.microsoft.com/fabric/enterprise/licenses"
    kind: "learn"
  - title: "Semantic model permissions"
    url: "https://learn.microsoft.com/power-bi/connect-data/service-datasets-permissions"
    kind: "learn"
  - title: "Understand Microsoft Fabric admin roles"
    url: "https://learn.microsoft.com/fabric/admin/roles"
    kind: "learn"
  - title: "Create an object-centric event log"
    url: "https://learn.microsoft.com/power-automate/object-centric-create-event-log"
    kind: "learn"
videos: []
related: ["power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process"]
controls:
  - governs: "Whether a process is exported to a Fabric workspace, and which workspace"
    scope: "maker"
    ui:
      surface: "Power Automate (maker)"
      path: "Process mining > Start here > Object-centric process mining > Data source > Azure Data Lake or OneLake > Continue > Choose where to export > Continue or Skip export"
      docs: "https://learn.microsoft.com/power-automate/object-centric-ingest-event-log"
    api: null
    note: "Maker-side choice in the ingest wizard. Microsoft Learn documents no API for it at the time of writing (November 2026)."
  - governs: "Whether apps external to Fabric can read data stored in OneLake"
    scope: "tenant"
    ui:
      surface: "OneLake catalog (Microsoft Fabric)"
      path: "Govern > Configurations > Tenant settings > Users can access data stored in OneLake with apps external to Fabric"
      docs: "https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake"
    api:
      kind: "rest"
      call: "POST https://api.fabric.microsoft.com/v1/admin/tenantsettings/{tenantSettingName}/update"
      docs: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting"
    note: "Prerequisite for connecting a workspace to the process mining capability. The request body sets enabled. Fabric administrator or service principal."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-24"
roadmapModified: "2026-10-22T23:45:50"
changes:
  - date: "2026-11-17"
    note: "New briefing: object-centric process mining can publish a Direct Lake semantic model to a Fabric workspace, with the roadmap's Launched status and mixed GA and Preview phases."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 71 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: full wizard path, Fabric and Power BI platform licensing now stated with cost set to variable, workspace roles noted as granting semantic-model permissions, and unsupported claims removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 86 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: the risk rationale and permissions wording now reflect that workspace roles grant implicit semantic-model permissions, and the workspace-access-list item is removed from the checklist."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 89 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: OneLake row now shows the Update Tenant Setting call, not a read-only list call; custom-workspace prerequisites stated as Microsoft gives them; wizard path drops the process name field; F-capacity billing notes the one-minute minimum."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 92 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 92
  confirmed: 92
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "dc6f1dd784331d5bd96b993c49f20513"
---

## What's changing

Power Automate Process Mining can publish an object-centric process mining (OCPM) model to a Microsoft Fabric workspace. Microsoft Learn says that publishing creates a new Direct Lake semantic model, built on Fabric Lakehouse delta tables, and an empty Power BI report connected to it. In the ingest wizard the export is a step called **Choose where to export**, where the maker selects **Continue** to set it up or **Skip export**. To set it up the maker picks a Fabric workspace, a Lakehouse in it, and a name for the default report.

The semantic model holds the object and event data (object types, objects, events and the relations between them), derived nodes and edges used for visuals, and process executions based on a leading object type. Learn also says the model includes predefined relationships, and that some are hidden because only one relationship between two tables can be active. Lakehouse delta-table column names retain English letters, digits and underscores, with other characters replaced by underscores; semantic-model columns retain their original names. An export can be interrupted when two columns collapse to the same name. By default Process Mining keeps the semantic model up to date; the page describes a **Keep your Direct Lake data up to date** flag that can be turned off after taking over the model.

The roadmap item also describes publishing schedules, KPI measures and combining the model with other Fabric data. The Learn pages read describe the default refresh and the Power BI composite model route for extra data sources, but do not describe a publishing schedule setting.

The roadmap record gives status Launched, a preview date of May CY2026, a target of August CY2026, release phases General Availability and Preview, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The ingest page links to the export page as "(preview)", so confirm which phase applies to your tenant. The roadmap says it is "Enabled for admins/makers/marketers automatically".

## Why it matters

This puts a copy of process data into Fabric. The data is object-centric event data: objects, events and attributes that can include financial values, because the ingest page lets makers map financial attributes. Once published, workspace roles grant implicit permissions on the published semantic model ([semantic model permissions](https://learn.microsoft.com/power-bi/connect-data/service-datasets-permissions)). The roadmap says published models follow Fabric's standard architecture and existing governance, but the OCPM pages do not specify additional explicit permission grants or default report sharing.

The default state is user-opt-in: the export is a step each maker chooses or skips in the wizard, and no source read says existing processes are exported automatically. If nobody acts, nothing is exported until a maker takes the step, but the target workspace is then the maker's choice. Settle which Fabric workspaces are acceptable, and who needs the licences, before makers start.

## Risk assessment

**Data exposure**
- The export writes objects, events, relationships and attributes into a Fabric Lakehouse and semantic model in a workspace the maker selects. The ingest page allows event and object attributes "including financial" to be mapped, so the workspace's access list matters. Workspace roles grant implicit permissions on the semantic models in the workspace ([semantic model permissions](https://learn.microsoft.com/power-bi/connect-data/service-datasets-permissions)).
- The ingest page requires the event log in Azure Data Lake Gen2 or OneLake; the export creates a semantic model on Fabric Lakehouse delta tables.

**Security & identity**
- Microsoft's custom-workspace guidance requires the external-app OneLake setting to be on and Process Insights Prod to have admin access when connecting a workspace to the process mining capability ([custom Fabric workspace page](https://learn.microsoft.com/power-automate/process-mining-fabric-workspace)).
- For an existing workspace, the same page says the maker's account needs at least Contributor access.

**Autonomy & actions**
- By default Process Mining keeps the semantic model up to date, and **Refresh Data** on the process triggers full ingestion and model creation. Published data therefore changes without further maker action.
- The same custom-workspace page warns that reusing an existing report name overwrites the report of another process. Confirm whether this also applies to the OCPM default report name.

**Change & support**
- Export can fail when sanitised column names collide, for example **Customer_Name** and **Customer Name**; the maker gets an error message.
- The model uses Direct Lake access mode set to **Automatic**; non-optimal DAX or an incorrectly set composite model can fall back to DirectQuery, which Learn says may lower performance.
- The roadmap lists General Availability and Preview while the ingest page labels the export "(preview)"; expect support boundaries to depend on the answer.

## Cost and licensing

Microsoft's licensing pages say process mining is licensed as part of Power Automate and that a Power BI licence is required for report customisation ([overview](https://learn.microsoft.com/power-automate/process-advisor-overview)). Each Power Automate Premium licence adds 50 MB of process mining capacity to a tenant-wide pool up to 100 GB; beyond that the Process Mining add-on is needed. The licensing FAQ gives the add-on list price as $5,000 (USD) for 100 GB of data stored a month, with Power Automate Premium as the prerequisite ([FAQ](https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq)). The FAQ also says Power BI licences aren't included in Power Automate Process Mining. The overview names a Power BI Premium licence for report customisation, while the FAQ lists Power BI Pro, per user or Premium capacity, so the two pages differ.

Fabric and Power BI platform licensing applies to the Lakehouse, semantic model and report ([Fabric licences](https://learn.microsoft.com/fabric/enterprise/licenses)). Fabric supports F capacities, trial capacities and eligible P capacities with Fabric enabled. F capacities are bought through Azure, which bills per second with a one-minute minimum, with no commitment, and offers a yearly reservation. Creating Power BI items in a workspace other than My workspace and sharing them requires Power BI Pro, Premium Per User (PPU) or an individual trial. The OCPM pages do not name a separate export-specific licence or meter.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, and no government clouds. Makers need the **Environment Maker** role to create, share and contribute to processes, in a Power Platform environment with a Dataverse database. The ingest guide specifies CSV in Azure Data Lake Gen2 or OneLake; the event-log creation guide also lists a delta table in Fabric Lakehouse ([creation guide](https://learn.microsoft.com/power-automate/object-centric-create-event-log)). The maker picks the Fabric workspace and Lakehouse in the ingest wizard. The roadmap says the feature is enabled for admins and makers automatically; the export step itself is optional.

## Governance guidance

### Before rollout
- Decide which Fabric workspaces makers may export to.
- Check the OneLake setting **Users can access data stored in OneLake with apps external to Fabric** in the Fabric tenant settings; the custom-workspace guidance requires it to be on when connecting a workspace to the process mining capability.
- Confirm that the workspace a maker picks runs on a Fabric capacity, and that people who create and share Power BI items there hold Power BI Pro, PPU or an individual trial, as the Fabric licensing page sets out.

### At rollout
- Tell makers that **Choose where to export** in the OCPM ingest wizard is optional and that **Skip export** is available.
- Ask makers to use a unique default report name for each process.

### After rollout
- Re-read the ingest and export pages on Microsoft Learn to confirm whether the export is generally available or in preview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a process is exported to a Fabric workspace, and which workspace</strong><br><small>Maker</small><br><small class="controls__note">Maker-side choice in the ingest wizard. Microsoft Learn documents no API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Power Automate (maker)</strong><br>Process mining › Start here › Object-centric process mining › Data source › Azure Data Lake or OneLake › Continue › Choose where to export › Continue or Skip export <a href="https://learn.microsoft.com/power-automate/object-centric-ingest-event-log" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether apps external to Fabric can read data stored in OneLake</strong><br><small>Tenant</small><br><small class="controls__note">Prerequisite for connecting a workspace to the process mining capability. The request body sets enabled. Fabric administrator or service principal.</small></td><td data-label="Admin UI"><strong>OneLake catalog (Microsoft Fabric)</strong><br>Govern › Configurations › Tenant settings › Users can access data stored in OneLake with apps external to Fabric <a href="https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST https://api.fabric.microsoft.com/v1/admin/tenantsettings/{tenantSettingName}/update</code> <a href="https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The export is a maker-side choice in the ingest wizard; Microsoft Learn documents no administrator setting for the export step at the time of writing (November 2026). Microsoft's custom-workspace guidance requires the external-app OneLake setting to be on and Process Insights Prod to have admin access when connecting a workspace to the process mining capability. Microsoft Learn lists the Power Platform administrator and Fabric administrator roles as having control over organisation-wide Fabric settings ([Fabric admin roles](https://learn.microsoft.com/fabric/admin/roles)); the Update Tenant Setting call requires a Fabric administrator or a service principal.

Controls that sit on the published model include the **Keep your Direct Lake data up to date** flag in the semantic model's **Settings** screen, which needs **Take over** first, and Fabric workspace access. Learn lists the Process Insights Prod service principal as a workspace admin requirement on the custom-workspace page.

## Open questions

- Does the OCPM export grant any explicit permissions on the published semantic model or share the default report, and can that be set from Power Automate? Watch the OCPM export page on Microsoft Learn.
- Is the export generally available or in preview? The roadmap lists both phases and the ingest page links to the export as "(preview)".
- Does the export carry an additional OCPM-specific charge or meter beyond Fabric and Power BI platform licensing? Watch the Power Platform licensing FAQ.
- Does the roadmap's configurable publishing schedule exist, or is the default automatic refresh the only mechanism described?

<!-- rationale
risk: Medium. The export copies process data, including mapped financial attributes, into a maker-selected Fabric workspace whose roles grant implicit semantic-model permissions.
cost: Variable. The export uses Fabric capacity; F-capacity compute is billed through Azure per second with a one-minute minimum, with reservation options. The OCPM pages do not identify a separate export-specific meter.
impact: Medium. Makers who own object-centric processes and analysts who build Power BI reports on the model notice it; other users do not.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Power Automate maker path reaches the optional export decision and the workspace-selection wizard. | Found: In the Choose where to export step, select Continue to set up the export of OCPM semantic model in your Fabric workspace, or Skip export. To set up the Fabric workspace: Select from the list of available Fabric workspaces. | Fix: For the workspace-selection route use 'Process mining > Start here > Object-centric process mining > Data source > Azure Data Lake or OneLake > Continue > Choose where to export > Continue > fabric workspace'. Keep 'Skip export' as the alternative in the note. The current route stops on the right wizard step before selecting the workspace; see https://learn.microsoft.com/power-automate/object-centric-ingest-event-log. | Source: https://learn.microsoft.com/power-automate/object-centric-ingest-event-log
-->
