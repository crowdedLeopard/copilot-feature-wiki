---
title: "Microsoft Teams: upgraded call history in the Calls app"
slug: "microsoft-teams-upgraded-call-history-in-teams-calls-app"
roadmapId: 570843
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Calls app call history merges a missed call and its voicemail into one entry and grows from 100 records to up to 3,000 records or 6 months. It is rolling out now; Microsoft says no admin action is required."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn describes the Calls app, with call history and voicemail, as part of native Teams calling for Teams users. A licence or price specific to this upgrade is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["teams","teams-phone","user-experience","retention","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 570843"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570843"
    kind: "roadmap"
  - title: "MC1485056: Upgraded call history in Teams Calls app"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1485056"
    kind: "message-center"
  - title: "Teams calling overview"
    url: "https://learn.microsoft.com/microsoftteams/cloud-voice-landing-page"
    kind: "learn"
  - title: "Calling policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    kind: "learn"
  - title: "Learn about retention for Microsoft Teams"
    url: "https://learn.microsoft.com/purview/retention-policies-teams"
    kind: "learn"
  - title: "Whether users can use calling at all, including seeing the Calls app (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    kind: "learn"
  - title: "Whether inbound calls can route to voicemail (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/set-up-phone-system-voicemail"
    kind: "learn"
videos: []
related: ["microsoft-teams-multi-line-call-history-tabs-in-the-calls-app","ediscovery"]
controls:
  - governs: "Whether users can use calling at all, including seeing the Calls app"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Make private calls"
      docs: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity Global -AllowPrivateCalling $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    note: "Existing control, not specific to call history. Turning it off removes all Teams calling functionality, including the Calls app, for users on that policy."
  - governs: "Whether inbound calls can route to voicemail"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Voicemail for inbound calls"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-phone-system-voicemail"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity Global -AllowVoicemail AlwaysDisabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-phone-system-voicemail"
    note: "Existing control, not specific to call history. It changes whether voicemails are left, not how they are displayed in the Calls app."
  - governs: "Switch to turn the upgraded call history on or off for a tenant or user"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026). MC1485056 says no admin action is required."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-22"
    note: "First briefing for the Calls app call history upgrade: rolling out in November 2026, no admin action required, no dedicated admin setting documented."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 46
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "214299852145d8bb7016fc2f870860e4"
---

## What's changing

Call history in the Teams Calls app is being upgraded so that users can find and act on past calls more easily. The roadmap item says missed calls and their associated voicemails will be consolidated into a single call history entry, and that call history will grow from 100 records to up to 3,000 records or 6 months of history, whichever limit is reached first.

Microsoft's notice MC1485056, published 1 October 2026, gives the rollout window. Targeted Release (Worldwide) begins in mid-November 2026 and is expected to finish in mid-November 2026. General Availability (Worldwide) begins in early November 2026 and is expected to finish in late November 2026. The notice says no admin action is required before rollout, and suggests informing users and updating internal support guidance.

The roadmap item has the status Rolling out, with a target date of November CY2026, and lists Desktop, Mac and Web as platforms. It is listed for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Microsoft Learn has no page about this upgrade yet, so how the consolidated entry looks and behaves is known only from the roadmap and the notice.

## Why it matters

Every user who opens the Calls app will see a different history list: fewer rows for missed calls that left a voicemail, and a much longer list overall. For a help desk, that is the main change. Questions such as "where did my voicemail row go?" or "why does my history go back months now?" are likely, so brief users and update support guidance before the rollout reaches your tenant.

Microsoft has described no admin setting for this upgrade, so if nobody acts the change still arrives, in line with the notice's "no admin action is required". The practical work is communication, plus a check that your retention and eDiscovery expectations for Teams call logs are still what you intend.

## Risk assessment

**Data exposure**
- Each user's Calls app can show up to 3,000 records or 6 months of call history, where it showed 100 records before. The roadmap item describes a display limit. Microsoft Learn's retention page says Teams call logs are retained indefinitely by default, and that a retention policy for call logs is the way to delete them. Whether this upgrade changes retention is not stated in the sources.
- On shared or unattended computers, a longer history is visible to whoever uses that signed-in Teams session.

**Security & identity**
- No change stated: the notice identifies no compliance considerations and describes no new permissions or sign-in behaviour.

**Autonomy & actions**
- No change stated: the upgrade changes how history is displayed and gives users a way to follow up on missed calls and voicemails. The sources describe no automated actions.

**Change & support**
- Missed calls and their voicemails appear as one entry, so users who scan the list for separate voicemail rows will look in a different place. Update support scripts for the Calls app on Desktop, Mac and Web.
- Rollout is staged: Targeted Release (Worldwide) in mid-November 2026 and General Availability (Worldwide) from early to late November 2026, so users in one tenant may see the change on different days.

## Cost and licensing

**Licence.** The Teams calling overview on Microsoft Learn says the Calls app lets users place calls to other Teams users, view call history and access voicemail that is automatically set up for all Teams users. The roadmap item and MC1485056 name no licence for the upgrade. A licence requirement specific to this upgrade is not yet published.

**Meter.** The roadmap item and notice describe no meter or charge for the upgraded call history.

**Indirect cost.** Admin and help-desk time to brief users and update support guidance, which the notice recommends. The sources state no storage or other cost.

## Scope

The notice names users of the Microsoft Teams Calls app as the people affected. The roadmap record lists Desktop, Mac and Web as platforms, and Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as clouds, with release phases General Availability and Targeted Release.

The calling policy setting **Make private calls** controls whether users see the Calls app at all: with it off, users with that policy cannot see the Calls app in their Teams client. By default, Microsoft Teams native calling is turned on via policy for all users. No admin role or prerequisite is named for the upgrade itself.

## Governance guidance

### Before rollout
- Brief service desk staff on the consolidated missed call and voicemail entry and on the 3,000-record or 6-month history, using the rollout dates in MC1485056.
- Check which Teams calling policies turn off **Make private calls**, because users on those policies do not see the Calls app and will not see this change.
- Confirm with your compliance team how Teams call logs are covered by your Microsoft Purview retention policies and eDiscovery practice, given that the display limit is changing.

### At rollout
- Send users a short note that missed calls and voicemails now appear as one entry in the Calls app and that the history list is longer.
- Collect early help-desk tickets about the Calls app on Desktop, Mac and Web, to spot gaps in your support guidance.

### After rollout
- Review whether any user questions point to a retention or privacy concern about the longer history, and raise them with the Microsoft 365 compliance owner.
- Watch Message center and the roadmap item 570843 for status changes and for any Microsoft Learn page that documents the feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use calling at all, including seeing the Calls app</strong><br><small>User</small><br><small class="controls__note">Existing control, not specific to call history. Turning it off removes all Teams calling functionality, including the Calls app, for users on that policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Make private calls <a href="https://learn.microsoft.com/microsoftteams/teams-calling-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -AllowPrivateCalling $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether inbound calls can route to voicemail</strong><br><small>User</small><br><small class="controls__note">Existing control, not specific to call history. It changes whether voicemails are left, not how they are displayed in the Calls app.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Voicemail for inbound calls <a href="https://learn.microsoft.com/microsoftteams/set-up-phone-system-voicemail" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -AllowVoicemail AlwaysDisabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-phone-system-voicemail" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to turn the upgraded call history on or off for a tenant or user</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026). MC1485056 says no admin action is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns this upgrade on or off, so the two rows below are today's alternatives. They do not change how the upgraded history looks.

**Make private calls** is all-or-nothing: Microsoft's calling policy page says it controls all calling capabilities in Teams, and the calling overview says users with it off cannot see the Calls app. Use it only if you intend to remove calling from those users. **Voicemail for inbound calls** controls whether calls route to voicemail, not how history is displayed.

Call log retention is set in Microsoft Purview, not in the Teams admin center. The retention page says Teams call logs are retained indefinitely by default and that a retention policy for call logs deletes them; see the [Teams retention page](https://learn.microsoft.com/purview/retention-policies-teams). Both calling policy settings are changed by someone with a Teams administration role; Microsoft's calling overview says a privileged role is needed to administer Teams features.

## Open questions

- Does the consolidated call history entry change how Teams call logs and voicemails are retained, or how they appear in eDiscovery searches? Watch the Teams retention page on Microsoft Learn and Message center.
- Will Microsoft add an admin setting or policy for the call history upgrade, or is it a user-side change for all users? Watch Message center and roadmap item 570843.
- Will a Microsoft Learn page describe the Calls app call history, including how a missed call with a voicemail is shown, and do GCC, GCC High and DoD tenants get the same timing as Worldwide? The roadmap lists all four clouds, but the notice gives dates for Worldwide only.
- Is there a licence or plan requirement specific to the upgraded call history? Watch the Teams Phone licensing page and the roadmap item.

<!-- rationale
risk: Low. The change reshapes how existing call history is shown to users; Microsoft's notice MC1485056 identifies no compliance considerations and no admin action.
cost: Low. The only cost the sources show is admin and help-desk time to brief users; a licence or meter specific to this feature is not yet published.
impact: High. It changes what every user of the Calls app sees in call history by default, as missed calls and voicemails merge into one entry and the history list grows.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: An administrator reaches Make private calls through Teams admin center > Voice > Calling policies > policy > Make private calls. | Found: In the left navigation of the Microsoft Teams admin center, select Voice > Calling policies. Select the policy or policies that you want to modify, and then select Edit. | Fix: Replace controls[0].ui.path and its rendered table path with 'Voice > Calling policies > policy > Edit > Make private calls'. The cited page requires selecting Edit after choosing the existing policy. | Source: https://learn.microsoft.com/microsoftteams/teams-calling-policy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model, licensing.notes; Cost and licensing / licensing: The upgrade is an included option in native Teams calling rather than a separately documented entitlement. | Found: The Microsoft Teams Enterprise license includes native calling features, and the Teams Phone license unlocks even more features. | Fix: Keep model included. Add to licensing notes and the Licence paragraph: 'The Microsoft Teams Enterprise license includes native calling features.' Cite https://learn.microsoft.com/microsoftteams/here-s-what-you-get-with-phone-system in sources; retain the narrower statement that no requirement specific to this upgrade is published. | Source: https://learn.microsoft.com/microsoftteams/here-s-what-you-get-with-phone-system
- [supported, minor] controls[1].ui; Governance controls table / admin-path: An administrator reaches Voicemail for inbound calls through Teams admin center > Voice > Calling policies > policy > Voicemail for inbound calls. | Found: go to Voice > Calling Policies Choose the policy you would like to update or select Add to create a new policy. For Voicemail for inbound calls, select one of the following options: | Fix: The voicemail page supports the printed route, but https://learn.microsoft.com/microsoftteams/teams-calling-policy explicitly requires Edit for an existing policy. Replace controls[1].ui.path and its rendered path with 'Voice > Calling policies > policy > Edit > Voicemail for inbound calls', retaining both cited pages. | Source: https://learn.microsoft.com/microsoftteams/set-up-phone-system-voicemail
- [supported, minor] Governance controls / applicability: Teams call log retention is managed through Microsoft Purview rather than the Teams admin center. | Found: This separate retention policy for call logs can be created and modified only by using PowerShell. After you create the retention policy for Teams call logs, it's displayed in Data Lifecycle Management > Policies in the Microsoft Purview portal, where it's visible but read-only. | Fix: Cite https://learn.microsoft.com/purview/create-retention-policies in sources and beside the sentence about where retention is managed. To make the surface unambiguous, replace that sentence with 'Teams call log retention policies are created and modified only with PowerShell and are visible but read-only in the Microsoft Purview portal.' | Source: https://learn.microsoft.com/purview/create-retention-policies
- [contradicted, minor] Governance guidance: Before rollout / consistency: Every control the checklist asks administrators to check appears in the controls table. | Found: Confirm with your compliance team how Teams call logs are covered by your Microsoft Purview retention policies and eDiscovery practice The table lists calling availability, inbound voicemail routing and an undocumented upgrade switch, but no retention control. | Fix: The Before rollout bullet asking readers to confirm coverage by Microsoft Purview retention policies has no corresponding controls row. Remove that checklist bullet; retain the already documented retention explanation and open question. Do not add a control row as part of this correction.
-->
