---
title: "Copilot Studio: cost visibility in Preview chat and History"
slug: "microsoft-copilot-studio-cost-visibility-in-preview-chat-and-history"
roadmapId: 571194
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers will see Copilot Credit costs in the Preview tab and agent history while testing. It is a display change for makers; administrators decide who may build and each environment's prepaid credit allocation."
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
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 -H \"Authorization: Bearer <access-token>\" -H \"Content-Type: application/json\" -d <body below>"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Needs Power Platform Administrator, Global Administrator or an equivalent licensing role. Governs prepaid capacity; clear tenant draw to contain it. Linked pay-as-you-go usage can continue. Not a display setting."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap item for cost visibility in Preview chat and History, alongside the Learn pages that describe credit estimates for Microsoft Copilot harness agents."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: environment credit allocations now described as governing prepaid capacity (linked pay-as-you-go usage can continue), admin path and allocation API request completed, Monitor qualified, inventory step reworded."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "96f4c06d5249e225e9498326ec4bf41a"
---

## What's changing

The roadmap item says makers will see their consumption costs inside the Preview tab and in agent history, for preview and testing usage and for every historical run, so they can see costs as they test, iterate and review conversations. The record lists status In development, a target of September CY2026, Worldwide (Standard Multi-Tenant), General Availability and the Web platform. That target month has passed and the record still says In development. The item has no more-info link and does not say which kind of agent it covers.

Microsoft Learn already describes something close for agents powered by the Microsoft Copilot harness. The Preview chat shows a running total of estimated Copilot Credits used during the current test session, and the History view in the Preview tab has a **Credits used** column for past conversations. Learn does not say whether these pages are the shipped form of this roadmap item, so treat the roadmap text as the plan and the Learn pages as the documented behaviour for that harness.

The figures are estimates. Learn says the Preview and Evaluate estimates are near-real-time approximations, and that the Monitor page, updated a few times a day, shows the accurate number of credits consumed. Learn describes Monitor as the final figure and the one that reflects what is billed for the period. Monitor becomes authoritative for the selected period once all its activities have been processed; before then it might not reflect the entire bill.

## Why it matters

Cost becomes visible at build time, which matters most for agents powered by the Microsoft Copilot harness. Learn says that harness charges Copilot Credits from the moment someone starts building, and that previewing and testing consume credits. Makers can now compare how prompts, knowledge sources and tools change consumption before publishing, and service owners can expect questions about why a test session used credits.

Microsoft has not stated whether this display is on for every maker or can be switched off, so plan on makers in affected environments seeing it. The display does not cap anything. Environment allocations govern prepaid capacity: to contain prepaid consumption, clear **Draw from the available capacity in my tenant**; usage can still continue through a linked pay-as-you-go billing plan. When an environment has no credits available, experiences that need them can stop working for makers and end users alike.

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

- Identify who builds Microsoft Copilot harness agents in each affected environment.
- Review the credit allocation and the **Draw from the available capacity in my tenant** setting for those environments (Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant; first row of the controls table).
- Brief makers that Preview and History figures are estimates and that the Monitor page in Copilot Studio becomes authoritative for a period once all its activities have been processed.

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
<tr><td data-label="Control"><strong>Prepaid Copilot Credits allocated to an environment, and whether it can draw on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Needs Power Platform Administrator, Global Administrator or an equivalent licensing role. Governs prepaid capacity; clear tenant draw to contain it. Linked pay-as-you-go usage can continue. Not a display setting.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 -H &quot;Authorization: Bearer &lt;access-token&gt;&quot; -H &quot;Content-Type: application/json&quot; -d &lt;body below&gt;</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin setting for the cost display itself is documented at the time of writing (November 2026). The row above governs prepaid capacity for the spend that the display reveals. It does not hide or show the figures. The request below allocates prepaid credits and disables tenant-pool draw; it does not stop consumption through a linked pay-as-you-go billing plan. Its JSON body is `{"scope":{"environmentId":"<environment-id>"},"allocatedEntitlements":[{"entitlementId":"MCSMessages","allocation":{"quantity":<credit-quantity>},"enforcementRules":[{"ruleType":"TenantPool","enabled":false}]}]}`.

The Power Platform admin center also offers an agent-level monthly limit with a notification threshold and a **Stop usage** option: go to Licensing > Copilot Studio, select **Manage Agents**, select the agent, then **Set limit**. Learn describes this on the [cost management page](https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness). If an environment group rule governs the draw setting, updates made through the admin center or the API are rejected with the `TenantPoolLockedByPolicy` error.

## Open questions

- Does the roadmap item cover only agents powered by the Microsoft Copilot harness, or also standard harness agents? Watch the Learn pages on the Preview tab and the Microsoft 365 Roadmap.
- Is the display on by default for all makers, and is there an admin or maker switch? Watch Message center and the Preview pages.
- Who can see the History credit figures for an agent: only the maker who ran the test, or every maker with access to the agent?
- Will the Preview and History estimates move closer to the Monitor figures at general availability, and what delay should makers expect?

<!-- rationale
risk: Low. The roadmap item describes cost visibility for makers, not new data access or new actions; the prepaid capacity behind the spend it reveals is governed by existing environment credit allocations.
cost: Variable. Testing agents powered by the Microsoft Copilot harness consumes Copilot Credits, a metered charge billed to the environment; Learn describes no separate charge for the display.
impact: Medium. Makers who test agents in Copilot Studio are the people who see the figures; end users and most administrators do not notice it.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Power Platform admin center > Licensing > Products > Copilot Studio > Manage Copilot Credits > environment reaches the environment allocation pane. | Found: Under Products, select Copilot Studio, and then select Manage Copilot Credits. ... Select the environment that you want to manage. ... Under Capacity overages, select or clear Draw from the available capacity in my tenant | Fix: Set controls[0].ui.path and the rendered table path to 'Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant'. Add that Allocate capacity on the same pane sets the prepaid allocation. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[0].api; Governance controls table / command: The printed PUT allocationsV2 operation at API version 2024-10-01 updates environment credit allocations and tenant-pool draw. | Found: Invoke-RestMethod -Method Put ` -Uri "$apiBaseUrl/licensing/allocationsV2?api-version=$apiVersion" ` -Headers $headers -ContentType "application/json" -Body $allocationBody | Fix: Replace the call in controls[0].api and the rendered table with 'PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01'. Remove the appended headers and -d placeholder. Add to the row note: 'The request body sets scope.environmentId, allocatedEntitlements[].allocation.quantity and allocatedEntitlements[].enforcementRules with ruleType TenantPool and enabled false.' The tutorial's -ContentType "application/json" supports JSON content type; the pre-check's missing literal Content-Type is not a functional fault. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] summary; controls[0].note; Why it matters; Governance controls; rationale: risk / applicability: Power Platform environment allocations and linked billing plans govern the prepaid and pay-as-you-go spending described here. | Found: The capacity and consumption controls in the Power Platform admin center apply across Copilot Studio. They aren't exclusive to the Microsoft Copilot harness. | Fix: Qualify the allocation guidance and row note: 'These Power Platform controls apply while spending remains managed in the Power Platform admin center. If a Microsoft 365 admin center spending policy covers the environment or agent, its controls take precedence for that usage; Power Platform capacity allocations and linked billing plans do not apply to a covered environment.' Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs, which states 'Existing Power Platform capacity allocations and linked billing plans don't apply while spending for that environment is managed by a resource-based spending policy in the Microsoft 365 admin center.' This is a difference between Microsoft pages, not an unsupported control. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
-->
