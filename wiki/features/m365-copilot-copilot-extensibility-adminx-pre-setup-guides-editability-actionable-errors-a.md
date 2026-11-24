---
title: "Microsoft 365 Copilot connectors: set-up guides, editing, error detail and alerts for connector admins"
slug: "m365-copilot-copilot-extensibility-adminx-pre-setup-guides-editability-actionable-errors-a"
roadmapId: 502529
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Connector admins get pre-setup guides, editing of published connections, actionable errors and failure alerts. Launched on the roadmap for Worldwide; it needs no admin action, but alerts are worth subscribing to."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "mixed"
  notes: "Connector licensing is set by the connectors prerequisites page: synced connectors need Microsoft 365 licences, and federated connectors need a Microsoft 365 Copilot add-on licence or Microsoft 365 E7 for every user who queries the federated source. Nothing specific to this feature is published."
audiences: ["m365-admin","service-owner"]
tags: ["copilot-connectors","m365-copilot","m365-admin-center","monitoring","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap 502529"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502529"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Manage Microsoft 365 Copilot connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Monitor Microsoft 365 Copilot connector errors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses"
    kind: "learn"
  - title: "Deploy connectors in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Set up Galileo by The Josh Bersin Company for connector ingestion"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/galileo-admin-setup"
    kind: "learn"
  - title: "Update externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update"
    kind: "learn"
  - title: "How to check Microsoft 365 service health"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"
    kind: "learn"
  - title: "View details about your Tenant on the Intune tenant status page"
    url: "https://learn.microsoft.com/intune/governance/tenant-status"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-admins-can-now-edit-user-mappings-and-query-filters-for-servicenow-connector","m365-copilot-streamlined-authentication-process-with-oauth-for-connector-admins","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-admin-center-usage-reports-m365-copilot-connectors"]
controls:
  - governs: "Editing a published or draft connection's settings"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{connectionsId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update"
    note: "AI administrator role. The request body can set name, description and configuration only; the admin center edits more, for Microsoft-built connectors."
  - governs: "Viewing and downloading connection errors"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connection > Error"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses"
    api:
      kind: "powershell"
      call: "DownloadErrorScript.ps1"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses"
    note: "Read-only. The admin center shows a limited set of errors; the script downloads the item errors for a connection ID, up to 5,000 errors per batch."
  - governs: "Email notifications for failed connector crawls"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Health > Service health > Customize > Email > Issues in your environment that require action"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "Select Microsoft 365 suite under Include these services so Copilot connector notices are included; up to two email addresses. Service-health guidance also says to select Send me email notifications about service health on the Email tab."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-24"
roadmapModified: "2026-07-02T23:12:48"
changes:
  - date: "2026-11-23"
    note: "New briefing on connector admin set-up guides, editing, error detail and failure alerts, launched on the roadmap with a June CY2026 target."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected federated-connector licensing to include Microsoft 365 E7, removed the claim that licensing is unchanged, dropped an uncontrolled checklist step and added the service-health email option."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 77 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 74
  unconfirmed: 2
  contradicted: 1
  attempts: 0
  hash: "6daf17378c1fbeef7660a3d67c4a0fda"
---

## What's changing

Microsoft 365 Roadmap item 502529 covers four improvements for Microsoft 365 Copilot connector admins: pre-setup guides, editability, actionable errors and alerting support. The roadmap record gives its status as Launched, with a target of June CY2026, release phase General Availability, platform Web and cloud Worldwide (Standard Multi-Tenant). Microsoft's Microsoft 365 Copilot release notes list the item under September 23, 2026 and say connector admins "now have access to pre-setup guides that outline configuration steps before deployment", can edit settings after set-up, and receive actionable error messages with alerting support.

Microsoft Learn does not say which pages are the roadmap item's guides or screens, so what follows is what Learn documents for connectors at the time of writing (November 2026), not a description of this item's internals.

**Editing.** In the Microsoft 365 admin center, a published Microsoft-built connection can be edited for its name and description, connection settings, property labels, schema, refresh schedule and, for ServiceNow, the query string, advanced criteria and user mapping. A published partner connection can be edited for name and description only. A draft connection can be edited for Microsoft-built connectors but not partner connectors. Editing a connection might trigger a full crawl, where applicable.

**Errors and alerts.** The connection's **Error** tab lists error codes, their counts and a downloadable log, and Learn gives a message and, for most codes, a solution; for example, code 1005 (expired credentials) says to renew the credentials and update the connection. When a crawl fails permanently, the connection is marked **Failed** and Microsoft sends a notification to service health, notification bars on the admin center home page, and optionally email. **Set-up guides.** Learn carries per-connector set-up pages, such as the Galileo page, that describe the tasks to complete before you deploy the connector.

## Why it matters

A connector that fails quietly leaves Copilot and Microsoft Search answering from whatever was indexed before the failure. Learn says data indexed until a critical failure stays searchable, and that where failures stop delete detection running reliably, items not rediscovered for 28 days are removed from the Microsoft 365 index. Seeing the failure early, with a code and a stated solution, is what lets an owner repair credentials or quota before content goes stale or disappears.

The release notes say connector admins now have access, and the sources describe no switch, so expect these screens and alerts to be present without any admin action. Nothing needs configuring, but the email subscription is an admin choice, and an owner who never subscribes will rely on spotting the home page notification bar.

## Risk assessment

**Data exposure**

- Editable settings include schema, property labels and, for ServiceNow, user mapping and advanced criteria. These shape what is indexed and how items are matched to users, so treat an edit as a change to what Copilot can retrieve. Test it with a limited audience first; the deployment guide offers a subset-of-users rollout.
- No new data source is added by this item; it changes how existing connections are managed.

**Security & identity**

- Credential errors (codes 1002 and 1005) are fixed by editing the connection's authentication details. Managing connectors requires the AI administrator role, so keep that role to people who may hold source-system credentials.
- The Graph route for editing a connection lists ExternalConnection.ReadWrite.OwnedBy as its least privileged permission, so review which apps hold it.

**Autonomy & actions**

- No change: the sources describe notifications to administrators and edits made by administrators; they do not describe the service changing a connection by itself.

**Change & support**

- A service health notification stays active for six days, then moves to Issue history for up to 30 days, and no new notification is issued for the same connection until crawling restarts. A missed alert can therefore leave a connection in the Failed state unnoticed.
- Editing a published connection can trigger a full crawl, which can add load on the source system and delay fresh content.
- Partner connectors can be edited for name and description only in the admin center, so credential or schema changes there go through the partner's own documentation.

## Cost and licensing

Microsoft publishes no licence, meter or charge specific to this feature at the time of writing. Connector licensing comes from the connectors prerequisites page: the tenant must have Microsoft 365 licences, and indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. Federated connectors need a Microsoft 365 Copilot add-on licence or Microsoft 365 E7 for every user who queries the federated source, and are not supported with Copilot Studio licences or Microsoft 365 Copilot pay-as-you-go.

The indirect costs are administrator time to read errors and edit connections, and any source-system load from a full crawl after an edit.

## Scope

The roadmap record lists the cloud as Worldwide (Standard Multi-Tenant), the platform as Web and the release phase as General Availability. It does not list GCC, GCC High or DoD.

The people affected are administrators. To configure and deploy Copilot connectors you must be an AI administrator in the Microsoft 365 admin center; viewing service health requires a role such as Service Support admin or Helpdesk admin. Editing options differ by connector type: Microsoft-built connectors have the wider list, partner connectors name and description only. Alerts cover permanent crawl failures that mark a connection Failed.

## Governance guidance

### Before rollout

- Confirm which administrators hold the AI administrator role, since that role manages connectors in the Microsoft 365 admin center.
- Subscribe the owning team to service health email for Issues in your environment that require action, with Microsoft 365 suite included, so failure notices reach a mailbox (up to two addresses).
- List your connections under Copilot > Connectors > Your Connections and note any in the Failed or Paused state.

### At rollout

- Open the Error tab of any connection that shows errors and match each code to the solution Learn gives.
- Edit expired credentials from the connection page.
- Read the per-connector set-up page before you create a new connection.

### After rollout

- Check the home page notification bars and service health issues for failed crawls, and act on a Failed connection before items age out.
- Download the full error list with the DownloadErrorScript PowerShell script when the admin center shows only a limited set.
- Record who edited which connection and when, because an edit can trigger a full crawl.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Editing a published or draft connection's settings</strong><br><small class="controls__note">AI administrator role. The request body can set name, description and configuration only; the admin center edits more, for Microsoft-built connectors.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Edit <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Viewing and downloading connection errors</strong><br><small class="controls__note">Read-only. The admin center shows a limited set of errors; the script downloads the item errors for a connection ID, up to 5,000 errors per batch.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connection › Error <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>DownloadErrorScript.ps1</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Email notifications for failed connector crawls</strong><br><small>User</small><br><small class="controls__note">Select Microsoft 365 suite under Include these services so Copilot connector notices are included; up to two email addresses. Service-health guidance also says to select Send me email notifications about service health on the Email tab.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Health › Service health › Customize › Email › Issues in your environment that require action <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

All three rows rely on the AI administrator role for connector pages; the service health row needs a role that can view and customise service health. The Graph row edits only name, description and configuration (application IDs allowed to manage the connection), so it does not reproduce the admin center's wider edit list for schema, property labels, refresh schedule or ServiceNow settings.

The error tab shows a limited set of errors in the admin center; the PowerShell script is how Learn says to get the comprehensive list. The email subscription covers failure notices for the Microsoft 365 suite and is not specific to connectors.

## Open questions

- Which Learn pages are the pre-setup guides named in the roadmap item, and do they cover every Microsoft-built connector? Watch the connector deployment pages and the Microsoft 365 Copilot release notes.
- Does alerting go beyond the service health notification for permanent crawl failures, for example to other error codes? Watch the manage connector page.
- Will partner connectors gain more editable settings than name and description?
- Will the feature reach GCC, GCC High and DoD, which the roadmap record does not list? Watch the roadmap item.

<!-- rationale
risk: Low. These are admin-side tools for connections the tenant already runs; edits change connection settings only when an AI administrator makes them, and nothing new is exposed to users.
cost: Low. The only cost the sources show is admin time; Microsoft publishes no charge specific to this feature. The prerequisites page describes connector licensing (Microsoft 365 licences, or a Copilot add-on or Microsoft 365 E7 for federated connectors).
impact: Low. Only administrators who deploy and maintain Copilot connectors see the new guides, edit options and alerts; end users see no change.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: The item adds no new data source or exposure to users. | Found: Searched: 502529 guides data users; Copilot connectors 502529 pre-setup guides editability actionable errors alerting admin enable switch default. Read roadmap, release-notes, manage-connector and deployment-overview; they describe admin improvements but do not state this exclusion. | Fix: Remove 'No new data source is added by this item; it changes how existing connections are managed' and 'nothing new is exposed to users' from the risk rationale. The remaining admin-tool and editability statements are supported.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Editing / behaviour: Published Microsoft-built ServiceNow connections support editing the query string. | Found: Edit a published connection | ... Query string (ServiceNow) | Fix: Keep the supported editability statement, and add: 'The connectors FAQ disagrees: it says editing a query string after publication is not supported and requires a new connection.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/frequently-asked-questions#general-questions. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Connection editing is reached in the Microsoft 365 admin center through Copilot > Connectors > Your Connections > connection > Edit. | Found: Go to Copilot > Connectors > Your Connections. Select the connection that you want to modify. ... Edit a published connection ... Edit a draft connection. [error-responses: Select Edit to update the authentication credentials.] | Fix: Keep the route supported across the cited manage-connector and error-responses pages. Add: 'The description-editing guide gives a different route: Settings > Copilot > Connectors > connection > Edit description.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/enhance-copilot-discovery. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [unsupported, minor] rationale: impact / behaviour: End users see no change from these improvements. | Found: Searched: 502529 guides data users; Copilot connectors 502529 pre-setup guides editability actionable errors alerting admin enable switch default. Read release-notes, manage-connector and deployment-overview; admin audiences are named, but no complete absence of end-user effects is stated. | Fix: Remove 'end users see no change' from the impact rationale. Replace the rationale with 'Low. Microsoft describes the new guides, edit options and alerts as tools for connector administrators.'
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist tells administrators to confirm AI administrator assignments, but no controls-table row covers role assignments. | Found: Confirm which administrators hold the AI administrator role ... Table rows: Editing a published or draft connection's settings; Viewing and downloading connection errors; Email notifications for failed connector crawls. | Fix: Remove the checklist bullet 'Confirm which administrators hold the AI administrator role, since that role manages connectors in the Microsoft 365 admin center.' The role prerequisite is already stated elsewhere; do not add a control row.
-->
