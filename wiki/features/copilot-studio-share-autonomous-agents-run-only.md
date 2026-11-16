---
title: "Copilot Studio: share autonomous agents with end users (run-only)"
slug: "copilot-studio-share-autonomous-agents-run-only"
roadmapId: 567894
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers can share trigger-based agents with people who run them under their own credentials. Each user's runs bill Copilot Credits to the hosting environment, and users manage their own connections and trigger settings."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "August CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Autonomous agent runs bill Copilot Credits through the environment that hosts the agent, totalled per end user. Users sharing or using agents need Copilot Studio access per the sharing prerequisites."
audiences: ["power-platform-admin","security","finops","maker","service-owner"]
tags: ["copilot-studio","autonomous-agents","triggers","sharing","run-only","copilot-credits","end-user-authentication"]
sources:
  - title: "Microsoft 365 Roadmap 567894"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567894"
    kind: "roadmap"
  - title: "Share agents with other users and makers: share an autonomous agent for users to run (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    kind: "learn"
  - title: "Add triggers to an agent (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-add-event-trigger"
    kind: "learn"
  - title: "Set up a shared autonomous agent"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/end-user-manage-shared-agent"
    kind: "learn"
  - title: "Overview of usage-based billing for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Who may share agents and with how many people (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#agent-sharing-rules"
    kind: "learn"
  - title: "Who may share agents and with how many people (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config"
    kind: "learn"
  - title: "Whether event triggers are available (Microsoft Copilot Studio connector) (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Whether event triggers are available (Microsoft Copilot Studio connector) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Which users can run a shared autonomous agent (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent#share-an-autonomous-agent-for-users-to-run-preview"
    kind: "learn"
  - title: "Spending policies and limits for agents (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "Spending policies and limits for agents (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
videos: []
related: ["copilot-studio-block-maker-provided-credentials","copilot-studio-safe-sharing-credential-oversharing","copilot-studio-cost-management-m365-admin-center","copilot-studio-require-human-approval-for-tool-calls","copilot-credits"]
controls:
  - governs: "Who may share agents and with how many people"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Edit Managed Environments > Limit sharing"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#agent-sharing-rules"
    api:
      kind: "pac-cli"
      call: "pac admin set-governance-config --environment <environment-id> --protection-level Standard --limit-sharing-mode <mode> --max-limit-user-sharing <n>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config"
  - governs: "Whether event triggers are available (Microsoft Copilot Studio connector)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    note: "Blocking the Microsoft Copilot Studio connector removes triggers from the environment."
  - governs: "Which users can run a shared autonomous agent"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Share > Can use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent#share-an-autonomous-agent-for-users-to-run-preview"
    api: null
  - governs: "Spending policies and limits for agents"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api:
      kind: "graph"
      call: "/beta/copilot/costManagement (Cost Management API)"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-07-20T22:37:15"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Autonomous agents in Copilot Studio run from **triggers** (an email arrives, a record changes, a schedule fires) rather than a chat prompt. Until now only the maker could activate such an agent, and it ran with the maker's connections. This feature lets a maker share a published autonomous agent with individual users or security groups using a **Can use** permission.

Recipients receive a set-up link, activate the agent for themselves, connect each trigger and tool with **their own credentials**, and can change only the trigger options the maker permits. They cannot edit the agent, see its configuration, or change tool parameters; tool calls are decided and executed by the model according to the maker's design. Each user manages their copy through an agent management page, where they also consent to any updates the maker publishes.

Billing follows the environment: Microsoft states that each end user's autonomous agent usage is totalled and billed through the environment that hosts the agent. The feature is in preview from August 2026 with General Availability targeted for January 2027.

## Why it matters

This is the point where "an agent a maker runs for themselves" becomes "an automation the whole team depends on". Each shared instance runs under a different person's identity, so one agent can become fifty scheduled jobs touching fifty mailboxes, each with that user's permissions. That is better for least privilege than a single maker credential, and far harder to see from the outside.

For a service owner the questions are: who is allowed to share autonomous agents, which environments may host them, how much credit they may consume, and what happens when the maker leaves. None of those are answered by the feature itself; they are answered by Managed Environments sharing limits, data policies and spending policies.

## Risk assessment

**Data exposure**
- Each instance acts on the recipient's data (mail, files, records) with the recipient's permissions, without that person watching. Trigger scoping (which mailbox, which folder, which table) decides the blast radius.
- Makers cannot see users' data through the shared agent, but they define the instructions that act on it.

**Security & identity**
- Positive: no maker credentials are reused; "workflow as a tool" must use end-user credentials in this model.
- Users consent to maker updates; a changed instruction set can alter what the agent does with the user's data. Make update consent meaningful by publishing release notes.

**Autonomy & actions**
- This is autonomous by definition: no human reviews each run. Pair with per-tool human approval for consequential actions (send, delete, pay).
- Users cannot adjust tool parameters, so a flawed instruction affects every instance identically.

**Change & support**
- Users do not get a notification when an agent is shared; makers must send the set-up link. Expect confusion about "where is my agent".
- Users must bookmark the agent management URL to fix broken connections; support teams need to know that page exists.

## Cost and licensing

- **Copilot Credits**, billed through the hosting environment and totalled per user. A popular agent with a frequent trigger can consume credits continuously.
- Sharing prerequisites include authentication set to Authenticate with Microsoft and publication to Teams and Microsoft 365; users you share with need the relevant Copilot Studio access per the Learn article.
- No per-instance licence, but a resource-based spending policy per environment or agent is the realistic cap on spend.
- Indirect: maker time to document trigger scopes and update notes; help desk time for connection failures.

## Scope

- Agents built in the new Copilot Studio experience with triggers configured for user authentication.
- Worldwide (standard multi-tenant). No government cloud dates.
- Recipients: individual users or security groups given **Can use**. Editors still need environment security roles.
- Limitations in preview: workflows as tools accept end-user credentials only; users cannot modify tool parameters.

## Governance guidance

**Before rollout**
- Decide which environments may host shareable autonomous agents (recommend: Managed Environments with sharing limits, not the default environment).
- Set a resource-based spending policy on those environments so a runaway trigger has a ceiling.
- Define what a maker must document before sharing: trigger scope, tools used, write actions, expected run frequency and credit estimate.

**At rollout**
- Enforce end-user credentials and safe sharing in the hosting environments.
- Require human approval on write-capable tools used by shared autonomous agents.
- Give the help desk the agent management URL and a one-page guide to reconnecting a trigger.

**After rollout**
- Review credit consumption per agent monthly and compare with the maker's estimate.
- Audit which users have active instances when a maker leaves; reassign ownership before the agent is orphaned.
- Watch for GA changes to the tool-parameter and workflow-credential limitations.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who may share agents and with how many people</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Edit Managed Environments › Limit sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#agent-sharing-rules" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin set-governance-config --environment &lt;environment-id&gt; --protection-level Standard --limit-sharing-mode &lt;mode&gt; --max-limit-user-sharing &lt;n&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether event triggers are available (Microsoft Copilot Studio connector)</strong><br><small>Environment</small><br><small class="controls__note">Blocking the Microsoft Copilot Studio connector removes triggers from the environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can run a shared autonomous agent</strong><br><small>Agent</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Share › Can use <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent#share-an-autonomous-agent-for-users-to-run-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending policies and limits for agents</strong><br><small>Agent</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>/beta/copilot/costManagement (Cost Management API)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Run-only sharing is set by the maker; admins shape it indirectly through sharing limits, data policies and spending policies. Each recipient gets their own instance to manage on the [agent management page](https://learn.microsoft.com/microsoft-copilot-studio/end-user-manage-shared-agent), which admins do not see. The [triggers reference](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers-about) explains how a blocked connector disables triggers. Credential options for the agent's tools follow the environment's [maker credential setting](/features/copilot-studio-block-maker-provided-credentials/).

## Open questions

- How per-user billing appears in the Microsoft 365 admin center consumption view (user or agent attribution).
- Whether admins will get a tenant-level list of shared autonomous agent instances, or only makers see their recipients.
- Behaviour when the maker's account is disabled: do instances keep running on users' credentials?

<!-- rationale
risk: High. Autonomous execution on many users' data with no per-run review, billing that scales with recipients, and no admin-side instance inventory yet.
cost: Variable. Copilot Credits per run through the hosting environment; needs a spending policy.
impact: Medium. Affects makers and the users they share with; not a default-on change for everyone.
-->
