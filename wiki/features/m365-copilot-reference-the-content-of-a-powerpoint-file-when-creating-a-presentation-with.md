---
title: "PowerPoint on the web: reference an existing PowerPoint file when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-the-content-of-a-powerpoint-file-when-creating-a-presentation-with"
roadmapId: 555892
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Users of Copilot in PowerPoint on the web can reference an existing PowerPoint file when asking Agent Mode to create a presentation. Launched for Worldwide; Microsoft has not stated a default, so review fit."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's overview describes Copilot in PowerPoint under a Basic experience (no add-on licence, fair use limits) and a Premium experience (the Microsoft 365 Copilot add-on licence). Which tier covers this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","licensing"]
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
  - title: "Microsoft 365 Roadmap item 555892"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555892"
    kind: "roadmap"
  - title: "Which users hold the Microsoft 365 Copilot add-on licence for Copilot in PowerPoint (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot add-on licence for Copilot in PowerPoint (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-pres-555879","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894","m365-copilot-powerpoint-agent"]
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
    note: "Existing route, not a switch for this option: the overview ties the full experience of Copilot in PowerPoint to the add-on licence. Whether this feature needs it is not yet published."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-24"
    note: "First briefing for the web item: referencing an existing PowerPoint file in Copilot Agent Mode, launched; default and licence tier not yet published."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: removed the claim that behaviour beyond the release note is undocumented, and replaced the sensitivity-label absence with Microsoft Purview's documented label inheritance."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 47
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "974d34d8ef1a708e266f3ddd26fdd458"
---

## What's changing

Copilot in PowerPoint on the web can now use an existing PowerPoint file as a reference when a user creates a presentation with Agent Mode. The roadmap item states: "You can now reference the content of a PowerPoint file when creating a presentation with Copilot in PowerPoint using Agent Mode."

Microsoft's Microsoft 365 Copilot release notes (entry dated July 01, 2026) list this roadmap id with two others and describe the user steps: open PowerPoint and start edit with Copilot, select Reference file and choose a PowerPoint presentation, then ask Copilot to create a new presentation using content or style from the referenced file. The release notes say users can reuse text content and style from existing decks. The same release-note entry also covers applying one deck's style to another, which this roadmap item does not describe.

This item covers the web. Microsoft lists the same feature under separate roadmap items for Desktop (555887) and Mac (555889), with the same status, target date, cloud and release phase as this one. The release-note entry lists Windows, Web and Mac together.

The roadmap record gives status Launched, a target of March CY2026, release phase General Availability and cloud Worldwide (Standard Multi-Tenant). Microsoft Learn has no page specific to this feature beyond the release-note entry.

## Why it matters

This gives users a way to build a new deck from an existing one, which is likely to increase how often decks are copied and reworked by Copilot. For a service owner, the question is which files Copilot can read on a user's behalf: Microsoft's release note says the capability respects existing file permissions and access controls, so the exposure follows the permissions already in place on decks.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes for users or that an administrator has to switch anything. Expect users who already have Copilot in PowerPoint on the web to find the Reference file option on their own, and plan a short communication rather than a rollout project.

## Risk assessment

**Data exposure**
- Referenced decks are read by Copilot when a user picks them with Reference file. Microsoft's release note says the capability respects existing file permissions and access controls; decks with over-broad sharing remain exposed to whoever can open them, so permission hygiene on shared decks is the lever.
- Content from a referenced deck can end up in a new deck with different sharing. Microsoft Purview documents that new content created with Copilot in PowerPoint from a labelled source automatically inherits the source sensitivity label and its protection settings. Check how the new deck is labelled before it is shared.

**Security & identity**
- No change documented to sign-in, consent or roles for this capability. The user's own file permissions are the boundary Microsoft names.

**Autonomy & actions**
- The user chooses the file and writes the prompt; the release-note steps describe no background or scheduled action. Agent Mode creates the new presentation from the user's prompt and the referenced file.

**Change & support**
- Expect questions from users on desktop and Mac, because this item is the web only and those platforms are separate roadmap items (555887 and 555889).
- Expect questions about why some users have the option and others do not, because the tier of Copilot licence that covers this feature is not yet published.

## Cost and licensing

Microsoft's Microsoft Copilot overview says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote. The same page describes Microsoft 365 Copilot (Basic) as users without the add-on licence who have access to Copilot capabilities inside apps, with some features subject to fair use limits, and lists "Create presentations from prompts or existing content" among the in-app PowerPoint features.

A price, meter or credit rate specific to referencing a PowerPoint file is not yet published, and which of the two tiers covers this feature is not yet published. The release-note entry names no licence. The indirect cost is the admin time to brief users and review sharing on decks.

To see or change who holds the Copilot add-on licence, use the licence row in the controls table.

## Scope

The roadmap record lists the Web platform, the Worldwide (Standard Multi-Tenant) cloud and General Availability, with status Launched and a target of March CY2026. Other clouds are not listed on this item. Desktop and Mac are separate roadmap items, 555887 and 555889.

The feature is part of Copilot in PowerPoint. The Microsoft Copilot overview describes the full experience as requiring the Microsoft 365 Copilot add-on licence and a Basic experience without it. Which of these experiences includes this feature is not yet published. The release note says the capability respects existing file permissions and access controls.

## Governance guidance

### Before rollout
- Confirm which of your users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (see the licence row in the controls table), because the overview ties the full Copilot in PowerPoint experience to that licence.
- Review sharing on decks that users are likely to reference, such as shared templates and board packs, because Microsoft says the capability follows existing file permissions.
- Tell PowerPoint users on the web how to reach the option: start edit with Copilot, then select Reference file.

### At rollout
- Check a test user on the web with and without the add-on licence to see whether Reference file appears, since Microsoft has not published which tier covers it.
- Brief users that desktop and Mac are separate roadmap items from this web item, and that the release note lists all three platforms.

### After rollout
- Collect user reports of decks that reused content from a more restricted file, and review that file's permissions.
- Watch the Microsoft 365 Copilot release notes and the roadmap item for any setting, default or licence statement for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence for Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Existing route, not a switch for this option: the overview ties the full experience of Copilot in PowerPoint to the add-on licence. Whether this feature needs it is not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's release-note entry names no admin setting for this feature at the time of writing (November 2026). The only control in the table is the Copilot licence, which decides which Copilot in PowerPoint experience a user has; it is not a switch for this one option.

Assigning licences needs an admin role that Microsoft's licence page covers; this briefing does not state which role. Because Microsoft says the feature respects existing file permissions, changing sharing on the source deck is the way to change what Copilot can read for a given user.

## Open questions

- Which Copilot licence tier (Basic or the Premium add-on) includes referencing a PowerPoint file in Agent Mode? Watch the Microsoft Copilot overview and the release notes.
- Is the Reference file option on by default for users who already have Copilot in PowerPoint on the web, or does an administrator have to turn something on? Watch Message center and the release notes.
- Does a setting exist to limit this option for some users without removing Copilot in PowerPoint entirely? Watch the Copilot controls documentation.

<!-- rationale
risk: Low. Microsoft's release note says the capability respects existing file permissions and access controls, so it reads decks the user can already open; the exposure is whatever those decks hold.
cost: Low. No separate charge or meter is published for this feature, and the Copilot licence tier that covers it is not published; the cost that is known is admin time and the product's existing Copilot licensing.
impact: Medium. Users who build decks with Copilot in PowerPoint on the web notice it; the roadmap lists this item for the web only, and Microsoft lists desktop and Mac under separate roadmap items.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The governance checklist's source-deck sharing review has a corresponding control row. | Found: Review sharing on decks that users are likely to reference, such as shared templates and board packs. / The only control in the table is the Copilot licence. | Fix: The Before rollout step 'Review sharing on decks that users are likely to reference' has no corresponding row in the controls table. Treat it as general review advice, not a documented table control; no new control row is requested.
-->
