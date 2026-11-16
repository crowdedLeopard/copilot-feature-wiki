---
title: "Microsoft Teams: new sharing panel in meetings"
slug: "microsoft-teams-new-sharing-panel-in-meetings-improved-content-discovery-and-ease-of-shari"
roadmapId: 502520
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans a redesigned panel for sharing windows and files in Teams meetings on desktop and Mac, targeted January CY2027. It is a user interface change; no admin action or new licence is documented."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence and no Microsoft Learn page was found that describes the new sharing panel or its licensing."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","meeting-policy","sharing","user-experience","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Manage meeting policies for content sharing"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 502520"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502520"
    kind: "roadmap"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","teams-ai-generated-meeting-memory"]
controls:
  - governs: "A tenant-wide switch for the new sharing panel"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting found in Microsoft Learn at the time of writing (November 2026)."
  - governs: "Whether a user can share an entire screen, a single application, or neither in meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > Content sharing"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -ScreenSharingMode"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    note: "Existing control for screen sharing mode. Microsoft has not confirmed that it applies to the new sharing panel."
confidence: "low"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: a roadmap-only description, with existing content sharing meeting policy settings listed as the nearest documented controls."
version: 1
---

## What's changing

Microsoft plans a new sharing panel for Teams meetings. The roadmap item says the panel in today's meetings is the default place for content discoverability and sharing, and that the new interface is intended to modernise and simplify default tasks such as window sharing, and to make sharing options and file sharing easier to find.

The roadmap record lists Desktop and Mac as the platforms, and Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as the clouds. The release phases listed are General Availability and Targeted Release. The roadmap gives no further detail on what the panel looks like, which sharing options it offers, or whether users can keep the current layout.

The status is In development and the target date is January CY2027. This is a Microsoft target, not a commitment, and no preview date is set. At the time of writing (November 2026), a search of Microsoft Learn found no page that describes the new panel.

## Why it matters

This is a change to the screen everyone who presents in a meeting uses. If the roadmap's description holds, presenters will see a different layout for choosing a window or a file, and the help desk will get questions about where the old options went. Nothing in the sources suggests the change reaches new data or new people, so the main task is communication.

If nobody acts, the change arrives as part of the Teams client with no documented admin switch to delay it. Use the time before the January CY2027 target to find out how it is delivered (Targeted Release first, as the record lists) and to update any internal meeting guides or training that include screenshots of the current panel.

## Risk assessment

**Data exposure**
- The roadmap describes a redesign of how users choose what to share, including more discoverable file sharing. It does not say what files the panel lists or where they come from. Existing sharing behaviour in meetings stays governed by the content sharing settings in the meeting policy, which Microsoft has not said the new panel changes.
- Easier discovery of file sharing could lead presenters to share files they would previously not have thought to share. This is the wiki's analysis, not a Microsoft statement.

**Security & identity**
- No change documented: the roadmap item mentions no new permissions, identity or authentication.

**Autonomy & actions**
- No change documented: the roadmap describes user-driven sharing only; no automated or agent behaviour is mentioned.

**Change & support**
- A different layout for the most used meeting action will prompt support questions. Because Microsoft has not documented an admin control for the panel, plan communications rather than a configuration change.
- Screen sharing mode, set per user in the meeting policy, decides whether a user can share an entire screen, a single application, or nothing. Check that your policy assignments match what you expect before the new panel makes those options more prominent.

## Cost and licensing

Not yet published. The roadmap record names no licence, plan or meter for the new sharing panel, and no Microsoft Learn page describing the panel was found at the time of writing (November 2026).

The Learn page on meeting policies for content sharing (Manage meeting policies for content sharing) describes content sharing settings and lists no licence requirement for them. That page does not describe the new panel, so it should not be read as a licensing statement for it.

The cost the sources show is indirect: admin time to check meeting policies, and communications and training time before the January CY2027 target.

## Scope

The roadmap record lists Microsoft Teams on Desktop and Mac, in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Release phases are General Availability and Targeted Release. The record does not list web or mobile platforms; that is a record fact, and not a statement that the panel is unavailable there.

Microsoft has not published which users or licences are in scope, which roles configure it, or any prerequisites. The content sharing settings on the Learn page are per-user policy settings, but Microsoft has not confirmed that they apply to the new panel in any way beyond what they govern today.

## Governance guidance

### Before rollout
- Ask the Teams service owner to track roadmap item 502520 and Message center for the rollout announcement, and to record the January CY2027 target as a target only.
- Review the **Screen sharing mode** value on each meeting policy in the Teams admin center (Meetings > Meeting policies > Content sharing) so you know who can share a screen, a single application or nothing.
- Draft a short note for presenters and help desk staff that says the sharing panel layout is changing, and hold any screenshots until the new panel is visible in a Targeted Release test group.

### At rollout
- Test the panel on Teams for desktop and Mac with a user assigned each Screen sharing mode value, and record what it shows for each.
- Check whether any option in the panel bypasses a content sharing policy value you have set. Microsoft has not documented this either way.

### After rollout
- Compare support tickets about sharing before and after the change, and update guides that show the old panel.
- Re-read the Learn page on content sharing meeting policies and the roadmap item for any new setting that governs the panel.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>A tenant-wide switch for the new sharing panel</strong><br><small>Tenant</small><br><small class="controls__note">No such setting found in Microsoft Learn at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a user can share an entire screen, a single application, or neither in meetings</strong><br><small>User</small><br><small class="controls__note">Existing control for screen sharing mode. Microsoft has not confirmed that it applies to the new sharing panel.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › Content sharing <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -ScreenSharingMode</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting specific to the new sharing panel is documented at the time of writing (November 2026). The rows above are existing controls that govern content sharing in meetings today; Microsoft has not said how, or whether, they apply to the new panel.

Content sharing settings are per-user policy settings. A meeting policy must be assigned to users for its values to apply, and edits are made in the policy's Content sharing section.

## Open questions

- Can an administrator turn the new sharing panel off, delay it, or keep the current panel, and where? Watch the roadmap item and Message center.
- Which content sharing meeting policy settings (Screen sharing mode, PowerPoint Live, Whiteboard, Shared notes) will the new panel respect, and will it add any new setting?
- What files does the panel list for file sharing, and does it draw on OneDrive or SharePoint content the presenter can reach?
- Is a licence required, and will the panel be on by default for all users on Desktop and Mac when it reaches General Availability?

<!-- rationale
risk: Low. The roadmap describes a redesign of how presenters pick what to share; Microsoft has not said it adds data access, and existing meeting policy settings for content sharing remain the documented controls.
cost: Low. The only cost the sources show is admin and communications time; Microsoft has not published a licence or meter for the new panel.
impact: High. The roadmap calls the sharing panel the default place for sharing in meetings, so presenters on Teams for desktop and Mac would see a changed layout; Microsoft has not said how it rolls out.
-->
