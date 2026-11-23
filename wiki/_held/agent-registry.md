---
kind: "concept"
title: "Agent registry: which agents does your tenant have, and who can stop them?"
slug: "agent-registry"
summary: "The agent registry is the Microsoft 365 admin center inventory of agents in a tenant, with owners, risk signals and actions to block, install, delete or reassign them. It shows what exists and lets administrators act on it."
created: "2026-11-23"
updated: "2026-11-23"
version: 1
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
    url: "https://learn.microsoft.com/entra/agent-id/identity-platform/agent-registry-convergence"
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
    api: null
    note: "Options: All users (the default), No users, Specific users or groups."
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
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 106
  confirmed: 101
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "a9ef9fdd861a667874def257e639148a"
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

The registry is where an administrator can see an agent that nobody announced, and the one place its block, delete and ownership actions are documented together. Without checking it, ownerless agents, duplicate entries and unmanaged agents stay invisible: Microsoft notes that shared agents become ownerless when their creator is deleted from the organisation.

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
- **A block does not reach every host.** Blocking an agent created with SharePoint or Microsoft Foundry only affects its availability in Microsoft Copilot Chat.
- **Duplicate-looking rows are separate records.** Blocking or removing one entry for a Copilot Studio agent does not remove the other.
- **Connected platforms sync by hand.** Agent 365 does not sync on a schedule, and an agent removed from the source platform is not guaranteed to disappear from the registry. Stale entries stay until someone removes them.
- **Observability collection starts on.** New connections have **Collect agent observability data** enabled by default, which can generate charges at the source platform. The feature is part of the Frontier preview.
- **Delete is recoverable for 30 days; permanent delete is not.** A deleted agent is kept for 30 days and can be restored in that window. Permanently deleting removes the agent and its resources and cannot be undone.
- **Reassigning ownership removes the old owner's access.** The previous owner loses all access, including read rights.
- **The inventory lags and has gaps.** Risk counts can be up to an hour behind the security portals, and only draft agents from Copilot Studio are visible.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Blocking or unblocking an agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Preview. Needs Agent 365 licence and delegated CopilotPackages.ReadWrite.All. Acts on the selected agent, not its plugin.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (the default), No users, Specific users or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Bulk lifecycle rules, such as blocking ownerless agents without usage</strong><br><small>Tenant</small><br><small class="controls__note">Apply template is a one-time bulk operation, not a scheduled rule.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent management rules › Add rule <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connections that sync agents from external platforms into the registry</strong><br><small>Tenant</small><br><small class="controls__note">Agent 365 AI administrator creates the connection; the platform administrator supplies key-based credentials.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Connected platforms › Manage › + Connect a platform <a href="https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Reassigning ownership of an agent</strong><br><small>Agent</small><br><small class="controls__note">Preview. The request body sets userId. UI reassigns only Agent Builder and Copilot Studio shared agents.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Assign new owner <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/reassign</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reassign" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Reading the agent inventory</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. The API needs an Agent 365 licence; least-privileged permission is CopilotPackages.Read.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Microsoft Entra admin roles control access. AI Administrator and Global Administrator can install, modify and approve; Global Reader and AI Reader can view the registry but are not authorised to manage configurations. The Package Management API works with the AI Administrator role.

**Limits of those roles.** AI Administrators are not authorised to configure Conditional Access or Microsoft Entra access package policies. Managing agent identities needs the Agent ID Administrator role.

**Other settings.** The **Agent and plugin access** setting on the Agent settings page controls which types of agents and plugins users can view and install; Microsoft says users still see Microsoft-built agents when it is off but cannot install them. See [Plugins](/concepts/plugins/).

**Preview.** The block and reassign calls are documented under `/beta`, and Microsoft's page says beta APIs are not supported in production applications.

**Audit.** The Microsoft 365 audit log records BlockedAgent, UnblockedAgent, DeletedAgent and UpdatedTenantSettings events. See [Microsoft Purview Audit](/concepts/auditing/).

## What to check

- Open **Agents** > **All agents** > **Registry** and read the totals for agents without owners and unmanaged agents.
- Filter for duplicate-looking entries before blocking, so you act on the right record.
- Review the **User access** setting and confirm whether it is still on its default of all users.
- List who holds AI Administrator and Global Administrator, since those roles can manage agents.
- Review any agent management rules for what they block, reject or reassign before running them.
- List your connected platforms, re-run **Sync agents** before any review, and remove entries for agents deleted at source.
- Search the audit log for BlockedAgent and DeletedAgent to see who has acted on agents.

## Open questions

- Does Microsoft document an API for the **User access** and agent management rules settings? None was found at the time of writing (November 2026).
- Does Microsoft document an API for creating or syncing connected platform connections?
- When will the block, unblock and reassign calls move from `/beta` to a supported version?
- How will the Microsoft Entra and Microsoft 365 admin center views of an agent be reconciled when an agent has no Entra Agent ID?

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Open questions / absence: Microsoft has not documented automation for the tenant User access setting. | Found: These resources also support remediation and applyOnce. ... userAssignmentCategory ... Specifies whether all users or no users can access agents and plugins. ... everyone, noOne | Fix: Replace controls[1].api with graph call 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta&preserve-view=true. Add to the note: 'TCM preview supports everyone or noOne, not specific users or groups. The request sets mode to applyOnce and baseline.resources to resourceType microsoft.agent.useraccess, resourceVersion 1, with properties.valueObject.userAssignmentCategory. Requires delegated ConfigurationMonitoring.ReadWrite.All for the calling app, delegated CopilotPolicySettings.ReadWrite for the TCM service principal, and AI Administrator for the signed-in user; global service only.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Replace the Open questions sentence with 'An API for selecting specific users or groups in User access was not found at the time of writing (November 2026); TCM preview documents everyone and noOne.' | Source: https://learn.microsoft.com/graph/utcm-agent-resources
- [unsupported, major] Why it matters / behaviour: The registry is the one place its block, delete and ownership actions are documented together. | Found: Searched: Microsoft agents block delete ownership management other portals ownerless unmanaged inventory. Read agent-actions, agent-365-overview and results for Power Platform inventory, Copilot Agent Kit inventory and Foundry governance; none states the registry is the only documented place. | Fix: Replace 'and the one place its block, delete and ownership actions are documented together' with 'and a central place to review its block, delete and ownership actions'.
- [unsupported, major] Why it matters / behaviour: Without checking the registry, ownerless agents, duplicate entries and unmanaged agents stay invisible. | Found: Searched: Microsoft agents block delete ownership management other portals ownerless unmanaged inventory. Read agent-registry-overview, agent-365-overview and Entra registry convergence; none says these agents remain invisible unless the registry is checked. | Fix: Replace 'Without checking it, ownerless agents, duplicate entries and unmanaged agents stay invisible' with 'Checking it helps identify ownerless agents, duplicate entries and unmanaged agents'.
- [contradicted, blocker] Risks and limits: The inventory lags / behaviour: Only draft agents from Copilot Studio are visible. | Found: Currently, you can only view draft agents from Copilot Studio. Support for draft agents from other platforms, such Agent Builder, Foundry, and SharePoint, aren't currently available. | Fix: Replace 'only draft agents from Copilot Studio are visible' with 'draft-agent visibility is currently limited to Copilot Studio; drafts from Agent Builder, Foundry and SharePoint are not currently visible'. The source limits which platforms expose drafts, not visibility to drafts alone; agent-registry-overview also documents published Copilot Studio entries. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risks and limits: A block does not reach every host / applicability: Blocking a Microsoft Foundry-created agent only affects availability in Microsoft Copilot Chat. | Found: However, blocking an agent that you created by using SharePoint or Microsoft Foundry only impacts its availability in Microsoft Copilot Chat. | Fix: Replace the Foundry part with 'The agent-actions page says a Foundry block affects only Copilot Chat, but Foundry guidance says Agent 365 Block disables runtime for agents created on or after October 23, 2026 at 16:00 UTC; older agents bypass that enforcement through a legacy exception.' Cite https://learn.microsoft.com/azure/foundry/control-plane/govern-agent-infrastructure-entra-admin alongside agent-actions. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [supported, minor] Risks and limits: Connected platforms sync by hand / behaviour: Stale entries stay until someone removes them. | Found: Deletion reconciliation isn't guaranteed. ... Confirm the current behavior with your platform administrator, and remove the agent from the registry manually if it's no longer needed. | Fix: Replace 'Stale entries stay until someone removes them' with 'Stale entries may remain and need manual removal'. The source describes a lack of guaranteed reconciliation, not a guarantee that every stale entry persists. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms
- [supported, minor] Risks and limits: Delete is recoverable / behaviour: Permanent deletion removes the agent and its associated resources. | Found: Permanently deleting an agent removes the agent and its associated resources and can't be undone. | Fix: Append 'For Foundry, separate guidance says governance deletion does not automatically delete Azure resources; infrastructure deletion is a separate action.' Cite https://learn.microsoft.com/azure/foundry/control-plane/govern-agent-infrastructure-entra-admin. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, minor] What to check; Governance controls table / consistency: Every control the checklist asks readers to take stock of has a corresponding table row. | Found: List who holds AI Administrator and Global Administrator ... Search the audit log for BlockedAgent and DeletedAgent ... The table covers blocking, User access, rules, connections, reassignment and inventory, but not role assignments or audit searches. | Fix: Remove the checklist bullets 'List who holds AI Administrator and Global Administrator, since those roles can manage agents' and 'Search the audit log for BlockedAgent and DeletedAgent to see who has acted on agents'. Their role and audit facts can remain in Governance controls; do not add unverified table rows.
-->
