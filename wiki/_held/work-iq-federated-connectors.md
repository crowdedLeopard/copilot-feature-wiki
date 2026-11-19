---
title: "Work IQ: federated connectors for governed access to more data sources"
slug: "work-iq-federated-connectors"
roadmapId: 570670
topic: "copilot-studio"
products: ["Microsoft Graph","Work IQ"]
summary: "Work IQ will be able to use federated connectors to reach additional enterprise data sources under governance."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Work IQ API access is independent of Microsoft 365 Copilot licensing and uses usage-based billing through Copilot Credits. Connector-backed Microsoft 365 tools have separate connector-specific licensing requirements."
audiences: ["m365-admin","security","service-owner","compliance"]
tags: ["work-iq","federated-connectors","mcp","microsoft-graph","governance"]
sources:
  - title: "Microsoft 365 Roadmap 570670"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570670"
    kind: "roadmap"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "Enabling, disabling or staging a federated connector (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Set up custom federated connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors"
    kind: "learn"
  - title: "Which users may use connectors (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "copilotPackage: unblock"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
  - title: "Allowing or blocking connectors by publisher type (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
videos: []
related: ["work-iq-a2a-and-mcp-long-running-tasks"]
controls:
  - governs: "Enabling, disabling or staging a federated connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Enable / Disable / Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta API: needs Agent 365 licence and CopilotPackages.ReadWrite.All; sets no staged rollout. Existing Copilot Connectors control; also applies through Work IQ APIs."
  - governs: "Allowing or blocking connectors by publisher type"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    api: null
    note: "Existing Microsoft 365 admin-center controls to allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs."
  - governs: "Which users may use connectors"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Existing Microsoft 365 admin-center controls to allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs."
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
    note: "General Work IQ MCP control; Microsoft has not confirmed it applies to federated connectors. The Policy tab shows when available; changes can take up to 24 hours to apply."
  - governs: "Work IQ-specific control for federated connectors"
    scope: "tenant"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-19"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 570670."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Correction: cloud scope now follows the roadmap record, default state is Not stated, Graph block/unblock added for connector availability, and controls are no longer described as portal-only or inherited by Work IQ."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Correction: cost and licensing now follow the documented add-on licence for federated connectors; added the Researcher read-only qualification; removed two checklist steps without a control row."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: Work IQ licensing and cost now follow Learn (usage-based, Copilot Credits); existing connector allow and block controls are stated as applying through Work IQ APIs; the Work IQ participation sentence was replaced."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-19"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 51
  unconfirmed: 0
  contradicted: 4
  attempts: 2
  hash: "4b60a11b91adf57a4d2b5830991add50"
---

## What's changing

Work IQ will be able to use federated connectors for governed access to additional enterprise data sources. The roadmap lists Microsoft Graph and Work IQ as products, with a November 2026 target and In development status. Microsoft has not stated what this capability does on arrival.

Microsoft Learn describes federated Copilot connectors as using Model Context Protocol to fetch data in real time under the user's identity and permissions, without indexing the external data into Microsoft 365. Admins manage them in the Microsoft 365 admin center.

[Learn](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/) now describes connected enterprise sources as participating in Work IQ Copilot, entity and schema tools; connector developers must enable participation in Work IQ APIs. The roadmap still lists this item as In development.

## Why it matters

It widens the systems an agent can reach. Because the source system enforces permissions and data is not copied, governance focuses on which connectors are approved and what write tools they expose.

## Risk assessment

**Data exposure**
- Real-time access to external systems; data is retrieved into responses.

**Security & identity**
- Uses the user's permissions in the source system.

**Autonomy & actions**
- Where connectors provide tools, Copilot can create, update or delete with user approval; new write tools default to Needs approval. The Researcher agent remains read-only. The [Copilot connectors overview](https://learn.microsoft.com/microsoft-365/copilot/connectors/overview#types-of-copilot-connectors) still describes federated connectors as read-only, whereas the [federated connectors overview](https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview) documents write actions.

**Change & support**
- Firewalls for MCP servers may need static egress IP allow-listing.

## Cost and licensing

Federated Copilot connectors require a Microsoft 365 Copilot add-on licence or Microsoft 365 E7 for users querying the source, per the [connectors prerequisites page](https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites). That requirement is scoped to those connectors, not to Work IQ API access.

For Work IQ API access: the [Work IQ overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/) says access is independent of Microsoft 365 Copilot licensing, available through usage-based billing, and consumes Copilot Credits shared with other eligible services. The [Work IQ API overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview#licensing-requirements) likewise says Work IQ API use is paid for through a usage-based model that uses Copilot Credits. The preview [Foundry Work IQ page](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq) distinguishes Work IQ API access through A2A, REST or MCP, which uses Copilot Credits and does not use connector licensing, from connector-backed Microsoft 365 tools, whose connector-specific requirements must be checked.

## Scope

Work IQ experiences using federated connectors. The roadmap lists Worldwide (Standard Multi-Tenant) and the Developer platform.

## Governance guidance

### Before rollout
- List the connectors that Work IQ should reach.
- Review each connector's write tools.

### At rollout
- Approve connectors in the Microsoft 365 admin center; existing controls to allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs.

### After rollout
- Review connector permissions after publisher changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enabling, disabling or staging a federated connector</strong><br><small>Tenant</small><br><small class="controls__note">Beta API: needs Agent 365 licence and CopilotPackages.ReadWrite.All; sets no staged rollout. Existing Copilot Connectors control; also applies through Work IQ APIs.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Enable / Disable / Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowing or blocking connectors by publisher type</strong><br><small>Tenant</small><br><small class="controls__note">Existing Microsoft 365 admin-center controls to allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use connectors</strong><br><small>User</small><br><small class="controls__note">Existing Microsoft 365 admin-center controls to allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">General Work IQ MCP control; Microsoft has not confirmed it applies to federated connectors. The Policy tab shows when available; changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ-specific control for federated connectors</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Existing Microsoft 365 admin-center controls to allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs ([Work IQ overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/)). Microsoft has not confirmed that the Work IQ MCP policy applies to federated connector operations. The listed settings have documented admin-center experiences.

The beta Package Management API can block ([copilotPackage: block](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block)) and unblock (`POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/unblock`, see [copilotPackage: unblock](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock)) packages. The [custom federated connector page](https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors#manage-the-connector) says Block has the same effect as Disable. Both calls need a Microsoft Agent 365 licence and the delegated CopilotPackages.ReadWrite.All permission, and Microsoft does not support beta APIs in production. They do not configure staged rollout. Microsoft Learn documents no automation for staged rollout, publisher-type access or User access at the time of writing (November 2026).

Users approve individual write tools in Copilot Chat; Always allow and Allow for conversation apply to the individual tool, not the whole connector. Purview audit records connector actions.

## Open questions

- Which connectors will be available to Work IQ at launch.
- Availability beyond the Worldwide (Standard Multi-Tenant) cloud the roadmap lists.

<!-- rationale
risk: Medium. Extends agent reach to external systems in real time with the user's identity; write actions may be possible where connectors provide tools.
cost: Variable. Work IQ API usage consumes Copilot Credits; connector-backed Microsoft 365 tools have separate connector-specific licence requirements.
impact: Medium. Affects users of Work IQ-enabled agents and admins who approve connectors.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls: no automation for publisher-type access / absence: Microsoft documents no automation for publisher-type connector access. | Found: These resources also support remediation and applyOnce. areISVAppsAllowed | Write | Boolean areMicrosoftAppsAllowed | Write | Boolean areTenantScopedAppsAllowed | Write | Boolean | Fix: Replace controls[1].api=null with graph call 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Note: 'Preview TCM applyOnce: set mode to applyOnce; baseline.resources uses resourceType microsoft.agent.allowedagenttypes, resourceVersion 1 and properties.valueObject.areMicrosoftAppsAllowed, areTenantScopedAppsAllowed and areISVAppsAllowed for the publisher choices. Requires delegated ConfigurationMonitoring.ReadWrite.All for the caller, delegated CopilotPolicySettings.ReadWrite for the TCM service principal, and AI Administrator for the signed-in user.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Remove publisher-type access from the sentence claiming no automation is documented, and update the rendered table accordingly. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#allowedagenttypes-resource-type
- [contradicted, blocker] controls[2].api; Governance controls: no automation for User access / absence: Microsoft documents no automation for User access. | Found: These resources also support remediation and applyOnce. userAssignmentCategory | Write | String | Specifies whether all users or no users can access agents and plugins. | everyone, noOne | Fix: Replace controls[2].api=null with graph call 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Note: 'Preview TCM applyOnce: set mode to applyOnce; baseline.resources uses resourceType microsoft.agent.useraccess, resourceVersion 1 and properties.valueObject.userAssignmentCategory set to everyone or noOne. This schema documents all-user/no-user choices, not specific-group assignment. Requires delegated ConfigurationMonitoring.ReadWrite.All for the caller, delegated CopilotPolicySettings.ReadWrite for the TCM service principal, and AI Administrator for the signed-in user.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Remove User access from the sentence claiming no automation is documented, and update the rendered table accordingly. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#useraccess-resource-type
- [contradicted, blocker] controls[3].note; Governance controls: MCP policy applicability / absence: Microsoft has not confirmed that Work IQ MCP policy applies to federated connector operations. | Found: A separate tenant policy layer evaluates each tool request and blocks mutation operations by default. For connected data sources, connector paths use call_function for reads and do_action for writes, rather than fetch, create_entity, update_entity, or delete_entity. | Fix: Remove 'Microsoft has not confirmed it applies to federated connectors' from controls[3].note and its rendered note, and remove 'Microsoft has not confirmed that the Work IQ MCP policy applies to federated connector operations.' from the prose. The existing description 'General Work IQ MCP control' can remain. The tool reference https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference explicitly includes connector operations and says each tool request is policy-evaluated; this does not assert that every other Copilot connector experience uses that policy. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks readers to review connector permissions, but no controls-table row describes a connector permission control. | Found: Review connector permissions after publisher changes. | The table covers connector availability, publisher-type access, User access, general Work IQ MCP policy and a missing Work IQ-specific switch, not connector tool permissions. | Fix: Remove the checklist bullet 'Review connector permissions after publisher changes.' It asks the reader to review a permission control that has no controls-table row; do not add a new row as part of this correction.
-->
