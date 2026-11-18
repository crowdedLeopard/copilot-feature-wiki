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
  notes: "Microsoft Learn says in-person note-taking is currently included with Teams Rooms Pro and lists a Teams Rooms Pro licence on each room resource account as the prerequisite. It also says the licensing model may change before final release."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-rooms","facilitator","meeting-transcripts","sharepoint-embedded","pro-management-portal","meeting-policy","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 560700"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560700"
    kind: "roadmap"
  - title: "MC1307888: (Updated) Microsoft Teams: AI-powered notes for in-person meetings with Facilitator in Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1307888"
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
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-facilitator-detects-and-answers-questions","microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings","microsoft-teams-call-quality-feedback-surveys-for-teams-rooms-on-android"]
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
      call: "Set-CsTeamsMeetingPolicy -Identity \"<policy name>\" -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "General meeting policy that Learn's setup steps point to; Microsoft has not confirmed which policy the room account's in-person notes use."
  - governs: "Loop experiences and collaborative meeting notes in Teams"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $true; Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    note: "MC1307888 asks admins to verify both properties. Learn lists the SharePoint property as the Teams control, with Cloud Policy covering other Loop apps."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
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
version: 4
verification:
  status: "held"
  date: "2026-11-18"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 71
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "c71ebf2c25065e60f43ef648fd732d3f"
---

## What's changing

Facilitator, the AI agent that already takes notes in scheduled Teams meetings, is being extended to unscheduled, in-person discussions in a Teams Rooms on Android room. According to Message Center post MC1307888, someone selects the Take notes button on the room console, and Facilitator captures notes, decisions and action items that appear on the front-of-room display or touch board during the meeting. The roadmap item adds that the notes are available through the meeting recap when shared, and are deleted if no one is selected.

After the meeting, MC1307888 says participants with access can view and edit the notes through the meeting recap in the meeting chat on the Teams desktop client, and that notes are deleted automatically if no participant was added with the Access notes button. Microsoft Learn describes the same step as **Save notes** and says unsaved notes are deleted after the session ends, so the two pages word it differently. Learn says Facilitator only turns on transcription during the meeting and does not record it.

The roadmap item lists the feature as In development, General Availability, with a target of November CY2026, for Worldwide (Standard Multi-Tenant) and GCC. MC1307888 (updated 24 September 2026) says rollout begins in early November 2026 (previously late October) and is expected to complete by early December 2026 (previously mid-November), and sets no act-by date. Learn marks in-person note-taking as preview and its FAQ says Facilitator is projected to release on Teams Rooms on Android in a future release, while the Teams Rooms release notes list a preview of Facilitator note taking for offline and ad hoc discussions under Android build 1449/1.0.96.2025126202 (May 2025). The sources therefore differ on status.

## Why it matters

This puts meeting transcription and AI notes into physical rooms where people may not think of themselves as being in a Teams meeting. MC1307888 says the feature is available automatically once licensing and prerequisite configuration are met, with no additional admin enablement required beyond existing settings, so rooms that already meet the prerequisites can expect the Take notes entry point as the update arrives.

The decisions are therefore about whether you want it: whether the room-level Take notes setting stays on, whether the Facilitator, Loop and transcription settings it depends on stay on for room accounts, and what you tell people about where notes are stored and who can read them. Helpdesk will also field questions about how to start notes and where they went.

## Risk assessment

**Data exposure**

- Meeting audio and transcription data from the room are processed to generate summaries, decisions and action items (MC1307888). Notes are stored in tenant-owned SharePoint Embedded storage; Learn says they are saved as a Loop file there and treated as meeting transcript data. MC1307888 says no meeting data is stored or cached on the Teams Rooms device after the meeting ends.
- Notes are shown on the front-of-room display or touch board while the session runs, so anyone in the room can read them.
- Learn's Facilitator page lists limits for Facilitator in meetings: notes do not inherit the meeting's sensitivity label, Prevent copy and paste and Watermarks are not applied, and notes are not automatically collected as cloud attachments in Microsoft Purview eDiscovery. It does not say whether these apply to in-person room notes, so confirm before relying on labels or eDiscovery for them.

**Security & identity**

- Access to notes depends on who is added during the session: MC1307888 describes adding a work account with the Access notes button, and Learn describes adding participants' names in the Save notes dialog. Learn says only participants who add their names at the beginning of the session and have enrolled their profiles are identified and attributed.
- Learn's setup steps apply to the room resource account: the Facilitator app must be available to it, and if app availability is scoped to People and Groups the room account must be included.

**Autonomy & actions**

- Facilitator starts when someone selects Take notes on the console. Learn says muting the room microphone stops Facilitator or transcription capturing content.

**Change & support**

- Learn marks the feature preview while the roadmap and MC1307888 give General Availability, so behaviour and licensing described on Learn may change.
- Learn names the save step Save notes and MC1307888 names it Access notes; brief helpdesk on both. The Pro Management portal setting **Show Take notes button on the home screen** is documented as enabled by default.

## Cost and licensing

Licence: the Learn page for Facilitator in Teams Rooms says in-person note-taking is currently included with Teams Rooms Pro, and its prerequisite is a Teams Rooms Pro licence on each resource account used for your Teams Rooms devices. The roadmap item says "Available with Teams Rooms Pro", and MC1307888 names rooms licensed with Teams Rooms Pro as the affected group. The Learn setup steps for this scenario list no Microsoft 365 Copilot licence.

Meter: no meter, credit rate or usage charge is documented for this feature on these pages at the time of writing (November 2026). The price of Teams Rooms Pro and any change to the licensing model before final release are Not yet published here; Learn warns that the licensing model may change before final release.

Indirect costs: admin time to confirm the prerequisites on room accounts and helpdesk briefing. The Loop admin policy page says storage for .loop files counts against the organisation's SharePoint quota; confirm whether that applies to room notes held in SharePoint Embedded.

## Scope

Who: Teams Rooms on Android rooms whose resource accounts hold a Teams Rooms Pro licence (MC1307888).

Clouds and rollout: the roadmap lists Worldwide (Standard Multi-Tenant) and GCC, platform Teams and Surface Devices. MC1307888 gives a Worldwide and GCC rollout beginning in early November 2026, expected to complete by early December 2026, and sets no act-by date.

Prerequisites: MC1307888 asks administrators to confirm Teams Rooms Pro licences, Facilitator enabled in the tenant, the Loop settings IsLoopEnabled and IsCollabMeetingNotesFluidEnabled, and meeting transcription enabled in Teams meeting policies. Learn adds the Pro Management portal note-taking setting. Notes are read afterwards on the Teams desktop client through the meeting recap.

## Governance guidance

### Before rollout

- Confirm Teams Rooms Pro licences are assigned to the resource accounts of the Android rooms you want covered.
- Confirm meeting transcription is on in the meeting policy that applies to the room accounts, using the transcription row below.
- Confirm IsLoopEnabled and IsCollabMeetingNotesFluidEnabled are on, using the Loop row below.
- Decide in the Pro Management portal whether **Show Take notes button on the home screen** stays on for each room.
- Brief helpdesk and room users on how to start, save and find notes.

### At rollout

- Test one Android room end to end: start notes, add a name, save, then open the notes from the meeting chat Recap tab on the Teams desktop client.
- Watch Message center for further updates to MC1307888, which has moved its schedule once already.

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
<tr><td data-label="Control"><strong>Meeting transcription for users and room accounts</strong><br><small>User</small><br><small class="controls__note">General meeting policy that Learn's setup steps point to; Microsoft has not confirmed which policy the room account's in-person notes use.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &quot;&lt;policy name&gt;&quot; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Loop experiences and collaborative meeting notes in Teams</strong><br><small>Tenant</small><br><small class="controls__note">MC1307888 asks admins to verify both properties. Learn lists the SharePoint property as the Teams control, with Cloud Policy covering other Loop apps.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $true; Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Availability depends on the room's Teams Rooms Pro licence, the Facilitator app, transcription, Loop and the room-level portal setting. Microsoft has not described what the Take notes button does when one of those prerequisites is missing.

Microsoft Learn documents no API for the Pro Management portal Take notes setting at the time of writing (November 2026). The Loop SharePoint properties are documented as PowerShell settings that apply to the entire tenant and can't be configured at the user level.

The Teams admin center steps to allow or block the Facilitator app (Teams apps > Manage apps > Facilitator > Actions menu > Allow or Block) are on the [Facilitator page](https://learn.microsoft.com/microsoftteams/facilitator-teams), which says Facilitator is allowed by default. The transcription row is the general meeting policy; the Learn setup step points to it without naming a policy for room accounts, so Microsoft has not confirmed which policy the room account's in-person notes use.

## Open questions

- Is in-person room note-taking on Android generally available, as the roadmap record and MC1307888 state, or still in preview, as the Learn page says? Watch the Learn page and Message center.
- Do the Facilitator-in-meetings limits (no sensitivity label inheritance, no watermarks, no automatic eDiscovery cloud attachment collection) also apply to in-person room notes?
- Which meeting policy does the room resource account use for these notes?
- Does any announcement tell in-room participants that transcription has started?
- What will Teams Rooms Pro cost for this feature if the licensing model changes before final release?

<!-- rationale
risk: Medium. Room audio is transcribed and turned into notes stored in tenant-owned SharePoint Embedded storage, and Microsoft's notice says the feature is available automatically once prerequisites are met.
cost: Low. Learn says in-person note-taking is currently included with Teams Rooms Pro; the cost is that licence on each room account (price not covered here) plus admin and helpdesk time.
impact: Medium. People who meet in Pro-licensed Android rooms see a Take notes entry point on the console and notes on the front-of-room display; users outside those rooms are unaffected.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Indirect costs / applicability: Whether that SharePoint quota rule applies to the room notes' Loop files in SharePoint Embedded still needs confirmation. | Found: Loop components and their integrations are powered by .loop files (earlier releases created .fluid files), stored in OneDrive, SharePoint, or SharePoint Embedded. Storage counts against your organization's SharePoint quota. | Fix: Replace the final sentence of Indirect costs with: "Learn describes room notes as Loop files in SharePoint Embedded; the Loop admin policy page says storage for Loop files, including those in SharePoint Embedded, counts against the organisation's SharePoint quota." Keep the existing citations to https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms and https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration. | Source: https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration
- [contradicted, blocker] Open questions: first bullet / availability: The roadmap record states that in-person room note-taking on Android is generally available. | Found: "status": "In development", "targetDate": "November CY2026", "releasePhase": ["General Availability"] | Fix: Replace the first Open questions bullet with: "Has the announced Android rollout reached our rooms? The roadmap still says In development with a November CY2026 General Availability target, MC1307888 announces rollout from early November to early December 2026, and Learn still labels in-person note-taking preview."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: Users outside the Pro-licensed Android rooms are unaffected. | Found: Searched: Facilitator in-person participants access outside. Read Rooms Facilitator and MC1307888, plus returned access excerpts; sources identify the room experience and saved-note access but do not guarantee all other users are unaffected. | Fix: Remove "; users outside those rooms are unaffected" from the impact rationale.
-->
