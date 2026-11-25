---
title: "PowerPoint on the web: Copilot Agent Mode creates presentations from Work IQ"
slug: "m365-copilot-create-presentations-with-work-iq-using-agent-mode-in-powerpoint"
roadmapId: 555873
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Agent Mode in PowerPoint on the web can build a presentation from a user's Work IQ: their files, meetings and emails. Launched per the roadmap; Microsoft has not stated whether an administrator must act."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview describes a Basic experience in PowerPoint without the Microsoft 365 Copilot add-on licence and a full experience with it. Work IQ is available to licensed users in all Microsoft 365 Copilot experiences. A rule specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","work-iq","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 555873"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555873"
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
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["work-iq","m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-ag-555883","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555882"]
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
    note: "Needs at least the License Administrator or User Administrator role. Existing licence control; its page does not mention this feature."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-21T23:00:01"
changes:
  - date: "2026-11-25"
    note: "New briefing for the web item; Mac is listed separately as roadmap item 555872."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: the release-notes entry is marked Windows, licensing model is now included, and unsupported web steps, the one-prompt wording and the permissions-review step were removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 51 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 51
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6b4b30e7e98b4453031224d8c7af33ed"
---

## What's changing

The roadmap item states that Agent Mode in PowerPoint can now create presentations based on a user's Work IQ, so the user no longer has to find the right files, meetings and emails to build slides from. This item covers PowerPoint on the web. Microsoft lists the same feature under a second roadmap item, 555872, for Mac. Both records show Launched, March CY2026, General Availability and Worldwide (Standard Multi-Tenant), so the two pages differ only by platform.

Microsoft's Work IQ overview describes Work IQ as a workplace intelligence layer that lets agents access and reason over organizational and business data. A Microsoft 365 Copilot release-notes entry dated 1 July 2026, listed under roadmap ID 555874, says Copilot in PowerPoint now uses Work IQ to gather relevant files, meetings and emails for a presentation. Its steps are to open PowerPoint, select 'Edit with Copilot' and choose to create a presentation based on your Work IQ. That entry carries a different roadmap ID from this page and is explicitly marked Windows.

Microsoft Learn has no page for this capability on the web specifically at the time of writing (November 2026), so detail beyond the roadmap description and that release-notes entry is not available. The roadmap record gives no default, rollout mechanics or prerequisites.

## Why it matters

The change widens what a Copilot-licensed user can pull into a PowerPoint deck: files, meetings and emails reached through Work IQ. For a service owner the question is less about the feature and more about what those users can already reach. Microsoft says Work IQ requests run in the context of a specific user and access only what that user is allowed to see or do, so oversharing in SharePoint, OneDrive or Teams surfaces in generated slides.

Microsoft has not stated what happens on arrival or whether an administrator has to enable anything, so no source says existing behaviour changes. Treat this as a capability your licensed PowerPoint users on the web may already have, and review it rather than wait for a notice.

## Risk assessment

**Data exposure**

- Work IQ gathers files, meetings and emails into a new deck. Microsoft says its requests run as the specific user and reach only what that user is allowed to see, so the exposure is whatever the user can already open. Wide SharePoint or OneDrive permissions become content that an agent can compose into slides.
- The roadmap item does not say where a generated presentation is saved or which labels it inherits from the source content. Check this in a pilot before relying on it.

**Security & identity**

- The Work IQ overview describes actions as user scoped. Neither the roadmap item nor the release-notes entry describes a separate identity for this feature.

**Autonomy & actions**

- The roadmap describes the agent finding content and composing slides. It does not describe sending or sharing anything. Treat the output as a draft that a person reviews before it leaves their hands.

**Change & support**

- Users on the web, desktop and Mac may see the capability at different times, because Microsoft lists them under separate roadmap items. Expect questions from users without the Microsoft 365 Copilot add-on licence, since the Copilot overview describes a Basic experience in PowerPoint and a full one with the licence.

## Cost and licensing

**Licence.** Microsoft's Copilot overview says users with the Microsoft 365 Copilot add-on licence have the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and that users without it can use Copilot in those apps in a Basic experience subject to fair use limits. The Work IQ overview says that for Microsoft 365 Copilot licensed users, Work IQ is available in all Microsoft 365 Copilot experiences and agents.

**Meter.** The same Work IQ page says usage-based billing applies to custom and third-party agents, and that Work IQ API access is independent of Microsoft 365 Copilot licensing. The roadmap item describes no meter for this feature.

**Not yet published.** A licence or credit rule specific to Agent Mode in PowerPoint is not yet published at the time of writing (November 2026), including whether users on the Basic experience can use the Work IQ option. Indirect costs are admin time to review permissions and user communication.

## Scope

- **Users and licences:** Microsoft 365 Copilot licensed users are the clear audience; whether Basic-experience users get the Work IQ option is not stated.
- **Roles:** assigning licences needs at least the License Administrator or User Administrator role.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Platform:** this item is Web. Mac is roadmap item 555872.
- **Status:** Launched, General Availability, target March CY2026.
- **Prerequisites and rollout mechanics:** not given in the roadmap record.

## Governance guidance

### Before rollout

- Check which users hold the Microsoft 365 Copilot licence, using the licence row in the controls table, because the Copilot overview ties the full Copilot experience in PowerPoint to it.
- Tell PowerPoint users on the web that a deck can draw on their own files, meetings and emails, and that they review it before sharing.

### At rollout

- Test with a licensed pilot user in PowerPoint on the web and record whether creating a presentation from Work IQ is available.
- Test the same with a user who does not hold the add-on licence and record what they see.

### After rollout

- Sample generated decks for content from meetings or files the author did not intend to include.
- Watch Message center and the Microsoft 365 Copilot release notes for a page that documents this capability, its defaults and any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence</strong><br><small>User</small><br><small class="controls__note">Needs at least the License Administrator or User Administrator role. Existing licence control; its page does not mention this feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The one row is the existing way to decide who holds the Microsoft 365 Copilot licence. The page that documents it does not mention this feature, so it is an indirect control over who gets the full Copilot experience, not a setting for this capability. Assigning licences needs at least the License Administrator or User Administrator role. Group-based licensing is another route the same Learn page points to.

## Open questions

- Does Microsoft provide an admin setting that turns off creating presentations from Work IQ in Agent Mode, separate from the Copilot licence? Watch the Microsoft 365 Copilot release notes and Message center.
- Can users on the Microsoft 365 Copilot (Basic) experience use the Work IQ option, or only users with the add-on licence?
- Where are generated presentations saved, and which sensitivity labels apply to content gathered from labelled files?
- Which Work IQ sources does Agent Mode in PowerPoint use, and are SharePoint sites excluded through Restricted Content Discovery left out of the results?

<!-- rationale
risk: Medium. The feature gathers a user's files, meetings and emails into new slides, and Microsoft says Work IQ requests run in that user's context, so existing permissions decide what can be exposed.
cost: Low. The roadmap item names no meter or price; the known cost is the Microsoft 365 Copilot licence Microsoft ties to the full Copilot experience in PowerPoint, plus admin time. A licence rule specific to this feature is not yet published.
impact: Medium. People who use Copilot in PowerPoint on the web see it directly; the roadmap item lists the Web platform and Worldwide (Standard Multi-Tenant) only.
-->
