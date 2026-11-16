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
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 46
  unconfirmed: 7
  contradicted: 6
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[1].ui; Governance controls table / admin-path: An individual agent can be blocked or unblocked through Agents > All agents > agent > Block / Unblock. | Found: Select **Agents** > **All agents**.
3. In the **All agents** page, select an agent from the list of agents.
4. In the agent details pane that opens, immediately under the agent's name, select **Block** or **Unblock**. | Fix: The pre-check's missing-word warning is cosmetic: Block and Unblock are documented. Narrow this row's governs label to 'Manual block or unblock for an agent'; the supplied path does not describe uninstalling or pinning. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents
- [supported, minor] controls[1].api; Governance controls table / command: POST /beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage.
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Keep the endpoint, but label it preview/beta and block-only: it does not unblock, uninstall or pin. Add that production use is unsupported and that it requires delegated CopilotPackages.ReadWrite.All; application permissions are unavailable. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Tenant agent access can be managed at Copilot > Settings > Data access > Agents. | Found: Select **Copilot** > **Settings** > **Data access** > **Agents** to manage your organization's agents. | Fix: The cited guide supports the path. Note that https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access gives the newer route 'Agents > Settings > User access'; report both rather than silently choosing one. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Agent publish requests are approved or rejected under Agents > All agents > Requests > Publish / Reject. | Found: Select **Agents** > **All agents** > **Requests**.
3. Select the requested agent and view the agent's details.
4. Next to the name of the agent, select the action to **Publish** or **Reject** the agent. | Fix: Insert the omitted selection: 'Agents > All agents > Requests > agent > Publish / Reject'. The pre-check's missing words are present as separate labels. Also note https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests uses 'Publish to store' and 'Reject submission'. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide
- [supported, minor] front matter: licensing, cost; Cost and licensing; rationale: cost / licensing: Condition-based agent lifecycle rules are included without an additional licence for Copilot-licensed tenants. | Found: Included with Microsoft 365 Enterprise, Business, Education, and Front Line Worker plans
| Automate agent lifecycle actions using conditions-based rules | Microsoft 365 Admin Center | Yes | Yes | Yes | | Fix: Keep licensing.model 'included' and cost 'none', but cite this service description. State that condition-based lifecycle rules are included with the listed Microsoft 365 plans, not exclusively with Copilot subscriptions; separately identify premium template and Graph requirements. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope / licensing: Agent 365 extends management coverage to other agent types and connected platforms. | Found: Agent 365 works with agents built on Microsoft platforms and with agents built or acquired from third-party sources; and integrates with Microsoft 365 administration, identity, security, and compliance capabilities. | Fix: Cite the service description and avoid implying Agent 365 is required merely to synchronize external agents: its feature table also includes external-platform registry synchronization in Microsoft 365 plans. Name premium capabilities, such as Graph access and policy templates, separately. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [contradicted, blocker] What's changing: first paragraph; Why it matters / behaviour: Agent management rules generally run automatically and continuously apply lifecycle policy without an administrator running them. | Found: Review impacted agents before running the rule
Apply governance actions across affected agents in bulk
The **Apply template** action is a one-time bulk operation. It isn't a scheduled rule. | Fix: Describe the documented experience as administrator-reviewed, rule-based bulk actions. Explicitly say Apply template is a one-time, administrator-run operation, not scheduled. Attribute automation scenarios to roadmap 481518 instead of promising all configured rules execute unattended. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules
- [unsupported, blocker] Risk assessment: Security & identity; Open questions / admin-path: A configurable condition named 'block risky agents' exists in this rule builder. | Found: Searched: "agent management rules" "risky"; Microsoft 365 agent management rules risky signals automatic deletion notification audit reassignment reverse. Read agent-settings and agent-365-overview; overview mentions risky-agent automation but no matching rule-builder condition is documented. | Fix: Do not present 'block risky agents' as a verified condition label. Say roadmap 481518 names risky-agent blocking, while the settings documentation lists 'Block ownerless agents without usage'; the exact risky-agent rule condition and signals are not documented there.
- [unsupported, major] summary; Risk assessment; Governance guidance / behaviour: An automatic inactive-agent deletion rule is currently available on this settings page. | Found: Searched: "agent management rules" "delete". Opened agent-settings, agent-actions and agent-365-overview. The settings page's supported actions omit deletion; agent-actions documents manual soft deletion, not an inactive-agent deletion rule. | Fix: Attribute automatic inactive-agent deletion only to the roadmap description. Explain that Learn's current supported-rule list does not document that rule, and make any inactivity/deletion-policy advice contingent on confirming the capability in the tenant.
- [contradicted, blocker] summary; Scope; Why it matters; Governance guidance / applicability: The manager-reassignment rule applies generally to ownerless agents across the listed platforms. | Found: #### Reassign ownerless agents created with Agent Builder to manager
This rule only supports agents created by using Microsoft Copilot Agent Builder. | Fix: Qualify the summary, scope and reassignment guidance: this documented rule supports Microsoft Copilot Agent Builder agents only. Do not promise manager reassignment for Copilot Studio, SharePoint, Foundry or connected-platform agents. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules
- [supported, minor] Risk assessment: Security & identity / behaviour: Agent risk assessments use Microsoft security signals. | Found: Risk signals are sourced from: Displays the Microsoft security platforms contributing risk signals for the agent, such as Microsoft Purview, Microsoft Entra, and Microsoft Defender. | Fix: Cite the registry documentation and describe this as the registry's risk assessment, not proof of the undocumented risky-agent rule condition. Retain the open question about which signals that specific rule uses. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: Automated deletion is irreversible for the agent definition. | Found: When you delete an agent in the Microsoft 365 admin center, the agent is soft deleted.
During the 30-day retention period, you can restore the agent or permanently delete it. | Fix: Replace with: 'Microsoft 365 admin center deletion is soft deletion with a 30-day recovery window; permanent deletion cannot be undone. Microsoft Learn does not establish a separate irreversible automatic-deletion rule here.' | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#delete-agents
- [unsupported, major] Risk assessment: Change & support / behaviour: Affected users receive no notice of blocking or deletion unless administrators add a communication step. | Found: Searched: "agent management rules" "notifications" "audit"; Microsoft 365 admin center agent rules block delete notify users audit log rule changes. Read agent-settings and agent-actions; neither establishes the notification behaviour of these lifecycle rules. | Fix: Replace the assertion with advice: 'Plan communications for affected users; notification behaviour for these lifecycle rules is not documented in the cited pages.' Keep notification options as an open question.
- [unsupported, major] Why it matters: departed makers / behaviour: Agents built by departed employees keep running without an accountable owner. | Found: Searched: Microsoft 365 agent management rules risky signals automatic deletion notification audit reassignment reverse. Read agent-settings, agent-actions and registry ownerless-agent documentation; continued runtime after owner departure is not stated. | Fix: Replace with the documented narrower fact: 'Shared agents can become ownerless when their creator is deleted from the organisation, creating an ownership-governance gap.' Do not promise continued execution across agent types.
- [unsupported, major] Why it matters: unused agents / behaviour: Unused agents remain in the store and in audit scope. | Found: Searched: "agent management rules" "delete"; Microsoft 365 admin center agent rules block delete notify users audit log rule changes. Read agent-settings, agent-actions and registry documentation; no passage establishes store retention or audit scope solely from lack of usage. | Fix: Remove the assertion about store persistence and audit scope, or recast it as analysis: 'Review unused agents to reduce inventory and governance overhead.'
- [supported, minor] Scope: registered agent platforms / availability: The admin center inventory spans Agent Builder, Copilot Studio, SharePoint, Foundry and connected platforms. | Found: Specific platforms supported include: Microsoft Copilot Studio, SharePoint, Agent Builder, AI Foundry, Agents Toolkit, other Microsoft agentic types (such as Researcher), and non-Microsoft agentic platforms (such as Manus or Genspark). | Fix: Cite the overview. Label this as registry coverage, not a promise that every lifecycle rule supports every platform; state each rule's narrower applicability, especially Agent Builder-only manager reassignment. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview
- [supported, minor] Scope: government cloud dates / absence: The roadmap and checked documentation publish no government-cloud rollout dates for this item. | Found: Searched: "agent management rules" "GCC" rollout date. Read roadmap 481518, agent-settings and Microsoft Agent 365 service description. No government rollout date for this item was found; the service description does list GCC availability for condition-based lifecycle actions. | Fix: Keep the roadmap cloud listing, but add that the current Agent 365 service description lists GCC availability for condition-based lifecycle actions. Do not let 'dates not published' imply the broader capability is unavailable in GCC.
- [contradicted, blocker] Governance controls: API exclusivity / absence: The block endpoint is the only lifecycle action with an API. | Found: - Block, unblock, and reassign ownership of packages.
- Admin reassigns package ownership when an employee leaves the organization. | Fix: Replace with: 'The preview Package Management API supports block, unblock and ownership reassignment, in addition to inventory operations.' Cite this overview and the corresponding unblock and reassign references; distinguish individual actions from a rule-configuration API. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
- [contradicted, blocker] Governance controls: Power Platform sharing limits / applicability: Copilot Studio agents are generally bound by Power Platform sharing limits in their home environment. | Found: You configure the sharing limits for agents as a Managed Environments control in the Power Platform admin center.
Sharing limits only apply to agents that require authentication. | Fix: Qualify the sentence: 'For authenticated Copilot Studio agents in Managed Environments, configured Power Platform sharing limits govern new sharing operations; existing access is not retroactively removed.' Cite this sharing-controls page. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
- [unsupported, blocker] Governance controls: rule change records / behaviour: A change record of these rule configurations can be reconstructed from the audit log. | Found: Searched: "agent management rules" "notifications" "audit"; site:learn.microsoft.com/purview/audit-log-activities "rule" "agent". Read agent-settings and the Agent Management audit-activities search excerpt; no rule-definition or rule-configuration audit payload is established. | Fix: Remove the promise that audit logs provide a rule change record. Recommend recording rule definitions and changes manually until Microsoft documents the specific rule-configuration events and payloads; distinguish documented agent-action events from rule-definition history.
- [supported, minor] Governance guidance: After rollout / behaviour: Agent blocking and deletion events can be used in a change log. | Found: | Blocked Agent | BlockedAgent | An admin blocked an agent. Users in the organization can't use the agent. |
| Deleted Agent | DeletedAgent | An admin deleted a shared agent that deletes the underlying files and the agent. | | Fix: Cite this audit-activities reference. Describe these as documented administrative action events, not verified evidence that every automated rule execution or rule-definition change is logged with reconstructable details. | Source: https://learn.microsoft.com/purview/audit-log-activities#microsoft-365-admin-center-agent-management-activities
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The controls table covers the filters and lifecycle actions the governance checklist asks administrators to use. | Found: Run the **Missing an owner** and **Availability: No users** filters
Start with reassignment of ownerless agents
The table lists rules, manual block/unblock, agent access and publish requests, but not the inventory filters or manual reassignment/deletion controls. | Fix: Add an agent-inventory review row covering the two documented filters. Where manual reassignment or deletion remains in the checklist, add their documented controls from agent-actions, or clearly make the advice conditional on the corresponding documented rule.
- [unsupported, major] Governance guidance: At rollout / behaviour: The ownerless-agent manager reassignment is reversible. | Found: Searched: Microsoft 365 agent management rules risky signals automatic deletion notification audit reassignment reverse. Read agent-settings, agent-actions and copilotPackage: reassign; ownership transfer is documented, but undoing this rule or restoring a departed original owner is not. | Fix: Remove '(reversible)'. If useful, say that administrators can perform a further ownership reassignment for eligible shared agents, without promising an undo operation for the manager-reassignment rule.
-->
