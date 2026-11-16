---
title: "Microsoft 365 admin center: rules that automate agent lifecycle management"
slug: "m365-copilot-agent-lifecycle-management-rules"
roadmapId: 481518
topic: "m365-copilot"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "Admins can define rules that automatically block risky agents, delete inactive agents and reassign ownerless agents to the owner's manager, from the Agent settings page in the Microsoft 365 admin center."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Available to Copilot-licensed tenants through Copilot controls in the Microsoft 365 admin center; Agent 365 extends the same surface to more agent types."
audiences: ["m365-admin","security","service-owner","compliance"]
tags: ["m365-admin-center","agents","lifecycle","ownerless-agents","inactive-agents","copilot-control-system","agent-registry","automation"]
sources:
  - title: "Microsoft 365 Roadmap 481518"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=481518"
    kind: "roadmap"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agents admin guide for Microsoft 365: manage agent lifecycle"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide"
    kind: "learn"
  - title: "Copilot controls for management: agent lifecycle"
    url: "https://learn.microsoft.com/copilot/implement/copilot-controls-management"
    kind: "learn"
  - title: "Automated lifecycle rules for agents (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules"
    kind: "learn"
  - title: "Manual block, unblock, uninstall and pin for an agent (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    kind: "learn"
  - title: "Manual block, unblock, uninstall and pin for an agent (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Who may use agents (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies"
    kind: "learn"
videos: []
related: ["agent-365-control-plane-for-agents","copilot-studio-safe-sharing-credential-oversharing","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "Automated lifecycle rules for agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent management rules > Add rule"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules"
    api: null
    note: "Rules include installing Microsoft agents, reassigning ownerless agents, blocking ownerless agents without usage, applying a template and rejecting stale publish requests."
  - governs: "Manual block, unblock, uninstall and pin for an agent"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block / Unblock"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
  - governs: "Who may use agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Data access > Agents"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies"
    api: null
  - governs: "Approving or rejecting agent publish requests"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > Publish / Reject"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide"
    api: null
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-05-12T23:00:33"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 51
  unconfirmed: 8
  contradicted: 6
  attempts: 2
---

## What's changing

The **Agent settings** page in the Microsoft 365 admin center (**Agents** > **Settings**) includes **Agent management rules**: conditions and actions that run automatically against the agents in your tenant. The roadmap item names three scenarios: block agents that are assessed as risky, delete agents that have been inactive for a period, and reassign agents whose owner has left to that owner's manager.

Rules complement the manual actions already available on every agent in the registry (Install, Block, Unblock, Uninstall, Pin for users) and the filters in **All agents** (Missing an owner, Availability: No users). Blocking an agent built with Agent Builder or Copilot Studio removes it from Copilot and from host apps such as Teams and Outlook; blocking a SharePoint or Foundry agent affects only its availability in Copilot Chat. Microsoft's Researcher and Analyst agents can be blocked tenant-wide but not scoped to users.

The feature launched in May 2026 for Copilot-licensed tenants and the same page carries the Agent 365 controls (security templates, agent and plugin access by publisher, sharing, user access, tags).

## Why it matters

Agent sprawl is a hygiene problem before it is a security problem. Agents built by people who have since left keep running with nobody accountable; agents nobody uses still appear in the store and in audit scope. Manual clean-up does not scale past a few dozen agents.

Rules turn the lifecycle policy you have written down into behaviour the platform applies on your behalf. Reassignment to the manager in particular closes the gap that appears every time a maker leaves. The decision for a service owner is not whether to use rules but how aggressive to make them and who reviews the results.

## Risk assessment

**Data exposure**
- Positive: blocking risky and ownerless agents reduces the number of agents with access to data and nobody watching.

**Security & identity**
- "Risky" is assessed by Microsoft signals; understand the criteria before letting a rule block automatically, or a business-critical agent may be blocked without warning.
- Reassignment gives a manager owner rights over an agent they did not build; the manager may not know what it does.

**Autonomy & actions**
- Automated deletion is irreversible for the agent definition. Prefer block-then-delete with a grace period.

**Change & support**
- Users lose access to blocked or deleted agents without notice unless you add a communication step.
- Manager data must be accurate in Entra for reassignment to land with the right person.

## Cost and licensing

- No additional licence for Copilot-licensed tenants. Agent 365 extends coverage to more agent types and platforms.
- Indirect: time to define rules and review their effects monthly.

## Scope

- Agents visible in the Microsoft 365 admin center registry: Agent Builder, Copilot Studio (published to Microsoft 365), SharePoint, Foundry and, with Agent 365, connected platforms.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: administrators with agent management permissions (see Agent management roles and permissions on Learn).

## Governance guidance

**Before rollout**
- Write the lifecycle policy: how long inactive before block, how long blocked before delete, who inherits ownerless agents.
- Check manager attributes in Entra for the maker population so reassignment works.
- Run the **Missing an owner** and **Availability: No users** filters to size the backlog before any rule runs.

**At rollout**
- Start with reassignment of ownerless agents (reversible) and blocking of inactive agents; hold deletion until the first review cycle completes.
- Notify reassigned managers with a short guide to reviewing an inherited agent.

**After rollout**
- Review rule outcomes monthly; tune inactivity thresholds.
- Feed blocked and deleted agent events into the change log and, where relevant, to the maker community.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Automated lifecycle rules for agents</strong><br><small>Tenant</small><br><small class="controls__note">Rules include installing Microsoft agents, reassigning ownerless agents, blocking ownerless agents without usage, applying a template and rejecting stale publish requests.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent management rules › Add rule <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Manual block, unblock, uninstall and pin for an agent</strong><br><small>Agent</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block / Unblock <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who may use agents</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Data access › Agents <a href="https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approving or rejecting agent publish requests</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › Publish / Reject <a href="https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Rules are portal-only; nothing in Graph creates or lists them, so a change record has to be kept by hand or from the audit log. The block endpoint is the one lifecycle action with an API and it needs an Agent 365 licence. Roles are set out in [Agent 365 roles and permissions](https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms). Agents built in Copilot Studio are additionally bound by Power Platform sharing limits and data policies in their home environment.

## Open questions

- The exact risk signals used by the "block risky agents" condition.
- Whether rules can be scoped by environment, publisher or tag rather than tenant-wide.
- Notification options for affected users and owners when a rule acts.

<!-- rationale
risk: Low. Reduces sprawl; main hazards are over-aggressive automation and inaccurate manager data.
cost: None. Included in Copilot controls.
impact: Medium. Users can lose agents; managers inherit ownership.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[0].api; Governance controls: portal-only rules / absence: No API for creating or listing these Microsoft 365 admin center agent management rules is documented. | Found: Searched: Microsoft 365 agent management rules Graph API create list rules automated lifecycle. Read agent-settings and Package Management API overview; results also describe separate Entra Agent ID lifecycle-policy APIs, not this rule builder. | Fix: Replace the categorical 'nothing in Graph creates or lists them' with 'As of November 2026, Microsoft documents no API for configuring these admin-center rules.' Distinguish the separate Entra Agent ID lifecycle-policy APIs.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: An agent can be blocked or unblocked through Agents > All agents > agent > Block / Unblock. | Found: Select **Agents** > **All agents**.
In the **All agents** page, select an agent from the list of agents.
In the agent details pane that opens, immediately under the agent's name, select **Block** or **Unblock**. | Fix: The pre-check warning is cosmetic: both action labels are documented. Narrow the row's governs label to 'Manual block or unblock for an agent'; this path does not describe uninstalling or pinning. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents
- [supported, minor] controls[1].api; Governance controls table / command: POST /beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage.
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Label this preview/beta and block-only, not an equivalent for unblock, uninstall and pin. State that production applications are unsupported; delegated CopilotPackages.ReadWrite.All is required and application permissions are unavailable. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Tenant agent access is managed at Copilot > Settings > Data access > Agents. | Found: Select **Copilot** > **Settings** > **Data access** > **Agents** to manage your organization's agents. | Fix: Retain the cited guide's route but also report the different route in https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access: Agents > Settings > User access. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Publish requests can be approved or rejected at Agents > All agents > Requests > Publish / Reject. | Found: Select **Agents** > **All agents** > **Requests**.
Select the requested agent and view the agent's details.
Next to the name of the agent, select the action to **Publish** or **Reject** the agent. | Fix: Insert the omitted item selection: Agents > All agents > Requests > agent > Publish / Reject. The pre-check's missing labels are present as separate actions, not a literal slash-delimited label. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide
- [supported, minor] front matter: licensing; Cost and licensing / licensing: Condition-based lifecycle rules are included without another licence for Copilot-licensed tenants. | Found: Included with Microsoft 365 Enterprise, Business, Education, and Front Line Worker plans
| Automate agent lifecycle actions using conditions-based rules | Microsoft 365 Admin Center | Yes | Yes | Yes | | Fix: Cite the service description and name its Microsoft 365 plans rather than implying Copilot is the only qualifying subscription. Distinguish included rules from premium policy templates and Graph access, which the same table does not include in those base plans. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope / licensing: Agent 365 extends management coverage across additional agent types and platforms. | Found: Agent 365 works with agents built on Microsoft platforms and with agents built or acquired from third-party sources; and integrates with Microsoft 365 administration, identity, security, and compliance capabilities. | Fix: Cite the service description. Avoid implying Agent 365 is required merely to inventory connected-platform agents: the same table includes external-platform registry synchronization in Microsoft 365 plans. Identify premium coverage separately. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [supported, minor] summary; What's changing; Why it matters / behaviour: Agent management rules automatically apply lifecycle policy on administrators' behalf. | Found: Leverage rules-based agent management to automatically enforce lifecycle policies, such as flagging ownerless agents, or blocking risky agents. | Fix: Cite this overview but report the more specific agent-settings documentation too: administrators review affected agents and run bulk actions, and Apply template is explicitly one-time, not scheduled. Do not promise unattended execution for every supported rule. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview
- [unsupported, blocker] Risk assessment: Security & identity; Open questions / admin-path: The settings rule builder has a configurable condition called 'block risky agents'. | Found: Searched: agent management rules risky signals inactive delete notification audit reassignment reversible owner leaves unused store; "agent management rules" "risky" "delete". Read agent-settings and agent-management overview; no such builder condition label is specified. | Fix: Remove the quoted condition label. Attribute risky-agent blocking to the roadmap and management overview; say the settings documentation instead lists 'Block ownerless agents without usage' and does not specify the risky-agent condition or its signals.
- [unsupported, major] summary; Risk assessment; Governance guidance / behaviour: An automatic inactive-agent deletion rule is currently available on this settings page. | Found: Searched: Microsoft 365 agent management rules risky signals inactive delete notification audit reassignment reversible owner leaves unused store; "agent management rules" "risky" "delete". Read agent-settings and agent-actions; Entra identity lifecycle policies are a separate feature. | Fix: Attribute automatic inactive-agent deletion to roadmap 481518 only. State that the current settings page does not list a deletion rule; make deletion-threshold advice conditional on verifying tenant capability rather than importing Entra identity-policy behaviour.
- [contradicted, blocker] summary; Scope; Why it matters; Governance guidance / applicability: The manager-reassignment rule applies generally to ownerless agents across the platforms listed in Scope. | Found: Reassign ownerless agents created with Agent Builder to manager
This rule only supports agents created by using Microsoft Copilot Agent Builder. | Fix: Qualify manager reassignment everywhere as supporting Microsoft Copilot Agent Builder agents only. Label the platform list as registry coverage, not coverage of every rule. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules
- [contradicted, blocker] What's changing: manual actions / applicability: Install, block, unblock, uninstall and pin actions are available on every agent in the registry. | Found: You can only pin agents that are deployed to some or all users. | Fix: Replace 'available on every agent' with 'available for eligible agents, depending on platform and deployment state'. Pinning requires prior deployment; agent-actions also says Uninstall may not appear when the agent is not installed. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [unsupported, major] Why it matters: departed makers / behaviour: Agents built by departed employees keep running without an accountable owner. | Found: Searched: Microsoft 365 agent management rules risky signals inactive delete notification audit reassignment reversible owner leaves unused store. Read agent-settings and agent-registry-overview; ownerless shared agents are documented, but continued runtime across platforms is not. | Fix: Replace with 'Shared agents can become ownerless when their creator is deleted from the organisation, creating an ownership-governance gap.' Do not assert continued execution across all agent types.
- [unsupported, major] Why it matters: unused agents in the store / behaviour: Agents nobody uses still appear in the store. | Found: Searched: Microsoft 365 agent management rules risky signals inactive delete notification audit reassignment reversible owner leaves unused store. Read agent-settings, agent-actions and registry documentation; no general store-persistence rule based solely on inactivity is stated. | Fix: Replace the unsupported persistence assertion with advice: 'Review unused agents to reduce inventory and governance overhead.'
- [unsupported, blocker] Why it matters: unused agents in audit scope / applicability: Unused agents remain in audit scope. | Found: Searched: Microsoft 365 agent management rules risky signals inactive delete notification audit reassignment reversible owner leaves unused store. Read registry documentation and the Microsoft 365 Admin Center Agent Management audit-activities excerpt; inactivity-based audit scope is not stated. | Fix: Remove 'and in audit scope'. The documented administrative audit events do not establish this general audit-coverage claim.
- [supported, minor] Risk assessment: Security & identity / behaviour: Agent risk assessments use Microsoft security signals. | Found: Risk signals are sourced from: Displays the Microsoft security platforms contributing risk signals for the agent, such as Microsoft Purview, Microsoft Entra, and Microsoft Defender. | Fix: Cite the registry documentation and identify this as the registry's risk assessment, not proof of the specific lifecycle-rule condition. Keep the question about that rule's exact criteria open. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview#agent-risks
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: Automated deletion is irreversible for the agent definition. | Found: When you delete an agent in the Microsoft 365 admin center, the agent is soft deleted.
During the 30-day retention period, you can restore the agent or permanently delete it. | Fix: Replace with 'Admin-center deletion is soft deletion with a 30-day recovery window; permanent deletion cannot be undone.' The settings page does not document a separate irreversible automatic-deletion rule. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#delete-agents
- [unsupported, major] Risk assessment: Change & support; Open questions / behaviour: Users receive no notice of blocking or deletion unless administrators add a communication step. | Found: Searched: "agent management rules" "audit" "notifications"; "agent management rules" "reversible" "notification". Read agent-settings and agent-actions; neither states notification behaviour for these rule executions. Separate Entra identity policies do document notifications. | Fix: Replace the assertion with 'Plan communications for affected users; notification behaviour for these lifecycle rules is not documented in the cited pages.' Retain notification options as an open question.
- [supported, minor] Scope: registry platforms / availability: The admin-center inventory covers Agent Builder, Copilot Studio, SharePoint, Foundry and connected platforms. | Found: Specific platforms supported include: Microsoft Copilot Studio, SharePoint, Agent Builder, AI Foundry, Agents Toolkit, other Microsoft agentic types (such as Researcher), and non-Microsoft agentic platforms (such as Manus or Genspark). | Fix: Cite this overview and distinguish registry visibility from each rule's narrower applicability, particularly Agent Builder-only manager reassignment. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview
- [supported, minor] Scope: government cloud dates / absence: Government-cloud rollout dates for this roadmap item are not published. | Found: Searched: "agent management rules" "GCC" rollout date. Read roadmap 481518, agent-settings and Agent 365 service description; no item-specific government rollout date was found. The service description nevertheless lists GCC availability for condition-based lifecycle rules. | Fix: Keep the item-specific absence of dates but add that the current Agent 365 service description lists condition-based lifecycle actions as available in GCC. Do not imply government clouds are excluded.
- [unsupported, major] Governance guidance: At rollout / behaviour: Ownerless-agent manager reassignment is reversible. | Found: Searched: Microsoft 365 agent management rules risky signals inactive delete notification audit reassignment reversible owner leaves unused store; "agent management rules" "reversible" "notification". Read agent-settings and agent-actions; no undo of this rule is documented. | Fix: Remove '(reversible)'. Administrators can perform further ownership assignments for eligible shared agents, but that is not a documented undo operation restoring a departed original owner.
- [supported, minor] Governance guidance: After rollout / behaviour: Agent-blocking events can be used in a change log. | Found: | Blocked Agent | BlockedAgent | An admin blocked an agent. Users in the organization can't use the agent. | | Fix: Cite the audit-activities reference and distinguish administrative action events from unverified automatic-rule execution or rule-definition history. | Source: https://learn.microsoft.com/purview/audit-log-activities#microsoft-365-admin-center-agent-management-activities
- [unsupported, blocker] Governance controls: rule change records / behaviour: The audit log can supply a change record of these rule configurations. | Found: Searched: "agent management rules" "audit" "notifications"; site:learn.microsoft.com/purview/audit-log-activities "Agent" "BlockedAgent" "DeletedAgent". Read settings and audit-activities excerpts; no reconstructable rule-definition/configuration payload is established. | Fix: Remove the claim that audit logs supply rule configuration history. Recommend recording rule definitions and changes manually until Microsoft documents the applicable rule-configuration events and payloads; do not confuse action events with rule definitions.
- [contradicted, blocker] Governance controls: API exclusivity / absence: Blocking is the only lifecycle action with an API. | Found: Block, unblock, and reassign ownership of packages. | Fix: Replace with 'The Package Management API supports block, unblock and ownership reassignment, plus package audience/deployment updates; the mutation endpoints are preview.' Cite the overview and distinguish individual actions from a rule-configuration API. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
- [contradicted, blocker] Governance controls: Copilot Studio sharing limits / applicability: Copilot Studio agents are generally bound by Power Platform sharing limits in their home environment. | Found: You configure the sharing limits for agents as a Managed Environments control in the Power Platform admin center.
Sharing limits only apply to agents that require authentication. | Fix: Qualify this as configured sharing limits for authenticated agents in Managed Environments. They govern new sharing operations and do not retroactively remove existing access. Cite this sharing-controls page. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The controls table includes every control the governance checklist directs administrators to use. | Found: Run the **Missing an owner** and **Availability: No users** filters to size the backlog before any rule runs.
The controls table has rows for rules, manual blocking, user access and publishing requests, but none for these inventory filters. | Fix: Add an inventory-review row at Microsoft 365 admin center > Agents > All agents documenting Missing an owner and Availability > No users, sourced to the cited admin guide. If manual deletion or reassignment remains checklist advice, add its documented control or clearly tie it to a documented rule.
-->
