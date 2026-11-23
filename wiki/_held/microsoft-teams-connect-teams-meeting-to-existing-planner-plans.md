---
title: "Microsoft Teams: connect a meeting to an existing Planner plan"
slug: "microsoft-teams-connect-teams-meeting-to-existing-planner-plans"
roadmapId: 561490
topic: "modern-work"
products: ["Microsoft Teams","Planner"]
summary: "Microsoft plans to let users link a Teams meeting to an existing Planner plan instead of getting a new one. It is stated to be available by default; no admin action is required. Targeted Release is due from late December 2026."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Teams and Surface Devices"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Users with a Microsoft 365 license are entitled to the Planner app, and Facilitator is included with a Microsoft Copilot license. A licence specific to linking meetings to plans is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","planner","facilitator","microsoft-loop","app-management"]
sources:
  - title: "MC1392571: (Updated) Connect Teams meeting to existing Planner Plans"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1392571"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Connect Teams meeting to existing Planner Plans"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561490"
    kind: "roadmap"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
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
related: ["app-management"]
controls:
  - governs: "Whether Facilitator, which can create meeting tasks in the selected plan, is available"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Removes Facilitator's task creation only; the notice says users can still create tasks manually. Facilitator is allowed by default."
  - governs: "Whether the Planner app is available in Teams (coarse alternative; not specific to linking meetings to plans)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Planner > Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -IsPlannerAllowed $false"
      docs: "https://learn.microsoft.com/planner/disable-planner"
    note: "Turns Planner off for the organisation, not just this option. The PowerShell page covers basic plans in Teams and web; premium plans are covered elsewhere."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item, based on the roadmap record, notice MC1392571 (timeline updated 12 October 2026) and Learn pages on Facilitator and Planner in Teams."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "c17c2008dcd613b998a2137269cc8310"
---

## What's changing

Microsoft plans to let users connect a Teams meeting to an existing Planner plan. According to the roadmap item and Microsoft's notice MC1392571, Teams meetings currently create a separate Planner plan for meeting tasks automatically, so tasks for one long-running initiative can end up spread across several plans.

Under the notice, a user links a meeting to an existing plan and tasks created during the meeting can be added to that plan. If no plan is selected, meetings continue to create a new Planner plan, and existing or previously created plans do not change. Facilitator (the AI meeting agent in Teams) can create tasks in the selected plan. Users can create tasks manually if Facilitator is disabled. The notice states that the feature will be available by default.

The roadmap record lists the item as In development with a target of December CY2026, in the Targeted Release and General Availability phases, for Worldwide (Standard Multi-Tenant) on Desktop and Teams and Surface Devices. The notice, updated 12 October 2026, says Targeted Release (Worldwide) begins in late December 2026 (previously late September) and completes by end of January 2027 (previously end of September 2026). It says Microsoft will announce General Availability through Message center when ready. The notice sets no act-by date.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so the behaviour above is the roadmap's and the notice's description. The Learn page for Facilitator lists "Task tracking integration with Planner" among the capabilities in public preview, so check how that preview relates to the rollout described in the notice.

## Why it matters

This arrives without an admin choosing it, so it is a communication and readiness item rather than a configuration project. Meeting tasks that used to land in one auto-generated plan per meeting can, once users link meetings, accumulate in plans that teams already own. That helps teams who track one initiative across many meetings, but it changes where meeting-derived task data lives, which the notice itself calls out as a change to how task data is organised across plans.

If nobody acts, the notice says the option is available by default and that meetings with no plan selected keep creating a new plan. Expect helpdesk questions about which plan a meeting's tasks went to, and about why Facilitator-created tasks do or do not appear in a chosen plan.

## Risk assessment

**Data exposure**
- Tasks created in a linked meeting can be stored in an existing plan instead of a new auto-generated one (MC1392571). The notice does not say how access to the linked plan relates to who attends the meeting, so confirm this before encouraging users to link meetings that discuss sensitive topics.
- Existing plans and previously created plans do not change, according to the notice.

**Security & identity**
- The notice describes no change to sign-in, roles or permissions. Which account Facilitator uses to write tasks to a plan is not described, so treat it as something to confirm.

**Autonomy & actions**
- Facilitator, an AI agent, can create tasks in the plan a user selected when Facilitator is enabled. Blocking Facilitator in the Teams admin center removes that automation; the notice says users can still create tasks manually if Facilitator is disabled.
- Linking a meeting is the user's choice. Without a selection the existing behaviour (a new plan per meeting) continues.

**Change & support**
- Targeted Release begins in late December 2026 and completes by end of January 2027; General Availability is to be announced in Message center.
- Facilitator is not supported in 1:1 chats, group chats, or external chats and meetings, and unlicensed users cannot prompt it, so task creation by Facilitator will not be available in every meeting.

## Cost and licensing

Microsoft has not published a licence or meter specific to linking a meeting to an existing plan. What is published is the licensing of the products involved.

- **Planner.** The Planner in Teams page says users with a Microsoft 365 license are entitled to the Planner app, and that premium capabilities need a Planner premium license such as Planner Plan 1, Project Plan 3 or Project Plan 5.
- **Facilitator.** The Facilitator page says it is included with a Microsoft Copilot license and subject to available capacity. Users also need an eligible Microsoft 365 base licence and Teams licence.
- **Indirect cost.** Admin time to review Facilitator availability, plus user communication and helpdesk briefing, which the notice suggests.

No meter or additional charge is described in the roadmap record or the notice.

## Scope

- **Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant), on Desktop and Teams and Surface Devices.
- **Release phases.** Targeted Release and General Availability. The notice gives the Targeted Release window above and says General Availability will be announced in Message center.
- **Who is affected.** Users who create or take part in Teams meetings and use Planner, in organisations with Teams, Planner and Loop enabled (MC1392571).
- **Facilitator.** Optional for the feature as the notice describes it. Facilitator needs Loop experiences in Teams turned on, and only licensed users can prompt it.
- **Out of scope as described.** Existing and previously created plans do not change.

## Governance guidance

### Before rollout
- Confirm that Teams, Planner and Loop experiences in Teams are turned on in the tenant, as the notice lists them as the conditions for availability.
- Decide whether Facilitator should stay allowed (it is allowed by default) and, if not, block it in the Teams admin center before the feature reaches users.
- Draft guidance on when to link a meeting to an existing plan and when to let a meeting create its own plan.
- Brief the helpdesk, as the notice suggests, on where meeting tasks go and how to create tasks manually.

### At rollout
- Watch Message center for the General Availability announcement, since the notice says Microsoft will post it there.
- Test a meeting linked to a plan with two test users and check where Facilitator-created and manual tasks appear.
- Check with the owners of the plans you expect users to link whether they are comfortable with meeting tasks arriving in those plans.

### After rollout
- Review user feedback and helpdesk tickets for confusion about which plan holds a meeting's tasks.
- Re-check Microsoft Learn for a page on this feature and update internal guidance when one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Facilitator, which can create meeting tasks in the selected plan, is available</strong><br><small>Tenant</small><br><small class="controls__note">Removes Facilitator's task creation only; the notice says users can still create tasks manually. Facilitator is allowed by default.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Planner app is available in Teams (coarse alternative; not specific to linking meetings to plans)</strong><br><small>Tenant</small><br><small class="controls__note">Turns Planner off for the organisation, not just this option. The PowerShell page covers basic plans in Teams and web; premium plans are covered elsewhere.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -IsPlannerAllowed $false</code> <a href="https://learn.microsoft.com/planner/disable-planner" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No row in the table governs the link itself: neither the notice nor the pages read name a setting that turns off connecting a meeting to a plan. The notice says availability depends on Teams, Planner, Loop and, optionally, Facilitator being enabled, so the rows below are neighbouring controls that affect parts of the feature.

- **Facilitator row.** Blocking Facilitator removes its automatic task creation; per the notice, manual task creation remains. The Facilitator page tells admins to sign in to the Teams admin center with Teams admin credentials.
- **Planner row.** This is a coarse switch that turns Planner off, not a control over this feature. The Planner PowerShell page is written for a global admin and applies to basic plans in Teams and web, and to all plans in other Planner endpoints.

## Open questions

- Which accounts and permissions decide who can see and edit tasks in a plan once a meeting is linked to it, and does a meeting's attendee list change plan access? Watch the Learn page for the feature and Message center.
- Will an admin setting be published to restrict or turn off linking meetings to plans, or is control limited to the Facilitator and Planner switches?
- How does the Facilitator "Task tracking integration with Planner" public preview relate to the General Availability release in this rollout?
- Is a licence beyond Microsoft 365 required for the linking option itself? Watch the Planner licensing pages.

<!-- rationale
risk: Low. Microsoft's notice describes a user choice about which Planner plan receives meeting tasks, with no change to existing plans; who can see tasks in a linked plan is not stated.
cost: Low. The only cost the sources show is indirect: communications and admin time. A licence specific to linking meetings to plans is not yet published.
impact: Medium. Meeting organisers and participants who use Planner get the option by default; if no plan is selected, meetings keep creating a new plan.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table / command: Update-M365TeamsApp -Id <app id> -IsBlocked $true is the documented automation for blocking Facilitator. | Found: Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -IsBlocked $true ... Unblocks Bookings app (App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b). | Fix: Remove the blocking call from controls[0].api and its rendered table cell. Set the side to null and append to the note: 'Automation for blocking Facilitator is not verified: the cited Update-M365TeamsApp reference labels its -IsBlocked $true example as unblocking. Use the documented admin UI.' Do not replace $true with $false: the reference does not establish that correction. This finding concerns contradictory documentation, not verified runtime behaviour. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Risk assessment: Change & support / record: Worldwide Targeted Release is due to begin in late December 2026, previously late September. | Found: Targeted Release (Worldwide): We will begin rolling out in late December 2026 (previously late September) | Fix: Replace the summary's last sentence with 'Microsoft's notice plans Worldwide Targeted Release to begin in late December 2026.' In Risk assessment, change 'Targeted Release begins' to 'Microsoft plans Targeted Release to begin'.
- [supported, minor] What's changing; Risk assessment: Change & support / record: Targeted Release completes by the end of January 2027, previously the end of September 2026. | Found: expect to complete by end of January 2027 (previously end of September 2026). | Fix: In What's changing, replace 'and completes by end of January 2027' with 'and is expected to complete by end of January 2027'. In Risk assessment, replace 'and completes by end of January 2027' with 'with completion expected by end of January 2027'.
- [supported, minor] Cost and licensing: Planner / licensing: Premium capabilities require a premium licence such as Planner Plan 1, Project Plan 3 or Project Plan 5. | Found: Users with a Planner premium license such as Planner Plan 1, Project Plan 3, or Project Plan 5, can use the premium capabilities in Planner. | Fix: Replace the premium-licence clause with 'premium capabilities need a Planner premium licence such as Planner Plan 1 or Planner and Project Plan 3' and cite https://learn.microsoft.com/planner/licensing. The current service description at https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description uses the updated names and says Plan 5 reached end of sale on May 1, 2026, while existing subscriptions can continue. | Source: https://learn.microsoft.com/microsoftteams/manage-planner-app
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: The checklist asks administrators to check Teams and Loop enablement, but the controls table contains only Facilitator and Planner rows. | Found: Confirm that Teams, Planner and Loop experiences in Teams are turned on in the tenant ... Table rows: Whether Facilitator ... is available; Whether the Planner app is available in Teams | Fix: The first Before rollout checklist bullet names Teams and Loop enablement without corresponding table rows. Remove that checklist bullet; Scope already records the notice's prerequisite. Do not add unverified control rows.
-->
