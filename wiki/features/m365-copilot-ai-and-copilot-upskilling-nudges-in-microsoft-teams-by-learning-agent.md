---
title: "Microsoft 365 Copilot: Learning Agent upskilling nudges in Microsoft Teams"
slug: "m365-copilot-ai-and-copilot-upskilling-nudges-in-microsoft-teams-by-learning-agent"
roadmapId: 579905
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Learning Agent is planned to send personalised AI and Copilot learning nudges in Teams. Microsoft has not stated whether they arrive by default or can be switched off separately, so administrators should confirm before the December CY2026 target."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the Teams nudges. The Learning agent preview page lists a Microsoft Copilot licence, with a Viva Suite or Viva Premium licence not mandatory; Microsoft describes this as the Private Preview position."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["learning-agent","m365-copilot","teams","agents","adoption","admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 579905"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579905"
    kind: "roadmap"
  - title: "Learning agent"
    url: "https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps"
    kind: "learn"
  - title: "Set up Learning agent"
    url: "https://learn.microsoft.com/viva/learning/learning-agent-setup"
    kind: "learn"
  - title: "Learning Agent: Responsible AI FAQ"
    url: "https://learn.microsoft.com/viva/learning/transparency-note"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Get started with the Microsoft Frontier Program"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "A separate switch for Learning Agent nudges in Teams"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
  - governs: "Whether the Learning agent is blocked for the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General agent control: Microsoft has not confirmed it stops the nudges. Graph API is beta and needs a Microsoft Agent 365 licence."
  - governs: "Which users and groups receive Frontier preview features and agents"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Search all Copilot settings > Copilot Frontier > Turn on Frontier > All users or Specific users and groups > Save"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    api: null
    note: "Learning agent preview needs its groups in Frontier. Roles: AI, Security or Office Apps Administrator. Microsoft Learn documents no API for this setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap item 579905 (Learning Agent upskilling nudges in Teams), based on the roadmap record and the Learning agent pages on Microsoft Learn."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 66 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 64
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "44d8d9cb8fd67dcb54825656670f5d54"
---

## What's changing

The roadmap item states that Learning Agent will proactively deliver personalised AI and Copilot upskilling notifications through Microsoft Teams. It says the notifications are tailored to users' roles, Copilot adoption stages and usage patterns, and point people to practical scenarios and skills they can use in everyday tasks.

Microsoft Learn does not yet describe these Teams notifications as a feature, so what follows about their behaviour is the roadmap's description. Learn does describe the Learning agent itself. Its overview page lists personalised suggestions based on role, skills profile and recent work activity in Microsoft 365, assignment notifications, and Copilot upskilling tips. It says the agent is available in Microsoft Teams (web and desktop) and Microsoft Copilot, and that the preview is offered through the Frontier program, Microsoft's preview programme for new Copilot features. That page describes the current preview and may change.

The roadmap record shows status In development, a preview date of November CY2026 and a target date of December CY2026, with release phases General Availability and Preview. It lists Worldwide (Standard Multi-Tenant) and the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

This is a new stream of Microsoft-generated messages to users inside Teams, and it is tied to how people use Copilot. Service owners running a Copilot adoption programme may welcome it. Others will want to know it is coming before users start asking why they received a learning message.

Microsoft has not stated what happens on arrival, so do not assume nothing changes. No source says the nudges start without an administrator deploying the Learning agent, and none says they do not. The practical step is to find out who in your tenant already has the Learning agent, and to decide whether your Frontier and agent settings match the audience you want.

## Risk assessment

**Data exposure**
- The roadmap says the nudges are tailored to role, Copilot adoption stage and usage patterns. The Learning agent overview says its suggestions use role, skills profile and recent work activity in Microsoft 365, and its FAQ says it does not access private files or Teams chats. Which signals decide a Copilot adoption stage is not documented, so ask Microsoft before describing it to staff or works councils.
- The Responsible AI FAQ says Learning Agent does not access or use customer content within Teams, Word, Excel and PowerPoint. That statement is about the agent; Microsoft has not confirmed it for the Teams nudges specifically.

**Security & identity**
- The Learning agent setup page names Global Administrator as the role that deploys and governs the agent at tenant level and Knowledge Administrator for learning-specific configuration. The install steps for agents in the Microsoft 365 admin center include a permissions review and admin consent step; Microsoft has not said whether that applies to this agent.

**Autonomy & actions**
- The roadmap describes the delivery as proactive, which means the user does not start it. Learn describes the agent as built for learning and upskilling and says it declines other requests. No page documents any action the nudges take on user data or tenant settings.

**Change & support**
- Users may receive learning messages they did not ask for and will contact the help desk. Brief the service desk and Copilot champions before the preview date.
- Frontier features are preview features. Microsoft's Frontier page says they may be modified, suspended or discontinued and may not be covered by standard support commitments or service level agreements.
- The Learning agent overview lists English (en US) as the supported language.

## Cost and licensing

Microsoft has not published a licence, price or meter for the Teams nudges, and the licence for general availability is Not yet published.

For the Learning agent preview, the overview page lists a Microsoft Copilot licence, and says a Viva Suite or Viva Premium licence is not mandatory but, if enabled, the agent will access Viva Learning capabilities. Its FAQ says a Microsoft Copilot licence is mandatory for full functionality, that Viva Learning Premium unlocks advanced features such as custom academies and assignments, and that seeded licences provide limited access. These statements describe the Private Preview and are not confirmed for the nudges or for general availability.

The Learning agent pages list no Copilot Credits meter at the time of writing (November 2026). The Frontier page says certain Frontier experiences may be available only on a paid basis. The indirect cost known today is administrator and communication time.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Government clouds are not listed on the roadmap item.

Learn says the Learning agent is available in Microsoft Copilot and Microsoft Teams, on web and desktop, with side-by-side use in Word, PowerPoint and Excel listed as coming soon. The overview page lists English (en US) as the supported language.

In the preview, administrators deploy the agent to all users or to selected Microsoft 365 groups, and the overview page says groups enabled for the Learning agent must also be enrolled in Frontier. Enrolling users in Frontier needs one of the AI Administrator, Security Administrator or Office Apps Administrator roles, according to the Frontier page. Which users receive the nudges on arrival has not been stated.

## Governance guidance

### Before rollout
- Check in the Microsoft 365 admin center (Agents > All agents) whether the Learning agent is already deployed, and to which users or groups.
- Review who is enrolled in Frontier (Copilot Frontier row), because the overview page says groups enabled for the Learning agent must also be in Frontier during the preview.
- Draft a short note for Copilot champions and the service desk explaining that Teams learning messages are planned, who they are aimed at and who to contact.
- Watch Message center and the Learning agent pages on Microsoft Learn for the detail the roadmap item omits: default state, licensing and any switch for the nudges.

### At rollout
- Limit Frontier access to a pilot group first (Copilot Frontier row) and keep the rest of the tenant out until the nudges are documented.
- Confirm whether the pilot users see nudges in Teams, and record which of them also have a Microsoft Copilot licence.
- Keep the block action (Block or unblock the Learning agent row) ready as the fallback, once Microsoft confirms that blocking the agent also stops the nudges.

### After rollout
- Collect user feedback and service desk tickets about unwanted or irrelevant learning messages, and compare them with the Copilot adoption goals you set.
- Re-read the Learning agent and Frontier pages after the November CY2026 preview date and the December CY2026 target, since the preview wording on licensing and Frontier may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>A separate switch for Learning Agent nudges in Teams</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Learning agent is blocked for the organisation</strong><br><small>Agent</small><br><small class="controls__note">General agent control: Microsoft has not confirmed it stops the nudges. Graph API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups receive Frontier preview features and agents</strong><br><small>Group</small><br><small class="controls__note">Learning agent preview needs its groups in Frontier. Roles: AI, Security or Office Apps Administrator. Microsoft Learn documents no API for this setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Search all Copilot settings › Copilot Frontier › Turn on Frontier › All users or Specific users and groups › Save <a href="https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that switches the Teams nudges on or off separately from the Learning agent at the time of writing (November 2026), so the first row records that gap. The other rows are general controls for agents and for Frontier. Microsoft has not confirmed that blocking the agent stops the nudges.

The Frontier page says the Frontier admin control does not override the Agent settings: if an administrator turned off a Frontier agent in the Agent view, it is not available to users whatever their Frontier enrolment. The Graph package API is in beta, needs a Microsoft Agent 365 licence according to its page, and Microsoft has not said whether the Learning agent is managed as a package.

The Microsoft 365 admin center also lets administrators install or uninstall an agent for the whole organisation or for specific users or groups; the steps are on the [agent governance and lifecycle actions page](https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions).

## Open questions

- Are the Teams nudges on when an administrator deploys the Learning agent, or enabled separately? Watch Message center and the Learning agent overview on Microsoft Learn.
- Can administrators or users turn the nudges off or limit how often they arrive? No setting is documented yet.
- Which usage data decides a user's Copilot adoption stage, and does it use the same data as the Copilot usage reports?
- Which licence will the nudges need at general availability, and will Frontier enrolment still be required once the feature reaches the December CY2026 target?
- Will the nudges support languages other than English (en US), which is the only language the preview page lists?

<!-- rationale
risk: Medium. The nudges are tailored to role, Copilot adoption stage and usage patterns, and Microsoft has not documented a control that stops the nudges themselves; the agent's own deployment controls are the nearest lever.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence or meter for the nudges, and the Learning agent preview page lists a Microsoft Copilot licence as a requirement.
impact: Medium. Users who have the Learning agent would see messages in Teams; Microsoft has not said how many users in a tenant are in scope on arrival, so the audience depends on who is given the agent.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Cost and licensing; front matter: licensing.notes / availability: The cited overview describes Learning agent as a Private Preview offered through Frontier. | Found: Learning agent is currently available to authorized users in Private Preview exclusively through the Frontier program. | Fix: After the preview statement, add: 'Microsoft's October 27, 2026 release notes also say Microsoft 365 Copilot now includes Learning agent, without the Private Preview qualification; the two pages differ.' Cite https://learn.microsoft.com/microsoft-365/copilot/release-notes#october-27,-2026. | Source: https://learn.microsoft.com/viva/learning/learning-agent-overview-deployment-steps
- [supported, minor] Scope / availability: The setup page lists side-by-side Word, PowerPoint and Excel experiences as coming soon. | Found: Side-by-side experiences in Word, PowerPoint, and Excel (coming soon). | Fix: Add: 'The Responsible AI FAQ instead lists access within Teams, Word, Excel and PowerPoint without that qualification; the pages differ on app availability.' The FAQ is https://learn.microsoft.com/viva/learning/transparency-note. | Source: https://learn.microsoft.com/viva/learning/learning-agent-setup
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: Every deployment-audience control the checklist tells administrators to review is represented in the controls table. | Found: Check ... whether the Learning agent is already deployed, and to which users or groups. ... Table rows cover a separate nudge switch, organisation-wide blocking and Frontier enrolment, not agent deployment assignment. | Fix: Remove 'and to which users or groups' from the first Before rollout checklist item; the table has no deployment-assignment row. Do not add a control row as part of this correction.
- [unsupported, minor] rationale: impact / behaviour: The nudge audience depends on who is given the Learning agent. | Found: Searched: "Learning agent" "Copilot adoption" "notifications"; "Learning agent" "nudges" "default". Opened Learning agent setup, overviews, FAQ and Frontier guidance. These document agent access, not whether assignment determines the Teams nudge audience. | Fix: Replace the impact rationale with: 'Medium. The roadmap plans personalised learning messages in Teams, but Microsoft has not stated how many users in a tenant are in scope on arrival.'
-->
