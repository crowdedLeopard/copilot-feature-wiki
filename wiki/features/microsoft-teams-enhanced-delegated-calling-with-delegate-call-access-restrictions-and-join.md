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
  - title: "Set-CsUserCallingDelegate"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether a user can use call delegation at all"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Delegation for inbound and outbound calls"
      docs: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy> -AllowDelegation $true|$false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    note: "General control: it switches delegation on or off, not the lock or the tone. Learn says the setting is turned on by default."
  - governs: "Which delegates a user has, and what each delegate may do (PowerShell)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Users > Manage users > user > Voice"
      docs: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    api:
      kind: "powershell"
      call: "Set-CsUserCallingDelegate -Identity <delegator> -Delegate <delegate> -MakeCalls $true -ReceiveCalls $true -ManageSettings $true -PickUpHeldCalls $true -JoinActiveCalls $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate"
    note: "Existing control. Set-CsUserCallingDelegate also documents -JoinActiveCalls and -PickUpHeldCalls permissions; these govern delegate participation generally, not the new per-call lock or warning tone."
  - governs: "Whether delegators can lock calls, or must use the delegate join warning tone"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting is documented at the time of writing (November 2026); the lock and tone are set by the delegator."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: lock and delegate join tone, with the existing delegation controls and the gap in admin controls."
  - date: "2026-11-16"
    note: "Corrected the delegate-permissions row: Set-CsUserCallingDelegate documents -JoinActiveCalls and -PickUpHeldCalls, with Boolean values; added the policy step to the calling policy path."
  - date: "2026-11-17"
    note: "Corrected the calling policy statement: it no longer says turning delegation off removes the lock and tone; it now states the Learn cleanup requirement. Clarified that delegation is inspected per user."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3b84c4eed0a1e466d7eb28799d8f1e89"
---

## What's changing

Microsoft Teams call delegation gains two controls for the delegator, the person who has authorised a delegate to make or receive calls for them. The delegator can lock an active call so that delegates cannot join it or resume it from hold, and can optionally turn on a warning tone that every participant hears when a delegate joins or resumes a call.

Microsoft's notice MC1429012 describes the behaviour. A **Lock call** control appears in the toolbar during an active call and in the Calls experience. Delegates still see locked calls in their call history but cannot take part until the delegator unlocks the call. The warning tone is a separate setting, **Warning Tone for Delegate Participation**, in the call delegation settings. The notice says the change is available by default to users with call delegation configured, and that no existing call delegation workflows are removed.

The roadmap record shows the item as Launched, with a target of August CY2026, General Availability and Targeted Release phases, for Worldwide, GCC, GCC High and DoD, on Desktop and Mac. The notice's latest update (22 September 2026) gives this rollout: Targeted Release (Worldwide) from early August to mid-August 2026; General Availability (Worldwide) mid-August 2026; GCC and GCC High from mid-August to late August 2026; DoD from mid-August to the end of October 2026 (previously mid-September). The notice lists Teams desktop and Teams web as platforms. It sets no act-by date and says no immediate administrative action is required.

Microsoft Learn does not describe the lock or the warning tone at the time of writing (November 2026), so their behaviour here is the roadmap's and the notice's description. The Learn page on call delegation covers setup only.

## Why it matters

This is a privacy control that sits with the individual user, not with the tenant. If an executive wants a conversation to stay private, they can lock the call; if they want everyone on the call to know when a delegate joins, they can turn on the tone.

If nobody acts, nothing breaks: delegation keeps working as before. The practical work is communication. Assistants need to know that a locked call cannot be resumed or joined by them, and help desk staff need to recognise that as intended behaviour rather than a fault. Because Learn documents no tenant switch for either control, user guidance is the main lever.

## Risk assessment

**Data exposure**

- The lock reduces exposure: a delegator can stop delegates joining or resuming a call that carries sensitive content. It acts per call and is applied by the delegator, so it protects only the calls where the delegator remembers to use it.
- The warning tone is audible to all call participants, according to the notice. Delegators handling sensitive calls should know that the tone discloses the presence of a delegate to everyone on the call.

**Security & identity**

- Delegate permissions set with `Set-CsUserCallingDelegate` (including `-JoinActiveCalls` and `-PickUpHeldCalls`) still apply. The notice describes the lock as stopping delegates joining or resuming, but does not say how it interacts with those permissions.
- Microsoft Learn documents no admin setting that forces the lock or the tone on, or prevents users from using them, at the time of writing (November 2026).

**Autonomy & actions**

- No autonomous behaviour. Each lock and each tone setting is a deliberate user action.

**Change & support**

- A locked call cannot be resumed from hold by a delegate. Expect questions from assistants when a caller left on hold is not picked up until the delegator unlocks the call.
- The notice says the Microsoft Support article on sharing a phone line with a delegate will be updated for the General Availability rollout, so user-facing instructions may change after you write your own guidance.

## Cost and licensing

**Licence:** Microsoft Learn states that, to set call settings for a user, the user must have an assigned Microsoft Teams Phone licence, and that a manager and an administrative assistant delegating calls must each have one. It also states that call delegation is included with Teams Phone ([Configure call forwarding and delegation settings](https://learn.microsoft.com/microsoftteams/user-call-settings)). That page does not mention the lock or the warning tone, so licensing specific to them is not yet published.

**Meter:** no meter is documented for these controls at the time of writing (November 2026).

**Indirect cost:** administrator and help desk time to brief delegators and delegates and to update internal calling guidance, as the notice recommends.

## Scope

**Who is affected:** users with call delegation configured, in practice delegators such as executives and managers, and their delegates. Delegation requires Teams Phone licences for both parties, per the Learn page above.

**Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice gives DoD rollout as completing by the end of October 2026.

**Platforms:** the roadmap record lists Desktop and Mac. The notice lists Teams desktop and Teams web. The Learn delegation page, which does not cover this feature, shows that joining active calls is supported on Teams Desktop, the Teams Web App (Edge) and Teams IP phones, but not on the Teams Mac App or the mobile app. Whether the lock and tone behave differently by client is not stated.

**Prerequisites:** delegation must be enabled for the user through the calling policy (`AllowDelegation`), which Learn says is turned on by default.

## Governance guidance

### Before rollout

- Identify users who have call delegation configured by checking each user in the Teams admin center (Users > Manage users > user > Voice tab) or with `Get-CsUserCallingSettings -Identity <user>`, so you know who to brief.
- Tell executives and assistants how locking works and that a locked call cannot be joined or resumed by the delegate until it is unlocked.
- Decide whether to recommend the warning tone to users who handle confidential calls, as the notice suggests.

### At rollout

- Brief the help desk that a delegate unable to resume or join a call may be facing a locked call, not a fault.
- Update internal Teams calling guidance and training materials once Microsoft updates its support article.

### After rollout

- Confirm that users with delegation know where to turn the warning tone on and that other call participants will hear it.
- Review whether delegation is still needed for each delegator, and remove relationships that are no longer used with `Remove-CsUserCallingDelegate`.
- Clean up a user's delegation relationships in the Teams admin center if you turn delegation off for them, as Learn advises.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a user can use call delegation at all</strong><br><small>User</small><br><small class="controls__note">General control: it switches delegation on or off, not the lock or the tone. Learn says the setting is turned on by default.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Delegation for inbound and outbound calls <a href="https://learn.microsoft.com/microsoftteams/user-call-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy&gt; -AllowDelegation $true|$false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which delegates a user has, and what each delegate may do (PowerShell)</strong><br><small>User</small><br><small class="controls__note">Existing control. Set-CsUserCallingDelegate also documents -JoinActiveCalls and -PickUpHeldCalls permissions; these govern delegate participation generally, not the new per-call lock or warning tone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Manage users › user › Voice <a href="https://learn.microsoft.com/microsoftteams/user-call-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsUserCallingDelegate -Identity &lt;delegator&gt; -Delegate &lt;delegate&gt; -MakeCalls $true -ReceiveCalls $true -ManageSettings $true -PickUpHeldCalls $true -JoinActiveCalls $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingdelegate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether delegators can lock calls, or must use the delegate join warning tone</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting is documented at the time of writing (November 2026); the lock and tone are set by the delegator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The lock and the warning tone are user settings. Microsoft Learn documents no admin centre setting, policy parameter or API for either at the time of writing (November 2026), so the table shows that gap.

The two documented rows govern call delegation in general. The calling policy controls delegation generally, not the lock or tone individually. When turning delegation off, Microsoft also requires cleanup of the user's delegation relationships in Teams admin center to avoid incorrect call routing ([Configure call forwarding and delegation settings](https://learn.microsoft.com/microsoftteams/user-call-settings)). The delegate permissions `-JoinActiveCalls` and `-PickUpHeldCalls` are per-delegate rights; Learn does not say how they relate to the per-call lock. Learn recommends giving delegates and delegators the same calling policy, because a delegate is bound to their own calling policy.

## Open questions

- Is there, or will there be, a Teams calling policy setting or admin centre control to require the warning tone or to disable the lock? Watch the Teams admin center and the Learn page on call forwarding and delegation settings.
- Does the warning tone default to off for every user, and can it be set per delegate? The notice calls it optional but does not state the default.
- Does the lock work on all clients, including the Teams Mac app where Learn says delegates cannot join active calls, and Teams IP phones? Watch the updated support article for General Availability.
- How does the per-call lock interact with the delegate permissions `-JoinActiveCalls` and `-PickUpHeldCalls`? Neither the notice nor Learn says.
- Is any licence beyond Teams Phone needed for these controls? None is published at the time of writing.

<!-- rationale
risk: Low. The controls sit with the delegator and only narrow what delegates can do on calls that already exist. No admin setting is documented for either control, so exposure depends on user choice.
cost: Low. The only cost the sources show is admin and support time for communication. Call delegation is included with Teams Phone, but no page states the licence for these new controls.
impact: Medium. Only users with call delegation configured notice it: executives, assistants, managers and support staff. Everyone else on their calls may hear the new tone.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: clouds; What's changing; Scope / record: The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. | Found: "clouds": [ "Worldwide (Standard Multi-Tenant)", "GCC", "GCC High", "DoD" ] | Fix: Keep the roadmap cloud list. Add to Scope: 'The Teams Calling features page separately lists "Call settings for secondary ringer, voicemail, and enhanced delegation" as not yet available in GCC High and DoD, whereas this roadmap item and MC1429012 list those clouds (https://learn.microsoft.com/microsoftteams/here-s-what-you-get-with-phone-system#availability-in-gcc-high-and-dod-clouds).' Add that URL to sources.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope / licensing: The delegation guide says the delegator and delegate each need a Teams Phone licence. | Found: In the example where a manager is delegating calls to an administrative assistant, the manager and administrative assistant must each have a Teams Phone license. | Fix: Add after the licence paragraph: 'The Teams Calling features comparison separately lists "Member of call group or call delegation" as available with a Microsoft Teams Enterprise licence alone, whereas the delegation guide says both parties need Teams Phone (https://learn.microsoft.com/microsoftteams/here-s-what-you-get-with-phone-system#teams-calling-features).' Add the comparison URL to sources. | Source: https://learn.microsoft.com/microsoftteams/user-call-settings
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown because licensing specific to the new controls is unpublished. | Found: Call delegation and is included with Teams Phone. | Fix: Set licensing.model to 'included'. Keep the notes naming Teams Phone and the narrower statement that licensing specific to the lock and warning tone controls has not been published; the standard uses the product-level licence for new options within the licensed product. | Source: https://learn.microsoft.com/microsoftteams/user-call-settings
- [supported, minor] controls[0].ui; Governance controls / admin-path: Teams admin center > Voice > Calling policies > policy > Delegation for inbound and outbound calls reaches the delegation setting. | Found: select Voice > Calling policies. ... Choose the policy you would like to update ... Toggle Delegation for inbound and outbound calls on. | Fix: Keep this cited route, but add: 'The Calling policies guide gives an explicit Edit step after selecting an existing policy: Voice > Calling policies > policy > Edit > Delegation for inbound and outbound calls (https://learn.microsoft.com/microsoftteams/teams-calling-policy#edit-a-calling-policy).' Add that URL to sources. | Source: https://learn.microsoft.com/microsoftteams/user-call-settings
- [supported, minor] controls[1].ui; Governance controls; Governance guidance: Before rollout / admin-path: Teams admin center > Users > Manage users > user > Voice reaches the user's delegation configuration page. | Found: go to Users > Manage users and select a licensed user. ... go to the Voice tab. ... select Call delegation under Also allow. Then add the appropriate delegates by selecting Add people | Fix: Extend controls[1].ui.path and its rendered table path to 'Users > Manage users > user > Voice > Call answering rules > Ring the user's devices > Also allow > Call delegation > Add people', as documented at https://learn.microsoft.com/microsoftteams/user-call-settings#use-the-teams-admin-center. The shorter inventory route in Before rollout can remain. | Source: https://learn.microsoft.com/microsoftteams/user-call-settings
-->
