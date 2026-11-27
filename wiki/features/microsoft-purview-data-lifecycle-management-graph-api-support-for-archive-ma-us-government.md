---
title: "Microsoft Purview: Microsoft Graph APIs for archive mailboxes as EWS retires (GCC, GCC High and DoD)"
slug: "microsoft-purview-data-lifecycle-management-graph-api-support-for-archive-ma-us-government"
roadmapId: 573701
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans Graph access to main and auxiliary archive mailboxes in GCC, GCC High and DoD, targeted for December CY2026, as EWS is disabled. Owners of EWS-based archive tools should plan migration; Learn's Graph tables mark L4 and L5 unavailable."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Each user who accesses Exchange Online Archiving needs an Exchange Online Archiving subscription, included in plans such as Exchange Online Plan 2 and Microsoft 365 E3 and E5, or added on to others. A licence or meter specific to the Graph archive APIs is not yet published."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","data-lifecycle-management","exchange","microsoft-graph","ediscovery","migration","data-export","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 573701"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573701"
    kind: "roadmap"
  - title: "Use mailbox import and export APIs with archive mailboxes (preview)"
    url: "https://learn.microsoft.com/graph/work-with-archive-mailboxes"
    kind: "learn"
  - title: "Microsoft Graph national cloud deployments"
    url: "https://learn.microsoft.com/graph/deployments"
    kind: "learn"
  - title: "Deprecation of Exchange Web Services in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/deprecation-of-ews-exchange-online"
    kind: "learn"
  - title: "Handle archive mailbox redirects"
    url: "https://learn.microsoft.com/graph/handle-archive-mailbox-redirects"
    kind: "learn"
  - title: "Overview of the mailbox import and export APIs in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/mailbox-import-export-concept-overview"
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
  - title: "Exchange Online Archiving service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/exchange-online-archiving-service-description/exchange-online-archiving-service-description"
    kind: "learn"
  - title: "Exchange Web Services (EWS) usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/ews-usage"
    kind: "learn"
  - title: "Working with Microsoft 365 usage reports in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/api/resources/report"
    kind: "learn"
  - title: "Baseline security mode settings"
    url: "https://learn.microsoft.com/microsoft-365/baseline-security-mode/baseline-security-mode-settings"
    kind: "learn"
  - title: "Control access to EWS in Exchange"
    url: "https://learn.microsoft.com/exchange/client-developer/exchange-web-services/how-to-control-access-to-ews-in-exchange"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-graph-api-support-for-archive-mailboxes","microsoft-purview-data-lifecycle-management-increase-in-expansion-limit-for-us-government"]
controls:
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
    note: "Governs EWS, not the Graph archive APIs. The EwsEnabled behaviour changes in October 2026. Disabling EWS in the organisation also disables per-user EWS overrides."
  - governs: "Which applications still call EWS (usage report)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Reports > Exchange > EWS usage"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/ews-usage"
    api: null
    note: "Read-only report of SOAP actions per application ID; data is weekly and can take up to 10 days to appear."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-27"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-20"
    note: "First briefing for the GCC, GCC High and DoD roadmap item: Graph archive mailbox APIs as EWS is disabled, with Learn's US Government cloud tables noted."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the GCC cloud mapping: Graph's national cloud documentation places GCC on the worldwide endpoint, GCC High on L4 and DoD on L5."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the Worldwide item 567313's status to Launched; noted that Microsoft's preview archive guide shows HTTP 308 where the redirects page shows 409 for import-session mismatches, and that the guide is marked preview."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 83 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-27"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 83
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "21625141f0753e9ab19b1fea627a48e6"
---

## What's changing

Roadmap item 573701 plans Microsoft Graph access to archive mailboxes, both the main archive and the auxiliary archives that auto-expanding archiving creates, for GCC, GCC High and DoD. The roadmap description gives the goal as a single, seamless archive view even though archive data may physically sit across several auxiliary mailboxes, with the EWS APIs being deprecated. Microsoft Learn has no page for this item in these clouds, so what the item will do in them is the roadmap's description; the behaviour below is what Learn documents for the Graph APIs in general.

Learn's page on archive mailbox redirects says a folder can appear in the main archive while its contents sit in an auxiliary archive. The API then returns a redirect such as HTTP 308 Permanent Redirect, an `ErrorArchiveFolderMovedPermanently` error on export, or an HTTP 409 Conflict on import, and the app repeats the request against the mailbox the response names. Microsoft's preview guide at https://learn.microsoft.com/graph/work-with-archive-mailboxes instead illustrates this import-session mismatch with HTTP 308 and `ErrorArchiveFolderMovedPermanently`; the Learn examples disagree on the response code. The same redirects page says well-known folder names are not supported for archive mailboxes, so apps reference archive folders by folder ID, and its examples use `/beta/` endpoints. Microsoft's archive import/export guide describes this workflow as preview; the roadmap item's General Availability release phase is the record's plan, not the status of that documentation.

Learn's Graph reference pages for exporting items and listing folders carry a national cloud table that marks the Global service as available and US Government L4 and US Government L5 (DOD) as not available. Learn's EWS deprecation page lists "Sovereign Cloud availability" for the Exchange workload APIs needed for EWS migration with a Q4 CY2026 estimate, and calls such dates targets that might change. Microsoft Graph's national cloud documentation places GCC on the worldwide endpoint, GCC High on US Government L4 and DoD on US Government L5. This endpoint mapping does not establish the GCC rollout date for archive access; the roadmap still targets December CY2026.

The roadmap record shows status In development, targeted for December CY2026, release phase General Availability, platform Web. Microsoft lists the feature under a second roadmap item, 567313, for Worldwide (Standard Multi-Tenant), which the current record shows as Launched with an October CY2026 target; [that item has its own briefing](/features/microsoft-purview-data-lifecycle-management-graph-api-support-for-archive-mailboxes/). Learn's EWS deprecation page says EWS starts to be disabled globally for all organizations in October 2026 and is fully disabled in April 2027.

## Why it matters

This is a migration deadline more than an optional feature. Any eDiscovery, records, backup or export tool that reaches archive mailbox content through EWS is exposed, and Microsoft's timeline has EWS disabling from October 2026, before this item's December CY2026 target. In these clouds the replacement route is still a plan, and Learn's Graph reference currently lists US Government L4 and L5 (DOD) as unavailable for the archive-capable mailbox APIs.

Microsoft has not stated what happens on arrival or whether a tenant switch governs the Graph archive APIs, so base your planning on no source saying existing behaviour changes. The practical task is to find which tools still call EWS against archives, get a migration plan and a cloud-availability answer from each owner or vendor, and decide how to cover the gap if the Graph APIs reach your cloud later than EWS goes.

## Risk assessment

**Data exposure**
- Learn's export reference lists the application permissions MailboxItem.Export.All and MailboxItem.ImportExport.All. Review which apps hold them before archives come into scope, because full-fidelity export reaches mailbox content.
- Learn's overview says the import and export APIs are not designed for mailbox backup and restore, so a Graph export is not a substitute for a backup tool.

**Security & identity**
- Learn notes that user-agent based EWS blocking also impacts connections that use REST or Graph, so an EWS allow or block list can interfere with a migrated app.

**Autonomy & actions**
- Import calls write items into archive folders. An import into a folder held in an auxiliary archive returns HTTP 409 (HTTP 308 in the preview guide's example) until the app creates a new import session against the mailbox the error names; apps that do not handle this fail on those folders.

**Change & support**
- An application that still calls EWS can be blocked once Microsoft disables EWS for the tenant. If the Graph archive APIs are not yet available in your cloud at that point, the tool has no documented Graph route to move to.
- Learn's redirect examples use `/beta/` endpoints, while the v1.0 reference pages show the cloud table described above. Confirm with each developer which version and cloud their migration targets.

## Cost and licensing

Each user who accesses Exchange Online Archiving must have an Exchange Online Archiving subscription, according to the [Exchange Online Archiving service description](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-archiving-service-description/exchange-online-archiving-service-description). That page says Exchange Online Plan 2, Microsoft 365 Business Premium, Microsoft 365 E3 and Microsoft 365 E5, among others, already include archiving, and that Exchange Online Archiving is an add-on for plans such as Exchange Online Plan 1. A footnote says the plan list includes GCC, GCC-High and DoD plans for US Government. A licence or price specific to the Graph archive mailbox APIs is not yet published.

Microsoft's [Graph metering overview](https://learn.microsoft.com/graph/metered-api-overview) says standard APIs are available as part of the user licence within defined usage thresholds, and that high-capacity APIs, described as purpose-built bulk export or import endpoints, might be metered. The [metered API list](https://learn.microsoft.com/graph/metered-api-list) names one metered API at the time of writing (November 2026), `assignSensitivityLabel` at $0.00185 (USD) per API call; the mailbox import and export APIs are not on it. The overview also says metered APIs are available only in the Microsoft global environment and not in national cloud deployments, including GCC deployments accessed through the worldwide Graph endpoint.

The indirect cost is developer and vendor time to replace EWS calls and test against auto-expanding archives, plus any vendor upgrade fees, which Microsoft does not address.

## Scope

The roadmap record lists GCC, GCC High and DoD, platform Web, release phase General Availability, status In development and a December CY2026 target. The Worldwide equivalent is roadmap item 567313.

The change matters to organisations in these clouds whose applications, scripts or third-party tools use EWS to reach archive mailbox content, including tenants that use auto-expanding archiving. Learn's Graph reference lists application and delegated permissions for the mailbox APIs; the roles that grant consent to them are not covered here.

Learn marks US Government L4 and US Government L5 (DOD) as not available for the exportItems and list folders pages at the time of writing (November 2026). Microsoft Graph's national cloud documentation places GCC on the worldwide endpoint, GCC High on US Government L4 and DoD on US Government L5. This endpoint mapping does not establish the GCC rollout date for archive access; the roadmap still targets December CY2026.

## Governance guidance

### Before rollout
- Run the EWS usage report in the Microsoft 365 admin center and list each application ID and SOAP action that still calls EWS; the report is weekly and can take up to 10 days to show usage.
- Ask owners and vendors of eDiscovery, records, backup and export tools whether they use EWS against archives, and which cloud and Graph version their migration targets.
- Give developers Learn's pages on archive mailbox redirects and the mailbox import and export APIs, and the EWS-to-Graph mapping and EWS Analyzer that Learn's EWS deprecation page links.

### At rollout
- Test migrated apps against a mailbox with an auto-expanding archive, covering the 308 redirect, the `ErrorArchiveFolderMovedPermanently` export error and the 409 import response, once the APIs are available in your cloud.
- Check the organisation-wide EWS setting before changing it; disabling EWS stops integrations that have not migrated, so use it to test readiness or after migration.

### After rollout
- Re-run the EWS usage report until no archive-related application still appears.
- Watch the roadmap item and Learn's EWS deprecation page for changes to the Q4 CY2026 archive and sovereign cloud targets.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the organisation can use EWS</strong><br><small>Tenant</small><br><small class="controls__note">Governs EWS, not the Graph archive APIs. The EwsEnabled behaviour changes in October 2026. Disabling EWS in the organisation also disables per-user EWS overrides.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Settings › Org Settings › Security and Privacy › Baseline Security Mode › Authentication › Disable organization-wide access to Exchange Web Services (EWS) <a href="https://learn.microsoft.com/microsoft-365/baseline-security-mode/baseline-security-mode-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -EwsEnabled $false</code> <a href="https://learn.microsoft.com/exchange/client-developer/exchange-web-services/how-to-control-access-to-ews-in-exchange" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which applications still call EWS (usage report)</strong><br><small>Tenant</small><br><small class="controls__note">Read-only report of SOAP actions per application ID; data is weekly and can take up to 10 days to appear.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Reports › Exchange › EWS usage <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/ews-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These rows cover EWS, the route being retired, because Microsoft Learn documents no tenant setting that turns the Graph archive APIs on or off at the time of writing (November 2026). Neither row governs the Graph archive APIs themselves.

The EWS usage report is read-only. The organisation-wide EWS setting is set with Set-OrganizationConfig; Learn's control-access page says disabling EWS in the organisation also disables per-user EWS overrides, and that the way the EwsEnabled parameter operates changes in October 2026.

Application access to the Graph mailbox APIs is governed by the Graph permissions on each API's reference page, for example MailboxFolder.Read.All on List folders and MailboxItem.Export.All on exportItems.

## Open questions

- When will the Graph archive mailbox APIs be available in GCC, GCC High and DoD, given that Learn's exportItems and list folders pages currently mark US Government L4 and L5 as not available and the EWS deprecation page lists sovereign cloud availability for Q4 CY2026? Watch the roadmap item and those pages.
- When will archive access reach GCC, given that Microsoft Graph's national cloud documentation places GCC on the worldwide endpoint and that mapping does not establish the GCC rollout date? Watch the roadmap item.
- Which Graph version will Microsoft support for archive mailbox access at General Availability: `/beta/`, as the redirect examples show, or `/v1.0/`?
- Will a licence or meter apply to the mailbox import and export APIs in these clouds? Watch Microsoft's Graph metered API list.
- Will any tenant-level setting govern the Graph archive APIs? Watch Message center and Learn.

<!-- rationale
risk: Medium. EWS starts to be disabled globally in October 2026, while Learn's Graph reference currently marks the archive-capable mailbox APIs as unavailable in US Government L4 and L5 (DOD), so EWS-based archive tools in GCC High and DoD may have no Graph route yet.
cost: Low. The cost the sources show is developer, vendor and admin time to migrate; archive mailboxes need an Exchange Online Archiving entitlement, and no licence or meter specific to these APIs is published.
impact: Medium. Administrators, developers and vendors of EWS-based eDiscovery, export and records tools notice first; end users notice only if one of those tools stops working.
-->
