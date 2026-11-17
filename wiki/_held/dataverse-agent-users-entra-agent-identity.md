---
title: "Microsoft Dataverse: agent users backed by Microsoft Entra agent identities"
slug: "dataverse-agent-users-entra-agent-identity"
roadmapId: 576843
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Admins can add an AI agent's Microsoft Entra agent identity to a Dataverse environment as an agent user and give it a security role. Nothing is added until an admin does it. Learn still marks the feature preview."
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
  notes: "Not yet published. The Learn pages on Dataverse agent users name no licence or meter. Microsoft Entra Agent ID itself is stated to be available for all Microsoft Entra customers."
audiences: ["power-platform-admin","security","maker"]
tags: ["dataverse","agent-users","agent-identity","entra-agent-id","security-roles","least-privilege","power-platform-admin-center","agents","autonomous-agents"]
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
  - title: "Create agent identities in agent identity platform"
    url: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities"
    kind: "learn"
  - title: "Create an identity for your agent with Microsoft Graph (preview)"
    url: "https://learn.microsoft.com/entra/agent-id/create-single-instance-agent"
    kind: "learn"
  - title: "How are agent identities created?"
    url: "https://learn.microsoft.com/entra/agent-id/agent-id-creation-channels"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Microsoft Entra Agent ID logs"
    url: "https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents"
    kind: "learn"
  - title: "pac admin"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    kind: "learn"
  - title: "Add-AdminPowerAppsSyncUser"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-adminpowerappssyncuser"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-persistent-identity-for-copilot-studio-agents"]
controls:
  - governs: "Adding an agent as a Dataverse user and assigning its security role"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent > agent user > Add > security role > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/create-users"
    api: null
    note: "Preview. The Learn section names no required role. Microsoft has not said that general user commands apply to agent users."
  - governs: "Creating the Microsoft Entra agent identity an agent user relies on"
    scope: "agent"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Agents > Agent identities > New agent identity (Preview)"
      docs: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/servicePrincipals/microsoft.graph.agentIdentity with displayName, agentIdentityBlueprintId and sponsors@odata.bind in the body"
      docs: "https://learn.microsoft.com/entra/agent-id/create-single-instance-agent"
    note: "Entra-side control, not a Dataverse setting. Needs an agent identity blueprint and an Entra role such as Agent ID Developer, Agent ID Administrator or AI Administrator."
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
  - date: "2026-11-17"
    note: "Corrected after verification: default state is now Not stated; removed the manual-migration inference, the availability-control claim, the tenant-switch sentence and two checklist steps without a control row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "New briefing: Dataverse agent users backed by Microsoft Entra agent identities, which Learn still labels preview."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 48 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-17"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 43
  unconfirmed: 2
  contradicted: 3
  attempts: 5
  hash: "4a7ab51437a87a9889a7abcbfc704154"
---

## What's changing

Microsoft Dataverse can now hold an agent user: a user record for an AI agent that already has an agent identity in Microsoft Entra Agent ID. An administrator adds the agent to a Dataverse environment and picks a security role, and that role decides what data the agent can reach. The roadmap item describes this as least-privileged access for agents acting autonomously or on behalf of users, with identity-based role assignment and auditing of agent-driven actions.

Microsoft Learn's page on Entra agent users says that an agent that needs Dataverse data must have an Entra agent user created and associated with its agent identity, so that security roles can be assigned to enable access to Dataverse APIs and data in the environment. It adds that Copilot Studio agents can automatically receive an Entra agent identity, and that support for creating Entra Agent Application Users from agent identities isn't available yet. The Learn pages mark the agent user sections as preview, prerelease documentation.

The roadmap item has status Launched, with release phases General Availability and Preview, a preview target of June CY2026 and a general availability target of August CY2026. It lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn still labels the feature preview at the time of writing (November 2026); treat its limits as the preview's, not the final design.

## Why it matters

This gives agents their own named identity inside Dataverse instead of borrowing a person's account or a shared application identity, so access to environment data can be granted, reviewed and removed per agent through security roles. The risk to manage is the role you choose: an agent user with a broad role can read or change whatever that role allows, with no person approving each action.

Microsoft has not stated an on-arrival default beyond the roadmap's "enabled for admins/makers/marketers automatically". The Learn procedure has an administrator add each agent and choose its role, so this briefing treats the feature as admin opt-in: no source says existing agents gain Dataverse access without that step.

## Risk assessment

**Data exposure**

- An agent user reads and writes Dataverse data through the security role assigned on the **Manage security roles** step. A role copied from a human user gives the agent that user's reach; pick the narrowest role the agent's tasks need.
- The Learn pages read do not say how agent-driven actions appear in Dataverse auditing. The roadmap item claims full auditing; confirm what is logged before relying on it for compliance.

**Security & identity**

- Each agent user is tied to an Entra agent identity. Microsoft Entra records agent activity in audit and sign-in logs, which Microsoft's page on agent logs says cover cases where an agent identity or an agent's user account initiates or performs an operation.
- Learn marks agent users as preview and not meant for production use, so approve production use deliberately.

**Autonomy & actions**

- The roadmap says agents can act autonomously or on behalf of users. The Learn pages read describe no per-action approval for agent users, so treat the security role as the limit on what an autonomous agent can do.

**Change & support**

- Creating an agent user is a manual step per environment and per agent, so access can drift from what the agent's owner expects. The Learn page says support for Entra Agent Application Users from agent identities isn't available yet.

## Cost and licensing

The Learn pages on Dataverse agent users (Create users, and Create Entra agent users) name no licence and no meter for agent users, and the roadmap item does not mention licensing. Licensing for Dataverse agent users is therefore not yet published. This briefing cannot say whether an agent user consumes a Dataverse licence or a Copilot Credits meter.

On the Entra side, Microsoft's licensing page states that Microsoft Entra Agent ID is available for all Microsoft Entra customers, and that extending Microsoft Entra security features to agents requires Microsoft Agent 365. Whether those Agent 365 rules touch agent users in Dataverse is not stated. The known indirect cost is administrator time to create identities, add agents to each environment and review their roles.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform, and describes the feature as enabled for admins, makers and marketers automatically. Learn's procedure works per environment in the Power Platform admin center, and it presupposes an existing Microsoft Entra agent identity. The Learn page does not name the admin role needed to add an agent, so check the permissions on your own account before planning.

The roadmap record does not list the GCC, GCC High or DoD clouds. That is a record fact, not a statement that the feature is unavailable there. Microsoft's Entra page on creating agent identities says creating an agent identity needs the Agent ID Developer, Agent ID Administrator or AI Administrator role when done through the admin centre, Graph or PowerShell/CLI.

## Governance guidance

### Before rollout

- Inventory which agents already have an Entra agent identity (Microsoft Entra admin center > Entra ID > Agents > Agent identities) and name an owner for each one that will need Dataverse data.
- Decide, per agent, the least-privileged Dataverse security role it needs, and create or choose that role before you add the agent.
- Treat the preview label as a gate: record who approves production use of agent users while Learn marks them as preview.

### At rollout

- Add each agent to the environment with **+ Add agent** in the Power Platform admin center and select its security role on the **Manage security roles** page.
- Start in a development or test environment and check the agent can do its task with the assigned role and no more.
- Confirm in the Entra agent identity that the agent user is associated with the right agent identity before assigning data access.

### After rollout

- Review the **Agents** list in each environment on a schedule and remove agents whose owner no longer needs Dataverse data.
- Check Microsoft Entra audit and sign-in logs for the agent identity and its user account, and confirm how the same activity appears in Dataverse before you rely on it for compliance evidence.
- Watch the Learn pages for when the preview label is removed and for licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Adding an agent as a Dataverse user and assigning its security role</strong><br><small>Environment</small><br><small class="controls__note">Preview. The Learn section names no required role. Microsoft has not said that general user commands apply to agent users.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Agents › + Add agent › agent user › Add › security role › Save <a href="https://learn.microsoft.com/power-platform/admin/create-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating the Microsoft Entra agent identity an agent user relies on</strong><br><small>Agent</small><br><small class="controls__note">Entra-side control, not a Dataverse setting. Needs an agent identity blueprint and an Entra role such as Agent ID Developer, Agent ID Administrator or AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Agents › Agent identities › New agent identity (Preview) <a href="https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/servicePrincipals/microsoft.graph.agentIdentity with displayName, agentIdentityBlueprintId and sponsors@odata.bind in the body</code> <a href="https://learn.microsoft.com/entra/agent-id/create-single-instance-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The table covers the two places an administrator acts: Microsoft Entra creates the agent identity, and the Power Platform admin center adds the agent to an environment and sets its role. Microsoft Learn documents no API for adding an agent user to a Dataverse environment at the time of writing (November 2026); the Power Platform CLI `pac admin assign-user` and the PowerShell cmdlet `Add-AdminPowerAppsSyncUser` exist for adding ordinary users, and Microsoft has not said they apply to agent users.

The Learn procedure sets a security role for the agent user and describes no other access limit. Creating the Entra agent identity is a separate task from adding it to Dataverse and needs Entra roles, not a Dataverse role.

## Open questions

- Which licence, if any, does a Dataverse agent user need, and is any usage metered? Watch the Create users page and Microsoft Entra licensing page.
- When does Learn drop the preview label for agent users, given the roadmap lists General Availability and a target of August CY2026?
- How are actions by an agent user recorded in Dataverse auditing, and do they reach Microsoft Purview?
- Is there a supported command or API to add an agent user to an environment, and which Power Platform admin role is required in the admin centre?

<!-- rationale
risk: Medium. An agent user reaches Dataverse data only through the security role an administrator assigns, so the exposure depends on how broad that role is. Learn marks the feature preview.
cost: Low. The Learn pages read name no Dataverse licence or meter for agent users, so the only cost shown is admin time. Licensing for Dataverse agent users is not yet published.
impact: Low. Environment administrators and the makers or developers who own the agents notice it; end users see nothing until an agent they use is given Dataverse access.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; summary; Why it matters; Risk assessment: Change & support; rationale: impact / default: The feature is admin-opt-in, nothing is added until an administrator acts, and agent-user creation is necessarily manual for every agent and environment. | Found: Searched: "Entra agent users" "default" "Dataverse"; "Dataverse" "agent users" "automatically". Read Create users and Create Entra agent users. They document a manual route, not an exclusive route or the arrival behavior of existing agents. | Fix: Set defaultState to "unknown". Remove "Nothing is added until an admin does it" from the summary. Replace the second Why it matters paragraph with: "The roadmap says enabled for admins/makers/marketers automatically. Learn documents an administrator adding an agent and assigning its security role, but does not state whether existing agents gain Dataverse access automatically." Replace the manual-step sentence under Change & support with: "Learn documents a per-environment procedure for adding an agent and assigning its security role." Remove "end users see nothing until an agent they use is given Dataverse access" from the impact rationale.
- [contradicted, blocker] Risk assessment: Data exposure / applicability: A role copied from a human user gives the agent that user's reach. | Found: Users can access records they own, objects that are shared with the organization, objects that are shared with them, and objects that are shared with a team that they're a member of. | Fix: Replace "A role copied from a human user gives the agent that user's reach" with "A copied role carries privileges, but access to particular records also depends on access levels, ownership and sharing." Cite https://learn.microsoft.com/power-platform/admin/security-roles-privileges. | Source: https://learn.microsoft.com/power-platform/admin/security-roles-privileges
- [unsupported, major] Why it matters / behaviour: An agent user with a broad role acts with no person approving each action. | Found: Searched: "Dataverse" "agent user" "approval". Read Create users and Create Entra agent users. The roadmap permits autonomous tasks, but neither feature page establishes the approval behavior of every agent using this identity. | Fix: Remove ", with no person approving each action". Retain the separately attributed roadmap statement that agents can act autonomously or on behalf of users.
- [contradicted, blocker] controls[1].note; Governance controls: final paragraph / role: Creating the Entra agent identity necessarily needs an Entra role, rather than another authorization route. | Found: User must be an owner of the agent identity blueprint or agent identity blueprint principal (owners added at any time have this permission). | Fix: Replace controls[1].note with "Entra-side control, not a Dataverse setting. Requires an agent identity blueprint; authorization depends on the creation method." Make the same replacement in the rendered table. In the final Governance controls paragraph, remove "and needs Entra roles, not a Dataverse role". The cited creation-channels page also documents owner-based delegated creation with no Agent ID role and application-permission creation. | Source: https://learn.microsoft.com/entra/agent-id/agent-id-creation-channels
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Governance guidance: After rollout / applicability: Administrators can review and remove a user's Dataverse security-role assignments to manage its access. | Found: The Remove from role? window appears, asking you to confirm that you want privileges associated with that role removed for the selected user. | Fix: Add https://learn.microsoft.com/power-platform/admin/security-roles-privileges to sources for the statements about reviewing and removing security-role access. | Source: https://learn.microsoft.com/power-platform/admin/security-roles-privileges
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The governance checklist asks readers to create a security role and check Entra audit and sign-in logs, but neither control is represented by the two table rows. | Found: "create or choose that role before you add the agent"; "Check Microsoft Entra audit and sign-in logs"; table rows cover adding an agent with a role and creating an Entra agent identity. | Fix: Replace the Before rollout role bullet with "Decide, per agent, the least-privileged Dataverse security role to select when adding the agent." Remove the After rollout bullet that directs readers to check Entra audit and sign-in logs. Keep the separately documented log behavior in Risk assessment and the Dataverse auditing open question; do not add control rows.
-->
