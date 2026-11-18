---
title: "Microsoft 365 Copilot: admins manage federated Copilot connectors in the Microsoft 365 admin center"
slug: "m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto"
roadmapId: 501584
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins can allow, block, stage or switch off federated Copilot connectors from the Microsoft 365 admin center. Launched; check who can reach third-party data and write-capable tools through Copilot."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "Federated connectors need a Microsoft 365 Copilot add-on licence or Microsoft 365 E7; Copilot Studio licences and pay-as-you-go do not cover them. No separate meter is published on the pages read."
audiences: ["m365-admin","security","service-owner"]
tags: ["federated-connectors","copilot-connectors","connectors","m365-copilot","mcp","agent-and-plugin-access","m365-admin-center","copilot-control-system","write-actions"]
sources:
  - title: "Microsoft 365 Roadmap item 501584"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501584"
    kind: "roadmap"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
videos: []
related: ["m365-copilot-federated-copilot-connectors-in-m365-copilot","m365-copilot-federated-connectors-write-update-delete","mcp","m365-admin-center-usage-reports-m365-copilot-connectors"]
controls:
  - governs: "Which publisher types of connectors are available, including future connectors"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Options are Microsoft, your organisation and external publishers. Clearing a type sets its connectors' staged rollout to No users."
  - governs: "Maximum set of users who can use any agent, plugin or connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Options: All users (default), Specific users or groups, No users. Connector staging cannot widen this population."
  - governs: "Whether an individual connector is on, and which users or groups get it"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot connectors > Your connections"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    api: null
    note: "Enable or disable the connector, or use Add staging in the Staged rollout column. Roles: see Scope."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: documents the three admin center controls for federated Copilot connectors, the licence they need and the gaps in API and audit documentation."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 65
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "8d05cea040aaeecde1ecb06ce79cfe4a"
---

## What's changing

The roadmap item states that admins can govern and manage federated Copilot connectors in the Microsoft 365 admin center. It is marked Launched with a target of February CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) on the Web platform.

Microsoft Learn describes federated Copilot connectors as connectors that use Model Context Protocol (MCP) to fetch data from an external system in real time, using the user's identity and permissions, without indexing that data into Microsoft 365. They are used from Microsoft 365 Copilot Chat, agents, Cowork, Copilot in Word, Excel, PowerPoint and Outlook, and the Researcher agent.

The admin controls Learn documents are three. **Agent and plugin access** allows or blocks connectors in bulk by publisher type (Microsoft, your organisation, external publishers), including connectors released later. **User access** sets the maximum population of users for any agent or plugin, including connectors. **Copilot connectors > Your connections** lets an admin enable or disable an individual connector and limit it to users or Microsoft Entra ID groups with staged rollout. A setting on an individual connector takes precedence over the bulk setting; User access always applies, and changes can take up to 10 minutes to take effect.

Where a connector provides the tools, Copilot can also create, update or delete data in the connected system on the user's behalf. Learn says these tools initially need the user's explicit approval, that the Researcher agent stays read-only, and that write, update and delete tools are part of the connector and are not enabled separately. The connector's Tools view in the admin center is marked "Coming soon" on the overview page.

## Why it matters

These settings decide whether third-party data and actions can be reached from Copilot at all, and for whom. Learn says Microsoft-built federated connectors are available by default when the Microsoft option is selected in Agent and plugin access and the user is included in User access, and that User access defaults to All users. Connectors from external publishers are available only when the external publishers option is selected or an admin turns on the individual connector. Expect licensed users to be able to connect Microsoft-built connectors unless an admin has changed these settings.

Because a user's own permissions in the source system apply, the exposure is mostly about which services you let Copilot reach and which of them can write. Decide the publisher types and the user population deliberately, and pilot individual connectors through staged rollout.

## Risk assessment

**Data exposure**
- Connectors fetch data live from the external system with the user's identity and permissions, and do not index it into Microsoft 365. Responses can therefore carry third-party content into Copilot; Agent and plugin access, User access and per-connector enablement are the controls that limit which sources are reachable.
- Learn warns that data processed by non-Microsoft services isn't subject to Microsoft agreements, so review each external publisher's terms before allowing its connectors.

**Security & identity**
- Users authenticate to each source with their own credentials, and the source system enforces permissions. An over-permissioned account in the source is therefore also over-permissioned in Copilot.
- If an MCP server restricts inbound traffic by source IP, Learn says to allow the static egress IP addresses used by Microsoft 365 Copilot; static egress is enabled by default for MCP-based federated connectors.

**Autonomy & actions**
- Where a connector provides the tools, Copilot can create, update or delete data in the connected system. Learn says these actions export Customer Data to the connected system and initially need the user's explicit approval.
- Users can choose Allow for conversation or Always allow for a tool, and a tool that a publisher adds or changes is set back to Needs approval. Write tools are not enabled separately from the connector, so blocking the connector is the documented way to remove them.

**Change & support**
- Publishers can add or change tools over time, and new connectors of an allowed publisher type follow the default rollout to everyone in User access. Re-check the allowed types after each new connector wave.
- Up to 10 minutes can pass before a change applies, so test with a test user before telling the help desk.

## Cost and licensing

Learn's connector prerequisites page says federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7), and are not supported with Copilot Studio licences or Microsoft 365 Copilot pay-as-you-go. The same page says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. A user also has to have a Microsoft 365 Copilot licence to see a federated connector, according to the federated connectors overview.

The pages read publish no separate credit rate or meter for federated connectors. Indirect cost is admin time for the roles, staging and review described under governance.

## Scope

**Who sees a connector.** Learn says a user sees a federated connector only when its publisher type is allowed (or the connector was turned on individually), the connector is enabled, the user is in User access and in the connector's staged rollout, and the user has a Microsoft 365 Copilot licence. Installed for and agent sharing settings don't apply to federated connectors.

**Roles.** The manage page says you need Global Administrator or Search Administrator to manage federated connectors. The connector prerequisites page says you must be an AI administrator to configure and deploy Copilot connectors. The two pages name different roles.

**Availability.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phase General Availability.

## Governance guidance

### Before rollout
- Confirm which administrator holds a role Learn names for connector management (Global Administrator or Search Administrator on the manage page; AI administrator on the prerequisites page) and who will own the review.
- Decide the maximum user population in **User access** (All users is the default) before enabling any connector.
- Choose which publisher types to keep in **Agent and plugin access**, remembering that connectors released later of an allowed type follow the default rollout.
- Review each connector's capabilities, privacy terms and third-party agreements before enabling one that exposes write, update or delete tools, as Learn advises.
- Check whether any MCP server you operate restricts traffic by source IP, and if so allow the static egress addresses Learn refers to.

### At rollout
- Clear the publisher types you do not want in **Agent and plugin access**, then turn on only the specific connectors you need from **Your connections**.
- Pilot a connector with a group by using **Add staging** in the **Staged rollout** column; staging cannot extend beyond User access.
- Tell users and the help desk that actions run with the user's own permissions in the third-party service and that write actions ask for approval.
- Test as a test user in Copilot Chat **Settings** > **Sources** after the changes have had up to 10 minutes to apply.

### After rollout
- Review enabled connectors whenever a publisher adds tools, because new or changed write-capable tools return to Needs approval.
- Revisit **Agent and plugin access** when new connectors of an allowed type appear.
- Ask your compliance team to confirm which Purview audit activity records connector use; see [Microsoft Purview Audit](/concepts/auditing/) and the open questions below.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which publisher types of connectors are available, including future connectors</strong><br><small>Tenant</small><br><small class="controls__note">Options are Microsoft, your organisation and external publishers. Clearing a type sets its connectors' staged rollout to No users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Maximum set of users who can use any agent, plugin or connector</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific users or groups, No users. Connector staging cannot widen this population.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual connector is on, and which users or groups get it</strong><br><small>App</small><br><small class="controls__note">Enable or disable the connector, or use Add staging in the Staged rollout column. Roles: see Scope.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot connectors › Your connections <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn writes the route to the connector list both as Copilot connectors > Your connections and as Copilot > Connectors > Your connections; the row follows the overview's sentence. Clearing a publisher type in Agent and plugin access leaves existing connectors visible to admins in Your connections but sets their staged rollout to No users, and a setting on an individual connector takes precedence over the bulk setting.

The manage page also lists Agents > Tools for tool-level and connector-level blocking, which is a further control to look at alongside these rows. Microsoft Learn documents no API for these three settings at the time of writing (November 2026), so the API side of each row is empty.

## Open questions

- Which Microsoft Purview audit events record federated connector reads and write, update or delete actions? The overview says admins can audit activity in Microsoft Purview but names no events; watch the overview page.
- Will Microsoft document an API or script for Agent and plugin access, User access or connector enablement? Watch the manage federated connector availability page.
- When will the connector Tools view in the admin center, marked "Coming soon" on the overview, be available, and for which connectors?
- Which role is the intended one for connector management: Global Administrator or Search Administrator, or AI administrator? Learn's manage and prerequisites pages name different roles.

<!-- rationale
risk: Medium. Federated connectors can read, and where a connector provides the tools, change data in third-party systems, but the admin center settings and per-action user approval cover most of that exposure.
cost: Low. Each user needs a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7), and Learn says connector grounding is included with it at no extra charge; the remaining cost is admin time.
impact: Medium. Admins configure it, and licensed users who connect a source see it in Copilot Chat, agents and the Office apps, so a change to the settings is noticed by those users.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls; Open questions / absence: Microsoft has documented no automation that changes Agent and plugin access publisher-type settings. | Found: These resources also support remediation and applyOnce. areMicrosoftAppsAllowed | Write | Boolean areTenantScopedAppsAllowed | Write | Boolean areISVAppsAllowed | Write | Boolean | Fix: Replace controls[0].api null with kind graph, call 'POST /beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Add to its note: 'Preview TCM automation: set mode to applyOnce and include resourceType microsoft.agent.allowedagenttypes, resourceVersion 1, with properties.valueObject.areMicrosoftAppsAllowed, areTenantScopedAppsAllowed and areISVAppsAllowed for the publisher choices. Requires delegated access and AI Administrator; see https://learn.microsoft.com/graph/utcm-agent-resources.' Cite that resource page. Replace the blanket no-API sentence with 'Preview TCM automation documents Agent and plugin access and the All users/No users choices for User access; per-connector enablement automation is not yet documented.' Remove Agent and plugin access from the API open question. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#allowedagenttypes-resource-type
- [contradicted, blocker] controls[1].api; Governance controls; Open questions / absence: Microsoft has documented no automation that changes User access. | Found: userAssignmentCategory | Write | String | Specifies whether all users or no users can access agents and plugins. | everyone, noOne | Fix: Replace controls[1].api null with kind graph, call 'POST /beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Add to its note: 'Preview TCM automation: set mode to applyOnce and include resourceType microsoft.agent.useraccess, resourceVersion 1, with properties.valueObject.userAssignmentCategory set to everyone or noOne. This reference does not document setting Specific users or groups. Requires delegated access and AI Administrator; see https://learn.microsoft.com/graph/utcm-agent-resources#useraccess-resource-type.' Cite that page. Remove the blanket User access API absence and narrow its open question to automating specific-user or group assignments. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#useraccess-resource-type
- [unsupported, blocker] front matter: defaultState; Why it matters / default: The administration change is on by default, so licensed users can connect Microsoft-built connectors unless an admin changed settings. | Found: Searched: 'Agent and plugin access default Microsoft selected', 'federated connectors default enabled'; read overview, manage and agent-settings. Current text gives conditional connector availability and All users, not an arrival default for this control change. | Fix: Set defaultState to unknown. Replace 'Expect licensed users to be able to connect Microsoft-built connectors unless an admin has changed these settings.' with 'Microsoft has not stated the arrival default for this administration change. Check the tenant settings: Microsoft-built connector availability depends on Agent and plugin access and User access.' Retain the separately documented All users default and conditional connector-availability sentence.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Autonomy & actions; rationale: risk / behaviour: Where the connector exposes suitable tools, Copilot can create, update or delete data on the user's behalf. | Found: Where a connector provides the tools, Copilot can also create, update, or delete data in the connected system on the user's behalf. | Fix: Add: 'Microsoft Learn is inconsistent: the general connectors overview still calls federated connectors read-only, while also announcing write actions from early October 2026; the dedicated federated overview documents the write behaviour described here.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/overview alongside the existing dedicated overview. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, minor] rationale: risk / consistency: Per-action user approval covers most of the write exposure. | Found: Always allow | Runs the action and doesn't ask again for this tool until the user changes the setting or the publisher changes the tool. | Fix: Replace 'the admin center settings and per-action user approval cover most of that exposure' with 'the admin center settings and initial tool approval cover much of that exposure, although users can allow a tool for the conversation or persistently'. This agrees with the existing body and does not imply confirmation for every action. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, minor] Governance guidance: Before rollout, final bullet; Governance controls table / consistency: The governance checklist's controls are represented in the controls table. | Found: Checklist: 'if so allow the static egress addresses Learn refers to.' Table rows cover publisher types, User access and individual connector enablement/staging, but not the MCP server firewall. | Fix: Remove the final Before rollout bullet instructing the reader to allow static egress addresses. Keep the sourced network advice under Risk assessment; do not add an unverified firewall control row.
-->
