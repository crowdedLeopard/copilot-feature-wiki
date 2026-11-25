---
title: "Microsoft Purview: auto-expanding archive limit rises to 3 TB for eligible mailboxes in GCC, GCC High and DoD"
slug: "microsoft-purview-data-lifecycle-management-increase-in-expansion-limit-for-us-government"
roadmapId: 573702
topic: "governance"
products: ["Microsoft Purview"]
summary: "Eligible Exchange Online archive mailboxes with auto-expanding archiving on can grow to 3 TB instead of 1.5 TB in GCC, GCC High and DoD. Microsoft says no action is needed where the feature is already on."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The 3 TB ceiling applies to mailboxes assigned an eligible licence such as Office 365 G5 or Microsoft 365 G5 (full list on Microsoft Learn); all other licences stay at 1.5 TB. Microsoft's notice says no per-GB consumption charge is introduced."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","data-lifecycle-management","exchange","archive-mailboxes","licensing","retention","powershell","ediscovery","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 573702"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573702"
    kind: "roadmap"
  - title: "MC1521615: Microsoft Purview: Data Lifecycle Management increases the auto-expanding archive limit from 1.5 TB to 3 TB"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1521615"
    kind: "message-center"
  - title: "Learn about auto-expanding archiving"
    url: "https://learn.microsoft.com/purview/autoexpanding-archiving"
    kind: "learn"
  - title: "Enable auto-expanding archiving"
    url: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-increase-in-expansion-limit-for-auto-expanding","microsoft-purview-data-lifecycle-management-graph-api-support-for-archive-ma-us-government"]
controls:
  - governs: "Auto-expanding archiving for the whole organisation"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-OrganizationConfig -AutoExpandingArchive"
      docs: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    note: "Exchange Online PowerShell. Needs global administrator or Organization Management. Can't be turned off once on. Learn says the Exchange admin center and Purview portal can't enable it."
  - governs: "Auto-expanding archiving for specific users"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Enable-Mailbox <user mailbox> -AutoExpandingArchive"
      docs: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    note: "Archive mailbox must be enabled first; Mail Recipients role suffices. Can't be turned off. Needs cloud primary and archive mailboxes; for an on-premises primary with a cloud archive, use Set-OrganizationConfig -AutoExpandingArchive."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-19"
    note: "First briefing for the GCC, GCC High and DoD roadmap item (In development, target November CY2026, notice MC1521615): the 3 TB ceiling for eligible licences and the two PowerShell controls."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
  - date: "2026-11-25"
    note: "Roadmap status moved from In development to Launched; the notice still gives a mid-November to early December 2026 rollout for GCC, GCC High and DoD. Ratings, licences and controls re-checked and unchanged."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 78
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "d54a9333aeb3c1482b5233d2278d1994"
---

## What's changing

Microsoft is raising the maximum size of an auto-expanding archive for eligible Exchange Online archive mailboxes from 1.5 TB to 3 TB. This briefing covers roadmap item 573702, which lists GCC, GCC High and DoD; Microsoft lists the same feature under a separate roadmap item, 560820, for Worldwide (Standard Multi-Tenant), which has its own briefing. The roadmap description says expansion was supported only up to 1.5 TB, after which mailboxes would become inoperative, and that archives can now expand beyond that limit for customers with eligible E5 licences.

Microsoft's notice MC1521615 (published 22 October 2026) gives the detail. Eligible mailboxes that already have auto-expanding archiving enabled can grow to a maximum of 3 TB per mailbox. The notice says no additional configuration is required for them, no per-GB consumption charge is introduced, existing archive content, retention configurations, policies and holds are unchanged, and no new administrator workflow or user interface is introduced. Mailboxes without an eligible licence stay limited to 1.5 TB.

The roadmap item now shows status Launched, General Availability, GCC, GCC High and DoD, Web, with a target of November CY2026. The notice gives a rollout for GCC, GCC High and DoD that begins in mid-November 2026 and is expected to complete by early December 2026, with no act-by date, so the roadmap status and the notice's expected completion date differ and a tenant may not have the change yet. Microsoft Learn's archive pages carry a banner with a rollout of mid-October to late October 2026 and no cloud named, and their body text still gives 1.5 TB as the limit at the time of writing (November 2026).

## Why it matters

The archive ceiling now depends on the licence assigned to each mailbox, so a tenant with a mix of eligible and other licences has two limits: 3 TB and 1.5 TB. Heavy archive users on eligible licences gain headroom without a support request; users on other licences reach the old ceiling as before, at which point Learn says no more data is stored in the auto-expanding archive.

The increase needs no admin action for mailboxes that already have auto-expanding archiving on, so the work is communication and licence review: update help desk and retention guidance, and decide what to do for users with large archives who are not eligible. Microsoft's notice recommends the same. Auto-expanding archiving itself is not switched on by this change: Learn says it is enabled in Exchange Online PowerShell, for the organisation or for specific users.

## Risk assessment

**Data exposure**
- Microsoft's notice says existing archive content, retention policies and holds are unchanged. Learn states that eDiscovery tools such as Content Search also search the additional storage areas of an auto-expanded archive and that content located there is also placed on hold, so larger archives mean more content in scope of searches and holds.

**Security & identity**
- No new permission or identity is described. Enabling auto-expanding archiving still needs a global administrator, a member of the Organization Management role group, or, for specific users, a member of a role group that includes the Mail Recipients role.

**Autonomy & actions**
- Once auto-expanding archiving is on, extra storage is added automatically; Learn says administrators can't adjust the storage quota and that, once turned on for an organisation or a user, it can't be turned off. A higher ceiling means these settings now cover up to 3 TB for eligible mailboxes.

**Change & support**
- Eligibility follows the licence on each mailbox, so users may ask why a colleague's archive keeps growing while theirs stops at 1.5 TB. For E5 licences, Learn says to verify that Records Management is selected and remains enabled in the user's license settings.
- Learn states that once an auto-expanded storage area exists, users can't delete folders from the archive, and that auto-expanding archiving prevents recovering or restoring an inactive mailbox. These limits are not new, but they apply to more content as archives grow.

## Cost and licensing

The increase applies to mailboxes assigned one of these licences, as listed on Microsoft Learn and in Microsoft's notice: Office 365 E5, A5 or G5; Microsoft 365 E5, A5 or G5; Microsoft 365 Purview Suite; Microsoft 365 Purview Suite FLW, EDU or GOV; Microsoft Defender + Purview Suite FLW; Microsoft 365 F5 Compliance; Microsoft 365 F5 Security + Compliance; or the combination of the eDiscovery & Audit, Insider Risk Management and Information Protection & Governance mini suites. Learn adds that qualifying offerings that include Microsoft Purview E5 capabilities, such as E7, also support the increase, and that for all other licences the existing 1.5 TB limit remains unchanged.

Microsoft's notice says no per-GB consumption charge is introduced, and Learn says that if auto-expanding archiving is already enabled, no additional configuration or per-GB charge applies. Indirect costs are admin time to check licence assignments and to update documentation, and any licence change for users whose archives need more than 1.5 TB.

## Scope

The roadmap record lists GCC, GCC High and DoD and the Web platform; Microsoft's notice gives a General Availability rollout for those clouds from mid-November 2026, expected to complete by early December 2026.

The change applies to Exchange Online archive mailboxes that have auto-expanding archiving enabled and an eligible licence. Auto-expanding archiving also supports shared mailboxes, needs the user's archive mailbox to be enabled first, and is supported for cloud-based archive mailboxes in an Exchange hybrid deployment, not for on-premises mailboxes. Learn says the feature can't be enabled from the Exchange admin center or the Microsoft Purview portal; Exchange Online PowerShell is required.

## Governance guidance

### Before rollout
- Review licence assignments for users with large archive mailboxes to confirm eligibility; Microsoft's notice recommends this.
- Decide whether auto-expanding archiving should be on for the whole organisation or only for specific users, using the two controls in the table below, and note that both are irreversible once applied. The per-user command requires both the primary and archive mailboxes to be cloud-based; for an on-premises primary mailbox with a cloud-based archive, Learn says to use the organisation-wide command.

### At rollout
- Tell the help desk and update retention guidance to state the 3 TB ceiling for eligible licences and the 1.5 TB ceiling for all others.
- Confirm with the Exchange administrators which mailboxes already have auto-expanding archiving enabled; Microsoft's notice says no action is needed for those that do.

### After rollout
- Plan for users on non-eligible licences whose archives are nearing 1.5 TB: Learn says no more data is stored in the auto-expanding archive at that size, so decide on a licence or retention action before they get there.
- Tell users that once an auto-expanded storage area exists they can't delete folders from the archive.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Auto-expanding archiving for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell. Needs global administrator or Organization Management. Can't be turned off once on. Learn says the Exchange admin center and Purview portal can't enable it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -AutoExpandingArchive</code> <a href="https://learn.microsoft.com/purview/enable-autoexpanding-archiving" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Auto-expanding archiving for specific users</strong><br><small>User</small><br><small class="controls__note">Archive mailbox must be enabled first; Mail Recipients role suffices. Can't be turned off. Needs cloud primary and archive mailboxes; for an on-premises primary with a cloud archive, use Set-OrganizationConfig -AutoExpandingArchive.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Enable-Mailbox &lt;user mailbox&gt; -AutoExpandingArchive</code> <a href="https://learn.microsoft.com/purview/enable-autoexpanding-archiving" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls sit in Exchange Online PowerShell. Learn says the Exchange admin center and the Microsoft Purview portal can't enable auto-expanding archiving, so there is no admin centre path. To check state, Learn gives `Get-OrganizationConfig | FL AutoExpandingArchiveEnabled` for the organisation and `Get-Mailbox <user mailbox> | FL AutoExpandingArchiveEnabled` for a user; running the organisation-wide command does not change the property on user mailboxes to True.

Neither control selects the 1.5 TB or 3 TB ceiling: Microsoft's notice ties the ceiling to the licence, and Learn says administrators can't adjust the storage quota. Enabling for a specific user whose mailbox is on hold or assigned to a retention policy also adds 10 GB to the archive quota.

## Open questions

- Do the rollout dates in the banner on Learn's auto-expanding archiving pages (mid-October to late October 2026, no cloud named) apply to GCC, GCC High and DoD, whose notice gives mid-November to early December 2026? Watch Message center and the Learn pages.
- What happens to an archive that has grown past 1.5 TB if the user's eligible licence is later removed? Learn's archive pages do not say; watch the "Learn about auto-expanding archiving" page.
- The roadmap item describes mailboxes becoming inoperative at 1.5 TB, while Learn says no more data is stored in the auto-expanding archive at that size. Which describes what an affected user sees? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. Microsoft's notice says existing archive content, retention policies and holds are unchanged; the change raises a storage ceiling for mailboxes that already have auto-expanding archiving, which an administrator turned on.
cost: Low. Microsoft's notice MC1521615 says no per-GB consumption charge is introduced; the cost is admin time and a licence check, because mailboxes without an eligible licence stay at 1.5 TB.
impact: Low. Administrators and the users with the largest archives notice it; the notice says no new workflow or user interface is introduced, and mailboxes without an eligible licence are unaffected.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist directs administrators to review licence assignments, but the controls table contains no corresponding licence-assignment row. | Found: Review licence assignments for users with large archive mailboxes to confirm eligibility; Microsoft's notice recommends this. The two controls rows govern only organisation-wide and specific-user auto-expanding archiving. | Fix: The Before rollout licence-assignment review has no corresponding controls-table row. Remove that checklist bullet; retain the supported licence-review recommendation in Why it matters. Do not add a new control row in this correction.
-->
