---
title: "Microsoft Teams Rooms on Windows: Facilitator AI notes for in-person meetings"
slug: "microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-rooms-on"
roadmapId: 560318
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Teams"]
summary: "Teams Rooms on Windows rooms with a Teams Rooms Pro licence get a Take notes button that starts Facilitator AI notes in unscheduled in-person meetings. Microsoft says no extra admin enablement is needed once prerequisites are met."
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
  notes: "Microsoft Learn says the feature is currently included with Teams Rooms Pro and names a Teams Rooms Pro licence on each room resource account as the prerequisite. It also says the licensing model may change before final release."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-rooms","facilitator","meeting-transcripts","sharepoint-embedded","pro-management-portal","meeting-policy","gcc"]
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
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-notes"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "MC1307512: (Updated) Microsoft Teams: AI-powered notes for in-person meetings with Facilitator in Teams Rooms on Windows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1307512"
    kind: "message-center"
videos: []
related: ["meeting-policy","microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings","microsoft-teams-intelliframe-people-labels-in-teams-rooms-on-windows","microsoft-teams-facilitator-detects-and-answers-questions","microsoft-teams-audio-announcement-for-recording-and-transcription"]
controls:
  - governs: "Take notes button on the room console home screen"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > room > Settings > Device > Show Take notes button on the home screen"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    api: null
    note: "Learn says the default setting is enabled. Per-room setting; requires Rooms Management permissions."
  - governs: "Whether the Facilitator app is allowed or blocked"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Actions menu > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <Facilitator app ID> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "General Teams app control. Learn: Facilitator is allowed by default, and the room resource account must be included if availability is scoped to People and Groups."
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
  - governs: "Loop collaborative meeting notes in Teams"
    scope: "tenant"
    ui:
      surface: "Cloud Policy service (config.office.com)"
      path: "Customization > Policy Management > policy > Choose the scope > Configure Settings > Create and view Loop files in Microsoft apps that support Loop"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "General Loop controls. The SharePoint property applies to the whole tenant; the Cloud Policy setting is the page's route for Teams New Calendar. Which one governs room notes is not confirmed."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-18"
    note: "New briefing on Facilitator AI notes for in-person meetings in Teams Rooms on Windows, covering licensing, prerequisites and controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 71 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 66
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "247fe4bd00ff0fefbb90494f3547fff3"
---

## What's changing

Facilitator, the AI agent that already takes notes in scheduled Teams meetings, can now take notes in unscheduled, in-person discussions held in a Teams Rooms on Windows room. Someone taps the Take notes button on the console or touch board, and Facilitator writes notes, decisions and action items that appear on the front-of-room display as people speak. The roadmap item describes the notes as appearing on the room display or touch board, available through the meeting recap when shared, and deleted if no one is selected.

At the end of the session, a participant saves the notes and adds the names of the people who should have access. Microsoft Learn says unsaved notes are deleted after the session ends, and that Facilitator only turns on transcription during the meeting and does not record it. Learn describes the save step as **Save notes**; Message Center post MC1307512 describes an **Access notes** button on the console and adding a work account. The two pages word the step differently, so check the console wording on your build. After the meeting, participants with access find the notes and transcript under the **Recap** tab of the meeting chat titled "Meeting with [conference room name]" on the Teams desktop client.

The roadmap item lists the feature as Rolling out, General Availability, with a target of October CY2026, for Worldwide (Standard Multi-Tenant) and GCC. MC1307512 (updated 27 August 2026) moved the schedule to a start in late October 2026 (previously early September) and expected completion by mid-November 2026 (previously late September). The Learn page for the feature still carries a note that in-person note-taking is in preview, so Learn and the roadmap differ on status. The Teams Rooms release notes list the feature under Teams Rooms on Windows 5.7.112.0.

## Why it matters

This puts a meeting-transcription and AI-notes capability into physical rooms, where people may not think of themselves as being in a "Teams meeting". Microsoft's notice says the feature is available automatically once licensing and prerequisite configuration are met, and that no additional admin enablement is required beyond existing settings. If your rooms already hold Teams Rooms Pro licences and your Facilitator, Loop and transcription settings are on, expect the Take notes entry point to reach rooms as the update arrives.

The decisions are therefore about whether you want it: whether the room-level button stays on, whether room resource accounts keep the Facilitator app, Loop and transcription settings it depends on, and what you tell people about where room notes are stored and who can read them. Helpdesk will also field questions about how to start notes and where they went.

## Risk assessment

**Data exposure**

- Meeting audio and transcription data from the room are processed to generate notes, summaries, decisions and action items (MC1307512). Learn says notes are stored as a Loop file in SharePoint Embedded storage that belongs to the tenant, and that the data is treated as meeting transcript data. MC1307512 states that no meeting data is stored or cached on the Teams Rooms device after the meeting ends.
- Notes are shown on the front-of-room display while the session runs, so anyone in the room can read them. Whether anyone in the room is told that transcription is running is not described on the pages read.
- The Facilitator page lists limits for Facilitator in meetings: notes do not inherit the meeting's sensitivity label, Prevent copy and paste and Watermarks are not applied to them, and they are not automatically collected as cloud attachments in Microsoft Purview eDiscovery. Learn does not say whether these limits apply to in-person room notes; confirm before relying on labels or eDiscovery for them.

**Security & identity**

- Learn's setup steps apply to the room resource account: the Facilitator app must be available to it, and Loop experiences and transcription must be on. A policy scoped to People and Groups has to include the room resource account.
- Access to saved notes depends on the names or work accounts added at the end of the session. Learn says only participants who add their names at the start and have enrolled their profiles are identified and attributed in the notes and transcript.

**Autonomy & actions**

- Facilitator starts when someone taps Take notes; the pages read describe no other trigger for in-person notes. Learn says muting the room microphone stops Facilitator or transcription capturing content.

**Change & support**

- Learn marks the feature preview while the roadmap and MC1307512 give General Availability, so licensing and behaviour described on Learn may change.
- Learn and MC1307512 name the save and access buttons differently, and the Pro Management portal setting **Show Take notes button on the home screen** is documented as enabled by default. Brief helpdesk on both.

## Cost and licensing

Licence: the Learn page for Facilitator in Teams Rooms says in-person note-taking is currently included with Teams Rooms Pro, and its prerequisite is a Teams Rooms Pro licence on each resource account used for your Teams Rooms devices. The roadmap item says "Available with Teams Rooms Pro", and MC1307512 names rooms licensed with Teams Rooms Pro as the affected group. The Teams Rooms release notes mark the feature as Teams Rooms Pro only. The Learn setup steps for this scenario name no Microsoft 365 Copilot licence.

Meter: no meter, credit rate or usage charge is stated for this feature on the pages read. Rooms on a Teams Rooms Basic licence are not covered by the Pro statements above. The price of Teams Rooms Pro and any change to the licensing model before final release are not yet published on these pages; Learn warns that the licensing model may change before final release.

Indirect costs: admin time to confirm four prerequisites on room accounts, helpdesk briefing, and SharePoint Embedded storage for saved notes, for which no quota or charge is stated on the pages read.

## Scope

Who: Teams Rooms on Windows devices whose resource accounts hold a Teams Rooms Pro licence (MC1307512). Learn says the feature is available on Teams Rooms on Windows and is projected for Teams Rooms on Android in a future release.

Clouds and rollout: the roadmap lists Worldwide (Standard Multi-Tenant) and GCC, platform Teams and Surface Devices. MC1307512 gives a Worldwide and GCC rollout from late October 2026, expected to complete by mid-November 2026, and sets no act-by date.

Prerequisites on the room resource account, per Learn: Teams Rooms Pro licence, the Facilitator app allowed in the Teams admin center, meeting transcription on, Loop experiences on, and the Pro Management portal note-taking setting. MC1307512 also names the Loop settings IsLoopEnabled and IsCollabMeetingNotesFluidEnabled. Notes are read afterwards on the Teams desktop client through the meeting recap.

## Governance guidance

### Before rollout

- Assign a Teams Rooms Pro licence to each room resource account that should get the feature, and list rooms on Teams Rooms Basic that will not.
- Confirm in the Teams admin center that the Facilitator app is allowed for the room resource accounts, including any People and Groups scope.
- Confirm meeting transcription is on in the meeting policy that applies to the room accounts, and that the Loop settings IsLoopEnabled and IsCollabMeetingNotesFluidEnabled are on.
- Decide in each Pro Management portal room whether **Show Take notes button on the home screen** stays on.
- Brief helpdesk and room users on how to start, save and find notes.

### At rollout

- Check Teams Rooms on Windows devices have received the app version carrying the feature; the release notes list it under 5.7.112.0.
- Test one room end to end: start notes, add a name, save, then open the notes from the meeting chat Recap tab on the Teams desktop client.
- Watch Message center for further updates to MC1307512.

### After rollout

- Review who was added to saved notes in a sample of rooms, and confirm unsaved sessions leave no notes.
- Check whether your sensitivity label, eDiscovery and watermark expectations hold for room notes, given the limits Learn lists for Facilitator in meetings.
- Re-read the Learn page for changes to licensing or preview status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Take notes button on the room console home screen</strong><br><small class="controls__note">Learn says the default setting is enabled. Per-room setting; requires Rooms Management permissions.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › room › Settings › Device › Show Take notes button on the home screen <a href="https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Facilitator app is allowed or blocked</strong><br><small>Tenant</small><br><small class="controls__note">General Teams app control. Learn: Facilitator is allowed by default, and the room resource account must be included if availability is scoped to People and Groups.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Actions menu › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;Facilitator app ID&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Meeting transcription for users and room accounts</strong><br><small>User</small><br><small class="controls__note">General meeting policy that Learn's setup steps point to; Microsoft has not confirmed which policy the room account's in-person notes use.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Loop collaborative meeting notes in Teams</strong><br><small>Tenant</small><br><small class="controls__note">General Loop controls. The SharePoint property applies to the whole tenant; the Cloud Policy setting is the page's route for Teams New Calendar. Which one governs room notes is not confirmed.</small></td><td data-label="Admin UI"><strong>Cloud Policy service (config.office.com)</strong><br>Customization › Policy Management › policy › Choose the scope › Configure Settings › Create and view Loop files in Microsoft apps that support Loop <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

There is no single tenant switch for in-person notes: availability is the combination of the room's Teams Rooms Pro licence, the Facilitator app, transcription, Loop and the room-level portal setting. Microsoft has not described what the Take notes button does when one of those prerequisites is missing.

The Facilitator app row uses the general Teams app cmdlet; the Facilitator page documents the Teams admin center steps and does not name the cmdlet for Facilitator. The transcription row is the general meeting policy; the Learn setup step points to it without naming a policy for room accounts. For the Loop row, the SharePoint property is documented for Teams meetings, while the page says the property does not apply to collaborative meeting notes in Teams New Calendar, where the Cloud Policy settings apply instead. Learn's feature page does not say which applies to room notes. The Facilitator page states that the Loop meeting notes setting applies to the whole tenant and cannot be set per user.

Pro Management portal settings changes need role-based access control permissions for Rooms Management, and can be applied now or scheduled to the nightly maintenance window.

## Open questions

- Is in-person room note-taking generally available, as the roadmap and MC1307512 state, or still in preview, as the Learn page says? Watch the Learn page and Message center.
- Do the Facilitator-in-meetings limits (no sensitivity label inheritance, no watermarks, no automatic eDiscovery cloud attachment collection) also apply to in-person room notes?
- Does any announcement tell in-room participants that transcription has started?
- Which meeting policy and Loop setting does the room resource account use for these notes: the SharePoint property or Cloud Policy?
- What will Teams Rooms Pro cost for this feature if the licensing model changes before final release?

<!-- rationale
risk: Medium. Room audio is transcribed and turned into notes stored in tenant-owned SharePoint Embedded storage, and the feature is available automatically once prerequisites are met; existing Teams, Loop and app controls cover most of it.
cost: Low. Microsoft's Learn page says the feature is currently included with Teams Rooms Pro; the cost is the Teams Rooms Pro licence on each room account (price not covered here) plus admin and helpdesk time.
impact: Medium. People who meet in Pro-licensed rooms see a new Take notes entry point and a notes panel on the front-of-room display; users elsewhere are not affected.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[1].api; Governance controls table / command: Update-M365TeamsApp -Id <Facilitator app ID> -IsBlocked $true is a documented runnable command to block Facilitator. | Found: Searched: Update-M365TeamsApp IsBlocked true block app. Opened microsoftteams/update-m365teamsapp: Example 3 prints this call but says 'Unblocks Bookings app'; syntax and parameter tables require additional arguments. The reference does not unambiguously support this blocking instruction. | Fix: Remove the printed Update-M365TeamsApp blocking command from controls[1].api and the rendered table; retain the verified Teams admin center Allow or Block path. State in the row note: 'The Update-M365TeamsApp reference is internally inconsistent about the example and required parameters, so no blocking call is provided here.'
- [contradicted, blocker] controls[3].note; Governance controls; Open questions / absence: Microsoft has not confirmed whether the SharePoint Loop settings or Cloud Policy govern room notes. | Found: Verify Loop components are enabled:- IsLoopEnabled- IsCollabMeetingNotesFluidEnabled | Fix: Replace 'Which one governs room notes is not confirmed' in the row note and corresponding prose/question with: 'MC1307512 explicitly requires IsLoopEnabled and IsCollabMeetingNotesFluidEnabled for in-person room notes. Cloud Policy is documented for Teams New Calendar, not as a substitute for those room prerequisites.' Retain the general Cloud Policy path only with that qualification.
- [contradicted, blocker] Cost and licensing: Indirect costs / absence: No quota is stated on the cited pages for the saved notes' Loop storage. | Found: Loop components and their integrations are powered by .loop files (earlier releases created .fluid files), stored in OneDrive, SharePoint, or SharePoint Embedded. Storage counts against your organization's SharePoint quota. | Fix: Replace 'SharePoint Embedded storage for saved notes, for which no quota or charge is stated on the pages read' with 'SharePoint storage quota consumed by saved Loop notes; the cited Loop admin policy page says Loop storage counts against the organisation's SharePoint quota.' Do not add a room-specific storage price or numeric allowance. | Source: https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance; sources: Release notes for Microsoft Teams Rooms / availability: Teams Rooms release notes list the feature under Windows version 5.7.112.0. | Found: 5.7.112.0 (9/28/2026) Introduced in this update: ... AI-powered notes for in-person meetings with Facilitator | Fix: Replace the non-existent source URL https://learn.microsoft.com/microsoftteams/rooms/rooms-release-notes with https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note. The singular URL contains the cited version and Pro-only annotation. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist names controls that lack their own representation in the controls table. | Found: Checklist: 'Assign a Teams Rooms Pro licence' and 'Loop settings IsLoopEnabled and IsCollabMeetingNotesFluidEnabled'. Table: button, Facilitator app, transcription and collaborative meeting notes; no licence-assignment or IsLoopEnabled control. | Fix: Remove 'Assign a Teams Rooms Pro licence to each room resource account that should get the feature, and list rooms on Teams Rooms Basic that will not' from the checklist, leaving the verified licence prerequisite in Scope. Remove 'IsLoopEnabled and' from the checklist while retaining Microsoft's full prerequisite list in Scope. Do not add control rows.
- [unsupported, minor] rationale: impact / behaviour: Users elsewhere are not affected by this feature. | Found: Searched: "Facilitator" "room" "notes" "access" "participants". Opened rooms/facilitator-teams-rooms; read MC1307512. Sources describe later access on personal devices but do not state that users outside Pro-licensed rooms are unaffected. | Fix: Remove '; users elsewhere are not affected' from the impact rationale. Retain the supported sentence about the new entry point and front-of-room notes display.
-->
