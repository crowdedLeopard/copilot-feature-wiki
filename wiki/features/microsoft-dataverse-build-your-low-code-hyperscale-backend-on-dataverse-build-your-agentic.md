---
title: "Microsoft Dataverse: Python SDK for scripting and agent workflows"
slug: "microsoft-dataverse-build-your-low-code-hyperscale-backend-on-dataverse-build-your-agentic"
roadmapId: 576876
topic: "power-platform"
products: ["Microsoft Dataverse"]
summary: "Microsoft has launched an open-source Python SDK for Dataverse. Developers install it and run it under their own or an app's permissions; Microsoft Learn documents no SDK-specific switch at the time of writing (November 2026)."
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
  model: "included"
  notes: "The SDK is open source; existing Dataverse entitlements still apply. Microsoft documents that using an ordinary user's credentials for an unattended app requires a paid licence, while an application user bound to a registered app does not consume a paid licence. The SDK pages name no SDK-specific Microsoft licence."
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
  - title: "InteractiveBrowserCredential Class"
    url: "https://learn.microsoft.com/python/api/azure-identity/azure.identity.interactivebrowsercredential?view=azure-python"
    kind: "learn"
  - title: "pac env"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/env"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
  - title: "Use OAuth authentication with Microsoft Dataverse"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/authenticate-oauth"
    kind: "learn"
  - title: "License requirements for tables"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-entity-licenses"
    kind: "learn"
  - title: "Security roles and privileges for Dataverse"
    url: "https://learn.microsoft.com/power-platform/admin/security-roles-privileges"
    kind: "learn"
  - title: "Create and edit security roles (privacy notices)"
    url: "https://learn.microsoft.com/power-platform/admin/create-edit-security-role#privacy-notices"
    kind: "learn"
  - title: "Capacity and storage (Dataverse page in licenses)"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-storage#dataverse-page-in-licenses"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Which client apps may call the Dataverse API in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/control-app-access-environment"
    kind: "learn"
  - title: "Which client apps may call the Dataverse API in an environment (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings"
    kind: "learn"
  - title: "Which Microsoft Entra app registrations have an application user and security roles in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    kind: "learn"
  - title: "Which Microsoft Entra app registrations have an application user and security roles in an environment (Power Platform API)"
    url: "https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser"
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
    api:
      kind: "pac-cli"
      call: "pac env update-settings --environment <environment-url> --name applicationbasedaccesscontrolmode --value <mode>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings"
    note: "Changes the environment app-access-control mode, not the individual app allow/block lists. Needs a managed environment and the Power Platform admin or Dynamics 365 admin role. Not applied to partner apps making service-to-service calls."
  - governs: "Which Microsoft Entra app registrations have an application user and security roles in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user > + Add an app"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    api:
      kind: "power-platform-api"
      call: "POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{environmentIdGuid}/addAppUser?api-version=2020-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser"
    note: "Preview API page: always adds the app user as System Administrator, so reduce roles afterwards. Body sets servicePrincipalAppId to the app's client ID. UI: choose the app and business unit, then use the roles edit icon."
  - governs: "Whether Dataverse records scripted data changes and access"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Compliance > Auditing > environment > Set up auditing > Turn on auditing"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    api:
      kind: "rest"
      call: "PATCH [Organization URI]/api/data/v9.2/organizations([Organization ID])"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    note: "Needs System Administrator or System Customizer. The request body sets isauditenabled (environment auditing) and isuseraccessauditenabled (user-access logging). Recording data changes also needs table and column auditing."
  - governs: "A switch that allows or blocks the Dataverse SDK for Python itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting specific to the SDK at the time of writing (November 2026). The general controls above are the nearest alternatives."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-20"
roadmapModified: "2026-10-16T19:10:05"
changes:
  - date: "2026-11-17"
    note: "First briefing for the Dataverse SDK for Python: Learn documents install, operations and prerequisites; no SDK-specific admin switch, so general Dataverse controls apply."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 76 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: SDK application identity now follows the credential used, app access control gains a pac CLI read call, auditing guidance notes table and column auditing, and unsupported rollout and credential statements were removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 80 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the summary: it now says Microsoft Learn documents no SDK-specific switch at the time of writing (November 2026), instead of asserting that none exists."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 83 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the app access control and auditing API rows to calls that change the setting, extended the application user path and call detail, and replaced the unknown caller-licence statement with what the OAuth and table licence pages say."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 95
  confirmed: 95
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8f05fd53e7ed1b2c7bcd42ba40ddb2fe"
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

- The getting-started page shows development options (InteractiveBrowserCredential, AzureCliCredential) and production options (ClientSecretCredential, CertificateCredential). Confirm who manages the production credentials and which app registrations use them.
- Application users give a registered app access to an environment; app access control can allow or block apps by ID, but it needs a managed environment and does not cover partner apps making service-to-service calls. Application identity depends on the Azure Identity credential supplied to the SDK; InteractiveBrowserCredential accepts a client_id and otherwise uses an Azure development application. Confirm the credential and app registration before testing a block list.

**Autonomy & actions**

- Bulk operations use BulkDelete and UpsertMultiple, and the SDK can create, update and delete custom tables and columns. A script run under a highly privileged role can change schema or remove many rows in one call.
- `client.files.upload` creates the file column if it does not exist. Learn says this is a permanent schema change and advises creating file columns in advance in production environments.

**Change & support**

- Running `dataverse-install-claude-skill` after installing the package optionally installs two Claude skills, whose definitions are stored on the developer's computer.
- The SDK retries on throttling. Dataverse service protection limits apply to external web service requests, so heavy scripts can slow down other callers sharing the same user account.

## Cost and licensing

The SDK is published under open-source licensing (overview page). The getting-started page lists a Dataverse environment with read/write access, OAuth authentication, Python and network access to PyPI as prerequisites and names no Microsoft licence. The SDK pages name no SDK-specific Microsoft licence; existing Dataverse entitlements still apply. The Dataverse OAuth authentication page says that using an ordinary user's credentials for an app that does not run interactively needs a paid licence for that user account, and that an application user bound to a registered Microsoft Entra ID app does not consume a paid licence. The licence requirements for tables page says users can create custom tables with a Dynamics 365, Power Apps or Power Automate licence.

The Power Platform requests page says Dataverse create, read, update, delete, assign and share operations count toward request limits from any client or application, using any endpoint (SOAP or REST). The SDK calls the Dataverse Web API, so scripted traffic counts like other API traffic. The same page says application users, non-interactive users, administrative users and system users in a tenant share tenant-level limits. No SDK-specific meter or charge is documented at the time of writing (November 2026).

Indirect costs are admin time for app registrations and security roles, and storage if scripts write large volumes of rows or files.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. It does not list the US Government clouds; that is a record fact, not a statement that the SDK is unavailable there.

A caller needs access to a Dataverse environment with the security roles that the operation requires, and for custom table or column changes, privileges to customise the table. Authentication uses an Azure Identity credential. Learn documents installing the SDK from PyPI or from its GitHub source repository; the roadmap's "enabled automatically" wording is not reflected on the Learn pages read.

## Governance guidance

### Before rollout

- Decide which environments developers may script against and identify the application users who will run SDK code, with the security roles each holds (row 2).
- Check whether the target environments are managed environments, because app access control requires one (row 1 of the table).
- Turn on environment auditing (row 3), and confirm auditing is enabled for the tables and columns whose scripted changes must be recorded.

### At rollout

- Create application users only for app registrations that have a named owner, and give each a custom security role that matches its task (row 2).
- Run app access control in audit mode first and review which apps appear before moving to enabled mode (row 1).
- Tell developers to create file columns in advance in production, since the SDK creates a missing file column as a permanent schema change.

### After rollout

- Review the audit log for the ApplicationBasedAccessDenied and ApplicationBasedAccessAllowed events to see which apps reach the environment.
- Re-read the Learn page for an SDK-specific control before relying on the general ones.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which client apps may call the Dataverse API in an environment</strong><br><small>Environment</small><br><small class="controls__note">Changes the environment app-access-control mode, not the individual app allow/block lists. Needs a managed environment and the Power Platform admin or Dynamics 365 admin role. Not applied to partner apps making service-to-service calls.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Identity and access › App access control › environment › Set up app access control › Access control <a href="https://learn.microsoft.com/power-platform/admin/control-app-access-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac env update-settings --environment &lt;environment-url&gt; --name applicationbasedaccesscontrolmode --value &lt;mode&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft Entra app registrations have an application user and security roles in an environment</strong><br><small>Environment</small><br><small class="controls__note">Preview API page: always adds the app user as System Administrator, so reduce roles afterwards. Body sets servicePrincipalAppId to the app's client ID. UI: choose the app and business unit, then use the roles edit icon.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Application users › + New app user › + Add an app <a href="https://learn.microsoft.com/power-platform/admin/manage-application-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{environmentIdGuid}/addAppUser?api-version=2020-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Dataverse records scripted data changes and access</strong><br><small>Environment</small><br><small class="controls__note">Needs System Administrator or System Customizer. The request body sets isauditenabled (environment auditing) and isuseraccessauditenabled (user-access logging). Recording data changes also needs table and column auditing.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Compliance › Auditing › environment › Set up auditing › Turn on auditing <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [Organization URI]/api/data/v9.2/organizations([Organization ID])</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch that allows or blocks the Dataverse SDK for Python itself</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting specific to the SDK at the time of writing (November 2026). The general controls above are the nearest alternatives.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These are general Dataverse and Power Platform controls. No Microsoft page read for this briefing says they are specific to the Python SDK. The application identity depends on the credential supplied to the SDK (see Risk assessment), so test a block list in a non-production environment before relying on it.

The pac call in row 1 changes the environment's app access control mode (the organization table's applicationbasedaccesscontrolmode column), not the individual app allow and block lists. Row 3 changes the organization table's auditing columns; recording data changes also needs table and column auditing, and user-access logging needs Log access, which environment auditing alone does not enable.

App access control needs a Power Platform admin or Dynamics 365 admin role and a managed environment, and its page says it does not validate partner apps making service-to-service calls; for those, the page points to deactivating or deleting the application user. Security roles for people who run SDK code are assigned under the environment's Users + permissions settings; see the Learn page on security roles for the steps: [Security roles and privileges for Dataverse](https://learn.microsoft.com/power-platform/admin/security-roles-privileges).

## Open questions

- Which credential and app registration do our SDK callers use, and does app access control cover that authentication context?
- Will Microsoft document an SDK-specific admin switch, or confirm that none is planned? Watch the Learn SDK pages and Message center.
- Will Microsoft publish a licence or entitlement specific to the SDK, beyond the existing Dataverse entitlements? Watch the Learn SDK pages.
- Will Learn document the MCP, A2A, form prediction and autofill capabilities named on the roadmap item, and in which release phase?
- Does the roadmap's "enabled automatically" wording describe anything beyond the package being available on PyPI?

<!-- rationale
risk: Medium. The SDK adds a scripted route for bulk writes, bulk deletes and table changes, but the Learn pages say it works within Dataverse security roles, and Learn documents no SDK-specific switch at the time of writing (November 2026).
cost: Low. The SDK is open source and its Learn pages name no SDK-specific Microsoft licence; the cost we can see is admin time and Dataverse request consumption, and existing Dataverse entitlements still apply.
impact: Low. Developers, data scientists and makers who choose to install the package notice it; most users and administrators see no change unless a script runs against their environment.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls / admin-path: Application users and roles are configured through Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user > + Add an app. | Found: Select + New app user ... Select + Add an app ... Under Business Unit, select a business unit ... Select the edit icon to select security roles for the new application user. | Fix: Extend controls[1].ui.path and the rendered path to 'Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user > + Add an app > security roles edit icon'. Keep the note about choosing the app and business unit. The remaining selector is documented at https://learn.microsoft.com/power-platform/admin/manage-application-users. | Source: https://learn.microsoft.com/power-platform/admin/manage-application-users
-->
