---
title: "Microsoft Teams Rooms: IntelliFrame people labels name in-room participants"
slug: "microsoft-teams-intelliframe-people-labels-in-teams-rooms-on-windows"
roadmapId: 566700
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Windows with a Teams Rooms Pro licence will show enrolled in-room people by name to remote attendees, using voice and face profiles. Targeted January CY2027. Plan recognition and enrolment settings first."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac","Teams and Surface Devices"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item says the feature is available with Teams Rooms on Windows licensed for Teams Rooms Pro, and Learn lists a Teams Rooms Pro licence as a prerequisite. No separate price or meter for the labels is documented at the time of writing (November 2026)."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["teams","teams-rooms","meeting-policy","powershell","privacy","voice-and-face-recognition","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 566700"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566700"
    kind: "roadmap"
  - title: "MC1419798"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1419798"
    kind: "message-center"
  - title: "What is Microsoft Multi-Stream IntelliFrame and Intelligent Camera?"
    url: "https://learn.microsoft.com/microsoftteams/devices/multistream-intelliframe"
    kind: "learn"
  - title: "Enable People Recognition on Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    kind: "learn"
  - title: "Overview and configuration of voice and face enrollment"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    kind: "learn"
videos: []
related: ["meeting-policy"]
controls:
  - governs: "Whether rooms identify people on video and show name labels"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <PolicyName> -roomPeopleNameUserOverride On"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    note: "Values On or Off. The notice cites the same setting as RoomPeopleNameUserOverride. Learn says meeting-policy configuration will be retired. Learn gives no admin centre path for it."
  - governs: "Voice and face recognition on each Teams Room (device settings)"
    scope: "other"
    ui:
      surface: "Teams Pro Management Portal"
      path: "Rooms > Settings > Recognition > Configure with device settings > Apply > Submit"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    api: null
    note: "Learn lists Voice Recognition and Face Recognition as Off by default and recommends this method. Settings can also be set locally on the room console."
  - governs: "Whether users may enrol voice and face profiles"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled -EnrollFace Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    note: "Learn says CsTeamsAIPolicy is accessible only through PowerShell and replaces EnrollUserOverride. The call shown is the Learn example for the Global policy; use New-CsTeamsAIPolicy and Grant-CsTeamsAIPolicy for specific users."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-17"
    note: "New briefing: IntelliFrame people labels for Teams Rooms on Windows, with the October 2026 rollout update to late January 2027."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 73
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "4843572f07e2d3428f916981959a02cc"
---

## What's changing

The roadmap item says Teams Rooms on Windows will show IntelliFrame people labels: a name label for each identified in-room participant, with a contact card, so remote participants can see who is in the room. The roadmap says the labels use voice and face profiles on intelligent cameras and in the cloud, and that the feature is available with Teams Rooms on Windows licensed for Teams Rooms Pro. It is In development, with a target of January CY2027, release phase General Availability, for Worldwide (Standard Multi-Tenant) and GCC.

Microsoft's notice [MC1419798](https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1419798), updated 15 October 2026, gives the rollout as beginning late January 2027 (previously mid-November 2026) and expected to complete by early February 2027 (previously mid-December 2026). It sets no act-by date. The notice says labels appear under identified in-room participants' video feeds, that participants without enrolled profiles appear without labels, that existing Teams meeting policies for voice and face enrolment are honoured, and that no change occurs if enrolment is disabled. It also says the feature is enabled automatically when prerequisites are met and that no action is required to enable it. The roadmap describes a hover-over contact card; the notice says remote participants select a label to open it.

Microsoft Learn already describes name labels for multi-stream cameras: the Teams service matches the participant on video to their enrolled face profile and displays a name label below the video frame. The notice says the related Learn pages will be updated before rollout, so treat Learn's description as the current documentation and the roadmap as the plan. Learn's prerequisites are a Teams Rooms on Windows device, a Teams Rooms Pro licence, and an end-user policy that allows voice and face enrolment. Identification also needs a scheduled meeting, and ad hoc or one-to-one meetings without an Outlook appointment do not get face identification.

## Why it matters

This puts employees' names on screen for remote attendees based on biometric profiles, so it is a privacy and communications matter as well as a room-technology one. Microsoft's notice says no action is required to enable it, but Microsoft Learn lists the device-level Face Recognition setting as Off by default and the notice and Learn do not together say whether labels appear if an administrator does nothing. Microsoft has not stated the default clearly, so plan on labels appearing in rooms that meet the prerequisites.

Learn says voice and face enrolment is enabled for all users by default, but users must still opt in to enrol before they can be recognised. Your leverage is therefore the enrolment policy, the room recognition settings and how you brief users, not the camera hardware.

## Risk assessment

**Data exposure**
- Remote attendees see an enrolled person's name and, per the notice, a contact card with organisational details. Controls: the roomPeopleNameUserOverride meeting policy value and the room recognition settings in the controls table.
- Microsoft's notice says the feature creates no new data and relies on existing voice and face profiles. Learn says a profile is removed right away when a user unenrols and is removed automatically if unused for one year.
- Learn says voice and face enrolment is available up to GCC and not in GCC High or DoD. The roadmap lists Worldwide and GCC.

**Security & identity**
- Learn tells administrators they are responsible for compliance with local laws on notice, consent and data retention when they install an AI intelligent camera and use face enrolment and people recognition, and to install signage outside such rooms.
- Learn says identification matches participants against the meeting invite: people not on the invite, or on an invite forwarded less than 30 minutes before the meeting, are not identified.

**Autonomy & actions**
- No autonomous actions are documented. The feature shows labels; it does not act on behalf of users.

**Change & support**
- The notice names `EnrollUserOverride` in `Set-CsTeamsMeetingPolicy` for blocking enrolment. Learn says `CsTeamsAIPolicy` replaces that setting. Test which one your tenant honours before you rely on either.
- Learn says meeting-policy-based recognition configuration will be retired and recommends device settings.
- Learn lists known issues: the name label is missing in Active speaker view, and the invite supports up to 12 concurrent in-room users for name labels. Brief the helpdesk.

## Cost and licensing

Learn's IntelliFrame page lists a Teams Rooms Pro licence as a prerequisite and says a Basic licence does not support IntelliFrame or people recognition. The people recognition page says the feature is exclusive to Teams Rooms devices with a Teams Rooms Pro licence. The roadmap says the same. Neither the Learn prerequisites nor the notice name any other licence.

No meter, price or cap for the labels is documented at the time of writing (November 2026), and the Teams Rooms Pro price is not yet published on those pages. Indirect costs are admin time, user communications and signage. Rooms on a Basic licence would need the Pro licence, and supported cameras are needed. Learn names five multi-stream camera models on the IntelliFrame page.

## Scope

**Rooms:** Teams Rooms on Windows with a Teams Rooms Pro licence and a supported camera. Learn lists Jabra Panacast 50, Lenovo ThnkSmart Bar 180, Yealink SmartVision 40, Yealink SmartVision 60 and Yealink MVC S90 Bundle for multi-stream IntelliFrame, and notes other cameras may be certified over time.

**People:** users who have enrolled a voice profile and a face profile; Learn says voice enrolment must come before face enrolment. Everyone else appears without a name label.

**Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and GCC, and platforms Desktop, Mac, and Teams and Surface Devices.

**Rollout:** the notice gives late January 2027 to early February 2027 for Worldwide and GCC. The roadmap target is January CY2027.

## Governance guidance

### Before rollout
- Check which Teams Rooms on Windows devices hold a Teams Rooms Pro licence and use a supported camera.
- Decide whether your organisation will allow voice and face enrolment, and who may enrol, using the enrolment policy row in the controls table.
- Confirm with legal and works-council contacts the notice, consent and signage obligations Learn describes for rooms with AI cameras.
- Decide the room recognition setting you want in the Pro Management Portal, rather than relying on meeting-policy values that Learn says will be retired.

### At rollout
- Set the room recognition option deliberately in the Pro Management Portal, or in the roomPeopleNameUserOverride meeting policy, so labels appear only where you intend.
- Tell users where to enrol (Teams > Settings > Recognition, as the notice and Learn give it) and that people must be on the meeting invite to be named.
- Update helpdesk guidance with Learn's known issues, including missing labels in Active speaker view.

### After rollout
- Review enrolment status and remove profiles where needed in the Teams admin center, which Learn says shows end-user voice and face enrolment status.
- Re-check the notice and Learn pages for the final names of the enrolment settings and any change to the default.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether rooms identify people on video and show name labels</strong><br><small>User</small><br><small class="controls__note">Values On or Off. The notice cites the same setting as RoomPeopleNameUserOverride. Learn says meeting-policy configuration will be retired. Learn gives no admin centre path for it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;PolicyName&gt; -roomPeopleNameUserOverride On</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Voice and face recognition on each Teams Room (device settings)</strong><br><small class="controls__note">Learn lists Voice Recognition and Face Recognition as Off by default and recommends this method. Settings can also be set locally on the room console.</small></td><td data-label="Admin UI"><strong>Teams Pro Management Portal</strong><br>Rooms › Settings › Recognition › Configure with device settings › Apply › Submit <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users may enrol voice and face profiles</strong><br><small>User</small><br><small class="controls__note">Learn says CsTeamsAIPolicy is accessible only through PowerShell and replaces EnrollUserOverride. The call shown is the Learn example for the Global policy; use New-CsTeamsAIPolicy and Grant-CsTeamsAIPolicy for specific users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled -EnrollFace Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The room recognition setting and the meeting policy are separate configuration methods. Learn recommends device settings and says the meeting-policy method will be retired. Learn does not say which takes precedence if both are set, so set one deliberately.

Enrolment is governed by the `CsTeamsAIPolicy`, which Learn says is accessible only through PowerShell. The notice cites `EnrollUserOverride` and Learn says that setting is replaced. Learn also says the Teams admin center can show enrolment status and delete end-user voice and face profiles, but it gives no path for this, and it says administrators cannot export enrolment data there. The notice says individual users can opt out by removing their profile in Teams > Settings > Recognition.

Microsoft Learn documents no API for the Pro Management Portal recognition settings at the time of writing (November 2026), and the Teams Rooms release notes describe those settings as replacing PowerShell-based configuration. Learn gives no Teams admin center path for roomPeopleNameUserOverride.

## Open questions

- What is the default on arrival? The notice says the feature is enabled automatically when prerequisites are met, while Learn lists the device Face Recognition setting as Off by default. Watch MC1419798 and the people recognition page.
- Which enrolment setting will the tenant honour at rollout: `EnrollUserOverride` as in the notice, or `CsTeamsAIPolicy` as Learn says?
- Will the roomPeopleNameUserOverride meeting policy value still switch labels off once meeting-policy recognition configuration is retired?
- Will Microsoft publish a separate price or meter for the labels, or the Teams Rooms Pro price they rest on?
- How will the labels reach GCC tenants, given Learn says voice and face enrolment is available up to GCC and not in GCC High or DoD?

<!-- rationale
risk: Medium. The labels rest on biometric voice and face profiles and Microsoft's notice says the feature is enabled automatically when prerequisites are met, but enrolment and recognition settings give administrators controls.
cost: Low. The only licence the sources name is Teams Rooms Pro, which the rooms need; no separate meter is documented, so the known cost is admin time and communications. The Teams Rooms Pro price is not yet published here.
impact: Medium. People who enrol and use Teams Rooms Pro rooms with supported cameras are named to remote attendees; other users and rooms are unaffected.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions / default: The arrival default is unknown because Microsoft has not clearly stated whether labels appear without administrator action. | Found: The feature is enabled automatically when prerequisites are met. ... No action is required to enable this feature. | Fix: Set defaultState to "on". Replace the claims that the arrival default is unstated with: "Microsoft's notice says the labels are enabled automatically when prerequisites are met, with no action required to enable the feature. Learn separately lists the existing device recognition settings as Off by default." Remove the open question asking what the arrival default is; the notice explicitly supplies it.
- [contradicted, blocker] Cost and licensing / absence: No cap for the labels is documented. | Found: For people Identification, the Outlook invite supports a total of 64 users, which includes both users attending online and up to 12 concurrent users in the room for Name labels. | Fix: Remove "or cap" from "No meter, price or cap for the labels is documented". The existing Risk assessment already states the documented 12-concurrent-in-room-user label limit. | Source: https://learn.microsoft.com/microsoftteams/devices/multistream-intelliframe
- [contradicted, blocker] controls[0].api; Governance controls; Governance guidance: At rollout / command: Set-CsTeamsMeetingPolicy -Identity <PolicyName> -roomPeopleNameUserOverride On is the complete documented meeting-policy enablement call for people recognition. | Found: Enabling people recognition requires the tenant CsTeamsMeetingPolicy roomPeopleNameUserOverride to be "On" and roomAttributeUserOverride to be Attribute for allowing individual voice and face profiles to be used for recognition in meetings. | Fix: Replace controls[0].api.call and its rendered call with "Set-CsTeamsMeetingPolicy -Identity <PolicyName> -roomAttributeUserOverride Attribute -roomPeopleNameUserOverride On". That full call is printed on the existing controls[0].api.docs page, https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition. Qualify the meeting-policy enablement advice with "with roomAttributeUserOverride set to Attribute". | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy
- [contradicted, blocker] controls[2].api; controls[2].governs; controls[2].note; Governance controls / command: Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled -EnrollFace Disabled controls whether users can enroll voice and face profiles across enrollment methods. | Found: This setting can also be individually set to Enabled or Disabled and operates independently of EnrollVoice. ... To turn off voice enrollment completely, make sure to set both parameters to Disable. | Fix: Narrow controls[2].governs and the rendered row heading to "Whether users may actively enrol voice and face profiles". Replace the note's claim that the call is the cited page's Global example with "Disables active voice and face enrolment for the Global policy; express voice enrolment is controlled separately by PassiveVoiceEnrollment." The cited enrollment article explicitly distinguishes these methods. Keep the existing valid call for this narrower purpose. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: The Teams Rooms release notes describe recognition device settings as replacing PowerShell configuration. | Found: These settings replace PowerShell-based configuration with a more intuitive UI, offering clearer visibility into recognition status across rooms. | Fix: Add https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note to sources for the release-note statement. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-windows-feature-introduction-and-issue-resolution
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist directs administrators to review and delete enrollment profiles, but the controls table has no row for that control. | Found: After rollout: "Review enrolment status and remove profiles where needed in the Teams admin center". The table covers name-display policy, device recognition and enrollment permissions, not enrollment-profile review or deletion. | Fix: Remove the After rollout checklist bullet beginning "Review enrolment status and remove profiles where needed". The supported capability can remain in the Governance controls prose without adding an unverified table path.
-->
