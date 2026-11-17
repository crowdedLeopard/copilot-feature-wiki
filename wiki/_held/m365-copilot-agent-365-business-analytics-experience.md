---
title: "Microsoft 365 Copilot: Agent 365 Business Analytics for AI spend, usage and value"
slug: "m365-copilot-agent-365-business-analytics-experience"
roadmapId: 577548
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans one Business Analytics app showing AI cost, usage, value and forecasts for leaders. Admins decide who sees which data; Learn documents it as a Frontier preview and states no licence or price."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn introduction lists at least 50 assigned Copilot licences and spending policies as prerequisites and names no price for the app. Usage-based AI cost it reports is billed through Copilot Credits."
audiences: ["finops","m365-admin","service-owner","change-adoption"]
tags: ["agent-365","analytics","finops","cost-management","spending-policies","copilot-credits","viva-insights","m365-copilot","viva-feature-access-management","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577548"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577548"
    kind: "roadmap"
  - title: "Introduction to Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/introduction"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics Cost & forecast page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/cost-forecast"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics Overview page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/overview"
    kind: "learn"
  - title: "Understand AI assisted hours and AI value (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/reference/ai-value"
    kind: "learn"
  - title: "Manage access in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    kind: "learn"
  - title: "Introduction to the Admin section in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/introduction"
    kind: "learn"
  - title: "How to make configurations in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    kind: "learn"
  - title: "How to export data from Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/advanced/export"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
videos: []
related: ["copilot-credits","microsoft-viva-copilot-analytics-agent-dashboard","m365-admin-center-copilot-credits-usage-report","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","copilot-studio-cost-management-m365-admin-center"]
controls:
  - governs: "Who can open Business Analytics, export, see named users, and whose data"
    scope: "user"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Manage > Access management"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    api: null
    note: "Permission sets, partitions and access policies. Global, AI or Viva Insights administrator. Preview documentation."
  - governs: "Whether the Viva Insights web app is on, for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "General control: Microsoft has not confirmed it switches Business Analytics off. Not available in GCC High or DoD per Microsoft."
  - governs: "Spending limits and billing for the usage-based cost the app reports"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Get Started"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "GET /beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Existing control that the app reports on, not a control over the app. Creating policies needs Global or Billing administrator. Beta API."
  - governs: "Whether AI value metrics are displayed, and the assumptions behind them"
    scope: "tenant"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Configurations > Metric calculators > Edit calculator > Value calculator > Value metrics"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    api: null
    note: "Cowork value metrics toggle; off by default. Viva Insights admin, or Global admin for Copilot value metrics."
  - governs: "Minimum group size below which aggregated insights are hidden"
    scope: "tenant"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Configurations > Privacy > Minimum group size"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    api: null
    note: "Value of at least 5. Does not apply to user-level insights that are not aggregated."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap item 577548, with the Frontier preview documentation for access, value metrics, privacy settings and the spend controls it reports on."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 75
  unconfirmed: 1
  contradicted: 8
  attempts: 1
  hash: "533968487d57ab0375df5c0626fc5061"
---

## What's changing

The roadmap item describes Agent 365 Business Analytics as one place that brings AI spend, usage and value together, so leaders can see where AI investment is going, what value it delivers and where to invest next. It lets them explore cost across services, models, agents and users, see the business use cases AI supports, and forecast future spend. The item is listed as In development, with a preview target of November CY2026 and a general availability target of December CY2026, on the web, for Worldwide, GCC, GCC High and DoD. These dates are Microsoft's targets.

Microsoft Learn already documents the app as a Frontier preview (the program that gives customers early access to Microsoft AI features), and says capabilities might change. It describes a dedicated app for business decision makers and general managers with an Overview page, Use cases, Cost & forecast, Users & groups and pages for each AI service. It combines licensed Microsoft 365 Copilot with usage-based services such as Copilot Cowork, agents and GitHub Copilot. What follows about behaviour is the preview documentation, not a final design.

The Cost & forecast page covers usage-based billing and says Microsoft Copilot user subscription licence costs are not included; the Overview page shows Microsoft 365 Copilot cost as "Included in license". It offers base and growth forecasts and what-if scenarios for a spend cap or model mix. A reporting budget target creates no spending policy, and a scenario changes only the forecast comparison. AI value is an estimate, documented for Cowork, and Microsoft says it does not represent realised savings.

## Why it matters

This gives leaders a cost-per-user, per-group and per-model view of AI spend, and it puts estimated AI value next to it. Finance and business owners will ask for it before administrators have decided who may see named users, who may export, and which assumptions feed the value figures. Those are administrator decisions, and the preview documentation says some people get access automatically.

Microsoft has not stated how the app arrives at general availability, so treat arrival as unconfirmed and plan on leaders in your tenant asking for access. The app reports spend; limits are still set in spending policies in the Microsoft 365 admin center. Showing a forecast or a budget target in the app enforces nothing.

## Risk assessment

**Data exposure**
- The preview documentation gives tenant-level access to the top three layers of the organisation, access to their own organisation for managers of teams that meet the minimum group size of 10, and access to Microsoft 365 global admins. That includes cost insights for those people.
- The Identification setting in a permission set decides whether users see named individuals or de-identified data. The Users tab on Cost & forecast lists people who have an assigned usage limit, when the viewer's role permits.
- Export is enabled by default and lists CSV download and an MCP connection among its options. Including user identifiers is off by default and depends on permission.

**Security & identity**
- A user's effective access is the combination of all their assignments, and one assignment never removes access another grants. Check overlapping policies and security-group membership.

**Autonomy & actions**
- The documented pages describe reporting and what-if analysis. Budget targets and scenarios do not change spending policies, limits or access.

**Change & support**
- The app shows usage-based data only when spending policies are set up and billing is turned on in the Microsoft 365 admin center, and some sections appear only when limit data exists. Expect "why is my page empty" questions.
- Changes to metric calculators apply tenant-wide and to dependent metrics and historical trends, so one edit moves every leader's numbers.
- AI value is an estimate that depends on administrator-configurable time and hourly-rate assumptions. Brief leaders before they quote it as savings.

## Cost and licensing

Microsoft has not published a licence or price for the app. The Learn introduction lists its prerequisites: at least 50 Copilot licences assigned, spending policies for usage-based services, access set up, and billing turned on in the Microsoft 365 admin center. It names no separate licence or charge for the app itself. Plan on that gap being open until general availability.

The app reports spend; it is not a meter. Usage-based AI cost it shows is billed as Copilot Credits to the subscription selected as the billing method; when credits run out, usage continues on a pay-as-you-go basis (Set up usage-based billing for Copilot Credits). Spending limits are set in spending policies in the Microsoft 365 admin center (controls table, row 3), not in the app. Microsoft 365 Copilot per-user licence cost is not part of the Cost & forecast figures. Indirect costs are admin time, plus finance time to agree the value assumptions. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the web platform. Learn documents the app as a Frontier preview, and the roadmap lists both Preview and General Availability phases. Microsoft's Viva feature access management page says its access controls are not available in GCC High or DoD, which sits awkwardly with the roadmap's cloud list. Microsoft has not said how the app's controls behave in those clouds.

Audience and access, as the preview documentation states: leaders in the top three layers get tenant-level access, managers of teams that meet the minimum group size of 10 get their own organisation, and global admins have access by default. Insights analysts, Insights admins and other leaders or GMs need a Global admin to assign access. Business leaders see cost insights only after an admin turns consumption insights on for their role. Global administrators, AI administrators and Viva Insights administrators manage access policies. Existing Viva Insights role assignments and minimum group size carry over.

## Governance guidance

### Before rollout
- Check that the tenant has at least 50 Copilot licences assigned, the stated prerequisite.
- Decide who should see cost and named-user data, then review the Chief Officer, Group Manager and Analyst permission sets for export and identification (controls table, row 1).
- Confirm spending policies exist and billing is turned on, or the usage-based pages will be empty (row 3).
- Ask your Microsoft contact whether the Viva Insights web app control in row 2 also switches Business Analytics off before you rely on it.

### At rollout
- Set the minimum group size at least as high as your privacy policy requires (row 5).
- Keep the Cowork Value metrics toggle off until finance agrees the time and hourly-rate assumptions (row 4); Learn says it is off by default.
- Tell leaders that forecasts are estimates and that a reporting budget target enforces no limit.

### After rollout
- Compare the Spending limits section with the policies in row 3, and fix limits there, not in the app.
- Use the Manager hierarchy tab to check a manager's licensing status and team size when they cannot see their team's insights.
- Review the calculator change log for who changed assumptions and when.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open Business Analytics, export, see named users, and whose data</strong><br><small>User</small><br><small class="controls__note">Permission sets, partitions and access policies. Global, AI or Viva Insights administrator. Preview documentation.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Manage › Access management <a href="https://learn.microsoft.com/a365-business-analytics/manage/access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app is on, for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it switches Business Analytics off. Not available in GCC High or DoD per Microsoft.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits and billing for the usage-based cost the app reports</strong><br><small>Tenant</small><br><small class="controls__note">Existing control that the app reports on, not a control over the app. Creating policies needs Global or Billing administrator. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Get Started <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether AI value metrics are displayed, and the assumptions behind them</strong><br><small>Tenant</small><br><small class="controls__note">Cowork value metrics toggle; off by default. Viva Insights admin, or Global admin for Copilot value metrics.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Configurations › Metric calculators › Edit calculator › Value calculator › Value metrics <a href="https://learn.microsoft.com/a365-business-analytics/manage/configurations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Minimum group size below which aggregated insights are hidden</strong><br><small>Tenant</small><br><small class="controls__note">Value of at least 5. Does not apply to user-level insights that are not aggregated.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Configurations › Privacy › Minimum group size <a href="https://learn.microsoft.com/a365-business-analytics/manage/configurations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Business Analytics does not enforce spend. Limits come from spending policies in the Microsoft 365 admin center, and the app's budget target is a reporting reference only. Row 3 sets those limits and is the upstream control for what the Cost & forecast page can show.

Global administrators, AI administrators and Viva Insights administrators can manage access policies. Calculator edits need Viva Insights admins for Cowork value metrics; Copilot value metrics need both Viva Insights admin and Chief officer roles, or Global admin. Row 2 is the general Viva feature access control. Microsoft's Business Analytics admin page points to it for turning the app on or off, but no page read names a Business Analytics feature ID, so confirm it with `Get-VivaModuleFeature -ModuleId VivaInsights` before use. The same page lists the exclusion list under it.

Microsoft Learn documents no PowerShell or API for Business Analytics access policies, calculators or privacy settings at the time of writing (November 2026). The Cost Management API in row 3 covers spending policies, not the app.

## Open questions

- What licence or price will apply to the app at general availability, beyond the 50-licence prerequisite? Watch the Learn introduction and the roadmap item.
- How does the app arrive for tenants at general availability: do leaders get access automatically as the preview documents, and is that on or off by default? Watch Message center.
- Will the app be available in GCC, GCC High and DoD as the roadmap lists, given the Viva access-control page says its controls are unavailable in GCC High and DoD?
- Does the Viva Insights web app control switch off Business Analytics, and does it have its own feature ID?
- Will Microsoft document automation (PowerShell or Graph) for Business Analytics access, calculators and privacy settings?

<!-- rationale
risk: Medium. Leaders and managers can see AI cost and usage by user, group and model, and can export it, under access rules that an admin has to review. Scenarios and budget targets do not change live policies.
cost: Low. The only cost the sources show is admin time. Microsoft has not published a licence or price for the app; the Learn page lists at least 50 assigned Copilot licences as a prerequisite.
impact: Medium. Executives, general managers and managers of larger teams are the audience; end users are not described as seeing it, though their usage and cost appear in the data.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure, first bullet / default: The automatic app access described for leaders, managers and Global administrators includes cost insights for all those people. | Found: Cost, budget, and usage-based service insights appear only when consumption insights are turned on for your role. Consumption insights are on by default for GMs. For business leaders, an admin must turn them on. | Fix: Replace 'That includes cost insights for those people.' with 'Consumption insights are on by default for GMs; for business leaders, an admin must turn them on.' This also makes the risk bullet agree with Scope. | Source: https://learn.microsoft.com/a365-business-analytics/introduction
- [unsupported, blocker] Cost and licensing, second paragraph / cost: The app itself is not a meter. | Found: Searched: "Agent 365 Business Analytics" "meter" billing; "Agent 365 Business Analytics" "pricing" "license". Opened introduction, Cost & forecast, Overview and Copilot Credits setup; none explicitly rules out metering use of the app itself. | Fix: Remove 'it is not a meter'. Retain the narrower statement that Microsoft has not published a separate app licence or price.
- [contradicted, blocker] licensing.notes; Cost and licensing, second paragraph / cost: Usage-based AI cost reported by the app is billed as Copilot Credits to the selected subscription. | Found: In the credits view, Microsoft AI credits and GitHub AI credits are shown separately. | Fix: Replace the licensing note's last sentence with 'The app reports both Microsoft and GitHub AI credits separately.' Replace the body's billing sentence with 'For Copilot Credits, charges go to the subscription selected in the billing method; the app reports GitHub AI credits separately.' | Source: https://learn.microsoft.com/a365-business-analytics/overview
- [contradicted, blocker] Why it matters; Cost and licensing; controls[2].governs; Governance controls / applicability: Spending policies in the Microsoft 365 admin center govern the usage-based spending reported by the app without a service exception. | Found: Cost and credit information on this page is for reference only. For official billing and detailed charges for GitHub AI credits and budget setting, go to GitHub.com. | Fix: Narrow references to Microsoft 365 spending policies to 'Copilot Credits spending policies in the Microsoft 365 admin center'. Change controls[2].governs to 'Spending limits and billing for Copilot Credits reported by the app'. Do not imply this row controls GitHub spending. | Source: https://learn.microsoft.com/a365-business-analytics/services/github-copilot
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The Microsoft 365 admin center path starts at Viva > Settings > Manage feature access > Create a policy. | Found: From the Microsoft 365 admin center, select Viva from the settings menu. Select the Settings tab and select Manage feature access. Select Create a policy. | Fix: Replace the path in front matter and the rendered table with 'Settings > Viva > Settings > Manage feature access > Create a policy': the initial settings menu precedes Viva, while the later Settings is the tab within Viva. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [contradicted, blocker] controls[3].ui; Governance controls table / admin-path: The Cowork Value metrics path starts at Configurations > Metric calculators > Edit calculator > Value calculator > Value metrics. | Found: To open the page in Business Analytics, on the left under Manage, select Configurations. Under Cowork assisted hours and value, select Edit calculator. | Fix: Replace the path in front matter and the rendered table with 'Manage > Configurations > Metric calculators > Cowork assisted hours and value > Edit calculator > Value calculator > Value metrics'. The missing Manage is a navigation heading; the calculator choice also disambiguates the two calculators. | Source: https://learn.microsoft.com/a365-business-analytics/manage/configurations
- [contradicted, blocker] controls[4].ui; Governance controls table / admin-path: The privacy threshold path starts at Configurations > Privacy > Minimum group size. | Found: To open the page in Business Analytics, on the left under Manage, select Configurations. The page includes these tabs: - Metric calculators - Privacy - Manager hierarchy | Fix: Replace the path in front matter and the rendered table with 'Manage > Configurations > Privacy > Minimum group size'. | Source: https://learn.microsoft.com/a365-business-analytics/manage/configurations
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support, calculator bullet / behaviour: Calculator edits apply tenant-wide to dependent metrics and historical trends, moving every leader's numbers. | Found: Changes appear after the affected data, query, or report refreshes. Previously completed queries and existing Interactive insights sessions aren't recalculated; rerun or refresh them to use the updated configuration. | Fix: Replace 'so one edit moves every leader's numbers' with 'after the affected data, query or report refreshes; previously completed queries and existing Interactive insights sessions are not recalculated'. | Source: https://learn.microsoft.com/a365-business-analytics/manage/configurations
- [supported, minor] rationale: impact / availability: End users are not described as seeing Business Analytics. | Found: Business Analytics is a dedicated app for business decision makers and general managers (GMs) | Fix: Remove 'end users are not described as seeing it, though their usage and cost appear in the data' from the impact rationale. The introduction describes a leadership audience, but https://learn.microsoft.com/a365-business-analytics/users-groups says 'All users can view the Users & groups page' without resolving whether this means all app-authorized users. | Source: https://learn.microsoft.com/a365-business-analytics/introduction
- [contradicted, minor] Governance guidance: After rollout, Manager hierarchy bullet / consistency: The checklist tells readers to check Manager hierarchy, but no controls row represents this check. | Found: Use the Manager hierarchy tab to check a manager's licensing status and team size when they cannot see their team's insights. | Fix: Remove this checklist bullet: the controls table has no Manager hierarchy row. No additional control row is requested.
- [contradicted, minor] Governance guidance: After rollout, change-log bullet / consistency: The checklist tells readers to review the calculator change log, but its controls row gives only the Value metrics toggle path. | Found: Review the calculator change log for who changed assumptions and when. Configurations > Metric calculators > Edit calculator > Value calculator > Value metrics | Fix: Remove this checklist bullet: no controls row gives the change-log control. No additional control row is requested.
-->
