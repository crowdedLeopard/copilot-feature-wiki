---
title: "Dataverse: create agent users with Microsoft Entra agent identity"
slug: "dataverse-agent-users-entra-agent-identity"
roadmapId: 576843
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Dataverse administrators can add an agent with a Microsoft Entra agent identity to an environment as an agent user and give it its own security roles. Nothing changes until an admin adds one; the Learn page is still marked preview."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for Dataverse agent users: the two Learn pages on them list no licence. Microsoft Entra Agent ID itself is documented as available to all Microsoft Entra customers; extending Entra security features to agents requires Microsoft Agent 365."
audiences: ["power-platform-admin","security","compliance","maker"]
tags: ["dataverse","agent-identity","entra-agent-id","agent-users","security-roles","least-privilege","auditing","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576843"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576843"
    kind: "roadmap"
  - title: "Create users"
    url: "https://learn.microsoft.com/power-platform/admin/create-users"
    kind: "learn"
  - title: "Create Entra agent users (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/agent-users"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Configure auditing"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    kind: "learn"
  - title: "Create agent identities in agent identity platform"
    url: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities"
    kind: "learn"
  - title: "Disable agent identities in your tenant"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities"
    kind: "learn"
  - title: "Microsoft Entra Agent IDs for Copilot Studio agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-use-entra-agent-identities"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Governing Agent Identities"
    url: "https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview"
    kind: "learn"
  - title: "What are agent identities"
    url: "https://learn.microsoft.com/entra/agent-id/what-are-agent-identities"
    kind: "learn"
  - title: "Power Platform activity logs and auditing in Microsoft Purview"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview"
    kind: "learn"
  - title: "Security roles and privileges for Dataverse"
    url: "https://learn.microsoft.com/power-platform/admin/security-roles-privileges"
    kind: "learn"
  - title: "Privileges required for Dataverse customization"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/privileges-required-customization"
    kind: "learn"
  - title: "Secure autonomous agents with Conditional Access"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-autonomous-agents"
    kind: "learn"
  - title: "Adding an agent user to an environment and assigning its security role (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    kind: "learn"
  - title: "Dataverse auditing for the environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#start-or-stop-auditing-for-an-environment"
    kind: "learn"
  - title: "Creating the Microsoft Entra agent identity behind the agent user (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center"
    kind: "learn"
  - title: "Blocking token issuance to agent identities (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    kind: "learn"
videos: []
related: ["agent-identity","agent-365-control-plane-for-agents","copilot-credits","copilot-studio-share-autonomous-agents-run-only","work-iq-agent-policy-governance"]
controls:
  - governs: "Adding an agent user to an environment and assigning its security role"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent"
      docs: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    api: null
    note: "Preview on Learn. The page names no required role."
  - governs: "Dataverse auditing for the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Audit and logs > Audit settings"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#start-or-stop-auditing-for-an-environment"
    api:
      kind: "rest"
      call: "PATCH [Organization URI]/api/data/v9.2/organizations([Organization ID]) to change organization table columns such as isauditenabled"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    note: "System Administrator or System Customizer role or equivalent. Does not log retrieve or export operations."
  - governs: "Creating the Microsoft Entra agent identity behind the agent user"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Agents > Agent identities > New agent identity (Preview)"
      docs: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/serviceprincipals/Microsoft.Graph.AgentIdentity"
      docs: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities"
    note: "Needs an existing agent identity blueprint. The Learn tutorial shows the beta endpoint."
  - governs: "Blocking token issuance to agent identities"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Assignments > Users, agents or workload identities > Include > All agent identities"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/identity/conditionalAccess/policies with conditions.clientApplications.includeAgentIdServicePrincipals set to All"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    note: "General Entra control: not confirmed for a Dataverse agent user. Needs Conditional Access Administrator and Entra ID P1; fuller prerequisites: Microsoft 365 E7, or Agent 365 with Entra ID P1 or Microsoft 365 E3."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-10-16T19:09:45"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: removed unsupported claims about every-operation auditing, prior patterns and licensing; cost now low with licensing not published; fixed Conditional Access path and endpoint, roles and auditing controls."
  - date: "2026-11-17"
    note: "Corrected after verification: read-coverage guidance now carries the licensing and production-only limits of activity logging; Conditional Access licensing and the standard-harness scope note qualified; role and privilege sources added."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 68 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 62
  unconfirmed: 3
  contradicted: 3
  attempts: 3
  hash: "15942d9fefd96a04197dc2ae6153b9d6"
---

## What's changing

Dataverse environments can now include **agent users**: users that have a Microsoft Entra agent identity (the identity type Microsoft Entra Agent ID provides for AI agents) and are added to the environment to get data access. The Learn page says that for agents which need Dataverse data, an Entra agent user must be created and associated with the agent identity so that security roles can be assigned to allow access to Dataverse APIs and data.

An administrator adds the agent in the Power Platform admin center, picks the agent user from a search list and chooses a security role on the **Manage security roles** page. The roadmap item describes the aim as dedicated, least-privileged roles for each agent, with auditing of agent-driven actions. Agent users sit alongside regular users and application users as a user type.

The roadmap item shows status Launched, with a General Availability and Preview release phase, a June CY2026 preview date and an August CY2026 target. The Learn pages on creating agent users still carry a preview label and say preview features are not meant for production use, so at the time of writing (November 2026) Microsoft's documentation and the roadmap status do not line up. The roadmap lists Worldwide (Standard Multi-Tenant) only. Learn also notes that creating Entra Agent Application Users from agent identities is not supported yet.

## Why it matters

This gives Dataverse an agent-specific way to grant an agent data access: a named identity, with its own security role, added to a specific environment. Roles can then be sized per agent instead of reusing a person's access or an existing shared identity. If integrations do share an application user today, separating them can make ownership and role reviews clearer; that is the wiki's analysis, not a Microsoft claim.

If nobody acts, nothing changes: the Learn procedure is an administrator-run step. The decision for a service owner is whether agents that need Dataverse data should be standardised on agent users, with a short list of reviewed roles and auditing switched on before the first one is added.

## Risk assessment

**Data exposure**
- An agent user can read and write whatever its security role allows; which records a privilege applies to depends on the access level set in the role ([Security roles and privileges for Dataverse](https://learn.microsoft.com/power-platform/admin/security-roles-privileges)). The risk is role choice: copying a broad role such as System Administrator (which [Microsoft describes](https://learn.microsoft.com/power-apps/maker/model-driven-apps/privileges-required-customization) as able to view all data in the system) onto an agent to make it work removes the least-privilege benefit.
- Dataverse auditing records changes to customer records, but it does not support retrieve or export operations. Microsoft points to Dataverse and model-driven apps activity logging for retrieve and export operations. This requires qualifying Office licensing and sends user activity to Purview only for production environments; do not assume it supplies read coverage for a nonproduction preview pilot. See [Power Platform activity logs and auditing in Microsoft Purview](https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview) for the licensing review, Purview permissions and additional configuration prerequisites.

**Security & identity**
- The agent's access is tied to its Entra agent identity, so Microsoft Entra controls apply to the identity: Conditional Access policies can block token issuance to agent identities. The article on disabling agent identities says applying Conditional Access policies requires Microsoft Entra ID P1; the Conditional Access article for autonomous agents lists Microsoft 365 E7, or Microsoft Agent 365 paired with Microsoft Entra ID P1 or Microsoft 365 E3. Learn does not say whether those policies cover the Dataverse agent user specifically.
- An agent identity can be assigned certain Microsoft Entra roles, so Entra role assignments on agent identities belong in the same review as Dataverse roles.

**Autonomy & actions**
- The roadmap says agents can act autonomously or on behalf of users. An agent user with create, update or delete privileges can change records with no person present, so only grant those privileges where the agent's purpose needs them.

**Change & support**
- Microsoft has not documented migration from existing application users to agent users at the time of writing (November 2026), so any move is a manual piece of work to plan.
- Because the Learn pages are marked preview, behaviour and limits may change before the pages drop the label.

## Cost and licensing

No licence or meter is published for Dataverse agent users. The Learn pages on agent users and on creating them list no licence, and Microsoft has not published agent-user-specific capacity or request entitlements at the time of writing (November 2026). Do not budget on an assumption either way.

Around the feature, Microsoft documents: Microsoft Entra Agent ID is available for all Microsoft Entra customers, while extending Entra security features to agents requires Microsoft Agent 365 (included with Microsoft 365 E7, or an add-on to Microsoft E5/A5/Business Premium). The article on disabling agent identities says Conditional Access policies need Microsoft Entra ID P1; the Conditional Access article for autonomous agents lists Microsoft 365 E7, or Microsoft Agent 365 paired with Microsoft Entra ID P1 or Microsoft 365 E3. Entra ID Governance for agent identities needs Microsoft 365 E7, or Microsoft Agent 365 paired with at least Microsoft Entra P1 or Microsoft 365 E3. These apply to the Entra-side controls, not to creating the agent user.

Indirect costs: admin time to design and review roles, and audit-log storage if auditing is turned on widely. For how Copilot Studio usage is metered, see [Copilot Credits](/concepts/copilot-credits/).

## Scope

- **Where:** Dataverse environments, from the environment's Settings in the Power Platform admin center.
- **Who:** agents with a Microsoft Entra agent identity. For agents powered by the standard harness, Copilot Studio creates an Entra Agent ID automatically for each new agent created after May 2026; existing agents on app registrations stay as they are until migrated.
- **Roles:** the create-an-agent-user page does not name a required role. Turning Dataverse auditing on or off needs the System Administrator or System Customizer role or equivalent permissions.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant) and Web, as the roadmap record lists them.
- **Not yet supported:** creating Entra Agent Application Users from agent identities.

## Governance guidance

### Before rollout
- Agree a short list of reviewed Dataverse security roles for agents, so that each agent user gets a role from that list rather than a bespoke or broad one.
- Switch on Dataverse auditing for the environments agents will use, with a retention period. Before relying on Dataverse and model-driven apps activity logging for reads, review its licensing, Purview permissions and configuration prerequisites; it sends user activity to Purview for production environments only.
- Ask the Microsoft Entra team to confirm who can create agent identities and whether a Conditional Access policy for agent identities is planned.

### At rollout
- Create one agent identity per agent and add that agent user to each environment it needs, with one role, in the Power Platform admin center.
- Record the agent's owner, purpose and assigned role in your agent register.
- Start any Conditional Access policy for agent identities in report-only mode, as Microsoft's steps do.

### After rollout
- Review each agent user's role against what the audit log shows it doing, and remove privileges it does not use.
- Check agent identities' Microsoft Entra role assignments as part of the same review.
- Recheck the Learn pages when they leave preview, as limits and licensing may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Adding an agent user to an environment and assigning its security role</strong><br><small>Environment</small><br><small class="controls__note">Preview on Learn. The page names no required role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Agents › + Add agent <a href="https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Dataverse auditing for the environment</strong><br><small>Environment</small><br><small class="controls__note">System Administrator or System Customizer role or equivalent. Does not log retrieve or export operations.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Audit and logs › Audit settings <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#start-or-stop-auditing-for-an-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [Organization URI]/api/data/v9.2/organizations([Organization ID]) to change organization table columns such as isauditenabled</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Creating the Microsoft Entra agent identity behind the agent user</strong><br><small>Tenant</small><br><small class="controls__note">Needs an existing agent identity blueprint. The Learn tutorial shows the beta endpoint.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Agents › Agent identities › New agent identity (Preview) <a href="https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/serviceprincipals/Microsoft.Graph.AgentIdentity</code> <a href="https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking token issuance to agent identities</strong><br><small>Tenant</small><br><small class="controls__note">General Entra control: not confirmed for a Dataverse agent user. Needs Conditional Access Administrator and Entra ID P1; fuller prerequisites: Microsoft 365 E7, or Agent 365 with Entra ID P1 or Microsoft 365 E3.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Assignments › Users, agents or workload identities › Include › All agent identities <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/identity/conditionalAccess/policies with conditions.clientApplications.includeAgentIdServicePrincipals set to All</code> <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Creating the agent user and assigning its role is a Power Platform admin center procedure; the Learn page documents no API for that step at the time of writing (November 2026). Entra-side creation has a Microsoft Graph call, and Conditional Access can block agent identities tenant-wide.

The Conditional Access row governs token issuance to agent identities. Microsoft's article describes a separate policy for agents' user accounts; none of the pages says how either applies to a Dataverse agent user. Environment auditing and table/column auditing are separate steps: turn on the environment first, then the tables and columns.

There is no tenant-wide switch documented that turns Dataverse agent users on or off; availability is controlled by who can reach the environment settings and by Entra's ability to create agent identities.

## Open questions

- Does a Dataverse agent user need any licence, or consume request capacity, and where will Microsoft publish it (the Create users page on Learn)?
- When will the Learn pages drop the preview label, given the roadmap shows Launched with an August CY2026 target?
- Which role does an administrator need to add an agent user, since the create page names none?
- Can agent users be created or assigned roles through an API or script, and will migration from application users be documented?
- The roadmap says "Enabled for admins/makers/marketers automatically"; does anything beyond the admin procedure appear automatically in environments?

<!-- rationale
risk: Medium. Nothing happens until an administrator adds an agent user, but one with write roles can change Dataverse records without a person present, so role choice and auditing decide the exposure.
cost: Low. The only cost the sources show is admin time for role design and auditing; Microsoft has not published any licence or meter specific to Dataverse agent users.
impact: Low. Environment administrators and the owners of agents that need Dataverse data notice it; end users see nothing.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; summary; Why it matters; rationale: risk / default: The feature is admin-opt-in and nothing happens until an administrator adds an agent user. | Found: Searched: Dataverse agent users automatically default. Read create-users#create-an-agent-user-preview and admin/agent-users. They give a manual procedure, not an exclusive provisioning/default rule; the roadmap says enabled for admins/makers/marketers automatically. | Fix: Set defaultState to unknown. Replace the summary's 'Nothing changes until an admin adds one' with 'Microsoft has not stated what happens on arrival'. Replace the matching assertion in Why it matters and the risk rationale with the same qualification. Keep the documented administrator procedure, but do not infer an exclusive default from it.
- [unsupported, major] Risk assessment: Change & support / behaviour: Any move from existing application users to agent users is a manual piece of work. | Found: Searched: Dataverse agent user migration application users. Read admin/agent-users and create-users. Neither gives a migration mechanism; absence of a documented migration does not establish that it is manual. | Fix: Remove 'so any move is a manual piece of work to plan'. Keep only 'Microsoft has not documented migration from existing application users to agent users at the time of writing (November 2026)'.
- [unsupported, blocker] Governance controls / applicability: Dataverse agent-user availability is controlled by who can reach environment settings and by Entra's ability to create identities. | Found: Searched: Dataverse agent user required role; Dataverse agent users tenant switch. Read feature creation pages and Entra creation/disable guidance. No source defines reaching environment settings as the access control or establishes this complete availability mechanism. | Fix: Remove the clause 'availability is controlled by who can reach the environment settings and by Entra's ability to create agent identities'. The separate finding about the missing tenant-switch row calls for removing the rest of that sentence too.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the checklist tells the reader to review has a controls-table row, including Dataverse activity logging. | Found: Before relying on Dataverse and model-driven apps activity logging for reads, review its licensing, Purview permissions and configuration prerequisites. ... The table contains environment auditing, not the distinct activity-logging configuration. | Fix: The Before rollout step reviewing Dataverse and model-driven apps activity logging has no matching control row. Remove that instruction from the checklist; keep the qualified explanatory paragraph and reference under Risk assessment.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: Every control the checklist tells the reader to review has a controls-table row, including Entra role assignments. | Found: Check agent identities' Microsoft Entra role assignments as part of the same review. ... The four control rows do not include Microsoft Entra role assignments. | Fix: The After rollout instruction to check agent identities' Microsoft Entra role assignments has no matching control row. Remove that checklist bullet; the descriptive statement in Risk assessment can remain.
- [contradicted, minor] Governance controls / consistency: The controls table represents the dedicated tenant-wide availability switch reported as undocumented in the prose. | Found: There is no tenant-wide switch documented that turns Dataverse agent users on or off ... The table has no corresponding row with both surfaces null. | Fix: Remove the standalone sentence about the undocumented tenant-wide switch, since that absence has no corresponding row. Do not add a control row as part of this correction.
-->
