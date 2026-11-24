---
title: "Microsoft Copilot Dashboard: export de-identified user-level Copilot metrics"
slug: "m365-copilot-export-copilot-metrics-in-the-copilot-dashboard"
roadmapId: 500872
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Dashboard users with company-level access can export weekly, user-level Copilot usage as de-identified files. It is on by default; admins can switch it off with Viva feature access policies. GA is targeted for November 2026."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The Learn export page lists a tenant prerequisite of at least 50 Copilot or Viva Insights licenses assigned; MC1173208 says at least 50 Microsoft 365 Copilot licenses. No separate export licence or price is published."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["viva-insights","viva-feature-access-management","m365-copilot","data-export","usage-reports","analytics","adoption","privacy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap: Export Copilot metrics in the Copilot Dashboard (500872)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500872"
    kind: "roadmap"
  - title: "MC1173208: (Updated) Microsoft Copilot Analytics: Data export public preview for Copilot metrics in the Copilot dashboard"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1173208"
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
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-agent-metrics-for-custom-reporting-in-insights-analyst-workbench"]
controls:
  - governs: "Whether company-level dashboard users can export Copilot metrics (tenant, group or user policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <FeatureId from Get-VivaModuleFeature> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "Choose Viva Insights and Copilot Metrics Export at 'select the app and feature'. Learn calls the setting User-level export and insights. Global admin per the feature table. Takes up to 24 hours."
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
    note: "Existing, broader control, not specific to the export: off disables the whole app, including the dashboard. Select the Viva Insights web app feature. The settings page lists the AI Administrator."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-21"
    note: "First briefing: the export is on by default for company-level dashboard users, and Viva feature access policies can switch it off."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 86 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: removed an unsupported sentence about whether disabling dashboard auto-enablement affects access assigned by admins or delegates."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 90 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 80
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "62c4779c4dccf12abd06ce3e24273496"
---

## What's changing

Microsoft is adding an **Export data** option to the Microsoft Copilot Dashboard in the Viva Insights web app. Dashboard users with company-level access can download de-identified, row-level Copilot usage metrics. The roadmap item describes it as letting users 'export row-level Copilot metrics from the Copilot Dashboard for reporting and deeper analysis'.

Message Center post MC1173208 says the dataset is weekly, user-level metrics from the past six months, covering usage across apps such as Word, Excel and Teams, with two attributes: Organization and Job function. Each user is represented by a hashed ID. Microsoft's post says the feature is enabled by default for eligible users and that group managers with data access limited to their own teams do not get it.

The Learn page for the feature is marked as a public preview and describes more than the post: a week-level export (six months) and a day-level export (28 days), with identifiers replaced by anonymised IDs 'unless your administrator has enabled identifiable export for you'. That identifiable option is covered in [Microsoft Viva: identifiable export of Copilot metrics from the Copilot Dashboard](/features/microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard/).

The roadmap record shows status In development, with a preview target of October CY2026 and a general availability target of November CY2026, for Worldwide (Standard Multi-Tenant) on the web. MC1173208 (end date 2026-11-30) gives public preview from early to late October 2026 and general availability from mid-November to the end of November 2026. It sets no act-by date.

## Why it matters

The dashboard normally shows aggregates; this puts per-user rows into a file that a leader, a delegate or an analyst saves from the browser. Because MC1173208 says the export is on by default for eligible users, the people who can download it are decided by who already holds company-level dashboard access.

Administrators therefore have a short window to decide whether that audience, and that level of detail, is right for their organisation, and to tell eligible users what the file contains. If nobody acts, MC1173208 says eligible users get the export. A privacy or works-council review is easier before the first download than after.

## Risk assessment

**Data exposure**
- Each row is one user in one week, with a hashed ID plus Organization and Job function (MC1173208). The Learn page says the preview 'allows personal data processing' and that the export includes Copilot Chat activity from users without Copilot licenses, so treat the files as personal data until your privacy team decides otherwise.
- The download starts 'automatically in your browser', so where the file is stored and shared is governed by your own file-handling rules, not by the dashboard. The Learn page says you can't customise the export, so the set of metrics cannot be trimmed per recipient.

**Security & identity**
- Eligibility follows dashboard access: senior leaders identified from Entra ID, users assigned global access by admins, delegates, Viva Insights Analysts with global access and Microsoft 365 Global Administrators. Delegates inherit export access 'unless your organization's admin policy disables it', so a leader's chief of staff can export.
- Group managers with team-level views cannot export, which keeps the audience to company-level roles.

**Autonomy & actions**
- No autonomous behaviour is described: a person selects **Export data**, then **Export by week** or **Export by day**, and the browser download starts.

**Change & support**
- MC1173208 names the control Copilot Metrics Export, but the Learn page calls the setting **User-level export and insights**, and says it also governs user-level insights on specific cards and in Interactive insights. Switching it off therefore removes more than the download. Policy changes can take up to 24 hours to appear.
- Expect questions about mismatched numbers: the export includes only completed weeks, while the dashboard includes partial weeks.

## Cost and licensing

**Licence.** The Learn export page lists a tenant prerequisite: at least 50 Copilot or Viva Insights licenses assigned. MC1173208 says the feature requires at least 50 Microsoft 365 Copilot licenses, so the two Microsoft sources differ on whether Viva Insights licences count. The Copilot Dashboard itself is described as available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise and an active Exchange Online account. The export page names no separate price, meter or add-on for the export.

**Meter and cap.** The export page documents no meter, credit rate or spending control for the export.

**Indirect cost.** Admin time to review dashboard access and write the communication MC1173208 recommends, and the time of people who analyse the files.

## Scope

**Who gets it.** Users with company-level Copilot Dashboard access (senior leaders identified in Entra ID, admin-assigned company-level users, delegates, analysts and Global Administrators). Group managers with data access limited to their own teams do not. Microsoft's post says it applies to the Viva Insights web app.

**Where.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform. The record's release phases are General Availability and Preview.

**Prerequisites.** At least 50 assigned licences, as above. Data processing in Copilot Analytics takes up to seven days after licence assignment, unless you export day-level metrics. The Organization attribute comes from Entra ID or an organisational data file; the Job function column is blank in the export if the uploaded file lacks that field.

## Governance guidance

### Before rollout
- List who holds company-level Copilot Dashboard access and decide whether each group should be able to download user-level rows; MC1173208 asks administrators to review the assignment of these users.
- Ask your privacy or compliance team whether weekly user-level usage files with Organization and Job function fit your commitments, given the Learn page's note on personal data processing in the preview.
- Run Get-VivaModuleFeature -ModuleId VivaInsights as a Global Administrator to read the FeatureId and policy scopes for the export feature before you script a policy (first row of the controls table).
- Write a short note to eligible users saying what the export contains and where they may save it.

### At rollout
- Create a Viva feature access policy for Copilot Metrics Export set to Off for everyone, or for the groups that should not export, if you want to hold the feature back; allow up to 24 hours.
- Keep the Viva Insights web app control for decisions about the whole dashboard only: turning it off disables the entire app, not just the export.

### After rollout
- Review changes to dashboard access in the audit log: the Viva Insights activities include Modified CXO Settings (assignment or removal of users and groups for the Copilot Dashboard) and delegate activities.
- Check the VFAM change logs in Microsoft Purview for who created, changed or deleted export policies.
- Re-read the Learn export page when general availability is announced, because it is labelled preview and describes day-level and identifiable exports that MC1173208 does not mention.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether company-level dashboard users can export Copilot metrics (tenant, group or user policy)</strong><br><small>Tenant</small><br><small class="controls__note">Choose Viva Insights and Copilot Metrics Export at 'select the app and feature'. Learn calls the setting User-level export and insights. Global admin per the feature table. Takes up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;FeatureId from Get-VivaModuleFeature&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the Copilot Dashboard, is on</strong><br><small>Tenant</small><br><small class="controls__note">Existing, broader control, not specific to the export: off disables the whole app, including the dashboard. Select the Viva Insights web app feature. The settings page lists the AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

A user or group policy overrides the org-wide setting, so a tenant-wide Off can still be lifted for named groups by a custom policy. The feature table lists no user opt-out for this feature, and shows Global admin as who manages it; the Add-VivaModuleFeaturePolicy reference says Global Administrators or the roles assigned at the feature level.

The Learn page says the control is one setting for both week-level and day-level export, and the analyst role keeps user-level data access that cannot be changed.

Who holds company-level access is decided elsewhere. Automatic access for senior leaders is governed by the Copilot Dashboard auto-enablement control (FeatureId AutoCxoIdentification), which the settings page says supports tenant-level policies only.

## Open questions

- What FeatureId does Get-VivaModuleFeature return for Copilot Metrics Export, and does the admin centre label it Copilot Metrics Export or User-level export and insights? Watch the Viva feature access management page.
- Does the 50-licence threshold count Viva Insights licences (Learn export page) or only Microsoft 365 Copilot licences (MC1173208)? Watch MC1173208 and the Learn export page.
- Does Microsoft record each export in the audit log? The Viva Insights activities table lists no export event at the time of writing (November 2026).
- Will general availability keep the day-level and identifiable export options the Learn page describes, which MC1173208 does not mention?
- Does the unified exclusion list, which hides users from dashboard aggregates, also remove those users' rows from the export?

<!-- rationale
risk: Medium. The export is on by default for company-level dashboard users and puts one row per user per week, with Organization and Job function attributes, into a downloaded file; user IDs are hashed.
cost: Low. The only cost the sources show is admin time to review access and brief leaders. Neither the roadmap record, MC1173208 nor the Learn export page names a separate price or meter.
impact: Medium. Only people with company-level Copilot Dashboard access see the export option: senior leaders, admin-assigned users, delegates, analysts and Global Administrators. Managers with team-level views do not.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The export policy route is Viva > Settings > Manage feature access > Create a policy > Access setting, with the note directing selection of Viva Insights and Copilot Metrics Export. | Found: Select Create a policy. ... Name the policy and select the app and feature for which you'd like to set the policy. ... Select the Access setting option and choose On or Off | Fix: Include the app and feature selection already given in the note in the route: 'Viva > Settings > Manage feature access > Create a policy > Viva Insights > Copilot Metrics Export > Access setting'. Retain the note that Learn calls the setting User-level export and insights. See https://learn.microsoft.com/viva/control-access-admin-center. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[1].ui / admin-path: The web app policy route is Viva > Settings > Manage feature access > Create a policy > Access setting, with the note directing selection of the Viva Insights web app feature. | Found: Select Create a policy. ... Name the policy and select the app and feature for which you'd like to set the policy. ... Select the Access setting option and choose On or Off | Fix: Include the app and feature selection already given in the note in the route: 'Viva > Settings > Manage feature access > Create a policy > Viva Insights > Viva Insights web app > Access setting'. See https://learn.microsoft.com/viva/control-access-admin-center. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist directs administrators to inventory company-level dashboard access without a corresponding control row. | Found: List who holds company-level Copilot Dashboard access ... Who holds company-level access is decided elsewhere. ... The table covers export policies and the Viva Insights web app policy. | Fix: Remove the Before rollout bullet beginning 'List who holds company-level Copilot Dashboard access'. The access-assignment inventory has no corresponding controls-table row. Retain the supported Microsoft recommendation as background prose if desired; do not add a row in this correction.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist directs readers to check dashboard access audit activities and VFAM change logs without corresponding control rows. | Found: Review changes to dashboard access in the audit log ... Check the VFAM change logs in Microsoft Purview ... The controls table contains only export and web app policies. | Fix: Remove the After rollout bullets beginning 'Review changes to dashboard access in the audit log' and 'Check the VFAM change logs in Microsoft Purview'. Neither audit-check step has a controls-table row. Retain the supported audit background outside the checklist if desired; do not add rows in this correction.
-->
