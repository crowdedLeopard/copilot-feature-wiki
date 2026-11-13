---
title: "Copilot Studio: share autonomous agents with end users (run-only)"
slug: "copilot-studio-share-autonomous-agents-run-only"
roadmapId: 567894
desk: "agents"
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
videos: []
related: ["copilot-studio-block-maker-provided-credentials","copilot-studio-safe-sharing-credential-oversharing","copilot-studio-cost-management-m365-admin-center","copilot-studio-require-human-approval-for-tool-calls","copilot-credits"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-07-20T22:37:15"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Power Platform admin center > Managed Environment > **Sharing** limits: who can share agents, with whom, viewer caps.
- Power Platform admin center > **Policies** > **Data policies**: block the Microsoft Copilot Studio connector to prevent event triggers entirely in an environment.
- Microsoft 365 admin center > **Copilot** > **Cost Management**: resource-based spending policies for the hosting environment or agent.
- Copilot Studio > agent > **Share** > **Can use**; **Agent management** page for each user's instance.
- Power Platform admin center > environment > **Settings** > **Features** > credential controls.

## Open questions

- How per-user billing appears in the Microsoft 365 admin center consumption view (user or agent attribution).
- Whether admins will get a tenant-level list of shared autonomous agent instances, or only makers see their recipients.
- Behaviour when the maker's account is disabled: do instances keep running on users' credentials?

<!-- rationale
risk: High. Autonomous execution on many users' data with no per-run review, billing that scales with recipients, and no admin-side instance inventory yet.
cost: Variable. Copilot Credits per run through the hosting environment; needs a spending policy.
impact: Medium. Affects makers and the users they share with; not a default-on change for everyone.
-->
