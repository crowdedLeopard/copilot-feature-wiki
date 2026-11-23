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
  - title: "Configure call recording, transcription, and captions in Teams"
    url: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
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
  - date: "2026-11-23"
    note: "Correction: removed unsupported statements on data, identity, autonomy, Rooms displays and translated captions; risk rationale now reflects the conflicting release notes on admin control of the captions filter."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 50
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c2ec4d8fa179af24a8c0b9b06cc5e528"
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

- The Teams admin documentation says Teams does not save live captions.

**Security & identity**

- Unfiltered profanity in captions can reach users who never changed the setting; this is a conduct and communications concern.

**Autonomy & actions**

- The roadmap describes a change to the default profanity filtering of live captions.

**Change & support**

- Expect help-desk questions from users who see profanity where words were masked before. Users who set a preference keep it, so complaints will come from those who never opened the setting.
- Rooms are in scope: the roadmap item names Microsoft Teams Rooms devices. Confirm which preference a room device uses and what appears on shared displays.

## Cost and licensing

Microsoft's Teams Rooms and Copilot overview lists "Live meeting captions and transcript" under Microsoft Teams in its feature-versus-licence table, so live captions are not shown as needing Teams Premium or Microsoft 365 Copilot there.

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
risk: Medium. Users who never set a preference may see unfiltered profanity in live captions. Microsoft release notes disagree about administrator control of caption filtering, and the linked caption-policy pages do not give a profanity-filter setting.
cost: Low. The only cost the sources show is admin time and user communication; no licence or meter is tied to this default change in anything read for this briefing.
impact: High. The default changes for every user who has never set the preference, across meetings, calls, events and Microsoft Teams Rooms devices.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; summary; What's changing; Governance guidance / record: The live captions profanity filter default changes from On to Off. | Found: We are updating the default profanity filter setting for live captions from On to Off | Fix: Keep the roadmap statement. Add: 'The Microsoft Support article still says "Obscenities are obscured by asterisks", which differs from the roadmap and June 2026 release notes.' Cite https://support.microsoft.com/en-us/office/use-live-captions-in-microsoft-teams-meetings-4be2d304-f675-4b57-8347-cbd000a21260.
- [supported, minor] front matter: platforms; What's changing; Scope / record: The roadmap lists Android, Desktop, iOS, Mac, Teams and Surface Devices, and Web. | Found: "platforms": ["Android", "Desktop", "iOS", "Mac", "Teams and Surface Devices", "Web"] | Fix: Keep the roadmap platform list. Add in Scope: 'The Microsoft Support captions article separately says captions are not yet available in government clouds on the Teams mobile app; this differs from the roadmap scope.' Cite https://support.microsoft.com/en-us/office/use-live-captions-in-microsoft-teams-meetings-4be2d304-f675-4b57-8347-cbd000a21260.
- [supported, minor] Why it matters; Open questions / absence: The pages read leave central administrator control of the captions profanity preference unresolved. | Found: Searched: 'Teams profanity filtering live captions centrally administrator Set-CsTeamsMeetingPolicy profanity captions'; read the cmdlet's profanity and captions parameters, both caption-policy pages and Rooms/admin release notes. No usable captions-filter setting resolves their differing descriptio | Fix: Replace 'Which settings menu holds the preference, and whether an admin can set it centrally, is not documented in the pages read, so confirm both before telling users where to click.' with 'The pages read give no menu path for the user preference or admin setting for the captions profanity filter; release notes disagree about administrator control, so confirm both before telling users where to click.'
- [supported, minor] Governance controls / behaviour: The November 04, 2026 Teams admin release note says a meeting policy controls profanity masking in live transcription and saved meeting transcripts. | Found: ## November 04, 2026 Teams admins can use a meeting policy to control whether profane words are masked in live transcription and saved meeting transcripts. | Fix: Keep the attributed release-note statement. Add: 'The Set-CsTeamsMeetingPolicy reference, however, still says of FilterProfanityInTranscript: "This feature has not been fully released yet, so the setting will have no effect."' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps. | Source: https://learn.microsoft.com/officeupdates/teams-admin
-->
