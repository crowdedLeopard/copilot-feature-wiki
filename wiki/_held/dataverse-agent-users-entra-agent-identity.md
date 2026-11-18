---
title: "Microsoft Dataverse: agent users with a Microsoft Entra agent identity"
slug: "dataverse-agent-users-entra-agent-identity"
roadmapId: 576843
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Dataverse can add AI agents that have a Microsoft Entra agent identity as agent users with their own security roles. An administrator adds each agent in the Power Platform admin center; Learn still marks the pages as preview."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "No Microsoft page read states a licence or meter for Dataverse agent users. Power Platform licensing says a user still needs a security role and any required product licence; Entra says Agent ID is available to all Entra customers and its security features for agents need Agent 365."
audiences: ["power-platform-admin","security","service-owner"]
tags: ["agent-users","entra-agent-id","agent-identity","dataverse","security-roles","least-privilege","power-platform-admin-center","microsoft-graph"]
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
  - title: "Create agentUser"
    url: "https://learn.microsoft.com/graph/api/agentuser-post"
    kind: "learn"
  - title: "Manage agent identities in your organization"
    url: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Licensing overview for Microsoft Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/pricing-billing-skus"
    kind: "learn"
  - title: "The agent's user account in Microsoft Entra Agent ID"
    url: "https://learn.microsoft.com/entra/agent-id/agent-users"
    kind: "learn"
  - title: "Which agents are added to a Dataverse environment as agent users, and their security role (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    kind: "learn"
  - title: "Sign-in activity of agent users and agent identities (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity"
    kind: "learn"
videos: []
related: ["agent-identity","microsoft-copilot-studio-persistent-identity-for-copilot-studio-agents","auditing"]
controls:
  - governs: "Which agents are added to a Dataverse environment as agent users, and their security role"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent"
      docs: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    api: null
    note: "Preview page. The role is then chosen on the Manage security roles page. Learn documents no API for this step at the time of writing (November 2026)."
  - governs: "Creation of the Entra agent user linked to an agent identity"
    scope: "agent"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/users/microsoft.graph.agentUser"
      docs: "https://learn.microsoft.com/graph/api/agentuser-post"
    note: "The request body sets identityParentId, the agent identity's object ID. Least privileged role per the reference: Agent ID Administrator. Learn documents no admin centre steps for this at the time of writing."
  - governs: "Sign-in activity of agent users and agent identities"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Monitoring & health > Sign-in logs"
      docs: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity"
    api:
      kind: "graph"
      call: "GET /beta/auditLogs/signIns"
      docs: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity"
    note: "Read-only monitoring in Entra, at least Reports Reader. Filter Agent type to Agent ID user. The page's example filters agent identity service principal sign-ins. It does not describe Dataverse audit."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-18"
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
  - date: "2026-11-18"
    note: "New briefing: Dataverse agent users backed by a Microsoft Entra agent identity, with the preview-marked Learn procedure and the unpublished licence and default."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 7
verification:
  status: "held"
  date: "2026-11-18"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 47
  unconfirmed: 0
  contradicted: 2
  attempts: 6
  hash: "57b152fac5aa4fa1f69cfdefe52f2c1a"
---

## What's changing

Dataverse can take AI agents as a new kind of user. An agent that has a Microsoft Entra agent identity is added to a Dataverse environment as an agent user and given a security role, which decides what Dataverse data it can reach. The roadmap item describes dedicated, least-privileged roles based on what each agent is meant to do, for agents that work autonomously or on behalf of users.

Microsoft Learn gives the procedure. For agents that need Dataverse data access, an Entra agent user must be created and associated with the agent identity so that security roles can be assigned. An administrator then goes to Settings > Users + permissions > Agents in the Power Platform admin center, selects **+ Add agent**, chooses the agent user from the search list and selects a security role. Learn adds that Copilot Studio agents can automatically receive an Entra agent identity, and that support for creating Entra Agent Application Users from agent identities is not available yet.

The roadmap record shows status Launched, release phases General Availability and Preview, a preview date of June CY2026 and a target of August CY2026, for Worldwide (Standard Multi-Tenant) on the web. The two Learn pages read, Create users and Create Entra agent users, are both headed as preview and prerelease documentation at the time of writing (November 2026). Treat their limits and behaviour as the preview design, not the final one.

## Why it matters

This gives a service owner a per-agent identity inside Dataverse whose reach is set by a security role, the same mechanism used for people. The decision that matters is which role each agent gets: Learn says a user's presence in an environment does not grant access to Dataverse data, and the user must still have an appropriate security role.

The roadmap says agent-driven actions are fully audited. The Entra pages read document Entra audit and sign-in logs for agent identities and agent user accounts; Microsoft Learn's agent user pages describe no Dataverse audit behaviour for them at the time of writing (November 2026). The roadmap says the feature is enabled for admins, makers and marketers automatically, while Learn describes an administrator adding each agent, so Microsoft has not stated what happens on arrival. No source says existing users or agents change, so plan on the Learn procedure being how agents are added.

## Risk assessment

**Data exposure**

- An agent user reaches Dataverse data through the security role chosen on the Manage security roles page. A broad role gives the agent broad access, so choose roles per agent, not one shared role.
- The roadmap states agents get only the access required for their tasks; that depends on the role an administrator selects, and the page read does not say Dataverse limits the role for agent users.

**Security & identity**

- The agent user is tied to an Entra agent identity. Entra says an agent's user account cannot have credentials such as passwords or passkeys, so access is controlled through the parent agent identity and the Dataverse role.
- Learn says Entra Agent Application Users cannot yet be created from agent identities, so application-user based designs cannot rely on this path today.

**Autonomy & actions**

- The roadmap says agents can act autonomously or on behalf of users. Learn's steps do not say how an agent user's role is used in each mode, so confirm this per agent before granting write privileges.

**Change & support**

- Both Learn pages are marked preview and subject to change, while the roadmap shows Launched. Expect procedure or portal labels to move and re-check the path before writing runbooks.

## Cost and licensing

Microsoft Learn's Create users and Create Entra agent users pages name no licence or meter for Dataverse agent users, and no price is published for this feature at the time of writing (November 2026). Power Platform licensing says a user must still have an appropriate security role and any required product licence.

On the Entra side, Microsoft says Entra Agent ID is available to all Entra customers, and that extending Entra security features to agents requires Microsoft Agent 365. Whether that requirement applies to a Dataverse agent user is not stated. The indirect cost is administrator time to create the Entra agent user, add it to each environment and assign a role.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview. The roadmap says the feature is enabled for admins, makers and marketers automatically.

The prerequisite in Learn is an Entra agent identity with an associated Entra agent user. Copilot Studio agents can automatically receive an Entra agent identity. Agent users are added per Dataverse environment. Creating Entra Agent Application Users from agent identities is not available yet. The page does not name the role needed to add agents in the Power Platform admin center.

## Governance guidance

### Before rollout

- List the agents that need Dataverse data and decide, per agent, the least-privileged security role it needs.
- Check that each agent has an Entra agent identity, and plan who creates the associated Entra agent user (row 2 of the controls table).
- Treat the preview label on both Learn pages as a reason to pilot in a non-production environment first.

### At rollout

- Add each agent in the Power Platform admin center under Settings > Users + permissions > Agents, then pick its role on the Manage security roles page (row 1).
- Record which administrator added each agent user and which role was assigned.
- Avoid reusing one broad role across agents.

### After rollout

- Review Entra sign-in logs filtered to agent users (row 3) for unexpected activity.
- Re-check each agent's role when its capabilities change.
- Watch the Learn pages for the end of preview and for Dataverse audit guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which agents are added to a Dataverse environment as agent users, and their security role</strong><br><small>Environment</small><br><small class="controls__note">Preview page. The role is then chosen on the Manage security roles page. Learn documents no API for this step at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Agents › + Add agent <a href="https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creation of the Entra agent user linked to an agent identity</strong><br><small>Agent</small><br><small class="controls__note">The request body sets identityParentId, the agent identity's object ID. Least privileged role per the reference: Agent ID Administrator. Learn documents no admin centre steps for this at the time of writing.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/microsoft.graph.agentUser</code> <a href="https://learn.microsoft.com/graph/api/agentuser-post" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sign-in activity of agent users and agent identities</strong><br><small>Tenant</small><br><small class="controls__note">Read-only monitoring in Entra, at least Reports Reader. Filter Agent type to Agent ID user. The page's example filters agent identity service principal sign-ins. It does not describe Dataverse audit.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Monitoring &amp; health › Sign-in logs <a href="https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/auditLogs/signIns</code> <a href="https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Row 1 is the Dataverse-side control: adding an agent user to an environment and selecting its security role. Learn's agent user pages document the admin centre steps; at the time of writing (November 2026) they document no API for that step. Rows 2 and 3 are Entra-side: creating the agent user account and viewing agent sign-ins.

Role assignment in Dataverse determines data reach. Agent user creation in Entra needs, per the Graph reference, the Agent ID Administrator role as the least privileged supported role, or the AgentIdUser.ReadWrite.IdentityParentedBy permission. The role needed to add agents in the Power Platform admin center is not stated on the pages read.

## Open questions

- Which Dataverse role is needed to add an agent user in the Power Platform admin center, and is there an API for that step? Watch the Create Entra agent users page on Learn.
- Does a Dataverse agent user need a Power Platform or Dynamics 365 licence, or Microsoft Agent 365? Watch the Power Platform licensing pages and Message center.
- How does Dataverse auditing record changes made by an agent user, and how does it distinguish them from human users? Watch the Create users page.
- What happens on arrival: does anything appear automatically, as the roadmap's enabled-automatically wording suggests, or only after an administrator adds an agent?
- When does the preview label come off the Learn pages, given the roadmap shows Launched?

<!-- rationale
risk: Medium. An agent user gets Dataverse data access through the security role an administrator picks, so the exposure depends on that role; the pages describing it are still marked preview and the roadmap's default wording differs from Learn's procedure.
cost: Low. The only cost the sources show is administrator time to create and add agent users; no Dataverse licence or meter for agent users is published at the time of writing, and Entra licensing for agent features is set out on its own page.
impact: Low. Power Platform administrators and the owners of agents that need Dataverse data notice it; nothing in the sources says existing users or apps change.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions; rationale: risk / default: The default state is unknown because Microsoft has not stated what happens on arrival. | Found: Enabled for admins/makers/marketers automatically | Fix: Set defaultState to "on". Replace the sentence ending "Microsoft has not stated what happens on arrival" with "The roadmap says the capability is enabled for admins, makers and marketers automatically; Learn separately documents how an administrator adds an individual agent user." Replace the corresponding arrival question with "Does enabling the capability automatically provision any Dataverse agent users?" In the risk rationale, replace "the roadmap's default wording differs from Learn's procedure" with "the roadmap describes automatic availability while Learn documents per-agent setup". Automatic capability availability and individual account provisioning are different facts.
- [contradicted, blocker] Governance controls: final paragraph / role: Creating an Entra agent user needs either the Agent ID Administrator role or the AgentIdUser.ReadWrite.IdentityParentedBy permission. | Found: Delegated (work or school account) | AgentIdUser.ReadWrite.IdentityParentedBy ... For delegated access using work or school accounts, the admin must be assigned a supported Microsoft Entra role | Fix: Replace the creation-permission sentence with "For delegated creation, the Graph reference lists AgentIdUser.ReadWrite.IdentityParentedBy as the least privileged permission and additionally requires a supported administrator role, with Agent ID Administrator the least privileged. For application access, it lists AgentIdUser.ReadWrite.IdentityParentedBy as the least privileged application permission." These are the requirements at https://learn.microsoft.com/graph/api/agentuser-post; the role is not a substitute for an API permission. | Source: https://learn.microsoft.com/graph/api/agentuser-post
-->
