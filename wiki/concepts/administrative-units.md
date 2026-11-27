---
kind: "concept"
title: "Administrative units: which users can a delegated administrator manage?"
slug: "administrative-units"
summary: "Administrative units are Microsoft Entra ID containers of users, groups or devices. Unit-scoped roles delegate regional or departmental administration without tenant-wide rights."
created: "2026-11-27"
updated: "2026-11-27"
version: 3
tags: ["administrative-units","entra-id","purview","role-groups","delegation","least-privilege","dlp","adaptive-scopes","microsoft-graph"]
covers: []
sources:
  - title: "Administrative units in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units"
    kind: "learn"
  - title: "Create or delete administrative units"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    kind: "learn"
  - title: "Restricted management administrative units in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-restricted-management"
    kind: "learn"
  - title: "Add users, groups, or devices to an administrative unit"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-members-add"
    kind: "learn"
  - title: "Add a member"
    url: "https://learn.microsoft.com/graph/api/administrativeunit-post-members?view=graph-rest-1.0"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Administrative units in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/purview-admin-units"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
related: ["role-groups","insider-risk-management","sensitivity-labels","auditing","microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp","microsoft-purview-compliance-portal-information-protection-admin-unit-scoping-in-content-e","microsoft-purview-communication-compliance-support-for-adaptive-policy-scopes"]
controls:
  - governs: "Creating an administrative unit"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Roles & admins > Admin units > Add"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    api:
      kind: "graph"
      call: "POST /v1.0/directory/administrativeUnits"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    note: "At least Privileged Role Administrator."
  - governs: "Whether a unit's members are protected from tenant-level administrators (restricted management)"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Roles & admins > Admin units > Add > Restricted management administrative unit"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    api:
      kind: "graph"
      call: "POST /v1.0/directory/administrativeUnits"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    note: "The request body sets isMemberManagementRestricted. Set at creation only; it can't be changed later. Maximum 100 per tenant."
  - governs: "Which users, groups and devices belong to a unit"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Roles & admins > Admin units > administrative unit > Users > Add member"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-members-add"
    api:
      kind: "graph"
      call: "POST /v1.0/directory/administrativeUnits/{id}/members/$ref"
      docs: "https://learn.microsoft.com/graph/api/administrativeunit-post-members?view=graph-rest-1.0"
    note: "Groups > Add and Devices > Add device for the other member types. Adding a group does not add its members. The request body sets @odata.id to the URL of the user, group or device to add."
  - governs: "Which Entra role an administrator holds over a unit's members"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Roles & admins > Admin units > administrative unit > Roles and administrators > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "The request body sets directoryScopeId to /administrativeUnits/<ID>. Only roles with permissions over unit objects are offered."
  - governs: "Which units a Purview role-group member is restricted to"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > member > Assign admin units"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "Needs the Role management role. Members with no units stay unrestricted."
  - governs: "Which units a DLP policy is scoped to"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Admin units"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <String> -PolicyRBACScopes <administrative-unit-ObjectID>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Path as documented for the Copilot, Copilot Chat and Cowork location, where unit support is in preview. Security & Compliance PowerShell."
  - governs: "Which SharePoint sites belong to a unit for Purview policies"
    scope: "site"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Administrative units > administrative unit > Edit"
      docs: "https://learn.microsoft.com/purview/purview-admin-units"
    api: null
    note: "A query on site URL, site name or RefinableString00-99. Needs the admin unit extension manager role. Applies to auto-labelling and DLP policies only."
confidence: "high"
dependents: 7
changes:
  - date: "2026-11-27"
    note: "New concept page: how Microsoft Entra administrative units scope delegated roles, how Microsoft Purview reuses them, their licensing and the controls in each portal."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected restricted management units: they block direct changes to members' Entra properties by unassigned administrators, while related Microsoft 365 operations, licence assignment and usage location updates stay allowed. Bulk adding narrowed to users; Graph request body noted."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 95 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected Purview scoping: for overlapping capabilities, an Entra role takes precedence over a unit-scoped Purview role-group assignment and gives unscoped access. Summary reworded accordingly."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 111 statements confirmed"
verification:
  status: "verified"
  date: "2026-11-27"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 111
  confirmed: 111
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1fc92fd43a0efe17b89db82f9f909ef2"
---

## What it is

An **administrative unit** is a Microsoft Entra ID container that can hold only users, groups or devices. A role assigned with the unit as its scope works only on the unit's members, so a regional or departmental administrator can manage their part of the organisation without a tenant-wide role.

### How it works

- **The unit.** Created in the Microsoft Entra admin center, with Microsoft Graph or with PowerShell. A user can belong to several units. Units can't be nested.
- **Members.** Users, groups and devices can be added manually. Users can also be added in bulk, and users and devices by dynamic membership rules. Adding a group brings the group itself into the unit's scope, not the group's members.
- **Scoped role assignments.** An Entra role such as User Administrator assigned over a unit lets the holder manage the unit's members, not the unit itself. Such administrators can use the Microsoft 365 admin center for basic management of users in their units; users outside their units are filtered out there.
- **Restricted management units.** A variant that restricts direct modification of members' Microsoft Entra properties to explicitly assigned unit-scoped administrators. Related Microsoft 365 operations are not affected; assigning licences and updating users' usage location also remain allowed. Global Administrators can still manage the unit itself and assign themselves a unit-scoped role.

### In Microsoft Purview

Purview reuses the same Entra units. A member of a Purview role group who is assigned one or more units becomes a *restricted administrator*: in the solutions that support units (data lifecycle management, DLP, Communication Compliance, Insider Risk Management, records management and sensitivity labelling) they create and manage policies, and see alerts and activity, only for users in their units. For overlapping capabilities, an Entra role takes precedence over a scoped Purview role-group assignment and gives unscoped access. Members with no units assigned are *unrestricted administrators*. Purview can also add SharePoint sites to a unit by query, for auto-labelling and DLP policies that apply to sites. The role groups themselves are explained in [Purview role groups](/concepts/role-groups/).

## Why it matters

Administrative units are how an organisation divides administration by region, subsidiary or department. In Entra they narrow which users a Helpdesk or User Administrator can change. In Purview they decide which users a regional compliance team can write policies for and whose alerts it can see; for overlapping capabilities, an Entra role takes precedence over a scoped Purview role-group assignment and gives unscoped access. For a DLP policy on Microsoft 365 Copilot, Copilot Chat and Cowork, the unit is matched on the user who submits the prompt, not on the owner of the content ([example](/features/microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp/)).

The scope covers management, not sight of the directory: Microsoft states that units don't prevent members or administrators from using their default user permissions to browse users, groups and resources outside the unit. The first assignment of units in Purview also changes what people see at once: restricted administrators can no longer see or edit existing policies, or historical alerts and activity explorer data, which stay with unrestricted administrators. Decide who stays unrestricted before assigning any units.

## Cost and licensing

**Microsoft Entra ID.** Creating administrative units is available with Microsoft Entra ID Free. Each administrator assigned directory roles over a unit's scope needs a Microsoft Entra ID P1 licence, and each member a Free licence. Where a unit uses dynamic membership rules, each member needs P1.

**Microsoft Purview.** Microsoft's page on administrative units in Purview lists Microsoft Entra ID P1 or P2 licensing as a prerequisite, together with one of these subscriptions: Microsoft 365 E5/A5/G5; Microsoft 365 E5/A5/G5/F5 Compliance or F5 Security & Compliance; Microsoft 365 E5/A5/G5/F5 Information Protection & Governance; or Microsoft 365 E5/A5/F5 Insider Risk Management. The `New-DlpCompliancePolicy` reference also states that administrative units are available only in Microsoft Entra ID P1 or P2. The Purview page does not say which users the Entra licence is counted for.

## Risks and limits

- **No nesting.** Units can't be nested, so a country-and-region structure needs separate flat units, each with its own role assignments.
- **Group membership does not flow.** An administrator scoped to a unit that contains a group can rename the group and change its membership, but can't reset passwords or edit properties of its members unless those users are added to the unit directly. Members of dynamic distribution groups don't become unit members.
- **Dynamic units hold no groups.** A unit with dynamic membership rules can't contain groups; Purview's guidance is to create one unit for users and another for groups.
- **Insider Risk Management alerts for group-added users are hidden.** Restricted administrators can't access alerts for users who reach their unit through security or distribution groups; only unrestricted administrators see them. Microsoft recommends adding users directly.
- **Restricted management is fixed at creation.** The setting can't be changed after the unit is created, a tenant can have at most 100 such units, and their users and groups can't be managed with Microsoft Entra ID Governance features such as Privileged Identity Management, entitlement management, lifecycle workflows and access reviews.
- **Defender XDR scopes only DLP.** Microsoft Defender XDR supports units only for DLP alerts, up to 100 units, so unit scoping does not carry to Insider Risk Management alerts there.
- **SharePoint site queries are slow and coarse.** A site query can take up to five days to populate, applies only to auto-labelling and DLP policies, and administrators who select a unit can't include or exclude individual sites.
- **Intune is outside it.** Microsoft states that managing devices in Intune is not supported with administrative units at this time.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating an administrative unit</strong><br><small>Tenant</small><br><small class="controls__note">At least Privileged Role Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Roles &amp; admins › Admin units › Add <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/directory/administrativeUnits</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a unit's members are protected from tenant-level administrators (restricted management)</strong><br><small>Group</small><br><small class="controls__note">The request body sets isMemberManagementRestricted. Set at creation only; it can't be changed later. Maximum 100 per tenant.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Roles &amp; admins › Admin units › Add › Restricted management administrative unit <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/directory/administrativeUnits</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users, groups and devices belong to a unit</strong><br><small>Group</small><br><small class="controls__note">Groups &gt; Add and Devices &gt; Add device for the other member types. Adding a group does not add its members. The request body sets @odata.id to the URL of the user, group or device to add.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Roles &amp; admins › Admin units › administrative unit › Users › Add member <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-members-add" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/directory/administrativeUnits/{id}/members/$ref</code> <a href="https://learn.microsoft.com/graph/api/administrativeunit-post-members?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Entra role an administrator holds over a unit's members</strong><br><small>User</small><br><small class="controls__note">The request body sets directoryScopeId to /administrativeUnits/&lt;ID&gt;. Only roles with permissions over unit objects are offered.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Roles &amp; admins › Admin units › administrative unit › Roles and administrators › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which units a Purview role-group member is restricted to</strong><br><small>User</small><br><small class="controls__note">Needs the Role management role. Members with no units stay unrestricted.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › member › Assign admin units <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which units a DLP policy is scoped to</strong><br><small class="controls__note">Path as documented for the Copilot, Copilot Chat and Cowork location, where unit support is in preview. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Admin units <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;String&gt; -PolicyRBACScopes &lt;administrative-unit-ObjectID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites belong to a unit for Purview policies</strong><br><small>Site</small><br><small class="controls__note">A query on site URL, site name or RefinableString00-99. Needs the admin unit extension manager role. Applies to auto-labelling and DLP policies only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Administrative units › administrative unit › Edit <a href="https://learn.microsoft.com/purview/purview-admin-units" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Creating units, adding members and assigning scoped roles in the Microsoft Entra admin center needs at least the Privileged Role Administrator role. Assigning units to Purview role-group members needs the *Role management* role in Purview, and associating SharePoint sites with a unit needs the *admin unit extension manager* role.

A unit decides whose data a role reaches, not what the role allows. A Purview restricted administrator still needs the solution's own permissions; for DLP, the same roles or role groups as unrestricted DLP administrators. Restricted administrators must pick one or more of their units when they create a policy; unrestricted administrators can keep the whole directory or pick units.

Creation of restricted management units, member changes and scoped role changes in them are recorded in the Microsoft Entra audit logs. Purview also applies unit scoping to audit log search access.

## What to check

- List your units under **Entra ID > Roles & admins > Admin units** and confirm which users are members directly rather than through a group.
- Review each unit's **Roles and administrators** to see who holds a scoped role.
- Check which Purview role-group members have **Assign admin units** set, and keep at least one unrestricted administrator per solution.
- Count Microsoft Entra ID P1 licences for administrators with scoped directory roles and for members of dynamic-membership units.
- Decide whether a unit needs restricted management before creating it, because the setting can't be changed later.
- Check which DLP policies are scoped to units rather than the full directory, in the portal or through `PolicyRBACScopes`.

## Open questions

- Does a Purview restricted administrator who holds no Entra directory role over the unit need a Microsoft Entra ID P1 licence? The Entra page ties P1 to administrators with directory roles over the unit; the Purview page lists P1 or P2 without saying for whom.
- Will Microsoft document a PowerShell or Graph operation for assigning units to Purview role-group members, or for SharePoint site queries? Not yet documented at the time of writing (November 2026).
- When does administrative unit support for the Microsoft Copilot, Copilot Chat, and Copilot Cowork DLP location leave preview?
