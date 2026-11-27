---
title: "Microsoft 365 admin center: data quality report for people profile data"
slug: "m365-admin-center-data-quality-report-for-profile-data"
roadmapId: 568937
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "A new report in Microsoft 365 Organizational Data Service shows how complete and healthy people data is. It is read-only and aimed at admins; nobody has to act, but gaps it finds affect People Card, Org Explorer and Copilot."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Organizational Data Service getting-started page says licensing requirements vary by the app that consumes the data, for example at least one Exchange Online licence for Microsoft 365 Profile. No licence specific to the report is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["organizational-data-service","m365-admin-center","m365-copilot","cowork","data-governance","monitoring"]
sources:
  - title: "Microsoft 365 admin center: Data Quality Report for Profile Data"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568937"
    kind: "roadmap"
  - title: "How to understand and improve data quality metrics"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/data-quality-metrics"
    kind: "learn"
  - title: "How to get started with Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started"
    kind: "learn"
  - title: "Introduction to Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/organizational-data"
    kind: "learn"
  - title: "How Microsoft 365 Organizational Data Service works"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/how-org-data-service-works"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-people-connectors-introduces-people-data-ingestions-with-differentiat","microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center"]
controls:
  - governs: "Entry point to Microsoft 365 Organizational Data Service in the admin centre"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Data management > Microsoft 365 Organizational Data Service"
      docs: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started"
    api: null
    note: "Sign-in roles per Learn: Global Administrator or Organizational Data Source Administrator. Where the report sits inside the service is not documented."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item, now Launched, covering what the report measures, the roles in the roadmap and in Learn, and the gaps Microsoft has not documented."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 54 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 56 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 53
  unconfirmed: 2
  contradicted: 1
  attempts: 0
  hash: "90617299833c335e3c14d1ef91e69da2"
---

## What's changing

Microsoft 365 Organizational Data Service gets a data quality report that shows how complete and healthy the people data in Microsoft 365 is. The roadmap item says it covers the people attributes used by experiences such as People Card, Org Explorer, Microsoft 365 Copilot and Microsoft 365 Cowork, and that it is available to Organizational Data Administrators, People Administrators and AI Administrators.

Microsoft Learn describes what the service measures on its data quality metrics page. It measures two kinds of data: the health of the manager hierarchy and the health of each user attribute. For the hierarchy, it reports hierarchy completeness (the percentage of employees with a complete, resolved manager chain) and three issue categories: a missing manager, an unresolved manager (a value that does not resolve to a person in Microsoft Entra ID) and a reporting loop. It also reports the number of separate hierarchy trees and the share of employees in the largest tree. For attributes, it reports coverage (the percentage of people with a value) and the number of unique values, which flags attributes with one value for everyone or so many values that they cannot be used to group people. Learn does not say outright that this page describes the new report in the admin centre, so treat the metrics as the likely contents and confirm them in your tenant.

The page says a quality report tells you what is wrong, not where to correct it, and does not identify which source supplied a value. Corrections generally belong in the authoritative source that supplies the attribute.

The roadmap item is Launched, with a target and preview date of October CY2026. Its release phases are General Availability and Preview, the cloud is Worldwide (Standard Multi-Tenant) and the platform is Web.

## Why it matters

Copilot and people experiences are only as good as the people data behind them. Learn says that when someone asks Microsoft 365 Copilot about "my team" or "my organization", the agent uses the manager hierarchy to decide who to include, and that Org Explorer draws the same hierarchy. A broken manager link near the top of the organisation can remove a whole branch from the tree, so one fix can improve results for many people.

This report gives a service owner a way to see those gaps and scope a request to whoever owns the HR or identity data. Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so the report is something to review rather than a change to prepare for.

## Risk assessment

**Data exposure**
- The report reads people attributes and manager relationships that Microsoft 365 apps already use. Learn describes counts and percentages, such as the share of people with a job title. Microsoft Learn does not say whether the report lists named individuals, so confirm that before widening access to it.

**Security & identity**
- The roadmap item names Organizational Data Administrators, People Administrators and AI Administrators. The Organizational Data Service getting-started page names Microsoft 365 Global Administrator or Organizational Data Source Administrator for signing in to the service. Learn does not reconcile the two lists, so check which roles in your tenant can open the report.

**Autonomy & actions**
- No change documented: Learn says the report tells you what is wrong, not where to correct it, and describes no automatic fix.

**Change & support**
- Acting on the report changes what People Card, Org Explorer and Copilot show. Learn says that by default Microsoft Entra ID takes precedence over Organizational Data Service for overlapping profile attributes, so a fix made in Organizational Data Service may not show where Entra ID already holds a value.
- Learn says confirming a fix needs a refreshed assessment after corrected data flows through the source, so expect a delay before a health label changes.

## Cost and licensing

Microsoft has published no licence, meter or price for the data quality report itself at the time of writing (November 2026). The Organizational Data Service getting-started page says that licensing requirements vary based on the Microsoft 365 or Viva app that will consume the data. Its table lists at least one Exchange Online licence in the tenant for Microsoft 365 Profile, a Viva Insights licence or a Microsoft 365 licence that includes Insights, a Viva Glint licence or a Microsoft 365 licence that includes Viva Glint, and Microsoft 365 Copilot or Viva for People Skills.

The cost Microsoft's pages show is indirect: admin time, and the effort of the HR, identity or connector teams who own the source data. The page says corrections generally belong in the authoritative source, so the work sits with whoever runs that pipeline.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with release phases General Availability and Preview. Microsoft's roadmap record does not list other clouds.

The roadmap names Organizational Data Administrators, People Administrators and AI Administrators as the roles that can use the report. The getting-started page names Microsoft 365 Global Administrator or Organizational Data Source Administrator as the accounts that sign in to the service in the Microsoft 365 admin center. Microsoft has not said how the two lists relate.

The measures cover people data that reaches Microsoft 365 from sources including Microsoft Entra ID, Copilot connectors for people data, Organizational Data Service and SharePoint User Profile.

## Governance guidance

### Before rollout
- Confirm which of your administrators hold the roles the roadmap names, and which can sign in to Organizational Data Service, before you tell anyone the report exists.
- Identify who owns each people-data source (Microsoft Entra ID, HR connectors, SharePoint User Profile) so findings have an owner to go to.
- Ask the identity team how manager values are populated, since missing manager, unresolved manager and reporting loop are the hierarchy issues the report categorises.

### At rollout
- Open Organizational Data Service in the Microsoft 365 admin center and look for the data quality report.
- Record a first baseline of hierarchy completeness, tree count and attribute coverage so later changes can be compared with it.
- Check whether the report shows named individuals before sharing screenshots outside the admin group.

### After rollout
- Raise findings with the source owner in the report's issue categories, for example a count of unresolved manager references, rather than a general complaint about the hierarchy.
- Review the report again after corrected data has flowed through the source, as Learn says a refreshed assessment is needed to confirm a fix.
- Check profile source precedence if a corrected value does not appear, because Entra ID takes precedence by default over Organizational Data Service.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Entry point to Microsoft 365 Organizational Data Service in the admin centre</strong><br><small>Tenant</small><br><small class="controls__note">Sign-in roles per Learn: Global Administrator or Organizational Data Source Administrator. Where the report sits inside the service is not documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Data management › Microsoft 365 Organizational Data Service <a href="https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table gives the documented way into Organizational Data Service. Microsoft Learn does not give a path to the data quality report within it at the time of writing (November 2026), so the report's own location is not a table row.

No setting that switches the report on or off, or limits who sees it, is documented on the pages read. Roles come from the roadmap item and from the getting-started page, which name different roles. The report is a measurement; changes to people data are made in the source systems, not in the report.

## Open questions

- Where in the Microsoft 365 admin center does the data quality report appear, and is it part of Microsoft 365 Organizational Data Service pages that Learn already documents? Watch the data quality metrics page on Microsoft Learn.
- Which roles can open the report: the Organizational Data Administrator, People Administrator and AI Administrator roles in the roadmap item, the Global Administrator and Organizational Data Source Administrator roles in the getting-started page, or both?
- Is the report on for every tenant on arrival, or does an administrator have to turn it on? Microsoft has not stated the default.
- Does the report list named people or only aggregate counts and percentages?
- Is there an API or export for the report? Microsoft Learn documents none at the time of writing (November 2026).

<!-- rationale
risk: Low. The report measures people data and, on the page Microsoft documents, changes nothing; the exposure is poor data feeding People Card, Org Explorer and Copilot. Microsoft has not stated a default, so this rates today's behaviour continuing.
cost: Low. The Learn pages read name no licence or meter for the report itself; the known cost is admin time to fix source data. Organizational Data Service licensing depends on the apps that consume the data.
impact: Low. The roadmap names Organizational Data Administrators, People Administrators and AI Administrators as the audience; other users notice only if fixes to people data change what they see.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing / behaviour: Attributes with too many distinct values cannot be used to group people. | Found: Searched: "Organizational Data Service" "data quality" automatic remediation unique values segmentation. Read data-quality-metrics, Fragmented attributes: it says difficult to use for segmentation, not impossible to group. | Fix: Replace 'so many values that they cannot be used to group people' with 'so many values that they become difficult to use for segmentation', matching https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/data-quality-metrics.
- [unsupported, major] summary; Governance controls; rationale: risk / behaviour: The report is read-only, changes nothing and cannot itself change people data. | Found: Searched: "Organizational Data Service" "data quality" "read-only" "individual". Read data-quality-metrics and organizational-data; corrections generally belong in the authoritative source, but neither establishes an exclusively read-only report. | Fix: In the summary replace 'It is read-only and aimed at admins' with 'It is aimed at admins'. Replace the final Governance controls sentence with 'Corrections generally belong in the authoritative source that supplies the attribute.' In the risk rationale replace 'and, on the page Microsoft documents, changes nothing' with 'and Learn directs corrections to the authoritative source'. The narrower wording is supported by https://learn.microsoft.com/microsoft-365-apps/org-data-service/manage/data-quality-metrics.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist's instruction to check profile source precedence has a corresponding controls-table row. | Found: Checklist: 'Check profile source precedence if a corrected value does not appear'. The sole table row is 'Entry point to Microsoft 365 Organizational Data Service in the admin centre'. | Fix: Remove the After rollout bullet beginning 'Check profile source precedence if a corrected value does not appear'. The supported factual explanation can remain under Change & support.
-->
