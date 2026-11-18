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
targetDate: "September CY2026"
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
  - title: "Microsoft 365 Roadmap 464990"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=464990"
    kind: "roadmap"
  - title: "MC1387526: Microsoft 365 Backup: Full workload backup for SharePoint, OneDrive, and Exchange"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1387526"
    kind: "message-center"
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
  - title: "Frequently asked questions about Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-faq"
    kind: "learn"
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-overview"
    kind: "learn"
  - title: "New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.backuprestore/new-mgbetasolutionbackuprestoresharepointprotectionpolicy?view=graph-powershell-beta"
    kind: "learn"
  - title: "sharePointProtectionPolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/sharepointprotectionpolicy?view=graph-rest-beta"
    kind: "learn"
  - title: "Create sharePointProtectionPolicy"
    url: "https://learn.microsoft.com/graph/api/backuprestoreroot-post-sharepointprotectionpolicies?view=graph-rest-beta"
    kind: "learn"
  - title: "Create siteExclusionUnitsBulkAdditionJob"
    url: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta"
    kind: "learn"
  - title: "Create driveExclusionUnitsBulkAdditionJob"
    url: "https://learn.microsoft.com/graph/api/onedriveforbusinessprotectionpolicy-post-driveexclusionunitsbulkadditionjobs?view=graph-rest-beta"
    kind: "learn"
  - title: "Create mailboxExclusionUnitsBulkAdditionJob"
    url: "https://learn.microsoft.com/graph/api/exchangeprotectionpolicy-post-mailboxexclusionunitsbulkadditionjobs?view=graph-rest-beta"
    kind: "learn"
  - title: "Update-MgSolutionBackupRestoreEmailNotificationSetting"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    kind: "learn"
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
      path: "Microsoft 365 Backup > Backup policies > Full Workload Backup policy > View details > Excluded > Exclude more > Save"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}/siteExclusionUnitsBulkAdditionJobs with displayName and siteWebUrls"
      docs: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta"
    note: "Learn: up to 10,000 protection units per exclusion operation. The Graph call is beta and covers SharePoint sites; permission BackupRestore-Configuration.ReadWrite.All."
  - governs: "Who is told when backup policies change"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Microsoft 365 Backup > Email notifications"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    api:
      kind: "powershell"
      call: "Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0"
    note: "General Microsoft 365 Backup control; creating or modifying backup policies is a routine event that needs opt-in. Global admins and Microsoft 365 Backup admins can turn it on."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-07-08T23:11:07"
changes:
  - date: "2026-11-18"
    note: "New briefing: Full Workload Backup for SharePoint, OneDrive and Exchange in Microsoft 365 Backup, with cost, exclusion list and controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 12 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: added the permanent-deletion exception, budget behaviour, per-role access, routine notifications, mailbox support, scale limits and documented Graph and PowerShell calls; removed two unsupported items; risk set to low."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 96 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 96
  confirmed: 93
  unconfirmed: 1
  contradicted: 2
  attempts: 2
  hash: "5414608a1c023360c08d92c2345e3576"
---

## What's changing

Full Workload Backup lets an administrator protect a whole workload (SharePoint, OneDrive or Exchange) in Microsoft 365 Backup with one policy, instead of selecting sites, accounts or mailboxes. Microsoft Learn describes it as automatic protection for eligible SharePoint sites, OneDrive accounts or Exchange mailboxes that are not in a custom policy, on the exclusion list, or in the process of being permanently deleted from Microsoft 365 Backup. Microsoft's notice MC1387526 adds that newly created items are included on later runs.

It behaves as follows on Microsoft Learn. It can be enabled independently for each workload. Custom backup policies take precedence: an item in a custom policy, active or paused, is not protected by the Full Workload Backup policy, and adding a protected item to a custom policy moves it with no gap in recovery point coverage. Microsoft 365 Backup checks for newly created sites, accounts and mailboxes every 24 hours. An exclusion list, filled by uploading a CSV file, keeps named items out of the policy.

The roadmap item lists status In development, a preview target of July CY2026 and a general availability target of September CY2026, for Worldwide (Standard Multi-Tenant) on the web. MC1387526 (published 2026-06-11, last updated 2026-10-12) gives a Worldwide public preview rollout from early July to mid-July 2026 and general availability from mid-September to mid-October 2026, with no act-by date. At the time of writing (November 2026) the Learn page still marks the feature as in preview.

## Why it matters

This turns a backup list that administrators maintain into a standing rule for a workload. For a service owner it changes two things: which content is held in backup without anyone choosing it, and the monthly Azure charge, which Microsoft's pricing page bases on the size of protected content. A whole-workload policy puts that charge on the full size of the workload, less the exclusions and items in custom policies.

Microsoft's notice says the feature is available by default but needs admin configuration to enable, so nothing is protected by it until an administrator creates the policy. Microsoft asks for no action before rollout; it recommends reviewing current policies and coverage afterwards. Decide the exclusion list and the budget before the first policy is created, because newly created items join automatically after that.

## Risk assessment

**Data exposure**
- Items nobody selected are protected once a workload policy exists: every eligible item that is not in a custom policy, on the exclusion list, or in the process of being permanently deleted from Microsoft 365 Backup. Use the exclusion list for content that should not be backed up. Existing backups of an excluded or removed item stay available for its retention period.

**Security & identity**
- Microsoft Learn says only tenant-level admins can create and manage backups, and the admin role decides which workloads they can manage; the Microsoft 365 Backup Administrator role can control the entire tool. Anyone in those roles can create a policy that changes coverage and spend for a whole workload.
- Microsoft 365 Backup email notifications list removing protection units from backup policies as a potentially harmful event, and creating or modifying backup policies as a routine event that needs opt-in. Whether exclusion-list edits or turning off Full Workload Backup send a notification is not stated.

**Autonomy & actions**
- After enabling, the service adds newly created items on its 24-hour check without an administrator selecting them. Removing an item from the Full Workload Backup policy adds it to the exclusion list, so no new backups are taken for it.
- Turning the policy off removes it: items protected only by it move to the Removed items tab and no new backups are taken until they join a custom policy or the policy is re-enabled.

**Change & support**
- Learn marks the feature as preview, so limits and behaviour may change. Backup administrators need to know that a custom policy wins over the workload policy, and that adding an item to a custom policy moves it out of the workload policy.

## Cost and licensing

Microsoft's pricing page describes Microsoft 365 Backup as a pay-as-you-go consumption-based service with a list price of $0.15/GiB/month of protected content. The charge is based on the size of protected content once it is added to backup protection, including the second-stage recycle bin for SharePoint sites and OneDrive accounts, and online archives and deleted and versioned items for mailboxes. The setup page says the first step is to link an Azure subscription for pay-as-you-go billing.

The pricing page names no separate meter for Full Workload Backup and no Microsoft 365 licence for the service. Treat the whole workload's size as the exposure: the pricing calculator that page links to can estimate it from usage reports or PowerShell. The setup page says the newer billing experience offers budget alerts. Reaching 100% of a billing-policy budget does not stop the service or billing.

The pricing page also states that, if you use a partner (ISV) solution built on the Microsoft 365 Backup Storage platform, you are charged solely by that partner for their application.

## Scope

The feature covers SharePoint sites, OneDrive accounts and Exchange mailboxes, each enabled separately. The roadmap item lists Worldwide (Standard Multi-Tenant) only, the web platform and release phases General Availability and Preview; Microsoft's notice gives a Worldwide rollout window.

Administrators need the relevant role: Learn says the admin role determines which products can be managed, with a dedicated Microsoft 365 Backup Administrator role for the whole tool. Pay-as-you-go billing linked to an Azure subscription is a setup step for the service.

Microsoft 365 Backup supports user and shared mailboxes, but not room or group mailboxes, and does not support some legacy SharePoint site templates. Microsoft publishes limits of 1,000,000 items per workload, 100 backup policies per workload and 100,000 items per backup policy, and directs organisations needing higher scale to contact Microsoft.

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
<tr><td data-label="Control"><strong>Which sites, accounts or mailboxes are excluded from Full Workload Backup</strong><br><small>Tenant</small><br><small class="controls__note">Learn: up to 10,000 protection units per exclusion operation. The Graph call is beta and covers SharePoint sites; permission BackupRestore-Configuration.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Backup policies › Full Workload Backup policy › View details › Excluded › Exclude more › Save <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}/siteExclusionUnitsBulkAdditionJobs with displayName and siteWebUrls</code> <a href="https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who is told when backup policies change</strong><br><small>Tenant</small><br><small class="controls__note">General Microsoft 365 Backup control; creating or modifying backup policies is a routine event that needs opt-in. Global admins and Microsoft 365 Backup admins can turn it on.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Email notifications <a href="https://learn.microsoft.com/microsoft-365/backup/backup-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The enable and exclusion paths are the SharePoint walkthrough on Learn; Learn says the experience is the same for SharePoint, OneDrive and Exchange. Turning the policy off is done from Backup policies by selecting the Full Workload Backup policy and choosing Turn off Full Workload Backup.

On roles, SharePoint Administrators manage SharePoint and OneDrive; Exchange Administrators manage Exchange. Global Administrators and Microsoft 365 Backup Administrators manage all three. An Exchange Administrator cannot use the SharePoint example.

The Microsoft.Graph.Beta.BackupRestore module documents New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy with a -ProtectionMode parameter; the Graph resource defines fullServiceBackup as the entire-workload mode. It creates an inactive SharePoint policy, not an activated one. The REST create reference does not list that property, so it is inconsistent with the beta PowerShell surface. The exclusion call in the second row applies to SharePoint sites; Microsoft also documents a beta API for creating OneDrive exclusion bulk-addition jobs and a beta API for creating Exchange mailbox exclusion bulk-addition jobs.

The email notification control is general to Microsoft 365 Backup: Global admins and Microsoft 365 Backup admins can turn it on and update the list. Microsoft documents creating or modifying backup policies as routine notification events. Routine notifications require opt-in; jobs configured with a 10-minute RPO are excluded, and events trigger on overall policy completion.

## Open questions

- Are there additional eligibility restrictions specific to Full Workload Backup beyond Microsoft 365 Backup's documented supported mailbox and site types?
- Where is the Exchange entry point in the admin centre? The Exchange creation steps on Learn do not list a back-up-all option.
- Does Microsoft 365 Backup send an email notification when Full Workload Backup is turned off or its exclusion list is edited? Watch the email notifications section of the setup page.

<!-- rationale
risk: Low. Nothing is protected by Full Workload Backup until an administrator enables it; existing custom policies remain unchanged.
cost: Variable. Microsoft 365 Backup is a pay-as-you-go service with a list price of $0.15/GiB/month of protected content, so enabling a whole workload sets the bill by that workload's size.
impact: Low. Backup administrators notice it; the notice names admins managing Microsoft 365 Backup policies as the affected group and end users get no new experience.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: Exclusions are added by following the listed path from Exclude more directly to Save. | Found: 4. Select Exclude more. 5. Upload a CSV file containing the protection units that you want to exclude. 6. Select Save. | Fix: Replace the path in controls[1].ui and its rendered table cell with 'Microsoft 365 Backup > Backup policies > Full Workload Backup policy > View details > Excluded > Exclude more > Upload a CSV file containing the protection units to exclude > Save'. The cited Learn procedure requires the CSV upload between Exclude more and Save. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, blocker] controls[2].api; Governance controls table / command: Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled implements who is told when backup policies change. | Found: Existing properties that aren't included in the request body maintain their previous values or are recalculated based on changes to other property values. isEnabled: Indicates whether notifications are enabled. recipients: Specifies the recipients who receive the notifications. | Fix: Replace the call in controls[2].api and its rendered table cell with "Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled -AdditionalEvents restoreAndPolicyUpdates -Recipients @{Role='custom'; CustomRecipients=@(@{Email='<recipient-email>'})}". The recipient placeholder must represent the intended notification list; repeat the email entry for additional intended recipients. The existing cmdlet reference documents both parameters and the recipients hashtable; https://learn.microsoft.com/graph/api/emailnotificationssetting-update?view=graph-rest-1.0 documents restoreAndPolicyUpdates and the complete request. | Source: https://learn.microsoft.com/graph/api/emailnotificationssetting-update?view=graph-rest-1.0
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: End users get no new experience. | Found: Searched: Microsoft 365 Backup Full Workload Backup end users no impact user experience transparent. Read backup-setup, backup-overview and backup-view-edit-policies. They describe admin management, not an explicit assurance that end users get no new experience. | Fix: Remove 'and end users get no new experience' from the impact rationale. Keep the low impact judgement and its documented premise that the notice identifies administrators managing Backup policies as an affected audience.
-->
