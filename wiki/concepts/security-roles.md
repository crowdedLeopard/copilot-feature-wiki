---
kind: "concept"
title: "Dataverse security roles: who can read or change which data?"
slug: "security-roles"
summary: "Dataverse security roles are the permission sets that decide which tables and records a user, team or application user can read, change, assign or share in one environment. Use them to set least-privilege access and to see who holds what."
created: "2026-11-19"
updated: "2026-11-19"
version: 3
tags: ["security-roles","dataverse","authorisation","least-privilege","power-platform-admin-center","row-level-security","filter-based-security"]
covers: []
sources:
  - title: "Security roles and privileges for Dataverse"
    url: "https://learn.microsoft.com/power-platform/admin/security-roles-privileges"
    kind: "learn"
  - title: "Role-based security roles for Dataverse"
    url: "https://learn.microsoft.com/power-platform/admin/database-security"
    kind: "learn"
  - title: "Ownership-based security in Microsoft Dataverse"
    url: "https://learn.microsoft.com/power-platform/admin/wp-security-cds"
    kind: "learn"
  - title: "Assign security roles"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Create or edit a security role to manage access"
    url: "https://learn.microsoft.com/power-platform/admin/create-edit-security-role"
    kind: "learn"
  - title: "Manage application users in the Power Platform admin center"
    url: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    kind: "learn"
  - title: "Audit security roles"
    url: "https://learn.microsoft.com/power-platform/admin/audit-security-roles"
    kind: "learn"
  - title: "Control user access to environments with security groups and licenses"
    url: "https://learn.microsoft.com/power-platform/admin/control-user-access"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Retrieve the history of audited data changes"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/retrieve-audit-data"
    kind: "learn"
  - title: "Configure Auditing for Organizations, Tables, and Columns"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    kind: "learn"
  - title: "Create and Update Table Definitions Using the Web API"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/create-update-entity-definitions-using-web-api"
    kind: "learn"
  - title: "Security Role (Role) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/role"
    kind: "learn"
  - title: "Work with Microsoft Entra ID group teams"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Web API Functions and Actions Sample"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample"
    kind: "learn"
  - title: "pac admin"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    kind: "learn"
  - title: "OrgDBOrgSettings tool for Microsoft Dynamics CRM"
    url: "https://support.microsoft.com/help/2691237/orgdborgsettings-tool-for-microsoft-dynamics-crm"
    kind: "docs"
  - title: "Secure your Copilot Studio projects"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/sec-gov-phase3"
    kind: "learn"
  - title: "Set-AdminPowerAppEnvironmentRoleAssignment"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-adminpowerappenvironmentroleassignment"
    kind: "learn"
  - title: "Data policies"
    url: "https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention"
    kind: "learn"
related: ["microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column","microsoft-dataverse-build-your-low-code-hyperscale-backend-on-dataverse-build-your-agentic","power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver","agent-identity","managed-environments"]
controls:
  - governs: "Which privileges and access levels each security role grants"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + Permissions > Security roles > security role"
      docs: "https://learn.microsoft.com/power-platform/admin/security-roles-privileges"
    api:
      kind: "rest"
      call: "POST [Organization Uri]/api/data/v9.2/roles(<role-id>)/Microsoft.Dynamics.CRM.AddPrivilegesRole"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample"
    note: "The Privileges request-body array supplies RolePrivilege entries, including PrivilegeId and Depth. The predefined-role reference says its listed roles can't be edited; the editing guide excludes System Administrator."
  - governs: "Which Dataverse roles a user holds in an environment"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "Needs System Administrator or a custom role with Read and Assign on the Security Role table; the role overview's troubleshooting table lists only System Administrator or a tenant-level admin role. Body: @odata.id of the role."
  - governs: "Which roles an application user (a Microsoft Entra app registration) holds"
    scope: "app"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user > Create a new app user > edit icon (security roles)"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    api:
      kind: "pac-cli"
      call: "pac admin assign-user --environment <environment-id> --user <application-id> --role <role> --application-user"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    note: "One application user per Microsoft Entra app registration in an environment. In Create a new app user, choose the application and business unit, then select the edit icon to select security roles."
  - governs: "Roles assigned automatically from a user's licence"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Environments > environment > Settings > Users + Permissions > License To Role mapping"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api: null
    note: "Does not apply in Dataverse for Teams, Trial or Developer environments."
  - governs: "Whether a user can hold roles from business units other than their own"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Record ownership across business units"
      docs: "https://learn.microsoft.com/power-platform/admin/wp-security-cds"
    api:
      kind: "other"
      call: "Microsoft.Crm.SE.OrgDBOrgSettingsTool.exe Update /u <organization-unique-name> EnableOwnershipAcrossBusinessUnits <value>"
      docs: "https://support.microsoft.com/help/2691237/orgdborgsettings-tool-for-microsoft-dynamics-crm"
    note: "Needs a Dynamics 365 admin or Power Platform admin. EnableOwnershipAcrossBusinessUnits stores the feature state, as documented at https://learn.microsoft.com/power-platform/admin/wp-security-cds."
  - governs: "Audit trail of security role changes"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Environments > environment > Settings > Audit and logs > Entity and field audit settings > Entities > Security Role > General > Data Services > Auditing"
      docs: "https://learn.microsoft.com/power-platform/admin/audit-security-roles"
    api:
      kind: "rest"
      call: "PUT [Organization URI]/api/data/v9.2/EntityDefinitions(LogicalName='role')"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/create-update-entity-definitions-using-web-api"
    note: "Auditing must first be on for the environment. Set IsAuditEnabled.Value in the retrieved table definition, preserving the other properties; publish the table customizations for the change to take effect."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-19"
    note: "First page on Dataverse security roles: what a role grants, how roles are assigned, which controls exist and where Microsoft documents no API."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 75 statements contradicted, 5 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: the role-privilege call, ownership-across-business-units and audit-trail automation, the Copilot Studio role wording, predefined-role copying and the unsupported exclusions were fixed or removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 81 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: the ownership-across-business-units command now uses the documented OrgDBOrgSettings syntax, and the application-user path, audit report path and two checklist items were narrowed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 87
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c84179e9c62b0d17393fc7e3be96a8fa"
---

## What it is

A Dataverse security role is a named set of privileges that decides which tables and records a user, team or application user can create, read, change, delete, assign or share in one environment. Microsoft documents the model as applying only to environments that have a Dataverse database.

**How a role is built.** A role holds three kinds of privilege: table privileges (Create, Read, Write, Delete, Append, Append to, Assign, Share), miscellaneous task privileges, and privacy-related privileges such as exporting data to Excel. Each privilege has an access level that sets how far up the business unit hierarchy it reaches: Organization, Parent: Child Business Unit, Business Unit, User or None. For organization-owned tables, miscellaneous privileges and privacy-related privileges, the available levels are only Organization or None.

**How a role reaches a person.** Roles are assigned directly to users or to Dataverse teams, and team members receive the team's privileges. A user can hold several roles and the privileges add together. A business unit is a security boundary: roles are associated with business units, and every user belongs to one.

**Roles that are not Dataverse roles.** Tenant-level admin roles such as Power Platform administrator are assigned in the Microsoft 365 admin centre and do not by themselves give access to Dataverse data. Environments without a Dataverse database use only Environment Admin and Environment Maker.

On top of roles, Dataverse offers record sharing for exceptions and column-level security, which is configured separately. A preview feature, filtered record ownership, grants access by column value; see [Power Platform: secure Dataverse records with column-based filtering](/features/microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column/).

## Why it matters

Security roles are what stand between a licensed user, a maker or an application and the rows in an environment. Because the model is cumulative, the broadest role a person holds decides their reach, so one generous role, or a generous team, cancels every narrower one.

The settings that need attention are the automatic ones. In the Default environment type, Basic User and Environment Maker are assigned automatically to everyone added in Dataverse. Microsoft recommends Environment Maker for Copilot Studio authors, or another predefined or custom role with the needed permissions. Tenant admins no longer get System Administrator automatically, but anyone who was given it earlier keeps it until someone removes it. Review the role assignments in each environment.

## Cost and licensing

Microsoft's security role pages state no separate price, licence or meter for security roles themselves; a charge specific to roles is not documented. Access still depends on licensing around them: a user's presence in an environment does not grant access to Dataverse data, and the user needs a security role and any required product licence. Dataverse tracks access per database and expects an appropriate Dataverse licence.

Two licence links matter to administrators. Where a licence-to-role mapping is defined, users with a valid licence receive the mapped roles automatically, and removing the licence removes the role; this does not apply in Dataverse for Teams, Trial or Developer environments. An application user can be created without a licence.

Auditing role changes uses the Dataverse audit log, which stores audit logs in log storage capacity. For plan and product pricing, see [Power Platform licensing](https://learn.microsoft.com/power-platform/admin/pricing-billing-skus).

## Risks and limits

- **Cumulative access.** A second role cannot hide a record that another role exposes, so removing a narrow role does nothing if a team role is broader.
- **Tenant admin is not data access.** A Power Platform administrator needs the System Administrator role in each environment to work with data. Removing someone from the Entra admin role does not remove a System Administrator role Dataverse already holds for them.
- **Everyone needs a role.** The service does not allow access to users with no role, directly or through a group team.
- **Elevation guard.** The person assigning a role cannot assign one with more privileges than they hold, so delegating role assignment to non-System Administrators needs a custom role.
- **Predefined roles cannot be edited.** The predefined-role reference says its listed roles cannot be edited, while the editing guide documents editing role privileges except for System Administrator. Where copying is supported, copy the role and change the copy; some predefined roles cannot be copied, so create a custom role instead. Custom roles are not supported for canvas apps.
- **Organization-level access.** Organization access gives reach across every business unit; a role granting it widens exposure well beyond a single team.
- **Sharing is the exception.** Microsoft advises record sharing only for exceptions, because it performs less efficiently and is harder to troubleshoot.
- **Roles do not unlock columns.** Column-level security needs record access first, and a security profile on the column.
- **Moving between environments.** Solutions carry roles, but business units, teams and user assignments are set again in each environment.
- **Filtered record ownership is preview.** Microsoft says preview features are not meant for production use.
- **PowerShell gap.** Set-AdminPowerAppEnvironmentRoleAssignment returns a 403 error in an environment with a Dataverse database.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which privileges and access levels each security role grants</strong><br><small>Environment</small><br><small class="controls__note">The Privileges request-body array supplies RolePrivilege entries, including PrivilegeId and Depth. The predefined-role reference says its listed roles can't be edited; the editing guide excludes System Administrator.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + Permissions › Security roles › security role <a href="https://learn.microsoft.com/power-platform/admin/security-roles-privileges" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization Uri]/api/data/v9.2/roles(&lt;role-id&gt;)/Microsoft.Dynamics.CRM.AddPrivilegesRole</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Dataverse roles a user holds in an environment</strong><br><small>User</small><br><small class="controls__note">Needs System Administrator or a custom role with Read and Assign on the Security Role table; the role overview's troubleshooting table lists only System Administrator or a tenant-level admin role. Body: @odata.id of the role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which roles an application user (a Microsoft Entra app registration) holds</strong><br><small>App</small><br><small class="controls__note">One application user per Microsoft Entra app registration in an environment. In Create a new app user, choose the application and business unit, then select the edit icon to select security roles.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Application users › + New app user › Create a new app user › edit icon (security roles) <a href="https://learn.microsoft.com/power-platform/admin/manage-application-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin assign-user --environment &lt;environment-id&gt; --user &lt;application-id&gt; --role &lt;role&gt; --application-user</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Roles assigned automatically from a user's licence</strong><br><small>Environment</small><br><small class="controls__note">Does not apply in Dataverse for Teams, Trial or Developer environments.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Environments › environment › Settings › Users + Permissions › License To Role mapping <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a user can hold roles from business units other than their own</strong><br><small>Environment</small><br><small class="controls__note">Needs a Dynamics 365 admin or Power Platform admin. EnableOwnershipAcrossBusinessUnits stores the feature state, as documented at https://learn.microsoft.com/power-platform/admin/wp-security-cds.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Record ownership across business units <a href="https://learn.microsoft.com/power-platform/admin/wp-security-cds" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Microsoft.Crm.SE.OrgDBOrgSettingsTool.exe Update /u &lt;organization-unique-name&gt; EnableOwnershipAcrossBusinessUnits &lt;value&gt;</code> <a href="https://support.microsoft.com/help/2691237/orgdborgsettings-tool-for-microsoft-dynamics-crm" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit trail of security role changes</strong><br><small>Environment</small><br><small class="controls__note">Auditing must first be on for the environment. Set IsAuditEnabled.Value in the retrieved table definition, preserving the other properties; publish the table customizations for the change to take effect.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Environments › environment › Settings › Audit and logs › Entity and field audit settings › Entities › Security Role › General › Data Services › Auditing <a href="https://learn.microsoft.com/power-platform/admin/audit-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PUT [Organization URI]/api/data/v9.2/EntityDefinitions(LogicalName='role')</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/create-update-entity-definitions-using-web-api" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Who can change roles.** Assigning roles needs the System Administrator role or a custom Dataverse role with at least Read and Assign on the Security Role table. Power Platform, Dynamics 365 and Global Administrators must self-elevate first, and a Dynamics 365 Administrator must belong to the environment's security group.

**How the controls interact.** Roles belong to business units, so the business unit structure limits which roles a user sees unless Record ownership across business units is on. Where licence-to-role mapping is defined, roles are assigned automatically according to the user's licence. The audit row only records changes after auditing is on for the environment, and the report is under Power Platform admin center > Environments > environment > Settings > Users + permissions > Security roles > Audit report. Role assignments appear in the audit table as events 53 to 56 (assign or remove for team and user).

**What the controls do not enforce.** Data policies let administrators control connector access (see [Data policies](/concepts/data-policies/)). See also [Managed Environments](/concepts/managed-environments/) and [Agent identity](/concepts/agent-identity/).

## What to check

- Open Security roles in each production environment and list who holds System Administrator.
- Review the Default environment's automatic Basic User and Environment Maker assignments.
- Check License To Role mapping for roles that arrive with a licence.
- Compare the access levels on custom roles and flag any privilege set to Organization.
- List application users and the roles each holds.
- Turn on auditing for the Security Role table.
- Confirm who may assign roles.

## Open questions

- Is there a documented Power Platform admin PowerShell cmdlet for assigning Dataverse security roles? The cmdlet found applies only to environments without a Dataverse database.
- Is there a documented API or command for the License To Role mapping? None was found.
- When does filtered record ownership leave preview, and is a licence or add-on needed for it?

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui / admin-path: The application-user creation path runs through Application users > + New app user > Create a new app user > edit icon for security roles. | Found: Select + Add an app to choose the registered Microsoft Entra application that was created for the selected user, and then select Add. | Fix: Use the fuller path 'Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user > Create a new app user > + Add an app > application > Add > Business Unit > business unit > edit icon (security roles)'. Keep the note explaining the application and business-unit selections; these omitted target selections are not a blocker. | Source: https://learn.microsoft.com/power-platform/admin/manage-application-users
-->
