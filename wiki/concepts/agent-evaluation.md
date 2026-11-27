---
kind: "concept"
title: "Agent evaluation in Copilot Studio: how agents are tested, what the tests cost and who can limit them"
slug: "agent-evaluation"
summary: "Agent evaluation runs a set of test questions against a Copilot Studio agent and scores each answer. Administrators decide how many Copilot Credits evaluation runs can draw and whether makers may run them under an authenticated account."
created: "2026-11-27"
updated: "2026-11-27"
version: 2
tags: ["agent-evaluation","copilot-studio","graders","quality-assurance","copilot-credits","data-policies","power-platform-admin-center"]
covers: ["graders"]
sources:
  - title: "Evaluate an agent (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro"
    kind: "learn"
  - title: "Run an evaluation for an agent (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-results"
    kind: "learn"
  - title: "About agent evaluation"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-intro"
    kind: "learn"
  - title: "Automate agent evaluations with Power Platform API"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api"
    kind: "learn"
  - title: "Create a single response test set"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-create"
    kind: "learn"
  - title: "Create a conversational test set"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-multi-turn"
    kind: "learn"
  - title: "Run evaluations and view results"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-results"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Understand estimated credit usage"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-understand-display"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Connector classification"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-connector-classification"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Resource Threshold - Upsert Resource Threshold"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/resource-threshold/upsert-resource-threshold"
    kind: "learn"
  - title: "Use AI-generated conversations for agentic simulations (preview)"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-simulation-agent"
    kind: "learn"
related: ["copilot-credits","data-policies","microsoft-copilot-studio-improvements-to-agent-evaluations-experience","microsoft-copilot-studio-cost-visibility-in-agent-evaluations","microsoft-power-platform-governance-and-administration-multi-grader-comparison","dynamics-365-contact-center-copilot-and-ai-innovation-use-agentic-simulations-to-evaluate"]
controls:
  - governs: "Whether makers can run evaluations with an authenticated account"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit Policy > Add an environment > Assign connectors > connector > three dots (⋮) > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy name> -Classification <group> -Connectors <connectors>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "Block the Microsoft Copilot Studio connector. Power Platform's connector classification page lists this connector as one data policies can't block."
  - governs: "Copilot Credits allocated to an environment, and whether it draws on tenant capacity once they are used"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "The request body's TenantPool enforcement rule sets the tenant-capacity draw. Cleared, the environment stops at its allocation unless pay-as-you-go billing is linked."
  - governs: "Monthly Copilot Credit limit for one agent, and whether it stops at the limit"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit > Stop usage"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api: null
    note: "The Resource Threshold API documents thresholds for an environment resource, but Microsoft does not document how to use it for a Copilot Studio agent's monthly limit. Limits aren't applied instantly."
  - governs: "Starting an evaluation run against a test set"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Evaluate > evaluation > Evaluate"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro"
    api:
      kind: "power-platform-api"
      call: "POST https://api.powerplatform.com/copilotstudio/environments/{EnvironmentId}/bots/{BotId}/api/makerevaluation/testsets/{TestSetId}/run?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api"
    note: "Maker-side; runs as the signed-in user. The UI route is for the Microsoft Copilot harness preview; the cited evaluation API documentation describes the standard harness."
  - governs: "Tenant or environment switch that turns agent evaluation off"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026). The data policy and credit controls above are the documented levers."
confidence: "medium"
dependents: 6
changes:
  - date: "2026-11-27"
    note: "New concept page: how Copilot Studio agent evaluation works, what its runs cost in Copilot Credits, and the data policy and credit controls that limit it."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 75 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the per-agent credit limit row: no API is documented for it, and limits are not applied instantly. Added the Add an environment step to the data policy path and noted which harness the evaluation API covers."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 78
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ec73b63da201b622b910d27c7fa9c191"
---

## What it is

**Agent evaluation** is Copilot Studio's automated way to test an agent: a maker writes, imports or generates a set of test questions, runs them against the agent and gets a score for each answer. It replaces asking the agent one question at a time in the test chat with a test that can be repeated after every change, before and after the agent is published.

### How it works

- **Test cases and test sets.** A test case is one question or one whole conversation, and can include the answer the maker expects. A group of test cases is a test set. A single-response test set holds up to 100 test cases; a conversational test set holds up to 20.
- **Test methods (graders).** Each test method scores answers one way: General quality, Compare meaning, Capability use (did the agent call the right tool), Keyword match, Text similarity, Exact match, Classification and Content safety (violent, hateful, self-harm or sexual content). In the new agent experience an evaluation can carry up to five test methods, and the methods available can vary by environment.
- **The run.** Copilot Studio sends the questions, records the agent's responses, compares them with the expected answers or a quality standard, and scores each test case. Makers start runs from the **Evaluate** tab, or through the Power Platform API, which lets a run sit in a CI/CD (continuous integration and deployment) pipeline.
- **Whose identity.** Evaluations, and the connections tools use during them, run as the signed-in user. An API run with no `mcsConnectionId` runs without authentication.

Copilot Studio documents evaluation separately for agents on the standard harness and for agents on the Microsoft Copilot harness (the **Evaluate** tab in the new agent experience); the second is a production-ready preview.

Other products test agents with tools of their own, such as agentic simulations in [Dynamics 365 Contact Center](/features/dynamics-365-contact-center-copilot-and-ai-innovation-use-agentic-simulations-to-evaluate/). Those are described on their briefings, not here.

## Why it matters

Evaluation is how a team shows that an agent still answers correctly after a change to its instructions, knowledge, tools or model. Copilot Studio's **Review** panel warns when no evaluation exists or when the agent's model changed since the last one, but Microsoft documents that these warnings don't block publishing. Whether agents are tested before release therefore rests on the team's own release process.

For administrators, two things follow. On the Microsoft Copilot harness, generating and running evaluations consumes Copilot Credits, so a large test set run on every build is a spending decision for the environment. And because tools in a run use the signed-in user's connections, a run under a maker's account tests what that maker can reach, not what an ordinary user gets.

## Cost and licensing

Evaluation is paid for in [Copilot Credits](/concepts/copilot-credits/), and the harness decides when billing starts:

- **Microsoft Copilot harness.** Microsoft states that this harness charges credits from the moment you start building, and names generating and creating agent evaluations among the experiences that consume credits. The **Evaluate** tab shows an estimated total for each run, split between generating and scoring responses, and per test case. These are near-real-time estimates; the final figure appears in the agent's **Monitor** page within a few hours.
- **Standard harness.** Microsoft's billing overview says the standard harness starts billing after publish. Whether evaluation runs against a standard-harness agent consume credits is not yet published.

A credit rate specific to evaluation is not yet published; rates and purchase options are on the [Copilot Credits](/concepts/copilot-credits/) page.

## Risks and limits

- **Results expire after 89 days.** Test results are available in Copilot Studio for 89 days; export them to CSV if you need a record of what an agent scored before release.
- **Some agents can't be evaluated.** Agents set to **Authenticate manually** aren't supported, and nor are Fabric data agents. Those agents need another test route.
- **A pass reflects one user's access.** Runs use the signed-in user's identity and connections. Testing as another user means signing out and back in as that user, so a maker's pass says little about users with narrower access.
- **The data policy route may not hold.** Copilot Studio's data policy page says blocking the **Microsoft Copilot Studio** connector stops makers running evaluations with an authenticated account. Power Platform's connector classification page lists **Microsoft Copilot Studio** among connectors that can't be blocked by data policies, and says advanced connector policies can restrict those connectors. Test the policy in a non-production environment before relying on it.
- **Content safety scores are not a safety guarantee.** Microsoft says content safety evaluations don't guarantee that an agent is safe or appropriate for every scenario.
- **Evaluate shows estimates.** The credit figures in **Evaluate** are approximations; budget from **Monitor** and the Power Platform admin center.
- **GCC differences.** In Government Community Cloud, makers can't add a user profile to test sets and can't use the similarity test method.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can run evaluations with an authenticated account</strong><br><small>Environment</small><br><small class="controls__note">Block the Microsoft Copilot Studio connector. Power Platform's connector classification page lists this connector as one data policies can't block.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit Policy › Add an environment › Assign connectors › connector › three dots (⋮) › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy name&gt; -Classification &lt;group&gt; -Connectors &lt;connectors&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Credits allocated to an environment, and whether it draws on tenant capacity once they are used</strong><br><small>Environment</small><br><small class="controls__note">The request body's TenantPool enforcement rule sets the tenant-capacity draw. Cleared, the environment stops at its allocation unless pay-as-you-go billing is linked.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit for one agent, and whether it stops at the limit</strong><br><small>Agent</small><br><small class="controls__note">The Resource Threshold API documents thresholds for an environment resource, but Microsoft does not document how to use it for a Copilot Studio agent's monthly limit. Limits aren't applied instantly.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit › Stop usage <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Starting an evaluation run against a test set</strong><br><small>Agent</small><br><small class="controls__note">Maker-side; runs as the signed-in user. The UI route is for the Microsoft Copilot harness preview; the cited evaluation API documentation describes the standard harness.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Evaluate › evaluation › Evaluate <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.powerplatform.com/copilotstudio/environments/{EnvironmentId}/bots/{BotId}/api/makerevaluation/testsets/{TestSetId}/run?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/analytics-agent-evaluation-rest-api" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch that turns agent evaluation off</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026). The data policy and credit controls above are the documented levers.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Credit allocation and the tenant-capacity setting need the **Power Platform Administrator** or **Global Administrator** role, or an equivalent role that can manage licensing and capacity. Clearing **Draw from the available capacity in my tenant** does not stop consumption through a pay-as-you-go billing plan linked to the environment (**Bill to my pay-as-you-go billing plan** under **Capacity overages**). Where a published environment group rule governs the tenant-capacity setting, it can't be overridden for one environment. Azure budgets and alerts on a pay-as-you-go plan notify but don't stop usage.

These credit controls govern all Copilot Studio usage in the environment or agent, not evaluation alone. Evaluation results and per-run credit estimates appear in Copilot Studio; billed consumption appears on the agent's **Monitor** page and under **Licensing** > **Copilot Studio** in the Power Platform admin center.

## What to check

- Check the Copilot Credits allocated to each environment where makers run evaluations, and whether **Draw from the available capacity in my tenant** is selected.
- Review whether agents that run evaluations on a schedule have a monthly limit with **Stop usage** set.
- Test whether your data policy blocks authenticated evaluation runs in a test environment before relying on it.
- Confirm that release processes export evaluation results before the 89-day window closes.
- Identify agents set to **Authenticate manually**, which evaluation does not support.

## Open questions

- Do evaluation runs against agents on the standard harness consume Copilot Credits before the agent is published?
- Does a per-agent monthly limit with **Stop usage** stop evaluation runs, or only the agent's conversations?
- Which of the two Microsoft pages is right about blocking the **Microsoft Copilot Studio** connector with a data policy?
- Will Microsoft add an environment or tenant setting that turns agent evaluation off?

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: definition / behaviour: Evaluation can be performed before and after an agent is published. | Found: Evaluations: validate quality with test sets and a shared grader library before and after you publish. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-what-is-copilot-studio to sources for the statement that evaluation works before and after publication. | Source: https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-what-is-copilot-studio
-->
