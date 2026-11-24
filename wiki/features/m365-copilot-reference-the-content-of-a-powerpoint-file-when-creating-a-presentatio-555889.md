---
title: "PowerPoint on Mac: reference an existing PowerPoint file when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-the-content-of-a-powerpoint-file-when-creating-a-presentatio-555889"
roadmapId: 555889
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Agent Mode in PowerPoint on Mac can now use an existing PowerPoint file as a reference when creating a presentation. Launched for Worldwide; Microsoft has not stated a default, so review fit."
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
  notes: "Microsoft's overview describes a Microsoft 365 Copilot (Basic) experience without the add-on licence and a Premium experience with it. Which of the two covers Reference file in Agent Mode is not yet published; no price or meter for it is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","licensing","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot & Microsoft 365 Copilot Chat"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 555889"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555889"
    kind: "roadmap"
videos: []
related: ["m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-pres-555878","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555897","m365-copilot-powerpoint-agent","sensitivity-labels"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot add-on licence for Copilot in PowerPoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing route, not a switch for this option. The overview ties the full experience of Copilot in PowerPoint to the add-on licence; whether this option needs it is not yet published. Needs at least License or User Administrator."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-24"
    note: "First briefing for the Mac item: referencing an existing PowerPoint file in Copilot Agent Mode, launched; default and licence experience not yet published."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 40 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 39
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "c1c47e28358cdb303863f4fb07d540d0"
---

## What's changing

Copilot in PowerPoint can now use an existing PowerPoint file as a reference when a user creates a presentation with Agent Mode. This roadmap item covers the Mac. The roadmap item states: "You can now reference the content of a PowerPoint file when creating a presentation with Copilot in PowerPoint using Agent Mode."

Microsoft's Microsoft 365 Copilot release notes (entry dated July 01, 2026, headed "Reuse content and style from existing PowerPoint presentations with Copilot in PowerPoint" and listing Windows, Web and Mac) describe the user steps: open PowerPoint and start edit with Copilot, select Reference file and choose a PowerPoint presentation, then ask Copilot to create a new presentation using content or style from the referenced file. The same entry covers applying one deck's style to another, which this roadmap item does not describe.

Microsoft lists the feature under three roadmap ids: 555887 for Desktop, 555892 for Web and this one, 555889, for Mac. The records give the same status, target date, cloud and release phase; only the platform differs. The release-note entry cites all three ids.

The roadmap record gives status Launched, a target of March CY2026, release phase General Availability and cloud Worldwide (Standard Multi-Tenant). The roadmap record and the release-note entry state no default for the option. Microsoft Learn has no page specific to this feature beyond the release-note entry.

## Why it matters

This gives Mac users a quick way to build a new deck from an old one, so expect more decks to be copied and reworked by Copilot. For a service owner the question is what Copilot can read on a user's behalf: Microsoft's release note says the capability respects existing file permissions and access controls, so the exposure follows the permissions already in place on decks.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes or that an administrator has to switch anything. Users who already use Copilot in PowerPoint on Mac may find the Reference file option on their own; plan a short communication rather than a rollout project.

## Risk assessment

**Data exposure**
- Copilot reads the decks a user picks with Reference file. Microsoft's release note says the capability respects existing file permissions and access controls, so decks shared too widely stay exposed to whoever can open them; permission hygiene on shared decks is the lever.
- Content from a referenced deck can end up in a new deck. Microsoft Purview documents that when Copilot in PowerPoint creates new content based on an item with a sensitivity label, the label from the source file is automatically inherited with the label's protection settings. Check how the new deck is labelled before it is shared. See [Sensitivity labels](/concepts/sensitivity-labels/).

**Security & identity**
- No change to sign-in, consent or roles is described for this capability. The user's own file permissions are the boundary Microsoft names.

**Autonomy & actions**
- The user chooses the file and writes the prompt; the release-note steps describe no background or scheduled action. Agent Mode creates the new presentation from the prompt and the referenced file.

**Change & support**
- Expect questions from users on Windows and the web, because this item lists Mac only and those platforms are separate roadmap items (555887 and 555892), although the release-note entry lists all three.
- Expect questions about why some users have the option and others do not, because which Copilot experience covers this option is not yet published.

## Cost and licensing

Microsoft's Microsoft Copilot overview says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote. Users without the add-on licence can still use Copilot in Word, Excel, PowerPoint and OneNote, with some features subject to fair use limits. Its Basic list of in-app PowerPoint features reads "Create presentations from prompts or existing content, summarize presentations or edit presentations", and the Premium experience includes everything in Basic.

Which of the two experiences covers Reference file in Agent Mode is not yet published, and the release-note entry names no licence. A price, meter or credit rate for this option is not yet published. The indirect cost is admin time to brief users and review sharing on decks.

To see or change who holds the add-on licence, use the licence row in the controls table.

## Scope

The roadmap record lists the Mac platform, the Worldwide (Standard Multi-Tenant) cloud and General Availability, with status Launched and a target of March CY2026. Other clouds are not listed on this item. Desktop (555887) and Web (555892) are separate roadmap items.

The feature is part of Copilot in PowerPoint. The Microsoft Copilot overview describes the full experience as needing the Microsoft 365 Copilot add-on licence, and a Basic experience without it. The release note says the capability respects existing file permissions and access controls.

## Governance guidance

### Before rollout
- Confirm which Mac users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (see the licence row in the controls table), because the overview ties the full Copilot in PowerPoint experience to that licence.
- Review sharing on decks that users are likely to reference, such as shared templates and board packs, because Microsoft says the capability follows existing file permissions.
- Tell PowerPoint users on Mac how to reach the option: start edit with Copilot, then select Reference file.

### At rollout
- Test a Mac user with and without the add-on licence to see whether Reference file appears, since Microsoft has not published which experience covers it.
- Brief Windows and web users that the release-note entry lists their platforms too, but that each has its own roadmap item.

### After rollout
- Collect user reports of new decks that reused content from a more restricted file, and review that file's permissions and sensitivity label.
- Watch the Microsoft 365 Copilot release notes and the roadmap item for any setting, default or licence statement for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence for Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Existing route, not a switch for this option. The overview ties the full experience of Copilot in PowerPoint to the add-on licence; whether this option needs it is not yet published. Needs at least License or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The release-note entry names no admin setting for this feature at the time of writing (November 2026). The only control in the table is the Copilot licence, which decides which Copilot in PowerPoint experience a user has; it is not a switch for this one option.

Microsoft's licence page says you must be at least a License or User Administrator to assign licences. Because Microsoft says the feature respects existing file permissions, changing sharing on the source deck changes what Copilot can read for a given user.

## Open questions

- Which Copilot experience (Basic or the Premium add-on) includes referencing a PowerPoint file in Agent Mode? Watch the Microsoft Copilot overview and the release notes.
- Is the Reference file option on by default for users who already have Copilot in PowerPoint on Mac, or does an administrator have to turn something on? Watch Message center and the release notes.
- Does an admin setting exist to limit this option for some users without removing Copilot in PowerPoint entirely? Watch the Microsoft 365 Copilot release notes and the Copilot controls documentation.

<!-- rationale
risk: Low. Microsoft's release note says the capability respects existing file permissions and access controls, so Copilot reads decks the user can already open; the exposure is whatever those decks hold.
cost: Low. The only cost the sources show is admin time; Microsoft's overview ties Copilot in PowerPoint to its Basic and Premium experiences, and no price or meter for this option is published.
impact: Low. Only Mac users of Copilot in PowerPoint who build decks with Agent Mode see the new Reference file option; Windows and web are separate roadmap items.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist asks readers to review sharing permissions and sensitivity labels, but neither control is represented in the controls table. | Found: Review sharing on decks that users are likely to reference ... review that file's permissions and sensitivity label. / The only control in the table is the Copilot licence | Fix: The checklist steps 'Review sharing on decks that users are likely to reference' and 'review that file's permissions and sensitivity label' have no corresponding controls-table rows. Remove these control-review instructions from the checklist to resolve the mismatch without adding unverified rows.
-->
