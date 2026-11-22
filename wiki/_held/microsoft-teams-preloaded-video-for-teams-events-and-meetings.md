---
title: "Microsoft Teams: organisers play OneDrive videos in events with Manage what attendees see"
slug: "microsoft-teams-preloaded-video-for-teams-events-and-meetings"
roadmapId: 562340
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Event organisers and producers can load OneDrive videos from Manage view when Manage what attendees see is on. No admin action is required; Microsoft documents no admin policy for the option."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn lists Manage what attendees see under Advanced event features, which need an Enterprise, EDU faculty or Teams Premium Legacy licence. A price or licence specific to OneDrive video is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-events","onedrive","meeting-templates","teams-premium","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 562340"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562340"
    kind: "roadmap"
  - title: "MC1506734"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1506734"
    kind: "message-center"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Manage the meeting presentation experience for sensitive Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-presentation-experience"
    kind: "learn"
  - title: "IT admins - Create a custom meeting template in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/create-custom-meeting-template"
    kind: "learn"
  - title: "Get-CsTeamsMeetingTemplateConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingtemplateconfiguration"
    kind: "learn"
videos: []
related: ["microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events","microsoft-teams-default-meeting-templates","microsoft-teams-ability-to-separate-out-the-townhall-attendee-invites","meeting-policy"]
controls:
  - governs: "Default and lock of Manage what attendees see in a custom meeting template"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting templates > Add > Meeting engagement > Manage what attendees see"
      docs: "https://learn.microsoft.com/microsoftteams/create-custom-meeting-template"
    api: null
    note: "Custom meeting templates require Teams Premium. The page describes this option for meetings; its use for events is not stated."
  - governs: "Admin policy for organisers using Manage what attendees see in events"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn's Plan for Teams events page lists Admins: No control. Organisers choose the option themselves."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-22"
    note: "New briefing: OneDrive video sharing in Teams events with Manage what attendees see, rolling out November to early December 2026."
version: 1
---

## What's changing

Organisers and producers of Teams events can load a video from OneDrive and present it on stage, instead of screen sharing a local media player or embedding the video in PowerPoint. The roadmap item says users upload the video from the **Manage view** options when an organiser has turned on Manage what attendees see mode, and that attendees get smoother, higher-quality playback.

Microsoft's notice MC1506734 gives the scope more narrowly than the roadmap title: events optimized for scale (previously called town halls), where organisers and producers use Manage what attendees see. It also says they get built-in controls to start and pause playback. Microsoft Learn does not yet describe this feature, so the behaviour above is the roadmap's and the notice's description.

The roadmap record shows status Rolling out, target date November CY2026, release phases General Availability and Targeted Release, clouds Worldwide (Standard Multi-Tenant) and GCC, and platforms Desktop and Mac. MC1506734 says Targeted Release (Worldwide) begins in mid-November 2026 and ends in early December 2026, and General Availability (Worldwide, GCC) begins and is expected to complete in early December 2026. The notice says tenants in GCCH or DoD are not impacted.

## Why it matters

This is a production change for event teams, not a data or spend change. Event guidance that tells producers to screen share a local player or embed video in PowerPoint becomes out of date, and Microsoft's notice recommends reviewing it.

The notice states that no action is required. The wiki's view: expect questions from producers about who can open a video, because the notice asks organisers to store videos in OneDrive with the appropriate permissions before using them. Microsoft has not described how those permissions are checked at playback, so confirm that in a test event.

## Risk assessment

**Data exposure**
- The feature reads video files stored in OneDrive that the organiser or producer selects. Microsoft's notice asks organisers to store videos with the appropriate permissions before use; it does not describe how a file's permissions interact with event attendees, so test with a file that has restricted permissions.

**Security & identity**
- Manage what attendees see lets organisers control what content is shared on screen and whose video is visible, and organisers must intentionally bring shared content and video on screen before attendees can see it. Learn does not say whether a OneDrive video follows the same step.

**Autonomy & actions**
- No change: the notice describes organisers and producers selecting and starting videos themselves with playback controls, and describes no autonomous action.

**Change & support**
- Expect help-desk questions from producers whose current workflow is screen sharing a local player, and from organisers who expect the option in meetings as well as events, because the roadmap item says "event or meeting" and the notice names events optimized for scale.
- The roadmap lists Desktop and Mac platforms. Microsoft has not stated whether the Manage view option appears on other clients.

## Cost and licensing

Microsoft publishes no price or meter for this feature. The Teams events licensing page lists Manage what attendees see among the Advanced event features, and says users must have a licence from the Advanced event features category to access the full set of Teams events features. In its table, that category covers Office 365 E1, E3 and E5, Microsoft 365 E3, E5 and E7, Office 365 and Microsoft 365 A3 and A5 for Faculty, and Teams Premium Legacy.

The feature's own licence requirement is not yet published, so treat the Advanced event features entry as the closest published statement. Indirect costs are admin time to brief producers and, per Microsoft's notice, the work of storing videos in OneDrive with suitable permissions.

## Scope

- **Who:** Teams event organisers and producers using events configured with Manage what attendees see (MC1506734). The roadmap item also mentions meetings; the notice does not.
- **Clouds:** The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC. MC1506734 says GCCH and DoD tenants are not impacted.
- **Platforms:** Desktop and Mac, per the roadmap record.
- **Rollout:** Targeted Release (Worldwide) mid-November to early December 2026; General Availability (Worldwide, GCC) early December 2026, per MC1506734.
- **Prerequisites:** Manage what attendees see turned on by the organiser, and a video stored in OneDrive. The licence for the feature itself is not yet published.

## Governance guidance

### Before rollout
- Tell event organisers and producers that they can share OneDrive videos in events with Manage what attendees see, as MC1506734 recommends.
- Review internal event production guidance that recommends screen sharing local videos or embedding them in PowerPoint.
- Confirm which of your organisers hold an Advanced event features licence, using the Teams events licensing page.
- Decide whether to preset Manage what attendees see in a custom meeting template (Teams Premium).

### At rollout
- Run a test event with a OneDrive video that has restricted permissions, to see what producers and attendees experience.
- Ask producers to store videos in OneDrive with the appropriate permissions before using them, as the notice advises.
- Watch Message center for MC1506734 updates, which says it will be updated with new documentation.

### After rollout
- Collect producer feedback on playback quality and controls.
- Re-check the Learn pages for events and update your guidance when Microsoft publishes the feature's own page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default and lock of Manage what attendees see in a custom meeting template</strong><br><small>Tenant</small><br><small class="controls__note">Custom meeting templates require Teams Premium. The page describes this option for meetings; its use for events is not stated.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting templates › Add › Meeting engagement › Manage what attendees see <a href="https://learn.microsoft.com/microsoftteams/create-custom-meeting-template" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin policy for organisers using Manage what attendees see in events</strong><br><small>Tenant</small><br><small class="controls__note">Learn's Plan for Teams events page lists Admins: No control. Organisers choose the option themselves.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn's Plan for Teams events page lists Manage what attendees see as an organiser control with no admin control, and the presentation-experience page shows no admin policy for it. The one admin route Learn documents is a custom meeting template, which can turn the option on or off, and can lock it so the organiser cannot change it. Custom meeting templates require Teams Premium, and the template page describes the option for meetings; whether a template applies to events optimized for scale is not stated, so test it.

Nothing in Learn at the time of writing (November 2026) describes a control specific to OneDrive video in events. OneDrive sharing permissions on the file remain the existing control over the file itself.

## Open questions

- Does the feature apply to meetings as well as events? The roadmap item says "event or meeting", while MC1506734 names events optimized for scale. Watch the notice and the Learn page.
- Which licence does OneDrive video need, beyond the Advanced event features entry for Manage what attendees see? Watch the Teams events licensing page.
- How are OneDrive file permissions checked when a producer plays a video to attendees, and can an admin restrict which videos can be used?
- Do custom meeting templates apply to events optimized for scale, and can a template lock Manage what attendees see for them?

<!-- rationale
risk: Low. The change adds a way to present a OneDrive file inside an option organisers already choose to use; Microsoft's notice asks for no admin action and Learn documents no admin policy for that option.
cost: Low. The only cost the sources show is admin time and communication; Learn lists Manage what attendees see under Advanced event features licences, and no separate price or meter for OneDrive video is published.
impact: Medium. Event organisers and producers who use Manage what attendees see will notice it; attendees see the playback, and other users are not affected.
-->
