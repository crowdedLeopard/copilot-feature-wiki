---
title: "Copilot Notebooks: add Teams meetings as references"
slug: "teams-meetings-in-copilot-notebooks"
roadmapId: 560706
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "Users can add Teams meetings, with transcripts, notes, chats and shared files, as references in Copilot Notebooks. Users choose to add them; no meeting-specific admin switch is documented, so check the Notebooks policy."
status: "launched"
releasePhase: ["Current Channel","General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Web"]
targetDate: "June CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn's requirements page says Copilot Notebooks users need the Microsoft Copilot or Copilot Chat licence. No separate licence, meter or price for meeting references is published."
audiences: ["m365-admin","compliance","security","change-adoption"]
tags: ["copilot-notebooks","onenote","m365-copilot","meeting-transcripts","teams","cloud-policy","sharepoint-embedded"]
sources:
  - title: "Microsoft 365 Roadmap 560706"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560706"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks permissions"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-permission"
    kind: "learn"
  - title: "Summary of governance, lifecycle, and compliance capabilities for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
videos: []
related: ["meeting-transcripts","cloud-policy","meeting-policy","m365-copilot-csv-and-tsv-references-in-copilot-notebooks","m365-copilot-jpg-and-png-references-in-copilot-notebooks"]
controls:
  - governs: "Whether users can create and use Copilot Notebooks, including adding meeting references"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Whole-Notebooks control, not meeting-specific. Disabled hides the Notebooks module; existing items are kept. Scope to All users or a group."
  - governs: "Whether users can transcribe Teams meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $false"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing control over whether transcripts are created. Not documented as governing what Copilot Notebooks can reference."
  - governs: "A switch for meeting references in Copilot Notebooks, separate from the Notebooks policy"
    scope: "tenant"
    ui: null
    api: null
    note: "The admin policies page lists two settings, creation and code previews; neither is specific to meeting references."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-11T22:53:53"
changes:
  - date: "2026-11-23"
    note: "First briefing: Teams meetings as Copilot Notebooks references, with the Notebooks Cloud Policy and Teams transcription controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 51
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "43f8985ef0f5e93baece5480683994aa"
---

## What's changing

Copilot Notebooks can now take Teams meetings as references. The Microsoft 365 Copilot release notes (entry dated August 25, 2026) say users can link meeting transcripts, notes, chats and shared files within their notebooks, where notebooks previously supported files as references. The roadmap item describes the aim as grounding Copilot on the discussions and decisions behind a project, so that outputs such as presentations and briefs draw on them.

The release notes give the user steps: open a Copilot notebook in Microsoft 365, select 'Add reference' and choose a Teams meeting from recent meetings. That makes it a step each user takes. Microsoft Learn does not describe what is copied or linked when a meeting is added, or how a meeting's own permissions apply, so what follows about behaviour is limited to the release notes and the roadmap description.

The roadmap lists the item as Launched, with a preview date of April CY2026 and a target date of June CY2026. It covers Android, Desktop, iOS and Web in the Worldwide (Standard Multi-Tenant) cloud, for OneNote and Microsoft Copilot (Microsoft 365).

## Why it matters

Meetings hold decisions, names and sometimes confidential discussion, and a notebook turns that material into a working set that Copilot summarises and reuses in new documents. A notebook is also something users share, so the question for an administrator is where meeting content ends up once it is attached to one.

Microsoft has not stated an admin-side default for meeting references, and the release notes describe a user action. In the wiki's view, expect adoption to come from users who already work in Notebooks, and decide now whether the existing Notebooks policy and the Teams transcription policy give you the boundary you want.

## Risk assessment

**Data exposure**

- Meeting transcripts, notes, chats and shared files can be linked into a notebook, according to the release notes. Notebooks are stored in a user-owned SharePoint Embedded container shared with Loop My workspace, and storage counts toward the organisation's SharePoint quota.
- The permissions page says anyone a notebook is shared with gains access to all the files referenced in it, and that access to linked files is granted automatically where possible. It describes files and does not mention meetings, so how a shared notebook treats a referenced meeting is not documented.
- The permissions page says Copilot Notebooks don't support external sharing.

**Security & identity**

- Conditional Access applies at the level of the whole Microsoft Copilot app, not to Notebooks alone, and Information Barriers are not supported for content in SharePoint Embedded containers, according to the compliance summary. A tenant that relies on Information Barriers to separate groups should treat meeting references as outside that protection.
- Copilot Notebooks don't have container sensitivity labels, because they share a container with all Copilot Pages.

**Autonomy & actions**

- No autonomous action is described. The release notes steps have the user choose the meeting to add.

**Change & support**

- Disabling the Notebooks policy hides the Notebooks module in the Microsoft Copilot app for users in scope and stops new notebooks being created; existing items are not deleted. It is not a meeting-only control.
- Policy changes take up to 90 minutes to show where policy configurations already exist, and up to 24 hours where none did.
- Copilot Notebooks content is covered by Purview eDiscovery, retention policies configured for all SharePoint sites, and audit logs, according to the compliance summary.

## Cost and licensing

**Licence.** The requirements page says users need the Microsoft Copilot or Copilot Chat licence to use Copilot Notebooks. Meeting references are a capability inside Notebooks, and that page names no other licence.

**Meter.** No separate licence, meter or price for meeting references is published at the time of writing (November 2026).

**Indirect costs.** Notebook storage counts toward the organisation's SharePoint quota, and the compliance summary says there is no admin control to set quota limits on individual containers. Expect admin time for the policy review and user communication below.

## Scope

**Users.** People with the licence above who use Copilot Notebooks. The release notes steps are performed by the user inside a notebook.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) only, and Android, Desktop, iOS and Web. The roadmap does not list the US Government clouds; the pages read do not say whether the feature is available there.

**Prerequisites.** The Notebooks policy must allow creation for the user, and a user without a OneDrive site cannot create notebooks if OneDrive creation has been disabled for them, according to the admin policies page. The Teams meeting must exist as one the user can choose from recent meetings; what a meeting needs to contain (for example a transcript) is not documented.

## Governance guidance

### Before rollout

- Identify who holds the Microsoft Copilot or Copilot Chat licence, since those users can use Notebooks.
- Decide whether the Notebooks policy stays enabled for everyone, using the Cloud Policy row in the controls table.
- Review the Teams transcription policy in the controls table, because transcripts are one of the content types the release notes name.
- Ask your Purview and SharePoint owners to confirm that retention, eDiscovery and audit settings cover SharePoint Embedded containers.

### At rollout

- Pilot with a group using the two-group Cloud Policy pattern the admin policies page describes, if you want to limit Notebooks to a subset.
- Tell users that sharing a notebook gives recipients access to the files it references, and ask pilot users to test, with a non-sensitive meeting, what a recipient can see of an added meeting.
- Keep Notebooks out of any plan that depends on Information Barriers.

### After rollout

- Search the Microsoft Purview audit log for Copilot Notebooks activity; Copilot Notebooks create and update .pod files.
- Watch SharePoint storage, since notebook content counts toward the quota.
- Re-read the Learn release notes and the Notebooks admin policies page for a meeting-specific control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and use Copilot Notebooks, including adding meeting references</strong><br><small>User</small><br><small class="controls__note">Whole-Notebooks control, not meeting-specific. Disabled hides the Notebooks module; existing items are kept. Scope to All users or a group.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe Teams meetings</strong><br><small>User</small><br><small class="controls__note">Existing control over whether transcripts are created. Not documented as governing what Copilot Notebooks can reference.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $false</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for meeting references in Copilot Notebooks, separate from the Notebooks policy</strong><br><small>Tenant</small><br><small class="controls__note">The admin policies page lists two settings, creation and code previews; neither is specific to meeting references.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents the Notebooks creation policy and the Teams transcription policy, but no setting aimed at meeting references. The Cloud Policy row governs Notebooks as a whole, so using it also removes every other Notebooks capability for the users in scope. It is set in the Microsoft 365 Apps admin center and can be scoped to groups with the priority ordering the admin policies page describes.

The Teams transcription row is an existing control over whether transcripts can be created. No page read says that it governs what Notebooks can reference, so treat it as a related control, not an enforcement point for this feature.

## Open questions

- Is a meeting added to a notebook linked or copied, and do the meeting's own permissions still decide who can read it? Watch the Notebooks permissions page and the Message center.
- When a notebook is shared, do recipients gain access to referenced meeting transcripts, notes and chats, as the permissions page says they do for files?
- Will Microsoft add a setting that turns off meeting references without disabling Notebooks, and a PowerShell or Graph route to the Cloud Policy setting?
- Do the Teams transcription and recording policies affect which meetings can be added, and what happens to a reference if the transcript later expires?

<!-- rationale
risk: Medium. Meeting transcripts, notes and chats become grounding material in notebooks that can be shared, and Microsoft documents no meeting-specific switch or sharing behaviour for them.
cost: Low. Notebooks need the Microsoft Copilot or Copilot Chat licence the requirements page names; no separate meter or price for meeting references is published, so the known cost is admin time.
impact: Medium. People who use Copilot Notebooks and add meetings as references notice it; it is a step each user chooses, not a change to what everyone sees.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Open questions / absence: No PowerShell or Graph route to the Notebooks Cloud Policy setting is documented. | Found: These resources also support remediation and applyOnce. Controls whether users can create and view Copilot Pages and Copilot Notebooks through Microsoft 365 Copilot Chat and Copilot Actions. | Fix: Replace the automation gap with the documented preview Graph route: kind graph, call 'POST /beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. The note must say: 'Preview, tenant-level policies only; fails if the target setting is configured in any group-level policy. Use mode applyOnce and a baseline resourceType microsoft.copilot.copilotpagesnotebooks, resourceVersion 1, with properties.value set to the string "0" to disable or "1" to enable. AI Administrator is the least-privileged signed-in role; the calling app needs delegated ConfigurationMonitoring.ReadWrite.All and the TCM service principal needs delegated CopilotPolicySettings.ReadWrite.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Remove the Open questions wording that asks whether Microsoft will publish a Graph route to this setting. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources
- [contradicted, blocker] Governance controls / applicability: Using the Notebooks policy removes every other Notebooks capability for users in scope. | Found: Existing Copilot Pages and Notebooks aren't deleted. Users can still view and edit existing items if they have permission. | Fix: Replace 'so using it also removes every other Notebooks capability for the users in scope' with 'disabling it prevents new notebooks and hides the Notebooks module in the Microsoft Copilot app, but existing items are not deleted and can still be viewed and edited with permission'. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing; Cost and licensing; Scope; Governance guidance; rationale: cost / licensing: The requirements page says Notebooks users need the Microsoft Copilot or Copilot Chat licence, supporting an included licensing model for this capability. | Found: ### Copilot Notebooks Users need the Microsoft Copilot or Copilot Chat license. | Fix: Retain the attributed requirements-page statement and included model, but add: 'Microsoft documentation differs: the Graph TCM resource reference says Copilot Notebooks also require a Microsoft 365 Copilot license.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type. Do not present Copilot Chat eligibility as settled across both sources. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements
- [contradicted, minor] Governance guidance: Before rollout and After rollout; controls / consistency: The governance checklist asks readers to check retention, eDiscovery, audit and SharePoint storage controls that have no corresponding controls-table rows. | Found: confirm that retention, eDiscovery and audit settings cover SharePoint Embedded containers; Search the Microsoft Purview audit log; Watch SharePoint storage. The table contains only Notebooks policy, Teams transcription and the meeting-reference switch gap. | Fix: The retention, eDiscovery, audit and SharePoint-storage checklist steps lack control rows. Without adding rows, remove the Before rollout bullet asking owners to confirm retention, eDiscovery and audit settings and the After rollout bullets asking readers to search the audit log and watch storage. Keep the separately supported explanatory facts in the risk and cost sections.
-->
