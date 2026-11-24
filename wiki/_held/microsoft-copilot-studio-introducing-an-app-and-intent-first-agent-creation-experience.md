---
title: "Copilot Studio: app- and intent-first agent creation experience"
slug: "microsoft-copilot-studio-introducing-an-app-and-intent-first-agent-creation-experience"
roadmapId: 569474
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans a Copilot Studio creation flow where makers pick the application first, then configure tools and knowledge together. Microsoft has not yet documented it, so admins should brief makers and check data policies."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Microsoft's billing page says agents on the Microsoft Copilot harness use Copilot Credits, including while makers build, preview and evaluate them."
audiences: ["power-platform-admin","maker","change-adoption"]
tags: ["copilot-studio","agents","tools","knowledge-grounding","data-policies","user-experience","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap item 569474"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569474"
    kind: "roadmap"
  - title: "Create a new agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/build-new-agent"
    kind: "learn"
  - title: "Add a tool to an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-tools-custom-agent"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "New-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Govern Copilot Credit consumption for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/govern-credit-consumption"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    kind: "learn"
videos: []
related: ["data-policies","copilot-credits","mcp","copilot-studio-require-human-approval-for-tool-calls"]
controls:
  - governs: "Which tool connectors and knowledge-source endpoints makers can use"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy -DisplayName <name> -EnvironmentType <type>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    note: "Data policies apply to Copilot Studio agents in environments included in the policy scope. Microsoft has not yet documented how the new creation screens display policy restrictions."
  - governs: "Copilot Credits allocated to a maker environment, and whether it can draw from tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Environment capacity controls apply across Copilot Studio to credit-consuming workloads, regardless of harness; this creation flow's harness and building charges are not yet documented."
confidence: "low"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap-only item, not yet documented on Microsoft Learn; existing data policy and Copilot Credits controls listed as unconfirmed for this flow."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: data policies are stated to apply to Copilot Studio agents in scope, the credit-cap wording now notes pay-as-you-go, and capacity controls are stated as applying across Copilot Studio."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 65 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 64
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "e6f97d39979f0ccf1b4c036bb9edeb1e"
---

## What's changing

Microsoft plans to change how makers start an agent in Copilot Studio. The roadmap item says Copilot Studio is evolving to an app-first agent creation experience: makers start with the application their agent will work with and configure the capabilities it needs. It adds that tools and knowledge come into a more unified experience, to simplify how agents are created and configured.

Microsoft Learn does not describe this experience yet, and the roadmap item has no more-information link, so what the new screens look like and how they behave is not documented. The roadmap does not say whether it applies to agents built on the Microsoft Copilot harness, the standard harness, or both, and it does not say whether it is on by default or whether existing agents are affected.

For context, Learn's current page for creating an agent on the Microsoft Copilot harness has makers name the agent, write instructions, save, and then add knowledge, tools, skills and connected agents from the Build tab. That is today's documented flow, not a description of the new one.

The roadmap record shows the item as In development, targeted for October CY2026, release phase General Availability, on Web, for Worldwide (Standard Multi-Tenant). The target month has passed at the time of writing (November 2026) and the record, last modified on 2 September 2026, still shows In development. Treat the date as a target.

## Why it matters

The roadmap describes a different starting point for makers and a more unified experience for tools and knowledge. If tools and knowledge are set up in one place, makers may attach connectors, MCP servers or data sources faster, so the controls you already rely on (data policies, credit allocations) matter earlier in the process.

Microsoft has not stated what happens on arrival, so plan on the assumption that it may reach makers without an admin action. Nothing in the sources says existing agents change. The practical work is to confirm that your data policies cover the tools and knowledge sources makers can choose, and to tell makers that the creation screens will change.

## Risk assessment

**Data exposure**
- Knowledge is the data an agent can access when answering questions, according to Learn's agent-creation page, so a unified tools-and-knowledge screen is where makers choose that access. The roadmap adds no new data source. Data policies apply to Copilot Studio agents in environments included in the policy scope. Microsoft has not yet documented how the new creation screens display policy restrictions.

**Security & identity**
- Learn says some tools require the maker to sign in or provide credentials. How the new flow handles authentication for the tools it configures is not described, so check which credential option makers are offered once it appears.

**Autonomy & actions**
- The roadmap describes configuring the capabilities an agent needs, not new autonomous behaviour or approval steps. No change to what an agent can do without a person approving it is described.

**Change & support**
- Maker guidance, screenshots and training that name the Build tab or the Add a tool dialog may go out of date when the flow changes. Expect support questions from makers about where tools and knowledge moved.

## Cost and licensing

Microsoft has not published a licence or meter for this feature, and the roadmap item names none. Learn's usage-based billing page says agents, workflows and apps powered by the Microsoft Copilot harness are billed in Copilot Credits, and that unlike the standard harness the Microsoft Copilot harness charges credits from the moment a maker starts building. Whether agents created through the new flow run on that harness is not stated, so how much building through it would cost is not yet published.

Administrators can allocate prepaid Copilot Credits to environments and turn off Draw from the available capacity in my tenant to cap prepaid consumption at the allocation. Usage can still continue through a linked pay-as-you-go billing plan. See the controls table. Admin and maker time for communication and training is the other cost.

## Scope

The roadmap record lists Microsoft Copilot Studio as the product, Worldwide (Standard Multi-Tenant) as the cloud, Web as the platform and General Availability as the release phase. Other clouds are not listed on the item.

Who sees it first, the rollout mechanism, the roles that can use it and any prerequisites are not stated. The item is aimed at makers who create agents in Copilot Studio.

## Governance guidance

### Before rollout
- Ask your makers which agents they build on the Microsoft Copilot harness and which on the standard harness, so you know who may see the new flow first.
- Review the data policy that covers each maker environment (see the data policy row below), including which tool connectors and knowledge-source endpoints it blocks.
- Check the Copilot Credits allocation and the tenant-capacity draw setting for makers' environments (see the credits row below).

### At rollout
- Watch Message center and the Copilot Studio What's new page for a post or article that describes the experience and its default.
- Tell makers where tools and knowledge move and who to ask when a tool shows as blocked.

### After rollout
- Test creating an agent through the new flow in a maker environment and confirm that a connector blocked by data policy cannot be added.
- Check credit consumption for those environments in the Power Platform admin center after makers start using it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which tool connectors and knowledge-source endpoints makers can use</strong><br><small>Environment</small><br><small class="controls__note">Data policies apply to Copilot Studio agents in environments included in the policy scope. Microsoft has not yet documented how the new creation screens display policy restrictions.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -DisplayName &lt;name&gt; -EnvironmentType &lt;type&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Credits allocated to a maker environment, and whether it can draw from tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Environment capacity controls apply across Copilot Studio to credit-consuming workloads, regardless of harness; this creation flow's harness and building charges are not yet documented.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These are existing controls. The new creation screens are not yet documented; existing data-policy and capacity controls retain their documented platform scope. The roadmap item names no admin setting for it.

The data policy page says to be a tenant admin or have the Environment Admin role. The Copilot Credits tutorial says to sign in with the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. Environment capacity controls apply to all Copilot Studio workloads in the environment, not only agents on the Microsoft Copilot harness. If a published environment group rule (Cost controls - Draw from tenant credit pool) governs the tenant-capacity setting, the environment-level setting becomes read-only and programmatic requests cannot override it.

## Open questions

- Is the app-first creation experience on by default for makers, and is there an admin or maker setting to keep the current flow? Watch Message center and the Copilot Studio What's new page.
- Which harness do agents created through it run on, and are they billed in Copilot Credits from the moment makers start building?
- How do the new creation screens display data policy restrictions on tools and knowledge endpoints?
- What happens to agents that already exist: are they moved to the new configuration screens?
- The October CY2026 target has passed with the status still In development: what is the new date?

<!-- rationale
risk: Low. The roadmap describes a change to how makers set up tools and knowledge, with no new data source, autonomy or sharing behaviour; existing data policies are the control to confirm.
cost: Low. No licence or meter is published for this feature, so the only known cost is admin and maker time; Copilot Credits apply to agents on the Microsoft Copilot harness, and whether this flow builds those is not stated.
impact: Medium. Makers in Copilot Studio would see a different way to start and configure agents; end users and administrators are not described as affected.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The planned unified tools-and-knowledge screen is where makers choose the agent's data access. | Found: Searched: "Copilot Studio" "app-first" agent creation authentication knowledge tools unified; "Copilot Studio" "intent-first". Read: roadmap record; Create a new agent; Add a tool; What's new. A unified experience is described, not one screen or its access-selection behaviour. | Fix: Replace the first sentence of Data exposure with: 'Knowledge is the data an agent can access when answering questions, according to Learn's agent-creation page.'
- [contradicted, blocker] controls[0].api; Governance controls: data-policy row / command: New-DlpPolicy -DisplayName <name> -EnvironmentType <type> configures which tool connectors and knowledge-source endpoints makers can use. | Found: The New-DlpPolicy cmdlet creates a new DLP policy for the logged in admin's tenant. ... -DisplayName ... Creates the policy with the input display name. ... -EnvironmentType ... The type of the environment: trial, production, sandbox, default. | Fix: Remove the data-policy control row (controls[0] and its rendered table row), retaining the documented data-policy guidance in prose. The printed invocation creates a policy but specifies neither connector restrictions nor endpoint rules; do not present it as the operation that configures them or claim that policy automation is undocumented. | Source: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Licensing is unknown because Microsoft has not published a licence specific to this feature. | Found: To use Copilot Studio, you need one of the following configurations: ... Copilot Studio user license (free). ... Copilot Studio authors ... Microsoft 365 Copilot license ... Copilot Studio trial license | Fix: Set licensing.model to included. Replace the opening licensing note with: 'This is a new creation option inside Copilot Studio. Product access requires a Copilot Studio user license (with a tenant prepaid pack subscription), the Copilot Studio authors role, a Microsoft 365 Copilot license, or a Copilot Studio trial license. No licence specific to this flow is published.' Cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing and retain the distinction between maker access and harness-dependent usage charges. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [supported, minor] controls[0].ui; Governance controls: data-policy row / admin-path: Data-policy restrictions are reached in Power Platform admin center through Security > Data and privacy > Data policy. | Found: select Security, and then select Data and privacy. ... Select Data policy. The Data policies list appears. ... select the data policy and select Edit Policy. ... The Assign connectors page appears. | Fix: Extend the existing-policy route to 'Security > Data and privacy > Data policy > policy > Edit Policy > Add an environment > Assign connectors > connector > Block'. State in the row note that endpoint restrictions use 'Configure connector > Connector endpoints' instead of Block. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] controls[1].ui; Governance controls: credits row / admin-path: Credit allocation and tenant-capacity draw are reached through Licensing > Products > Copilot Studio > Manage Copilot Credits. | Found: select Licensing. ... Under Products, select Copilot Studio, and then select Manage Copilot Credits. ... Select the environment ... Under Allocate capacity ... Under Capacity overages, select or clear Draw from the available capacity in my tenant | Fix: Extend the draw-setting path to 'Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant'. In the note, state that the same environment pane's Allocate capacity field sets the credit allocation. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[1].api; Governance controls: credits row / command: PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 writes environment credit allocations and tenant-pool draw settings. | Found: $apiBaseUrl = "https://api.powerplatform.com" ... $apiVersion = "2024-10-01" ... Invoke-RestMethod -Method Put ... -Uri "$apiBaseUrl/licensing/allocationsV2?api-version=$apiVersion" | Fix: Keep the call. Add to the row note: 'The request body identifies scope.environmentId and the MCSMessages entitlement; allocatedEntitlements[].allocation.quantity sets the allocation, and allocatedEntitlements[].enforcementRules with ruleType TenantPool and enabled sets tenant-capacity draw.' | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
-->
