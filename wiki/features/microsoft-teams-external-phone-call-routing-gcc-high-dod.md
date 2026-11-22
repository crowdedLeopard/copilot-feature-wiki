---
title: "Microsoft Teams: external phone call routing in GCC High and DoD"
slug: "microsoft-teams-external-phone-call-routing-gcc-high-dod"
roadmapId: 567884
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams calling policies can send inbound external calls (PSTN or federated) straight to voicemail or to the user's unanswered settings, and Microsoft's page says they apply in GCC High and DoD. Default routing stays until an admin sets a policy."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft lists Redirect external phone calls with Microsoft Teams Enterprise plus Teams Phone, not with Microsoft Teams Enterprise alone. Users who need their own phone number need licensing that includes Teams and Microsoft 365 Phone System, for example a legacy Microsoft 365 E5 licence, or a Microsoft Teams Enterprise licence combined with Microsoft Teams Phone Standard."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["teams","teams-phone","powershell","policy","call-routing","gcc-high","dod"]
sources:
  - title: "Routing inbound calls"
    url: "https://learn.microsoft.com/microsoftteams/inbound-call-routing"
    kind: "learn"
  - title: "Teams Calling features"
    url: "https://learn.microsoft.com/microsoftteams/here-s-what-you-get-with-phone-system"
    kind: "learn"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Configure call forwarding and delegation settings"
    url: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    kind: "learn"
  - title: "Set-CsUserCallingSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings?view=teams-ps"
    kind: "learn"
  - title: "Teams Phone licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-phone-licensing"
    kind: "learn"
  - title: "Set up Cloud Voicemail"
    url: "https://learn.microsoft.com/microsoftteams/set-up-phone-system-voicemail"
    kind: "learn"
  - title: "Office 365 GCC High and DoD"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/gcc-high-and-dod"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 567884"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567884"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-voice-phishing-detection-for-external-calls","microsoft-teams-intelligent-call-delegation","microsoft-teams-enhanced-delegated-calling-with-delegate-call-access-restrictions-and-join"]
controls:
  - governs: "How inbound PSTN calls are routed for users on a calling policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Routing for PSTN calls"
      docs: "https://learn.microsoft.com/microsoftteams/inbound-call-routing"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity Global -InboundPstnCallRoutingTreatment Unanswered"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    note: "The reference lists RegularIncoming (default), Unanswered, Voicemail and UserOverride (Let users decide). Takes precedence over call forwarding, call groups and delegate ringing."
  - governs: "How inbound federated calls are routed for users on a calling policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Routing for federated calls"
      docs: "https://learn.microsoft.com/microsoftteams/inbound-call-routing"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity Global -InboundFederatedCallRoutingTreatment Voicemail"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    note: "The reference lists RegularIncoming (default), Unanswered and Voicemail. There is no user-override option for federated calls."
  - governs: "Where a user's unanswered calls go, which is the destination for calls routed to unanswered settings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Users > Manage users > user > Voice > Call answering rules > If unanswered"
      docs: "https://learn.microsoft.com/microsoftteams/user-call-settings"
    api:
      kind: "powershell"
      call: "Set-CsUserCallingSettings -Identity user6@contoso.com -IsUnansweredEnabled $true -UnansweredTargetType Voicemail -UnansweredDelay 00:00:20"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings?view=teams-ps"
    note: "Existing per-user setting that Unanswered routing relies on; it does not route external calls by itself. Voice tab shows only for users with a Teams Phone licence. Available only in Teams Only deployment mode."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-22"
    note: "First briefing: documents the Teams calling-policy settings for routing external PSTN and federated calls to voicemail or unanswered settings, available in GCC High and DoD."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 49 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: unanswered destination can be delegates or a group, Teams Only deployment-mode qualification, removed an unverified admin centre location, and added the GCC High and DoD Direct Routing note."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected licensing: Microsoft lists Redirect external phone calls with Teams Enterprise plus Teams Phone, so the model is now included; removed the unpublished-licence wording."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 55
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "1fcd4500893b697899c30cb9ac14058a"
---

## What's changing

Teams calling policies let an administrator send inbound external calls straight to voicemail or to the user's unanswered call settings, instead of ringing the user. The roadmap item states that external call routing "will provide users the ability to redirect all external phone calls to either voicemail or their unanswered settings". It is listed for GCC High and DoD, on Desktop and Mac, in the General Availability phase, with status Launched and a target of September CY2026.

The roadmap text does not name the settings. Microsoft Learn's "Routing inbound calls" page documents two calling-policy settings that match it: **Routing for PSTN calls** and **Routing for federated calls**. PSTN calls come from the public telephone network. Federated calls are calls from outside your tenant that do not originate from the PSTN, for example a Teams call from another tenant. The page states that these policy settings are also available for GCCH and DoD use. This briefing treats that page as the documentation for the roadmap item.

For each call type the admin chooses between the default routing, the user's unanswered settings, or sending the call directly to voicemail. For PSTN calls only, there is a fourth choice, **Let users decide**, where users pick their routing in the Teams app's call settings. The page says that with unanswered settings or voicemail, the setting takes precedence over call forwarding with simultaneous ringing to a delegate, call groups and call forwarding. If the called user has no voicemail enabled, a voicemail-routed call is disconnected.

## Why it matters

This is a control for unwanted external calls: Microsoft's page says admins can create policies that help prevent users getting unwanted calls from external parties. The trade-off is that every external caller in scope, including customers and suppliers, stops ringing the user and lands in voicemail or the unanswered flow. A service owner should decide which groups of users want that before anyone edits a policy.

If nobody acts, the documented default is RegularIncoming (no changes to default inbound routing), and no source says existing call behaviour changes on arrival. The risk is therefore in how the setting is applied: a change to the Global (default) calling policy reaches every user on that policy.

## Risk assessment

**Data exposure**
- Calls set to **Send to voicemail** go directly to the called user's voicemail and are not shown to the user, so callers' messages accumulate in voicemail mailboxes. Check who can reach those mailboxes before routing a team's external calls there.

**Security & identity**
- The setting is a calling-policy value (`InboundPstnCallRoutingTreatment` and `InboundFederatedCallRoutingTreatment`), so it applies to whoever is assigned that policy. Microsoft's page frames it as a way to reduce unwanted external calls; it does not describe it as a security control for any specific attack.
- Unanswered and Send to voicemail take precedence over other call forwarding settings, including simultaneous delegate ringing and call groups. Unanswered still follows the user's unanswered destination, which can be MyDelegates or Group.

**Autonomy & actions**
- No agent or automated action is described. Once an admin sets the policy value, the routing applies to every inbound call of that type for the users on the policy, without the user approving it.

**Change & support**
- If a user has no voicemail enabled, a call routed to voicemail is disconnected. If a user has not enabled unanswered call settings, a call routed to unanswered settings is disconnected. Expect callers to report dropped calls where either is missing.
- Under **Unanswered**, the called user sees a missed call notification. Tell users that external calls will show as missed calls.

## Cost and licensing

Microsoft's "Routing inbound calls" page names no licence, meter or charge for these routing settings. It says the article applies to Microsoft Calling Plans, Operator Connect, Teams Phone Mobile and Direct Routing. For GCC High and DoD, Microsoft's service description says Phone System is delivered via Direct Routing.

Microsoft's "Teams Calling features" page lists Redirect external phone calls with Microsoft Teams Enterprise plus Teams Phone, not with Microsoft Teams Enterprise alone.

The Teams Phone licensing page states that users who need their own telephone number to make and receive calls must be assigned licensing that includes the Microsoft Teams and Microsoft 365 Phone System applications. Its examples include a legacy Microsoft 365 E5 licence, or a Microsoft Teams Enterprise licence combined with the Microsoft Teams Phone Standard licence. That page also says that if Microsoft provides PSTN access and phone numbers, the user needs a Microsoft Calling Plan licence in addition.

A separate charge or price for these routing settings, or specific to GCC High and DoD, is not yet published. The indirect cost is admin time to choose policies, communicate the change and handle missed-call queries.

## Scope

**Who and where.** The roadmap item lists the GCC High and DoD clouds and the Desktop and Mac platforms, in the General Availability phase with status Launched and a target of September CY2026. Microsoft's page states that the settings are also available for GCCH and DoD.

**Users.** The settings are values in a Teams calling policy, so they apply to the users assigned that policy. The page says the article applies to Microsoft Calling Plans, Operator Connect, Teams Phone Mobile and Direct Routing, so users on those telephony options are the ones in scope. For GCC High and DoD, Microsoft's service description says Phone System is delivered via Direct Routing. Users who rely on phone numbers need Teams Phone licensing as described above. The per-user unanswered configuration is available only in Teams Only deployment mode.

**Out of scope.** **Let users decide** is offered for PSTN calls only, not for federated calls.

## Governance guidance

### Before rollout
- Identify which calling policies are in use and which users are assigned each, so you know who a change will reach.
- Decide per group whether external calls should go to voicemail, to unanswered settings, or stay on default routing, and agree it with the owners of call groups and delegate arrangements, which the setting overrides.
- Confirm that each affected user has voicemail enabled and unanswered call settings configured, because a call is disconnected where the chosen destination is not available.

### At rollout
- Create or edit a dedicated calling policy for the affected users rather than changing the Global (default) policy, and set **Routing for PSTN calls** and **Routing for federated calls** as decided.
- Tell affected users that external calls will go to voicemail or appear as missed calls, and who to ask if a customer reports being unable to get through.

### After rollout
- Test with a pilot user by placing an external call and checking that it reaches voicemail or follows the unanswered setting as chosen.
- Review the affected users' unanswered call settings, which Microsoft says forward to voicemail after 30 seconds by default if not modified, and correct any that route somewhere unintended. Microsoft notes that the settings displayed in Teams admin center or Teams PowerShell can nevertheless show the unanswered target as none and a delay of 20 seconds.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How inbound PSTN calls are routed for users on a calling policy</strong><br><small>User</small><br><small class="controls__note">The reference lists RegularIncoming (default), Unanswered, Voicemail and UserOverride (Let users decide). Takes precedence over call forwarding, call groups and delegate ringing.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Routing for PSTN calls <a href="https://learn.microsoft.com/microsoftteams/inbound-call-routing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -InboundPstnCallRoutingTreatment Unanswered</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How inbound federated calls are routed for users on a calling policy</strong><br><small>User</small><br><small class="controls__note">The reference lists RegularIncoming (default), Unanswered and Voicemail. There is no user-override option for federated calls.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Routing for federated calls <a href="https://learn.microsoft.com/microsoftteams/inbound-call-routing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -InboundFederatedCallRoutingTreatment Voicemail</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where a user's unanswered calls go, which is the destination for calls routed to unanswered settings</strong><br><small>User</small><br><small class="controls__note">Existing per-user setting that Unanswered routing relies on; it does not route external calls by itself. Voice tab shows only for users with a Teams Phone licence. Available only in Teams Only deployment mode.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Manage users › user › Voice › Call answering rules › If unanswered <a href="https://learn.microsoft.com/microsoftteams/user-call-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsUserCallingSettings -Identity user6@contoso.com -IsUnansweredEnabled $true -UnansweredTargetType Voicemail -UnansweredDelay 00:00:20</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csusercallingsettings?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both routing settings sit in the Teams calling policy, so they follow policy assignment: a user gets the value from the calling policy assigned to them. The Learn page's PowerShell examples apply the setting to the users in the Global (default) Teams Calling Policy instance.

Where **Unanswered** is chosen, the destination is the user's own unanswered call settings, set per user, not in the calling policy. The user-settings row below is the control for that destination; it does not itself route external calls. **Send to voicemail** needs the called user to have voicemail enabled.

## Open questions

- Does the roadmap item cover both the PSTN and the federated routing settings, or only one? The roadmap text says "all external phone calls" and does not name the settings; watch the roadmap item and the Routing inbound calls page.
- Is any charge specific to these routing settings, or specific to GCC High and DoD tenants, published beyond the Teams Phone licensing requirements? Watch the Teams Phone licensing page.
- How are calls diverted by these settings recorded in call history and reports in GCC High and DoD? Watch the Routing inbound calls page for an update.

<!-- rationale
risk: Low. The documented default is RegularIncoming, so routing is unchanged until an admin picks voicemail or unanswered settings; the exposure that remains is legitimate external callers being diverted.
cost: Low. Microsoft lists Redirect external phone calls with Teams Enterprise plus Teams Phone, which phone-number users already need; the cost known is admin time, and the Routing inbound calls page names no separate charge.
impact: Low. Only users covered by a calling policy that an admin changes notice different routing; nobody is affected until then, and the change is made by Teams admins.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks administrators to check whether voicemail is enabled, but the controls table has no row for voicemail availability. | Found: Confirm that each affected user has voicemail enabled and unanswered call settings configured ... Controls: inbound PSTN routing; inbound federated routing; user's unanswered destination. | Fix: Remove 'voicemail enabled and' from the Before rollout checklist bullet, leaving 'Confirm that each affected user has unanswered call settings configured, because a call is disconnected where the chosen destination is not available.' Keep the supported voicemail prerequisite in the body; do not add a control row.
-->
