---
title: "Microsoft Viva: identifiable export of Copilot metrics from the Copilot Dashboard"
slug: "microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard"
roadmapId: 562648
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Admins can allow row-level Copilot Dashboard exports to include named users instead of anonymised IDs. The roadmap says admins turn it on, so review who should see named usage data before it is enabled."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's export page requires at least 50 Copilot or Viva Insights licences assigned in the tenant. A price or licence specific to identifiable export is not yet published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["viva-insights","viva-feature-access-management","data-export","privacy","analytics","m365-copilot","m365-admin-center","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 562648"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562648"
    kind: "roadmap"
  - title: "Export Copilot metrics from the Microsoft Copilot Dashboard"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/export-copilot-metrics"
    kind: "learn"
  - title: "Identification in Copilot Analytics"
    url: "https://learn.microsoft.com/viva/insights/identification-copilot-analytics"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Export data from the Agent Dashboard"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/export-agent-data"
    kind: "learn"
  - title: "Which users can export identifiable (named) Copilot Dashboard data (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Which users can export identifiable (named) Copilot Dashboard data (PowerShell)"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-interactive-insights-in-the-a365-business-analytics-app"]
controls:
  - governs: "Which users can export identifiable (named) Copilot Dashboard data"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureId> -Name <policyName> -IsFeatureEnabled $true -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Global Administrator or AI Administrator. Copilot Dashboard identifiable feature ID not printed by Learn; replace -Everyone with -GroupIds or -UserIds to scope a pilot."
  - governs: "Whether leaders and managers can export user-level Copilot Dashboard data"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureId> -Name <policyName> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Learn lists this as Copilot Metrics Export (Preview), Global admin. Setting is always on for analysts. Existing export control, not specific to identifiable fields."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-20"
    note: "New briefing on identifiable export of Copilot metrics from the Copilot Dashboard, with the VFAM policy controls and open questions on defaults and licensing."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 62 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 60
  unconfirmed: 2
  contradicted: 0
  attempts: 1
  hash: "06f2019c23b1702904b2da4e320225da"
---

## What's changing

The roadmap item describes a way for users to export identifiable, row-level Copilot metrics from the Copilot Dashboard for reporting and deeper analysis, and says admins can turn the capability on in a tenant. Its status is In development with a target of November CY2026, and the release phases are General Availability and Targeted Release. It lists Worldwide (Standard Multi-Tenant) and the Web platform.

Learn already documents the export that this builds on. Users with global access to the Copilot Dashboard select **Export data**, then **Export by week** (six months of week-level data) or **Export by day** (28 days of day-level data). Learn says personal identifiers are removed and replaced with anonymised IDs, unless an administrator has enabled identifiable export for the user, in which case the export also includes identifiable fields.

Both Learn pages describe this as preview. The export page carries a public-preview banner, and Microsoft's identification overview lists Copilot Dashboard data export as Private Preview. Learn describes the preview, not the final design, so check both pages again when the roadmap item moves to Launched.

Microsoft Learn does not state a default value for the identifiable setting on the Copilot Dashboard export. The roadmap says admins can turn it on, and the export page says identifiers stay removed unless an administrator has enabled identifiable export, so this briefing treats it as admin opt-in.

## Why it matters

Today Learn describes the Copilot Dashboard export as user-level with identifiers removed. Identifiable export changes that to named employees, which is a different kind of data for a tenant to hold, share and retain. Microsoft's own page calls identification a sensitive capability because identified outputs reveal named users.

If nobody acts, the sources point to identifiers staying removed, since the export page ties identifiable fields to an administrator having enabled them. The decision for a service owner is whether named adoption data is wanted at all, who should receive it, and what your works council, privacy or HR policy says about attributing Copilot usage to individuals.

## Risk assessment

**Data exposure**
- Named, row-level Copilot usage per user and period becomes exportable as a file. Learn says exports include identifiable fields only where an administrator has enabled identifiable export. Once downloaded, the file sits outside the dashboard, so control who may export before you enable it.
- Exports cannot be customised, according to the export page, so the file carries every metric the export includes for each user.

**Security & identity**
- Identifiable access is governed by a dedicated Viva Feature Access Management (VFAM) policy. Only a Microsoft 365 Global Administrator or an AI Administrator can create and manage identification access policies. Scope the policy to groups or named users rather than the whole tenant while you pilot.
- Exporters are users with global access to the Copilot Dashboard: automatically identified senior leaders, users assigned global access, delegates of those users, Viva Insights Analysts with global access and Global Administrators. Delegation therefore extends who can see named data; Learn says delegates inherit export access unless the admin policy disables it.

**Autonomy & actions**
- No change: the export is a download of metrics that a user requests, and the sources describe no automated action.

**Change & support**
- Expect questions from leaders who can export today and then see names. The roadmap target is November CY2026, and Learn describes the feature as preview, so confirm behaviour in your tenant before communicating it.
- Policy changes can take up to 24 hours to appear in the web app, so allow for that when testing a pilot group.

## Cost and licensing

Learn's export page lists one licence prerequisite: the tenant must have at least 50 Copilot or Viva Insights licences assigned. It also says users with global access can export; the Copilot Dashboard page says users do not need a paid Viva Insights or Microsoft Copilot licence to use the dashboard.

The page lists no meter and no separate charge for identifiable export, and Microsoft has not yet published a price or licence specific to it. The indirect cost is admin time for the policy, plus whatever governance work your privacy team requires before named usage data is exported.

The controls in the table are Viva Feature Access Management policies, which Learn says require a supported version of Microsoft 365 or a Viva Suite licence.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform; it lists no US Government clouds. The roadmap does not say whether other clouds are excluded, and the VFAM overview says its access controls are not available in GCC High or DoD.

Who can export: users with global access to the Copilot Dashboard. Users with non-global access, such as managers with team-level views, cannot use the export. The tenant needs at least 50 Copilot or Viva Insights licences assigned; data processing can take up to seven days after licence assignment, except for day-level exports.

Who configures it: Learn says only a Microsoft 365 Global Administrator or an AI Administrator can create and manage identification access policies. The Copilot export page names global admins for the export control itself.

## Governance guidance

### Before rollout
- Decide with your privacy, HR and works-council contacts whether named Copilot usage may be exported, and who may receive it.
- List who holds global access to the Copilot Dashboard, including delegates, since they are the people an identifiable policy could reach.
- Check that someone holds the Global Administrator or AI Administrator role to manage the policy, and that Exchange Online PowerShell 3.2.0 or later is available if you script it.

### At rollout
- Create the identification access policy in Viva feature access management for a pilot group of named users or groups, not the whole tenant.
- Keep the user-level export policy for the Copilot Dashboard in view, because turning it off stops leaders and managers exporting user-level data.
- Allow up to 24 hours before testing as a pilot user, and tell exporters how the file may be stored and shared.

### After rollout
- Review VFAM policy history in the Microsoft Purview change logs for your organisation.
- Re-check the policy scope when delegation or senior-leader assignments change.
- Re-read the Learn export and identification pages when the roadmap item moves from In development, since both describe preview behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can export identifiable (named) Copilot Dashboard data</strong><br><small>User</small><br><small class="controls__note">Global Administrator or AI Administrator. Copilot Dashboard identifiable feature ID not printed by Learn; replace -Everyone with -GroupIds or -UserIds to scope a pilot.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureId&gt; -Name &lt;policyName&gt; -IsFeatureEnabled $true -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether leaders and managers can export user-level Copilot Dashboard data</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists this as Copilot Metrics Export (Preview), Global admin. Setting is always on for analysts. Existing export control, not specific to identifiable fields.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureId&gt; -Name &lt;policyName&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn's export page says the export control is a single VFAM control for both week-level and day-level export, and that the **User-level export and insights** setting is always on for the analyst role and cannot be changed. Turning it off stops leaders and managers exporting user-level data and viewing user-level insights.

For identification, Learn describes a separate dedicated VFAM policy but does not print the feature ID for the Copilot Dashboard export. Microsoft's Agent Dashboard export page names an "IdentifiableExport" setting for that dashboard; the Copilot Dashboard page does not name one, so find the feature ID your tenant returns with Get-VivaModuleFeature -ModuleId VivaInsights before running the cmdlet.

Each feature can have up to 10 policies assigned to users and groups, each covering up to 20 users or groups, plus one tenant-wide policy. Learn's identification page gives a different admin centre route than the Manage feature access page; the row below follows the Manage feature access page, so confirm the labels in your tenant.

## Open questions

- What is the default state of identifiable export for the Copilot Dashboard when it reaches general availability, and does the roadmap's "tuned On by Admins" mean off until enabled? Watch the export page and Message center.
- What is the VFAM feature ID for the Copilot Dashboard identifiable export, and does it share the Agent Dashboard's "IdentifiableExport" setting?
- Will Microsoft publish a licence or price specific to identifiable export, beyond the 50-licence prerequisite?
- Which identifiable fields will the export add, and do admin exclusion policies apply to them as they do for the Agent Dashboard export?

<!-- rationale
risk: Medium. The export would show named employees' Copilot usage, which Learn calls a sensitive capability, but access is governed by a dedicated Viva Feature Access Management policy and the roadmap says admins turn it on.
cost: Low. The only cost the sources show is admin time; the export page lists at least 50 Copilot or Viva Insights licences as a prerequisite, and no separate price for identifiable export is published.
impact: Low. Only users with global access to the Copilot Dashboard (leaders, delegates, analysts, global administrators) can export, and the roadmap says nothing changes for them until an admin turns it on.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Security & identity / applicability: Delegation therefore extends who can see named data. | Found: Searched: '"Copilot Dashboard" delegates "identifiable" access policy'. Read export-copilot-metrics, identification-copilot-analytics and delegate-access. Export inheritance is stated; inheritance of the separate identification permission is not. | Fix: Remove 'Delegation therefore extends who can see named data;' and retain the supported statement that delegates inherit data-export access unless the administrative policy disables it. The export page separately conditions identifiable fields on administrative enablement for the exporter.
- [unsupported, blocker] front matter: licensing.model / licensing: Identifiable export has a mixed licensing model. | Found: Searched: 'Viva Insights Copilot Dashboard identifiable export license entitlement pricing prerequisites'. Read export-copilot-metrics, copilot-dashboard, feature-access-management and identification-copilot-analytics. No combination of distinct entitlement models is documented. | Fix: Set licensing.model to 'included' under the standard's rule for an option inside an already licensed product. Retain the notes that export requires at least 50 assigned Copilot or Viva Insights licences and that no separate identifiable-export licence or price is published.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout / command: Exchange Online PowerShell 3.2.0 or later is required for scripting VFAM policies. | Found: Access to Exchange Online PowerShell Version 3.2.0 or later. If you need to use non-mail-enabled groups you must have access to Exchange PowerShell version 3.5.1 or later. | Fix: Append 'Use version 3.5.1 or later for non-mail-enabled groups' to the scripting prerequisite, preserving the existing 3.2.0 minimum for other cases, as documented at https://learn.microsoft.com/viva/manage-access-policies. | Source: https://learn.microsoft.com/viva/manage-access-policies
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Viva > Settings > Manage feature access > Create a policy is the admin-centre route for an identification policy. | Found: Select Create a policy. ... select the app and feature for which you'd like to set the policy. ... Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: Complete the path as 'Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > On'. The existing prefix is documented but stops in the policy-creation flow before selecting the feature and setting. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Viva > Settings > Manage feature access > Create a policy is the admin-centre route for controlling user-level exports. | Found: Select Create a policy. ... select the app and feature for which you'd like to set the policy. ... Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: Complete the path as 'Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > Off' to match the row's disabling command. The existing prefix stops before the access setting. | Source: https://learn.microsoft.com/viva/control-access-admin-center
-->
