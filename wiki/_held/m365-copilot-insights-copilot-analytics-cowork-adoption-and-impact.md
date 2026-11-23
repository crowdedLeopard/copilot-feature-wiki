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
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "The Consumption Dashboard page names roles and no licence. The Copilot Dashboard page says it is available to customers with a Microsoft 365 or Office 365 business or enterprise subscription and an active Exchange Online account. A licence for the Cowork views is not yet published."
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
    note: "Viva Insights Administrator or AI admin. Requires access to Copilot insights to be granted too; minimum team size of five or more applies."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-11T22:10:10"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: Cowork metrics, export and consumption query, with the identification and manager-access controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 90 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 85
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "58fd2bd79495af6134a7e0143b909d2f"
---

## What's changing

Microsoft has added Copilot Cowork adoption and impact metrics to the Consumption Dashboard in the Viva Insights web app. The roadmap item calls it the AI Cost dashboard; Learn calls it the Consumption Dashboard. The roadmap item states that the metrics are reached from that dashboard and from the Copilot dashboard, with export, and that analysts can query all metrics with a new query in advanced insights. The Microsoft 365 Copilot release notes entry dated October 06, 2026 describes the same change.

On the Microsoft 365 services page, a Cowork page shows cards for Cowork active users, Cowork Credit usage and average tasks per user. Charts break usage down by task category, by user-initiated versus scheduled tasks, and by group, job function, organisation or policy. Learn says Cowork tasks and sessions measure different things, because multiple tasks, particularly scheduled ones, can map to one billed session. The metrics reference also defines Cowork assisted hours, an estimate of employee hours that benefited from Cowork.

Two routes take the data out of the dashboard. The export downloads daily or weekly user-level credit metrics as a .zip of two .csv files, including a ServiceName column that can read Copilot Cowork. Analysts can also run the consumption query (Create analysis > Create custom query > Consumption query), which returns four preselected credit metrics per person, service and day, with no other metric categories added. Learn documents the Cowork metrics against the Consumption Dashboard; the Learn pages read describe no Cowork metrics on the Copilot Dashboard itself, which is the gap to confirm.

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

**Licence.** The Consumption Dashboard page names roles and no licence, and a licence specific to the Cowork views is not yet published. The Copilot Dashboard page says the dashboard is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise and an active Exchange Online account.

**Meter.** These views do not add a meter of their own on any page read. They report Copilot Credits, which the metrics reference calls the common currency for eligible Microsoft services with usage-based billing. The Consumption Dashboard page says credit usage there is for reference only and that official billing and detailed charges are in the Microsoft 365 admin center for Copilot Credits.

**Caps.** The dashboard shows each spending policy's limit and how many users are at or near it. It displays limits and does not set them; spending policies are covered in [Spending policies](/concepts/spending-policies/).

**Indirect costs.** Analyst time to build reports from the export or consumption query, and admin time to set manager access and identification policies.

## Scope

Roles: Insights Analysts with global partition access (dashboard and consumption queries), Managers (dashboard for their group), and Microsoft 365 Global Administrators (dashboard, scoped to the entire organisation). Export is currently limited by Learn to analysts with global partition access and Microsoft 365 Global Administrators; the export page says manager export will be available by the end of July.

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. The Consumption Dashboard page says consumption data is currently available only for Copilot Cowork and the Work IQ API. The Consumption Dashboard is not available to users who have access to the Microsoft Copilot and Agent Dashboard in the Viva Insights web app, per Learn.

The Viva Insights web app is on by default, so there is no separate rollout step documented for the Cowork views. Status is Launched with a target of July CY2026.

## Governance guidance

### Before rollout

- Decide who in your tenant holds the Insights Analyst role with global partition access, since that role gets person-level consumption queries and export.
- Decide whether managers should see team-scoped Cowork and credit data, and set Manager settings to match.
- Decide whether named users should ever appear in Cowork exports, and who may hold the identification policy.
- Tell managers and analysts that dashboard credits are for reference and that billing sits in the Microsoft 365 admin center.

### At rollout

- Create the VFAM identification policy for the groups, if any, who should see named users; leave it unset to keep the hashed-ID export.
- Review the unified exclusion list on the dashboard settings page for people whose data should not appear in aggregates, and turn the policy on if you create one.
- Test the export (daily and weekly) and the consumption query with a small analyst group and check the output columns match what your reports need.

### After rollout

- Compare Cowork credits in the dashboard with the Copilot Credits figures in the Microsoft 365 admin center and record any differences.
- Review who holds identification, analyst and manager access each quarter.
- Re-check the Learn export page for the end of the preview banner and manager export.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can identify named users and see identified outputs, including Consumption Dashboard export</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator or AI Administrator. Group or user policies allow up to 20 users or groups per policy; one tenant-wide policy per feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Viva feature access › Viva Insights › identification feature <a href="https://learn.microsoft.com/viva/insights/identification-copilot-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;FeatureId&gt; -Name &lt;PolicyName&gt; -IsFeatureEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether managers get team-scoped access to consumption insights, dashboard and export</strong><br><small>Group</small><br><small class="controls__note">Viva Insights Administrator or AI admin. Requires access to Copilot insights to be granted too; minimum team size of five or more applies.</small></td><td data-label="Admin UI"><strong>Viva Insights web app (Admin portal)</strong><br>Settings › Manager settings › Grant managers scoped access to Consumption insights <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Identification is the main privacy control: only a Microsoft 365 Global Administrator or an AI Administrator can create and manage the policy, and either can use the Microsoft 365 admin center or PowerShell. Policies can be set per group or user, or for the tenant. The feature ID for the identification policy is on the Feature access management page that Learn links.

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
impact: Low. Learn lists Insights Analysts with global partition access, Managers and Microsoft 365 Global Administrators as the audience, so most users never see it.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: consumption query output granularity / behaviour: Following the printed consumption-query route returns the metrics per person, service and day. | Found: Source data is PersonId, ServiceId, and MetricDate (one row per person, per service, per day). By default, consumption queries are grouped by week. To change this to day or month, select More Settings under the Description box. | Fix: Replace 'which returns four preselected credit metrics per person, service and day, with no other metric categories added' with 'which has four preselected consumption metrics and cannot add other metric categories. Its source data is per person, service and day, but queries are grouped by week by default; for daily grouping, select More Settings under the Description box and set Group by to Day.' Source: https://learn.microsoft.com/viva/insights/advanced/analyst/ai-cost-query. | Source: https://learn.microsoft.com/viva/insights/advanced/analyst/ai-cost-query
- [unsupported, blocker] Governance controls: identification feature ID / command: The Feature access management page linked by the identification guide supplies the identification policy's feature ID. | Found: Searched: Viva identification FeatureId consumption dashboard. Read identification guide, feature-access-management and Add-VivaModuleFeaturePolicy. The feature-access page has no identification row or identification FeatureId; the cmdlet reference points to Get-VivaModuleFeature. | Fix: Replace 'The feature ID for the identification policy is on the Feature access management page that Learn links' with 'The Add-VivaModuleFeaturePolicy reference says to obtain FeatureId using Get-VivaModuleFeature.' Source: https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy. Do not invent an identification FeatureId.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].governs; controls[1].scope; Governance guidance / applicability: Manager settings govern team-scoped Consumption Dashboard and export access. | Found: When you select this, you'll allow managers with the minimum team size to access their team-scoped data in the Consumption Dashboard and export data. | Fix: Append to controls[1].note: 'The manager-settings page includes export in this permission, but the export page currently limits export to global-partition analysts and Microsoft 365 Global Administrators and says manager export will be available by the end of July.' Preserve the existing discussion of this documentation discrepancy. Source: https://learn.microsoft.com/viva/insights/org-team-insights/export-ai-cost-metrics. | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings
- [supported, minor] Scope: consumption data coverage / availability: The Consumption Dashboard page says consumption data is currently available only for Copilot Cowork and Work IQ API. | Found: Microsoft 365 services page Consumption data is currently available only for Copilot Cowork and the Work IQ API. | Fix: Replace the sentence with 'For its Microsoft 365 services page, the Consumption Dashboard guide says consumption data is currently available only for Copilot Cowork and the Work IQ API.' This preserves the source's scope without suggesting that its separate GitHub page has no consumption data. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard
- [supported, minor] Scope: users with Copilot and Agent Dashboard access / availability: The Consumption Dashboard guide says the dashboard is unavailable to users who have access to the Copilot and Agent Dashboard. | Found: The Consumption Dashboard is not available for users who have access to the Microsoft Copilot and Agent Dashboard in the Viva Insights web app | Fix: After this sentence, add: 'The delegation FAQ separately says Combined access can give delegates access to the Consumption Dashboard, so the documentation is not consistent on delegated access.' Cite https://learn.microsoft.com/viva/insights/org-team-insights/delegate-access#faqs, which says: 'To give a delegate access, assign the "Combined access" scope, which is available if you have both company-level and group access.' | Source: https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; Open questions / licensing: The licensing model is unknown despite the published licensing for the surrounding Viva Insights product. | Found: Microsoft Copilot plans also include manager, leader, and advanced analysis for all employees who have an assigned Copilot license. | Fix: Set licensing.model to 'included'. Add to licensing.notes and the Licence paragraph: 'The general Viva Insights requirement is applicable Viva Insights licensing and a Microsoft 365 or Office 365 tenant with Exchange Online Plan 1 or Plan 2. Microsoft Copilot plans include manager, leader, and advanced analysis for employees assigned a Copilot license; a license specific to the Cowork views is not yet published.' Cite https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements. Searches for Consumption Dashboard license Cowork and Consumption Dashboard pricing/licensing found no Cowork-view-specific entitlement; this is the standard's minor product-level licensing understatement, not evidence of a new reporting charge. | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist instructs administrators to review and enable the exclusion-list policy, but the controls table has no exclusion-list row. | Found: Review the unified exclusion list on the dashboard settings page ... and turn the policy on if you create one. Controls table: identification policy; manager consumption access. | Fix: The At rollout exclusion-list instruction has no matching controls row. Remove that checklist bullet; retain the existing separate-controls paragraph and its dashboard-settings link. Do not add a new control row as part of this correction.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; controls / consistency: The checklist tells administrators to decide and review analyst access, but the controls table has no analyst-access row. | Found: Decide who in your tenant holds the Insights Analyst role with global partition access Review who holds identification, analyst and manager access each quarter. Controls table: identification policy; manager consumption access. | Fix: The Before rollout analyst-access step and the After rollout analyst-access review have no matching controls row. Remove the Before rollout analyst-role bullet and replace the quarterly-review bullet with 'Review who holds identification and manager access each quarter.' Retain the separate-controls note about removing analysts from the global partition; do not add a row.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: Impact is low because the audience consists of analysts, managers and Global Administrators. | Found: impact: "low" Low. Learn lists Insights Analysts with global partition access, Managers and Microsoft 365 Global Administrators as the audience Assessment scale: medium: specific roles such as makers, analysts or one business unit. | Fix: Set impact to 'medium' and replace its rationale with 'Medium. The reporting change reaches specific roles: Insights Analysts with global partition access, Managers and Microsoft 365 Global Administrators, rather than most users.' The verified audience matches the standard's specific-role definition.
- [supported, minor] rationale: cost; Cost and licensing: Meter / cost: The Cowork usage represented by the reported credits has usage-based billing. | Found: Cowork uses a usage-based billing model. Activities such as model responses, tool and skill calls, image generation, and browser tasks count toward your organization's consumption. | Fix: Add https://learn.microsoft.com/copilot/cowork/cowork-admin-governance#usage-based-billing to sources for the underlying Cowork billing premise. Do not change the reporting feature's cost to metered: the cited passage meters Cowork activity, not these views. | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance#usage-based-billing
-->
