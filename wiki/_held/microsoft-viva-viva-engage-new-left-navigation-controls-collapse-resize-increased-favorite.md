---
title: "Viva Engage: collapse and resize the left navigation, and reorder a larger favourites list"
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
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor MC1470424 names a licence or meter for these navigation controls."
audiences: ["service-owner","change-adoption","end-user"]
tags: ["viva-engage","user-experience","personalisation","teams","outlook","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 568763"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568763"
    kind: "roadmap"
  - title: "MC1470424: (Updated) Microsoft Viva Engage: New left navigation controls for collapsing, resizing, and managing favorites"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1470424"
    kind: "message-center"
  - title: "Limits in Viva Engage for Microsoft 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/limits-viva-engage"
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
updated: "2026-11-17"
roadmapModified: "2026-09-23T22:59:12"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item; reports that the roadmap (50), MC1470424 (unlimited) and the Microsoft 365 limits page (10) give different favourites limits."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "0cdf0e973bdded04a80985cdc82730f3"
---

## What's changing

Viva Engage is adding controls to the left navigation pane. According to the roadmap item and Microsoft's notice MC1470424, users can collapse the pane, resize its width, favourite more communities and drag to reorder the communities in their Favorites section. The roadmap item says none of this changes which destinations appear in the navigation.

The roadmap item says the controls apply to every surface that has the Engage left navigation menu: Viva Engage on the web, and the Engage app in Teams and in Outlook. MC1470424 adds that preferences persist across browsers and devices and that keyboard and screen reader support are included.

The sources disagree on the favourites limit. The roadmap item says users can favourite up to 50 communities. MC1470424, updated 23 September 2026, says users can favourite an unlimited number of communities, increased from the previous limit of 10. The Microsoft 365 service limits page for Viva Engage, read in November 2026, still lists the number of favourite communities as 10. This briefing reports all three and does not choose between them.

The roadmap record gives the status as Rolling out, with a target of August CY2026, release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud, and Desktop and Web platforms. MC1470424 says rollout started and was expected to complete by the end of October 2026. It sets no act-by date, and the roadmap status was still Rolling out when this briefing was written.

## Why it matters

For a service owner this is a support and communication matter, not a configuration one. Microsoft's notice says no admin configuration is required and that these capabilities are user initiated, with no visible changes unless users choose to use them. Nothing in the sources describes a change to existing navigation for people who ignore the new controls.

The practical effects are on helpdesk and training. Screenshots and instructions that describe a fixed-width left navigation, or a ten-favourite limit, may stop matching what some users see. Because the favourites limit is stated three ways, check the current limit in your own tenant before quoting a number in guidance.

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

## Cost and licensing

Microsoft has not published a licence requirement or a meter for these navigation controls. MC1470424 says all Viva Engage users who access Viva Engage on the web, including in Teams and Outlook, are affected, and it names no licence or charge. Licensing is Not yet published.

The cost the sources do show is indirect: time for helpdesk briefing, community manager communication and updates to internal training material, all recommended in MC1470424. No spend cap or budget control applies, because no meter is documented.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop and Web as platforms, with release phase General Availability. It does not list GCC, GCC High or DoD; the record does not say whether those clouds receive the change.

MC1470424 names the affected surfaces as Viva Engage on the web, the Viva Engage app in Microsoft Teams and the Viva Engage app in Microsoft Outlook, and says the affected audience is all Viva Engage users on those surfaces. It states no prerequisite and says no admin configuration is required. The notice gave a Microsoft end date of 30 November 2026.

## Governance guidance

### Before rollout

- Confirm in a pilot user's Viva Engage which favourites limit applies, then record it for helpdesk use, because the roadmap item, MC1470424 and the Microsoft 365 limits page give different figures.
- Brief the helpdesk team on the new collapse, resize and reorder behaviour, as MC1470424 recommends.
- Identify community managers and power users who work with many communities and tell them about the favourites change.

### At rollout

- Check whether the controls are visible on Viva Engage on the web, in Teams and in Outlook, since the roadmap status was Rolling out when this briefing was written.
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
- Has rollout finished? MC1470424 expected completion by the end of October 2026, but the roadmap status was still Rolling out in November 2026.
- Does the change reach the US Government clouds? The roadmap record lists only Worldwide (Standard Multi-Tenant).
- Does a licence or meter apply to these controls? Microsoft has not published one.

<!-- rationale
risk: Low. Microsoft's notice MC1470424 describes user-initiated, additive changes that leave navigation destinations and community membership unchanged, and states that no admin configuration is required.
cost: Low. The only cost the sources show is admin time for helpdesk briefing and training updates; Microsoft has not published a licence or meter for these controls, and the sources name none.
impact: Medium. The controls reach Viva Engage users on the web, in Teams and in Outlook, but Microsoft says no visible change occurs unless a user chooses to use them.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Cost and licensing / cost: No spend cap or budget control applies because no meter is documented. | Found: Searched: "Viva Engage" "left navigation" "budget" "license". Read setup requirements, service-description excerpts, roadmap and MC1470424; none states that no spend cap or budget control applies. | Fix: Remove the sentence 'No spend cap or budget control applies, because no meter is documented.' The preceding text already reports the narrower, verified gap about a documented meter.
-->
