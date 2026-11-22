---
title: "Microsoft Purview: view-only role management for Global Reader and Security Reader"
slug: "microsoft-purview-view-only-role-management-enhancements"
roadmapId: 566529
topic: "governance"
products: ["Microsoft Purview"]
summary: "A new view-only role management role lets Global Reader and Security Reader see member assignments in Purview and Defender. It is launched; no admin action is stated, but plan who gains this visibility."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Purview permissions page names no licence among its requirements, and no page read describes a licence or meter for this role."
audiences: ["m365-admin","security","compliance"]
tags: ["purview","entra-id","least-privilege","admin-controls","governance","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 566529"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566529"
    kind: "roadmap"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview"
    url: "https://learn.microsoft.com/defender-office-365/scc-permissions"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with","microsoft-purview-permissions-audit-log-improvements","microsoft-purview-permissions-audit-log-improvements-us-government"]
controls:
  - governs: "Who holds Global Reader and Security Reader, the roles the new view-only role is added to"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Requires at least Privileged Role Administrator. The request body names the role and principal; select Global Reader or Security Reader as the role."
  - governs: "Who can manage Purview role group membership (members of role groups holding the Role Management role)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The signed-in admin needs the Role Management role. The portal page also offers Choose groups. Role Management is an existing role, not the new view-only role."
  - governs: "Switch to grant or withhold the new view-only role separately from Global Reader and Security Reader"
    scope: "tenant"
    ui: null
    api: null
    note: "No separate setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: the view-only role management role, its Launched status and what Learn does and does not yet document."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 36 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 34
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "21370d66c8f875fa769f713f5029f94b"
---

## What's changing

Microsoft Purview is adding a new view-only role management role. The roadmap item says it gives admins permission "to see all the member assignments in Purview and Defender portal", and that it will be added to Global Reader and Security Reader in Purview and Entra.

Today, Microsoft Learn says that to view **Role groups** in the Purview portal's **Roles and scopes** area, a user needs to be a global administrator or to hold the *Role Management* role, which "allows users to view, create, and modify role groups". The roadmap does not say that this is the gap the new role closes, so treat that link as the wiki's reading. At the time of writing (November 2026), neither the Purview permissions page nor the roles and role groups page lists a role with the new role's name, so how it appears in the portal is not yet documented.

The roadmap record gives the status as Launched, the release phase as General Availability, the target date as July CY2026, the platform as Web, and the clouds as Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. No Message Center post was supplied for this item.

## Why it matters

Role assignments show who holds privileged access, so visibility of them is itself sensitive. Microsoft says the Global Reader Entra role can "view all settings and administrative information across Microsoft 365", and that Security Reader members have read-only access to many security features. Adding a role that lists role group members extends what those two roles can see, without changing what they can change.

Microsoft has not stated whether tenants must do anything for the role to take effect, so no source says existing behaviour changes for administrators who do not act. The practical decision is who you are content to let see the full list of role assignments, and whether your Global Reader and Security Reader membership is as short as it should be.

## Risk assessment

**Data exposure**
- Holders of Global Reader and Security Reader gain the ability to see member assignments in Purview and Defender, according to the roadmap. That reveals which accounts hold which Purview role groups, a useful map for anyone planning targeted access to compliance or security data.

**Security & identity**
- The role is described as view-only, so the roadmap gives no sign that it can change assignments. Managing role group membership stays with the *Role Management* role, which Learn says manages "role group membership and create or delete custom role groups".
- Where an account holds both an Entra role and a scoped Purview role group assignment, Microsoft says the Entra role takes precedence at runtime and the effective permissions are unscoped. Check whether administrative unit scoping is relied on for anyone who also holds Global Reader or Security Reader.

**Autonomy & actions**
- No change: the roadmap describes a read-only role, and nothing in it acts on its own.

**Change & support**
- Microsoft has not said whether the role appears as a separately named role in the Purview portal, so help desk and audit documentation that lists roles may need checking once it does.

## Cost and licensing

Microsoft has not published a licence requirement or meter for this role. The Purview permissions page read for this briefing names no licence among its requirements, and the roadmap item names none. The role is delivered through Global Reader and Security Reader, so the licensing question that matters is the one already attached to your existing use of those roles in Purview and Entra.

The only cost the sources show is indirect: admin time to review who holds Global Reader and Security Reader, and to update role documentation. A licence or price for this specific role is not yet published.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, the Web platform and General Availability, with the status Launched and a target of July CY2026.

The roadmap says the role is added to Global Reader and Security Reader in Purview and Entra, and that it covers the Purview and Defender portals. Learn's Purview permissions page maps the Entra roles Global Reader and Security Reader to Purview role groups of the same names, which is where the addition would show. Learn lists the Role Management role as held by the Organization Management and Purview Administrators role groups on the roles and role groups page, while the Purview permissions page says it is assigned only to Organization Management; the two pages disagree and both are reported here.

## Governance guidance

### Before rollout
- Review who holds Global Reader and Security Reader in the Microsoft Entra admin center, and remove accounts that no longer need read access to every setting.
- Identify who holds the Role Management role through the Organization Management and Purview Administrators role groups, so you know who can already manage role group membership.
- Agree with your security and compliance leads whether visibility of all role assignments is acceptable for every Global Reader and Security Reader holder.

### At rollout
- Confirm in the Purview portal under Settings > Roles and scopes > Role groups whether Global Reader and Security Reader members can now see member assignments, and record what you observe.
- Tell help desk and audit teams that read-only administrators may see role group membership.

### After rollout
- Re-check the Global Reader and Security Reader role groups on the Learn roles page for a listed role covering role management, and update your internal role documentation.
- Include the role group membership lists in your regular access review.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds Global Reader and Security Reader, the roles the new view-only role is added to</strong><br><small>Tenant</small><br><small class="controls__note">Requires at least Privileged Role Administrator. The request body names the role and principal; select Global Reader or Security Reader as the role.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can manage Purview role group membership (members of role groups holding the Role Management role)</strong><br><small>Tenant</small><br><small class="controls__note">The signed-in admin needs the Role Management role. The portal page also offers Choose groups. Role Management is an existing role, not the new view-only role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to grant or withhold the new view-only role separately from Global Reader and Security Reader</strong><br><small>Tenant</small><br><small class="controls__note">No separate setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting is documented that turns the new role on or off separately, or that removes it from Global Reader or Security Reader. Control comes from who you assign to those two roles in Entra, and from who holds the Role Management role in Purview.

The Purview permissions page says an admin account assigned the *Role management* role is needed to add users to a role group in the portal. The Entra assignment row needs at least Privileged Role Administrator, per the Entra page.

## Open questions

- What is the new role called in the Purview and Defender portals, and which role groups list it? Watch the Learn roles and role groups page and the roadmap item.
- Does the role take effect for every Global Reader and Security Reader member automatically, or does a tenant need to enable it? Microsoft has not stated the default.
- Does the role show members of Entra roles, scoped assignments and administrative-unit assignments, or only Purview role group members?
- Is any licence or meter attached to the role? None is published at the time of writing (November 2026).

<!-- rationale
risk: Low. The role is read-only and goes to roles that already read settings across Microsoft 365; the exposure is wider visibility of who holds which role, not a change to anyone's permissions.
cost: Low. The only cost the sources show is admin time to review who holds Global Reader and Security Reader; no licence or meter for this role is stated, so licensing is not yet published.
impact: Low. Only administrators who hold Global Reader or Security Reader, and the admins who manage those assignments, notice the change; end users do not.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] rationale: risk; What's changing; Why it matters / consistency: The risk rationale says the change is not a change to anyone's permissions, although the body says the new role grants permission to see assignments and extends what the reader roles can see. | Found: the exposure is wider visibility of who holds which role, not a change to anyone's permissions. ... Adding a role that lists role group members extends what those two roles can see, without changing what they can change. | Fix: In the risk rationale, replace 'not a change to anyone's permissions' with 'not a grant of permission to change assignments'. The change adds read permission; it is not documented as adding write permission.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; controls[0].note; Governance controls table / command: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments assigns the chosen Entra role to a principal at tenant scope. | Found: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments { "@odata.type": "#microsoft.graph.unifiedRoleAssignment", "principalId": "<Object ID of user or group>", "roleDefinitionId": "<ID of role definition>", "directoryScopeId": "/" } | Fix: Keep the endpoint. Replace 'The request body names the role and principal; select Global Reader or Security Reader as the role' with 'The request body sets roleDefinitionId to the Global Reader or Security Reader role definition ID and principalId to the assignee object ID; directoryScopeId is / for tenant scope.' | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance / admin-path: The Purview role group membership control is at Settings > Roles and scopes > Role groups > role group > Edit > Choose users. | Found: On **Role groups for Microsoft Purview solutions**, select a Microsoft Purview role group you want to add users to. Select **Edit** on the control bar. 4. On **Edit members of the role group**, select **Choose users** or **Choose groups**. | Fix: Include the omitted page headings in controls[1].ui.path and the rendered table: 'Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users'. The printed steps are correct and in order. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] front matter: licensing; Cost and licensing; Open questions / licensing: The licensing model is unknown because no licence specific to this new role has been published. | Found: appropriate subscription licenses are required for use of each online service. ... Any user benefiting from the service requires a license. ... Users with a Purview role assigned for use in the Microsoft Purview portal. | Fix: Set licensing.model to 'included' for an option within existing Purview licensing. Replace the notes with 'Existing Purview subscription requirements apply: Microsoft lists users assigned a Purview role for use in the portal among users who need a licence. A licence or meter specific to this new role is not yet published.' Add the cited Microsoft Purview service description to sources and give the same qualification in Cost and licensing. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [contradicted, minor] front matter: action; Why it matters / consistency: The action rating is prepare even though the briefing says the default is unknown and no source says existing behaviour changes for administrators who do not act. | Found: action: "prepare" ... Microsoft has not stated whether tenants must do anything for the role to take effect, so no source says existing behaviour changes for administrators who do not act. | Fix: Set action to 'review'. The assessment scale places a new capability with unknown default and no stated change to existing behaviour in review; retain the advice to assess reader-role membership.
-->
