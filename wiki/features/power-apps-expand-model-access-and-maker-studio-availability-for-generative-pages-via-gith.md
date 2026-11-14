---
title: "Power Apps: GitHub models and wider availability for the generative page agent in Maker Studio"
slug: "power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith"
roadmapId: 576285
desk: "power-platform"
products: ["Power Apps"]
summary: "Makers can connect a GitHub account to choose more models for the generative page agent, extending it to regions without Power Apps GPU capacity."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "GitHub credits of the maker are consumed. Power Apps licence terms for generative pages are not restated here."
audiences: ["maker","power-platform-admin","security","finops"]
tags: ["power-apps","generative-pages","github","maker-studio","model-driven-apps","data-residency"]
sources:
  - title: "Microsoft 365 Roadmap item 576285"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576285"
    kind: "roadmap"
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
videos: []
related: ["power-apps-new-view-layout-in-model-driven-apps","data-policies"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576285 with Learn generative pages context."
version: 1
---

## What's changing

Makers can connect a GitHub account to reach more model options for the built-in generative page coding agent in the generative page designer in Maker Studio. They can create and refine pages without leaving Power Apps.

The integration also brings Maker Studio generative page authoring to regions without dedicated Power Apps GPU capacity. The roadmap says model availability through GitHub may evolve and that requests consume the maker's GitHub credits.

General availability is listed for November CY2026 in the weekly channel, version 2611.1, Worldwide only. Learn currently says GPT-4.1 is the only model in the maker experience, so this adds choice.

## Why it matters

Requests routed through GitHub leave the Power Platform AI service. For tenants with data residency commitments, this matters, especially as the feature extends to regions that lack local GPU capacity.

Spend moves to a personal or organisational GitHub account, which finance and procurement may not be tracking.

## Risk assessment

**Data exposure**
- Prompts, table schema and page content may be processed by GitHub and its model providers. Verify the data flow and residency.

**Security & identity**
- A maker links a personal GitHub account to a work tenant. Consider account ownership and offboarding.

**Autonomy & actions**
- The agent generates code that runs in model-driven apps. Review before publishing.

**Change & support**
- Model availability may change without notice, so results could vary.

## Cost and licensing

The roadmap says requests consume the maker's GitHub credits. Billing is with GitHub; Microsoft has not published a Power Platform meter for this path. Track GitHub plan use for makers who adopt it.

## Scope

Makers using Maker Studio generative pages in model-driven apps. Roadmap cloud: Worldwide only; government clouds are not listed.

## Governance guidance

### Before rollout
- [ ] Decide whether GitHub-hosted models are acceptable for your data classification.
- [ ] Agree who funds GitHub usage.

### At rollout
- [ ] Communicate to makers when and how to connect GitHub.
- [ ] Keep use to non-sensitive data until the data flow is verified.

### After rollout
- [ ] Review generated pages through normal solution review.
- [ ] Track GitHub credit use and feedback.

## Admin controls

No tenant-level control for the GitHub connection is published. Use Power Platform data policies, environment security roles and your GitHub organisation policies to constrain use. Confirm in Learn at release.

## Open questions

- Can administrators block the GitHub connection?
- Where is data processed for regions without GPU capacity?
- Which models will be offered?

<!-- rationale
risk: Medium. Prompts and page context are sent through a maker's GitHub connection, which sits outside Power Platform data governance.
cost: Variable. The roadmap says requests consume the maker's GitHub credits, billed by GitHub rather than Microsoft.
impact: Low. It affects makers in model-driven apps who author generative pages.
-->
