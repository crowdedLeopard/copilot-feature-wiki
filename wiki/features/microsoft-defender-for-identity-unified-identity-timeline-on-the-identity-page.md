---
title: "Microsoft Defender for Identity: unified identity timeline on the Identity page"
slug: "microsoft-defender-for-identity-unified-identity-timeline-on-the-identity-page"
roadmapId: 568784
topic: "governance"
products: ["Microsoft 365 Defender","Microsoft Defender"]
summary: "The Identity page in the Microsoft Defender portal gets an updated timeline that merges alerts and activity from linked accounts across sources. It is an analyst view; admins should check who can open it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says deploying Defender for Identity requires one of several Microsoft 365 licences or a standalone Defender for Identity licence. The Timeline tab's page names no licence of its own; a price specific to this feature is not yet published."
audiences: ["security","service-owner"]
tags: ["microsoft-defender-for-identity","defender-xdr","identity","entra-id","conditional-access","threat-detection","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: 568784"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568784"
    kind: "roadmap"
  - title: "Investigate an identity"
    url: "https://learn.microsoft.com/defender-xdr/investigate-users"
    kind: "learn"
  - title: "Microsoft Defender for Identity sensor v2.x prerequisites"
    url: "https://learn.microsoft.com/defender-for-identity/deploy/prerequisites-sensor-version-2"
    kind: "learn"
  - title: "Role groups for identity security in Microsoft Defender"
    url: "https://learn.microsoft.com/defender-for-identity/role-groups"
    kind: "learn"
  - title: "Create custom roles with Microsoft Defender unified RBAC"
    url: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    kind: "learn"
  - title: "Configure scoped access for identity security in Microsoft Defender"
    url: "https://learn.microsoft.com/defender-for-identity/configure-scoped-access"
    kind: "learn"
  - title: "Extend advanced hunting coverage with the right settings"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-extend-data"
    kind: "learn"
  - title: "Create unifiedRoleAssignmentMultiple"
    url: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Who can read Defender data, including Defender for Identity, by role and data source"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations > Assign users and data sources > Add assignment > Data sources"
      docs: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    api:
      kind: "graph"
      call: "POST /beta/roleManagement/defender/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    note: "Enforced only after activation. Creating roles needs at least Security Administrator in Microsoft Entra ID or all Authorization permissions in unified RBAC. The request body sets appScopeIds (workload id Mdi). Beta API."
  - governs: "Tenant-wide switch to turn the unified identity timeline on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented for the timeline. Role assignment above is the available access control."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-22"
    note: "New briefing: roadmap item 568784 (In development, September CY2026 target), with the Learn description of the Timeline tab and the access control for the Identity page."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: removed the claim that the timeline replaces separate tables, narrowed access wording to unified RBAC, added role, path and custom-role qualifications."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 57 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 62 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 60
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "3a3bfcd082653a3a5efed6c175dc802e"
---

## What's changing

The roadmap item describes an updated identity timeline on the Identity page in the Microsoft Defender portal. It gives security teams one chronological view of activity and alerts for an identity and its linked accounts, and it normalises activity from Microsoft Entra sign-ins, Microsoft Graph audit events, SaaS and cloud activity and device logons. The roadmap says new fields and filters include Source table, Session ID and Unique token identifier, with expanded Conditional Access and event context.

Microsoft Learn's "Investigate an identity" page already describes a Timeline tab on that basis. It says the timeline aggregates data from identity security, endpoint security, SaaS security and Microsoft Sentinel, covers every account linked to the identity (including manually and policy-based correlated accounts), and removes duplicate events, favouring the Entra ID source when a sign-in appears in both Entra ID and cloud app data. It lists eight advanced hunting tables as inputs and a unified schema in which fields are populated only if the source table provides them. For Entra ID sign-in events, the event details pane has a Conditional Access tab showing each evaluated policy's name, grant controls and result.

The two sources differ on filters. The roadmap speaks of new filters, while the Learn schema table marks Source table, Session ID and Unique token identifier as "Filterable by default": No, with Session ID and Unique token identifier also not shown by default (they can be added from Customize columns). Whether Learn describes the final shipped behaviour is not stated.

The roadmap record lists the item as In development with a target of September CY2026, release phase General Availability, platform Web, and the Worldwide, GCC, GCC High and DoD clouds. That target month has passed at the time of writing (November 2026) and the record still says In development. No Message Center post was supplied for this item.

## Why it matters

For service owners, the updated timeline brings sign-ins, audit events, cloud app events, device logons and Conditional Access results into one investigation view. That is a gain for investigation speed, and it means more tenant activity, including policy evaluation detail, is visible from one page.

Microsoft has not stated what happens on arrival, so the wiki cannot say whether analysts get the new view automatically. No source says existing behaviour changes for other users. The practical step is to confirm who can open the Identity page and to brief the security operations team on the new columns before they meet them mid-incident.

## Risk assessment

**Data exposure**

- The timeline combines Entra sign-ins, Microsoft Graph activity events, cloud app events, device logons and directory changes for every account linked to an identity. The timeline consolidates activity from its source tables in one place, so review the roles that reach the page (see the permissions row below).
- Session ID and Unique token identifier are available as columns. They are not shown by default, but an analyst can add them from Customize columns.

**Security & identity**

- For Entra ID sign-in events, the event pane shows the Conditional Access policies evaluated, with names, grant controls and results. These event details reveal policy design, so treat the page as sensitive security operations data.
- No setting is documented to switch the timeline on or off. Microsoft Defender unified RBAC governs custom-role access where it is activated; tenants with roles assigned or exported before March 2, 2025 retain their current configuration.

**Autonomy & actions**

- No change: the Timeline tab reads activity and alerts. Remediation actions such as disabling accounts or revoking sessions are triggered from the Actions menu on the Overview tab, which is separate.

**Change & support**

- Analysts may need guidance on the unified schema: a field is empty when the source table does not provide it, and duplicates between Entra ID and cloud app data are resolved in favour of Entra ID.
- The roadmap says new filters and Learn lists those fields as not filterable by default, so confirm in your tenant before updating runbooks.

## Cost and licensing

Licence: Microsoft Learn says deploying Defender for Identity requires one of several Microsoft 365 licences, including Microsoft 365 E5 or a standalone Defender for Identity licence; the page lists the others and the prerequisites for the F5 options ([Defender for Identity prerequisites](https://learn.microsoft.com/defender-for-identity/deploy/prerequisites-sensor-version-2)). The Investigate an identity page, which describes the Timeline tab, names no licence or meter for that tab.

A different tab has its own requirement: the page says the Identity Explorer tab requires a Microsoft Sentinel Data Lake licence. It does not say that of the Timeline tab, though the timeline can draw on Microsoft Sentinel data.

Indirect cost is analyst time to learn the new view and update runbooks. A price or meter specific to this feature is not yet published.

## Scope

**Who and where.** The roadmap lists the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds, Web as the platform, and General Availability as the release phase, with a September CY2026 target and status In development.

**Access.** Microsoft's role page lists the permissions to view the Assets / Identities page as permissions to access Defender for Cloud Apps, or one of the Microsoft Entra roles required by Microsoft Defender. Unified RBAC assignments choose the data sources users can read, and Defender for Identity access can be scoped to Active Directory domains or organisational units.

**Prerequisites.** The timeline draws on Defender for Identity, Entra ID and cloud app data. Learn says the Defender for Identity sensor on domain controllers feeds on-premises Active Directory data into advanced hunting. A separate Microsoft Sentinel events tab shows a Sentinel timeline when Sentinel is connected to the Defender portal. Rollout mechanics and the default state are not stated.

## Governance guidance

### Before rollout

- Review who holds unified RBAC roles that reach the Identity page, and remove access that analysts do not need (permissions row).
- Check the data sources and Defender for Identity scopes in each unified RBAC assignment. Custom roles apply only to new alerts and activities; alerts and activities triggered before a custom role was created are not retroactively tagged or filtered.

### At rollout

- Brief the security operations team on the Timeline tab: the Source table, Session ID and Unique token identifier columns and the Conditional Access tab in the event pane.
- Test in a pilot identity whether the three new fields can be filtered, since Learn marks them as not filterable by default.

### After rollout

- Revisit incident runbooks that assume separate Entra, cloud app and device logon views, and point them to the unified timeline where it fits.
- Re-read the roadmap item and the Investigate an identity page when the status changes from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can read Defender data, including Defender for Identity, by role and data source</strong><br><small>Tenant</small><br><small class="controls__note">Enforced only after activation. Creating roles needs at least Security Administrator in Microsoft Entra ID or all Authorization permissions in unified RBAC. The request body sets appScopeIds (workload id Mdi). Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Permissions › Microsoft Defender XDR › Roles › Create custom role › Choose permissions › Security operations › Assign users and data sources › Add assignment › Data sources <a href="https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/roleManagement/defender/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn the unified identity timeline on or off</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented for the timeline. Role assignment above is the available access control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Access to the Identity page is the control that exists. Microsoft's role page for Defender for Identity lists the permissions to view the Assets / Identities page as permissions to access Defender for Cloud Apps or one of the Microsoft Entra roles required by Microsoft Defender. The unified RBAC row covers who is assigned a custom role and which data sources the assignment reaches; creating a role needs at least Security Administrator in Microsoft Entra ID or all Authorization permissions.

The portal enforces unified RBAC assignments only after the model is activated. The Graph call is a beta API and Microsoft says beta APIs are subject to change. No tenant-wide switch for the timeline is documented, so the second row records that gap.

## Open questions

- Is the updated timeline switched on automatically for every tenant, or does anything need enabling? Watch the Investigate an identity page and Message center.
- Will Session ID, Unique token identifier and Source table be filterable as the roadmap's "new filters" suggests, given that Learn lists them as not filterable by default?
- Which unified RBAC data sources and Defender for Identity scopes decide which timeline events an analyst can see, given that events come from several sources?
- When will the roadmap status move from In development, given the September CY2026 target has passed?

<!-- rationale
risk: Low. The timeline is an investigation view that brings existing Defender signals into one place; remediation actions sit in a separate Actions menu, and the main exposure is who may open the page.
cost: Low. The only cost the sources show is analyst and admin time; Defender for Identity needs a Microsoft 365 or standalone licence, and the Learn page for the Timeline tab names no extra licence or meter.
impact: Low. Security analysts who investigate identities in the Microsoft Defender portal notice it; nothing in the sources reaches end users.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: There is no change to autonomy and actions from the timeline update. | Found: Searched: "identity" "Timeline" "remediation" "no change". Read roadmap, investigate-users and January 2026 what's-new excerpt. They describe the timeline and remediation actions but do not establish unchanged action behaviour across this update. | Fix: Remove 'No change:' from the Autonomy & actions bullet. Retain the descriptions of the Timeline tab and the separate Overview Actions menu.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: Every control the governance checklist asks readers to review has a corresponding controls-table row. | Found: Checklist: 'Check the data sources and Defender for Identity scopes in each unified RBAC assignment.' Table: role and data-source assignment, and timeline on/off switch; no identity-scoping row. | Fix: Remove 'and Defender for Identity scopes' from the Before rollout checklist bullet. The checklist should say 'Check the data sources in each unified RBAC assignment.'
-->
