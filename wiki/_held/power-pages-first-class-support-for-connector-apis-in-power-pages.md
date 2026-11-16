---
title: "Power Pages: first-class support for Power Platform connector APIs"
slug: "power-pages-first-class-support-for-connector-apis-in-power-pages"
roadmapId: 577897
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages sites will call Power Platform connectors, including SQL, SAP and Oracle through the on-premises data gateway, with server-side logic."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "March CY2027"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Connector tier and gateway requirements to be confirmed."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["power-pages","connectors","on-premises-data-gateway","server-logic","sql","integration"]
sources:
  - title: "Microsoft 365 Roadmap item 577897"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577897"
    kind: "roadmap"
  - title: "Connector action control"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "New-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Connector endpoint filtering (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
  - title: "Server logic overview"
    url: "https://learn.microsoft.com/power-pages/configure/server-logic-overview"
    kind: "learn"
  - title: "Power Pages security"
    url: "https://learn.microsoft.com/power-pages/security/power-pages-security"
    kind: "learn"
  - title: "Allowed endpoints for HTTP and other endpoint-configurable connectors (PowerShell)"
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
    note: "General control: Microsoft has not confirmed it applies to native Power Pages connector APIs."
  - governs: "Allowed endpoints for HTTP and other endpoint-configurable connectors"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Data policy > policy > Prebuilt Connectors > connector > Configure connector > Connector endpoints"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
    note: "Preview. General control, not confirmed for this feature. Needs Endpoint configurable = Yes; evaluates static designer endpoints, not runtime-bound ones."
  - governs: "Power Pages-specific control for connector APIs"
    scope: "site"
    ui: null
    api: null
    note: "Not yet on Learn; the roadmap says existing Power Platform policies will apply."
confidence: "low"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577897; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Correction: default state set to not stated, cost to low and action to review; controls marked as general and unconfirmed for this feature; risk bullets reworded to what is documented."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 34 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 34
  confirmed: 32
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "73a908623724f24dbeed08ffc20d5cef"
---

## What's changing

Power Pages will support native Power Platform connectors, so a site can connect to enterprise systems such as SQL, SAP and Oracle without a custom integration layer. The roadmap highlights regulated customers whose data sits behind corporate firewalls.

The design uses the Power Platform on-premises data gateway and the connector framework. The roadmap also mentions server-side logic that can interact with on-premises data sources.

Preview is listed for March CY2027 and general availability for June CY2027, Worldwide only. I found no Learn documentation yet.

## Why it matters

This links an internet-facing site to systems of record. For service owners it changes the threat model: the site becomes a path into internal data. The roadmap says customers will get consistent security and governance with existing Power Platform policies; Microsoft Learn does not yet confirm how those policies apply to a site workload.

It may also replace bespoke middleware, which can cut support effort but moves responsibility to the Power Platform team.

## Risk assessment

**Data exposure**
- Server-side calls could return on-premises records to site visitors. Microsoft has not documented how per-visitor authorisation is enforced for native connector API data; validate this before exposing records.

**Security & identity**
- Connection identity and per-visitor delegation are not yet documented; confirm whose credentials are used and how they are scoped.
- Gateway placement and network rules become part of the site security boundary.

**Autonomy & actions**
- General Power Pages server logic supports external writes: its documented POST, PUT, PATCH and DELETE methods can send data to, or remove data from, an external system ([server logic overview](https://learn.microsoft.com/power-pages/configure/server-logic-overview)). Supported operations for the planned native connector capability are not yet documented.

**Change & support**
- Gateway outages could disrupt site integrations; test failure handling and agree support ownership between the site and gateway teams before production.

## Cost and licensing

Not yet published. The cost evidenced so far is planning and administration time. Whether premium connector licensing, gateway hosting or Power Pages capacity apply is to be confirmed when Microsoft publishes the terms.

## Scope

Makers and developers of Power Pages sites; tenants that use the on-premises data gateway. Roadmap cloud: Worldwide (Standard Multi-Tenant) only.

## Governance guidance

### Before rollout
- Review which data policies cover the connectors you would expose to sites; these are general controls and Microsoft has not confirmed they apply to this feature.
- Plan gateway capacity, availability and network rules with the gateway team.
- Agree who will own the connections that a site uses.

### At rollout
- Pilot in a non-production environment with a read-only service account.
- Test every server-side call for over-exposure of data.
- Test how the site behaves when the gateway is unavailable.

### After rollout
- Check gateway health and call volumes with the gateway team.
- Review connection ownership and credential rotation with the teams that own them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors may be used in an environment</strong><br><small>Environment</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to native Power Pages connector APIs.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowed endpoints for HTTP and other endpoint-configurable connectors</strong><br><small>Environment</small><br><small class="controls__note">Preview. General control, not confirmed for this feature. Needs Endpoint configurable = Yes; evaluates static designer endpoints, not runtime-bound ones.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Data policy › policy › Prebuilt Connectors › connector › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Power Pages-specific control for connector APIs</strong><br><small>Site</small><br><small class="controls__note">Not yet on Learn; the roadmap says existing Power Platform policies will apply.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both populated rows are general Power Platform controls. Microsoft Learn does not yet confirm that either applies to native Power Pages connector APIs; the roadmap item says only that the feature will work with existing Power Platform policies. Connector endpoint filtering is a preview feature and evaluates only static endpoints chosen in the designers, not dynamically bound runtime endpoints. It is available only where the Endpoint configurable column is Yes.

No gateway or connection-ownership control is mapped in this table, so the checklist items on those topics are planning and testing advice.

Power Pages sites are available to internal users by default, and the public setting makes a site accessible anonymously ([Power Pages security](https://learn.microsoft.com/power-pages/security/power-pages-security)). Review the data policy for environments that host public sites before the preview arrives.

## Open questions

- Which connectors are supported at preview?
- How are connection identities and per-visitor authorisation handled?
- What licensing applies to anonymous visitors?

<!-- rationale
risk: High. It lets a public-facing site reach on-premises enterprise systems, so a permission or design error could expose internal data.
cost: Low. The only cost the sources show is planning and administration time; licensing for this feature is not yet published, so no connector or gateway charge is rated.
impact: Medium. It affects teams that build external sites on enterprise data, and the visitors who use them.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing / licensing: Whether Power Pages capacity applies is to be confirmed when Microsoft publishes the terms. | Found: Power Pages (formerly Power Apps portals) licensing is capacity based and offers two types of capacities based on user type: Authenticated users per website/month and Anonymous users per website/month. | Fix: Replace the final sentence of Cost and licensing with: "Any additional premium connector licensing, gateway hosting charges or capacity charges specific to native connector APIs are not yet published." Existing Power Pages website licensing is documented at https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq#power-pages; do not describe its applicability as unpublished. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq#power-pages
- [contradicted, blocker] controls[0].api; Governance controls table / command: New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell) is the runnable PowerShell call for the data-policy row. | Found: New-DlpPolicy -NewPolicy $NewPolicy Creates a new policy with the $NewPolicy object. | Fix: Replace controls[0].api.call and the corresponding rendered table code with "New-DlpPolicy -NewPolicy $NewPolicy". The module name is metadata, not a parenthesized argument to execute; the reference documents -NewPolicy as the required policy-object parameter. | Source: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest
-->
