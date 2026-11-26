---
title: "Microsoft Teams: open channels at your last read message on desktop and Mac"
slug: "microsoft-teams-pick-up-where-you-left-off-in-channels-on-desktop"
roadmapId: 579890
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams desktop and Mac users will be able to choose to open channels at their last read message instead of the newest one. Microsoft documents no admin setting for it; tell the service desk before the February CY2027 target."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Comes with a Teams licence: the Teams service description lists standard channels in every Teams plan, and Teams is licensed through qualifying Microsoft 365 offerings or a standalone SKU. Nothing specific to this feature is published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["teams","channels","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 579890"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579890"
    kind: "roadmap"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Overview of teams and channels in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-channels-overview"
    kind: "learn"
videos: []
related: ["microsoft-teams-personal-message-reminders-for-chat-and-channels"]
controls:
  - governs: "Admin switch for opening channels at the last read message"
    scope: "user"
    ui: null
    api: null
    note: "Microsoft Learn lists no messaging policy setting or Set-CsTeamsMessagingPolicy parameter for this option at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-20T01:24:53"
changes:
  - date: "2026-11-26"
    note: "New briefing: roadmap item in development for February CY2027; no admin setting or feature-specific licensing documented yet."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 31 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 31
  confirmed: 27
  unconfirmed: 4
  contradicted: 0
  attempts: 1
  hash: "b214e74daa3894d68980a520a9910d65"
---

## What's changing

Teams on desktop and Mac will let a user choose to open a channel at the last message they read, instead of at the most recent message. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

The roadmap item states that users can "Choose to open Teams channels at your last read message instead of the most recent message", so that they can catch up on a conversation without losing their place. The wording presents it as a choice for each user. Microsoft has not described where the choice appears in the client, which channel types it covers, or whether the reading position carries across devices.

The item is **In development**, with general availability targeted for **February CY2027**. It lists the Desktop and Mac platforms and the Worldwide (Standard Multi-Tenant) cloud. No Message center post has been supplied for it.

## Why it matters

For a service owner this is a support and communication change, not a governance one. The roadmap describes it as something users choose, so expect channel behaviour to change only for people who opt in. The likely support load is users who turned the option on and then report that a channel "opens in the wrong place", or users who expect the option on Teams on the web or mobile, which the roadmap item does not list.

If nobody acts, the roadmap's wording indicates that channels keep opening at the most recent message until a user chooses otherwise. Microsoft Learn documents no admin setting that turns the option on or off for users at the time of writing (November 2026).

## Risk assessment

**Data exposure**
- No change: the option changes where a channel opens, in channels the user can already read. It reaches no content the user could not already see.

**Security & identity**
- No change: the roadmap item describes no new permission, sign-in or identity behaviour.

**Autonomy & actions**
- No change: the feature acts on nothing; it only positions the view.

**Change & support**
- Users who opt in see channels open part-way up the conversation instead of at the newest message. Without a heads-up the service desk may treat this as a fault. Microsoft Learn documents no admin setting to turn it off for them (see the controls table), so the answer is in the user's own client.
- The roadmap item lists Desktop and Mac only, so users who move between the desktop client and Teams on the web or mobile may see channels open at different places.

## Cost and licensing

**Licence.** The feature belongs to Teams channels. The [Microsoft Teams service description](https://learn.microsoft.com/office365/servicedescriptions/teams-service-description) says Teams "can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU", and its feature table lists standard channels in Teams Business, Enterprise, GCC, GCC High, DoD and Education plans. Licensing specific to this feature is not yet published.

**Meter.** The roadmap item and the service description name no meter or charge for this feature.

**Indirect costs.** Service desk briefing and a line in user communications.

## Scope

- **Users:** Teams users on the desktop and Mac clients, as the roadmap item lists them. Teams on the web and mobile are not listed on the item.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists it. GCC, GCC High and DoD are not listed on the item.
- **Release phase:** General Availability, targeted for February CY2027; status In development.
- **Roles:** Microsoft documents no admin role or setting for this feature at the time of writing (November 2026).
- **Channel types:** Not yet documented whether the option covers standard, private and shared channels alike.

## Governance guidance

### Before rollout
- Brief the service desk that, from the February CY2027 target, desktop and Mac users may choose to open channels at their last read message, so a channel that opens part-way up the conversation is expected behaviour.
- Watch Message center for a post on roadmap item 579890 that states the default and any admin setting before the target month.

### At rollout
- Confirm on a test desktop client and a test Mac client where the choice appears and which position channels open at before anyone changes it.
- Add a short note to Teams what's-new communications telling users how to switch between last read and most recent message, once the user steps are published.

### After rollout
- Check the messaging policies list in the Teams admin center for a new setting covering where channels open, and add it to your Teams policy baseline if one appears.
- Update user guidance if Microsoft extends the option to Teams on the web or mobile, which the roadmap item does not list today.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin switch for opening channels at the last read message</strong><br><small>User</small><br><small class="controls__note">Microsoft Learn lists no messaging policy setting or Set-CsTeamsMessagingPolicy parameter for this option at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The roadmap item presents this as each user's choice. Messaging policies are the Teams admin center policies that "control what chat and channel messaging features are available to users in Teams", but the settings Microsoft Learn lists for them, and the parameters of `Set-CsTeamsMessagingPolicy`, include none for where a channel opens at the time of writing (November 2026). No admin role is needed for a control that is not documented; if Microsoft adds one, expect it to appear in Message center first.

## Open questions

- Will the option be off for each user until they choose it, or will Microsoft change the default for everyone? Watch Message center for a post on item 579890.
- Will Microsoft add a messaging policy setting, or another Teams admin center control, to set or lock the option for users?
- Does the option apply to private and shared channels and to channels using the threaded layout, as well as standard channels?
- Will the last read position carry across to Teams on the web and mobile, which the roadmap item does not list?
- Will the feature reach GCC, GCC High and DoD, which the roadmap item does not list?

<!-- rationale
risk: Low. The roadmap item describes a reading-position choice each user makes in channels they can already see; it reaches no new data and takes no action.
cost: Low. The only cost the sources show is service desk and communication time; licensing specific to this feature is not yet published, and standard channels come with every Teams plan.
impact: Low. Only desktop and Mac users who choose the option see channels open at a different place; nobody else notices a change.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters; rationale: impact / default: Channels keep opening at the most recent message until a user chooses otherwise, so only users who opt in notice a change. | Found: Searched: Microsoft Teams channels "last read" default newest messages permissions actions; Microsoft Teams "579890" default role licensing. Read roadmap and Teams settings reference; user choice is stated, but the initial selection and unchanged default are not. | Fix: Replace 'If nobody acts, the roadmap's wording indicates that channels keep opening at the most recent message until a user chooses otherwise' with 'The roadmap presents this as a user choice but does not state which opening position is selected on arrival.' Remove 'so expect channel behaviour to change only for people who opt in.' Replace the impact rationale with 'Low. The roadmap describes a user choice on Desktop and Mac; the opening position selected on arrival is not stated.'
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: This option reaches no content the user could not already see and introduces no new data access. | Found: Searched: Teams channels open last read message client setting private shared threaded across devices permissions; Microsoft Teams channels "last read" default newest messages permissions actions. Read channels overview and roadmap; no feature-specific data-access guarantee. | Fix: Replace the Data exposure bullet with 'The roadmap describes a reading-position choice; it does not describe new data access.' In the risk rationale, replace 'in channels they can already see; it reaches no new data and takes no action' with '; it does not describe new data access or other actions'.
- [unsupported, major] Risk assessment: Autonomy & actions; rationale: risk / behaviour: The feature acts on nothing and only positions the view. | Found: Searched: Microsoft Teams channels "last read" default newest messages permissions actions. Read roadmap, channels overview and messaging-policy references; they do not establish that view positioning is the feature's only action. | Fix: Replace the Autonomy & actions bullet with 'The roadmap describes choosing where a channel opens; it does not describe other actions.' Remove the absolute 'takes no action' assertion from the risk rationale, using the narrower replacement specified for Data exposure.
- [unsupported, blocker] Governance controls / role: No admin role is needed for this undocumented control. | Found: Searched: Microsoft Teams "579890" default role licensing; Teams channels last read message admin switch TeamsMessagingPolicy PowerShell Graph. Read role excerpts and messaging-policy references; no source states that no admin role is needed for this feature. | Fix: Remove 'No admin role is needed for a control that is not documented'. Retain the narrower Scope statement that Microsoft documents no admin role or setting for this feature at the time of writing.
-->
