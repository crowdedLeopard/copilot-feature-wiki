---
title: "Microsoft Viva: Viva Insights and Copilot Analytics in GCC High"
slug: "microsoft-viva-viva-insights-and-copilot-analytics-in-gcc-high"
roadmapId: 570428
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Microsoft plans Viva Insights and Copilot Analytics for GCC High tenants. They report Copilot adoption and collaboration behaviour; Learn lists a G5 plus Copilot licence. No admin action is required yet, but plan the access and privacy settings."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC High"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn's environments page says Copilot Analytics in GCC-H needs a Microsoft 365 G5 licence plus a Microsoft 365 Copilot licence. Microsoft Copilot is an add-on for eligible US Government plans. A GCC High price is not published."
audiences: ["m365-admin","compliance","finops","change-adoption"]
tags: ["viva-insights","analytics","adoption","m365-copilot","privacy","viva-feature-access-management","licensing","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 570428"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570428"
    kind: "roadmap"
  - title: "Supported Microsoft 365 environments for Viva Insights features"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/supported-environments"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Environment requirements for Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Copilot Analytics introduction"
    url: "https://learn.microsoft.com/viva/insights/copilot-analytics-introduction"
    kind: "learn"
  - title: "Introduction to Microsoft Copilot in Microsoft Viva"
    url: "https://learn.microsoft.com/viva/copilot/viva-copilot-overview"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
videos: []
related: ["microsoft-viva-insights-and-copilot-analytics-in-gcc-and-gcc-high","viva-feature-access-management","m365-copilot-m365-admin-center-new-m365-copilot-usage-report-for-gcc-high-and-dod","microsoft-teams-advanced-collaboration-analytics-for-gcc","usage-reports"]
controls:
  - governs: "Which users and groups can open the Viva Insights web app, which hosts the Copilot Dashboard"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator. Turning the control off disables the whole app. The Learn page does not say whether it applies in GCC High."
  - governs: "Minimum group size for group-level Copilot Dashboard metrics"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "AI Administrator or Viva Insights Administrator. Default is 10 and the value must be at least five. Tenants with a Viva Insights licence use the Viva Insights privacy settings instead."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: GCC-H feature support, the G5 plus Copilot licence requirement, and the access and minimum group size controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 67
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "0fc9fba060d9a0c1fed690dfbdc5fbfd"
---

## What's changing

The roadmap item states that Microsoft Viva Insights and Copilot Analytics are coming to Microsoft 365 Government Community Cloud High (GCC High). It describes privacy-protected, role-based analytics on Microsoft 365 Copilot adoption, usage and impact, and behavioural insights on how employees collaborate. The record lists the release phase as General Availability, the platform as Web, the status as In development and the target as September CY2026. That month has passed at the time of writing (23 November 2026) and the status is still In development.

Microsoft Learn already has a feature table for GCC High, which it abbreviates GCC-H. It lists the Copilot Dashboard Adoption, Impact and Learning pages as available, with partial support for some adoption metrics and Copilot Chat metrics. It lists the Agent Dashboard, the Consumption Dashboard and metric exports as not supported in GCC-H. The advanced analysis features (Create analysis, Reports page, Data hub) are listed as supported, and Publish reports as partial. The page says it reflects availability known at the time of publication.

Two Microsoft pages disagree. The Learn overview of Copilot in Viva says the Microsoft Copilot Dashboard is currently not available for Microsoft's U.S. Government clouds, while the environments table lists its Adoption and Impact pages as available in GCC-H. This briefing reports both; treat the roadmap item, which is still In development, as the later statement of intent and check your tenant before telling leaders the dashboards are live.

## Why it matters

For a GCC High service owner this adds a way to measure Copilot adoption and to analyse collaboration behaviour, which means employee-level activity data starts feeding aggregated reports. Learn says all employees with a Microsoft Copilot licence are automatically assigned a Viva Insights service plan and become part of the measured population, so licensing a user for Copilot also decides who is measured.

Microsoft has not stated what happens on arrival in GCC High, so no source says whether the Viva Insights web app is switched on for your tenant when the feature lands. Settle the privacy settings and who may open the web app before the dashboards appear, and confirm the licence position, because Learn gives a G5 requirement that is due to change in mid-November to early December 2026.

## Risk assessment

**Data exposure**
- Viva Insights reports on collaboration behaviour, and Copilot-licensed employees are in the measured population automatically. Group-level metrics appear only for groups at or above the minimum group size, which is 10 employees by default and can be set no lower than five. Use the minimum group size control to decide how small a group can be before it is reported.
- Without an exclusion list, all employees with a Copilot licence, a Viva Insights licence or a manual cohort upload are included in dashboard insights. The exclusion list must have its policy turned on to take effect.

**Security & identity**
- Access to the Viva Insights web app, which hosts the Copilot Dashboard, is set per user or group through Entra ID groups and changes take effect in 24 hours. The AI Administrator does not get automatic access to the web app and must add themselves.
- Organisational data uploads that feed group filters are made by the Viva Insights Administrator or a Microsoft 365 Global Administrator, so those roles can shape what leaders see.

**Autonomy & actions**
- The roadmap description covers reporting and insights only. It describes no agent or automated action.

**Change & support**
- GCC-H support is partial in Learn's table, and the roadmap target month has passed with the item still In development. Expect questions from leaders about missing pages such as the Agent Dashboard.
- Learn's G5 requirement changes from mid-November to early December 2026, so licence advice given now can date quickly.

## Cost and licensing

Learn's environments page says that to access Copilot Analytics features in GCC-H, a tenant needs a Microsoft 365 G5 licence in addition to a Microsoft 365 Copilot licence. It adds that after mid-November through early December 2026 the tenant will not need a G5 licence and will need only standalone Copilot functionality. Microsoft's Copilot licence options page says Microsoft Copilot is available as an add-on for eligible commercial, US Government and education subscription plans.

The Viva Insights environment requirements page says at least 50 assigned Viva Insights licences are required to access advanced analysis and the Microsoft Copilot Dashboard, and that Microsoft Copilot plans include a Viva Insights service plan for each employee with a Copilot licence. The Copilot Dashboard page, in contrast, says a minimum of 50 assigned Viva Insights licences, or one assigned Copilot licence, is required for data processing to start. Check both against your licence counts.

The environment requirements page gives no price and says to contact your Microsoft account team for pricing. No meter or Copilot Credit charge for these dashboards appears on the pages read. Indirect costs are admin time for access and privacy settings and the Global Administrator or Viva Insights Administrator work of uploading organisational data.

## Scope

The roadmap record lists the cloud as GCC High and the platform as Web. The Viva Insights environment requirements page says Viva Insights requires the applicable Viva Insights licensing and a Microsoft 365 or Office 365 tenant with Exchange Online Plan 1 or Plan 2.

What is available differs by feature: see the GCC-H column of Learn's supported environments table. The AI Administrator manages web app access and the Agent Dashboard control; the AI Administrator and Viva Insights Administrator set the minimum group size; Global Administrators can manage all of these settings. Microsoft has not stated a rollout mechanism for GCC High; the roadmap gives only the target month.

## Governance guidance

### Before rollout
- Check your tenant's licences against Learn's GCC-H requirement (Microsoft 365 G5 plus a Microsoft 365 Copilot licence) and the 50-licence thresholds, and ask your Microsoft account team for pricing. Finance owns this.
- Decide who should open the Viva Insights web app and plan the user and group policy (first controls row).
- Agree a minimum group size above the default of 10 if your organisation has small teams, and decide who needs an exclusion-list entry (second controls row and notes).

### At rollout
- Confirm in the Microsoft 365 admin center whether the Viva Insights web app is available to your users, and check the supported environments table for the features you intend to promise.
- Set the web app policy for the tenant, groups or users before announcing the dashboards.
- Tell leaders which pages Learn lists as not supported in GCC-H, such as the Agent Dashboard.

### After rollout
- Review who holds access to the web app and who holds the Viva Insights Administrator role.
- Re-read the supported environments page and Message center after each change, because Microsoft says recently released capabilities might not yet be reflected there.
- Reconfirm licences once Microsoft's G5 requirement lapses in mid-November to early December 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can open the Viva Insights web app, which hosts the Copilot Dashboard</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. Turning the control off disables the whole app. The Learn page does not say whether it applies in GCC High.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Minimum group size for group-level Copilot Dashboard metrics</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Viva Insights Administrator. Default is 10 and the value must be at least five. Tenants with a Viva Insights licence use the Viva Insights privacy settings instead.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Microsoft Viva Insights › Copilot Dashboard in Microsoft 365 › Manage minimum group size <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Turning the Viva Insights web app off disables the entire app, including the Microsoft Copilot Dashboard, Copilot Analytics reports and advanced analysis. Learn says the earlier Copilot Dashboard control and PowerShell access control are no longer available, so any policy set on them now applies to the whole web app.

The settings page also describes a unified exclusion list managed with VFAM or PowerShell, which hides chosen users from aggregates; its path is not given there, so it has no row here. Whether these controls work the same in GCC High is not stated on those pages.

## Open questions

- Is the Viva Insights web app on or off for GCC High tenants when the capability arrives? Watch Message center and the Viva Insights settings page.
- Which Copilot Dashboard pages will move from Partial or No to Yes in GCC-H, and when? Watch the supported environments page.
- Will the Learn pages that say the Copilot Dashboard is unavailable in U.S. Government clouds be updated to match the environments table?
- Do the web app policy and the Viva Feature Access Management cmdlets behave identically in GCC High as in other clouds?
- What will Copilot Analytics cost a GCC High tenant once the G5 requirement lapses? Contact your account team.

<!-- rationale
risk: Medium. The dashboards analyse employee collaboration and Copilot usage data, but group-size, exclusion-list and access controls exist; Microsoft has not stated how the features arrive in GCC High.
cost: Medium. Learn says GCC High tenants need a Microsoft 365 G5 licence plus a Microsoft 365 Copilot licence for Copilot Analytics, with the G5 requirement due to end mid-November to early December 2026; no price is published on the pages read.
impact: Medium. Leaders, analysts and admins use the dashboards, while Copilot-licensed employees become part of the measured population; most other users do not see a change.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Governance controls; Governance guidance; Open questions; rationale: risk / applicability: Whether VFAM web app and exclusion-list access policies work in GCC High is not stated. | Found: The access controls described in this document aren't available in GCC-High or DoD. | Fix: Replace the first row's cloud caveat and the final Governance controls caveat with: 'Microsoft documents VFAM access controls as unavailable in GCC-High and DoD; these are general-product controls, not confirmed GCC High controls.' Cite https://learn.microsoft.com/viva/feature-access-management. Replace 'Set the web app policy for the tenant, groups or users before announcing the dashboards' with 'Confirm with Microsoft which web app access controls are available in GCC High before announcing the dashboards'. Replace the exclusion-list instruction with 'Confirm with Microsoft how users can be excluded in GCC High'. Replace the VFAM open question with 'Which supported controls replace VFAM access policies in GCC High?'. In the risk rationale replace 'but group-size, exclusion-list and access controls exist' with 'but VFAM access and exclusion-list policies are documented as unavailable in GCC High'. | Source: https://learn.microsoft.com/viva/feature-access-management
- [unsupported, blocker] What's changing: final paragraph / date: The roadmap item is a later statement of intent than the conflicting Microsoft Learn pages. | Found: Searched: 570428 September 2026 Viva Insights supported environments GCC High publication updated. Read roadmap, supported-environments and viva-copilot-overview; no passage establishes that the September 2026 roadmap update supersedes these Learn statements. | Fix: Replace 'treat the roadmap item, which is still In development, as the later statement of intent and check your tenant before telling leaders the dashboards are live' with 'the roadmap item is still In development; check your tenant before telling leaders the dashboards are live'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; Why it matters; Open questions; rationale: risk / absence: Microsoft has not stated the default on arrival of this GCC High roadmap capability. | Found: Searched: Viva Insights GCC High web app on by default rollout access feature management; 570428 Viva Insights Copilot Analytics GCC High rollout automatically default. Read roadmap, supported-environments, manage-settings-copilot-dashboard and copilot-analytics-introduction. | Fix: Keep defaultState unknown for the GCC High rollout, but replace the Why it matters default sentence with: 'Learn says the Viva Insights web app is on by default; it does not specify the arrival mechanics of this GCC High roadmap item.' Cite https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard.
- [supported, minor] Cost and licensing; Governance guidance: Before rollout / licensing: The environment requirements page says at least 50 assigned Viva Insights licences are required for advanced analysis and the Copilot Dashboard. | Found: At least 50 assigned Viva Insights licenses are required to access advanced analysis and the Microsoft Copilot Dashboard. | Fix: The page already reports the conflicting one-Copilot threshold. Also append: 'The Microsoft Viva service description says the Microsoft Copilot Dashboard and Advanced Copilot Reporting comes with Microsoft 365 Copilot or 10 Insights licences.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-service-description#feature-availability. Replace 'and the 50-licence thresholds' in the checklist with 'and the conflicting published licence thresholds'. | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements
- [supported, minor] controls[0].note; Scope / role: The AI Administrator manages Viva Insights web app access. | Found: Manage access to the Viva Insights web app for individual users and groups ... Applies to: AI Administrator ... Enable or disable the Viva Insights web app ... Applies to: AI Administrator | Fix: Append to the first row's note: 'The settings page names AI Administrator, while the VFAM feature table names Global admin for the Viva Insights web app control.' Cite https://learn.microsoft.com/viva/feature-access-management#viva-features-management. Keep the separate GCC High restriction correction. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist directs readers to decide exclusion-list entries, but the table has no exclusion-list row. | Found: decide who needs an exclusion-list entry (second controls row and notes) ... its path is not given there, so it has no row here | Fix: Remove 'and decide who needs an exclusion-list entry (second controls row and notes)' from the minimum-group-size checklist bullet. The second row governs group size, not exclusions; retain the separate request to confirm GCC High exclusion controls from the applicability correction.
-->
