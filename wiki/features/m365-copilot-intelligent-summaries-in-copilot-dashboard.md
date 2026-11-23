---
title: "Microsoft Copilot Dashboard: intelligent summaries of Copilot adoption trends"
slug: "m365-copilot-intelligent-summaries-in-copilot-dashboard"
roadmapId: 557681
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "AI-generated adoption summaries and suggested prompts appear in the Copilot Dashboard, on by default for eligible tenants, with rollout in November 2026. No admin action is required; Microsoft names no separate switch."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn lists intelligent summaries for tenants with at least 50 Copilot licences or at least 50 Viva Insights licences, and not for tenants with 1 to 49 Copilot licences. A feature-specific price or meter is not yet published."
audiences: ["m365-admin","change-adoption","service-owner"]
tags: ["viva-insights","m365-copilot","analytics","adoption","viva-feature-access-management"]
sources:
  - title: "Microsoft 365 Roadmap 557681"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557681"
    kind: "roadmap"
  - title: "MC1266912: (Updated) Microsoft 365 Copilot: Intelligent Summaries in Copilot Dashboard"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1266912"
    kind: "message-center"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","microsoft-viva-copilot-dashboard-targeted-audience-surveys","m365-copilot-export-copilot-metrics-in-the-copilot-dashboard","microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard","m365-copilot-insights-copilot-analytics-cowork-adoption-and-impact"]
controls:
  - governs: "Whether the Viva Insights web app, which contains the Copilot Dashboard, is on for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > Access setting > On or Off"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Choose the Viva Insights web app as the feature. Turning it off disables the whole app, not only intelligent summaries. The dashboard settings page permits the AI Administrator; the feature access overview lists Global admin."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-26T22:50:58"
changes:
  - date: "2026-11-23"
    note: "New briefing: rollout moved to November 2026 in MC1266912; summaries are on by default and no summary-specific switch is documented."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected where Learn names intelligent summaries, removed the claim that the web app switch is the only documented dashboard control, and completed the admin paths and role note."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "03ab9306d3be0a1932e10de0d8f8ac0b"
---

## What's changing

Microsoft is adding intelligent summaries to the Microsoft Copilot Dashboard. The roadmap item describes them as highlights of key adoption trends and areas of success, with suggested prompts that let people explore the trends and drivers behind them. Microsoft's notice MC1266912 calls them AI-generated insights and says admins using the Copilot Dashboard in Microsoft Viva and Microsoft 365 are affected.

Microsoft's notice says the summaries appear automatically, that no configuration change is required and that the feature is on by default for eligible tenants. It also says existing admin controls and permissions remain unchanged and that there is no user workflow impact.

The roadmap record gives status Rolling out and a target of August CY2026, for Worldwide (Standard Multi-Tenant) on the web, at General Availability. MC1266912, updated on 20 October 2026, moves the timeline: rollout begins in November 2026 (previously mid-August) and is expected to finish by the end of November 2026 (previously late September). Where the two differ, the notice is the later statement. Microsoft Learn names intelligent summaries in its introductory eligibility note and feature-availability table, but has no section describing how they are produced; the behavioural description here comes from the roadmap and the notice.

## Why it matters

The summaries change what the dashboard tells you without anyone changing a setting. Microsoft's notice says they are on by default for eligible tenants, so people who open the dashboard after rollout may see AI-written statements about adoption that they did not see before, and may be asked about them.

The wiki's view is that the main task is communication: tell the helpdesk, training and adoption teams what the new panel is, and agree who owns the follow-up when a summary points at a team or group. Microsoft's notice suggests notifying helpdesk or training teams, and says no action is required before rollout.

## Risk assessment

**Data exposure**
- Microsoft has not described which data the summaries draw on or how they are produced. The roadmap says they highlight adoption trends, which are metrics the dashboard already shows. Confirm with Microsoft whether the minimum group size and the exclusion list, which Learn describes for the dashboard's aggregated insights, also apply to the summaries and suggested prompts.

**Security & identity**
- No change stated: Microsoft's notice says existing admin controls and permissions remain unchanged. Dashboard access is determined automatically from organisational data and can be modified by a Microsoft 365 admin, per Learn.

**Autonomy & actions**
- The roadmap describes summaries and suggested prompts for exploration. Neither the roadmap nor the notice describes any action taken on a user's behalf.

**Change & support**
- The summaries arrive switched on for eligible tenants, so expect questions from dashboard users about what the generated text means. Learn lists intelligent summaries only for tenants with at least 50 Copilot licences or at least 50 Viva Insights licences, so smaller tenants should not expect them to appear.
- Microsoft's notice says admins can roll back by disabling intelligent summaries using available admin controls, but does not name the control. The documented Viva Insights web app switch turns off the whole app, including the Copilot Dashboard.

## Cost and licensing

Learn's Copilot Dashboard page says the dashboard is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise who has an active Exchange Online account. It lists intelligent summaries among the features for tenants with at least 50 Copilot licences or at least 50 Viva Insights licences, and among the features not included for tenants with between 1 and 49 Copilot licences.

The page publishes no separate price or meter for intelligent summaries, and Microsoft's notice and the roadmap item mention none. A feature-specific price is not yet published. The indirect cost is admin time to brief support and adoption teams.

## Scope

Microsoft's notice says admins using the Microsoft 365 Copilot Dashboard in Microsoft Viva and Microsoft 365 are affected, and that the feature is on by default for eligible tenants. Learn describes eligibility by licence count: at least 50 Copilot licences or at least 50 Viva Insights licences.

The roadmap record lists Worldwide (Standard Multi-Tenant) only, with the Web platform and General Availability. Microsoft's notice gives a Worldwide rollout from November 2026 to the end of November 2026. Learn says that user-level access to the dashboard is determined automatically from organisational data and can be modified by a Microsoft 365 admin.

## Governance guidance

### Before rollout
- Confirm how many Copilot and Viva Insights licences the tenant holds, since Learn lists intelligent summaries for tenants with at least 50 of either.
- Tell the helpdesk, training and adoption teams that AI-generated summaries and suggested prompts are coming to the Copilot Dashboard; the notice suggests notifying helpdesk or training teams.
- Decide who in the organisation should see the dashboard, using the access settings described on Learn, because the summaries appear to people who open it.

### At rollout
- Open the Copilot Dashboard once the summaries appear and read them against the adoption metrics shown beside them.
- Update internal documentation that refers to the Copilot Dashboard, as the notice suggests.
- Decide whether the Viva Insights web app switch in the controls table is acceptable if you want the summaries off, given that it disables the whole app.

### After rollout
- Watch Message center for a post that names a control specific to intelligent summaries.
- Check the Learn Copilot Dashboard page for a section describing how the summaries are produced and what data they use.
- Gather questions from dashboard users and route them to the Copilot adoption owner.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which contains the Copilot Dashboard, is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Viva Insights web app as the feature. Turning it off disables the whole app, not only intelligent summaries. The dashboard settings page permits the AI Administrator; the feature access overview lists Global admin.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › Access setting › On or Off <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents the Viva Insights web app as on by default, and says an AI Administrator can turn it on or off at tenant, group or user level; Global Administrators can also manage all of these settings. Turning the control off disables the entire app, including the Microsoft Copilot Dashboard, Copilot Analytics reports and advanced analysis and admin tools, so it is not a way to turn off intelligent summaries alone. Policy changes take effect within 24 hours unless a feature says otherwise.

Microsoft's notice refers to disabling intelligent summaries using available admin controls without naming one, and the feature table on Learn's feature access management page lists no entry named intelligent summaries at the time of writing (November 2026). Learn also describes a separate way to manage which individual users and groups can open the Copilot Dashboard, in the Microsoft 365 admin center under Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users or Groups, on the [manage settings page](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard). It controls access to the dashboard, not the summaries themselves.

## Open questions

- Which admin control disables intelligent summaries, as Microsoft's notice says is possible, and does it apply to the tenant, to groups or to users? Watch Message center and the Learn Copilot Dashboard page.
- What data do the summaries and suggested prompts use, and do the minimum group size and the exclusion list for the dashboard's aggregated insights apply to them?
- Will tenants below 50 Copilot or Viva Insights licences receive the summaries later, given that Learn currently lists them as not included for 1 to 49 Copilot licences?
- Is a separate price or meter planned for intelligent summaries? None is published at the time of writing (November 2026).

<!-- rationale
risk: Low. Microsoft's notice describes summaries of adoption trends in an existing dashboard with permissions unchanged, though how the summaries are generated is not described. Rated on the default continuing.
cost: Low. Learn ties intelligent summaries to tenants with 50 or more Copilot or Viva Insights licences; the only cost shown is admin and communication time. A separate price is not yet published.
impact: Low. Microsoft's notice names admins who use the Copilot Dashboard as the people affected and says there is no user workflow impact.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The web app access-policy route is Settings > Viva > Settings > Manage feature access > Create a policy > Access setting > On or Off in the Microsoft 365 admin center. | Found: 3. Select Create a policy. 4. Name the policy and select the app and feature for which you'd like to set the policy. 5. Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: After 'Create a policy', explicitly include the app and feature selection before 'Access setting', using lower-case placeholders: 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting > On or Off'. Keep the note selecting the Viva Insights web app. Source: https://learn.microsoft.com/viva/control-access-admin-center. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] Governance controls: individual user and group access path / admin-path: Individual access is managed at Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users or Groups. | Found: At the top, select Users. Search for the people you'd like to add, and select them from the list. 2. At the bottom, select Add. | Fix: Finish the route for adding access: 'Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users or Groups > Add', noting that the people or groups are selected before Add. For removal, end with 'Users > Remove selected users' or 'Groups > Remove selected groups'. Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The governance checklist tells readers to decide dashboard access using access settings, but the table has no individual-user/group access-settings row. | Found: Decide who in the organisation should see the dashboard, using the access settings described on Learn. / The table contains only the Viva Insights web app on/off policy. | Fix: Remove the Before rollout bullet 'Decide who in the organisation should see the dashboard, using the access settings described on Learn, because the summaries appear to people who open it.' It names an access-settings control absent from the table; do not add a row in this correction.
-->
