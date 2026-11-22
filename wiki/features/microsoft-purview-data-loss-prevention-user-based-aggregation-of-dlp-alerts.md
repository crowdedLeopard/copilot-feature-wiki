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
  - title: "Get started with data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alerts-get-started"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
  - title: "Investigate data loss alerts with Microsoft Defender XDR"
    url: "https://learn.microsoft.com/defender-xdr/dlp-investigate-alerts-defender"
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
  - title: "Microsoft 365 Roadmap item 564765"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564765"
    kind: "roadmap"
  - title: "Whether a DLP rule sends an alert to admins when it matches (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-rule-based-tagging-and-auto-resolution-of-alerts-ba","microsoft-purview-data-loss-prevention-sla-based-alert-reporting-dashboard","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza"]
controls:
  - governs: "Whether a DLP rule sends an alert to admins when it matches"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Incident reports > Send an alert to admins when a rule match occurs"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -GenerateAlert <email address or SiteAdmin>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Existing rule-level alert setting, not specific to user-based aggregation; it does not set the tenant-level aggregation. Path is from Learn's endpoint DLP example policy. Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-22"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-21"
    note: "First briefing for the GCC, GCC High and DoD roadmap item for user-based aggregation of DLP alerts."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: the Set-PolicyConfig aggregation parameters are now noted, the control row that said no automation exists is removed, and the Defender XDR conditions are stated."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 63 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: the Set-PolicyConfig control row (placeholder parameter descriptions) is replaced by the rule-level alert setting; the prose listing the parameters is unchanged."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "489f6a8aee026bf376e1f847d48f8d70"
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

Learn says viewing the DLP alert management dashboard or editing alert configuration in a DLP policy needs membership of one of several role groups, including Compliance Administrator, Compliance Data Administrator and Security Administrator. The dashboard also needs the Manage alerts role plus DLP Compliance Management or View-Only DLP Compliance Management. The DLP alerts page lists Defender XDR and the Microsoft Purview portal as places to investigate alerts. The Defender guide says its built-in DLP alert tuning rule must be disabled to see DLP signals as alerts there, and requires a licence from Microsoft Office 365 E5/A5, Microsoft 365 E5/A5, Microsoft 365 E5/A5 Compliance or Microsoft 365 E5/A5 Information Protection and Governance.

## Governance guidance

### Before rollout
- Record current alert volumes per rule so you can compare after aggregation is enabled.
- Decide how analysts will handle new matches that fold into an alert they already closed.

### At rollout
- Check whether the tenant-level DLP setting for user-based alert aggregation is present in your cloud before planning around it.
- Choose a time window from the 15, 30, 45 or 60 minutes Learn lists, and pilot it before applying it widely.
- Allow up to 3 hours for alert behaviour to reflect a configuration change.

### After rollout
- Compare alert counts and time to triage against your baseline; Learn warns volume can rise for per-user aggregation.
- Confirm in Defender XDR (if licensed and the built-in DLP alert tuning rule is disabled) and the Purview portal that aggregated alerts show the entities your analysts need.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a DLP rule sends an alert to admins when it matches</strong><br><small class="controls__note">Existing rule-level alert setting, not specific to user-based aggregation; it does not set the tenant-level aggregation. Path is from Learn's endpoint DLP example policy. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule › Incident reports › Send an alert to admins when a rule match occurs <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -GenerateAlert &lt;email address or SiteAdmin&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Security & Compliance PowerShell Set-PolicyConfig reference lists -IsUserBaseDlpAlertAggregationEnabled (Boolean) and -AggregationTimeWindowForDlpAlerts (System.UInt32), but their descriptions are placeholders, so their detailed behaviour and cloud applicability are not stated there.

Alert aggregation type for single-event alerts is configured at the rule level, while the user-based option is set at the tenant level. Threshold-based aggregation is configured separately at the rule level and user-based aggregation does not apply to it.

## Open questions

- Is user-based alert aggregation on or off when it reaches GCC, GCC High and DoD? Watch the roadmap item and the DLP alerts page on Microsoft Learn.
- The roadmap says alerts aggregate by user even when multiple rules match, while Learn's preview describes alerts per rule match event per user. Which behaviour ships?
- Where in the Microsoft Purview portal is the tenant-level setting? How do the published Set-PolicyConfig aggregation parameters behave in these clouds?
- Does the Learn preview apply to GCC, GCC High and DoD, and does DoD differ from the other two clouds?

<!-- rationale
risk: Low. The roadmap describes a change to how alert events are grouped, not to what DLP policies detect, and Microsoft has not stated a default; the exposure left is analysts missing later matches folded into a closed alert.
cost: Low. Learn lists no separate licence or meter for user-based aggregation; the cost that is known is admin and analyst time to retune alert triage. The licensing for single-event alerts is a DLP subscription.
impact: Low. Mainly the compliance and security administrators and analysts who triage DLP alerts notice it.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist refers to checking tenant-level aggregation and choosing its time window, but the controls table contains only rule-level alert notifications. | Found: Check whether the tenant-level DLP setting for user-based alert aggregation is present ... Choose a time window ... Existing rule-level alert setting ... it does not set the tenant-level aggregation. | Fix: The At rollout bullets about checking the tenant-level user-based aggregation setting and choosing its time window have no corresponding controls-table row. Remove those two bullets; retain the existing behaviour explanation and Open questions without adding an unverified control row.
-->
