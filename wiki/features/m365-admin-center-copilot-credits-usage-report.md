---
title: "Microsoft 365 admin center: Copilot Credits usage report for pay-as-you-go in Copilot Chat"
slug: "m365-admin-center-copilot-credits-usage-report"
roadmapId: 490738
desk: "admin-billing"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "A usage report that breaks metered Copilot Chat agent consumption down by user, billing policy, agent and agent-user pair, with alerts for users above 2,000 credits. In preview since May 2025; GA now targeted for April 2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: []
targetDate: "April CY2027"
previewDate: "May CY2025"
risk: "low"
cost: "none"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "Report appears once pay-as-you-go for Copilot Chat is set up. No licence for the report; the consumption it reports is billed in Copilot Credits."
audiences: ["m365-admin","finops","service-owner"]
tags: ["m365-admin-center","usage-reports","copilot-credits","pay-as-you-go","copilot-chat","agents","copilot-control-system","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap 490738"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=490738"
    kind: "roadmap"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
videos: []
related: ["m365-admin-center-agent-level-pay-as-you-go-controls","copilot-studio-cost-management-m365-admin-center","m365-copilot-chat-usage-based-billing-models-model-selector","copilot-credits"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
---

## What's changing

The **Microsoft Copilot Credits report** in the Microsoft 365 admin center (**Reports** > **Usage** > **Microsoft Copilot** > **Credits**) shows credits consumed by metered agent interactions in Copilot Chat: total credits used, cumulative and daily series, and breakdowns per user, per agent, per billing policy and per agent-user pair. Usage appears within about an hour of the interaction. The report flags users who exceed 2,000 credits so administrators can act before a bill surprises them.

The report has been in preview since May 2025 and is limited to 30 days of history during preview, with no data before 3 May 2025. The roadmap now targets General Availability for April 2027, two years after preview, so plan on the preview behaviour for the foreseeable future. The newer **Cost Management** dashboard under **Copilot** in the admin center covers consumption by spending policy across more services and is where Microsoft is adding new reporting.

## Why it matters

If you run pay-as-you-go for agents, this report is the earliest signal of unexpected spend. Azure Cost Management lags by up to 24 hours and shows meters, not people. The agent-user pair breakdown answers the question finance will ask: which agent, used by whom, drove last month's charge.

Its limitations matter too: 30 days of history means you need to export regularly for trend analysis, and the report covers Copilot Chat metered usage, not Copilot Studio agents billed through the Power Platform admin center.

## Risk assessment

**Data exposure**
- The report exposes per-user consumption, which is personal data about employees' tool use. Restrict the Reports Reader and Usage Summary Reports Reader roles accordingly and consider the admin center's option to anonymise user details in reports.

**Security & identity**
- Read-only report; no configuration risk.

**Autonomy & actions**
- Not applicable.

**Change & support**
- 30-day history during preview means month-end reporting must be scheduled.
- Credit counts depend on agent design (for example 10 credits for tenant graph grounding plus 2 for generative answers per prompt), so makers influence cost without seeing this report.

## Cost and licensing

- No cost for the report.
- Reports on Copilot Credits consumed through the Copilot Studio meter by users without a Microsoft 365 Copilot licence.
- Indirect: a monthly export routine while history is capped at 30 days.

## Scope

- Tenants with pay-as-you-go enabled for Copilot Chat agents (set up in the Microsoft 365 admin center or Power Platform admin center).
- Worldwide (standard multi-tenant); the usage reports overview lists Copilot reports as unavailable in some government clouds. Check the overview table for your cloud.
- Roles: any role permitted to view usage reports (Global Reader, Reports Reader, Usage Summary Reports Reader and others listed on Learn).

## Governance guidance

**Before rollout**
- Confirm who needs to see per-user consumption and whether report anonymisation should be on.
- Decide the threshold at which a user's credit use triggers a conversation (Microsoft alerts at 2,000).

**At rollout**
- Add the report to the monthly FinOps pack alongside Cost Management consumption and Azure Cost Management.
- Export the 30-day view at month end and keep the series.

**After rollout**
- Share per-agent credit totals with agent owners so design choices (grounding, generative answers) are made with cost in view.
- Watch for GA changes to history depth and for the report's data to appear in the Cost Management dashboard.

## Admin controls

- Microsoft 365 admin center > **Reports** > **Usage** > **Microsoft Copilot** > **Credits**: the report; 7- or 30-day filter.
- Microsoft 365 admin center > **Settings** > **Org settings** > **Reports**: display concealed user, group and site names.
- Microsoft 365 admin center > **Copilot** > **Cost Management** > **Consumption**: policy-based consumption view.

## Open questions

- Whether GA will extend history beyond 30 days or add export scheduling.
- How the report will relate to the Cost Management dashboard once Copilot Studio agents are governed there.

<!-- rationale
risk: Low. Read-only report; the only concern is per-user data visibility.
cost: None. Reporting on metered usage.
impact: Low. Admins and finance only.
-->
