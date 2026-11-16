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
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for Work IQ. Federated connector licensing may apply per Learn."
audiences: ["m365-admin","security","service-owner","compliance"]
tags: ["work-iq","federated-connectors","mcp","microsoft-graph","governance"]
sources:
  - title: "Microsoft 365 Roadmap item 570670"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570670"
    kind: "roadmap"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Enabling, disabling or staging a federated connector (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Allowing or blocking connectors by publisher type (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    kind: "learn"
  - title: "Which users may use connectors (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
videos: []
related: ["m365-copilot-federated-connectors-write-update-delete","copilot-studio-mcp-tools-in-agents","agent-365-control-plane-for-agents"]
controls:
  - governs: "Enabling, disabling or staging a federated connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Enable / Disable / Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
  - governs: "Allowing or blocking connectors by publisher type"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    api: null
  - governs: "Which users may use connectors"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
  - governs: "Work IQ-specific control for federated connectors"
    scope: "tenant"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 570670."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 35
  unconfirmed: 2
  contradicted: 5
  attempts: 1
---

## What's changing

Work IQ will be able to use federated connectors for governed access to additional enterprise data sources. The roadmap lists Microsoft Graph and Work IQ as products, with a November 2026 target and In development status.

Microsoft Learn describes federated Copilot connectors as using Model Context Protocol to fetch data in real time under the user's identity and permissions, without indexing the external data into Microsoft 365. Admins manage them in the Microsoft 365 admin center.

How Work IQ will surface them is not described in detail.

## Why it matters

It widens the systems an agent can reach. Because the source system enforces permissions and data is not copied, governance focuses on which connectors are approved and what write tools they expose.

## Risk assessment

**Data exposure**
- Real-time access to external systems; data is retrieved into responses.

**Security & identity**
- Uses OAuth 2.0 and the user's permissions in the source system.

**Autonomy & actions**
- Where connectors provide tools, Copilot can create, update or delete with user approval; new write tools default to Needs approval.

**Change & support**
- Firewalls for MCP servers may need static egress IP allow-listing.

## Cost and licensing

Not yet published for Work IQ. Connector-specific licences may apply for the signed-in user, and Work IQ API use can need Copilot Credits billing.

## Scope

Work IQ experiences using federated connectors. Cloud scope is not stated in the roadmap record.

## Governance guidance

### Before rollout
- List the connectors that Work IQ should reach.
- Review each connector's write tools.

### At rollout
- Approve connectors in the Microsoft 365 admin center.
- Keep write tools on Needs approval.

### After rollout
- Audit activity in Microsoft Purview.
- Review connector permissions after publisher changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enabling, disabling or staging a federated connector</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Enable / Disable / Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowing or blocking connectors by publisher type</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use connectors</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ-specific control for federated connectors</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Federated connector governance is portal-only and lives with the Microsoft 365 Copilot connector settings; Work IQ inherits whatever is enabled there. Write tools on a connector are approved by users per connector in Copilot Chat, which is not an admin control. Purview audit records connector actions. See the [federated connectors briefing](/features/m365-copilot-federated-connectors-write-update-delete/) for the connector-side detail.

## Open questions

- Which connectors will be available to Work IQ at launch.
- Whether existing connector approvals carry over.
- Cloud availability.

<!-- rationale
risk: Medium. Extends agent reach to external systems in real time with the user's identity; write actions may be possible where connectors provide tools.
cost: Variable. Connector licensing and Work IQ API credits may apply; specifics are not yet published for this item.
impact: Medium. Affects users of Work IQ-enabled agents and admins who approve connectors.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Scope; Open questions: Cloud availability / record: Cloud scope is not stated in the roadmap record. | Found: "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Replace the Scope sentence with 'The roadmap lists Worldwide (Standard Multi-Tenant) and the Developer platform.' Narrow the open question to availability beyond that listed cloud, without implying other clouds are excluded.
- [unsupported, blocker] front matter: defaultState / default: Nobody can use Work IQ federated connectors until an administrator opts in. | Found: Searched: Work IQ federated connectors licensing default enabled controls API PowerShell policy; "federated connectors" "Work IQ" "default" "enabled". Opened federated-connectors-overview, manage-federated-connectors, policy-governance-mcp and api-overview; none states this feature's default. | Fix: Set defaultState to 'unknown'. State that Microsoft has not stated the arrival default for this roadmap capability; do not infer it from existing connector settings or other Work IQ experiences.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / absence: Specific licensing for this Work IQ federated-connectors roadmap capability has not yet been published. | Found: Searched: "federated connectors" "Work IQ" licensing availability configuration. Read roadmap, federated-connectors-overview and api-overview; Foundry prerequisites excerpts distinguish API billing from connector licensing but do not specify this roadmap capability's licensing. | Fix: Keep licensing.model 'unknown' for this specific roadmap capability, but replace 'Not yet published for Work IQ' with 'Specific licensing for this roadmap capability is not yet published; Work IQ API usage already has published Copilot Credits billing.'
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Connector-backed tools can have connector-specific licensing requirements for the signed-in user. | Found: Confirm the selected connector's prerequisites. A connector can require a Microsoft 365 Copilot license for each calling user. | Fix: Add the Foundry Work IQ page to sources and identify this as background from its preview integration documentation, not a confirmed licensing rule for the new federated-connectors roadmap capability. | Source: https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#prerequisites
- [supported, minor] Cost and licensing; rationale: cost / cost: Work IQ API use can require Copilot Credits billing. | Found: You pay for use of the Work IQ API through a usage-based model that uses Copilot Credits. | Fix: Add the Work IQ API overview to sources. Describe the API billing rule as published background, separately from the still-unpublished commercial details of this roadmap capability. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview#licensing-requirements
- [supported, minor] controls[3].ui; Governance controls: fourth table row / admin-path: Tenant-level Work IQ MCP policy can be switched on or off at Agents > Tools > Work IQ MCP > Policy. | Found: In the left navigation, select Agents > Tools. ... In the tools registry, select Work IQ MCP. ... On the Work IQ MCP details pane, select the Policy tab when it's available. | Fix: Add a note that the Policy tab is available only in tenants with access and appropriate admin permissions; saved policy changes can take up to 24 hours. Keep this as a general Work IQ MCP control unless federated-connector applicability is documented. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center
- [contradicted, blocker] controls[0].api; Governance controls: first table row / absence: No automation is documented for individual federated connector availability. | Found: Block a Copilot package to prevent its usage. ... POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Narrow the null to staged rollout, rather than all availability operations. The package API overview covers MCP servers and plugins; custom-federated-connector guidance says Block has the same effect as Disable. Document POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block and the corresponding /unblock operation for supported connector packages, citing the block/unblock references and noting Microsoft Agent 365 licensing, delegated CopilotPackages.ReadWrite.All and no production support for beta. Do not claim these APIs configure staged rollout. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [unsupported, blocker] Governance controls: notes and controls[0..3] applicability / applicability: Work IQ inherits existing Microsoft 365 Copilot connector enablement and the listed general controls govern this new capability. | Found: Searched: "Work IQ" "federated" "connectors" "governance"; Work IQ federated connectors licensing default enabled controls API PowerShell policy. Read roadmap, connector overview, management and MCP policy pages; none confirms inherited enablement or these controls for this roadmap capability. | Fix: Replace 'Work IQ inherits whatever is enabled there' with 'These are existing Copilot connector and Work IQ MCP controls; Microsoft has not confirmed how they apply to this roadmap capability.' Add that qualification to the control notes. Retain the approval carry-over open question; the current definite inheritance claim conflicts with it.
- [contradicted, blocker] Governance controls: notes / absence: Federated connector governance is portal-only. | Found: A package represents an agent or a tool, such as a plugin, MCP server, or skill, in the organization catalog. ... Block, unblock, and reassign ownership of packages. | Fix: Remove 'portal-only'. Say that the listed settings have documented admin-center experiences; beta Package Management APIs can block/unblock supported connector packages, while automation for publisher-type settings, User access and staged rollout was not found. Cite the package overview and block/unblock references without implying blanket API support for all settings. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls table / consistency: The checklist's connector tool-review and Needs approval controls are represented in the controls table. | Found: Review each connector's write tools. ... Keep write tools on Needs approval. The table contains connector availability, publisher type, User access, Work IQ MCP policy and an undocumented dedicated control, but no tool-permission row. | Fix: Add a user-scope row for Copilot Chat > ... > Settings > Sources > connector > Tools > Write/Delete tools, citing the connector overview. Explain that users set Needs approval per tool or group; the admin checklist should communicate this choice rather than imply an enforceable administrator setting.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist's audit control is represented in the controls table. | Found: Audit activity in Microsoft Purview. The controls table has no audit row. | Fix: Add a row governing connector activity auditing. The connector overview confirms Purview auditing but does not give a navigation path or automation call; do not invent either. Name the audit capability in the notes until an exact control reference is available.
-->
