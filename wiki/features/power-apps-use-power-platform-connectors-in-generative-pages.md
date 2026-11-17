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
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Licensing specific to connectors in generative pages is not yet published. Model-driven apps already require a licence that provides Power Apps premium use rights; qualifying licences are listed in the Power Platform Licensing Guide."
audiences: ["maker","power-platform-admin","security"]
tags: ["power-apps","generative-pages","connectors","model-driven-apps","connection-references","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 576283"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576283"
    kind: "roadmap"
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Create and edit generative pages with AI code generation tools"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-page-external-tools"
    kind: "learn"
  - title: "Connector methods for generative pages"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/generative-page/data-api/connector-methods"
    kind: "learn"
  - title: "Use a connection reference in a solution with Microsoft Dataverse"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference"
    kind: "learn"
  - title: "connectionreference EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/connectionreference?view=dataverse-latest"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
    kind: "learn"
  - title: "Data policies"
    url: "https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention"
    kind: "learn"
  - title: "Connector endpoint filtering (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
  - title: "Which connectors may be used in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "Which connectors may be used in an environment (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Endpoint filtering for supported prebuilt connectors (preview) (PowerShell)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which connectors may be used in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    api:
      kind: "powershell"
      call: "New-DlpPolicy -NewPolicy $NewPolicy"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    note: "Platform data policies can disable connections whose connectors are blocked; resources using inactive connections fail at runtime. The feature-specific enforcement sequence is not described."
  - governs: "Endpoint filtering for supported prebuilt connectors (preview)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Data policy > policy > Prebuilt Connectors > connector > Configure connector > Connector endpoints"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
    note: "Preview platform control for supported connectors and static endpoints selected at design time; rules do not apply to environment variables, custom inputs or dynamically bound runtime endpoints."
  - governs: "Connection reference the page uses"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > solution > New > More > Connection Reference"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference"
    api:
      kind: "rest"
      call: "GET [organization URI]/api/data/v9.2/connectionreferences"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/connectionreference?view=dataverse-latest"
    note: "Dataverse Web API entity set; the reference lists POST, GET, PATCH and DELETE as supported operations. Default Solution comes from the generative pages prerequisites."
  - governs: "Switch specific to connectors in generative pages"
    scope: "environment"
    ui: null
    api: null
confidence: "high"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576283 with Learn connector guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the check: licensing model, cost and default state restated; connection reference row now uses the documented path and Dataverse API; data-policy applicability marked unconfirmed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the check: New-DlpPolicy call and connection reference path now match Learn; data policy and endpoint filtering statements restated from Learn; open questions narrowed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0693fd8a42992eb2518686f45ce21215"
---

## What's changing

Makers can bring data from Power Platform connectors into generative pages. After creating and authenticating a connection and adding a connection reference to the environment, the maker selects the connector data and describes how the page should use it.

Learn describes this in the designer under Add data > Connectors, and says the page designer and the generative pages AI plugin, used from tools such as GitHub Copilot CLI, can both incorporate connector data. Learn currently labels connector use as preview.

The roadmap lists a preview target of September CY2026 and a general availability target of December CY2026, for Worldwide, GCC and GCC High, version Gen page v302, for admins or makers.

## Why it matters

Connector support lets generative pages use data outside Dataverse. A page can show or change data in SharePoint, SQL or SaaS systems, which brings connector governance into AI-assisted app building.

Because code is AI-generated, review matters more when it calls external systems.

## Risk assessment

**Data exposure**
- Connector data is shown to app users. Learn advises testing with the identities and permissions your users will have.

**Security & identity**
- Connections carry credentials: Learn describes a connection as a stored authentication credential for a connector. Consider shared versus per-user connections and who owns the connection reference.

**Autonomy & actions**
- Generated code may write through connector operations; the connector methods reference lists create, update and delete row methods. Review the plan before approving a build.

**Change & support**
- Connection failures can interrupt page operations; review generated error handling and test failed or unauthorised connections. The connector methods reference says calls reject the returned promise when, for example, the connection reference cannot be resolved, or the connection is not authorised and the user does not complete the consent prompt.

## Cost and licensing

Licensing specific to connectors in generative pages is not yet published. The Power Apps licensing FAQ says every user who runs a model-driven app needs a licence that provides Power Apps premium use rights, and lists premium connectors among the features that require premium entitlements. Because a model-driven app already requires premium rights, adding a premium connector does not by itself establish an additional licence purchase; confirm against the Power Platform Licensing Guide for your connectors.

The cost the sources show is maker and admin time to review connection references, plans and generated pages. Learn labels connector use in generative pages as preview.

## Scope

Makers of model-driven apps. Clouds: Worldwide, GCC and GCC High. The roadmap gives a preview target of September CY2026 and a general availability target of December CY2026; Learn currently documents connector support as preview.

## Governance guidance

### Before rollout
- Check data policies for the connectors makers are likely to use.
- Review who owns each connection reference in each environment.

### At rollout
- Pilot with a few makers and non-sensitive data sources.
- Require reviewing the agent plan and connector bindings before build approval.

### After rollout
- Audit connection references and their owners.
- Test pages under representative end-user permissions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors may be used in an environment</strong><br><small>Environment</small><br><small class="controls__note">Platform data policies can disable connections whose connectors are blocked; resources using inactive connections fail at runtime. The feature-specific enforcement sequence is not described.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -NewPolicy $NewPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Endpoint filtering for supported prebuilt connectors (preview)</strong><br><small>Environment</small><br><small class="controls__note">Preview platform control for supported connectors and static endpoints selected at design time; rules do not apply to environment variables, custom inputs or dynamically bound runtime endpoints.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Data policy › policy › Prebuilt Connectors › connector › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Connection reference the page uses</strong><br><small>Maker</small><br><small class="controls__note">Dataverse Web API entity set; the reference lists POST, GET, PATCH and DELETE as supported operations. Default Solution comes from the generative pages prerequisites.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › solution › New › More › Connection Reference <a href="https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [organization URI]/api/data/v9.2/connectionreferences</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/connectionreference?view=dataverse-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch specific to connectors in generative pages</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The data policy row is a platform control: Microsoft's data policies page says that when a policy blocks a whole connector, its connections are set to a disabled state, and that resources attempting to use an inactive connection fail at runtime. The feature-specific enforcement sequence is not described. Connector action control, on the same data policy page, narrows which actions a permitted connector exposes.

Endpoint filtering is a preview platform control for supported connectors and static endpoints selected at design time; rules do not apply to environment variables, custom inputs or dynamically bound runtime endpoints.

A connection reference is a solution component that points to a connection; during solution import into a target environment, a connection is provided for each connection reference.

## Open questions

- Are all connectors supported at general availability?
- How are per-user connections handled when users open the page?
- What is the enforcement sequence for data-policy blocking of generative pages created in the designer and through the AI plugin?
- How are connector endpoints evaluated in the generative page designer and AI plugin?

<!-- rationale
risk: Medium. Generated pages will read external data through connections, so connection identity and permissions decide what users can see. How data policy enforcement works for these pages is not described.
cost: Low. The only cost the sources show is maker and admin time for review and piloting. Licensing specific to this feature is not yet published; model-driven apps already need a licence with Power Apps premium use rights.
impact: Medium. Makers gain new data sources and app users see data from outside Dataverse.
-->
