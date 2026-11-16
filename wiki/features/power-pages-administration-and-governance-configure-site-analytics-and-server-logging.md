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
tags: ["power-pages","application-insights","analytics","server-logging","privacy","gcc","dod"]
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
version: 2
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
