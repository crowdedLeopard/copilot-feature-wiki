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
tags: ["teams","user-experience","adoption","personal-settings","gcc","gcc-high","dod"]
sources:
  - title: "MC1269864: (Updated) Microsoft Teams: New chat sections for muted and meeting chats"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1269864"
    kind: "message-center"
  - title: "Microsoft Teams: Improved organization for muted and meeting chats"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559605"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Tenant-wide switch for the Muted chats and Meeting chats sections"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1269864 states there are no admin controls for these sections."
confidence: "low"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, covering the January 2027 rollout window in MC1269864."
version: 1
---

## What's changing

Microsoft Teams is adding two system sections to the chat and channels list: **Muted chats** and **Meeting chats**. Microsoft's notice MC1269864 says users can turn each section on or off and drag and drop the sections to reorder them. The Meeting chats section replaces the Meeting chats filter that was previously available at the top of the chat and channel list.

According to the notice, the Muted chats section is enabled by default and sits at the bottom of the chat list. Muted chats that are not in Favorites or in user-created sections move into it automatically, and unread chats continue to appear bold. The Meeting chats section is disabled by default and sits below the main chats list. Once a user enables it, meeting chats that are not in Favorites or user-created sections move into it; unread chats stay bold and contribute to badge counts. Chats in Favorites or user-created sections are not moved.

The roadmap item (ID 559605) has the status In development, with a target date of January CY2027, General Availability, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android, Desktop, iOS, Mac and Web. The roadmap description states that Microsoft temporarily rolled the feature back on July 20, 2026. MC1269864, updated 5 November 2026, now gives a rollout that begins in early January 2027 (previously early November 2026, and before that mid-October) and is expected to complete by late January 2027 (previously mid-November 2026). These are Microsoft's targets, not commitments.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so the behaviour above is the roadmap's and Microsoft's notice's description.

## Why it matters

This is a change to default behaviour for every Teams user, with no admin switch. From rollout, muted chats leave the main chat list for a section at the bottom unless the chat is in Favorites or a user-created section. Users who rely on muted chats appearing in order with other chats may think chats have disappeared, so expect helpdesk questions.

If nobody acts, the change still arrives on Microsoft's schedule. The work for administrators is communication: tell users the sections exist, that each can be turned off, and where to do it. Because the Meeting chats section replaces the Meeting chats filter, anyone who used that filter will need to switch to the section, which is off until they enable it.

## Risk assessment

**Data exposure**

- No change that Microsoft describes: the notice covers only how existing chats are grouped in the user's own chat list, and it does not describe new data access or sharing.

**Security & identity**

- No change that Microsoft describes: the notice does not mention identity, permissions or access changes, and it states that no compliance considerations were identified.

**Autonomy & actions**

- No change: the sections are rearranged by rules (muted, or a meeting chat when the user has enabled that section) and by the user's own drag and drop. Nothing acts on a user's behalf.

**Change & support**

- Muted chats move to a section at the bottom of the list by default, so users may not notice replies there. The notice says unread chats stay bold, but it does not say whether muted chats in the section contribute to badge counts.
- Users of the Meeting chats filter lose it when the section arrives. The section is off by default, so those users must enable it in Settings > Chats and channels, the location Microsoft's notice gives.
- The rollout has been rescheduled more than once and was rolled back on July 20, 2026 according to the roadmap item, so helpdesk guidance should be dated to the January 2027 window rather than earlier dates.

## Cost and licensing

No licence or meter is named in the roadmap item or in Microsoft's notice MC1269864, and Microsoft Learn has no page for this feature at the time of writing (November 2026). Licensing is not yet published; do not assume a charge or the absence of one on the strength of this silence.

The cost the sources show is indirect: communicating the change to users and briefing the helpdesk, as the notice suggests.

## Scope

Microsoft's notice says all Microsoft Teams users in Microsoft 365 tenants are affected, including Worldwide, GCC, GCC High and DoD. The roadmap lists Android, Desktop, iOS, Mac and Web.

The notice states that no admin action is required. Muted chats in Favorites or user-created sections stay where they are. Rollout is targeted to begin in early January 2027 and complete by late January 2027, per the notice updated 5 November 2026.

## Governance guidance

### Before rollout

- Tell users that Muted chats and Meeting chats sections are coming, that each can be turned on or off, and that the notice points them to Settings > Chats and channels.
- Brief the helpdesk that muted chats may appear in a separate section at the bottom of the chat list by default.
- Identify users of the Meeting chats filter and tell them it is replaced by the Meeting chats section, which is off by default.

### At rollout

- Watch MC1269864 in Message center for further timeline changes, since the rollout dates have moved and the feature was rolled back once.
- Check helpdesk tickets for reports of missing chats and point users to the Muted chats section.

### After rollout

- Review whether the guidance to users matches what they see, since Microsoft Learn does not yet document the sections.
- Re-check Microsoft Learn and Message center for any admin setting, because none is documented at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Muted chats and Meeting chats sections</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1269864 states there are no admin controls for these sections.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice MC1269864 states that there are no admin controls for these sections. The only control is the user's own setting in Settings > Chats and channels, so the table records the admin switch as not documented. Governance for this change therefore rests on communication, not configuration.

## Open questions

- Will Microsoft add a tenant-level admin setting for the sections, or will they stay user-controlled only? Watch MC1269864 and the Teams documentation on Microsoft Learn.
- What licence, if any, does the feature need? Not yet published.
- Do chats in the Muted chats section contribute to badge counts or notifications in the way the Meeting chats section does? The notice states this only for meeting chats.
- What caused the July 2026 rollback, and will the January 2027 rollout change the design? Watch MC1269864 for updates.

<!-- rationale
risk: Low. This is a change to how the chat list is arranged for users; Microsoft's notice describes no new data access, and the Muted chats section is on by default.
cost: Low. The only cost the sources show is admin and helpdesk time for communication; licensing is not yet published and neither the roadmap item nor Microsoft's notice mentions a charge.
impact: High. Microsoft's notice says all Teams users are affected and that muted chats move into a separate section by default, which changes what users see in their chat list.
-->
