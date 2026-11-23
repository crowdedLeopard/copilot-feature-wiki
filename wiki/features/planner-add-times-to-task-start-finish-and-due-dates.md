---
title: "Planner: add times to task start, finish and due dates"
slug: "planner-add-times-to-task-start-finish-and-due-dates"
roadmapId: 570153
topic: "modern-work"
products: ["Planner"]
summary: "Planner plans are due to get times on task dates, plus a plan time zone and working hours. It affects Planner users on the web and in Teams; Microsoft has published no default or feature-specific licence rule for it yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Teams and Surface Devices","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Planner is included with the Microsoft 365 plans Learn lists, and which Planner capabilities a user gets depends on assigned licences (Microsoft Copilot, Planner Plan 1, Planner and Project Plan 3). A licence rule for this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["planner","teams","user-experience"]
sources:
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Manage the Planner app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    kind: "learn"
  - title: "Turn off Planner for your organization"
    url: "https://learn.microsoft.com/planner/disable-planner"
    kind: "learn"
  - title: "plannerTask resource type"
    url: "https://learn.microsoft.com/graph/api/resources/plannertask"
    kind: "learn"
  - title: "planCalendar resource type"
    url: "https://learn.microsoft.com/graph/api/resources/plancalendar?view=graph-rest-beta"
    kind: "learn"
  - title: "workDayDefaults resource type"
    url: "https://learn.microsoft.com/graph/api/resources/workdaydefaults?view=graph-rest-beta"
    kind: "learn"
  - title: "Update plan"
    url: "https://learn.microsoft.com/graph/api/plan-update?view=graph-rest-beta"
    kind: "learn"
  - title: "task resource type"
    url: "https://learn.microsoft.com/graph/api/resources/task?view=graph-rest-beta"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 570153"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570153"
    kind: "roadmap"
videos: []
related: ["planner-my-tasks-redesign","planner-capacity-view"]
controls:
  - governs: "Whether the Planner app is available in Teams (coarse alternative; not specific to times on tasks)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Planner > Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Blocks Planner in Teams, not on the web; does not govern the new settings. The reference documents -IsBlocked as Boolean, but describes examples using both $true and $false as unblocking; confirm the intended value before use."
  - governs: "Plan time zone, working hours and default task times for this feature"
    scope: "other"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /beta/planner/plans_v2/{planId}"
      docs: "https://learn.microsoft.com/graph/api/plan-update?view=graph-rest-beta"
    note: "The beta request body sets calendar.timeZone and calendar.workDayDefaults.startTime/endTime. Beta APIs are not supported for production use, and this operation currently lists no supported delegated or application permissions."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-08T22:57:21"
changes:
  - date: "2026-11-23"
    note: "New briefing: roadmap-only description of times on Planner task dates, a plan time zone and working hours; no admin setting, default or feature licence is documented yet."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 48 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: added the beta Planner plan calendar settings and the Graph call that updates them, fixed the Teams app blocking row and the licensing model, and updated the open questions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: the Teams app row now gives the Update-M365TeamsApp cmdlet and its documented -IsBlocked caveat instead of saying no automation is documented."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 63 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 63
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d1209a7089628f376a69f8db84261bf1"
---

## What's changing

Microsoft plans to let people add a specific time to a Planner task's start, finish and due dates. The roadmap item also describes two plan-level settings: a plan time zone and working hours, which supply default task times, and a choice of viewing times in the plan's time zone or in your own local time zone. The stated aim is to help distributed teams coordinate across time zones and keep deadlines clear.

The roadmap remains In development. Microsoft Learn also documents beta Planner Unified plans API calendar settings for a plan time zone and default working-day start and end times; beta APIs are subject to change and are not supported for production use. See [planCalendar resource type](https://learn.microsoft.com/graph/api/resources/plancalendar?view=graph-rest-beta) and [workDayDefaults resource type](https://learn.microsoft.com/graph/api/resources/workdaydefaults?view=graph-rest-beta). Who can set the plan time zone and working hours, what the default times are, and whether existing tasks change are not stated.

The roadmap record lists the status as In development, with a target of November CY2026 and release phase General Availability. The platforms are Teams and Surface Devices, and Web. The cloud listed is Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not shipped behaviour.

## Why it matters

Per the roadmap item, adding times and a plan time zone changes what a deadline means for teams spread across regions. Service owners who run cross-region plans should decide which time zone their plans will use and tell their users before the change lands.

Microsoft has not stated what happens on arrival, so the advice here rests on no source saying that existing tasks or dates change. Treat the plan time zone as a convention your teams agree with each plan's owners.

## Risk assessment

**Data exposure**
- No change is described: the roadmap item adds times and a time zone to dates already held on tasks, and names no new data source.

**Security & identity**
- No change is described: the roadmap item mentions no new permission, identity or sharing model.

**Autonomy & actions**
- No change is described: the roadmap item lists no automated action. The default task times are described as coming from the plan's time zone and working hours, so a plan with the wrong time zone could give every new task a misleading default deadline.

**Change & support**
- Expect support questions about which time zone a deadline is in, because the roadmap item lets each person choose between the plan's time zone and their local one.
- Scripts or flows that read start and due dates through Microsoft Graph or the Power Automate connector may meet new values. The v1.0 plannerTask reference describes `startDateTime` and `dueDateTime` as date-and-time values in UTC. The beta Planner Unified plans task resource describes both as `dateWithOptionalTime`, with the plan's time zone and working-day defaults held in a `calendar` property on the plan. Test any integration that parses task dates once the feature reaches your tenant.

## Cost and licensing

Learn lists the Microsoft 365 plans that include Planner (Microsoft 365 Business Basic, Microsoft 365 Business Standard with Copilot, Microsoft 365 Business Premium with Copilot, Office 365 E1, E3 and E5, and Microsoft 365 A1) and says the capabilities a user gets in Planner depend on their assigned licences. Additional capabilities in unified plans depend on whether the user has Microsoft Copilot, Planner Plan 1, or Planner and Project Plan 3. See [Microsoft Planner for admins](https://learn.microsoft.com/planner/planner-for-admins).

Which of those licences, if any, this feature needs is not yet published, and no meter or price for it is published. The only cost the sources show is indirect: admin time to agree plan time zones and working hours, and communication to users.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Teams and Surface Devices and Web as the platforms. No other cloud is listed on the record; that is a record fact, not a statement that the feature is unavailable elsewhere.

The roadmap describes the settings as per plan (a plan's time zone and working hours) and the time-zone view choice as per person. Which plan types and licences are covered, and who can change a plan's time zone, is not stated. Learn says settings and policies configured for Planner on the web also apply to Planner in Teams, which matters if you restrict Planner (see the controls below).

## Governance guidance

### Before rollout
- Ask service owners of plans that span regions which time zone and working hours each plan should use, so the plan-level defaults are ready when the feature appears.
- Check the Planner row in the controls table to confirm how Planner in Teams is currently allowed or blocked in your organisation.
- Draft a short note for users explaining that task dates will carry times and can be viewed in the plan's time zone or their own.

### At rollout
- Watch Message center and the roadmap item for the status to move from In development, and for any post that states the default.
- Test a sample plan in a pilot team to see which defaults new tasks receive and how existing task dates display.
- Test any Power Automate flow or Microsoft Graph script that reads task start or due dates against a pilot plan.

### After rollout
- Ask the plans' owners whether deadlines are being read in the intended time zone, and correct the plan time zone where they are not.
- Record the default state, licence requirement and any admin setting Microsoft documents, and update your internal guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Planner app is available in Teams (coarse alternative; not specific to times on tasks)</strong><br><small>Tenant</small><br><small class="controls__note">Blocks Planner in Teams, not on the web; does not govern the new settings. The reference documents -IsBlocked as Boolean, but describes examples using both $true and $false as unblocking; confirm the intended value before use.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Plan time zone, working hours and default task times for this feature</strong><br><small class="controls__note">The beta request body sets calendar.timeZone and calendar.workDayDefaults.startTime/endTime. Beta APIs are not supported for production use, and this operation currently lists no supported delegated or application permissions.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/planner/plans_v2/{planId}</code> <a href="https://learn.microsoft.com/graph/api/plan-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The beta Graph operation in the second row changes a plan's calendar settings. Learn lists no supported delegated or application permissions for it, and beta APIs are not supported for production use. The only other control listed is an existing, coarse one.

The Teams app control hides the Planner app from Teams users. It does not turn off Planner on the web. Learn also documents `Set-PlannerConfiguration -IsPlannerAllowed $false`, which turns Planner off for the organisation: the page says it applies to basic plans in the Planner app in Teams and Web, and to all plans in other Planner endpoints. Both are all-or-nothing and do not target this feature. The global admin role is named on the PowerShell page; the Teams admin center page does not name a role in the steps used here.

## Open questions

- Is the feature on by default when it arrives, and will existing tasks keep their date-only deadlines? Watch Message center and the roadmap item.
- Who can set a plan's time zone and working hours, and can a tenant administrator set or lock them centrally? Watch Microsoft Learn's Planner for admins page.
- Which licence does the feature need, and does the plan time zone and working-hours setting need a premium licence? Watch the Planner service description and licensing page.
- When will the documented beta Planner Unified plans API be supported for production use, and will the Power Automate connector expose the new task-time and calendar settings? Watch Microsoft Learn's [beta task](https://learn.microsoft.com/graph/api/resources/task?view=graph-rest-beta) and [planCalendar](https://learn.microsoft.com/graph/api/resources/plancalendar?view=graph-rest-beta) references.

<!-- rationale
risk: Low. The roadmap describes a change to how task dates are entered and shown, with no new data sources or autonomous actions; the main exposure is confusion over which time zone a deadline is in.
cost: Low. Learn lists Planner licences but no licence or meter for this feature, so the only cost the sources show is admin time and user communication; a feature-specific licence rule is not yet published.
impact: Medium. People who set or read task dates in Planner on the web or in Teams would see times, a plan time zone and working hours once it ships; Microsoft has not stated whether it is on by default.
-->
