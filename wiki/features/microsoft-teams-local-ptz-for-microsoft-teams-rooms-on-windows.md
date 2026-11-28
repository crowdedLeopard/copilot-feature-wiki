---
title: "Microsoft Teams Rooms on Windows: local pan, tilt and zoom controls on the room console"
slug: "microsoft-teams-local-ptz-for-microsoft-teams-rooms-on-windows"
roadmapId: 409534
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Windows adds console controls that let people in the room pan, tilt and zoom a supported camera. The room setting is on by default; admins should check camera models and firmware, and know where to turn it off."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams Rooms devices need a Teams Rooms Basic or Teams Rooms Pro licence. The licences page does not list local PTZ in its feature comparison, so which tier carries it is not yet published; Remote configuration is listed for Pro only."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["teams","teams-rooms","pro-management-portal","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 409534"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=409534"
    kind: "roadmap"
  - title: "Camera controls in Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/camera-controls"
    kind: "learn"
  - title: "Manage a Microsoft Teams Rooms console settings remotely with an XML configuration file"
    url: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Teams Device Known Issues"
    url: "https://learn.microsoft.com/microsoftteams/devices/known-issues"
    kind: "learn"
  - title: "Enable People Recognition on Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    kind: "learn"
videos: []
related: ["microsoft-teams-enhanced-intelliframe-with-ai-data-channel-for-intelligent-cameras","microsoft-teams-intelliframe-people-labels-in-teams-rooms-on-windows","microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p"]
controls:
  - governs: "Whether local pan, tilt and zoom controls are offered on a room's console"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > room > Device settings > Peripherals > Local PTZ controls"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/camera-controls"
    api:
      kind: "other"
      call: "SkypeSettings.xml element LocalPtzControlsEnabled set to false"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    note: "Set per room (Teams Rooms on Windows). Enabled by default. Remote configuration is listed for Teams Rooms Pro only. The XML file is applied when the console restarts."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-09-28T22:58:08"
changes:
  - date: "2026-11-28"
    note: "New briefing: local PTZ is rolling out in Teams Rooms on Windows 5.7.112.0, on by default, with a per-room switch in the Pro Management portal and SkypeSettings.xml."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "dd80a55497831e07860af1bed57f0426"
---

## What's changing

Teams Rooms on Windows gains local pan, tilt and zoom (PTZ) controls: people in the room can manually adjust the selected camera from the room console, for example to move the view from the conference table to a whiteboard. Microsoft documents this on its [Camera controls in Teams Rooms](https://learn.microsoft.com/microsoftteams/rooms/camera-controls) page. The controls open from **Camera settings** (the chevron next to the camera icon on the console) and show only the operations the selected camera exposes; cameras that move a physical lens and cameras that adjust the image digitally can both qualify.

Controls appear only when several conditions hold: **Enhanced framing** (automatic framing such as IntelliFrame) is off, **Multiple camera view** is off, local PTZ is enabled for the room and on the device, and the camera is on the Cloud IntelliFrame "Cameras enabled by default" list or reports its automatic-framing state to Teams Rooms. Microsoft states that the local PTZ room control is enabled by default on Teams Rooms on Windows. A **Reset** button returns supported adjustments to their defaults, but what it restores depends on how the camera is driven, and ending a meeting does not trigger it, so a camera can stay where the last meeting left it.

The roadmap item is **Rolling out**, with a target of September CY2026, at General Availability on Desktop. The Teams Rooms release notes list local PTZ controls in Teams Rooms on Windows app version 5.7.112.0, dated 9/28/2026, with "Feature enablement is complete". The camera controls page adds that installing a supported app version does not by itself establish that local PTZ is enabled on a device.

## Why it matters

This puts camera framing in the hands of whoever is at the console. In a room that today relies on a fixed view or on automatic framing, someone can now zoom in on part of the room, and the camera may stay in that position for the next meeting. With cameras that use relative-only hardware pan and tilt, Reset restores zoom but leaves pan and tilt where they were, so a room may show a skewed view until someone corrects it by hand.

If nobody acts, the room control is on and eligible rooms on 5.7.112.0 or later offer the controls. Expect support calls of two kinds: "the controls are missing" (usually Enhanced framing is on, or the camera is not eligible) and "the camera is pointing the wrong way". Microsoft also lists a known issue where using the zoom controls can make the Teams Rooms app stop responding with some camera and firmware combinations, so an inventory of cameras and firmware is the main piece of work.

## Risk assessment

**Data exposure**
- The controls re-aim or crop the room's own camera feed, which remote participants already see; no new data source is involved. People in the room can, however, zoom in on detail (a whiteboard, a screen, a person) that the default view would not show clearly. Turning **Local PTZ controls** off for a room removes this.

**Security & identity**
- No change: the controls are used from the room console during a meeting and Microsoft documents no new account, permission or sign-in for them.

**Autonomy & actions**
- Camera position persists after a meeting. Microsoft states that ending a meeting does not invoke Reset, and for relative-only hardware pan and tilt Reset does not restore the physical position, so the next meeting can start with the previous user's framing.

**Change & support**
- Microsoft's known issues list an AVer CAM520 Pro on firmware V0.0.1000.26 where repeated zoom commands made the app stop responding, and says broader camera and firmware impact is still being evaluated. Its stated avoidance is to disable local PTZ controls and restart the console.
- Controls are hidden while Enhanced framing or Multiple camera view is on, and cameras controllable through a manufacturer's app may still show no controls, which will look like a fault to room users.

## Cost and licensing

- **Licence.** The [Teams Rooms licences page](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing) states that a shared meeting device requires a Teams Rooms licence and that Teams Rooms devices should be assigned only Teams Rooms Basic or Teams Rooms Pro (legacy licences are also valid). Local PTZ is not listed in that page's Basic and Pro feature comparison, so whether it needs Pro is not yet published.
- **Managing it remotely.** The same page lists **Remote configuration** under Teams Rooms Pro and not Basic, and states that a feature not available for a licence can't be used on devices assigned that licence. The controls table gives both the Pro Management portal switch and the XML configuration file.
- **Meter.** Microsoft documents no meter or charge for this feature.
- **Indirect costs.** Admin time to check camera models against Microsoft's eligibility rules, to move cameras onto manufacturer-recommended firmware, and to brief room users on Enhanced framing and Reset. Replacing cameras is a cost only where a room needs PTZ and its camera is not eligible.

## Scope

- **Devices.** Teams Rooms on Windows, app version 5.7.112.0 or later, with a camera connected and selected as the room camera that exposes supported PTZ operations. Microsoft's page names example cameras from Jabra, Lenovo, Logitech, Microsoft, Poly and Yealink and says the examples are not exhaustive.
- **Eligibility.** The camera is on the Cloud IntelliFrame "Cameras enabled by default" list or reports its automatic-framing state; Cloud IntelliFrame itself does not need to be turned on.
- **Who uses it.** People in the room, from the console, during a meeting.
- **Who configures it.** Admins of the Teams Rooms Pro Management portal per room, or whoever places the SkypeSettings.xml file on the device.
- **Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Out of scope for this item.** Teams Rooms on Android has its own local PTZ, documented separately on the same page, with different eligibility rules.

## Governance guidance

### Before rollout
- List the camera model and firmware in each Teams Rooms on Windows room and compare them with the Cloud IntelliFrame "Cameras enabled by default" list and the examples on the camera controls page.
- Move cameras onto the firmware the manufacturer recommends for Teams Rooms, as Microsoft advises, and test pan, tilt, zoom and Reset separately on the app version you plan to deploy.
- Decide per room whether to keep **Local PTZ controls** on in the Teams Rooms Pro Management portal; turn it off in rooms with an AVer CAM520 Pro on firmware V0.0.1000.26 until the manufacturer gives guidance.
- For rooms you do not configure through the Pro Management portal, set `LocalPtzControlsEnabled` in SkypeSettings.xml and restart the console.

### At rollout
- Tell room users that controls appear only with **Enhanced framing** off, and that **Reset** may not restore pan and tilt on every camera.
- Ask users to select **Reset** at the end of a meeting, because ending the meeting does not reset the camera.
- Brief the service desk on the eligibility checks in Microsoft's "Troubleshoot when local PTZ controls aren't shown" table.

### After rollout
- Watch for rooms where the Teams Rooms app stops responding after zoom use, and disable local PTZ there and restart the console.
- Check rooms where Reset restores zoom only, and confirm whether the camera uses relative-only pan and tilt.
- Re-check the Teams devices known issues page as Microsoft evaluates broader camera and firmware impact.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether local pan, tilt and zoom controls are offered on a room's console</strong><br><small class="controls__note">Set per room (Teams Rooms on Windows). Enabled by default. Remote configuration is listed for Teams Rooms Pro only. The XML file is applied when the console restarts.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › room › Device settings › Peripherals › Local PTZ controls <a href="https://learn.microsoft.com/microsoftteams/rooms/camera-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>SkypeSettings.xml element LocalPtzControlsEnabled set to false</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/xml-config-file" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows set the same per-room switch, which Microsoft states is enabled by default on Teams Rooms on Windows. The XML file is read at startup: the console applies the settings and deletes the file, and Microsoft says to restart the console after the file is pushed. Turning the switch off is also Microsoft's documented avoidance for the known zoom hang, together with a console restart.

The switch governs whether controls are offered at all. Whether they appear in a meeting also depends on **Enhanced framing** and **Multiple camera view** being off and on the camera's eligibility; Enhanced framing is toggled by room users in Camera settings. Microsoft documents no setting that resets the camera automatically when a meeting ends.

## Open questions

- Does local PTZ need a Teams Rooms Pro licence, or does it work on Teams Rooms Basic devices? Watch the feature comparison on the Teams Rooms licences page.
- Which camera and firmware combinations beyond the AVer CAM520 Pro are affected by the app hang Microsoft is still evaluating? Watch the Teams devices known issues page.
- Will Microsoft publish a complete list of cameras that offer local PTZ, rather than examples? Watch the camera controls page.
- Will a meeting's end ever reset the camera automatically, or a setting be added for it? Watch the Teams Rooms release notes.

<!-- rationale
risk: Low. People in the room can only re-aim the room's own camera, and Microsoft documents a per-room switch; the main concerns are camera positions that persist after a meeting and a known app hang with one camera and firmware.
cost: Low. The feature ships in the Teams Rooms on Windows app; the only costs shown are admin time to check cameras and firmware and to brief room users. A licence tier specific to local PTZ is not yet published.
impact: Medium. People who use meeting rooms with an eligible camera see new controls in Camera settings; rooms with unsupported cameras, Enhanced framing on or Multiple camera view on see no change.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; summary; controls[0].note; What's changing; Why it matters; Governance controls / default: The local PTZ room control is enabled by default on Teams Rooms on Windows. | Found: The local PTZ room control is enabled by default on Teams Rooms on Windows. | Fix: Keep defaultState on, but add: 'The camera controls and XML configuration pages say local PTZ is enabled by default; the portal settings reference instead lists Local camera PTZ control as Disabled by default.' Cite https://learn.microsoft.com/microsoftteams/rooms/device-settings-available, whose Windows Peripherals table gives that conflicting default. | Source: https://learn.microsoft.com/microsoftteams/rooms/camera-controls
- [contradicted, minor] Governance guidance: At rollout; Governance controls: table / consistency: The checklist tells readers to have users select Reset, but Reset has no row in the controls table. | Found: Ask users to select Reset at the end of a meeting, because ending the meeting does not reset the camera. / The table contains only Whether local pan, tilt and zoom controls are offered on a room's console. | Fix: Remove the At rollout bullet 'Ask users to select Reset at the end of a meeting, because ending the meeting does not reset the camera.' The checklist step names Reset without a controls-table row; this correction does not add rows.
-->
