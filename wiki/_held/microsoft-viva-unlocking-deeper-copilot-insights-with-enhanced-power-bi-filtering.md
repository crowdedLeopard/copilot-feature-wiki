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
updated: "2026-11-27"
roadmapModified: "2026-06-26T22:01:51"
changes:
  - date: "2026-11-27"
    note: "New briefing: admin-enabled attribute filters for Viva Insights Power BI reports, with the web app path and licensing."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 41 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 36
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "2b0d8578b76eea1a1d36606d1dfb6d1d"
---

## What's changing

Insights administrators can now choose which organisational attributes analysts and report users can filter by in Viva Insights Power BI reports. The roadmap item says Global and Insights admins can turn on additional attributes as filters, including reserved attributes and the organisation's own custom attributes, and that users with access to the Power BI reports can then use them to tailor the reports.

Microsoft Learn documents the setting on its [Enable filters for out-of-the-box reports](https://learn.microsoft.com/viva/insights/advanced/admin/enable-filters-for-reports) page. In the Viva Insights web app, the admin opens **Attribute filters** under **Analysis setup** and selects **Enable filter** for each attribute. Organization, CountryOrRegion and FunctionType are enabled by default for Power BI reports, and Organization is a mandatory filter that cannot be turned off. Once enabled, filters appear under **Filter by** in prebuilt reports on the **Reports** tab.

The attributes come from the organisation's Viva Insights organisational data. Reserved attributes such as LevelDesignation, FunctionType and Location are fixed column names that Viva Insights uses to calculate, filter and group data; custom attributes are columns the organisation creates in its upload ([Prepare an organizational data file upload](https://learn.microsoft.com/viva/insights/advanced/admin/prepare-org-data)).

The roadmap record lists the item as Launched, General Availability, target June CY2026, Worldwide (Standard Multi-Tenant), on the web. Two Microsoft pages disagree at the time of writing (November 2026): the [Copilot Analytics reports](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-analytics-reports) page still says the out-of-the-box reports "can't be customized with unique filters or attributes", while the filters page says enabled filters show in prebuilt reports.

## Why it matters

This is the switch that decides how finely leaders and analysts can slice Copilot adoption and impact data: by level, location, function or any custom HR attribute the organisation has uploaded. Finer filters make the reports more useful for targeting adoption work, and they also make it easier to look at small populations, so the choice of attributes is a privacy decision as much as a reporting one.

If nobody acts, reports keep the three default filters; extra attributes appear only when an administrator enables them. The value of the feature also depends on organisational data quality: an attribute that is missing or sparse for many people gives misleading filtered views.

## Risk assessment

**Data exposure**
- Enabling granular attributes (Microsoft names ManagerId and PersonId among the attributes available) lets report users narrow views to smaller groups. Viva Insights' minimum group size, which must be at least five, applies to data visualisations in advanced analysis Power BI templates; how it applies to newly enabled filters in prebuilt reports is not documented.
- Custom attributes can carry sensitive HR data. Whatever is uploaded and then enabled becomes a filter for the people who can open the reports.

**Security & identity**
- No change to identities or sign-in. The setting is managed by a Viva Insights Administrator, a role that a Microsoft 365 Global Administrator assigns.

**Autonomy & actions**
- No change: the feature adds filters to reports and takes no actions.

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
- Check that the organisational data upload covers the people in the Copilot measured population for each attribute you plan to enable.
- Confirm who holds the Insights Administrator role, since that role controls the attribute filters.

### At rollout
- Enable the agreed attributes in the Viva Insights web app under Analysis setup > Attribute filters.
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

- Does the minimum group size suppress results when a report user combines several newly enabled filters? Watch the Enable filters for out-of-the-box reports page.
- Which Copilot Analytics reports honour the enabled filters, given the Copilot Analytics reports page still says out-of-the-box reports can't be customised with filters?
- Can attribute filters be enabled per partition, or only for the whole tenant?
- Will Microsoft offer an API or PowerShell cmdlet to manage attribute filters?

<!-- rationale
risk: Low. Extra filters appear only after an Insights administrator enables them, and Viva Insights' minimum group size applies to advanced analysis Power BI visualisations.
cost: Low. The setting sits in Viva Insights advanced analysis, which Microsoft Copilot plans include for licensed employees; the cost is admin time to keep organisational data complete.
impact: Low. Only Insights administrators who set the filters and the analysts and report viewers who use Viva Insights Power BI reports notice the change.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: How minimum group size applies to newly enabled filters in prebuilt reports is not documented. | Found: Results can be blank or suppressed when a filter produces a group below the applicable privacy threshold. | Fix: Replace the undocumented-application clause with: 'Microsoft says report-filter results can be blank or suppressed when a filter produces a group below the applicable privacy threshold.' Cite https://learn.microsoft.com/viva/insights/advanced/analyst/reports-page. Remove the first Open questions bullet, which asks whether combined filters suppress results. | Source: https://learn.microsoft.com/viva/insights/advanced/analyst/reports-page
- [contradicted, blocker] Risk assessment: Data exposure; Why it matters / behaviour: Whatever custom HR attribute is uploaded and enabled becomes a filter for everyone who can open the reports. | Found: Available attributes depend on the report and on the organizational data configured by your organization. ... Filters narrow data; they don't grant access to people or groups outside your role, delegation, or analyst partition. | Fix: Replace 'Whatever is uploaded and then enabled becomes a filter for the people who can open the reports' with 'Available attributes depend on the report and the organisational data configured; filters do not grant access outside a user's role, delegation or analyst partition.' In Why it matters, replace 'or any custom HR attribute the organisation has uploaded' with 'or enabled custom HR attributes available in the report'. Cite https://learn.microsoft.com/viva/insights/advanced/analyst/reports-page. | Source: https://learn.microsoft.com/viva/insights/advanced/analyst/reports-page
- [unsupported, major] Risk assessment: Security & identity / behaviour: The feature makes no change to identities or sign-in. | Found: Searched: Viva Insights attribute filters enabling authentication identity sign-in autonomous actions. Opened Enable filters for out-of-the-box reports and Reports page; neither states that identities or sign-in are unchanged. | Fix: Remove 'No change to identities or sign-in.' Retain the separately supported administrator-role statement.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature takes no actions. | Found: Searched: Viva Insights attribute filters enabling authentication identity sign-in autonomous actions. Opened Enable filters for out-of-the-box reports and Reports page; they describe filters, not an explicit guarantee that the feature takes no actions. | Fix: Replace 'No change: the feature adds filters to reports and takes no actions' with 'The documented capability adds organisational attribute filters to reports.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Governance guidance: Before rollout / behaviour: Missing or sparse organisational attributes can produce misleading filtered views. | Found: If quality scores are low, it's difficult to determine how people collaborate across different characteristics. Also, low quality scores on required data fields may give skewed (under-reported) metric calculations for metrics that rely on those attributes. | Fix: Cite https://learn.microsoft.com/viva/insights/advanced/admin/org-data-overview for the data-quality statement. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/org-data-overview#organizational-data-in-the-viva-insights-web-app
- [supported, minor] Why it matters; Risk assessment: Data exposure / behaviour: Descriptive HR attributes can reveal sensitive information or enable inference about individuals. | Found: depending on the kinds of descriptive employee attributes that the Insights Administrator has chosen to make available to Viva Insights, these attributes might provide enough context or be combined with other information such that an analyst can infer individual identity. | Fix: Cite https://learn.microsoft.com/viva/insights/advanced/privacy/privacy for the privacy risk from descriptive employee attributes. | Source: https://learn.microsoft.com/viva/insights/advanced/privacy/privacy#protecting-sensitive-data
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The environment requirements page requires at least 50 assigned Viva Insights licences for advanced analysis and the Copilot Dashboard. | Found: At least 50 assigned Viva Insights licenses are required to access advanced analysis and the Microsoft Copilot Dashboard. | Fix: Keep the attributed 50-licence statement and add: 'Microsoft's Viva service description gives a different requirement: the Copilot Dashboard and Advanced Copilot Reporting come with Microsoft 365 Copilot or 10 Insights licences.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-service-description. | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements
- [supported, minor] controls[0].scope; Governance controls table; Open questions / applicability: The administrator's attribute-filter setting has tenant scope. | Found: What you set as an admin (unless you’re setting up a partition) applies across your organization. | Fix: Cite https://learn.microsoft.com/viva/insights/advanced/admin/partitions for tenant scope. Replace the per-partition Open questions bullet with 'The attribute-filter admin setting applies across the organisation; analysts remain limited to the attributes in their assigned partitions.' | Source: https://learn.microsoft.com/viva/insights/advanced/admin/partitions
- [supported, minor] What's changing; Governance guidance: At rollout / admin-path: Administrators enable attributes under Viva Insights web app > Analysis setup > Attribute filters. | Found: In the Viva Insights web app, under Analysis setup on the left, select Attribute filters. Under Data field quality, select Enable filter for the filtered attributes you'd like analysts to access in their reports. | Fix: Use the full existing control-table path in these prose instructions: 'Viva Insights web app > Analysis setup > Attribute filters > Data field quality > Enable filter'. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/enable-filters-for-reports
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks readers to check organisational data-upload coverage and who holds the Insights Administrator role, but neither control has a table row. | Found: Check that the organisational data upload covers the people ... Confirm who holds the Insights Administrator role ... The table contains only 'Which organisational attributes report users can filter by'. | Fix: Remove the Before rollout bullets beginning 'Check that the organisational data upload covers' and 'Confirm who holds the Insights Administrator role' to align the checklist with the existing table; do not add control rows.
-->
