---
title: "Microsoft Teams: raise hand and speak on mic and camera in events with up to 100,000 attendees"
slug: "microsoft-teams-raise-your-hand-to-speak-up-at-large-events-with-up-to-100-000-attendees"
roadmapId: 581720
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let attendees raise their hand in Teams events of up to 100,000 people, and organisers let them speak on mic and camera. It affects organisers of the largest events; no admin switch for it is documented yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Raise hand is among the event features of the organiser's Teams licence (Advanced event features include Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7). Events above 3,000 engaged attendees need an Attendee Capacity Pack add-on assigned to the organiser."
audiences: ["m365-admin","service-owner","change-adoption","finops"]
tags: ["teams","teams-events","meeting-policy","teams-premium","licensing","attendee-capacity-pack"]
sources:
  - title: "Meetings and events feature and capacity comparison"
    url: "https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison"
    kind: "learn"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
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
  - title: "Assign Teams add-on licenses to users"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Manage reactions in Teams meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/manage-reactions-meetings"
    kind: "learn"
  - title: "Manage the meeting presentation experience for sensitive Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-presentation-experience"
    kind: "learn"
  - title: "Release notes for Microsoft Teams admin features"
    url: "https://learn.microsoft.com/officeupdates/teams-admin"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy"
    kind: "learn"
  - title: "Manage Q&A in Teams meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/manage-qna-for-teams"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 581720"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581720"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events","meeting-policy","microsoft-teams-events-now-support-up-to-20-000-registrations-making-it-easier-to-reach-an"]
controls:
  - governs: "Admin setting to allow or block raise hand and bringing attendees on screen in large events"
    scope: "user"
    ui: null
    api: null
    note: "The Events policies settings and the Set-CsTeamsEventsPolicy syntax list no such setting at the time of writing (November 2026)."
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
    note: "Blunt fallback: removes large events for organisers with the policy, not raise hand alone."
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
    note: "Default is Everyone. Applies to large events created by organisers with this policy."
  - governs: "Which organisers can host events above 3,000 attendees, and up to what size (Attendee Capacity Pack)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Add-on Licenses > Teams Events > Licenses > Attendee pack"
      docs: "https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    note: "UI needs Global Administrator; Teams Administrator is read-only. One pack per organiser. Graph call is general user-licence assignment: addLicenses specifies the licences to add; removeLicenses the skuIds to remove."
  - governs: "Default value of Reactions in organisers' Meeting options"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting engagement > Reactions"
      docs: "https://learn.microsoft.com/microsoftteams/manage-reactions-meetings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowMeetingReactions Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/manage-reactions-meetings"
    note: "Sets a default only; organisers can change it for each meeting and event. Learn notes that turning reactions off disables hand raise."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-26"
    note: "New briefing: planned raise hand at events of up to 100,000 attendees, with today's 20,000 limit, attendee pack licensing and the events policy controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: removed the claim that recordings show attendees brought on screen, added the Microsoft Graph licence-assignment call for attendee packs, and narrowed the note on pack capacity updates."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: removed the claim that use of the feature rests with organisers rather than an admin policy, and reworded the Q&A comparison to a text queue that organisers can moderate, with its Learn source."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c09f268c72894e26d716d96e2ac4019f"
---

## What's changing

Microsoft plans to let attendees raise their hand in Teams events with up to 100,000 attendees. The roadmap item states that organisers can then let people with a raised hand turn on their mic and camera to ask a question or speak during the event.

Microsoft Learn does not describe this change yet, so what follows about its behaviour is the roadmap's description. Learn documents today's limits: the [Meetings and events feature and capacity comparison](https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison) lists raise hand for events with up to 20,000 attendees and attendee mic and camera for events with up to 1,000. For events with 20,001 to 100,000 attendees, raise hand "is turned off in the scheduling form and can't be turned on by organizers". Q&A is listed for events with up to 100,000 attendees. Events with more than 1,000 attendees have **Optimize for large audience** switched on, use town hall policy settings, and attendees "can't turn on their microphones and cameras on demand" ([Plan for Teams events](https://learn.microsoft.com/microsoftteams/plan-events)).

Microsoft's admin release notes for November 13, 2025 describe a related town hall capability: attendees raise their hand, and organisers and presenters bring them on screen to share camera and microphone. Whether the 100,000-attendee version works the same way is not stated.

The roadmap item is **In development**, targeted for **December CY2026**, as General Availability, for Worldwide (Standard Multi-Tenant), on Android, Desktop, iOS, Mac and Web. Microsoft has not stated whether raise hand will be on by default for events above 20,000 attendees.

## Why it matters

In the largest broadcasts, Learn currently lists Q&A as the way attendees above 20,000 take part. This change puts a member of the audience live, in voice and video, in front of up to 100,000 people, with the organiser deciding who speaks. That moves the risk from a text queue that organisers can [moderate](https://learn.microsoft.com/microsoftteams/manage-qna-for-teams) to a live microphone, and makes the producer's judgement in the moment the main safeguard.

Microsoft has not stated what happens on arrival: whether raise hand appears in existing large events or must be chosen in the scheduling form. No source says existing events change. The work for administrators is to brief the few organisers who run events of this size, check who those events admit, and decide whether producers need a run-sheet before the first live question.

## Risk assessment

**Data exposure**
- An attendee brought on mic and camera is heard and seen by the whole audience. The events policy setting **Record events optimized for a large audience** defaults to On. Nothing documented filters what the speaker says or shows; the organiser's choice of whom to bring on is the control.

**Security & identity**
- **Who can attend events optimized for a large audience** defaults to **Everyone**, so any user can attend large events by organisers with that policy. Restricting it to people in the organisation and guests narrows who can raise a hand. Microsoft has not said whether external or anonymous attendees can be brought on mic and camera.

**Autonomy & actions**
- No change: per the roadmap, an organiser decides who speaks; nothing acts on its own.

**Change & support**
- Microsoft Learn lists no events policy setting for raise hand or for bringing attendees on screen at the time of writing (November 2026).
- Event producers will face a queue of raised hands at a scale Teams has not offered before; expect requests for run-sheets and rehearsal support.

## Cost and licensing

**Licence.** The [Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing) lists attendee reactions, raise hand and polls among the Advanced event features, which come with Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7, among others. With these, organisers can host events with engagement features for up to 3,000 attendees.

**Add-on.** To host events with more than 3,000 attendees with engagement capabilities, including raise hand, "organizations must purchase Attendee Capacity Pack add-on licenses and assign them to organizers". Packs come in 5,000, 10,000, 20,000, 35,000, 50,000, 75,000 and 100,000 sizes; each organiser can be assigned one pack, and Teams Enterprise and pack capacities are not combined ([Attendee Capacity Pack for Teams events](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack)). Because raise hand already works up to 20,000, this change matters to organisers with a 35K, 50K, 75K or 100K pack. The same page states that packs "don't unlock any other feature capabilities". An organisation can host up to 50 concurrent events across all organisers.

**Teams Premium.** Organisers with an active Teams Premium licence bought before April 1, 2026 can keep hosting events for up to 100,000 attendees until their current Teams Premium term ends.

**Indirect costs.** Producer time and rehearsal for live audience questions. The roadmap item names no licence specific to this change.

## Scope

- **Who:** organisers of events above 20,000 attendees, which needs an Attendee Capacity Pack of that size or a pre-April 2026 Teams Premium licence still in term; their co-organisers, presenters and attendees.
- **Event type:** events with more than 1,000 attendees are optimised for a large audience and use town hall policy settings.
- **Admin roles:** assigning attendee packs needs the Global Administrator role; the Teams Administrator role sees the License Management section read-only.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Platforms:** Android, Desktop, iOS, Mac and Web.
- **Rollout:** In development, target December CY2026. Microsoft recommends Teams Events Services for events with more than 20,000 attendees.

## Governance guidance

### Before rollout
- List the organisers who hold 35K, 50K, 75K or 100K attendee packs in Teams admin center > Add-on Licenses > Teams Events, and tell them the change is coming.
- Decide, per events policy, whether **Who can attend events optimized for a large audience** should stay at **Everyone** for organisers who will bring attendees on screen.
- Agree a rule with event producers on whom they bring on mic and camera, for example only people who first posted a question in Q&A.

### At rollout
- Run a rehearsal event at the planned capacity and record whether raise hand is on by default in the scheduling form.
- Brief attendees in the event invitation on how to raise a hand and what happens if they are brought on.

### After rollout
- Check the Meetings and events feature and capacity comparison for the updated raise hand limit and any new events policy setting.
- Review pack assignments when large-event organisers change, since each organiser holds one pack and event capacity is not updated automatically when a larger pack is assigned to an organiser after scheduling.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin setting to allow or block raise hand and bringing attendees on screen in large events</strong><br><small>User</small><br><small class="controls__note">The Events policies settings and the Set-CsTeamsEventsPolicy syntax list no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create events optimised for a large audience (town halls)</strong><br><small>User</small><br><small class="controls__note">Blunt fallback: removes large events for organisers with the policy, not raise hand alone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can attend events optimised for a large audience</strong><br><small>User</small><br><small class="controls__note">Default is Everyone. Applies to large events created by organisers with this policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Who can attend events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which organisers can host events above 3,000 attendees, and up to what size (Attendee Capacity Pack)</strong><br><small>User</small><br><small class="controls__note">UI needs Global Administrator; Teams Administrator is read-only. One pack per organiser. Graph call is general user-licence assignment: addLicenses specifies the licences to add; removeLicenses the skuIds to remove.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Add-on Licenses › Teams Events › Licenses › Attendee pack <a href="https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Default value of Reactions in organisers' Meeting options</strong><br><small>User</small><br><small class="controls__note">Sets a default only; organisers can change it for each meeting and event. Learn notes that turning reactions off disables hand raise.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting engagement › Reactions <a href="https://learn.microsoft.com/microsoftteams/manage-reactions-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowMeetingReactions Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-reactions-meetings" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for raise hand or for bringing attendees on screen in large events at the time of writing (November 2026). The nearest controls decide who can run large events, who can attend them and which organisers reach the sizes this change affects.

Turning **Events optimized for a large audience** off is blunt: it stops affected organisers creating large events, and if it is turned off after an event is scheduled, the organiser can't run or start it.

The Manage Attendee Capacity Pack page describes the Teams admin center workflow; general Teams add-on licence assignment is also documented through Microsoft Graph ([Assign Teams add-on licenses to users](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses)). Assigning packs needs Global Administrator; Teams Administrator has read-only access to that section.

The meeting policy **Reactions** setting only sets the default in organisers' **Meeting options**; organisers can change it for each meeting and event.

## Open questions

- Will raise hand be on by default in the scheduling form for events above 20,000 attendees, and can organisers turn it off? Watch Message center and the feature comparison page.
- Will Microsoft add an events policy or meeting policy setting to turn off raise hand or bringing attendees on screen in large events?
- Can external or anonymous attendees in public events be brought on mic and camera?
- Does the change use the town hall mechanism in the November 2025 release notes, where organisers and presenters bring attendees on screen?
- Do organisers need an attendee pack above 20,000, and does it work for organisers on pre-April 2026 Teams Premium licences?

<!-- rationale
risk: Medium. Organisers will be able to put attendees live on mic and camera before audiences of up to 100,000, and large-audience events admit anyone by default; the events policy has no documented raise-hand setting.
cost: Medium. Events above 3,000 attendees with engagement features need an Attendee Capacity Pack add-on licence assigned to the organiser; the roadmap item names no other licence for this change.
impact: Medium. Noticed by the organisers, producers and audiences of events above 20,000 attendees, such as all-company town halls, rather than by most users.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api; Governance controls table / command: Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled prevents organisers with the policy from creating large-audience events. | Found: To prevent organizers with this policy from creating events optimized for large audiences, run the following command: Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled | Fix: Add to the existing governance notes: 'The Set-CsTeamsEventsPolicy reference still labels the policy as preview.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy, which says 'Note that this policy is currently still in preview.' This caveat also covers the attendance command. | Source: https://learn.microsoft.com/microsoftteams/set-up-events
- [supported, minor] controls[4].api; Governance controls table / command: The cited reactions how-to documents Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowMeetingReactions Disabled to set the default to Off. | Found: To set the default value for meeting reactions to Off for organizers with the policy, run the following command: Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowMeetingReactions Disabled | Fix: Add to controls[4].note: 'The reactions how-to prints Disabled, but the Set-CsTeamsMeetingPolicy reference lists AllowMeetingReactions as Boolean; confirm the accepted value against the installed module before scripting.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps alongside the existing how-to. | Source: https://learn.microsoft.com/microsoftteams/manage-reactions-meetings
-->
