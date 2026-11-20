---
title: "Microsoft Copilot Studio: workflow agent node can return generated files"
slug: "microsoft-copilot-studio-generate-documents-from-the-agent-node-in-workflows"
roadmapId: 580865
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "The Agent node in Copilot Studio workflows is planned to return files an agent generates (PDF, Word, Excel, PowerPoint, CSV) for later steps to email or store. Credits are metered; Microsoft has not stated the default."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's workflows overview says workflows consume Copilot Studio capacity for each action they execute, and its billing page meters Microsoft Copilot harness experiences in Copilot Credits. A rate specific to file output is not yet published."
audiences: ["maker","power-platform-admin","finops","security"]
tags: ["copilot-studio","copilot-harness","copilot-credits","document-generation","agents","connectors","usage-based-billing","automation"]
sources:
  - title: "Microsoft 365 Roadmap 580865"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580865"
    kind: "roadmap"
  - title: "Add an agent node to a workflow (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow"
    kind: "learn"
  - title: "Workflows overview (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Harnesses in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview"
    kind: "learn"
  - title: "Files the agent creates (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/created-files-overview"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node","copilot-credits","connectors","m365-copilot-generate-documents-using-forms-in-sharepoint-with-power-automate","spending-policies"]
controls:
  - governs: "Prepaid Copilot Credits allocated to an environment and whether it draws on tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Applies across Copilot Studio. A pay-as-you-go plan linked to the environment can still be billed. The request body sets the TenantPool enforcement rule."
  - governs: "Monthly Copilot Credit limit for an individual agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api: null
    note: "Turn on Stop usage to turn the agent off when it reaches the limit. Notification threshold is set in the same pane."
  - governs: "A switch to turn off file output from the Agent node"
    scope: "other"
    ui: null
    api: null
    note: "Credit allocations and agent limits govern spend, not file output."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T21:30:10"
changes:
  - date: "2026-11-20"
    note: "New briefing: the roadmap plans file outputs from the workflow Agent node; Learn does not yet describe them, and Copilot Credit controls are the documented levers."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 52
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "bea14d48bffce58e3bf6c933598986da"
---

## What's changing

The roadmap item says the Agent node in Copilot Studio workflows can now return files that the agent generates, such as PDF, Word, Excel, PowerPoint and CSV, as workflow outputs. It works with both inline agents and existing (published) agents. Generated files appear as an ordered files output (name, content type, content) that is available to downstream steps, which can pass them to connectors to email them, save them to SharePoint or OneDrive, or attach them to records.

Microsoft Learn's page on the agent node covers choosing an existing published agent or building an inline one, and has an **Output** dropdown that controls the shape of what the agent returns. It does not yet describe a files output, so what this briefing says about the behaviour of the files output is the roadmap's description. Separately, Microsoft's harness page says the Microsoft Copilot harness natively creates and edits Word, Excel, PowerPoint and PDF files, and a preview page describes files that agents create in conversations. Those describe conversations, and this briefing does not treat them as the design of workflow file outputs.

The roadmap record lists the status as In development, with a target of November CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platform Web. The date is a target, not a commitment.

## Why it matters

This gives workflow makers a route from an AI step to a finished document and then, through a connector step, to a mailbox, a SharePoint or OneDrive location or a record. For a service owner the decisions are where those documents can go, who pays for generating them and who reviews them before they leave.

Microsoft has not stated what happens on arrival, so no source says existing workflows change. The wiki's view is to treat this as an optional capability that makers will adopt quickly, and to settle the credit controls before makers start generating documents at volume.

## Risk assessment

**Data exposure**

- An agent in a workflow can be given SharePoint knowledge, and Microsoft's page says turning on Work IQ lets it use the running user's recent mail, Teams, calendar, OneDrive and SharePoint context. A generated file can therefore carry that content, and a downstream connector step that emails or saves the file moves it beyond the run.

**Security & identity**

- Confirm which connection and identity a downstream connector uses when it sends or stores a generated file. The roadmap item does not say, and the agent node page does not yet describe the files output.

**Autonomy & actions**

- Microsoft's page says the agent decides at run time which attached tools to call, in what order and with what arguments. If a workflow sends the generated file straight to an email or storage connector, nobody reviews the document first. The page's expense example shows an approvals action that waits for a reviewer, which a maker can place before the outbound step.

**Change & support**

- Microsoft's workflows overview says results can vary when actions use AI. Plan for makers testing generated documents with the node's **Test** tab, and note that evaluations are documented as available only for new agents created in workflows, not for existing published agents.
- When an environment's prepaid capacity is fully consumed, new workflow runs are blocked until capacity is available, while running workflows complete normally.

## Cost and licensing

**Licence.** The agent node page carries Microsoft's note that the harness used to build the agent uses usage-based billing, and that using, building, testing and evaluating agents might consume Copilot Credits. The workflows overview says workflows consume Copilot Studio capacity for each action they execute. The billing overview says that for experiences powered by the Microsoft Copilot harness, credits are charged for large language model (LLM) tokens, tools and the harness itself. Credits are charged to the environment where the agent runs, from prepaid capacity or the environment's pay-as-you-go plan, and not to individual makers or users.

**Meter.** Copilot Credits. A credit rate for generating files in the Agent node is not yet published.

**Caps.** An environment allocation is not a boundary if the environment can continue drawing from tenant capacity or pay-as-you-go billing. Clearing **Draw from the available capacity in my tenant** caps prepaid consumption at the allocation, but usage can continue through a linked pay-as-you-go plan. An agent-level monthly limit with **Stop usage** turns the agent off at the limit. Azure budgets and alerts send notifications but do not stop Copilot Studio consumption. See the first two rows of the controls table.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phase General Availability. The item is In development with a target of November CY2026. The roadmap item does not list GCC, GCC High or DoD.

Makers add the node from **Workflows** in Copilot Studio and choose an existing published agent or a new agent for the workflow. Managing the credit controls needs the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. Microsoft has not published prerequisites specific to the files output.

## Governance guidance

### Before rollout

- Identify the environments where makers build Copilot Studio workflows and decide which should hold a prepaid credit allocation with **Draw from the available capacity in my tenant** cleared (controls table, row 1; Power Platform Administrator).
- Decide whether workflows that will generate documents need an agent-level monthly limit with **Stop usage** (controls table, row 2).
- Ask makers which planned workflows will email or store generated files, and which connectors those steps use.

### At rollout

- Watch the agent node page on Microsoft Learn and Message center for documentation of the files output, its default and any prerequisites.
- Ask makers to run the node's **Test** tab on a generated file before publishing a workflow that sends it outward.
- Advise makers to put an approvals action before any step that emails a generated file outside the organisation.

### After rollout

- Review **Agent flow actions** for each workflow under Licensing > Copilot Studio in the Power Platform admin center, and the **Credit usage (last 30 days)** column on the **Workflows** page.
- Sample the documents that workflows send or save, because AI results can vary.
- Revisit environment allocations and agent limits once credit use from file-generating workflows is visible.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Prepaid Copilot Credits allocated to an environment and whether it draws on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Applies across Copilot Studio. A pay-as-you-go plan linked to the environment can still be billed. The request body sets the TenantPool enforcement rule.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit for an individual agent</strong><br><small>Agent</small><br><small class="controls__note">Turn on Stop usage to turn the agent off when it reaches the limit. Notification threshold is set in the same pane.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch to turn off file output from the Agent node</strong><br><small class="controls__note">Credit allocations and agent limits govern spend, not file output.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The credit controls apply across Copilot Studio, not only to this feature: Microsoft's page says changes to shared capacity can affect other agents, workflows and features in the same environment. They govern spend, not which files an agent produces or where a workflow sends them.

At the time of writing (November 2026) Microsoft Learn documents no setting that turns off file output from the Agent node, so the third row is empty. Capacity management needs the Power Platform Administrator or Global Administrator role, or an equivalent role.

## Open questions

- Is the files output on by default for Agent nodes, or does a maker add it? Watch the agent node page on Microsoft Learn and Message center.
- Which connection and identity does a downstream connector use when it emails or saves a generated file?
- Do the 10 MB per-file limit and 28-day retention that the preview page documents for files agents create in conversations apply to workflow file outputs?
- What is the credit rate for generating files in the Agent node?
- Do inline agents in a workflow appear in **Manage Agents**, so that an agent-level monthly limit can apply to them?

<!-- rationale
risk: Medium. Generated files can be passed to connectors that email them or save them to SharePoint or OneDrive, so AI-written content can leave the workflow; credit and connector controls exist, but no file-specific switch is documented.
cost: Variable. Workflows on the Microsoft Copilot harness are billed in Copilot Credits; Microsoft has not published a credit rate specific to generating files in the Agent node.
impact: Medium. Makers who build workflows notice first; recipients of emailed or saved documents and capacity owners are affected if workflows start producing files at volume.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: 'Those describe conversations' / behaviour: The harness page and the created-files preview page describe conversations rather than workflows. | Found: The Microsoft Copilot harness powers agents and workflows built for reasoning-heavy, multi-step work. | Fix: Replace 'Those describe conversations, and this briefing does not treat them as the design of workflow file outputs.' with 'The created-files preview page describes conversations; neither page specifies the design of the Agent node files output.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview
- [contradicted, blocker] Cost and licensing: Caps; controls[0].note; Governance guidance: Before rollout / applicability: Administrators can clear tenant-capacity draw at the environment level or set it through the allocation API without a policy qualification. | Found: If a published environment group rule governs Draw from the available capacity in my tenant, you can't override the setting for an individual environment. | Fix: Add to controls[0].note and the Caps guidance: 'If a published environment-group rule governs this setting, the environment control is read-only and API updates are rejected with TenantPoolLockedByPolicy; change and republish the group rule, or remove the environment from the group before managing it independently.' The cited allocation tutorial documents this qualification. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Cost and licensing: Caps / cost: Stop usage turns an agent off when it reaches its monthly credit limit. | Found: Turn on Stop usage if the agent should be turned off when it reaches the limit. | Fix: Qualify both occurrences with: 'Limits are not applied instantly; an agent can continue responding for some time after reaching its limit, so allow margin.' Cite https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#manage-monthly-consumption-limits-for-copilot-studio-agents, which states this qualification. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness
- [supported, minor] controls[0].api; controls[0].note; Governance controls table / command: PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 writes the allocation and tenant-pool enforcement setting. | Found: All programmatic examples in this article use API version 2024-10-01. Invoke-RestMethod -Method Put; -Uri "$apiBaseUrl/licensing/allocationsV2?api-version=$apiVersion"; @{ ruleType = "TenantPool"; enabled = $false } | Fix: Keep the endpoint. Replace 'The request body sets the TenantPool enforcement rule.' with 'The request body sets allocatedEntitlements[].enforcementRules with ruleType TenantPool and enabled false to disable tenant-pool draw.' These are the properties in the cited tutorial. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The checklist tells makers to use the Test tab and approvals actions, and administrators to review workflow usage, but these have no controls rows. | Found: Ask makers to run the node's Test tab; Advise makers to put an approvals action; Review Agent flow actions ... and the Credit usage (last 30 days) column. The table contains only environment credits, agent limits and the absent file-output switch. | Fix: The Test-tab, approvals-action and workflow-usage-review checklist steps have no matching controls rows. For the smallest correction without adding rows, remove these three checklist bullets; retain the independently supported descriptions in Risk assessment.
-->
