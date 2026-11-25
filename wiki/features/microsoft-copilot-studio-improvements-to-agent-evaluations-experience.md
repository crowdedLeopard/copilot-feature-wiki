---
title: "Copilot Studio: improvements to the agent evaluations experience"
slug: "microsoft-copilot-studio-improvements-to-agent-evaluations-experience"
roadmapId: 569607
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio makers get richer evaluation results, run comparison, larger and generated datasets. Evaluations can consume Copilot Credits; admins can block authenticated runs by data policy."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says building, testing, evaluating and running Microsoft Copilot harness agents can consume Copilot Credits. The Billing rates and management page lists no evaluation-specific rate at the time of writing (November 2026)."
audiences: ["maker","power-platform-admin","finops"]
tags: ["copilot-studio","agent-evaluation","quality-assurance","copilot-credits","knowledge-grounding","data-policies"]
sources:
  - title: "Microsoft 365 Roadmap 569607"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569607"
    kind: "roadmap"
  - title: "About agent evaluation"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro"
    kind: "learn"
  - title: "Run evaluations and view results"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results"
    kind: "learn"
  - title: "Create a single response test set"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-create"
    kind: "learn"
  - title: "Evaluate an agent (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro"
    kind: "learn"
  - title: "Create a test set for an agent (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-create"
    kind: "learn"
  - title: "Understand estimated credit usage"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-understand-display"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
  - title: "Resource Threshold - Upsert Resource Threshold"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/resource-threshold/upsert-resource-threshold"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-cost-visibility-in-agent-evaluations","copilot-credits","data-policies","microsoft-copilot-studio-cost-visibility-in-monitor-tab"]
controls:
  - governs: "Whether makers can run evaluations with an authenticated account"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit Policy > Next > Next > connector > three dots (...) > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Classification Blocked -Connectors $connectors"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "Block the Microsoft Copilot Studio connector. Learn says this stops automated evaluations on an authenticated account and event triggers. $connectors holds that connector's id, type and name."
  - governs: "Copilot Credits an environment can spend, and whether it draws on tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "General control; usage can continue via pay-as-you-go. The request body sets scope.environmentId and allocatedEntitlements: entitlementId=MCSMessages, allocation.quantity, enforcementRules ruleType=TenantPool, enabled=false."
  - governs: "Monthly Copilot Credit limit for a single agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit > Stop usage > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/environments/<environment-id>/entitlements/<entitlement-id>/resources/<resource-id>/threshold?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/licensing/resource-threshold/upsert-resource-threshold"
    note: "General environment-resource threshold API; the reference gives no agent-specific ID-mapping example. Limits are not applied instantly. The request body sets limit and stopIfOverCapacity=true."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-17"
    note: "First briefing for roadmap item 569607: planned evaluation improvements, with the credit, data policy and sharing controls that Learn documents today."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: data policy path now includes the three-dots menu, the allocation call shows its full request, the per-agent limit has its documented threshold API, and the environment-group lock is noted."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 84 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: Microsoft Copilot harness test methods, the two credit API calls now shown without request bodies, and a checklist step without a controls row removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 101 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 108 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 108
  confirmed: 107
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "984c013b479e94989ef73a6aa06066f0"
---

## What's changing

Microsoft plans to improve the Evaluations experience in Copilot Studio so makers can see why an evaluation passed or failed. The roadmap item lists richer evaluation explanations, agent reasoning traces, cited knowledge sources, evaluation run comparison, support for larger datasets, customisable test generation, dataset generation from knowledge sources, and added validation and guidance to fix configuration problems before a run.

Microsoft Learn has no page for these improvements yet, so what follows about the new behaviour is the roadmap's description. Learn does document the current evaluation experience, and some of the listed capabilities already appear there in some form: a **Compare with** tool for two runs of the same test set, a test-case view with the reasoning behind a result and the knowledge, topics and tools the agent used, and test-set generation from knowledge sources. Learn does not say which of the roadmap's items change those features, so treat the list as a description of direction, not a list of differences.

Learn currently describes two evaluation experiences. The standard harness pages allow up to 100 test cases per test set. The Microsoft Copilot harness pages are marked preview, start each evaluation with **General quality** and allow up to five test methods, with availability varying by environment, and cap a test set at 20 conversations. The roadmap does not say which applies, or what "larger datasets" means in numbers.

The roadmap record shows status In development, a target date of September CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) and Web. The target month has passed and the record, last modified 19 August 2026, still shows In development. The item has no more-info link and no preview date.

## Why it matters

This is a maker-facing quality feature, so most of its value and most of its exposure sit with the people who build agents. Better explanations and run comparison make it easier to prove an agent change did not degrade answers, which is useful evidence before publishing.

The administrator's interest is spend and data. Larger and generated test sets mean more agent runs and more grading, and the Evaluate view for Copilot harness agents reports estimated Copilot Credits per run. Generated test cases also draw on knowledge sources through a connected account. Microsoft has not stated what happens on arrival, so the wiki treats the capability as one makers choose to use, and no source says existing behaviour changes.

## Risk assessment

**Data exposure**

- When Copilot Studio generates test cases it uses the credentials of a connected account to reach the agent's knowledge sources and tools. Learn warns that generated test cases can include sensitive data that account can access, and that any maker with access to the agent can view the test sets linked to it. Check who has access to agents whose knowledge holds sensitive content.
- Richer explanations and cited knowledge sources will put more of the agent's source material in results. Learn says only the maker who initiated a run can view the agent responses and result explanations, while other makers can see run status and result metrics. Whether that rule holds for the new views is not stated.

**Security & identity**

- Evaluations run as the currently signed-in user, so a run reaches whatever that user can reach. The data policy for the **Microsoft Copilot Studio** connector governs authenticated evaluation runs (see the controls table).
- Learn says evaluations support only agents set to **No authentication** or **Authenticate with Microsoft**; agents set to **Authenticate manually** are not supported.

**Autonomy & actions**

- An evaluation sends test questions to the agent and records its answers. Learn says results show the tools the agent used; it does not say that a run is isolated from tool side effects, so confirm before evaluating agents whose tools write to business systems.

**Change & support**

- Dataset size and test generation can raise credit use without a visible change in the agent. For Copilot harness agents, Learn says the Evaluate view shows estimated credits per run and per test case.
- Test results are kept in Copilot Studio for 89 days, so makers who need a longer history must export to CSV.

## Cost and licensing

**Licence.** No licence for the improved experience is published. The Learn pages on running and creating evaluations list no licence as a prerequisite; the Microsoft Copilot harness page lists an agent created and saved with that harness.

**Meter.** For agents powered by the Microsoft Copilot harness, Learn says building, testing, evaluating and running them can consume Copilot Credits, and that this usage is not included in a user's Microsoft 365 Copilot licence (Manage costs for agents powered by the Microsoft Copilot harness). The Evaluate experience shows an estimated total for each evaluation run, split between generating and scoring responses, and credit use per test case. Those figures are estimates; Monitor reflects the billed credits. See [Copilot Credits](/concepts/copilot-credits/) and [cost visibility in agent evaluations](/features/microsoft-copilot-studio-cost-visibility-in-agent-evaluations/).

**Not yet published.** The Billing rates and management page, which covers standard harness agents, lists no evaluation-specific rate at the time of writing (November 2026), and no page gives a credit rate for the new capabilities.

**Caps.** Credit spend is contained through the environment allocation and agent monthly limit rows in the controls table. Learn describes those as general Copilot Studio controls.

## Scope

**Who.** Makers of Copilot Studio agents. Learn says an owner can share an agent with the **Agent viewer** sharing role so a user can view and run evaluations, and rename, cancel and delete them, without access to the agent itself; those users cannot create or update the test sets shared with them.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and Web. No other cloud is listed on the record.

**Automation.** Learn says evaluations can be run through the Copilot Studio interface, the Power Platform REST API or connectors added as tools or flow actions.

**Prerequisites and limits.** The pages Learn publishes today require agents set to **No authentication** or **Authenticate with Microsoft**. Test-set generation from knowledge accepts text, Word, Excel, PDF and individual SharePoint files of up to 5 MB; SharePoint folders are not supported.

**Rollout.** Microsoft has not published rollout mechanics, a release channel or a default for these changes.

## Governance guidance

### Before rollout

- Decide which makers may evaluate agents that use sensitive knowledge, because any maker with access can see the linked test sets.
- Identify which environments run Microsoft Copilot harness agents and which run standard harness agents, since Learn documents different limits and credit displays for each.
- Set the environment credit allocation and the agent monthly limit for environments where makers evaluate often (both rows in the controls table).

### At rollout

- Tell makers that generated test sets are built with a connected account's access and can contain sensitive data it can reach.
- Block the **Microsoft Copilot Studio** connector in the data policy for environments where authenticated evaluations are not wanted. This also blocks event triggers, so check which agents use them first.
- Ask makers to export results they need beyond 89 days to CSV.

### After rollout

- Check the Learn pages on evaluations again once Microsoft documents the new capabilities, and note any new limits or settings.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can run evaluations with an authenticated account</strong><br><small>Environment</small><br><small class="controls__note">Block the Microsoft Copilot Studio connector. Learn says this stops automated evaluations on an authenticated account and event triggers. $connectors holds that connector's id, type and name.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit Policy › Next › Next › connector › three dots (...) › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification Blocked -Connectors $connectors</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Credits an environment can spend, and whether it draws on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">General control; usage can continue via pay-as-you-go. The request body sets scope.environmentId and allocatedEntitlements: entitlementId=MCSMessages, allocation.quantity, enforcementRules ruleType=TenantPool, enabled=false.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant › Save <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit for a single agent</strong><br><small>Agent</small><br><small class="controls__note">General environment-resource threshold API; the reference gives no agent-specific ID-mapping example. Limits are not applied instantly. The request body sets limit and stopIfOverCapacity=true.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit › Stop usage › Save <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/environments/&lt;environment-id&gt;/entitlements/&lt;entitlement-id&gt;/resources/&lt;resource-id&gt;/threshold?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/licensing/resource-threshold/upsert-resource-threshold" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin setting for turning agent evaluation on or off is documented at the time of writing (November 2026). The one documented lever specific to evaluation is the data policy on the **Microsoft Copilot Studio** connector, which Learn says applies to automated evaluations that use an authenticated account and to event triggers. Learn also says that if an admin turns off that connection, makers cannot run tests with the evaluation tool.

The credit rows are general Copilot Studio controls. The Learn page for them sits under Microsoft Copilot harness agents and states that the capacity and consumption controls apply across Copilot Studio. An agent's monthly limit does not apply instantly. The allocation row needs the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. If a published environment-group rule governs tenant-capacity draw, the environment setting is read-only and API updates are rejected with TenantPoolLockedByPolicy; change and republish the group rule or remove the environment from the group before managing it independently.

On the maker side, the **Agent viewer** sharing role controls who can manage an agent's evaluations without opening the agent (Share in the agent's menu, in Copilot Studio). It is not in the table because its automation side has not been researched.

## Open questions

- Which of the listed improvements are new, and do they apply to the standard harness, the Microsoft Copilot harness or both? Watch the Learn evaluation pages and the roadmap item.
- What dataset size replaces the current limits (100 test cases for the standard harness, 20 conversations for the Microsoft Copilot harness)? Watch the "Create a test set" pages.
- Will agent reasoning traces and cited knowledge sources be visible only to the maker who ran the evaluation, as result explanations are today? Watch the run-results page.
- What Copilot Credit rate applies to evaluation runs for standard harness agents, and to generating test cases from knowledge sources? Watch Billing rates and management.
- Is there an admin switch for evaluation beyond the connector data policy? Watch Message center and the Power Platform admin center settings page.

<!-- rationale
risk: Medium. Generated test cases are built with a connected account's access, can include sensitive data it can reach, and are visible to any maker with access to the agent.
cost: Variable. Microsoft documents that evaluating Copilot harness agents can consume Copilot Credits, and the Evaluate view shows an estimated credit total per run; no evaluation rate is listed for other agents.
impact: Low. Makers who build and test agents notice the change; end users and most administrators do not.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Richer explanations and cited knowledge sources will put more source material in results. | Found: Searched: Copilot Studio evaluations reasoning traces results access only maker initiated new views tool side effects isolated. Read roadmap, analytics-agent-evaluation-results and agents-experience/analytics-agent-evaluation-view; no additional-content guarantee found. | Fix: Replace the sentence with 'Treat the planned richer explanations and cited knowledge sources as a potential additional exposure to review.' Neither the roadmap nor the evaluation documentation specifies how much additional source content these views will reveal.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Caps / cost: Environment allocations and agent monthly limits are general controls for containing credit spend. | Found: An agent's monthly limit doesn't stop the agent flows that the agent calls. Agent flows are billed and checked for capacity separately | Fix: Add to the Caps paragraph: 'An agent monthly limit does not stop agent flows it calls; those flows are billed and checked against environment capacity separately. Manage the environment allocation, tenant-capacity draw and pay-as-you-go billing plan to control that consumption.' The existing allocation note already warns that pay-as-you-go usage can continue. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [supported, minor] Governance controls: maker side / admin-path: Share in the agent's Copilot Studio menu is the entry point for assigning Agent viewer. | Found: Open the agent and select the three dots (**...**) > **Share** ... Under **Has permissions for this agent as**, select **Agent viewer** from the role list. | Fix: Expand the parenthesis to 'Copilot Studio > agent > Share > user or group > Has permissions for this agent as > Agent viewer'. The existing prose reaches the sharing page but leaves the role-selection steps to the linked documentation. | Source: https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results
-->
