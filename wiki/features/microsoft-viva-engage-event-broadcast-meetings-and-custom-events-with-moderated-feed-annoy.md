---
title: "Viva Engage: broadcast, meeting-based and custom events with moderated questions and anonymous posting"
slug: "microsoft-viva-engage-event-broadcast-meetings-and-custom-events-with-moderated-feed-annoy"
roadmapId: 537280
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Engage events gain broadcast, meeting-based and custom event types, moderated questions and anonymous posting. Launched. The legacy live event creation option ends 7 December 2026 (MC1552394); organisers should move to Engage events."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "act-now"
licensing:
  model: "included"
  notes: "Viva Engage Core comes with Microsoft 365; when Engage licensing is enforced, users need a Microsoft 365 license and a Viva Engage Core Service Plan. Feature-specific licensing for the new broadcast, meeting-based and custom event capabilities is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["viva-engage","teams-events","ediscovery"]
sources:
  - title: "Microsoft 365 Roadmap item 537280"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=537280"
    kind: "roadmap"
  - title: "MC1552394: (Updated) Microsoft Viva Engage: Retiring the legacy live event creation option in Engage"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1552394"
    kind: "message-center"
  - title: "Viva Engage setup requirements"
    url: "https://learn.microsoft.com/viva/engage/setup"
    kind: "learn"
  - title: "Viva Engage service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/viva-engage-service-description/viva-engage-service-description"
    kind: "learn"
  - title: "Manage Q&A in Teams meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/manage-qna-for-teams"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Send calendar invites for Engage events"
    url: "https://learn.microsoft.com/viva/engage/send-calendar-invites"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Organize a Microsoft Teams live event in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/organize-live-event"
    kind: "learn"
videos: []
related: ["microsoft-teams-invite-attendees-to-register","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events","meeting-policy"]
controls:
  - governs: "Who can create Teams events optimised for a large audience, such as town halls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Documented for Teams events. Learn does not state whether it governs events created in Viva Engage. Changing to Off after scheduling stops the organiser running the event."
  - governs: "Whether organisers can use Q&A, including moderated questions, in meetings and events"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting Engagement > Q&A"
      docs: "https://learn.microsoft.com/microsoftteams/manage-qna-for-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity Global -QnAEngagementMode Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/manage-qna-for-teams"
    note: "Documented for Q&A in Teams meetings and events. Learn does not state whether it governs the moderated feed in Engage events."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-24"
roadmapModified: "2026-05-18T22:30:51"
changes:
  - date: "2026-11-21"
    note: "New briefing: Engage events capabilities, the 7 December 2026 end of Teams town hall creation from Engage (MC1552394), and the Teams controls that may apply."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Licensing now states Viva Engage Core comes with Microsoft 365; attendee-policy, calendar-invitation and delivery-restriction checklist items removed (no control rows); retirement wording updated to the legacy live event option per updated MC1552394."
version: 2
---

## What's changing

The roadmap item adds capabilities to Events in Viva Engage: Broadcast for large-scale produced events, events based on meetings, and custom events. Organisers get support for moderating posted questions and conversations, attendees can post questions anonymously, and an Events landing page gives attendees and organisers one place for the "Before", "During" and "After" of an event. The item is Launched, General Availability, with a target of April CY2026, for Worldwide (Standard Multi-Tenant) on Android, iOS and Web.

Microsoft Learn has no page that describes these capabilities at the time of writing (November 2026), so their behaviour on this page is the roadmap's description. Learn does show the direction of travel: the Viva Engage service description says Engage will retire live events powered by Teams Live Events effective April 15, 2026, with already scheduled events supported through February 28, 2027, and encourages customers to move to events in Engage powered by Teams town hall.

Microsoft's notice MC1552394 (published 13 November 2026, updated 23 November 2026) sets a date. From December 7, 2026, users can no longer create new events with the legacy live event option in Viva Engage, which appears as the link "Want to schedule an event with the legacy live event feature? Click here." Previously scheduled legacy events run as planned. The notice says Engage events stay available from communities and storylines with no change to how they work: Broadcast events (powered by Teams town hall), Meeting events (powered by Teams webinar) and Async events. The notice gives an act-by date of 2026-12-07.

Microsoft documents moderation and anonymous posting for Q&A in Teams meetings and events: organisers and co-organisers can turn on moderation to review and approve questions before they appear in the Q&A feed. Microsoft Learn does not say how that maps onto the moderated feed in Engage events.

## Why it matters

The date in MC1552394 is the one change that lands without anyone choosing it: an organiser who still creates events with the legacy live event option in Viva Engage loses that option on 7 December 2026 and needs Engage events instead. Microsoft has not stated what else happens on arrival for the broadcast, meeting-based and custom event types, so plan on the basis that no source says existing behaviour changes, and expect the retirement to produce most of the support questions.

Anonymous posting and large audiences also change what an organiser can be asked and who can ask it. Microsoft documents that for Teams Q&A, questions posted anonymously are ingested into the organiser's mailbox for eDiscovery. Compliance and communications owners should confirm what applies to Engage events before the first large event, not after it.

## Risk assessment

**Data exposure**

- Anonymous questions: for Q&A in Teams meetings and events, Microsoft documents that when the organiser enables anonymous posting, the questions attendees post are ingested into the organiser's mailbox for eDiscovery. Whether the same applies to Engage events is not stated.
- Calendar invitations: Engage can send invitations to subscribed internal and external community members, subject to their preferences and organisational policies. The **Send calendar invitations** option is off by default and is set per event by the organiser.

**Security & identity**

- Attendee access: for Teams events, both attendee settings in the Teams events policy default to Everyone, so any user can attend unless the policy is changed. Learn does not say whether that policy governs events created in Engage.

**Autonomy & actions**

- No change documented: the roadmap describes organisers moderating questions and attendees posting them, and describes no automated actions.

**Change & support**

- Retirement: the legacy live event creation option in Engage ends on 7 December 2026. Organisers with saved guidance, templates or training that point to the old route will raise tickets that day.
- Groups above 5,000 members: Microsoft says an administrator must update the group's delivery restrictions in Microsoft Entra before invitations to that group can be delivered.

## Cost and licensing

Viva Engage Core comes with Microsoft 365; when Engage licensing is enforced, users need a Microsoft 365 license and a Viva Engage Core Service Plan, according to the [Viva Engage setup requirements](https://learn.microsoft.com/viva/engage/setup). Feature-specific licensing for the new broadcast, meeting-based and custom event capabilities is not yet published. The Viva Engage service description points to the Microsoft 365 plan comparisons for the subscriptions that enable users, and to the Product Terms site for licensing terms, and does not name a licence for these event types. The Teams events licensing overview states that "Event capabilities and attendee capacity vary based on the organizer's license" for Teams events; it does not say that this applies to events created in Viva Engage.

No meter or charge is published for the new event types at the time of writing (November 2026). The known cost is indirect: admin time to check event policies, organiser time to move event creation before 7 December 2026, and communications time to update guidance.

## Scope

Roadmap record: Worldwide (Standard Multi-Tenant), on Android, iOS and Web, General Availability. The record lists no other cloud.

People affected are event organisers, co-organisers and communications teams who create events in Viva Engage, and attendees who use the moderated feed. MC1552394 names event organisers who still create events with the legacy live event option in Engage as the affected group, on Microsoft Viva Engage.

For Q&A in Teams meetings and events, Microsoft's page says sign-ins for the Office 365 Viva Engage service must be enabled in Microsoft Entra ID. Whether Engage events share that prerequisite is not stated.

## Governance guidance

### Before rollout

- Tell event organisers and communications teams before the act-by date of 2026-12-07 in MC1552394 that the legacy live event creation option in Viva Engage is removed that day, and that previously scheduled legacy events run as planned.
- Identify who still creates events with the legacy live event option in Viva Engage and have them create new events with Engage events from communities and storylines.
- Check the Teams events policy setting for events optimised for a large audience, since Teams town halls are created under that policy.
- Check the Q&A setting in Teams meeting policies, which controls whether organisers can use Q&A in their meetings and events.

### At rollout

- Update internal documentation and training that mention the legacy live event option in Viva Engage, as MC1552394 recommends.
- Run a small pilot event to see how moderation and anonymous posting appear to organisers and attendees, and who can see an anonymous poster's name.

### After rollout

- Confirm with compliance owners how questions from Engage events appear in eDiscovery and retention, using the Teams Q&A documentation as the starting point.
- Review support tickets from organisers after 7 December 2026 and correct guidance that still points to the retired route.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can create Teams events optimised for a large audience, such as town halls</strong><br><small>User</small><br><small class="controls__note">Documented for Teams events. Learn does not state whether it governs events created in Viva Engage. Changing to Off after scheduling stops the organiser running the event.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers can use Q&amp;A, including moderated questions, in meetings and events</strong><br><small>User</small><br><small class="controls__note">Documented for Q&amp;A in Teams meetings and events. Learn does not state whether it governs the moderated feed in Engage events.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting Engagement › Q&amp;A <a href="https://learn.microsoft.com/microsoftteams/manage-qna-for-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity Global -QnAEngagementMode Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-qna-for-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are Teams admin center controls that Microsoft documents for Teams events and Teams meetings. Microsoft Learn does not state whether they apply to events created in Viva Engage, so treat them as today's alternatives for Teams-based events, not as confirmed controls over Engage events.

The events policy setting decides who can create Teams events optimised for a large audience; the meeting policy Q&A setting decides whether organisers can use Q&A. Microsoft documents moderation and anonymous posting as organiser choices within Q&A, and does not document a separate admin setting for either in the pages read. Calendar invitations are set by the organiser on each event.

## Open questions

- Beyond the Microsoft 365 license and Viva Engage Core Service Plan, does any licence apply to Engage broadcast, meeting-based and custom events, and does the Teams events licensing overview apply? Watch the Viva Engage service description and the Teams events licensing page.
- Does an admin setting in the Viva Engage admin center or the Teams admin center switch Engage events on or off, or limit who can create them? Watch Microsoft Learn and Message center.
- Do the Teams events policy and the Teams meeting policy Q&A setting apply to events created in Engage?
- Who can see the identity behind an anonymous question in an Engage event, and are those questions covered by eDiscovery and retention as Teams Q&A is documented to be?

<!-- rationale
risk: Medium. Attendees can post questions anonymously and events can reach large audiences, and Microsoft has not said which admin controls cover Engage events; the legacy live event creation option in Engage also ends on 7 December 2026.
cost: Low. The only cost the sources show is admin and organiser time to move event creation. Viva Engage Core comes with Microsoft 365; licensing specific to the new event types is not yet published, and the Teams events licensing page covers Teams events.
impact: Medium. Event organisers and communications teams notice first, because the legacy live event option in Engage is removed on 7 December 2026; attendees notice moderation and anonymous posting.
-->
