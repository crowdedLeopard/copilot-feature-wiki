---
title: "Microsoft Teams: Teams Phone multi-line (several phone numbers per user)"
slug: "microsoft-teams-teams-phone-user-multi-line"
roadmapId: 557716
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Administrators can assign extra phone numbers (alternate lines) to one Teams Phone user. It is off until an admin assigns numbers, and each number needs its own emergency location and policies. Admin action is optional."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn says alternate lines have the same licensing requirements as the user's primary phone number, and lists Teams Phone and Teams Phone with Calling Plan as the supported licence combinations. Microsoft's notice MC1253752 says a Teams Phone licence is required."
audiences: ["m365-admin","service-owner"]
tags: ["teams","teams-phone","pstn","powershell","admin-center","licensing"]
sources:
  - title: "Configure Multi-line in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/multi-line"
    kind: "learn"
  - title: "Set-CsPhoneNumberAssignment"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumberassignment"
    kind: "learn"
  - title: "MC1253752"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1253752"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap item 557716"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557716"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-multi-line-call-history-tabs-in-the-calls-app"]
controls:
  - governs: "Whether a user has alternate phone numbers, and which"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Users > Manage users > user > Account tab > Assigned phone number > Assign alternate phone number"
      docs: "https://learn.microsoft.com/microsoftteams/multi-line"
    api:
      kind: "powershell"
      call: "Set-CsPhoneNumberAssignment -Identity <user> -TelephoneNumber <number> -NumberType <type> -AssignmentCategory Alternate"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumberassignment"
    note: "Teams Administrator, Teams Communications Administrator or Teams Telephony Administrator. The user needs a primary line first. Teams PowerShell module 7.6.0 or later."
  - governs: "Policies applied to an individual alternate number"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Users > Manage users > user > Account tab > Assigned phone number > alternate number > Policies > Assign policy > Assign policies"
      docs: "https://learn.microsoft.com/microsoftteams/multi-line"
    api:
      kind: "powershell"
      call: "Set-CsPhoneNumberPolicyAssignment -TelephoneNumber <number> -PolicyType <policy type> -PolicyName <policy name>"
      docs: "https://learn.microsoft.com/microsoftteams/multi-line"
    note: "Number-level policies do not fall back to the user's policies. Dial Out Restriction and Shared Call Routing Policy are PowerShell only. Assign policy appears when none are assigned; otherwise Edit policy opens the Edit policies panel."
  - governs: "Emergency locations assigned to alternate numbers"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Phone Numbers > phone number > Edit > Assign/unassign > Emergency location"
      docs: "https://learn.microsoft.com/microsoftteams/multi-line"
    api:
      kind: "powershell"
      call: "Set-CsPhoneNumberAssignment -TelephoneNumber <number> -LocationId <location id>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumberassignment"
    note: "The Assigned as column and its Alternate filter show alternate numbers. For Operator Connect numbers, the ability to set or change the emergency location depends on the operator; contact the operator for details."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2026-04-27T23:15:13"
changes:
  - date: "2026-11-24"
    note: "First briefing for Teams Phone multi-line, covering the alternate line limits, per-number policies and the admin controls."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 78 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: licensing model set to included, unsupported charging sentence removed, primary-line removal qualified, Operator Connect emergency-location caveat and MC1253752 rollout wording added."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the emergency-location control row: its PowerShell side is now Set-CsPhoneNumberAssignment with -LocationId, not Get-CsPhoneNumberAssignment, which only displays phone numbers."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 94 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 94
  confirmed: 94
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "23148ca1fe0d7e693c9221cdf8b2c493"
---

## What's changing

Teams Phone multi-line lets an administrator assign more than one phone number to a single Teams Phone user. Microsoft Learn calls the extra numbers *alternate lines*. The user keeps one Teams account and can receive calls on every assigned number and, on supported clients, choose which number to call from.

The roadmap item and Microsoft's notice MC1253752 say administrators can assign up to 10 numbers per user. Learn counts differently: up to 11 numbers including the primary line and a private line, which is one primary line, one private line and up to nine alternate lines. The numbers can be in different countries and use different connectivity types (Calling Plan, Direct Routing, Operator Connect, and at most one Teams Phone Mobile number).

On the client, Learn says each alternate number appears as a separate tab in the Calls app on Teams desktop and web, and that users pick an outgoing line with the **Call As** dropdown or the line-specific tabs. Learn marks Teams mobile (iOS and Android) as "Coming soon" for outbound use: for now alternate lines can receive inbound calls there but cannot be selected for outbound calls. The roadmap platforms are Desktop, Mac and Web, and MC1253752 is scoped to Teams for Windows, Mac and the web, although the roadmap description also mentions mobile and devices.

The roadmap item is Launched, with a target of April CY2026 and the phases General Availability and Targeted Release. MC1253752 (published 2026-03-16) gave a Targeted Release rollout from early to late April 2026 and General Availability (Worldwide) from late April to mid-May 2026. It sets no act-by date and says no action is required before rollout. It also says the feature is off by default and the admin must configure it before users see it.

## Why it matters

This is a telephony change that an administrator controls number by number. Nothing reaches users until an admin assigns an alternate number, so the exposure is in how it is used: each extra number is a new way to reach the user, a new outbound identity, and a new emergency-calling and routing configuration to maintain.

Plan for the support side before the first assignment. Learn says some policies must be set at number level and do not fall back to the user's policies, voicemail is shared across all lines without showing which number was dialled, and system deprovisioning that removes a user's primary line also removes their alternate lines. For manual unassignment, Learn says administrators must remove all alternate numbers before removing the primary number. Teams phone owners should decide who may request extra numbers and who checks each one before it goes live.

## Risk assessment

**Data exposure**

- Calls to every alternate number ring the same user, and call history is unified across lines with identifiers showing which number was used (Learn). Check that call-history access suits users who now carry several business identities.
- All lines share one voicemail box, and notifications do not show which number the caller dialled, so a message left on a departmental number lands in the user's single mailbox.

**Security & identity**

- Each alternate number needs an emergency location that Learn says must match the number's country location. A wrong or missing location affects emergency call handling for that number.
- Number-level policies, including the Calling Line Identity (caller ID) policy, are set per alternate number and do not fall back to the user's policies. A number without them does not inherit the user's caller ID or dial restrictions.
- Learn says Direct Routing alternate numbers need an Online Voice Routing Policy and an Emergency Call Routing Policy, and that without a voice routing policy calls to and from Direct Routing numbers fail.

**Autonomy & actions**

- Call forwarding settings apply uniformly. Learn says if a user forwards the primary line to a number or delegate, calls to alternate lines are forwarded there too, which depending on licensing may result in extra cost.
- Learn says alternate lines cannot be added to call queues or auto attendants, and per-line delegation is not yet supported.

**Change & support**

- System deprovisioning that removes the primary line also removes alternate lines; Learn lists licence removal, port-out, number-type migration and a usage-location change as system provisioning events that can remove the primary line. For manual unassignment, Learn says administrators must remove all alternate numbers before removing the primary number.
- Changing or unassigning an alternate number removes the policies assigned to it, so they have to be reassigned.
- Learn says multi-line is not supported for users located in India.

## Cost and licensing

Learn says alternate lines have the same licensing requirements as the user's primary phone number, and the supported licence combinations are Teams Phone (for Direct Routing, Operator Connect and Teams Phone Mobile numbers) and Teams Phone with Calling Plan (which adds Calling Plan numbers). MC1253752 says a Teams Phone licence is required. Learn points to its Microsoft Teams add-on licences page for licensing detail.

Learn's multi-line page states no separate price or meter for alternate lines at the time of writing (November 2026). Learn notes that forwarding calls on alternate lines to another number or delegate may result in extra cost, depending on licensing.

The indirect cost is admin time: assigning each number, setting its emergency location and setting its per-number policies.

## Scope

**Users and licences.** Teams Phone users who already have a primary line from their usage location and are voice enabled (Enterprise Voice on). Learn says a user can have one primary line and up to nine more alternate lines, with at most one Teams Phone Mobile number.

**Roles.** Learn lists Teams Administrator, Teams Communications Administrator and Teams Telephony Administrator. MC1253752 names the Teams Administrator role or equivalent permissions.

**Cloud and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and the platforms Desktop, Mac and Web. Learn says Teams for Windows, Mac and web fully support multi-line calling and that Teams mobile support for outbound alternate-line use is coming soon. Learn says multi-line is not supported for users in India.

**Prerequisites.** Teams PowerShell module 7.6.0 or later to use the updated Set-CsPhoneNumberAssignment cmdlet for alternate lines.

**Rollout.** MC1253752 planned Targeted Release from early April 2026, with expected completion by late April 2026, and General Availability (Worldwide) from late April 2026, with expected completion by mid-May 2026. The feature stays off for a user until an admin assigns an alternate number.

## Governance guidance

### Before rollout

- Decide which users need several business numbers and who approves requests, then confirm each has a primary line and a Teams Phone licence.
- Check that the Teams PowerShell module is version 7.6.0 or later wherever scripts assign alternate lines.
- List the number-level policies each alternate number needs (tenant dial plan, emergency policies, caller ID, voice routing) because they do not fall back to the user's policies.
- Exclude users located in India and plan other cases that Learn lists as unsupported: call queues, auto attendants and per-line delegation.

### At rollout

- Assign the first alternate numbers to a pilot group with the Teams admin center or Set-CsPhoneNumberAssignment, using the controls table.
- Set an emergency location that matches each number's country, and for Direct Routing numbers assign the Online Voice Routing Policy and Emergency Call Routing Policy. For Operator Connect numbers, the ability to set or change the emergency location depends on the operator; contact the operator for details.
- Assign number-level policies to each alternate number, then confirm callers see the intended outbound caller ID from the **Call As** dropdown.
- Tell pilot users that Teams mobile can receive calls on alternate lines but, per Learn, cannot yet select them for outbound calls, and that voicemail is shared.

### After rollout

- Review alternate numbers in the Manage users **Alternate phone number(s)** column or the Voice > Phone Numbers **Assigned as** filter.
- Recheck number-level policies after any change to a number, because changing or unassigning it removes them.
- Watch Message center and the Learn multi-line page for mobile, delegation and call queue support, and for Graph API support.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a user has alternate phone numbers, and which</strong><br><small>User</small><br><small class="controls__note">Teams Administrator, Teams Communications Administrator or Teams Telephony Administrator. The user needs a primary line first. Teams PowerShell module 7.6.0 or later.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Manage users › user › Account tab › Assigned phone number › Assign alternate phone number <a href="https://learn.microsoft.com/microsoftteams/multi-line" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsPhoneNumberAssignment -Identity &lt;user&gt; -TelephoneNumber &lt;number&gt; -NumberType &lt;type&gt; -AssignmentCategory Alternate</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumberassignment" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Policies applied to an individual alternate number</strong><br><small class="controls__note">Number-level policies do not fall back to the user's policies. Dial Out Restriction and Shared Call Routing Policy are PowerShell only. Assign policy appears when none are assigned; otherwise Edit policy opens the Edit policies panel.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Manage users › user › Account tab › Assigned phone number › alternate number › Policies › Assign policy › Assign policies <a href="https://learn.microsoft.com/microsoftteams/multi-line" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsPhoneNumberPolicyAssignment -TelephoneNumber &lt;number&gt; -PolicyType &lt;policy type&gt; -PolicyName &lt;policy name&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/multi-line" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Emergency locations assigned to alternate numbers</strong><br><small class="controls__note">The Assigned as column and its Alternate filter show alternate numbers. For Operator Connect numbers, the ability to set or change the emergency location depends on the operator; contact the operator for details.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Phone Numbers › phone number › Edit › Assign/unassign › Emergency location <a href="https://learn.microsoft.com/microsoftteams/multi-line" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsPhoneNumberAssignment -TelephoneNumber &lt;number&gt; -LocationId &lt;location id&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumberassignment" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Assignment is by an admin only: Learn lists the Teams Administrator, Teams Communications Administrator and Teams Telephony Administrator roles, and users cannot add numbers themselves. Nothing in the table is a tenant-wide on/off switch; MC1253752 describes the feature as off by default until an admin configures it.

Learn says the Dial Out Restriction (OnlineDialOutPolicy) and Shared Call Routing Policy cannot be assigned per number in the Teams admin center and need the Teams PowerShell module. Learn says all seven number-level policies can be assigned with PowerShell.

The multi-line page uses -PhoneNumber and -PhoneNumberType, which the cmdlet reference documents as aliases of -TelephoneNumber and -NumberType. Learn says multi-line management through the Graph API is not yet available.

## Open questions

- When will Teams mobile (iOS and Android) support choosing an alternate line for outbound calls, and the Teams Phone Mobile native dialer experience? Learn marks both as coming soon. Watch the Learn multi-line page and Message center.
- Will the stated limit be reconciled between the roadmap and Message center (up to 10 numbers) and Learn (up to 11 including the primary and private lines)? Watch the Learn multi-line page.
- When will per-line delegation, call groups, call queues and auto attendants support alternate lines? Learn lists them as not yet supported.
- Will Microsoft add Graph API support for multi-line management? Learn says it is not yet available.

<!-- rationale
risk: Medium. Alternate lines add numbers that need their own emergency location, and several policies must be set per number because they do not fall back to the user's policies.
cost: Low. Learn says alternate lines have the same licensing requirements as the user's primary number, so the visible cost is admin time; forwarding calls may add cost depending on licensing.
impact: Low. Only users an admin gives extra numbers notice it; Microsoft's notice says the feature is off by default and the admin must configure it.
-->
