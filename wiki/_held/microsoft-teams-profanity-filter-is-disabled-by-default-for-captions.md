---
title: "Microsoft Teams: live captions profanity filter now off by default"
slug: "microsoft-teams-profanity-filter-is-disabled-by-default-for-captions"
roadmapId: 560323
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams changes the default for the live captions profanity filter from On to Off for users who never set it. Captions may show unfiltered profanity; prepare users and check what admins can control."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Teams and Surface Devices","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Teams Rooms and Copilot overview lists live meeting captions and transcript under Microsoft Teams in its feature-versus-licence table. No licence or price specific to this default change is published."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["teams","teams-rooms","accessibility","meeting-policy","live-captions","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 560323"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560323"
    kind: "roadmap"
  - title: "Release notes for Microsoft Teams admin features"
    url: "https://learn.microsoft.com/officeupdates/teams-admin"
    kind: "learn"
  - title: "Release notes for Government Channel releases"
    url: "https://learn.microsoft.com/officeupdates/governmentchannel"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Teams Rooms and Copilot overview"
    url: "https://learn.microsoft.com/microsoftteams/rooms/copilot-admin-mtr"
    kind: "learn"
videos: []
related: ["microsoft-teams-admins-can-control-profanity-filtering-in-meeting-transcripts","microsoft-teams-enhanced-live-captions-settings-and-right-side-panel-view","meeting-policy","meeting-transcripts"]
controls:
  - governs: "Whether users can turn live captions on in meetings and events (blunt alternative; does not set the profanity filter)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Live captions"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -LiveCaptionsEnabledType Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing control, not the profanity filter. Off removes live captions for users with the policy. Call captions use a separate calling policy."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: the captions profanity filter default moves from On to Off, with what the Live captions policy does and does not cover."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 5 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 41
  unconfirmed: 5
  contradicted: 2
  attempts: 1
  hash: "2fe103227865aa2c3336c87f929c88be"
---

## What's changing

Microsoft is changing the default profanity filter setting for live captions from On to Off across Teams meetings, calls, events and Microsoft Teams Rooms (MTR) devices. The roadmap item gives the reasons as improving accessibility and aligning with EU requirements.

The change affects only users who have never configured their live captions profanity filter preference. Users who have already set a preference keep it, and users can change the preference in settings at any time. Microsoft's description warns that some users may begin seeing unfiltered profanity in live captions by default after the rollout.

The roadmap record shows the item as Launched with a target of June CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android, Desktop, iOS, Mac, Teams and Surface Devices, and Web. The Teams admin release notes list it under June 17, 2026. No Message Center post was supplied with this item, so no act-by date is known.

Microsoft Learn has no dedicated page for this default. What follows about how it behaves is the roadmap and release-note description.

## Why it matters

This is a default change that arrives without any admin action, so the first people to notice are users in meetings: captions that were masked for them before can now show profanity as spoken. Environments with conduct policies, shared meeting rooms or education settings should expect questions.

The wiki's view is that this is a communication task rather than a configuration task. An administrator can tell users that the preference is theirs to set, and can check what the policy controls do and do not cover. Which settings menu holds the preference, and whether an admin can set it centrally, is not documented in the pages read, so confirm both before telling users where to click.

## Risk assessment

**Data exposure**

- No change to what data captions read or store: the Teams admin documentation says Teams doesn't save captions. The difference is how spoken words are displayed to people already in the meeting.

**Security & identity**

- No change to identity or access. Unfiltered profanity in captions can reach users who never changed the setting; this is a conduct and communications concern, not an access one.

**Autonomy & actions**

- No change: nothing acts on its own. The setting changes what a captioning display shows.

**Change & support**

- Expect help-desk questions from users who see profanity where words were masked before. Users who set a preference keep it, so complaints will come from those who never opened the setting.
- Rooms are in scope: the roadmap item names Microsoft Teams Rooms devices, so shared room displays can show unfiltered captions to everyone in the room. Which preference a room device uses is not stated.

## Cost and licensing

Microsoft's Teams Rooms and Copilot overview lists "Live meeting captions and transcript" under Microsoft Teams in its feature-versus-licence table, so live captions are not shown as needing Teams Premium or Microsoft 365 Copilot there. Live translated captions are a separate Teams Premium feature, on the live captions section of the transcription and captions page, and this change does not touch them.

No meter, price or credit rate is attached to this default change in the roadmap record or in the pages read. The cost to plan for is admin time and user communication.

## Scope

Everyone who has never set a live captions profanity filter preference, in meetings, calls, events and Microsoft Teams Rooms devices, per the roadmap description. Users who already set a preference keep it.

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD; Android, Desktop, iOS, Mac, Teams and Surface Devices, and Web; with release phases General Availability and Targeted Release. The Government Channel release notes also list the item for GCC customers under Teams admin: June 17. No prerequisite or role requirement is stated.

## Governance guidance

### Before rollout

- Tell users, in the channel they read, that the live captions profanity filter now defaults to Off for anyone who never set it and that they can change it in settings.
- Brief the service desk on the change so that reports of unmasked words in captions are routed as expected behaviour rather than as faults.
- Check whether live captions are available to the users you care about, using the Live captions option in the meeting policy listed in the controls table.

### At rollout

- Ask pilot users and Teams Rooms owners what they see in captions on desktop, mobile and room devices.
- Record which users report masked and unmasked output so that you can tell users who set a preference from those who did not.

### After rollout

- Revisit the Teams admin release notes and Message center for any admin policy for the captions filter.
- Decide, for groups with strict conduct requirements, whether turning live captions off in a meeting policy is an acceptable stopgap, given that it removes captions for accessibility users too.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can turn live captions on in meetings and events (blunt alternative; does not set the profanity filter)</strong><br><small>User</small><br><small class="controls__note">Existing control, not the profanity filter. Off removes live captions for users with the policy. Call captions use a separate calling policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Live captions <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -LiveCaptionsEnabledType Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The meeting policy option **Live captions** decides whether users can turn live captions on at all. It is a per-user policy, and it is a blunt alternative: turning captions off does not change the profanity filter, and it removes captions for everyone assigned the policy.

The profanity filter for captions has a conflicting record. Microsoft's Teams Rooms release note on translated captions says IT admins can turn off the filtering of profanity in captions as necessary and points to the live captions and call captions pages. The Teams admin release note of November 04, 2026 says a meeting policy controls profanity masking in live transcription and saved transcripts, and that live captions continue to follow each participant's profanity setting. The live captions section of the transcription and captions page documents only the Live captions policy values, not a profanity option. The transcript policy is a separate feature: see /features/microsoft-teams-admins-can-control-profanity-filtering-in-meeting-transcripts/.

## Open questions

- Can an administrator set or lock the captions profanity filter centrally, given the Teams Rooms release note and the November 2026 Teams admin release note disagree? Watch the Teams admin release notes and the Teams Rooms release notes.
- Where in the Teams client and on room devices does a user change the live captions profanity preference, and does a room device use its own preference?
- Does a user's preference follow them across desktop, web, mobile and rooms, or is it set per device?
- Which release date applies to each cloud, given the roadmap target of June CY2026 and the Government Channel release notes listing it for GCC?

<!-- rationale
risk: Medium. Users who never set a preference may see unfiltered profanity in live captions, and Microsoft Learn documents no admin policy for the captions filter at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin time and user communication; no licence or meter is tied to this default change in anything read for this briefing.
impact: High. The default changes for every user who has never set the preference, across meetings, calls, events and Microsoft Teams Rooms devices.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: This default change does not change what data captions read. | Found: Searched: Teams live captions profanity filter default change translated captions data access identity. Opened teams-admin, meeting-transcription-captions and Microsoft's Use live captions support page; none states that the change leaves all data inputs and storage behaviour unchanged. | Fix: Replace the bullet with 'The Teams admin documentation says Teams does not save live captions.'
- [unsupported, major] Risk assessment: Security & identity / behaviour: The default change makes no change to identity or access. | Found: Searched: Teams live captions profanity filter default change translated captions data access identity. Opened teams-admin, meeting-transcription-captions and Microsoft's Use live captions support page; none explicitly describes the change's identity or access effects. | Fix: Remove 'No change to identity or access.' Keep the conduct and communications assessment grounded in users seeing unfiltered captions.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Nothing acts on its own as a result of this change. | Found: Searched: Teams live captions profanity filter default change translated captions data access identity. Opened teams-admin and meeting-transcription-captions; the default and displayed output are described, but no passage states the blanket absence of autonomous actions. | Fix: Replace 'No change: nothing acts on its own. The setting changes what a captioning display shows.' with 'The roadmap describes a change to the default profanity filtering of live captions.'
- [unsupported, major] Risk assessment: Change & support / behaviour: Shared Teams Rooms displays can show unfiltered captions to everyone in the room. | Found: Searched: Teams Rooms captions profanity filtering preference device settings admin LiveCaptions. Opened rooms-release-note and rooms/copilot-admin-mtr; they discuss Rooms captions but do not state which shared display uses which profanity preference or who sees that output. | Fix: Replace the Rooms bullet with 'Rooms are in scope: the roadmap item names Microsoft Teams Rooms devices. Confirm which preference a room device uses and what appears on shared displays.'
- [contradicted, blocker] Cost and licensing / licensing: Live translated captions are a separate Teams Premium feature. | Found: For events optimized for large audiences, such as town halls, organizers can preselect up to ten languages for attendees to use during the event without Teams Premium. | Fix: Remove 'Live translated captions are a separate Teams Premium feature, on the live captions section of the transcription and captions page'. The cited page gives a town-hall exception, and https://support.microsoft.com/en-us/office/use-live-captions-in-microsoft-teams-meetings-4be2d304-f675-4b57-8347-cbd000a21260 also identifies Microsoft Copilot licensing for translated meeting captions. | Source: https://learn.microsoft.com/microsoftteams/meeting-transcription-captions
- [unsupported, major] Cost and licensing / behaviour: The default profanity-filter change does not affect live translated captions. | Found: Searched: Teams live captions profanity filter default change translated captions data access identity. Opened teams-admin, meeting-transcription-captions and rooms-release-note; none explicitly excludes translated captions from this default change. | Fix: Remove 'and this change does not touch them.'
- [contradicted, blocker] rationale: risk; Governance controls / absence: Microsoft Learn documents no admin policy for the captions profanity filter as of November 2026. | Found: IT admins can turn on captions by default for all calls and meetings, as well as turn off the filtering of any profanity in captions and transcripts as necessary. | Fix: Replace the risk rationale with 'Medium. Users who never set a preference may see unfiltered profanity in live captions. Microsoft release notes disagree about administrator control of caption filtering, and the linked caption-policy pages do not give a profanity-filter setting.' This preserves the conflict already reported in Governance controls. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; summary; What's changing; Governance guidance; changes / record: The live captions profanity filter default changes from On to Off. | Found: We are updating the default profanity filter setting for live captions from On to Off | Fix: Keep the roadmap default statement, but add: 'Microsoft's user support page still says obscenities are obscured by asterisks, which differs from the roadmap and June 2026 release note.' Cite https://support.microsoft.com/en-us/office/use-live-captions-in-microsoft-teams-meetings-4be2d304-f675-4b57-8347-cbd000a21260.
- [supported, minor] controls[0].note; Governance controls table / applicability: Call captions are controlled through a separate calling policy. | Found: To enable real-time captions for calls: ... select Voice > Calling policies. ... Turn Real-time captions in Teams calls to On. | Fix: Add https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions to sources for the existing sentence 'Call captions use a separate calling policy.' | Source: https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions
-->
