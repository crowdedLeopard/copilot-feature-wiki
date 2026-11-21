---
title: "Microsoft Purview DLP: aggregate alerts by user (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-loss-prevention-user-based-aggregation-of-dlp-alerts"
roadmapId: 567010
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to group DLP alerts by user in GCC, GCC High and DoD, targeted January CY2027. Learn documents a preview of per-user aggregation; the default is not stated. Security teams should plan for changed alert volumes."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says all organisations with a DLP subscription (E1, E3, E5, F1, G1, G3, G5) can configure single-event alerts, which user-based aggregation modifies. No separate licence or price for user-based aggregation is published."
audiences: ["security","compliance"]
tags: ["purview","dlp","defender-xdr","gcc","gcc-high","dod"]
sources:
  - title: "Get started with the data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alerts-get-started"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 567010"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567010"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-loss-prevention-rule-based-tagging-and-auto-resolution-of-alerts-ba","microsoft-purview-data-loss-prevention-sla-based-alert-reporting-dashboard","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza"]
controls:
  - governs: "Tenant-level user-based alert aggregation and its time window"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn refers to a tenant-level DLP setting for user-based alert aggregation (15, 30, 45 or 60 minutes) but gives no path or command. Set-DlpComplianceRule -AlertProperties has no description on its reference page."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-21"
    note: "First briefing for the GCC, GCC High and DoD roadmap item for user-based aggregation of DLP alerts."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 52
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "0449b53bc4dde47df7ace1377ecc5064"
---

## What's changing

Microsoft plans to let Microsoft Purview Data Loss Prevention (DLP) combine alert events for the same user into one alert, even when several rules match. The roadmap item says this should reduce alert noise, simplify investigation and give more context about violations.

This roadmap item (567010) covers GCC, GCC High and DoD, with a General Availability release phase on the Web. Microsoft lists the same feature under a second roadmap item, 564765, for Worldwide (Standard Multi-Tenant), with status Launched and a target of August CY2026.

Microsoft Learn documents a related preview, "user and rule based alert aggregation (preview)". It says that when this is enabled in the DLP settings at the tenant level, single-event alerts are aggregated by user within a configurable time window of 15, 30, 45 or 60 minutes, and that alerts are generated per rule match event per user. Learn does not say which roadmap item or cloud that preview applies to, so what follows about behaviour is the preview documentation, not a confirmed description of the GCC, GCC High and DoD release.

The record gives status In development and a target of January CY2027. That is a target, not a commitment.

## Why it matters

Teams that triage DLP alerts will see different alert counts and groupings once user-based aggregation is on. The roadmap expects fewer, richer alerts; Learn's comparison table for the per-user option says "Expect an increase in alert volume", because it produces one alert per user per rule rather than one per rule. Plan staffing and queue thresholds for either outcome.

Microsoft has not stated whether the feature is on at arrival in these clouds, so no source says existing alert behaviour changes without an administrator acting. Decide in advance who may enable it and how analysts will treat aggregated alerts.

## Risk assessment

**Data exposure**
- Alerts carry entities such as user, file path, email recipients and subject, and the roles that open alert content are limited: Learn says the Content preview and Matched sensitive content features need membership of the Content Explorer Content Viewer role group. Check who holds it before analysts start working from larger consolidated alerts.

**Security & identity**
- Per Learn, if an alert is closed within the aggregation window and a new match occurs for the same user and rule, the new match is aggregated into the same alert. Analysts who close an alert early can therefore miss later matches; agree a rule for reopening.

**Autonomy & actions**
- The roadmap describes consolidating alert events and says nothing about new automated actions. Confirm this when Microsoft documents the feature for your cloud.

**Change & support**
- Learn says aggregation applies to single-event alerts; threshold-based aggregation lists user-based aggregation as not applicable. Learn also notes alerts can take up to 3 hours to appear after a DLP alert configuration is changed, so test changes before judging results.

## Cost and licensing

Learn's DLP alerts page says all organisations with a DLP subscription (E1, E3, E5, F1, G1, E3, G3, E5, G5) can configure single-event alerts; user-based aggregation modifies single-event alerts. The same page lists no licence specific to user-based aggregation, and no meter or price for it is published.

The page separately says threshold-based aggregated alert policies need an A5, E5 or G5 subscription, or an E1, F1, G1, E3 or G3 subscription with certain add-ons. That requirement is for threshold-based alerts and is not stated for user-based aggregation.

The cost that is known is indirect: admin time to configure and analyst time to retune triage.

## Scope

The roadmap lists GCC, GCC High and DoD, platform Web, release phase General Availability, status In development and a January CY2027 target. Microsoft's Purview planning pages for GCC and GCC High list the DLP alerts dashboard and alerting experience as Available.

Learn says viewing the DLP alert management dashboard or editing alert configuration in a DLP policy needs membership of one of several role groups, including Compliance Administrator, Compliance Data Administrator and Security Administrator. The dashboard also needs the Manage alerts role plus DLP Compliance Management or View-Only DLP Compliance Management. Alerts can be investigated in Microsoft Defender XDR and in the Microsoft Purview portal.

## Governance guidance

### Before rollout
- Identify who triages DLP alerts today and which role groups they hold, using the roles Learn lists for the DLP alert management dashboard.
- Record current alert volumes per rule so you can compare after aggregation is enabled.
- Decide how analysts will handle new matches that fold into an alert they already closed.

### At rollout
- Check whether the tenant-level DLP setting for user-based alert aggregation is present in your cloud before planning around it.
- Choose a time window from the 15, 30, 45 or 60 minutes Learn lists, and pilot it before applying it widely.
- Allow up to 3 hours for alert behaviour to reflect a configuration change.

### After rollout
- Compare alert counts and time to triage against your baseline; Learn warns volume can rise for per-user aggregation.
- Confirm in Defender XDR and the Purview portal that aggregated alerts show the entities your analysts need.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-level user-based alert aggregation and its time window</strong><br><small>Tenant</small><br><small class="controls__note">Learn refers to a tenant-level DLP setting for user-based alert aggregation (15, 30, 45 or 60 minutes) but gives no path or command. Set-DlpComplianceRule -AlertProperties has no description on its reference page.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn refers to a DLP setting at the tenant level that turns user-based alert aggregation on or off and sets the time window, but gives no admin centre path for it and no command or API for it at the time of writing (November 2026). Treat any path you find as unverified until Microsoft documents it.

Alert aggregation type for single-event alerts is configured at the rule level, while the user-based option is set at the tenant level. Threshold-based aggregation is configured separately at the rule level and user-based aggregation does not apply to it.

## Open questions

- Is user-based alert aggregation on or off when it reaches GCC, GCC High and DoD? Watch the roadmap item and the DLP alerts page on Microsoft Learn.
- The roadmap says alerts aggregate by user even when multiple rules match, while Learn's preview describes alerts per rule match event per user. Which behaviour ships?
- Where in the Microsoft Purview portal is the tenant-level setting, and is there a PowerShell or API equivalent?
- Does the Learn preview apply to GCC, GCC High and DoD, and does DoD differ from the other two clouds?

<!-- rationale
risk: Low. The roadmap describes a change to how alert events are grouped, not to what DLP policies detect, and Microsoft has not stated a default; the exposure left is analysts missing later matches folded into a closed alert.
cost: Low. Learn lists no separate licence or meter for user-based aggregation; the cost that is known is admin and analyst time to retune alert triage. The licensing for single-event alerts is a DLP subscription.
impact: Low. Mainly the compliance and security administrators and analysts who triage DLP alerts notice it; end users do not see alerts.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui/api; controls[0].note; Governance controls; Open questions / absence: Neither an admin UI route nor a command or API for tenant-level user-based aggregation and its time window is documented. | Found: Set-PolicyConfig ... [-AggregationTimeWindowForDlpAlerts <System.UInt32>] ... [-IsUserBaseDlpAlertAggregationEnabled <Boolean>] | Fix: Remove the both-null control row rather than claiming that no automation is published. Replace the blanket command absence in Governance controls with: 'The Security & Compliance PowerShell Set-PolicyConfig reference lists -IsUserBaseDlpAlertAggregationEnabled (Boolean) and -AggregationTimeWindowForDlpAlerts (System.UInt32), but their descriptions are placeholders, so their detailed behaviour and cloud applicability are not stated there.' Cite https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig. Replace the automation part of the open question with 'How do the published Set-PolicyConfig aggregation parameters behave in these clouds?' Do not infer the time parameter's units or allowed values from its name. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: second paragraph / record: Microsoft lists the same feature under roadmap item 564765. | Found: "id": 564765, "title": "Microsoft Purview: Data Loss Prevention - User Based Aggregation of DLP Alerts" | Fix: Add the source 'Microsoft 365 Roadmap item 564765' at https://www.microsoft.com/microsoft-365/roadmap?id=564765 for the second item's title, cloud, status and target.
- [supported, minor] Scope; Governance guidance: After rollout / availability: DLP alerts can be investigated in Microsoft Defender XDR. | Found: DLP alerts can be investigated and managed in the Microsoft Defender XDR dashboard ... Other page: When the built-in DLP alert tuning rule is disabled, you can manage and respond to ... DLP alerts and incidents in the Microsoft Defender portal. | Fix: Cite https://learn.microsoft.com/defender-xdr/dlp-investigate-alerts-defender and replace the Defender sentence with: 'The DLP alerts page lists Defender XDR as an investigation surface; the Defender guide says its built-in DLP alert tuning rule must be disabled to see DLP signals as alerts and requires Microsoft Office 365 E5/A5, Microsoft 365 E5/A5, Microsoft 365 E5/A5 Compliance or Microsoft 365 E5/A5 Information Protection and Governance.' Qualify the After rollout check with 'if licensed and the built-in DLP alert tuning rule is disabled'. | Source: https://learn.microsoft.com/purview/dlp-alerts-get-started
- [unsupported, minor] rationale: impact / behaviour: End users do not see alerts. | Found: Searched: DLP alerts end users see alerts security administrators. Read dlp-alerts-get-started and dlp-alert-investigation-learn; dashboard role requirements do not establish a universal exclusion, and notifications can be sent to users. | Fix: Remove '; end users do not see alerts' from the impact rationale. Retain the assessment that the change mainly affects administrators and analysts who triage DLP alerts.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The governance checklist asks readers to take stock of alert-access role groups, but the controls table has no corresponding row. | Found: Identify who triages DLP alerts today and which role groups they hold ... Table: Tenant-level user-based alert aggregation and its time window | Fix: The Before rollout role-group inventory step has no corresponding control row. Remove that checklist bullet to resolve the mismatch without adding an unverified row; keep the documented role requirements in Scope.
-->
