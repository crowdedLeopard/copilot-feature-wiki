---
title: "Microsoft Teams: decline an incoming mobile call with a message"
slug: "microsoft-teams-decline-a-call-with-a-message-on-mobile"
roadmapId: 577176
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams mobile users on Android and iOS will be able to decline a Teams call and send a message to the caller in one step. Microsoft says no admin action is required; the main task is telling users and the help desk."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says all users licensed for Teams can make calls to other Teams users. No licence or charge specific to the decline-with-message option is yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","mobile","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577176"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577176"
    kind: "roadmap"
  - title: "MC1540349: Microsoft Teams: Decline incoming mobile calls with a message"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1540349"
    kind: "message-center"
  - title: "Calling policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    kind: "learn"
  - title: "Teams calling overview"
    url: "https://learn.microsoft.com/microsoftteams/cloud-voice-landing-page"
    kind: "learn"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-manage-call-groups-on-mobile","microsoft-teams-multi-line-call-history-tabs-in-the-calls-app"]
controls:
  - governs: "Whether users can make and receive Teams calls at all (nearest control; not specific to decline with a message)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Edit > Make private calls"
      docs: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -AllowPrivateCalling $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    note: "Per calling policy. Turning it off removes incoming calls for the users with that policy, so it also removes this option; it cannot turn off only the Message option."
  - governs: "Switch for the decline-with-message option on mobile"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item, based on Message Center post MC1540349 and Teams calling documentation."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the Teams admin center path to the Make private calls setting, which now includes the Edit step."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 54 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "873846c97273863db18cf1b6df303962"
---

## What's changing

Teams mobile users on Android and iOS will be able to decline an incoming Teams call and send a message to the caller in the same step. On the incoming call screen, a new **Message** option offers predefined responses or a **Custom** option, according to Microsoft's notice MC1540349.

Microsoft's notice gives the predefined responses "Can I call you later?", "I'm on my way." and "Sorry, I can't talk right now." Selecting one declines the call and immediately sends that message to the caller in Teams chat. Selecting **Custom** declines the call and opens the relevant Teams chat so the user can write their own reply. The notice says the existing options to accept or decline a call do not change.

The notice says the option applies to eligible Teams-to-Teams calls where the user has an associated Teams chat available. It says the capability does not apply to PSTN, anonymous or interoperability calls, because there is no corresponding Teams chat to receive the message.

The roadmap item 577176 lists the status as In development, with a target of December CY2026, General Availability, and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds. MC1540349, published 2026-11-05, says rollout begins in early December 2026 and is expected to complete by mid-December 2026 in all four clouds. Microsoft Learn has no page for this feature at the time of writing (November 2026), so its behaviour here is as Microsoft's notice and the roadmap describe it.

## Why it matters

No admin action is required before rollout, according to MC1540349, and the feature becomes available automatically to eligible users. Expect it to arrive on schedule whether or not anyone prepares, so the work is communication: users will see a new option on a screen they use many times a day, and the help desk will get questions about it.

The change also creates a new kind of Teams chat message: one sent as a side effect of declining a call. The notice's compliance section says the change gives users a new way to communicate and asks organisations to review it as appropriate. Decide now who owns that review, so that it does not start after users already rely on the feature.

## Risk assessment

**Data exposure**

- The message the user sends reaches the caller in Teams chat, and the notice says the response appears in that chat so the conversation can continue. Predefined texts such as "I'm on my way." tell the caller something about the user's situation, so brief users on what they are sending.
- Whether chat retention, eDiscovery or other compliance controls treat these messages differently from other chat messages is not described in the notice; see the open questions.

**Security & identity**

- The notice describes the message as sent by the user who declines. It does not describe any new identity or permission, and the wiki has no basis to describe one.
- Calls from PSTN, anonymous or interoperability callers are outside the feature, according to the notice, so those callers do not receive these messages.

**Autonomy & actions**

- The user starts every message. Selecting a predefined response declines the call and sends the message immediately, so a mistaken tap on the incoming call screen reaches the caller straight away.
- Nothing in the notice describes automatic or agent-driven replies.

**Change & support**

- Users will see a new **Message** option on the incoming call screen, and the notice recommends informing the help desk and users, particularly those who often take Teams calls on mobile.
- Expect questions about why the option does not appear for some calls: the notice says it needs an eligible Teams-to-Teams call with an associated Teams chat.

## Cost and licensing

Microsoft Learn's Teams calling overview says "All users licensed for Teams can make calls to other Teams users." The feature is described for Teams-to-Teams calls, so the licence that covers those calls is the one in play. Microsoft Learn's Teams calling overview also says native calls between Teams clients "include unlimited calling".

Neither the roadmap item nor MC1540349 names a licence or meter for the decline-with-message option, and a licence or charge specific to it is not yet published. The cost the sources show is indirect: admin time to brief the help desk and users, as the notice recommends.

## Scope

**Users and platforms.** Teams mobile users on Android and iOS, according to the roadmap item. The notice says users are affected when they receive eligible Teams-to-Teams calls and have an associated Teams chat available for the response.

**Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and MC1540349 gives the same four clouds in one rollout window.

**Rollout.** MC1540349 says rollout begins in early December 2026 and is expected to complete by mid-December 2026, and that the feature becomes available automatically as it rolls out to eligible users.

**Out of scope.** The notice says the capability does not apply to PSTN, anonymous or interoperability calls.

**Prerequisites.** The notice lists an associated Teams chat as a condition. No prerequisite beyond that is stated, and no admin role is named for this feature.

## Governance guidance

### Before rollout

- Tell the help desk about the new **Message** option and its limits (Teams-to-Teams calls with an associated chat only) before early December 2026, as MC1540349 recommends.
- Brief users who take many Teams calls on mobile, and tell them that selecting a predefined response declines the call and sends the message at once.
- Ask your compliance owner to review the notice's compliance section for these messages, and add any questions from the open questions list.

### At rollout

- Watch Message center and the roadmap item for changes to the rollout window, which MC1540349 gives as early to mid-December 2026.
- Check a pilot Android and iOS device for the **Message** option once the rollout reaches your tenant, using a Teams-to-Teams call.

### After rollout

- Collect help desk tickets about missing or unexpected **Message** options and compare them with the call types the notice excludes.
- Review the calling policy's **Make private calls** setting if you need to stop users receiving Teams calls at all; it is not a switch for this feature alone.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can make and receive Teams calls at all (nearest control; not specific to decline with a message)</strong><br><small>User</small><br><small class="controls__note">Per calling policy. Turning it off removes incoming calls for the users with that policy, so it also removes this option; it cannot turn off only the Message option.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Edit › Make private calls <a href="https://learn.microsoft.com/microsoftteams/teams-calling-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -AllowPrivateCalling $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for the decline-with-message option on mobile</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting for this feature specifically at the time of writing (November 2026), so there is no way to keep calling on and switch the Message option off that this wiki can point to. The calling policy setting below is the nearest documented control and works at the level of all Teams calling.

Microsoft Learn's Teams calling overview says that with **Make private calls** turned off, users with that policy cannot see the **Calls** app, cannot escalate chat conversations to audio calls and cannot receive incoming calls. Turning it off therefore removes the incoming call screen the new option sits on, along with every other calling capability for those users. The setting is per calling policy, so assign it to the users it should cover; the Teams calling policies page describes creating, editing and assigning them.

## Open questions

- Will Microsoft add a Teams admin center setting or calling policy parameter to switch the Message option off for some users? Watch the Teams calling policies page and the Message center post MC1540349.
- Are the messages sent from the call screen covered by the same chat retention, eDiscovery and communication compliance settings as other Teams chat messages? The notice asks for a compliance review but does not say.
- Can an administrator edit the predefined responses, or are they fixed? The notice lists three examples and does not say whether the list is complete or localised.
- Which clients show the option once rollout finishes: does it depend on a minimum Teams mobile app version? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. Users choose to send the message themselves, and Microsoft's notice says it goes to the caller in Teams chat; the exposure is a mistaken tap or a message the organisation did not expect.
cost: Low. Microsoft's notice and the roadmap item name no licence or meter for it; the cost is admin time to brief the help desk and users, as the notice recommends.
impact: Medium. Microsoft says the feature arrives automatically as a new Message option on the incoming call screen for eligible Teams mobile users, so many users may see it, but only on mobile.
-->
