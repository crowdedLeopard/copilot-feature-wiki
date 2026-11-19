---
title: "Customer Insights - Journeys: Outreach Optimization Agent picks email send times"
slug: "dynamics-365-customer-insights-journeys-improve-engagement-and-message-timing-with-outreac"
roadmapId: 577417
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Insights - Journeys"]
summary: "Dynamics 365 Customer Insights - Journeys is getting an AI journey step that chooses email send times and cadence and consumes Copilot credits. Microsoft's preview pages make it an admin-enabled agent."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: "July CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft Learn says use of the agent consumes Copilot credits, from prepaid Copilot Studio capacity or pay-as-you-go. Customer Insights - Journeys is licensed per tenant. An agent-specific Copilot credit rate is not yet published."
audiences: ["power-platform-admin","finops","maker","compliance"]
tags: ["customer-insights","dynamics-365","agents","copilot-credits","power-platform-admin-center","data-residency","automation"]
sources:
  - title: "Microsoft 365 Roadmap 577417"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577417"
    kind: "roadmap"
  - title: "Outreach Optimization Agent in Customer Insights - Journeys (preview)"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/outreach-optimization-agent"
    kind: "learn"
  - title: "Introduction to AI Hub in Customer Insights – Journeys (preview)"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub"
    kind: "learn"
  - title: "Manage prerequisites in AI Hub (preview)"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites"
    kind: "learn"
  - title: "Responsible AI FAQs for Outreach Optimization Agent"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/faqs-outreach-optimization-agent"
    kind: "learn"
  - title: "Set up quiet times to prevent messages from being sent during unwanted hours"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/real-time-marketing-quiet-times"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Move data across regions for Copilots, AI agents, and generative AI features"
    url: "https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot"
    kind: "learn"
  - title: "Whether agent data may move across regions for the environment (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings"
    kind: "learn"
  - title: "Quiet times the agent must respect (REST API)"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdynmkt_quiettimesetting"
    kind: "learn"
  - title: "Customer Insights license guidance"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/license-setup"
    kind: "learn"
  - title: "Create a table row using the Web API"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/create-entity-web-api"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
videos: []
related: ["copilot-credits","dynamics-365-customer-insights-data-agents-and-copilot-increase-ai-accuracy-by-grounding-a"]
controls:
  - governs: "Whether AI agents are available for Customer Insights - Journeys"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Dynamics 365 Customer Insights – Journeys > AI agents > Use AI agents"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub"
    api: null
    note: "Set per environment or environment group. Turning it off immediately disables all active Journeys agents, not only this one."
  - governs: "Whether Outreach Optimization Agent is enabled in an environment"
    scope: "environment"
    ui:
      surface: "Customer Insights - Journeys (AI Hub)"
      path: "AI Hub > Add and manage agents > Add an agent > Outreach Optimization Agent > Overview tab > Enable"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub"
    api: null
    note: "AI Hub is under Settings. Admin role by default; custom roles need msdynmkt_agentsettings permissions. Preview feature."
  - governs: "Copilot credit capacity and overage for the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT /licensing/allocationsV2?api-version=2024-10-01 {\"scope\":{\"environmentId\":\"<id>\"},\"allocatedEntitlements\":[{\"entitlementId\":\"MCSMessages\",\"allocation\":{\"quantity\":<n>},\"enforcementRules\":[{\"ruleType\":\"TenantPool\",\"enabled\":false}]}]}"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Host: https://api.powerplatform.com. Disables tenant-pool draw, not every overage source. An environment-group rule can lock this; updates then fail with TenantPoolLockedByPolicy."
  - governs: "Whether agent data may move across regions for the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Generative AI features > Edit > Move data across regions"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites"
    api:
      kind: "powershell"
      call: "Set-PowerPlatformGenerativeAiSettings -EnvironmentName <environment ID> -CrossGeoDataMovement $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings"
    note: "Mandatory prerequisite; the cmdlet page describes the parameter as allowing cross-geography data movement. The checkbox may not appear where the region has full in-region capacity."
  - governs: "Quiet times the agent must respect"
    scope: "other"
    ui:
      surface: "Customer Insights - Journeys"
      path: "Settings > Customer engagement > Quiet times"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/real-time-marketing-quiet-times"
    api:
      kind: "rest"
      call: "POST <organization URL>/api/data/v9.2/msdynmkt_quiettimesettings; Content-Type: application/json; body: <Quiet Time Setting JSON object>"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdynmkt_quiettimesetting"
    note: "General control: the agent page says it honours configured quiet times. Up to 21 consecutive days. The POST creates a Quiet Time Setting record; the caller supplies its configuration."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-18"
    note: "New briefing: Outreach Optimization Agent in Customer Insights - Journeys, based on the roadmap item and the preview Learn pages."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: AI Hub enablement path now includes the Overview tab, the quiet-times and capacity API calls are completed, Customer Insights - Journeys per-tenant licensing is stated, and an unsupported quiet-times gap and a checklist bullet were removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 76
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "277ad945110006677c3a0015a82db93b"
---

## What's changing

Outreach Optimization Agent is an AI journey step in Dynamics 365 Customer Insights - Journeys that decides when marketing emails are sent. A marketer adds it to a journey like any other step, selects one or more emails, and the agent schedules the sends. The roadmap item adds that it builds a baseline messaging plan from historical engagement, adjusts follow-up timing and cadence as engagement signals arrive, and treats quiet times as a hard constraint.

The Learn page for the agent is marked preview and describes a narrower behaviour than the roadmap text. It says the agent uses aggregated historical interaction patterns, such as when past emails were opened or clicked, to pick a send time, with a generic fallback when no history exists. For several emails, the maker chooses a goal (all emails sent, any link clicked, or selected links clicked) and an end date by which all sends must happen. If the goal is met early, the page says the agent still sends the remaining emails and records the goal as met. The AI Hub page separately says the agent analyses engagement history and real-time signals; the roadmap's early exit from the plan is not described on the agent page.

The roadmap item is In development with a preview date of July CY2026 and a target of April CY2027, for Worldwide (Standard Multi-Tenant) on the web, with release phases General Availability and Preview. Those dates are Microsoft's targets. Everything on the Learn pages describes the preview and is subject to change.

## Why it matters

This puts an AI agent in charge of outbound customer email timing, and it spends Copilot credits that your Power Platform capacity or Azure billing has to absorb. The people who feel it first are marketers who build journeys and recipients whose emails arrive at different times from a fixed schedule.

The Learn preview pages make it an admin decision: an administrator turns on AI agents, accepts three prerequisites and then enables the agent. Nothing in them says it arrives switched on. Use the preview to decide who owns the credit budget, whether cross-region data movement is acceptable and whether your quiet times and consent records are in order before any journey uses it.

## Risk assessment

**Data exposure**
- The agent reads your organisation's historical email interaction data (opens and clicks) to find peak engagement times. Microsoft says agent data might be processed and stored in regions outside the user's primary region, which is why the Move data across regions prerequisite exists. Control: the Move data across regions row.

**Security & identity**
- AI Hub is available to users with the Admin role by default; custom roles need agent settings permissions for the msdynmkt_agentsettings entity. Microsoft has not described which identity the agent runs as when it sends, so confirm that before relying on role-based reasoning.

**Autonomy & actions**
- Once a journey contains the step, the agent schedules and sends the selected emails without a per-send approval described on the Learn page. It is limited to email, and the maker sets the emails, goal and end date.
- The agent page says the remaining emails are still sent after the goal is met, so a contact who has already clicked can receive the rest of the sequence. The roadmap describes adjusting or exiting the plan; the preview page does not.
- Quiet times and contact point consent are honoured, according to the Learn page. Check the quiet-time rules (maximum 21 consecutive days) cover the channel and message types you send.

**Change & support**
- It is a preview feature and Microsoft says preview features are not meant for production use. Behaviour may change before the April CY2027 target.
- If a mandatory prerequisite is no longer accepted, all enabled agents are automatically disabled, so a change to data movement or AI prompts settings can silently stop journeys that depend on the step. Disabling AI agents at tenant level immediately disables all active agents.

## Cost and licensing

Microsoft Learn states that use of Outreach Optimization Agent consumes Copilot credits (agent page and AI Hub page). The AI Hub prerequisites page says Customer Insights - Journeys AI capabilities support two billing models: prepaid capacity using Copilot Studio message pack subscriptions, and pay-as-you-go, which charges for the messages agents consume during the month.

Capacity is allocated to an environment in the Power Platform admin center. The Copilot Studio capacity page says that if no overage source is enabled, an environment can consume only its allocated prepaid credits, and experiences that need credits can stop working once the allocation is used up. The allocation and overage controls are the first row of spend control in the table below.

Customer Insights - Journeys is licensed per tenant, according to Microsoft's Customer Insights licence guidance. Not yet published: the number of Copilot credits this agent uses per email, contact or decision. The Copilot Studio billing rates page lists no rate for it at the time of writing (November 2026). The agent page lists enabling the agent in AI Hub as its prerequisite and names no Customer Insights - Journeys licence; the AI Hub pages add tenant prerequisites but also name none. Indirect cost is admin time for the prerequisites and capacity monitoring.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform. Learn says AI agents in Customer Insights - Journeys are available in the regions listed on Microsoft's Dynamics 365, Power Platform and Copilot Studio availability page.

A tenant administrator must enable AI agents in the Power Platform admin center, then accept three prerequisites (Microsoft Copilot Studio capacity, Move data across regions, AI prompts) before an agent can be enabled in AI Hub. AI Hub needs Customer Insights - Journeys update 1.1.65002.153. The agent supports email only, and its use is limited to predefined scenarios with fixed goals and exit conditions. Rollout beyond the preview is not described; the roadmap target is April CY2027.

## Governance guidance

### Before rollout
- Decide who owns the Copilot credit budget and allocate capacity to the environment that runs journeys (Power Platform admin center, Licensing).
- Confirm with data protection owners whether the Move data across regions prerequisite is acceptable for the environment.
- Check that quiet times are configured in Customer Insights - Journeys and linked to the compliance profile your journey emails use.

### At rollout
- Turn on Use AI agents for the chosen environment or environment group, accept the prerequisites and enable only Outreach Optimization Agent in AI Hub.
- Start with a non-production journey and a single email so you can see the credits consumed before using multi-email sequences.
- Tell journey makers that remaining emails are still sent after the goal is met, and that the end date limits when sends can occur.

### After rollout
- Review credit consumption in the Copilot Studio licensing reports and the environment's capacity status.
- Re-check the prerequisites after any change to data movement or AI prompts settings, because losing one disables all enabled agents.
- Re-read the Learn pages when the roadmap status moves from In development, since the preview pages are subject to change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI agents are available for Customer Insights - Journeys</strong><br><small>Environment</small><br><small class="controls__note">Set per environment or environment group. Turning it off immediately disables all active Journeys agents, not only this one.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Dynamics 365 Customer Insights – Journeys › AI agents › Use AI agents <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Outreach Optimization Agent is enabled in an environment</strong><br><small>Environment</small><br><small class="controls__note">AI Hub is under Settings. Admin role by default; custom roles need msdynmkt_agentsettings permissions. Preview feature.</small></td><td data-label="Admin UI"><strong>Customer Insights - Journeys (AI Hub)</strong><br>AI Hub › Add and manage agents › Add an agent › Outreach Optimization Agent › Overview tab › Enable <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot credit capacity and overage for the environment</strong><br><small>Environment</small><br><small class="controls__note">Host: https://api.powerplatform.com. Disables tenant-pool draw, not every overage source. An environment-group rule can lock this; updates then fail with TenantPoolLockedByPolicy.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT /licensing/allocationsV2?api-version=2024-10-01 {&quot;scope&quot;:{&quot;environmentId&quot;:&quot;&lt;id&gt;&quot;},&quot;allocatedEntitlements&quot;:[{&quot;entitlementId&quot;:&quot;MCSMessages&quot;,&quot;allocation&quot;:{&quot;quantity&quot;:&lt;n&gt;},&quot;enforcementRules&quot;:[{&quot;ruleType&quot;:&quot;TenantPool&quot;,&quot;enabled&quot;:false}]}]}</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether agent data may move across regions for the environment</strong><br><small>Environment</small><br><small class="controls__note">Mandatory prerequisite; the cmdlet page describes the parameter as allowing cross-geography data movement. The checkbox may not appear where the region has full in-region capacity.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Generative AI features › Edit › Move data across regions <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PowerPlatformGenerativeAiSettings -EnvironmentName &lt;environment ID&gt; -CrossGeoDataMovement $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Quiet times the agent must respect</strong><br><small class="controls__note">General control: the agent page says it honours configured quiet times. Up to 21 consecutive days. The POST creates a Quiet Time Setting record; the caller supplies its configuration.</small></td><td data-label="Admin UI"><strong>Customer Insights - Journeys</strong><br>Settings › Customer engagement › Quiet times <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/real-time-marketing-quiet-times" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST &lt;organization URL&gt;/api/data/v9.2/msdynmkt_quiettimesettings; Content-Type: application/json; body: &lt;Quiet Time Setting JSON object&gt;</code> <a href="https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdynmkt_quiettimesetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The tenant switch and the AI Hub switch are separate: turning off Use AI agents in the Power Platform admin center disables all active Customer Insights - Journeys agents, while AI Hub lets you disable one agent in one environment. Microsoft Learn documents no API for either switch at the time of writing (November 2026).

The AI prompts prerequisite is set at Power Platform admin center > Environments > environment > Settings > Product > Features, as described on the AI Hub prerequisites page, and can be governed by an environment group rule. The Move data across regions checkbox can also be controlled at scale with the Generative AI settings environment rule (geographical availability page).

Capacity API changes need the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. Whether the agent's monthly credit limit page in the admin centre lists this agent is not confirmed. The quiet-times table is a general control: the agent page says the agent honours configured quiet times, and the API row is the Dataverse table reference for the quiet time setting.

## Open questions

- How many Copilot credits does Outreach Optimization Agent use, and per what unit? Watch the Learn agent page and the Copilot Studio billing rates page.
- Will the generally available version keep the preview's prerequisites and manual Enable step? Watch the roadmap item and the AI Hub page.
- Does the agent stop or exit a plan early when a goal is met, as the roadmap describes, given the preview page says remaining emails are still sent?
- Which identity does the agent send under, and where are its send-time decisions recorded for audit? Microsoft has not described either.
- Does the per-agent monthly credit limit in the Power Platform admin center apply to this agent?

<!-- rationale
risk: Medium. The agent decides when customer emails go out and may process engagement data outside the environment's region, but Microsoft's preview pages require admins to accept prerequisites and enable it first.
cost: Variable. The Learn page states that use consumes Copilot credits, billed from prepaid capacity or pay-as-you-go; the credit rate for this agent is not yet published.
impact: Medium. Marketers building journeys and the customers receiving their emails notice it; Microsoft's preview pages make enablement an admin step, so other users are unaffected.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The enablement route starts at AI Hub > Add and manage agents > Add an agent > Outreach Optimization Agent > Overview tab > Enable. | Found: To open AI Hub, go to Settings and select AI Hub in the left navigation. | Fix: Replace the path in front matter and the rendered table with 'Settings > AI Hub > Add and manage agents > Add an agent > Outreach Optimization Agent > Overview tab > Enable'. The cited page documents Settings as the way into AI Hub; include it in the route rather than starting inside AI Hub. | Source: https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub
- [contradicted, blocker] Open questions: final question / absence: Microsoft has not confirmed whether the per-agent monthly credit-limit control applies to this agent. | Found: Steps to set up Outreach Optimization Agent: To control agent usage, configure message consumption limits. For more information, see Manage capacity. | Fix: Remove the final Open questions bullet. Replace the uncertainty with the narrower documented statement: 'AI Hub directs administrators to configure message consumption limits for Outreach Optimization Agent using the Copilot Studio capacity page.' Both https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub and https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity are already cited. Do not equate the separate uncertainty about an inventory example with an absence of applicability guidance. | Source: https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure; rationale: risk / behaviour: The prerequisites page says agent data might be processed and stored outside the user's primary region. | Found: This means agent data might be processed and stored in regions outside the user's primary region, depending on service and infrastructure availability. | Fix: After this sentence add: 'The general Power Platform data-movement page separately says Microsoft does not log, store or retain inputs or outputs during this process (https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot).' | Source: https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Manage Copilot Credits is reached through Licensing > Products > Copilot Studio > Summary > Manage Copilot Credits. | Found: Select the Summary tab. Under the Copilot Studio heading, select Manage Copilot Credits or Manage sessions. | Fix: Include the omitted heading: 'Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits'. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity
- [supported, minor] controls[2].api; Governance controls table / command: PUT /licensing/allocationsV2?api-version=2024-10-01 sets the environment's MCSMessages allocation and TenantPool enforcement rule using the printed body properties. | Found: Copilot Credits are represented by the entitlement ID MCSMessages and are managed through the licensing/allocationsV2 operations of the Power Platform API. All programmatic examples in this article use API version 2024-10-01. | Fix: Set the call to 'PUT /licensing/allocationsV2?api-version=2024-10-01'. In its note add: 'The request body identifies scope.environmentId, sets allocatedEntitlements[].entitlementId to MCSMessages and allocation.quantity to the allocation, and sets enforcementRules[].ruleType to TenantPool with enabled false to disable tenant-pool draw.' | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[4].api; controls[4].note; Governance controls table and closing paragraph / command: POST to the msdynmkt_quiettimesettings entity set creates a Quiet Time Setting record using caller-supplied configuration. | Found: Create: POST /msdynmkt_quiettimesettings. EntitySetName: msdynmkt_quiettimesettings. Writable columns/attributes: msdynmkt_commercialdates, msdynmkt_commercialweeklyhours, msdynmkt_transactionaldates, msdynmkt_transactionalweeklyhours. | Fix: Set the call to 'POST /msdynmkt_quiettimesettings', removing the header and body description. Add to the note: 'The request body supplies quiet-time configuration through msdynmkt_commercialdates, msdynmkt_commercialweeklyhours, msdynmkt_transactionaldates and msdynmkt_transactionalweeklyhours as applicable.' Keep the existing qualification that this creates a general Quiet Time Setting record. | Source: https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdynmkt_quiettimesetting
- [supported, minor] Governance controls: AI prompts paragraph / admin-path: AI prompts is configured on the environment's Settings > Product > Features page. | Found: In the admin center, select Environments > [select an environment] > Settings > Product > Features. On the Features settings page under AI Builder, enable the AI prompts toggle. | Fix: Complete the printed path as 'Power Platform admin center > Environments > environment > Settings > Product > Features > AI Builder > AI prompts'. | Source: https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The governance checklist's controls are all represented by rows in the controls table. | Found: Re-check the prerequisites after any change to data movement or AI prompts settings. The five rows cover agent availability, agent enablement, capacity, data movement and quiet times, but not AI prompts. | Fix: Narrow that After rollout bullet to: 'Re-check the Move data across regions prerequisite after changing data movement settings, because losing a mandatory prerequisite disables all enabled agents.' The At rollout bullet may continue to refer to accepting prerequisites as part of enabling the agent.
-->
