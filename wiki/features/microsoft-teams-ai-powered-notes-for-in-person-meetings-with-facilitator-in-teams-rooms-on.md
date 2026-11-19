---
title: "Microsoft Teams Rooms on Windows: Facilitator AI notes for in-person meetings"
slug: "microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-rooms-on"
roadmapId: 560318
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Teams"]
summary: "Teams Rooms on Windows rooms with a Teams Rooms Pro licence get a Take notes button for Facilitator AI notes in in-person meetings. Microsoft's notice says no extra admin enablement is needed once prerequisites are met."
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
  notes: "Learn says in-person note-taking is currently included with Teams Rooms Pro and lists a Teams Rooms Pro licence on each room resource account as the prerequisite. It adds that the licensing model may change before final release. Neither Learn page names a meter or a Teams Rooms Pro price."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-rooms","facilitator","meeting-transcripts","sharepoint-embedded","pro-management-portal","meeting-policy","m365-copilot","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 560318"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560318"
    kind: "roadmap"
  - title: "MC1307512: (Updated) Microsoft Teams: AI-powered notes for in-person meetings with Facilitator in Teams Rooms on Windows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1307512"
    kind: "message-center"
  - title: "Facilitator in Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    kind: "learn"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "New Teams Rooms feature not available"
    url: "https://learn.microsoft.com/troubleshoot/microsoftteams/teams-rooms-and-devices/new-teams-rooms-feature-not-available"
    kind: "learn"
videos: []
related: ["microsoft-teams-focus-on-the-conversation-while-facilitator-in-teams-mobile-takes-the-note","meeting-policy","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-facilitator-detects-and-answers-questions"]
controls:
  - governs: "Take notes button on the room console home screen"
    scope: "other"
    ui:
      surface: "Pro Management portal"
      path: "Rooms > room > Settings > Device > Show Take notes button on the home screen"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    api: null
    note: "Learn says the default setting is enabled. Changing device settings needs Rooms Management role-based access control permissions."
  - governs: "Meeting transcription for users and room accounts"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity Global -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "General meeting policy that Learn's setup step points to; Learn names no policy for room accounts."
  - governs: "Loop components in Teams (IsLoopEnabled)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "MC1307512 asks admins to verify this property. Learn says it applies to the entire tenant and cannot be set per user."
  - governs: "Collaborative meeting notes in Teams (IsCollabMeetingNotesFluidEnabled)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "MC1307512 asks admins to verify this property. Learn's Facilitator page ties it to AI-generated notes for meetings and says it cannot be set per user."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-21T23:02:10"
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
  - date: "2026-11-19"
    note: "Rewritten for the Windows item (roadmap 560318): the existing page described the Android item, so none of it was carried over; status is Rolling out and MC1307512 gives a late October to mid-November 2026 window."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Rewritten for the Android item (roadmap 560700): the brief's existing page described the Windows item, so none of it was carried over; the Facilitator app checklist step is not repeated and the transcription call is the Global-policy command."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
  - date: "2026-11-19"
    note: "Rewritten for the Windows item (roadmap 560318): the existing page described the Android item (roadmap 560700), so none of it was carried over; status is Rolling out and MC1307512 gives a late October to mid-November 2026 window."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
version: 15
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 15
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 84
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "c640934dcdd08fd9274ef06e924b16d1"
---

## What's changing

Facilitator, the AI agent that takes notes in scheduled Teams meetings, is being extended to unscheduled in-person discussions in Teams Rooms on Windows. The roadmap item says someone invites Facilitator with one tap on the room console, notes appear on the front-of-room display or touch board, and they are available through the meeting recap when shared and deleted if no one is selected. Microsoft Learn describes AI notes with summaries and action items, including speaker attribution, started from a **Take notes** button on the home screen of the console or touch board.

Message Center post MC1307512 gives more detail. It says notes are stored in tenant-owned SharePoint Embedded storage and that no meeting data is stored or cached on the Teams Rooms device after the meeting ends. To get at the notes, a participant adds a work account with the **Access notes** button on the console; participants with access can then view and edit the notes through the meeting recap in the meeting chat on the Teams desktop client. If no participant was added during the session, the notice says the notes are deleted automatically. Learn calls the same step **Save notes**, says unsaved notes are deleted after the session ends, and says to find the notes in the Teams meeting chat titled "Meeting with [conference room name]", on the **Recap** tab under **Notes**.

The roadmap item is Rolling out, General Availability, with a target of October CY2026, for Worldwide (Standard Multi-Tenant) and GCC. MC1307512 (published 11 May 2026, updated 27 August 2026) says rollout begins in late October 2026 (previously early September) and is expected to complete by mid-November 2026 (previously late September), and sets no act-by date. Learn marks in-person note-taking as preview, which differs from the roadmap's General Availability, and the Teams Rooms release notes list it among the features introduced in the Teams Rooms on Windows 5.7.112.0 (9/28/2026) entry.

## Why it matters

This puts meeting transcription and AI notes into physical rooms where people may not think of themselves as being in a Teams meeting. MC1307512 says the feature is available automatically once licensing and prerequisite configurations are met, with no additional admin enablement beyond existing settings, and Learn says the Pro Management portal setting for the Take notes button is enabled by default. Expect Windows rooms that already meet the prerequisites to show the button as the update reaches them.

The decisions are about whether you want it: whether the Facilitator app, Loop and transcription settings it depends on stay on for room accounts, whether the room-level Take notes setting stays on, and what you tell people about where notes are stored and who can read them. Helpdesk will also field questions about how to start notes and where they went.

## Risk assessment

**Data exposure**

- Meeting audio and transcription data from the room are processed to generate summaries, decisions and action items (MC1307512). Notes are stored in tenant-owned SharePoint Embedded storage; Learn says they are saved as a Loop file there and treated as meeting transcript data.
- Notes appear on the front-of-room display or touch board during the session (MC1307512), so what is said in the room is shown back to everyone in it.
- Learn's Facilitator setup page lists limits for Facilitator in meetings: AI-generated notes are not automatically collected as cloud attachments in Microsoft Purview eDiscovery, and retention labels are not supported for cloud attachments in AI-generated notes. Learn does not say whether these cover in-person notes.

**Security & identity**

- Access to notes depends on who is added during the session: MC1307512 describes adding a work account with the Access notes button, and Learn describes adding participants' names in the Save notes dialog. Learn says currently only participants who add their names at the beginning of the session and have enrolled their profiles are identified and attributed.
- Learn says muting the room microphone stops Facilitator or transcription capturing content.

**Autonomy & actions**

- Facilitator starts when someone selects Take notes on the console (MC1307512). The notice describes notes, summaries, decisions and action items. Learn says Facilitator only turns on transcription during the meeting and the meeting is not recorded.

**Change & support**

- Learn marks the feature preview while the roadmap says General Availability, so behaviour and licensing described on Learn may differ from what reaches your rooms.
- Learn names the save step Save notes and MC1307512 names it Access notes; brief helpdesk on both.
- Learn says the Pro Management portal setting **Show Take notes button on the home screen** is enabled by default. Changing it from the portal with Apply Now restarts the device as soon as possible, so schedule changes away from meetings.

## Cost and licensing

Licence: the Learn page for Facilitator in Teams Rooms says in-person note-taking is in preview and currently included with Teams Rooms Pro, and its prerequisite is a Teams Rooms Pro licence on each resource account used for your Teams Rooms devices. The roadmap item says "Available with Teams Rooms Pro", and MC1307512 names rooms licensed with Teams Rooms Pro as the affected group. The same Learn page says only the meeting organiser needs a Copilot licence for Facilitator in scheduled meetings.

Learn warns that the experience and the licensing model may change before final release. The Facilitator in Teams Rooms page names no meter or separate charge for in-person notes, and the Microsoft Teams Rooms licenses page publishes no price for Teams Rooms Pro.

Indirect costs: admin time to confirm the prerequisites on room accounts, a Teams Rooms Pro licence for any room that lacks one, and helpdesk briefing.

## Scope

Who: Teams Rooms on Windows rooms whose resource accounts hold a Teams Rooms Pro licence (MC1307512). Learn's FAQ says Facilitator is available on Teams Rooms on Windows and is projected to release on Teams Rooms on Android in a future release.

Clouds and rollout: the roadmap lists Worldwide (Standard Multi-Tenant) and GCC, platform Teams and Surface Devices. MC1307512 gives a Worldwide and GCC rollout beginning in late October 2026, expected to complete by mid-November 2026, and sets no act-by date.

Prerequisites: MC1307512 asks administrators to confirm Teams Rooms Pro licences, Facilitator enabled in the tenant, the Loop settings IsLoopEnabled and IsCollabMeetingNotesFluidEnabled, and meeting transcription enabled in Teams meeting policies. Learn adds the Facilitator app for the room resource account (including the resource account if app availability is scoped to People and Groups) and the Pro Management portal note-taking setting. Learn says changing Pro Management portal device settings needs role-based access control permissions for Rooms Management. Notes are read afterwards on the Teams desktop client through the meeting recap.

## Governance guidance

### Before rollout

- Confirm Teams Rooms Pro licences are assigned to the resource accounts of the Windows rooms you want covered.
- Confirm the Facilitator app is allowed in the Teams admin center and, if its availability is scoped to People and Groups, that the room resource account is included (steps in the notes below the table).
- Check meeting transcription is on in the meeting policy that applies to the room accounts, using the transcription row below.
- Check IsLoopEnabled and IsCollabMeetingNotesFluidEnabled, using the two Loop rows below.
- Decide in the Pro Management portal whether **Show Take notes button on the home screen** stays on for each room, using the first row below.

### At rollout

- Test one Windows room end to end: select Take notes, add a work account with Access notes, then open the notes from the meeting recap in the meeting chat on the Teams desktop client.
- Compare the Teams Rooms app version on a pilot room with the 5.7.112.0 release notes entry, because Learn says some features become available only after a specific app release.
- Brief helpdesk and room users on how to start notes, where they are stored and read afterwards, and that notes are deleted if nobody is added.
- Watch Message center for further updates to MC1307512, which moved its schedule on 27 August 2026.

### After rollout

- Spot-check a few rooms: confirm a session where nobody was added leaves no notes in the recap, as MC1307512 describes.
- Re-read the Learn Facilitator in Teams Rooms page for changes to licensing and preview status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Take notes button on the room console home screen</strong><br><small class="controls__note">Learn says the default setting is enabled. Changing device settings needs Rooms Management role-based access control permissions.</small></td><td data-label="Admin UI"><strong>Pro Management portal</strong><br>Rooms › room › Settings › Device › Show Take notes button on the home screen <a href="https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Meeting transcription for users and room accounts</strong><br><small>User</small><br><small class="controls__note">General meeting policy that Learn's setup step points to; Learn names no policy for room accounts.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity Global -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Loop components in Teams (IsLoopEnabled)</strong><br><small>Tenant</small><br><small class="controls__note">MC1307512 asks admins to verify this property. Learn says it applies to the entire tenant and cannot be set per user.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Collaborative meeting notes in Teams (IsCollabMeetingNotesFluidEnabled)</strong><br><small>Tenant</small><br><small class="controls__note">MC1307512 asks admins to verify this property. Learn's Facilitator page ties it to AI-generated notes for meetings and says it cannot be set per user.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Availability depends on the room's Teams Rooms Pro licence, the Facilitator app, transcription, Loop and the room-level portal setting; MC1307512 says availability depends on these existing tenant settings.

Facilitator app: the steps are on the Set up Facilitator in Microsoft Teams page. In the Teams admin center, select Teams apps > Manage apps, search for Facilitator, select it, then choose Allow or Block from the actions menu. The page says Facilitator is allowed by default, and that it is also blocked if all apps are blocked for your organisation. It also covers allowing Facilitator for a group of users through an app permission policy.

Pro Management portal settings are applied as jobs: Learn says **Apply Now** queues a job and restarts the device as soon as possible, and **Schedule Later** applies the change in the nightly maintenance window. Learn's Teams Rooms on Windows troubleshooting page says new features like "Tap to take notes" will not be added as XML settings and recommends the portal's individual and bulk settings instead. Microsoft Learn documents no API for the Take notes setting at the time of writing (November 2026).

The Loop page lists both Teams Loop properties as SharePoint PowerShell settings and gives no admin centre path for them. It also says IsCollabMeetingNotesFluidEnabled applies to the entire tenant and cannot be set per user, and that the SharePoint property does not apply to collaborative meeting notes in Teams New Calendar.

The transcription row is the general meeting policy. Learn's setup step points to it without naming a policy for room accounts, and the transcription page says transcription is both a per-organiser and per-user policy setting, so which policy governs in-person notes is not stated.

## Open questions

- Which meeting policy and which account (the room resource account or the person who adds their name) does transcription for in-person notes depend on? Watch the Learn Facilitator in Teams Rooms page.
- Will Learn's preview label and its "licensing model may change" warning change now that the roadmap shows General Availability? Watch the Learn page and MC1307512.
- Do the Facilitator limits Learn lists for meetings (eDiscovery collection, retention labels for cloud attachments in AI notes) apply to notes taken in person? Watch the Set up Facilitator in Microsoft Teams page.
- Learn says in-person notes are saved as a Loop file, while the Set up Facilitator page says Loop file generation was discontinued on 31 July 2026 and live notes are unaffected: does that change where in-person notes are stored? Watch both Learn pages.

<!-- rationale
risk: Medium. Room audio is transcribed and summarised into notes stored in tenant SharePoint Embedded storage, and Microsoft's notice says the feature is available automatically once licensing and prerequisites are met.
cost: Low. Learn says in-person notes are currently included with Teams Rooms Pro, so the known cost is admin time plus a Teams Rooms Pro licence for any room without one; Learn warns the licensing model may change.
impact: Medium. People in Teams Rooms on Windows rooms licensed with Teams Rooms Pro see a Take notes button on the console and notes on the front-of-room display or touch board.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Windows and Android FAQ / availability: Learn's FAQ says Windows is available and Android is projected for a future release. | Found: Facilitator is available on Teams Rooms on Windows and is projected to release on Teams Rooms on Android in a future release. | Fix: After the FAQ sentence, add: 'However, the Android release notes list a preview of Facilitator note-taking for offline/ad-hoc discussions under 1449/1.0.96.2025126202 (May 2025).' The conflicting entry is at https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note. | Source: https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms
- [contradicted, minor] Governance guidance: Before rollout, Facilitator app check / consistency: Every control the governance checklist asks readers to check is represented in the controls table. | Found: Checklist: 'Confirm the Facilitator app is allowed in the Teams admin center'. Controls table: Take notes button, meeting transcription, IsLoopEnabled, IsCollabMeetingNotesFluidEnabled; no Facilitator app row. | Fix: Remove the Before rollout bullet beginning 'Confirm the Facilitator app is allowed'. The documented prerequisite and app instructions can remain in Scope and Governance controls; do not add a control row.
-->
