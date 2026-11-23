---
title: "Microsoft Teams Rooms: enhanced IntelliFrame uses an AI data channel from intelligent cameras"
slug: "microsoft-teams-enhanced-intelliframe-with-ai-data-channel-for-intelligent-cameras"
roadmapId: 564969
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Windows with Teams Rooms Pro and certified AI cameras get faster speaker framing and in-room people labels from on-device AI. Microsoft says it is on by default and needs no admin action."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Teams and Surface Devices"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The roadmap item says the capabilities are available with Teams Rooms Pro, and the IntelliFrame page lists a Teams Rooms Pro licence as a prerequisite. MC1442614 says rooms without supported hardware or licensing continue with the current experience."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-rooms","voice-and-face-recognition","pro-management-portal","privacy"]
sources:
  - title: "Microsoft 365 Roadmap item 564969"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564969"
    kind: "roadmap"
  - title: "MC1442614: (Updated) Microsoft Teams: Enhanced IntelliFrame with AI data channel for intelligent cameras"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1442614"
    kind: "message-center"
  - title: "What is Microsoft Multi-Stream IntelliFrame and Intelligent Camera?"
    url: "https://learn.microsoft.com/microsoftteams/devices/multistream-intelliframe"
    kind: "learn"
  - title: "Cloud IntelliFrame"
    url: "https://learn.microsoft.com/microsoftteams/devices/cloud-intelliframe"
    kind: "learn"
  - title: "Enable People Recognition on Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    kind: "learn"
  - title: "Overview and configuration of voice and face enrollment"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-intelliframe-people-labels-in-teams-rooms-on-windows","microsoft-teams-express-face-enrollment","meeting-policy"]
controls:
  - governs: "Whether a room identifies in-room people by face (people recognition)"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management Portal"
      path: "Rooms > Settings > Recognition > Configure with device settings > Face Recognition"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -RoomPeopleNameUserOverride On"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Portal path is the device setting; the PowerShell call is the meeting-policy alternative, which Learn says will be retired. Documented for IntelliFrame people recognition, not confirmed for the AI data channel."
  - governs: "Which users can enrol their face and voice profiles"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -EnrollFace Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    note: "Enrolment is enabled by default; users still opt in. A custom policy can be assigned to specific users with New-CsTeamsAIPolicy and Grant-CsTeamsAIPolicy."
  - governs: "Tenant-wide or per-room switch for the enhanced IntelliFrame AI data channel"
    scope: "other"
    ui: null
    api: null
    note: "No dedicated control is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-25T22:37:50"
changes:
  - date: "2026-11-23"
    note: "New briefing: enhanced IntelliFrame with an AI data channel, targeted for January CY2027, on by default per MC1442614."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 69 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 68
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "f2a84c6a86c1c680a94db71a2124b227"
---

## What's changing

Microsoft plans to expand IntelliFrame in Teams Rooms on Windows so that certified AI-capable cameras process video on the device and send the resulting AI metadata through a dedicated data channel, rather than relying only on cloud processing. The roadmap item and Microsoft's notice MC1442614 describe the result as faster active speaker framing, in-room participant recognition and labels, and more responsive meeting views, including when bandwidth is limited. Both in-room and remote participants see the improvements.

MC1442614 says meetings in supported Teams Rooms will use the enhanced capabilities automatically, that the feature is enabled by default, and that no admin action is required. Rooms without supported hardware or licensing are not affected. The notice names Teams Rooms Pro licences, certified intelligent (IC 2.0) cameras and a supported Teams Rooms on Windows app version as the conditions, and points to aka.ms/teamsdevices for supported devices.

Microsoft Learn does not yet describe this AI data channel feature, so what follows about its behaviour comes from the roadmap item and the notice. Learn does document the existing multi-stream IntelliFrame, which matches a participant on video to their enrolled face profile and displays a name label below their video frame, and the recognition settings that govern it.

The roadmap item is In development with a target of January CY2027. MC1442614 was updated on 2026-09-25 and gives a general availability rollout for Worldwide beginning mid-January 2027 (previously mid-October 2026) and expected to complete by early February 2027 (previously mid-November 2026). The roadmap lists the Worldwide (Standard Multi-Tenant) cloud only.

## Why it matters

For a service owner, the change is a new behaviour in rooms you may already run: cameras start doing AI processing that feeds framing and name labels for everyone in the meeting. Microsoft says it is on by default, so if nobody acts, eligible rooms change in the rollout window and the first people to notice will be room users and remote attendees.

The part that needs a decision is people recognition. Learn documents it as depending on face enrolment by users and on a recognition setting for the room, and it puts compliance duties on the organisation. Settle those settings and the room communications before mid-January 2027, not after the first complaint.

## Risk assessment

**Data exposure**

- The new data path is AI metadata sent from the camera through a dedicated data channel. MC1442614 says to review it against your organisation's policies, but Microsoft has not said what the metadata contains or where it is processed, so confirm that before you sign off.
- Name labels rely on face profiles. Learn says the Teams service matches the participant on video to their enrolled face profile, and that everyone who is not face-enrolled is treated as a participant.

**Security & identity**

- Face recognition is a biometric identification step. The IntelliFrame page says you are responsible for compliance with local laws and regulations, including notice, consent and data retention, and asks for signage outside rooms with an AI intelligent camera.
- Users control their own enrolment through the Recognition settings; the Teams AI policy (`CsTeamsAIPolicy`) decides who can enrol.

**Autonomy & actions**

- No change documented: the notice describes framing and labelling, not actions taken on a user's behalf.

**Change & support**

- Remote participants and room users will see different framing and labels from mid-January 2027. MC1442614 recommends informing AV and meeting room support teams.
- Eligibility depends on Pro licensing, an IC 2.0 camera and a supported app version, so expect questions from rooms that do not get it.

## Cost and licensing

The roadmap item says the capabilities are available with Teams Rooms Pro. The multi-stream IntelliFrame page lists a Teams Rooms Pro licence as a prerequisite and says a Basic licence does not support IntelliFrame or people recognition. The people recognition page says that feature is exclusive to Teams Rooms devices with a Teams Rooms Pro licence.

Neither the roadmap item nor MC1442614 names a separate charge or meter for the enhanced IntelliFrame. The indirect costs are Teams Rooms Pro licences and certified AI-capable cameras for rooms that lack them, and admin time for settings and communications. MC1442614 recommends reviewing device procurement guidance to prioritise certified cameras.

## Scope

**Who gets it:** Teams Rooms on Windows with a Teams Rooms Pro licence and a certified AI-capable (IC 2.0) camera, running a supported Teams Rooms on Windows app version. MC1442614 says other rooms are not affected and keep the current experience.

**Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the platform Teams and Surface Devices. Release phase is General Availability.

**Rollout:** the roadmap target is January CY2027. MC1442614 gives mid-January to early February 2027 for Worldwide.

**Prerequisites for people labels:** the IntelliFrame page says the Teams AI policy must allow voice and face enrolment, users must be face-enrolled, and the meeting must be scheduled with attendees on the invite; ad hoc or 1:1 meetings have no face identification.

## Governance guidance

### Before rollout

- Inventory Teams Rooms on Windows to find rooms with a Teams Rooms Pro licence and IC 2.0 cameras, using aka.ms/teamsdevices as MC1442614 recommends.
- Decide whether people recognition should be allowed in those rooms, and who owns that decision given the local-law duties the IntelliFrame page describes.
- Check the Teams AI policy (`CsTeamsAIPolicy`) to see who can enrol their face and voice, and change it for the users who should not.
- Check each room's Recognition setting in the Teams Rooms Pro Management Portal, or the meeting policy value that the page documents as the alternative.

### At rollout

- Tell AV and meeting room support teams what the new framing and labels look like, as MC1442614 recommends.
- Install signage outside rooms with an AI intelligent camera, as the IntelliFrame page asks.
- Confirm room devices run a supported Teams Rooms on Windows app version.

### After rollout

- Review room feedback on framing and labels, and compare rooms with and without the enhanced experience.
- Revisit the Recognition setting and enrolment policy if users raise concerns.
- Re-read the Learn pages for the feature once Microsoft documents it, and update your settings checks.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a room identifies in-room people by face (people recognition)</strong><br><small class="controls__note">Portal path is the device setting; the PowerShell call is the meeting-policy alternative, which Learn says will be retired. Documented for IntelliFrame people recognition, not confirmed for the AI data channel.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management Portal</strong><br>Rooms › Settings › Recognition › Configure with device settings › Face Recognition <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -RoomPeopleNameUserOverride On</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can enrol their face and voice profiles</strong><br><small>User</small><br><small class="controls__note">Enrolment is enabled by default; users still opt in. A custom policy can be assigned to specific users with New-CsTeamsAIPolicy and Grant-CsTeamsAIPolicy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -EnrollFace Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide or per-room switch for the enhanced IntelliFrame AI data channel</strong><br><small class="controls__note">No dedicated control is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the recognition setting for IntelliFrame people recognition. It does not yet say whether the same settings govern the new AI data channel, so treat rows 1 and 2 as the closest documented controls for the people-label part, not a switch for the whole feature. Row 3 records that no dedicated switch is documented.

The recognition page documents two ways to set recognition and recommends device-level settings, because meeting policy-based configuration will be retired. The enrolment policy decides who can create profiles; it does not decide whether a room uses them. Learn also says administrators can view enrolment status and delete end-user voice and face profiles in the Teams admin center, but the page does not give a path.

## Open questions

- Does the enhanced IntelliFrame run when a room's Face Recognition device setting is Off, and do the recognition settings or meeting policy govern the new people labels? MC1442614 says labels are on by default, while the recognition page lists the setting as Off. Watch Message center and the Teams Rooms Learn pages.
- What AI metadata crosses the data channel, where is it processed, and is any of it retained? Watch the notice and the IntelliFrame page for a data handling section.
- Which cameras and Teams Rooms on Windows app versions count as supported for this feature? MC1442614 points to aka.ms/teamsdevices.
- Will Microsoft add a tenant-wide or per-room switch for the AI data channel before the January 2027 rollout?

<!-- rationale
risk: Medium. The people labels depend on face recognition, and Microsoft says the feature is enabled by default; Learn documents recognition and enrolment settings but does not yet describe the AI data channel itself.
cost: Low. The roadmap item says the capabilities are available with Teams Rooms Pro and neither it nor MC1442614 names a separate charge; the indirect cost is Pro licences and certified cameras for rooms that lack them.
impact: Medium. Only rooms with Teams Rooms Pro and certified AI-capable cameras change, but in-room and remote participants in those rooms all see the new framing and labels.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: Microsoft has not said where the enhanced IntelliFrame AI metadata is processed. | Found: By processing AI metadata directly on the device and sending it through a dedicated data channel rather than relying only on cloud processing | Fix: Replace the first Data exposure bullet with: 'The new data path is AI metadata sent from the camera through a dedicated data channel. MC1442614 says AI metadata is processed directly on the device and asks organisations to review the feature against their policies; the notice does not specify the metadata contents or its destination after transmission.' In Open questions, replace 'where is it processed' with 'what is its destination after transmission'. The current assertion also conflicts with the on-device processing already described in What's changing.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; Risk assessment: Change & support / date: Worldwide general availability begins mid-January 2027, previously mid-October 2026. | Found: General Availability (Worldwide): Beginning mid-January 2027 (previously mid-October 2026) | Fix: In Risk assessment, replace 'Remote participants and room users will see different framing and labels from mid-January 2027.' with 'MC1442614 targets the Worldwide rollout beginning mid-January 2027, when remote participants and room users would start seeing improved framing and labels.' Keep the accurately attributed rollout window elsewhere.
-->
