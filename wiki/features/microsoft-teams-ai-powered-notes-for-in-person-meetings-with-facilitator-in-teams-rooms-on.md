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
  notes: "Microsoft Learn says in-person note-taking is currently included with Teams Rooms Pro and lists a Teams Rooms Pro licence on each room resource account as the prerequisite. It also says the licensing model may change before final release."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-rooms","facilitator","meeting-transcripts","sharepoint-embedded","pro-management-portal","meeting-policy","gcc"]
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
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-facilitator-detects-and-answers-questions","microsoft-teams-intelliframe-people-labels-in-teams-rooms-on-windows"]
controls:
  - governs: "Take notes button on the room console home screen"
    scope: "other"
    ui:
      surface: "Pro Management portal"
      path: "Rooms > room > Settings > Device > Show Take notes button on the home screen"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    api: null
    note: "Learn says the default setting is enabled. Learn gives this step for Facilitator in Teams Rooms without naming a device platform."
  - governs: "Meeting transcription for users and room accounts"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "General meeting policy that Learn's setup steps point to; Microsoft has not confirmed which policy the room account's in-person notes use."
  - governs: "Loop experiences and collaborative meeting notes in Teams"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $true; Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "MC1307512 asks admins to verify both properties. The Loop page says the SharePoint property does not apply to collaborative meeting notes in Teams New Calendar and points to Cloud Policy for that case."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
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
version: 6
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 78
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "634421d6ba9891d12360cf7dc2e79dd1"
---

## What's changing

Facilitator, the AI agent that already takes notes in scheduled Teams meetings, is being extended to unscheduled, in-person discussions in a Teams Rooms on Windows room. According to Message Center post MC1307512, someone selects the Take notes button on the room console, and Facilitator captures notes, decisions and action items that appear on the front-of-room display or touch board during the meeting. The roadmap item adds that the notes are available through the meeting recap when shared, and are deleted if no one is selected.

After the meeting, MC1307512 says participants with access can view and edit the notes through the meeting recap in the meeting chat on the Teams desktop client, and that notes are deleted automatically if no participant was added with the Access notes button. Microsoft Learn describes the same step as **Save notes** and says unsaved notes are deleted after the session ends, so the two pages word it differently. Learn says Facilitator only turns on transcription during the meeting and does not record it.

The roadmap item lists the feature as Rolling out, General Availability, with a target of October CY2026, for Worldwide (Standard Multi-Tenant) and GCC. MC1307512 (updated 27 August 2026) says rollout begins in late October 2026 (previously early September) and is expected to complete by mid-November 2026 (previously late September), and sets no act-by date. The Teams Rooms release notes list "AI-powered notes for in-person meetings with Facilitator" among the changes in Teams Rooms on Windows build 5.7.112.0 (9/28/2026). Learn's Facilitator page still labels in-person note-taking as preview, so the sources differ on status.

## Why it matters

This puts meeting transcription and AI notes into physical rooms where people may not think of themselves as being in a Teams meeting. MC1307512 says the feature is available automatically once licensing and prerequisite configuration are met, with no additional admin enablement required beyond existing settings, so Windows rooms that already meet the prerequisites can expect the Take notes entry point as the update arrives.

The decisions are therefore about whether you want it: whether the room-level Take notes setting stays on, whether the Facilitator, Loop and transcription settings it depends on stay on for room accounts, and what you tell people about where notes are stored and who can read them. Helpdesk will also field questions about how to start notes and where they went.

## Risk assessment

**Data exposure**

- Meeting audio and transcription data from the room are processed to generate summaries, decisions and action items (MC1307512). Notes are stored in tenant-owned SharePoint Embedded storage; Learn says they are saved as a Loop file there and treated as meeting transcript data. MC1307512 says no meeting data is stored or cached on the Teams Rooms device after the meeting ends.
- Notes are shown on the front-of-room display or touch board while the session runs, so anyone in the room can read them.
- Learn's Facilitator page lists limits for Facilitator in meetings: notes do not inherit the meeting's sensitivity label, Prevent copy and paste and Watermarks are not applied, and notes are not automatically collected as cloud attachments in Microsoft Purview eDiscovery. That list is headed for meetings and does not mention in-person room notes, so confirm before relying on labels or eDiscovery for them.

**Security & identity**

- Access to notes depends on who is added during the session: MC1307512 describes adding a work account with the Access notes button, and Learn describes adding participants' names in the Save notes dialog. Learn says only participants who add their names at the beginning of the session and have enrolled their profiles are identified and attributed.
- Learn's setup steps apply to the room resource account: the Facilitator app must be available to it, and if app availability is scoped to People and Groups the room account must be included.

**Autonomy & actions**

- Facilitator starts when someone selects Take notes on the console. Learn says muting the room microphone stops Facilitator or transcription capturing content.

**Change & support**

- Learn marks the feature preview while the roadmap and MC1307512 give General Availability, so behaviour and licensing described on Learn may change.
- Learn names the save step Save notes and MC1307512 names it Access notes; brief helpdesk on both. The Pro Management portal setting **Show Take notes button on the home screen** is documented as enabled by default.

## Cost and licensing

Licence: the Learn page for Facilitator in Teams Rooms says in-person note-taking is currently included with Teams Rooms Pro, and its prerequisite is a Teams Rooms Pro licence on each resource account used for your Teams Rooms devices. The roadmap item says "Available with Teams Rooms Pro", and MC1307512 names rooms licensed with Teams Rooms Pro as the affected group. The Teams Rooms release notes mark the feature with the icon that the page says means a feature is available only with Teams Rooms Pro. The Learn setup steps for this scenario list no Microsoft 365 Copilot licence.

Meter: no meter, credit rate or usage charge is documented for this feature on these pages at the time of writing (November 2026). The Teams Rooms licences page lists what Teams Rooms Basic and Pro include and gives no price, so the price of Teams Rooms Pro is Not yet published here. Learn warns that the licensing model may change before final release.

Indirect costs: admin time to confirm the prerequisites on room accounts and helpdesk briefing. Learn describes room notes as Loop files in SharePoint Embedded; the Loop admin policy page says Loop file storage, including SharePoint Embedded, counts against the organisation's SharePoint quota.

## Scope

Who: Teams Rooms on Windows rooms whose resource accounts hold a Teams Rooms Pro licence (MC1307512).

Clouds and rollout: the roadmap lists Worldwide (Standard Multi-Tenant) and GCC, platform Teams and Surface Devices. MC1307512 gives a Worldwide and GCC rollout beginning in late October 2026, expected to complete by mid-November 2026, and sets no act-by date.

Prerequisites: MC1307512 asks administrators to confirm Teams Rooms Pro licences, Facilitator enabled in the tenant, the Loop settings IsLoopEnabled and IsCollabMeetingNotesFluidEnabled, and meeting transcription enabled in Teams meeting policies. Learn adds the Pro Management portal note-taking setting. Notes are read afterwards on the Teams desktop client through the meeting recap. Learn's FAQ says Facilitator is available on Teams Rooms on Windows and is projected to release on Teams Rooms on Android in a future release.

## Governance guidance

### Before rollout

- Confirm Teams Rooms Pro licences are assigned to the resource accounts of the Windows rooms you want covered.
- Confirm the Facilitator app is allowed for those room accounts, using the Teams admin center steps in the notes below the table.
- Confirm meeting transcription is on in the meeting policy that applies to the room accounts, using the transcription row below.
- Confirm IsLoopEnabled and IsCollabMeetingNotesFluidEnabled are on, using the Loop row below.
- Decide in the Pro Management portal whether **Show Take notes button on the home screen** stays on for each room.

### At rollout

- Test one Windows room end to end: start notes, add a name, save, then open the notes from the meeting chat Recap tab on the Teams desktop client.
- Brief helpdesk and room users on how to start, save and find notes.
- Watch Message center for further updates to MC1307512, which has moved its schedule once already.

### After rollout

- Review who was added to saved notes in a sample of rooms, and confirm unsaved sessions leave no notes.
- Check whether your sensitivity label, eDiscovery and watermark expectations hold for room notes, given the limits Learn lists for Facilitator in meetings.
- Re-read the Learn page for changes to licensing or preview status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Take notes button on the room console home screen</strong><br><small class="controls__note">Learn says the default setting is enabled. Learn gives this step for Facilitator in Teams Rooms without naming a device platform.</small></td><td data-label="Admin UI"><strong>Pro Management portal</strong><br>Rooms › room › Settings › Device › Show Take notes button on the home screen <a href="https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Meeting transcription for users and room accounts</strong><br><small>User</small><br><small class="controls__note">General meeting policy that Learn's setup steps point to; Microsoft has not confirmed which policy the room account's in-person notes use.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Loop experiences and collaborative meeting notes in Teams</strong><br><small>Tenant</small><br><small class="controls__note">MC1307512 asks admins to verify both properties. The Loop page says the SharePoint property does not apply to collaborative meeting notes in Teams New Calendar and points to Cloud Policy for that case.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $true; Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Availability depends on the room's Teams Rooms Pro licence, the Facilitator app, transcription, Loop and the room-level portal setting. Microsoft has not described what the Take notes button does when one of those prerequisites is missing.

Microsoft Learn documents no API for the Pro Management portal Take notes setting at the time of writing (November 2026). The Loop page documents the Teams Loop settings as SharePoint PowerShell properties that apply to the entire tenant and can't be configured at the user level, and says its Cloud Policy settings cover Loop experiences except for Microsoft Teams.

The Teams admin center steps to allow or block the Facilitator app (Teams apps > Manage apps > Facilitator > Actions menu > Allow or Block) are on the [Facilitator page](https://learn.microsoft.com/microsoftteams/facilitator-teams), which says Facilitator is allowed by default. The transcription row is the general meeting policy; Learn's setup step points to it without naming a policy for room accounts, so Microsoft has not confirmed which policy the room account's in-person notes use.

## Open questions

- Does a Windows room that meets the prerequisites already show Take notes, given that the roadmap says Rolling out, MC1307512 gives a late October to mid-November 2026 window, and Learn still labels in-person note-taking preview? Watch Message center and the Teams Rooms release notes.
- Do the Facilitator-in-meetings limits (no sensitivity label inheritance, no watermarks, no automatic eDiscovery cloud attachment collection) also apply to in-person room notes?
- Which meeting policy does the room resource account use for these notes?
- What will Teams Rooms Pro cost for this feature if the licensing model changes before final release?

<!-- rationale
risk: Medium. Room audio is transcribed and turned into notes stored in tenant-owned SharePoint Embedded storage, and Microsoft's notice says the feature is available automatically once prerequisites are met.
cost: Low. Learn says in-person note-taking is currently included with Teams Rooms Pro; the cost is that licence on each room account (price not covered here) plus admin and helpdesk time.
impact: Medium. People who meet in Pro-licensed Windows rooms see a Take notes entry point on the console and notes on the front-of-room display or touch board.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control that the governance checklist asks administrators to check has a controls-table row. | Found: Confirm the Facilitator app is allowed for those room accounts, using the Teams admin center steps in the notes below the table. / The table contains only Take notes, transcription and Loop rows. | Fix: Remove the Before rollout bullet 'Confirm the Facilitator app is allowed for those room accounts, using the Teams admin center steps in the notes below the table.' Keep the documented app steps below the table; do not add a control row.
-->
