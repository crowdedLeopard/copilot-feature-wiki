---
title: "Power Apps: Power Platform connectors in generative pages"
slug: "power-apps-use-power-platform-connectors-in-generative-pages"
roadmapId: 576283
topic: "power-platform"
products: ["Power Apps"]
summary: "Makers can bind Power Platform connector data to AI-generated pages in model-driven apps, through the page designer or the generative pages AI plugin."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Connector licensing follows existing Power Platform rules; confirm for generative pages."
audiences: ["maker","power-platform-admin","security"]
tags: ["power-apps","generative-pages","connectors","model-driven-apps","connection-references","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 576283"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576283"
    kind: "roadmap"
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Create and edit generative pages with AI code generation tools"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-page-external-tools"
    kind: "learn"
  - title: "Which connectors may be used in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "Which connectors may be used in an environment (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Allowed endpoints for HTTP and custom connectors (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
  - title: "Allowed endpoints for HTTP and custom connectors (PowerShell)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
    kind: "learn"
  - title: "Connection reference the page uses (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages#prerequisites"
    kind: "learn"
videos: []
related: ["power-apps-new-view-layout-in-model-driven-apps","data-policies","managed-environments"]
controls:
  - governs: "Which connectors may be used in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
  - governs: "Allowed endpoints for HTTP and custom connectors"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Data policy > Prebuilt Connectors > Configure connector > Connector endpoints"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
  - governs: "Connection reference the page uses"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > Default Solution > connection reference"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages#prerequisites"
    api: null
  - governs: "Switch specific to connectors in generative pages"
    scope: "environment"
    ui: null
    api: null
confidence: "high"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576283 with Learn connector guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Makers can bring data from Power Platform connectors into generative pages. After creating and authenticating a connection and adding a connection reference to the environment, the maker selects the connector data and describes how the page should use it.

Learn describes this in the designer under Add data > Connectors, and says the page designer and the generative pages AI plugin, used from tools such as GitHub Copilot CLI, can both incorporate connector data. Learn currently labels connector use as preview.

The roadmap lists preview from September CY2026 and general availability in December CY2026, for Worldwide, GCC and GCC High, version Gen page v302, for admins or makers.

## Why it matters

Generated pages stop being limited to Dataverse tables. A page can now show or change data in SharePoint, SQL or SaaS systems, which brings connector governance into AI-assisted app building.

Because code is AI-generated, review matters more when it calls external systems.

## Risk assessment

**Data exposure**
- Connector data is shown to app users. Learn advises testing with the identities and permissions your users will have.

**Security & identity**
- Connections carry credentials. Consider shared versus per-user connections and who owns the connection reference.

**Autonomy & actions**
- Generated code may write through connector operations. Review the plan before approving a build.

**Change & support**
- Pages depend on connections. Broken or expired connections will produce user-facing errors.

## Cost and licensing

Not yet published for this feature. Existing connector licensing generally applies, so premium connectors need appropriate user licences. Check the Power Platform licensing guide for your connectors.

## Scope

Makers of model-driven apps. Clouds: Worldwide, GCC and GCC High. Preview in September CY2026, general availability December CY2026.

## Governance guidance

### Before rollout
- [ ] Check data policies for the connectors makers are likely to use.
- [ ] Define who may create connection references in each environment.

### At rollout
- [ ] Pilot with a few makers and non-sensitive data sources.
- [ ] Require reviewing the agent plan and connector bindings before build approval.

### After rollout
- [ ] Audit connection references and their owners.
- [ ] Test pages under representative end-user permissions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors may be used in an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowed endpoints for HTTP and custom connectors</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Data policy › Prebuilt Connectors › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Connection reference the page uses</strong><br><small>Maker</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › Default Solution › connection reference <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages#prerequisites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to connectors in generative pages</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Data policies are the enforcement point and they apply to generative pages exactly as to canvas apps and flows; a blocked connector cannot be referenced. Connector action control, on the same data policy page, narrows which actions a permitted connector exposes. Connection references are maker-managed and travel with the solution. Managed Environments sharing limits apply to the app that carries the page.

## Open questions

- Are all connectors supported at general availability?
- How are per-user connections handled when users open the page?
- Will the AI plugin respect the same data policies?

<!-- rationale
risk: Medium. Generated pages will read external data through connections, so connection identity and data policies decide what users can see.
cost: Medium. Premium connectors may need Power Apps premium licences for users. Exact terms for this feature are not yet published.
impact: Medium. Makers gain new data sources and app users see data from outside Dataverse.
-->
