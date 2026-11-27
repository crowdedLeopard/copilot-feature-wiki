---
title: "Copilot Notebooks: Power BI reports as references"
slug: "m365-copilot-power-bi-reports-as-references-in-copilot-notebooks"
roadmapId: 569928
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let Copilot Notebooks users add Power BI reports as references, so Copilot can ground summaries and briefs in report data. Check which Power BI and Copilot settings apply before users rely on it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's requirements page says Copilot Notebooks users need the Microsoft Copilot or Copilot Chat licence (its summary table says Microsoft Copilot licence). No licence, price or meter specific to Power BI references is published."
audiences: ["m365-admin","service-owner","security","end-user"]
tags: ["copilot-notebooks","power-bi","m365-copilot","microsoft-fabric","cloud-policy","onenote","data-residency"]
sources:
  - title: "Microsoft 365 Roadmap item 569928"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569928"
    kind: "roadmap"
  - title: "Use Power BI data in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-powerbi-copilot-chat"
    kind: "learn"
  - title: "Fabric IQ in Microsoft 365 Copilot Chat"
    url: "https://learn.microsoft.com/fabric/iq/connectors/microsoft-365-copilot-overview"
    kind: "learn"
  - title: "Share data with your Microsoft 365 services"
    url: "https://learn.microsoft.com/fabric/admin/admin-share-power-bi-metadata-microsoft-365-services"
    kind: "learn"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks permissions"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-permission"
    kind: "learn"
  - title: "Whether users can create Notebooks and access the Notebooks module in the Copilot app (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Whether Fabric shares Power BI report metadata with Microsoft 365 (REST API)"
    url: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting"
    kind: "learn"
videos: []
related: ["copilot-notebooks","m365-copilot-csv-and-tsv-references-in-copilot-notebooks","teams-meetings-in-copilot-notebooks","cloud-policy","data-residency"]
controls:
  - governs: "Whether users can create Notebooks and access the Notebooks module in the Copilot app"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Blocks new Notebooks and hides the Notebooks module; existing items aren't deleted. Beta Graph is tenant-level only: applyOnce fails if a group-level policy sets it. Resource microsoft.copilot.copilotpagesnotebooks, value 0 or 1."
  - governs: "Which users Microsoft Copilot can use Fabric (Power BI) data for"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Fabric data in Microsoft Copilot > Step 1"
      docs: "https://learn.microsoft.com/copilot/manage/copilot-powerbi-copilot-chat"
    api: null
    note: "No users, All users or Specific groups. Documented for Microsoft Copilot answering from Power BI; the page does not name Copilot Notebooks."
  - governs: "Whether Fabric shares Power BI report metadata with Microsoft 365"
    scope: "tenant"
    ui:
      surface: "Microsoft Fabric"
      path: "OneLake catalog > Govern > Configurations > Tenant settings > Share Fabric data with your Microsoft 365 services"
      docs: "https://learn.microsoft.com/fabric/admin/admin-share-power-bi-metadata-microsoft-365-services"
    api:
      kind: "rest"
      call: "POST https://api.fabric.microsoft.com/v1/admin/tenantsettings/{tenantSettingName}/update"
      docs: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting"
    note: "Fabric administrator. The request body sets enabled. Feeds Copilot search and attachment menus; users can still paste report links."
  - governs: "Whether users can add Power BI reports as Notebook references"
    scope: "tenant"
    ui: null
    api: null
    note: "No switch specific to Power BI references is documented; the Notebooks policy above is the nearest control."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-27"
    note: "New briefing: Power BI reports as references in Copilot Notebooks, with the Notebooks Cloud Policy switch and the two Power BI settings for Microsoft Copilot."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the Notebooks Cloud Policy description (it blocks new Notebooks and hides the module; existing items stay), noted that the Graph automation works only for tenant-level policies, and scoped report freshness to Copilot Chat."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0e669628e6f7c859def1b994017a0960"
---

## What's changing

Microsoft plans to let users add Power BI reports to a Copilot Notebook as references, alongside files. According to the roadmap item, Copilot then uses the report data to help generate summaries, presentations and briefs grounded in the organisation's data.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Microsoft has not stated whether it is available to users on arrival or needs an administrator to enable anything. Related Microsoft pages describe how Microsoft Copilot already answers from Power BI reports in chat: per [Use Power BI data in Microsoft Copilot](https://learn.microsoft.com/copilot/manage/copilot-powerbi-copilot-chat), Copilot grounds responses in Power BI data "including scenarios where users share a specific report", and that capability is enabled by default. Those pages do not mention Copilot Notebooks.

The roadmap item lists the products as OneNote and Microsoft Copilot (Microsoft 365), on Desktop and Web, for the Worldwide (Standard Multi-Tenant) cloud. Its status is In development, with a preview target of September CY2026 and a general availability target of October CY2026. Both targets have passed while the status still reads In development, so check Message center for a rollout notice.

## Why it matters

A Power BI reference brings governed business data, which may be subject to row-level security, into a notebook that can be [shared with colleagues](https://learn.microsoft.com/microsoft-365/loop/cpcn-permission). For Copilot Chat, Microsoft's [Fabric IQ page](https://learn.microsoft.com/fabric/iq/connectors/microsoft-365-copilot-overview) says Copilot uses the user's existing Power BI permissions, including row-level and object-level security. Microsoft has not said whether a notebook's other readers see answers built from the owner's view of a report, which is the question a Power BI owner will ask first.

Microsoft has not stated what happens on arrival. Two settings already govern Power BI data in Microsoft Copilot: the Microsoft 365 admin center's Fabric data setting, which is on by default, and Fabric's metadata-sharing setting, which is on by default when the Fabric and Microsoft 365 tenants are in the same geographic region. Whether either governs Notebook references is not stated, so the one documented switch that certainly reaches this feature is the Cloud Policy setting that blocks new Notebook creation and hides the Notebooks module in the Copilot app.

## Risk assessment

**Data exposure**
- A Power BI reference brings report data into a notebook that the owner can share. Microsoft has not described what collaborators see of that data or whether their own Power BI permissions apply. No control specific to this is documented.
- For Copilot Chat, Microsoft's Fabric IQ page says Copilot honours sensitivity labels on Power BI reports and applies DLP policies; it does not say the same for Notebooks.

**Security & identity**
- For Copilot Chat, Copilot reads Power BI data under the signed-in user's permissions, including row-level and object-level security. Confirm the same holds for Notebook references before rollout.
- The Copilot page warns that when Microsoft Copilot users retrieve Fabric data, their query data from Microsoft Copilot is shared with Fabric, which is subject to the Fabric Product Terms.

**Autonomy & actions**
- No change: the roadmap describes a reference that a user adds, used to generate content in the notebook. Nothing describes Copilot acting on Power BI.

**Change & support**
- Users may expect a Notebook answer to match the live report. For Copilot Chat, Microsoft says answers reflect the semantic model's last refresh, not real-time data.
- Fabric admins and Microsoft 365 admins own different settings, so troubleshooting a missing report may need both teams.

## Cost and licensing

**Licence.** Microsoft's [requirements page for Copilot Pages and Copilot Notebooks](https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements) says users need the Microsoft Copilot or Copilot Chat licence for Copilot Notebooks, and its summary table lists a Microsoft Copilot licence. The Tenant Configuration Management reference says Copilot Notebooks require a Microsoft 365 Copilot licence. Adding a Power BI report is a capability inside Copilot Notebooks, so it sits under that requirement.

**Power BI access.** For Copilot Chat, the Fabric IQ page requires that the user have permission and licensed access to view the reports and semantic models. Microsoft has not stated whether Notebook references carry the same requirement.

**Meter.** Microsoft publishes no licence, price or meter specific to Power BI references in Copilot Notebooks at the time of writing (November 2026).

**Indirect costs.** Admin time to agree the Fabric and Copilot settings, and to brief Power BI owners on where report data can now appear.

## Scope

- **Users:** Copilot Notebooks users, subject to the Notebooks licence above; for Copilot Chat, Power BI answers need access to the report.
- **Products and platforms:** OneNote and Microsoft Copilot (Microsoft 365), on Desktop and Web, per the roadmap item.
- **Cloud:** Worldwide (Standard Multi-Tenant), as listed on the roadmap item.
- **Release:** preview targeted for September CY2026 and general availability for October CY2026; status In development.
- **Roles:** Cloud Policy settings are configured in the Microsoft 365 Apps admin center; the Fabric metadata-sharing setting needs a Fabric administrator.
- **Data location:** Fabric's page says that by default Fabric shares information only within its own geography, and a second toggle is needed where the Fabric and Microsoft 365 tenants are in different geographies.

## Governance guidance

### Before rollout
- Check the **Create and view Copilot Pages and Copilot Notebooks** Cloud Policy setting for the groups that should and should not have Notebooks, since it is the documented switch that reaches this feature.
- Review who is set under **Fabric data in Microsoft Copilot** in the Microsoft 365 admin center (No users, All users or Specific groups), and confirm with Microsoft whether it governs Notebook references.
- Agree with the Fabric administrator whether **Share Fabric data with your Microsoft 365 services** stays on, knowing it shares report names, page names, chart titles and column or measure names with Microsoft 365.
- Identify Power BI reports with row-level security or sensitivity labels whose owners need to hear that report data may appear in shared notebooks.

### At rollout
- Test with a pilot user that a Power BI report can be added as a reference, and check what a second user with different report permissions sees in the shared notebook.
- Check the freshness of Notebook answers during the pilot, and brief users that sharing a notebook may expose report-derived content.

### After rollout
- Watch Message center and the Copilot Notebooks admin pages for a setting specific to Power BI references.
- Revisit the Fabric data setting if Power BI owners report report data appearing in notebooks beyond its intended audience.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create Notebooks and access the Notebooks module in the Copilot app</strong><br><small>Group</small><br><small class="controls__note">Blocks new Notebooks and hides the Notebooks module; existing items aren't deleted. Beta Graph is tenant-level only: applyOnce fails if a group-level policy sets it. Resource microsoft.copilot.copilotpagesnotebooks, value 0 or 1.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users Microsoft Copilot can use Fabric (Power BI) data for</strong><br><small>Tenant</small><br><small class="controls__note">No users, All users or Specific groups. Documented for Microsoft Copilot answering from Power BI; the page does not name Copilot Notebooks.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Fabric data in Microsoft Copilot › Step 1 <a href="https://learn.microsoft.com/copilot/manage/copilot-powerbi-copilot-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Fabric shares Power BI report metadata with Microsoft 365</strong><br><small>Tenant</small><br><small class="controls__note">Fabric administrator. The request body sets enabled. Feeds Copilot search and attachment menus; users can still paste report links.</small></td><td data-label="Admin UI"><strong>Microsoft Fabric</strong><br>OneLake catalog › Govern › Configurations › Tenant settings › Share Fabric data with your Microsoft 365 services <a href="https://learn.microsoft.com/fabric/admin/admin-share-power-bi-metadata-microsoft-365-services" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST https://api.fabric.microsoft.com/v1/admin/tenantsettings/{tenantSettingName}/update</code> <a href="https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can add Power BI reports as Notebook references</strong><br><small>Tenant</small><br><small class="controls__note">No switch specific to Power BI references is documented; the Notebooks policy above is the nearest control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting specific to Power BI references in Copilot Notebooks is documented at the time of writing (November 2026). The Cloud Policy setting blocks new Notebook creation and hides the Notebooks module in the Copilot app for the users in scope. Existing items are not deleted; users with permission can still view and edit existing items through the documented access routes, and files added to Notebooks remain available in OneDrive and SharePoint.

The two Power BI settings are documented for Microsoft Copilot's use of Power BI data and do not name Copilot Notebooks. Fabric's page says turning off metadata sharing does not block Fabric content from appearing in Microsoft 365: it removes reports from search and attachment menus, while users can still paste report links or name reports. Changes to the Fabric setting can take up to 24 hours. The Fabric setting needs a Fabric administrator; the Copilot setting is in the Microsoft 365 admin center.

## Open questions

- Which admin setting, if any, decides whether users can add Power BI reports to a Copilot Notebook: the Fabric data setting in the Microsoft 365 admin center, Fabric's metadata-sharing setting, or a new one? Watch the Copilot Notebooks admin policies page.
- When a notebook with a Power BI reference is shared, does each collaborator see only what their own Power BI permissions and row-level security allow?
- Do sensitivity labels on Power BI reports carry into notebook content and Copilot Pages generated from them, as Microsoft documents for Copilot Chat?
- Does a Notebook reference need the user to hold a Power BI licence, or only permission to view the report?
- With both targets passed and the status In development, when will the feature reach tenants, and on by default or not? Watch Message center.

<!-- rationale
risk: Medium. Report data enters notebooks that can be shared, and Microsoft has not described how Power BI permissions apply to a notebook's other readers or which admin setting governs the reference.
cost: Low. Copilot Notebooks already need a Microsoft Copilot licence; no licence, price or meter specific to Power BI references is published, so the known cost is admin time.
impact: Medium. Noticed by Copilot Notebooks users who work with Power BI reports, such as analysts and managers, and by the Fabric and Copilot admins who own the settings.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; controls[0].note; Governance controls table / command: POST /beta/admin/configurationManagement/configurationMonitors can apply the Notebook Cloud Policy through the named copilotpagesnotebooks resource and its value property. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. | Fix: Keep the call unchanged. Add to controls[0].note: 'Set mode to applyOnce to apply the policy; the default monitorOnly mode only detects drift. The baseline resource is microsoft.copilot.copilotpagesnotebooks, with properties.value set to the string "0" or "1".' The mode is documented at https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta and the resource at https://learn.microsoft.com/graph/utcm-copilot-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
-->
