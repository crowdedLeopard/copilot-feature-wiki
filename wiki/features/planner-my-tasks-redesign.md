---
title: "Planner: redesigned My Tasks experience on the web"
slug: "planner-my-tasks-redesign"
roadmapId: 561204
topic: "modern-work"
products: ["Planner"]
summary: "Microsoft is redesigning My Tasks in Planner on the web, with a Worldwide rollout in December 2026. It is enabled automatically and Microsoft says no admin action is required, but users and helpdesk will see a changed interface."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says users with a Microsoft 365 licence are entitled to the Planner app, and lists My Day and My Tasks among the capabilities. No licence or price specific to the redesign is published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["planner","user-experience"]
sources:
  - title: "Planner: My Tasks redesign"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561204"
    kind: "roadmap"
  - title: "MC1488844: (Updated) Updated My Task experience in Planner"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1488844"
    kind: "message-center"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Manage the Planner app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    kind: "learn"
  - title: "Turn off Planner for your organization"
    url: "https://learn.microsoft.com/planner/disable-planner"
    kind: "learn"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Planner is turned on for the organisation"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -IsPlannerAllowed $false"
      docs: "https://learn.microsoft.com/planner/disable-planner"
    note: "Global admin. Turns off Planner, not only the redesign; $true turns it back on. Applies to basic plans in Planner in Teams and on the web."
  - governs: "Switch to defer or opt out of the redesigned My Tasks experience"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice says it is enabled automatically and no admin configuration is required."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-19"
    note: "First briefing for the My Tasks redesign, based on the roadmap record, MC1488844 and Planner admin pages on Microsoft Learn."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 57 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7523ad48424c1955736f1c27903eb573"
---

## What's changing

Microsoft is redesigning My Tasks in Planner so that users can identify, prioritise and manage their work more easily. The roadmap item describes it as "a redesigned My Tasks experience that brings your tasks into one place, making it easier to capture work, prioritize what matters, and stay focused." Microsoft's notice MC1488844 adds clearer navigation, updated task organisation and prioritisation, and task creation "without leaving their current context".

Microsoft's notice says existing tasks and task data remain available, no migration or user data movement is required, the feature is enabled automatically as part of the service rollout, and no changes to existing admin policies or configurations are required. It lists "No action is required" and suggests informing helpdesk and support teams, telling end users who regularly use My Tasks, updating training material and screenshots, and monitoring user feedback.

The roadmap record gives status In development, a target of December CY2026, release phases General Availability and Targeted Release, platform Web and cloud Worldwide (Standard Multi-Tenant). MC1488844 was updated on 3 November 2026 and states that General Availability (Worldwide) rollout "will occur from early through late December 2026 (previously November)". The notice sets no act-by date.

Microsoft Learn does not describe the redesign yet, so what the redesign does comes from the roadmap item and MC1488844. For background, Learn describes the current My Tasks view in the Planner app in Teams as holding Private Tasks, Assigned to me and Flagged emails.

## Why it matters

The redesign arrives without anyone choosing it: Microsoft's notice says it is enabled automatically, so the practical effect is on users and the people who support them. My Tasks is where users see their own work in Planner, so a changed layout and new task-creation flow will generate how-to questions in the first weeks of December 2026.

Nothing in the notice or the roadmap item points to a change in data access, identity or spend, so the case for acting is communication and support readiness rather than configuration. The rollout date has already moved once, from November to December, so plan for the window to shift again.

## Risk assessment

- **Data exposure**: MC1488844 says existing tasks and task data remain available and no migration or data movement is required. Learn describes My Tasks as drawing on private tasks (stored in Exchange), tasks assigned from several sources and flagged emails; Microsoft has not said whether the redesign changes which of these appear or where a task created through the new workflow is stored.
- **Security & identity**: No change is described. Microsoft's notice states that no changes to existing admin policies or configurations are required and identifies no compliance considerations.
- **Autonomy & actions**: No change: neither the roadmap item nor the notice describes the redesign acting on its own. The roadmap item mentions capturing and prioritising work and the notice mentions streamlined task creation, both initiated by users.
- **Change & support**: Users will see a different My Tasks interface from early December 2026. Update screenshots and training that show the current view, and brief the helpdesk before the rollout window opens.

## Cost and licensing

Microsoft Learn's Planner for admins page says users with a qualifying Microsoft 365 licence have access to task creation and editing capabilities and plan views including "My Day, My Tasks, and more". The Planner app in Teams article says "Users with a Microsoft 365 license are entitled to the Planner app." Microsoft's notice names no additional licence or charge for the redesign.

No licence requirement, price or meter specific to the redesigned My Tasks is published at the time of writing (November 2026). The known cost is indirect: helpdesk preparation, user communication and refreshed training material.

## Scope

- **Users**: Microsoft's notice says all users who access Microsoft Planner and use the My Tasks experience are affected.
- **Platforms**: The roadmap record lists Web, and the notice names Planner on the web. Whether the redesign reaches Planner in Teams is not stated.
- **Cloud**: Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Rollout**: Roadmap target December CY2026, release phases General Availability and Targeted Release. MC1488844 gives early through late December 2026 for Worldwide General Availability.
- **Prerequisites**: Microsoft's notice lists none for administrators.

## Governance guidance

### Before rollout
- Tell the helpdesk about the December 2026 My Tasks redesign described in MC1488844, so they can recognise the changed navigation and task-creation flow.
- Identify which teams use My Tasks heavily and brief those users before the rollout window opens.
- Replace screenshots and training that show the current My Tasks view.

### At rollout
- Watch Message center for further updates to MC1488844, since the timeline has already moved once.
- Collect early user questions and feed them into helpdesk guidance.
- Confirm that users can still find existing tasks, which Microsoft's notice says remain available.

### After rollout
- Review support tickets and user feedback for My Tasks issues and raise them with Microsoft where needed.
- Update internal Planner guidance once Microsoft Learn documents the redesigned experience.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Planner is turned on for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Global admin. Turns off Planner, not only the redesign; $true turns it back on. Applies to basic plans in Planner in Teams and on the web.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -IsPlannerAllowed $false</code> <a href="https://learn.microsoft.com/planner/disable-planner" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to defer or opt out of the redesigned My Tasks experience</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice says it is enabled automatically and no admin configuration is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice states that no changes to existing admin policies or configurations are required, and Microsoft Learn documents no setting that holds back the redesign at the time of writing (November 2026). The only documented switch is the organisation-wide one: Learn says a global admin can turn Planner off with PowerShell, which removes Planner for the organisation and not just the redesign. The page applies to basic plans in the Planner app in Teams and on the web, and to all plans in other Planner endpoints.

Separately, Learn's article on Planner in Teams says a user's My Tasks is hidden by removing that user's Exchange Online licence, and warns that the user then loses access to their mailbox. That article describes the Planner app in Teams, and it is not confirmed to apply to the redesigned web experience.

## Open questions

- Will an administrator setting for the redesigned My Tasks ever exist, or is the Planner on or off switch the only control? Watch the Planner admin pages on Microsoft Learn and Message center.
- Where are tasks created through the new streamlined workflow stored, and do they still show in My Tasks sources such as Assigned to me and Flagged emails? Watch the Planner support pages and MC1488844.
- Does the redesign also reach Planner in Teams, given that the roadmap record lists Web only?
- Will the December 2026 window hold, given that the rollout moved from November? Watch MC1488844 and the roadmap item.

<!-- rationale
risk: Low. Microsoft's notice MC1488844 describes an interface redesign with existing tasks and data kept and no change to admin policies, so no new data access or autonomous action is described.
cost: Low. Microsoft's notice names no new licence or charge for the redesign; the cost shown is admin time for helpdesk briefing, user communication and training material updates.
impact: High. Microsoft's notice says all users who access Planner and use My Tasks are affected, and the new interface is enabled automatically during the December 2026 rollout.
-->
