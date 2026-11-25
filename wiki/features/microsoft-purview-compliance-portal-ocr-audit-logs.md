---
title: "Microsoft Purview: audit logs for OCR transactions in Exchange and Teams"
slug: "microsoft-purview-compliance-portal-ocr-audit-logs"
roadmapId: 502527
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap describes audit logs for each OCR scan in Microsoft Purview, in public preview for Exchange and Teams. Learn documents related OCR record types but does not identify them as this item's logs; check auditing is on."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2025"
previewDate: "September CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "OCR scanning needs Azure pay-as-you-go billing through Microsoft Syntex; Audit (Standard) is enabled by default with the appropriate subscription. The mixed model describes OCR scanning's Azure billing prerequisite and existing Audit subscription requirements, not a published separate charge or OCR-event-specific entitlement for this roadmap item. The OCR-event-specific audit tier is unpublished."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","auditing","ocr","exchange","teams"]
sources:
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Learn about auditing solutions in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/audit-solutions-overview"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "complianceExchangeOcrAuditRecord resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-complianceexchangeocrauditrecord?view=graph-rest-1.0"
    kind: "learn"
  - title: "cdpOcrBillingRecord resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-cdpocrbillingrecord?view=graph-rest-1.0"
    kind: "learn"
  - title: "auditRecordTypeDictionary resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-auditrecordtypedictionary?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create auditLogQuery"
    url: "https://learn.microsoft.com/graph/api/security-auditcoreroot-post-auditlogqueries?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 502527"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502527"
    kind: "roadmap"
videos: []
related: ["auditing","microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-sharepoi","microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr","microsoft-purview-compliance-portal-endpoint-data-loss-prevention-optical-character-recogn","sensitive-information-types"]
controls:
  - governs: "Which locations OCR scans, and so which OCR transactions occur"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "Configured by the Compliance admin. This controls OCR scanning. Select the locations where you want to scan images and the groups to include or exclude."
  - governs: "Searching audit records, including OCR records once they are documented"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "graph"
      call: "POST /v1.0/security/auditLog/queries"
      docs: "https://learn.microsoft.com/graph/api/security-auditcoreroot-post-auditlogqueries?view=graph-rest-1.0"
    note: "The Audit Search Graph API runs the same search programmatically. Needs the Audit Logs or View-Only Audit Logs role for the portal search."
  - governs: "Whether the unified audit log records activity for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Run in Exchange Online PowerShell; needs the Audit Logs role in Exchange Online. The banner appears only if auditing is off."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-03T23:00:02"
changes:
  - date: "2026-11-25"
    note: "First briefing for this item. Learn does not yet describe the OCR audit logs, so the page rests on the roadmap record and related Learn pages."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: retention and record-content gaps narrowed to what Learn states, and unsupported claims about OCR settings and billing removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 61
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "6826378854a85739813ded319a5223a2"
---

## What's changing

The roadmap item describes audit logs for each optical character recognition (OCR) transaction in Microsoft Purview. Its description states that the feature is "only available in Exchange and teams workload for public preview".

Microsoft Learn's OCR overview does not describe these audit logs, so what follows about their behaviour is the roadmap's description. Learn's Microsoft Graph reference does list an audit record type for Compliance Exchange OCR events, which it says is part of the Microsoft 365 unified audit log, and a separate type for Content Discovery Platform OCR billing events. Microsoft has not said whether either is what this item delivers.

For context, OCR scanning is an optional Purview feature that must be enabled at the tenant level. Each image scanned counts as one transaction, and each page of a PDF is charged separately. OCR can scan images in Exchange, SharePoint, OneDrive, Teams, Windows and macOS devices, so the roadmap's Exchange and Teams scope covers part of that list.

The record gives the status as In development, with a preview target of September CY2025 and a target of October CY2025, for Worldwide (Standard Multi-Tenant) on the web. Both targets have passed at the time of writing (November 2026), and the record was last modified on 2025-09-03. Microsoft has not stated whether the logging is on by default or how an administrator would turn it off.

## Why it matters

OCR is a metered feature, so a per-transaction audit trail is the kind of record a compliance team would want. This is the wiki's view and not something Microsoft has said: if the logs record each scan, they could show which locations and activity drive OCR use. Graph documents related OCR audit types with an auditData payload containing dynamicProperties, but does not enumerate their event-specific dynamic fields or link them to this roadmap item.

Microsoft has not stated what happens on arrival. No source says existing behaviour changes, and OCR scanning itself stays something a tenant must enable, so an administrator who does nothing sees no documented change today. Check now that auditing is on, because audit logs can only record what the audit service is recording.

## Risk assessment

**Data exposure**

- Graph documents related OCR audit types with an auditData payload containing dynamicProperties, but does not enumerate their event-specific dynamic fields or link them to this roadmap item. Before widening access, open a sample record in the Audit search and check what it holds. The audit search page requires the *Audit Logs* or *View-Only Audit Logs* role.

**Security & identity**

- Audit records are only available where auditing is on. Auditing isn't enabled by default for Small and Medium Business licences, so a tenant on those licences has to turn it on before any OCR audit logs can be searched.

**Autonomy & actions**

- No change described: the roadmap item covers logging of OCR transactions, not new scanning or enforcement.

**Change & support**

- The roadmap says public preview. Learn documents related Exchange OCR and CDP OCR billing record types, but does not identify them as this roadmap item's per-transaction logs. Expect fields and operation names to change, and avoid building alert rules or SIEM mappings on them until Microsoft documents them.
- The preview and release targets have passed with the item still In development. Do not promise a date to audit or compliance teams.

## Cost and licensing

**Licence.** The roadmap item names no licence for the audit logs. Learn says Audit (Standard) is enabled by default for all organisations with the appropriate subscription, and links the subscription requirements for Audit (Standard) and Audit (Premium). Which tier covers OCR audit records is not yet published.

**Meter.** OCR scanning itself is pay-as-you-go: the Global admin sets up billing through Microsoft Syntex, each image scanned counts as one transaction, and each PDF page is charged separately. The OCR overview points to the Syntex billing page for the price. Neither the OCR overview nor the audit overview describes a separate meter for the audit logs at the time of writing (November 2026).

**Indirect costs.** Retention is the other cost to plan for. Published unified-audit retention rules depend on the record's workload, originating identity and licensing. Non-user entity records have fixed one-year retention; Audit (Standard) user records have 180-day retention. Microsoft has not identified this roadmap item's originating identity or record mapping. How long an audit record stays searchable depends on the subscription and the licence assigned to users (see [Learn about auditing solutions in Microsoft Purview](https://learn.microsoft.com/purview/audit-solutions-overview)).

## Scope

- **Workloads:** the roadmap description says Exchange and Teams, for public preview.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant); web. The record lists no US Government cloud.
- **Release phase:** the record lists General Availability and Preview. Status is In development.
- **Prerequisites:** OCR must be enabled at the tenant level, and OCR settings are configured by the Compliance admin. Auditing must be on for audit records to be searchable.
- **Who can search:** people assigned the *Audit Logs* or *View-Only Audit Logs* role in the Microsoft Purview portal.

## Governance guidance

### Before rollout

- Confirm that auditing is turned on for the organisation, in the Microsoft Purview portal or by running `Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled` in Exchange Online PowerShell (controls table, row 3).
- Check whether OCR is enabled and which locations are selected, in Settings > Optical character recognition (OCR). Only Exchange and Teams are in the roadmap's preview scope (row 1).
- Assign the *Audit Logs* or *View-Only Audit Logs* role to the compliance staff who will review OCR audit records.

### At rollout

- Run an audit search over the days after the feature appears, filtered by the Exchange and Teams workloads, and note which record types and activities come back for OCR (row 2).
- Open a sample record and check its contents before sharing results outside the audit team.

### After rollout

- Check Microsoft's Audit log activities page and the Graph audit record reference for OCR operation names, and update saved searches when they appear.
- Review who holds the audit roles, and whether auditing is still on, as part of the regular compliance review.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which locations OCR scans, and so which OCR transactions occur</strong><br><small>Tenant</small><br><small class="controls__note">Configured by the Compliance admin. This controls OCR scanning. Select the locations where you want to scan images and the groups to include or exclude.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records, including OCR records once they are documented</strong><br><small>Tenant</small><br><small class="controls__note">The Audit Search Graph API runs the same search programmatically. Needs the Audit Logs or View-Only Audit Logs role for the portal search.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/auditLog/queries</code> <a href="https://learn.microsoft.com/graph/api/security-auditcoreroot-post-auditlogqueries?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Run in Exchange Online PowerShell; needs the Audit Logs role in Exchange Online. The banner appears only if auditing is off.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn describes no separate setting for OCR audit logging at the time of writing (November 2026). The documented control for audit recording generally is the unified audit log switch in row 3. Turning auditing off means audit log searches in the Microsoft Purview portal return no results.

Turning auditing on or off requires the *Audit Logs* role in Exchange Online. Searching requires the *Audit Logs* or *View-Only Audit Logs* role in the Microsoft Purview portal. The OCR settings in row 1 decide whether OCR scans happen at all.

## Open questions

- Which record type, operation names and properties will OCR audit records use, and when will they appear on Learn's Audit log activities page?
- Is the Exchange OCR audit record type in the Graph reference the one this item delivers, and does Teams have its own record type? Watch the roadmap item and the Graph audit record reference.
- Is OCR audit logging on by default, or does it need a setting, and does it follow the OCR tenant setting?
- Which originating identity and record mapping will OCR audit records use, so which retention rule applies, and is any charge added for them?
- The September and October CY2025 targets have passed with the item still In development: when will its status change?

<!-- rationale
risk: Low. The roadmap describes logging only; no source says it changes scanning or access. Its default is not stated, so this rates today's behaviour continuing.
cost: Low. The roadmap names no licence or charge for the logs, so the known cost is admin time. OCR scanning itself is billed per image through Azure pay-as-you-go.
impact: Low. Compliance and audit administrators who search the audit log would notice; the roadmap describes no change for end users.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist directs administrators to assign and review audit roles, but there is no control row for managing those assignments. | Found: Assign the *Audit Logs* or *View-Only Audit Logs* role to the compliance staff who will review OCR audit records. / Review who holds the audit roles / The table's rows cover OCR scanning, searching audit records and enabling unified audit logging. | Fix: Remove the Before rollout bullet beginning 'Assign the Audit Logs or View-Only Audit Logs role' and replace the After rollout bullet with 'Review whether auditing is still on as part of the regular compliance review.' The access-management checklist steps have no corresponding controls-table row; do not add a row as part of this correction.
-->
