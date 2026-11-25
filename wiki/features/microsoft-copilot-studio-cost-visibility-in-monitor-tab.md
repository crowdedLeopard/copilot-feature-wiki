---
title: "Copilot Studio: credit costs per agent and by lifecycle stage in the Monitor tab"
slug: "microsoft-copilot-studio-cost-visibility-in-monitor-tab"
roadmapId: 571196
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans to show makers each agent's Copilot Credit cost in Monitor, split by activity such as testing and production. Read-only, but it exposes spend to makers; admins keep the limits."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Agent usage is metered in Copilot Credits. Whether the Monitor cost view needs anything beyond the Copilot Studio capacity an environment already has is not yet published."
audiences: ["maker","power-platform-admin","finops","service-owner"]
tags: ["copilot-studio","copilot-credits","cost-management","monitoring","finops","usage-based-billing","agents","analytics","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 571196"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571196"
    kind: "roadmap"
  - title: "Monitor agent performance overview (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-overview"
    kind: "learn"
  - title: "Understand estimated credit usage"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-understand-display"
    kind: "learn"
  - title: "View agent's billing consumption"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-consumption"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Govern Copilot Credit consumption for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/govern-credit-consumption"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Review agent activity in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-review-activity"
    kind: "learn"
videos: []
related: ["copilot-credits","copilot-studio-cost-management-m365-admin-center"]
controls:
  - governs: "Monthly Copilot Credit limit, notifications and hard stop for each agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api: null
    note: "Learn's governance article describes applying agent limits through a recurring or automated process and names no API operation for it. Limits are not applied instantly."
  - governs: "Credits allocated to an environment and whether it can draw on tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 {\"scope\":{\"environmentId\":\"<env-id>\"},\"allocatedEntitlements\":[{\"entitlementId\":\"MCSMessages\",\"allocation\":{\"quantity\":<n>},\"enforcementRules\":[<rule>]}]}"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "<rule> is {\"ruleType\":\"TenantPool\",\"enabled\":<true-or-false>}. A published environment-group rule on tenant-capacity draw overrides it: UI and API updates are rejected with TenantPoolLockedByPolicy."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap item for credit costs in the Monitor tab, set against the Monitor credit views Microsoft Learn already documents."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed the claim that Monitor is the first place makers see cost, qualified what the agent limit and environment allocation can stop, and gave the full admin paths including Products."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the allocation API call in the second controls row to the request and body the Learn tutorial gives; added the Monitor navigation page to sources."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the environment allocation row: a published environment-group rule on tenant-capacity draw overrides it (TenantPoolLockedByPolicy). Qualified the standard-harness Monitor sentence to Copilot Credits-based billing."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 76 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 76 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 72
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "a286cada3cb3bb5541889e6ef2b27516"
---

## What's changing

The roadmap item states that makers will see their consumption costs in the Monitor tab of Copilot Studio, for each agent and as an estimated breakdown across the agent's lifecycle: authoring, testing, evaluations and production usage. The roadmap record lists it as In development, targeted for September CY2026, General Availability, on the web, in Worldwide (Standard Multi-Tenant). As of 17 November 2026 that target month has passed and the record still shows In development. The record gives no preview date.

Microsoft Learn already describes credit figures in Monitor, and it does not say whether those pages are this roadmap item. For agents powered by the Microsoft Copilot harness, Monitor shows **Total estimated credits used**, and when a breakdown is available it shows an estimated split by experience: production usage, preview testing, evaluations and other supported surfaces. For agents powered by the standard harness whose billing is based on Copilot Credits consumption, the Monitor page shows billed Copilot Credits in an Overview panel, with a **Billing trend** chart and a **Cost distribution** chart of the kinds of activity that count towards credits. Learn's list of surfaces does not name authoring, which the roadmap does.

The numbers differ by stage. Learn says Preview and Evaluate show near-real-time estimates, while Monitor is updated a few times a day and reflects all events processed up to that point. Monitor therefore lags the estimates by a few hours.

## Why it matters

Spend on agents is charged to the environment, not to the maker who builds them. For the Microsoft Copilot harness, billing starts when a maker starts building, so previewing and evaluating an agent consume credits before anything is published. A cost view that splits testing from production usage helps service owners tell experimentation spend from live spend.

The view does not cap anything. Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so treat it as a visibility change: the limits and allocations that govern spend stay with administrators, and makers' figures may not match the figures finance sees.

## Risk assessment

**Data exposure**

- Learn documents the Monitor sessions list as potentially showing the user associated with an interaction, depending on the interaction, the credits consumed by an interaction when that information is available and the full session transcript. Who can open Monitor for an agent is not stated on those pages, so confirm it before assuming cost and conversation data is visible only to the agent's owner.

**Security & identity**

- No change documented: the roadmap item describes a cost display and Learn describes no new identity or permission for it.

**Autonomy & actions**

- No change: the view reports consumption and does not stop an agent. An agent monthly limit can stop usage when Stop usage is enabled. An environment allocation caps prepaid consumption only when tenant-capacity draw is off; consumption can still continue through a linked pay-as-you-go plan. Both are in the controls table.

**Change & support**

- Expect questions about mismatched numbers. Monitor on the standard harness shows billed credits only, so it can show less than the Power Platform admin center reports, which also include non-billed credits; Preview and Evaluate figures are estimates that Monitor later finalises.
- The Monitor view does not itself cap testing spend: an environment used for experimentation can consume credits even if its agents are never published, so makers who see a large testing share will ask who pays.

## Cost and licensing

Agent usage is metered in Copilot Credits. For agents powered by the Microsoft Copilot harness, Learn says usage is billed on consumption and measured in Copilot Credits, and that it isn't included with a user's Microsoft 365 Copilot licence. Copilot Credits are charged to the environment where the agent runs, from prepaid capacity or through the environment's pay-as-you-go billing plan, not to the maker or user who runs the agent.

Learn describes a Copilot Studio licence as giving a number of billed Copilot Credits pooled across the tenant, which an administrator must assign to an environment. An agent monthly limit can stop usage when Stop usage is enabled. An environment allocation caps prepaid consumption only when tenant-capacity draw is off; consumption can still continue through a linked pay-as-you-go plan (see the controls table).

Not yet published: any separate licence, charge or availability condition for the Monitor cost view itself, and the credit rate for the lifecycle breakdown the roadmap describes. The roadmap record names no licence.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), the web, and General Availability as the release phase. It lists no other cloud; that is a record fact, not a statement that the feature is unavailable elsewhere.

The audience is makers, who open Monitor from an agent in Copilot Studio. Learn says Monitor can be opened before an agent is published, but production usage, feedback and credit data appear after publishing. The Monitor sessions list shows sessions from the past 28 days only. Rollout mechanics, roles that can view the cost figures and any prerequisite are not stated for this roadmap item.

## Governance guidance

### Before rollout

- Classify each environment that hosts Copilot Studio agents as exploration, test or production, as Learn's governance article suggests, so you know which environments will show testing spend.
- Check the existing per-agent monthly limits and environment allocations in the controls table, since the Monitor view reports spend but does not enforce a limit.
- Name a cost owner for each environment that bills to prepaid capacity or a pay-as-you-go plan.

### At rollout

- Tell makers that Preview and Evaluate figures are estimates and that Monitor's figure is the one used for billing.
- Confirm in a test environment which roles can open Monitor for an agent and see credits and session details, and record the answer for your makers' guidance.

### After rollout

- Compare a maker's Monitor figure with the Power Platform admin center consumption report for the same agent and period, and explain differences such as non-billed credits to makers.
- Review agents whose testing share is large and set or adjust their monthly limit where the use case needs a tighter boundary.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit, notifications and hard stop for each agent</strong><br><small>Agent</small><br><small class="controls__note">Learn's governance article describes applying agent limits through a recurring or automated process and names no API operation for it. Limits are not applied instantly.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credits allocated to an environment and whether it can draw on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">&lt;rule&gt; is {&quot;ruleType&quot;:&quot;TenantPool&quot;,&quot;enabled&quot;:&lt;true-or-false&gt;}. A published environment-group rule on tenant-capacity draw overrides it: UI and API updates are rejected with TenantPoolLockedByPolicy.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Copilot Studio › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 {&quot;scope&quot;:{&quot;environmentId&quot;:&quot;&lt;env-id&gt;&quot;},&quot;allocatedEntitlements&quot;:[{&quot;entitlementId&quot;:&quot;MCSMessages&quot;,&quot;allocation&quot;:{&quot;quantity&quot;:&lt;n&gt;},&quot;enforcementRules&quot;:[&lt;rule&gt;]}]}</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These are the existing controls that govern the spend the Monitor view reports. Microsoft Learn does not describe a control specific to the Monitor cost view, and none is listed here as a general control confirmed to apply to it.

- Managing allocations needs the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.
- An agent's monthly limit isn't applied instantly, doesn't stop the agent flows the agent calls, and doesn't cap aggregate environment consumption. Learn says the Power Platform admin center has no tenant-wide default agent limit, so a standard limit for new agents has to be applied agent by agent.
- An agent monthly limit can stop usage when Stop usage is enabled. An environment allocation caps prepaid consumption only when tenant-capacity draw is off; consumption can still continue through a linked pay-as-you-go plan.
- If a published environment-group rule governs tenant-capacity draw, the setting can't be overridden for an individual environment. Learn says to change and republish the group rule, or remove the environment from the group before managing that setting independently.
- For consumption data in code, Learn points to the entitlement insight operations in the Power Platform API.
- Learn says Copilot Studio environment and agent policies in the Microsoft 365 admin center are opt-in, and existing Power Platform admin center controls apply until a spending policy covers that scope. See [Copilot Studio: cost controls in the Microsoft 365 admin center](/features/copilot-studio-cost-management-m365-admin-center/).

## Open questions

- Is the Monitor cost view in the roadmap item the same as the credit card and **Cost distribution** chart Learn already documents, and what is new? Watch the roadmap record and the Monitor pages on Learn.
- What is the default state and rollout schedule, given the September CY2026 target has passed and the record shows In development?
- Will the breakdown include authoring as its own category, and which agents (standard harness or Microsoft Copilot harness) will see it?
- Which roles can see cost and session data in Monitor, and can an administrator restrict it?
- Does the Monitor breakdown carry a separate licence or charge? Watch the Copilot Studio billing pages on Learn.

<!-- rationale
risk: Low. The roadmap describes a read-only cost view for makers; it does not change what agents can reach or do, and spend limits sit in separate admin controls.
cost: Variable. No separate charge for the view is published, but the credits it reports are metered as Copilot Credits, drawn from prepaid capacity or a pay-as-you-go plan.
impact: Medium. Makers notice it: it puts credit figures beside their agents, and those figures will not match every admin report.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Power Platform admin center > Licensing > Products > Copilot Studio > Summary > Manage Agents reaches the agent limit management page. | Found: On the **Summary** tab, select **Manage Agents**. The **Agents** page appears where you can: | Fix: Complete the path in the structured row and rendered table to 'Licensing > Products > Copilot Studio > Summary > Manage Agents > agent > Set limit', then enter the monthly limit, configure notifications and enable Stop usage as needed. The cited manage-usage-microsoft-copilot-harness page gives these final steps. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits reaches the environment allocation panel in Power Platform admin center. | Found: Under the **Copilot Studio** heading, select **Manage Copilot Credits** or **Manage sessions**. | Fix: Complete the allocation path to 'Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits > environment > Copilot Credits'. In the row note, state that tenant-pool draw is set in the same panel under 'Capacity overages > Draw from the available capacity in my tenant'. Apply the same change to the rendered table. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [supported, minor] controls[1].api; Governance controls table / command: PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 accepts the printed environment scope and allocatedEntitlements body. | Found: Invoke-RestMethod -Method Put ` -Uri "$apiBaseUrl/licensing/allocationsV2?api-version=$apiVersion" ` -Headers $headers -ContentType "application/json" -Body $allocationBody | Fix: Replace the call in the structured row and rendered table with 'PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01'. Replace the note's opening '<rule> is ...' sentence with 'The request body sets scope.environmentId and allocatedEntitlements, with entitlementId MCSMessages, allocation.quantity, and enforcementRules containing ruleType TenantPool and enabled true or false.' Retain the environment-group override qualification. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, minor] Governance guidance: After rollout / consistency: The reporting checklist directs readers to a consumption-report control that is missing from the controls table. | Found: Compare a maker's Monitor figure with the Power Platform admin center consumption report for the same agent and period; controls rows cover monthly agent limits and environment credit allocation only. | Fix: Remove the After rollout checklist bullet beginning 'Compare a maker's Monitor figure with the Power Platform admin center consumption report'; it names a reporting control absent from the table. Retain the existing explanation of billed versus non-billed figures.
-->
