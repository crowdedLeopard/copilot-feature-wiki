---
kind: "concept"
title: "Microsoft 365 Backup: what is protected, for how long, and what it costs"
slug: "backup-and-recovery"
summary: "Microsoft 365 Backup keeps point-in-time copies of SharePoint, OneDrive and Exchange data under admin-set policies, billed per GiB of protected content. Administrators use it to decide what can be rolled back, how far back, and who may delete backups."
created: "2026-11-27"
updated: "2026-11-27"
version: 1
tags: ["backup-and-recovery","sharepoint","onedrive","exchange","pay-as-you-go","ransomware","m365-admin-center","cost-management","entra-id"]
covers: []
sources:
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-overview"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-pricing"
    kind: "learn"
  - title: "Set up Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    kind: "learn"
  - title: "Create, view, and edit backup policies in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    kind: "learn"
  - title: "Restore data in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-restore-data"
    kind: "learn"
  - title: "Offboarding in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-offboarding"
    kind: "learn"
  - title: "Privacy, security, and compliance in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-privacy-security"
    kind: "learn"
  - title: "What's new in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-whats-new"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Billing node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
  - title: "Create sharePointProtectionPolicy"
    url: "https://learn.microsoft.com/graph/api/backuprestoreroot-post-sharepointprotectionpolicies?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update sharePointProtectionPolicy"
    url: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update-MgSolutionBackupRestoreEmailNotificationSetting"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
related: ["m365-long-term-retention-period-for-m365-backup","m365-create-full-workload-backup-policies-for-m365-backup","m365-dedicated-backup-administrator-role-for-m365-backup","entra-id-backup-and-recovery-30-day","m365-backup-activity-logs","retention","auditing","copilot-credits"]
controls:
  - governs: "Who can run Microsoft 365 Backup for SharePoint, OneDrive and Exchange (Microsoft 365 Backup Administrator role)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Requires at least Privileged Role Administrator."
  - governs: "Which Azure subscription pays for Microsoft 365 Backup (pay-as-you-go billing policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > Add a billing policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "Customers onboarded before April 1, 2026 may still bill through Setup > Billing and licenses > Activate pay-as-you-go services."
  - governs: "Spending budget and alert thresholds on the billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > policy > Budget > Settings > Set a budget for this policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "Alerts only: reaching 100% does not stop the service or billing."
  - governs: "Which SharePoint sites a backup policy protects"
    scope: "site"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > SharePoint > Set up policy"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api:
      kind: "graph"
      call: "POST /v1.0/solutions/backupRestore/sharePointProtectionPolicies"
      docs: "https://learn.microsoft.com/graph/api/backuprestoreroot-post-sharepointprotectionpolicies?view=graph-rest-1.0"
    note: "A policy created through Graph starts inactive. Each site can be in one policy only."
  - governs: "Recovery window (how long recovery points are kept) on a SharePoint backup policy"
    scope: "site"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Backup policies > policy > View details > Recovery window"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api:
      kind: "graph"
      call: "PATCH /v1.0/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}"
      docs: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-update?view=graph-rest-1.0"
    note: "The request body sets retentionSettings. Only on an active policy with no run in progress."
  - governs: "Full Workload Backup policy that protects all sites not in another policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Back up sites > All sites"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api: null
    note: "Preview. Path shown for SharePoint; OneDrive and Exchange use the same set-up."
  - governs: "Who is emailed about harmful and routine Microsoft 365 Backup events"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Email notifications"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    api:
      kind: "powershell"
      call: "Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled -Recipients <IMicrosoftGraphNotificationRecipients>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    note: "Global admins and Microsoft 365 Backup admins can turn it on. Up to 20 individual recipients, plus distribution lists and security groups."
confidence: "high"
dependents: 7
changes:
  - date: "2026-11-27"
    note: "New concept page explaining Microsoft 365 Backup policies, recovery windows, the pay-as-you-go storage meter and its controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 105 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 105
  confirmed: 101
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "ad91fcd808531cf5d5329a450057c837"
---

## What it is

Microsoft 365 Backup is a Microsoft service that keeps point-in-time copies of SharePoint sites, OneDrive accounts and Exchange Online mailboxes, so that an administrator can roll them back after accidental deletion, a malicious overwrite or ransomware. It runs from the Microsoft 365 admin center and is paid for by consumption rather than per user.

### How it works

- **Backup policies.** An administrator creates a policy per product listing the *protection units* to back up: sites, OneDrive accounts or mailboxes. A unit can belong to one policy only. A **Full Workload Backup** policy (preview) protects every eligible unit of a workload that no custom policy holds, with an exclusion list; custom policies take precedence over it.
- **Recovery window.** Set per policy, it decides how long recovery points are kept: 3 months, 6 months or 1 to 10 whole years for SharePoint and OneDrive, and 3 months, 6 months, 1 year or 2 years for Exchange. Existing policies default to 1 year. Backup frequency cannot be changed.
- **Restore points.** Full site and account restores have points every 10 minutes for the last 14 days and weekly beyond that; Exchange has 10-minute points throughout. A restore goes to the original location, replacing what is there, or to a new one.
- **Storage.** Backups stay inside the Microsoft 365 data trust boundary in append-only storage, and are deleted only when an administrator offboards them. Purview retention and deletion policies do not affect the recovery window; see [Microsoft Purview retention](/concepts/retention/).

**Microsoft Entra Backup and Recovery** applies the same idea to directory objects. Its Premium plan, in public preview and enabled through Microsoft 365 Backup, keeps 30 days of daily backups in a single tenant-wide policy; the Standard plan included with Microsoft Entra ID P1 or P2 keeps seven days. Backup features in other products that share this tag, such as account backup in Microsoft Authenticator, are separate features and are not explained here.

## Why it matters

Microsoft 365 Backup lets an organisation decide which sites, accounts and mailboxes can be rolled back after an incident, how far back, and who may delete the backups. Nothing is protected until a policy exists and is active: a policy created through Microsoft Graph starts inactive, and a paused policy takes no further backups.

The recovery window is also the cost lever. Deleted and versioned content stays billable until it ages out of the window, so a ten-year window on a high-churn site keeps paying for that churn for ten years. Because the backups sit outside Purview retention, a Purview deletion policy does not shorten them; offboarding does.

## Cost and licensing

- **Meter.** Microsoft 365 Backup is a pay-as-you-go consumption service at a list price of $0.15 per GiB per month of protected content. Restores are free.
- **What is counted.** The live size of each protected site or OneDrive account, including the first-stage recycle bin; deleted content in the second-stage recycle bin; each mailbox with its online archive; and deleted and versioned mailbox items. Restore point frequency does not materially change the cost. Expired content stops being counted.
- **Where it is charged.** To an Azure subscription through a pay-as-you-go billing policy, with no additional Azure API or storage charges. Several billing policies can split the charge across subscriptions.
- **Microsoft Entra Backup and Recovery Premium (preview)** is $0.025 USD per protected Microsoft Entra object per month.
- **Partner applications** built on Microsoft 365 Backup Storage are billed by the partner alone.

For how pay-as-you-go billing works across Microsoft 365, see [Copilot Credits](/concepts/copilot-credits/).

## Risks and limits

- **A budget is not a cap.** Reaching 100% of a pay-as-you-go budget does not stop the service or billing; the only way to stop billing is to disconnect the payment method.
- **Billing failure starts offboarding.** Offboarding grace periods start on an unhealthy billing state as well as on an explicit request, so a lapsed Azure subscription puts backups on the path to deletion.
- **Offboarding deletes backups.** Backups are immutable except through offboarding. A 90-day grace period allows recovery; shortening it to seven days needs two approvers under Backup critical action approval. Once purged, an item cannot be restored.
- **Lengthening the window does not reach back.** Increasing the recovery window does not create older recovery points or bring back expired ones.
- **Window changes need an active policy.** The recovery window cannot be changed on a paused policy or one with a run in progress.
- **Scale limits.** Up to 100 policies and 1,000,000 items per workload, and 100,000 items per policy.
- **In-place restore overwrites.** A full site or account restore rolls back all content and metadata since the chosen point.
- **Entra Premium history builds up.** Turning Premium on does not give 30 days of history at once, and stopping it leaves existing backups billed until they expire.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run Microsoft 365 Backup for SharePoint, OneDrive and Exchange (Microsoft 365 Backup Administrator role)</strong><br><small>Tenant</small><br><small class="controls__note">Requires at least Privileged Role Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Azure subscription pays for Microsoft 365 Backup (pay-as-you-go billing policy)</strong><br><small>Tenant</small><br><small class="controls__note">Customers onboarded before April 1, 2026 may still bill through Setup &gt; Billing and licenses &gt; Activate pay-as-you-go services.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending budget and alert thresholds on the billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Alerts only: reaching 100% does not stop the service or billing.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › policy › Budget › Settings › Set a budget for this policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites a backup policy protects</strong><br><small>Site</small><br><small class="controls__note">A policy created through Graph starts inactive. Each site can be in one policy only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › SharePoint › Set up policy <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/solutions/backupRestore/sharePointProtectionPolicies</code> <a href="https://learn.microsoft.com/graph/api/backuprestoreroot-post-sharepointprotectionpolicies?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Recovery window (how long recovery points are kept) on a SharePoint backup policy</strong><br><small>Site</small><br><small class="controls__note">The request body sets retentionSettings. Only on an active policy with no run in progress.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Backup policies › policy › View details › Recovery window <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}</code> <a href="https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Full Workload Backup policy that protects all sites not in another policy</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Path shown for SharePoint; OneDrive and Exchange use the same set-up.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Back up sites › All sites <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who is emailed about harmful and routine Microsoft 365 Backup events</strong><br><small>Tenant</small><br><small class="controls__note">Global admins and Microsoft 365 Backup admins can turn it on. Up to 20 individual recipients, plus distribution lists and security groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Email notifications <a href="https://learn.microsoft.com/microsoft-365/backup/backup-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled -Recipients &lt;IMicrosoftGraphNotificationRecipients&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- **Roles.** Global Administrator covers OneDrive, SharePoint, Exchange and Entra. SharePoint Administrator covers SharePoint and OneDrive, Exchange Administrator covers Exchange, Microsoft Entra Backup Administrator covers Entra, and Microsoft 365 Backup Administrator covers SharePoint, OneDrive and Exchange. Setting up the service needs SharePoint Administrator or Global Administrator, plus Owner or Contributor on the Azure subscription. End users cannot enable backup or restore for themselves.
- **Policies per product.** The Graph rows show SharePoint; OneDrive and Exchange have their own protection policy types in the same API.
- **Watching it.** Activity logs, opened from the **Reports** tab of the Microsoft 365 Backup page through **Recent activities > View more**, record policy changes, offboarding and restores (not read-only operations) for 365 days and export to CSV. For the compliance record use Microsoft Purview Audit; see [Microsoft Purview Audit](/concepts/auditing/).
- **Approvals.** Backup critical action approval sits under **Settings > Backup critical action approval** on the Microsoft 365 Backup page, and gates only the shortened deletion grace period.

## What to check

- Review who holds Microsoft 365 Backup Administrator, SharePoint Administrator and Exchange Administrator, since each can change backup policies.
- Confirm the billing policy linked to Microsoft 365 Backup points at a live Azure subscription.
- Set a budget and alert thresholds on that billing policy, knowing they do not stop charges.
- List backup policies per workload and check that none you rely on is paused.
- Check each policy's recovery window against how far back you need to roll back, and what it costs.
- Decide whether Full Workload Backup, still in preview, should catch new sites, accounts and mailboxes.
- Turn on email notifications and add more than one recipient.

## Open questions

- Which value of -ProtectionMode on the beta policy cmdlets creates a Full Workload Backup policy?
- Is there a Graph or PowerShell operation for the pay-as-you-go billing policies and budgets that Microsoft 365 Backup uses?
- What are the offboarding grace periods for each trigger, which Microsoft publishes only as an image?

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[5].api; Open questions, ProtectionMode / absence: Full Workload Backup automation and the beta policy cmdlet's required ProtectionMode value are not documented. | Found: When set to fullServiceBackup, the entire workload is backed up and specific sites can be excluded using exclusion units. | Fix: Replace controls[5].api with kind 'powershell', call 'New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy -ProtectionMode fullServiceBackup', and docs 'https://learn.microsoft.com/powershell/module/microsoft.graph.beta.backuprestore/new-mgbetasolutionbackuprestoresharepointprotectionpolicy?view=graph-powershell-beta'. The cmdlet reference lists -ProtectionMode, and https://learn.microsoft.com/graph/api/resources/sharepointprotectionpolicy?view=graph-rest-beta defines its value. Note that this is beta automation, subject to change and not supported for production use. Remove the first Open questions bullet and cite both references. | Source: https://learn.microsoft.com/graph/api/resources/sharepointprotectionpolicy?view=graph-rest-beta
- [contradicted, blocker] controls[6].note / behaviour: Distribution lists and security groups can receive notifications without a mail-enablement qualification. | Found: Add users, distribution lists, or security groups (only email enabled) to the Backup Notification List. | Fix: In controls[6].note and the rendered row, change 'plus distribution lists and security groups' to 'and can include distribution lists and mail-enabled security groups'. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
- [contradicted, blocker] What it is, Storage; Why it matters; Risks and limits, immutability / behaviour: Backups are deleted only when an administrator offboards them. | Found: Decreasing the recovery window is a destructive action, because recovery points older than the new window are deleted. ... the deletion takes effect only after a 30-day grace period | Fix: Replace the Storage sentence with 'Backups stay inside the Microsoft 365 data trust boundary in append-only storage; recovery points expire under the recovery window, and offboarding can also delete backups.' Replace 'Backups are immutable except through offboarding' with 'Append-only storage prevents backup overwrites; decreasing a recovery window can delete older recovery points after a 30-day grace period.' In Why it matters, change 'offboarding does' to 'the backup recovery window and offboarding govern their lifetime'. The policy page documents window reductions, including moving an artifact to a shorter-window policy; the offboarding page also documents billing-triggered offboarding. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / command: POST /v1.0/roleManagement/directory/roleAssignments assigns the Backup Administrator role. | Found: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments | Fix: Keep the call; append to the row note: 'The request body sets roleDefinitionId to the role definition, principalId to the assignee, and directoryScopeId to / for tenant scope.' The cited assignment page documents these properties. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal
- [supported, minor] controls[3].ui / admin-path: Settings > Microsoft 365 Backup > SharePoint > Set up policy is the route to choosing protected SharePoint sites. | Found: in the SharePoint section, select Set up policy. ... On the Choose selection method page ... Under Select sites individually, you can search and select sites | Fix: The path stops at the policy wizard entrance. For individual selection, extend it to 'Settings > Microsoft 365 Backup > SharePoint > Set up policy > Overview > Choose selection method > Select sites individually', as documented on the cited page. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [supported, minor] controls[3].api / command: POST /v1.0/solutions/backupRestore/sharePointProtectionPolicies creates a policy with the selected sites. | Found: siteProtectionUnits ... Collection of the siteProtectionUnits to be added to the sharePointProtectionPolicy object. Required. | Fix: Keep the call and append to the note: 'The request body sets siteProtectionUnits, with siteId identifying each selected site.' The cited reference documents that collection and shows siteId in the request. | Source: https://learn.microsoft.com/graph/api/backuprestoreroot-post-sharepointprotectionpolicies?view=graph-rest-1.0
- [supported, minor] What it is, Restore points / behaviour: Exchange recovery points have ten-minute frequency throughout its recovery window. | Found: Exchange Online | 10 minutes | 10 minutes | Fix: Replace 'Exchange has 10-minute points throughout' with 'The restore documentation gives Exchange 10-minute points both within and beyond 14 days; the overview table instead describes 10-minute points for the prior 52 weeks.' Both https://learn.microsoft.com/microsoft-365/backup/backup-restore-data and https://learn.microsoft.com/microsoft-365/backup/backup-overview are already cited. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-restore-data
- [supported, minor] What it is, Authenticator sentence; Governance controls, Policies per product / behaviour: Microsoft Authenticator account backup is a separate backup feature. | Found: To back up your Authenticator account entries on an Android device: ... Open Microsoft Authenticator. ... Turn on Cloud Backup. ... Select a Microsoft personal account where the backup will be stored. | Fix: Add the uncited supporting pages to sources: https://learn.microsoft.com/entra/identity/authentication/how-to-transfer-authenticator-new-phone for the Authenticator statement, and https://learn.microsoft.com/graph/api/resources/backuprestoreroot?view=graph-rest-1.0 for the separate OneDrive and Exchange API policy types. This groups the missing citations for otherwise supported statements. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-transfer-authenticator-new-phone
- [contradicted, minor] What to check, paused policies / consistency: The checklist's instruction to check whether policies are paused has no corresponding pause/status control row. | Found: List backup policies per workload and check that none you rely on is paused. ... controls[3]: Which SharePoint sites a backup policy protects | Fix: The checklist's paused-policy status check has no matching control row; the existing rows cover policy scope and recovery window, not pause/status. Remove 'and check that none you rely on is paused' from that bullet rather than adding a new row during correction.
-->
