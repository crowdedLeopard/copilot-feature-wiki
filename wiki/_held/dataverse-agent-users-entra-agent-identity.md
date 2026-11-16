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
    note: "General Entra control: Microsoft has not confirmed how it applies to a Dataverse agent user. Needs Conditional Access Administrator and Microsoft Entra ID P1."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:09:45"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: removed unsupported claims about every-operation auditing, prior patterns and licensing; cost now low with licensing not published; fixed Conditional Access path and endpoint, roles and auditing controls."
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 63
  unconfirmed: 0
  contradicted: 2
  attempts: 2
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
- An agent user can read and write whatever its security role allows. The risk is role choice: copying a broad role such as System Administrator onto an agent to make it work removes the least-privilege benefit.
- Dataverse auditing records changes to customer records, but it does not support retrieve or export operations. Microsoft points to Dataverse and model-driven apps activity logging for those, so audit coverage of what an agent reads needs that extra setting.

**Security & identity**
- The agent's access is tied to its Entra agent identity, so Microsoft Entra controls apply to the identity: Conditional Access policies can block token issuance to agent identities (needs Microsoft Entra ID P1). Learn does not say whether those policies cover the Dataverse agent user specifically.
- An agent identity can be assigned certain Microsoft Entra roles, so Entra role assignments on agent identities belong in the same review as Dataverse roles.

**Autonomy & actions**
- The roadmap says agents can act autonomously or on behalf of users. An agent user with create, update or delete privileges can change records with no person present, so only grant those privileges where the agent's purpose needs them.

**Change & support**
- Microsoft has not documented migration from existing application users to agent users at the time of writing (November 2026), so any move is a manual piece of work to plan.
- Because the Learn pages are marked preview, behaviour and limits may change before the pages drop the label.

## Cost and licensing

No licence or meter is published for Dataverse agent users. The Learn pages on agent users and on creating them list no licence, and Microsoft has not published agent-user-specific capacity or request entitlements at the time of writing (November 2026). Do not budget on an assumption either way.

Around the feature, Microsoft documents: Microsoft Entra Agent ID is available for all Microsoft Entra customers, while extending Entra security features to agents requires Microsoft Agent 365 (included with Microsoft 365 E7, or an add-on to Microsoft E5/A5/Business Premium). Conditional Access policies on agent identities need Microsoft Entra ID P1. Entra ID Governance for agent identities needs Microsoft 365 E7, or Microsoft Agent 365 paired with at least Microsoft Entra P1 or Microsoft 365 E3. These apply to the Entra-side controls, not to creating the agent user.

Indirect costs: admin time to design and review roles, and audit-log storage if auditing is turned on widely. For how Copilot Studio usage is metered, see [Copilot Credits](/concepts/copilot-credits/).

## Scope

- **Where:** Dataverse environments, from the environment's Settings in the Power Platform admin center.
- **Who:** agents with a Microsoft Entra agent identity. Copilot Studio creates an Entra Agent ID automatically for each new agent created after May 2026; existing agents on app registrations stay as they are until migrated.
- **Roles:** the create-an-agent-user page does not name a required role. Turning Dataverse auditing on or off needs the System Administrator or System Customizer role or equivalent permissions.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant) and Web, as the roadmap record lists them.
- **Not yet supported:** creating Entra Agent Application Users from agent identities.

## Governance guidance

### Before rollout
- Agree a short list of reviewed Dataverse security roles for agents, so that each agent user gets a role from that list rather than a bespoke or broad one.
- Switch on Dataverse auditing for the environments agents will use, with a retention period, and decide whether Dataverse and model-driven apps activity logging is needed for reads.
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
<tr><td data-label="Control"><strong>Blocking token issuance to agent identities</strong><br><small>Tenant</small><br><small class="controls__note">General Entra control: Microsoft has not confirmed how it applies to a Dataverse agent user. Needs Conditional Access Administrator and Microsoft Entra ID P1.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Assignments › Users, agents or workload identities › Include › All agent identities <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/identity/conditionalAccess/policies with conditions.clientApplications.includeAgentIdServicePrincipals set to All</code> <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
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

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] Risk assessment: Data exposure / behaviour: Dataverse security-role privileges determine the records an agent user can read or change. | Found: In all cases, which records a privilege applies to depends on the access level of the permission defined in the security role. | Fix: Add https://learn.microsoft.com/power-platform/admin/security-roles-privileges to sources for the explanation of Read, Write, Create and Delete privileges. | Source: https://learn.microsoft.com/power-platform/admin/security-roles-privileges
- [supported, minor] Risk assessment: Data exposure / role: System Administrator is a broad Dataverse role that would defeat least-privilege role selection. | Found: Has full permission to customize the system and manage the environment.
Can view all data in the system. | Fix: Cite https://learn.microsoft.com/power-apps/maker/model-driven-apps/privileges-required-customization for the scope of the Dataverse System Administrator role. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/privileges-required-customization
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance: Before rollout / behaviour: Read and export audit coverage is presented as needing an extra activity-logging setting without its production-environment and licensing restrictions. | Found: The option to turn on activity logging is only visible when the minimum MicrosoftOffice licensing requirements are met.
User access or activity logging is sent to Purview for production environments only. | Fix: Replace the unqualified read-coverage guidance with: 'Microsoft points to Dataverse and model-driven apps activity logging for retrieve and export operations. This requires qualifying Office licensing and sends user activity to Purview only for production environments; do not assume it supplies read coverage for a nonproduction preview pilot.' Link https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview for the licensing review, Purview permissions and additional configuration prerequisites. | Source: https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing
- [supported, minor] controls[3].note; Risk assessment: Security & identity; Cost and licensing / licensing: The cited disabling-agent-identities article says applying Conditional Access policies requires Microsoft Entra ID P1. | Found: Applying Conditional Access policies in your tenant requires the Microsoft Entra ID P1 license. | Fix: Retain the attribution to this article and note the fuller prerequisites at https://learn.microsoft.com/entra/identity/conditional-access/policy-autonomous-agents: Microsoft 365 E7, or Microsoft Agent 365 paired with Microsoft Entra ID P1 or Microsoft 365 E3 for Conditional Access. Carry the Agent 365 qualification already described in Cost and licensing into controls[3].note. | Source: https://learn.microsoft.com/entra/agent-id/disable-agent-identities
- [supported, minor] Scope: Who / date: After May 2026, Copilot Studio automatically creates a Microsoft Entra Agent ID for each new agent. | Found: After May 2026, Copilot Studio automatically creates a Microsoft Entra Agent ID for each new agent. | Fix: Prefix the statement with 'For agents powered by the standard harness' to preserve the scope note at the top of the cited article: 'This article describes features used in agents or agent flows powered by the standard harness.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-use-entra-agent-identities
- [contradicted, minor] Governance guidance; Governance controls / consistency: The controls inventory omits controls the checklist asks administrators to consider or review and the tenant-wide switch gap described in prose. | Found: decide whether Dataverse and model-driven apps activity logging is needed for reads; Check agent identities' Microsoft Entra role assignments; There is no tenant-wide switch documented | Fix: Add separate rows for Dataverse and model-driven apps activity logging and reviewing Microsoft Entra role assignments on agent identities, with researched UI/API references. Add a tenant-wide Dataverse-agent-user switch row with both sides null and a note distinguishing the general Entra controls. The current environment-auditing row covers retention, but not those other controls.
-->
