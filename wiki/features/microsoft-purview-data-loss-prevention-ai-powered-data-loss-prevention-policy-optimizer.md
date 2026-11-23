---
title: "Microsoft Purview DLP: AI-powered DLP Policy Optimizer recommendations"
slug: "microsoft-purview-data-loss-prevention-ai-powered-data-loss-prevention-policy-optimizer"
roadmapId: 564616
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans an AI Policy Optimizer in Purview Data Loss Prevention that flags overlapping rules and alert noise. Preview is targeted for December 2026. Licence and default are not yet published; no action is needed yet."
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
  notes: "Not yet published: no Microsoft page found says which licence the Optimizer needs. The DLP analytics page, a separate feature, only points to Microsoft 365 plan and licensing guidance."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","ai","policy","governance"]
sources:
  - title: "Microsoft 365 Roadmap item 564616"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564616"
    kind: "roadmap"
  - title: "Get started with the data loss prevention analytics"
    url: "https://learn.microsoft.com/purview/dlp-analytics-get-started"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-rule-based-tagging-and-auto-resolution-of-alerts-ba","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-data-loss-prevention-dlp-policy-change-insights-with-security-copilot","sensitive-information-types"]
controls:
  - governs: "Whether DLP analytics, a separate policy-improvement feature, is turned on"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Turn on analytics for risk detection and policy refinement opportunities (preview)"
      docs: "https://learn.microsoft.com/purview/dlp-analytics-get-started"
    api: null
    note: "Today's nearest control, a separate preview feature. Its page does not describe it as the Optimizer or as governing it."
confidence: "low"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-15T22:55:27"
changes:
  - date: "2026-11-23"
    note: "New briefing: roadmap-only description of the planned AI DLP Policy Optimizer; Microsoft Learn does not yet document it."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 40 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 40
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f1c377ed098d5d7c24d3e079af1e9297"
---

## What's changing

Microsoft plans to add a DLP Policy Optimizer to Microsoft Purview Data Loss Prevention. The roadmap item says it uses AI to analyse an organisation's DLP policies, rule structure and activity signals, and to find optimisation opportunities that are hard to spot by hand. It lists overlapping rules, redundant conditions, misconfigurations and sources of excessive noise, and says it presents prioritised recommendations with supporting evidence and suggested actions.

Microsoft Learn does not describe the Optimizer yet, so everything above is the roadmap's description. Which signals it reads, where recommendations appear and whether an administrator must approve a change are not described. Microsoft Learn does document a separate, preview feature, DLP analytics, that reports policy improvement opportunities and is off until an administrator turns it on. It is not described as the Optimizer, and this page does not treat the two as the same.

The roadmap record shows the item as In development, with release phases General Availability and Preview, a preview date of December CY2026 and a target date of January CY2027. The record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. These dates are Microsoft's targets, not commitments.

## Why it matters

Overlapping rules and noisy conditions are what turn a DLP deployment into a stream of false positives, so a tool that points at them could cut alert volume and review time for the people who triage DLP alerts. The roadmap frames the benefit as fewer false positives, less alert noise and simpler policy management.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. The practical risk sits in how suggested actions are applied: a recommendation to remove a rule or condition that looks redundant is only safe if someone checks the evidence first. Decide now who owns that review, so the preview does not arrive with nobody assigned.

## Risk assessment

**Data exposure**
- The roadmap says the Optimizer analyses DLP policies, rule structure and activity signals. Microsoft has not said which activity data it reads or where analysis runs, so confirm both before enabling it in a tenant with data residency commitments.
- A recommendation to narrow or remove a rule could leave sensitive data less protected if accepted without review. No source describes an approval step, so treat each suggestion as a policy change to test first.

**Security & identity**
- Microsoft has not documented the role needed to see or act on recommendations. The separate DLP analytics page sets its own role requirements for that feature only, so do not assume the same roles apply here.

**Autonomy & actions**
- The roadmap says the tool presents recommendations with suggested actions. It does not say whether any action is applied automatically. Treat that as an open question rather than assuming either way.

**Change & support**
- Fewer alerts is a stated goal, so a successful change will alter what the DLP alerts queue shows. Tell triage staff before preview so a drop in volume is not mistaken for a fault in alerting.

## Cost and licensing

Not yet published: no Microsoft page found states a licence, meter or price for the Optimizer, and the roadmap item names none. The DLP analytics page, which is a separate feature, only says "For information on licensing, see" the Microsoft 365 Enterprise plans and service description pages, so it gives no entitlement for this feature either.

The cost the sources do show is indirect: administrator time to review recommendations and test any changes before applying them. Do not budget for a licence until Microsoft publishes one; watch the Microsoft 365 roadmap item and the Microsoft Purview documentation.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. It lists no US Government clouds, which is a record fact and not a statement that the Optimizer is unavailable there. Users, licences and roles in scope are not published. The record lists Preview and General Availability phases, with targets of December CY2026 and January CY2027. Prerequisites are not published.

## Governance guidance

### Before rollout
- Name an owner in the compliance or security team who will review recommendations and approve any change to a DLP policy.
- Record the current number of DLP policies, rules and monthly alerts as a baseline, so you can judge whether the Optimizer reduced noise.
- Check whether DLP analytics, the separate preview feature, is already turned on in your tenant (Microsoft Purview portal > Data loss prevention > Overview), so you know which recommendation tools staff already see.

### At rollout
- Read the Microsoft Purview documentation and Message center when preview opens to confirm the licence, roles and default before enabling it.
- Review the supporting evidence for each suggested change with the policy owner before anyone changes a rule.

### After rollout
- Compare alert volume and false-positive rates against the baseline after each accepted recommendation.
- Keep the evidence the Optimizer shows for each accepted recommendation with your change records.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP analytics, a separate policy-improvement feature, is turned on</strong><br><small>Tenant</small><br><small class="controls__note">Today's nearest control, a separate preview feature. Its page does not describe it as the Optimizer or as governing it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Turn on analytics for risk detection and policy refinement opportunities (preview) <a href="https://learn.microsoft.com/purview/dlp-analytics-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting, role or API for the Optimizer is documented at the time of writing (November 2026), so the table lists only the nearest documented control. DLP analytics is a separate feature that its page marks as preview; the page does not describe it as the Optimizer or as governing it. Its page documents a portal switch and no API. Watch Microsoft Learn for the Optimizer's own switch, roles and automation.

## Open questions

- Is the Optimizer a new feature, or an extension of DLP analytics and its Policy Improvement card? Watch the Microsoft Purview DLP documentation.
- Is the Optimizer on, off or opt-in when it reaches a tenant? Microsoft has not stated the default; watch Message center.
- Which licence and which roles are needed to see recommendations and act on them?
- Are suggested actions ever applied automatically, and can an administrator turn the Optimizer off?
- Which activity data does it analyse, and does that data leave the tenant's geography?

<!-- rationale
risk: Low. The roadmap describes recommendations with suggested actions, and no source says it changes policies or is on by default; rated on today's behaviour continuing, since Microsoft has not stated the default.
cost: Low. The only cost the sources show is admin time to review recommendations; the licence and any meter for the Optimizer are not yet published.
impact: Low. The roadmap item describes a tool for people who manage DLP policies, so compliance and security administrators notice it; no source says end users see a change.
-->
