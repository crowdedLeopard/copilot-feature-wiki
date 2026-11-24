---
kind: "concept"
title: "Agent identity: whose permissions does an agent use?"
slug: "agent-identity"
summary: "The identity patterns an agent can run under (end user, maker, service identity, Entra agent identity), what each exposes, and the Power Platform and Microsoft Entra controls that steer makers toward the right one."
created: "2026-11-13"
updated: "2026-11-24"
version: 5
tags: ["agent-identity","entra-agent-id","end-user-authentication","maker-credentials","service-principal","least-privilege","auditing"]
covers: ["entra-agent-id","end-user-authentication","maker-credentials"]
sources:
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "App registration, agent identities, and authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/govern-agents-identities-overview"
    kind: "learn"
  - title: "Configure sharing agents with embedded maker credentials"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    kind: "learn"
  - title: "Control sharing agents with embedded maker credentials (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    kind: "learn"
  - title: "Create users"
    url: "https://learn.microsoft.com/power-platform/admin/create-users"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Automatic security scan in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/security-scan"
    kind: "learn"
  - title: "Share agents with other users and makers (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    kind: "learn"
  - title: "Use Power Platform connectors as tools in Copilot Studio agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors"
    kind: "learn"
  - title: "Overview of agent identities in Microsoft Entra"
    url: "https://learn.microsoft.com/entra/agent-id/agent-identities"
    kind: "learn"
  - title: "Manage agent identities in your organization"
    url: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin"
    kind: "learn"
  - title: "Microsoft Entra Agent ID logs"
    url: "https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents"
    kind: "learn"
  - title: "Conditional Access for agents"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/agent-id"
    kind: "learn"
  - title: "Update agentIdentity"
    url: "https://learn.microsoft.com/graph/api/agentidentity-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "agentIdentity resource type"
    url: "https://learn.microsoft.com/graph/api/resources/agentidentity?view=graph-rest-1.0"
    kind: "learn"
  - title: "Disable agent identities in your tenant"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities"
    kind: "learn"
  - title: "Governing Microsoft Entra service accounts"
    url: "https://learn.microsoft.com/entra/architecture/govern-service-accounts"
    kind: "learn"
  - title: "What's new in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/whats-new"
    kind: "learn"
  - title: "Migrate Copilot Studio agents to Microsoft Entra Agent ID (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/govern-migrate-api-entra-agent-identity"
    kind: "learn"
related: ["data-policies","managed-environments","mcp"]
controls:
  - governs: "Whether makers may use maker-provided credentials, end-user credentials or both for tools"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments (or Environment groups) > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    api: null
    note: "Environment Admin for one environment; Power Platform Administrator or Global Admin for groups. Takes effect immediately for all agents."
  - governs: "Whether agents sharing or publishing with embedded maker credentials is detected only or blocked"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    api: null
    note: "Preview. Modes: All sharing allowed or Safe sharing enforced. Does not unshare existing agents."
  - governs: "Which credentials each connector tool uses"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Agents > agent > Tools > tool > Overview > Details > Additional details > Credentials to use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors"
    api: null
    note: "Maker-side. Maker-provided credentials need an authenticated channel; the default is user credentials."
  - governs: "Dataverse access for an agent user linked to an Entra agent identity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent"
      docs: "https://learn.microsoft.com/power-platform/admin/create-users"
    api: null
    note: "Preview. Choose the agent user, then select a security role for it."
  - governs: "Viewing, disabling and updating individual agent identities"
    scope: "agent"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Agents > Agent identities > agent identity > Disable"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/v1.0/servicePrincipals/{id}/microsoft.graph.agentIdentity"
      docs: "https://learn.microsoft.com/graph/api/agentidentity-update?view=graph-rest-1.0"
    note: "Body sets accountEnabled to false to disable, true to enable. Least privileged: AgentIdentity.EnableDisable.All (delegated work or school); AgentIdentity.EnableDisable.All, AgentIdentity.CreateAsManager (application)."
  - governs: "Conditional Access for agent identities and agent users"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Assignments > Users, agents, or workload identities > Agents"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/agent-id"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/identity/conditionalAccess/policies"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities"
    note: "Licences: see Cost. Copilot Studio enforcement applies only in Teams. Example body: includeAgentIdServicePrincipals [\"All\"], builtInControls [\"block\"], state \"enabledForReportingButNotEnforced\" (report-only)."
  - governs: "Sign-in records for agent identities"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Monitoring & health > Sign-in logs"
      docs: "https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/auditLogs/signIns?$filter=signInEventTypes/any(t: t eq 'servicePrincipal') and agent/agentType eq 'AgentIdentity'"
      docs: "https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents"
    note: "At least Reports Reader. Filter by Agent type or Is Agent. This Graph query returns only service-principal sign-in events for agent identities, not every agent-related sign-in type."
confidence: "medium"
dependents: 27
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the independent check: removed unsupported audit-attribution, maker-reach and departure claims, qualified Conditional Access (Teams only) and the embedded-credentials control (preview, share and publish time), and added a controls table."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected after the independent check: directory quota qualified for self-service tenants, agent identity owners added to the management roles, a Graph example added for Conditional Access, and the runtime-check wording fixed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 93 statements not yet confirmed"
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 93 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected how an Entra agent identity's credentials and tokens work (credentials sit on the blueprint), and noted that the sign-in query returns only service-principal events."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 96 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 99 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the Conditional Access admin path, labelled automatic Agent ID creation as preview, noted conflicting Microsoft statements on legacy agents and Conditional Access licensing, and qualified the quota and permission details."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 113 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 113
  confirmed: 113
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e89a26061b8952e9043bb6ac09117b2e"
---

## What it is

Agent identity is the answer to one question: when an agent reads or changes something, whose permissions does it use? The answer is the end user's, the maker's (the person who built the agent), an identity the organisation owns, or an identity the agent has of its own in Microsoft Entra.

| Pattern | How it works | Data reach | Audit trail |
| --- | --- | --- | --- |
| **End user** | The user signs in to the connected service and the action runs under that user's identity. | Only what the user can do; if the user lacks permission, the agent can't act for them. | Verify attribution in the connected service and the relevant Copilot audit records. |
| **Maker-provided** | The agent uses the maker's credentials, not the end user's. | The configured tools can use the maker's permissions in their connected services, potentially exposing data or actions unavailable to the end user. | Connected-service operations use the maker's credentials; verify how that service and Copilot record the caller and the interacting user. |
| **Service identity** | A service principal, API key or managed identity (Microsoft calls these approved system identities). | Set by what the identity is granted in the connected service. | Attribution depends on the connected service and authentication method; verify the service's audit records. |
| **Entra agent identity** | The agent has its own identity in Microsoft Entra ID. | Set by the permissions and policies applied to that identity. | Entra audit and sign-in logs record agent activity. |

The credentials setting sits on each connector tool, so check every tool rather than the agent as a whole.

### Entra agent identity

An agent identity is a special service principal in Microsoft Entra ID. Credentials are configured on its blueprint, not on the agent identity. In multi-instance mode, the blueprint impersonates its child agent identities; in single-instance mode, the Agent ID requests tokens directly. Copilot Studio automatically provisions Entra Agent IDs for new agents (preview). The agent-identities overview says agents created before May 2026 continue using app registrations; Microsoft's migration page instead says existing app-registration agents are being automatically migrated. No one in your tenant, including tenant administrators, can generate tokens by using a Copilot Studio agent identity.

An agent identity and an agent's user account are different objects. The user account is optional, has its own id and is linked one-to-one to the identity, for systems that require a Microsoft Entra user account. Dataverse can hold these as agent users (preview): an administrator adds the agent to an environment and assigns it a security role.

### Related pattern

A published agent with triggers can be shared so users run it with their own credentials (preview). The maker must first configure the agent's triggers and tools for user authentication.

## Why it matters

The pattern decides which account is exposed when an agent is shared widely or misbehaves. In the Power Platform admin center both End-user and Maker-provided credentials are enabled by default, and the default option for connectors and flows is End user credentials, so a maker has to choose the maker pattern deliberately. Copilot Studio automatically runs a security scan and warns makers before publishing when they do.

The controls below let an administrator remove the maker pattern for an environment, block unsafe sharing, and see and disable agent identities in Microsoft Entra.

## Cost and licensing

The Copilot Studio pages for the maker-credential and embedded-credential settings name no licence or meter for those settings. Entra-side governance has its own requirements.

- **Conditional Access for agents** requires Microsoft 365 E7 (which includes Agent 365 and Microsoft Entra Suite), or a Microsoft Agent 365 licence paired with at least Microsoft Entra P1 or Microsoft 365 E3. Microsoft's agent-management and disable-agent-identities pages instead state that Conditional Access requires Entra ID P1; this differs from the dedicated Conditional Access for agents licensing section.
- **ID Protection for agents** requires a Microsoft Entra ID P2 licence during preview.
- **Directory quota:** every Entra Agent ID that Copilot Studio creates counts against the tenant's resource quota, normally 50,000 directory objects by default or 300,000 with a verified domain; tenants created through self-service signup remain at 50,000 even after domain verification.

Usage billing for agents is covered in [Copilot Credits](/concepts/copilot-credits/). Microsoft states that each end user's autonomous agent usage is totalled and billed through the environment hosting the agent.

## Risks and limits

- **Enforcing end-user credentials is immediate.** All tools for all agents in the affected environments change to require end-user credentials at runtime, and agents triggered by schedules or running in the background fail for lack of a live sign-in.
- **Conditional Access on Copilot Studio agent identities is channel-limited.** Scope visibility in Entra applies to all agents, but enforcement currently applies only when the agent runs in Microsoft Teams.
- **Conditional Access does not cover API keys.** An agent that accesses a resource with an API key bypasses Entra token issuance, so no policy applies.
- **Agent identity policies do not reach the agent's user account.** A policy that targets agent identities, including through a blueprint, does not apply to the agent's user account; target Agents under Assignments separately.
- **The embedded-credentials control is a preview and acts at share and publish time.** It does not retroactively unshare or disable existing agents and does not block an agent while it runs.
- **Entra scopes describe connectors, not every tool.** Connector scopes are added only for first-party and certified Power Platform connectors; custom connectors, MCP servers and REST API tools add none.
- **Quota failures can stop provisioning.** Standard-harness agents receive their Entra Agent ID at creation; Microsoft Copilot-harness agents receive it at first publication. Agent identities, together with other Entra resources, can use no more than 95% of the tenant quota; the quota is temporarily 600 directory objects during a tenant's first two days.
- **Disabling all agent identities has side effects.** Microsoft warns it can make existing agents fail and push teams to less transparent application or service principal identities.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers may use maker-provided credentials, end-user credentials or both for tools</strong><br><small>Environment</small><br><small class="controls__note">Environment Admin for one environment; Power Platform Administrator or Global Admin for groups. Takes effect immediately for all agents.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments (or Environment groups) › environment › Settings › Product › Features › Copilot Studio agents › Control maker credential options <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether agents sharing or publishing with embedded maker credentials is detected only or blocked</strong><br><small>Environment</small><br><small class="controls__note">Preview. Modes: All sharing allowed or Safe sharing enforced. Does not unshare existing agents.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Features › Sharing agents with embedded maker credentials <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which credentials each connector tool uses</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Maker-provided credentials need an authenticated channel; the default is user credentials.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agents › agent › Tools › tool › Overview › Details › Additional details › Credentials to use <a href="https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Dataverse access for an agent user linked to an Entra agent identity</strong><br><small>Environment</small><br><small class="controls__note">Preview. Choose the agent user, then select a security role for it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Agents › + Add agent <a href="https://learn.microsoft.com/power-platform/admin/create-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Viewing, disabling and updating individual agent identities</strong><br><small>Agent</small><br><small class="controls__note">Body sets accountEnabled to false to disable, true to enable. Least privileged: AgentIdentity.EnableDisable.All (delegated work or school); AgentIdentity.EnableDisable.All, AgentIdentity.CreateAsManager (application).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Agents › Agent identities › agent identity › Disable <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/v1.0/servicePrincipals/{id}/microsoft.graph.agentIdentity</code> <a href="https://learn.microsoft.com/graph/api/agentidentity-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Conditional Access for agent identities and agent users</strong><br><small>Tenant</small><br><small class="controls__note">Licences: see Cost. Copilot Studio enforcement applies only in Teams. Example body: includeAgentIdServicePrincipals [&quot;All&quot;], builtInControls [&quot;block&quot;], state &quot;enabledForReportingButNotEnforced&quot; (report-only).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Assignments › Users, agents, or workload identities › Agents <a href="https://learn.microsoft.com/entra/identity/conditional-access/agent-id" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/identity/conditionalAccess/policies</code> <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sign-in records for agent identities</strong><br><small>Tenant</small><br><small class="controls__note">At least Reports Reader. Filter by Agent type or Is Agent. This Graph query returns only service-principal sign-in events for agent identities, not every agent-related sign-in type.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Monitoring &amp; health › Sign-in logs <a href="https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/auditLogs/signIns?$filter=signInEventTypes/any(t: t eq 'servicePrincipal') and agent/agentType eq 'AgentIdentity'</code> <a href="https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Environment Admin can configure the maker-credential option for a single environment; Power Platform Administrator or Global Admin is needed for environment groups, and the group's settings override any environment setting. In Entra, managing agent identities needs Agent ID Administrator or Cloud Application Administrator, although agent identity owners can manage their own agents without these roles. Conditional Access policies need Conditional Access Administrator, and sign-in logs need at least Reports Reader.

The embedded-credentials setting is documented on two Learn pages with different paths (one under Security > Threat detection, one under the environment's Features); the row follows the configuration page. The security scan has no setting: it warns makers automatically.

## What to check

- Review the **Credentials to use** setting on each connector tool of agents that touch business data, and move user-specific actions to end-user credentials.
- Test **Control maker credential options** in a development environment first, and list agents with schedule or autonomous triggers before enforcing it.
- Set **Sharing agents with embedded maker credentials** to All sharing allowed first to see which agents are affected, then decide on Safe sharing enforced.
- Open Entra ID > Agents > Agent identities and confirm each agent identity has an owner or sponsor and an expected status.
- Check which Conditional Access policies target agent identities and agent users, and whether the agents you care about run in Teams.
- Filter Entra sign-in logs by Agent type.

## Open questions

- How do Copilot audit records and connected-service logs show the interacting user when a tool runs with maker-provided credentials? Microsoft's pages for the maker-credential controls do not say.
- When will Conditional Access on Copilot Studio agent identities be evaluated outside Microsoft Teams?
- Will the embedded-maker-credentials control leave preview, and will dependency-based enforcement change which agents are blocked?
- Does Microsoft document an API for the Copilot Studio maker-credential option or for adding Dataverse agent users? None was found at the time of writing (November 2026).

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui / admin-path: Dataverse agent access is configured at Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent in the Power Platform admin center. | Found: Expand Users + permissions, and then select Agents. ... Select + Add agent ... Choose the agent user from the search list, and then select Add ... On the Manage security roles page, select a security role for your agent. | Fix: Extend controls[3].ui.path to 'Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent > agent user > Add > Manage security roles > security role'. The current route reaches the correct pane but stops before the role that grants access. | Source: https://learn.microsoft.com/power-platform/admin/create-users
- [supported, minor] controls[5].ui / admin-path: Conditional Access agent targeting is reached through Entra ID > Conditional Access > Policies > New policy > Assignments > Users, agents, or workload identities > Agents. | Found: Browse to Entra ID > Conditional Access > Policies. ... Select New policy. ... Under Assignments, select Users, agents (Preview) or workload identities. ... Under What does this policy apply to, select Agents. ... This option is currently in Preview. | Fix: Add https://learn.microsoft.com/entra/identity/conditional-access/howto-target-agent-identities to sources. Add 'Agent-user targeting is in preview' to controls[5].note. For completeness, insert 'What does this policy apply to' before 'Agents' in controls[5].ui.path. The other cited pages independently support the printed navigation and agent selector. | Source: https://learn.microsoft.com/entra/identity/conditional-access/howto-target-agent-identities
-->
