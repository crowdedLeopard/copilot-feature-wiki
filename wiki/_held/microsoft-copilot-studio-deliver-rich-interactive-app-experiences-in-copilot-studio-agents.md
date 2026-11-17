---
title: "Copilot Studio: interactive MCP apps render inside agent conversations"
slug: "microsoft-copilot-studio-deliver-rich-interactive-app-experiences-in-copilot-studio-agents"
roadmapId: 570433
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio agents are planned to show MCP server UI inside chat. Makers get it by connecting a server that declares a UI. No admin switch is documented; general MCP server controls exist, but Microsoft has not confirmed they apply to app calls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft Copilot harness experiences consume Copilot Credits for LLM tokens, tools including MCPs, and the harness. A separate MCP app-rendering rate is not documented."
audiences: ["power-platform-admin","m365-admin","maker","security"]
tags: ["copilot-studio","mcp","mcp-server","tools","extensibility","agents","user-experience","data-policies","agent-and-plugin-access"]
sources:
  - title: "Microsoft 365 Roadmap 570433"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570433"
    kind: "roadmap"
  - title: "Use MCP apps in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/mcp-apps"
    kind: "learn"
  - title: "Add a Model Context Protocol (MCP) server to your agent as a tool (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-mcp-server"
    kind: "learn"
  - title: "Extend your agent with Model Context Protocol"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Add tools to custom agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Overview of the Tools page in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-tools-overview"
    kind: "learn"
  - title: "Get-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-dlppolicy?view=pa-ps-latest"
    kind: "learn"
videos: []
related: ["mcp","data-policies","copilot-studio-require-human-approval-for-tool-calls","copilot-credits"]
controls:
  - governs: "Whether an MCP server is available to agents across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Blocking a server disables all its tools. Effects on dependent plugins and connectors depend on the management route. General control: not stated to apply to MCP apps."
  - governs: "Which individual tools on a supported MCP server are enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Tools > Enabled or Disabled toggle > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Rolling out; supports only specific MCP server types registered on Agent 365. General control: not stated to apply to MCP apps."
  - governs: "Approval of MCP servers that developers register"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Requests (preview) > request > Approve or Reject"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Needs AI Administrator or Global Administrator. Entra consent is a separate step after approval."
  - governs: "Which connectors, and so MCP server tools, makers can use in Copilot Studio"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Next > Next > connector > three dots (⋮) > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Get-DlpPolicy"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-dlppolicy?view=pa-ps-latest"
    note: "General control: the page does not mention MCP apps. Get-DlpPolicy lists the tenant's policies; it does not block anything."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-17"
    note: "First briefing for this roadmap item: MCP apps in Copilot Studio, the controls that govern the MCP servers behind them, and the licensing gap."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the check: licensing is consumption and cost is variable (Copilot Credits for MCP tools), data policy path adds the three dots step, and MCP app tool-control applicability is stated as unconfirmed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 75
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "6ae4050e5fdd06ef9c7d8886ec84c1d0"
---

## What's changing

Copilot Studio agents are planned to render interactive interfaces inline when they call a tool on a compatible MCP server. The roadmap item describes sortable tables and drilldowns shown in the conversation, using MCP Apps, an extension of the Model Context Protocol (MCP, the standard for exposing tools to an agent). It also describes a plain-text fallback for surfaces that cannot render the UI.

Microsoft Learn already has a page, "Use MCP apps in Copilot Studio". It says the server provides the app and the host renders it in the conversation. It states that MCP apps are supported in Microsoft 365 Copilot and Copilot Studio preview chat, and not in Teams or web chat. The roadmap item lists the platform as Web, so confirm which surfaces apply before you promise users anything.

Connecting an MCP server alone does not create an app. Learn says the server must declare a UI resource for a tool, in `_meta.ui.resourceUri`, and return HTML with the MIME type `text/html;profile=mcp-app`. The roadmap's wording that makers get this "simply by connecting a compliant MCP server" therefore depends on the server author. Learn also lists unsupported capabilities, including file download requests and MCP logging notifications.

The roadmap item is In development, with a preview target of October CY2026 and a General Availability target of November CY2026. Both are Microsoft's targets, for Worldwide (Standard Multi-Tenant) only.

## Why it matters

This changes what an MCP server can put in front of your users. With MCP apps, a server's own HTML is rendered inside the conversation and can call back into that server. That moves part of the user experience, and part of the trust decision, to whoever operates the MCP server.

The sources do not describe an admin switch for MCP apps themselves, so the practical control point is which MCP servers makers can connect. If nobody governs that today, a maker can add a UI-enabled server and users will see its interface. Microsoft has not stated a tenant-level default for the feature beyond the roadmap description.

## Risk assessment

**Data exposure**
- The app can call tools and read resources on its configured MCP server, and `ui/update-model-context` can add content from the app to the agent's context, subject to runtime limits. Review what each server's tools return before enabling it.
- Learn says the host renders the app in a sandboxed, cross-origin iframe with content security policy restrictions, and that undeclared external domains are blocked. Check the `connectDomains` and `resourceDomains` a server declares.

**Security & identity**
- Learn says the app has no direct access to the host page or credentials, and that tool calls and resource reads remain subject to the connection, authentication and runtime checks. Which identity those calls run under is not described for this feature; confirm it before approving a server.
- Learn says that when you connect to a non-Microsoft product, including an external MCP server, you are responsible for the tools and resources you access from Copilot Studio.

**Autonomy & actions**
- An app can call `tools/call` and send messages to the conversation with `ui/message`, so a tool that writes or deletes can be triggered from the UI as well as by the agent. Use tool-level controls where your servers support them.

**Change & support**
- Learn warns that a resource-read failure can prevent the UI appearing without changing an otherwise successful tool result, so users may see text where makers expect an app. Tell makers which surfaces render apps.

## Cost and licensing

The "Use MCP apps in Copilot Studio" page lists two prerequisites, an MCP server configured as a tool with a working connection and a tool that declares a UI resource, and names no licence.

For experiences powered by the Microsoft Copilot harness, Microsoft documents Copilot Credits consumption for tools including MCPs, as well as LLM tokens and the harness. A separate app-rendering rate is not documented. Usage is billed based on consumption and measured in Copilot Credits; see "Overview of usage-based billing" and /concepts/copilot-credits/ for how the meter works.

For the standard harness, the "Billing rates and management" table lists "Agent action" at 5 Copilot Credits, with a No charge column for qualifying Microsoft 365 Copilot-licensed usage; Microsoft Copilot harness agents are billed differently. This briefing does not use that table to set a rate for tool calls made from an MCP app.

Indirect costs are maker time to build or adapt a server that declares UI resources, and admin time to review servers.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant), the Web platform, and the release phases General Availability and Preview. Clouds not listed on the roadmap item are not confirmed either way.

Learn says MCP apps are supported in Microsoft 365 Copilot and Copilot Studio preview chat, and are not supported in Teams or web chat. Display modes are inline and fullscreen in the side pane, with limits. Host context provides theme, language and region, and display mode.

Makers need an agent with an MCP server added as a tool. The related Learn how-to for adding a server in the Microsoft Copilot harness is marked as prerelease documentation, so its steps and limits may change.

## Governance guidance

### Before rollout
- Inventory which MCP servers are already registered and which are available, in the Microsoft 365 admin center (Agents > Tools > Registry), and block any you do not recognise.
- Check which Power Platform data policies cover the environments where makers build agents, and which connectors they block; Learn says blocking Power Platform connectors also blocks tools in connected MCP servers.
- Ask makers which MCP servers they plan to connect, and ask server owners which tools declare a UI resource.

### At rollout
- Review each requested MCP server's publisher, requester and declared tools before approving it, and grant Microsoft Entra consent only after that review. Approval needs the AI Administrator or Global Administrator role.
- Consider disabling write, delete or payment tools where both the server type and calling experience support tool-level enforcement; confirm whether MCP app-originated calls use that enforcement route.
- Test an app in the surface makers will use, and confirm the agent still answers when the UI does not appear.

### After rollout
- Revisit the registry when a server's exposed tools change. The standard-harness MCP overview says tool changes are reflected dynamically; the Microsoft Copilot harness how-to says to edit the server entry to refresh the connection and re-read the tool list when exposed tools change.
- Watch Message center and the Learn page for MCP apps for the General Availability date and any admin setting for the feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an MCP server is available to agents across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Blocking a server disables all its tools. Effects on dependent plugins and connectors depend on the management route. General control: not stated to apply to MCP apps.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which individual tools on a supported MCP server are enabled</strong><br><small>Tenant</small><br><small class="controls__note">Rolling out; supports only specific MCP server types registered on Agent 365. General control: not stated to apply to MCP apps.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Tools › Enabled or Disabled toggle › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approval of MCP servers that developers register</strong><br><small>Tenant</small><br><small class="controls__note">Needs AI Administrator or Global Administrator. Entra consent is a separate step after approval.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Requests (preview) › request › Approve or Reject <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which connectors, and so MCP server tools, makers can use in Copilot Studio</strong><br><small>Environment</small><br><small class="controls__note">General control: the page does not mention MCP apps. Get-DlpPolicy lists the tenant's policies; it does not block anything.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Next › Next › connector › three dots (⋮) › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-DlpPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting specific to MCP apps is documented at the time of writing (November 2026), so the rows below govern the MCP server and its tools, not the rendered interface. Microsoft 365 admin center controls cover plugins, skills and MCP servers; Learn says Power Platform data policies still control which tools makers can add in Copilot Studio, and that Agent 365 and Copilot Studio can have separate controls, so a block in one place is not shown to apply in the other.

Tool-level control is described as rolling out and as supporting only specific types of MCP server registered on Agent 365. The Power Platform data policy page covers Power Platform connectors used as tools and does not mention MCP apps, so confirm that a server added through the new Copilot Studio experience is covered. To apply a data policy after choosing Block, select Next, define scope if prompted and select Next, then review and select Create policy. The PowerShell cmdlet reads existing policies; this briefing does not describe how to change a connector's classification from PowerShell.

## Open questions

- Is there, or will there be, a tenant-level setting to stop MCP apps rendering while still allowing the server's tools? Watch the Learn page "Use MCP apps in Copilot Studio" and Message center.
- Is there a separate Copilot Credits rate for rendering an MCP app, beyond the consumption documented for tools including MCPs? Check "Overview of usage-based billing".
- Which surfaces will render apps at General Availability, given that Learn lists Microsoft 365 Copilot and Copilot Studio preview chat but not Teams or web chat, and the roadmap lists Web?
- Which identity do an app's tool calls and resource reads use, and are they audited separately from the agent's own calls?
- Does the plain-text fallback described on the roadmap item behave as Learn describes for a failed resource read?

<!-- rationale
risk: Medium. An MCP server supplies HTML that the host renders in the conversation, and the app can call that server's tools. Microsoft documents sandboxing and server-level controls, but none specific to MCP apps.
cost: Variable. Microsoft Copilot harness experiences consume Copilot Credits for LLM tokens, MCP tools and the harness; a separate MCP app-rendering rate is not documented.
impact: Low. Makers who connect a UI-enabled MCP server and the users of those agents notice it; nothing in the sources says existing agents change.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table / absence: Automation for blocking an MCP server in the organisational catalog is not documented. | Found: A package represents an agent or a tool, such as a plugin, MCP server, or skill, in the organization catalog. | Fix: Replace controls[0].api null with kind graph, call 'POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block', and docs https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block. Add to this row's note: 'Preview API; production use is not supported. Requires a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All permission; no request body.' The overview explicitly includes MCP server packages and lists the block operation; the operation reference supplies this exact beta request. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls table / admin-path: A connector can be blocked at Power Platform admin center > Security > Data and privacy > Data policy > New Policy > Next > Next > connector > three dots > Block. | Found: To add an environment to your data policy, select the environment in the Available tab, and then select Add to policy. | Fix: Include the omitted environment-selection step in the front matter and rendered path: 'Security > Data and privacy > Data policy > New Policy > Next > Available > environment > Add to policy > Next > connector > three dots > Block'. Enter the new policy's name before the first Next. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
-->
