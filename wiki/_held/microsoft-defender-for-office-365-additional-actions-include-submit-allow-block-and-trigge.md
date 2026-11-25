---
title: "Microsoft Defender for Office 365: submit, block and start automated investigations from advanced hunting"
slug: "microsoft-defender-for-office-365-additional-actions-include-submit-allow-block-and-trigge"
roadmapId: 488095
topic: "governance"
products: ["Microsoft Defender for Office 365"]
summary: "Security analysts can submit emails to Microsoft, add Tenant Allow/Block List entries and start automated investigations straight from advanced hunting results. Check who holds the permissions before analysts use it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Automated investigation and response (AIR) requires Microsoft Defender for Office 365 Plan 2, included in Microsoft 365 licences like E5 or as a standalone subscription. Licensing specific to these advanced hunting actions is not yet published."
audiences: ["security","m365-admin"]
tags: ["defender-for-office-365","advanced-hunting","defender-xdr","tenant-allow-block-list","auditing","least-privilege"]
sources:
  - title: "Microsoft 365 Roadmap 488095"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=488095"
    kind: "roadmap"
  - title: "Take action on advanced hunting query results"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-take-action"
    kind: "learn"
  - title: "Automated investigation and response (AIR) in Microsoft Defender for Office 365 Plan 2"
    url: "https://learn.microsoft.com/defender-office-365/air-about"
    kind: "learn"
  - title: "Microsoft Defender for Office 365 overview"
    url: "https://learn.microsoft.com/defender-office-365/mdo-about"
    kind: "learn"
  - title: "Allow or block URLs using the Tenant Allow/Block List"
    url: "https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-urls-configure"
    kind: "learn"
  - title: "Who can take email actions and start automated investigations from advanced hunting (unified RBAC) (Microsoft Defender portal)"
    url: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    kind: "learn"
  - title: "Who can take email actions and start automated investigations from advanced hunting (unified RBAC) (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    kind: "learn"
  - title: "Approval or rejection of remediation actions recommended by automated investigations (Microsoft Defender portal)"
    url: "https://learn.microsoft.com/defender-office-365/air-review-approve-pending-completed-actions"
    kind: "learn"
  - title: "Removal of Tenant Allow/Block List entries, including those added during submissions (Microsoft Defender portal)"
    url: "https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-files-configure"
    kind: "learn"
  - title: "Whether the unified audit log records activity, which AIR requires (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
videos: []
related: ["microsoft-defender-for-office-365-admins-can-hunt-on-calls-in-microsoft-teams","auditing","microsoft-defender-for-office-365-localized-default-mark-and-notify-email-template"]
controls:
  - governs: "Who can take email actions and start automated investigations from advanced hunting (unified RBAC)"
    scope: "user"
    ui:
      surface: "Microsoft Defender portal"
      path: "Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations"
      docs: "https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles"
    api:
      kind: "graph"
      call: "POST /beta/roleManagement/defender/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta"
    note: "Set Email & collaboration advanced actions (manage) and Response (manage). The Graph call assigns users to an existing role; body sets roleDefinitionId and principalIds. Enforced once unified RBAC is activated."
  - governs: "Approval or rejection of remediation actions recommended by automated investigations"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Actions & submissions > Action center > Pending"
      docs: "https://learn.microsoft.com/defender-office-365/air-review-approve-pending-completed-actions"
    api: null
    note: "AIR approves pending actions for malicious URL and file clusters automatically."
  - governs: "Removal of Tenant Allow/Block List entries, including those added during submissions"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Email & collaboration > Policies & rules > Threat policies > Rules > Tenant Allow/Block Lists > Files > entry > Delete"
      docs: "https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-files-configure"
    api:
      kind: "powershell"
      call: "Remove-TenantAllowBlockListItems -ListType FileHash -Ids <Identity value>"
      docs: "https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-files-configure"
    note: "Exchange Online PowerShell. URL entries are on the URLs tab and use -ListType Url."
  - governs: "Whether the unified audit log records activity, which AIR requires"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "The AIR page says audit logging is on by default."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-04-10T23:15:50"
changes:
  - date: "2026-11-25"
    note: "New briefing: submit, Tenant Allow/Block List and automated investigation actions from advanced hunting, with the roles, Action center and audit controls that govern them."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 55
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "4fb6856dddd90ab85b830c60a2c110cf"
---

## What's changing

Security analysts gain three more email actions in the **Take actions** wizard of advanced hunting (the query tool in the Microsoft Defender portal): submit to Microsoft, add Tenant Allow/Block List entries, and start an automated investigation. The roadmap item states that the security operations centre "will be able to do submissions and tenant level block and trigger investigation actions from Advanced Hunting".

Microsoft Learn already documents these options. On the advanced hunting page, after selecting query results and **Take actions**, **Submit to Microsoft** sends false positive or false negative emails to Microsoft, and as part of the submission the analyst can add URLs and URL domains, sender domains and file attachments to the Tenant Allow/Block List while Microsoft evaluates the submission. **Initiate automated investigation** starts an automated investigation on the email, sender, recipient or contact recipients. The page notes that the email actions also apply to custom detections, and that each action can be named and tracked in the Action center history using the Approval ID the wizard gives. The page carries a notice that some of its information relates to a prereleased product.

The roadmap record lists the item as In development for General Availability, with a target of June CY2025, on the Web platform in the Worldwide (Standard Multi-Tenant) cloud. Learn describing the actions while the record still says In development is a mismatch Microsoft has not explained; check the wizard in your own tenant.

## Why it matters

The Tenant Allow/Block List applies to the whole organisation, so an entry added from a hunting query changes mail filtering for every mailbox. An allow entry added during a false-positive submission lets through mail that filtering had caught; a block entry stops mail for everyone. Putting that next to a query result makes it faster to act, and easier to act on a mistaken result, so who holds the permission matters more than before.

No Microsoft source says anything changes for users when this arrives. Learn presents the actions as options an analyst with the right permissions chooses in the wizard. The work for an administrator is to check which roles grant those options and how the resulting entries and investigations are reviewed.

## Risk assessment

**Data exposure**
- **Submit to Microsoft** sends the selected emails to Microsoft for analysis. This is the existing submission route, now reachable from query results; decide whether analysts may submit messages that could hold sensitive content.

**Security & identity**
- Allow entries in the Tenant Allow/Block List affect filtering for the whole tenant. Learn documents the permissions for email remediation from advanced hunting (unified role-based access control (RBAC) **Email & collaboration advanced actions (manage)** and **Response (manage)**), but the advanced hunting page names no permission specifically for submissions and Tenant Allow/Block List entries made from the wizard. Review who holds these permissions (controls table, row 1).

**Autonomy & actions**
- An automated investigation queues remediation actions for security staff to approve. For malicious URL and file clusters, AIR approves the pending actions it generates automatically, so an investigation started from a query can lead to remediation without a person approving it. Other pending actions are approved or rejected in the Action center (row 2).

**Change & support**
- Expect more Tenant Allow/Block List entries created by analysts outside the Submissions page. Review the list and remove entries that are no longer needed (row 3). AIR requires audit logging to be turned on (row 4).

## Cost and licensing

- **Licence.** The AIR page says that to use automated investigation and response you must have Microsoft Defender for Office 365 Plan 2 licences, and describes Plan 2 as included in Microsoft 365 licences like E5 or as a standalone subscription. The Defender for Office 365 overview lists advanced hunting among the Plan 2 capabilities.
- **Meter.** No meter or per-action charge for these advanced hunting actions is documented at the time of writing (November 2026).
- **Indirect costs.** Admin time to review role assignments, Tenant Allow/Block List entries and pending actions in the Action center.
- **Not yet published.** Whether submissions and Tenant Allow/Block List entries made from advanced hunting need anything beyond Plan 2.

## Scope

- **Who:** security operations staff who run advanced hunting queries in the Microsoft Defender portal. Taking action on emails needs a Defender for Office 365 role to search and purge emails, or the unified RBAC permissions in the controls table.
- **Licence:** Microsoft Defender for Office 365 Plan 2 for automated investigation.
- **Query requirements:** **Submit to Microsoft** and **Initiate automated investigation** might be disabled if mandatory columns are missing from the results; blocking a URL or file needs the query joined to the URL or attachment tables.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists. Other clouds are not listed.
- **Platform:** Web.
- **Status:** In development, target June CY2025, General Availability.

## Governance guidance

### Before rollout
- Review which users hold **Email & collaboration advanced actions (manage)** and **Response (manage)** in Microsoft Defender unified RBAC, and narrow assignments to the analysts who should remediate email.
- Check whether Microsoft Defender unified RBAC is active for Email & collaboration in your tenant, because that decides whether the unified roles or the Email & collaboration role groups grant the actions.
- Confirm that audit logging is turned on in the Microsoft Purview portal, since AIR requires it.

### At rollout
- Ask analysts to give each action a remediation name and description in the wizard so it can be found in the Action center history.
- Agree who approves pending actions in the Action center after an automated investigation started from advanced hunting.

### After rollout
- Review the Tenant Allow/Block List for entries added through advanced hunting submissions and delete those no longer needed.
- Review the Action center history for actions taken from advanced hunting, filtering by Approval ID.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can take email actions and start automated investigations from advanced hunting (unified RBAC)</strong><br><small>User</small><br><small class="controls__note">Set Email &amp; collaboration advanced actions (manage) and Response (manage). The Graph call assigns users to an existing role; body sets roleDefinitionId and principalIds. Enforced once unified RBAC is activated.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Permissions › Microsoft Defender XDR › Roles › Create custom role › Choose permissions › Security operations <a href="https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/roleManagement/defender/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Approval or rejection of remediation actions recommended by automated investigations</strong><br><small>Tenant</small><br><small class="controls__note">AIR approves pending actions for malicious URL and file clusters automatically.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Actions &amp; submissions › Action center › Pending <a href="https://learn.microsoft.com/defender-office-365/air-review-approve-pending-completed-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removal of Tenant Allow/Block List entries, including those added during submissions</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell. URL entries are on the URLs tab and use -ListType Url.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Email &amp; collaboration › Policies &amp; rules › Threat policies › Rules › Tenant Allow/Block Lists › Files › entry › Delete <a href="https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-files-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-TenantAllowBlockListItems -ListType FileHash -Ids &lt;Identity value&gt;</code> <a href="https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-files-configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity, which AIR requires</strong><br><small>Tenant</small><br><small class="controls__note">The AIR page says audit logging is on by default.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Microsoft Learn documents no tenant-wide switch that turns these advanced hunting actions on or off at the time of writing (November 2026); access is decided by permissions.
- Unified RBAC permissions are enforced only once Microsoft Defender unified RBAC is activated. The AIR page says unified RBAC applies if **Email & collaboration > Defender for Office 365** permissions is Active, and that it affects the Defender portal only, not PowerShell. Otherwise the Email & collaboration role groups apply: starting an investigation needs a role group such as Security Administrator or Security Operator plus the **Search and Purge** role, which by default is assigned only to the Data Investigator or Organization Management role groups.
- Row 3 shows the **Files** tab; URL entries are on the **URLs** tab of the same page and use `-ListType Url`.

## Open questions

- Which permission governs **Submit to Microsoft** and the Tenant Allow/Block List entries made from the advanced hunting wizard, as distinct from move and delete actions? Watch the advanced hunting take-action page.
- What expiry do allow and block entries created from the advanced hunting wizard receive by default? Watch the Tenant Allow/Block List pages.
- Why does the roadmap still list the item as In development, with a June CY2025 target, while Learn documents the actions? Watch Message center and the roadmap item.
- Are submissions and allow or block entries made from advanced hunting recorded in the unified audit log, and under which activity names? Watch the Purview audit activities list.

<!-- rationale
risk: Medium. An analyst can add tenant-wide allow or block entries and start investigations from a query result; who can do so is decided by existing Defender roles, which need checking.
cost: Low. Automated investigation and response needs Microsoft Defender for Office 365 Plan 2, which also covers advanced hunting; no separate price or meter for these actions is published, so the known cost is admin time.
impact: Low. Only security operations staff who run advanced hunting queries and hold the right Defender permissions see the new actions.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / behaviour: An allow entry added during a false-positive submission lets through mail that filtering had caught. | Found: During mail flow or time of click, if messages containing the entities in the allow entries pass other checks in the filtering stack, the messages are delivered (all filters associated with the allowed entities are skipped). | Fix: Replace with: 'An allow entry created during a false-positive submission skips filters associated with the allowed entity; messages are delivered only if they pass the other checks in the filtering stack.' | Source: https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-urls-configure
- [contradicted, blocker] Open questions: permissions / absence: Which permissions govern submissions and Tenant Allow/Block List entries remains undocumented. | Found: Submit messages to Microsoft | Response (manage) ... Manage Tenant Allow/Block List entries | Detection tuning (manage) | Fix: Replace the question with: 'Microsoft documents Response (manage) for submitting messages and Detection tuning (manage) for managing Tenant Allow/Block List entries; advanced hunting actions require Response (manage) and Email & collaboration advanced actions (manage).' Cite https://learn.microsoft.com/defender-office-365/defender-office-365-unified-rbac-permissions. | Source: https://learn.microsoft.com/defender-office-365/defender-office-365-unified-rbac-permissions
- [contradicted, blocker] Open questions: expiry / absence: The default expiry of allow and block entries created through the hunting submission wizard is not published. | Found: By default, the following types of block entries expire after 30 days ... Domains and email addresses ... Files ... URLs. ... allow entries ... are kept for 45 days after the filtering system determines that the entity is clean | Fix: Replace the question with: 'Microsoft documents a 30-day default for domain/address, file and URL block entries, and retains allow entries for these entity types until 45 days after the filtering system determines they are clean.' Cite https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-about. Do not infer an unpublished exception for the hunting entry point. | Source: https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-about
- [contradicted, blocker] Open questions: audit / absence: Whether Tenant Allow/Block List activity is recorded in the unified audit log remains unconfirmed. | Found: Represents an audit record for Tenant Allow/Block List events. This resource captures information about these activities as part of the Microsoft 365 unified audit log. | Fix: Remove the uncertainty about whether Tenant Allow/Block List events are audited. Replace that part with: 'Microsoft documents Tenant Allow/Block List events in the Microsoft 365 unified audit log; which operation names distinguish entries created through advanced hunting?' Cite https://learn.microsoft.com/graph/api/resources/security-tenantallowblocklistauditrecord?view=graph-rest-1.0. | Source: https://learn.microsoft.com/graph/api/resources/security-tenantallowblocklistauditrecord?view=graph-rest-1.0
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Security & identity; rationale: risk / applicability: Tenant Allow/Block List entries govern filtering across the organisation, not just the analyst's mailbox. | Found: Users in the organization can't send email to these blocked domains and addresses. | Fix: Cite https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-about for the organisation-wide filtering statement. | Source: https://learn.microsoft.com/defender-office-365/tenant-allow-block-list-about
- [supported, minor] What's changing; Risk assessment: Data exposure / behaviour: These are existing email response actions newly reachable from advanced hunting. | Found: These actions, previously only available in Threat Explorer, are now accessible via custom queries in Advanced Hunting | Fix: Cite https://learn.microsoft.com/defender-office-365/defender-for-office-365-whats-new#october-2025 for the claim about the existing actions gaining an advanced hunting entry point. | Source: https://learn.microsoft.com/defender-office-365/defender-for-office-365-whats-new#october-2025
- [supported, minor] controls[1].note; Risk assessment: Autonomy & actions / behaviour: AIR automatically approves the actions it generates for malicious URL and file clusters. | Found: For these cluster types, AIR automatically approves the pending remediation actions it generates, which eliminates the need for manual intervention | Fix: Add: 'The AIR overview documents this exception, while the remediation-review page still says its example remediation actions are not taken automatically.' Cite https://learn.microsoft.com/defender-office-365/air-review-approve-pending-completed-actions alongside the AIR overview. | Source: https://learn.microsoft.com/defender-office-365/air-about
- [supported, minor] controls[3].note / default: The AIR page says audit logging is on by default. | Found: AIR in Defender for Office 365 Plan 2 requires that audit logging is turned on (it's on by default). | Fix: Append to the note: 'The auditing page qualifies this: auditing is not enabled by default for Business Basic, Business Standard, Business Premium or unmanaged tenants using enterprise free trials.' Cite https://learn.microsoft.com/purview/audit-log-enable-disable. | Source: https://learn.microsoft.com/defender-office-365/air-about
- [supported, minor] controls[0].ui / admin-path: The custom role path is Permissions > Microsoft Defender XDR > Roles > Create custom role > Choose permissions > Security operations. | Found: On the Permissions page, under Microsoft Defender XDR, select Roles > Create custom role. ... On the Choose permissions page ... Security operations | Fix: The path reaches the correct permission page but stops before assigning users. Append to the note: 'After configuring permissions, continue to Assign users and data sources > Add assignment to assign Employees and Data sources.' | Source: https://learn.microsoft.com/defender-xdr/create-custom-rbac-roles
- [supported, minor] controls[0].api; controls[0].note / command: POST /beta/roleManagement/defender/roleAssignments assigns principals to a role using roleDefinitionId and principalIds. | Found: POST /roleManagement/defender/roleAssignments ... "roleDefinitionId": "c2cf284d-6c41-4e6b-afac-4b80928c9034", ... "principalIds": | Fix: Append to the note: 'This Microsoft Graph API is beta; Microsoft does not support its use in production applications.' | Source: https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-beta
- [supported, minor] controls[1].ui / admin-path: Actions & submissions > Action center > Pending reaches the pending AIR action list. | Found: Actions & submissions > Action center > Pending tab. ... select an entry ... Investigation ID ... select the Pending actions tab | Fix: Extend the path to 'Actions & submissions > Action center > Pending > investigation > Pending actions > entry > Approve' and state in the note that Reject is the alternative action. | Source: https://learn.microsoft.com/defender-office-365/air-review-approve-pending-completed-actions
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every checklist control and explicitly described missing switch is represented in the controls table. | Found: Check whether Microsoft Defender unified RBAC is active ... Review the Action center history ... Microsoft Learn documents no tenant-wide switch ... The table has only role creation, pending approvals, file removal and auditing. | Fix: Remove the checklist bullet that checks RBAC activation and the bullet that reviews Action center history, and remove the separate prose claim about the absent tenant-wide switch if it is not represented by a row. Do not add new control rows as part of this correction.
-->
