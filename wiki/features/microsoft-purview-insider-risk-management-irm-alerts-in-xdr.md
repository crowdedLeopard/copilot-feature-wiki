---
title: "Microsoft Purview Insider Risk Management: alerts in Microsoft Defender XDR"
slug: "microsoft-purview-insider-risk-management-irm-alerts-in-xdr"
roadmapId: 560075
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management alerts and supporting data are planned for Defender XDR queues, advanced hunting and Graph in GCC, GCC High and DoD. The roadmap says an admin turns on data sharing; plan for SOC access and anonymisation."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's Defender page lists a supported Microsoft 365 subscription for Insider Risk Management and access to Microsoft Defender XDR as prerequisites; some IRM indicators need pay-as-you-go billing. A licence or meter specific to this sharing setting is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["insider-risk-management","defender-xdr","microsoft-graph","data-governance","integration","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 560075"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560075"
    kind: "roadmap"
  - title: "Investigate insider risk threats in the Microsoft Defender portal"
    url: "https://learn.microsoft.com/defender-xdr/irm-investigate-alerts-defender"
    kind: "learn"
  - title: "Share Insider Risk Management data with other solutions"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-share-data"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Who is in the Insider Risk Management role groups that view alerts and configure settings (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-introducing-irm-alert-classification","microsoft-purview-insider-risk-management-ds-triage-agent-for-irm-available-in-defender","microsoft-purview-insider-risk-management-insider-risk-management-for-agents"]
controls:
  - governs: "Whether Insider Risk Management shares alerts and data with Microsoft Defender XDR"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Data sharing > Sharing data with other Microsoft security solutions"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-share-data"
    api: null
    note: "Learn labels it Data sharing; the roadmap says Share data with Microsoft Defender XDR. Learn describes it for Microsoft security solutions; US Government availability is not stated."
  - governs: "Who is in the Insider Risk Management role groups that view alerts and configure settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Existing role-group control. Defender access also needs Security Operator or Security Reader, set in Defender, not here. The cmdlet page describes management role groups generally."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-16T22:00:35"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item: IRM alerts in Defender XDR, targeted for February CY2027 in GCC, GCC High and DoD."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 52 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 56 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 54
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "23cbc30e4ec27238cea3bcd8861a17e9"
---

## What's changing

The roadmap item plans to make Microsoft Purview Insider Risk Management (IRM) alerts and supporting data available in three Microsoft Defender XDR experiences: the unified alert and incident queues, advanced hunting (alerts, indicators and enriched events, queried with KQL) and Graph API. The record lists GCC, GCC High and DoD, Web, General Availability, status In development and a target of February CY2027. Dates are Microsoft's targets.

The roadmap says an administrator enables it through "Share data with Microsoft Defender XDR" in the Insider Risk Management settings, and that IRM data in Defender XDR does not honour anonymisation so that IRM alerts can be correlated with alerts from other solutions such as Defender for Endpoint and Defender for Cloud Apps.

Microsoft Learn already documents this integration without naming a cloud. It describes IRM alerts grouped into one incident per user, a Service source filter, advanced hunting through the AlertInfo, AlertEvidence, DataSecurityBehaviors and DataSecurityEvents tables, and Microsoft Graph security API access, with status, severity and classification updates reflected in both portals within 30 minutes. The page carries a prerelease notice, and the Learn setting is labelled **Data sharing** rather than the roadmap's wording. Whether this behaviour applies in GCC, GCC High and DoD, and from when, is not stated on Learn at the time of writing (November 2026).

Learn lists data not yet in the integration: exfiltration through email events, risky AI usage events, third-party cloud apps events, events before an alert was generated and administrator-defined event exclusions.

## Why it matters

This moves insider-risk signals out of the Purview portal and into the tool a security operations centre (SOC) works in. Alerts that were seen only by IRM role groups can be correlated with other detections and queried in bulk, which helps find patterns but widens who can see insider-risk data about named users.

Microsoft has not stated what happens on arrival beyond the roadmap saying the setting enables it, and Learn says data sharing must be turned on. Treat it as a decision for the IRM owner and the SOC lead together: who may see this data, and whether existing Microsoft Sentinel automation copes with incidents that carry no alert content.

## Risk assessment

**Data exposure**
- The roadmap says IRM data in Defender XDR does not honour anonymisation, so analysts with access can see which users raised insider-risk alerts. Decide who holds the Defender and IRM roles before enabling sharing.
- Learn lists the Microsoft Graph security API as a route to IRM incidents, alerts and hunting data for SIEM tools such as Microsoft Sentinel, ServiceNow or Splunk, so the data can leave the Defender portal through an app with the right permissions.

**Security & identity**
- Learn requires Security Operator or Security Reader in Defender and membership of an IRM role group (Insider Risk Management, Analysts or Investigators) to view and manage IRM alerts there; advanced hunting needs the Analyst or Investigator role.

**Autonomy & actions**
- Alert status and classification sync both ways: Learn maps Defender statuses to IRM statuses, and updates made in either portal are reflected in the other. A Defender analyst resolving an alert can therefore change its status in IRM.

**Change & support**
- Learn warns that Microsoft Sentinel automation can fail because IRM incidents carry no alert content, and recommends the Microsoft Purview Insider Risk Management data connector for Sentinel.
- Learn's coverage gaps (email exfiltration, risky AI usage and third-party cloud app events) mean the Defender view is not a complete copy of the IRM alert.

## Cost and licensing

Learn's Defender page lists two prerequisites: confirm that the Microsoft 365 subscription supports Insider Risk Management, and confirm access to Microsoft Defender XDR. It names no separate licence for the sharing itself. The Insider Risk Management get-started page says some IRM indicators are only available with pay-as-you-go billing, so check which indicators your policies use.

A charge or meter specific to sharing IRM data with Defender XDR, or specific to GCC, GCC High and DoD, is not yet published. Indirect cost is admin time to set roles and SOC time to triage the extra alerts.

## Scope

The roadmap lists GCC, GCC High and DoD, on Web. Learn's Defender page does not name clouds, so confirm government-cloud availability separately.

The feature is aimed at SOC analysts and IRM investigators rather than end users. Learn requires Defender roles (Security Operator or Security Reader), IRM role-group membership, and for advanced hunting the Insider Risk Management Analyst or Investigator role. Applications reading the data through Graph need the Graph security permissions Learn lists for incidents, alerts and advanced hunting.

## Governance guidance

### Before rollout
- Agree between the IRM owner and the SOC lead who may see named insider-risk alerts in Defender, using the roles on the Learn page.
- Review Insider Risk Management role-group membership in the Microsoft Purview portal.
- Identify Microsoft Sentinel automation rules that act on incidents and test them against incidents without alert content.
- Check which Defender and Graph integrations (SIEM, ServiceNow, Splunk) would receive IRM alerts.

### At rollout
- Turn on the Data sharing setting in Insider Risk Management settings only after the role review is complete.
- Confirm that the roadmap's "Share data with Microsoft Defender XDR" wording matches the setting shown in your cloud.
- Test that IRM alerts appear under the Microsoft Purview Insider Risk Management Service source in the Defender incident and alert queues.

### After rollout
- Review who can run advanced hunting queries over DataSecurityBehaviors and DataSecurityEvents.
- Check that alert status changes in Defender are reflected in IRM, and watch Learn for the missing data types.
- Re-read the roadmap record each month until the status moves from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Insider Risk Management shares alerts and data with Microsoft Defender XDR</strong><br><small>Tenant</small><br><small class="controls__note">Learn labels it Data sharing; the roadmap says Share data with Microsoft Defender XDR. Learn describes it for Microsoft security solutions; US Government availability is not stated.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Data sharing › Sharing data with other Microsoft security solutions <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-share-data" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who is in the Insider Risk Management role groups that view alerts and configure settings</strong><br><small>Tenant</small><br><small class="controls__note">Existing role-group control. Defender access also needs Security Operator or Security Reader, set in Defender, not here. The cmdlet page describes management role groups generally.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Data sharing setting is the switch; role-group membership and Defender roles decide who sees the data once it is on. Learn documents no API for the setting at the time of writing (November 2026), so it is changed in the portal. Role-group membership is the existing control for IRM access; Learn requires Defender roles as well, and those are managed in Defender, not in this table. The setting label differs across pages (Data sharing, Share user risk details with other security solutions, and the roadmap's Share data with Microsoft Defender XDR).

## Open questions

- Does the Defender XDR integration documented on Learn apply in GCC, GCC High and DoD, and from which date? Watch the roadmap item and the Learn Defender page.
- Is a separate licence or meter published for sharing IRM data with Defender XDR in US Government clouds?
- Will the integration in these clouds carry the data types Learn lists as not yet available, such as email exfiltration and risky AI usage events?
- Is there an API for the Data sharing setting?

<!-- rationale
risk: Medium. Once sharing is on, the roadmap says IRM data in Defender XDR does not honour anonymisation, so SOC analysts can see insider-risk alerts by user alongside other alerts.
cost: Low. The only cost the sources show is admin and analyst time; the Learn page lists a supported Microsoft 365 subscription and Defender XDR access as prerequisites, and no charge specific to sharing is published.
impact: Medium. Security operations analysts and Insider Risk Management investigators notice it, because alerts appear in Defender incident and alert queues; ordinary users do not.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Before this change, IRM alerts were seen only by IRM role groups. | Found: Searched: Insider Risk Management alerts previously only role groups access export historical Defender integration. Read permissions, share-data, integration and scc-permissions results; these describe current permissions and existing exports, not that historical exclusive visibility. | Fix: Replace 'Alerts that were seen only by IRM role groups can be correlated with other detections and queried in bulk' with 'IRM alerts can be correlated with other detections and queried in bulk'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: sharing row / admin-path: The sharing control is reached at Microsoft Purview portal > Settings > Insider Risk Management > Data sharing > Sharing data with other Microsoft security solutions. | Found: In Insider Risk Management settings, select the Data sharing setting. Under the Sharing data with other Microsoft security solutions section, turn on the setting. | Fix: The path reaches the correct section but omits the switch. Extend it to 'Settings > Insider Risk Management > Data sharing > Sharing data with other Microsoft security solutions > Share user risk details with other security solutions'; the switch label is stated at https://learn.microsoft.com/defender-xdr/irm-investigate-alerts-defender, already cited. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-share-data
- [supported, minor] controls[1].note; Governance controls / role: The Defender access roles are set and managed in Defender rather than through the IRM role-group control. | Found: There are two ways to manage access to Microsoft Defender XDR: Global Microsoft Entra roles; Custom role access. To review accounts with these roles, view Permissions in the Microsoft Defender portal. | Fix: Replace 'set in Defender, not here' in the row note with 'Microsoft Entra global roles, separate from IRM role-group membership'. Replace 'those are managed in Defender, not in this table' in the prose with 'those are Microsoft Entra global roles, separate from the IRM role-group control in this table'. Cite https://learn.microsoft.com/defender-xdr/m365d-permissions. | Source: https://learn.microsoft.com/defender-xdr/m365d-permissions
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: Every control the governance checklist asks readers to check or review is represented in the controls table. | Found: Identify Microsoft Sentinel automation rules ... Check which Defender and Graph integrations ... Review who can run advanced hunting queries ... The table contains only Data sharing and IRM role-group membership. | Fix: The Before rollout bullets about Sentinel automation rules and Defender/Graph integrations have no matching table rows. Remove those two bullets; keep their supported explanations in Risk assessment. Narrow the After rollout bullet to 'Review Insider Risk Management Analyst and Investigator role-group membership for advanced hunting access', using the existing role-group row.
-->
