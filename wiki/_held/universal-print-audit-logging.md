---
title: "Universal Print: audit records in the Microsoft Purview unified audit log"
slug: "universal-print-audit-logging"
roadmapId: 519573
topic: "modern-work"
products: ["Universal Print"]
summary: "Microsoft plans Universal Print audit records of print jobs and admin changes in the Purview unified audit log, targeted January CY2027. Learn already lists the activities. The default is not stated; check search roles and retention."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "January CY2027"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Universal Print is included with Microsoft 365 E3, E5 and F3, Windows 10/11 Enterprise E3 and E5, and Microsoft 365 Business Premium, or bought standalone; Learn says all features are included with every eligible licence. No separate licence or price for audit records is published."
audiences: ["compliance","security","m365-admin"]
tags: ["universal-print","auditing","purview","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 519573"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=519573"
    kind: "roadmap"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Microsoft services that support auditing"
    url: "https://learn.microsoft.com/purview/audit-supported-services"
    kind: "learn"
  - title: "Manage audit log retention policies"
    url: "https://learn.microsoft.com/purview/audit-log-retention-policies"
    kind: "learn"
  - title: "Get access to Universal Print"
    url: "https://learn.microsoft.com/universal-print/get-access-to-universal-print"
    kind: "learn"
  - title: "Configure tenant-wide settings using Azure Portal"
    url: "https://learn.microsoft.com/universal-print/reference/portal/settings"
    kind: "learn"
  - title: "auditLogRecord resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-auditlogrecord?view=graph-rest-1.0"
    kind: "learn"
  - title: "universalPrintManagementAuditRecord resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-universalprintmanagementauditrecord?view=graph-rest-1.0"
    kind: "learn"
  - title: "universalPrintPrintJobAuditRecord resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-universalprintprintjobauditrecord?view=graph-rest-1.0"
    kind: "learn"
  - title: "Office 365 Management Activity API schema"
    url: "https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-schema"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["auditing"]
controls:
  - governs: "Searching Universal Print audit records"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -Operations PrintJobCreated"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell. Operation names come from the Audit log activities page."
  - governs: "Whether unified audit log ingestion is on (all services, not only Universal Print)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Needs the Audit Logs role in Exchange Online. The portal banner turns auditing on; Learn gives Exchange Online PowerShell for turning it off."
  - governs: "Separate switch for Universal Print audit records"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-21"
    note: "New briefing: Universal Print audit records for the Purview unified audit log, with the activities Learn already lists and the audit controls that apply."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: record fields narrowed to the Universal Print-specific fields in auditData.dynamicProperties, with common auditLogRecord fields stated; retention wording clarified; two Before rollout checklist steps removed or narrowed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 66
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "3b852e19102cd978ac6108e7ae5f2d38"
---

## What's changing

The roadmap item describes audit records of key administrator and user activities in Universal Print, such as print job submissions, configuration changes and printer registrations. The records are to be available in the Microsoft Purview unified audit log for compliance and long-term record-keeping. The roadmap lists the status as In development, with a preview target of June CY2026 and a general availability target of January CY2027, for Worldwide, GCC, GCC High and DoD, on Desktop, Mac and Web. These are Microsoft's targets, not commitments.

Microsoft Learn already documents the activities. Its Audit log activities page lists Universal Print management activities (printers, connectors, printer shares, pull-print printers and tenant-level settings) and Universal Print print job activities. Examples are `PrinterRegistered`, `TenantPrintSettingsModified` and `PrintJobCreated`. Microsoft Graph also documents two record types, `universalPrintManagementAuditRecord` and `universalPrintPrintJobAuditRecord`, each returned as the auditData property of an auditLogRecord.

So the roadmap says In development while Learn describes the activities as recorded; this page does not decide which is current. Neither source says when records start to appear in a tenant or whether they appear by default. The Learn tables give each activity's name and a one-line description, and the Graph pages list only an inherited dynamicProperties property, so the Universal Print-specific fields inside auditData.dynamicProperties are not described on the two Graph payload pages. The enclosing auditLogRecord documents common fields including operation, objectId, userId and userPrincipalName ([auditLogRecord resource type](https://learn.microsoft.com/graph/api/resources/security-auditlogrecord?view=graph-rest-1.0)).

## Why it matters

For a compliance or security team, this puts printer registration, printer share access, tenant print settings and print job activity into the same Microsoft Purview audit log as other Microsoft 365 activity, so one search tool and one retention regime cover it. That is the roadmap's stated purpose: compliance and long-term record-keeping.

Microsoft has not stated what happens on arrival, and no source says existing printing behaviour changes. The practical work is therefore in the audit log, not in Universal Print: who may search it, whether auditing is switched on, and how long records are kept. Business Premium is a Universal Print eligible licence, and Learn says auditing is not enabled by default for it, so a tenant on that licence may have nothing to search until auditing is turned on.

## Risk assessment

**Data exposure**

- Print-job activities such as `PrintJobCreated`, `PrintJobDocumentUploaded` and `PrintJobDocumentFetched` are listed for the unified audit log. The Universal Print-specific fields inside auditData.dynamicProperties are not described on the two Graph payload pages, so run a test search and read a record before deciding who gets the Audit Logs or View-Only Audit Logs roles that searching requires.
- Restricted admins (those assigned administrative units) can search and export user-generated audit logs only within their units; unrestricted admins reach all audit logs. Check which kind of admin your auditors are.

**Security & identity**

- Administrator changes such as `TenantPrintSettingsModified`, `ShareAccessControlAllowAllEnabled` and `ConnectorRegistered` become searchable, and the search results show the user account that performed each activity. That is useful evidence for a review of who widened printer access.
- If auditing is off, searches of the audit log return no results. Learn says auditing is not enabled by default for Small and Medium Business licences, including Business Premium.

**Autonomy & actions**

- No change: the roadmap describes records of activity and no action taken on print jobs or printers.

**Change & support**

- Retention follows the audit licence: 180 days for users on non-E5 licences, and one year by default for Microsoft Entra ID, Exchange and SharePoint activity for E5 users. For retention beyond 180 days and up to one year in other services, an audit log retention policy and an Office 365 E5, Microsoft 365 E5, Microsoft Purview Suite or E5 eDiscovery and Audit add-on licence for the user generating the record are required ([Manage audit log retention policies](https://learn.microsoft.com/purview/audit-log-retention-policies)). Universal Print is not named among the one-year defaults, so confirm what applies before promising long-term record-keeping.
- Export is limited to 50,000 rows for Audit (Standard) and 1,000,000 rows for Audit (Premium). Print-job activity may need narrow searches by operation name.

## Cost and licensing

**Licence.** Learn says Universal Print is included with Commercial, Education and Government Microsoft 365 and Windows 10/11 Enterprise subscriptions, and can be bought standalone. For commercial tenants the eligible list is Microsoft 365 Enterprise E3, E5 and F3, Windows 10/11 Enterprise E3 and E5, Microsoft 365 Business Premium and Universal Print (standalone). The same page says all Universal Print features are included with every eligible licence ([Get access to Universal Print](https://learn.microsoft.com/universal-print/get-access-to-universal-print)).

**Audit retention.** How long a record is searchable depends on the Microsoft 365 licence assigned to users, as set out under Change & support above ([Search the audit log](https://learn.microsoft.com/purview/audit-search)). Any retention licence or policy needed for long-term keeping is a cost outside Universal Print.

**Not yet published.** A price or licence specific to Universal Print audit records is not yet published on the Universal Print licensing page. The indirect cost is admin time to set up roles, searches and retention.

## Scope

**Who and where.** The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the platforms Desktop, Mac and Web, with release phases General Availability and Preview. Rollout mechanics and per-user scope are not stated.

**Licences.** Users and administrators need a Universal Print eligible licence to print and manage printing. Searching the audit log needs the Audit Logs or View-Only Audit Logs role in the Microsoft Purview portal, or the same roles in the Exchange admin center for the audit cmdlets.

**Prerequisite.** Unified audit logging must be on. Learn says it is on by default for Microsoft 365 and Office 365 enterprise organisations.

## Governance guidance

### Before rollout

- Run `Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled` in Exchange Online PowerShell and confirm the value is `True`; turn auditing on if it is not (controls table, row 2).
- Check which licences your print users hold and what default audit retention they give.

### At rollout

- Make a test printer setting change and a test print job, wait for the records to be ingested, then search Microsoft Purview portal > Audit > Search by operation name (`TenantPrintSettingsModified`, `PrintJobCreated`) and note the fields each record carries.
- Compare the roadmap status with the Learn Audit log activities page, and note the date records first appear in your tenant.

### After rollout

- Save the operation-name searches your auditors use and export results within the Audit (Standard) or Audit (Premium) row limits.
- Review `TenantPrintSettingsModified` and printer share access activities on a schedule that matches your retention period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Searching Universal Print audit records</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell. Operation names come from the Audit log activities page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -Operations PrintJobCreated</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether unified audit log ingestion is on (all services, not only Universal Print)</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs role in Exchange Online. The portal banner turns auditing on; Learn gives Exchange Online PowerShell for turning it off.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for Universal Print audit records</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are tenant-wide audit controls that apply to every service in the unified audit log, not to Universal Print alone. Microsoft Learn documents no switch that turns Universal Print audit records on or off separately at the time of writing (November 2026), which is why row 3 has no surface.

Searching through the portal needs the Audit Logs or View-Only Audit Logs role; turning auditing on or off needs the Audit Logs role in Exchange Online. Learn says to turn auditing off with Exchange Online PowerShell. When auditing is off, portal searches and `Search-UnifiedAuditLog` return no results, and the Office 365 Management Activity API and Microsoft Sentinel cannot access the data. The Graph record types are descriptions of the data, not a control.

## Open questions

- When will Universal Print audit records appear in tenants, and are they on by default? The roadmap says In development with a January CY2027 target while Learn already lists the activities. Watch the roadmap item and Message center.
- Which Universal Print-specific printer and document fields are carried inside auditData.dynamicProperties? The Learn tables and the two Graph payload pages do not say. Watch the Audit log activities page.
- Which Record types entry selects these records in Audit > Search? The services summary omits Universal Print, but the Office 365 Management Activity API schema lists UniversalPrintPrintJob (377) and UniversalPrintManagement (427); their availability in the portal dropdown is not stated ([Office 365 Management Activity API schema](https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-schema)).
- Do Universal Print records fall under the 180-day default or the one-year default, and does a retention policy cover them? Watch the Manage audit log retention policies page.

<!-- rationale
risk: Low. The roadmap item describes audit records of existing Universal Print activity and states no change to how printing works; the open points are what each record contains and how long records are kept.
cost: Low. The only cost the sources show is admin time and any audit licensing already held; Universal Print's licensing page says all features are included with every eligible licence and publishes no separate audit charge.
impact: Low. Compliance and security administrators who search the audit log notice it; the roadmap item describes no change to what users see when they print.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Open questions: retention; Risk assessment: Change & support / absence: Whether Universal Print unified audit records receive the 180-day or one-year default remains unpublished. | Found: This default policy retains audit records that contain the value of AzureActiveDirectory, Exchange, OneDrive, and SharePoint for the Workload property ... Audit records for all other activities are retained for 180 days by default | Fix: Replace the final Open questions bullet with 'Universal Print unified audit records fall outside the listed one-year workload defaults and are retained for 180 days by default, unless a custom retention policy changes the duration.' Replace 'Universal Print is not named among the one-year defaults, so confirm what applies before promising long-term record-keeping' with that same sentence. Cite https://learn.microsoft.com/purview/audit-log-retention-policies. | Source: https://learn.microsoft.com/purview/audit-log-retention-policies
- [contradicted, blocker] Open questions: retention; Why it matters / absence: Whether an audit retention policy can cover Universal Print unified audit records remains undocumented. | Found: Record type: The audit record type the policy applies to. If you leave this property blank, the policy applies to all record types. | Fix: Remove 'and does a retention policy cover them?' from the final Open questions bullet. The existing Why it matters statement that the unified audit retention regime covers these records is supported: the cited retention page states that a policy with Record type left blank applies to all record types. Do not add a control row. | Source: https://learn.microsoft.com/purview/audit-log-retention-policies
-->
