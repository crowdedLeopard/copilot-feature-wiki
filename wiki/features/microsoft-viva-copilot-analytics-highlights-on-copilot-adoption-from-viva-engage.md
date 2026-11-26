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
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","m365-copilot-intelligent-summaries-in-copilot-dashboard","microsoft-viva-copilot-analytics-all-licensed-user-page-copilot-dashboard","microsoft-viva-network-analytics-enhancements","microsoft-viva-copilot-analytics-agent-dashboard"]
controls:
  - governs: "Whether the Viva Insights web app, including the Copilot Dashboard, is on for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Select the Insights app and the Viva Insights web app feature. Off disables the whole app, not only the Engage highlights. Can be scoped to users and groups."
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
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Select the Insights app and the Copilot Dashboard Auto Enablement feature. Tenant-level policies only; user and group policies do not take effect."
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
  - date: "2026-11-26"
    note: "Corrected the feature access policy paths to include the app selection, qualified Global Administrator dashboard access for PIM tenants, fixed the policy precedence rule, and removed unsupported statements about named authors, read-only behaviour and highlights viewers."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d2ba3a4c9dfccb61ca94933fdb9f5395"
---

## What's changing

Microsoft plans to add a view to the Copilot Dashboard in Viva Insights that shows Viva Engage posts in which users talk about Copilot. The roadmap item describes it as showcasing "real-world success stories, user-shared excitement about new Copilot features, and vibrant community discussions", as a qualitative complement to the dashboard's usage numbers.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Microsoft has not stated how posts are chosen, which communities they come from, whether authors are named, or whether the view is on when it arrives.

The roadmap item is **In development** with a target of **June CY2026**, General Availability, on the web, for Worldwide (Standard Multi-Tenant). That target has passed and the record still shows In development, so treat the date as unconfirmed.

## Why it matters

Today the Copilot Dashboard shows aggregated metrics, with group-level figures hidden below the minimum group size. A view built from individual employees' posts is a different kind of content: the roadmap describes user-shared posts rather than only usage counts; Microsoft has not stated whether authors are named. Organisations with works council agreements or employee-monitoring commitments about Viva Insights should expect questions about this before it appears.

Microsoft has not stated what happens on arrival. If it ships inside the dashboard with no separate switch, whoever already has dashboard access may be able to see it, including senior leaders granted access automatically. The time to review that access list is before the view lands.

## Risk assessment

**Data exposure**
- The view surfaces Engage posts to dashboard viewers. Microsoft has not documented whether it limits posts to those each viewer can already read in Engage, or draws from public communities only.
- The dashboard's minimum group size protects aggregated metrics; Microsoft has not said whether it, or the unified exclusion list, applies to individual posts in this view.

**Security & identity**
- Review existing Copilot Dashboard access using the controls table; feature-specific viewer eligibility is not yet published.

**Autonomy & actions**
- The roadmap describes showcasing existing Viva Engage posts; it does not describe actions in Engage.

**Change & support**
- Employees may be surprised to find their posts shown to leadership as adoption evidence. Expect questions from community managers and HR; brief them before rollout.

## Cost and licensing

- **Licence:** the [Copilot Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard) states the dashboard "is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise, and who has an active Exchange Online account", and that users "don't need a paid Viva Insights license or a Microsoft Copilot license". Dashboard features vary with the number of assigned Copilot or Viva Insights licences; the page's feature table does not list Engage highlights, so which tier gets them is not yet published.
- **Meter:** no meter is documented for this feature at the time of writing (November 2026).
- **Indirect costs:** admin time to review dashboard access, and communication with employees and works councils.

## Scope

- **Viewers:** Microsoft has not documented which dashboard viewers will have access to Engage highlights. Microsoft Learn says Copilot Dashboard access is granted automatically to some senior leaders in tenants with at least 2,500 users with an Entra ID, and to Viva Insights Analysts with global partition access, delegates and enabled managers. Global Administrators also have access, but in PIM-enabled tenants they might not, and may need to be added explicitly ([Copilot Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard)).
- **Content source:** Viva Engage posts, per the roadmap item.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap lists.
- **Platform:** Web.
- **Rollout:** General Availability; target June CY2026, status In development.

## Governance guidance

### Before rollout
- Review who holds Copilot Dashboard access under Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard in the Microsoft 365 admin center.
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
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, including the Copilot Dashboard, is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Select the Insights app and the Viva Insights web app feature. Off disables the whole app, not only the Engage highlights. Can be scoped to users and groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › app › feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups have Copilot Dashboard access</strong><br><small>User</small><br><small class="controls__note">AI Administrator. Microsoft says the earlier PowerShell control for dashboard access is no longer available; use the web app policy above to script access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether senior leaders are automatically given Copilot Dashboard access</strong><br><small>Tenant</small><br><small class="controls__note">Select the Insights app and the Copilot Dashboard Auto Enablement feature. Tenant-level policies only; user and group policies do not take effect.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › app › feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for the Viva Engage highlights view on its own</strong><br><small>Tenant</small><br><small class="controls__note">Not listed among the Viva Insights features in feature access management at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft documents no switch for the Engage highlights view itself at the time of writing (November 2026); the Viva Insights web app policy is the narrowest documented control, and it removes the Copilot Dashboard, Copilot Analytics reports and advanced analysis together. The manage-settings page gives AI Administrator for the web app and access settings and says Microsoft 365 Global Administrators can manage all settings; the feature access management table lists Global admin for the Viva Insights web app and Copilot Dashboard Auto Enablement features. Policy changes take effect within 24 hours, and [user and group policies take precedence over the tenant policy; within the same scope level, the most restrictive enablement policy applies](https://learn.microsoft.com/viva/feature-access-management#which-policy-takes-precedence).

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

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance guidance: Before rollout; Governance controls: table / admin-path: Dashboard access is managed at Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard. | Found: go to the Set up and management tab. ... Under Microsoft Copilot Dashboard, select Manage access settings for Microsoft Copilot Dashboard. ... At the top, select Users. ... select Add. | Fix: The path reaches the correct access page but stops before the control. For removing individual access, extend controls[1].ui.path to 'Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > user > Remove selected users'. Retain the existing Before rollout review path. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [supported, minor] Scope: Viewers; Why it matters / availability: Some senior leaders in tenants with at least 2,500 Entra ID users automatically receive dashboard access. | Found: Tenants must meet both of the following criteria to qualify: ... The majority of users in the tenant are part of a single reporting line ... The tenant has at least 2,500 users with an Entra ID | Fix: Replace the senior-leader clause with 'some senior leaders in tenants with at least 2,500 Entra ID users where the majority share a single reporting line; eligible leaders are in the top three organisational levels and have a significant portion of the organisation reporting to them'. Keep the separate analyst, delegate, manager and PIM statements. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
-->
