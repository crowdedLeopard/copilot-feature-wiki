---
title: "Microsoft 365 Copilot: usage reports for Copilot Search, connectors and agents in US Government clouds"
slug: "m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u"
roadmapId: 573170
desk: "admin-billing"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft 365 admin center"]
summary: "New admin centre usage reports for Copilot Search, Copilot Connectors and Copilot Agents come to GCC, GCC High and DoD, at organisation and user level."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Admin centre reports; no separate licence published."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["copilot","usage-reports","gcc","gcc-high","dod","admin-center"]
sources:
  - title: "Microsoft 365 Roadmap item 573170"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573170"
    kind: "roadmap"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
videos: []
related: ["m365-admin-center-copilot-credits-usage-report","m365-admin-center-agent-level-pay-as-you-go-controls"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 573170."
version: 1
---

## What's changing

Microsoft is introducing Microsoft 365 Copilot usage reports for Copilot Search, Copilot Connectors and Copilot Agents for US Government customers across GCC Moderate, GCC High and DoD. The reports give organisation-level and user-level insight into usage and adoption.

The roadmap target is December 2026, status In development.

Learn currently shows Copilot Search and Connectors usage reports as not available in government clouds, and Copilot Agent usage as available in Public only, which this item addresses.

## Why it matters

Government tenants lack parity with commercial reporting, which makes adoption tracking and licence reviews harder. User-level data also raises privacy and access questions.

## Risk assessment

**Data exposure**
- User-level usage data is visible to report readers.

**Security & identity**
- Access follows admin centre reader roles; pseudonymisation settings may apply.

**Autonomy & actions**
- None.

**Change & support**
- New reports may change adoption baselines and expectations.

## Cost and licensing

No cost published. Reports are part of the Microsoft 365 admin center. Not yet published: any licence prerequisite.

## Scope

GCC Moderate, GCC High and DoD tenants, for admins who can open Reports > Usage in the Microsoft 365 admin center.

## Governance guidance

### Before rollout
- Decide which roles may read user-level Copilot usage.
- Check privacy settings for reports.

### At rollout
- Add the new reports to adoption reviews.
- Brief adoption leads on the metrics.

### After rollout
- Compare usage with licence assignment.
- Review report access periodically.

## Admin controls

Reports > Usage in the Microsoft 365 admin center, as for existing Copilot reports. Report privacy settings for user names are a tenant setting. No new control is published.

## Open questions

- Exact rollout date per cloud.
- Whether Copilot Credits reporting follows.
- Metric definitions for the government clouds.

<!-- rationale
risk: Low. Read-only reporting for admins; the main care is who can see user-level data.
cost: None. Reports are part of the Microsoft 365 admin center; no licence change is published.
impact: Low. Affects admins and adoption leads in US Government tenants.
-->
