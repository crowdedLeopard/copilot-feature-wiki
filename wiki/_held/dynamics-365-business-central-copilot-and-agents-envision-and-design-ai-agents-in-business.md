---
title: "Dynamics 365 Business Central: design custom AI agents with the AI development toolkit"
slug: "dynamics-365-business-central-copilot-and-agents-envision-and-design-ai-agents-in-business"
roadmapId: 578068
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Business Central"]
summary: "Business Central adds an in-product designer for custom AI agents, documented as a sandbox-only preview. Agents use Copilot Credits, but their billing events are not yet published. Administrators decide who may design agents."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "February CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn lists the AI development toolkit among billable agent capabilities that use Copilot Credits, with prepaid capacity or pay-as-you-go. Credit rates for it are not yet published. No separate licence is named on the pages read."
audiences: ["service-owner","finops","security"]
tags: ["dynamics-365","business-central","agents","copilot-credits","pay-as-you-go","least-privilege"]
sources:
  - title: "Microsoft 365 Roadmap 578068"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578068"
    kind: "roadmap"
  - title: "Designing and coding agents (preview)"
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-development-toolkit-overview"
    kind: "learn"
  - title: "Create and activate an agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-development-toolkit-agent-create"
    kind: "learn"
  - title: "Set up agent permissions and profiles (preview)"
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-development-toolkit-permissions-profiles"
    kind: "learn"
  - title: "Export or import an agent configuration"
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-development-toolkit-export-import"
    kind: "learn"
  - title: "Configure Copilot and agent capabilities"
    url: "https://learn.microsoft.com/dynamics365/business-central/enable-ai"
    kind: "learn"
  - title: "Manage consumption-based billing for agent capabilities"
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Assign permissions to users and groups"
    url: "https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions"
    kind: "learn"
videos: []
related: ["copilot-credits","agent-identity"]
controls:
  - governs: "Whether the Custom Agent (agent design) capability is active in a Business Central environment"
    scope: "environment"
    ui:
      surface: "Business Central"
      path: "Copilot & agent capabilities > select the feature > Activate or Deactivate"
      docs: "https://learn.microsoft.com/dynamics365/business-central/enable-ai"
    api: null
    note: "Reached through Search (Alt+Q). Needs SUPER permission or a listed admin licence. Design capability sits under Production ready previews."
  - governs: "What a designed agent can see and do (profile and permission sets)"
    scope: "agent"
    ui:
      surface: "Business Central"
      path: "Agent > Create > Create agent wizard > Permissions > Manage permissions"
      docs: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-development-toolkit-agent-create"
    api: null
    note: "The wizard's Profile (role) step sets visible UI. A task initially runs with the intersection of the scheduling user's and the agent's permissions; after an intervention request, the responding user's permissions apply."
  - governs: "Cross-geography processing of Copilot and agent data"
    scope: "environment"
    ui:
      surface: "Business Central"
      path: "Copilot & agent capabilities > Allow data movement toggle"
      docs: "https://learn.microsoft.com/dynamics365/business-central/enable-ai"
    api: null
    note: "General control for Copilot and agent capabilities; appears only when relevant. Learn does not say it applies to Custom Agent."
  - governs: "Copilot Credit capacity available to the environment's agents"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Capacity"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with scope.environmentId, allocatedEntitlements entitlementId MCSMessages and allocation.quantity in the body"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Applies once the Business Central environment is linked to the Power Platform one (internal admins only). Not allocatable per feature. API: Power Platform Administrator or Global Administrator; TenantPool off caps it."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-23T22:46:03"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: sandbox-only preview of agent design in Business Central, with the billing events for custom agents not yet published."
  - date: "2026-11-16"
    note: "Correction: control note now carries the intervention-request permission exception; Expense Agent rates acknowledged; default state set to on per the capabilities page; Power Platform API allocation call added to the capacity row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 81
  unconfirmed: 1
  contradicted: 3
  attempts: 2
  hash: "6ec91afad7b73f8c574f72057a86bf10"
---

## What's changing

Microsoft is adding an in-product way to design custom AI agents in Dynamics 365 Business Central. It is part of the AI development toolkit, and a user creates an agent with a wizard, writes its instructions in natural language, assigns a profile and permissions, and runs it by creating tasks for it.

The Learn page for the toolkit describes it as prerelease documentation for a preview feature. It states that the toolkit is available in sandbox environments only, from version 27.2, and that it is meant for product owners, domain experts, consultants and developers prototyping before they build in AL extensions. Learn also says the feature currently supports only English. An agent is Disabled by default after creation and must be activated; the page treats the agent as a user in Business Central that can be given permission sets.

The roadmap description adds that these custom agents use the same agent runtime as the built-in Sales Order and Payables agents, and that agent definitions can be exported and imported as JSON files. The Learn page for exporting describes the exported definition as an .xml file instead. The roadmap description also says there are no built-in triggers for custom agents yet.

The roadmap item lists the status as In development, with a target of October CY2026 and a preview date of February CY2026, for Worldwide (Standard Multi-Tenant) on the web. These are Microsoft's targets: the target month has passed at the time of writing (November 2026) and the status has not moved.

## Why it matters

This change does not touch every user, but it brings agent creation into a system that holds financial records. Whoever holds the agent-design permission can build an agent that reads and changes Business Central data, and its runs consume Copilot Credits from capacity that the whole tenant shares.

The Business Central capabilities page says Copilot and agent capabilities are active by default when available in preview, so the Custom Agent capability needs no switch-on from an administrator. Designing an agent still needs the design permissions and billing setup described under Scope, and each agent that someone creates starts Disabled. The practical stance is to decide now who may design agents, which sandboxes they may use, and which credit pool pays, rather than find out from a capacity notification.

## Risk assessment

**Data exposure**
- Sandboxes can hold customer data: Learn says the sandbox can include sandbox copies of production data. An agent run there can read whatever its profile and permissions expose, so treat a sandbox with production-derived data as sensitive.
- Learn lists compliance or security evaluation as a case where the toolkit should not be used.

**Security & identity**
- An agent is a Business Central user with its own permission sets, and Learn says agents cannot have more permissions than their creating user. When a task is scheduled, it runs with the intersection of the user's and the agent's permissions.
- If the agent raises a user intervention request, the task continues with the permissions of the user who responds, who may not be the task creator.

**Autonomy & actions**
- Agents interact with the UI their profile shows. A custom profile with page customisation flags such as `InsertAllowed` and `DeleteAllowed` limits what they can change; Learn recommends custom profiles built for agents.
- The roadmap description says no built-in triggers (email, events, schedules) exist for custom agents yet, so runs start from tasks that people create.

**Change & support**
- Learn describes a gradual move of agents to GPT-5.3-chat as the default model for version 28 and onwards, with environments in the UK, India and Australia excluded from the initial rollout. It recommends re-evaluating agents when the model updates, because behaviour and accuracy may change.
- Preview documentation is subject to change, so settings and limits described here may move before general availability.

## Cost and licensing

Cost is metered, not a fixed licence. The Learn billing page lists Designing and coding agents (preview) among the billable agent capabilities, which use Copilot Credits. It says the credits an agent consumes depend on its design, how often it is used and the features it uses. The roadmap description makes the same point for custom agents.

The same billing page also says billing events for the AI development toolkit will be announced in a future update, so no credit rates are published for it at the time of writing (November 2026). The page publishes rates for Sales Order Agent, Payables Agent and Expense Agent, but not the AI development toolkit; do not apply those rates to custom agents.

Business Central supports prepaid capacity (Copilot Credit packs) and pay-as-you-go, and consumes prepaid capacity first when both exist. Without extra setup, environments draw on the default Power Platform environment in the tenant. Capacity is shared with other Business Central environments and other Microsoft services on the tenant, and cannot be allocated to a single feature. When the quota is depleted, the AI capability is unavailable until more capacity is added.

The toolkit page lists billing setup for agent capabilities in the tenant as a prerequisite and names no licence. Learn does not publish a price for this feature.

## Scope

The toolkit is documented for sandbox environments only, from version 27.2, and not for production. Learn separately says the Agent SDK for AL is available in production environments from version 28.1; that is a different capability from the in-product designer.

Prerequisites on the Learn page: the Custom Agent capability enabled, the AGENT - ADMIN permission set to design agents (AGENT - DIAGNOSTICS additionally shows execution cost and the serialised page in task log entries), a sandbox, and billing set up for agent capabilities.

The record lists Worldwide (Standard Multi-Tenant) and the web client. Default state: the Business Central page on configuring capabilities says Copilot and agent capabilities are active by default when they are available in preview or generally available. That makes the capability available without administrator action, but designing an agent still depends on the design permissions and billing setup above, and an agent that has been created starts Disabled until it is activated.

## Governance guidance

### Before rollout
- Decide whether the Custom Agent capability should be active in each environment, and check its status on the Copilot & agent capabilities page (first control row).
- Identify which people hold the AGENT - ADMIN and AGENT - DIAGNOSTICS permission sets and remove them from anyone who does not need to design agents.
- Confirm which sandboxes hold copies of production data, since agent runs there can read it within the agent's permissions.
- Agree who pays: check prepaid Copilot Credit capacity or pay-as-you-go, and the Power Platform environment linked to each sandbox (fourth control row).

### At rollout
- Create custom profiles for agents and restrict page actions and insert or delete rights before assigning them in the Create agent wizard.
- Grant agents only the permission sets their task needs, remembering that each task runs with the intersection of the user's and the agent's permissions.
- Allocate a bounded amount of prepaid capacity to the Power Platform environment linked to the sandbox where agents are tested, and clear Draw from the available capacity in my tenant so the environment is capped at its allocation.

### After rollout
- Watch Copilot Credit consumption in the Power Platform admin center, and in Application Insights telemetry if it is set up for the environment.
- Re-test agents after model changes announced for Business Central agents.
- Export agent definitions for backup before changing instructions, and store them under version control as the roadmap recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Custom Agent (agent design) capability is active in a Business Central environment</strong><br><small>Environment</small><br><small class="controls__note">Reached through Search (Alt+Q). Needs SUPER permission or a listed admin licence. Design capability sits under Production ready previews.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Copilot &amp; agent capabilities › select the feature › Activate or Deactivate <a href="https://learn.microsoft.com/dynamics365/business-central/enable-ai" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>What a designed agent can see and do (profile and permission sets)</strong><br><small>Agent</small><br><small class="controls__note">The wizard's Profile (role) step sets visible UI. A task initially runs with the intersection of the scheduling user's and the agent's permissions; after an intervention request, the responding user's permissions apply.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Agent › Create › Create agent wizard › Permissions › Manage permissions <a href="https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-development-toolkit-agent-create" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Cross-geography processing of Copilot and agent data</strong><br><small>Environment</small><br><small class="controls__note">General control for Copilot and agent capabilities; appears only when relevant. Learn does not say it applies to Custom Agent.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Copilot &amp; agent capabilities › Allow data movement toggle <a href="https://learn.microsoft.com/dynamics365/business-central/enable-ai" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot Credit capacity available to the environment's agents</strong><br><small>Environment</small><br><small class="controls__note">Applies once the Business Central environment is linked to the Power Platform one (internal admins only). Not allocatable per feature. API: Power Platform Administrator or Global Administrator; TenantPool off caps it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Capacity <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with scope.environmentId, allocatedEntitlements entitlementId MCSMessages and allocation.quantity in the body</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Copilot & agent capabilities page and the agent wizard are configured inside Business Central; Microsoft Learn documents no API for the Copilot & agent capabilities page at the time of writing (November 2026). Copilot Credit allocation can also be set through the Power Platform API (fourth row). Changing a capability can take time to reach users: some take effect immediately and others after users sign out and in.

The Copilot & agent capabilities page needs SUPER permission or one of the listed administrator licences, and Learn says there are no granular permissions yet for only specific administrators to configure Copilot. Design rights come from the AGENT - ADMIN permission set; the page on [assigning permissions in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-define-granular-permissions) covers how to grant it.

The Allow data movement toggle appears only when a capability might process data outside the environment's Azure geography. Learn does not say whether it affects the Custom Agent capability.

The capacity row limits credits for the linked environment, but it cannot be set per feature, and the quota for this feature's own billing is not yet published. The Power Platform API call needs an app registration configured for the Power Platform API and a user with the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. In the allocation, the TenantPool enforcement rule maps to Draw from the available capacity in my tenant: when enabled, the environment draws on unallocated tenant capacity after its allocation is used; when disabled, it is capped at its allocation. A published environment group rule that governs this setting blocks changes for an individual environment, which are rejected with the TenantPoolLockedByPolicy error.

## Open questions

- What billing events and Copilot Credit rates will apply to custom agents built with the AI development toolkit? The billing page says they will be announced in a future update.
- When will the designer move beyond sandbox-only preview, and will production use be allowed? The roadmap target of October CY2026 has passed with the status still In development.
- Is the exported agent definition JSON, as the roadmap states, or XML, as the Learn page states? Watch the Learn export page.
- Does the Allow data movement toggle govern custom agents? Watch the Configure Copilot and agent capabilities page.

<!-- rationale
risk: Medium. Designed agents act through the Business Central UI under an assigned profile and permission sets, and sandboxes can hold copies of production data; Learn documents the capability as sandbox-only preview.
cost: Variable. Business Central bills agent capabilities in Copilot Credits (prepaid capacity or pay-as-you-go), but Learn says billing events for the AI development toolkit will be announced in a future update.
impact: Low. Learn aims the designer at product owners, domain experts, consultants and developers working in sandboxes; most Business Central users will not see it in day-to-day work.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Autonomy & actions / record: Because there are no built-in triggers, runs start from tasks that people create. | Found: there aren't yet any built-in integrations to automatically trigger these custom agents based on incoming emails, events, or scheduled recurrences (this can be done by professional developers using the APIs available in the AI Development Toolkit). | Fix: Replace the bullet with: 'The roadmap description says there are no built-in email, event or scheduled triggers for custom agents yet; professional developers can implement these using the APIs in the AI Development Toolkit.'
- [contradicted, blocker] controls[3].ui; Governance controls table / admin-path: Manage Capacity is reached directly through Licensing > Products > Copilot Studio > Summary > Manage Capacity. | Found: Select the Summary tab. ... Select Manage Capacity from the Prepaid capacity card. | Fix: Set controls[3].ui.path and the corresponding rendered path to 'Licensing > Products > Copilot Studio > Summary > Prepaid capacity > Manage Capacity'. The cited instructions place the action in the Prepaid capacity card. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [unsupported, blocker] controls[3].api; Governance controls table / command: The printed PUT allocation call with a prose list of body fields is a usable API allocation request. | Found: Searched: Power Platform Copilot Credits licensing allocationsV2 scope environmentId MCSMessages enforcementRules TenantPool. Opened allocation tutorial: endpoint, PUT and version exist, but the printed entry supplies no request body or values for environmentId and quantity. | Fix: Keep the endpoint and docs URL, but replace the call with 'PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01; Content-Type: application/json; body: {"scope":{"environmentId":"<environment-id>"},"allocatedEntitlements":[{"entitlementId":"MCSMessages","allocation":{"quantity":<credits>},"enforcementRules":[{"ruleType":"TenantPool","enabled":false}]}]}'. The environment-id and credits tokens are placeholders to replace before sending the request. This is the tutorial's documented allocation shape; the endpoint's absence from the deterministic literal-string search was not evidence that it did not exist.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; summary; Cost and licensing; rationale: cost / licensing: The AI development toolkit is a billable agent capability using consumption-based Copilot Credits. | Found: Selected agent capabilities in Business Central use consumption-based billing, charging per use. These capabilities use Copilot Credits | Fix: Retain the consumption model, but add: 'The toolkit transparency note instead describes operating costs attached to your Azure OpenAI Service key, which conflicts with the Copilot Credit billing page.' Cite https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-ai-development-toolkit, which says 'Because your AI features are attached to your Azure OpenAI Service key, you're responsible for the operating costs of Azure OpenAI resources'. | Source: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing
- [supported, minor] controls[3].note; Governance guidance: At rollout; Governance controls / cost: Disabling TenantPool alone caps the environment at its allocation. | Found: when it's disabled, the environment is capped at its allocation. | Fix: Qualify the cap advice: 'The allocation tutorial describes disabling TenantPool as capping the environment. The capacity-management page also permits pay-as-you-go overages and says the allocation is a cap only if no overage source is enabled; clear both Draw from the available capacity in my tenant and Bill to my pay-as-you-go billing plan for that cap.' The second source is https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, minor] Governance guidance versus Governance controls table / consistency: The checklist names governance actions not represented by controls in the table. | Found: Checklist: 'Identify which people hold the AGENT - ADMIN and AGENT - DIAGNOSTICS permission sets'; 'Watch Copilot Credit consumption'; 'Export agent definitions'. Table: capability activation, agent permissions, data movement and capacity allocation. | Fix: The human design/diagnostic permission assignments, consumption monitoring, and export/backup steps have no corresponding control rows. Keep this as an editorial coverage finding; do not add unverified rows as part of this correction.
-->
