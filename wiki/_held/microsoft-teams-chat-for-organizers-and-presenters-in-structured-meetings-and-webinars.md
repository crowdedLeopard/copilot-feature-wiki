---
title: "Microsoft Teams: private chat for organisers and presenters in webinars, structured meetings and town halls"
slug: "microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars"
roadmapId: 392328
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Organisers, co-organisers and presenters get a chat separate from attendees, before, during and after Teams events; town hall backroom chat becomes on by default. Brief event teams; no act-by date is set."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's notice MC1188222 says the town hall backroom chat default applies regardless of licence type, and the Teams events licensing overview says all eligible Teams licences include the foundational event capabilities. No licence or price specific to this chat is published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","teams-events","meeting-policy","ediscovery","retention","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 392328"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=392328"
    kind: "roadmap"
  - title: "MC1188222: (Updated) Microsoft Teams: Private chat for organizers and presenters in structured meetings, webinars, and town halls"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1188222"
    kind: "message-center"
  - title: "Manage chat for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    kind: "learn"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Manage chat in Microsoft Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Learn about retention for Microsoft Teams"
    url: "https://learn.microsoft.com/purview/retention-policies-teams"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps"
    kind: "docs"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "docs"
videos: []
related: ["microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-in","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webin-557165","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-external-presenter-support-for-event-group-chat","meeting-policy"]
controls:
  - governs: "Whether town hall organisers, co-organisers and presenters get backroom (event group) chat"
    scope: "user"
    ui: null
    api: null
    note: "MC1188222 says this policy can be turned off in the Teams admin center but gives no path; Learn's Plan for Teams events lists \"No control.\" for admins on the event group chat."
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
    note: "Covers webinar chat for organisers, presenters, co-organisers and attendees; Learn does not say whether the new separate chat follows it. The cmdlet reference says Disabled also needs LobbyChat set to disabled."
  - governs: "Whether town hall organisers can turn on attendee chat (not the event group chat)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience chat experience"
      docs: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallChatExperience None"
      docs: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    note: "Optimized is the default value. Governs attendee chat only, which Learn describes as a separate experience from the event group chat."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-27"
    note: "New briefing: private organiser and presenter chat for Teams webinars and structured meetings, and town hall backroom chat on by default, rolling out to Worldwide and GCC."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "c5a91031871529360a175cc972350e00"
---

## What's changing

Organisers, co-organisers and presenters in Teams structured meetings and webinars get a private chat of their own, separate from the attendees' chat and available before, during and after the event. Microsoft's notice [MC1188222](https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1188222) adds a second change under the same roadmap item: backroom chat in town halls is unified so that it behaves the same in every structured meeting, where today it varies with whether streaming chat is on and whether the organiser has a Teams Premium licence.

Microsoft Learn already describes this chat for events optimised for large audiences (town halls), where it is called the event group chat: organisers, co-organisers and presenters chat with each other in it, it is available before, during and after the event, and it is "a separate experience from the chat with attendees" ([Manage chat for Teams events](https://learn.microsoft.com/microsoftteams/manage-event-chat)). Learn does not yet describe the separate chat for webinars and structured meetings, so what follows about those is the roadmap item and the notice.

The notice says the backroom chat default will be ON for all town halls, regardless of streaming chat availability or licence type. Existing town halls adopt the new policy once their meeting options are updated, and town halls without a Teams Premium licence where backroom chat was off switch to on after rollout and a meeting options update. If an administrator turns the backroom chat policy off, any already scheduled town hall that had backroom chat on loses it once its meeting options are updated.

The roadmap status is Rolling out, targeted for October CY2026, for General Availability and Targeted Release. MC1188222 (updated 1 September 2026) gives Targeted Release from mid-October 2026 to late October 2026, and General Availability (Worldwide and GCC) from late October 2026, expected to complete by late November 2026. The notice sets no act-by date.

## Why it matters

This moves the back-channel event teams already improvise (a side Teams chat, a call, email) into the event itself, and keeps attendees out of it. Because the town hall default becomes on for every licence type, organisers of town halls without Teams Premium will find a chat they did not have before, and helpdesk should expect questions about which chat attendees can see. Records teams have a narrower question: Learn excludes the event group chat from the rule that keeps town hall attendee chat in the organiser's mailbox for up to 30 days, and does not say where the event group chat is stored instead.

If nobody acts, the notice says town hall backroom chat will be on by default once meeting options are updated, and the chat for webinars and structured meetings arrives with the rollout. The one decision is whether any group of town hall organisers should not have backroom chat; the notice says that is a Teams admin center policy, but Learn does not yet document where it sits.

## Risk assessment

**Data exposure**
- Event planning content (running orders, speaker notes, last-minute changes) now lives in the event group chat. Learn excludes it from the 30-day organiser-mailbox rule for town hall attendee chat and does not say where it is stored; Microsoft documents that Teams chat data is kept in a hidden folder in the mailbox of each user included in the chat, so test with an eDiscovery search before relying on it.
- Presenters who post in the wrong chat could show backstage messages to attendees; the two chats are separate, which limits but does not remove this.

**Security & identity**
- No change documented: the chat is among the event's organisers, co-organisers and presenters. Whether external presenters can join is covered by a separate roadmap item ([external presenters in event group chat](/features/microsoft-teams-external-presenter-support-for-event-group-chat/)).

**Autonomy & actions**
- No change: the feature is person-to-person chat and takes no actions of its own.

**Change & support**
- Town halls without Teams Premium switch backroom chat on after rollout and a meeting options update, per MC1188222; organisers will see a new chat without asking for it.
- Turning the backroom chat policy off later removes it from already scheduled town halls once their options are updated, per the notice, which could surprise event teams mid-preparation.

## Cost and licensing

Microsoft's notice MC1188222 says the unified town hall backroom chat default applies "regardless of streaming chat availability or license type". The [Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing) states that all eligible Teams licences include the foundational capabilities needed to create and run events; that page does not list the event group chat by name. No licence, price or meter specific to this chat is published at the time of writing (November 2026).

Indirect costs are admin and communications time: briefing organisers, presenters and helpdesk, and an eDiscovery test of where the chat is kept.

## Scope

- **Who:** organisers, co-organisers and presenters of Teams structured meetings, webinars and town halls. Attendees keep their own, separate chat.
- **Clouds:** Worldwide (Standard Multi-Tenant) and GCC, as the roadmap record lists them.
- **Platforms:** the roadmap record lists Desktop and Mac; MC1188222 says the change applies to Teams for Windows desktop, Mac desktop, web, iOS/Android, MTR-W and MTR-A devices.
- **Release phase:** General Availability and Targeted Release; status Rolling out, target October CY2026.
- **Configuration:** the notice says backroom chat can be turned off in the Teams admin center; see Governance controls for what Learn documents.

## Governance guidance

### Before rollout
- Tell event organisers, co-organisers and presenters that the private chat is separate from attendee chat, so planning notes go in one and audience messages in the other.
- Brief helpdesk staff that town halls without Teams Premium gain backroom chat by default after rollout, as MC1188222 describes.
- Check the Meeting chat value in the meeting policies assigned to webinar organisers (Teams admin center > Meetings > Meeting policies), remembering Learn does not say whether it governs the new separate chat.

### At rollout
- Run a test webinar and a test town hall with an organiser, a co-organiser and a presenter to see where the private chat appears and whether attendees can see it.
- Decide whether any town hall organisers should not have backroom chat before turning the policy off, since the notice says scheduled town halls then lose it on their next options update.

### After rollout
- Run an eDiscovery content search for a test event group chat to confirm where its messages are kept and who can find them.
- Watch the Manage chat for Teams events page for webinar coverage of the separate chat and a documented backroom chat setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether town hall organisers, co-organisers and presenters get backroom (event group) chat</strong><br><small>User</small><br><small class="controls__note">MC1188222 says this policy can be turned off in the Teams admin center but gives no path; Learn's Plan for Teams events lists &quot;No control.&quot; for admins on the event group chat.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether participants in meetings and events with up to 1,000 attendees can read and send chat (Meeting chat policy)</strong><br><small>User</small><br><small class="controls__note">Covers webinar chat for organisers, presenters, co-organisers and attendees; Learn does not say whether the new separate chat follows it. The cmdlet reference says Disabled also needs LobbyChat set to disabled.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting engagement › Meeting chat <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -MeetingChatEnabledType Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether town hall organisers can turn on attendee chat (not the event group chat)</strong><br><small>User</small><br><small class="controls__note">Optimized is the default value. Governs attendee chat only, which Learn describes as a separate experience from the event group chat.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience chat experience <a href="https://learn.microsoft.com/microsoftteams/manage-event-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallChatExperience None</code> <a href="https://learn.microsoft.com/microsoftteams/manage-event-chat" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice and Microsoft Learn disagree on the town hall control. MC1188222 says "If you want to disable backroom chat, adjust the policy in the Teams admin center", without naming the policy or path. Learn's [Plan for Teams events](https://learn.microsoft.com/microsoftteams/plan-events) reference table lists the admin control for the event group chat in events optimised for large audiences as "No control." Microsoft Learn documents no admin path or PowerShell parameter for backroom chat at the time of writing (November 2026); the Set-CsTeamsEventsPolicy reference lists -TownhallChatExperience, which governs attendee chat, and no parameter for the event group chat.

For events with up to 1,000 attendees, the same reference table says administrators can manage whether organisers, presenters, co-organisers and attendees can read and write chat messages through the Meeting chat policy. That policy is per user and per organiser and does not apply to channel meetings; Learn does not say whether the new separate chat for webinars follows it. The town hall attendee chat setting governs attendee chat only, which Learn describes as separate from the event group chat.

## Open questions

- Where in the Teams admin center is the backroom chat policy that MC1188222 says administrators can turn off, and is there a PowerShell parameter for it? Watch the Manage chat for Teams events page.
- Does the Meeting chat policy (Off, or In-meeting only) also govern the new separate chat in webinars and structured meetings?
- Where are event group chat messages stored, and are they found by an eDiscovery search of each participant's mailbox?
- Does the separate chat for webinars appear for every webinar automatically, or does the organiser choose it? Watch Message center for updates to MC1188222.

<!-- rationale
risk: Low. The chat is among the people running an event and Microsoft describes it as separate from attendee chat; the main change is that town hall backroom chat turns on by default where it was off.
cost: Low. Microsoft's notice says the town hall default applies regardless of licence type, and no separate licence, price or meter is published; the cost is briefing event teams and helpdesk.
impact: Medium. Organisers, co-organisers and presenters of webinars, structured meetings and town halls notice a new chat, and town halls without Teams Premium gain backroom chat by default.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Risk assessment: Data exposure; Open questions / absence: Microsoft Learn does not say where event group chat messages are stored instead. | Found: All Microsoft Teams 1:1 or group chats are journaled through to the respective users' mailboxes. | Fix: Replace the repeated storage-absence wording with: "The Manage chat for Teams events article excludes event group chat from its attendee-chat storage rule. Microsoft's general Teams group-chat documentation places compliance copies in participants' Exchange Online mailboxes." Cite https://learn.microsoft.com/purview/edisc-search-teams. Replace the storage open question with "Can our compliance staff retrieve a test event group chat from its participants' mailboxes?" Keep the proposed tenant test. | Source: https://learn.microsoft.com/purview/edisc-search-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / record: External presenter support for event group chat is covered by a separate roadmap item. | Found: "id": 573706; "title": "Microsoft Teams: External presenter support for event group chat"; "description": "Event group chat, the private chat for organizers, co-organizers, and presenters in an event or structured meeting, will support external presenters." | Fix: Add Microsoft 365 Roadmap 573706 to sources at https://www.microsoft.com/microsoft-365/roadmap?id=573706; the linked wiki briefing is not evidence for this record fact.
- [supported, minor] controls[2].api; controls[2].governs; Governance controls / command: Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallChatExperience None prevents organisers from enabling attendee chat. | Found: To turn off chat for attendees in events optimized for large audiences, run the following command: Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallChatExperience None | Fix: Keep the call. Add to controls[2].note: "The Set-CsTeamsEventsPolicy reference marks the events policy as preview." Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps. | Source: https://learn.microsoft.com/microsoftteams/manage-event-chat
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks for an eDiscovery content search, but the controls table has no eDiscovery search row. | Found: Checklist: "Run an eDiscovery content search". Table: "Whether town hall organisers, co-organisers and presenters get backroom (event group) chat"; "Meeting chat policy"; "Whether town hall organisers can turn on attendee chat (not the event group chat)". | Fix: Remove the After rollout checklist bullet beginning "Run an eDiscovery content search"; it names a control absent from the table. Retain the existing eDiscovery test advice in Risk assessment rather than adding a control row.
- [supported, minor] controls[2].note / default: Optimized is the town hall attendee chat policy's default value. | Found: Optimized | This is the default value. Organizers with this policy can turn on chat for their attendees. | Fix: Replace "Optimized is the default value" in the note with "Manage chat for Teams events gives Optimized as the default; the Set-CsTeamsEventsPolicy reference lists None as the parameter default." Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps. | Source: https://learn.microsoft.com/microsoftteams/manage-event-chat
- [supported, minor] controls[0].scope / applicability: The town hall backroom chat admin policy is user-scoped. | Found: Tenant policies are configurations that can be assigned to specific users or groups of users. A policy consists of properties with one of the following scopes: per-organizer, per-user, or both. | Fix: Cite https://learn.microsoft.com/azure/communication-services/concepts/interop/guest/teams-administration for the general user-assigned Teams policy model; keep the existing note that the backroom policy itself is not named or located by Learn. | Source: https://learn.microsoft.com/azure/communication-services/concepts/interop/guest/teams-administration
-->
