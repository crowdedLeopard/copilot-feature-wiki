---
title: "Microsoft 365 Copilot: federated Copilot connectors read third-party data live through MCP"
slug: "m365-copilot-federated-copilot-connectors"
roadmapId: 501120
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Launched: Copilot can query third-party sources in real time through MCP without indexing them. It needs a Copilot add-on licence; admins set availability in the Microsoft 365 admin center."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "December CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn's connector prerequisites page requires a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) for every user who queries a federated source, and says Copilot Studio licences and Copilot pay-as-you-go do not support federated connectors. No separate price is published."
audiences: ["m365-admin","security","compliance","end-user"]
tags: ["federated-connectors","copilot-connectors","mcp","m365-copilot","researcher","agent-and-plugin-access","write-actions","admin-controls"]
sources:
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Staged rollout for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    kind: "learn"
  - title: "Set up custom federated connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors"
    kind: "learn"
  - title: "Submit a federated Microsoft 365 Copilot connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/submit-federated-connector"
    kind: "learn"
  - title: "Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Using MCP tools with Agents"
    url: "https://learn.microsoft.com/agent-framework/agents/tools/local-mcp-tools"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 501120"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501120"
    kind: "roadmap"
videos: []
related: ["m365-copilot-federated-copilot-connectors-in-m365-copilot","m365-copilot-federated-connectors-write-update-delete","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","copilot-connectors","mcp"]
controls:
  - governs: "Which publisher types of federated connectors are available, including future ones"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Clearing a type sets its connectors' staged rollout to No users; an individual connector setting takes precedence."
  - governs: "Which users can use any agent, plugin or connector (tenant-wide ceiling)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Options: All users (default), Specific users or groups, No users. Connector staging can narrow but not widen it."
  - governs: "Whether an individual federated connector is turned on"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Enable / Disable"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Enable or disable pauses a connector without removing its configuration."
  - governs: "Which users or groups get an individual connector"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connector > Staged Rollout > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    api: null
    note: "Works within the User access population. The staged rollout page lists limits of 100 users and 15 Microsoft 365 groups."
  - governs: "Blocking individual connectors and their tools"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta package-level blocking requires a Microsoft Agent 365 licence; it blocks the selected package, not individual tools or a shared remote connector used by other packages."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-23"
    note: "New briefing: federated Copilot connectors, their Copilot add-on licence requirement, and the admin center controls for availability, user access and staged rollout."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: added the beta Graph package-block API to the blocking row, fixed which settings must allow a user, narrowed the data-leaving and sign-in statements, and set action to review."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 100 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 100
  confirmed: 98
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "a9980c62de8c81b20e06287f51be66f0"
---

## What's changing

Federated Copilot connectors let Microsoft 365 Copilot retrieve data from third-party sources at the moment a user asks, by using the Model Context Protocol (MCP, the open standard Copilot uses to call external tools). Microsoft Learn says they access data in real time with the user's identity and permissions and do not index external data into Microsoft 365.

The roadmap item says federated connectors are supported in the Researcher agent, Microsoft 365 Chat and Agent Mode in Excel. Learn's federated connectors overview lists a wider set of experiences: Microsoft 365 Copilot Chat, Agents, Cowork, Copilot in Word, Excel, PowerPoint and Outlook, and Researcher. The connector submission guidance still describes Word and PowerPoint as coming soon. Learn also says that where a connector provides the tools, Copilot can create, update or delete data in the connected system on the user's behalf. The roadmap description does not mention this. The general Copilot connectors overview still calls federated connectors read-only, alongside a note targeting write actions for early October 2026; the federated overview documents write-capable tools. Researcher is read-only: Learn says it does not support write, update or delete actions.

Administrators manage the connectors in the Microsoft 365 admin center, through Agent and plugin access (by publisher type), User access (who may use any agent or plugin), and per-connector enable, disable and staged rollout settings. Learn's gallery lists Microsoft-published and partner-submitted connectors, and marks at least one, Salesforce, as preview.

The roadmap record gives the status as Launched, with a target date of April CY2026 and a preview date of December CY2025. Its release phases are General Availability and Preview, the cloud is Worldwide (Standard Multi-Tenant), and the platform is Web.

## Why it matters

This puts live access to non-Microsoft systems inside the Copilot experience your users already have. Microsoft has not stated what a tenant looks like on arrival: Learn says Microsoft-built connectors are available by default when their publisher type is allowed and the user is included in User access, and also says an admin must enable a connector and make it available. Treat the position in your tenant as something to check, not assume.

The practical decision is which publisher types and which connectors your users should have, and whether write-capable connectors are acceptable. Write actions export Customer Data to the connected system, a third party whose terms are not Microsoft's, so security and compliance owners should be part of that decision before users start connecting sources.

## Risk assessment

**Data exposure**
- Copilot sends what it needs to the connector's MCP server, and Learn says write, update and delete actions export Customer Data to the connected system. Agent settings guidance adds that data processed by non-Microsoft services is not subject to Microsoft agreements, so review each publisher's terms. Agent and plugin access and User access limit which connectors users can reach.
- Federated connectors do not copy or store data in Microsoft 365, so the source system remains the system of record and its own permissions apply.

**Security & identity**
- For sources that require authentication, each user signs in with their own credentials. Learn says Copilot only accesses data the user already has permission to see and makes only changes the user is permitted to make, so a connector adds no access beyond the user's own rights in that system.
- A user needs the publisher type to be allowed or the connector turned on individually, the connector to be enabled, and inclusion in both User access and the connector's staged rollout. Check each of these when someone reports they cannot see, or can see, a connector.

**Autonomy & actions**
- Write, update and delete tools default to Needs approval, so Copilot asks each time. Users can choose Allow for conversation or Always allow per tool, and a new or changed publisher tool returns to Needs approval.
- Learn says write tools are part of the connector and are not enabled separately, so the admin choice is whether to allow a connector at all, or to block it or its tools under Agents > Tools.

**Change & support**
- Publishers can add or change tools over time, so a connector's capabilities can change after you approve it. Learn advises updating user and help-desk guidance that actions run with the user's own permissions in the third-party service.
- Changes can take up to 10 minutes to take effect, which matters when testing a block.

## Cost and licensing

**Licence.** The connector prerequisites page requires a Microsoft 365 Copilot add-on licence for every user who queries a federated source. Its licensing table marks federated connectors as supported with Microsoft 365 + Microsoft 365 Copilot add-on and with Microsoft 365 E7, and not supported with Microsoft 365 alone, a Copilot Studio licence, or Microsoft 365 Copilot pay-as-you-go. Learn's overview also lists holding a Microsoft 365 Copilot licence among the conditions for a user to see a federated connector.

**Meter and cost.** The same page says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. A separate meter or price for federated connectors is not yet published. Charges levied by a third-party source for its own service are outside what those pages cover.

**Indirect cost.** Expect admin time to set Agent and plugin access, User access and staged rollout, and to review each connector's terms and tools. Users also need guidance on connecting sources and approving write actions.

## Scope

**Users and licences.** Users need a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) and must be included in User access and in the connector's staged rollout. For sources that require authentication, each user connects with their own credentials.

**Roles.** The manage page says Global Administrator or Search Administrator can manage federated connectors. The connector prerequisites and staged rollout pages say AI administrator. Confirm which role your tenant needs.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. No other cloud is listed on the record.

**Rollout.** The record gives the status Launched. The Learn pages read do not state whether the publisher-type options are selected in a new tenant. They do say that Microsoft-built connectors are available by default when their option is selected and the user is included in User access, and that external-publisher connectors are available only when that option is selected or an admin turns on the individual connector.

## Governance guidance

### Before rollout
- Confirm which users hold a Microsoft 365 Copilot add-on licence or Microsoft 365 E7, since federated connectors are not supported with Copilot Studio licences or pay-as-you-go.
- Check the current state of Agent and plugin access in the Microsoft 365 admin center and decide which publisher types (Microsoft, your organisation, external publishers) your tenant should allow.
- Set User access to the population that may use connectors, knowing that connector staging can narrow it but not widen it.
- Review each connector you plan to allow, including its privacy terms and whether it exposes write, update or delete tools.

### At rollout
- Limit new connectors to a pilot group by using Staged rollout in Your connections.
- Turn on only the connectors you have reviewed when a publisher type is cleared.
- Tell users and the help desk that Copilot actions run with the user's own permissions in the third-party service, and that write actions ask for approval.

### After rollout
- Sign in as a test user and check Microsoft 365 Copilot Chat > ... > Settings > Sources to confirm what users see; allow up to 10 minutes for changes.
- When available, review the connector's Tools list to identify create, update and delete tools, and re-check after publishers change tools; Learn currently marks the admin-centre tool list as coming soon.
- Use Microsoft Purview to review connector activity, and confirm which events it records.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which publisher types of federated connectors are available, including future ones</strong><br><small>Tenant</small><br><small class="controls__note">Clearing a type sets its connectors' staged rollout to No users; an individual connector setting takes precedence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use any agent, plugin or connector (tenant-wide ceiling)</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific users or groups, No users. Connector staging can narrow but not widen it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual federated connector is turned on</strong><br><small>Tenant</small><br><small class="controls__note">Enable or disable pauses a connector without removing its configuration.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Enable / Disable <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups get an individual connector</strong><br><small>Group</small><br><small class="controls__note">Works within the User access population. The staged rollout page lists limits of 100 users and 15 Microsoft 365 groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connector › Staged Rollout › Edit <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blocking individual connectors and their tools</strong><br><small>Tenant</small><br><small class="controls__note">Beta package-level blocking requires a Microsoft Agent 365 licence; it blocks the selected package, not individual tools or a shared remote connector used by other packages.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All rows are set in the Microsoft 365 admin center. Learn gives roles of Global Administrator or Search Administrator on the manage page and AI administrator on the prerequisites and staged rollout pages.

Learn says a setting on an individual connector takes precedence over the bulk Agent and plugin access setting, and that User access always applies. For a user to see a connector, the publisher type must be allowed or the connector turned on individually, the connector must be enabled, and the user must be in User access, the staged rollout and hold a Microsoft 365 Copilot licence.

No separate switch for write, update and delete tools is documented: Learn says they are part of the connector. Agents > Tools offers tool-level and connector-level blocking, but the steps were not read. No API is documented for the tenant-wide publisher-type or User access settings, or connector-specific enablement and staging; package-level blocking has a beta Graph API. The Agent 365 Package Management API describes block and unblock for agents and tools such as MCP servers. The After rollout checks of Sources, the connector Tools list and Microsoft Purview activity have no control rows in this table.

## Open questions

- Does a new tenant start with all three Agent and plugin access options selected, and are Microsoft-built connectors available to users before an admin acts? Watch the Learn pages Manage federated connectors and Federated connectors overview.
- Which Microsoft Purview audit events record connector reads and write actions? Learn says admins can audit activity in Microsoft Purview but the overview names no events.
- Is there automation (Microsoft Graph or PowerShell) for Agent and plugin access, User access, connector enablement and staged rollout? Learn documents none at the time of writing.
- Which connectors and experiences remain in preview? The roadmap lists both General Availability and Preview, and Learn marks the Salesforce connector as preview.

<!-- rationale
risk: Medium. Copilot sends connectors the information needed to complete write actions, and where a connector provides write tools Copilot can change data there with the user's approval. Existing admin settings cover availability, but the default state is not stated.
cost: Low. Learn lists the Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) as required and says connector grounding in Copilot is included with it; the remaining cost is admin time. No separate meter is published for this feature.
impact: Medium. Users with a Microsoft 365 Copilot licence see the connectors in Copilot Chat, Researcher and other Copilot experiences once the controls allow it, and for sources that require authentication each user connects with their own sign-in.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].api; rendered controls table; Governance controls; Open questions / absence: No automation is documented for choosing which users or groups get an individual federated connector. | Found: allowedUsersAndGroups | Users/groups for whom the package is available. availableTo | Enum value specifying which users or groups within the tenant can access this package. Required if updating allowedUsersAndGroups. | Fix: For connectors delivered as plugin packages, set controls[3].api to graph, call 'PATCH /beta/copilot/admin/catalog/packages/{id}', docs 'https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update'. Add to its note: 'For packaged connectors, availableTo sets package availability and is required when setting allowedUsersAndGroups. This beta API requires Microsoft Agent 365; package availability is not installation or remote-service permission.' Replace the blanket staging-API absence in Governance controls and Open questions with 'Graph beta documents package user availability for connectors distributed as plugins; a direct connector Staged Rollout operation is not documented.' Do not claim that this endpoint sets a standalone connector's staging field. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; Why it matters; Scope; Open questions; rationale: risk / default: The current documentation does not establish the new-tenant publisher selections or an unqualified arrival default. | Found: Searched: federated connectors default tenant Allow agents and plugins selected; read overview, manage, agent-settings and custom setup. Current pages give conditional defaults, not initial selections; an indexed early-preview excerpt says enabled by default. | Fix: Keep unknown, but qualify 'Microsoft has not stated' as 'The current overview does not state a new tenant's publisher-type selections; an indexed early-access preview version described connectors as enabled by default.' The differing excerpt is at https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls.
- [supported, minor] controls[4].ui; rendered controls table; Risk assessment; Governance controls / admin-path: Agents > Tools in the Microsoft 365 admin center is the place to block connectors and tools. | Found: Tools block / unblock | Agents > Tools | Tool-level and connector-level blocking. | Fix: The path stops on the right management page. For the package blocking that the API documents, give the complete path 'Agents > Tools > Plugins > plugin > Block', with docs 'https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers'. Keep the package-scope qualifier; do not present that route as an individual-tool toggle. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [supported, minor] Risk assessment: Autonomy & actions; Governance controls / absence: Write tools are part of the connector rather than separately enabled, while Agents > Tools offers blocking. | Found: Write, update, and delete tools are part of the connector and aren't enabled separately. Tools block / unblock | Agents > Tools | Tool-level and connector-level blocking. | Fix: Qualify the tool-level blocking statement with: 'The separate Agent 365 guidance says granular tool controls are rolling out and apply only to supported MCP servers registered on Agent 365; runtime enforcement is for supported tools and experiences using its Tooling Gateway. Do not assume that reach for every federated connector.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers. Keep the overview's statement about tools not being separately enabled. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The Sources, connector Tools-list and Microsoft Purview checklist checks have no corresponding control rows. | Found: After rollout: 'check ... Settings > Sources'; 'review the connector's Tools list'; 'Use Microsoft Purview to review connector activity'. Governance controls: 'The After rollout checks ... have no control rows in this table.' | Fix: Remove these three checks from the governance checklist, retaining any desired advice as prose outside it. Merely acknowledging the missing rows does not meet the checklist rule; do not add new control rows as part of this correction.
-->
