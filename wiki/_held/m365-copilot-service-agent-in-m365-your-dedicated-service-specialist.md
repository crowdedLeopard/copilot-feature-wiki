---
title: "Microsoft 365 Copilot: Service Agent in Microsoft 365 as a dedicated service specialist"
slug: "m365-copilot-service-agent-in-m365-your-dedicated-service-specialist"
roadmapId: 577829
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans a Service Agent in Microsoft 365 that handles customer inquiries, with a semi or fully autonomous mode. Preview is targeted for December CY2026. Microsoft has published no controls or licence for it yet."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2027"
previewDate: "December CY2026"
risk: "high"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap says the agent is built from the Agent 365 platform; Microsoft Learn does not say whether it needs a Microsoft Agent 365 licence or uses a meter."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["m365-copilot","agent-365","agents","autonomous-agents","work-iq","mcp","monitoring","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap 577829"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577829"
    kind: "roadmap"
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
related: ["work-iq","agent-identity","mcp","m365-copilot-agent-lifecycle-management-rules","m365-copilot-use-agent-365-agents-within-m365-copilot-chat-and-declarative-agents"]
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
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 45
  unconfirmed: 1
  contradicted: 9
  attempts: 1
  hash: "4a8d6392c4b697a9f68f3fe8ecb70fdd"
---

## What's changing

The roadmap item describes a Service Agent in Microsoft 365 that a manager can "hire" and onboard with the company's knowledge sources, communication guidelines and escalation rules. The roadmap says the manager can choose a semi-autonomous or fully autonomous mode, and that the agent handles customer inquiries 24/7.

Per the roadmap, the agent connects to the Microsoft 365 ecosystem, documents, CRM records and knowledge connectors, and is built from the Agent 365 platform using Work IQ. It says a CRM is not a prerequisite, that customers can connect a CRM to create tickets or perform other operations, and that the agent can connect to MCP tools and use custom skills. Managers can monitor its activity, drill into its reasoning and see performance metrics.

Microsoft Learn has no page for this feature yet, so what is said here about its behaviour is the roadmap's description. Learn does document a separate Dynamics 365 Customer Service "Service Agent" that helps customer service representatives resolve cases; Microsoft has not said whether the two are the same product.

The roadmap status is In development, with a preview targeted for December CY2026 and general availability targeted for December CY2027. These are Microsoft's targets, not commitments. The record lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

If this ships as described, it is an agent that talks to customers and can act on records in a CRM or other connected tools, so it is a spend, data and reputation question for service owners as well as an IT one. The roadmap's autonomy choice (semi or full) is the main decision, and Microsoft has not said who makes it or how an administrator can limit it.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. Use the preview window to decide who should own such an agent, which knowledge sources and tools it may use, and what must be escalated to a person.

## Risk assessment

**Data exposure**

- The roadmap says the agent reads real-time data, documents, CRM records and knowledge connectors through Work IQ. Microsoft has not described how access is scoped for this agent. See [Work IQ](/concepts/work-iq/) for the general picture.
- The roadmap says customers can connect CRMs as tools. What data leaves the tenant for those systems is not yet documented.

**Security & identity**

- The roadmap says the agent has "enterprise-grade identity". Microsoft has not said which account it uses or which permissions it holds. See [Agent identity](/concepts/agent-identity/) for how agent identities work in general.

**Autonomy & actions**

- The roadmap says a manager can choose a fully autonomous mode and that the agent can create tickets or perform other operations in a connected CRM. Whether an administrator can cap that autonomy is not yet documented.
- The roadmap says the agent can connect to various MCP tools and to custom skills. See [MCP](/concepts/mcp/) for where such tools can be stopped.

**Change & support**

- A customer-facing agent changes support load and expectations. The roadmap says managers can see activity, reasoning and performance metrics; where those views live is not yet documented.

## Cost and licensing

The licence for this agent is not yet published, and no meter is documented for it at the time of writing (November 2026). The roadmap says it is built from the Agent 365 platform; it does not say Agent 365 is a licence prerequisite.

For the platform, Microsoft Learn says Microsoft Agent 365 is licensed on a per-user basis, and that at least one user must hold a qualifying Agent 365 licence to enable Agent 365 (Overview of Microsoft Agent 365). Whether that applies to this agent is unconfirmed.

Indirect costs are admin and manager time to set up knowledge sources, guidelines and escalation rules, and review of the agent's activity. Any cost of connecting CRMs or MCP tools is not yet published.

## Scope

The record lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists General Availability and Preview as release phases, with a preview target of December CY2026 and a general availability target of December CY2027.

Who can hire or manage the agent, which roles configure it, and which users need licences are not yet published. The roadmap says a CRM is not a prerequisite.

## Governance guidance

### Before rollout

- Name the business owner who would manage a service agent, and the escalation rules they would give it.
- Inventory the knowledge sources and CRMs the agent might be given, and check who can read them today.
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

Microsoft has not documented a setting or command specific to Service Agent in Microsoft 365. The Block row is a general control for agents in the Microsoft 365 admin center, and Microsoft has not confirmed it applies to this agent.

The Learn page for the admin centre action does not say the action can be applied to this agent. The Graph block API is in beta and requires a Microsoft Agent 365 licence. Controls for the autonomy mode, escalation rules and CRM or MCP tool access are not yet documented.

## Open questions

- Is this the same product as the Dynamics 365 Customer Service "Service Agent" documented on Microsoft Learn, or a separate customer-facing agent? Watch the Microsoft Learn Service Agent overview and the roadmap entry.
- What licence or meter applies, and does it need a Microsoft Agent 365 licence? Watch Message center and the Agent 365 service description.
- Can an administrator limit the autonomy mode, or does the manager choose it alone?
- Which account and permissions does the agent use to reach Work IQ, CRMs and MCP tools?
- Which admin centre shows the agent's activity, reasoning and metrics, and are they audited in Microsoft Purview?

<!-- rationale
risk: High. The roadmap says a manager can choose a fully autonomous mode and that the agent can connect to CRMs and MCP tools, but no Microsoft page yet describes controls specific to this agent.
cost: Low. The only cost the sources show is admin and manager time; the licence and any meter for this agent are not yet published.
impact: Low. The roadmap describes a manager-run agent, so the people who notice are service managers and administrators, not most users. Microsoft has not said who gets it.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing, third paragraph; front matter: changes / absence: Microsoft Learn has no page describing this feature beyond its roadmap description. | Found: | Feature | Autopilot | Sales Development Agent and Service Agent | Copilot Studio | | Fix: Replace the blanket documentation gap with: 'The roadmap describes the planned customer-service behaviour. Microsoft Learn also documents Public Preview resources, billing and prerequisites for Service Agent in Microsoft 365 Resources for Agents.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents and remove the no-Learn-page assertion from the change note. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [unsupported, major] What's changing, third paragraph / behaviour: The Dynamics 365 Service Agent is a separate product from the roadmap's Service Agent. | Found: Searched: 'Service Agent Microsoft 365 licensing controls autonomy CRM MCP' and 'Service Agent Microsoft 365 semi autonomous escalation'; opened Service Agent overview and Microsoft 365 Resources for Agents. Neither establishes separate product identity. | Fix: Remove 'separate' from 'a separate Dynamics 365 Customer Service "Service Agent"'. Retain the uncertainty about its relationship to the roadmap item.
- [contradicted, blocker] Why it matters, first paragraph / record: Microsoft has not said who makes the semi-autonomous or fully autonomous choice. | Found: Manager can choose the semi or full autonomous mode. | Fix: Replace 'Microsoft has not said who makes it or how an administrator can limit it' with 'The roadmap assigns that choice to the manager; Microsoft has not documented how an administrator can limit it.'
- [contradicted, blocker] Risk assessment: Security & identity; Open questions: account / absence: Microsoft has not said which account the agent uses. | Found: Microsoft 365 Resources for Agents equips supported agents with their own identity (agent account), email address, and secured Microsoft 365 resources | Fix: Replace the account-identity gap with: 'For Public Preview, Microsoft 365 Resources for Agents lists an agent's own account for Service Agent and requires Microsoft Entra Agent ID, provisioned automatically. Feature-specific permissions for connected knowledge sources and tools remain undocumented.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents. Narrow the account open question to permissions for those sources and tools. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] front matter: licensing.model and notes; summary; Cost and licensing; Scope; rationale: cost / licensing: Licensing and user prerequisites for this agent are not yet published, so the licensing model is unknown. | Found: Sales Development Agent and Service Agent: The person responsible for the agent (that is, the accountable user to whom the agent is assigned) is required to have consumption billing enabled. | Fix: Set licensing.model to 'consumption'. Replace the unpublished-licensing assertions with: 'For Public Preview, Frontier enrollment is required; the tenant must have at least one Microsoft 365 Copilot or E7 license, and the accountable user responsible for Service Agent must have consumption billing enabled. Additional requirements may apply for General Availability.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents and make the summary, Scope and licensing notes agree. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing, first paragraph; rationale: cost / cost: No meter is documented for this agent in November 2026. | Found: The agent account, email address, and persistent access to Microsoft 365 resources (for example, Exchange and OneDrive workspaces) have a recurring charge of 100 Copilot Credits per agent per month. | Fix: Replace the no-meter assertions with: 'Public Preview uses Copilot Credits. The agent account, email address and persistent Microsoft 365 resource access cost 100 Copilot Credits per agent per month; agent activity is billed consumptively in addition. Consumption billing begins when the product becomes available.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] Cost and licensing, final sentence / cost: Any cost of connecting CRMs or MCP tools is not yet published. | Found: All agent activity is billed consumptively. This includes: ... Any model, context, tools, or runtime usage. | Fix: Replace the sentence with: 'The published Public Preview billing scope includes tool usage as part of consumptively billed agent activity.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents; do not imply this publishes individual CRM or MCP operation rates. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The low cost rating is justified because the only known cost is administrator and manager time. | Found: Briefing: 'The only cost the sources show is admin and manager time'. Learn: 'All charges are billed consumptively via Copilot Credits'. | Fix: Set cost to 'variable'. Replace its rationale with: 'Variable. Public Preview uses Copilot Credits, including 100 Copilot Credits per agent per month for the agent account and persistent Microsoft 365 resource access, plus consumptively billed agent activity.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] summary; rationale: risk; Governance controls; Open questions: auditing / absence: Microsoft has published no controls for this agent. | Found: In addition, the following controls are required for all products above: ... Identity platform: Microsoft Entra Agent ID (provisioned automatically). ... Immutable audit logs and cost management: Microsoft 365 audit logs and Agent 365 cost management. | Fix: Replace the blanket no-controls assertion with: 'Public Preview requires Microsoft Entra Agent ID, Microsoft local containers (MXC), Microsoft 365 audit logs and Agent 365 cost management. Feature-specific autonomy and escalation settings remain undocumented.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents. Narrow the auditing open question to the specific events and investigation experience rather than whether any auditing exists. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout, knowledge-source inventory bullet / consistency: Every checklist instruction to inspect a control has a corresponding controls-table row. | Found: Checklist: 'check who can read them today'. The controls table contains only 'Whether an agent is blocked for the whole organisation'. | Fix: Remove 'and check who can read them today' from the knowledge-source inventory bullet; it refers to permissions controls that have no table row.
-->
