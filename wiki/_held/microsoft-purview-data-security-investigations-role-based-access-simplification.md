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
    note: "Requires the Role management role. The portal steps offer Edit expiration for temporary access; the cmdlet syntax lists no expiration parameter."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-04T23:00:45"
changes:
  - date: "2026-11-28"
    note: "New briefing: DSI Admin and Contributor roles now come with four existing Purview role groups; Learn lists both roles for Organization Management."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 62
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "22b206f9a67a71bd630bb035873f2cb9"
---

## What's changing

Microsoft has added Data Security Investigations (DSI) roles to four built-in Microsoft Purview role groups, so their members can use DSI without being placed in a DSI-specific role group. The roadmap item says the Data Security Investigation Admin role was added to the Compliance Administrator role group, and the Data Security Investigation Contributor role to the Organization Management, Data Security Management and Insider Risk Management role groups. Microsoft gives customer feedback and DSI's integration with Data Security Posture Management (DSPM), Insider Risk Management (IRM) and Defender XDR as the reasons.

The DSI permissions page on Microsoft Learn documents the result: members of these role groups "have Data Security Investigations access without needing explicit assignment". It lists Compliance Administrator with the Admin role (full administrative access), Data Security Management and Insider Risk Management with the Contributor role, and Organization Management with **both** the Admin and the Contributor roles. The roadmap mentions only the Contributor role for Organization Management; the Learn page is the more specific statement.

The Contributor role can create investigations and manage those the member owns or belongs to. Learn says it does not include access to data storage, AI job execution or the Pay-as-you-go usage dashboard. The Purview roles reference also lists the Contributor role in the Security Administrator, Security Operator and Insider Risk Management Investigators role groups, which the roadmap item does not mention.

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
- List the members of Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management with Get-RoleGroupMember, and note who now holds DSI rights.
- Decide with the security and privacy owners which of those people should be able to create or administer investigations.
- Check who holds the Microsoft Entra Security Administrator role, since the Security Administrator role group inherits that membership and carries the Contributor role.

### At rollout
- Remove people who should not hold DSI rights from the affected role groups in the Purview portal or with Remove-RoleGroupMember, and give them a role group scoped to their real duties.
- Put dedicated DSI administrators in the Data Security Investigations Admins role group so access does not rest only on broad groups.
- Use the Edit expiration option when adding members who need DSI access only for one investigation.

### After rollout
- Review the DSI Pay-as-you-go usage dashboard for investigations started by newly entitled users.
- Set Azure budget alerts on the DSI resource group, as Microsoft's billing page recommends.
- Re-check role group membership after each Entra role change for Security Administrator.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Removing members from role groups that now carry DSI roles</strong><br><small>Group</small><br><small class="controls__note">Requires the Role management role in the portal. Applies to Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Remove members <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/remove-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who administers Data Security Investigations through its dedicated role group</strong><br><small>Group</small><br><small class="controls__note">Microsoft advises keeping at least one user in Data Security Investigations Admins.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Adding members to a Purview role group, with optional expiry</strong><br><small>Group</small><br><small class="controls__note">Requires the Role management role. The portal steps offer Edit expiration for temporary access; the cmdlet syntax lists no expiration parameter.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These role groups are shared with other Purview solutions; the Remove-RoleGroupMember reference says a removed member can no longer manage the features the role group provides, where that group is their only route to them. Where that is not wanted, move them to a narrower role group rather than leaving them in place. Adding or removing members in the Purview portal needs the Role management role. Members of the Security Administrator role group are managed in the Microsoft Entra admin center, not on the Purview Role groups page. To list current members, Get-RoleGroupMember -Identity <role group> reads each group. Changes can take up to 30 minutes to apply.

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

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: paragraph after table / applicability: Security Administrator members are managed in Entra, not on the Purview Role groups page. | Found: If you edit this role group in these portals (membership or roles), those changes apply only to the security and compliance areas and not to any other services. | Fix: Replace the sentence with: 'Manage Security Administrator membership centrally in the Microsoft Entra admin center. Editing this role group's membership or roles in the Purview portal affects only security and compliance, not other services.' Keep the citation to https://learn.microsoft.com/defender-office-365/scc-permissions. | Source: https://learn.microsoft.com/defender-office-365/scc-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Data exposure / role: Contributor-role holders can manage and see investigations they own or belong to. | Found: Members with the Data Security Investigation Contributor role can create and manage investigations they own or are members of. | Fix: Add after this statement: 'The roles reference describes Contributor more narrowly as able to create investigations and list or get investigations they own or belong to.' Cite https://learn.microsoft.com/defender-office-365/scc-permissions, whose Contributor row says 'Create investigations and list or get the investigations that they own or are members of.' | Source: https://learn.microsoft.com/purview/data-security-investigations-permissions
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The cited DSI page gives Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users. | Found: select Roles and groups, then select Role groups in the left navigation. ... Select the Data Security Investigations Admins role group, then select Edit. ... Select Choose users | Fix: Append to controls[1].note: 'The DSI permissions page gives Roles and groups; the general Purview permissions page instead gives Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users.' Both pages are already cited. | Source: https://learn.microsoft.com/purview/data-security-investigations-permissions
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The add-with-optional-expiry path stops at Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users. | Found: On Edit members of the role group, select Choose users or Choose groups. ... If the selected users or groups need temporary access, select the users or groups and select Edit expiration. | Fix: The printed steps reach the correct membership page but stop before the expiry control. Add to controls[2].note: 'To set expiry, select the users added on Edit members of the role group, then select Edit expiration.' Keep the existing add path. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] Why it matters / behaviour: DSI collects organisational content into investigations. | Found: The investigation helps you analyze the alert details, understand what they mean, and collect and examine data for deeper review and mitigation efforts. | Fix: Add 'Learn about Data Security Investigations', https://learn.microsoft.com/purview/data-security-investigations, to sources to support the content-collection statement. | Source: https://learn.microsoft.com/purview/data-security-investigations
- [supported, minor] Cost and licensing: Spend controls / cost: Azure budgets and alerts are not a consumption cap. | Found: Notifications are triggered when the budget thresholds are exceeded. Resources aren't affected, and your consumption isn't stopped. | Fix: Cite 'Tutorial: Create and manage budgets', https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets, for the statement that Azure budgets do not stop consumption. | Source: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist names controls absent from the controls table. | Found: Checklist: Get-RoleGroupMember inventory; Entra Security Administrator review; DSI usage dashboard review; Azure budget alerts. Table: removal, dedicated DSI admin membership, adding members with optional expiry. | Fix: The membership-inventory, Entra Security Administrator, DSI usage-dashboard and Azure-budget checklist steps have no corresponding control rows. Remove these four checklist instructions, and the repeated Entra membership re-check instruction under After rollout; retain the supported explanatory prose. Do not add control rows as part of this correction.
-->
