---
title: "Microsoft 365 Copilot: SharePoint list as a knowledge source in Agent Builder"
slug: "m365-copilot-sharepoint-list-support-in-agent-builder"
roadmapId: 561920
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Makers can now ground an Agent Builder agent in one SharePoint list of up to 20,000 items. Makers choose it; no admin action is required, but cost depends on the Copilot licence or Copilot Credits billing."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's prerequisites page lists SharePoint data as agent knowledge for Microsoft 365 Copilot licensed users and for Copilot Chat users in tenants with usage-based billing. A rate specific to list grounding is not yet published."
audiences: ["m365-admin","maker","security","finops"]
tags: ["m365-copilot","agent-builder","declarative-agents","sharepoint-lists","knowledge-grounding","usage-based-billing","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 561920"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561920"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Add knowledge sources to an agent in Agent Builder"
    url: "https://learn.microsoft.com/plugins/agent-builder-add-knowledge"
    kind: "learn"
  - title: "Share and manage agents built in Agent Builder"
    url: "https://learn.microsoft.com/plugins/agent-builder-share-manage-agents"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-use-sharepoint-lists-as-a-knowledge-source","m365-copilot-simplified-agent-creation-experience","declarative-agents","knowledge-grounding","sensitivity-labels"]
controls:
  - governs: "Whether an agent grounded in a SharePoint list is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "The beta API is subject to change; Microsoft does not support its use in production applications. Agent approval or blocking does not necessarily grant or revoke connected-service permissions or credentials."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-15T22:55:27"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: one SharePoint list per Agent Builder agent, up to 20,000 items, with licence-dependent cost."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: the blocking note now reflects the agent-actions page, the risk rationale and Restricted Content Discovery question are narrowed, and checklist steps without a controls row were removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 70 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1dbaa3dc438a0baac5ea68e87315f398"
---

## What's changing

Agent Builder in Microsoft 365 Copilot now accepts a SharePoint list as a knowledge source. A maker can ground an agent in structured list data, so users who chat with the agent get answers based on the information in the selected list.

Microsoft's Agent Builder page sets the limits. Each agent can reference one SharePoint list. A list can have a maximum of 20,000 items (rows) and 50 MB of raw text, and if a list exceeds either limit the agent truncates it and notes the truncation in its response. The list's Attachments column is not indexed or used for grounding, and selecting a SharePoint site does not include its lists: the maker has to select the specific list. The roadmap item adds that lookup columns are not yet supported.

A maker adds a list in the **Knowledge** section of the **Configure** tab, either by entering the list's own URL (without query parameters) or by selecting **Recent lists** in the file picker. The list sits alongside other knowledge source types on the same agent.

The roadmap item shows the status as Launched, with a target of June CY2026, for Worldwide (Standard Multi-Tenant), on Desktop and Web, in General Availability. The Microsoft 365 Copilot release notes list the feature under July 29, 2026.

## Why it matters

This puts operational data held in SharePoint lists, such as ticket logs or catalogues, within reach of agents that any maker can build. The change is optional for makers, so nothing reaches users until someone builds and shares an agent on a list. Microsoft's Agent Builder page states that admins cannot disable agent creation in Agent Builder separately while keeping agents enabled, so the practical decisions for administrators are who may use and share agents, which lists hold data that should not be summarised, and how the usage is paid for.

The cost question is the one most likely to surprise: Microsoft's prerequisites page ties SharePoint data as agent knowledge to a Microsoft 365 Copilot licence or to usage-based billing, so agents grounded in lists are not a free extra in a tenant without either.

## Risk assessment

**Data exposure**

- A list's items become source material for answers. Microsoft's Agent Builder page says the agent respects existing permissions and sensitivity labels "for files already uploaded to SharePoint or OneDrive"; the sharing page says that if a user lacks access to a knowledge source, the agent does not include that source's content in a response. How list-level or item-level permissions are applied to list items is not stated, so test with a user who cannot see the list before sharing an agent.
- The agent can read up to 20,000 items and 50 MB of raw text from the list. Check that a list chosen as knowledge holds nothing that should not be summarised for every user the agent is shared with.

**Security & identity**

- Access to an agent and access to its knowledge sources are distinct: Microsoft states that sharing the agent alone does not grant access to all of its source content. The page covers SharePoint and OneDrive files and folders, where an owner can share the selected items with the people the agent is shared with.
- Microsoft's Agent Builder page states that if Restricted SharePoint Search is enabled, you can't use SharePoint as a knowledge source.

**Autonomy & actions**

- No change documented: the page describes the list as grounding for answers and describes no new actions the agent takes on list data.

**Change & support**

- Makers will meet limits that look like faults: truncation above 20,000 items or 50 MB, attachments ignored, lookup columns not yet supported per the roadmap, and a site URL that does not bring its lists. Brief makers on these before agents go to users.
- Blocking is per agent: an agent that proves a problem can be blocked from the Microsoft 365 admin center.

## Cost and licensing

Microsoft's Agent Builder page says knowledge sources and capabilities differ by licence and points to the Microsoft 365 Copilot licensing page and to the agent licensing models on the prerequisites page. That prerequisites page states that users in tenants with Copilot Studio pay-as-you-go billing (consumed as Copilot Credits) and users with Microsoft 365 Copilot licences have access to agents with enhanced capabilities, such as grounding with SharePoint data. Its capability table lists "Custom knowledge: SharePoint data" as not available in Copilot Chat without usage-based billing, and available in Copilot Chat with usage-based billing and in Microsoft 365 Copilot (licensed).

For usage-based billing, the same page says usage billing applies to agents grounded in tenant data, while agents grounded in public data or instructions are free to use.

A credit rate specific to grounding an agent in a SharePoint list is not yet published. Indirect costs are maker time to prepare clean lists and admin time to brief makers and review agents.

## Scope

**Who and where.** The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop and Web as the platforms, in General Availability. Clouds not listed on the roadmap item are not described here as unavailable.

**Who can use it.** Makers building agents in Agent Builder choose the list. People who use the agent need the licence or billing arrangement described under Cost and licensing, and need access to the list for its content to appear in their responses.

**Limits.** One SharePoint list per agent; up to 20,000 items and 50 MB of raw text per list; list attachments not used; lookup columns not yet supported per the roadmap item. An agent can combine the list with other knowledge sources, each with its own limit on the Agent Builder page.

**Prerequisites.** Restricted SharePoint Search must not be enabled, per the Agent Builder page.

## Governance guidance

### Before rollout

- Identify which SharePoint lists hold sensitive or regulated data, and tell makers which lists must not be used as agent knowledge.
- Tell agent owners that SharePoint knowledge requires a Microsoft 365 Copilot licence or tenant usage-based billing, as described under Cost and licensing.

### At rollout

- Brief makers on the documented limits: one list per agent, 20,000 items and 50 MB, attachments ignored, and the list's own URL needed rather than the site URL.
- Ask makers to test each list-grounded agent with a user who does not have access to the list before sharing it, and report the result.

### After rollout

- Review agents in Agents > All agents and block any agent that exposes list content it should not, using the Block action.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent grounded in a SharePoint list is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">The beta API is subject to change; Microsoft does not support its use in production applications. Agent approval or blocking does not necessarily grant or revoke connected-service permissions or credentials.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls table covers blocking an agent that is grounded in a list. Blocking applies to the selected agent across the organisation; Microsoft states that blocking an agent created with Agent Builder affects its availability and functionality in Microsoft Copilot and in other host products such as Outlook and Teams. The Graph call in the table needs a Microsoft Agent 365 licence, as its reference page states.

Two further settings apply to Agent Builder agents in general, not to lists specifically. **User access**, at Microsoft 365 admin center > Agents > Settings > User access, offers All users (the default), No users or Specific users or groups, and Microsoft states that it controls agent and plugin access, not Agent Builder creation independently ([Agent settings](https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings)). **Sharing**, at Agents > Settings > Sharing, controls who can share agents built in Agent Builder with the organisation, and changes apply only to new sharing actions; existing shared agents stay accessible ([Share and manage agents built in Agent Builder](https://learn.microsoft.com/plugins/agent-builder-share-manage-agents)).

No control specific to list knowledge is described: the list's own permissions and the sensitivity of its content are the main boundary.

## Open questions

- How are SharePoint list permissions, including any item-level permissions, applied when an agent answers from a list? Watch the Agent Builder knowledge page on Microsoft Learn.
- Is there a Copilot Credits rate specific to grounding an agent in a SharePoint list, and does it differ from other SharePoint knowledge? Watch the Copilot Credits and prerequisites pages.
- When will lookup columns be supported? The roadmap item says they are not yet available and gives no date.
- Microsoft's Manage access to agents in SharePoint page says that once a site is flagged with restricted content discovery, users don't have access to use the ready-made agent, create new agents, or add content from that site to any other agents. Does this restriction also block the list picker in Agent Builder? Watch the Restricted Content Discovery page on Microsoft Learn.

<!-- rationale
risk: Medium. Makers can point an agent at a list's contents. Microsoft's knowledge page explicitly describes existing permissions for SharePoint and OneDrive files but does not separately explain list-level or item-level enforcement, so test before sharing widely.
cost: Variable. Microsoft's prerequisites page says users with a Microsoft 365 Copilot licence, or in tenants with pay-as-you-go billing (Copilot Credits), can use SharePoint data as agent knowledge; a rate for list grounding is not yet published.
impact: Medium. Makers who build agents see a new knowledge option, and anyone using an agent grounded in a list gets answers drawn from it; admins see no new setting.
-->
