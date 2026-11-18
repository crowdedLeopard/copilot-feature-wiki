---
title: "Copilot Studio: computer use for web browsing on the Microsoft Copilot harness"
slug: "copilot-studio-computer-use-for-web-browsing-on-microsoft-copilot-harness"
roadmapId: 576272
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans a native web-browsing capability for Copilot Studio agents on the Microsoft Copilot harness. It is billed in Copilot Credits; Microsoft has not yet published its default state or a control specific to it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft Learn says Microsoft Copilot harness agents are billed for all usage in Copilot Credits, regardless of the user's licence. A rate specific to web browsing is not yet published."
audiences: ["power-platform-admin","security","finops","maker"]
tags: ["copilot-studio","copilot-harness","computer-use","agents","tools","copilot-credits","usage-based-billing","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap item 576272"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576272"
    kind: "roadmap"
  - title: "About agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Available tools for agents (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-available"
    kind: "learn"
  - title: "Automate web and desktop apps with computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
videos: []
related: ["copilot-credits","spending-policies","data-policies","copilot-studio-cost-management-m365-admin-center","microsoft-copilot-studio-cost-visibility-in-monitor-tab"]
controls:
  - governs: "Prepaid Copilot Credits allocated to an environment and whether it can draw on tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT /licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "The request body sets the TenantPool enforcement rule. Spend control across Copilot Studio, not specific to browsing; pay-as-you-go usage can continue."
  - governs: "Monthly Copilot Credit limit and Stop usage for one agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api: null
    note: "Turn on Stop usage for the agent to be turned off at its limit. Microsoft Learn documents no API for agent limits at the time of writing (November 2026)."
  - governs: "Whether computer use for web browsing is available to agents on the Microsoft Copilot harness"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for this feature is documented at the time of writing (November 2026); the feature is In development."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-18"
roadmapModified: "2026-10-28T20:19:16"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576272."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Separated this item from the standard-harness computer use tool, re-sourced Copilot Credit billing and controls to Microsoft Copilot harness pages, and moved action to review."
  - date: "2026-11-17"
    note: "Corrected: environment tenant-pool draw is read-only under a published environment group rule; added agent-limit margin and agent flow qualifications; reworded the preview open question as a target."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: the credit allocation API call now shows the full request; the governance note no longer says cost controls are the only levers; removed three checklist steps with no table row; added that an agent must consume credits before limits can be set."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 94 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "New briefing: roadmap plans browsing for Copilot Studio agents on the Microsoft Copilot harness; Learn lists computer use as Planned there, so controls and credit rate are not yet documented."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "First briefing for this roadmap item: browsing is planned on the Microsoft Copilot harness, billed in Copilot Credits, with no feature-specific control documented yet."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 75 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 7
verification:
  status: "held"
  date: "2026-11-18"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 68
  unconfirmed: 1
  contradicted: 6
  attempts: 6
  hash: "eba2a4453cfce6f09a149b3e18fc73b5"
---

## What's changing

The roadmap item says Copilot Studio agents will be able to browse and interact with websites as a native capability powered by the Microsoft Copilot harness. Using natural-language instructions, agents can navigate web pages, extract information and download files, and then use that information and those files with other tools to complete end-to-end workflows. The roadmap describes this as extending an agent's reach beyond configured knowledge sources and API-based integrations.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The Learn comparison of the standard and Microsoft Copilot harnesses lists Computer use as Supported on the standard harness and Planned on the Microsoft Copilot harness. Learn's list of tool types for Microsoft Copilot harness agents names connectors, MCP servers and workflows, with no browsing tool. Learn separately documents a computer use tool for standard harness agents that works on a Windows computer; the roadmap item does not say whether this feature runs the same way, so do not assume it.

The roadmap record gives the status as In development, a preview date of November CY2026 and a target date of January CY2027, with release phases General Availability and Preview. Clouds: Worldwide (Standard Multi-Tenant). Platform: Web. Microsoft has not stated what happens on arrival, so the default state is shown as Not stated.

## Why it matters

This moves web access from a separately configured computer use tool to a capability of the agent runtime itself, and it comes with spend that accrues from the first test. For a service owner, the questions are what a browsing agent can reach, which identity it browses under, and how credits are contained. Microsoft has not yet said how the first two work, so plan for the risk before the answers arrive.

Because Microsoft has not stated what happens on arrival, treat this as something to review rather than something that changes nothing. No source says existing agents change, but the spend controls that already exist for the Microsoft Copilot harness are the only documented levers today, and they are cheap to set before preview starts.

## Risk assessment

**Data exposure**

- The roadmap says agents will extract information from web pages and download files, then pass both to other tools. Microsoft Learn does not yet say where the browsing runs or which sites or files it can reach, so confirm both before an agent that holds internal data or connectors is given browsing.
- Files an agent downloads can flow into the same agent's other tools. Learn documents a 10 MB cap on files that tools produce for the user, but does not say whether it applies to downloaded files.

**Security & identity**

- Microsoft has not said which account or credentials a browsing agent uses on a site. Confirm this before pointing an agent at any site that needs sign-in.

**Autonomy & actions**

- The roadmap says agents interact with websites from natural-language instructions. Interacting can mean more than reading, and Learn describes no approval step for browsing yet. Test in a development environment before wider use.

**Change & support**

- Billing starts when a maker starts building and testing, not at publish. Learn also says that when an environment has no available Copilot Credits, experiences that require credits can stop working, which affects makers and end users.

## Cost and licensing

Agents on the Microsoft Copilot harness use consumption-based billing in Copilot Credits. The Power Platform admin center page on managing their costs says this usage isn't included with a user's Microsoft 365 Copilot licence and lists Microsoft Copilot harness agents as billed for all usage. The billing overview adds that credits are charged for model tokens, tools and the harness itself, and that billing starts when you start building, including previewing and testing.

The same page lists computer use (CUA) on the standard harness as billed for all usage. That is a different feature, so treat it only as a signal. A credit rate specific to browsing on the Microsoft Copilot harness is not yet published; the billing overview shows consumption ranges by task complexity in a diagram, not a rate for this capability.

Credits are charged to the environment where the agent runs, from prepaid capacity or the environment's pay-as-you-go plan, not to the maker or user. An environment allocation is not a boundary while the environment can still draw from tenant capacity or pay-as-you-go billing; the controls table lists the settings that close each route. Budgets and alerts in Azure send notifications but do not stop consumption.

## Scope

Roadmap record: Microsoft Copilot Studio, Worldwide (Standard Multi-Tenant), Web, release phases General Availability and Preview, status In development, preview date November CY2026, target date January CY2027. These are Microsoft's targets, not commitments.

The feature builds on agents powered by the Microsoft Copilot harness, which an environment hosts and which a maker chooses when creating an agent. Microsoft Learn says the harness has no maker-access setting of its own; creation is governed by existing Copilot Studio and environment permissions. Managing capacity needs the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. Prerequisites, licences beyond Copilot Credits and rollout mechanics for browsing are not yet published.

## Governance guidance

### Before rollout

- Identify the environments that host Microsoft Copilot harness agents, and decide which of them may later try browsing; keep production environments out of preview testing.
- Allocate a defined number of Copilot Credits to those environments and clear the option to draw on tenant capacity (controls table, row 1).
- Set a monthly limit with Stop usage on agents that will test browsing (controls table, row 2).
- Assign an owner for spend in each environment, and for any linked pay-as-you-go plan, since Azure budgets alert but do not stop use.

### At rollout

- Test browsing in a development environment first and ask the maker to record which sites, sign-in method and downloaded files the agent uses.
- Check the agent's month-to-date billed credits in Manage Agents after the first test runs, before widening access.
- Watch Microsoft Learn and Message center for the feature's page, default state and any admin switch (the controls table, row 3, records that none is documented yet).

### After rollout

- Review per-agent consumption in the Power Platform admin center each month and adjust limits.
- Re-check the controls table when Microsoft publishes the feature's page, and add any switch or data setting it describes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Prepaid Copilot Credits allocated to an environment and whether it can draw on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">The request body sets the TenantPool enforcement rule. Spend control across Copilot Studio, not specific to browsing; pay-as-you-go usage can continue.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT /licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit and Stop usage for one agent</strong><br><small>Agent</small><br><small class="controls__note">Turn on Stop usage for the agent to be turned off at its limit. Microsoft Learn documents no API for agent limits at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether computer use for web browsing is available to agents on the Microsoft Copilot harness</strong><br><small>Tenant</small><br><small class="controls__note">No setting for this feature is documented at the time of writing (November 2026); the feature is In development.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Rows 1 and 2 are the spend controls Microsoft documents for the Microsoft Copilot harness. They apply across Copilot Studio, not only to this feature, so changes affect other agents, workflows and features in the same environment. Both need the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

Clearing the tenant-capacity option stops the environment drawing unallocated prepaid capacity, but usage can continue through a linked pay-as-you-go plan. The Stop usage option on an agent limit turns the agent off at its limit. A published environment group rule for tenant credit pool use makes the environment-level setting read-only, and API requests cannot override it.

Row 3 records that Microsoft Learn documents no tenant or environment setting for browsing at the time of writing (November 2026). Data policies apply to Copilot Studio agents in the environments included in the policy's scope; whether browsing will be classifiable in a data policy is an open question.

## Open questions

- What is the default state when browsing arrives, and will an administrator be able to switch it off for a tenant or environment? Watch Message center and the Learn page for the Microsoft Copilot harness.
- Where does the browsing run, and which account or credentials does an agent use on a site? Watch the Learn page for the Microsoft Copilot harness tools.
- What is the Copilot Credit rate for browsing and downloads? Watch the billing overview for the Microsoft Copilot harness.
- Will data policies be able to restrict which sites or actions a browsing agent can use?
- Will the agent monthly limit have an API, so limits for browsing agents can be set at scale? Watch the Power Platform API reference.

<!-- rationale
risk: High. The roadmap says agents will navigate websites, extract information and download files on their own instructions, and Microsoft Learn documents no switch or data setting specific to it at the time of writing (November 2026).
cost: Variable. Agents on the Microsoft Copilot harness are billed in Copilot Credits for all usage, including building and testing; a credit rate for browsing is not yet published.
impact: Medium. Makers building on the Microsoft Copilot harness and the users of their agents would notice it; the roadmap does not say it reaches anyone without a maker adding it.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first sentence / behaviour: This change moves web access from a separately configured computer use tool to the agent runtime. | Found: Searched: 'Copilot Studio Microsoft Copilot harness web browsing computer use'; opened agents-experience/overview and computer-use. The roadmap plans a native capability; neither source says existing web access is moved or replaced. | Fix: Replace 'This moves web access from a separately configured computer use tool to a capability of the agent runtime itself' with 'The roadmap plans native web browsing on the Microsoft Copilot harness'.
- [contradicted, blocker] Why it matters: second paragraph / applicability: Existing spend controls are the only documented governance levers for Microsoft Copilot harness agents today. | Found: Maker permissions and spending controls do different jobs, so you need both. ... To control who can create agents, use your existing Copilot Studio and environment permissions. | Fix: Replace 'the spend controls that already exist for the Microsoft Copilot harness are the only documented levers today' with 'spend controls and existing Copilot Studio and environment permissions are documented governance levers today'. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness
- [contradicted, blocker] Cost and licensing: third paragraph; controls table / consistency: The controls table lists the settings that close each environment overage route. | Found: the controls table lists the settings that close each route. ... Spend control across Copilot Studio, not specific to browsing; pay-as-you-go usage can continue. | Fix: Remove '; the controls table lists the settings that close each route'. The table has no control to disable the environment's pay-as-you-go route, and a per-agent limit does not close that route for the environment.
- [contradicted, blocker] controls[1].note; Governance controls: Stop usage paragraph; Cost and licensing / cost: Stop usage turns an agent off at its monthly limit, presented as the workload spending stopping point without qualifications. | Found: An agent's monthly limit doesn't stop the agent flows that the agent calls. ... Limits aren't applied instantly. An agent can continue to respond for some time after it reaches its limit, so set limits and notification thresholds with some margin. | Fix: Replace the Stop usage explanation in controls[1].note and the prose with: 'Turn on Stop usage to turn the agent off after it reaches its monthly limit. Enforcement is not instantaneous, so allow margin; the limit does not stop agent flows the agent calls, which are billed and checked for capacity separately.' Cite https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#manage-monthly-consumption-limits-for-copilot-studio-agents. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [contradicted, blocker] Governance controls: first paragraph / applicability: Changes to either row 1 or row 2 affect other agents, workflows and features in the same environment. | Found: An agent-level limit helps contain a single workload, while the environment configuration determines which capacity sources are available to all workloads in the environment. | Fix: Replace 'They apply across Copilot Studio, not only to this feature, so changes affect other agents, workflows and features in the same environment.' with 'These controls are available across Copilot Studio, not only for this feature. Changes to shared environment capacity in row 1 can affect other agents, workflows and features in that environment; row 2 sets a limit for the selected agent.' | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness
- [contradicted, blocker] Governance guidance: Before rollout, monthly-limit step / behaviour: The before-rollout checklist tells administrators to set agent monthly limits without the prerequisite that an agent must first consume some credits. | Found: Set agent limits: Set limits on how much an agent can spend. An agent must consume some credits before you can set limits. | Fix: Replace the monthly-limit checklist bullet with: 'After an agent has consumed some credits, set a monthly limit with Stop usage before wider browsing tests (controls table, row 2).' Add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/faqs-copilot-harness to sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/faqs-copilot-harness#how-can-i-control-how-much-an-agent-powered-by-the-microsoft-copilot-harness-spends
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Learn documents a 10 MB cap per file produced by tools for return to the user. | Found: Files the agent creates during a turn are capped at 10 MB per file. Files that exceed the cap aren't returned to the user. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-overview to sources for the created-file size limit. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-overview
- [contradicted, minor] Governance guidance: environment discovery and consumption monitoring steps / consistency: The checklist's environment discovery and month-to-date consumption monitoring steps have matching controls-table rows. | Found: Identify the environments that host Microsoft Copilot harness agents ... Check the agent's month-to-date billed credits in Manage Agents ... [Table rows cover environment capacity, agent limits, and browsing availability only.] | Fix: The 'Identify the environments' step and the consumption-monitoring steps have no inventory or monitoring row in the table. Remove those checklist steps to meet the table-coverage rule without introducing new control rows.
-->
