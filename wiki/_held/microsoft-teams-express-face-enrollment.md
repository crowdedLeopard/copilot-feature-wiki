---
title: "Microsoft Teams: express face enrollment from meeting video for Teams Rooms recognition"
slug: "microsoft-teams-express-face-enrollment"
roadmapId: 570846
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Users will be able to create a face profile from their camera in eligible Teams meetings, after opting in, so Teams Rooms can recognise them. Microsoft has not yet documented the admin setting, default or licence for this feature."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for express face enrollment. Learn's People Recognition page states that the feature is exclusive to Teams Rooms devices with a Teams Rooms Pro licence; its enrollment page names no licence."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["teams","teams-rooms","voice-and-face-recognition","privacy","pro-management-portal","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 570846"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570846"
    kind: "roadmap"
  - title: "Overview and configuration of voice and face enrollment"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    kind: "learn"
  - title: "Set-CsTeamsAIPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy"
    kind: "learn"
  - title: "Enable People Recognition on Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    kind: "learn"
videos: []
related: ["microsoft-teams-intelliframe-people-labels-in-teams-rooms-on-windows","meeting-policy","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management"]
controls:
  - governs: "Whether users can create a face profile through Recognition settings (EnrollFace)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -EnrollFace Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy"
    note: "General control: Learn documents EnrollFace for face enrollment in Teams app settings; Microsoft has not confirmed it governs express face enrollment. Assignable to users or groups."
  - governs: "A dedicated switch for express face enrollment"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap says admins can enable or disable the feature. At the time of writing (November 2026) Learn documents no such setting."
  - governs: "Whether Teams Rooms recognise enrolled users by face"
    scope: "other"
    ui:
      surface: "Teams Pro Management Portal"
      path: "Rooms > Settings > Recognition > Configure with device settings"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <PolicyName> -roomPeopleNameUserOverride Off"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    note: "Face Recognition is a device setting, default Off. Meeting-policy configuration will be retired; Teams Rooms Pro licence required per Learn."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-13T19:41:44"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap item for express face enrollment, with the related Teams AI policy and Teams Rooms recognition controls and the gaps Microsoft has not yet documented."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "c8d0bed13b1f54fc4b0abe18da4f1dba"
---

## What's changing

The roadmap item says express face enrollment makes it easier for users to create a face profile in Teams by using their camera during eligible meetings, after they opt in. Once enrolled, users can be recognised in supported Teams Rooms experiences, which the roadmap says helps identify who is in the room and improves downstream experiences such as Copilot and recap. It also says admins can enable or disable the feature for their organisation.

Microsoft Learn has no page for this feature yet, so what follows about its behaviour is the roadmap's description. Learn's page on voice and face enrollment is background. It says a user can create a voice and face profile by "express enrollment", using their voice and images and videos of their face from Teams meetings, or by "active enrollment" in Settings > Recognition. For express enrollment it says the Teams audio and video used to create the profiles are not retained after the call ends. Learn does not say whether that page already describes this roadmap item.

The record gives the status as In development, with a target of February CY2027, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud, and the Android, Desktop, iOS and Mac platforms. The date is Microsoft's target, not a commitment.

## Why it matters

A face profile is biometric data, and recognition in Teams Rooms turns it into names on video, in transcripts, recaps and Copilot output. This is an opt-in feature, so the exposure is limited to users who choose it, but the choice is easier to make than a manual enrollment. Privacy, security and legal teams will want to have decided their position before users are asked.

Microsoft has not stated what happens on arrival, because no page describes the express face setting or its default. No source says existing behaviour changes. Learn does say that the existing Teams AI policy settings EnrollVoice, EnrollFace and PassiveVoiceEnrollment are enabled by default, so check the current values now, and watch for the page that says which setting governs express face enrollment.

## Risk assessment

**Data exposure**

- Express enrollment builds a face profile from camera images in meetings. Learn says the Teams audio and video used for express enrollment are not retained after the call, but the profile is retained while the user is enrolled, removed automatically if unused for one year, and removed within 90 days of the user's Teams account being deleted.
- In Teams Rooms, an enrolled profile lets the room identify the person on camera. Learn says their contributions are then attributed in transcriptions, meeting recaps and Copilot experiences, so a profile affects what downstream AI features show about a named person.

**Security & identity**

- Enrollment alone does not switch recognition on in a room: Learn gives the default for the Face Recognition device setting as Off. Face recognition needs a supported camera or Cloud IntelliFrame on Teams Rooms on Windows, and Learn lists it as not supported on Teams Rooms on Android.
- Learn states that administrators cannot export end-user voice or face enrollment data from the Teams admin center. Export stays with the user. Learn says these enrollments are available only up to GCC, and not in GCC High or DoD.

**Autonomy & actions**

- No change documented: the roadmap describes recognition and identification, not actions taken on a user's behalf.

**Change & support**

- Users will ask what is captured and how to remove it. Learn says users can delete their profile at any time in the Teams desktop app, even if an administrator has turned enrollment off after they enrolled.
- Because no express face setting is documented, an admin cannot yet confirm what a policy change will do to the opt-in prompt. Plan the user messaging after Microsoft publishes the setting.

## Cost and licensing

Microsoft has not published a licence or price for express face enrollment. Learn's voice and face enrollment page names no licence, and at the time of writing (November 2026) it documents no meter for the feature.

On the Teams Rooms side, Learn's page on People Recognition states: "This feature is exclusive to Microsoft Teams Rooms devices with a Teams Rooms Pro license." That page covers recognition in rooms, not express enrollment. Indirect costs are admin time to set policy and room settings, and user communications.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Android, Desktop, iOS and Mac platforms, with Targeted Release and General Availability phases. Learn says voice and face enrollments are currently available only up to GCC and are not available in GCC High or DoD. That is Learn's statement about enrollment generally, not about this item.

Users opt in themselves. Microsoft has not said which meetings are "eligible". Learn describes the audience for enrollment settings as Enterprise administrators and says there is no language requirement for face enrollment. It does not name the role needed to edit a Teams AI policy.

For recognition in rooms, Learn lists face recognition as supported on Teams Rooms on Windows and not on Teams Rooms on Android, and requires a supported camera or Cloud IntelliFrame.

## Governance guidance

### Before rollout

- Read the current EnrollFace, EnrollVoice and PassiveVoiceEnrollment values in the Global and any custom Teams AI policies, using the first controls row.
- Agree with privacy, security and legal teams whether staff may create face profiles, and where a policy exception is needed.
- Check which Teams Rooms have Face Recognition turned on in the Pro Management Portal, using the room recognition row.

### At rollout

- Set the Teams AI policy to match the decision once Microsoft documents which setting governs express face enrollment; until then, treat EnrollFace as unconfirmed for this feature.
- Tell users that enrollment is opt-in, what the camera is used for, and that they can delete their profile in the Teams desktop app.
- Update the organisation's privacy notice or works council briefing if face profiles are in scope.

### After rollout

- Re-check the Learn enrollment page and Message center for the express face setting and its default.
- Confirm that Teams Rooms recognition settings still match the decision, and review them if Microsoft retires meeting-policy-based configuration.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create a face profile through Recognition settings (EnrollFace)</strong><br><small>User</small><br><small class="controls__note">General control: Learn documents EnrollFace for face enrollment in Teams app settings; Microsoft has not confirmed it governs express face enrollment. Assignable to users or groups.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -EnrollFace Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A dedicated switch for express face enrollment</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap says admins can enable or disable the feature. At the time of writing (November 2026) Learn documents no such setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Teams Rooms recognise enrolled users by face</strong><br><small class="controls__note">Face Recognition is a device setting, default Off. Meeting-policy configuration will be retired; Teams Rooms Pro licence required per Learn.</small></td><td data-label="Admin UI"><strong>Teams Pro Management Portal</strong><br>Rooms › Settings › Recognition › Configure with device settings <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;PolicyName&gt; -roomPeopleNameUserOverride Off</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents EnrollFace as controlling user access to face enrollment in the Teams app settings, and describes it in its examples as allowing manual (active) enrollment. It documents PassiveVoiceEnrollment for express voice enrollment, and no parameter named for express face enrollment. Microsoft has not confirmed that EnrollFace governs this feature. Policies can be assigned to specific users or groups.

Learn says administrators can view end-user voice and face enrollment status and delete profiles and enrollment data in the Teams admin center, and cannot export it there. The page names the Teams admin center but not the menu path, so it is not listed as a row. This does not change default availability, according to the same page.

Room recognition is separate from enrollment. Learn recommends device settings, and says meeting-policy-based configuration will be retired in the future.

## Open questions

- Which Teams AI policy setting will govern express face enrollment, and is it on or off by default? Watch the Set-CsTeamsAIPolicy reference and Message center.
- Will an express face setting be available in the Teams admin center, or only in PowerShell as Learn says for the Teams AI policy today?
- Will express face enrollment need any licence beyond those already held? Not yet published; the Teams Rooms Pro licence requirement is stated for Teams Rooms recognition.
- Which meetings count as eligible, and does turning the setting off remove profiles that already exist or only stop new enrollment?

<!-- rationale
risk: Medium. It creates a face profile (biometric data) from meeting video, but the roadmap says users opt in, and Learn documents related enrollment and Teams Rooms controls; no express-face setting is documented yet.
cost: Low. Licensing for this feature is not yet published; the only documented cost is admin and communication time, plus a Teams Rooms Pro licence that Learn states is required for People Recognition on Teams Rooms devices.
impact: Low. The roadmap says users create the profile after they opt in, so those who notice are opt-in users, room admins and privacy teams; Microsoft has not said who is prompted or when.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / command: Administrators can read current enrollment policy values using the first controls row. | Found: Set-CsTeamsAIPolicy -Identity Global -EnrollFace Disabled Set Teams AI policy "EnrollFace" value to "Disabled" for global as default. | Fix: Replace the first Before rollout bullet with: 'Inspect the Global and any custom Teams AI policies with Get-CsTeamsAIPolicy; do not run the first controls row's disable command merely to inspect settings.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsaipolicy, which states that the cmdlet retrieves all Teams AI policies for the tenant. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / default: Learn says the existing PassiveVoiceEnrollment setting is enabled by default. | Found: The new policy includes three distinct settings which are enabled by default | Fix: After the defaults sentence, add: 'The Set-CsTeamsAIPolicy reference qualifies PassiveVoiceEnrollment: organisations that previously disabled EnrollVoice receive a one-time matching state for PassiveVoiceEnrollment when express voice enrollment launches.' The reference is https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy. | Source: https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition
-->
