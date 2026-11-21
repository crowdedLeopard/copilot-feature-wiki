---
title: "Microsoft Teams: streaming switchboard for NDI sources in meetings and events"
slug: "microsoft-teams-streaming-switchboard-for-network-device-interface-ndi-sources"
roadmapId: 573453
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams is adding a streaming switchboard that lets event producers send up to eight NDI sources to production software. Admins must enable AllowNDIStreaming in a meeting policy first; no licence is published."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "The Learn page on NDI broadcast production names no licence, and no licence or price for the streaming switchboard is yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","meeting-policy","teams-events","powershell","ndi","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 573453"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573453"
    kind: "roadmap"
  - title: "Allow broadcast production in Teams meetings with NDI and SDI hardware"
    url: "https://learn.microsoft.com/microsoftteams/use-ndi-in-meetings"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "MC1521613: (Updated) Microsoft Teams: Streaming switchboard for NDI sources in meetings and events"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1521613"
    kind: "message-center"
videos: []
related: ["meeting-policy","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events"]
controls:
  - governs: "Whether users can use NDI and SDI broadcast production in meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Audio & video > Broadcast production with NDI and SDI hardware"
      docs: "https://learn.microsoft.com/microsoftteams/use-ndi-in-meetings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowNDIStreaming $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Microsoft's notice names AllowNDIStreaming in CsTeamsMeetingPolicy as the admin control for NDI streaming. Learn advises against turning it on as a global setting."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: rollout moved to mid-November 2026 per MC1521613; AllowNDIStreaming is the admin control."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 36 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 35
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "d5f908d208bfd211cdd5ec624bd888c0"
---

## What's changing

Teams is adding a streaming switchboard that lets event producers select and send up to eight Network Device Interface (NDI) sources from a Teams meeting or event to production software. Producers reach it in the meeting or event by selecting More actions, then Streaming > Streaming switchboard.

Microsoft's notice MC1521613 says administrators must enable NDI streaming before users can use the feature, and users must then turn on production capabilities in Teams. The Learn page on NDI broadcast production describes the existing policy and the user step, and lists a **Broadcast production with NDI and SDI hardware** setting that the Teams settings and policies reference gives a default of Off. Microsoft Learn does not describe the switchboard itself yet, so what this page says about its behaviour is the roadmap description and the notice.

The roadmap record shows the item as Rolling out, General Availability, with a target of November CY2026. It lists Worldwide (Standard Multi-Tenant) and GCC, on Desktop and Mac. MC1521613, updated 3 November 2026, gives general availability for Worldwide beginning in mid-November 2026 (previously early November) and expected to complete by mid-November 2026. The notice sets no act-by date.

## Why it matters

This change moves meeting content toward software outside Teams, so the decision is who may produce with NDI, not whether the switchboard exists. MC1521613 says the change adds an integration with third-party software: NDI enables Teams meeting content to be sent to production software.

If nobody acts, the sources point to no change for most users: the notice says admins must enable NDI streaming first and the settings reference lists the policy as Off. Tenants that already enabled AllowNDIStreaming for some users should expect those producers to see the switchboard as it rolls out; Microsoft has not said whether anything else changes for them.

## Risk assessment

**Data exposure**

- The switchboard sends Teams meeting content to production software. MC1521613 describes this as an integration with third-party software. The Learn page advises against turning the policy on as a global setting, so scope it to named producers.

**Security & identity**

- Access has two gates: the admin sets AllowNDIStreaming in a meeting policy, then each user turns on Production capabilities in Teams. MC1521613 says the source does not specify whether the control can be managed through Entra ID group membership, so confirm how you assign the policy before relying on groups.

**Autonomy & actions**

- No change: the roadmap item and the notice describe producers choosing which sources to stream. No autonomous behaviour is described.

**Change & support**

- Producers get a new Streaming switchboard entry under More actions > Streaming during the mid-November 2026 rollout window in the notice. Expect questions from producers who have the policy but have not turned on Production capabilities.

## Cost and licensing

The Learn page on NDI broadcast production lists steps for an admin and for users and names no licence. No licence, price or meter for the switchboard is yet published, so the licensing model shows as not yet published.

The cost the sources do show is indirect: admin time to set the policy, and communication to producers about the Production capabilities step. NDI production itself uses hardware and software the organisation supplies; Microsoft has published no charge for the switchboard.

## Scope

Microsoft's notice names event producers who use NDI streaming in Teams meetings and events as the people affected. The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, on Desktop and Mac.

Prerequisites in the notice: an admin enables AllowNDIStreaming through the CsTeamsMeetingPolicy cmdlet for the appropriate users, and each user turns on production capabilities in Teams. The Learn page gives the user step as **Production capabilities** under **Settings** > **App Permissions** in the client. The Learn page states that NDI and SDI technology is supported in all locales.

## Governance guidance

### Before rollout

- Identify the event producers and meeting-policy owners who need NDI, and keep the list short because the Learn page advises against enabling the policy globally.
- Check which existing Teams meeting policies already have **Broadcast production with NDI and SDI hardware** on, so you know who will see the switchboard first.
- Confirm with your Teams owner how meeting policies are assigned to users, since the notice does not say whether Entra ID groups can manage the control.

### At rollout

- Set AllowNDIStreaming to true on a dedicated meeting policy for producers, in the Teams admin center or with Set-CsTeamsMeetingPolicy.
- Tell producers to turn on Production capabilities under Settings > App Permissions before they try the switchboard.
- Share the path More actions > Streaming > Streaming switchboard with producers.

### After rollout

- Review who is assigned the policy and remove users who no longer produce events.
- Re-read the Learn NDI page and Message center for updates, because Microsoft Learn does not yet describe the switchboard.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use NDI and SDI broadcast production in meetings</strong><br><small>User</small><br><small class="controls__note">Microsoft's notice names AllowNDIStreaming in CsTeamsMeetingPolicy as the admin control for NDI streaming. Learn advises against turning it on as a global setting.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Audio &amp; video › Broadcast production with NDI and SDI hardware <a href="https://learn.microsoft.com/microsoftteams/use-ndi-in-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowNDIStreaming $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The one control Microsoft documents is the AllowNDIStreaming setting in a Teams meeting policy. It is per user through policy assignment, and the Learn page advises against making it a global setting.

The Learn page's PowerShell heading names the -ContentSharingInExternalMeetings parameter, but its script and the cmdlet reference use -AllowNDIStreaming; use the latter. The user step (Production capabilities in the Teams client) is set by each user, not by an admin policy shown in the pages read.

## Open questions

- Which licence, if any, does the streaming switchboard require, and will Microsoft publish a price? Watch the Learn NDI page and Message center.
- Does the switchboard change anything for tenants that already enable AllowNDIStreaming for users? Watch MC1521613.
- Can the policy be assigned through Entra ID group membership? MC1521613 says its source does not specify this.
- Will Microsoft Learn document the switchboard, including its limit of eight NDI sources?

<!-- rationale
risk: Low. Microsoft's notice says admins must enable NDI streaming first and the Teams policy default is Off, so nothing reaches production software until a meeting policy is changed.
cost: Low. The only cost the sources show is admin time to set the policy and brief producers; a licence or price for the switchboard is not yet published.
impact: Low. Microsoft's notice names event producers who use NDI streaming as the people affected; other users see no change unless an admin enables the policy for them.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Cost and licensing / behaviour: NDI production uses hardware and software the organisation supplies. | Found: Searched: Teams NDI broadcast production hardware software installed computer requirements license. Read Learn use-ndi-in-meetings and Use NDI for custom layouts; they describe networked production devices but do not establish who supplies the hardware and software. | Fix: Remove 'NDI production itself uses hardware and software the organisation supplies;' and retain 'Microsoft has published no charge for the switchboard.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; summary; Cost and licensing; Open questions / licensing: The licensing model is unknown because no licence specific to the streaming switchboard is published. | Found: Microsoft Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU. | Fix: Set licensing.model to included and replace the licensing notes with: 'Teams is licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU. No licence or price specific to the streaming switchboard is yet published.' Use the same distinction in the summary, Cost and licensing and licensing open question; cite https://learn.microsoft.com/office365/servicedescriptions/teams-service-description. | Source: https://learn.microsoft.com/office365/servicedescriptions/teams-service-description
-->
