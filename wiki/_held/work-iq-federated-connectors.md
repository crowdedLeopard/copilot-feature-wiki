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
  model: "unknown"
  notes: "Specific licensing for this roadmap capability is not yet published; Work IQ API usage already has published Copilot Credits billing."
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
    note: "Beta API: needs Agent 365 licence and CopilotPackages.ReadWrite.All; sets no staged rollout. Existing connector control; applicability to this capability not confirmed."
  - governs: "Allowing or blocking connectors by publisher type"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    api: null
    note: "Existing Copilot connector control; Microsoft has not confirmed how it applies to this roadmap capability."
  - governs: "Which users may use connectors"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Existing Copilot connector control; Microsoft has not confirmed how it applies to this roadmap capability."
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
updated: "2026-11-16"
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
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 44
  unconfirmed: 0
  contradicted: 4
  attempts: 2
  hash: "a4ce21a1f26b45b4914e671ba61e2924"
---

## What's changing

Work IQ will be able to use federated connectors for governed access to additional enterprise data sources. The roadmap lists Microsoft Graph and Work IQ as products, with a November 2026 target and In development status. Microsoft has not stated what this capability does on arrival.

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

Specific licensing for this roadmap capability is not yet published. As background, the [Work IQ API overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview#licensing-requirements) says Work IQ API use is paid for through a usage-based model that uses Copilot Credits. The preview [Foundry Work IQ page](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq) says a connector can require a Microsoft 365 Copilot licence for each calling user. Neither is a confirmed rule for this roadmap capability.

## Scope

Work IQ experiences using federated connectors. The roadmap lists Worldwide (Standard Multi-Tenant) and the Developer platform.

## Governance guidance

### Before rollout
- List the connectors that Work IQ should reach.
- Review each connector's write tools.

### At rollout
- Approve connectors in the Microsoft 365 admin center, an existing control whose application to this capability Microsoft has not confirmed.
- Keep write tools on Needs approval.

### After rollout
- Audit activity in Microsoft Purview.
- Review connector permissions after publisher changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enabling, disabling or staging a federated connector</strong><br><small>Tenant</small><br><small class="controls__note">Beta API: needs Agent 365 licence and CopilotPackages.ReadWrite.All; sets no staged rollout. Existing connector control; applicability to this capability not confirmed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Enable / Disable / Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowing or blocking connectors by publisher type</strong><br><small>Tenant</small><br><small class="controls__note">Existing Copilot connector control; Microsoft has not confirmed how it applies to this roadmap capability.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use connectors</strong><br><small>User</small><br><small class="controls__note">Existing Copilot connector control; Microsoft has not confirmed how it applies to this roadmap capability.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">General Work IQ MCP control; Microsoft has not confirmed it applies to federated connectors. The Policy tab shows when available; changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ-specific control for federated connectors</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These are existing Copilot connector and Work IQ MCP controls; Microsoft has not confirmed how they apply to this roadmap capability. The listed settings have documented admin-center experiences.

The beta Package Management API can block ([copilotPackage: block](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block)) and unblock (`POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/unblock`, see [copilotPackage: unblock](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock)) packages. The [custom federated connector page](https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors#manage-the-connector) says Block has the same effect as Disable. Both calls need a Microsoft Agent 365 licence and the delegated CopilotPackages.ReadWrite.All permission, and Microsoft does not support beta APIs in production. They do not configure staged rollout. Microsoft Learn documents no automation for staged rollout, publisher-type access or User access at the time of writing (November 2026).

Write tools on a connector are approved by users per connector in Copilot Chat, which is not an admin control. Purview audit records connector actions.

## Open questions

- Which connectors will be available to Work IQ at launch.
- Whether existing connector approvals carry over.
- Availability beyond the Worldwide (Standard Multi-Tenant) cloud the roadmap lists.

<!-- rationale
risk: Medium. Extends agent reach to external systems in real time with the user's identity; write actions may be possible where connectors provide tools.
cost: Variable. Work IQ API usage is billed in Copilot Credits; licensing for this roadmap capability is not yet published.
impact: Medium. Affects users of Work IQ-enabled agents and admins who approve connectors.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Licensing is wholly unpublished for this capability, with existing connector licensing presented only as an unconfirmed possible rule. | Found: Federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on license (or Microsoft 365 E7). They aren't supported with Copilot Studio licenses or Microsoft 365 Copilot pay-as-you-go. | Fix: Replace the blanket gap with: 'Existing federated Copilot connectors require a Microsoft 365 Copilot add-on licence or Microsoft 365 E7 for users querying the source. Microsoft has not published whether this Work IQ capability changes those requirements.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites. Set licensing.model to 'add-on' and make the notes state this existing requirement and the narrower Work IQ-specific gap; retain Work IQ API billing as separately labelled background. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: The variable cost rating describes a confirmed meter for this roadmap capability. | Found: cost: 'variable'; rationale: 'Work IQ API usage is billed in Copilot Credits'; Cost and licensing: 'As background' and 'Neither is a confirmed rule for this roadmap capability.' | Fix: Do not infer this capability's meter from background API pricing. Set cost to 'medium' on the documented existing per-user federated connector licensing and replace the rationale with 'Medium. Existing federated Copilot connectors require a Microsoft 365 Copilot add-on licence or Microsoft 365 E7 for querying users; Work IQ-specific changes to those requirements are not yet published.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions; rationale: risk / behaviour: Where a connector supplies the tools, Copilot can create, update or delete data with user approval. | Found: Can read data and, where a connector provides the tools, create, update, or delete data with the user's approval. Admins can audit activity in Microsoft Purview. | Fix: Add the qualification: 'The Researcher agent remains read-only.' Also acknowledge that https://learn.microsoft.com/microsoft-365/copilot/connectors/overview#types-of-copilot-connectors still describes federated connectors as read-only, whereas the cited federated overview documents write actions. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, minor] Governance controls: final paragraph; Governance guidance: After rollout / consistency: The governance checklist's Purview audit step has a corresponding control row. | Found: Governance guidance: 'Audit activity in Microsoft Purview.' The five controls rows cover connector availability, publisher access, User access, Work IQ MCP policy and a dedicated-control gap; none covers audit. | Fix: Remove the checklist bullet 'Audit activity in Microsoft Purview.' The prose statement about existing connector auditing can remain: the cited federated overview says 'Admins can audit activity in Microsoft Purview.'
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's instruction to keep write tools on Needs approval has a corresponding control row. | Found: Governance guidance: 'Keep write tools on Needs approval.' Governance controls: 'Write tools on a connector are approved by users ... which is not an admin control.' No row covers those user-side settings. | Fix: Remove 'Keep write tools on Needs approval' from the administrator checklist. Retain the prose explaining that approvals are user-managed; do not imply that administrators enforce the user's approval preference.
-->
