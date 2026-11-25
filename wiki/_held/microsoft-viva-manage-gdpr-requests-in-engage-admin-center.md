---
title: "Viva Engage: handle GDPR deletion requests in the Engage admin center"
slug: "microsoft-viva-manage-gdpr-requests-in-engage-admin-center"
roadmapId: 496147
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Admins can process GDPR data subject deletion requests for Viva Engage users in the Engage admin center rather than the legacy Yammer admin center. No user-facing change; update DSR runbooks and check who holds the Engage admin roles."
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
      path: "Governance and compliance > Data management > Manage GDPR data subject requests"
      docs: "https://learn.microsoft.com/viva/engage/manage-viva-engage-users/add-block-or-remove-users"
    api:
      kind: "rest"
      call: "DELETE https://www.yammer.com/api/v1/users/:user_id.json"
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
    note: "Assign at least as Privileged Role Administrator. The role is listed as Yammer administrator in Microsoft Entra ID."
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
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 71
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "fda6e2f8df84a6f526244ff0909a7065"
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

Data subject requests carry legal deadlines, and the Engage part of them is easy to get wrong: Learn warns that closing a Microsoft Entra ID account doesn't delete the user's Engage information, and that once a user is erased you can't find their data to delete it. Moving the step into the Engage admin center changes where the runbook points, not the order of work, so DSR procedures written against the Yammer admin center need updating.

The module puts irreversible, organisation-wide deletions one screen away from anyone holding the Network admin, Verified admin or Engage admin role. If nobody acts, the module is there for those roles to use, and the real control is who holds them.

## Risk assessment

**Data exposure**
- **Erase this user** leaves messages and files in place, marked as belonging to a former user after 14 days. If the export and review are not done inside that window, the content can no longer be tied to the user for deletion.
- Files stored in SharePoint must be deleted from Viva Engage to remove both the file and its Viva Engage metadata.

**Security & identity**
- Learn's module page names Network admins among the roles that can use it, while the GDPR guidance page says Verified admins can erase users. Check who holds each role before relying on either; the controls table lists where they are assigned.
- Erasing a user in Viva Engage does not delete their Office 365 or Microsoft Entra profile, so the Entra deletion remains a separate step.

**Autonomy & actions**
- No change: the module acts only when an admin selects an option and **Remove user**.

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
<tr><td data-label="Control"><strong>Removing or erasing a Viva Engage user for a GDPR data subject request</strong><br><small>User</small><br><small class="controls__note">The gdpr_delete=true query parameter submits a GDPR deletion request; caller must be an admin or a verified admin. Irreversible.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Governance and compliance › Data management › Manage GDPR data subject requests <a href="https://learn.microsoft.com/viva/engage/manage-viva-engage-users/add-block-or-remove-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>DELETE https://www.yammer.com/api/v1/users/:user_id.json</code> <a href="https://learn.microsoft.com/rest/api/yammer/users_id_delete" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Engage Administrator (Yammer administrator) role</strong><br><small>Tenant</small><br><small class="controls__note">Assign at least as Privileged Role Administrator. The role is listed as Yammer administrator in Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Viva Engage Verified Admin role</strong><br><small>Tenant</small><br><small class="controls__note">Assigned by an Engage admin or verified admin. The Yammer Data Export API reads the admin list but does not assign the role.</small></td><td data-label="Admin UI"><strong>Yammer admin center</strong><br>Admins › Current Admins › user › Grant Verified Admin <a href="https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Viva Engage Network Admin role</strong><br><small>Tenant</small><br><small class="controls__note">Assigned by an Engage admin, network admin or verified admin.</small></td><td data-label="Admin UI"><strong>Yammer admin center</strong><br>Admins › Current Admins › user › Grant Network Admin <a href="https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The removal options are irreversible, so who holds the Engage Administrator, Verified admin and Network admin roles is the main control. Learn's pages differ on which of these roles may erase users: the module page names all three, the GDPR guidance page names Verified admins, and the REST reference requires an admin or a verified admin. The Engage Administrator role is assigned in Microsoft Entra ID; Verified and Network admin roles are assigned in the Yammer admin center. The REST deletion call is an alternative to the admin center module that Microsoft cautions against for routine lifecycle work, as it can cause unrecoverable data loss.

## Open questions

- Will the GDPR removal options be withdrawn from the legacy Yammer admin center, and when? Watch Message center and the Viva Engage admin documentation.
- Which admin roles can use the new module: does it include Network admins, as its Learn page says, or only Verified and Engage admins, as the GDPR guidance page implies?
- Does the module record each removal in the Microsoft Purview audit log as well as the Viva Engage Inbox notification?
- Why does the roadmap record still show In development for June CY2025 when Learn documents the module as available?

<!-- rationale
risk: Low. The module does nothing until an Engage, Verified or Network admin selects a removal option, but those options cannot be reversed, so the exposure is who holds those roles.
cost: None. Microsoft's Viva Engage roles page says Global and Engage administrators need no Viva Engage Core or premium licence to use the Engage admin center.
impact: Low. Only Viva Engage administrators who handle data subject requests notice; end users see no change.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] summary; Risk assessment: Autonomy & actions; rationale: impact / behaviour: The change introduces no user-facing change and changes only what administrators notice. | Found: Searched: Viva Engage admin center GDPR user change. Opened the module, GDPR guidance and Office 365 DSR pages; none states that the migration leaves every user-facing behavior unchanged. | Fix: Remove 'No user-facing change' from the summary, 'No change:' from Autonomy & actions, and 'end users see no change' from the impact rationale. Keep the advice about updating the administrator runbook.
- [contradicted, blocker] controls[0].api; Governance controls: REST row / command: DELETE https://www.yammer.com/api/v1/users/:user_id.json is the call for the row's GDPR removal or erasure operation. | Found: No parameter — suspends the user. The user may reactivate through the website if they retain access to a company email address. gdpr_delete=true — submits a GDPR deletion request. | Fix: Replace controls[0].api.call and its rendered table cell with 'DELETE https://www.yammer.com/api/v1/users/:user_id.json?gdpr_delete=true'. Keep the note explaining GDPR erasure; the deciding query parameter must be in the call rather than leaving the published call to execute suspension. | Source: https://learn.microsoft.com/rest/api/yammer/users_id_delete
- [unsupported, major] Governance controls: opening sentence; rationale: risk / behaviour: All of the module's removal options are irreversible. | Found: Searched: "Permanently remove this user, but retain their messages" "undo". Read module, GDPR guidance and REST deletion reference; the module labels the second option irreversible and erasure irreversible after 14 days, but does not state that for every option. | Fix: Replace 'The removal options are irreversible' with 'Removing a user and their messages cannot be reversed, and Erase this user cannot be undone after 14 days'. In the risk rationale replace 'those options cannot be reversed' with the same specific qualification. Do not assert that the first option is reversible or irreversible.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; What's changing; Governance guidance: Before rollout / admin-path: The GDPR control is reached in the Viva Engage admin center through Governance and compliance > Data management > Manage GDPR data subject requests. | Found: Go to the Viva Engage Admin Center. Select Governance and compliance > Data management. Check the options for Manage GDPR data subject requests. | Fix: Extend controls[0].ui.path to 'Governance and compliance > Data management > Manage GDPR data subject requests > removal option'. The existing path reaches the correct module but stops before selecting the removal control. | Source: https://learn.microsoft.com/viva/engage/manage-viva-engage-users/add-block-or-remove-users
- [supported, minor] Why it matters: legal deadlines / behaviour: Data subject requests carry legal response deadlines. | Found: Record the date and time of the request. (You have one month to complete the request.) | Fix: Cite https://learn.microsoft.com/compliance/regulatory/gdpr-dsr-dynamics365#how-this-guide-can-help-you-meet-your-controller-responsibilities for the statement that data subject requests carry deadlines. No numeric deadline needs to be added. | Source: https://learn.microsoft.com/compliance/regulatory/gdpr-dsr-dynamics365#how-this-guide-can-help-you-meet-your-controller-responsibilities
- [supported, minor] controls[1].api; Governance controls: Graph row / command: POST /v1.0/roleManagement/directory/roleAssignments creates a directory role assignment at tenant scope. | Found: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments; "roleDefinitionId": "c2cf284d-6c41-4e6b-afac-4b80928c9034", "principalId": "f8ca5a85-489a-49a0-b555-0a6d81e56f0d", "directoryScopeId": "/" | Fix: Add to controls[1].note and the rendered row note: 'The request body sets roleDefinitionId to the Yammer Administrator role definition, principalId to the assignee, and directoryScopeId to / for tenant scope.' Keep the existing method and path. | Source: https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments
-->
