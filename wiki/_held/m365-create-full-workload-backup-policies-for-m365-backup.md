---
title: "Microsoft 365 Backup: Full Workload Backup policies for SharePoint, OneDrive and Exchange"
slug: "m365-create-full-workload-backup-policies-for-m365-backup"
roadmapId: 464990
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft 365 Backup gains a one-policy option to protect a whole workload, including items created later. It is admin opt-in and billed as pay-as-you-go storage, so plan the spend and the exclusion list before enabling."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "July CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft 365 Backup is billed pay-as-you-go through an Azure subscription at a list price of $0.15/GiB/month of protected content. No separate Full Workload Backup charge appears on the pricing page."
audiences: ["m365-admin","service-owner","finops","security"]
tags: ["m365-backup","backup-and-recovery","sharepoint","onedrive","exchange","pay-as-you-go","m365-admin-center","resilience"]
sources:
  - title: "Create, view, and edit backup policies in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-pricing"
    kind: "learn"
  - title: "Set up Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Billing node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
  - title: "New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.backuprestore/new-mgbetasolutionbackuprestoresharepointprotectionpolicy?view=graph-powershell-beta"
    kind: "learn"
  - title: "sharePointProtectionPolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/sharepointprotectionpolicy?view=graph-rest-beta"
    kind: "learn"
  - title: "Create siteExclusionUnitsBulkAdditionJob"
    url: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta"
    kind: "learn"
  - title: "Update-MgSolutionBackupRestoreEmailNotificationSetting"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    kind: "learn"
  - title: "MC1387526: (Updated) Microsoft 365 Backup: Full workload backup for SharePoint, OneDrive, and Exchange"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1387526"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap 464990"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=464990"
    kind: "roadmap"
videos: []
related: ["m365-backup-activity-logs","m365-teams-channel-backup","entra-id-backup-and-recovery-30-day"]
controls:
  - governs: "Whether a workload is protected by a Full Workload Backup policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Microsoft 365 Backup > Back up sites > All sites"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api:
      kind: "powershell"
      call: "New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy -DisplayName '<policy-name>' -ProtectionMode fullServiceBackup"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.backuprestore/new-mgbetasolutionbackuprestoresharepointprotectionpolicy?view=graph-powershell-beta"
    note: "SharePoint example; same UI for OneDrive and Exchange; preview on Learn. Creates an inactive policy. SharePoint admins: SharePoint and OneDrive; Exchange admins: Exchange; Global and Backup admins: all three."
  - governs: "Which sites, accounts or mailboxes are excluded from Full Workload Backup"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Microsoft 365 Backup > Backup policies > Full Workload Backup policy > View details > Excluded > Exclude more > Upload a CSV file containing the protection units to exclude"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}/siteExclusionUnitsBulkAdditionJobs"
      docs: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta"
    note: "Learn: up to 10,000 protection units per exclusion operation. The Graph call is beta and covers SharePoint sites; the request body sets displayName and siteWebUrls; permission BackupRestore-Configuration.ReadWrite.All."
  - governs: "Who is told when backup policies change"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Microsoft 365 Backup > Email notifications"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    api:
      kind: "powershell"
      call: "Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled -AdditionalEvents restoreAndPolicyUpdates -Recipients @{Role='custom'; CustomRecipients=@(@{Email='<recipient-email>'})}"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    note: "General Microsoft 365 Backup control; creating or modifying backup policies is a routine event that needs opt-in. Global admins and Microsoft 365 Backup admins can turn it on."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-18"
    note: "New briefing: Full Workload Backup for SharePoint, OneDrive and Exchange in Microsoft 365 Backup, with cost, exclusion list and controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 12 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: added the permanent-deletion exception, budget behaviour, per-role access, routine notifications, mailbox support, scale limits and documented Graph and PowerShell calls; removed two unsupported items; risk set to low."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 96 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: exclusion path now includes the CSV upload step, the notification call now shows the -AdditionalEvents and -Recipients parameters, and the unsupported end-user claim is removed from the impact rationale."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 96 statements confirmed"
  - date: "2026-11-19"
    note: "General availability target moved to January CY2027 (previously September CY2026) per the updated MC1387526; rollout now runs to the end of February 2027."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 99 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-19"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 99
  confirmed: 95
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "b715768591e4c4b078d634353afde550"
---

## What's changing

Full Workload Backup lets an administrator protect a whole workload (SharePoint, OneDrive or Exchange) in Microsoft 365 Backup with one policy, instead of selecting sites, accounts or mailboxes. Microsoft Learn describes it as automatic protection for eligible SharePoint sites, OneDrive accounts or Exchange mailboxes that are not in a custom policy, on the exclusion list, or in the process of being permanently deleted from Microsoft 365 Backup. Microsoft's notice MC1387526 adds that newly created items are included on later runs.

It behaves as follows on Microsoft Learn. It can be enabled independently for each workload. Custom backup policies take precedence: an item in a custom policy, active or paused, is not protected by the Full Workload Backup policy, and adding a protected item to a custom policy moves it with no gap in recovery point coverage. Microsoft 365 Backup checks for newly created sites, accounts and mailboxes every 24 hours. An exclusion list, filled by uploading a CSV file, keeps named items out of the policy.

The roadmap item lists status In development, a preview target of July CY2026 and a general availability target of January CY2027, for Worldwide (Standard Multi-Tenant) on the web. MC1387526 (published 2026-06-11, last updated 2026-11-18) gives a Worldwide public preview rollout from early July to mid-July 2026. It moves general availability to begin in January 2027 (previously mid-September 2026) and to complete by the end of February 2027 (previously mid-October 2026). It sets no act-by date. At the time of writing (November 2026) the Learn page still marks the feature as in preview.

## Why it matters

This turns a backup list that administrators maintain into a standing rule for a workload. For a service owner it changes two things: which content is held in backup without anyone choosing it, and the monthly Azure charge, which Microsoft's pricing page bases on the size of protected content. A whole-workload policy puts that charge on the full size of the workload, less the exclusions and items in custom policies.

Microsoft's notice says the feature is available by default but needs admin configuration to enable, so nothing is protected by it until an administrator creates the policy. Microsoft asks for no action before rollout; it recommends reviewing current policies and coverage afterwards. Decide the exclusion list and the budget before the first policy is created, because newly created items join automatically after that.

## Risk assessment

**Data exposure**
- Items nobody selected are protected once a workload policy exists: every eligible item that is not in a custom policy, on the exclusion list, or in the process of being permanently deleted from Microsoft 365 Backup. Use the exclusion list for content that should not be backed up. Existing backups of an excluded or removed item stay available for its retention period.

**Security & identity**
- Microsoft Learn says only tenant-level admins can create and manage backups, and the admin role decides which workloads they can manage; the Microsoft 365 Backup Administrator role can control the entire tool. Anyone in those roles can create a policy that changes coverage and spend for a whole workload.
- Microsoft 365 Backup email notifications list removing protection units from backup policies as a potentially harmful event, and creating or modifying backup policies as a routine event that needs opt-in. The setup page does not say whether exclusion-list edits or turning off Full Workload Backup send a notification.

**Autonomy & actions**
- After enabling, the service adds newly created items on its 24-hour check without an administrator selecting them. Removing an item from the Full Workload Backup policy adds it to the exclusion list, so no new backups are taken for it.
- Turning the policy off removes it: items protected only by it move to the Removed items tab and no new backups are taken until they join a custom policy or the policy is re-enabled.

**Change & support**
- Learn marks the feature as preview, so limits and behaviour may change, and the general availability rollout has moved to January 2027. Backup administrators need to know that a custom policy wins over the workload policy, and that adding an item to a custom policy moves it out of the workload policy.

## Cost and licensing

Microsoft's pricing page describes Microsoft 365 Backup as a pay-as-you-go consumption-based service with a list price of $0.15/GiB/month of protected content. The charge is based on the size of protected content once it is added to backup protection, including the second-stage recycle bin for SharePoint sites and OneDrive accounts, and online archives and deleted and versioned items for mailboxes. The setup page says the first step is to link an Azure subscription for pay-as-you-go billing.

The pricing page names no separate meter for Full Workload Backup and no Microsoft 365 licence for the service. Treat the whole workload's size as the exposure: the pricing calculator that page links to can estimate it from usage reports or PowerShell. The pay-as-you-go billing page says budgets are set at billing-policy level and that reaching 100% of a budget does not stop the service or billing; it says the only way to stop billing is to disconnect the payment method.

The pricing page also states that, if you use a partner (ISV) solution built on the Microsoft 365 Backup Storage platform, you are charged solely by that partner for their application.

## Scope

The feature covers SharePoint sites, OneDrive accounts and Exchange mailboxes, each enabled separately. The roadmap item lists Worldwide (Standard Multi-Tenant) only, the web platform and release phases General Availability and Preview; Microsoft's notice gives a Worldwide rollout window.

Administrators need the relevant role: Learn says the admin role determines which products can be managed, with a dedicated Microsoft 365 Backup Administrator role for the whole tool. Pay-as-you-go billing linked to an Azure subscription is a setup step for the service.

The Exchange creation steps on Learn say user and shared mailboxes can be selected and that room and group mailboxes are not supported at this time. The SharePoint steps note that some legacy SharePoint site templates are not supported. Learn gives a limit of 100 policies per product and up to 100,000 items per backup policy.

## Governance guidance

### Before rollout
- Estimate protected size per workload with the Microsoft 365 Backup pricing calculator and usage reports, and agree the budget with finance.
- List the sites, accounts or mailboxes that should stay out of backup and prepare the CSV file for the exclusion list.
- Turn on Microsoft 365 Backup email notifications, add the second administrator to the Backup Notification List, and select the checkbox to receive routine events, including policy creation and modification. Jobs configured with a 10-minute RPO are excluded; notification events trigger when the overall policy completes.

### At rollout
- Enable Full Workload Backup for one workload first, using the path in the controls table.
- Upload the exclusion CSV at the Exclude sites step, where Microsoft's notice and Learn say it is optional, and review the coverage summary before confirming.
- Confirm which existing custom policies take precedence, so the new policy covers only the remainder.

### After rollout
- Open the Full Workload Backup policy details and check the Excluded tab against your exclusion list.
- Compare the first Azure charges with the calculator estimate for that workload.
- Tell backup administrators how removal works: when removing an item from a custom policy, they choose between adding it to the exclusion list and moving it to Full Workload Backup.
- Update backup procedure documents, as Microsoft's notice recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a workload is protected by a Full Workload Backup policy</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint example; same UI for OneDrive and Exchange; preview on Learn. Creates an inactive policy. SharePoint admins: SharePoint and OneDrive; Exchange admins: Exchange; Global and Backup admins: all three.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Back up sites › All sites <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy -DisplayName '&lt;policy-name&gt;' -ProtectionMode fullServiceBackup</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.beta.backuprestore/new-mgbetasolutionbackuprestoresharepointprotectionpolicy?view=graph-powershell-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sites, accounts or mailboxes are excluded from Full Workload Backup</strong><br><small>Tenant</small><br><small class="controls__note">Learn: up to 10,000 protection units per exclusion operation. The Graph call is beta and covers SharePoint sites; the request body sets displayName and siteWebUrls; permission BackupRestore-Configuration.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Backup policies › Full Workload Backup policy › View details › Excluded › Exclude more › Upload a CSV file containing the protection units to exclude <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}/siteExclusionUnitsBulkAdditionJobs</code> <a href="https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who is told when backup policies change</strong><br><small>Tenant</small><br><small class="controls__note">General Microsoft 365 Backup control; creating or modifying backup policies is a routine event that needs opt-in. Global admins and Microsoft 365 Backup admins can turn it on.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Email notifications <a href="https://learn.microsoft.com/microsoft-365/backup/backup-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled -AdditionalEvents restoreAndPolicyUpdates -Recipients @{Role='custom'; CustomRecipients=@(@{Email='&lt;recipient-email&gt;'})}</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The enable and exclusion paths are the SharePoint walkthrough on Learn; Learn says the experience is the same for SharePoint, OneDrive and Exchange. Turning the policy off is done from Backup policies by selecting the Full Workload Backup policy and choosing Turn off Full Workload Backup.

On roles, SharePoint Administrators manage SharePoint and OneDrive; Exchange Administrators manage Exchange. Global Administrators and Microsoft 365 Backup Administrators manage all three. An Exchange Administrator cannot use the SharePoint example.

The Microsoft.Graph.Beta.BackupRestore module documents New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy with a -ProtectionMode parameter; the Graph resource defines fullServiceBackup as the entire-workload mode. It creates an inactive SharePoint policy, not an activated one. The exclusion call in the second row applies to SharePoint sites.

The email notification control is general to Microsoft 365 Backup: Global admins and Microsoft 365 Backup admins can turn it on and update the list. Microsoft documents creating or modifying backup policies as routine notification events. Routine notifications require opt-in; jobs configured with a 10-minute RPO are excluded, and events trigger on overall policy completion.

## Open questions

- Are there additional eligibility restrictions specific to Full Workload Backup beyond Microsoft 365 Backup's documented supported mailbox and site types?
- Where is the Exchange entry point in the admin centre? The Exchange creation steps on Learn do not list a back-up-all option.
- Does Microsoft 365 Backup send an email notification when Full Workload Backup is turned off or its exclusion list is edited? Watch the email notifications section of the setup page.
- Will general availability start in January 2027 as the updated MC1387526 states? Watch Message center and the roadmap item.

<!-- rationale
risk: Low. Microsoft's notice says the feature needs admin configuration to enable, and existing custom backup policies stay unchanged and take precedence, so nothing is protected by it until an administrator creates the policy.
cost: Variable. Microsoft 365 Backup is pay-as-you-go at a list price of $0.15/GiB/month of protected content, so enabling a whole workload sets the bill by that workload's size.
impact: Low. Backup administrators notice it; the notice names admins managing Microsoft 365 Backup policies as the affected group.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The full admin-center route to the SharePoint control is Microsoft 365 Backup > Back up sites > All sites. | Found: 1. Go to the Microsoft 365 admin center. 2. Select Settings. 3. Select Microsoft 365 Backup from the list of products. | Fix: Replace the path in front matter and the rendered table with 'Settings > Microsoft 365 Backup > Back up sites > All sites'. The cited page documents Settings before Microsoft 365 Backup and documents Back up sites > All sites under Enable Full Workload Backup. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, blocker] controls[0].api; Governance controls table / command: The printed New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy call performs the row's control of enabling workload protection. | Found: Create a protection policy for a M365 service SharePoint. Policy will be created in inactive state. | Fix: Narrow controls[0].governs and the matching rendered row heading to 'Creation of a Full Workload Backup policy'. Keep the existing note that the command creates an inactive policy, not an activated one. This makes the control match the documented operation without presenting policy creation as enabling protection. | Source: https://learn.microsoft.com/powershell/module/microsoft.graph.beta.backuprestore/new-mgbetasolutionbackuprestoresharepointprotectionpolicy?view=graph-powershell-beta
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The full exclusion route starts Microsoft 365 Backup > Backup policies > Full Workload Backup policy > View details > Excluded > Exclude more > Upload a CSV file containing the protection units to exclude. | Found: Select Settings. ... Select Microsoft 365 Backup from the list of products. ... Open the Excluded tab. ... Select Exclude more. ... Upload a CSV file containing the protection units that you want to exclude. | Fix: Replace the front-matter and rendered-table path with 'Settings > Microsoft 365 Backup > Backup policies > Full Workload Backup policy > View details > Excluded > Exclude more > Upload a CSV file containing the protection units to exclude'. The CSV instruction is supported despite the pre-check's wording mismatch; the missing Settings selection is the fault. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: The full admin-center notification route is Microsoft 365 Backup > Email notifications. | Found: Select Settings. ... Select Microsoft 365 Backup from the list of products. ... Go to the Email notifications option on the Microsoft 365 Backup home page. | Fix: Replace the front-matter and rendered-table path with 'Settings > Microsoft 365 Backup > Email notifications', as documented by the setup page. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].api; Governance controls table / command: The printed Update-MgSolutionBackupRestoreEmailNotificationSetting call enables notifications, opts into policy updates and sets a custom recipient. | Found: [-AdditionalEvents <string>] ... [-IsEnabled] ... [-Recipients <IMicrosoftGraphNotificationRecipients>] ... [CustomRecipients <IMicrosoftGraphEmailIdentity[]>] ... [Email <String>] ... [Role <String>] | Fix: Add https://learn.microsoft.com/graph/api/resources/emailnotificationssetting?view=graph-rest-1.0 to sources. It documents additionalEvents=restoreAndPolicyUpdates, the literal used by the command; the cited cmdlet page names notificationEventsType but does not enumerate its values. | Source: https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0
-->
