---
title: "Copilot Studio: Python Code node as a step in workflows"
slug: "microsoft-copilot-studio-run-python-code-as-a-step-in-workflows"
roadmapId: 580866
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers will be able to run Python as a step in Copilot Studio workflows. Microsoft Learn does not yet describe the Code node, its cost or any admin control for it. Admins should review workflow capacity settings."
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
  notes: "Microsoft says workflows use Copilot Studio capacity and need no separate Power Automate licence, and consume capacity for each action. A rate specific to the Code node is not yet published."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["copilot-studio","workflows","automation","copilot-credits","usage-based-billing","data-policies","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 580866"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580866"
    kind: "roadmap"
  - title: "Workflows overview (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview"
    kind: "learn"
  - title: "FAQ for workflows (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/faq-workflows"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node","copilot-credits","data-policies","microsoft-copilot-studio-share-workflows-with-co-owners-for-collaborative-editing","microsoft-copilot-studio-service-principal-owner-for-workflows"]
controls:
  - governs: "Copilot Credit allocation and overage source for an environment's workflow capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Not specific to the Code node. The request body sets enforcementRules with ruleType TenantPool. Role: Power Platform Administrator or Global Administrator, or equivalent."
  - governs: "Switch to turn the Code node off for an environment or tenant"
    scope: "environment"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T21:30:10"
changes:
  - date: "2026-11-20"
    note: "New briefing: roadmap item for a Python Code node in Copilot Studio workflows; Learn has no Code node page yet, so cost and controls rest on the workflows capacity pages."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 56
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "996092f0b19d94d1b79ebc16c979c255"
---

## What's changing

The roadmap item states that a new Code node lets makers run Python as a step in a workflow, for logic that expressions and connectors cannot handle. It lists data transforms, calculations, regex and advanced parsing, and file conversion and parsing (for example PDF → text, CSV, XML). Makers can generate the code from natural language with AI, or write and edit it by hand.

Microsoft Learn does not describe the Code node yet (at the time of writing, November 2026), so what follows about its behaviour is the roadmap's description. Learn describes workflows as the Copilot Studio automation experience powered by the Microsoft Copilot harness, and lists their action types as AI capabilities, human in the loop, built-in tools (looping and branching, data operations, date and time functions, child workflows) and connectors. It separates them from agent flows built in the classic experience.

The roadmap record shows the status as In development, with a target of November CY2026, release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. No preview date is given. These are Microsoft's targets, not commitments.

## Why it matters

A Code node puts custom logic inside a workflow that makers otherwise build from expressions and connectors. For a service owner, that raises two questions: what data a maker's Python can touch, and what each run costs. Microsoft Learn answers neither for the Code node yet.

Microsoft has not stated what happens on arrival, and no source says existing workflows change, so nothing forces a decision on the day. The sensible position is to review now: confirm your capacity and overage settings, and decide before makers ask who may use code in workflows and with which data.

## Risk assessment

**Data exposure**

- The roadmap says the node parses files such as PDF, CSV and XML, so it is aimed at document content passing through a workflow. Microsoft has not described what data the node receives, where the code runs or whether it can call outside services; confirm this before allowing it with sensitive content.
- Learn's data policy page says data policies apply to Copilot Studio agents in the environments in a policy's scope. Whether they restrict what a Code node can do is not stated.

**Security & identity**

- Microsoft has not described which identity or connection a Code node uses. Confirm this before makers put code in workflows that touch Microsoft 365 or line-of-business data.

**Autonomy & actions**

- Learn says workflows can be triggered on demand, on a schedule or by an event, so code in a published workflow can run without a person present.
- The roadmap says makers can generate the code with AI. Expect generated code to need human review before publishing; nothing documented enforces one.

**Change & support**

- Python logic is harder for colleagues who maintain expressions to read and support. Ask makers to record what each Code node does.
- Credits for each workflow appear in the **Credit usage (last 30 days)** column on the Workflows page, which lets you spot a workflow whose consumption changes after code is added.

## Cost and licensing

**Licence.** Learn's workflows FAQ says workflows use Copilot Studio capacity and do not need a separate Power Automate licence. No separate licence for the Code node is stated.

**Meter.** Workflows consume Copilot Studio capacity for each action they execute, and Learn's usage-based billing page says experiences powered by the Microsoft Copilot harness are billed in Copilot Credits. That page also says the harness charges credits from the moment you start building.

**Limits.** Learn says that once an environment's prepaid Copilot Studio capacity is fully consumed, new workflow runs are blocked until capacity is available, and running workflows complete normally. Pay-as-you-go billing is Learn's suggested way to avoid interruption. The environment allocation and overage settings are the first row in the controls table.

**Not yet published.** A Copilot Credit rate for a Code node step, and whether generating code with AI consumes credits, are not yet published.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with release phase General Availability. It lists no other clouds.

The node is for makers building workflows in Copilot Studio. Learn describes workflows as a Microsoft Copilot harness experience, created from **Workflows** > **New workflow**. Whether the Code node also appears in classic workflows is not stated.

Capacity is managed per environment. Learn says allocating credits through the Power Platform API requires the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

## Governance guidance

### Before rollout

- Check how Copilot Credits are allocated to the environments where makers build workflows, and whether each environment may draw from tenant capacity or a pay-as-you-go plan once its allocation runs out (first row of the controls table).
- Ask the makers who build workflows which ones would use Python, and agree who approves code that handles files or business data.
- Ask Microsoft account contacts or watch the Learn workflows pages for the Code node page before the November CY2026 target month.

### At rollout

- Tell makers that the Code node is a roadmap item and that Microsoft has not yet published its rate, data handling or admin controls.
- Review the **Agent flow actions** used by each workflow in the Power Platform admin center under **Licensing** > **Copilot Studio**.

### After rollout

- Compare each workflow's **Credit usage (last 30 days)** column on the Workflows page before and after code is added.
- Re-read the Code node's Learn page, once it exists, for its identity, data and credit rate, and update the capacity settings accordingly.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot Credit allocation and overage source for an environment's workflow capacity</strong><br><small>Environment</small><br><small class="controls__note">Not specific to the Code node. The request body sets enforcementRules with ruleType TenantPool. Role: Power Platform Administrator or Global Administrator, or equivalent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Copilot Studio › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to turn the Code node off for an environment or tenant</strong><br><small>Environment</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row governs the credit capacity that workflows draw on, not the Code node itself. The second row records that Microsoft Learn describes no Code-node-specific setting at the time of writing (November 2026).

Learn's tutorial notes that if a published environment group rule governs **Draw from the available capacity in my tenant**, updates to an individual environment are rejected with the `TenantPoolLockedByPolicy` error, whether made in the admin centre or through the API. If no overage source is enabled, Learn says the environment can consume only its allocated prepaid credits.

Data policies are the general control over connectors in Copilot Studio. Learn's page says they apply to Copilot Studio agents in the environments in a policy's scope; its reach over a Code node is an open question.

## Open questions

- Will Microsoft provide an admin setting to turn the Code node off for an environment or the tenant? Watch the Power Platform admin center documentation and Message center.
- What credit rate applies to a Code node step, and does generating code with AI consume credits? Watch the Learn billing rates and usage-based billing pages.
- Where does the Python run, which identity does it use, and can it make outbound calls? Watch the Learn workflows pages.
- Do data policies restrict what the Code node can do? Watch Learn's data policies page for agents.
- Is the node on by default for all workflows when it reaches General Availability, or does each maker add it? The roadmap does not say.

<!-- rationale
risk: Medium. Makers could run custom Python, including on parsed files, inside workflows, and Microsoft Learn documents no Code-node-specific admin setting at the time of writing (November 2026).
cost: Variable. Workflows consume Copilot Studio capacity (Copilot Credits) for each action they execute; a credit rate for the Code node is not yet published.
impact: Medium. Makers who build workflows notice it first; admins notice through credit consumption and any data-handling questions.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Not yet published; Open questions / absence: Whether generating code with AI consumes credits is not yet published. | Found: Copilot Credits are charged for large language model (LLM) tokens, tools (including knowledge and MCPs), and the harness itself. Any experience that uses one of these consumes credits. | Fix: Replace the billing gap with: 'A Copilot Credit rate specific to a Code-node step or its AI code generation is not yet published. Microsoft states that building experiences with natural language and using LLMs under the Microsoft Copilot harness consume credits.' In Open questions, ask for the code-generation rate rather than whether generation consumes credits. Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The capacity control is reached through Power Platform admin center > Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits. | Found: Under the Copilot Studio heading, select Manage Copilot Credits or Manage sessions. In the allocation panel, select an environment and specify the number of Copilot Credits to allocate in the Copilot Credits textbox. | Fix: The printed route is correct but ends at the panel before its controls. Keep the existing route and append ' > environment > Copilot Credits' for allocation. In the note, give the overage route in full: 'Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant or Bill to my pay-as-you-go billing plan'. Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls table / consistency: The checklist directs readers to review Agent flow actions and workflow credit-usage monitoring, but neither monitoring surface has a controls-table row. | Found: Review the Agent flow actions used by each workflow ... Compare each workflow's Credit usage (last 30 days) column ... Controls: credit allocation and overage source; switch to turn the Code node off. | Fix: The 'At rollout' Agent flow actions review and 'After rollout' Credit usage (last 30 days) comparison have no corresponding controls-table row.
- [supported, minor] Governance guidance: At rollout / admin-path: Workflow Agent flow actions usage can be reviewed in the Power Platform admin center under Licensing > Copilot Studio. | Found: To monitor credit consumption for agent flows, look for the Agent flow actions feature in the Copilot credit consumption details grid. | Fix: Expand the instruction to: 'In the Power Platform admin center, go to Licensing > Products > Copilot Studio > Environments, select the environment, and on the Copilot Credits capacity tab review Agent flow actions in the Copilot credit consumption details grid.' Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
-->
