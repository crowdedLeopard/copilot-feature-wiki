---
title: "Customer Insights - Data: MCP server grounds agents in unified customer profiles and insights"
slug: "dynamics-365-customer-insights-data-agents-and-copilot-increase-ai-accuracy-by-grounding-a"
roadmapId: 577814
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Insights - Data"]
summary: "A Customer Insights MCP server lets Copilot Studio agents and other MCP clients read unified customer profiles, segments, measures and predictions. Makers add it per agent; the admin centre registry has Block for supported experiences."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says Customer Insights is licensed per tenant, with add-on capacity. Copilot Studio agent usage is metered in Copilot Credits. No separate licence or charge for the MCP server is published at the time of writing (November 2026)."
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
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Register an application in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app"
    kind: "learn"
  - title: "Product overview for Dynamics 365 Customer Insights - Data"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/data/overview"
    kind: "learn"
videos: []
related: ["mcp","agent-identity","copilot-credits"]
controls:
  - governs: "Availability of the registered Customer Insights MCP server in supported Agent 365 experiences"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/agent-tools-overview"
    api: null
    note: "Registry actions are Block and Unblock. Copilot Studio and Power Platform can have separate controls; do not assume a registry block applies across all products or connected components."
  - governs: "Which of the server's tools an individual agent may call"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > select the MCP server > Tools > Allow all"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent"
    api: null
    note: "Maker-side only. For agents powered by the standard harness. Turn off Allow all, then toggle tools individually, then Save and Publish. Tools added to the server later stay off."
  - governs: "Provisioning the Agent 365 Tooling Gateway service principal in the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-MgServicePrincipal -AppId \"<ATG-app-id>\""
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway"
    note: "Tenant admin. The Learn page gives commands for this step and also gives az ad sp create --id <ATG-app-id>. This does not grant the permission to a client app."
  - governs: "Admin consent for the McpServers.D365CustomerInsights.All permission on a client app (manual or external-client setup)"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > client app > API permissions > Add a permission > APIs my organization uses > Agent 365 Tooling Gateway (search by app ID) > McpServers.D365CustomerInsights.All (delegated permission) > Grant admin consent"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway"
    api:
      kind: "other"
      call: "https://login.microsoftonline.com/<customer-tenant-id>/v2.0/adminconsent?client_id=<your-client-app-id>&scope=<ATG-app-id>/.default&redirect_uri=<redirect-uri-registered-on-your-app>"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway"
    note: "Tenant admin or delegated admin-consent permissions. The path is on your own client app, not the gateway app. The Learn page describes the URL as the v2.0 admin-consent endpoint pointed at your client app."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-24"
roadmapModified: "2026-10-22T23:45:47"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item, written from the Customer Insights MCP server pages on Microsoft Learn."
  - date: "2026-11-16"
    note: "Corrected after the independent check: Copilot Credit billing for agents now stated, the gateway row split into provisioning and consent, and the data policy statement and a profile prerequisite narrowed to what Learn says."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: availability now depends on registration approval and Microsoft Entra consent, registry blocking is limited to supported experiences, and the Dataverse role checklist step was removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: default state is now admin-opt-in because a tenant admin must provision the gateway service principal, and the After rollout check now refers to the token's scp claim only."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 87 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the Microsoft Entra consent path to start at App registrations, added the registry Block step and the Tools section to the control paths, and added the fair usage limits statement."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 96 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 96
  confirmed: 96
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4ef73004a19a75664845b828c0164d02"
---

## What's changing

The Customer Insights MCP server (a Model Context Protocol server, the standard way for AI agents to call tools) exposes Dynamics 365 Customer Insights - Data capabilities as tools that agents and chat clients can call. With it, an agent can resolve a Dataverse contact or lead to a unified customer profile and read that profile's segments, calculated measures, predictions such as churn probability, and cluster membership, such as a household.

Makers add it in Copilot Studio: on the agent's **Tools** page they select **Add a tool**, choose the **MCP** filter and search for `Dynamics 365 CX Customer Insights`. Microsoft Learn also documents connecting other MCP clients, including Visual Studio Code, GitHub Copilot CLI, Cursor, ChatGPT and Claude Code, through Agent 365 Tooling Gateway. The tools that need Customer Insights - Data are read-only. One server also serves Customer Insights - Journeys, and its `create_journey` tool, which needs Journeys, writes data.

The roadmap item (ID 577814) has the status In development, with a preview target of June CY2026 and a general availability target of November CY2026. Those are Microsoft's targets, not commitments. Microsoft Learn already documents the server and its connection steps, so the roadmap status and the documentation do not line up. The roadmap lists Worldwide (Standard Multi-Tenant) only, and says the feature is enabled for admins, makers and marketers automatically.

## Why it matters

This puts a customer data platform behind any agent a maker chooses to build. Unified profiles combine Dataverse contacts and leads with external sources such as loyalty or contract systems, so an agent can now answer questions from data that Dataverse alone does not hold. Expect sellers and service staff to start asking for it, and expect makers to add it without an IT request unless you decide otherwise.

Once registration is approved and required Microsoft Entra consent is granted, makers can choose whether to attach the available server to an agent. The decision for a service owner is whether customer profiles, lifetime-value scores and churn risk should be reachable by agents, and under which accounts. The controls below are what you have to make that decision.

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

**Meter.** Copilot Studio measures agent usage in Copilot Credits. Microsoft's [Copilot Studio billing page](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management) says employee-facing use of Copilot Studio agents, and the tools and features those agents invoke, is included in the Microsoft Copilot USL when the agent's user is licensed with Microsoft Copilot and the agent operates using that authenticated user's identity. Usage is limited to fair usage limits. It notes that agents incur charges for generative answer responses outside the exceptions it lists. That page describes agents powered by the standard harness. For agents powered by the Microsoft Copilot harness, Microsoft states that [Copilot Credits](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview) are charged for tools, including knowledge and MCPs. Treat Copilot Credit consumption by agents that call this server as a cost to plan for, and see [Copilot Credits](/concepts/copilot-credits/).

**What is not published.** No separate charge or feature-specific rate for calls to the Customer Insights MCP server is published at the time of writing (November 2026).

**Indirect cost.** Admin time to review the registry entry, grant gateway consent and brief makers. Profile lookups need unified Customer Insights - Data profiles; consent, journey and email tools have different prerequisites and do not need a unified customer ID.

## Scope

- **Users and licences:** any agent user, provided they have access to the Dataverse tables behind the tools. Customer Insights - Data is needed for the profile tools; Customer Insights - Journeys or Shared Consent is needed for the consent tools; Journeys alone is needed for the journey and email tools.
- **Roles:** the gateway page lists the System Administrator role to configure the MCP server, plus tenant admin or delegated admin-consent permissions for manual or external-client setup.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web.
- **Rollout:** the roadmap targets preview in June CY2026 and general availability in November CY2026, and says the feature is enabled for admins, makers and marketers automatically. Catalogue availability requires registration approval and the required Microsoft Entra consent.

## Governance guidance

### Before rollout

- Decide which environments hold Customer Insights - Data profiles worth exposing, and who may build agents on them.
- Check the server's status in the Microsoft 365 admin center registry (Agents > Tools > Registry) and review the documented effect of blocking for the clients and connections you use.
- Complete the tenant administrator review that the Learn page asks for: confirm data security, compliance, residency and governance requirements for connections that leave Dynamics 365.

### At rollout

- Provision the Agent 365 Tooling Gateway service principal as a tenant admin if it does not exist, and decide whether to grant admin consent for `/.default` or let users consent to the named permission.
- Tell makers to turn off **Allow all** on the server's tool list and keep only the profile tools they need, noting that new tools added to the server later stay off.
- Hold off on external MCP clients until you have decided whether each client's Entra app may call the gateway.

### After rollout

- Look for 403 responses and check that the token's `scp` claim contains `McpServers.D365CustomerInsights.All` before widening access.
- Re-read the roadmap item and the Learn pages when the preview and general availability targets pass, for licensing or meter changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Availability of the registered Customer Insights MCP server in supported Agent 365 experiences</strong><br><small>Tenant</small><br><small class="controls__note">Registry actions are Block and Unblock. Copilot Studio and Power Platform can have separate controls; do not assume a registry block applies across all products or connected components.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-365/admin/manage/agent-tools-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which of the server's tools an individual agent may call</strong><br><small>Agent</small><br><small class="controls__note">Maker-side only. For agents powered by the standard harness. Turn off Allow all, then toggle tools individually, then Save and Publish. Tools added to the server later stay off.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › select the MCP server › Tools › Allow all <a href="https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Provisioning the Agent 365 Tooling Gateway service principal in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Tenant admin. The Learn page gives commands for this step and also gives az ad sp create --id &lt;ATG-app-id&gt;. This does not grant the permission to a client app.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-MgServicePrincipal -AppId &quot;&lt;ATG-app-id&gt;&quot;</code> <a href="https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin consent for the McpServers.D365CustomerInsights.All permission on a client app (manual or external-client setup)</strong><br><small>App</small><br><small class="controls__note">Tenant admin or delegated admin-consent permissions. The path is on your own client app, not the gateway app. The Learn page describes the URL as the v2.0 admin-consent endpoint pointed at your client app.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › client app › API permissions › Add a permission › APIs my organization uses › Agent 365 Tooling Gateway (search by app ID) › McpServers.D365CustomerInsights.All (delegated permission) › Grant admin consent <a href="https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>https://login.microsoftonline.com/&lt;customer-tenant-id&gt;/v2.0/adminconsent?client_id=&lt;your-client-app-id&gt;&amp;scope=&lt;ATG-app-id&gt;/.default&amp;redirect_uri=&lt;redirect-uri-registered-on-your-app&gt;</code> <a href="https://learn.microsoft.com/dynamics365/customer-insights/data/mcp-server-agent365-tooling-gateway" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Registry blocking restricts the selected server in supported experiences; Microsoft warns that it does not necessarily apply across all products or connected components. The maker-side toggles only affect one agent. Neither limits which customers or fields a tool returns: that rests on Dataverse security roles and row-level security.

The Copilot Studio page says that access to MCP servers in Copilot Studio relies on Power Platform connectors, so a data policy that regulates Power Platform connectors also regulates access to the MCP server and its tools for your agent, and that the process is the same for prebuilt Microsoft MCP connectors and for an MCP server you configured a connection to. That page is about adding servers in Copilot Studio, so the coverage is not extended here to external MCP clients such as Visual Studio Code. See [data policies](/concepts/data-policies/).

Creating the gateway service principal and granting consent are separate actions. The service principal must exist before a client app can request a token for the gateway, and the Learn page says that granting admin consent on your own client app is what puts `McpServers.D365CustomerInsights.All` into the tokens that client requests. Gateway provisioning needs a tenant admin; configuring the server needs System Administrator.

## Open questions

- Will Microsoft publish a separate charge or feature-specific Copilot Credit rate for calls to the Customer Insights MCP server? Watch the Learn pages for Customer Insights and Copilot Studio billing.
- Does the roadmap status (In development) mean the server documented on Learn is a preview, and what will change at general availability in November CY2026?
- Is there a way to limit which customer profiles, segments or attributes the tools return, beyond Dataverse security roles?
- Does a Power Platform data policy govern external MCP clients, such as Visual Studio Code, that call the server through Agent 365 Tooling Gateway?
- Is there an audit log of tool calls to the server that an administrator can read?

<!-- rationale
risk: Medium. Agents that use the server can read unified customer profiles, including data from external sources, but the server applies the calling user's Dataverse privileges and has registry blocking for supported experiences.
cost: Variable. Copilot Studio agent usage is metered in Copilot Credits, subject to Microsoft's Microsoft 365 Copilot inclusion conditions; Customer Insights is licensed per tenant, and no separate charge for this server is published.
impact: Medium. Makers who build agents and the sellers, marketers and service staff who use them notice it; most users and tenant defaults do not change.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls table / admin-path: The Entra client-app consent path starts at Entra ID > App registrations > client app and continues through API permissions to Grant admin consent. | Found: Browse to Entra ID > App registrations and select New registration. Select API permissions under Manage on your app registration's Overview page. | Fix: In controls[3].ui and its rendered table, use 'Entra ID > App registrations > client app > Manage > API permissions > Add a permission > APIs my organization uses > Agent 365 Tooling Gateway (search by app ID) > McpServers.D365CustomerInsights.All (delegated permission) > Grant admin consent'. Manage is the omitted heading. The navigation source is already cited: https://learn.microsoft.com/entra/identity-platform/quickstart-register-app. | Source: https://learn.microsoft.com/entra/identity-platform/quickstart-register-app
-->
