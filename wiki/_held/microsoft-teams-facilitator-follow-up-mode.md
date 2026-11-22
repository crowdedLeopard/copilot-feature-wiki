---
title: "Microsoft Teams: Facilitator follow-up mode lets users chat without tagging it"
slug: "microsoft-teams-facilitator-follow-up-mode"
roadmapId: 566523
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a Facilitator follow-up mode in Teams so users can chat with it without tagging it each time. Targeted January CY2027; default and controls not yet stated. Review Facilitator availability settings."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Facilitator is included with a Microsoft Copilot licence, subject to available capacity, and lists an eligible Microsoft 365 base licence and Teams licence as prerequisites. Nothing specific to follow-up mode is published."
audiences: ["m365-admin","service-owner","compliance","end-user"]
tags: ["facilitator","teams","m365-copilot","agents","ai"]
sources:
  - title: "Microsoft 365 Roadmap 566523"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566523"
    kind: "roadmap"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Facilitator"
    url: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["microsoft-teams-facilitator-detects-and-answers-questions","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","microsoft-teams-facilitator-s-enhanced-protection-skill-can-alert-you-to-potential-scams","meeting-transcripts","microsoft-teams-meeting-shared-files"]
controls:
  - governs: "Who can use Facilitator, and so follow-up mode"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Built-in Teams agents > agent > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Learn says you can make an agent available to everyone, specific users or groups, or no one. It governs Facilitator as a whole, not follow-up mode."
  - governs: "Whether Facilitator is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "The cmdlet page describes Teams apps generally and does not name Facilitator; its examples describe -IsBlocked $true as unblocking, so check the value. Differs from the Built-in Teams agents page."
  - governs: "A tenant-wide switch for follow-up mode itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no such control at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap describes Facilitator follow-up mode; Learn does not yet, so default, licence detail and controls specific to it are not stated."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 54
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "742b60cce8cda29053f7e051eac61e0f"
---

## What's changing

The roadmap item describes Facilitator follow-up mode in Microsoft Teams as the ability to "chat naturally with Facilitator without tagging it each time". That sentence is all the record says about it. Microsoft Learn does not describe follow-up mode at the time of writing (November 2026), so what follows about behaviour is the roadmap's description only.

Today Learn documents that licensed users can interact with Facilitator by mentioning it in the chat, and that when a user prompts Facilitator, all users can view that communication and Facilitator's response in the meeting's conversation. Whether follow-up mode keeps that visibility, where it works (meeting chat, other chats, Teams Rooms) and how Facilitator decides that an untagged message is meant for it are not stated.

The record gives the status In development, a preview date of December CY2026 and a target date of January CY2027, with release phases General Availability and Preview. It lists Android, Desktop, iOS, Mac and Web, and the Worldwide (Standard Multi-Tenant) cloud. These are Microsoft's targets, not commitments.

## Why it matters

Follow-up mode removes the explicit mention that Learn describes today as one way to address Facilitator. For a service owner this changes what users expect from the agent in a conversation, and it may change how many messages Facilitator acts on. Microsoft has not said how.

Microsoft has not stated whether the mode is on when it arrives or whether it has its own admin switch, so the only documented levers are those that govern Facilitator as a whole. If nobody acts, Microsoft has not stated what happens. Plan from the controls that exist today and watch Message center for the notice that settles the default.

## Risk assessment

**Data exposure**

- Learn says Facilitator's responses appear in the conversation for everyone, as if another person were talking in the chat. If follow-up mode behaves the same way, an untagged exchange is visible to all participants; Learn does not say.
- The Purview page for Facilitator marks data loss prevention and sensitivity labels as not supported for Facilitator AI interactions, and Learn says Prevent copy and paste and Watermarks are not applied to Facilitator's responses. These gaps are documented for Facilitator today; nothing says whether follow-up mode changes them.

**Security & identity**

- Learn says unlicensed users cannot prompt Facilitator but can see others' prompts and its responses. Confirm that the licence check holds for untagged messages before relying on it.

**Autonomy & actions**

- Learn lists Word document creation and adding topics to the agenda among Facilitator's mention-triggered capabilities. The roadmap text for follow-up mode mentions chat only, so confirm whether untagged messages can trigger the same actions.

**Change & support**

- Facilitator is allowed by default on Learn's page, and blocked if all apps are blocked for the organisation. Expect help-desk questions about why Facilitator replied to a message that did not tag it.
- Audit supports Facilitator AI-generated notes, moderation, and questions and answers for meetings. Learn points to a retention policy with the Teams chats option for Facilitator interactions in meetings.

## Cost and licensing

Learn says Facilitator is included with a Microsoft Copilot licence and subject to available capacity. The same page lists an eligible Microsoft 365 base licence, an eligible Microsoft Teams licence and a Microsoft Copilot licence as licensing requirements ([Set up Facilitator in Microsoft Teams](https://learn.microsoft.com/microsoftteams/facilitator-teams)).

A price, meter or licence specific to follow-up mode is not yet published. The indirect cost known today is admin time to review availability and brief users and compliance owners.

## Scope

**Users and licences:** Learn says only licensed users can initiate Facilitator today. Whether follow-up mode follows the same rule is not stated.

**Roles:** Learn says using the Teams admin center needs a Teams Administrator role.

**Clouds and platforms:** the record lists Worldwide (Standard Multi-Tenant) and Android, Desktop, iOS, Mac and Web.

**Prerequisites and limits documented for Facilitator today:** Learn lists Loop experiences in Teams for Facilitator in meetings as a user requirement, and says Facilitator is currently not supported in 1:1 chats, group chats, or external chats and meetings. Whether follow-up mode inherits those limits is not stated.

**Rollout:** the record gives a preview date of December CY2026 and a target of January CY2027.

## Governance guidance

### Before rollout

- Check who can use Facilitator now in Teams admin center > Teams apps > Built-in Teams agents (first controls row), and decide whether access should be everyone, specific users or groups, or no one.
- Ask Teams and compliance owners to confirm which retention policy covers Facilitator interactions in meetings, using the Teams chats option Learn names.
- Brief meeting organisers that Facilitator's responses are visible to everyone in the conversation, and that follow-up mode is planned but not yet described by Microsoft.

### At rollout

- Watch Message center and the roadmap item for the default state and any admin switch, because neither is stated yet.
- Pilot with a specific users or groups assignment before widening availability, if the preview reaches the tenant.
- Confirm the Loop experiences in Teams requirement that Learn lists for Facilitator in meetings is still met for pilot users.

### After rollout

- Search the unified audit log in Microsoft Purview for Facilitator interactions and check that the events you expect are recorded.
- Collect user reports of unexpected Facilitator replies and raise them with Microsoft, since no follow-up-specific control is documented.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Facilitator, and so follow-up mode</strong><br><small>Tenant</small><br><small class="controls__note">Learn says you can make an agent available to everyone, specific users or groups, or no one. It governs Facilitator as a whole, not follow-up mode.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Built-in Teams agents › agent › Edit availability <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Facilitator is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet page describes Teams apps generally and does not name Facilitator; its examples describe -IsBlocked $true as unblocking, so check the value. Differs from the Built-in Teams agents page.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A tenant-wide switch for follow-up mode itself</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no such control at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn's Teams admin center overview says built-in Teams agents such as Facilitator are managed from the Built-in Teams agents page, not the Manage apps page. The Facilitator setup page still describes Allow or Block on Manage apps. The two pages differ, so check which page lists Facilitator in your tenant. Both govern Facilitator as a whole, not follow-up mode.

Learn documents no switch specific to follow-up mode at the time of writing (November 2026), which is the third row. Changing app availability needs a Teams Administrator role or a higher-privilege role.

## Open questions

- Is follow-up mode on by default when it arrives, and does the roadmap's January CY2027 target apply to all tenants? Watch Message center and the roadmap item.
- Can an admin switch follow-up mode off separately from Facilitator itself? Watch the Facilitator setup page on Learn.
- How does Facilitator decide that an untagged message is meant for it, and does it read every message in the conversation? Watch the Facilitator setup page on Learn.
- Does follow-up mode work outside meeting chats, given Learn says Facilitator is not currently supported in 1:1 chats, group chats, or external chats and meetings?
- Will Purview's current gaps for Facilitator (data loss prevention, sensitivity labels) apply unchanged to follow-up interactions?

<!-- rationale
risk: Medium. Microsoft has not said how follow-up mode decides a message is meant for Facilitator, and Purview marks DLP and sensitivity labels as unsupported for Facilitator AI interactions today. Existing controls cover availability only.
cost: Low. Learn says Facilitator is included with a Microsoft Copilot licence, so the known cost is admin time; a price or meter specific to follow-up mode is not yet published.
impact: Medium. Licensed users who prompt Facilitator notice the change first, and Learn says everyone in the conversation sees Facilitator's responses to prompts today.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / applicability: The only documented levers are those that govern Facilitator as a whole. | Found: Manage users' access to Facilitator skills. Turn off AI-generated notes for meetings. You can manage this control using the IsCollabMeetingNotesFluidEnabled setting in PowerShell. | Fix: Replace 'so the only documented levers are those that govern Facilitator as a whole' with 'so the availability controls shown here govern Facilitator as a whole, not follow-up mode separately'. Microsoft also documents a control for the AI-generated-notes skill, not just the entire agent. | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The Facilitator setup page gives Teams admin center > Teams apps > Manage apps > app > Allow or Block. | Found: In the left rail navigation, select Teams apps > Manage apps. Select Facilitator from the app list. In the actions menu, select Allow or Block. | Fix: Expand the setup-page route to 'Teams apps > Manage apps > app > actions menu > Allow or Block'. Keep the existing explanation that manage-apps documents a different route for built-in agents. | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
- [supported, minor] controls[1].api; controls[1].note; Governance controls table / command: Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean> is a documented general MicrosoftTeams app-state call, with no Facilitator-specific mapping in its reference. | Found: This cmdlet updates app state and app available values for the Microsoft Teams app. -Id: Application ID of Microsoft Teams app. -IsBlocked: The state of the app in the tenant. Type: Boolean. | Fix: Replace the first sentence of controls[1].note with 'This is a general Teams app control; its reference does not confirm that it manages built-in Facilitator.' Preserve the warning about the conflicting Boolean examples and the different Built-in Teams agents page. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
- [contradicted, minor] rationale: risk / consistency: Existing controls cover availability only. | Found: Rationale: 'Existing controls cover availability only.' Risk assessment: 'Audit supports Facilitator AI-generated notes, moderation, and questions and answers for meetings. Learn points to a retention policy with the Teams chats option for Facilitator interactions in meetings.' | Fix: Remove the sentence 'Existing controls cover availability only.' from the risk rationale. It contradicts the verified auditing and retention controls described in the body.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks readers to check Facilitator retention coverage without a corresponding control row. | Found: 'Ask Teams and compliance owners to confirm which retention policy covers Facilitator interactions in meetings, using the Teams chats option Learn names.' The controls table has only availability, Allow or Block, and a follow-up-mode switch gap. | Fix: Remove the Before rollout retention-policy checklist bullet: it has no corresponding controls-table row. Leave the verified retention fact in Risk assessment.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks readers to search and check Facilitator auditing without a corresponding control row. | Found: 'Search the unified audit log in Microsoft Purview for Facilitator interactions and check that the events you expect are recorded.' The controls table contains no audit row. | Fix: Remove the After rollout audit-log checklist bullet: it has no corresponding controls-table row. Leave the verified audit-support fact in Risk assessment.
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist asks readers to confirm the Loop-experiences control without a corresponding control row. | Found: 'Confirm the Loop experiences in Teams requirement that Learn lists for Facilitator in meetings is still met for pilot users.' The controls table contains no Loop-experiences row. | Fix: Remove the At rollout Loop-experiences checklist bullet: it checks a control with no corresponding controls-table row. Leave the verified prerequisite in Scope.
- [supported, minor] Governance guidance: Before rollout / admin-path: Teams admin center > Teams apps > Built-in Teams agents is the page where readers check who can use Facilitator. | Found: Sign in to the Teams admin center and go to Teams apps > Built-in Teams agents. To change who can use an agent, select one or more agents and choose Edit availability. | Fix: Expand the first Before rollout bullet's path to 'Teams admin center > Teams apps > Built-in Teams agents > agent > Edit availability', matching the first controls row. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
-->
