---
title: "Microsoft Defender for Office 365: hunt on Microsoft Teams calls and meetings"
slug: "microsoft-defender-for-office-365-admins-can-hunt-on-calls-in-microsoft-teams"
roadmapId: 531761
topic: "governance"
products: ["Microsoft Defender for Office 365"]
summary: "Security admins with Defender for Office 365 Plan 2 can hunt on Teams call and meeting activity in advanced hunting. It is a new query table. Microsoft has not stated what happens on arrival; review who holds hunting access."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Teams protection page lists advanced hunting on Teams calls and meetings in the Defender for Office 365 Plan 2 column, and introduces that group as extras from Microsoft 365 E5 and Defender for Office 365 Plan 2. The roadmap names Plan 2. No separate price is published on that page."
audiences: ["security","m365-admin","compliance"]
tags: ["defender-for-office-365","defender-xdr","teams","advanced-hunting","threat-detection","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 531761"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=531761"
    kind: "roadmap"
  - title: "Microsoft Defender for Office 365 support for Microsoft Teams"
    url: "https://learn.microsoft.com/defender-office-365/mdo-support-teams-about"
    kind: "learn"
  - title: "CallActivityEvents"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-callactivityevents-table"
    kind: "learn"
  - title: "What's new in Microsoft Defender for Office 365"
    url: "https://learn.microsoft.com/defender-office-365/defender-for-office-365-whats-new"
    kind: "learn"
  - title: "Proactively hunt for threats with advanced hunting in Microsoft Defender"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-overview"
    kind: "learn"
  - title: "Create custom roles with Microsoft Defender unified RBAC"
    url: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    kind: "learn"
  - title: "Permissions in Microsoft Defender unified role-based access control (RBAC)"
    url: "https://learn.microsoft.com/defender-xdr/custom-permissions-details"
    kind: "learn"
  - title: "Data ingestion, retention, and billing for ISOC in Microsoft Defender"
    url: "https://learn.microsoft.com/defender-xdr/integrated-security-operations-data-billing-retention"
    kind: "learn"
  - title: "Create unifiedRoleAssignmentMultiple"
    url: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    kind: "learn"
  - title: "security: runHuntingQuery"
    url: "https://learn.microsoft.com/graph/api/security-security-runhuntingquery?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Who can run advanced hunting queries over Defender data, including the Teams call table"
    scope: "user"
    ui:
      surface: "Microsoft Defender portal"
      path: "Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions"
      docs: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    api:
      kind: "graph"
      call: "POST /beta/roleManagement/defender/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    note: "Beta API for the Defender provider; needs RoleManagement.ReadWrite.Defender. Learn's overview lists Raw data > Email & collaboration metadata (read) for email tables; it does not name CallActivityEvents."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-02-27T23:15:13"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: Teams call and meeting hunting via the CallActivityEvents table, with the roadmap status and Learn's documentation reported side by side."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: arrival behaviour stated as not stated by Microsoft, ISOC 90-day retention now confirmed for CallActivityEvents, recipient columns narrowed, and the role path and request body properties completed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "7bb2aee1712f5e1e2515c81c8c0cafa4"
---

## What's changing

Security admins with Microsoft Defender for Office 365 Plan 2 can hunt on calls and meetings made inside Microsoft Teams for their organisation. The roadmap item describes it in those words.

Microsoft Learn documents the delivery vehicle: the `CallActivityEvents` table in Microsoft Defender XDR advanced hunting, which holds details about activities performed during Microsoft Teams calls. Its columns include the activity type, status and timestamp, the initiator's user principal name and display name, the recipient's account identifier, both participants' phone numbers, the call's join URL, name and scheduling type, and the initiator's tenant, region and client platform. The table is populated by records from Defender for Office 365, and queries return nothing if the service is not deployed in Microsoft Defender.

The roadmap record gives the status as In development with a target of March CY2026, for Worldwide (Standard Multi-Tenant), General Availability, on the Web platform. Learn already lists the table in its Defender for Office 365 "What's new" under October 2026 and on its Teams support page. Both are reported here: the record still says In development, and Learn documents the table as usable. Check your own tenant's schema before relying on it.

## Why it matters

A hunting table for Teams calls and meetings gives a security team somewhere to search call activity, and the same queries can be reused as custom detection rules. Microsoft's "What's new" entry says the table helps security teams investigate suspicious call activity.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. The practical decisions are who may query the table and whether call metadata such as phone numbers and join URLs belongs in that audience's hands.

## Risk assessment

**Data exposure**
- The `CallActivityEvents` columns Learn lists include user principal names, display names, phone numbers, call join URLs and the participant's tenant name and region. Anyone who can query the table can read them for calls in your organisation, so review the hunting permissions in the controls table.
- Advanced hunting keeps up to 30 days of native Defender data, or up to 90 days for supported data with an eligible Integrated Security Operations Center (ISOC) licence. Microsoft lists `CallActivityEvents` among the tables included in the up-to-90-day ISOC retention benefit for eligible customers, starting November 15, 2026.

**Security & identity**
- Access is permission-gated: Learn says you need to be assigned permissions before you can run advanced hunting queries, through Defender unified role-based access control (URBAC), Defender for Office 365 role groups, Exchange Online role groups or Microsoft Entra roles. Learn lists Microsoft Entra roles (Global Administrator, Security Administrator, Security Reader and Global Reader) as granting full read access to all advanced hunting data.
- The URBAC permission Learn names for Email & collaboration tables does not list `CallActivityEvents` among its tables. Confirm which permission your hunters need.

**Autonomy & actions**
- No change: hunting queries read data. The roadmap and Learn describe no automated action on calls for this item. Queries can be reused as custom detection rules, which run automatically; review those rules like any other.

**Change & support**
- Expect questions from the security team about missing results: Learn states that queries on the table do not work or return no results if Defender for Office 365 is not deployed in Microsoft Defender.
- The record says In development while Learn documents the table, so schema and availability may differ between tenants during rollout.

## Cost and licensing

**Licence.** The roadmap item names Defender for Office 365 Plan 2. Microsoft's Teams protection page says Microsoft 365 E5 and Defender for Office 365 Plan 2 extend Teams protection with extra capabilities, including hunting on Teams calls and meetings, and its table marks advanced hunting on Teams calls and meetings under Defender for Office 365 Plan 2 only (not Plan 1 or all Teams licences).

**Meter.** That page publishes no separate price or meter for this capability, and the briefing treats the licence as the cost.

**Indirect costs.** Admin time to grant hunting access and write queries. Advanced hunting quotas apply: up to 30 days of native Defender data (up to 90 days for supported data with an eligible ISOC licence), 100,000 rows per query and a 10-minute timeout, per Learn's advanced hunting overview.

## Scope

Users and licences: security teams in tenants with Defender for Office 365 Plan 2 (or Microsoft 365 E5, per Learn). Data: Teams call and meeting activity in your organisation, held in the `CallActivityEvents` table.

Clouds and platforms as the roadmap record lists them: Worldwide (Standard Multi-Tenant) and the Web platform. No other cloud is listed on the record; that is a record fact, not a statement that it is unavailable elsewhere.

Prerequisites: Defender for Office 365 deployed in Microsoft Defender, and an assigned permission to run advanced hunting queries.

## Governance guidance

### Before rollout
- Confirm which tenants and users hold Defender for Office 365 Plan 2 or Microsoft 365 E5, since Learn places this capability in that tier.
- List who can run advanced hunting today across URBAC roles, Defender for Office 365 role groups, Exchange Online role groups and Entra roles, and decide whether call metadata suits each group.
- Ask your Defender administrator to confirm which permission grants `CallActivityEvents` in your tenant.

### At rollout
- Check in advanced hunting that the `CallActivityEvents` table appears in your schema and returns rows for a known test call.
- Create or adjust a custom unified RBAC role for hunters who need only the data they require, rather than relying on broad Entra roles.

### After rollout
- Review any custom detection rules built on `CallActivityEvents` and who owns them.
- Revisit the roadmap item and Learn's "What's new" for status changes, and re-check hunting access when roles change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run advanced hunting queries over Defender data, including the Teams call table</strong><br><small>User</small><br><small class="controls__note">Beta API for the Defender provider; needs RoleManagement.ReadWrite.Defender. Learn's overview lists Raw data &gt; Email &amp; collaboration metadata (read) for email tables; it does not name CallActivityEvents.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Permissions › Microsoft Defender XDR › Roles › Create custom role › Choose permissions <a href="https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/roleManagement/defender/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The row covers who may run advanced hunting queries at all, which is the access control that applies to the table. Role assignment through URBAC is enforced only once Defender unified RBAC is activated, per the create custom roles page. On Choose permissions, select the required permissions; then use Assign users and data sources > Add assignment to select employees and data sources. Learn's permissions page says that, unless otherwise stated, unified RBAC permissions apply to all supported workloads and to the data scope selected during assignment.

The Microsoft Graph `runHuntingQuery` API (`POST /v1.0/security/runHuntingQuery`, permission `ThreatHunting.Read.All`) lets applications run hunting queries; Learn's reference page does not list `CallActivityEvents` by name, so confirm table access in your tenant. A Defender provider role assignment call is a beta API, and the request body identifies the assigned role with roleDefinitionId and the users or groups with principalIds.

## Open questions

- Is `CallActivityEvents` live in every Worldwide tenant, given the roadmap item says In development with a March CY2026 target while Learn documents the table? Watch the roadmap item and the Defender for Office 365 "What's new" page.
- Which URBAC permission grants read access to `CallActivityEvents`? Learn's advanced hunting overview names the Email & collaboration metadata permission and lists tables that do not include it.
- Which calls and meetings are recorded in the table (for example external, phone-number or unauthenticated participants), and what values does `ActivityType` take? The table page names account types but not the full list of activity types.

<!-- rationale
risk: Low. This is read-only hunting over Teams call activity data for people who already hold security or hunting permissions; no source describes any change for end users.
cost: Low. Microsoft's Teams protection page lists hunting on Teams calls and meetings under Defender for Office 365 Plan 2 and Microsoft 365 E5; the cost is admin time for tenants that already hold those licences.
impact: Low. The documented capability is aimed at security operations staff who run advanced hunting queries; Microsoft has not stated what happens on arrival.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft Defender portal > Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions reaches role permission selection. | Found: On the Permissions page, under Microsoft Defender XDR, select Roles > Create custom role. On the Choose permissions page, select each of the following as needed to configure permissions for that area: | Fix: The path correctly reaches the permissions page but stops before the documented hunting permission. Extend it to 'Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations > Raw data > Email & collaboration metadata (read)', citing the already-listed https://learn.microsoft.com/defender-xdr/advanced-hunting-overview for the last levels. Preserve the qualification that its explicit table list does not name CallActivityEvents. | Source: https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles
- [supported, minor] controls[0].api; Governance controls table / command: POST /beta/roleManagement/defender/roleAssignments creates a Defender provider role assignment. | Found: To create role assignment for a Defender provider: POST /roleManagement/defender/roleAssignments | Fix: Keep the endpoint. Add to controls[0].note the properties already described in the body: 'The request body sets roleDefinitionId for the assigned role and principalIds for the assigned users or groups.' | Source: https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta
- [supported, minor] Governance controls: role assignment body / command: The role assignment request identifies the assigned role with roleDefinitionId. | Found: roleDefinitionId | String | Identifier of the unifiedRoleDefinition the assignment is for. | Fix: Add https://learn.microsoft.com/graph/api/resources/unifiedroleassignmentmultiple?view=graph-rest-beta to sources for the roleDefinitionId and principalIds definitions. Append: 'The create-operation reference lists the Defender provider, but the linked resource-type reference currently lists only Cloud PC and Microsoft Intune as supported providers.' Keep the documented beta Defender endpoint. | Source: https://learn.microsoft.com/graph/api/resources/unifiedroleassignmentmultiple?view=graph-rest-beta
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: Every control the governance checklist asks readers to review appears in the controls table. | Found: After rollout: 'Review any custom detection rules built on CallActivityEvents and who owns them.' The only controls row covers 'Who can run advanced hunting queries over Defender data, including the Teams call table'. | Fix: Remove 'Review any custom detection rules built on CallActivityEvents and who owns them.' from After rollout because it has no matching controls row; do not add a control row as part of this correction.
-->
