---
title: "Dynamics 365 Contact Center: Service Operations Agent for conversational admin setup"
slug: "dynamics-365-contact-center-administrator-experiences-use-service-operations-agent-to-acce"
roadmapId: 577808
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Launched: Service Operations Agent lets Contact Center admins set up channels, queues and routing by chat. It needs a pay-as-you-go plan and can change users and roles, so admins should decide who runs it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "consumption"
  notes: "The Learn page names a Power Platform pay-as-you-go plan, charged to an Azure subscription when the agent runs, and lists no licence among its prerequisites. A rate specific to this agent is not yet published."
audiences: ["service-owner","power-platform-admin","finops","security"]
tags: ["contact-center","dynamics-365","agents","admin-controls","unified-routing","pay-as-you-go","dataverse","mcp","human-in-the-loop","security-roles"]
sources:
  - title: "Microsoft 365 Roadmap 577808"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577808"
    kind: "roadmap"
  - title: "Use Service Operations Agent"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/use-service-operations-agent"
    kind: "learn"
  - title: "Responsible AI FAQ for Service Operations Agent"
    url: "https://learn.microsoft.com/dynamics365/contact-center/implement/service-operations-agent-rai-faq"
    kind: "learn"
  - title: "Contact center agents in Dynamics 365 Contact Center"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/overview-contact-center-agents"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "Set up pay-as-you-go"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up"
    kind: "learn"
  - title: "pac licensing"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/licensing"
    kind: "learn"
videos: []
related: ["dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","mcp","security-roles","dynamics-365-customer-service-manage-intraday-operations-with-ai-agent"]
controls:
  - governs: "Whether the environment is on a pay-as-you-go plan that the agent's usage is billed to"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Pay-as-you-go plans > New billing plan > Azure subscription"
      docs: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up"
    api:
      kind: "pac-cli"
      call: "pac licensing add-billing-policy-environment --billing-policy-id <billing policy ID> --environment-ids <JSON array of environment IDs>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/licensing"
    note: "The environment is chosen in the Select environments pane. The pac command is labelled Preview and links an existing billing policy to environments; it does not create the policy."
  - governs: "Tenant or environment switch to turn Service Operations Agent off"
    scope: "other"
    ui: null
    api: null
    note: "Not yet documented. The documented gate is the Omnichannel administrator role plus the connection and billing prerequisites."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-22T23:45:32"
changes:
  - date: "2026-11-19"
    note: "First briefing: documents the Launched Service Operations Agent, its roles, pay-as-you-go billing prerequisite and the absence of a documented off switch."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 71
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "23294873f759742e0a8c0dc0b9530471"
---

## What's changing

Service Operations Agent is an AI agent in Dynamics 365 Contact Center that helps administrators configure, validate and troubleshoot the contact center by typing requests in plain language in the Copilot Service admin center. Microsoft Learn describes it as supporting conversational setup of Dataverse tables such as queues and workstreams.

The Learn page lists what it can do: help set up channels and workstreams; sync phone numbers with Azure Communication Services and Teams; create queues with an out-of-the-box assignment method; add users to queues; create skills and operating hours; manage capacity profiles; create workstreams and route-to-queue rules; and answer questions about the environment, with diagnostics for supported channels. It is available in English only. Rules without conditions are supported, but adding or editing conditions, classification rulesets, assignment rules, overflow rules and percentage-based or multi-queue distribution are not supported through its tools and must be configured manually in the Copilot Service admin center.

To use it, an administrator selects **Launch** in the **Conversational Setup** tile and allows a Dataverse connection through the MCP (Model Context Protocol) server. The roadmap item states the feature is Launched, with a preview date of April CY2026 and a target date of July CY2026, in the General Availability and Preview release phases, for Worldwide (Standard Multi-Tenant) on the web. The roadmap text says it is "Enabled for admins/makers/marketers automatically".

## Why it matters

For a service owner this changes who can alter routing configuration and how quickly. A prompt such as "create a queue and set its assignment method" now changes live configuration without the administrator opening each setup page, and the same agent has documented tools to update users, assign or remove security roles and deactivate accounts. Decide deliberately who holds the Omnichannel administrator role and the System Administrator role, because those roles are the documented gate.

It also introduces a meter. The Learn page requires a pay-as-you-go plan that charges an Azure subscription when the agent runs, so finance owners should expect usage to appear on the Azure bill of the Power Platform account resource rather than in a licence count. If nobody acts, the roadmap says the agent is enabled automatically for admins, but the documented prerequisites mean it does nothing useful until an administrator launches it, allows the connection and has billing in place.

## Risk assessment

**Data exposure**

- The agent needs a Dataverse connection through the MCP server, which the Learn page says "enables the agent to access and manage your environment". It can also answer questions about the environment, so prompts and answers can include configuration data such as queue members' names and email addresses (the ListUsers tool returns them). Microsoft Learn does not state where that processing happens at the time of writing (November 2026).

**Security & identity**

- The Manage users tools can update user details, deactivate an account, and grant or remove a security role. Treat the Omnichannel administrator role (needed to use the agent) and the System Administrator role (needed to manage the connections) as high-trust assignments; see [Dataverse security roles](/concepts/security-roles/).
- The account the MCP connection runs under, and how changes it makes are recorded, are not described on the Learn pages. Confirm both before relying on audit evidence for changes made by chat.

**Autonomy & actions**

- Microsoft describes the experience as keeping a human in the loop, and its responsible AI FAQ says the agent can present draft actions for administrator review and confirmation and is not designed to operate as an autonomous system. The same FAQ says multistep setup and troubleshooting showed more variability in testing and may need clarification, so review each proposed change before accepting it.

**Change & support**

- Ambiguous prompts can produce incomplete or incorrect results, per the FAQ. Name the channel, workstream and queue in each prompt; the page notes the workstream and queue must be for the same channel.
- Supported routing is narrower than the admin pages: rules with conditions, classification and overflow rulesets are manual only, so a configuration built by chat may be incomplete until finished by hand.

## Cost and licensing

Besides the two roles, the Learn page lists a Power Platform pay-as-you-go plan and, for troubleshooting during setup, Application Insights configured and connected to Dynamics 365 Contact Center. It names no licence among its prerequisites ([Use Service Operations Agent](https://learn.microsoft.com/dynamics365/contact-center/administer/use-service-operations-agent)).

The meter is the pay-as-you-go plan: the page says it "requires the use of an Azure subscription that the system charges when the agent runs". Microsoft's consumption-billing page says pay-as-you-go is set up by linking an Azure subscription to a Power Platform environment, and that for pay-as-you-go you view usage and adjust budgets in Microsoft Cost Management in the Azure portal ([Manage consumption-based billing and capacity](https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go)). Pay-as-you-go is available for production and sandbox environments ([Set up pay-as-you-go](https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up)).

Indirect costs are Azure and Application Insights charges for the connected resources, and administrator time to review what the agent proposes. Not yet published: a charge or message count specific to Service Operations Agent. The Service Operations Agent page names the pay-as-you-go plan only, so whether prepaid capacity can also cover it is an open question.

## Scope

**Who and where.** The page applies to Dynamics 365 Contact Center only and is used by administrators; it needs the Omnichannel administrator role to access the agent and the System Administrator role to manage the Power Apps and MCP connections. The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform; it lists no US Government clouds, which is a record fact, not a statement that they are excluded.

**Rollout.** The roadmap record gives status Launched, with release phases General Availability and Preview. The Learn page does not mark the feature as preview. The agent appears in the **Contact Center Agents** page of the Copilot Service admin center alongside the Customer Assist Agent and Quality Assurance Agent.

**Prerequisites.** A pay-as-you-go plan linked to the environment, Application Insights connected for troubleshooting, and English-language prompts. The first launch asks you to connect to Dataverse through the MCP server and select **Allow once**.

## Governance guidance

### Before rollout

- Identify who holds the Omnichannel administrator and System Administrator roles in each Contact Center environment, and remove either from people who do not need to run setup by chat.
- Set up a pay-as-you-go billing plan for the environment and name the Azure owner who will watch the charges (see the billing row below).
- Connect Application Insights to Dynamics 365 Contact Center if you want the agent to troubleshoot issues during setup.
- Agree which setup tasks stay manual, using the Learn list of unsupported items: conditions in rules, classification, assignment and overflow rulesets.

### At rollout

- Launch **Conversational Setup** first in a non-production environment and check the connection card before allowing it with **Allow once**.
- Write prompts that name the channel, workstream and queue, as the Learn page advises, and review each draft action before confirming.
- Hold off on prompts that change users, roles or accounts until you have confirmed how those changes are recorded.

### After rollout

- Verify each change in the Copilot Service admin center, as Microsoft's responsible AI FAQ recommends for production.
- Review usage and budgets in Microsoft Cost Management in the Azure portal for the Power Platform account resource behind the billing plan.
- Recheck the role holders and the connection when the agent fails to retrieve information; the Learn page gives the steps to refresh the **D365 Contact Center MCP Connection** in Power Apps.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the environment is on a pay-as-you-go plan that the agent's usage is billed to</strong><br><small>Environment</small><br><small class="controls__note">The environment is chosen in the Select environments pane. The pac command is labelled Preview and links an existing billing policy to environments; it does not create the policy.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Pay-as-you-go plans › New billing plan › Azure subscription <a href="https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac licensing add-billing-policy-environment --billing-policy-id &lt;billing policy ID&gt; --environment-ids &lt;JSON array of environment IDs&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/licensing" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch to turn Service Operations Agent off</strong><br><small class="controls__note">Not yet documented. The documented gate is the Omnichannel administrator role plus the connection and billing prerequisites.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no switch that turns Service Operations Agent off, so access rests on who holds the Omnichannel administrator role and on whether billing is set up. Role assignment follows the usual Dataverse security role rules; see [Dataverse security roles](/concepts/security-roles/).

The MCP connection is managed in Power Apps under **Connections**; the Learn page describes deleting and recreating **D365 Contact Center MCP Connection** to refresh it, and requires the System Administrator role to manage it. The page does not present this as a way to block the agent, so do not rely on it as one. Removing the environment from the billing plan stops pay-as-you-go billing for the environment; the consumption-billing page does not say what that does to the agent.

The billing row is preview-labelled in the CLI reference. Environment admins, Power Platform admins, Global admins and Dynamics 365 admins can create billing plans, with the scope limits in the Learn role table.

## Open questions

- Is there a tenant or environment setting to turn Service Operations Agent off, other than withholding the Omnichannel administrator role? Watch the Use Service Operations Agent page.
- Which account do the agent's changes run under, and where are changes made by chat recorded (for example in Dataverse auditing)? Neither page says.
- What does a run of the agent cost? A rate or message count specific to it is not yet published, and it is unclear whether prepaid Copilot Credits capacity can cover it as well as pay-as-you-go.
- Where is the prompt and configuration context processed and stored, and does the English-only limit change for other languages?
- Does the Quality Assurance Agent or Customer Assist Agent share this meter or these prerequisites? Not stated on the Service Operations Agent page.

<!-- rationale
risk: Medium. The agent works through a Dataverse connection that lets it manage the environment, and its documented tools include assigning security roles and disabling users, with a human in the loop.
cost: Variable. The Learn page says a Power Platform pay-as-you-go plan charges an Azure subscription when the agent runs; no rate specific to this agent is published.
impact: Low. Only administrators with the Omnichannel administrator role use it, and it changes setup work rather than anything agents or customers see directly.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: prepaid capacity; Open questions / absence: Whether prepaid capacity can cover the agent as well as pay-as-you-go is undocumented. | Found: Dynamics 365 supports two billing models: prepaid capacity and pay-as-you-go. ... Both billing models can be used on the Dynamics 365 environment. Prepaid capacity is consumed first. | Fix: Replace the prepaid-capacity uncertainty in Cost and licensing with: 'The Dynamics 365 consumption-billing guidance linked from the agent prerequisites supports prepaid capacity and pay-as-you-go on the same environment, with prepaid capacity consumed first.' Cite https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go. Remove 'and it is unclear whether prepaid Copilot Credits capacity can cover it as well as pay-as-you-go' from Open questions; retain the narrower question about this agent's specific rate or message count. | Source: https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: indirect costs / cost: The Application Insights resources used for diagnostics can introduce Azure charges. | Found: Because workspace-based Application Insights resources store their data in a Log Analytics workspace, the billing for data ingestion and retention is done by the workspace where the Application Insights data is located. | Fix: Cite https://learn.microsoft.com/azure/azure-monitor/logs/cost-logs#application-insights-billing for the Application Insights charges statement. | Source: https://learn.microsoft.com/azure/azure-monitor/logs/cost-logs
- [supported, minor] controls[0].ui; Governance controls: billing row / admin-path: The billing route is Power Platform admin center > Licensing > Pay-as-you-go plans > New billing plan > Azure subscription. | Found: In the navigation pane, select Licensing. ... select Pay-as-you-go plans. ... Select New billing plan. ... Select Azure subscription. ... In the Select environments pane ... Select the environment you want to add to the billing plan. | Fix: Extend controls[0].ui.path and the rendered billing row to 'Licensing > Pay-as-you-go plans > New billing plan > Azure subscription > Select environments > environment'. The printed route is correct but stops early in the billing wizard; the cited page also requires filling the billing details, selecting the Power Platform product and region, and choosing the environment. | Source: https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up
- [supported, minor] Governance controls: Dataverse security role rules / applicability: Dataverse security role assignment is the applicable general mechanism for controlling these role assignments. | Found: To control who can access restricted or sensitive data and resources and what they can do with them, assign users to security roles. | Fix: Add https://learn.microsoft.com/power-platform/admin/security-roles-privileges to sources and cite it for the general Dataverse role-assignment statement; the internal concept link is not Microsoft evidence. | Source: https://learn.microsoft.com/power-platform/admin/security-roles-privileges
- [contradicted, minor] Governance guidance versus Governance controls / consistency: The governance checklist names role review, Application Insights configuration, Cost Management budgets and MCP connection review without corresponding controls-table rows. | Found: Checklist: 'Identify who holds' the roles; 'Connect Application Insights'; 'Review usage and budgets'; 'Recheck ... the connection'. Table rows: pay-as-you-go plan linkage and an undocumented agent off switch. | Fix: The Before rollout role-review and Application Insights steps, and the After rollout usage/budget and connection-review steps, have no corresponding rows in Governance controls.
-->
