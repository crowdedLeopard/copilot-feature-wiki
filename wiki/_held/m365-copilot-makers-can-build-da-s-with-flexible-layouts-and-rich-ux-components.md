---
title: "Microsoft 365 Copilot: makers can build declarative agents with flexible layouts and rich UX components"
slug: "m365-copilot-makers-can-build-da-s-with-flexible-layouts-and-rich-ux-components"
roadmapId: 497844
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Planned for May CY2027: makers building declarative agents get flexible layouts and rich UX components. Microsoft has published no feature page, default or licence yet, so admins should watch for details and use existing agent controls."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "May CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "A Microsoft 365 Copilot licence covers building declarative agents with extra capabilities, according to the extensibility FAQ. No requirement specific to the planned layouts or UX components is published."
audiences: ["m365-admin","maker","change-adoption"]
tags: ["m365-copilot","declarative-agents","agents","extensibility","user-experience","app-management","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap item 497844"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497844"
    kind: "roadmap"
  - title: "Overview of Copilot UX components"
    url: "https://learn.microsoft.com/sharepoint/dev/spfx/copilot/overview-copilot-apps"
    kind: "learn"
  - title: "User experience guidelines for MCP apps in declarative agents for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/plugin-mcp-apps-ui-guidelines"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Frequently asked questions for Microsoft 365 Copilot extensibility"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/faq"
    kind: "learn"
  - title: "Declarative agents for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/overview-declarative-agent"
    kind: "learn"
videos: []
related: ["m365-copilot-app-blocks","microsoft-copilot-studio-deliver-rich-interactive-app-experiences-in-copilot-studio-agents","m365-copilot-support-for-mcp-agents-with-interactive-ui-widgets-in-government-clouds","mcp"]
controls:
  - governs: "Whether a specific agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocks access to the selected agent across the organization; it is not a separate layout switch. The Graph reference says access to the Package Management API requires a Microsoft Agent 365 licence and the API is beta."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Controls how members of the organization access and install agents and plugins. Default is All users."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap-only item with no Learn page of its own; covers today's agent block and user access controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the governance controls wording so the block and User access controls are described as agent-level controls, not feature switches; licensing model set to included per the extensibility FAQ."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "e68a1185d97069a44572196024a086f8"
---

## What's changing

The roadmap item states that makers will be able to build declarative agents (Microsoft 365 Copilot agents defined by instructions, knowledge and actions, as [Learn describes them](https://learn.microsoft.com/plugins/overview-declarative-agent)) with flexible layouts and rich UX components. It says the purpose is to let makers build "highly expressive agents", ultimately driving more user engagement and virality.

Microsoft Learn has no page that names this roadmap item, so what the roadmap says is all that is known about how it behaves. The roadmap does not say what a layout or component is, which tool makers use, or what the default is. Microsoft Learn does document two related ways to render interactive UI in declarative agents: Copilot UX components built with the SharePoint Framework, which Learn says are generally available with SPFx 1.24 released on October 28, 2026, and MCP-based UI with inline and side-by-side chat surfaces. Learn does not say either one is this roadmap item, so treat them as background only.

The record lists the status as In development with a target of May CY2027, release phase General Availability, platforms Desktop and Web, and the Worldwide (Standard Multi-Tenant) cloud. No preview date is given and the target is a plan, not a commitment.

## Why it matters

If the capability reaches makers as the roadmap describes, agents in your tenant could present answers with more structured, interactive layouts. Microsoft has not stated what happens on arrival, so no source says existing behaviour changes, and nothing here requires action now.

The practical effect for a service owner is that agent review needs to cover how an agent presents itself and what its components do, not only what it can read. The existing agent block and user access controls are the levers available today; whether this feature adds its own is not yet documented.

## Risk assessment

**Data exposure**
- The roadmap states no new data source. Microsoft has not said whether components can show or send data beyond what an agent already reaches, so confirm this before agents using the new layouts are shared widely.

**Security & identity**
- Microsoft has not said which identity a component runs under or whether it can call services outside Microsoft 365. Do not assume it inherits an existing agent's controls until a page says so.
- Microsoft's MCP-based UI guidance says users must remain the decision-makers when actions affect enterprise data, which suggests asking makers how components confirm sensitive actions.

**Autonomy & actions**
- No source says whether the new UX components can trigger actions. Where a component exposes an action, review the agent in Agents > All agents before it is made available to more users.

**Change & support**
- Rich layouts may change how users recognise an agent's answers, so expect questions from users. The roadmap's aim of "virality" suggests agents may spread quickly, but Microsoft has not described a sharing mechanism for this item.

## Cost and licensing

No licence, meter or price for this capability is published at the time of writing (November 2026). Microsoft's extensibility FAQ says that with a Microsoft 365 Copilot licence you don't need additional licences to build declarative agents with extra capabilities, including Copilot connectors and plugins, and that declarative agents based on web search with limited capabilities can be built without one.

For background only: the Copilot UX components page says those components require the Microsoft 365 Copilot add-on licence on top of the user's E3, E5 or E7 licence, and that they have no consumption-based charges. APIs or services called inside a component's implementation can have their own charges, separate from the component capability. Learn does not say this roadmap item is that feature, so do not budget from it. Indirect cost is admin and communications time.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud only, platforms Desktop and Web, and release phase General Availability, with a target of May CY2027 and status In development. It names makers as the audience. Microsoft has not said which licences, roles or prerequisites apply, or how it will roll out.

The record does not list GCC, GCC High or DoD. That is a record fact, not a statement that the feature is unavailable there.

## Governance guidance

### Before rollout
- Review who can reach agents and plugins today under Microsoft 365 admin center > Agents > Settings > User access, which Microsoft documents as defaulting to All users.
- Ask makers which tool they use to build declarative agents so you know which of their agents the new layouts would apply to.
- Watch Message center and the Microsoft 365 Roadmap item for a Learn page, a default and a licence statement before the May CY2027 target.

### At rollout
- Test the first agents that use the new layouts with a small user group before widening access.
- Check the agent's page in Agents > All agents and be ready to use Block if an agent behaves unexpectedly.

### After rollout
- Revisit the User access setting if Microsoft documents a control specific to this feature.
- Collect user feedback on how agent responses now appear and share it with makers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a specific agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Blocks access to the selected agent across the organization; it is not a separate layout switch. The Graph reference says access to the Package Management API requires a Microsoft Agent 365 licence and the API is beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Controls how members of the organization access and install agents and plugins. Default is All users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Blocking restricts access to the selected agent across the organization. User access controls how organization members access and install agents and plugins. Neither is a separate switch for layouts or components. The Learn page says blocking an agent created with Microsoft Copilot Agent Builder or Microsoft Copilot Studio affects its availability in Microsoft Copilot and other host products such as Outlook and Teams, while blocking an agent created by SharePoint or Microsoft Foundry affects only its availability in Microsoft Copilot Chat. A switch that turns the new layouts or components off is not yet documented.

## Open questions

- What exactly are the flexible layouts and rich UX components, and is this the same capability as Copilot UX components or MCP-based UI? Watch the roadmap item and Microsoft Learn.
- Is the capability on by default for makers, and can an admin switch it off? Watch Message center.
- Which licence do makers and end users need, and is any meter charged? Watch the Copilot extensibility prerequisites page.
- Do components run actions or call outside services, and under which identity?

<!-- rationale
risk: Low. The roadmap item describes layouts and UX components for agents and states no new data access; Microsoft has not said how the feature works, so the rating rests on today's agent controls continuing to apply.
cost: Low. The only cost the sources show is admin time; the licence and any meter for this capability are not yet published.
impact: Medium. Makers are the people who gain the capability, and the roadmap says the aim is more engagement from agent users; Microsoft has not said how many users it reaches or whether it is on by default.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api / absence: Microsoft has not documented automation for the User access control. | Found: These resources also support remediation and applyOnce. ... userAssignmentCategory | Write | String | Specifies whether all users or no users can access agents and plugins. | everyone, noOne | Fix: Replace controls[1].api null with kind graph, call 'POST /beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Add to the note: 'Preview TCM automation supports All users or No users: set mode to applyOnce and supply a baseline resource with resourceType microsoft.agent.useraccess, resourceVersion 1, and properties.valueObject.userAssignmentCategory set to everyone or noOne. Specific-user/group selection is not documented in this resource. applyOnce requires delegated ConfigurationMonitoring.ReadWrite.All for the calling app, delegated CopilotPolicySettings.ReadWrite for the TCM service principal, and AI Administrator for the signed-in user.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-authentication-setup. The operation reference states that an active applyOnce monitor applies the baseline in a background job, then becomes inactive. | Source: https://learn.microsoft.com/graph/utcm-agent-resources
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance controls: final sentence; controls / consistency: The separate layout/component switch described as absent in the prose has no corresponding controls row. | Found: A switch that turns the new layouts or components off is not yet documented. / controls contains only the agent Block row and the User access row. | Fix: Remove the final sentence 'A switch that turns the new layouts or components off is not yet documented.' from Governance controls; the same uncertainty already appears in Open questions. Do not add another control row.
-->
