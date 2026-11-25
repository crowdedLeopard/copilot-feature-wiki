---
title: "Power Pages: site analytics and server logging configuration"
slug: "power-pages-administration-and-governance-configure-site-analytics-and-server-logging"
roadmapId: 578071
topic: "power-platform"
products: ["Power Pages"]
summary: "Makers will configure Application Insights analytics for page views, forms and sessions, and see server-side errors and access logs for a Power Pages site."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Azure Application Insights billing applies. Power Pages licensing for the feature is not yet published."
audiences: ["power-platform-admin","compliance","maker","service-owner"]
tags: ["power-pages","application-insights","analytics","server-logging","privacy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 578071"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578071"
    kind: "roadmap"
  - title: "Debug your Power Pages site with the DevTools extension"
    url: "https://learn.microsoft.com/power-pages/configure/devtools-addon"
    kind: "learn"
  - title: "Power Pages FAQs"
    url: "https://learn.microsoft.com/power-pages/faq"
    kind: "learn"
  - title: "View error logs"
    url: "https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging"
    kind: "learn"
  - title: "Monitor website traffic from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-analytics"
    kind: "learn"
  - title: "Configure site settings for Power Pages sites"
    url: "https://learn.microsoft.com/power-pages/configure/configure-site-settings"
    kind: "learn"
  - title: "Power Platform CLI support for Power Pages"
    url: "https://learn.microsoft.com/power-pages/configure/power-platform-cli"
    kind: "learn"
  - title: "Roles required for Power Pages administration"
    url: "https://learn.microsoft.com/power-pages/admin/admin-roles"
    kind: "learn"
  - title: "View Power Pages activity logs in Microsoft Purview"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages"
    kind: "learn"
  - title: "Application Insights Geolocation and IP Address Handling"
    url: "https://learn.microsoft.com/azure/azure-monitor/app/ip-collection"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Diagnostic logs for a site to Azure Blob storage"
    scope: "site"
    ui:
      surface: "Power Platform admin center"
      path: "Resources > Power Pages sites > site > Site Actions > Enable diagnostics logs"
      docs: "https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging"
    api: null
  - governs: "Site traffic analytics"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Products > Power Pages > Analytics (preview)"
      docs: "https://learn.microsoft.com/power-pages/admin/admin-center-analytics"
    api: null
    note: "Dynamics 365 admin, Power Platform admin, or System Administrator for their environments."
  - governs: "Site-level trace and debug logging"
    scope: "site"
    ui:
      surface: "Power Pages Management app"
      path: "Website > Site settings"
      docs: "https://learn.microsoft.com/power-pages/configure/configure-site-settings"
    api:
      kind: "pac-cli"
      call: "pac pages upload --path <site-folder> --modelVersion <model-version>"
      docs: "https://learn.microsoft.com/power-pages/configure/power-platform-cli"
    note: "Download the site, edit the UserTrace/Debug site setting, then upload. Upload deploys edited configuration; it is not a dedicated logging toggle."
  - governs: "Tenant-wide policy for analytics and server logging"
    scope: "tenant"
    ui: null
    api: null
    note: "A tenant-wide policy for this feature is not yet documented as of November 2026; the roadmap describes maker configuration per site, not a tenant-wide policy."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-23T22:46:07"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 578071 with related Learn logging guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the check: default state now maker-selected (user-opt-in, action review), PAC CLI route for the trace setting, tenant-wide policy note and closing controls paragraph."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 51 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 56 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 57 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 55
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "62460c884e79bff584664f22abe7b891"
---

## What's changing

Power Pages will gain integrated telemetry and analytics. The roadmap says makers can use Application Insights to monitor page views, form interactions, session details and client-side analytics, and can detect server-side errors, performance issues and access logs.

To configure site analytics, makers open the Set up workspace and add the analytics provider script. The feature is enabled by admins, makers or marketers for end users. Microsoft Learn documents no separate tenant administrator switch for this capability at the time of writing (November 2026), so enablement reads as maker-selected, not as a documented tenant admin gate.

Preview is listed for October CY2026 and general availability for February CY2027, in Worldwide, GCC, GCC High and DoD. Learn today describes diagnostic logging, the UserTrace/Debug site setting and the Power Pages DevTools extension for server-side errors.

## Why it matters

Visitor analytics on a public site is a privacy matter as well as an operational one. Owners need to decide on consent, retention and where the data lands.

Server logs help support teams resolve issues faster, but they may include request details that need protecting.

## Risk assessment

**Data exposure**
- Analytics scripts collect visitor behaviour and session data, which may be personal data in some jurisdictions.
- Application Insights masks stored IP addresses by default; retaining them requires setting the `DisableIpMasking` property of the Application Insights component to `true`. The exact fields of the planned server and access logs are not yet documented.

**Security & identity**
- Access to the Application Insights resource needs controlling through Azure roles.

**Autonomy & actions**
- None. The feature observes and reports.

**Change & support**
- Consent banners and cookie policy may need updating before analytics go live.

## Cost and licensing

Application Insights is billed by Azure on data volume, so cost scales with site traffic. Power Pages licensing for the feature is not yet published. Include the Azure subscription and retention settings in planning.

## Scope

Power Pages makers and administrators. Clouds: Worldwide, GCC, GCC High and DoD per the roadmap.

## Governance guidance

### Before rollout
- Agree a privacy and consent position for site analytics.
- Choose the Azure subscription, region and retention for Application Insights.
- Name who may view logs.

### At rollout
- Pilot on one non-critical site.
- Add the analytics provider script only after the consent mechanism is in place.

### After rollout
- Review ingestion volumes and cost monthly.
- Audit access to the Application Insights resource.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Diagnostic logs for a site to Azure Blob storage</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Resources › Power Pages sites › site › Site Actions › Enable diagnostics logs <a href="https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Site traffic analytics</strong><br><small>Tenant</small><br><small class="controls__note">Dynamics 365 admin, Power Platform admin, or System Administrator for their environments.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Analytics (preview) <a href="https://learn.microsoft.com/power-pages/admin/admin-center-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Site-level trace and debug logging</strong><br><small>Site</small><br><small class="controls__note">Download the site, edit the UserTrace/Debug site setting, then upload. Upload deploys edited configuration; it is not a dedicated logging toggle.</small></td><td data-label="Admin UI"><strong>Power Pages Management app</strong><br>Website › Site settings <a href="https://learn.microsoft.com/power-pages/configure/configure-site-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac pages upload --path &lt;site-folder&gt; --modelVersion &lt;model-version&gt;</code> <a href="https://learn.microsoft.com/power-pages/configure/power-platform-cli" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide policy for analytics and server logging</strong><br><small>Tenant</small><br><small class="controls__note">A tenant-wide policy for this feature is not yet documented as of November 2026; the roadmap describes maker configuration per site, not a tenant-wide policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Diagnostic logging and trace settings are site-specific; the admin analytics dashboard covers websites across the tenant, filtered by environment and site.

Management-app site settings can also be deployed with the Power Platform CLI (PAC CLI): download the site, edit its UserTrace/Debug site setting, then upload it. Upload deploys edited configuration; it is not a dedicated logging toggle. Microsoft Learn documents no dedicated API equivalent for enabling diagnostic Blob logging at the time of writing (November 2026).

Diagnostic logging writes to an Azure Blob storage account the tenant pays for. The documented **Select retention period** setting in Enable diagnostic logging (and Update diagnostic logging configuration) sets how long the log blobs are kept; it manages retained storage, not the Application Insights ingestion meter. The page notes that the UI currently displays only the default retention period of 30 days.

Power Pages activity logging to Purview is described in [Power Pages activity logs](https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages) and needs no site setting. That article does expect preparation: a review of licensing and permissions, auditing turned on for the production environments to monitor, Purview auditing, and the Audit Logs or View-Only Audit Logs role. The [Power Pages admin roles page](https://learn.microsoft.com/power-pages/admin/admin-roles) lists the roles required for each administrative task.

## Open questions

- Will administrators be able to disable analytics for all sites in an environment?
- Which log fields are captured, and for how long?
- How do consent requirements interact with the provider script?

<!-- rationale
risk: Medium. Client-side analytics collects visitor behaviour data, which brings privacy and consent obligations for public sites.
cost: Variable. Application Insights is an Azure service billed on data ingestion; the Power Pages feature itself has no published charge.
impact: Medium. It changes what site owners and makers can see; visitors are affected through tracking.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature has no autonomous actions and only observes and reports. | Found: Searched: Power Pages server logging fields autonomous actions retention. Read roadmap, devtools-addon, view-portal-error-log and go-live/telemetry-monitoring; they describe monitoring and debugging, not an exhaustive assurance of no autonomous actions. | Fix: Replace 'None. The feature observes and reports.' with 'The roadmap describes telemetry and analytics, not autonomous remediation.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model, notes, cost; Cost and licensing; rationale: cost / licensing: Application Insights uses Azure consumption billing for telemetry ingestion, supporting a variable cost rating. | Found: Because workspace-based Application Insights resources store their data in a Log Analytics workspace, the billing for data ingestion and retention is done by the workspace where the Application Insights data is located. | Fix: Add https://learn.microsoft.com/azure/azure-monitor/logs/cost-logs#application-insights-billing to sources for the consumption model and ingestion-volume cost statements. | Source: https://learn.microsoft.com/azure/azure-monitor/logs/cost-logs#application-insights-billing
- [supported, minor] Risk assessment: Data exposure / behaviour: Retaining IP addresses requires setting the Application Insights component's DisableIpMasking property to true. | Found: To enable IP collection and storage, the DisableIpMasking property of the Application Insights component must be set to true. ... DisableIpMasking applies to classic Application Insights ingestion. | Fix: Replace the retaining-addresses clause with: 'For classic Application Insights ingestion, retaining IP addresses requires setting DisableIpMasking to true; native OTLP ingestion does not retain the address regardless of that property.' | Source: https://learn.microsoft.com/azure/azure-monitor/app/ip-collection
- [supported, minor] Risk assessment: Security & identity / applicability: Azure roles control access to Application Insights resources. | Found: Azure role-based access control (Azure RBAC) provides built-in roles for monitoring to assign to users, groups, service principals, and managed identities. ... View diagnostic settings, autoscale settings, and Application Insights data | Fix: Cite https://learn.microsoft.com/azure/azure-monitor/fundamentals/roles-permissions-security for the Application Insights resource-access statement. | Source: https://learn.microsoft.com/azure/azure-monitor/fundamentals/roles-permissions-security
- [supported, minor] controls[1].scope; Governance controls: first paragraph / behaviour: The admin analytics dashboard covers websites across the tenant, filtered by environment and site. | Found: Each chart displays the DAU, WAU, and MAU for all the sites in the selected environment. ... Traffic reports are available only for public sites. Private sites aren't included in these reports. | Fix: Replace the dashboard clause with: 'The admin analytics dashboard covers public websites across the tenant, filtered by environment and Site ID; private sites are not included.' | Source: https://learn.microsoft.com/power-pages/admin/admin-center-analytics
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The trace/debug site's settings are reached in the Power Pages Management app through Website > Site settings. | Found: Using the Portal Management app, select Site settings under the Website section. ... To edit an existing setting, select the Site Setting listed in the grid. ... Value: The setting | Fix: The route stops on the correct list. Complete it as 'Website > Site settings > UserTrace/Debug > Value' and retain the note about editing the site setting. The cited devtools-addon article specifies UserTrace/Debug and a value of true. | Source: https://learn.microsoft.com/power-pages/configure/configure-site-settings
- [supported, minor] Governance controls: diagnostic logging storage paragraph / cost: The tenant pays for the Azure Blob storage used for diagnostic logs. | Found: When you create or use Blob Storage resources, you're charged for the following meters: ... Data storage | Per GB / per month ... Operations | Per transaction | Fix: Cite https://learn.microsoft.com/azure/storage/common/storage-plan-manage-costs#understand-the-full-billing-model-for-azure-blob-storage for the diagnostic-log storage charge. | Source: https://learn.microsoft.com/azure/storage/common/storage-plan-manage-costs#understand-the-full-billing-model-for-azure-blob-storage
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The governance checklist's controls are represented in the controls table. | Found: Checklist: 'Choose the Azure subscription, region and retention for Application Insights'; 'Name who may view logs'; 'Audit access to the Application Insights resource.' Table: diagnostic Blob logs, traffic analytics, trace/debug logging, tenant-wide policy. | Fix: The Application Insights subscription, region, retention and resource-access checks in the checklist have no corresponding controls-table rows. Do not add rows as part of this correction.
- [supported, minor] Why it matters; Risk assessment: Data exposure; rationale: risk / behaviour: Analytics and diagnostic telemetry may contain personal or request-related information needing protection. | Found: Typical data includes requests, dependencies, exceptions and crashes ... Do not put sensitive data in URLs. Review custom telemetry so it does not include personal data. | Fix: Cite https://learn.microsoft.com/azure/azure-monitor/app/application-insights-faq#how-does-application-insights-handle-data-collection,-retention,-storage,-and-privacy for the telemetry privacy premise. | Source: https://learn.microsoft.com/azure/azure-monitor/app/application-insights-faq#how-does-application-insights-handle-data-collection,-retention,-storage,-and-privacy
-->
