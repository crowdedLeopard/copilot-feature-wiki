---
title: "Viva Engage: new post creation experience"
slug: "microsoft-viva-new-post-creation-experience-in-viva-enage"
roadmapId: 558935
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Engage has a redesigned post publisher on the web, on by default with no admin configuration. Users who create posts see a new layout; admins should brief users and help desk and update training material."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's notice and the roadmap name no licence for this change. Learn's setup page lists Viva Engage Core, which comes with Microsoft 365, as enabling core experiences such as communities and storyline; premium experiences need Viva Suite or Viva Employee Communications and Communities."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["viva-engage","user-experience","accessibility","adoption"]
sources:
  - title: "Microsoft 365 Roadmap item 558935"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558935"
    kind: "roadmap"
  - title: "MC1411432: (Updated) Viva Engage: New post creation experience"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1411432"
    kind: "message-center"
  - title: "Viva Engage setup requirements"
    url: "https://learn.microsoft.com/viva/engage/setup"
    kind: "learn"
  - title: "Manage user privileges with view-only mode in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-engage-view-mode"
    kind: "learn"
  - title: "Manage and set up storyline in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-storyline"
    kind: "learn"
  - title: "Microsoft Viva Engage Features service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-engage-features"
    kind: "learn"
  - title: "Use the Microsoft Graph API to work with Viva Engage"
    url: "https://learn.microsoft.com/graph/api/resources/engagement-api-overview"
    kind: "learn"
videos: []
related: ["microsoft-viva-engage-improved-shared-messages-end-user-experience","microsoft-viva-engage-community-feed-improvements","microsoft-viva-viva-engage-new-left-navigation-controls-collapse-resize-increased-favorite"]
controls:
  - governs: "Tenant switch for the redesigned post creation experience"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice says no admin configuration is required. Existing view-only mode and storyline creator settings govern who can post, not the layout."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-22"
    note: "First briefing: default-on redesign of the Viva Engage post publisher, no admin setting documented, communication and training are the actions."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "671e6be0a2cd8b7a31764f19625a7a11"
---

## What's changing

Viva Engage has a redesigned post creation experience, the screen users work in when they write a post. Microsoft says the layout is simpler, the tools are organised more intuitively and accessibility is improved, and that existing post creation capabilities remain the same.

Microsoft's notice MC1411432 lists four visible changes: the post-on-behalf-of selection and the destination selection (storyline or community) move to the top of the publisher; the toolbar at the bottom shows the most used options by default, with more behind a + (plus) icon; and the post type is changed from a menu at the top of the publisher. The notice says no admin configuration is required and that the experience is available by default as it rolls out.

The roadmap record lists the item as Launched, General Availability, Worldwide (Standard Multi-Tenant), platform Web, with a target of May CY2026. The notice, last updated 11 September 2026, gives a later rollout window: it began in mid-July 2026 and is expected to complete by mid-October 2026 (previously mid-August). Where the two differ, the notice's window is the more specific one for tenant rollout. Microsoft Learn had no page describing this redesign at the time of writing (November 2026), so the behaviour above is Microsoft's notice and the roadmap description.

## Why it matters

Nothing needs configuring, but the screen users post from has changed, so the effect is on support and training rather than on data or spend. Training slides, screenshots and help desk scripts that show the old publisher no longer match what users see, and the notice recommends informing users, updating internal training material and notifying help desk teams.

Because the post-on-behalf-of and destination selectors now sit at the top of the publisher, expect questions from delegates and community admins about where those choices went. The change is default-on, so if nobody acts users simply meet the new layout without warning.

## Risk assessment

**Data exposure**

- Microsoft's notice lists no new data access and no compliance considerations for this change. The destination selector (storyline or community) now sits at the top of the publisher, so remind users to check it before posting; it decides who can read the post.

**Security & identity**

- The post-on-behalf-of selection moves to the top of the publisher. Delegates who post for a leader should confirm which identity is selected before they publish; the notice describes no change to who may post on behalf of whom.

**Autonomy & actions**

- No change described: the notice covers the layout users work in and mentions no agent or automated posting.

**Change & support**

- Expect questions about the relocated selectors, the + (plus) icon for additional tools and the post type menu. Screenshots in training material and help desk guides become out of date as the rollout reaches each user.
- Microsoft's notice describes no admin setting to keep the previous layout.

## Cost and licensing

Microsoft's notice and the roadmap record name no licence and no meter for this change. Learn's [Viva Engage setup requirements](https://learn.microsoft.com/viva/engage/setup) list a Viva Engage Core service plan, which comes with Microsoft 365, as enabling the core experiences, with communities and storyline as examples. The same page says premium experiences need Microsoft Viva Suite or Microsoft Viva Employee Communications and Communities.

The indirect cost is admin and support time: briefing users, updating training material and preparing the help desk. A licence or price specific to this redesign is not yet published.

## Scope

The notice says users who create posts in Viva Engage are affected. The roadmap record lists Worldwide (Standard Multi-Tenant) only and platform Web; the notice names the service as Viva Engage without listing platforms, so confirm how the redesign appears in Viva Engage in Teams and on mobile before telling those users what to expect.

The notice's rollout window runs from mid-July 2026 to mid-October 2026, and the roadmap target is May CY2026. The notice says the experience is available by default as it rolls out and that no admin configuration is required. The roadmap record lists no US Government clouds.

## Governance guidance

### Before rollout

- Compare the four changes in MC1411432 with your training slides, intranet guides and help desk scripts, and list the screenshots that show the old publisher.
- Name a contact in the help desk to field questions from delegates and community admins about the relocated post-on-behalf-of and destination selectors.

### At rollout

- Tell users that the Viva Engage post creation experience is changing, as the notice recommends, and show where the destination, post type and extra tools now sit.
- Replace screenshots in internal guides with the new layout once your tenant shows it.

### After rollout

- Collect user and help desk questions and update the guides for any layout point users trip over.
- Check Message center and the Microsoft 365 Roadmap for further changes to the publisher, since the notice has already been updated once with a later timeline.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for the redesigned post creation experience</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice says no admin configuration is required. Existing view-only mode and storyline creator settings govern who can post, not the layout.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no tenant setting or API for the redesigned publisher, and the notice says no admin configuration is required.

Two existing controls govern who can post, not what the publisher looks like. Learn's [view-only mode page](https://learn.microsoft.com/viva/engage/eac-engage-view-mode) says view-only mode is set from the Viva Engage admin center, where users are assigned to it, and that publisher and creation features are unavailable to those users. Learn's [storyline page](https://learn.microsoft.com/viva/engage/eac-storyline) documents the Specify storyline creators setting, which limits who can create storyline posts. Neither changes the new layout for users who can still post.

## Open questions

- Does Microsoft plan any admin setting to defer or opt out of the new publisher? Watch Message center post MC1411432 and the Viva Engage admin center.
- Does the redesign apply to Viva Engage in Teams and on mobile, or only to the web client the roadmap lists? Watch the roadmap item and Learn's Viva Engage pages.
- The roadmap target is May CY2026, while the notice gives a rollout from mid-July to mid-October 2026. Which date should support teams plan around for their tenant?
- Is any part of the redesign tied to premium Viva Engage licensing, such as announcement post types? Watch Learn's Viva Engage setup page for an update.

<!-- rationale
risk: Low. Microsoft's notice describes a layout and accessibility change to existing post creation and says existing capabilities remain the same; it names no new data access or autonomous action.
cost: Low. The only cost the sources show is admin time to brief users, help desk and training owners; no licence or meter for this change is published, and the Viva Engage Core plan comes with Microsoft 365.
impact: Medium. Everyone who creates posts in Viva Engage sees a new layout by default, so training and support material that shows the old publisher goes out of date; readers of posts see no change described.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; Open questions / date: The notice gives mid-October 2026 as completion, qualified as expected in What's changing but not in Scope. | Found: is expected to complete by mid-October 2026 (previously mid-August). | Fix: Replace Scope's second paragraph's first sentence with 'The notice gives a rollout start of mid-July 2026 and expected completion by mid-October 2026, while the roadmap target is May CY2026.' Replace the date question with 'The roadmap target is May CY2026, while the notice gives a rollout start of mid-July 2026 and expected completion by mid-October 2026. Which date should support teams plan around for their tenant?'
- [supported, minor] Risk assessment: Data exposure / behaviour: The destination selected for a post determines its audience. | Found: By using public groups, anyone in the network can view content and participate in the group activity. ... By using private groups, you can limit membership and participation to invitation or approval only from group administrators. | Fix: Add https://learn.microsoft.com/sharepoint/administration/viva-engage-networks-groups-and-users-overview to sources for community visibility; the already cited https://learn.microsoft.com/viva/engage/eac-storyline states that storyline content is visible to any internal user with access to Viva Engage. | Source: https://learn.microsoft.com/sharepoint/administration/viva-engage-networks-groups-and-users-overview
-->
