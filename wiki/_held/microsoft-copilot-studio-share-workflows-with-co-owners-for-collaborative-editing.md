---
title: "Copilot Studio: share workflows with co-owners for collaborative editing"
slug: "microsoft-copilot-studio-share-workflows-with-co-owners-for-collaborative-editing"
roadmapId: 580864
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers will be able to share a Copilot Studio workflow with co-owners who can view, edit and run it. Targeted for December CY2026; Microsoft Learn does not describe it yet. Review sharing limits and credit capacity."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn's Workflows overview says workflows consume Copilot Studio capacity for each action they execute. No licence or charge specific to sharing a workflow, or to being a co-owner, is published at the time of writing (November 2026)."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["copilot-studio","copilot-harness","sharing","sharing-limits","copilot-credits","managed-environments","automation"]
sources:
  - title: "Microsoft 365 Roadmap 580864"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580864"
    kind: "roadmap"
  - title: "Workflows overview (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview"
    kind: "learn"
  - title: "Edit and manage your workflow in the designer (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flow-designer"
    kind: "learn"
  - title: "Add a Copilot node to a workflow (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/microsoft-365-copilot-node-workflow"
    kind: "learn"
  - title: "Limit sharing"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-agent-sharing-amongst-makers","microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node","managed-environments","copilot-credits","connectors"]
controls:
  - governs: "Who users can share flows and agents with, in managed environments"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > managed environment > Edit Managed Environments > Manage sharing"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    api:
      kind: "powershell"
      call: "Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration $governanceConfiguration"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    note: "Page names canvas apps, solution-aware cloud flows and agent flows, and agents; it does not mention Copilot Studio workflows. Existing alternative, not confirmed for workflows."
  - governs: "Credit capacity allocated to an environment and where it draws when that runs out"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Role: Power Platform Administrator or Global Administrator, or an equivalent role that manages licensing and capacity. Learn says workflow runs are blocked once prepaid capacity is fully consumed."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T21:30:10"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item: sharing Copilot Studio workflows with co-owners, targeted for December CY2026, with the nearest existing sharing-limit and capacity controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 64
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "c23685f7c7808afc57653b32bb08773a"
---

## What's changing

The roadmap item says makers will be able to share a Copilot Studio workflow with other users as co-owners, who can view, edit and manage it. Makers share from the workflows page or from the designer. Before sharing, they are asked to review the connections the workflow uses and their permissions, and reopening Share shows who the workflow is shared with. Co-owners can edit and run the workflow.

Microsoft Learn does not describe sharing workflows yet, so what follows about its behaviour is the roadmap's description. For background, Learn describes workflows as an automation experience built in Copilot Studio and powered by the Microsoft Copilot harness, with a Workflows page for managing them and a visual designer for editing them.

The record lists the item as In development with a target of December CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) on the Web platform. No preview date is given. The target is Microsoft's plan, not a commitment.

## Why it matters

Co-ownership widens who can change and run a workflow beyond the person who built it. Workflows can start on a schedule, on a connector event or when an agent calls them, so a co-owner's edit can change automation that runs without anyone pressing a button, and every action that runs consumes Copilot Studio capacity.

Microsoft has not stated what happens on arrival, and no source says existing workflows change. Treat it as an optional maker capability to review before December CY2026, not a change that needs action first. The question that decides the risk is the connections: Microsoft has not said whose connection a co-owner's run uses, so confirm that before makers share workflows that use a personal or service-account connection.

## Risk assessment

**Data exposure**

- Co-owners can edit and run the workflow, per the roadmap, so each person added can change which services the workflow reads and writes through its connections. The roadmap's own safeguard is the maker-side review of connections and their permissions before sharing.

**Security & identity**

- For the Copilot node, Learn says the node runs on behalf of the Microsoft 365 account chosen in its Connection. Microsoft has not said how co-owners' edits and runs relate to a connection created by the original maker, so confirm this in a test environment before sharing a workflow that has such a node.
- Managed Environments sharing limits name canvas apps, solution-aware cloud flows and agents. The page does not say whether they apply to Copilot Studio workflows, so do not rely on them to block workflow sharing until Microsoft confirms it.

**Autonomy & actions**

- Learn says a workflow trigger can fire on a schedule, on a connector event or when an agent calls the workflow. A co-owner who edits a workflow with those triggers shares responsibility for automation that runs unattended.

**Change & support**

- Co-owner runs draw on the same environment capacity as the owner's. Learn says that once an environment's prepaid Copilot Studio capacity is fully consumed, new workflow runs are blocked until capacity is available, while running workflows complete normally.
- Expect ownership questions in support: who can still edit a workflow when its original maker leaves. Microsoft has not described this.

## Cost and licensing

**Licence.** Learn's Workflows overview says workflows consume Copilot Studio capacity for each action they execute, and the designer page says using, building, testing and evaluating agents built on this harness might consume Copilot Credits. The Learn workflow pages read for this briefing name no separate licence for sharing a workflow or for being a co-owner.

**Meter and where it appears.** Credits are consumed per action when a workflow runs, in the environment that hosts it. In the Power Platform admin center, Licensing > Copilot Studio shows the Agent flow actions used by each workflow.

**What carries on when credits run out.** Learn says new workflow runs are blocked once an environment's prepaid capacity is fully consumed. The environment's overage setting decides whether it can draw on unallocated tenant capacity or bill a pay-as-you-go plan; that is the capacity row in the controls table. If no overage source is enabled, the capacity page says the environment can consume only its allocated prepaid credits.

**Not yet published.** A credit rate or licence requirement specific to co-owners or to sharing a workflow.

## Scope

- **Users:** makers who own workflows and the users they choose as co-owners. Which licence or role a co-owner needs is not yet published.
- **Clouds and platforms:** the record lists Worldwide (Standard Multi-Tenant) and the Web platform only.
- **Where:** the Workflows page and the workflow designer in Copilot Studio, per the roadmap description.
- **Rollout:** In development, targeted for December CY2026; Microsoft has not stated a default or a rollout mechanism.
- **Related sharing limits:** the Managed Environments sharing rules apply in managed environments and name canvas apps, solution-aware cloud flows and agents.

## Governance guidance

### Before rollout

- Identify the environments where makers build workflows, and check their credit allocation and overage source (capacity row).
- Check whether those environments are managed environments, and what the Manage sharing rules for solution-aware cloud flows and agents currently allow (sharing limits row).
- Tell makers what the roadmap asks of them: review the connections a workflow uses, and their permissions, before sharing it.

### At rollout

- Test in a non-production environment: share a workflow that uses a connection with a test co-owner and record whose connection the co-owner's runs use.
- Check whether the Manage sharing rule that stops sharing of solution-aware cloud flows also stops sharing of workflows, and record the result.

### After rollout

- Review the Agent flow actions used by each workflow at Power Platform admin center > Licensing > Copilot Studio, and look for workflows whose consumption rises after they are shared.
- Ask owners of sensitive workflows to reopen Share and check who the workflow is shared with.
- Watch Message center and the Workflows pages on Microsoft Learn for the documented sharing behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who users can share flows and agents with, in managed environments</strong><br><small>Environment</small><br><small class="controls__note">Page names canvas apps, solution-aware cloud flows and agent flows, and agents; it does not mention Copilot Studio workflows. Existing alternative, not confirmed for workflows.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Manage sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credit capacity allocated to an environment and where it draws when that runs out</strong><br><small>Environment</small><br><small class="controls__note">Role: Power Platform Administrator or Global Administrator, or an equivalent role that manages licensing and capacity. Learn says workflow runs are blocked once prepaid capacity is fully consumed.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Copilot Studio › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents no setting specific to sharing workflows at the time of writing (November 2026). The two rows are existing controls that an administrator uses for nearby behaviour; neither is confirmed to govern workflow sharing itself.

The sharing limits apply only in managed environments, and their note says rules are enforced when users try to share and do not affect users who already have access. Rules can take up to an hour to be enforced. The capacity row governs what workflow runs can consume, not who can share a workflow.

## Open questions

- Whose connection does a co-owner's edit, test or run use: the original maker's, the co-owner's, or one chosen at share time? Watch the Workflows pages on Microsoft Learn.
- Do the Managed Environments sharing limits for solution-aware cloud flows apply to Copilot Studio workflows, or will a workflow-specific setting be added?
- Which licence or Dataverse role does a co-owner need, and is any charge specific to sharing published before the December CY2026 target?
- What happens to a workflow's co-owners and its connections when the original maker leaves the organisation?

<!-- rationale
risk: Medium. Co-owners can edit and run a workflow, and Microsoft has not said whose connection their runs use. The default state is not stated, so this rates existing behaviour continuing plus the new sharing route.
cost: Variable. Workflows consume Copilot Studio capacity for each action they execute, metered in Copilot Credits, and co-owners can run them. No sharing-specific charge or co-owner licence is published.
impact: Medium. Makers who build workflows notice it first, as co-owners and as the people asked to review connections before sharing. Other users see no change unless a workflow is shared with them.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Risk assessment: Change & support; Cost and licensing: What carries on / cost: New workflow runs are blocked once an environment's prepaid capacity is fully consumed. | Found: When the environment has no Copilot Credits available, new workflow runs, including test runs, are blocked until credits are available. Running workflows complete normally. To avoid interruption, monitor capacity usage and consider turning on pay-as-you-go billing. | Fix: Replace every prepaid-exhaustion blocking statement, including controls[1].note and the rendered note, with: 'When the environment has no Copilot Credits available, new workflow runs, including test runs, are blocked until credits are available.' Keep the separate explanation of tenant-pool and pay-as-you-go overage sources. Source: https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support; Cost and licensing: Meter and where it appears / applicability: Workflow runs consume capacity in the environment hosting the workflow, including runs by a co-owner. | Found: Consider the environment where the workflow runs when you monitor consumption. Copilot Credits can come from shared tenant capacity allocated to the environment or from pay-as-you-go billing. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/guidance/workflows-credit-consumption to sources for the existing statement that workflow runs consume the hosting environment's capacity. | Source: https://learn.microsoft.com/microsoft-copilot-studio/guidance/workflows-credit-consumption
- [supported, minor] Cost and licensing: What carries on; controls[1].governs; Governance guidance: Before rollout / applicability: The environment's overage configuration determines whether it can draw on unallocated tenant capacity. | Found: Selected: after the environment's allocated credits are consumed, it continues to draw from your tenant's unallocated capacity. If a published environment group rule governs Draw from the available capacity in my tenant, you can't override the setting for an individual environment. | Fix: Add to the capacity row's note: 'If a published environment-group rule governs Draw from the available capacity in my tenant, individual-environment overrides are rejected with TenantPoolLockedByPolicy; change and republish the environment-group rule instead.' Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist asks readers to review Agent flow actions consumption without a corresponding monitoring row. | Found: Review the Agent flow actions used by each workflow at Power Platform admin center > Licensing > Copilot Studio. The table contains only sharing-limit and capacity-allocation controls. | Fix: Remove the After rollout bullet beginning 'Review the Agent flow actions used by each workflow'; retain the reporting description in Cost and licensing. Do not add a control row as part of this correction.
- [unsupported, minor] rationale: impact / behaviour: Other users see no change unless a workflow is shared with them. | Found: Searched: Copilot Studio workflows share co-owners sharing connection permissions licensing default admin setting. Read the roadmap, flows-overview and flow-designer; none guarantees that edits or runs of shared workflows have no effects on other users. | Fix: Remove 'Other users see no change unless a workflow is shared with them.' Retain the preceding impact rationale about makers and co-owners.
- [supported, minor] controls[0].ui; Governance controls: sharing-limit UI / admin-path: Sharing limits are at Power Platform admin center > Manage > Environments > managed environment > Edit Managed Environments > Manage sharing. | Found: In the navigation pane, select Manage. In the Manage pane, select Environments. On the Environments page, select a managed environment. In the command bar, Edit Managed Environments. The sharing rules are located in the Manage sharing section. | Fix: For the flow rule discussed in the checklist, extend the existing UI path to 'Manage > Environments > managed environment > Edit Managed Environments > Manage sharing > Let people share solution-aware cloud flows'. The current path reaches the right section but stops before the setting. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits
- [supported, minor] controls[1].ui; Governance controls: capacity UI / admin-path: Capacity management is reached through Licensing > Products > Copilot Studio > Summary > Copilot Studio > Manage Copilot Credits. | Found: Under the Copilot Studio heading, select Manage Copilot Credits or Manage sessions. In the allocation panel, select an environment and specify the number of Copilot Credits to allocate in the Copilot Credits textbox. | Fix: Append ' > environment > Copilot Credits' to the existing capacity UI path. Add to its note: 'The panel's overage settings are Capacity overages > Draw from the available capacity in my tenant and Capacity overages > Bill to my pay-as-you-go billing plan.' | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [supported, minor] controls[1].api; Governance controls: capacity API / command: PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 writes environment credit allocations and tenant-pool draw configuration. | Found: $apiBaseUrl    = "https://api.powerplatform.com" $apiVersion    = "2024-10-01" ... Invoke-RestMethod -Method Put ` -Uri "$apiBaseUrl/licensing/allocationsV2?api-version=$apiVersion" | Fix: Keep the call; the pre-check missed its interpolated URL. Add to controls[1].note: 'The request sets scope.environmentId and allocatedEntitlements with entitlementId MCSMessages, allocation.quantity, and enforcementRules containing ruleType TenantPool and enabled. This example configures tenant-pool draw, not the pay-as-you-go overage option.' | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
-->
