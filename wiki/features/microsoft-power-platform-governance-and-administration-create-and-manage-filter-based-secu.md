---
title: "Power Platform: create and manage Dataverse filter-based security filters in the Power Apps maker portal"
slug: "microsoft-power-platform-governance-and-administration-create-and-manage-filter-based-secu"
roadmapId: 581895
topic: "power-platform"
products: ["Microsoft Power Platform governance and administration"]
summary: "Microsoft plans a simpler maker-portal screen for the record filters behind Dataverse filter-based security (preview). Admins should decide who may edit filters, because a filter granted in a role decides which records users can reach."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's licence requirements for Dataverse tables say makers can build apps and flows on custom tables for users with a Power Apps or Power Automate licence. The filter-based security pages name no licence of their own, and nothing specific to the new screen is published."
audiences: ["power-platform-admin","security","maker"]
tags: ["filter-based-security","dataverse","security-roles","row-level-security","power-apps","power-platform","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 581895"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581895"
    kind: "roadmap"
  - title: "Filter-based security in Microsoft Dataverse (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/filter-based-security"
    kind: "learn"
  - title: "Filtered record ownership (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership"
    kind: "learn"
  - title: "Add filtered view security to record ownership tables (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/add-filtered-view-security-ownership-tables"
    kind: "learn"
  - title: "Filtered record ownership by using code (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership"
    kind: "learn"
  - title: "Record Filter (RecordFilter) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/recordfilter"
    kind: "learn"
  - title: "Create or edit a security role to manage access"
    url: "https://learn.microsoft.com/power-platform/admin/create-edit-security-role"
    kind: "learn"
  - title: "AddPrivilegesRole Action"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/addprivilegesrole"
    kind: "learn"
  - title: "RolePrivilege ComplexType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/roleprivilege"
    kind: "learn"
  - title: "License requirements for tables"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-entity-licenses"
    kind: "learn"
  - title: "Query data by using FetchXML in Dataverse"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/fetchxml/overview"
    kind: "learn"
  - title: "Which records a record filter selects (its FetchXML condition) (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-record-filter"
    kind: "learn"
  - title: "Which table a record filter is attached to (entity record filter) (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-an-entity-record-filter"
    kind: "learn"
  - title: "Which security roles grant each filter privilege (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/filter-based-security#grant-filter-privileges-in-security-roles"
    kind: "learn"
  - title: "Which security roles grant each filter privilege (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample"
    kind: "learn"
  - title: "Which users hold a security role that carries filter privileges (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Which users hold a security role that carries filter privileges (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team#assign-a-security-role-to-a-user"
    kind: "learn"
videos: []
related: ["security-roles","microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column"]
controls:
  - governs: "Which records a record filter selects (its FetchXML condition)"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "environment > Solutions > solution > + New > More > Other > Record Filter"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-record-filter"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.2/recordfilters"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership"
    note: "Preview. The request body sets fetchxml, uniquename and displayname. Records are also editable through PATCH on the recordfilter table."
  - governs: "Which table a record filter is attached to (entity record filter)"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "environment > Solutions > solution > + New > More > Other > EntityRecordFilter"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-an-entity-record-filter"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.2/entityrecordfilters"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership"
    note: "Preview. The request body sets objecttypecode and RecordFilterId. Deleting a record filter also deletes its entity record filters."
  - governs: "Which security roles grant each filter privilege"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Security roles > security role > table > filter privilege"
      docs: "https://learn.microsoft.com/power-platform/admin/filter-based-security#grant-filter-privileges-in-security-roles"
    api:
      kind: "rest"
      call: "POST [Organization Uri]/api/data/v9.2/roles(<roleid>)/Microsoft.Dynamics.CRM.AddPrivilegesRole"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample"
    note: "The Privileges parameter takes RolePrivilege entries, which include RecordFilterId. The System Administrator role can't be edited; copy it instead."
  - governs: "Which users hold a security role that carries filter privileges"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles > security role"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team#assign-a-security-role-to-a-user"
    note: "Needs at least Read and Assign on the Security Role table; an assigner can't grant a role with more privileges than they hold. The request body sets @odata.id to [Organization URI]/api/data/v9.0/roles(<role ID>)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
changes:
  - date: "2026-11-26"
    note: "New briefing: planned maker-portal screen for Dataverse filter-based security filters, with the documented filter, role and assignment controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: Dynamics 365 restricted-table licence wording, the full admin path to security roles, filter-edit timing and the autonomy bullet; added the FetchXML source and the role-assignment request body note."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "86fb38e96e21736eb486c5235c9422f2"
---

## What's changing

Microsoft plans a simplified screen in the Power Apps maker portal where admins and makers create and manage the filters used by **filter-based security**, the Dataverse feature that grants access to records whose data matches a condition (for example, accounts whose City is Redmond) instead of by who owns them. The roadmap item describes this as a centralised experience for filters that define which Dataverse records users can access, without sharing records one by one.

Filter-based security itself is documented on Microsoft Learn and is marked preview. Today a filter is two records: a **Record Filter**, which holds a FetchXML query (Dataverse's XML query language), and an **Entity Record Filter**, which attaches that filter to a table. Attaching a filter creates filter privileges (Create, Read, Write, Delete, Append, Append To), which an administrator grants in security roles. The current Learn steps build the FetchXML in a model-driven app's filter editor, download it, and paste it into a Record Filter created from a solution. Microsoft Learn does not describe the new maker-portal screen yet, so what follows about it is the roadmap's description; the controls below are those documented for filter-based security today.

The roadmap record lists the item as In development, with preview targeted for December CY2026 and general availability targeted for March CY2027, on the Web platform. Its cloud list is GCC, GCC High and DoD. Microsoft has not stated whether the screen appears for makers automatically or needs an admin to enable it.

## Why it matters

The screen makes filters easier to write, and therefore easier to change. A filter that a security role already grants is live access control: editing its condition changes which records every holder of that role can reach, with no change to the role itself. Microsoft's developer page says to review every role that grants a filter before changing or removing it. On user- or team-owned and organisation-owned tables, filter privileges add to existing access, including records across business unit boundaries, and do not reduce it, so a mistaken filter widens access rather than narrowing it.

Microsoft has not stated what happens on arrival. No source says existing security roles or filters change when the screen ships, so the practical decision is who in each environment should be allowed to create and edit filters, and whether filters should travel only through solutions from a test environment.

## Risk assessment

**Data exposure**
- A filter privilege grants access to every record that matches its FetchXML. On user, team and organisation-owned tables it adds to what roles, ownership and sharing already grant, including across business units, so an over-broad condition exposes more records. Control: which roles carry each filter privilege (controls table, row 3).
- Editing a Record Filter that roles already grant can change access for those role holders. Microsoft documents no approval step for filter edits.

**Security & identity**
- Filtered record ownership tables give the System Administrator role a system-created **All records** filter privilege, so administrators see every row. Microsoft advises testing with a non-administrator account for this reason.
- Learn says the System Administrator security role is needed to create and assign the security roles this feature uses. Which privileges let a maker create or edit Record Filters in the new screen is not stated.

**Autonomy & actions**
- Dataverse evaluates filter permissions on each query.

**Change & support**
- Learn's FAQ says every query applies filter permissions, so complex filters can slow apps; an efficient data model and filter design should mitigate this.
- For filters with a link-entity, Dataverse Search returns results from the primary table only. Expect user reports where search and views disagree.
- Deleting a Record Filter also deletes its Entity Record Filters, which removes access granted through them.

## Cost and licensing

- **Licence.** The License requirements for tables page says makers can use custom tables and Common Data Model tables to build apps and flows for users who have a Power Apps or Power Automate licence; restricted tables tied to Dynamics 365 apps require app users to have the corresponding application's licence if they want to create, update or delete rows within those tables. The filter-based security and filtered record ownership pages name no licence of their own.
- **Meter.** The filter-based security pages publish no separate meter or charge.
- **Indirect costs.** Admin time to design filters and roles, testing with non-administrator accounts, and possible query slow-downs that Learn attributes to filter permissions.
- **Not yet published.** Licensing or pricing specific to the new maker-portal screen.

## Scope

- **Who uses it:** the roadmap item names admins and makers. Learn says the System Administrator security role is needed to create and assign the roles this feature uses, and filter privileges are granted to roles by an administrator.
- **Tables:** filter-based security works with filtered, user or team, and organisation record ownership tables. Learn's FAQ says filter permissions are not currently available for external virtual tables.
- **Clouds:** the roadmap record lists GCC, GCC High and DoD.
- **Platform:** Web, in the Power Apps maker portal.
- **Status:** In development; preview targeted for December CY2026, general availability targeted for March CY2027. The underlying feature is in preview on Learn.

## Governance guidance

### Before rollout
- List the environments where filter-based security is in use by checking which security roles hold filter privileges (Power Platform admin center > Manage > Environments > environment > Settings > Users + permissions > Security roles).
- Decide who may create and edit Record Filters in each environment, and confirm with Microsoft which privileges the new screen requires before makers are given it.
- Agree that filters move between environments in solutions, built and tested first in a non-production environment, given the feature is still preview.

### At rollout
- Test each new or changed filter with a non-administrator account, because System Administrators hold the All records filter and see every row.
- Review every role that grants a Record Filter before editing or deleting it, as Microsoft's developer guidance advises.
- Check that users have no broader role privileges on the same organisation-owned table when a filter is meant to scope their access.

### After rollout
- Re-check which roles carry filter privileges and which users hold those roles after each release that touches security.
- Watch app performance on tables with complex filters, and simplify the FetchXML where queries slow down.
- Record filter ownership and purpose in each solution so that later edits can be traced to a business owner.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which records a record filter selects (its FetchXML condition)</strong><br><small>Environment</small><br><small class="controls__note">Preview. The request body sets fetchxml, uniquename and displayname. Records are also editable through PATCH on the recordfilter table.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › Solutions › solution › + New › More › Other › Record Filter <a href="https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-record-filter" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.2/recordfilters</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which table a record filter is attached to (entity record filter)</strong><br><small>Environment</small><br><small class="controls__note">Preview. The request body sets objecttypecode and RecordFilterId. Deleting a record filter also deletes its entity record filters.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › Solutions › solution › + New › More › Other › EntityRecordFilter <a href="https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-an-entity-record-filter" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.2/entityrecordfilters</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which security roles grant each filter privilege</strong><br><small>Environment</small><br><small class="controls__note">The Privileges parameter takes RolePrivilege entries, which include RecordFilterId. The System Administrator role can't be edited; copy it instead.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Security roles › security role › table › filter privilege <a href="https://learn.microsoft.com/power-platform/admin/filter-based-security#grant-filter-privileges-in-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization Uri]/api/data/v9.2/roles(&lt;roleid&gt;)/Microsoft.Dynamics.CRM.AddPrivilegesRole</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold a security role that carries filter privileges</strong><br><small>User</small><br><small class="controls__note">Needs at least Read and Assign on the Security Role table; an assigner can't grant a role with more privileges than they hold. The request body sets @odata.id to [Organization URI]/api/data/v9.0/roles(&lt;role ID&gt;).</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles › security role <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team#assign-a-security-role-to-a-user" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

A filter grants access through the filter privileges an administrator grants in a security role, and through the assignment of that role. Rows 1 and 2 define what a filter selects and which table it applies to; row 3 decides which roles get the access; row 4 decides who holds those roles. The maker paths in rows 1 and 2 are the documented steps today and may be replaced by the new screen. The System Administrator role can't be edited; Learn says to copy it and change the copy. Assigning roles needs at least Read and Assign on the Security Role table, and nobody can assign a role with more privileges than they hold. The AddPrivilegesRole action takes RolePrivilege entries, which carry a RecordFilterId; Microsoft's filter-based security pages themselves describe granting filter privileges only in the security role editor. See [Dataverse security roles](/concepts/security-roles/).

## Open questions

- Will the new maker-portal screen appear for makers automatically, or will an administrator turn it on per environment? Watch Message center and the filter-based security Learn page.
- Which Dataverse privileges will a maker need to create or edit a Record Filter in the new screen, and can admins restrict editing of filters already granted in roles?
- Will the new screen show which security roles grant a filter before it is changed or deleted?
- Are changes to Record Filters and filter privileges captured by Dataverse auditing, so that a change in access can be traced?
- Will filter-based security leave preview at the same time as the screen reaches general availability in March CY2027?

<!-- rationale
risk: Medium. Filter privileges add record access on top of existing security roles, including across business units, so a broad or edited filter that a role already grants widens what users can read and change.
cost: Low. Filter-based security uses Dataverse tables under the Power Apps or Power Automate licence; the filter-based security pages publish no separate licence or charge. The cost seen is admin time and query performance.
impact: Low. The new screen is used by administrators and makers who configure Dataverse security; end users notice only when a filter granted in their role changes the records they see.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Power Apps (maker) > environment > Solutions > solution > + New > More > Other > Record Filter reaches the form defining selected records. | Found: Go to Power Apps. Select your environment. Go to Solutions and create a new solution or open an existing solution. Select + New. Select More and Other. Select Record Filter. ... Copy the FetchXML and paste it in the FetchXML box. | Fix: Extend controls[0].ui.path to 'environment > Solutions > solution > + New > More > Other > Record Filter > FetchXML'. The cited page identifies FetchXML as the deciding field on the form. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-record-filter
- [supported, minor] controls[1].ui / admin-path: Power Apps (maker) > environment > Solutions > solution > + New > More > Other > EntityRecordFilter reaches the table-association form. | Found: Return to your Solution. Select + New. Select More and Other. Select EntityRecordFilter. Enter a Name ... Select the Record Filter ... Enter the Related Entity, the logical name of the table, such as account. | Fix: Extend controls[1].ui.path to 'environment > Solutions > solution > + New > More > Other > EntityRecordFilter > Record Filter > Related Entity', following the cited form's filter selection and table field. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-an-entity-record-filter
- [supported, minor] controls[3].ui; Governance controls / admin-path: Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles > security role manages users' role assignments. | Found: On the Users page select a user, and then select Manage security roles. Select or deselect security roles. ... The specified steps help you manage only direct role assignments for the user. | Fix: Append to controls[3].note: 'This UI manages direct role assignments only; roles inherited through group teams are managed separately.' This qualification is stated at https://learn.microsoft.com/power-platform/admin/assign-security-roles. | Source: https://learn.microsoft.com/power-platform/admin/assign-security-roles
-->
