---
title: "Microsoft Viva: Cowork adoption and impact in the Consumption Dashboard and Copilot Dashboard"
slug: "m365-copilot-insights-copilot-analytics-cowork-adoption-and-impact"
roadmapId: 567005
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Launched: Cowork usage, credit and assisted-value metrics in the Consumption Dashboard, with export and a consumption query for analysts. Admins decide who sees named users and manager access; no action is forced."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Viva Insights needs applicable licensing and a Microsoft 365 or Office 365 tenant with Exchange Online Plan 1 or 2. Advanced analysis, including consumption queries, needs at least 50 assigned Viva Insights licenses, which can be a combination of Copilot and Viva Insights licenses. A license specific to the Cowork views is not yet published."
audiences: ["finops","m365-admin","change-adoption","service-owner"]
tags: ["analytics","cowork","copilot-credits","finops","adoption","viva-insights","data-export","viva-feature-access-management","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 567005"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567005"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "How to use the Consumption Dashboard in Insights"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard"
    kind: "learn"
  - title: "Export AI cost metrics from the Consumption Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/export-ai-cost-metrics"
    kind: "learn"
  - title: "Create a custom consumption query"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/ai-cost-query"
    kind: "learn"
  - title: "Advanced analysis metrics"
    url: "https://learn.microsoft.com/viva/insights/advanced/reference/metrics"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Configure manager settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    kind: "learn"
  - title: "Identification in Copilot Analytics"
    url: "https://learn.microsoft.com/viva/insights/identification-copilot-analytics"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Environment requirements for Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements"
    kind: "learn"
  - title: "Delegate access to the Copilot Dashboard, Agent Dashboard, and Copilot insights"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/delegate-access"
    kind: "learn"
  - title: "Copilot Cowork admin governance: usage-based billing"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance#usage-based-billing"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard","m365-copilot-agent-365-business-analytics-experience","spending-policies","copilot-credits"]
controls:
  - governs: "Who can identify named users and see identified outputs, including Consumption Dashboard export"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Viva feature access > Viva Insights > identification feature"
      docs: "https://learn.microsoft.com/viva/insights/identification-copilot-analytics"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <FeatureId> -Name <PolicyName> -IsFeatureEnabled $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    note: "Global Administrator or AI Administrator. Group or user policies allow up to 20 users or groups per policy; one tenant-wide policy per feature."
  - governs: "Whether managers get team-scoped access to consumption insights, dashboard and export"
    scope: "group"
    ui:
      surface: "Viva Insights web app (Admin portal)"
      path: "Settings > Manager settings > Grant managers scoped access to Consumption insights"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    api: null
    note: "Viva Insights Administrator or AI admin; needs Copilot insights too; team must meet the configured Minimum team size (at least five, includes the manager). Export page limits export to analysts and Global Administrators for now."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-11T22:10:10"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: Cowork metrics, export and consumption query, with the identification and manager-access controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 90 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the consumption query grouping, removed an unsupported feature-ID statement and two checklist steps with no controls row, set licensing to included, impact to medium, and added delegation and manager-export caveats."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the licence statement: advanced analysis, including consumption queries, needs at least 50 assigned Viva Insights licenses; clarified the Copilot Dashboard threshold and the manager minimum team size."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 93 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 93
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1696a317b028d516f37d462c0a6ab6e5"
---

## What's changing

Microsoft has added Copilot Cowork adoption and impact metrics to the Consumption Dashboard in the Viva Insights web app. The roadmap item calls it the AI Cost dashboard; Learn calls it the Consumption Dashboard. The roadmap item states that the metrics are reached from that dashboard and from the Copilot dashboard, with export, and that analysts can query all metrics with a new query in advanced insights. The Microsoft 365 Copilot release notes entry dated October 06, 2026 describes the same change.

On the Microsoft 365 services page, a Cowork page shows cards for Cowork active users, Cowork Credit usage and average tasks per user. Charts break usage down by task category, by user-initiated versus scheduled tasks, and by group, job function, organisation or policy. Learn says Cowork tasks and sessions measure different things, because multiple tasks, particularly scheduled ones, can map to one billed session. The metrics reference also defines Cowork assisted hours, an estimate of employee hours that benefited from Cowork.

Two routes take the data out of the dashboard. The export downloads daily or weekly user-level credit metrics as a .zip of two .csv files, including a ServiceName column that can read Copilot Cowork. Analysts can also run the consumption query (Create analysis > Create custom query > Consumption query), which has four preselected consumption metrics and cannot add other metric categories. Its source data is per person, service and day, but queries are grouped by week by default; for daily grouping, select More Settings under the Description box and set Group by to Day. Learn documents the Cowork metrics against the Consumption Dashboard; the Learn pages read describe no Cowork metrics on the Copilot Dashboard itself, which is the gap to confirm.

The roadmap record gives status Launched, release phase General Availability and a target of July CY2026. The Learn export page still carries a public preview banner, so the two sources differ on maturity.

## Why it matters

This gives FinOps and adoption owners a Cowork view that joins usage, credits and estimated value in one place, and a person-level feed for their own reports. If Cowork is spending Copilot Credits in your tenant, this is where you can see who and which task types drive it. Learn says the dashboard figures are for reference only and that official billing is in the Microsoft 365 admin center.

The viewing audience arrives without an admin switch for Cowork specifically: Learn says the Viva Insights web app is on by default and the export is on by default for eligible tenants and users. Decide before analysts and managers start using it who may see named users, which managers get team-scoped consumption data, and whether any people should be excluded from aggregates.

## Risk assessment

**Data exposure**

- The export is user-level: one row per person, service and date, covering licensed and unlicensed users, with spending policy limit, user limit and credits used. Learn says person identifiers are hashed unless an administrator has enabled identifiable export for the user.
- Identified outputs are governed by a dedicated Viva Feature Access Management (VFAM) policy that only a Microsoft 365 Global Administrator or AI Administrator can create and manage. See the controls table.

**Security & identity**

- Learn lists Insights Analysts with global partition access, Managers and Microsoft 365 Global Administrators as the roles with access. Analysts in other partitions cannot run consumption queries, and removing an analyst from the global partition removes their access to all experiences in that partition.
- Manager access is a decision, not a default you can assume: the Consumption Dashboard page says consumption insights are enabled for all managers by default, while the manager settings page presents the consumption option as optional. Check the setting in the controls table.
- Users can ask their tenant admin to add them to the exclusion list, and Learn says the policy must be turned on for an exclusion list to apply.

**Autonomy & actions**

- No change: these are reporting views and an export. They do not change what Cowork can do or who can use it.

**Change & support**

- Expect questions about differing totals: Learn says Cowork tasks and billed sessions can differ, and dashboard credits are not the invoice.
- Learn says the most recent credit consumption data is available up to one to two days before the current date, and export timing varies by day or week option.
- Support staff will meet a preview banner on the export page while the roadmap says General Availability.

## Cost and licensing

**Licence.** The Consumption Dashboard page names roles and no licence. The general Viva Insights requirement is applicable Viva Insights licensing and a Microsoft 365 or Office 365 tenant with Exchange Online Plan 1 or Plan 2. Microsoft Copilot plans include manager, leader, and advanced analysis for employees assigned a Copilot license; a license specific to the Cowork views is not yet published ([Environment requirements for Viva Insights](https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements)). For advanced analysis, including consumption queries, Microsoft requires at least 50 assigned Viva Insights service-plan licenses, which can be a combination of Copilot and Viva Insights licenses. The Copilot Dashboard page says the dashboard is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise and an active Exchange Online account. Its guide says data processing requires 50 assigned Viva Insights licenses or one assigned Copilot license, whereas the environment requirements page still states 50 assigned licenses for advanced analysis and the Copilot Dashboard ([Copilot Dashboard guide](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard)).

**Meter.** These views do not add a meter of their own on any page read. They report Copilot Credits, which the metrics reference calls the common currency for eligible Microsoft services with usage-based billing. The Consumption Dashboard page says credit usage there is for reference only and that official billing and detailed charges are in the Microsoft 365 admin center for Copilot Credits.

**Caps.** The dashboard shows each spending policy's limit and how many users are at or near it. It displays limits and does not set them; spending policies are covered in [Spending policies](/concepts/spending-policies/).

**Indirect costs.** Analyst time to build reports from the export or consumption query, and admin time to set manager access and identification policies.

## Scope

Roles: Insights Analysts with global partition access (dashboard and consumption queries), Managers (dashboard for their group), and Microsoft 365 Global Administrators (dashboard, scoped to the entire organisation). Export is currently limited by Learn to analysts with global partition access and Microsoft 365 Global Administrators; the export page says manager export will be available by the end of July.

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. For its Microsoft 365 services page, the Consumption Dashboard guide says consumption data is currently available only for Copilot Cowork and the Work IQ API. The Consumption Dashboard is not available to users who have access to the Microsoft Copilot and Agent Dashboard in the Viva Insights web app, per Learn. The delegation FAQ separately says Combined access can give delegates access to the Consumption Dashboard, so the documentation is not consistent on delegated access ([Delegate access](https://learn.microsoft.com/viva/insights/org-team-insights/delegate-access#faqs)).

The Viva Insights web app is on by default, so there is no separate rollout step documented for the Cowork views. Status is Launched with a target of July CY2026.

## Governance guidance

### Before rollout

- Decide whether managers should see team-scoped Cowork and credit data, and set Manager settings to match.
- Decide whether named users should ever appear in Cowork exports, and who may hold the identification policy.
- Tell managers and analysts that dashboard credits are for reference and that billing sits in the Microsoft 365 admin center.

### At rollout

- Create the VFAM identification policy for the groups, if any, who should see named users; leave it unset to keep the hashed-ID export.
- Test the export (daily and weekly) and the consumption query with a small analyst group and check the output columns match what your reports need.

### After rollout

- Compare Cowork credits in the dashboard with the Copilot Credits figures in the Microsoft 365 admin center and record any differences.
- Review who holds identification and manager access each quarter.
- Re-check the Learn export page for the end of the preview banner and manager export.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can identify named users and see identified outputs, including Consumption Dashboard export</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator or AI Administrator. Group or user policies allow up to 20 users or groups per policy; one tenant-wide policy per feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Viva feature access › Viva Insights › identification feature <a href="https://learn.microsoft.com/viva/insights/identification-copilot-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;FeatureId&gt; -Name &lt;PolicyName&gt; -IsFeatureEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether managers get team-scoped access to consumption insights, dashboard and export</strong><br><small>Group</small><br><small class="controls__note">Viva Insights Administrator or AI admin; needs Copilot insights too; team must meet the configured Minimum team size (at least five, includes the manager). Export page limits export to analysts and Global Administrators for now.</small></td><td data-label="Admin UI"><strong>Viva Insights web app (Admin portal)</strong><br>Settings › Manager settings › Grant managers scoped access to Consumption insights <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Identification is the main privacy control: only a Microsoft 365 Global Administrator or an AI Administrator can create and manage the policy, and either can use the Microsoft 365 admin center or PowerShell. Policies can be set per group or user, or for the tenant. The Add-VivaModuleFeaturePolicy reference says to obtain FeatureId using Get-VivaModuleFeature.

Manager access is configured by a Viva Insights Administrator or AI admin, and changes apply after one hour. Learn says you cannot grant managers consumption insights without also granting Copilot insights.

Separate controls without a path read for this briefing: the Viva Insights web app control (Learn says turning it off disables the entire app, including the Copilot Dashboard, Copilot Analytics reports and advanced analysis), the unified exclusion list (see the [dashboard settings page](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard)), and removing analysts from the global partition. See [Viva Feature Access Management](/concepts/viva-feature-access-management/) for how those policies work.

## Open questions

- Which Cowork metrics appear on the Copilot Dashboard itself, as the roadmap item says? Watch the Copilot Dashboard Learn page and the metrics reference.
- Does the person query include Cowork metrics, as the release notes say? The consumption query page lists four preselected credit metrics.
- When does the Learn export page leave preview, and when does manager export arrive, given the roadmap says General Availability?
- Are consumption insights on for all managers by default, or only after an admin selects the manager setting? The two Learn pages read differ in tone.
- Which licence, if any, specifically covers the Cowork views? Watch the Consumption Dashboard page and Message center.

<!-- rationale
risk: Low. Learn describes the export as hashed person IDs unless an administrator has enabled identifiable export, so named users appear only after a separate access decision.
cost: Low. Learn names no licence or meter for these views, so the known cost is analyst and admin time; the Cowork credits they report on are billed separately and the figures are for reference only.
impact: Medium. The reporting change reaches specific roles: Insights Analysts with global partition access, Managers and Microsoft 365 Global Administrators, rather than most users.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Identification policies are reached in Microsoft 365 admin center through Settings > Org settings > Viva feature access > Viva Insights > identification feature. | Found: Go to Settings > Org settings > Viva feature access, select Viva Insights, choose the identification feature, and add a policy. | Fix: Keep the documented route and append this instruction to the row note: 'After choosing the identification feature, add a policy.' The cited page gives this final policy-creation step. | Source: https://learn.microsoft.com/viva/insights/identification-copilot-analytics
-->
