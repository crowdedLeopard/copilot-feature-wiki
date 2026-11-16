---
title: "Customer Insights - Data: MCP server grounds agents in unified customer profiles and insights"
slug: "dynamics-365-customer-insights-data-agents-and-copilot-increase-ai-accuracy-by-grounding-a"
roadmapId: 577814
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Insights - Data"]
summary: "A Customer Insights MCP server lets Copilot Studio agents and other MCP clients read unified customer profiles, segments, measures and predictions. Makers add it per agent; admins can block it in the registry."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Microsoft Learn says Customer Insights is licensed per tenant, with add-on capacity. No separate licence or meter for the MCP server is published at the time of writing (November 2026)."
audiences: ["m365-admin","power-platform-admin","security","maker"]
tags: ["mcp","mcp-server","copilot-studio","dynamics-365","customer-insights","agents","tools","knowledge-grounding","row-level-security","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 577814"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577814"
    kind: "roadmap"
  - title: "Use tools in the Customer Insights MCP Server"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-tools"
    kind: "learn"
  - title: "MCP Server tools reference for Customer Insights - Data"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-tools-reference"
    kind: "learn"
  - title: "Connect Customer Insights - Data through Agent 365 Tooling Gateway"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway"
    kind: "learn"
  - title: "Overview of the Tools page in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/agent-tools-overview"
    kind: "learn"
  - title: "Add tools and resources from a Model Context Protocol (MCP) server to your agent"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent"
    kind: "learn"
  - title: "Purchase a license for Dynamics 365 Customer Insights"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/data/paid-license"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","agent-365-control-plane-for-agents","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities","data-policies","agent-identity"]
controls:
  - governs: "Whether agents can use the Customer Insights MCP server at all (tenant block or unblock)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/agent-tools-overview"
    api: null
    note: "Registry actions are Block and Unblock. The Learn gateway page says the server may be absent from the catalogue if it is blocked or not registered."
  - governs: "Which of the server's tools an individual agent may call"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > select the MCP server > Allow all"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent"
    api: null
    note: "Maker-side only. Turn off Allow all, then toggle tools individually, then Save and Publish. Tools added to the server later stay off."
  - governs: "Gateway service principal and consent for the McpServers.D365CustomerInsights.All permission"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "API permissions > Add a permission > APIs my organization uses > Grant admin consent"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway"
    api:
      kind: "powershell"
      call: "New-MgServicePrincipal -AppId \"<ATG-app-id>\""
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway"
    note: "Tenant admin. The path is on the client app you register for manual setup. The Learn page also gives az ad sp create --id <ATG-app-id>."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:47"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item, written from the Customer Insights MCP server pages on Microsoft Learn."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 66
  unconfirmed: 0
  contradicted: 7
  attempts: 1
---

## What's changing

The Customer Insights MCP server (a Model Context Protocol server, the standard way for AI agents to call tools) exposes Dynamics 365 Customer Insights - Data capabilities as tools that agents and chat clients can call. With it, an agent can resolve a Dataverse contact or lead to a unified customer profile and read that profile's segments, calculated measures, predictions such as churn probability, and cluster membership, such as a household.

Makers add it in Copilot Studio: on the agent's **Tools** page they select **Add a tool**, choose the **MCP** filter and search for `Dynamics 365 CX Customer Insights`. Microsoft Learn also documents connecting other MCP clients, including Visual Studio Code, GitHub Copilot CLI, Cursor, ChatGPT and Claude Code, through Agent 365 Tooling Gateway. The tools that need Customer Insights - Data are read-only. One server also serves Customer Insights - Journeys, and its `create_journey` tool, which needs Journeys, writes data.

The roadmap item (ID 577814) has the status In development, with a preview target of June CY2026 and a general availability target of November CY2026. Those are Microsoft's targets, not commitments. Microsoft Learn already documents the server and its connection steps, so the roadmap status and the documentation do not line up. The roadmap lists Worldwide (Standard Multi-Tenant) only, and says the feature is enabled for admins, makers and marketers automatically.

## Why it matters

This puts a customer data platform behind any agent a maker chooses to build. Unified profiles combine Dataverse contacts and leads with external sources such as loyalty or contract systems, so an agent can now answer questions from data that Dataverse alone does not hold. Expect sellers and service staff to start asking for it, and expect makers to add it without an IT request unless you decide otherwise.

If nobody acts, the server is available wherever it is registered, and each maker decides whether to attach it. The decision for a service owner is whether customer profiles, lifetime-value scores and churn risk should be reachable by agents, and under which accounts. The controls below are what you have to make that decision.

## Risk assessment

**Data exposure**

- The profile tools read Dataverse virtual entities that reflect live unified customer data, including source records and which source supplied each value. An agent that holds `get_customer_details` output can repeat personal data in a chat.
- The Learn page warns that connections between Dynamics 365 and other services can let data leave the Dynamics 365 FedRAMP High boundary, and tells the tenant administrator to confirm the connection meets data security, compliance, residency and governance requirements before enabling it.

**Security & identity**

- Tools run in the calling user's context. Microsoft documents row-level security and per-tool privilege checks, and states that the server never escalates privileges implicitly. A user without privileges on the underlying tables sees tools missing from the agent.
- Connections go through Agent 365 Tooling Gateway with OAuth. The `/.default` scope needs admin consent granted in advance; the named `McpServers.D365CustomerInsights.All` permission can be consented to by each user if the tenant allows user consent.
- External MCP clients sign in with their own Microsoft Entra apps, so granting consent to one of them widens who can call the server.

**Autonomy & actions**

- The Customer Insights - Data tools only read. `create_journey` writes, is not idempotent and can create a duplicate journey if an agent retries; it needs Customer Insights - Journeys, so it matters only where Journeys is deployed.

**Change & support**

- Support calls will mostly be 403 Forbidden or missing-tool errors from consent or privileges. The Learn page lists a 404 for a server URL without `/mcp/environments/` and a 400 when a tenant ID is used in place of the environment ID.
- The server URL is specific to each environment, so each environment needs its own connector configuration.

## Cost and licensing

**Licence.** Microsoft Learn states that Customer Insights is licensed per tenant and that you can purchase more capacity. The feature's own page lists one prerequisite, that the user must have access to the Dataverse tables, and names no licence for the MCP server.

**Meter.** No meter or charge for the Customer Insights MCP server is published at the time of writing (November 2026), and the Customer Insights pages do not say how Copilot Studio bills tool calls to it. This is not a statement that it is free. Treat Copilot Studio billing for agents that call it as a question for Microsoft's [Copilot Studio billing page](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management) until Microsoft says otherwise.

**Indirect cost.** Admin time to review the registry entry, grant gateway consent and brief makers; Customer Insights - Data profiles must already exist for the tools to return anything.

## Scope

- **Users and licences:** any agent user, provided they have access to the Dataverse tables behind the tools. Customer Insights - Data is needed for the profile tools; Customer Insights - Journeys or Shared Consent is needed for the consent tools; Journeys alone is needed for the journey and email tools.
- **Roles:** the gateway page lists the System Administrator role to configure the MCP server, plus tenant admin or delegated admin-consent permissions for manual or external-client setup.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web.
- **Rollout:** the roadmap targets preview in June CY2026 and general availability in November CY2026, and says the feature is enabled for admins, makers and marketers automatically. Whether the server appears in a given tenant's catalogue depends on it being registered there.

## Governance guidance

### Before rollout

- Decide which environments hold Customer Insights - Data profiles worth exposing, and who may build agents on them.
- Check the server's status in the Microsoft 365 admin center registry (Agents > Tools > Registry) and block it if you want a gate before makers can add it.
- Complete the tenant administrator review that the Learn page asks for: confirm data security, compliance, residency and governance requirements for connections that leave Dynamics 365.
- Review security role privileges on the Dataverse tables behind the tools for the intended users, because those privileges decide what an agent can return.

### At rollout

- Provision the Agent 365 Tooling Gateway service principal as a tenant admin if it does not exist, and decide whether to grant admin consent for `/.default` or let users consent to the named permission.
- Tell makers to turn off **Allow all** on the server's tool list and keep only the profile tools they need, noting that new tools added to the server later stay off.
- Hold off on external MCP clients until you have decided whether each client's Entra app may call the gateway.

### After rollout

- Look for 403 responses and missing tools, and check the user's security role privileges and the `scp` claim before widening access.
- Re-read the roadmap item and the Learn pages when the preview and general availability targets pass, for licensing or meter changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether agents can use the Customer Insights MCP server at all (tenant block or unblock)</strong><br><small>Tenant</small><br><small class="controls__note">Registry actions are Block and Unblock. The Learn gateway page says the server may be absent from the catalogue if it is blocked or not registered.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry <a href="https://learn.microsoft.com/microsoft-365/admin/manage/agent-tools-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which of the server's tools an individual agent may call</strong><br><small>Agent</small><br><small class="controls__note">Maker-side only. Turn off Allow all, then toggle tools individually, then Save and Publish. Tools added to the server later stay off.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › select the MCP server › Allow all <a href="https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Gateway service principal and consent for the McpServers.D365CustomerInsights.All permission</strong><br><small>Tenant</small><br><small class="controls__note">Tenant admin. The path is on the client app you register for manual setup. The Learn page also gives az ad sp create --id &lt;ATG-app-id&gt;.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>API permissions › Add a permission › APIs my organization uses › Grant admin consent <a href="https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-MgServicePrincipal -AppId &quot;&lt;ATG-app-id&gt;&quot;</code> <a href="https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking in the registry is tenant-wide and stops agents using the server; the maker-side toggles only affect one agent. Neither limits which customers or fields a tool returns: that rests on Dataverse security roles and row-level security, which have no row here because the Customer Insights MCP pages give no path for them. The Copilot Studio page says that a data policy covering Power Platform connectors also regulates access to MCP servers; no Microsoft page confirms that this applies to the Customer Insights server reached through the gateway, so see [data policies](/concepts/data-policies/) as a general control only. Gateway provisioning needs a tenant admin; configuring the server needs System Administrator.

## Open questions

- Will Microsoft publish a licence or meter for the Customer Insights MCP server, and how will Copilot Studio bill agents that call it? Watch the Learn pages for Customer Insights and Copilot Studio billing.
- Does the roadmap status (In development) mean the server documented on Learn is a preview, and what will change at general availability in November CY2026?
- Is there a way to limit which customer profiles, segments or attributes the tools return, beyond Dataverse security roles?
- Does a Power Platform data policy govern the server when it is added from the Copilot Studio catalogue through Agent 365 Tooling Gateway?
- Is there an audit log of tool calls to the server that an administrator can read?

<!-- rationale
risk: Medium. Agents that use the server can read unified customer profiles, including data from external sources, but the server applies the calling user's Dataverse privileges and can be blocked tenant-wide.
cost: Low. The only cost the sources show is admin time and the existing per-tenant Customer Insights licence; no meter or charge for this server is published, and Copilot Studio billing for it is not documented.
impact: Medium. Makers who build agents and the sellers, marketers and service staff who use them notice it; most users and tenant defaults do not change.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Cost and licensing; rationale: cost; Open questions / absence: Copilot Studio billing for agents that call this server is not documented and remains entirely a question for Microsoft. | Found: Agents incur charges for generative answer responses unless the agent is created in Agent Builder in Microsoft 365 and the response doesn't leverage tenant graph grounding. | Fix: Separate unpublished server-specific execution pricing from published agent billing. State that Copilot Studio agent usage follows its published Copilot Credits billing and Microsoft 365 Copilot inclusion conditions at https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management. For the Microsoft Copilot harness, https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview explicitly includes MCP tools in consumption. Retain only the narrower open question about a separate Customer Insights server charge or feature-specific rate. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The low cost rating means only indirect costs are known, with admin time and an existing Customer Insights licence the only supported costs. | Found: Low. The only cost the sources show is admin time and the existing per-tenant Customer Insights licence; / Copilot Credits are the unit that measures agent usage. | Fix: Account for Copilot Studio consumption rather than rating the whole briefing as indirect-cost-only. Set cost to variable for metered agent usage, name Copilot Credits, and explain the published Microsoft 365 Copilot inclusion conditions. Keep separate Customer Insights MCP execution pricing explicitly unknown; do not infer a feature-specific tool-call rate. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [contradicted, blocker] Cost and licensing: Indirect cost / behaviour: Customer Insights - Data profiles must already exist for the tools to return anything. | Found: The consent service can run independently of a full Customer Insights installation, so these tools are available even in environments where only Dynamics 365 Sales or Contact Center is deployed. | Fix: Replace the sentence with: 'Profile lookups need unified Customer Insights - Data profiles; consent, journey and email tools have different prerequisites and do not need a unified customer ID.' The reference also documents list_data_sources, so do not claim every Data tool needs an existing profile. | Source: https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-tools-reference
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: Client-app consent follows API permissions > Add a permission > APIs my organization uses > Grant admin consent. | Found: 4. Select APIs my organization uses.
5. Search for the Agent 365 Tooling Gateway app by using the app ID.
6. Add the `McpServers.D365CustomerInsights.All` delegated permission.
7. Select Grant admin consent. | Fix: On the client app, replace the path with 'API permissions > Add a permission > APIs my organization uses > Agent 365 Tooling Gateway (search by app ID) > McpServers.D365CustomerInsights.All (delegated permission) > Grant admin consent'. Include the missing app-selection and permission-addition steps from the cited gateway page; granting consent is a subsequent action, not the next step from the API search page. | Source: https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway
- [contradicted, blocker] controls[2].governs; controls[2].ui; controls[2].api; Governance controls table lead / consistency: The consent UI and New-MgServicePrincipal are equivalent surfaces for the combined gateway-provisioning and permission-consent control. | Found: Run the commands in this section instead. If you set the server up manually, grant admin consent on your own client app, as described later in this article. | Fix: Split the combined row into gateway service-principal provisioning and client-app delegated-permission consent. Keep New-MgServicePrincipal on the provisioning row and the corrected API permissions path on the consent row. State explicitly that creating the gateway service principal does not grant McpServers.D365CustomerInsights.All to a client; do not label the two actions as equivalents. | Source: https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway
- [contradicted, blocker] Governance controls; Open questions / absence: Microsoft has not confirmed that Power Platform data policies apply when Customer Insights is connected to a Copilot Studio agent through the gateway. | Found: The process is the same, whether you're adding prebuilt Microsoft MCP connectors or an MCP server to which you configured a connection. | Fix: Remove the unsupported exception for the Copilot Studio gateway connection. State that the cited Copilot Studio MCP documentation applies connector data policies to both prebuilt and configured MCP connections, which includes the documented Customer Insights Copilot Studio connection. Do not extend that coverage to external MCP clients; any remaining open question should be confined to those clients or to a particular policy configuration. | Source: https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to review Dataverse security-role privileges, but that control has no table row. | Found: Review security role privileges on the Dataverse tables behind the tools for the intended users / Dataverse security roles and row-level security, which have no row here | Fix: Add a controls row for Dataverse security-role privileges, which the checklist instructs readers to review. The schema allows naming an existing control without inventing a feature-specific path; obtain the role-management path from Dataverse documentation, and do not describe an unresearched surface as nonexistent.
-->
