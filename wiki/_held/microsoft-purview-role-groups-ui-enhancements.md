---
title: "Microsoft Purview: look up permissions by role and membership on the Role groups page"
slug: "microsoft-purview-role-groups-ui-enhancements"
roadmapId: 562033
topic: "governance"
products: ["Microsoft Purview"]
summary: "The Purview portal's Role groups page now lets admins look up permissions by roles and memberships. It is launched; the roadmap states no admin action, but check who can open the page."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: []
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description says any user benefiting from the service requires a licence and lists users with a Purview role assigned for use in the portal as an example. Nothing specific to this change is published."
audiences: ["m365-admin","security","compliance"]
tags: ["purview","role-groups","least-privilege","admin-controls","governance","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 562033"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562033"
    kind: "roadmap"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-view-only-role-management-enhancements","microsoft-purview-compliance-portal-admin-assignment-time-limit","microsoft-purview-permissions-audit-log-improvements"]
controls:
  - governs: "Who can open and edit Role groups (members of Organization Management, which holds Role Management)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The signed-in admin needs the Role Management role. Global administrators can also view Role groups. Security groups are supported only in Microsoft 365 commercial cloud organisations. This controls access to the page, not the lookup."
  - governs: "A separate setting to turn the Role groups lookup on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-10T22:43:02"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: the Role groups lookup by roles and memberships, its Launched status, and what Learn does and does not yet document."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 40 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 38
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "35ccfdfef12155bcd9420d88f78950ef"
---

## What's changing

The Role groups page in the Microsoft Purview portal now lets admins look up permissions by roles and memberships, according to the roadmap item. The record gives no more detail than that one sentence, so what the lookup shows and how an admin opens it are not described here.

Microsoft Learn does not describe this lookup at the time of writing (November 2026). It does describe the model behind the page: a role grants permissions to perform a set of tasks, a role group is a set of roles, and members are assigned to role groups. How the new lookup relates to that model is not described.

The roadmap record gives the status as Launched, with a preview target of June CY2026 and a general availability target of July CY2026. The release phases are General Availability and Preview, and the clouds are Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The record lists no platforms and no more-info link, and no Message Center post was supplied for this item.

## Why it matters

Role group membership shows who holds privileged access to compliance and security data, so a faster way to see which roles a person has, or which people hold a role, is useful for access reviews. It also means the people who can open the page matter more.

Microsoft has not stated what happens on arrival or whether tenants must do anything, so no source says existing behaviour changes for administrators who do nothing. The practical decision is whether the set of people who can open Role groups is as small as it should be.

## Risk assessment

**Data exposure**
- The lookup shows role and membership information, which reveals who holds which Purview permissions. Learn says viewing Role groups in the Roles and scopes area needs global administrator or the *Role Management* role, so the existing gate is the main control. Whether the lookup has any further requirement is not described.

**Security & identity**
- Learn says the *Role Management* role "allows users to view, create, and modify role groups", so anyone who can open the page through that role can also change membership. Keep that role's holders to the people who should edit role groups, not only read them.

**Autonomy & actions**
- No change: the roadmap describes a lookup, and nothing in it acts on its own.

**Change & support**
- Help desk and audit runbooks that describe how to find a person's permissions may need updating once admins see the new lookup. Learn does not yet describe its screens.

## Cost and licensing

The Microsoft Purview service description says "Any user benefiting from the service requires a license" and lists users with a Purview role assigned for use in the Microsoft Purview portal as an example. The roadmap item names no licence or meter for this change, and a licence or price specific to the lookup is not yet published.

The only cost the sources show is indirect: admin time to review who holds the *Role Management* role and to update runbooks.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with the release phases General Availability and Preview and the status Launched. It lists no platforms.

Learn says that to view **Role groups** in the **Roles and scopes** area, users need to be a global administrator or to hold the *Role Management* role, which it says is "assigned only to the *Organization Management* role group". That requirement is documented for viewing Role groups; Learn does not say whether it also covers the new lookup.

## Governance guidance

### Before rollout
- Identify who holds the *Role Management* role through the *Organization Management* role group, and who is a global administrator, because the Role groups page requires one or the other.
- Remove members from *Organization Management* who do not need to edit role groups, since the role that opens the page also allows creating and modifying them.

### At rollout
- Open **Settings > Roles and scopes > Role groups** with an account that has the *Role Management* role and note what the lookup shows, because Learn does not yet describe it.
- Tell help desk and audit teams which accounts can use the page.

### After rollout
- Re-check membership of *Organization Management* at your normal access-review interval, using the control in the table.
- Watch the Learn permissions page and Message center for documentation of the lookup.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open and edit Role groups (members of Organization Management, which holds Role Management)</strong><br><small>Tenant</small><br><small class="controls__note">The signed-in admin needs the Role Management role. Global administrators can also view Role groups. Security groups are supported only in Microsoft 365 commercial cloud organisations. This controls access to the page, not the lookup.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate setting to turn the Role groups lookup on or off</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented gate on the Role groups page is the role requirement: global administrator or the *Role Management* role. Both the portal path and the cmdlet in the table change who holds a role group; neither is a setting for the lookup itself.

The permissions page says security groups are supported only in Microsoft 365 commercial cloud organisations, which matters when assigning role group members in the government clouds on the record. Microsoft Learn documents no switch for the lookup at the time of writing (November 2026).

## Open questions

- What does the Role groups lookup show, and which screens does an admin use? Watch the Purview permissions page on Microsoft Learn.
- Does the lookup need anything beyond global administrator or the *Role Management* role, and can read-only roles use it? Not yet documented.
- Is the lookup on for everyone who can open Role groups, or can an admin turn it off? Microsoft has not stated the default.

<!-- rationale
risk: Low. The roadmap describes a lookup on an existing admin page, and Learn says viewing Role groups already needs global administrator or the Role Management role. Microsoft has not stated whether the lookup adds any access.
cost: Low. The roadmap names no licence or meter, so the only cost the sources show is admin time to review who can open the page. A licence specific to this change is not yet published.
impact: Low. Only administrators who can already open Role groups in the Purview portal are in view; end users do not see the page.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary / record: The roadmap states no admin action. | Found: Searched: the complete roadmap record for an admin-action statement; its description only says the page now allows permission lookups. Also searched 'Purview Role groups UI enhancements 562033 default rollout admin action disable PowerShell'; no such statement found. | Fix: Replace 'the roadmap states no admin action' with 'the roadmap does not state whether admin action is required'. This preserves the distinction between silence and an explicit no-action instruction and agrees with Why it matters.
- [contradicted, blocker] Scope: last sentence / applicability: Learn does not establish whether the Role groups page's access requirement covers the new lookup on that page. | Found: To view Role groups in the Roles and scopes area in the Microsoft Purview portal, users need to be a global administrator or need to be assigned the Role Management role. | Fix: Replace 'That requirement is documented for viewing Role groups; Learn does not say whether it also covers the new lookup.' with 'That requirement governs access to the Role groups page containing the lookup; Microsoft has not documented any additional requirement specific to the lookup.' The page-wide access requirement is stated at https://learn.microsoft.com/purview/purview-permissions. | Source: https://learn.microsoft.com/purview/purview-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope; controls[0].governs; Governance guidance: Before rollout / role: The permissions page says Role Management is assigned only to Organization Management. | Found: Role Management role (assigned only to the Organization Management role group). | Fix: After the attributed statement in Scope, add: 'Microsoft's roles reference instead says Role Management is assigned to Organization Management and Purview Administrators by default.' Cite https://learn.microsoft.com/defender-office-365/scc-permissions#role-groups-in-microsoft-defender-for-office-365-and-microsoft-purview, which states both groups. Retain the attribution to the permissions page rather than silently choosing between the sources. | Source: https://learn.microsoft.com/purview/purview-permissions
-->
