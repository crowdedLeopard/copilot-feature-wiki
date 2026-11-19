---
title: "Microsoft Teams: manage call groups from Teams on Mobile"
slug: "microsoft-teams-manage-call-groups-on-mobile"
roadmapId: 578860
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Users with a Teams Phone licence will be able to create and edit their call group, and forward or ring calls to it, from Teams on Android and iOS. No admin action is required; the calling policy that allows call groups still applies."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
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
  notes: "Microsoft's notice MC1552390 says the feature is available to users with a Teams Phone licence. The Learn page on call groups says users must be assigned a Teams Phone licence to set up and use them. The notice names no other licence or meter."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-phone","mobile","policy","powershell","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 578860"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578860"
    kind: "roadmap"
  - title: "MC1552390: Microsoft Teams: Manage call groups on Mobile"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1552390"
    kind: "message-center"
  - title: "Call sharing and group call pickup"
    url: "https://learn.microsoft.com/microsoftteams/call-sharing-and-group-call-pickup"
    kind: "learn"
  - title: "Calling policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Grant-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamscallingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Set-CsUserCallingSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings?view=teams-ps"
    kind: "learn"
  - title: "Configure call forwarding and delegation settings"
    url: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    kind: "learn"
  - title: "Routing inbound calls"
    url: "https://learn.microsoft.com/microsoftteams/inbound-call-routing"
    kind: "learn"
videos: []
related: ["microsoft-teams-enhanced-delegated-calling-with-delegate-call-access-restrictions-and-join","microsoft-teams-multi-line-call-history-tabs-in-the-calls-app"]
controls:
  - governs: "Whether users can use call groups and route inbound calls to them"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Edit > Inbound calls can be routed to call groups"
      docs: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -AllowCallGroups $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    note: "MC1552390 says users with call groups turned off in their calling policy cannot use the feature on Mobile. Assign the policy to users or groups."
  - governs: "A user's call group members and ring order (today's admin-side route)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Users > Manage users > user > Voice > Call answering rules > Ring user's devices > Also allow > Group call pickup > Manage call group"
      docs: "https://learn.microsoft.com/microsoftteams/call-sharing-and-group-call-pickup"
    api:
      kind: "powershell"
      call: "Set-CsUserCallingSettings -Identity <user principal name> -CallGroupOrder InOrder -CallGroupTargets <array of sip addresses>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings?view=teams-ps"
    note: "Edits one user's call group. It does not turn the Mobile screen on or off. CallGroupTargets overwrites the current membership with the full set given."
  - governs: "A separate switch for call group management on Teams on Mobile"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1552390 says Mobile uses the same controls as desktop."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "New briefing: call group management on Teams on Mobile, rolling out from early December 2026 per MC1552390, governed by the existing calling policy."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the two Teams admin center paths to the full routes Learn documents, and removed the claim that the Manage call group screen is hidden for ineligible users."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 54
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "95ff4cf5d51bd351e53475dbe42fdc52"
---

## What's changing

Teams on Mobile (Android and iOS) will let users create and manage their own call group without going to the desktop. The roadmap item and Microsoft's notice MC1552390 say users can add or remove members, choose how the group rings, and forward incoming calls to the group or ring it at the same time as their own devices.

According to MC1552390, users open Settings, then Calling, and select **Manage call group** to see their current group or create one. The notice lists these actions: view the group and its members, create a group, add or remove members, choose **Everyone at once** or **In the order below**, reorder members, and forward calls to the group or have the group ring alongside their own devices. It says changes made on Mobile apply to the same call group settings users manage on desktop, and that Mobile does not introduce a separate call group.

The roadmap record gives the status as In development, with a target of December CY2026, for General Availability in Worldwide (Standard Multi-Tenant) on Android and iOS. MC1552390 (published 2026-11-13) says rollout begins in early December 2026 and is expected to finish by mid December 2026, and sets no act-by date. The Learn page on call groups describes the desktop and admin-centre experience only; it has no mobile-specific steps at the time of writing (November 2026), so what follows about mobile behaviour is the roadmap's and the notice's description.

## Why it matters

Call groups let colleagues answer calls on a user's behalf, and the notice says changing one today means going to the desktop. Once this arrives, call routing can be changed from a phone at any moment, so expect group membership and ring order to change more often and with less notice to the colleagues involved.

The notice says no admin action is required before rollout and that the feature uses the existing calling policy. If nobody acts, eligible users simply see the new screen from early to mid December 2026. The practical work is to confirm that the right users have call groups allowed and a Teams Phone licence, and to warn people who depend on call groups for backup cover.

## Risk assessment

**Data exposure**
- Call groups share incoming calls with colleagues so that they can answer them while the user is unavailable (Learn, call sharing and group call pickup). A wrong or stale member added from a phone receives those calls, so the exposure is the member list itself. Review who users add by checking a user's call group in the Teams admin center.

**Security & identity**
- No new identity or permission is described. The notice says the feature uses the existing calling policy that controls call groups, and that users with call groups turned off in their calling policy cannot use it on Mobile.

**Autonomy & actions**
- Forwarding to the call group can be set from the phone. Learn describes the **Be immediately forwarded** option as one where calls to the user don't ring their devices, so a user who forwards to a group by mistake stops their own devices ringing until they change it back.
- Setting a user's call group through PowerShell overwrites the current membership with the full set of members given, so a scripted change and a phone edit can replace each other.

**Change & support**
- Expect help desk questions about where **Manage call group** is. The feature requires a Teams Phone licence; users with call groups turned off in their calling policy cannot use it on Mobile.
- Learn says a call group can have up to 25 users, a user can own only one call group, and adding more than five members switches the ring order to **Everyone at once**. Whether the Mobile ordering options follow the five-member rule is not described.

## Cost and licensing

Microsoft's notice MC1552390 says the feature is available to users with a Teams Phone licence. The Learn page *Call sharing and group call pickup* says users must be assigned a Microsoft Teams Phone licence to set up and use call sharing and group call pickup.

The notice names no other licence, meter or charge for the Mobile experience. The only costs the sources show are indirect: checking calling policies and licences, and telling users where the new setting is.

## Scope

- **Users:** users with a Teams Phone licence and with call groups allowed in their calling policy, according to MC1552390. Learn also requires the call group owner and members to be in Teams Only deployment mode.
- **Platforms:** Android and iOS, per the roadmap record.
- **Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Rollout:** target December CY2026 per the roadmap; MC1552390 gives early December 2026 to mid December 2026 for General Availability in Worldwide.
- **Admin prerequisites:** none are listed in the notice beyond the calling policy and licence above.

## Governance guidance

### Before rollout
- Check which calling policy each call group user has and confirm that **Inbound calls can be routed to call groups** is on (Teams admin center > Voice > Calling policies > policy > Edit).
- Confirm that users who should manage call groups hold a Teams Phone licence, as the notice recommends.
- Inform users who rely on call groups for backup cover and often work away from their desk that Manage call group is coming to Teams on Mobile.

### At rollout
- Watch Message center for updates to MC1552390, whose rollout window is early to mid December 2026.
- Tell the help desk that MC1552390 says eligible users will see **Manage call group** under Settings > Calling on Teams on Mobile.

### After rollout
- Review a sample of users' call groups in the Teams admin center (Users > Manage users > user > Voice) for stale or unexpected members.
- Clean up call group relationships in the Teams admin center if you turn call groups off for a group of users, as Learn directs, to avoid incorrect call routing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use call groups and route inbound calls to them</strong><br><small>User</small><br><small class="controls__note">MC1552390 says users with call groups turned off in their calling policy cannot use the feature on Mobile. Assign the policy to users or groups.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Edit › Inbound calls can be routed to call groups <a href="https://learn.microsoft.com/microsoftteams/teams-calling-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -AllowCallGroups $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A user's call group members and ring order (today's admin-side route)</strong><br><small>User</small><br><small class="controls__note">Edits one user's call group. It does not turn the Mobile screen on or off. CallGroupTargets overwrites the current membership with the full set given.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Manage users › user › Voice › Call answering rules › Ring user's devices › Also allow › Group call pickup › Manage call group <a href="https://learn.microsoft.com/microsoftteams/call-sharing-and-group-call-pickup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsUserCallingSettings -Identity &lt;user principal name&gt; -CallGroupOrder InOrder -CallGroupTargets &lt;array of sip addresses&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate switch for call group management on Teams on Mobile</strong><br><small>Tenant</small><br><small class="controls__note">MC1552390 says Mobile uses the same controls as desktop.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The calling policy setting decides whether a user can use call groups at all, on desktop and, according to the notice, on Mobile. Learn says that when you turn off call groups for users, you must clean up their call group relationships in the Teams admin center to avoid incorrect call routing.

The second row is today's admin-side route to the same call group data. It does not switch the Mobile screen on or off. Microsoft Learn documents no separate setting for call group management on Teams on Mobile at the time of writing (November 2026).

Learn also says that if **Use unanswered settings** or **Send to voicemail** is chosen for **Routing for PSTN calls**, either setting takes precedence over call groups, so call group changes made on Mobile may not affect PSTN calls under those settings.

## Open questions

- Will Microsoft add a setting that governs call group management on Teams on Mobile separately from the calling policy, or will the policy remain the only control? Watch MC1552390 and the Learn page *Call sharing and group call pickup*.
- Does the Mobile ordering option follow the five-member rule on the Learn page, where more than five members switches the ring order to **Everyone at once**?
- Will the Learn call group page gain mobile-specific steps and a prerequisites list once the feature ships?
- The roadmap lists only Worldwide (Standard Multi-Tenant). Will a later notice cover US Government clouds?

<!-- rationale
risk: Low. Mobile edits the same call group settings as desktop and is governed by the existing calling policy, so the exposure is users changing call routing quickly from a phone.
cost: Low. Microsoft's notice names a Teams Phone licence as the requirement and no other licence or meter; the remaining cost is checking calling policies and telling users.
impact: Medium. Users with a Teams Phone licence who rely on call groups for backup cover will notice a new Manage call group screen in Calling settings.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Change & support; Open questions: five-member rule / absence: Whether Mobile ordering options follow the five-member call group rule is not described. | Found: The order in which members of the call group are notified about the incoming call can be specified as simultaneous or in order (with 5 or less members). | Fix: Remove 'Whether the Mobile ordering options follow the five-member rule is not described' and the corresponding Open questions bullet. Learn states this restriction for call groups without a desktop qualification, and MC1552390 explicitly says Mobile changes the same call group settings as desktop; retain the preceding documented five-member rule. | Source: https://learn.microsoft.com/microsoftteams/call-sharing-and-group-call-pickup
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: After rollout, review a sample / admin-path: Users > Manage users > user > Voice is the route given for reviewing call group membership. | Found: On the user details page, go to the Voice tab. ... Under Call answering rules ... Ring user's devices and select Group call pickup from the Also allow dropdown. ... Select Manage call group | Fix: Extend the parenthetical route in After rollout to 'Users > Manage users > user > Voice > Call answering rules > Ring user's devices > Also allow > Group call pickup > Manage call group', matching controls[1].ui. The current route stops early on the right page. | Source: https://learn.microsoft.com/microsoftteams/call-sharing-and-group-call-pickup
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: Every control the checklist tells administrators to check is represented in the controls table. | Found: Confirm that users who should manage call groups hold a Teams Phone licence ... Controls: Whether users can use call groups; A user's call group members and ring order; A separate switch for call group management on Teams on Mobile. | Fix: The Before rollout step that checks Teams Phone licence assignments has no corresponding control row. If retaining the current table, remove that checklist bullet; the licence prerequisite is already stated in Cost and licensing and Scope.
-->
