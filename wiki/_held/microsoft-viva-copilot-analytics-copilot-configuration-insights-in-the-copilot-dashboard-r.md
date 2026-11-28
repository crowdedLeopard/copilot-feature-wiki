---
title: "Copilot Dashboard: Copilot configuration recommendations on the Readiness page"
slug: "microsoft-viva-copilot-analytics-copilot-configuration-insights-in-the-copilot-dashboard-r"
roadmapId: 551196
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "The Copilot Dashboard Readiness page now shows recommendation cards for Copilot Chat, Copilot licences and agents to Global admins and other dashboard users. Nothing is changed automatically; decide who sees the page and how to answer the cards."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Included with the Copilot Dashboard, which is available with a Microsoft 365 or Office 365 business or enterprise subscription and an active Exchange Online account. The licence table lists the Readiness page in every tier; viewers need no paid Viva Insights or Copilot licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["copilot-analytics","viva-insights","m365-copilot","copilot-chat","copilot-control-system","adoption","viva-feature-access-management"]
sources:
  - title: "Microsoft 365 Roadmap 551196"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=551196"
    kind: "roadmap"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
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
  - title: "Supported Microsoft 365 environments for Viva Insights features"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/supported-environments"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","microsoft-viva-access-management-for-copilot-analytics","microsoft-viva-copilot-analytics-all-licensed-user-page-copilot-dashboard","m365-copilot-your-command-center-for-ai-success","web-search"]
controls:
  - governs: "Which users and groups are given access to the Copilot Dashboard, including the Readiness page"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "AI Administrator or Global Administrator. Select Groups instead of Users to add Entra ID groups. Changes take effect in 24 hours."
  - governs: "Whether the Viva Insights web app, which hosts the Copilot Dashboard, is on for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Choose the Viva Insights web app feature. On by default. Turning it off disables the whole app, not only the Readiness page."
  - governs: "Whether senior leaders are given Copilot Dashboard access automatically"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Enabled by default. Tenant-level policies only; user and group policies do not take effect."
  - governs: "Separate switch for the Readiness page recommendation cards"
    scope: "tenant"
    ui: null
    api: null
    note: "Use the dashboard access controls above instead."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-30T23:30:16"
changes:
  - date: "2026-11-28"
    note: "New briefing: configuration recommendation cards on the Copilot Dashboard Readiness page, who sees them and the dashboard access controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 71 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 66
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "c0218b8a7953c3820178bf970e0b7ce4"
---

## What's changing

The Readiness page of the Microsoft Copilot Dashboard (in the Viva Insights web app) now includes tailored recommendations for Copilot configuration settings. Microsoft Learn documents them in a section called **Steps to enable Copilot and accelerate your AI transformation**, which "provides actionable recommendations to enable Copilot Chat, get the most out of Copilot, and activate agents" and shows only recommendations relevant to the organisation.

The recommendations appear as cards in three groups:

- **Build AI momentum with Copilot Chat**: users blocked from Copilot in Outlook and the Copilot app; users blocked from Copilot in desktop apps because they are not on the Current or Monthly Enterprise Channel; Copilot not pinned in the Microsoft 365 apps; web search to improve Copilot Chat answers.
- **Maximize value with Copilot**: outstanding Copilot licence requests, and Copilot Chat users and Microsoft 365 users who are candidates for a Copilot licence.
- **Boost productivity with agents**: agents built by Microsoft are blocked; users cannot install agents built by the organisation.

A viewer acts on a card by selecting **Contact admin**, which opens their email software with the chosen admins' aliases filled in. Learn notes that the tab does not give a comprehensive summary of all Copilot readiness and eligibility requirements. Dashboard data covers the previous 28 days, with up to a six-day delay.

The roadmap item is **Launched** (General Availability, Web), with a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud. The Microsoft 365 Copilot release notes announced the change on 5 May 2026.

## Why it matters

The cards turn the tenant's Copilot settings into a to-do list that people outside IT can see. Senior leaders whom the dashboard enables automatically can read that, for example, Microsoft agents are blocked or web search is off, and email the Global admins about it in two clicks. Each of those settings was usually switched off on purpose, so expect requests that reopen decisions already taken.

The page is already live and the Viva Insights web app that hosts it is on by default, so no admin action is needed for the cards to appear to existing dashboard users. What an administrator decides is who those users are, and what answer to give for each card before the questions arrive.

## Risk assessment

**Data exposure**
- The section shows tenant-level configuration state (which Copilot and agent settings are off) and licence-request counts to everyone who can open the Readiness page. Delegates do not see the recommendations section and managers do not see the Readiness page; Global admins, auto-enabled senior leaders and Viva Insights Analysts with global partition access can. The access list (control row 2) decides who that is.

**Security & identity**
- Several cards recommend loosening a setting: turning on web search for Copilot Chat, unblocking Microsoft-built agents, and allowing users to install agents built by the organisation. Accepted without review, each widens what Copilot can reach or run. Learn describes the cards as prompts to contact an admin; the settings stay in their own admin centres.

**Autonomy & actions**
- No change: Learn describes each card as a prompt to contact an admin, not as an action the page takes.

**Change & support**
- **Contact admin** sends viewers' requests by email to the Global admins they select, which adds a new channel for Copilot configuration requests.
- In tenants with Privileged Identity Management (PIM), Global admins might not have dashboard access, so the people receiving requests may not be able to see the cards that prompted them.

## Cost and licensing

**Licence.** The Copilot Dashboard Learn page says the dashboard "is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise, and who has an active Exchange Online account", and that users don't need a paid Viva Insights or Copilot licence. Its licence table lists the Readiness page as included for tenants with 1 to 49 Copilot licences, 50 or more Copilot licences, or at least 50 Viva Insights licences. Data processing starts only once a tenant has at least 50 assigned Viva Insights licences or 1 assigned Copilot licence.

**Meter.** The Copilot Dashboard page documents no meter or Copilot Credits charge for the dashboard at the time of writing (November 2026).

**Indirect costs.** Admin time to review each card. The licence cards recommend assigning unused Copilot licences and identify Copilot Chat and Microsoft 365 users as candidates for a Copilot licence, which can feed licence requests and budget discussions.

## Scope

- **Who sees it:** users with Copilot Dashboard access. Global administrators have access (PIM-enabled tenants might not); in qualifying tenants with at least 2,500 users in Entra ID, senior leaders are enabled automatically; Viva Insights Analysts with global partition access, delegates and enabled managers also have access. Managers cannot open the Readiness page, and delegates cannot see the recommendations section.
- **Licences:** see Cost and licensing.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). Microsoft's supported-environments page lists Readiness page access and features as available in Worldwide and not in GCC Moderate or GCC High.
- **Platform:** Web, in the Viva Insights web app.
- **Roles:** the dashboard access settings are documented for the AI Administrator, and Global Administrators can manage all dashboard settings.

## Governance guidance

### Before rollout
- Check who can open the Copilot Dashboard in the Microsoft 365 admin center (Settings > Microsoft Viva > Viva Insights > Set up and management > Manage access settings for Microsoft Copilot Dashboard) and remove users who should not see tenant configuration state.
- Decide whether senior leaders should keep automatic dashboard access, and if not, add the AutoCxoIdentification policy with Add-VivaModuleFeaturePolicy.
- Add Global admins to the access list explicitly if the tenant uses PIM, so the people receiving Contact admin emails can see the cards.

### At rollout
- Open the Readiness page as a Global admin and record which cards show for the tenant.
- Write down, with the Copilot service owner, the agreed answer for each card that recommends loosening a setting: web search, Microsoft-built agents and installation of organisation-built agents.
- Tell the Global admins listed by Contact admin to expect configuration requests by email and where to route them.

### After rollout
- Revisit the Readiness page monthly, since its data covers the previous 28 days.
- Check the Copilot requirements page as well, because the Readiness tab does not list every requirement.
- Review the Viva Feature Access Management change logs in Microsoft Purview for changes to the dashboard policies.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups are given access to the Copilot Dashboard, including the Readiness page</strong><br><small>User</small><br><small class="controls__note">AI Administrator or Global Administrator. Select Groups instead of Users to add Entra ID groups. Changes take effect in 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the Copilot Dashboard, is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Viva Insights web app feature. On by default. Turning it off disables the whole app, not only the Readiness page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › app and feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether senior leaders are given Copilot Dashboard access automatically</strong><br><small>Tenant</small><br><small class="controls__note">Enabled by default. Tenant-level policies only; user and group policies do not take effect.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for the Readiness page recommendation cards</strong><br><small>Tenant</small><br><small class="controls__note">Use the dashboard access controls above instead.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no separate switch for the recommendation cards at the time of writing (November 2026); the documented controls act on the dashboard or the whole web app. Turning off the Viva Insights web app removes the whole Copilot Dashboard, Copilot Analytics reports and advanced analysis tools, not only the cards.

The Copilot Dashboard settings page documents the web app and auto-enablement controls for the AI Administrator and says Global Administrators can manage all settings; the feature access management table lists Global admin for both features. Changes to the access list take effect in 24 hours. The PowerShell controls need Exchange Online PowerShell and Connect-ExchangeOnline. The auto-enablement control supports tenant-level policies only. The cards point to settings in other admin centres (Copilot app access, update channels, pinning, web search, agent settings); those settings govern Copilot itself and are covered in their own briefings, not by this page.

## Open questions

- Which settings does the Readiness page evaluate in total, and will Microsoft add cards beyond the nine documented? Watch the Readiness section of the Copilot Dashboard Learn page.
- Will Microsoft offer a way to hide the Steps to enable Copilot section from auto-enabled senior leaders while keeping the rest of the dashboard? Watch Message center and the Copilot Dashboard settings page.
- Which admins does Contact admin list: Global admins only, or also the AI Administrator who manages Copilot settings? Watch the Readiness section of the Learn page.
- Will the Readiness page reach GCC Moderate or GCC High? Watch the Viva Insights supported-environments page.

<!-- rationale
risk: Low. The cards report tenant configuration and ask viewers to contact an admin; Learn describes no setting that a card changes itself.
cost: Low. The Readiness page is included with the Copilot Dashboard licence tiers; the cost is admin time to review cards, some of which suggest buying more Copilot licences.
impact: Low. Only people with Copilot Dashboard access see it, such as Global admins and auto-enabled senior leaders; managers have no access to the Readiness page.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: Contact admin / behaviour: Selecting Contact admin opens the email application with selected admins' aliases prefilled. | Found: select Contact admin, then review the details and contact information that appears for the admins. Select Send email to open your email software with the selected admins' aliases prefilled in the To line. | Fix: Replace with: 'Select Contact admin to review admin details and contact information, then select Send email to open your email software with the selected admins' aliases prefilled in the To line.' | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
- [unsupported, major] Risk assessment: Data exposure / behaviour: The recommendations section shows license-request counts. | Found: Searched: 'Copilot Dashboard license requests count'; read dashboard Readiness section and search excerpts. Learn documents an outstanding-request card, but no passage states that it displays request counts. | Fix: Replace 'and licence-request counts' with 'and outstanding Copilot licence requests'.
- [contradicted, blocker] controls[0].api; Governance controls table / absence: No API or automation is documented for controlling dashboard access for individual users or groups. | Found: Policies are used to restrict or grant access to the specified feature for specific users, groups, or the entire tenant. ... -UserIds <String[]> ... -GroupIds <String[]> | Fix: Replace controls[0].api null with PowerShell 'Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId "Viva Insights web app" -Name EnableSelectedUsers -IsFeatureEnabled $true -UserIds <user-UPNs>' and docs https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy. The cited settings page explicitly places dashboard access under the Viva Insights web app and supports user/group policies for it. Add to the note: 'This policy controls access to the whole Viva Insights web app, not the Readiness page alone; use -GroupIds for groups.' | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [contradicted, blocker] controls[2].ui; Governance controls table / absence: No admin UI is documented for dashboard auto-enablement policies. | Found: Admins with correct permissions in the Microsoft 365 admin center or in PowerShell can create and manage access policies. ... | Copilot Dashboard Auto Enablement | No | Global admin | Viva Insights | | Fix: Replace controls[2].ui null with surface 'Microsoft 365 admin center', path 'Settings > Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting', docs https://learn.microsoft.com/viva/control-access-admin-center. Add to the note: 'Select the Copilot Dashboard Auto Enablement feature and apply the policy to Everyone; only tenant-level policies take effect.' The feature-access-management table includes this feature in its documented admin-center policy coverage; the feature-specific PowerShell section does not state that UI management is excluded. | Source: https://learn.microsoft.com/viva/feature-access-management
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: After rollout / behaviour: Dashboard data covers the previous 28 days. | Found: Data ... for the readiness, adoption, and impact pages represents data over the previous 28 days. ... Sentiment data ... reflects data for the period of your selected survey duration, not the previous 28 days. | Fix: Replace 'Dashboard data covers the previous 28 days' with 'Readiness, adoption and impact metrics cover the previous 28 days; sentiment data instead covers the selected survey duration.' | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
- [supported, minor] Cost and licensing: Licence / licensing: Data processing requires at least 50 assigned Viva Insights licenses or one assigned Copilot license. | Found: A minimum of 50 assigned Viva Insights licenses, or 1 assigned Copilot license (including the Viva Insights service plan), is required for data processing to kick off. | Fix: Add the source's qualification: 'or 1 assigned Copilot licence (including the Viva Insights service plan)'. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
- [supported, minor] Risk assessment: Data exposure / behaviour: The recommendation section exposes tenant configuration state to eligible viewers, with access managed by the access list. | Found: The page only shows Copilot- and agent-related configuration recommendations that are relevant to your organization. ... Agents built by Microsoft are blocked ... Agent installation is turned off | Fix: Replace the opening of Data exposure with 'The section shows tenant-level configuration state and outstanding Copilot licence requests to eligible viewers.' Change '(control row 2)' to '(control row 1)' for the access list. Keep the existing manager and delegate exclusions. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
- [supported, minor] Governance guidance: Before rollout, access-list path / admin-path: The checklist reaches the dashboard access page via Settings > Microsoft Viva > Viva Insights > Set up and management > Manage access settings for Microsoft Copilot Dashboard. | Found: Go to the Settings tab and select Microsoft Viva, then Viva Insights. ... Set up and management tab. ... Under Microsoft Copilot Dashboard, select Manage access settings for Microsoft Copilot Dashboard. | Fix: Use 'Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Remove selected users' for the checklist's user-removal instruction. The omitted Microsoft Copilot Dashboard step is a heading, not a selection. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks readers to review VFAM change logs, but the controls table has no monitoring row for that step. | Found: Review the Viva Feature Access Management change logs in Microsoft Purview for changes to the dashboard policies. ... Which users and groups are given access to the Copilot Dashboard ... Whether senior leaders are given Copilot Dashboard access automatically ... Separate switch for the Readiness pag | Fix: Remove the checklist bullet 'Review the Viva Feature Access Management change logs in Microsoft Purview for changes to the dashboard policies.' It has no corresponding controls-table row; do not add a row in this correction.
- [supported, minor] Risk assessment: Security & identity; Governance controls: settings outside the dashboard / behaviour: The settings recommended by the cards are managed outside the Readiness recommendation section. | Found: Some settings you configure there, and others link to the admin center or policy service where you make the change. ... Agents ... Copilot > Settings > Data access > Agents ... Follow the link ... Allow web search in Copilot cloud policy | Fix: Replace 'the settings stay in their own admin centres' with 'the settings are managed outside the Readiness recommendation section.' Likewise replace 'The cards point to settings in other admin centres' with 'The cards point to settings managed outside the Readiness recommendation section'. Add https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center to sources. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
-->
