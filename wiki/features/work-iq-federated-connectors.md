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
version: 2
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
