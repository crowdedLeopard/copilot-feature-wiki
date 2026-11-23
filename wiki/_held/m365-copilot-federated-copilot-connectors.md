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
action: "prepare"
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
      path: "Copilot > Connectors > Your connections"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Enable or disable pauses a connector without removing its configuration."
  - governs: "Which users or groups get an individual connector"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > Staged Rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    api: null
    note: "Works within the User access population. The staged rollout page lists limits of 100 users and 15 Microsoft 365 groups."
  - governs: "Blocking individual connectors and their tools"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Learn gives only this location for tool-level and connector-level blocking; the block steps were not read."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-23"
    note: "New briefing: federated Copilot connectors, their Copilot add-on licence requirement, and the admin center controls for availability, user access and staged rollout."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 79
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "881119fdf9eb48261e034255acdcb114"
---

## What's changing

Federated Copilot connectors let Microsoft 365 Copilot retrieve data from third-party sources at the moment a user asks, by using the Model Context Protocol (MCP, the open standard Copilot uses to call external tools). Microsoft Learn says they access data in real time with the user's identity and permissions and do not index external data into Microsoft 365.

The roadmap item says federated connectors are supported in the Researcher agent, Microsoft 365 Chat and Agent Mode in Excel. Learn's overview lists a wider set of experiences: Microsoft 365 Copilot Chat, Agents, Cowork, Copilot in Word, Excel, PowerPoint and Outlook, and Researcher. Learn also says that where a connector provides the tools, Copilot can create, update or delete data in the connected system on the user's behalf. The roadmap description does not mention this. Researcher is read-only: Learn says it does not support write, update or delete actions.

Administrators manage the connectors in the Microsoft 365 admin center, through Agent and plugin access (by publisher type), User access (who may use any agent or plugin), and per-connector enable, disable and staged rollout settings. Learn's gallery lists Microsoft-published and partner-submitted connectors, and marks at least one, Salesforce, as preview.

The roadmap record gives the status as Launched, with a target date of April CY2026 and a preview date of December CY2025. Its release phases are General Availability and Preview, the cloud is Worldwide (Standard Multi-Tenant), and the platform is Web.

## Why it matters

This puts live access to non-Microsoft systems inside the Copilot experience your users already have. Microsoft has not stated what a tenant looks like on arrival: Learn says Microsoft-built connectors are available by default when their publisher type is allowed and the user is included in User access, and also says an admin must enable a connector and make it available. Treat the position in your tenant as something to check, not assume.

The practical decision is which publisher types and which connectors your users should have, and whether write-capable connectors are acceptable. Prompt content and, for write actions, Customer Data leave Microsoft 365 for a third party whose terms are not Microsoft's, so security and compliance owners should be part of that decision before users start connecting sources.

## Risk assessment

**Data exposure**
- Copilot sends what it needs to the connector's MCP server, and Learn says write, update and delete actions export Customer Data to the connected system. Agent settings guidance adds that data processed by non-Microsoft services is not subject to Microsoft agreements, so review each publisher's terms. Agent and plugin access and User access limit which connectors users can reach.
- Federated connectors do not copy or store data in Microsoft 365, so the source system remains the system of record and its own permissions apply.

**Security & identity**
- Each user signs in to the source with their own credentials. Learn says Copilot only accesses data the user already has permission to see and makes only changes the user is permitted to make, so a connector adds no access beyond the user's own rights in that system.
- Several settings must all allow a user: publisher type, the connector being enabled, User access and the connector's staged rollout. Check all four when someone reports they cannot see, or can see, a connector.

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

**Users and licences.** Users need a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) and must be included in User access and in the connector's staged rollout. Each user connects to a source with their own credentials.

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
- Sign in as a test user and check Settings > Sources in Copilot Chat to confirm what users see; allow up to 10 minutes for changes.
- Review the connector's Tools list, where the connector supports it, to find tools that can create, update or delete data, and re-check after publishers change tools.
- Use Microsoft Purview to review connector activity, and confirm which events it records.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which publisher types of federated connectors are available, including future ones</strong><br><small>Tenant</small><br><small class="controls__note">Clearing a type sets its connectors' staged rollout to No users; an individual connector setting takes precedence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use any agent, plugin or connector (tenant-wide ceiling)</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific users or groups, No users. Connector staging can narrow but not widen it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual federated connector is turned on</strong><br><small>Tenant</small><br><small class="controls__note">Enable or disable pauses a connector without removing its configuration.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups get an individual connector</strong><br><small>Group</small><br><small class="controls__note">Works within the User access population. The staged rollout page lists limits of 100 users and 15 Microsoft 365 groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › Staged Rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blocking individual connectors and their tools</strong><br><small>Tenant</small><br><small class="controls__note">Learn gives only this location for tool-level and connector-level blocking; the block steps were not read.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

All rows are set in the Microsoft 365 admin center. Learn gives roles of Global Administrator or Search Administrator on the manage page and AI administrator on the prerequisites and staged rollout pages.

Learn says a setting on an individual connector takes precedence over the bulk Agent and plugin access setting, and that User access always applies. For a user to see a connector, the publisher type must be allowed or the connector turned on individually, the connector must be enabled, and the user must be in User access, the staged rollout and hold a Microsoft 365 Copilot licence.

No separate switch for write, update and delete tools is documented: Learn says they are part of the connector. Agents > Tools offers tool-level and connector-level blocking, but the steps were not read. Microsoft Learn documents no API for these connector settings at the time of writing (November 2026). The Agent 365 package API describes block and unblock for agents and tools such as MCP servers, but its overview does not mention federated connectors.

## Open questions

- Does a new tenant start with all three Agent and plugin access options selected, and are Microsoft-built connectors available to users before an admin acts? Watch the Learn pages Manage federated connectors and Federated connectors overview.
- Which Microsoft Purview audit events record connector reads and write actions? Learn says admins can audit activity in Microsoft Purview but the overview names no events.
- Is there automation (Microsoft Graph or PowerShell) for Agent and plugin access, User access, connector enablement and staged rollout? Learn documents none at the time of writing.
- Which connectors and experiences remain in preview? The roadmap lists both General Availability and Preview, and Learn marks the Salesforce connector as preview.

<!-- rationale
risk: Medium. Users' prompts reach non-Microsoft MCP servers, and where a connector provides write tools Copilot can change data there with the user's approval. Existing admin settings cover availability, but the default state is not stated.
cost: Low. Learn lists the Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) as required and says connector grounding in Copilot is included with it; the remaining cost is admin time. No separate meter is published for this feature.
impact: Medium. Users with a Microsoft 365 Copilot licence see the connectors in Copilot Chat, Researcher and other Copilot experiences once the controls allow it, and each user connects to a source with their own sign-in.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[4].api; Governance controls: no API for these connector settings / absence: Microsoft documents no API for blocking individual federated connectors and their tools. | Found: Block a Copilot package to prevent its usage. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: For connectors distributed as plugin packages, set controls[4].api to kind 'graph', call 'POST /beta/copilot/admin/catalog/packages/{id}/block', and docs 'https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block'. Add the note: 'Beta package-level blocking requires a Microsoft Agent 365 licence; it blocks the selected package, not individual tools or a shared remote connector used by other packages.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/submit-federated-connector and https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers for packaging and scope. Replace the blanket no-API sentence with 'No API is documented for the tenant-wide publisher-type or User access settings, or connector-specific enablement and staging; package-level blocking has a beta Graph API.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, blocker] Risk assessment: Security & identity, second bullet; Governance controls / applicability: Publisher type, connector enablement, User access and staging must all allow a user, without mentioning the individual override in the risk bullet. | Found: A setting you make on an individual connector takes precedence over the bulk Agent and plugin access setting. User access always applies. | Fix: Replace the risk bullet's first sentence with 'A user needs the publisher type to be allowed or the connector turned on individually, the connector to be enabled, and inclusion in both User access and the connector's staged rollout.' This matches https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview and removes the conflict with Governance controls. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [unsupported, major] Why it matters: Prompt content; rationale: risk / behaviour: Users' prompt content is sent to third-party MCP servers by this connector feature. | Found: Searched: federated connectors prompt content; opened federated overview and read search results. Overview documents sending information needed for an action, not prompt-content transmission. The Agent Framework MCP page describes a different integration. | Fix: Replace 'Prompt content and, for write actions, Customer Data leave Microsoft 365' with 'Write actions export Customer Data to the connected system'. In the risk rationale replace 'Users' prompts reach non-Microsoft MCP servers' with 'Copilot sends connectors the information needed to complete write actions'. Both replacements are stated at https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; rendered controls table / admin-path: Individual connector enablement is located at Microsoft 365 admin center > Copilot > Connectors > Your connections. | Found: Enable / Disable | Copilot > Connectors > Your connections | Turns an individual connector on or pauses it without removing configuration. | Fix: Complete the path to 'Copilot > Connectors > Your connections > connector > Enable / Disable'; the current path correctly reaches the list holding the control. The cited manage page identifies the actions, and the cited custom-connector setup page documents managing a connector from that list. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [supported, minor] controls[3].ui; rendered controls table / admin-path: Connector staging is located at Microsoft 365 admin center > Copilot > Connectors > Your Connections > Staged Rollout. | Found: Find the connector that you want to modify. In the Staged Rollout column, next to Staged, choose Edit. | Fix: Complete the path to 'Copilot > Connectors > Your Connections > connector > Staged Rollout > Edit', as documented at https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout. The current path stops at the correct column. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout
- [supported, minor] What's changing: MCP definition / behaviour: Model Context Protocol is an open standard for providing external tools to models. | Found: Model Context Protocol is an open standard that defines how applications provide tools and contextual data to large language models (LLMs). It enables consistent, scalable integration of external tools into model workflows. | Fix: Add https://learn.microsoft.com/agent-framework/agents/tools/local-mcp-tools to sources for the open-standard definition, or remove 'the open standard' from the parenthetical. | Source: https://learn.microsoft.com/agent-framework/agents/tools/local-mcp-tools
- [supported, minor] What's changing: Learn-supported experiences; rationale: impact / availability: Learn's federated overview lists Copilot Chat, Agents, Cowork, Word, Excel, PowerPoint, Outlook and Researcher. | Found: Microsoft 365 Copilot Chat; Agents; Cowork; Copilot in Word, Excel, PowerPoint, and Outlook; Researcher agent | Fix: Keep the attribution to the federated overview and add: 'The connector submission guidance still describes Word and PowerPoint as coming soon.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/submit-federated-connector, which names Chat, Excel, Cowork and Researcher as current surfaces. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] What's changing: create, update or delete; Why it matters; rationale: risk / behaviour: When a connector exposes the tools, Copilot can create, update or delete data on the user's behalf. | Found: Where a connector provides the tools, Copilot can also create, update, or delete data in the connected system on the user's behalf. | Fix: Add: 'The general Copilot connectors overview still calls federated connectors read-only, alongside a note targeting write actions for early October 2026; the federated overview documents write-capable tools.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/overview for that documentation discrepancy. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Risk assessment: Security & identity; Scope; rationale: impact / behaviour: Each user connects to the source by signing in with their own credentials. | Found: Users authenticate by using their own credentials when prompted to connect to the data sources. | Fix: Narrow the repeated sign-in statements to 'For sources that require authentication, each user signs in with their own credentials.' The cited custom setup page also documents 'No Auth: Users don't need to authenticate' at https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Governance guidance: After rollout, test-user bullet / admin-path: A test user can inspect available connectors at Copilot Chat > Settings > Sources. | Found: Open Microsoft 365 Copilot Chat. Select the ellipsis (...) menu, and then select Settings. In the settings dialog, select Sources in the left pane. | Fix: Give the full route as 'Microsoft 365 Copilot Chat > ... > Settings > Sources'. The omitted ellipsis menu is an allowed minor omission, not an incorrect route. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Governance guidance: After rollout, connector Tools list / availability: Supported connectors expose an admin-centre Tools list identifying create, update and delete tools. | Found: View a connector's tools in the admin center (Coming soon). For connectors that support this feature, the details page in the Microsoft 365 admin center includes a Tools section | Fix: Replace the checklist bullet with 'When available, review the connector's Tools list to identify create, update and delete tools, and re-check after publishers change tools; Learn currently marks the admin-centre tool list as coming soon.' | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Governance controls: Agent 365 package API / behaviour: The Agent 365 Package Management API describes blocking and unblocking agent and tool packages, including MCP-server packages. | Found: A package represents an agent or a tool, such as a plugin, MCP server, or skill, in the organization catalog. Block, unblock, and reassign ownership of packages. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview to sources; this page is used in the prose but is not cited. Keep its package scope and do not treat it as documentation of the tenant-wide connector settings. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks readers to inspect Sources, review the connector Tools list and audit in Purview, but the table has no rows for those controls. | Found: After rollout: check Settings > Sources; Review the connector's Tools list; Use Microsoft Purview to review connector activity. The five table rows cover publisher types, User access, enablement, staging and blocking. | Fix: The After rollout checklist's Sources inspection, connector Tools-list review and Microsoft Purview audit steps have no corresponding control rows. Record this checklist/table gap; do not add unverified rows as part of the correction.
- [contradicted, minor] front matter: action / consistency: The prepare action rating treats this optional capability as a change that necessarily arrives regardless of anyone choosing it. | Found: action: prepare; defaultState: unknown. The page describes users connecting sources and admins choosing availability, and identifies no required migration or deadline. | Fix: Set action to 'review': this is an optional capability with an unknown arrival default and no verified statement that existing behaviour changes. The standard assigns review to that case; the medium risk does not invoke the high-risk new-control exception.
-->
