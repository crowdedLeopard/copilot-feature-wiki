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
action: "act-now"
licensing:
  model: "consumption"
  notes: "No separate transcript-specific licence or rate is documented as of November 2026. Work IQ uses consumption billing, and enabling it requires a usage-based billing plan with the user assigned to it."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","teams","meeting-transcripts","real-time","transcript-api","agents","privacy"]
sources:
  - title: "Manage transcript API access for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 570651"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570651"
    kind: "roadmap"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Configure app permissions for a web API"
    url: "https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis"
    kind: "learn"
  - title: "Grant tenant-wide admin consent to an application"
    url: "https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent"
    kind: "learn"
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
related: ["microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe","microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies","work-iq-a2a-and-mcp-long-running-tasks"]
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
      docs: "https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants with body clientId, consentType (AllPrincipals), resourceId, scope"
      docs: "https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent"
    note: "General Entra consent route for apps registered in the tenant. Permissions granted programmatically are not subject to review or confirmation and take effect immediately."
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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected the Entra app-permissions control (path, link, Graph consent call), narrowed the licensing statement, and updated the action to act-now now that 14 November 2026 has passed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected after the check: licensing model set to consumption, and the Entra consent note now says that programmatically granted permissions take effect immediately without review."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d3c23a3bff6367f79cb9b6437eb59517"
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

No separate transcript-specific licence or rate is documented as of November 2026. Learn states Work IQ uses consumption billing with no separate spending policy required ([Work IQ in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq)). Enabling Work IQ requires a usage-based billing plan in Copilot Studio with the user assigned to the plan ([Enable your tenant for Work IQ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq)). Teams transcription must already be available for the meeting.

## Scope

Teams meetings and calls in the Worldwide cloud, on the web per the roadmap. The setting applies by the meeting organiser's organisation. Microsoft 365 Copilot, Facilitator and intelligent recap are not affected by the setting.

## Governance guidance

### Before rollout
- Identify apps and agents in your organisation that need real-time transcripts.
- Confirm immediately whether existing apps need Work IQ transcript access and enable the setting if approved; Learn gives 14 November 2026 as the date it takes effect.
- Review transcription policies.
- Update privacy notices and meeting etiquette.

### At rollout
- Turn on WorkIQ access in the Teams admin center or with Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess.
- Check Entra permissions for each app.

### After rollout
- Test denied and allowed cases.
- Review which apps receive transcripts.
- Revisit the setting if apps change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ access to real-time meeting transcripts</strong><br><small>Tenant</small><br><small class="controls__note">Off by default. Needs the latest Teams PowerShell module.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › WorkIQ access <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity Global -EnableWorkIQTranscriptAccess $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access#manage-work-iq-access-to-real-time-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which apps may read transcripts</strong><br><small>App</small><br><small class="controls__note">General Entra consent route for apps registered in the tenant. Permissions granted programmatically are not subject to review or confirmation and take effect immediately.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions <a href="https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants with body clientId, consentType (AllPrincipals), resourceId, scope</code> <a href="https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Transcription allowed in the meeting policy</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The tenant toggle is a single switch with no per-group scoping; the per-app boundary is Entra API permissions and the required consent. For apps registered in your tenant, the table gives the App registrations route; for other enterprise apps, [Grant tenant-wide admin consent](https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent) gives Entra ID > Enterprise apps > All applications > app > Security > Permissions. When using the Graph call, set the resource service principal and delegated scopes to those the app needs; the sample scopes on that page are not Work IQ permissions. Allow AI in all meetings must also be on for transcripts to flow. The cmdlet reference for the configuration object is [Set-CsTeamsMeetingConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration).

## Open questions

- How will external organisers' settings interact with your policies?
- Is there per-meeting or per-app auditing of delivered transcripts?
- What billing applies to agents that consume transcripts?
- Which sovereign clouds will be supported?

<!-- rationale
risk: High. Live transcripts can contain sensitive spoken content and speaker names, and the setting takes effect on 14 November 2026, with organiser-tenant rules deciding access.
cost: Variable. No separate transcript-specific licence or rate is documented as of November 2026; Work IQ uses consumption billing, so agents consuming transcripts may use Copilot Credits.
impact: Medium. Meeting participants are affected indirectly; admins and app owners must act.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: Learn states a separate spending policy is not required for Work IQ. | Found: Work IQ uses consumption billing. A separate spending policy isn't required for Work IQ. | Fix: Replace the spending-policy clause with: 'For Work IQ in Copilot Studio, Learn says a separate spending policy is not required. For direct Work IQ API integrations, Microsoft's migration guide instructs administrators to assign users to a spending policy that includes Work IQ API.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api#prepare-work-iq, which says 'assign the migration users to a spending policy that includes Work IQ API'. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft Entra admin center > Entra ID > App registrations > app > API permissions reaches app permissions. | Found: Browse to Entra ID > App registrations, and then select your client application (not your web API). Select API permissions, then Add a permission and select My APIs in the sidebar. | Fix: The path stops on the correct page but not at the consent control. For the tenant-registered apps this row describes, set ui.path and the rendered path to 'Entra ID > App registrations > All applications > app > Manage > API permissions > Grant admin consent', using the already-cited https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent#grant-admin-consent-in-app-registrations-pane. | Source: https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis
- [supported, minor] controls[1].api; Governance controls table / command: POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants with clientId, consentType AllPrincipals, resourceId and scope grants delegated tenant-wide consent. | Found: POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants Request body { "clientId": "00001111-aaaa-2222-bbbb-3333cccc4444", "consentType": "AllPrincipals", "resourceId": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1", "scope": "User.Read.All Group.Read.All" } | Fix: Set api.call and the rendered call to 'POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants'. Add to the note: 'The request body sets clientId, consentType (AllPrincipals), resourceId, and scope to grant delegated tenant-wide consent.' | Source: https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Teams admin center > Meetings > Meeting policies > policy > Recording & transcription reaches the transcription policy section. | Found: In the left navigation of the Teams admin center, go to Meetings > Meeting policies. Select an existing policy or create a new one. Go to the Recording & transcription section | Fix: Set ui.path and the rendered path to 'Meetings > Meeting policies > policy > Recording & transcription > Transcription'. Add https://learn.microsoft.com/microsoftteams/meeting-transcription-captions#meetings to sources and use it for ui.docs; it documents 'Toggle Transcription On or Off'. The cited Copilot page supplies the Recording & transcription section. | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events
-->
