---
title: "Outlook: declarative agents in Copilot Chat in classic Outlook for Windows"
slug: "outlook-agents-for-m365-copilot-available-in-copilot-chat-in-classic-outlook-for-windows"
roadmapId: 481559
topic: "m365-copilot"
products: ["Outlook","Microsoft Copilot (Microsoft 365)"]
summary: "Declarative agents now run in Copilot Chat in classic Outlook for Windows (roadmap status: Launched). Check which agents are available or blocked, and whether Basic-licence users can reach metered agents."
status: "launched"
releasePhase: ["Current Channel"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "January CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Learn's page on agents in Copilot Chat says agents grounded in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium); agents that access shared tenant data are pay-as-you-go for Basic licences."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["outlook","copilot-chat","declarative-agents","agents","app-management","m365-admin-center","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap: item 481559"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=481559"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Purchase and manage agents in Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat"
    kind: "learn"
  - title: "Set up Microsoft Copilot pay-as-you-go services"
    url: "https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
videos: []
related: ["declarative-agents","outlook-agents-for-m365-copilot-available-in-copilot-chat-in-outlook-for-mac","app-management","outlook-new-copilot-entry-point-in-classic-outlook","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin"]
controls:
  - governs: "Whether an agent is blocked for the whole organisation, including in Outlook"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta API; needs a Microsoft Agent 365 licence. Blocking a SharePoint or Foundry agent only impacts Copilot Chat."
  - governs: "Which users and groups each agent is available to"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "The request body sets availableTo and allowedUsersAndGroups. Beta API; needs a Microsoft Agent 365 licence. Changes take up to 24 hours to apply."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-02-24T00:15:57"
changes:
  - date: "2026-11-25"
    note: "First briefing for the classic Outlook for Windows item: launched on the roadmap and in the September 23, 2026 release notes, with the agent block, availability and pay-as-you-go rules Learn documents for Copilot Chat."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 54 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 50
  unconfirmed: 3
  contradicted: 1
  attempts: 1
  hash: "9744f59adb1904548f45141d54afc099"
---

## What's changing

Declarative agents (agents that configure Copilot with custom instructions, knowledge and actions) can now be used from Copilot Chat in classic Outlook for Windows. Microsoft's release note for this item says users can work with declarative agents there through the integrated extensibility experience (plugins, adaptive cards, card actions, task modules), Outlook integrations (mail and calendar actions, enterprise connectors) and agent actions from extensibility providers, and that this aligns classic Outlook with other Copilot Chat experiences.

Users reach it by opening Copilot Chat from the ribbon or sidebar in classic Outlook and choosing an available agent. Learn's page on agents in Copilot Chat says included declarative agents are available by default and appear in the store according to your existing store settings for Teams and Microsoft 365 apps, while pay-as-you-go agents are turned off by default for Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) users.

The roadmap record gives the status as Launched, the target as January CY2026, the release phase as Current Channel, the platform as Desktop and the cloud as Worldwide (Standard Multi-Tenant). The Microsoft 365 Copilot release notes list roadmap ID 481559 under September 23, 2026, later than the roadmap's January CY2026 target.

## Why it matters

Classic Outlook is where many Windows users spend the working day, so every agent your catalogue offers to Copilot Chat users is now one click from their mail and calendar. Agents with mail and calendar actions or enterprise connectors act on data from inside the mailbox client, and agents that read shared tenant data can create metered charges for Basic-licence users once pay-as-you-go is set up.

If nobody acts, the agents your existing store and availability settings already allow appear for Copilot Chat users in classic Outlook. Treat the block and availability settings you hold today as the decision about what these users see, and review them now rather than after the first support call.

## Risk assessment

**Data exposure**
- The release note lists enterprise connectors among the Outlook integrations, and Learn's agents page treats agents that access shared tenant data, such as SharePoint or Graph Connector content, as a separate billing class for Basic licences. Check what each available agent is grounded on; blocking the agent (first row of the controls table) is the control.

**Security & identity**
- Who can use an agent is set per agent. Learn says that to allow users to add and use an app or a Copilot agent you must assign users or groups to it, so an agent left available to everyone is the exposure. The second row of the controls table sets this.

**Autonomy & actions**
- The release note names mail and calendar actions, card actions and extensibility provider agent actions. Microsoft has not described in the release note whether these actions ask the user to confirm before they run; identify which agents carry actions before classic Outlook users adopt them.

**Change & support**
- Blocking an agent built with Copilot Agent Builder or Copilot Studio also affects it in Outlook and other host products, but blocking one built with SharePoint or Microsoft Foundry only impacts its availability in Copilot Chat, according to Learn. Availability changes take up to 24 hours and, in rare cases, up to six days to reach the client, so expect questions about agents that are blocked but still visible.

## Cost and licensing

**Licence.** Learn's [Purchase and manage agents in Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat) page says declarative agents grounded in instructions and public websites are included with Copilot Chat (Basic), and Microsoft 365 Copilot (Basic) and (Premium). For Microsoft 365 Copilot (Premium), the use of agents comes with the licence and no action is needed to enable them.

**Meter.** For Copilot Chat (Basic) and Microsoft 365 (Basic) licences, agents that access shared tenant data are billed based on metered consumption, and you must set up or use an existing Copilot Studio subscription. Pay-as-you-go agents are turned off by default for those users. Setting up pay-as-you-go in the Microsoft 365 admin center needs an Azure subscription in the same tenant, per [Set up Microsoft Copilot pay-as-you-go services](https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go).

**Budget.** A budget on a pay-as-you-go billing policy triggers email notifications, but the same page says the system doesn't enforce the budget or prevent your organisation from exceeding it. Turning pay-as-you-go off can take up to two hours to stop users using the agents.

**Automation.** The Package Management API used in the controls table requires a Microsoft Agent 365 licence. The roadmap item states no licence or price of its own.

## Scope

- **Client:** classic Outlook for Windows (Desktop), Current Channel, per the roadmap record.
- **Cloud:** Worldwide (Standard Multi-Tenant). Other clouds are not listed on the roadmap item.
- **Users:** Copilot Chat users; what each can use depends on licence type, Copilot Chat (Basic), Microsoft 365 Copilot (Basic) or Microsoft 365 Copilot (Premium), as set out under Cost and licensing.
- **Availability management:** before migration to unified app management, allow apps and Copilot agents in both the Teams admin center and the Integrated apps page of the Microsoft 365 admin center; after migration, either is enough.

## Governance guidance

### Before rollout
- Review the agents under Agents > All agents in the Microsoft 365 admin center and block any that should not reach classic Outlook users.
- Check which users and groups each agent is available to in the Teams admin center, and under Integrated apps in the Microsoft 365 admin center if your tenant is not yet migrated to unified app management.
- Identify agents that carry mail and calendar actions, plugins or enterprise connectors, and decide whether each should be offered in Outlook.
- Decide with finance whether Copilot Chat (Basic) users should get agents that access shared tenant data, which are billed by metered consumption.

### At rollout
- Tell classic Outlook users which agents are approved and that they open them from Copilot Chat on the ribbon or sidebar.
- Allow up to 24 hours, and in rare cases up to six days, for an availability change to reach the client before treating it as a fault.

### After rollout
- Re-check Agents > All agents for newly published agents and block or scope them before they spread.
- Watch the Microsoft 365 Copilot release notes and Message center for changes to agent actions in classic Outlook.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation, including in Outlook</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; needs a Microsoft Agent 365 licence. Blocking a SharePoint or Foundry agent only impacts Copilot Chat.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups each agent is available to</strong><br><small>Group</small><br><small class="controls__note">The request body sets availableTo and allowedUsersAndGroups. Beta API; needs a Microsoft Agent 365 licence. Changes take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking an agent created with Copilot Agent Builder or Copilot Studio affects it in Microsoft Outlook and other host products; blocking one created with SharePoint or Microsoft Foundry only impacts its availability in Microsoft Copilot Chat. Both Graph operations are beta APIs, which Microsoft says are not supported in production, and the Package Management API requires a Microsoft Agent 365 licence. In the update call, availableTo is required when allowedUsersAndGroups is updated.

The Teams admin center path applies to every app and Copilot agent. Organisations not yet migrated to unified app management must also allow agents under Integrated apps in the Microsoft 365 admin center.

## Open questions

- Do mail and calendar actions run by an agent in classic Outlook ask the user to confirm before sending or changing items? Watch the Microsoft 365 Copilot release notes and the agent's own documentation.
- Which classic Outlook build in Current Channel first carries the agent experience? Watch the release notes for Microsoft 365 Apps.
- When will the roadmap item list release channels other than Current Channel, or clouds other than Worldwide (Standard Multi-Tenant)?
- When will the Package Management API move from beta to a version Microsoft supports in production?

<!-- rationale
risk: Medium. Agents can bring plugins, mail and calendar actions and enterprise connectors into the mailbox client, and included agents are available by default; the block and availability controls cover them but need setting.
cost: Variable. Agents grounded in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium); on Basic licences, agents that access shared tenant data are billed by metered pay-as-you-go consumption.
impact: Medium. Users of Copilot Chat in classic Outlook for Windows notice agents in the chat pane; mail flow and the rest of Outlook are not changed by this item.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The printed Teams admin center availability path is presented without requiring migration to app-centric management. | Found: All organizations don't have the app centric management feature available. If you see policies on the permission policies page, continue to use app permission policies or migrate to this feature on your own. | Fix: Keep the path, but prepend this sentence to controls[1].note and add it before the Teams path guidance: 'The Teams admin center path requires app-centric management; tenants still using app permission policies must continue using those policies or migrate to app-centric management.' Cite https://learn.microsoft.com/microsoftteams/app-centric-management. This prerequisite is distinct from unified app management. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
- [unsupported, major] Why it matters: first paragraph / behaviour: Every agent the catalogue offers to Copilot Chat users is now one click from their mail and calendar in classic Outlook. | Found: Searched: 'classic Outlook Copilot Chat agents all agents'. Opened release-notes and agents-overview. The release note documents declarative agents and interaction with available agents, not every catalogue agent or a universal one-click experience. | Fix: Replace 'so every agent your catalogue offers to Copilot Chat users is now one click from their mail and calendar' with 'so the declarative agent experience is now available within their mailbox client'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: definition of declarative agents / behaviour: Declarative agents configure Copilot with custom instructions, knowledge and actions. | Found: Declarative agents enable you to configure Copilot for specific scenarios by adding custom instructions, additional knowledge, and actions to automate business processes. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/agents-overview to sources for the definition of declarative agents. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/agents-overview
- [unsupported, minor] rationale: impact / behaviour: Mail flow is not changed by this item. | Found: Searched: '481559 mail flow' and 'classic Outlook declarative agents build mail flow'. Read release-notes and the roadmap record. Neither states that mail flow is unchanged; results about Exchange mail flow do not establish this feature's effects. | Fix: Remove 'mail flow and the rest of Outlook are not changed by this item' from the impact rationale.
- [unsupported, minor] rationale: impact / behaviour: The rest of Outlook is not changed by this item. | Found: Searched: 'classic Outlook declarative agents build mail flow'. Read release-notes and the roadmap record. They describe the added agent experience but do not state that all other Outlook behaviour is unchanged. | Fix: Remove 'mail flow and the rest of Outlook are not changed by this item' from the impact rationale.
-->
