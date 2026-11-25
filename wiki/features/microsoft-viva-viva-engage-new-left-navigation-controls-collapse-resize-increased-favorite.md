---
title: "Viva Engage: collapse and resize the left navigation, and favourite and reorder more communities"
slug: "microsoft-viva-viva-engage-new-left-navigation-controls-collapse-resize-increased-favorite"
roadmapId: 568763
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Engage users on the web, in Teams and in Outlook can collapse and resize the left navigation and reorder favourite communities. Microsoft says no admin action is needed; the favourites limit is stated three ways."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Viva Engage Core or Yammer enterprise comes with Microsoft 365. If Viva Engage licensing is enforced, each user needs a Microsoft 365 license and a Viva Engage Core Service Plan; if it is not enforced, users can still access the Core experience. Microsoft has not published a licence requirement specific to these navigation controls."
audiences: ["service-owner","change-adoption","end-user"]
tags: ["viva-engage","user-experience","personalisation","teams","outlook","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 568763"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568763"
    kind: "roadmap"
  - title: "MC1470424: (Updated) Microsoft Viva Engage: New left navigation controls for collapsing, resizing, and managing favorites"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1470424"
    kind: "message-center"
  - title: "Viva Engage setup requirements"
    url: "https://learn.microsoft.com/viva/engage/setup"
    kind: "learn"
  - title: "Limits in Viva Engage for Microsoft 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/limits-viva-engage"
    kind: "learn"
  - title: "Viva Engage service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/viva-engage-service-description/viva-engage-service-description"
    kind: "learn"
  - title: "Use the Microsoft Graph API to work with Viva Engage"
    url: "https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0"
    kind: "learn"
  - title: "Overview of the Viva Engage admin center"
    url: "https://learn.microsoft.com/viva/engage/eac-overview"
    kind: "learn"
videos: []
related: ["microsoft-viva-engage-community-feed-improvements"]
controls:
  - governs: "Tenant-wide switch for the Viva Engage left navigation controls"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026). MC1470424 states that no admin configuration is required."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item; reports that the roadmap (50), MC1470424 (unlimited) and the Microsoft 365 limits page (10) give different favourites limits."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: removed the unsupported sentence that no spend cap or budget control applies; the documented-meter gap is unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
  - date: "2026-11-24"
    note: "MC1470424 was updated on 24 November 2026: rollout is now expected to complete by early January 2027 (previously end of October 2026), and the notice's end date is 15 February 2027."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Correction: licensing is now stated from the Viva Engage setup requirements page (Core comes with Microsoft 365; Core Service Plan needed where licensing is enforced); the rest is unchanged."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 58 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8c4aaebe361a3ba345e4072e8e1caeb2"
---

## What's changing

Viva Engage is adding controls to the left navigation pane. According to the roadmap item and Microsoft's notice MC1470424, users can collapse the pane, resize its width, favourite more communities and drag to reorder the communities in their Favorites section. The roadmap item says none of this changes which destinations appear in the navigation.

The roadmap item says the controls apply to every surface that has the Engage left navigation menu: Viva Engage on the web, and the Engage app in Teams and in Outlook. MC1470424 adds that preferences persist across browsers and devices and that keyboard and screen reader support are included. Microsoft Learn has no page for these controls at the time of writing (November 2026), so what follows about behaviour is the roadmap item's and the notice's description.

The sources disagree on the favourites limit. The roadmap item says users can favourite up to 50 communities. MC1470424, last updated 24 November 2026, says users can favourite an unlimited number of communities, increased from the previous limit of 10. The Microsoft 365 limits page for Viva Engage still lists the number of favourite communities as 10 at the time of writing. This briefing reports all three and does not choose between them.

The roadmap record gives the status as Rolling out, with a target of August CY2026, release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud, and Desktop and Web platforms. The 24 November 2026 update to MC1470424 moves the timeline: Microsoft says rollout has started and it expects to complete by early January 2027, previously the end of October 2026. The notice sets no act-by date.

## Why it matters

For a service owner this is a support and communication matter, not a configuration one. Microsoft's notice says no admin configuration is required and that these capabilities are user initiated, with no visible changes unless users choose to use them. Nothing in the sources describes a change to existing navigation for people who ignore the new controls.

The practical effects are on helpdesk and training. Screenshots and instructions that describe a fixed-width left navigation, or a ten-favourite limit, may stop matching what some users see, and the rollout window has moved to early January 2027, so users may see the controls at different times. Because the favourites limit is stated three ways, check the current limit with a pilot user before quoting a number in guidance.

## Risk assessment

**Data exposure**

- No change described: the roadmap item and MC1470424 say navigation destinations and community membership are unchanged, and neither describes new data access.

**Security & identity**

- No change described: Microsoft's notice lists no new permission, role or sign-in behaviour. MC1470424 says preferences persist across browsers and devices, so a user's collapsed state, width and favourites order follow them between sessions.

**Autonomy & actions**

- No agent or automated action is described. Collapse, resize, favouriting and reordering are actions a user takes, which matches MC1470424's statement that the capabilities are user initiated.

**Change & support**

- Helpdesk scripts and training material that describe the Engage left navigation may no longer match what users see, so MC1470424 recommends informing support teams and updating internal documentation.
- Community managers and power users with many communities may notice the favourites change first. Confirm the limit your users actually see, because the roadmap item (50), MC1470424 (unlimited) and the Microsoft 365 limits page (10) differ.
- The Viva Engage service description says users within the same network may have varying experiences due to testing and that customers cannot opt out of A/B testing, so two users in one tenant may not see the same navigation at the same time.

## Cost and licensing

Viva Engage Core or Yammer enterprise comes with Microsoft 365. If Viva Engage licensing is enforced, each user needs a Microsoft 365 license and a Viva Engage Core Service Plan; if it is not enforced, users can still access the Core experience ([Viva Engage setup requirements](https://learn.microsoft.com/viva/engage/setup)). Microsoft has not published a licence requirement specific to these navigation controls. MC1470424 says Viva Engage users who access Viva Engage on the web, including in Teams and Outlook, are affected, and it names no licence or charge. The Viva Engage service description refers readers to the Microsoft 365 plan comparison pages for the subscriptions that enable Viva Engage and names nothing specific to these controls.

The cost the sources do show is indirect: time for helpdesk briefing, community manager communication and updates to internal training material, all recommended in MC1470424.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop and Web as platforms, with release phase General Availability. It does not list GCC, GCC High or DoD; the record does not say whether those clouds receive the change.

MC1470424 names the affected surfaces as Viva Engage on the web, the Viva Engage app in Microsoft Teams and the Viva Engage app in Microsoft Outlook, and says the affected audience is Viva Engage users on those surfaces. It states no prerequisite and says no admin configuration is required. Its rollout schedule says rollout has started and Microsoft expects to complete by early January 2027, and the notice gives an end date of 15 February 2027.

## Governance guidance

### Before rollout

- Confirm in a pilot user's Viva Engage which favourites limit applies, then record it for helpdesk use, because the roadmap item, MC1470424 and the Microsoft 365 limits page give different figures.
- Brief the helpdesk team on the new collapse, resize and reorder behaviour, as MC1470424 recommends.
- Identify community managers and power users who work with many communities and tell them about the favourites change.

### At rollout

- Check whether the controls are visible on Viva Engage on the web, in Teams and in Outlook, since Microsoft expects rollout to complete by early January 2027 and the roadmap status is Rolling out.
- Send users a short note on the new controls if your communications plan covers Viva Engage, as MC1470424 suggests.

### After rollout

- Update internal training materials and screenshots that show the Engage left navigation, as MC1470424 recommends.
- Watch the roadmap item and Message center for a corrected favourites limit and a final completion date.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Viva Engage left navigation controls</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026). MC1470424 states that no admin configuration is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant setting or API for these left navigation controls at the time of writing (November 2026), and MC1470424 states that no admin configuration is required. The row above records that gap. The controls are user-level preferences, so the available lever is communication to users rather than a policy.

## Open questions

- What is the favourites limit users actually get: 50 (roadmap item), unlimited (MC1470424) or 10 (Microsoft 365 limits page for Viva Engage)? Watch the roadmap item and Message center.
- Has rollout finished? MC1470424 now expects completion by early January 2027, but the roadmap target is August CY2026 and its status is Rolling out. Watch Message center for further timeline changes.
- Does the change reach the US Government clouds? The roadmap record lists only Worldwide (Standard Multi-Tenant).
- Does a licence or meter apply to these controls? Microsoft has not published one.

<!-- rationale
risk: Low. Microsoft's notice MC1470424 describes user-initiated, additive changes that leave navigation destinations and community membership unchanged, and states that no admin configuration is required.
cost: Low. The only cost the sources show is admin time for helpdesk briefing and training updates; Microsoft has not published a licence or meter for these controls, and the sources name none.
impact: Medium. The controls reach Viva Engage users on the web, in Teams and in Outlook, but Microsoft says no visible change occurs unless a user chooses to use them.
-->
