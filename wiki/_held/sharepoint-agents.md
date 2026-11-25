---
kind: "concept"
title: "SharePoint agents: who can use them, what they can read and how they are billed"
slug: "sharepoint-agents"
summary: "SharePoint agents are AI agents that answer from the content of SharePoint sites and libraries. Administrators decide who may use them (licence or pay-as-you-go), which sites they can draw on, and how usage is reported."
created: "2026-11-25"
updated: "2026-11-25"
version: 1
tags: ["sharepoint-agents","agents","copilot-in-sharepoint","copilot-chat","agent-governance","cost-management","admin-controls"]
covers: []
sources:
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Monitor agent usage in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/monitor-agent-usage"
    kind: "learn"
  - title: "Insights report on agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Upgrade agents in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
related: ["restricted-content-discovery","copilot-credits","agent-registry","m365-admin-center-agent-level-pay-as-you-go-controls","sharepoint-sharepoint-agent-usage-statistics-across-all-sharepoint-sites","sharepoint-chat-one-on-one-with-sharepoint-agents-in-teams"]
controls:
  - governs: "Which users can use SharePoint agents through their Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "License details page for Microsoft Copilot > Microsoft Copilot for SharePoint (turn on or off per user)"
      docs: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    api: null
    note: "Turning it off also disables Copilot in OneDrive and SharePoint page authoring for that user."
  - governs: "Which unlicensed users can use SharePoint agents, via a pay-as-you-go billing policy and its security group"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing and usage > Pay-as-you-go services > SharePoint agents"
      docs: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    api: null
    note: "Set-up needs SharePoint administrator and Azure Owner or Contributor roles. One security group per policy, up to 10 policies."
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > select an agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "For agents created with SharePoint it affects Copilot Chat only. The API is beta and needs a Microsoft Agent 365 licence."
  - governs: "Whether a site's content is discoverable by Microsoft Copilot and its agent features show"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > select the site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Does not change permissions. SharePoint sites only. See the Restricted Content Discovery concept page."
  - governs: "The Agent Insights report on agents across SharePoint and OneDrive sites"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Agent Insights"
      docs: "https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents"
    api:
      kind: "powershell"
      call: "Start-SPOCopilotAgentInsightsReport -ReportPeriodInDays <28>"
      docs: "https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents"
    note: "Needs the SharePoint Advanced Management add-on or a Microsoft Copilot licence. Report periods are 1, 7, 14 or 28 days."
  - governs: "Audit data collection that feeds Agent Insights without a SharePoint Advanced Management licence"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Start-SPOAuditDataCollectionForActivityInsights"
      docs: "https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents"
    note: "Reports can be generated 24 hours after it is enabled."
confidence: "medium"
dependents: 8
changes:
  - date: "2026-11-25"
    note: "New concept page on SharePoint agents: access, billing, discovery limits, blocking and reporting, with the .agent format retirement."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 72
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "f20fb51fce152c78b7a9932aa0b25bf5"
---

## What it is

A SharePoint agent is an AI agent that helps users find information and insights on SharePoint sites, pages and document libraries. It answers from the user's own access: Learn says agents in SharePoint access your organisation's data the same way Copilot in other Microsoft 365 apps does, responding to users based on their access permissions to the data.

There are three questions an administrator can ask of it, and each has a different control:

| Question | Where it is answered |
| --- | --- |
| Who can use agents? | Microsoft Copilot licence, or a pay-as-you-go billing policy and its security group |
| What can they draw on? | Site and file permissions, restricted access control, Restricted Content Discovery, DLP |
| Where do agents appear? | Site owner settings, Restricted Content Discovery, blocking in Copilot Chat |

**Two formats.** An agent created in SharePoint has been a `.agent` file saved where it was created, and its file permissions determine who can access or edit it. Microsoft documents that this format is being retired: existing `.agent` files continue to work until the end of March 2027, and from mid-November 2026 agents for SharePoint and OneDrive are created in Microsoft Copilot Agent Builder, which no longer saves a `.agent` file. Learn states that only the file format is being retired, not agents in SharePoint. Copilot Studio agents published to SharePoint do not need recreating because of this change. Upgraded agents are governed through Agent 365; see [Agent registry](/concepts/agent-registry/).

## Why it matters

Because an agent answers from whatever the asking user can already open, it turns existing permissions into a search-and-summarise surface. A site that is shared too widely becomes easier to draw from. The controls that matter are therefore the ones that limit what agents can read (permissions, Restricted Content Discovery) rather than a switch on the agent itself.

The licence decides who may ask. Agents in SharePoint don't require activation; Learn says access is managed through Copilot licence assignment or, where pay-as-you-go billing is set up, through the security group on the billing policy. Where neither is managed, the unlicensed-user route is a metered charge, so billing set-up is part of governing the mechanism.

## Cost and licensing

**Licence.** Learn states that users with a Microsoft Copilot licence can use agents in SharePoint. Interactive use of generative answers, tenant graph grounding and agent actions by authenticated Microsoft Copilot users in Microsoft 365 apps and services is included at no extra cost.

**Pay-as-you-go.** Users without a Copilot licence can use SharePoint agents through an Azure resource, which is used whenever such a user uses a SharePoint agent. The billing page gives these rates:

| Feature | Rate for autonomous use |
| --- | --- |
| Generative answer | 2 messages |
| Tenant graph grounding for messages | 10 messages |

Each interaction uses 12 messages to answer one complex prompt. Tenant graph grounding is optional and can be turned on or off for each agent. Charges appear under the Copilot Studio meter on the invoice, and Microsoft Cost Management shows a breakdown by feature, including SharePoint agents. A budget with alerts can be created there. For the shared usage meter see [Copilot Credits](/concepts/copilot-credits/).

**Set-up roles.** You need to be a SharePoint administrator, with Owner or Contributor Azure roles on a subscription and a linked resource group; those Azure roles are needed only during set-up.

**Reporting licences.** The Agent Insights report needs the SharePoint Advanced Management add-on or a Microsoft Copilot licence. The block API needs a Microsoft Agent 365 licence.

## Risks and limits

- **Blocking is narrow.** Blocking an agent created in SharePoint in the Microsoft 365 admin center affects its availability in Copilot Chat only; Learn says it doesn't yet apply to OneDrive, SharePoint or Teams. An agent you believe blocked can still be used in those places.
- **Switching off the SharePoint service plan reaches further than agents.** Turning off 'Microsoft Copilot for SharePoint' for a user also disables Copilot in OneDrive and the SharePoint page authoring Copilot for that user.
- **Restricted Content Discovery hides content, not access.** It leaves permissions unchanged, so users can still open content directly. It applies to SharePoint sites, not OneDrive, and on a site with more than 500,000 items an update could take more than a week to take effect.
- **Agents inherit oversharing.** Responses depend on the user's permissions to the agent's data sources, so a broadly shared site is a broadly available knowledge source.
- **DLP cannot yet use a label on the agent file.** Learn says you can't yet add a sensitivity label directly to the `.agent` file; use conditions based on the `.agent` extension instead.
- **Pay-as-you-go limits.** Each billing policy currently has one security group and you can create up to 10 policies. Only users in that group have access to agents.
- **The `.agent` format has an end date.** After March 2027 `.agent` files stop responding, and upgraded agents are not managed through SharePoint site permissions: sharing is set in Microsoft Copilot Agent Builder.
- **Agent Insights is audit-based.** It uses Microsoft 365 unified audit data and might not cover all audit events; a new report replaces the one with the same date range.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use SharePoint agents through their Copilot licence</strong><br><small>User</small><br><small class="controls__note">Turning it off also disables Copilot in OneDrive and SharePoint page authoring for that user.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>License details page for Microsoft Copilot › Microsoft Copilot for SharePoint (turn on or off per user) <a href="https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which unlicensed users can use SharePoint agents, via a pay-as-you-go billing policy and its security group</strong><br><small>Group</small><br><small class="controls__note">Set-up needs SharePoint administrator and Azure Owner or Contributor roles. One security group per policy, up to 10 policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing and usage › Pay-as-you-go services › SharePoint agents <a href="https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">For agents created with SharePoint it affects Copilot Chat only. The API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › select an agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a site's content is discoverable by Microsoft Copilot and its agent features show</strong><br><small>Site</small><br><small class="controls__note">Does not change permissions. SharePoint sites only. See the Restricted Content Discovery concept page.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › select the site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The Agent Insights report on agents across SharePoint and OneDrive sites</strong><br><small>Tenant</small><br><small class="controls__note">Needs the SharePoint Advanced Management add-on or a Microsoft Copilot licence. Report periods are 1, 7, 14 or 28 days.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Agent Insights <a href="https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOCopilotAgentInsightsReport -ReportPeriodInDays &lt;28&gt;</code> <a href="https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit data collection that feeds Agent Insights without a SharePoint Advanced Management licence</strong><br><small>Tenant</small><br><small class="controls__note">Reports can be generated 24 hours after it is enabled.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOAuditDataCollectionForActivityInsights</code> <a href="https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Tenant admins and AI admins manage agents in the Microsoft 365 admin center. SharePoint administrators run Agent Insights and manage Restricted Content Discovery, which only they can manage unless delegation is enabled with `Set-SPOTenant -DelegateRestrictedContentDiscoverabilityManagement $true`. Purview audit search for agent creation and usage needs at least Compliance admin permissions.

**How they interact.** Licence or billing policy decides who may use agents; permissions decide what they can read; Restricted Content Discovery removes the Agent icon on a site and keeps its content out of Copilot and organisation-wide search. The block API takes only delegated permission CopilotPackages.ReadWrite.All and is in beta.

**Not in the table.** Site owners can choose one main agent per site. Restricted access control restricts all access to a site to the group in the policy. The Purview audit log records which users interacted with an agent and where and when.

## What to check

- Check which users hold a Microsoft Copilot licence, and whether 'Microsoft Copilot for SharePoint' is on for each.
- Review whether a pay-as-you-go billing policy is connected to SharePoint agents, which security group it names and which budget alert covers it.
- Run the Agent Insights report to see which sites hold the most agents, then decide where Restricted Content Discovery or restricted access control applies.
- List the `.agent` files you rely on and plan their upgrade before the end of March 2027.
- Confirm in All agents whether an agent is blocked, and remember a block reaches only Copilot Chat for SharePoint-created agents.
- Search the Purview audit log for agent creation and interaction records.

## Open questions

- Will blocking an agent in All agents extend to OneDrive, SharePoint and Teams? Learn says it doesn't yet apply there.
- How will access and costs be controlled per agent once agents move to Microsoft Copilot Agent Builder and the Agent Chat web part?
- Is there a PowerShell or API route to create or connect a pay-as-you-go billing policy for SharePoint agents? The pages read describe the admin centre steps only.

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui / admin-path: The admin-center route to the per-user service-plan toggle is License details page for Microsoft Copilot > Microsoft Copilot for SharePoint. | Found: In the admin center, go to the Billing > Licenses page. ... On the Licenses page, select the row for a specific user or group you want to change. ... In the details pane, select or deselect the apps and services | Fix: Replace the part-way-in route with 'Billing > Licenses > user or group > Microsoft Copilot for SharePoint'. Keep https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint for the service-plan label and add https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users for the navigation to the user or group details pane. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
- [contradicted, blocker] controls[0].api / absence: Microsoft has not documented automation to enable or disable the user's Microsoft Copilot for SharePoint service plan. | Found: You can also enable and disable specific plans associated with a subscription. ... You can disable servicePlans associated with a license by setting the disabledPlans property on an assignedLicense object. | Fix: Replace controls[0].api null with kind 'graph', call 'POST https://graph.microsoft.com/v1.0/users/{id}/assignLicense', docs 'https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0'. Add to its note: 'Set addLicenses[].skuId to the Copilot SKU and addLicenses[].disabledPlans to the service-plan IDs to disable, preserving any already-disabled plans; removeLicenses is required and may be empty.' https://learn.microsoft.com/microsoft-365/enterprise/disable-access-to-services-with-microsoft-365-powershell explains preserving existing disabled plans. | Source: https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Who can use agents; controls[1].governs; Risks and limits: Pay-as-you-go limits / applicability: For unlicensed users, the billing policy's assigned security group determines who has access to agents. | Found: Only users in the security group assigned to the billing policy have access to agents. | Fix: Qualify the access statement as 'For the security-group billing-policy configuration described on the SharePoint access page, only users in that group have access through that policy.' Add that https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot also documents an 'All users' choice on the Choose users page. | Source: https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint
- [supported, minor] controls[1].note; Cost and licensing: Set-up roles / role: SharePoint administrator is the Microsoft 365 role required for SharePoint agent billing setup. | Found: To set up SharePoint agents as a resource in Azure, you need to have at least the following permissions as: ... A SharePoint administrator | Fix: Replace the role sentence with 'The SharePoint billing page lists SharePoint administrator for Azure-resource setup. The general Copilot billing setup guide instead requires Billing Administrator, AI Administrator or Global Administrator for its admin-center tasks; both require Azure Owner or Contributor rights on the subscription and resource group.' Cite https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing and https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go. | Source: https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing
- [supported, minor] controls[1].note; Risks and limits: Pay-as-you-go limits / behaviour: Up to 10 billing policies can be created. | Found: You can create up to 10 policies, with each policy assigned a security group. | Fix: Replace the limit sentence and corresponding table note with 'The SharePoint billing page states up to 10 policies; the general Copilot pay-as-you-go setup page, which explicitly includes SharePoint agents, states up to 50 billing policies per tenant.' Cite both https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing and https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go. | Source: https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing
- [supported, minor] Governance controls: Roles / role: Only SharePoint administrators can manage Restricted Content Discovery unless management is delegated. | Found: By default, only SharePoint administrators can manage Restricted Content Discovery. | Fix: Attribute the exclusive role statement: 'The Restricted Content Discovery page says that only SharePoint administrators manage it by default, with delegation available to site administrators. Its linked prerequisites also list SharePoint Advanced Management Administrator as having all SharePoint Administrator capabilities.' Cite https://learn.microsoft.com/sharepoint/restricted-content-discovery and https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [supported, minor] Governance controls: How they interact; Why it matters / applicability: Restricted Content Discovery keeps a site's content out of Copilot and organisation-wide search. | Found: The restricted content discovery policy leaves site access unchanged but prevents the site's content from being surfaced in Microsoft Copilot or organization-wide search for all users. | Fix: Replace the blanket exclusion and the suggestion that this limits all agent reading with 'Restricted Content Discovery limits tenant-wide discovery of the site's content and removes AI entry points; it does not change permissions or stop Copilot from summarizing an already-open document.' The cited access page gives a broader description, whereas https://learn.microsoft.com/sharepoint/restricted-content-discovery explicitly excludes experiences operating on content already in use; cite that qualification. | Source: https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint
- [supported, minor] controls[1].ui / admin-path: The SharePoint agent billing connection is at Copilot > Billing and usage > Pay-as-you-go services > SharePoint agents. | Found: In the Microsoft 365 admin center, select Copilot > Billing and usage. ... Choose SharePoint agents from the list of apps and services. The Manage billing policy connections pane appears. | Fix: Complete the existing route as 'Copilot > Billing and usage > Pay-as-you-go services > SharePoint agents > billing policy', with a note that the policy is selected in Manage billing policy connections. Also note that https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot documents the alternative entry 'Copilot > Cost management > Classic Billing & usage' and a Connection status toggle set to Connected; retain the SharePoint-specific route as the cited page's route rather than silently choosing between the pages. | Source: https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing
- [supported, minor] controls[4].ui / admin-path: Reports > Agent Insights in the SharePoint admin center reaches reporting on agents across SharePoint and OneDrive sites. | Found: In the navigation pane, expand Reports and then select Agent Insights. ... As a SharePoint Administrator, select Create a report to create the report. | Fix: Complete the route for generating the report as 'Reports > Agent Insights > Create a report > Report duration'. The cited page says to enter a name and specify the time frame under Report duration, then select Create and run. | Source: https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents
- [supported, minor] controls[5].api / command: Start-SPOAuditDataCollectionForActivityInsights enables collection for the agent report. | Found: This PowerShell command starts collecting audit data for reports on activities from the last 28 days. ... Start-SPOAuditDataCollectionForActivityInsights | Fix: Replace the call with 'Start-SPOAuditDataCollectionForActivityInsights -ReportEntity CopilotAppInsights' and point its docs to https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spoauditdatacollectionforactivityinsights?view=sharepoint-ps. Note the documentation discrepancy: the SharePoint overview omits ReportEntity, while the cmdlet reference makes it mandatory, lists CopilotAppInsights and labels the Copilot-agent scenario Private Preview. | Source: https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents
- [contradicted, minor] What to check: billing policy and budget alert / consistency: Every control that the budget-alert checklist step asks the reader to review has a controls-table row. | Found: Review whether a pay-as-you-go billing policy is connected to SharePoint agents, which security group it names and which budget alert covers it. / The table has a billing-policy row but no budget-alert row. | Fix: The budget-alert review has no table row. Remove 'and which budget alert covers it' from this checklist step; leave the supported budget explanation in Cost and licensing.
- [contradicted, minor] What to check: Agent Insights and restricted access control / consistency: Every control that the Agent Insights checklist step asks the reader to assess has a controls-table row. | Found: Run the Agent Insights report to see which sites hold the most agents, then decide where Restricted Content Discovery or restricted access control applies. / Restricted access control is explicitly listed under Not in the table. | Fix: The restricted-access-control assessment has no table row. Remove 'or restricted access control' from this checklist step; keep the supported explanatory note outside the checklist.
- [contradicted, minor] What to check: Purview audit log / consistency: The audit-search control requested in What to check has a controls-table row. | Found: Search the Purview audit log for agent creation and interaction records. / Purview audit search has no controls-table row; the audit-data-collection row enables Agent Insights collection instead. | Fix: The Purview audit-log search has no table row. Remove this checklist bullet rather than adding an unverified control row; retain the supported audit-log description in Governance controls.
-->
