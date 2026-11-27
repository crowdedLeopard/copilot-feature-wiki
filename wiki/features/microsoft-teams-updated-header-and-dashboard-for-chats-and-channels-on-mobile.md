---
title: "Microsoft Teams: redesigned header and dashboard for chats and channels on mobile"
slug: "microsoft-teams-updated-header-and-dashboard-for-chats-and-channels-on-mobile"
roadmapId: 567461
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams on iOS and Android gets a redesigned chat and channel header with a dashboard for channel details, people and pinned content. It arrives for all mobile users; no admin action is required, but help desk and training material need updating."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Part of the Teams mobile app. The Microsoft Teams service description says all supported subscription plans are eligible for access to the Teams mobile apps. No separate licence or charge for this redesign is published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["teams","mobile","channels","ios","user-experience","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 567461"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567461"
    kind: "roadmap"
  - title: "MC1467357: (Updated) Microsoft Teams: Updated header and dashboard for chats and channels on mobile"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1467357"
    kind: "message-center"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-organize-important-resources-in-chats-and-channels","microsoft-teams-see-more-messages-on-mobile","microsoft-teams-improved-organization-for-muted-and-meeting-chats"]
controls:
  - governs: "Whether users get the redesigned mobile chat and channel header and dashboard"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1467357 states no action is required. Microsoft Learn documents no Teams admin center setting or PowerShell parameter for this layout at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-27"
    note: "New briefing: redesigned Teams mobile chat and channel header and dashboard, rolling out with General Availability expected to complete by end of November 2026."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 36 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 36
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fc86dbfc44a72d0f99056bf83187ba29"
---

## What's changing

Teams on iOS and Android gets a redesigned header for chats and channels, with a lightweight dashboard that gathers key channel details, people and pinned content in one place. Microsoft Learn does not describe this feature yet, so what follows about its behaviour comes from the roadmap item and Microsoft's notice MC1467357.

According to MC1467357, users will see the redesigned header in chats and channels on mobile, the dashboard will give easier access to channel details, people and pinned content, and navigation across chats and channels will become more consistent with the Teams desktop experience. The notice states that no action is required, so the change reaches mobile users without an administrator doing anything.

The roadmap item is **Rolling out**, with a target of October CY2026, for Worldwide, GCC, GCC High and DoD, in Targeted Release and General Availability. MC1467357 (updated 3 November 2026 with a revised timeline) gives Targeted Release beginning in late September 2026, and General Availability (Worldwide, GCC, GCC High, DoD) beginning in early October 2026 and expected to complete by end of November 2026. The notice sets no act-by date.

## Why it matters

This is a change to the chat and channel screens of every mobile Teams user, not an optional feature. Users who have learned the current mobile navigation will find channel details, people and pinned content brought together in the new header and dashboard; expect the first sign of that in many organisations to be help desk calls asking where something went.

If nobody acts, the new layout simply appears as the rollout reaches each user. The real work is communication: screenshots and step-by-step guides that show the current mobile navigation will be out of date, which is why MC1467357 suggests notifying users, updating internal training and support documentation, and informing help desk teams.

## Risk assessment

**Data exposure**
- No change described: MC1467357 presents the dashboard as easier access to existing channel details, people and pinned content, and identifies no compliance considerations.

**Security & identity**
- No change described: neither the roadmap item nor MC1467357 mentions sign-in, permissions or identity.

**Autonomy & actions**
- No change: the dashboard is a navigation surface and nothing in the sources describes it acting on a user's behalf.

**Change & support**
- The header and dashboard replace the mobile layout users know, so training material, quick-reference guides and help desk scripts that show the current mobile chat and channel screens become out of date.
- Microsoft Learn documents no setting to keep the previous mobile layout at the time of writing (November 2026), so communication, not configuration, is the way to manage the change.

## Cost and licensing

**Licence.** The [Microsoft Teams service description](https://learn.microsoft.com/office365/servicedescriptions/teams-service-description) states that all supported subscription plans are eligible for access to the Teams web client, desktop clients and mobile apps. The redesign is part of the mobile app, and neither the roadmap item nor MC1467357 names a separate licence.

**Meter.** None is described for this change in the roadmap item or MC1467357.

**Indirect costs.** Time to update training and support documentation, brief the help desk and tell mobile users about the new layout, as MC1467357 suggests.

## Scope

- **Users:** MC1467357 states that users who access Microsoft Teams on mobile devices are affected.
- **Platforms:** Android and iOS, as the roadmap record lists them.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, as the roadmap record lists them.
- **Release phases:** Targeted Release and General Availability, as the roadmap record lists them.
- **Rollout:** Targeted Release from late September 2026; General Availability from early October 2026, expected to complete by end of November 2026 (MC1467357).
- **Prerequisites:** none are named in the roadmap item or MC1467357 beyond the Teams mobile app.

## Governance guidance

### Before rollout
- Identify training pages, quick-reference guides and help desk scripts that show the current Teams mobile chat or channel header, as MC1467357 recommends.
- Brief help desk and support teams that channel details, people and pinned content now sit in the new header and dashboard on iOS and Android.
- Check the new layout on a test iOS and Android device signed in to a user that has already received it, and capture screenshots for internal guidance.

### At rollout
- Notify mobile Teams users through your usual change channel that the chat and channel header on their phone has been redesigned.
- Replace screenshots of the old mobile header in internal documentation with the new layout.

### After rollout
- Review help desk tickets about Teams mobile navigation for recurring questions and add the answers to your support documentation.
- Watch MC1467357 in Message center for further timeline updates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users get the redesigned mobile chat and channel header and dashboard</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1467357 states no action is required. Microsoft Learn documents no Teams admin center setting or PowerShell parameter for this layout at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft documents this change as arriving for mobile users with no action required. Teams messaging policies include one mobile layout setting, **On mobile devices, display favorite channels above recent chats**, which moves favourite channels up the list; it does not govern the chat and channel header or dashboard. Managing this change is a matter of communication and support rather than configuration.

## Open questions

- Can an administrator delay or turn off the new mobile header and dashboard for some users? Watch MC1467357 and the Teams messaging policies page.
- Does the dashboard show pinned content and people exactly as the existing channel and chat views do, or does it surface anything users could not reach on mobile before? Watch MC1467357 and Microsoft Learn for a feature page.
- Will the rollout finish by end of November 2026 in every cloud, or will MC1467357 move the timeline again? Watch Message center.

<!-- rationale
risk: Low. A layout change in the Teams mobile app: Microsoft's notice MC1467357 describes no new data access and identifies no compliance considerations.
cost: Low. The mobile apps come with every supported Teams plan; the only cost is the time to update training, support documentation and help desk scripts.
impact: High. Every user who opens a chat or channel in Teams on iOS or Android sees the new header and dashboard once the rollout reaches them.
-->
