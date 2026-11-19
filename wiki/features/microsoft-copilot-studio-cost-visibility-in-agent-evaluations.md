---
title: "Copilot Studio: cost visibility in agent evaluations"
slug: "microsoft-copilot-studio-cost-visibility-in-agent-evaluations"
roadmapId: 571195
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers will see the Copilot Credits that an agent evaluation uses, split by activity. It informs makers and changes no setting, but evaluation credits are billed to the environment, so owners should set limits."
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
  notes: "Learn says building, testing, evaluating and running Microsoft Copilot harness agents can consume Copilot Credits and that this usage is not included with a Microsoft 365 Copilot licence. A rate for evaluation activity is not yet published."
audiences: ["maker","power-platform-admin","finops"]
tags: ["copilot-studio","agent-evaluation","copilot-credits","usage-based-billing","cost-management","finops","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 571195"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571195"
    kind: "roadmap"
  - title: "Evaluate agent behavior (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot-managed-runtime/developer/agents/cli/evaluate?view=o365-worldwide"
    kind: "learn"
  - title: "Understand estimated credit usage"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-understand-display"
    kind: "learn"
  - title: "Evaluate an agent (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro"
    kind: "learn"
  - title: "View evaluation results for an agent (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-view"
    kind: "learn"
  - title: "Create a test set for an agent (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-create"
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
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
videos: []
related: ["microsoft-power-platform-governance-and-administration-multi-grader-comparison","copilot-credits"]
controls:
  - governs: "Estimated Copilot Credits shown for an evaluation run and each test case"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Evaluate > recent results > evaluation"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-view"
    api:
      kind: "other"
      call: "msagent agent eval show --project <project-path> --agent-name <agent-name> --environment-id <environment-id> --run-id <run-id> --transcript"
      docs: "https://learn.microsoft.com/microsoft-365/copilot-managed-runtime/developer/agents/cli/evaluate?view=o365-worldwide"
    note: "Maker-side display, not a control. Preview page; not confirmed as the roadmap item. The preview Copilot Studio CLI reports evaluation credit usage; its page does not promise the portal's per-test-case breakdown."
  - governs: "Credits allocated to an environment, and whether it draws from tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT /licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Needs Power Platform Administrator, Global Administrator or an equivalent role. A published environment-group rule makes the setting read-only; API updates are rejected with TenantPoolLockedByPolicy. Base URL https://api.powerplatform.com."
  - governs: "Monthly Copilot Credit limit and Stop usage for one agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api: null
    note: "Limits are not applied instantly, so an agent can keep responding for some time after reaching one."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap plan for credit cost visibility in evaluations, compared with the Learn preview that already shows estimated credits in Evaluate."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: added the Products step to the environment path, replaced the allocation call with the full request and its group-rule lock, qualified the spending caps and moved the Monitor page to Copilot Studio."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the Scope section now says only that the roadmap record does not state rollout mechanics or prerequisites."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: the first control now lists the preview CLI command that reports evaluation credit usage, the allocation call is shortened to the operation, and the consumption-review checklist step is removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 80
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3484a9d832460970a997c10643ba7fce"
---

## What's changing

The roadmap item plans cost visibility inside Copilot Studio agent evaluations. Makers are to see the consumption cost tied to their evaluations, including a breakdown of usage for evaluation generation, test runs and model grading or judgement, while they test, iterate and review conversations.

Microsoft Learn already describes a version of this for evaluations of agents built on the Microsoft Copilot harness, marked as a preview. There, the **Evaluate** tab shows an estimated Copilot Credit total for each evaluation run, a breakdown between credits used to generate agent responses and credits used to score and grade them, and credits at the individual test-case level. The same page says the estimates in **Evaluate** are near-real-time approximations, and that the **Total estimated credits used** metric in **Monitor** is the source of truth. The roadmap record does not link a page, so this briefing cannot confirm that the Learn preview is the roadmap item. The roadmap's wording about generating evaluations is also not matched by the Learn breakdown, which names generating and scoring responses.

The roadmap record shows status In development, release phase General Availability, a target of September CY2026 and no preview date, for Worldwide (Standard Multi-Tenant) on the web. As of 17 November 2026 the target month has passed with the status unchanged. Treat the date as a target, not a delivery.

## Why it matters

Evaluations spend credits in the environment where the agent runs, and Learn says Copilot Credits are charged to that environment, not to the maker who runs the agent. This item gives the maker a figure to act on, while the person accountable for the budget is the environment or capacity owner. Expect makers to quote Evaluate figures, so tell them which figure is final: Learn names Monitor as the authoritative measure.

Microsoft has not stated whether the display arrives on by default or needs any step, so the wiki rates the default as unknown and bases the advice on no source saying existing behaviour changes. The spend itself is not new for Microsoft Copilot harness agents: Learn already lists evaluating among the activities that can consume credits.

## Risk assessment

**Data exposure**

- No new data access is described by the roadmap item. Evaluate runs with the currently signed-in user profile, per the Learn preview page, so what an evaluation can reach follows that maker's connections.

**Security & identity**

- No change is described. Microsoft has not stated which roles can see the credit figures, so confirm this in a test environment before telling makers the figures are visible to reviewers.

**Autonomy & actions**

- Running an evaluation sends test conversations to the agent and has the responses scored, and the Learn preview page reports the credits for both steps. The display informs; the controls that stop usage are the agent monthly limit with **Stop usage** and, for prepaid consumption with no enabled overage source, the environment allocation in the Power Platform admin center (see the controls table).

**Change & support**

- Evaluate figures are estimates, and Monitor can lag by a few hours, so expect support questions when the two differ. Learn says Monitor is updated a few times a day.
- Credits can run out: Learn says that when an environment has no available Copilot Credits, experiences that require credits can stop working, which can include evaluations.

## Cost and licensing

**Licence.** For agents on the Microsoft Copilot harness, Learn says building, testing, evaluating and running them can consume Copilot Credits and that this usage is not included with a user's Microsoft 365 Copilot licence (Manage costs for agents powered by the Microsoft Copilot harness). The Learn evaluation preview requires an agent created with the Microsoft Copilot harness.

**Meter.** The meter is Copilot Credits. The overview of usage-based billing lists generating and creating agent evaluations among the experiences that consume credits. Credits are charged to the environment where the agent runs, from prepaid capacity or through the environment's pay-as-you-go billing plan.

**Caps.** An allocation with **Draw from the available capacity in my tenant** cleared bounds prepaid consumption, but usage can continue through a linked pay-as-you-go billing plan. An agent monthly limit with **Stop usage** stops the agent, not the agent flows it calls; those are billed and checked separately. Learn says limits are not applied instantly, so leave a margin.

**Not yet published.** A credit rate for evaluation generation, test runs or grading is not yet published on the pages read, and the roadmap states no separate charge or licence for the cost display. Learn's standard-harness evaluation pages do not state whether evaluation runs consume credits at the time of writing (November 2026).

## Scope

The roadmap lists Microsoft Copilot Studio, Worldwide (Standard Multi-Tenant), the web platform and General Availability. It lists no other clouds; that is a record fact and not a statement about availability elsewhere.

The Learn preview describes evaluations for agents created and saved with the Microsoft Copilot harness and notes that a test set holds up to 20 conversations. Which harness the roadmap item covers is not stated. The roadmap record does not state rollout mechanics or prerequisites.

## Governance guidance

### Before rollout

- Identify which environments host Microsoft Copilot harness agents and who owns their capacity.
- Set an allocation and decide whether to clear **Draw from the available capacity in my tenant** for makers' development environments, to bound prepaid consumption; this does not stop usage through a linked pay-as-you-go billing plan.
- Set a monthly limit and notification threshold on agents that makers evaluate often, and decide whether **Stop usage** should apply.

### At rollout

- Tell makers that Evaluate shows estimated credits and that the final figure is the **Total estimated credits used** metric in **Monitor**.
- Run one small evaluation in a test environment and compare the Evaluate figure with Monitor, to see the breakdown and the delay before you give guidance.

### After rollout

- Check the status of environments and agents against their limits, and raise a limit through your own request process where evaluation volume is justified.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Estimated Copilot Credits shown for an evaluation run and each test case</strong><br><small>Agent</small><br><small class="controls__note">Maker-side display, not a control. Preview page; not confirmed as the roadmap item. The preview Copilot Studio CLI reports evaluation credit usage; its page does not promise the portal's per-test-case breakdown.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Evaluate › recent results › evaluation <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-view" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>msagent agent eval show --project &lt;project-path&gt; --agent-name &lt;agent-name&gt; --environment-id &lt;environment-id&gt; --run-id &lt;run-id&gt; --transcript</code> <a href="https://learn.microsoft.com/microsoft-365/copilot-managed-runtime/developer/agents/cli/evaluate?view=o365-worldwide" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credits allocated to an environment, and whether it draws from tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Needs Power Platform Administrator, Global Administrator or an equivalent role. A published environment-group rule makes the setting read-only; API updates are rejected with TenantPoolLockedByPolicy. Base URL https://api.powerplatform.com.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT /licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit and Stop usage for one agent</strong><br><small>Agent</small><br><small class="controls__note">Limits are not applied instantly, so an agent can keep responding for some time after reaching one.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table keeps the maker-side display separate from the admin controls. The display is read-only information; it does not cap or stop usage. The admin controls need the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

These controls are shared across Copilot Studio: Learn says changes to shared capacity can affect other agents, workflows and features in the same environment. Microsoft has not said whether any control applies to evaluation usage separately from other agent usage, and none is described for hiding the cost display.

The Power Platform admin center offers consumption reports, while the agent's Monitor page is in Copilot Studio, as Learn describes at [Manage Copilot Credits and capacity for Copilot Studio](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity). Whether the reports separate evaluation usage is not stated.

## Open questions

- Is the roadmap item the same as the estimated-credit display in the Learn evaluation preview for the Microsoft Copilot harness, or does it add to it? Watch the roadmap item and Message center.
- Does the display apply to agents on the standard harness, whose Learn evaluation pages do not mention credit figures at the time of writing (November 2026)?
- Which activity does the roadmap's evaluation generation breakdown refer to, and will it appear as its own line next to generating and scoring responses?
- What credit rate applies to generating test conversations, running test cases and grading, and will the Power Platform admin center reports show evaluation usage separately?
- Is the display on by default, and which roles can see it?

<!-- rationale
risk: Low. The change adds cost figures to the maker's evaluation view and the roadmap describes no new data access or action; the exposure that remains is credits being spent by evaluations in the environment.
cost: Variable. The display is not described as a charge, but the evaluation activity it reports is metered in Copilot Credits for agents on the Microsoft Copilot harness; the evaluation rate is not yet published.
impact: Medium. Makers who run evaluations see the figures; owners of environments and capacity are affected through the credits those evaluations draw.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api; controls[1].note; Governance controls: second row / command: PUT /licensing/allocationsV2?api-version=2024-10-01 writes the environment allocation and tenant-pool draw configuration. | Found: $apiVersion    = "2024-10-01" Invoke-RestMethod -Method Put ` -Uri "$apiBaseUrl/licensing/allocationsV2?api-version=$apiVersion" | Fix: Keep the call unchanged. Add to controls[1].note and the rendered row: 'The request body targets scope.environmentId; allocatedEntitlements uses entitlementId MCSMessages, allocation.quantity and enforcementRules with ruleType TenantPool and enabled false to disable tenant-capacity draw.' The cited allocation tutorial documents these properties. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
-->
