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
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 41
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "fe459ae3612a028246d51628a78134ba"
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
- The rollout is staged and device makers release updates on their own schedule, so some rooms may behave differently for a while.

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
cost: Low. Microsoft's notice MC1316231 says a Teams Rooms Pro licence is needed to use the feature, and no separate meter is documented; the cost is admin and communication time, plus a Pro licence for any Android room that lacks one.
impact: Medium. Presenters and in-room audiences in Teams Rooms on Android see a different default display during webinars and structured meetings; remote attendees are not affected, according to Microsoft's notice.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The low cost rating represents indirect cost only, but its rationale also includes purchasing Pro licences. | Found: cost: "low" Low. Microsoft's notice MC1316231 says a Teams Rooms Pro licence is needed to use the feature, and no separate meter is documented; the cost is admin and communication time, plus a Pro licence for any Android room that lacks one. | Fix: Keep cost low only for rooms already licensed with Pro. Replace its rationale with: 'Low. For Android rooms already licensed with Teams Rooms Pro, the cost is admin and communication time; no separate meter is documented.' Keep the body warning that rooms without Pro need that licence.
- [unsupported, major] Risk assessment: Change & support / behaviour: The feature rollout is staged. | Found: Searched: Teams Rooms Android device manufacturers updates own schedule staged rollout; Teams Android devices updates staged rollout manufacturers release schedule firmware. Read MC1316231 and rooms-release-note; they give a rollout window and device delays, not feature rollout stages. | Fix: Remove 'The rollout is staged and' from this bullet. Microsoft gives a rollout window but does not describe stages for this feature.
- [unsupported, major] Risk assessment: Change & support / behaviour: Device makers release updates on their own schedule. | Found: Searched: Teams Android devices updates staged rollout manufacturers release schedule firmware. Read rooms-release-note and android-version-support search excerpt; Microsoft documents device availability delays and OEM firmware certification, not independent OEM release schedules. | Fix: Replace the device-maker scheduling assertion with: 'There can be a delay between Microsoft's feature release and availability on a device make and model, so some rooms may behave differently for a while.' Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note.
-->
