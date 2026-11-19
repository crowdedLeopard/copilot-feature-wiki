---
kind: "concept"
title: "Dataverse security roles: who can read or change which data?"
slug: "security-roles"
summary: "Dataverse security roles are the permission sets that decide which tables and records a user, team or application user can read, change, assign or share in one environment. Use them to set least-privilege access and to see who holds what."
created: "2026-11-19"
updated: "2026-11-19"
version: 1
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
  - title: "Assign a security role to a user"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
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
  - title: "Licensing overview for Microsoft Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/pricing-billing-skus"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Retrieve the history of audited data changes"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/retrieve-audit-data"
    kind: "learn"
  - title: "Work with Microsoft Entra ID group teams"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Web API Functions and Actions Sample"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample"
    kind: "learn"
  - title: "AddPrivilegesRole Action"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/addprivilegesrole"
    kind: "learn"
  - title: "pac admin"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    kind: "learn"
  - title: "Secure your Copilot Studio projects"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/sec-gov-phase3"
    kind: "learn"
  - title: "Set-AdminPowerAppEnvironmentRoleAssignment"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-adminpowerappenvironmentroleassignment"
    kind: "learn"
related: ["microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column","microsoft-dataverse-build-your-low-code-hyperscale-backend-on-dataverse-build-your-agentic","power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver","agent-identity","managed-environments"]
controls:
  - governs: "Which privileges and access levels each security role grants"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + Permissions > Security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/security-roles-privileges"
    api:
      kind: "rest"
      call: "POST [Organization Uri]/api/data/v9.2/roles"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample"
    note: "The request body sets name and businessunitid@odata.bind; the AddPrivilegesRole action adds privileges. Predefined roles cannot be edited."
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
    note: "Needs the System Administrator role or Read and Assign on the Security Role table. The request body carries @odata.id of the role."
  - governs: "Which roles an application user (a Microsoft Entra app registration) holds"
    scope: "app"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    api:
      kind: "pac-cli"
      call: "pac admin assign-user --environment <environment-id> --user <application-id> --role <role> --application-user"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    note: "One application user per Microsoft Entra app registration in an environment."
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
    api: null
    note: "Needs a Dynamics 365 admin or Power Platform admin. Microsoft names an OrgDBOrgSettings tool for the underlying setting."
  - governs: "Audit trail of security role changes"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Environments > environment > Settings > Audit and logs > Entity and field audit settings > Security Role > General > Auditing"
      docs: "https://learn.microsoft.com/power-platform/admin/audit-security-roles"
    api: null
    note: "Auditing must first be on for the environment. The report is under Settings > Users + permissions > Security roles > Audit report."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-19"
    note: "First page on Dataverse security roles: what a role grants, how roles are assigned, which controls exist and where Microsoft documents no API."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 75 statements contradicted, 5 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 64
  unconfirmed: 5
  contradicted: 6
  attempts: 1
  hash: "15b139c1455c433aa0288df6718037ea"
---

## What it is

A Dataverse security role is a named set of privileges that decides which tables and records a user, team or application user can create, read, change, delete, assign or share in one environment. Microsoft documents the model as applying only to environments that have a Dataverse database.

**How a role is built.** A role holds three kinds of privilege: table privileges (Create, Read, Write, Delete, Append, Append to, Assign, Share), miscellaneous task privileges, and privacy-related privileges such as exporting data to Excel. Each privilege has an access level that sets how far up the business unit hierarchy it reaches: Organization, Parent: Child Business Unit, Business Unit, User or None.

**How a role reaches a person.** Roles are assigned directly to users or to Dataverse teams, and team members receive the team's privileges. A user can hold several roles and the privileges add together. A business unit is a security boundary: roles are associated with business units, and every user belongs to one.

**Roles that are not Dataverse roles.** Tenant-level admin roles such as Power Platform administrator are assigned in the Microsoft 365 admin centre and do not by themselves give access to Dataverse data. Environments without a Dataverse database use only Environment Admin and Environment Maker.

On top of roles, Dataverse offers record sharing for exceptions and column-level security, which is configured separately. A preview feature, filtered record ownership, grants access by column value; see [Power Platform: secure Dataverse records with column-based filtering](/features/microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column/).

## Why it matters

Security roles are what stand between a licensed user, a maker or an application and the rows in an environment. Because the model is cumulative, the broadest role a person holds decides their reach, so one generous role, or a generous team, cancels every narrower one.

The settings that need attention are the automatic ones. In the Default environment type, Basic User and Environment Maker are assigned automatically to everyone added in Dataverse, and Copilot Studio authoring depends on Environment Maker. Tenant admins no longer get System Administrator automatically, but anyone who was given it earlier keeps it until someone removes it. Neither state is visible without looking at the role assignments in each environment.

## Cost and licensing

Microsoft's security role pages state no separate price, licence or meter for security roles themselves; a charge specific to roles is not documented. Access still depends on licensing around them: a user's presence in an environment does not grant access to Dataverse data, and the user needs a security role and any required product licence. Dataverse tracks access per database and expects an appropriate Dataverse licence.

Two licence links matter to administrators. Where a licence-to-role mapping is defined, users with a valid licence receive the mapped roles automatically, and removing the licence removes the role; this does not apply in Dataverse for Teams, Trial or Developer environments. An application user can be created without a licence.

Auditing role changes uses the Dataverse audit log, which stores audit logs in log storage capacity. For plan and product pricing, see [Power Platform licensing](https://learn.microsoft.com/power-platform/admin/pricing-billing-skus).

## Risks and limits

- **Cumulative access.** A second role cannot hide a record that another role exposes, so removing a narrow role does nothing if a team role is broader.
- **Tenant admin is not data access.** A Power Platform administrator needs the System Administrator role in each environment to work with data. Removing someone from the Entra admin role does not remove a System Administrator role Dataverse already holds for them.
- **Everyone needs a role.** The service does not allow access to users with no role, directly or through a group team.
- **Elevation guard.** The person assigning a role cannot assign one with more privileges than they hold, so delegating role assignment to non-System Administrators needs a custom role.
- **Predefined roles cannot be edited.** Copy a role to change it. Custom roles are not supported for canvas apps.
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
<tr><td data-label="Control"><strong>Which privileges and access levels each security role grants</strong><br><small>Environment</small><br><small class="controls__note">The request body sets name and businessunitid@odata.bind; the AddPrivilegesRole action adds privileges. Predefined roles cannot be edited.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + Permissions › Security roles <a href="https://learn.microsoft.com/power-platform/admin/security-roles-privileges" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization Uri]/api/data/v9.2/roles</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Dataverse roles a user holds in an environment</strong><br><small>User</small><br><small class="controls__note">Needs the System Administrator role or Read and Assign on the Security Role table. The request body carries @odata.id of the role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which roles an application user (a Microsoft Entra app registration) holds</strong><br><small>App</small><br><small class="controls__note">One application user per Microsoft Entra app registration in an environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Application users › + New app user <a href="https://learn.microsoft.com/power-platform/admin/manage-application-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin assign-user --environment &lt;environment-id&gt; --user &lt;application-id&gt; --role &lt;role&gt; --application-user</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Roles assigned automatically from a user's licence</strong><br><small>Environment</small><br><small class="controls__note">Does not apply in Dataverse for Teams, Trial or Developer environments.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Environments › environment › Settings › Users + Permissions › License To Role mapping <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a user can hold roles from business units other than their own</strong><br><small>Environment</small><br><small class="controls__note">Needs a Dynamics 365 admin or Power Platform admin. Microsoft names an OrgDBOrgSettings tool for the underlying setting.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Record ownership across business units <a href="https://learn.microsoft.com/power-platform/admin/wp-security-cds" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit trail of security role changes</strong><br><small>Environment</small><br><small class="controls__note">Auditing must first be on for the environment. The report is under Settings &gt; Users + permissions &gt; Security roles &gt; Audit report.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Environments › environment › Settings › Audit and logs › Entity and field audit settings › Security Role › General › Auditing <a href="https://learn.microsoft.com/power-platform/admin/audit-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Who can change roles.** Assigning roles needs the System Administrator role or a custom Dataverse role with at least Read and Assign on the Security Role table. Power Platform, Dynamics 365 and Global Administrators must self-elevate first, and a Dynamics 365 Administrator must belong to the environment's security group.

**How the controls interact.** Roles belong to business units, so the business unit structure limits which roles a user sees unless Record ownership across business units is on. License-to-role mapping adds roles on top of manual assignments. The audit row only records changes after auditing is on for the environment. Role assignments appear in the audit table as events 53 to 56 (assign or remove for team and user).

**What the controls do not enforce.** Roles do not govern which connectors a flow uses (see [Data policies](/concepts/data-policies/)), do not set environment-level limits (see [Managed Environments](/concepts/managed-environments/)) and do not decide whose identity an agent runs as (see [Agent identity](/concepts/agent-identity/)).

## What to check

- Open Security roles in each production environment and list who holds System Administrator.
- Review the Default environment's automatic Basic User and Environment Maker assignments.
- Check License To Role mapping for roles that arrive with a licence.
- Compare the access levels on custom roles and flag any privilege set to Organization.
- List application users and the roles each holds.
- Turn on auditing for the Security Role table and read the Audit report for recent role changes.
- Confirm which admins have self-elevated, and who may assign roles.

## Open questions

- Is there a documented Power Platform admin PowerShell cmdlet for assigning Dataverse security roles? The cmdlet found applies only to environments without a Dataverse database.
- Is there a documented API or command for the License To Role mapping and the Record ownership across business units setting? Neither was found.
- When does filtered record ownership leave preview, and is a licence or add-on needed for it?
- How do role-based privileges apply to agents themselves, as distinct from the makers who author them? Not yet documented on the pages read; see [Agent identity](/concepts/agent-identity/).

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api / command: POST [Organization Uri]/api/data/v9.2/roles sets which privileges and access levels a role grants. | Found: 1. Create a security role. You must associate the role with a business unit. ... 6. Pass the list as the AddPrivilegesRole.Privileges parameter. | Fix: Replace the call with 'POST [Organization Uri]/api/data/v9.2/roles(<role-id>)/Microsoft.Dynamics.CRM.AddPrivilegesRole', keeping the existing sample URL as docs. Replace the creation-body sentence in the note with 'The Privileges request-body array supplies RolePrivilege entries, including PrivilegeId and Depth.' This is the sample's operation that adds privileges. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/web-api-functions-actions-sample
- [contradicted, blocker] controls[4].api; Open questions / absence: No API or command is documented for Record ownership across business units. | Found: To update Microsoft.Crm.SE.OrgDBOrgSettingsTool.exe Update [/u] <OrgName> <SettingName> <Value> | Fix: Set this API side to kind 'other', call 'Microsoft.Crm.SE.OrgDBOrgSettingsTool.exe Update /u <organization-unique-name> EnableOwnershipAcrossBusinessUnits true', and docs to the source URL. The already-cited ownership-security page explicitly identifies this setting and this tool. Remove Record ownership across business units from the Open questions claim that neither command was found. | Source: https://support.microsoft.com/help/2691237/orgdborgsettings-tool-for-microsoft-dynamics-crm
- [contradicted, blocker] controls[5].api / absence: Microsoft has not documented automation for enabling the security-role audit trail. | Found: To change which tables and columns support auditing, update their IsAuditEnabled.Value property. | Fix: Replace the null side with kind 'rest', call "PUT [Organization URI]/api/data/v9.2/EntityDefinitions(LogicalName='role')", docs 'https://learn.microsoft.com/power-apps/developer/data-platform/webapi/create-update-entity-definitions-using-web-api'. Add to the note: 'Set IsAuditEnabled.Value in the retrieved table definition, preserving the other definition properties; publish the table customizations for the change to take effect.' Cite the configure-auditing source as well. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure
- [contradicted, blocker] Why it matters / role: Copilot Studio authoring depends on Environment Maker. | Found: Assign the Environment Maker role to users who need to author agents. If the user needs a different set of permissions, assign another predefined role or a custom role. | Fix: Replace 'Copilot Studio authoring depends on Environment Maker' with 'Microsoft recommends Environment Maker for Copilot Studio authors, or another predefined or custom role with the needed permissions'. The same page lists System Administrator and System Customizer as other authoring roles. | Source: https://learn.microsoft.com/microsoft-copilot-studio/guidance/sec-gov-phase3
- [unsupported, major] Why it matters / behaviour: Neither automatic assignment state is visible without examining assignments in each environment. | Found: Searched: Dataverse security roles privileges assign application users ownership based security audit security roles; read security-roles-privileges, assign-security-roles and audit-security-roles. They document inspection routes, not an exclusive visibility limitation. | Fix: Replace 'Neither state is visible without looking at the role assignments in each environment' with the advice 'Review the role assignments in each environment'.
- [contradicted, blocker] Risks and limits: Predefined roles cannot be edited / behaviour: Copy a predefined role whenever it needs changing. | Found: Some predefined roles can't be copied. Try creating a custom security role instead. | Fix: Replace 'Copy a role to change it' with 'Where copying is supported, copy the role and change the copy; some predefined roles cannot be copied, so create a custom role instead'. | Source: https://learn.microsoft.com/power-platform/admin/database-security
- [unsupported, major] Governance controls: How the controls interact / behaviour: Licence-to-role mapping adds roles on top of manual assignments. | Found: Searched: '"license" "manually assigned" "roles" Dataverse' and '"security role" "assignments" "license" "manual" Dataverse'; read assign-security-roles. It documents automatic assignment/removal, not preservation or interaction with manual assignments. | Fix: Replace the sentence with 'Where licence-to-role mapping is defined, roles are assigned automatically according to the user's licence'.
- [unsupported, blocker] Governance controls: What the controls do not enforce / applicability: Security roles do not govern which connectors a flow uses. | Found: Searched: '"security roles" "connectors" "data policies" "flows"' and 'Dataverse "security roles" "don't" "connectors"'; read role documentation and Data policies excerpts. Data policies govern connectors, but no passage establishes the blanket exclusion. | Fix: Replace this clause with 'Data policies let administrators control connector access (see Data policies)' and cite https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention. Do not claim that roles cannot affect connector use.
- [unsupported, blocker] Governance controls: What the controls do not enforce / applicability: Security roles do not set environment-level limits. | Found: Searched: '"Managed Environments" "limits" "security roles"'; read managed-environment-overview and database-security. They describe separate capabilities but do not state that no security-role privilege governs any environment-level limit. | Fix: Remove 'do not set environment-level limits'. The Managed Environments cross-link may remain as a cross-link without this universal exclusion.
- [unsupported, blocker] Governance controls: What the controls do not enforce / applicability: Security roles do not decide whose identity an agent runs as. | Found: Searched: 'Copilot Studio agent identity Dataverse security roles agent application user runtime' and 'Dataverse security roles "authentication" "authorization"'; read govern-agents-identities-overview. Automatic identity provisioning does not establish this universal runtime claim. | Fix: Remove 'do not decide whose identity an agent runs as'. Retain the Agent identity cross-link without the unsupported exclusion.
- [contradicted, blocker] Open questions: agents themselves / absence: How role-based privileges apply to agents themselves, rather than their makers, is not documented. | Found: Dataverse enforces table privileges, field-level security, ownership and sharing, and administrator permissions on every request. An agent can't exceed the permissions of the signed-in identity. | Fix: Remove this open question. The absence is too broad: Microsoft documents runtime enforcement for the Dataverse plugin for AI agents in preview. The qualification 'on the pages read' does not establish a general documentation gap. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/security-governance
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The environment's security-role privileges are reached through Manage > Environments > environment > Settings > Users + Permissions > Security roles. | Found: Select Manage in the navigation pane. ... Select Users + Permissions > Security roles. | Fix: Append '> security role' to the path to identify the role being configured. The editing procedure at https://learn.microsoft.com/power-platform/admin/create-edit-security-role says to choose the security role and then specify its privileges. | Source: https://learn.microsoft.com/power-platform/admin/security-roles-privileges
- [supported, minor] controls[2].ui / admin-path: Application-user role configuration is reached through Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user. | Found: Select + New app user to open the Create a new app user pane. ... Select the edit icon to select security roles for the new application user. | Fix: The printed steps are correct but stop before the unlabelled role-edit icon. Append this to the note: 'In Create a new app user, choose the application and business unit, then select the edit icon to select security roles.' | Source: https://learn.microsoft.com/power-platform/admin/manage-application-users
- [supported, minor] controls[5].ui / admin-path: The printed audit-settings path reaches Security Role > General > Auditing. | Found: In the left side panel, under Entities, select Security Role. ... On the General tab, under Data Services, select Auditing. | Fix: Use 'Environments > environment > Settings > Audit and logs > Entity and field audit settings > Entities > Security Role > General > Data Services > Auditing'. Entities and Data Services are omitted headings, not missing selectable choices. | Source: https://learn.microsoft.com/power-platform/admin/audit-security-roles
- [supported, minor] Risks and limits: Predefined roles cannot be edited; controls[0].note / behaviour: Predefined security roles cannot be edited. | Found: The following list provides the predefined security roles in an environment that has a Dataverse database. You can't edit these roles. | Fix: Attribute the restriction to the predefined-role reference and acknowledge that https://learn.microsoft.com/power-platform/admin/create-edit-security-role documents editing role privileges while specifically excluding System Administrator. Replace the blanket wording with 'The predefined-role reference says its listed roles cannot be edited; Microsoft's editing guide separately documents editing role privileges, except System Administrator.' | Source: https://learn.microsoft.com/power-platform/admin/database-security
- [supported, minor] controls[1].note; Governance controls: Who can change roles / role: Assigning roles requires System Administrator or a custom role with at least Read and Assign on the Security Role table. | Found: Assign Dataverse security roles | System Administrator security role, or a custom Dataverse role with at least Read and Assign privileges on the Security Role table | Fix: Keep the precise prerequisite, but add: 'The general role overview's troubleshooting table instead says only System Administrator or a tenant-level admin can manage assignments; the task-specific assignment and access-control documentation explicitly permits the qualified custom role.' The differing page is https://learn.microsoft.com/power-platform/admin/database-security#common-issues. | Source: https://learn.microsoft.com/power-platform/admin/control-user-access
- [supported, minor] sources / behaviour: The role-editing route is supported by a Microsoft page not listed in sources. | Found: Choose the security role you want to edit. ... Specify privileges for the security role. | Fix: Add https://learn.microsoft.com/power-platform/admin/create-edit-security-role to sources. For the corrections above, also cite https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention, https://support.microsoft.com/help/2691237/orgdborgsettings-tool-for-microsoft-dynamics-crm, https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure and https://learn.microsoft.com/power-apps/developer/data-platform/webapi/create-update-entity-definitions-using-web-api where their facts are retained. | Source: https://learn.microsoft.com/power-platform/admin/create-edit-security-role
-->
