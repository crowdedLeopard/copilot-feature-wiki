---
title: "Microsoft Purview Endpoint DLP: archive files classified as one object on Windows"
slug: "microsoft-purview-endpoint-data-loss-prevention-archive-file-classification-behavior-chang"
roadmapId: 570965
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP on Windows will classify .zip and .rar files as one object and report only the outer archive, not each file inside. No admin action is required, but event reports and alert rules may change."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint DLP as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite and the other plans named there. A licence or charge specific to this change is not published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","auditing","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 570965"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570965"
    kind: "roadmap"
  - title: "MC1474107: Microsoft Purview: Archive file classification behavior change for Endpoint Data Loss Prevention on Windows endpoints"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1474107"
    kind: "message-center"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Get started with activity explorer"
    url: "https://learn.microsoft.com/purview/data-classification-activity-explorer"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc","auditing","sensitivity-labels"]
controls:
  - governs: "Search of Endpoint DLP audit records before and after the change"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <ExDateTime> -EndDate <ExDateTime>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Read-only review, not a switch for the change. Needs the Audit Logs or View-Only Audit Logs role; the cmdlet runs in Exchange Online PowerShell."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-09-10T23:01:27"
changes:
  - date: "2026-11-19"
    note: "First briefing: Endpoint DLP on Windows will classify archives as one object and report only the outer archive file."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: the affected audience is now limited to organisations with archive file classification enabled, and three checklist items match Microsoft's notice."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fb2c5d6776a1ab72cb0312c01555486e"
---

## What's changing

Microsoft is changing how Microsoft Purview Endpoint Data Loss Prevention (DLP) on Windows endpoints classifies archive files such as .zip and .rar. According to Message Center post MC1474107, the archive is classified directly, as a single atomic operation, and only the outer archive file is reported in Endpoint DLP events. Files inside an archive no longer generate separate classification events. Microsoft says the change aligns Windows endpoints with classification behaviour across its cloud workloads, improves consistency, reduces event-reporting noise and improves performance.

Microsoft's notice says context-based and sensitivity label-based policy evaluation continue to apply to content within archive files, and that existing DLP policy behaviour for evaluating content within archives is unchanged. It says no administrator configuration changes and no user action are required. The notice names organisations that use Endpoint DLP on Windows endpoints with archive file classification enabled as the ones affected.

The roadmap item (ID 570965) has status In development, with a preview target of September CY2026 and a general availability target of October CY2026. MC1474107, published 2026-09-18, gives a Public Preview from late September 2026 to mid-October 2026 and a Worldwide General Availability rollout from late October 2026 to early November 2026, with an end date of 2026-12-07 and no act-by date. The roadmap record still read In development when it was last fetched, so confirm the rollout state in your own tenant. Microsoft Learn's Endpoint DLP page lists archive formats among the monitored files but does not describe the new behaviour at the time of writing (November 2026), so the behaviour above is taken from the notice and the roadmap description.

## Why it matters

The change reaches organisations using Endpoint DLP on Windows with archive file classification enabled without anyone choosing the update, and it alters what analysts see rather than what policies decide. Anything that relies on one event per file inside an archive, such as saved Activity explorer views, SIEM queries, alert thresholds or incident write-ups, will now see a single event for the outer archive.

If nobody acts, the policies keep evaluating archive content as before according to Microsoft's notice, but your monitoring and audit evidence will describe archives differently from older records. Brief your compliance and security teams before the new behaviour appears in their reports, and keep a note of the cut-over so that before-and-after event counts are not misread as a change in user behaviour.

## Risk assessment

**Data exposure**

- Microsoft's notice says policy evaluation of content inside archives is unchanged, and describes the change as affecting how archives are classified and reported. The notice does not say that any new data is read.
- Event detail narrows: the notice says only the outer archive file is reported, so an investigator can no longer expect a separate event naming a sensitive file inside the archive.

**Security & identity**

- No change to identity or roles is described. Reviewing the new events still needs the roles the Purview portal already requires for the tool you use.

**Autonomy & actions**

- No new automated action is described. The notice says context-based and sensitivity label-based evaluation continue to apply to content within archive files.

**Change & support**

- Reports, saved filters and alert rules that count or match events for files inside archives can return fewer or different results after the change. Microsoft's notice recommends updating monitoring procedures that reference individual event generation for files contained within archives.
- Helpdesk and incident teams may be asked why events for files inside an archive disappeared. Tell them the notice describes this as intended behaviour, and point them at MC1474107.

## Cost and licensing

The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and in Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. That is the licence entitlement for Endpoint DLP as a whole; a licence or charge specific to this change is not published.

The cost the sources show is indirect: admin time to update documentation, saved searches and alert rules, and the time to brief compliance and security teams. No meter or consumption charge is described in the roadmap record or the Message Center post.

## Scope

- **Who is affected:** per MC1474107, organisations using Endpoint DLP on Windows endpoints with archive file classification enabled. Microsoft's notice names .zip and .rar as examples.
- **Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Platform:** the roadmap record lists the platform as Web, while MC1474107 describes Windows endpoints and Endpoint DLP. Treat the notice as the more specific statement.
- **Release phase:** the roadmap record lists both Preview and General Availability; the notice gives a Public Preview and then a Worldwide General Availability rollout, with the dates given above.
- **Configuration:** the notice says no administrator configuration changes and no user action are required.

## Governance guidance

### Before rollout

- Identify reports that depend on separate classification events for files inside .zip or .rar archives.
- Review internal documentation that describes archive file classification, as MC1474107 recommends.
- Tell compliance and security teams that Endpoint DLP reporting will show events for the outer archive file instead of the individual files within it.

### At rollout

- Record the date the new behaviour reaches your tenant so that later event counts can be read against it.
- Run an Audit search (see the controls table) over a period either side of the change and compare Endpoint DLP activity for archive files, then confirm the results match what Microsoft's notice describes.

### After rollout

- Revise the monitoring procedures that referred to individual events for files contained within archives, as the notice recommends.
- Document any reduction in archive event counts in your change log.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Search of Endpoint DLP audit records before and after the change</strong><br><small>Tenant</small><br><small class="controls__note">Read-only review, not a switch for the change. Needs the Audit Logs or View-Only Audit Logs role; the cmdlet runs in Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;ExDateTime&gt; -EndDate &lt;ExDateTime&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says no administrator configuration changes are required, and this briefing does not list a setting that turns the new classification on or off. The control that bears on this change is the audit trail: use Audit search to review Endpoint DLP activity before and after the change.

Activity explorer, the other place analysts read endpoint events, takes its data from the Microsoft 365 unified audit logs (see its Learn page). The roles to search the audit log are the Audit Logs or View-Only Audit Logs roles in the Microsoft Purview portal.

## Open questions

- Which Endpoint DLP fields, such as the file name and matched content, will the event for an outer archive carry, and will it still show which file inside the archive matched a rule? Watch the Endpoint DLP pages on Microsoft Learn and MC1474107.
- On which date did the Worldwide rollout reach your tenant, given that the roadmap item read In development when last fetched and the notice gives late October to early November 2026? Watch the roadmap item for the status change.
- Does the same single-object behaviour apply to archive formats other than .zip and .rar, such as .7z and .tar, which the Learn Endpoint DLP page lists as monitored archive types? The notice gives .zip and .rar as examples.

<!-- rationale
risk: Low. Microsoft's notice says policy evaluation of content inside archives is unchanged; what changes is that events name the outer archive instead of the files inside it.
cost: Low. The only cost the sources show is admin time to update monitoring procedures and brief compliance teams; Endpoint DLP itself is listed as included in Microsoft 365 E5 and the other plans on the service description.
impact: Medium. Security and compliance analysts who read Endpoint DLP events will see one event for the outer archive where they may have seen events for files inside it; end users are asked to do nothing.
-->
