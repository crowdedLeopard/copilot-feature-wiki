---
title: "Microsoft Teams: pin and organise resources in folders below the chat and channel header"
slug: "microsoft-teams-organize-important-resources-in-chats-and-channels"
roadmapId: 570646
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users can pin links, files and messages below the chat or channel header and group them into folders; the In this chat and In this channel panes are removed. No admin action is required; update training and tell users."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The Microsoft Teams service description lists Chat and Channels - Standard as available in Teams Business, Teams Enterprise, GCC, GCC High, DoD and Education plans. Nothing specific to this feature is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","channels","user-experience","adoption","gcc","gcc-high","dod"]
sources:
  - title: "MC1473153: (Updated) Microsoft Teams: New centralized experience for organizing important resources in chats and channels"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1473153"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap item 570646"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570646"
    kind: "roadmap"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "docs"
  - title: "Pin a message in a chat"
    url: "https://learn.microsoft.com/graph/api/chat-post-pinnedmessages?view=graph-rest-1.0"
    kind: "docs"
videos: []
related: ["microsoft-teams-improved-organization-for-muted-and-meeting-chats","microsoft-teams-personal-message-reminders-for-chat-and-channels","microsoft-teams-pick-up-where-you-left-off-in-channels-on-desktop"]
controls:
  - governs: "Whether users get the pinned resources and folders experience in chats and channels"
    scope: "tenant"
    ui: null
    api: null
    note: "Not in Teams messaging policies at the time of writing (November 2026). Graph POST /chats/{chat-Id}/pinnedMessages pins a chat message; it does not switch the experience."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-27"
    note: "New briefing: pinned resources and folders in Teams chats and channels, replacing the In this chat and In this channel panes, with the MC1473153 rollout schedule."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 46 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 44
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "e2128c9d1ab218955ecb46f0377d79fa"
---

## What's changing

Microsoft Teams is replacing the way users find important content in a conversation: users can pin links, files and messages directly beneath the chat or channel header and organise them into folders. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap item's and Microsoft's notice MC1473153's description.

According to MC1473153, users can pin several messages alongside other resources, and on Teams mobile they reach shared resources and folders by tapping the chat or channel header. The **In this chat** and **In this channel** panes are removed, and the resources in them are reached and managed through the new experience. The roadmap item states that existing pinned messages remain available in the new experience, alongside other shared resources, on Teams desktop and web. The notice states that no administrative action is required.

The roadmap item is **Rolling out**, with a target of October CY2026, for General Availability and Targeted Release. MC1473153 (last updated 19 October 2026) gives a later schedule: Targeted Release (Worldwide) from late September 2026, expected to complete by early October 2026; General Availability (Worldwide, GCC, GCC High and DoD) from early November 2026 (previously early October), expected to complete by mid-November 2026 (previously mid-October). The notice sets no act-by date.

## Why it matters

This is a redesign of something every chat and channel user already has, so the main consequence is support load rather than exposure. Users who are used to the **In this chat** and **In this channel** panes will find them gone, and internal guides, screenshots and helpdesk scripts that point to those panes go out of date as the rollout reaches each user.

If nobody acts, the experience arrives anyway: MC1473153 asks for no admin action, and Microsoft documents no setting to hold it back. Expect questions from people looking for files and links they used to find in the old panes, and from mobile users, whose way in is now the chat or channel header.

## Risk assessment

**Data exposure**
- Pinned items are links, files and messages from the conversation itself, so the feature surfaces existing content rather than reaching new data. Microsoft has not said whether pinning a file changes who can open it; confirm in a test chat before advising users who pin files in chats with external participants.

**Security & identity**
- No change: the roadmap and MC1473153 describe no new sign-in, permission or app.

**Autonomy & actions**
- No change: pinning and creating folders are actions users take themselves; nothing acts on its own.

**Change & support**
- The removal of the **In this chat** and **In this channel** panes changes where users look for shared resources on every platform, and Microsoft documents no setting to defer it. MC1473153 recommends informing users and updating internal training or support documentation that references those panes.

## Cost and licensing

The [Microsoft Teams service description](https://learn.microsoft.com/office365/servicedescriptions/teams-service-description) lists **Chat** and **Channels - Standard** as available in Teams Business plans, Teams Enterprise plans, GCC, GCC High, DoD and Education. Pinning and folders sit inside those chats and channels. Microsoft has published no licence, meter or charge specific to this feature at the time of writing (November 2026).

The indirect cost is admin and adoption time: rewriting guidance that refers to the removed panes and answering helpdesk questions while users adjust.

## Scope

- **Users:** MC1473153 names users who access or manage resources in Teams chats and channels.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD; MC1473153 gives Targeted Release for Worldwide and General Availability for Worldwide, GCC, GCC High and DoD.
- **Platforms:** the roadmap item lists Android, Desktop, iOS, Mac and Web. MC1473153 describes the mobile way in (tapping the chat or channel header); the roadmap says existing pinned messages remain available on Teams desktop and web.
- **Rollout:** Targeted Release first, then General Availability, on the schedule in What's changing.
- **Prerequisites and admin roles:** none stated; MC1473153 says no administrative action is required.

## Governance guidance

### Before rollout
- Update internal training, quick guides and screenshots that reference the **In this chat** and **In this channel** panes, as MC1473153 recommends.
- Tell users that important links, files and messages now sit beneath the chat or channel header, can be grouped into folders, and on mobile are reached by tapping the header.
- Brief the helpdesk that content from the removed panes is reached through the new resources experience, not lost.

### At rollout
- Check in a Targeted Release chat and channel that existing pinned messages appear in the new experience, as the roadmap item states.
- Pin a test file in a chat that includes an external participant and confirm whether its sharing permissions change, before giving users guidance on pinning files.

### After rollout
- Watch MC1473153 for the documentation Microsoft says it will add, and recheck it for any admin setting or compliance note.
- Track helpdesk tickets about missing panes or pinned items and feed recurring questions back into user guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users get the pinned resources and folders experience in chats and channels</strong><br><small>Tenant</small><br><small class="controls__note">Not in Teams messaging policies at the time of writing (November 2026). Graph POST /chats/{chat-Id}/pinnedMessages pins a chat message; it does not switch the experience.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft documents no admin control for this experience at the time of writing (November 2026): the Teams messaging policy settings and the `Set-CsTeamsMessagingPolicy` parameters include nothing about pinning, folders or the resources experience. Microsoft Graph documents an operation to pin a message in a chat (`POST /chats/{chat-Id}/pinnedMessages`, delegated permission ChatMessage.Send at least), which pins a message rather than switching the experience on or off; Microsoft has not said whether it covers links, files or folders in the new experience.

## Open questions

- Can every participant in a chat or channel see, add, remove and reorganise pinned resources and folders, or only some roles such as channel owners? Watch MC1473153 and the Teams documentation it will link.
- Does pinning a file change its sharing permissions, particularly in chats with external or guest participants?
- Are pins and folders retained and discoverable for retention and eDiscovery purposes, given that MC1473153 identifies no compliance considerations?
- Will Microsoft add a messaging policy setting to restrict pinning or folders, and will Microsoft Graph cover pinned links, files and folders as well as messages?

<!-- rationale
risk: Low. Users pin links, files and messages already shared in the conversation, and Microsoft's notice MC1473153 identifies no compliance considerations and asks for no admin action.
cost: Low. Microsoft publishes no licence specific to this feature; Chat and Channels are listed across Teams plans, and the known cost is updating training and support material.
impact: High. Every Teams user who works in chats and channels sees the change, because the In this chat and In this channel panes are removed and their resources move to the new experience.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: Pinned resources are necessarily content already shared in the conversation, so the feature reaches no new data. | Found: Searched: Teams pinned resources data; Teams pin file permissions header. Read roadmap, MC1473153, Graph pin-message reference and SharePoint/Teams integration excerpts; none restricts every new resource pin to previously shared content or establishes unchanged data access. | Fix: Replace the first Data exposure sentence with 'MC1473153 says existing resources from the removed panes remain accessible through the updated experience.' Replace the risk rationale with 'Low. MC1473153 describes a resource-management redesign, identifies no compliance considerations and asks for no admin action.'
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Nothing in the feature acts on its own. | Found: Searched: Teams pin folders automatically; Teams pinned resources data. Read roadmap, MC1473153 and Graph pin-message reference. They describe user pinning and organisation but do not establish the blanket absence of autonomous actions. | Fix: Replace the Autonomy & actions bullet with 'The roadmap and MC1473153 describe users pinning resources and organising them into folders; they describe no autonomous actions.'
-->
