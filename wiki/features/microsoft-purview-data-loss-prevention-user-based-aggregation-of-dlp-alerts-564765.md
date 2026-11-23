---
title: "Microsoft Purview DLP: aggregate alerts by user (Worldwide)"
slug: "microsoft-purview-data-loss-prevention-user-based-aggregation-of-dlp-alerts-564765"
roadmapId: 564765
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Purview DLP can combine alert events for the same user into one alert. The roadmap shows it Launched in Worldwide; Learn still labels it preview and does not state its default. Security teams should expect changed alert volumes."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "July CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says all organisations with a DLP subscription (E1, E3, E5, F1, G1, G3, G5) can configure single-event alerts, which user-based aggregation applies to. No licence or price specific to user-based aggregation is published."
audiences: ["security","compliance"]
tags: ["purview","dlp","defender-xdr"]
sources:
  - title: "Get started with the data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alerts-get-started"
    kind: "learn"
  - title: "Learn about data loss prevention"
    url: "https://learn.microsoft.com/purview/dlp-learn-about-dlp"
    kind: "learn"
  - title: "Investigate data loss alerts with Microsoft Defender XDR"
    url: "https://learn.microsoft.com/defender-xdr/dlp-investigate-alerts-defender"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Create policy to detect and alert on U.S. PII data exposure"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 564765"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564765"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-loss-prevention-user-based-aggregation-of-dlp-alerts","microsoft-purview-data-loss-prevention-rule-based-tagging-and-auto-resolution-of-alerts-ba","microsoft-purview-data-loss-prevention-sla-based-alert-reporting-dashboard"]
controls:
  - governs: "Whether a DLP rule sends an alert to admins when it matches"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Incident reports > Send an alert to admins when a rule match occurs"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <ComplianceRuleIdParameter> -GenerateAlert <MultiValuedProperty>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Existing rule-level alert setting that raises the alerts aggregation groups; it does not enable aggregation. Path is from Learn's endpoint DLP example policy. Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-23"
    note: "First briefing for the Worldwide roadmap item for user-based aggregation of DLP alerts, launched per the roadmap while Learn still labels it preview."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: removed the unsupported 'no new data' and 'end users see no change' statements and the claim that the table lists the only documented alert control; added Learn's alert retention periods."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "2ce088260e0d5f9e96d959c42977c39c"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) can aggregate alert events for the same user into one alert object, even when several rules are matched. The roadmap item says this should reduce alert noise, simplify investigation workflows and give more context about violations.

This page covers roadmap item 564765, for Worldwide (Standard Multi-Tenant) on the web. Microsoft lists the same feature under a second roadmap item, 567010, for GCC, GCC High and DoD, which is In development with a target of January CY2027: see [/features/microsoft-purview-data-loss-prevention-user-based-aggregation-of-dlp-alerts/](/features/microsoft-purview-data-loss-prevention-user-based-aggregation-of-dlp-alerts/).

Microsoft Learn documents the behaviour as 'User and rule based alert aggregation (preview)'. It says that when user based alert aggregation is enabled in the DLP settings at the tenant level, single-event alerts are aggregated by user, the rule match events must fall within a configurable time window of 15, 30, 45 or 60 minutes, and alerts are generated per rule match event per user. Without it, Learn says events from a single rule are aggregated by default within a one-minute window for E5 and 15 minutes for E3. Threshold-based (aggregate-event) alerts are listed as not covered by user-based aggregation.

The two sources differ. The roadmap describes aggregation by user even when multiple rules match; Learn describes aggregation per rule per user. The record gives status Launched, a preview date of July CY2026, a target of August CY2026, and release phases General Availability and Preview. Learn still carries the preview label at the time of writing (November 2026).

## Why it matters

Teams that triage DLP alerts will see different alert counts and groupings once user-based aggregation is on. The roadmap expects fewer, richer alerts. Learn's comparison table for the per-user option, however, says 'Expect an increase in alert volume' for the single-user-per-rule case, so queue sizes and staffing assumptions can move either way.

Microsoft has not stated whether the feature is on when it arrives in a tenant, so no source says existing alert behaviour changes without an administrator acting. Decide in advance who may switch it on, which time window analysts will work to, and how they treat an alert that keeps collecting matches.

## Risk assessment

**Data exposure**
- The feature groups alert events that DLP rules already raise. Alert content is gated by roles: Learn says the Content preview and Matched sensitive content and context features need membership of the Content Explorer Content Viewer role group. Larger consolidated alerts put more matches behind one open alert, so check who holds that role group.
- Learn says an organisation's audit log retention policy configuration controls how long an alert remains visible in the console, so a long-running aggregated alert is bounded by that setting. Another Learn page states that DLP alerts are available for six months in Defender and 30 days in the Purview DLP alerts dashboard; confirm which limit applies to your console.

**Security & identity**
- Learn says that if an alert is closed within the aggregation window and a new match occurs for the same user and rule, the new match is aggregated into the same alert. An analyst who closes an alert early can therefore have later matches attached to it; agree a rule for reopening and review.

**Autonomy & actions**
- No change described: the roadmap and Learn describe aggregation as grouping alert events, not as an action on users or content.

**Change & support**
- Learn says it can take up to 3 hours to generate alerts after you configure or modify alerts in a DLP policy, so judge the effect only after that delay.
- Learn says the Microsoft Defender XDR dashboard is the recommended place to investigate DLP alerts, and a built-in alert tuning rule took effect in early October 2026 that sets DLP signals as behaviours instead of alerts in Defender XDR. Analysts working there may not see DLP alerts at all until the rule is disabled, which affects how any aggregation is observed.

## Cost and licensing

Learn says all organisations with a DLP subscription (E1, E3, E5, F1, G1, G3, G5) can configure policies to generate an alert every time a triggering activity occurs (single-event alert configuration). User-based aggregation is described as an option on single-event alerts, so the briefing relies on that statement; Learn publishes no licence or price specific to user-based aggregation at the time of writing (November 2026).

Threshold-based aggregated alert configuration has its own licence conditions on the same Learn page (A5, E5 or G5, or E1, F1, G1, E3 or G3 with an eligible add-on); Learn lists user-based aggregation as not applicable to threshold-based alerts.

Investigating DLP incidents in the Microsoft Defender portal needs a licence from the list on Learn's Defender XDR page (Office 365 E5/A5, Microsoft 365 E5/A5, Microsoft 365 E5/A5 Compliance or Microsoft 365 E5/A5 Information Protection and Governance). Learn documents no meter for the feature. The indirect cost is analyst time to retune triage.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and the web as the platform. GCC, GCC High and DoD are covered by the separate item 567010.

To view the DLP alert management dashboard or edit alert configuration in a DLP policy, Learn says you must be in one of these role groups: Compliance Administrator, Compliance Data Administrator, Security Administrator, Security Operator, Security Reader, Information Protection Admin, Information Protection Analyst or Information Protection Investigator. To access the dashboard itself you need the Manage alerts role and either DLP Compliance Management or View-Only DLP Compliance Management.

Learn describes the setting as a DLP setting at the tenant level.

## Governance guidance

### Before rollout
- Record current DLP alert volume per rule and analyst handling time, so that the effect of aggregation can be measured.
- List the DLP rules that raise alerts, using the rule-level alert setting in the controls table, so you know which rules the feature can group.
- Confirm which analysts hold the Manage alerts role and DLP Compliance Management or View-Only DLP Compliance Management, and who holds the Content Explorer Content Viewer role group.

### At rollout
- Ask the DLP administrator whether user based alert aggregation is enabled for the tenant: Learn describes it as a tenant-level DLP setting and gives no navigation path.
- Agree which time window (15, 30, 45 or 60 minutes) analysts will work to, and tell them how aggregation behaves when an alert is closed inside that window.
- Tell analysts who work in Microsoft Defender XDR about the October 2026 built-in alert tuning rule for DLP signals.

### After rollout
- Compare alert volume and time-to-close with the baseline once up to 3 hours have passed since the last alert configuration change.
- Review alerts closed within the window for later matches attached to them.
- Raise any gap between the roadmap description (aggregation across rules) and what the alert queue shows with your Microsoft contact.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a DLP rule sends an alert to admins when it matches</strong><br><small class="controls__note">Existing rule-level alert setting that raises the alerts aggregation groups; it does not enable aggregation. Path is from Learn's endpoint DLP example policy. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule › Incident reports › Send an alert to admins when a rule match occurs <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;ComplianceRuleIdParameter&gt; -GenerateAlert &lt;MultiValuedProperty&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The table lists an existing rule-level alert setting documented by Learn. Learn also describes tenant-level aggregation and alert threshold configuration on [Get started with the data loss prevention alerts](https://learn.microsoft.com/purview/dlp-alerts-get-started). The rule-level setting is an existing control, not a switch for user-based aggregation, and it does not enable or disable the aggregation.

Learn describes user based alert aggregation as a DLP setting at the tenant level but gives no navigation path for it. The Set-PolicyConfig reference lists the parameters -IsUserBaseDlpAlertAggregationEnabled and -AggregationTimeWindowForDlpAlerts in its syntax, but its parameter descriptions are unfilled placeholders at the time of writing (November 2026), so this page does not present them as the documented switch for the feature. Confirm in a test tenant before scripting.

In Microsoft Defender XDR, Learn says the built-in alert tuning rule for DLP signals can be disabled in Settings > Microsoft Defender XDR > Alert tuning to keep seeing DLP signals as alerts. Alert configuration needs one of the role groups listed under Scope.

## Open questions

- Does the Worldwide release aggregate across several rules for one user, as the roadmap description says, or per rule per user, as Learn's preview page says? Watch the Learn page 'Get started with the data loss prevention alerts'.
- Is user based alert aggregation on or off when it reaches a tenant, and does the GA version change the E5 one-minute and E3 15-minute defaults? Neither the roadmap nor Learn states it.
- Where is the tenant-level setting in the Microsoft Purview portal, and which cmdlet parameter, if any, sets it? Learn gives no path and the Set-PolicyConfig reference has no parameter descriptions.
- How do aggregated alerts appear in the Microsoft Defender XDR incident queue now that DLP signals are set as behaviours by default? Watch the Defender XDR page on investigating DLP alerts.
- Will Learn drop the preview label now that the roadmap item is Launched with General Availability as a release phase?

<!-- rationale
risk: Low. It changes how existing DLP alerts are grouped; Learn describes a tenant-level DLP setting, and no source says existing alert behaviour changes without an administrator acting.
cost: Low. Learn lists the licences for single-event alert configuration, which this feature modifies, and publishes no separate licence or price for user-based aggregation; the known cost is analyst and administrator time.
impact: Low. Mainly security and compliance analysts who triage DLP alerts notice it, through different alert counts and groupings.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout, analyst permissions / consistency: Every control the checklist asks readers to check appears in the controls table. | Found: Confirm which analysts hold the Manage alerts role and DLP Compliance Management or View-Only DLP Compliance Management, and who holds the Content Explorer Content Viewer role group. The table contains only Whether a DLP rule sends an alert to admins when it matches. | Fix: The Before rollout step checking analyst permissions has no controls-table row. Remove that checklist bullet; retain the verified role requirements in Scope and Risk assessment.
- [contradicted, minor] Governance guidance: At rollout, tenant aggregation setting / consistency: The tenant-level aggregation control the checklist asks readers to check appears in the controls table. | Found: Ask the DLP administrator whether user based alert aggregation is enabled for the tenant. The table contains only Whether a DLP rule sends an alert to admins when it matches, with a note that it does not enable aggregation. | Fix: The At rollout step checking the tenant-level aggregation setting has no controls-table row. Remove that checklist bullet; retain the existing explanation of the setting and documentation gap in Governance controls.
-->
