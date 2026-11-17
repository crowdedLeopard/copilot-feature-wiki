---
title: "Copilot Studio: cost visibility in Preview chat and History"
slug: "microsoft-copilot-studio-cost-visibility-in-preview-chat-and-history"
roadmapId: 571194
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers will see Copilot Credit costs in the Preview tab and agent history while testing. It is a display change for makers; administrators decide who may build and how many credits each environment can spend."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn states that agents powered by the Microsoft Copilot harness bill Copilot Credits for all usage, including testing. Pricing specific to the cost display is not yet published."
audiences: ["maker","power-platform-admin","finops"]
tags: ["copilot-studio","copilot-credits","cost-management","usage-based-billing","copilot-harness","finops","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 571194"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571194"
    kind: "roadmap"
  - title: "Preview and test an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/preview-overview"
    kind: "learn"
  - title: "Manage preview conversations (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/preview-history"
    kind: "learn"
  - title: "Understand estimated credit usage"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-understand-display"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
videos: []
related: ["copilot-credits","copilot-studio-cost-management-m365-admin-center","m365-admin-center-copilot-credits-usage-report"]
controls:
  - governs: "Prepaid Copilot Credits allocated to an environment, and whether it can draw on tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Copilot Credits > environment"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with entitlementId MCSMessages and a TenantPool enforcement rule"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Power Platform Administrator, Global Administrator or an equivalent licensing role. General control: it caps credit spend, not the display."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap item for cost visibility in Preview chat and History, alongside the Learn pages that describe credit estimates for Microsoft Copilot harness agents."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 43
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "b44176fc93ad039725dfb681e1572b6e"
---

## What's changing

The roadmap item says makers will see their consumption costs inside the Preview tab and in agent history, for preview and testing usage and for every historical run, so they can see costs as they test, iterate and review conversations. The record lists status In development, a target of September CY2026, Worldwide (Standard Multi-Tenant), General Availability and the Web platform. That target month has passed and the record still says In development. The item has no more-info link and does not say which kind of agent it covers.

Microsoft Learn already describes something close for agents powered by the Microsoft Copilot harness. The Preview chat shows a running total of estimated Copilot Credits used during the current test session, and the History view in the Preview tab has a **Credits used** column for past conversations. Learn does not say whether these pages are the shipped form of this roadmap item, so treat the roadmap text as the plan and the Learn pages as the documented behaviour for that harness.

The figures are estimates. Learn says the Preview and Evaluate estimates are near-real-time approximations, and that the Monitor page, updated a few times a day, shows the accurate number of credits consumed. Learn describes Monitor as the final figure and the one that reflects what is billed for the period.

## Why it matters

Cost becomes visible at build time, which matters most for agents powered by the Microsoft Copilot harness. Learn says that harness charges Copilot Credits from the moment someone starts building, and that previewing and testing consume credits. Makers can now compare how prompts, knowledge sources and tools change consumption before publishing, and service owners can expect questions about why a test session used credits.

Microsoft has not stated whether this display is on for every maker or can be switched off, so plan on makers in affected environments seeing it. The display does not cap anything: the environment's credit allocation does that, and when an environment has no credits available, experiences that need them can stop working for makers and end users alike.

## Risk assessment

**Data exposure**

- The Learn pages show credit figures beside existing conversation details such as status, duration and steps; they describe no new data source. Test conversations in History already hold full transcripts, so the same access considerations apply to who can open an agent in Copilot Studio.

**Security & identity**

- Learn says credits are charged to the environment where the agent runs, not to the maker or user. A maker's test spend therefore lands on a shared environment allocation or pay-as-you-go plan. Which makers can see another maker's History credit figures is not stated.

**Autonomy & actions**

- No agent action changes: the feature is a display. The risk is interpretive: a maker may read a Preview estimate as the bill, when Learn names Monitor as the source of truth.

**Change & support**

- Expect makers to raise credit questions with the Power Platform admin team once they see figures. Prepare an answer on allocations, and on the gap between the estimate and Monitor, which Learn says is delayed by a few hours.

## Cost and licensing

The display is not described as having its own licence. For agents powered by the Microsoft Copilot harness, Learn says building, testing, evaluating and running consume Copilot Credits, and that this usage isn't included with a user's Microsoft 365 Copilot licence. Its table of what consumes credits lists these agents as billed for all usage, regardless of the user's licence.

Credits are charged to the environment where the agent runs, from prepaid capacity or through the environment's pay-as-you-go billing plan. The same page says developer environments and trial environments move to usage-based billing on 1 September 2026, so test sessions there can become billed. Read the [usage-based billing overview](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview) and the [cost management page](https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness) for the meter.

Not yet published: any rate or charge specific to this display, and whether the roadmap item also covers agents that are not powered by the Microsoft Copilot harness.

## Scope

The roadmap item targets makers using Copilot Studio on the web, in the Worldwide (Standard Multi-Tenant) cloud. Other clouds are not listed on the roadmap item.

The Learn pages for the Preview credit display and the History **Credits used** column are written for agents created with the Microsoft Copilot harness, and the History page lists such an agent as a prerequisite. Learn does not state a rollout mechanism, release channel or licence prerequisite for the roadmap item itself. Managing credit allocations needs the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

## Governance guidance

### Before rollout

- Identify which environments host agents powered by the Microsoft Copilot harness, using the **Harness** column in the Power Platform admin center agent inventory (Manage > Copilot Studio), and who builds in them.
- Review the credit allocation and the **Draw from the available capacity in my tenant** setting for those environments (first row of the controls table).
- Brief makers that Preview and History figures are estimates and that the Monitor page in Copilot Studio shows the final credit figure.

### At rollout

- Check that a maker in a test environment sees the running total in the Preview chat and the **Credits used** column under History, and record the build or date you checked.
- Confirm which agent types show the figures, since the roadmap item does not say.

### After rollout

- Compare a sample of Preview estimates with the agent's Monitor figures to see how far they diverge.
- Revisit environment allocations if test usage turns out to be a material share of consumption.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Prepaid Copilot Credits allocated to an environment, and whether it can draw on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator, Global Administrator or an equivalent licensing role. General control: it caps credit spend, not the display.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Copilot Credits › environment <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with entitlementId MCSMessages and a TenantPool enforcement rule</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin setting for the cost display itself is documented at the time of writing (November 2026). The row above governs the spend that the display reveals. It does not hide or show the figures.

The Power Platform admin center also offers an agent-level monthly limit with a notification threshold and a **Stop usage** option: go to Licensing > Copilot Studio, select **Manage Agents**, select the agent, then **Set limit**. Learn describes this on the [cost management page](https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness). If an environment group rule governs the draw setting, updates made through the admin center or the API are rejected with the `TenantPoolLockedByPolicy` error.

## Open questions

- Does the roadmap item cover only agents powered by the Microsoft Copilot harness, or also standard harness agents? Watch the Learn pages on the Preview tab and the Microsoft 365 Roadmap.
- Is the display on by default for all makers, and is there an admin or maker switch? Watch Message center and the Preview pages.
- Who can see the History credit figures for an agent: only the maker who ran the test, or every maker with access to the agent?
- Will the Preview and History estimates move closer to the Monitor figures at general availability, and what delay should makers expect?

<!-- rationale
risk: Low. The roadmap item describes cost visibility for makers, not new data access or new actions; the spend it reveals is governed by existing credit allocations.
cost: Variable. Testing agents powered by the Microsoft Copilot harness consumes Copilot Credits, a metered charge billed to the environment; Learn describes no separate charge for the display.
impact: Medium. Makers who test agents in Copilot Studio are the people who see the figures; end users and most administrators do not notice it.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; Why it matters; controls[0].note; rationale: risk / cost: Environment credit allocations cap credit spending. | Found: An allocation isn't a boundary if the environment can continue drawing from tenant capacity or pay-as-you-go billing. ... This setting doesn't prevent consumption through a pay-as-you-go billing plan linked to the environment. | Fix: Replace the cap claim and row note with: 'Environment allocations govern prepaid capacity. To contain prepaid consumption, clear Draw from the available capacity in my tenant; usage can still continue through a linked pay-as-you-go billing plan.' In the summary replace 'how many credits each environment can spend' with 'each environment's prepaid credit allocation'. Keep this qualification wherever allocations are described as controlling spend. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The cited allocation UI path is Licensing > Copilot Studio > Manage Copilot Credits > environment. | Found: In the navigation pane, select Licensing. Under Products, select Copilot Studio, and then select Manage Copilot Credits. ... Under Allocate capacity ... Under Capacity overages, select or clear Draw from the available capacity in my tenant | Fix: Replace the structured and rendered path with 'Licensing > Products > Copilot Studio > Manage Copilot Credits > environment'. The cited page explicitly names the Products heading. When giving the draw-setting location, use 'Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant'. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, blocker] controls[0].api; Governance controls table / command: The printed PUT call with prose about MCSMessages and a TenantPool rule is a complete allocation operation. | Found: scope = @{ environmentId = $environmentId } ... entitlementId = "MCSMessages" ... allocation = @{ quantity = 5000 } ... @{ ruleType = "TenantPool"; enabled = $false } ... -Headers $headers -ContentType "application/json" -Body $allocationBody | Fix: The endpoint and version exist; the pre-check's literal-string warning is not an endpoint error. Replace the prose call with 'PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01' and explicitly include Authorization: Bearer <access-token>, Content-Type: application/json, and body {"scope":{"environmentId":"<environment-id>"},"allocatedEntitlements":[{"entitlementId":"MCSMessages","allocation":{"quantity":<credit-quantity>},"enforcementRules":[{"ruleType":"TenantPool","enabled":false}]}]}. Identify this as allocating prepaid credits and disabling tenant-pool draw, not stopping linked pay-as-you-go consumption. Use the same complete request in the rendered table. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Autonomy & actions; Governance guidance: Before rollout / behaviour: Monitor is the final billed-credit figure and source of truth for the period. | Found: the number might not reflect the entire bill until all activities for the selected period are processed. Once processing is complete, these values are the authoritative measure of credits consumed. | Fix: Qualify the final-figure statement with: 'Monitor becomes authoritative for the selected period once all its activities have been processed; before then it might not reflect the entire bill.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-understand-display
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist's instruction to take stock of agents through the Harness inventory has a corresponding controls-table row. | Found: Identify which environments host agents powered by the Microsoft Copilot harness, using the Harness column ... (Manage > Copilot Studio) ... Table contains only 'Prepaid Copilot Credits allocated to an environment, and whether it can draw on tenant capacity'. | Fix: The Before rollout inventory step has no table row. To correct without adding a control row, replace that bullet with 'Identify who builds Microsoft Copilot harness agents in each affected environment.'
-->
