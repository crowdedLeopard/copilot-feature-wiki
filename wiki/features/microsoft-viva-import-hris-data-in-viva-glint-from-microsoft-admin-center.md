---
title: "Viva Glint: import HRIS data through Microsoft 365 Organizational Data Service"
slug: "microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center"
roadmapId: 410396
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Administrators can import employee data into Viva Glint from HRIS connectors, APIs, Azure storage or CSV files via Microsoft 365 Organizational Data Service. An Organizational Data Source Administrator sets it up; no action is forced."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's get-started page requires \"A Microsoft Viva Glint license, or a Microsoft 365 license that includes Viva Glint\" for Viva Glint to consume the data. That page states no price or meter for the import itself (November 2026)."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["viva-glint","organizational-data-service","hris-import","connectors","data-governance","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 410396"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=410396"
    kind: "roadmap"
  - title: "Import employee data from Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/viva/glint/setup/modis-data-import"
    kind: "learn"
  - title: "Consuming data from Microsoft 365 Organizational Data Service in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/modis-data-consumption"
    kind: "learn"
  - title: "How to get started with Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Call Microsoft 365 API to transfer organizational data for API-based import (Step 2 of 3)"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/import/import-org-data-api-call"
    kind: "learn"
  - title: "Manage General Settings in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    kind: "learn"
  - title: "Import and manage your organizational data with a .csv file"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/import/import-orgdata"
    kind: "learn"
  - title: "Applications powered by Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/applications"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Viva Glint accepts imports from Organizational Data Service"
    scope: "tenant"
    ui:
      surface: "Viva Glint"
      path: "Configuration > Service Configuration > General Settings > Technical configuration > Organizational data imports"
      docs: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    api: null
    note: "Onboarding sets it to Yes. When No, uploads return the ORG_UPLOAD_SWITCHED_OFF advisory and Viva Glint does not appear as an endpoint in the admin center."
  - governs: "Who can create and manage employee data imports (Organizational Data Source Administrator role)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Select the Organizational Data Source Administrator role; the portal steps need at least Privileged Role Administrator. The request body sets roleDefinitionId and principalId."
  - governs: "Which attributes a connection shares with Viva Glint"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Data management > Microsoft 365 Organizational Data Service > Data connections > + New import > CSV import > Choose apps & services > Viva Glint > Choose attribute access"
      docs: "https://learn.microsoft.com/viva/glint/setup/modis-data-import"
    api: null
    note: "Documented CSV example; set per connection, separately for reserved and custom attributes. These choices govern application-specific and custom attributes; public global attributes are automatically available to Profile and downstream apps."
  - governs: "Whether uploaded data waits for approval before reaching Viva Glint"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Data management > Microsoft 365 Organizational Data Service > Data connections > + New import > CSV import > Choose apps & services > Viva Glint > File upload, import method, and data staging > Data staging"
      docs: "https://learn.microsoft.com/viva/glint/setup/modis-data-import"
    api: null
    note: "Documented CSV example. When on, an Organizational Data Source Administrator must approve the upload before it flows to Viva Glint. Learn says staging is available for all connectors."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: HRIS import into Viva Glint through Microsoft 365 Organizational Data Service, with its role, attribute access and staging controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: attribute access and staging paths now follow the documented CSV import example, Glint switch path completed, ingestion timing and manager hierarchy advice updated, notifications bullet removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: removed the advice to limit Global Administrator involvement to role assignment, as Learn says a global admin must provision the API connector the first time."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 92 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 91 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 91
  confirmed: 91
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "da322f7d73e682dc89f00695ba45a7df"
---

## What's changing

The roadmap item says customers will be able to use connectors to HRIS (human resources information system) tools to import HRIS data into Viva Glint from the Microsoft 365 admin center. Microsoft Learn documents this as importing employee data through Microsoft 365 Organizational Data Service, a central service for employee data that Microsoft 365 and Viva apps can then read.

An administrator creates a connection under **Data connections**, chooses a connector, selects **Viva Glint** under **Choose apps & services**, maps attributes, chooses which attributes Viva Glint may receive, and then starts validation. Learn lists these import methods: Workday and SuccessFactors connectors, APIs, Azure Data Lake Storage (ADLS) and file-based imports, with CSV upload as the worked example. Imports can be incremental or full; for CSV the administrator chooses, and incremental is the default. Files up to 2 GB are supported. The Glint import page says overall ingestion can take a few minutes to three hours; the CSV service guide allows up to 24 hours for processing, or 72 hours for the first upload, and up to three days for profile-store availability.

The Viva Glint side is on by default for new customers. Existing customers with employee data already in Viva Glint must complete a one-time onboarding that maps Organizational data attributes to Viva Glint attributes before Viva Glint can import from the service, and Learn says the feature is being released in phases, so the onboarding banner may not yet appear in a tenant.

The roadmap record gives status Rolling out, release phase General Availability, Worldwide (Standard Multi-Tenant) and a target of November CY2026. Learn's get-started page labels the API-based connector "Public Preview", which differs from the roadmap's General Availability phase; the other connectors on that page carry no such label. The Glint page names ADLS as a connector where the get-started page lists an Azure Blob Storage Connector.

## Why it matters

This makes the Microsoft 365 admin center, not Viva Glint's own import screens, a route for employee data into Viva Glint, and it brings a second set of owners: the Organizational Data Source Administrator, the Viva Glint administrator and whoever owns the HRIS. Decide who holds the role before anyone sets up a connection, because Learn says only Global Administrators and Organizational Data Source Administrators can upload data.

The same service also feeds other apps, so the attribute access choices matter beyond Glint. Learn says public reserved attributes are shared with Profile and with experiences that read Profile data, while non-public ones go only where the Organizational data source admin allows. Because the default is admin opt-in, nothing here changes for a tenant until an administrator completes onboarding and creates a connection, but plan the access decisions before the first import.

## Risk assessment

**Data exposure**
- Imports carry employee attributes such as manager, hire date and office location into Viva Glint. Learn says Viva Glint imports only the attributes shared with it through the connection's attribute access configuration, so review that step for every connection (controls table, attribute access row).
- Public reserved attributes are shared with Profile and with other experiences that read it, including Microsoft 365, Copilot, People card, Viva Amplify and Viva Engage. Check which of your attributes Microsoft classes as public before importing them.

**Security & identity**
- Anyone holding the Organizational Data Source Administrator role can upload, update and delete organisational data for the specified applications and connect HRIS systems. Limit the role to named owners (controls table, role row).
- The Workday and SAP SuccessFactors connectors pull data using credentials you supply. Learn says to confirm that your organisation has approved a direct connection to the HRIS before choosing either connector.

**Autonomy & actions**
- A full import replaces the imported employee population, and employees missing from it may become inactive in Viva Glint depending on configuration. Turn on data staging for a first full import so an administrator approves it before it flows (controls table, staging row).
- Workday connector refreshes are all full imports, per Learn, so a bad Workday export can affect the whole population on each refresh.

**Change & support**
- Learn says a schema change on the Workday or SuccessFactors connector triggers a full import; for other connectors, administrators must send all employees again after a schema update.
- With several connectors configured, automatic full imports through Workday and SuccessFactors are turned off, and each connector can send to only one Viva Glint instance.
- If the Viva Glint manager hierarchy derives from an attribute mapped to Microsoft_ManagerEmail, it mirrors the Profile hierarchy. The consumption page instead names Microsoft_ManagerID in its advice for keeping the hierarchies distinct.

## Cost and licensing

Learn's get-started page lists licensing per consuming app and requires, for Viva Glint, "A Microsoft Viva Glint license, or a Microsoft 365 license that includes Viva Glint". That page lists no price or meter for the import itself at the time of writing (November 2026).

Indirect costs are admin time and coordination between the Organizational Data Source Administrator, the Viva Glint administrator and the HRIS data owner. Costs of your HRIS or Azure storage for the Azure connectors are outside what these pages state.

## Scope

- **Who sets it up:** a Global Administrator assigns the Organizational Data Source Administrator role, and Learn says that role is needed to create and manage imports. Viva Glint service administrators can also be assigned it. A Viva Glint administrator completes schema mapping and enables Organizational data imports.
- **Prerequisites:** Viva Glint onboarding completed and **Organizational data imports** enabled in Viva Glint; if it is disabled, Viva Glint does not appear under **Choose apps & services**. The Viva Glint schema needs five required attributes: Email Address, First Name, Last Name, Status and Employee ID.
- **Where to find it:** Learn's get-started page gives Settings > Viva > Data management > Microsoft 365 Organizational Data Service in the admin center; the Viva Glint page gives Setup > Migration and imports > Organizational data in Microsoft 365.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web. The Viva Glint page says the integration is available to all customers, including GCC Moderate (GCC-M) environments; this differs from the roadmap's cloud list.
- **Limits:** one Viva Glint instance per connector; multiple connectors can feed Viva Glint; custom attributes import only when a Viva Glint attribute of exactly the same name, including letter casing, already exists.

## Governance guidance

### Before rollout
- Assign the Organizational Data Source Administrator role to the named owner of employee data imports (controls table, role row).
- Decide with the HRIS data owner which attributes Viva Glint needs, and mark each as shared or not before connector setup (controls table, attribute access row). These choices govern application-specific and custom attributes; the service's applications guide says public global attributes are automatically available to Profile and downstream apps.
- Complete the one-time onboarding in Viva Glint if employee data already exists there, then confirm the **Organizational data imports** setting reads Yes (controls table, Viva Glint setting row).
- Choose a connector using the get-started page's guidance, and obtain security and data governance approval for any direct Workday or SAP SuccessFactors connection.

### At rollout
- Turn on data staging for the first imports so an Organizational Data Source Administrator reviews the data before it reaches Viva Glint (controls table, staging row).
- Check that required attributes and exact-case custom attribute names match the Viva Glint schema before the first import, because unmatched custom attributes are ignored.
- Use full imports deliberately: confirm who may become inactive in Viva Glint before approving one.

### After rollout
- Review validation and import status on **Data connections** after each file, including the ingestion summary and advisories.
- Re-check attribute access whenever the HRIS schema or the Viva Glint schema changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Viva Glint accepts imports from Organizational Data Service</strong><br><small>Tenant</small><br><small class="controls__note">Onboarding sets it to Yes. When No, uploads return the ORG_UPLOAD_SWITCHED_OFF advisory and Viva Glint does not appear as an endpoint in the admin center.</small></td><td data-label="Admin UI"><strong>Viva Glint</strong><br>Configuration › Service Configuration › General Settings › Technical configuration › Organizational data imports <a href="https://learn.microsoft.com/viva/glint/setup/manage-general-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create and manage employee data imports (Organizational Data Source Administrator role)</strong><br><small>Tenant</small><br><small class="controls__note">Select the Organizational Data Source Administrator role; the portal steps need at least Privileged Role Administrator. The request body sets roleDefinitionId and principalId.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which attributes a connection shares with Viva Glint</strong><br><small class="controls__note">Documented CSV example; set per connection, separately for reserved and custom attributes. These choices govern application-specific and custom attributes; public global attributes are automatically available to Profile and downstream apps.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Data management › Microsoft 365 Organizational Data Service › Data connections › + New import › CSV import › Choose apps &amp; services › Viva Glint › Choose attribute access <a href="https://learn.microsoft.com/viva/glint/setup/modis-data-import" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether uploaded data waits for approval before reaching Viva Glint</strong><br><small class="controls__note">Documented CSV example. When on, an Organizational Data Source Administrator must approve the upload before it flows to Viva Glint. Learn says staging is available for all connectors.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Data management › Microsoft 365 Organizational Data Service › Data connections › + New import › CSV import › Choose apps &amp; services › Viva Glint › File upload, import method, and data staging › Data staging <a href="https://learn.microsoft.com/viva/glint/setup/modis-data-import" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the Viva Glint switch, the role, attribute access and staging as interface steps. The role can also be assigned through the Microsoft Graph call in the table. At the time of writing (November 2026) Learn documents no API for the Viva Glint switch, attribute access or data staging.

The attribute access and staging paths follow the documented CSV import example and end at the wizard page that holds each setting. Attribute access is configured per application and per attribute, so a choice made for Viva Glint does not change what other apps receive. Those choices govern application-specific and custom attributes; the service's applications guide says public global attributes are automatically available to Profile and downstream apps. Learn does not say the staging option is on by default; turn it on per connection.

## Open questions

- When will the Organizational data onboarding banner reach every Viva Glint tenant, given Learn says the release is in phases? Watch the Viva Glint consumption page and Message center.
- Will the API-based connector, labelled Public Preview on the get-started page, reach General Availability, and does the roadmap's General Availability phase cover it?
- Does the November CY2026 target apply to GCC Moderate tenants, given the roadmap lists only Worldwide while the Viva Glint page lists GCC Moderate?
- Is the Azure connector Azure Blob Storage or Azure Data Lake Storage? The get-started and Viva Glint pages name them differently.

<!-- rationale
risk: Medium. Employee HR data (names, managers, hire dates, locations) moves into Viva Glint, and attributes Microsoft classes as public are shared with Profile; attribute access and data staging are the controls that cover it.
cost: Low. The only cost the sources show is admin time and the Viva Glint licence the service already requires; the get-started page states no price or meter for the import itself.
impact: Low. The people who act are the Organizational Data Source Administrator, Viva Glint administrators and the HRIS data owner; the roadmap item describes an admin import path.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls / admin-path: The CSV attribute-access route starts under Settings > Viva > Data management and ends at Choose attribute access after selecting Viva Glint. | Found: Select Data connections, you may need to choose + New import. Select a connector type. The following example uses CSV import. Choose apps & services: Select the Viva Glint. Choose attribute access: Choose which attributes should be sent to each application or service. | Fix: The starting route is supported by the already-cited get-started page. Complete the intervening wizard headings: Settings > Viva > Data management > Microsoft 365 Organizational Data Service > Data connections > + New import > CSV import > Choose apps & services > Viva Glint > Prepare your data > File upload, import method, and data staging > Map reserved attributes to your imported data > Choose attribute access. Keep the existing docs URL. | Source: https://learn.microsoft.com/viva/glint/setup/modis-data-import
- [supported, minor] controls[3].ui; Governance controls / admin-path: The CSV staging route starts under Settings > Viva > Data management and reaches Data staging under File upload, import method, and data staging. | Found: Prepare your data. File upload, import method, and data staging: When the data staging option is turned on, the uploaded file doesn't flow to Viva Glint until an Organizational Data Source Administrator explicitly approves it. | Fix: The starting route is supported by the already-cited get-started page. Add the omitted heading: Settings > Viva > Data management > Microsoft 365 Organizational Data Service > Data connections > + New import > CSV import > Choose apps & services > Viva Glint > Prepare your data > File upload, import method, and data staging > Data staging. Keep the existing docs URL. | Source: https://learn.microsoft.com/viva/glint/setup/modis-data-import
- [supported, minor] Risk assessment: Autonomy & actions; Governance guidance / behaviour: Employees missing from a full import may become inactive in Viva Glint depending on configuration. | Found: Employees that previously existed in Viva Glint but aren't included in a full import may become inactive, depending on your configuration and import behavior. | Fix: Keep the conditional overview statement and add: 'The CSV service guide is more explicit: selecting Update the entire Viva Glint dataset marks users absent from that file Inactive, including active users supplied by other connectors.' Cite https://learn.microsoft.com/microsoft-365-apps/org-data-service/import/import-orgdata. | Source: https://learn.microsoft.com/viva/glint/setup/modis-data-import
-->
