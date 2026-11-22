---
title: "Planner: local custom fields on plan tasks"
slug: "planner-local-custom-fields-columns"
roadmapId: 566867
topic: "modern-work"
products: ["Planner"]
summary: "Planner adds Custom Fields (Text, Number, Date, Yes/No, Choice) to plans. Planner Plan 1 or 3 users create them; Microsoft 365 users see them read-only. Optional, with no admin setup required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's service description lists Local custom fields as View only with Microsoft 365, and Yes with Planner Plan 1, Planner and Project Plan 3 and Microsoft 365 Copilot. MC1492955 names Planner Premium P1, P3 or P5 for creating and editing."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["planner","licensing","auditing","ediscovery","data-lifecycle-management","information-protection","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 566867"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566867"
    kind: "roadmap"
  - title: "MC1492955: Microsoft Planner: Introducing Local Custom Fields"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1492955"
    kind: "message-center"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Understand Planner trials and license assignments"
    url: "https://learn.microsoft.com/planner/understand-planner-trial-and-license-assignments"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Manage the Planner app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    kind: "learn"
  - title: "Turn off Planner for your organization"
    url: "https://learn.microsoft.com/planner/disable-planner"
    kind: "learn"
  - title: "customFieldDefinition resource type (planner)"
    url: "https://learn.microsoft.com/graph/api/resources/customfielddefinition?view=graph-rest-beta"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense"
    kind: "learn"
videos: []
related: ["auditing","ediscovery","sensitivity-labels","planner-my-tasks-redesign"]
controls:
  - governs: "Tenant-wide switch for Planner custom fields"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1492955 says no tenant-level configuration or admin setup is required to enable Custom Fields."
  - governs: "Which users hold a licence that allows creating and editing custom fields"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > Requests > request > Select a product"
      docs: "https://learn.microsoft.com/planner/understand-planner-trial-and-license-assignments"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense"
    note: "The UI page covers licence requests after a Planner and Project Plan 3 trial. The Graph call assigns any licence; the request body addLicenses names the SKU."
  - governs: "Searching the audit log for custom field edits"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell. This searches records; it does not restrict custom fields."
  - governs: "Whether Planner is available to the organisation (coarse alternative; not specific to custom fields)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Planner > Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -IsPlannerAllowed $false"
      docs: "https://learn.microsoft.com/planner/disable-planner"
    note: "Global admin for the cmdlet. Turns Planner off, not custom fields. The two surfaces have different reach, as described under the table."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: Planner local custom fields have launched; creating needs a Planner licence, Microsoft 365 users get read-only access and no admin setup is required."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected cost to medium (licences for people who create fields) and completed the licence-request path and checklist wording."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 74
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e35cbbd6e47397f62998f1c9f9df6f0b"
---

## What's changing

Planner now lets users add their own columns, called Custom Fields, to the tasks in a plan. The roadmap item lists five field types: Text, Number, Date, Yes/No and Choice. Values can be viewed and updated on the Board, in the Grid and in Task details, and used for sorting, filtering, grouping and bulk editing.

Microsoft's notice MC1492955 adds the limits: up to 10 custom fields per plan, field names up to 255 characters, and Choice fields that are single-select with 2 to 25 coloured options. It also says users with a Planner Premium P1, P3 or P5 licence can create, edit and manage fields and their values, while users with a Microsoft 365 licence can view them as read-only and export them, but cannot create or edit them.

The notice calls the feature optional and says existing plans are not affected unless users add Custom Fields. It says no tenant-level configuration or admin setup is required to enable it. Deleting a custom field or a choice option is permanent, and deleting a choice option clears the values that used it.

The roadmap record gives status Launched, target October CY2026, General Availability, Worldwide (Standard Multi-Tenant) and the Desktop, Mac and Web platforms. MC1492955 (published 2026-10-09) gives a Worldwide rollout beginning in late October 2026 and expected to complete by early November 2026. At the time of writing (November 2026) Microsoft Learn has no admin page for local custom fields, so the behaviour above is Microsoft's notice and the roadmap description.

## Why it matters

Teams that track budgets, cost codes or approval status in Planner will start putting that information into plan fields, and it is stored as plan and task data. For a service owner this is mostly a communication and licensing matter: nothing needs enabling, but people will ask why some colleagues can edit fields and others cannot.

Microsoft has described the feature as optional and additive, so if nobody acts, existing plans carry on as they are until a licensed user adds a field. The decision for administrators is who needs a licence that allows creating fields, and what users should be told about the 10-field limit and permanent deletion.

## Risk assessment

**Data exposure**
- Custom field names and values are stored with plan and task data (MC1492955). Text fields can hold whatever users type, so plan owners can place sensitive values in a field; the notice recommends reminding users of data-handling policies.
- The notice says Unified Audit Log, eDiscovery, Microsoft Information Protection through inherited plan-level labels and Data Lifecycle Management cover custom field data. The notice says field values can be exported (Export to Excel), including by read-only users.

**Security & identity**
- Editing is tied to licence: the notice gives creating and editing to Planner Premium P1, P3 or P5 users and read-only access to Microsoft 365 users. Licence assignment is therefore the control over who can change field definitions and values.
- Microsoft's notice says it does not modify Conditional Access, DLP policies or encryption.

**Autonomy & actions**
- No autonomous behaviour: the roadmap item and MC1492955 describe fields that users create and fill in.

**Change & support**
- Deleting a field or a choice option is permanent and cannot be undone, and deleting a choice option clears affected values (MC1492955). Expect support requests after accidental deletions.
- Microsoft's pages differ on who can create fields: the service description also lists Microsoft 365 Copilot users, while MC1492955 names only Planner Premium licences. Expect licence questions until the two agree.

## Cost and licensing

Microsoft's Planner service description lists Local custom fields as View only for users with Planner included in Microsoft 365, and Yes for Planner Plan 1, Planner and Project Plan 3 and Microsoft 365 Copilot. MC1492955 says users with a Planner Premium P1, P3 or P5 licence can create and edit fields, and users with a Microsoft 365 licence get read-only access.

The service description also states that Planner and Project Plan 5 reached end of sale on May 1, 2026 and that Plan 5 includes all Planner and Project Plan 3 capabilities. The pages cited here name no meter and no separate charge for custom fields. Direct costs are licences for people who need to create fields; indirect costs are the time to brief users and handle support requests.

## Scope

Users: anyone with a Microsoft 365 licence can view fields and values read-only and export them; creating and editing needs a qualifying Planner licence (see Cost and licensing). The roadmap record lists Worldwide (Standard Multi-Tenant) only; it lists no US Government cloud. Platforms listed are Desktop, Mac and Web.

Rollout: Microsoft's notice gives late October 2026 to early November 2026 for the Worldwide rollout. No tenant setting or admin setup is required. Existing plans are unaffected until users add fields. Microsoft Learn names no role that manages custom fields; the notice names none either.

## Governance guidance

### Before rollout
- Review licence requests from plan owners after a trial (Microsoft 365 admin center > Billing > Licenses > Requests > request > Select a product).
- Draft user guidance covering the five field types, the 10-field limit per plan, single-select Choice fields with 2 to 25 options and the permanent deletion of fields and options.
- Tell plan owners which data may not go into Text fields under your data-handling policies.

### At rollout
- Send the guidance to plan owners and to read-only users who will see the new columns.
- Confirm in your tenant whether the Planner licence you hold is the one that lets users create fields, because Microsoft's pages name different licences.

### After rollout
- Search the unified audit log for task edits in plans where fields are in use (Microsoft Purview portal > Audit > Search).
- Review support requests for accidental field or option deletion and update the guidance.
- Check Microsoft Learn and Message center for the documentation MC1492955 says will follow.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for Planner custom fields</strong><br><small>Tenant</small><br><small class="controls__note">MC1492955 says no tenant-level configuration or admin setup is required to enable Custom Fields.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold a licence that allows creating and editing custom fields</strong><br><small>User</small><br><small class="controls__note">The UI page covers licence requests after a Planner and Project Plan 3 trial. The Graph call assigns any licence; the request body addLicenses names the SKU.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › Requests › request › Select a product <a href="https://learn.microsoft.com/planner/understand-planner-trial-and-license-assignments" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching the audit log for custom field edits</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell. This searches records; it does not restrict custom fields.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Planner is available to the organisation (coarse alternative; not specific to custom fields)</strong><br><small>Tenant</small><br><small class="controls__note">Global admin for the cmdlet. Turns Planner off, not custom fields. The two surfaces have different reach, as described under the table.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -IsPlannerAllowed $false</code> <a href="https://learn.microsoft.com/planner/disable-planner" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No tenant-level control specific to custom fields is documented, which matches the notice's statement that no admin setup is required. Licence assignment decides who can create and edit fields. Audit search is the monitoring route: the notice says custom field edits are logged in Task History and flow to the Unified Audit Log, and searching needs the Audit Logs or View-Only Audit Logs role in the Microsoft Purview portal.

The Planner on/off switches in the last row are blunt tools. They turn Planner off, not custom fields, and their Learn pages do not mention custom fields. The Teams admin center Block action covers the Planner app in Teams; the PowerShell page covers basic plans in the Planner app in Teams and Web and all plans in other Planner endpoints.

## Open questions

- Will Microsoft publish a Learn page for local custom fields, and will it confirm which licences can create fields, given that the service description lists Microsoft 365 Copilot and MC1492955 lists only Planner Premium P1, P3 and P5? Watch the MC1492955 update and the Planner service description.
- Which audit operation names record custom field creation, edits and deletions in the Microsoft Purview portal? Watch the Audit log activities page.
- Does the Microsoft Graph beta customFieldDefinition resource represent these plan-level fields, and will write operations be offered? Watch the Planner API in Microsoft Graph documentation.
- Is there a plan for a tenant-level setting to limit custom fields? Watch Message center.

<!-- rationale
risk: Low. Custom fields are optional metadata that users add to tasks; Microsoft's notice MC1492955 says existing plans are unaffected and that audit, eDiscovery, labels and lifecycle processes cover the data.
cost: Medium. Users who need to create fields need a qualifying licence beyond Microsoft 365 read-only access, so spend depends on how many creators need licensing.
impact: Medium. Plan owners with a qualifying Planner licence will use the fields; users with only a Microsoft 365 licence will see and export the values but not edit them.
-->
