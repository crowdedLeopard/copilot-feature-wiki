---
title: "Outlook for Mac: agents in Copilot Chat"
slug: "outlook-agents-for-m365-copilot-available-in-copilot-chat-in-outlook-for-mac"
roadmapId: 486696
topic: "modern-work"
products: ["Outlook"]
summary: "Declarative agents are now available in Copilot Chat in Outlook for Mac (roadmap status: Launched). Review which agents are available or blocked, and whether pay-as-you-go billing applies to your Copilot Chat users."
status: "launched"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Learn's page on agents in Copilot Chat says agents grounded in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium); agents using shared tenant data are pay-as-you-go for Basic licences."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["outlook","macos","copilot-chat","declarative-agents","agents","app-management","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap: item 486696"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=486696"
    kind: "roadmap"
  - title: "Purchase and manage agents in Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat"
    kind: "learn"
  - title: "Compare declarative and custom engine agents"
    url: "https://learn.microsoft.com/plugins/agents-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Unified agent and app management"
    url: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Set up Microsoft Copilot pay-as-you-go services"
    url: "https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go"
    kind: "learn"
videos: []
related: ["declarative-agents","app-management","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise","outlook-copilot-chat-pop-out-for-outlook-for-mac-and-ipad"]
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
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta (preview) API; needs a Microsoft Agent 365 licence. Blocking a SharePoint or Foundry agent affects only Copilot Chat."
  - governs: "Which users and groups can use each agent"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "The reference describes the cmdlet as updating the Microsoft Teams app. Changes can take up to 24 hours to apply. Before migration to unified app management, also allow agents under Integrated apps in the Microsoft 365 admin center."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-23"
roadmapModified: "2026-10-08T23:04:12"
changes:
  - date: "2026-11-22"
    note: "First briefing for the Outlook for Mac item: launched on the roadmap, no Learn page for the Mac client yet, with the agent block, availability and pay-as-you-go rules that Learn documents for Copilot Chat."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: default state is now on, per Learn; availability guidance covers organisations not yet migrated to unified app management; action is act-now; billing-report checklist items removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 44 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 44
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1ff3317e2303b72f3adf03632d8eb65c"
---

## What's changing

Microsoft is adding declarative agent support to Copilot Chat in Outlook, and this roadmap item tracks availability in Outlook for Mac. The roadmap record gives the status as Launched, the target as March CY2026, the release phase as Current Channel and General Availability, and the cloud as Worldwide (Standard Multi-Tenant).

A declarative agent configures Copilot for a scenario by adding custom instructions, additional knowledge and actions, and Microsoft Learn lists Outlook among the Microsoft 365 apps where these agents run. Learn's page on agents in Copilot Chat says users can discover and use agents from the chat experience, and that access is controlled in the Microsoft 365 admin center.

Microsoft Learn has no page for the Mac item. Its release notes list roadmap ID 481559 for classic Outlook for Windows ("integrated extensibility experience support for declarative agents in Copilot Chat in Outlook") but no entry for 486696 at the time of writing (November 2026). What follows about the Mac client is therefore the roadmap's description plus Learn's general documentation of agents in Copilot Chat.

## Why it matters

Agents that carry knowledge sources and actions are now reachable from the mailbox client that Mac users keep open all day. The governance work is the same as for Teams or the Microsoft 365 Copilot app: decide which agents your tenant makes available, to whom, and whether any of them can generate metered charges.

Included declarative agents are available by default according to existing Teams and Microsoft 365 app store settings. Pay-as-you-go agents are off by default for Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) users. Treat the settings you already hold as the thing that decides what Mac users see.

## Risk assessment

**Data exposure**
- A declarative agent can bring in custom knowledge, including Microsoft 365 data sources and Copilot connectors. Learn's agents page treats agents that access shared tenant data, such as SharePoint or Graph connector content, as a separate billing class for Basic licences. Check what each agent in your catalogue is grounded on before Mac users find it; the block row in the controls table is the control.

**Security & identity**
- Who can use an agent is set per agent by assigning users or groups. Learn says that to allow users to add and use an app or a Copilot agent you must assign users or groups to it, so an agent with an unreviewed assignment is the exposure.

**Autonomy & actions**
- Declarative agents can include custom actions that integrate with APIs to interact with external systems. Identify which agents in your catalogue have actions before they are used from Outlook; blocking the agent is the control that Learn documents.

**Change & support**
- Blocking an agent that was built in Copilot Agent Builder or Copilot Studio affects it in Outlook and other host products as well as Copilot. Learn also says availability changes can take up to 24 hours and, in rare cases, up to six days to reach the client, so expect support questions about an agent that is blocked but still shows.

## Cost and licensing

Learn's page on agents in Copilot Chat sets the licence rules. Declarative agents grounded in instructions and public websites are included with Copilot Chat (Basic), and Microsoft 365 Copilot (Basic) and (Premium). For Microsoft 365 Copilot (Premium), the page says the use of agents comes with the licence.

For Copilot Chat (Basic) and Microsoft 365 (Basic) licences, agents that access shared tenant data are billed based on metered consumption, so the meter is pay-as-you-go billing, which needs a Copilot Studio subscription. The page says pay-as-you-go agents are turned off by default for those users. A budget on a pay-as-you-go billing policy sends email notifications but, per the setup page, does not enforce the budget or stop usage.

The Package Management API in the controls table needs a Microsoft Agent 365 licence. The roadmap item states no licence or price of its own.

## Scope

The roadmap item covers Outlook for Mac, in Current Channel and General Availability, in the Worldwide (Standard Multi-Tenant) cloud. Other clouds are not listed on the roadmap item.

The licence rules above apply by licence type: Copilot Chat (Basic), Microsoft 365 Copilot (Basic) and Microsoft 365 Copilot (Premium). Before migration to unified app management, allow apps and Copilot agents in both Teams admin center and Microsoft 365 admin center > Integrated apps; after migration, either admin centre can manage availability.

## Governance guidance

### Before rollout
- Review the agents listed under Agents > All agents in the Microsoft 365 admin center and block any that should not be offered to Outlook users.
- Confirm which users and groups each agent is available to, in the Teams admin center and, before migration to unified app management, also under Integrated apps in the Microsoft 365 admin center, and tighten any that are assigned to everyone without a reason.

### At rollout
- Tell Mac users which agents are approved for Outlook and who to ask for access to others.
- Allow for up to 24 hours, and in rare cases up to six days, before an availability change reaches the client.

### After rollout
- Re-check this page when Microsoft Learn publishes a page or release note for agents in Copilot Chat in Outlook for Mac.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation, including in Outlook</strong><br><small>Tenant</small><br><small class="controls__note">Beta (preview) API; needs a Microsoft Agent 365 licence. Blocking a SharePoint or Foundry agent affects only Copilot Chat.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups can use each agent</strong><br><small>Group</small><br><small class="controls__note">The reference describes the cmdlet as updating the Microsoft Teams app. Changes can take up to 24 hours to apply. Before migration to unified app management, also allow agents under Integrated apps in the Microsoft 365 admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking an agent that you created with Copilot Agent Builder or Copilot Studio affects it in Microsoft Outlook and other host products; blocking one created with SharePoint or Microsoft Foundry affects only its availability in Copilot Chat. The Graph block operation is a beta (preview) API and needs a Microsoft Agent 365 licence.

The Update-M365TeamsApp reference describes the cmdlet as a Microsoft Teams app cmdlet. The app centric management page says that for organisations migrated to unified app management, apps and Copilot agents can be allowed in either the Teams admin center or the Integrated apps page of the Microsoft 365 admin center.

## Open questions

- Does Outlook for Mac present agents the same way as other Copilot Chat surfaces? Learn documents the default for included agents in Copilot Chat but has no page on the Mac client; watch the Microsoft 365 Copilot release notes and Message center.
- Will Microsoft Learn publish a page or release note for roadmap item 486696, as it has for the Windows item 481559?
- When will the Package Management API block operation move from beta to a version Microsoft supports in production?
- Does Outlook for Mac offer the same agent types as classic Outlook for Windows? Watch the Learn release notes for the answer.

<!-- rationale
risk: Medium. Declarative agents can carry custom knowledge and actions, and this item puts them in a mailbox client; the block and availability controls cover it but need someone to configure them.
cost: Variable. Agents grounded in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium); agents using shared tenant data are billed by metered consumption (pay-as-you-go) on Basic licences.
impact: Medium. The people who notice are users of Copilot Chat in Outlook for Mac; the roadmap item covers the Mac client and no other platform.
-->
