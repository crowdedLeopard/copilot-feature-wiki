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
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    note: "General control: Microsoft has not confirmed it applies to generative pages."
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
    note: "Preview. Applies where Endpoint configurable is Yes. General control: Microsoft has not confirmed it applies to generative pages."
  - governs: "Connection reference the page uses"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > Default Solution > New > More > Connection Reference"
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
updated: "2026-11-16"
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
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 41
  unconfirmed: 0
  contradicted: 4
  attempts: 2
  hash: "2839558ad70eb25c55a9ee88d9f70023"
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
- Connection failures can interrupt page operations; review generated error handling and test failed or unauthorised connections. The connector methods reference says calls reject the returned promise when, for example, the connection reference can't be resolved or the connection isn't authorised.

## Cost and licensing

Licensing specific to connectors in generative pages is not yet published. The Power Apps licensing FAQ says every user who runs a model-driven app needs a licence that provides Power Apps premium use rights, and lists premium connectors among the features that require premium entitlements. Because a model-driven app already requires premium rights, adding a premium connector does not by itself establish an additional licence purchase; confirm against the Power Platform Licensing Guide for your connectors.

The cost the sources show is maker and admin time to review connection references, plans and generated pages. Learn labels connector use in generative pages as preview.

## Scope

Makers of model-driven apps. Clouds: Worldwide, GCC and GCC High. The roadmap gives a preview target of September CY2026 and a general availability target of December CY2026; Learn currently documents connector support as preview.

## Governance guidance

### Before rollout
- Check data policies for the connectors makers are likely to use, once Microsoft confirms they apply to generative pages.
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
<tr><td data-label="Control"><strong>Which connectors may be used in an environment</strong><br><small>Environment</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to generative pages.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Endpoint filtering for supported prebuilt connectors (preview)</strong><br><small>Environment</small><br><small class="controls__note">Preview. Applies where Endpoint configurable is Yes. General control: Microsoft has not confirmed it applies to generative pages.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Data policy › policy › Prebuilt Connectors › connector › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Connection reference the page uses</strong><br><small>Maker</small><br><small class="controls__note">Dataverse Web API entity set; the reference lists POST, GET, PATCH and DELETE as supported operations. Default Solution comes from the generative pages prerequisites.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › Default Solution › New › More › Connection Reference <a href="https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [organization URI]/api/data/v9.2/connectionreferences</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/connectionreference?view=dataverse-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch specific to connectors in generative pages</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The data policy and endpoint filtering rows are general platform controls. Microsoft Learn pages checked at the time of writing (November 2026) do not confirm that they apply to generative pages. Connector action control, on the same data policy page, narrows which actions a permitted connector exposes. Endpoint filtering is a preview control for the supported prebuilt connectors only.

A connection reference is a solution component that points to a connection; during solution import into a target environment, a connection is provided for each connection reference.

## Open questions

- Are all connectors supported at general availability?
- How are per-user connections handled when users open the page?
- Will the AI plugin respect the same data policies?
- How is data-policy blocking enforced for generative pages created in the designer and through the AI plugin, and do the data policy and endpoint filtering controls apply to them?

<!-- rationale
risk: Medium. Generated pages will read external data through connections, so connection identity and permissions decide what users can see. Whether data policies apply to these pages is unconfirmed.
cost: Low. The only cost the sources show is maker and admin time for review and piloting. Licensing specific to this feature is not yet published; model-driven apps already need a licence with Power Apps premium use rights.
impact: Medium. Makers gain new data sources and app users see data from outside Dataverse.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table / command: New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell) is a runnable policy-creation call. | Found: New-DlpPolicy -NewPolicy <Object> [-ApiVersion <String>] [<CommonParameters>] | Fix: Replace controls[0].api.call and the rendered command with 'New-DlpPolicy -NewPolicy $NewPolicy'. The module name is metadata, not a parenthesised argument; $NewPolicy is the policy-definition object placeholder documented by the reference. | Source: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: The cited connection-reference page documents Solutions > Default Solution > New > More > Connection Reference. | Found: 3. Create a new or open an existing solution. 4. On the command bar, select **New** > **More** > **Connection Reference**. | Fix: Change controls[2].ui.path and the rendered path to 'Solutions > solution > New > More > Connection Reference'. Keep the separate note attributing Default Solution to the generative-pages prerequisites: that requirement is supported there, but not on this row's linked page. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/create-connection-reference
- [contradicted, blocker] controls[0].note; Governance guidance: Before rollout; Governance controls; rationale: risk / absence: Microsoft has not confirmed that data policies apply to generative-page connector use, so checking them should wait for confirmation. | Found: Scan connections. If the policy blocks the whole connector, set the connection to a *disabled* state so that it can't operate. 7. Any resources that are running and attempting to use an inactive connection, action, trigger, or MCP server that is blocked, fail at runtime. | Fix: Replace the unconfirmed-data-policy statements with: 'Platform data policies can disable connections whose connectors are blocked; resources using inactive connections fail at runtime. The feature-specific enforcement sequence is not described.' Cite https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention. Change the Before rollout bullet to 'Check data policies for the connectors makers are likely to use.' Remove the open question asking whether data policies apply; retain the narrower question about the designer and AI plugin enforcement sequence. | Source: https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention
- [contradicted, blocker] controls[1].note; Governance controls; Open questions / absence: Microsoft has not confirmed whether endpoint-filtering controls apply to generative pages. | Found: Connector endpoint filtering lets admins control which specific endpoints makers can connect to when building apps, flows, or chatbots. It's configured within a data policy | Fix: Replace the unconfirmed endpoint-filtering statements with: 'Endpoint filtering is a preview platform control for supported connectors and static endpoints selected at design time; rules do not apply to environment variables, custom inputs or dynamically bound runtime endpoints.' Keep the existing cited endpoint-filtering URL. Narrow the open question to 'How are connector endpoints evaluated in the generative page designer and AI plugin?' | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / behaviour: Connector calls reject their promises for unresolved connection references or unauthorised connections. | Found: when the connection reference can't be resolved, the connection isn't authorized and the user doesn't complete the consent prompt, or the connector returns an error status. | Fix: Replace the final sentence with: 'The connector methods reference says calls reject the returned promise when, for example, the connection reference cannot be resolved, or the connection is not authorised and the user does not complete the consent prompt.' | Source: https://learn.microsoft.com/power-apps/developer/model-driven-apps/generative-page/data-api/connector-methods
-->
