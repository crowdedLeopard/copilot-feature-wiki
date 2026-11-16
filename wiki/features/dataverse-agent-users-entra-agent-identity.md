---
title: "Dataverse: create agent users with Microsoft Entra agent identity"
slug: "dataverse-agent-users-entra-agent-identity"
roadmapId: 576843
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Agents can be provisioned as Dataverse agent users backed by Entra agent identities, with their own least-privilege security roles and full auditing, instead of borrowing a person's or an application user's access."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "none"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "No separate licence stated for agent users. Dataverse capacity and the agent platform's own licensing (Copilot Studio, Agent 365) apply. Check the Learn article for any licensing notes at the time you deploy."
audiences: ["power-platform-admin","security","compliance","maker"]
tags: ["dataverse","agent-identity","entra-agent-id","agent-users","security-roles","least-privilege","auditing","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576843"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576843"
    kind: "roadmap"
  - title: "Create users: agent users (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/create-users#agent-users-preview"
    kind: "learn"
  - title: "Agent Registry convergence with Microsoft Agent 365 (Entra Agent ID)"
    url: "https://learn.microsoft.com/entra/agent-id/agent-registry-convergence"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Creating an agent user in an environment and assigning security roles (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    kind: "learn"
  - title: "Agent identity lifecycle in Microsoft Entra (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center"
    kind: "learn"
  - title: "Agent identity lifecycle in Microsoft Entra (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/agentidentity-post?view=graph-rest-1.0"
    kind: "learn"
  - title: "Blocking or restricting agent sign-ins (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    kind: "learn"
  - title: "Dataverse auditing of what the agent user does (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#configure-auditing-for-an-environment"
    kind: "learn"
  - title: "Dataverse auditing of what the agent user does (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    kind: "learn"
videos: []
related: ["agent-365-control-plane-for-agents","copilot-studio-block-maker-provided-credentials","copilot-studio-share-autonomous-agents-run-only","agent-identity"]
controls:
  - governs: "Creating an agent user in an environment and assigning security roles"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent"
      docs: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    api: null
    note: "Preview."
  - governs: "Agent identity lifecycle in Microsoft Entra"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Agents > Agent identities > New agent identity (Preview)"
      docs: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center"
    api:
      kind: "graph"
      call: "Create agentIdentity (POST, Microsoft Graph v1.0)"
      docs: "https://learn.microsoft.com/graph/api/agentidentity-post?view=graph-rest-1.0"
  - governs: "Blocking or restricting agent sign-ins"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Users, agents or workload identities > Agents"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    api:
      kind: "graph"
      call: "POST /identity/conditionalAccess/policies with agent identities as the policy's users condition"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    note: "Needs Microsoft Entra ID P1."
  - governs: "Dataverse auditing of what the agent user does"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Audit and logs > Audit settings"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#configure-auditing-for-an-environment"
    api:
      kind: "rest"
      call: "Update IsAuditEnabled on the organization table through the Dataverse Web API"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:09:45"
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
  claims: 64
  confirmed: 46
  unconfirmed: 8
  contradicted: 10
  attempts: 1
---

## What's changing

Dataverse adds a third kind of principal alongside people and application users: the **agent user**. An agent user is backed by a **Microsoft Entra agent identity** (Agent ID) and is added to an environment from the Power Platform admin center like any other user. Administrators assign it dedicated security roles sized to what the agent is meant to do, so an agent that only needs to read accounts and create cases gets exactly that.

Because the agent has its own identity, every create, read, update and delete it performs in Dataverse is audited against the agent, not against the maker who built it or a shared application registration. The roadmap describes this as enabling agents to act "autonomously or on behalf of users" with traceability of data access and changes. The feature is generally available as of August 2026 following a June preview; the Learn article still carries a preview label at the time of writing.

## Why it matters

The two existing patterns for giving an agent Dataverse access both have governance problems. Running as the maker ties the agent's access to a person's job and leaves when they do. Running as an application user usually means a broad role shared by many integrations, with audit trails that cannot tell one automation from another.

Agent users fix both. They also plug Dataverse into the wider agent identity model: an Entra agent identity can be inventoried in Agent 365, subject to Conditional Access and sign-in logging, and disabled in one place. For organisations with autonomous agents touching customer or financial records this is the pattern to standardise on.

## Risk assessment

**Data exposure**
- Positive when roles are scoped properly. Negative if administrators copy a System Administrator or broad custom role onto the agent user "to make it work".
- Agent users can be given access to column-level secured fields; review this deliberately.

**Security & identity**
- Agent identities are first-class Entra objects: include them in access reviews, Conditional Access design and privileged role monitoring.
- Credential or token handling for the agent identity follows Entra Agent ID; no secrets should be embedded in the agent.

**Autonomy & actions**
- An agent user with write roles can change records without a person present. Combine with tool approval in the agent platform for consequential writes, and with Dataverse auditing on the tables concerned.

**Change & support**
- Existing agents built against application users will not migrate automatically; plan a conversion backlog.
- Dataverse auditing must be turned on at environment, table and column level to realise the traceability benefit.

## Cost and licensing

- No separate licence for agent users is stated. Dataverse storage and API capacity consumed by the agent count against the environment as usual.
- The agent platform's own licensing applies (Copilot Studio credits or messages, Agent 365 if used for governance).
- Indirect: role design time; audit storage growth if auditing is enabled broadly.

## Scope

- Dataverse environments in the Power Platform admin center; Power Platform Administrator or environment System Administrator to create agent users and assign roles.
- Agents with an Entra agent identity (Copilot Studio agents and other platforms that issue Agent IDs).
- Worldwide (standard multi-tenant). Government cloud dates not published.

## Governance guidance

**Before rollout**
- Define a small set of standard agent security roles (read-only, case-handling, record-maintenance) so each agent user is assigned a reviewed role, not a bespoke one.
- Turn on Dataverse auditing for the environments and tables agents will touch, with a retention period that meets your policy.
- Add agent identities to the scope of your Entra access reviews.

**At rollout**
- Create agent users per agent (not shared between agents) so audit trails stay distinct.
- Record owner, purpose and assigned roles for each agent user in your agent register.

**After rollout**
- Review agent user role assignments quarterly against actual audited operations; remove privileges not used.
- Monitor Entra sign-in logs for agent identities and alert on unexpected locations or volumes.
- Migrate legacy application-user integrations that are really agents.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating an agent user in an environment and assigning security roles</strong><br><small>Environment</small><br><small class="controls__note">Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Agents › + Add agent <a href="https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Agent identity lifecycle in Microsoft Entra</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Agents › Agent identities › New agent identity (Preview) <a href="https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>Create agentIdentity (POST, Microsoft Graph v1.0)</code> <a href="https://learn.microsoft.com/graph/api/agentidentity-post?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking or restricting agent sign-ins</strong><br><small>Tenant</small><br><small class="controls__note">Needs Microsoft Entra ID P1.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Users, agents or workload identities › Agents <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /identity/conditionalAccess/policies with agent identities as the policy's users condition</code> <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Dataverse auditing of what the agent user does</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Audit and logs › Audit settings <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#configure-auditing-for-an-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>Update IsAuditEnabled on the organization table through the Dataverse Web API</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Dataverse side (creating the agent user, granting roles) is portal-only; the Entra side has full Graph coverage, including [agent blueprints](https://learn.microsoft.com/entra/agent-id/manage-agent-blueprint) for identities created at scale. Disabling an identity, a blueprint or all agents by Conditional Access is described in [Manage agent identities](https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#disable-or-restrict-agent-identities). Table- and column-level auditing is configured by makers once environment auditing is on. The [agent users overview](https://learn.microsoft.com/power-platform/admin/agent-users) covers licensing and limits.

## Open questions

- Licensing: whether agent users consume any per-user Dynamics 365 or Power Apps entitlement when they access restricted tables.
- Which agent platforms beyond Copilot Studio can be bound to a Dataverse agent user today.
- Whether role assignment can be templated through environment groups.

<!-- rationale
risk: Medium. The feature lowers identity risk, but it enables autonomous writes under a non-human identity and depends on disciplined role design and auditing.
cost: None stated. Uses existing Dataverse and Entra capabilities; licensing notes unpublished.
impact: Low. Admins and makers only; no end-user visibility.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] What's changing: every create, read, update and delete; summary: full auditing / behaviour: Having its own identity means every create, read, update and delete performed by the agent is audited. | Found: Furthermore, auditing doesn't support retrieve operations or export operations. In addition to Dataverse auditing, you can turn on Dataverse and model-driven apps activity logging to log data retrieve operations and export operations. | Fix: Remove the unconditional every-operation promise. State that configured Dataverse auditing records supported changes; reads and exports require separate activity logging, whose licensing and production-environment qualifications must also be stated. Attribute the roadmap's broader auditing description to the roadmap. | Source: https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing
- [unsupported, major] What's changing: third kind of principal; Why it matters: two existing patterns / behaviour: Before agent users, there were exactly two patterns for giving agents Dataverse access: people and application users. | Found: Searched: Dataverse agent users create API programmatically security roles license capacity column security migration; Dataverse agent application users migrate. Opened create-users and agent-users; neither establishes this exhaustive history. | Fix: Replace the historical enumeration with 'Agent users provide an identity option alongside regular users and application users.' Remove 'third kind' and 'the two existing patterns'.
- [supported, minor] Why it matters: running as the maker / behaviour: Using a person's delegated access ties the agent's available access to that person's permissions. | Found: It also means a change to the person's access affects what the agent can do through that delegated path. | Fix: Cite this article and replace 'leaves when they do' with the documented wording that changes to the person's access affect the delegated path. | Source: https://learn.microsoft.com/microsoft-agent-365/guidance/agent-authority
- [unsupported, major] Why it matters: running as an application user / behaviour: Application-user access usually means a broad role shared by many integrations. | Found: Searched: Dataverse agent application users migrate; Dataverse agent users security roles. Opened create-users and read security-roles-privileges results; no passage establishes that broad shared roles are the usual application-user pattern. | Fix: Replace the asserted usual behaviour with conditional analysis: 'If integrations share an application user, separating their identities can make ownership and role reviews clearer.'
- [unsupported, major] Why it matters: application-user audit trails / behaviour: Application-user audit trails cannot distinguish one automation from another. | Found: Searched: Dataverse agent application users migrate; Dataverse agent users security roles. Opened create-users and manage-dataverse-auditing; neither states that application-user audit trails inherently cannot distinguish automations. | Fix: Qualify this as a risk of sharing the same identity, not a limitation of all application users, or remove it.
- [supported, minor] Risk assessment: Data exposure / applicability: Agent users can be granted access to column-secured Dataverse data. | Found: Column-level security configurations are organization-wide and apply to all data access requests.
Use a column security profile to grant user or team members the following permissions | Fix: Cite this general Dataverse user control and explain that column security profiles govern secured-column access; security-role assignment alone is not the column-security configuration. | Source: https://learn.microsoft.com/power-platform/admin/field-level-security
- [supported, minor] Risk assessment: Security & identity; Governance guidance: Before rollout / applicability: Entra access reviews can be used to review agent identities' access. | Found: Use access reviews to periodically verify that agent identities still need the access they have. | Fix: Cite this agent-specific applicability statement rather than leaving the access-review recommendation without a supporting reference. | Source: https://learn.microsoft.com/graph/api/resources/agentid-platform-overview?view=graph-rest-1.0
- [supported, minor] Risk assessment: Security & identity / applicability: Agent identities can hold Entra role assignments that administrators should monitor. | Found: Each agent identity has a service principal or a user in Microsoft Entra ID, and it can be assigned certain Microsoft Entra roles. | Fix: Cite this article and retain its qualification that many high-privilege roles are blocked for agent identities. | Source: https://learn.microsoft.com/entra/agent-id/authorization-agent-id
- [unsupported, major] Risk assessment: Change & support / behaviour: Existing agents using application users will not migrate automatically. | Found: Searched: "Dataverse" "agent" "migrate" "application users". Opened create-users and agent-users; neither documents automatic migration or a guarantee that migration will not occur. | Fix: Replace with 'Microsoft has not documented migration from existing application users at the time of writing (November 2026).' Keep any inventory recommendation explicitly as the wiki's advice.
- [unsupported, blocker] licensing.notes; Cost and licensing / licensing: API capacity consumed by an agent user is charged against the environment as usual. | Found: Searched: Dataverse agent user API request capacity non licensed users pooled tenant. Read api-request-limits-allocations and api-limits-overview excerpts; agent-user allocation is not specified and the nonlicensed pool described is tenant-level. | Fix: Remove the environment-level API allocation assertion. Say that the feature documentation does not specify agent-user request-entitlement allocation, and cite the general request-limit guidance separately without assigning an undocumented pool.
- [supported, minor] licensing.notes; Cost and licensing / licensing: Copilot Studio usage remains subject to its platform licensing and consumption rules. | Found: Copilot Credits measure the time and effort your agent needs to retrieve information, respond to prompts, and use any actions or custom Azure Bot Service skills. | Fix: Cite the Copilot Studio billing article and use its current term 'Copilot Credits' instead of 'credits or messages'. Do not imply that these are a separate charge for provisioning a Dataverse agent user. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [supported, minor] licensing.notes; Cost and licensing / licensing: Using Agent 365 governance brings its own licensing requirements. | Found: Microsoft 365 E7, which includes Agent 365 and Microsoft Entra Suite, to provide governance of user and agent identities.
Microsoft Agent 365 license paired with at least Microsoft Entra P1 or Microsoft 365 E3. | Fix: Cite this source and specify the published governance license alternatives. Distinguish paid governance from merely viewing the Agent 365 inventory, which the cited registry-convergence article says needs no specific license. | Source: https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview
- [contradicted, blocker] Scope: Power Platform Administrator / role: The Power Platform Administrator role alone suffices to create agent users and assign their Dataverse security roles. | Found: Global admins, Power Platform admins, and Dynamics 365 service administrators must complete another step before they can perform activities requiring access to Dataverse. They must elevate themselves to the System Administrator role in the environment where they need access. | Fix: State that Dataverse security management requires the environment System Administrator role or equivalent privileges. Power Platform administrators must first self-elevate to System Administrator in that environment; cite this article. | Source: https://learn.microsoft.com/power-platform/admin/manage-high-privileged-admin-roles
- [supported, minor] Scope: environment System Administrator / role: An environment System Administrator can manage Dataverse user security roles. | Found: By default, the System Administrator security role has all the required privileges to assign security roles to any user, including assigning the System Administrator security role. | Fix: Add this role-reference article to sources. | Source: https://learn.microsoft.com/power-platform/admin/assign-security-roles
- [supported, minor] controls[1].api; Governance controls: second row API / command: Microsoft Graph v1.0 supports Create agentIdentity with POST. | Found: POST https://graph.microsoft.com/v1.0/servicePrincipals/microsoft.graph.agentIdentity | Fix: Replace the operation title with the actionable call 'POST /v1.0/servicePrincipals/microsoft.graph.agentIdentity'. The lifecycle tutorial still illustrates /beta/; note that difference if retaining both references. | Source: https://learn.microsoft.com/graph/api/agentidentity-post?view=graph-rest-1.0
- [contradicted, blocker] controls[2].ui; Governance controls: third row / admin-path: The sign-in blocking path ends New policy > Users, agents or workload identities > Agents. | Found: Under Assignments, select Users, agents or workload identities.
Under Include, select All agent identities
Under Exclude, select None | Fix: For agent-identity authentication, replace the path with 'Entra ID > Conditional Access > Policies > New policy > Assignments > Users, agents or workload identities > Include > All agent identities'. Describe selecting all resources and the Block grant separately; remove the invented final 'Agents' step. | Source: https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities
- [contradicted, blocker] controls[2].api; Governance controls: third row API / command: POST /identity/conditionalAccess/policies blocks agent identities by putting them in the policy's users condition. | Found: POST https://graph.microsoft.com/beta/identity/conditionalAccess/policies
"clientApplications": {
  "includeAgentIdServicePrincipals": [
    "All"
  ] | Fix: Use 'POST /beta/identity/conditionalAccess/policies' with conditions.clientApplications.includeAgentIdServicePrincipals for agent identities. The users condition with includeUsers: ["AllAgentIdUsers"] is a different policy for agents acting as users; label that separately if intended. Keep report-only rollout advice. | Source: https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities
- [supported, minor] controls[3].api; Governance controls: fourth row API / command: Updating the organization table's IsAuditEnabled setting through the Dataverse Web API controls environment auditing. | Found: IsAuditEnabled isauditenabled Is Auditing Enabled | Boolean | Whether auditing is enabled for the environment
Change the column values in the organization table to change how auditing works for the environment. | Fix: Make the conceptual instruction concrete: 'PATCH /api/data/v9.2/organizations(<organizationid>) with {"isauditenabled": true}'. Use the logical Web API property name isauditenabled, not the SDK schema name IsAuditEnabled. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure
- [unsupported, blocker] Governance controls: Dataverse side is portal-only / absence: Dataverse agent-user creation and security-role assignment are possible only through the portal. | Found: Searched: "Dataverse" "agent users" "API" "create" provisioning. Opened create-users and agent-users; they document a portal flow, not a prohibition on automation or API-based role assignment. | Fix: Replace 'is portal-only' with 'The agent-user creation article documents the portal flow; no agent-specific API equivalent is documented in the checked sources as of November 2026.' Do not extend that absence to all Dataverse role-assignment APIs.
- [unsupported, major] Governance controls: Entra side has full Graph coverage / behaviour: The Entra side has full Microsoft Graph coverage. | Found: Searched: "agent identities" "access reviews". Read agentid-platform-overview excerpts and opened create-delete-agent-identities, agentidentity-post and manage-agent-blueprint; these document particular operations, not full coverage. | Fix: Replace 'has full Graph coverage' with the verified narrower statement 'Microsoft Graph documents agent-identity creation and deletion.' Cite the specific API references for any additional operation named.
- [contradicted, blocker] Governance controls: table- and column-level auditing configured by makers / role: Makers can configure table- and column-level auditing once environment auditing is enabled. | Found: Configure auditing for one or more tables and columns in Power Apps
You need the system administrator or system customizer role, or equivalent permissions, to complete this task. | Fix: Replace 'configured by makers' with 'configured in Power Apps by a System Administrator, System Customizer, or someone with equivalent permissions'. | Source: https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing
- [unsupported, major] Governance controls: agent users overview covers licensing and limits / behaviour: The linked agent-users overview covers licensing and limits. | Found: Searched: "Dataverse" "agent users" "license"; Dataverse agent users licensing storage API capacity. Opened the complete agent-users overview: it contains preview notices, identity integration, a creation link and an unsupported-application-user note, not licensing or limits. | Fix: Replace with 'The agent users overview describes the preview identity model and links to the creation procedure; dedicated licensing and limits are not stated there.'
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: A cost rating of none is justified while licensing is unknown and indirect costs are identified. | Found: cost: "none"
licensing:
  model: "unknown"
Indirect: role design time; audit storage growth if auditing is enabled broadly.
rationale: None stated. Uses existing Dataverse and Entra capabilities; licensing notes unpublished. | Fix: Do not infer inclusion from missing licensing notes. Set cost to low for the known configuration/admin effort and state that feature-specific licensing is not published; distinguish any separately chosen metered agent platform or paid governance capability. The standard reserves none for explicitly documented inclusion.
- [contradicted, minor] Governance guidance: turn on auditing for tables; controls / consistency: The controls table covers the checklist's table- and column-auditing configuration. | Found: Turn on Dataverse auditing for the environments and tables agents will touch
controls[3].ui ends at environment > Settings > Audit and logs > Audit settings; no table/column auditing row is present. | Fix: Add a maker-surface table/column auditing row sourced to https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#configure-auditing-for-one-or-more-tables-and-columns-in-power-apps, including its System Administrator/System Customizer prerequisite.
- [contradicted, minor] Governance guidance: add identities to Entra access reviews; controls / consistency: The controls table covers the checklist's Entra access-review control. | Found: Add agent identities to the scope of your Entra access reviews.
The table contains agent creation, identity lifecycle, Conditional Access and Dataverse auditing, but no access-review row. | Fix: Add an agent-access-review row, with the appropriate documented review surface and licensing, or remove the instruction to configure that control and retain only general manual access-review advice.
- [contradicted, minor] Governance guidance: monitor Entra sign-in logs; controls / consistency: The controls table covers the checklist's agent sign-in monitoring control. | Found: Monitor Entra sign-in logs for agent identities and alert on unexpected locations or volumes.
No sign-in-log control appears in the table. | Fix: Add a sign-in monitoring row sourced to https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#sign-in-and-audit-logs: Entra ID > Monitoring & health > Sign-in logs, with agent filters and the documented Reports Reader prerequisite.
- [contradicted, minor] Governance guidance: define standard security roles; controls / consistency: The controls table covers creating the checklist's standard custom agent security roles. | Found: Define a small set of standard agent security roles
The first control assigns existing roles during agent creation; no security-role design/configuration control is listed. | Fix: Add a security-role configuration row sourced to https://learn.microsoft.com/power-platform/admin/database-security-configure: Manage > Environments > environment > Settings > Users + Permissions > Security roles.
- [supported, minor] licensing.notes; Cost and licensing: Dataverse storage / cost: Data stored in Dataverse remains subject to ordinary Dataverse storage-capacity accounting. | Found: Dataverse - Database capacity: Tracks structured data stored directly in Dataverse, including table rows, metadata, and relational data | Fix: Cite the Dataverse capacity article for the general storage rule; do not describe an agent-specific storage entitlement that this source does not establish. | Source: https://learn.microsoft.com/power-platform/admin/capacity-storage#dataverse-page-in-licenses
-->
