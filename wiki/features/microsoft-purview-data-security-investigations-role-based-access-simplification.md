---
title: "Microsoft Purview Data Security Investigations: Admin and Contributor roles added to existing Purview role groups"
slug: "microsoft-purview-data-security-investigations-role-based-access-simplification"
roadmapId: 558546
topic: "governance"
products: ["Microsoft Purview"]
summary: "Compliance Administrator now carries Data Security Investigations admin rights, and Organization Management, Data Security Management and Insider Risk Management carry investigation-creation rights. Review who sits in those role groups."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "consumption"
  notes: "Microsoft's billing page says Data Security Investigations is billed on stored data and AI compute units, not on a dedicated plan or licence. No charge specific to the role change is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","data-security-investigations","role-groups","least-privilege","insider-risk-management","dspm","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap 558546"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558546"
    kind: "roadmap"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview"
    url: "https://learn.microsoft.com/defender-office-365/scc-permissions"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Learn about Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations"
    kind: "learn"
  - title: "Tutorial: Create and manage budgets"
    url: "https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets"
    kind: "learn"
  - title: "Get-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-rolegroupmember"
    kind: "learn"
  - title: "Removing members from role groups that now carry DSI roles (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/remove-rolegroupmember"
    kind: "learn"
  - title: "Who administers Data Security Investigations through its dedicated role group (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["role-groups","microsoft-purview-compliance-portal-insider-risk-management-data-security-investigations-i","microsoft-purview-data-security-investigations-introducing-integration-with-data-security","microsoft-purview-compliance-portal-admin-assignment-time-limit","insider-risk-management"]
controls:
  - governs: "Removing members from role groups that now carry DSI roles"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Remove members"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Remove-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/remove-rolegroupmember"
    note: "Requires the Role management role in the portal. Applies to Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management."
  - governs: "Who administers Data Security Investigations through its dedicated role group"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Microsoft advises keeping at least one user in Data Security Investigations Admins."
  - governs: "Adding members to a Purview role group, with optional expiry"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Requires the Role management role. To set expiry, select the users added on Edit members of the role group, then select Edit expiration. The cmdlet syntax lists no expiration parameter."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-04T23:00:45"
changes:
  - date: "2026-11-28"
    note: "New briefing: DSI Admin and Contributor roles now come with four existing Purview role groups; Learn lists both roles for Organization Management."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the Security Administrator note: membership is managed centrally in Microsoft Entra, and Purview edits affect only security and compliance. Removed checklist steps with no control row; added the expiry step and two sources."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 66 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "b84258b8b79b3eaa4791ba11f5141581"
---

## What's changing

Microsoft has added Data Security Investigations (DSI) roles to four built-in Microsoft Purview role groups, so their members can use DSI without being placed in a DSI-specific role group. The roadmap item says the Data Security Investigation Admin role was added to the Compliance Administrator role group, and the Data Security Investigation Contributor role to the Organization Management, Data Security Management and Insider Risk Management role groups. Microsoft gives customer feedback and DSI's integration with Data Security Posture Management (DSPM), Insider Risk Management (IRM) and Defender XDR as the reasons.

The DSI permissions page on Microsoft Learn documents the result: members of these role groups "have Data Security Investigations access without needing explicit assignment". It lists Compliance Administrator with the Admin role (full administrative access), Data Security Management and Insider Risk Management with the Contributor role, and Organization Management with **both** the Admin and the Contributor roles. The roadmap mentions only the Contributor role for Organization Management; the Learn page is the more specific statement.

The Contributor role can create investigations and manage those the member owns or belongs to. The roles reference describes Contributor more narrowly as able to create investigations and list or get investigations they own or belong to. Learn says it does not include access to data storage, AI job execution or the Pay-as-you-go usage dashboard. The Purview roles reference also lists the Contributor role in the Security Administrator, Security Operator and Insider Risk Management Investigators role groups, which the roadmap item does not mention.

The roadmap item is Launched (General Availability), with a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Data Security Investigations collects organisational content into investigations and runs AI analysis over it, so who can open and run an investigation is a data-access decision. This change widens that group without anyone in the tenant acting: anyone already in Compliance Administrator now has DSI administrative access, and members of the other groups can start investigations. Role groups that were sized for compliance settings or insider risk triage now also confer investigation rights, and the Security Administrator role group, which Learn says inherits the membership of the Microsoft Entra Security Administrator role, carries the Contributor role too.

The change has already arrived. If nobody reviews the membership of these groups, people chosen for other duties keep the ability to create DSI investigations, and Compliance Administrator members can reach the DSI functions the Admin role covers, including the Pay-as-you-go usage dashboard, which only Admin-role holders can open.

## Risk assessment

**Data exposure**
- Compliance Administrator and Organization Management members now hold the Data Security Investigation Admin role, which Learn describes as able to create and manage investigations, processes and settings. Review membership of both groups in the Purview portal (controls table, first row).
- Contributor-role holders can create investigations and see those they own or belong to; Learn says the role does not include access to data storage or AI job execution.

**Security & identity**
- The Security Administrator role group inherits the membership of the Microsoft Entra Security Administrator role and carries the Contributor role, so Entra role assignments now also confer DSI access. Manage that membership in the Microsoft Entra admin center, as the roles reference directs.
- Learn says global admins are automatically added to Organization Management, but the DSI page also says global admins must be assigned to one of the listed role groups to create and access investigations. Test a global admin account before relying on either statement.

**Autonomy & actions**
- No change: the roles grant access to existing DSI functions and add no automated action.

**Change & support**
- Investigators may find DSI entries they did not have before and ask for help or training. Learn says role group changes can take up to 30 minutes to apply.

## Cost and licensing

**Licence.** Microsoft publishes no licence for the role change, and its [billing page](https://learn.microsoft.com/purview/data-security-investigations-billing) says DSI billing "isn't based on a dedicated enterprise plan or license".

**Meters.** DSI uses pay-as-you-go billing: a storage meter charged per gigabyte per month for data held in investigations, and Data Security Investigations Compute Units for AI analysis, billed for the units used. The storage meter bills through an Azure subscription in the same tenant, linked during DSI setup. Rates are on the Azure pricing page for Microsoft Purview.

**Spend controls.** Microsoft points to Azure budgets and alerts on the DSI resource group and meter, and to the DSI Pay-as-you-go usage dashboard, which only holders of the Data Security Investigation Admin role can open. Neither is a cap: the billing page describes them as budgets, alerts and tracking.

**Indirect cost.** The new Admin-role holders in Compliance Administrator and Organization Management can now see that dashboard. More people able to start investigations can mean more stored data; deleting an investigation stops its storage charge, prorated by day.

## Scope

- **Role groups affected:** Compliance Administrator (Admin role); Organization Management (Admin and Contributor roles, per Learn); Data Security Management and Insider Risk Management (Contributor role). The Purview roles reference also lists Contributor in Security Administrator, Security Operator and Insider Risk Management Investigators.
- **Who manages membership:** the Purview portal steps require an admin account with the Role management role.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists.
- **Platform:** web (Microsoft Purview portal).
- **Prerequisite for any metered use:** DSI billing set up with an Azure subscription in the same tenant.

## Governance guidance

### Before rollout
- Decide with the security and privacy owners which members of Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management should be able to create or administer investigations.

### At rollout
- Remove people who should not hold DSI rights from the affected role groups in the Purview portal or with Remove-RoleGroupMember, and give them a role group scoped to their real duties.
- Put dedicated DSI administrators in the Data Security Investigations Admins role group so access does not rest only on broad groups.
- Use the Edit expiration option when adding members who need DSI access only for one investigation.

### After rollout
- Repeat the membership review of these four role groups when people change duties, and remove those who no longer need Data Security Investigations rights (controls table, first row).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Removing members from role groups that now carry DSI roles</strong><br><small>Group</small><br><small class="controls__note">Requires the Role management role in the portal. Applies to Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Remove members <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/remove-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who administers Data Security Investigations through its dedicated role group</strong><br><small>Group</small><br><small class="controls__note">Microsoft advises keeping at least one user in Data Security Investigations Admins.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Adding members to a Purview role group, with optional expiry</strong><br><small>Group</small><br><small class="controls__note">Requires the Role management role. To set expiry, select the users added on Edit members of the role group, then select Edit expiration. The cmdlet syntax lists no expiration parameter.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These role groups are shared with other Purview solutions; the Remove-RoleGroupMember reference says a removed member can no longer manage the features the role group provides, where that group is their only route to them. Where that is not wanted, move them to a narrower role group rather than leaving them in place. Adding or removing members in the Purview portal needs the Role management role. Manage Security Administrator membership centrally in the Microsoft Entra admin center. Editing this role group's membership or roles in the Purview portal affects only security and compliance, not other services. To list current members, Get-RoleGroupMember -Identity <role group> reads each group. Changes can take up to 30 minutes to apply.

## Open questions

- Can an administrator remove the Data Security Investigation Admin or Contributor role from a built-in role group such as Compliance Administrator, or is removing members the only route? Watch the Purview permissions page.
- Why does Learn list both the Admin and Contributor roles for Organization Management when the roadmap item mentions only Contributor? Watch the DSI permissions page.
- Do global admins, who Learn says are automatically added to Organization Management, now reach DSI without further assignment, given the DSI page's statement that they must be assigned to a listed role group?
- Is the Contributor role in Security Administrator and Security Operator part of this change, or an earlier one? Watch Message center for a DSI roles notice.

<!-- rationale
risk: Medium. Members of four existing Purview role groups gained access to Data Security Investigations without explicit assignment, including full administrative access for Compliance Administrator members.
cost: Low. Microsoft publishes no licence for the role change; Data Security Investigations bills on its pay-as-you-go storage meter and compute units, so more people able to run investigations can mean more metered use.
impact: Low. Only administrators and investigators who belong to the affected Purview role groups notice the new access.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The role change adds no automated action. | Found: Searched: Data Security Investigations role automatically simplification. Read DSI overview, permissions, billing and Get started search excerpts. They describe role additions and existing automated processing, but do not explicitly establish that this change adds no automated action. | Fix: Replace 'No change: the roles grant access to existing DSI functions and add no automated action.' with 'The roadmap describes this change as adding DSI roles to existing Purview role groups.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The DSI page gives Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users. | Found: Select Settings ... select Roles and groups, then select Role groups ... Select the Data Security Investigations Admins role group, then select Edit. ... Select Choose users | Fix: Keep the cited path, and add to controls[1].note: 'The DSI permissions page calls this navigation Roles and groups; the general Purview permissions page calls it Roles and scopes.' Both pages are already cited. | Source: https://learn.microsoft.com/purview/data-security-investigations-permissions
- [supported, minor] controls[0].note; controls[2].note; Scope; Governance controls / role: The general Purview portal membership procedures require an account assigned the Role management role. | Found: Sign in to the Microsoft Purview portal by using credentials for an admin account assigned the Role management role. | Fix: Add to controls[1].note: 'The DSI permissions page additionally says users following its role-group configuration steps must be assigned to Data Security Investigations Admins.' The source is https://learn.microsoft.com/purview/data-security-investigations-permissions, which says 'To continue with these configuration steps ... you must be assigned to the Data Security Investigations Admins role group.' | Source: https://learn.microsoft.com/purview/purview-permissions
-->
