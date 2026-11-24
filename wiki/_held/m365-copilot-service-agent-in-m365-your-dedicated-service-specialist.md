---
title: "Microsoft 365 Copilot: Service Agent in Microsoft 365 as a dedicated service specialist"
slug: "m365-copilot-service-agent-in-m365-your-dedicated-service-specialist"
roadmapId: 577829
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans a Service Agent in Microsoft 365 that handles customer inquiries, with a semi or fully autonomous mode. Preview is targeted for December CY2026. Public Preview bills in Copilot Credits; autonomy settings are not yet documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2027"
previewDate: "December CY2026"
risk: "high"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Public Preview bills in Copilot Credits: 100 Copilot Credits per agent per month for the agent account and resource access, plus consumptively billed agent activity. The accountable user needs consumption billing enabled. Additional requirements may apply for General Availability."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["m365-copilot","agent-365","agents","autonomous-agents","work-iq","mcp","monitoring","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap 577829"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577829"
    kind: "roadmap"
  - title: "Microsoft 365 Resources for Agents"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Overview of Service Agent"
    url: "https://learn.microsoft.com/dynamics365/customer-service/use/service-agent-overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["work-iq","agent-identity","mcp"]
controls:
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > select an agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General control for agents: Microsoft has not confirmed it applies to this agent. The Graph API is beta and needs a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T22:45:29"
changes:
  - date: "2026-11-18"
    note: "New briefing: the roadmap describes the agent; Microsoft Learn has no page for it yet, so controls and licensing are not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 9 of 55 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: added Public Preview billing (Copilot Credits), prerequisites and agent identity from Microsoft 365 Resources for Agents; fixed autonomy-choice wording; dropped the 'separate product' claim."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 66
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "cee268971b81a71db41f07e3bbc51219"
---

## What's changing

The roadmap item describes a Service Agent in Microsoft 365 that a manager can "hire" and onboard with the company's knowledge sources, communication guidelines and escalation rules. The roadmap says the manager can choose a semi-autonomous or fully autonomous mode, and that the agent handles customer inquiries 24/7.

Per the roadmap, the agent connects to the Microsoft 365 ecosystem, documents, CRM records and knowledge connectors, and is built from the Agent 365 platform using Work IQ. It says a CRM is not a prerequisite, that customers can connect a CRM to create tickets or perform other operations, and that the agent can connect to MCP tools and use custom skills. Managers can monitor its activity, drill into its reasoning and see performance metrics.

The roadmap describes the planned customer-service behaviour. Microsoft Learn also documents Public Preview resources, billing and prerequisites for Service Agent in Microsoft 365 ([Microsoft 365 Resources for Agents](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents)). Learn also documents a Dynamics 365 Customer Service "Service Agent" that helps customer service representatives resolve cases; Microsoft has not said whether the two are the same product.

The roadmap status is In development, with a preview targeted for December CY2026 and general availability targeted for December CY2027. These are Microsoft's targets, not commitments. The record lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

If this ships as described, it is an agent that talks to customers and can act on records in a CRM or other connected tools, so it is a spend, data and reputation question for service owners as well as an IT one. The roadmap's autonomy choice (semi or full) is the main decision. The roadmap assigns that choice to the manager; Microsoft has not documented how an administrator can limit it.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. Use the preview window to decide who should own such an agent, which knowledge sources and tools it may use, and what must be escalated to a person.

## Risk assessment

**Data exposure**

- The roadmap says the agent reads real-time data, documents, CRM records and knowledge connectors through Work IQ. Microsoft has not described how access is scoped for this agent. See [Work IQ](/concepts/work-iq/) for the general picture.
- The roadmap says customers can connect CRMs as tools. What data leaves the tenant for those systems is not yet documented.

**Security & identity**

- The roadmap says the agent has "enterprise-grade identity". For Public Preview, Microsoft 365 Resources for Agents lists an agent's own account for Service Agent and requires Microsoft Entra Agent ID, provisioned automatically. Feature-specific permissions for connected knowledge sources and tools remain undocumented. See [Agent identity](/concepts/agent-identity/) for how agent identities work in general.

**Autonomy & actions**

- The roadmap says a manager can choose a fully autonomous mode and that the agent can create tickets or perform other operations in a connected CRM. Whether an administrator can cap that autonomy is not yet documented.
- The roadmap says the agent can connect to various MCP tools and to custom skills. See [MCP](/concepts/mcp/) for where such tools can be stopped.

**Change & support**

- A customer-facing agent changes support load and expectations. The roadmap says managers can see activity, reasoning and performance metrics; where those views live is not yet documented.

## Cost and licensing

Public Preview uses Copilot Credits. The agent account, email address and persistent Microsoft 365 resource access cost 100 Copilot Credits per agent per month; agent activity is billed consumptively in addition. Consumption billing begins when the product becomes available. For Public Preview, Frontier enrollment is required; the tenant must have at least one Microsoft 365 Copilot or E7 license, and the accountable user responsible for Service Agent must have consumption billing enabled. Additional requirements may apply for General Availability (Microsoft 365 Resources for Agents). The roadmap says the agent is built from the Agent 365 platform; it does not say Agent 365 is a licence prerequisite.

For the platform, Microsoft Learn says Microsoft Agent 365 is licensed on a per-user basis, and that at least one user must hold a qualifying Agent 365 licence to enable Agent 365 (Overview of Microsoft Agent 365). Whether that applies to this agent is unconfirmed.

Indirect costs are admin and manager time to set up knowledge sources, guidelines and escalation rules, and review of the agent's activity. The published Public Preview billing scope includes tool usage as part of consumptively billed agent activity.

## Scope

The record lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists General Availability and Preview as release phases, with a preview target of December CY2026 and a general availability target of December CY2027.

For Public Preview, the tenant needs Frontier enrollment and the accountable user responsible for Service Agent needs consumption billing enabled (see Cost and licensing). Who can hire or manage the agent and which roles configure it are not yet published. The roadmap says a CRM is not a prerequisite.

## Governance guidance

### Before rollout

- Name the business owner who would manage a service agent, and the escalation rules they would give it.
- Inventory the knowledge sources and CRMs the agent might be given.
- Review how your tenant already uses the Microsoft 365 admin center agent controls in the controls table, so the same process can be applied if Microsoft confirms they cover this agent.
- Decide who will approve connecting any MCP tools once Microsoft documents how this agent uses them.

### At rollout

- Start any preview with the semi-autonomous mode the roadmap describes, if Microsoft makes the choice available to you.
- Check the agent appears in the Agents area of the Microsoft 365 admin center, and record who owns it.
- Test escalation to a person before exposing the agent to real customers.

### After rollout

- Review the activity, reasoning and performance views the roadmap describes once they are documented.
- Block the agent if it behaves unexpectedly, once Microsoft confirms the Block action covers it.
- Watch Message center and the roadmap entry for the licence and for updated dates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">General control for agents: Microsoft has not confirmed it applies to this agent. The Graph API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › select an agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft has not documented an autonomy or escalation setting specific to Service Agent in Microsoft 365. Public Preview requires Microsoft Entra Agent ID, Microsoft local containers (MXC), Microsoft 365 audit logs and Agent 365 cost management. The Block row is a general control for agents in the Microsoft 365 admin center, and Microsoft has not confirmed it applies to this agent.

The Learn page for the admin centre action does not say the action can be applied to this agent. The Graph block API is in beta and requires a Microsoft Agent 365 licence. Controls for the autonomy mode, escalation rules and CRM or MCP tool access are not yet documented.

## Open questions

- Is this the same product as the Dynamics 365 Customer Service "Service Agent" documented on Microsoft Learn, or a different customer-facing agent? Watch the Microsoft Learn Service Agent overview and the roadmap entry.
- Which additional licence requirements apply at General Availability, and does the agent need a Microsoft Agent 365 licence? Watch Message center and the Microsoft 365 Resources for Agents page.
- Can an administrator limit the autonomy mode, or does the manager choose it alone?
- Which permissions does the agent hold to reach Work IQ, CRMs and MCP tools?
- Which admin centre shows the agent's activity, reasoning and metrics, and which specific audit events and investigation experience in Microsoft Purview cover it?

<!-- rationale
risk: High. The roadmap says a manager can choose a fully autonomous mode and that the agent can connect to CRMs and MCP tools. Public Preview requires Microsoft Entra Agent ID and audit logs, but feature-specific autonomy and escalation settings remain undocumented.
cost: Variable. Public Preview uses Copilot Credits, including 100 Copilot Credits per agent per month for the agent account and persistent Microsoft 365 resource access, plus consumptively billed agent activity.
impact: Low. The roadmap describes a manager-run agent, so the people who notice are service managers and administrators, not most users. Microsoft has not said who gets it.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls prose; Governance guidance: Before rollout, After rollout / absence: The prose treats whether the general Block action covers Service Agent as an unpublished governance rule. | Found: These actions apply to the selected agent. ... Agent approval or blocking doesn't necessarily grant or revoke connected-service permissions or credentials. | Fix: Replace the two prose statements that Microsoft has not confirmed Block coverage with: 'The Block action applies to the selected agent in the Microsoft 365 admin center; blocking does not necessarily revoke connected-service permissions or credentials.' In the Before rollout checklist replace 'if Microsoft confirms they cover this agent' with 'for agents listed in the registry'; in After rollout replace 'once Microsoft confirms the Block action covers it' with 'if it is listed in the registry'. Do not claim that blocking necessarily stops every external runtime. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, blocker] Risk assessment: Data exposure / absence: Microsoft has not described how access is scoped for this agent. | Found: Supported agents are equipped with persistent access to their own mailbox, calendar, and OneDrive workspace for file storage. | Fix: Replace 'Microsoft has not described how access is scoped for this agent' with: 'For Public Preview, Microsoft documents persistent access to the agent's own mailbox, calendar and OneDrive workspace; the exact permissions for additional connected knowledge sources are not yet documented as of November 2026.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] Scope / absence: Which administrator roles can manage and configure this agent is not yet published. | Found: The AI Administrator and Global Administrator roles have tenant-wide visibility and governance authority | Fix: Replace 'Who can hire or manage the agent and which roles configure it are not yet published' with: 'AI Administrator and Global Administrator have tenant-wide governance authority for agents in the Microsoft 365 admin center; who can hire this planned autonomous capability and its feature-specific configuration roles are not yet published as of November 2026.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms
- [contradicted, blocker] Governance controls: final sentence / absence: Controls for CRM or MCP tool access are not yet documented. | Found: Control which tools (Plugins, Skills, Connectors, Microsoft MCP servers) Copilot and Microsoft platform agents can access tenant-wide | Fix: Replace the final sentence with: 'The administrator control for the roadmap's semi/full autonomy choice and its escalation-rule configuration are not yet documented as of November 2026. Agent 365 documents tenant-wide control of plugins, skills, connectors and Microsoft MCP servers accessible to Copilot and Microsoft-platform agents; connection-specific setup for this planned capability remains undocumented.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365. Do not infer that every third-party connection or tool uses the Agent 365 Tooling Gateway. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Open questions / absence: Microsoft has not established whether the Dynamics 365 assistant and the autonomous, CRM-optional roadmap capability are the same product. | Found: Searched: Service Agent Microsoft 365 same Dynamics; opened Service Agent overview, FAQ and Configure Service Agent. They identify the Dynamics assistant as a Microsoft 365 Copilot agent but do not tie its assisted scenarios to this CRM-optional autonomous roadmap capability. | Fix: Replace the final sentence of the third What's changing paragraph with: 'Learn also documents a Dynamics 365 Customer Service assistant that is a Microsoft 365 Copilot agent; the documentation does not establish how its assisted scenarios relate to the roadmap's CRM-optional autonomous capability.' Keep the existing Service Agent overview citation.
- [supported, minor] controls[0].note; Governance controls table / applicability: The row presents Block as a documented general agent control but says Microsoft has not confirmed it applies to this agent. | Found: These actions apply to the selected agent. | Fix: Replace the first two sentences of controls[0].note and the rendered table note with: 'Applies to the selected agent in the Microsoft 365 admin center; agent blocking does not necessarily revoke connected-service permissions or credentials.' Retain the beta and API license sentence. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
-->
