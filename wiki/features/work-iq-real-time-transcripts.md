---
title: "Work IQ: real-time Teams meeting transcripts for apps and agents"
slug: "work-iq-real-time-transcripts"
roadmapId: 570651
topic: "copilot-studio"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)","Work IQ"]
summary: "Apps and agents can receive Teams meeting transcripts while the meeting is in progress through Work IQ. Admins control it with a separate Teams setting that is off by default."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "No licence stated for the transcript access. Consuming agents may use consumption billing."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","teams","meeting-transcripts","real-time","transcript-api","agents","privacy"]
sources:
  - title: "Manage transcript API access for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 570651"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570651"
    kind: "roadmap"
  - title: "Work IQ access to real-time meeting transcripts (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts"
    kind: "learn"
  - title: "Transcription allowed in the meeting policy (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
    kind: "learn"
  - title: "Transcription allowed in the meeting policy (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","teams-ai-generated-meeting-memory","work-iq-memory-capabilities-expand-to-agents"]
controls:
  - governs: "Work IQ access to real-time meeting transcripts"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Transcript API access > WorkIQ access"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -Identity Global -EnableWorkIQTranscriptAccess $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts"
    note: "Off by default. Needs the latest Teams PowerShell module."
  - governs: "Which apps may read transcripts"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > app > API permissions"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    api: null
  - governs: "Transcription allowed in the meeting policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
confidence: "high"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ real-time Teams transcripts, with setting effective 14 November 2026."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 39
  unconfirmed: 1
  contradicted: 3
  attempts: 1
---

## What's changing

Work IQ lets agents and apps, including ones an organisation builds, receive the transcript of a Teams meeting or call while it is in progress. The roadmap describes it as access to meeting transcripts in real time for assistance and insights.

Learn states a separate **Work IQ access** setting controls this. It is independent of Microsoft Graph access and is off by default. Turning it on does not start transcription, and an app only receives a transcript if AI is allowed in the meeting, transcription is running, the app acts for a signed-in user with the right Entra permissions, and Work IQ is enabled for that organisation.

Learn says Work IQ access takes effect on 14 November 2026. The roadmap shows a preview from September 2026 and general availability targeted for November 2026.

## Why it matters

Real-time access allows agents to act during a meeting, which raises privacy and compliance questions that post-meeting transcript access does not. Real-time transcripts received through Work IQ include speaker names, and the Include speaker attribution setting applies only to Graph.

Because the organiser's organisation decides, external meetings may behave differently from internal ones. Apps already using real-time transcripts need the setting turned on to keep working.

## Risk assessment

**Data exposure**
- Live speech content and speaker names are delivered to apps and agents.
- The organiser's tenant setting decides, not the app's tenant.

**Security & identity**
- Apps act on behalf of a signed-in user and need Entra permissions.

**Autonomy & actions**
- Agents could act on meeting content in real time; actions depend on the agent design.

**Change & support**
- Turning the setting off does not stop transcripts already in progress, and changes are not immediate.

## Cost and licensing

Not yet published for transcript access itself. Learn states Work IQ in Copilot Studio uses consumption billing with Copilot Credits, with no separate spending policy needed. Teams transcription must already be available for the meeting.

## Scope

Teams meetings and calls in the Worldwide cloud, on the web per the roadmap. The setting applies by the meeting organiser's organisation. Microsoft 365 Copilot, Facilitator and intelligent recap are not affected by the setting.

## Governance guidance

### Before rollout
- [ ] Identify apps and agents in your organisation that need real-time transcripts.
- [ ] Decide whether Work IQ access should be on before 14 November 2026.
- [ ] Review "Allow AI in all meetings" and transcription policies.
- [ ] Update privacy notices and meeting etiquette.

### At rollout
- [ ] Turn on WorkIQ access in the Teams admin center or with Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess.
- [ ] Check Entra permissions for each app.

### After rollout
- [ ] Test denied and allowed cases.
- [ ] Review which apps receive transcripts.
- [ ] Revisit the setting if apps change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ access to real-time meeting transcripts</strong><br><small>Tenant</small><br><small class="controls__note">Off by default. Needs the latest Teams PowerShell module.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › WorkIQ access <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity Global -EnableWorkIQTranscriptAccess $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which apps may read transcripts</strong><br><small>App</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Transcription allowed in the meeting policy</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The tenant toggle is a single switch with no per-group scoping; the per-app boundary is Entra API permissions and admin consent. Allow AI in all meetings must also be on for transcripts to flow. The cmdlet reference for the configuration object is [Set-CsTeamsMeetingConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration).

## Open questions

- How will external organisers' settings interact with your policies?
- Is there per-meeting or per-app auditing of delivered transcripts?
- What billing applies to agents that consume transcripts?
- Which sovereign clouds will be supported?

<!-- rationale
risk: High. Live transcripts can contain sensitive spoken content and speaker names, and the setting takes effect on 14 November 2026, with organiser-tenant rules deciding access.
cost: Not yet published. Work IQ in Copilot Studio uses consumption billing, so agents consuming transcripts may use Copilot Credits.
impact: Medium. Meeting participants are affected indirectly; admins and app owners must act.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] controls[1].ui; Governance controls / admin-path: The cited transcript access page documents Entra ID > App registrations > app > API permissions. | Found: Searched: Microsoft Entra app registrations API permissions. Opened meeting-transcript-api-access (only an Entra permissions link, no path), quickstart-configure-app-access-web-apis (path present), and grant-admin-consent. | Fix: Keep the app-registration path but change controls[1].ui.docs, the rendered table link and sources to https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis, which explicitly gives Entra ID > App registrations > client application > API permissions. Qualify this route as for apps registered in the tenant; for other enterprise apps, cite https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent and document Entra ID > Enterprise apps > All applications > app > Security > Permissions.
- [contradicted, blocker] controls[1].api; Governance controls / absence: Automation for the per-app Entra API permissions/consent boundary is not yet documented. | Found: Grant admin consent for delegated permissions using Microsoft Graph API ... POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants | Fix: Replace the null API side with the documented general Entra consent automation. For example, use POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants with body keys clientId, consentType (AllPrincipals for tenant-wide consent), resourceId and scope, and cite this page. State that the resource service principal and delegated scopes must be those required by the app; do not copy the article's sample Graph scopes as Work IQ permissions. | Source: https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent
- [supported, minor] front matter: licensing; Cost and licensing; rationale: cost / absence: Microsoft has not published a separate licence or price specifically for the real-time transcript access setting. | Found: Searched: "Work IQ" "real-time transcripts" "license" "billing"; "Work IQ" "real-time" "transcript" "pricing". Read meeting-transcript-api-access, enable-work-iq and Work IQ API overview/licensing excerpts; no separate transcript-specific licence or rate found. | Fix: Narrow 'Not yet published for transcript access itself' to 'No separate transcript-specific licence or rate is documented as of November 2026.' Add that enabling Work IQ requires a usage-based billing plan and user assignment, citing https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq. Distinguish the unknown transcript-specific charge from the published Work IQ consumption model.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / cost: Work IQ in Copilot Studio uses consumption billing, so consuming agents may incur consumption costs. | Found: Work IQ uses consumption billing. A separate spending policy isn't required for Work IQ. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq to sources and cite it in Cost and licensing; it supports the consumption billing, Copilot Credits and separate-spending-policy statements but is currently absent from the source list. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq
- [supported, minor] controls[1].scope; Governance controls / applicability: Per-app access is bounded by Entra API permissions and consent. | Found: Users, or their admins, will need to consent to these permissions before using your app. ... As an admin, you can grant admin consent for the full set of an API's permissions that appear in the table, and revoke consent for individual permissions. | Fix: Cite this Entra permissions page alongside the feature-specific prerequisite that the app acts for a signed-in user with Entra permissions. Say 'Entra API permissions and the required consent' rather than implying every general delegated permission requires administrator consent. | Source: https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to review Allow AI in all meetings, but the controls table has no row for it. | Found: Review "Allow AI in all meetings" and transcription policies. ... [Controls table lists Work IQ access, app permissions and transcription policy only.] | Fix: Add an 'Allow AI in all meetings' control row after researching its documented UI and automation. The cited transcript access article establishes applicability but does not give its configuration path, so do not infer a path or command.
- [contradicted, minor] front matter: action; Governance guidance: Before rollout / consistency: The page labels the action prepare and asks readers to decide before 14 November 2026, although that date has passed. | Found: Work IQ access takes effect on November 14, 2026. If apps in your organization already receive real-time transcripts through Work IQ, turn on Work IQ access before that date to keep them working. | Fix: For the 16 November 2026 run, change action to act-now because the default-off setting can interrupt existing apps. Replace the past-deadline checklist item with 'Immediately confirm whether existing apps need Work IQ transcript access and enable the setting if approved'; retain Microsoft's original effective date. | Source: https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access
-->
