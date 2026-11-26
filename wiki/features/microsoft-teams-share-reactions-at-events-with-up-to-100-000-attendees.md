---
title: "Microsoft Teams: reactions in events with up to 100,000 attendees"
slug: "microsoft-teams-share-reactions-at-events-with-up-to-100-000-attendees"
roadmapId: 581719
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let attendees send and see reactions in Teams events of up to 100,000 attendees, up from 20,000 today. Affects organisers of the largest town halls; review the reactions default and who holds large attendee packs."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Events with engagement features above 3,000 attendees need an Attendee Capacity Pack, an add-on for Teams Enterprise, assigned to the organiser; packs go up to 100,000. Legacy Teams Premium licences bought before 1 April 2026 keep 100,000 until their term ends."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-events","emoji","meeting-policy","attendee-capacity-pack","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 581719"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581719"
    kind: "roadmap"
  - title: "Meetings and events feature and capacity comparison"
    url: "https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison"
    kind: "learn"
  - title: "Manage reactions in Teams meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/manage-reactions-meetings"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Attendee Capacity Pack for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack"
    kind: "learn"
  - title: "Manage Attendee Capacity Pack add-on licenses for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Default for reactions in organisers' Meeting options (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "Assign Teams add-on licenses to users"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-events-now-support-up-to-20-000-registrations-making-it-easier-to-reach-an","microsoft-teams-teams-events-attendance-and-engagement-report-policy","microsoft-teams-new-layout-when-sharing-content-for-teams-events"]
controls:
  - governs: "Default for reactions in organisers' Meeting options"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting engagement > Reactions"
      docs: "https://learn.microsoft.com/microsoftteams/manage-reactions-meetings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowMeetingReactions $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Sets the default only; organisers can change reactions for each meeting and event. Default is On."
  - governs: "Tenant-wide switch for reactions in events above 20,000 attendees"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026); the meeting policy default and the organiser's option are today's controls."
  - governs: "Whether users can create events optimised for a large audience (town halls)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Blunt fallback: stops town halls altogether, not reactions alone."
  - governs: "Who can attend events optimised for a large audience"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Who can attend events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Default is Everyone. Applies to town halls created by organisers with the policy."
  - governs: "Which organisers can host events above 3,000 engaged attendees (Attendee Capacity Pack assignment)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Add-on Licenses > Teams Events > Licenses > Assign to new users > Assign Add-on licenses > Attendee pack"
      docs: "https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    note: "Admin centre: Global Administrator; Teams Administrator is read-only. One pack per organiser. Graph: general licence API; addLicenses takes the pack skuId; removeLicenses is required, can be empty."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-26"
    note: "New briefing: reactions planned for Teams events up to 100,000 attendees, with today's 20,000 ceiling, attendee pack licensing and the controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: attendee pack assignment now shows the Microsoft Graph assignLicense call instead of 'Not yet documented'; added the pane step to its admin path; removed the per-event option from the At rollout checklist."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "30c7618d96ae5250a68ed972f04783f0"
---

## What's changing

Microsoft plans to let attendees send reactions, and see the reactions others send, in Teams events with up to 100,000 attendees. The roadmap item states that "Teams now supports reactions in events at this scale".

Today's documentation sets a lower ceiling. The [Meetings and events feature and capacity comparison](https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison) lists reactions in events as available for up to 20,000 attendees, and says that for events with 20,001 to 100,000 attendees the feature is turned off in the scheduling form and organisers can't turn it on. Microsoft Learn does not yet describe the 100,000-attendee behaviour, so what follows about it is the roadmap's description.

Reactions are already governed in two places. Administrators set the default for reactions in organisers' **Meeting options** through the Teams meeting policy, where the default is **On**, and organisers can change the setting for each meeting and event they create ([Manage reactions in Teams meetings and events](https://learn.microsoft.com/microsoftteams/manage-reactions-meetings)). Microsoft has not stated whether events above 20,000 attendees will pick up that default when the change arrives.

The roadmap item is **In development**, targeted for **December CY2026** for General Availability, on Android, Desktop, iOS, Mac and Web, and lists only the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

Few tenants will meet this change in practice: an event above 20,000 attendees with engagement features needs an organiser who holds an Attendee Capacity Pack of 35,000 or more, or a legacy Teams Premium licence still in term. For the few organisations that run events at that scale, typically all-company town halls, the audience gains a visible feedback channel that the producers have not had to manage before.

Microsoft has not stated whether reactions will be on in those events without anyone choosing it. No source says existing behaviour changes before the target, so treat this as a decision for event owners: decide whether your largest broadcasts should carry reactions, and check that the meeting policy assigned to those organisers sets the default you want.

## Risk assessment

**Data exposure**
- No new data is described: reactions are emoji shown during the event. Microsoft has not said whether attendees of events this size see who sent each reaction; check before a public event.
- Who can join, and therefore react, is set by **Who can attend events optimized for a large audience** in the Teams events policy, which defaults to **Everyone**.

**Security & identity**
- No change: no new sign-in, permission or app is described for this feature.

**Autonomy & actions**
- No change: reactions are sent by people; nothing acts on its own.

**Change & support**
- Producers of the largest town halls get a reaction stream they did not have at this size, and may get questions about how to turn it off for a sensitive broadcast. The organiser's per-event option and the meeting policy default are the controls documented today.
- Microsoft has not described any effect on stream quality or latency at 100,000 attendees; Ultra-Low Latency is itself documented only up to 20,000 attendees.

## Cost and licensing

**Licence.** No licence specific to reactions at this scale is published. The [Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing) says that to host events with more than 3,000 attendees with engagement capabilities (chat, reactions, raise hand, polls, Q&A), organisations must buy Attendee Capacity Pack add-on licences and assign them to organisers; packs enable events with up to 100,000 attendees. The [Attendee Capacity Pack](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack) page describes the packs as add-on licences for Teams Enterprise, sold in sizes of 5,000, 10,000, 20,000, 35,000, 50,000, 75,000 and 100,000 attendees, with one pack per organiser. The same page says attendee packs increase capacity and don't unlock any other feature capabilities.

**Legacy Teams Premium.** Organisers with an active Teams Premium licence bought before 1 April 2026 can continue to host events for up to 100,000 attendees until that term ends.

**Meter.** None is described for this feature.

**Not yet published.** The Attendee Capacity Pack pages on Microsoft Learn give pack sizes but no prices.

## Scope

- **Who gets it:** attendees of Teams events, per the roadmap; in practice events above 20,000 attendees, which need an organiser with an Attendee Capacity Pack of 35,000 or more, or a legacy Teams Premium licence in term.
- **Event type:** the comparison page documents reactions for events optimised for large audiences (town halls) up to 20,000 attendees today.
- **Who configures:** Teams administrators edit meeting and events policies; assigning attendee packs in the Teams admin center needs the Global Administrator role, and the Teams Administrator role has read-only access there.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Android, Desktop, iOS, Mac and Web.
- **Rollout:** targeted for December CY2026; status In development.

## Governance guidance

### Before rollout
- List the organisers who hold an Attendee Capacity Pack of 35,000 or more in Teams admin center > Add-on Licenses > Teams Events; with organisers still on a legacy Teams Premium licence, they are the people whose events can exceed 20,000 attendees.
- Check the **Reactions** setting in the meeting policy assigned to those organisers, and decide whether its default suits all-company broadcasts.
- Confirm **Who can attend events optimized for a large audience** in their events policy, since everyone admitted can react once the feature arrives.

### At rollout
- Tell town hall producers that reactions may become available above 20,000 attendees.
- Run a test event at scale before the first live all-company broadcast that uses reactions.

### After rollout
- Watch the Microsoft Learn comparison page for the reactions ceiling to change from 20,000, and for any new setting for large events.
- Collect feedback from producers on whether reactions distracted from or helped the broadcast, and adjust the policy default for those organisers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default for reactions in organisers' Meeting options</strong><br><small>User</small><br><small class="controls__note">Sets the default only; organisers can change reactions for each meeting and event. Default is On.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting engagement › Reactions <a href="https://learn.microsoft.com/microsoftteams/manage-reactions-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowMeetingReactions $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for reactions in events above 20,000 attendees</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026); the meeting policy default and the organiser's option are today's controls.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create events optimised for a large audience (town halls)</strong><br><small>User</small><br><small class="controls__note">Blunt fallback: stops town halls altogether, not reactions alone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can attend events optimised for a large audience</strong><br><small>User</small><br><small class="controls__note">Default is Everyone. Applies to town halls created by organisers with the policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Who can attend events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which organisers can host events above 3,000 engaged attendees (Attendee Capacity Pack assignment)</strong><br><small>User</small><br><small class="controls__note">Admin centre: Global Administrator; Teams Administrator is read-only. One pack per organiser. Graph: general licence API; addLicenses takes the pack skuId; removeLicenses is required, can be empty.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Add-on Licenses › Teams Events › Licenses › Assign to new users › Assign Add-on licenses › Attendee pack <a href="https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The meeting policy **Reactions** setting sets the default in organisers' **Meeting options**; organisers can change it for each meeting and event, so it is a default rather than an enforced block. The [Manage reactions](https://learn.microsoft.com/microsoftteams/manage-reactions-meetings) page shows `-AllowMeetingReactions Disabled`, while the cmdlet reference lists the parameter as Boolean with a default of True; the table follows the reference.

Microsoft Learn documents no tenant-wide or events-policy setting for reactions in events above 20,000 attendees at the time of writing (November 2026). Turning off **Events optimized for a large audience** stops affected users creating town halls at all, which is a blunt fallback. Attendee pack assignment is documented in the Teams admin center and needs the Global Administrator role.

## Open questions

- Will reactions be on by default in events above 20,000 attendees, following the meeting policy default, or will organisers have to turn them on? Watch the comparison page on Microsoft Learn.
- Will Microsoft add an events policy setting for reactions in large events, separate from the meeting policy default?
- Do attendees of events this size see the names of people who send reactions, or only aggregated reactions?
- Will the change reach GCC, GCC High or DoD, which the roadmap item does not list?
- Will reactions at this scale be counted in the attendance and engagement report for town halls?

<!-- rationale
risk: Low. Reactions are emoji feedback inside events organisers already run, and the existing meeting policy default and each organiser's event option already govern them.
cost: Low. No licence specific to this change is published; events above 3,000 attendees with engagement features already need an Attendee Capacity Pack assigned to the organiser, so the known cost is admin and organiser time.
impact: Medium. Only organisers able to run events above 20,000 attendees are affected, but their audiences, often the whole organisation, will see reactions they did not have before.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].api; Governance controls table / command: Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled prevents organisers with the policy from creating town halls. | Found: To prevent organizers with this policy from creating events optimized for large audiences, run the following command: Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled | Fix: Add to controls[2].note: 'The Set-CsTeamsEventsPolicy reference marks the policy as still in preview.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps, whose introduction says 'Note that this policy is currently still in preview.' | Source: https://learn.microsoft.com/microsoftteams/set-up-events
- [supported, minor] controls[3].api; Governance controls table / command: Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests is documented for restricting town hall access. | Found: To only allow users in your organization and guests to attend events optimized for large audiences created by organizers with this policy, run the following command: Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests | Fix: Add to controls[3].note: 'The Set-CsTeamsEventsPolicy reference marks the policy as still in preview.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps, whose introduction says 'Note that this policy is currently still in preview.' | Source: https://learn.microsoft.com/microsoftteams/set-up-events
- [supported, minor] Risk assessment: Data exposure; rationale: risk / behaviour: Live reactions are emoji feedback displayed during a meeting or event. | Found: Choose from a range of live reactions, including: Like [Image of the 3D emoji like reaction]. Your reaction pops up momentarily at the bottom of your meeting and over your profile picture or video feed. | Fix: Add https://support.microsoft.com/office/express-yourself-in-microsoft-teams-meetings-with-live-reactions-a8323a40-3d07-4129-934b-305370a36e21 to sources, titled 'Express yourself in Microsoft Teams meetings with live reactions'. The cited Manage reactions page links to this description. | Source: https://support.microsoft.com/office/express-yourself-in-microsoft-teams-meetings-with-live-reactions-a8323a40-3d07-4129-934b-305370a36e21
-->
