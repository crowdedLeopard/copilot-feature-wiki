---
title: "Microsoft Intune: granular RBAC permissions for endpoint security workloads"
slug: "microsoft-intune-additional-granular-rbac-controls-to-manage-antivirus-firewall-bitlocker"
roadmapId: 498899
topic: "governance"
products: ["Microsoft Intune"]
summary: "Intune plans separate RBAC permissions for endpoint security workloads such as Antivirus, Firewall, Disk encryption and EDR. Intune and security admins should review custom roles; Learn shows the change only partly live."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Intune licensing says an Intune licence is required for any user or device that benefits from the service, and names Microsoft Intune Plan 1 as the base service. No licence specific to these permissions is published."
audiences: ["m365-admin","security"]
tags: ["intune","intune-rbac","endpoint-security","least-privilege","governance","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 498899"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498899"
    kind: "roadmap"
  - title: "Manage device security with endpoint security policies in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/endpoint-security/manage-policies"
    kind: "learn"
  - title: "Create a custom role in Intune"
    url: "https://learn.microsoft.com/intune/fundamentals/role-based-access-control/create-custom-role"
    kind: "learn"
  - title: "Assign Microsoft Intune roles for role-based access control"
    url: "https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role"
    kind: "learn"
  - title: "Create roleDefinition"
    url: "https://learn.microsoft.com/graph/api/intune-rbac-roledefinition-create?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create roleAssignment"
    url: "https://learn.microsoft.com/graph/api/intune-rbac-roleassignment-create?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft Intune licensing"
    url: "https://learn.microsoft.com/intune/fundamentals/licensing"
    kind: "learn"
  - title: "Deploy endpoint detection and response policy with Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/endpoint-security/deploy-edr"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which endpoint security permissions a custom Intune role grants"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Tenant administration > Roles > All roles > Create > Permissions"
      docs: "https://learn.microsoft.com/intune/fundamentals/role-based-access-control/create-custom-role"
    api:
      kind: "graph"
      call: "POST /v1.0/deviceManagement/roleDefinitions"
      docs: "https://learn.microsoft.com/graph/api/intune-rbac-roledefinition-create?view=graph-rest-1.0"
    note: "Requires the Intune Service Administrator role in Microsoft Entra ID. The request body sets rolePermissions. Creates a role; it does not change an existing one."
  - governs: "Which administrators hold a role and which users or devices they manage"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Tenant administration > Roles > All roles > role > Assignments > + Assign"
      docs: "https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role"
    api:
      kind: "graph"
      call: "POST /v1.0/deviceManagement/roleDefinitions/{roleDefinitionId}/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/intune-rbac-roleassignment-create?view=graph-rest-1.0"
    note: "The Admin Groups and Scope (Groups) pages of the assignment wizard set who receives the role and what they manage."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-10-01T23:01:01"
changes:
  - date: "2026-11-25"
    note: "First briefing. Learn shows the granular endpoint security permissions only partly in place, so the page reports both that and the roadmap's plan."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 48
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "a5688d2b115e7b2e0ceaf9b463516de8"
---

## What's changing

Microsoft plans to give each Intune endpoint security workload its own RBAC permission. The roadmap item says the *Security baselines* permission previously covered all security policies, and that every security workload now has its own permission set. Its title names Antivirus, Firewall, BitLocker and Endpoint Detection and Response (EDR).

Microsoft Learn describes a transition that is only partly complete. It says Intune is moving from the unified *Security baselines* permission to granular permissions for individual policy types. At the time of writing (November 2026), Learn lists *Application control for Business*, *Attack surface reduction* (most profiles) and *Endpoint detection and response* as granular permissions. It lists Antivirus, Account protection, Disk encryption and Firewall policies as still needing the *Security baselines* permission.

Learn also says a granular *Antivirus* permission might be temporarily visible in some tenants, is not released and is not supported, and that Intune ignores its configuration. Microsoft says it will announce availability in What's new in Microsoft Intune. The Learn page does not mention this roadmap item, so treat the roadmap's "now" as a plan until the Learn permission list changes.

The roadmap record gives status In development, with a target of November CY2025, release phase General Availability, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. That target date has passed and the record still says In development. The record lists Android, Desktop, iOS and Mac as platforms.

## Why it matters

Today a role that needs to edit firewall, antivirus or disk encryption policy needs the *Security baselines* permission, which Learn also describes as the permission for the other policies in that group. Separate permissions would let a service owner give the EDR team, the BitLocker team and the firewall team only their own workload. That supports least privilege, but only once the permission for a workload exists and your roles use it.

Microsoft has not stated what happens to existing custom roles when a workload gets its own permission. Plan for the change to arrive without a switch: review which roles hold *Security baselines* now, so that a new permission does not surprise you or leave a team without access.

## Risk assessment

**Data exposure**

- Learn says Antivirus, Disk encryption and Firewall policies need the *Security baselines* permission. A role created for baseline work therefore also reaches those policies. Review it in the custom role permissions (first controls row).
- Learn says the *View Reports* right for Device configurations also gives access to endpoint security policy reports, so report access is not governed only by the endpoint security permissions.

**Security & identity**

- Until Antivirus, Firewall and Disk encryption have a released granular permission, Learn documents no way to grant one of them without the *Security baselines* permission. Learn's *Antivirus* permission is unsupported and ignored, so ticking it grants nothing.
- Roles are assigned to Admin Groups, and Learn warns that every member of the group receives the role's permissions. Check group membership before assigning a role (second controls row).

**Autonomy & actions**

- No change documented: the permissions govern what administrators can do in the Intune admin center. The Defender portal's security settings management uses the same Intune RBAC permissions, according to Learn.

**Change & support**

- Microsoft has not stated whether existing roles gain, keep or lose access to a workload when its permission is split. Test with a non-production role before relying on it.
- Learn says role modifications might require dual administrator approval under Multi Admin Approval, depending on your governance settings, so permission clean-up can take longer.

## Cost and licensing

Microsoft Intune licensing states that an Intune licence is required for any user or device that benefits directly or indirectly from the Intune service, and names Microsoft Intune Plan 1 as the base service. The roadmap item and Learn name no licence, meter or price specific to these permissions.

The cost the sources show is admin time to review custom roles, re-test access and communicate changes to security teams. The EDR policy page lists Microsoft Intune Plan 1 and a Microsoft Defender for Endpoint licence among its prerequisites; the permission split does not change that.

## Scope

The permissions apply to Intune administrators and to the roles assigned to them, not to end users. Learn names three built-in roles with access to endpoint security workloads: Endpoint Security Manager, Help Desk Operator and Read Only Operator. Custom roles can include any Intune RBAC permission.

Creating, editing or assigning roles needs the Intune Service Administrator role in Microsoft Entra ID, according to Learn. Clouds and platforms are as the roadmap record lists them (Worldwide (Standard Multi-Tenant), GCC, GCC High, DoD; Android, Desktop, iOS and Mac). Rollout mechanics are not stated.

## Governance guidance

### Before rollout

- List every custom role that holds the *Security baselines* permission, and note which of Antivirus, Disk encryption, Firewall and Account protection policies each role actually manages.
- Check the permission list in the role editor (first controls row) for new granular permissions, and watch What's new in Microsoft Intune for the Antivirus announcement.
- Confirm with the security teams which of them need to edit EDR, Attack surface reduction or Application control policies, since Learn lists those as granular today.

### At rollout

- Create a test role with only the granular permission for one workload, assign it to a small Admin Group (second controls row) and confirm what it can and cannot open.
- Check the Admin Groups and Scope (Groups) on each assignment, because every member of an Admin Group receives the role's permissions.
- Tell administrators whose roles change that role edits may need a second administrator's approval if Multi Admin Approval is on.

### After rollout

- Re-read each custom role's permissions and remove *Security baselines* from roles that no longer need it for Antivirus, Disk encryption or Firewall policies.
- Re-check report access, since the *View Reports* right for Device configurations also opens endpoint security policy reports.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which endpoint security permissions a custom Intune role grants</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Intune Service Administrator role in Microsoft Entra ID. The request body sets rolePermissions. Creates a role; it does not change an existing one.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Tenant administration › Roles › All roles › Create › Permissions <a href="https://learn.microsoft.com/intune/fundamentals/role-based-access-control/create-custom-role" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/deviceManagement/roleDefinitions</code> <a href="https://learn.microsoft.com/graph/api/intune-rbac-roledefinition-create?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which administrators hold a role and which users or devices they manage</strong><br><small>Tenant</small><br><small class="controls__note">The Admin Groups and Scope (Groups) pages of the assignment wizard set who receives the role and what they manage.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Tenant administration › Roles › All roles › role › Assignments › + Assign <a href="https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/deviceManagement/roleDefinitions/{roleDefinitionId}/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/intune-rbac-roleassignment-create?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says a custom role needs the Intune Service Administrator role in Microsoft Entra ID to be created, edited or assigned. The permissions page of the role editor is where the *Endpoint Detection and Response*, *Attack Surface Reduction* and *Security baselines* permissions appear. At the time of writing, that page lists no Antivirus, Firewall or Disk encryption permission, which fits Learn's statement that those policies use *Security baselines*.

Two controls sit beside this change. Multi Admin Approval, when turned on, requires a second administrator to approve changes to role permissions, admin groups or member group assignments, according to Learn. The assignment's Admin Groups and Scope (Groups) decide who gets the role and which users or devices they manage. The Graph calls create the role definition (and its rolePermissions) and the assignment; they do not by themselves change what a role already holds.

## Open questions

- When will the granular Antivirus, Firewall and Disk encryption permissions be released, given the roadmap target of November CY2025 has passed? Watch What's new in Microsoft Intune and the roadmap item.
- Do existing custom roles and built-in roles that hold *Security baselines* automatically receive the new permissions, or does an administrator have to add them?
- Will the built-in Endpoint Security Manager, Help Desk Operator and Read Only Operator roles change when workloads get their own permissions?
- Does the Intune licensing apply unchanged, or will Microsoft publish anything specific to the new permissions?

<!-- rationale
risk: Medium. Learn says Antivirus, Disk encryption and Firewall policies still need the Security baselines permission, so roles built on it keep broad reach until separate permissions ship; the effect on existing roles is not stated.
cost: Low. The only cost the sources show is admin time to review roles; the Intune licence the tenant already needs applies, and no separate licence or meter for these permissions is published.
impact: Low. Only administrators who author or hold Intune roles notice the change; end users and devices are not affected by a permission split.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance: At rollout / role: Every member of an assigned Admin Group receives the role's permissions without qualification. | Found: If your tenant allows unlicensed admins, Intune role assignments only apply to direct members of the assigned security group. Members of nested groups do not receive these assignments by default. | Fix: Qualify both occurrences: 'Every direct member receives the role's permissions. If the tenant allows unlicensed admins, nested-group members do not receive the assignment by default; a nested-group user with an Intune licence does receive the role.' Cite https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role. | Source: https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing / licensing: Any user or device benefiting from Intune requires an Intune licence, without an administrator exception. | Found: Administrators can sign in to and manage Microsoft Intune without an assigned Intune license. This access is enabled by default for tenants created after July 2021 and applies to all administrator roles | Fix: Add to both the licensing notes and paragraph: 'Administrators can manage Intune without an assigned Intune licence when unlicensed admin access is enabled, which is the default for tenants created after July 2021. Older tenants can enable it; nested-group administrators still require an Intune licence.' Cite https://learn.microsoft.com/intune/fundamentals/licensing#unlicensed-admin-access. | Source: https://learn.microsoft.com/intune/fundamentals/licensing
- [unsupported, blocker] Cost and licensing / licensing: The permission split does not change the EDR licensing prerequisites. | Found: Searched: Intune granular RBAC permissions license price meter Plan 1; "498899" Intune RBAC rollout default licensing. Read licensing, manage-policies and deploy-edr prerequisites; checked roadmap. None states that the planned split preserves EDR licensing. | Fix: Remove '; the permission split does not change that'. Retain only the documented present EDR prerequisites.
- [unsupported, blocker] controls[1].api; controls[1].note; Governance controls table / command: The cited POST /v1.0/deviceManagement/roleDefinitions/{roleDefinitionId}/roleAssignments reference documents setting both administrator groups and managed users or devices. | Found: Searched: graph roleAssignment create Intune members resourceScopes deviceAndAppManagementRoleAssignment. Read generic and derived assignment create/resource references. The nested call documents resourceScopes, not members; derived create documents members at /roleAssignments. | Fix: Replace controls[1].api.call with 'POST /v1.0/deviceManagement/roleAssignments' and its docs with https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-create?view=graph-rest-1.0. Add to the note: 'Creates a deviceAndAppManagementRoleAssignment; the request body sets members for administrator security groups and resourceScopes for managed users or devices.' The existing generic roleAssignment reference documents resourceScopes but no members property.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope / role: Custom roles can include any Intune RBAC permission. | Found: These custom roles can include any Intune RBAC permission, allowing for refined admin access and support for the principle of least-privileged access within the organization. | Fix: Add https://learn.microsoft.com/intune/fundamentals/role-based-access-control/overview to sources for the statement that custom roles can include any Intune RBAC permission. | Source: https://learn.microsoft.com/intune/fundamentals/role-based-access-control/overview#rbac-roles
- [supported, minor] controls[0].note; Scope; Governance controls / role: Learn says the Microsoft Entra Intune Service Administrator role is needed to create, edit or assign custom roles. | Found: To create, edit, or assign roles, your account must have the following role in Microsoft Entra ID: Intune Service Administrator | Fix: Retain the attribution to the custom-role page, but add: 'The assignment page instead documents Intune Role Administrator as the least-privileged built-in role, or a custom role with Roles Assign/Create/Delete/Read/Update and Organization Read, for managing RBAC roles and assignments.' Cite https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role. Apply this qualification to the control note and repeated role requirement. | Source: https://learn.microsoft.com/intune/fundamentals/role-based-access-control/create-custom-role
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft Intune admin center > Tenant administration > Roles > All roles > Create > Permissions reaches custom-role permissions. | Found: choose Tenant administration > Roles > All roles > Create. ... On the Basics page, enter a name and description ... On the Permissions page, choose the permissions you want to use with this role. | Fix: Use the full route 'Tenant administration > Roles > All roles > Create > Basics > Permissions'. The omitted Basics page contains name and description fields, not a deciding policy or template choice. | Source: https://learn.microsoft.com/intune/fundamentals/role-based-access-control/create-custom-role
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Tenant administration > Roles > All roles > role > Assignments > + Assign is the route into the role assignment wizard. | Found: go to Tenant administration > Roles > All roles. ... Select the role you want to assign and then select Assignments > + Assign. ... On the Admin Groups page, select Add groups ... On the Scope (Groups) page, add groups | Fix: Extend the route to 'Tenant administration > Roles > All roles > role > Assignments > + Assign > Basics > Admin Groups > Add groups > group > Scope (Groups)'. The printed route is correct but stops at the wizard entrance rather than its administrator and scope controls. | Source: https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role
- [unsupported, minor] rationale: impact / behaviour: End users and devices are not affected by the permission split. | Found: Searched: Intune granular endpoint security RBAC permissions existing custom roles migration automatic default Security baselines Antivirus Firewall Disk encryption. Read roadmap and manage-policies. They describe administrative permissions, but do not promise no effect on end users or devices. | Fix: Remove 'end users and devices are not affected by a permission split' from the impact rationale. Keep the low-impact judgement focused on administrators who author or hold roles.
-->
