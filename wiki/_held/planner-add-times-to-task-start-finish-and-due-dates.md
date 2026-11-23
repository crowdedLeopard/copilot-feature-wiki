---
title: "Planner: add times to task start, finish and due dates"
slug: "planner-add-times-to-task-start-finish-and-due-dates"
roadmapId: 570153
topic: "modern-work"
products: ["Planner"]
summary: "Planner plans are due to get times on task dates, plus a plan time zone and working hours. It affects Planner users on the web and in Teams; Microsoft has published no admin setting, default or licence for it yet."
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
  model: "mixed"
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
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Blocks the Planner app in Teams for the organisation, not Planner on the web. Existing control; it does not govern the new times or time-zone settings."
  - governs: "Plan time zone, working hours and default task times for this feature"
    scope: "other"
    ui: null
    api: null
    note: "Not yet documented on either surface at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-08T22:57:21"
changes:
  - date: "2026-11-23"
    note: "New briefing: roadmap-only description of times on Planner task dates, a plan time zone and working hours; no admin setting, default or feature licence is documented yet."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 48 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 43
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "d8058f32de50d52e5c962d9babb07d97"
---

## What's changing

Microsoft plans to let people add a specific time to a Planner task's start, finish and due dates. The roadmap item also describes two plan-level settings: a plan time zone and working hours, which supply default task times, and a choice of viewing times in the plan's time zone or in your own local time zone. The stated aim is to help distributed teams coordinate across time zones and keep deadlines clear.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Who can set the plan time zone and working hours, what the default times are, and whether existing tasks change are not stated.

The roadmap record lists the status as In development, with a target of November CY2026 and release phase General Availability. The platforms are Teams and Surface Devices, and Web. The cloud listed is Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not shipped behaviour.

## Why it matters

Per the roadmap item, adding times and a plan time zone changes what a deadline means for teams spread across regions. Service owners who run cross-region plans should decide which time zone their plans will use and tell their users before the change lands.

Microsoft has not stated what happens on arrival, so the advice here rests on no source saying that existing tasks or dates change. Treat the plan time zone as a convention your teams agree, not a setting you can enforce centrally: no admin setting for it is documented at the time of writing (November 2026).

## Risk assessment

**Data exposure**
- No change is described: the roadmap item adds times and a time zone to dates already held on tasks, and names no new data source.

**Security & identity**
- No change is described: the roadmap item mentions no new permission, identity or sharing model.

**Autonomy & actions**
- No change is described: the roadmap item lists no automated action. The default task times are described as coming from the plan's time zone and working hours, so a plan with the wrong time zone could give every new task a misleading default deadline.

**Change & support**
- Expect support questions about which time zone a deadline is in, because the roadmap item lets each person choose between the plan's time zone and their local one.
- Scripts or flows that read start and due dates through Microsoft Graph or the Power Automate connector may meet new values. The v1.0 plannerTask reference describes `startDateTime` and `dueDateTime` as date-and-time values in UTC, and Microsoft Learn documents no plan time zone or working-hours property there at the time of writing (November 2026). Test any integration that parses task dates once the feature reaches your tenant.

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
<tr><td data-label="Control"><strong>Whether the Planner app is available in Teams (coarse alternative; not specific to times on tasks)</strong><br><small>Tenant</small><br><small class="controls__note">Blocks the Planner app in Teams for the organisation, not Planner on the web. Existing control; it does not govern the new times or time-zone settings.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Plan time zone, working hours and default task times for this feature</strong><br><small class="controls__note">Not yet documented on either surface at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin setting for this feature is documented at the time of writing (November 2026), so the table has no tenant switch for it. The only controls listed are existing, coarse ones.

The Teams app control hides the Planner app from Teams users. It does not turn off Planner on the web. Learn also documents `Set-PlannerConfiguration -IsPlannerAllowed $false`, which turns Planner off for the organisation: the page says it applies to basic plans in the Planner app in Teams and Web, and to all plans in other Planner endpoints. Both are all-or-nothing and do not target this feature. The global admin role is named on the PowerShell page; the Teams admin center page does not name a role in the steps used here.

## Open questions

- Is the feature on by default when it arrives, and will existing tasks keep their date-only deadlines? Watch Message center and the roadmap item.
- Who can set a plan's time zone and working hours, and can a tenant administrator set or lock them centrally? Watch Microsoft Learn's Planner for admins page.
- Which licence does the feature need, and does the plan time zone and working-hours setting need a premium licence? Watch the Planner service description and licensing page.
- Will Microsoft Graph and the Power Automate connector expose the times and the plan time zone, and in what format? Watch the plannerTask reference on Microsoft Learn.

<!-- rationale
risk: Low. The roadmap describes a change to how task dates are entered and shown, with no new data sources or autonomous actions; the main exposure is confusion over which time zone a deadline is in.
cost: Low. Learn lists Planner licences but no licence or meter for this feature, so the only cost the sources show is admin time and user communication; a feature-specific licence rule is not yet published.
impact: Medium. People who set or read task dates in Planner on the web or in Teams would see times, a plan time zone and working hours once it ships; Microsoft has not stated whether it is on by default.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; front matter: changes / absence: Microsoft Learn does not yet describe this feature, so its behaviour is known only from the roadmap. | Found: Working-time calendar settings for a plan, including the plan's time zone and default working days. | Fix: Replace the roadmap-only sentence with: 'The roadmap remains In development. Microsoft Learn also documents beta Planner Unified plans API calendar settings for a plan time zone and default working-day start and end times; beta APIs are subject to change and are not supported for production use.' Cite https://learn.microsoft.com/graph/api/resources/plancalendar?view=graph-rest-beta and https://learn.microsoft.com/graph/api/resources/workdaydefaults?view=graph-rest-beta. Narrow the change note to remove 'roadmap-only'. | Source: https://learn.microsoft.com/graph/api/resources/plancalendar?view=graph-rest-beta
- [contradicted, blocker] controls[1]; Governance controls table; front matter: changes / absence: Plan time zone, working hours and default task times are not documented on either UI or API surface. | Found: The following table specifies the properties that can be updated. ... calendar | planCalendar | Working-time calendar settings for the plan. | Fix: Keep controls[1].ui null. Set controls[1].api to kind 'graph', call 'PATCH /beta/planner/plans_v2/{planId}', docs 'https://learn.microsoft.com/graph/api/plan-update?view=graph-rest-beta'. Replace its note with: 'The beta request body sets calendar.timeZone and calendar.workDayDefaults.startTime/endTime. Beta APIs are not supported for production use, and this operation currently lists no supported delegated or application permissions.' Cite https://learn.microsoft.com/graph/api/resources/plancalendar?view=graph-rest-beta and https://learn.microsoft.com/graph/api/resources/workdaydefaults?view=graph-rest-beta. Remove the repeated assertion that neither surface is documented. | Source: https://learn.microsoft.com/graph/api/plan-update?view=graph-rest-beta
- [unsupported, blocker] front matter: licensing.model / licensing: This feature has a mixed licensing model. | Found: Searched: Planner task start finish due specific times plan time zone working hours default admin settings licensing price; Planner time zone working hours task times default license price. Read Planner for admins and service description; neither establishes mixed entitlement for this feature. | Fix: Set licensing.model to 'included' under the standard's rule for a new option within a licensed product. Keep the existing notes that identify the product's qualifying Microsoft 365 plans and licence-dependent additional capabilities, and retain the narrower qualification that a licence rule specific to this feature is not yet published. Do not describe the feature as requiring a mixture of entitlements.
- [contradicted, blocker] controls[0].api; Governance controls table / command: Update-M365TeamsApp -Id <app-id> -IsBlocked $true blocks the Planner app. | Found: Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -IsBlocked $true ... Unblocks Bookings app | Fix: Set controls[0].api to null and append this qualification to its note: 'No consistently documented blocking call is given here: Update-M365TeamsApp exists, but its reference describes the -IsBlocked $true example as unblocking the app. Use the documented Teams admin center Block control rather than infer a Boolean value.' Retain the verified UI path. Do not claim the cmdlet itself is undocumented, and do not replace $true with an unverified value. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
- [contradicted, blocker] Open questions: Microsoft Graph and Power Automate / absence: Whether Microsoft Graph exposes task times and the plan time zone, and their format, remains unpublished. | Found: dueDateTime | dateWithOptionalTime | Date and, optionally, time the task is due. ... startDateTime | dateWithOptionalTime | Date and, optionally, time the task is scheduled to start. | Fix: Replace the final open question with: 'When will the documented beta Planner Unified plans API be supported for production use, and will the Power Automate connector expose the new task-time and calendar settings? Watch Microsoft Learn's beta task and planCalendar references.' Cite https://learn.microsoft.com/graph/api/resources/task?view=graph-rest-beta and https://learn.microsoft.com/graph/api/resources/plancalendar?view=graph-rest-beta; the latter documents calendar.timeZone as String and workDayDefaults. | Source: https://learn.microsoft.com/graph/api/resources/task?view=graph-rest-beta
-->
