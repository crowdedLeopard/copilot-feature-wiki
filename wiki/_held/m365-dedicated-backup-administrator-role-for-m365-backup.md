---
title: "Microsoft 365 Backup: dedicated Microsoft 365 Backup Administrator role"
slug: "m365-dedicated-backup-administrator-role-for-m365-backup"
roadmapId: 464992
topic: "modern-work"
products: ["Microsoft 365"]
summary: "A Microsoft Entra built-in role lets named admins run Microsoft 365 Backup for SharePoint, OneDrive and Exchange without SharePoint, Exchange or Global Administrator rights. Nothing changes until you assign it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2025"
previewDate: "January CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft 365 Backup is a pay-as-you-go service at a list price of $0.15/GiB/month of protected content, per the Backup pricing page. Microsoft publishes no separate price for assigning the Microsoft 365 Backup Administrator role."
audiences: ["m365-admin","security","service-owner"]
tags: ["m365-backup","backup-and-recovery","restore","least-privilege","entra-id","m365-admin-center","sharepoint","onedrive","exchange"]
sources:
  - title: "Microsoft 365 Roadmap 464992"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=464992"
    kind: "roadmap"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
  - title: "Set up Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
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
  - title: "Departmental Billing for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-billing"
    kind: "learn"
  - title: "Offboarding in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-offboarding"
    kind: "learn"
  - title: "Privacy, security, and compliance in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-privacy-security"
    kind: "learn"
  - title: "Use Microsoft Entra groups to manage role assignments"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/groups-concept"
    kind: "learn"
  - title: "Assign admin roles in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    kind: "learn"
  - title: "Create unifiedRoleAssignment"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
  - title: "Who is emailed when backup policies change or backups are offboarded (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    kind: "learn"
  - title: "Viewing, filtering and exporting Microsoft 365 Backup activity logs (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["m365-backup-activity-logs","m365-create-full-workload-backup-policies-for-m365-backup","entra-id-backup-and-recovery-30-day","m365-long-term-retention-period-for-m365-backup","auditing"]
controls:
  - governs: "Who holds the Microsoft 365 Backup Administrator role"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Roles > Role assignments > Microsoft Entra ID > role > Assigned > Add users"
      docs: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "Request body sets roleDefinitionId (template ID 1707125e-0aa2-4d4d-8655-a7c786c76a25), principalId and directoryScopeId. For delegated work or school account access, Privileged Role Administrator is the least privileged supported role."
  - governs: "Who is emailed when backup policies change or backups are offboarded"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Email notifications"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    api:
      kind: "powershell"
      call: "Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled -Recipients <IMicrosoftGraphNotificationRecipients>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    note: "Global admins and Microsoft 365 Backup admins can turn the feature on and change the list; up to 20 recipients. Policy creation and modification require opting in to routine events; jobs configured with a 10-minute RPO are excluded."
  - governs: "Viewing, filtering and exporting Microsoft 365 Backup activity logs"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Reports > Recent activities > View more"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-privacy-security"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/solutions/backupRestore/activityLogs"
      docs: "https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta"
    note: "Read-only monitoring. Logs are kept for 365 days; the Graph call is beta."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2024-10-29T23:15:28"
changes:
  - date: "2026-11-26"
    note: "New briefing on the Microsoft 365 Backup Administrator role, which Learn already documents while the roadmap item is still In development."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: group assignment needs a role-assignable group (Microsoft Entra ID P1 or P2); Privileged Role Administrator qualified to delegated Graph access; routine-event opt-in for policy-change emails; two checklist items without table rows removed."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 62
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "2af4fe6b49c0682bcbd31174140bdb45"
---

## What's changing

Microsoft 365 Backup gets its own administrator role, so the people who run backups no longer need a broader workload or Global Administrator role. The Microsoft Entra built-in roles page describes the **Microsoft 365 Backup Administrator** role (template ID 1707125e-0aa2-4d4d-8655-a7c786c76a25) as the role for users who need to "manage all aspects of Microsoft 365 Backup", create, edit and manage backup policies for SharePoint, OneDrive and Exchange Online, and restore backed-up SharePoint sites, OneDrive accounts and Exchange mailboxes.

The Microsoft 365 Backup setup page calls it "a new dedicated role for this tool" that "can control the entire tool", and its role table gives it OneDrive, SharePoint and Exchange, but not Entra. Microsoft's What's new page states that the Microsoft 365 Backup Administrator role alone doesn't grant management of Microsoft Entra backup; that stays with Global Administrators and Microsoft Entra Backup Administrators. Microsoft Learn also documents narrower **SharePoint Backup Administrator** and **Exchange Backup Administrator** roles for one workload each.

The roadmap item lists the change as In development, with a preview target of January CY2025 and a general availability target of March CY2025, for Worldwide (Standard Multi-Tenant) on the web. Microsoft Learn already documents the role as introduced, so the roadmap status and the documentation disagree.

## Why it matters

Without this role, the setup page's role table gives backup and restore to SharePoint Administrators (OneDrive and SharePoint), Exchange Administrators (Exchange) and Global Administrators. A dedicated role lets a backup or operations team run policies and restores across all three workloads without the wider rights those roles carry, which is the least-privilege pattern Microsoft recommends on the same page.

The trade-off is that the new role is broad inside Backup. One holder can restore backed-up sites, accounts and mailboxes, change what is protected and therefore what the tenant pays for, and request faster deletion of offboarded backups. Assigning it is a decision about who can roll back the tenant's data, and deserves the same review as any other privileged role.

## Risk assessment

**Data exposure**
- Holders can restore backed-up SharePoint sites, OneDrive accounts and Exchange mailboxes. Microsoft's privacy page notes that a restore reverts sensitivity labels to their state at the restore point, so a restore can undo later labelling.
- The setup page lists Global Administrator, SharePoint Administrator and Exchange Administrator as the other roles that can manage Backup for these workloads; assigning the new role does not change what those roles can do, so check who still holds them.

**Security & identity**
- The role is assigned like any Microsoft Entra role, through Microsoft 365 admin center Role assignments or Microsoft Graph. For delegated Microsoft Graph access using a work or school account, Privileged Role Administrator is the least privileged supported role.
- The role does not cover Microsoft Entra backup, which needs Global Administrator or Microsoft Entra Backup Administrator.

**Autonomy & actions**
- A holder can create, change and pause backup policies and start restores. Backup critical action approval requires two approvers before the offboarding grace period is shortened from 90 days to seven, and only a Global Admin or Backup Admin can manage that approver roster.

**Change & support**
- No change for end users. Microsoft's setup page states that end users can't enable backup or restores themselves.

## Cost and licensing

**Licence.** Microsoft 365 Backup is a pay-as-you-go consumption-based service with a list price of $0.15/GiB/month of protected content ([Pricing model for Microsoft 365 Backup](https://learn.microsoft.com/microsoft-365/backup/backup-pricing)). The overview page states that restores are free. Microsoft publishes no separate price for assigning the Microsoft 365 Backup Administrator role.

**Indirect spend.** Every site, account or mailbox a role holder adds to a policy is billed on that meter, so the role carries spending authority. The setup page says pay-as-you-go billing needs an Azure subscription and an Owner or Contributor on it. Microsoft's [departmental billing](https://learn.microsoft.com/microsoft-365/backup/backup-billing) option, once enabled, limits creating and editing backup policies to admins who also hold Owner or Contributor on the Azure subscription of the connected billing policy.

**Admin time.** Expect time to decide who holds the role and to review the assignments.

## Scope

- **Who:** users, or role-assignable groups with Microsoft Entra ID P1 or P2 ([Use Microsoft Entra groups to manage role assignments](https://learn.microsoft.com/entra/identity/role-based-access-control/groups-concept)), that an administrator assigns to the Microsoft 365 Backup Administrator role.
- **Workloads:** SharePoint, OneDrive and Exchange Online in Microsoft 365 Backup; not Microsoft Entra backup.
- **Who assigns it:** in the Microsoft 365 admin center under Roles > Role assignments, or through Microsoft Graph. For delegated Microsoft Graph access using a work or school account, Privileged Role Administrator is the least privileged supported role.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant).
- **Platform:** web (Microsoft 365 admin center).
- **Prerequisite:** Microsoft 365 Backup with pay-as-you-go billing set up. The setup page names SharePoint Administrator or Global Administrator as the roles that set up Microsoft 365 Backup. The [What's new page](https://learn.microsoft.com/microsoft-365/backup/backup-whats-new) also lists Billing Administrator and AI Administrator for pay-as-you-go setup when the required Azure subscription permissions are present.

## Governance guidance

### Before rollout
- Decide who should hold Microsoft 365 Backup Administrator, and whether the narrower SharePoint Backup Administrator or Exchange Backup Administrator role fits a team better.
- List current SharePoint, Exchange and Global Administrators who run backups today, so that moving them to the dedicated role actually reduces their rights.
- Turn on Backup email notifications, add a security mailbox, and select the checkbox to also receive routine event notifications for policy creation and modification. Notifications are daily digests after the overall policy completes; jobs configured with a 10-minute RPO are excluded.

### At rollout
- Assign the role in the Microsoft 365 admin center (Roles > Role assignments > Microsoft Entra ID tab) or with the Graph role assignment call, to named users, or a role-assignable group with Microsoft Entra ID P1 or P2.

### After rollout
- Review the Microsoft 365 Backup activity logs for policy, offboarding and restore operations performed by role holders.
- Review the role's assigned users and groups periodically and remove holders who no longer run backups.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds the Microsoft 365 Backup Administrator role</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets roleDefinitionId (template ID 1707125e-0aa2-4d4d-8655-a7c786c76a25), principalId and directoryScopeId. For delegated work or school account access, Privileged Role Administrator is the least privileged supported role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Roles › Role assignments › Microsoft Entra ID › role › Assigned › Add users <a href="https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who is emailed when backup policies change or backups are offboarded</strong><br><small>Tenant</small><br><small class="controls__note">Global admins and Microsoft 365 Backup admins can turn the feature on and change the list; up to 20 recipients. Policy creation and modification require opting in to routine events; jobs configured with a 10-minute RPO are excluded.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Email notifications <a href="https://learn.microsoft.com/microsoft-365/backup/backup-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled -Recipients &lt;IMicrosoftGraphNotificationRecipients&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Viewing, filtering and exporting Microsoft 365 Backup activity logs</strong><br><small>Tenant</small><br><small class="controls__note">Read-only monitoring. Logs are kept for 365 days; the Graph call is beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Reports › Recent activities › View more <a href="https://learn.microsoft.com/microsoft-365/backup/backup-privacy-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/solutions/backupRestore/activityLogs</code> <a href="https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Assigning the role is the decisive control; the other rows let you see what role holders do. For delegated Microsoft Graph access using a work or school account, Privileged Role Administrator is the least privileged supported role. The role adds rights to its holders and leaves Global, SharePoint and Exchange Administrators with the Backup rights the setup page lists for them, so least privilege depends on removing those wider roles where they are no longer needed. Departmental billing (see the [departmental billing page](https://learn.microsoft.com/microsoft-365/backup/backup-billing)) further limits policy creation and editing to admins with Owner or Contributor on the connected Azure subscription. Activity logs are visible to Global Administrators and Microsoft 365 Backup Administrators for all three workloads, and are kept for 365 days.

## Open questions

- Does the Microsoft 365 Backup Administrator role cover granular file and folder restore, given that Microsoft's What's new entry for granular restore says the SharePoint Backup Admin role is required? Watch the Microsoft 365 Backup restore page.
- Can a Microsoft 365 Backup Administrator set up or change pay-as-you-go billing? Watch the Set up Microsoft 365 Backup page.
- When will the roadmap item move from In development to Launched, given that Learn already documents the role? Watch the roadmap item and Message center.
- Will the role be offered in clouds beyond Worldwide (Standard Multi-Tenant), which is the only cloud the roadmap item lists? Watch the roadmap item.

<!-- rationale
risk: Low. The role does nothing until an administrator assigns it; once assigned, its holders can create backup policies and restore backed-up SharePoint sites, OneDrive accounts and Exchange mailboxes.
cost: Low. Microsoft publishes no separate charge for the role; backups its holders create are billed on the Microsoft 365 Backup pay-as-you-go meter at a list price of $0.15/GiB/month of protected content.
impact: Low. Only administrators notice: the role changes who can manage backup and restore, not what end users see.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: narrower roles / role: SharePoint Backup Administrator is a narrower role for one workload. | Found: Assign the SharePoint Backup Administrator role to users who need to do the following tasks: 1. Manage all aspects of Microsoft 365 Backup for SharePoint and OneDrive | Fix: Replace 'Microsoft Learn also documents narrower SharePoint Backup Administrator and Exchange Backup Administrator roles for one workload each' with 'Microsoft Learn also documents narrower SharePoint Backup Administrator and Exchange Backup Administrator roles: the former covers SharePoint and OneDrive, and the latter covers Exchange Online.' The scopes are documented at https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference
-->
