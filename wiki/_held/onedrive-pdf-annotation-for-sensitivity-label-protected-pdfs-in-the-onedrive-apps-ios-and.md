---
title: "OneDrive for iOS and Android: annotate sensitivity-label protected PDFs"
slug: "onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-the-onedrive-apps-ios-and"
roadmapId: 566697
topic: "modern-work"
products: ["OneDrive"]
summary: "OneDrive for iOS and Android now lets users with edit rights annotate PDFs protected by an encrypting sensitivity label, keeping the label. The roadmap says it is on by default and needs no admin action."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The OneDrive PDF features page lists annotation and markup tools as available free of cost for OneDrive for work/school. Sensitivity labels carry their own Purview licensing; Microsoft publishes nothing specific to this feature."
audiences: ["m365-admin","security","compliance","end-user"]
tags: ["onedrive","sensitivity-labels","pdf-viewer","mobile","encryption","information-protection","purview","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 566697"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566697"
    kind: "roadmap"
  - title: "Features available for PDFs in OneDrive in Web and mobiles/iPads"
    url: "https://learn.microsoft.com/sharepoint/onedrive-pdf-features"
    kind: "learn"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Restrict access to content by using sensitivity labels to apply encryption"
    url: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-onedrive-sharepoint-web-vi","sensitivity-labels","onedrive-presentation-mode-for-pdfs-in-the-ios-app-on-ipad","microsoft-edge-adding-support-for-viewing-sensitivity-labels-applied-to-a-microsoft-inform"]
controls:
  - governs: "Whether SharePoint and OneDrive support sensitivity labels on PDFs (existing tenant setting)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Policies > Auto-labeling policies > Protect PDFs with Auto-labeling"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableSensitivityLabelforPDF $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    note: "Existing setting. The banner shows only if PDF support is off. Not confirmed as a prerequisite for mobile annotation."
  - governs: "Switch for annotating protected PDFs in the OneDrive iOS and Android apps"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap says no new admin action is required."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-14T23:03:47"
changes:
  - date: "2026-11-23"
    note: "First briefing: mobile annotation of encrypted, sensitivity-label protected PDFs in OneDrive for iOS and Android, Launched."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 37 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 34
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "a1c487d099ab1d2fe2f26ac6299f9264"
---

## What's changing

The OneDrive apps for iOS and Android let users annotate PDFs that carry a Microsoft Purview Information Protection sensitivity label that applies encryption, without removing or weakening the label. The roadmap item lists the annotations as ink, highlight, free text, notes, signatures, image, shape and date stamps, bookmarks and form fields, added in the OneDrive mobile PDF viewer by users with edit or annotate rights.

The roadmap says the file's encryption and usage rights are preserved end to end, that the feature is enabled by default for eligible users and that it needs no new admin action. It applies to the OneDrive apps for iOS and Android only, not to OneDrive or SharePoint on the web. A separate briefing covers the [web viewer](/features/onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-onedrive-sharepoint-web-vi/).

The roadmap record shows status Launched, release phase General Availability and a target of August CY2026. Microsoft Learn's OneDrive PDF features page describes annotation and markup tools on mobile in general but does not mention sensitivity labels, so the behaviour for protected PDFs described here is the roadmap's description.

## Why it matters

Protected PDFs can now be annotated from phones, which are often the devices administrators manage least closely. Because the roadmap says the feature is on by default for eligible users, it reaches them without any admin action.

The roadmap ties annotation to edit or annotate rights, so the usage rights in your encrypting labels are the boundary to review. Brief the service desk and users before they find the new tools on their own.

## Risk assessment

**Data exposure**
- The roadmap says encryption and usage rights are preserved end to end, so annotated files stay protected by the label. Microsoft Learn does not yet describe how annotations are stored on an encrypted PDF.
- Users with edit or annotate rights can add content, including signatures and form fields, to a protected PDF on a phone. Review who holds those rights in each encrypting label.

**Security & identity**
- The label's encryption settings, including which users get which permissions, are set when the label is configured under the label's access control settings. That is the control that decides who can annotate.
- Sensitivity labels don't support signed PDFs, per the Purview page. Confirm how a PDF signed with the new signature annotation is treated.

**Autonomy & actions**
- No change: the roadmap describes user-driven annotation, with no agent or automated action.

**Change & support**
- Enabled by default for eligible users, per the roadmap, with no documented admin switch to turn it off. Tell users on iOS and Android that protected PDFs can now be annotated in the app.
- The tenant setting that adds PDF support for sensitivity labels in SharePoint and OneDrive can increase the number of files existing auto-labeling policies label; Microsoft states a ceiling of 500,000 automatically labelled files per tenant per day.

## Cost and licensing

Annotation and markup tools are listed as free of cost for OneDrive for work/school on the OneDrive PDF features page. That page lists no licence specific to labelled PDFs and no meter for this feature.

The protection itself comes from sensitivity labels. Microsoft's Purview service description says end users need the appropriate licences to use Information Protection functionality in their client applications; check that page's plan table for your tenant. A price or licence specific to this feature is not yet published.

Indirect costs are admin time for reviewing label permissions and user communication.

## Scope

The roadmap lists OneDrive apps for iOS and Android as the platforms, and Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as the clouds. It does not cover OneDrive or SharePoint on the web.

The roadmap says the feature is enabled by default for eligible users and that eligible users hold edit or annotate rights on a PDF protected by an encrypting sensitivity label. Microsoft does not state a minimum app version.

SharePoint and OneDrive support labelled PDFs, with or without encryption, when sensitivity labels are enabled and PDF support is added at tenant level. Whether that setting is a prerequisite for annotation on mobile is not documented.

## Governance guidance

### Before rollout
- Review which sensitivity labels apply encryption and which users hold edit rights in each, using the label's access control settings in the Microsoft Purview portal.
- Check whether PDF support for sensitivity labels is already on in SharePoint and OneDrive (first controls row) and note the auto-labeling effect before turning it on.
- Confirm how signed PDFs and the new signature annotation behave with your labels before telling users to rely on them.

### At rollout
- Tell iOS and Android OneDrive users that protected PDFs can now be annotated in the app, and which labels allow it.
- Brief the service desk on the roadmap's statement that no new admin action is needed and that Microsoft documents no switch for this feature.

### After rollout
- Test an annotated protected PDF on iOS and Android with a user who has only view rights and one with edit rights, and confirm the label stays applied.
- Watch Message center and the OneDrive PDF features page for documentation of labelled PDFs on mobile.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether SharePoint and OneDrive support sensitivity labels on PDFs (existing tenant setting)</strong><br><small>Tenant</small><br><small class="controls__note">Existing setting. The banner shows only if PDF support is off. Not confirmed as a prerequisite for mobile annotation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Policies › Auto-labeling policies › Protect PDFs with Auto-labeling <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableSensitivityLabelforPDF $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for annotating protected PDFs in the OneDrive iOS and Android apps</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap says no new admin action is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No feature-specific switch for mobile annotation of protected PDFs is documented, which the second row records. The roadmap says no new admin action is required.

The first row is an existing tenant setting for PDF support with sensitivity labels. The Learn page shows it as a banner in the Purview portal that appears only if PDF support is not yet on. Microsoft does not state that it is a prerequisite for mobile annotation. Who can annotate is decided by the usage rights in each label's encryption settings, configured when you create or edit a label.

## Open questions

- Does mobile annotation of protected PDFs depend on the tenant setting that adds PDF support for sensitivity labels in SharePoint and OneDrive? Watch the Purview sensitivity labels page.
- Which minimum OneDrive app versions on iOS and Android include this? Watch Message center and the OneDrive PDF features page.
- How are signed PDFs treated, given the Purview page says sensitivity labels don't support signed PDFs?
- Is there any admin setting to turn mobile annotation off for protected PDFs? None is documented at the time of writing (November 2026).

<!-- rationale
risk: Low. The roadmap says the label's encryption and usage rights are preserved end to end, so the change stays inside existing label protections; the open point is how mobile edits interact with your label rights.
cost: Low. The OneDrive PDF features page lists annotation and markup tools as available free of cost; the only cost shown is admin time and user communication. No licence specific to this feature is published.
impact: Medium. Users who open label-protected PDFs in the OneDrive iOS or Android apps and hold edit rights will see annotation tools; the roadmap says it is enabled by default for eligible users.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] controls[0].note; Governance controls / behaviour: The Protect PDFs with Auto-labeling banner appears only when PDF support is off. | Found: Searched: "Protect PDFs with Auto-labeling" banner only PDF support enabled; read the PDF-support section at learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files. It says "if you see" the banner, not that its visibility depends exclusively on support being off. | Fix: Replace the banner-visibility statements in controls[0].note and Governance controls with: 'If the Protect PDFs with Auto-labeling banner is visible, select it to turn on PDF protection for files in SharePoint and OneDrive.'
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance: Before rollout; Governance controls / applicability: Which users get which permissions in an encrypting label is decided when an administrator creates or edits the label's access control settings. | Found: Assign permissions now, so that you determine exactly which users get which permissions to content with that label. Let users assign permissions when they apply the label to content. | Fix: Replace the permissions-configuration statements with: 'For labels configured with Assign permissions now, administrators define users and permissions in the label's Access control settings in the Microsoft Purview portal. Labels can instead let users assign permissions when they apply the label.' Remove the Before rollout checklist step about reviewing label permissions, which has no controls-table row. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks readers to review label access-control permissions, but the controls table has no row for that control. | Found: Review which sensitivity labels apply encryption and which users hold edit rights in each, using the label's access control settings ... Table rows: tenant PDF support; switch for mobile annotation. | Fix: The Before rollout checklist step about reviewing label Access control permissions has no corresponding controls-table row. Remove that checklist step to resolve the mismatch without adding an unverified row.
-->
