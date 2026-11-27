---
title: "Viva Engage: network analytics gets custom date ranges, faster refresh and people-manager filters"
slug: "microsoft-viva-network-analytics-enhancements"
roadmapId: 576274
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Engage network analytics is being redesigned, with custom date ranges, people-manager filters and wider organisational filters. It affects network admins and corporate communicators; Microsoft names no admin action."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Microsoft Learn says Viva Engage Premium, needed for all analytics features, is bundled with the Viva Suite and Employee Communications and Communities licences."
audiences: ["service-owner","m365-admin","change-adoption"]
tags: ["viva-engage","analytics","privacy","admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576274"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576274"
    kind: "roadmap"
  - title: "Filter Viva Engage analytics"
    url: "https://learn.microsoft.com/viva/engage/analytics-organizational-data-filtering"
    kind: "learn"
  - title: "View and manage analytics in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/analytics"
    kind: "learn"
  - title: "Employee retention in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/employee-retention-metric"
    kind: "learn"
  - title: "Use the Microsoft Graph API to work with Viva Engage"
    url: "https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["viva-engage-my-team-audiences-and-flexible-targeting-for-leader-communications"]
controls:
  - governs: "Whether users can filter network analytics by employee attributes"
    scope: "tenant"
    ui:
      surface: "Viva Engage admin center"
      path: "Setup & Configuration > Analytics and AI > Network Analytics > Organizational Data Filters"
      docs: "https://learn.microsoft.com/viva/engage/analytics-organizational-data-filtering"
    api: null
    note: "Verified Admins and Network Admins. Documented for country, department and job title filters; not stated to cover the new people-manager filters."
  - governs: "Separate switch for people-manager filters, custom date ranges or faster refresh"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-20"
    note: "First briefing for the Viva Engage network analytics enhancements; Learn documents today's filters but not the new manager filters."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Removed the claim that no licence is published for these enhancements and the two Before rollout checks with no controls row; corrected the dashboard licence-share bullet."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 54 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "43695dfe7bf7a074bac8c46fe303fbab"
---

## What's changing

The roadmap item says network analytics in Microsoft Viva Engage is gaining custom date ranges, faster activity data refreshes, updated dashboard and metric table designs, expanded organisational filters with search, and new people-manager filters for viewing direct reports or full reporting hierarchies. Network analytics is the organisation-wide dashboard used by network admins and corporate communicators.

Microsoft Learn does not yet describe the new parts. Its page on filtering Viva Engage analytics documents today's filters: the **All filters** panel offers Date Range, Country, Department and Job Title, and organisational data filters apply to all Network Analytics metrics except retention, engagement benchmarks, themes and sentiment. That page names no people-manager filter and no custom date range, so what follows about the new behaviour is the roadmap's description.

The Learn analytics page says most analytics data refreshes every 24 hours and that conversation and community analytics update in near real time. The roadmap does not say how much faster the refresh will become.

The record lists the item as In development, with a target date of December CY2026, release phase General Availability, platform Web and cloud Worldwide (Standard Multi-Tenant). The description says the updates are "rolling out", which is ahead of the status; treat the December CY2026 date as a target.

## Why it matters

Network analytics is where communications teams judge whether Viva Engage reaches the right people. People-manager filters would let a corporate communicator or network admin cut engagement by a manager's direct reports or reporting hierarchy, which is a finer view of named parts of the organisation than country, department or job title.

Microsoft has not stated what happens on arrival, including whether these changes are on by default or tied to an existing setting. Plan on the dashboard looking different to its users and on the manager filters depending on organisational data being accurate, as Microsoft's page says Viva Engage does no data cleaning on uploaded data.

## Risk assessment

**Data exposure**
- People-manager filters would narrow analytics to a manager's direct reports or full hierarchy. Microsoft has not described privacy protections for them. Today's organisational data filters group values with fewer than 10 users under **Other** to protect privacy; confirm whether the same threshold applies to manager filters.
- Organisational attributes come from the Entra ID directory by default, or from a CSV a Microsoft 365 admin uploads. Errors in that data will appear in filtered results.

**Security & identity**
- The Learn page says Verified Admins, Network Admins and Corporate Communicators can use analytics filtering in the Network Analytics dashboard. No new role is described for the enhancements.

**Autonomy & actions**
- No change: the roadmap describes reporting views and filters, and no action taken on a user's behalf.

**Change & support**
- The redesigned dashboard and metric tables will change what analytics users see. Expect questions from communications teams about layout, the new date range control and why numbers differ from earlier views after the faster refresh.
- Learn requires at least 50% of network users to hold Viva Suite, Employee Communications and Communities or Viva Engage premium licences for dashboard visibility; the filtering page lists only the first two.

## Cost and licensing

Learn's analytics page says that to use all analytics features, users must have Viva Engage Premium, which is bundled with the *Viva Suite* and *Employee Communications and Communities* licences. It also says the **Network analytics** dashboard is visible only when at least 50% of the network's users are licensed for Viva Suite, Employee Communications and Communities, or the Viva Engage premium license.

The filtering page calls Organizational Data Filters a Viva Engage premium feature.

Indirect costs are admin time to check organisational data in Entra ID or prepare a CSV upload, and communications time to brief the people who use the dashboard.

## Scope

The audience is network admins, Verified Admins and corporate communicators who open Network Analytics. Learn lists Verified Admins and Network Admins as the roles that can manage Organizational Data Filters in the Viva Engage admin center.

The record lists Worldwide (Standard Multi-Tenant) as the only cloud, with Web as the platform. Other clouds are not listed on the roadmap item.

Prerequisites documented today: Viva Engage Premium licensing as above, and organisational attributes (country, department, job title) either from the Entra ID directory or from a CSV uploaded through the Microsoft 365 admin center. The CSV must include the Microsoft_PersonEmail column. Which attribute the people-manager filters read is not yet documented.

## Governance guidance

### Before rollout
- Tell network admins and corporate communicators that the dashboard is being redesigned, with a target of December CY2026.

### At rollout
- Open the Viva Engage admin center and check the **Organizational Data Filters** toggle is in the state you intend.
- Test the new date range and manager filters with a corporate communicator before wider use.

### After rollout
- Compare filtered results against known headcounts for a manager's team and note values grouped under **Other** or **Unspecified**.
- Watch Message center and the Learn filtering page for documentation of the people-manager filters.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can filter network analytics by employee attributes</strong><br><small>Tenant</small><br><small class="controls__note">Verified Admins and Network Admins. Documented for country, department and job title filters; not stated to cover the new people-manager filters.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Setup &amp; Configuration › Analytics and AI › Network Analytics › Organizational Data Filters <a href="https://learn.microsoft.com/viva/engage/analytics-organizational-data-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for people-manager filters, custom date ranges or faster refresh</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control is the **Organizational Data Filters** toggle. Learn says the feature is enabled by default in a network, and that Verified Admins and Network Admins can manage it. Whether the new people-manager filters, custom date ranges or faster refresh sit behind that toggle is not stated.

The Learn page names no separate switch for the new features and documents no API or PowerShell setting for the toggle at the time of writing (November 2026). Organisational data itself comes from Entra ID or a CSV upload in the Microsoft 365 admin center, so correcting filter values happens there, not in Viva Engage.

## Open questions

- Are the people-manager filters and custom date ranges controlled by the existing **Organizational Data Filters** toggle, or by nothing an administrator can set? Watch the Learn filtering page.
- Which user profile attribute defines direct reports and reporting hierarchy, and does the CSV upload need extra columns? Watch the Learn filtering page.
- Does the minimum-of-10-users privacy grouping apply to manager filters, and can an individual's activity be inferred from a small team?
- When will the redesign reach tenants, given the record's In development status and December CY2026 target? Watch Message center and the roadmap item.

<!-- rationale
risk: Low. The roadmap describes new views and filters over analytics that network admins and corporate communicators can already open; it names no new data source or autonomous action.
cost: Low. Network analytics already depends on Viva Engage Premium licensing (Viva Suite or Employee Communications and Communities); no separate price or meter for these enhancements is published, so the known cost is admin time.
impact: Medium. The dashboard and metric tables are redesigned for the roles that use network analytics: network admins and corporate communicators. Other users do not see it.
-->
