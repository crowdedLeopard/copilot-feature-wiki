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
defaultState: "user-opt-in"
action: "act-now"
licensing:
  model: "included"
  notes: "Town halls are listed as available in GCC, GCC High and DoD in the Microsoft Teams service description, and the feature comparison lists the attendee comment stream without a Premium marking. No licence or price specific to event chat is published."
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
    note: "Values Optimized (default, organisers can turn chat on) or None (they can't). Organisers then turn on Meeting chat in Meeting options."
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
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 54
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "6c39fb0d5fd31ba0a5a4b1981d446764"
---

## What's changing

Microsoft plans to bring attendee chat in events optimised for a large audience, such as town halls, to the GCC, GCC High and DoD clouds. The roadmap item states that all users in events larger than 1,000 users, or in any event optimised for a large audience, can chat with one another in a public event chat.

Microsoft Learn describes this chat for the commercial service on [Manage chat for Teams events](https://learn.microsoft.com/microsoftteams/manage-event-chat), which at the time of writing (November 2026) says "Chat isn't available on the GCC, GCCH, and DoD government clouds at this time." What follows about behaviour therefore describes the commercial service. There, attendee chat is available only during the event, and organisers turn on **Meeting chat** in their **Meeting options** to let attendees send and view messages. An events policy setting, **Events optimized for a large audience chat experience**, decides whether organisers may do so; its default value, **Optimized**, lets them. Organisers, co-organisers and presenters keep their separate event group chat, which is available before, during and after the event.

The chat is limited by design: attendees can send up to 200 characters of text and emojis, can't use @ to mention others, reply or react, and see only the last 200 messages, and messages may arrive with 15-30 seconds of latency. Attendee chat is supported in events with up to 20,000 attendees, and isn't available in the new event if an event restarts.

The roadmap item is In development, with a target of January CY2027, release phase General Availability, on Android, Desktop, iOS, Mac and Web. No Message center post was supplied for this item.

## Why it matters

For government tenants, this opens a public, many-to-many channel in events that can reach thousands of people. If nobody acts, and the government release follows the commercial design, every organiser whose events policy is at its default will be able to turn on attendee chat once it reaches the tenant, and the audience is whoever the policy lets attend, which by default is everyone.

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

Neither page documents a meter for event chat, and a licence or price specific to event chat is not yet published. The indirect cost is admin and records-management time to set events policies and decide how town hall chat is retained.

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
- Ask records and legal owners whether storage in the organiser's mailbox for up to 30 days meets your obligations for town hall content, and agree how a hold is requested for events that need longer.
- Tell the owners of any Information Barriers policies that Microsoft states town hall chat doesn't support them.

### At rollout
- Check that Manage chat for Teams events no longer lists the government-cloud limitation before telling organisers the chat is available.
- Brief town hall organisers that chat is turned on in **Meeting options**, runs only during the event and is limited to 200 characters per message.
- Tell organisers to reschedule an event if its organiser leaves the organisation, as Microsoft advises.

### After rollout
- Run a content search of an organiser's mailbox after a pilot town hall to confirm the chat messages are there for eDiscovery.
- Revisit the chat setting in events policies if Microsoft documents Information Barriers support or changes the storage period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether organisers can turn on attendee chat in events optimised for a large audience</strong><br><small>User</small><br><small class="controls__note">Values Optimized (default, organisers can turn chat on) or None (they can't). Organisers then turn on Meeting chat in Meeting options.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience chat experience <a href="https://learn.microsoft.com/microsoftteams/manage-event-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallChatExperience None</code> <a href="https://learn.microsoft.com/microsoftteams/manage-event-chat" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can attend town halls created under a policy, and so who can join the chat</strong><br><small>User</small><br><small class="controls__note">Default is Everyone. Other values: EveryoneInOrganization, EveryoneInOrganizationAndGuests.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Who can attend events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers can create events optimised for a large audience (town halls)</strong><br><small>User</small><br><small class="controls__note">Turning this off after an event is scheduled means the organiser can't run or start it.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The events policy is a user-level policy, so the chat setting follows the organiser: it decides whether that organiser can turn on chat for attendees, not who may type in a given event. The **Meeting chat** setting in meeting policies covers meetings and events with up to 1,000 attendees and does not govern this chat. Turning **Events optimized for a large audience** off after an organiser has scheduled a town hall stops them running or starting it. To keep chat messages beyond 30 days, Microsoft's page points to placing the organiser's mailbox on legal hold; that is done in Microsoft Purview and is not a row here. The `Set-CsTeamsEventsPolicy` reference describes the policy as "currently still in preview".

## Open questions

- Will the government-cloud release keep the commercial limits (200 characters, last 200 messages, up to 20,000 attendees)? Watch Manage chat for Teams events.
- Will **Events optimized for a large audience chat experience** default to **Optimized** in GCC, GCC High and DoD, as it does in the commercial documentation?
- Will Microsoft add Information Barriers support for town hall chat before or after the government release?
- Will Microsoft send a Message center post giving the rollout window for each of GCC, GCC High and DoD?

<!-- rationale
risk: Medium. The events policy default lets organisers open a chat to every attendee, messages are kept only in the organiser's mailbox for up to 30 days, and Microsoft states the chat doesn't support Information Barriers.
cost: Low. Town halls are listed for GCC, GCC High and DoD in the Teams service description and attendee chat is not marked Premium; the cost shown is admin time for policy and records decisions.
impact: Medium. Town hall organisers and their audiences notice it, and only in events where an organiser turns chat on.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model; licensing.notes / licensing: Attendee chat is included without stating which license covers the large-audience experience or its licensed capacity. | Found: To host events with more than 3,000 attendees with engagement capabilities (chat, reactions, raise hand, polls, Q&A), organizations must purchase Attendee Capacity Pack add-on licenses and assign them to organizers. | Fix: Keep included for the chat capability itself, but replace licensing.notes with: 'Attendee chat is included in eligible Teams event licenses. Teams Enterprise supports interactive events with up to 3,000 attendees; larger interactive events require an appropriately sized Attendee Capacity Pack assigned to the organizer, except while an eligible pre-April 1, 2026 Teams Premium term remains active. Packs are available in GCC, GCC High and DoD. Chat remains limited to events with up to 20,000 attendees.' Cite https://learn.microsoft.com/microsoftteams/events-licensing and https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack alongside the existing chat reference. | Source: https://learn.microsoft.com/microsoftteams/events-licensing
- [contradicted, blocker] licensing.notes; Cost and licensing / absence: Microsoft has not published the license covering event chat. | Found: Chat for attendees | Organizers can allow attendees to use chat during events. | Manage chat for Teams events | Fix: Replace the licensing-absence statement with: 'Microsoft publishes attendee-chat entitlement in its Teams events licensing overview; chat is listed under both foundational and advanced event features, with capacity depending on the organizer's license.' Cite https://learn.microsoft.com/microsoftteams/events-licensing. Retain only the narrower absence that no separate per-chat price is published, and include the capacity qualification specified for licensing.notes. | Source: https://learn.microsoft.com/microsoftteams/events-licensing
- [unsupported, blocker] front matter: defaultState; Open questions / default: The planned government-cloud feature arrives in a user-opt-in state. | Found: Searched: "573625" "chat" default GCC; "TownhallChatExperience" "GCC" default. Read roadmap, manage-event-chat and Set-CsTeamsEventsPolicy. The roadmap states no government default; Learn still excludes GCC, GCCH and DoD. | Fix: Set defaultState to unknown. Add: 'Microsoft has not stated the arrival default for the government-cloud release. The commercial documentation allows organizers to enable attendee chat under the default Optimized policy.' Keep the government-default open question and the conditional wording in Why it matters.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / admin-path: Microsoft Purview can be used to place an organizer's Exchange mailbox on a hold. | Found: Place a hold on the Exchange mailboxes ... Go to the Microsoft Purview portal ... Select the eDiscovery solution card and then select Cases ... Select a case, and then select the Hold policies tab. | Fix: Cite https://learn.microsoft.com/purview/edisc-hold-create for the Purview statement and narrow it to 'An eDiscovery hold on the organizer's Exchange mailbox can be created in Microsoft Purview.' | Source: https://learn.microsoft.com/purview/edisc-hold-create
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist includes mailbox holds and content search, but neither control appears in the controls table. | Found: Agree how a hold is requested for events that need longer. ... Run a content search of an organiser's mailbox ... [The controls table contains only chat experience, attendance and event creation.] | Fix: Remove the checklist clause 'and agree how a hold is requested for events that need longer' and the After rollout content-search bullet. Keep the sourced explanation of storage and holds in the prose; do not add unverified control rows.
-->
