---
title: "Microsoft Teams Rooms on Android: breakout room support"
slug: "microsoft-teams-breakout-room-support-on-teams-rooms-on-android"
roadmapId: 569447
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Android devices will be assignable to breakout rooms by meeting organisers. Microsoft says it is on by default and no action is required; plan communication for organisers and room admins before December 2026."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says Teams Rooms devices managed by central IT should be assigned Teams Rooms Pro or Teams Rooms Basic licences. Breakout rooms is not in that page's Basic or Pro feature tables, and no separate licence or price for this feature is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","meeting-policy","powershell","user-experience","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 569447"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569447"
    kind: "roadmap"
  - title: "MC1488847: (Updated) Microsoft Teams: Breakout room support for Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1488847"
    kind: "message-center"
  - title: "Teams Device feature comparison (Windows, Android, & Panels)"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-devices-feature-comparison"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-call-quality-feedback-surveys-for-teams-rooms-on-android","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management"]
controls:
  - governs: "Whether meeting organisers can use breakout rooms"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowBreakoutRooms $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Default is True. Learn describes it for breakout rooms in general; its effect on Teams Rooms on Android is not described."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-19"
    note: "New briefing: breakout room support for Teams Rooms on Android, with the December 2026 target and the AllowBreakoutRooms meeting policy parameter."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 45 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 45
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1a090dc6063ac165e3d4dd560ae48f37"
---

## What's changing

Microsoft plans to let meeting organisers assign Microsoft Teams Rooms on Android devices to breakout rooms and move them between breakout rooms and the main meeting room. The roadmap item describes this as the device being added to a breakout room and moved in and out of the main room to ease breakout session coordination.

Microsoft's notice MC1488847 says the feature is available by default when rollout is complete, that no action is required, and that it brings Teams Rooms on Android closer to feature parity with Teams Rooms on Windows. Microsoft Learn's Teams device feature comparison currently lists 'Participate in breakout rooms' as Available on Windows and Not available on Android (Commercial tab), which is the gap this item closes. Microsoft Learn has no page describing the new behaviour itself, so what follows about how it works is the roadmap's and the notice's description.

The roadmap record shows the item as In development, with a target of December CY2026, for Worldwide (Standard Multi-Tenant) and GCC, on Android. MC1488847 was updated on 2 November 2026 with a later timeline: general availability (Worldwide) beginning in early December 2026 (previously mid-November) and expected to be complete by mid-December 2026 (previously late November). The notice gives no GCC schedule. Dates are Microsoft's targets, not commitments.

## Why it matters

Organisers who run breakout sessions in rooms equipped with Teams Rooms on Android devices gain a way to include the room device in those sessions. Because Microsoft says the capability is on by default, organisers will find it without any admin step, so the first questions will go to room administrators and the helpdesk.

The wiki's view: the change is low risk and low cost, but it changes what a room device does in a meeting. Brief organisers and room admins before the December 2026 target, as Microsoft's notice recommends, and test one room first so support staff know what a room looks like when it is moved between sessions.

## Risk assessment

**Data exposure**
- No new data source is named in the roadmap item or MC1488847. A room device in a breakout room joins that session rather than the main meeting, so confirm in a pilot what the room's microphones, cameras and shared content reach after an organiser moves it.

**Security & identity**
- No change to sign-in or licensing is announced. The device keeps the Teams Rooms Basic or Pro licence it already has; see the controls table for the meeting policy parameter that governs breakout rooms in general.

**Autonomy & actions**
- Organisers move the device, as MC1488847 describes: 'moved between breakout rooms and the main meeting room by meeting organizers'. The notice does not describe any automatic action by the device itself.

**Change & support**
- Room users may be surprised when an organiser moves a shared room device out of the main meeting. Update room guidance and training material that mentions breakout rooms, as Microsoft's notice recommends.
- The rollout window moved from November to December 2026, so check the Message center post again before announcing dates to users.

## Cost and licensing

Microsoft's notice MC1488847 and the roadmap record name no licence, meter or charge for this feature. Learn's Teams Rooms licensing page says Teams Rooms devices managed by central IT should be assigned Teams Rooms Pro or Teams Rooms Basic licences (plus calling or security licences where needed), and lists a Teams Rooms on Android device as a Teams Rooms system. The page's Basic and Pro feature tables do not list breakout rooms, and no licence specific to this feature is published at the time of writing (November 2026).

The costs that are known are indirect: admin time for a pilot and communication to organisers and room administrators.

## Scope

The roadmap item targets Teams Rooms on Android devices, in Worldwide (Standard Multi-Tenant) and GCC, with release phase General Availability. MC1488847 lists the affected parties as organisations using Teams Rooms on Android and meeting organisers who use breakout rooms, and gives a Worldwide rollout schedule only.

Learn's feature comparison lists breakout room participation as Not available for Android today, so Teams Rooms on Windows is the reference point for behaviour. No prerequisite, minimum app version or role is published for the Android feature at the time of writing (November 2026).

## Governance guidance

### Before rollout
- Tell meeting organisers and room administrators about the capability, as MC1488847 recommends.
- Find the meeting policy assigned to your regular organisers and check whether AllowBreakoutRooms is set to its default of True or has been turned off.
- Update internal documentation and training that describe breakout rooms for Teams Rooms devices.

### At rollout
- Test one Teams Rooms on Android device in a breakout session run by a pilot organiser before you announce it widely.
- Watch the Message center post MC1488847 for further timeline changes during December 2026.

### After rollout
- Collect organiser and room-user feedback on moving room devices between sessions and raise confirmed issues with Microsoft support.
- Re-read Microsoft's Teams device feature comparison to confirm Android now lists breakout room participation as Available.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether meeting organisers can use breakout rooms</strong><br><small>User</small><br><small class="controls__note">Default is True. Learn describes it for breakout rooms in general; its effect on Teams Rooms on Android is not described.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowBreakoutRooms $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented control is the AllowBreakoutRooms parameter of the Teams meeting policy, set with PowerShell. Learn's settings and policies reference lists it under 'PowerShell-only audio & video meeting policies', so no Teams admin center setting is documented for it at the time of writing (November 2026). Learn's description of it covers breakout rooms in general; whether it also governs participation by Teams Rooms on Android devices is not described.

## Open questions

- Does the AllowBreakoutRooms meeting policy parameter govern whether Teams Rooms on Android devices can be assigned to breakout rooms? Watch the Set-CsTeamsMeetingPolicy reference and MC1488847.
- Is there a setting in the Teams admin center or on the device to turn this capability off for Teams Rooms on Android alone? Watch the Teams Rooms on Android admin documentation.
- Does the capability need a particular Teams Rooms on Android app version or a Teams Rooms Pro licence rather than Basic? Watch the Teams Rooms licensing page.
- When will GCC tenants get it? The roadmap lists GCC, but MC1488847 gives a Worldwide schedule only.

<!-- rationale
risk: Low. The change extends an existing Teams meeting feature to Teams Rooms on Android; the existing AllowBreakoutRooms meeting policy parameter is the documented control for breakout rooms in general.
cost: Low. Microsoft's notice and Learn name no new licence or meter for this feature; the known cost is admin time and organiser communication. The Teams Rooms Basic or Pro licence each device already needs still applies.
impact: Medium. Meeting organisers who use breakout rooms and the people in rooms with Teams Rooms on Android devices notice it; Microsoft says the feature is on by default when rollout completes.
-->
