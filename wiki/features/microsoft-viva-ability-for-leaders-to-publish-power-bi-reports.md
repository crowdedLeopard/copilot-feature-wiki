---
title: "Viva Insights: leaders can publish Power BI reports"
slug: "microsoft-viva-ability-for-leaders-to-publish-power-bi-reports"
roadmapId: 570446
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Insights report publishing extends from analysts to leaders, managers and delegates. Microsoft says the control is on by default, with rollout from mid-December 2026. No action is required, but review who may publish."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Microsoft has not published an additional licence requirement specifically for leader publishing. Existing platform requirements apply: Viva Insights requires the applicable Viva Insights licensing and a Microsoft 365 or Office 365 tenant with Exchange Online Plan 1 or Plan 2. The Publish reports page names an E3 or E5 Exchange licence only for org-wide recipient search in analyst publishing."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["viva-insights","viva-feature-access-management","power-bi","sharing","delegation","m365-admin-center","powershell","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 570446"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570446"
    kind: "roadmap"
  - title: "MC1489942: (Updated) Microsoft Viva Insights: New Power BI report publishing capabilities for leaders"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1489942"
    kind: "message-center"
  - title: "Publish reports"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/publish-reports"
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
  - title: "Environment requirements for Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"]
controls:
  - governs: "Who may publish Viva Insights reports (Report publish, formerly Analyst report publish)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureID> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Learn gives FeatureId AnalystReportPublish for the pre-rename control; find the current ID with Get-VivaModuleFeature -ModuleId VivaInsights. Use -GroupIds or -UserIds in place of -Everyone to scope it."
  - governs: "Whom analysts can publish Viva Insights Power BI reports to (Expanded publish report recipients)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureID> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Documented for analysts; Microsoft has not confirmed it applies to leaders. Learn does not give this feature's FeatureId on the pages read."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T00:31:56"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item, based on MC1489942 (updated 2026-11-16, rollout now mid-December 2026) and the Viva feature access pages."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: narrowed the licensing gap to an additional leader-specific requirement and added the Viva Insights platform requirements; fixed the impact rationale; removed four checklist bullets that had no controls-table row."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 85
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b70881ce9986130819ab021ae5eca0e0"
---

## What's changing

Microsoft Viva Insights is extending report publishing from analysts to leaders such as chief officers, managers and their delegates. The roadmap item describes a lightweight publishing experience that lets leaders distribute curated reports directly. Microsoft's notice MC1489942 says leaders can publish Power BI reports available to them in the Viva Insights Reports tab, either default or customised, without an analyst publishing on their behalf.

Per MC1489942, publishers define the audience, report title, description and publication end date. Recipients get an email notification and can open the report from their Reports tab. A report can be published unfiltered, where recipients see the full data scope available for that report, or by manager hierarchy, where recipients see data according to the applicable manager hierarchy. If a published report is set to refresh weekly or monthly, the underlying query keeps refreshing until the publication end date. Recipients can view and interact with the report but cannot download it, access row-level data, modify or manage publications, extend access or republish.

In Viva Feature Access Management, the **Analyst report publish** setting is renamed **Report publish**. MC1489942 says it stays managed by Global Admins and Insights Admins, is on by default, and will govern publishing for both analysts and leaders. Insights Admins get an Admin Publish Reports experience in which they can view and remove publications and publish on behalf of users.

The roadmap item is In development, with a General Availability target of December CY2026 for Worldwide (Standard Multi-Tenant) and GCC, on the web. MC1489942 was updated on 2026-11-16 to move rollout to begin in mid-December 2026 (previously early November) and complete by end of December 2026 (previously late November). It sets no act-by date. The Learn page Publish reports still describes publishing by analysts at the time of writing (November 2026); the leader behaviour above is the roadmap's and Microsoft's notice's description.

## Why it matters

The control that decides who may publish is on by default, so from rollout leaders can send reports to audiences they choose without an analyst, and an administrator who has not set a policy has not decided who those leaders are. Microsoft's notice says the control becomes a single Report publish setting covering analysts and leaders, so any existing policy on Analyst report publish may now also reach leaders. Confirm that before rollout.

The main exposure is scope. An unfiltered publish shows recipients the report's full data scope, and recipients keep access until the publication expires even if the publisher loses the qualifying role. Insights Admins can remove a publication. Plan for communication to leaders as much as for configuration.

## Risk assessment

**Data exposure**
- Unfiltered publish gives recipients the full data scope available for that report (MC1489942). A leader who chooses it over manager-hierarchy publish can show recipients data beyond their own team. The Learn page describes manager-hierarchy publishing as showing recipients the rows for their own team; the setting that restricts who may publish is the Report publish policy in the controls table.
- If a publisher loses the qualifying role used to publish, recipients keep access until the publication expires (MC1489942), so a role change does not retract existing publishes. Insights Admins can view and remove publications through the Admin Publish Reports experience.
- A manager-hierarchy publish to an enabled manager with no matching rows appears empty, per the Learn page for analyst publishing. Expect support questions from managers who see a blank report.

**Security & identity**
- Which users count as leaders or delegates for publishing is not described in the sources read. Confirm how Report publish scopes leaders before relying on user or group policies to limit them.
- Policies are evaluated per user and the most restrictive policy applies, so a group policy can override a tenant-wide default (Viva feature access management page).

**Autonomy & actions**
- Publishing is described as an action the publisher takes, with the publisher choosing audience and end date. Publishing sends an email notification to recipients (MC1489942). No source describes any automated or agent-driven publishing.

**Change & support**
- The setting name changes from Analyst report publish to Report publish. Scripts or runbooks that refer to the old name or to FeatureId AnalystReportPublish need checking; Learn does not yet say whether the FeatureId changes.
- MC1489942 says the renamed control governs publishing for analysts and leaders. Whether an existing Analyst report publish policy restricts leaders from day one is not spelled out.

## Cost and licensing

Microsoft has not published an additional licence requirement specifically for leader publishing. MC1489942 and the roadmap item name none, and the Learn page Publish reports lists no licence for publishing itself. That is a statement about what is documented, not a statement that none applies. Existing platform requirements apply: Viva Insights requires the applicable Viva Insights licensing and a Microsoft 365 or Office 365 tenant with Exchange Online Plan 1 or Plan 2.

The Learn page does give one licence condition for analyst publishing of unfiltered reports: to find people across the organisation, both publisher and recipient must have an E3 or E5 Exchange licence, otherwise the error "Your account isn't configured for org-wide recipient search" appears. That condition is not stated for leaders. Separately, creating Viva feature access policies requires a supported version of Microsoft 365 or a Viva Suite licence.

Indirect cost is admin and communication time: setting a Report publish policy, briefing leaders, and reviewing publications. Not yet published: any extra charge.

## Scope

**Who:** analysts, chief officers, managers and delegates can publish; recipients are whoever the publisher selects (MC1489942). Insights Admins and Global Admins manage the Report publish setting.

**Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, on the web, at General Availability. The Viva feature access management page says its access controls are not available in GCC High or DoD and, for GCC, points to each app's documentation for availability; the Publish reports page does not state GCC availability of the policy.

**Rollout:** mid-December 2026 to end of December 2026 per MC1489942. Policy changes take effect for the user within 24 hours unless a feature says otherwise.

**Prerequisites:** the Learn page lists roles, not a licence, for administering the feature.

## Governance guidance

### Before rollout
- Decide who in your organisation should be allowed to publish, and record it before mid-December 2026, using the Report publish control in the controls table.
- Check whether an Analyst report publish policy already exists and what it restricts, since Microsoft says the renamed control will govern leaders as well as analysts.
- Brief leaders and delegates on the choice between unfiltered and manager-hierarchy publish, and on the publication end date.

### At rollout
- Create a Report publish policy if you want to restrict leaders; use a group policy for specific people, or the tenant-wide policy as the default.
- Confirm in a test publish that the setting behaves as you configured it, allowing up to 24 hours for a policy change to apply.

### After rollout
- Re-check the Publish reports Learn page, which describes analyst publishing at the time of writing, for the leader documentation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who may publish Viva Insights reports (Report publish, formerly Analyst report publish)</strong><br><small>Tenant</small><br><small class="controls__note">Learn gives FeatureId AnalystReportPublish for the pre-rename control; find the current ID with Get-VivaModuleFeature -ModuleId VivaInsights. Use -GroupIds or -UserIds in place of -Everyone to scope it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureID&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whom analysts can publish Viva Insights Power BI reports to (Expanded publish report recipients)</strong><br><small>Tenant</small><br><small class="controls__note">Documented for analysts; Microsoft has not confirmed it applies to leaders. Learn does not give this feature's FeatureId on the pages read.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureID&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Report publish policy decides who may publish, but not what they publish to or at what data scope: audience and the unfiltered or manager-hierarchy choice are made by the publisher at publish time. Expanded publish report recipients is documented for analysts only; Microsoft has not confirmed it applies to leaders.

Per Learn, a user has one effective policy per feature and the most restrictive applies. You can assign a maximum of 10 policies per feature to users and groups, each to a maximum of 20 users or groups, plus one tenant-wide policy. Learn lists the Analyst Report Publish control as managed by a Viva Insights admin; MC1489942 names Global Admins and Insights Admins. Both statements are reported as written.

The Admin Publish Reports experience is described in MC1489942; Microsoft Learn does not describe where it is at the time of writing (November 2026), and no API for viewing or removing publications is documented. Learn documents the PublishReport and RemovedPublishedReport audit operations for analyst publishing in the unified audit log.

## Open questions

- Does the renamed Report publish control keep the FeatureId AnalystReportPublish, and do existing policies on it carry over to leaders? Watch the Publish reports Learn page and MC1489942.
- How does Viva Insights decide who counts as a leader or delegate for publishing, and can the policy scope them separately from analysts?
- Does Expanded publish report recipients, and its E3 or E5 Exchange licence condition, apply to leader publishing? Watch the Publish reports Learn page.
- Is the Report publish policy available in GCC, which the roadmap lists, given the VFAM page defers to each app's documentation for GCC?
- Where is the Admin Publish Reports experience, and is there an API or audit event for leader publishes?

<!-- rationale
risk: Medium. Microsoft's notice says the Report publish setting is on by default, so leaders can send reports to chosen audiences, including at the full data scope of the report, unless an admin sets a policy first.
cost: Low. Neither the roadmap item nor Microsoft's notice names an additional licence or meter for leader publishing; the known cost is admin time to set policy and brief leaders. An additional licence requirement is not yet published.
impact: Medium. Leaders, managers and delegates gain publishing; analysts already have it. Recipients receive an email notification and can access the report in the Viva Insights Reports tab.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Autonomy & actions; rationale: impact / record: Recipients receive an email notification when a report is published to them. | Found: Recipients will receive an email notification when a report is published to them, and can access published reports from the Viva Insights Reports tab. | Fix: After the notification statement in What's changing, add: 'For existing analyst publishing, Learn qualifies security-group notifications: the group must be mail-enabled and allow external senders.' The qualification is at https://learn.microsoft.com/viva/insights/advanced/analyst/publish-reports under 'Publish'.
-->
