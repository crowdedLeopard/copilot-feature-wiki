---
title: "Microsoft Purview Insider Risk Management: policy tuning analysis for priority content-only policies"
slug: "microsoft-purview-compliance-portal-insider-risk-management-policy-tuning-analysis-for-pri"
roadmapId: 378409
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management policy tuning analysis will cover policies that score only priority content. It shows how many users a threshold would flag. Admins must turn on Analytics first; no action is forced."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2025"
previewDate: "May CY2024"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Insider Risk Management as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. A rate or licence specific to this feature is not published."
audiences: ["security","compliance"]
tags: ["insider-risk-management","purview","analytics","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 378409"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=378409"
    kind: "roadmap"
  - title: "MC1059679: (Updated) Microsoft Purview | Insider Risk Management: Policy tuning analysis for priority content only policies"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1059679"
    kind: "message-center"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Enable analytics in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-analytics"
    kind: "learn"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm","microsoft-purview-insider-risk-management-priority-content-support-for-risky-ai-usage"]
controls:
  - governs: "Whether Insider Risk Management analytics, which real-time threshold insights depend on, is turned on"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Insider risk settings > Analytics"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-analytics"
    api: null
    note: "Role groups: Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin. Turning it off stops real-time analytics on the policy threshold pages."
  - governs: "Whether a policy scores and alerts only on activity that includes priority content"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy > Policy template > policy category > template > Content to prioritize > I want to prioritize content > Scoring > Get alerts only for activity that includes priority content"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Choose Get alerts only for activity that includes priority content on the Scoring page. The policy template must support priority content selection."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-07-08T23:15:08"
changes:
  - date: "2026-11-22"
    note: "First briefing: real-time policy tuning analysis extends to priority content-only IRM policies; GCC, GCC High and DoD rollout starts mid-December 2026 per MC1059679."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: full policy-wizard path for priority-content scoring, cumulative exfiltration wording, and removed unsupported statements on policy behaviour and one open question."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b7ffb697be7db611cef94f4d6822b5f9"
---

## What's changing

Microsoft Purview Insider Risk Management (IRM) policy tuning analysis predicts, in real time, how many users in a tenant could match a given set of policy conditions. The roadmap item states that it will now support insider risk policies scoped for priority content, meaning policies that only score and alert on activity involving content the admin has marked as a priority.

Microsoft's notice MC1059679 describes the steps. An admin turns on **Analytics** under IRM settings, creates or edits a policy scoped to all users, picks priority content types and items, and selects **Get alerts only for activity that includes priority content** on the scoring page. Microsoft says that 1-2 days after the policy is saved, editing it again shows insights for each indicator under **Choose your own thresholds** on the indicator thresholds page.

Microsoft Learn describes the underlying real-time analytics (labelled preview on Learn) as a gauge of scoped users, a top-five indicator list and per-indicator insights, all based on the previous 10 days of user activity. Learn's real-time analytics section does not mention priority-content policies, so the priority-content behaviour above rests on the notice.

The roadmap item is Rolling out, with a June CY2025 target and a May CY2024 preview, and lists General Availability and Preview as release phases. MC1059679 (last updated 10 August 2026) says Worldwide began rolling out late June 2025 and was expected to complete by late August 2025, and that GCC, GCC High and DoD begin rolling out mid-December 2026 and are expected to complete by end of December 2026. The notice sets no act-by date.

## Why it matters

Priority-content policies are narrow by design, so a wrong threshold either floods analysts with alerts or hides real activity. This change gives the policy author an estimate of how many users would cross each threshold before the policy goes live, which cuts trial-and-error retuning.

Microsoft says the feature is available by default for admins to configure and requires Analytics to be enabled. Teams that run priority-content policies should decide whether to enable Analytics, which scans audit and directory activity for the whole organisation, in exchange for the tuning data.

## Risk assessment

**Data exposure**
- Real-time analytics depends on Analytics being on. Learn says an analytics scan covers the Microsoft 365 audit logs, Exchange Online and Microsoft Entra ID, and the Microsoft 365 HR data connector if configured, and returns aggregated, anonymised user activity that reviewers cannot trace to individual usernames.
- The gauge and insights count users whose activity in the previous 10 days exceeded the lowest daily thresholds, so they show counts, not named users.

**Security & identity**
- Enabling Analytics needs membership of the Insider Risk Management or Insider Risk Management Admins role group, or the Microsoft 365 Global admin role group. Learn also says an unrestricted administrator is needed to access analytics insights, so an admin-unit-scoped admin may not see them.

**Autonomy & actions**
- Admins can adjust indicator thresholds and see the insight update in real time.

**Change & support**
- Estimates only appear for policies that use **Include all users and groups**; Learn says the View impact graph is not available with **Include specific users**. Expect support questions from authors of narrower policies.
- Learn says recommended thresholds are not provided for custom indicators or variants of built-in indicators, and that real-time analytics for threshold settings is not available for the Communication Compliance indicators.
- Turning Analytics off removes real-time analytics from the threshold pages. Cumulative exfiltration activity always receives a risk score, regardless of whether it contains prioritised content.

## Cost and licensing

Insider Risk Management is listed as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Insider Risk Management on the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description). The analytics page lists admin roles as the prerequisite for enabling analytics and names no separate licence or meter for it.

Learn's Get started page says some IRM indicators are only available with pay-as-you-go billing; nothing found ties that to policy tuning analysis. The indirect cost is admin time: enabling Analytics, waiting 24 to 48 hours for insights, then reviewing thresholds. A price or rate specific to this feature is not published.

## Scope

**Who and where.** The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD on Web. MC1059679 gives a late June 2025 start for Worldwide and a mid-December 2026 start for GCC, GCC High and DoD.

**Prerequisites.** Analytics turned on in Insider Risk Management settings by a member of the Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin role group. Learn says insights and recommendations can take 24 to 48 hours to appear. The policy must be scoped to all users and groups, and its template must support priority content selection (Learn lists Data leaks, Data leaks by priority users, Data leaks by risky users, Data theft by departing users and Risky AI usage).

## Governance guidance

### Before rollout
- Identify which IRM policies use priority content with **Get alerts only for activity that includes priority content**, and list their owners.
- Decide whether the organisation accepts an Analytics scan of audit, Exchange Online and Microsoft Entra ID activity before turning it on.

### At rollout
- Turn on **Analytics** in the IRM settings, then allow 24 to 48 hours for insights to appear.
- Edit one priority-content policy scoped to **Include all users and groups** and review the gauge and per-indicator insights on the thresholds page.

### After rollout
- Compare the estimated user counts with the alerts the policy actually generates.
- Watch Message center for GCC, GCC High and DoD, where Microsoft's notice says rollout begins mid-December 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Insider Risk Management analytics, which real-time threshold insights depend on, is turned on</strong><br><small>Tenant</small><br><small class="controls__note">Role groups: Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin. Turning it off stops real-time analytics on the policy threshold pages.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Analytics <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a policy scores and alerts only on activity that includes priority content</strong><br><small class="controls__note">Choose Get alerts only for activity that includes priority content on the Scoring page. The policy template must support priority content selection.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › Policy template › policy category › template › Content to prioritize › I want to prioritize content › Scoring › Get alerts only for activity that includes priority content <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both controls are portal-only at the time of writing (November 2026): Microsoft Learn documents no PowerShell or Graph call for the Analytics setting or the priority-content scoring option.

The Analytics setting is tenant-wide and also drives other analytics features, such as the reports under Insider Risk Management > Reports > Analytics. The scoring choice is per policy. Learn says turning Analytics off stops real-time analytics on the threshold pages.

## Open questions

- Will the feature stay labelled preview on Learn while the roadmap lists General Availability and Preview? Watch the roadmap item and the Learn page.
- Is a separate licence or meter planned for real-time analytics? None is published; watch the Microsoft Purview service description.
- Will the GCC, GCC High and DoD timeline in MC1059679 move again after the 10 August 2026 update?

<!-- rationale
risk: Low. The change adds an estimate to the policy wizard for admins; Microsoft's notice says admins must enable Analytics before it shows, and using the estimates requires Analytics to be enabled.
cost: Low. The only cost the sources show is admin time to enable Analytics and retune policies; Insider Risk Management is listed as included in the Microsoft 365 E5 family of plans named on the Purview service description.
impact: Low. The estimates are for Insider Risk Management admins and policy authors.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Analytics control is reached through Microsoft Purview portal > Settings > Insider Risk Management > Insider risk settings > Analytics. | Found: Select Settings in the upper-right corner of the page. ... Select Insider Risk Management ... Under Insider risk settings, select Analytics, and then turn off the setting. | Fix: Extend controls[0].ui.path and its rendered copy to 'Settings > Insider Risk Management > Insider risk settings > Analytics > Scan your tenant's user activity to identify potential insider risks'. The switch label is documented at https://learn.microsoft.com/purview/insider-risk-management-configure#step-3-optional-enable-and-view-insider-risk-analytics-insights, already cited. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-analytics
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The printed policy-wizard path reaches the priority-content scoring option in the Microsoft Purview portal. | Found: On the Policy template page, choose a policy category and then select the template for the new policy. ... Scoring: ... Choose Get alerts for all activity or Get alerts only for activity that includes priority content. | Fix: Use 'Insider Risk Management > Policies > Create policy > Policy template > policy category > template > Users and groups > Include all users and groups > Content to prioritize > I want to prioritize content > Scoring > Get alerts only for activity that includes priority content' in controls[1].ui.path and its rendered copy. The omitted user-scope selection is documented at https://learn.microsoft.com/purview/insider-risk-management-configure. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
-->
