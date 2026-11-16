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
tags: ["power-apps","generative-pages","connectors","model-driven-apps","connection-references","gcc","gcc-high"]
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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 33
  unconfirmed: 6
  contradicted: 6
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; What's changing; Scope / record: General availability is listed for December CY2026. | Found: "targetDate": "December CY2026" | Fix: Describe December CY2026 as the roadmap's general-availability target in What's changing and Scope, rather than an unqualified availability date.
- [supported, minor] front matter: previewDate; What's changing; Scope / record: The roadmap lists preview in September CY2026. | Found: "previewDate": "September CY2026" | Fix: In Scope, attribute September CY2026 to the roadmap preview target. Retain the separate statement that Learn currently documents connector support as preview.
- [unsupported, major] Why it matters: Generated pages stop being limited to Dataverse tables / behaviour: Before this change, generative pages were limited to Dataverse tables. | Found: Searched: "generative pages" "previously" "Dataverse". Opened generative-pages and generative-page-external-tools; their current data-source descriptions do not establish this historical restriction. | Fix: Replace the historical claim with 'Connector support lets generative pages use data outside Dataverse.'
- [supported, minor] Why it matters: first paragraph; rationale: risk and impact / behaviour: A generative page can read or change external data through connectors, including SharePoint, SQL and SaaS services. | Found: | `createConnectorRow` | Creates a new row in the specified connector table. |
| `updateConnectorRow` | Updates an existing row in the specified connector table. | | Fix: Add https://learn.microsoft.com/power-apps/developer/model-driven-apps/generative-page/data-api/connector-methods to sources for read/write operations. The already-cited external-tools page states that all Power Platform connectors are supported in preview. | Source: https://learn.microsoft.com/power-apps/developer/model-driven-apps/generative-page/data-api/connector-methods
- [supported, minor] Risk assessment: Security & identity / behaviour: Connections carry authentication credentials. | Found: A connection is a stored authentication credential for a connector, for example OAuth credentials for the SharePoint connector. | Fix: Add https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference to sources. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Generated page code can write data through connector operations. | Found: | `createConnectorRow` | Creates a new row in the specified connector table. |
| `deleteConnectorRow` | Deletes a row from the specified connector table. | | Fix: Cite the connector-methods reference for the supported write operations; retain the advice to review the plan. | Source: https://learn.microsoft.com/power-apps/developer/model-driven-apps/generative-page/data-api/connector-methods
- [unsupported, major] Risk assessment: Change & support / behaviour: Broken or expired connections will produce user-facing errors. | Found: Searched: "generative pages" "connector" "expired". Opened external-tools and connector-methods. The API documents rejected promises and error results, not guaranteed user-facing errors for expired connections. | Fix: Replace with 'Connection failures can interrupt page operations; review generated error handling and test failed or unauthorised connections.' Cite https://learn.microsoft.com/power-apps/developer/model-driven-apps/generative-page/data-api/connector-methods.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Existing Power Apps licensing requires appropriate premium entitlements for premium connectors. | Found: Some examples of features that require premium entitlements include: premium connectors, Dataverse entities, on-premises data gateways, custom APIs, etc. | Fix: Cite https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq. Clarify that model-driven apps already require premium use rights, so adding a premium connector does not by itself establish an incremental licence purchase. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq
- [contradicted, blocker] front matter: licensing.model / licensing: The feature's licensing model is per-user. | Found: While Power Apps Premium, Power Apps per app plans, and the Power Apps per app pay-as-you-go meter that give premium Power Apps usage rights satisfy the requirement generally, use rights differ by license and by the context the app runs in. | Fix: Set licensing.model to 'unknown' if it describes this feature's unpublished separate terms. Explain the general Power Apps entitlement options in notes, rather than assigning a single per-user model; cite https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq
- [unsupported, blocker] front matter: cost; rationale: cost / cost: This change has a known medium direct cost because premium connectors may require additional user licensing. | Found: Searched: generative pages connectors licensing premium connectors Power Apps license meter. Opened generative-pages and Power Apps licensing FAQs: model-driven apps already require premium rights; no incremental connector-feature licence or charge is stated. | Fix: Set cost to 'low' for the evidenced review and pilot work, and state that any separate feature-specific licensing is not yet published. Do not infer new licence purchases from premium connectors in an already-premium model-driven app.
- [unsupported, blocker] front matter: defaultState / default: Nobody can use connector support in generative pages until an administrator opts in. | Found: Searched: "generative pages" "enable" "admin"; "generative pages" "connector" "PowerShell" "disable". Opened generative-pages and external-tools prerequisites: maker-selected connector use is described, but no required administrator enablement. | Fix: Set defaultState to 'user-opt-in': the documented maker workflow selects connector data, and the targeted searches found no feature-specific admin switch. Do not classify creation of a connection reference as administrator opt-in.
- [supported, minor] controls[1].ui; Governance controls: second row / admin-path: Endpoint filtering is configured through Data policy > Prebuilt Connectors > Configure connector > Connector endpoints. | Found: If the value of the Endpoint configurable column is Yes, you can use this capability by right-clicking and then selecting Configure connector > Connector endpoints. | Fix: Expand the path to select or edit a data policy, then Prebuilt Connectors > connector > Configure connector > Connector endpoints. Say this is preview and only applies where Endpoint configurable is Yes. Remove custom connectors from the row's scope. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [supported, minor] controls[1].api; Governance controls: second row / command: New-PowerAppDlpPolicyConnectorConfigurations creates connector configurations containing endpoint filtering rules. | Found: Create connector configurations for a data policy

New-PowerAppDlpPolicyConnectorConfigurations | Fix: Flag endpoint filtering as preview and restrict the row to supported prebuilt connectors. The command exists, but neither this command nor this reference establishes custom-connector endpoint filtering. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering
- [contradicted, blocker] controls[2].ui; Governance controls: third row / admin-path: Solutions > Default Solution > connection reference is the documented path for setting up the connection reference. | Found: On the command bar, select New > More > Connection Reference. | Fix: Replace the path with 'Solutions > Default Solution > New > More > Connection Reference'. Retain the feature prerequisite link and add https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference for the creation steps. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference
- [contradicted, blocker] controls[2].api; Governance controls: third row / absence: No API or automation surface is documented for managing the connection reference. | Found: Entity set path:
[organization URI]/api/data/v9.2/connectionreferences
Operations supported:
POSTGETPATCHDELETE | Fix: Replace api:null with a Dataverse REST control, for example 'GET [organization URI]/api/data/v9.2/connectionreferences', citing this entity reference; explain that POST and PATCH create and update references. Do not label connection-reference automation undocumented. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/connectionreference?view=dataverse-latest
- [unsupported, blocker] Governance controls: paragraph after table; controls[0] and controls[1]; rationale: risk / applicability: Data policies govern generative pages exactly as they govern canvas apps and flows. | Found: Searched: "generative pages" "data policies"; "generative pages" "DLP". Opened generative-pages, external-tools, connector-action-control and connector-endpoint-filtering. None states equivalent data-policy enforcement for generative pages. | Fix: Remove the assertion of equivalent enforcement. Label the data-policy and endpoint-filtering rows as general platform controls whose applicability to generative pages Microsoft has not confirmed in the sources checked, and repeat this uncertainty in Open questions.
- [unsupported, blocker] Governance controls: a blocked connector cannot be referenced / applicability: A data-policy-blocked connector cannot be referenced by a generative page. | Found: Searched: "generative pages" "data policies"; "generative pages" "DLP". Read generative-pages, external-tools and the cited connector control references; no passage establishes blocking of generative-page connection references. | Fix: Remove 'a blocked connector cannot be referenced'. Replace it with an open question about how data-policy blocking is enforced for designer-created and plugin-created generative pages.
- [contradicted, blocker] controls[1].governs; Governance controls: endpoint row scope / applicability: The cited endpoint-filtering control filters endpoints for HTTP and custom connectors. | Found: it's exclusively available for the following connectors:
- HTTP
- HTTP with Microsoft Entra ID (AD)
- HTTP Webhook
- SQL Server | Fix: Remove 'custom connectors' from the endpoint-filtering row; the exclusive supported list does not include them. Describe this preview control as endpoint filtering for supported prebuilt connectors. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [supported, minor] Governance controls: connection references travel with the solution / behaviour: Connection references are solution components that can move with a solution. | Found: A connection reference is a solution component that contains a reference to a connection about a specific connector. | Fix: Cite https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference and clarify that the target environment supplies the connection during solution import; credentials are not implied to travel with the solution. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference
- [contradicted, blocker] Governance controls: Managed Environments sharing limits / applicability: Managed Environments sharing limits apply to the model-driven app carrying a generative page. | Found: In managed environments, admins can limit how broadly users can share canvas apps, flows, and agents. | Fix: Remove the assertion that Managed Environments sharing limits govern the host model-driven app. The documented sharing-limit controls cover canvas apps, solution-aware cloud flows and agents, not model-driven apps. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist instructs readers to define who may create connection references, but the controls table does not identify a creation-permission control. | Found: Define who may create connection references in each environment.
Connection reference the page uses | Fix: Add a separate row for permission to create connection references, with verified control surfaces, or replace the checklist instruction with an ownership review that the existing connection-reference row actually covers.
-->
