---
title: "Copilot Studio: self-learning recommendations to refine agents"
slug: "microsoft-copilot-studio-self-learning-for-copilot-studio-agents"
roadmapId: 570432
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans a Copilot Studio feature that studies completed agent runs and recommends instruction and tool changes, including moving repeated tool sequences into workflows. Makers decide; no admin control is documented yet."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Existing Copilot Studio access entitlements apply: a Copilot Studio user license with a tenant prepaid pack, the Copilot Studio authors configuration for applicable pay-as-you-go scenarios, a Microsoft 365 Copilot license, or a trial license. Feature-specific restrictions and analysis charges are not yet published."
audiences: ["maker","power-platform-admin","finops","change-adoption"]
tags: ["copilot-studio","agents","copilot-credits","cost-management","agent-flows","automation"]
sources:
  - title: "Microsoft 365 Roadmap item 570432"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570432"
    kind: "roadmap"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "FAQ for Copilot Studio billing and licensing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/faq-billing-licensing"
    kind: "learn"
  - title: "What's new in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/whats-new"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether self-learning recommendations are available to makers"
    scope: "tenant"
    ui: null
    api: null
    note: "No switch documented at the time of writing (November 2026); a searched Learn page lists none."
  - governs: "Monthly Copilot Credit limit for an agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api: null
    note: "General spend control, not specific to this feature. Hard stop is optional (Stop usage). Not applied instantly and does not stop agent flows the agent calls."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-19"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-16"
    note: "First briefing: the feature is known only from the roadmap item, with no Learn page yet; cost controls described are general Copilot Studio ones."
  - date: "2026-11-16"
    note: "Corrected the testing-cost statement: test-chat charges depend on the harness, and this feature's harness is not stated. Removed an uncited harness-page attribution and an environment-controls reference with no table row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 54 statements contradicted, 5 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected five unsupported statements: removed the claim that workflows are agent flows, the second-agent-definition and identical-error claims, the only-lever wording and the no-administrator-asked claim."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected licensing: Copilot Studio access entitlements apply, so the model is now included; the gap is narrowed to feature-specific restrictions and charges, and the reasoning-model rate wording follows the billing page."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 80 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 80
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fb312ee39b76f339abc458bb40050c24"
---

## What's changing

Microsoft plans to let Copilot Studio agents help makers improve agents using lessons from completed runs. The roadmap item states that the feature will identify repeated tool sequences that a workflow can handle instead, to standardise agent behaviour, reduce errors and, in the item's words, "most importantly control costs".

According to the roadmap item, makers will see recommendations with supporting evidence, the expected impact and the related instruction and tool changes. Makers then accept recommendations, configure, test and publish a refined copy of the agent. The item says work that needs model judgement is preserved and makers stay in control.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so everything above about its behaviour is the roadmap's description. The roadmap record does not say which agent types, which Copilot Studio harness or which data it covers.

The record lists the status as In development, with a preview date of September CY2026 and a target date of October CY2026. Both months have passed on today's date and the record was last modified on 30 September 2026, so treat the dates as stale targets until Microsoft updates the item. The record lists the release phases as General Availability and Preview, the Worldwide (Standard Multi-Tenant) cloud and the Web platform.

## Why it matters

This is a maker-side feature that could change how production agents behave and what they cost. A refined copy of an agent is a published change: it can alter instructions and swap model-driven tool calls for workflows, so the agent's behaviour and its credit use can both move after a maker accepts a recommendation.

The cost promise is also a governance question. If the feature works as described, agents that today reason their way through the same tool sequence on every run could consume fewer Copilot Credits. Nothing in the sources lets a tenant forecast that saving or confirms the feature is free to use, so plan to watch consumption on the agents whose makers adopt it rather than budget for a saving.

## Risk assessment

**Data exposure**

- The feature draws on completed agent runs. The roadmap item does not say what run data is read, where it is processed or whether it includes user prompts, tool inputs or outputs. Until Microsoft says, assume run data in an environment can inform recommendations shown to its makers.

**Security & identity**

- Microsoft has not said which identity analyses runs or which identity runs a workflow the feature proposes. A recommendation that moves a tool sequence into a workflow could change whose permissions the step uses, so check the connection each new workflow step relies on before publishing.

**Autonomy & actions**

- The roadmap says makers accept recommendations and test and publish a refined copy, so a person decides each change. The record does not say whether an accepted recommendation can be applied without a test run or review by anyone other than the maker.

**Change & support**

- The roadmap says makers publish a refined copy of the agent. Whether it replaces the original, runs alongside it or inherits its sharing, channels and monthly credit limit is not stated, and support teams should expect questions about which version users are talking to.
- Fewer model-judged steps should make runs more repeatable, which is the roadmap's stated aim.

## Cost and licensing

Existing Copilot Studio access entitlements apply. Microsoft lists a Copilot Studio user license with a tenant prepaid pack, the Copilot Studio authors configuration for applicable pay-as-you-go scenarios, a Microsoft 365 Copilot license, or a trial license; trial licenses cannot publish agents ([Licensing for agents powered by the standard harness](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing)). Feature-specific entitlement restrictions and analysis charges are not yet published.

Agents in Copilot Studio are measured in Copilot Credits, and the Billing rates and management page describes agent flows as predefined sequences of flow actions that run repetitive tasks "without requiring agent reasoning and orchestration at each step". This is general agent-flow billing background; the roadmap does not identify the type of workflow the feature will propose. For billable standard-harness reasoning-model usage, the page lists an additional 10 Copilot Credits per 1,000 billed tokens, excluding tokens read from the prompt cache; eligible authenticated Microsoft 365 Copilot employee-facing usage is included in that licence, subject to fair usage limits and exclusions. This remains background pricing, not a verified rate for self-learning. The page also states that agent flow actions are billed separately from the agent that calls them.

Maker review, testing and publishing take time. Testing may also consume credits, depending on the harness and tools. The FAQ for Copilot Studio billing and licensing says that testing an agent in the test chat does not consume Copilot Credits for the agent's own activity, on a page that describes agents powered by the standard harness. The Microsoft Copilot harness cost page says that building, testing, evaluating and running agents on that harness can consume Copilot Credits. This feature's harness and testing charges are not stated. A per-agent monthly limit exists (see the controls table) but Microsoft's page says it does not stop agent flows the agent calls.

## Scope

The roadmap record lists Microsoft Copilot Studio as the product, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. It does not list any US Government cloud.

The record does not say which makers or agents get the feature, whether it needs a particular role or environment type, or whether it rolls out through a release channel. Copilot Studio access entitlements are those described under Cost and licensing; whether this feature adds its own restriction is not yet published. The record lists both Preview and General Availability phases. Feature-specific eligibility, prerequisites and rollout mechanics are Not yet published.

## Governance guidance

### Before rollout

- Tell makers that the feature is planned and that publishing a refined copy of an agent is a change to be tested, not a click-through.
- Identify the agents whose credit use is highest in Power Platform admin center > Licensing > Copilot Studio > Manage Agents, since they are the likeliest to attract recommendations.
- Set a monthly Copilot Credit limit and notification threshold on production agents that do not yet have one.

### At rollout

- Watch the Microsoft 365 Roadmap item and Copilot Studio What's new page for the release, and re-check the settings in Power Platform admin center for any new switch for this feature.
- Ask makers to test every refined copy in a non-production environment before they publish it.
- Compare the connections and credentials used by any workflow the feature proposes with those the original agent used.

### After rollout

- Review Copilot Credit consumption for each agent before and after a refined copy is published, including agent flow actions, which are tracked separately from the agent.
- Confirm that the original agent and its refined copy are not both shared with users unintentionally.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether self-learning recommendations are available to makers</strong><br><small>Tenant</small><br><small class="controls__note">No switch documented at the time of writing (November 2026); a searched Learn page lists none.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit for an agent</strong><br><small>Agent</small><br><small class="controls__note">General spend control, not specific to this feature. Hard stop is optional (Stop usage). Not applied instantly and does not stop agent flows the agent calls.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant, environment or agent-level switch for self-learning recommendations is documented on Microsoft Learn at the time of writing (November 2026), so plan communications around the maker-side review the roadmap describes.

The monthly limit is a general Copilot Credit control, not a control over this feature. It is set per agent, so Microsoft has not said whether a refined copy keeps the original's limit. The limit page notes that limits are not applied instantly, and that an agent's limit does not stop the agent flows it calls. The path is documented on the page for agents on the Microsoft Copilot harness, and the roadmap does not say which harness applies. At the time of writing, no API for setting the limit appeared in the Learn pages searched.

## Open questions

- Will there be a tenant, environment or maker-group setting to turn self-learning recommendations off, and where will it live? Watch the Copilot Studio What's new page and Message center.
- Which run data is analysed, where is it processed and stored, and does it include user prompts and tool outputs?
- Does the feature carry any entitlement restriction or charge beyond Copilot Studio access, and does the analysis itself consume credits?
- Does a refined copy replace the original or run beside it, and does it keep the original's sharing, channels, connections and monthly credit limit?
- The roadmap preview and target months have passed but the status is still In development. When will it reach makers?

<!-- rationale
risk: Medium. The feature reads completed agent runs and proposes changes to instructions and tools, and Microsoft documents no admin switch for it, although the roadmap says makers accept, test and publish each change.
cost: Low. The only cost the sources show is maker and admin time; the roadmap says the aim is to control costs, but no feature-specific meter, licence restriction or charge is yet published.
impact: Medium. Makers see the recommendations and publish the refined copies; end users notice only if a refined agent behaves differently from the original.
-->
