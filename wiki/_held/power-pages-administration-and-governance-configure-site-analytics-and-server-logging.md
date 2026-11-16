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
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Azure Application Insights billing applies. Power Pages licensing for the feature is not yet published."
audiences: ["power-platform-admin","compliance","maker","service-owner"]
tags: ["power-pages","application-insights","analytics","server-logging","privacy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 578071"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578071"
    kind: "roadmap"
  - title: "Power Pages DevTools extension"
    url: "https://learn.microsoft.com/power-pages/configure/devtools-addon"
    kind: "learn"
  - title: "Power Pages FAQs"
    url: "https://learn.microsoft.com/power-pages/faq"
    kind: "learn"
  - title: "Diagnostic logs for a site to Azure Blob storage (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging"
    kind: "learn"
  - title: "Site traffic analytics (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-analytics"
    kind: "learn"
  - title: "Site-level trace and debug logging (Power Pages Management app)"
    url: "https://learn.microsoft.com/power-pages/configure/devtools-addon#enable-diagnostic-setting"
    kind: "learn"
videos: []
related: ["managed-environments","data-policies"]
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
      docs: "https://learn.microsoft.com/power-pages/configure/devtools-addon#enable-diagnostic-setting"
    api: null
  - governs: "Tenant-wide policy for analytics and server logging"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet on Learn; the roadmap entry describes it."
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
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 39
  unconfirmed: 1
  contradicted: 6
  attempts: 1
---

## What's changing

Power Pages will gain integrated telemetry and analytics. The roadmap says makers can use Application Insights to monitor page views, form interactions, session details and client-side analytics, and can detect server-side errors, performance issues and access logs.

To configure site analytics, makers open the Set up workspace and add the analytics provider script. The feature is enabled by admins, makers or marketers for end users.

Preview is listed for October CY2026 and general availability for February CY2027, in Worldwide, GCC, GCC High and DoD. Learn today describes diagnostic logging, the UserTrace/Debug site setting and the Power Pages DevTools extension for server-side errors.

## Why it matters

Visitor analytics on a public site is a privacy matter as well as an operational one. Owners need to decide on consent, retention and where the data lands.

Server logs help support teams resolve issues faster, but they may include request details that need protecting.

## Risk assessment

**Data exposure**
- Analytics scripts collect visitor behaviour and session data, which may be personal data in some jurisdictions.
- Server and access logs may hold IP addresses and request details.

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
- [ ] Agree a privacy and consent position for site analytics.
- [ ] Choose the Azure subscription, region and retention for Application Insights.
- [ ] Name who may view logs.

### At rollout
- [ ] Pilot on one non-critical site.
- [ ] Add the analytics provider script only after the consent mechanism is in place.

### After rollout
- [ ] Review ingestion volumes and cost monthly.
- [ ] Audit access to the Application Insights resource.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Diagnostic logs for a site to Azure Blob storage</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Resources › Power Pages sites › site › Site Actions › Enable diagnostics logs <a href="https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Site traffic analytics</strong><br><small>Tenant</small><br><small class="controls__note">Dynamics 365 admin, Power Platform admin, or System Administrator for their environments.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Analytics (preview) <a href="https://learn.microsoft.com/power-pages/admin/admin-center-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Site-level trace and debug logging</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Pages Management app</strong><br>Website › Site settings <a href="https://learn.microsoft.com/power-pages/configure/devtools-addon#enable-diagnostic-setting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide policy for analytics and server logging</strong><br><small>Tenant</small><br><small class="controls__note">Not yet on Learn; the roadmap entry describes it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Everything documented is per site and portal-driven. Diagnostic logging writes to a storage account the tenant pays for, so the cost control is the Azure retention policy. Activity logging to Purview for Power Pages is described in [Power Pages activity logs](https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages) and needs no site setting. The [admin overview](https://learn.microsoft.com/power-pages/admin/admin-overview) lists which roles reach each surface.

## Open questions

- Will administrators be able to disable analytics for all sites in an environment?
- Which log fields are captured, and for how long?
- How do consent requirements interact with the provider script?

<!-- rationale
risk: Medium. Client-side analytics collects visitor behaviour data, which brings privacy and consent obligations for public sites.
cost: Variable. Application Insights is an Azure service billed on data ingestion; the Power Pages feature itself has no published charge.
impact: Medium. It changes what site owners and makers can see; visitors are affected through tracking.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] front matter: defaultState / default: The new feature is admin-opt-in, requiring administrator enablement before anyone can use it. | Found: Searched: Power Pages Application Insights site analytics server logging tenant policy enable disable licensing; "Power Pages" "site analytics" "Application Insights". Read roadmap, DevTools, telemetry-monitoring and analytics pages; none requires a separate admin enablement. | Fix: Change defaultState to user-opt-in: the roadmap says makers add the provider script, and the targeted searches found no separate administrator switch for this capability. Explain that this is maker-selected enablement, not a documented tenant admin gate.
- [supported, minor] front matter: licensing.model, licensing.notes, cost; rationale: cost / licensing: Application Insights introduces consumption billing, supporting the consumption licensing model and variable cost rating. | Found: Application Insights is billed through the Log Analytics workspace into which its log data ingested. | Fix: Add https://learn.microsoft.com/azure/azure-monitor/app/application-insights-faq to sources and cite it for the Azure meter; distinguish that published meter from unpublished feature-specific Power Pages licensing. | Source: https://learn.microsoft.com/azure/azure-monitor/app/application-insights-faq
- [supported, minor] Cost and licensing; rationale: cost / cost: Application Insights billing depends on ingested telemetry volume. | Found: Azure Application Insights is billed based on the volume of telemetry data your application sends (data ingestion) and how long time you want data to be available (data retention). | Fix: Cite this published Application Insights billing explanation or the Azure Monitor pricing documentation it links to; the existing Power Pages sources do not establish the ingestion meter. | Source: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-control-cost
- [supported, minor] controls[2].ui; Governance controls: trace and debug logging row / admin-path: Website > Site settings in the management app is the path for the site setting used to enable trace and debug logging. | Found: Using the Portal Management app, select Site settings under the Website section. | Fix: The pre-check's missing words are not a wrong path: the DevTools article links to the page that gives it. Cite https://learn.microsoft.com/power-pages/configure/configure-site-settings directly in ui.docs, retaining DevTools as the source for UserTrace/Debug=true. | Source: https://learn.microsoft.com/power-pages/configure/configure-site-settings
- [contradicted, blocker] controls[2].api; Governance controls: trace and debug logging row / absence: No automation equivalent is documented for managing the site-level trace and debug setting. | Found: Support for download/upload of website configuration data to/from the local file system ... Supported tables ... adx_sitesetting | Fix: Replace the absence with documented PAC CLI configuration automation: download the site, update its UserTrace/Debug site setting, then upload it with pac pages upload --path <site-folder> --modelVersion <model-version>. Cite this page and explain that upload deploys edited configuration, not a dedicated logging toggle. | Source: https://learn.microsoft.com/power-pages/configure/power-platform-cli
- [contradicted, blocker] controls[3].note; Governance controls: tenant-wide policy row / record: The roadmap entry describes a tenant-wide policy for analytics and server logging. | Found: To configure site analytics, makers must open the setup workspace and add the analytics provider script to enable traffic analytics. | Fix: Replace the note with 'A tenant-wide policy for this feature is not yet documented as of November 2026; the roadmap describes maker configuration per site, not a tenant-wide policy.'
- [supported, minor] Risk assessment: Data exposure / behaviour: Telemetry logs may retain IP addresses, creating a privacy risk. | Found: By default, IP addresses are temporarily collected but not stored. ... To enable IP collection and storage, the DisableIpMasking property of the Application Insights component must be set to true. | Fix: Cite this page and qualify the risk: Application Insights masks stored IP addresses by default; retaining them requires an override. Keep the new feature's exact server/access-log fields explicitly unconfirmed rather than implying a published field schema. | Source: https://learn.microsoft.com/azure/azure-monitor/app/ip-collection
- [supported, minor] Why it matters; Risk assessment: Data exposure / behaviour: Monitoring telemetry can contain request details that need protecting. | Found: Request telemetry represents information related to incoming HTTP requests to your application. | Fix: Cite the Application Insights telemetry data model and present this as a general telemetry risk, not confirmation of the planned Power Pages server/access-log field schema. | Source: https://learn.microsoft.com/azure/azure-monitor/app/data-model-complete#page-view-telemetry
- [supported, minor] Risk assessment: Security & identity / applicability: Azure roles govern access to the Application Insights resource and its data. | Found: View diagnostic settings, autoscale settings, and Application Insights data ... Monitoring Reader ... Yes ... Monitoring Contributor ... Yes | Fix: Add this Azure Monitor roles page to sources and cite it for Application Insights access control. | Source: https://learn.microsoft.com/azure/azure-monitor/app/resources-roles-access-control
- [supported, minor] Governance controls: closing paragraph / cost: The customer pays Azure storage charges for the account holding diagnostic logs. | Found: Calculate your storage costs by multiplying the size of your data in GB by the storage price of the chosen access tier. | Fix: Add this Azure Blob Storage cost source; distinguish Blob storage charges from the separate Application Insights ingestion meter. | Source: https://learn.microsoft.com/azure/storage/blobs/blob-storage-estimate-costs#the-cost-to-store-data
- [supported, minor] Governance controls: closing paragraph / behaviour: Retention configuration controls how long diagnostic log blobs are retained. | Found: Select retention period: Duration to keep the portal error logs in blob storage. The error logs are deleted after the selected duration. | Fix: Replace the vague 'Azure retention policy' wording with the documented 'Select retention period' setting in Enable diagnostic logging or Update diagnostic logging configuration. Explain that it manages retained storage, not the Application Insights ingestion meter. | Source: https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging
- [contradicted, blocker] Governance controls: closing paragraph / consistency: Everything documented in the controls section is per site. | Found: controls[1]: scope: "tenant"; "Site traffic analytics". Closing paragraph: "Everything documented is per site and portal-driven." | Fix: Replace with 'Diagnostic logging and trace settings are site-specific; the admin analytics dashboard covers websites across the tenant, filtered by environment and site.'
- [contradicted, blocker] Governance controls: closing paragraph / behaviour: All documented configuration is portal-driven rather than automatable. | Found: With this feature, the Microsoft Power Platform CLI enables CI/CD (Continuous Integration/Continuous Deployment) of a Power Pages site configuration. | Fix: Remove 'Everything documented is ... portal-driven.' State that management-app site settings can also be deployed with PAC CLI, while the diagnostic Blob logging enablement has no documented dedicated API equivalent found in this check. | Source: https://learn.microsoft.com/power-pages/configure/power-platform-cli
- [supported, minor] Governance controls: closing paragraph / absence: Viewing Power Pages administrative activity logs in Purview needs no separate site setting. | Found: Searched: "Power Pages" "activity logs" "site setting" auditing. Opened activity-logs-power-pages and read its prerequisites; they name licensing, permissions, environment auditing and Purview auditing, not a site setting. | Fix: Keep the narrow no-site-setting statement, but immediately state that the linked article requires licensing and permissions review, auditing for the production environments, Purview auditing, and an Audit Logs or View-Only Audit Logs role. Do not imply no preparation is needed.
- [supported, minor] Governance controls: closing paragraph / behaviour: Microsoft's administration documentation identifies roles required for Power Pages administrative tasks. | Found: The following table lists different administrative tasks for Power Pages, and the roles required to do that task. | Fix: Replace the admin-overview link with https://learn.microsoft.com/power-pages/admin/admin-roles and say it lists roles by administrative task; the overview merely links to that table. | Source: https://learn.microsoft.com/power-pages/admin/admin-roles
- [contradicted, minor] Governance guidance: Before rollout, After rollout; Governance controls / consistency: Every technical control the checklist asks administrators to configure or review has a controls-table row. | Found: Checklist: "Choose the Azure subscription, region and retention for Application Insights"; "Audit access to the Application Insights resource." The table has no Application Insights retention, spend-monitoring or access-control row. | Fix: Add rows for Application Insights retention/cost monitoring and Azure access control, with documented Azure paths or automation. Mark these as controls on the Azure telemetry destination, not confirmed tenant-wide Power Pages feature switches.
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits a capability that requires a maker or administrator to add an analytics provider script. | Found: action: "prepare"; "To configure site analytics, makers open the Set up workspace and add the analytics provider script." | Fix: Set action to review under the schema's optional-capability definition: the record describes explicit configuration and supplies no automatic change to existing sites or administrative deadline.
-->
