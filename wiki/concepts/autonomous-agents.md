---
kind: "concept"
title: "Autonomous agents: what runs an agent when no one is in the conversation?"
slug: "autonomous-agents"
summary: "Autonomous agents in Copilot Studio act on an event trigger or a schedule instead of a user prompt. Administrators decide whether makers may add triggers, whose credentials run them and how much they consume."
created: "2026-11-20"
updated: "2026-11-25"
version: 4
tags: ["autonomous-agents","copilot-studio","agents","human-in-the-loop","maker-credentials","data-policies","copilot-credits","guardrails","monitoring"]
covers: []
sources:
  - title: "Design autonomous agent capabilities"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/autonomous-agents"
    kind: "learn"
  - title: "Event trigger overview"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers-about"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Limit sharing"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    kind: "learn"
  - title: "Monitor autonomous agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-health"
    kind: "learn"
  - title: "Share agents with other users and makers (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    kind: "learn"
  - title: "Add triggers to an agent (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-add-event-trigger"
    kind: "learn"
  - title: "Set up a shared autonomous agent (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/end-user-manage-shared-agent"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
  - title: "FAQ for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/faqs-copilot-harness"
    kind: "learn"
  - title: "Manage Copilot Credits for usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Manage Copilot Studio costs with usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
related: ["agent-identity","copilot-credits","data-policies","managed-environments","spending-policies","copilot-studio-share-autonomous-agents-run-only","copilot-studio-block-maker-provided-credentials","dynamics-365-customer-service-copilot-and-ai-innovation-resolve-customer-emails-autonomous"]
controls:
  - governs: "Whether makers can add event triggers to agents (Microsoft Copilot Studio connector)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Add an environment > Available > environment > Add to policy > Assign connectors > Microsoft Copilot Studio > three dots next to the connector > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <PolicyGuid> -Classification Blocked -Connectors <ConnectorObjects>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    note: "Tenant admin or Environment Admin. Also blocks automated evaluations that use authenticated accounts."
  - governs: "Whether users can share solution-aware cloud flows and agent flows, which event triggers depend on"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > managed environment > Edit Managed Environments > Manage sharing > Let people share solution-aware cloud flows"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    api:
      kind: "powershell"
      call: "Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration $governanceConfiguration"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    note: "Managed environments only. The setting is the extended setting solutionCloudFlows-limitSharingMode on the governance configuration; disableSharing turns sharing off."
confidence: "medium"
dependents: 13
changes:
  - date: "2026-11-20"
    note: "First page on autonomous agents: what starts them, whose credentials they use, what they consume and the two controls that gate them."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: standard-harness and Microsoft Copilot harness preview behaviour and billing are now kept apart, the claim that data policies do not govern running agents is removed, and the sharing question is reworded."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: the 125% enforcement threshold now notes that an environment with remaining allocated prepaid capacity is not blocked, and the data policy path now includes the three-dots step."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 85 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the Enforcement bullet: with pay-as-you-go overage, running out of prepaid credits does not block agents, but agents an administrator turned off or that hit a stop-usage monthly limit are still blocked."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 93 statements confirmed"
verification:
  status: "verified"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 93
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "435a526cfadae63494e87f4b0e7070b8"
---

## What it is

An autonomous agent is a Copilot Studio agent that acts without waiting for a user prompt: an event trigger starts it instead of a person typing. Microsoft notes that event-driven execution does not mean the agent runs continuously.

**How it works.** An event trigger registers that something happened, such as an item created in SharePoint, a task completed in Planner or a Recurrence trigger firing after a set time. It sends the agent a *trigger payload* through a connector. The agent follows its own instructions and any instructions in the payload, and calls the actions or topics its author defined. For standard-harness agents, event triggers need generative orchestration turned on.

Until a standard-harness agent is published with a new trigger it does not react automatically. After publishing it reacts each time the trigger fires, and the Activity page records each trigger and reaction. In the Microsoft Copilot harness preview, **Activate for me** takes you to **Agent management**, where you turn on the agent; after that the agent starts running on your behalf.

**Two authentication models**

| | Standard harness | Microsoft Copilot harness (preview) |
| --- | --- | --- |
| Whose credentials run the triggers | The agent author's only | After publishing, the maker chooses **Activate for me** (maker credentials) or **Share with others** (recipients connect with their own credentials) |
| Who sets up connections | The maker | Each recipient, on the agent management page |

This page covers the Copilot Studio mechanism. The product-specific agents in the briefings listed below are not explained here. For credential patterns see [Agent identity](/concepts/agent-identity/).

## Why it matters

A conversational agent has a person at the moment it acts. An autonomous agent does not, so the safeguards have to be set before it is published. Microsoft's design guidance asks for explicit permissions, decision boundaries and human oversight, and says not to rely on instructions alone to prevent unauthorised actions.

In the standard harness the author's credentials run every authenticated trigger, so what the agent can reach depends on the maker rather than on the people it serves. Cost also follows the triggers, not the users: a Recurrence trigger every 10 minutes sends a payload every 10 minutes. Agent makers can add event triggers, and a data policy is how an administrator stops that.

## Cost and licensing

For standard-harness agents, event trigger activity counts towards Copilot Credit consumption. Each trigger payload is processed like a message from a user, and the agent's response is billed at the Copilot Credits billing rates, in which trigger steps count as agent actions (5 Copilot Credits). In the Microsoft Copilot harness preview, Copilot Credits are charged for large language model (LLM) tokens, tools (including knowledge and MCPs) and the harness itself. Rates and capacity are explained in [Copilot Credits](/concepts/copilot-credits/); caps on who can consume them are in [Spending policies](/concepts/spending-policies/).

- **Microsoft 365 Copilot licence.** The agent-flow "No charge" exemption does not apply when the agent runs autonomously: flow runs called by an autonomous agent consume Copilot Credits and are subject to enforcement even if users hold Microsoft 365 Copilot licences.
- **Enforcement.** Under the prepaid capacity model, which covers autonomously triggered usage, enforcement is triggered when the tenant reaches 125% of its prepaid capacity, and it blocks the environment's agents. An environment with remaining allocated prepaid capacity is not blocked by the tenant reaching 125% while that allocation remains available. If the environment bills overage to a pay-as-you-go plan, running out of prepaid Copilot Credits does not block its agents; agents that an administrator turned off or that reached a monthly limit set to stop usage are still blocked.
- **Preview sharing.** Each end user's autonomous agent usage is totalled and billed through the environment hosting the agent.

The trigger overview states no separate autonomous-agent-specific licence; general authoring access requirements are documented in [Licensing for agents powered by the standard harness](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing).

## Risks and limits

- **Author credentials reach every user.** In the standard harness, triggers can use only the author's credentials. Users of a published agent might access information or prompt actions with them.
- **Payloads can leak.** Trigger payloads can contain sensitive information that the agent can output elsewhere through actions.
- **Frequent triggers cost and throttle.** The shorter the interval, the more resources a trigger uses, and the agent might exceed service quota limits and be throttled.
- **Publishing starts it.** For standard-harness agents, publishing with a new trigger makes the agent react automatically each time the trigger activates, so test the trigger first.
- **Spoofed triggers.** Microsoft advises checking that triggering events are authentic, for example by validating the sender of an email.
- **Capacity exhaustion stops agents.** A blocked agent stops responding, including in a conversation already in progress; new agent flow runs are blocked separately.
- **Triggers need flow sharing.** Event triggers can be added only where solution-aware cloud flow sharing is turned on.
- **Blocking one connector has a second effect.** The data policy that blocks event triggers also blocks automated evaluations using authenticated accounts.
- **Shared-agent limits (preview).** Workflows with maker-only credentials are not supported, recipients cannot change tool parameters and they receive no notification when an agent is shared.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can add event triggers to agents (Microsoft Copilot Studio connector)</strong><br><small>Environment</small><br><small class="controls__note">Tenant admin or Environment Admin. Also blocks automated evaluations that use authenticated accounts.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Add an environment › Available › environment › Add to policy › Assign connectors › Microsoft Copilot Studio › three dots next to the connector › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;PolicyGuid&gt; -Classification Blocked -Connectors &lt;ConnectorObjects&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can share solution-aware cloud flows and agent flows, which event triggers depend on</strong><br><small>Environment</small><br><small class="controls__note">Managed environments only. The setting is the extended setting solutionCloudFlows-limitSharingMode on the governance configuration; disableSharing turns sharing off.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Manage sharing › Let people share solution-aware cloud flows <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Configuring a data policy needs the tenant admin or Environment Admin role. A policy with tenant scope applies to all agents in all environments. Copilot Studio enforces data policies in real time: a maker who is blocked sees an error in the **Triggers** section of the agent's **Overview** page.

**Sharing rule.** The solution-aware flow rule sits in Managed Environments ([Managed Environments](/concepts/managed-environments/)). It is enforced when users try to share and can take up to an hour to apply.

**Monitoring.** In Copilot Studio the **Monitor** page shows run outcomes, trigger use, tool use and knowledge source use for agents with event triggers, for sessions in the last 360 days. Administrators can also monitor resource usage through Power Platform. Microsoft documents no audit-log event for trigger-started runs in the pages read. For blocking maker credentials see [Agent identity](/concepts/agent-identity/); for the connector mechanics see [Data policies](/concepts/data-policies/).

## What to check

- Review each environment's data policies to see whether the Microsoft Copilot Studio connector is blocked, and decide whether makers there should add event triggers.
- Check the solution-aware cloud flow sharing rule in managed environments where triggers should or should not be possible.
- Ask makers which credentials their triggers authenticate with and what data those connections reach before they publish.
- Estimate the Copilot Credits a Recurrence trigger will consume at its interval before it is published.

## Open questions

- Does blocking the Microsoft Copilot Studio connector stop agents whose triggers were already published, or only the adding of new triggers? The data policy page describes preventing makers from adding them.
- Which audit events, if any, record a trigger-started run in the unified audit log?
- How do Managed Environment sharing controls map to **Can use** for shared autonomous agents in the Microsoft Copilot harness preview?
