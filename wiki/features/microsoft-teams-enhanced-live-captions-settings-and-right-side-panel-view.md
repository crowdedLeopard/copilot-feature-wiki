---
title: "Microsoft Teams: live captions get a right-side panel and one settings menu"
slug: "microsoft-teams-enhanced-live-captions-settings-and-right-side-panel-view"
roadmapId: 567462
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams live captions gain a right-side panel and a settings menu in the captions pane. Microsoft's notice says no admin action is required and existing caption policies are unchanged; help desks should be briefed."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Microsoft's notice says users can only reach features that their licensing, service availability and Teams policy allow. Live translated captions need a Teams Premium licence held by the organiser, with an exception for large-audience events (see Cost and licensing). Teams Premium is an add-on, not a replacement for the Teams licence. A price for the new panel or menu is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","accessibility","meeting-policy","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Roadmap item 567462"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567462"
    kind: "roadmap"
  - title: "MC1447682: (Updated) Microsoft Teams: Enhanced live captions settings and right-side panel view"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1447682"
    kind: "message-center"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Release notes for Microsoft Teams admin features"
    url: "https://learn.microsoft.com/officeupdates/teams-admin"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-admins-can-control-profanity-filtering-in-meeting-transcripts","meeting-transcripts"]
controls:
  - governs: "Whether users can turn on live captions in meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Live captions"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -LiveCaptionsEnabledType Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing policy; the value DisabledUserOverride is the default. MC1447682 says automatic start is subject to meeting policies. Live translated captions need the policy not set to Off."
  - governs: "Tenant switch for the right-side captions panel or the automatic-start toggle"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026). MC1447682 says existing administrator controls are unchanged."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-12T22:47:48"
changes:
  - date: "2026-11-21"
    note: "New briefing: right-side live captions panel and consolidated captions settings menu, rolling out with General Availability finishing by the end of November 2026."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected: live translated captions licence now carries the large-audience-event exception; Teams Premium described as an add-on; rollout wording says General Availability is expected to finish by the end of November 2026."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 77
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "9952d2e46282a53f04cc1aed7def5eb5"
---

## What's changing

Teams live captions get a new right-side panel layout and a single settings menu. The roadmap item says users can already choose to show captions at the top or bottom of the screen, or pop them out into a separate window, and the right-side panel is an additional option. Microsoft's notice MC1447682 says the panel keeps captions visible without overlapping meeting video or shared content.

The gear icon in the captions pane now opens a consolidated menu. Microsoft's notice lists these items: spoken language, translation language, caption display styles, profanity filtering and **Automatically turn on live captions**. The notice says the translation language setting is synchronised, so users no longer configure Interpreter and translated captions separately. The pane also gets thumbs-up and thumbs-down controls for feedback on the captioning experience.

The automatic-start option is a user-level preference. According to the notice, it starts live captions for that user in future meetings, subject to the meeting policies and feature availability the organisation has configured. The notice also states that the update does not change existing administrator controls or policies for live captions, translated captions or Interpreter.

The roadmap status is Rolling out, with a target date of August CY2026. MC1447682 (published 2026-08-05, last updated 2026-11-03) gives Targeted Release as beginning mid-August 2026. Targeted Release was expected to complete by late August 2026. General Availability for Worldwide, GCC, GCC High and DoD is expected to complete by the end of November 2026, previously the end of October, beginning mid-September 2026. The notice sets no act-by date. Microsoft Learn has no page for this feature yet, so what is described above is the roadmap and notice description.

## Why it matters

No administrator has to act, but the change reaches users on its own. Microsoft's notice says the feature is enabled automatically as rollout reaches an organisation, so expect users to find a new layout and a new menu in the middle of a meeting, and expect some to turn on automatic captions for every future meeting.

The practical effect is on support and accessibility guidance rather than on data or spend. Help desks need to know where caption settings now live and that the translation language is shared between Interpreter and translated captions. The existing live captions meeting policy continues to decide whether users can turn captions on at all, so check that its setting matches what you want users to see.

## Risk assessment

**Data exposure**

- No new data access is described. The Learn page for admins says Teams does not save live captions, and the notice describes layout and settings changes only.
- The existing option that lets organisers stop participants copying or forwarding live captions is a separate per-organiser setting; the notice does not say whether it applies to the new panel.

**Security & identity**

- No change: the notice states that existing administrator controls and policies are unchanged and that users can only reach features their licensing, service availability and Teams policy permit.

**Autonomy & actions**

- **Automatically turn on live captions** starts captions for a user in future meetings without a per-meeting choice. The notice says this is subject to the organisation's meeting policies, so the **Live captions** meeting policy set to **Off** is the control that applies.

**Change & support**

- Users will find caption settings in a new place, and the translation language is now shared between Interpreter and translated captions. Brief the help desk before the expected General Availability completion at the end of November 2026.
- Learn's release notes say the default for the live captions profanity filter changed from On to Off for users who had never set it. Users who now see unfiltered captions may raise it with support when they find the profanity filtering option in the new menu.

## Cost and licensing

Microsoft's notice says users can only access features permitted by their organisation's licensing, service availability and Teams policy, and that the organisations affected are those with live captions and translated captions enabled through existing Teams policies and licensing.

The Learn page on managing transcription and captions says the meeting or event organiser must have a Teams Premium licence for attendees to use live translated captions. For events optimised for large audiences, such as town halls, organisers can preselect up to ten languages for attendees to use during the event without Teams Premium. Learn's Teams Premium licensing page says Teams Premium is an add-on licence to Teams and does not replace the Teams licence. A separate licence, meter or price for the right-side panel, the consolidated menu or the automatic-start option is not yet published; the roadmap item and the notice name none. The visible cost is admin time to update support guidance.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with release phases General Availability and Targeted Release. The record lists the Desktop and Mac platforms; MC1447682 says Windows, Mac and web clients where live captions are supported, and names calls, meetings and events as the services affected. Treat the notice as the later statement for platforms.

The notice says the people affected are meeting participants who use live captions or translated captions. Admins use the existing Teams admin center meeting policy to decide whether users can use live captions. Automatic start is a per-user preference and no administrator role is needed to use it.

## Governance guidance

### Before rollout

- Brief the help desk and update meeting and accessibility guidance to describe the right-side panel, the gear-icon menu and the **Automatically turn on live captions** option, as the notice recommends.
- Check the **Live captions** setting in each Teams meeting policy (Teams admin center > Meetings > Meeting policies), since automatic start is subject to it.
- Review who holds Teams Premium licences if your organisers rely on live translated captions outside the large-audience-event exception described under Cost and licensing.

### At rollout

- Tell users that translation language selections are now shared between Interpreter and translated captions.
- Watch Message center for further updates to MC1447682, which moved the General Availability end date from the end of October to the end of November 2026.

### After rollout

- Collect help desk questions about the new menu and the automatic-start option, and update guidance.
- Re-check the meeting policy assignments for users who report that captions cannot be turned on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can turn on live captions in meetings</strong><br><small>User</small><br><small class="controls__note">Existing policy; the value DisabledUserOverride is the default. MC1447682 says automatic start is subject to meeting policies. Live translated captions need the policy not set to Off.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Live captions <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -LiveCaptionsEnabledType Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for the right-side captions panel or the automatic-start toggle</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026). MC1447682 says existing administrator controls are unchanged.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The **Live captions** meeting policy decides whether users can turn captions on in meetings they attend. Learn describes it as a per-user policy, with the default **Not enabled, but users can enable**. The Teams settings and policies reference instead labels the Live captions default "Off, but organizers and co-organizers can turn them on". Live translated captions require this policy to be set to **Not enabled, but users can enable**, so setting it to **Off** also turns off live translated captions.

Microsoft Learn documents no separate switch for the right-side panel or the automatic-start toggle at the time of writing (November 2026), and the notice says existing administrator controls are unchanged. The admin profanity setting that Learn's release notes describe applies to transcripts, and the same notes say live captions continue to follow each participant's own profanity setting, so it is not a control over the profanity option in the new menu.

## Open questions

- Is there any admin setting that turns off the right-side panel or the **Automatically turn on live captions** option separately from the **Live captions** meeting policy? Watch the Learn page on managing transcription and captions and MC1447682.
- Does the setting that stops participants copying or forwarding live captions cover the right-side panel? Watch the Learn page on managing chat for sensitive Teams meetings.
- Will Microsoft publish a licence or price specific to the new panel and menu? Watch Message center and the Teams Premium licensing page.
- Do the new layout and menu apply to captions in calls as well as meetings? The notice lists calls among the affected services but does not say.

<!-- rationale
risk: Low. The change is a new layout and a consolidated settings menu for captions; Microsoft's notice MC1447682 says existing administrator controls and policies are unchanged and that access stays subject to Teams policy.
cost: Low. The only cost the sources show is admin time to brief support teams; live translated captions already need a Teams Premium licence for the organiser (town-hall style large-audience events excepted), and a price for the new panel or menu is not yet published.
impact: Medium. Users who use live captions will see a new layout option, a new gear-icon menu and a thumbs-up and thumbs-down feedback control, and may ask the help desk about them.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks administrators to review Teams Premium licence holders, but the controls table has no licensing-review row. | Found: Review who holds Teams Premium licences if your organisers rely on live translated captions outside the large-audience-event exception. Table rows: Whether users can turn on live captions in meetings; Tenant switch for the right-side captions panel or the automatic-start toggle. | Fix: Remove the Before rollout checklist bullet beginning 'Review who holds Teams Premium licences'; retain the already supported licence requirement and event exception in Cost and licensing.
-->
