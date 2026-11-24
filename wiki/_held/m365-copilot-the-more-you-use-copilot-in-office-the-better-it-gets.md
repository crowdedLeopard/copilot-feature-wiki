---
title: "Microsoft Copilot: memory personalises responses in Word, Excel, PowerPoint, OneNote and Workspaces"
slug: "m365-copilot-the-more-you-use-copilot-in-office-the-better-it-gets"
roadmapId: 580889
topic: "copilot-studio"
products: ["Excel","Microsoft 365","OneNote","PowerPoint","Word","Microsoft Copilot (Microsoft 365)","Work IQ"]
summary: "Microsoft plans memory in Copilot for Word, Excel, PowerPoint, OneNote and Workspaces, learning each user's work patterns. Administrators should check the Enhanced personalization control, which Learn says governs Copilot memory."
status: "in-development"
releasePhase: ["Current Channel","General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's memory page says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. That page is in preview and is not about the Office apps; a licence or meter specific to memory in them is not yet published."
audiences: ["m365-admin","compliance","security","change-adoption"]
tags: ["memory","personalisation","m365-copilot","word","excel","powerpoint","onenote","privacy"]
sources:
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 580889"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580889"
    kind: "roadmap"
videos: []
related: ["memory","m365-copilot-copilot-workspaces-updates","ediscovery","work-iq","frontier-program"]
controls:
  - governs: "Whether Copilot memory (Enhanced personalization) is on for the tenant, with an optional group it is disabled for"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "Beta. Request body sets isEnabledInOrganization and disabledForGroup. People Administrator is the least privileged role. Learn ties it to Copilot memory, not to Office-app memory."
  - governs: "Which information is added to Copilot memory"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says admins can't restrict what type of information is added to Copilot memory."
  - governs: "Retention rules for Copilot memory"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says Purview retention policies and labels don't apply to Copilot memory."
  - governs: "Audit entries for memory and personalisation actions"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says these actions don't generate Purview audit log entries."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-24"
    note: "New briefing on the roadmap item for memory in Copilot in Word, Excel, PowerPoint, OneNote and Workspaces, with the Enhanced personalization control."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 53
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "e48f7bb51a2f45fd3e03f257119633c6"
---

## What's changing

The roadmap item says Copilot in Word, Excel, PowerPoint, and Workspaces across Copilot App and OneNote will use memory to learn a user's work patterns and personalise responses. With memory, the item says, Copilot can offer more relevant suggestions, "hold the pen in a way that represents you" and adapt to preferences over time.

Microsoft Learn has no page about memory inside these Office apps at the time of writing (November 2026), so what follows about behaviour is the roadmap's description plus Microsoft's general page on Copilot memory. That page says memories, meaning saved memories, details inferred from chat history and custom instructions, are stored in the user's Exchange mailbox in a hidden folder. It also marks Copilot personalisation and memory as in preview and subject to change.

The roadmap record lists the status as In development, with a preview and general target of November CY2026. It lists Current Channel, General Availability, Preview and Targeted Release phases, Desktop, Mac and Web, and the Worldwide (Standard Multi-Tenant) cloud. Treat the dates as targets.

## Why it matters

Memory moves personalisation from a single chat into the documents people work in. Learn's overview of the Enhanced personalization control says it uses a user's private communication data, such as Teams chats, Outlook emails, transcripts, Microsoft 365 usage data and profile information, and that this data is not shared with other users. Administrators should expect questions about what Copilot has retained once it begins writing in Word or Excel on a user's behalf.

Microsoft has not stated what happens on arrival for this Office-app feature. The memory page does say Enhanced personalization is turned on by default and that no action is needed to turn Copilot memory on. The wiki's view is that a tenant which wants memory off, or limited to some users, should decide that before the preview target month ends, because the controls that exist are narrow.

## Risk assessment

**Data exposure**
- Memory is built from private Teams chats, Outlook emails, transcripts, usage data, profile information and connector data, according to Learn's Enhanced personalization overview. Learn says it is not shared with other users.
- Memories are stored in the user's Exchange mailbox in a hidden folder, so Learn says they follow the same security and compliance policies as other mailbox data, such as Customer Lockbox and encryption at rest.
- Learn says admins can search users' memory in Microsoft Purview eDiscovery or Content Search. Custom instructions are not yet discoverable there.

**Security & identity**
- Learn says admins cannot restrict what type of information is added to Copilot memory. Plan on the tenant switch being the main lever.
- Learn says memory and personalisation actions do not generate audit log entries in Purview, so changes to memory cannot be reviewed there.

**Autonomy & actions**
- The roadmap says Copilot will "hold the pen in a way that represents you". How memory shapes edits Copilot makes in a document is not described by Microsoft; confirm in a pilot before relying on it.

**Change & support**
- Learn says turning Enhanced personalization off stops Copilot applying custom instructions and saved memories but does not remove them, and details from chat history are deleted after 30 days. Support staff should expect users to ask whether switching memory off deletes it.
- Learn says Purview retention policies and labels do not apply to Copilot memory and that there are no admin controls to enforce retention rules specifically for it.

## Cost and licensing

Microsoft's page on Copilot personalisation and memory says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. The page is in preview and describes Copilot memory in general, not memory in Word, Excel, PowerPoint, OneNote or Workspaces.

The cost known today is indirect: administrator time to review the Enhanced personalization control, update privacy notices and brief the service desk. A licence requirement or meter specific to memory in the Office apps is not yet published. The roadmap item names no licence.

## Scope

The roadmap record lists Excel, Microsoft 365, OneNote, PowerPoint, Word, Microsoft Copilot (Microsoft 365) and Work IQ as products, on Desktop, Mac and Web, in the Worldwide (Standard Multi-Tenant) cloud only. Release phases are Current Channel, General Availability, Preview and Targeted Release, and the status is In development.

The roadmap does not say which users or licences receive it first. Learn's Enhanced personalization page says tenant administrators, such as the Global Administrator role, use the control; the Graph update reference names People Administrator as the least privileged supported Microsoft Entra role.

## Governance guidance

### Before rollout
- Read Microsoft's Copilot memory page and agree whether Copilot memory should be on for the whole tenant, for some users or off, as the memory page says it is on by default.
- Identify a Microsoft Entra group for the pilot, because the Graph setting takes a disabledForGroup group ID that switches the control off for those users.
- Ask the compliance team to confirm that memory held in a hidden mailbox folder fits your eDiscovery and Customer Lockbox process.
- Tell the service desk that turning the control off stops memories being applied but does not remove saved memories.

### At rollout
- Set Enhanced personalization with the Microsoft Graph update call, running it as at least a People Administrator, since Learn documents no admin centre path for it.
- Pilot with a small group in Word and Excel and record what users report Copilot remembering and applying.
- Check that users who are excluded see their Custom instructions, Saved memories and Chat history switches in Settings > Personalization as turned off.

### After rollout
- Re-read the memory page and the roadmap item for the Office-app details, status moves and any Learn page specific to this feature.
- Run a Purview eDiscovery search of the CopilotMemory folder for a test user to confirm that your team can find and export memory data.
- Review the control again before the target month of November CY2026 ends, as the roadmap's dates can move.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot memory (Enhanced personalization) is on for the tenant, with an optional group it is disabled for</strong><br><small>Tenant</small><br><small class="controls__note">Beta. Request body sets isEnabledInOrganization and disabledForGroup. People Administrator is the least privileged role. Learn ties it to Copilot memory, not to Office-app memory.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which information is added to Copilot memory</strong><br><small>Tenant</small><br><small class="controls__note">Learn says admins can't restrict what type of information is added to Copilot memory.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Retention rules for Copilot memory</strong><br><small>Tenant</small><br><small class="controls__note">Learn says Purview retention policies and labels don't apply to Copilot memory.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit entries for memory and personalisation actions</strong><br><small>Tenant</small><br><small class="controls__note">Learn says these actions don't generate Purview audit log entries.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The tenant switch is the only control Learn documents for memory itself. It is a Microsoft Graph beta operation, and Learn documents no admin centre path for it at the time of writing (November 2026). Learn ties the control to Copilot memory; it does not say that it covers memory in the Office apps, so confirm in a pilot.

Individual users also have switches for Custom instructions, Saved memories and Chat history under Settings > Personalization. Those are user choices, not tenant enforcement. The other rows record gaps Learn states: no restriction on what is added, no memory-specific retention control and no Purview audit entries.

## Open questions

- Does the Enhanced personalization control cover memory used in Word, Excel, PowerPoint, OneNote and Workspaces? Watch the Copilot memory page on Microsoft Learn.
- What does Copilot do on arrival for this feature, and does it apply to tenants that already left Enhanced personalization on? Watch Message center and the roadmap item.
- Will Microsoft publish an admin centre setting for Enhanced personalization? Learn documents only a Graph route at the time of writing.
- Is any licence or meter specific to memory in the Office apps planned? Watch the Copilot licensing pages and the roadmap item.

<!-- rationale
risk: Medium. Memory draws on private Teams, Outlook and usage data, and Learn says admins cannot restrict what is added, set retention for it or see audit entries, though a tenant switch exists.
cost: Low. Learn says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence; the cost known today is admin time, and nothing specific to the Office apps is published.
impact: Medium. Users of Copilot in Word, Excel, PowerPoint, OneNote and Workspaces would notice responses shaped by their own history; the roadmap target is November CY2026.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: paragraph after table / absence: The tenant switch is the only control Learn documents for memory itself. | Found: Admins can use eDiscovery and Microsoft Graph Explorer to search, export, and delete users' memory data. | Fix: Replace 'The tenant switch is the only control Learn documents for memory itself' with 'Learn documents Enhanced personalization as the control for enabling or disabling Copilot memory.' The existing source also documents administrator deletion of memory data, so do not claim that no other memory controls are documented. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: Memory is treated as included within an existing Copilot entitlement rather than as a separately licensed feature. | Found: Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot license. | Fix: Keep included, but name the product entitlement rather than relying only on the Copilot Chat memory statement. Add to the notes: 'Microsoft documents Microsoft 365 Copilot (Basic) access to Copilot in Word, Excel, PowerPoint and OneNote without the Copilot add-on, and Microsoft 365 Copilot (Premium) as the full add-on licensed experience; entitlement specific to this Office-app memory rollout is not yet published.' Cite https://learn.microsoft.com/copilot/plan/copilot-overview. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
- [supported, minor] controls[0].note; Governance controls; Open questions / applicability: Learn ties Enhanced personalisation to Copilot memory but does not explicitly describe its reach in the named Office apps. | Found: Features controlled by enhanced personalization Copilot memory - Memory and personalization make Copilot personalized to you and your work. | Fix: Replace 'Learn ties it to Copilot memory, not to Office-app memory' in the row note with 'Learn says Enhanced personalization controls Copilot memory; Office-app rollout details are not yet documented.' In the paragraph after the table replace the sentence questioning the control's coverage with 'Learn says Enhanced personalization controls Copilot memory; confirm the Office-app experience in a pilot.' This preserves the genuine rollout gap without implying a documented exclusion from the general control's reach. | Source: https://learn.microsoft.com/graph/control-enhanced-personalization-privacy
- [supported, minor] Governance guidance: After rollout, eDiscovery search / behaviour: Administrators can find and export memory data located in the CopilotMemory folder using eDiscovery. | Found: For Copilot memory, you need to search the item class <IPM.Contact>. | Fix: Replace the checklist instruction with 'Run a Purview eDiscovery search for item class IPM.Contact for a test user, export the results, and locate memory data in the CopilotMemory folder.' The cited memory page identifies CopilotMemory as the folder in the export, not the search condition; IPM.Contact also includes the user's contacts. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist's eDiscovery and Customer Lockbox checks are represented in the controls table. | Found: Checklist: 'confirm that memory held in a hidden mailbox folder fits your eDiscovery and Customer Lockbox process'; 'Run a Purview eDiscovery search'. Table rows cover Enhanced personalization, information types, retention and audit only. | Fix: The Before rollout eDiscovery and Customer Lockbox process check and the After rollout eDiscovery search have no corresponding controls-table row. Record this checklist/table gap; do not add rows as part of this correction.
-->
