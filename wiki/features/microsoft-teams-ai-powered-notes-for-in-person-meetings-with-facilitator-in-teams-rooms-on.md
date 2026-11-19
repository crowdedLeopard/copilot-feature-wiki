---
title: "Microsoft Teams Rooms on Android: Facilitator AI notes for in-person meetings"
slug: "microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-rooms-on"
roadmapId: 560700
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Teams Rooms on Android rooms with a Teams Rooms Pro licence get a Take notes button for Facilitator AI notes in in-person meetings. Microsoft's notice says no extra admin enablement is needed once prerequisites are met."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Teams and Surface Devices"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn says in-person note-taking is currently included with Teams Rooms Pro and lists a Teams Rooms Pro licence on each room resource account as the prerequisite. It adds that the licensing model may change before final release."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-rooms","facilitator","meeting-transcripts","sharepoint-embedded","pro-management-portal","meeting-policy","m365-copilot","gcc"]
sources:
  - title: "Facilitator in Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "MC1307888: (Updated) Microsoft Teams: AI-powered notes for in-person meetings with Facilitator in Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1307888"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap 560700"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560700"
    kind: "roadmap"
videos: []
related: ["meeting-policy","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-facilitator-detects-and-answers-questions"]
controls:
  - governs: "Take notes button on the room console home screen"
    scope: "other"
    ui:
      surface: "Pro Management portal"
      path: "Rooms > room > Settings > Device > Show Take notes button on the home screen"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    api: null
    note: "Learn says the default setting is enabled. The step is given for Facilitator in Teams Rooms without naming a platform."
  - governs: "Meeting transcription for users and room accounts"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity \"Your Policy Name\" -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "General meeting policy that Learn's setup steps point to; Learn names no policy for room accounts."
  - governs: "Loop components in Teams (IsLoopEnabled)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    note: "MC1307888 also asks admins to verify IsCollabMeetingNotesFluidEnabled, which the Loop page lists as a tenant-wide property."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-09-24T22:58:55"
changes:
  - date: "2026-11-18"
    note: "New briefing on Facilitator AI notes for in-person meetings in Teams Rooms on Windows, covering licensing, prerequisites and controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 71 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: removed the Update-M365TeamsApp blocking command, aligned the Loop prerequisites with MC1307512, stated the SharePoint quota for Loop notes and trimmed the checklist and impact rationale."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 83 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: removed the Facilitator app row from the controls table, kept its Teams admin center steps and the Update-M365TeamsApp caveat in the notes, and reworded the tenant-switch sentence."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Rewritten for the Android item (roadmap 560700): the brief's existing page described the Windows item, so no Windows content was carried over."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 74 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: the SharePoint quota sentence now states what the Loop admin page says, the first open question reflects the roadmap's In development status, and an unsupported impact claim was removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
  - date: "2026-11-18"
    note: "Rewritten for the Windows item (roadmap 560318): status is Rolling out, MC1307512 gives a late October to mid-November 2026 window, and the Android item's content was not carried over."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Rewritten for the Android item (roadmap 560700): the brief's existing page described the Windows item (roadmap 560318), so none of it was carried over; the Facilitator app checklist step it was held for is not repeated."
  - date: "2026-11-18"
    note: "Rewritten for the Windows item (roadmap 560318): the existing page described the Android item (roadmap 560700), so none of it was carried over; the unsupported Facilitator prerequisite checklist bullet is not repeated."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the licences statement: the Teams Rooms licences page states no price for Teams Rooms Pro, and describes Teams Rooms Basic as no additional cost."
  - date: "2026-11-19"
    note: "Rewritten for the Android item (roadmap 560700): the brief's existing page described the Windows item, so none of it was carried over; the Teams Rooms licences price sentence now refers only to Teams Rooms Pro."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 82 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Rewritten for the Windows item (roadmap 560318): the existing page described the Android item (roadmap 560700), so its content was not carried over; impact rationale and the Loop checklist step follow the verifier's minor findings."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 74 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Rewritten for the Android item (roadmap 560700): the existing page described the Windows item, so none of it was carried over; rollout dates follow MC1307888's 24 September 2026 update and the Loop checklist step names only the IsLoopEnabled row."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
version: 12
verification:
  status: "verified"
  date: "2026-11-19"
  version: 12
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "88ce8fe30882e542003fda3dd66241a8"
---

## What's changing

Facilitator, the AI agent that takes notes in scheduled Teams meetings, is being extended to in-person discussions in Teams Rooms on Android rooms. The roadmap item says someone invites Facilitator with one tap on the room console, and notes appear on the front-of-room display or touch board. According to Message Center post MC1307888, the button is **Take notes**, and notes are stored in tenant-owned SharePoint Embedded storage. MC1307888 says no meeting data is stored or cached on the Teams Rooms device after the meeting ends.

After the meeting, MC1307888 says participants who were added with the **Access notes** button on the console can view and edit the notes through the meeting recap in the meeting chat on the Teams desktop client, and that notes are deleted automatically if no participant was added. The roadmap item words this as notes being available via meeting recap when shared and deleted if no one is selected. Microsoft Learn's Facilitator in Teams Rooms page describes the same step as **Save notes** and says unsaved notes are deleted after the session ends, so the two pages name it differently.

The roadmap item lists the feature as In development, General Availability, with a target of November CY2026, for Worldwide (Standard Multi-Tenant) and GCC. MC1307888 (published 11 May 2026, updated 24 September 2026) says rollout begins in early November 2026 (previously late October) and is expected to complete by early December 2026 (previously mid-November), and sets no act-by date.

The sources differ on availability. Learn marks in-person note-taking as preview, and its FAQ says Facilitator is available on Teams Rooms on Windows and is projected to release on Teams Rooms on Android in a future release. The Teams Rooms release notes, however, list a preview of Facilitator agent note-taking for offline and ad hoc discussions in a Teams Rooms on Android build dated May 2025.

## Why it matters

This puts meeting transcription and AI notes into physical rooms where people may not think of themselves as being in a Teams meeting. MC1307888 says the feature is available automatically once licensing and prerequisite configuration are met, with no additional admin enablement required beyond existing settings. Android rooms that already meet the prerequisites can therefore expect the Take notes entry point as the update reaches them.

The decisions are about whether you want it: whether the Facilitator app, Loop and transcription settings it depends on stay on for room accounts, whether the room-level Take notes setting stays on, and what you tell people about where notes are stored and who can read them. Helpdesk will also field questions about how to start notes and where they went.

## Risk assessment

**Data exposure**

- Meeting audio and transcription data from the room are processed to generate summaries, decisions and action items (MC1307888). Notes are stored in tenant-owned SharePoint Embedded storage; Learn says they are saved as a Loop file there and treated as meeting transcript data.
- Notes appear on the front-of-room display or touch board while the session runs, so people in view of the screen can read them.

**Security & identity**

- Access to notes depends on who is added during the session: MC1307888 describes adding a work account with the Access notes button, and Learn describes adding participants' names in the Save notes dialog. Learn says only participants who add their names at the beginning of the session and have enrolled their profiles are identified and attributed.
- Learn's setup steps apply to the room resource account: the Facilitator app must be available to it, and if app availability is scoped to People and Groups the room account must be included.

**Autonomy & actions**

- Facilitator starts when someone selects Take notes on the console (MC1307888). Learn says muting the room microphone stops Facilitator or transcription capturing content, and that Facilitator only turns on transcription during the meeting and does not record it.

**Change & support**

- Learn marks the feature preview while the roadmap says General Availability, so behaviour and licensing described on Learn may differ from what reaches your rooms.
- Learn names the save step Save notes and MC1307888 names it Access notes; brief helpdesk on both. The Pro Management portal setting **Show Take notes button on the home screen** is documented as enabled by default.

## Cost and licensing

Licence: the Learn page for Facilitator in Teams Rooms says in-person note-taking is currently included with Teams Rooms Pro, and its prerequisite is a Teams Rooms Pro licence on each resource account used for your Teams Rooms devices. The roadmap item says "Available with Teams Rooms Pro", and MC1307888 names rooms licensed with Teams Rooms Pro as the affected group. The setup steps on that Learn page name no other licence and no meter.

Learn warns that the licensing model may change before final release.

Indirect costs: admin time to confirm the prerequisites on room accounts, and helpdesk briefing.

## Scope

Who: Teams Rooms on Android rooms whose resource accounts hold a Teams Rooms Pro licence (MC1307888). The licences page lists a Teams Rooms on Android device and touch console as a Teams Rooms system.

Clouds and rollout: the roadmap lists Worldwide (Standard Multi-Tenant) and GCC, platform Teams and Surface Devices. MC1307888 gives a Worldwide and GCC rollout beginning in early November 2026, expected to complete by early December 2026, and sets no act-by date.

Prerequisites: MC1307888 asks administrators to confirm Teams Rooms Pro licences, Facilitator enabled in the tenant, the Loop settings IsLoopEnabled and IsCollabMeetingNotesFluidEnabled, and meeting transcription enabled in Teams meeting policies. Learn adds the Pro Management portal note-taking setting. Notes are read afterwards on the Teams desktop client through the meeting recap.

## Governance guidance

### Before rollout

- Confirm Teams Rooms Pro licences are assigned to the resource accounts of the Android rooms you want covered.
- Check meeting transcription is on in the meeting policy that applies to the room accounts, using the transcription row below.
- Check IsLoopEnabled is on, using the Loop row below.
- Decide in the Pro Management portal whether **Show Take notes button on the home screen** stays on for each room.

### At rollout

- Test one Android room end to end: select Take notes, add a work account with Access notes, then open the notes from the meeting recap in the meeting chat on the Teams desktop client.
- Brief helpdesk and room users on how to start notes and where they are stored and read afterwards.
- Watch Message center for further updates to MC1307888, which moved its schedule on 24 September 2026.

### After rollout

- Review who was added to saved notes in a sample of rooms, and confirm sessions with no one added leave no notes.
- Re-read the Learn Facilitator in Teams Rooms page for changes to licensing and preview status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Take notes button on the room console home screen</strong><br><small class="controls__note">Learn says the default setting is enabled. The step is given for Facilitator in Teams Rooms without naming a platform.</small></td><td data-label="Admin UI"><strong>Pro Management portal</strong><br>Rooms › room › Settings › Device › Show Take notes button on the home screen <a href="https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Meeting transcription for users and room accounts</strong><br><small>User</small><br><small class="controls__note">General meeting policy that Learn's setup steps point to; Learn names no policy for room accounts.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &quot;Your Policy Name&quot; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Loop components in Teams (IsLoopEnabled)</strong><br><small>Tenant</small><br><small class="controls__note">MC1307888 also asks admins to verify IsCollabMeetingNotesFluidEnabled, which the Loop page lists as a tenant-wide property.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Availability depends on the room's Teams Rooms Pro licence, the Facilitator app, transcription, Loop and the room-level portal setting.

Learn's Teams Rooms setup step asks for the Facilitator app to be enabled for the room resource account in the Teams admin center, and says that if availability is scoped to People and Groups the resource account must be included.

Microsoft Learn documents no API for the Pro Management portal Take notes setting at the time of writing (November 2026), and the Learn setup step does not name a platform. The Loop page documents the Teams Loop settings as SharePoint PowerShell properties and gives no admin centre path for them. It also says the collaborative meeting notes property does not apply to collaborative meeting notes in Teams New Calendar.

The transcription row is the general meeting policy. Learn's setup step points to it without naming a policy for room accounts, so which policy the room account's in-person notes use is not stated.

## Open questions

- Will Learn's preview label and its "licensing model may change" warning change now that the roadmap shows General Availability as a target? Watch the Learn Facilitator in Teams Rooms page.
- Does the Pro Management portal **Show Take notes button on the home screen** setting apply to Android rooms, given that Learn gives the step without naming a platform?
- Which meeting policy does the room resource account use for these notes?
- MC1307888 expects rollout to complete by early December 2026 while the roadmap shows In development with a November CY2026 target: will Message center or the roadmap give a firmer date?

<!-- rationale
risk: Medium. Room audio is transcribed and summarised into notes stored in tenant SharePoint Embedded storage, and Microsoft's notice says the feature is available automatically once licensing and prerequisites are met.
cost: Low. Learn says in-person notes are currently included with Teams Rooms Pro, so the cost shown is admin time plus a Teams Rooms Pro licence for any room that lacks one; Learn warns the licensing model may change.
impact: Medium. People in rooms licensed with Teams Rooms Pro see a new Take notes entry point on the console and notes on the front-of-room display or touch board.
-->
