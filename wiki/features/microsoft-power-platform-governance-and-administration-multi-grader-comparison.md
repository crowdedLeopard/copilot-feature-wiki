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
cost: "low"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Background only: Learn says the preview Evaluate experience shows estimated Copilot Credit usage per test case."
audiences: ["maker","service-owner","change-adoption"]
tags: ["agent-evaluation","graders","copilot-studio","quality-assurance","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap item 577183"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577183"
    kind: "roadmap"
  - title: "Run evaluations and view results"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results"
    kind: "learn"
  - title: "Automate agent evaluations with Power Platform API"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api"
    kind: "learn"
  - title: "Layer 1: Interpret evaluation scores and assess readiness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/evaluation-triage-readiness"
    kind: "learn"
  - title: "Evaluate an agent (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Running and comparing existing evaluation runs (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results"
    kind: "learn"
videos: []
related: ["power-platform-maker-guidelines-copilot-studio","copilot-credits"]
controls:
  - governs: "Running and comparing existing evaluation runs"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Evaluation > Recent test results > test run > Compare with > comparison run"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results"
    api:
      kind: "power-platform-api"
      call: "POST https://api.powerplatform.com/copilotstudio/environments/{EnvironmentId}/bots/{BotId}/api/makerevaluation/testsets/{TestSetId}/run?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api"
    note: "Existing evaluations only: Microsoft has not confirmed this governs multi-grader comparison. The API runs a test set; GET .../testruns/{TestRunId} returns results. Only the starting maker sees responses."
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
  - date: "2026-11-16"
    note: "Correction: cost lowered to low, unsupported permission and no-action claims narrowed, existing-evaluation controls labelled as background, run API added, connector data-policy row removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 42 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 44 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "79049273f752a3043fdffa4dea0a9bcd"
---

## What's changing

Multi-grader comparison lets a maker compare the results of multiple graders applied to the same evaluation. The roadmap says the experience highlights agreement, differences and overall grading behaviour.

Listed capabilities are side-by-side grader comparison, score comparison, each grader's explanation and analysis of grading consistency. Results include a comparative score view, pass or fail comparison, grader explanations and the evidence behind each evaluation.

The roadmap shows a preview targeted for September CY2026 and general availability targeted for October CY2026 in Worldwide. The item does not name the product surface; it is listed under Power Platform governance and administration and Microsoft Copilot.

## Why it matters

Agent evaluation scores are only useful if the graders are reliable. Learn guidance on evaluation triage already advises validating grader reliability when run-to-run variance is high ([Handling non-determinism in scores](https://learn.microsoft.com/microsoft-copilot-studio/guidance/evaluation-triage-readiness#handling-non-determinism-in-scores)). Comparing graders directly helps a quality owner decide which evaluation method to trust before using scores as a release gate.

## Risk assessment

**Data exposure**
- Results show agent responses and evidence. Permissions for multi-grader comparison are not yet documented. Existing Copilot Studio evaluation permissions are background only; Microsoft has not confirmed they apply to this feature. For existing evaluations, Learn notes only the maker who ran a test sees responses.

**Security & identity**
- No new identity or permission model has been published.

**Autonomy & actions**
- The roadmap describes a comparison experience; it does not describe any new autonomous actions.

**Change & support**
- Teams may over-trust score agreement; Learn says up to 5% variance between runs is normal for language model graders ([Handling non-determinism in scores](https://learn.microsoft.com/microsoft-copilot-studio/guidance/evaluation-triage-readiness#handling-non-determinism-in-scores)).

## Cost and licensing

Not yet published. Background only, for evaluations in the new agent experience that Learn marks as preview: [Learn states](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro#key-concepts) that Evaluate surfaces estimated Copilot Credit usage, including at the individual test-case level. For the Microsoft Copilot harness, Microsoft documents that generating and creating agent evaluations consume credits ([usage-based billing overview](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview)). Microsoft has not said which harness multi-grader comparison uses or whether it adds charges. The only cost presently established is preparation and review time. Confirm once documentation exists.

## Scope

Makers evaluating agents, in the Worldwide cloud, on the web. The exact product (for example Copilot Studio) is not named in the roadmap text.

## Governance guidance

### Before rollout
- Confirm which product surface will host the feature.
- Define which graders your team already trusts.

### At rollout
- Use comparison on a pilot test set before changing release criteria.

### After rollout
- Review disagreements between graders and refine rubrics.
- Track credit use across evaluation runs once Microsoft documents feature-specific metering and monitoring.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running and comparing existing evaluation runs</strong><br><small>Agent</small><br><small class="controls__note">Existing evaluations only: Microsoft has not confirmed this governs multi-grader comparison. The API runs a test set; GET .../testruns/{TestRunId} returns results. Only the starting maker sees responses.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Evaluation › Recent test results › test run › Compare with › comparison run <a href="https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.powerplatform.com/copilotstudio/environments/{EnvironmentId}/bots/{BotId}/api/makerevaluation/testsets/{TestSetId}/run?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin switch for multi-grader comparison</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rows above describe existing Copilot Studio evaluations, as background. Microsoft has not confirmed that they govern multi-grader comparison, and no admin switch for the comparison itself is documented at the time of writing (November 2026). Evaluation is a maker feature. In the existing experience, Evaluate is a separate action, selected at the end of creating or editing a test set.

One documented control for existing authenticated Copilot Studio evaluations is the connector data policy: [Learn says](https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#run-a-test-with-a-test-set) that if an admin turns off the Microsoft Copilot Studio connection, makers can't run tests that use user authentication with the evaluation tool. The data policy is set in the Power Platform admin center under Security > Data and privacy > Data policy ([data policies for agents](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention)). Evaluation access can also be managed through agent sharing and the agent viewer role ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#share-evaluations-using-the-agent-viewer-role)). Neither is confirmed for the new comparison.

Existing evaluations run with the currently signed-in user profile ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro#user-profile)). Credit billing for the new feature's harness and charges are unconfirmed. The available graders are listed under [evaluation methods](https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-overview).

## Open questions

- Which product exposes the feature and which graders can be compared?
- Are there extra credit charges per grader?
- Can results be exported with grader explanations?

<!-- rationale
risk: Low. This is the wiki's assessment of the roadmap's comparison-only description; the feature's data-access details are not yet documented.
cost: Low. Only preparation and review effort is presently established; feature-specific licensing and metering are not yet published.
impact: Low. It is used by makers and quality owners who test agents.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Multi-grader comparison results show agent responses. | Found: Searched: Copilot Studio multi grader comparison agent responses evaluation data access identity; "multi-grader comparison" evaluation export explanations data access. Read standard evaluation-results and preview evaluation-view; neither documents this feature. | Fix: Replace 'Results show agent responses and evidence.' with 'The roadmap says results include evidence supporting each evaluation.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: table / admin-path: Existing run comparison is reached in Copilot Studio (maker) at agent > Evaluation > Recent test results > test run > Compare with > comparison run. | Found: In your agent's Evaluation page, under Recent test results, open the test run you want to use as the base for the comparison. Select the Compare with dropdown, and then select the time and date of the test run you want to compare with the currently open test results. | Fix: Use 'Agents > agent > Evaluation > Recent test results > test run > Compare with > comparison run'. The omitted Agents listing is documented at https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/agents-page; add that source. 'comparison run' is a valid placeholder, not an invented label. | Source: https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results#compare-test-results
- [supported, minor] Governance controls: connector data policy paragraph / admin-path: The existing connector data policy is set at Power Platform admin center > Security > Data and privacy > Data policy. | Found: On the sidebar, select Security, and then select Data and privacy. The Data protection and privacy page opens. Select Data policy. The Data policies list appears. | Fix: The path reaches the policy list but stops before configuration. Replace the sentence with 'Existing data policies are listed at Power Platform admin center > Security > Data and privacy > Data policy.' The cited page continues through choosing a policy, Edit Policy, Add an environment, Assign connectors, choosing Microsoft Copilot Studio, and Block. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] Governance controls: final paragraph / behaviour: Existing evaluations run with the currently signed-in user profile. | Found: Evaluations and connections used by tools run with the currently signed-in user profile. | Fix: Replace the sentence with 'In the preview Microsoft Copilot agent experience, evaluations and connections used by tools run with the currently signed-in user profile.' The cited standard-harness API page https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api qualifies the general statement: 'If you don't add an mcsConnectionId to your call, the evaluation runs without authentication.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro#user-profile
- [contradicted, minor] front matter: action; Governance guidance / consistency: An action rating of none fits the briefing's advice to assess grader fit and pilot the comparison. | Found: action: "none" Define which graders your team already trusts. Use comparison on a pilot test set before changing release criteria. | Fix: Set action to 'review': the standard assigns review to an optional capability needing a fit decision, while none means awareness only with nothing to configure or decide. No source establishes an automatic change or a deadline requiring prepare or act-now.
-->
