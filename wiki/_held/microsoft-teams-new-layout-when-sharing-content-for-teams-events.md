---
title: "Microsoft Teams: new content-sharing layouts for Teams events"
slug: "microsoft-teams-new-layout-when-sharing-content-for-teams-events"
roadmapId: 564613
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Organisers and presenters with production tools in Teams events get three layouts, including Speaker focused, when sharing content. It needs an Enterprise licence; no admin setting is documented, so the work is communication."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item says organisers need a Teams Enterprise licence. The Teams events licensing overview lists Manage what attendees see under Advanced event features, which Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7 provide. No separate price is documented there."
audiences: ["m365-admin","change-adoption"]
tags: ["teams","teams-events","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: item 564613"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564613"
    kind: "roadmap"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Plan for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/plan-meetings"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events","microsoft-teams-preloaded-video-for-teams-events-and-meetings","microsoft-teams-new-sharing-panel-in-meetings-improved-content-discovery-and-ease-of-shari","meeting-policy"]
controls:
  - governs: "Which content-sharing layouts organisers can choose in Manage what attendees see"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting documented at the time of writing (November 2026). Organisers choose the layout in the event."
  - governs: "Whether users can create events with up to 1,000 attendees, such as webinars"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events up to 1k attendees"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowWebinars Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Blunt fallback: stops event creation and running scheduled events; it does not govern layouts."
  - governs: "Whether users can create events optimised for a large audience, such as town halls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Blunt fallback: stops event creation and running scheduled events; it does not govern layouts."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-23"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-22"
    note: "New briefing: launched layout options (Speaker focused, Content focused, Content only) for sharing content in Manage what attendees see in Teams events."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected two statements the check held: removed the claim that the roadmap states no prerequisite other than the licence, and reworded the licence as one lever rather than the one lever."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 41 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 39
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "5b58a0fcac606d0793f632449c434836"
---

## What's changing

Organisers and presenters who have access to production tools in Teams events see updated layout options when they share content in **Manage what attendees see**. The three layouts are Speaker focused, Content focused and Content only. The roadmap item says the new Speaker focused layout puts presenter video alongside the shared content so the presenter is easier to see.

The roadmap item says the feature is for organisers of Teams events who have a Teams Enterprise licence, and describes it as available on Teams for Windows desktop and Mac desktop. The record's platform list also names Android and iOS, so the two parts of the record differ on mobile. Microsoft Learn describes Manage what attendees see in events only as letting organisers decide who to spotlight, and no Learn page describes the three layouts at the time of writing (November 2026). What follows about their behaviour is therefore the roadmap's description.

The roadmap status is Launched, with a target of August CY2026 and release phases General Availability and Targeted Release. The record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. No Message Center post was supplied for this item.

## Why it matters

This reaches event organisers and presenters without an administrator switching anything on: the roadmap says they will see the updated layout options, and no source asks administrators to act. Microsoft Learn documents no admin setting for the layouts at the time of writing (November 2026), so the practical work is telling the people who run events what has changed.

Licensing is one lever an administrator holds. The roadmap ties the feature to a Teams Enterprise licence, so organisers on other licences should not expect to see it. Support teams should expect questions from organisers who run events on mobile, because the record and its description differ on platforms.

## Risk assessment

**Data exposure**
- The layouts decide what attendees see on screen. Speaker focused shows presenter video alongside shared content, while Content only shows the content; an organiser who picks the wrong one can show a presenter's camera that they meant to leave out. The roadmap describes no new data access and no change to who can attend.

**Security & identity**
- No change is described. The options appear only for organisers and presenters who have access to production tools, per the roadmap description.

**Autonomy & actions**
- No change is described. A person chooses the layout during the event; the roadmap mentions nothing that runs without one.

**Change & support**
- Organisers meet different layout choices in a screen they use during live events, so a rehearsal before a large event is the safest way to learn them.
- The record's platform list (Android, Desktop, iOS, Mac) and its description (Windows desktop and Mac desktop) differ, so organisers on mobile may not see the layouts. Confirm on the devices your organisers use.

## Cost and licensing

The roadmap item says organisers need a Teams Enterprise licence. The [Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing) says users must have a licence from the Advanced event features category to access the full set of Teams events features, and lists Manage what attendees see in the Advanced event features table. For Enterprise, that category covers Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7.

The same page says Teams Premium licences purchased after April 2026 don't directly provide access to these capabilities, so check organisers who hold only Teams Premium. The page lists no separate price or meter for Manage what attendees see. The indirect cost is administrator and support time to brief organisers and rehearse events.

## Scope

**Who:** organisers and presenters who have access to production tools in Teams events, per the roadmap description. The roadmap says organisers need a Teams Enterprise licence.

**Clouds (as the record lists them):** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

**Platforms:** the description says Teams for Windows desktop and Mac desktop; the record's platform list names Android, Desktop, iOS and Mac.

**Rollout:** status Launched, target August CY2026, release phases General Availability and Targeted Release.

## Governance guidance

### Before rollout
- Identify which event organisers hold an Office 365 E1, E3, E5 or Microsoft 365 E3, E5, E7 licence, because the Teams events licensing overview places Manage what attendees see in the Advanced event features category.
- Check which Events policies assign event creation to your organisers (see the controls table), so you know who is affected.
- Tell organisers and presenters with production tool access that the layout options in Manage what attendees see now include Speaker focused, Content focused and Content only.

### At rollout
- Rehearse an event with each of the three layouts on Windows desktop and Mac desktop before the next large event.
- Test on Android and iOS if your organisers produce events there, because the roadmap record and its description differ on mobile.
- Brief the helpdesk on the three layout names so they can answer questions from organisers.

### After rollout
- Collect feedback from organisers on which layout they use for content-heavy sessions.
- Watch the roadmap item and Message center for changes to platform scope or licensing.
- Re-check the Teams events pages on Microsoft Learn for an admin setting for the layouts.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which content-sharing layouts organisers can choose in Manage what attendees see</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting documented at the time of writing (November 2026). Organisers choose the layout in the event.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create events with up to 1,000 attendees, such as webinars</strong><br><small>User</small><br><small class="controls__note">Blunt fallback: stops event creation and running scheduled events; it does not govern layouts.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events up to 1k attendees <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowWebinars Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can create events optimised for a large audience, such as town halls</strong><br><small>User</small><br><small class="controls__note">Blunt fallback: stops event creation and running scheduled events; it does not govern layouts.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting or PowerShell parameter for the layouts at the time of writing (November 2026), so the first row has no path or call. The Plan for Teams meetings page lists Manage what attendees see as No control for administrators in meetings.

The two Events policies rows are the blunt controls that exist. They decide whether users with the policy can create events of each type, not which layout organisers see. The events policy page says that if you change the value to Off after a user schedules an event, they can't run or start the event, so use them with care. The Set-CsTeamsEventsPolicy reference describes the policy as still in preview.

## Open questions

- Will the layouts appear on Android and iOS? The record's platform list includes both, while the description names only Windows and Mac desktop. Watch the roadmap item.
- Is there, or will there be, an admin setting or default for the layouts? Watch the Teams events pages on Microsoft Learn and Message center.
- Do the layouts apply to every event type, including webinars and town halls, or only some? The description says Teams events without naming types.
- Does a Teams Enterprise licence in the roadmap match the Advanced event features licences exactly, and what applies to Teams Premium holders? Watch the Teams events licensing overview.

<!-- rationale
risk: Low. The layouts change what attendees see on screen when content is shared; the roadmap describes no new data access, and only organisers and presenters with production tools see the options.
cost: None. The Teams events licensing overview lists Manage what attendees see among the Advanced event features that Enterprise licences provide, and lists no separate price or meter for it.
impact: Medium. Event organisers and presenters with production tools notice it, because it changes the layout choices in Manage what attendees see; attendees see only the resulting layout.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: second paragraph / behaviour: Microsoft Learn describes Manage what attendees see in events only as letting organisers decide who to spotlight. | Found: An enhancement to the 'Manage what attendees see' feature now allows organizers and presenters to control when shared content is visible to attendees. This capability is available for meetings, webinars, and town halls. | Fix: Replace 'Microsoft Learn describes Manage what attendees see in events only as letting organisers decide who to spotlight' with 'The Teams events licensing overview describes Manage what attendees see as letting organisers decide who to spotlight'. Keep the following absence claim about the three layouts. | Source: https://learn.microsoft.com/officeupdates/teams-admin#april-24,-2025
- [unsupported, major] Risk assessment: Data exposure / behaviour: Content only shows the shared content rather than presenter video. | Found: Searched: Teams Content only layout presenter video; Teams events content sharing layouts Content only; Manage what attendees see Content only hides presenter video. Read Learn results and events-licensing; roadmap names the layout but does not explain it. | Fix: Remove 'while Content only shows the content' from the Data exposure bullet. Retain the supported statement about Speaker focused showing presenter video alongside shared content.
-->
