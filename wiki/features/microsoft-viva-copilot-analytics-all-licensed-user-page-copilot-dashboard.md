---
title: "Microsoft Viva: Copilot Dashboard adoption page adds an All licence view"
slug: "microsoft-viva-copilot-analytics-all-licensed-user-page-copilot-dashboard"
roadmapId: 559475
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "The Copilot Dashboard adoption landing page is meant to show Microsoft 365 Copilot and unlicensed Copilot Chat use together, with a License filter. Launched; reporting change only, so admins mainly need to brief dashboard readers."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says the Copilot Dashboard is available to customers with a Microsoft 365 or Office 365 business or enterprise subscription and an active Exchange Online account, with no paid Viva Insights or Copilot licence needed to view it. The \"All\" view is listed with at least 50 Copilot or 50 Viva Insights licences."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["viva-insights","copilot-chat","m365-copilot","analytics","adoption","viva-feature-access-management"]
sources:
  - title: "Microsoft 365 roadmap item 559475"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559475"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
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
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
videos: []
related: ["usage-reports","m365-copilot-intelligent-summaries-in-copilot-dashboard","microsoft-viva-copilot-analytics-export-metrics-in-the-copilot-dashboard-at-day-level","m365-copilot-export-copilot-metrics-in-the-copilot-dashboard","microsoft-viva-copilot-analytics-agent-dashboard"]
controls:
  - governs: "Whether the Viva Insights web app, which hosts the Copilot Dashboard, is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator (or Global Administrator). Turning it off disables the whole app, including the Copilot Dashboard. In the policy, select the app and the Viva Insights web app feature. Applies to all dashboard views, not the License filter."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-12T22:00:47"
changes:
  - date: "2026-11-24"
    note: "First briefing for this launched roadmap item: the unified All view on the Copilot Dashboard adoption page, with Microsoft's differing Learn description noted."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 55 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 55
  unconfirmed: 1
  contradicted: 2
  attempts: 0
  hash: "252d5f9cd4c607983f3a92405b452a6e"
---

## What's changing

The Copilot Dashboard adoption landing page is being changed to show a unified view of Copilot adoption across the organisation. The roadmap item says the default page used to show only Microsoft 365 Copilot (licensed) usage; it will now include all Copilot user adoption, covering both Microsoft 365 Copilot and Copilot Chat use that does not require a licence. A License filter lets the reader switch between All, M365 Copilot (licensed) and Copilot Chat (unlicensed).

Microsoft's Microsoft 365 Copilot release notes list the change under 1 July 2026 and say the adoption page "now includes the option to filter on all Copilot user adoption data instead of only Microsoft 365 Copilot licensed usage".

Microsoft's two descriptions do not line up exactly. The Learn dashboard page describes the License filter as a choice between **Microsoft Copilot** and **Copilot Chat**, and says the Copilot Chat filter appears only if the tenant has Copilot Chat reporting enabled. Separately, its feature-availability table lists an "All" license type view (a consolidated view of all Microsoft Copilot and Copilot Chat usage) for tenants with at least 50 Viva Insights licences or at least 50 Copilot licences, and shows it as not included for tenants with between 1 and 49 Copilot licences. Treat the roadmap and release notes as the description of the change and the Learn page as the description of the conditions.

The roadmap record gives the status as Launched, with a target of April CY2026 and a preview date of March CY2026. Release phases are General Availability and Preview. The record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform.

## Why it matters

The adoption page is the one leaders and managers open first, and its totals now stand for a wider population than before: people who use Copilot Chat without a Copilot licence are counted alongside licensed users. Expect adoption numbers quoted from the earlier licensed-only view to differ from the All view, and agree on which view a business case or licence request refers to. Learn also notes that the dashboard covers the previous 28 days, while admin centre usage reports use rolling windows of 7, 30, 90 or 180 days, so figures from the two places will not match exactly (see [usage reports](/concepts/usage-reports/)).

The roadmap says the default landing page changes, so if nobody acts the page will show the wider view. Microsoft Learn does not say how a tenant's default view is chosen where the Copilot Chat filter is absent, so check what your own readers see.

## Risk assessment

**Data exposure**

- The landing page now draws on Copilot Chat use by people who hold no Copilot licence. Learn says data in the dashboard is aggregated to meet a minimum privacy threshold, and that group-level metrics appear only for groups that meet the minimum group size, which is 10 employees by default.
- An exclusion list can keep users out of the aggregates. Learn says it lets admins exclude any Microsoft 365 licensed user from analysis in the Copilot Dashboard for their Microsoft Copilot Chat (web) usage, and that the policy must be turned on for the list to apply.

**Security & identity**

- No change to who can open the dashboard is described. Learn says user-level access is determined automatically from organisational data and can be modified by a Microsoft 365 admin, and that users need no paid Viva Insights or Copilot licence.

**Autonomy & actions**

- No change: the roadmap item describes a different view of existing adoption data and no action taken on anyone's behalf.

**Change & support**

- Readers may report a missing option: the Copilot Chat filter appears only with Copilot Chat reporting enabled, and the "All" view is listed for tenants with at least 50 Copilot or Viva Insights licences. Tenants with 1 to 49 Copilot licences are shown by Learn as not having it.
- Totals change meaning on the landing page, so earlier screenshots and reports of licensed-only adoption are not comparable.

## Cost and licensing

No separate charge for the All view is published. Learn's dashboard page says the Microsoft Copilot Dashboard in Viva Insights is available to any customer with a Microsoft 365 or Office 365 subscription for business or enterprise who has an active Exchange Online account, and that users do not need a paid Viva Insights licence or a Microsoft Copilot licence.

What the licences change is what each tenant sees. Learn says data processing starts once a tenant has at least 50 assigned Viva Insights licences or 1 assigned Copilot licence (including the Viva Insights service plan). Its feature-availability table lists the "All" license type view for tenants with at least 50 Viva Insights licences or at least 50 Copilot licences, and not for tenants with between 1 and 49 Copilot licences.

Indirect cost is admin time to brief dashboard readers and to review the exclusion list and minimum group size. No price or meter specific to the All view is published at the time of writing (November 2026).

## Scope

**Who it affects:** people who read the Copilot Dashboard adoption page in the Viva Insights web app. Learn says employees can view the dashboards in that web app, and that user-level access is determined automatically from organisational data and can be modified by a Microsoft 365 admin.

**Licences:** the view combines users with a Copilot licence and users of the free, web-based Copilot Chat app. The All view depends on licence counts as set out under cost and licensing.

**Platform and cloud:** the roadmap record lists Web and Worldwide (Standard Multi-Tenant) only. The record does not list GCC, GCC High or DoD.

**Rollout:** status is Launched on the roadmap, with release notes dated 1 July 2026. The Copilot Chat filter appears only if the tenant has Copilot Chat reporting enabled, and Microsoft Learn does not say how that is enabled.

## Governance guidance

### Before rollout

- Tell dashboard readers that the landing page can now include users with no Copilot licence, and agree which view (All, M365 Copilot (licensed) or Copilot Chat (unlicensed)) your adoption reports will quote.
- Count your assigned Copilot and Viva Insights licences, because Learn lists the "All" view for at least 50 of either and not for 1 to 49 Copilot licences.
- Review the dashboard exclusion list and decide whether any users should be left out of the Copilot Chat analysis; the policy must be turned on for the list to apply.

### At rollout

- Open the adoption page in the Viva Insights web app and check that the License filter shows the options you expect.
- Check the minimum group size (10 employees by default) so group-level views do not expose small teams.
- Confirm with the AI Administrator who holds access to the Viva Insights web app, since turning that app off removes the whole dashboard.

### After rollout

- Compare the All view with the admin centre usage reports before presenting figures, allowing for the 28-day dashboard window against the reports' rolling windows.
- Watch the Microsoft 365 Copilot release notes and the Copilot Dashboard Learn page for changes to the License filter wording.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the Copilot Dashboard, is available</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator (or Global Administrator). Turning it off disables the whole app, including the Copilot Dashboard. In the policy, select the app and the Viva Insights web app feature. Applies to all dashboard views, not the License filter.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says the earlier Copilot Dashboard access control in the Microsoft 365 admin center and the earlier PowerShell controls are no longer available, and that dashboard access is managed by turning the Viva Insights web app on or off. That switch removes the dashboard for the scope it covers; it does not change what the License filter shows.

The exclusion list is managed with Viva Feature Access Management (VFAM) using PowerShell or VFAM, per the Learn settings page. The page does not give a path or command in the section read, so none is listed here. Changes after removing users take up to three days to take effect. The minimum group size is set on the same Learn page, by an AI Administrator or Viva Insights Administrator.

The VFAM feature table also lists a Copilot Chat in Viva Insights feature managed by a Viva Insights admin or AI admin. Confirm whether it governs the Copilot Chat filter before relying on it.

## Open questions

- Which view does the landing page open on for a given tenant, and does the Copilot Chat filter option depend on a setting an admin controls? Learn says the filter appears only if Copilot Chat reporting is enabled and does not say how. Watch the Copilot Dashboard Learn page.
- Does the "All" view reach tenants with 1 to 49 Copilot licences? The roadmap item does not qualify it, while Learn's feature-availability table shows it as not included for them. Watch the Learn page and Message center.
- Does the Copilot Chat in Viva Insights feature access control in VFAM govern the Copilot Chat filter or the unlicensed-user data? Watch the feature access management page.
- Will the Learn License filter description be updated to include the All option the roadmap and release notes describe?

<!-- rationale
risk: Low. It changes what an existing, aggregated report shows; Learn says dashboard data is aggregated to a minimum privacy threshold and an exclusion list can remove users from the Copilot Chat analysis.
cost: Low. The only cost the sources show is admin and communication time; no separate price or meter for the All view is published, and Learn ties it to licence counts (at least 50 Copilot or 50 Viva Insights licences).
impact: Medium. Leaders and managers who read the dashboard see different adoption totals on the landing page; Learn describes the dashboard as aimed at leaders, decision makers and managers, not end users.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: The adoption page is the one leaders and managers open first. | Found: Searched: Copilot Dashboard adoption landing page leaders managers first default All view. Read dashboard and release notes, and Copilot Analytics introduction search excerpt. These establish audience and landing-page terminology, not readers' opening order. | Fix: Replace 'The adoption page is the one leaders and managers open first, and its totals now stand for a wider population than before:' with 'The adoption landing page now covers a wider population than before:'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Viva > Settings > Manage feature access > Create a policy reaches the feature-access policy wizard. | Found: select **Viva** from the settings menu. Select the **Settings** tab and select **Manage feature access**. Select **Create a policy**. Select the **Access setting** option and choose **On** or **Off** | Fix: Set controls[0].ui.path and the rendered route to 'Viva > Settings > Manage feature access > Create a policy > app > Viva Insights web app > Access setting'. Add 'Choose On or Off.' to the existing note. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[0].note; Governance guidance: At rollout; Governance controls table / role: An AI Administrator or Global Administrator can enable or disable the Viva Insights web app. | Found: Enable or disable the Viva Insights web app *Applies to: AI Administrator* In addition to the roles described below, all settings can also be managed by Microsoft 365 Global Administrators. | Fix: Append to controls[0].note and its rendered note: 'The settings page names AI Administrator (and Global Administrator), while the VFAM feature table lists Global admin for Viva Insights web app.' Both source pages are already cited. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks admins to review the exclusion list, but the controls table has no exclusion-list row. | Found: Review the dashboard exclusion list and decide whether any users should be left out of the Copilot Chat analysis; the policy must be turned on for the list to apply. The sole table row governs whether the Viva Insights web app is available. | Fix: Remove the 'Review the dashboard exclusion list' bullet from Before rollout. Leave the exclusion-list explanation in the prose; do not add a control row.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist asks admins to check minimum group size, but the controls table has no minimum-group-size row. | Found: Check the minimum group size (10 employees by default) so group-level views do not expose small teams. The sole table row governs whether the Viva Insights web app is available. | Fix: Remove the 'Check the minimum group size' bullet from At rollout. Leave the documented threshold in the prose; do not add a control row.
-->
