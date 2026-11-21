---
title: "Microsoft 365 Backup: activity logs for policy and restore operations"
slug: "m365-backup-activity-logs"
roadmapId: 500019
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft 365 Backup adds activity logs to the admin centre showing policy changes and restores, with filters and CSV export. Backup administrators are affected; Microsoft's notice MC1489931 says no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Microsoft 365 Backup is a pay-as-you-go service with a list price of $0.15/GiB/month of protected content. No separate licence or charge for activity logs is documented at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","security","compliance"]
tags: ["m365-backup","backup-and-recovery","auditing","monitoring","restore","m365-admin-center","microsoft-graph","purview","data-export","sharepoint","onedrive","exchange"]
sources:
  - title: "Microsoft 365 Roadmap 500019"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500019"
    kind: "roadmap"
  - title: "MC1489931: Microsoft 365 Backup: Activity Logs"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1489931"
    kind: "message-center"
  - title: "Privacy, security, and compliance in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-privacy-security"
    kind: "learn"
  - title: "What's new in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-whats-new"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-pricing"
    kind: "learn"
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-overview"
    kind: "learn"
  - title: "List activityLogs"
    url: "https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    kind: "learn"
videos: []
related: ["m365-teams-channel-backup","entra-id-backup-and-recovery-30-day"]
controls:
  - governs: "Viewing, filtering and exporting Microsoft 365 Backup activity logs"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Microsoft 365 Backup > Reports > Recent activities > View more"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-privacy-security"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/solutions/backupRestore/activityLogs"
      docs: "https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta"
    note: "Roles: Global Administrator, Microsoft 365 Backup Administrator, SharePoint Administrator or Exchange Administrator, each limited by workload. Graph is beta and needs BackupRestore-Monitor.Read.All."
  - governs: "Compliance record of Microsoft 365 Backup operations (Microsoft Purview Audit)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -Operations BackupPolicyActivated"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    note: "Existing control, separate from the in-product logs: Learn directs compliance investigations here. Needs the Audit Logs or View-Only Audit Logs role."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-17"
    note: "First briefing: Microsoft 365 Backup activity logs, with the admin centre route, roles, retention, the beta Graph endpoint and the Purview Audit alternative."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 78 statements confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 85 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 82
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "05ddfabd744c7bd6c2279dcf0d9d8468"
---

## What's changing

Microsoft 365 Backup now has **Activity Logs**, an in-product view of backup policy and restore operations. Microsoft Learn describes them as intended for operational monitoring and troubleshooting. The roadmap item describes them as a way to track activities related to backup policy configuration and restore tasks, to help with troubleshooting, monitoring, reporting and auditing.

The logs cover policy creation, activation, modification, pause, rename and deletion; dynamic rule creation, modification or deletion; complete product-level offboarding and protection-unit offboarding; and restore task creation and completion. Read-only operations, such as viewing policies or listing restore points, are not included. Each activity shows its status, service, impact, date and the admin or system identity that performed it, and policy and restore details appear where they apply. Administrators can filter by activity, status, service, impact or performed by, search by free text, and export the current result as a CSV file.

The roadmap record gives status Launched, release phase General Availability, a target of December CY2025, and Worldwide (Standard Multi-Tenant) on the Web platform. Microsoft's notice MC1489931 (published 6 October 2026) gives a different, later schedule: rollout to begin in mid-October 2026 and to complete by mid-October 2026. Microsoft Learn's What's new page lists the capability under 13 October 2026. The notice sets no act-by date and says no action is required.

The notice and Learn give different routes to the page. The notice says to open Microsoft 365 Backup in the Microsoft 365 admin center and select **Recent activities**. Learn says to open the **Reports** tab and, in the **Recent activities** card, select **View more** to open the **Activity logs** page.

## Why it matters

A backup administrator can now see who paused a policy, changed a dynamic rule or started a restore without leaving the Microsoft 365 Backup experience, which is the stated aim of the notice. That matters most for the high-impact actions Learn singles out: pausing or deleting backups, partial or full offboarding, and large-scale CSV-based restores.

The notice says no action is required, so nothing breaks if nobody acts. The gap that follows is organisational: the logs are retained for a fixed 365 days, they are not the compliance record, and what each administrator sees depends on their role. Decide who reviews the logs, how often, and which investigations still go to Microsoft Purview Audit.

## Risk assessment

**Data exposure**

- Log entries carry policy and restore details and the identity of the administrator who performed each action, per the notice and Learn. A CSV export moves that metadata out of the admin centre, so treat exported files as you would any administrative report.
- What an administrator sees is limited by role: Global Administrators and Microsoft 365 Backup Administrators see SharePoint, OneDrive and Exchange; SharePoint Administrators see SharePoint and OneDrive; Exchange Administrators see Exchange.

**Security & identity**

- The logs make high-impact actions visible: Learn rates pausing or deleting backups and partial or full offboarding as High impact, so a filter on High impact surfaces actions that disrupt protection.
- Learn tells administrators to continue to use Microsoft Purview Audit for compliance investigations that need the Microsoft 365 audit record. Do not treat the activity logs as the audit trail for such investigations.

**Autonomy & actions**

- Learn describes viewing, filtering, searching and exporting; it describes no action on the logs page that changes a policy or a restore. Entries can also be attributed to a system identity rather than a person, so a missing administrator name on an entry is not by itself an anomaly.

**Change & support**

- Retention is fixed at 365 days and is not configurable, and Learn gives a ceiling of up to 1 million activities across the supported services. Export anything you must keep longer.
- The Microsoft Graph endpoint for the logs is in the beta version, which Microsoft says is subject to change and not supported for production use. Scripts built on it can break.
- Support staff will meet two descriptions of the route to the page (the notice and Learn); give them the Learn route.

## Cost and licensing

Microsoft 365 Backup is a pay-as-you-go consumption-based service. Microsoft's pricing page gives a list price of $0.15/GiB/month of protected content, and the Backup overview says it charges based on consumption, unlike traditional user-based licences.

Microsoft Learn documents no separate licence, meter or charge for activity logs at the time of writing (November 2026), and neither the notice nor the roadmap record names one. Treat the logs as part of the existing Microsoft 365 Backup service until Microsoft says otherwise.

The indirect cost is administrator time to review the logs, to export CSV files and, if you script against the Graph endpoint, to maintain that script while the API is in beta. Microsoft Purview Audit is a separate record with its own retention that depends on licence; see the notes under the controls table.

## Scope

- **Who sees it:** administrators who manage Microsoft 365 Backup. Learn gives roles: Global Administrators and Microsoft 365 Backup Administrators view SharePoint, OneDrive and Exchange activity; SharePoint Administrators view SharePoint and OneDrive; Exchange Administrators view Exchange.
- **Workloads:** SharePoint, OneDrive and Exchange. The service filter offers those three.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. The Graph list-activityLogs page lists the API as available in the global service and not in the US Government L4, US Government L5 (DOD) or China operated by 21Vianet deployments.
- **Rollout:** the notice gives rollout beginning and completing in mid-October 2026. The roadmap record gives status Launched and release phase General Availability.
- **Prerequisites:** Microsoft 365 Backup in use. Learn's activity-logs section lists roles and no licence.

## Governance guidance

### Before rollout

- Tell your Microsoft 365 Backup administrators that activity monitoring is available in the product, as the notice recommends.
- Check which people hold Global Administrator, Microsoft 365 Backup Administrator, SharePoint Administrator or Exchange Administrator, because those roles decide which workloads each person can see in the logs.
- Decide which investigations stay in Microsoft Purview Audit and give the audit team the Backup operation names listed on the Purview audit activities page.

### At rollout

- Open the activity logs from the Microsoft 365 admin center (Microsoft 365 Backup > Reports > Recent activities > View more) and confirm that your role shows the workloads you expect.
- Filter on High impact to see which pause, delete, offboarding and CSV-restore actions have already been recorded.
- Test **Export** and agree where the CSV files are stored and who may read them.

### After rollout

- Review High impact activity on a schedule that suits your backup change process, and follow up on any entry you do not recognise.
- Export the logs before the fixed 365-day retention removes entries you need to keep.
- Treat any script that calls the Microsoft Graph beta activityLogs endpoint as subject to change, and re-check it when Microsoft documents a v1.0 version.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Viewing, filtering and exporting Microsoft 365 Backup activity logs</strong><br><small>Tenant</small><br><small class="controls__note">Roles: Global Administrator, Microsoft 365 Backup Administrator, SharePoint Administrator or Exchange Administrator, each limited by workload. Graph is beta and needs BackupRestore-Monitor.Read.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Reports › Recent activities › View more <a href="https://learn.microsoft.com/microsoft-365/backup/backup-privacy-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/solutions/backupRestore/activityLogs</code> <a href="https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Compliance record of Microsoft 365 Backup operations (Microsoft Purview Audit)</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, separate from the in-product logs: Learn directs compliance investigations here. Needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -Operations BackupPolicyActivated</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The activity logs are a viewing and export surface. Learn documents roles for viewing them but no setting that turns them on or off, and states that retention is not configurable. Those roles come from your existing role assignments; the logs page does not grant access of its own.

The Graph call needs the BackupRestore-Monitor.Read.All permission, delegated or application, per the reference page. Microsoft Purview Audit is the control Learn points to for compliance investigations. Its search needs the Audit Logs or View-Only Audit Logs role, and its retention depends on licence: 180 days for users on non-E5 licences, and one year by default for Microsoft Entra ID, Exchange and SharePoint activity for users on E5 licences, so it is a different retention window from the 365 days of the in-product logs. The Purview audit table lists Backup operation names such as BackupPolicyActivated and RestoreTaskCompleted; confirm in your tenant that the operations you rely on appear.

## Open questions

- Which route to the Activity logs page is current: the notice's **Recent activities**, or Learn's **Reports** > **Recent activities** > **View more**? Watch the Learn page and MC1489931, which says it will be updated with documentation.
- When will the Microsoft Graph activityLogs endpoint move from beta to v1.0, and will it then be supported for production use? Watch the Graph reference page.
- What happens when an organisation reaches the stated ceiling of 1 million activities, and do entries before the mid-October 2026 rollout appear? Learn states the ceiling and the 365-day retention but not the behaviour at the limit or for earlier history.
- Will activity logs reach US Government clouds? The roadmap item lists Worldwide (Standard Multi-Tenant) only, and the Graph reference lists the API for the global service only.

<!-- rationale
risk: Low. The logs are a monitoring view over backup policy and restore activity; the sources describe viewing, searching and exporting, and no change to what is backed up or restored.
cost: Low. Microsoft Learn documents no separate charge for activity logs at the time of writing (November 2026); Microsoft 365 Backup itself is billed pay-as-you-go, so the cost to plan for is admin time to review and export.
impact: Low. Only administrators who manage Microsoft 365 Backup see the logs, and what each sees depends on their role; end users notice nothing.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; rendered table; Governance guidance: At rollout / admin-path: The complete admin-centre route is Microsoft 365 Backup > Reports > Recent activities > View more. | Found: Go to the Microsoft 365 admin center [...] Select Settings. [...] Select Microsoft 365 Backup from the list of products. | Fix: Replace controls[0].ui.path and the matching rendered-table and checklist paths with 'Settings > Microsoft 365 Backup > Reports > Recent activities > View more'. Keep the existing activity-log docs link and cite https://learn.microsoft.com/microsoft-365/backup/backup-setup for the opening navigation steps. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing / cost: The pricing page gives a list price of $0.15/GiB/month of protected content. | Found: The list price is $0.15/GiB/month of protected content. | Fix: Keep the quoted pricing-page rate and add: 'The Backup overview's feature table instead labels the rate $0.15 per GB per month; the pricing page specifies GiB.' Cite https://learn.microsoft.com/microsoft-365/backup/backup-overview alongside https://learn.microsoft.com/microsoft-365/backup/backup-pricing for this discrepancy. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-pricing
- [supported, minor] Governance controls; Scope; rationale: impact / role: Access follows existing administrator-role assignments rather than grants made on the activity-log page. | Found: It's important to note that your admin role determines which products you can manage with Microsoft 365 Backup. | Fix: Cite https://learn.microsoft.com/microsoft-365/backup/backup-setup for the statement that existing admin roles determine access. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks readers to review administrator-role assignments, but the controls table has no role-assignment row. | Found: Check which people hold Global Administrator, Microsoft 365 Backup Administrator, SharePoint Administrator or Exchange Administrator [...] Table rows: activity logs; Microsoft Purview Audit. | Fix: Remove the Before rollout bullet beginning 'Check which people hold Global Administrator'; this correction does not add a role-assignment control row.
- [contradicted, minor] Governance controls / consistency: The prose states that no activity-log on/off control is documented, but the table has no row representing that absence. | Found: Learn documents roles for viewing them but no setting that turns them on or off [...] Table rows: activity logs; Microsoft Purview Audit. | Fix: Remove 'but no setting that turns them on or off' from the Governance controls paragraph; do not add a control row.
-->
