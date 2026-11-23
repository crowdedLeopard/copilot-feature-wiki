---
title: "Microsoft 365 Backup: longer recovery windows for SharePoint and OneDrive, up to 10 years"
slug: "m365-long-term-retention-period-for-m365-backup"
roadmapId: 481834
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft 365 Backup policies can now keep recovery points for up to 10 years (SharePoint, OneDrive) or 2 years (Exchange). The one-year default is unchanged, so an administrator opts in per policy, and storage charges can grow."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft 365 Backup is billed as pay-as-you-go consumption at a list price of $0.15/GiB/month of protected content (Microsoft Learn pricing page). A separate price for longer recovery windows is not stated on that page."
audiences: ["m365-admin","compliance","finops"]
tags: ["m365-backup","backup-and-recovery","retention","sharepoint","onedrive","exchange","pay-as-you-go","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap 481834"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=481834"
    kind: "roadmap"
  - title: "What's new in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-whats-new"
    kind: "learn"
  - title: "Create, view, and edit backup policies in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    kind: "learn"
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-overview"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-pricing"
    kind: "learn"
  - title: "Set up Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    kind: "learn"
  - title: "Update sharePointProtectionPolicy"
    url: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-update?view=graph-rest-beta"
    kind: "learn"
  - title: "retentionSetting resource type"
    url: "https://learn.microsoft.com/graph/api/resources/retentionsetting?view=graph-rest-beta"
    kind: "learn"
  - title: "List activityLogs"
    url: "https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["m365-backup-activity-logs","m365-create-full-workload-backup-policies-for-m365-backup","m365-teams-channel-backup","entra-id-backup-and-recovery-30-day"]
controls:
  - governs: "Recovery window (how long recovery points are kept) on a SharePoint backup policy"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Backup policies > policy > View details"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}"
      docs: "https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-update?view=graph-rest-beta"
    note: "UI: update Recovery window on an active policy, then Update policy. API is beta; request body sets retentionSettings (period such as P3650D, interval R/P1W). SharePoint policies only."
  - governs: "Viewing and exporting Microsoft 365 Backup activity, including policy changes"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Reports > Recent activities > View more"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-whats-new"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/solutions/backupRestore/activityLogs"
      docs: "https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta"
    note: "Read-only. Activity logs are retained for a fixed 365 days. Use Microsoft Purview Audit for compliance investigations."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-18T23:05:00"
changes:
  - date: "2026-11-23"
    note: "First briefing: recovery windows up to 10 years for SharePoint and OneDrive (2 years for Exchange), one-year default unchanged."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 57
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "2d846ac8e80536c69719060163328e95"
---

## What's changing

Microsoft 365 Backup policies now let an administrator choose how long recovery points are kept, beyond the previous one-year default. The roadmap item describes this as "the ability to set longer term retention periods to restore beyond one year".

Microsoft Learn documents the options by workload. SharePoint and OneDrive policies accept 3 months, 6 months, or any whole number of years from 1 through 10. Exchange policies accept 3 months, 6 months, 1 year or 2 years. Existing policies and artifacts default to a 1-year recovery window, and Microsoft's What's new page states that the one-year default is unchanged. The window is set per policy and applies to every item in that policy.

For full SharePoint site and OneDrive account restores, recovery points are available every 10 minutes for the prior two weeks and weekly beyond that, through the configured window. Granular file and folder restore stays limited to the most recent 14 days whatever the window. Increasing the window does not create older recovery points or bring back points that have already expired, so history only builds up from when protection began.

The roadmap record shows status Launched, a preview date of March CY2026 and a target of August CY2026, for Worldwide (Standard Multi-Tenant) on the web, with General Availability and Preview release phases. Learn's What's new page dates the configurable windows (3 months to 2 years) to September 18, 2026 and the extension to 10 years for SharePoint and OneDrive to October 31, 2026. Those Learn dates are later than the roadmap's August CY2026 target; both are reported as given.

## Why it matters

This gives service owners a way to keep SharePoint and OneDrive recovery points for the length of a records or ransomware-recovery requirement, instead of stopping at one year. Microsoft has not stated that any existing policy changes on its own: the one-year default stays until an administrator edits a policy, so no one is affected unless someone acts.

The decision is mostly about money and irreversibility. A longer window keeps deleted and versioned content in billable backup storage for longer, and a later reduction deletes recovery points. Choose the window per policy with the finance owner of the Azure subscription, and treat a decrease as a deliberate change.

## Risk assessment

**Data exposure**
- A longer window keeps deleted and versioned SharePoint and OneDrive content in backup for up to the chosen number of years. Microsoft's Backup pricing page says deleted content is held until the recovery window lapses, so data you expect to be gone remains recoverable (and billable) for longer.
- Microsoft's overview states that Purview retention and deletion policies do not affect the backup recovery window, so a Purview deletion does not shorten how long backup copies are kept.

**Security & identity**
- The window is set on the policy, so whoever can edit policies controls it. Microsoft's setup page lists the SharePoint Administrator, Exchange Administrator and Microsoft 365 Backup Administrator roles by workload; limit these roles to the people who should be able to shorten a window.

**Autonomy & actions**
- Decreasing a window, or moving an item into a policy with a shorter window, starts a 30-day grace period after which recovery points older than the new window are deleted. Microsoft calls this a destructive action. An increase applies immediately.
- The window can be changed on an active policy but not on one that is paused or has a run in progress.

**Change & support**
- A longer window does not recover history that was never kept: Microsoft states that increasing it does not create older recovery points or recover expired ones. Tell restore owners that history beyond one year only exists for periods after protection began under the longer window.
- Granular file and folder restore stays within the most recent 14 days; older points support only full account or site restore. Support staff should expect a long-ago restore to roll back a whole site or account.

## Cost and licensing

Microsoft 365 Backup is a pay-as-you-go, consumption-based service. The Microsoft Learn pricing page gives a list price of $0.15/GiB/month of protected content, and the overview gives the same figure for OneDrive, SharePoint and Exchange Online. Restores are free according to the overview's billing row.

The pricing page counts the live size of protected content plus deleted and versioned data held for recovery, and says that deleted or versioned content expires from the backups, and stops being billed, once the configured recovery window lapses. In the page's own example, a one-year window keeps deleted content billable for a year. The wiki's reading is that a window of several years holds such content, and its charge, for correspondingly longer; the pricing page does not give a worked example for windows beyond one year.

The pricing page also says that restore point frequency does not materially change the cost of backup storage. Microsoft's pricing calculator (an Excel tool linked from the pricing page) is the documented way to estimate cost. Billing is set up through an Azure subscription, as the setup page describes; the first-year bills are the best check on how much a longer window adds.

## Scope

**Who and what:** administrators who create or edit Microsoft 365 Backup policies. Microsoft's setup page says only tenant-level admins create and manage backups, and that the admin role determines which products you can manage: SharePoint Administrator for SharePoint and OneDrive, Exchange Administrator for Exchange, and the Microsoft 365 Backup Administrator role for the whole tool. End users cannot enable backups or restores.

**Workloads:** SharePoint and OneDrive up to 10 years; Exchange up to 2 years; Microsoft Entra Backup and Recovery Premium (preview) has a fixed 30-day window that is not configurable.

**Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web.

**Rollout:** the roadmap status is Launched. Existing policies keep the one-year window until changed.

## Governance guidance

### Before rollout
- Ask the records or compliance owner which SharePoint and OneDrive content needs recovery beyond one year, and set the window on those policies only.
- Estimate the added storage with the Microsoft 365 Backup pricing calculator, using live data plus second-stage recycle bin size, and agree the budget with the owner of the Azure subscription that pays for backup.
- Check which roles can edit policies (SharePoint Administrator, Exchange Administrator, Microsoft 365 Backup Administrator) and remove the role from anyone who should not be able to shorten a window.

### At rollout
- Open the target policy in the Microsoft 365 admin center and update the Recovery window, then select Update policy; an increase applies immediately.
- Record the date each window was lengthened, because history before that date does not exist.
- Avoid editing while the policy is paused or a run is in progress; Microsoft does not allow the change then.

### After rollout
- Watch the Microsoft 365 Backup activity log for policy changes and review any reduction within the 30-day grace period before older recovery points are deleted.
- Compare the next invoices against the estimate and adjust the window if deleted content is accumulating cost.
- Test a full site or OneDrive account restore from a point older than two weeks, and confirm the restore team knows granular restore only reaches back 14 days.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Recovery window (how long recovery points are kept) on a SharePoint backup policy</strong><br><small class="controls__note">UI: update Recovery window on an active policy, then Update policy. API is beta; request body sets retentionSettings (period such as P3650D, interval R/P1W). SharePoint policies only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Backup policies › policy › View details <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicyId}</code> <a href="https://learn.microsoft.com/graph/api/sharepointprotectionpolicy-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Viewing and exporting Microsoft 365 Backup activity, including policy changes</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Activity logs are retained for a fixed 365 days. Use Microsoft Purview Audit for compliance investigations.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Reports › Recent activities › View more <a href="https://learn.microsoft.com/microsoft-365/backup/backup-whats-new" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/solutions/backupRestore/activityLogs</code> <a href="https://learn.microsoft.com/graph/api/backuprestoreroot-list-activitylogs?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The recovery window is a per-policy setting, so there is no tenant-wide default to change: each SharePoint, OneDrive and Exchange policy carries its own value. The Graph row covers the SharePoint protection policy endpoint only, and is a beta API that Microsoft says is subject to change and not supported in production applications.

Microsoft's activity log records policy changes, and the Graph reference's example response for a policy log includes a retentionPeriod field. Microsoft says to keep using Microsoft Purview Audit for compliance investigations that need the Microsoft 365 audit record.

Roles differ by workload: the setup page lists SharePoint Administrator for SharePoint and OneDrive, Exchange Administrator for Exchange, and Microsoft 365 Backup Administrator for all three.

## Open questions

- Will Microsoft raise the Exchange maximum above 2 years, given that the roadmap item speaks of retention beyond one year without naming a workload? Watch the What's new page for Microsoft 365 Backup.
- Does Microsoft intend any change to the one-year default for existing or new policies? Watch Message center and the What's new page.
- How much does a 10-year window add to the bill for a typical tenant, given the pricing page counts deleted and versioned content until the window lapses? Watch the Microsoft 365 Backup pricing page and the pricing calculator.
- The roadmap lists an August CY2026 target while Learn dates the 10-year extension to October 31, 2026. Which date should tenants use for general availability? Watch the roadmap item.

<!-- rationale
risk: Medium. The change is opt-in per policy, but shortening a window later deletes recovery points after a 30-day grace period, and longer windows keep deleted content held in backup for longer.
cost: Variable. Microsoft 365 Backup is pay-as-you-go at a list price of $0.15/GiB/month of protected content, and deleted or versioned content stays counted until the recovery window lapses.
impact: Low. Backup administrators and the finance owners of the Azure bill notice; end users see no change in Microsoft 365 apps.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance guidance: At rollout; Risk assessment: Change & support / behaviour: History before the date a recovery window was lengthened does not exist, and history beyond one year is available only for periods after protection began under the longer window. | Found: Restore points start being generated when you create the backup policy ... Only recovery points that have been generated and haven't expired are available. | Fix: Replace the At rollout bullet with 'Record the date each window was lengthened; increasing it does not create older recovery points or recover expired ones.' Replace 'Tell restore owners that history beyond one year only exists for periods after protection began under the longer window' with 'Tell restore owners that available history depends on when protection began and which recovery points have not expired.' These statements are documented at https://learn.microsoft.com/microsoft-365/backup/backup-whats-new and https://learn.microsoft.com/microsoft-365/backup/backup-restore-data?view=o365-worldwide#considerations-when-using-restore; add the latter to sources. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-restore-data?view=o365-worldwide#considerations-when-using-restore
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: The overview gives the same storage-price figure for OneDrive, SharePoint, and Exchange Online. | Found: $0.15 per GB per month for all data protected by Backup | Fix: Replace 'and the overview gives the same figure for OneDrive, SharePoint and Exchange Online' with 'while the overview lists $0.15 per GB per month for OneDrive, SharePoint and Exchange Online; its unit label differs from the pricing page, which uses GiB'. Both sources are already cited: https://learn.microsoft.com/microsoft-365/backup/backup-pricing and https://learn.microsoft.com/microsoft-365/backup/backup-overview. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-overview
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: The recovery-window UI route is Microsoft 365 admin center > Settings > Microsoft 365 Backup > Backup policies > policy > View details. | Found: select the Backup policies tab ... select that policy and then select View details. ... To change the recovery window later, open an active policy, update the Recovery window, and then select Update policy. | Fix: Extend controls[0].ui.path and its rendered table path to 'Settings > Microsoft 365 Backup > Backup policies > policy > View details > Recovery window'. The current route reaches the policy but stops before its control; the existing note already describes changing Recovery window and selecting Update policy. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, minor] front matter: risk; rationale: risk / consistency: The medium risk rating is justified by opt-in extensions and the effects of administrators subsequently reducing a window. | Found: risk: "medium"; rationale: 'The change is opt-in per policy'; Why it matters: 'the one-year default stays until an administrator edits a policy'. The scale defines low as 'nothing happens until an admin opts in'. | Fix: Set risk to 'low' and replace the risk rationale with 'Low. Existing policies keep their one-year recovery window unless an administrator changes them. Longer windows retain deleted content for longer, and a later reduction deletes older recovery points after a 30-day grace period.'
- [contradicted, minor] Governance guidance: Before rollout / consistency: Every control that the governance checklist asks administrators to review is represented in the controls table. | Found: 'Check which roles can edit policies ... and remove the role from anyone who should not be able to shorten a window.' The table contains only recovery-window configuration and backup activity logs. | Fix: The Before rollout role-assignment review/removal step has no controls-table row. Remove that checklist bullet; keep the documented role information in Scope and Governance controls. Do not add a new control row as part of this correction.
-->
