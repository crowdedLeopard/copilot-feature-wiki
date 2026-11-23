---
kind: "concept"
title: "Agent registry: which agents does your tenant have, and who can stop them?"
slug: "agent-registry"
summary: "The agent registry is the Microsoft 365 admin center inventory of agents in a tenant, with owners, risk signals and actions to block, install, delete or reassign them. It shows what exists and lets administrators act on it."
created: "2026-11-23"
updated: "2026-11-23"
version: 2
tags: ["agent-registry","agent-365","agent-governance","agents","admin-controls"]
covers: []
sources:
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Connected platforms in Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Agent management roles and permissions in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms"
    kind: "learn"
  - title: "Agent Registry convergence with Microsoft Agent 365"
    url: "https://learn.microsoft.com/entra/agent-id/agent-registry-convergence"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "copilotPackage: reassign"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reassign"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta&preserve-view=true"
    kind: "learn"
  - title: "Manage Microsoft Foundry agent availability as an administrator"
    url: "https://learn.microsoft.com/azure/foundry/control-plane/govern-agent-infrastructure-entra-admin"
    kind: "learn"
related: ["m365-copilot-agent-lifecycle-management-rules","microsoft-agent-365-registry-sync","agent-identity","app-management","plugins","auditing"]
controls:
  - governs: "Blocking or unblocking an agent for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Preview. Needs Agent 365 licence and delegated CopilotPackages.ReadWrite.All. Acts on the selected agent, not its plugin."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta&preserve-view=true"
    note: "UI options: All users (the default), No users, Specific users or groups. The preview API supports everyone or noOne only; request details are under the table."
  - governs: "Bulk lifecycle rules, such as blocking ownerless agents without usage"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent management rules > Add rule"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Apply template is a one-time bulk operation, not a scheduled rule."
  - governs: "Connections that sync agents from external platforms into the registry"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Connected platforms > Manage > + Connect a platform"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms"
    api: null
    note: "Agent 365 AI administrator creates the connection; the platform administrator supplies key-based credentials."
  - governs: "Reassigning ownership of an agent"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Assign new owner"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/reassign"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reassign"
    note: "Preview. The request body sets userId. UI reassigns only Agent Builder and Copilot Studio shared agents."
  - governs: "Reading the agent inventory"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    note: "Read-only. The API needs an Agent 365 licence; least-privileged permission is CopilotPackages.Read.All."
confidence: "medium"
dependents: 8
changes:
  - date: "2026-11-23"
    note: "New concept page: what the agent registry lists, which licences and roles apply, and where to block, reassign and sync agents."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 106 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: User access now lists its preview Graph automation, draft-agent visibility and two overstated claims are narrowed, Foundry block and delete behaviour added, and two checklist items without a table row removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 114 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 114
  confirmed: 114
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f51f805be9deb4640f257d278905c642"
---

## What it is

The agent registry is the tenant's inventory of agents in the Microsoft 365 admin center, under **Agents** > **All agents** > **Registry**. Administrators use it to see which agents exist, who owns them and what risk signals they carry, and to act on them: block, install, delete or reassign.

It is a part of Microsoft Agent 365, which Microsoft describes as an observability platform that gives one view of the agents in an organisation, including agents from Microsoft and from other companies. The registry lists agents from Microsoft, from partners and from your own teams.

### Agent types

| Type | What Microsoft says it is |
| --- | --- |
| Microsoft agents | Built and maintained by Microsoft |
| External partner-built agents | Built by trusted non-Microsoft developers and published for broader or public availability |
| Published by your org | Custom agents approved and published by your organisation (also called line-of-business agents) |
| Shared by creator | Created and shared by individual users or developers (also called shared agents) |

### How agents get in

- **Built or published inside Microsoft 365.** The same Copilot Studio agent can appear more than once, for example as **Shared by creator** and as **Published by your org**. Microsoft says this is by design, and removing one entry does not remove the other.
- **Uploaded by an administrator.** **Add agent** takes an agent packaged as a ZIP file.
- **Synced from another platform.** An administrator creates a connection on the **Connected platforms** page, and Agent 365 then adds that platform's supported agents to the registry. Amazon Bedrock and Google Vertex AI are among the supported platforms.

The registry also summarises total agents, agents without owners and unmanaged agents (created or managed outside Agent 365). Microsoft Entra holds a narrower view: agents with a Microsoft Entra Agent ID. See [Agent identity](/concepts/agent-identity/) for what that identity grants.

## Why it matters

The registry is where an administrator can see an agent that nobody announced, and a central place to review its block, delete and ownership actions. Checking it helps identify ownerless agents, duplicate entries and unmanaged agents: Microsoft notes that shared agents become ownerless when their creator is deleted from the organisation.

It also decides how far an action reaches. A block applies to the selected agent across the organisation, and user access settings decide who may use agents at all. Read the limits below before treating a block as a full shutdown, and see [Agent and app management](/concepts/app-management/) and [Plugins](/concepts/plugins/) for the neighbouring controls.

## Cost and licensing

Microsoft's pages state different licence conditions for different parts of the registry, so check the one you need.

- **Viewing the inventory.** Microsoft states that viewing all agents in the Microsoft 365 admin center does not require a specific licence. The administrator needs a role such as AI Reader or AI Administrator.
- **Risk signals.** Viewing them requires an E7 or A365 licence in the tenant.
- **Package Management API.** Access requires a Microsoft Agent 365 licence.
- **Agent 365 itself.** It is licensed per user, at least one user must hold a qualifying licence to enable it, and Microsoft 365 E7 includes it. Plans and prices are on Microsoft's Agent 365 pages, which this page does not restate.
- **Connected platforms.** Collecting observability data can incur data access or query charges that the source platform's provider bills.

Controls that apply to agents through Microsoft Entra, such as Conditional Access, need Microsoft Entra Agent ID licensing. Credit meters for the agents themselves are covered in [Copilot Credits](/concepts/copilot-credits/).

## Risks and limits

- **A block is per agent, not per plugin.** If an agent is in a plugin, Microsoft says not to assume the action applies to the plugin package, its skills, shared MCP servers or connections, and that blocking does not necessarily revoke connected-service permissions or credentials. Manage those under **Agents** > **Tools**.
- **A block does not reach every host.** Blocking an agent created with SharePoint only affects its availability in Microsoft Copilot Chat. For Foundry, the agent-actions page says a block affects only Copilot Chat, but Foundry guidance says Block disables the agent for agents created on or after October 23, 2026 at 16:00 UTC; older agents bypass that enforcement through a legacy exception.
- **Duplicate-looking rows are separate records.** Blocking or removing one entry for a Copilot Studio agent does not remove the other.
- **Connected platforms sync by hand.** Agent 365 does not sync on a schedule, and an agent removed from the source platform is not guaranteed to disappear from the registry. Stale entries may remain and need manual removal.
- **Observability collection starts on.** New connections have **Collect agent observability data** enabled by default, which can generate charges at the source platform. The feature is part of the Frontier preview.
- **Delete is recoverable for 30 days; permanent delete is not.** A deleted agent is kept for 30 days and can be restored in that window. Permanently deleting removes the agent and its resources and cannot be undone. For Foundry, separate guidance says governance deletion does not automatically delete Azure resources; infrastructure deletion is a separate action.
- **Reassigning ownership removes the old owner's access.** The previous owner loses all access, including read rights.
- **The inventory lags and has gaps.** Risk counts can be up to an hour behind the security portals, and draft-agent visibility is currently limited to Copilot Studio; drafts from Agent Builder, Foundry and SharePoint are not currently visible.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Blocking or unblocking an agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Preview. Needs Agent 365 licence and delegated CopilotPackages.ReadWrite.All. Acts on the selected agent, not its plugin.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">UI options: All users (the default), No users, Specific users or groups. The preview API supports everyone or noOne only; request details are under the table.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta&amp;preserve-view=true" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Bulk lifecycle rules, such as blocking ownerless agents without usage</strong><br><small>Tenant</small><br><small class="controls__note">Apply template is a one-time bulk operation, not a scheduled rule.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent management rules › Add rule <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connections that sync agents from external platforms into the registry</strong><br><small>Tenant</small><br><small class="controls__note">Agent 365 AI administrator creates the connection; the platform administrator supplies key-based credentials.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Connected platforms › Manage › + Connect a platform <a href="https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Reassigning ownership of an agent</strong><br><small>Agent</small><br><small class="controls__note">Preview. The request body sets userId. UI reassigns only Agent Builder and Copilot Studio shared agents.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Assign new owner <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/reassign</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reassign" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Reading the agent inventory</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. The API needs an Agent 365 licence; least-privileged permission is CopilotPackages.Read.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Microsoft Entra admin roles control access. AI Administrator and Global Administrator can install, modify and approve; Global Reader and AI Reader can view the registry but are not authorised to manage configurations.

**Limits of those roles.** AI Administrators are not authorised to configure Conditional Access or Microsoft Entra access package policies. Managing agent identities needs the Agent ID Administrator role.

**User access API (preview).** The Tenant Configuration Management (TCM) preview supports everyone or noOne, not specific users or groups. The request sets mode to applyOnce and baseline.resources to resourceType microsoft.agent.useraccess, resourceVersion 1, with properties.valueObject.userAssignmentCategory. It needs delegated ConfigurationMonitoring.ReadWrite.All for the calling app, delegated CopilotPolicySettings.ReadWrite for the TCM service principal and AI Administrator for the signed-in user. TCM is available only in the global service.

**Other settings.** The **Agent and plugin access** setting on the Agent settings page controls which types of agents and plugins users can view and install; Microsoft says users still see Microsoft-built agents when it is off but cannot install them. See [Plugins](/concepts/plugins/).

**Preview.** The block and reassign calls are documented under `/beta`, and Microsoft's page says beta APIs are not supported in production applications.

**Audit.** The Microsoft 365 audit log records BlockedAgent, UnblockedAgent, DeletedAgent and UpdatedTenantSettings events. See [Microsoft Purview Audit](/concepts/auditing/).

## What to check

- Open **Agents** > **All agents** > **Registry** and read the totals for agents without owners and unmanaged agents.
- Filter for duplicate-looking entries before blocking, so you act on the right record.
- Review the **User access** setting and confirm whether it is still on its default of all users.
- Review any agent management rules for what they block, reject or reassign before running them.
- List your connected platforms, re-run **Sync agents** before any review, and remove entries for agents deleted at source.

## Open questions

- An API for selecting specific users or groups in User access was not found at the time of writing (November 2026); TCM preview documents everyone and noOne.
- Does Microsoft document an API for the agent management rules settings? None was found at the time of writing (November 2026).
- Does Microsoft document an API for creating or syncing connected platform connections?
- When will the block, unblock and reassign calls move from `/beta` to a supported version?
- How will the Microsoft Entra and Microsoft 365 admin center views of an agent be reconciled when an agent has no Entra Agent ID?

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api / command: POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors can apply the User access setting using the request details below the table. | Found: POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors ... An active applyOnce monitor runs in the background on behalf of the signed-in administrator and then becomes inactive. | Fix: Append to controls[1].note: 'Set mode to applyOnce and baseline.resources to microsoft.agent.useraccess, resourceVersion 1; properties.valueObject.userAssignmentCategory sets everyone or noOne.' The cited create reference and https://learn.microsoft.com/graph/utcm-agent-resources document these fields; the prose already gives them. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta&preserve-view=true
-->
