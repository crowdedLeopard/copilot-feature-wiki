---
title: "Microsoft Purview DLP: matched sender, recipient, subject and attachment conditions in Exchange Online alerts"
slug: "microsoft-purview-data-loss-prevention-enriched-audit-data-for-matched-rules"
roadmapId: 562051
topic: "governance"
products: ["Microsoft Purview"]
summary: "Exchange Online DLP alerts and Activity Explorer events now show which non-SIT conditions matched, such as sender domain or attachment extension. Analysts see more detail; no setting is documented, so the action is to brief them."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's service description lists the licences that give DLP for Exchange Online, and says Activity Explorer needs E5/A5/G5 licensing. No licence or price specific to this detail is published."
audiences: ["compliance","security"]
tags: ["purview","dlp","exchange","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 562051"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562051"
    kind: "roadmap"
  - title: "Get started with activity explorer"
    url: "https://learn.microsoft.com/purview/data-classification-activity-explorer"
    kind: "learn"
  - title: "Data loss prevention Exchange conditions and actions reference"
    url: "https://learn.microsoft.com/purview/dlp-exchange-conditions-and-actions"
    kind: "learn"
  - title: "Get started with the Data Loss Prevention Alerts dashboard"
    url: "https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["auditing","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-data-loss-prevention-rule-based-tagging-and-auto-resolution-of-alerts-ba","microsoft-purview-data-loss-prevention-user-based-aggregation-of-dlp-alerts-564765"]
controls:
  - governs: "Whether the unified audit log, the data source for Activity Explorer, records activity"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Needs the Audit Logs role in Exchange Online. Run in Exchange Online PowerShell. On by default except for SMB licences and unmanaged tenants on free trials of enterprise licences, which need manual enablement."
  - governs: "Searching the audit records that feed Activity Explorer"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Read-only: it finds records and does not change this feature."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-23"
    note: "First briefing: Exchange Online DLP alerts and Activity Explorer now show matched non-SIT conditions; no on/off setting is documented."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: auditing default now notes the free-trial exception, the rule-actions sentence is attributed to Microsoft's description, and two checklist steps without table rows were removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "adfdcb18c0c5169558c7488d489dcb2c"
---

## What's changing

When an Exchange Online DLP policy matches a message, the DLP alert and the Activity Explorer event now list every non-sensitive information type (non-SIT) condition that contributed to the match, not only the sensitive information types (SITs) found. Each condition is shown with its name (for example, *Sender domain is*), the matched value (for example, `contoso.com` or `.docx`) and the source, meaning the part of the message where the match was found, such as the header, envelope or attachment.

Microsoft Learn lists the supported conditions by category: sender, recipient, attachment, content, header and message property conditions. These include Sender domain is, Recipient domain is, Attachment's file extension is and Subject contains words. The detail appears on the event detail flyout in Activity Explorer and in the **Other matched conditions** section on the **Events** tab of a DLP alert.

The roadmap item describes the change as extending audit records, which previously showed only SIT matches, to include sender domain, subject keywords, attachment type or recipient information. Microsoft has not stated whether this is on by default. The roadmap status is Launched, with a preview date of May CY2026 and a target of June CY2026, and lists General Availability and Preview as release phases. The Learn sections that describe the detail are still headed "(preview)", so confirm which applies before you rely on it. The roadmap lists Worldwide (Standard Multi-Tenant) only.

## Why it matters

Analysts working an Exchange DLP alert can see the exact condition and value that caused the match, which shortens investigation and helps with policy tuning: a rule that fires on a common sender domain or attachment extension shows itself in the alert. This is the wiki's reading of the benefit the roadmap describes.

Because Microsoft has not stated a default, no source says existing behaviour changes for policies that do not match; the change shows up in alerts and events that are generated after it reaches your tenant. Plan to tell your alert reviewers that the **Other matched conditions** view now carries more, and that matched values come from message content and addresses.

## Risk assessment

**Data exposure**
- Matched values such as recipient domains, subject keywords and attachment extensions now appear in the alert and in Activity Explorer. Anyone who can open the alert's **Events** tab or Activity Explorer can read them, so review who holds the *Manage alerts* role with *DLP Compliance Management*, and the Activity Explorer role groups.
- Alerts stay visible for as long as the organisation's audit log retention policy allows, so the matched values stay readable for that period.

**Security & identity**
- No change described to how DLP rules evaluate or act on mail. The detail explains a match that has already happened.
- Turning auditing off makes audit log searches return no results, and Activity Explorer takes its data from the unified audit log, so keep auditing on (see the controls table).

**Autonomy & actions**
- No autonomous action is described. Microsoft describes the feature as adding detail to alerts and events; it describes no change to rule actions.

**Change & support**
- Expect questions from analysts about new fields in **Other matched conditions** and the three levels of detail. Activity Explorer is not real time: Microsoft says to allow 60 to 90 minutes for Exchange activity to appear, so an empty view soon after a test is not proof of failure.

## Cost and licensing

Microsoft's Purview service description lists the licences that give users DLP for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2) and Exchange Online Plan 2, among others. The same page says Activity Explorer requires E5/A5/G5 licensing, while the underlying data aggregation continues for E3/A3/G3 tenants.

No meter is documented for this feature at the time of writing (November 2026), and no licence or price specific to the enhanced matched conditions is published. The indirect cost is analyst time and, if your audit retention is short, the loss of alert history sooner.

## Scope

The feature applies to Exchange Online DLP events. The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn describes the detail for Exchange Online DLP policy matches only; this page does not cover other DLP locations.

Viewing alerts needs the *Manage alerts* role plus either *DLP Compliance Management* or *View-Only DLP Compliance Management*. Activity Explorer lists role groups including Information Protection, Information Protection Investigators and Information Protection Analysts. Activity Explorer reports on up to 30 days of data, and the data comes from the Microsoft 365 unified audit log.

## Governance guidance

### Before rollout
- Confirm that auditing is on for the organisation, using the Audit row in the controls table; Activity Explorer reads from the unified audit log, and Business Premium and other SMB licences do not have auditing on by default.

### At rollout
- Brief DLP analysts on the **Other matched conditions** section on the alert's **Events** tab and on the condition name, matched value and source fields.
- Trigger a test message against an Exchange rule that uses a non-SIT condition such as Sender domain is, then look for the event in Activity Explorer after 60 to 90 minutes.

### After rollout
- Use the matched values to tune rules that fire on common sender domains or attachment extensions, and record the change for the DLP policy owner.
- Search the unified audit log for the same event to see what the audit record itself carries.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the unified audit log, the data source for Activity Explorer, records activity</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs role in Exchange Online. Run in Exchange Online PowerShell. On by default except for SMB licences and unmanaged tenants on free trials of enterprise licences, which need manual enablement.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching the audit records that feed Activity Explorer</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Read-only: it finds records and does not change this feature.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn describes no setting to turn the enhanced detail on or off at the time of writing (November 2026), so the controls here govern the data it comes from and who can read it. Auditing is the data source for Activity Explorer; turning it off stops audit search from returning results.

Turning auditing on or off needs the *Audit Logs* role in Exchange Online, held by default by the *Compliance Management* and *Organization Management* role groups. Searching the audit log needs the *Audit Logs* or *View-Only Audit Logs* roles. Access to DLP alerts is by the roles listed under Scope.

## Open questions

- Is the enhanced detail on by default for every Exchange DLP policy, and is there an admin setting for it? Watch the Learn pages for Exchange conditions and Activity Explorer, and Message center.
- Do the matched condition details appear in the audit records you search with Search-UnifiedAuditLog, as the roadmap description implies, or only in alerts and Activity Explorer?
- The roadmap shows General Availability and Learn headings still say preview: which applies to the enhanced matched conditions?
- Does the E5/A5/G5 requirement that Microsoft states for Activity Explorer apply to viewing these details in an E3 tenant?

<!-- rationale
risk: Low. Microsoft's pages describe extra detail on alerts and Activity Explorer events for Exchange Online DLP matches, not a new enforcement action; the detail is shown to the roles that open those views.
cost: Low. No separate licence or meter for this detail is published; the cost is analyst time to learn the new fields. DLP for Exchange Online and Activity Explorer follow their existing licence pages.
impact: Low. Compliance and security staff who work DLP alerts and Activity Explorer notice it; mail senders and recipients see no change described.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist's instruction to tune DLP rules is covered by the controls table. | Found: Checklist: Use the matched values to tune rules that fire on common sender domains or attachment extensions. Table: Whether the unified audit log ... records activity; Searching the audit records that feed Activity Explorer. | Fix: Remove the After rollout bullet beginning 'Use the matched values to tune rules': DLP rule configuration has no row in the controls table. Do not add a control row as part of this correction.
-->
