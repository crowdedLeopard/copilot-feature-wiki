---
title: "Microsoft Teams: new SlimCore-based VDI optimisation for Omnissa Horizon on Mac endpoints"
slug: "microsoft-teams-new-vdi-solution-for-omnissa-on-mac"
roadmapId: 580870
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to extend the new SlimCore-based Teams media optimisation to Mac devices connecting to Omnissa Horizon virtual desktops. VDI administrators should plan client versions, networking and the Teams VDI policy."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Mac"]
targetDate: "February CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The Teams service description says all supported subscription plans are eligible for the Teams desktop clients. No licence specific to this optimisation is published; organisational custom backgrounds in the new optimisation need a Teams Premium licence."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["teams","macos","vdi","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 580870"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580870"
    kind: "roadmap"
  - title: "New VDI solution for Teams"
    url: "https://learn.microsoft.com/microsoftteams/vdi-2"
    kind: "learn"
  - title: "Install Teams for Virtualized Desktop Infrastructure (VDI)"
    url: "https://learn.microsoft.com/microsoftteams/teams-client-vdi-requirements-deploy"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Troubleshooting the VDI 2.0 solution for Teams"
    url: "https://learn.microsoft.com/microsoftteams/vdi-2-troubleshooting"
    kind: "learn"
  - title: "Set-CsTeamsVdiPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvdipolicy?view=teams-ps"
    kind: "docs"
  - title: "Grant-CsTeamsVdiPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsvdipolicy?view=teams-ps"
    kind: "docs"
videos: []
related: []
controls:
  - governs: "Whether users can be optimised with the new SlimCore-based VDI optimisation"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsVdiPolicy -Identity <policy name> -VDI2Optimization Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvdipolicy?view=teams-ps"
    note: "VDI2Optimization is Enabled by default at the Global org-wide level; Horizon's own policies do not control the new mode."
  - governs: "Which users a Teams VDI policy applies to"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Grant-CsTeamsVdiPolicy -Identity <user> -PolicyName <policy name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsvdipolicy?view=teams-ps"
    note: "The cmdlet also has a -Group parameter set with -Rank, and a -Global parameter set."
  - governs: "Whether users who are not optimised can make calls and join meetings"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsVdiPolicy -Identity <policy name> -DisableCallsAndMeetings $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvdipolicy?view=teams-ps"
    note: "Applies to users on a non-optimised VDI environment, for example if the new optimisation does not load on a Mac."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-26"
    note: "New briefing: SlimCore-based Teams VDI optimisation planned for Omnissa Horizon on Mac, with the Teams VDI policy controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the media-path description (Omnissa screen sharing is sent from the virtual machine), removed the unsupported no-new-data-store and calls-only statements, and trimmed checklist items without a control row."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 56 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 55
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "957a54f0801fa6ca3df09be1f2d226f9"
---

## What's changing

Microsoft plans to let Mac devices that connect to Omnissa Horizon virtual desktops use the new Teams VDI optimisation, which runs a media engine called SlimCore on the user's own device instead of on the virtual machine. The roadmap item describes it as providing "an expanded feature set and multiple improvements in quality, reliability and performance" compared with the current optimisation.

Microsoft Learn documents the new VDI solution for Teams, but not yet this combination. At the time of writing (November 2026), the [New VDI solution for Teams](https://learn.microsoft.com/microsoftteams/vdi-2) page says the new optimisation "supports Windows endpoints for AVD/W365, Citrix, Omnissa and Amazon. Mac is only supported on AVD/W365 and Citrix." For Omnissa it documents the plugin only for Windows (MsTeamsPluginOmnissa.dll, bundled with Horizon Client for Windows 8.17 (2512) or higher). What follows about Omnissa on Mac is therefore the roadmap's description plus what Learn says about the new optimisation in general.

On the general behaviour, Learn says the Teams VDI policy setting that allows the new optimisation is enabled by default, and that once minimum requirements are met Teams "will attempt to load in SlimCore optimized mode, by default". The new optimisation adds features the older WebRTC-based optimisation lacks, including 1080p video, Gallery View 3x3 and 7x7 and Quality of Service.

The roadmap item is In development, with preview targeted for December CY2026 and general availability targeted for February CY2027, for Worldwide (Standard Multi-Tenant) and GCC, on Mac.

## Why it matters

This introduces the SlimCore media engine for Teams users connecting to Horizon desktops from Macs. Learn describes SlimCore media and signalling connections from the endpoint to peers or Teams servers; for Omnissa, outgoing screen sharing is sent from the virtual machine. Firewall rules, proxy settings and device management on the Macs, not only on the virtual machines, then decide call quality.

Because the Teams VDI policy allows the new optimisation by default, expect eligible Mac users to be moved to it once their Teams and Horizon client versions meet requirements that Microsoft has yet to publish for Omnissa on Mac. Administrators who want to hold it back for a pilot need a Teams VDI policy with the setting disabled, applied with PowerShell, before preview.

## Risk assessment

**Data exposure**
- Media travels as Secure Real-time Transport Protocol (SRTP) between the media engine on the device and the peer or Teams servers, according to the Learn page.

**Security & identity**
- A new media engine package is downloaded and run on the user's Mac. For Citrix and Azure Virtual Desktop on Mac, Learn says the plugin installs it automatically and silently; how the Horizon Client for Mac delivers the plugin and media engine is not yet documented. Confirm this with Omnissa and Microsoft before allowing it on managed Macs.

**Autonomy & actions**
- The documented optimisation is initialised when Teams starts; call media is processed when users make or join calls or meetings.

**Change & support**
- Learn says that for Omnissa, outgoing screen sharing is done directly from the virtual machine, so administrators must allow ID 11 and 12 from the Microsoft 365 URLs and IP address ranges on the virtual machine's network. Missing rules surface as failed screen sharing.
- Horizon's own Teams optimisation policies do not govern the new mode: Learn says "the VDI Partner's policy engines don't control the new optimization mode". The Teams VDI policy does.
- Learn lists cross-cloud collaboration as not supported on Omnissa Horizon with the new optimisation, which matters for GCC tenants that meet other clouds.

## Cost and licensing

**Licence.** The [Microsoft Teams service description](https://learn.microsoft.com/office365/servicedescriptions/teams-service-description) says "All supported subscription plans are eligible for access to the Teams web client, desktop clients, and mobile apps." The new VDI optimisation is part of the Teams desktop client in the virtual desktop, and Microsoft publishes no separate licence for it.

**Premium features.** The [New VDI solution for Teams](https://learn.microsoft.com/microsoftteams/vdi-2) feature list marks organisational custom backgrounds as requiring a Teams Premium licence.

**Meter.** Microsoft publishes no meter or charge for this optimisation.

**Indirect costs.** Admin time to update Teams and Horizon clients on Macs, adjust firewall rules for endpoint media and virtual-machine screen sharing, and create a Teams VDI policy if a staged rollout is wanted.

## Scope

- **Users:** people who run Teams in an Omnissa Horizon virtual desktop from a Mac.
- **Clouds:** Worldwide (Standard Multi-Tenant) and GCC, as the roadmap record lists them.
- **Platforms:** Mac, per the roadmap record.
- **Prerequisites:** Learn gives a Teams minimum for Mac endpoints of 26072.521.4595.7966 or higher. A minimum Horizon Client for Mac version is not yet published; Learn lists only "Client for Windows 8.17 or higher" for Omnissa Horizon.
- **Configuration:** the Teams VDI policy is managed with the MicrosoftTeams PowerShell module.
- **Rollout:** preview targeted for December CY2026, general availability targeted for February CY2027.

## Governance guidance

### Before rollout
- Identify which users connect to Horizon desktops from Macs, and which Teams and Horizon Client versions they run.
- Create a Teams VDI policy with VDI2Optimization set to Disabled and assign it to users who should stay on the current optimisation until a pilot finishes.
- Ask Omnissa and Microsoft how the plugin and media engine reach Macs, so device management can deploy or allow them.

### At rollout
- Pilot with a small group whose Teams VDI policy has VDI2Optimization set to Enabled, and check the VDI Status Indicator in Teams shows the new optimisation.
- Brief help desk staff on the connection error codes Learn lists in [Troubleshooting the VDI 2.0 solution for Teams](https://learn.microsoft.com/microsoftteams/vdi-2-troubleshooting).

### After rollout
- Remove the pilot Teams VDI policy assignments once the rollout is accepted.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can be optimised with the new SlimCore-based VDI optimisation</strong><br><small>User</small><br><small class="controls__note">VDI2Optimization is Enabled by default at the Global org-wide level; Horizon's own policies do not control the new mode.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsVdiPolicy -Identity &lt;policy name&gt; -VDI2Optimization Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvdipolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users a Teams VDI policy applies to</strong><br><small>User</small><br><small class="controls__note">The cmdlet also has a -Group parameter set with -Rank, and a -Global parameter set.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Grant-CsTeamsVdiPolicy -Identity &lt;user&gt; -PolicyName &lt;policy name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsvdipolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users who are not optimised can make calls and join meetings</strong><br><small>User</small><br><small class="controls__note">Applies to users on a non-optimised VDI environment, for example if the new optimisation does not load on a Mac.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsVdiPolicy -Identity &lt;policy name&gt; -DisableCallsAndMeetings $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvdipolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Teams VDI policy is the control Microsoft documents for the new optimisation: Learn calls VDI2Optimization "the only configuration point to control whether or not a user can get the new optimization mode" and says Horizon's own policies do not control it. Its default value is Enabled. Microsoft Learn documents the policy through the MicrosoftTeams PowerShell module and gives no Teams admin center path for it at the time of writing (November 2026). DisableCallsAndMeetings applies to users who are not optimised, so it decides whether a Mac user can still make calls and join meetings if the new optimisation fails to load. Policies are created with New-CsTeamsVdiPolicy and assigned per user, per group (with a rank) or to the tenant with Grant-CsTeamsVdiPolicy.

## Open questions

- Which Horizon Client for Mac version will bundle the Teams plugin, and does it install the plugin and media engine without user action? Watch the New VDI solution for Teams page.
- Will Microsoft publish end-of-support dates for WebRTC-based optimisation on Omnissa Mac endpoints? Learn says the Omnissa timelines in Message Center post 1465766 cover Windows-based endpoints only.
- Will the Mac limitations Learn lists for Citrix and Azure Virtual Desktop (for example share system audio and town hall optimisation as an attendee) also apply on Omnissa?
- Will cross-cloud collaboration be supported for Omnissa with the new optimisation, which matters for GCC tenants?

<!-- rationale
risk: Medium. The planned optimisation uses a new SlimCore media engine on the Mac, which talks to Teams services directly, so endpoint networking and software deployment need checking; the Teams VDI policy can withhold it per user.
cost: Low. The Teams desktop client is available under all supported Teams subscription plans; the cost the sources show is admin time for client updates and network checks. Organisational custom backgrounds need Teams Premium.
impact: Medium. Only people who run Teams in Omnissa Horizon virtual desktops from a Mac notice it: call and meeting quality and features change for them.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Change & support / behaviour: Missing network rules surface as failed screen sharing. | Found: Searched: Teams SlimCore Omnissa screen sharing fails virtual machine firewall ID 11 12. Opened vdi-2 networking and screen sharing, and vdi-2-troubleshooting. The VM network requirement is stated, but this specific failure symptom is not. | Fix: Remove 'Missing rules surface as failed screen sharing.' Keep the preceding documented requirement to allow IDs 11 and 12 on the virtual machine's network.
-->
