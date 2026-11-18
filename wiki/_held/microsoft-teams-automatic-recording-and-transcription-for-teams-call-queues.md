---
title: "Microsoft Teams: automatic recording and transcription for call queues"
slug: "microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues"
roadmapId: 565215
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Admins can have Teams call queue calls recorded and transcribed automatically once a representative answers, with files kept in SharePoint. Nothing records until an admin assigns a template; Queues app users need Teams Premium."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft Learn lists no extra Teams Phone licensing for Automatic Recording for Call Queue and points to the SharePoint service description. All Queues app users require a Teams Premium licence."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["teams","teams-phone","call-queues","transcripts","sharepoint","licensing","privacy","powershell","quality-assurance","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 565215"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565215"
    kind: "roadmap"
  - title: "Setup - Automatic Recording template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    kind: "learn"
  - title: "Planning - Recording voice applications calls"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-plan-recording"
    kind: "learn"
  - title: "Reference - Voice applications prerequisites and licensing"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing"
    kind: "learn"
  - title: "Setup - Shared Call History template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history"
    kind: "learn"
  - title: "New-CsAutoRecordingTemplate"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    kind: "learn"
  - title: "Get-CsAutoRecordingTemplate"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/get-csautorecordingtemplate"
    kind: "learn"
  - title: "Set-CsCallQueue"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    kind: "learn"
  - title: "MC1401299"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1401299"
    kind: "message-center"
videos: []
related: ["microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile","microsoft-teams-copilot-in-the-queues-app-on-mobile","microsoft-teams-audio-announcement-for-recording-and-transcription"]
controls:
  - governs: "Which queues record and transcribe, and where files are stored (Automatic Recording template)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording > Add"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -Name <string> -Description <string> -SharePointHostName <host> -SharePointSiteName <site> -RecordingDocumentOwner <id> -RecordingEnabled $true -TranscriptionEnabled $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    note: "Teams admin center configuration is dated 30 September 2026 and PowerShell 13 August 2026 on Learn. SharePoint host and site can't be changed after creation."
  - governs: "Which call queue uses an automatic recording template"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Call queue > call queue > Templates > Automatic recording template"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "Set-CsCallQueue -Identity <queue GUID> -AutoRecordingTemplateId <template id>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    note: "Reference marks the parameter for Voice applications private preview customers only; saving the queue in the Teams admin center removes this setting. Teams admin must be a SharePoint site admin of the template's site."
  - governs: "Whether representatives can view recordings and transcripts"
    scope: "agent"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording > Add"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -AgentViewPermission All"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    note: "Supported values None or All. The admin center setting can't be modified once the template is created. Needs Queues app with Shared Call History."
  - governs: "The recording announcement callers hear"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording > Add"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -AutoRecordingAnnouncementTextToSpeechPrompt <text> (or -AutoRecordingAnnouncementAudioFileId <audio file id>)"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    note: "Text-to-speech text must be in the language set for the call queue."
  - governs: "Shared Call History, which lets users reach recordings in the Queues app"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Call queues > call queue > General info > Shared call history template"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history"
    api:
      kind: "powershell"
      call: "Set-CsCallQueue -Identity <queue GUID> -SharedCallQueueHistoryTemplateId <template id>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    note: "Learn lists Shared Call History as a prerequisite for automatic recording. Queues app users need Teams Premium."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: per-queue automatic recording and transcription, its template controls, prerequisites and the Teams Premium requirement for the Queues app."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 83 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 77
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "9ea183093e4a1c8e58677b6f0f36de10"
---

## What's changing

Microsoft Teams call queues can now record and transcribe calls automatically. An administrator creates an Automatic Recording template, assigns it to a call queue, and from then on calls answered by a representative are recorded without anyone starting the recording. Microsoft Learn describes it as a first-party solution: recording starts when a representative answers and stops when the call ends, and recordings and transcripts are stored in SharePoint.

The template holds the settings: whether recording and transcription are on, whether representatives can view the recordings and transcripts, the announcement callers hear, the SharePoint host and site name, and a Recording Document Owner. Recordings are reached through the Queues app call history, which needs Shared Call History enabled on the queue. Microsoft's notice MC1401299 describes the same controls, including a choice of the default announcement, a custom audio file or text-to-speech.

The roadmap item has status Launched with a target of August CY2026, for Worldwide (Standard Multi-Tenant) and GCC, in Targeted Release and General Availability, on Desktop and Mac. MC1401299 (last updated 30 June 2026) gave Targeted Release as early to mid-August 2026 and General Availability for Worldwide and GCC as mid to late August 2026, and sets no act-by date. Microsoft Learn's call queue pages (at the time of writing, November 2026) date PowerShell configuration to 13 August 2026 and Teams admin center configuration to 30 September 2026.

## Why it matters

This is a new way to capture customer conversations. Calls that, in the words of MC1401299, were previously ephemeral become recordings and transcripts held in SharePoint, so they raise questions of retention, eDiscovery, access and data subject requests that a queue owner did not face before. Microsoft states that recorded calls and transcripts may become subject to eDiscovery, retention and audit policies depending on configuration.

Because the sources describe it as something an admin enables per queue, the wiki reads the default as admin opt-in: no source says a queue records until a template is assigned. The decision to take is therefore which queues should record, who may open the files and how to tell callers and representatives, before a template goes onto a live queue.

## Risk assessment

**Data exposure**
- Recordings and transcripts are written to the SharePoint host and site named in the template. Learn says changes to the site structure, file names or permissions can cause access issues, permission errors or automatic recording failures, so treat that site as a managed store.
- Access to recordings is set by the template. In New-CsAutoRecordingTemplate, `-AgentViewPermission` takes None or All; in the Teams admin center, authorized users have access by default and the agent setting can't be modified once the template is created.
- MC1401299 flags that recordings may contain personal data and may need handling for export, deletion or access requests.

**Security & identity**
- The Teams administrator who creates the template becomes the SharePoint site admin of its site, and a Teams administrator must also be a SharePoint site administrator for that site to assign the template to a call queue or manage its authorized users.
- The Recording Document Owner can access a recording if there is a problem uploading it to SharePoint; Learn says this access is for upload failure situations.

**Autonomy & actions**
- Recording starts when a representative answers, with no manual step. MC1401299 says agents do not control recording; admins control whether agents can access recordings and transcripts.

**Change & support**
- Callers hear an announcement. The Teams admin center default is `This call will be recorded.`; a custom announcement can be configured.
- Learn lists prerequisites that will block a queue: explicit recording consent must be Off, conference mode must be enabled, call answering must use a group or channel (Users and Shifts are not supported), and Shared Call History must be enabled.
- The SharePoint host and site name can't be modified after the template is created, so a wrong value means a new template.
- Set-CsCallQueue marks `-AutoRecordingTemplateId` as for Voice applications private preview customers and says saving a call queue in the Teams admin center removes that setting; see Open questions.

## Cost and licensing

Queues app: Microsoft Learn states that all Queues app users require a Teams Premium licence (Reference - Voice applications prerequisites and licensing). Authorized users and representatives need the Queues app to reach recordings, so the Teams Premium cost scales with the people who open them.

Automatic Recording for Call Queue: the same page says no extra Teams Phone licensing is required, and points to the SharePoint service description. The base licensing for call queues is at least one Teams Phone licence and a free Teams Phone Resource Account licence for each resource account.

No meter, price or SharePoint storage charge for recordings and transcripts is stated on the pages read at the time of writing (November 2026). Expect admin time to design templates, brief representatives and manage the SharePoint site.

## Scope

Who is affected: callers to a configured queue, its representatives and any authorized users or supervisors who open recordings. Learn requires representatives and authorized users to be Enterprise Voice enabled.

Clouds and platforms as the roadmap item lists them: Worldwide (Standard Multi-Tenant) and GCC; Desktop and Mac; Targeted Release and General Availability.

Prerequisites on the Learn setup page: SharePoint site creation enabled in the tenant (default is on), the SharePoint host visited at least once before the template is created, conference mode on the queue, a group or channel for call answering, Shared Call History enabled, and explicit recording consent Off. Compliance Recording for Call Queue is a separate third-party option and is not covered here.

## Governance guidance

### Before rollout
- Decide which queues should record and review your call recording and transcription policy, as MC1401299 recommends.
- Check each chosen queue against the prerequisites: conference mode on, call answering by group or channel, Shared Call History enabled and explicit recording consent Off.
- Confirm that the SharePoint host exists and has been opened in a browser, and plan to make every Teams administrator who will manage the queues a SharePoint site admin of the template's site, as Learn recommends.
- Assign Teams Premium to the users who need the Queues app, and decide whether representatives may view recordings, since that setting can't be changed after the template is created.

### At rollout
- Create the Automatic Recording template with the announcement wording and Recording Document Owner you have agreed.
- Assign the template to one pilot queue and check that recordings and transcripts appear in the Queues app call history.
- Tell representatives and helpdesk teams that calls on those queues are recorded.

### After rollout
- Review who can open the template's SharePoint site and watch for the access or permission errors Learn warns about.
- Ask your compliance team how recordings and transcripts are handled for retention, eDiscovery and access requests.
- Re-check the template with Get-CsAutoRecordingTemplate and the queue assignment after any change made in the Teams admin center.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which queues record and transcribe, and where files are stored (Automatic Recording template)</strong><br><small>Tenant</small><br><small class="controls__note">Teams admin center configuration is dated 30 September 2026 and PowerShell 13 August 2026 on Learn. SharePoint host and site can't be changed after creation.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording › Add <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -Name &lt;string&gt; -Description &lt;string&gt; -SharePointHostName &lt;host&gt; -SharePointSiteName &lt;site&gt; -RecordingDocumentOwner &lt;id&gt; -RecordingEnabled $true -TranscriptionEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which call queue uses an automatic recording template</strong><br><small class="controls__note">Reference marks the parameter for Voice applications private preview customers only; saving the queue in the Teams admin center removes this setting. Teams admin must be a SharePoint site admin of the template's site.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Call queue › call queue › Templates › Automatic recording template <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsCallQueue -Identity &lt;queue GUID&gt; -AutoRecordingTemplateId &lt;template id&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether representatives can view recordings and transcripts</strong><br><small>Agent</small><br><small class="controls__note">Supported values None or All. The admin center setting can't be modified once the template is created. Needs Queues app with Shared Call History.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording › Add <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -AgentViewPermission All</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The recording announcement callers hear</strong><br><small class="controls__note">Text-to-speech text must be in the language set for the call queue.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording › Add <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -AutoRecordingAnnouncementTextToSpeechPrompt &lt;text&gt; (or -AutoRecordingAnnouncementAudioFileId &lt;audio file id&gt;)</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Shared Call History, which lets users reach recordings in the Queues app</strong><br><small class="controls__note">Learn lists Shared Call History as a prerequisite for automatic recording. Queues app users need Teams Premium.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Call queues › call queue › General info › Shared call history template <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsCallQueue -Identity &lt;queue GUID&gt; -SharedCallQueueHistoryTemplateId &lt;template id&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Templates are reusable: Learn says an automatic recording template can be reused across multiple call queues. Learn gives the Teams admin center default for recording and transcription as enabled in the template form, while New-CsAutoRecordingTemplate shows a default of False for `-RecordingEnabled` and `-TranscriptionEnabled`; set both explicitly. Get-CsAutoRecordingTemplate lists templates, optionally by `-Id`.

Microsoft Learn's setup page requires the Teams administrator to be a SharePoint site administrator for the template's site to assign it or manage authorized users. Microsoft Learn documents no tenant-wide switch for this feature at the time of writing (November 2026); control is per template and per queue. The Set-CsCallQueue reference describes `-AutoRecordingTemplateId` as for private preview customers and warns that saving a queue in the Teams admin center removes it, so confirm which tool you manage a queue with.

## Open questions

- Is `Set-CsCallQueue -AutoRecordingTemplateId` generally available? The cmdlet reference still says private preview customers only, while the setup page dates PowerShell configuration to 13 August 2026. Watch the Set-CsCallQueue reference.
- How are recordings and transcripts in the template's SharePoint site covered by retention, eDiscovery and audit policies? MC1401299 says they may be, depending on configuration, without giving settings.
- Is there a storage charge or quota for the SharePoint site? Learn points to the SharePoint service description and states no extra Teams Phone licensing.
- Do the GCC rollout and Teams admin center experience match Worldwide? The roadmap lists GCC; the Learn pages read do not give cloud-specific differences.

<!-- rationale
risk: Medium. Once an admin assigns a template to a queue, customer calls are recorded and transcribed into SharePoint, which creates new personal data to protect; nothing is stated to record before an admin configures it.
cost: Medium. Microsoft Learn says every Queues app user needs a Teams Premium licence, which is an add-on for the people who open recordings; it lists no extra Teams Phone licence for automatic recording itself.
impact: Medium. Callers hear a recording announcement and representatives and supervisors in each configured queue are recorded, but only queues that an admin configures are affected.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Queues app; Governance guidance: Before rollout / licensing: The user-licensing guidance specifies Teams Premium for Queues app users but omits their individual Teams Phone requirement. | Found: Users must have a Teams Phone and a Teams Premium license to use Queues app. | Fix: Replace the first Cost and licensing sentence with 'Queues app: each user needs both a Teams Phone licence and a Teams Premium licence.' Change the checklist instruction to 'Assign Teams Phone and Teams Premium to the users who need the Queues app.' Cite https://learn.microsoft.com/microsoftteams/manage-queues-app. | Source: https://learn.microsoft.com/microsoftteams/manage-queues-app
- [contradicted, blocker] controls[2].api; Governance controls: third row API / command: New-CsAutoRecordingTemplate -AgentViewPermission All is the complete displayed call for configuring representative access. | Found: New-CsAutoRecordingTemplate -Name <String> -Description <String> -SharePointHostName <String> -SharePointSiteName <String> -RecordingDocumentOwner <String> | Fix: Replace the call with 'New-CsAutoRecordingTemplate -Name <string> -Description <string> -SharePointHostName <host> -SharePointSiteName <site> -RecordingDocumentOwner <id> -RecordingEnabled $true -TranscriptionEnabled $true -AgentViewPermission All -AutoRecordingAnnouncementTextToSpeechPrompt <text>'. This creates a template with representative access; it does not update an existing template. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate
- [contradicted, blocker] controls[3].api; Governance controls: fourth row API / command: The displayed New-CsAutoRecordingTemplate announcement line is a runnable command after replacing its placeholders. | Found: -Name <String> -Description <String> -SharePointHostName <String> -SharePointSiteName <String> -RecordingDocumentOwner <String> [-TranscriptionEnabled <Boolean>] [-RecordingEnabled <Boolean>] | Fix: Replace the line with 'New-CsAutoRecordingTemplate -Name <string> -Description <string> -SharePointHostName <host> -SharePointSiteName <site> -RecordingDocumentOwner <id> -RecordingEnabled $true -TranscriptionEnabled $true -AutoRecordingAnnouncementTextToSpeechPrompt <text>'. Remove the parenthesised '(or ...)' prose from the executable call. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate
- [contradicted, blocker] Open questions: storage charge or quota / absence: Whether the template's SharePoint site has a storage quota or storage-capacity charge remains an unpublished question. | Found: Max storage per site (site collection) | 25 TB | 25 TB | 25 TB | 25 TB | 25 TB | You can purchase an unlimited amount of more SharePoint storage. | Fix: Remove the Open questions bullet 'Is there a storage charge or quota for the SharePoint site? Learn points to the SharePoint service description and states no extra Teams Phone licensing.' General SharePoint site and tenant storage limits are published; the absence of a feature-specific price does not make those limits unknown. | Source: https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; cost; rationale: cost / licensing: Teams Premium is an add-on licence, supporting the add-on licensing model and medium cost rating. | Found: Microsoft Teams Premium is a Teams add-on license that allows organizations with Microsoft 365 subscriptions to enhance their Teams experience | Fix: Add https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams to sources for the Teams Premium add-on classification. | Source: https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams
- [supported, minor] Risk assessment: Change & support; Scope; Governance guidance: Before rollout / behaviour: Call answering must use a group or channel. | Found: Call answering must use a group or channel. | Fix: After this prerequisite, add 'The prerequisites and licensing reference instead says to use Microsoft 365 security groups to assign representatives; the two Learn pages differ on this prerequisite.' Both https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic and https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing are already cited. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
- [unsupported, minor] rationale: impact / behaviour: Representatives and supervisors in each configured queue are recorded. | Found: Searched: "automatic recording" "call queue" "supervisors" recording calls. Read aa-cq-plan-recording and manage-queues-app; no passage says supervisors are recorded just because they belong to the queue. | Fix: Replace the impact rationale with 'Medium. Callers hear a recording announcement and representative-answered inbound calls in configured queues are recorded; only queues an admin configures are affected.'
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist names controls that have no corresponding controls-table row. | Found: Checklist: 'conference mode on, call answering by group or channel ... explicit recording consent Off'; 'make every Teams administrator ... a SharePoint site admin'; 'Review who can open ... SharePoint site'. No table rows cover these controls. | Fix: Remove the checklist instructions to check conference mode, call-answering membership and explicit recording consent, to configure SharePoint site administrators, and to review SharePoint site access. Keep the verified prerequisite and role descriptions in Scope and Risk assessment; these checklist controls have no table rows.
-->
