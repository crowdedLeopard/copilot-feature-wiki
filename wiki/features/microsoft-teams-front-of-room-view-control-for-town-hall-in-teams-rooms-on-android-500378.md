---
title: "Microsoft Teams Rooms on Android: Town Hall front-of-room view control (Worldwide)"
slug: "microsoft-teams-front-of-room-view-control-for-town-hall-in-teams-rooms-on-android-500378"
roadmapId: 500378
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Launched in Worldwide: a Teams Rooms on Android invited as a Town Hall presenter shows the attendee view on the room display, and presenters can switch it to presenter view. Needs Teams Rooms Pro; no admin step is described."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item says the feature is available in Teams Rooms Pro, and the Teams Rooms on Android release notes say features marked with the Pro icon are only available with the Teams Rooms Pro licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","teams-events"]
sources:
  - title: "Microsoft 365 Roadmap 500378"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500378"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 562534"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562534"
    kind: "roadmap"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Teams Device feature comparison (Windows, Android, & Panels)"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-devices-feature-comparison"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy"
    kind: "learn"
  - title: "Host or attend an event from a Microsoft Teams Room (MTR)"
    url: "https://support.microsoft.com/office/host-or-attend-an-event-from-a-microsoft-teams-room-mtr-d7ff15e0-6516-4ebc-ae03-a2bdf58a4478"
    kind: "docs"
videos: []
related: ["microsoft-teams-front-of-room-view-control-for-webinars-and-structured-meetings-in-teams-r","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-ability-to-separate-out-the-townhall-attendee-invites"]
controls:
  - governs: "Whether organisers can create events optimised for large audiences, such as Town Halls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy"
    note: "Existing control for creating Town Halls; it does not set the front-of-room view. Changing it to Off after an event is scheduled stops the user running or starting the event. The cmdlet reference describes the policy as still in preview."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-22"
    note: "First briefing for this Worldwide item: Town Hall front-of-room view control on Teams Rooms on Android, Teams Rooms Pro only."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: removed the claim that the events policy is the only related admin control, split the Pro licence from indirect costs, added the cmdlet's preview note, set action to prepare and removed two checklist steps with no controls row."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: the Data exposure bullet now says what presenter view shows on the room display, and the open question about its contents is removed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 53 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "aa6bebc9ec97ef69b8f898e7a12f9e0d"
---

## What's changing

When a Teams Rooms on Android device is invited to a Town Hall as a presenter, its front-of-room display defaults to the attendee view. Presenters always have full control from the console, including green room and off-stage management, and can switch the front-of-room display to presenter view without impacting attendees.

The Teams Rooms release notes list the feature as "Front-of-room view control for Teams Town Hall", introduced in build 1449/1.0.96.2025421910 (February 2026) and marked as available only with Teams Rooms Pro. The roadmap record gives a target of December CY2025, and the status is Launched, with release phases General Availability and Targeted Release. This item lists the Worldwide (Standard Multi-Tenant) cloud and the Android platform. The device feature comparison page lists Town Hall presenter and attendee support as Available on Teams Rooms on Android.

Microsoft lists the same feature under a second roadmap item, 562534, which covers GCC High and DoD, lists the platforms Android and Teams and Surface Devices, has a target of August CY2026 and also shows Launched. It has its own briefing.

The roadmap description also notes that an earlier listing wrongly said the feature applied to webinars. It says the webinar experience was still in development and would be released later in 2026. The release notes, by contrast, list a separate webinar and structured meeting version of the feature under a June 2026 build; see the related briefing.

## Why it matters

For service owners, this is a change to what a room's large display shows when a room is used as a Town Hall presenter. Because the display starts in the attendee view, the people in the room see what attendees see until a presenter chooses otherwise from the console. The roadmap item and release notes describe no admin step, so the practical work is communication: tell presenters and event organisers how the room behaves.

Because the default state is on for rooms that meet the licence and invitation conditions, expect it to appear without anyone enabling it. Rooms that are not on Teams Rooms Pro are the main gap to plan for, since the release notes mark this feature as Pro-only.

## Risk assessment

**Data exposure**
- Switching the front-of-room display to presenter view is a presenter's choice from the console, and anyone in the physical room can see the display. Microsoft's support page says presenter view also shows the Manage screen queue and a red square around the live feed that marks what attendees are currently seeing, and advises switching to Attendee view to hide the presenter controls where presenters and attendees are in the same room.

**Security & identity**
- The roadmap item ties this behaviour to a room being invited as a meeting presenter. Review which rooms organisers add as presenters, since that invitation is what puts a room's display into this behaviour.

**Autonomy & actions**
- No autonomous action: the roadmap item describes the presenter switching the display from the console, and the display otherwise stays on the attendee view.

**Change & support**
- Expect help-desk questions about why a room shows the attendee view; the documented answer is that this is the default and presenters switch from the console.
- The release notes warn there can be a delay between a Microsoft release and availability on a given device make and model, so a room may lack the feature after others have it.
- Rooms assigned a licence that does not include the feature cannot use it, per the Teams Rooms licences page.

## Cost and licensing

**Licence.** The roadmap item says the feature is available in Teams Rooms Pro. The Teams Rooms on Android release notes state that features marked with the Pro icon are only available with the Teams Rooms Pro licence, and this feature carries that icon in the release notes. The Teams Rooms licences page says that to use a feature on a Teams Rooms device, you assign the licence in which that feature is available to that device. It describes Teams Rooms Basic as providing core meeting experiences at no additional cost.

**Meter and cost.** Neither the roadmap item nor the release notes name a meter for this feature. The indirect cost is admin time to brief presenters. A room without Teams Rooms Pro needs that licence to use this feature.

A Teams Rooms on Android device and touch console counts as a Teams Rooms system on the licences page.

## Scope

**Who and what.** Teams Rooms on Android devices that are invited as a Town Hall presenter and are assigned a Teams Rooms Pro licence. The device feature comparison lists Town Hall presenter and attendee support as Available on Teams Rooms on Android.

**Clouds and platform.** The record lists Worldwide (Standard Multi-Tenant) and Android. GCC High and DoD are listed under roadmap item 562534, not this one.

**Rollout.** Status is Launched, with General Availability and Targeted Release phases and a December CY2025 target. The release notes list the feature under the February 2026 build and note that features can reach a given device make and model later than Microsoft's release.

**Out of scope.** Webinars and structured meetings are a separate feature entry, covered in the related briefing.

## Governance guidance

### Before rollout
- Ask your device manufacturers whether the Teams Rooms on Android build that includes this feature is available for your make and model.
- Check that the events policy for your organisers has the Events optimized for a large audience setting On, because that setting controls whether users with the policy can create Town Halls.

### At rollout
- Brief Town Hall organisers that a room invited as a presenter shows the attendee view on its display by default.

### After rollout
- Run a test Town Hall with a Teams Rooms on Android presenter and confirm the default view and the switch work as the release notes describe.
- Watch the Teams Rooms release notes and Message center for changes to this behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether organisers can create events optimised for large audiences, such as Town Halls</strong><br><small>User</small><br><small class="controls__note">Existing control for creating Town Halls; it does not set the front-of-room view. Changing it to Off after an event is scheduled stops the user running or starting the event. The cmdlet reference describes the policy as still in preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The existing events policy setting decides whether organisers can create Town Halls. It does not set the front-of-room view. The events page states that if the value is changed to Off after a user schedules an event, they cannot run or start the event.

The release notes describe the view switch as a presenter action from the console. Licence assignment decides whether a room can use the feature at all.

## Open questions

- Can administrators choose the default front-of-room view per device or policy? The release notes describe the attendee-view default and the presenter's switch, and name no setting.
- What does the release notes' resolved-issues line that Town Hall presenter support and front-of-room view control "are available with direct console connection" mean for rooms connected another way?
- The roadmap item says the webinar experience was due later in 2026, while the release notes list a webinar and structured meeting version under a June 2026 build. Which is current? See the related webinar briefing.

<!-- rationale
risk: Low. It changes which view a room's front-of-room display shows during a Town Hall, and presenters switch views from the console; it is a room-display behaviour, not a new data connection or action.
cost: Low. The roadmap item says it is available in Teams Rooms Pro, so a room on another licence would need Pro; for rooms already on Pro the cost is admin time to brief presenters.
impact: Low. Only Teams Rooms on Android devices invited as Town Hall presenters, and the people presenting from them, notice it; the roadmap item says the switch does not impact attendees.
-->
