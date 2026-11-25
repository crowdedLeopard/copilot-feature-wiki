---
title: "PowerPoint on Mac: Copilot Agent Mode creates presentations from Work IQ"
slug: "m365-copilot-create-presentations-with-work-iq-using-agent-mode-in-powerpoint-555872"
roadmapId: 555872
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Agent Mode in PowerPoint on Mac can build a presentation from a user's Work IQ: files, meetings and emails. The roadmap shows it as Launched; Microsoft has not stated whether an administrator has to act."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview lists work data and Work IQ with the Microsoft 365 Copilot (Premium) add-on licence, and web data only with the Basic experience. A licence or credit rule specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","work-iq","licensing","macos"]
sources:
  - title: "Microsoft 365 Roadmap 555872"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555872"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-create-presentations-with-work-iq-using-agent-mode-in-powerpoint","work-iq","m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555897"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Needs at least the License Administrator or User Administrator role. Existing licence control; its pages do not mention this feature."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-21T23:00:01"
changes:
  - date: "2026-11-25"
    note: "New briefing for the Mac item; the web item is listed separately as roadmap item 555873, and the release notes tag the feature for Windows."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 45 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 45
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "71a6da2ef9f8afc963cc7f56e416dcc3"
---

## What's changing

The roadmap item states that Agent Mode in PowerPoint can now create presentations based on a user's Work IQ, so the user no longer has to find the right files, meetings and emails before building slides. This page covers PowerPoint on Mac. Microsoft lists the same feature under a second roadmap item, 555873, for the web. Both records show Launched, March CY2026, General Availability and Worldwide (Standard Multi-Tenant), so the two pages differ only by platform.

Microsoft's Work IQ overview describes Work IQ as a workplace intelligence layer that lets agents access and reason over organizational and business data. A Microsoft 365 Copilot release-notes entry dated 1 July 2026 says Copilot in PowerPoint now uses Work IQ to gather relevant files, meetings and emails to help build presentations. A separate entry in the same release notes, titled "Create presentations with Work IQ using Agent Mode in Copilot in PowerPoint", is tagged [Windows] and does not list Mac. The roadmap record and the release notes therefore differ on platform, and this page follows the roadmap record for Mac.

Microsoft Learn has no page for this capability on Mac at the time of writing (November 2026), so what follows about behaviour beyond the roadmap description comes from the release notes and the Work IQ overview. The roadmap record gives no default, rollout mechanics or prerequisites.

## Why it matters

The change widens what a Copilot-licensed user can pull into a PowerPoint deck: files, meetings and emails reached through Work IQ. For a service owner the question is less about the feature than about what those users can already reach. Microsoft's Work IQ overview says actions are user scoped, so every request runs in the context of a specific user and accesses what that user is allowed to see or do. Oversharing in SharePoint, OneDrive or Teams is therefore what shows up in generated slides.

Microsoft has not stated what happens on arrival or whether an administrator has to enable anything, so no source says existing behaviour changes. Treat this as a capability that licensed PowerPoint users on Mac may already have, and review it now rather than wait for a notice.

## Risk assessment

**Data exposure**

- Work IQ gathers files, meetings and emails into a new deck. The release-notes entry says the integration accesses only authorized content, and the Work IQ overview says requests run as the specific user, so the exposure is whatever the user can already open. Broad SharePoint or OneDrive permissions become material that the agent can compose into slides.
- The roadmap item does not say where a generated presentation is saved or which sensitivity labels it inherits from source content. Check this in a pilot before relying on it.

**Security & identity**

- The Work IQ overview describes actions as user scoped. Neither the roadmap item nor the release notes describe a separate identity for this feature.

**Autonomy & actions**

- The roadmap describes the agent finding content and composing slides. It does not describe sending or sharing anything. Treat the output as a draft that the author reviews before it leaves their hands.

**Change & support**

- Microsoft lists Mac, web and Windows separately, and the release notes tag the feature [Windows] only, so users on different platforms may see it at different times. Expect questions from users without the Microsoft 365 Copilot add-on licence, because the Copilot overview describes different experiences with and without it.

## Cost and licensing

**Licence.** Microsoft's Copilot overview says users with the Microsoft 365 Copilot add-on licence have the full experience of Copilot in Word, Excel, PowerPoint and OneNote. Its comparison table lists work data (Microsoft Graph and Work IQ) in the Microsoft 365 Copilot (Premium) column and web data only in the Basic columns. The Work IQ overview says that for Microsoft 365 Copilot licensed users, Work IQ is available in all Microsoft 365 Copilot experiences and agents.

**Meter.** The Work IQ overview says Work IQ is subject to usage-based billing for custom and third-party agents. The roadmap item describes no meter for this feature.

**Not yet published.** A licence or credit rule specific to Agent Mode in PowerPoint on Mac is not yet published at the time of writing (November 2026), including whether users on a Basic experience can use the Work IQ option. Indirect costs are admin time to review permissions and user communication.

## Scope

- **Users and licences:** Microsoft 365 Copilot (Premium) licensed users are the audience the Copilot overview ties to work data and Work IQ; whether other users get the Work IQ option in Agent Mode is not stated.
- **Roles:** assigning licences needs at least the License Administrator or User Administrator role, per the Microsoft 365 admin center licence page.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Platform:** this item is Mac. The web is roadmap item 555873. The release notes tag the Work IQ presentation entry [Windows].
- **Status:** Launched, General Availability, target March CY2026.
- **Prerequisites and rollout mechanics:** not given in the roadmap record.

## Governance guidance

### Before rollout

- Check which users hold the Microsoft 365 Copilot licence, using the licence row in the controls table, because the Copilot overview ties the full Copilot experience in PowerPoint and work data to it.
- Tell PowerPoint users on Mac that a deck can draw on their own files, meetings and emails, and that they review it before sharing.

### At rollout

- Test with a licensed pilot user in PowerPoint on Mac and record whether creating a presentation from Work IQ is available.
- Test the same with a user who does not hold the add-on licence and record what they see.

### After rollout

- Sample generated decks for content from meetings or files that the author did not intend to include.
- Watch Message center and the Microsoft 365 Copilot release notes for a page that documents this capability on Mac, its default and any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence</strong><br><small>User</small><br><small class="controls__note">Needs at least the License Administrator or User Administrator role. Existing licence control; its pages do not mention this feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The one row is the existing way to decide who holds the Microsoft 365 Copilot licence. The pages that document it do not mention this feature, so it is an indirect control over who gets the full Copilot experience, not a setting for this capability. Assigning licences needs at least the License Administrator or User Administrator role. The same Learn page points to group-based licensing as another route.

## Open questions

- Does Microsoft provide an admin setting that turns off creating presentations from Work IQ in Agent Mode, separate from the Copilot licence? Watch the Microsoft 365 Copilot release notes and Message center.
- Is the feature available on Mac as the roadmap record states, given that the release-notes entry is tagged [Windows]?
- Can users on a Microsoft 365 Copilot (Basic) experience use the Work IQ option, or only users with the add-on licence?
- Where are generated presentations saved, and which sensitivity labels apply to content gathered from labelled files?

<!-- rationale
risk: Medium. The agent gathers a user's files, meetings and emails into new slides, and Microsoft says Work IQ requests run in that user's context, so existing permissions decide what can surface in a deck.
cost: Low. The roadmap item names no meter or price; the known cost is the Microsoft 365 Copilot add-on licence that Microsoft's Copilot overview ties to work data and Work IQ, plus admin time. A rule specific to this feature is not yet published.
impact: Medium. Copilot-licensed people who use PowerPoint on Mac notice it directly; the roadmap record lists the Mac platform and Worldwide (Standard Multi-Tenant) only.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Change & support; Scope; Open questions; front matter: changes / availability: The named release-note entry is tagged Windows and does not list Mac, which the briefing describes as a platform disagreement. | Found: Create presentations with Work IQ using Agent Mode in Copilot in PowerPoint [Windows] Roadmap ID: 555874 | Fix: Replace the sentences beginning 'A Microsoft 365 Copilot release-notes entry' through 'follows the roadmap record for Mac' with: 'The Microsoft 365 Copilot release notes dated 1 July 2026 describe the Windows counterpart, roadmap item 555874, under "Create presentations with Work IQ using Agent Mode in Copilot in PowerPoint". That entry says Work IQ gathers relevant files, meetings and emails to help build presentations; it does not confirm the Mac implementation described by roadmap item 555872.' In the second Open question, replace 'given that the release-notes entry is tagged [Windows]' with 'given that the release notes describe the Windows counterpart'. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [supported, minor] front matter: cost; rationale: cost / cost: The briefing rates this included capability's cost low, while its rationale also calls the existing Copilot add-on licence a known cost. | Found: Work IQ is included with Microsoft 365 Copilot (Premium), whereas the Work IQ API is a distinct usage-based billing offering | Fix: Keep cost low for the existing licensed audience, but replace the cost rationale with: 'Low. For users who already hold Microsoft 365 Copilot (Premium), Work IQ is included; the known incremental costs of this change are admin review and user communication. A licence or credit rule specific to this Mac capability is not yet published.' This distinguishes the existing product licence from the incremental cost of the change. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
-->
