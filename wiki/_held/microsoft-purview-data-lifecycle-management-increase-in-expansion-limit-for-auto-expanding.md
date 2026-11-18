---
title: "Microsoft Purview: auto-expanding archive limit rises from 1.5 TB to 3 TB for eligible mailboxes"
slug: "microsoft-purview-data-lifecycle-management-increase-in-expansion-limit-for-auto-expanding"
roadmapId: 560820
topic: "governance"
products: ["Microsoft Purview"]
summary: "Eligible Exchange Online archive mailboxes with auto-expanding archiving on can now grow to 3 TB instead of 1.5 TB. Needs an E5-level licence; Microsoft says no action is required if the feature is already on."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The 3 TB ceiling applies to mailboxes assigned an eligible licence such as Office 365 E5 or Microsoft 365 E5 (full list on Microsoft Learn). Microsoft's notice says no per-GB consumption charge is introduced."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","data-lifecycle-management","exchange","licensing","retention","powershell"]
sources:
  - title: "MC1472592: (Updated) Microsoft Purview: Auto-expanding archive capacity increases to 3 TB for eligible mailboxes"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1472592"
    kind: "message-center"
  - title: "Enable auto-expanding archiving"
    url: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    kind: "learn"
  - title: "Learn about auto-expanding archiving"
    url: "https://learn.microsoft.com/purview/autoexpanding-archiving"
    kind: "learn"
  - title: "Learn about archive mailboxes"
    url: "https://learn.microsoft.com/purview/archive-mailboxes"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 560820"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560820"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-lifecycle-management-azure-pst-import"]
controls:
  - governs: "Auto-expanding archiving for the whole organisation"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-OrganizationConfig -AutoExpandingArchive"
      docs: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    note: "Exchange Online PowerShell. Needs global administrator or Organization Management. Cannot be turned off once on. Learn says the Exchange admin center and Purview portal cannot enable it."
  - governs: "Auto-expanding archiving for specific users"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Enable-Mailbox <user mailbox> -AutoExpandingArchive"
      docs: "https://learn.microsoft.com/purview/enable-autoexpanding-archiving"
    note: "The user's archive mailbox must already be enabled. A role group with the Mail Recipients role is enough for specific users. Cannot be turned off once on."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: archive ceiling rises from 1.5 TB to 3 TB for eligible licences; roadmap status Launched, rollout October 2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 65
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "e14ecea9278dc1da191f9ec0a22f1242"
---

## What's changing

Microsoft is raising the maximum size of an auto-expanding archive for eligible Exchange Online archive mailboxes from 1.5 TB to 3 TB. The roadmap item describes the old behaviour as expansion supported only up to 1.5 TB, after which mailboxes would become inoperative, and says archives can now expand beyond that limit for customers with eligible E5 licences.

Microsoft's notice MC1472592 (updated 28 September 2026) gives the detail. Eligible mailboxes that already have auto-expanding archiving enabled can grow to a maximum of 3 TB per mailbox. No additional configuration is required for them, no per-GB consumption charge is introduced, existing archive content, retention configurations, policies and holds are unchanged, and no new administrator workflow or user interface is introduced. Mailboxes without an eligible licence stay limited to 1.5 TB.

The roadmap item is Launched, General Availability, Worldwide (Standard Multi-Tenant), Web, with a target of October CY2026. The notice gives a rollout of mid-October 2026, expected to complete by late October 2026, and no act-by date. Microsoft Learn carries the same notice on its archive pages, while the body text of "Learn about auto-expanding archiving" still describes a 1.5 TB maximum at the time of writing (November 2026).

## Why it matters

The archive ceiling now depends on the licence assigned to each mailbox, so a tenant with a mix of E5 and lower licences has two limits: 3 TB and 1.5 TB. Heavy archive users on eligible licences gain headroom without a support request; users on other licences hit the old ceiling exactly as before.

Because the feature arrives with no admin action for mailboxes that already have auto-expanding archiving on, the work is communication and licence review: update help desk and retention guidance, and decide what to do for users with large archives who are not eligible. Microsoft's notice recommends the same. Note that the growth-rate rule is unchanged on Learn: auto-expanding archiving supports mailboxes with a growth rate that does not exceed 1 GB per day.

## Risk assessment

**Data exposure**
- Microsoft's notice says existing archive content, retention policies and holds are unchanged. Learn states that eDiscovery tools such as Content Search also search the extra storage areas of an auto-expanded archive and that holds cover content located there, so larger archives mean more content in scope of searches and holds.

**Security & identity**
- No new permission or identity is described. Enabling auto-expanding archiving still needs a global administrator, a member of the Organization Management role group, or, for specific users, a role group that includes the Mail Recipients role.

**Autonomy & actions**
- Once auto-expanding archiving is on, extra storage is added automatically; Learn says administrators cannot adjust the storage quota and that the feature, once turned on for an organisation or user, cannot be turned off. A higher ceiling means these irreversible settings now cover up to 3 TB for eligible mailboxes.

**Change & support**
- Eligibility follows the licence on each mailbox, so users may ask why a colleague's archive keeps growing and theirs stops at 1.5 TB. For E5 licences, Learn says to verify that Records Management is selected and remains enabled in the user's license settings.
- Learn states that after an auto-expanded storage area exists, users cannot delete folders from the archive, and that enabling auto-expanding archiving prevents recovering or restoring an inactive mailbox. These limits are not new, but they apply to more content as archives grow.

## Cost and licensing

The increase applies to mailboxes assigned one of these licences, as listed on Microsoft Learn: Office 365 E5, A5 or G5; Microsoft 365 E5, A5 or G5; Microsoft 365 Purview Suite; Microsoft 365 Purview Suite FLW, EDU or GOV; Microsoft Defender + Purview Suite FLW; Microsoft 365 F5 Compliance; Microsoft 365 F5 Security + Compliance; or the combination of the eDiscovery & Audit, Insider Risk Management and Information Protection & Governance mini suites. Learn adds that qualifying offerings that include Microsoft Purview E5 capabilities, such as E7, also support the increase, and that for all other licences the existing 1.5 TB limit remains unchanged.

Microsoft's notice says no per-GB consumption charge is introduced, and Learn says that if auto-expanding archiving is already enabled, no additional configuration or per-GB charge applies. Indirect costs are admin time to check licence assignments and to update documentation, and any licence change for users whose archives need more than 1.5 TB. Microsoft Learn states no price for moving a user to an eligible licence on these pages.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists no other cloud; whether the G5 and GOV licences in the eligibility list matter for other clouds is not stated (see Open questions).

The change applies to Exchange Online archive mailboxes that have auto-expanding archiving enabled and an eligible licence. Auto-expanding archiving also supports shared mailboxes, needs the user's archive mailbox to be enabled first, and is supported for cloud-based archive mailboxes in an Exchange hybrid deployment, not for on-premises mailboxes. Learn says the feature cannot be enabled from the Exchange admin center or the Microsoft Purview portal; Exchange Online PowerShell is required.

## Governance guidance

### Before rollout
- Identify users with large archive mailboxes and check which licence each holds against the eligible list in Cost and licensing; Microsoft's notice recommends this review.
- Verify that Records Management is selected and enabled in the licence settings of E5 users, as Learn instructs.
- Decide whether auto-expanding archiving should be on for the whole organisation or only for specific users, using the two controls in the table below, and note that both are irreversible once applied.

### At rollout
- Confirm that mailboxes that should benefit already have auto-expanding archiving enabled; Microsoft's notice says no action is needed for those that do.
- Update help desk and retention guidance to state the 3 TB ceiling for eligible licences and the 1.5 TB ceiling for all others.

### After rollout
- Monitor archive mailbox growth with Exchange Online PowerShell, as Microsoft's notice recommends, and flag mailboxes approaching their applicable limit.
- Review licensing and retention strategy for users with non-eligible licences whose archives are nearing 1.5 TB.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Auto-expanding archiving for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell. Needs global administrator or Organization Management. Cannot be turned off once on. Learn says the Exchange admin center and Purview portal cannot enable it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -AutoExpandingArchive</code> <a href="https://learn.microsoft.com/purview/enable-autoexpanding-archiving" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Auto-expanding archiving for specific users</strong><br><small>User</small><br><small class="controls__note">The user's archive mailbox must already be enabled. A role group with the Mail Recipients role is enough for specific users. Cannot be turned off once on.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Enable-Mailbox &lt;user mailbox&gt; -AutoExpandingArchive</code> <a href="https://learn.microsoft.com/purview/enable-autoexpanding-archiving" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls sit in Exchange Online PowerShell. Learn says the Exchange admin center and the Microsoft Purview portal cannot enable auto-expanding archiving, so there is no admin centre path. To check state, Learn gives `Get-OrganizationConfig | FL AutoExpandingArchiveEnabled` for the organisation and `Get-Mailbox <user mailbox> | FL AutoExpandingArchiveEnabled` for a user; running the organisation-wide command does not change the property on user mailboxes to True.

Neither control selects the 1.5 TB or 3 TB ceiling: Microsoft's notice ties the ceiling to the licence, and Learn says administrators cannot adjust the storage quota. Enabling for a specific user whose mailbox is on hold or assigned to a retention policy also adds 10 GB to the archive quota.

## Open questions

- Do shared mailboxes, which Learn says auto-expanding archiving supports, qualify for 3 TB, and which licence decides it? Watch the Learn page "Enable auto-expanding archiving".
- The eligible list includes G5 and GOV licences but the roadmap item lists only Worldwide (Standard Multi-Tenant). Will the 3 TB limit reach other clouds, and when? Watch Message center and the roadmap item.
- What happens to an archive that has grown past 1.5 TB if the user's eligible licence is later removed? Microsoft has not stated it on the pages for this change.
- When will the "Learn about auto-expanding archiving" body text, which still says 1.5 TB, be updated to the 3 TB limit?

<!-- rationale
risk: Low. Microsoft's notice says existing archive content, retention policies and holds are unchanged and no new admin workflow or user interface is introduced; the change raises a storage ceiling.
cost: Low. Microsoft's notice says no per-GB consumption charge is introduced; the cost is admin time and a licence check, because mailboxes without an eligible licence stay at 1.5 TB.
impact: Low. Administrators and the users with the largest archives notice it; no change to what users see is described, and mailboxes without an eligible licence are unaffected.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; controls[1].note; Governance controls table; Governance guidance: Before rollout / command: Enable-Mailbox <user mailbox> -AutoExpandingArchive is presented as the per-user enablement option without the hybrid restriction. | Found: In an Exchange hybrid deployment, you can't use the Enable-Mailbox -AutoExpandingArchive command to enable auto-expanding archiving for a specific user whose primary mailbox is on-premises and whose archive mailbox is cloud-based. | Fix: Keep the call, but append to controls[1].note and the corresponding rendered note: 'This per-user command requires both the primary and archive mailboxes to be cloud-based. For an on-premises primary mailbox with a cloud-based archive, use Set-OrganizationConfig -AutoExpandingArchive in Exchange Online PowerShell to enable auto-expanding archiving for the entire organisation.' Qualify the Before rollout choice of organisation-wide or per-user enablement with the same restriction. | Source: https://learn.microsoft.com/purview/enable-autoexpanding-archiving
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks administrators to check Records Management in licence settings, but neither controls-table row covers that setting. | Found: Verify that Records Management is selected and enabled in the licence settings of E5 users, as Learn instructs. / Auto-expanding archiving for the whole organisation / Auto-expanding archiving for specific users | Fix: Remove the Records Management verification bullet from the Before rollout checklist; retain the verified licensing prerequisite under Risk assessment. This removes the checklist/table mismatch without adding an unverified control path.
-->
