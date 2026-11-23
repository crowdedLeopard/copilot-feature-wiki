---
title: "Microsoft 365 Copilot Chat: answers draw on images embedded in Word, PowerPoint and PDF files"
slug: "m365-copilot-now-smarter-with-visuals-copilot-chat-leverages-embedded-images-for-richer-mo"
roadmapId: 560540
topic: "m365-copilot"
products: ["Microsoft 365","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat now reads charts, diagrams and screenshots embedded in Word, PowerPoint and PDF files when it answers. Launched; Microsoft has not stated a default or a switch, so brief users and review site oversharing."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription and that a Microsoft Copilot licence is needed for licensed Copilot capabilities. Nothing specific to this feature is published."
audiences: ["m365-admin","security","end-user"]
tags: ["copilot-chat","m365-copilot","knowledge-grounding","word","powerpoint","restricted-content-discovery"]
sources:
  - title: "Microsoft 365 roadmap item 560540"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560540"
    kind: "roadmap"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes"
    kind: "learn"
videos: []
related: ["microsoft-copilot-microsoft-m365-copilot-chat-can-now-better-match-search-results-from-tex","m365-copilot-newly-created-declarative-agents-now-understand-referenced-scanned-pdfs","restricted-content-discovery"]
controls:
  - governs: "Whether the Copilot app, and so Copilot Chat, is available to users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Blunt: blocks the whole Copilot app, not image reading. Learn lists these controls as available to Global Administrators."
  - governs: "Whether Copilot Chat reads images embedded in Word, PowerPoint and PDF files"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for this feature is documented on the Copilot settings page at the time of writing (November 2026)."
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
    note: "Limits discovery, not permissions. Needs a Copilot licence and SharePoint Advanced Management prerequisites. Does not affect content already in use, such as an open document."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-27T22:38:48"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: Launched roadmap item with no Learn page of its own; controls are the app-level block and Restricted Content Discovery."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 45 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 44
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "48025ae5e96d5db7066669f2acf839d3"
---

## What's changing

Copilot Chat can now use images embedded in files, not only the text, when it builds an answer. The roadmap item says Copilot interprets and grounds responses using images in Word (.docx), PowerPoint (.pptx) and PDF files, so charts, diagrams and screenshots can inform the answer.

The roadmap record lists the status as Launched, the target date as June CY2026, the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant) and the platform as Desktop. It does not list the US Government clouds. Microsoft Learn now calls the product Microsoft Copilot Chat; this page keeps the roadmap's name.

Microsoft Learn does not describe this roadmap item separately at the time of writing (November 2026), so how it behaves comes from the roadmap description. Two Learn release-note entries are close but are not this item. A September 2025 entry, 'Support for analyzing images in uploaded files', covers embedded images in PDF, DOCX and PPTX files uploaded to Copilot on Windows and the web. An April 2026 entry covers declarative agents under a different roadmap ID (531758). Microsoft has not stated whether this item is on by default or whether administrators must do anything.

## Why it matters

The change widens what Copilot can read from a file. A chart, an architecture diagram or a screenshot of a console can carry figures, names or settings that never appear as text, and answers can now draw on them. Teams that reviewed their documents and sites with text in mind may have images that nobody checked.

Because Microsoft has not stated a default or a switch, plan on the behaviour already being present for users who have Copilot Chat. The wiki's view is to treat images as content in your oversharing review, tell users what to expect, and use the controls that exist (site-level Restricted Content Discovery, and the app-level block) where a site or the whole app needs holding back.

## Risk assessment

**Data exposure**

- Images inside Word, PowerPoint and PDF files can now inform Copilot answers, so a screenshot or chart that holds sensitive figures is part of what Copilot can use. Microsoft Learn documents no setting that turns off image reading by itself. Restricted Content Discovery limits discovery of a SharePoint site's content in Copilot responses (see the controls table).
- Restricted Content Discovery does not affect experiences that operate on content already in use by the user, such as summarising an open document, so it is not a complete answer for files a user already has open.

**Security & identity**

- Learn's requirements page says users must have a work or school account in Microsoft Entra ID. No change to identity or permissions is described for this item; Restricted Content Discovery does not change existing permissions.

**Autonomy & actions**

- The roadmap describes grounding answers on image content and describes no actions taken on a user's behalf.

**Change & support**

- Answers about the same document can differ from before when its images are now read. Expect questions from users about why a chart or screenshot is now reflected, or not reflected, in an answer.
- The Copilot actions setting named Copilot image generation is described as allowing or preventing image-generation experiences, which is a different capability; do not point users or support staff to it for this change.

## Cost and licensing

Licence: Microsoft Learn's requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. The same page says users need a Microsoft Copilot licence and a qualifying prerequisite licence for Microsoft Copilot, and the table marks the Copilot licence as required for licensed Copilot capabilities. The roadmap title names Copilot Chat, but neither the record nor Learn says which licensed capabilities, if any, include this feature.

Meter: the roadmap record and the Learn pages read for this briefing name no meter or charge for this feature, and no price specific to it is published. Indirect cost is admin time for an oversharing review and user communication.

Restricted Content Discovery, one control in the table, has its own prerequisite: Learn says to ensure your organisation has a Microsoft Copilot licence.

## Scope

**Users and licences.** Roadmap title: Copilot Chat. Learn says Copilot Chat is available with an eligible Microsoft 365 subscription and requires a work or school account in Microsoft Entra ID.

**Files.** The roadmap description names Word (.docx), PowerPoint (.pptx) and PDF files, and names charts, diagrams and screenshots as the kinds of image.

**Cloud and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant) and Desktop. The record does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there.

**Rollout.** Status is Launched with a target of June CY2026 and release phase General Availability. Microsoft has not stated the default or any rollout mechanics.

## Governance guidance

### Before rollout

- Identify SharePoint sites whose Word, PowerPoint and PDF files contain screenshots or charts with sensitive content, and decide whether any need Restricted Content Discovery while their permissions are reviewed.
- Check that an administrator with the SharePoint administrator role can set Restricted Content Discovery, and that the Copilot licence and SharePoint Advanced Management prerequisites on its page are met.
- Decide whether blocking the Copilot app in Integrated Apps is proportionate; Learn says it blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web for all users.

### At rollout

- Test a document that holds a chart and a screenshot with a pilot user who has Copilot Chat, and note whether the answer reflects the image content.
- Tell users that Copilot Chat answers may now reflect images in Word, PowerPoint and PDF files, and that sensitive screenshots belong in labelled, access-controlled locations.

### After rollout

- Watch Message center and the Microsoft 365 Copilot release notes on Learn for a page that documents this item, its default and any switch.
- Review the Copilot settings page in the Microsoft 365 admin center periodically for a setting that governs image reading in files.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app, and so Copilot Chat, is available to users</strong><br><small>Tenant</small><br><small class="controls__note">Blunt: blocks the whole Copilot app, not image reading. Learn lists these controls as available to Global Administrators.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot Chat reads images embedded in Word, PowerPoint and PDF files</strong><br><small>Tenant</small><br><small class="controls__note">No setting for this feature is documented on the Copilot settings page at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from</strong><br><small>Site</small><br><small class="controls__note">Limits discovery, not permissions. Needs a Copilot licence and SharePoint Advanced Management prerequisites. Does not affect content already in use, such as an open document.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The table lists the controls that exist today for Copilot Chat and for SharePoint content. None is documented as governing image understanding on its own; the second row records that gap.

The Integrated Apps block is app-wide: it blocks Copilot Chat as well as Copilot in the other hosts, and Learn lists the Integrated Apps controls as available to Global Administrators. Restricted Content Discovery works per SharePoint site and affects discovery, not permissions, and it does not affect experiences that operate on content already in use by the user.

## Open questions

- Is this item on by default for every user who has Copilot Chat, and does it need a Microsoft Copilot licence or only an eligible Microsoft 365 subscription? Watch the Microsoft 365 Copilot release notes and Message center.
- Does the feature read images in files that Copilot finds through search and in files a user attaches, or only one of these? Watch the Copilot Chat Learn pages.
- Will Microsoft add an administrator setting for image understanding in files, and where? Watch the Copilot settings page in the Microsoft 365 admin center.
- Is this item the same capability as the September 2025 release-note entry for images in uploaded files, and how does the Desktop platform on the roadmap relate to the Windows and web platforms in that entry?

<!-- rationale
risk: Medium. Copilot's answers can now rest on charts and screenshots inside files, and Microsoft Learn documents no setting for this feature alone; the existing discovery and app-level controls are the levers.
cost: Low. The roadmap record names no charge, and Learn says Copilot Chat is available with an eligible Microsoft 365 subscription; no price or meter specific to this feature is published, so the known cost is admin and communication time.
impact: Medium. People who ask Copilot Chat about documents that contain charts, diagrams or screenshots will notice different, fuller answers; administrators see no new setting.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing: 'Two Learn release-note entries are close but are not this item' / behaviour: The September 2025 uploaded-image release-note capability is not this roadmap item. | Found: Searched: "Copilot Chat" "embedded images" "September" "2025" "June"; "560540" Copilot Chat. Read both release-note entries and record; no source establishes whether the September capability and this item are distinct. | Fix: Replace 'Two Learn release-note entries are close but are not this item' with 'Two Learn release-note entries describe related capabilities; neither identifies roadmap item 560540.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout; Governance controls / applicability: Learn says the Integrated Apps block blocks Copilot in the Copilot app, Teams, Outlook and Copilot Chat on the web for all users. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: After this statement add: 'However, the Integrated Apps documentation says the app is blocked only in the Microsoft Copilot application and Outlook, and Teams continues to honour Teams admin center settings; Microsoft's pages disagree about Teams coverage.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-block-an-app. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
-->
