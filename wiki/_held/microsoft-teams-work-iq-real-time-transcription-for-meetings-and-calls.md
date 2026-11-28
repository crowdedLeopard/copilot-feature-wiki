---
title: "Work IQ: real-time Teams meeting and call transcripts through MCP"
slug: "microsoft-teams-work-iq-real-time-transcription-for-meetings-and-calls"
roadmapId: 572674
topic: "copilot-studio"
products: ["Microsoft Teams","Work IQ"]
summary: "Work IQ plans to give authorised apps and agents live Teams transcripts over MCP. Learn documents a Teams setting for Work IQ access that is off by default, and consumption billing applies to Work IQ API use."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says Work IQ API use consumes Copilot Credits, with no separate Work IQ API subscription, SKU or per-user licence. No transcript-specific rate is published at the time of writing (November 2026)."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","teams","meeting-transcripts","real-time","transcript-api","mcp","agents","usage-based-billing","copilot-credits","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 572674"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=572674"
    kind: "roadmap"
  - title: "Manage transcript API access for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "June 2026 announcements (Partner Center)"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-june#work-iq-api-and-consumptive-pricing-update"
    kind: "docs"
videos: []
related: ["work-iq-real-time-transcripts","work-iq","mcp","microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe","copilot-credits"]
controls:
  - governs: "Whether Work IQ can deliver real-time transcripts to apps and agents"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Transcript API access > WorkIQ access"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    note: "Off by default. Needs the latest Teams PowerShell module. Learn does not name this roadmap item or MCP."
  - governs: "Whether transcription can run in meetings (existing control, not specific to Work IQ)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Decides whether transcription can run; it does not decide whether apps receive the transcript."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: Work IQ real-time transcripts for meetings and calls through MCP, with the documented Teams setting and consumption billing."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the default and impact wording to reflect the 14 November 2026 Work IQ access date, replaced the claim that no separate MCP switch is documented, and removed three checklist steps with no controls-table row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 80
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "8ddd900f8f89bddccb117eefbfba1693"
---

## What's changing

The roadmap item says Work IQ will let authorised apps and AI agents read transcript content from supported Teams meetings and calls while the conversation is still happening, through Model Context Protocol (MCP, the standard that lets agents call tools). Developers could then combine live conversation context with business data, for example for contextual recommendations, customer-support assistance, action-item capture and workflow automation. The roadmap says the capability uses an active Teams transcript feed, needs applicable permissions and consent, and does not automatically start transcription.

The roadmap record lists the item as In development, with a preview targeted for December CY2026 and general availability targeted for January CY2027, for Worldwide (Standard Multi-Tenant) on desktop and web. These are Microsoft's targets.

Microsoft Learn does not mention this roadmap item or an MCP transcript tool at the time of writing (November 2026). It does document the setting that governs the same capability: Work IQ lets agents and apps, including ones an organisation builds, receive the transcript of a Teams meeting or call while it is in progress, and the **WorkIQ access** setting controls whether they can. Learn states that Work IQ access takes effect on 14 November 2026, which is earlier than the roadmap's preview and general availability targets. Both are reported here as written.

The same capability has its own briefing from an earlier roadmap item: [Work IQ: real-time Teams meeting transcripts for apps and agents](/features/work-iq-real-time-transcripts/).

## Why it matters

Live transcript access moves meeting speech to software while people are still talking, rather than after a transcript is saved. Learn says real-time transcripts received through Work IQ include speaker names, so an app or agent that receives one sees who said what.

Work IQ access is off by default; Microsoft says organisations already receiving real-time transcripts through Work IQ needed to enable it before 14 November 2026 to keep those apps working. The decision for a service owner is whether to turn the setting on, and for which apps to approve, before developers build on it. Because the organiser's organisation decides, the setting also applies to meetings your users organise even when the app belongs to another organisation.

## Risk assessment

**Data exposure**
- Live speech content and speaker names can be delivered to apps and agents. Learn states that real-time transcripts received through Work IQ include speaker names and that the **Include speaker attribution** setting applies only to Microsoft Graph, so that setting does not limit this route.
- The setting of the organisation that organised the meeting applies, not the setting of the app's organisation or the user the app acts for. Check the setting in every tenant whose users organise meetings.

**Security & identity**
- Learn says an app receives a transcript only if it acts on behalf of a signed-in user and has the permissions it needs in Microsoft Entra ID, and that Work IQ API uses delegated authentication and does not support application-only authentication. Review which apps hold those permissions before turning the setting on.

**Autonomy & actions**
- The roadmap names workflow automation and action-item capture as uses, so an agent could act on what it hears in a meeting. Microsoft has not described what actions the transcript feed itself triggers; what an agent does is set by that agent's own design and tools.

**Change & support**
- Learn says turning off Work IQ access does not stop transcripts that apps are already receiving; they continue until the meeting or call ends, and changes can take some time to apply to new requests. Expect a delay when withdrawing access.
- Learn says that with Allow AI in all meetings on and Work IQ access off, Work IQ requests are denied while other AI experiences work as configured. Developers will see denied requests rather than empty transcripts.

## Cost and licensing

Learn's Work IQ overview says Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing, with usage consuming Copilot Credits shared with other eligible services. A Partner Center announcement says there is no separate Work IQ API subscription, SKU or per-user licence. See [Copilot Credits](/concepts/copilot-credits/) for the shared meter.

The Learn page for enabling Work IQ lists these prerequisites: a usage-based billing plan set up in Copilot Studio with an Azure subscription and resource group assigned, the user assigned to the billing plan, and a user with the Global Administrator role for the one-time Work IQ setup.

Microsoft has not published a Copilot Credit rate for live transcript access at the time of writing (November 2026), so the cost of a transcript-reading agent cannot be estimated from published figures. Learn's overview says Work IQ cost can be managed in the Microsoft 365 admin center; it gives no path, so no control row is listed for it. Indirect costs are admin time and the developer time to build and review apps.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) only, on desktop and web, for Microsoft Teams and Work IQ. It does not list the US Government clouds; that is a record fact and not a statement that the feature is unavailable there.

Learn lists conditions for an app to receive a real-time transcript: AI is allowed in the meeting, transcription is running (Work IQ does not start transcription), the app acts on behalf of a signed-in user with the permissions it needs in Microsoft Entra ID, and Work IQ is enabled for that user's organisation. Enabling Work IQ in an organisation is a one-time step by a Global Administrator.

The Teams setting is a tenant-level setting in meeting settings. Learn does not describe a per-user or per-meeting switch for Work IQ access.

## Governance guidance

### Before rollout
- Confirm with the Teams admin whether **WorkIQ access** is currently on or off, using the first row of the controls table.
- List the apps and agents that already request real-time transcripts; Learn says apps already receiving them through Work IQ needed the setting turned on by 14 November 2026 to keep working.
- Check the meeting policy **Transcription** setting for the users whose meetings you want covered; it decides whether transcription can run at all.

### At rollout
- Turn on **WorkIQ access** only when the apps that will use it have been reviewed, and say who owns each app.
- Run a test meeting with transcription started by a person, since Work IQ does not start transcription, and confirm the app receives text.
- Tell meeting organisers that approved apps can receive live transcript text and speaker names once the setting is on.

### After rollout
- Allow time for changes to apply: turning access off does not end transcripts already being received.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ can deliver real-time transcripts to apps and agents</strong><br><small>Tenant</small><br><small class="controls__note">Off by default. Needs the latest Teams PowerShell module. Learn does not name this roadmap item or MCP.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › WorkIQ access <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether transcription can run in meetings (existing control, not specific to Work IQ)</strong><br><small>User</small><br><small class="controls__note">Decides whether transcription can run; it does not decide whether apps receive the transcript.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The **WorkIQ access** setting is the control Learn documents for this capability. Learn says it is independent of Microsoft Graph access, so the **Microsoft Graph access** toggle on the same page does not turn Work IQ access on or off. The parameter requires the latest version of the Teams PowerShell module.

The meeting policy **Transcription** setting is an existing control that decides whether transcription can run. It does not control whether apps receive the transcript, and Learn's table says that when Allow AI in all meetings is off, no transcript is available whether Work IQ access is on or off.

Per-app permissions in Microsoft Entra ID are a condition Learn gives for receiving a transcript, but that Learn page gives no path for them, so no row is listed. Learn does not say whether the setting applies to an MCP route specifically; the roadmap says transcripts arrive through MCP, and Learn lists a remote MCP server among the Work IQ API endpoints. Microsoft Learn documents tenant-level Work IQ MCP policy controls separately; it does not explicitly map those controls to this planned live-transcript capability. See [Policy governance for Work IQ MCP](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp).

## Open questions

- Does the **WorkIQ access** setting that Learn documents also govern the MCP route the roadmap describes? Watch the Learn page Manage transcript API access for Teams meetings and the Work IQ MCP documentation.
- How does the 14 November 2026 effective date on Learn relate to the roadmap's December CY2026 preview and January CY2027 general availability? Watch the roadmap item and Message center.
- What does a transcript-reading call cost in Copilot Credits? No rate is published at the time of writing (November 2026).
- Which permissions and consent will an app need to read live transcripts through MCP, and where will admins grant them? The roadmap says applicable permissions and consent are required but names none.

<!-- rationale
risk: Medium. Live speech and speaker names can reach apps and agents, but Learn documents Work IQ access to real-time transcripts as off by default, with a Teams admin center switch.
cost: Variable. Learn says Work IQ API usage is billed in Copilot Credits; no rate specific to transcripts is published, so cost depends on how much the apps and agents consume.
impact: Low. New use requires an administrator to enable access, but existing Work IQ transcript integrations needed the setting enabled before 14 November 2026 to keep working.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: third paragraph / absence: Microsoft Learn does not document an MCP transcript tool at the time of writing in November 2026. | Found: Your app subscribes to the meeting transcript by calling the create_entity tool. Work IQ returns a subscription ID and a stream URL. | Fix: Replace the first sentence of What's changing's third paragraph with: "Microsoft Learn now documents Work IQ real-time transcripts through the Work IQ MCP server in a public-preview developer guide." Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts to sources. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts
- [contradicted, blocker] Governance controls: third paragraph after table; Open questions: first bullet / absence: Learn does not say whether WorkIQ access applies to the MCP live-transcript route. | Found: You subscribe to a live meeting through the Work IQ MCP server ... Work IQ access to real-time transcripts is on ... turn on WorkIQ access, or run Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global. | Fix: Replace the sentence beginning "Learn does not say whether the setting applies" with: "The public-preview real-time transcripts developer guide confirms that WorkIQ access must be on for live transcripts through the Work IQ MCP server." Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts. Remove the first Open questions bullet because that guide answers it. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts
- [contradicted, blocker] Governance controls: third paragraph after table / absence: Microsoft does not explicitly map Work IQ MCP policy controls to live-transcript access. | Found: Work IQ MCP policy allows the subscription operations ... Subscribing, retrieving segments, and unsubscribing use the create_entity, do_action, and delete_entity tools. | Fix: Replace "Microsoft Learn documents tenant-level Work IQ MCP policy controls separately; it does not explicitly map those controls to this planned live-transcript capability" with: "Microsoft Learn documents tenant-level Work IQ MCP policy controls separately; the real-time transcripts developer guide requires that policy to allow subscription operations using create_entity, do_action and delete_entity." Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts alongside the existing policy-governance link. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: previewDate; What's changing; Open questions / record: The roadmap preview target is December CY2026. | Found: "previewDate": "December CY2026" | Fix: Keep the roadmap preview target. Add to What's changing: "Microsoft Learn now describes Work IQ real-time transcripts through MCP as available in public preview; features, schemas and payload fields can change before general availability." Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts and retain the separately attributed roadmap targets.
- [supported, minor] Cost and licensing: setup-guide prerequisites; Scope: second paragraph / role: Enabling Work IQ is described as a setup performed by a Global Administrator. | Found: A user with Global Administrator role for the one-time Work IQ setup | Fix: Keep the prerequisites attributed to the setup guide. Replace Scope's final sentence in its second paragraph with: "The Work IQ setup guide describes a one-time Global Administrator setup; the MCP overview says the service principal is created automatically on first use, with manual provisioning potentially needed before first use." Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview#authentication, which states: "The Work IQ service principal is created automatically in the tenant when you use Work IQ for the first time." | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq
- [supported, minor] Open questions: fourth bullet / record: The roadmap requires applicable permissions and consent but names none. | Found: requires applicable permissions and consent | Fix: Replace the fourth Open questions bullet with: "The public-preview developer guide specifies the Work IQ delegated permission WorkIQAgent.Ask and requires admin consent for live-transcript access through MCP." Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/real-time-transcripts#prerequisites, which says "Add the Work IQ delegated permission WorkIQAgent.Ask" and "Grant admin consent for the permission." The roadmap's omission is accurate, but presenting the permission as an unanswered question is misleading now.
-->
