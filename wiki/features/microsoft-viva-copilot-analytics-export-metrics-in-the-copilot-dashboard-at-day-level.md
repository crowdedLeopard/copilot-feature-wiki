---
title: "Microsoft Copilot Dashboard: export day-level Copilot metrics"
slug: "microsoft-viva-copilot-analytics-export-metrics-in-the-copilot-dashboard-at-day-level"
roadmapId: 547749
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Company-level Copilot Dashboard users can export 28 days of de-identified Copilot usage by user and day. Learn says the export is on by default; admins can switch it off with Viva feature access policies. GA is targeted for November 2026."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The Learn page says the Copilot Dashboard is available to any customer with a Microsoft 365 or Office 365 business or enterprise subscription. Export needs at least 50 Copilot or Viva Insights licences assigned (MC1222978 says 50 Microsoft 365 Copilot licences). No separate export price is named."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["viva-insights","viva-feature-access-management","m365-copilot","data-export","usage-reports","analytics","adoption","privacy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 547749"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=547749"
    kind: "roadmap"
  - title: "MC1222978: (Updated) Microsoft 365 Copilot: User-day export for Copilot dashboard metrics in public preview"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1222978"
    kind: "message-center"
  - title: "Export Copilot metrics from the Microsoft Copilot Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/export-copilot-metrics"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
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
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
videos: []
related: ["m365-copilot-export-copilot-metrics-in-the-copilot-dashboard","microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"]
controls:
  - governs: "Whether company-level dashboard users can export Copilot metrics, week and day level (tenant, group or user policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <FeatureId from Get-VivaModuleFeature> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "At 'select the app and feature', choose Viva Insights and Copilot Metrics Export. Learn calls the setting User-level export and insights. Global admin per the feature table. Takes up to 24 hours."
  - governs: "Whether the Viva Insights web app, which hosts the Copilot Dashboard, is on"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Existing, broader control, not specific to the export: off disables the whole app, including the dashboard. Select the Viva Insights web app feature. The settings page lists the AI Administrator; Global Administrators can also manage it."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-08T22:57:21"
changes:
  - date: "2026-11-21"
    note: "First briefing: the day-level export is on by default for company-level dashboard users and shares the single Viva feature access control with the week-level export."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 84
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "0a7c2cf4a8ad7be94a502a3b42fa7bb5"
---

## What's changing

Microsoft is adding a day-level export to the Microsoft Copilot Dashboard in the Viva Insights web app. In addition to the existing week-level export, dashboard users with company-level access can select **Export data**, then **Export by day**, to download de-identified, row-level Copilot usage metrics aggregated by user and day for the last 28 days. The roadmap item describes it as letting users 'export fresher row-level Copilot metrics from the Copilot Dashboard for reporting and deeper analysis at day level'.

Message Center post MC1222978 says the export usually reflects Copilot activity up to 3 days before the export date, covers apps such as Word, Excel and Teams, and adds two attributes: Organization and Job function. The Learn export page says the same three-day freshness for the day-level option and that exports cannot be customised. It lists five meeting-recap metrics as week-level only, so they are absent from the day-level file. MC1222978 also says exports run within 2 days of Copilot licence assignments or removals may not reflect those changes, and that files already exported are not updated afterwards.

The Learn export page is marked as a public preview and documents both options. It says personal identifiers are replaced with anonymised IDs 'unless your administrator has enabled identifiable export for you'; that option is covered in [Microsoft Viva: identifiable export of Copilot metrics from the Copilot Dashboard](/features/microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard/). The week-level export has its own briefing: [Microsoft Copilot Dashboard: export de-identified user-level Copilot metrics](/features/m365-copilot-export-copilot-metrics-in-the-copilot-dashboard/).

The roadmap record shows status In development, with a preview target of May CY2026 and a general availability target of November CY2026, for Worldwide (Standard Multi-Tenant) on the web. MC1222978, updated on 2026-09-08 with an end date of 2027-01-11, gives public preview from mid-May to the end of May 2026 (previously early to late April) and general availability from late November to early December 2026 (previously early to end of September). It sets no act-by date. The roadmap status and the post's preview timing differ, so check the status before relying on either.

## Why it matters

A dashboard normally shows aggregates; this export puts one row per user per day into a file that a leader, a delegate or an analyst saves from the browser. The Learn page says the export is on by default for eligible tenants and users, so the people who can download it are decided by who already holds company-level dashboard access.

If nobody acts, the Learn page's default applies and eligible users get the day-level option alongside the week-level one, because one control governs both. A privacy or works-council review is easier before the first download than after, and the short window before the November CY2026 target is the time to decide who should hold this access and to tell them what the file contains.

## Risk assessment

**Data exposure**
- Each day-level export holds 28 days of aggregated metrics per user, with identifiers removed (Learn). The Learn page also says the preview 'allows personal data processing', so treat the files as personal data until your privacy team decides otherwise.
- The Organization attribute comes from Entra ID or an organisational data file; Job function comes from the uploaded file and is blank if the file lacks it. Rows can therefore be grouped by these attributes outside the dashboard.
- The download starts in the user's browser, so where the file is stored and shared is governed by your own file-handling rules. The Learn page says exports cannot be customised, so the metrics cannot be trimmed per recipient.

**Security & identity**
- Eligibility follows dashboard access: senior leaders identified in Entra ID, admin-assigned company-level users, delegates, Viva Insights Analysts with global access and Microsoft 365 Global Administrators. The Learn page says delegates inherit export access unless admin policy disables it.
- Group managers with team-level views cannot export, so the audience stays at company-level roles.

**Autonomy & actions**
- No autonomous behaviour is described: a person selects **Export data** then **Export by day**, and the download starts.

**Change & support**
- Switching the export off also affects more than the download: the Learn page says the setting, now called **User-level export and insights**, also governs user-level insights on specific dashboard cards and in Interactive insights. Policy changes can take up to 24 hours to appear.
- Expect support questions about fresh files: exports run within two days of a licence change do not reflect it, and day-level files exclude five meeting-recap metrics that the week-level file has.

## Cost and licensing

**Licence.** The Learn Copilot Dashboard page says the dashboard is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise and an active Exchange Online account, and that users do not need a paid Viva Insights licence or a Microsoft Copilot licence. The Learn export page lists a prerequisite that the tenant has at least 50 Copilot or Viva Insights licences assigned; MC1222978 says at least 50 Microsoft 365 Copilot licences. The two Microsoft sources differ on whether Viva Insights licences count.

**Meter and cap.** The Learn export page names no separate price, meter, credit rate or spending control for the export.

**Indirect cost.** Admin time to review dashboard access and tell eligible users about the new option, plus the time of the people who analyse the files.

## Scope

**Who gets it.** Dashboard users with full company-level data access: senior leaders identified in Entra ID, admin-assigned company-level users, delegates with company-level access, global analysts and admins (MC1222978). Group managers whose access is restricted to their own teams do not have the user-day export.

**Where.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform, with release phases General Availability and Preview. MC1222978 says the feature applies to the Viva Insights web app.

**Prerequisites.** At least 50 assigned licences, as above. Access to the new export uses the same Viva Feature Access Management controls as the week-level export; MC1222978 says no new access controls are introduced.

## Governance guidance

### Before rollout
- List who holds company-level Copilot Dashboard access (leaders, admin-assigned users, delegates, analysts, Global Administrators) and decide whether each group should download row-level files; MC1222978 asks administrators to review VFAM settings for these users.
- Ask your privacy or compliance team whether 28-day, user-by-day usage files with Organization and Job function fit your commitments, given the Learn page's note that the preview allows personal data processing.
- Run Get-VivaModuleFeature -ModuleId VivaInsights as a Global Administrator to read the FeatureId for the export before you script a policy (first row of the controls table).
- Tell eligible users that an **Export by day** option is coming and what the file contains.

### At rollout
- Create a Viva feature access policy for the export set to Off for everyone, or for the groups that should not export, if you want to hold the feature back; the single control covers both the week-level and day-level options, and changes can take up to 24 hours.
- Keep the Viva Insights web app control for decisions about the whole dashboard only: turning it off disables the entire app, not just the export.

### After rollout
- Check the VFAM change logs in Microsoft Purview to see who created, changed or deleted feature access policies.
- Tell analysts that licence assignments or removals made within two days of an export are not reflected in it, and that earlier files are not updated.
- Re-read the Learn export page when general availability is announced, because it is labelled preview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether company-level dashboard users can export Copilot metrics, week and day level (tenant, group or user policy)</strong><br><small>Tenant</small><br><small class="controls__note">At 'select the app and feature', choose Viva Insights and Copilot Metrics Export. Learn calls the setting User-level export and insights. Global admin per the feature table. Takes up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;FeatureId from Get-VivaModuleFeature&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the Copilot Dashboard, is on</strong><br><small>Tenant</small><br><small class="controls__note">Existing, broader control, not specific to the export: off disables the whole app, including the dashboard. Select the Viva Insights web app feature. The settings page lists the AI Administrator; Global Administrators can also manage it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Learn page says the VFAM control is a single unified control for both the week-level and day-level export options, and MC1222978 says existing VFAM settings apply to both after the day-level export is released. There is no separate day-level switch to set.

The feature table lists Global admin as who manages Copilot Metrics Export and no user opt-out. The Add-VivaModuleFeaturePolicy reference says a Global Administrator or the roles assigned at the feature level can run it, and that a policy assigned to a user or group takes priority over the tenant-wide policy.

The analyst role keeps user-level access to data through advanced analysis, and the Learn page says the User-level export and insights setting is always on for that role and cannot be changed. Who holds company-level access is decided separately from this control.

## Open questions

- What FeatureId does Get-VivaModuleFeature return for Copilot Metrics Export, and does the admin centre label it Copilot Metrics Export or User-level export and insights? Watch the Viva feature access management page.
- Does the 50-licence threshold count Viva Insights licences (Learn export page) or only Microsoft 365 Copilot licences (MC1222978)? Watch the Learn export page and Message center.
- When general availability arrives in the late November to early December 2026 window, will the roadmap status move from In development, and will the Learn export page drop its preview label? Watch the roadmap item and MC1222978.
- Does the unified exclusion list, which hides users from dashboard aggregates, also remove those users' rows from the day-level export? Watch the Learn settings page for the Copilot Dashboard.

<!-- rationale
risk: Medium. Row-level Copilot usage by user and day can be downloaded by company-level dashboard users, and the Learn page says the export is on by default; one Viva feature access policy can switch it off.
cost: Low. The only costs the sources show are admin time and a tenant prerequisite of at least 50 licences; the Learn export page names no separate licence, price or meter for the export.
impact: Medium. Leaders, delegates and analysts with company-level dashboard access see a new Export by day option; group managers with team-level views do not get it.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The export policy path is Viva > Settings > Manage feature access > Create a policy > Access setting, with the app and feature choices supplied in the row note. | Found: Select the Settings tab and select Manage feature access. ... Select Create a policy. ... Name the policy and select the app and feature for which you'd like to set the policy. ... Select the Access setting option | Fix: Make the path self-contained by including the target app and feature already given in the note: 'Viva > Settings > Manage feature access > Create a policy > Viva Insights > Copilot Metrics Export > Access setting'. The printed steps are in the documented order; the note currently supplies the omitted target selection. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[1].ui / admin-path: The web-app policy path is Viva > Settings > Manage feature access > Create a policy > Access setting, with the web-app target supplied in the note. | Found: Select the Settings tab and select Manage feature access. ... Select Create a policy. ... Name the policy and select the app and feature for which you'd like to set the policy. ... Select the Access setting option | Fix: Make the path self-contained by including the target app and feature already given in the note: 'Viva > Settings > Manage feature access > Create a policy > Viva Insights > Viva Insights web app > Access setting'. The printed steps are in the documented order; the note currently supplies the omitted target selection. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to take stock of company-level dashboard access, but the table has no control row for assigning company-level access. | Found: List who holds company-level Copilot Dashboard access ... Table rows: Whether company-level dashboard users can export Copilot metrics; Whether the Viva Insights web app ... is on. | Fix: Narrow the first Before rollout bullet to the control already in the table: 'Review existing VFAM export policies for company-level dashboard users and decide which users or groups should be allowed to export; MC1222978 asks administrators to review these settings.' Do not add a control row.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells administrators to check VFAM audit logs in Microsoft Purview, but the table contains no audit-log row. | Found: Check the VFAM change logs in Microsoft Purview to see who created, changed or deleted feature access policies. ... Table rows cover export access and the Viva Insights web app only. | Fix: Remove the first After rollout checklist bullet about checking VFAM change logs in Microsoft Purview; there is no corresponding table row. Do not add a control row.
-->
