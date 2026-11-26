---
title: "Microsoft Teams Rooms on Windows: Facilitator takes AI notes of in-person meetings"
slug: "microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-r-560318"
roadmapId: 560318
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Teams"]
summary: "Facilitator in Teams Rooms on Windows can take AI notes of in-person meetings from a console tap. Microsoft's notice says it becomes available automatically once rooms hold Teams Rooms Pro and the prerequisites are met."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Teams and Surface Devices"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The roadmap says 'Available with Teams Rooms Pro'. Learn says the feature is currently included with Teams Rooms Pro and asks for a Teams Rooms Pro licence on each room resource account; it adds that the licensing model may change before final release. No separate meter or price is stated for this feature."
audiences: ["m365-admin","service-owner","compliance","end-user"]
tags: ["facilitator","teams-rooms","teams","meeting-transcripts","sharepoint-embedded","pro-management-portal","meeting-policy","licensing","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 560318"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560318"
    kind: "roadmap"
  - title: "Facilitator in Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    kind: "learn"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "MC1307512: (Updated) Microsoft Teams: AI-powered notes for in-person meetings with Facilitator in Teams Rooms on Windows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1307512"
    kind: "message-center"
videos: []
related: ["microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-rooms-on","microsoft-teams-focus-on-the-conversation-while-facilitator-in-teams-mobile-takes-the-note","meeting-policy","microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings"]
controls:
  - governs: "Whether the Facilitator app is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Learn: Facilitator is allowed by default. Scope to groups with an app permission policy; room resource accounts must be included. The cmdlet page is generic and does not name Facilitator."
  - governs: "Whether users can transcribe meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Facilitator in Teams Rooms lists turning on transcription as a setup step. Which policy applies to a room account is not stated."
  - governs: "Loop components in Teams (IsLoopEnabled)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "Applies to the entire tenant, not per user. Needs the SharePoint Online administrator role. Listed in the notice as a prerequisite."
  - governs: "Collaborative meeting notes in Teams (IsCollabMeetingNotesFluidEnabled)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "Applies to the entire tenant, not per user. Listed in the notice as a prerequisite; the Facilitator page says disabling it turns off AI-generated meeting notes for all users."
  - governs: "Whether a room shows the Take notes button on its home screen"
    scope: "other"
    ui:
      surface: "Pro Management portal"
      path: "Rooms > room > Settings > Device > Show Take notes button on the home screen"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    api: null
    note: "Learn says the default setting is enabled. Per room."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 560318 (Teams Rooms on Windows), covering rollout, prerequisites, the Learn preview note and the controls table."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 68 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 81 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 81
  confirmed: 78
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "1c9812fe6c408aaf4d25d55348414d07"
---

## What's changing

Facilitator, Microsoft's AI meeting agent, can now take notes in a physical room without a scheduled or hybrid meeting. On Teams Rooms on Windows, a person selects the Take notes button on the console (Microsoft's notice MC1307512), and Facilitator shows notes, decisions and action items on the front-of-room display or touch board as people speak. This page covers roadmap item 560318 (Windows). Microsoft lists a separate roadmap item, 560700, for Teams Rooms on Android, which the roadmap shows as In development with a target of November CY2026.

Learn describes the session this way: Facilitator turns on transcription only, and the meeting is not recorded. At the end, someone selects **Save notes** and adds participants' names so they can open the notes and transcript later; unsaved notes are deleted after the session ends. Saved notes appear under **Recap** > **Notes** in the Teams meeting chat titled 'Meeting with [conference room name]'. Facilitator stores the notes as a Loop file in SharePoint Embedded storage that belongs to the tenant, and the data is treated as meeting transcript data. The notice states that no meeting data is stored or cached on the room device after the meeting ends.

The roadmap record shows status Rolling out, release phase General Availability, target October CY2026, for Worldwide (Standard Multi-Tenant) and GCC. The notice gives a rollout start in late October 2026 (previously early September) and completion by mid-November 2026 (previously late September), with no act-by date. The Learn page for the feature still carries a note, at the time of writing (November 2026), that in-person note-taking is in preview and that its experience and licensing model may change before final release. The roadmap and the notice describe general availability, so treat the two as differing until Learn is updated.

## Why it matters

Any person standing in a licensed room can now start AI transcription and summarisation with one tap, with no meeting invite and no organiser. Microsoft's notice says the feature is available automatically once licensing and prerequisite configurations are met, with no additional admin enablement beyond existing settings. Learn says Facilitator is allowed by default and that the Take notes button setting in the Pro Management portal is enabled by default, so a room that already meets the prerequisites is likely to show the entry point as the update reaches it.

For a service owner the decision is whether to leave that default in place. The controls are the prerequisites themselves: the Facilitator app, meeting transcription, the two Loop settings and the portal button. Plan helpdesk guidance on how to save notes and where they end up, because notes nobody saves are deleted, and saved notes go into tenant storage as meeting transcript data.

## Risk assessment

**Data exposure**

- Speech in the room is transcribed and turned into summaries, decisions and action items. The notes are stored as a Loop file in tenant-owned SharePoint Embedded storage and treated as meeting transcript data (Learn). The transcription policy and the Loop settings in the controls table decide whether the feature can run.
- Saved notes are available to the participants whose names were added at save time, through the meeting recap (Learn and the notice). Whether retention, eDiscovery and audit treat these in-person notes the same as scheduled-meeting notes is listed under Open questions.

**Security & identity**

- Learn says that only participants who add their names at the start of the session, and who have enrolled their profiles, are identified and attributed. Other people in the room can be captured without attribution.
- Per the notice, access to notes requires adding a work account with the Access notes button on the console. Learn names the in-room stop: mute the room microphone so that Facilitator or transcription captures nothing.

**Autonomy & actions**

- A person starts each session from the console. The notice and Learn describe the output as notes, summaries, decisions and action items, and Learn describes in-room participants' own names being added before saving.

**Change & support**

- The feature depends on a chain of settings: a Teams Rooms Pro licence on the room resource account, the Facilitator app, transcription, Loop experiences in Teams and the portal button. The notice says availability depends on those existing tenant settings, so a gap in one of them is the likely cause of a room with no Take notes entry point.
- Learn still labels in-person note-taking as preview while the roadmap says general availability. Expect support questions if a room's experience differs from either description.

## Cost and licensing

**Licence.** The roadmap says the feature is available with Teams Rooms Pro. Learn says in-person note-taking is currently included with Teams Rooms Pro, and its prerequisite is a Teams Rooms Pro licence assigned to each resource account for your Teams Rooms devices ([Facilitator in Microsoft Teams Rooms](https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms)). The same note warns that the licensing model may change before final release. For scheduled meetings, Facilitator in Teams has its own requirements; Learn says only the meeting organiser needs a Copilot licence when a Teams Rooms device joins such a meeting.

**Meter.** The Learn pages read for this briefing state no per-use meter, credit rate or price for in-person notes. Teams Rooms licences are described on the [Teams Rooms licences](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing) page, which separates Teams Rooms Pro from Teams Rooms Basic.

**Indirect costs.** Learn's Loop page says Loop file storage, including in SharePoint Embedded, counts against your organisation's SharePoint quota. Admin time goes on checking the prerequisites and briefing the helpdesk.

## Scope

**Who and where.** Rooms with Teams Rooms on Windows devices whose resource accounts hold a Teams Rooms Pro licence. The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, on Teams and Surface Devices. Learn says the feature is available on Teams Rooms on Windows and projected for Teams Rooms on Android in a future release; Microsoft tracks Android as roadmap item 560700.

**Rollout.** Per the notice, the rollout runs from late October 2026 to mid-November 2026. The notice says the feature is available automatically once licensing and prerequisite configurations are met.

**Prerequisites (Learn and the notice).** A Teams Rooms Pro licence on each resource account; the Facilitator app enabled for the room resource account (if app availability is scoped to People and Groups, include the room account); meeting transcription turned on; Loop experiences turned on for the room account; and the **Show Take notes button on the home screen** setting in the Pro Management portal, which Learn says is enabled by default. The notice names IsLoopEnabled and IsCollabMeetingNotesFluidEnabled as the Loop settings to verify. Notes are viewed afterwards in the Teams desktop client meeting recap.

## Governance guidance

### Before rollout

- Confirm a Teams Rooms Pro licence is assigned to each room resource account that should offer the feature.
- Check that the Facilitator app is allowed in the Teams admin center and, where availability is scoped to People and Groups, that the room resource accounts are included.
- Verify the Transcription setting in the meeting policy that covers the room accounts, and the IsLoopEnabled and IsCollabMeetingNotesFluidEnabled settings, using the paths and commands in the controls table.
- Brief the helpdesk on how to start notes, how to save them with participants' names, and where saved notes appear.

### At rollout

- Pilot in one or two rooms and confirm the Take notes entry point appears on the console and the front-of-room display.
- Decide per room whether to keep the Pro Management portal setting **Show Take notes button on the home screen** enabled.
- Tell room users that unsaved notes are deleted and that muting the room microphone stops capture.

### After rollout

- Watch Message center post MC1307512 and the Learn page for the removal of the preview note and any licensing change.
- Check that saved notes reach the intended participants through the meeting recap.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Facilitator app is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Learn: Facilitator is allowed by default. Scope to groups with an app permission policy; room resource accounts must be included. The cmdlet page is generic and does not name Facilitator.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings</strong><br><small>User</small><br><small class="controls__note">Facilitator in Teams Rooms lists turning on transcription as a setup step. Which policy applies to a room account is not stated.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Loop components in Teams (IsLoopEnabled)</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the entire tenant, not per user. Needs the SharePoint Online administrator role. Listed in the notice as a prerequisite.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Collaborative meeting notes in Teams (IsCollabMeetingNotesFluidEnabled)</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the entire tenant, not per user. Listed in the notice as a prerequisite; the Facilitator page says disabling it turns off AI-generated meeting notes for all users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a room shows the Take notes button on its home screen</strong><br><small class="controls__note">Learn says the default setting is enabled. Per room.</small></td><td data-label="Admin UI"><strong>Pro Management portal</strong><br>Rooms › room › Settings › Device › Show Take notes button on the home screen <a href="https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Facilitator allow or block setting works for the whole organisation, and Learn says an app permission policy can scope it to a group of users. Learn also says that if all apps are blocked for your organisation, Facilitator is blocked. Transcription is a policy setting that Learn describes as both per-organiser and per-user; which policy applies when a room account starts notes is listed under Open questions.

The two Loop settings apply to the entire tenant and cannot be configured at user level, per the Loop page, and running Set-SPOTenant needs the SharePoint Online administrator role. The Facilitator page says that turning off IsCollabMeetingNotesFluidEnabled turns off AI-generated notes for meetings for all users in the organisation. The Pro Management portal setting is per room.

## Open questions

- Which meeting policy and which account's Transcription setting apply when notes start from the room console, given that Learn calls transcription a per-organiser and per-user policy? Watch the Facilitator in Teams Rooms Learn page.
- Do the limitations Learn lists for Facilitator in meetings, such as eDiscovery not collecting the notes automatically as cloud attachments, also apply to in-person notes saved from a room? Watch the Facilitator setup page and the Purview Facilitator page.
- When will Learn drop the preview note on in-person note-taking, and will the 'included with Teams Rooms Pro' licensing model stay as it is?
- Will Microsoft document a scripting route for the Pro Management portal Take notes button setting, so it can be managed across many rooms? Watch the Teams Rooms Learn pages.

<!-- rationale
risk: Medium. Speech in the room is transcribed and summarised into notes kept in tenant SharePoint Embedded storage, and Microsoft's notice says the feature needs no extra admin enablement once prerequisites are met.
cost: Low. Learn says the feature is currently included with Teams Rooms Pro and lists no per-use meter; rooms without a Teams Rooms Pro licence would need one, so the main cost is licence and admin time.
impact: Medium. People who meet in rooms with Teams Rooms Pro devices see a Take notes button and an on-screen Facilitator; users elsewhere notice nothing.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: first paragraph / record: The Android roadmap item 560700 is In development. | Found: Item 560700: "status": "Rolling out", "modified": "2026-11-20T23:20:27" | Fix: Replace 'which the roadmap shows as In development with a target of November CY2026' with 'which the roadmap shows as Rolling out with a target of November CY2026'. Cite https://www.microsoft.com/microsoft-365/roadmap?id=560700.
- [unsupported, major] Why it matters: first paragraph / behaviour: An in-person Facilitator session has no organiser. | Found: Searched: Facilitator Teams Rooms in-person notes organizer meeting policy room resource account. Read rooms/facilitator-teams-rooms, facilitator-teams and meeting-transcription-captions; they describe unscheduled discussions but do not state that the resulting session has no organiser. | Fix: Remove 'and no organiser' from the first sentence of Why it matters.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / record: Microsoft separately tracks in-person Facilitator notes on Teams Rooms on Android as roadmap item 560700. | Found: "id": 560700; "title": "Microsoft Teams: AI-powered notes for in-person\nmeetings with Facilitator in Teams Rooms on Android" | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=560700 to sources for the Android item's identity, status and target.
- [supported, minor] Scope: Who and where / availability: The feature's Learn page says Windows is available and Android is projected for a future release. | Found: Facilitator is available on Teams Rooms on Windows and is projected to release on Teams Rooms on Android in a future release. | Fix: After that sentence add: 'The Teams Rooms release notes separately list AI-powered notes for in-person meetings with Facilitator in the November 2026 Android release, so these Microsoft pages differ.' Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution. | Source: https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: Every control the governance checklist asks administrators to check appears in the controls table. | Found: Checklist: 'Confirm a Teams Rooms Pro licence is assigned to each room resource account'. The table contains app availability, transcription, two Loop settings and the home-screen button, but no licence-assignment control. | Fix: The Before rollout licence-assignment check has no controls-table row. Remove that checklist bullet; retain the licence requirement in Cost and licensing and Scope. Do not add a control row.
-->
