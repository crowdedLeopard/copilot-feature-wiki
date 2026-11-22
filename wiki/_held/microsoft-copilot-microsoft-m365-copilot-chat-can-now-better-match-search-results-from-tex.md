---
title: "Microsoft 365 Copilot Chat: search results match text inside images in Word and PowerPoint files"
slug: "microsoft-copilot-microsoft-m365-copilot-chat-can-now-better-match-search-results-from-tex"
roadmapId: 570469
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans better Copilot Chat search matching on text inside images embedded in Word and PowerPoint files, such as scanned contracts. Microsoft has published no switch, default or licence detail yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. The Learn licence options page says \"Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans\"; nothing says how it applies here."
audiences: ["m365-admin","service-owner","security"]
tags: ["copilot-chat","m365-copilot","copilot-search","ocr","word","powerpoint","microsoft-365-files","oversharing","restricted-content-discovery"]
sources:
  - title: "Microsoft 365 Roadmap 570469"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570469"
    kind: "roadmap"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Overview of optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["sharepoint-copilot-search-in-sharepoint-and-onedrive","m365-admin-center-authoritative-content-management-for-m365-copilot-search"]
controls:
  - governs: "Whether this feature matches text inside images"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
  - governs: "Which SharePoint sites Copilot can discover content from (existing control, not specific to this feature)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Limits discovery of a site's content in organisation-wide search and Copilot responses; does not change permissions. Not a control over this feature."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-17T00:31:56"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap-only feature with no Learn page, no documented switch, and no stated default or licence."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 45
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "cb6b13a2d18bb8cf652d27248b592be1"
---

## What's changing

The roadmap item says Copilot Chat will better match search results from text that appears inside images embedded in Word and PowerPoint files. It gives scanned contracts in Word, text from tables and text from images as examples, and describes them as content that was previously difficult to search and find.

The roadmap item is the only description of the feature. At the time of writing (November 2026), the Microsoft 365 Copilot release notes on Microsoft Learn do not list it, and Learn has no page for it. The roadmap does not say which service reads the image text, which file locations are covered, or whether anything is on by default.

The roadmap record lists the status as In development, with a target date of December CY2026, release phase General Availability, platform Web and the Worldwide (Standard Multi-Tenant) cloud. These are Microsoft's targets, not a launch.

## Why it matters

Text inside embedded images is often the least-reviewed content in a tenant: scanned contracts pasted into Word, screenshots of tables, photographed slides. If Copilot Chat can match on it, files whose contents were effectively hidden may start to appear in answers to people who already have access to them. That makes any existing oversharing on the sites holding those files more visible.

Microsoft has not stated what happens on arrival, so base planning on the roadmap's target of December CY2026 and the assumption that Copilot Chat search results change without an administrator acting. Treat it as a communication and access-review task, not a configuration task.

## Risk assessment

- **Data exposure**: Content inside scanned images in Word and PowerPoint files becomes a search target, so overshared files holding scanned contracts or tables are more likely to surface in Copilot Chat. Confirm that results continue to follow each user's existing access. Restricted Content Discovery can limit discovery of selected SharePoint sites and does not change permissions (see the controls table).
- **Security & identity**: The roadmap item names no new identity, permission or connector. No change is documented.
- **Autonomy & actions**: The roadmap item describes search matching only and describes no actions Copilot takes.
- **Change & support**: Users may see files returned for words that appear only in images and ask why. No switch for the feature is documented, so the support answer is to review file access, not to turn the feature off.

## Cost and licensing

No licence, meter or price for this feature is yet published. The roadmap item names no licence, and the Learn release notes do not list the feature.

For context, the Learn page "License options for Microsoft Copilot" says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans. It does not say how that applies to this feature.

SharePoint's separate optical character recognition (OCR) service is documented on Learn with a pay-as-you-go billing note, and whether this feature uses it is not yet published (see Open questions). The indirect cost that is known is admin time to review access to files that hold images of documents.

## Scope

- **Users and licences**: Not yet published; the roadmap item names no licence requirement.
- **Clouds**: The roadmap record lists Worldwide (Standard Multi-Tenant) only. That is a record fact, not a statement that other clouds are excluded.
- **Platforms**: The roadmap record lists Web.
- **Files**: Word and PowerPoint files with embedded images, per the roadmap item.
- **Rollout**: Status In development, target December CY2026. No rollout mechanics, release channel or prerequisites are published.

## Governance guidance

### Before rollout

- Identify which SharePoint and OneDrive libraries hold scanned contracts or image-heavy Word and PowerPoint files, and check who can read them.
- Review those sites for oversharing and decide which are not ready to be discoverable through Copilot.
- Brief the service desk that Copilot Chat may return files because of words that appear only in images.

### At rollout

- Apply Restricted Content Discovery to any site that fails the access review, if SharePoint Advanced Management and a Copilot licence are in place.
- Watch Message center and the Microsoft 365 Copilot release notes for the rollout date and any setting.

### After rollout

- Test Copilot Chat searches with words that appear only inside an image in a test file and note what is returned.
- Re-check the roadmap item for a change of status or target date.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether this feature matches text inside images</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Copilot can discover content from (existing control, not specific to this feature)</strong><br><small>Site</small><br><small class="controls__note">Limits discovery of a site's content in organisation-wide search and Copilot responses; does not change permissions. Not a control over this feature.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting that turns this feature on or off, and no automation for one, is documented on Microsoft Learn at the time of writing (November 2026). The one control row that exists is an existing site-level control, not a control over this feature.

Restricted Content Discovery applies per SharePoint site, requires SharePoint Advanced Management, and by default only SharePoint administrators can manage it. The page says it affects discoverability, not access permissions, and that updates can take time to propagate.

## Open questions

- Is the feature on for everyone by default on arrival, or does an administrator or user have to enable it? Watch Message center and the roadmap item.
- Which licence do users need for this feature, and is any meter or price attached? Watch the Learn licence options page.
- Which service extracts the text from images, and does it use SharePoint's separately documented OCR service and its billing?
- Does Restricted Content Discovery or any other existing control stop image text from sites being matched, and is there a separate setting for this feature?
- Which file locations and file types are covered beyond Word and PowerPoint files?

<!-- rationale
risk: Medium. Text locked inside scanned images in existing files could become findable through Copilot Chat, which makes existing oversharing easier to hit; Microsoft has not said how the feature is controlled.
cost: Low. The only cost the sources show is admin time to review file access and brief users; licensing and any meter for this feature are not yet published.
impact: Medium. Anyone who searches work files through Copilot Chat on the web could see different matches, but the roadmap names no change to how the chat itself works.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: prose after table / applicability: The existing site-level Restricted Content Discovery control is not a control over this feature. | Found: Restricted Content Discovery affects organization-wide search experiences (SharePoint home, Office.com, Bing) and Microsoft Copilot discovery scenarios, including experiences that rely on tenant-wide content discovery. | Fix: Replace 'The one control row that exists is an existing site-level control, not a control over this feature.' with: 'Restricted Content Discovery is an existing site-level control for organization-wide search and Microsoft Copilot discovery scenarios, not a dedicated switch for image-text matching.' | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes / licensing: The licensing model is unknown, despite the quoted general Microsoft Copilot entitlement. | Found: Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans. | Fix: Set licensing.model to included for an enhancement inside the licensed product. Replace licensing.notes with: 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans. Licensing specific to this image-text matching enhancement is not yet published.' Keep the existing licence-options citation. | Source: https://learn.microsoft.com/copilot/plan/copilot-license-options
- [supported, minor] controls[1].governs; controls[1].note; Risk assessment: Data exposure; Governance controls / applicability: Restricted Content Discovery limits discovery of selected SharePoint sites' content in organization-wide search and Copilot responses. | Found: Restricted Content Discovery helps you limit discovery of content from specific SharePoint sites, including recently interacted files, in organization-wide search results and Microsoft Copilot responses | Fix: Keep this claim. Add https://learn.microsoft.com/copilot/manage/copilot-search-manage to sources and note: 'The Manage Microsoft Copilot Search page still describes an exception for content a user owns or recently interacted with; the Restricted Content Discovery page explicitly includes recently interacted files.' | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [supported, minor] controls[1].note; Governance controls table note / applicability: The correctly documented general-control row says Restricted Content Discovery is not a control over this feature. | Found: Restricted Content Discovery affects organization-wide search experiences (SharePoint home, Office.com, Bing) and Microsoft Copilot discovery scenarios, including experiences that rely on tenant-wide content discovery. | Fix: Replace 'Not a control over this feature.' in the front-matter and rendered row notes with: 'Applies to organization-wide search and Microsoft Copilot discovery scenarios; it is not a dedicated switch for image-text matching.' | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [supported, minor] Why it matters: existing access; Risk assessment: Data exposure / behaviour: Copilot access to organizational content is scoped by the user's existing permissions. | Found: However, all experiences are powered by: ... Access scoped by user permissions (security and compliance enforced) | Fix: Add https://learn.microsoft.com/copilot/plan/copilot-overview to sources for the existing-permissions premise. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [contradicted, minor] front matter: action; Why it matters; Governance guidance: Before rollout / consistency: Prepare is the action rating although the page assumes existing search changes without admin action and recommends a pre-rollout decision. | Found: action: "prepare"; risk: "medium"; targetDate: "December CY2026"; "the assumption that Copilot Chat search results change without an administrator acting"; "decide which are not ready to be discoverable through Copilot" | Fix: Set action to act-now: on the page's stated planning assumption, the December CY2026 target is within 60 days of November 22, risk is medium, and an access-review decision is recommended before it lands. Keep defaultState unknown.
-->
