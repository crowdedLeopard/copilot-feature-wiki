---
title: "Power Platform governance: multi-grader comparison for agent evaluations"
slug: "microsoft-power-platform-governance-and-administration-multi-grader-comparison"
roadmapId: 577183
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Power Platform governance and administration"]
summary: "Makers can compare results from several graders applied to the same evaluation, seeing score agreement, pass or fail differences and each grader's explanation and evidence."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "unknown"
  notes: "Not published. Existing agent evaluation in Copilot Studio reports estimated Copilot Credits per test case."
audiences: ["maker","service-owner","change-adoption"]
tags: ["agent-evaluation","graders","copilot-studio","quality-assurance","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap item 577183"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577183"
    kind: "roadmap"
  - title: "Run evaluations and view results"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results"
    kind: "learn"
videos: []
related: ["power-platform-maker-guidelines-copilot-studio","copilot-studio-require-human-approval-for-tool-calls","copilot-credits"]
confidence: "low"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-15"
    note: "New briefing: multi-grader comparison for evaluations, in development; roadmap text only."
version: 1
---

## What's changing

Multi-grader comparison lets a maker compare the results of multiple graders applied to the same evaluation. The roadmap says the experience highlights agreement, differences and overall grading behaviour.

Listed capabilities are side-by-side grader comparison, score comparison, each grader's explanation and analysis of grading consistency. Results include a comparative score view, pass or fail comparison, grader explanations and the evidence behind each evaluation.

The roadmap shows a preview from September 2026 and general availability targeted for October 2026 in Worldwide. The item does not name the product surface; it is listed under Power Platform governance and administration and Microsoft Copilot.

## Why it matters

Agent evaluation scores are only useful if the graders are reliable. Learn guidance on evaluation triage already advises validating grader reliability when run-to-run variance is high. Comparing graders directly helps a quality owner decide which evaluation method to trust before using scores as a release gate.

## Risk assessment

**Data exposure**
- Results show agent responses and evidence. Access follows evaluation permissions; Learn notes only the maker who ran a test sees responses.

**Security & identity**
- No new identity or permission model has been published.

**Autonomy & actions**
- None. It is analysis only.

**Change & support**
- Teams may over-trust score agreement; grader variation is normal for model-based graders.

## Cost and licensing

Not yet published. Learn states evaluation results show estimated Copilot Credits used per test case, so adding graders could raise consumption. Confirm once documentation exists.

## Scope

Makers evaluating agents, in the Worldwide cloud, on the web. The exact product (for example Copilot Studio) is not named in the roadmap text.

## Governance guidance

### Before rollout
- [ ] Confirm which product surface will host the feature.
- [ ] Define which graders your team already trusts.

### At rollout
- [ ] Use comparison on a pilot test set before changing release criteria.

### After rollout
- [ ] Review disagreements between graders and refine rubrics.
- [ ] Track credit use across evaluation runs.

## Admin controls

None published. No admin portal setting, policy or PowerShell control is described in the roadmap item. Evaluation access follows Copilot Studio maker permissions.

## Open questions

- Which product exposes the feature and which graders can be compared?
- Are there extra credit charges per grader?
- Can results be exported with grader explanations?

<!-- rationale
risk: Low. It is a maker-side analysis view over evaluation results and does not change agent behaviour or data access.
cost: Not yet published. Learn says evaluation runs use estimated Copilot Credits per test case, so running more graders may increase consumption.
impact: Low. It is used by makers and quality owners who test agents.
-->
