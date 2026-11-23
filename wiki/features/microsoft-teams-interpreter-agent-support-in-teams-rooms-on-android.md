---
title: "Microsoft Teams Rooms on Android: Interpreter agent for real-time meeting translation"
slug: "microsoft-teams-interpreter-agent-support-in-teams-rooms-on-android"
roadmapId: 562665
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Interpreter, Teams' real-time speech translation agent, is rolling out to Teams Rooms on Android with a Teams Rooms Pro licence. The Teams meeting policy controls it; Learn also still lists Rooms on Android as unsupported."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Teams and Surface Devices"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn says a Teams Rooms Pro licence is required for Teams Rooms devices, in place of the Microsoft Copilot licence, and includes 20 hours of interpretation per month. Access beyond the included hours is subject to available capacity."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["teams","teams-rooms","meeting-policy","ai","interpreter-agent","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 562665"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562665"
    kind: "roadmap"
  - title: "Manage Interpreter agent for your organization"
    url: "https://learn.microsoft.com/microsoftteams/interpreter-agent-teams"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-language-selection-by-users-in-teams-rooms-on-android","microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-rooms-on"]
controls:
  - governs: "Whether Interpreter is available in meetings (including Teams Rooms on Android)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AIInterpreter Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/interpreter-agent-teams"
    note: "Learn says the parameter is enabled by default and covers simultaneous and consecutive interpretation. Set per meeting policy; Enabled turns it back on."
  - governs: "Whether users can choose voice simulation and the default voice option"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -VoiceSimulationInInterpreter VoiceSimulationDisabled"
      docs: "https://learn.microsoft.com/microsoftteams/interpreter-agent-teams"
    note: "Learn says VoiceSimulationDisabled hides the Simulate my voice option. Enabled and Disabled set the default voice instead; applies to simultaneous interpretation only."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-20T22:38:45"
changes:
  - date: "2026-11-23"
    note: "New briefing: Interpreter agent in Teams Rooms on Android, including the conflict between the release notes and the Interpreter admin page."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 47
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9a2606ade8178e2c21f159f98708ff75"
---

## What's changing

Interpreter agent support is arriving in Teams Rooms on Android. The Interpreter agent acts as a translator in Teams meetings: participants listen to the meeting in their chosen language through real-time translation. The roadmap item says it is available in Teams Rooms on Android licensed for Teams Rooms Pro.

The Teams Rooms release notes list "Interpreter agent support during meetings" under Teams Rooms on Android build 1449/1.0.96.2026249711 (September 2026), and say it is controlled using the Teams meeting policy. Another entry in the same release notes section resolves an issue where Interpreter was shown on the in-meeting console despite the interpreter policy being set to disabled.

The Interpreter admin page covers what the agent does. It performs real-time speech-to-speech translation and supports Chinese (Mandarin), English, French, German, Italian, Japanese, Korean, Portuguese and Spanish for speaking and listening. Participants can have Interpreter simulate their own voice or use a preset automated voice, with Ava as the default.

The two Microsoft pages disagree. The Interpreter admin page still lists Microsoft Teams Rooms on Android under platforms where Interpreter isn't supported, and lists Teams Rooms on Windows as supported. The roadmap item and the release notes say the feature is available. This briefing reports both and rates on the roadmap and release notes, the later and more specific statements about this platform.

The roadmap item is Rolling out, with a target of August CY2026, release phase General Availability, and lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

## Why it matters

For a service owner this is a new AI-processed audio path in meeting rooms, switched on by a meeting policy parameter that Learn says is enabled by default. Rooms with a Teams Rooms Pro licence can offer translated listening, so expect room users to start using it, and expect questions about where room audio goes.

If nobody acts, the policy default applies: Learn says -AIInterpreter is enabled by default. Decide before rooms update whether that fits your organisation's rules on audio processing and voice handling, and tell room owners what the feature does and which languages it covers.

## Risk assessment

**Data exposure**
- Learn says a bot transmits meeting audio for cloud-based processing and returns translations instantly. Meeting content in a room therefore leaves the device for translation whenever Interpreter is in use. The meeting policy parameter -AIInterpreter is the control.
- Learn says voice samples or biometric data are never stored when a user lets Interpreter simulate their voice. -VoiceSimulationInInterpreter sets the default and can hide the option.

**Security & identity**
- Learn lists a Microsoft 365 base licence, a Teams licence and, for Teams Rooms devices, a Teams Rooms Pro licence as prerequisites. Rooms without Pro are not described as entitled.

**Autonomy & actions**
- Interpreter translates and speaks on participants' behalf. Learn describes translation output only, not other actions on tenant data.
- With voice simulation enabled by default, other participants hear translated speech in a simulated version of the speaker's voice unless the user or admin chooses an automated voice.

**Change & support**
- Learn's Interpreter page and the release notes disagree on Android support, so a room user or helpdesk may be told conflicting things. Test in a pilot room before relying on either.
- A release-notes fix covers Interpreter appearing on the console while the policy was disabled; keep rooms on current builds if you turn the policy off.

## Cost and licensing

**Licence.** The Interpreter page says that for Teams Rooms devices a Teams Rooms Pro licence is required in place of the Microsoft Copilot licence, alongside an eligible Microsoft 365 base licence and Teams licence. The release notes say 20 hours of interpretation are included per room account per month with a Teams Rooms Pro licence.

**Beyond the included hours.** Both pages say access beyond the included hours is subject to available capacity.

**Meter.** The Interpreter page says consecutive interpretation is a usage-based experience that consumes Copilot Credits, billed to the meeting organiser's applicable billing policy, and that only the organiser can turn it on, using Teams desktop. Simultaneous interpretation is the mode described for rooms.

**Indirect cost.** Admin time to set the meeting policy, and communication to room users.

## Scope

**Users and licences.** Rooms on Android licensed for Teams Rooms Pro, per the roadmap item and release notes.

**Clouds.** The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Platform is listed as Teams and Surface Devices.

**Rollout.** Status is Rolling out with an August CY2026 target. The release notes introduce it in Teams Rooms on Android build 1449/1.0.96.2026249711 (September 2026).

**Related platforms.** The Interpreter page lists Teams events, 1:1 PSTN calls and personal peripherals used with Teams Rooms as unsupported. Teams Rooms on Windows is listed as supported.

## Governance guidance

### Before rollout
- Confirm with Teams Rooms owners which Android rooms hold a Teams Rooms Pro licence, since the release notes tie the feature to that licence.
- Decide whether room meetings may use Interpreter, given that meeting audio is sent to a cloud service for translation, and record the decision.
- Review the current -AIInterpreter and -VoiceSimulationInInterpreter values on each Teams meeting policy before rooms update.

### At rollout
- Update a pilot Android room to build 1449/1.0.96.2026249711 or later, and test Interpreter in a meeting before wider use.
- Set -AIInterpreter to Disabled on any meeting policy that must not offer Interpreter, and re-test after the room updates.
- Set -VoiceSimulationInInterpreter to the value you want as the default, or VoiceSimulationDisabled to hide the Simulate my voice option.

### After rollout
- Ask room owners and the helpdesk whether room users see Interpreter where you expect it, and where they do not.
- Re-read the Interpreter admin page and the Teams Rooms release notes for changes to the Android support statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Interpreter is available in meetings (including Teams Rooms on Android)</strong><br><small>Tenant</small><br><small class="controls__note">Learn says the parameter is enabled by default and covers simultaneous and consecutive interpretation. Set per meeting policy; Enabled turns it back on.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AIInterpreter Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/interpreter-agent-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can choose voice simulation and the default voice option</strong><br><small>Tenant</small><br><small class="controls__note">Learn says VoiceSimulationDisabled hides the Simulate my voice option. Enabled and Disabled set the default voice instead; applies to simultaneous interpretation only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -VoiceSimulationInInterpreter VoiceSimulationDisabled</code> <a href="https://learn.microsoft.com/microsoftteams/interpreter-agent-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says you must use PowerShell to manage Interpreter for your entire organisation, so both rows are PowerShell. The release notes say Interpreter on Teams Rooms on Android is controlled using the Teams meeting policy.

The -AIInterpreter parameter turns Interpreter on or off for simultaneous and consecutive interpretation in meetings. Turning it on does not replace the licensing and Copilot Credits spending policy prerequisites for consecutive interpretation. -VoiceSimulationInInterpreter applies to simultaneous interpretation only.

The Interpreter page also gives -AIInterpreter on the Teams calling policy for 1:1 VoIP calls; that does not govern room meetings.

## Open questions

- Is Teams Rooms on Android now supported for Interpreter? The Interpreter admin page still lists it as not supported while the release notes and roadmap say it is available. Watch the Interpreter page and the Teams Rooms release notes.
- Do the Teams Rooms on Android release notes and the roadmap apply equally to GCC, GCC High and DoD, which the roadmap lists? The release notes do not split the entry by cloud.
- What happens to a room's meetings once the included 20 hours per room account per month are used up? Both pages say access beyond the included hours is subject to available capacity.
- Does the -AIInterpreter policy fully stop Interpreter on every supported build of Teams Rooms on Android? The release notes list a fix for Interpreter showing while the policy was disabled.

<!-- rationale
risk: Medium. Meeting audio is sent to a cloud service for translation and the -AIInterpreter meeting policy parameter is enabled by default, but the same policy can turn it off.
cost: Low. Learn says Teams Rooms Pro includes 20 hours of interpretation per room account per month, so the cost it shows is the Pro licence the room needs and admin time.
impact: Medium. People in Pro-licensed Android rooms and the remote participants who share their meetings notice it; it does not touch users who never join through such a room.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: supported languages / behaviour: The Interpreter admin page lists Chinese (Mandarin), English, French, German, Italian, Japanese, Korean, Portuguese and Spanish for speaking and listening. | Found: Interpreter supports the following languages for speaking and listening: Chinese (Mandarin), English, French, German, Italian, Japanese, Korean, Portuguese, Spanish. | Fix: After the language list, add: 'Microsoft's Teams admin release notes for May 20, 2026 also say Traditional Chinese is officially supported.' Cite https://learn.microsoft.com/officeupdates/teams-admin#may-20,-2026, which states 'Traditional Chinese is now officially supported.' | Source: https://learn.microsoft.com/microsoftteams/interpreter-agent-teams
- [supported, minor] Risk assessment: Autonomy & actions / default: Voice simulation is enabled by default, so translated speech uses the simulated personal voice unless changed. | Found: **Enabled**: Sets the default value for **Choose your voice when interpreted** to **Simulate my voice**. | Fix: Add: 'The Interpreter admin page says voice simulation defaults to Enabled, but the Set-CsTeamsMeetingPolicy reference lists Disabled as the default for VoiceSimulationInInterpreter; check the assigned policy.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps, whose parameter table says 'Default value: Disabled'. | Source: https://learn.microsoft.com/microsoftteams/interpreter-agent-teams
-->
