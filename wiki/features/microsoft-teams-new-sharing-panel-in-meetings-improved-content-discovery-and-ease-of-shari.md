---
title: "Microsoft Teams: new sharing panel in meetings"
slug: "microsoft-teams-new-sharing-panel-in-meetings-improved-content-discovery-and-ease-of-shari"
roadmapId: 502520
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft is redesigning the sharing panel in Teams meetings. Notice MC1317197 says it is on by default for all work and school users, with no tenant-level off switch; no immediate action is required, but communication is recommended."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence and no Microsoft Learn page was found that describes the new sharing panel or its licensing."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","meeting-policy","sharing","user-experience","adoption","gcc","gcc-high","dod"]
sources:
  - title: "MC1317197: (Updated) Microsoft Teams: A refreshed in-meeting experience with simpler controls and a smarter share panel"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1317197"
    kind: "message-center"
  - title: "Manage meeting policies for content sharing"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
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
    note: "MC1317197 says the experience cannot be disabled at the tenant level. No such setting found in Microsoft Learn at the time of writing (November 2026)."
  - governs: "Whether a user can share an entire screen, a single application, or neither in meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Content sharing"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy> -ScreenSharingMode <mode>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Existing control for screen sharing mode. Microsoft has not confirmed that it applies to the new sharing panel."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: a roadmap-only description, with existing content sharing meeting policy settings listed as the nearest documented controls."
  - date: "2026-11-16"
    note: "Corrected after verification: default is on per MC1317197 (no tenant-level off switch), scope widened to Windows, Mac and web, notice rollout windows added, and the content sharing path now includes the policy step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the Screen sharing mode PowerShell call to Set-CsTeamsMeetingPolicy -Identity <policy> -ScreenSharingMode <mode>, linked to the cmdlet reference."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 61 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d64949395d7caf4e7bac67147bf1a026"
---

## What's changing

Microsoft plans a new sharing panel for Teams meetings. The roadmap item says the panel in today's meetings is the default place for content discoverability and sharing, and that the new interface is intended to modernise and simplify default tasks such as window sharing, and to make sharing options and file sharing easier to find.

Microsoft's notice MC1317197, which is associated with roadmap items 560321 and 502520, says the redesigned share panel may include live previews of screens and windows, a tabbed layout and a two-step share confirmation to reduce accidental sharing. The notice labels its share panel screenshot "not final UI". It says the new experience is enabled by default and cannot be disabled at the tenant level. During rollout, users may opt in early and can temporarily return to the previous experience from Teams settings. That opt-out is controlled by individual users, cannot be managed at the tenant level, and Microsoft says it will be retired in a future release, with advance notice in a separate Message Center post.

The roadmap record lists Desktop and Mac as the platforms, and Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as the clouds. The release phases listed are General Availability and Targeted Release. MC1317197 says the change applies to Teams for Windows desktop, Teams for Mac desktop and Teams for the web, and lists Teams (consumer), iOS, Android, Teams Rooms and Linux as not in scope.

The roadmap status is In development and its target date is January CY2027. This is a Microsoft target, not a commitment, and no preview date is set. MC1317197 (updated 23 September 2026) gives a different schedule: Targeted Release of the redesigned meeting controls from late July to mid-August 2026, with the redesigned sharing controls beginning in September 2026; General Availability in Worldwide from mid-October to late October 2026; in GCC and GCC High from late October to mid-December 2026; and in DoD from mid-December 2026 to early January 2027. These are Microsoft's announced windows, not verified completion dates. At the time of writing (November 2026), a search of Microsoft Learn found no page that describes the new panel.

## Why it matters

This is a change to the screen everyone who presents in a meeting uses. If the roadmap's description holds, presenters will see a different layout for choosing a window or a file, and the help desk will get questions about where the old options went. Nothing in the sources suggests the change reaches new data or new people, so the main task is communication.

MC1317197 says the experience is enabled by default and cannot be disabled at the tenant level, and that no immediate action is required. By the notice's schedule, Targeted Release comes before General Availability, and the redesigned sharing controls began rolling out in September 2026, so as of 16 November 2026 rollout may already have reached your tenant. Check the current Teams client now and communicate now, rather than assuming rollout is still ahead; January CY2027 is the roadmap target only. Microsoft recommends communicating the redesigned controls and share panel to users, help desk and internal support teams, and updating internal documentation and training; its coordinated meeting controls notice also recommends reviewing meeting app pinning policies against the two-app limit.

## Risk assessment

**Data exposure**
- The roadmap describes a redesign of how users choose what to share, including more discoverable file sharing. It does not say what files the panel lists or where they come from. Existing sharing behaviour in meetings stays governed by the content sharing settings in the meeting policy, which Microsoft has not said the new panel changes.
- Easier discovery of file sharing could lead presenters to share files they would previously not have thought to share. This is the wiki's analysis, not a Microsoft statement.

**Security & identity**
- No change documented: the roadmap item mentions no new permissions, identity or authentication.

**Autonomy & actions**
- No change documented: the roadmap describes user-driven sharing only; no automated or agent behaviour is mentioned.

**Change & support**
- A different layout for sharing content in meetings will prompt support questions. Because MC1317197 says the experience cannot be disabled at the tenant level, plan communications rather than a configuration change.
- Screen sharing mode, set per user in the meeting policy, decides whether a user can share an entire screen, a single application, or nothing. Check that your policy assignments match what you expect before the new panel makes those options more prominent.

## Cost and licensing

Not yet published. The roadmap record names no licence, plan or meter for the new sharing panel, and no Microsoft Learn page describing the panel was found at the time of writing (November 2026).

The Learn page on meeting policies for content sharing (Manage meeting policies for content sharing) describes content sharing settings and lists no licence requirement for them. That page does not describe the new panel, so it should not be read as a licensing statement for it.

The cost the sources show is indirect: admin time to check meeting policies, and communications and training time, which MC1317197 recommends.

## Scope

The roadmap record lists Microsoft Teams on Desktop and Mac, in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Release phases are General Availability and Targeted Release. The record does not list web or mobile platforms; that is a record fact, and not a statement that the panel is unavailable there.

MC1317197 gives a wider scope: all Teams work and school users joining meetings, on Teams for Windows desktop, Teams for Mac desktop and Teams for the web. It lists Teams (consumer), iOS, Android, Teams Rooms and Linux as not in scope. Where a user is on Teams in a web browser and is assigned the **Single application** value of Screen sharing mode, Learn says that setting functions as **Not enabled**. Microsoft has not published a licence requirement, which roles configure the experience, or any prerequisites. The content sharing settings on the Learn page are per-user policy settings, but Microsoft has not confirmed that they apply to the new panel in any way beyond what they govern today.

## Governance guidance

### Before rollout
- Ask the Teams service owner to track roadmap item 502520 and MC1317197 in Message center for updates, and to record the January CY2027 roadmap target as a target only.
- Review the **Screen sharing mode** value on each meeting policy in the Teams admin center (Meetings > Meeting policies > policy > Content sharing) so you know who can share a screen, a single application or nothing.
- Draft a short note for presenters and help desk staff that says the sharing panel layout is changing, and take any screenshots from a client where the new panel is visible.

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
<tr><td data-label="Control"><strong>A tenant-wide switch for the new sharing panel</strong><br><small>Tenant</small><br><small class="controls__note">MC1317197 says the experience cannot be disabled at the tenant level. No such setting found in Microsoft Learn at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a user can share an entire screen, a single application, or neither in meetings</strong><br><small>User</small><br><small class="controls__note">Existing control for screen sharing mode. Microsoft has not confirmed that it applies to the new sharing panel.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Content sharing <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -ScreenSharingMode &lt;mode&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting specific to the new sharing panel is documented at the time of writing (November 2026). MC1317197 says the experience cannot be disabled at the tenant level; the temporary opt-out it describes is set by individual users in Teams settings and cannot be managed by administrators at the tenant level. The second row is an existing control that governs content sharing in meetings today; Microsoft has not said how, or whether, it applies to the new panel.

Content sharing settings are per-user policy settings. Users receive the global policy automatically unless a custom policy is created and assigned to them; edits are made by selecting the policy and going to its Content sharing section.

## Open questions

- When will Microsoft retire the temporary user-level toggle for returning to the previous experience? MC1317197 says advance notice will come in a separate Message Center post.
- Which content sharing meeting policy settings (Screen sharing mode, PowerPoint Live, Whiteboard, Shared notes) will the new panel respect, and will it add any new setting?
- What files does the panel list for file sharing, and does it draw on OneDrive or SharePoint content the presenter can reach?
- Is a licence required for the new panel? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. The roadmap describes a redesign of how presenters pick what to share; Microsoft has not said it adds data access, and existing meeting policy settings for content sharing remain the documented controls.
cost: Low. The only cost the sources show is admin and communications time; Microsoft has not published a licence or meter for the new panel.
impact: High. MC1317197 says the redesigned experience is enabled by default for all Teams work and school users joining meetings on Windows desktop, Mac desktop and the web, and cannot be disabled at the tenant level.
-->
