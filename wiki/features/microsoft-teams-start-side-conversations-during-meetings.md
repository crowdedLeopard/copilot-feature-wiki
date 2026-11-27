---
title: "Microsoft Teams: start side conversations from the meeting chat"
slug: "microsoft-teams-start-side-conversations-during-meetings"
roadmapId: 573156
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams plans to let meeting participants start one-to-one or small-group chats from the meeting chat. Microsoft's notice says no admin action is required and names no new admin policy, so the work is user communication."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item, Microsoft's notice MC1523090 nor the Teams add-on licensing page names a licence or meter for side conversations."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","meeting-policy","user-experience","mobile","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Start side conversations during meetings"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573156"
    kind: "roadmap"
  - title: "MC1523090: (Updated) Microsoft Teams: Initiate side conversations within the meeting chat window"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1523090"
    kind: "message-center"
  - title: "Manage chat in Microsoft Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    kind: "learn"
  - title: "Microsoft Teams add-on licenses"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/microsoft-teams-add-on-licensing"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-improved-organization-for-muted-and-meeting-chats"]
controls:
  - governs: "Whether meeting participants can read and send meeting chat (nearest existing control)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting engagement > Meeting chat"
      docs: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -MeetingChatEnabledType Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/manage-meeting-chat"
    note: "Governs meeting chat; Learn does not say whether it covers side conversations. Per-user and per-organiser policy; not applied to channel meetings. Off also removes ordinary meeting chat."
  - governs: "Tenant switch for side conversations"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1523090 says the feature introduces no admin policy and that users can turn off the side-chat tab experience."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: covers Microsoft's notice MC1523090, the nearest meeting chat controls, and the licensing and policy questions Microsoft has not yet answered."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 44 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 50
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "f6de3a5aa8768c798b58d04c9ef6376c"
---

## What's changing

Microsoft Teams plans to let meeting participants start and continue one-to-one or small-group conversations directly from the meeting chat, without leaving the meeting. The roadmap item describes this as a way to ask questions, coordinate next steps, share information and collaborate in parallel while the main discussion carries on.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap item's and Microsoft's notice MC1523090 (Stay informed, updated 29 October 2026). The notice says users will be able to start or continue private 1:1 and group chats from the meeting chat experience, that existing chat history is preserved, and that the conversations remain part of the user's regular Teams chat history. It also says users can turn off the side-chat tab experience if they prefer not to use it.

The notice states that the feature does not introduce a new chat surface, admin policy or meeting option, and that no admin action is required. Its rollout schedule is General Availability for Worldwide, GCC, GCC High and DoD, beginning in early December 2026 (previously early January 2027) and expected to complete in mid-January 2027 (previously late January).

The roadmap item is In development, with a target of December CY2026, release phases General Availability and Targeted Release, and platforms Android, Desktop, iOS, Mac and Web. These dates are Microsoft's targets, not commitments.

## Why it matters

This is a user-facing change that reaches people without an administrator turning anything on, so the practical work is communication and support readiness rather than configuration. Microsoft's notice names no admin policy for it, which means the controls you already have for meeting chat are the nearest levers, and Microsoft Learn does not say whether they cover side conversations.

If nobody acts, the notice indicates users will get the capability from early December 2026 on Microsoft's schedule. Expect questions about where side conversations appear, who can see them, and whether they count as meeting chat or as ordinary chats for retention and discovery purposes.

## Risk assessment

**Data exposure**

- Microsoft's notice says side conversations remain part of the user's regular Teams chat history and identifies no compliance considerations. Confirm that your retention, DLP and eDiscovery settings for Teams chats already cover ordinary 1:1 and group chats, since that is where the notice says these conversations sit.

**Security & identity**

- The notice describes no new permissions, admin policy or chat surface. Whether external, guest or anonymous meeting participants can be included in side conversations is not stated in the sources; see Open questions.

**Autonomy & actions**

- No change described: the notice and the roadmap item describe conversations that users start and continue themselves.

**Change & support**

- Participants can hold private chats during a meeting, which changes what a meeting looks like to the organiser. Brief meeting-heavy teams and the service desk before early December 2026.
- The notice says users can turn off the side-chat tab experience. It documents no tenant-level switch, so user guidance is the main lever.

## Cost and licensing

The licence a user needs for side conversations is not yet published. The roadmap item and Microsoft's notice MC1523090 name no licence, and the Microsoft Teams add-on licenses page lists no add-on for this feature.

No meter, credit rate or storage charge is documented for it at the time of writing (November 2026). The only cost the sources show is indirect: communication and support time. Watch Message center and the Learn pages on meeting chat for any licensing statement.

## Scope

**Users.** Meeting participants, per the notice. The sources name no licence or role requirement.

**Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the notice gives General Availability for all four.

**Platforms.** The roadmap record lists Android, Desktop, iOS, Mac and Web.

**Rollout.** Microsoft's notice gives early December 2026 to mid-January 2027. The roadmap item lists General Availability and Targeted Release as release phases. Microsoft Learn names no prerequisites for the feature.

## Governance guidance

### Before rollout

- Tell meeting organisers and the service desk what is coming, using the wording of Microsoft's notice MC1523090: private 1:1 and group chats started from the meeting chat, kept in regular chat history.
- Check which meeting policy assignments use the **Meeting chat** setting, and note that Microsoft Learn does not say whether it governs side conversations.
- Confirm with your compliance team that retention, DLP and eDiscovery settings for Teams chats cover ordinary chats, since the notice says these conversations remain in regular chat history.

### At rollout

- Pilot the feature with a small group once it appears for your tenant, and note which platforms show it.
- Test whether a meeting policy with **Meeting chat** set to a restricted value changes what pilot users see, and record the result.
- Tell users that they can turn off the side-chat tab experience, as the notice describes.

### After rollout

- Collect service desk questions in the first weeks and update user guidance.
- Re-read the Learn page on meeting chat and Message center for any admin control added after the notice.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether meeting participants can read and send meeting chat (nearest existing control)</strong><br><small>User</small><br><small class="controls__note">Governs meeting chat; Learn does not say whether it covers side conversations. Per-user and per-organiser policy; not applied to channel meetings. Off also removes ordinary meeting chat.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting engagement › Meeting chat <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -MeetingChatEnabledType Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-chat" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for side conversations</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1523090 says the feature introduces no admin policy and that users can turn off the side-chat tab experience.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice says the feature introduces no new admin policy, so the first row records that no dedicated tenant switch is documented. The **Meeting chat** meeting policy setting is the nearest existing control: Learn describes it as controlling whether participants in meetings can read and send chat messages, as a per-user and per-organiser policy that does not apply to channel meetings. Learn does not say whether it governs side conversations, so test it before relying on it.

Setting **Meeting chat** to **Off** turns meeting chat off for all participants and organisers cannot override it, so it also removes ordinary meeting chat. Changing the policy needs a role that can edit Teams meeting policies; the sources read do not name one.

## Open questions

- Does the **Meeting chat** meeting policy, including its **In-meeting only** values, apply to side conversations started from the meeting chat? Watch the Learn page on managing meeting chat.
- Which licence, if any, does the feature need, and will it differ by plan or cloud? Watch the Teams licensing pages and Message center.
- Can external, guest or anonymous participants take part in side conversations, and does **Chat in external meetings** apply?
- How will side conversations appear in retention, eDiscovery and audit results compared with ordinary chats? Watch Message center post MC1523090 for updates.

<!-- rationale
risk: Low. Microsoft's notice says the feature adds no new chat surface, admin policy or meeting option, and that the conversations stay in users' regular Teams chat history.
cost: Low. The only cost the sources show is admin and communication time; no licence or meter for this feature is yet published.
impact: Medium. Meeting participants will see a new way to start private chats from inside a meeting, and Microsoft plans to roll it out to Worldwide, GCC, GCC High and DoD from early December 2026.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing; Cost and licensing; Scope; Open questions; rationale: cost / licensing: The licensing model is unknown because a licence specific to side conversations is not published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to included and cite https://learn.microsoft.com/microsoftteams/user-access. Replace the notes and opening licensing sentence with: 'Manage Teams licenses states that, except for joining Teams meetings anonymously, each user in the organisation must have a Teams license before using Teams. No requirement specific to side conversations is published.' In Scope, state that same general requirement. Narrow the licensing open question to 'Will Microsoft publish any additional requirement specific to side conversations?' In the cost rationale, replace 'no licence or meter for this feature is yet published' with 'no additional licensing requirement or meter specific to side conversations is published'. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [supported, minor] controls[0].api; rendered Governance controls table / command: Set-CsTeamsMeetingPolicy -Identity <policy name> -MeetingChatEnabledType Disabled turns off meeting chat for users assigned the policy. | Found: To turn off meeting chat for users with this assigned policy, run the following command: Set-CsTeamsMeetingPolicy -Identity <policy name> -MeetingChatEnabledType Disabled | Fix: Keep the call supported by the meeting-chat guide. Add to controls[0].note: 'The cmdlet reference additionally says that setting MeetingChatEnabledType to Disabled requires LobbyChat to be Disabled during a feature rollout; the meeting-chat guide omits that qualification.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps, which states: 'Due to a new feature rollout, in order to set the value of MeetingChatEnabledType to Disabled, you will need to also set the value of LobbyChat to disabled.' | Source: https://learn.microsoft.com/microsoftteams/manage-meeting-chat
- [supported, minor] Governance controls / role: Changing meeting policies requires an administrator role permitted to edit them. | Found: Teams Communications Administrator | Manage calling and meetings features within the Teams service. | Manage meetings, including meeting policies, configurations, and conference bridges. | Fix: Cite https://learn.microsoft.com/microsoftteams/using-admin-roles for the sentence about a role that can edit Teams meeting policies. Keep its general wording; this source documents Teams Administrator and Teams Communications Administrator access to meeting policies. | Source: https://learn.microsoft.com/microsoftteams/using-admin-roles
- [contradicted, minor] Governance guidance: Before rollout; Risk assessment: Data exposure / consistency: The checklist asks readers to check retention, DLP and eDiscovery settings, but those controls have no table rows. | Found: Confirm with your compliance team that retention, DLP and eDiscovery settings for Teams chats cover ordinary chats; table rows: Whether meeting participants can read and send meeting chat; Tenant switch for side conversations. | Fix: Remove the Before rollout bullet asking readers to confirm retention, DLP and eDiscovery settings, since those controls have no rows. Do not add unverified rows.
- [contradicted, minor] Governance controls / consistency: The governance prose calls the no-dedicated-switch entry the first row, although it is the second row. | Found: the first row records that no dedicated tenant switch is documented; first row: Whether meeting participants can read and send meeting chat; second row: Tenant switch for side conversations. | Fix: Replace 'the first row records that no dedicated tenant switch is documented' with 'the second row records that no dedicated tenant switch is documented'.
-->
