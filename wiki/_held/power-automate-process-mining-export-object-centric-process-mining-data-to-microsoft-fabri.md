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
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Process mining is licensed through Power Automate Premium (per user) plus a Process Mining add-on for capacity; Power BI licences are not included. Licensing specific to the Fabric export: Not yet published."
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
  - title: "Tenants - List Tenant Settings"
    url: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/list-tenant-settings"
    kind: "learn"
videos: []
related: ["power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process"]
controls:
  - governs: "Whether a process is exported to a Fabric workspace, and which workspace"
    scope: "maker"
    ui:
      surface: "Power Automate (maker)"
      path: "Process mining > Start here > Object-centric process mining > Continue > Choose where to export > Continue or Skip export"
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
      call: "GET https://api.fabric.microsoft.com/v1/admin/tenantsettings"
      docs: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/list-tenant-settings"
    note: "Prerequisite on the custom-workspace report page; not confirmed for the OCPM export. REST call lists settings; Fabric administrator or service principal."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-22T23:45:50"
changes:
  - date: "2026-11-17"
    note: "New briefing: object-centric process mining can publish a Direct Lake semantic model to a Fabric workspace, with the roadmap's Launched status and mixed GA and Preview phases."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 71 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 65
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "9caf8e63de86ede93ad330289186ec29"
---

## What's changing

Power Automate Process Mining can publish an object-centric process mining (OCPM) model to a Microsoft Fabric workspace. Microsoft Learn says that publishing creates a new Direct Lake semantic model, built on Fabric Lakehouse delta tables, and an empty Power BI report connected to it. In the ingest wizard the export is a step called **Choose where to export**, where the maker selects **Continue** to set it up or **Skip export**. To set it up the maker picks a Fabric workspace, a Lakehouse in it, and a name for the default report.

The semantic model holds the object and event data (object types, objects, events and the relations between them), derived nodes and edges used for visuals, and process executions based on a leading object type. Learn also says the model includes predefined relationships, and that some are hidden because only one relationship between two tables can be active. Column names are sanitised before export (only letters, digits and underscores are kept), and an export can be interrupted when two columns collapse to the same name. By default Process Mining keeps the semantic model up to date; the page describes a **Keep your Direct Lake data up to date** flag that can be turned off after taking over the model.

The roadmap item also describes publishing schedules, KPI measures and combining the model with other Fabric data. The Learn pages read describe the default refresh and the Power BI composite model route for extra data sources, but do not describe a publishing schedule setting.

The roadmap record gives status Launched, a preview date of May CY2026, a target of August CY2026, release phases General Availability and Preview, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The ingest page links to the export page as "(preview)", so confirm which phase applies to your tenant. The roadmap says it is "Enabled for admins/makers/marketers automatically".

## Why it matters

This puts a copy of process data into Fabric. The data is object-centric event data: objects, events and attributes that can include financial values, because the ingest page lets makers map financial attributes. Once published, who can read it is decided by the Fabric workspace the maker chose. The roadmap says published models follow Fabric's standard architecture and existing governance, but the Learn pages read do not say what permissions the published semantic model or report carries, so treat that as something to confirm.

The default state is user-opt-in: the export is a step each maker chooses or skips in the wizard, and no source read says existing processes are exported automatically. If nobody acts, nothing is exported until a maker takes the step, but the target workspace is then the maker's choice. Settle which Fabric workspaces are acceptable, and who needs the licences, before makers start.

## Risk assessment

**Data exposure**
- The export writes objects, events, relationships and attributes into a Fabric Lakehouse and semantic model in a workspace the maker selects. The ingest page allows event and object attributes "including financial" to be mapped, so the workspace's access list matters. The only control the pages describe is the maker's choice of workspace.
- The source file stays in Azure Data Lake Gen2 or OneLake; the export creates a further copy in the Lakehouse.

**Security & identity**
- The page for customising a report with your own Fabric workspace lists prerequisites: the OneLake setting **Users can access data stored in OneLake with apps external to the Fabric** switched on, and the Process Insights Prod service principal added as workspace admin. The OCPM pages do not say whether these apply to the OCPM export, so confirm before granting workspace admin to a service principal on a shared workspace.
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

The two OCPM pages (ingest and semantic model export) name no licence or meter for the export. Fabric capacity and Power BI licensing terms for this export are Not yet published. The custom-workspace page tells the maker to select a Fabric capacity when creating a workspace, so expect Fabric capacity to be part of the cost until Microsoft says otherwise.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, and no government clouds. Makers need the **Environment Maker** role to create, share and contribute to processes, in a Power Platform environment with a Dataverse database. The object-centric event log must be stored as CSV in Azure Data Lake Gen2 or OneLake. The maker picks the Fabric workspace and Lakehouse in the ingest wizard. The roadmap says the feature is enabled for admins and makers automatically; the export step itself is optional.

## Governance guidance

### Before rollout
- Decide which Fabric workspaces makers may export to, and who has access to them, using the Fabric workspace access list (workspace owners do this).
- Check the OneLake setting **Users can access data stored in OneLake with apps external to Fabric** in the Fabric tenant settings, and confirm with Microsoft whether it applies to the OCPM export.
- Confirm the Fabric capacity and Power BI licences the export needs; Microsoft has not published them for this feature.

### At rollout
- Tell makers that **Choose where to export** in the OCPM ingest wizard is optional and that **Skip export** is available.
- Ask makers to use a unique default report name for each process.
- Confirm who holds the **Environment Maker** role in environments where processes are created.

### After rollout
- Review the access list of each Fabric workspace that holds a published model.
- Check whether the **Keep your Direct Lake data up to date** flag has been changed on any semantic model, since changing it first requires taking over the model.
- Track process mining capacity use against the pool; the licensing FAQ says usage is available in the Power Platform admin center.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a process is exported to a Fabric workspace, and which workspace</strong><br><small>Maker</small><br><small class="controls__note">Maker-side choice in the ingest wizard. Microsoft Learn documents no API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Power Automate (maker)</strong><br>Process mining › Start here › Object-centric process mining › Continue › Choose where to export › Continue or Skip export <a href="https://learn.microsoft.com/power-automate/object-centric-ingest-event-log" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether apps external to Fabric can read data stored in OneLake</strong><br><small>Tenant</small><br><small class="controls__note">Prerequisite on the custom-workspace report page; not confirmed for the OCPM export. REST call lists settings; Fabric administrator or service principal.</small></td><td data-label="Admin UI"><strong>OneLake catalog (Microsoft Fabric)</strong><br>Govern › Configurations › Tenant settings › Users can access data stored in OneLake with apps external to Fabric <a href="https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET https://api.fabric.microsoft.com/v1/admin/tenantsettings</code> <a href="https://learn.microsoft.com/rest/api/fabric/admin/tenants/list-tenant-settings" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The export is a maker-side choice in the ingest wizard; Microsoft Learn documents no administrator setting for the export step at the time of writing (November 2026). The OneLake tenant setting is documented as a prerequisite on the custom-workspace report page, and Microsoft has not confirmed that it governs the OCPM export. Changing a Fabric tenant setting needs Fabric administrator rights; the REST call lists settings and does not change them.

Controls that sit on the published model include the **Keep your Direct Lake data up to date** flag in the semantic model's **Settings** screen, which needs **Take over** first, and Fabric workspace access. Learn lists the Process Insights Prod service principal as a workspace admin requirement on the custom-workspace page; whether the OCPM export uses it is not stated.

## Open questions

- Which permissions does the published semantic model and default report carry, and can they be set from Power Automate? Watch the OCPM export page on Microsoft Learn.
- Is the export generally available or in preview? The roadmap lists both phases and the ingest page links to the export as "(preview)".
- Which Fabric capacity and Power BI licences does the export need, and is there a meter? Watch the Power Platform licensing FAQ.
- Does the roadmap's configurable publishing schedule exist, or is the default automatic refresh the only mechanism described?
- Do the custom-workspace prerequisites (OneLake setting, Process Insights Prod as workspace admin) apply to the OCPM export?

<!-- rationale
risk: Medium. The export copies process data (the ingest page allows financial attributes) into a Fabric workspace the maker picks, and the Learn pages read do not describe who can read the published model.
cost: Low. The OCPM export pages name no extra licence or meter for the export itself; the process mining licence is a separate cost, and Fabric capacity and Power BI terms for this export are not yet published.
impact: Medium. Makers who own object-centric processes and analysts who build Power BI reports on the model notice it; other users do not.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The wizard path is Process mining > Start here > Object-centric process mining > Continue > Choose where to export > Continue or Skip export. | Found: In the Process name field, enter a name for your process. Under the Data source heading, select Azure Data Lake or OneLake and select Continue. | Fix: Replace the path in front matter and the rendered table with 'Process mining > Start here > Object-centric process mining > Process name > Data source > Azure Data Lake or OneLake > Continue > Choose where to export > Continue or Skip export'. The final alternatives are documented; the missing process-name and data-source inputs are the problem. | Source: https://learn.microsoft.com/power-automate/object-centric-ingest-event-log
- [contradicted, blocker] Risk assessment: Data exposure / absence: The maker's choice of workspace is the only documented control over the exported data's exposure. | Found: A user with an Admin or Member role in the workspace can explicitly grant permissions to other users using the manage permissions page. | Fix: Remove 'The only control the pages describe is the maker's choice of workspace.' Fabric semantic-model access controls apply to this documented semantic-model output; absence of OCPM-specific grant details does not establish that no other exposure controls exist. | Source: https://learn.microsoft.com/power-bi/connect-data/service-datasets-permissions
- [unsupported, major] Risk assessment: Data exposure / behaviour: The source file remains in Azure Data Lake Gen2 or OneLake after export. | Found: Searched: '"process mining" "source" "file" "deleted" "Lakehouse"' and '"Power Automate" "object-centric" "export" "source file"'. Read ingest/export pages and source-ingestion search excerpts; none states post-export source-file retention. | Fix: Replace the sentence with 'The ingest page requires the event log in Azure Data Lake Gen2 or OneLake; the export creates a semantic model on Fabric Lakehouse delta tables.' Do not promise that export preserves the source file.
- [contradicted, blocker] Cost and licensing; licensing.notes; Governance guidance: Before rollout; rationale: cost / licensing: Fabric capacity and Power BI licensing terms for the exported items are not yet published. | Found: To create or run non-Power BI Fabric items (for example, lakehouses, warehouses, notebooks) you still need an F capacity (or a Trial Fabric capacity). ... To create Power BI items in a workspace other than My workspace and share them, you need a Power BI Pro | Fix: Replace the blanket unpublished-terms statements with 'Fabric and Power BI platform licensing applies to the Lakehouse, semantic model and report. Fabric supports F capacities, trial capacities and eligible P capacities with Fabric enabled. Creating Power BI items outside My workspace and sharing them requires Power BI Pro, PPU or an individual trial. The OCPM pages do not name a separate export-specific licence or meter.' Cite https://learn.microsoft.com/fabric/enterprise/licenses. Keep any open question confined to an additional OCPM-specific charge, not the existence of platform terms. | Source: https://learn.microsoft.com/fabric/enterprise/licenses
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The export's known costs are indirect only, warranting a low cost rating. | Found: Page: 'cost: low' and 'Fabric capacity and Power BI terms ... are not yet published'. Fabric licensing: 'You purchase F capacities through Azure, and Azure bills you per second with no commitment'. | Fix: Set cost to 'variable' and replace the cost rationale with 'Variable. The export uses Fabric capacity; F-capacity compute is billed through Azure per second, with reservation options. The OCPM pages do not identify a separate export-specific meter.' Cite https://learn.microsoft.com/fabric/enterprise/licenses and retain the distinction between platform capacity costs and any additional export charge. | Source: https://learn.microsoft.com/fabric/enterprise/licenses
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: column naming / behaviour: Export sanitises column names to letters, digits and underscores. | Found: All other characters are replaced with an underscore (_) as part of the sanitization process. ... Lakehouse delta table columns therefore use the sanitized column names, whereas semantic model columns use the original column names. | Fix: Replace the naming clause with 'Lakehouse delta-table column names retain English letters, digits and underscores, with other characters replaced by underscores; semantic-model columns retain their original names.' This preserves the documented distinction between the two surfaces. | Source: https://learn.microsoft.com/power-automate/object-centric-semantic-model
- [supported, minor] Why it matters; Risk assessment: Data exposure; Governance controls / applicability: The chosen Fabric workspace's access permissions govern access to the published semantic model. | Found: A user's role in a workspace implicitly grants them permissions on the semantic models in the workspace | Fix: Cite https://learn.microsoft.com/power-bi/connect-data/service-datasets-permissions for the workspace-permissions statement. Narrow 'who can read it is decided by the Fabric workspace' to 'Workspace roles grant implicit permissions on the published semantic model.' | Source: https://learn.microsoft.com/power-bi/connect-data/service-datasets-permissions
- [supported, minor] Scope / behaviour: The object-centric event log must be stored as CSV in Azure Data Lake Gen2 or OneLake. | Found: Then, store the resulting file in a CSV format in either Azure Data Lake Gen2 or OneLake. | Fix: Replace the sentence with 'The ingest guide specifies CSV in Azure Data Lake Gen2 or OneLake; the event-log creation guide also lists a delta table in Fabric Lakehouse.' Cite https://learn.microsoft.com/power-automate/object-centric-create-event-log, which states 'CSV file stored in Azure Data Lake or OneLake or delta table stored in the Fabric Lakehouse'. The cited ingest guide supports the current wording, but the other Microsoft page broadens it. | Source: https://learn.microsoft.com/power-automate/object-centric-ingest-event-log
- [supported, minor] Governance controls / role: Fabric administrators have rights to change Fabric tenant settings. | Found: Power Platform administrator or Fabric administrator ... Enable and disable Fabric features ... These roles provide access to the admin experience in Govern and control over organization-wide Fabric settings | Fix: Cite https://learn.microsoft.com/fabric/admin/roles for the tenant-setting administration role statement. The page also recognises Power Platform administrators; avoid interpreting the sentence as an exclusive-role requirement. | Source: https://learn.microsoft.com/fabric/admin/roles
- [contradicted, minor] Governance guidance compared with Governance controls / consistency: The checklist tells readers to check controls that have no corresponding controls-table rows. | Found: Checklist: 'Review the access list'; 'Confirm who holds the Environment Maker role'; 'Check whether the Keep your Direct Lake data up to date flag has been changed'; 'Track process mining capacity use'. Table: export choice and OneLake external-apps setting only. | Fix: The workspace access list, Environment Maker assignments, Direct Lake refresh flag and process-mining capacity usage checks lack table rows. Remove these checklist bullets from this briefing rather than adding unverified control rows; their verified background facts can remain in the body and control notes.
-->
