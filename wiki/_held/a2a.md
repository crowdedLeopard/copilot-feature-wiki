---
kind: "concept"
title: "A2A (Agent2Agent protocol): how agents hand tasks to other agents, and where you can stop them"
slug: "a2a"
summary: "A2A is an open protocol for sending tasks between agents. Administrators meet it in Work IQ, Copilot Studio and Microsoft 365 connected agents, and use consent, spending policies and the agent registry to govern it."
created: "2026-11-24"
updated: "2026-11-24"
version: 2
tags: ["a2a","work-iq","copilot-studio","agent-365","declarative-agents","copilot-credits","spending-policies","agent-registry","mcp"]
covers: []
sources:
  - title: "Connect an agent available over the Agent2Agent (A2A) protocol"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-agent-to-agent"
    kind: "learn"
  - title: "Work IQ Agent-to-Agent (A2A) overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/overview"
    kind: "learn"
  - title: "Work IQ API permissions reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Manage connected agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents"
    kind: "learn"
  - title: "Connect to other agents from a declarative agent"
    url: "https://learn.microsoft.com/plugins/declarative-agent-connected-agent"
    kind: "learn"
  - title: "Agent Registration API overview (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/agent-registration/overview"
    kind: "learn"
  - title: "Create agentRegistration"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/agent-registration/agentregistration-create"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Grant tenant-wide admin consent to an application"
    url: "https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent"
    kind: "learn"
  - title: "az ad app permission"
    url: "https://learn.microsoft.com/cli/azure/ad/app/permission"
    kind: "learn"
  - title: "Understand agent details in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-details"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Data policies for custom connectors"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-custom-connector-parity"
    kind: "learn"
related: ["work-iq","agent-registry","mcp","spending-policies","copilot-credits","declarative-agents","m365-copilot-use-agent-365-agents-within-m365-copilot-chat-and-declarative-agents","work-iq-a2a-and-mcp-long-running-tasks"]
controls:
  - governs: "Whether Work IQ, and so its A2A endpoint, is enabled in the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    note: "Global Administrator, one-time. The request body sets appId. Learn's steps run in Graph Explorer, not an admin centre screen."
  - governs: "Which apps may call Work IQ agents on a user's behalf (admin consent for WorkIQAgent.Ask)"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Enterprise apps > All applications > application > Security > Permissions > Grant admin consent"
      docs: "https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent"
    api:
      kind: "azure-cli"
      call: "az ad app permission admin-consent --id <app-id>"
      docs: "https://learn.microsoft.com/cli/azure/ad/app/permission"
    note: "At least Cloud Application Administrator in the portal; the CLI page says to sign in as a global administrator."
  - governs: "Monthly policy limit and per-user limit for Copilot Credits spent on Work IQ API"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Spending limits"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta. The request body sets periodLimit and perUserLimit; the If-Match header is required."
  - governs: "Whether a Copilot package is blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-details"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta; the API needs a Microsoft Agent 365 licence. Blocking does not necessarily revoke connected-service permissions or credentials."
  - governs: "Which agents Researcher and Sales can invoke as connected agents"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Researcher > Connected Agents > + Connect agents"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents"
    api: null
    note: "Sales works the same way. Connections set by the agent developer cannot be removed."
  - governs: "Registration of an external agent and its agent card for Microsoft 365 Copilot"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /beta/copilot/agentRegistrations"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/agent-registration/agentregistration-create"
    note: "Beta; delegated or application permission AgentRegistration.ReadWrite.All. The request body carries the agent card in agentCard."
  - governs: "Whether a Copilot Studio agent delegates to an external A2A agent, and how it authenticates"
    scope: "maker"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Agents > Add agent > A2A agent"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-agent-agent-to-agent"
    api: null
    note: "For agents using the standard harness. Maker-side. Authentication choices are None, API key and OAuth 2.0; a connection is then selected or created."
confidence: "medium"
dependents: 8
changes:
  - date: "2026-11-24"
    note: "New concept page covering A2A in Work IQ, Copilot Studio and Microsoft 365 connected agents."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 88 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: block control reworded to Copilot packages, blocking caveat narrowed, data-policy questions replaced with what Learn documents, and minor wording fixes."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 103 statements contradicted, 1 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 101
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "9c97b86989f3b964cb709577fdc91918"
---

## What it is

The Agent2Agent (A2A) protocol is an open standard for communication and collaboration between agents. It lets one agent send a task to another agent, with structured metadata, and receive a response in a predictable format, so the second agent is delegated to rather than called as a plain API.

Microsoft documents A2A in four places. In each, the first question is which side of the connection is yours.

| Where | Direction | What Learn documents |
| --- | --- | --- |
| Work IQ | Your app or agent calls Work IQ | Work IQ hosts Agent Cards and accepts A2A messages under Microsoft Entra ID delegated authentication |
| Copilot Studio | Your agent calls an external A2A agent | **Add agent** > **A2A agent**, an endpoint URL and a choice of authentication |
| Microsoft 365 connected agents | A primary agent calls a declarative or A2A agent | Admin-added and developer-configured connections |
| Foundry (preview) | A Foundry agent calls Work IQ | Foundry forwards the query to Work IQ as a peer agent |

### Work IQ as an A2A agent
Work IQ supports A2A versions 1.0 and 0.3, chosen by the `A2A-Version` request header; if the header is omitted it uses 0.3. It supports SendMessage and SendStreamingMessage for conversations, and GetTask, CancelTask and SubscribeToTask for managing tasks. Work IQ itself is explained in [Work IQ](/concepts/work-iq/).

### Copilot Studio and connected agents
In Copilot Studio, A2A connections use the custom connector infrastructure. A typical A2A message payload includes a `contextId`, message IDs, locale information and the full chat history, not just the latest user utterance.

In Microsoft 365, primary agents can connect to declarative agents and to agents available over A2A. An external A2A agent must be registered in the Microsoft Agent 365 agent registry with an agent card. An agent can connect to up to 10 other agents. See [Agent registry](/concepts/agent-registry/) and [Declarative agents](/concepts/declarative-agents/).

## Why it matters

A2A is a route between agents, so what it exposes depends on the side you are on. Inbound, another party's app or agent reaches Microsoft 365 data through Work IQ: the tenant must enable Work IQ and an administrator must consent to a permission, and the `WorkIQAgent.Ask` permission includes read and write access scoped to the signed-in user. Outbound, your agent sends conversation content to an agent that may sit outside your tenant.

That gives administrators three decisions: whether an agent may call in, which external agents may be connected, and who pays for Work IQ calls. Microsoft has not documented a default for every one of these, so confirm each in your tenant rather than assuming it is closed.

## Cost and licensing

The protocol itself has no price on the pages read for this page; cost arises in the service that hosts the agent. For Work IQ, Microsoft states that you pay for use of the Work IQ API through a usage-based model that uses Copilot Credits. Work IQ setup lists a usage-based billing plan in Copilot Studio, with an Azure subscription and resource group assigned, as a prerequisite. Rates and meters are on [Copilot Credits](/concepts/copilot-credits/); spending limits are on [Spending policies](/concepts/spending-policies/).

The Copilot Studio page for adding an A2A agent names no licence or meter. The Package Management API used to block an agent requires a Microsoft Agent 365 licence.

## Risks and limits

- **Full chat history leaves with the task.** Copilot Studio sends the whole conversation to an A2A agent. A maker who connects an external agent shares more than the latest question.
- **Authentication can be None.** Copilot Studio offers None, API key and OAuth 2.0. Microsoft says to use proper authentication for production, so an unauthenticated endpoint left from a test is open to whoever has its URL.
- **Responsibility sits with you.** Microsoft states that when you connect to agents outside Copilot Studio you are responsible for their use, including data flows and permissions.
- **External connected agents can receive context.** The primary agent decides what context to include in the prompt it sends to an external connected agent.
- **Work IQ consent is broad.** `WorkIQAgent.Ask` allows read and write access to Microsoft 365 resources reachable by Work IQ agents, scoped to the signed-in user. Application-only authentication is not supported, so calls always act as a user.
- **Foundry routes beyond its own boundary.** Request data can be processed outside the Azure compliance boundary when a Foundry agent calls Work IQ.
- **Blocking is not revocation.** Blocking an agent does not necessarily revoke connected-service permissions or credentials.
- **Spend limits stop access.** When a user hits a policy limit, they lose access to the covered agents and services until credits reset on the first of the month.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ, and so its A2A endpoint, is enabled in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator, one-time. The request body sets appId. Learn's steps run in Graph Explorer, not an admin centre screen.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which apps may call Work IQ agents on a user's behalf (admin consent for WorkIQAgent.Ask)</strong><br><small>App</small><br><small class="controls__note">At least Cloud Application Administrator in the portal; the CLI page says to sign in as a global administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Enterprise apps › All applications › application › Security › Permissions › Grant admin consent <a href="https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az ad app permission admin-consent --id &lt;app-id&gt;</code> <a href="https://learn.microsoft.com/cli/azure/ad/app/permission" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly policy limit and per-user limit for Copilot Credits spent on Work IQ API</strong><br><small>Group</small><br><small class="controls__note">Beta. The request body sets periodLimit and perUserLimit; the If-Match header is required.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Copilot package is blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Beta; the API needs a Microsoft Agent 365 licence. Blocking does not necessarily revoke connected-service permissions or credentials.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-details" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which agents Researcher and Sales can invoke as connected agents</strong><br><small>Agent</small><br><small class="controls__note">Sales works the same way. Connections set by the agent developer cannot be removed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Researcher › Connected Agents › + Connect agents <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Registration of an external agent and its agent card for Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Beta; delegated or application permission AgentRegistration.ReadWrite.All. The request body carries the agent card in agentCard.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/agentRegistrations</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/agent-registration/agentregistration-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Copilot Studio agent delegates to an external A2A agent, and how it authenticates</strong><br><small>Maker</small><br><small class="controls__note">For agents using the standard harness. Maker-side. Authentication choices are None, API key and OAuth 2.0; a connection is then selected or created.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Agents › Add agent › A2A agent <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-agent-agent-to-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Enabling Work IQ needs a Global Administrator, once per organisation. Consent in Microsoft Entra needs at least Cloud Application Administrator. Blocking, installing and connecting agents happen in the Microsoft 365 admin center agent registry; the Package Management API needs a Microsoft Agent 365 licence and is in beta.

The controls act at different points. Consent and enabling decide whether a caller can reach Work IQ; spending policies decide how much it can spend; the registry decides which agents users can install; the Copilot Studio row is set by makers. Blocking an agent does not necessarily revoke connected-service permissions or credentials. Admins can remove only the connected agents they added; developer-configured connections cannot be removed.

## What to check

- Confirm whether Work IQ is enabled in your tenant, and who holds Global Administrator for the one-time setup.
- Review which applications have admin consent for `WorkIQAgent.Ask`, `WorkIQ.Read` or `WorkIQ.Act`.
- Check that a spending policy covers Work IQ API, and review its monthly and per-user limits.
- Inspect the agent registry and block unapproved Copilot packages.
- Open the Connected Agents tab on Researcher and Sales, and remove connections you did not intend.
- Ask makers which A2A endpoints they connected in Copilot Studio and whether any use authentication None.
- Review agent registrations created through the Agent Registration API.

## Open questions

- Power Platform data policies apply to Copilot Studio agents in the environments included in the policy scope. A2A connections use custom connector infrastructure; custom connectors can be classified as Blocked, Business or Non-Business.
- Where does Microsoft publish the Copilot Credit rate for a Work IQ A2A call?
- Tenant-level data policies can classify custom connector host URL patterns as Blocked; the * pattern applies to all custom connectors. This is a custom-connector control, not a separate A2A switch.
- Does Block in the agent registry apply to an agent registered only through an A2A agent card?

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risks and limits: Authentication / behaviour: An unauthenticated endpoint left from a test is open to whoever has its URL. | Found: Searched: Copilot Studio A2A unauthenticated endpoint None public URL virtual network access. Read add-agent-agent-to-agent and returned network-isolation excerpts; no text says URL possession alone ensures access, and A2A connections may use private networks. | Fix: Remove 'so an unauthenticated endpoint left from a test is open to whoever has its URL'. The source supports the authentication recommendation, not universal network reachability.
- [contradicted, blocker] controls[3].ui; Governance controls; What to check: block packages / admin-path: Agents > All agents > Registry > agent > Block is the UI control for blocking a Copilot package. | Found: These actions apply to the selected agent. If the agent is included in a plugin, don't assume the action also applies to the whole plugin package, its skills, shared MCP servers, or connections. | Fix: Keep the package API and replace controls[3].ui.path with 'Agents > Tools > Plugins > plugin > Block', using https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers as docs and a source. Replace the checklist sentence with 'Inspect Agents > Tools > Plugins and block unapproved Copilot packages.' In Governance controls, replace 'Blocking, installing and connecting agents happen in the Microsoft 365 admin center agent registry' with 'Package blocking happens under Agents > Tools > Plugins; installing and connecting agents happen in the Microsoft 365 admin center agent registry.' | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Copilot Studio and connected agents / behaviour: An agent can connect to up to 10 other agents. | Found: An agent can connect to up to 10 other agents. | Fix: Replace the sentence with: 'Manage connected agents states that an agent can connect to up to 10 other agents; Understand agent details describes the limit as excluding agents added by the maker.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-details for the second statement. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents
- [supported, minor] Why it matters; Governance controls / applicability: An administrator must enable Work IQ in the tenant before applications can use its permissions. | Found: An organization administrator must enable Work IQ in your organization before these permissions can be used by applications. | Fix: Replace 'the tenant must enable Work IQ' with 'the permissions reference requires an administrator to enable Work IQ; the MCP overview also says the service principal is created automatically on first use'. Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview for the latter qualification. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions
- [supported, minor] controls[4].note; What to check / behaviour: Sales works the same way as Researcher for connecting agents. | Found: Select Researcher or Sales, and then select the Connected Agents tab. | Fix: Replace 'Sales works the same way' with 'The Agent 365 guide gives the same connection steps for Sales; the Sales-specific guide says only declarative agents can be connected to Sales'. Cite https://learn.microsoft.com/microsoft-sales-copilot/manage-connected-agents. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents
- [supported, minor] controls[4].note; Governance controls / behaviour: Administrators cannot remove developer-configured connected agents. | Found: You can't remove connected agents configured by the agent developer. | Fix: Replace the absolute statement with: 'Manage connected agents says developer-configured connections cannot be removed; Understand agent details says removal may be possible depending on how the maker connected them.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-details for the differing qualification. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents
- [supported, minor] sources; controls[2].governs / applicability: The Work IQ spending-policy applicability statement rests partly on Microsoft pages omitted from sources. | Found: Services managed by usage-based billing in the Microsoft admin center now include: Work IQ API for custom apps and agents | Fix: Add https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits and https://learn.microsoft.com/plugins/cost-considerations to sources for the applicability of spending policies and their group and per-user limits to Work IQ API. | Source: https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits#services-managed-by-usage-based-billing
-->
