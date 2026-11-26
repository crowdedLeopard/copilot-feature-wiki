---
title: "Microsoft Viva: Organizational Data in Microsoft 365 for GCC-Moderate tenants"
slug: "microsoft-viva-organizational-data-in-m365-is-now-available-in-gcc-moderate"
roadmapId: 508518
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Viva"]
summary: "GCC-Moderate tenants can now import HR data into Microsoft 365 through the Organizational Data Service in the Microsoft 365 admin center. Nothing is imported until an administrator uploads data, so decide on roles and access policies first."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's get-started page says licensing depends on the consuming app: at least one Exchange Online licence in the tenant for Microsoft 365 Profile, a Viva Insights or Viva Glint licence (or a Microsoft 365 licence that includes it) for those apps, and Microsoft 365 Copilot or Viva for People Skills."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["organizational-data-service","hris-import","m365-admin-center","viva-insights","viva-glint","user-profiles","data-governance","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 508518"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=508518"
    kind: "roadmap"
  - title: "How to get started with Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started"
    kind: "learn"
  - title: "Introduction to Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/organizational-data"
    kind: "learn"
  - title: "Set access policies for data in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies"
    kind: "learn"
  - title: "Manage data precedence for organizational data"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/manage-data-precedence"
    kind: "learn"
  - title: "Understand how organizational data is used and retained in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/orgdata-data-usage"
    kind: "learn"
  - title: "Import and manage your organizational data with a .csv file"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/import/import-orgdata"
    kind: "learn"
  - title: "Applications powered by Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/applications"
    kind: "learn"
  - title: "Manage profile source precedence in Microsoft 365"
    url: "https://learn.microsoft.com/graph/profilepriority-configure-profilepropertysetting"
    kind: "learn"
  - title: "Supported Microsoft 365 environments for Viva Insights features"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/supported-environments"
    kind: "learn"
  - title: "Consuming data from Microsoft 365 Organizational Data Service in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/modis-data-consumption"
    kind: "learn"
  - title: "Import employee data from Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/viva/glint/setup/modis-data-import"
    kind: "learn"
  - title: "Upload and maintain data through the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/upload-org-data-admin-center"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Microsoft Viva service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-service-description"
    kind: "learn"
videos: []
related: ["m365-admin-center-organizational-data-granular-access-policy-controls-for-custom-attribute","microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center","m365-admin-center-notifications-for-organizational-data-processing-status","m365-admin-center-data-quality-report-for-profile-data","microsoft-viva-insights-and-copilot-analytics-in-gcc-and-gcc-high"]
controls:
  - governs: "Who can upload, update, delete and export organisational data (Organizational Data Source Administrator role)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Entra page: assign as at least Privileged Role Administrator. Organizational Data Service pages say a Global Administrator assigns this role."
  - governs: "Which users can see custom attribute data, and for which population (access policies)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Setup > Migration and Imports > Microsoft 365 Organizational Data Service > Settings > Edit access policies"
      docs: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies"
    api: null
    note: "Global Administrator or Organizational Data Source Administrator. Custom attributes default to Staging, which releases data to no users."
  - governs: "Whether organisational data or Microsoft Entra ID supplies values in the Microsoft 365 User Profile (data precedence)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Data management > Microsoft 365 Organizational Data Service > Settings > Data prioritization > Edit data prioritization"
      docs: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/manage-data-precedence"
    api:
      kind: "graph"
      call: "PATCH /v1.0/admin/people/profilePropertySettings/{id}"
      docs: "https://learn.microsoft.com/graph/profilepriority-configure-profilepropertysetting"
    note: "Global Administrator. The request body sets prioritizedSourceUrls; the service's source ID is 7986c642-b494-4140-8df4-f5ed125e2c67."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-02T23:12:48"
changes:
  - date: "2026-11-26"
    note: "New briefing: Organizational Data Service in GCC-Moderate, with role, access policy and data precedence controls and the GCC-M connector gaps."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 68
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "d25070e032cd5df12451997a6880f4df"
---

## What's changing

Microsoft 365 Organizational Data Service, the admin centre feature that imports employee data from HR systems into Microsoft 365, is now available to GCC-Moderate (GCC-M) tenants. The roadmap item states that government cloud customers get the same data ingestion capabilities that were previously available only in commercial environments.

The service takes organisational data such as job title, manager, location and custom attributes from a .csv file or an HR connector (Workday, SAP SuccessFactors, Azure Blob Storage, or an API-based connector that Microsoft marks as public preview) and distributes it to Microsoft 365 Profile, Copilot and Viva apps. Public attributes go to Microsoft 365 Profile and every eligible app automatically; custom attributes go only to the apps an administrator chooses, and their default access policy, Staging, releases them to no users. Only a Global Administrator or an Organizational Data Source Administrator can upload data, and a Global Administrator first completes provisioning in the admin centre, so nothing is imported until an administrator acts.

Microsoft Learn documents the service but does not yet say which connectors work in GCC-M. The Viva Insights environments page lists API-based and Azure blob-based organizational data import as not supported in GCC-M, while the Viva Glint page says its integration with the service is available to GCC-M customers.

The roadmap item is **Launched** with a target of May CY2026, released to General Availability on the web for GCC.

## Why it matters

For GCC-M tenants this moves HR data into a place where Microsoft 365, Copilot and, according to Microsoft's data usage page, non-Microsoft services with Microsoft Graph access can use it. The decisions that matter are who holds the Organizational Data Source Administrator role, which attributes are mapped as public (visible to all users) and whether imported values override Microsoft Entra ID in user profiles. None of that happens on its own: the service waits for an administrator to provision it and upload data.

Viva Insights tenants have a second reason to look. Microsoft's Viva Insights page says that by the middle of 2026 all tenants will be migrated to uploading organisational data in the Microsoft 365 admin center, after a notification to the tenant admin, and that uploads then stop working in the Viva Insights web app. GCC-M teams that upload HR data for Viva Insights should expect that move and plan the role assignment before it.

## Risk assessment

**Data exposure**
- Reserved attributes such as job title, hire date and level designation carry the fixed Public (internal) policy, which makes them visible to all users in the tenant. Mapping a sensitive HR column to one of them publishes it; review the mapping before the first upload.
- Custom attributes default to the Staging policy, which releases them to no users until an administrator configures it (access policies row).
- Microsoft's data usage page says uploaded data can be used by Viva, Microsoft 365 services and non-Microsoft services that have access through the Microsoft Graph API.

**Security & identity**
- The Organizational Data Source Administrator can upload, update, delete and export organisational data. Assigning it widely spreads access to HR data (role assignment row).
- Workday and SAP SuccessFactors connectors use credentials you provide to the HR system, so the HR system's own account controls apply.

**Autonomy & actions**
- An upload with blank values overwrites the user's data as soon as it is processed, which Microsoft describes as effective immediate deletion. Use data staging to review before sharing.

**Change & support**
- Giving the service precedence over Microsoft Entra ID changes the values users see on profile cards (data precedence row). By default Microsoft Entra data takes precedence.
- Microsoft says processing takes up to 24 hours, and up to 72 hours for the first upload.

## Cost and licensing

Microsoft's get-started page says licensing requirements vary by the app that consumes the data:

- **Microsoft 365 Profile**: at least one Exchange Online licence in the tenant.
- **Insights**: a Microsoft Viva Insights licence, or a Microsoft 365 licence that includes Insights.
- **Viva Glint**: a Microsoft Viva Glint licence, or a Microsoft 365 licence that includes Viva Glint.
- **People Skills**: Microsoft 365 Copilot or Viva.

The Microsoft Viva service description says the Viva Insights subscription is available in GCC Moderate. A separate price or meter for Organizational Data Service itself is not yet published. Indirect costs are the time of HR data owners and administrators to map attributes, review staging and maintain connectors.

## Scope

- **Clouds**: GCC, as the roadmap record lists it (GCC-Moderate in the description).
- **Platform**: web, in the Microsoft 365 admin center.
- **Roles**: Global Administrator or Organizational Data Source Administrator to upload and manage data; a Global Administrator completes provisioning and changes data precedence. Viva Glint Administrators map attributes for Viva Glint.
- **Connectors in GCC-M**: the Viva Insights environments page marks API-based and Azure blob-based organizational data import as "No" for GCC-M; Microsoft has not published a GCC-M list for the service's own connectors.
- **Consuming apps**: Microsoft 365 Profile, Copilot and Viva apps; Viva Insights and Viva Glint grant access to their own users and are not governed by the service's access policies.

## Governance guidance

### Before rollout
- Assign the Organizational Data Source Administrator role in the Microsoft Entra admin center only to the people who own HR data imports.
- Agree with HR which source columns map to reserved attributes that carry the Public (internal) policy, and keep sensitive fields out of them.
- Confirm with Microsoft which connectors (Workday, SAP SuccessFactors, Azure Blob Storage, API-based) your GCC-M tenant can use before choosing one.

### At rollout
- Complete provisioning as a Global Administrator under Setup > Migration and imports > Organizational Data in Microsoft 365.
- Turn on data staging for the first upload, export the ingested file and approve sharing within the 48 hours Microsoft allows.
- Set the access policy for each custom attribute shared with Workforce Insights; leave Staging in place for any that should stay hidden.

### After rollout
- Decide whether organisational data should take precedence over Microsoft Entra ID in profiles, and record who changed it.
- Schedule refreshed uploads; Microsoft recommends regular uploads, for example weekly, so profile data does not go stale.
- Check Message center for the Viva Insights upload transition notice if your tenant uses Viva Insights.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can upload, update, delete and export organisational data (Organizational Data Source Administrator role)</strong><br><small>Tenant</small><br><small class="controls__note">Entra page: assign as at least Privileged Role Administrator. Organizational Data Service pages say a Global Administrator assigns this role.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can see custom attribute data, and for which population (access policies)</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator or Organizational Data Source Administrator. Custom attributes default to Staging, which releases data to no users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Setup › Migration and Imports › Microsoft 365 Organizational Data Service › Settings › Edit access policies <a href="https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether organisational data or Microsoft Entra ID supplies values in the Microsoft 365 User Profile (data precedence)</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator. The request body sets prioritizedSourceUrls; the service's source ID is 7986c642-b494-4140-8df4-f5ed125e2c67.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Data management › Microsoft 365 Organizational Data Service › Settings › Data prioritization › Edit data prioritization <a href="https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/manage-data-precedence" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/admin/people/profilePropertySettings/{id}</code> <a href="https://learn.microsoft.com/graph/profilepriority-configure-profilepropertysetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Access policies govern what users see in Microsoft 365, Copilot and People Skills experiences; Viva Insights and Viva Glint are not subject to them and grant access to specific users themselves. Users can always see data that describes themselves, in addition to any policy. Reserved attribute policies are fixed and cannot be edited. Which custom and app-specific attributes each app receives is chosen in the import's attribute access step. The data prioritization screen orders connectors inside the service; the Graph profile source setting orders the service against Microsoft Entra ID and Copilot connectors.

## Open questions

- Which Organizational Data Service connectors (Workday, SAP SuccessFactors, Azure Blob Storage, API-based) are available in GCC-M, given that the Viva Insights environments page lists API-based and blob-based import as unsupported there? Watch the Learn get-started page.
- Has your GCC-M tenant been scheduled for the Viva Insights move to uploads in the Microsoft 365 admin center? Watch Message center.
- Will Microsoft publish an API for Organizational Data Service access policies? Watch the Set access policies page.
- Do the GCC-M Copilot and Workforce Insights experiences consume the same attributes as commercial tenants? Watch the Applications powered by Microsoft 365 Organizational Data Service page.

<!-- rationale
risk: Low. Nothing is ingested until a Global Administrator or Organizational Data Source Administrator uploads data; once they do, public attributes such as job title become visible to everyone in the tenant.
cost: Low. Microsoft lists licence requirements only by the app that consumes the data (for example, an Exchange Online licence in the tenant for Microsoft 365 Profile) and publishes no separate price for the service; the known cost is admin and HR time.
impact: Low. The work falls on administrators and HR data owners; users see a difference after an upload, through attributes mapped as public and the data precedence setting.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: An upload with blank values overwrites and effectively immediately deletes the user's existing data when processed. | Found: If you include an attribute but leave the value blank or empty, the previously uploaded value will be used and the existing value won't be updated. New uploads merge with previous data and don't overwrite that data. | Fix: Replace the first sentence with: 'Microsoft's import instructions say blank or empty values preserve previously uploaded values; deleting values requires explicit deletion values rather than ordinary blank cells.' The cited data-usage page describes deletion using nulled values and links to these import instructions; it does not justify equating plain blank cells with deletion. | Source: https://learn.microsoft.com/microsoft-365-apps/org-data-service/import/import-orgdata
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; rationale: risk / role: Only Global Administrators and Organizational Data Source Administrators can upload data. | Found: Only Global Administrators and Organizational Data Source Administrators can upload data. | Fix: Add: 'The Viva Insights transition page describes Global Administrator upload access as a temporary solution.' That cited page, https://learn.microsoft.com/viva/insights/advanced/admin/upload-org-data-admin-center, says: 'Only users with this role or the global admin role (as a temporary solution) can upload organizational data.' | Source: https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started
- [supported, minor] controls[0].api / command: POST /v1.0/roleManagement/directory/roleAssignments assigns an Entra directory role. | Found: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments | Fix: Append to controls[0].note: 'The request body sets roleDefinitionId to the Organizational Data Source Administrator role definition and principalId to the assignee; directoryScopeId is / for tenant scope.' These properties appear in the cited assignment example. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal
- [supported, minor] controls[1].ui / admin-path: Access policies are at Settings > Setup > Migration and Imports > Microsoft 365 Organizational Data Service > Settings > Edit access policies. | Found: Under the tools to migrate or import data table, select Microsoft 365 Organizational Data Service. ... Under the Organization-wide access policy section, select Edit access policies. | Fix: Use the full heading-inclusive path: 'Settings > Setup > Migration and Imports > tools to migrate or import data > Microsoft 365 Organizational Data Service > Settings > Organization-wide access policy > Edit access policies'. The omitted elements are headings, not additional choices. | Source: https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist tells administrators to complete provisioning and turn on data staging, but neither control appears in the controls table. | Found: Complete provisioning as a Global Administrator ... Turn on data staging for the first upload ... Who can upload, update, delete and export organisational data ... Which users can see custom attribute data ... Whether organisational data or Microsoft Entra ID supplies values | Fix: Remove the provisioning and data-staging checklist bullets, leaving the already documented factual discussion elsewhere intact; these checklist controls have no corresponding table row. Do not add new control rows in this correction.
-->
