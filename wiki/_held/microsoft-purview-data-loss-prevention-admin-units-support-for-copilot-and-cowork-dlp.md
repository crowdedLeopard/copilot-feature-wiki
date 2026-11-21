---
title: "Microsoft Purview DLP: delegate Copilot and Cowork policies to administrative units"
slug: "microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp"
roadmapId: 575287
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP policies for Microsoft 365 Copilot, Copilot Chat and Cowork can be scoped to Entra administrative units and managed by regional or departmental admins. Existing tenant-wide policies keep applying; using units is optional."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists Microsoft Entra ID P1 or P2 plus a Purview subscription such as Microsoft 365 E5 as prerequisites for administrative units. The Copilot DLP page points to the Microsoft 365 licensing guidance. No price or meter specific to this feature is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","m365-copilot","copilot-chat","cowork","delegation","entra-id","administrative-units"]
sources:
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Administrative units in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/purview-admin-units"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 575287"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575287"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-loss-prevention-for-microsoft-cowork","purview-dlp-block-sensitive-data-in-copilot-web-search","microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi","sensitive-information-types"]
controls:
  - governs: "Which administrative units a Copilot, Copilot Chat and Cowork DLP policy is scoped to"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Admin units"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api: null
    note: "Preview and rolling out per Learn. Restricted administrators see only their assigned units; unrestricted administrators can keep Full directory."
  - governs: "Which administrative units a role-group member is assigned to"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Choose users > Assign admin units"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "Requires an account assigned the Role management role. Assigning units makes the member a restricted administrator."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-21"
    note: "New briefing: administrative unit scoping for Copilot, Copilot Chat and Cowork DLP policies, with its Purview portal paths and prerequisites."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 44
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "385c4a27db92946d6e4081dd14a32b5b"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) is adding administrative unit support to the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** policy location. An administrative unit is a subset of the Microsoft Entra directory, such as a region or department. A policy for Microsoft 365 Copilot, Copilot Chat or Cowork can now be scoped to one or more units, and the administrators assigned to those units can manage that policy without tenant-wide policy-management permissions.

Learn describes the setup. In the Microsoft Purview portal an administrator creates a **Custom** policy, selects the administrative units on the **Admin units** page, then selects the Copilot location and chooses the users and groups to include or exclude within those units. An administrator restricted to administrative units can select only their assigned units. An unrestricted administrator can scope a policy to units or keep **Full directory** to apply it across the organisation. Existing tenant-wide policies continue to apply, and using administrative units is optional.

Scoping follows the user who submits the prompt, not the owner of a file or email the experience reads. Learn's example: a policy scoped to a Finance unit applies to Finance users' Copilot and Cowork interactions even when they open content owned by someone outside Finance. DLP alerts and Activity explorer visibility follow the administrator's assigned units and permissions.

The roadmap item is In development, with a preview target of October CY2026 and a general availability target of November CY2026, both Microsoft's targets. Learn already describes the feature and marks it as in preview and rolling out, so the option might not yet be available in your tenant.

## Why it matters

This lets a global or multi-division organisation hand Copilot DLP policy ownership to regional or departmental compliance teams, instead of keeping every Copilot policy with a few tenant-wide administrators. It supports the regional, departmental and regulatory boundaries the roadmap item names.

Microsoft has not stated a default behaviour beyond saying that existing tenant-wide policies continue to apply and that unit scoping is optional. If nobody acts, the sources give no sign that existing policies change. The decision for service owners is who should hold restricted-administrator rights, because a restricted administrator's reach is set by role-group membership and unit assignment.

## Risk assessment

**Data exposure**
- A policy scoped to a unit applies to the users in that unit, based on who submits the prompt. Users outside every scoped unit are not covered by that policy, so keep a tenant-wide policy in place for baseline protection; Learn says tenant-wide policies continue to apply.
- Learn's example shows a Finance-scoped policy applying to Finance users even when they read content owned by others, so scope tracks the person, not the content owner.

**Security & identity**
- Restricted administrators are created by assigning administrative units to role-group members in the Microsoft Purview portal. Learn says administrators still need the DLP permissions required to create and manage policies, so the units narrow scope and do not grant DLP rights by themselves.
- Learn states that once units are assigned, restricted administrators cannot see or edit existing policies and cannot see historical alerts and Activity explorer data; these stay visible to unrestricted administrators. Expect support questions from newly restricted admins.

**Autonomy & actions**
- No change in autonomy: the feature governs who manages a DLP policy, not what Copilot or Cowork can do. The policy actions themselves, such as preventing Copilot from processing prompts, are unchanged.

**Change & support**
- The location is documented as in preview and rolling out, so the Admin units page may be missing in some tenants. Plan pilots, not production dependence, until Microsoft's status changes.
- Alerts and Activity explorer for a unit-scoped policy follow each administrator's assigned units, so incident handling needs an unrestricted administrator for cross-unit views.

## Cost and licensing

Microsoft's page for this feature does not name a licence of its own. The Copilot DLP page's Licensing section points to the Microsoft 365 Enterprise Plans page and the Microsoft 365 security and compliance licensing guidance.

The administrative units page lists these prerequisites before configuring units for Purview solutions: Microsoft Entra ID P1 or P2, and one of several Purview subscriptions, including Microsoft 365 E5/A5/G5, the E5/A5/G5/F5 Compliance or Security & Compliance add-ons, or E5/A5/G5/F5 Information Protection & Governance.

No meter, credit rate or separate charge for administrative-unit scoping of Copilot DLP is published at the time of writing (November 2026). Indirect cost is admin time: designing units in Microsoft Entra, assigning role-group members, and reviewing policies per unit.

## Scope

**Who and what is covered.** The Microsoft Copilot, Copilot Chat, and Copilot Cowork DLP policy location. Learn's policy reference states that the unit scoping also applies to Cowork, and that the location is only available in the **Custom** policy template.

**Roles.** Administrators who create or edit a DLP policy for this location need one of the roles or role groups Learn lists, such as Purview Data Security AI Admin, Purview Compliance Administrator, Purview Information Protection Admin, Purview Security Administrator, Microsoft Entra AI Admin or Microsoft Entra Global Admin. Assigning administrative units to role-group members requires the Role management role.

**Cloud and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant) and Web.

**Rollout.** The roadmap item is In development, with a preview target of October CY2026 and a general availability target of November CY2026. Learn says the support is in preview and rolling out, and might not yet be available in a tenant.

**Prerequisite.** Configure administrative units in Microsoft Entra ID and assign them to the appropriate Purview role-group members before creating a scoped policy.

## Governance guidance

### Before rollout
- Confirm the Microsoft Entra ID P1 or P2 and Purview licences listed on the administrative units page cover the administrators and users you plan to scope.
- Define the administrative units in Microsoft Entra ID (regions or departments) and agree who owns each.
- List existing tenant-wide Copilot DLP policies and decide which stay unit-free as your baseline.
- Name the unrestricted administrators who keep cross-unit visibility of policies, alerts and Activity explorer.

### At rollout
- Check whether the **Admin units** page appears when creating a Custom DLP policy with the Copilot location in your tenant, since Learn says rollout is in progress.
- Assign administrative units to role-group members with **Assign admin units**, using an account with the Role management role.
- Pilot one unit-scoped policy with a restricted administrator before delegating more.

### After rollout
- Review alerts and Activity explorer as both a restricted and an unrestricted administrator to confirm each sees only what you intended.
- Re-check the roadmap item and the Copilot DLP Learn page for changes to preview status and availability.
- Revisit unit membership when users change department, since scope follows the user who submits the prompt.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which administrative units a Copilot, Copilot Chat and Cowork DLP policy is scoped to</strong><br><small>Tenant</small><br><small class="controls__note">Preview and rolling out per Learn. Restricted administrators see only their assigned units; unrestricted administrators can keep Full directory.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Admin units <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which administrative units a role-group member is assigned to</strong><br><small>User</small><br><small class="controls__note">Requires an account assigned the Role management role. Assigning units makes the member a restricted administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Choose users › Assign admin units <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Administrative units narrow who manages a policy and who sees its alerts; they do not change what a Copilot DLP rule does. Restricted administrators still need the same DLP role or role group as unrestricted administrators. Learn states that once units are assigned to a role-group member, that administrator cannot see or edit existing policies or historical alerts, while unrestricted administrators still can.

The unit-scoping step is documented in the Purview portal only. Microsoft Learn documents no PowerShell parameter for it at the time of writing (November 2026): the New-DlpCompliancePolicy and Add-RoleGroupMember references list no administrative unit parameter. Where units are defined in Microsoft Entra ID is covered on the linked administrative units pages.

## Open questions

- When does administrative unit support for the Copilot DLP location leave preview, and will it match the roadmap's November CY2026 target? Watch the roadmap item and the Copilot DLP Learn page.
- Is any PowerShell or API equivalent planned for unit-scoped Copilot DLP policies? Watch the New-DlpCompliancePolicy reference.
- Does any licence beyond those listed for administrative units apply to this feature? Watch the Microsoft 365 security and compliance licensing guidance.
- Will Message center carry a notice for this item? None was supplied with the roadmap record.

<!-- rationale
risk: Low. Existing tenant-wide policies continue to apply and Learn says using administrative units is optional; the main exposure is mis-scoped delegation, covered by the existing role-group controls.
cost: Low. Learn lists Microsoft Entra ID P1 or P2 and a qualifying Purview subscription as prerequisites for administrative units; no separate meter for this feature is documented, so the known cost is licence checks and admin time.
impact: Low. Only Purview and Entra administrators see the change; users notice only if a newly scoped policy blocks or restricts their Copilot or Cowork interactions.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table and prose; Open questions / absence: No automation or PowerShell administrative-unit parameter is documented for scoping a Copilot DLP policy. | Found: The PolicyRBACScopes parameter specifies the administrative units to assign to the policy. A valid value is the Microsoft Entra ObjectID (GUID value) of the administrative unit. | Fix: Set controls[0].api to kind 'powershell', call 'New-DlpCompliancePolicy -Name <policy-name> -PolicyRBACScopes <administrative-unit-GUIDs>', docs 'https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy'. Replace the portal-only and missing-parameter prose with 'Security & Compliance PowerShell documents New-DlpCompliancePolicy -PolicyRBACScopes for assigning administrative units to a DLP policy; values are Entra object GUIDs, separated by commas.' Remove the open question asking whether any PowerShell equivalent is planned. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy
- [contradicted, blocker] Cost and licensing: second paragraph / licensing: The prerequisites include E5/A5/G5/F5 Compliance or Security & Compliance add-ons, and E5/A5/G5/F5 Information Protection & Governance. | Found: Microsoft 365 E5/A5/G5/F5 Compliance or F5 Security & Compliance; Microsoft 365 E5/A5/G5/F5 Information Protection & Governance | Fix: Replace 'the E5/A5/G5/F5 Compliance or Security & Compliance add-ons, or E5/A5/G5/F5 Information Protection & Governance' with 'Microsoft 365 E5/A5/G5/F5 Compliance or F5 Security & Compliance, or Microsoft 365 E5/A5/G5/F5 Information Protection & Governance'. Security & Compliance is listed specifically as F5, not E5/A5/G5/F5. | Source: https://learn.microsoft.com/purview/purview-admin-units
- [contradicted, blocker] Why it matters; controls[1].note; Risk assessment: Security & identity / role: Assigning units makes a member restricted, with effective reach determined by Purview role-group membership and unit assignment. | Found: If you assign both an Entra role and a scoped Microsoft Purview role group assignment ... the Entra role takes precedence at runtime. As a result, the user's effective permissions are unscoped | Fix: Qualify the categorical assignment and reach statements, including controls[1].note, with: 'For overlapping capabilities, an Entra role takes precedence over a scoped Purview role-group assignment and leaves effective access unscoped.' Replace the last clause in Why it matters with 'because effective reach depends on Purview role-group membership, unit assignment and any overriding Entra role.' Cite https://learn.microsoft.com/purview/purview-permissions. | Source: https://learn.microsoft.com/purview/purview-permissions
- [unsupported, major] Risk assessment: Autonomy & actions; Governance controls / behaviour: The new unit-scoping feature leaves Copilot DLP rule actions unchanged. | Found: Searched: Copilot administrative unit DLP default optional existing policies unchanged actions. Opened Copilot DLP learn-about, purview-admin-units and dlp-policy-reference; sources describe scoping and continued existing policies, not an explicit guarantee that rule actions are unchanged. | Fix: Remove 'The policy actions themselves, such as preventing Copilot from processing prompts, are unchanged' and 'they do not change what a Copilot DLP rule does'. Keep the documented description that administrative units narrow policy management and investigation scope.
- [contradicted, blocker] Why it matters: second paragraph / absence: Microsoft has not stated default behaviour beyond existing tenant-wide policies continuing and scoping being optional. | Found: Unrestricted administrators don't have to select administrative units as part of the policy configuration. They can keep the default of the entire directory or select one or more administrative units. | Fix: Replace the first sentence of the second paragraph in Why it matters with 'Using administrative units is optional; unrestricted administrators can keep the default of the entire directory, and existing tenant-wide policies continue to apply.' This agrees with admin-opt-in without asserting an undocumented default gap. | Source: https://learn.microsoft.com/purview/purview-admin-units
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Role-group member unit assignment is at Settings > Roles and scopes > Role groups > role group > Edit > Choose users > Assign admin units. | Found: On Edit members of the role group, select Choose users or Choose groups. ... Select Select. ... select the users or groups and select Assign admin units. | Fix: The printed labels are correct but omit the intermediate member-selection sequence. Keep the path and add to its note: 'After Choose users, select the users, select Select, then select those members and choose Assign admin units.' | Source: https://learn.microsoft.com/purview/purview-permissions
- [contradicted, minor] Governance guidance versus Governance controls / consistency: Every control the governance checklist tells administrators to configure or review has a controls-table row. | Found: Define the administrative units in Microsoft Entra ID ... Review alerts and Activity explorer ... Revisit unit membership ... Table rows cover policy scoping and role-group member assignment only. | Fix: The checklist's Entra unit creation/membership and alerts/Activity explorer review steps have no matching table rows. To keep the correction within existing rows, remove those three checklist bullets rather than add new controls.
-->
