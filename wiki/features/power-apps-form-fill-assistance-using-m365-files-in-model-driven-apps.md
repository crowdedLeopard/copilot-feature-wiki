---
title: "Power Apps: form fill assistance using Microsoft 365 files in model-driven apps"
slug: "power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps"
roadmapId: 576280
desk: "power-platform"
products: ["Power Apps"]
summary: "Form fill assistance in model-driven apps will use Microsoft 365 files as a source for suggested form entries."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "review"
licensing:
  model: "per-user"
  notes: "Per Learn, Power Apps premium or Dynamics 365 enterprise or premium licence; unlicensed users do not see the feature."
audiences: ["power-platform-admin","maker","security","end-user"]
tags: ["power-apps","form-fill-assistance","model-driven-apps","microsoft-365-files","ai"]
sources:
  - title: "Microsoft 365 Roadmap item 576280"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576280"
    kind: "roadmap"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "FAQ about form fill assistance"
    url: "https://learn.microsoft.com/power-apps/maker/common/faq-from-filling-assistance"
    kind: "learn"
videos: []
related: ["copilot-studio-purview-information-protection-labelled-files","managed-environments"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576280."
version: 1
---

## What's changing

Form fill assistance in Power Apps is being extended to use Microsoft 365 files as a source, so users can turn existing content into form entries with less manual effort. The roadmap lists a Monthly channel, version 2701.1, January 2027 and Worldwide.

The feature scope field lists several values, including admins or makers, users enabled by admins or makers, enabled by default and always enabled, so the effective default is unclear.

Learn documents current sources: app usage, smart paste and uploaded files (txt, docx, csv, pdf and images). Files with sensitivity labels are not supported today.

## Why it matters

Pulling content from Microsoft 365 files into forms touches data governance: which files a user can reach, whether sensitivity labels are respected and whether suggestions are accurate before they enter business records.

## Risk assessment

**Data exposure**
- Suggestions may draw on file content the user can access; citations show the source.

**Security & identity**
- Labelled files are unsupported today; confirm behaviour for Microsoft 365 files.

**Autonomy & actions**
- Suggestions are not saved until accepted.

**Change & support**
- AI suggestions can be wrong; users must review them. Fields with column security are not supported.

## Cost and licensing

Learn: Power Apps model-driven apps need a Power Apps premium licence; Dynamics 365 apps need an enterprise or premium licence. Usage may be throttled. Any additional charge for the Microsoft 365 files source is not yet published.

## Scope

Model-driven apps on the web with the modern look, Worldwide (Standard Multi-Tenant). Per-column Allow form fill assistance property must be enabled.

## Governance guidance

### Before rollout
- Review environment form fill settings and column properties.
- Confirm treatment of sensitivity-labelled files.

### At rollout
- Enable for a pilot app and tables first.
- Train users to check suggestions and citations.

### After rollout
- Sample accepted suggestions for accuracy.
- Review licensing against actual use.

## Admin controls

Learn states the primary admin control is moving to the Power Platform admin center under Copilot > Settings > Power Apps > Data entry. Smart paste and the toolbar can be set at app level in the app designer.

## Open questions

- Which Microsoft 365 file locations are supported.
- Whether sensitivity labels are honoured.
- Whether the feature will be on by default.

<!-- rationale
risk: Medium. AI suggestions drawn from files could surface or mis-enter data; users must accept suggestions, which limits impact.
cost: Medium. Learn states form fill assistance requires Power Apps premium or Dynamics 365 enterprise or premium user licences.
impact: Medium. Affects users of model-driven apps with form fill assistance enabled.
-->
