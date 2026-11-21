---
title: "Viva Engage: broadcast, meeting-based and custom events with moderated questions and anonymous posting"
slug: "microsoft-viva-engage-event-broadcast-meetings-and-custom-events-with-moderated-feed-annoy"
roadmapId: 537280
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Engage events gain broadcast, meeting-based and custom event types, moderated questions and anonymous posting. Launched. Teams town hall creation in Engage ends 7 December 2026 (MC1552394); organisers must switch."
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
  model: "unknown"
  notes: "Not yet published for Engage events. The Teams events licensing overview states that event capabilities and attendee capacity vary with the organiser's licence, but does not say it applies to events created in Viva Engage."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["viva-engage","teams-events","ediscovery"]
sources:
  - title: "Microsoft 365 Roadmap item 537280"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=537280"
    kind: "roadmap"
  - title: "MC1552394: Microsoft Viva Engage: Retirement of Teams town hall event creation"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1552394"
    kind: "message-center"
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
related: ["microsoft-teams-invite-attendees-to-register","microsoft-teams-teams-events-attendance-and-engagement-report-policy","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events","meeting-policy"]
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
updated: "2026-11-21"
roadmapModified: "2026-05-18T22:30:51"
changes:
  - date: "2026-11-21"
    note: "New briefing: Engage events capabilities, the 7 December 2026 end of Teams town hall creation from Engage (MC1552394), and the Teams controls that may apply."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 52
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "ca8bd1c77bfcd74658d12fd5f0ec96d5"
---

## What's changing

The roadmap item adds capabilities to Events in Viva Engage: Broadcast for large-scale produced events, events based on meetings, and custom events. Organisers get support for moderating posted questions and conversations, attendees can post questions anonymously, and an Events landing page gives attendees and organisers one place for the "Before", "During" and "After" of an event. The item is Launched, General Availability, with a target of April CY2026, for Worldwide (Standard Multi-Tenant) on Android, iOS and Web.

Microsoft Learn has no page that describes these capabilities at the time of writing (November 2026), so their behaviour on this page is the roadmap's description. Learn does show the direction of travel: the Viva Engage service description says Engage will retire live events powered by Teams Live Events effective April 15, 2026, with already scheduled events supported through February 28, 2027, and encourages customers to move to events in Engage powered by Teams town hall.

Microsoft's notice MC1552394 (published 13 November 2026) sets a date. From December 7, 2026, users can no longer create new Teams town hall events from Viva Engage; previously scheduled events run as planned. Organisers are to create town hall, community town hall or AMA events with Engage events in Viva Engage, or create town hall events directly in Microsoft Teams. The notice gives an act-by date of 2026-12-07.

Microsoft documents moderation and anonymous posting for Q&A in Teams meetings and events: organisers and co-organisers can turn on moderation to review and approve questions before they appear in the Q&A feed. Microsoft Learn does not say how that maps onto the moderated feed in Engage events.

## Why it matters

The date in MC1552394 is the one change that lands without anyone choosing it: an organiser who creates Teams town halls from Viva Engage loses that route on 7 December 2026 and needs the new Events experience instead. Microsoft has not stated what else happens on arrival for the broadcast, meeting-based and custom event types, so plan on the basis that no source says existing behaviour changes, and expect the retirement to produce most of the support questions.

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

- Retirement: Teams town hall creation from Engage ends on 7 December 2026. Organisers with saved guidance, templates or training that point to the old route will raise tickets that day.
- Groups above 5,000 members: Microsoft says an administrator must update the group's delivery restrictions in Microsoft Entra before invitations to that group can be delivered.

## Cost and licensing

Microsoft has not published a licence for Engage events. The Viva Engage service description points to the Microsoft 365 plan comparisons for the subscriptions that enable users, and to the Product Terms site for licensing terms, and does not name a licence for these event types. The Teams events licensing overview states that "Event capabilities and attendee capacity vary based on the organizer's license" for Teams events; it does not say that this applies to events created in Viva Engage.

No meter or charge is published for the new event types at the time of writing (November 2026). The known cost is indirect: admin time to check event policies, organiser time to move event creation before 7 December 2026, and communications time to update guidance.

## Scope

Roadmap record: Worldwide (Standard Multi-Tenant), on Android, iOS and Web, General Availability. The record lists no other cloud.

People affected are event organisers, co-organisers and communications teams who create events in Viva Engage, and attendees who use the moderated feed. MC1552394 names event organisers who create Teams town hall events from Viva Engage and communications teams as the affected groups, on Microsoft Viva Engage and Microsoft Teams.

For Q&A in Teams meetings and events, Microsoft's page says sign-ins for the Office 365 Viva Engage service must be enabled in Microsoft Entra ID. Whether Engage events share that prerequisite is not stated.

## Governance guidance

### Before rollout

- Tell event organisers and communications teams before the act-by date of 2026-12-07 in MC1552394 that Teams town hall creation from Viva Engage ends that day, and that previously scheduled events run as planned.
- Identify who creates Teams town halls from Viva Engage today and have them create new events with Engage events in Viva Engage or town halls in Microsoft Teams.
- Check the Teams events policy settings for events optimised for a large audience and for who can attend, since Teams town halls are created under that policy.
- Check the Q&A setting in Teams meeting policies, which controls whether organisers can use Q&A in their meetings and events.

### At rollout

- Update internal documentation and training that describe creating Teams town hall events from Viva Engage, as MC1552394 recommends.
- Run a small pilot event to see how moderation and anonymous posting appear to organisers and attendees, and who can see an anonymous poster's name.
- Ask organisers to review the recipients before turning on **Send calendar invitations**, and ask a Microsoft Entra administrator to update delivery restrictions for any group above 5,000 members.

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

The events policy decides who can create and attend Teams events; the meeting policy Q&A setting decides whether organisers can use Q&A. Microsoft documents moderation and anonymous posting as organiser choices within Q&A, and does not document a separate admin setting for either in the pages read. Calendar invitations are set by the organiser on each event.

## Open questions

- Which licence do organisers need for Engage broadcast, meeting-based and custom events, and does the Teams events licensing overview apply? Watch the Viva Engage service description and the Teams events licensing page.
- Does an admin setting in the Viva Engage admin center or the Teams admin center switch Engage events on or off, or limit who can create them? Watch Microsoft Learn and Message center.
- Do the Teams events policy and the Teams meeting policy Q&A setting apply to events created in Engage?
- Who can see the identity behind an anonymous question in an Engage event, and are those questions covered by eDiscovery and retention as Teams Q&A is documented to be?

<!-- rationale
risk: Medium. Attendees can post questions anonymously and events can reach large audiences, and Microsoft has not said which admin controls cover Engage events; creation of Teams town halls from Engage also ends on 7 December 2026.
cost: Low. The only cost the sources show is admin and organiser time to move event creation. The licence for Engage events is not yet published; the Teams events licensing page covers Teams events.
impact: Medium. Event organisers and communications teams notice first, because the Teams town hall option in Engage is removed on 7 December 2026; attendees notice moderation and anonymous posting.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Licensing is unknown because no licence specific to the new Engage event capabilities is published. | Found: If you do enforce Viva Engage licensing, users access the Viva Engage Core experience, but each user must have the following: a Microsoft 365 license. a Viva Engage Core Service Plan. | Fix: Set licensing.model to included and cite https://learn.microsoft.com/viva/engage/setup. Replace the blanket licensing absence in the notes, body and cost rationale with: 'Viva Engage Core comes with Microsoft 365; when Engage licensing is enforced, users need a Microsoft 365 license and a Viva Engage Core Service Plan. Feature-specific licensing for the new broadcast, meeting-based and custom event capabilities is not yet published.' | Source: https://learn.microsoft.com/viva/engage/setup
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls / consistency: The checklist asks readers to review attendee policy settings, calendar invitations and group delivery restrictions without corresponding control rows. | Found: Check ... for who can attend; ... before turning on Send calendar invitations ... update delivery restrictions ... Table rows: Who can create Teams events ...; Whether organisers can use Q&A. | Fix: The Before rollout attendee-policy check and the At rollout calendar-invitation and delivery-restriction checks have no corresponding rows. Remove those checklist instructions; keep the supported descriptions in Risk assessment. Do not add unverified control rows.
-->
