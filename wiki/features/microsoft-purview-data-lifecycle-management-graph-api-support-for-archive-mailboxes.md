---
title: "Microsoft Purview: Microsoft Graph APIs for archive mailboxes as EWS retires"
slug: "microsoft-purview-data-lifecycle-management-graph-api-support-for-archive-mailboxes"
roadmapId: 567313
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Graph gains APIs for archive mailboxes, including auto-expanding archives, as Exchange Web Services is disabled. Integrations that read archives through EWS must migrate; Microsoft's act-by date of 1 October 2026 has passed."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Archive mailbox use requires an Exchange Online Archiving entitlement, included in plans such as Exchange Online Plan 2 and Microsoft 365 E3/E5, or available as an Exchange Online Archiving add-on for Exchange Online Plan 1. An API-specific licence or meter is not yet published."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","data-lifecycle-management","exchange","microsoft-graph","ediscovery","migration","data-export"]
sources:
  - title: "Microsoft 365 Roadmap 567313"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567313"
    kind: "roadmap"
  - title: "Deprecation of Exchange Web Services in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/deprecation-of-ews-exchange-online"
    kind: "learn"
  - title: "Handle archive mailbox redirects"
    url: "https://learn.microsoft.com/graph/handle-archive-mailbox-redirects"
    kind: "learn"
  - title: "Overview of the mailbox import and export APIs in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/mailbox-import-export-concept-overview"
    kind: "learn"
  - title: "Use the mailbox import and export APIs in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/api/resources/mailbox-import-export-api-overview"
    kind: "learn"
  - title: "mailbox: exportItems"
    url: "https://learn.microsoft.com/graph/api/mailbox-exportitems"
    kind: "learn"
  - title: "List folders"
    url: "https://learn.microsoft.com/graph/api/mailbox-list-folders"
    kind: "learn"
  - title: "Overview of metered APIs and services in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/metered-api-overview"
    kind: "learn"
  - title: "Metered APIs and services in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/metered-api-list"
    kind: "learn"
  - title: "Exchange Web Services (EWS) usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/ews-usage"
    kind: "learn"
  - title: "Baseline security mode settings"
    url: "https://learn.microsoft.com/microsoft-365/baseline-security-mode/baseline-security-mode-settings"
    kind: "learn"
  - title: "Block access to Exchange Web Services (EWS)"
    url: "https://learn.microsoft.com/microsoft-365/baseline-security-mode/block-access-exchange-web-services"
    kind: "learn"
  - title: "Control access to EWS in Exchange"
    url: "https://learn.microsoft.com/exchange/client-developer/exchange-web-services/how-to-control-access-to-ews-in-exchange"
    kind: "learn"
  - title: "Working with Microsoft 365 usage reports in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/api/resources/report"
    kind: "learn"
  - title: "Exchange Online Archiving service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/exchange-online-archiving-service-description/exchange-online-archiving-service-description"
    kind: "learn"
  - title: "MC1469565: Microsoft Purview | Data Lifecycle Management - Graph API Support for archive mailboxes"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1469565"
    kind: "message-center"
videos: []
related: ["microsoft-purview-data-lifecycle-management-increase-in-expansion-limit-for-auto-expanding"]
controls:
  - governs: "Which applications still call EWS (usage report)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Reports > Exchange > EWS usage"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/ews-usage"
    api: null
    note: "Read-only report of SOAP actions per application ID; data is weekly and can take up to 10 days to appear. Learn's Graph usage reports list has no EWS report."
  - governs: "Whether the organisation can use EWS"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Settings > Org Settings > Security and Privacy > Baseline Security Mode > Authentication > Disable organization-wide access to Exchange Web Services (EWS)"
      docs: "https://learn.microsoft.com/microsoft-365/baseline-security-mode/baseline-security-mode-settings"
    api:
      kind: "powershell"
      call: "Set-OrganizationConfig -EwsEnabled $false"
      docs: "https://learn.microsoft.com/exchange/client-developer/exchange-web-services/how-to-control-access-to-ews-in-exchange"
    note: "Needs Exchange Administrator or Global Administrator. The EwsEnabled behaviour changes in October 2026."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-18"
    note: "First briefing: Graph archive mailbox APIs arrive as EWS is disabled; Microsoft's 1 October 2026 act-by date has passed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 72 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the EWS timing, licensing (Exchange Online Archiving entitlement), EWS-setting scope wording and admin paths; removed two checklist steps without matching control rows."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 79
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e36458cb765e6e37b5c365efb3b01208"
---

## What's changing

Microsoft is adding Microsoft Graph support for archive mailboxes, both the main archive and any auxiliary archives that auto-expanding archiving creates, so that applications can keep reaching archive data after Exchange Web Services (EWS) in Exchange Online is disabled. The roadmap item describes the goal as a single, seamless archive view even though archive data may sit across several auxiliary mailboxes. Message Center post MC1469565 says Graph now supports importing and exporting mailbox data and managing archive mailbox folders, including auto-expanding archives.

Applications that work with an archive mailbox through Graph may have to handle redirects. Microsoft Learn explains that a folder can appear in the main archive while its contents sit in an auxiliary archive. The API then returns a redirect such as HTTP 308 Permanent Redirect, an `ErrorArchiveFolderMovedPermanently` error on export, or an HTTP 409 Conflict on import, and the app repeats the request against the mailbox the response names. The Learn page also says well-known folder names are not supported for archive mailboxes, so apps reference archive folders by folder ID.

Status on the roadmap record is Rolling out, targeted for October CY2026, General Availability, Worldwide (Standard Multi-Tenant), Web. MC1469565 gives a General Availability rollout window beginning in late October 2026 and expected to complete by early November 2026, and asks administrators to act by 1 October 2026 (48 days before today, 18 November 2026). It states that EWS in Exchange Online begins to be disabled globally in October 2026 and is expected to be fully disabled by April 2027.

Learn's EWS deprecation page lists "Import-Export (Archive)" and "In-Place Archive (Generic CRUD)" among the parity gaps with a Q4 CY2026 estimate, and calls such dates targets that might change. The same page says the In-Place Archive capability does not create archive mailboxes.

## Why it matters

This is a deadline-driven migration, not an optional feature. MC1469565 says applications and scripts that keep using EWS for archive mailbox operations stop working after EWS is disabled, and names eDiscovery, compliance and records management workflows, data lifecycle management solutions, backup and export tools and custom applications as examples. Its compliance table answers Yes to whether Purview-related export, eDiscovery, retention-related or data lifecycle workflows may be interrupted.

With the act-by date already past and EWS disablement having started in October 2026, the practical task is to find which of your tools still call EWS against archives, and to get a migration date from each owner and vendor. Microsoft has not stated what happens if nobody acts beyond the EWS disablement itself, and it has not stated whether the Graph APIs need any tenant-level switch.

## Risk assessment

**Data exposure**
- Graph's mailbox import and export APIs export items in full fidelity and import them into the same or a different mailbox. The export page lists the application permissions MailboxItem.Export.All and MailboxItem.ImportExport.All, so review which apps are granted them before archives are in scope.
- The Learn overview for these APIs says they are not designed for mailbox backup and restore, so do not treat a Graph export as a replacement for a backup tool.

**Security & identity**
- Learn notes that user-agent based EWS blocking also affects connections that use REST or Graph, so an EWS allow or block list can interfere with a migrated app.

**Autonomy & actions**
- Import calls write items into archive folders. An import into a folder held in an auxiliary archive returns HTTP 409 until the app starts a new import session against the mailbox the error names; apps that do not handle this fail on those folders.

**Change & support**
- Apps that stay on EWS stop working after EWS is disabled. Apps that move to Graph must handle redirects and use folder IDs, not well-known names, for archive folders.
- Learn's redirect examples use `/beta/` endpoints, and the v1.0 import and export reference describes support for primary and shared mailboxes, while the concept overview adds archive mailboxes. Treat the version you build against as something to confirm with each developer.

## Cost and licensing

Archive mailbox use requires an Exchange Online Archiving entitlement. The [Exchange Online Archiving service description](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-archiving-service-description/exchange-online-archiving-service-description) says each user who accesses the service must have an Exchange Online Archiving subscription. It lists plans that already include archiving, among them Exchange Online Plan 2, Microsoft 365 E3 and Microsoft 365 E5, and offers Exchange Online Archiving as an add-on for plans such as Exchange Online Plan 1. A licence or price specific to the Graph archive mailbox APIs is not yet published.

Microsoft's Graph metering page says standard APIs are available as part of the user licence within defined usage thresholds, and that high-capacity APIs, described as purpose-built bulk export or import endpoints, might be metered. Its metered list names one API at the time of writing, `assignSensitivityLabel` at $0.00185 (USD) per API call. The pages read do not say which category the mailbox import and export APIs fall in.

The cost the sources do show is indirect: developer and vendor time to replace EWS calls, testing against auto-expanding archives, and any vendor upgrade fees, which Microsoft has not addressed. EWS migration tools (EWS Analyzer and an AI-assisted migration tutorial) are named in MC1469565.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) only, platform Web, release phase General Availability. The Learn list-folders and export pages mark US Government and China operated by 21Vianet as not available for those APIs; the roadmap record does not list those clouds.

The change affects organisations whose applications, scripts or third-party tools use EWS to reach archive mailbox content, including tenants that use auto-expanding archives. Microsoft Purview, Exchange Online and Microsoft Graph are the services named in MC1469565. Learn's mailbox import and export documentation says the APIs reach mailboxes through application or delegated permissions; the specific roles that approve those permissions are not covered here.

## Governance guidance

### Before rollout
- Note that Microsoft's act-by date of 1 October 2026 has passed and EWS is being disabled from October 2026; treat the migration as in progress.
- Run the EWS usage report in the Microsoft 365 admin center and list each application ID and SOAP action that still calls EWS; the report refreshes weekly and can take up to 10 days to show usage.
- Ask owners and vendors of eDiscovery, records, backup and export tools whether they use EWS against archives and when they will move to Graph.
- Give developers the Learn pages on archive mailbox redirects and the mailbox import and export APIs, and the EWS-to-Graph mapping and EWS Analyzer that MC1469565 names.

### At rollout
- Test migrated apps against a mailbox with an auto-expanding archive, covering the 308 redirect, the `ErrorArchiveFolderMovedPermanently` export error and the 409 import response.

### After rollout
- Re-run the EWS usage report until no archive-related application still appears.
- Confirm with vendors that eDiscovery, export and retention-related jobs still complete.
- Watch the roadmap item and Learn's EWS deprecation page for changes to the Q4 CY2026 archive targets.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which applications still call EWS (usage report)</strong><br><small>Tenant</small><br><small class="controls__note">Read-only report of SOAP actions per application ID; data is weekly and can take up to 10 days to appear. Learn's Graph usage reports list has no EWS report.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Reports › Exchange › EWS usage <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/ews-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the organisation can use EWS</strong><br><small>Tenant</small><br><small class="controls__note">Needs Exchange Administrator or Global Administrator. The EwsEnabled behaviour changes in October 2026.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Settings › Org Settings › Security and Privacy › Baseline Security Mode › Authentication › Disable organization-wide access to Exchange Web Services (EWS) <a href="https://learn.microsoft.com/microsoft-365/baseline-security-mode/baseline-security-mode-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -EwsEnabled $false</code> <a href="https://learn.microsoft.com/exchange/client-developer/exchange-web-services/how-to-control-access-to-ews-in-exchange" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These rows document the EWS usage report and organisation-wide EWS blocking. Microsoft Learn documents no switch that turns the Graph archive APIs on or off for a tenant at the time of writing (November 2026).

The Microsoft 365 admin center setting to disable organisation-wide EWS access needs the Exchange Administrator or Global Administrator role. Learn's control-access page says disabling EWS for the organisation also disables per-user EWS overrides, and that the way the EwsEnabled parameter operates changes in October 2026. Disabling EWS before an archive integration has migrated stops it; use it to test readiness or after migration.

Application access to the Graph mailbox APIs is governed by the Graph permissions on each API's reference page, for example MailboxFolder.Read.All on List folders and MailboxItem.Export.All on exportItems.

## Open questions

- Which Graph version will Microsoft support for archive mailbox access at General Availability: `/beta/`, as the redirect examples show, or `/v1.0/`, whose import and export reference describes primary and shared mailboxes? Watch the Learn redirect and import and export pages.
- Does a licence or meter apply to the mailbox import and export APIs? Watch Microsoft's Graph metered APIs list.
- Does the Q4 CY2026 target for "Import-Export (Archive)" on Learn's EWS deprecation page differ from the late October to early November 2026 rollout in MC1469565, and which governs availability in your tenant?
- Does Microsoft require any tenant-level enablement for the archive APIs? Neither the roadmap item nor MC1469565 says; watch Message center for an update.

<!-- rationale
risk: Medium. EWS-based eDiscovery, export and records tools that read archive mailboxes stop working once EWS is disabled, which Microsoft says begins in October 2026.
cost: Low. The cost the sources show is developer and admin time to migrate. Microsoft has not published a licence or meter specific to these APIs; its Graph metered list names a single API, assignSensitivityLabel.
impact: Medium. Admins, developers and third-party vendors that run EWS-based archive integrations notice; users do not, unless one of those tools breaks.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: The EWS control-access page says organisation-wide disablement also disables per-user EWS overrides. | Found: Important: Disabling EWS in the organization also disables per-user EWS overrides. | Fix: After this sentence add: "The Baseline Security Mode EWS page instead says, 'You can still allow exceptions for specific users or workloads using Exchange Online PowerShell'; Microsoft's two pages disagree on exceptions." Cite https://learn.microsoft.com/microsoft-365/baseline-security-mode/block-access-exchange-web-services. | Source: https://learn.microsoft.com/exchange/client-developer/exchange-web-services/how-to-control-access-to-ews-in-exchange
-->
