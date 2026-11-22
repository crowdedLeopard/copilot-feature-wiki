---
kind: "concept"
title: "Declarative agents: what Copilot runs for you, what it needs and where to stop it"
slug: "declarative-agents"
summary: "A declarative agent is a Microsoft 365 Copilot agent defined by instructions, knowledge and actions and run on Copilot's own orchestrator. Administrators use it to decide which agents exist, who can use them and which licence each needs."
created: "2026-11-22"
updated: "2026-11-22"
version: 2
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
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
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
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview; mode=applyOnce. For microsoft.agent.useraccess (resourceVersion 1), properties.valueObject.userAssignmentCategory sets everyone or noOne. Needs delegated permissions and AI Administrator; TCM is global service only."
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
  - date: "2026-11-22"
    note: "Corrected: removed the default-state inference and the 'no price of its own' claim, added the preview Graph call for User access, fixed the custom engine hosting cell, added the GCC caveat, dropped two checklist items."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 118 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 118
  confirmed: 115
  unconfirmed: 0
  contradicted: 3
  attempts: 2
  hash: "08f86be9d5756975e4401fcfc935f3e4"
---

## What it is

A declarative agent is an agent for Microsoft 365 Copilot that you define with configuration (a purpose, instructions, knowledge and actions) rather than code, and that runs on Copilot's own orchestrator and model. Microsoft hosts that runtime, so the agent needs no hosting of its own.

The configuration describes identity and behaviour, the knowledge that grounds answers, the capabilities (actions, skills, connectors or MCP-based tools) the agent can use, and the metadata that places it in Microsoft 365 apps. Knowledge can come from Teams messages, Copilot connectors, SharePoint and OneDrive. Users meet the agent in Microsoft 365 Copilot and in apps such as Teams, Word, Excel and Outlook.

Makers build one with Agent Builder (low-code, without external actions), with Copilot Studio, or with Work IQ Dev Tools for supported pro-code scenarios. External integrations can still need code and hosting. For how agents reach tools, see [MCP](/concepts/mcp/).

| | Declarative agent | Custom engine agent |
| --- | --- | --- |
| Orchestrator and models | Copilot's | The maker's own |
| Hosting | Hosted in Microsoft 365 | Hosted in Microsoft 365 with Copilot Studio or externally with custom solutions such as Azure AI |
| Proactive interactions | Not supported; rely on user-initiated interactions | Can trigger actions without user input |
| Compliance | Inherits Microsoft 365 compliance, RAI and security standards | The maker must ensure their own |

This page covers the declarative type only; custom engine agents are a separate approach.

## Why it matters

Declarative agents are the way an organisation puts its own instructions and data in front of Copilot, so each one is a new route to tenant content and, through its actions, to other systems. Because they use Copilot's orchestrator, Microsoft documents them as adhering to Microsoft 365 security, compliance and Responsible AI requirements; Microsoft also says Copilot uses existing permissions, so an agent grounded on SharePoint reaches what its user can already reach, including any oversharing.

In the Microsoft 365 admin center, **User access** decides who can use agents and plugins at all. Microsoft documents its default as All users, subject to existing app policies and user assignments.

## Cost and licensing

What each user can do with a declarative agent depends on their licence or the tenant's billing. Microsoft lists these models: a Microsoft 365 Copilot add-on licence (including Microsoft 365 Copilot Business and Microsoft 365 E7), or usage-based billing, where tenants enable agent access without a full licence and consumption is measured in [Copilot Credits](/concepts/copilot-credits/). Spending caps are explained in [Spending policies](/concepts/spending-policies/).

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
- **Government clouds differ.** GCC has full support, GCCH supports pro-code agents and Agent Builder, and DoD supports only pro-code agents. The prerequisites page separately states that agents grounded in shared tenant work data are not currently available in GCC, GCCH or DoD. Usage-based billing is not supported in GCC or GCCH, and the Package Management API is listed for the global service only.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether one agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Beta; the Package Management API requires a Microsoft Agent 365 licence. Applies to the selected agent, not its whole plugin package.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Preview; mode=applyOnce. For microsoft.agent.useraccess (resourceVersion 1), properties.valueObject.userAssignmentCategory sets everyone or noOne. Needs delegated permissions and AI Administrator; TCM is global service only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
- Check the cloud you are in against the government-cloud support list before makers start building.

## Open questions

- Which Microsoft Entra roles may use each row of the controls table? The pages read name AI Administrator only for the preview TCM route.
- Preview TCM applyOnce documents automation for User access, Agent and plugin access and Sharing; the useraccess schema documents everyone and noOne, not specific users or groups.
- Does Microsoft publish a Copilot Credits rate specific to declarative agents? This page defers to Microsoft's billing rates page.

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risks and limits: Blocking acts on the agent only / admin-path: The instruction 'Manage those under Agents > Tools' includes the connected-service permissions, credentials and connections just named. | Found: Connection or account | The product that owns authentication and the connection | Manage sign-in, authorization, source permissions, connection scope, and revocation separately. | Fix: Replace 'Manage those under Agents > Tools' with 'Manage plugins, skills and MCP servers under Agents > Tools; manage connected-service permissions, credentials and connections separately in the product that owns them.' The first clause is documented at https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions and the second at https://learn.microsoft.com/plugins/manage#apply-a-component-control-when-required. | Source: https://learn.microsoft.com/plugins/manage
- [contradicted, blocker] controls[0].note / applicability: The block row, including its Package Management API, applies to the selected agent and not its whole plugin package. | Found: Block a Copilot package to prevent its usage. | Fix: Replace 'Applies to the selected agent, not its whole plugin package' with 'The UI action is documented for the selected agent; the API blocks the Copilot package identified by {id}.' The UI boundary is documented at https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions and the API boundary at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block. Make the same change in the rendered row. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, blocker] Governance controls: final paragraph / applicability: User access and all three additional settings, including Agent management rules, govern distribution rather than knowledge-source data access. | Found: Restrict external sharing of sites and its content | Provides capability to restrict agents and Copilot from discovering specific sites and content. | Fix: Replace 'User access and the three settings above govern distribution, not what an agent's knowledge sources contain' with 'User access, Agent and plugin access and Sharing govern agent distribution, not source-content permissions.' Do not include Agent management rules in this exclusion: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings documents Apply template for security policies, and https://learn.microsoft.com/microsoft-agent-365/admin/policy-template includes source-discovery restrictions. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/policy-template
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: capability list / licensing: SharePoint data requires usage-based billing or a Copilot licence. | Found: Custom knowledge: SharePoint data | ❌ | ✅ | ✅ | Fix: Retain the prerequisites table's rule, but add: 'The knowledge-sources page separately says SharePoint and OneDrive retrieval requires an active Microsoft 365 Copilot licence; its overview table allows a licence or metered usage.' Cite https://learn.microsoft.com/plugins/knowledge-sources#sharepoint-and-onedrive for this documentation disagreement. | Source: https://learn.microsoft.com/plugins/prerequisites
- [supported, minor] Risks and limits: Blocking acts on the agent only / applicability: The agent actions page says selected-agent actions do not necessarily apply to its whole plugin package or bundled capabilities. | Found: These actions apply to the selected agent. If the agent is included in a plugin, don't assume the action also applies to the whole plugin package, its skills, shared MCP servers, or connections. | Fix: Keep the cited page's qualification, but rename this bullet 'Agent and package boundaries' and add: 'The plugin governance page separately says a package containing an agent and a skill appears under Tools and Agents as one entity; those views do not make its capabilities independently governed packages.' Cite https://learn.microsoft.com/plugins/manage#understand-package-and-skill-blocking. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [supported, minor] controls[1].note / availability: The remediation and applyOnce documentation says preview TCM is global-service only. | Found: These capabilities are available in preview through Microsoft Graph beta. TCM is available only in the global service, not in national clouds. | Fix: Replace 'TCM is global service only' with 'The remediation/applyOnce guidance says TCM is global-service only; the create-monitor reference separately lists US Government L4 and L5 as available.' Both pages are already cited: https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources and https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. | Source: https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources
- [supported, minor] sources; Why it matters; Cost and licensing / applicability: The permission-scoped grounding and published billing-rate statements are supported by Microsoft pages not included in the source list. | Found: Microsoft Copilot only surfaces organizational data to which individual users have at least view permissions. | Fix: Add the supporting sources https://learn.microsoft.com/microsoft-365-copilot/microsoft-365-copilot-privacy and https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management. The corrections that describe documentation disagreements and package boundaries also need https://learn.microsoft.com/plugins/knowledge-sources and https://learn.microsoft.com/plugins/manage. No additional prose or control rows are required by this source-list correction. | Source: https://learn.microsoft.com/microsoft-365-copilot/microsoft-365-copilot-privacy
-->
