---
title: "Microsoft Teams: attendee chat in town halls for GCC, GCC High and DoD"
slug: "microsoft-teams-event-chat-now-available-for-events-optimized-for-a-large-audience-in-gcc"
roadmapId: 573625
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let attendees of town halls (events optimised for a large audience) in GCC, GCC High and DoD chat in a public event chat. Admins should set the events policy chat setting and check retention before January 2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Attendee chat is included in eligible Teams event licences. Teams Enterprise supports interactive events with up to 3,000 attendees; larger ones need an Attendee Capacity Pack assigned to the organiser, except during an eligible pre-April 1, 2026 Teams Premium term. Packs are available in GCC, GCC High and DoD. Chat is limited to events with up to 20,000 attendees."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["teams","teams-events","ediscovery","information-barriers","retention","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 573625"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573625"
    kind: "roadmap"
  - title: "Manage chat for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Manage chat in Microsoft Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    kind: "learn"
  - title: "Meetings and events feature and capacity comparison"
    url: "https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/teams/set-csteamseventspolicy"
    kind: "docs"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Attendee Capacity Pack for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack"
    kind: "learn"
  - title: "Release notes for Government Channel releases"
    url: "https://learn.microsoft.com/officeupdates/governmentchannel"
    kind: "learn"
videos: []
related: ["microsoft-teams-external-presenter-support-for-event-group-chat","microsoft-teams-share-reactions-at-events-with-up-to-100-000-attendees","microsoft-teams-raise-your-hand-to-speak-up-at-large-events-with-up-to-100-000-attendees","ediscovery"]
controls:
  - governs: "Whether organisers can turn on attendee chat in events optimised for a large audience"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience chat experience"
      docs: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallChatExperience None"
      docs: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    note: "Values Optimized (organisers can turn chat on) or None (they can't). Manage chat for Teams events gives Optimized as the default; the Set-CsTeamsEventsPolicy reference lists None. Organisers then turn on Meeting chat in Meeting options."
  - governs: "Who can attend town halls created under a policy, and so who can join the chat"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Who can attend events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Default is Everyone. Other values: EveryoneInOrganization, EveryoneInOrganizationAndGuests."
  - governs: "Whether organisers can create events optimised for a large audience (town halls)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Turning this off after an event is scheduled means the organiser can't run or start it."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-17T00:31:56"
changes:
  - date: "2026-11-27"
    note: "New briefing: town hall attendee chat planned for GCC, GCC High and DoD, with the events policy chat setting and 30-day organiser-mailbox storage."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected licensing to the Teams events licensing overview and Attendee Capacity Pack rules, set the default to Not stated for the government release, and narrowed the Purview hold and checklist."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Removed the unqualified eDiscovery hold clause, noted that the Government Channel release notes list town hall Event chat for GCC, gave both documented defaults for the chat setting, and set the action to Review."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 61 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-27"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "655c71041b82014564e3d5671e005cd6"
---

## What's changing

Microsoft plans to bring attendee chat in events optimised for a large audience, such as town halls, to the GCC, GCC High and DoD clouds. The roadmap item states that all users in events larger than 1,000 users, or in any event optimised for a large audience, can chat with one another in a public event chat.

Microsoft Learn describes this chat for the commercial service on [Manage chat for Teams events](https://learn.microsoft.com/microsoftteams/manage-event-chat), which at the time of writing (November 2026) says "Chat isn't available on the GCC, GCCH, and DoD government clouds at this time." Microsoft's [Government Channel release notes](https://learn.microsoft.com/officeupdates/governmentchannel#teams-admin-and-teams-app-july-24) separately state under GCC Customers: "Event chat for town halls: With this new update, everyone in a town hall will be able to chat using Event chat." These Microsoft pages disagree about GCC availability. What follows about behaviour therefore describes the commercial service. There, attendee chat is available only during the event, and organisers turn on **Meeting chat** in their **Meeting options** to let attendees send and view messages. An events policy setting, **Events optimized for a large audience chat experience**, decides whether organisers may do so; its default value, **Optimized**, lets them. Organisers, co-organisers and presenters keep their separate event group chat, which is available before, during and after the event.

The chat is limited by design: attendees can send up to 200 characters of text and emojis, can't use @ to mention others, reply or react, and see only the last 200 messages, and messages may arrive with 15-30 seconds of latency. Attendee chat is supported in events with up to 20,000 attendees, and isn't available in the new event if an event restarts.

The roadmap item is In development, with a target of January CY2027, release phase General Availability, on Android, Desktop, iOS, Mac and Web. No Message center post was supplied for this item. Microsoft has not stated the arrival default for the government-cloud release. The commercial documentation allows organisers to enable attendee chat under the default **Optimized** policy. Manage chat for Teams events gives Optimized as the default; the [Set-CsTeamsEventsPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamseventspolicy) reference instead lists None as the default for TownhallChatExperience.

## Why it matters

For government tenants, this opens a public, many-to-many channel in events that can reach thousands of people. If nobody acts, and the government release follows the commercial design with **Optimized** as the default that Manage chat for Teams events gives (the Set-CsTeamsEventsPolicy reference lists None), every organiser whose events policy is at its default will be able to turn on attendee chat once it reaches the tenant, and the audience is whoever the policy lets attend, which by default is everyone.

The records position is the larger issue. Microsoft states that these messages are stored only in the organiser's mailbox for up to 30 days, cannot be searched in an attendee's mailbox, and may be lost from the record if the organiser leaves. Organisations with records-keeping obligations, or that rely on Information Barriers, which Microsoft states the chat doesn't support, should decide before January 2027 whether town hall chat is allowed and for whom.

## Risk assessment

**Data exposure**
- Attendees chat in a public stream visible to everyone in the event. At the default **Who can attend events optimized for a large audience** value, **Everyone**, any user can attend, so the chat can include people outside the organisation. Restrict attendance in the events policy where that is not acceptable.
- Messages are stored only in the organiser's mailbox for up to 30 days; Microsoft's page says a legal hold on that mailbox keeps them longer.

**Security & identity**
- Microsoft states "Chat doesn't support Information Barriers." Tenants that separate segments with Information Barriers should not count on them inside a town hall chat.
- The **Meeting chat** meeting policy, including its options that exclude anonymous users, is documented for meetings and events with up to 1,000 attendees. In town halls the events policy setting is the control.

**Autonomy & actions**
- No change: the roadmap item and the Learn page describe person-to-person chat, with no automated actions.

**Change & support**
- If an organiser leaves between scheduling and 30 days after the event, chat might be unavailable or might not reach their mailbox; Microsoft advises rescheduling the event.
- Microsoft Teams Rooms on Windows with a Pro licence can't use chat when joining as a presenter, and chat isn't available after an event restarts. Expect organiser questions on both.

## Cost and licensing

The [Microsoft Teams service description](https://learn.microsoft.com/office365/servicedescriptions/teams-service-description) lists **Town halls (Teams events)** as available in GCC, GCC High and DoD. The [Meetings and events feature and capacity comparison](https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison) lists **Comment stream** as the chat for events optimised for large audiences, available in events with up to 20,000 attendees, without the "Premium" marking that page gives Teams Premium features.

Microsoft publishes attendee-chat entitlement in its [Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing): **Chat for attendees** is listed under both foundational and advanced event features, with capacity depending on the organiser's licence. Teams Enterprise supports interactive events with up to 3,000 attendees; larger interactive events require an appropriately sized [Attendee Capacity Pack](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack) assigned to the organiser, except while an eligible Teams Premium term purchased before April 1, 2026 remains active. Attendee packs are available in GCC, GCC High and DoD. Chat remains limited to events with up to 20,000 attendees.

Neither the service description nor the feature comparison documents a meter for event chat, and no separate price for event chat is published. The indirect cost is admin and records-management time to set events policies and decide how town hall chat is retained.

## Scope

- **Clouds:** GCC, GCC High and DoD, as the roadmap record lists them.
- **Platforms:** Android, Desktop, iOS, Mac and Web.
- **Events:** events optimised for a large audience (town halls). Learn documents attendee chat for events with up to 20,000 attendees and says chat isn't supported above that.
- **Who decides:** organisers turn chat on in **Meeting options**; admins decide through the events policy, which the cmdlet reference describes as a user-level policy.
- **Rollout:** roadmap target January CY2027; status In development.

## Governance guidance

### Before rollout
- Decide, for each events policy, whether town hall organisers may turn on attendee chat, and set **Events optimized for a large audience chat experience** to **Optimized** or **None**.
- Check **Who can attend events optimized for a large audience** in each events policy, since at **Everyone** any user can attend and join the chat.
- Ask records and legal owners whether storage in the organiser's mailbox for up to 30 days meets your obligations for town hall content.
- Tell the owners of any Information Barriers policies that Microsoft states town hall chat doesn't support them.

### At rollout
- Confirm availability in the tenant before telling organisers chat is available; Microsoft documentation currently disagrees about GCC availability.
- Brief town hall organisers that chat is turned on in **Meeting options**, runs only during the event and is limited to 200 characters per message.
- Tell organisers to reschedule an event if its organiser leaves the organisation, as Microsoft advises.

### After rollout
- Revisit the chat setting in events policies if Microsoft documents Information Barriers support or changes the storage period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether organisers can turn on attendee chat in events optimised for a large audience</strong><br><small>User</small><br><small class="controls__note">Values Optimized (organisers can turn chat on) or None (they can't). Manage chat for Teams events gives Optimized as the default; the Set-CsTeamsEventsPolicy reference lists None. Organisers then turn on Meeting chat in Meeting options.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience chat experience <a href="https://learn.microsoft.com/microsoftteams/manage-event-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallChatExperience None</code> <a href="https://learn.microsoft.com/microsoftteams/manage-event-chat" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can attend town halls created under a policy, and so who can join the chat</strong><br><small>User</small><br><small class="controls__note">Default is Everyone. Other values: EveryoneInOrganization, EveryoneInOrganizationAndGuests.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Who can attend events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers can create events optimised for a large audience (town halls)</strong><br><small>User</small><br><small class="controls__note">Turning this off after an event is scheduled means the organiser can't run or start it.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The events policy is a user-level policy, so the chat setting follows the organiser: it decides whether that organiser can turn on chat for attendees, not who may type in a given event. The **Meeting chat** setting in meeting policies covers meetings and events with up to 1,000 attendees and does not govern this chat. Turning **Events optimized for a large audience** off after an organiser has scheduled a town hall stops them running or starting it. To keep chat messages beyond 30 days, Microsoft's page points to placing the organiser's mailbox on legal hold. The `Set-CsTeamsEventsPolicy` reference describes the policy as "currently still in preview".

## Open questions

- Will the government-cloud release keep the commercial limits (200 characters, last 200 messages, up to 20,000 attendees)? Watch Manage chat for Teams events.
- Will **Events optimized for a large audience chat experience** default to **Optimized** in GCC, GCC High and DoD, as it does in the commercial documentation?
- Will Microsoft add Information Barriers support for town hall chat before or after the government release?
- Will Microsoft send a Message center post giving the rollout window for each of GCC, GCC High and DoD?

<!-- rationale
risk: Medium. Under the Optimized default given on Manage chat for Teams events, organisers can open a chat to every attendee; messages are kept only in the organiser's mailbox for up to 30 days, and Microsoft states the chat doesn't support Information Barriers.
cost: Low. Attendee chat is included in eligible Teams event licences and is not marked Premium; Attendee Capacity Packs apply to interactive events above 3,000 attendees generally, so the cost this change adds is admin time for policy and records decisions.
impact: Medium. Town hall organisers and their audiences notice it, and only in events where an organiser turns chat on.
-->
