---
title: "Microsoft Viva: targeted audience surveys in the Copilot Dashboard"
slug: "microsoft-viva-copilot-dashboard-targeted-audience-surveys"
roadmapId: 568072
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Leaders can send a Viva Pulse survey to all licensed or active Copilot users from the Copilot Dashboard. Microsoft says it is on by default for eligible tenants, and a Viva Pulse admin can turn it off."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft documents full Viva Pulse functionality for users with a Microsoft Copilot licence. Dashboard integration requires Viva Suite, Viva Workplace Analytics and Employee Feedback, Viva Glint or Microsoft Copilot. No separate price or meter for targeted audience surveys is documented at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["viva-insights","viva-pulse","viva-feature-access-management","m365-copilot","adoption","privacy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 568072"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568072"
    kind: "roadmap"
  - title: "Measure Microsoft Copilot impact with Viva Pulse"
    url: "https://learn.microsoft.com/viva/pulse/viva-integrations/measure-copilot-impact-in-your-organization"
    kind: "learn"
  - title: "Granular access controls for Viva Pulse"
    url: "https://learn.microsoft.com/viva/pulse/setup-admin-access/granular-access-controls"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Set up the in-app Viva Pulse experience"
    url: "https://learn.microsoft.com/viva/pulse/setup-admin-access/set-up-in-app-pulse-experience"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "MC1446805: (Updated) Microsoft Viva: Targeted audience surveys in the Copilot dashboard"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1446805"
    kind: "message-center"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"]
controls:
  - governs: "Whether leaders can use pre-built Copilot audiences in Viva Pulse"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaPulse -FeatureId <FeatureId> -Name <PolicyName> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Pulse admin role per Learn. The FeatureId for Targeted Audience Surveys was not read; find it with Get-VivaModuleFeature -ModuleId VivaPulse. MC1446805 gives a different path."
  - governs: "Minimum recipient count an audience must meet before a survey is offered"
    scope: "tenant"
    ui:
      surface: "Viva Pulse"
      path: "Manage > Privacy > Minimum number of recipients and responses > Minimum recipients"
      docs: "https://learn.microsoft.com/viva/pulse/setup-admin-access/set-up-in-app-pulse-experience"
    api: null
    note: "Viva Pulse admin role. Value between 3 and 25. Microsoft Learn documents no API for this setting at the time of writing (November 2026)."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-17"
    note: "New briefing: leaders can survey all licensed or active Copilot users from the Copilot Dashboard; on by default, with a Viva feature access management switch."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected licensing to included (Copilot licence gives full Viva Pulse functionality per Learn) and removed the unverified claim that Pulse reports show surveys sent per leader."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 67
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "e1c2d86bba67543317398363016fe1af"
---

## What's changing

Leaders can launch a Viva Pulse survey from the Microsoft Copilot Dashboard to a pre-built audience of Copilot users, without building a recipient list. The roadmap item describes audiences of all licensed or all active Copilot users that update automatically from Viva Insights data and follow existing dashboard filters such as organisation and job function. Reporting is at population level only.

Microsoft Learn documents the behaviour. Viva Insights builds the audience from the filters applied on the **Readiness**, **Adoption** or **Impact** tab, and the survey button shows the audience size. Pre-built groups are privacy-protected: member identities are never shown to the author or in the report, "Record named responses" is off and cannot be enabled, only one pre-built group can be used per survey, and a survey is not offered to audiences below the Pulse minimum recipient count. Learn marks pre-built audience groups as Public Preview.

Microsoft's notice MC1446805 (updated 28 October 2026) says the feature is enabled by default for eligible organisations, that no action is required to enable it, and that Viva Insights exclusion lists continue to be honoured for survey distribution. It gives a Public Preview from mid-August 2026 to late September 2026 and General Availability (Worldwide) from late November 2026 to mid-December 2026, later than its earlier dates. The roadmap record lists the item as In development with a target of November CY2026 and a preview date of September CY2026. The notice sets no act-by date.

## Why it matters

This is a new way for leaders to reach employees, and it arrives switched on. Microsoft's notice names the CxO and CxO-delegate roles in the dashboard as the people who can send to the pre-built Copilot audiences, so your first decision is whether those people should be sending Copilot sentiment surveys to everyone who holds or uses a Copilot licence.

If nobody acts, the notice says the feature is enabled by default for eligible organisations (50 or more Copilot licences, per the notice). Expect survey requests to reach Copilot users from General Availability, targeted from late November 2026, and expect questions from staff and works councils about who can see the data. The audience is built from dashboard data, so the accuracy of your exclusion lists and organisational data decides who is surveyed.

## Risk assessment

**Data exposure**

- Audiences are generated from Copilot Dashboard data and its filters (Microsoft's notice describes this as new processing of organisational data). Learn says individual members are never revealed to the author or in the report, and results stay subject to the organisation's minimum respondent threshold.
- Results are shared back to the Microsoft Copilot Dashboard, where Learn says sentiment is correlated with workplace patterns data. Confirm your works council or privacy team accepts that linkage.

**Security & identity**

- Access follows dashboard roles: the notice says only users with the CxO or CxO-delegate role can create surveys for the pre-built audiences, while Learn says other managers can add recipients manually but cannot use the pre-built groups. A wrongly assigned role gives someone a route to every licensed or active Copilot user.

**Autonomy & actions**

- No agent acts here: a person starts each survey. Microsoft has not documented any cap on how often one leader can survey the same population.

**Change & support**

- Exclusion lists matter: the notice says Viva Insights exclusion lists are honoured for distribution, so an out-of-date list can survey people who should be left out.
- Turning the feature off removes the pre-built options but, per Learn, leaders can still send Copilot surveys by choosing recipients themselves, and surveys already sent are unaffected.

## Cost and licensing

Microsoft documents full Viva Pulse functionality for users with a Microsoft Copilot licence ([Granular access controls for Viva Pulse](https://learn.microsoft.com/viva/pulse/setup-admin-access/granular-access-controls)). Dashboard integration requires Viva Suite, Viva Workplace Analytics and Employee Feedback, Viva Glint or Microsoft Copilot, and Pulse results for the Copilot impact template are shared to the dashboard automatically under the Microsoft Copilot subscription ([Measure Microsoft Copilot impact with Viva Pulse](https://learn.microsoft.com/viva/pulse/viva-integrations/measure-copilot-impact-in-your-organization)). No separate price or meter for targeted audience surveys is documented at the time of writing (November 2026).

Leader access and tenant eligibility still apply: Learn says other managers cannot use the pre-built groups, and Microsoft's notice lists organisations with 50 or more Copilot licences as affected. The Copilot Dashboard page says tenants with at least 50 Copilot licences or at least 50 Viva Insights licences get survey data in the dashboard. The indirect cost is admin and communication time.

## Scope

- **Who sends:** users with the CxO or CxO-delegate role in the Copilot Dashboard, per Microsoft's notice; Learn describes this as leader access, directly or as a delegate.
- **Who receives:** All Copilot Licensed Users or All Copilot Active Users, narrowed by dashboard filters such as organisation and job function. Learn defines active users as employees who performed at least one Copilot activity in the previous 28 days.
- **Eligibility:** organisations with 50 or more Copilot licences using Viva Pulse and the Copilot Dashboard (MC1446805).
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web. Learn says the Viva feature access management controls are not available in GCC High or DoD.
- **Rollout:** Public Preview from mid-August 2026; General Availability (Worldwide) from late November 2026 to mid-December 2026, per the notice. The roadmap status is In development.

## Governance guidance

### Before rollout

- Review who holds the CxO or CxO-delegate role in the Copilot Dashboard, and remove anyone who should not survey the whole Copilot population.
- Check that the Viva Insights exclusion list is current, because the notice says it is honoured for survey distribution.
- Decide whether to keep the feature on; if not, plan a Viva feature access management policy for Targeted Audience Surveys (first controls table row).
- Tell change leaders and the privacy or works council contact what the feature does and that pre-built audiences hide individual identities.

### At rollout

- Confirm the Targeted Audience Surveys setting under Viva Pulse feature access management shows the state you intend.
- Check the Pulse minimum recipient count (second controls table row), since audiences below it are not offered a survey.
- Send a test survey as a delegated leader and confirm the audience size shown matches the dashboard filter.

### After rollout

- Review which leaders have sent surveys and how often; Microsoft documents no cap on frequency.
- Re-check exclusion lists and role assignments after reorganisations, as audiences update from Viva Insights data.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether leaders can use pre-built Copilot audiences in Viva Pulse</strong><br><small>Tenant</small><br><small class="controls__note">Pulse admin role per Learn. The FeatureId for Targeted Audience Surveys was not read; find it with Get-VivaModuleFeature -ModuleId VivaPulse. MC1446805 gives a different path.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaPulse -FeatureId &lt;FeatureId&gt; -Name &lt;PolicyName&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Minimum recipient count an audience must meet before a survey is offered</strong><br><small>Tenant</small><br><small class="controls__note">Viva Pulse admin role. Value between 3 and 25. Microsoft Learn documents no API for this setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Viva Pulse</strong><br>Manage › Privacy › Minimum number of recipients and responses › Minimum recipients <a href="https://learn.microsoft.com/viva/pulse/setup-admin-access/set-up-in-app-pulse-experience" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says targeted audience surveys are controlled by your Viva Pulse admin through Viva feature access management. Learn's feature access management table does not list this feature, and Microsoft's notice gives a different admin centre path (Setup > Microsoft Viva > Feature access management > Viva Pulse), so confirm the exact path and the FeatureId in your tenant; the PowerShell row uses Get-VivaModuleFeature to find it.

Turning the setting off hides the pre-built audience options but, per Learn, does not stop leaders sending Copilot surveys to recipients they choose. Learn gives two different locations for the minimum recipient count: **Manage** > **Privacy** on the in-app setup page and **Admin settings** > **Confidentiality** on the Copilot impact page. The Viva Insights exclusion list is managed by the AI Administrator and is not a row here because no feature-specific path was read; see the manage settings page for the Copilot Dashboard.

## Open questions

- Will Microsoft publish a separate price or meter for pre-built audience surveys, given none is documented at the time of writing (November 2026)? Watch the Learn page on measuring Copilot impact with Viva Pulse and MC1446805.
- What is the FeatureId for Targeted Audience Surveys in Get-VivaModuleFeature -ModuleId VivaPulse, and which admin centre path is authoritative (the notice or the Learn page)?
- Will General Availability keep the late November 2026 date, given the October update moved it from late October, and when does Learn drop the Public Preview note?
- Does a tenant-level policy also affect leaders who send surveys with manually chosen recipients? Learn says the standard Start new Pulse survey button still appears.

<!-- rationale
risk: Medium. Microsoft says the feature is on by default for eligible organisations and builds survey audiences from Copilot Dashboard data, but individual identities are not exposed and a Viva feature access management control can switch it off.
cost: Low. The only cost the sources show is admin and communication time; Microsoft documents no separate price or meter for targeted audience surveys at the time of writing (November 2026).
impact: Medium. Leaders with the CxO or CxO-delegate role in the dashboard gain the option; employees in the Copilot licensed or active populations may start receiving Pulse surveys they did not receive before.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Microsoft documents full Viva Pulse functionality for users with a Microsoft Copilot licence. | Found: Users with a Microsoft Copilot license have access to the full functionality of Viva Pulse to gather real-time feedback from their teams. | Fix: Keep the cited statement, then add: 'Microsoft documentation differs: the general Viva Pulse licensing requirements page lists Viva Suite, Viva Workplace Analytics and Employee Feedback, Viva Glint and the Viva Pulse Admin-led Trial for the full premium experience, but does not list Microsoft Copilot. The in-app setup page excludes customization, notification, Viva resources and delegation administration for access through a Microsoft Copilot subscription.' Cite https://learn.microsoft.com/viva/pulse/get-started/licensing-requirements and https://learn.microsoft.com/viva/pulse/setup-admin-access/set-up-in-app-pulse-experience. | Source: https://learn.microsoft.com/viva/pulse/setup-admin-access/granular-access-controls
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The policy route is Microsoft 365 admin center > Viva > Settings > Manage feature access > Create a policy. | Found: select Viva from the settings menu. Select the Settings tab and select Manage feature access. Select Create a policy. Name the policy and select the app and feature for which you'd like to set the policy. Select the Access setting option and choose On or Off | Fix: The printed route stops early on the correct policy page. Extend it to 'Viva > Settings > Manage feature access > Create a policy > Viva Pulse > Targeted Audience Surveys > Access setting > Off', and specify in the note to select Everyone under Apply access settings to. Retain the existing caveat about the different route in MC1446805. The policy-creation steps are at https://learn.microsoft.com/viva/control-access-admin-center and the feature name is documented at https://learn.microsoft.com/viva/pulse/setup-admin-access/granular-access-controls. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[0].api; Governance controls table / command: Add-VivaModuleFeaturePolicy -ModuleId VivaPulse -FeatureId <FeatureId> -Name <PolicyName> -IsFeatureEnabled $false -Everyone creates a tenant-wide disabling policy. | Found: You can assign one additional policy per feature to the entire tenant by using the -Everyone parameter, which will function as a global default state for that feature across your organization. | Fix: Keep the call and FeatureId discovery note. Add to the note: 'The Everyone policy sets the tenant default; policies assigned to individual users or groups take precedence.' This qualification is documented at https://learn.microsoft.com/viva/manage-access-policies and https://learn.microsoft.com/viva/control-access-admin-center. | Source: https://learn.microsoft.com/viva/manage-access-policies
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls table / consistency: The governance checklist asks readers to review and remove dashboard role assignments, but the controls table does not cover role-assignment management. | Found: Review who holds the CxO or CxO-delegate role in the Copilot Dashboard, and remove anyone who should not survey the whole Copilot population. | Table rows: pre-built Copilot audience access; minimum recipient count. | Fix: Append to the role-review checklist item: 'Role-assignment management is not covered by the controls table.' Do not add a control row.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls table / consistency: The governance checklist asks readers to check exclusion lists, but the controls table does not cover exclusion-list management. | Found: Check that the Viva Insights exclusion list is current ... Re-check exclusion lists and role assignments after reorganisations ... | The Viva Insights exclusion list ... is not a row here | Fix: Append to the exclusion-list checklist item: 'Exclusion-list management is not covered by the controls table.' Do not add a control row.
-->
