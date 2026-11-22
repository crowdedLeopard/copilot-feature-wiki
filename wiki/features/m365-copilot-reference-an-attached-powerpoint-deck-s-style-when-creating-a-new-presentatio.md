---
title: "PowerPoint on desktop: Copilot Agent Mode applies an attached deck's theme and styles to a new presentation"
slug: "m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-presentatio"
roadmapId: 555880
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Launched: users with Copilot in PowerPoint on desktop can attach an existing deck so a new presentation takes its theme and styles. Users choose whether to attach a deck; feature-specific admin prerequisites and licensing are not yet documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's licence comparison says a Microsoft 365 Copilot add-on licence gives the full experience of Copilot in PowerPoint, and a (Basic) licence can use Copilot in PowerPoint within fair use limits. Which tier covers this feature is not yet published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["powerpoint","m365-copilot","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 555880"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555880"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555881","powerpoint-async-notifications-for-powerpoint-agent-windows-desktop"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Role: at least License Administrator or User Administrator. Governs Copilot in PowerPoint access as a whole, not attaching a deck specifically."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-22"
roadmapModified: "2026-08-05T22:47:32"
changes:
  - date: "2026-11-21"
    note: "First briefing for the desktop item; Mac (555878) and Web (555879) are separate roadmap items for the same feature."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 49 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the summary: removed the unsupported claim that no admin action is required, and added the Word, Excel and PowerPoint Agents page as a source."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 59 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "e08e194bd37bc8992d73f495bb54adc0"
---

## What's changing

Copilot in PowerPoint on desktop can now take the look of an existing deck. When a user creates a presentation with Agent Mode, they can reference an existing PowerPoint file, and Copilot applies that file's theme and styles to the new deck so the design stays consistent. This is the roadmap item's own description.

Microsoft's Microsoft 365 Copilot release notes describe it as supporting "attaching an existing presentation when creating and editing a new one", and say that previously new presentations used default themes. The release notes give three steps: open PowerPoint and create a new presentation with Copilot, use the 'Attach file' feature to select an existing PowerPoint deck, and ask Copilot to generate slides using the attached deck's style. The release-notes entry does not use the words "Agent Mode"; the roadmap title does.

The roadmap record lists this item as Launched, with a target of June CY2026, General Availability, Worldwide (Standard Multi-Tenant) and the Desktop platform. An update dated June 5, 2026 on the item says the feature was still in development and would begin rolling out in mid-June 2026. The release notes list it, under roadmap IDs 555878 and 555880, in the section for updates released between October 28, 2026 and November 3, 2026, labelled Windows and Mac.

Microsoft lists the same feature under three roadmap IDs that differ by platform: 555878 (Mac), 555879 (Web) and 555880 (Desktop, covered here). All three show Launched, target June CY2026, and Worldwide (Standard Multi-Tenant).

## Why it matters

For a service owner this is a small change with a branding angle: new decks generated by Copilot can follow the theme of a template deck the user chooses, instead of the default theme the release notes say was used before. The effect depends on which deck users attach, so the organisation's approved template is the one worth pointing people to.

The release notes present it as a step the user takes ("Use the 'Attach file' feature"), so the view here is that each user decides whether to attach a deck. Nothing in the pages read says existing behaviour changes for anyone who does not attach one.

## Risk assessment

**Data exposure**
- The feature reads a deck the user attaches, so what Copilot can see is set by that user's choice of file. The release notes describe the attached file's theme and styles being applied; they do not say whether its slide content is also used (see Open questions). Users who attach a deck carrying confidential content should be told this is unconfirmed.

**Security & identity**
- No change identified: the release notes and roadmap describe no new sign-in, connector or permission for this feature.

**Autonomy & actions**
- The user starts the action by attaching a file and asking Copilot to generate slides. The pages read describe no step that runs without a user prompt.

**Change & support**
- Expect queries from users whose new deck does not look like the attached one, or who attach a deck from a different brand template. Tell users which deck is the approved template, and point them to the 'Attach file' steps in the release notes.

## Cost and licensing

Microsoft's Copilot overview page compares the licences. A user with the Microsoft 365 Copilot add-on licence has "access to the full experience of Copilot in Word, Excel, PowerPoint, and OneNote", and a user without the add-on but with a Microsoft 365 Copilot (Basic) licence "can use Copilot in Word, Excel, PowerPoint, and OneNote". The page notes that some features are subject to fair use limits.

Microsoft has not published which of these tiers covers attaching a deck for this feature, and no credit rate or meter specific to it is published at the time of writing (November 2026). The only cost the sources show is indirect: admin time to confirm licensing, and user communication.

## Scope

**Users and licences:** people who use Copilot in PowerPoint; see Cost and licensing for the tiers Learn describes.

**Platform and cloud:** the roadmap record lists the Desktop platform and Worldwide (Standard Multi-Tenant) for this item. Mac and Web are separate roadmap items (555878 and 555879). No other cloud is listed on this item.

**Rollout:** the roadmap item says rollout would begin in mid-June 2026 and lists it as Launched. Microsoft's notice about it is the Learn release notes; no Message Center post was supplied for this item.

**Roles:** assigning licences needs at least the License Administrator or User Administrator role.

## Governance guidance

### Before rollout
- Confirm which users hold a Microsoft 365 Copilot licence in Microsoft 365 admin center > Users > Active users, since licence assignment is the documented control over Copilot in PowerPoint access.
- Identify the approved template deck (or decks) that people should attach, and store it where users can open it.
- Decide whether to tell users that the Learn release notes describe theme and styles being applied, and that use of the attached deck's content is not described.

### At rollout
- Send users the three steps from the release notes: create a new presentation with Copilot, use 'Attach file', then ask Copilot to generate slides in the attached deck's style.
- Name the approved template in that message, so users do not attach drafts or decks with unreviewed content.

### After rollout
- Review support queries about new decks that do not match the template, and update the guidance.
- Re-check the Learn release notes and the roadmap item for changes to platforms or licensing for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Role: at least License Administrator or User Administrator. Governs Copilot in PowerPoint access as a whole, not attaching a deck specifically.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The row above is the control confirmed to govern Copilot in PowerPoint access as a whole, through licence assignment. It is not a switch for attaching a deck specifically. Whether another setting governs this capability specifically is listed under Open questions. Assigning licences needs at least the License Administrator or User Administrator role.

## Open questions

- Which licence tier (Microsoft 365 Copilot add-on or Microsoft 365 Copilot (Basic)) includes attaching a deck in Agent Mode? Watch the Copilot overview and licence pages on Learn.
- Does Copilot use only the attached deck's theme and styles, or also its slide content? Watch the Microsoft 365 Copilot release notes and any Learn page for Agent Mode in PowerPoint.
- Is there an admin setting, beyond licence assignment, that governs Agent Mode or attaching a deck in PowerPoint? Watch the Microsoft 365 admin center and Learn.
- Does Agent Mode in PowerPoint depend on the Anthropic models setting that Learn describes for Word, Excel and PowerPoint Agents in the Microsoft Copilot app? Watch the Learn Copilot admin pages.

<!-- rationale
risk: Low. The feature applies the theme and styles of a file the user attaches inside Copilot in PowerPoint, and the pages read describe no new data source, connector or autonomous action.
cost: Low. Only admin time and communication are shown; Microsoft publishes no separate licence or meter for this feature, and it sits within Copilot in PowerPoint, whose licence tiers are on Learn.
impact: Low. Only people who use Copilot in PowerPoint on desktop and choose to attach a deck will notice it; nothing changes for anyone else.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: What Copilot can see is set by the user's choice of attached file. | Found: Searched: Copilot PowerPoint attached deck style uses slide content only theme; attached presentation style theme permissions. Opened release-notes and copilot-overview. The feature entry identifies a styling input but does not define the full boundary of data Copilot can see. | Fix: Remove 'so what Copilot can see is set by that user's choice of file'. Keep 'The feature reads a deck the user attaches' and the existing statement that the release notes do not describe whether slide content is used.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / default: Only desktop Copilot users who choose to attach a deck will notice this change, and nothing changes for anyone else. | Found: Searched: Copilot in PowerPoint attached deck style default unchanged users who do not attach. Read the roadmap and the complete 555878/555880 release-notes entry. They describe selecting and using a deck; neither states that all other users' behaviour remains unchanged. | Fix: Replace the impact rationale with: 'Low. The documented workflow is a user-selected attachment in Copilot in PowerPoint on desktop; no source reviewed says existing behaviour changes for users who do not attach a deck.' Keep the user-opt-in default and the low impact rating.
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: Users > Active users is the documented starting page for confirming a user's licence assignment. | Found: go to the Users > Active users page. ... Select the row of the user ... In the right pane, select Licenses and Apps. ... Expand the Licenses section | Fix: Expand the checklist path to 'Microsoft 365 admin center > Users > Active users > user > Licenses and Apps > Licenses', matching the existing controls row. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
-->
