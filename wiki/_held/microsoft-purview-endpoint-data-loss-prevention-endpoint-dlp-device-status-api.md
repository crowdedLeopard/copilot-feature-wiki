---
title: "Microsoft Purview Endpoint DLP: device status data by query instead of export (GCC, GCC High and DoD)"
slug: "microsoft-purview-endpoint-data-loss-prevention-endpoint-dlp-device-status-api"
roadmapId: 559027
topic: "governance"
products: ["Microsoft Purview"]
summary: "In GCC, GCC High and DoD, Endpoint DLP device health details from the Purview device onboarding page can be queried in Advanced hunting or through Microsoft Graph. Nothing to switch on; decide who may read the data."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "Advanced hunting comes with the licences the Microsoft Defender XDR prerequisites page lists (for example Microsoft 365 E5 or A5, or Microsoft Defender for Endpoint). Microsoft publishes no separate licence or price for the DlpInfo column."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","endpoint-dlp","device-onboarding","advanced-hunting","defender-xdr","microsoft-graph","monitoring","data-export","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 559027"
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
    api: null
    note: "Advanced hunting access to Alerts & behaviors tables is the Security data basics (read) permission; endpoint data access follows Defender for Endpoint RBAC settings."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-06T23:15:10"
changes:
  - date: "2026-11-28"
    note: "New briefing: Endpoint DLP device status in the Advanced hunting DeviceInfo table and through Graph runHuntingQuery, for GCC, GCC High and DoD."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 61
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "6a5d753861d86a05a5667f0c65cd5638"
---

## What's changing

Endpoint DLP device status, the configuration, policy sync and readiness details shown for each device on the Purview device onboarding page, can now be pulled by query rather than by manual export. The roadmap item calls this a "device status API" for feeding BI tools, dashboards and workflows. Microsoft Learn documents the matching capability as the `DlpInfo` column of the `DeviceInfo` table in Advanced hunting, in the Microsoft Defender portal, and notes that "Previously, you could get device attribute data manually through the Export functionality on the Device onboarding page". Learn does not use the name "device status API".

`DlpInfo` is a JSON object with eight properties: `IsDlpConfigurationValid`, `DlpPolicyLastModifiedTimeUTC`, `IsDlpEnabled`, `IsDefenderRealTimeProtectionEnabled`, `IsDefenderBehaviorMonitoringEnabled`, `HasDlpACBandwidthExceeded`, `HasDlpValidUpn` and `DlpUpn`. The Purview troubleshooting page says these values correspond to the device information on the DLP device onboarding page. Administrators query it in Advanced hunting with KQL (Kusto Query Language), or from a script through the Microsoft Graph `runHuntingQuery` method, which runs a KQL query against the advanced hunting schema.

The `DeviceInfo` reference lists `DlpInfo` among the table's columns, and the Purview page's steps to retrieve the data are to open Advanced hunting and query the table. Roadmap item 559027 covers GCC, GCC High and DoD, on the Web platform; it is Launched, General Availability, with a target of April CY2026. Microsoft lists the same feature for the Worldwide cloud under roadmap item 542792 (Launched, March CY2026). The Graph `runHuntingQuery` reference lists the method as available in the US Government L4 and US Government L5 (DOD) deployments.

## Why it matters

For teams that export the device list from Purview on a schedule to track Endpoint DLP coverage, this replaces a manual step with a query that can feed a dashboard or an alerting workflow. It also moves DLP device health into the Defender portal's Advanced hunting, which in most organisations belongs to security operations rather than the compliance team that runs Purview, so the two teams need to agree who builds and owns the reports.

The data is already in the table, so leaving it alone changes nothing for users or devices. What does change is who can see DLP readiness and the user principal name (UPN) linked to each device: anyone who can query endpoint data in Advanced hunting, and any app granted the Graph hunting permission.

## Risk assessment

**Data exposure**
- `DlpInfo` adds `DlpUpn`, the UPN associated with each device, and DLP readiness flags to `DeviceInfo`. The advanced hunting page says the Microsoft Entra roles Global Administrator, Security Administrator, Security Reader and Global Reader grant full read access to all advanced hunting data, and that access to endpoint data is determined by Defender for Endpoint role-based access control settings. Copies pulled into BI tools leave the Defender portal's access controls behind.

**Security & identity**
- Scheduled pulls through Graph need `ThreatHunting.Read.All`, delegated or application. The method accepts any hunting query in its `Query` property, so treat a reporting app's credential as access to hunting data generally, not to this column alone.

**Autonomy & actions**
- No change: the documented operation is a query of existing data. It does not change devices, DLP policies or onboarding.

**Change & support**
- The `DeviceInfo` reference warns that if the organisation has not deployed the service in Microsoft Defender, queries on the table do not work or return no results; confirm the column is populated before retiring exports.
- `DeviceInfo` is updated continuously and every update holds the device's full current data, so reports must take the latest row per device. Portal queries return at most 100,000 rows and time out after 10 minutes; API queries have their own quotas.

## Cost and licensing

- **Licence**: Advanced hunting is a Microsoft Defender portal feature. The [Microsoft Defender XDR prerequisites](https://learn.microsoft.com/defender-xdr/prerequisites) page says any of the licences it lists, including Microsoft 365 E5 or A5 and Microsoft Defender for Endpoint, "give you access to Microsoft Defender features via the Microsoft Defender portal without any additional cost". Endpoint DLP itself is licensed as the [Get started with endpoint data loss prevention](https://learn.microsoft.com/purview/endpoint-dlp-getting-started) page directs, through the Microsoft 365 service descriptions.
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
<tr><td data-label="Control"><strong>Which analysts can run Advanced hunting queries on Defender data</strong><br><small>Group</small><br><small class="controls__note">Advanced hunting access to Alerts &amp; behaviors tables is the Security data basics (read) permission; endpoint data access follows Defender for Endpoint RBAC settings.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Permissions › Microsoft Defender XDR › Roles › Create custom role › Choose permissions › Security operations <a href="https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Creating a Defender unified RBAC custom role needs at least Security Administrator in Microsoft Entra ID, or all **Authorization** permissions in Defender unified RBAC. The portal enforces custom roles only once the unified RBAC model is activated.
- Microsoft Defender for Endpoint device groups govern per-device visibility alongside unified RBAC, so an analyst may see `DlpInfo` only for devices in their device groups.
- The Entra roles Global Administrator, Security Administrator, Security Reader and Global Reader grant full read access to all advanced hunting data, whatever custom roles say.
- Microsoft Learn documents no API for Defender unified RBAC custom roles at the time of writing (November 2026).

## Open questions

- Is `DlpInfo` populated for devices onboarded to Purview by the Purview onboarding scripts without Microsoft Defender for Endpoint deployed? Watch the `DeviceInfo` reference and the Purview troubleshooting page.
- Does Microsoft mean anything beyond the Advanced hunting `DlpInfo` column by "device status API", such as a dedicated Purview endpoint? Watch the roadmap item and Message center.
- Which advanced hunting API quotas apply to scheduled `runHuntingQuery` pulls in the US Government clouds?
- Will `DlpInfo` add the other device attributes on the onboarding page, such as last seen and Defender engine version, that the eight properties do not carry?

<!-- rationale
risk: Low. The feature exposes read-only device status, including the user principal name tied to each device, to people and apps that can already query Advanced hunting; it changes no device or policy.
cost: Low. Advanced hunting is a Microsoft Defender portal feature that the Defender XDR prerequisites page lists as available with licences such as Microsoft 365 E5 without additional cost; the work is building the reports.
impact: Low. Only compliance and security administrators who report on Endpoint DLP device health notice; end users and devices see no change.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].api; Governance controls table row 3; Governance controls: final bullet / absence: Microsoft Learn documents no API for Defender unified RBAC custom roles. | Found: The following RBAC providers are currently supported: Cloud PC; device management (Intune); Defender (Microsoft Defender XDR). To create role assignment for a Defender provider: POST /roleManagement/defender/roleAssignments | Fix: Replace controls[2].api with kind 'graph', call 'POST /beta/roleManagement/defender/roleAssignments', and docs 'https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta'. Add to the note: 'Assigns an existing role: principalIds identifies the recipients, roleDefinitionId identifies the role, and directoryScopeIds or appScopeIds supplies the scope. This beta API is subject to change and is not supported for production applications.' Replace the final no-API bullet with 'Microsoft Graph beta documents Defender role assignments through POST /beta/roleManagement/defender/roleAssignments; production use of beta APIs is not supported.' Cite the operation and https://learn.microsoft.com/graph/api/resources/unifiedroleassignmentmultiple?view=graph-rest-beta. Note that the operation page explicitly lists Defender while the resource page's provider summary lists only Cloud PC and Intune. Keep the rendered row consistent. | Source: https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta
- [contradicted, blocker] Risk assessment: Data exposure; Governance controls: Entra roles bullet / role: Global Administrator, Security Administrator, Security Reader and Global Reader grant full access to all advanced hunting data whatever custom roles say. | Found: If your access hasn't been scoped to a specific set of devices in the Defender for Endpoint, you'll have full access to data in Microsoft Defender XDR. However, once your account is scoped, you'll only see data about the devices in your scope. | Fix: Replace both full-access statements with: 'Global Administrator, Security Administrator, Security Reader and Global Reader provide Advanced hunting read access; endpoint data remains subject to Defender for Endpoint RBAC device scope. An account scoped to specific devices sees only those devices.' Cite https://learn.microsoft.com/defender-xdr/m365d-permissions. The cited advanced-hunting overview itself qualifies its full-read wording with endpoint RBAC; do not retain 'whatever custom roles say'. | Source: https://learn.microsoft.com/defender-xdr/m365d-permissions
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing: Licence; rationale: cost / licensing: For this GCC, GCC High and DoD briefing, the general Defender prerequisite licences, including Microsoft 365 E5 or A5, are the applicable entitlement guidance without government qualification. | Found: Microsoft Defender for US Government customers requires one of the following Microsoft volume licensing offers: GCC | GCC High | DoD: Microsoft 365 GCC G5 | Microsoft 365 E5 for GCC High | Microsoft 365 G5 for DOD | Fix: Keep licensing.model 'included', but replace the entitlement guidance in licensing.notes and the Licence paragraph with: 'Microsoft Defender for US Government requires a qualifying government volume licence; examples are Microsoft 365 GCC G5 for GCC, Microsoft 365 E5 for GCC High, and Microsoft 365 G5 for DOD. The general Defender prerequisites page states that listed licences provide Defender portal features without additional cost.' Cite https://learn.microsoft.com/defender-xdr/usgov and add it to sources. Replace the cost rationale's unqualified E5 example with 'a qualifying government Defender licence'. Retain the separate statement directing Endpoint DLP licensing to its service descriptions. | Source: https://learn.microsoft.com/defender-xdr/usgov
- [unsupported, blocker] front matter: defaultState / default: The new capability arrives on by default. | Found: Searched: 'DlpInfo DeviceInfo enable disable default Endpoint DLP device status API licensing price meter', '"DlpInfo" "switch" "default"'; read roadmap 559027, Purview troubleshooting, DeviceInfo and Advanced hunting overview. A schema column does not state the rollout default. | Fix: Set defaultState to 'unknown'. Add 'Microsoft has not stated the rollout default for this capability.' Keep the documented availability and query instructions, but do not treat the column's presence in the schema as evidence of an automatic rollout.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance guidance: Before rollout; Governance controls table row 2 / admin-path: Purview Settings > Device onboarding > Devices leads to per-device configuration and policy sync status. | Found: Sign in to the Microsoft Purview portal > Settings (gear icon in the upper right corner) > Device onboarding > Devices. Select a device to open the details pane for more information on the configuration status. | Fix: Extend controls[1].ui.path and its rendered table path to 'Settings > Device onboarding > Devices > device'; say in the note that the selected device's details pane shows configuration and policy sync status. Keep the device-count comparison path unchanged. | Source: https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync
- [supported, minor] controls[2].ui; Governance controls table row 3 / admin-path: A Defender custom role is configured through Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations. | Found: On the Permissions page, under Microsoft Defender XDR, select Roles > Create custom role. On the Choose permissions page, select each of the following as needed to configure permissions for that area: Security operations | Fix: The path stops at the permission group. Extend it to 'Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations > Security data > Security data basics (read)'. Cite https://learn.microsoft.com/defender-xdr/custom-permissions-details as the reference for those final permission labels; retain the existing endpoint-RBAC qualification. | Source: https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles
- [supported, minor] summary: Nothing to switch on / absence: There is no separate switch to enable the DlpInfo reporting column. | Found: Searched: '"DlpInfo" "enable" "Advanced hunting"', '"DlpInfo" "switch" "default"'; read Purview troubleshooting, DeviceInfo and Advanced hunting overview. No DlpInfo-specific enablement switch was documented; Advanced hunting separately requires turning on Defender. | Fix: Replace 'Nothing to switch on; decide who may read the data.' with 'No separate DlpInfo enablement switch is documented; Advanced hunting requires Microsoft Defender to be enabled. Review who may read the data.' This avoids implying that an unprovisioned tenant needs no setup.
-->
