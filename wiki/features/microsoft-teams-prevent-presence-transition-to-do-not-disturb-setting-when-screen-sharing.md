---
title: "Microsoft Teams: user setting to stop presence switching to Do not disturb while screen sharing (GCC High, DoD)"
slug: "microsoft-teams-prevent-presence-transition-to-do-not-disturb-setting-when-screen-sharing"
roadmapId: 567300
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams adds a setting that lets users opt out of the automatic switch to Do not disturb when presenting, so calls keep ringing. Launched for GCC High and DoD; Microsoft Learn documents no admin control for it yet."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Teams users need a Teams license, except when joining meetings anonymously. Microsoft has not published a licence requirement specific to this setting."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["teams","presence","macos","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: item 567300"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567300"
    kind: "roadmap"
  - title: "User presence in Teams"
    url: "https://learn.microsoft.com/microsoftteams/presence-admins"
    kind: "learn"
  - title: "Manage user access to Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "How to fix my Teams status (Microsoft Q&A)"
    url: "https://learn.microsoft.com/answers/questions/5769983/how-to-fix-my-teams-status?page=0#answer-12583868"
    kind: "docs"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Set-CsTeamsClientConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsclientconfiguration"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Admin-side switch for the presenting Do not disturb opt-out"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no admin control for this setting at the time of writing (November 2026). The roadmap describes it as a user setting."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-23"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 39 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: narrowed the Learn absence statement and added the Q&A user setting path, removed unsupported claims about agent actions and new data, and set licensing to included (Teams licence)."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 36 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 41
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8e631b6ab621cdd34f93323c287d45bc"
---

## What's changing

Microsoft Teams is adding a setting that lets users opt out of having their presence move automatically to Do not disturb when they present or share their screen. The roadmap item says this keeps them able to receive calls without changing their status by hand.

The roadmap item is for GCC High and DoD, lists Desktop and Mac as platforms, and gives the release phase as General Availability. Its status is Launched, with a target date of September CY2026. The roadmap is a statement of Microsoft's plans, so treat the date as a target.

The cited Learn presence page does not describe this setting or its client location in GCC High or DoD, so what follows about its behaviour is the roadmap's description. That page describes the background: in Do not disturb, incoming calls go to voicemail, and Presenting is one of the states Teams sets itself, based on the state of the Teams app. A Microsoft Q&A moderator's answer tells users whose status changes to Do Not Disturb when sharing their screen to go to Settings > Privacy in Teams and uncheck Set my status to Do Not Disturb when I'm sharing my screen. That answer does not identify government clouds, so this briefing does not treat it as confirmed for this roadmap item. Whether the setting is on or off on arrival is not stated by the roadmap record or the presence page. No Message Center post was supplied with this item.

## Why it matters

For service owners, this is a call-handling and expectations change; the roadmap describes no new data access or charge. Today's documented behaviour is that a user in Do not disturb has incoming calls sent to voicemail; the new setting is aimed at people who present or share their screen and still need to be reachable.

Microsoft has not stated what happens on arrival, and no source says existing behaviour changes for users who do nothing. The practical task is to tell users the setting exists and to agree when it is appropriate, because Learn documents no admin control over it at the time of writing (November 2026).

## Risk assessment

**Data exposure**

- No change documented: the roadmap describes a presence setting and says nothing about new data being read or shared.

**Security & identity**

- No identity or permission change is described. Presence is visible to other users, and Learn's presence page documents privacy mode (`Set-CsPrivacyConfiguration -EnablePrivacyMode`) for sharing presence outside the organisation; the roadmap does not say that this feature changes it.

**Autonomy & actions**

- The roadmap describes the setting as a user opt-out of an automatic status change. A user who opts out can receive calls while presenting, because Learn says calls are received in every presence state except Do not disturb.

**Change & support**

- Expect questions from presenters who are interrupted by calls during a screen share after opting out, and from callers who now reach someone who previously went to voicemail. Whether a call notification appears on the shared screen is not stated; confirm it in a test before advising users.
- Learn documents no admin-side switch for this setting, so support has no policy to point to; guidance has to come from user communication.

## Cost and licensing

Teams users need a Teams license, except when joining meetings anonymously (Learn page "Manage user access to Microsoft Teams"). Microsoft has not published a licence requirement specific to this setting; the roadmap record names none.

The cost known today is indirect: admin and help desk time to explain the setting, and any user training. No separate charge is documented for it at the time of writing (November 2026).

## Scope

The roadmap item lists the clouds GCC High and DoD, the platforms Desktop and Mac, and the release phase General Availability. It describes the setting as one that users choose for themselves.

Which Teams client versions carry it, which roles can configure it and whether it also reaches other clouds is not stated by the roadmap record or by Learn. The roadmap lists no other clouds for this item; that is a record fact, not a statement that the setting is unavailable elsewhere.

## Governance guidance

### Before rollout

- Identify which users in GCC High and DoD tenants present or share their screen while expected to take calls, so you know who will want the setting.
- Decide whether your organisation has a rule on taking calls while sharing a screen, and write it down before users start changing the setting.
- Check the Teams admin centre meeting policies and the Teams PowerShell reference for a presence control; Learn documents none at the time of writing, so plan on user communication instead.

### At rollout

- Tell Desktop and Mac users that the setting exists, using the roadmap's wording, and name the call-handling rule you agreed.
- Test on one Desktop and one Mac client whether a call arriving during a screen share is visible to meeting participants, and brief users on the result.

### After rollout

- Watch help desk tickets about missed or interrupting calls during presentations and update your guidance.
- Re-read Learn's presence page and the Teams release notes for an admin control or a stated default, and revisit this briefing if either appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin-side switch for the presenting Do not disturb opt-out</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no admin control for this setting at the time of writing (November 2026). The roadmap describes it as a user setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin control for this setting is documented at the time of writing (November 2026): the Set-CsTeamsMeetingPolicy and Set-CsTeamsClientConfiguration references list no presence or Do not disturb parameter. The roadmap describes a user setting, so there may be none. Learn's presence page also says that a Teams admin's ability to customise the Client Do Not Disturb and Breakthrough settings isn't currently supported; that sentence is about those two settings, not this one.

The priority access list is a different, user-side feature: users add people there in Teams, and Learn says those people still reach them in Do not disturb. It is not an admin control over this setting.

## Open questions

- Is the opt-out on or off by default when it arrives in GCC High and DoD, and does it change anything for users who do nothing? Watch Message center and the Learn page on user presence.
- Where does a user find the setting in the Teams client in GCC High and DoD, and can the same setting be set per call or only for all presenting?
- Will an admin control (a policy or PowerShell parameter) be published, so that an organisation can require or block the opt-out?
- Does a call that rings during a screen share show on the shared content?
- Will Microsoft publish a licence requirement specific to this setting?

<!-- rationale
risk: Low. The roadmap describes a user-side opt-out of an automatic status change; the roadmap describes no new data access, and Learn documents no way to enforce it from the admin side. The default is not stated.
cost: Low. The roadmap names no licence or meter, so the only known cost is admin time and user communication; a licence requirement specific to this setting is not yet published.
impact: Medium. People who present or share their screen and take calls in the same session are the ones who notice, on the Desktop and Mac clients named in the roadmap.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout, third bullet / absence: Learn documents no meeting-policy presence control for the presenting opt-out. | Found: Searched: Teams admin center meeting policies presence control privacy Do not disturb presenting opt out. Read settings-policies-reference and both cmdlet references; no presenting opt-out control. Presence-admins separately documents presence privacy mode. | Fix: Replace the third Before rollout bullet with: 'Check the Teams admin centre meeting policies and the Teams PowerShell reference for an admin control over this presenting opt-out; Learn documents none at the time of writing, so plan on user communication instead.' This avoids implying no presence controls of any kind exist.
-->
