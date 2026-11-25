---
title: "Microsoft Purview: role-based access control for Exact Data Match upload authorisation"
slug: "microsoft-purview-compliance-portal-information-protection-exact-data-match-adding-support"
roadmapId: 176155
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let Purview customers use RBAC instead of the EDM_DataUploaders security group to authorise Exact Data Match uploads. Still in development; today's group method continues to apply and nothing needs changing yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Microsoft Learn's EDM overview names no licence for EDM and refers readers to the Microsoft 365 security and compliance licensing guidance. Nothing specific to RBAC upload authorisation is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","exact-data-match","information-protection","sensitive-information-types","authorisation","least-privilege"]
sources:
  - title: "Hash and upload the sensitive information source table for exact data match sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-get-started-exact-data-match-hash-upload"
    kind: "learn"
  - title: "Get started with exact data match sensitive information types in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/sit-get-started-exact-data-match-based-sits-overview"
    kind: "learn"
  - title: "Create, edit, or delete a security group in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/email/create-edit-or-delete-a-security-group"
    kind: "learn"
  - title: "Add members"
    url: "https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 176155"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=176155"
    kind: "roadmap"
videos: []
related: ["sensitive-information-types","classifiers"]
controls:
  - governs: "Who may upload EDM data today: EDM_DataUploaders security group membership"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Teams & groups > Active teams and groups > Security groups > security group > Members > View all and manage members"
      docs: "https://learn.microsoft.com/microsoft-365/admin/email/create-edit-or-delete-a-security-group"
    api:
      kind: "graph"
      call: "POST /v1.0/groups/{group-id}/members/$ref"
      docs: "https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0"
    note: "Today's method, not the planned RBAC option. Groups Administrator, User Administrator or Global Administrator can add members per the EDM upload page. The request body sets @odata.id."
  - governs: "RBAC authorisation of EDM uploads (planned)"
    scope: "tenant"
    ui: null
    api: null
    note: "Roadmap item only; no Learn page describes it yet."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-08-20T23:00:26"
changes:
  - date: "2026-11-25"
    note: "First briefing for this roadmap item: documents today's EDM_DataUploaders method and records that the RBAC option is not yet described on Learn."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 43
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "1818a0210321b3e611750ccbcc8c4ce8"
---

## What's changing

The roadmap item states that Microsoft Purview customers will be able to choose role-based access control (RBAC) to authorise users to upload data to the Exact Data Match (EDM) service, instead of relying on the EDM_DataUploaders security group. The item covers Microsoft Purview, Worldwide (Standard Multi-Tenant), on the web, with General Availability as the release phase.

Microsoft Learn does not describe the RBAC option yet, so what follows about its behaviour is the roadmap's description. What Learn does document is today's method: the account used with the EDM Upload Agent "must be added to the EDM_DataUploaders security group", and the agent asks the person to sign in with that account when authorising. Administrators who can create security groups and add members, such as the Groups Administrator and User Administrator roles, maintain that group.

The roadmap status is In development with a target of December CY2025. That month has passed at the time of writing (November 2026) and the record, last modified on 20 August 2025, still shows In development. Treat the date as a target that has not been met, not as a delivery date.

## Why it matters

EDM upload rights decide who can load a hashed copy of your most sensitive tables (patient, customer or employee records) into Purview. Today that right is a membership list in a security group, which sits outside the Purview role model. The planned option would let the same decision follow the role-based approach Purview uses elsewhere, which fits Microsoft's own advice on the upload page to use roles with the fewest permissions.

If nobody acts, no source says existing behaviour changes: the roadmap describes a choice, and the documented EDM_DataUploaders requirement stays the documented method. The decision that matters is whether, once Microsoft publishes the details, you move the upload authorisation to RBAC or keep the group.

## Risk assessment

**Data exposure**
- The people who can upload decide what source data reaches the EDM service. Today that is whoever is in the EDM_DataUploaders group; keep the membership short and reviewed, because the RBAC option is not yet documented.
- Microsoft Learn does not yet say whether the group and the RBAC option can both authorise uploads at the same time. Until it does, assume a user already in the group keeps that right.

**Security & identity**
- The Learn page for the current method lists Groups Administrator, User Administrator and Global Administrator as roles that can create the group and add members, and marks Global Administrator as "don't use". Whoever controls the group controls who can upload, so review who holds those roles.
- Role names, who can assign them and how they appear in audit are not yet documented for the RBAC option.

**Autonomy & actions**
- No change: the roadmap describes authorisation of human upload, with no autonomous or agent behaviour.

**Change & support**
- Scripts and runbooks that sign the EDM Upload Agent in with a group member may need review when the RBAC option is documented; whether the agent's commands change is not stated.
- The December CY2025 target has passed with status still In development, so avoid planning a migration date around it.

## Cost and licensing

Microsoft Learn's EDM overview names no licence for EDM and says to see the Microsoft 365 security and compliance licensing guidance "for complete licensing information". The hash-and-upload page lists a work or school Microsoft 365 account, a supported computer and a data file as prerequisites; it names no separate meter.

A licence or charge specific to RBAC upload authorisation is not yet published. The cost the sources support is admin time to review group membership and, later, to move authorisation if you choose to.

## Scope

The roadmap record lists Microsoft Purview, Worldwide (Standard Multi-Tenant), the Web platform and General Availability. No US Government cloud is listed on the roadmap item.

The audience is whoever uploads EDM source tables and whoever administers the EDM_DataUploaders group. Microsoft's EDM overview says you must be a Global Admin, Compliance Admin or Exchange Admin to perform the tasks it describes; the roles for the RBAC option are not yet documented. Rollout mechanics and prerequisites for the RBAC option are not yet published.

## Governance guidance

### Before rollout
- Inventory the members of the EDM_DataUploaders group and remove accounts that no longer load EDM data (see the first controls row).
- Review who holds Groups Administrator, User Administrator and Global Administrator, because those roles can change the group.
- Record which scripts or scheduled jobs sign the EDM Upload Agent in, and with which account.

### At rollout
- Watch Message center and the EDM hash-and-upload page for Microsoft's description of the RBAC option before changing any authorisation.
- Keep the group in place until Microsoft documents how the two methods interact.

### After rollout
- Test an upload with a non-production data store under the new authorisation before moving production uploads.
- Re-check the list of people able to upload after any change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who may upload EDM data today: EDM_DataUploaders security group membership</strong><br><small>Group</small><br><small class="controls__note">Today's method, not the planned RBAC option. Groups Administrator, User Administrator or Global Administrator can add members per the EDM upload page. The request body sets @odata.id.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Teams &amp; groups › Active teams and groups › Security groups › security group › Members › View all and manage members <a href="https://learn.microsoft.com/microsoft-365/admin/email/create-edit-or-delete-a-security-group" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/groups/{group-id}/members/$ref</code> <a href="https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>RBAC authorisation of EDM uploads (planned)</strong><br><small>Tenant</small><br><small class="controls__note">Roadmap item only; no Learn page describes it yet.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Today's control is membership of the EDM_DataUploaders security group, managed in the Microsoft 365 admin center or with Microsoft Graph. It governs who can use the EDM Upload Agent to upload; it is not the RBAC option the roadmap describes.

The RBAC row is empty because Microsoft Learn documents no RBAC role or API for EDM upload authorisation at the time of writing (November 2026).

## Open questions

- Which roles or role groups will authorise EDM uploads, and which Purview or Entra role can assign them? Watch the EDM hash-and-upload page on Microsoft Learn.
- Will the EDM_DataUploaders group keep working alongside RBAC, or does choosing RBAC replace it? Watch Message center.
- Does the EDM Upload Agent's authorisation step change when RBAC is used?
- Will the roadmap target of December CY2025 be updated, given that it has passed?
- Is there a licence or meter specific to this option? Watch the Microsoft 365 licensing guidance.

<!-- rationale
risk: Low. The roadmap describes an optional way to authorise uploads of EDM source data; it does not describe new data access, and Learn documents no RBAC detail yet. Rated on today's group-based method continuing.
cost: Low. The only cost the sources show is admin time to change who may upload; a licence statement specific to this change is not yet published.
impact: Low. Only the administrators and data stewards who hash and upload EDM source tables would notice; end users do not.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState / default: The planned RBAC control is admin-opt-in. | Found: Searched: "exact data match" "RBAC" "default"; "EDM" "RBAC" upload authorization. Read the roadmap, EDM hash-and-upload, EDM overview and Purview permissions pages; none states an administrator enablement requirement or the control's arrival default. | Fix: Set defaultState to "unknown". Add: "Microsoft has not stated the RBAC control's default on arrival; no source says existing behaviour changes." Keep the review action and the risk rationale based on today's behaviour continuing.
- [unsupported, major] Why it matters / behaviour: Today's EDM upload security group sits outside the Purview role model. | Found: Searched: exact data match EDM upload RBAC authorization role EDM_DataUploaders permissions audit. Read EDM hash-and-upload and Purview permissions; the former requires group membership, but neither explicitly describes the group's architectural relationship to the Purview role model. | Fix: Replace "Today that right is a membership list in a security group, which sits outside the Purview role model" with "Today's documented upload authorisation relies on membership of the EDM_DataUploaders security group."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and licensing.notes; Cost and licensing / licensing: Licensing is unknown because nothing specific to RBAC upload authorisation is published. | Found: EDM-based classification is included in these subscriptions: Office 365 E5; Microsoft 365 E5; Microsoft Purview Suite (formerly known as Microsoft 365 E5 Compliance); Microsoft E5/A5 Information Protection and Governance | Fix: Set licensing.model to "included" under the standard's product-level licensing rule. Add to the notes and Cost and licensing: "EDM-based classification is included in Office 365 E5, Microsoft 365 E5, Microsoft Purview Suite (formerly known as Microsoft 365 E5 Compliance), and Microsoft E5/A5 Information Protection and Governance. Nothing specific to RBAC upload authorisation is published." Cite https://learn.microsoft.com/purview/sit-edm-notifications-activities. Do not claim that a separate RBAC entitlement has been confirmed. | Source: https://learn.microsoft.com/purview/sit-edm-notifications-activities
- [supported, minor] Why it matters / behaviour: Purview already uses a role-based approach to permissions elsewhere. | Found: The Microsoft Purview portal uses the role-based access control (RBAC) permissions model. | Fix: Add https://learn.microsoft.com/purview/purview-permissions to sources to support the statement about Purview's existing role-based permissions model. | Source: https://learn.microsoft.com/purview/purview-permissions
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The governance checklist's instruction to review administrator-role holders has a corresponding controls row. | Found: Review who holds Groups Administrator, User Administrator and Global Administrator ... Controls rows: Who may upload EDM data today: EDM_DataUploaders security group membership; RBAC authorisation of EDM uploads (planned). | Fix: Remove the Before rollout bullet "Review who holds Groups Administrator, User Administrator and Global Administrator, because those roles can change the group." It asks readers to review role assignments, which neither controls row covers; do not add a new row in this correction.
-->
