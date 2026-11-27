---
title: "Microsoft 365 Copilot: deep citations link to the cited part of Word and PowerPoint files"
slug: "m365-copilot-deep-citations-in-copilot"
roadmapId: 523223
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot citations are planned to link straight to the relevant part of a cited Word or PowerPoint file, with Meetings, web and PDF references to follow. No admin setting is documented; check file permissions and brief users."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "February CY2027"
previewDate: "January CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Part of Microsoft Copilot (Microsoft 365). Microsoft's overview says Copilot Chat (Basic) is included with eligible Microsoft 365 licenses. Which Copilot experiences and licences get deep citations is not yet published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["m365-copilot","copilot-chat","word","powerpoint","restricted-content-discovery","oversharing"]
sources:
  - title: "Microsoft 365 Roadmap item 523223"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=523223"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Microsoft Copilot Search frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-faq"
    kind: "learn"
  - title: "Application card: Microsoft Copilot (for organizations)"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-application-card"
    kind: "learn"
videos: []
related: ["restricted-content-discovery","m365-copilot-copilot-response-personalization-memory-citations","m365-copilot-copilot-extensibility-improved-discovery-of-copilot-connector-sources-in-m365","web-search"]
controls:
  - governs: "Whether users see deep citations (tenant or user switch)"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for this feature at the time of writing (November 2026)."
  - governs: "Which SharePoint sites Microsoft Copilot can discover content from, and so cite"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Existing control. Keeps a site out of org-wide search and Copilot; it affects discoverability, not access permissions. Needs a Microsoft Copilot licence."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-27"
    note: "New briefing: planned deep citations to Word and PowerPoint files, with no documented admin setting and Restricted Content Discovery as the existing site-level control."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 42 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: removed unsupported claims about where existing citations land, what Restricted Content Discovery does to citations, the recent-interaction exception and the service desk; reworded the accuracy caveat."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 42 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 41
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "2e34cfc207acd25e122d6a9f973485c1"
---

## What's changing

Microsoft plans to make Copilot's citations link directly to the relevant part of the referenced file, so that a user can check a response against the passage it came from. The roadmap item states that this starts with Word and PowerPoint files, and that Meetings, web and PDF references will be added later.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Microsoft has not stated whether deep citations are on by default, which Copilot experiences show them, or whether an administrator can turn them off.

Two neighbouring changes are documented separately and should not be mistaken for this one. The Microsoft 365 Copilot release notes for March 10, 2026 describe a deep citation view for connector-based results, and the notes for July 01, 2026 describe cited Word, Excel, PowerPoint and PDF files opening directly in Copilot Chat (roadmap item 548641).

The roadmap item is **In development**, with a preview date of January CY2026 and a general availability target of February CY2027. It lists the Worldwide (Standard Multi-Tenant) cloud and the Desktop, Mac and Web platforms. The preview date has passed while the status remains In development.

## Why it matters

Deep citations make it quicker for users to verify a Copilot answer, which is good for trust, but they also make the source more visible: a user who follows a citation lands on the passage itself. Microsoft states that Copilot only surfaces organisational data to which the user has at least view permissions, so the exposure is the same as today's file permissions. Where those permissions are too broad, deep citations make the result easier to find and read.

Microsoft has not stated what happens on arrival. No source says existing citation behaviour changes until the feature ships, so the useful work now is to check permissions on sites that hold sensitive Word and PowerPoint files and to prepare the service desk for questions.

## Risk assessment

**Data exposure**
- Deep citations lead to the part of a Word or PowerPoint file that Copilot used. Copilot only surfaces data the user can at least view, so an overshared file is the exposure; Restricted Content Discovery keeps a site out of Copilot.

**Security & identity**
- Microsoft has not described any new permission, identity or connection for this feature; it is known only from the roadmap description.

**Autonomy & actions**
- No change: the roadmap describes a link in a response, not an action Copilot takes.

**Change & support**
- Users may read a deep citation as proof that a response is correct. Copilot outputs may still be inaccurate, so users should read the cited passage before relying on the answer, which is worth saying in user guidance.
- Microsoft Learn documents no admin setting for deep citations at the time of writing (November 2026).

## Cost and licensing

Deep citations are part of Microsoft Copilot (Microsoft 365). Microsoft's Copilot overview describes Copilot Chat (Basic) as the baseline experience included with eligible Microsoft 365 licenses. Which Copilot experiences and licences get deep citations is not yet published.

No meter is documented for this feature at the time of writing. The indirect cost is admin time to review file permissions and to brief users and the service desk.

## Scope

- **Users:** Copilot users in Microsoft Copilot (Microsoft 365); which experiences and licences are covered is not yet published.
- **Content:** Word and PowerPoint files first; Meetings, web and PDF references are planned later, per the roadmap item.
- **Clouds:** Worldwide (Standard Multi-Tenant), as listed on the roadmap item.
- **Platforms:** Desktop, Mac and Web.
- **Release phase:** Preview and General Availability; preview date January CY2026, general availability target February CY2027.
- **Configuration:** Microsoft Learn documents no admin role or setting specific to deep citations.

## Governance guidance

### Before rollout
- Turn on **Restrict content from Microsoft Copilot** for sites that need review before Copilot cites them (SharePoint admin center > Sites > Active sites).
- Watch Message center and the Microsoft 365 Copilot release notes for a post on roadmap item 523223 that states the default and rollout window.

### At rollout
- Test with a pilot account that a deep citation to a Word or PowerPoint file opens at the cited passage, and that the account reaches only files it can already open.
- Tell users that a deep citation shows where Copilot found the text and that they should still read the passage before relying on the answer.
- Brief the service desk on the difference between deep citations and cited files opening inside Copilot Chat (roadmap item 548641).

### After rollout
- Check **Copilot** > **Settings** in the Microsoft 365 admin center for any setting Microsoft adds for citations.
- Review sites under Restricted Content Discovery once their permissions are fixed, and lift the restriction where it is no longer needed.
- Plan the same checks for meeting and PDF content before Microsoft adds those references.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users see deep citations (tenant or user switch)</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for this feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from, and so cite</strong><br><small>Site</small><br><small class="controls__note">Existing control. Keeps a site out of org-wide search and Copilot; it affects discoverability, not access permissions. Needs a Microsoft Copilot licence.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns deep citations on or off. The Copilot settings page in the Microsoft 365 admin center lists no citation setting, and the Microsoft Graph Copilot policy settings API supports no citation setting, at the time of writing (November 2026).

Restricted Content Discovery is an existing control over which SharePoint sites Copilot can discover content from; it affects discoverability, not access permissions. Its page lists a Microsoft Copilot licence among the prerequisites, and notes that updates can take time to propagate throughout search and Microsoft Copilot experiences.

## Open questions

- Will deep citations be on by default for all Copilot users, and will Microsoft add an admin setting to turn them off? Watch Message center.
- Which experiences get deep citations: Copilot Chat (Basic), Microsoft 365 Copilot, or Copilot inside Word and PowerPoint?
- How do deep citations behave for files with sensitivity labels or encryption that limit what a user can open?
- When Meetings references arrive, will a citation link into a recording or a transcript, and do meeting transcript permissions apply?
- Will Microsoft publish a Learn page for this feature before the February CY2027 target?

<!-- rationale
risk: Low. Deep citations point users into sources Copilot already cites, and Microsoft states Copilot only surfaces organisational data the user can at least view.
cost: Low. The feature belongs to Microsoft Copilot (Microsoft 365) and Microsoft has published no separate licence or charge for it; the known cost is admin time and user communication.
impact: Medium. Copilot users who check citations to Word and PowerPoint files will notice; Microsoft has not stated whether it reaches every Copilot user by default.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Risk assessment: Data exposure; Governance controls: table / applicability: Restricted Content Discovery keeps a site out of Copilot. | Found: Restricted Content Discovery doesn't affect experiences that operate on content that's already in use by the user, such as summarizing an open document. | Fix: Replace 'Keeps a site out of org-wide search and Copilot' in the row note and rendered table with 'Limits discovery of site content in organization-wide search and Copilot discovery scenarios; it does not affect experiences using content already in use, such as summarizing an open document.' Replace 'Restricted Content Discovery keeps a site out of Copilot' in Risk assessment with the same qualified statement. Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].governs; Governance controls: prose / applicability: Restricted Content Discovery is an existing site-level control limiting discovery of SharePoint content in organisation-wide search and Copilot responses. | Found: Restricted Content Discovery helps you limit discovery of content from specific SharePoint sites, including recently interacted files, in organization-wide search results and Microsoft Copilot responses | Fix: After the description of Restricted Content Discovery, add: 'Microsoft's Copilot Search FAQ describes an exception for recent interaction, whereas the Restricted Content Discovery page says it includes recently interacted files.' Cite https://learn.microsoft.com/copilot/manage/copilot-search-faq alongside https://learn.microsoft.com/sharepoint/restricted-content-discovery. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [supported, minor] Governance guidance: Before rollout / admin-path: The before-rollout instruction points to SharePoint admin center > Sites > Active sites to turn on Restrict content from Microsoft Copilot. | Found: In the SharePoint admin center, expand Sites and select Active sites. 2. Select the site you want to configure. 3. Open the Settings tab, and then turn Restrict content from Microsoft Copilot on. | Fix: Expand the parenthetical route in Before rollout to 'SharePoint admin center > Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot', matching controls[1].ui and https://learn.microsoft.com/sharepoint/restricted-content-discovery. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
-->
