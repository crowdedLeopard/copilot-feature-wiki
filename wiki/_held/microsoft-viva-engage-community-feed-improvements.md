---
title: "Viva Engage: community feeds default to all posts, sorted by recent posts"
slug: "microsoft-viva-engage-community-feed-improvements"
roadmapId: 513275
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Engage community feeds will open on all posts, sorted by recent posts, with unread markers in both views. It is on by default for all users and Microsoft's notice says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Microsoft's notice MC1187781 describes a change to how existing community feeds display and names no licence or charge."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["viva-engage","user-experience","adoption","personal-settings"]
sources:
  - title: "Microsoft 365 Roadmap 513275"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=513275"
    kind: "roadmap"
  - title: "MC1187781: (Updated) Viva Engage: Community feeds improvements"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1187781"
    kind: "message-center"
  - title: "Microsoft Viva Engage Features service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-engage-features"
    kind: "learn"
  - title: "Manage Viva Engage experiences in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-viva-experiences"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Tenant-wide switch to keep the previous community feed default"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1187781 says the feature is on by default and describes no admin switch."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, using the roadmap record and Microsoft's notice MC1187781 as updated on 2026-10-29 (rollout moved to November 2026)."
version: 1
---

## What's changing

Viva Engage community feeds will open on all posts, sorted by recent posts, instead of on new content sorted by recent activity. The roadmap item describes the aim as aligning the community feeds default experience with expected user behaviours and supporting triage and content review for users who want to read every message in a community.

Microsoft's notice MC1187781 sets out the behaviour. Today, a community defaults to the "new" feed and "recent activity" sort if there is any new content (posts or replies), and falls back to "all" if there is none. Unread indicators exist only in the "new" feed. In the new experience, communities default to "all" and "recent posts", and unread indicators exist in both the "new" and "all" feeds.

The notice also introduces a sticky user preference. If someone changes the feed (new or all) or the sort order (recent posts or recent activity), that setting is kept across their communities. If someone picks "new" and the next community has no new content, that visit falls back to "all", but "new" stays the user's preference. The notice says the current system remains available as an option for people who prefer sorting by recent activity and filtering to new conversations only.

The roadmap record lists the item as In development, with a General Availability target of November CY2026, for Worldwide (Standard Multi-Tenant) on the web. Microsoft's notice says rollout begins in November 2026 (previously October) and is expected to finish by the end of November 2026 (previously end of October). Microsoft Learn does not describe this feature at the time of writing (November 2026), so behaviour on this page comes from the roadmap item and the notice.

## Why it matters

This is a change to a default that every Viva Engage user meets, so the effect is on habits and support questions rather than on data or spend. Community members who currently land on new content sorted by activity will land on the full post list sorted by recent posts. Expect questions such as why a busy thread no longer rises to the top, and why a community now opens on posts the user has already seen.

If nobody acts, the change still arrives and Microsoft's notice asks for no action. The practical task is communication: tell community admins and heavy users that the default moved, and where to switch back, so the change is not mistaken for a fault.

## Risk assessment

**Data exposure**

- No change identified: the notice describes a different default view of conversations users can already read, and lists no compliance considerations.

**Security & identity**

- No change identified: the notice describes no new permission, identity or sharing behaviour.

**Autonomy & actions**

- No change identified: nothing in the roadmap item or the notice involves an agent or automated action.

**Change & support**

- Opening on "all" and "recent posts" means a thread with new replies no longer moves up the feed on its own, because the default is no longer "recent activity". Community admins who rely on activity-ordering to surface replies may see lower reply visibility until members switch the sort.
- The sticky preference carries a choice from one community into others. A user who picks "new" in one community keeps "new" elsewhere, which can look inconsistent when a community with no new content shows "all" for that visit.
- The notice says the feature is ON by default and describes no admin switch. Microsoft Learn documents no tenant setting for it at the time of writing (November 2026).

## Cost and licensing

Microsoft has not published a licence, meter or price for this change. The roadmap item and Microsoft's notice MC1187781 describe a different default view for existing community feeds and name no licence requirement or charge. Microsoft's notice names the affected group as all Viva Engage users in the organisation.

The cost the sources support is indirect: communications to community admins and members, and help desk time while the new default settles in.

## Scope

Microsoft's notice MC1187781 says all Viva Engage users in the organisation are affected. The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and a General Availability release phase. No other cloud or platform is listed on the record.

The notice says rollout begins in November 2026 and is expected to finish by the end of November 2026, and gives no act-by date. Its stated end date is 2026-12-31. No prerequisite is stated in the record or the notice.

## Governance guidance

### Before rollout

- Tell community admins and your Viva Engage champions that community feeds will open on "all" and "recent posts" from November 2026, using the behaviour in Microsoft's notice MC1187781.
- Update any internal Viva Engage guidance or training that describes the "new" feed, the "recent activity" sort or the old fallback to "all".
- Name who answers feed questions, and brief them on the sticky preference so they can explain why a setting follows users between communities.

### At rollout

- Watch Message center for further changes to MC1187781, because the rollout window has already moved once, from October to November 2026.
- Tell users how to pick "new" or "recent activity" again, and that the choice is kept across their communities.

### After rollout

- Collect feedback from community admins on whether replies to older threads are still noticed under the "recent posts" default.
- Check that internal guidance matches the experience once the rollout completes at the end of November 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch to keep the previous community feed default</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1187781 says the feature is on by default and describes no admin switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft documents no tenant or community setting that keeps the previous default at the time of writing (November 2026), and the notice says the feature is on by default. The one choice the notice describes is the sticky user preference for feed (new or all) and sort order (recent posts or recent activity). It is set by each user in the feed and its path is not documented on Microsoft Learn.

The Teams admin centre setting for communities in Teams governs whether the experience appears in Teams. The roadmap item lists the Web platform only, and no Microsoft page confirms that setting applies to this feature.

## Open questions

- Will Microsoft add a tenant-level or community-level setting to keep "new" and "recent activity" as the default? Watch MC1187781 and the Viva Engage admin documentation on Microsoft Learn.
- Does the change reach communities viewed inside Microsoft Teams, or only the web experience the roadmap lists? Watch the roadmap item and MC1187781.
- Is the November 2026 rollout window firm, given it moved from October? Watch the roadmap item for status changes from In development.
- Is any licence needed beyond what Viva Engage users already hold? Microsoft has not published one for this change.

<!-- rationale
risk: Low. The change reorders how existing community conversations are shown and stays inside existing data and permission boundaries; Microsoft's notice identifies no compliance considerations.
cost: Low. The only cost the sources show is admin and communications time; Microsoft has not published a licence or meter for this change.
impact: High. It changes the default view of every community for all Viva Engage users in the organisation, so anyone who relied on the old default will notice.
-->
