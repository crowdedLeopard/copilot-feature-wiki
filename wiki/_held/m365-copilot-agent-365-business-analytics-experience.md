---
title: "Microsoft 365 Copilot: Agent 365 Business Analytics for AI spend, usage and value"
slug: "m365-copilot-agent-365-business-analytics-experience"
roadmapId: 577548
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans one Business Analytics app showing AI cost, usage, value and forecasts for leaders. Admins decide who sees which data. The Frontier preview requires at least 50 assigned Copilot licences; no separate app price is specified."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "The Frontier preview requires at least 50 assigned Copilot licences in the tenant. An Agent 365 licence is not required to access the app but is required to view third-party agent data. Spending policies are a prerequisite for usage-based cost insights; the introduction specifies no separate app price."
audiences: ["finops","m365-admin","service-owner","change-adoption"]
tags: ["agent-365","analytics","finops","cost-management","spending-policies","copilot-credits","viva-insights","m365-copilot","viva-feature-access-management","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577548"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577548"
    kind: "roadmap"
  - title: "Introduction to Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/introduction"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics Cost & forecast page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/cost-forecast"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics Overview page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/overview"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics GitHub Copilot page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/services/github-copilot"
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
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
videos: []
related: ["copilot-credits","microsoft-viva-copilot-analytics-agent-dashboard","m365-admin-center-copilot-credits-usage-report","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","copilot-studio-cost-management-m365-admin-center"]
controls:
  - governs: "Who can open Business Analytics, export, see named users, and whose data"
    scope: "user"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Manage > Access management > Permission sets > Manage > permission set"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    api: null
    note: "Global, AI or Viva Insights administrator. Preview documentation. Export or Identification: Manage > Access management > Permission sets > Manage > permission set. Custom policy: Actions > Edit."
  - governs: "Whether the Viva Insights web app is on, for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > On or Off"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Select the Viva Insights web app feature. General control: Microsoft has not confirmed it switches Business Analytics off. Not available in GCC High or DoD per Microsoft."
  - governs: "Spending limits and billing for Copilot Credits reported by the app"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Get Started > Activate the default spending policy for your organization > Set the monthly spending limit for this policy > Limit monthly spending"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Not a control over the app. Beta API. Body: periodLimit, perUserLimit set limits; billingMethods changes funding. Adding pay-as-you-go needs a complete billingInstrument; replacing an existing pay-as-you-go instrument is not defined."
  - governs: "Whether AI value metrics are displayed, and the assumptions behind them"
    scope: "tenant"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Manage > Configurations > Metric calculators > Cowork assisted hours and value > Edit calculator > Value calculator > Value metrics"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    api: null
    note: "Cowork value metrics toggle; off by default. Viva Insights admins configure Cowork value metrics; Copilot value metrics require both Viva Insights admin and Chief officer roles, or Global admin."
  - governs: "Minimum group size below which aggregated insights are hidden"
    scope: "tenant"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Manage > Configurations > Privacy > Minimum group size"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    api: null
    note: "Value of at least 5. Does not apply to user-level insights that are not aggregated."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-25"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap item 577548, with the Frontier preview documentation for access, value metrics, privacy settings and the spend controls it reports on."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction after verification: consumption-insights access, Copilot Credits billing and GitHub credits wording, three control paths, and two unsupported checklist items removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 93 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction after verification: licensing now reflects the 50-Copilot-licence prerequisite, and the Viva access policy path, spending policy API call and value-metrics roles were corrected."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 100 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction after verification: licensing model changed to not yet published, with a note that the app's inclusion or separate licensing terms are not explicitly stated."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 98 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 107 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected licensing: the preview needs at least 50 assigned Copilot licences, and an Agent 365 licence is required to view third-party agent data; added the service description's GCC note."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 116 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the default state: in the Frontier preview, qualifying leaders, managers and global admins have access by default; general-availability rollout is not yet published."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 116 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 115 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Correction after verification: cost rated medium because third-party agent data needs an Agent 365 licence, action set to act-now, and the Export and Identification access path extended to permission sets."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 125 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 7
verification:
  status: "held"
  date: "2026-11-25"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 125
  confirmed: 124
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "b195970afb7318a6cea2a386a41aa18e"
---

## What's changing

The roadmap item describes Agent 365 Business Analytics as one place that brings AI spend, usage and value together, so leaders can see where AI investment is going, what value it delivers and where to invest next. It lets them explore cost across services, models, agents and users, see the business use cases AI supports, and forecast future spend. The item is listed as In development, with a preview target of November CY2026 and a general availability target of December CY2026, on the web, for Worldwide, GCC, GCC High and DoD. These dates are Microsoft's targets.

Microsoft Learn already documents the app as a Frontier preview (the program that gives customers early access to Microsoft AI features), and says capabilities might change. It describes a dedicated app for business decision makers and general managers with an Overview page, Use cases, Cost & forecast, Users & groups and pages for each AI service. It combines licensed Microsoft 365 Copilot with usage-based services such as Copilot Cowork, agents and GitHub Copilot. What follows about behaviour is the preview documentation, not a final design. In the Frontier preview, qualifying leaders and managers and global admins have access by default; Microsoft has not published general-availability rollout mechanics.

The Cost & forecast page covers usage-based billing and says Microsoft Copilot user subscription licence costs are not included; the Overview page shows Microsoft 365 Copilot cost as "Included in license". It offers base and growth forecasts and what-if scenarios for a spend cap or model mix. A reporting budget target creates no spending policy, and a scenario changes only the forecast comparison. AI value is an estimate, documented for Cowork, and Microsoft says it does not represent realised savings.

## Why it matters

This gives leaders a cost-per-user, per-group and per-model view of AI spend, and it puts estimated AI value next to it. Finance and business owners will ask for it before administrators have decided who may see named users, who may export, and which assumptions feed the value figures. Those are administrator decisions, and the preview documentation says some people get access automatically.

Microsoft has not stated how the app arrives at general availability, so treat arrival as unconfirmed and plan on leaders in your tenant asking for access. The app reports spend; Copilot Credits limits are still set in Copilot Credits spending policies in the Microsoft 365 admin center. Showing a forecast or a budget target in the app enforces nothing.

## Risk assessment

**Data exposure**
- The preview documentation gives tenant-level access to the top three layers of the organisation, access to their own organisation for managers of teams that meet the minimum group size of 10, and access to Microsoft 365 global admins. Consumption insights are on by default for GMs; for business leaders, an admin must turn them on.
- The Identification setting in a permission set decides whether users see named individuals or de-identified data. The Users tab on Cost & forecast lists people who have an assigned usage limit, when the viewer's role permits.
- Export is enabled by default and lists CSV download and an MCP connection among its options. Including user identifiers is off by default and depends on permission.

**Security & identity**
- A user's effective access is the combination of all their assignments, and one assignment never removes access another grants. Check overlapping policies and security-group membership.

**Autonomy & actions**
- The documented pages describe reporting and what-if analysis. Budget targets and scenarios do not change spending policies, limits or access.

**Change & support**
- The app shows usage-based data only when spending policies are set up and billing is turned on in the Microsoft 365 admin center, and some sections appear only when limit data exists. Expect "why is my page empty" questions.
- Changes to metric calculators apply tenant-wide and to dependent metrics and historical trends, after the affected data, query or report refreshes; previously completed queries and existing Interactive insights sessions are not recalculated.
- AI value is an estimate that depends on administrator-configurable time and hourly-rate assumptions. Brief leaders before they quote it as savings.

## Cost and licensing

The Frontier preview requires a tenant with at least 50 assigned Copilot licences; the introduction does not specify a separate app price (Introduction to Agent 365 Business Analytics). An Agent 365 licence is not required to access the app but is required to view data on third-party agents (same page). The Microsoft Agent 365 service description lists the Business Analytics capabilities for Microsoft services as a core capability included with a Microsoft cloud subscription, and the capabilities for non-Microsoft services as premium capabilities. Its other prerequisites are spending policies for usage-based services, access set up, and billing turned on in the Microsoft 365 admin center. Terms for general availability are not yet published.

The app reports spend. For Copilot Credits, charges go to the subscription selected in the billing method; the app reports GitHub AI credits separately. When credits run out for that subscription, usage automatically continues on a pay-as-you-go basis (Set up usage-based billing for Copilot Credits). Copilot Credits spending limits are set in Copilot Credits spending policies in the Microsoft 365 admin center (controls table, row 3), not in the app. Cost and credit information on the GitHub Copilot page is for reference only; Microsoft points to GitHub.com for official GitHub billing and budget setting. Microsoft 365 Copilot per-user licence cost is not part of the Cost & forecast figures. Indirect costs are admin time, plus finance time to agree the value assumptions. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the web platform. Learn documents the app as a Frontier preview, and the roadmap lists both Preview and General Availability phases. Microsoft's Viva feature access management page says its access controls are not available in GCC High or DoD, which sits awkwardly with the roadmap's cloud list. Microsoft has not said how the app's controls behave in those clouds. The Microsoft Agent 365 service description separately lists GCC availability as No for the Business Analytics Frontier public preview features; the roadmap still lists GCC among its planned clouds.

Audience and access, as the preview documentation states: leaders in the top three layers get tenant-level access, managers of teams that meet the minimum group size of 10 get their own organisation, and global admins have access by default. Insights analysts, Insights admins and other leaders or GMs need a Global admin to assign access. Business leaders see cost insights only after an admin turns consumption insights on for their role. Global administrators, AI administrators and Viva Insights administrators manage access policies. Existing Viva Insights role assignments and minimum group size carry over.

## Governance guidance

### Before rollout
- Check that the tenant has at least 50 Copilot licences assigned, the stated prerequisite.
- Decide who should see cost and named-user data, then review the Chief Officer, Group Manager and Analyst permission sets for export and identification (controls table, row 1).
- Confirm Copilot Credits spending policies exist and billing is turned on, or the usage-based pages will be empty (row 3).
- Ask your Microsoft contact whether the Viva Insights web app control in row 2 also switches Business Analytics off before you rely on it.

### At rollout
- Set the minimum group size at least as high as your privacy policy requires (row 5).
- Keep the Cowork Value metrics toggle off until finance agrees the time and hourly-rate assumptions (row 4); Learn says it is off by default.
- Tell leaders that forecasts are estimates and that a reporting budget target enforces no limit.

### After rollout
- Compare the Spending limits section with the Copilot Credits spending policies in row 3, and fix those limits there, not in the app.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open Business Analytics, export, see named users, and whose data</strong><br><small>User</small><br><small class="controls__note">Global, AI or Viva Insights administrator. Preview documentation. Export or Identification: Manage &gt; Access management &gt; Permission sets &gt; Manage &gt; permission set. Custom policy: Actions &gt; Edit.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Manage › Access management › Permission sets › Manage › permission set <a href="https://learn.microsoft.com/a365-business-analytics/manage/access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app is on, for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Select the Viva Insights web app feature. General control: Microsoft has not confirmed it switches Business Analytics off. Not available in GCC High or DoD per Microsoft.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › app and feature › Access setting › On or Off <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits and billing for Copilot Credits reported by the app</strong><br><small>Tenant</small><br><small class="controls__note">Not a control over the app. Beta API. Body: periodLimit, perUserLimit set limits; billingMethods changes funding. Adding pay-as-you-go needs a complete billingInstrument; replacing an existing pay-as-you-go instrument is not defined.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Get Started › Activate the default spending policy for your organization › Set the monthly spending limit for this policy › Limit monthly spending <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether AI value metrics are displayed, and the assumptions behind them</strong><br><small>Tenant</small><br><small class="controls__note">Cowork value metrics toggle; off by default. Viva Insights admins configure Cowork value metrics; Copilot value metrics require both Viva Insights admin and Chief officer roles, or Global admin.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Manage › Configurations › Metric calculators › Cowork assisted hours and value › Edit calculator › Value calculator › Value metrics <a href="https://learn.microsoft.com/a365-business-analytics/manage/configurations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Minimum group size below which aggregated insights are hidden</strong><br><small>Tenant</small><br><small class="controls__note">Value of at least 5. Does not apply to user-level insights that are not aggregated.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Manage › Configurations › Privacy › Minimum group size <a href="https://learn.microsoft.com/a365-business-analytics/manage/configurations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Business Analytics does not enforce spend. Copilot Credits limits come from Copilot Credits spending policies in the Microsoft 365 admin center, and the app's budget target is a reporting reference only. Row 3 sets those Copilot Credits limits; it does not control GitHub spending.

Global administrators, AI administrators and Viva Insights administrators can manage access policies. Calculator edits need Viva Insights admins for Cowork value metrics; Copilot value metrics need both Viva Insights admin and Chief officer roles, or Global admin. Row 2 is the general Viva feature access control. Microsoft's Business Analytics admin page points to it for turning the app on or off, but no page read names a Business Analytics feature ID, so confirm it with `Get-VivaModuleFeature -ModuleId VivaInsights` before use. The same page lists the exclusion list under it.

Microsoft Learn documents no PowerShell or API for Business Analytics access policies, calculators or privacy settings at the time of writing (November 2026). The Cost Management API in row 3 covers spending policies, not the app.

## Open questions

- Will the licensing terms or price for the app change at general availability from the preview prerequisites (50 assigned Copilot licences; an Agent 365 licence for third-party agent data)? Watch the Learn introduction and the roadmap item.
- How does the app arrive for tenants at general availability: do leaders get access automatically as the preview documents, and is that on or off by default? Watch Message center.
- Will the app be available in GCC, GCC High and DoD as the roadmap lists, given the Viva access-control page says its controls are unavailable in GCC High and DoD?
- Does the Viva Insights web app control switch off Business Analytics, and does it have its own feature ID?
- Will Microsoft document automation (PowerShell or Graph) for Business Analytics access, calculators and privacy settings?

<!-- rationale
risk: Medium. Leaders and managers can see AI cost and usage by user, group and model, and can export it, under access rules that an admin has to review. Scenarios and budget targets do not change live policies.
cost: Medium. Core app access in a tenant meeting the 50-assigned-Copilot-licence prerequisite does not require an Agent 365 licence, but viewing third-party agent data requires that licence. Allow for administration and finance time; the introduction specifies no separate app price.
impact: Medium. Executives, general managers and managers of larger teams are the audience.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].governs; Governance controls: first row / applicability: The permission-set route controls who receives access and whose employee data they can see. | Found: A partition defines whose data users can see. A permission set or a partition on its own doesn't give anyone access. Users receive access only when they're assigned to an access policy. | Fix: Replace controls[0].governs and the rendered row heading with 'Which dashboards users can open, whether they can export, and whether named users are visible'. Permission sets control capabilities, not employee-data partitions or policy assignments. Do not advertise this permission-set route as controlling whose data users can see. | Source: https://learn.microsoft.com/a365-business-analytics/manage/access
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure; Scope / default: Managers of teams meeting a minimum group size of 10 receive access to their own organization. | Found: Managers of teams meeting the minimum group size of 10 can access insights for their own organization, including cost insights. | Fix: Replace 'minimum group size of 10' for manager eligibility with 'minimum team size of 10 people' in Risk assessment and Scope. https://learn.microsoft.com/a365-business-analytics/manage/introduction calls this the minimum team size; retain 'minimum group size' for the privacy aggregation control. | Source: https://learn.microsoft.com/a365-business-analytics/introduction
- [supported, minor] controls[0].ui / admin-path: Manage > Access management > Permission sets > Manage > permission set reaches capability editing in Business Analytics. | Found: On the Access management home page, under Permission sets, select Manage. Open the permission set you want to change. Update the description or capability settings. | Fix: For Export and Identification, finish the route at the setting: 'Manage > Access management > Permission sets > Manage > permission set > Export or Identification'. Keep the same docs URL. The printed route currently stops at the item holding those controls. | Source: https://learn.microsoft.com/a365-business-analytics/manage/access
- [supported, minor] controls[0].note / admin-path: Actions > Edit opens custom access-policy editing. | Found: On the Access management home page, find the policy in the table. Under Actions, select Edit. | Fix: Replace 'Custom policy: Actions > Edit' with 'Custom policy: Manage > Access management > policy > Actions > Edit'. This supplies the context omitted from the abbreviated note. | Source: https://learn.microsoft.com/a365-business-analytics/manage/access
- [supported, minor] controls[1].note; Governance guidance; Open questions / applicability: The correctly documented Viva web-app control is shown with an unconfirmed-applicability caveat for Business Analytics. | Found: The settings described below also apply to Agent 365 Business Analytics (Frontier preview) where applicable. | Fix: Replace 'General control: Microsoft has not confirmed it switches Business Analytics off' with 'Microsoft says these settings also apply to Agent 365 Business Analytics (Frontier preview) where applicable; confirm the applicable feature ID before use'. Keep the uncertainty about a separate Business Analytics feature ID, not a blanket assertion that Microsoft has made no applicability statement. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
-->
