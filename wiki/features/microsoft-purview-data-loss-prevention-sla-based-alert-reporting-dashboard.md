---
title: "Microsoft Purview DLP: SLA-based alert reporting dashboard"
slug: "microsoft-purview-data-loss-prevention-sla-based-alert-reporting-dashboard"
roadmapId: 568372
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a Purview DLP dashboard with MTTA, MTTD and MTTR trends, top sensitive information types and custom SLAs per alert severity. Preview targeted December 2026; Microsoft has not said what must be switched on."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this dashboard. Learn states licensing for DLP alert configuration: single-event alerts for organisations with a DLP subscription; aggregated alert configuration requires A5, E5 or G5, or E1, F1, G1, E3 or G3 with Office 365 Advanced Threat Protection Plan 2, Microsoft Purview Suite, or the Microsoft 365 eDiscovery and Audit add-on license."
audiences: ["security","compliance","service-owner"]
tags: ["dlp","purview","monitoring","analytics","sensitive-information-types"]
sources:
  - title: "Microsoft 365 Roadmap 568372"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568372"
    kind: "roadmap"
  - title: "Get started with the Data Loss Prevention Alerts dashboard"
    url: "https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started"
    kind: "learn"
  - title: "Get started with data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alerts-get-started"
    kind: "learn"
  - title: "Learn about data loss prevention"
    url: "https://learn.microsoft.com/purview/dlp-learn-about-dlp"
    kind: "learn"
  - title: "Microsoft Purview posture reports overview"
    url: "https://learn.microsoft.com/purview/purview-reports"
    kind: "learn"
  - title: "Create policy to detect and alert on U.S. PII data exposure"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    kind: "learn"
  - title: "Help prevent sharing sensitive items via SharePoint and OneDrive with external users"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-data-loss-prevention-reduce-policy-sync-status-sla-on-the-purview-ui-fro","microsoft-purview-information-protection-improved-sensitive-information-types"]
controls:
  - governs: "Severity level of alerts raised by a DLP rule"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Incident reports"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -ReportSeverityLevel High"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Setting under Incident reports: 'Use this severity level in admin alerts and reports'. Values: None, Low, Medium, High; None cannot be selected if the rule has no actions configured. Learn does not say the SLA dashboard reads it."
  - governs: "Who can view and manage DLP alerts (role group membership)"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Existing control for the DLP Alerts dashboard roles; Learn does not say it governs the SLA dashboard. Needs the Role management role."
  - governs: "Custom SLA targets for high, medium and low severity alerts"
    scope: "other"
    ui: null
    api: null
    note: "Planned in the roadmap item; no admin path or API is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-20"
    note: "First briefing: the roadmap describes an SLA-based DLP alert dashboard (preview December CY2026); Learn does not yet document it, so licensing, default and controls are marked not yet documented."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: removed the unsourced MTTA/MTTD/MTTR expansions and the cap statement, fixed aggregated-alert licensing, qualified the None severity value and set the SLA control's scope to other."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "54a1d18883fac4f3044db8673bb40cf2"
---

## What's changing

Microsoft plans an out-of-the-box dashboard in Microsoft Purview Data Loss Prevention (DLP) that reports on how quickly DLP alerts are handled. The roadmap item names MTTA, MTTD and MTTR metrics (it does not expand them), past trends, and the top sensitive information types (SITs) exposed in the alerts generated. Customers can also define their own SLAs for high, medium and low severity alerts, and the dashboard then shows operational performance against those SLAs.

Microsoft Learn does not describe this feature yet, so what is stated here about its behaviour is the roadmap's description. Which portal page it appears on, how each metric is calculated, whether SLAs are set per tenant or per policy, and whether it needs a setting turned on are not documented at the time of writing (November 2026).

What Learn does document today is the surrounding tooling. The DLP Alerts dashboard in the Microsoft Purview portal (Data loss prevention > Alerts) lets analysts view alerts, filter them, assign ownership and set an alert's **Status** to **Resolved**. Alert details already list the sensitive information types detected in a policy match. DLP posture reports (preview) in the same portal show items such as most triggered DLP rules and activities, on a 30-day rolling window. None of these pages mentions SLA targets or time-to-respond metrics.

The roadmap record gives the status as In development, a preview target of December CY2026 and a general availability target of January CY2027, for Worldwide (Standard Multi-Tenant) on the web. These are Microsoft's targets, not commitments.

## Why it matters

If your security or compliance team runs DLP alerts as a queue, the roadmap says Microsoft plans to measure that queue against response-time commitments. The Learn pages describe triage, ownership and status changes on each alert, but no response-time targets. A dashboard of this kind would let a service owner show whether high severity alerts are handled faster than low severity ones, and which sensitive information types drive the volume.

Microsoft has not stated whether anything happens on arrival if nobody acts, so base your plan on the roadmap text: the SLAs are described as something customers define. The practical preparation is to settle your own targets and make sure alert severity is set deliberately on DLP rules, because the roadmap ties SLAs to high, medium and low severity alerts.

## Risk assessment

**Data exposure**
- The dashboard is planned to show the top sensitive information types exposed through DLP alerts. Learn does not say whether it needs the same roles as the DLP Alerts dashboard. Until it does, treat access to it as at least as sensitive as access to alert data, which Learn limits to specific role groups (see the controls table).
- Alert visibility in the portal depends on retention. Learn gives two statements: the DLP alerts dashboard keeps alerts for 30 days, and the audit log retention policy controls how long an alert stays visible in the console. How far back this dashboard's trends reach is not documented.

**Security & identity**
- The roadmap item describes no new identity, connector or sharing action. Who can open the dashboard is not stated; membership of the existing DLP alert role groups is the control known to apply to the alerts it would summarise.

**Autonomy & actions**
- No autonomous action is described: the roadmap item describes reporting and SLA tracking. Whether an SLA breach triggers any notification or escalation is not stated.

**Change & support**
- The roadmap ties SLAs to high, medium and low severity alerts, and Learn documents severity as a setting on each DLP rule (None, Low, Medium or High; None cannot be selected if the rule has no actions configured). Confirm how the dashboard takes severity, and which alert states it counts, once Microsoft documents it.

## Cost and licensing

No licence, meter or price for this dashboard is published in the roadmap record or on Microsoft Learn at the time of writing (November 2026). Licensing is therefore Not yet published for this feature.

What Learn does publish is the licensing for DLP alert configuration, on [Get started with the data loss prevention alerts](https://learn.microsoft.com/purview/dlp-alerts-get-started): all organisations with a DLP subscription (E1, E3, E5, F1, G1, G3, G5) can configure single-event alerts, while aggregated alert configuration requires A5, E5 or G5, or E1, F1, G1, E3 or G3 with Office 365 Advanced Threat Protection Plan 2, Microsoft Purview Suite, or the Microsoft 365 eDiscovery and Audit add-on license. Those statements are about alert configuration; whether the SLA dashboard follows them is not stated.

Indirect cost is admin and analyst time to agree SLA targets and to review the reports.

## Scope

The roadmap record lists Microsoft Purview, the Worldwide (Standard Multi-Tenant) cloud and the web platform, with release phases of Preview (target December CY2026) and General Availability (target January CY2027). It lists no US Government clouds; that is a statement about the record, not a statement that the feature is unavailable there.

Users and licences in scope, the roles needed to view the dashboard and to define SLAs, and any prerequisites are not documented. For the existing DLP Alerts dashboard, Learn requires membership of a listed role group (for example Compliance Administrator, Security Administrator, Security Reader or Information Protection Analyst) or, to access the dashboard, the Manage alerts role plus either DLP Compliance Management or View-Only DLP Compliance Management. Do not assume the same applies to this dashboard.

## Governance guidance

### Before rollout
- Agree SLA targets for high, medium and low severity DLP alerts with the security and compliance leads, so you can enter them once the dashboard shows where.
- Review the severity set on each DLP rule in the Microsoft Purview portal, because the roadmap bases SLAs on alert severity.
- List who holds the DLP alert roles and remove membership that is no longer needed, because the dashboard is planned to show top sensitive information types from alerts.

### At rollout
- Watch the Microsoft 365 roadmap item and Message center for the preview announcement, and confirm where the dashboard appears in the Microsoft Purview portal.
- Confirm which roles can open the dashboard and which can define SLAs before granting access beyond current DLP alert analysts.
- Check whether the preview is on by default or must be enabled, since Microsoft has not stated it.

### After rollout
- Compare the dashboard's trends with the alerts you can see in the DLP Alerts dashboard to confirm which alert states it counts.
- Export or save any report you rely on, because the DLP posture reports document a 30-day rolling window and the alerts dashboard keeps alerts for 30 days.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Severity level of alerts raised by a DLP rule</strong><br><small class="controls__note">Setting under Incident reports: 'Use this severity level in admin alerts and reports'. Values: None, Low, Medium, High; None cannot be selected if the rule has no actions configured. Learn does not say the SLA dashboard reads it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule › Incident reports <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -ReportSeverityLevel High</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can view and manage DLP alerts (role group membership)</strong><br><small>Group</small><br><small class="controls__note">Existing control for the DLP Alerts dashboard roles; Learn does not say it governs the SLA dashboard. Needs the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom SLA targets for high, medium and low severity alerts</strong><br><small class="controls__note">Planned in the roadmap item; no admin path or API is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No control specific to the SLA dashboard is documented at the time of writing, so the rows above are the existing controls that bear on the alert data it would summarise, plus a row that records the missing SLA setting. The roadmap does not say how SLAs map to a rule's severity value.

Role group changes need an admin with the Role management role in the Microsoft Purview portal, per Learn. The role groups that Learn lists as able to view the DLP alerts dashboard or edit alert configuration in a DLP policy are given in Scope.

## Open questions

- Which licence covers the SLA alert reporting dashboard, and does it follow the DLP alert licensing on Learn? Watch the roadmap item and the DLP alerts Learn page.
- Is the dashboard on by default in preview, or must an administrator enable it? Watch Message center.
- Where do administrators define the SLAs for high, medium and low severity alerts, and is there a PowerShell or Graph equivalent?
- Which roles can view the dashboard and which can define SLAs, and are they the same as the DLP Alerts dashboard roles?
- How far back do the trends reach, given the 30-day availability of alerts in the DLP alerts dashboard?

<!-- rationale
risk: Low. The roadmap describes a reporting dashboard over DLP alerts, not a new enforcement or data-sharing action; the exposure that remains is who can see the alert data, which existing DLP alert roles already govern.
cost: Low. The only cost the sources show is admin and analyst time to set SLA targets and read the reports. Licensing for this dashboard is not yet published; the published DLP alert licensing covers alert configuration, not this feature.
impact: Low. Admins and DLP alert analysts are the people who would see it; end users are not mentioned in the roadmap item and nothing in it changes how DLP policies act on them.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls / admin-path: The rule severity control is reached through Microsoft Purview portal > Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Incident reports. | Found: Go to the Customize advanced DLP rules page and edit the Low volume of content detected scenarios U.S. PII Data Enhanced. 5. Scroll down to the Incident reports section | Fix: Extend controls[0].ui.path and the rendered row to 'Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Incident reports > Use this severity level in admin alerts and reports'. Set ui.docs to https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external, which documents the final setting; retain the already cited endpoint procedure for the route into the existing rule. | Source: https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure
- [supported, minor] controls[1].ui; Governance controls / admin-path: DLP alert role-group membership is managed in Microsoft Purview portal > Settings > Roles and scopes > Role groups. | Found: Go to Settings > Roles and scopes to view and manage compliance and governance roles in your organization. 2. Select Role groups. | Fix: Extend controls[1].ui.path and the rendered row to 'Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users', as documented at https://learn.microsoft.com/purview/purview-permissions. The current path stops on the correct list but does not reach membership editing. | Source: https://learn.microsoft.com/purview/purview-permissions
-->
