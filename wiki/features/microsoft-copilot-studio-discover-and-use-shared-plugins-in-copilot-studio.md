---
title: "Copilot Studio: discover and use shared plugins from Microsoft's plugin registry"
slug: "microsoft-copilot-studio-discover-and-use-shared-plugins-in-copilot-studio"
roadmapId: 570669
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "The roadmap says Copilot Studio will connect to Microsoft's shared plugin registry so makers can find and use plugins. Learn does not yet describe the feature, its default or any registry-specific charge; admins should plan who approves plugins."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Copilot Studio has documented authoring access and Copilot Credits licensing. Any additional charge or licence specific to registry discovery or adding a plugin is not yet published. Agent usage is measured in Copilot Credits under the applicable harness billing rules."
audiences: ["m365-admin","power-platform-admin","maker","security"]
tags: ["copilot-studio","plugins","tools","agent-and-plugin-access","data-policies","agent-governance","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap item 570669"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570669"
    kind: "roadmap"
  - title: "What is a Microsoft 365 Copilot plugin?"
    url: "https://learn.microsoft.com/plugins/overview"
    kind: "learn"
  - title: "Add tools to custom agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Make plugins and agents available and govern access"
    url: "https://learn.microsoft.com/plugins/govern-plugins"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Ways to extend Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview"
    kind: "learn"
  - title: "Whether a plugin package is blocked for users and agents (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
videos: []
related: ["data-policies","mcp","copilot-studio-require-human-approval-for-tool-calls","copilot-credits","copilot-studio-block-maker-provided-credentials"]
controls:
  - governs: "Whether a plugin package is blocked for users and agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > plugin > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta API; needs an Agent 365 licence. General plugin control: Microsoft has not confirmed it applies to the Copilot Studio registry connection."
  - governs: "Which connectors and tools makers can use in Copilot Studio agents"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit Policy > Next > Next > Assign connectors > connector > three dots > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Connectors <connector objects> -Classification Blocked"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "Applies to Copilot Studio agents in environments in scope; covers Power Platform connector tools, not Copilot connectors. The call moves the connectors to Blocked; each needs id, type and name."
  - governs: "Copilot Studio switch for the shared plugin registry connection"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap item 570669, with plugin administration background and the controls Learn documents today."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: data policy path now includes Edit Policy and both Next steps; connector wording narrowed to Power Platform connectors; plugin approval flow no longer asserted for this integration."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: cost statements now limit the unpublished charge to registry-specific costs and state that Copilot Studio agent usage is measured in Copilot Credits."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: licensing model set to mixed with the registry-specific caveat kept; data policy control now uses Add-ConnectorsToPolicy; data policy caveat narrowed to how registry capabilities map to Power Platform connectors."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 83 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 83
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "afda452933014280c5668bfc9485e362"
---

## What's changing

The roadmap item states that Copilot Studio will connect to Microsoft's shared plugin registry, so that makers can discover and use plugins, connectors and other available capabilities. Microsoft Learn does not describe this Copilot Studio integration at the time of writing (November 2026), so what follows about behaviour is the roadmap's description plus background from neighbouring Learn pages.

The background matters because Learn currently draws a line between the two. It defines a Microsoft 365 Copilot plugin as an installable package that brings together skills, tools and optional agents, and a plugin registry as a destination for plugins published or shared with a selected audience. The Copilot Studio page on adding tools says the tools you add in Copilot Studio belong to your agent and are managed by makers, while a plugin is managed by admins in the Microsoft 365 admin center. Microsoft has not said how plugins found through the registry would appear in the maker experience or how they would be attached to an agent.

The record lists status In development, a target of November CY2026 and a preview date of October CY2026. The release phases are General Availability and Preview, the cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. These dates are Microsoft's targets, not commitments, and the record does not say which phase applies to which dates.

## Why it matters

If this ships as described, makers get a route to plugins that does not start in the Microsoft 365 admin center, while administrators generally manage plugin access in the Microsoft 365 admin center; Microsoft has not confirmed the approval flow for this Copilot Studio integration. Learn states that package approval does not replace Power Platform policies, so a service owner has two sets of controls and two sets of administrators to line up before makers start asking for plugins.

Microsoft has not stated what happens on arrival, including whether the registry is visible to every maker or whether an admin must switch it on. No source says existing behaviour changes, so treat this as a capability to review now rather than a change that lands on its own; revisit when Microsoft publishes the Learn page or a Message center post.

## Risk assessment

**Data exposure**
- A plugin can include tools that connect to apps and data, such as Copilot connectors and remote MCP servers. If a maker attaches one to an agent, the agent could reach whatever that connection reaches. Learn says users might still need to sign in, grant consent or configure a connection. Data policies apply to Copilot Studio agents in the environments in scope and govern Power Platform connector tools, not Copilot connectors; how the shared-registry experience maps plugin capabilities to those connectors is not yet documented.

**Security & identity**
- Learn says plugin approval does not replace permissions or connection setup required by connected services, and an approved MCP server becomes available to agent-building surfaces only after Microsoft Entra consent is granted. Which identity Copilot Studio would use for a plugin from the registry has not been stated: confirm it before approving plugins that touch sensitive systems.
- The plugin catalog can include third-party plugins as well as plugins published by Microsoft, so publisher trust is an admin decision.

**Autonomy & actions**
- For tools added in Copilot Studio today, Learn documents generative orchestration as on by default, a new tool as on by default and **Ask the end user before running** as No by default. Whether capabilities taken from the registry behave the same way is not stated.

**Change & support**
- A plugin blocked by organisational settings stays discoverable and shows the message "This plugin is blocked by your organization's policy." Expect makers to raise tickets about plugins they can see but cannot use.
- After an MCP server is approved and consented, Learn says it can take up to 30 minutes to appear in all Copilot Studio environments in the tenant.

## Cost and licensing

No licence or meter specific to this feature is named by the roadmap item, and the Learn page on adding tools to custom agents describes the tool types makers can add without stating a licence for plugins. Any additional charge specific to registry discovery or adding a plugin is not yet published.

Copilot Studio has documented authoring access and Copilot Credits licensing; follow the licensing guidance for the agent harness ([Licensing for agents powered by the standard harness](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing) and [Plan licensing and cost](https://learn.microsoft.com/plugins/cost-considerations#check-product-specific-licensing-and-billing)). Any additional licence specific to registry discovery is not yet published.

Copilot Studio agent usage is measured in Copilot Credits under the applicable harness billing rules and licensing inclusions. Learn describes Copilot Credits as the common currency across Copilot Studio capabilities, and the meter is explained in /concepts/copilot-credits/.

The Microsoft Graph Package Management API, which can list and block plugin packages, requires a Microsoft Agent 365 licence according to its reference page; that is a statement about the API, not about makers using plugins in Copilot Studio. Until Microsoft publishes anything registry-specific, the known incremental cost of this change is admin time for approving plugins and maker time for evaluating them.

## Scope

The roadmap lists Microsoft Copilot Studio, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. Other clouds are not listed on the record; that is a record fact and not a statement that the feature is unavailable there.

Who sees the registry, whether an additional registry-specific licence is needed and whether an admin setting governs it are not yet published. For plugin administration in general, Learn gives the Microsoft 365 admin center as the place to manage plugin availability, and says approving MCP server registration requests needs access to the **Tools** page and the ability to grant tenant-wide consent, which the AI Administrator and Global Administrator roles meet. Learn marks the Copilot Studio tools page as describing agents powered by the standard harness; whether this feature depends on a harness is not stated.

## Governance guidance

### Before rollout
- List the plugins in the Microsoft 365 admin center under Agents > Tools > Plugins and note which are blocked, so you know what makers could meet first (first control row).
- Check which environments are covered by a data policy that classifies the connectors makers use, since Learn says data policies control which tools makers can add in Copilot Studio (second control row).
- Agree between Microsoft 365 admins and Power Platform admins who approves a plugin that makers request, because Learn lists these as separate administration surfaces.

### At rollout
- Have a small group of makers try discovery during the preview and record which plugins appear, which show as blocked and what message they see.
- Confirm in Message center or Learn whether a plugin package blocked in the Microsoft 365 admin center is also blocked from the Copilot Studio registry view; until Microsoft confirms it, do not rely on the first control row for this feature.

### After rollout
- Re-run the data policy list to see whether any policy needs a connector reclassified once plugin-sourced tools are in use (second control row).
- Re-read the Learn pages for plugins and Copilot Studio tools after launch, as Microsoft has not yet documented this integration.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a plugin package is blocked for users and agents</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; needs an Agent 365 licence. General plugin control: Microsoft has not confirmed it applies to the Copilot Studio registry connection.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › plugin › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which connectors and tools makers can use in Copilot Studio agents</strong><br><small>Environment</small><br><small class="controls__note">Applies to Copilot Studio agents in environments in scope; covers Power Platform connector tools, not Copilot connectors. The call moves the connectors to Blocked; each needs id, type and name.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit Policy › Next › Next › Assign connectors › connector › three dots › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Connectors &lt;connector objects&gt; -Classification Blocked</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Studio switch for the shared plugin registry connection</strong><br><small>Tenant</small><br><small class="controls__note">No setting documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents plugin administration in the Microsoft 365 admin center, including availability by publisher category under Agents > Settings > Agent and plugin access and per-plugin user availability, alongside block, install and uninstall actions. Whether any of these apply to the Copilot Studio registry connection has not been confirmed, so the table lists only the block action and the data policy as general controls.

Blocking a plugin package blocks its included agents. Associated MCP servers and connectors remain available to other plugins, so a package block does not necessarily block a connector. Copilot Studio data policies govern Power Platform connectors used as agent tools, not Copilot connectors. How the shared-registry experience maps plugin capabilities to those connectors is not yet documented. Learn says Copilot Studio and Power Platform can have separate controls for their components and connections.

No Copilot Studio switch for the registry connection is documented at the time of writing (November 2026), so the third row records the gap.

## Open questions

- Is the registry connection on for all makers on arrival, or must an admin enable it? Watch the Learn page for Copilot Studio tools and Message center.
- Do the Microsoft 365 admin center plugin controls (block, user availability, publisher category) decide what a maker sees in Copilot Studio?
- How does the shared-registry experience map plugin capabilities to Power Platform connectors and data groups?
- Which additional licence or meter, if any, applies specifically to discovering or adding a plugin from the registry, beyond the Copilot Credits that measure agent usage? Watch the Learn billing pages and Message center.

<!-- rationale
risk: Medium. Plugins can bundle tools that reach apps and data, and makers would be able to find them from Copilot Studio; data policies apply to Copilot Studio agents in scope, but how registry capabilities map to Power Platform connectors is not yet documented.
cost: Low. The only incremental cost the sources show for registry discovery is admin and maker time; any additional charge specific to discovering or adding a plugin is not yet published, so the rating may change once Microsoft publishes it.
impact: Medium. Makers in Copilot Studio are the people who would notice, because the roadmap says discovery of plugins and connectors becomes easier for them; end users are not named.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / behaviour: A plugin blocked by organisational settings stays discoverable. | Found: If a plugin is restricted by organization-level availability settings or by its user availability configuration, users can still discover the plugin in the Copilot channel. | Fix: Replace the sentence's discoverability clause with: 'A plugin restricted by organization-level availability settings or its user availability configuration remains discoverable in the Copilot channel.' Keep this as background, not a claim about the Copilot Studio registry view. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
-->
