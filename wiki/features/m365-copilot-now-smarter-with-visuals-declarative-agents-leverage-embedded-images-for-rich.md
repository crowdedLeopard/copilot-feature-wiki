---
title: "Microsoft 365 Copilot: declarative agents read images embedded in Word, PowerPoint and PDF files"
slug: "m365-copilot-now-smarter-with-visuals-declarative-agents-leverage-embedded-images-for-rich"
roadmapId: 531758
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Declarative agents now use charts, diagrams and screenshots embedded in Word, PowerPoint and PDF files when they answer. Launched; Microsoft has not stated a default or a switch, so review what your agents can reach."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Microsoft's knowledge-sources page says whether users need a Microsoft 365 Copilot licence or metered usage depends on the knowledge source an agent uses. Nothing specific to image understanding is published."
audiences: ["m365-admin","security","end-user"]
tags: ["declarative-agents","m365-copilot","knowledge-grounding","word","powerpoint","oversharing","restricted-content-discovery"]
sources:
  - title: "Microsoft 365 roadmap item 531758"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=531758"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Add knowledge sources to your declarative agent"
    url: "https://learn.microsoft.com/plugins/knowledge-sources"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "copilotAdminSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadminsetting"
    kind: "learn"
  - title: "Understand agent details in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-details"
    kind: "learn"
  - title: "Set Up Your Development Environment for a Microsoft 365 Copilot Plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
videos: []
related: ["declarative-agents","m365-copilot-now-smarter-with-visuals-copilot-chat-leverages-embedded-images-for-richer-mo","m365-copilot-newly-created-declarative-agents-now-understand-referenced-scanned-pdfs","restricted-content-discovery","knowledge-grounding"]
controls:
  - governs: "Whether one agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocks the whole agent, not image reading. Beta; the Package Management API requires a Microsoft Agent 365 licence and the call blocks the Copilot package identified by {id}."
  - governs: "Which SharePoint sites Microsoft Copilot can discover content from"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Limits discovery, not permissions. Needs a Microsoft Copilot licence and the SharePoint Advanced Management prerequisites. Does not affect content already in use by the user."
  - governs: "Whether declarative agents read images embedded in Word, PowerPoint and PDF files"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for this feature is documented on the Copilot settings page or in the Copilot admin setting API resource at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-05-27T23:15:50"
changes:
  - date: "2026-11-24"
    note: "First briefing for this launched item: Learn has a release-notes entry but no feature page; controls are the agent block and Restricted Content Discovery, and no image-reading switch is documented."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: embedded file content is documented as text-only grounding, the whole-agent block is no longer called the only agent-level lever, Microsoft's general rollout model is noted, and the prerequisites page's SharePoint billing note is added."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 73 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f6c9a81005c441fe565a104a3f11838d"
---

## What's changing

Declarative agents can now use the images inside files, not only the text, when they ground an answer. The roadmap item says agents interpret and ground responses using images embedded in Word (.docx), PowerPoint (.pptx) and PDF files, so charts, diagrams and screenshots can inform what the agent says.

Microsoft's Microsoft 365 Copilot release notes list the item on April 7, 2026 as "Smarter answers with embedded image understanding" and mark it [Windows]; the roadmap record lists the platform as Desktop. The release notes' suggested checks describe uploading a Word document, attaching a PowerPoint file or using a PDF and asking Copilot about the visuals. Microsoft Learn has no separate page for this item at the time of writing (November 2026), so the detail here comes from the roadmap description and that release-notes entry. Microsoft has not stated which other knowledge sources of a declarative agent it covers, or whether it is on by default.

The roadmap record gives the status as Launched, the target date as March CY2026, the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant) and the platform as Desktop. A separate roadmap item covers the same capability in Copilot Chat; see [Copilot Chat: answers draw on images embedded in Word, PowerPoint and PDF files](/features/m365-copilot-now-smarter-with-visuals-copilot-chat-leverages-embedded-images-for-richer-mo/).

## Why it matters

A chart, an architecture diagram or a screenshot of a console can carry figures, names or settings that never appear as text. If an agent can read them, answers can now include that content, so documents that were reviewed with their text in mind may hold images nobody checked.

Microsoft has not stated what happens on arrival or whether an administrator has to act, so the wiki's view is to plan on the behaviour already being present for users of declarative agents. Treat images as content in your oversharing review, tell agent owners what to expect, and use the controls that exist (blocking a single agent, or restricting discovery of a SharePoint site) where a specific agent or site needs holding back.

## Risk assessment

**Data exposure**

- Images inside Word, PowerPoint and PDF files can inform an agent's answer, so a screenshot or chart that holds sensitive figures is part of what the agent can use. Microsoft's knowledge-sources page says that when an agent uses SharePoint and OneDrive content as knowledge, Copilot searches the files, folders or sites that a user has access to, so existing oversharing carries through to what images reveal.
- Where an agent uses embedded file content (files uploaded when the agent is built in Agent Builder), Microsoft says Purview Information Barriers isn't supported on embedded files and any user who can access the agent can see responses grounded in that content. Microsoft’s agent-details page says embedded knowledge agents use only the text content of uploaded files for grounding; the image-understanding release note does not reconcile that limitation.
- Restricted Content Discovery limits discovery of a SharePoint site's content in organisation-wide search and Microsoft Copilot responses. Its page says it doesn't affect experiences that operate on content already in use by the user, such as summarising an open document.

**Security & identity**

- The roadmap description and the release-notes entry describe no change to identity or permissions. Restricted Content Discovery does not change existing permissions.

**Autonomy & actions**

- The roadmap describes grounding answers on image content and describes no actions taken on a user's behalf.

**Change & support**

- Answers from the same agent about the same file may change when its images are read. Expect questions about why a chart or screenshot is reflected, or not, in an answer.
- No setting specifically for image reading is documented; the whole-agent block shown in the controls table stops the agent for every user.

## Cost and licensing

Licence: Microsoft's knowledge-sources page lists, per capability or knowledge source, whether users need a Microsoft 365 Copilot licence or metered usage. It marks Copilot connectors, SharePoint, OneDrive and embedded file content as needing one or the other, and code interpreter, image generator and web search as not. It adds that SharePoint and OneDrive knowledge sources require the signed-in user to have an active Microsoft 365 Copilot licence, and that file upload is available to users with usage billing enabled or with a Microsoft 365 Copilot licence. Microsoft’s prerequisites page also lists SharePoint grounding as available with usage-based billing, so its licensing guidance differs from the knowledge-sources page.

Meter: the release notes and the roadmap name no meter, price or credit rate for image understanding, and the knowledge-sources page does not say this capability is metered. A rate specific to this feature is not yet published.

Indirect costs: admin time for an oversharing review and user communication. Embedded file content is stored in SharePoint Embedded and counts against the OneDrive and SharePoint capacity in your tenant. Blocking an agent through the Microsoft Graph route needs a Microsoft Agent 365 licence.

## Scope

**Users and licences.** People who use declarative agents; what each needs depends on the agent's knowledge sources (see Cost and licensing).

**Files.** The roadmap description names Word (.docx), PowerPoint (.pptx) and PDF files, and names charts, diagrams and screenshots as the kinds of image.

**Cloud and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant) and Desktop; the release notes mark the entry [Windows]. The record does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there. Separately, Microsoft says embedded file content isn't supported in Microsoft 365 Government Community Cloud (GCC) environments.

**Rollout.** Status is Launched, target March CY2026, release phase General Availability. Microsoft has not stated this feature’s default. The release-notes page describes a general safe deployment model that gradually expands from a subset of users within a tenant to the organisation.

## Governance guidance

### Before rollout

- Review which declarative agents in the Microsoft 365 admin center (Agents > All agents) ground on Word, PowerPoint or PDF files, and ask their owners which files and sites they use.
- Check SharePoint sites that hold image-heavy documents such as architecture diagrams, dashboards and console screenshots, and apply Restricted Content Discovery to sites whose permissions are not yet reviewed.
- Confirm the licence or metered usage that each agent's knowledge sources need, using Microsoft's knowledge-sources page, before users hit failures.

### At rollout

- Tell agent owners and users that answers may now reflect charts, diagrams and screenshots in files, and that the default is not stated by Microsoft.
- Block an agent from the Microsoft 365 admin center if it grounds on sensitive files you cannot review in time; this stops the agent for every user, so agree it with the owner first.

### After rollout

- Test an agent with a sample Word, PowerPoint or PDF file that has a chart, as the release notes suggest, and check whether the answer reflects the image.
- Watch the Microsoft 365 Copilot release notes and Message center for a stated default, a setting or a licence statement for this capability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether one agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Blocks the whole agent, not image reading. Beta; the Package Management API requires a Microsoft Agent 365 licence and the call blocks the Copilot package identified by {id}.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from</strong><br><small>Site</small><br><small class="controls__note">Limits discovery, not permissions. Needs a Microsoft Copilot licence and the SharePoint Advanced Management prerequisites. Does not affect content already in use by the user.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether declarative agents read images embedded in Word, PowerPoint and PDF files</strong><br><small>Tenant</small><br><small class="controls__note">No setting for this feature is documented on the Copilot settings page or in the Copilot admin setting API resource at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No row covers a switch for image reading because Microsoft Learn documents none at the time of writing (November 2026): the Copilot settings page and the Copilot admin setting API resource list nothing for it. The block action is the nearest agent-level control and applies to the whole agent. Microsoft says blocking an agent built with Agent Builder or Copilot Studio affects it in Microsoft Copilot and in other host products, while blocking one built with SharePoint or Microsoft Foundry affects only Copilot Chat.

A separate tenant setting, User access (Agents > Settings > User access), selects All users, No users or specific users or groups for agents and plugins; Microsoft documents All users as its default. It governs who can use agents, not what an agent reads. The Package Management API behind the block call is in beta and, per its page, is not available in the US Government clouds listed there.

## Open questions

- Is image understanding on by default for every existing declarative agent, and does an administrator have to do anything? Watch the Microsoft 365 Copilot release notes and Message center.
- Which of the remaining knowledge sources does it cover: SharePoint and OneDrive files, Copilot connectors or files a user attaches?
- Will Microsoft add a setting to turn image reading off for agents, and in which admin centre?
- Does Restricted Content Discovery stop an agent reading images in files on a restricted site? The page describes its reach as organisation-wide search and Microsoft Copilot discovery scenarios.
- Does any licence or credit meter apply to image understanding specifically, and is it available beyond Windows desktop?

<!-- rationale
risk: Medium. Charts and screenshots in files an agent can reach now inform its answers, and Microsoft Learn documents no setting that turns image reading off; the agent block and site-level discovery limits are the controls that exist.
cost: Low. No charge or meter specific to this feature is published; the cost the sources show is admin time, plus the licence or metered usage that Microsoft says some agent knowledge sources already need.
impact: Medium. People who use declarative agents grounded on Word, PowerPoint or PDF files may see answers that reflect images; Microsoft has not stated whether this is on by default.
-->
