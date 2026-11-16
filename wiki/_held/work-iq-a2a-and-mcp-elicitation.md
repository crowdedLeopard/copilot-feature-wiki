---
title: "Work IQ: A2A and MCP tasks can ask for missing information or authorisation"
slug: "work-iq-a2a-and-mcp-elicitation"
roadmapId: 570852
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let Work IQ A2A and MCP tasks pause to ask for missing input or authorisation, then resume. Developers and agent owners are affected; Learn does not yet describe the feature or an admin switch for it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Work IQ API usage is metered in Copilot Credits and is independent of Microsoft 365 Copilot licensing. Whether elicitation carries its own rate is not yet published."
audiences: ["m365-admin","security","finops","service-owner"]
tags: ["work-iq","mcp","a2a","agents","authorisation","human-in-the-loop","usage-based-billing","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap: Work IQ: A2A and MCP elicitation"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570852"
    kind: "roadmap"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ Agent-to-Agent (A2A) overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/overview"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "June 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-june"
    kind: "learn"
  - title: "Collect structured input with elicitation forms in Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-elicitation-forms"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
videos: []
related: ["work-iq-human-in-the-loop","work-iq-agent-policy-governance","copilot-credits","work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","agent-identity"]
controls:
  - governs: "Whether Work IQ MCP tool requests are governed by tenant policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "MCP only as documented; the page does not say it covers A2A or elicitation. The Policy tab appears \"when it's available\". Changes can take up to 24 hours."
  - governs: "Who can consume Copilot Credits for Work IQ API, and the limits and billing method"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api: null
    note: "General control for Work IQ API usage; not documented as specific to elicitation. Policies limit spend and access but do not reserve credits."
  - governs: "Monitoring Work IQ API credit use by user, group and service"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Agents and services"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    api: null
    note: "Shows active users, credits used and session count per supported service; it does not break out elicitation."
  - governs: "Whether tasks may request missing information or authorisation, and from which agents"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026); the roadmap item describes the capability only."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap-only description of Work IQ elicitation, with the existing MCP policy and spending controls and no documented elicitation control."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 51
  unconfirmed: 4
  contradicted: 3
  attempts: 1
---

## What's changing

Microsoft plans to let tasks run over the Work IQ A2A (Agent-to-Agent) and MCP (Model Context Protocol) endpoints stop to request missing information or authorisation, then resume. The roadmap item's only description is: "Enable A2A and MCP tasks to request missing information or authorization and then resume."

Microsoft Learn does not describe this feature for Work IQ at the time of writing (November 2026), so what follows about its behaviour is the roadmap's wording. For background, Learn describes elicitation as an MCP mechanism by which a server mid-tool-call "can use elicitation to pause execution and present a native form", after which tool execution resumes with the data. That page is written for Copilot Cowork, not Work IQ, and does not confirm how Work IQ will behave.

Work IQ today offers A2A and a remote MCP server as protocols for agents. Learn documents A2A task methods (GetTask, CancelTask and SubscribeToTask) and states that A2A and MCP both use Microsoft Entra ID authentication. Work IQ MCP rejects application-only authentication in the Foundry samples, so any authorisation request would sit on a delegated, signed-in-user flow.

The roadmap record shows status In development, a preview date of October CY2026, a target date of November CY2026, release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) only, and the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

This item lets an agent task ask for a missing detail or permission instead of stopping. For administrators the question is who is being asked and what the answer unlocks. An authorisation request raised during a task is a consent decision made mid-run, outside the normal admin-consent steps for Work IQ, and the people answering it are end users rather than administrators.

If nobody acts, the feature arrives under whatever Work IQ controls already exist: the tenant-level Work IQ MCP policy and spending policies. Neither is documented as governing elicitation, so the practical advice is to confirm those two controls are set deliberately before the feature reaches the people building agents on Work IQ.

## Risk assessment

**Data exposure**

- A resumed task still reads Microsoft 365 data as the signed-in user. Learn states the Work IQ MCP policy "can't grant access beyond what the signed-in user is already allowed to access", so an answer given mid-task should not widen what the user can already see.
- Microsoft Learn does not say what an elicitation form may ask for or where the answers go. Learn's Copilot Cowork guidance says never to request passwords, API keys or tokens through elicitation; it is not confirmed for Work IQ.

**Security & identity**

- The roadmap text names authorisation as something a task can request. Work IQ uses delegated Microsoft Entra authentication, so any such request would run as a user, not as an application. Not yet documented: whether the prompt is a new consent step or reuses existing consent.
- A prompt raised by a third-party or custom agent is a route for tricking a user into approving access. No Microsoft page describes a way to restrict which agents may raise such prompts.

**Autonomy & actions**

- Work IQ MCP blocks create, update, delete and action requests by default ("By default, mutation operations aren't allowed for safety"). A task that pauses for authorisation and then resumes may be attempting one of those; the tenant policy decides whether it can complete.

**Change & support**

- Pause-and-resume tasks are a new state for agent builders and support teams. Not yet documented: how long a paused task stays resumable, and what the user sees if they never answer.
- The Copilot Cowork page notes that "Not all MCP hosts support elicitation yet", so behaviour may differ between clients.

## Cost and licensing

Work IQ API usage is metered, not licensed per user. The Work IQ overview states that access "is independent of Microsoft 365 Copilot licensing and available through usage-based billing" and that usage "consumes Copilot Credits shared with other eligible services". A Microsoft partner announcement adds that there is "no separate Work IQ API subscription, SKU, or per-user license".

The cost-planning page notes that spending policies "control access and spending limits; they don't reserve or allocate credits for a workload, user, or group". Set a spending policy that includes Work IQ API (see the controls table) if you want a ceiling.

A paused and resumed task may use more calls than one that completes at once, but Microsoft has not published a rate or any charge specific to elicitation. Not yet published: whether pausing a task is metered.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform; it lists no US Government cloud. That is a record fact, not a statement that it will be unavailable elsewhere.

The affected surfaces are Work IQ A2A and MCP callers, which Learn describes as agents, IDEs, CLIs and service-hosted agents. Authentication is delegated Microsoft Entra ID, so the people involved are signed-in users. Rollout mechanics, prerequisites and any admin role to configure the feature are not yet published.

## Governance guidance

### Before rollout

- Inventory the custom agents, Copilot Studio agents and Foundry connections that call Work IQ over A2A or MCP, so you know whose tasks could start asking users questions.
- Check the Work IQ MCP tenant policy in the Microsoft 365 admin center (Agents > Tools > Work IQ MCP > Policy) and record whether mutation scenarios are enabled.
- Confirm which spending policy includes Work IQ API, and its per-user and policy limits, so a task that resumes repeatedly cannot run uncapped.

### At rollout

- Tell agent owners and the service desk that tasks may pause for input or authorisation, and that users should not enter credentials into such prompts.
- Test one agent over A2A and one over MCP in a non-production tenant or with a pilot group, and record what the prompt shows and where the response goes.

### After rollout

- Review the Agents and services view under Copilot > Cost Management for Work IQ API credit use after the first weeks.
- Review the Work IQ MCP policy after the feature reaches your tenant; the page says changes can take up to 24 hours to apply.
- Watch the Microsoft 365 Roadmap item and Learn for documentation that describes elicitation and any control for it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tool requests are governed by tenant policy</strong><br><small>Tenant</small><br><small class="controls__note">MCP only as documented; the page does not say it covers A2A or elicitation. The Policy tab appears &quot;when it's available&quot;. Changes can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can consume Copilot Credits for Work IQ API, and the limits and billing method</strong><br><small>Group</small><br><small class="controls__note">General control for Work IQ API usage; not documented as specific to elicitation. Policies limit spend and access but do not reserve credits.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monitoring Work IQ API credit use by user, group and service</strong><br><small>Tenant</small><br><small class="controls__note">Shows active users, credits used and session count per supported service; it does not break out elicitation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether tasks may request missing information or authorisation, and from which agents</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026); the roadmap item describes the capability only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting documented at the time of writing (November 2026) turns elicitation on or off, or limits which agents may raise authorisation prompts, so the last row is empty on both surfaces.

The Work IQ MCP policy page says the policy layer "can apply across Work IQ experiences" but documents it only for MCP tool requests; it does not say it covers A2A tasks or elicitation. Policy is tenant-wide: per-user, per-app and per-agent policy templates "aren't part of the initial policy control surface". Spending policies limit who can consume credits and how much; they do not decide what a task may ask.

The policy page does not give an API for Work IQ MCP policy, and the spending-policy rows give only the admin centre path.

## Open questions

- Will Work IQ elicitation be form-based, URL-based or both, and what may a task ask a user to provide? Watch the Work IQ A2A and MCP pages on Microsoft Learn.
- Does an authorisation request create a new consent grant, and can admins restrict it through admin consent or the Work IQ MCP policy?
- Is the feature on by default for existing A2A and MCP callers, or opt-in per agent? The roadmap record does not say.
- Does a paused task consume Copilot Credits while it waits or on resume, and does the per-user spending limit apply?
- The roadmap item gives a preview date of October CY2026 and a target date of November CY2026 and still reads In development: which phase is reaching the tenant, and when? Watch Message center and the roadmap item.

<!-- rationale
risk: Medium. A task that can stop and ask for authorisation adds a new prompt path into agent runs, and Microsoft Learn documents no control specific to it; the existing Work IQ MCP tenant policy and spending policies cover only the surrounding access and spend.
cost: Variable. Work IQ API usage is billed in Copilot Credits, and a task that pauses and resumes may involve further calls; no charge specific to elicitation is published.
impact: Low. The roadmap item is aimed at A2A and MCP callers, so the people who notice are developers, agent owners and the users those agents prompt; admins see nothing unless they govern Work IQ access.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] controls[1].api; Governance controls / absence: Microsoft has not documented an API or automation surface for Copilot Credit spending policies. | Found: Create, read, update, and delete spending policies that cap Copilot Credits consumption for an audience. ... Configure per-service settings that govern or exclude individual AI services within a policy. | Fix: Replace the null API side with the documented Microsoft Graph beta spending-policy surface at this URL. A read entry can use GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies; explain that creation, group scoping and service settings are also documented. Mark beta and not supported for production use. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
- [contradicted, blocker] controls[2].ui; Governance guidance: After rollout; Governance controls / admin-path: The Work IQ API monitoring path is Microsoft 365 admin center > Copilot > Cost Management > Agents and services. | Found: go to Copilot > Cost Management. ... Select the Consumption tab. ... In the Agents and services view, review usage for supported services. For example, Cowork and Work IQ API. | Fix: Insert the missing navigational tab: Copilot > Cost Management > Consumption > Agents and services. Apply this to controls[2].ui, the rendered table and After rollout guidance. Consumption is a dashboard tab, not a selection of the user, group or service to which a setting applies. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
- [contradicted, blocker] controls[2].api; Governance controls / absence: Microsoft has not documented an API or automation surface for monitoring Copilot Credit consumption by user, group and service. | Found: Report consumption for one completed UTC day by user, security group, and governed service, with ranking and paging. ... Every usage report request requires a time selector, supplied as query parameters. | Fix: Replace the null API side with the documented Graph beta usage-report surface. For service reporting use GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate=<YYYY-MM-DD>&endDate=<YYYY-MM-DD>. Require a completed UTC day, endDate exactly one day after startDate; mark beta, unsupported in production. Cite this overview and its service-usage-record reference. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
- [unsupported, blocker] Why it matters; Risk assessment: Security & identity; Open questions / behaviour: An authorisation request raised during a Work IQ task is a consent decision made mid-run. | Found: Searched: Work IQ elicitation enable disable agents authorization prompts admin consent end users; "Work IQ" "elicitation". Read roadmap, A2A/MCP overviews, Foundry authentication and admin management; no source equates elicitation authorisation with a consent grant. | Fix: Replace the assertion with 'Microsoft has not documented whether an authorisation request is a new consent step, confirmation of an action, or reuse of existing consent.' The current assertion also conflicts with Security & identity and Open questions, which correctly leave the consent mechanism unresolved.
- [unsupported, blocker] Why it matters / behaviour: Work IQ elicitation authorisation occurs outside the normal admin-consent steps. | Found: Searched: Work IQ elicitation enable disable agents authorization prompts admin consent end users. Opened Foundry Work IQ guidance and Work IQ A2A/MCP overviews; existing admin consent is documented, but its relationship to elicitation is not. | Fix: Remove 'outside the normal admin-consent steps for Work IQ'. State instead that the relationship between elicitation authorisation and existing admin consent is not yet documented; do not imply that the feature bypasses that consent.
- [unsupported, blocker] Why it matters / role: The people answering Work IQ elicitation authorisation requests are end users rather than administrators. | Found: Searched: Work IQ elicitation enable disable agents authorization prompts admin consent end users. Read roadmap, A2A/MCP overviews and Foundry guidance; delegated execution identifies the caller's context, not who must answer elicitation. | Fix: Replace 'the people answering it are end users rather than administrators' with 'Microsoft has not stated who receives or may approve these requests.' Delegated authentication alone does not establish the approver role.
- [supported, minor] Scope / behaviour: Work IQ callers include agents, IDEs, CLIs and service-hosted agents. | Found: A2A | Structured agent-to-agent communication | Multi-agent systems, delegation ... Remote MCP | Tool-based context access | IDEs, CLIs, AI coding assistants ... REST | Conversational, request/response API | Service-hosted agents, orchestrators | Fix: Cite the Work IQ API overview in sources. Preserve its protocol distinction: A2A is for agent delegation, MCP for tool clients such as IDEs and CLIs, and the table places service-hosted agents under REST; do not imply REST is an affected endpoint named by this roadmap item. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview
- [unsupported, blocker] Why it matters / default: If nobody acts, elicitation arrives under the Work IQ controls that already exist. | Found: Searched: Work IQ A2A MCP elicitation authorization default enable disable admin consent paused task billing prerequisites; "Work IQ" "elicitation" "default" "billing". Read roadmap and A2A/MCP overviews; no automatic enablement or inheritance rule for elicitation. | Fix: Replace the automatic-arrival assertion with 'If the capability is enabled or adopted, review the existing Work IQ access and spending controls; Microsoft has not yet stated its default or whether existing callers gain it automatically.' Keep defaultState unknown and avoid claiming confirmed elicitation coverage by the surrounding controls.
-->
