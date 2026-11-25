---
title: "Power Platform admin center: unified System Administrator user and role management for finance and operations apps"
slug: "microsoft-power-platform-governance-and-administration-unify-finance-and-operations-system"
roadmapId: 581777
topic: "power-platform"
products: ["Microsoft Power Platform governance and administration","Dynamics 365 Finance and Operations cross-app"]
summary: "Microsoft plans general availability in January CY2027 of managing System Administrator users and roles for finance and operations apps and Dataverse in one place. Admins using the preview should plan for the new source of truth."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn says a licence is required to create or install any finance and operations app in the Power Platform admin center. The page for this feature lists versions and the System Administrator role as prerequisites and names no separate licence or meter."
audiences: ["power-platform-admin","service-owner","security"]
tags: ["power-platform-admin-center","security-roles","finance-and-operations","dataverse","dynamics-365","identity","governance"]
sources:
  - title: "Manage Finance and Operations environment admin users in Power Platform admin center (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/unified-experience/unified-admin-user-management"
    kind: "learn"
  - title: "Overview of unified admin experience for finance and operations apps"
    url: "https://learn.microsoft.com/power-platform/admin/unified-experience/finance-operations-apps-overview"
    kind: "learn"
  - title: "Assign a security role to a user"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Work with Microsoft Entra ID group teams"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Feature management overview"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/get-started/feature-management/feature-management-overview"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 581777"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581777"
    kind: "roadmap"
videos: []
related: ["security-roles"]
controls:
  - governs: "Whether unified admin user management is turned on for the environment"
    scope: "environment"
    ui:
      surface: "Finance and Operations app"
      path: "System administration > Workspace > Feature management > All > (Preview) Unified admin user management"
      docs: "https://learn.microsoft.com/power-platform/admin/unified-experience/unified-admin-user-management"
    api:
      kind: "other"
      call: "Import the Feature management data entity with the Enabled field set to Yes"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/get-started/feature-management/feature-management-overview"
    note: "Needs System Administrator in both Dataverse and finance and operations. The data entity updates only existing features; Learn does not say it covers this feature."
  - governs: "Which Dataverse security roles, including System Administrator, a user holds"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST /api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "Minimum privileges are Read and Assign on the Security Role table. The unified page says System Administrator changes made in the admin center or Dataverse synchronise to finance and operations."
  - governs: "Whether an Owner team holds System Administrator, and so grants admin access to its members"
    scope: "other"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users and permissions > Teams > team > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/unified-experience/unified-admin-user-management"
    api:
      kind: "rest"
      call: "POST /api/data/v9.0/teams(azureactivedirectoryobjectid=<group team ID>,membershiptype=0)/teamroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "The page supports only teams with Team type Owner in preview. The printed call is for Microsoft Entra ID group teams."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-25"
    note: "First briefing for this roadmap item: documents the preview behaviour on Learn, the three role controls and what is not yet published for general availability."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 70
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "c79ddb18c67224969a0be05434860116"
---

## What's changing

The roadmap item says administrators can manage System Administrator users and security roles for both finance and operations apps and Dataverse from one experience in the Power Platform admin center. Today they switch between the finance and operations Users and Security configuration pages and the Dataverse user and role pages. The item lists adding and enabling users, assigning and removing roles, and reviewing user access across both. It describes a generally available release that follows a public preview.

The roadmap status is In development with a target of January CY2027, for Worldwide (Standard Multi-Tenant) on the Web platform. The description is worded as if the capability is available now, but the status is In development, so treat the date as a target.

Microsoft Learn documents the preview as **Manage Finance and Operations environment admin users in Power Platform admin center (preview)**. It says that after you turn on unified admin user management, the Power Platform admin center becomes the authoritative source, admin users and role assignments are maintained in Dataverse, and updates are synchronised to finance and operations. The documented scenarios are System Administrator users (including users who inherit the role through teams) and Environment Admin, also called provisioning admin, management. Any changes to System Administrator users must then be made in Dataverse, and corresponding changes in finance and operations are blocked.

The preview page does not describe other security roles, so anything the general availability release adds beyond System Administrator and Environment Admin rests on the roadmap's wording alone.

## Why it matters

This moves who controls administrator access to finance and operations. Once the feature is on, a System Administrator assignment made in the Power Platform admin center or in Dataverse gives the user System Administrator access in finance and operations, so the people and processes that manage Dataverse roles now also decide who administers your ERP. Review those assignments and the teams behind them before anyone turns the feature on.

Microsoft has not stated what happens on arrival at general availability, so no source says existing behaviour changes for tenants that do nothing. The preview page describes a System Administrator turning the feature on in the finance and operations app. The sharper consequence is for tenants that do turn it on: admin roles that exist only in finance and operations are removed to prevent role drift.

## Risk assessment

**Data exposure**

- Dataverse becomes the master for System Administrator users. Role assignments made directly or through Owner teams in Dataverse synchronise to finance and operations, where the user receives System Administrator access. Anyone who can assign roles in Dataverse can therefore grant administrator access to ERP data. Microsoft's role assignment page says the minimum privileges are Read and Assign on the Security Role table, and an assigner cannot grant a role with more privileges than they hold.

**Security & identity**

- Admin roles that exist only in finance and operations, and not in Dataverse, are removed once the feature is on. Synchronisation does not remove the users themselves. Audit which finance and operations administrators have no matching Dataverse assignment before enabling it.
- Adding a user to an Owner team that holds System Administrator grants admin access, and removing the role from the team removes access for members who do not hold it directly. Team changes synchronise asynchronously, so access can lag a change.
- Each finance and operations environment has one Environment Admin (provisioning admin). The page says the user ID Admin always represents it.

**Autonomy & actions**

- The page describes synchronisation as automatic once the feature is on. It describes no agent or autonomous action, and no approval step for synchronised changes.

**Change & support**

- The page advises making changes to the Environment Admin role only during planned downtime, to avoid disrupting active batch jobs or running processes.
- A known issue: if you delete the current provisioning admin or revoke System Administrator in Dataverse while the environment has fewer than three admins, the change might not be reflected in finance and operations. Two statements on the page differ on removing the Environment Admin role: one says another System Administrator must exist, the other says at least three.
- Preview limits apply: non-owner teams are not supported in public preview, and the feature runs only on the versions listed under Scope.

## Cost and licensing

**Licence.** Microsoft Learn says a licence is required to create or install any finance and operations app in the Power Platform admin center (overview of the unified admin experience). The page for this feature lists versions and the System Administrator role as prerequisites and names no separate licence, so this briefing treats the feature as part of that licensed experience.

**Meter.** Microsoft Learn publishes no meter or separate charge for unified admin user management at the time of writing (November 2026). The roadmap item says nothing about price.

**Indirect costs.** Admin time to reconcile roles between the two systems, and planned downtime for Environment Admin changes. A licence or prerequisite specific to the general availability release is not yet published.

## Scope

**Roadmap record.** Worldwide (Standard Multi-Tenant), Web platform, release phase General Availability, status In development, target January CY2027. The record lists no other cloud.

**Preview prerequisites on Learn.** Environments running Platform Update 72 (PU72), version 7.0.7996.61 or later, and Unified User Management Solution version 9.3.3445.2 or later. To update the solution, go to Environment > Resources > Dynamics apps or Applications, search for Unified User Management, and select Update if the status shows Update available. Prerequisites for general availability are not yet published.

**Who can turn it on.** A user with the System Administrator role in both Dataverse and finance and operations turns on the feature in the finance and operations app. The role assignment page tells admins to sign in to the Power Platform admin center as a System Administrator.

**What is covered.** System Administrator users, users who inherit the role through Owner-type teams, and Environment Admin management. Teams of other types are not supported in public preview.

## Governance guidance

### Before rollout

- List users who hold System Administrator in finance and operations but not in Dataverse, because those roles are removed when the feature is turned on; the service owner for each environment does this.
- Check each environment against the preview prerequisites (PU72 7.0.7996.61 or later, Unified User Management Solution 9.3.3445.2 or later) and update the solution from Dynamics apps if it shows Update available.
- Confirm each environment has at least three System Administrators before anyone changes the provisioning admin, as the page's note and known issue advise.
- Decide which Dataverse roles may assign System Administrator, using the Read and Assign privileges on the Security Role table (see the user role row below).

### At rollout

- Turn on (Preview) Unified admin user management in Feature management, as a user with System Administrator in both Dataverse and finance and operations; try it in a non-production environment first.
- Verify that Dataverse environment admins appear in the finance and operations app, which is the check the page gives.
- Schedule any Environment Admin change in planned downtime.
- Create admin teams with Team type Owner, since other team types are not supported in preview.

### After rollout

- Make System Administrator changes in the Power Platform admin center or Dataverse, because corresponding changes in finance and operations are blocked.
- Review System Administrator assignments for users and Owner teams on a regular schedule, using the user and team rows below.
- Watch the Learn page and Message center for the general availability release, and re-check prerequisites and defaults against it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether unified admin user management is turned on for the environment</strong><br><small>Environment</small><br><small class="controls__note">Needs System Administrator in both Dataverse and finance and operations. The data entity updates only existing features; Learn does not say it covers this feature.</small></td><td data-label="Admin UI"><strong>Finance and Operations app</strong><br>System administration › Workspace › Feature management › All › (Preview) Unified admin user management <a href="https://learn.microsoft.com/power-platform/admin/unified-experience/unified-admin-user-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Import the Feature management data entity with the Enabled field set to Yes</code> <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/get-started/feature-management/feature-management-overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Dataverse security roles, including System Administrator, a user holds</strong><br><small>User</small><br><small class="controls__note">Minimum privileges are Read and Assign on the Security Role table. The unified page says System Administrator changes made in the admin center or Dataverse synchronise to finance and operations.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an Owner team holds System Administrator, and so grants admin access to its members</strong><br><small class="controls__note">The page supports only teams with Team type Owner in preview. The printed call is for Microsoft Entra ID group teams.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users and permissions › Teams › team › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/unified-experience/unified-admin-user-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /api/data/v9.0/teams(azureactivedirectoryobjectid=&lt;group team ID&gt;,membershiptype=0)/teamroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roles that apply are those the pages state: System Administrator in both Dataverse and finance and operations to turn the feature on, and Read and Assign on the Security Role table (or System Administrator) to assign roles. The two Learn pages label the same Manage security roles action differently in places (Manage roles on the unified page), so follow the labels in the admin centre you see.

The finance and operations app also has a Make Environment Admin action on its Users page; the unified page describes it for choosing the provisioning admin but does not give a navigation path to that page.

The Feature management data entity is documented as exporting and importing feature settings and as updating only existing features; Microsoft does not say whether it covers this feature. The Web API call printed for teams is documented for Microsoft Entra ID group teams, while the preview supports Owner teams, so confirm the call for Owner teams before scripting it.

## Open questions

- What will the default state be at general availability, and will the feature need turning on in Feature management as it does in preview? Microsoft has not stated this; watch the Learn page and Message center.
- Will general availability cover security roles other than System Administrator and Environment Admin, as the roadmap's wording suggests? The preview page documents only those two scenarios.
- Which rule governs removing the Environment Admin role: another System Administrator, or at least three? Two statements on the preview page differ.
- Will teams other than Owner-type teams be supported at general availability?
- Is a licence or meter specific to this release published later? None is published for the preview page at the time of writing.

<!-- rationale
risk: Medium. Once the feature is turned on, Power Platform admin center becomes the source of truth and admin roles held only in finance and operations are removed, so unplanned role loss is the main exposure.
cost: Low. The preview page names no licence or meter for this feature, so the known cost is admin time and planned downtime; a licence is required to create or install finance and operations apps at all.
impact: Low. Only administrators who hold System Administrator or Environment Admin access in finance and operations environments notice the change; end users see nothing documented.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / role: Anyone who can assign roles in Dataverse can therefore grant administrator access to ERP data. | Found: the person who is assigning the security role can't assign someone else to a security role that has more privileges than the assigner. For example, a CSR Manager can't assign another user to the System Administrator role. | Fix: Replace that sentence with: 'Anyone authorized to assign the Dataverse System Administrator role can therefore grant System Administrator access in finance and operations.' Permission to assign less privileged roles is not sufficient; keep the following privilege-elevation restriction and its existing citation. | Source: https://learn.microsoft.com/power-platform/admin/assign-security-roles
- [contradicted, blocker] controls[2].api; Governance controls table / command: The Entra group-team alternate-key POST is the automation equivalent for assigning System Administrator to a supported Owner-type team. | Found: A team can be one of the following types: Owner, Access, Microsoft Entra Security group, or Microsoft Entra Office group. | Fix: Replace controls[2].api.call with 'POST /api/data/v9.2/teams(<team ID>)/teamroles_association/$ref' and docs with https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/team. Replace the group-team caveat in the note and prose with: 'Target the Dataverse ID of a Team type Owner team. The request body's @odata.id identifies the /api/data/v9.2/roles(<role ID>) record for System Administrator.' Cite https://learn.microsoft.com/power-apps/developer/data-platform/webapi/associate-disassociate-entities-using-web-api for the collection POST and @odata.id syntax. The team reference read in this run documents /api/data/v9.2/teams, teamid, and the role-valued teamroles_association collection. | Source: https://learn.microsoft.com/power-platform/admin/manage-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Preview prerequisites; Governance guidance: Before rollout / admin-path: Update the solution through Environment > Resources > Dynamics apps or Applications, find Unified User Management, and select Update when Update available appears. | Found: To update the solution, go to Environment > Resources > Dynamics apps or Applications, search for Unified User Management, and select Update if the status shows Update available. | Fix: Give the complete route: 'In Power Platform admin center, go to Manage > Environments > environment > Resources > Dynamics 365 apps, find Unified User Management, and select Update if Update available appears.' Cite https://learn.microsoft.com/power-platform/admin/manage-apps alongside the existing preview page; it supplies the route to the selected environment and app list. | Source: https://learn.microsoft.com/power-platform/admin/unified-experience/unified-admin-user-management
- [supported, minor] controls[0].note; Governance controls prose and table / applicability: Learn does not say whether the Feature management data entity covers this feature. | Found: A data entity with the name Feature management lets you export the Feature management settings from one environment and then import them into another environment. This entity updates only existing features. | Fix: Replace 'Learn does not say it covers this feature' and the matching prose caveat with: 'The data entity imports Feature management settings for existing features and applies the same rules as the Feature management workspace.' The preview page places this feature in that workspace; retain the existing reference. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/get-started/feature-management/feature-management-overview
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The user-role path is Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles. | Found: Select Users + permissions, and then select Users. ... On the Users page select a user, and then select Manage security roles. ... Select or deselect security roles. | Fix: The route reaches the correct role-management page. Complete it as 'Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles > security role' and clarify in the row note: 'These steps manage direct user role assignments; team-inherited roles are managed through the team.' | Source: https://learn.microsoft.com/power-platform/admin/assign-security-roles
- [supported, minor] controls[1].api; Governance controls table / command: POST /api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref assigns a security role to a user. | Found: POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref { "@odata.id":"[Organization URI]/api/data/v9.0/roles(<role ID>)" } | Fix: Keep the printed call. Add to controls[1].note: 'The request body's @odata.id identifies the roles(<role ID>) record to assign.' The deterministic pre-check's missing-command lead is not confirmed: the exact endpoint is present in the cited reference. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The Owner-team role path is Manage > Environments > environment > Settings > Users and permissions > Teams > team > Manage security roles. | Found: Select the three dots next to the team that has the System Administrator role. ... Select Manage security roles. ... Scroll to System Administrator and then check or clear the System Administrator selection. | Fix: Complete the path as 'Manage > Environments > environment > Settings > Users and permissions > Teams > team > Manage security roles > System Administrator'. Omitting the unlabelled three-dots button is not a blocker. | Source: https://learn.microsoft.com/power-platform/admin/unified-experience/unified-admin-user-management
- [supported, minor] front matter: licensing.model; Cost and licensing / licensing: The feature is treated as included in the finance and operations app's already-licensed admin experience. | Found: When you purchase a license for any finance and operations app, such as Dynamics 365 Finance or Dynamics 365 Supply Chain Management ... A license is required to create or install any finance and operations app in the Power Platform admin center. | Fix: Keep model 'included', but name the product-level entitlement in licensing.notes and the Licence paragraph: 'The unified admin experience requires a licence for the applicable finance and operations app, such as Dynamics 365 Finance or Dynamics 365 Supply Chain Management. The preview feature page publishes no separate feature licence.' Retain the overview citation. | Source: https://learn.microsoft.com/power-platform/admin/unified-experience/finance-operations-apps-overview
- [contradicted, minor] front matter: risk; rationale: risk / consistency: The medium risk rationale rates role loss after enabling the control rather than today's behaviour continuing with its GA default unknown. | Found: defaultState: "unknown"; risk: "medium"; rationale: 'Once the feature is turned on ... admin roles held only in finance and operations are removed'. The scale requires a new control with an unstated default to be rated on today's behaviour continuing. | Fix: Set risk to 'low' and replace its rationale with: 'Low. The general availability default is not stated, so this rating assumes today's behaviour continues. Enabling the documented preview removes admin roles held only in finance and operations; reconcile assignments before opting in.' Keep the existing detailed discussion of opt-in role-loss risk.
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls / consistency: The checklist names solution updates, provisioning-admin changes and Owner-team creation, but the table has no rows for those operations. | Found: Checklist: 'update the solution', 'Schedule any Environment Admin change', 'Create admin teams with Team type Owner'. Table: enable unified management, assign user roles, assign team roles. | Fix: The solution-update, Environment Admin change and Create admin teams checklist steps have no corresponding controls rows. To correct without adding rows, remove these operation-specific checklist steps; retain their already-documented prerequisite and downtime information in Scope and Risk assessment.
-->
