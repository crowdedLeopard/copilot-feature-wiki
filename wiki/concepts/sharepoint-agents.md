---
kind: "concept"
title: "SharePoint agents: who can use them, what they can read and how they are billed"
slug: "sharepoint-agents"
summary: "SharePoint agents are AI agents that answer from the content of SharePoint sites and libraries. Administrators decide who may use them (licence or pay-as-you-go), which sites they can draw on, and how usage is reported."
created: "2026-11-25"
updated: "2026-11-25"
version: 2
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
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "Set up Microsoft Copilot pay-as-you-go services"
    url: "https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Copilot node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot"
    kind: "learn"
  - title: "Start-SPOAuditDataCollectionForActivityInsights"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spoauditdatacollectionforactivityinsights?view=sharepoint-ps"
    kind: "learn"
related: ["restricted-content-discovery","copilot-credits","agent-registry","m365-admin-center-agent-level-pay-as-you-go-controls","sharepoint-sharepoint-agent-usage-statistics-across-all-sharepoint-sites","sharepoint-chat-one-on-one-with-sharepoint-agents-in-teams"]
controls:
  - governs: "Which users can use SharePoint agents through their Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > user or group > Microsoft Copilot for SharePoint"
      docs: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/users/{id}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    note: "Turning it off also disables Copilot in OneDrive and SharePoint page authoring for that user. The disabledPlans property on an addLicenses entry turns service plans off; removeLicenses is required and can be empty."
  - governs: "Which unlicensed users can use SharePoint agents, via a pay-as-you-go billing policy and the users it covers"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing and usage > Pay-as-you-go services > SharePoint agents > billing policy"
      docs: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    api: null
    note: "The policy is selected in Manage billing policy connections. The Copilot-node set-up page enters at Copilot > Cost management > Classic Billing & usage and sets Connection status to Connected."
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
      path: "Reports > Agent Insights > Create a report > Report duration"
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
      call: "Start-SPOAuditDataCollectionForActivityInsights -ReportEntity CopilotAppInsights"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spoauditdatacollectionforactivityinsights?view=sharepoint-ps"
    note: "Reports can be generated 24 hours after it is enabled. The cmdlet reference makes -ReportEntity mandatory and labels the Copilot-agents scenario Private Preview; the SharePoint page omits the parameter."
confidence: "medium"
dependents: 9
changes:
  - date: "2026-11-25"
    note: "New concept page on SharePoint agents: access, billing, discovery limits, blocking and reporting, with the .agent format retirement."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the licence-toggle path and added its Graph assignLicense call; qualified billing-policy access, roles and policy limits (10 vs 50) by page; narrowed what Restricted Content Discovery stops; completed report and data-collection commands; trimmed checklist items without a control row."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 95
  confirmed: 95
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "47c618edf7607d1c5ee6cb0fdce38716"
---

## What it is

A SharePoint agent is an AI agent that helps users find information and insights on SharePoint sites, pages and document libraries. It answers from the user's own access: Learn says agents in SharePoint access your organisation's data the same way Copilot in other Microsoft 365 apps does, responding to users based on their access permissions to the data.

There are three questions an administrator can ask of it, and each has a different control:

| Question | Where it is answered |
| --- | --- |
| Who can use agents? | Microsoft Copilot licence, or the users a pay-as-you-go billing policy covers |
| What can they draw on? | Site and file permissions, restricted access control, Restricted Content Discovery, DLP |
| Where do agents appear? | Site owner settings, Restricted Content Discovery, blocking in Copilot Chat |

**Two formats.** An agent created in SharePoint has been a `.agent` file saved where it was created, and its file permissions determine who can access or edit it. Microsoft documents that this format is being retired: existing `.agent` files continue to work until the end of March 2027, and from mid-November 2026 agents for SharePoint and OneDrive are created in Microsoft Copilot Agent Builder, which no longer saves a `.agent` file. Learn states that only the file format is being retired, not agents in SharePoint. Copilot Studio agents published to SharePoint do not need recreating because of this change. Upgraded agents are governed through Agent 365; see [Agent registry](/concepts/agent-registry/).

## Why it matters

Because an agent answers from whatever the asking user can already open, it turns existing permissions into a search-and-summarise surface. A site that is shared too widely becomes easier to draw from. The controls that matter are therefore permissions, which decide what an agent can read for each user, and Restricted Content Discovery, which limits tenant-wide discovery of a site's content and removes AI entry points but does not change permissions or stop Copilot from summarising an already-open document, rather than a switch on the agent itself.

The licence decides who may ask. Agents in SharePoint don't require activation; Learn says access is managed through Copilot licence assignment or, where pay-as-you-go billing is set up, through the security group on the billing policy. Where neither is managed, the unlicensed-user route is a metered charge, so billing set-up is part of governing the mechanism.

## Cost and licensing

**Licence.** Learn states that users with a Microsoft Copilot licence can use agents in SharePoint. Interactive use of generative answers, tenant graph grounding and agent actions by authenticated Microsoft Copilot users in Microsoft 365 apps and services is included at no extra cost.

**Pay-as-you-go.** Users without a Copilot licence can use SharePoint agents through an Azure resource, which is used whenever such a user uses a SharePoint agent. The billing page gives these rates:

| Feature | Rate for autonomous use |
| --- | --- |
| Generative answer | 2 messages |
| Tenant graph grounding for messages | 10 messages |

Each interaction uses 12 messages to answer one complex prompt. Tenant graph grounding is optional and can be turned on or off for each agent. Charges appear under the Copilot Studio meter on the invoice, and Microsoft Cost Management shows a breakdown by feature, including SharePoint agents. A budget with alerts can be created there. For the shared usage meter see [Copilot Credits](/concepts/copilot-credits/).

**Set-up roles.** The [SharePoint billing page](https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing) lists SharePoint administrator for Azure-resource set-up. The [general Copilot billing set-up guide](https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go) instead requires Billing Administrator, AI Administrator or Global Administrator for its admin centre tasks; both require Azure Owner or Contributor rights on the subscription and resource group, and the SharePoint page says those Azure roles are needed only during set-up.

**Reporting licences.** The Agent Insights report needs the SharePoint Advanced Management add-on or a Microsoft Copilot licence. The block API needs a Microsoft Agent 365 licence.

## Risks and limits

- **Blocking is narrow.** Blocking an agent created in SharePoint in the Microsoft 365 admin center affects its availability in Copilot Chat only; Learn says it doesn't yet apply to OneDrive, SharePoint or Teams. An agent you believe blocked can still be used in those places.
- **Switching off the SharePoint service plan reaches further than agents.** Turning off 'Microsoft Copilot for SharePoint' for a user also disables Copilot in OneDrive and the SharePoint page authoring Copilot for that user.
- **Restricted Content Discovery hides content, not access.** It leaves permissions unchanged, so users can still open content directly. It applies to SharePoint sites, not OneDrive, and on a site with more than 500,000 items an update could take more than a week to take effect.
- **Agents inherit oversharing.** Responses depend on the user's permissions to the agent's data sources, so a broadly shared site is a broadly available knowledge source.
- **DLP cannot yet use a label on the agent file.** Learn says you can't yet add a sensitivity label directly to the `.agent` file; use conditions based on the `.agent` extension instead.
- **Pay-as-you-go limits.** Each billing policy currently has one security group. The [SharePoint billing page](https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing) states up to 10 policies; the [general Copilot pay-as-you-go set-up page](https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go), which explicitly includes SharePoint agents, states up to 50 billing policies per tenant. For the security-group billing-policy configuration described on the SharePoint access page, only users in that group have access through that policy; the [Copilot-node set-up page](https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot) also documents an **All users** choice on the **Choose users** page.
- **The `.agent` format has an end date.** After March 2027 `.agent` files stop responding, and upgraded agents are not managed through SharePoint site permissions: sharing is set in Microsoft Copilot Agent Builder.
- **Agent Insights is audit-based.** It uses Microsoft 365 unified audit data and might not cover all audit events; a new report replaces the one with the same date range.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use SharePoint agents through their Copilot licence</strong><br><small>User</small><br><small class="controls__note">Turning it off also disables Copilot in OneDrive and SharePoint page authoring for that user. The disabledPlans property on an addLicenses entry turns service plans off; removeLicenses is required and can be empty.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › user or group › Microsoft Copilot for SharePoint <a href="https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/users/{id}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which unlicensed users can use SharePoint agents, via a pay-as-you-go billing policy and the users it covers</strong><br><small>Group</small><br><small class="controls__note">The policy is selected in Manage billing policy connections. The Copilot-node set-up page enters at Copilot &gt; Cost management &gt; Classic Billing &amp; usage and sets Connection status to Connected.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing and usage › Pay-as-you-go services › SharePoint agents › billing policy <a href="https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">For agents created with SharePoint it affects Copilot Chat only. The API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › select an agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a site's content is discoverable by Microsoft Copilot and its agent features show</strong><br><small>Site</small><br><small class="controls__note">Does not change permissions. SharePoint sites only. See the Restricted Content Discovery concept page.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › select the site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The Agent Insights report on agents across SharePoint and OneDrive sites</strong><br><small>Tenant</small><br><small class="controls__note">Needs the SharePoint Advanced Management add-on or a Microsoft Copilot licence. Report periods are 1, 7, 14 or 28 days.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Agent Insights › Create a report › Report duration <a href="https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOCopilotAgentInsightsReport -ReportPeriodInDays &lt;28&gt;</code> <a href="https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit data collection that feeds Agent Insights without a SharePoint Advanced Management licence</strong><br><small>Tenant</small><br><small class="controls__note">Reports can be generated 24 hours after it is enabled. The cmdlet reference makes -ReportEntity mandatory and labels the Copilot-agents scenario Private Preview; the SharePoint page omits the parameter.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOAuditDataCollectionForActivityInsights -ReportEntity CopilotAppInsights</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spoauditdatacollectionforactivityinsights?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Tenant admins and AI admins manage agents in the Microsoft 365 admin center. SharePoint administrators run Agent Insights. The Restricted Content Discovery page says that only SharePoint administrators manage it by default, with delegation to site administrators available through `Set-SPOTenant -DelegateRestrictedContentDiscoverabilityManagement $true`. Purview audit search for agent creation and usage needs at least Compliance admin permissions.

**How they interact.** Licence or billing policy decides who may use agents; permissions decide what they can read; Restricted Content Discovery limits tenant-wide discovery of the site's content and removes AI entry points, but does not change permissions or stop Copilot from summarising an already-open document. The block API takes only delegated permission CopilotPackages.ReadWrite.All and is in beta.

**Not in the table.** Site owners can choose one main agent per site. Restricted access control restricts all access to a site to the group in the policy. The Purview audit log records which users interacted with an agent and where and when.

## What to check

- Check which users hold a Microsoft Copilot licence, and whether 'Microsoft Copilot for SharePoint' is on for each.
- Review whether a pay-as-you-go billing policy is connected to SharePoint agents, and which security group it names.
- Run the Agent Insights report to see which sites hold the most agents, then decide where Restricted Content Discovery applies.
- List the `.agent` files you rely on and plan their upgrade before the end of March 2027.
- Confirm in All agents whether an agent is blocked, and remember a block reaches only Copilot Chat for SharePoint-created agents.

## Open questions

- Will blocking an agent in All agents extend to OneDrive, SharePoint and Teams? Learn says it doesn't yet apply there.
- How will access and costs be controlled per agent once agents move to Microsoft Copilot Agent Builder and the Agent Chat web part?
- Is there a PowerShell or API route to create or connect a pay-as-you-go billing policy for SharePoint agents? The pages read describe the admin centre steps only.

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: Roles / role: Purview audit search for agent creation and usage needs at least Compliance admin permissions. | Found: Users with at least Compliance admin permissions with access to Purview can track agent creation and usage details. | Fix: Replace the sentence with 'The SharePoint monitoring page lists at least Compliance admin permissions for tracking agent creation and usage; Microsoft's general Copilot reporting page instead lists Audit Reader for searching Purview audit logs.' Cite https://learn.microsoft.com/sharepoint/monitor-agent-usage and https://learn.microsoft.com/copilot/manage/copilot-admin-reports#access-requirements, whose table says 'Audit Reader: Searches the audit logs.' | Source: https://learn.microsoft.com/sharepoint/monitor-agent-usage
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft 365 admin center > Copilot > Billing and usage > Pay-as-you-go services > SharePoint agents > billing policy reaches the policy connection. | Found: Choose SharePoint agents from the list of apps and services. The Manage billing policy connections pane appears. ... Select the billing policy to connect it to the SharePoint agent service. | Fix: In controls[1].ui.path and the rendered table, use 'Copilot > Billing and usage > Pay-as-you-go services > SharePoint agents > Manage billing policy connections > billing policy'. The cited SharePoint billing page names the automatically opened pane; the existing note can remain. | Source: https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing
-->
