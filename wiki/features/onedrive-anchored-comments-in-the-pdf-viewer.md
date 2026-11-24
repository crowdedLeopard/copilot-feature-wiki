---
title: "OneDrive and SharePoint: anchored comments in the PDF viewer on the web"
slug: "onedrive-anchored-comments-in-the-pdf-viewer"
roadmapId: 569020
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "Microsoft plans anchored comments, replies and @mentions in the OneDrive and SharePoint PDF viewer on the web. The roadmap says it is on by default and needs no admin action; plan user communication."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "OneDrive is included in Microsoft 365 and Office 365 plans and SharePoint plans, or can be purchased standalone. Organisation users accessing SharePoint need a licence that includes SharePoint; no licence terms specific to anchored PDF comments are published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["onedrive","sharepoint","pdf-viewer","microsoft-365-files","comments","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 569020"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569020"
    kind: "roadmap"
  - title: "Features available for PDFs in OneDrive in Web and mobiles/iPads"
    url: "https://learn.microsoft.com/sharepoint/onedrive-pdf-features"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
  - title: "SharePoint service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description"
    kind: "learn"
videos: []
related: ["onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-onedrive-sharepoint-web-vi"]
controls:
  - governs: "Whether commenting on files is disabled for the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -CommentsOnFilesDisabled $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "Disables or enables commenting functionality on files. Requires a SharePoint Online administrator."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-08-07T21:45:15"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 569020: anchored comments in the OneDrive and SharePoint PDF viewer, on by default per the roadmap."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: removed the claim that the file-commenting parameter's reach is not stated, and set the licensing model to included, citing the OneDrive and SharePoint service descriptions."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 52
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "0d20f1d64fbd4f635c4882a4e4fc68d7"
---

## What's changing

Microsoft is adding anchored comments to the PDF viewer in OneDrive and SharePoint on the web. According to the roadmap item, users can attach a comment to a specific spot on a page or to selected text, and can collaborate through replies and @mentions. Microsoft describes this as bringing PDF review to parity with commenting in Office documents.

The roadmap item states that the feature will be on by default and requires no admin action. Microsoft Learn does not yet describe anchored comments in the PDF viewer, so what follows about behaviour is the roadmap's description. Learn's page on PDF features for OneDrive already lists annotation and markup tools, including inserting sticky notes onto PDF files, as a separate capability.

The roadmap record shows the status as In development with a target of October CY2026, for General Availability and Targeted Release. That target month has passed at the time of writing (November 2026) and the status has not changed in the record, which was last modified on 7 August 2026. The record lists the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds and the Web platform. No Message Center post was supplied for this item.

## Why it matters

If nobody acts, the roadmap says the feature arrives on by default, so people who review PDFs in OneDrive and SharePoint on the web will gain a new way to comment on them. Expect questions from users about where PDF comments live, who can see them and whether they replace annotations they already use.

The wiki's view is that this is a communication task more than a configuration task: no admin switch is described for it, and the main decision is whether your organisation's existing rules on commenting on files should be checked against the PDF viewer before users start relying on it.

## Risk assessment

**Data exposure**

- Comments are new text attached to PDF files that people already open in the viewer. Microsoft has not described where comment text is stored or whether it travels with a downloaded or shared copy of the PDF, so confirm both in a test tenant before telling users to put sensitive review notes in comments.
- @mentions name colleagues in comments. Check who can be mentioned on a file shared with external guests before encouraging mentions on externally shared PDFs.

**Security & identity**

- No change documented: the roadmap describes no new connector, app permission or identity for this feature.

**Autonomy & actions**

- No change documented: the roadmap describes comments made by people, with no agent or automated action.

**Change & support**

- The feature is on by default and the roadmap describes no admin action, so the help desk may receive questions about PDF comments. Prepare a short note that separates anchored comments from the annotation and markup tools Learn already documents for PDFs in OneDrive.
- The Set-SPOTenant cmdlet documents a tenant parameter that disables commenting on files. Test whether it also switches off the new PDF viewer comments before relying on it.

## Cost and licensing

The roadmap item names no licence, meter or price for anchored PDF comments, and says the feature requires no admin action. OneDrive is included in Microsoft 365 and Office 365 plans and in SharePoint plans, and can also be purchased as a standalone plan (OneDrive service description). To access SharePoint, users in your organisation need to be assigned a licence that includes SharePoint (SharePoint service description). A licence statement specific to anchored comments is not yet published.

For related PDF capabilities, the Learn page on PDF features for OneDrive lists annotation and markup tools, including sticky notes, as available free of cost, and shows "Yes" for OneDrive for work/school. That page does not mention anchored comments, so it is context and not a licence statement for this feature.

The indirect costs the sources show are admin time to test the existing comment control, and user communication.

## Scope

The roadmap item covers OneDrive and SharePoint on the Web platform. It lists the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds, with General Availability and Targeted Release as the release phases. The status is In development with a target of October CY2026.

The roadmap says the feature is on by default and requires no admin action. The roles, licences and prerequisites for using it are not stated in the roadmap item. The roadmap describes the web viewer only; it does not mention mobile apps or the desktop sync app.

## Governance guidance

### Before rollout

- Check the roadmap item 569020 and Message center for a rollout notice, because the October CY2026 target has passed and the status is still In development.
- Test, in a non-production tenant or pilot site, whether `Set-SPOTenant -CommentsOnFilesDisabled` stops commenting in the PDF viewer once the feature is available there (SharePoint administrator).
- Draft a short user note that separates anchored comments from the annotation and markup tools already documented for PDFs.

### At rollout

- Open a PDF in OneDrive on the web with a pilot group and confirm whether comments, replies and @mentions appear as the roadmap describes.
- Tell the help desk what users will see, so they can tell the new comments from existing annotations.

### After rollout

- Ask pilot users where they expect comments to be visible, and whether comment text appears on copies they download or share.
- Record the result of the `-CommentsOnFilesDisabled` test and update your guidance on commenting on files.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether commenting on files is disabled for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Disables or enables commenting functionality on files. Requires a SharePoint Online administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -CommentsOnFilesDisabled $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Only one control is listed because it is the only one found that could apply: the tenant-wide `-CommentsOnFilesDisabled` parameter of `Set-SPOTenant`. The reference describes it as disabling or enabling commenting functionality on files. The reference describes its reach as commenting functionality on files; test the PDF viewer experience in a pilot before relying on the control. The reference says you must be a SharePoint Online administrator to run the cmdlet.

Microsoft Learn documents no SharePoint admin centre path for this parameter at the time of writing (November 2026), so the table shows that side as not yet documented.

## Open questions

- Does `Set-SPOTenant -CommentsOnFilesDisabled` switch off anchored comments in the PDF viewer, or is there a separate control? Watch the Set-SPOTenant reference and the Microsoft Learn page on PDF features for OneDrive.
- Where is comment text stored, and does it travel with a downloaded or shared copy of the PDF? Watch for a Learn page on PDF comments.
- Which licence, if any, does the feature need beyond OneDrive and SharePoint plan licences, and does it apply to OneDrive for work or school only? Watch the roadmap item and the PDF features page.
- When will the feature roll out, given the October CY2026 target has passed with the status still In development? Watch Message center and roadmap item 569020.

<!-- rationale
risk: Low. It adds commenting to a PDF viewer users already have, and the roadmap describes no new data source, connector or autonomous behaviour.
cost: Low. The roadmap names no licence or meter, so the only cost the sources show is admin time and user communication; a licence statement specific to this feature is not yet published.
impact: Medium. It is on by default, so users who review PDFs in OneDrive and SharePoint on the web will see commenting and @mentions without any admin step.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: The medium impact rating fits an on-by-default change. | Found: impact: "medium"; defaultState: "on"; "Medium. It is on by default". The assessment scale defines high impact as "most users, or a change to default behaviour". | Fix: Set impact to high and replace the impact rationale with: "High. It is on by default, so users who review PDFs in OneDrive and SharePoint on the web will see commenting and @mentions without any admin step."
-->
