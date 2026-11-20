---
title: "Microsoft Teams: Intelligent call delegation answers and screens incoming calls"
slug: "microsoft-teams-intelligent-call-delegation"
roadmapId: 565216
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "An AI voice agent answers a user's Teams calls, screens them and books follow-ups in Bookings. Public preview bills Copilot Credits through a spending policy, so admins must set one up to keep it working."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn says users must have a Microsoft Copilot license, and that the feature uses usage-based billing with Copilot Credits. MC1537490 says to confirm users hold the Microsoft 365 Copilot USL where required. A feature-specific credit rate is not yet published."
audiences: ["m365-admin","finops","compliance","end-user"]
tags: ["teams","m365-copilot","copilot-credits","usage-based-billing","spending-policies","delegation","ai","frontier-program","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 565216"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565216"
    kind: "roadmap"
  - title: "Manage Intelligent call delegation in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-call-delegation"
    kind: "learn"
  - title: "Set-CsTeamsPersonalAttendantPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "MC1537490: Intelligent call delegation is planned to change from Frontier public to public preview (Ring 3.6) as early as Nov 17th"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1537490"
    kind: "message-center"
  - title: "MC1519860: Intelligent Call Delegation in Teams"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1519860"
    kind: "message-center"
videos: []
related: ["spending-policies","copilot-credits","microsoft-teams-enhanced-delegated-calling-with-delegate-call-access-restrictions-and-join","microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues"]
controls:
  - governs: "Whether users with the policy can use Intelligent call delegation"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Intelligent call delegation policies > policy > General > Enable Intelligent call delegation"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-call-delegation"
    api:
      kind: "powershell"
      call: "Set-CsTeamsPersonalAttendantPolicy -Identity <policy name> -PersonalAttendant Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy"
    note: "Reference page carries a Limited Preview banner. Grant-CsTeamsPersonalAttendantPolicy assigns the policy."
  - governs: "Which callers Intelligent call delegation answers (internal, federated, PSTN)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Intelligent call delegation policies > policy > Choose which calls Intelligent call delegation answers"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-call-delegation"
    api:
      kind: "powershell"
      call: "Set-CsTeamsPersonalAttendantPolicy -Identity <policy name> -InboundPSTNCalls Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy"
    note: "-InboundFederatedCalls and -InboundInternalCalls set the other two call types. Values: EnabledUserOverride, Enabled, Disabled."
  - governs: "Whether the agent can use the user's Bookings calendar to schedule follow-ups"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Intelligent call delegation policies > policy > Choose what Intelligent call delegation can do > Calendar integration"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-call-delegation"
    api:
      kind: "powershell"
      call: "Set-CsTeamsPersonalAttendantPolicy -Identity <policy name> -CalendarBookings Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy"
    note: "The Learn feature page gives this parameter in its New-CsTeamsPersonalAttendantPolicy example."
  - governs: "Whether recordings and transcripts of handled calls are saved automatically"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Intelligent call delegation policies > policy > Manage recording and transcription > Automatically save recording"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-call-delegation"
    api:
      kind: "powershell"
      call: "Set-CsTeamsPersonalAttendantPolicy -Identity <policy name> -AutomaticRecording Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy"
    note: "Automatically save transcription is the neighbouring setting; -AutomaticTranscription is its parameter."
  - governs: "Spending limits for the spending policy that funds Intelligent call delegation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > policy > Spending limits"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. The request body sets periodLimit or perUserLimit. Create the policy with + Add spending policy and select only Intelligent call delegation."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T18:34:37"
changes:
  - date: "2026-11-20"
    note: "New briefing: public preview with usage-based billing in Copilot Credits, the Teams policy controls and the spending policy needed to keep call screening working."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 82
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "3fd1451eab0ae691dc09f0aa9adbd88a"
---

## What's changing

Intelligent call delegation is an AI voice agent for Microsoft Teams calls. Microsoft Learn describes it as answering calls on a user's behalf, gathering the caller's reason for calling, and acting on the user's availability and settings. It can screen calls, route urgent calls to the user, and schedule follow-up appointments through Microsoft Bookings. Callers are told they are speaking with an attendant rather than a person, and when the feature is turned on it replaces the user's existing call routing settings.

Admins govern it with Teams intelligent call delegation (personal attendant) policies. The policy is enabled by default and users with it choose whether to turn the feature on in their Teams settings; call screening and follow-up scheduling are also on by default in the policy and users can change them. Settings cover how the agent speaks, which calls it answers (internal Teams, federated Teams, external PSTN), what it can do (screening, Bookings calendar access, callbacks for people outside the user's contacts) and whether transcripts and recordings are saved automatically.

The roadmap record lists the item as Rolling out, target November CY2026, with General Availability and Preview phases, on Android, Desktop, iOS and Mac in the Worldwide (Standard Multi-Tenant) cloud. Microsoft's notice MC1537490 (3 November 2026) says the feature moves from Frontier public preview to public preview (Ring 3.6) as early as 17 November 2026, with public preview in Worldwide from mid-November to mid-December 2026 and General Availability from mid-January to late January 2027, dates subject to change. MC1519860 (21 October 2026) gives a public preview rollout of mid to late November 2026 and General Availability beginning in January 2027, to complete by late January 2027. The Learn page marks the feature as in public preview.

## Why it matters

This is a preview feature that talks to your callers on your users' behalf and spends metered credits, so two decisions fall to the administrator: whether the Teams policy should allow it, and whether to fund it. Microsoft's notice MC1537490 says billing does not begin until an admin configures spending in the Microsoft 365 admin center, and that tenants coming from Frontier preview will no longer have incoming calls screened by the feature if spending is not configured.

For tenants that were not in Frontier preview, Microsoft has not stated what happens on arrival if no spending policy exists, so plan on the Learn prerequisite: a spending policy for Intelligent call delegation is required. Because users can switch it on themselves under the default policy, decide before rollout who should have it, since callers from outside the organisation will hear an AI attendant.

## Risk assessment

**Data exposure**
- The agent gathers the caller's reason for calling and can provide a post-call summary in call history. Transcripts and recordings are saved automatically only where the policy settings *Automatically save transcription* and *Automatically save recording* allow it, so set those deliberately.
- With *Calendar integration* on, the agent can access the user's personal Bookings calendar to check availability and schedule follow-ups. *Callbacks for people outside the user's contacts* controls whether it uses that integration for unknown callers.

**Security & identity**
- The agent can answer federated Teams calls and external PSTN calls, not only internal ones. *Federated Teams calls* and *External PSTN calls* are separate policy settings, so a pilot can start with internal calls only.
- Callers are told they are speaking with an attendant. Where your organisation has rules on call recording or AI disclosure, review them before turning on the recording and transcription settings.

**Autonomy & actions**
- The agent answers, screens, routes urgent calls and schedules callbacks and follow-up meetings without the user taking the call. Users are notified when it answers or acts, can watch a live preview and can join at any time.
- When Intelligent call delegation is on, it replaces the user's existing call routing settings, so a user's forwarding or simultaneous-ring setup stops applying.

**Change & support**
- Frontier preview tenants lose call screening if no spending policy is configured (MC1537490), which help desks will see as users reporting calls no longer screened.
- The cmdlet reference for the policy still carries a Limited Preview banner while the Learn feature page says public preview; test the cmdlets in a pilot before scripting them.

## Cost and licensing

**Licence.** The Learn page lists a Microsoft Copilot licence as a prerequisite for users. MC1537490 asks admins to confirm users are licensed with the Microsoft 365 Copilot USL where required. Which licences count is not further defined on the feature page.

**Meter.** The Learn page says Intelligent call delegation uses usage-based billing with Copilot Credits and that admins must set up usage-based billing and create a spending policy for it in the Microsoft 365 admin center. When creating that policy, select only *Intelligent call delegation* under *Agents and services* and choose the user and group scope before assigning it. Microsoft's usage-based billing overview lists Teams: Intelligent Call Delegation among the services managed this way. MC1537490 states that public preview uses usage-based billing and that billing does not begin until an admin configures spending.

**Limits.** The spending policy page says a limited monthly budget limits the credits the policy can spend each month, and that when users hit the limit they lose access to agents and services for the rest of the month until credits reset on the first of the month. Its general guidance for limits is at least 2,000 credits per user per month, and a policy uses prepaid credits before pay-as-you-go. See [Spending policies](/concepts/spending-policies/) and [Copilot Credits](/concepts/copilot-credits/).

**Not yet published.** A credit rate specific to Intelligent call delegation, and how billing works at General Availability, are not yet published. Both are in Open questions.

## Scope

- **Users:** users who hold the licences above and are assigned a policy; the Learn page says users with the policy choose whether to turn the feature on in their Teams settings. MC1519860 says licensed users configure it under Call Settings, with options depending on admin configuration.
- **Platforms and cloud:** the roadmap lists Android, Desktop, iOS and Mac in Worldwide (Standard Multi-Tenant). No other cloud is listed on the roadmap item.
- **Prerequisites:** usage-based billing set up and a spending policy for Intelligent call delegation, as above. Bookings integration is used for follow-up scheduling.
- **Rollout:** public preview from mid-November 2026 and General Availability from January 2027 per Microsoft's notices; these are targets.

## Governance guidance

### Before rollout
- Decide which users and groups should have Intelligent call delegation, and create a dedicated Teams intelligent call delegation policy for the pilot group.
- Set up usage-based billing and create a spending policy in the Microsoft 365 admin center that selects only Intelligent call delegation, scoped to the same group, with a monthly limit.
- Review the policy settings for answering federated and PSTN calls, Bookings calendar access, and automatic recording and transcription, and set each to the value your compliance team accepts.
- Check with the Frontier preview group whether they relied on call screening, because it stops without a spending policy.

### At rollout
- Assign the policy to the pilot group and confirm the users see the settings under Call Settings in Teams.
- Tell pilot users that the feature replaces their existing call routing settings once on, and that callers are told they are speaking with an attendant.
- Switch off *Auto-apply new services* on the spending policy if you do not want future supported services to join it automatically.

### After rollout
- Review credit consumption in Copilot > Cost Management against the policy limit and alert thresholds.
- Re-read the Learn page for General Availability changes to billing, licensing and policy settings, expected from January 2027 according to Microsoft's notices.
- Revisit the recording, transcription and external-call settings once pilot users have used the agent for real calls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users with the policy can use Intelligent call delegation</strong><br><small>User</small><br><small class="controls__note">Reference page carries a Limited Preview banner. Grant-CsTeamsPersonalAttendantPolicy assigns the policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Intelligent call delegation policies › policy › General › Enable Intelligent call delegation <a href="https://learn.microsoft.com/microsoftteams/intelligent-call-delegation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsPersonalAttendantPolicy -Identity &lt;policy name&gt; -PersonalAttendant Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which callers Intelligent call delegation answers (internal, federated, PSTN)</strong><br><small>User</small><br><small class="controls__note">-InboundFederatedCalls and -InboundInternalCalls set the other two call types. Values: EnabledUserOverride, Enabled, Disabled.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Intelligent call delegation policies › policy › Choose which calls Intelligent call delegation answers <a href="https://learn.microsoft.com/microsoftteams/intelligent-call-delegation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsPersonalAttendantPolicy -Identity &lt;policy name&gt; -InboundPSTNCalls Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the agent can use the user's Bookings calendar to schedule follow-ups</strong><br><small>User</small><br><small class="controls__note">The Learn feature page gives this parameter in its New-CsTeamsPersonalAttendantPolicy example.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Intelligent call delegation policies › policy › Choose what Intelligent call delegation can do › Calendar integration <a href="https://learn.microsoft.com/microsoftteams/intelligent-call-delegation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsPersonalAttendantPolicy -Identity &lt;policy name&gt; -CalendarBookings Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether recordings and transcripts of handled calls are saved automatically</strong><br><small>User</small><br><small class="controls__note">Automatically save transcription is the neighbouring setting; -AutomaticTranscription is its parameter.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Intelligent call delegation policies › policy › Manage recording and transcription › Automatically save recording <a href="https://learn.microsoft.com/microsoftteams/intelligent-call-delegation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsPersonalAttendantPolicy -Identity &lt;policy name&gt; -AutomaticRecording Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits for the spending policy that funds Intelligent call delegation</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. The request body sets periodLimit or perUserLimit. Create the policy with + Add spending policy and select only Intelligent call delegation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Teams policy settings and the spending policy are separate: the Teams policy decides whether and how users can use the agent, and the spending policy decides who can consume credits for it. Neither replaces the other.

The Learn feature page lists five cmdlets (New, Set, Get, Grant and Remove-CsTeamsPersonalAttendantPolicy) and does not pair each portal setting with a parameter; the pairings in the table follow the parameter descriptions in the Set-CsTeamsPersonalAttendantPolicy reference, which carries a Limited Preview banner. Use Grant-CsTeamsPersonalAttendantPolicy to assign a policy to users.

The Graph spending policy call is a beta API, and the reference lists displayName, periodLimit, perUserLimit and billingMethods as updatable properties.

## Open questions

- What Copilot Credit rate applies to a minute or a call handled by Intelligent call delegation? Watch the usage-based billing overview and the Learn feature page.
- Will usage-based billing continue at General Availability in January 2027, and does the licence requirement change? Watch Message center and the Learn feature page.
- What happens on arrival for tenants that were not in Frontier preview and have no spending policy? Watch Message center.
- Where are saved recordings and transcripts stored, and who can access them? The Learn page names the settings but not the location.
- Will the Teams PowerShell reference drop the Limited Preview banner for the personal attendant policy cmdlets?

<!-- rationale
risk: Medium. The agent answers calls for users, including federated and PSTN callers, and replaces their call routing settings once a user turns it on; policy settings in the Teams admin center scope this.
cost: Variable. Public preview uses usage-based billing with Copilot Credits through a spending policy, and users need a Microsoft Copilot licence; a credit rate for this feature is not yet published.
impact: Medium. Users who turn it on and the people who call them notice it; tenants that used it in Frontier preview lose call screening if no spending is configured.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState / default: The feature's on-arrival default state is user-opt-in. | Found: Admins must set up usage-based billing for Copilot Credits and create a spending policy for Intelligent call delegation in the Microsoft 365 admin center. | Fix: Set defaultState to 'admin-opt-in' under the schema's definition: use requires administrator billing setup and a spending policy. Preserve the documented enabled-by-default Teams policy and subsequent user choice, but qualify the Why it matters sentence as 'After admins configure usage-based billing and a spending policy, users can switch it on themselves under the default Teams policy.' | Source: https://learn.microsoft.com/microsoftteams/intelligent-call-delegation
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls / command: Grant-CsTeamsPersonalAttendantPolicy assigns the policy to users. | Found: Assigns a specific Teams Personal Attendant Policy to a user, a group of users, or sets the Global policy instance. | Fix: Add https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamspersonalattendantpolicy to sources to substantiate the assignment guidance. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamspersonalattendantpolicy
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The caller-type controls are under Teams admin center > Voice > Intelligent call delegation policies > policy > Choose which calls Intelligent call delegation answers. | Found: Choose which calls Intelligent call delegation answers Internal Teams calls Federated Teams calls External PSTN calls | Fix: The path reaches the correct section but stops before a setting. Use 'Voice > Intelligent call delegation policies > policy > Choose which calls Intelligent call delegation answers > External PSTN calls' to match the printed command; retain the note about the other two caller types. | Source: https://learn.microsoft.com/microsoftteams/intelligent-call-delegation
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: Every control that the governance checklist tells readers to configure appears in the controls table. | Found: Switch off Auto-apply new services on the spending policy if you do not want future supported services to join it automatically. The five controls rows cover enablement, caller types, calendar access, recording/transcription and spending limits, not this switch. | Fix: Remove the checklist bullet 'Switch off Auto-apply new services on the spending policy if you do not want future supported services to join it automatically.' It names a separate control without a corresponding table row.
-->
