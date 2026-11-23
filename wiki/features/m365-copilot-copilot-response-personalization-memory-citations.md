---
title: "Microsoft 365 Copilot Chat: memory citations show which memories shaped a response"
slug: "m365-copilot-copilot-response-personalization-memory-citations"
roadmapId: 574111
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat now shows users which custom instructions, memories and past chats personalised a response. It is on for users who have memory on, needs no admin action and has no setting of its own."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1530959 says a Microsoft 365 Copilot (Premium) licence is required. A Learn page on memory says memory is available to Copilot Chat users with and without a Copilot licence. No price for citations is published."
audiences: ["m365-admin","compliance","end-user","change-adoption"]
tags: ["copilot-chat","m365-copilot","memory","personalisation","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 574111"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574111"
    kind: "roadmap"
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update"
    kind: "learn"
  - title: "MC1530959: Microsoft 365 Copilot Chat: View memory sources used to personalize responses"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1530959"
    kind: "message-center"
videos: []
related: ["microsoft-purview-data-lifecycle-management-retention-for-copilot-memory","m365-copilot-copilot-workspaces-updated-workspace-memory","ediscovery","planner-planner-agent-in-copilot-v2-improvements"]
controls:
  - governs: "Whether Copilot memory is on for the tenant or off for an Entra group (Enhanced personalization)"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update"
    note: "Request body sets isEnabledInOrganization and, optionally, disabledForGroup (an Entra group ID). Beta API. Notice MC1530959 names Global Administrator and People Administrator."
  - governs: "Separate switch for memory citations"
    scope: "tenant"
    ui: null
    api: null
    note: "Notice MC1530959 says there is no separate setting for citations; they do not appear for users with memory off."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-14T23:01:02"
changes:
  - date: "2026-11-23"
    note: "New briefing: Copilot Chat memory citations, on for users with memory on, controlled only through the existing Enhanced personalization setting."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "93e3424d66995d5529d3f89042ccc3db"
---

## What's changing

When Copilot Chat uses memory to personalise a response, users can now see what informed the answer. Under the response they select Sources, then open the Personalization tab to see the custom instructions, saved memories, memories learned from conversations and past chats that shaped it. Users can return to a cited chat, or review and delete a cited saved memory.

Microsoft's notice MC1530959 adds that past chats used in a response also appear as inline citations, and that a user can open a cited saved memory in Copilot settings to review or delete it. Citations appear only when memory meaningfully shaped the response, so some personalised responses carry none. Citations respect each user's memory settings: if a user has turned off saved memories or chat history, those sources are not shown.

The notice states that the update does not change what Copilot remembers, how memory is stored or existing admin controls, and that the feature is on by default for users who have memory turned on. The roadmap item is Launched with a target of October CY2026, for Web, in Worldwide (Standard Multi-Tenant) only, at General Availability. The notice, published 2026-10-29, gives a rollout beginning in late October 2026 and expected to complete in late October 2026, and sets no act-by date.

A Learn page on Copilot personalization and memory is marked as preview and does not describe memory citations. The roadmap record and the notice describe general availability; this briefing follows them for status and treats the Learn page as background on memory.

## Why it matters

The change makes memory visible to the people it affects. Users can see which saved memories, learned memories and past chats shaped an answer and delete a saved memory from the citation, so expect questions to the service desk about what Copilot has remembered and why.

If nobody acts, the notice says citations roll out automatically for users who have memory on. The one tenant-level lever is the existing Enhanced personalization control: turning it off for the tenant or an Entra group means those users no longer see memory-based personalisation, and so no citations. Decide whether the current memory setting is what you want before users start looking at it.

## Risk assessment

**Data exposure**

- The Personalization tab lists the user's own memories and past chats. Memories are stored in the user's Exchange mailbox in a hidden folder and follow the same security and compliance policies as other mailbox data, per Learn. Microsoft's notice says the update does not change how memory is stored.
- A citation can make remembered details visible on screen, for example in a shared screen or recording. Treat that as a point for user guidance; Microsoft documents no setting for it.

**Security & identity**

- Citations respect each user's memory settings, per the notice. Users with saved memories or chat history turned off do not see those sources.
- Learn says admins can search users' memory with Microsoft Purview eDiscovery or Content Search, and that Purview retention policies and labels do not apply to Copilot memory. This is existing behaviour, not a change from this feature.

**Autonomy & actions**

- No change: the notice says the feature only shows which existing memories were used. Users can open a cited saved memory to review or delete it, which changes what Copilot can use in later answers.

**Change & support**

- Users will see new Sources and Personalization views and may ask why a memory exists. Learn says memory and personalisation actions do not generate audit log entries in Purview, and that admins cannot restrict what type of information is added to memory.
- The notice says there is no separate setting for citations, so an admin cannot hide them while leaving memory on.

## Cost and licensing

Microsoft's notice MC1530959 states that a Microsoft 365 Copilot (Premium) licence is required. The Learn page "Manage Copilot personalization and memory" says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. Both are reported as written; the briefing cannot tell which applies to memory citations for a user without a Copilot licence.

No meter, credit rate or separate price for citations is published at the time of writing (November 2026); the Learn memory page and the notice name none. The remaining cost is communication and service desk time.

## Scope

- **Users:** users of Microsoft 365 Copilot Chat who have memory turned on, per the notice. Users whose memory is off do not see citations.
- **Rollout:** beginning in late October 2026 and expected to complete in late October 2026, per the notice.
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web only.
- **Admin roles:** the notice says Global Administrators and People Administrators can manage the Enhanced personalization control.
- **Prerequisite:** the Enhanced personalization control must be on for memory to be used; Learn says it is on by default.

## Governance guidance

### Before rollout

- Confirm with your Global Administrator or People Administrator whether memory (the Enhanced personalization control, row 1 of the table) should stay on for the whole tenant or be turned off for an Entra group.
- Brief the service desk that Sources > Personalization shows memories and past chats, and that users can delete saved memories from there.
- Tell compliance owners that Purview retention does not apply to Copilot memory and that memory actions are not audited in Purview, per Learn.

### At rollout

- Send users a short note on where to find Sources and the Personalization tab and how to delete a cited saved memory.
- Warn users that citations can show remembered details when they share a screen.

### After rollout

- Collect service desk questions about unexpected memories and decide whether a group should have Enhanced personalization turned off.
- Watch the Message center and the Learn page "Manage Copilot personalization and memory" for documentation of citations and any change in licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot memory is on for the tenant or off for an Entra group (Enhanced personalization)</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets isEnabledInOrganization and, optionally, disabledForGroup (an Entra group ID). Beta API. Notice MC1530959 names Global Administrator and People Administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for memory citations</strong><br><small>Tenant</small><br><small class="controls__note">Notice MC1530959 says there is no separate setting for citations; they do not appear for users with memory off.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only tenant control Microsoft documents for this area is the Enhanced personalization control. Per Learn, turning it off means Copilot stops applying saved memories and custom instructions without removing them, and chat history details are deleted after 30 days. Users with the control off see the Custom instructions, Saved memories and Chat history controls in Settings > Personalization as off and cannot turn them on.

The notice says Global Administrators and People Administrators can manage the control. The Graph update reference names People Administrator as the least privileged role and PeopleSettings.ReadWrite.All as the permission, and marks the API as beta. Users also have their own Settings > Personalization controls; the Learn page describes them as end-user controls.

## Open questions

- Which licence does a user need to see memory citations: the Microsoft 365 Copilot (Premium) licence in the notice, or any Copilot Chat access as the Learn memory page says? Watch the Learn page and the Message center.
- Will Microsoft add a tenant setting for citations, or an Enhanced personalization path in an admin centre? Microsoft Learn documents the Graph API only at the time of writing (November 2026).
- When will Microsoft Learn describe memory citations and the Personalization tab, and when does the Learn memory page leave preview?
- Are cited memories or opened citations recorded anywhere an admin can see? Learn says memory and personalisation actions do not generate Purview audit entries.

<!-- rationale
risk: Low. The change only shows users which existing memories were used; Microsoft's notice says it does not change what Copilot remembers, how memory is stored or existing admin controls.
cost: Low. Microsoft's notice says a Microsoft 365 Copilot (Premium) licence is required; no separate meter or charge for citations is published, so the known cost is admin and communication time.
impact: Medium. Users who have memory on see a new Sources and Personalization view and can open or delete cited memories; users with memory off see nothing.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is per-user. | Found: After you purchase licenses, assign the licenses to users in the Microsoft 365 admin center. | Fix: Add https://learn.microsoft.com/copilot/plan/copilot-license-options to sources to support the per-user licensing model; retain the notice's Microsoft 365 Copilot (Premium) requirement. | Source: https://learn.microsoft.com/copilot/plan/copilot-license-options
- [supported, minor] Risk assessment: Security & identity / applicability: Admins can search users' memory through Microsoft Purview eDiscovery or Content Search. | Found: Admins can search their users' memory in Microsoft Copilot via Microsoft Purview eDiscovery or Content Search. Custom instructions aren't yet discoverable in these solutions. | Fix: Append to the eDiscovery sentence: 'Custom instructions are not yet discoverable in these solutions.' The cited Learn page supports this qualification; retain the existing statement about searching memory. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
- [supported, minor] Governance controls / role: The Graph update reference names People Administrator as its least privileged role. | Found: For delegated access using work or school accounts, the admin must be assigned a supported Microsoft Entra role. People Administrator is the least privileged role supported for this operation. | Fix: Replace the role clause with 'For delegated access using work or school accounts, the Graph update reference names People Administrator as the least privileged role.' Retain PeopleSettings.ReadWrite.All and the beta qualification. | Source: https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update
-->
