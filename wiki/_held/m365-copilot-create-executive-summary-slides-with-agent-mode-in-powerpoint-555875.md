---
title: "PowerPoint on Mac: Copilot Agent Mode creates executive summary slides"
slug: "m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint-555875"
roadmapId: 555875
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "PowerPoint on Mac users can ask Copilot Agent Mode for an Executive Summary slide (roadmap item 555875, Launched). Microsoft names no admin action; the licence tier and default for this feature are not yet published."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Copilot overview says Microsoft 365 Copilot (Basic) users can use Copilot in PowerPoint without the add-on licence, and (Premium) add-on users get the full experience. Which applies to this feature is not yet published."
audiences: ["m365-admin","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot","licensing","macos"]
sources:
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
  - title: "Microsoft 365 Roadmap item 555875"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555875"
    kind: "roadmap"
videos: []
related: ["m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint","m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint-555877","m365-copilot-powerpoint-agent","m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po"]
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
    note: "Existing route for licences, not a switch for this feature. Which licence covers executive summary slides is not yet published. Role: at least a License or User Administrator."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-21T23:00:01"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 555875 (PowerPoint on Mac): covers the roadmap description, the Copilot licence experiences and the licence-assignment control."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 39
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "3530fbb76af9f62336de10a61f569801"
---

## What's changing

Copilot can draft an Executive Summary slide for a presentation when a user works with Agent Mode in PowerPoint on Mac. The roadmap item says Copilot "delivers a polished draft that highlights your key points and provides a clear, executive ready summary". Its status is Launched, the release phase is General Availability, the target date is March CY2026, and it covers Worldwide (Standard Multi-Tenant) on the Mac platform.

Microsoft lists the feature under three roadmap ids with the same status, target date, release phase and cloud, one per platform: 555875 (Mac), 555876 (Desktop) and 555877 (Web). This briefing covers the Mac item only; the other two are at [/features/m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint/](/features/m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint/) and [/features/m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint-555877/](/features/m365-copilot-create-executive-summary-slides-with-agent-mode-in-powerpoint-555877/).

Microsoft Learn does not describe this feature at the time of writing (November 2026), so what this page says about its behaviour is the roadmap's description. Microsoft's release notes do refer to Agent Mode in PowerPoint when they describe a related roadmap item, and its entry lists Windows, Web and Mac. Microsoft has not stated whether this feature is on or off by default, and no source says existing behaviour changes.

## Why it matters

An executive summary is the slide senior readers are most likely to read, so an AI-drafted version carries more weight than most generated content. If Copilot misstates or leaves out a point, the error reaches people who may not read the rest of the deck. The roadmap calls the output a draft, which puts the review on the user.

If nobody acts, Microsoft has not stated what happens on arrival, and no source says anything else changes. Plan on Mac users who hold a Copilot licence experience that includes Copilot in PowerPoint being able to try it, and use a small pilot to confirm that rather than assuming either way.

## Risk assessment

**Data exposure**

- The roadmap describes a summary of the user's presentation and names no other data source. Microsoft's Copilot overview says Microsoft 365 Copilot (Premium) uses web data and work data through Microsoft Graph and Work IQ, but Learn does not say whether this feature reads anything beyond the open deck. Confirm that in a pilot before telling users it is limited to the deck.

**Security & identity**

- Learn describes no permission or identity model specific to this feature, and the roadmap names none. Licence assignment is the one control the Copilot overview ties to Copilot in PowerPoint.

**Autonomy & actions**

- The roadmap describes one outcome: a draft summary slide. It names no action outside the presentation.

**Change & support**

- Expect questions about why some Mac users see Agent Mode or the summary and others do not, because Microsoft's overview ties Copilot in PowerPoint to licence experiences and this feature's tier is not yet published.
- Tell users to read the generated slide against the deck before sharing it; a summary reads as authoritative whatever its accuracy.

## Cost and licensing

**Licence.** Microsoft's Copilot overview says users with Microsoft 365 Copilot (Basic) do not have the Copilot add-on licence but can use Copilot in Word, Excel, PowerPoint and OneNote, and that users with the Microsoft 365 Copilot add-on licence get the full experience of Copilot in those apps. It also says users with only Copilot Chat (Basic) do not have access to Copilot in PowerPoint. The overview does not say which of these experiences includes executive summary slides.

**Meter and limits.** The overview says some features are subject to fair use limits. A fair use limit, licence tier or meter specific to this feature is not yet published, and the roadmap item names none.

**Indirect cost.** Admin time to pilot the feature, and user time to review generated slides.

## Scope

- **Platform and cloud:** the roadmap record lists Mac and Worldwide (Standard Multi-Tenant). Desktop (555876) and Web (555877) are separate roadmap items.
- **Users:** people with a Copilot experience that includes Copilot in PowerPoint, per Microsoft's Copilot overview. Which experience covers this feature is not yet published.
- **Rollout:** the record gives status Launched, release phase General Availability and target March CY2026. A rollout schedule and default specific to executive summary slides are not stated.
- **Prerequisites:** none are stated for this feature.

## Governance guidance

### Before rollout

- Check which Copilot experience each PowerPoint on Mac user holds, in Microsoft 365 admin center > Users > Active users > user > Licenses and Apps > Licenses (the control in the table). Microsoft's licence page says you must be at least a License or User Administrator to assign licences.
- Pick a pilot group of Mac users, and record whether Agent Mode and the Executive Summary slide appear for each licence experience.

### At rollout

- Tell pilot users that the generated slide is a draft and must be checked against the deck before it is shared.
- Change licences for pilot users only through the control in the table, so results can be tied to a licence.

### After rollout

- Watch the Microsoft 365 Copilot release notes and Message center for an entry that names executive summary slides, and for any statement of default or setting.
- Sample decks that use the generated slide for accuracy, and feed what you find into your Copilot usage guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Microsoft 365 Copilot licence (the licence experience that covers Copilot in PowerPoint)</strong><br><small>User</small><br><small class="controls__note">Existing route for licences, not a switch for this feature. Which licence covers executive summary slides is not yet published. Role: at least a License or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Licence assignment decides which Copilot experience a user has. It is not a switch for this feature, and Microsoft has not said which experience includes it. Assigning licences needs at least a License or User Administrator role, per the Learn page the table links to.

Microsoft Learn documents no separate setting for executive summary slides at the time of writing (November 2026).

## Open questions

- Which Copilot experience (Basic or Premium) includes executive summary slides on Mac, and does a fair use limit apply? Watch the Copilot overview and the release notes on Microsoft Learn.
- Is the feature on by default for licensed Mac users, and does Microsoft document an admin setting that turns it off separately? Watch Message center and the Learn pages for Copilot in PowerPoint.
- Does Copilot read anything beyond the open presentation when it drafts the summary? Watch the Learn pages for Copilot in PowerPoint.

<!-- rationale
risk: Low. The roadmap describes a draft slide generated for the user's presentation, and Microsoft Learn describes no new data access, connection or autonomous action for this feature.
cost: Low. Microsoft's Copilot overview lists Copilot in PowerPoint under the Microsoft 365 Copilot (Basic) and (Premium) licences; a licence tier or meter specific to this feature is not yet published, so the known cost is admin time.
impact: Low. People who build decks with Copilot in PowerPoint on Mac notice it; the roadmap item names no change for other users and no administrator step.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity / applicability: Licence assignment is the one control the Copilot overview ties to Copilot in PowerPoint. | Found: In the admin center, use the Copilot controls to manage Copilot Chat experiences, including Copilot Chat (Basic), Microsoft 365 Copilot (Basic), and Microsoft 365 Copilot (Premium). | Fix: Remove 'Licence assignment is the one control the Copilot overview ties to Copilot in PowerPoint.' The overview also documents controls for the Basic and Premium experiences; https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy additionally states that turning off connected experiences that analyze content makes Copilot unavailable in PowerPoint on current Mac clients. Keep the existing licence-assignment row as a licence control, not an exhaustive governance claim. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: other roadmap ids; Scope / record: The same feature has separate Mac, Desktop and Web records numbered 555875, 555876 and 555877 respectively. | Found: 555875: "platforms": ["Mac"]; 555876: "platforms": ["Desktop"]; 555877: "platforms": ["Web"]. Each title is "Microsoft Copilot (Microsoft 365): Create executive summary slides with Agent Mode in PowerPoint". | Fix: Cite the two additional records used in this paragraph: https://www.microsoft.com/microsoft-365/roadmap?id=555876 and https://www.microsoft.com/microsoft-365/roadmap?id=555877.
- [supported, minor] Scope: Prerequisites / absence: No prerequisites specific to executive summary slides are stated. | Found: Searched: PowerPoint Agent Mode executive summary slides Mac 555875 licensing prerequisites fair use meter. Read roadmap and Microsoft Copilot requirements; product-level account, app and network requirements exist, but no additional executive-summary-specific prerequisites were found. | Fix: Replace 'Prerequisites: none are stated for this feature' with 'Prerequisites: no additional prerequisites specific to executive summary slides are stated; Microsoft Copilot's general requirements still apply.' Cite https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements.
-->
