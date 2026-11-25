---
title: "Word: Copilot Agent Mode edits documents through chat"
slug: "m365-copilot-agent-mode-in-word-for-enhanced-document-editing"
roadmapId: 499428
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Agent Mode in Word lets users ask Copilot in chat to edit a document and review a summary of changes. Launched on the roadmap; Learn lists Edit with Copilot in Word as needing a Microsoft 365 Copilot licence. No Agent Mode switch is documented."
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
  model: "included"
  notes: "The Microsoft Copilot service description lists Edit with Copilot in Word as a Microsoft 365 Copilot (Premium) feature requiring a Microsoft 365 Copilot license. A meter or credit rate specific to Agent Mode is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["word","m365-copilot","copilot","agents","licensing","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap item 499428"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499428"
    kind: "roadmap"
  - title: "Release notes for Current Channel releases"
    url: "https://learn.microsoft.com/officeupdates/current-channel"
    kind: "learn"
  - title: "Microsoft Copilot - Service Descriptions"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
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
    note: "License Administrator or User Administrator at least. General Copilot licence control, not an Agent Mode setting. Graph PowerShell requires User.ReadWrite.All or one of the other permissions listed in the Assign license Graph reference."
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
  - date: "2026-11-23"
    note: "Corrected after verification: Learn's Current Channel notes describe Agent mode in Word; licensing now follows the service description's Microsoft 365 Copilot licence requirement; Graph permission wording and rollout details fixed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 40 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 38 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 37
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "f671f30ef34d20712cb25901ad016d3d"
---

## What's changing

The roadmap item says Copilot supports document editing in Word through chat-based interactions with Agent Mode. Users can start edits, give clarifying directions and review a summary of changes within the document.

The record shows the status as Launched, with a target of November CY2025 and General Availability as the release phase. It lists Desktop, Mac and Web as platforms and Worldwide (Standard Multi-Tenant) as the cloud. The record has no more-info link, and no Message Center post was supplied with it. It was last modified on 8 July 2026.

Microsoft Learn's Current Channel release notes also describe Agent mode in Word as a conversational chat experience for creating, editing and refining document content. Learn's Microsoft 365 Copilot release notes list a separate Word item, "Copilot can edit your document by default in Word" (Roadmap ID 557673, Web); the notes do not say whether it is the same change as this item.

## Why it matters

Agent Mode gives users a chat route to have Copilot change the content of a Word document, with a summary of changes to review afterwards. For a service owner the question is who in the organisation can do this and how edits are checked before a document is shared or signed off.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes, and do not assume that nothing will change. The control Learn documents for Copilot in Word is licence assignment, which works by licence tier and not by feature. No setting specific to Agent Mode in Word is documented, so decide who needs a licence rather than waiting for a switch.

## Risk assessment

**Data exposure**

- The roadmap describes edits within the document and does not say what other content Agent Mode reads. Confirm that before relying on sensitivity labels or site-level restrictions to keep content out of reach.

**Security & identity**

- Learn's Microsoft Copilot service description lists Edit with Copilot in Word as requiring a Microsoft 365 Copilot licence, so licence assignment (first row of the controls table) is a general control, not an Agent Mode setting.

**Autonomy & actions**

- Copilot changes the document in response to a user's chat request, and the roadmap says users review a summary of changes within the document. How changes are tracked or reversed is not described in the roadmap item. Tell users to read the summary before saving or sharing.

**Change & support**

- Agent Mode is listed for Desktop, Mac and Web, so expect questions where it differs by platform or licence. Learn's Copilot overview says some Microsoft 365 Copilot (Basic) features are subject to fair use limits; whether any limit applies to Agent Mode is not stated.

## Cost and licensing

The Microsoft Copilot service description lists Edit with Copilot in Word, Excel, PowerPoint, and OneNote as a Microsoft 365 Copilot (Premium) feature and says a Microsoft 365 Copilot license is required to access it.

A licence requirement, meter or credit rate specific to Agent Mode is not yet published, and the service description names no meter. The roadmap record names no licence. The extra cost known today is indirect: admin time to review licence assignment and user guidance.

## Scope

- **Users:** the Microsoft Copilot service description requires a Microsoft 365 Copilot license for Edit with Copilot in Word.
- **Platforms:** Desktop, Mac and Web, as the roadmap lists them.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap lists it. The record lists no US Government clouds for this item.
- **Release phase and status:** General Availability; Launched, with a target of November CY2025.
- **Rollout and prerequisites:** Learn's Current Channel release notes list Agent mode in Word under Version 2602: March 10 (Build 19725.20172); the Microsoft Copilot service description requires a Microsoft 365 Copilot license for Edit with Copilot in Word.

## Governance guidance

### Before rollout

- Check which users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (first row of the controls table), because the service description requires that licence for Edit with Copilot in Word.
- Name the owners of documents that carry legal, financial or regulated content and agree how Copilot edits are reviewed before sharing.
- Confirm with Microsoft's service description and release notes that the Edit with Copilot entry covers Agent Mode before widening access.

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
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives the full experience of Copilot in Word</strong><br><small>User</small><br><small class="controls__note">License Administrator or User Administrator at least. General Copilot licence control, not an Agent Mode setting. Graph PowerShell requires User.ReadWrite.All or one of the other permissions listed in the Assign license Graph reference.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for Agent Mode in Word</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Licence assignment is a general Copilot control. It changes who holds the Microsoft 365 Copilot licence, not Agent Mode alone. Assigning licences in the admin centre needs at least the License Administrator or User Administrator role.

The second row records that Microsoft Learn documents no admin setting for Agent Mode in Word, in the admin centre or through an API, at the time of writing (November 2026).

## Open questions

- Is Agent Mode in Word on by default for users who have Copilot in Word, and will a Message center post announce it? Watch Message center and the Copilot release notes.
- Is a usage meter or fair use limit specific to Agent Mode published? Watch the Microsoft Copilot service description.
- Is this item the same change as the release notes item "Copilot can edit your document by default in Word" (Roadmap ID 557673)?
- Does the service description entry "Edit with Copilot in Word, Excel, PowerPoint, and OneNote" cover Agent Mode in Word? Watch the service description.

<!-- rationale
risk: Medium. Copilot makes edits to documents on a user's chat request, and Microsoft Learn documents no switch for Agent Mode in Word, so the existing Copilot licence is the control to lean on.
cost: Low. The Microsoft Copilot service description lists Edit with Copilot in Word as requiring a Microsoft 365 Copilot licence and names no meter; the known extra cost is admin time and user guidance.
impact: Medium. Users who have Copilot in Word on Desktop, Mac or Web would notice it; Microsoft has not stated whether it is on by default, and Learn's service description requires a Microsoft 365 Copilot licence for Edit with Copilot in Word.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing / absence: A licence requirement specific to Agent Mode is not yet published. | Found: Editing with Copilot in Excel, PowerPoint, and Word is a way to create content within the Microsoft Copilot experience for Microsoft 365 Personal, Family, and Premium plans. ... In previous releases, this was marketed as "Agent Mode" | Fix: Remove 'A licence requirement' from the absence sentence. Replace the sentence with 'A meter or credit rate specific to Agent Mode is not yet published.' Keep the preceding, supported enterprise service-description licence requirement; do not import the consumer plans into enterprise prerequisites. | Source: https://support.microsoft.com/office/copilot-frontier/get-started-editing-with-copilot-in-office
-->
