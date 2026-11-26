---
title: "Copilot Dashboard: highlights of Copilot adoption from Viva Engage posts"
slug: "microsoft-viva-copilot-analytics-highlights-on-copilot-adoption-from-viva-engage"
roadmapId: 511813
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to show Viva Engage posts about Copilot in the Copilot Dashboard as qualitative adoption evidence. Default, licensing and a feature switch are not published; check who has dashboard access and tell works councils."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn states the Copilot Dashboard is available to any customer with a Microsoft 365 or Office 365 business or enterprise subscription and an active Exchange Online account. Which licence tier will show the Engage highlights is not yet published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["viva-insights","viva-engage","m365-copilot","copilot-control-system","adoption","analytics","viva-feature-access-management","privacy"]
sources:
  - title: "Microsoft 365 Roadmap item 511813"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=511813"
    kind: "roadmap"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","m365-copilot-intelligent-summaries-in-copilot-dashboard","microsoft-viva-copilot-analytics-all-licensed-user-page-copilot-dashboard","microsoft-viva-network-analytics-enhancements","microsoft-viva-copilot-analytics-agent-dashboard"]
controls:
  - governs: "Whether the Viva Insights web app, including the Copilot Dashboard, is on for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > feature > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Choose the Viva Insights web app feature. Off disables the whole app, not only the Engage highlights. Can be scoped to users and groups."
  - governs: "Which users and groups have Copilot Dashboard access"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "AI Administrator. Microsoft says the earlier PowerShell control for dashboard access is no longer available; use the web app policy above to script access."
  - governs: "Whether senior leaders are automatically given Copilot Dashboard access"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > feature > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Choose the Copilot Dashboard Auto Enablement feature. Tenant-level policies only; user and group policies do not take effect."
  - governs: "Switch for the Viva Engage highlights view on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "Not listed among the Viva Insights features in feature access management at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-01-29T00:15:19"
changes:
  - date: "2026-11-26"
    note: "New briefing: planned Viva Engage highlights in the Copilot Dashboard, with the dashboard access and Viva Insights web app controls that apply today."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 50 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 42
  unconfirmed: 4
  contradicted: 4
  attempts: 1
  hash: "f8ae80ec8d20ccbdaf04fae0d55d0fd2"
---

## What's changing

Microsoft plans to add a view to the Copilot Dashboard in Viva Insights that shows Viva Engage posts in which users talk about Copilot. The roadmap item describes it as showcasing "real-world success stories, user-shared excitement about new Copilot features, and vibrant community discussions", as a qualitative complement to the dashboard's usage numbers.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Microsoft has not stated how posts are chosen, which communities they come from, whether authors are named, or whether the view is on when it arrives.

The roadmap item is **In development** with a target of **June CY2026**, General Availability, on the web, for Worldwide (Standard Multi-Tenant). That target has passed and the record still shows In development, so treat the date as unconfirmed.

## Why it matters

Today the Copilot Dashboard shows aggregated metrics, with group-level figures hidden below the minimum group size. A view built from individual employees' posts is a different kind of content: it puts named contributions, not counts, in front of leaders. Organisations with works council agreements or employee-monitoring commitments about Viva Insights should expect questions about this before it appears.

Microsoft has not stated what happens on arrival. If it ships inside the dashboard with no separate switch, the people who can see it are whoever already has dashboard access, including senior leaders granted access automatically. The time to review that access list is before the view lands.

## Risk assessment

**Data exposure**
- The view surfaces Engage posts to dashboard viewers. Microsoft has not documented whether it limits posts to those each viewer can already read in Engage, or draws from public communities only.
- The dashboard's minimum group size protects aggregated metrics; Microsoft has not said whether it, or the unified exclusion list, applies to individual posts in this view.

**Security & identity**
- No change documented: access follows Copilot Dashboard access, which is managed through the Viva Insights web app access settings and feature access management (see the controls table).

**Autonomy & actions**
- No change: the roadmap describes a read-only view. Nothing is posted or changed in Engage.

**Change & support**
- Employees may be surprised to find their posts shown to leadership as adoption evidence. Expect questions from community managers and HR; brief them before rollout.

## Cost and licensing

- **Licence:** the [Copilot Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard) states the dashboard "is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise, and who has an active Exchange Online account", and that users "don't need a paid Viva Insights license or a Microsoft Copilot license". Dashboard features vary with the number of assigned Copilot or Viva Insights licences; the page's feature table does not list Engage highlights, so which tier gets them is not yet published.
- **Meter:** no meter is documented for this feature at the time of writing (November 2026).
- **Indirect costs:** admin time to review dashboard access, and communication with employees and works councils.

## Scope

- **Viewers:** whoever has Copilot Dashboard access. Microsoft Learn says access is granted automatically to some senior leaders in tenants with at least 2,500 users with an Entra ID, and to Global administrators, Viva Insights Analysts with global partition access, delegates and enabled managers.
- **Content source:** Viva Engage posts, per the roadmap item.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap lists.
- **Platform:** Web.
- **Rollout:** General Availability; target June CY2026, status In development.

## Governance guidance

### Before rollout
- Review who holds Copilot Dashboard access under Settings > Microsoft Viva > Viva Insights > Set up and management in the Microsoft 365 admin center.
- Decide whether senior leaders should keep automatic dashboard access, and turn off auto-enablement with the AutoCxoIdentification policy if not.
- Brief works councils, HR and Engage community managers that employee posts about Copilot may be shown to dashboard viewers.

### At rollout
- Open the Copilot Dashboard as a viewer and check which posts appear, from which communities, and whether authors are named.
- Check Message center and the Copilot Dashboard Learn page for a feature-specific control.

### After rollout
- Turn off the Viva Insights web app for users or groups through feature access management if the view conflicts with a works council agreement, knowing this removes the whole app.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, including the Copilot Dashboard, is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Viva Insights web app feature. Off disables the whole app, not only the Engage highlights. Can be scoped to users and groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups have Copilot Dashboard access</strong><br><small>User</small><br><small class="controls__note">AI Administrator. Microsoft says the earlier PowerShell control for dashboard access is no longer available; use the web app policy above to script access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether senior leaders are automatically given Copilot Dashboard access</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Copilot Dashboard Auto Enablement feature. Tenant-level policies only; user and group policies do not take effect.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for the Viva Engage highlights view on its own</strong><br><small>Tenant</small><br><small class="controls__note">Not listed among the Viva Insights features in feature access management at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft documents no switch for the Engage highlights view itself at the time of writing (November 2026); the Viva Insights web app policy is the narrowest documented control, and it removes the Copilot Dashboard, Copilot Analytics reports and advanced analysis together. The manage-settings page gives AI Administrator for the web app and access settings and says Microsoft 365 Global Administrators can manage all settings; the feature access management table lists Global admin for the Viva Insights web app and Copilot Dashboard Auto Enablement features. Policy changes take effect within 24 hours, and the most restrictive policy applies to a user.

## Open questions

- Will the Engage highlights have their own feature access management control, or follow the Viva Insights web app policy only? Watch the feature access management page.
- Which posts are eligible: public communities only, or anything the viewer can read in Engage?
- Are post authors named, and do the minimum group size and the unified exclusion list apply to this view?
- Is the view on by default when it ships, and for which licence tiers? Watch Message center.
- With the June CY2026 target passed, when will it roll out?

<!-- rationale
risk: Medium. The dashboard is planned to show employees' own Engage posts to dashboard viewers, and Microsoft documents no switch for this view, only for the whole Viva Insights web app.
cost: Low. The Copilot Dashboard comes with Microsoft 365 or Office 365 business and enterprise subscriptions; no licence for this view is published, so the known cost is admin and communication time.
impact: Medium. Dashboard viewers (senior leaders, delegates, analysts) see the new view, and employees whose Engage posts are showcased are affected.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The web app policy path is Settings > Viva > Settings > Manage feature access > Create a policy > feature > Access setting. | Found: Name the policy and select the app and feature for which you'd like to set the policy. Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: Include the app selection before the feature: set controls[0].ui.path to 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting' and state in its note 'Select the Insights app and the Viva Insights web app feature.' The cited procedure requires both selections. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: The auto-enablement policy path is Settings > Viva > Settings > Manage feature access > Create a policy > feature > Access setting. | Found: Name the policy and select the app and feature for which you'd like to set the policy. | Fix: Include the app selection before the feature: set controls[2].ui.path to 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting' and state in its note 'Select the Insights app and the Copilot Dashboard Auto Enablement feature.' | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [unsupported, major] Why it matters / behaviour: The new view puts named employee contributions in front of leaders. | Found: Searched: "Copilot Dashboard" "Viva Engage" read-only posts named authors minimum group size exclusion; opened copilot-dashboard and manage-settings-copilot-dashboard. The roadmap mentions user-shared posts but not whether authors are named. | Fix: Replace 'it puts named contributions, not counts, in front of leaders' with 'the roadmap describes user-shared posts rather than only usage counts; Microsoft has not stated whether authors are named'.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The roadmap describes a read-only view. | Found: Searched: "Copilot Dashboard" "Viva Engage" read-only posts named authors minimum group size exclusion; opened copilot-dashboard and manage-settings-copilot-dashboard. The record says the dashboard showcases posts, not that the view is read-only. | Fix: Replace 'No change: the roadmap describes a read-only view' with 'The roadmap describes showcasing existing Viva Engage posts; it does not describe actions in Engage'.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Nothing is posted or changed in Engage by the highlights feature. | Found: Searched: "Copilot Dashboard" "Viva Engage" read-only posts named authors minimum group size exclusion; opened copilot-dashboard and manage-settings-copilot-dashboard. No source states that this feature cannot post or change Engage content. | Fix: Remove 'Nothing is posted or changed in Engage.' The narrower replacement for the preceding sentence already states what the roadmap describes without asserting an undocumented prohibition.
- [unsupported, blocker] Scope: Viewers; Risk assessment: Security & identity / availability: Whoever has Copilot Dashboard access can view the Engage highlights, with no documented access change. | Found: Searched: Copilot Dashboard Viva Engage highlights posts selection authors public communities default licensing meter read only; opened copilot-dashboard, its licence table, and manage-settings-copilot-dashboard. General dashboard access is documented; highlights viewer eligibility is not. | Fix: Replace Scope's 'Viewers: whoever has Copilot Dashboard access' with 'Viewers: Microsoft has not documented which dashboard viewers will have access to Engage highlights.' Replace the Security & identity bullet with 'Review existing Copilot Dashboard access using the controls table; feature-specific viewer eligibility is not yet published.'
- [contradicted, blocker] Scope: Viewers / role: Global Administrators automatically have dashboard access. | Found: If you're a Privileged Identity Management (PIM) enabled tenant, global admins might not have access to the Copilot Dashboard. If you want to give global admins access to the Copilot Dashboard, add them explicitly using these steps. | Fix: Qualify the Global Administrator statement: 'Global Administrators also have access, but in PIM-enabled tenants they might need to be added explicitly through Manage access settings for Microsoft Copilot Dashboard.' Cite https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
- [contradicted, blocker] Governance controls / applicability: The most restrictive policy applies to a user, without distinguishing policy scopes. | Found: Custom policies take precedence over your org-wide settings. For example, if you have organization-wide access turned off, a custom policy could still allow access for specific users or groups. | Fix: Replace 'the most restrictive policy applies to a user' with 'user and group policies take precedence over the tenant policy; within the same scope level, the most restrictive enablement policy applies'. This is the scope-first rule at https://learn.microsoft.com/viva/feature-access-management#which-policy-takes-precedence. | Source: https://learn.microsoft.com/viva/control-access-admin-center
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: Add-VivaModuleFeaturePolicy with ModuleId VivaInsights, FeatureId 'Viva Insights web app', IsFeatureEnabled $false and Everyone creates a tenant-wide disabling policy. | Found: Add-VivaModuleFeaturePolicy -FeatureId <String> -IsFeatureEnabled <Boolean> -ModuleId <String> -Name <String> [-Confirm] [-Everyone] | Fix: Add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources for the command syntax. Keep the existing manage-settings citation, which supplies the VivaInsights and Viva Insights web app feature values. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The printed dashboard access path reaches Manage access settings for Microsoft Copilot Dashboard. | Found: Go to the Settings tab and select Microsoft Viva, then Viva Insights. On this page, go to the Set up and management tab. Under Microsoft Copilot Dashboard, select Manage access settings for Microsoft Copilot Dashboard. | Fix: Keep the path, which reaches the correct page, and add to controls[1].note: 'To grant access, select Users or Groups, choose the people or groups, then Add. To revoke access, select Users or Groups, choose the entries, then Remove selected users or Remove selected groups.' | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [supported, minor] controls[2].api; Governance guidance; Governance controls table / command: Add-VivaModuleFeaturePolicy with ModuleId VivaInsights, FeatureId AutoCxoIdentification, IsFeatureEnabled $false and Everyone disables tenant auto-enablement. | Found: you can manage access for your tenant using the Add-VivaModuleFeaturePolicy cmdlet: ModuleId : VivaInsights FeatureId : AutoCxoIdentification Name : DisableFeatureForAll IsFeatureEnabled : false Everyone | Fix: Add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources for the command parameters; keep the existing manage-settings citation for AutoCxoIdentification and its tenant scope. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [supported, minor] Governance guidance: Before rollout / admin-path: Settings > Microsoft Viva > Viva Insights > Set up and management is the route to review dashboard access. | Found: Go to the Settings tab and select Microsoft Viva, then Viva Insights. On this page, go to the Set up and management tab. Under Microsoft Copilot Dashboard, select Manage access settings for Microsoft Copilot Dashboard. | Fix: Complete the checklist's path to the access page: 'Microsoft 365 admin center > Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard'. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
-->
