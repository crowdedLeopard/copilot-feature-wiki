---
title: "Microsoft 365 Copilot: Learning agent for personalised microlearning and learning paths"
slug: "m365-copilot-learning-agent-in-m365-copilot"
roadmapId: 490154
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Learning agent, now launched, gives licensed users personalised microlearning and learning paths in Copilot and Teams. Learn says an admin enables it from the Agents page, so review who gets it and what licences it needs."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's FAQ says a Microsoft Copilot licence is mandatory for full functionality, Viva Learning Premium unlocks advanced features, and seeded licences give limited access. A price for this agent is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["learning-agent","m365-copilot","agents","licensing","frontier-program"]
sources:
  - title: "Microsoft 365 Roadmap 490154"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=490154"
    kind: "roadmap"
  - title: "Learning agent"
    url: "https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps"
    kind: "learn"
  - title: "Set up Learning agent"
    url: "https://learn.microsoft.com/viva/learning/learning-agent-setup"
    kind: "learn"
  - title: "Learning Agent Reports"
    url: "https://learn.microsoft.com/viva/learning/learning-agent-reports"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether the Learning agent is blocked for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users or groups the Learning agent is deployed to (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
videos: []
related: ["m365-copilot-ai-and-copilot-upskilling-nudges-in-microsoft-teams-by-learning-agent","frontier-program","declarative-agents"]
controls:
  - governs: "Whether the Learning agent is blocked for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta API; the reference says it requires a Microsoft Agent 365 license and does not name the Learning agent."
  - governs: "Which users or groups the Learning agent is deployed to"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents"
      docs: "https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "Page gives only the Agents page, then deploy to everyone or groups; Global Administrator. Request body sets deployedTo and acquireUsersAndGroups. Beta API requiring a Microsoft Agent 365 license."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-09T23:15:32"
changes:
  - date: "2026-11-24"
    note: "First briefing for the Learning agent: admin deployment, licences, reports and the preview wording that still differs from the Launched roadmap status."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 79 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 74
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "5c51b9c9174a629eadcea397e03c667c"
---

## What's changing

The Learning agent is a Microsoft-built agent in Microsoft 365 Copilot that helps employees build skills through personalised microlearning and structured learning experiences. Microsoft's Learn page describes personalised suggestions based on a user's role, skills profile and recent work activity in Microsoft 365, assignment notifications, Copilot upskilling tips, LinkedIn role play, skill assessments and learning streaks. The page lists English (en US) as the supported language.

According to Learn's setup page, users reach it in Microsoft Copilot (web and desktop) and Microsoft Teams (web and desktop). The same page lists Copilot Chat experiences and side-by-side experiences in Word, PowerPoint and Excel as "coming soon". The roadmap record lists the platform as Desktop and the cloud as Worldwide (Standard Multi-Tenant).

The roadmap item has status Launched, release phase General Availability and a target of June CY2026. The Microsoft 365 Copilot release notes list it under the update released between October 13, 2026 and October 27, 2026.

Microsoft's pages differ on maturity. The agent's overview page still says it is "currently available to authorized users in Private Preview exclusively through the Frontier program" and calls the agent "Learning (Frontier)", while the setup page and the roadmap record describe a launched agent. Treat the overview page's preview and Frontier wording as possibly out of date and confirm in your own tenant.

## Why it matters

This is an agent that reads learning context and suggests content, so its main effect is on who is offered it and which licences they hold. Learn says the agent is available in Teams and Copilot "once enabled by your admin", so nothing reaches users until an administrator deploys it; the overview page's Frontier wording on default visibility is the one point to check in your tenant.

The practical decisions are who should get it, whether the people in scope hold a Microsoft Copilot licence, and whether Viva Learning Premium is worth buying for the advanced features. Leaders also get usage reporting, which gives you a way to judge adoption before widening the deployment.

## Risk assessment

- **Data exposure**
  - Learn says the agent uses organisational role and learning preferences from Microsoft's learning ecosystem but does not access private files or Teams chats. It also lists "recent work activity in Microsoft 365" as an input to personalised suggestions, so confirm what that covers before deploying widely.
  - Enterprise content integration can include organisational resources such as SharePoint sites in suggestions.
- **Security & identity**
  - Deployment is done by a Global Administrator, and learning-specific configuration by a Knowledge Administrator, per the setup page. Keep both roles tightly held.
  - Learning agent reports show aggregate metrics only; Learn says no individual user identities or prompt content are exposed.
- **Autonomy & actions**
  - Learn describes suggestions, chat conversations, role play and skill assessments for this agent.
- **Change & support**
  - Users add the agent themselves from All agents in Microsoft Copilot once it is available to them, so expect questions about what it recommends and why.
  - Learn's overview page still carries preview and Frontier wording while the roadmap says Launched; plan support notes for both.

## Cost and licensing

Learn's overview FAQ says: "A Microsoft Copilot license is mandatory for full functionality. Viva Learning Premium unlocks advanced features like custom academies and assignments, while seeded licenses provide limited access." That FAQ is worded for the Private Preview, so confirm it against your tenant.

The overview page also lists "Viva Suite license / Viva Premium" as not mandatory. LinkedIn Learning is needed only for role-play coaching; other features work independently of it.

The Learning Agent Reports page says the Knowledge Admin reports are included with a Microsoft Copilot licence, need no separate Viva Learning licence and are not available for Copilot Chat-only tenants. The Viva Insights Agents Dashboard view is in public preview and follows Viva Insights entitlements.

A price or consumption meter for the Learning agent is not yet published. The setup page says some capabilities depend on assigned licences and points to a licensing matrix and feature documentation.

## Scope

**Users and licences.** Users need a Microsoft Copilot licence for full functionality, per Learn's FAQ. Admins deploy it to all users or to selected Microsoft 365 groups.

**Roles.** Learn's setup page names Global Administrator for deploying and governing the agent at the tenant level and Knowledge Administrator for learning-specific configuration, including content sources and feature settings. Learning agent reports are open to Global Admin, Knowledge Admin and Knowledge Manager.

**Platforms and cloud.** The roadmap record lists Desktop and Worldwide (Standard Multi-Tenant). Learn's setup page lists Microsoft Copilot and Microsoft Teams on web and desktop.

**Rollout.** The roadmap status is Launched with a target of June CY2026. No Message Center post is attached to this item. The overview page says that while the agent was previewed through Frontier, groups enabled for the Learning agent should also be enabled for Frontier.

## Governance guidance

### Before rollout
- Confirm which users hold a Microsoft Copilot licence, since Learn says it is mandatory for full functionality.
- Decide whether to deploy to everyone or to selected Microsoft 365 groups, and name the groups.
- Check whether the Frontier group setting still applies in your tenant, because the overview page ties deployment to Frontier access.
- Agree who holds the Global Administrator and Knowledge Administrator roles for this agent.

### At rollout
- Deploy the agent from the Agents page in the Microsoft 365 admin center to the chosen scope.
- Check that assigned users can open it in Microsoft Copilot and Teams, as Step 3 of the setup page asks.
- Tell users they add it from All agents in Microsoft Copilot.

### After rollout
- Open Learning reports from the agent's more options menu to review adoption; Learn says the dashboard needs at least ten users interacting before it shows data.
- Block the agent for the organisation from All agents if you need to withdraw it.
- Revisit the overview and setup pages for the removal of the preview and Frontier wording.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Learning agent is blocked for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; the reference says it requires a Microsoft Agent 365 license and does not name the Learning agent.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups the Learning agent is deployed to</strong><br><small>Tenant</small><br><small class="controls__note">Page gives only the Agents page, then deploy to everyone or groups; Global Administrator. Request body sets deployedTo and acquireUsersAndGroups. Beta API requiring a Microsoft Agent 365 license.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents <a href="https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking is organisation-wide: Learn says it restricts access to an agent across the organisation and prevents any user from using it. Deployment to everyone or groups is a separate control on the Agents page; the setup page gives no labels beyond the Agents page. Both Graph calls sit in the Package Management API, whose reference says access requires a Microsoft Agent 365 licence, and the reference does not name the Learning agent, so confirm its package ID in your tenant before scripting.

The overview page says admins can control which users or groups can access agents or features released under the Frontier program, and that groups enabled for the Learning agent should also be in Frontier. That page does not give a path for it, so it is not a row here.

The setup page also lists tenant policies as a way to allow or restrict access.

## Open questions

- Is the Learning agent now fully outside the Frontier program, and does the Frontier group setting still gate it? Watch the Learning agent overview page.
- Which licensing matrix applies now that the agent is launched, and does the Viva Learning Premium requirement stay as the FAQ describes? Watch the Learning agent setup page.
- Which tenant policies does the setup page mean by "Control access through tenant policies"? Watch the setup page.
- When do Copilot Chat and the side-by-side Word, PowerPoint and Excel experiences, listed as "coming soon", arrive? Watch Message center and the Microsoft 365 Copilot release notes.

<!-- rationale
risk: Low. Learn says an admin enables the agent, and that it uses organisational role and learning preferences but does not access private files or Teams chats.
cost: Low. Learn says a Microsoft Copilot licence is mandatory for full functionality and Viva Learning Premium unlocks advanced features; a price for this agent is not yet published.
impact: Low. Users see it only after an admin deploys it to everyone or to selected groups, so notice is limited to the groups chosen and the admins who deploy it.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing: Microsoft's pages differ on maturity / behaviour: The setup page describes the agent as launched. | Found: Searched: Learning agent launched setup; read learning-agent-setup, learning-agent-overview and the October 27 release-notes excerpt. Setup says 'available' and describes deployment, but does not state launch status. | Fix: Replace 'while the setup page and the roadmap record describe a launched agent' with 'while the roadmap record says Launched and the setup page describes the agent as available across Microsoft Copilot and Teams'.
- [unsupported, blocker] controls[1].ui; Governance controls table; Governance guidance: At rollout / admin-path: Microsoft 365 admin center > Agents is the route to the control choosing deployment users or groups. | Found: Searched: Learning agent launched setup; read overview, setup, linked manage-copilot-agents-integrated-apps and agent-actions. 'Agents' stops at navigation; agent-actions documents All agents, Registry, Status, Available, agent, Install and Deploy agent to selected users. | Fix: Replace controls[1].ui.path with 'Agents > All agents > Registry > Status > Available > agent > Install > Deploy agent to selected users' and controls[1].ui.docs with https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions. Replace the note's 'Page gives only the Agents page, then deploy to everyone or groups' with 'In Deploy agent to selected users, choose all users or specific users or groups'. Keep the existing Graph properties and licence qualification. Use the same route in the rendered table.
- [contradicted, blocker] front matter: cost; rationale: cost; Why it matters / consistency: Cost is low, meaning indirect cost only, despite the published licence requirements and the discussion of buying premium learning functionality. | Found: cost: "low" Cost rationale: 'a Microsoft Copilot licence is mandatory for full functionality and Viva Learning Premium unlocks advanced features' Why it matters: 'whether Viva Learning Premium is worth buying for the advanced features' | Fix: Set cost to 'medium'. Replace its rationale with: 'Medium. Full functionality requires a Microsoft Copilot licence, and advanced learning features require Viva Learning Premium under the overview's Private Preview FAQ; additional licensing may therefore be needed for the selected users. A separate agent price or meter is not yet published.' This uses the verified FAQ at https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps and retains its preview qualification.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Open questions / availability: The setup page lists Copilot Chat experiences as coming soon. | Found: Copilot Chat experiences (coming soon). | Fix: After this statement add: 'The overview page instead lists Microsoft Copilot Chat Native App as supported in the current preview.' Cite https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps, which the briefing already includes. | Source: https://learn.microsoft.com/viva/learning/learning-agent-setup
- [supported, minor] front matter: defaultState; summary; Why it matters; rationale: risk and impact / default: Users can access the agent only after an administrator enables it. | Found: It's available in Microsoft Teams and Microsoft Copilot once enabled by your admin in the Microsoft 365 admin center. | Fix: Keep admin-opt-in as the FAQ-supported field, but replace the absolute 'so nothing reaches users until an administrator deploys it' with: 'The same overview also says that a Frontier-published agent is visible by default to all tenant users with the required licence; confirm visibility and access in your tenant.' This reports the competing wording at https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps without treating visibility as proof of usable access. | Source: https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps
- [supported, minor] Governance guidance: After rollout / admin-path: Administrators can open Learning reports from the Learning agent's more options menu. | Found: Open the Learning Agent. 2. Select the more options (•••) menu in the top-right corner. 3. Select Learning reports. | Fix: Add to the reports checklist bullet: 'The Learning reports menu entry is still rolling out and may not be visible in every tenant; until it appears, use the direct Open Learning Agent Reports link on https://learn.microsoft.com/viva/learning/learning-agent-reports.' | Source: https://learn.microsoft.com/viva/learning/learning-agent-reports
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to check the Frontier group setting, but that control has no row. | Found: Before rollout: 'Check whether the Frontier group setting still applies in your tenant' Governance controls: 'That page does not give a path for it, so it is not a row here.' | Fix: Replace the checklist bullet with 'Confirm whether the Learning agent remains subject to Frontier before rollout; the overview still describes that prerequisite.' This narrows the advice to resolving the documented maturity conflict rather than directing a check of an unlisted setting.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist directs administrators to review Learning reports, but reporting has no controls-table row. | Found: After rollout: 'Open Learning reports from the agent's more options menu to review adoption' The controls table contains only organisation-wide blocking and deployment targeting. | Fix: Remove the After rollout bullet that instructs readers to open Learning reports: it has no corresponding controls-table row. Keep the verified reporting facts in the body; do not add a row during this correction.
-->
