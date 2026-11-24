---
title: "Planner: Capacity view shows who is working on what"
slug: "planner-capacity-view"
roadmapId: 569733
topic: "modern-work"
products: ["Planner"]
summary: "Planner has launched a Capacity view timeline of who is working on what. Microsoft's notice says it is on by default for Plan 3 users and has no admin switch. No admin action is required, but users should be told."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "per-user"
  notes: "The Planner service description lists Capacity view as available with Planner and Project Plan 3 and not with the other columns of its table. Microsoft's notice MC1474110 says users without a Plan 3 licence do not see it. No price is given on those pages."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["planner","teams","outlook","licensing","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 569733"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569733"
    kind: "roadmap"
  - title: "MC1474110: (Updated) Microsoft Planner: Capacity view"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1474110"
    kind: "message-center"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Manage the Planner app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    kind: "learn"
  - title: "Turn off Planner for your organization"
    url: "https://learn.microsoft.com/planner/disable-planner"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["planner-local-custom-fields-columns","planner-my-tasks-redesign"]
controls:
  - governs: "Whether the Planner app is available in Teams (coarse alternative; not specific to Capacity view)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Planner > Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Blocks the whole Planner app in Teams, not the view. The page does not say whether it affects Planner in Outlook."
  - governs: "Whether Planner is turned on for the organisation (coarse alternative; not specific to Capacity view)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -IsPlannerAllowed $false"
      docs: "https://learn.microsoft.com/planner/disable-planner"
    note: "Page says a global admin runs it; it turns off Planner, not the view."
  - governs: "Whether Capacity view is switched on or off for the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1474110 says there is no admin control to disable it."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-22"
    note: "First briefing for Planner Capacity view, rolling out per the roadmap and notice MC1474110, with Plan 3 licensing and no admin switch."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 49 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: removed unsupported statements on storage, read-only behaviour and automated actions, and licence-check steps; noted Plan 5; narrowed the Outlook question."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the cost statement: Planner and Project Plan 5 includes all Plan 3 capabilities, so Plan 3 is needed only for users not already entitled through Plan 3 or Plan 5."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 62 statements confirmed"
  - date: "2026-11-24"
    note: "Status moved to Launched on the roadmap record; re-checked the service description (Plan 3 only, Plan 5 end of sale 1 May 2026) and controls, with no admin switch for the view documented."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "439d55a0ca3526cf4c6ea0dc46cb780a"
---

## What's changing

Planner has added Capacity view, a new view on existing plans that shows a timeline of who is working on what, so that team leads can see how work is spread across a team and spot overload or open capacity. The roadmap item describes it in those terms.

Microsoft's notice MC1474110 adds detail. The view is a live staffing matrix built from existing Planner task data, and no new data is created. It appears alongside Board, Grid and Schedule, in Planner in Teams and Planner in Outlook (web and desktop). It is not included on mobile. Accuracy depends on tasks having assignees and start and finish dates; the notice says tasks missing either are not represented reliably.

Microsoft Learn has no page about Capacity view itself at the time of writing (November 2026). Its Planner service description lists the view and says it is currently available only in unified plans, so what follows about behaviour rests on the roadmap item and the notice.

The roadmap record gives status Launched and a target of October CY2026, for General Availability and Targeted Release. The notice, last updated 15 October 2026, gives Targeted Release beginning in late October 2026 and completing in late October 2026, and General availability (Worldwide) beginning in late October 2026 and completing by early November 2026. The notice's own text also tells admins to warn users about the view appearing in "early October 2026", which no longer matches its updated timeline. The notice shows a Microsoft end date of 14 December 2026.

## Why it matters

Capacity view appears in existing plans for eligible users, and Microsoft's notice says there is no admin control to disable it. No admin action is required, so the practical work is communication and data quality: the notice says tasks missing assignees or start and finish dates will not be represented reliably in the timeline.

The view is licence-gated. Per the service description, Planner and Project Plan 3 users get it and users on the other columns of its table do not, so a mixed team will see different things in the same plan. Expect questions from Plan 1 and Microsoft 365 users who hear colleagues describe a view they cannot open, and from managers asking whether to buy Plan 3 for it.

## Risk assessment

**Data exposure**
- Microsoft's notice says the view is populated entirely from existing Planner task data and creates no new data. It does make assignments across a team visible in one place to users who have the view; Microsoft Learn does not describe who within a plan sees which rows, so confirm that before telling plan owners it is safe to rely on.

**Security & identity**
- No change to sign-in or permissions is described in the notice or on Learn. The notice ties the view to the Plan 3 licence.

**Autonomy & actions**
- The notice describes a timeline built from existing Planner task data; it does not specify whether users can edit tasks from this view.

**Change & support**
- Microsoft's notice says the view is on by default for eligible users and has no admin control to disable it, so a tenant cannot hold it back for later. The table lists coarse controls for the Teams app and for Planner within the PowerShell page's documented scope.
- Tasks without assignees or start and finish dates are "not represented reliably" per the notice, so expect support calls that the view is wrong when the task data is incomplete.
- Users without a Plan 3 licence do not see the view, which creates uneven experience inside shared plans.

## Cost and licensing

The Planner service description lists Capacity view as "Yes" for Planner and Project Plan 3 and "No" for Microsoft Planner included in Microsoft 365, Planner Plan 1 and Microsoft 365 Copilot. Microsoft's notice MC1474110 says the same in its own terms: users with a Planner Plan 3 licence are affected and users without one do not see the view. The service description also says Planner and Project Plan 5 includes all Planner and Project Plan 3 capabilities, whereas the notice says users without Plan 3 will not see the view. The same page says Plan 5 reached end of sale on May 1, 2026.

The service description's footnote says the view is currently available only in unified plans, and that the features available to each user in a unified plan depend on their license. The service description publishes no separate meter, credit rate or charge for Capacity view, and gives no Plan 3 price (November 2026).

For users not already entitled through Planner and Project Plan 3 or an existing Planner and Project Plan 5 subscription, access can require purchasing Planner and Project Plan 3, plus admin time for communication and for tidying task assignees and dates. This briefing does not state the subscription price.

## Scope

- **Users and licences:** users with a Planner and Project Plan 3 licence, per the service description and MC1474110.
- **Clouds:** Worldwide (Standard Multi-Tenant), per the roadmap record and the notice.
- **Platforms:** the roadmap record lists Desktop and Web. The notice names Planner in Teams and Planner in Outlook, web and desktop, and says the view is not included on mobile.
- **Plans:** the service description says Capacity view is currently available only in unified plans; the notice says it appears on existing plans.
- **Rollout:** status Launched, target October CY2026, with Targeted Release then General Availability, per the roadmap record. The notice's timeline is in What's changing.
- **Prerequisites:** the notice says accuracy depends on tasks having assignees and start and finish dates.

## Governance guidance

### Before rollout
- Identify Planner users with Planner and Project Plan 3, whom the notice identifies as affected.
- Tell plan owners and team leads that a Capacity view will appear next to Board, Grid and Schedule, as the notice recommends, and that Plan 1 and Microsoft 365 users will not see it.
- Update internal Planner training material to cover the new view and its dependence on assignees and start and finish dates.

### At rollout
- Ask plan owners to fill in assignees and start and finish dates on live tasks so the timeline reflects real workload.
- Monitor support requests that the view is missing.

### After rollout
- Review a few active plans to see whether open or overloaded capacity shown in the view matches what team leads expect.
- Decide whether the Plan 3 licence is worth extending to more team leads, using the cost section above.
- Watch Message center and the Planner service description for a Learn page on Capacity view, and for any admin control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Planner app is available in Teams (coarse alternative; not specific to Capacity view)</strong><br><small>Tenant</small><br><small class="controls__note">Blocks the whole Planner app in Teams, not the view. The page does not say whether it affects Planner in Outlook.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Planner is turned on for the organisation (coarse alternative; not specific to Capacity view)</strong><br><small>Tenant</small><br><small class="controls__note">Page says a global admin runs it; it turns off Planner, not the view.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -IsPlannerAllowed $false</code> <a href="https://learn.microsoft.com/planner/disable-planner" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Capacity view is switched on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1474110 says there is no admin control to disable it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice MC1474110 says there is no admin control to disable Capacity view, so the table has no row that governs it directly. The two rows that follow are the existing coarse controls for Planner as a whole; neither is documented as specific to Capacity view.

The Teams admin center page covers the Planner app in Teams, and says settings configured for Planner for the web also apply to Planner in Teams. It does not mention Planner in Outlook or Capacity view. The PowerShell page says it applies to basic plans in the Planner app in Teams and Web and to all plans in other Planner endpoints, and does not mention Capacity view. Blocking Planner removes it for everyone, not just for the view. Per the notice and service description, the Plan 3 licence decides who sees the view; no licence-assignment path is given here.

## Open questions

- Which users inside a plan can see which people's rows in Capacity view, and does it follow plan membership? Watch the Planner service description and Message center.
- Will Microsoft add an admin control for Capacity view? The notice says there is none; watch Message center and Planner for admins.
- Does blocking the Planner app in the Teams admin center also affect Planner in Outlook? The Teams page does not say.
- Did General Availability complete on the notice's timeline? The notice gives early November 2026 for completion, and the roadmap record now shows Launched.

<!-- rationale
risk: Low. Microsoft's notice says the view is built entirely from existing Planner task data and creates no new data, so it stays inside existing data boundaries.
cost: Medium. Microsoft's service description lists Capacity view as available with Planner and Project Plan 3 and not with Planner Plan 1, Microsoft 365 or Microsoft 365 Copilot, so seeing it can mean buying Plan 3 for a subset of users.
impact: Medium. Microsoft's notice says it appears by default for users with a Planner Plan 3 licence, so team leads and plan owners notice it; users without that licence do not see it.
-->
