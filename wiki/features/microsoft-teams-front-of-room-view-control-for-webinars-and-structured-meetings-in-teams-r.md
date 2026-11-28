---
title: "Microsoft Teams Rooms on Android: front-of-room display defaults to attendee view in webinars and structured meetings"
slug: "microsoft-teams-front-of-room-view-control-for-webinars-and-structured-meetings-in-teams-r"
roadmapId: 559602
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "When a Teams Rooms on Android device joins a webinar or structured meeting as a presenter, its room display now defaults to attendee view. On by default; Teams Rooms Pro needed; no admin setting is documented."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's notice MC1316231 states that a Teams Rooms Pro licence is needed to use this feature. Microsoft Learn documents Teams Rooms Pro as a licence for Teams Rooms systems, including Teams Rooms on Android. No separate price or meter for this feature is documented."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["teams","teams-rooms","teams-events","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 559602"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559602"
    kind: "roadmap"
  - title: "MC1316231: (Updated) Microsoft Teams: Front-of-room view control for Webinars and structured meetings in Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1316231"
    kind: "message-center"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Host or attend an event from a Microsoft Teams Room (MTR)"
    url: "https://support.microsoft.com/office/host-or-attend-an-event-from-a-microsoft-teams-room-mtr-d7ff15e0-6516-4ebc-ae03-a2bdf58a4478"
    kind: "docs"
videos: []
related: ["microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events","microsoft-teams-breakout-room-support-on-teams-rooms-on-android"]
controls:
  - governs: "Default front-of-room view for Teams Rooms on Android presenters"
    scope: "tenant"
    ui: null
    api: null
    note: "Presenters switch views from the room console, not from an admin policy. Existing Teams Rooms policies are described as unchanged in MC1316231."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-06-23T23:15:39"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item, based on MC1316231 (updated 22 September 2026), the Teams Rooms release notes and Microsoft's help page for hosting events from a Teams Room."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 44 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: cost rationale now covers only rooms already on Teams Rooms Pro, and the rollout-stages and device-maker-schedule claims are replaced with the release notes' wording on device delays."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 49 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 48
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "f18114b9b8f8a19354f6ebd2754a041e"
---

## What's changing

When a Teams Rooms on Android device is invited to a webinar or structured meeting as a presenter, its front-of-room display now defaults to the attendee view. In-room participants see the event as attendees would on their own devices and do not see presenter tools such as the green room or backstage controls, according to Microsoft's notice MC1316231.

Presenters keep full control from the Teams Rooms console, including managing green room and off-stage participants, and can switch the front-of-room display to presenter view without affecting attendees. Microsoft's help page describes the console buttons as **Switch to presenter view** and **Switch to attendee view**. In presenter view the room display also shows the **Manage screen** queue and a red square around the live feed that marks what attendees currently see.

Microsoft's notice says the feature is enabled by default and requires no configuration, and that remote attendees are not affected. The Teams Rooms release notes list it under the Teams Rooms on Android update 1449/1.0.96.2026129709 (June 2026). The release notes also say there can be a delay between Microsoft releasing a feature and it reaching a given device make and model.

The roadmap record gives the status as Rolling out with a target of June CY2026 (General Availability, Worldwide, GCC, GCC High and DoD, Android). MC1316231, last updated 22 September 2026, says rollout began in mid-June 2026 and is expected to complete by the end of October 2026 for all four clouds. Its end date is 30 November 2026 and it sets no act-by date.

## Why it matters

This is a default that changes without anyone choosing it. Rooms that already host webinars or structured meetings as a presenter will show the attendee view on the room display, so presenters who relied on seeing the Manage screen queue on the room display will need to switch views from the console. Microsoft's help page also suggests that if presenters and attendees share a room, attendee view hides the presenter controls on the front display.

No source says any existing Teams Rooms policy changes, so the effort is communication and support readiness: telling organisers and presenters where the switch is, and checking that rooms are on a build that includes the feature. Because the feature needs Teams Rooms Pro, rooms on other licences are the place to check first.

## Risk assessment

**Data exposure**
- Attendee view keeps presenter tools such as the green room and backstage controls off the room display, per MC1316231. Switching the room to presenter view puts the **Manage screen** queue back on the front-of-room display, where everyone in the room can see it. Brief presenters to switch back to attendee view when the room audience includes attendees.

**Security & identity**
- MC1316231 says existing Teams Rooms functionality and policies remain unchanged and lists no compliance considerations.

**Autonomy & actions**
- No autonomous action is described. Presenters decide from the console when to bring presenters on or off screen and when to change the room view.

**Change & support**
- Expect questions from presenters who find the room display no longer shows presenter controls. The console is where the view is switched.
- There can be a delay between Microsoft's feature release and availability on a device make and model, so some rooms may behave differently for a while.

## Cost and licensing

Microsoft's notice MC1316231 states that a Teams Rooms Pro licence is needed to use this feature. Microsoft Learn's licensing page lists a Teams Rooms on Android device and touch console among the Teams Rooms systems that take a Teams Rooms Basic or Pro licence, and says Pro licences can be purchased through the Microsoft 365 admin center or a preferred sales channel.

No separate meter, price or credit rate for this feature is documented at the time of writing (November 2026). Indirect cost is admin and communication time, and a Teams Rooms Pro licence for any Android room that is not yet on one.

## Scope

**Who and what:** Teams Rooms on Android devices invited to a webinar or structured meeting as a presenter, and the organisers, presenters and in-room participants of those events. Microsoft's notice says remote attendees see no change.

**Licence:** Teams Rooms Pro, per MC1316231.

**Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android, as General Availability.

**Rollout:** Rolling out, targeted June CY2026 on the roadmap. MC1316231 gives mid-June to end of October 2026, and the release notes place it in the June 2026 Teams Rooms on Android update. Devices need to be on a build that includes it.

## Governance guidance

### Before rollout
- Confirm from your licence records which Teams Rooms on Android devices hold a Teams Rooms Pro licence, since MC1316231 says Pro is needed to use the feature.
- Check that Teams Rooms on Android devices are updated, as MC1316231 advises, and ask your device makers when the June 2026 update reaches your models.
- Identify the rooms that host webinars or structured meetings with the room as a presenter.

### At rollout
- Tell organisers and presenters that the room display starts in attendee view and that **Switch to presenter view** on the console changes the front-of-room display.
- Test a webinar or structured meeting in a pilot room and confirm the displays and console behave as the notice describes.
- Update internal room guides to say presenters switch back to attendee view when attendees are in the room.

### After rollout
- Collect support feedback from presenters in the first weeks and record rooms that still show the earlier behaviour.
- Watch Message center for further updates to MC1316231, which has already moved its timeline once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default front-of-room view for Teams Rooms on Android presenters</strong><br><small>Tenant</small><br><small class="controls__note">Presenters switch views from the room console, not from an admin policy. Existing Teams Rooms policies are described as unchanged in MC1316231.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting that changes the default front-of-room view, so the table records that gap. Microsoft's notice says the feature is enabled by default and requires no configuration.

The view control that is documented belongs to the presenter: the **Switch to presenter view** and **Switch to attendee view** buttons on the Teams Rooms console. It is not an administrator policy. Who is added to an event as a presenter is chosen by the event organiser when the room is added to the event.

## Open questions

- Is any admin setting, policy or device configuration planned to change the default front-of-room view? Watch Message center and the Teams Rooms release notes.
- Rollout was expected to complete by the end of October 2026 per MC1316231 while the roadmap still shows Rolling out: which Teams Rooms on Android build, per device maker, carries the feature?
- What do Teams Rooms on Android devices without a Teams Rooms Pro licence show in webinars and structured meetings? Check the Learn release notes and Message center.
- Does the same default apply to other event types the room joins as a presenter? Confirm on the Learn release notes.

<!-- rationale
risk: Low. The change hides presenter tools from the in-room audience by default and Microsoft's notice says existing Teams Rooms policies are unchanged; the remaining exposure is a presenter switching the room display to presenter view.
cost: Low. For Android rooms already licensed with Teams Rooms Pro, the cost is admin and communication time; no separate meter is documented.
impact: Medium. Presenters and in-room audiences in Teams Rooms on Android see a different default display during webinars and structured meetings; remote attendees are not affected, according to Microsoft's notice.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The rollout checklist names presenter view-switch controls without a corresponding control row. | Found: Switch to presenter view on the console changes the front-of-room display. ... Update internal room guides to say presenters switch back to attendee view ... Default front-of-room view for Teams Rooms on Android presenters | Not yet documented | Not yet documented | Fix: In Governance guidance: At rollout, replace the first bullet with 'Tell organisers and presenters about the updated room-display experience.' Remove the bullet instructing internal room guides to say presenters switch back to attendee view. These steps name presenter-console controls with no table row.
-->
