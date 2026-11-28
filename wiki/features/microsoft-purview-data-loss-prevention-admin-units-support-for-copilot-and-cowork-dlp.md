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
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy-name> -PolicyRBACScopes <administrative-unit-GUIDs>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Preview and rolling out per Learn. Restricted administrators see only their assigned units; unrestricted administrators can keep Full directory."
  - governs: "Which administrative units a role-group member is assigned to"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users > Assign admin units"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "Requires the Role management role. Units make the member a restricted administrator; for overlapping capabilities an Entra role takes precedence and leaves access unscoped."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-21"
    note: "New briefing: administrative unit scoping for Copilot, Copilot Chat and Cowork DLP policies, with its Purview portal paths and prerequisites."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: added the New-DlpCompliancePolicy -PolicyRBACScopes call, fixed the Purview licence list, qualified Entra role precedence and removed unsupported statements."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: restricted administrators' alert visibility now follows their assigned units; role-group unit assignment path now includes the Edit members of the role group step."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "dc99c3f6ee21dee5b66697c7e214a574"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) is adding administrative unit support to the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** policy location. An administrative unit is a subset of the Microsoft Entra directory, such as a region or department. A policy for Microsoft 365 Copilot, Copilot Chat or Cowork can now be scoped to one or more units, and the administrators assigned to those units can manage that policy without tenant-wide policy-management permissions.

Learn describes the setup. In the Microsoft Purview portal an administrator creates a **Custom** policy, selects the administrative units on the **Admin units** page, then selects the Copilot location and chooses the users and groups to include or exclude within those units. An administrator restricted to administrative units can select only their assigned units. An unrestricted administrator can scope a policy to units or keep **Full directory** to apply it across the organisation. Existing tenant-wide policies continue to apply, and using administrative units is optional.

Scoping follows the user who submits the prompt, not the owner of a file or email the experience reads. Learn's example: a policy scoped to a Finance unit applies to Finance users' Copilot and Cowork interactions even when they open content owned by someone outside Finance. DLP alerts and Activity explorer visibility follow the administrator's assigned units and permissions.

The roadmap item is In development, with a preview target of October CY2026 and a general availability target of November CY2026, both Microsoft's targets. Learn already describes the feature and marks it as in preview and rolling out, so the option might not yet be available in your tenant.

## Why it matters

This lets a global or multi-division organisation hand Copilot DLP policy ownership to regional or departmental compliance teams, instead of keeping every Copilot policy with a few tenant-wide administrators. It supports the regional, departmental and regulatory boundaries the roadmap item names.

Using administrative units is optional; unrestricted administrators can keep the default of the entire directory, and existing tenant-wide policies continue to apply. If nobody acts, the sources give no sign that existing policies change. The decision for service owners is who should hold restricted-administrator rights, because effective reach depends on Purview role-group membership, unit assignment and any overriding Entra role.

## Risk assessment

**Data exposure**
- A policy scoped to a unit applies to the users in that unit, based on who submits the prompt. Users outside every scoped unit are not covered by that policy, so keep a tenant-wide policy in place for baseline protection; Learn says tenant-wide policies continue to apply.
- Learn's example shows a Finance-scoped policy applying to Finance users even when they read content owned by others, so scope tracks the person, not the content owner.

**Security & identity**
- Restricted administrators are created by assigning administrative units to role-group members in the Microsoft Purview portal. Learn says administrators still need the DLP permissions required to create and manage policies, so the units narrow scope and do not grant DLP rights by themselves. For overlapping capabilities, an Entra role takes precedence over a scoped Purview role-group assignment and leaves effective access unscoped.
- Learn states that once units are assigned, restricted administrators cannot see or edit existing policies and cannot see historical alerts and Activity explorer data; these stay visible to unrestricted administrators. Expect support questions from newly restricted admins.

**Autonomy & actions**
- Administrative units narrow who manages a policy and whose alerts and Activity explorer data an administrator can investigate.

**Change & support**
- The location is documented as in preview and rolling out, so the Admin units page may be missing in some tenants. Plan pilots, not production dependence, until Microsoft's status changes.
- Alerts and Activity explorer visibility follow each administrator's assigned units and permissions; use an unrestricted administrator for organisation-wide incident views.

## Cost and licensing

Microsoft's page for this feature does not name a licence of its own. The Copilot DLP page's Licensing section points to the Microsoft 365 Enterprise Plans page and the Microsoft 365 security and compliance licensing guidance.

The administrative units page lists these prerequisites before configuring units for Purview solutions: Microsoft Entra ID P1 or P2, and one of several Purview subscriptions, including Microsoft 365 E5/A5/G5, Microsoft 365 E5/A5/G5/F5 Compliance or F5 Security & Compliance, or Microsoft 365 E5/A5/G5/F5 Information Protection & Governance.

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
- List existing tenant-wide Copilot DLP policies and decide which stay unit-free as your baseline.
- Name the unrestricted administrators who keep organisation-wide visibility of policies, alerts and Activity explorer.

### At rollout
- Check whether the **Admin units** page appears when creating a Custom DLP policy with the Copilot location in your tenant, since Learn says rollout is in progress.
- Assign administrative units to role-group members with **Assign admin units**, using an account with the Role management role.
- Pilot one unit-scoped policy with a restricted administrator before delegating more.

### After rollout
- Re-check the roadmap item and the Copilot DLP Learn page for changes to preview status and availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which administrative units a Copilot, Copilot Chat and Cowork DLP policy is scoped to</strong><br><small>Tenant</small><br><small class="controls__note">Preview and rolling out per Learn. Restricted administrators see only their assigned units; unrestricted administrators can keep Full directory.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Admin units <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy-name&gt; -PolicyRBACScopes &lt;administrative-unit-GUIDs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which administrative units a role-group member is assigned to</strong><br><small>User</small><br><small class="controls__note">Requires the Role management role. Units make the member a restricted administrator; for overlapping capabilities an Entra role takes precedence and leaves access unscoped.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Edit members of the role group › Choose users › Assign admin units <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Administrative units narrow who manages a policy and who sees its alerts. Restricted administrators still need the same DLP role or role group as unrestricted administrators. Learn states that once units are assigned to a role-group member, that administrator cannot see or edit existing policies or historical alerts, while unrestricted administrators still can.

Security & Compliance PowerShell documents New-DlpCompliancePolicy -PolicyRBACScopes for assigning administrative units to a DLP policy; values are Entra object GUIDs, separated by commas. Where units are defined in Microsoft Entra ID is covered on the linked administrative units pages.

## Open questions

- When does administrative unit support for the Copilot DLP location leave preview, and will it match the roadmap's November CY2026 target? Watch the roadmap item and the Copilot DLP Learn page.
- Does any licence beyond those listed for administrative units apply to this feature? Watch the Microsoft 365 security and compliance licensing guidance.
- Will Message center carry a notice for this item? None was supplied with the roadmap record.

<!-- rationale
risk: Low. Existing tenant-wide policies continue to apply and Learn says using administrative units is optional; the main exposure is mis-scoped delegation, covered by the existing role-group controls.
cost: Low. Learn lists Microsoft Entra ID P1 or P2 and a qualifying Purview subscription as prerequisites for administrative units; no separate meter for this feature is documented, so the known cost is licence checks and admin time.
impact: Low. Only Purview and Entra administrators see the change; users notice only if a newly scoped policy blocks or restricts their Copilot or Cowork interactions.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The unit-assignment route is Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users > Assign admin units. | Found: On Role groups for Microsoft Purview solutions, select a Microsoft Purview role group you want to add users to. Select Edit on the control bar. ... On Edit members of the role group, select Choose users or Choose groups. | Fix: In controls[1].ui and the rendered table, include the omitted heading: 'Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users > Assign admin units'. The cited permissions page documents this heading. | Source: https://learn.microsoft.com/purview/purview-permissions
-->
