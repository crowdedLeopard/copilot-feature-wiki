---
title: "Microsoft Teams Rooms Pro Management portal: refreshed Analytics & Reports navigation"
slug: "microsoft-teams-pro-management-portal-analytics-and-reports-design-refresh"
roadmapId: 574362
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft is redesigning Analytics & Reports in the Teams Rooms Pro Management portal: new Room analytics and Desk analytics navigation, and Recommended Actions renamed Recommendations. No admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn documents the existing Analytics & Reports pages as available with Teams Rooms Pro (Recommended Actions: Teams Rooms Pro or Teams Shared Devices). No separate licence or price for the refresh is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","pro-management-portal","analytics"]
sources:
  - title: "Microsoft 365 Roadmap 574362"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574362"
    kind: "roadmap"
  - title: "MC1537497: Microsoft Teams Rooms: Refreshed Analytics"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1537497"
    kind: "message-center"
  - title: "Usage reports in the Teams Management Pro portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/usage-reports"
    kind: "learn"
  - title: "Recommended Actions"
    url: "https://learn.microsoft.com/microsoftteams/rooms/recommended-actions"
    kind: "learn"
  - title: "Shared Spaces Insights"
    url: "https://learn.microsoft.com/microsoftteams/rooms/shared-spaces-insights"
    kind: "learn"
  - title: "Role-based access control in the Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Microsoft Teams Rooms Pro Management"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-management"
    kind: "learn"
  - title: "Setting up Bookable Desks in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/rooms/bookable-desks"
    kind: "learn"
videos: []
related: ["microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal","microsoft-teams-building-level-insights-on-the-pro-management-portal-recommended-actions-p","microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management"]
controls:
  - governs: "Delaying or opting out of the refreshed Analytics & Reports experience"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no such switch at the time of writing (November 2026). The notice says no action is required."
  - governs: "Which people hold a portal role with access to reports"
    scope: "user"
    ui:
      surface: "Microsoft Teams Rooms Pro Management portal"
      path: "Settings > Roles > role > Assignments > Add assignment"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    api: null
    note: "Manages the portal's own roles; Microsoft Entra built-in roles are assigned in the Microsoft Entra admin center. Learn's role table gives Teams Rooms Pro Manager and Site Lead report access."
  - governs: "Whether Microsoft uses room, device and usage data for meeting space optimization recommendations"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > General > Meeting space optimization recommendations"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/recommended-actions"
    api: null
    note: "Tenant-level, off by default. Roles: Teams Rooms Pro Manager, Global Administrator, Teams Administrator. Documented under the Recommended Actions page name."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item, from the roadmap record, MC1537497 and current Learn pages, which do not yet describe the refreshed layout."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 64
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "7f18ac35aadba4cc6db01c7939522e12"
---

## What's changing

Microsoft is reorganising the Analytics & Reports area of the Microsoft Teams Rooms Pro Management portal. The roadmap item says the aim is to make the area 'more user-friendly'. Microsoft's notice MC1537497 adds the detail: an updated design and simplified navigation, new **Room analytics** and **Desk analytics** entry points in the left navigation, existing reports moving to their respective Room analytics or Desk analytics pages, and **Recommended Actions** renamed **Recommendations**.

Microsoft Learn does not yet describe the refreshed layout, so what is said above about the change comes from the notice and the roadmap. The Learn pages today describe the current layout, and they label it in different ways: desk usage reports sit under Analytics & Reports > Reports > Desks usage, the room Usage report is described under a Reporting node, and the Recommended Actions page is still called that. Expect the paths in those articles to change.

The roadmap item is In development, with a target of December CY2026, for Worldwide (Standard Multi-Tenant), General Availability, on Desktop and Web. MC1537497 (published 2026-11-03) says rollout will begin in early December 2026 and is expected to complete by late January 2027. It sets no act-by date and says no action is required. Admins can begin using the refreshed experience when it becomes available. These dates are Microsoft's targets.

## Why it matters

This is a layout and naming change for people who already use the portal, and it arrives without anyone switching it on: the notice asks for no action and describes no admin step. The effect lands on habits and documents, not on data or spend. Bookmarks, runbooks, screenshots and help-desk articles that point to a report location or call the page Recommended Actions will go out of date as reports move to Room analytics and Desk analytics.

If nobody acts, admins will see the refreshed navigation when it reaches the tenant, and the notice describes nothing else changing. A short note to the people who use portal reports, and a check that their roles still show them what they need, is the whole job. Treat it as a communication task, not a project.

## Risk assessment

**Data exposure**
- The notice and the roadmap describe design, navigation and renaming only; neither describes new data collection. Learn states that Pro Management data is specific to a room account, not an individual user, and that the service does not access the live content of a meeting.
- Learn says Shared Spaces Insights and Recommended Actions show only the rooms a user is authorised to view under the portal's role-based access control. Confirm the same scoping on the new Room analytics and Desk analytics pages, which Learn does not yet describe.

**Security & identity**
- No new permission or identity is described. Access to reports follows portal roles: Learn says Teams Rooms Pro Manager has full access, Site Lead has access to reports, and Global Reader has read-only access. Check that everyone who relied on a report before the move can still reach it.
- Learn says Teams Administrator or Teams Devices Administrator roles assigned through an administrative unit cannot access the portal, because administrative units are not supported.

**Autonomy & actions**
- No change described: the refresh covers reporting pages. The Recommendations page (today's Recommended Actions) offers device-upgrade and data-hygiene suggestions, and Learn documents a tenant setting, Meeting space optimization recommendations, that is off by default and lets Microsoft use room, device and usage data for those recommendations. Check that setting's state before and after the rename.

**Change & support**
- Runbooks and training that name Recommended Actions or a report path will go stale. The notice gives a rollout window, not a date, so plan for the old layout to stay in place until the refresh reaches your tenant.

## Cost and licensing

Learn documents the current Analytics & Reports pages as part of Teams Rooms Pro. The Usage reports page says the feature is available with a Teams Rooms Pro licence, the Recommended Actions page says at least one Teams Rooms Pro or Teams Shared Devices licence is required to access it, and the Shared Spaces Insights page says only rooms with an assigned Teams Rooms Pro or Premium licence appear. The Teams Rooms licences page lists Microsoft Teams Rooms Pro Management in the Pro licence, and says the Pro licence provides detailed device analytics.

No separate licence, meter or price for the refreshed experience is published in the roadmap item, the notice or the Teams Rooms licences page. The indirect cost is admin time: updating documentation and telling portal users where reports moved.

## Scope

The notice says admins using the Microsoft Teams Rooms Pro Management portal are affected. The roadmap lists Worldwide (Standard Multi-Tenant), General Availability, Desktop and Web. Rollout runs from early December 2026 to late January 2027 per MC1537497, and the notice describes no admin step to turn the refresh on.

Learn lists these roles as able to use the portal: Global Administrator, Teams Administrator, Teams Devices Administrator and Global Reader from Microsoft Entra, and Teams Rooms Pro Manager, Site Lead and Site Technician within the portal. Learn also says rooms hidden from the address book are not included in the Shared Spaces Insights and Recommended Actions pages.

## Governance guidance

### Before rollout
- Tell portal users, including Site Leads, that the refresh is expected between early December 2026 and late January 2027 (MC1537497) and that Recommended Actions becomes Recommendations.
- List the runbooks, saved links and screenshots that name Recommended Actions or a report path such as Analytics & Reports > Reports > Desks usage, so they can be updated when reports move.
- Review portal role assignments under Settings > Roles, so that each person who uses reports holds a role with report access.
- Record the current state of the Meeting space optimization recommendations setting under Settings > General; Learn says it is off by default.

### At rollout
- Open Room analytics, Desk analytics and Recommendations when they appear, and note where each existing report landed.
- Sign in as a Site Lead and as a Teams Rooms Pro Manager and compare what each sees, to confirm room scoping still applies on the new pages.
- Update internal documentation and training with the new locations and the Recommendations name.

### After rollout
- Check the Meeting space optimization recommendations setting and its entry under Settings > General > Log history, to confirm it is as you recorded it.
- Re-read the Learn articles for Usage reports, Shared Spaces Insights and Recommended Actions as Microsoft updates them, and align your documents to them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Delaying or opting out of the refreshed Analytics &amp; Reports experience</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no such switch at the time of writing (November 2026). The notice says no action is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which people hold a portal role with access to reports</strong><br><small>User</small><br><small class="controls__note">Manages the portal's own roles; Microsoft Entra built-in roles are assigned in the Microsoft Entra admin center. Learn's role table gives Teams Rooms Pro Manager and Site Lead report access.</small></td><td data-label="Admin UI"><strong>Microsoft Teams Rooms Pro Management portal</strong><br>Settings › Roles › role › Assignments › Add assignment <a href="https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft uses room, device and usage data for meeting space optimization recommendations</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-level, off by default. Roles: Teams Rooms Pro Manager, Global Administrator, Teams Administrator. Documented under the Recommended Actions page name.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › General › Meeting space optimization recommendations <a href="https://learn.microsoft.com/microsoftteams/rooms/recommended-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no switch to delay or opt out of the refresh, and the notice asks for no action. The controls that exist are the ones around it: portal roles decide who sees which rooms, and the tenant setting for meeting space optimization recommendations decides whether Microsoft uses room, device and usage data for that purpose.

To change the Meeting space optimization recommendations setting, Learn lists Teams Rooms Pro Manager, Global Administrator and Teams Administrator. Portal roles are managed in the portal; Learn says Microsoft Entra built-in role assignments are managed in the Microsoft Entra admin center. Learn describes the setting under the Recommended Actions page name, so confirm where it sits once the page is renamed.

## Open questions

- Will the Meeting space optimization recommendations setting and the Log history stay under Settings > General after Recommended Actions becomes Recommendations? Watch the Recommended Actions Learn page.
- Which Room analytics or Desk analytics page will each existing report (Usage, Shared Spaces Insights, Desks usage) move to? Watch MC1537497 and the Learn pages for each report.
- Will role-based scoping of rooms apply unchanged on the new Room analytics and Desk analytics pages? Watch the Learn RBAC article.
- Can an admin delay or opt out of the refresh in a tenant? The notice describes no such control; watch MC1537497 for updates.

<!-- rationale
risk: Low. Microsoft's notice MC1537497 describes a design, navigation and rename change only, and says no action is required and no compliance considerations were identified.
cost: Low. The only cost the sources show is admin time to update runbooks; no separate licence or price for the refresh is published, and the existing reports are documented as part of Teams Rooms Pro.
impact: Low. Only admins who use the Pro Management portal see it; the notice names admins using the portal as the people affected.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Pro Management data is specific to a room account, not an individual user. | Found: Data collected is specific to a room account, not an individual user. Incidental references to an individual user may be present in the activity log during use of the device. | Fix: Add immediately after this statement: 'Incidental references to an individual user may be present in the activity log during use of the device.' This qualification is in https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-management. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-management
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Learn documents the existing Analytics & Reports pages as part of Teams Rooms Pro. | Found: This feature is available with a Teams Rooms Pro license. | Fix: Narrow 'existing Analytics & Reports pages' to 'existing room reports' in licensing.notes, the opening Cost and licensing sentence and the cost rationale. The cited Pro requirement supports room reports; https://learn.microsoft.com/microsoftteams/rooms/bookable-desks separately says desk usage reports are currently in preview and don't require a license to access. Keep licensing.model as included. | Source: https://learn.microsoft.com/microsoftteams/rooms/usage-reports
- [supported, minor] controls[1].ui; Governance guidance: Before rollout / admin-path: Portal role assignments are reached through Settings > Roles > role > Assignments > Add assignment. | Found: expand Settings > Roles. Select the role you want to assign. In the role pane, select Assignments > Add assignment. | Fix: Keep the cited RBAC path. Add to controls[1].note: 'This opens the assignment wizard; continue through General settings > Members > Scope.' The cited page gives those remaining pages. Also note that https://learn.microsoft.com/microsoftteams/rooms/enrolling-mtrp-managed-service describes the Teams Rooms Pro Manager entry button as 'Add' rather than 'Add assignment'. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to check Log history, but the controls table has no row for that monitoring control. | Found: Check the Meeting space optimization recommendations setting and its entry under Settings > General > Log history. The table lists only refresh opt-out, portal roles and the recommendations setting. | Fix: Replace the After rollout bullet with 'Check the Meeting space optimization recommendations setting to confirm it is as you recorded it.' This removes the unmatched Log history checklist control without adding a table row.
-->
