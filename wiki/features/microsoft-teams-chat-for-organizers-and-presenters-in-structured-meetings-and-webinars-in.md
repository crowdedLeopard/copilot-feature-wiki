---
title: "Microsoft Teams: private chat for organisers and presenters in webinars and structured meetings (GCC High and DoD)"
slug: "microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-in"
roadmapId: 580452
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans a chat for organisers, co-organisers and presenters, separate from attendees, in Teams webinars and structured meetings in GCC High and DoD, targeted for December CY2026. No admin action is stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Teams events licensing overview says all eligible Teams licences include the foundational capabilities to create and run events. That page does not list the event group chat or name US Government plans, and no licence or price specific to this feature is published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-events","meeting-policy","ediscovery","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 580452"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580452"
    kind: "roadmap"
  - title: "Manage chat for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    kind: "learn"
  - title: "Manage chat in Microsoft Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Learn about retention for Teams"
    url: "https://learn.microsoft.com/purview/retention-policies-teams"
    kind: "learn"
  - title: "Release notes for Government Channel releases"
    url: "https://learn.microsoft.com/officeupdates/governmentchannel"
    kind: "learn"
videos: []
related: ["microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webin-557165","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-external-presenter-support-for-event-group-chat","meeting-policy","ediscovery"]
controls:
  - governs: "Tenant or policy switch for the event group chat itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no setting specific to the event group chat at the time of writing (November 2026)."
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
    note: "General control for webinars and meetings; Learn does not say whether it governs the separate event group chat. Disabled turns meeting chat off for all participants."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-13T23:01:18"
changes:
  - date: "2026-11-27"
    note: "New briefing: private organiser and presenter chat for Teams webinars and structured meetings in GCC High and DoD, targeted for December CY2026."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 43 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: narrowed the US Government absence to GCC High and DoD, added the legal-hold qualification to town hall chat storage, stated Microsoft's documented Teams chat storage for eDiscovery, and removed an unchecked checklist step."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 48
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d7d7a75a4dbb042b92406dd2d2c6b53b"
---

## What's changing

Microsoft plans to give organisers, co-organisers and presenters in Teams structured meetings and webinars a private chat of their own, separate from the attendees' chat. The roadmap item states that this chat is available before, during and after the event. This item covers Teams on desktop and Mac in the GCC High and DoD clouds.

Microsoft Learn already describes this chat, which it calls the event group chat, for events optimised for large audiences (town halls): organisers, co-organisers and presenters chat with each other in it, it is available before, during and after the event, and it is "a separate experience from the chat with attendees" ([Manage chat for Teams events](https://learn.microsoft.com/microsoftteams/manage-event-chat)). Learn does not yet describe the event group chat for webinars or structured meetings, or specifically for GCC High and DoD, so what follows about its behaviour there is the roadmap's description. The same Learn page lists, among its limits on attendee meeting chat in town halls, that "Chat isn't available on the GCC, GCCH, and DoD government clouds at this time"; that line is about attendee chat in town halls, not about this feature.

Microsoft has not stated whether the chat appears automatically for every webinar and structured meeting, or whether organisers or administrators can turn it off. The roadmap status is In development, with General Availability targeted for December CY2026.

## Why it matters

For agencies and contractors on GCC High and DoD, this gives event teams a back channel inside Teams in place of a side chat or email thread, and keeps attendees out of it. That is a support and adoption gain more than a risk. The governance question is records: Learn says town hall attendee chat is stored only in the organiser's mailbox for up to 30 days, unless the organiser's mailbox is on legal hold, in which case the mailbox keeps the messages for longer; that statement explicitly excludes the event group chat. Microsoft documents that Teams chat compliance copies are stored in hidden folders in participants' mailboxes and can be searched with eDiscovery tools ([Learn about retention for Teams](https://learn.microsoft.com/purview/retention-policies-teams)). Records and eDiscovery teams in regulated tenants will want to validate the planned GCC High and DoD experience in the tenant before the chat holds event planning content.

Microsoft has not stated what happens on arrival. No source says that existing webinar or meeting chat behaviour changes, so treat this as a new option for event teams and check it when it reaches the tenant.

## Risk assessment

**Data exposure**
- Messages in the event group chat stay among organisers, co-organisers and presenters, according to the roadmap item; attendees are not members. Microsoft documents that Teams chat compliance copies are stored in hidden folders in participants' mailboxes and can be searched with eDiscovery tools; the event-chat page excludes the event group chat from the separate town hall attendee-chat storage rule.

**Security & identity**
- The roadmap item does not mention external or guest presenters, so whether people from other organisations can join this chat in GCC High and DoD is an open question.

**Autonomy & actions**
- The roadmap describes private chat among organisers, co-organisers and presenters.

**Change & support**
- Organisers may confuse the private event group chat with the attendee chat and post content meant for one audience in the other. Briefing event teams before December CY2026 is the main mitigation.
- The Meeting chat policy governs chat in meetings and events with up to 1,000 attendees; Learn does not say whether it also governs the event group chat, so a policy set to **Off** may or may not remove it.

## Cost and licensing

Microsoft's [Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing) states that "All eligible Teams licenses include the foundational capabilities needed to create and run events", and lists events with up to 1,000 attendees among the foundational features. The page does not list the event group chat and does not name US Government plans. No licence, price or meter specific to this feature is published at the time of writing (November 2026).

Indirect costs are admin and communications time: briefing organisers and confirming how the chat is retained.

## Scope

- **Who:** organisers, co-organisers and presenters of Teams webinars and structured meetings, as the roadmap item states.
- **Clouds:** GCC High and DoD, as the roadmap record lists them.
- **Platforms:** Teams desktop and Mac.
- **Release phase:** General Availability, targeted for December CY2026; status In development.
- **Configuration role:** the Meeting chat policy is set in the Teams admin center; Learn names no role or setting specific to the event group chat.
- **Out of scope:** attendees, who keep the separate meeting chat.

## Governance guidance

### Before rollout
- Check the Meeting chat value in the meeting policies assigned to webinar organisers (Teams admin center > Meetings > Meeting policies), noting that Learn does not say whether it governs the event group chat.
- Brief event organisers and presenters that the event group chat is separate from attendee chat, so planning notes go in one and audience messages in the other.
- Ask your records or eDiscovery lead to validate the planned GCC High and DoD experience of the event group chat in the tenant once it arrives.

### At rollout
- Run a test webinar in the tenant with an organiser, a co-organiser and a presenter to see where the event group chat appears on desktop and Mac.
- Test whether a meeting policy with Meeting chat set to Off removes the event group chat for that organiser, and record the result.

### After rollout
- Watch the Manage chat for Teams events page for webinar and US Government coverage of the event group chat.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or policy switch for the event group chat itself</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no setting specific to the event group chat at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether participants in meetings and events with up to 1,000 attendees can read and send chat (Meeting chat policy)</strong><br><small>User</small><br><small class="controls__note">General control for webinars and meetings; Learn does not say whether it governs the separate event group chat. Disabled turns meeting chat off for all participants.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting engagement › Meeting chat <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -MeetingChatEnabledType Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents the Meeting chat policy as covering chat in meetings and events with up to 1,000 attendees, which includes webinars; it does not say whether the separate event group chat follows that policy. The policy is per-user and per-organiser and does not apply to channel meetings. Microsoft Learn documents no admin setting or PowerShell parameter specific to the event group chat at the time of writing (November 2026). The town hall attendee chat setting in events policies governs whether organisers can turn on chat for attendees, which Learn describes as a separate experience from the event group chat.

## Open questions

- Is the event group chat created automatically for every webinar and structured meeting, or does the organiser turn it on? Watch Message center and the Manage chat for Teams events page.
- Does the Meeting chat policy (Off, or In-meeting only) also apply to the event group chat?
- Once the event group chat reaches GCC High and DoD tenants, how does it behave there in practice? Validate the planned experience with a test event in the tenant.
- Can presenters from other organisations join the event group chat in GCC High and DoD?
- Will Microsoft add a setting to turn off the event group chat for some organisers?

<!-- rationale
risk: Low. The chat is among the people running an event, and Microsoft describes it as separate from the attendee chat; what remains is to validate in the tenant how the planned GCC High and DoD chat is retained and found in eDiscovery.
cost: Low. Microsoft's events licensing page says eligible Teams licences include the foundational event capabilities, and no separate licence, price or meter for this chat is published; the cost is briefing organisers and a compliance check.
impact: Low. Only organisers, co-organisers and presenters of webinars and structured meetings on Teams desktop and Mac would notice; attendees are not part of this chat.
-->
