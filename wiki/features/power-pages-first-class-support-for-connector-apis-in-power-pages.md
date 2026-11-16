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
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Connector tier and gateway requirements to be confirmed."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["power-pages","connectors","on-premises-data-gateway","server-logic","sql","integration"]
sources:
  - title: "Microsoft 365 Roadmap item 577897"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577897"
    kind: "roadmap"
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
videos: []
related: ["data-policies","managed-environments","agent-identity"]
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
  - governs: "Power Pages-specific control for connector APIs"
    scope: "site"
    ui: null
    api: null
    note: "Not yet on Learn; expected to follow the existing data policy model."
confidence: "low"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577897; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 34
  confirmed: 24
  unconfirmed: 6
  contradicted: 4
  attempts: 1
---

## What's changing

Power Pages will support native Power Platform connectors, so a site can connect to enterprise systems such as SQL, SAP and Oracle without a custom integration layer. The roadmap highlights regulated customers whose data sits behind corporate firewalls.

The design uses the Power Platform on-premises data gateway and the connector framework. The roadmap also mentions server-side logic that can interact with on-premises data sources.

Preview is listed for March CY2027 and general availability for June CY2027, Worldwide only. I found no Learn documentation yet.

## Why it matters

This links an internet-facing site to systems of record. For service owners it changes the threat model: the site becomes a path into internal data, and Power Platform data policies and connector governance apply to a site workload.

It may also replace bespoke middleware, which can cut support effort but moves responsibility to the Power Platform team.

## Risk assessment

**Data exposure**
- Server-side calls can return on-premises records to site visitors. Table permissions do not apply to non-Dataverse data, so filtering must be built into the logic.

**Security & identity**
- Connections run with a stored identity. Decide whose credentials are used and how they are scoped.
- Gateway placement and network rules become part of the site security boundary.

**Autonomy & actions**
- Server-side logic can write to external systems, not only read.

**Change & support**
- Gateway outages will surface as site errors. Support ownership between site and gateway teams must be agreed.

## Cost and licensing

Not yet published. Expect premium connector licensing, gateway hosting and Power Pages capacity to matter. Confirm the details when Microsoft publishes them.

## Scope

Makers and developers of Power Pages sites; tenants that use the on-premises data gateway. Roadmap cloud: Worldwide (Standard Multi-Tenant) only.

## Governance guidance

### Before rollout
- [ ] Review your data policies for the connectors you would expose to sites.
- [ ] Plan gateway capacity, high availability and network rules.
- [ ] Define who may create connections that a site uses.

### At rollout
- [ ] Pilot in a non-production environment with a read-only service account.
- [ ] Test every server-side call for over-exposure of data.

### After rollout
- [ ] Monitor gateway health and call volumes.
- [ ] Audit connection ownership and rotate credentials regularly.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors may be used in an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowed endpoints for HTTP and custom connectors</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Data policy › Prebuilt Connectors › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Power Pages-specific control for connector APIs</strong><br><small>Site</small><br><small class="controls__note">Not yet on Learn; expected to follow the existing data policy model.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Until Microsoft publishes preview documentation, the only certain controls are the ones that already govern connectors everywhere in Power Platform. Anonymous site visitors make connector governance more consequential than in apps, so the data policy for environments that host public sites deserves a review before the preview arrives.

## Open questions

- Which connectors are supported at preview?
- How are connection identities and per-visitor authorisation handled?
- What licensing applies to anonymous visitors?

<!-- rationale
risk: High. It lets a public-facing site reach on-premises enterprise systems, so a permission or design error could expose internal data.
cost: Medium. Connector and gateway use may need premium licensing and gateway infrastructure; Power Pages terms for this feature are not yet published.
impact: Medium. It affects teams that build external sites on enterprise data, and the visitors who use them.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] front matter: defaultState / default: Nobody can use the capability until an administrator enables or configures it. | Found: Searched: Power Pages connector APIs server-side logic connectors site enable disable licensing data policies table permissions identity; "Power Pages" "connectors" "enable" "PowerShell". Read server-logic-overview and disable-external-service-calls; neither establishes this default. | Fix: Set defaultState to unknown. The roadmap does not specify an administrator opt-in requirement; do not infer one from gateway setup or from existing server logic settings.
- [supported, minor] controls[1].ui; Governance controls / admin-path: A data policy's Prebuilt Connectors page exposes Configure connector > Connector endpoints for eligible connectors. | Found: If the value of the Endpoint configurable column is Yes, you can use this capability by right-clicking and then selecting Configure connector > Connector endpoints. | Fix: Include the policy-selection step: Data policy > policy > Prebuilt Connectors > connector > Configure connector > Connector endpoints. State that Endpoint configurable must be Yes. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [contradicted, blocker] controls[1].governs; Governance controls / applicability: The listed endpoint-filtering UI and cmdlet govern allowed endpoints for custom connectors as well as HTTP connectors. | Found: it's exclusively available for the following connectors:
- HTTP
- HTTP with Microsoft Entra ID (AD)
- HTTP Webhook
- SQL Server (includes using SQL Server Connector to access Azure Synapse data warehouse)
- Azure Blob Storage
- SMTP
- Browser Automation
- UI Automation | Fix: Remove custom connectors from this row's governs text. Custom connector host-URL classification is a different control under Data Policies > Custom connectors, documented at https://learn.microsoft.com/power-platform/admin/dlp-custom-connector-parity. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [supported, minor] controls[1]; Governance controls / behaviour: Endpoint filtering is presented without a preview qualification. | Found: This is a preview feature.
- Preview features aren’t meant for production use and might have restricted functionality. | Fix: Add a note marking endpoint filtering as preview and stating that it evaluates static designer endpoints, not dynamically bound runtime endpoints. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [unsupported, blocker] Why it matters; controls[0]; controls[1]; Governance controls closing paragraph / applicability: The listed data-policy and endpoint-filtering controls are confirmed controls for the new native Power Pages connector workload. | Found: Searched: "Power Pages" "connector" "data policies"; Power Pages connector APIs server-side logic connectors site enable disable licensing data policies table permissions identity. Read connector-action-control, connector-endpoint-filtering and Data policies excerpts; none confirms this feature's en | Fix: Mark both rows as general controls whose applicability to native Power Pages connector APIs is not yet confirmed. Attribute the general governance promise to the roadmap and remove the assertion that these are certain enforcing controls for this workload.
- [unsupported, blocker] Risk assessment: Data exposure / applicability: Table permissions do not apply to this capability's non-Dataverse data, so filtering must be implemented in logic. | Found: Searched: "Power Pages" "table permissions" "external" "virtual"; Power Pages server logic connectors external data table permissions stored credentials write gateway errors. Read server-logic-overview and virtual-table security excerpts; neither defines native connector API authorization. | Fix: Replace with: Microsoft has not documented how per-visitor authorization is enforced for native connector API data; validate this before exposing records. Do not assert that table permissions cannot participate.
- [unsupported, major] Risk assessment: Security & identity / behaviour: Connections for this new capability run with a stored identity. | Found: Searched: Power Pages server logic connectors external data table permissions stored credentials write gateway errors. Read server-logic-overview and Power Pages connectivity excerpts; these describe general server secrets or Dataverse authentication, not native connector connection identity. | Fix: Replace with: Connection identity and per-visitor delegation are not yet documented; confirm whose credentials are used and how they are scoped.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The planned native connector integration can write to external systems, not only read. | Found: Searched: Power Pages server logic connectors external data table permissions stored credentials write gateway errors. Read server-logic-overview, including Supported HTTP methods. General server logic supports external writes, but neither it nor the roadmap specifies native connector operations. | Fix: Say that general Power Pages server logic supports external writes, citing https://learn.microsoft.com/power-pages/configure/server-logic-overview, but supported operations for the planned native connector capability are not yet documented.
- [unsupported, major] Risk assessment: Change & support / behaviour: Gateway outages will surface as site errors. | Found: Searched: "Power Pages" "gateway" "error"; Power Pages server logic connectors external data table permissions stored credentials write gateway errors. Read server-logic-overview and Power Pages FAQ error excerpts; no native connector gateway failure behavior is specified. | Fix: Frame this as a risk to test: Gateway outages could disrupt site integrations; test failure handling and agree support ownership before production.
- [supported, minor] Governance controls closing paragraph; rationale: risk / behaviour: Power Pages sites can be publicly accessible to anonymous visitors. | Found: The public setting makes the site accessible to everyone over the Internet anonymously or to users authenticated through identity providers. | Fix: Cite https://learn.microsoft.com/power-pages/security/power-pages-security for this background fact; distinguish public-site scenarios from the default private visibility. | Source: https://learn.microsoft.com/power-pages/security/power-pages-security
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: A medium cost rating is justified despite unpublished feature licensing and no established feature-specific consumption cost. | Found: cost: "medium"; licensing.model: "unknown"; rationale: "Connector and gateway use may need premium licensing and gateway infrastructure". The standard requires low when unpublished licensing leaves only admin time established. | Fix: Set cost to low and explain that currently evidenced work is planning and administration while feature-specific licensing remains unpublished. Do not rate hypothetical premium licensing as an established cost.
- [contradicted, minor] front matter: action / consistency: Prepare is the appropriate action for this optional new connector capability. | Found: action: "prepare"; What's changing: "Power Pages will support native Power Platform connectors". The standard assigns review to a new optional capability when no source says existing behavior changes without adoption. | Fix: Set action to review: neither the roadmap nor the researched documentation says existing sites change or start calling connectors automatically.
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance table represents all controls the checklist asks administrators to review or monitor. | Found: Checklist: "Plan gateway capacity, high availability and network rules", "Define who may create connections", "Monitor gateway health and call volumes", "Audit connection ownership". The table contains only data policies, endpoint filtering and an undocumented feature control. | Fix: Add documented rows for gateway availability/monitoring and connection creation/ownership controls, or narrow the checklist to planning and testing advice that does not imply these controls have been mapped.
-->
