---
title: "PowerPoint on Mac: reference a Teams meeting or chat when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod"
roadmapId: 555885
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Agent Mode in PowerPoint on Mac can now use a Teams meeting or chat as source material for a new deck. Launched for Worldwide; Microsoft has not stated a default or the licence for this option, so review fit."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's overview describes Copilot in PowerPoint as a Basic experience without the Microsoft 365 Copilot add-on licence and a full (Premium) experience with it. Which covers this option is not yet published, nor is a price or meter for it."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["powerpoint","m365-copilot","teams","meeting-transcripts","macos","licensing"]
sources:
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 555885"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555885"
    kind: "roadmap"
videos: []
related: ["meeting-transcripts","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555897","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po"]
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
  - governs: "Whether users with a meeting policy can transcribe meetings and group calls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity \"Your Policy Name\" -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing Teams control, not a switch for this option. Microsoft says Copilot needs transcription or recording to reference meeting content after a meeting ends; whether this option reads transcripts is not yet published."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-24"
    note: "First briefing for the Mac item: referencing a Teams meeting or chat in Copilot Agent Mode, launched; default, licence experience and permission model not yet published."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected: replaced the claim that Microsoft has not said whose permissions apply with its documented view-permission statement, and removed the unsupported claim about the deck's own sharing."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 53 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 51
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "eceeaae92b33db161bd6e207e087ebff"
---

## What's changing

Copilot in PowerPoint can now use a referenced Teams meeting or chat as context when a user creates a presentation with Agent Mode. This roadmap item covers the Mac. The roadmap item states: "You can now reference a Teams meeting or chat when creating a presentation with Agent Mode in PowerPoint."

Microsoft's Microsoft 365 Copilot release notes (entry dated July 01, 2026, listing Windows, Web and Mac) describe the user steps: open PowerPoint and start Copilot, enter a prompt that references the Teams meeting or chat to use, and press Enter, and Copilot creates a presentation using the referenced Teams content. The entry says the integration "supports referencing meetings and chat messages securely within the presentation creation process"; it gives no permission details and does not say what content of a meeting (for example a transcript) is read.

Microsoft lists the feature under three roadmap ids: 555883 for Web, 555884 for Desktop and this one, 555885, for Mac. The records give the same status, target date, cloud and release phase; only the platform differs. The release-note entry cites all three ids.

The roadmap record gives status Launched, a target of March CY2026, release phase General Availability and cloud Worldwide (Standard Multi-Tenant). Neither the record nor the release-note entry states a default for the option, and Microsoft Learn has no page specific to this feature beyond that entry.

## Why it matters

This puts Teams conversations, which often hold decisions, names and figures that were never meant for a slide deck, one prompt away from a new presentation. Expect decks that quote or summarise meetings and chats, and expect them to be shared more widely than the original meeting or chat was. The exposure to plan around is what happens to the deck afterwards.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes or that an administrator has to switch anything. Users who already use Agent Mode in PowerPoint on Mac may find the option on their own; plan a short communication and a check of your Teams transcription settings rather than a rollout project.

## Risk assessment

**Data exposure**
- Copilot builds a deck from a meeting or chat the user names in the prompt. Microsoft's release note calls this secure but gives no permission details. Microsoft states that Copilot only surfaces organizational data to which the individual user has at least view permissions, so confirm in a test that a user cannot pull in a meeting or chat they could not already open.
- The resulting deck is a new file. Meeting or chat content that was limited to attendees can end up in a deck that is shared more widely, so check how decks created this way are labelled and shared. See [Sensitivity labels](/concepts/sensitivity-labels/).
- Microsoft's Copilot requirements page says that to allow Copilot to reference meeting content after a meeting ends, you configure transcription or recording. Whether this option relies on a transcript is not yet published. See [Meeting transcripts](/concepts/meeting-transcripts/).

**Security & identity**
- No change to sign-in, consent or admin roles is described for this option.

**Autonomy & actions**
- The user writes the prompt and names the meeting or chat; the release-note steps describe no background or scheduled action. Agent Mode creates the presentation from that prompt.

**Change & support**
- Expect questions from Windows and web users, because this item lists Mac only and those platforms are separate roadmap items (555884 and 555883), although the release-note entry lists all three.
- Expect questions about why some users see the option and others do not, because which Copilot experience covers it is not yet published.

## Cost and licensing

Microsoft's Microsoft Copilot overview says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote. Users without the add-on licence can still use Copilot in those apps under a Basic experience, with some features subject to fair use limits. Its list of Basic PowerPoint features reads "Create presentations from prompts or existing content, summarize presentations or edit presentations", and the Premium experience includes everything in Basic.

Which of the two experiences covers referencing a Teams meeting or chat in Agent Mode is not yet published, and the release-note entry names no licence. A price, meter or credit rate for this option is not yet published. The indirect cost is admin time to brief users and to review Teams transcription settings and deck sharing.

To see or change who holds the add-on licence, use the licence row in the controls table.

## Scope

The roadmap record lists the Mac platform, the Worldwide (Standard Multi-Tenant) cloud and General Availability, with status Launched and a target of March CY2026. Other clouds are not listed on this item. Web (555883) and Desktop (555884) are separate roadmap items.

The feature is part of Copilot in PowerPoint. The Microsoft Copilot overview describes the full experience as needing the Microsoft 365 Copilot add-on licence, and a Basic experience without it. Prerequisites specific to this option, such as whether a Teams transcript must exist, are not yet published.

## Governance guidance

### Before rollout
- Confirm which Mac users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (licence row in the controls table), because the overview ties the full Copilot in PowerPoint experience to that licence.
- Review the Teams meeting policy **Transcription** setting for the users who would reference meetings (Teams admin center row in the controls table), because Microsoft says Copilot needs transcription or recording to reference meeting content after a meeting ends.
- Decide how decks built from meetings and chats should be labelled and shared, and tell users before the option reaches them.

### At rollout
- Test with a Mac user who is an attendee of a meeting and one who is not, to validate the documented user-permission boundary.
- Test with and without the add-on licence to see whether the option appears, since Microsoft has not published which experience covers it.
- Tell Windows and web users that their platforms have separate roadmap items, even though the release-note entry lists them.

### After rollout
- Collect user reports of decks that reused content from a restricted meeting or chat, and review how those decks were shared.
- Watch the Microsoft 365 Copilot release notes and the roadmap item for any setting, default or licence statement for this option.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence for Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Existing route, not a switch for this option. The overview ties the full experience of Copilot in PowerPoint to the add-on licence; whether this option needs it is not yet published. Needs at least License or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users with a meeting policy can transcribe meetings and group calls</strong><br><small>User</small><br><small class="controls__note">Existing Teams control, not a switch for this option. Microsoft says Copilot needs transcription or recording to reference meeting content after a meeting ends; whether this option reads transcripts is not yet published.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &quot;Your Policy Name&quot; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's release-note entry names no admin setting for this option at the time of writing (November 2026). The two rows in the table are existing controls an administrator uses today, not switches for this option: one decides who holds the Copilot add-on licence, the other whether Teams meeting transcription is allowed.

Microsoft's licence page says you must be at least a License or User Administrator to assign licences. The Teams transcription page says that when organizers turn off Microsoft Copilot in Teams meetings and events, recording and transcription are also turned off, and that transcripts are stored together with meeting recordings in OneDrive and SharePoint storage. Whether this option reads those transcripts is not yet published.

## Open questions

- Does referencing a meeting need a saved transcript or recording? Watch the Microsoft 365 Copilot release notes and the Microsoft Copilot requirements page.
- Is the option on by default for users who already have Agent Mode in PowerPoint on Mac, or does an administrator have to turn something on? Watch Message center and the release notes.
- Which Copilot experience, Basic or the Premium add-on, includes referencing a Teams meeting or chat in Agent Mode? Watch the Microsoft Copilot overview.
- Does an admin setting exist to limit this option for some users without removing Copilot in PowerPoint entirely? Watch the release notes and the Copilot admin documentation.

<!-- rationale
risk: Medium. Teams meeting and chat content becomes a source for new decks, and Microsoft's release note names no setting for this option; existing Teams transcription and licence controls cover it only in part.
cost: Low. The only cost the sources show is admin time; Microsoft's overview splits Copilot in PowerPoint into Basic and Premium (add-on licence) experiences, and which covers this option, or any price or meter for it, is not yet published.
impact: Low. Only Mac users of Copilot in PowerPoint who build decks with Agent Mode will see the option; Windows and web are separate roadmap items.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure, second bullet / behaviour: The resulting deck is a new file. | Found: Searched: 'PowerPoint Copilot new file'; read release entry, Create a new presentation with Copilot and July 22, 2025 release-note excerpts. New-file text is qualified to starting from an existing presentation; this option's entry says only that it creates a presentation. | Fix: Replace 'The resulting deck is a new file.' with 'Copilot creates a presentation using the referenced Teams content.' as stated at https://learn.microsoft.com/microsoft-365/copilot/release-notes#july-01,-2026.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; Risk assessment: Change & support; Governance guidance; rationale: impact / record: Roadmap item 555883 is the separate Web item for this capability. | Found: "id": 555883; "description": "You can now reference a Teams meeting or chat when creating a presentation with Agent Mode in PowerPoint."; "platforms": ["Web"] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=555883 to sources as a roadmap source for the Web record facts.
- [supported, minor] What's changing; Scope; Risk assessment: Change & support; Governance guidance; rationale: impact / record: Roadmap item 555884 is the separate Desktop item for this capability. | Found: "id": 555884; "description": "You can now reference a Teams meeting or chat when creating a presentation with Agent Mode in PowerPoint."; "platforms": ["Desktop"] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=555884 to sources as a roadmap source for the Desktop record facts.
- [contradicted, minor] Governance guidance: Before rollout, third bullet; Governance controls table / consistency: The checklist's deck labelling and sharing control has a corresponding controls-table row. | Found: Decide how decks built from meetings and chats should be labelled and shared ... The two rows in the table are ... one decides who holds the Copilot add-on licence, the other whether Teams meeting transcription is allowed. | Fix: The Before rollout step about deck labelling and sharing has no controls-table row. Remove that bullet to resolve the checklist/table mismatch without adding a control row.
-->
