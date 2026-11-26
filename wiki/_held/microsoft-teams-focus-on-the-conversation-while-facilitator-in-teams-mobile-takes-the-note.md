---
title: "Microsoft Teams: Facilitator on mobile takes notes of in-person conversations with speaker attribution"
slug: "microsoft-teams-focus-on-the-conversation-while-facilitator-in-teams-mobile-takes-the-note"
roadmapId: 579864
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans speaker attribution for Facilitator notes captured from Teams on Android and iOS. Targeted December CY2026; Microsoft has not stated whether admins must act, and no mobile-specific control is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn states Facilitator is included with a Microsoft Copilot licence and subject to available capacity. A price, meter or licence specific to mobile speaker attribution is not yet published."
audiences: ["m365-admin","service-owner","compliance","end-user"]
tags: ["teams","facilitator","mobile","meeting-transcripts","ai","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 579864"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579864"
    kind: "roadmap"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Facilitator in Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp?view=teams-ps"
    kind: "docs"
videos: []
related: ["microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-rooms-on","microsoft-teams-facilitator-detects-and-answers-questions","microsoft-teams-audio-announcement-for-recording-and-transcription","meeting-policy"]
controls:
  - governs: "Whether Facilitator is available to everyone, specific users or groups, or no one"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Built-in Teams agents > agent > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <Facilitator-app-id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp?view=teams-ps"
    note: "Learn does not say this setting covers mobile note-taking or speaker attribution. The command sets app-centric availability; Microsoft does not state it also covers the Built-in Teams agents route."
  - governs: "A switch specific to mobile note-taking or speaker attribution"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-26"
roadmapModified: "2026-11-19T00:35:27"
changes:
  - date: "2026-11-19"
    note: "First briefing: roadmap-only for speaker attribution on mobile; Learn documents Facilitator licensing and availability controls but nothing mobile-specific."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: added the documented Update-M365TeamsApp availability command, and removed wording that said mobile speaker attribution attaches names; the roadmap says only that it distinguishes who said what."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 62
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "4a3c7c6440f90e7fa37530378d8a277f"
---

## What's changing

Microsoft plans to add speaker attribution to Facilitator's note-taking in Teams mobile. The roadmap item describes a user starting note-taking from their phone so that Facilitator captures and transcribes an ad hoc, in-person discussion, then generates notes, summaries and follow-up actions in which speaker attribution distinguishes who said what.

Microsoft Learn does not yet describe this change. Its Facilitator setup page already lists "Mobile capture of ad-hoc discussions and action items" as generally available, and the roadmap item (status In development) targets December CY2026 for the speaker attribution version. What follows about behaviour is therefore the roadmap's description, plus what Learn says about Facilitator in general.

The roadmap item lists Android and iOS, the Worldwide (Standard Multi-Tenant) cloud and General Availability as the release phase. Separately, Learn documents Facilitator in Teams Rooms for unscheduled in-person discussions as a preview, included with Teams Rooms Pro; that is a different surface from a phone.

## Why it matters

This puts AI transcription of in-person speech, with speaker attribution, into a phone app that is not tied to a scheduled meeting or a meeting room. For a service owner that raises questions about who is being captured, where the notes are kept and who can open them, none of which the roadmap item answers.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. Facilitator itself is documented as allowed by default, so users who hold the licence may be able to use the capability once it ships; confirm that before the December CY2026 target rather than after.

## Risk assessment

**Data exposure**
- The roadmap item says Facilitator transcribes an in-person conversation and generates notes, summaries and follow-up actions. For Teams meetings, Learn says Facilitator data is stored as a .loop file in the Meetings folder in OneDrive of the user who initiated Facilitator and is treated as meeting transcript data. Where notes from a phone-started conversation are stored is not documented.
- The roadmap says speaker attribution helps distinguish who said what. Which people can be attributed on mobile, and how, is not yet documented.

**Security & identity**
- Only licensed users can initiate Facilitator, per Learn. How mobile speaker attribution identifies a speaker is not described, so confirm it before telling staff what is captured about them.

**Autonomy & actions**
- Facilitator generates follow-up actions from the conversation. The roadmap item does not say whether it sends or assigns them; check this once documentation exists.

**Change & support**
- People in the conversation who are not using Teams may not know capture is running. Plan guidance for staff on when to tell others they are being transcribed.
- Learn documents Facilitator availability controls but none specific to mobile capture or speaker attribution at the time of writing (November 2026).

## Cost and licensing

Learn's Facilitator setup page states that Facilitator is included with a Microsoft Copilot licence and subject to available capacity. It lists three licensing requirements: an eligible Microsoft 365 base licence, an eligible Microsoft Teams licence and a Microsoft Copilot licence. It also says unlicensed users cannot prompt Facilitator, though they can see others' prompts and Facilitator's responses.

A price, meter or licence specific to mobile speaker attribution is not yet published. The cost the sources show is therefore indirect: admin time to check availability and to brief users. The Teams Rooms in-person note-taking preview is documented as included with Teams Rooms Pro; that statement is about Teams Rooms devices and is not evidence for phones.

## Scope

The roadmap item lists Microsoft Teams on Android and iOS, the Worldwide (Standard Multi-Tenant) cloud and General Availability. No other cloud is listed on the roadmap item, which is a record fact and not a statement that the feature is unavailable elsewhere.

The Learn Facilitator page requires an eligible Microsoft 365 base licence, an eligible Teams licence and a Microsoft Copilot licence. Whether mobile note-taking needs anything beyond that, such as Loop experiences in Teams, is not stated for mobile. The target is December CY2026 and the status is In development, so treat dates as targets until the status is Launched.

## Governance guidance

### Before rollout
- Check whether Facilitator is allowed for your users in the Teams admin center under Teams apps > Built-in Teams agents (see the controls table), and decide which users or groups should have it.
- Identify which users hold a Microsoft Copilot licence, since only licensed users can initiate Facilitator.
- Draft guidance for staff on telling other people when they start phone note-taking in a conversation.

### At rollout
- Watch Message center and the roadmap item for a change in status from In development, and for any post that sets a default or an act-by date.
- Test the feature with a pilot group on Android and iOS and record where the notes are saved and who can open them.

### After rollout
- Confirm with your compliance team how notes saved from phone-started conversations are retained and searched, once Microsoft documents where they are stored.
- Revisit the availability setting if pilot results show notes landing somewhere your retention or eDiscovery processes do not reach.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Facilitator is available to everyone, specific users or groups, or no one</strong><br><small>Tenant</small><br><small class="controls__note">Learn does not say this setting covers mobile note-taking or speaker attribution. The command sets app-centric availability; Microsoft does not state it also covers the Built-in Teams agents route.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Built-in Teams agents › agent › Edit availability <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;Facilitator-app-id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch specific to mobile note-taking or speaker attribution</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn gives two routes for Facilitator availability. The Facilitator setup page says to allow or block Facilitator under Teams apps > Manage apps, and says Facilitator is allowed by default unless all apps are blocked for the organisation. The Teams agent and app management page says built-in agents such as Facilitator are managed from Teams apps > Built-in Teams agents, not Manage apps. The two pages disagree; the table uses the later one, and you should check which page your tenant shows.

The Facilitator setup page documents [app-centric management](https://learn.microsoft.com/microsoftteams/app-centric-management); the `Update-M365TeamsApp` command in the table sets app-centric availability to Everyone. Microsoft does not state there whether this automation also covers the newer Built-in Teams agents route.

Learn also documents that Loop experiences in Teams control AI-generated notes for meetings, using the `IsCollabMeetingNotesFluidEnabled` setting in PowerShell, tenant-wide. That is documented for meetings; it is not confirmed to apply to notes started on a phone.

## Open questions

- Where are notes from a phone-started conversation stored, who can open them, and do retention and eDiscovery cover them? Watch the Facilitator setup page and Purview guidance on Microsoft Learn.
- How does speaker attribution identify people on mobile? The Teams Rooms page says only participants who add their names at the start and have enrolled profiles are attributed; whether that applies to phones is not stated.
- Is the capability on by default for licensed users when it launches, and will Microsoft send a Message center post? The default is not stated.
- Which control governs mobile capture: Built-in Teams agents availability, the transcription policy, the Loop setting or something new?
- Does speaker attribution carry a licence, price or capacity limit beyond the Microsoft Copilot licence?

<!-- rationale
risk: Medium. A phone can capture an in-person conversation and turn it into notes with speaker attribution, and Microsoft has not yet documented where these notes are stored or a control specific to mobile capture.
cost: Low. Facilitator is documented as included with a Microsoft Copilot licence, subject to available capacity; no separate price or meter for mobile speaker attribution is published, so the known cost is admin time.
impact: Medium. Licensed users on Android and iOS who start note-taking notice it, and the people being recorded in a conversation are affected without using Teams themselves.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: 'the table uses the later one' / date: The agent and app management page used for the table is the later of the two conflicting Microsoft pages. | Found: Facilitator setup metadata: ms.date="2026-11-04T00:00:00Z", updated_at="2026-11-18T06:40:00Z". Manage-apps metadata: ms.date="2026-07-05T00:00:00Z", updated_at="2026-08-18T22:08:00Z". | Fix: Replace 'The two pages disagree; the table uses the later one, and you should check which page your tenant shows.' with 'The two pages disagree; the table uses the Built-in Teams agents route documented on the agent and app management page, and you should check which page your tenant shows.' | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note: first sentence; rendered controls table / applicability: The correctly documented Facilitator availability control is described with a caveat that Learn does not confirm mobile note-taking or speaker attribution coverage. | Found: Built-in Teams agents like Channel Agent, Facilitator, and other built-in agents available across chats, channels, and meetings are managed from the Built-In Teams agents page, not the Manage apps page. | Fix: Replace the first sentence of controls[0].note, and its rendered copy, with: 'This setting controls who can use built-in Teams agents such as Facilitator.' Keep the separate caveat about automation for the Built-in Teams agents route. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
-->
