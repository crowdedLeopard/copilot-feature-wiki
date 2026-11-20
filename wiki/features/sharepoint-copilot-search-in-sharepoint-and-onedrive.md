---
title: "SharePoint and OneDrive: updated search experience with Copilot Search"
slug: "sharepoint-copilot-search-in-sharepoint-and-onedrive"
roadmapId: 573696
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "SharePoint Online and OneDrive on the web move to the Copilot Search interface, with natural-language queries and AI summaries. Microsoft's notice MC1540513 gives an act-by date of 18 January 2027 and asks admins to test custom search."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Learn's Copilot Search FAQ says there is no additional cost for Copilot Search itself and that it is included as part of the Microsoft Copilot licence; that is documented for the Microsoft Copilot app. Microsoft's notice says some AI capabilities depend on licensing; terms for the SharePoint and OneDrive surface are not yet published."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["sharepoint","onedrive","copilot-search","m365-copilot","restricted-content-discovery","oversharing","frontier-program"]
sources:
  - title: "Microsoft 365 Roadmap: SharePoint: Copilot Search in SharePoint and OneDrive"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573696"
    kind: "roadmap"
  - title: "MC1540513: Microsoft SharePoint Online and OneDrive for the web: Updated search experience with Copilot Search"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1540513"
    kind: "message-center"
  - title: "Microsoft Copilot Search frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-faq"
    kind: "learn"
  - title: "Microsoft Copilot Search"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-overview"
    kind: "learn"
  - title: "Manage Microsoft Copilot Search"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-manage"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Restricted SharePoint Search"
    url: "https://learn.microsoft.com/sharepoint/restricted-sharepoint-search"
    kind: "learn"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
videos: []
related: ["m365-admin-center-authoritative-content-management-for-m365-copilot-search","m365-copilot-copilot-in-sharepoint","sharepoint-new-m365-copilot-skills-for-sharepoint-administration","sensitivity-labels"]
controls:
  - governs: "Deferring the updated search experience at tenant and site level"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1540513 says options to defer exist at tenant and individual site level; Learn documents no path or command at the time of writing (November 2026)."
  - governs: "Which SharePoint sites appear in organisation-wide search and Copilot answers"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Existing control, not a deferral switch. SharePoint sites only, not OneDrive. Needs a Microsoft Copilot licence and SharePoint Advanced Management; by default only SharePoint administrators can manage it."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item, based on the roadmap record, MC1540513 and the Copilot Search and Restricted Content Discovery pages on Learn."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: licensing model is now not yet published for the SharePoint and OneDrive surface (the Copilot licence statement is scoped to the Microsoft Copilot app); Restricted SharePoint Search noted as retiring; differing Restricted Content Discovery descriptions noted."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 64
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "ff8b1f3b1b142399a08754bb94c531a3"
---

## What's changing

Microsoft is updating search in SharePoint Online and OneDrive on the web to match the Copilot Search experience used across Microsoft 365. The roadmap item describes natural-language search, relevant results, AI-generated summaries with source references, filters and a handoff to Copilot.

Microsoft's notice MC1540513 (published 2026-11-05) gives the schedule: Frontier Preview (Worldwide) began in mid-October 2026 and is expected to complete by mid-January 2027, and General Availability (Worldwide) begins in mid-January 2027 and is expected to complete by mid-April 2027. The notice sets an act-by date of 2027-01-18. It says users will see a common search interface in both products, that some AI-powered capabilities are available based on licensing, and that no significant deployment work is required. It recommends testing custom search experiences or integrations that may be affected, and says options exist to defer the new experience at tenant and individual site level. During the Frontier Preview period an opt-out is offered to users who find a critical search feature unavailable.

The roadmap record shows status In development, a preview date of October CY2026 and a target of January CY2027, with General Availability and Targeted Release phases, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The dates are Microsoft's targets.

Microsoft Learn does not yet describe this feature on SharePoint or OneDrive: the notice says new documentation will be published before General Availability, and the Copilot Search FAQ says Copilot Search is limited to the Microsoft Copilot app. What this page says about behaviour comes from the roadmap item and the notice, with the Copilot Search pages as background.

## Why it matters

Search is the way most people find files in SharePoint and OneDrive, so a changed interface with AI summaries reaches far more users than an opt-in feature would. Microsoft's notice says users will see it and that deferral is available, so plan on it arriving unless you decide to defer before the 2027-01-18 act-by date.

The exposure is the content people can already reach. Learn says Microsoft Copilot respects existing SharePoint and OneDrive permissions, and that if content is already overshared, Copilot can surface it to anyone who has access. Treat the rollout as a prompt to find and fix oversharing before AI summaries make it more visible, and to test any custom search pages or integrations that depend on today's search.

## Risk assessment

**Data exposure**
- Search covers content users can already open. Learn states for Microsoft Copilot that overshared content can be surfaced to anyone who has access; fix permissions first, and use Restricted Content Discovery on SharePoint sites that are under review (see the controls table).
- Learn says Restricted Content Discovery is not supported for OneDrive sites, so it does not cover OneDrive content.

**Security & identity**
- Learn says Microsoft Copilot accesses and reasons over data the user already has permission to see, so the permissions model is the boundary. Microsoft's notice lists no compliance considerations.

**Autonomy & actions**
- No change documented: the roadmap description lists search results, summaries, filters and a handoff to Copilot, and describes no action that changes content.

**Change & support**
- The interface changes for users who search in SharePoint Online and OneDrive on the web. Custom search experiences or integrations may be affected, and Microsoft asks you to test them.
- Expect questions from users who lack some AI capabilities, because the notice says they depend on licensing, and from Frontier Preview users who use the opt-out.

## Cost and licensing

Licence: Learn's Copilot Search FAQ says there is no additional cost for Copilot Search itself and that it is included as part of the Microsoft Copilot licence, and the Copilot Search overview says it is available to users with an eligible Microsoft Copilot licence at no extra cost; both describe Copilot Search in the Microsoft Copilot app. Microsoft's notice MC1540513 says some AI-powered capabilities in the SharePoint and OneDrive experience are available based on licensing, and the licence for the SharePoint and OneDrive surface is not yet published.

Meter: Learn publishes no meter for this feature at the time of writing (November 2026).

Related control: Learn's Restricted Content Discovery page lists a Microsoft Copilot licence among its prerequisites, and its FAQ says the organisation needs to be licensed for Copilot and have SharePoint Advanced Management available.

Indirect cost: admin and helpdesk time to test custom search integrations and brief users.

## Scope

Users who search for content in SharePoint Online and OneDrive on the web are affected, per Microsoft's notice. The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform, and General Availability and Targeted Release phases.

Rollout per MC1540513: Frontier Preview (Worldwide) from mid-October 2026 to mid-January 2027, then General Availability (Worldwide) from mid-January 2027 to mid-April 2027. Roles: Learn says that by default only SharePoint administrators can manage Restricted Content Discovery. Learn's Copilot Search pages describe it in the Microsoft Copilot app; the roles and prerequisites for the SharePoint and OneDrive surface are not yet documented.

## Governance guidance

### Before rollout
- Decide before the act-by date of 2027-01-18 in MC1540513 whether to accept the new experience or defer it at tenant or site level; the SharePoint administrator owns the decision.
- Test custom search experiences and integrations that use SharePoint or OneDrive search, as the notice recommends.
- Review sites at risk of oversharing and apply Restricted Content Discovery to SharePoint sites that need a permissions review first.
- Brief the helpdesk that some AI capabilities depend on licensing and that Frontier Preview users can opt out.

### At rollout
- Confirm during the Frontier Preview and General Availability windows which users see the new interface, and collect reports of search features users say are missing.
- Check that sites under Restricted Content Discovery are still those you intend, and allow time for changes to propagate, which Learn says can be long for large sites.

### After rollout
- Read the new Learn documentation Microsoft says it will publish before General Availability and update this page's controls and licensing notes.
- Repeat the custom search tests once the rollout window ends in mid-April 2027.
- Remove Restricted Content Discovery from sites once their permission reviews finish, because Learn describes it as a temporary governance control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Deferring the updated search experience at tenant and site level</strong><br><small>Tenant</small><br><small class="controls__note">MC1540513 says options to defer exist at tenant and individual site level; Learn documents no path or command at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites appear in organisation-wide search and Copilot answers</strong><br><small>Site</small><br><small class="controls__note">Existing control, not a deferral switch. SharePoint sites only, not OneDrive. Needs a Microsoft Copilot licence and SharePoint Advanced Management; by default only SharePoint administrators can manage it.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Deferral is described in Microsoft's notice but Learn documents no setting for it at the time of writing, so the first row is empty by design.

Restricted Content Discovery is an existing site-level control, not a deferral switch. Learn says it stops a site appearing in organization-wide search results and Microsoft Copilot answers unless a user owns or has recently interacted with its content, and that it affects organization-wide search experiences such as SharePoint home. Learn also says it does not affect searches that originate from site context. It is not supported for OneDrive sites. The Restricted Content Discovery page describes limiting discovery including recently interacted files, whereas the Copilot Search management page states an ownership or recent-interaction exception; these descriptions differ.

Restricted SharePoint Search is an existing setting that is retiring; its own Learn page says new enablement has been blocked since July 31, 2026. It is for SharePoint Administrators or above; Learn says it is turned off by default with an empty allowed list.

## Open questions

- Which tenant-level and site-level setting defers the new experience, and where will it be documented? Watch the Learn pages Microsoft says will appear before General Availability.
- Which licence gives users the AI summaries in SharePoint and OneDrive, given that the Copilot Search FAQ describes Copilot Search as limited to the Microsoft Copilot app?
- Do the updated SharePoint and OneDrive search results follow Restricted Content Discovery and Restricted SharePoint Search?
- What happens to the Frontier Preview opt-out at General Availability, and which custom search integrations does Microsoft expect to be affected?

<!-- rationale
risk: Medium. Search reaches content users can already open, and Learn says Microsoft Copilot can surface overshared content to anyone with access. Microsoft's notice says deferral options exist, but Learn documents no setting for them yet.
cost: Low. Learn says Copilot Search in the Microsoft Copilot app has no additional cost within the Microsoft Copilot licence, but licensing for the SharePoint and OneDrive surface is not yet published. The cost known today is admin time for testing.
impact: High. Microsoft's notice says users who search in SharePoint Online and OneDrive on the web will see a changed search interface, so most staff who use search in those products will notice it.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Search is the way most people find files in SharePoint and OneDrive. | Found: Searched: SharePoint OneDrive search most people find files primary way users find content. Read excerpts from overview-microsoft-search, overview-of-search and make-sure-content-can-be-found; none establishes how most people find files. | Fix: Replace 'Search is the way most people find files in SharePoint and OneDrive' with 'Microsoft's notice says the change affects users who search for content in SharePoint Online and OneDrive on the web'.
-->
