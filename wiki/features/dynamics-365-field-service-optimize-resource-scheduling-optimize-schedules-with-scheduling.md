---
title: "Dynamics 365 Field Service: Scheduling Operations Agent suggests optimised technician schedules"
slug: "dynamics-365-field-service-optimize-resource-scheduling-optimize-schedules-with-scheduling"
roadmapId: 577807
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Field Service"]
summary: "Dispatchers can ask Copilot or the schedule board for an optimised schedule for up to five resources (subject to resource capacity), or run batch plans. An administrator must switch the agent on, and it consumes Copilot Studio credits."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "June CY2025"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "The setup page says the agent uses Microsoft Copilot Studio credits under consumption-based billing, through prepaid capacity or pay-as-you-go. The credit cost of one optimisation is not stated on that page."
audiences: ["power-platform-admin","service-owner","finops"]
tags: ["dynamics-365","field-service","agents","autonomous-agents","copilot","copilot-credits","usage-based-billing","pay-as-you-go","security-roles"]
sources:
  - title: "Microsoft 365 Roadmap 577807"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577807"
    kind: "roadmap"
  - title: "Scheduling Operations Agent overview (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-overview"
    kind: "learn"
  - title: "Set up the Scheduling Operations Agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    kind: "learn"
  - title: "Run batch optimizations (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-batch-optimizations"
    kind: "learn"
  - title: "Run interactive optimizations (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-interactive-optimizations"
    kind: "learn"
  - title: "Scheduling Operations Agent limits and troubleshooting (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-limits"
    kind: "learn"
  - title: "Booking-level restrictions in the Scheduling Operations Agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/field-service/soa-booking-level-restrictions"
    kind: "learn"
  - title: "Which users can run optimisations or create scopes, goals and plans (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Which booking statuses the agent may move, preserve or override (API)"
    url: "https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/bookingstatus"
    kind: "learn"
  - title: "Batch plans: scope, goal, schedule and whether results apply automatically (API)"
    url: "https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_schedulingoptimizationplan"
    kind: "learn"
  - title: "Update and delete table rows by using the Web API"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api"
    kind: "learn"
  - title: "Which booking statuses the agent may move, preserve or override (REST API)"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/bookingstatus"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether the Scheduling Operations Agent is turned on in the environment"
    scope: "environment"
    ui:
      surface: "Field Service app"
      path: "Resources > Scheduling Parameters > Resource Scheduling > Agents"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    api: null
    note: "Requires an administrator role in Dynamics 365. Turning it on enables both interactive and batch optimisations."
  - governs: "Which users can run optimisations or create scopes, goals and plans"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref with body {\"@odata.id\":\"[Organization URI]/api/data/v9.0/roles(<role ID>)\"}"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "General Dataverse role assignment; use the role ID of Scheduling Operations Agent User or Administrator."
  - governs: "Which booking statuses the agent may move, preserve or override"
    scope: "environment"
    ui:
      surface: "Field Service app"
      path: "Resources > Booking Settings > Booking Statuses > booking status > Optimization Method"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-setup"
    api:
      kind: "rest"
      call: "PATCH [Organization URI]/api/data/v9.2/bookingstatuses(<booking status ID>) with Content-Type: application/json, If-Match: * and body {\"msdyn_optimizationmethod\":192350000}"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/bookingstatus"
    note: "Example selects Optimize; 192350001 is Do Not Move and 192350002 is Ignore. Do Not Move applies when the property is not set."
  - governs: "Batch plans: scope, goal, schedule and whether results apply automatically"
    scope: "environment"
    ui:
      surface: "Resource Scheduling app"
      path: "Settings > Optimization > Scheduling Plans > New > Apply method"
      docs: "https://learn.microsoft.com/dynamics365/field-service/soa-batch-optimizations"
    api:
      kind: "rest"
      call: "PATCH [Organization URI]/api/data/v9.2/msdyn_schedulingoptimizationplans(<plan ID>) with Content-Type: application/json, If-Match: * and body {\"msdyn_applymethod\":859530000}"
      docs: "https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_schedulingoptimizationplan"
    note: "Requires the Scheduling Operations Agent Administrator role to create plans. Apply method is Review before apply or Apply automatically; the example selects Review before apply."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-22T23:45:32"
changes:
  - date: "2026-11-17"
    note: "New briefing on the Scheduling Operations Agent for Dynamics 365 Field Service, documented on Learn as a preview."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: interactive limit qualified by resource capacity, Always match time window behaviour reworded, 72-hour expiry rule completed, Do Not Move qualified, two API calls made runnable, and checklist steps without table rows removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 92 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 96 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 96
  confirmed: 96
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "dbd00e531b9dbf4d583bd1f0f5894dac"
---

## What's changing

The Scheduling Operations Agent lets Dynamics 365 Field Service dispatchers ask for a suggested schedule for one or more technicians, review it, and apply it. The roadmap item describes it as a Copilot request such as maximising technician utilisation or work order priority, available from the Copilot side pane anywhere in the Field Service app.

Microsoft Learn documents two modes. Interactive optimisations let a dispatcher select up to five resources (subject to resource capacity) from the schedule board, a resource list or Copilot, then review the suggestion before applying it. Batch optimisations run asynchronously over a scope, a goal and a plan, either on demand or on a recurring schedule, and the plan can be set to Review before apply or Apply automatically. Learn's overview says the agent never moves bookings marked Do Not Move and respects each technician's working hours and breaks; the booking-level restrictions page also documents an Optimization behavior setting that overrides the booking status method for an individual booking.

The roadmap item is In development with a target date of March CY2027 and a preview date of June CY2025. Learn already documents the agent as a preview feature that is rolling out gradually across Azure regions, so the two sources differ on stage. Learn also notes that preview features are not meant for production use. The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform; Learn says the agent is available in the same Azure regions as Dynamics 365 Field Service, except Azure Government and China.

## Why it matters

This is an agent that writes to booking records, so a service owner should treat it as a new automated actor in the schedule rather than a reporting feature. Its reach is set by what an administrator enables: the setup page states that an administrator must set the agent up before dispatchers can use it, so nothing is available to dispatchers until then.

It also introduces a spend question. Optimisations consume Copilot Studio credits, and the setup page says that when the quota is depleted, AI capabilities are unavailable until more capacity is added. Agree the billing model and an owner for capacity before enabling it, because a busy dispatch desk running multi-resource optimisations draws on that capacity.

## Risk assessment

**Data exposure**

- The agent runs as an application user in the Scheduling Operations Agent Team. Each change uses the combined permissions of the person running the optimisation and that application user. By default the application user can read and write the standard scheduling tables, so review the roles you add to the team for custom, Field Service or Project Operations tables.
- If you use column-level security on columns that scopes or queries reference, add the Scheduling Operations Agent Team to the matching field security profile. Learn says that otherwise the agent might ignore filter conditions on those columns and return incorrect results.

**Security & identity**

- Access is controlled by two additive security roles, Scheduling Operations Agent Administrator (creates scopes, goals and plans) and Scheduling Operations Agent User (runs optimisations). Users also need a role for the underlying scheduling tables, such as Field Service - Dispatcher.

**Autonomy & actions**

- A booking status set to Optimize lets the agent move or delete bookings with that status; Do Not Move preserves them and is the behaviour when the property is not set. Learn's booking-level restrictions page says that an Optimization behavior set on an individual booking is used instead of its status method. Review which statuses you mark Optimize, because a deleted or moved booking changes a customer appointment.
- A batch plan set to Apply automatically applies results without a review step. A reviewed request expires at the start of its optimisation window or 72 hours after the request runs, whichever comes first, and Learn says the agent warns before applying if bookings, requirements or resources changed since the request ran.
- With Always match time window selected, Learn warns that the agent removes a booking with an expired promise window from the suggested schedule; the dispatcher reviews the suggestion before applying it.

**Change & support**

- Priority Value (1 to 100) drives which work the agent favours, and Learn says it ignores the Level of Importance field. Widely spaced values make the highest priority nearly always included regardless of how inefficient the placement is.
- Learn lists unsupported cases: Equipment, Pool and Facility resources, requirement groups, multiday requirements with requirement detail records, and resources with four or more breaks per day or shift, which produce an error. Expect support questions from dispatchers who hit these.

## Cost and licensing

The setup page names no user licence among its prerequisites, which are Field Service and Universal Resource Scheduling versions, Location and map settings, and an administrator role in Dynamics 365. It does not say what licence a dispatcher needs, and the roadmap item gives none.

The meter is Microsoft Copilot Studio credits. The setup page says Scheduling Operations Agent and other Copilot and agent capabilities in Dynamics 365 use these credits, billed per use, and that one optimisation request consumes credits based on the number of resources it includes. Two billing models are supported: prepaid capacity from a Copilot credit pack subscription, and pay-as-you-go through an Azure subscription. Both can be used in one environment, prepaid capacity is consumed first, and both require linking the Dynamics 365 environment to a Power Platform environment.

For pay-as-you-go, the page points to Microsoft Cost Management in the Azure portal to view usage and adjust budgets. Capacity and usage are shown in the Power Platform admin center. The credit cost of one optimisation, and any cap specific to this agent, are not given on the setup page. See [Copilot Credits](/concepts/copilot-credits/) for how the meter works generally.

## Scope

Dispatchers who run optimisations and administrators who create scopes, goals and plans are the audience; the roadmap states the feature is enabled by admins for end users. The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. Learn says the agent is in the same Azure regions as Field Service except Azure Government and China, and that rollout is gradual, with dates in the Universal Resource Scheduling version history.

Prerequisites from the setup page: Field Service version 8.8.133.214 or newer, Universal Resource Scheduling version 3.12.149.15 or newer, Location and map settings turned on, and an administrator role in Dynamics 365. Each bookable resource the agent should consider needs Display on schedule board set to Yes.

Limits per optimisation, from the limits page: interactive runs support up to five resource capacity points (a resource with capacity greater than one counts once for each capacity point), 120 jobs and a 72-hour window; batch runs cover up to 50 resources, 4,000 jobs, 2,000 bookings per resource and a 14-day range. Recurring plans have a minimum interval of 30 minutes.

## Governance guidance

### Before rollout

- Set Optimization Method on every booking status (Optimize, Do Not Move or Ignore), so the agent's behaviour is deliberate rather than the Do Not Move default.
- Decide which dispatchers get Scheduling Operations Agent User and which administrators get Scheduling Operations Agent Administrator.

### At rollout

- Turn on Scheduling Operations Agent (Preview) in the Resource Scheduling parameters, starting in a non-production environment because Learn describes the feature as preview.
- Assign the two security roles alongside a dispatcher role in the Power Platform admin center.
- Create batch plans with Review before apply first, and move to Apply automatically only after the suggested schedules have been checked against dispatcher expectations.

### After rollout

- Watch the roadmap item and Learn for the move from preview to general availability, and re-check licensing and region statements then.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Scheduling Operations Agent is turned on in the environment</strong><br><small>Environment</small><br><small class="controls__note">Requires an administrator role in Dynamics 365. Turning it on enables both interactive and batch optimisations.</small></td><td data-label="Admin UI"><strong>Field Service app</strong><br>Resources › Scheduling Parameters › Resource Scheduling › Agents <a href="https://learn.microsoft.com/dynamics365/field-service/soa-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can run optimisations or create scopes, goals and plans</strong><br><small>User</small><br><small class="controls__note">General Dataverse role assignment; use the role ID of Scheduling Operations Agent User or Administrator.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/dynamics365/field-service/soa-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref with body {&quot;@odata.id&quot;:&quot;[Organization URI]/api/data/v9.0/roles(&lt;role ID&gt;)&quot;}</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which booking statuses the agent may move, preserve or override</strong><br><small>Environment</small><br><small class="controls__note">Example selects Optimize; 192350001 is Do Not Move and 192350002 is Ignore. Do Not Move applies when the property is not set.</small></td><td data-label="Admin UI"><strong>Field Service app</strong><br>Resources › Booking Settings › Booking Statuses › booking status › Optimization Method <a href="https://learn.microsoft.com/dynamics365/field-service/soa-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [Organization URI]/api/data/v9.2/bookingstatuses(&lt;booking status ID&gt;) with Content-Type: application/json, If-Match: * and body {&quot;msdyn_optimizationmethod&quot;:192350000}</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/bookingstatus" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Batch plans: scope, goal, schedule and whether results apply automatically</strong><br><small>Environment</small><br><small class="controls__note">Requires the Scheduling Operations Agent Administrator role to create plans. Apply method is Review before apply or Apply automatically; the example selects Review before apply.</small></td><td data-label="Admin UI"><strong>Resource Scheduling app</strong><br>Settings › Optimization › Scheduling Plans › New › Apply method <a href="https://learn.microsoft.com/dynamics365/field-service/soa-batch-optimizations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [Organization URI]/api/data/v9.2/msdyn_schedulingoptimizationplans(&lt;plan ID&gt;) with Content-Type: application/json, If-Match: * and body {&quot;msdyn_applymethod&quot;:859530000}</code> <a href="https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_schedulingoptimizationplan" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The agent toggle is set in the Field Service app by a user with an administrator role in Dynamics 365; Microsoft Learn documents no automation for the toggle at the time of writing (November 2026). The security role and Optimization Method rows use general Dataverse mechanisms and apply to this agent because the setup page names those roles and that property.

The Scheduling Operations Agent Team, which gives the agent's application user access to your data, is configured in the Power Platform admin center under the environment's Settings > Teams, per the setup page. Both the running user and the agent's application user must have access to the affected records.

Credit capacity and usage are viewed in the Power Platform admin center (the setup page links to Manage Copilot Studio credits and capacity). Microsoft Learn describes no separate cap or switch for this agent's credit use at the time of writing.

## Open questions

- What licence, if any, does a dispatcher need besides the credits meter? Watch the Scheduling Operations Agent setup page and the Power Platform Licensing Guide it links.
- How many Copilot Studio credits does one optimisation consume for a given number of resources? The setup page gives the principle but no rate.
- Where is the agent's data processed, and does a region without local AI processing need consent for data movement? The Learn pages for this agent do not say.
- When will the roadmap's March CY2027 target move the agent from preview to general availability, and will preview limits such as up to five interactive resources (subject to resource capacity) change? Watch the roadmap item and the Universal Resource Scheduling version history.

<!-- rationale
risk: Medium. Once an administrator turns it on, the agent can move or delete bookings, and a batch plan set to Apply automatically applies its results without review; the toggle, security roles and booking status settings cover this.
cost: Variable. The setup page says the agent uses Copilot Studio credits, and one optimisation request consumes credits according to the number of resources it includes. A per-request credit rate is not given on that page.
impact: Medium. Dispatchers who run optimisations and the technicians whose bookings change notice it; other Field Service users are unaffected until an administrator enables it.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance / admin-path: The enablement route is Field Service app > Resources > Scheduling Parameters > Resource Scheduling > Agents. | Found: Change to the Resources area and go to Scheduling Parameters > Resource Scheduling. Go to the Agents tab and turn on Scheduling Operations Agent (Preview). | Fix: Extend controls[0].ui.path and its rendered path to 'Resources > Scheduling Parameters > Resource Scheduling > Agents > Scheduling Operations Agent (Preview)', as given at https://learn.microsoft.com/dynamics365/field-service/soa-setup. | Source: https://learn.microsoft.com/dynamics365/field-service/soa-setup
- [supported, minor] controls[1].api; Governance controls table / command: The printed v9.0 POST systemuserroles_association/$ref with @odata.id assigning a role is a documented user role assignment. | Found: POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref Accept: application/json { "@odata.id":"[Organization URI]/api/data/v9.0/roles(<role ID>)" } | Fix: Set controls[1].api.call and its rendered call to 'POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref'. Add to the note: 'The request body's @odata.id identifies the Scheduling Operations Agent User or Administrator role.' | Source: https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team
- [supported, minor] controls[2].api; Governance controls table / command: PATCH v9.2 bookingstatuses with msdyn_optimizationmethod 192350000 sets Optimize, with valid JSON and If-Match headers. | Found: Update Event: True | PATCH /bookingstatuses(bookingstatusid) See Update | Fix: Set controls[2].api.call and its rendered call to 'PATCH [Organization URI]/api/data/v9.2/bookingstatuses(<booking status ID>)'. Add to its note: 'The request body sets msdyn_optimizationmethod; 192350000 selects Optimize.' The column and choices are at https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/bookingstatus, already cited. | Source: https://learn.microsoft.com/dynamics365/developer/reference/entities/bookingstatus
- [supported, minor] controls[3].api; Governance controls table / command: PATCH v9.2 msdyn_schedulingoptimizationplans with msdyn_applymethod 859530000 selects Review before apply. | Found: Update ... PATCH /msdyn_schedulingoptimizationplans(msdyn_schedulingoptimizationplanid); LogicalName | msdyn_applymethod; 859530000 | Review before apply; 859530001 | Apply automatically | Fix: Set controls[3].api.call and its rendered call to 'PATCH [Organization URI]/api/data/v9.2/msdyn_schedulingoptimizationplans(<plan ID>)'. Add to the note: 'The request body sets msdyn_applymethod; 859530000 selects Review before apply.' | Source: https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_schedulingoptimizationplan
-->
