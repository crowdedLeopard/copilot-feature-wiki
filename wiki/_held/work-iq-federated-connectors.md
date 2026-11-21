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
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
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
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview TCM applyOnce: mode applyOnce; resourceType microsoft.agent.allowedagenttypes; valueObject areMicrosoftAppsAllowed, areTenantScopedAppsAllowed, areISVAppsAllowed. Needs AI Administrator."
  - governs: "Which users may use connectors"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview TCM applyOnce: mode applyOnce; resourceType microsoft.agent.useraccess; valueObject userAssignmentCategory everyone or noOne, not specific groups. Needs AI Administrator."
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
    note: "General Work IQ MCP control. The Policy tab shows when available; changes can take up to 24 hours to apply."
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
  - date: "2026-11-19"
    note: "Correction: publisher-type access and User access now show their preview Graph applyOnce automation; the unconfirmed Work IQ MCP policy caveat and a checklist step without a control row were removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-21"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 53
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "b2289f9fee5a2a2d132350e204376846"
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enabling, disabling or staging a federated connector</strong><br><small>Tenant</small><br><small class="controls__note">Beta API: needs Agent 365 licence and CopilotPackages.ReadWrite.All; sets no staged rollout. Existing Copilot Connectors control; also applies through Work IQ APIs.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Enable / Disable / Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowing or blocking connectors by publisher type</strong><br><small>Tenant</small><br><small class="controls__note">Preview TCM applyOnce: mode applyOnce; resourceType microsoft.agent.allowedagenttypes; valueObject areMicrosoftAppsAllowed, areTenantScopedAppsAllowed, areISVAppsAllowed. Needs AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users may use connectors</strong><br><small>User</small><br><small class="controls__note">Preview TCM applyOnce: mode applyOnce; resourceType microsoft.agent.useraccess; valueObject userAssignmentCategory everyone or noOne, not specific groups. Needs AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">General Work IQ MCP control. The Policy tab shows when available; changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ-specific control for federated connectors</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Existing Microsoft 365 admin-center controls to allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs ([Work IQ overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/)). The listed settings have documented admin-center experiences.

The beta Package Management API can block ([copilotPackage: block](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block)) and unblock (`POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/unblock`, see [copilotPackage: unblock](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock)) packages. The [custom federated connector page](https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors#manage-the-connector) says Block has the same effect as Disable. Both calls need a Microsoft Agent 365 licence and the delegated CopilotPackages.ReadWrite.All permission, and Microsoft does not support beta APIs in production. They do not configure staged rollout. Microsoft Learn documents no automation for staged rollout at the time of writing (November 2026).

Publisher-type access and User access can be set through the preview Tenant Configuration Management applyOnce operation, which the [Agent resources page](https://learn.microsoft.com/graph/utcm-agent-resources) documents for `microsoft.agent.allowedagenttypes` and `microsoft.agent.useraccess`. The caller needs delegated ConfigurationMonitoring.ReadWrite.All, the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs the AI Administrator role ([applyOnce resources](https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources)). The User access schema documents everyone or noOne choices, not specific-group assignment.

Users approve individual write tools in Copilot Chat; Always allow and Allow for conversation apply to the individual tool, not the whole connector. Purview audit records connector actions.

## Open questions

- Which connectors will be available to Work IQ at launch.
- Availability beyond the Worldwide (Standard Multi-Tenant) cloud the roadmap lists.

<!-- rationale
risk: Medium. Extends agent reach to external systems in real time with the user's identity; write actions may be possible where connectors provide tools.
cost: Variable. Work IQ API usage consumes Copilot Credits; connector-backed Microsoft 365 tools have separate connector-specific licence requirements.
impact: Medium. Affects users of Work IQ-enabled agents and admins who approve connectors.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; What's changing / default: Microsoft has not stated what Work IQ federated connector participation does on arrival. | Found: Copilot Connectors configured in Microsoft 365 Copilot automatically participate in Work IQ APIs. ... Connector access is enabled by default. | Fix: Set defaultState to on. Replace 'Microsoft has not stated what this capability does on arrival.' with 'Microsoft documents connector access as enabled by default: configured connectors participate when available to the signed-in user and connected by that user in Copilot Chat; Work IQ must be enabled for the organisation.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis
- [contradicted, blocker] controls[4].ui and controls[4].api; Governance controls table / absence: Microsoft has not documented a Work IQ-specific control for federated connectors on either surface. | Found: Work IQ MCP provides Rego-based policy governance to control access to connectors through Work IQ APIs. ... Administrators can explicitly enable or disable connector participation in Work IQ paths through tenant-level policies. | Fix: Remove the both-null 'Work IQ-specific control for federated connectors' row. In the existing Work IQ MCP policy row's note, replace 'General Work IQ MCP control.' with 'Tenant policy can explicitly enable or disable connector participation in Work IQ paths.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis; keep the verified Policy path and the null automation side. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: Connector developers must enable participation in Work IQ APIs. | Found: Connector developers must enable participation in Work IQ APIs. | Fix: The Learn search excerpt supports this wording, but the opened overview now links to https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis, which says participation is automatic. Replace the developer-enablement clause with 'Copilot Connectors configured in Microsoft 365 Copilot automatically participate in Work IQ APIs; participation may be limited by data sensitivity requirements or partner agreements.' Cite that page. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
- [contradicted, minor] Governance guidance: Before rollout / consistency: The instruction to review each connector's write tools has a corresponding controls-table row. | Found: Checklist: 'Review each connector's write tools.' Table: connector enable/disable/staging, publisher-type access, User access, Work IQ MCP policy and an undocumented Work IQ-specific connector control; no row covers reviewing write tools. | Fix: Remove the Before rollout bullet 'Review each connector's write tools.' It instructs a control review with no corresponding table row; do not add a row.
-->
