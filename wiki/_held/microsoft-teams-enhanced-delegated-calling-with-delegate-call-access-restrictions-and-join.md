---
title: "Microsoft Teams: delegators can lock calls and enable a delegate join tone"
slug: "microsoft-teams-enhanced-delegated-calling-with-delegate-call-access-restrictions-and-join"
roadmapId: 567306
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams call delegators can lock an active call so delegates cannot join or resume it, and can turn on a warning tone when a delegate joins. No admin action is required; Learn documents no admin switch for either control."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Call delegation is included with Teams Phone, and both delegator and delegate need a Teams Phone licence. Microsoft has not published licensing specific to the lock and warning tone controls."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["teams","delegation","privacy","user-experience","admin-controls","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 567306"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567306"
    kind: "roadmap"
  - title: "MC1429012: (Updated) Microsoft Teams: Enhanced delegated calling with delegate call access restrictions and join notifications"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1429012"
    kind: "message-center"
  - title: "Configure call forwarding and delegation settings"
    url: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    kind: "learn"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    kind: "learn"
  - title: "Teams Phone licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-phone-licensing"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether a user can use call delegation at all"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > Delegation for inbound and outbound calls"
      docs: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy> -AllowDelegation $true|$false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    note: "General control: it switches delegation on or off, not the lock or the tone. Learn says the setting is on by default."
  - governs: "What each delegate may do for a delegator (make calls, receive calls, manage settings)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Users > Manage users > user > Voice"
      docs: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    api:
      kind: "powershell"
      call: "Set-CsUserCallingDelegate -Identity <delegator> -Delegate <delegate> -MakeCalls -ReceiveCalls -ManageSettings"
      docs: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    note: "Existing control. Learn does not show lock or join permissions among these delegate permissions."
  - governs: "Whether delegators can lock calls, or must use the delegate join warning tone"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting is documented at the time of writing (November 2026); the lock and tone are set by the delegator."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: lock and delegate join tone, with the existing delegation controls and the gap in admin controls."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 53
  unconfirmed: 0
  contradicted: 2
  attempts: 1
---

## What's changing

Microsoft Teams call delegation gains two controls for the delegator, the person who has authorised a delegate to make or receive calls for them. The delegator can lock an active call so that delegates cannot join it or resume it from hold, and can optionally turn on a warning tone that every participant hears when a delegate joins or resumes a call.

Microsoft's notice MC1429012 describes the behaviour. A **Lock call** control appears in the toolbar during an active call and in the Calls experience. Delegates still see locked calls in their call history but cannot take part until the delegator unlocks the call. The warning tone is a separate setting, **Warning Tone for Delegate Participation**, in the call delegation settings. The notice says the capability is available by default to users with call delegation configured, and that no existing call delegation workflows are removed.

The roadmap record shows the item as Launched, with a target of August CY2026, General Availability and Targeted Release phases, for Worldwide, GCC, GCC High and DoD, on Desktop and Mac. The notice's latest update (22 September 2026) gives this rollout: Targeted Release (Worldwide) from early August to mid-August 2026; General Availability (Worldwide) mid-August 2026; GCC and GCC High from mid-August to late August 2026; DoD from mid-August to the end of October 2026 (previously mid-September). The notice lists Teams desktop and Teams web as platforms. The notice sets no act-by date and says no immediate administrative action is required.

Microsoft Learn does not yet describe the lock or the warning tone, so their behaviour here is the roadmap's and the notice's description. The Learn page for call delegation, as read in November 2026, covers delegation setup only.

## Why it matters

This is a privacy control that sits with the individual user, not with the tenant. If an executive wants a conversation to stay private, they can lock the call, and if they want everyone on the call to know when a delegate joins, they can turn on the tone.

If nobody acts, nothing breaks: delegation keeps working as before. The practical work is communication. Assistants need to know that a locked call cannot be resumed or joined by them, and help desk staff need to recognise that as intended behaviour rather than a fault. Because the tenant has no documented switch for either control, user guidance is the main lever.

## Risk assessment

**Data exposure**

- The lock reduces exposure: a delegator can stop delegates joining or resuming a call that carries sensitive content. It acts per call and is applied by the delegator, so it protects only the calls where the delegator remembers to use it.
- The warning tone is audible to all call participants, including people outside the organisation, according to the notice. Delegators handling sensitive calls should know that the tone discloses the presence of a delegate.

**Security & identity**

- Delegate permissions are unchanged: a delegate's rights to make calls, receive calls and manage settings are still set per delegator. The lock overrides join and resume for a given call but does not remove the delegate relationship.
- Microsoft Learn documents no admin setting that forces the lock or the tone on, or prevents users from using them, at the time of writing (November 2026).

**Autonomy & actions**

- No autonomous behaviour. Each lock and each tone setting is a deliberate user action.

**Change & support**

- A locked call cannot be resumed from hold by a delegate. Expect questions from assistants when a caller left on hold is not picked up until the delegator unlocks the call.
- The notice says the Support article for delegation will be updated at General Availability, so user-facing instructions may change after you write your own guidance.

## Cost and licensing

Licence: Microsoft Learn states that call delegation requires a Microsoft Teams Phone licence for both the delegator and the delegate, and that call delegation is included with Teams Phone ([Configure call forwarding and delegation settings](https://learn.microsoft.com/microsoftteams/user-call-settings)). That page predates these controls and does not mention the lock or the warning tone, so licensing specific to them is not yet published.

Meter: no meter is documented for these controls at the time of writing (November 2026).

Indirect cost: administrator and help desk time to brief delegators and delegates and to update internal calling guidance, as the notice recommends.

## Scope

**Who is affected:** users with call delegation configured, in practice delegators such as executives and managers, and their delegates. Delegation requires Teams Phone licences for both parties, per the Learn page above.

**Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. DoD rollout was expected to complete by the end of October 2026 per the notice.

**Platforms:** the roadmap record lists Desktop and Mac. The notice lists Teams desktop and Teams web. The Learn delegation page, which does not yet cover this feature, shows that delegates can join active calls on the Teams desktop app, Teams web app (Edge) and Teams IP phones, but not on the Teams Mac app or the mobile app. Whether the lock and tone behave differently by client is not stated.

**Prerequisites:** delegation must be enabled for the user through the calling policy, which is on by default according to Learn.

## Governance guidance

### Before rollout

- List users who have call delegation configured, using the Teams admin center Users > Manage users > Voice tab or `Get-CsUserCallingSettings`, so you know who to brief.
- Tell executives and assistants how locking works and that a locked call cannot be joined or resumed by the delegate until it is unlocked.
- Decide whether to recommend the warning tone to users who handle confidential calls, as the notice suggests.

### At rollout

- Brief the help desk that a delegate unable to resume or join a call may be facing a locked call, not a fault.
- Update internal Teams calling guidance and training materials once Microsoft updates its support article.

### After rollout

- Check that users with delegation know where to turn the warning tone on and that other call participants will hear it.
- Review whether delegation is still needed for each delegator; remove relationships that are no longer used. If you turn delegation off for a user, clean up their delegation relationships in the Teams admin center as Learn advises.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a user can use call delegation at all</strong><br><small>User</small><br><small class="controls__note">General control: it switches delegation on or off, not the lock or the tone. Learn says the setting is on by default.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › Delegation for inbound and outbound calls <a href="https://learn.microsoft.com/microsoftteams/user-call-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy&gt; -AllowDelegation $true|$false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>What each delegate may do for a delegator (make calls, receive calls, manage settings)</strong><br><small>User</small><br><small class="controls__note">Existing control. Learn does not show lock or join permissions among these delegate permissions.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Manage users › user › Voice <a href="https://learn.microsoft.com/microsoftteams/user-call-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsUserCallingDelegate -Identity &lt;delegator&gt; -Delegate &lt;delegate&gt; -MakeCalls -ReceiveCalls -ManageSettings</code> <a href="https://learn.microsoft.com/microsoftteams/user-call-settings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether delegators can lock calls, or must use the delegate join warning tone</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting is documented at the time of writing (November 2026); the lock and tone are set by the delegator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The lock and the warning tone are user settings. Microsoft Learn documents no admin centre setting, policy parameter or API for either at the time of writing (November 2026), so the table shows that gap.

The controls listed below govern call delegation in general. Turning delegation off with the calling policy removes the ability to configure delegation, and with it any chance to use the new controls, but it is not a way to govern the new controls on their own. Learn recommends giving delegates and delegators the same calling policy, because a delegate is bound to their own calling policy.

## Open questions

- Is there, or will there be, a Teams calling policy setting or admin centre control to require the warning tone or to disable the lock? Watch the Teams admin center and the Learn page on call forwarding and delegation settings.
- Does the warning tone default to off for every user, and can it be set per delegate? The notice calls it optional but does not state the default.
- Does the lock work on all clients, including the Teams Mac app where Learn says delegates cannot join active calls, and Teams IP phones? Watch the updated support article for General Availability.
- Is any licence beyond Teams Phone needed for these controls? None is published at the time of writing.

<!-- rationale
risk: Low. The controls sit with the delegator and only narrow what delegates can do on calls that already exist. No admin setting is documented for either control, so exposure depends on user choice.
cost: Low. The only cost the sources show is admin and support time for communication. Call delegation itself is included with Teams Phone, but no page states the licence for these new controls.
impact: Medium. Only users with call delegation configured notice it: executives, assistants, managers and support staff. Everyone else on their calls may hear the new tone.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[0].ui; Governance controls / admin-path: The delegation policy toggle is at Teams admin center > Voice > Calling policies > Delegation for inbound and outbound calls. | Found: select Voice > Calling policies.
2. Choose the policy you would like to update or select Add to create a new policy.
3. Toggle Delegation for inbound and outbound calls on. | Fix: Include the policy-selection step in the front matter and rendered table: Voice > Calling policies > policy > Delegation for inbound and outbound calls. | Source: https://learn.microsoft.com/microsoftteams/user-call-settings
- [contradicted, blocker] controls[1].api; Governance controls / command: Set-CsUserCallingDelegate -Identity <delegator> -Delegate <delegate> -MakeCalls -ReceiveCalls -ManageSettings changes delegate permissions as printed. | Found: [-MakeCalls <Boolean>]
[-ManageSettings <Boolean>]
[-ReceiveCalls <Boolean>]
Set-CsUserCallingDelegate -Identity user1@contoso.com -Delegate user2@contoso.com -MakeCalls $true | Fix: Supply Boolean arguments in both copies, for example Set-CsUserCallingDelegate -Identity <delegator> -Delegate <delegate> -MakeCalls $true -ReceiveCalls $true -ManageSettings $true, explaining that administrators choose each value. Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate as the command reference. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate
- [contradicted, blocker] controls[1].note; Governance controls / absence: Microsoft Learn does not show join permissions among delegate permissions. | Found: -JoinActiveCalls
Specifies whether delegate is allowed to join active calls on behalf of the specified user.
-PickUpHeldCalls
Specifies whether delegate is allowed to pick up calls on behalf of the specified user. | Fix: Replace the note in both copies with: 'Existing control. Set-CsUserCallingDelegate also documents -JoinActiveCalls and -PickUpHeldCalls permissions; these govern delegate participation generally, not the new per-call lock or warning tone.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate
-->
