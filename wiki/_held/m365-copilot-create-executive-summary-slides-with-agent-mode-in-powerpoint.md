---
title: "PowerPoint on desktop: Copilot Agent Mode creates executive summary slides"
slug: "m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint"
roadmapId: 555876
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "PowerPoint desktop users can ask Copilot Agent Mode for an Executive Summary slide (roadmap item 555876, Launched). Microsoft names no admin action; licence tier, default and settings for this feature are not yet published."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Copilot overview lists Copilot in PowerPoint under both the Microsoft 365 Copilot (Basic) licence, which has no add-on, and the Premium add-on licence. Which one covers this feature is not yet published."
audiences: ["m365-admin","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot","licensing"]
sources:
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 555876"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555876"
    kind: "roadmap"
videos: []
related: ["m365-copilot-powerpoint-agent","m365-copilot-reference-webpages-when-creating-a-presentation-with-agent-mode-in-pow-555896","m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-ag-555884","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555881"]
controls:
  - governs: "Which users hold a Microsoft 365 Copilot licence (the licence experience that covers Copilot in PowerPoint)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing route for licences, not a switch for this feature. Which licence covers executive summary slides is not yet published. Role: License Administrator or User Administrator."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-21T23:00:01"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 555876 (PowerPoint on desktop): covers the roadmap description, the Copilot licence experiences and the licence-assignment control."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 39 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 36
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "64493a60765322da21640216350be34e"
---

## What's changing

Copilot can now draft an Executive Summary slide for a presentation when a user works with Agent Mode in PowerPoint. The roadmap item says Copilot "delivers a polished draft that highlights your key points and provides a clear, executive ready summary". Its status is Launched, the release phase is General Availability, the target date is March CY2026, and it covers Worldwide (Standard Multi-Tenant) on the Desktop platform.

Microsoft lists the feature under three roadmap ids with the same status, target date, release phase and cloud, one per platform: 555875 (Mac), 555876 (Desktop) and 555877 (Web). This briefing covers the Desktop item only.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so what this page says about its behaviour is the roadmap's description. Microsoft has not stated whether it is on or off by default, and no source says existing behaviour changes.

## Why it matters

An executive summary is the slide senior readers are most likely to read, so an AI-drafted version carries more weight than most generated content. If Copilot misstates or omits a point, the error reaches people who may not read the rest of the deck. The roadmap calls the output a draft, which puts the review on the user.

If nobody acts, Microsoft has not stated what happens on arrival, and no source says anything else changes. Plan on licensed desktop users being able to try it, and use a small pilot to confirm that rather than assuming either way.

## Risk assessment

**Data exposure**

- The roadmap describes a summary of the user's presentation and names no other data source. Microsoft's Copilot overview says Microsoft 365 Copilot (Premium) uses organisational data through Microsoft Graph and Work IQ, but Learn does not say whether this feature reads anything beyond the open deck, so confirm that in a pilot.
- Microsoft says Copilot Chat (Basic), Microsoft 365 Copilot (Basic) and Microsoft 365 Copilot (Premium) are protected by Enterprise Data Protection when users sign in with Microsoft Entra accounts.

**Security & identity**

- Learn describes no permission or identity model specific to this feature. No change is documented to who can see a deck or its slides.

**Autonomy & actions**

- The roadmap describes one outcome: a draft summary slide. It names no action outside the presentation.

**Change & support**

- Expect questions about why some users see Agent Mode or the summary and others do not, because Microsoft's overview ties Copilot in PowerPoint to licence experiences and this feature's tier is not yet published.
- Tell users to read the generated slide against the deck before sharing it; the summary can read as authoritative whatever its accuracy.

## Cost and licensing

**Licence.** Microsoft's Copilot overview says users with Microsoft 365 Copilot (Basic) do not have the Copilot add-on licence but can use Copilot in Word, Excel, PowerPoint and OneNote, and that users with the Premium add-on licence get the full experience of Copilot in those apps. It also says users with only Copilot Chat (Basic) do not have access to Copilot in PowerPoint. The overview does not say which of these experiences includes executive summary slides.

**Meter and limits.** The overview says some features are subject to fair use limits. A fair use limit, licence tier or meter specific to this feature is not yet published, and the roadmap item names none.

**Indirect cost.** Admin time to pilot the feature, and user time to review generated slides.

## Scope

- **Platform and cloud:** the roadmap record lists Desktop and Worldwide (Standard Multi-Tenant). Mac (555875) and Web (555877) are separate roadmap items.
- **Users:** people with a Copilot experience that includes Copilot in PowerPoint, per Microsoft's Copilot overview. Which experience covers this feature is not yet published.
- **Rollout:** the record gives status Launched, release phase General Availability and target March CY2026. Microsoft has not stated the rollout mechanics or default for this feature.
- **Prerequisites:** none are stated for this feature.

## Governance guidance

### Before rollout

- Check which Copilot experience each PowerPoint desktop user holds, in Microsoft 365 admin center under Users > Active users > Licenses and Apps (first control in the table). A License Administrator or User Administrator is needed to view and change assignments.
- Pick a pilot group of desktop PowerPoint users, and record whether Agent Mode and the Executive Summary slide appear for each licence experience.

### At rollout

- Tell pilot users that the generated slide is a draft and must be checked against the deck before it is shared.
- Assign or change licences for pilot users only through the control in the table, so results can be tied to a licence.

### After rollout

- Watch the Microsoft 365 Copilot release notes and Message center for an entry that names executive summary slides, and for any statement of default or setting.
- Sample decks that use the generated slide for accuracy, and feed what you find into your Copilot usage guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Microsoft 365 Copilot licence (the licence experience that covers Copilot in PowerPoint)</strong><br><small>User</small><br><small class="controls__note">Existing route for licences, not a switch for this feature. Which licence covers executive summary slides is not yet published. Role: License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Licence assignment decides which Copilot experience a user has. It is not a switch for this feature, and Microsoft has not said which experience includes it.

Microsoft Learn's Copilot settings page lists settings for user access, data access, Copilot actions and other areas, and none names PowerPoint or executive summary slides at the time of writing (November 2026). Changing licences needs the License Administrator or User Administrator role, and the Graph PowerShell route needs the User.ReadWrite.All permission scope, per the pages the table links to.

## Open questions

- Which Copilot experience (Basic or Premium) includes executive summary slides, and does a fair use limit apply? Watch the Copilot overview and the release notes on Microsoft Learn.
- Is the feature on by default for licensed desktop users, and does Microsoft document a setting that turns it off separately? Watch Message center and the Copilot settings page.
- Does Copilot read anything beyond the open presentation when it drafts the summary? Watch the Learn pages for Copilot in PowerPoint.

<!-- rationale
risk: Low. The roadmap describes a draft slide generated for the user's presentation, and Microsoft Learn describes no new data access, connection or autonomous action for it.
cost: Low. Microsoft's Copilot overview lists Copilot in PowerPoint under the Basic and Premium licences; a licence tier or meter specific to this feature is not yet published, so the known cost is admin time.
impact: Low. People who build decks with Copilot in PowerPoint on desktop notice it; the roadmap item names no change for other users and no administrator step.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Rollout / absence: Microsoft has not stated rollout mechanics for this Copilot feature. | Found: Copilot features are introduced using a safe deployment model, gradually rolling out to a subset of users within a tenant before expanding across the organization. | Fix: Replace 'Microsoft has not stated the rollout mechanics or default for this feature' with 'Microsoft says Copilot features gradually roll out to a subset of users within a tenant before expanding across the organisation. A rollout schedule and default specific to executive summary slides are not stated.' Cite https://learn.microsoft.com/microsoft-365/copilot/release-notes. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] Governance guidance: Before rollout / role: A License Administrator or User Administrator is needed to view licence assignments. | Found: Global Reader: View administrator features and settings in admin centers that the Global Administrator can view. The Global Reader can't edit any settings. | Fix: Replace 'A License Administrator or User Administrator is needed to view and change assignments' with 'You must be at least a License or User Administrator to assign licences', as stated at https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users. Do not claim those roles are required for viewing. | Source: https://learn.microsoft.com/microsoft-365/admin/add-users/about-admin-roles
- [contradicted, blocker] Governance controls / role: The Graph PowerShell licence-assignment route requires the User.ReadWrite.All permission scope. | Found: Assigning and removing licenses for a user requires the User.ReadWrite.All permission scope or one of the other permissions listed in the 'Assign license' Microsoft Graph API reference page. | Fix: Replace the permission clause with 'the Graph PowerShell route requires User.ReadWrite.All or one of the other permissions listed in the Assign license Microsoft Graph API reference'. The reference at https://learn.microsoft.com/graph/api/user-assignlicense identifies LicenseAssignment.ReadWrite.All as least privileged; cite it if naming that alternative. | Source: https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout / admin-path: Users > Active users > Licenses and Apps is the route for checking a user's assignments. | Found: Select the row of the user that you want to assign a license to. In the right pane, select Licenses and Apps. Expand the Licenses section | Fix: Give the full route already used in the control row: 'Microsoft 365 admin center > Users > Active users > user > Licenses and Apps > Licenses'. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
-->
