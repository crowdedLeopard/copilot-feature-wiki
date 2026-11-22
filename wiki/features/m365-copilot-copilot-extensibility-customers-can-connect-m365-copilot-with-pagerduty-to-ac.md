---
title: "Microsoft 365 Copilot: PagerDuty connectors for escalation policies and on-call schedules"
slug: "m365-copilot-copilot-extensibility-customers-can-connect-m365-copilot-with-pagerduty-to-ac"
roadmapId: 515161
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins can index PagerDuty escalation policies and schedules into Microsoft 365 Copilot with Copilot connectors. Nothing is indexed until an admin creates the connection; the access setting is fixed at creation."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn's connector prerequisites table lists Copilot grounding from synced connectors under Microsoft 365 plus the Microsoft 365 Copilot add-on, or Microsoft 365 E7. No price specific to the PagerDuty connectors is published on the pages read."
audiences: ["m365-admin","service-owner","security"]
tags: ["copilot-connectors","m365-copilot","copilot-search","extensibility","oversharing","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 515161"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=515161"
    kind: "roadmap"
  - title: "PagerDuty Escalation Policies connector overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-escalation-policies-overview"
    kind: "learn"
  - title: "Deploy the PagerDuty Escalation Policies connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-escalation-policies-deployment"
    kind: "learn"
  - title: "PagerDuty Schedules connector overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-schedules-overview"
    kind: "learn"
  - title: "Deploy the PagerDuty Schedules connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-schedules-deployment"
    kind: "learn"
  - title: "PagerDuty Schedules Copilot connector (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-schedules-connector"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Manage Microsoft 365 Copilot connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Manage access permissions for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    kind: "learn"
  - title: "Staged rollout for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    kind: "learn"
  - title: "Delete externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete"
    kind: "learn"
  - title: "Create, update, and delete connections in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-connections"
    kind: "learn"
  - title: "Microsoft Graph permissions reference"
    url: "https://learn.microsoft.com/graph/permissions-reference"
    kind: "learn"
videos: []
related: ["m365-admin-center-usage-reports-m365-copilot-connectors","m365-copilot-streamlined-authentication-process-with-oauth-for-connector-admins"]
controls:
  - governs: "Who can access indexed escalation policies (set when the connection is created)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Gallery > PagerDuty Escalation Policies > Custom setup > Customize user settings > Access permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-escalation-policies-deployment"
    api: null
    note: "Choice is visible to everyone or only users with access to the data source. Updating after creation isn't supported; delete and recreate."
  - governs: "Which users and groups see connector data during a staged rollout"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Staged Rollout > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    api: null
    note: "AI administrator role. Up to 100 users and 15 Microsoft 365 groups. Applies to Search and Copilot experiences."
  - governs: "Whether the connection's content appears in Copilot Search and Copilot Chat"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Copilot Visibility"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "Page introduces this toggle for partner data sources. Off means the connection can still crawl but is excluded from Copilot Search and Copilot Chat results; allow up to 30 minutes to propagate."
  - governs: "Whether the connection exists and its indexed data is kept (delete)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Delete"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    api:
      kind: "graph"
      call: "DELETE /v1.0/external/connections/{connectionsId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete"
    note: "ExternalConnection.ReadWrite.OwnedBy restricts the app to authorised connections; ExternalConnection.ReadWrite.All allows the app to read and write all external connections."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-10-23T23:00:40"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item: Learn already documents the PagerDuty Escalation Policies and Schedules connectors, while the roadmap record still shows In development."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 77 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: licensing model set to included, schedules default access permissions, preview status of the Schedules connector, and unsupported statements removed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 79
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "52da66e2cba58ad234e145e3415e5232"
---

## What's changing

The roadmap item states that customers can connect Microsoft 365 Copilot with PagerDuty to access escalation policies and on-call schedules with a Copilot connector. The record lists the status as In development, a target of December CY2025, the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability as the release phase. That target month has passed and the record still shows In development.

Microsoft Learn already documents two connectors that cover those two data types, so the two sources differ on timing. The PagerDuty Escalation Policies connector "enables your organization to index PagerDuty escalation policy data to make it available to Microsoft 365 Copilot and Microsoft Search" ([overview](https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-escalation-policies-overview)). The PagerDuty Schedules connector "integrates PagerDuty schedule data into Microsoft 365" ([overview](https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-schedules-overview)). The PagerDuty Schedules connector is currently in preview, might have limited availability and is subject to change, according to its Learn overview. The roadmap item does not name either connector.

The escalation policies connector indexes policy metadata, escalation rules (including the minutes before an unacknowledged incident escalates and the targets it is assigned to), the services that use each policy and the teams linked to it. It supports a full crawl only, and the default schedule is daily ([deployment guide](https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-escalation-policies-deployment)).

## Why it matters

On-call rosters and escalation rules are operational data. Indexing them into Microsoft 365 makes them available to Copilot, Copilot Search and Microsoft Search for whoever the connection's access setting allows, so the service owner is deciding who may read incident-response structure.

Learn describes deployment as an admin task: the connection is created in the Microsoft 365 admin center and "starts indexing content right away". Nothing in the pages read says a tenant receives either connector without that step. The access-permissions choice is the one to settle first, because Learn states it cannot be updated after the connection is created.

## Risk assessment

**Data exposure**

- The default for users is that "All users in the organization can access indexed escalation policies". Rule detail and linked services are indexed by default, so the default makes that structure searchable organisation-wide.
- When Advanced Permissions is enabled in PagerDuty, only members of the teams linked to a specific escalation policy can access and search for it in Microsoft Search and Microsoft 365 Copilot. The same limitation is documented for schedules.
- The audit properties (createdBy, createdDateTime, lastModifiedBy, lastModifiedDateTime) are indexed by default and need a PagerDuty Business or Enterprise plan licence.

**Security & identity**

- The connector authenticates with a PagerDuty OAuth 2.0 app whose Client ID and Client Secret an admin enters. The deployment guide lists read-access scopes for Audit records, Escalation Policies, Teams and Users. Review who holds that secret.

**Autonomy & actions**

- The pages read describe search and retrieval over indexed data. The overview also says developers can use the connector as a knowledge source in declarative agents built with Copilot Studio, Agent Builder or the Microsoft 365 Agents Toolkit, which extends who can surface this data.

**Change & support**

- The access setting cannot be edited later: Learn's route is to delete the connection and recreate it with Custom setup. The PagerDuty Escalation Policies overview instead says admins can customize access permissions later through connector settings; this conflicts with the Manage access permissions page ([overview](https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-escalation-policies-overview)).
- Learn states that items not rediscovered during crawls for 28 days are automatically removed from the index when connection failures prevent delete detection from running reliably, so stale or missing policies can follow a failing connection.

## Cost and licensing

Learn's connector prerequisites page states: "Indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses." Its licensing table shows synced connectors feeding Copilot grounding and agents under Microsoft 365 plus the Microsoft 365 Copilot add-on, or Microsoft 365 E7. Under a Microsoft 365 plan alone the table shows Microsoft Search only. Under a Copilot Studio licence or Microsoft 365 Copilot pay-as-you-go it shows agents only, with no Copilot grounding. The page also says that with Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply.

On the PagerDuty side, a PagerDuty Business or Enterprise plan licence is required to index the audit properties. The PagerDuty pages read publish no price or meter specific to these connectors at the time of writing (November 2026). Budget admin time for the OAuth app setup and the access-permissions decision.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn's connector prerequisites page says that configuring and deploying Copilot connectors requires the AI administrator role in the Microsoft 365 admin center, and that a PagerDuty admin must complete the OAuth setup. The deployment guide itself says "You must be a Microsoft 365 admin".

Prerequisites on the PagerDuty side are an account with administrator permission, API access, and an OAuth 2.0 app registered with Scoped OAuth. The Instance REST API URL depends on the PagerDuty service region: US or EU. Escalation policies are visible to all users in the organisation by default; schedules default to only people with access to the content in the data source. Staged rollout can limit results to up to 100 users and 15 Microsoft 365 groups, subject to access permissions ([schedules deployment guide](https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-schedules-deployment)).

## Governance guidance

### Before rollout

- Decide who may read escalation policies and schedules, and choose between visible to everyone and only people with access to the data source before creating the connection.
- Confirm with the PagerDuty admin whether Advanced Permissions is enabled, because the connector honours it only when it is.
- Ask the PagerDuty admin to register the OAuth app with the read scopes the deployment guide lists, and agree who stores the Client Secret.
- Check that the AI administrator role holder is available, as that role is needed to deploy.

### At rollout

- Create the connection from the Gallery tab, using Custom setup when the default access setting is not wanted.
- Use **Rollout to limited audience** for a first group of users and groups before opening the connection to the organisation.
- Check the connection state on the Your Connections tab after the first crawl.

### After rollout

- Review the access permissions shown for the connection in its details pane, and delete and recreate it if they do not match the intended visibility.
- Watch for Failed connection states and the service health notifications Learn describes for permanent crawl failures.
- Re-read the roadmap item and the Learn pages when the status changes from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can access indexed escalation policies (set when the connection is created)</strong><br><small>Tenant</small><br><small class="controls__note">Choice is visible to everyone or only users with access to the data source. Updating after creation isn't supported; delete and recreate.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Gallery › PagerDuty Escalation Policies › Custom setup › Customize user settings › Access permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-escalation-policies-deployment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users and groups see connector data during a staged rollout</strong><br><small>Group</small><br><small class="controls__note">AI administrator role. Up to 100 users and 15 Microsoft 365 groups. Applies to Search and Copilot experiences.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Staged Rollout › Edit <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the connection's content appears in Copilot Search and Copilot Chat</strong><br><small>Tenant</small><br><small class="controls__note">Page introduces this toggle for partner data sources. Off means the connection can still crawl but is excluded from Copilot Search and Copilot Chat results; allow up to 30 minutes to propagate.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the connection exists and its indexed data is kept (delete)</strong><br><small>Tenant</small><br><small class="controls__note">ExternalConnection.ReadWrite.OwnedBy restricts the app to authorised connections; ExternalConnection.ReadWrite.All allows the app to read and write all external connections.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Delete <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All four rows below are admin centre settings. Learn's connector prerequisites page names the AI administrator role for deploying and managing connectors. The access setting is chosen at creation and the page states that updating it afterwards is not supported, so the route to change it is the delete row.

Staged rollout limits who sees connector data in Search and Copilot results; it does not change the access permissions. The Copilot Visibility toggle is described on Learn for partner data sources, and the page read does not say whether it covers these connectors. Microsoft Learn documents the Graph delete operation for connections an app created or was authorised to manage, and does not say whether it covers connections created from the admin center gallery.

## Open questions

- When will the roadmap item move from In development, given that Learn already documents the escalation policies and schedules connectors and the target month (December CY2025) has passed? Watch the roadmap item and Message center.
- Does the Copilot Visibility toggle, which Learn describes for partner data sources, apply to these PagerDuty connectors? Watch the Manage connector connections page.
- Will access permissions become editable after creation? The Manage access permissions page says this is not currently supported.
- Is a price or meter specific to the PagerDuty connectors planned beyond the Microsoft 365 licensing described on the prerequisites page? Watch the connector prerequisites page.

<!-- rationale
risk: Medium. Once a connection is created, all users in the organisation can access indexed escalation policies by default, and access permissions cannot be updated after creation, so the choice needs making before deployment.
cost: Low. Learn states that indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences, and Copilot grounding needs a Microsoft 365 Copilot licence; the visible cost is admin time and PagerDuty-side plan needs.
impact: Low. Admins and PagerDuty admins set it up; users notice only when Copilot answers on-call or escalation questions after an admin has deployed a connection.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope / role: A PagerDuty admin must complete OAuth setup, attributed to the connector prerequisites page. | Found: Set up OAuth prerequisites | PagerDuty admin | Fix: Replace the attribution with: 'The PagerDuty Schedules deployment guide assigns OAuth prerequisite setup to a PagerDuty admin.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-schedules-deployment. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/pagerduty-schedules-deployment
- [contradicted, minor] Governance guidance: Before rollout and At rollout / consistency: Every control the governance checklist asks the reader to check or configure is represented in the controls table. | Found: Checklist: 'Decide who may read escalation policies and schedules'; 'Confirm ... Advanced Permissions'; 'register the OAuth app'; 'Check the connection state'. Table covers escalation-policy access, staged rollout, Copilot Visibility and delete. | Fix: The checklist's schedules access setting, PagerDuty Advanced Permissions and OAuth app settings, and connection-state monitoring have no corresponding controls row. Remove these checklist instructions if strict checklist/table alignment is required; do not add rows as part of this correction.
-->
