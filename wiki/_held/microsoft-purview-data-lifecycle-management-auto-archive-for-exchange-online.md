---
title: "Microsoft Purview: auto-archiving for Exchange Online mailboxes (GCC, GCC High and DoD)"
slug: "microsoft-purview-data-lifecycle-management-auto-archive-for-exchange-online"
roadmapId: 543427
topic: "governance"
products: ["Microsoft Purview"]
summary: "Exchange Online moves the oldest items from a nearly full primary mailbox to its archive mailbox. This roadmap item covers GCC, GCC High and DoD; Learn describes it as enabled by default for each mailbox."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn's auto-archiving page says the licence requirements are the same as for time-based archiving. The Purview service description lists the licences that provide user rights to enable an archive mailbox. No separate price is published."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["exchange","purview","data-lifecycle-management","archive-mailboxes","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 543427"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543427"
    kind: "roadmap"
  - title: "Auto-archiving in Exchange Online"
    url: "https://learn.microsoft.com/exchange/security-and-compliance/messaging-records-management/auto-archiving"
    kind: "learn"
  - title: "Learn about archive mailboxes"
    url: "https://learn.microsoft.com/purview/archive-mailboxes"
    kind: "learn"
  - title: "Enable archive mailboxes for Microsoft 365"
    url: "https://learn.microsoft.com/purview/enable-archive-mailboxes"
    kind: "learn"
  - title: "Enable auto-expanding archiving"
    url: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Organisation-wide auto-archiving threshold (percentage of mailbox quota) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    kind: "learn"
  - title: "Whether auto-archiving runs for a given mailbox (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailbox"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-increase-in-expansion-limit-for-us-government","microsoft-purview-data-lifecycle-management-increase-in-expansion-limit-for-auto-expanding"]
controls:
  - governs: "Organisation-wide auto-archiving threshold (percentage of mailbox quota)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-OrganizationConfig -AutoArchivingThresholdPercentage 90"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    note: "Learn: default 96, valid range 80 to 100; 100 disables auto-archiving for the tenant."
  - governs: "Whether auto-archiving runs for a given mailbox"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Mailbox <user mailbox> -AutoArchivingEnabled $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailbox"
    note: "Learn: the default setting is enabled."
  - governs: "Whether a user has an archive mailbox for auto-archiving to move items into"
    scope: "user"
    ui:
      surface: "Exchange admin center"
      path: "Recipients > Mailboxes > mailbox > Others > Mailbox archive > Manage mailbox archive > Mailbox archive"
      docs: "https://learn.microsoft.com/purview/enable-archive-mailboxes"
    api:
      kind: "powershell"
      call: "Enable-Mailbox -Identity <username> -Archive"
      docs: "https://learn.microsoft.com/purview/enable-archive-mailboxes"
    note: "Requires the Mail Recipients role in Exchange Online. Auto-archiving does not provision archive mailboxes."
  - governs: "Whether the archive can keep growing so auto-archiving can keep moving items"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Enable-Mailbox <user mailbox> -AutoExpandingArchive"
      docs: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    note: "Learn: cannot be turned off once enabled; the archive mailbox must already be enabled. Today's alternative to a full archive, not a control over auto-archiving."
  - governs: "Diagnostics for what auto-archiving moved in a mailbox"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Export-MailboxDiagnosticLogs -Identity <user mailbox> -ComponentName MRM"
      docs: "https://learn.microsoft.com/exchange/security-and-compliance/messaging-records-management/auto-archiving"
    note: "Read-only; shows the items archived and the trigger."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-23"
    note: "First briefing for roadmap item 543427, the GCC, GCC High and DoD listing of Exchange Online auto-archiving; Learn gives 96% where the roadmap says 95%."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 69
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "c808c6380b07cd5aa9a22a60b05e864b"
---

## What's changing

Auto-archiving is a threshold-based archiving feature for Exchange Online. When a user's primary mailbox crosses a share of its quota and the user has an archive mailbox, the oldest items move from the primary mailbox to the archive mailbox. The roadmap item gives the threshold as 95% of quota; Microsoft Learn gives 96% as the default and says an organisation can change it (see Scope and the controls table). Items tagged "Never Move to Archive" are excluded.

Learn says the Managed Folder Assistant monitors the primary mailbox size and archives the oldest items first until usage drops below the threshold. It attempts to move 3% of the quota in each run, does not archive data received less than 60 days ago, and applies the same logic to the Recoverable Items folder when it nears its quota. It complements the time-based archiving policy and does not change deletion or retention policies. Auto-archiving does not provision archive mailboxes and does not enable auto-expanding archives.

This roadmap item covers GCC, GCC High and DoD on the web platform, with status Launched, release phase General Availability and a target of February CY2026. Microsoft lists the feature under a second roadmap item, 515172, for Worldwide (Standard Multi-Tenant), also Launched. Learn's page still says the feature "enters public preview in November 2025" and links to item 515172; it does not say which clouds it covers.

## Why it matters

For an organisation with mailboxes that run close to quota, this changes what happens at the limit: Learn describes the goal as preventing mail flow disruptions by moving the oldest items to the archive before the quota is reached. Mailboxes with an archive mailbox and no auto-expanding archive can still be blocked from moving items when the archive is full, so the feature shifts the pressure to the archive rather than removing it.

Learn describes the per-mailbox setting as enabled by default, so a tenant that does nothing should expect the move to start for qualifying mailboxes. Service owners should decide the threshold, tell the help desk that older items may appear under Online Archive, and check which mailboxes have no archive.

## Risk assessment

**Data exposure**
- Items move between a user's primary and archive mailboxes. Learn says both are treated as the user's mailbox for compliance features such as Content search, Microsoft 365 retention and Litigation Hold, so the move does not by itself widen who can see the items.
- Learn says auto-archiving also processes mailboxes under retention hold and does not change deletion or retention behaviour. Check holds and eDiscovery searches cover the archive mailbox as well as the primary.

**Security & identity**
- Learn describes no new permission, app consent or identity for the feature. Enabling the archive mailbox that auto-archiving depends on needs the Mail Recipients role in Exchange Online.

**Autonomy & actions**
- The move runs from the Managed Folder Assistant without a user or admin approval once the threshold is crossed, and Learn says auto-archiving temporarily overrides existing archiving policies when triggered.
- Learn lists item classes that are not archived (IPM.Appointment, IPM.AppointmentSeries, IPM.Task, IPM.Contact, IPM.DistList, IPM.File and IPM.File.Document) and says items or folders tagged "Never Move to Archive" are excluded.

**Change & support**
- Users may find older items in the Online Archive tree; Learn says folder structure is preserved and mail stays accessible and searchable.
- If the archive mailbox is full and auto-expanding archive is not enabled, Learn says auto-archiving does not move items, so a user can still hit the primary quota. The same Learn page says auto-archiving can't be disabled at the organisation level, yet also says a threshold of 100 disables it for the tenant; test the setting before relying on it.

## Cost and licensing

Learn's auto-archiving page says the licence requirements are the same as for time-based archiving, and points to the Microsoft 365 licensing guidance for email archiving. That guidance, in the Purview service description, lists the licences that provide user rights to enable an archive mailbox: an archive limited to 50 GB with Exchange Online Plan 1 or Office 365 E1; limited to 1.5 TB with Exchange Online Archiving, Exchange Online Plan 2, Microsoft 365 E3/A3/G3, Microsoft 365 Business Premium or Office 365 E3/A3/G3; and limited to 3 TB with Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5 and the Microsoft Purview Suite family.

The auto-archiving page states no separate price or meter. Indirect costs are admin time and the archive storage that moved items consume. Auto-archiving does not provision archive mailboxes, so users without one need one enabled first.

## Scope

- **Users:** Learn requires that the archive mailbox is provisioned for the user and has remaining storage capacity, and that the Exchange Online user is enabled unless RecipientTypeDetails is SharedMailbox.
- **Threshold:** the roadmap item states 95% of quota; Learn gives a default of 96 with a valid range of 80 to 100, set at organisation level, and the setting can be turned on or off per mailbox.
- **Quotas:** Learn says the ProhibitSendReceiveQuota (visible items) and RecoverableItemsQuota (Recoverable Items folders) are evaluated independently.
- **Clouds and platform:** the roadmap record lists GCC, GCC High and DoD, on the web platform, and phase General Availability. The auto-archiving page does not state clouds.
- **Roles:** enabling an archive mailbox needs the Mail Recipients role in Exchange Online, held by default by the Recipient Management and Organization Management role groups.

## Governance guidance

### Before rollout
- Identify mailboxes near quota and confirm each has an archive mailbox, because auto-archiving does not create one; enable missing archives in the Exchange admin center or with Enable-Mailbox -Archive.
- Decide the organisation threshold with Set-OrganizationConfig -AutoArchivingThresholdPercentage and whether any mailbox needs auto-archiving switched off with Set-Mailbox -AutoArchivingEnabled.
- Decide whether heavy users also need auto-expanding archiving, noting Learn says it cannot be turned off once enabled.
- Brief the service desk that items may appear under Online Archive and that "Never Move to Archive" tags exclude items.

### At rollout
- Confirm which cloud and release your tenant is in, since the Learn page does not state cloud availability.
- Apply the chosen threshold and any per-mailbox exceptions before the first mailboxes cross it.
- Check holds and retention policies cover the archive mailbox for users who will be auto-archived.

### After rollout
- Run Export-MailboxDiagnosticLogs with -ComponentName MRM on sample mailboxes to confirm what was archived and why.
- Review mailboxes where the archive is full and auto-expanding archiving is off, since items are not moved there.
- Re-open the Learn page for changes to the threshold, preview wording and cloud notes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Organisation-wide auto-archiving threshold (percentage of mailbox quota)</strong><br><small>Tenant</small><br><small class="controls__note">Learn: default 96, valid range 80 to 100; 100 disables auto-archiving for the tenant.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -AutoArchivingThresholdPercentage 90</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether auto-archiving runs for a given mailbox</strong><br><small>User</small><br><small class="controls__note">Learn: the default setting is enabled.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Mailbox &lt;user mailbox&gt; -AutoArchivingEnabled $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailbox" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a user has an archive mailbox for auto-archiving to move items into</strong><br><small>User</small><br><small class="controls__note">Requires the Mail Recipients role in Exchange Online. Auto-archiving does not provision archive mailboxes.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Recipients › Mailboxes › mailbox › Others › Mailbox archive › Manage mailbox archive › Mailbox archive <a href="https://learn.microsoft.com/purview/enable-archive-mailboxes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Enable-Mailbox -Identity &lt;username&gt; -Archive</code> <a href="https://learn.microsoft.com/purview/enable-archive-mailboxes" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the archive can keep growing so auto-archiving can keep moving items</strong><br><small>User</small><br><small class="controls__note">Learn: cannot be turned off once enabled; the archive mailbox must already be enabled. Today's alternative to a full archive, not a control over auto-archiving.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Enable-Mailbox &lt;user mailbox&gt; -AutoExpandingArchive</code> <a href="https://learn.microsoft.com/purview/enable-autoexpanding-archiving" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Diagnostics for what auto-archiving moved in a mailbox</strong><br><small>User</small><br><small class="controls__note">Read-only; shows the items archived and the trigger.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Export-MailboxDiagnosticLogs -Identity &lt;user mailbox&gt; -ComponentName MRM</code> <a href="https://learn.microsoft.com/exchange/security-and-compliance/messaging-records-management/auto-archiving" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All documented automation is Exchange Online PowerShell; Microsoft Learn documents no admin centre setting for the threshold or per-mailbox switch at the time of writing (November 2026). The organisation threshold and the per-mailbox switch are separate: Learn gives the threshold as an organisation setting and the on/off switch per mailbox. Learn's considerations list says auto-archiving can't be disabled at organisation level, while its threshold section and the archive mailboxes page say a threshold of 100 disables it for the tenant. The auto-expanding row is today's way to avoid a full archive and does not itself control auto-archiving. The Mail Recipients role is the role Learn names for enabling archive mailboxes; Learn gives no role for the threshold cmdlet.

## Open questions

- Which threshold applies in GCC, GCC High and DoD: the roadmap's 95% or Learn's 96% default? Watch the roadmap item and the auto-archiving Learn page.
- Does Learn's auto-archiving page apply unchanged in the GCC, GCC High and DoD clouds, given it names no clouds and still describes a November 2025 public preview?
- Can auto-archiving be disabled for the whole organisation, given the page's considerations list and its threshold note disagree?
- What happens when a mailbox is over the threshold but most items were received less than 60 days ago?
- Is there an admin centre setting, or audit event, for auto-archiving in addition to PowerShell diagnostics?

<!-- rationale
risk: Medium. Learn says auto-archiving is enabled by default per mailbox and moves the oldest items to the archive without a user or admin step; the threshold and per-mailbox switches are documented, but only in PowerShell.
cost: Low. Learn's Pricing section gives the same licence requirements as time-based archiving and states no separate price or meter; the cost is admin time and an archive-capable licence for each affected user.
impact: Medium. Users whose primary mailbox crosses the threshold and who have an archive mailbox find their oldest items under Online Archive; mailboxes below the threshold, or without an archive, see no move.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: 3 TB tier / licensing: Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5 provide a 3 TB archive limit without any stated service-plan qualification. | Found: For E5 licenses, verify that **Records Management** is selected and remains enabled in the user's license settings. | Fix: After the archive-limit sentence, add: 'For E5 licences, verify that Records Management is selected and remains enabled in the user's licence settings.' Cite https://learn.microsoft.com/purview/archive-mailboxes. | Source: https://learn.microsoft.com/purview/archive-mailboxes
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / record: Roadmap item 515172 lists this feature for Worldwide (Standard Multi-Tenant). | Found: "id": 515172, "title": "Microsoft Purview: Data Lifecycle Management-Auto-Archive for Exchange Online", "clouds": [ "Worldwide (Standard Multi-Tenant)" ] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=515172 to sources, titled 'Microsoft 365 Roadmap 515172', with kind roadmap.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist tells readers to check holds and retention policies, but these controls have no table row. | Found: Check holds and retention policies cover the archive mailbox for users who will be auto-archived. ... Table rows cover threshold, mailbox enablement, archive enablement, auto-expanding archiving and diagnostics, not holds or retention policies. | Fix: Remove the At rollout checklist bullet 'Check holds and retention policies cover the archive mailbox for users who will be auto-archived.' It names controls absent from the table; do not add a row as part of this correction.
-->
