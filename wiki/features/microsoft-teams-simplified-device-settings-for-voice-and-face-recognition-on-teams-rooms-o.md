---
title: "Microsoft Teams Rooms on Android: voice recognition set in device settings instead of PowerShell"
slug: "microsoft-teams-simplified-device-settings-for-voice-and-face-recognition-on-teams-rooms-o"
roadmapId: 502525
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Admins can now turn voice recognition on or off per Teams Rooms on Android device, on the console or in the Pro Management portal. The setting is off by default, needs Teams Rooms Pro, and replaces the meeting policy route Microsoft plans to retire."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Teams and Surface Devices","Web"]
targetDate: "October CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Enable People Recognition on Teams Rooms page states the feature is exclusive to Microsoft Teams Rooms devices with a Teams Rooms Pro license. The voice recognition requirements also list a room resource account with a Teams Rooms Pro licence assigned."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["teams-rooms","pro-management-portal","voice-and-face-recognition","speaker-attribution","meeting-policy","powershell","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 502525"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502525"
    kind: "roadmap"
  - title: "Enable People Recognition on Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    kind: "learn"
  - title: "Overview and configuration of voice and face enrollment"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    kind: "learn"
  - title: "Manage voice recognition for Intelligent Speaker"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-recognition"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Role-based access control in the Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
videos: []
related: ["microsoft-teams-express-voice-enrollment-in-microsoft-teams","microsoft-teams-improved-device-settings-experience-on-teams-rooms-on-android","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-speaker-attribution-now-on-by-default-in-byod-rooms-with-enhanced-admin-co","meeting-policy"]
controls:
  - governs: "Whether a Teams Rooms on Android device identifies enrolled people by voice"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > room > Settings > Recognition > Configure with device settings > Voice Recognition"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    api: null
    note: "Then set Voice Recognition (Off by default). Per device; needs Room Management modify permission and a Teams Rooms Pro licence. Face recognition is not supported on Android."
  - governs: "Voice recognition set locally on the room console"
    scope: "other"
    ui:
      surface: "Teams Rooms console"
      path: "Settings > Recognition > Configure with device settings (Recommended) > Voice recognition"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    api: null
    note: "Changes made on the device sync back to the Pro Management portal."
  - governs: "Voice-based identification in rooms through the meeting policy (route to be retired)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -roomAttributeUserOverride Attribute"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    note: "Values Off, Attribute or Distinguish. Microsoft recommends device settings because this route will be retired in the future."
  - governs: "Whether users may enrol a voice profile that rooms can recognise"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Enabled"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    note: "Teams AI policy; enabled by default for all users. PassiveVoiceEnrollment governs express enrolment from meetings. Managed only through PowerShell."
  - governs: "Whether meetings can be transcribed, which voice identification depends on"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing control. If transcription isn't enabled in the meeting policy, voice identification does not occur."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-28"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-27"
    note: "New briefing: per-device Voice Recognition setting for Teams Rooms on Android in the console and Pro Management portal, with the meeting policy route it replaces."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: noted that roles scoped to an administrative unit cannot reach the Pro Management portal, removed a claim about the post-retirement route, revised the risk and impact rationales, completed the portal path and marked settings templates as Preview."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: the transcription check now covers both the meeting organiser's policy and the policy of the user who starts transcription; removed a role-review step that had no matching control."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 77
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bbab695aeafb7b902001351e5790b4cb"
---

## What's changing

Teams Rooms on Android devices get a **Recognition** page in their device settings, so an administrator can decide per room whether the room identifies enrolled people by their voice, without using PowerShell. The same setting is available on the room console and in the Teams Rooms Pro Management portal, and changes made on the device are synchronised back to the portal, which gives one view of which rooms have recognition on.

On the device settings route, an administrator turns on **Configure with device settings** and then sets **Voice Recognition**, which is **Off** by default. When it is on, people who have enrolled a voice profile are named in the room's transcript, meeting recap and Copilot output; everyone else is still shown as Speaker X. Microsoft's people recognition page lists face recognition as not supported on Teams Rooms on Android, although the roadmap title mentions voice and face recognition: on Android, the new settings govern voice recognition.

The older route, the `roomAttributeUserOverride` parameter of the Teams meeting policy, still works, but Microsoft recommends device-level settings "because meeting policy-based configuration will be retired in the future". No retirement date is published.

The roadmap item is **Launched** (General Availability), with a target of October CY2025, for the Worldwide (Standard Multi-Tenant) cloud on Teams and Surface Devices and Web. The Teams Rooms release notes list "Manage voice recognition for rooms via device settings" in Teams Rooms on Android version 1449/1.0.96.2025325609 (October 2025).

## Why it matters

Voice recognition uses biometric profiles, so whether a given room uses them is a privacy decision. The release notes say the new settings replace PowerShell-based configuration with clearer visibility of recognition status across rooms. Moving it to a per-device setting that the Pro Management portal shows for every room makes it easier to see and to keep consistent.

If nobody acts, rooms configured through device settings keep Voice Recognition off. How a room already set up through the meeting policy behaves once **Configure with device settings** is turned on is not described, so treat the switch-over as a change to test on a few rooms first. Note that user enrolment is a separate control: the Teams AI policy enables voice and face enrolment for all users by default.

## Risk assessment

**Data exposure**
- When Voice Recognition is on, enrolled people's names appear in transcripts, recaps and Copilot output from that room instead of Speaker X. The room's device setting is the control; it is Off by default.
- Voice profiles themselves are governed by enrolment, not by this setting: Microsoft removes a profile unused for one year, and administrators can view enrolment status and delete profiles in the Teams admin center.

**Security & identity**
- Anyone with Room Management modify permission in the Pro Management portal (Global Administrator, Teams Administrator or Teams Devices Administrator among the Microsoft Entra roles) can turn recognition on for a room. Teams Administrator and Teams Devices Administrator assignments scoped to an administrative unit cannot access the Teams Rooms Pro Management portal because administrative units are not supported ([Role-based access control in the Microsoft Teams Rooms Pro Management Portal](https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac)). Review who holds those roles.

**Autonomy & actions**
- No change: the setting changes how speakers are labelled, and takes no action on its own.

**Change & support**
- Two configuration routes now exist (device settings and the meeting policy). Rooms that mix them make it harder to say which rooms recognise people; Microsoft recommends device settings and plans to retire the policy route.
- Voice identification also depends on transcription being allowed by the meeting policy, and on the meeting organiser's mailbox being in Exchange Online, so a room with recognition on can still show Speaker X.

## Cost and licensing

- **Licence:** the Enable People Recognition on Teams Rooms page states that recognition is exclusive to Teams Rooms devices with a **Teams Rooms Pro** licence; the voice recognition requirements list a Teams Room resource account with a Teams Rooms Pro licence assigned.
- **Indirect costs:** admin time to move rooms from the `roomAttributeUserOverride` meeting policy to device settings, to agree a recognition policy with privacy or works council stakeholders, and to tell users how to enrol and opt out.

## Scope

- **Devices:** Teams Rooms on Android with a Teams Rooms Pro licence. Face recognition is listed as not supported on Android; Teams Rooms on Windows supports both voice and face.
- **People recognised:** users who have enrolled a voice profile and are invited to the scheduled meeting; Microsoft limits this to 50 invitees with a voice profile.
- **Prerequisites:** the device must be signed in for portal settings changes to apply; transcription must be allowed in the meeting policy; the organiser's mailbox must be in Exchange Online.
- **Roles:** Global Administrator, Teams Administrator and Teams Devices Administrator can modify Room Management in the Pro Management portal; Global Reader has read-only access. Teams Administrator and Teams Devices Administrator assignments scoped to an administrative unit cannot access the Teams Rooms Pro Management portal because administrative units are not supported ([Role-based access control in the Microsoft Teams Rooms Pro Management Portal](https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac)).
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists. Microsoft's enrolment FAQ says voice and face enrolments are not available in GCC High or DoD.

## Governance guidance

### Before rollout
- Decide, with your privacy or compliance lead, which rooms should identify enrolled people by voice and which should keep Voice Recognition off.
- List rooms whose resource accounts use a meeting policy with `roomAttributeUserOverride` set, so you know which rooms rely on the route being retired.
- Check the Teams AI policy (`EnrollVoice`, `PassiveVoiceEnrollment`) so enrolment for users matches what you decide for rooms.
- Confirm that **Transcription** is enabled in the meeting organiser's policy and in the policy of the user who starts recording or transcription; voice identification requires transcription.

### At rollout
- Turn on **Configure with device settings** and set **Voice Recognition** per room in the Pro Management portal (Rooms > room > Settings > Recognition > Configure with device settings > Voice Recognition), using Device setting jobs to apply it to many rooms at once.
- Test a few rooms that previously used the meeting policy, and check the transcript shows the expected names or Speaker X.
- Tell users that enrolment is optional, that they can opt out at any time in the Teams desktop app, and which rooms recognise voices.

### After rollout
- Review the Recognition setting across rooms in the Pro Management portal, including changes made on room consoles, which sync back to the portal.
- Watch the people recognition page and Message center for the retirement date of the meeting policy route.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Teams Rooms on Android device identifies enrolled people by voice</strong><br><small class="controls__note">Then set Voice Recognition (Off by default). Per device; needs Room Management modify permission and a Teams Rooms Pro licence. Face recognition is not supported on Android.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › room › Settings › Recognition › Configure with device settings › Voice Recognition <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Voice recognition set locally on the room console</strong><br><small class="controls__note">Changes made on the device sync back to the Pro Management portal.</small></td><td data-label="Admin UI"><strong>Teams Rooms console</strong><br>Settings › Recognition › Configure with device settings (Recommended) › Voice recognition <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Voice-based identification in rooms through the meeting policy (route to be retired)</strong><br><small>User</small><br><small class="controls__note">Values Off, Attribute or Distinguish. Microsoft recommends device settings because this route will be retired in the future.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -roomAttributeUserOverride Attribute</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users may enrol a voice profile that rooms can recognise</strong><br><small>User</small><br><small class="controls__note">Teams AI policy; enabled by default for all users. PassiveVoiceEnrollment governs express enrolment from meetings. Managed only through PowerShell.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Enabled</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meetings can be transcribed, which voice identification depends on</strong><br><small>User</small><br><small class="controls__note">Existing control. If transcription isn't enabled in the meeting policy, voice identification does not occur.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The device setting is per room: the Pro Management portal applies it to one device, or to many through Device setting jobs and settings templates (Preview) ([Managing settings for Teams devices](https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings)). Changes require Room Management modify permission and a signed-in device.

Room recognition and user enrolment are separate controls: a room can only recognise people who have enrolled, and the Teams AI policy that governs enrolment is managed only through PowerShell. Administrators can also view enrolment status and delete users' voice and face profiles in the Teams admin center.

Microsoft Learn documents no PowerShell or API for the Pro Management portal's Recognition device setting at the time of writing (November 2026). The meeting policy parameters remain the scriptable route until Microsoft retires them. See also [/concepts/meeting-policy/](/concepts/meeting-policy/).

## Open questions

- When will meeting policy configuration (`roomAttributeUserOverride`) be retired, and what happens to rooms still relying on it? Watch the Enable People Recognition on Teams Rooms page and Message center.
- When **Configure with device settings** is on, does the device setting override a meeting policy assigned to the room's resource account? The people recognition page does not say.
- Will Microsoft publish a PowerShell or Graph route for the Pro Management portal's Recognition setting?
- Will face recognition come to Teams Rooms on Android, as the roadmap title suggests, and with which cameras?

<!-- rationale
risk: Low. The new Voice Recognition device setting is Off by default; Microsoft still documents the existing meeting policy configuration route.
cost: Low. Recognition is exclusive to rooms with a Teams Rooms Pro licence; beyond that licence, the cost of this change is admin time to move rooms from the meeting policy to device settings.
impact: Low. Room administrators see the new settings; enrolled meeting participants can notice speaker attribution in rooms configured for recognition.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note; Why it matters / default: The enrollment overview describes voice enrollment as enabled by default for all users. | Found: By default, voice and face recognition is available and enrollment is enabled for all users in the organization. | Fix: After the default-enrollment sentence add: 'The Set-CsTeamsAIPolicy reference qualifies the express-enrollment default: organizations that previously disabled EnrollVoice received the same initial state for PassiveVoiceEnrollment.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy, whose description states the one-time state duplication; retain the overview's stated general default. | Source: https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition
-->
