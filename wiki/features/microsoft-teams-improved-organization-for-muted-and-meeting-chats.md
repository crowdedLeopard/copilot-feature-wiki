---
title: "Microsoft Teams: new chat sections for muted and meeting chats"
slug: "microsoft-teams-improved-organization-for-muted-and-meeting-chats"
roadmapId: 559605
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams adds a Muted chats section (on by default) and a Meeting chats section (off by default) to the chat list. Users control both; Microsoft says there are no admin controls. Rollout is targeted for January 2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor Microsoft's notice MC1269864 names a licence or meter for the new sections."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","user-experience","adoption","personal-settings","microsoft-graph","gcc","gcc-high","dod"]
sources:
  - title: "MC1269864: (Updated) Microsoft Teams: New chat sections for muted and meeting chats"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1269864"
    kind: "message-center"
  - title: "Microsoft Teams: Improved organization for muted and meeting chats"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559605"
    kind: "roadmap"
  - title: "teamworkSection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/teamworksection?view=graph-rest-beta"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Tenant-wide switch for the Muted chats and Meeting chats sections"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1269864 states there are no admin controls for these sections; users manage them in Settings > Chats and channels."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, covering the January 2027 rollout window in MC1269864."
  - date: "2026-11-16"
    note: "Corrected the claim that Learn has nothing on these sections: Graph beta lists MutedChats and MeetingChats, and After rollout now compares behaviour with the notice."
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 51
  unconfirmed: 1
  contradicted: 0
  attempts: 0
---

## What's changing

Microsoft Teams is adding two system sections to the chat and channels list: **Muted chats** and **Meeting chats**. Microsoft's notice MC1269864 says users can turn each section on or off and drag and drop the sections to reorder them. The Meeting chats section replaces the Meeting chats filter that was previously available at the top of the chat and channel list.

According to the notice, the Muted chats section is enabled by default and sits at the bottom of the chat list. Muted chats that are not in Favorites or in user-created sections move into it automatically, and unread chats continue to appear bold. The Meeting chats section is disabled by default and sits below the main chats list. Once a user enables it, meeting chats that are not in Favorites or user-created sections move into it; unread chats stay bold and contribute to badge counts. Chats in Favorites or user-created sections are not moved.

The roadmap item (ID 559605) has the status In development, with a target date of January CY2027, General Availability, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android, Desktop, iOS, Mac and Web. The roadmap description says Microsoft temporarily rolled the feature back on July 20, 2026. MC1269864, updated 5 November 2026, gives a rollout that begins in early January 2027 (previously early November 2026, and before that mid-October) and is expected to complete by late January 2027 (previously mid-November 2026). These are Microsoft's targets, not commitments.

Microsoft Learn has no page that describes this feature's behaviour at the time of writing (November 2026), so the behaviour above is the roadmap's and the notice's description. Learn's Microsoft Graph beta reference for the teamworkSection resource lists `MutedChats` and `MeetingChats` among the system-defined section names; that is a preview API reference, not a description of the rollout.

## Why it matters

This changes default behaviour for every Teams user, and administrators have no switch for it. From rollout, muted chats leave the main chat list for a section at the bottom unless the chat is in Favorites or a user-created section. Users who expect muted chats to sit in order with other chats may think chats have disappeared, so expect helpdesk questions.

If nobody acts, the change still arrives on Microsoft's schedule. The work for administrators is communication: tell users the sections exist, that each can be turned off, and where to do it. Because the Meeting chats section replaces the Meeting chats filter, anyone who used that filter has to switch to the section, which is off until they enable it.

## Risk assessment

**Data exposure**

- No change that Microsoft describes: the notice covers only how existing chats are grouped in the user's own chat list, and it does not describe new data access or sharing.

**Security & identity**

- No change that Microsoft describes: the notice does not mention identity, permissions or access changes, and it states that no compliance considerations were identified.

**Autonomy & actions**

- No change: chats are moved by rules (muted, or a meeting chat once the user has enabled that section) and by the user's own drag and drop. Nothing acts on a user's behalf.

**Change & support**

- Muted chats move to a section at the bottom of the list by default, so users may not notice replies there. The notice says unread chats stay bold; it does not say whether muted chats in the section contribute to badge counts.
- Users of the Meeting chats filter lose it when the section arrives. The section is off by default, so those users must enable it in Settings > Chats and channels, the location the notice gives.
- The rollout has been rescheduled more than once and the roadmap description records a rollback on July 20, 2026, so helpdesk guidance should use the January 2027 window, not earlier dates.

## Cost and licensing

No licence or meter is named in the roadmap item or in Microsoft's notice MC1269864, and Microsoft Learn has no feature page that states one at the time of writing (November 2026). Licensing is not yet published; do not assume a charge, or the absence of one, from that silence.

The cost the sources show is indirect: communicating the change to users and briefing the helpdesk, as the notice suggests.

## Scope

Microsoft's notice says all Microsoft Teams users in Microsoft 365 tenants are affected, including Worldwide, GCC, GCC High and DoD. The roadmap lists Android, Desktop, iOS, Mac and Web.

The notice states that no admin action is required. Muted chats in Favorites or user-created sections stay where they are. Rollout is targeted to begin in early January 2027 and complete by late January 2027, per the notice updated 5 November 2026. The notice gives no act-by date.

## Governance guidance

### Before rollout

- Tell users that Muted chats and Meeting chats sections are coming, that each can be turned on or off, and that the notice points them to Settings > Chats and channels.
- Brief the helpdesk that muted chats may appear in a separate section at the bottom of the chat list by default.
- Identify users of the Meeting chats filter and tell them it is replaced by the Meeting chats section, which is off by default.

### At rollout

- Watch MC1269864 in Message center for further timeline changes, since the dates have moved and the roadmap records a rollback.
- Check helpdesk tickets for reports of missing chats and point users to the Muted chats section.

### After rollout

- Compare what users see with the behaviour in MC1269864 (defaults, section positions, badge counts) and update your guidance where it differs.
- Monitor the roadmap item and Microsoft Learn for an admin setting; none is documented at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Muted chats and Meeting chats sections</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1269864 states there are no admin controls for these sections; users manage them in Settings &gt; Chats and channels.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice MC1269864 states that there are no admin controls for these sections, and Microsoft Learn documents no tenant-level setting for them at the time of writing (November 2026). The only control the notice describes is the user's own setting in Settings > Chats and channels, so governance rests on communication, not configuration.

Learn's Microsoft Graph beta teamworkSection reference documents per-user section operations and says system-defined sections, which include `MutedChats` and `MeetingChats`, can't be deleted and only their **sortType** can be updated. That is a preview API on a user's own section list; it is not a tenant switch to enable or disable the sections.

## Open questions

- Will Microsoft add a tenant-level admin setting for the sections, or will they stay user-controlled only? Watch MC1269864 and the Teams documentation on Microsoft Learn.
- What licence, if any, does the feature need? Not yet published; watch the roadmap item and Learn.
- Do chats in the Muted chats section contribute to badge counts or notifications in the way the Meeting chats section does? The notice states this only for meeting chats.
- Why was the feature rolled back on July 20, 2026, and will the January 2027 rollout change the design? Watch MC1269864 for updates.

<!-- rationale
risk: Low. The change only regroups chats the user already sees, and Microsoft's notice MC1269864 describes no new data access; Muted chats is on by default, so the exposure left at default is a support one.
cost: Low. The only cost the sources show is admin and helpdesk time to communicate the change; no licence or meter is named in the roadmap item or MC1269864, and licensing is not yet published.
impact: High. MC1269864 says all Teams users are affected and that muted chats move out of the main list into a separate section by default, which changes what every user sees.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Chats are moved by the user's own drag and drop. | Found: Searched: Teams organize chat move chats drag drop sections; Teams chat drag sections organize. Read MC1269864, teamworkSection and Learn search excerpts. The notice describes dragging sections; no passage read establishes dragging chats for these sections. | Fix: Replace the bullet with: 'No change: chats are grouped automatically according to the muted-chat and meeting-chat rules described above; users can drag and drop the sections to reorder them.' MC1269864 documents section reordering, not moving chats by drag and drop.
-->
