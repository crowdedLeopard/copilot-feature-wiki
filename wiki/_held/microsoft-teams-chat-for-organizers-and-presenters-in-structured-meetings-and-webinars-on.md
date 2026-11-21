---
title: "Microsoft Teams Rooms on Android: Event group chat for organisers and presenters in webinars and structured meetings"
slug: "microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on"
roadmapId: 574107
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Android in Pro-licensed rooms will give organisers, co-organisers and presenters the private Event group chat in webinars and structured meetings. Microsoft's notice says no admin configuration is required."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item says the feature is available in Teams Rooms Pro-licensed rooms. Microsoft Learn's Teams Rooms licence comparison lists Meeting chat under Teams Rooms Pro only. No separate price or meter is documented for this feature."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","teams-events","meeting-policy","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 574107"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574107"
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
  - title: "Plan for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/plan-meetings"
    kind: "learn"
  - title: "Teams Rooms on Android shows events-style meeting interface"
    url: "https://learn.microsoft.com/troubleshoot/microsoftteams/teams-rooms-and-devices/incorrect-events-style-meeting-interface"
    kind: "learn"
  - title: "Host or attend an event from a Microsoft Teams Room (MTR)"
    url: "https://support.microsoft.com/office/host-or-attend-an-event-from-a-microsoft-teams-room-mtr-d7ff15e0-6516-4ebc-ae03-a2bdf58a4478"
    kind: "docs"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "MC1519857: Microsoft Teams: Chat for organizers and presenters in structured meetings and webinars on Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1519857"
    kind: "message-center"
videos: []
related: ["microsoft-teams-external-presenter-support-for-event-group-chat","meeting-policy"]
controls:
  - governs: "Whether participants in meetings and events can read and send chat (Meeting chat policy)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting engagement > Meeting chat"
      docs: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -MeetingChatEnabledType Disabled -LobbyChat Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "General control: Microsoft has not confirmed it applies to the Event group or Planning group chat or to Teams Rooms on Android."
  - governs: "Whether a meeting or event uses a green room, which the notice says the chat tab depends on"
    scope: "other"
    ui: null
    api: null
    note: "Learn's Plan for Teams meetings page lists admins as having no control; organisers choose per meeting."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-17"
    note: "New briefing: Event group chat for Teams Rooms on Android presenters in webinars and structured meetings, rolling out from mid November 2026."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: cited Microsoft Support for the MTR console and view-only presenter chat, removed unsupported no-change claims, added LobbyChat Disabled to the policy command and aligned the cost and risk rationales."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Corrected after verification: added Learn's Windows-only presenter support caveat, reworded the government-cloud chat note, and updated rollout status to Rolling out."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 52
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "45997a76abb3f9c423cdd95f9d2cdfbb"
---

## What's changing

When a Teams Rooms on Android device acts as an organiser, co-organiser or presenter in a structured meeting or webinar, the people in the room get access to the private chat that organisers and presenters use to manage the event, known as the Event Group. They can also switch to a separate chat with attendees. The roadmap item says the feature is available in Teams Rooms Pro-licensed rooms.

Microsoft's notice MC1519857 (published 2026-10-21) adds detail. It applies when the meeting or event has green room enabled, and the private chat appears as a separate tab on the meeting chat pane, labelled "Event group" for events and "Planning group" for meetings. It describes the private chat as a place for backstage coordination between presenters. The notice gives General Availability (Worldwide) as beginning mid November 2026 and completing by late November 2026, and a Public Preview (Worldwide) that began in late August 2025 and is expected to complete by mid November 2026. It states that no Teams admin center or Teams Pro Management portal configuration changes are required to enable the feature.

The roadmap item is Rolling out with a target of November CY2026, and lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Microsoft Learn's Teams Rooms release notes already record the same capability for town halls on Android, in build 1449/1.0.96.2026249711 (September 2026). At the time of writing (November 2026) they list no equivalent entry for webinars or structured meetings.

Learn's [Plan for Teams events](https://learn.microsoft.com/microsoftteams/plan-events#reference) page still says only Teams Rooms on Windows with a Pro licence are officially supported to join meetings and events as presenters or attendees, conflicting with the Android support described by the roadmap and Android release notes.

## Why it matters

Nothing in the notice asks an administrator to switch the feature on: it says no configuration is required, so expect the tab to appear in Pro-licensed Android rooms as the rollout reaches your tenant, wherever an organiser has enabled green room. The change is small, but it puts a backstage channel on a shared room device, and the people who read it are whoever is in the room.

For service owners the work is communication and a decision: tell event organisers and room users what the tab is, and decide whether your Meeting chat policy settings need review before the rollout, because Microsoft has not said whether that policy covers this chat.

## Risk assessment

**Data exposure**

- The Event group or Planning group tab is a private chat for organisers, co-organisers and presenters, and the notice says people in the room get access to it. Anyone physically in the room can therefore read backstage messages through the room, which matters if presenters discuss attendees or unreleased content. Microsoft's release notes say the front-of-room display defaults to the attendee view for Webinar and Structured Meeting presenters; Microsoft Support documents event group chat on the MTR console ([Host or attend an event from a Microsoft Teams Room](https://support.microsoft.com/office/host-or-attend-an-event-from-a-microsoft-teams-room-mtr-d7ff15e0-6516-4ebc-ae03-a2bdf58a4478)).
- Microsoft Support says event group chat is view-only for MTRs joined as presenters ([Host or attend an event from a Microsoft Teams Room](https://support.microsoft.com/office/host-or-attend-an-event-from-a-microsoft-teams-room-mtr-d7ff15e0-6516-4ebc-ae03-a2bdf58a4478)). Learn lists a related limit for Teams Rooms on Windows with a Pro license, which can't use chat when they join meetings as a presenter.

**Security & identity**

- Access follows the role the room is given. Learn's troubleshooting page describes adding the Teams Rooms resource account as a co-organiser to get the events-style interface, so check who can add room accounts as co-organisers or presenters in your events.

**Autonomy & actions**

- No change: the roadmap item and the notice describe a chat tab, with no agent or automated action.

**Change & support**

- Learn says Teams Rooms for Android shows an events-style interface when **Who can present?** is restricted to **Organizer and co-organizers only** or **Specific people**. Expect help-desk questions about the different console layout and the two tab labels.
- The roadmap lists GCC, GCC High and DoD, but Learn's events chat page says chat isn't available on those clouds for events optimized for large audiences. That restriction appears under attendee meeting chat for events optimized for large audiences, rather than a statement about this Android presenter-chat feature; confirm before telling government-cloud users to expect the tab.

## Cost and licensing

The roadmap item says the feature is available in Teams Rooms Pro-licensed rooms. Learn's Teams Rooms Android release notes mark Pro-only features with an icon and mark the town hall version of this chat that way, and Learn's licence comparison lists Meeting chat under Teams Rooms Pro and not Basic ([Microsoft Teams Rooms licenses](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing)). The same page says a feature missing from a licence can't be used on devices assigned that licence, so Android rooms on Teams Rooms Basic would need a Pro licence to use it.

No separate meter, price or cap is documented for this feature at the time of writing (November 2026). The Pro licence price is not covered by the pages read. The indirect cost is admin time to brief organisers and room users.

## Scope

- **Who**: organisers, co-organisers and presenters using a Teams Rooms on Android device in structured meetings and webinars, in Pro-licensed rooms.
- **Prerequisite**: the notice says the meeting or event must have green room enabled.
- **Platform and clouds**: Android; the roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice's rollout schedule names Worldwide only.
- **Rollout**: Rolling out, targeted for November CY2026. The notice gives General Availability (Worldwide) as starting mid November 2026 and completing by late November 2026.
- **Roles to configure**: none required, per the notice. The Meeting chat policy sits in the Teams admin center.

## Governance guidance

### Before rollout

- Identify which Teams Rooms on Android devices hold a Teams Rooms Pro licence, because only Pro-licensed rooms are in scope.
- Review the Meeting chat policy assigned to your event organisers (first row of the controls table) and decide whether to test its effect on the new tab before rollout, since Microsoft has not said whether it applies.
- Tell event organisers that green room is their own meeting option and that rooms joining as organiser or presenter will show the Event group or Planning group tab.

### At rollout

- Pilot with one Android Pro room in a green-room-enabled webinar and a structured meeting; confirm the tab labels and the switch to the attendee chat.
- Check government-cloud tenants against the roadmap's GCC, GCC High and DoD listing before announcing the feature there.

### After rollout

- Collect help-desk reports about the events-style console interface and the two tab labels.
- Watch Message center post MC1519857 and the Teams Rooms on Android release notes for the build that lists webinar and structured meeting chat.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether participants in meetings and events can read and send chat (Meeting chat policy)</strong><br><small>User</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the Event group or Planning group chat or to Teams Rooms on Android.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting engagement › Meeting chat <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -MeetingChatEnabledType Disabled -LobbyChat Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a meeting or event uses a green room, which the notice says the chat tab depends on</strong><br><small class="controls__note">Learn's Plan for Teams meetings page lists admins as having no control; organisers choose per meeting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents one admin setting related to this chat, the **Meeting chat** meeting policy. It is a per-user and per-organizer policy that does not apply to channel meetings, and it is documented as controlling chat in meetings and in events with up to 1,000 attendees. Microsoft has not confirmed that it applies to the Event group or Planning group presenter chat or to Teams Rooms on Android; treat it as a general control until a page says so.

The notice says no Teams admin center or Teams Pro Management portal configuration is required to enable the feature. Learn's Plan for Teams meetings page lists admins as having "No control" over green room, which organisers choose per meeting. Microsoft Learn documents no policy parameter for green room at the time of writing (November 2026).

## Open questions

- Does the Meeting chat policy, or any other admin setting, govern the Event group and Planning group chat on Teams Rooms on Android? Watch the Manage chat in Microsoft Teams meetings page on Microsoft Learn.
- Can people in a Teams Rooms on Android room joined as an organiser or co-organiser send messages in the private chat? Watch the Teams Rooms release notes for the Android build that adds this feature.
- Will the feature be available in GCC, GCC High and DoD, which the roadmap lists, when Learn says attendee chat is not available on those clouds for events optimized for large audiences? Watch Message center and the Manage chat for Teams events page.
- Which Teams Rooms on Android build first includes chat for webinars and structured meetings? Learn currently lists the town hall version only.

<!-- rationale
risk: Low. The roadmap item and Microsoft's notice describe a chat tab for room presenters in meetings that already have a green room; no agent behaviour is described, and the one related admin control is the existing Meeting chat policy.
cost: Low. The feature is included for Teams Rooms Pro-licensed Android rooms; the expected indirect cost is admin time to brief organisers and room users.
impact: Low. Only people in a Teams Rooms on Android Pro room who join a green-room-enabled webinar or structured meeting as organiser, co-organiser or presenter will notice the extra chat tab.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Governance guidance: After rollout; Open questions / absence: At the time of writing, Learn's Android release notes list only the town hall version and no build or equivalent entry for webinar and structured-meeting chat. | Found: ### 1449/1.0.96.2026344105 (November 2026) Private chat for organizers and presenters for webinars and structured meetings | Fix: Replace the absence sentence in What's changing with 'Microsoft Learn also lists private chat for organisers and presenters in webinars and structured meetings in Android build 1449/1.0.96.2026344105 (November 2026).' Replace the After rollout bullet with 'Check the installed Android app version against build 1449/1.0.96.2026344105 (November 2026), which the Teams Rooms release notes list as introducing this chat.' Remove the final Open questions bullet: the cited release notes now answer it. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Learn lists a limitation that Windows Pro rooms can't use chat when they join meetings as presenters. | Found: Microsoft Teams Rooms on Windows with a Pro license can't use chat when they join meetings as a presenter. | Fix: Append to this sentence: 'However, Learn's Plan for Teams meetings and Plan for Teams events tables say Windows Rooms presenters can see, but cannot send, chat messages, consistent with Support's view-only guidance.' Both planning pages are already cited: https://learn.microsoft.com/microsoftteams/plan-meetings and https://learn.microsoft.com/microsoftteams/plan-events. | Source: https://learn.microsoft.com/microsoftteams/manage-meeting-chat
-->
