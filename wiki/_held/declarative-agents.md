---
kind: "concept"
title: "Declarative agents: what Copilot runs for you, what it needs and where to stop it"
slug: "declarative-agents"
summary: "A declarative agent is a Microsoft 365 Copilot agent defined by instructions, knowledge and actions and run on Copilot's own orchestrator. Administrators use it to decide which agents exist, who can use them and which licence each needs."
created: "2026-11-22"
updated: "2026-11-22"
version: 1
tags: ["declarative-agents","agents","m365-copilot","agent-governance","extensibility","licensing","m365-admin-center","agent-365"]
covers: []
sources:
  - title: "Declarative agents for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-declarative-agent"
    kind: "learn"
  - title: "Compare declarative and custom engine agents"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/agents-overview"
    kind: "learn"
  - title: "Declarative agent architecture"
    url: "https://learn.microsoft.com/plugins/declarative-agent-architecture"
    kind: "learn"
  - title: "Agent Builder overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
  - title: "Declarative agent schema 1.5 for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-manifest-1.5"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Whether one agent is available to anyone in the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users or groups an agent is available to and deployed to (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "Inventory of agents in the tenant (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
related: ["mcp","copilot-credits","spending-policies","agent-identity","app-management","knowledge-grounding","m365-copilot-employee-self-service-agent-in-m365-copilot","m365-copilot-use-agent-365-agents-within-m365-copilot-chat-and-declarative-agents"]
controls:
  - governs: "Whether one agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta; the Package Management API requires a Microsoft Agent 365 licence. Applies to the selected agent, not its whole plugin package."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Options: All users (the default), No users, Specific users or groups. A preview Tenant Configuration Management resource covers this setting; see the docs link on the UI side."
  - governs: "Which users or groups an agent is available to and deployed to"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > Status > Available > agent > Install > Deploy agent to selected users"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "The request body sets allowedUsersAndGroups, acquireUsersAndGroups, availableTo and deployedTo. Beta; requires a Microsoft Agent 365 licence."
  - governs: "Inventory of agents in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    note: "Read-only. By default the response contains only titles that contain an agent. Requires a Microsoft Agent 365 licence."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-22"
    note: "First concept page on declarative agents: what they are, which licence or billing each capability needs, and where administrators block, install and scope them."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 96 statements contradicted, 1 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 96
  confirmed: 91
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "4728b0f428a74e7d5b076833b9989eee"
---

## What it is

A declarative agent is an agent for Microsoft 365 Copilot that you define with configuration (a purpose, instructions, knowledge and actions) rather than code, and that runs on Copilot's own orchestrator and model. Microsoft hosts that runtime, so the agent needs no hosting of its own.

The configuration describes identity and behaviour, the knowledge that grounds answers, the capabilities (actions, skills, connectors or MCP-based tools) the agent can use, and the metadata that places it in Microsoft 365 apps. Knowledge can come from Teams messages, Copilot connectors, SharePoint and OneDrive. Users meet the agent in Microsoft 365 Copilot and in apps such as Teams, Word, Excel and Outlook.

Makers build one with Agent Builder (low-code, without external actions), with Copilot Studio, or with Work IQ Dev Tools for supported pro-code scenarios. External integrations can still need code and hosting. For how agents reach tools, see [MCP](/concepts/mcp/).

| | Declarative agent | Custom engine agent |
| --- | --- | --- |
| Orchestrator and models | Copilot's | The maker's own |
| Hosting | Hosted in Microsoft 365 | Extra hosting outside Microsoft 365, typically Azure, at additional cost |
| Proactive interactions | Not supported; rely on user-initiated interactions | Can trigger actions without user input |
| Compliance | Inherits Microsoft 365 compliance, RAI and security standards | The maker must ensure their own |

This page covers the declarative type only; custom engine agents are a separate approach.

## Why it matters

Declarative agents are the way an organisation puts its own instructions and data in front of Copilot, so each one is a new route to tenant content and, through its actions, to other systems. Because they use Copilot's orchestrator, Microsoft documents them as adhering to Microsoft 365 security, compliance and Responsible AI requirements; Microsoft also says Copilot uses existing permissions, so an agent grounded on SharePoint reaches what its user can already reach, including any oversharing.

In the Microsoft 365 admin center, **User access** decides who can use agents and plugins at all. Microsoft documents its default as All users, subject to existing app policies and user assignments. A tenant that never visits the **Agents** pages is therefore running with agents open to everyone, and with no one deciding which agents are blocked, installed or limited to a group.

## Cost and licensing

A declarative agent has no price of its own; what each user can do with it depends on their licence or the tenant's billing. Microsoft lists these models: a Microsoft 365 Copilot add-on licence (including Microsoft 365 Copilot Business and Microsoft 365 E7), or usage-based billing, where tenants enable agent access without a full licence and consumption is measured in [Copilot Credits](/concepts/copilot-credits/). Spending caps are explained in [Spending policies](/concepts/spending-policies/).

Capabilities are what split the models:

- Web search, scoped web search, custom actions, custom instructions, code interpreter, image generator and MCP Apps are marked available in Copilot Chat without usage-based billing, with usage limits.
- SharePoint data, Copilot connectors, embedded file content and Dataverse knowledge need usage-based billing or a Copilot licence.
- Email, People, Teams messages and Teams meetings knowledge need a Copilot licence.

A user can use an agent only if they meet the requirements of every capability it uses. For SharePoint-grounded agents under pay-as-you-go, the billing policy must be connected to the SharePoint agents service. Agents built in Agent Builder do not consume the tenant's Dataverse storage entitlement. The Microsoft Graph Package Management API requires a Microsoft Agent 365 licence. Per-credit rates are on Microsoft's Copilot Studio billing rates page, not on this page.

## Risks and limits

- **Capability mismatch.** Users can access an agent only if they meet the requirements of every capability it uses, so an agent that uses Email, People or Teams knowledge is unavailable to users without a Copilot licence.
- **Blocking acts on the agent only.** The documented actions apply to the selected agent, not necessarily to its plugin package, skills, shared MCP servers or connections, and blocking does not necessarily revoke connected-service permissions or credentials. Manage those under **Agents** > **Tools**.
- **Block reach varies by builder.** Blocking an Agent Builder or Copilot Studio agent affects it in Copilot and other hosts; blocking a SharePoint or Foundry agent affects only Copilot Chat.
- **Creation cannot be switched off alone.** Microsoft documents that administrators cannot disable Agent Builder creation separately while keeping agents enabled; they can control access, org-wide sharing and catalogue publishing.
- **Behaviour is managed, not deterministic.** Instructions are not a deterministic workflow engine, platform and model updates can change behaviour, and large sources do not guarantee complete coverage of a response.
- **Web grounding can be stale.** Scoped web search uses Bing-indexed content. The **Allow web search in Copilot** policy takes precedence over the agent's Web content toggle.
- **Agent Builder limits.** Agents built there cannot be used in Teams group or 1:1 chats, and Customer Managed Keys are not supported.
- **Government clouds differ.** GCC has full support, GCCH supports pro-code agents and Agent Builder, and DoD supports only pro-code agents. Usage-based billing is not supported in GCC or GCCH, and the Package Management API is listed for the global service only.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether one agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Beta; the Package Management API requires a Microsoft Agent 365 licence. Applies to the selected agent, not its whole plugin package.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (the default), No users, Specific users or groups. A preview Tenant Configuration Management resource covers this setting; see the docs link on the UI side.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups an agent is available to and deployed to</strong><br><small>Agent</small><br><small class="controls__note">The request body sets allowedUsersAndGroups, acquireUsersAndGroups, availableTo and deployedTo. Beta; requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › Status › Available › agent › Install › Deploy agent to selected users <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Inventory of agents in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. By default the response contains only titles that contain an agent. Requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's page on the preview Tenant Configuration Management (TCM) route names AI Administrator as the least-privileged role for remediation and applyOnce on the agent settings; the pages behind the other rows do not state a role.

Three more settings sit beside the table without a path read for this page. **Agent and plugin access** selects whether Microsoft, organisation or external-publisher agents appear: a disabled type is hidden from the Agent store, though Microsoft's own agents stay visible and cannot be installed. **Sharing** sets who can share Agent Builder agents with the whole organisation and applies to no other builder. **Agent management rules** run bulk actions such as blocking ownerless agents without usage. Preview TCM resources exist for agent types, sharing and user access.

Admin actions are recorded in the Purview audit log (for example BlockedAgent and UpdatedTenantSettings); see [Auditing](/concepts/auditing/). Note that User access and the three settings above govern distribution, not what an agent's knowledge sources contain; that is set by SharePoint and connector permissions.

## What to check

- Open **Agents** > **Settings** > **User access** and confirm whether All users, No users or specific groups is what you intend.
- List agents in **Agents** > **All agents**, and block any you have not approved.
- Compare each agent's knowledge sources with your licence mix, so users without Email, People or Teams entitlements are not offered agents that need them.
- Confirm which billing policy and spending policy pay for agents grounded in tenant data if you rely on pay-as-you-go.
- Review which SharePoint sites an agent's users can already reach, because the agent inherits that reach.
- Check the cloud you are in against the government-cloud support list before makers start building.

## Open questions

- Which Microsoft Entra roles may use each row of the controls table? The pages read name AI Administrator only for the preview TCM route.
- Is there a documented API call that sets **User access**, **Agent and plugin access** or **Sharing**? The preview TCM page lists them as resources but gives no call for setting them on that page.
- Does Microsoft publish a Copilot Credits rate specific to declarative agents? This page defers to Microsoft's billing rates page.

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: final sentence / default: A tenant that never visits Agents has agents open to everyone with nobody deciding blocking, installation or group limits. | Found: all users in the organization can access agents and plugins, subject to the existing app policies and user assignments. | Fix: Remove the final sentence beginning 'A tenant that never visits'. Retain the preceding qualified default statement; not visiting this portal does not establish the absence of existing app policies or user assignments. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
- [unsupported, blocker] Cost and licensing: first sentence / cost: A declarative agent has no price of its own. | Found: Searched: declarative agents cost price separate agent charge Copilot Credits billing rates; declarative agents "no" "cost" "price". Read prerequisites, Agent Builder licensing, cost-considerations and billing-rate search excerpts; none states this blanket exemption. | Fix: Delete 'A declarative agent has no price of its own;' and start the paragraph 'What each user can do with a declarative agent depends on their licence or the tenant's billing.'
- [contradicted, blocker] controls[1].api; Governance controls; Open questions / absence: No documented API operation sets User access. | Found: Create a new configurationMonitor ... applies a desired-state baseline once in applyOnce mode. ... POST /admin/configurationManagement/configurationMonitors | Fix: Set controls[1].api to graph 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Replace its TCM note with 'Preview; mode=applyOnce applies baseline resources. For microsoft.agent.useraccess (resourceVersion 1), properties.valueObject.userAssignmentCategory sets everyone or noOne. Requires delegated permissions and AI Administrator for the signed-in user; TCM is global-service only.' In Open questions replace the API-gap bullet with 'Preview TCM applyOnce documents automation for User access, Agent and plugin access and Sharing; the useraccess schema documents everyone and noOne, not specific users or groups.' Use https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources for the resource properties and role. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: comparison table / behaviour: Custom engine agents require hosting outside Microsoft 365, typically Azure, at additional cost. | Found: Require additional hosting outside of Microsoft 365, typically with cloud services such as Azure, at an additional cost. | Fix: Replace the custom-engine Hosting cell with 'Hosted in Microsoft 365 with Copilot Studio or externally with custom solutions such as Azure AI', as the same page's Engine hosting comparison states. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/agents-overview
- [supported, minor] Risks and limits: Government clouds differ / availability: GCC has full declarative-agent support. | Found: Government Community Cloud (GCC): Full declarative agent support is available. | Fix: Add 'The prerequisites page separately states that agents grounded in shared tenant work data are not currently available in GCC, GCCH or DoD.' Cite https://learn.microsoft.com/plugins/prerequisites alongside the overview so readers see both statements. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-declarative-agent
- [supported, minor] Cost and licensing; What to check; sources / cost: Spending policies govern agent spending limits and are a control to review. | Found: When you select a limited monthly budget, you limit the number of credits that this policy can spend each month. ... When users hit the limit, they lose access to agents and services for the rest of the month | Fix: Add https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits to sources for the spending-control statement. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits#add-identity-based-spending-policy
- [contradicted, minor] What to check; Governance controls / consistency: The checklist asks readers to review SharePoint source access without a corresponding controls-table row. | Found: Review which SharePoint sites an agent's users can already reach ... Table controls: agent blocking, tenant User access, agent availability/deployment, tenant inventory. | Fix: Remove the checklist bullet 'Review which SharePoint sites an agent's users can already reach, because the agent inherits that reach.' Retain the verified permissions explanation in the prose.
- [contradicted, minor] What to check; Governance controls / consistency: The checklist asks readers to review billing and spending policies without corresponding controls-table rows. | Found: Confirm which billing policy and spending policy pay for agents grounded in tenant data ... Table controls: agent blocking, tenant User access, agent availability/deployment, tenant inventory. | Fix: Remove the checklist bullet 'Confirm which billing policy and spending policy pay for agents grounded in tenant data if you rely on pay-as-you-go.' Retain the cost explanation and links in Cost and licensing.
-->
