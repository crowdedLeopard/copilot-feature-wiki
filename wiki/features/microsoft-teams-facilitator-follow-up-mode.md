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
      path: "Teams apps > Manage apps > app > actions menu > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "This is a general Teams app control; its reference does not confirm that it manages built-in Facilitator. Its examples describe -IsBlocked $true as unblocking, so check the value. Differs from the Built-in Teams agents page."
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
  - date: "2026-11-22"
    note: "Corrected after the independent check: availability controls now described as governing Facilitator as a whole, Allow or Block route and Update-M365TeamsApp note clarified, and checklist items without a controls row removed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4e5f6f6f61d2195b0bd4f9aab03c80c2"
---

## What's changing

The roadmap item describes Facilitator follow-up mode in Microsoft Teams as the ability to "chat naturally with Facilitator without tagging it each time". That sentence is all the record says about it. Microsoft Learn does not describe follow-up mode at the time of writing (November 2026), so what follows about behaviour is the roadmap's description only.

Today Learn documents that licensed users can interact with Facilitator by mentioning it in the chat, and that when a user prompts Facilitator, all users can view that communication and Facilitator's response in the meeting's conversation. Whether follow-up mode keeps that visibility, where it works (meeting chat, other chats, Teams Rooms) and how Facilitator decides that an untagged message is meant for it are not stated.

The record gives the status In development, a preview date of December CY2026 and a target date of January CY2027, with release phases General Availability and Preview. It lists Android, Desktop, iOS, Mac and Web, and the Worldwide (Standard Multi-Tenant) cloud. These are Microsoft's targets, not commitments.

## Why it matters

Follow-up mode removes the explicit mention that Learn describes today as one way to address Facilitator. For a service owner this changes what users expect from the agent in a conversation, and it may change how many messages Facilitator acts on. Microsoft has not said how.

Microsoft has not stated whether the mode is on when it arrives or whether it has its own admin switch, so the availability controls shown here govern Facilitator as a whole, not follow-up mode separately. If nobody acts, Microsoft has not stated what happens. Plan from the controls that exist today and watch Message center for the notice that settles the default.

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

- Check who can use Facilitator now in Teams admin center > Teams apps > Built-in Teams agents > agent > Edit availability (first controls row), and decide whether access should be everyone, specific users or groups, or no one.
- Brief meeting organisers that Facilitator's responses are visible to everyone in the conversation, and that follow-up mode is planned but not yet described by Microsoft.

### At rollout

- Watch Message center and the roadmap item for the default state and any admin switch, because neither is stated yet.
- Pilot with a specific users or groups assignment before widening availability, if the preview reaches the tenant.

### After rollout

- Collect user reports of unexpected Facilitator replies and raise them with Microsoft, since no follow-up-specific control is documented.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Facilitator, and so follow-up mode</strong><br><small>Tenant</small><br><small class="controls__note">Learn says you can make an agent available to everyone, specific users or groups, or no one. It governs Facilitator as a whole, not follow-up mode.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Built-in Teams agents › agent › Edit availability <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Facilitator is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">This is a general Teams app control; its reference does not confirm that it manages built-in Facilitator. Its examples describe -IsBlocked $true as unblocking, so check the value. Differs from the Built-in Teams agents page.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › actions menu › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
risk: Medium. Microsoft has not said how follow-up mode decides a message is meant for Facilitator, and Purview marks DLP and sensitivity labels as unsupported for Facilitator AI interactions today.
cost: Low. Learn says Facilitator is included with a Microsoft Copilot licence, so the known cost is admin time; a price or meter specific to follow-up mode is not yet published.
impact: Medium. Licensed users who prompt Facilitator notice the change first, and Learn says everyone in the conversation sees Facilitator's responses to prompts today.
-->
