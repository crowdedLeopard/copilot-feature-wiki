---
title: "Microsoft Purview Endpoint DLP: device status data by query instead of export (GCC, GCC High and DoD)"
slug: "microsoft-purview-endpoint-data-loss-prevention-endpoint-dlp-device-status-api"
roadmapId: 559027
topic: "governance"
products: ["Microsoft Purview"]
summary: "In GCC, GCC High and DoD, Endpoint DLP device health details from the Purview device onboarding page can be queried in Advanced hunting or through Microsoft Graph. Decide who may read the data."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Defender for US Government requires a qualifying government volume licence; examples are Microsoft 365 GCC G5 for GCC, Microsoft 365 E5 for GCC High, and Microsoft 365 G5 for DOD. The general Defender prerequisites page states that listed licences provide Defender portal features without additional cost."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","endpoint-dlp","device-onboarding","advanced-hunting","defender-xdr","microsoft-graph","monitoring","data-export","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 559027"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559027"
    kind: "roadmap"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "DeviceInfo"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-deviceinfo-table"
    kind: "learn"
  - title: "security: runHuntingQuery"
    url: "https://learn.microsoft.com/graph/api/security-security-runhuntingquery"
    kind: "docs"
  - title: "Proactively hunt for threats with advanced hunting in Microsoft Defender"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-overview"
    kind: "learn"
  - title: "Microsoft Defender XDR prerequisites"
    url: "https://learn.microsoft.com/defender-xdr/prerequisites"
    kind: "learn"
  - title: "Microsoft Defender for US Government"
    url: "https://learn.microsoft.com/defender-xdr/usgov"
    kind: "learn"
  - title: "Manage access to Microsoft Defender XDR with Microsoft Entra global roles"
    url: "https://learn.microsoft.com/defender-xdr/m365d-permissions"
    kind: "learn"
  - title: "Create unifiedRoleAssignmentMultiple"
    url: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    kind: "docs"
  - title: "Create custom roles with Microsoft Defender unified RBAC"
    url: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
videos: []
related: ["endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-device-health-reporting-dashboard","microsoft-purview-endpoint-data-loss-prevention-logged-in-user-details-on-th-us-government","microsoft-purview-data-loss-prevention-reduce-policy-sync-status-sla-on-the-us-government"]
controls:
  - governs: "Querying Endpoint DLP device status (the DlpInfo column)"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Investigation & response > Hunting > Advanced hunting"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "graph"
      call: "POST /v1.0/security/runHuntingQuery"
      docs: "https://learn.microsoft.com/graph/api/security-security-runhuntingquery"
    note: "The request body property Query carries the KQL, for example on the DeviceInfo table. Least-privileged permission: ThreatHunting.Read.All."
  - governs: "Per-device configuration status and policy sync status in Purview"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "graph"
      call: "POST /v1.0/security/runHuntingQuery"
      docs: "https://learn.microsoft.com/graph/api/security-security-runhuntingquery"
    note: "The DlpInfo values correspond to the device information on this page; the API side is the same query route as row 1."
  - governs: "Which analysts can run Advanced hunting queries on Defender data"
    scope: "group"
    ui:
      surface: "Microsoft Defender portal"
      path: "Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations"
      docs: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    api:
      kind: "graph"
      call: "POST /beta/roleManagement/defender/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    note: "Advanced hunting access to Alerts & behaviors tables is the Security data basics (read) permission; endpoint data access follows Defender for Endpoint RBAC settings. Graph side assigns an existing role; beta."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-06T23:15:10"
changes:
  - date: "2026-11-28"
    note: "New briefing: Endpoint DLP device status in the Advanced hunting DeviceInfo table and through Graph runHuntingQuery, for GCC, GCC High and DoD."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: Defender role assignments have a Graph beta API; Entra roles' Advanced hunting access is subject to endpoint device scope; US Government Defender licences named; default state now not stated."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 82
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e9e1b08593d913eb461fc18d672d0b60"
---

## What's changing

Endpoint DLP device status, the configuration, policy sync and readiness details shown for each device on the Purview device onboarding page, can now be pulled by query rather than by manual export. The roadmap item calls this a "device status API" for feeding BI tools, dashboards and workflows. Microsoft Learn documents the matching capability as the `DlpInfo` column of the `DeviceInfo` table in Advanced hunting, in the Microsoft Defender portal, and notes that "Previously, you could get device attribute data manually through the Export functionality on the Device onboarding page". Learn does not use the name "device status API".

`DlpInfo` is a JSON object with eight properties: `IsDlpConfigurationValid`, `DlpPolicyLastModifiedTimeUTC`, `IsDlpEnabled`, `IsDefenderRealTimeProtectionEnabled`, `IsDefenderBehaviorMonitoringEnabled`, `HasDlpACBandwidthExceeded`, `HasDlpValidUpn` and `DlpUpn`. The Purview troubleshooting page says these values correspond to the device information on the DLP device onboarding page. Administrators query it in Advanced hunting with KQL (Kusto Query Language), or from a script through the Microsoft Graph `runHuntingQuery` method, which runs a KQL query against the advanced hunting schema.

The `DeviceInfo` reference lists `DlpInfo` among the table's columns, and the Purview page's steps to retrieve the data are to open Advanced hunting and query the table. Microsoft has not stated the rollout default for this capability. Roadmap item 559027 covers GCC, GCC High and DoD, on the Web platform; it is Launched, General Availability, with a target of April CY2026. Microsoft lists the same feature for the Worldwide cloud under roadmap item 542792 (Launched, March CY2026). The Graph `runHuntingQuery` reference lists the method as available in the US Government L4 and US Government L5 (DOD) deployments.

## Why it matters

For teams that export the device list from Purview on a schedule to track Endpoint DLP coverage, this replaces a manual step with a query that can feed a dashboard or an alerting workflow. It also moves DLP device health into the Defender portal's Advanced hunting, which in most organisations belongs to security operations rather than the compliance team that runs Purview, so the two teams need to agree who builds and owns the reports.

Microsoft has not stated the rollout default for this capability, and no source says it changes anything for users or devices. What it does change is who can see DLP readiness and the user principal name (UPN) linked to each device: anyone who can query endpoint data in Advanced hunting, and any app granted the Graph hunting permission.

## Risk assessment

**Data exposure**
- `DlpInfo` adds `DlpUpn`, the UPN associated with each device, and DLP readiness flags to `DeviceInfo`. Global Administrator, Security Administrator, Security Reader and Global Reader provide Advanced hunting read access; endpoint data remains subject to Defender for Endpoint RBAC device scope. An account scoped to specific devices sees only those devices. Copies pulled into BI tools leave the Defender portal's access controls behind.

**Security & identity**
- Scheduled pulls through Graph need `ThreatHunting.Read.All`, delegated or application. The method accepts any hunting query in its `Query` property, so treat a reporting app's credential as access to hunting data generally, not to this column alone.

**Autonomy & actions**
- No change: the documented operation is a query of existing data. It does not change devices, DLP policies or onboarding.

**Change & support**
- The `DeviceInfo` reference warns that if the organisation has not deployed the service in Microsoft Defender, queries on the table do not work or return no results; confirm the column is populated before retiring exports.
- `DeviceInfo` is updated continuously and every update holds the device's full current data, so reports must take the latest row per device. Portal queries return at most 100,000 rows and time out after 10 minutes; API queries have their own quotas.

## Cost and licensing

- **Licence**: Advanced hunting is a Microsoft Defender portal feature. Microsoft Defender for US Government requires a qualifying government volume licence; examples are Microsoft 365 GCC G5 for GCC, Microsoft 365 E5 for GCC High, and Microsoft 365 G5 for DOD ([Microsoft Defender for US Government](https://learn.microsoft.com/defender-xdr/usgov)). The general [Microsoft Defender XDR prerequisites](https://learn.microsoft.com/defender-xdr/prerequisites) page states that listed licences provide Defender portal features without additional cost. Endpoint DLP itself is licensed as the [Get started with endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-getting-started) page directs, through the Microsoft 365 service descriptions.
- **Meter**: Microsoft publishes no separate licence, price or meter for the `DlpInfo` column or for this reporting use.
- **Indirect costs**: analyst time to write and maintain KQL reports, and storage and licensing of whatever BI tool receives the data.

## Scope

- **Devices**: Windows and macOS devices onboarded to Endpoint DLP, which the troubleshooting page covers.
- **Who can query**: users with Advanced hunting access to endpoint data (see Governance controls), or apps granted `ThreatHunting.Read.All`.
- **Prerequisite**: the advanced hunting page says "To use advanced hunting, turn on Microsoft Defender".
- **Clouds**: GCC, GCC High and DoD, as the roadmap record lists them. Worldwide is roadmap item 542792.
- **Platform**: Web.
- **Retention**: Advanced hunting holds up to 30 days of native Defender data by default; `runHuntingQuery` looks back 30 days unless a `Timespan` is given.

## Governance guidance

### Before rollout
- Agree whether the compliance team or security operations owns Endpoint DLP device health reporting, since the data now sits in the Defender portal.
- Run `DeviceInfo | where DlpInfo != "" | project DlpInfo` in Advanced hunting and compare the device count with Settings > Device onboarding > Devices in the Purview portal.
- Give the analysts who build the reports a Defender unified RBAC custom role scoped to the Microsoft Defender for Endpoint data source, rather than a broad Entra role.

### At rollout
- Build reports on the latest row per device, as the `DeviceInfo` sample query does with `arg_max` by `DeviceId`.
- Flag devices where `IsDlpConfigurationValid` or `IsDlpEnabled` is false and route them to the remediation steps on the Purview troubleshooting page.
- Stop scheduled manual exports from the Device onboarding page once the query results match them.

### After rollout
- Review membership of the custom role that grants Advanced hunting access each quarter.
- Watch for devices where `HasDlpValidUpn` is false or `HasDlpACBandwidthExceeded` is true, which point to users outside policy scope or classification bandwidth limits.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Querying Endpoint DLP device status (the DlpInfo column)</strong><br><small>Tenant</small><br><small class="controls__note">The request body property Query carries the KQL, for example on the DeviceInfo table. Least-privileged permission: ThreatHunting.Read.All.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Investigation &amp; response › Hunting › Advanced hunting <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/runHuntingQuery</code> <a href="https://learn.microsoft.com/graph/api/security-security-runhuntingquery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration status and policy sync status in Purview</strong><br><small>Tenant</small><br><small class="controls__note">The DlpInfo values correspond to the device information on this page; the API side is the same query route as row 1.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/runHuntingQuery</code> <a href="https://learn.microsoft.com/graph/api/security-security-runhuntingquery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which analysts can run Advanced hunting queries on Defender data</strong><br><small>Group</small><br><small class="controls__note">Advanced hunting access to Alerts &amp; behaviors tables is the Security data basics (read) permission; endpoint data access follows Defender for Endpoint RBAC settings. Graph side assigns an existing role; beta.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Permissions › Microsoft Defender XDR › Roles › Create custom role › Choose permissions › Security operations <a href="https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/roleManagement/defender/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Creating a Defender unified RBAC custom role needs at least Security Administrator in Microsoft Entra ID, or all **Authorization** permissions in Defender unified RBAC. The portal enforces custom roles only once the unified RBAC model is activated.
- Microsoft Defender for Endpoint device groups govern per-device visibility alongside unified RBAC, so an analyst may see `DlpInfo` only for devices in their device groups.
- Global Administrator, Security Administrator, Security Reader and Global Reader provide Advanced hunting read access; endpoint data remains subject to Defender for Endpoint RBAC device scope. An account scoped to specific devices sees only those devices.
- Microsoft Graph beta documents Defender role assignments through `POST /beta/roleManagement/defender/roleAssignments`; production use of beta APIs is not supported. The request assigns an existing role: its body carries `roleDefinitionId`, `principalIds` and a scope (`directoryScopeIds` or `appScopeId`).

## Open questions

- Is `DlpInfo` populated for devices onboarded to Purview by the Purview onboarding scripts without Microsoft Defender for Endpoint deployed? Watch the `DeviceInfo` reference and the Purview troubleshooting page.
- Does Microsoft mean anything beyond the Advanced hunting `DlpInfo` column by "device status API", such as a dedicated Purview endpoint? Watch the roadmap item and Message center.
- Which advanced hunting API quotas apply to scheduled `runHuntingQuery` pulls in the US Government clouds?
- Will `DlpInfo` add the other device attributes on the onboarding page, such as last seen and Defender engine version, that the eight properties do not carry?

<!-- rationale
risk: Low. The feature exposes read-only device status, including the user principal name tied to each device, to people and apps that can already query Advanced hunting; it changes no device or policy.
cost: Low. Advanced hunting is a Microsoft Defender portal feature, available with a qualifying government Defender licence without additional cost; the work is building the reports.
impact: Low. Only compliance and security administrators who report on Endpoint DLP device health notice; end users and devices see no change.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope: Clouds / record: Microsoft lists the same device status feature for Worldwide under roadmap item 542792. | Found: "id": 542792; "title": "Microsoft Purview: Endpoint Data Loss Prevention-Endpoint DLP Device Status API"; "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Cite https://www.microsoft.com/microsoft-365/roadmap?id=542792 as 'Microsoft 365 Roadmap 542792' for the Worldwide statement and its Launched status and March CY2026 target.
- [supported, minor] Governance guidance: After rollout / behaviour: A false HasDlpValidUpn points to users outside policy scope. | Found: Valid user | This indicates if the currently logged on user has a corresponding Entra ID account and is in scope of a DLP policy that's targeted at Devices. | Fix: Replace the final checklist bullet with: 'Watch for devices where HasDlpValidUpn is false, indicating a problem with a valid user principal name, or HasDlpACBandwidthExceeded is true, indicating that the DLP Advanced Classification bandwidth threshold has been exceeded.' The valid-user condition also includes having a corresponding Entra ID account, not just policy scope. | Source: https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync
- [supported, minor] controls[1].ui; Governance guidance: Before rollout / admin-path: Per-device configuration and policy sync status are reached at Microsoft Purview portal > Settings > Device onboarding > Devices. | Found: Sign in to the Microsoft Purview portal > Settings (gear icon in the upper right corner) > Device onboarding > Devices. Select a device to open the details pane for more information on the configuration status. | Fix: Set controls[1].ui.path to 'Settings > Device onboarding > Devices > device' and state in its note that the selected device's details pane shows configuration status and policy sync status. The existing path stops at the correct device list. | Source: https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync
- [supported, minor] controls[1].api / command: POST /v1.0/security/runHuntingQuery also queries the DlpInfo configuration and policy synchronization data displayed in Purview. | Found: POST https://graph.microsoft.com/v1.0/security/runHuntingQuery Query | String | Required. The hunting query in Kusto Query Language (KQL). | Fix: Keep the call and append to controls[1].note: 'The request body property Query carries the DeviceInfo KQL query.' | Source: https://learn.microsoft.com/graph/api/security-security-runhuntingquery
- [supported, minor] controls[2].ui / admin-path: The custom-role configuration route is Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations. | Found: On the Choose permissions page, select each of the following as needed to configure permissions for that area: Security operations: Permissions for roles that manage day-to-day operations and respond to incidents and advisories. | Fix: Set controls[2].ui.path to 'Permissions > Microsoft Defender XDR > Roles > Create custom role > Basics > Choose permissions > Security operations > Security data > Security data basics (read)'. Add https://learn.microsoft.com/defender-xdr/custom-permissions-details to sources for the final permission. In the note, give the remaining assignment route: 'Assign users and data sources > Add assignment; select the employees and Microsoft Defender for Endpoint data source.' The printed route is correct but stops before the deciding permission and assignment. | Source: https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles
-->
