---
title: "Microsoft Agent 365: registry sync from external AI platforms"
slug: "microsoft-agent-365-registry-sync"
roadmapId: 559615
topic: "copilot-studio"
products: ["Microsoft 365 admin center","Microsoft Agent 365"]
summary: "Agent 365 can connect to platforms such as Amazon Bedrock and Google Vertex AI and sync their agents into the Microsoft 365 agent registry. An administrator creates each connection; nothing syncs until someone does."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Microsoft's overview says Agent 365 is licensed per user. The service description lists external-platform registry synchronisation as included with Microsoft 365 plans, and also marks it Yes under Requires Microsoft 365 E7 / G7 or Agent 365, so the entitlement is ambiguous."
audiences: ["m365-admin","security","service-owner"]
tags: ["agent-365","agent-registry","agent-governance","m365-admin-center","control-plane","agents","telemetry"]
sources:
  - title: "Microsoft 365 Roadmap 559615"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559615"
    kind: "roadmap"
  - title: "Connected platforms in Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms"
    kind: "learn"
  - title: "How does Agent 365 connect agents from non-Microsoft platforms?"
    url: "https://learn.microsoft.com/microsoft-agent-365/guidance/connected-platforms"
    kind: "learn"
  - title: "Connect Google Vertex AI to Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms-google-vertex-ai"
    kind: "learn"
  - title: "Connect Databricks Genie to Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms-databricks-genie"
    kind: "learn"
  - title: "Choose an Agent 365 integration option"
    url: "https://learn.microsoft.com/microsoft-agent-365/developer/choose-integration-option"
    kind: "learn"
  - title: "Microsoft Agent 365 service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Graph API for agent registry and agent details"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/graph-api"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","m365-copilot-agent-365-business-analytics-experience","agent-identity"]
controls:
  - governs: "Creating, editing and deleting connections to external AI platforms"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Connected platforms > Manage > + Connect a platform"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms"
    api: null
    note: "Agent 365 AI administrator creates and manages connections; the platform administrator supplies credentials. General guide: select Sync agents after saving. Databricks guide: saving starts the first sync."
  - governs: "Whether observability data is collected for a connection's agents"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Connected platforms > Manage > connection > Edit > Collect agent observability data"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms"
    api: null
    note: "Frontier preview. On by default for new connections; clearing it stops new collection, and earlier telemetry is retained per existing behaviour. Provider query charges can apply."
  - governs: "Tenant-wide switch to turn registry sync off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026); control is by whether a connection exists."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-04-23T23:15:05"
changes:
  - date: "2026-11-18"
    note: "New briefing: documents Agent 365 registry sync (Connected platforms), its manual sync and read-only model, and the gaps in licensing and API coverage."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: replaced the plan-availability gap with the service description's table, added the Edit step to the observability path, rated risk low, and noted the Databricks sync and permission differences and the preview label."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 74
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "a60b620cb890f9feb41f3e2d9179cd6c"
---

## What's changing

Registry sync lets an administrator connect Microsoft Agent 365 to an external AI platform so that agents built there are discovered and added to the Microsoft 365 agent registry. The roadmap item describes it as connecting to external AI platforms to discover agents created outside Microsoft and automatically sync them into the registry for more complete visibility and governance.

Microsoft Learn already documents the feature as **Connected platforms** in the Microsoft 365 admin center. It lists seven supported platforms with agent synchronisation: Amazon Bedrock (Agents Classic and AgentCore), Google Vertex AI, Salesforce Agentforce, Databricks Genie, Anthropic Claude Managed Agents, Oracle Generative AI Agents and Snowflake Cortex. Setting up a connection is shared: the Agent 365 AI administrator creates and manages it in the Microsoft 365 admin center, and the platform administrator creates the credentials and grants the permissions on the source platform.

The documented behaviour has limits. Synchronisation is manual (an administrator selects **Sync agents**; it does not run on a schedule), and removal of an agent from the source platform is not guaranteed to remove it from the registry. The general Connected platforms guide says to select **Sync agents** after saving a connection; the Databricks Genie guide says saving starts the first synchronisation automatically, with later runs using **Sync agents**. Registry sync gives visibility and governance for agents you do not build or host yourself, and does not add code-level capabilities.

The roadmap record gives status In development, a preview target of May CY2026 and a general availability target of July CY2026, for Worldwide (Standard Multi-Tenant) on the web. Learn describes the feature as available, so the two differ. Microsoft's integration-options page labels registry sync as preview. Treat the record's dates as Microsoft's targets and check the Learn page for the current position.

## Why it matters

An agent registry is only as useful as its coverage. Registry sync brings supported agents from Bedrock, Vertex AI and Agentforce into the Microsoft 365 agent registry, and Learn states that coverage depends on the platform and the agents it exposes, so an entry is not a guarantee that every agent on the platform is included. It is the documented route to bring supported ones into the same inventory as Microsoft and in-house agents.

The default state is that nothing syncs until an administrator creates a connection and starts synchronisation, so existing tenants see no change without action. The decisions are who becomes the connection owner, which platform credentials you are willing to store in Microsoft 365, and whether to leave observability collection on, since that setting is on by default for new connections.

## Risk assessment

**Data exposure**

- Agent 365 stores the credentials you enter for a connection as encrypted connection data within Microsoft 365. Every supported platform needs a key-based credential such as an API key, secret or private key; keyless options such as workload identity federation or role assumption are not supported at the time of writing (November 2026). Scope the source-platform permissions to what the platform guide lists.
- **Collect agent observability data** is enabled by default for new connections and retrieves agent activity telemetry from the source platform with the stored credentials. Learn notes this can query the provider's own logging or data services and incur charges billed by the provider.

**Security & identity**

- Learn describes connections as read-only by design: Agent 365 does not invoke or interact with the source agents and does not write to the source platform, except an explicit administrator action to remove a synchronised agent, which needs a separate optional delete permission you can choose not to grant. The Google Vertex AI guide lists a delete permission (`aiplatform.reasoningEngines.delete`) among the permissions to grant, so check which permissions you give the service account. For Databricks Genie, **Can Manage** is required for activity collection and also permits moving an agent to the trash when an administrator removes it in Agent 365.
- Agent 365 calls source-platform APIs from a fixed set of outbound IP addresses. Where the source platform restricts network access, the connection can fail with an authentication error even when the credentials are correct.

**Autonomy & actions**

- The documentation describes no autonomous behaviour: synchronisation is started by an administrator. Documented behaviour after a source agent is removed is that reconciliation is not guaranteed, so a registry entry can outlive the agent.

**Change & support**

- Synchronisation is manual and there is no documented schedule, so the registry reflects the last sync, not the current state of the platform.
- Observability coverage varies: Oracle Generative AI Agents and Snowflake Cortex are marked Coming soon, and Learn marks Databricks Genie observability as available through the Frontier program. Frontier previews are subject to the existing preview terms of your customer agreements.

## Cost and licensing

**Licence.** Microsoft's Agent 365 overview says the product is licensed per user, that at least one user must be licensed with a qualifying Agent 365 licence to enable Agent 365, and that it works best with Microsoft E5 as a prerequisite. It points to Microsoft's Agent 365 plans and pricing page and service description for plan details. The Connected platforms page names no separate licence or price for registry sync, and the roadmap item states none.

Microsoft's [Agent 365 service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365#feature-availability) lists external-platform registry synchronisation as included with Microsoft 365 Enterprise, Business, Education and Front Line Worker plans. Its same row also marks Yes under Requires Microsoft 365 E7 / G7 or Agent 365, so the table is ambiguous about the additional entitlement.

**Meter and indirect cost.** Learn documents no Microsoft meter for registry sync. Where observability collection is on, retrieving telemetry from the source platform might query the provider's own services (Learn gives Google BigQuery and Amazon S3 as examples) and can incur data access or query charges billed by that provider. Admin time is the other cost: creating credentials with the platform administrator, validating the connection and re-running **Sync agents**.

## Scope

Users and licences: the registry and its connections are managed by administrators. The Agent 365 AI administrator creates and manages connections; the platform administrator owns the source account, credentials and permissions.

Clouds, platforms and rollout: the roadmap record lists Worldwide (Standard Multi-Tenant) and the web, with release phases General Availability and Preview. Status is In development, with a preview target of May CY2026 and a general availability target of July CY2026. Learn documents the feature as available, Microsoft's integration-options page labels registry sync as preview, and the rollout mechanics are not stated.

Prerequisites: a supported source platform, credentials and permissions created by its administrator, and allowed access from Agent 365's outbound IP addresses where the platform restricts the network. Learn says registry sync does not require code changes to the agents.

## Governance guidance

### Before rollout

- Agree which team holds the Agent 365 AI administrator role for connections, and which platform administrator owns credentials for each source platform.
- Choose the platform, account, project, workspace or region to connect, and create a credential limited to the permissions that platform's guide lists. Decide whether to grant the optional delete permission.
- Allow Agent 365's outbound IP addresses on the source platform if it restricts network access.
- Check the provider's pricing for telemetry queries before deciding whether to leave **Collect agent observability data** on.

### At rollout

- Create the connection under Agents > All Agents > Connected platforms, validate the credentials and save it.
- Start synchronisation (the general guide says to select **Sync agents** after saving; the Databricks Genie guide says saving starts the first run) and confirm the expected agents appear in the registry, with the platform administrator.
- Set **Collect agent observability data** deliberately on each connection rather than accepting the default.

### After rollout

- Re-run **Sync agents** on a cadence you choose and after known changes on the source platform.
- Reconcile the registry against the source platform and remove manually any agent that no longer exists there.
- Rotate or revoke the credentials with the platform administrator, and delete connections that are no longer needed.
- Review the synchronisation status and errors on each connection.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating, editing and deleting connections to external AI platforms</strong><br><small>Tenant</small><br><small class="controls__note">Agent 365 AI administrator creates and manages connections; the platform administrator supplies credentials. General guide: select Sync agents after saving. Databricks guide: saving starts the first sync.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Connected platforms › Manage › + Connect a platform <a href="https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether observability data is collected for a connection's agents</strong><br><small class="controls__note">Frontier preview. On by default for new connections; clearing it stops new collection, and earlier telemetry is retained per existing behaviour. Provider query charges can apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Connected platforms › Manage › connection › Edit › Collect agent observability data <a href="https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn registry sync off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026); control is by whether a connection exists.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Connections are created and managed by the Agent 365 AI administrator; the platform administrator owns the credentials and permissions on the source side. Credential rotation, changing the source scope and revoking access follow the provider guide for each platform.

The checklist's source-platform IP allow-list, credential rotation and revocation, manual removal of registry agents, and synchronisation status review have no rows in the table. They are done on the source platform or on the connection page, not through a setting listed above.

Learn's Agent settings page lists agent management rules, agent and plugin access, security templates, sharing, user access, feedback sharing and tags. It lists no setting that switches registry sync on or off for the tenant, hence the row above. Whether the existing agent and plugin access or user access settings apply to synced agents is not stated.

Microsoft Learn documents no API for creating connections or running **Sync agents** at the time of writing (November 2026). The Graph agent registry APIs Microsoft documents list agents in the tenant inventory; Microsoft does not say whether they cover synced agents or connections.

## Open questions

- The service description marks registry synchronisation Yes both under included with Microsoft 365 plans and under Requires Microsoft 365 E7 / G7 or Agent 365. Which entitlement does a tenant need, and is there any charge separate from the per-user licence? Watch the Agent 365 service description and Microsoft's Agent 365 pricing page.
- The roadmap item is In development with a July CY2026 target, yet Learn documents the feature and the integration-options page labels it preview. Which parts are generally available and which remain in preview? Watch the roadmap record and the Connected platforms page.
- Will synchronisation be scheduled, and will removal from a source platform be reconciled automatically? Learn lists both as current limitations.
- Do the Agent settings (agent and plugin access, user access, agent management rules) apply to synced agents? Watch the Agent settings page.
- Will Microsoft document an administrative API or PowerShell route for connections and synchronisation?

<!-- rationale
risk: Low. Nothing syncs until an administrator creates a connection. After opt-in, credentials are stored in Microsoft 365 and observability collection is enabled by default for new connections.
cost: Medium. Agent 365 is licensed per user, and the Connected platforms page names no separate licence for registry sync. Observability collection can incur query charges billed by the source platform.
impact: Low. Administrators create the connections and see the synced agents in the registry; the documentation describes no change for end users.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: final sentence / absence: Microsoft does not say whether the documented registry inventory APIs cover synchronised agents. | Found: Get all agents in your inventory: Use the List packages API, to retrieve a complete list of agents in your tenant for compliance and reporting. | Fix: Replace the final sentence with: "The Graph agent registry APIs Microsoft documents list agents in the tenant inventory; those references do not document connection management or synchronisation operations." The cited guide describes its inventory coverage as all agents, not an unconfirmed subset. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/graph-api
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance; Governance controls: missing-rows paragraph / consistency: The governance checklist directs readers to use controls that have no corresponding controls-table rows. | Found: Allow Agent 365's outbound IP addresses on the source platform if it restricts network access. The checklist's source-platform IP allow-list, credential rotation and revocation, manual removal of registry agents, and synchronisation status review have no rows in the table. | Fix: The IP allow-list step before rollout and the manual-removal, credential-rotation/revocation and synchronisation-status steps after rollout have no corresponding rows. Remove those checklist directives while retaining the existing explanatory prose; acknowledging missing rows does not satisfy the checklist/table requirement.
-->
