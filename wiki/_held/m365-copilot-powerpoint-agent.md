---
title: "Microsoft Copilot: PowerPoint Agent builds presentations from chat"
slug: "m365-copilot-powerpoint-agent"
roadmapId: 543421
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "PowerPoint Agent builds decks from chat in Microsoft Copilot. Learn says it needs a paid Microsoft 365 Copilot licence and Anthropic models, on by default in most commercial tenants; the roadmap says a licence is optional."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "March CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn says Word, Excel and PowerPoint Agents need a paid Microsoft 365 Copilot licence and aren't available to Copilot Chat users without one. The roadmap item says it is available with or without that licence."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot-chat","agents","anthropic","m365-admin-center","licensing","enterprise-data-protection","data-residency","work-iq"]
sources:
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Assign AI provider access to users and groups"
    url: "https://learn.microsoft.com/copilot/implement/copilot-ai-provider-user-sec-group-access"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 543421"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543421"
    kind: "roadmap"
videos: []
related: ["powerpoint-async-notifications-for-powerpoint-agent-web","powerpoint-async-notifications-for-powerpoint-agent-windows-desktop","work-iq","agent-registry","app-management"]
controls:
  - governs: "Whether Anthropic models, which these agents require, are available to the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > User access > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Disable Anthropic as a Microsoft subprocessor"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "AI Administrator or Global Administrator role. Provider-level: also affects other features that use Anthropic models."
  - governs: "Which users or groups can use Anthropic models, and so these agents"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "Learn gives these steps for opting in; up to 999 combined user and group assignments per AI provider."
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General agent control. Learn says these agents can be managed like other Microsoft-installed agents; the entry for PowerPoint Agent is not named. API is beta and needs an Agent 365 licence."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-17T23:15:06"
changes:
  - date: "2026-11-24"
    note: "First briefing: Learn and the roadmap disagree on licensing, and the Anthropic provider setting is the documented control."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "bb4b1068fc7df5bcc9ae47483c7afd56"
---

## What's changing

PowerPoint Agent builds a presentation from a chat conversation. The roadmap item says it helps with research, formatting and layout, lets users refine content over several chat turns, and lets them open the deck in PowerPoint for full editing and collaboration.

Microsoft Learn describes it together with the Word and Excel Agents on one page. Learn says these agents are installed by Microsoft, use Anthropic's AI models exclusively, and appear in the **Tools** menu and under **All Agents** in the left navigation pane of the Microsoft Copilot app for users with a paid Microsoft 365 Copilot licence when Anthropic models are enabled for the tenant. They use Work IQ to retrieve files, emails, meetings and sites the user can already access, and Learn says generated content is stored in OneDrive.

The roadmap record gives the status as Launched, with a preview date of November CY2025 and a target of March CY2026. It lists General Availability and Preview as release phases, the platforms Desktop, Mac and Web, and the cloud Worldwide (Standard Multi-Tenant).

The two sources differ on licensing. The roadmap item says the agent is available to Microsoft 365 users with or without a Microsoft 365 Copilot licence. The Learn page says the agents are available only to users with a paid Microsoft 365 Copilot licence and aren't available to Copilot Chat users without one. Both statements are reported here as written.

## Why it matters

This agent sends work through a third-party model provider. Learn says Anthropic models are on by default for most commercial-cloud customers (excluding EU/EFTA and UK, where the default is No users), so in most commercial tenants licensed users can see the agents without an administrator doing anything. Learn also says Anthropic models are currently excluded from the EU Data Boundary and in-country processing commitments, which a data protection owner needs to accept or decline deliberately.

The control that matters is provider-level, not agent-level. Turning Anthropic off removes this agent for licensed users, and Learn says some other features may stop working too, so decide the scope of that action before someone takes it to stop one agent. The roadmap and Learn disagree on who is entitled, so expect help-desk questions from users without a licence.

## Risk assessment

**Data exposure**
- Learn says the agents use Work IQ to retrieve information from files, emails, meetings and sites that the licensed user has permission to access, and that Microsoft performs the searches and shares only relevant context with the reasoning model. A deck can therefore draw on anything that user can reach, so existing oversharing in SharePoint and OneDrive carries straight into generated slides.
- Learn says Anthropic models are currently excluded from the EU Data Boundary and, where applicable, in-country/region processing commitments. Customers within the EU Data Boundary and in the UK have Claude models disabled by default.
- Generated content is saved in OneDrive in the organisation's tenant, according to Learn.

**Security & identity**
- Learn says use of Anthropic models falls under Enterprise Data Protection and the Customer Copyright Commitment, with Anthropic acting as a Microsoft subprocessor. Sensitivity labels and compliance policies are described as respected.
- Access can be limited by assigning users or Microsoft Entra ID security groups to the Anthropic provider (up to 999 combined assignments), which is the nearest documented control over who reaches this agent.

**Autonomy & actions**
- Learn describes the agents as creating Word, Excel and PowerPoint files from user requests, and says they are part of the premium, licensed Microsoft 365 Copilot experience.

**Change & support**
- Disabling Anthropic makes the agents unavailable even to users with a paid licence. Learn adds that the agent can still appear in the agent store, and that appearing there does not show Anthropic models are enabled.
- The licensing difference between the roadmap and Learn is likely to produce tickets from Copilot Chat users who do not see the agent.

## Cost and licensing

**Licence.** The Learn page says Word, Excel and PowerPoint Agents are premium capabilities available only to users with a paid Microsoft 365 Copilot licence, and that they aren't available to Copilot Chat users without that licence. The roadmap item says PowerPoint Agent is available to Microsoft 365 users with or without a Microsoft 365 Copilot licence. Treat the roadmap statement as unconfirmed until Learn or Message center aligns with it.

**Meter.** The Learn page names no separate meter or price for these agents. A rate specific to this agent is not yet published.

**Indirect costs.** Administrator time to decide on Anthropic access and to brief users. Decks are saved in OneDrive; Learn gives no storage figure for them.

## Scope

**Users.** Per Learn, users with a paid Microsoft 365 Copilot licence, when Anthropic models are enabled for the tenant. The roadmap item also says users without that licence.

**Roles.** Learn says a member of the AI Administrator or Global Administrator role changes the Anthropic setting in the Microsoft 365 admin center.

**Clouds and regions.** The roadmap record lists Worldwide (Standard Multi-Tenant) only. For the Anthropic prerequisite, Learn says Claude models are not available for federal customers in GCC or for any customers in GCC High and DoD, and that a setting for non-federal GCC customers has been available since July 22, 2026. In EU/EFTA and UK regions the Anthropic setting defaults to No users.

**Platforms.** The roadmap record lists Desktop, Mac and Web.

**Rollout.** The roadmap status is Launched. No default or rollout mechanism is stated for PowerPoint Agent itself; the Learn page describes the agents as installed by Microsoft.

## Governance guidance

### Before rollout
- Check whether Anthropic is enabled in your tenant under AI providers operating as Microsoft subprocessors (first controls row). The default depends on region.
- Ask your data protection owner to accept or reject Anthropic's exclusion from the EU Data Boundary before leaving the provider enabled.
- Test with one user who holds a Microsoft 365 Copilot licence and one Copilot Chat-only user to see which of them gets the agent, because the roadmap and Learn differ.

### At rollout
- Limit Anthropic access to a pilot group of users or security groups if you want a staged start (second controls row), and note that the assignment covers every feature that uses Anthropic, not only this agent.
- Tell licensed users where the agent appears: the Tools menu and All Agents in the Microsoft Copilot app.
- Find the agent in Agents > All agents in the Microsoft 365 admin center and confirm whether a Block action is offered for it (third controls row).

### After rollout
- Sample generated decks in users' OneDrive to confirm the sensitivity labels you rely on are applied.
- Re-read the Learn page for the agents and the Anthropic page for changes to the licence statement, the default and the regional exclusions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Anthropic models, which these agents require, are available to the tenant</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator role. Provider-level: also affects other features that use Anthropic models.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › User access › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Disable Anthropic as a Microsoft subprocessor <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can use Anthropic models, and so these agents</strong><br><small>Group</small><br><small class="controls__note">Learn gives these steps for opting in; up to 999 combined user and group assignments per AI provider.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">General agent control. Learn says these agents can be managed like other Microsoft-installed agents; the entry for PowerPoint Agent is not named. API is beta and needs an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The provider setting is the control Learn documents for these agents. It works at the level of the AI provider, not the model and not PowerPoint Agent alone, and Learn says turning Anthropic off makes the agents unavailable even to licensed users. Changing it needs the AI Administrator or Global Administrator role.

Learn says administrators can manage these agents similarly to other agents installed by Microsoft. The Block action in the agent list is documented for any agent in the Microsoft 365 admin center; which entry represents PowerPoint Agent is not stated. The Graph call needs a Microsoft Agent 365 licence, is in beta, and is documented for a Copilot package, not named for this agent.

Microsoft Learn documents no API for the AI providers setting at the time of writing (November 2026).

## Open questions

- Can users without a Microsoft 365 Copilot licence use PowerPoint Agent, as the roadmap item says, or only licensed users, as Learn says? Watch the roadmap item and the Word, Excel and PowerPoint Agents page on Learn.
- Can PowerPoint Agent be blocked on its own, or does blocking apply to the Word, Excel and PowerPoint Agents together? Watch the agent list in the Microsoft 365 admin center and the agent actions page.
- Will Microsoft offer EU Data Boundary or in-country processing for these agents, given Anthropic models are currently excluded? Watch the Anthropic page on Learn.
- Will Microsoft document an API for the AI providers operating as Microsoft subprocessors setting? Watch the Microsoft Graph reference.

<!-- rationale
risk: Medium. The agent reads what the licensed user can reach and shares relevant context with Anthropic models, which Learn says are excluded from the EU Data Boundary; admin controls exist but need a decision.
cost: Low. The Learn page names a paid Microsoft 365 Copilot licence as the requirement and mentions no separate meter, so the cost it shows is the licence plus admin time. The roadmap says with or without a licence.
impact: Medium. Learn says users with a paid Microsoft 365 Copilot licence see the agents in the Copilot app when Anthropic models are enabled; the roadmap also says users without that licence can use it.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Rollout; front matter: defaultState / consistency: No default is stated for PowerPoint Agent itself, while the front matter says its default is on. | Found: defaultState: "on"; "No default or rollout mechanism is stated for PowerPoint Agent itself; the Learn page describes the agents as installed by Microsoft." | Fix: Replace the second sentence of Scope: Rollout with: 'Learn says the agents are installed by Microsoft and appear for users with a paid Microsoft 365 Copilot licence when Anthropic models are enabled for the tenant.' This is stated at https://learn.microsoft.com/copilot/manage/wordexcelppt-agents and reconciles Scope with defaultState: on and the regional qualifications already reported.
-->
