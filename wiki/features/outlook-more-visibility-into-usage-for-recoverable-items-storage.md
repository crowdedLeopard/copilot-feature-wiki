---
title: "Outlook: usage display for Recoverable Items storage"
slug: "outlook-more-visibility-into-usage-for-recoverable-items-storage"
roadmapId: 579190
topic: "modern-work"
products: ["Outlook"]
summary: "Microsoft plans to show users how much mailbox storage their Recoverable Items use, in Outlook on desktop and web. No admin setting is documented; expect questions from users on hold or near quota."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and no Microsoft Learn page for this feature was found at the time of writing (November 2026)."
audiences: ["m365-admin","compliance","end-user","change-adoption"]
tags: ["exchange","retention","ediscovery","data-lifecycle-management","user-experience","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 579190"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579190"
    kind: "roadmap"
  - title: "Recoverable Items folder in Exchange Online"
    url: "https://learn.microsoft.com/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder"
    kind: "learn"
  - title: "Get-MailboxFolderStatistics"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxfolderstatistics"
    kind: "learn"
  - title: "Clean up or delete items from the Recoverable Items folder in Exchange Online"
    url: "https://learn.microsoft.com/exchange/security-and-compliance/recoverable-items-folder/clean-up-deleted-items"
    kind: "learn"
  - title: "Increase the Recoverable Items quota for mailboxes on hold in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-hold-increase-recoverable-item-quota"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the Recoverable Items usage display is shown"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting for this display is documented at the time of writing (November 2026)."
  - governs: "Checking a mailbox's Recoverable Items size by folder"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Get-MailboxFolderStatistics -Identity <mailbox> -FolderScope RecoverableItems"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxfolderstatistics"
    note: "Existing cmdlet, not the new display. Learn recommends Get-EXOMailboxFolderStatistics in Exchange Online PowerShell. Use -Archive for the archive mailbox."
  - governs: "Moving aged Recoverable Items to the archive mailbox"
    scope: "group"
    ui:
      surface: "Exchange admin center"
      path: "Compliance management > Retention policies"
      docs: "https://learn.microsoft.com/purview/edisc-hold-increase-recoverable-item-quota"
    api:
      kind: "powershell"
      call: "New-RetentionPolicyTag -Name <Name of RPT> -Type RecoverableItems -AgeLimitForRetention <Number of days> -RetentionAction MoveToArchive"
      docs: "https://learn.microsoft.com/purview/edisc-hold-increase-recoverable-item-quota"
    note: "Existing control, described for mailboxes on hold; the tag itself is created in PowerShell. Needs the archive mailbox enabled."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; Microsoft Learn has no page for the feature itself, so behaviour rests on the roadmap description and existing Recoverable Items documentation."
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 0
---

## What's changing

Microsoft plans to let people see how much storage their Recoverable Items are using in Outlook. The roadmap item says this gives a clearer picture of storage usage before a limit is reached, so users can make better decisions about managing their mailbox. The description carries the #newoutlookforwindows hashtag, and the platforms listed are Desktop and Web.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Where in Outlook the figure appears, whether it covers the archive mailbox, and which Recoverable Items subfolders it counts are not stated.

The Recoverable Items folder is the hidden area of a mailbox where Exchange keeps soft-deleted items and, for mailboxes on hold or under a retention policy, preserved copies of edited and purged items. Learn lists deleted item retention, single item recovery, In-Place Hold, Litigation Hold, eDiscovery hold, Microsoft 365 retention policies, mailbox audit logging and calendar logging among the features that use it.

The roadmap record lists the status as In development, with a target of February CY2027, for Worldwide (Standard Multi-Tenant) only. The release phase is General Availability. The date is Microsoft's target, not a commitment.

## Why it matters

Recoverable Items storage is easy to overlook, because Learn says the folder sits in a part of the mailbox that is not visible to users in Outlook, and that when it reaches its quota users cannot delete items. A visible figure moves that warning earlier, to the person holding the mailbox.

For administrators the effect is mainly on support and on holds. Users who see a large number will ask what it is and how to reduce it, and for a mailbox on Litigation Hold or under a retention policy the honest answer is often that the content is preserved on purpose and the fix is the archive or quota configuration, not deletion. Prepare that answer before the feature arrives.

## Risk assessment

**Data exposure**

- The roadmap describes a storage figure for a user's own Recoverable Items, not new content access. Whether the display lists item names, subfolders or only a total is not stated.
- Much of the folder is hidden from users by design: Learn says the Purges and Versions subfolders are not visible to end users. A figure that includes them will count data a user cannot open.

**Security & identity**

- No change documented. The roadmap names no permission, role or identity requirement, and no admin control over who sees the figure.

**Autonomy & actions**

- No change documented. The roadmap describes visibility only and mentions no cleanup action.
- On a mailbox on In-Place Hold or Litigation Hold, Learn says the Managed Folder Assistant stops automatically purging the DiscoveryHolds, Deletions and Purges subfolders, so seeing the number does not mean it will fall.

**Change & support**

- Expect helpdesk questions from users on hold who see large figures. Learn says that at the Recoverable Items quota users cannot delete items and the Managed Folder Assistant cannot delete items based on retention tags.
- The figure may not match what administrators see in PowerShell. Learn advises using FolderSize rather than FolderAndSubfolderSize when assessing consumption; which one Outlook uses is not stated.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for this feature, and the roadmap item names none. The cost the sources show is indirect: admin and helpdesk time.

The storage itself is governed by existing quotas. Learn says that when an item moves to Recoverable Items, its size is deducted from the mailbox quota and added to the folder's size. It gives the Exchange Online defaults as a soft limit of 20 GB and a hard limit of 30 GB, rising automatically to 90 GB and 100 GB when a mailbox is placed on Litigation Hold or In-Place Hold, or when a Microsoft 365 or Office 365 retention policy applies (Learn page: Recoverable Items folder in Exchange Online). The usage display does not change those figures on the roadmap's description.

## Scope

The roadmap lists Outlook on Desktop and Web, for Worldwide (Standard Multi-Tenant). No US Government cloud is listed on the record.

Which users and licences are in scope, the roles that can configure it, rollout mechanics and prerequisites are not stated by the roadmap. Users whose mailboxes have the largest Recoverable Items folders, typically those on hold or under a retention policy, are the likeliest to find it useful.

## Governance guidance

### Before rollout

- Identify mailboxes on Litigation Hold, In-Place Hold or a retention policy, using Exchange Online PowerShell, because those carry the largest Recoverable Items folders.
- Run `Get-MailboxFolderStatistics` with `-FolderScope RecoverableItems` for a sample of those mailboxes and record `FolderSize` per subfolder as a baseline.
- Write a short helpdesk answer explaining that Recoverable Items hold deleted and preserved items, and that preserved content under a hold must not be deleted to free space.

### At rollout

- Check the roadmap item and Message center for the actual release date; the February CY2027 target may move.
- Compare the figure users see in Outlook with PowerShell output for the same mailbox and note any difference.

### After rollout

- Review mailboxes approaching their Recoverable Items quota and decide whether the archive mailbox and a retention policy tag of type RecoverableItems (see the controls table) fit your holds.
- Brief the compliance team before anyone is told to delete items from a mailbox on hold.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Recoverable Items usage display is shown</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting for this display is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Checking a mailbox's Recoverable Items size by folder</strong><br><small>User</small><br><small class="controls__note">Existing cmdlet, not the new display. Learn recommends Get-EXOMailboxFolderStatistics in Exchange Online PowerShell. Use -Archive for the archive mailbox.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-MailboxFolderStatistics -Identity &lt;mailbox&gt; -FolderScope RecoverableItems</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxfolderstatistics" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Moving aged Recoverable Items to the archive mailbox</strong><br><small>Group</small><br><small class="controls__note">Existing control, described for mailboxes on hold; the tag itself is created in PowerShell. Needs the archive mailbox enabled.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Compliance management › Retention policies <a href="https://learn.microsoft.com/purview/edisc-hold-increase-recoverable-item-quota" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionPolicyTag -Name &lt;Name of RPT&gt; -Type RecoverableItems -AgeLimitForRetention &lt;Number of days&gt; -RetentionAction MoveToArchive</code> <a href="https://learn.microsoft.com/purview/edisc-hold-increase-recoverable-item-quota" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin switch for the usage display is documented at the time of writing (November 2026), so the first row records that gap.

The other rows are existing Exchange Online controls. Learn says the retention tag for Recoverable Items is created in PowerShell and cannot be created in the Exchange admin center. The Learn page that describes it frames it for mailboxes on hold, and says that if the archive mailbox is not enabled no action is taken. Microsoft has not said these controls change what the new display shows.

## Open questions

- Where in Outlook does the figure appear, and does it appear in both new Outlook for Windows and Outlook on the web at the February CY2027 target? Watch the roadmap item and Message center.
- Does the figure use FolderSize or FolderAndSubfolderSize, and does it include the Purges, Versions and search-processing subfolders that users cannot open?
- Is there an admin setting to hide or limit the display, and does it cover the archive mailbox as well as the primary mailbox?
- Is any licence required, or is it available to every Exchange Online mailbox?
- Does the display warn users as the quota approaches, or only show a size?

<!-- rationale
risk: Low. The roadmap describes a view of storage already in use, not a new data access, action or admin switch. The default state is not stated, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is admin and helpdesk time; Microsoft has not published a licence or meter for this feature.
impact: Low. It is an informational display; users nearest their Recoverable Items limit, mostly mailboxes on hold, are the ones likely to notice and ask questions.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[2].ui; Governance controls / admin-path: The cited article gives Exchange admin center > Compliance management > Retention policies for creating the policy containing the Recoverable Items tag. | Found: In the EAC, go to Compliance management > Retention policies, and then select Add | Fix: Flag this as conflicting legacy guidance rather than an unqualified current portal path: the cited article gives this EAC path, but https://learn.microsoft.com/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder says Exchange security and compliance features are no longer available in the new EAC. State both. | Source: https://learn.microsoft.com/purview/edisc-hold-increase-recoverable-item-quota
- [supported, minor] Cost and licensing / cost: Litigation Hold, In-Place Hold or an applicable Microsoft 365 or Office 365 retention policy automatically raises the stated baseline quotas to 90 GB and 100 GB. | Found: the quotas for the Recoverable Items folder are automatically increased to 90 GB and 100 GB, respectively, when you place a mailbox on Litigation Hold or In-Place Hold or if a Microsoft 365 or Office 365 retention policy is applied to the mailbox. | Fix: Retain these baseline figures but add the same page's archiving qualification: when archiving is enabled for a user on hold or assigned a retention policy, the primary mailbox's Recoverable Items warning quota rises to 95 GB and storage quota to 105 GB. The briefing recommends considering archiving, so distinguish its quotas. | Source: https://learn.microsoft.com/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The controls table covers every control the governance checklist asks administrators to inspect. | Found: Identify mailboxes on Litigation Hold, In-Place Hold or a retention policy, using Exchange Online PowerShell ... decide whether the archive mailbox and a retention policy tag ... fit your holds. Controls: display visibility, folder sizes, moving aged items. | Fix: Add documented rows for checking mailbox hold/retention status and archive-mailbox enablement, or narrow the checklist to the controls already in the table. The retention tag creation row is not a substitute for checking whether a mailbox's archive is enabled.
-->
