---
title: "Viva Engage: handle GDPR deletion requests in the Engage admin center"
slug: "microsoft-viva-manage-gdpr-requests-in-engage-admin-center"
roadmapId: 496147
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Admins can process GDPR data subject deletion requests for Viva Engage users in the Engage admin center rather than the legacy Yammer admin center. Update DSR runbooks and check who holds the Engage admin roles."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2025"
previewDate: null
risk: "low"
cost: "none"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Viva Engage roles page says Global administrators and Engage administrators don't require a Viva Engage Core or premium licence to access the Engage admin center. Nothing licence-specific to this module is published."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["viva-engage","privacy","data-subject-requests","admin-center","entra-id"]
sources:
  - title: "Microsoft 365 Roadmap 496147"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=496147"
    kind: "roadmap"
  - title: "Manage GDPR data subject requests for Viva Engage users"
    url: "https://learn.microsoft.com/viva/engage/manage-viva-engage-users/add-block-or-remove-users"
    kind: "learn"
  - title: "Manage GDPR data subject requests in Viva Engage Enterprise"
    url: "https://learn.microsoft.com/viva/engage/manage-security-and-compliance/gdpr-requests-in-viva-engage-enterprise"
    kind: "learn"
  - title: "Office 365 Data Subject Requests for the GDPR and CCPA"
    url: "https://learn.microsoft.com/compliance/regulatory/gdpr-dsr-office365"
    kind: "learn"
  - title: "Dynamics 365 and Power Platform Data Subject Requests for the GDPR and CCPA"
    url: "https://learn.microsoft.com/compliance/regulatory/gdpr-dsr-dynamics365#how-this-guide-can-help-you-meet-your-controller-responsibilities"
    kind: "learn"
  - title: "Manage administrator roles in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions"
    kind: "learn"
  - title: "Roles across Microsoft services"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/m365-workload-docs"
    kind: "learn"
  - title: "/users/[:id].json - Delete"
    url: "https://learn.microsoft.com/rest/api/yammer/users_id_delete"
    kind: "docs"
  - title: "Who holds the Engage Administrator (Yammer administrator) role (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Who holds the Engage Administrator (Yammer administrator) role (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Removing or erasing a Viva Engage user for a GDPR data subject request"
    scope: "user"
    ui:
      surface: "Viva Engage admin center"
      path: "Governance and compliance > Data management > Manage GDPR data subject requests > removal option"
      docs: "https://learn.microsoft.com/viva/engage/manage-viva-engage-users/add-block-or-remove-users"
    api:
      kind: "rest"
      call: "DELETE https://www.yammer.com/api/v1/users/:user_id.json?gdpr_delete=true"
      docs: "https://learn.microsoft.com/rest/api/yammer/users_id_delete"
    note: "The gdpr_delete=true query parameter submits a GDPR deletion request; caller must be an admin or a verified admin. Irreversible."
  - governs: "Who holds the Engage Administrator (Yammer administrator) role"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    note: "Assign at least as Privileged Role Administrator. The role is listed as Yammer administrator in Microsoft Entra ID. The request body sets roleDefinitionId, principalId and directoryScopeId (/ for tenant-wide scope)."
  - governs: "Who holds the Viva Engage Verified Admin role"
    scope: "tenant"
    ui:
      surface: "Yammer admin center"
      path: "Admins > Current Admins > user > Grant Verified Admin"
      docs: "https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions"
    api: null
    note: "Assigned by an Engage admin or verified admin. The Yammer Data Export API reads the admin list but does not assign the role."
  - governs: "Who holds the Viva Engage Network Admin role"
    scope: "tenant"
    ui:
      surface: "Yammer admin center"
      path: "Admins > Current Admins > user > Grant Network Admin"
      docs: "https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions"
    api: null
    note: "Assigned by an Engage admin, network admin or verified admin."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-06-05T23:00:34"
changes:
  - date: "2026-11-25"
    note: "New briefing: GDPR deletion requests in the Viva Engage admin center, with the module's path, its REST equivalent and the admin roles that can use it."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 74 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: the REST row now gives the gdpr_delete=true call; irreversibility narrowed to the two options Learn names; removed the unsupported 'no user-facing change'; cited a source for request deadlines."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 79 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 73
  unconfirmed: 2
  contradicted: 4
  attempts: 2
  hash: "b9ba75b0792c077021621fa3c712cb0b"
---

## What's changing

Viva Engage administrators can process General Data Protection Regulation (GDPR) deletion requests in the Viva Engage admin center. The roadmap item describes this as reducing reliance on the legacy Yammer admin center and centralising compliance actions in one interface.

Microsoft Learn already documents a **Manage GDPR data subject requests** module under **Governance and compliance > Data management** in the Viva Engage admin center, usable by Network admins, Verified admins and Engage admins. It offers three options, each confirmed with **Remove user**:

- **Permanently remove this user, but retain their messages**.
- **Permanently remove this user, and remove their messages**, which Learn says you can't reverse.
- **Erase this user**, which wipes the user's name and personal information but leaves their messages. It deactivates the user for 14 days so the admin can evaluate files and messages before the user is permanently deleted, and can't be undone after 14 days.

All three remove the user's follows, bookmarks, settings, account activity, profile, group memberships, org chart and network list. The first two keep the user's name in Viva Engage's stored data; **Erase this user** also removes it. The Learn page describes the module as available to those admin roles and lists no step to switch it on.

The roadmap record lists the item as In development, targeted for June CY2025, for Worldwide (Standard Multi-Tenant) on the web, at General Availability. Learn documents the module as available, so the record and Learn differ on status.

## Why it matters

Data subject requests carry [deadlines](https://learn.microsoft.com/compliance/regulatory/gdpr-dsr-dynamics365#how-this-guide-can-help-you-meet-your-controller-responsibilities), and the Engage part of them is easy to get wrong: Learn warns that closing a Microsoft Entra ID account doesn't delete the user's Engage information, and that once a user is erased you can't find their data to delete it. Moving the step into the Engage admin center changes where the runbook points, not the order of work, so DSR procedures written against the Yammer admin center need updating.

The module puts irreversible, organisation-wide deletions one screen away from anyone holding the Network admin, Verified admin or Engage admin role. If nobody acts, the module is there for those roles to use, and the real control is who holds them.

## Risk assessment

**Data exposure**
- **Erase this user** leaves messages and files in place, marked as belonging to a former user after 14 days. If the export and review are not done inside that window, the content can no longer be tied to the user for deletion.
- Files stored in SharePoint must be deleted from Viva Engage to remove both the file and its Viva Engage metadata.

**Security & identity**
- Learn's module page names Network admins among the roles that can use it, while the GDPR guidance page says Verified admins can erase users. Check who holds each role before relying on either; the controls table lists where they are assigned.
- Erasing a user in Viva Engage does not delete their Office 365 or Microsoft Entra profile, so the Entra deletion remains a separate step.

**Autonomy & actions**
- The module acts only when an admin selects an option and **Remove user**.

**Change & support**
- Two of the three options cannot be undone (one immediately, one after 14 days). Removing a user from the home tenant removes them from all external tenants, but guests must be removed from each external tenant separately.

## Cost and licensing

The [Viva Engage roles page](https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions) says a Viva Engage licence isn't required for an admin to configure Viva Engage, and that Global administrators and Engage administrators don't require a Viva Engage Core or premium licence to access the Engage admin center. The module's own Learn page names admin roles and no licence or meter, and nothing licence-specific to it is published at the time of writing (November 2026). The indirect cost is admin time to rewrite DSR runbooks and run the per-user exports Microsoft's guidance asks for.

## Scope

- **Who can use it:** Network admins, Verified admins and Engage admins, per the module's Learn page. The Engage Administrator role is called Yammer administrator in Microsoft Entra ID.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Platform:** Web.
- **Prerequisite for the review options:** a per-user export for the home tenant and each external tenant before erasing, as the [GDPR guidance page](https://learn.microsoft.com/viva/engage/manage-security-and-compliance/gdpr-requests-in-viva-engage-enterprise) sets out.

## Governance guidance

### Before rollout
- List who holds the Engage Administrator (Yammer administrator) role in Microsoft Entra ID and the Verified and Network admin roles in Viva Engage, and remove holders who should not run irreversible deletions.
- Rewrite the Viva Engage step of the DSR runbook to point at Governance and compliance > Data management in the Viva Engage admin center.
- Record in the runbook which of the three options applies to which kind of request, following the order Microsoft's GDPR guidance page sets.

### At rollout
- Run the per-user export for the home tenant and each external tenant before selecting any removal option.
- Delete files stored in SharePoint from Viva Engage itself, so the Viva Engage metadata goes with them.
- Delete the user's Microsoft Entra account as a separate step, since erasing in Viva Engage leaves it in place.

### After rollout
- Watch the Viva Engage Inbox of network and verified admins for the notification sent when Erase User is used, and match each one to a logged request.
- Diarise the 14-day window after each erase and finish message and file deletion inside it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Removing or erasing a Viva Engage user for a GDPR data subject request</strong><br><small>User</small><br><small class="controls__note">The gdpr_delete=true query parameter submits a GDPR deletion request; caller must be an admin or a verified admin. Irreversible.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Governance and compliance › Data management › Manage GDPR data subject requests › removal option <a href="https://learn.microsoft.com/viva/engage/manage-viva-engage-users/add-block-or-remove-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>DELETE https://www.yammer.com/api/v1/users/:user_id.json?gdpr_delete=true</code> <a href="https://learn.microsoft.com/rest/api/yammer/users_id_delete" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Engage Administrator (Yammer administrator) role</strong><br><small>Tenant</small><br><small class="controls__note">Assign at least as Privileged Role Administrator. The role is listed as Yammer administrator in Microsoft Entra ID. The request body sets roleDefinitionId, principalId and directoryScopeId (/ for tenant-wide scope).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Viva Engage Verified Admin role</strong><br><small>Tenant</small><br><small class="controls__note">Assigned by an Engage admin or verified admin. The Yammer Data Export API reads the admin list but does not assign the role.</small></td><td data-label="Admin UI"><strong>Yammer admin center</strong><br>Admins › Current Admins › user › Grant Verified Admin <a href="https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Viva Engage Network Admin role</strong><br><small>Tenant</small><br><small class="controls__note">Assigned by an Engage admin, network admin or verified admin.</small></td><td data-label="Admin UI"><strong>Yammer admin center</strong><br>Admins › Current Admins › user › Grant Network Admin <a href="https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Removing a user and their messages cannot be reversed, and Erase this user cannot be undone after 14 days, so who holds the Engage Administrator, Verified admin and Network admin roles is the main control. Learn's pages differ on which of these roles may erase users: the module page names all three, the GDPR guidance page names Verified admins, and the REST reference requires an admin or a verified admin. The Engage Administrator role is assigned in Microsoft Entra ID; Verified and Network admin roles are assigned in the Yammer admin center. The REST deletion call is an alternative to the admin center module that Microsoft cautions against for routine lifecycle work, as it can cause unrecoverable data loss.

## Open questions

- Will the GDPR removal options be withdrawn from the legacy Yammer admin center, and when? Watch Message center and the Viva Engage admin documentation.
- Which admin roles can use the new module: does it include Network admins, as its Learn page says, or only Verified and Engage admins, as the GDPR guidance page implies?
- Does the module record each removal in the Microsoft Purview audit log as well as the Viva Engage Inbox notification?
- Why does the roadmap record still show In development for June CY2025 when Learn documents the module as available?

<!-- rationale
risk: Low. The module does nothing until an Engage, Verified or Network admin selects a removal option, but removing a user and their messages cannot be reversed, and Erase this user cannot be undone after 14 days, so the exposure is who holds those roles.
cost: None. Microsoft's Viva Engage roles page says Global and Engage administrators need no Viva Engage Core or premium licence to use the Engage admin center.
impact: Low. The change is to an admin centre module used by Viva Engage administrators who handle data subject requests.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].api; Governance controls / absence: Microsoft has not documented automation for assigning the Viva Engage Verified Admin role. | Found: Viva Engage supports role-based access by enabling the assignment of predefined administrative roles (such as Network Administrator and Verified Administrator) ... Assign a Viva Engage role to a user: POST /employeeExperience/roles/{engagementRoleId}/members. | Fix: Set controls[2].api to kind 'graph', call 'POST /v1.0/employeeExperience/roles/{engagementRoleId}/members', docs 'https://learn.microsoft.com/graph/api/engagementrole-post-members?view=graph-rest-1.0'. Add to its note: 'For native-mode networks, use the Verified Administrator engagementRoleId; the request identifies the assignee through user@odata.bind. Requires EngagementRole.ReadWrite.All.' Update the rendered API cell and cite the operation reference and https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0. | Source: https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0
- [contradicted, blocker] controls[3].api; Governance controls / absence: Microsoft has not documented automation for assigning the Viva Engage Network Admin role. | Found: Viva Engage supports role-based access by enabling the assignment of predefined administrative roles (such as Network Administrator and Verified Administrator) ... Assign a Viva Engage role to a user: POST /employeeExperience/roles/{engagementRoleId}/members. | Fix: Set controls[3].api to kind 'graph', call 'POST /v1.0/employeeExperience/roles/{engagementRoleId}/members', docs 'https://learn.microsoft.com/graph/api/engagementrole-post-members?view=graph-rest-1.0'. Add to its note: 'For native-mode networks, use the Network Administrator engagementRoleId; the request identifies the assignee through user@odata.bind. Requires EngagementRole.ReadWrite.All.' Update the rendered API cell and cite the operation reference and https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0. | Source: https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0
- [unsupported, blocker] front matter: defaultState; Why it matters / default: The module is on by default on arrival, without an administrator taking action. | Found: Searched: 'Viva Engage Manage GDPR data subject requests module enable disable license price meter'; read the roadmap, Manage GDPR data subject requests for Viva Engage users, and Overview of the Viva Engage admin center. Availability is stated, but automatic rollout/default state is not. | Fix: Set defaultState to 'unknown'. Replace 'If nobody acts, the module is there for those roles to use' with 'Microsoft documents access for these roles but does not state the module's default or rollout mechanics.' Do not infer the default from the absence of an enablement step.
- [unsupported, blocker] front matter: cost; rationale: cost / cost: The cost rating is none under the standard's requirement for documented inclusion in licences already held. | Found: Searched: 'Viva Engage GDPR requests licensing meter' and 'Viva Engage Manage GDPR data subject requests module enable disable license price meter'; read GDPR module, admin roles and Core licensing pages. Admin licence exemption is stated, not module inclusion or a no-charge assertion. | Fix: Set cost to 'low'. Replace the cost rationale with 'Low. The known indirect cost is administrator time to update DSR runbooks and perform exports. Microsoft's roles page says Global and Engage administrators need no Viva Engage Core or premium licence to access the Engage admin center.'
- [contradicted, blocker] controls[0].note; Governance controls / role: The REST deletion caller must be an admin or verified admin, without a network qualification. | Found: 403 Forbidden | The authenticated caller does not have permission to delete the user (must be an admin, or a verified admin in a paid network). | Fix: Replace the caller clause in controls[0].note and the rendered note with 'The reference's response table requires an admin, or a verified admin in a paid network; its introductory text says admin or verified admin in a Viva Engage network.' Use the same qualified wording in the Governance controls paragraph. | Source: https://learn.microsoft.com/rest/api/yammer/users_id_delete
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls / admin-path: The Verified Admin assignment route is Yammer admin center > Admins > Current Admins > user > Grant Verified Admin. | Found: If the user is already an admin, find their name from the Current Admins list and select Grant Verified Admin. | Fix: Keep the path, but add 'This Current Admins route is for a user who is already an admin' to controls[2].note and the rendered note. The cited roles page gives a different initial step for a non-admin. | Source: https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions
- [supported, minor] controls[3].ui; Governance controls / admin-path: The Network Admin assignment route is Yammer admin center > Admins > Current Admins > user > Grant Network Admin. | Found: If the user is already an admin, find their name from the Current Admins list and select Grant Network Admin. | Fix: Keep the path, but add 'This Current Admins route is for a user who is already an admin' to controls[3].note and the rendered note. The cited roles page gives a different initial step for a non-admin. | Source: https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The governance checklist's per-user export operation has no corresponding control row. | Found: Run the per-user export for the home tenant and each external tenant before selecting any removal option. The controls table covers user removal and three administrator role assignments, not exports. | Fix: The 'Run the per-user export for the home tenant and each external tenant' checklist step has no controls-table row. Remove that checklist bullet while retaining the already documented export prerequisite in Scope; this correction does not add a control row.
-->
