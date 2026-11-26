---
title: "Work IQ: invoke custom agents and agents that call third-party tools"
slug: "work-iq-custom-agents-3p-calls"
roadmapId: 570853
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Roadmap item: Work IQ will be able to invoke custom agents and agents that call supported third-party tools. Microsoft Learn does not yet describe this item, and no administrator action is documented as required."
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
  notes: "The Work IQ API page says use is paid through a usage-based model that uses Copilot Credits. A rate for this feature, and whether third-party tools carry their own licensing, is not yet published."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["work-iq","a2a","mcp","agents","tools","agent-governance","copilot-credits","usage-based-billing","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 570853"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570853"
    kind: "roadmap"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Work IQ MCP tool reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Understand MCP server options in Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/tooling-servers-overview"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Use Microsoft 365 Admin agent"
    url: "https://learn.microsoft.com/copilot/manage/copilot-ai-admin-agent"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Work IQ GA June 16, 2026"
    url: "https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability"
    kind: "docs"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
videos: []
related: ["work-iq-agent-policy-governance","work-iq-a2a-and-mcp-long-running-tasks","work-iq-federated-connectors","work-iq-a2a-and-mcp-elicitation","copilot-credits"]
controls:
  - governs: "Whether Work IQ MCP tool requests are evaluated against tenant policy, including write operations"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "Policy tab shown when available; takes up to 24 hours to apply; tenant-level only. Not confirmed to cover custom-agent or third-party tool calls."
  - governs: "Availability of the whole Work IQ MCP server"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Documented on the Business Applications access-management page; it applies to the entire server, separate from Copilot audience settings."
  - governs: "Which tools on a registered MCP server agents can call"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > server > Tools > tool toggle > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Rolling out; supports only specific types of MCP server registered on Agent 365. Servers without tool discovery can only be blocked as a whole."
  - governs: "Availability of a registered agent in Microsoft Copilot and supported Microsoft 365 host products"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Registry > agent > Block"
      docs: "https://learn.microsoft.com/copilot/manage/copilot-ai-admin-agent"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocking Agent Builder and Copilot Studio agents affects Microsoft Copilot and other Microsoft 365 host products; blocking SharePoint or Foundry agents affects only Microsoft Copilot Chat. Not confirmed to stop Work IQ invoking the agent."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-21"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap item for Work IQ invoking custom agents and third-party-tool agents; Learn does not yet describe it, so controls shown are today's Work IQ MCP, Tools registry and agent controls."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: the cost section and cost rationale now cite Microsoft's Work IQ GA licensing notice for the variable and static Copilot Credits components."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 70 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Agent 365 licensing statement: the service description lists tenant-wide tool-access control as a core capability included with a Microsoft cloud subscription."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the agent block control: it now describes availability in Microsoft Copilot and host products, and notes that SharePoint and Foundry agents are affected only in Copilot Chat."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-26"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 72
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "ecd54a47fbbe1883a3a4d7685aa11fe1"
---

## What's changing

The roadmap item (ID 570853, "Work IQ: Custom agents + 3P calls") says Microsoft will enable Work IQ to invoke custom agents and agents that call supported third-party tools. Microsoft Learn does not describe this item at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description plus background from Work IQ pages that exist today.

The background: Work IQ MCP already has an `ask` tool that sends a question to Microsoft 365 Copilot or, when an `agentId` is given, to a specific agent, and a `list_agents` tool that lists the agents `ask` can use. Work IQ's A2A (Agent-to-Agent) protocol is documented for agent collaboration and delegation. Microsoft has not said whether this roadmap item extends those tools, which agents count as "custom", or which third-party tools are "supported".

The record shows status In development, a target of November CY2026 and a preview date of October CY2026, with both General Availability and Preview as release phases. Dates are Microsoft's targets, and the record does not say which part is preview and which is general availability. It lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

Work IQ is the layer agents use to reach a user's mail, files, meetings and chats. If it can also hand work to custom agents and to agents that call third-party tools, the question "what can this agent reach?" extends past Microsoft 365 data to whatever those agents and tools do. Service owners should expect to govern the agents and tool servers around Work IQ, not only Work IQ itself.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. Treat it as something to review before the November 2026 target: the controls below exist today, but Microsoft has not confirmed that they govern this capability.

## Risk assessment

**Data exposure**

- Work IQ requests run in the signed-in user's context, and the API overview says Microsoft 365 permissions, sensitivity labels and compliance policies are enforced automatically. Microsoft has not said what data Work IQ passes to an invoked custom agent or to a third-party tool, or where that tool processes it.

**Security & identity**

- Work IQ uses delegated Microsoft Entra authentication and does not support application-only authentication. Which identity a custom agent or third-party tool call runs under is not stated; confirm it before approving any tool server.
- Work IQ MCP policy cannot grant access beyond what the signed-in user can already reach.

**Autonomy & actions**

- The Work IQ MCP policy page says mutation operations, such as sending email, are not allowed by default, while the Copilot Studio page for Work IQ says write operations are on by default. Microsoft has not said which applies when an invoked agent or third-party tool writes to a system.

**Change & support**

- Tool-level blocking is rolling out and supports only specific types of MCP server registered on Agent 365, and a Work IQ MCP policy change can take up to 24 hours to apply. Support teams should expect inconsistent behaviour between tenants while both settle.

## Cost and licensing

The Work IQ API page says the API is licensed under your Microsoft Online Services agreement and that you pay for its use through a usage-based model that uses Copilot Credits. Work IQ API use is metered through Copilot Credits; Microsoft documents variable query-style consumption and a static component for actions and tools invoked through Work IQ. Microsoft has not mapped this roadmap extension to a specific charge or stated whether invoking another agent adds a separate charge. See /concepts/copilot-credits/ for the shared meter.

Agent 365 licensing applies to some of the controls: the Package Management API used to block agents requires a Microsoft Agent 365 licence, and the Agent 365 service description lists tenant-wide control of tools that Copilot and Microsoft platform agents can access as a core capability included with a Microsoft cloud subscription. Charges from third-party tool providers are not described by Microsoft for this feature. Indirect cost is admin time for reviewing agents and tool servers.

## Scope

The roadmap lists the products Work IQ and Microsoft Copilot (Microsoft 365), the cloud Worldwide (Standard Multi-Tenant) and the Web platform. Other clouds are not listed on the item; that is a record fact, not a statement that the feature is unavailable there.

The Work IQ MCP overview says the Work IQ service principal is created automatically in the tenant when Work IQ is first used. The policy page says an account with permission to manage tenant-level Work IQ or Copilot settings is needed; it does not name a role. Prerequisites and licences specific to this feature are not yet published.

## Governance guidance

### Before rollout

- List the agents in the Microsoft 365 admin center registry and decide which should be callable once Microsoft confirms how Work IQ selects agents (controls table, agent block row).
- Open Agents > Tools > Work IQ MCP and note whether the Policy tab is available and whether policy is on or off for the tenant.
- Review the third-party and custom MCP servers in the Tools registry, and check which are approved or blocked.
- Ask your Microsoft account team which identity and which data third-party tool calls use.

### At rollout

- Pilot with a small group and have a developer run `list_agents` to see which agents Work IQ MCP returns for those users.
- Leave mutation scenarios unenabled in Work IQ MCP policy unless a tested scenario needs them.
- Turn off individual tools on supported MCP servers that write, delete or process payments, once Microsoft confirms the Tools registry governs the tools this capability calls.

### After rollout

- Compare Copilot Credits consumption against your budget, because no rate is published for this feature.
- Re-test after any policy change, allowing up to 24 hours for Work IQ MCP policy to apply.
- Re-read the roadmap record and Message center for status changes and for the preview and general availability split.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tool requests are evaluated against tenant policy, including write operations</strong><br><small>Tenant</small><br><small class="controls__note">Policy tab shown when available; takes up to 24 hours to apply; tenant-level only. Not confirmed to cover custom-agent or third-party tool calls.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Availability of the whole Work IQ MCP server</strong><br><small>Tenant</small><br><small class="controls__note">Documented on the Business Applications access-management page; it applies to the entire server, separate from Copilot audience settings.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which tools on a registered MCP server agents can call</strong><br><small>Tenant</small><br><small class="controls__note">Rolling out; supports only specific types of MCP server registered on Agent 365. Servers without tool discovery can only be blocked as a whole.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › server › Tools › tool toggle › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Availability of a registered agent in Microsoft Copilot and supported Microsoft 365 host products</strong><br><small>Agent</small><br><small class="controls__note">Blocking Agent Builder and Copilot Studio agents affects Microsoft Copilot and other Microsoft 365 host products; blocking SharePoint or Foundry agents affects only Microsoft Copilot Chat. Not confirmed to stop Work IQ invoking the agent.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Registry › agent › Block <a href="https://learn.microsoft.com/copilot/manage/copilot-ai-admin-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

None of these controls is confirmed by Microsoft Learn to govern this roadmap item's custom-agent invocation or third-party tool calls; they are today's controls for Work IQ MCP, the Tools registry and agents.

Work IQ MCP policy is tenant-level only in the initial release: per-user, per-app and per-agent policy is not part of it. Tool-level control works only for supported MCP server types registered on Agent 365. Microsoft Learn documents no API for the Work IQ MCP policy, the server block or the tool toggles at the time of writing (November 2026). The agent block API is in beta and requires an Agent 365 licence.

## Open questions

- Which agents count as custom agents, and does this extend the `ask` and `list_agents` tools or the A2A endpoint? Watch the Work IQ pages on Microsoft Learn.
- Which third-party tools are supported, and do they have to be registered in the Agent 365 Tools registry so that server and tool blocking apply? Watch Message center.
- Which identity and which data do invoked agents and third-party tools use, and does Work IQ MCP policy cover writes they make?
- How is this metered in Copilot Credits, and is there a cap?
- Which part is preview and which general availability, given the October CY2026 preview date has passed and the status is still In development?

<!-- rationale
risk: Medium. Work IQ would hand work to custom agents and third-party tool calls, and Microsoft has not said what identity or data they use, though Work IQ MCP policy, tool blocking and agent blocking are documented. The default on arrival is not stated.
cost: Variable. The Work IQ API page says use is paid through Copilot Credits; Microsoft has not published the specific charging treatment for invoking custom or third-party-tool agents.
impact: Low. Work IQ's A2A, MCP and REST protocols are aimed at developers building agents, so users notice it only through agents built on it. The roadmap lists the Web platform only.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].governs and note; Governance controls table / applicability: The switch controls availability of the whole Work IQ MCP server, without a governed-pathway limitation. | Found: Blocking an MCP server (including WorkIQ MCP) blocks usage through governed Agent 365 and Microsoft 365 admin center (MAC) pathways. It doesn't automatically disable the underlying API or service endpoint outside that governed path | Fix: Change controls[1].governs and the rendered control label to 'Availability of Work IQ MCP through governed Agent 365 and Microsoft 365 admin center pathways'. Add to its note: 'Blocking does not automatically disable the underlying API or service endpoint outside those pathways; separate service or API policy is needed there.' Keep the existing path and docs link; cite the already-listed manage-plugins-skills-mcp-servers article for this qualification. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [contradicted, blocker] controls[2].governs; Governance controls table; Governance guidance: At rollout / applicability: The registry toggles determine which tools on a supported registered MCP server agents can call, without a gateway-experience limitation. | Found: The Agent 365 Tooling Gateway enforces the policy at runtime for supported tools and experiences that use the gateway. Don't assume the policy applies across all products or connected components. | Fix: Change controls[2].governs and its rendered label to 'Which tools on a supported registered MCP server agents can call through supported Agent 365 Tooling Gateway experiences'. Add to its note: 'Runtime enforcement applies to supported tools and experiences using the gateway, not all products or connected components.' Retain the existing rollout and discovery qualifications. In the At rollout checklist, qualify individual-tool disabling with 'for supported experiences using the Agent 365 Tooling Gateway'. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: Before rollout / admin-path: Work IQ MCP policy is reached through Microsoft 365 admin center > Agents > Tools > Work IQ MCP > Policy. | Found: select Agents > Tools ... select Work IQ MCP ... select the Policy tab when it's available. ... Review the current policy state, then turn policy on or off for the tenant as needed. | Fix: Keep the path and add to controls[0].note and its rendered note: 'On the Policy tab, turn policy on or off for the tenant.' The printed route reaches the right tab but omits the final action. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] controls[3].ui; Governance controls table; Governance guidance: Before rollout / admin-path: The cited Admin agent page gives Microsoft 365 admin center > Agents > Registry > agent > Block. | Found: Select to Agents > Registry. ... Locate Microsoft 365 Admin in the registry. ... Use the available agent actions to Block the agent | Fix: Use the general agent-blocking procedure instead: set controls[3].ui.path and the rendered route to 'Agents > All agents > agent > Block', and ui.docs to https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions. Add to the note: 'The Admin agent article gives Agents > Registry; the registry overview locates Registry under Agents > All agents.' Both articles are already cited. | Source: https://learn.microsoft.com/copilot/manage/copilot-ai-admin-agent
- [supported, minor] Cost and licensing / licensing: The Agent 365 service description lists tenant-wide control of tools accessible to Copilot and Microsoft platform agents as a core capability included with a Microsoft cloud subscription. | Found: Control which tools (Plugins, Skills, Connectors, Microsoft MCP servers) Copilot and Microsoft platform agents can access tenant-wide | Microsoft 365 admin center | Yes | Yes | Yes | Fix: Narrow that clause to the categories the service description now names: 'the Agent 365 service description lists tenant-wide control of Plugins, Skills, Connectors and Microsoft MCP servers that Copilot and Microsoft platform agents can access as a core capability included with a Microsoft cloud subscription.' | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
-->
