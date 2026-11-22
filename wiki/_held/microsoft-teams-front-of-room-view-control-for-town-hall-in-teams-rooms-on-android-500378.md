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
action: "none"
licensing:
  model: "included"
  notes: "The roadmap item says the feature is available in Teams Rooms Pro, and the Teams Rooms on Android release notes say features marked with the Pro icon are only available with the Teams Rooms Pro licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","teams-events"]
sources:
  - title: "Microsoft 365 Roadmap 500378"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500378"
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
    note: "Existing control for creating Town Halls; it does not set the front-of-room view. Changing it to Off after an event is scheduled stops the user running or starting the event."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-22"
    note: "First briefing for this Worldwide item: Town Hall front-of-room view control on Teams Rooms on Android, Teams Rooms Pro only."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 44
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "1d79fc7b39f3a0664d82e4b93d0e319f"
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
- Switching the front-of-room display to presenter view is a presenter's choice from the console, and anyone in the physical room can see the display. Confirm what presenter view shows in your rooms before the first Town Hall, because the sources do not describe its contents.

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

**Meter and cost.** Neither the roadmap item nor the release notes name a meter for this feature. The indirect cost is admin time to brief presenters and, for any room not on Pro, the Teams Rooms Pro licence.

A Teams Rooms on Android device and touch console counts as a Teams Rooms system on the licences page.

## Scope

**Who and what.** Teams Rooms on Android devices that are invited as a Town Hall presenter and are assigned a Teams Rooms Pro licence. The device feature comparison lists Town Hall presenter and attendee support as Available on Teams Rooms on Android.

**Clouds and platform.** The record lists Worldwide (Standard Multi-Tenant) and Android. GCC High and DoD are listed under roadmap item 562534, not this one.

**Rollout.** Status is Launched, with General Availability and Targeted Release phases and a December CY2025 target. The release notes list the feature under the February 2026 build and note that features can reach a given device make and model later than Microsoft's release.

**Out of scope.** Webinars and structured meetings are a separate feature entry, covered in the related briefing.

## Governance guidance

### Before rollout
- Identify which Teams Rooms on Android devices hold a Teams Rooms Pro licence, since the roadmap item says the feature is available in Teams Rooms Pro.
- Ask your device manufacturers whether the Teams Rooms on Android build that includes this feature is available for your make and model.
- Check that the events policy for your organisers has the Events optimized for a large audience setting On, because that setting controls whether users with the policy can create Town Halls.

### At rollout
- Brief Town Hall organisers that a room invited as a presenter shows the attendee view on its display by default.
- Show room presenters where the console lets them switch the front-of-room display to presenter view.

### After rollout
- Run a test Town Hall with a Teams Rooms on Android presenter and confirm the default view and the switch work as the release notes describe.
- Watch the Teams Rooms release notes and Message center for changes to this behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether organisers can create events optimised for large audiences, such as Town Halls</strong><br><small>User</small><br><small class="controls__note">Existing control for creating Town Halls; it does not set the front-of-room view. Changing it to Off after an event is scheduled stops the user running or starting the event.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only admin control the sources tie to this scenario is the existing events policy setting that decides whether organisers can create Town Halls. It does not set the front-of-room view. The events page states that if the value is changed to Off after a user schedules an event, they cannot run or start the event.

The release notes describe the view switch as a presenter action from the console. Licence assignment decides whether a room can use the feature at all.

## Open questions

- Can administrators choose the default front-of-room view per device or policy? The release notes describe the attendee-view default and the presenter's switch, and name no setting.
- What does presenter view show on the front-of-room display, and who in the room can see it? Watch the Teams Rooms release notes.
- What does the release notes' resolved-issues line that Town Hall presenter support and front-of-room view control "are available with direct console connection" mean for rooms connected another way?
- The roadmap item says the webinar experience was due later in 2026, while the release notes list a webinar and structured meeting version under a June 2026 build. Which is current? See the related webinar briefing.

<!-- rationale
risk: Low. It changes which view a room's front-of-room display shows during a Town Hall, and presenters switch views from the console; it is a room-display behaviour, not a new data connection or action.
cost: Low. The roadmap item says it is available in Teams Rooms Pro, so a room on another licence would need Pro; for rooms already on Pro the cost is admin time to brief presenters.
impact: Low. Only Teams Rooms on Android devices invited as Town Hall presenters, and the people presenting from them, notice it; the roadmap item says the switch does not impact attendees.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: first sentence / applicability: The existing event-creation setting is the only admin control the sources tie to this scenario. | Found: **Who can attend events optimized for a large audience**(Everyone,Everyone in my organization excluding guests,Everyone in my organization including guests) / Controls who can attend events optimized for large audiences (such as town halls) created by organizers with this policy. | Fix: Replace the first sentence with: 'The existing events policy setting decides whether organisers can create Town Halls.' Keep the following sentence, 'It does not set the front-of-room view.' The cited page also documents attendance controls, so remove the exclusive claim without adding controls or coverage. | Source: https://learn.microsoft.com/microsoftteams/set-up-events
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: second roadmap item / record: Roadmap item 562534 lists the same Town Hall front-of-room view capability. | Found: "id": 562534, "title": "Microsoft Teams: Front-of-room view control for Town Hall in Teams Rooms on Android" | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=562534 to sources as 'Microsoft 365 Roadmap 562534', kind 'roadmap', for the second item's description, clouds, platforms, target and status.
- [supported, minor] controls[0].api / command: Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled disables large-audience event creation for that policy. | Found: ### -AllowTownhalls This setting governs if a user can create an event optimized for large audiences using Teams Events. / **Disabled**: Disables the **Optimize for Large Audience** option for organizers scheduling an event. / -Identity: Unique identifier assigned to the Teams Events policy. | Fix: Keep the call unchanged. Add to controls[0].note: 'The Set-CsTeamsEventsPolicy reference currently describes the policy as still in preview.' The cmdlet reference states this, although the cited events management page describes the setting without a preview caveat. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy
- [supported, minor] Cost and licensing: Meter and cost; rationale: cost / cost: Rooms without Pro need the Pro licence to use this feature, but the paragraph groups that licence with indirect costs. | Found: Features with ![](../media/mtr-pro-icon.png) are only available with Teams Rooms Pro license. | Fix: Replace 'The indirect cost is admin time to brief presenters and, for any room not on Pro, the Teams Rooms Pro licence.' with 'The indirect cost is admin time to brief presenters. A room without Teams Rooms Pro needs that licence to use this feature.' Keep the low rating as the incremental communication cost for already licensed rooms. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note
- [contradicted, minor] front matter: action; Why it matters; Governance guidance / consistency: Action none fits a launched change that the briefing says requires presenter communication and checking organiser policies. | Found: action: "none" / "the practical work is communication: tell presenters and event organisers how the room behaves" / "Check that the events policy for your organisers has the Events optimized for a large audience setting On" | Fix: Change action from 'none' to 'prepare': the standard uses prepare for an arriving low-risk, low-cost change requiring communication, and reserves none for awareness with nothing to configure or decide.
- [contradicted, minor] Governance guidance: Before rollout and At rollout; controls / consistency: Every control the governance checklist asks readers to take stock of or demonstrate appears in the controls table. | Found: Identify which Teams Rooms on Android devices hold a Teams Rooms Pro licence / Show room presenters where the console lets them switch the front-of-room display to presenter view / controls: only the event-creation policy row | Fix: The licence-inventory step and console view-switch step have no corresponding controls rows. Remove those two checklist bullets; retain the supported licensing explanation and console-switch description elsewhere. Do not add rows during this correction.
-->
