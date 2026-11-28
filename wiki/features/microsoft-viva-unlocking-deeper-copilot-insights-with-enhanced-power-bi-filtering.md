---
title: "Viva Insights: admins choose which organisational attributes appear as filters in Copilot Power BI reports"
slug: "microsoft-viva-unlocking-deeper-copilot-insights-with-enhanced-power-bi-filtering"
roadmapId: 559995
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Insights administrators can enable more organisational attributes, including reserved and custom ones, as filters in Viva Insights Power BI reports. Nothing beyond the three default filters appears until an admin enables it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's environment requirements page says Microsoft Copilot plans include advanced analysis for employees with an assigned Copilot licence, and that at least 50 assigned Viva Insights licences are needed for advanced analysis. No licence specific to attribute filters is published."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["viva-insights","copilot-analytics","power-bi","analytics","m365-copilot","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 559995"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559995"
    kind: "roadmap"
  - title: "Enable filters for out-of-the-box reports"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/enable-filters-for-reports"
    kind: "learn"
  - title: "How to use the Reports page and create customized reports"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/reports-page"
    kind: "learn"
  - title: "Access insights easily with ready-to-use Copilot Analytics reports"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-analytics-reports"
    kind: "learn"
  - title: "Environment requirements for Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements"
    kind: "learn"
  - title: "Customize Viva Insights privacy settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/privacy-settings"
    kind: "learn"
  - title: "Prepare an organizational data file upload"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/prepare-org-data"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Copilot Analytics introduction"
    url: "https://learn.microsoft.com/viva/insights/copilot-analytics-introduction"
    kind: "learn"
videos: []
related: ["microsoft-viva-ability-for-leaders-to-publish-power-bi-reports","microsoft-viva-access-management-for-copilot-analytics"]
controls:
  - governs: "Which organisational attributes report users can filter by in Viva Insights Power BI reports"
    scope: "tenant"
    ui:
      surface: "Viva Insights web app"
      path: "Analysis setup > Attribute filters > Data field quality > Enable filter"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/enable-filters-for-reports"
    api: null
    note: "Viva Insights Administrator. Organization, CountryOrRegion and FunctionType are enabled by default; Organization cannot be turned off."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-28"
roadmapModified: "2026-06-26T22:01:51"
changes:
  - date: "2026-11-27"
    note: "New briefing: admin-enabled attribute filters for Viva Insights Power BI reports, with the web app path and licensing."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 41 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: filter results below the privacy threshold now cite the Reports page; filters described as narrowing data within a user's scope; removed unsupported identity and actions statements and two checklist items without table rows."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 42 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 42
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7a1df8abf42693c501eb02db849af86e"
---

## What's changing

Insights administrators can now choose which organisational attributes analysts and report users can filter by in Viva Insights Power BI reports. The roadmap item says Global and Insights admins can turn on additional attributes as filters, including reserved attributes and the organisation's own custom attributes, and that users with access to the Power BI reports can then use them to tailor the reports.

Microsoft Learn documents the setting on its [Enable filters for out-of-the-box reports](https://learn.microsoft.com/viva/insights/advanced/admin/enable-filters-for-reports) page. In the Viva Insights web app, the admin goes to **Analysis setup > Attribute filters > Data field quality > Enable filter** for each attribute. Organization, CountryOrRegion and FunctionType are enabled by default for Power BI reports, and Organization is a mandatory filter that cannot be turned off. Once enabled, filters appear under **Filter by** in prebuilt reports on the **Reports** tab.

The attributes come from the organisation's Viva Insights organisational data. Reserved attributes such as LevelDesignation, FunctionType and Location are fixed column names that Viva Insights uses to calculate, filter and group data; custom attributes are columns the organisation creates in its upload ([Prepare an organizational data file upload](https://learn.microsoft.com/viva/insights/advanced/admin/prepare-org-data)).

The roadmap record lists the item as Launched, General Availability, target June CY2026, Worldwide (Standard Multi-Tenant), on the web. Two Microsoft pages disagree at the time of writing (November 2026): the [Copilot Analytics reports](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-analytics-reports) page still says the out-of-the-box reports "can't be customized with unique filters or attributes", while the filters page says enabled filters show in prebuilt reports.

## Why it matters

This is the switch that decides how finely leaders and analysts can slice Copilot adoption and impact data: by level, location, function or enabled custom HR attributes available in the report. Finer filters make the reports more useful for targeting adoption work, and they also make it easier to look at small populations, so the choice of attributes is a privacy decision as much as a reporting one.

If nobody acts, reports keep the three default filters; extra attributes appear only when an administrator enables them. The value of the feature also depends on organisational data quality: an attribute that is missing or sparse for many people gives misleading filtered views.

## Risk assessment

**Data exposure**
- Enabling granular attributes (Microsoft names ManagerId and PersonId among the attributes available) lets report users narrow views to smaller groups. Viva Insights' minimum group size, which must be at least five, applies to data visualisations in advanced analysis Power BI templates; Microsoft says report-filter results can be blank or suppressed when a filter produces a group below the applicable privacy threshold ([Reports page](https://learn.microsoft.com/viva/insights/advanced/analyst/reports-page)).
- Custom attributes can carry sensitive HR data. Available attributes depend on the report and the organisational data configured; filters do not grant access outside a user's role, delegation or analyst partition ([Reports page](https://learn.microsoft.com/viva/insights/advanced/analyst/reports-page)).

**Security & identity**
- The setting is managed by a Viva Insights Administrator, a role that a Microsoft 365 Global Administrator assigns.

**Autonomy & actions**
- The documented capability adds organisational attribute filters to reports.

**Change & support**
- Expect analysts and leaders to ask for attributes to be enabled and for gaps in organisational data to be fixed, and expect questions where the Copilot Analytics reports page and the filters page disagree.

## Cost and licensing

- **Licence.** The [environment requirements page](https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements) says Microsoft Copilot plans include manager, leader and advanced analysis for all employees with an assigned Copilot licence, and that at least 50 assigned Viva Insights licences are required to access advanced analysis and the Copilot Dashboard; the threshold can be reached through a combination of Copilot licences (which include the Viva Insights service plan) and Viva Insights licences.
- **Meter.** Microsoft publishes no meter or separate charge for attribute filters at the time of writing.
- **Indirect costs.** HR or admin time to prepare and maintain organisational data with the reserved and custom attributes you want as filters, and Insights administrator time to decide which to enable.

## Scope

- **Who configures it:** Viva Insights Administrators; the roadmap item also names Global admins. A Microsoft 365 Global Administrator assigns the Insights Administrator and Insights Analyst roles.
- **Who uses it:** analysts and users with access to the Viva Insights Power BI reports.
- **Attributes:** reserved and custom attributes from the organisation's Viva Insights organisational data; Organization, CountryOrRegion and FunctionType are on by default.
- **Clouds:** Worldwide (Standard Multi-Tenant), per the roadmap record.
- **Platform:** web (Viva Insights web app).

## Governance guidance

### Before rollout
- Decide with HR and privacy owners which reserved and custom attributes may be used as report filters, and which stay off.

### At rollout
- Enable the agreed attributes in the Viva Insights web app under Analysis setup > Attribute filters > Data field quality > Enable filter.
- Tell analysts and report viewers which new filters exist and where they appear (Filter by in prebuilt reports).

### After rollout
- Review the enabled attribute list whenever new custom attributes are added to the organisational data upload.
- Turn off attributes whose filtered views single out very small groups.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which organisational attributes report users can filter by in Viva Insights Power BI reports</strong><br><small>Tenant</small><br><small class="controls__note">Viva Insights Administrator. Organization, CountryOrRegion and FunctionType are enabled by default; Organization cannot be turned off.</small></td><td data-label="Admin UI"><strong>Viva Insights web app</strong><br>Analysis setup › Attribute filters › Data field quality › Enable filter <a href="https://learn.microsoft.com/viva/insights/advanced/admin/enable-filters-for-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- The attribute filter setting is managed by a Viva Insights Administrator in the Viva Insights web app. Microsoft Learn documents no PowerShell or Microsoft Graph equivalent for it at the time of writing (November 2026).
- Organization cannot be turned off; it is a mandatory filter in prebuilt Power BI reports.
- The minimum group size, described on the Viva Insights [Privacy settings](https://learn.microsoft.com/viva/insights/advanced/setup-maint/privacy-settings) page for Insights Administrators, applies to data visualisations in advanced analysis Power BI templates and must be at least five.
- Which attributes can be enabled depends on the organisational data the organisation uploads.

## Open questions

- Which Copilot Analytics reports honour the enabled filters, given the Copilot Analytics reports page still says out-of-the-box reports can't be customised with filters?
- Will Microsoft offer an API or PowerShell cmdlet to manage attribute filters?

<!-- rationale
risk: Low. Extra filters appear only after an Insights administrator enables them, and Viva Insights' minimum group size applies to advanced analysis Power BI visualisations.
cost: Low. The setting sits in Viva Insights advanced analysis, which Microsoft Copilot plans include for licensed employees; the cost is admin time to keep organisational data complete.
impact: Low. Only Insights administrators who set the filters and the analysts and report viewers who use Viva Insights Power BI reports notice the change.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Missing or sparsely populated attributes reduce the quality of filtered insights. | Found: If a column has too many blank rows, that attribute has low coverage. Attributes with less than 30% coverage are considered low-quality. Similar to missing insights, when data is of low quality, related insights are of low quality, too. | Fix: Add https://learn.microsoft.com/viva/insights/advanced/analyst/data-quality-analyst-experience to sources and cite it for the data-quality statement in Why it matters. | Source: https://learn.microsoft.com/viva/insights/advanced/analyst/data-quality-analyst-experience#attribute-filters-page
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The environment requirements page states that at least 50 assigned Viva Insights licenses are needed for advanced analysis and the Copilot Dashboard. | Found: At least 50 assigned Viva Insights licenses are required to access advanced analysis and the Microsoft Copilot Dashboard. | Fix: Keep the attributed 50-license statement and add: 'Microsoft's service description gives a different threshold: Microsoft Copilot Dashboard and Advanced Copilot Reporting in Viva Insights comes with Microsoft 365 Copilot or 10 Insights licenses.' Cite and add https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-service-description#feature-availability to sources. | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements
- [supported, minor] controls[0].scope; Governance controls: Tenant / applicability: The administrator's attribute-filter setting has tenant scope. | Found: What you set as an admin (unless you’re setting up a partition) applies across your organization. | Fix: Add https://learn.microsoft.com/viva/insights/advanced/admin/partitions to sources as support for the tenant scope. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/partitions#row-and-column-data
-->
