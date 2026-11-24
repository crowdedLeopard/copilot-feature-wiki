---
title: "Microsoft Teams: meeting policy setting for numeric-only meeting passcodes"
slug: "microsoft-teams-admin-setting-for-simpler-meeting-passcodes-numeric-only"
roadmapId: 555858
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "A Teams meeting policy setting, off by default, lets admins switch meetings scheduled by chosen users to 8-digit numeric-only passcodes. Nothing changes until an admin enables it; doing so lowers passcode strength."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: the Teams meeting policy pages read for this briefing name no licence for this setting, and neither does the roadmap record."
audiences: ["m365-admin","security"]
tags: ["teams","meeting-policy","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 555858"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555858"
    kind: "roadmap"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Overview of meetings and events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/overview-meetings-events"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether meetings scheduled by a policy's users use numeric-only passcodes"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting join & lobby > Allow numeric-only meeting passcodes"
      docs: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -PasscodeComplexity NumericOnly"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Default is Off (PowerShell value Default). Applies to meetings scheduled after the setting is enabled; existing meetings are not affected."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-24"
    note: "First briefing for the numeric-only meeting passcode policy setting, now Launched on the roadmap."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 33 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 33
  confirmed: 30
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "bca92ccf546eb3dee963865d9398e6f7"
---

## What's changing

Microsoft Teams has a meeting policy setting, **Allow numeric-only meeting passcodes**, that makes meetings use 8-digit numeric-only passcodes instead of the system default of 8-character alphanumeric passcodes. Microsoft Learn lists the setting as **Off** by default, and the PowerShell reference says the same. When an admin turns it on for a policy, it applies to meetings scheduled by the users to whom that policy applies, and only to meetings scheduled after the setting is enabled. Existing meetings are not affected.

The roadmap item describes the setting as available to tenant admins for meetings organised by selected users or groups, and says that enabling it displays a warning and requires explicit confirmation because numeric-only passcodes increase the risk of unauthorised access. Microsoft's PowerShell reference makes the same security point and says numeric-only passcodes do not align with Microsoft's recommended meeting security best practices.

The roadmap record gives the status as Launched, with a target date of April CY2026, release phases General Availability and Targeted Release, and the Desktop platform. The clouds listed are Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

## Why it matters

This is a control that lets you trade passcode strength for convenience, for example where people have to type a passcode on a phone keypad or read it out. It does nothing until an admin enables it, so the decision is yours: the setting only has a security cost if you switch it on.

Microsoft has not stated that anything changes for a tenant that leaves it alone, and the Learn pages give the default as Off. The practical task is to decide whether any group of organisers has a real need, and to keep the setting off for everyone else.

## Risk assessment

**Data exposure**
- Enabling the setting lowers passcode complexity for meetings scheduled afterwards by users with that policy. The Learn settings reference says numeric-only passcodes have lower complexity and increase the risk of unauthorised access to meetings, so meeting content and chat are easier to reach for someone who obtains or guesses a meeting ID.
- Meetings already scheduled keep their passcodes, so the exposure begins only with newly scheduled meetings.

**Security & identity**
- The Set-CsTeamsMeetingPolicy reference describes NumericOnly as lower complexity than the default and not aligned with Microsoft's recommended meeting security best practices. Limit it to the smallest set of organisers through the policy you assign.
- Where a user has the setting enabled, expect their external and anonymous-facing meetings to be the ones where a weaker passcode matters most.

**Autonomy & actions**
- No change: the setting changes how a passcode is generated and does not add an agent or automated action.

**Change & support**
- Organisers whose meetings switch to numeric passcodes may see different join details from colleagues on the global policy. A user can be assigned only one meeting policy at a time, so a separate custom policy is needed for the group that gets the setting.
- Reverting the policy to the default value returns newly scheduled meetings to alphanumeric passcodes; the reference states that existing meetings are not affected by changes to the setting.

## Cost and licensing

Microsoft Learn names no licence or meter for this setting at the time of writing (November 2026), and the roadmap record names none, so licensing is not yet published. Treat the cost as admin time to choose which users get the policy and to communicate the change.

The pages read describe the setting as part of the Teams meeting policy and give no price, credit rate or limit for it.

## Scope

The setting sits in a Teams meeting policy, so it applies to meetings scheduled by the users to whom that policy is assigned. Users get the global policy unless you create and assign a custom policy, and a user can have one meeting policy at a time.

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with the Desktop platform and release phases General Availability and Targeted Release. Status is Launched, with a target date of April CY2026.

## Governance guidance

### Before rollout
- Decide which organisers, if any, have a real need for numeric-only passcodes, and record who approved the weaker passcode for them.
- Create a custom meeting policy for those users rather than changing the global policy, so the setting does not reach everyone (see the first controls row).
- Confirm the setting is still **Off** in the global policy and in your existing custom policies.

### At rollout
- Set **Allow numeric-only meeting passcodes** on the custom policy in the Teams admin center, or set `-PasscodeComplexity NumericOnly` in PowerShell, and assign the policy to the chosen users.
- Tell the affected organisers that only meetings scheduled after the change use the new passcode format.

### After rollout
- Review which policies have the setting on, and turn it off with `-PasscodeComplexity Default` when the need ends.
- Re-check the Learn settings reference for changes to the setting's behaviour or defaults.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether meetings scheduled by a policy's users use numeric-only passcodes</strong><br><small>User</small><br><small class="controls__note">Default is Off (PowerShell value Default). Applies to meetings scheduled after the setting is enabled; existing meetings are not affected.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting join &amp; lobby › Allow numeric-only meeting passcodes <a href="https://learn.microsoft.com/microsoftteams/settings-policies-reference" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -PasscodeComplexity NumericOnly</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting is per policy, not a single tenant switch: it takes effect for users who have a policy with it enabled. The Learn pages read for this briefing describe both the admin centre option and the PowerShell parameter on the same meeting policy.

The roadmap item says enabling the setting displays a warning and requires explicit confirmation. The role needed to edit meeting policies is not covered on the pages read.

## Open questions

- Which licences, if any, does Microsoft attach to this setting? Watch the Teams settings and policies reference and Microsoft 365 licensing pages.
- Does the setting apply when a delegate or another user schedules a meeting on an organiser's behalf? Watch the Teams meeting policies pages.
- Is any audit event recorded when an admin changes the setting? Watch the Teams admin audit documentation.
- Will Microsoft change the default or add a tenant-wide block for numeric-only passcodes? Watch the Microsoft 365 roadmap item and Message center.

<!-- rationale
risk: Low. The setting is off by default, so passcodes stay at the system default until an admin enables it; enabling it deliberately lowers passcode complexity for newly scheduled meetings.
cost: Low. The only cost the sources show is admin time to decide who needs it; a licence for this setting is not yet published.
impact: Low. Admins and the organisers they assign the policy to notice it; no change reaches other users unless the setting is turned on.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls: Admin UI / admin-path: The route is Teams admin center > Meetings > Meeting policies > policy > Meeting join & lobby > Allow numeric-only meeting passcodes. | Found: Choose the policy by clicking to the left of the policy name, and then select Edit. | Fix: Replace the structured and rendered path with 'Meetings > Meeting policies > policy > Edit > Meeting join & lobby > Allow numeric-only meeting passcodes'. Keep the settings reference as docs and the cited meeting-policies-overview source: it supplies the required Edit step. | Source: https://learn.microsoft.com/microsoftteams/meeting-policies-overview
- [contradicted, blocker] Open questions: delegated scheduling / absence: The briefing leaves the application of the meeting policy when an authorised delegate schedules on an organiser's behalf undocumented. | Found: When a delegate authorized to send meeting invitations for someone else sends a meeting, the meeting policy applies to the person who granted the delegate permission. | Fix: Replace the delegated-scheduling open question with 'When an authorised delegate sends a meeting invitation for someone else, the meeting policy applies to the person who granted the delegate permission.' Cite https://learn.microsoft.com/microsoftteams/manage-who-can-schedule-meetings. Do not claim that the page separately documents a numeric-passcode-specific delegation exception. | Source: https://learn.microsoft.com/microsoftteams/manage-who-can-schedule-meetings
- [contradicted, blocker] Open questions: audit event / absence: Whether any audit event records an administrator changing this setting is presented as unpublished. | Found: Teams Admin Action | TeamsAdminAction | Logged when a Teams admin performs actions like updating, adding, or deleting Teams related settings or configurations using admin tools like PowerShell, Admin Center, API, etc. | Fix: Replace the audit open question with 'Microsoft documents TeamsAdminAction for Teams administrators updating, adding or deleting Teams settings or configurations through PowerShell, the admin centre or APIs.' Cite https://learn.microsoft.com/purview/audit-log-activities#teams-activities. If retaining an open question, narrow it to 'Which event details identify a change to PasscodeComplexity?' | Source: https://learn.microsoft.com/purview/audit-log-activities#teams-activities
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because no licence specific to the numeric-only passcode setting is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included'. Replace the licensing notes and licensing sentence with 'Users need a Microsoft Teams product license to use Teams, except when joining meetings anonymously. Microsoft has not published a licence requirement specific to the numeric-only passcode setting at the time of writing (November 2026).' Cite https://learn.microsoft.com/microsoftteams/user-access. In the cost rationale, replace 'a licence for this setting is not yet published' with 'no licence requirement specific to this setting is published'. Narrow the licensing open question to 'Will Microsoft publish a licence requirement specific to this setting?' | Source: https://learn.microsoft.com/microsoftteams/user-access
-->
