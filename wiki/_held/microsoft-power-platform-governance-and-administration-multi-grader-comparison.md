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
  - title: "Running evaluations and comparing runs (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results"
    kind: "learn"
  - title: "Whether evaluations with user authentication can run (Microsoft Copilot Studio connector) (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Whether evaluations with user authentication can run (Microsoft Copilot Studio connector) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
videos: []
related: ["power-platform-maker-guidelines-copilot-studio","copilot-studio-require-human-approval-for-tool-calls","copilot-credits"]
controls:
  - governs: "Running evaluations and comparing runs"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Evaluation > Evaluate / Compare with"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results"
    api: null
    note: "Maker-side. Only the maker who started a run can see the agent's responses and explanations."
  - governs: "Whether evaluations with user authentication can run (Microsoft Copilot Studio connector)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
  - governs: "Admin switch for multi-grader comparison"
    scope: "tenant"
    ui: null
    api: null
confidence: "low"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-15"
    note: "New briefing: multi-grader comparison for evaluations, in development; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running evaluations and comparing runs</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Only the maker who started a run can see the agent's responses and explanations.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Evaluation › Evaluate / Compare with <a href="https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether evaluations with user authentication can run (Microsoft Copilot Studio connector)</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin switch for multi-grader comparison</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Evaluation is a maker feature with no admin-side toggle; the one lever is the data policy, because [running a test set](https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#run-a-test-with-a-test-set) with user authentication depends on the Microsoft Copilot Studio connector. Evaluations run as the signed-in maker and consume Copilot Credits. The available graders are listed under [evaluation methods](https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-overview).

## Open questions

- Which product exposes the feature and which graders can be compared?
- Are there extra credit charges per grader?
- Can results be exported with grader explanations?

<!-- rationale
risk: Low. It is a maker-side analysis view over evaluation results and does not change agent behaviour or data access.
cost: Not yet published. Learn says evaluation runs use estimated Copilot Credits per test case, so running more graders may increase consumption.
impact: Low. It is used by makers and quality owners who test agents.
-->
