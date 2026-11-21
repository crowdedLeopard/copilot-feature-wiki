---
title: "Work IQ: A2A and MCP tasks can ask for missing information or authorisation"
slug: "work-iq-a2a-and-mcp-elicitation"
roadmapId: 570852
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let Work IQ A2A and MCP tasks pause to ask for missing input or authorisation, then resume. Developers and agent owners are affected; Learn does not yet describe the feature or a switch for it."
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
  notes: "Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing, consuming Copilot Credits. The Foundry connection quickstart separately lists a Microsoft 365 Copilot licence for each user who calls Work IQ through the agent. Whether elicitation carries its own rate is not yet published."
audiences: ["m365-admin","security","finops","service-owner"]
tags: ["work-iq","mcp","a2a","agents","authorisation","human-in-the-loop","usage-based-billing","copilot-credits","spending-policies"]
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
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Work IQ Agent-to-Agent (A2A) overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/overview"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "List costManagementServiceUsageRecords"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    kind: "learn"
  - title: "Connect a Microsoft Foundry project to Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/quickstart/foundry"
    kind: "learn"
  - title: "Collect structured input with elicitation forms in Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-elicitation-forms"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
videos: []
related: ["work-iq-human-in-the-loop","work-iq-agent-policy-governance"]
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
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Not documented as specific to elicitation. Graph is beta, unsupported in production. This call updates periodLimit, perUserLimit and billingMethods; it does not change the group audience or service access."
  - governs: "Monitoring Work IQ API credit use by user, group and service"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Consumption > Agents and services"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    note: "Shows active users, credits used and session count per service; elicitation is not broken out. Graph is beta; endDate must be startDate plus one day."
  - governs: "Whether tasks may request missing information or authorisation, and from which agents"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026); the roadmap item describes the capability only."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-19"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap-only description of Work IQ elicitation, with the existing MCP policy and spending controls and no documented elicitation control."
  - date: "2026-11-16"
    note: "Corrected after verification: added the documented Graph beta spending-policy and usage-report calls, fixed the Consumption tab path, and removed unsupported claims about consent and who answers requests."
  - date: "2026-11-16"
    note: "Corrected the Graph spending-policy call so PATCH and DELETE use the policy ID path, and added the Copilot Studio page's statement on write operations next to the MCP policy default."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 80 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 85 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 87 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: spending-policy row now gives the PATCH update call, usage-report row links its own reference, and the paused-task, licence and per-user-limit wording was narrowed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 102 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-21"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 102
  confirmed: 100
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "b7ce2e680c5780720e719367558dd4e0"
---

## What's changing

Microsoft plans to let tasks run over the Work IQ A2A (Agent-to-Agent) and MCP (Model Context Protocol) endpoints stop to request missing information or authorisation, then resume. The roadmap item's only description is: "Enable A2A and MCP tasks to request missing information or authorization and then resume."

Microsoft Learn does not describe this feature for Work IQ at the time of writing (November 2026), so what follows about its behaviour is the roadmap's wording. For background, Learn describes elicitation as an MCP mechanism by which a server mid-tool-call "can use elicitation to pause execution and present a native form", after which tool execution resumes with the data. That page is written for Copilot Cowork, not Work IQ, and does not confirm how Work IQ will behave.

Work IQ today offers A2A, a remote MCP server and a REST API. Learn documents A2A task methods (GetTask, CancelTask and SubscribeToTask) and states that Work IQ A2A and the Work IQ MCP server both use Microsoft Entra ID authentication, delegated in the A2A case. Separately, Learn's Foundry preview guidance for the Work IQ MCP endpoint says an `oauth_consent_request` "means the request is waiting for user authorization". That is existing Foundry behaviour, not a description of this roadmap item.

The roadmap record shows status In development, a preview date of October CY2026, a target date of November CY2026, release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) only, and the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

This item lets an agent task ask for a missing detail or permission instead of stopping. For administrators the open questions are who is asked, what an answer unlocks and whether any tenant setting limits it. Microsoft has not stated who receives or may approve these requests, whether an authorisation request is a new consent step, a confirmation of an action or a reuse of existing consent, or how it relates to existing administrator consent.

If the capability is enabled or adopted in your tenant, review the existing Work IQ access and spending controls first. Microsoft has not yet stated its default or whether existing A2A and MCP callers gain it automatically, and none of those controls is documented as covering elicitation.

## Risk assessment

**Data exposure**

- A resumed task still reads Microsoft 365 data as the signed-in user. Learn states Work IQ MCP policy "can't grant access beyond what the signed-in user is already allowed to access", so an answer given mid-task should not widen what the user can already see.
- Microsoft Learn does not say what a Work IQ elicitation request may ask for or where the answers go. The Copilot Cowork page says never to request passwords, API keys or tokens through elicitation; that guidance is not confirmed for Work IQ.

**Security & identity**

- The roadmap text names authorisation as something a task can request. Work IQ A2A uses delegated Microsoft Entra ID authentication, so a request would sit on a signed-in-user flow. Not yet documented: whether the prompt is a new consent step or reuses existing consent.
- A prompt raised by a third-party or custom agent is a route for tricking a user into approving access. No Microsoft page describes a way to restrict which agents may raise such prompts.

**Autonomy & actions**

- The Work IQ MCP policy page says "By default, mutation operations aren't allowed for safety", including create, update, delete and action requests such as sending email. The Copilot Studio page for Work IQ says "Write operations are on by default. Your organization's permissions and policies still apply." Check the actual agent and tenant policy rather than treating the two descriptions as one universal default. The MCP policy page says policy evaluates each MCP tool request; whether a resumed task is evaluated again is not documented.

**Change & support**

- Plan support for tasks that request information or authorisation and then resume. Not yet documented: how long a paused task stays resumable and what happens if the user never answers.
- The Copilot Cowork page notes "Not all MCP hosts support elicitation yet", so MCP clients may behave differently from one another.

## Cost and licensing

Work IQ API usage is metered, not licensed per user. The Work IQ overview states that access "is independent of Microsoft 365 Copilot licensing and available through usage-based billing", that "Work IQ cost is variable based on usage" and that usage "consumes Copilot Credits shared with other eligible services". For Microsoft 365 Copilot licensed users it adds that Work IQ is "subject to usage-based billing for custom and third-party agents", and that users without that licence "are billed based on usage". The Foundry connection quickstart separately lists a Microsoft 365 Copilot licence for each user who calls Work IQ through the agent.

Spending policies control access and credit spending: the Learn page states they "don't reserve or allocate Copilot Credits to users or groups". A policy with a limited monthly budget caps what its scope can spend, and users who hit the limit "lose access to agents and services for the rest of the month". The monitoring guidance qualifies per-user limits: if a running task exceeds the per-user limit, it can complete without interruption. Whether Work IQ API sits under your default policy or a specific one is something to check in the controls table.

A paused and resumed task may involve more calls than one that completes at once, but Microsoft has not published a rate or any charge specific to elicitation. Not yet published: whether waiting for input is metered.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform; it lists no US Government cloud. That is a record fact, not a statement that it will be unavailable elsewhere.

The affected surfaces are the Work IQ A2A endpoint and the Work IQ MCP server. Learn's Work IQ API overview describes A2A for agent delegation and MCP for tool clients such as IDEs, CLIs and AI coding assistants. Rollout mechanics, prerequisites and any administrator role needed to configure elicitation are not yet published.

## Governance guidance

### Before rollout

- Inventory the custom agents, Copilot Studio agents and Foundry connections that call Work IQ over A2A or MCP, so you know whose tasks could start asking users questions.
- Check the Work IQ MCP tenant policy in the Microsoft 365 admin center and record whether it is on and whether mutation scenarios are enabled.
- Confirm which spending policy covers Work IQ API, and its monthly limits, so a task that resumes repeatedly cannot spend without a ceiling.

### At rollout

- Tell agent owners and the service desk that tasks may pause for input or authorisation, and that users should not enter credentials into such prompts.
- Test one agent over A2A and one over MCP with a pilot group, and record what the prompt shows and where the response goes.

### After rollout

- Review Work IQ API credit use in the Agents and services view of the Consumption tab, or through the Graph usage report, after the first weeks.
- Re-check the Work IQ MCP policy once the feature reaches your tenant; the page says a change can take up to 24 hours to apply.
- Watch the Microsoft 365 Roadmap item and Learn for documentation that describes elicitation and any control for it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tool requests are governed by tenant policy</strong><br><small>Tenant</small><br><small class="controls__note">MCP only as documented; the page does not say it covers A2A or elicitation. The Policy tab appears &quot;when it's available&quot;. Changes can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can consume Copilot Credits for Work IQ API, and the limits and billing method</strong><br><small>Group</small><br><small class="controls__note">Not documented as specific to elicitation. Graph is beta, unsupported in production. This call updates periodLimit, perUserLimit and billingMethods; it does not change the group audience or service access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monitoring Work IQ API credit use by user, group and service</strong><br><small>Tenant</small><br><small class="controls__note">Shows active users, credits used and session count per service; elicitation is not broken out. Graph is beta; endDate must be startDate plus one day.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Consumption › Agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate=YYYY-MM-DD&amp;endDate=YYYY-MM-DD</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether tasks may request missing information or authorisation, and from which agents</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026); the roadmap item describes the capability only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting documented at the time of writing (November 2026) turns elicitation on or off, or limits which agents may raise authorisation prompts, so the last row is empty on both surfaces.

The Work IQ MCP policy page says the policy layer "can apply across Work IQ experiences" but documents it only for MCP tool requests; it does not say it covers A2A tasks or elicitation. Policy control is tenant-level: per-user, per-app and per-agent policy templates "aren't part of the initial policy control surface". That page names no endpoint for changing policy, so the first row has no automation entry.

Spending policies limit who can consume credits and how much; they do not decide what a task may ask. The Graph spending-policy and usage-report APIs are in beta, and the Learn overview states their use in production applications is not supported. The overview also says creating a spending policy requires the Billing Administrator or Global Administrator directory role at runtime, and that a usage report request must select exactly one completed UTC day.

## Open questions

- Will Work IQ elicitation be form-based, URL-based or both, and what may a task ask a user to provide? Watch the Work IQ A2A and MCP pages on Microsoft Learn.
- Does an authorisation request create a new consent grant, and can administrators restrict it through admin consent or the Work IQ MCP policy?
- Is the feature on by default for existing A2A and MCP callers, or opt-in per agent? The roadmap record does not say.
- Does a paused task consume Copilot Credits while it waits or on resume, and does the per-user spending limit apply?
- The roadmap item gives a preview date of October CY2026 and a target date of November CY2026 and still reads In development: which phase is reaching tenants, and when? Watch Message center and the roadmap item.

<!-- rationale
risk: Medium. A task that can stop and ask for authorisation adds a new prompt path into agent runs, and Microsoft Learn documents no control specific to it; the existing Work IQ MCP tenant policy is documented for MCP tool requests, without specifying coverage of A2A tasks or elicitation.
cost: Variable. Work IQ API usage consumes Copilot Credits under usage-based billing; no rate or charge specific to elicitation is published.
impact: Low. The roadmap item is aimed at A2A and MCP callers, so those who notice are developers, agent owners and the users their agents prompt; administrators see nothing unless they govern Work IQ access.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls / command: The Cost Management overview says a usage report request must select exactly one completed UTC day. | Found: Every usage report request requires a time selector: a completed UTC day, a calendar month, or a timestamp window, depending on the report. | Fix: Replace 'a usage report request must select exactly one completed UTC day' with 'the serviceUsageRecords request shown above must select exactly one completed UTC day'. Its reference at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list supports that narrower restriction; the overview also documents calendar-month and timestamp-window reports. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
- [contradicted, blocker] Why it matters: second paragraph / applicability: None of the existing Work IQ access and spending controls is documented as covering elicitation. | Found: A Rego-based policy engine enforces detailed, context-aware rules on every request. ... Work IQ API usage consumes Copilot Credits shared with other eligible services. | Fix: Replace 'none of those controls is documented as covering elicitation' with 'existing controls govern MCP tool requests and Work IQ API spending, but Microsoft has not documented an elicitation-specific switch or how pausing and resuming interacts with those controls'. The Work IQ overview and MCP policy article state request-wide governance, and the spending and monitoring pages expressly cover Work IQ API; absence of elicitation-specific documentation does not exclude these general controls. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The Foundry connection quickstart separately lists a Microsoft 365 Copilot licence for each user who calls Work IQ through the agent. | Found: A Microsoft 365 Copilot license for each user who calls Work IQ through your agent. | Fix: After the quickstart statement, add: 'The full Foundry guidance instead lists usage-based billing with Copilot Credits for Work IQ API through A2A, REST or MCP and says this path does not use connector licensing.' Cite https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#prerequisites, which distinguishes Work IQ API billing from connector-backed tools that can require a Copilot licence. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/quickstart/foundry
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The MCP tenant-policy UI is Microsoft 365 admin center > Agents > Tools > Work IQ MCP > Policy. | Found: In the left navigation, select Agents > Tools. ... select Work IQ MCP. ... select the Policy tab when it's available. ... turn policy on or off for the tenant as needed. | Fix: The path reaches the correct tab but stops before the control. Retain 'Agents > Tools > Work IQ MCP > Policy' and add to the row note: 'On the Policy tab, review the current policy state, then turn policy on or off for the tenant.' Apply the same note in the rendered table; Microsoft gives no more specific toggle label. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The spending-policy UI route is Microsoft 365 admin center > Copilot > Cost Management > Configuration > + Add spending policy. | Found: In the Microsoft 365 admin center, go to Copilot > Cost Management. Select the Configuration tab and then select + Add spending policy. | Fix: The route correctly opens the policy workflow rather than reaching its individual controls. Retain the route and add to the row note: 'The UI opens the add spending policy workflow: define the policy scope, select agents and services, set limits and alerts, and select a billing method.' Apply the same note in the rendered table. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [supported, minor] controls[2].note; Governance controls table / behaviour: The monitoring row shows active users per service. | Found: This view shows active users, credits used, cost, and session count for each supported service. | Fix: Replace the first sentence of controls[2].note and its rendered counterpart with: 'The admin-center view shows active users, credits used and session count per service; the Graph call returns consumedQuantity by service. Elicitation is not broken out.' The Graph reference at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list returns serviceId, consumedQuantity and unit, not active-user or session-count fields. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
-->
