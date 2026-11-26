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
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 47
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "a65e52ef4011d8c5e82397dae60df605"
---

## What's changing

Microsoft plans to let Mac devices that connect to Omnissa Horizon virtual desktops use the new Teams VDI optimisation, which runs a media engine called SlimCore on the user's own device instead of on the virtual machine. The roadmap item describes it as providing "an expanded feature set and multiple improvements in quality, reliability and performance" compared with the current optimisation.

Microsoft Learn documents the new VDI solution for Teams, but not yet this combination. At the time of writing (November 2026), the [New VDI solution for Teams](https://learn.microsoft.com/microsoftteams/vdi-2) page says the new optimisation "supports Windows endpoints for AVD/W365, Citrix, Omnissa and Amazon. Mac is only supported on AVD/W365 and Citrix." For Omnissa it documents the plugin only for Windows (MsTeamsPluginOmnissa.dll, bundled with Horizon Client for Windows 8.17 (2512) or higher). What follows about Omnissa on Mac is therefore the roadmap's description plus what Learn says about the new optimisation in general.

On the general behaviour, Learn says the Teams VDI policy setting that allows the new optimisation is enabled by default, and that once minimum requirements are met Teams "will attempt to load in SlimCore optimized mode, by default". The new optimisation adds features the older WebRTC-based optimisation lacks, including 1080p video, Gallery View 3x3 and 7x7 and Quality of Service.

The roadmap item is In development, with preview targeted for December CY2026 and general availability targeted for February CY2027, for Worldwide (Standard Multi-Tenant) and GCC, on Mac.

## Why it matters

This moves where Teams call and meeting media is processed for Mac users on Horizon. In the new architecture the virtual desktop client starts a media engine process (MsTeamsVdi.exe) that carries out all the network activity, and media flows directly between the user's device and the other party or Teams servers. Firewall rules, proxy settings and device management on the Macs, not only on the virtual machines, then decide call quality.

Because the Teams VDI policy allows the new optimisation by default, expect eligible Mac users to be moved to it once their Teams and Horizon client versions meet requirements that Microsoft has yet to publish for Omnissa on Mac. Administrators who want to hold it back for a pilot need a Teams VDI policy with the setting disabled, applied with PowerShell, before preview.

## Risk assessment

**Data exposure**
- No new data store: the change is about where audio, video and screen-sharing media is processed. Media travels as Secure Real-time Transport Protocol (SRTP) between the media engine on the device and the peer or Teams servers, according to the Learn page.

**Security & identity**
- A new media engine package is downloaded and run on the user's Mac. For Citrix and Azure Virtual Desktop on Mac, Learn says the plugin installs it automatically and silently; how the Horizon Client for Mac delivers the plugin and media engine is not yet documented. Confirm this with Omnissa and Microsoft before allowing it on managed Macs.

**Autonomy & actions**
- No change: the feature acts only when a user makes or joins a call or meeting.

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
- Confirm that the virtual machines' network allows IDs 11 and 12 from the Microsoft 365 URLs and IP address ranges, which Learn requires for Omnissa screen sharing.
- Ask Omnissa and Microsoft how the plugin and media engine reach Macs, so device management can deploy or allow them.

### At rollout
- Pilot with a small group whose Teams VDI policy has VDI2Optimization set to Enabled, and check the VDI Status Indicator in Teams shows the new optimisation.
- Check that firewall and proxy rules on the Mac network allow Teams media from the device, since the media engine on the device carries the network traffic.
- Brief help desk staff on the connection error codes Learn lists in Troubleshooting the new optimization.

### After rollout
- Review call quality for Horizon users on Mac in the Teams admin center and Call Quality Dashboard, which Learn lists as supported with the new optimisation.
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
risk: Medium. Call media moves from the virtual desktop to a new media engine process on the Mac, which talks to Teams services directly, so endpoint networking and software deployment need checking; the Teams VDI policy can withhold it per user.
cost: Low. The Teams desktop client is available under all supported Teams subscription plans; the cost the sources show is admin time for client updates and network checks. Organisational custom backgrounds need Teams Premium.
impact: Medium. Only people who run Teams in Omnissa Horizon virtual desktops from a Mac notice it: call and meeting quality and features change for them.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first sentence; rationale: risk / behaviour: This change moves existing Horizon Mac call media processing from the virtual desktop to the Mac. | Found: Searched: Omnissa Teams WebRTC optimization Mac endpoint media processing local device existing optimization; Omnissa media endpoint WebRTC optimization architecture. Read vdi-2 and teams-client-vdi-requirements-deploy; neither establishes this prior Horizon Mac processing location. | Fix: Replace the first sentence of Why it matters with 'This introduces the SlimCore media engine for Teams users connecting to Horizon desktops from Macs.' In the risk rationale replace 'Call media moves from the virtual desktop to a new media engine process on the Mac' with 'The planned optimisation uses a new SlimCore media engine on the Mac'. Do not claim where the previous optimisation processed calls.
- [contradicted, blocker] Why it matters: architecture paragraph / behaviour: The endpoint media engine carries out all the network activity for the new architecture. | Found: For Omnissa, Amazon or for MAC (Citrix or AVD/W365), the sharing is done directly between the user's virtual machine -the presenter- and the other peer -viewer- or conference server | Fix: Replace the second sentence of Why it matters with 'Learn describes SlimCore media and signalling connections from the endpoint to peers or Teams servers; for Omnissa, outgoing screen sharing is sent from the virtual machine.' This retains the source's screen-sharing exception and avoids assigning its Windows executable name to an undocumented Horizon Mac implementation. Source: https://learn.microsoft.com/microsoftteams/vdi-2. | Source: https://learn.microsoft.com/microsoftteams/vdi-2
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: There is no new data store. | Found: Logs are stored in the following directory on the user's device: ~/Library/Application Support/Microsoft/TeamsVDI | Fix: Remove 'No new data store: the change is about where audio, video and screen-sharing media is processed.' Retain the following SRTP sentence. Learn documents endpoint logs for supported Mac deployments, so an unqualified absence of a new data store is not justified. | Source: https://learn.microsoft.com/microsoftteams/vdi-2
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: The feature acts only when a user makes or joins a call or meeting. | Found: Once you meet all the minimum requirements, launching Teams for the first time will attempt to load in SlimCore optimized mode, by default. | Fix: Replace this bullet with 'The documented optimisation is initialised when Teams starts; call media is processed when users make or join calls or meetings.' Source: https://learn.microsoft.com/microsoftteams/vdi-2. | Source: https://learn.microsoft.com/microsoftteams/vdi-2
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: At rollout / behaviour: Microsoft's Troubleshooting the new optimization page lists connection error codes. | Found: | Standard Error Code | loadErrc or deployErrc | Definition | Notes | 2000 | 16002 | No Plugin | ... | 2001 | 16008 | Virtual Channel Not Available | | Fix: Add https://learn.microsoft.com/microsoftteams/vdi-2-troubleshooting to sources, titled 'Troubleshooting the new optimization', and link that title in the At rollout bullet. | Source: https://learn.microsoft.com/microsoftteams/vdi-2-troubleshooting#connection-error
- [contradicted, minor] Governance guidance: Before rollout, At rollout and After rollout / consistency: The checklist's network-rule checks and call-quality reporting checks have corresponding controls-table rows. | Found: Checklist: 'Confirm that the virtual machines' network allows IDs 11 and 12'; 'Check that firewall and proxy rules on the Mac network allow Teams media'; 'Review call quality ...'. The table contains only three Teams VDI policy rows. | Fix: The Before rollout VM network check, At rollout Mac firewall/proxy check, and After rollout call-quality reporting check have no controls-table row. Remove those three checklist bullets to align the checklist with the existing table; retain the network and support discussion elsewhere. Do not add unverified control rows.
-->
