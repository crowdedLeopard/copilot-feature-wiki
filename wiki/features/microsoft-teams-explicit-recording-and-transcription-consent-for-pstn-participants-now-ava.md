---
title: "Microsoft Teams: explicit recording and transcription consent for PSTN participants in GCC High and DoD"
slug: "microsoft-teams-explicit-recording-and-transcription-consent-for-pstn-participants-now-ava"
roadmapId: 567304
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Extends explicit recording and transcription consent to PSTN participants in GCC High and DoD meetings. Learn lists the consent policy as Off by default, so admins decide whether to turn it on and tell dial-in users."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "A consent option inside licensed Microsoft Teams: except for joining meetings anonymously, each user in the organisation must have a Teams license (Manage Teams licenses). No licence or meter specific to this consent extension is published as of November 2026."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","recording-consent","pstn","gcc-high","dod"]
sources:
  - title: "Manage participant agreement for recording and transcription"
    url: "https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription"
    kind: "learn"
  - title: "Explicit recording and transcription consent for Audio Conferencing"
    url: "https://learn.microsoft.com/microsoftteams/conferencing-recording-consent"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Configure call recording, transcription, and captions in Teams"
    url: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 567304"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567304"
    kind: "roadmap"
videos: []
related: ["meeting-policy","meeting-transcripts","microsoft-teams-explicit-consent-for-recording-and-transcription-in-one-to-one-pstn-calls","microsoft-teams-mandatory-pre-meeting-consent","microsoft-teams-audio-announcement-for-recording-and-transcription"]
controls:
  - governs: "Whether meetings require participants, including PSTN dial-in callers, to consent to recording and transcription"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & Transcription > Require participant agreement for recording and transcription"
      docs: "https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ExplicitRecordingConsent Enabled"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Default is Off (Disabled) on Learn. The participant agreement page documents Teams admin center management; the Audio Conferencing page says PowerShell must be used for Audio Conferencing consent."
  - governs: "Whether users can record meetings (existing control; does not ask for consent)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity Global -AllowCloudRecording $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Allows or prevents recording. It does not prompt participants for consent."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-17T23:00:45"
changes:
  - date: "2026-11-23"
    note: "New briefing: PSTN recording and transcription consent in GCC High and DoD, with the meeting policy setting Learn documents as Off by default."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: removed the claim of an explicit choice from every participant, qualified attendance-report data, fixed the 1:1 PSTN wording, set licensing to included in Teams, and dropped the unmatched monitoring step."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 53 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f20fd8523d4ec4356052ce09d047a57a"
---

## What's changing

The roadmap item extends explicit recording and transcription consent to PSTN participants (people who dial in by phone) in Microsoft Teams meetings in GCC High and DoD. It says the feature is already available in the Public and GCC clouds. When a meeting is being recorded or transcribed, PSTN participants are prompted for explicit consent before they can unmute and take part. If they do not consent, they stay muted for the rest of the meeting.

Microsoft Learn describes the same behaviour for callers who dial in through Audio Conferencing. They press **1** to consent and unmute, or **2** to decline and stay muted. They can press \*6 to unmute later, and are prompted for consent before they can speak. Learn also lists "PSTN endpoints in meetings and group calls" as supported endpoints for explicit consent.

Learn ties consent to a meeting policy setting, **Require participant agreement for recording and transcription** (PowerShell: `-ExplicitRecordingConsent`). It documents that setting as Off (Disabled) by default. The roadmap description does not mention the policy and says participants will be prompted after rollout. The Learn pages read do not mention GCC High or DoD, so confirm in a GCC High or DoD tenant whether the prompt depends on the policy being on.

The roadmap record gives the status as Launched, the target as August CY2026 and the release phase as General Availability, for Android, Desktop, iOS, Mac and Web. Its last modification is dated 17 September 2026.

## Why it matters

This closes a gap for compliance teams in GCC High and DoD: Teams client users can already be asked to consent, and PSTN dial-in participants can now be asked as well. PSTN dial-in participants can provide explicit consent before speaking. Learn says the consent choice for each participant is included in the attendance report, and that admins can see consent data in the Purview audit logs. When the attendance report is disabled or participants are excluded, organisers and co-organisers do not see that consent data; admins can still see it in audit logs.

If nobody acts, Learn's documented default is that participants are not asked and are included in recordings and transcripts. Declining has a cost for the caller: they stay muted. Plan the user communication the roadmap item recommends before you turn the policy on for any group, especially for people who join by phone.

## Risk assessment

**Data exposure**
- Where the policy is Off, Learn says participants are not asked for consent and are included in recordings and transcripts. Turning on **Require participant agreement for recording and transcription** is the control that changes this.
- Consent choices are recorded: Learn says they appear in the attendance report and that an admin can see them in the Purview audit logs. When the attendance report is disabled or participants are excluded, organisers and co-organisers do not see that consent data; admins can still see it in audit logs.

**Security & identity**
- No change to authentication or access is described. The participant agreement page lists PSTN endpoints in 1:1 calls as auto-consented, while the call recording page documents explicit consent for Teams 1:1 VoIP and PSTN calls under the Calling policy.

**Autonomy & actions**
- No change: the feature prompts a person and does not act on its own. Learn says a participant who declines is muted (view-only experience in the Teams client), and cannot start recording or transcription in meetings that require consent.

**Change & support**
- PSTN callers who do not press **1** stay muted, which can look like a broken line. Expect support calls from dial-in users and organisers.
- Learn says that if a policy mutes all participants on joining, callers must press \*5 to raise a hand before they provide consent again.

## Cost and licensing

This is a consent option inside licensed Microsoft Teams. Except for joining meetings anonymously, organisational users need a Teams license ([Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access)). No licence or meter specific to this consent extension was found as of November 2026: the participant agreement and Audio Conferencing consent pages list none, and the roadmap item names none.

The cost visible today is indirect: admin time to set the policy and assign it, and communication to dial-in users about pressing **1** to consent.

## Scope

**Clouds:** GCC High and DoD, as the roadmap record lists them. The roadmap item says the feature is already available in Public and GCC.

**Platforms:** the record lists Android, Desktop, iOS, Mac and Web. Learn lists supported endpoints for explicit consent, including Mobile Teams, Audio Conferencing dial-in participants, PSTN endpoints in meetings and group calls, Teams native Mac and Windows, and Teams Web. Participants on unsupported endpoints (CarPlay, old native clients, Teams Displays) have the view-only experience in meetings that require consent.

**Who is affected:** PSTN participants in meetings that are recorded or transcribed. Learn says the policy applies to meetings created by organisers with the assigned meeting policy, and to channel meetings.

**Status:** Launched, target August CY2026, General Availability.

## Governance guidance

### Before rollout
- Check the **Require participant agreement for recording and transcription** setting on each Teams meeting policy in your GCC High or DoD tenant, and note which policies are Off.
- Decide which organisers or groups should require consent, and whether to use the Global policy or a custom meeting policy.
- Tell PSTN dial-in users what the prompt is and that pressing **1** consents and unmutes, as the Audio Conferencing page describes.

### At rollout
- Turn the setting On for the chosen meeting policy in the Teams admin center, or run `Set-CsTeamsMeetingPolicy -Identity <policy name> -ExplicitRecordingConsent Enabled`, and assign the policy to users or groups.
- Test a recorded meeting with a dial-in participant, covering consent, decline and the later \*6 unmute.
- Confirm in your own tenant that the prompt behaves as the roadmap item describes, since the Learn pages read do not mention GCC High or DoD.

### After rollout
- Collect support feedback from callers who stayed muted, and update your user guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether meetings require participants, including PSTN dial-in callers, to consent to recording and transcription</strong><br><small>User</small><br><small class="controls__note">Default is Off (Disabled) on Learn. The participant agreement page documents Teams admin center management; the Audio Conferencing page says PowerShell must be used for Audio Conferencing consent.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; Transcription › Require participant agreement for recording and transcription <a href="https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ExplicitRecordingConsent Enabled</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can record meetings (existing control; does not ask for consent)</strong><br><small>User</small><br><small class="controls__note">Allows or prevents recording. It does not prompt participants for consent.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity Global -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The consent setting sits in the meeting policy, so it applies to meetings created by organisers who have that policy assigned. Learn says the same parameter also manages recording consent for Audio Conferencing. One-to-one Teams calls, including PSTN, use the separate Teams Calling policy parameter described on Learn's call recording page.

The recording row is today's existing control and is not specific to consent: turning meeting recording off for a policy stops that policy's users recording meetings, but it does not ask anyone for consent. Learn documents audit and attendance-report consent data but, at the time of writing (November 2026), the pages read give no separate admin switch for the PSTN prompt.

## Open questions

- Does the consent prompt for PSTN participants in GCC High and DoD depend on the **Require participant agreement for recording and transcription** policy, which Learn documents as Off by default, or does it apply on arrival as the roadmap description reads?
- Does the Learn documentation for explicit consent, which does not mention GCC High or DoD, apply unchanged in those clouds?
- Is any licence or meter specific to this consent extension required? None is published at the time of writing (November 2026).

<!-- rationale
risk: Low. Learn documents the consent policy as Off by default, so recording behaviour stays as it is until an admin turns it on; what remains is PSTN callers being included in recordings without being asked.
cost: Low. The cost shown is admin time and user communication. This is a consent option inside licensed Teams, and no licence or meter specific to this consent extension is published at the time of writing (November 2026).
impact: Low. Admins and PSTN dial-in participants in meetings that are recorded or transcribed notice it, and only where the policy is on. Other participants already use the Teams client consent prompt.
-->
