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
risk: "medium"
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
  - title: "Which sites, accounts or mailboxes are excluded from Full Workload Backup (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta"
    kind: "learn"
  - title: "Who is told when backup policies change (PowerShell)"
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
    api: null
    note: "SharePoint example; Learn says the experience is the same for OneDrive and Exchange. Feature is in preview on Learn. Requires a SharePoint, Exchange, Global or Microsoft 365 Backup administrator role."
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
    note: "General Microsoft 365 Backup control; Microsoft has not said it reports Full Workload Backup changes specifically. Global admins and Microsoft 365 Backup admins can turn it on."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-07-08T23:11:07"
changes:
  - date: "2026-11-18"
    note: "New briefing: Full Workload Backup for SharePoint, OneDrive and Exchange in Microsoft 365 Backup, with cost, exclusion list and controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 12 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 72
  unconfirmed: 0
  contradicted: 12
  attempts: 1
  hash: "c3843e0ec98a5bcf1fb82cdb8646af20"
---

## What's changing

Full Workload Backup lets an administrator protect a whole workload (SharePoint, OneDrive or Exchange) in Microsoft 365 Backup with one policy, instead of selecting sites, accounts or mailboxes. Microsoft Learn describes it as automatic protection for all eligible SharePoint sites, OneDrive accounts or Exchange mailboxes that are not already protected by another backup policy. Microsoft's notice MC1387526 adds that newly created items are included on later runs.

It behaves as follows on Microsoft Learn. It can be enabled independently for each workload. Custom backup policies take precedence: an item in a custom policy, active or paused, is not protected by the Full Workload Backup policy, and adding a protected item to a custom policy moves it with no gap in recovery point coverage. Microsoft 365 Backup checks for newly created sites, accounts and mailboxes every 24 hours. An exclusion list, filled by uploading a CSV file, keeps named items out of the policy.

The roadmap item lists status In development, a preview target of July CY2026 and a general availability target of September CY2026, for Worldwide (Standard Multi-Tenant) on the web. MC1387526 (published 2026-06-11, last updated 2026-10-12) gives a Worldwide public preview rollout from early July to mid-July 2026 and general availability from mid-September to mid-October 2026, with no act-by date. At the time of writing (November 2026) the Learn page still marks the feature as in preview.

## Why it matters

This turns a backup list that administrators maintain into a standing rule for a workload. For a service owner it changes two things: which content is held in backup without anyone choosing it, and the monthly Azure charge, which Microsoft's pricing page bases on the size of protected content. A whole-workload policy puts that charge on the full size of the workload, less the exclusions and items in custom policies.

Microsoft's notice says the feature is available by default but needs admin configuration to enable, so nothing is protected by it until an administrator creates the policy. Microsoft asks for no action before rollout; it recommends reviewing current policies and coverage afterwards. Decide the exclusion list and the budget before the first policy is created, because newly created items join automatically after that.

## Risk assessment

**Data exposure**
- Items nobody selected are protected once a workload policy exists: every eligible item outside custom policies and the exclusion list. Use the exclusion list for content that should not be backed up. Existing backups of an excluded or removed item stay available for its retention period.

**Security & identity**
- Microsoft Learn says only tenant-level admins can create and manage backups, and the admin role decides which workloads they can manage; the Microsoft 365 Backup Administrator role can control the entire tool. Anyone in those roles can create a policy that changes coverage and spend for a whole workload.
- Microsoft 365 Backup email notifications list removing protection units from backup policies as a potentially harmful event, and creating or modifying backup policies as a routine event. Whether exclusion-list edits or turning off Full Workload Backup send a notification is not stated.

**Autonomy & actions**
- After enabling, the service adds newly created items on its 24-hour check without an administrator selecting them. Removing an item from the Full Workload Backup policy adds it to the exclusion list, so no new backups are taken for it.
- Turning the policy off removes it: items protected only by it move to the Removed items tab and no new backups are taken until they join a custom policy or the policy is re-enabled.

**Change & support**
- Learn marks the feature as preview, so limits and behaviour may change. Backup administrators need to know that a custom policy wins over the workload policy, and that adding an item to a custom policy moves it out of the workload policy.

## Cost and licensing

Microsoft's pricing page describes Microsoft 365 Backup as a pay-as-you-go consumption-based service with a list price of $0.15/GiB/month of protected content. The charge is based on the size of protected content once it is added to backup protection, including the second-stage recycle bin for SharePoint sites and OneDrive accounts, and online archives and deleted and versioned items for mailboxes. The setup page says the first step is to link an Azure subscription for pay-as-you-go billing.

The pricing page names no separate meter for Full Workload Backup and no Microsoft 365 licence for the service. Treat the whole workload's size as the exposure: the pricing calculator that page links to can estimate it from usage reports or PowerShell. The setup page says the newer billing experience offers budget alerts. Whether any cap stops spend is not stated.

The pricing page also states that, if you use a partner (ISV) solution built on the Microsoft 365 Backup Storage platform, you are charged solely by that partner for their application.

## Scope

The feature covers SharePoint sites, OneDrive accounts and Exchange mailboxes, each enabled separately. The roadmap item lists Worldwide (Standard Multi-Tenant) only, the web platform and release phases General Availability and Preview; Microsoft's notice gives a Worldwide rollout window.

Administrators need the relevant role: Learn says the admin role determines which products can be managed, with a dedicated Microsoft 365 Backup Administrator role for the whole tool. Pay-as-you-go billing linked to an Azure subscription is a setup step for the service.

Microsoft's text says eligible items are protected without defining eligibility for this feature. The policy-creation steps on Learn say other Exchange recipient types, such as room and group mailboxes, are not supported at this time, and that some legacy SharePoint site templates are not supported by Microsoft 365 Backup.

## Governance guidance

### Before rollout
- Estimate protected size per workload with the Microsoft 365 Backup pricing calculator and usage reports, and agree the budget with finance.
- Review the pay-as-you-go setup page and identify the Azure subscription that will carry the charge.
- List the sites, accounts or mailboxes that should stay out of backup and prepare the CSV file for the exclusion list.
- Turn on Microsoft 365 Backup email notifications so a second administrator sees policy changes.

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
<tr><td data-label="Control"><strong>Whether a workload is protected by a Full Workload Backup policy</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint example; Learn says the experience is the same for OneDrive and Exchange. Feature is in preview on Learn. Requires a SharePoint, Exchange, Global or Microsoft 365 Backup administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Back up sites › All sites <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which sites, accounts or mailboxes are excluded from Full Workload Backup</strong><br><small>Tenant</small><br><small class="controls__note">Learn: up to 10,000 protection units per exclusion operation. The Graph call is beta and covers SharePoint sites; permission BackupRestore-Configuration.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Backup policies › Full Workload Backup policy › View details › Excluded › Exclude more › Save <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}/siteExclusionUnitsBulkAdditionJobs with displayName and siteWebUrls</code> <a href="https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-post-siteexclusionunitsbulkadditionjobs?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who is told when backup policies change</strong><br><small>Tenant</small><br><small class="controls__note">General Microsoft 365 Backup control; Microsoft has not said it reports Full Workload Backup changes specifically. Global admins and Microsoft 365 Backup admins can turn it on.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Microsoft 365 Backup › Email notifications <a href="https://learn.microsoft.com/microsoft-365/backup/backup-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgSolutionBackupRestoreEmailNotificationSetting -IsEnabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.backuprestore/update-mgsolutionbackuprestoreemailnotificationsetting?view=graph-powershell-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The enable and exclusion paths are the SharePoint walkthrough on Learn; Learn says the experience is the same for SharePoint, OneDrive and Exchange. Turning the policy off is done from Backup policies by selecting the Full Workload Backup policy and choosing Turn off Full Workload Backup.

Microsoft Learn documents no Graph or PowerShell call for creating a Full Workload Backup policy at the time of writing (November 2026). The Graph beta sharePointProtectionPolicy resource has a protectionMode value of fullServiceBackup, but the create reference lists no parameter for it. The exclusion call applies to SharePoint sites; exclusion calls for OneDrive and Exchange were not found on the reference pages read.

The email notification control is general to Microsoft 365 Backup: Global admins and Microsoft 365 Backup admins can turn it on and update the list. Microsoft has not said it reports Full Workload Backup changes specifically.

## Open questions

- What recovery window applies to a Full Workload Backup policy? The creation steps for custom policies set a Recovery window, but the Full Workload Backup steps on Learn do not mention one. Watch the Learn page for Create, view, and edit backup policies.
- Do the backup scale limits (policies per product and items per policy) apply to a Full Workload Backup policy, and what happens in a tenant that exceeds them? Watch the Backup scale limits section of the overview page.
- What counts as an eligible item for Full Workload Backup, for example room or group mailboxes and legacy SharePoint site templates?
- Where is the Exchange entry point and Graph support? The Exchange creation steps on Learn do not list a back-up-all option, and exclusion-list calls were found only for SharePoint sites.
- Does Microsoft 365 Backup send an email notification when Full Workload Backup is created, changed or turned off? Watch the email notifications section of the setup page.

<!-- rationale
risk: Medium. Once enabled, the policy protects every eligible item not in a custom policy or exclusion list, so coverage and spend grow with the workload; Microsoft's notice says an admin has to enable it.
cost: Variable. Microsoft 365 Backup is a pay-as-you-go service with a list price of $0.15/GiB/month of protected content, so enabling a whole workload sets the bill by that workload's size.
impact: Low. Backup administrators notice it; the notice names admins managing Microsoft 365 Backup policies as the affected group and end users get no new experience.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; What's changing; rationale: risk / behaviour: Every eligible item outside custom policies and the exclusion list is protected by Full Workload Backup. | Found: Full Workload Backup automatically protects all eligible protection units that aren't already included in a custom backup policy, added to the exclusion list, or in the process of being permanently deleted from Microsoft 365 Backup. | Fix: Qualify the coverage statements with the additional documented exception: 'Full Workload Backup protects eligible items that are not in a custom policy, on the exclusion list, or in the process of being permanently deleted from Microsoft 365 Backup.' | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, blocker] Cost and licensing / absence: Whether a spending cap stops spend is not stated. | Found: The only way to stop billing is to disconnect the payment method. Reaching 100% of your budget doesn't stop the service or billing. | Fix: Replace 'Whether any cap stops spend is not stated' with 'Reaching 100% of a billing-policy budget does not stop the service or billing.' Cite https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [contradicted, blocker] controls[0].note; Governance controls: first row note / role: A SharePoint, Exchange, Global or Microsoft 365 Backup administrator role suffices for the displayed workload-enabling control. | Found: | SharePoint Administrator | ✓ | ✓ |  | | Exchange Administrator |  |  | ✓ | | Fix: Replace the unqualified role sentence with 'SharePoint Administrators manage SharePoint and OneDrive; Exchange Administrators manage Exchange. Global Administrators and Microsoft 365 Backup Administrators manage all three.' Cite https://learn.microsoft.com/microsoft-365/backup/backup-setup. An Exchange Administrator cannot use the SharePoint example. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
- [contradicted, blocker] controls[2].note; Governance controls; Open questions: email notifications / absence: Microsoft has not said whether email notifications report Full Workload Backup policy creation or changes. | Found: Routine events ... Creating or modifying backup policies ... Jobs configured with a 10-minute RPO are not included in notification events. Notification events are triggered upon completion of the overall policy. | Fix: Replace the blanket uncertainty about policy creation and modification with 'Microsoft documents creating or modifying backup policies as routine notification events. Routine notifications require opt-in; jobs configured with a 10-minute RPO are excluded, and events trigger on overall policy completion.' The narrower question about specific exclusion-edit or shutdown event mapping can remain. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
- [contradicted, blocker] Scope; Open questions: eligible items / absence: Eligibility remains undefined for Full Workload Backup, including whether room or group mailboxes and legacy SharePoint templates qualify. | Found: Microsoft 365 Backup supports both user mailboxes and shared mailboxes. Other Exchange recipient types, including room mailboxes and group mailboxes, aren't supported. | Fix: Do not reopen product-wide exclusions as unknown for this policy. Replace the Scope sentence with 'Microsoft 365 Backup supports user and shared mailboxes, but not room or group mailboxes, and excludes some SharePoint templates.' Remove the eligible-items open question, or narrow it to 'Are there additional eligibility restrictions specific to Full Workload Backup beyond Microsoft 365 Backup's documented supported mailbox and site types?' Cite https://learn.microsoft.com/microsoft-365/backup/backup-faq. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-faq
- [contradicted, blocker] controls[0].api; Governance controls: automation absence / absence: Microsoft Learn documents no Graph or PowerShell call for creating a Full Workload Backup policy. | Found: New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy ... [-DisplayName <string>] ... [-ProtectionMode <string>] ... Create a protection policy for a M365 service SharePoint. Policy will be created in inactive state. | Fix: Replace the blanket absence with 'The Microsoft.Graph.Beta.BackupRestore module documents New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy with a -ProtectionMode parameter; the Graph resource defines fullServiceBackup as the entire-workload mode. The REST create reference does not list that property.' For controls[0].api, use powershell call "New-MgBetaSolutionBackupRestoreSharePointProtectionPolicy -DisplayName '<policy-name>' -ProtectionMode fullServiceBackup" and the cited cmdlet URL; qualify the note that this creates an inactive SharePoint policy, not an activated policy, and that the REST create reference is inconsistent with the beta PowerShell surface. | Source: https://learn.microsoft.com/powershell/module/microsoft.graph.beta.backuprestore/new-mgbetasolutionbackuprestoresharepointprotectionpolicy?view=graph-powershell-beta
- [contradicted, blocker] Governance controls; Open questions: Graph support / absence: No OneDrive exclusion-list call was found or documented alongside the SharePoint exclusion support. | Found: POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicyId}/driveExclusionUnitsBulkAdditionJobs | Fix: Remove the OneDrive exclusion-API absence claim and the assertion that exclusion-list calls exist only for SharePoint. Replace that part with 'Microsoft also documents a beta API for creating OneDrive exclusion bulk-addition jobs' and cite https://learn.microsoft.com/graph/api/onedriveforbusinessprotectionpolicy-post-driveexclusionunitsbulkadditionjobs?view=graph-rest-beta. No additional control row is required. | Source: https://learn.microsoft.com/graph/api/onedriveforbusinessprotectionpolicy-post-driveexclusionunitsbulkadditionjobs?view=graph-rest-beta
- [contradicted, blocker] Governance controls; Open questions: Exchange and Graph support / absence: No Exchange exclusion-list call was found or documented alongside the SharePoint exclusion support. | Found: POST /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicyId}/mailboxExclusionUnitsBulkAdditionJobs | Fix: Remove the Exchange exclusion-API absence claim. Replace that part with 'Microsoft also documents a beta API for creating Exchange mailbox exclusion bulk-addition jobs' and cite https://learn.microsoft.com/graph/api/exchangeprotectionpolicy-post-mailboxexclusionunitsbulkadditionjobs?view=graph-rest-beta. Retain the separate, narrower question about the Exchange UI entry point. | Source: https://learn.microsoft.com/graph/api/exchangeprotectionpolicy-post-mailboxexclusionunitsbulkadditionjobs?view=graph-rest-beta
- [contradicted, blocker] Open questions: backup scale limits / absence: Whether Microsoft 365 Backup policy and item limits apply to Full Workload Backup, and what to do above them, remains an open question. | Found: These limits apply to each workload independently (SharePoint, Exchange, and OneDrive). ... up to 100 backup policies per workload. ... up to 100,000 items per backup policy. ... contact Microsoft to discuss options for a higher scale. | Fix: Replace the open question with 'Microsoft publishes limits of 1,000,000 items per workload, 100 backup policies per workload and 100,000 items per backup policy, and directs organisations needing higher scale to contact Microsoft.' Cite https://learn.microsoft.com/microsoft-365/backup/backup-overview#backup-scale-limits. Do not imply that Full Workload Backup is exempt from the published product-wide limits. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-overview
- [contradicted, blocker] Governance guidance: Before rollout, email notifications / applicability: Turning on Microsoft 365 Backup email notifications is sufficient for a second administrator to see policy changes. | Found: By default, recipients are notified only about potentially harmful events, but you can also opt in to receive notifications for routine events. ... Add users ... to the Backup Notification List. ... Select the checkbox to also receive routine event notifications. | Fix: Replace the checklist bullet with 'Turn on Microsoft 365 Backup email notifications, add the second administrator to the Backup Notification List, and select the checkbox to receive routine events, including policy creation and modification. Jobs configured with a 10-minute RPO are excluded; notification events trigger when the overall policy completes.' | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: Graph resource / behaviour: The beta sharePointProtectionPolicy resource has a protectionMode value of fullServiceBackup. | Found: The possible values are: standard, fullServiceBackup, unknownFutureValue. When set to fullServiceBackup, the entire workload is backed up and specific sites can be excluded using exclusion units. | Fix: Add https://learn.microsoft.com/graph/api/resources/sharepointprotectionpolicy?view=graph-rest-beta to the page's sources. | Source: https://learn.microsoft.com/graph/api/resources/sharepointprotectionpolicy?view=graph-rest-beta
- [supported, minor] Governance controls: Graph create reference / absence: The Graph beta REST SharePoint policy create reference does not list protectionMode as a creation property. | Found: You can specify the following properties when creating a sharePointProtectionPolicy object. ... displayName ... retentionSettings ... siteProtectionUnits | Fix: Add https://learn.microsoft.com/graph/api/backuprestoreroot-post-sharepointprotectionpolicies?view=graph-rest-beta to the sources. Keep this narrowly about the REST reference, not all automation surfaces. | Source: https://learn.microsoft.com/graph/api/backuprestoreroot-post-sharepointprotectionpolicies?view=graph-rest-beta
- [supported, minor] Open questions: recovery window / absence: The dedicated Full Workload Backup creation steps do not mention a Recovery window. | Found: On the Review and finish page, review the configuration, and then select Next to create the Full SharePoint Backup policy. | Fix: Remove this open question: the dedicated subsection indeed omits the setting, but the same page places Back up all SharePoint sites and Back up all OneDrive accounts before Backup Settings, where a Recovery window is set. Its general recovery-window section applies the window to every artifact in a policy; subsection silence is misleading evidence of an undocumented retention rule. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, minor] front matter: risk; rationale: risk / consistency: A medium risk rating is justified by coverage and spend growth after an administrator enables this optional control. | Found: risk: "medium"; defaultState: "admin-opt-in"; 'nothing is protected by it until an administrator creates the policy.' The standard defines low risk to include 'nothing happens until an admin opts in.' | Fix: Set risk to low and use the rationale 'Low. Nothing is protected by Full Workload Backup until an administrator enables it; existing custom policies remain unchanged.' Keep the post-enablement coverage and spend cautions in the body.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks readers to review pay-as-you-go billing setup and its Azure subscription, but the controls table has no billing-configuration row. | Found: 'Review the pay-as-you-go setup page and identify the Azure subscription that will carry the charge.' The controls table covers workload enablement, exclusions and email notifications only. | Fix: Remove the checklist bullet 'Review the pay-as-you-go setup page and identify the Azure subscription that will carry the charge.' The verified billing prerequisite can remain in Cost and licensing and Scope; do not add a control row as part of this correction.
-->
