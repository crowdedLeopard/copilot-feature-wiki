---
title: "Microsoft Teams Rooms on Windows: Event group chat for organisers and presenters in webinars and structured meetings"
slug: "microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webin-557165"
roadmapId: 557165
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Pro-licensed Teams Rooms on Windows are to get the private Event Group chat in webinars and structured meetings. Learn still says rooms joined as presenters can't send chat; no default or admin action is stated."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Teams and Surface Devices"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The roadmap item says the feature is available in Teams Rooms Pro-licensed rooms, and Learn's Teams Rooms licences page lists Meeting chat under Teams Rooms Pro only. That page lists no separate price or meter for this feature."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","teams-events","meeting-policy","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 557165"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557165"
    kind: "roadmap"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Manage chat in Microsoft Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    kind: "learn"
  - title: "Manage chat for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    kind: "learn"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Host or attend an event from a Microsoft Teams Room (MTR)"
    url: "https://support.microsoft.com/office/host-or-attend-an-event-from-a-microsoft-teams-room-mtr-d7ff15e0-6516-4ebc-ae03-a2bdf58a4478"
    kind: "docs"
videos: []
related: ["microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-external-presenter-support-for-event-group-chat","meeting-policy"]
controls:
  - governs: "Whether participants in meetings and events with up to 1,000 attendees can read and send chat (Meeting chat policy)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting engagement > Meeting chat"
      docs: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -MeetingChatEnabledType Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    note: "General control: Learn does not say it governs the Event Group chat on Teams Rooms. Disabled turns meeting chat off for all participants."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-22"
    note: "New briefing: Event group chat for Teams Rooms on Windows presenters in webinars and structured meetings, with Learn's view-only caveat for room presenters."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 53
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "95d1054dec445893e3b52bb3dfee775f"
---

## What's changing

The roadmap item states that when a Teams Rooms on Windows device acts as an organiser, co-organiser or presenter in a structured meeting or webinar, people in the room get access to the private chat for event management known as the Event Group. They can also switch to a separate chat with attendees. The roadmap says the feature is available in Teams Rooms Pro-licensed rooms.

Learn describes the Event group chat for events optimised for large audiences such as town halls: organisers, co-organisers and presenters chat with each other in it, and it is a separate experience from the chat with attendees ([Manage chat for Teams events](https://learn.microsoft.com/microsoftteams/manage-event-chat)). Microsoft Support says an MTR (Microsoft Teams Room) opens it from the **Chat** dropdown on the room console, and that it is view-only for MTRs joined as presenters ([Host or attend an event from a Microsoft Teams Room](https://support.microsoft.com/office/host-or-attend-an-event-from-a-microsoft-teams-room-mtr-d7ff15e0-6516-4ebc-ae03-a2bdf58a4478)).

Learn's chat pages disagree with the roadmap's wording. [Manage chat in Microsoft Teams meetings](https://learn.microsoft.com/microsoftteams/manage-meeting-chat) and [Manage chat for Teams events](https://learn.microsoft.com/microsoftteams/manage-event-chat) both say Teams Rooms on Windows with a Pro licence can't use chat when they join as a presenter, and [Plan for Teams events](https://learn.microsoft.com/microsoftteams/plan-events) says Rooms see, but can't send chat messages. This page reports both and does not choose between them. The Teams Rooms release notes list no entry for this chat in the Windows section at the time of writing (November 2026), though the Android section lists a private chat for webinars and structured meetings.

The roadmap item is Rolling out, with a target of November CY2026, General Availability, and lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Microsoft also lists the feature for Teams Rooms on Android under roadmap item 574107, with the same status, target month and clouds; only the platform differs.

## Why it matters

Neither the roadmap item nor the Learn pages state a default or an admin step for this chat, so no source says existing behaviour changes. The practical issue is expectations. Organisers who read the roadmap may expect a room to take part in the Event Group conversation, while Learn describes a room joined as a presenter as unable to send chat.

The room console is shared, so the people who see backstage messages are whoever is in the room. Treat the room as a read-mostly participant until Microsoft reconciles its pages, brief organisers on that, and pilot before relying on it for event coordination.

## Risk assessment

**Data exposure**

- The Event Group is a private chat for organisers, co-organisers and presenters, and a Teams Rooms console is used by whoever is in the room. Backstage messages about speakers or attendees can be read by people physically present. During a pilot, check what appears on the front-of-room display as well as on the console.

**Security & identity**

- Organisers decide which rooms join as presenters: Learn lists admins as having "No control" over adding Teams Rooms on Windows with a Pro licence as a presenter. Access to the Event Group therefore follows the organiser's choice of room, so brief organisers on which rooms they add.

**Autonomy & actions**

- No change: the roadmap item describes a chat for people, with no agent or automated action.

**Change & support**

- Expect questions where a room shows the Event group but cannot send, because Learn and Microsoft Support describe room presenters as view-only or unable to chat.
- The roadmap lists GCC, GCC High and DoD, while Learn's events chat page lists "Chat isn't available on the GCC, GCCH, and DoD government clouds at this time" under limitations for meeting chat in events optimised for large audiences. That limitation is not worded as being about this feature; confirm before telling government-cloud users to expect it.

## Cost and licensing

The roadmap item says the feature is available in Teams Rooms Pro-licensed rooms. Learn's Teams Rooms release notes state that features marked with the Pro icon are available only with the Teams Rooms Pro licence, and the [Microsoft Teams Rooms licenses](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing) page lists Meeting chat under Teams Rooms Pro and not Basic. The same page says a feature that isn't available for a licence can't be used on Teams Rooms devices assigned that licence, so a room on a Basic licence would need Pro to use it.

That licences page lists no separate price or meter for this feature at the time of writing (November 2026). The indirect cost is admin time to check room licences and brief organisers and room users.

## Scope

- **Who**: organisers, co-organisers and presenters using a Teams Rooms on Windows device, in webinars and structured meetings, in Pro-licensed rooms.
- **Adding the room**: Learn says organisers can add a Teams Rooms on Windows device with a Pro licence as a presenter, and that to let a Room join as a presenter in meetings the organiser must set **Who can present** to **Organizer or co-organizer only** or **Specific people**. Rooms from external organisations must be added as external presenters.
- **Platform and clouds**: the roadmap lists Teams and Surface Devices and Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Microsoft Learn's release notes say Teams Rooms on Windows devices can join events as presenters.
- **Rollout**: Rolling out, targeted for November CY2026. Microsoft has not stated which Teams Rooms on Windows app version carries it.
- **Prerequisites**: a Teams Rooms Pro licence on the room, per the roadmap item.

## Governance guidance

### Before rollout

- Identify which Teams Rooms on Windows devices hold a Teams Rooms Pro licence, because only Pro-licensed rooms are in scope ([Microsoft Teams Rooms licenses](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing)).
- Review the Meeting chat policy your organisers hold (first row of the controls table) and decide whether a change is needed before rooms join webinars and structured meetings.
- Tell organisers that they add the room as a presenter and that **Who can present** must be **Organizer or co-organizer only** or **Specific people** for the room to join as one.

### At rollout

- Pilot with one Pro-licensed room in a webinar and a structured meeting, and record whether the room opens the Event group from the **Chat** dropdown and whether it can send messages.
- Compare the pilot result with Learn's statements that room presenters can't send chat, and tell organisers which one you observed.
- Check government-cloud tenants against the roadmap's GCC, GCC High and DoD listing before announcing the feature there.

### After rollout

- Collect help-desk reports from organisers and room users about the Event group and attendee chat views.
- Re-read the limitations in Manage chat in Microsoft Teams meetings and Manage chat for Teams events when the Teams Rooms release notes add a Windows entry for this chat.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether participants in meetings and events with up to 1,000 attendees can read and send chat (Meeting chat policy)</strong><br><small>User</small><br><small class="controls__note">General control: Learn does not say it governs the Event Group chat on Teams Rooms. Disabled turns meeting chat off for all participants.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting engagement › Meeting chat <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -MeetingChatEnabledType Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The **Meeting chat** setting is a general control. Learn describes it as controlling whether participants in your users' meetings can read and send chat messages, as a per-user and per-organizer policy that doesn't apply to channel meetings, and as covering meetings and events with up to 1,000 attendees. Setting it to **Off** (PowerShell value Disabled) turns meeting chat off for all participants, and organisers can't override it.

The page names the event group chat only in its description of events optimised for large audiences, and does not say whether this policy governs the Event Group chat on Teams Rooms, so test it in a pilot before relying on it. Learn lists admins as having "No control" over adding Teams Rooms on Windows as presenters; organisers make that choice per event.

## Open questions

- Can a Teams Rooms on Windows device joined as an organiser, co-organiser or presenter send messages in the Event Group chat, given that Learn and Microsoft Support describe room presenters as unable to send chat? Watch the Manage chat in Microsoft Teams meetings page and the Teams Rooms release notes.
- Which Teams Rooms on Windows app version introduces this chat? Watch the Teams Rooms release notes.
- Does the Meeting chat policy, or any other admin setting, govern the Event Group chat on Teams Rooms? Watch the Manage chat in Microsoft Teams meetings page.
- Will the chat be available in GCC, GCC High and DoD, which the roadmap lists, when Learn lists chat as unavailable there for events optimised for large audiences? Watch Message center and the Manage chat for Teams events page.
- What does this chat do on arrival if nobody acts? Neither the roadmap item nor Learn states a default; watch Message center.

<!-- rationale
risk: Low. It adds a chat to Pro-licensed rooms inside existing Teams meeting and event controls; the exposure is private backstage messages on a shared room console, and Learn describes room presenters as unable to send chat.
cost: Low. The roadmap says the feature is available in Teams Rooms Pro-licensed rooms and the Teams Rooms licences page lists no separate price or meter for it; the cost is the Pro licence the room needs, plus admin time.
impact: Low. Only organisers, co-organisers and presenters using a Pro-licensed Teams Rooms on Windows device in a webinar or structured meeting would notice the Event Group chat.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Android roadmap comparison / record: Roadmap item 574107 describes the equivalent capability for Teams Rooms on Android. | Found: "id": 574107, "title": "Microsoft Teams: Chat for organizers and presenters in structured meetings and webinars on Teams Rooms on Android" | Fix: Cite https://www.microsoft.com/microsoft-365/roadmap?id=574107 for the Android comparison and add that roadmap URL to sources.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist's Who can present setting has no corresponding controls-table row. | Found: Checklist: 'Who can present must be Organizer or co-organizer only or Specific people'. Controls table: only the Meeting chat policy is listed. | Fix: Remove the Who can present setting instruction from Governance guidance: Before rollout; retain the documented prerequisite in Scope. Do not add a controls row as part of this correction.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to take stock of room license assignments without a corresponding inventory or licensing control row. | Found: Checklist: 'Identify which Teams Rooms on Windows devices hold a Teams Rooms Pro licence'. Controls table: only the Meeting chat policy is listed. | Fix: Remove the license-inventory instruction from Governance guidance: Before rollout; retain the Teams Rooms Pro prerequisite in Scope and Cost and licensing. Do not add a controls row as part of this correction.
-->
