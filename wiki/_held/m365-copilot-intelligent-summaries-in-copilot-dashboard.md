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
  - title: "Microsoft 365 Roadmap item 557681"
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
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Choose the Viva Insights web app as the feature. Turning it off disables the whole app, not only intelligent summaries. Learn lists the AI Administrator; Global Administrators can also manage it."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-26T22:50:58"
changes:
  - date: "2026-11-23"
    note: "New briefing: rollout moved to November 2026 in MC1266912; summaries are on by default and no summary-specific switch is documented."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 50
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "0476c3e727f51cf9355cef334175c7b9"
---

## What's changing

Microsoft is adding intelligent summaries to the Microsoft Copilot Dashboard. The roadmap item describes them as highlights of key adoption trends and areas of success, with suggested prompts that let people explore the trends and drivers behind them. Microsoft's notice MC1266912 calls them AI-generated insights and says admins using the Copilot Dashboard in Microsoft Viva and Microsoft 365 are affected.

Microsoft's notice says the summaries appear automatically, that no configuration change is required and that the feature is on by default for eligible tenants. It also says existing admin controls and permissions remain unchanged and that there is no user workflow impact.

The roadmap record gives status Rolling out and a target of August CY2026, for Worldwide (Standard Multi-Tenant) on the web, at General Availability. MC1266912, updated on 20 October 2026, moves the timeline: rollout begins in November 2026 (previously mid-August) and is expected to finish by the end of November 2026 (previously late September). Where the two differ, the notice is the later statement. Microsoft Learn's Copilot Dashboard page names intelligent summaries only in its feature-availability table and has no section describing them, so what is said here about behaviour comes from the roadmap and the notice.

## Why it matters

The summaries change what the dashboard tells you without anyone changing a setting. Microsoft's notice says they are on by default for eligible tenants, so people who open the dashboard after rollout may see AI-written statements about adoption that they did not see before, and may be asked about them.

The wiki's view is that the main task is communication: tell the helpdesk, training and adoption teams what the new panel is, and agree who owns the follow-up when a summary points at a team or group. Microsoft's notice suggests the same preparation, and says no action is required before rollout.

## Risk assessment

**Data exposure**
- Microsoft has not described which data the summaries draw on or how they are produced. The roadmap says they highlight adoption trends, which are metrics the dashboard already shows. Confirm with Microsoft whether the minimum group size and the exclusion list, which Learn describes for the dashboard's aggregated insights, also apply to the summaries and suggested prompts.

**Security & identity**
- No change stated: Microsoft's notice says existing admin controls and permissions remain unchanged. Dashboard access is determined automatically from organisational data and can be modified by a Microsoft 365 admin, per Learn.

**Autonomy & actions**
- The roadmap describes summaries and suggested prompts for exploration. Neither the roadmap nor the notice describes any action taken on a user's behalf.

**Change & support**
- The summaries arrive switched on for eligible tenants, so expect questions from dashboard users about what the generated text means. Learn lists intelligent summaries only for tenants with at least 50 Copilot licences or at least 50 Viva Insights licences, so smaller tenants should not expect them to appear.
- Microsoft's notice says admins can roll back by disabling intelligent summaries using available admin controls, but does not name the control. The only documented control that covers the Copilot Dashboard is the Viva Insights web app switch, which turns off the whole app.

## Cost and licensing

Learn's Copilot Dashboard page says the dashboard is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise who has an active Exchange Online account. It lists intelligent summaries among the features for tenants with at least 50 Copilot licences or at least 50 Viva Insights licences, and among the features not included for tenants with between 1 and 49 Copilot licences.

The page publishes no separate price or meter for intelligent summaries, and Microsoft's notice and the roadmap item mention none. A feature-specific price is not yet published. The indirect cost is admin time to brief support and adoption teams.

## Scope

Microsoft's notice says admins using the Microsoft 365 Copilot Dashboard in Microsoft Viva and Microsoft 365 are affected, and that the feature is on by default for eligible tenants. Learn describes eligibility by licence count: at least 50 Copilot licences or at least 50 Viva Insights licences.

The roadmap record lists Worldwide (Standard Multi-Tenant) only, with the Web platform and General Availability. Microsoft's notice gives a Worldwide rollout from November 2026 to the end of November 2026. Learn says that user-level access to the dashboard is determined automatically from organisational data and can be modified by a Microsoft 365 admin.

## Governance guidance

### Before rollout
- Confirm how many Copilot and Viva Insights licences the tenant holds, since Learn lists intelligent summaries for tenants with at least 50 of either.
- Tell the helpdesk, training and adoption teams that AI-generated summaries and suggested prompts are coming to the Copilot Dashboard, as Microsoft's notice suggests.
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
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which contains the Copilot Dashboard, is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Viva Insights web app as the feature. Turning it off disables the whole app, not only intelligent summaries. Learn lists the AI Administrator; Global Administrators can also manage it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents the Viva Insights web app as on by default, and says an AI Administrator can turn it on or off at tenant, group or user level; Global Administrators can also manage all of these settings. Turning the control off disables the entire app, including the Microsoft Copilot Dashboard, Copilot Analytics reports and advanced analysis and admin tools, so it is not a way to turn off intelligent summaries alone. Policy changes take effect within 24 hours unless a feature says otherwise.

Microsoft's notice refers to disabling intelligent summaries using available admin controls without naming one, and the feature table on Learn's feature access management page lists no entry named intelligent summaries at the time of writing (November 2026). Learn also describes a separate way to manage which individual users and groups can open the Copilot Dashboard, in the Microsoft 365 admin center under Settings > Microsoft Viva > Viva Insights, on the [manage settings page](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard). It controls access to the dashboard, not the summaries themselves.

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

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing / behaviour: The Learn Copilot Dashboard page names intelligent summaries only in its feature-availability table. | Found: Tenants with at least 50 Copilot licenses or at least 50 Viva Insights licenses also have access to agent-related insights, benchmarks, intelligent summaries, scoped group-level data, delegation support, and survey data (if available). | Fix: Replace the final sentence of What's changing with: 'Microsoft Learn names intelligent summaries in its introductory eligibility note and feature-availability table, but has no section describing how they are produced; the behavioural description here comes from the roadmap and the notice.' | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
- [contradicted, blocker] Risk assessment: Change & support / absence: The only documented control that covers the Copilot Dashboard is the Viva Insights web app switch. | Found: This feature access control allows AI Administrators to enable or disable the auto-enablement feature for the Viva Insights web app in their tenant. | Fix: Replace 'The only documented control that covers the Copilot Dashboard is the Viva Insights web app switch, which turns off the whole app' with 'The documented Viva Insights web app switch turns off the whole app, including the Copilot Dashboard.' The same cited page also documents individual/group access, auto-enablement, minimum group size and exclusion controls, so do not claim exclusivity. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Governance guidance: Before rollout / record: Microsoft suggests the briefing's preparation of notifying helpdesk, training and adoption teams and agreeing follow-up ownership. | Found: Notify helpdesk or training teams about the new summaries. | Fix: Replace 'Microsoft's notice suggests the same preparation' with 'Microsoft's notice suggests notifying helpdesk or training teams'. In Before rollout, replace 'as Microsoft's notice suggests' with 'the notice suggests notifying helpdesk or training teams'. Keep adoption-team communication and follow-up ownership as the wiki's own advice.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Viva > Settings > Manage feature access > Create a policy leads to the feature access policy creation page. | Found: From the Microsoft 365 admin center, select **Viva** from the settings menu. 2. Select the **Settings** tab and select **Manage feature access**. 3. Select **Create a policy**. | Fix: Complete the path as 'Settings > Viva > Settings > Manage feature access > Create a policy > Access setting > On or Off'. Keep the note instructing the reader to choose the Viva Insights web app as the feature. The cited page documents selecting the app and feature, then Access setting and On or Off. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[0].note; Governance controls / role: An AI Administrator can turn the Viva Insights web app on or off. | Found: The AI admin can turn the Viva Insights web app on or off at the tenant, group, or user level | Fix: After the role statement add: 'The feature access management overview lists Global admin for the Viva Insights web app, while the dashboard settings page explicitly permits AI Administrator.' The differing overview is https://learn.microsoft.com/viva/feature-access-management, whose Viva Insights web app row lists Global admin. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [supported, minor] Governance controls: individual user and group access path / admin-path: The individual-user/group access route starts in Microsoft 365 admin center at Settings > Microsoft Viva > Viva Insights. | Found: Go to the **Settings** tab and select **Microsoft Viva**, then **Viva Insights**. On this page, go to the **Set up and management** tab. | Fix: Complete the prose path as 'Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users or Groups'. The printed steps are correct but stop before the access control. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
-->
