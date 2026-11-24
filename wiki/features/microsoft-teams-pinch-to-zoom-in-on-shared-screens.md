---
title: "Microsoft Teams: pinch to zoom on shared screens"
slug: "microsoft-teams-pinch-to-zoom-in-on-shared-screens"
roadmapId: 576193
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams adds touchpad pinch-to-zoom on shared content in calls and meetings, on by default per Microsoft's notice. It is a viewing change: administrators need to brief users and support, and Learn documents no switch for it."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Except for joining Teams meetings anonymously, each user in the organisation needs a Teams licence to use Teams. Microsoft has not published a licence or meter specific to pinch-to-zoom."
audiences: ["m365-admin","change-adoption","service-owner"]
tags: ["teams","meeting-policy","sharing","user-experience","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 576193"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576193"
    kind: "roadmap"
  - title: "Manage meeting policies for content sharing"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "MC1532242"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1532242"
    kind: "message-center"
videos: []
related: ["microsoft-teams-new-sharing-panel-in-meetings-improved-content-discovery-and-ease-of-shari"]
controls:
  - governs: "Whether a user can share a screen or application (related setting, not a zoom control)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Content sharing > Screen sharing mode"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ScreenSharingMode <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "General control: Microsoft has not confirmed it applies to pinch-to-zoom. It governs who can share, not how viewers zoom."
  - governs: "Switch for pinch-to-zoom on shared screens"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-24"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-17"
    note: "New briefing: touchpad pinch-to-zoom on shared screens in Teams, rolling out in November 2026 and on by default per MC1532242."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 44 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Corrected: licensing now states the Teams licence requirement, the PowerShell link points to the cmdlet reference, and MC1532242's updated rollout window and end date are reflected."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 51
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e233ec8b1247c2a6dfcb81107e8ee1a4"
---

## What's changing

Teams is adding pinch-to-zoom with a touchpad so that people viewing shared content in calls and meetings can zoom in on small text and detailed visuals, then zoom back out. The roadmap item states that existing zoom controls remain available.

Microsoft's notice MC1532242 (published 2026-10-30, last updated 2026-11-24) says the capability will be enabled for all meetings by default, as an improvement to additional zooming controls. It gives a Worldwide rollout window for Targeted Release that begins in mid November 2026 and completes by mid November 2026, and for General Availability that begins in late November 2026 and completes by late December 2026 (previously late November). The post names no act-by date and its end date is 2027-02-01.

The roadmap record lists the status as Rolling out, with a target of November CY2026, for the Desktop and Mac platforms. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice gives its schedule for Worldwide only, so Microsoft has not given a separate window for the other clouds.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so the behaviour described here is the roadmap's and the notice's description.

## Why it matters

This is a user-visible change that arrives without an administrator choosing it, because Microsoft's notice says it is enabled for all meetings by default. The practical effect for a service owner is support load and expectations: people on Desktop and Mac with a touchpad may start zooming shared content and ask how it works or how to reset the view.

Expect a small change rather than a governance event. The useful work is a short note to users and the service desk, as the notice recommends, and a check of your sharing policies so you know which settings do and do not relate to it.

## Risk assessment

**Data exposure**

- The roadmap item and MC1532242 describe zooming in on content that participants can already see. Neither describes new data access, storage or sharing. Microsoft has not said whether zooming is local to the viewer or visible to others, so confirm this before telling users it is private.

**Security & identity**

- No new identity, permission or sign-in change is described. Existing meeting content-sharing policy still decides who can present; Microsoft Learn documents the Screen sharing mode setting as controlling whether a user can share a desktop and window in a Teams meeting.

**Autonomy & actions**

- No autonomous or agent behaviour is described. The zoom is triggered by a person using a touchpad.

**Change & support**

- The feature is on by default in all meetings, so users will see it without notice unless you tell them. Prepare the service desk for questions about the gesture and about how it sits alongside the existing zoom controls.
- Microsoft Learn documents no setting to turn pinch-to-zoom off at the time of writing (November 2026), so communication is the available response.

## Cost and licensing

Except for joining Teams meetings anonymously, each user in the organisation needs a Teams licence to use Teams. Microsoft has not published a licence or meter specific to pinch-to-zoom. Treat the cost as admin and support time for communication until Microsoft says otherwise.

The Learn page on meeting policies for content sharing (https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing) describes the existing content-sharing settings, not this feature, and states no licence for it.

## Scope

Microsoft's notice says the capability applies to all meetings by default. The roadmap record lists the Desktop and Mac platforms, and describes the gesture as pinch-to-zoom using your touchpad.

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with General Availability and Targeted Release phases. MC1532242 gives the Worldwide schedule: Targeted Release from mid November 2026 and General Availability from late November 2026, completing by late December 2026. Microsoft has not stated any roles specific to pinch-to-zoom, or whether anything other than a touchpad triggers the gesture.

## Governance guidance

### Before rollout

- Tell users and support teams about the new gesture and that the existing zoom controls remain available, as MC1532242 recommends.
- Review your Teams meeting policies, in particular the Content sharing section, so you know which sharing settings apply in your tenant.
- Confirm in the Message center and on the roadmap item whether your cloud follows the Worldwide schedule, as the notice gives dates for Worldwide only.

### At rollout

- Add a line on touchpad zoom to your Teams meeting guidance for Desktop and Mac users.
- Collect early service desk questions from users in the Targeted Release group, if you have one, and use them to adjust the guidance before General Availability.

### After rollout

- Check the roadmap item and Message center for an update to the status or for a Learn page that documents the feature.
- Re-check Microsoft Learn for an admin setting for this feature, because none is documented at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a user can share a screen or application (related setting, not a zoom control)</strong><br><small>User</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to pinch-to-zoom. It governs who can share, not how viewers zoom.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Content sharing › Screen sharing mode <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ScreenSharingMode &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for pinch-to-zoom on shared screens</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting or API for pinch-to-zoom at the time of writing (November 2026). The Screen sharing mode setting in the meeting policy controls whether a user can share a desktop and window; Microsoft has not said it affects zooming by viewers, so do not use it as a switch for this feature.

The Screen sharing mode setting is a per-user policy, so a change applies to users assigned the policy.

## Open questions

- Is there, or will there be, a Teams meeting policy or tenant setting to turn pinch-to-zoom off? Watch the Teams meeting policy pages on Microsoft Learn and Message center.
- Is zooming local to each viewer, or is it visible to other participants or in recordings? Microsoft's notice does not say.
- Which input methods beyond a touchpad, and which Teams client versions, support the gesture? The roadmap item names touchpad and the Desktop and Mac platforms only.
- When will the feature reach GCC, GCC High and DoD? MC1532242 gives the Worldwide schedule only.

<!-- rationale
risk: Low. The roadmap and Microsoft's notice describe a zoom control for content that is already shared, and neither describes new data access or autonomous actions.
cost: Low. The only cost the sources show is admin time to inform users and support teams; Microsoft has not published a licence or meter specific to pinch-to-zoom.
impact: Medium. It is enabled for all meetings by default, but it applies to touchpad use on the Desktop and Mac platforms the roadmap lists and adds to the existing zoom controls.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: platforms; What's changing; Why it matters; Scope; rationale: impact / record: The roadmap lists Desktop and Mac platforms. | Found: "platforms": ["Desktop", "Mac"] | Fix: After the platform statement in Scope, add: "Microsoft Support currently says 'Mac trackpads don't support zoom in meetings,' although the roadmap lists Mac for this rollout." Cite https://support.microsoft.com/en-us/office/share-content-in-microsoft-teams-meetings-fcc2bf59-aecd-4481-8f99-ce55dd836ce8 in sources; its 'Zoom in to shared content' section gives that qualification.
-->
