---
title: "Microsoft 365 Copilot: federated Copilot connectors read third-party data in real time"
slug: "m365-copilot-federated-copilot-connectors-in-m365-copilot"
roadmapId: 569212
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Federated Copilot connectors let licensed users query third-party systems through MCP using their own identity, without indexing. Admins should set connector availability and User access before the November CY2026 target."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Federated connectors need a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7); they are not supported with Copilot Studio licences or Microsoft 365 Copilot pay-as-you-go. Learn says no extra charges apply for connector grounding in Copilot."
audiences: ["m365-admin","security","compliance","end-user"]
tags: ["copilot-connectors","federated-connectors","mcp","m365-copilot","m365-admin-center","write-actions","real-time","extensibility","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 569212"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569212"
    kind: "roadmap"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Set up custom federated connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors overview"
    url: "https://learn.microsoft.com/plugins/overview-copilot-connector"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Microsoft 365 Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot & Microsoft 365 Copilot Chat"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot"
    kind: "learn"
  - title: "Model Context Protocol (MCP) overview"
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/mcp-overview"
    kind: "learn"
  - title: "Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
videos: []
related: ["m365-copilot-federated-connectors-write-update-delete","mcp","m365-admin-center-usage-reports-m365-copilot-connectors"]
controls:
  - governs: "Which connector publisher types are available to users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Roles per Learn: Global Administrator or Search Administrator. Clearing a type sets its connectors' staged rollout to No users and applies to future connectors. API: general TCM preview control, global service only."
  - governs: "Maximum population that can use any connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "UI options: All users (default), Specific users or groups, No users. Staging can narrow but not widen this. API: general TCM preview control, everyone or noOne only, global service only."
  - governs: "Enabling, disabling and staging an individual connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Enable, Disable and Delete are on the same Your connections list. Delete applies to custom connectors only."
  - governs: "Blocking a connector or its tools"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "API is a general control: beta, needs an Agent 365 licence, not in US Government clouds, and Microsoft has not confirmed it applies to federated connectors."
  - governs: "Tenant-wide switch for all write, update and delete tools"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says write, update and delete tools are part of the connector and aren't enabled separately; users set approval per tool."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-18"
    note: "New briefing: federated Copilot connectors at general availability, with the Learn-documented availability controls, licence requirement and write-action approval model."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 89 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: added the Graph TCM preview API for publisher types and User access, reworded the audit-trail and Purview statements, and dropped the Purview checklist bullet."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 98 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: the write, update and delete row now names only the tenant-wide bulk switch, and the page notes that Agents > Tools documents tool-level and connector-level blocking."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 99 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 99
  confirmed: 99
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6801a42dc2969fbcfaa5a283a2ff77c4"
---

## What's changing

Federated Copilot connectors let Microsoft 365 Copilot query third-party systems live, using the Model Context Protocol (MCP, an open standard for connecting AI tools to data sources). The roadmap item states that they do not store or index customer data in Microsoft, that access uses the user's own identity, and that administrators govern them in the Microsoft 365 admin center. It says that with general availability they will be supported across the Researcher agent and Microsoft 365 Chat.

Microsoft Learn already documents federated connectors, so this item reads as a general availability milestone for a documented capability. The Learn overview lists more experiences than the roadmap text: Microsoft 365 Copilot Chat, Agents, Cowork, and Copilot in Word, Excel, PowerPoint and Outlook, as well as Researcher. It states that Researcher stays read-only, while where a connector provides the tools, Copilot can create, update or delete data in the connected system with the user's approval.

The roadmap record gives the status as In development, the release phase as General Availability and the target as November CY2026, which is a Microsoft target and not a commitment. It lists Desktop, Mac and Web, and the GCC, GCC High and DoD clouds. Learn does not say which of the documented connectors or experiences arrive with this milestone.

## Why it matters

This puts a new path from Copilot to systems outside Microsoft 365 in front of licensed users. The documented identity model limits what Copilot can reach to what the signed-in user can already reach in the source, and the source system remains the system of record. Learn also says admins can audit connector activity in Microsoft Purview; the connector overview gives no audit path or event names.

Microsoft has not stated what happens on arrival, so plan on the documented controls rather than assuming a default. Learn says Microsoft-built connectors are available when **Allow agents and plugins built by Microsoft** is selected and the user is in **User access**, and that external-publisher connectors are available only when their option is selected or an admin turns on the individual connector. Deciding those settings before the target month is the sensible preparation.

## Risk assessment

**Data exposure**

- Learn states that federated connectors do not index external data into Microsoft 365 and that Copilot accesses only data the user already has permission to see. Responses still reach the user's Copilot conversation, so a user who can see sensitive source records can bring them into Copilot output.
- Connector-specific sensitivity-label and data-policy enforcement on returned source data is not stated in the connector documentation. Microsoft Purview does document auditing, eDiscovery and retention for Copilot prompts and responses.

**Security & identity**

- Users sign in to each source with their own credentials. The Learn overview says OAuth 2.0 and encrypted communication secure access, and that the source system enforces permissions.
- Custom connectors support Microsoft Entra SSO, OAuth 2.0 or No Auth. Check which method a custom connector uses before allowing it.

**Autonomy & actions**

- Where a connector provides the tools, Copilot can create, update or delete data in the third-party system. Learn says these tools require user approval and default to Needs approval.
- A user can choose Always allow for a tool, which then does not ask again until the user changes the setting or the publisher changes the tool. A publisher-added or changed write tool is reset to Needs approval.
- Learn says write, update and delete tools are part of the connector and are not enabled separately. Learn also documents tool-level and connector-level blocking under **Agents** > **Tools**.

**Change & support**

- Publishers can add or change tools over time, so a connector's capabilities can change after you approve it.
- Learn says changes to enable, disable and staging take up to 10 minutes to take effect, and that users may need to refresh Copilot.
- If your MCP server restricts source IP addresses, Learn says to allow Microsoft 365 Copilot's static egress addresses; static egress is enabled by default.

## Cost and licensing

Learn's connector prerequisites page says federated connectors require a Microsoft 365 Copilot add-on licence for every user who queries the federated source. Its licensing table marks federated connectors as supported with Microsoft 365 + Microsoft 365 Copilot add-on and Microsoft 365 E7, and not supported with a Copilot Studio licence or Microsoft 365 Copilot pay-as-you-go.

The same page says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. No Copilot Credits or other meter for federated connectors is documented at the time of writing (November 2026). Charges or terms set by the third-party source are outside these pages and are not published there.

Indirect costs are admin time to configure the controls below, and for custom connectors the work of building and registering an MCP server.

## Scope

**Users.** Learn says a user sees a federated connector only when its publisher type is allowed (or the connector was turned on individually), the connector is enabled, the user is in **User access** and in any staged rollout, and the user has a Microsoft 365 Copilot licence. Users also connect to each source themselves in Copilot Chat under **Settings** > **Sources**.

**Roles.** Learn pages differ: the availability page names Global Administrator or Search Administrator, the custom connector page names Global Administrator or AI Administrator, and the prerequisites page names AI administrator.

**Clouds and platforms.** The roadmap lists GCC, GCC High and DoD, and Desktop, Mac and Web. Learn's connectors overview says Copilot connectors are available in those government clouds, while the Microsoft 365 Copilot service description says external connections and partner connectors are not enabled by default for government clouds. The custom connector FAQ notes a connector may not be available in your cloud (for example GCC).

**Rollout.** The roadmap target is November CY2026. Learn does not describe a rollout mechanism for this milestone.

## Governance guidance

### Before rollout

- Decide per publisher type whether to allow Microsoft, your organisation's and external publishers' connectors in **Agent and plugin access** (controls table, first row), noting that clearing a type applies to connectors released in future too.
- Set **User access** to the population you are willing to pilot, because it caps who can use any connector (controls table, second row).
- Review each connector you intend to enable for write, update or delete tools, and check its privacy terms and third-party agreements against your acceptable-use rules, as Learn advises.
- Confirm that pilot users hold a Microsoft 365 Copilot add-on licence or Microsoft 365 E7.

### At rollout

- Stage each enabled connector to a pilot group using **Staged rollout** before releasing it with **Deploy to all users** (controls table, third row).
- Brief users that actions run under their own permissions in the third-party service, that write actions ask for approval, and what **Always allow** does.
- Check the connector as a non-admin test user under **Settings** > **Sources** in Copilot Chat, allowing up to 10 minutes for changes to apply.

### After rollout

- Disable or block a connector that behaves unexpectedly, using **Disable** in **Your connections** or **Block** in **Agents** > **Tools** (controls table, third and fourth rows).
- Re-check connectors with write tools when publishers change them, since changed write tools are reset to Needs approval for users.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connector publisher types are available to users</strong><br><small>Tenant</small><br><small class="controls__note">Roles per Learn: Global Administrator or Search Administrator. Clearing a type sets its connectors' staged rollout to No users and applies to future connectors. API: general TCM preview control, global service only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Maximum population that can use any connector</strong><br><small>Tenant</small><br><small class="controls__note">UI options: All users (default), Specific users or groups, No users. Staging can narrow but not widen this. API: general TCM preview control, everyone or noOne only, global service only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Enabling, disabling and staging an individual connector</strong><br><small>Tenant</small><br><small class="controls__note">Enable, Disable and Delete are on the same Your connections list. Delete applies to custom connectors only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blocking a connector or its tools</strong><br><small>Agent</small><br><small class="controls__note">API is a general control: beta, needs an Agent 365 licence, not in US Government clouds, and Microsoft has not confirmed it applies to federated connectors.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for all write, update and delete tools</strong><br><small>Tenant</small><br><small class="controls__note">Learn says write, update and delete tools are part of the connector and aren't enabled separately; users set approval per tool.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says **Agent and plugin access**, **User access**, the connector's own enable and staged rollout settings, and any block in **Agents** > **Tools** must all allow a user; if any one is restrictive the user cannot use the connector. A setting on an individual connector takes precedence over the bulk **Agent and plugin access** setting, and **User access** always applies. **Installed for** and agent sharing settings do not apply to federated connectors.

The API side of the first two rows is a general Tenant Configuration Management (TCM) preview control in Microsoft Graph beta: `POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors` with mode `applyOnce`. Learn says it is available only in the global service, not in national clouds. It needs the delegated `ConfigurationMonitoring.ReadWrite.All` permission for the calling app, the delegated `CopilotPolicySettings.ReadWrite` permission for the TCM service principal, and AI Administrator for the signed-in user. For publisher types, the `microsoft.agent.allowedagenttypes` resource takes a body such as `{"displayName":"Configure publisher access","mode":"applyOnce","baseline":{"displayName":"Publisher access","resources":[{"displayName":"Allowed agent types","resourceType":"microsoft.agent.allowedagenttypes","resourceVersion":1,"properties":{"valueObject":{"areMicrosoftAppsAllowed":true,"areTenantScopedAppsAllowed":true,"areISVAppsAllowed":false,"areMicrosoftCertifiedThirdPartyAppsAllowed":true}}}]}}`. For User access, the `microsoft.agent.useraccess` resource supports `everyone` or `noOne`, not specific-user or group assignment: `{"displayName":"Configure agent user access","mode":"applyOnce","baseline":{"displayName":"User access","resources":[{"displayName":"Agent user access","resourceType":"microsoft.agent.useraccess","resourceVersion":1,"properties":{"valueObject":{"userAssignmentCategory":"noOne"}}}]}}`.

Microsoft Learn documents no tenant-wide switch for all write, update and delete tools at the time of writing (November 2026). The Graph Package Management API row is a general control for agents and tools; Learn's overview of that API lists tools such as plugins, MCP servers and skills, but Microsoft has not confirmed it covers federated connectors. It requires a Microsoft Agent 365 licence and is not available in the US Government clouds.

## Open questions

- What is the default state when federated connectors reach general availability: which connectors are available to licensed users without admin action? Watch the Learn federated connectors pages and Message center.
- Which of the documented experiences (Chat, Agents, Cowork, Word, Excel, PowerPoint, Outlook, Researcher) and which connectors are in the November CY2026 general availability scope, given the roadmap names only Researcher and Microsoft 365 Chat?
- Which federated connectors are available in GCC, GCC High and DoD, given the service description says external connections and partner connectors are not enabled by default there?
- Do sensitivity labels or data policies apply on returned source data from federated connectors, and which Purview audit events record connector reads and writes?
- Does the Package Management API in Microsoft Graph block and unblock federated connectors, and is any API documented for connector enablement or staged rollout?

<!-- rationale
risk: Medium. Connectors act under each user's identity, and where a connector provides the tools it can create, update or delete data in the third-party system, so availability and approval settings need deciding.
cost: Low. Learn says federated connectors need a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) per user and that connector grounding is included with those licences, so the main cost is admin time.
impact: Medium. Only users with a Microsoft 365 Copilot licence who are allowed to use a connector and sign in to the source notice it, and Microsoft has not stated what happens on arrival.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Autonomy & actions; rationale: risk / behaviour: Where a connector supplies the tools, Copilot can create, update or delete source data with user approval. | Found: Can read data and, where a connector provides the tools, create, update, or delete data with the user's approval. | Fix: After this description, add: "The broader connectors overview still calls federated connectors read-only, alongside a note that write actions were planned from early October 2026; this briefing follows the dedicated federated connectors page." Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/overview#types-of-copilot-connectors, which says "Federated connectors are read-only; they can search and fetch content but can't write data back." | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Risk assessment: Security & identity; rationale: impact / behaviour: Users sign in to each source using their own credentials. | Found: User credentials, rather than admin credentials, are required to connect to any data source. | Fix: Qualify the sentence as "Where a source requires authentication, users sign in with their own credentials." In the impact rationale, replace "and sign in to the source" with "and, where required, sign in to the source". The cited custom setup page explicitly supports "No Auth" and says "Users don't need to authenticate"; the body already notes that exception. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
-->
