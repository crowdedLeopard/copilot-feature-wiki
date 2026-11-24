---
title: "Microsoft Teams: manage built-in Teams agents from a dedicated admin centre page"
slug: "microsoft-teams-manage-built-in-teams-agents-in-the-teams-admin-center"
roadmapId: 564766
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Built-in Teams agents such as Channel Agent and Facilitator now have their own Teams admin center page, separate from the Microsoft apps setting. They are on by default for licensed users; review who should keep them."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item says the agents are enabled by default for licensed users. The Facilitator page says it is included with a Microsoft Copilot license; the Channel Agent page lists a Copilot licence as a prerequisite. The admin page itself names no licence."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","agents","app-management","admin-center","agent-governance","channels","facilitator","gcc"]
sources:
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Set up a Channel Agent for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams"
    kind: "learn"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 564766"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564766"
    kind: "roadmap"
videos: []
related: ["app-management","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","microsoft-teams-channel-agent-to-3p-mcp-tool-orchestration-in-teams-channels"]
controls:
  - governs: "Who can use each built-in Teams agent (everyone, specific users or groups, no one)"
    scope: "agent"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Built-in Teams agents > agent > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Teams Administrator role. Replaces Manage apps for built-in agents."
  - governs: "Whether a Channel Agent is automatically created in new channels"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Agent settings > auto-creation"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams"
    api: null
    note: "Described on the Channel Agent page, which is marked public preview."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-24"
    note: "New briefing: built-in Teams agents are managed from the Built-in Teams agents page in the Teams admin center, separate from the Microsoft apps setting."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 51
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "c7d8b68009477900d3b4c7f7a06becce"
---

## What's changing

Teams built-in agents, such as Channel Agent and Facilitator, are now managed from a dedicated **Built-in Teams agents** page in the Teams admin center. The roadmap item describes agents available across chats, channels and meetings, with admins controlling availability for users and groups from one place. Microsoft Learn says these agents are managed from that page and not from **Manage apps**.

The roadmap item says the agents are enabled by default for licensed users and managed independently of org-wide Microsoft app settings. Learn agrees on the second point: built-in agents are "no longer controlled by the Microsoft apps setting". On the page, an admin selects one or more agents and chooses **Edit availability** to make them available to everyone, to specific users or groups, or to no one.

The roadmap record gives the status as Launched, with a target of July CY2026 and General Availability as the release phase. It lists Worldwide (Standard Multi-Tenant) and GCC, on Android, Desktop, iOS and Mac. The Channel Agent setup page is still marked as public preview and still tells admins to allow or block Channel Agent on **Manage apps**; the two Learn pages differ, and this briefing follows the manage-apps page for where built-in agents are managed.

## Why it matters

Anyone who restricted Microsoft-published apps through the org-wide **Microsoft apps** setting can no longer rely on it to keep built-in agents away from users. Per the roadmap item and the Learn pages, built-in agents are allowed by default and are now governed on their own page, so a tenant that has not reviewed it is running with whatever the default is.

The practical view: treat the Built-in Teams agents page as a new control surface to review, decide which agents each group should have, and tell support and champions what will appear in channels and meetings. The default is on, so doing nothing leaves licensed users with the agents.

## Risk assessment

**Data exposure**
- Channel Agent uses channel messages, the channel's SharePoint files, channel and standard meetings and meeting transcription as knowledge, according to its setup page. That page also says it does not use files the requesting user cannot access and does not use files whose sensitivity labels prevent extraction or whose DLP policies prevent AI use. Limiting who gets the agent through **Edit availability** is the control on who can reach this data through it.
- The same page says labelled output does not inherit the label's controls and does not prevent the information being shared further.

**Security & identity**
- Availability is set per agent as everyone, specific users or groups, or no one. The setup page says users not enabled for Channel Agent can view the agent's presence and messages but cannot interact with it.
- Managing the page needs the Teams Administrator role; Learn recommends the lower-privilege role where possible.

**Autonomy & actions**
- By default, a Channel Agent is automatically added to any new channel an eligible user creates, according to the Channel Agent page. The **Agent settings** auto-creation toggle changes that.
- The setup page describes Channel Agents helping with tasks such as assigning tasks and due dates, so the people who can use one can prompt it to take those actions.

**Change & support**
- An existing block on **Microsoft apps** no longer covers built-in agents, and the Channel Agent page's own instructions to use **Manage apps** differ from the manage-apps page. Expect support questions on which page is authoritative.

## Cost and licensing

The Learn page for the admin experience (manage-apps) lists the Teams Administrator role and names no licence for the **Built-in Teams agents** page. The licences sit with the agents. The Facilitator setup page says Facilitator "is included with a Microsoft Copilot license and subject to available capacity", and lists an eligible Microsoft 365 base licence, a Teams licence and a Microsoft Copilot licence. The Channel Agent setup page lists the same three licence requirements and marks the feature as public preview.

No meter, price or credit rate for the Built-in Teams agents page is published at the time of writing (November 2026). Indirect cost is admin time for the review and communication to users.

## Scope

- **Users:** licensed users, per the roadmap item. Availability can be set to everyone, specific users or groups, or no one.
- **Roles:** Teams Administrator, per the manage-apps page.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, on Android, Desktop, iOS and Mac.
- **Agents covered:** Channel Agent, Facilitator and other built-in agents available across chats, channels and meetings, per Learn. The full list of built-in agents is not given on the pages read.
- **Release channel:** Learn notes that admins can view and manage only agents deployed in the same release channel as their tenant.

## Governance guidance

### Before rollout
- Inventory which built-in agents appear on the **Built-in Teams agents** page and which groups should have each one.
- Check how your tenant has used the org-wide **Microsoft apps** setting, because it no longer governs built-in agents.
- Confirm the Teams Administrator role holders who will manage the page.
- Tell support and champions that Channel Agent and Facilitator can appear in channels, chats and meetings for licensed users.

### At rollout
- Set **Edit availability** for each built-in agent to everyone, specific users or groups, or no one.
- Decide whether Channel Agent should be auto-created in new channels and set the auto-creation toggle on **Agent settings**.
- Record the settings chosen, per agent, in your change log.

### After rollout
- Revisit the page when Microsoft adds built-in agents, since the list is not fixed on the pages read.
- Collect user and support feedback on where agents appear and adjust availability for the affected groups.
- Watch Message center and the manage-apps page for guidance on the difference between the Channel Agent page and the Built-in Teams agents page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use each built-in Teams agent (everyone, specific users or groups, no one)</strong><br><small>Agent</small><br><small class="controls__note">Teams Administrator role. Replaces Manage apps for built-in agents.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Built-in Teams agents › agent › Edit availability <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a Channel Agent is automatically created in new channels</strong><br><small>Tenant</small><br><small class="controls__note">Described on the Channel Agent page, which is marked public preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Agent settings › auto-creation <a href="https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The **Built-in Teams agents** page replaces **Manage apps** for these agents; the org-wide **Microsoft apps** setting under **Manage apps** > **Actions** > **Org-wide app settings** no longer controls them, so do not use it as a stand-in. Microsoft Learn documents no PowerShell or Graph operation for the Built-in Teams agents page at the time of writing (November 2026). The Channel Agent page also notes auto-creation defaults to Off for EDU tenants.

## Open questions

- Which agents count as built-in beyond Channel Agent and Facilitator, and will new ones appear on the page automatically?
- Does Microsoft plan an automation interface (PowerShell or Graph) for the Built-in Teams agents page? Watch the manage-apps page and the Teams PowerShell release notes.
- Will the Channel Agent setup page be updated to point to the Built-in Teams agents page, now that it still describes **Manage apps**?
- What is the exact default availability on the Built-in Teams agents page for each agent, beyond the roadmap statement that they are enabled by default for licensed users?

<!-- rationale
risk: Medium. Built-in agents are on by default for licensed users, and the org-wide Microsoft apps setting no longer governs them, so an existing block there no longer covers them.
cost: Low. The only cost shown for the page itself is admin time; the agents' own licences (a Microsoft Copilot licence on the Facilitator page) are already held by the users who see them.
impact: Medium. Admins see a new page; licensed users in chats, channels and meetings see the agents unless an admin limits who can use them.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure, first bullet / applicability: Limiting availability through Edit availability controls who can reach the channel data through Channel Agent. | Found: Users who aren't enabled for Channel Agents can view the agent’s presence and messages, but they can't interact with the agent. | Fix: Replace 'Limiting who gets the agent through Edit availability is the control on who can reach this data through it' with 'Edit availability controls who can interact with the agent; users who are not enabled can still view its presence and messages.' The existing cited Channel Agent page states this distinction. | Source: https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams
- [contradicted, blocker] rationale: cost / licensing: The agents' own licences are already held by the users who see them. | Found: Unlicensed users can't prompt Facilitator, but they can see others' prompts to Facilitator and Facilitator's responses. Unlicensed users can see Facilitator's notes in meetings. | Fix: Replace the cost rationale with 'Low. Reviewing the admin page and communicating availability decisions take admin time; Facilitator and Channel Agent interaction have the licence requirements described in Cost and licensing.' Do not equate seeing agent output with holding its licence. | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: Learn pages agree agents are allowed by default / default: The Channel Agent setup page says Channel Agents are allowed by default. | Found: Channel Agents are allowed by default. However, if all apps are blocked for your organization, Channel Agents are also blocked. | Fix: Add to the existing discussion of documentation differences: 'The Channel Agent setup page also says Channel Agents are blocked if all apps are blocked, whereas manage-apps says the Microsoft apps setting no longer controls built-in agents.' Keep both statements attributed to their respective cited pages. | Source: https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams
- [supported, minor] Why it matters: Learn pages agree agents are allowed by default / default: The Facilitator setup page says Facilitator is allowed by default. | Found: Facilitator is allowed by default. However, if all apps are blocked for your organization, Facilitator is also blocked. | Fix: Add to the documentation-differences paragraph: 'The Facilitator setup page likewise says Facilitator is blocked if all apps are blocked and still gives Manage apps instructions.' Cite https://learn.microsoft.com/microsoftteams/facilitator-teams. | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits a launched, default-on change rated medium risk that requires an availability decision. | Found: status: launched; defaultState: on; risk: medium; action: prepare. The standard assigns act-now when a default-reaching change is launched and there is a control to set or decision to take with medium-or-higher risk or cost. | Fix: Set action to 'act-now': the item is already launched, agents are enabled by default for licensed users, and the briefing asks admins to decide availability to address its medium risk.
- [contradicted, minor] Governance guidance: Before rollout, Microsoft apps checklist item / consistency: Every control the governance checklist asks readers to review has a controls-table row. | Found: Before rollout: 'Check how your tenant has used the org-wide Microsoft apps setting'. The controls table has rows for built-in-agent availability and Channel Agent auto-creation, but no Microsoft apps row. | Fix: Replace that checklist item with 'Record that the org-wide Microsoft apps setting no longer governs built-in agents.' This removes the instruction to review a control without a table row; do not add a row.
-->
