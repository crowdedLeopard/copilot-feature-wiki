---
title: "Dynamics 365 Field Service: Scheduling Operations Agent optimises multiple resources at once"
slug: "dynamics-365-field-service-optimize-resource-scheduling-optimize-multiple-resources-with-s"
roadmapId: 576884
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Field Service"]
summary: "Field Service's Scheduling Operations Agent will optimise several technicians at once, from the schedule board or through plans. Tenants that have the agent on get it automatically, billed in Copilot Studio credits."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says the agent uses Copilot Studio credits under consumption-based billing, through prepaid capacity or pay-as-you-go. Its prerequisites name no user licence, and a credit rate for this feature is not yet published."
audiences: ["service-owner","finops","power-platform-admin"]
tags: ["field-service","dynamics-365","agents","autonomous-agents","copilot-credits","pay-as-you-go","security-roles"]
sources:
  - title: "Microsoft 365 Roadmap 576884"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576884"
    kind: "roadmap"
  - title: "Scheduling Operations Agent overview (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-overview"
    kind: "learn"
  - title: "Set up the Scheduling Operations Agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    kind: "learn"
  - title: "Run interactive optimizations (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-interactive-optimizations"
    kind: "learn"
  - title: "Run batch optimizations (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-batch-optimizations"
    kind: "learn"
  - title: "Scheduling Operations Agent limits and troubleshooting (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-limits"
    kind: "learn"
  - title: "Goals and objectives in the Scheduling Operations Agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-goals"
    kind: "learn"
  - title: "Scopes in the Scheduling Operations Agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-scopes"
    kind: "learn"
  - title: "Plans in the Scheduling Operations Agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-plans"
    kind: "learn"
  - title: "Booking Status (BookingStatus) table/entity reference (Microsoft Dynamics 365 Field Service)"
    url: "https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/bookingstatus"
    kind: "docs"
  - title: "Booking Status (BookingStatus) table/entity reference (Microsoft Dynamics 365)"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/bookingstatus"
    kind: "docs"
  - title: "Optimization Plan (msdyn_schedulingoptimizationplan) table/entity reference (Microsoft Dynamics 365 Field Service)"
    url: "https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_schedulingoptimizationplan"
    kind: "docs"
  - title: "pac admin"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    kind: "docs"
  - title: "Govern Copilot Credit consumption for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/govern-credit-consumption"
    kind: "learn"
  - title: "Who can run optimisations and who can create scopes, goals and plans (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-assign-user"
    kind: "learn"
videos: []
related: ["dynamics-365-field-service-optimize-resource-scheduling-optimize-schedules-with-scheduling","copilot-credits","security-roles"]
controls:
  - governs: "Whether the Scheduling Operations Agent is turned on in the environment"
    scope: "environment"
    ui:
      surface: "Field Service app"
      path: "Resources > Scheduling Parameters > Resource Scheduling > Agents > Scheduling Operations Agent (Preview)"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    api: null
    note: "Turning it on enables both interactive and batch optimisations. Requires an administrator role in Dynamics 365."
  - governs: "Who can run optimisations and who can create scopes, goals and plans"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "environment > Settings > Users + permissions > Users > user > Manage security roles > Scheduling Operations Agent Administrator or Scheduling Operations Agent User"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    api:
      kind: "pac-cli"
      call: "pac admin assign-user --environment <environment id> --user <user principal name> --role <role name>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-assign-user"
    note: "Roles are Scheduling Operations Agent User and Scheduling Operations Agent Administrator. Assign them alongside a dispatcher role."
  - governs: "Which bookings the agent may move, delete or ignore, by booking status"
    scope: "environment"
    ui:
      surface: "Field Service app"
      path: "Resources > Booking Settings > Booking Statuses > booking status > Optimization Method"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    api:
      kind: "rest"
      call: "PATCH /bookingstatuses(bookingstatusid)"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/bookingstatus"
    note: "Unset statuses are treated as Do Not Move. The request body sets msdyn_optimizationmethod: 192350000 (Optimize), 192350001 (Do Not Move), or 192350002 (Ignore)."
  - governs: "Whether a batch plan applies its results automatically or holds them for review"
    scope: "environment"
    ui:
      surface: "Resource Scheduling app"
      path: "Settings > Optimization > Scheduling Plans > plan > Apply method"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-batch-optimizations"
    api:
      kind: "rest"
      call: "PATCH /msdyn_schedulingoptimizationplans(msdyn_schedulingoptimizationplanid)"
      docs: "https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_schedulingoptimizationplan"
    note: "The request body sets msdyn_applymethod. Administrators create plans; the User role can run existing ones."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-20"
roadmapModified: "2026-10-16T19:10:11"
changes:
  - date: "2026-11-19"
    note: "New briefing on multi-resource optimisation in the Scheduling Operations Agent, noting where Learn's batch limit of 50 resources differs from the roadmap's 30."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 86 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: booking status control now gives the documented PATCH /bookingstatuses call; role path extended; Azure budget wording qualified; team role assignment denial and one open question removed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 87 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 84
  unconfirmed: 0
  contradicted: 3
  attempts: 2
  hash: "d76c89e5f003221615c3abc9b4cf16e6"
---

## What's changing

The roadmap item says the Scheduling Operations Agent in Dynamics 365 Field Service will optimise the schedules of several technicians in one request. It lists four capabilities: optimising up to 5 resources from the schedule board, up to 30 resources using an optimization plan, custom goals with weighted objectives, and custom optimization scopes for use in plans. Dispatchers review and compare the proposed schedule with the current one before applying it. The roadmap says the capabilities build on the existing public preview and "will be automatically enabled for all organizations that have the agent enabled".

Learn already documents both modes as preview. Interactive optimisations take up to five resources, up to 120 jobs and a window of up to 72 hours. Batch optimisations run asynchronously from a plan that combines a scope (which resources, requirements and bookings are in play), a goal and a time range. A plan runs on demand or on a recurrence with a 30-minute minimum interval, and either holds results for review or applies them automatically. In a custom goal, each included objective gets a weight from 1 to 10.

The two sources differ on the batch limit: the roadmap says up to 30 resources, while Learn's limits table lists up to 50 resources, 4,000 jobs and a 14-day range for batch optimisations, and says the limits might change as the feature evolves. Both figures are reported here as published.

The roadmap status is In development, with a preview date of June CY2026 and a target of March CY2027 (targets, not commitments). It lists General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. The Scheduling Operations Agent feature articles are marked as preview, prerelease documentation that is subject to change.

## Why it matters

For a service owner this is mainly a spend and bookings question. Learn says an optimisation request consumes credits based on the number of resources it includes, so optimising more technicians per request uses more capacity, and a recurring plan repeats that on a schedule. The agent can also move or delete scheduled bookings, so a plan that applies results automatically changes dispatchers' schedules without a person looking first.

The agent starts off: Learn says an administrator must set it up and turn on the Scheduling Operations Agent (Preview) toggle, and that this one toggle enables both interactive and batch optimisations. Tenants that have not turned it on see no change from this item. Tenants that have it on should expect the multi-resource, goal, scope and plan capabilities to arrive with the roadmap's automatic enablement, with no separate switch documented for them.

## Risk assessment

**Data exposure**
- The agent works from the resources, open requirements and existing bookings in scope. A scope stores its fetchXML query rather than a reference to a view, so a scope built on a broad query puts a large set of records in front of the agent. Keep scope queries tight; Learn says the agent truncates lists that exceed its limits.
- The agent runs as an application user in the Scheduling Operations Agent Team, which by default can read and write the standard scheduling tables. Assigning that team roles for custom tables widens what the agent can read and update.

**Security & identity**
- Each change uses the combined permissions of the user who runs the optimisation and the agent's application user, so both need access to the affected records. Two roles control use: the Scheduling Operations Agent Administrator (creates scopes, goals and plans) and the Scheduling Operations Agent User (runs optimisations and plans).
- Where column-level security applies to columns that scopes or queries reference, the team must be added to the matching field security profile. Learn warns that otherwise the agent might ignore filter conditions on those columns and return incorrect results.

**Autonomy & actions**
- Bookings in a status set to Optimize can be moved or deleted by the agent; statuses with no optimization method are treated as Do Not Move. Check each status before turning the agent on.
- A plan set to Apply automatically applies results as soon as the optimisation finishes. Review before apply holds them, and a request more than 72 hours old, or past the start of its time range, cannot be applied.
- In interactive runs, Learn cautions that with Always match time window selected, a booking with an expired promise window is deleted from the suggested schedule.

**Change & support**
- The roadmap's 30-resource batch figure and Learn's 50-resource figure differ, and Learn's limits are preview values. Dispatchers who hit a limit see records dropped or, where existing bookings alone exceed the job limit, a failed run.
- Learn lists unsupported cases: Equipment, Pool and Facility resource types, requirement groups and multiday requirements, and resources with four or more breaks in a work day or shift.

## Cost and licensing

**Licence.** Learn's setup page says the Scheduling Operations Agent uses Microsoft Copilot Studio credits and consumption-based billing, charging per use. Its prerequisites list a Field Service version, a Universal Resource Scheduling version, location and map settings, and a Dynamics 365 administrator role. They name no user licence.

**Meter.** Learn says a single optimisation request consumes credits based on the number of resources it includes, so optimising more resources at once uses more capacity. It describes two billing models, prepaid capacity (Copilot Studio credit pack subscriptions) and pay-as-you-go (an Azure subscription linked to the Power Platform environment), usable together, with prepaid capacity consumed first. Both require the Dynamics 365 environment to be linked to a Power Platform environment.

**Limits on spend.** Learn says credit capacity and usage for both models can be viewed in the Power Platform admin center. The setup page points to Azure Cost Management for pay-as-you-go usage and budgets; Microsoft's credit-governance guidance clarifies that Azure budgets provide alerts but do not stop usage. It says that when the quota is depleted, AI capabilities are unavailable until more capacity is added.

**Not yet published.** A credit rate per resource for this agent is not yet published on the setup page. Indirect costs are admin and dispatcher time to set booking statuses, roles, goals, scopes and plans.

## Scope

**Who.** Dispatchers who run optimisations need the Scheduling Operations Agent User role, plus a role that grants access to bookable resources, bookings and requirements (Learn gives Field Service - Dispatcher as an example). Admins who create scopes, goals and plans need the Scheduling Operations Agent Administrator role.

**Where.** The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn says the agent is available in the same Azure regions as Dynamics 365 Field Service, except Azure Government and China,.

**Prerequisites.** Field Service version 8.8.133.214 or newer, Universal Resource Scheduling version 3.12.149.15 or newer, location and map settings turned on, and an administrator role in Dynamics 365.

**Rollout.** The roadmap says the new capabilities are enabled automatically for organisations that have the agent enabled. Learn describes the agent as off until an administrator sets it up and turns it on.

## Governance guidance

### Before rollout
- Check each environment against the setup prerequisites (Field Service and Universal Resource Scheduling versions, location and map settings) before deciding whether to turn the agent on.
- Confirm a billing model is in place: prepaid capacity assigned to the Power Platform environment, or a pay-as-you-go Azure subscription linked to it.
- Set the Optimization Method on every booking status (Optimize, Do Not Move or Ignore), leaving statuses for work in progress or committed to customers as Do Not Move.
- Assign the Scheduling Operations Agent User and Administrator roles to the right people, alongside a dispatcher role.

### At rollout
- Turn on Scheduling Operations Agent (Preview) only in environments where roles, billing and booking statuses are ready; the one toggle enables interactive and batch optimisations together.
- Start new plans on Review before apply and move to Apply automatically only after reviewing several results.
- Give the Scheduling Operations Agent Team the roles it needs for any custom tables your scopes use, and add it to field security profiles that cover referenced columns.
- Tell dispatchers the limits you are working to: five resources per interactive run, and Learn's current batch limit of 50 resources, which differs from the roadmap's 30.

### After rollout
- Review credit consumption in the Power Platform admin center, and Azure Cost Management for pay-as-you-go, after the first week of multi-resource runs.
- Audit recurring plans for their Apply method and recurrence interval, and switch any that should not apply unattended back to Review before apply.
- Re-read the Learn limits pages when the roadmap status changes from In development, as the figures may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Scheduling Operations Agent is turned on in the environment</strong><br><small>Environment</small><br><small class="controls__note">Turning it on enables both interactive and batch optimisations. Requires an administrator role in Dynamics 365.</small></td><td data-label="Admin UI"><strong>Field Service app</strong><br>Resources › Scheduling Parameters › Resource Scheduling › Agents › Scheduling Operations Agent (Preview) <a href="https://learn.microsoft.com/dynamics365/field-service/soa-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can run optimisations and who can create scopes, goals and plans</strong><br><small>User</small><br><small class="controls__note">Roles are Scheduling Operations Agent User and Scheduling Operations Agent Administrator. Assign them alongside a dispatcher role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>environment › Settings › Users + permissions › Users › user › Manage security roles › Scheduling Operations Agent Administrator or Scheduling Operations Agent User <a href="https://learn.microsoft.com/dynamics365/field-service/soa-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin assign-user --environment &lt;environment id&gt; --user &lt;user principal name&gt; --role &lt;role name&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-assign-user" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which bookings the agent may move, delete or ignore, by booking status</strong><br><small>Environment</small><br><small class="controls__note">Unset statuses are treated as Do Not Move. The request body sets msdyn_optimizationmethod: 192350000 (Optimize), 192350001 (Do Not Move), or 192350002 (Ignore).</small></td><td data-label="Admin UI"><strong>Field Service app</strong><br>Resources › Booking Settings › Booking Statuses › booking status › Optimization Method <a href="https://learn.microsoft.com/dynamics365/field-service/soa-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /bookingstatuses(bookingstatusid)</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/bookingstatus" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a batch plan applies its results automatically or holds them for review</strong><br><small>Environment</small><br><small class="controls__note">The request body sets msdyn_applymethod. Administrators create plans; the User role can run existing ones.</small></td><td data-label="Admin UI"><strong>Resource Scheduling app</strong><br>Settings › Optimization › Scheduling Plans › plan › Apply method <a href="https://learn.microsoft.com/dynamics365/field-service/soa-batch-optimizations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /msdyn_schedulingoptimizationplans(msdyn_schedulingoptimizationplanid)</code> <a href="https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_schedulingoptimizationplan" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The agent toggle has no documented API, so it is a manual step in each environment. Roles are assigned per environment, and the agent's own access is granted separately: in the Power Platform admin center, select the environment, then Settings > Teams, and assign security roles to the Scheduling Operations Agent Team (Learn's setup page gives this path).

The booking status and plan rows are the two controls on what the agent may change and whether results apply unattended. The booking status update operation is documented in the base BookingStatus reference; the Field Service extension documents its writable msdyn_optimizationmethod column. Credit capacity is managed in the Power Platform admin center and, for pay-as-you-go, Azure Cost Management, as the setup page describes.

## Open questions

- Which batch limit will apply at general availability: the roadmap's 30 resources or the 50 that Learn's limits table lists? Watch the limits page and the roadmap item.
- How many Copilot Studio credits does one optimisation request use for a given number of resources? Learn says consumption depends on the resource count but publishes no rate for this agent.
- For tenants already running the preview, will goals, scopes, plans and multi-resource runs appear without any admin action, as the roadmap's automatic enablement suggests, and will the toggle's (Preview) label and setup steps change at general availability?

<!-- rationale
risk: Medium. The agent can move or delete bookings that an admin has marked Optimize, and a batch plan set to Apply automatically applies results without review. Bookings with no optimization method set are treated as Do Not Move.
cost: Variable. Learn says the agent bills in Copilot Studio credits (prepaid capacity or pay-as-you-go) and that a request uses credits based on the number of resources it includes. A rate for this feature is not yet published.
impact: Medium. Dispatchers and the admins who build goals, scopes and plans notice it. It does not change anything for tenants that have not turned the agent on.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState / default: The default state of this multi-resource expansion is admin-opt-in. | Found: These capabilities build on the existing public preview of the Scheduling Operations Agent and will be automatically enabled for all organizations that have the agent enabled. | Fix: Set defaultState to 'on' for this expansion. Retain the existing qualification that automatic enablement applies to organizations that already have the agent enabled, and that initial agent setup still requires an administrator.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: At rollout / behaviour: Interactive optimization supports up to five resources. | Found: Up to 5. A resource with a capacity greater than 1 counts as one resource for each capacity point. | Fix: After the interactive five-resource limit, add: 'A resource with capacity greater than 1 counts once per capacity point.' Apply the same qualification to the governance reminder; the limits page states this qualification. | Source: https://learn.microsoft.com/dynamics365/field-service/soa-limits
- [contradicted, minor] front matter: action / consistency: The action rating is review although the expansion arrives automatically for existing agent organizations. | Found: action: "review" The roadmap says the new capabilities are enabled automatically for organisations that have the agent enabled. | Fix: Set action to 'prepare': the expansion arrives automatically for existing agent organizations, has metered usage and scheduling controls to review, and its March CY2027 target is more than 60 days after the run date.
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control the governance checklist asks readers to configure or review has a controls-table row. | Found: Confirm a billing model is in place Give the Scheduling Operations Agent Team the roles it needs add it to field security profiles Audit recurring plans for their Apply method and recurrence interval | Fix: The checklist steps to configure billing capacity, grant agent-team security roles, add the team to field security profiles and audit recurrence intervals have no corresponding controls-table rows. Keep these as background rather than checklist instructions; no new rows are requested.
-->
