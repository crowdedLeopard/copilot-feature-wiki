---
title: "Viva Insights: Copilot Analytics Agent Dashboard for agent adoption and Copilot Credit usage"
slug: "microsoft-viva-copilot-analytics-agent-dashboard"
roadmapId: 506749
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Viva Insights adds an Agent Dashboard showing leaders, delegates and analysts how agents are adopted and how many Copilot Credits they use. Learn says it is on by default in preview; admins can switch it off."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "February CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Learn requires at least 50 Microsoft Copilot licences assigned plus agent activity; the Agent 365 view also needs Agent 365 licensing. No separate price or licence for the dashboard is published on that page."
audiences: ["m365-admin","finops","compliance","change-adoption"]
tags: ["viva-insights","adoption","analytics","agents","m365-copilot","copilot-credits","viva-feature-access-management","privacy","copilot-control-system"]
sources:
  - title: "Microsoft 365 Roadmap 506749"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=506749"
    kind: "roadmap"
  - title: "MC1166852: (Updated) Microsoft Viva Copilot Analytics launches new agent dashboard"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1166852"
    kind: "message-center"
  - title: "Connect to the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Delegate access to the Copilot Dashboard, Agent Dashboard, and Copilot insights"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/delegate-access"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","copilot-credits","m365-admin-center-copilot-credits-usage-report"]
controls:
  - governs: "Whether the Agent Dashboard is available to everyone, selected groups or selected users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Agent Dashboard > Add policy"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator or Global Administrator. Policies can target the tenant, groups or users. The Learn page is marked preview."
  - governs: "Whether the Viva Insights web app, which hosts the dashboard, is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Turning it off disables the whole app, not only the Agent Dashboard. The UI path adds or removes users and groups; the AI Administrator does not get automatic access."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-17"
    note: "New briefing: Agent Dashboard in Viva Insights, with the VFAM controls Learn documents and the roadmap/notice date mismatch flagged."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 86 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 84
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "35d9dc63839dacf06f2f559abefadacd"
---

## What's changing

Viva Insights is adding an Agent Dashboard to Copilot Analytics. The roadmap item describes it as a central place for leaders, delegates and analysts to understand how the organisation is adopting agents. Microsoft's notice MC1166852 says it shows agent adoption trends and associated Copilot Credit usage for agents used within Microsoft 365 Copilot, whether built in Copilot Studio, SharePoint or the Microsoft 365 Agents Toolkit, and whether built by employees, the organisation, Microsoft or partners. It also adds agent insights and entry points to the Adoption tab of the Copilot Dashboard.

Microsoft Learn already documents the dashboard as a preview page. It describes two views: a Copilot Agent Dashboard (previous six months of history; Copilot Credit usage) and an Agent 365 Dashboard (all supported agents across Microsoft 365 apps), switched with an **All agents** toggle that appears only if the organisation also has Agent 365 licensing. Data covers the previous 28 days with up to a six-day delay, and agent names and group metrics are hidden for groups below the minimum group size.

The roadmap record shows status In development, with release phases General Availability and Preview, a preview date of February CY2026 and a target date of February CY2027; the cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. Notice MC1166852 (last updated 2 October 2026, end date 31 March 2027, no act-by date) gives different rollout dates: public preview rolling out from early February 2026 to mid-February 2026 and general availability in February 2026. Those dates are already past and disagree with the roadmap's February CY2027 target, so treat the timing as unsettled until Microsoft reconciles them.

## Why it matters

This is a new reporting surface over employee agent use, and Learn says it is on by default as part of the Viva Insights web app. Automatic access goes to a limited set of people: in qualifying tenants (at least 2,500 users with a Microsoft Entra ID and a majority in one reporting line), users in the top three levels of the organisation with a significant part of it reporting to them, plus Global administrators, Viva Insights analysts with global partition access, delegates and managers already enabled for team-level Copilot Analytics. If nobody acts, those people can see agent adoption by agent and group; the wiki's view is that service owners should decide this before leaders start using it, not after.

The dashboard also puts Copilot Credit usage by agent in front of leaders, which gives finance and adoption teams a view next to the admin centre reports. The notice asks administrators to review the impact, manage access with Viva Feature Access Management (VFAM) controls, consider reviewing with works councils and update training and documentation.

## Risk assessment

**Data exposure**
- The dashboard reports agent activity for employees with agent activity, by agent, creator type and group, over the previous 28 days. Learn says group metrics and agent names are suppressed below the minimum group size, which is 10 employees by default and must be set at least at five. Check the setting before leaders rely on small-group figures.
- Everyone with a Copilot licence, a Viva Insights licence or a manual cohort upload is included unless an exclusion list is created, according to Learn. Use the unified exclusion list if legal or works-council rules require people to be left out of aggregates.

**Security & identity**
- Access is granted automatically by organisation-chart position (Entra ID manager hierarchy) and by role, and re-evaluated weekly. A Global administrator may lose access in a Privileged Identity Management (PIM) enabled tenant unless added explicitly, per Learn, so confirm who actually sees the dashboard.
- Delegates inherit access from the leader who delegates; a restrictive VFAM policy must include delegates explicitly, according to the delegate-access FAQ.

**Autonomy & actions**
- No change: the dashboard reports on agent usage, and Microsoft Learn describes no action it takes on agents at the time of writing (November 2026).

**Change & support**
- The Learn page is marked preview and the roadmap item is still In development, so metrics, views and limits may change before general availability.
- The roadmap target (February CY2027) and MC1166852's dates (February 2026) disagree; expect questions from leaders who already see the preview.

## Cost and licensing

Licence: the Learn page states that the Copilot Agent Dashboard needs at least 50 Microsoft Copilot licences assigned and agent activity. The Agent 365 view needs the same, plus Agent 365 licensing, and the **All agents** toggle does not appear without it. Notice MC1166852 likewise says tenants with at least 50 Microsoft 365 Copilot licences are affected.

Meter: the dashboard reports Copilot Credit usage and the number of users using Copilot Credits (see [Copilot Credits](/concepts/copilot-credits/)). Learn does not describe the dashboard itself as a meter, and no separate price for it is published on the page. The licence and price for the dashboard beyond those requirements are Not yet published.

Indirect costs: admin time to set access policies and the minimum group size, and communications to leaders, delegates and any works council.

## Scope

**Who and where.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn says the Agent Dashboard is not currently available for national or regional clouds, including Microsoft's U.S. Government clouds and Office 365 operated by 21Vianet.

**Audience.** Leaders, delegates, adoption specialists and administrators using Viva Insights, in tenants with at least 50 Microsoft 365 Copilot licences (MC1166852). Learn lists the automatic-access rules: senior leaders in qualifying tenants, Global administrators, Viva Insights analysts with global partition access, users with delegate access and enabled managers, scoped to the teams they can view.

**Roles.** Learn marks the access settings as applying to the AI Administrator and says Microsoft 365 Global Administrators can also manage all of them.

**Rollout.** Learn says the dashboard is on by default as part of the Viva Insights web app, and that both the web app control and the Agent Dashboard control must be enabled for access. Roadmap and notice dates differ, as set out above.

## Governance guidance

### Before rollout
- Confirm who will see the dashboard: review the automatic-access criteria on Learn against your organisation chart, and note that Privileged Identity Management tenants must add Global administrators explicitly.
- Decide whether to keep the Agent Dashboard on for everyone, or restrict it by group or user with the Agent Dashboard VFAM policy (first row of the controls table).
- Agree the minimum group size and any exclusion list with HR, legal and any works council, as the notice suggests.
- Check licence counts against the stated requirement of at least 50 Microsoft Copilot licences, and whether Agent 365 licensing applies to the **All agents** view.

### At rollout
- Add an Agent Dashboard policy in the Microsoft 365 admin center, or run Add-VivaModuleFeaturePolicy, to limit access to the groups that should see it.
- Tell leaders and delegates what the figures cover: the previous 28 days, with up to a six-day delay.
- Update training and documentation for leaders, as the notice advises.

### After rollout
- Review who has access, including delegates, after the weekly access re-evaluation.
- Compare the Copilot Credit figures in the dashboard with your usage reports, and treat the dashboard as adoption reporting alongside them.
- Re-read the Learn page when the roadmap status changes, because it is currently a preview page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard is available to everyone, selected groups or selected users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Policies can target the tenant, groups or users. The Learn page is marked preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the dashboard, is available</strong><br><small>Tenant</small><br><small class="controls__note">Turning it off disables the whole app, not only the Agent Dashboard. The UI path adds or removes users and groups; the AI Administrator does not get automatic access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are Viva Feature Access Management (VFAM) policies, which the settings page says the AI admin can apply at tenant, group or user level for the Agent Dashboard. The Add-VivaModuleFeaturePolicy reference says you can assign up to 10 policies per feature plus one for the entire tenant, and that the most restrictive policy applies where a user has several. The cmdlet requires the Global Administrators role or roles assigned at the feature level.

To reach the dashboard a user needs both controls enabled. Turning off the Viva Insights web app disables the whole app, including the Copilot Dashboard, so use the Agent Dashboard control to restrict this feature alone.

Other settings documented on the same Learn page, with no row because only part of each was read: automatic access for senior leaders is a tenant-level VFAM control with FeatureId AutoCxoIdentification that supports tenant-level policies only; a unified exclusion list that hides users from aggregates and must be turned on to work; and the minimum group size, set under Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size for tenants without a Viva Insights licence. For the Agent 365 view, a separate VFAM control with FeatureId Agent365DashboardNonPublicAgentsVisibility limits reporting to public agents.

## Open questions

- Which dates apply: the roadmap's February CY2027 target or MC1166852's February 2026 rollout window? Watch the roadmap item and Message center for a reconciled date.
- Will the on-by-default behaviour and access rules on the preview Learn page stay the same at general availability? Watch the Learn page, which is marked preview.
- Is any licence or charge for the dashboard beyond the 50 Microsoft Copilot licences requirement planned? Learn states no price for it.
- Does the Agent Dashboard come to national or regional clouds? Learn says it is not currently available there; watch the roadmap item for added clouds.

<!-- rationale
risk: Medium. Microsoft Learn says the Agent Dashboard is on by default as part of the Viva Insights web app and reports agent activity by agent and by group, so leaders see usage data unless an admin sets a policy.
cost: Low. The Learn page lists at least 50 Microsoft Copilot licences as the requirement and states no price for the dashboard itself; the known cost is admin and communication time. The dashboard reports Copilot Credit usage but is not itself described as a meter.
impact: Medium. Leaders, delegates, analysts and Global administrators are the audience, and people with agent activity are counted in the group and agent figures they see.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Meter; Why it matters; summary / behaviour: The dashboard reports Copilot Credit usage and the number of users using Copilot Credits, without stating view, filter or pay-as-you-go prerequisites. | Found: Copilot Credits, which are only visible when you select Copilot Chat in the License filter at the top of the page and if your organization has enabled Pay-As-You-Go and used Copilot Credits. (Not shown if viewing the Agent 365 Dashboard.) | Fix: Replace the first Meter sentence with 'In the Copilot Agent Dashboard view, Copilot Credits and Active users using Copilot Credits are visible only with License set to Copilot Chat and when the organisation has enabled Pay-As-You-Go and used Copilot Credits; neither metric appears in the Agent 365 Dashboard view.' Learn also states that the Copilot Chat filter appears only when the tenant has Copilot Chat reporting enabled; add that clause to this sentence. Qualify the summary and Why it matters credit-reporting references as referring to the Copilot Agent Dashboard view under these conditions. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: Both rows are VFAM policies / applicability: Both control rows use VFAM policies. | Found: The AI admin can turn the Viva Insights web app on or off at the tenant, group, or user level using the Viva Insights web app feature access management control in the Microsoft 365 admin center. | Fix: Replace 'Both rows are Viva Feature Access Management (VFAM) policies' with 'Both PowerShell calls create Viva Feature Access Management (VFAM) policies; the second row's UI instead manages individual and group access assignments.' The existing second-row note already makes this distinction. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [supported, minor] Governance guidance: Before rollout, minimum group size and exclusion list / record: The notice suggests agreeing minimum group size and an exclusion list with HR, legal and a works council. | Found: Consider reviewing with your works council | Fix: Remove ', as the notice suggests' from this checklist bullet. Keep the specific group-size and exclusion-list recommendation as the wiki's own advice; the notice suggests works-council review but does not prescribe that consultation or those settings.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist asks readers to agree or check has a controls-table row. | Found: Agree the minimum group size and any exclusion list with HR, legal and any works council. / Other settings documented on the same Learn page, with no row because only part of each was read | Fix: The minimum-group-size and unified-exclusion-list checklist instructions have no matching controls rows. Remove that checklist bullet; keep the existing explanatory notes and links under Governance controls. Do not add rows as part of this correction.
-->
