---
title: "Copilot Studio: discover and use shared plugins from Microsoft's plugin registry"
slug: "microsoft-copilot-studio-discover-and-use-shared-plugins-in-copilot-studio"
roadmapId: 570669
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "The roadmap says Copilot Studio will connect to Microsoft's shared plugin registry so makers can find and use plugins. Learn does not yet describe the feature, its default or its cost; admins should plan who approves plugins."
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
  model: "unknown"
  notes: "Not yet published. The roadmap item and the Learn pages read for this briefing name no licence or meter for discovering or using plugins from Copilot Studio."
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
  - title: "Which connectors and tools makers can use in Copilot Studio agents (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-dlppolicy"
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
      path: "Security > Data and privacy > Data policy > policy > Assign connectors > connector > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Get-DlpPolicy -PolicyName <policy name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-dlppolicy"
    note: "General control: Microsoft has not confirmed it applies to plugins from the registry. The call reads a policy; it does not change it."
  - governs: "Copilot Studio switch for the shared plugin registry connection"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap item 570669, with plugin administration background and the controls Learn documents today."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 54
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "5023f56121a2615620768a28fb39f72e"
---

## What's changing

The roadmap item states that Copilot Studio will connect to Microsoft's shared plugin registry, so that makers can discover and use plugins, connectors and other available capabilities. Microsoft Learn does not describe this Copilot Studio integration at the time of writing (November 2026), so what follows about behaviour is the roadmap's description plus background from neighbouring Learn pages.

The background matters because Learn currently draws a line between the two. It defines a Microsoft 365 Copilot plugin as an installable package that brings together skills, tools and optional agents, and a plugin registry as a destination for plugins published or shared with a selected audience. The Copilot Studio page on adding tools says the tools you add in Copilot Studio belong to your agent and are managed by makers, while a plugin is managed by admins in the Microsoft 365 admin center. Microsoft has not said how plugins found through the registry would appear in the maker experience or how they would be attached to an agent.

The record lists status In development, a target of November CY2026 and a preview date of October CY2026. The release phases are General Availability and Preview, the cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. These dates are Microsoft's targets, not commitments, and the record does not say which phase applies to which dates.

## Why it matters

If this ships as described, makers get a route to plugins that does not start in the Microsoft 365 admin center, while approval of plugins stays there. Learn states that package approval does not replace Power Platform policies, so a service owner has two sets of controls and two sets of administrators to line up before makers start asking for plugins.

Microsoft has not stated what happens on arrival, including whether the registry is visible to every maker or whether an admin must switch it on. No source says existing behaviour changes, so treat this as a capability to review now rather than a change that lands on its own; revisit when Microsoft publishes the Learn page or a Message center post.

## Risk assessment

**Data exposure**
- A plugin can include tools that connect to apps and data, such as Copilot connectors and remote MCP servers. If a maker attaches one to an agent, the agent could reach whatever that connection reaches. Learn says users might still need to sign in, grant consent or configure a connection, and that Power Platform data policies control which tools makers can add in Copilot Studio; whether data policies cover plugins from the registry is not confirmed.

**Security & identity**
- Learn says plugin approval does not replace permissions or connection setup required by connected services, and an approved MCP server becomes available to agent-building surfaces only after Microsoft Entra consent is granted. Which identity Copilot Studio would use for a plugin from the registry has not been stated: confirm it before approving plugins that touch sensitive systems.
- The plugin catalog can include third-party plugins as well as plugins published by Microsoft, so publisher trust is an admin decision.

**Autonomy & actions**
- For tools added in Copilot Studio today, Learn documents generative orchestration as on by default, a new tool as on by default and **Ask the end user before running** as No by default. Whether capabilities taken from the registry behave the same way is not stated.

**Change & support**
- A plugin blocked by organisational settings stays discoverable and shows the message "This plugin is blocked by your organization's policy." Expect makers to raise tickets about plugins they can see but cannot use.
- After an MCP server is approved and consented, Learn says it can take up to 30 minutes to appear in all Copilot Studio environments in the tenant.

## Cost and licensing

Licensing for this feature is not yet published. The roadmap item names no licence or meter, and the Learn page on adding tools to custom agents describes the tool types makers can add without stating a licence for plugins.

The Microsoft Graph Package Management API, which can list and block plugin packages, requires a Microsoft Agent 365 licence according to its reference page; that is a statement about the API, not about makers using plugins in Copilot Studio. Whether plugin use from Copilot Studio is billed in Copilot Credits is not yet published; the meter is explained in /concepts/copilot-credits/. Until then the known cost is admin time for approving plugins and maker time for evaluating them.

## Scope

The roadmap lists Microsoft Copilot Studio, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. Other clouds are not listed on the record; that is a record fact and not a statement that the feature is unavailable there.

Who sees the registry, which licences makers need and whether an admin setting governs it are not yet published. For plugin administration in general, Learn gives the Microsoft 365 admin center as the place to manage plugin availability, and says approving MCP server registration requests needs access to the **Tools** page and the ability to grant tenant-wide consent, which the AI Administrator and Global Administrator roles meet. Learn marks the Copilot Studio tools page as describing agents powered by the standard harness; whether this feature depends on a harness is not stated.

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
<tr><td data-label="Control"><strong>Which connectors and tools makers can use in Copilot Studio agents</strong><br><small>Environment</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to plugins from the registry. The call reads a policy; it does not change it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Assign connectors › connector › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-DlpPolicy -PolicyName &lt;policy name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-dlppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Studio switch for the shared plugin registry connection</strong><br><small>Tenant</small><br><small class="controls__note">No setting documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents plugin administration in the Microsoft 365 admin center, including availability by publisher category under Agents > Settings > Agent and plugin access and per-plugin user availability, alongside block, install and uninstall actions. Whether any of these apply to the Copilot Studio registry connection has not been confirmed, so the table lists only the block action and the data policy as general controls.

Blocking a plugin package blocks its included agents. Associated MCP servers and connectors remain available to other plugins, so a block is not a block on a connector: use data policies for that. Learn says Copilot Studio and Power Platform can have separate controls for their components and connections.

No Copilot Studio switch for the registry connection is documented at the time of writing (November 2026), so the third row records the gap.

## Open questions

- Is the registry connection on for all makers on arrival, or must an admin enable it? Watch the Learn page for Copilot Studio tools and Message center.
- Do the Microsoft 365 admin center plugin controls (block, user availability, publisher category) decide what a maker sees in Copilot Studio?
- Do Power Platform data policies evaluate plugins from the registry, and under which connector or data group?
- Which licence or meter, if any, applies when a maker adds a plugin to an agent, and does it use Copilot Credits?

<!-- rationale
risk: Medium. Plugins can bundle tools that reach apps and data, and makers would be able to find them from Copilot Studio; existing plugin and data policy controls exist, but Microsoft has not confirmed they cover this registry connection.
cost: Low. The only cost the sources show is admin and maker time; no licence or meter for this feature is yet published, so the rating may change once Microsoft publishes licensing.
impact: Medium. Makers in Copilot Studio are the people who would notice, because the roadmap says discovery of plugins and connectors becomes easier for them; end users are not named.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: An existing data policy's connector can be blocked at Security > Data and privacy > Data policy > policy > Assign connectors > connector > Block. | Found: To edit an existing data policy, select the data policy and select Edit Policy. ... Select Next. The Add an environment page appears. ... Select Next. The Assign connectors page appears. ... Select the three dots | Fix: Replace the path in controls[1].ui and the rendered table with 'Security > Data and privacy > Data policy > policy > Edit Policy > Next > Next > Assign connectors > connector > three dots > Block'. The first Next opens Add an environment; the second opens Assign connectors. See https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [contradicted, blocker] Governance controls / applicability: Administrators should use data policies to block the connectors associated with plugin packages generally. | Found: Power Platform connectors refers to Power Platform connectors used as tools in an agent. They don't refer to Copilot connectors. | Fix: Replace 'so a block is not a block on a connector: use data policies for that' with 'so a package block does not necessarily block a connector. Copilot Studio data policies govern Power Platform connectors used as agent tools, not Copilot connectors.' Cite https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [unsupported, blocker] Why it matters / applicability: Approval of plugins discovered through this new Copilot Studio integration stays in the Microsoft 365 admin center. | Found: Searched: "Copilot Studio" "shared plugin registry"; Copilot Studio plugins registry identity authentication data policies supported. Opened /plugins/govern-plugins and /microsoft-agent-365/admin/manage-plugins-skills-mcp-servers; neither states this integration's approval flow. | Fix: Replace 'while approval of plugins stays there' with 'while administrators generally manage plugin access in the Microsoft 365 admin center; Microsoft has not confirmed the approval flow for this Copilot Studio integration'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / behaviour: The Package Management API can list plugin packages as well as block them. | Found: Admin retrieves an inventory of the plugins, MCP servers, and skills in the organization. ... Admin blocks a package to prevent its usage across the organization. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview to sources for the statement that the API can list plugin packages. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
-->
