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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 33
  unconfirmed: 6
  contradicted: 4
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: previewDate; What's changing / record: The roadmap shows a preview from September 2026. | Found: "previewDate": "September CY2026", "status": "In development" | Fix: Replace 'a preview from September 2026' with 'a preview targeted for September CY2026'; the record does not establish that preview actually started.
- [supported, minor] Why it matters / behaviour: Microsoft's evaluation triage guidance advises validating grader reliability when run-to-run variance is high. | Found: If runs vary by more than 10%, investigate grader reliability before you diagnose agent problems. | Fix: Cite this evaluation-triage-readiness page beside the statement and add it to sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/guidance/evaluation-triage-readiness#handling-non-determinism-in-scores
- [supported, minor] Risk assessment: Change & support / behaviour: Variation is normal for model-based graders. | Found: Language model-based agents and graders produce variable outputs. | Fix: Cite the evaluation-triage-readiness page for this factual premise. | Source: https://learn.microsoft.com/microsoft-copilot-studio/guidance/evaluation-triage-readiness#handling-non-determinism-in-scores
- [unsupported, blocker] Risk assessment: Data exposure / applicability: Access to the new multi-grader comparison follows the existing Copilot Studio evaluation permissions. | Found: Searched: 'Copilot Studio multi grader comparison admin switch enable disable default permissions identity'; opened analytics-agent-evaluation-results and analytics-agent-evaluation-overview. Neither identifies these permissions as governing roadmap item 577183. | Fix: Replace 'Access follows evaluation permissions' with 'Permissions for multi-grader comparison are not yet documented. Existing Copilot Studio evaluation permissions are background only; Microsoft has not confirmed they apply to this feature.'
- [unsupported, major] Risk assessment: Autonomy & actions; rationale: risk / behaviour: Multi-grader comparison is analysis only and introduces no actions or agent behaviour changes. | Found: Searched: '"multi-grader" "comparison"' and 'site:learn.microsoft.com/microsoft-copilot-studio "multi-grader"'; read the roadmap description and existing evaluation results and methods pages. The record lists comparison outputs, not an assurance of no actions or behaviour changes. | Fix: Replace the categorical assurance with 'The roadmap describes a comparison experience; it does not describe any new autonomous actions.' In the rationale, label low exposure as the wiki's assessment of that description.
- [unsupported, minor] rationale: risk / behaviour: The new comparison view does not change data access. | Found: Searched: 'Copilot Studio multi grader comparison admin switch enable disable default permissions identity'; read the roadmap and analytics-agent-evaluation-results. No passage establishes the new feature's data-access boundaries. | Fix: Remove 'does not change ... data access'. Say 'Low is an assessment of the roadmap's comparison-only description; the feature's data-access details are not yet documented.'
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / cost: Copilot Studio evaluation results can show estimated Copilot Credit usage per test case. | Found: You can see which experiences use credits, an estimated total for each evaluation run, a breakdown between generating and scoring responses, and credit usage at the individual test-case level. | Fix: Cite this page and explicitly identify the statement as background about evaluations in the new agent experience, which the page marks preview. The cited standard-harness evaluation-results page does not state this credit-display fact. Do not transfer it to multi-grader comparison. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro#key-concepts
- [contradicted, blocker] front matter: cost; licensing.model; rationale: cost / consistency: The feature warrants the factual cost rating variable despite its unpublished licensing and unconfirmed product surface. | Found: cost: "variable"; licensing: model: "unknown"; rationale: 'Not yet published ... running more graders may increase consumption.' | Fix: Set cost to low and explain that only preparation and review effort is presently established, while feature-specific licensing and metering remain unpublished. The standard reserves variable for an established meter; neighbouring evaluation billing and 'may increase' do not establish this feature's meter.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Existing evaluations can be run or compared in Copilot Studio through agent > Evaluation > Evaluate / Compare with. | Found: In your agent's Evaluation page, under Recent test results, open the test run you want to use as the base for the comparison. Select the Compare with dropdown | Fix: The pre-check's missing phrase is not an invented label: Evaluate and Compare with are documented separately. Make the selection explicit: 'agent > Evaluation > Recent test results > test run > Compare with > comparison run'; describe Evaluate separately as the action after creating or editing a test set. | Source: https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results
- [contradicted, blocker] controls[0].api; Governance controls table / absence: An API for running evaluations and obtaining run results is not yet documented. | Found: Endpoint: POST https://api.powerplatform.com/copilotstudio/environments/{EnvironmentId}/bots/{BotId}/api/makerevaluation/testsets/{TestSetId}/run?api-version=2024-10-01 | Fix: Replace the null side with the documented POST run endpoint and cite this page; it also documents GET test-run results. Note that these automate existing evaluations, not a confirmed multi-grader comparison API. Split running evaluations from comparison if necessary so the comparison-specific API can remain undocumented. | Source: https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api
- [unsupported, blocker] controls[1].api; Governance controls table / command: New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell), as printed, controls whether authenticated evaluations can run. | Found: Searched the cited New-DlpPolicy reference, including its full syntax and parameters. The cmdlet and module exist, but the call supplies neither required parameter set nor a policy object blocking the Microsoft Copilot Studio connector. | Fix: Do not present a bare cmdlet/module label as a configured blocking call. The reference documents 'New-DlpPolicy -NewPolicy $NewPolicy', requiring an actual policy definition. Supply a documented blocking policy definition and the call, or omit this background row and describe the known UI control in prose rather than claim this command performs the block.
- [unsupported, blocker] controls[1]; Governance controls prose / applicability: The existing Copilot Studio connector data policy is a confirmed governance lever for this new multi-grader feature. | Found: Searched: 'Copilot Studio multi grader comparison admin switch enable disable default permissions identity'; read admin-data-loss-prevention and analytics-agent-evaluation-results. They cover existing evaluations, not the unconfirmed product surface of multi-grader comparison. | Fix: Add a note to this row: 'Existing Copilot Studio evaluation control only; Microsoft has not confirmed that it governs multi-grader comparison.' Introduce all existing-evaluation controls as background rather than controls confirmed for this roadmap feature.
- [contradicted, blocker] Governance controls prose / applicability: Data policy is the one administrative lever over existing agent evaluations. | Found: If you're the agent owner and want to grant access only to the Evaluation page of your agent, share the agent and enable the agent viewer sharing role. | Fix: Replace 'the one lever is the data policy' with 'One documented control for existing authenticated Copilot Studio evaluations is the connector data policy; evaluation access can also be managed through agent sharing and the agent viewer role.' Do not claim either governs the new comparison without confirmation. | Source: https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results
- [unsupported, blocker] Governance controls prose / cost: Evaluations consume Copilot Credits without qualification by product experience or harness. | Found: Searched: 'site:learn.microsoft.com/microsoft-copilot-studio "evaluations" "billed"'; read agents-experience/billing-credit-overview search excerpt and preview evaluation introduction. Credit billing is described for the Microsoft Copilot harness, not established for every evaluation or this feature | Fix: Replace the unqualified statement with 'For the Microsoft Copilot harness, Microsoft documents that generating and creating agent evaluations consume credits' and cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. Keep the new feature's harness and charges explicitly unconfirmed.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to track credit use across evaluation runs, but the controls table has no credit-monitoring row. | Found: Checklist: 'Track credit use across evaluation runs.' Table rows: running/comparing evaluations; connector data policy; admin comparison switch. | Fix: Add a credit-usage monitoring row qualified as background for the documented preview experience, citing https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro, or make the checklist conditional on feature-specific metering and monitoring documentation becoming available.
-->
