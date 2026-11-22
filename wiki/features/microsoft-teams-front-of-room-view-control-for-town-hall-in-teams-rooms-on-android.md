---
title: "Microsoft Teams Rooms on Android: front-of-room display defaults to attendee view in Town Hall (GCC High and DoD)"
slug: "microsoft-teams-front-of-room-view-control-for-town-hall-in-teams-rooms-on-android"
roadmapId: 562534
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Android invited to a Town Hall as a presenter show the attendee view on the room display by default. This item covers GCC High and DoD; Teams Rooms Pro is needed; no admin setting for the view is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Android","Teams and Surface Devices"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn's release notes say features marked with the Teams Rooms Pro icon are only available with a Teams Rooms Pro licence, and this feature carries that icon. No separate price or meter for this feature is documented at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["teams","teams-rooms","teams-events","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 562534"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562534"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 500378"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500378"
    kind: "roadmap"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-front-of-room-view-control-for-webinars-and-structured-meetings-in-teams-r","microsoft-teams-ability-to-separate-out-the-townhall-attendee-invites","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events"]
controls:
  - governs: "Default front-of-room view for Teams Rooms on Android presenters in Town Hall"
    scope: "tenant"
    ui: null
    api: null
    note: "Presenters switch the view from the room console, per the roadmap description. No admin policy for the default view is documented."
  - governs: "Which users can create events optimized for large audiences, such as Town Halls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Decides who can create Town Halls under the policy. It does not control the front-of-room view of rooms that present in them. The Set-CsTeamsEventsPolicy reference still labels this policy as preview."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: the GCC High and DoD listing of front-of-room view control for Town Hall in Teams Rooms on Android."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the cost basis: the Teams Rooms Pro licence is a prerequisite, and the indirect cost is communication time. Added the preview label on the events policy cmdlet and the 500378 roadmap source."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 49 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 49
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cd2038595b84497d31af910d5b328c55"
---

## What's changing

When a Teams Rooms on Android device is invited to a Town Hall as a presenter, its front-of-room display defaults to the attendee view. The roadmap description and the Teams Rooms release notes both say that presenters keep full control from the console, including green room and off-stage management, and can switch the front-of-room display to presenter view without impacting attendees.

Microsoft lists this feature under two roadmap ids. This item, 562534, covers GCC High and DoD, with a target of August CY2026 and a status of Launched. The other item, 500378, covers Worldwide (Standard Multi-Tenant), with a target of December CY2025 and a status of Launched. Its description adds a note that an earlier listing wrongly said the feature applied to webinars as well, and that the webinar experience was still in development. The webinar and structured meeting version has its own briefing: [front-of-room view control for webinars and structured meetings](/features/microsoft-teams-front-of-room-view-control-for-webinars-and-structured-meetings-in-teams-r/).

The Teams Rooms release notes list the feature as introduced in Teams Rooms on Android update 1449/1.0.96.2025421910 (February 2026). The April 2026 update 1449/1.0.96.2026087210 lists, under resolved issues, that presenter support for Teams Town Hall and front-of-room view control for Teams Town Hall are available with direct console connection. The release notes also say there can be a delay between Microsoft releasing a feature and it reaching a given device make and model. The roadmap record gives no preview date and lists General Availability on Android and on Teams and Surface Devices.

## Why it matters

This is a default that changes without an administrator choosing it. Rooms that join a Town Hall as a presenter start on the attendee view, so presenters who expect to see presenter-side screens on the room display will need to switch views from the console. The source pages do not describe an administrator setting for this, so the work is communication and support readiness, not configuration.

Because the release notes tie the feature to Teams Rooms Pro, the first check in a GCC High or DoD tenant is which Android rooms hold that licence and which firmware build each device maker has released for them. A pilot Town Hall in one room is the quickest way to confirm what presenters will see.

## Risk assessment

**Data exposure**
- The attendee view is the default on the room display. A presenter who switches the front-of-room display to presenter view changes what everyone in the room sees; the roadmap description says this happens without impacting attendees. Brief presenters on when to switch.

**Security & identity**
- No change to identity or permissions is described in the roadmap description or the release notes. The Teams events policy decides who can create Town Halls, and its row in the controls table is an existing control, not one for this view.

**Autonomy & actions**
- No autonomous action is described. The roadmap description says presenters always have full control from the console.

**Change & support**
- Expect questions from presenters who find the room display in attendee view. The console is where the view is switched, per the roadmap description.
- The release notes say there can be a delay between a Microsoft release and availability on a device make and model, so rooms of different makes can behave differently for a while.

## Cost and licensing

The release notes for Microsoft Teams Rooms say that features marked with the Teams Rooms Pro icon are only available with a Teams Rooms Pro licence, and this feature is marked that way. The roadmap description also says it is available in Teams Rooms Pro. Microsoft Learn's licensing page lists Teams Rooms Pro as available in the GCC, GCC-High and DoD segments, and says Pro licences can be purchased through the Microsoft 365 admin center or a preferred sales channel.

The licensing page lists no price, and no separate meter or charge for this feature is documented at the time of writing (November 2026). Communication time is an indirect cost. An Android room without Teams Rooms Pro needs that licence to use this feature.

## Scope

**Who and what:** Teams Rooms on Android devices invited to a Town Hall as a presenter, and the organisers, presenters and in-room participants of that Town Hall.

**Licence:** Teams Rooms Pro, per the release notes and the roadmap description.

**Clouds and platform:** this roadmap item lists GCC High and DoD, with General Availability on Android and on Teams and Surface Devices. Worldwide (Standard Multi-Tenant) is listed on the separate item 500378.

**Rollout:** the record gives Launched with a target of August CY2026. The release notes place the feature in the February 2026 Teams Rooms on Android update and carry a note on delays between Microsoft's release and a given device make and model. Devices need a build that includes the feature.

## Governance guidance

### Before rollout
- Confirm from your licence records which Teams Rooms on Android devices hold a Teams Rooms Pro licence, since the release notes make the feature available only with that licence.
- Ask each device maker which firmware build your GCC High or DoD rooms run and whether it includes Teams Rooms on Android update 1449/1.0.96.2025421910 or later.
- Identify the rooms that are likely to be invited to Town Halls as presenters, and who organises those events.

### At rollout
- Tell organisers and presenters that the room display starts in the attendee view and that the console is where the room is switched to presenter view.
- Run a test Town Hall in a pilot room and confirm what the room display and the console show.
- Review who can create Town Halls under the Teams events policy, using the Teams events policy row in the controls table; that setting does not change the room view.

### After rollout
- Collect support feedback from presenters in the first weeks and record rooms whose behaviour differs by device make.
- Watch the Teams Rooms release notes for changes to this feature or for an admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default front-of-room view for Teams Rooms on Android presenters in Town Hall</strong><br><small>Tenant</small><br><small class="controls__note">Presenters switch the view from the room console, per the roadmap description. No admin policy for the default view is documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can create events optimized for large audiences, such as Town Halls</strong><br><small>User</small><br><small class="controls__note">Decides who can create Town Halls under the policy. It does not control the front-of-room view of rooms that present in them. The Set-CsTeamsEventsPolicy reference still labels this policy as preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no administrator setting for the default front-of-room view at the time of writing (November 2026), so the first row records that gap on both surfaces. The view is described as something presenters switch from the console, not as a policy.

The Teams events policy row is an existing control that decides which users can create events optimized for large audiences, such as Town Halls. Its own page says that if the value is changed to Off after a user schedules an event, they cannot run or start the event. It governs event creation, not the room view, and does not change what a room displays.

## Open questions

- Is any admin setting or device configuration planned to change the default front-of-room view? Watch the Teams Rooms release notes and Message center.
- What does direct console connection, named in the April 2026 release notes for this feature, require of a room? Check the Teams Rooms release notes.
- Which firmware builds from device makers carry the feature in GCC High and DoD? Ask the device maker and check the Teams Rooms on Android certified devices page.
- What does a room without a Teams Rooms Pro licence show when it joins a Town Hall as a presenter? Check the release notes and the Teams Rooms licences page.

<!-- rationale
risk: Low. The change only sets which view the room display starts in, and presenters keep full console control; the exposure that remains is a presenter switching the room display to presenter view in front of attendees.
cost: Low. The feature is included in Teams Rooms Pro; for rooms already licensed for Pro, the indirect cost is communication time. No separate meter is documented.
impact: Medium. Presenters and in-room audiences in Teams Rooms on Android devices that join a Town Hall as a presenter see a different default display; the page does not describe any change for remote attendees.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / record: The description of item 500378 says the webinar experience is still in development. | Found: That experience is still in development and will be released later in 2026. | Fix: After the sentence reporting item 500378's webinar-development note, add: 'The Teams Rooms release notes nevertheless list front-of-room view control for webinars and structured meetings as introduced in Android update 1449/1.0.96.2026129709 (June 2026).' Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note, which is already in sources.
-->
