---
title: "Microsoft Agent 365: the control plane for agents in the admin centre"
slug: "agent-365-control-plane-for-agents"
roadmapId: 558448
topic: "copilot-studio"
products: ["Microsoft Agent 365"]
summary: "Agent 365 is generally available as a per-user licensed control plane that inventories, governs and secures agents from the Microsoft 365 admin centre. Admins decide whether to license and configure it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Microsoft Learn says Agent 365 is licensed per user and is included in Microsoft 365 E7; at least one user must hold a qualifying licence to enable it. Some governance actions are listed as included with Microsoft 365 plans."
audiences: ["m365-admin","security","service-owner","finops"]
tags: ["agent-365","control-plane","agent-registry","agent-governance","agents","m365-admin-center","e7","ownerless-agents","agent-and-plugin-access","mcp","policy","licensing"]
sources:
  - title: "Microsoft 365 Roadmap item 558448"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558448"
    kind: "roadmap"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Policy templates"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/policy-template"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Agent management roles and permissions in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms"
    kind: "learn"
  - title: "Microsoft Agent 365 service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://www.microsoft.com/en-us/microsoft-agent-365"
    kind: "docs"
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","work-iq-agent-policy-governance","mcp","copilot-credits","m365-admin-center-agent-level-pay-as-you-go-controls"]
controls:
  - governs: "Which agents are visible in the tenant-wide agent inventory"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Registry"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages (scope CopilotPackages.Read.All)"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    note: "Read-only inventory. Learn labels the Graph API as preview and says it works with the AI Admin role; the service description lists the Graph API as requiring E7 / G7 or Agent 365."
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "API is beta; requires an Agent 365 licence and the delegated CopilotPackages.ReadWrite.All permission. SharePoint and Foundry agents are blocked only in Microsoft Copilot Chat."
  - governs: "Which policy template is applied to agents when they are activated"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Templates > Add a New Template"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/policy-template"
    api: null
    note: "Applies to new activations only. Custom Entra policies need an Agent 365 licence; Conditional Access and custom security attribute policies need roles beyond AI Administrator."
  - governs: "Which MCP servers agents can use across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Blocking disables all tools on the server. Approving MCP requests needs AI Administrator or Global Administrator and tenant-wide consent."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: licensing now shows the disagreement between Microsoft's pages, controls are re-read and split by agent block, settings, connections and Entra, and registry coverage limits are stated."
  - date: "2026-11-17"
    note: "Corrected after verification: cost rationale now says E7 already includes Microsoft 365 E5 and Agent 365; added the optional delete-permission qualification, the Copilot Studio registry discrepancy, the FAQ prerequisite inconsistency and the observability collection setting on the connections row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 96 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: replaced the unsupported claim that agents keep running as today with the licensing FAQ's registry and premium-capability split, and noted the Copilot Studio page's different registry path."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 107 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "First briefing for this item: Agent 365 is launched; covers per-user licensing, the registry, block, policy template and MCP controls, and their Graph APIs."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 102 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-17"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 102
  confirmed: 98
  unconfirmed: 0
  contradicted: 4
  attempts: 5
  hash: "0c6f06a73c26c650c2466ceea0841741"
---

## What's changing

Agent 365 is Microsoft's control plane for AI agents: one place in the Microsoft 365 admin centre to see, govern and secure agents from Microsoft, partners and your own teams. Microsoft Learn describes four pillars: management, governance, security and business value. The roadmap item describes it as helping IT and security administrators "observe, govern, and secure agents across Microsoft 365 and connected platforms at scale".

In the admin centre, the registry (**Agents** > **All agents** > **Registry**) lists agents and shows who owns each one, with risk signals from Microsoft Defender, Microsoft Entra and Microsoft Purview. Admins can block agents, approve activation requests, reassign owners, apply policy templates, and block MCP servers or individual MCP tools under **Agents** > **Tools**. Several of these controls are only listed against E7 or Agent 365 licences (see Cost and licensing).

The roadmap record shows status Launched, release phase General Availability, target date May CY2026 and Worldwide (Standard Multi-Tenant) as the only cloud. Microsoft Learn says Agent 365 "is generally available for the Commercial segment on a per user basis". The service description's feature table has a GCC availability column that lists some capabilities as available in GCC, which the roadmap record does not show; the two sources differ and this page does not pick one. The roadmap description adds no other detail, and no Message Center post was supplied for this item.

## Why it matters

For a service owner, Agent 365 is where agent inventory, ownership and blocking decisions are made across Copilot Studio, Agent Builder, SharePoint, Foundry and connected non-Microsoft platforms. The registry also counts **Unmanaged agents**, which Learn defines as agents "created or managed outside of Agent 365, without its risk protection and observability", so leaving it unlicensed or unconfigured leaves that exposure in place.

Microsoft has not stated what happens in a tenant on arrival if nobody acts, so this page does not assume that anything is switched on or enforced for you. The decision is yours: whether to license it, for whom, and which controls to configure first. The roadmap item and Learn pages give no admin deadline.

## Risk assessment

**Data exposure**
- The registry shows risk signals from Defender, Entra and Purview in one place, and viewing them requires an E7 or A365 licence. Links into the source portals depend on the viewer's roles: for Purview IRM alerts, Learn names the IRM Analyst or IRM Investigator role.
- The default policy template covers Purview audit, sensitive-information detection and SharePoint site controls, but the SharePoint items need further steps in the SharePoint admin centre and a Microsoft 365 Copilot licence on the tenant.

**Security & identity**
- Learn warns that Microsoft Entra policies on a template might not be enforced at runtime if the agent does not authenticate with its Entra identity. Confirm this with agent developers before relying on Conditional Access or access packages for agents.
- A template that is applied to an agent only takes effect at activation: templates support only new agent activation and cannot be applied to approved agents.
- An AI Administrator cannot configure Conditional Access or access package policies; those need a more privileged role.

**Autonomy & actions**
- Blocking an agent restricts it organisation-wide. For agents built in SharePoint or Microsoft Foundry, Learn says blocking affects only availability in Microsoft Copilot Chat, so blocking is not a complete stop for every agent type.
- Blocking an MCP server disables all its tools; tool-level on/off toggles are rolling out and cover only specific MCP server types registered on Agent 365. See /concepts/mcp/ for how agents reach tools.

**Change & support**
- Activation requests need AI admin approval, so agent makers can wait on an administrator; plan who approves.
- The same Copilot Studio agent can appear in the registry as more than one entry with different publisher types; Learn says this is by design, so expect it when counting agents.

## Cost and licensing

**Licence.** Microsoft Learn says Agent 365 is licensed per user, that it is available as a stand-alone subscription for use with eligible Microsoft 365 subscriptions, and that Microsoft 365 E7 includes it. At least one user must hold a qualifying Agent 365 licence to enable it. Learn also says it works best with Microsoft E5 as a prerequisite.

**Price.** Microsoft's US product page lists Agent 365 at $15.00 user/month, paid yearly (annual commitment), and Microsoft 365 E7 at $99.00 user/month on the same terms. Prices elsewhere or under other agreements are not published in the pages read.

**What each licence unlocks.** The service description's feature table lists the agent registry inventory, basic governance actions, lifecycle rules and external-platform sync as included with Microsoft 365 plans. Policy templates, observability, tenant-wide tool control and the Graph API are listed as requiring Microsoft 365 E7 / G7 or Agent 365. How many users must be licensed for these to work across the tenant is not stated in the pages read.

**Meter and cap.** Learn says Agent 365 cost management shows Copilot Credits by user, group, agent and service, and that you can set spending limits for groups and users. No separate Agent 365 usage meter is described in the pages read; see /concepts/copilot-credits/ for the shared meter.

## Scope

**Users and licences.** Per user; see Cost and licensing. Admin roles come from Microsoft Entra: Global Administrator and AI Administrator can install, modify, approve and manage agent configurations; Security Administrator, Security Reader, Reports Reader and User Experience Success Manager can view registry information but not manage; Global Reader and AI Reader can view it with read-only access to tools and settings.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. The service description lists some capabilities as available in GCC and others not; check the table before planning for a US Government tenant.

**Rollout.** The roadmap shows Launched, General Availability, target May CY2026. The Graph API for the registry and package management is described as preview in places, and some features, such as AI teammates and the Requests tab for MCP servers, are marked preview or Frontier-only.

## Governance guidance

### Before rollout
- Confirm which licences you hold (Agent 365, Microsoft 365 E7) at **Billing** > **Licenses** > **Subscriptions** in the Microsoft 365 admin centre, and decide which users need which capability.
- Assign agent governance to the AI Administrator role rather than Global Administrator where you can, using the roles table.
- Open the agent registry and read the **Unmanaged agents** and **Agents without owners** counts to see where agents sit outside Agent 365.
- Check with your agent developers that agents authenticate with their Entra identity before you rely on Entra-based template policies.

### At rollout
- Review the default policy template and decide whether to add a custom template under **Agents** > **Settings** > **Templates**.
- Decide who approves activation requests and how you scope the audience when you activate an agent.
- Review the MCP servers listed under **Agents** > **Tools** > **Registry**, and block servers you do not intend agents to use.

### After rollout
- Triage the risk column in the registry and share details with your security team.
- Reassign or block agents without owners, for example after a maker leaves.
- Review Copilot Credits spend by agent and group, and the spending limits you have set.
- Re-check the service description's feature table for changes to what each licence includes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which agents are visible in the tenant-wide agent inventory</strong><br><small>Tenant</small><br><small class="controls__note">Read-only inventory. Learn labels the Graph API as preview and says it works with the AI Admin role; the service description lists the Graph API as requiring E7 / G7 or Agent 365.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Registry <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages (scope CopilotPackages.Read.All)</code> <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">API is beta; requires an Agent 365 licence and the delegated CopilotPackages.ReadWrite.All permission. SharePoint and Foundry agents are blocked only in Microsoft Copilot Chat.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which policy template is applied to agents when they are activated</strong><br><small>Tenant</small><br><small class="controls__note">Applies to new activations only. Custom Entra policies need an Agent 365 licence; Conditional Access and custom security attribute policies need roles beyond AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Templates › Add a New Template <a href="https://learn.microsoft.com/microsoft-agent-365/admin/policy-template" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which MCP servers agents can use across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Blocking disables all tools on the server. Approving MCP requests needs AI Administrator or Global Administrator and tenant-wide consent.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These controls are all in the Microsoft 365 admin centre. The registry inventory, block and tool controls are separate: blocking an agent does not necessarily grant or revoke connected-service permissions or credentials, and package approval or blocking is not a separate control for each included skill or MCP server. Learn says agent approval or blocking does not necessarily change the permissions of connected services, which Copilot Studio and Power Platform manage with their own controls.

The Graph package API requires a Microsoft Agent 365 licence, and the block and unblock operations are in beta. The service description's Graph API row has "No" in its GCC column. Policy templates apply only to new activations, and built-in default policies appear locked. Microsoft Learn documents no API for policy templates or for blocking an MCP server at the time of writing (November 2026).

## Open questions

- Which users must be licensed with Agent 365 or E7 for tenant-wide controls such as policy templates and tool control to work for all agents, rather than only for licensed users? Watch the service description and the licensing FAQ.
- What happens in a tenant on arrival if no admin configures Agent 365, and which default policies are enforced without activation? Watch the Learn policy templates page.
- Does the GCC availability shown in the service description match the roadmap's Worldwide-only cloud listing, and what is the date for US Government clouds? Watch the roadmap item.
- Will Microsoft Learn document an API for policy templates and for MCP-server blocking, and will the preview package block API move to v1.0?

<!-- rationale
risk: Medium. Agent 365 is itself a control, but agents created or managed outside it have no Agent 365 risk protection or observability, and several controls rely on other admin centres and licences.
cost: Medium. Microsoft's US pricing page lists Agent 365 at $15.00 per user per month, paid yearly, and Microsoft 365 E7 includes it; which users must hold the licence for each capability is not published in the pages read.
impact: Low. Administrators and security teams use it; end users notice only when an admin blocks, restricts or changes the availability of an agent or tool.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].api; Governance controls; Open questions / absence: Microsoft documents no API for blocking an MCP server. | Found: A package represents an agent or a tool, such as a plugin, MCP server, or skill, in the organization catalog. ... Block, unblock, and reassign ownership of packages. | Fix: Remove the blanket no-API claim and its open question. Replace the row's automation gap with the documented package-level call 'POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block', using the block reference already cited. Qualify the note: 'For an MCP server represented as a catalog package, the beta API blocks that package; this is not evidence that package blocking reproduces every server-component or gateway control.' Cite https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview for MCP package applicability. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview
- [contradicted, blocker] What's changing; Why it matters; Governance guidance: After rollout / behaviour: Administrators can reassign agent owners without an agent-type qualification. | Found: You can only reassign ownership of shared agents for Agent Builder and Copilot Studio agents. You can't reassign ownership of first-party agents, such as system agents or pre-built agents by Microsoft. | Fix: Qualify each ownership-reassignment statement with 'for shared Agent Builder and Copilot Studio agents'. Replace the After rollout bullet with: 'Reassign ownerless shared Agent Builder and Copilot Studio agents, or block affected agents, for example after a maker leaves.' | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, blocker] Cost and licensing; Open questions; rationale: cost / absence: Microsoft has not published which users need licences for tenant-wide premium Agent 365 capabilities. | Found: Users who delegate their access to agents (i.e., OBO agents) will need to be licensed with A365 ... The owner, sponsor or the manager of agents with own access ... will need to be licensed with A365 | Fix: Replace the unpublished-user-licensing statements and the first open question with: 'The licensing FAQ requires Agent 365 for users who delegate access to agents, and for the owner, sponsor or manager of agents operating with their own access. It says licences are required for users who interact with, manage or sponsor agents using premium capabilities; foundational capabilities do not require additional licensing.' In the cost rationale, replace the unpublished clause with 'licensing needs depend on delegated-access users and the owners, sponsors or managers of own-access agents using premium capabilities'. Cite https://www.microsoft.com/licensing/faqs/122. | Source: https://www.microsoft.com/licensing/faqs/122
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Scope: Rollout / availability: The registry article describes its Graph API as preview. | Found: Microsoft Graph API for Agent Registry and Agent Details (preview) | Fix: Retain the attribution to the registry article, but add: 'The Package Management API overview lists List packages and Get package details without preview labels, while update, block, unblock and reassign are marked preview.' Cite https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [supported, minor] controls[2].ui; Governance guidance: At rollout; Governance controls table / admin-path: Templates are created at Agents > Settings > Templates > Add a New Template in Microsoft 365 admin center. | Found: In the navigation pane, expand Agents. Select Settings > Templates > Add a New Template. | Fix: Add the qualification from the same procedure: 'Scenarios for AI templates are in preview and available only for Frontier tenants. Custom policies aren't yet supported.' Do not imply that this preview note changes Agent 365's overall GA status. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/policy-template
- [supported, minor] controls[2].note; Risk assessment: Security & identity; Governance controls / behaviour: Policy templates support only new activation and cannot be applied to already approved agents. | Found: Agent 365 policy templates support only new agent activation. You can't apply the policy to approved agents. | Fix: Replace the unqualified limitation wherever repeated with: 'The Policy templates FAQ says templates support only new activations; the Agent settings page separately documents a one-time Apply template bulk action for existing agent instances with an agent identity, excluding blueprints and AI teammates.' Add https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules to sources. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/policy-template
- [supported, minor] Risk assessment: Security & identity / role: AI Administrators cannot configure Conditional Access or Entra access package policies. | Found: AI Administrators aren't authorized to configure Conditional Access policies or Microsoft Entra access package policies. | Fix: Keep the limitation attributed to Agent actions and add: 'The Policy templates page disagrees for access packages: it says the AI admin can create and apply access packages, while lacking privileges for Conditional Access and custom security attributes.' Both pages are already cited. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [supported, minor] front matter: defaultState; Why it matters; Open questions / absence: Microsoft does not state a single overall arrival or enforcement default for the Agent 365 control plane. | Found: Searched: "Agent 365" "default" "automatically" enable license. Read overview, policy-template, agent-settings and licensing FAQ; component defaults exist, but no single control-plane arrival/enforcement default is stated. | Fix: Keep defaultState unknown, but narrow the Why it matters sentence to: 'Microsoft does not state a single overall arrival default for Agent 365. The Policy templates page says some default policies are automatically enabled and others need configuration; it does not identify a complete enforced baseline for an untouched tenant.'
- [supported, minor] Cost and licensing: Licence / licensing: The overview says Agent 365 works best with Microsoft E5 as a prerequisite. | Found: Microsoft Agent 365 works best when using Microsoft E5 as a pre-requisite. | Fix: After the attributed overview statement, add: 'The licensing FAQ gives formal prerequisites instead: for enterprise customers, Microsoft 365 E5 or Microsoft 365 E3 (or Office 365 E3 plus EMS E3) with both Defender Suite and Purview Suite. Its mixed-license answer is narrower, saying information workers must have E5; these FAQ answers differ. E7 already includes E5 and Agent 365.' Cite https://www.microsoft.com/licensing/faqs/122. | Source: https://learn.microsoft.com/microsoft-agent-365/overview
- [supported, minor] Cost and licensing: What each licence unlocks / licensing: The service description lists lifecycle rules as included with Microsoft 365 plans. | Found: Automate agent lifecycle actions using conditions-based rules | Microsoft 365 Admin Center | Yes | Yes | Yes | Fix: Add: 'The licensing FAQ instead puts Automate agent lifecycle actions in the list requiring Agent 365; Microsoft's pages disagree.' Cite https://www.microsoft.com/licensing/faqs/122. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [supported, minor] Cost and licensing: What each licence unlocks / licensing: The service description lists external-platform registry sync as included with Microsoft 365 plans. | Found: Synchronize agents and agent metadata from external platforms that aren’t managed by Agent 365 into the registry | Microsoft 365 Admin Center | Yes | Yes | Yes | Fix: Add: 'The licensing FAQ instead lists Registry sync as requiring Agent 365; Microsoft's pages disagree.' Cite https://www.microsoft.com/licensing/faqs/122. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist recommends activation audience, ownership reassignment and spending-limit controls with no corresponding table rows. | Found: decide who approves activation requests and how you scope the audience ... Reassign or block agents without owners ... spending limits you have set. Table rows: inventory, agent block, policy templates, MCP server block. | Fix: The activation-audience, ownership-reassignment and spending-limit checklist steps have no corresponding controls-table rows. Do not add rows as part of this correction.
- [supported, minor] Governance controls / availability: The package unblock operation is beta. | Found: APIs under the /beta version are subject to change. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/unblock | Fix: Add the supporting unblock reference to sources: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock
-->
