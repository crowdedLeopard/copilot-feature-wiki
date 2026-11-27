---
title: "Microsoft Teams: Facilitator creates PowerPoint presentations from meeting discussions"
slug: "microsoft-teams-turn-meeting-discussions-into-powerpoint-presentations-with-facilitator"
roadmapId: 571296
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Facilitator, the Copilot-licensed Teams meeting agent, will build PowerPoint decks from what was said, chats and shared files in a meeting. Admins should decide who can use Facilitator before the January CY2027 target, as no deck-only switch is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "act-now"
licensing:
  model: "included"
  notes: "The Facilitator setup page says Facilitator is included with a Microsoft Copilot license and subject to available capacity; users also need an eligible Microsoft 365 base licence and a Teams licence. No price specific to deck creation is published."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["teams","facilitator","powerpoint","m365-copilot","app-management","document-generation","retention"]
sources:
  - title: "Microsoft 365 Roadmap item 571296"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571296"
    kind: "roadmap"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Facilitator"
    url: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Who can use Facilitator, including deck creation (everyone, specific users or groups, or no one) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["app-management","microsoft-teams-meeting-shared-files","m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-ag-555884","sensitivity-labels"]
controls:
  - governs: "Who can use Facilitator, including deck creation (everyone, specific users or groups, or no one)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Built-in Teams agents > agent > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -AppAssignmentType UsersAndGroups"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Applies to all Facilitator skills. Use -OperationType with -Users or -Groups to set the list. The cmdlet reference describes Teams apps and does not mention built-in agents."
  - governs: "Whether the Facilitator app is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Facilitator is allowed by default. Blocking removes every Facilitator skill, not only deck creation."
  - governs: "Separate switch for Facilitator's PowerPoint deck creation"
    scope: "tenant"
    ui: null
    api: null
    note: "The setup page's per-skill control covers AI-generated notes only."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-27"
    note: "New briefing: Facilitator PowerPoint deck creation, in preview on Learn and targeted for general availability in January CY2027."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 53 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 51
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "a1609a9fc1a837e67d30714cba3cad44"
---

## What's changing

Facilitator, the AI agent that sits in Teams meetings, will be able to create a PowerPoint presentation from the meeting. The roadmap item states that a user can ask Facilitator to build the deck "from what was said, chats, and shared files in the meeting", for example a project update, a proposal or a readout for leadership. Facilitator can already draft Word documents the same way.

Microsoft Learn already lists "PowerPoint deck creation in meeting or post meeting" among Facilitator capabilities in **public preview**, with the example prompt "@Facilitator, Create a product planning PowerPoint deck based on last two meetings for executive review". Preview behaviour may change before general availability. Facilitator is allowed by default, and the setup page documents no setting that turns deck creation off on its own, so each licensed user decides whether to ask for a deck.

Facilitator is a shared participant, not a private assistant: when a user prompts it, everyone in the meeting sees the prompt, and Facilitator posts its response in the meeting conversation for everyone to see. Microsoft has not stated where the generated deck is saved or who it is shared with.

The roadmap record lists the item as **In development**, targeted for **January CY2027**, release phase General Availability, for the Worldwide (Standard Multi-Tenant) cloud on Desktop and Mac. Learn describes the same capability as already in public preview; both are reported here.

## Why it matters

This turns meeting content into a polished, portable file with one prompt. A deck that summarises a confidential discussion is easier to forward than a transcript, and the Facilitator setup page says meeting settings such as **Prevent copy and paste** and **Watermarks** are not applied to Facilitator's responses or AI-generated notes. Microsoft Purview's Facilitator page lists sensitivity labels and data loss prevention (DLP) as not supported for Facilitator AI interactions, so the controls many tenants rely on for sensitive meetings may not follow the content into the deck.

If nobody acts, any user who can already use Facilitator will be able to ask for decks once the capability reaches them. The decisions to take now are who keeps Facilitator, and how sensitive meetings and the resulting files are handled.

## Risk assessment

**Data exposure**
- Decks draw on spoken content, meeting chat and shared files (roadmap), and the preview example draws on more than one meeting. Content a participant saw only in passing can end up in a file. Whether the deck follows the meeting's sensitivity label is not stated; the setup page says AI-generated notes do not inherit it.
- Purview marks sensitivity labels and DLP as not supported for Facilitator AI interactions, so no DLP rule is documented as stopping sensitive meeting content reaching a deck.

**Security & identity**
- Only licensed users can prompt Facilitator; unlicensed participants can see prompts and responses. Microsoft has not stated whose permissions are used to read shared files or whose storage holds the deck.

**Autonomy & actions**
- Facilitator creates the deck only when a user asks for it. It does not act on its own, but one participant's request produces a file from everyone's contributions.

**Change & support**
- Expect questions about where decks are saved and who can open them, and about accuracy of AI-written slides used for leadership readouts. The capability is in preview on Learn, so details may change before the January CY2027 target.

## Cost and licensing

- **Licence:** the [Facilitator setup page](https://learn.microsoft.com/microsoftteams/facilitator-teams) says "Facilitator is included with a Microsoft Copilot license and subject to available capacity". Users also need an eligible Microsoft 365 base licence and an eligible Teams licence. The [Copilot licence options page](https://learn.microsoft.com/copilot/plan/copilot-license-options) says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans.
- **Meter:** no meter or separate price for Facilitator deck creation is published at the time of writing (November 2026).
- **Indirect costs:** admin time to review Facilitator availability and Purview coverage, and communication to meeting organisers. Microsoft has not stated whether decks count against a user's OneDrive storage.

## Scope

- **Users:** licensed users (Microsoft Copilot plus eligible Microsoft 365 and Teams licences) can prompt Facilitator. Using the preview requires being a Microsoft Teams Public preview participant.
- **Meetings:** Facilitator is currently not supported in 1:1 chats, group chats, or external chats and meetings.
- **Prerequisite:** Loop experiences in Teams must be turned on for Facilitator in meetings ([setup page](https://learn.microsoft.com/microsoftteams/facilitator-teams)).
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Platforms:** Desktop and Mac, as the roadmap record lists.
- **Rollout:** In development, targeted for January CY2027 (General Availability).

## Governance guidance

### Before rollout
- Decide whether Facilitator stays available to everyone, using Teams admin center > Teams apps > Built-in Teams agents > Edit availability, and narrow it to a pilot group if decks from sensitive meetings are a concern.
- Identify meeting types (board, HR, legal) where organisers rely on watermarks or copy restrictions, and tell those organisers that Facilitator responses are not covered by them.
- Brief compliance staff that Purview lists sensitivity labels and DLP as not supported for Facilitator AI interactions, and agree how decks from labelled meetings will be handled.

### At rollout
- Test deck creation with a pilot meeting and record where the deck is saved and who can open it.
- Tell users that prompts and Facilitator's responses are visible to everyone in the meeting.

### After rollout
- Review Facilitator activity in Microsoft Purview Audit and DSPM for AI, and check whether deck creation appears there.
- Revisit availability once Microsoft documents where decks are stored and whether labels apply.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Facilitator, including deck creation (everyone, specific users or groups, or no one)</strong><br><small>User</small><br><small class="controls__note">Applies to all Facilitator skills. Use -OperationType with -Users or -Groups to set the list. The cmdlet reference describes Teams apps and does not mention built-in agents.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Built-in Teams agents › agent › Edit availability <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType UsersAndGroups</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Facilitator app is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Facilitator is allowed by default. Blocking removes every Facilitator skill, not only deck creation.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for Facilitator's PowerPoint deck creation</strong><br><small>Tenant</small><br><small class="controls__note">The setup page's per-skill control covers AI-generated notes only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Facilitator's own controls govern every Facilitator skill, not decks alone. The setup page documents a per-skill control only for AI-generated notes (`IsCollabMeetingNotesFluidEnabled`, tenant-wide); it documents no setting for PowerPoint deck creation at the time of writing (November 2026).
- Microsoft's pages describe two places to manage Facilitator: the Facilitator setup page uses **Teams apps > Manage apps**, while the Manage apps page says built-in agents such as Facilitator are managed from the **Built-in Teams agents** page, not the Manage apps page. Check which your tenant shows.
- The setup page says that if all apps are blocked for the organisation, Facilitator is also blocked.
- For retention, the Purview Facilitator page says to use a retention policy with the **Teams chats** option for Facilitator AI interactions in meetings, and **OneDrive accounts** for AI-generated notes. It does not name deck files.
- The `Update-M365TeamsApp` reference describes the cmdlet for Microsoft Teams apps and does not mention built-in agents.

## Open questions

- Where is a Facilitator-generated deck saved, and who is it shared with by default? Watch the Facilitator setup page.
- Will decks inherit the meeting's sensitivity label, or can a label be required on them?
- Will Microsoft add a setting to turn off deck creation separately from Facilitator as a whole?
- Does Purview Audit record deck creation as its own event, alongside the notes, moderation and Q&A activity it lists for Facilitator?
- Will general availability in January CY2027 change the preview behaviour described on Learn, such as drawing on more than one meeting?

<!-- rationale
risk: Medium. Decks are new files built from meeting talk, chat and shared files, and Microsoft Purview lists sensitivity labels and data loss prevention as not supported for Facilitator AI interactions.
cost: Low. Facilitator is included with a Microsoft Copilot licence, so users who already have Facilitator need nothing new; Microsoft has published no separate price for deck creation. Expect admin and communication time.
impact: Medium. Copilot-licensed users who run Facilitator in meetings get the new skill, and everyone in those meetings sees Facilitator's responses in the meeting conversation.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Facilitator creates decks only when asked and does not act on its own. | Found: Searched: '"Facilitator" "PowerPoint" autonomous automatically prompt'; opened facilitator-teams. The roadmap says users can ask for decks and Learn gives a prompt example; neither states the absolute exclusion of other initiation mechanisms. | Fix: Replace 'Facilitator creates the deck only when a user asks for it. It does not act on its own, but one participant’s request produces a file from everyone’s contributions.' with 'A user can ask Facilitator to create a deck from meeting discussions, chats and shared files.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; controls[0].note; Governance controls table / command: Update-M365TeamsApp -Id <app id> -AppAssignmentType UsersAndGroups sets app availability, using -OperationType and -Users or -Groups for assignments. | Found: This cmdlet allows administrators to modify app state, availability and installation status by adding or removing users and groups or changing assignment type or installation status. | Fix: Add https://learn.microsoft.com/microsoftteams/app-centric-management to sources. It links Update-M365TeamsApp for app availability and describes app-centric access for apps and Copilot agents; the Facilitator setup page expressly directs admins to app-centric management. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist directs readers to review Purview Audit and DSPM for AI, but the controls table has no monitoring row. | Found: Review Facilitator activity in Microsoft Purview Audit and DSPM for AI, and check whether deck creation appears there. The table contains only agent availability, app blocking and the separate deck-switch gap. | Fix: The After rollout step 'Review Facilitator activity in Microsoft Purview Audit and DSPM for AI, and check whether deck creation appears there' has no corresponding controls-table row. Remove this checklist step; do not add a row as part of this correction.
- [supported, minor] Governance guidance: Before rollout / admin-path: Teams admin center > Teams apps > Built-in Teams agents > Edit availability reaches the availability control. | Found: To change who can use an agent, select one or more agents and choose Edit availability. | Fix: Replace the checklist path with 'Teams admin center > Teams apps > Built-in Teams agents > agent > Edit availability', matching controls[0].ui and making the agent-selection step explicit. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
-->
