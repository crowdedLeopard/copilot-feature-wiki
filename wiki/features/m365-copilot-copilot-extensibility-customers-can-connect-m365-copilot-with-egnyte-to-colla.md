---
title: "Microsoft 365 Copilot: Egnyte connector for indexing Egnyte files"
slug: "m365-copilot-copilot-extensibility-customers-can-connect-m365-copilot-with-egnyte-to-colla"
roadmapId: 513283
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins can index Egnyte files into Microsoft 365 Copilot and Microsoft Search with a Copilot connector. An admin creates the connection; Learn's default access setting is wide, so decide it first."
status: "launched"
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
  notes: "Learn's connector prerequisites page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences; Copilot grounding needs the Microsoft 365 Copilot add-on or Microsoft 365 E7. No price specific to the Egnyte connector is published."
audiences: ["m365-admin","security","service-owner"]
tags: ["copilot-connectors","m365-copilot","copilot-search","extensibility","oversharing","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 513283"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=513283"
    kind: "roadmap"
  - title: "Egnyte connector overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-overview"
    kind: "learn"
  - title: "Deploy the Egnyte connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-deployment"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Manage connector connections"
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
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["copilot-connectors","declarative-agents","m365-copilot-copilot-extensibility-customers-can-connect-m365-copilot-with-pagerduty-to-ac"]
controls:
  - governs: "Who can see indexed Egnyte files (set when the connection is created)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Gallery > Egnyte > Custom setup > Customize user settings > Access permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-deployment"
    api: null
    note: "Choose Only people with access to this data source (recommended) or Everyone. Updating after creation isn't currently supported; delete and recreate."
  - governs: "Which users and groups see connector results during a staged rollout"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Staged Rollout > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    api: null
    note: "AI administrator role. Up to 100 users and 15 Microsoft 365 groups. Applies to Search and Copilot experiences."
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
    note: "Graph reference for deleting an externalConnection; least-privileged permission is ExternalConnection.ReadWrite.OwnedBy."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-24T23:15:57"
changes:
  - date: "2026-11-25"
    note: "First briefing for this roadmap item: the roadmap shows Launched, and Learn documents the Egnyte connector, its deployment, licensing context and controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 77 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 75
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "372c9bd9983026a52cb6999595d0b807"
---

## What's changing

The roadmap item states that customers can connect Microsoft 365 Copilot with Egnyte, a file storage service, to collaborate on secure file storage with a Copilot connector. The record lists the status as Launched, a target of December CY2025, the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability as the release phase.

Microsoft Learn documents the connector. The Egnyte Microsoft 365 Copilot connector "enables your organization to index files stored in Egnyte so users can retrieve them through Microsoft 365 Copilot and Microsoft Search" ([overview](https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-overview)). Microsoft's March 24, 2026 release notes also list it, describing that Copilot can now access files stored in Egnyte ([release notes](https://learn.microsoft.com/microsoft-365/copilot/release-notes)).

An admin adds the connection in the Microsoft 365 admin center under Copilot > Connectors > Gallery, and per the deployment guide "The Egnyte connector starts indexing content right away" after **Create**. The connector indexes files only; comments and replies are not indexed. Developers can also use it as a knowledge source in declarative agents built with Copilot Studio, Agent Builder in Microsoft 365 Copilot or the Microsoft 365 Agents Toolkit.

The overview lists limitations: it doesn't support incremental crawl, large file annotations might cause ingestion errors, and Egnyte API rate limits can prevent successful crawls unless those limits are increased with Egnyte. The deployment guide's default table lists a full crawl every day.

## Why it matters

This connector puts the contents of a file store into the reach of Copilot and Microsoft Search, so the service owner is deciding who can find Egnyte documents from Microsoft 365. The decision is made in the connection's access permissions, and Learn says that setting cannot be updated after the connection is created.

Learn describes the connection as created by an admin in the Gallery, and no page read says a tenant receives it without that step. The two Learn pages also differ on default visibility (see Data exposure below), which is the point to resolve before the first crawl.

## Risk assessment

**Data exposure**

- The deployment guide's default table says "All files accessible to any Egnyte user are visible to all Microsoft 365 users in your tenant." The overview says the connector respects Egnyte's native permissions and that admins choose between **Everyone** and **Only people with access to this data source (recommended)**. Treat the setup choice as the control, not the default text.
- Choosing **Everyone** shows indexed data in search results for all users. The manage-access page warns that granting access to **Everyone** can lead to oversharing of sensitive content.
- If Egnyte user emails don't match Microsoft Entra ID user principal names, the overview says identity mapping can be configured, so a wrong mapping affects who sees files.

**Security & identity**

- The connector authenticates with **OAuth 2.0 using Client ID and Secret**, taken from an app registered as a Publicly Available Application in the Egnyte developer portal. Decide who holds that client secret.

**Autonomy & actions**

- The pages read describe search and retrieval of indexed files. The overview says the connector can be a knowledge source for declarative agents, which extends where Egnyte content is surfaced.

**Change & support**

- Updating access permissions after creation isn't currently supported on Learn; the route is to delete the connection and recreate it with **Custom setup**.
- Learn says that if connection failures prevent delete detection from running reliably, items not rediscovered during crawls for 28 days are automatically removed from the Microsoft 365 index.

## Cost and licensing

Learn's connector prerequisites page states: "Indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses." Its licensing table lists Microsoft Search for Microsoft 365 (any plan), and Copilot grounding and agents for Microsoft 365 plus the Microsoft 365 Copilot add-on, or Microsoft 365 E7. With a Copilot Studio licence or Microsoft 365 Copilot pay-as-you-go, the table shows agents only, with no Copilot grounding. The Egnyte connector indexes files, so that synced-connector table is the one that reads on it.

The same page says that where an organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply, and that advanced features such as semantic search require at least one Microsoft 365 Copilot licence in the tenant.

On the Egnyte side, the deployment guide's prerequisites include an Egnyte developer account with a registered application and a confirmed API rate limit appropriate for the expected crawl volume. No price or meter specific to the Egnyte connector is published on the Egnyte or prerequisites pages at the time of writing (November 2026). Budget admin time for the Egnyte setup and the access decision.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. Learn's prerequisites page says that to configure and deploy Copilot connectors you must be an AI administrator in the Microsoft 365 admin center; the Egnyte deployment guide lists "Microsoft 365 admin permissions to deploy connectors".

On the Egnyte side, the guide requires Egnyte admin permissions in your Egnyte domain, an Egnyte developer account with a registered application, and a client ID and secret. The instance URL takes the form https://<domain>.egnyte.com and must match the domain configured in the Egnyte developer application.

Defaults in the deployment guide: all published files are selected, default Egnyte properties are indexed, the content filter default is the last one year, and the full crawl runs every day. Staged rollout can restrict who sees the connector's results to up to 100 users and 15 Microsoft 365 groups.

## Governance guidance

### Before rollout

- Decide whether indexed Egnyte files should be visible to **Everyone** or only to **people with access to this data source**, because the setting cannot be updated after creation.
- Ask the Egnyte admin to register the developer application, supply the client ID and secret, and confirm the API rate limit for the expected crawl volume.
- Confirm the person deploying holds the AI administrator role.
- Check whether Egnyte user emails match Microsoft Entra ID user principal names, to choose the identity mapping option.

### At rollout

- Create the connection from the Gallery, using **Custom setup** so access permissions are chosen explicitly.
- Turn on **Rollout to limited audience** and name a pilot set of users and groups before opening results to the organisation.
- Check the connection state on the **Your Connections** tab after the first crawl.

### After rollout

- Review the **Permissions** shown in the connection's details pane, and delete and recreate the connection if they don't match the intended visibility.
- Watch for **Failed** connection states and the service health notifications Learn describes for permanent crawl failures.
- End the staged rollout only once pilot users confirm the results respect Egnyte permissions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can see indexed Egnyte files (set when the connection is created)</strong><br><small>Tenant</small><br><small class="controls__note">Choose Only people with access to this data source (recommended) or Everyone. Updating after creation isn't currently supported; delete and recreate.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Gallery › Egnyte › Custom setup › Customize user settings › Access permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-deployment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users and groups see connector results during a staged rollout</strong><br><small>Group</small><br><small class="controls__note">AI administrator role. Up to 100 users and 15 Microsoft 365 groups. Applies to Search and Copilot experiences.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Staged Rollout › Edit <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the connection exists and its indexed data is kept (delete)</strong><br><small>Tenant</small><br><small class="controls__note">Graph reference for deleting an externalConnection; least-privileged permission is ExternalConnection.ReadWrite.OwnedBy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Delete <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Connector deployment and management need the AI administrator role according to Learn's prerequisites and staged-rollout pages. The access permissions choice is made at creation and, per Learn, cannot be changed later, so a wrong choice means deleting the connection and recreating it, which re-indexes the content.

Staged rollout settings apply to all Search and Copilot experiences. Removing staged rollout makes the connection's results appear to all users in the organisation who have access.

## Open questions

- Which default applies to access permissions when an admin accepts the quick setup: the deployment guide's default table says visible to all Microsoft 365 users, while the overview recommends only people with access to the data source? Watch the Egnyte deployment and overview pages.
- Does the deployment guide's list of daily full crawl only match the connector's behaviour, given the overview says incremental crawl isn't supported? Watch the Learn pages for revision.
- Is a price or meter specific to the Egnyte connector planned beyond the Microsoft 365 licensing described on the prerequisites page? Watch the prerequisites page and Message center.
- Which Microsoft Graph or PowerShell operation, if any, will cover Egnyte connection access permissions and staged rollout? Watch the Copilot connectors pages on Learn.

<!-- rationale
risk: Medium. Learn's default table lists all files accessible to any Egnyte user as visible to all Microsoft 365 users in the tenant, so the access choice made at setup decides how far Egnyte files spread.
cost: Low. Learn says indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences; the cost shown is admin time and Egnyte-side API setup. Copilot grounding needs the Copilot add-on or Microsoft 365 E7.
impact: Low. Admins deploy it; users notice only once a connection exists, when Egnyte files can appear in Copilot answers and search results.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters; Open questions: first bullet / behaviour: The Egnyte deployment and overview pages state different default visibility settings. | Found: Searched: 'Egnyte connector default access permissions quick setup Everyone Only people default'; opened egnyte-deployment and egnyte-overview. Deployment states a default; overview describes both choices and recommends source-restricted access, without specifying a different setup default. | Fix: Replace 'The two Learn pages also differ on default visibility (see Data exposure below), which is the point to resolve before the first crawl.' with 'The deployment guide lists tenant-wide visibility by default, while the overview recommends restricting access to people with access to the data source.' Remove the first Open questions bullet; the overview's recommendation does not establish a competing default.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; What's changing / admin-path: Access permissions are reached through Microsoft 365 admin center > Copilot > Connectors > Gallery > Egnyte > Custom setup > Customize user settings > Access permissions. | Found: Select the Connectors tab, and then choose Gallery. ... From the list of available connectors, select Egnyte. ... To customize these values, choose Custom setup. ... Customize user settings ... Access permissions | Fix: The cited staged-rollout guide supports going from Copilot > Connectors to Gallery, so the shorter route is supported. To match the Egnyte deployment guide explicitly, use 'Copilot > Connectors > Connectors > Gallery > Egnyte > Custom setup > Customize user settings > Access permissions', explaining that the second Connectors is the tab; use 'Copilot > Connectors > Connectors > Gallery' in the deployment prose. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-deployment
- [supported, minor] controls[2].governs; Governance controls table / behaviour: Deleting the connection removes the items indexed through it. | Found: To remove all items that were indexed via a connection, you can delete a connection. | Fix: Add https://learn.microsoft.com/graph/connecting-external-content-manage-connections to sources; it explicitly supports the row's indexed-data removal claim. | Source: https://learn.microsoft.com/graph/connecting-external-content-manage-connections
- [supported, minor] Scope / behaviour: The Egnyte instance URL has the form https://<domain>.egnyte.com. | Found: Egnyte Domain: Enter only the domain prefix (for example, if your Egnyte URL is https://<your-domain>.egnyte.com, enter your-domain). | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-admin-setup to sources; its example explicitly supplies the domain placeholder lost in the deployment page's rendered URL. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/egnyte-admin-setup
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist names identity mapping, but the controls table has no identity-mapping row. | Found: Check whether Egnyte user emails match Microsoft Entra ID user principal names, to choose the identity mapping option. ... Table controls: access permissions; staged rollout; delete connection. | Fix: The Before rollout identity-mapping checklist step has no controls-table row. Remove that checklist bullet; retain the supported identity-mapping description in Risk assessment.
-->
