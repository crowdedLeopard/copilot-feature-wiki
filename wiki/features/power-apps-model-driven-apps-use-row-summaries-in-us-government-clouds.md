---
title: "Power Apps: row summaries in model-driven apps reach GCC and GCC High"
slug: "power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds"
roadmapId: 576279
desk: "power-platform"
products: ["Power Apps"]
summary: "AI-generated row summaries become available in model-driven apps in GCC and GCC High, in the weekly release channel from version 2611.1."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn: Power Apps premium for model-driven apps; Dynamics 365 enterprise or premium for Dynamics 365 apps. Government terms may differ."
audiences: ["power-platform-admin","compliance","maker","end-user"]
tags: ["power-apps","model-driven-apps","row-summary","gcc","gcc-high","copilot"]
sources:
  - title: "Microsoft 365 Roadmap item 576279"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576279"
    kind: "roadmap"
  - title: "Use row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries"
    kind: "learn"
  - title: "Configure a row summary for a model-driven app"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary"
    kind: "learn"
videos: []
related: ["power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","managed-environments"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-23T23:10:38"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576279 with Learn admin control details."
version: 1
---

## What's changing

Row summaries give users an AI-generated overview of a record in a model-driven app. The roadmap says the feature already available to commercial customers is expanding to supported US Government clouds, GCC and GCC High, with applicable compliance and data-boundary requirements met.

Per Learn, summaries appear in an Insights bar on main forms and through a Summary action on view pages. Makers write a prompt per table that names the columns to include.

The roadmap lists general availability for November CY2026, weekly channel, version 2611.1. Admins and makers enable and configure the feature.

## Why it matters

Government tenants have often waited for commercial AI features. Once available, users may expect summaries immediately, and makers may configure prompts over sensitive columns.

Service owners should confirm that the compliance boundary Microsoft describes matches their own authorisation and assurance requirements.

## Risk assessment

**Data exposure**
- Prompts decide which columns are summarised. Over-broad prompts can surface sensitive values in a new place.

**Security & identity**
- Summaries respect the user's access to the record. Learn also notes column security limits for form fill; check behaviour for secured columns.

**Autonomy & actions**
- Read-only summarisation. No actions are taken on records.

**Change & support**
- Summaries may be wrong. Provide guidance for users and a feedback path.

## Cost and licensing

Learn states that users need a Power Apps premium licence for model-driven apps, or a Dynamics 365 enterprise or premium licence for Dynamics 365 apps, and that the feature is hidden without one. Usage may be subject to service limits. Government-specific pricing is not yet published.

## Scope

Model-driven apps in GCC and GCC High. DoD is not listed. Weekly release channel, version 2611.1.

## Governance guidance

### Before rollout
- [ ] Confirm the data boundary statement meets your authorisation requirements.
- [ ] Identify tables where summaries would be sensitive.
- [ ] Check that users hold the right licences.

### At rollout
- [ ] Enable Row summaries for a pilot environment under Copilot > Settings > Power Apps > Summary.
- [ ] Review maker prompts before applying them to main forms and views.

### After rollout
- [ ] Review user feedback on accuracy.
- [ ] Revisit prompts when columns or security roles change.

## Admin controls

In the Power Platform admin center, go to Copilot > Settings, locate Row summaries under Power Apps > Summary, select the environment and choose Edit setting. Makers configure prompts under Tables > Customizations > Row summary and can hide a summary with Show row summary. The older AI insight cards setting is being removed.

## Open questions

- Which government environments will receive the feature first?
- Are the underlying models the same as in commercial clouds?
- Will DoD follow?

<!-- rationale
risk: Medium. It sends record data to a generative AI service in regulated clouds, so data boundary and compliance assessments need an update.
cost: Low. Learn says users need a Power Apps premium or Dynamics 365 licence; the cost for most tenants is review and communication.
impact: Medium. Users of enabled model-driven apps in government environments see summaries on forms and views.
-->
