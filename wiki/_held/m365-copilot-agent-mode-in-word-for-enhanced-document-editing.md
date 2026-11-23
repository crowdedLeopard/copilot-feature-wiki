---
title: "Word: Copilot Agent Mode edits documents through chat"
slug: "m365-copilot-agent-mode-in-word-for-enhanced-document-editing"
roadmapId: 499428
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Agent Mode in Word lets users ask Copilot in chat to edit a document and review a summary of changes. The roadmap shows it as launched. No Agent Mode switch or licence rule is documented, so review who holds Copilot licences."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's Copilot overview describes Copilot in Word under a Basic experience (no add-on licence) and a full experience with the Microsoft 365 Copilot add-on licence. Which tier Agent Mode needs, and any meter, is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["word","m365-copilot","copilot","agents","licensing","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap item 499428"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499428"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "copilotAdminSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadminsetting"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-can-edit-your-document-by-default-in-word","m365-copilot-when-using-agent-mode-in-word-you-will-be-able-to-manually-select-which-model","m365-copilot-local-file-support-for-agent-mode-in-excel","m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that gives the full experience of Copilot in Word"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "License Administrator or User Administrator at least. General Copilot licence control; Learn does not say which tier Agent Mode needs. Graph PowerShell needs User.ReadWrite.All."
  - governs: "Switch for Agent Mode in Word"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-08T23:11:07"
changes:
  - date: "2026-11-23"
    note: "New briefing: Agent Mode in Word is Launched on the roadmap; Learn documents no Agent Mode setting, default or licence rule, so the Copilot licence is the control."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 34
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "cd0f79eddc7f3a238c422d05a0e1e022"
---

## What's changing

The roadmap item says Copilot supports document editing in Word through chat-based interactions with Agent Mode. Users can start edits, give clarifying directions and review a summary of changes within the document.

The record shows the status as Launched, with a target of November CY2025 and General Availability as the release phase. It lists Desktop, Mac and Web as platforms and Worldwide (Standard Multi-Tenant) as the cloud. The record has no more-info link, and no Message Center post was supplied with it. It was last modified on 8 July 2026.

Microsoft Learn has no page for Agent Mode in Word at the time of writing (November 2026), so what this briefing says about behaviour is the roadmap's description. Learn's Microsoft 365 Copilot release notes list a separate Word item, "Copilot can edit your document by default in Word" (Roadmap ID 557673, Web); the notes do not say whether it is the same change as this item.

## Why it matters

Agent Mode gives users a chat route to have Copilot change the content of a Word document, with a summary of changes to review afterwards. For a service owner the question is who in the organisation can do this and how edits are checked before a document is shared or signed off.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes, and do not assume that nothing will change. The control Learn documents for Copilot in Word is licence assignment, which works by licence tier and not by feature. No setting specific to Agent Mode in Word is documented, so decide who needs a licence rather than waiting for a switch.

## Risk assessment

**Data exposure**

- The roadmap describes edits within the document and does not say what other content Agent Mode reads. Confirm that before relying on sensitivity labels or site-level restrictions to keep content out of reach.

**Security & identity**

- Learn describes Copilot in Word by licence tier: the full experience for users with the Microsoft 365 Copilot add-on licence, and a Basic experience for users without it. Which tier gets Agent Mode is not stated, so licence assignment (first row of the controls table) is a general control, not an Agent Mode setting.

**Autonomy & actions**

- Copilot changes the document in response to a user's chat request, and the roadmap says users review a summary of changes within the document. How changes are tracked or reversed is not described in the roadmap item. Tell users to read the summary before saving or sharing.

**Change & support**

- Agent Mode is listed for Desktop, Mac and Web, so expect questions where it differs by platform or licence tier. Learn says some Copilot features are subject to fair use limits in each tier; whether any apply to Agent Mode is not stated.

## Cost and licensing

Learn's Microsoft Copilot overview describes two licence tiers for Copilot in Word. Users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote. Users without the add-on licence can still use Copilot in those apps under the Microsoft 365 Copilot (Basic) experience. The overview says some features are subject to fair use limits.

Which tier Agent Mode needs is not yet published, and so is any licence requirement, meter or credit rate specific to Agent Mode. The roadmap record names no licence. The cost known today is indirect: admin time to review licence assignment and user guidance.

## Scope

- **Users:** Microsoft has not stated which users or licence tiers get Agent Mode.
- **Platforms:** Desktop, Mac and Web, as the roadmap lists them.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap lists it. The record lists no US Government clouds for this item.
- **Release phase and status:** General Availability; Launched, with a target of November CY2025.
- **Rollout and prerequisites:** not documented for this feature.

## Governance guidance

### Before rollout

- Check which users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (first row of the controls table), because Learn describes Copilot in Word by licence tier.
- Name the owners of documents that carry legal, financial or regulated content and agree how Copilot edits are reviewed before sharing.
- Read Learn's Copilot overview and release notes for a statement of which tier gets Agent Mode before widening access.

### At rollout

- Tell users to review the summary of changes in the document before they save or share it.
- Pilot with a small group on each platform you support (Desktop, Mac, Web) and note any difference in what they see.

### After rollout

- Collect service desk reports about unexpected edits and about users who cannot see Agent Mode, and use them to adjust guidance.
- Re-check Learn for an Agent Mode setting and add it to the controls table when Microsoft documents one.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives the full experience of Copilot in Word</strong><br><small>User</small><br><small class="controls__note">License Administrator or User Administrator at least. General Copilot licence control; Learn does not say which tier Agent Mode needs. Graph PowerShell needs User.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for Agent Mode in Word</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Licence assignment is a general Copilot control. It changes who holds the tiers Learn describes for Copilot in Word, not Agent Mode alone, and Learn does not say which tier Agent Mode needs. Assigning licences in the admin centre needs at least the License Administrator or User Administrator role.

The second row records that Microsoft Learn documents no admin setting for Agent Mode in Word, in the admin centre or through an API, at the time of writing (November 2026).

## Open questions

- Is Agent Mode in Word on by default for users who have Copilot in Word, and will a Message center post announce it? Watch Message center and the Copilot release notes.
- Which licence tier does Agent Mode need, and is any usage meter or fair use limit specific to it? Watch Learn's Copilot overview.
- Is this item the same change as the release notes item "Copilot can edit your document by default in Word" (Roadmap ID 557673)?
- Does Agent Mode in Word use Anthropic models? Learn says the separate Word, Excel and PowerPoint Agents in the Microsoft Copilot app exclusively use Anthropic models, but no page links Agent Mode in Word to them.

<!-- rationale
risk: Medium. Copilot makes edits to documents on a user's chat request, and Microsoft Learn documents no switch for Agent Mode in Word, so the existing Copilot licence is the control to lean on.
cost: Low. Microsoft Learn describes Copilot in Word by licence tier and names no meter or price for Agent Mode; the known cost is admin time and user guidance. A licence rule specific to Agent Mode is not yet published.
impact: Medium. Users who have Copilot in Word on Desktop, Mac or Web would notice it; Microsoft has not stated whether it is on by default or which licence tier gets it.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing / absence: Microsoft Learn has no page describing Agent Mode in Word. | Found: Agent mode in Word adds a conversational chat experience that helps you create, edit, and refine document content as you work. | Fix: Replace the sentence beginning 'Microsoft Learn has no page' with 'Microsoft Learn's Current Channel release notes also describe Agent mode in Word as a conversational chat experience for creating, editing and refining document content.' Cite https://learn.microsoft.com/officeupdates/current-channel. | Source: https://learn.microsoft.com/officeupdates/current-channel#version-2603-march-24
- [contradicted, blocker] front matter: licensing.model / licensing: Agent Mode in Word has a mixed licensing model based on Basic and full Copilot experiences. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote ... Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Set licensing.model to 'included' and state 'The Microsoft Copilot service description lists Edit with Copilot in Word as a Microsoft 365 Copilot (Premium) feature requiring a Microsoft 365 Copilot license.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot and https://support.microsoft.com/en-us/office/copilot-frontier/get-started-editing-with-copilot-in-office, which explicitly identifies editing with Copilot as formerly marketed as Agent Mode. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, blocker] summary; licensing.notes; Risk assessment; Cost and licensing; Scope; controls[0].note; rationales; changes / absence: Microsoft has not published which licence tier users need for Agent Mode in Word. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote ... Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Replace statements that the licence tier is unpublished with 'The Microsoft Copilot service description lists Edit with Copilot in Word as a Premium feature requiring a Microsoft 365 Copilot license.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot. Cite https://support.microsoft.com/en-us/office/copilot-frontier/get-started-editing-with-copilot-in-office for 'In previous releases, this was marketed as "Agent Mode" but is now integrated into the regular Copilot experience.' Remove the corresponding open question about the licence tier, retaining its meter and limit questions. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, blocker] Scope: Rollout and prerequisites / absence: Rollout information is not documented for Agent Mode in Word. | Found: Version 2602: March 10 ... Version 2602 (Build 19725.20172) ... Word ... Agent mode in Word | Fix: Replace the Scope rollout-and-prerequisites bullet with 'Rollout and prerequisites: Learn's Current Channel release notes list Agent mode in Word under Version 2602: March 10 (Build 19725.20172); the Microsoft Copilot service description requires a Microsoft 365 Copilot license for Edit with Copilot in Word.' Cite https://learn.microsoft.com/officeupdates/current-channel and https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot. Retain the roadmap's November CY2025 target separately. | Source: https://learn.microsoft.com/officeupdates/current-channel#version-2603-march-24
- [contradicted, blocker] Scope: Rollout and prerequisites / absence: Prerequisites are not documented for this feature. | Found: Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Replace the Scope rollout-and-prerequisites bullet with 'Rollout and prerequisites: Learn's Current Channel release notes list Agent mode in Word under Version 2602: March 10 (Build 19725.20172); the Microsoft Copilot service description requires a Microsoft 365 Copilot license for Edit with Copilot in Word.' Cite https://learn.microsoft.com/officeupdates/current-channel and https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, blocker] controls[0].note; Governance controls table / role: Graph PowerShell licence changes require User.ReadWrite.All. | Found: Assigning and removing licenses for a user requires the User.ReadWrite.All permission scope or one of the other permissions listed in the 'Assign license' Microsoft Graph API reference page. | Fix: Replace 'Graph PowerShell needs User.ReadWrite.All.' with 'Graph PowerShell requires User.ReadWrite.All or one of the other permissions listed in the Assign license Microsoft Graph API reference.' Keep the existing PowerShell documentation citation. | Source: https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Open questions: Anthropic models / absence: No page identifies Agent Mode in Word as the separate Word, Excel and PowerPoint Agents in the Microsoft Copilot app. | Found: Searched: "Word" "Agent Mode" default rollout Anthropic. Read the app agents Learn page and Agent Mode Support overview. No explicit identity with the app agents; Support nevertheless states that Agent Mode's Office Agent runs on Anthropic models. | Fix: Remove the open-question bullet beginning 'Does Agent Mode in Word use Anthropic models?': https://support.microsoft.com/en-us/topic/get-started-with-agent-mode-in-word-excel-and-powerpoint-4d322d7f-5e89-4f66-9fa4-57d328b156ff already says 'Office Agent runs on Anthropic models.' The absence of a link to the separate app agents does not leave that question unanswered.
-->
