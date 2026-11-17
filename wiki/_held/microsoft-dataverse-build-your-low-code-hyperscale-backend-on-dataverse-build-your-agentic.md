---
title: "Microsoft Dataverse: Python SDK for scripting and agent workflows"
slug: "microsoft-dataverse-build-your-low-code-hyperscale-backend-on-dataverse-build-your-agentic"
roadmapId: 576876
topic: "power-platform"
products: ["Microsoft Dataverse"]
summary: "Microsoft has launched an open-source Python SDK for Dataverse. Developers install it themselves and run it under their own or an app's permissions; there is no SDK switch in the admin centres, so existing Dataverse controls apply."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "The SDK is published under open-source licensing. The getting-started page lists read/write access to a Dataverse environment as a prerequisite and names no Microsoft licence; what a calling user or application needs is not yet published on the SDK pages."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["dataverse","power-platform","extensibility","web-api","agents","auditing","managed-environments","security-roles"]
sources:
  - title: "Microsoft 365 Roadmap 576876"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576876"
    kind: "roadmap"
  - title: "Dataverse SDK for Python overview"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/sdk-python/overview"
    kind: "learn"
  - title: "Getting started"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/sdk-python/get-started"
    kind: "learn"
  - title: "Quick guide to Dataverse"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/sdk-python/quick-guide-dataverse"
    kind: "learn"
  - title: "Work with Dataverse data by using the Python SDK"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/sdk-python/work-data"
    kind: "learn"
  - title: "Analyze and automate business data with Dataverse SDK for Python"
    url: "https://learn.microsoft.com/power-platform/architecture/reference-architectures/dataverse-sdk-for-python"
    kind: "learn"
  - title: "Requests limits and allocations"
    url: "https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations"
    kind: "learn"
  - title: "Microsoft Dataverse API limits overview"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/api-limits-overview"
    kind: "learn"
  - title: "Which client apps may call the Dataverse API in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/control-app-access-environment"
    kind: "learn"
  - title: "Which Microsoft Entra app registrations have an application user and security roles in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    kind: "learn"
  - title: "Which Microsoft Entra app registrations have an application user and security roles in an environment (Power Platform API)"
    url: "https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser"
    kind: "learn"
  - title: "Whether Dataverse records scripted data changes and access (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Whether Dataverse records scripted data changes and access (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    kind: "learn"
videos: []
related: ["managed-environments","microsoft-dataverse-m365-collaboration-discover-build-customize-and-extend-with-management","mcp","microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use"]
controls:
  - governs: "Which client apps may call the Dataverse API in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Identity and access > App access control > environment > Set up app access control > Access control"
      docs: "https://learn.microsoft.com/power-platform/admin/control-app-access-environment"
    api: null
    note: "General control, not SDK-specific. Requires a managed environment and the Power Platform admin or Dynamics 365 admin role. Not applied to partner apps making service-to-service calls."
  - governs: "Which Microsoft Entra app registrations have an application user and security roles in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    api:
      kind: "power-platform-api"
      call: "POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{environmentIdGuid}/addAppUser?api-version=2020-10-01 with body {\"servicePrincipalAppId\": \"{clientId}\"}"
      docs: "https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser"
    note: "The API page is marked preview and says it always adds the application user as a System Administrator, so reduce the roles afterwards. General control, not SDK-specific."
  - governs: "Whether Dataverse records scripted data changes and access"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Compliance > Auditing > environment > Set up auditing > Turn on auditing"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    api:
      kind: "rest"
      call: "GET [Organization URI]/api/data/v9.2/organizations?$select=isauditenabled,auditretentionperiodv2,isuseraccessauditenabled,useraccessauditinginterval"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    note: "Needs the System Administrator or System Customizer role. The call reads the settings; the page says to change the same organization table columns to change them. General control, not SDK-specific."
  - governs: "A switch that allows or blocks the Dataverse SDK for Python itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting specific to the SDK at the time of writing (November 2026). The general controls above are the nearest alternatives."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-16T19:10:05"
changes:
  - date: "2026-11-17"
    note: "First briefing for the Dataverse SDK for Python: Learn documents install, operations and prerequisites; no SDK-specific admin switch, so general Dataverse controls apply."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 76 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 69
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "fc9a093eed947a3507bbc57be004eb32"
---

## What's changing

Microsoft has released the Dataverse SDK for Python, a package that lets Python developers and data scientists read and write Dataverse data without .NET knowledge. The roadmap item (ID 576876) is marked Launched, with release phases General Availability and Preview, a preview date of November CY2025 and a target date of June CY2026. It lists Worldwide (Standard Multi-Tenant) and the Web platform.

The overview page lists create, retrieve, update and delete operations, bulk operations that use the Dataverse CreateMultiple, UpdateMultiple, UpsertMultiple and BulkDelete Web API operations, read-only direct SQL SELECT queries, pandas DataFrame wrappers, file upload to file columns, batch requests, and create, update and delete of custom tables and columns. It also lists structured error handling and opt-in file-based HTTP diagnostics logging that redacts sensitive headers such as authorization. The SDK calls the Dataverse Web API internally and authenticates with Azure Identity credentials.

The roadmap description also names autonomous data agents, form prediction and autofill, and Model Context Protocol (MCP) and Agent-to-Agent (A2A) support as capabilities that "can include" them. The SDK overview's feature list does not name any of these at the time of writing (November 2026), so treat them as the roadmap's plan, not documented behaviour.

The roadmap says the item is "Enabled for admins/makers/marketers automatically". Learn instead describes installing the package from PyPI with `pip install PowerPlatform-Dataverse-Client`, so a developer chooses to use it. Learn also gives different Python requirements: the getting-started page says Python 3.10+, while the reference-architecture page says Python 3.13 or later.

## Why it matters

This gives anyone with Python and a credential a scripted way to change Dataverse data and, with the right privileges, table schema. It does not add a new data store or a separate permission model: the reference-architecture page says the SDK enforces Dataverse security roles for all data operations, so the exposure is whatever your existing roles already grant, used at script speed.

Expect the first signs to come from developers and data scientists, not from a switch in an admin centre. Learn documents no SDK-specific tenant or environment setting at the time of writing (November 2026), so your levers are the general Dataverse controls: who holds security roles, which apps may authenticate, and what is audited.

## Risk assessment

**Data exposure**

- The SDK extracts tables into pandas DataFrames for analysis. Once data leaves Dataverse into a notebook or file, Dataverse security roles no longer govern it, so decide where such extracts may be stored.
- HTTP diagnostics logging writes all HTTP requests and responses to a file when switched on. Confirm what lands on disk and where before developers enable it against production data.

**Security & identity**

- The getting-started page shows development options (InteractiveBrowserCredential, AzureCliCredential) and production options (ClientSecretCredential, CertificateCredential). Secrets and certificates for the production options live with the developer, so know which app registrations exist.
- Application users give a registered app access to an environment; app access control can allow or block apps by ID, but it needs a managed environment and does not cover partner apps making service-to-service calls. Microsoft's pages do not say which application ID the SDK's tokens carry, so confirm that before relying on a block list.

**Autonomy & actions**

- Bulk operations use BulkDelete and UpsertMultiple, and the SDK can create, update and delete custom tables and columns. A script run under a highly privileged role can change schema or remove many rows in one call.
- `client.files.upload` creates the file column if it does not exist. Learn says this is a permanent schema change and advises creating file columns in advance in production environments.

**Change & support**

- Running `dataverse-install-claude-skill` after installing the package optionally installs two Claude skills, whose definitions are stored on the developer's computer.
- The SDK retries on throttling. Dataverse service protection limits apply to external web service requests, so heavy scripts can slow down other callers sharing the same user account.

## Cost and licensing

The SDK is published under open-source licensing (overview page). The getting-started page lists a Dataverse environment with read/write access, OAuth authentication, Python and network access to PyPI as prerequisites and names no Microsoft licence. What licence a calling user or application needs for SDK traffic is not yet published on the SDK pages.

The Power Platform requests page says Dataverse create, read, update, delete, assign and share operations count toward request limits from any client or application, using any endpoint (SOAP or REST). The SDK calls the Dataverse Web API, so scripted traffic counts like other API traffic. The same page says application users, non-interactive users, administrative users and system users in a tenant share tenant-level limits. No SDK-specific meter or charge is documented at the time of writing (November 2026).

Indirect costs are admin time for app registrations and security roles, and storage if scripts write large volumes of rows or files.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. It does not list the US Government clouds; that is a record fact, not a statement that the SDK is unavailable there.

A caller needs access to a Dataverse environment with the security roles that the operation requires, and for custom table or column changes, privileges to customise the table. Authentication uses an Azure Identity credential. Rollout is through the PyPI package and the open-source repository, not through an environment or release channel; the roadmap's "enabled automatically" wording is not reflected on the Learn pages read.

## Governance guidance

### Before rollout

- Decide which environments developers may script against and identify the people and application users who will run SDK code, with the security roles each holds.
- Check whether the target environments are managed environments, because app access control requires one (row 1 of the table).
- Turn on auditing in the environments in scope (row 3), so scripted changes are recorded.

### At rollout

- Create application users only for app registrations that have a named owner, and give each a custom security role that matches its task (row 2).
- Run app access control in audit mode first and review which apps appear before moving to enabled mode (row 1).
- Tell developers to create file columns in advance in production, since the SDK creates a missing file column as a permanent schema change.

### After rollout

- Review the audit log for the ApplicationBasedAccessDenied and ApplicationBasedAccessAllowed events to see which apps reach the environment.
- Watch Power Platform request consumption and service protection errors for scripted callers.
- Re-read the Learn page for an SDK-specific control before relying on the general ones.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which client apps may call the Dataverse API in an environment</strong><br><small>Environment</small><br><small class="controls__note">General control, not SDK-specific. Requires a managed environment and the Power Platform admin or Dynamics 365 admin role. Not applied to partner apps making service-to-service calls.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Identity and access › App access control › environment › Set up app access control › Access control <a href="https://learn.microsoft.com/power-platform/admin/control-app-access-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft Entra app registrations have an application user and security roles in an environment</strong><br><small>Environment</small><br><small class="controls__note">The API page is marked preview and says it always adds the application user as a System Administrator, so reduce the roles afterwards. General control, not SDK-specific.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Application users › + New app user <a href="https://learn.microsoft.com/power-platform/admin/manage-application-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{environmentIdGuid}/addAppUser?api-version=2020-10-01 with body {&quot;servicePrincipalAppId&quot;: &quot;{clientId}&quot;}</code> <a href="https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Dataverse records scripted data changes and access</strong><br><small>Environment</small><br><small class="controls__note">Needs the System Administrator or System Customizer role. The call reads the settings; the page says to change the same organization table columns to change them. General control, not SDK-specific.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Compliance › Auditing › environment › Set up auditing › Turn on auditing <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization URI]/api/data/v9.2/organizations?$select=isauditenabled,auditretentionperiodv2,isuseraccessauditenabled,useraccessauditinginterval</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch that allows or blocks the Dataverse SDK for Python itself</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting specific to the SDK at the time of writing (November 2026). The general controls above are the nearest alternatives.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These are general Dataverse and Power Platform controls. No Microsoft page read for this briefing says they are specific to the Python SDK, and Microsoft has not said which app ID the SDK presents, so test a block list in a non-production environment before relying on it.

App access control needs a Power Platform admin or Dynamics 365 admin role and a managed environment, and its page says it does not validate partner apps making service-to-service calls; for those, the page points to deactivating or deleting the application user. Security roles for people who run SDK code are assigned under the environment's Users + permissions settings; see the Learn page on security roles for the steps: [Security and data access in the Quick guide to Dataverse](https://learn.microsoft.com/power-apps/developer/data-platform/sdk-python/quick-guide-dataverse).

## Open questions

- Which application ID do tokens from the SDK carry, and does app access control treat it as a user-context app or a service-to-service caller?
- Will Microsoft document an SDK-specific admin switch, or confirm that none is planned? Watch the Learn SDK pages and Message center.
- Which licence or entitlement does a user or application need for SDK calls, and do they use the same request limits as other Dataverse clients?
- Will Learn document the MCP, A2A, form prediction and autofill capabilities named on the roadmap item, and in which release phase?
- Does the roadmap's "enabled automatically" wording describe anything beyond the package being available on PyPI?

<!-- rationale
risk: Medium. The SDK adds a scripted route for bulk writes, bulk deletes and table changes, but the Learn pages say it works within Dataverse security roles, and Learn documents no SDK-specific switch at the time of writing (November 2026).
cost: Low. The SDK is open source and its Learn pages name no Microsoft licence for it; the cost we can see is admin time and Dataverse request consumption, and what a caller's licence must cover is not stated on the SDK pages.
impact: Low. Developers, data scientists and makers who choose to install the package notice it; most users and administrators see no change unless a script runs against their environment.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Security & identity / behaviour: Secrets and certificates for production authentication live with the developer. | Found: Searched: Dataverse exported data files security roles no longer apply Python ClientSecretCredential secret certificate developer storage; read SDK get-started and Azure Python authentication search excerpts. No source specifies developer custody of production credentials. | Fix: Replace 'Secrets and certificates for the production options live with the developer, so know which app registrations exist' with 'Confirm who manages the production credentials and which app registrations use them.'
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls; Open questions / absence: Microsoft has not said which application ID the SDK presents. | Found: Client ID of the Microsoft Entra application that users will sign into. ... If not specified, users will authenticate to an Azure development application, which is not recommended for production scenarios. | Fix: Replace the documentation-gap assertions with 'Application identity depends on the Azure Identity credential supplied to the SDK; InteractiveBrowserCredential accepts a client_id and otherwise uses an Azure development application. Confirm the credential and app registration before testing a block list.' Cite https://learn.microsoft.com/python/api/azure-identity/azure.identity.interactivebrowsercredential?view=azure-python. Replace the first Open question with 'Which credential and app registration do our SDK callers use, and does app access control cover that authentication context?' | Source: https://learn.microsoft.com/python/api/azure-identity/azure.identity.interactivebrowsercredential?view=azure-python
- [unsupported, major] Scope / behaviour: Rollout is not through an environment or release channel. | Found: Searched: Dataverse Python release channel. Opened SDK get-started and overview, and read package-reference results. Installation from PyPI or source is documented; these sources do not establish that backend availability is independent of environments or release channels. | Fix: Replace 'Rollout is through the PyPI package and the open-source repository, not through an environment or release channel' with 'Learn documents installing the SDK from PyPI or from its GitHub source repository.'
- [contradicted, blocker] controls[0].api; Governance controls table / absence: No API or automation surface is documented for environment app access control. | Found: ApplicationBasedAccessControlMode ... LogicalName | applicationbasedaccesscontrolmode ... AllowedApplicationsForDVAccess ... BlockedApplicationsForDVAccess | Fix: Replace controls[0].api null with kind 'pac-cli', call 'pac env list-settings --environment <environment-url> --filter application', docs 'https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-list-settings'. Add to its note: 'This call reads application-related organization settings; it does not change access control. A writable column is not, by itself, documentation that direct updates are supported.' The command reference documents both parameters and returning organization-table columns; https://learn.microsoft.com/power-apps/developer/data-platform/organization-table explains the direct-update restriction. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization#writable-columns-attributes
- [contradicted, blocker] Governance guidance: Before rollout; controls[2] governs and note / applicability: Turning on environment auditing as shown ensures scripted changes are recorded. | Found: First, turn on auditing at the environment level. To log data changes in a table, turn on auditing for the table and for the column. | Fix: Replace the checklist bullet with 'Turn on environment auditing (row 3), and confirm auditing is enabled for the tables and columns whose scripted changes must be recorded.' Add to controls[2].note: 'Recording data changes also requires table and column auditing. User-access logging requires Log access; environment auditing alone does not enable it.' The cited auditing page documents these qualifications. | Source: https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / applicability: Data extracted into a notebook or file is outside the Dataverse security boundary. | Found: However, after the data has been extracted it is no longer protected by the security boundary provided by Dynamics 365 (online) and is instead controlled directly by the customer. | Fix: Cite https://learn.microsoft.com/power-platform/admin/create-edit-security-role#privacy-notices for the extracted-data security-boundary statement. | Source: https://learn.microsoft.com/power-platform/admin/create-edit-security-role#privacy-notices
- [supported, minor] Cost and licensing / cost: Writing large volumes of rows or files can consume Dataverse storage capacity. | Found: Dataverse - Database capacity: Tracks structured data stored directly in Dataverse, including table rows, metadata, and relational data | Fix: Cite https://learn.microsoft.com/power-platform/admin/capacity-storage#dataverse-page-in-licenses for the storage-capacity premise. The admin-time estimate is analysis and needs no correction. | Source: https://learn.microsoft.com/power-platform/admin/capacity-storage#dataverse-page-in-licenses
- [supported, minor] Governance controls: final paragraph / admin-path: People's Dataverse security roles are managed under an environment's Users + permissions settings. | Found: Select Settings on the command bar. The Settings page for that environment is displayed. ... Select Users + Permissions > Security roles. | Fix: Replace the Quick guide to Dataverse link offered 'for the steps' with https://learn.microsoft.com/power-platform/admin/security-roles-privileges and title 'Security roles and privileges for Dataverse'; the Quick guide explains security but does not give these assignment steps. | Source: https://learn.microsoft.com/power-platform/admin/security-roles-privileges
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist's controls are all represented in the controls table. | Found: Checklist: 'identify the people ... with the security roles each holds'; 'Watch Power Platform request consumption'. Table: app access, application users, environment auditing and SDK switch only. | Fix: The Before rollout step taking stock of human callers' security-role assignments and the After rollout step monitoring request consumption have no corresponding control rows. Remove those checklist instructions if the table remains unchanged; do not add unverified rows.
- [contradicted, minor] Open questions: licensing and request limits / consistency: Whether SDK calls use the same request limits as other Dataverse clients remains an open question. | Found: Cost and licensing: 'scripted traffic counts like other API traffic.' Open questions: 'do they use the same request limits as other Dataverse clients?' | Fix: Remove 'and do they use the same request limits as other Dataverse clients' from that question; applicability of the general request limits is already established in Cost and licensing.
-->
