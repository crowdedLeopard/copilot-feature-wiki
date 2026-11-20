---
kind: "concept"
title: "Autonomous agents: what runs an agent when no one is in the conversation?"
slug: "autonomous-agents"
summary: "Autonomous agents in Copilot Studio act on an event trigger or a schedule instead of a user prompt. Administrators decide whether makers may add triggers, whose credentials run them and how much they consume."
created: "2026-11-20"
updated: "2026-11-20"
version: 1
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
related: ["agent-identity","copilot-credits","data-policies","managed-environments","spending-policies","copilot-studio-share-autonomous-agents-run-only","copilot-studio-block-maker-provided-credentials","dynamics-365-customer-service-copilot-and-ai-innovation-resolve-customer-emails-autonomous"]
controls:
  - governs: "Whether makers can add event triggers to agents (Microsoft Copilot Studio connector)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Add an environment > Available > environment > Add to policy > Assign connectors > Microsoft Copilot Studio > Block"
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
dependents: 11
changes:
  - date: "2026-11-20"
    note: "First page on autonomous agents: what starts them, whose credentials they use, what they consume and the two controls that gate them."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 66
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "bbb7008806c99870166014e03e4569aa"
---

## What it is

An autonomous agent is a Copilot Studio agent that acts without waiting for a user prompt: an event trigger starts it instead of a person typing. Microsoft notes that event-driven execution does not mean the agent runs continuously.

**How it works.** An event trigger registers that something happened, such as an item created in SharePoint, a task completed in Planner or a Recurrence trigger firing after a set time. It sends the agent a *trigger payload* through a connector. The agent follows its own instructions and any instructions in the payload, and calls the actions or topics its author defined. Event triggers need generative orchestration turned on.

Until the agent is published with a new trigger it does not react automatically. After publishing it reacts each time the trigger fires, and the Activity page records each trigger and reaction.

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

Event trigger activity counts towards Copilot Credit consumption. Each trigger payload is processed like a message from a user, and the agent's response is billed at the Copilot Credits billing rates, in which trigger steps count as agent actions (5 Copilot Credits). Rates and capacity are explained in [Copilot Credits](/concepts/copilot-credits/); caps on who can consume them are in [Spending policies](/concepts/spending-policies/).

- **Microsoft 365 Copilot licence.** The agent-flow "No charge" exemption does not apply when the agent runs autonomously: flow runs called by an autonomous agent consume Copilot Credits and are subject to enforcement even if users hold Microsoft 365 Copilot licences.
- **Enforcement.** Under the prepaid capacity model, which covers autonomously triggered usage, enforcement starts at 125% of prepaid capacity and blocks the environment's agents. If the environment bills overage to a pay-as-you-go plan, agents are not blocked.
- **Preview sharing.** Each end user's autonomous agent usage is totalled and billed through the environment hosting the agent.

Whether a separate licence is needed to build or publish an autonomous agent is not covered by the pages read for this page.

## Risks and limits

- **Author credentials reach every user.** In the standard harness, triggers can use only the author's credentials. Users of a published agent might access information or prompt actions with them.
- **Payloads can leak.** Trigger payloads can contain sensitive information that the agent can output elsewhere through actions.
- **Frequent triggers cost and throttle.** The shorter the interval, the more resources a trigger uses, and the agent might exceed service quota limits and be throttled.
- **Publishing starts it.** After publishing with a new trigger the agent reacts to every activation with no further approval, so test the trigger first.
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
<tr><td data-label="Control"><strong>Whether makers can add event triggers to agents (Microsoft Copilot Studio connector)</strong><br><small>Environment</small><br><small class="controls__note">Tenant admin or Environment Admin. Also blocks automated evaluations that use authenticated accounts.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Add an environment › Available › environment › Add to policy › Assign connectors › Microsoft Copilot Studio › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;PolicyGuid&gt; -Classification Blocked -Connectors &lt;ConnectorObjects&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can share solution-aware cloud flows and agent flows, which event triggers depend on</strong><br><small>Environment</small><br><small class="controls__note">Managed environments only. The setting is the extended setting solutionCloudFlows-limitSharingMode on the governance configuration; disableSharing turns sharing off.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Manage sharing › Let people share solution-aware cloud flows <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Configuring a data policy needs the tenant admin or Environment Admin role. A policy with tenant scope applies to all agents in all environments. Copilot Studio enforces data policies in real time: a maker who is blocked sees an error in the **Triggers** section of the agent's **Overview** page.

**Sharing rule.** The solution-aware flow rule sits in Managed Environments ([Managed Environments](/concepts/managed-environments/)). It is enforced when users try to share and can take up to an hour to apply. Neither control governs what a published agent does once it runs.

**Monitoring.** In Copilot Studio the **Monitor** page shows run outcomes, trigger use, tool use and knowledge source use for agents with event triggers, for sessions in the last 360 days. Administrators can also monitor resource usage through Power Platform. Microsoft documents no audit-log event for trigger-started runs in the pages read. For blocking maker credentials see [Agent identity](/concepts/agent-identity/); for the connector mechanics see [Data policies](/concepts/data-policies/).

## What to check

- Review each environment's data policies to see whether the Microsoft Copilot Studio connector is blocked, and decide whether makers there should add event triggers.
- Check the solution-aware cloud flow sharing rule in managed environments where triggers should or should not be possible.
- Ask makers which credentials their triggers authenticate with and what data those connections reach before they publish.
- Open the Monitor page for each agent with event triggers and read run outcomes and trigger use.
- Estimate the Copilot Credits a Recurrence trigger will consume at its interval before it is published.

## Open questions

- Does blocking the Microsoft Copilot Studio connector stop agents whose triggers were already published, or only the adding of new triggers? The data policy page describes preventing makers from adding them.
- Which audit events, if any, record a trigger-started run in the unified audit log?
- Is there an administrator switch that stops makers sharing an autonomous agent with **Can use** in the Microsoft Copilot harness preview? No setting is documented.

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What it is: publishing / behaviour: Publishing starts automatic reactions to each trigger activation, with no further approval or activation. | Found: **Activate for me** takes you to **Agent management**, where you turn on the agent. After you turn on the agent, your agent starts running on your behalf. | Fix: Scope the publishing paragraph and the 'Publishing starts it' risk bullet to standard-harness agents. Replace the risk sentence with 'For standard-harness agents, publishing with a new trigger makes the agent react automatically each time the trigger activates, so test the trigger first.' Do not extend this to the Microsoft Copilot harness preview: its cited activation instructions require turning on the agent in Agent management after publishing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-add-event-trigger
- [contradicted, blocker] Cost and licensing / cost: Trigger steps count as agent actions at five Copilot Credits, without distinguishing the two harnesses covered by the page. | Found: For experiences powered by the Microsoft Copilot harness, Copilot Credits are charged for large language model (LLM) tokens, tools (including knowledge and MCPs), and the harness itself. | Fix: Prefix the first Cost and licensing paragraph with 'For standard-harness agents,' so the five-credit agent-action rate is not presented as the rate for the Microsoft Copilot harness preview. The cited Billing rates and management page explicitly covers the standard harness; the preview uses the different usage-based structure documented at https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [contradicted, blocker] Governance controls: Sharing rule / applicability: Neither the data policy nor the sharing control governs what a published agent does once running. | Found: If your published agent is in violation of your data policies, users of the agent see a **DataLossPreventionViolation** error when trying to interact with it. | Fix: Remove 'Neither control governs what a published agent does once it runs.' The statement wrongly generalises sharing-time enforcement to data policies; the exact effect of blocking event triggers on already-published triggers can remain the narrower question already listed in Open questions. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-dlp-troubleshooting#symptoms
- [contradicted, blocker] Open questions: administrator sharing switch / absence: No administrator setting is documented for stopping makers from sharing autonomous agents with Can use in the Microsoft Copilot harness preview. | Found: Admins govern it with four kinds of control: who can build agents, how much an agent can spend, what data and connectors it can reach, and who it can be shared with. Who agents are shared with: Managed environment sharing controls and environment security groups | Fix: Replace the final Open questions bullet with 'How do Managed Environment sharing controls map to Can use for shared autonomous agents in the Microsoft Copilot harness preview?' Remove 'No setting is documented': Microsoft's harness FAQ explicitly documents administrative sharing controls, although the passages reviewed do not describe the Can use mapping. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/faqs-copilot-harness#where-are-my-topics,-and-how-do-i-migrate-them-to-the-microsoft-copilot-harness
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: How it works / behaviour: Event triggers need generative orchestration turned on. | Found: This article describes features used in agents or agent flows powered by the standard harness. This feature is only available for agents with generative orchestration turned on. | Fix: Change the sentence to 'For standard-harness agents, event triggers need generative orchestration turned on.' The cited prerequisite is scoped to that harness. | Source: https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers-about
- [supported, minor] Cost and licensing: Enforcement / cost: The prepaid-capacity enforcement threshold is 125%. | Found: Enforcement is triggered when a tenant reaches 125% of their prepaid capacity. | Fix: Change 'enforcement starts at 125% of prepaid capacity' to 'enforcement is triggered when the tenant reaches 125% of its prepaid capacity'. This distinguishes the tenant threshold from an environment allocation. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [supported, minor] Cost and licensing: final paragraph / absence: The cited pages do not state a separate autonomous-agent-specific licence for building or publishing. | Found: Searched: Copilot Studio autonomous agents build publish license requirements. Opened cited trigger and sharing pages and microsoft-copilot-studio/billing-licensing; general authoring access is documented, but no separate autonomous-agent-specific licence is stated. | Fix: Replace the final sentence with 'The trigger overview states no separate autonomous-agent-specific licence; general authoring access requirements are documented in Licensing for agents powered by the standard harness (https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing).' This avoids leaving readers with the impression that product-level authoring requirements are unknown.
- [contradicted, minor] What to check: Open the Monitor page / consistency: The checklist asks readers to review the Monitor control, but no monitoring row appears in the controls table. | Found: Checklist: 'Open the Monitor page for each agent with event triggers and read run outcomes and trigger use.' The table contains only connector blocking and solution-aware cloud flow sharing. | Fix: The 'Open the Monitor page' checklist step has no corresponding controls-table row. Remove this checklist bullet; the Monitoring paragraph can retain the documented capability.
- [supported, minor] summary: whose credentials run them / applicability: Administrators can restrict the use of maker-provided credentials rather than leaving credential governance solely to makers. | Found: Administrators can use the **Sharing agents with embedded maker credentials** setting in the Power Platform admin center to prevent agents from being shared when they contain connections configured to use maker credentials that other users aren't permitted to reuse. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits to sources for the summary's credential-governance claim. This is the supporting Microsoft page missing from the current sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
-->
