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
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
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
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name EnableSelectedUsers -IsFeatureEnabled $true -UserIds <user-UPNs>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "AI Administrator or Global Administrator. Select Groups instead of Users to add Entra ID groups. Changes take effect in 24 hours. The policy covers the whole Viva Insights web app, not the Readiness page alone; use -GroupIds for groups."
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
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Enabled by default. Select the Copilot Dashboard Auto Enablement feature and apply the policy to Everyone; only tenant-level policies take effect."
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
  - date: "2026-11-28"
    note: "Corrected the Contact admin steps and data-period wording, added the PowerShell call for dashboard access and the admin centre path for auto-enablement, and removed the change-log checklist step."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 72
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "e30d03f8529acdd4f556c96fc22648d6"
---

## What's changing

The Readiness page of the Microsoft Copilot Dashboard (in the Viva Insights web app) now includes tailored recommendations for Copilot configuration settings. Microsoft Learn documents them in a section called **Steps to enable Copilot and accelerate your AI transformation**, which "provides actionable recommendations to enable Copilot Chat, get the most out of Copilot, and activate agents" and shows only recommendations relevant to the organisation.

The recommendations appear as cards in three groups:

- **Build AI momentum with Copilot Chat**: users blocked from Copilot in Outlook and the Copilot app; users blocked from Copilot in desktop apps because they are not on the Current or Monthly Enterprise Channel; Copilot not pinned in the Microsoft 365 apps; web search to improve Copilot Chat answers.
- **Maximize value with Copilot**: outstanding Copilot licence requests, and Copilot Chat users and Microsoft 365 users who are candidates for a Copilot licence.
- **Boost productivity with agents**: agents built by Microsoft are blocked; users cannot install agents built by the organisation.

A viewer selects **Contact admin** to review admin details and contact information, then selects **Send email** to open their email software with the selected admins' aliases prefilled in the To line. Learn notes that the tab does not give a comprehensive summary of all Copilot readiness and eligibility requirements. Readiness, adoption and impact metrics cover the previous 28 days, with up to a six-day delay; sentiment data instead covers the selected survey duration.

The roadmap item is **Launched** (General Availability, Web), with a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud. The Microsoft 365 Copilot release notes announced the change on 5 May 2026.

## Why it matters

The cards turn the tenant's Copilot settings into a to-do list that people outside IT can see. Senior leaders whom the dashboard enables automatically can read that, for example, Microsoft agents are blocked or web search is off, and email the Global admins about it in two clicks. Each of those settings was usually switched off on purpose, so expect requests that reopen decisions already taken.

The page is already live and the Viva Insights web app that hosts it is on by default, so no admin action is needed for the cards to appear to existing dashboard users. What an administrator decides is who those users are, and what answer to give for each card before the questions arrive.

## Risk assessment

**Data exposure**
- The section shows tenant-level configuration state (which Copilot and agent settings are off) and outstanding Copilot licence requests to eligible viewers. Delegates do not see the recommendations section and managers do not see the Readiness page; Global admins, auto-enabled senior leaders and Viva Insights Analysts with global partition access can. The access list (control row 1) decides who that is.

**Security & identity**
- Several cards recommend loosening a setting: turning on web search for Copilot Chat, unblocking Microsoft-built agents, and allowing users to install agents built by the organisation. Accepted without review, each widens what Copilot can reach or run. Learn describes the cards as prompts to contact an admin; the settings are managed outside the Readiness recommendation section.

**Autonomy & actions**
- No change: Learn describes each card as a prompt to contact an admin, not as an action the page takes.

**Change & support**
- **Contact admin** sends viewers' requests by email to the Global admins they select, which adds a new channel for Copilot configuration requests.
- In tenants with Privileged Identity Management (PIM), Global admins might not have dashboard access, so the people receiving requests may not be able to see the cards that prompted them.

## Cost and licensing

**Licence.** The Copilot Dashboard Learn page says the dashboard "is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise, and who has an active Exchange Online account", and that users don't need a paid Viva Insights or Copilot licence. Its licence table lists the Readiness page as included for tenants with 1 to 49 Copilot licences, 50 or more Copilot licences, or at least 50 Viva Insights licences. Data processing starts only once a tenant has at least 50 assigned Viva Insights licences or 1 assigned Copilot licence (including the Viva Insights service plan).

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
- Check who can open the Copilot Dashboard in the Microsoft 365 admin center (Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Remove selected users) and remove users who should not see tenant configuration state.
- Decide whether senior leaders should keep automatic dashboard access, and if not, add the AutoCxoIdentification policy with Add-VivaModuleFeaturePolicy.
- Add Global admins to the access list explicitly if the tenant uses PIM, so the people receiving Contact admin emails can see the cards.

### At rollout
- Open the Readiness page as a Global admin and record which cards show for the tenant.
- Write down, with the Copilot service owner, the agreed answer for each card that recommends loosening a setting: web search, Microsoft-built agents and installation of organisation-built agents.
- Tell the Global admins listed by Contact admin to expect configuration requests by email and where to route them.

### After rollout
- Revisit the Readiness page monthly, since its data covers the previous 28 days.
- Check the Copilot requirements page as well, because the Readiness tab does not list every requirement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups are given access to the Copilot Dashboard, including the Readiness page</strong><br><small>User</small><br><small class="controls__note">AI Administrator or Global Administrator. Select Groups instead of Users to add Entra ID groups. Changes take effect in 24 hours. The policy covers the whole Viva Insights web app, not the Readiness page alone; use -GroupIds for groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name EnableSelectedUsers -IsFeatureEnabled $true -UserIds &lt;user-UPNs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the Copilot Dashboard, is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Viva Insights web app feature. On by default. Turning it off disables the whole app, not only the Readiness page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › app and feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether senior leaders are given Copilot Dashboard access automatically</strong><br><small>Tenant</small><br><small class="controls__note">Enabled by default. Select the Copilot Dashboard Auto Enablement feature and apply the policy to Everyone; only tenant-level policies take effect.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › app and feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AutoCxoIdentification -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for the Readiness page recommendation cards</strong><br><small>Tenant</small><br><small class="controls__note">Use the dashboard access controls above instead.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no separate switch for the recommendation cards at the time of writing (November 2026); the documented controls act on the dashboard or the whole web app. Turning off the Viva Insights web app removes the whole Copilot Dashboard, Copilot Analytics reports and advanced analysis tools, not only the cards.

The Copilot Dashboard settings page documents the web app and auto-enablement controls for the AI Administrator and says Global Administrators can manage all settings; the feature access management table lists Global admin for both features. Changes to the access list take effect in 24 hours. The PowerShell controls need Exchange Online PowerShell and Connect-ExchangeOnline. The auto-enablement control supports tenant-level policies only. The cards point to settings managed outside the Readiness recommendation section (Copilot app access, update channels, pinning, web search, agent settings); those settings govern Copilot itself and are covered in their own briefings, not by this page.

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
- [contradicted, blocker] Risk assessment: Change & support; Why it matters / behaviour: Contact admin sends viewers' requests by email, allowing them to email Global admins in two clicks. | Found: select Contact admin, then review the details and contact information that appears for the admins. Select Send email to open your email software with the selected admins' aliases prefilled in the To line. | Fix: Replace the Change & support bullet with 'Contact admin displays administrator details; Send email opens the viewer's email software with the selected admins' aliases prefilled in the To line.' In Why it matters, replace 'email the Global admins about it in two clicks' with 'open their email software with selected admins' aliases prefilled using Contact admin and Send email'. These are the documented actions at https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard#readiness; neither sends a message. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
-->
