---
title: "OneDrive and SharePoint: block screen capture of sensitivity-labelled PDFs in the web viewer"
slug: "onedrive-block-screen-capture-for-sensitivity-labeled-pdfs-in-the-onedrive-and-sharepoint"
roadmapId: 566695
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "The roadmap says the OneDrive and SharePoint web PDF viewer will block screen capture in Edge for PDFs whose sensitivity label lacks Copy (EXTRACT). No default or admin switch is documented; plan user communication."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Sensitivity labelling follows the Microsoft Purview service description: administrators and end users need the appropriate licences for the plans it lists. No licence or price specific to this PDF viewer behaviour is published."
audiences: ["m365-admin","compliance","security","change-adoption"]
tags: ["onedrive","sharepoint","sensitivity-labels","pdf-viewer","microsoft-edge","information-protection","purview","encryption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 566695"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566695"
    kind: "roadmap"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
  - title: "Configure usage rights for the Azure Rights Management service"
    url: "https://learn.microsoft.com/purview/rights-management-usage-rights"
    kind: "learn"
  - title: "Learn about the Azure Rights Management encryption service"
    url: "https://learn.microsoft.com/purview/azure-rights-management-learn-about"
    kind: "learn"
  - title: "Restrict access to content by using sensitivity labels to apply encryption"
    url: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Set-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["sensitivity-labels","onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-onedrive-sharepoint-web-vi"]
controls:
  - governs: "Whether a sensitivity label grants the Copy (EXTRACT) permission"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > label > Access control > Configure access control settings > Assign permissions now > Assign permissions > Choose permissions"
      docs: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label> -EncryptionRightsDefinitions <Identity1:Rights1,Rights2>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Copy (EXTRACT) is the right the item names. The parameter applies when EncryptionEnabled is set and EncryptionProtectionType is Template, per the reference. Security & Compliance PowerShell."
  - governs: "Whether SharePoint and OneDrive support sensitivity labels on PDFs"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Policies > Auto-labeling policies > Protect PDFs with Auto-labeling"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableSensitivityLabelforPDF $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "Existing tenant setting. Microsoft has not said whether the new screen capture block depends on it."
  - governs: "A switch for the PDF viewer's screen capture block"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-16T23:08:19"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: the record shows In development with an August CY2026 target, and Microsoft Learn has no page for the feature itself."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 38 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 37
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "93df9009616143b2a8876caf6d89eb8c"
---

## What's changing

The roadmap item states that the OneDrive and SharePoint web PDF viewer will block screen capture in Microsoft Edge when a user opens a PDF whose sensitivity (MIP) label lacks the Copy (EXTRACT) permission. The item's wording is brief and does not describe how the block is applied or what the user sees.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Two Learn pages give the background. The usage rights page says the Copy right (EXTRACT in policy) "enables options to copy data (including screen captures)" from the item. The Azure Rights Management page says that not granting Copy lets Rights Management prevent screen captures from many commonly used tools on Windows, and that browsers other than Edge can't prevent screen captures, a statement it extends to Office for the web. Separately, the page on sensitivity labels in SharePoint and OneDrive says that for encrypted documents in Office for the web, screen captures aren't prevented. That statement is about Office files in Office for the web and does not describe the PDF viewer.

The record shows status In development with a target of August CY2026, release phases General Availability and Targeted Release, platform Web, and the Worldwide, GCC, GCC High and DoD clouds. No preview date is given. The target month has passed in the record, which was last modified on 16 July 2026, so treat the date as a plan.

## Why it matters

If this ships as described, a label that withholds Copy would also start to stop screenshots of PDFs opened in the web viewer in Edge. For data owners that narrows one way labelled PDFs leave the screen. The Rights Management page itself cautions that taking a screenshot is only one way to share displayed data, so treat the block as one layer next to the label's permissions, not as proof a document cannot be shared.

For service owners the cost is support load: people who capture PDFs for tickets, training material or reports will meet a block they were not told about. The item mentions no admin step, and Microsoft has not stated whether the block is on by default or what happens on arrival, so base any plan on the item's description and confirm in a test tenant.

## Risk assessment

**Data exposure**

- The block depends on the label: it is described for PDFs whose label lacks Copy (EXTRACT). A PDF with no label, or a label that grants Copy, is outside the item's description. Granting Copy to stop a complaint also allows copying, including screen captures, per the usage rights page.
- Microsoft's Rights Management page says browsers other than Edge can't prevent screen captures, and that a camera or retyping also gets data off a screen. The item names Edge only.

**Security & identity**

- No new identity or permission is described. A single label can grant different permissions to different users, so whether the block follows the viewer's own rights or the label is not stated.

**Autonomy & actions**

- No change: the item describes a viewer behaviour and no agent or automated action.

**Change & support**

- Users who screenshot labelled PDFs will see a new restriction in the web viewer in Edge. Prepare an answer for the help desk, since the item describes no admin switch to turn the block off.
- Behaviour will differ by browser, so the same file can behave differently for the same person in Edge and elsewhere.

## Cost and licensing

No meter or charge is documented for this behaviour. The roadmap item names no licence, and the Learn pages read for this briefing give none specific to the PDF viewer.

Sensitivity labels are covered by the Microsoft Purview service description, which says the administrator creating and managing Information Protection features must have the appropriate licences for the plans it lists, and that end users also need the appropriate licences. Check that page for the plans that include the labelling features you use. A licence rate or entitlement specific to this feature is not yet published.

Indirect cost is admin time to review which labels withhold Copy, plus user communication and help desk time.

## Scope

The item is about users who open PDFs in the OneDrive and SharePoint web viewer in Microsoft Edge. The record lists platform Web and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds, with General Availability and Targeted Release phases.

The trigger is a sensitivity label on the PDF without the Copy (EXTRACT) permission. Microsoft Learn describes support for labels on PDFs in SharePoint and OneDrive as a tenant setting that can be enabled, and notes that sensitivity labels don't support signed PDFs. Whether the new block depends on that setting is not stated.

## Governance guidance

### Before rollout

- List the sensitivity labels that apply encryption and withhold Copy (EXTRACT), using the label permissions control in the table below.
- Check whether SharePoint and OneDrive support sensitivity labels on PDFs in your tenant, using the tenant setting in the table.
- Warn the help desk and teams that capture PDFs, such as training and support staff, that the web viewer in Edge may block capture of labelled PDFs.
- Watch the roadmap item and Message center for a rollout date, since the August CY2026 target has passed with status In development.

### At rollout

- Test with two accounts, one that holds Copy and one that does not, opening the same labelled PDF in the web viewer in Edge and trying a screenshot; record what each sees.
- Repeat the test in another browser to learn what users get outside Edge.

### After rollout

- Review label permissions before granting Copy to resolve a complaint: Copy also allows copying data, including screen captures, and lets Microsoft 365 Copilot and other AI apps access and summarise the content for the user.
- Re-check Microsoft Learn for a page on this feature and for any tenant setting, then update the control table.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a sensitivity label grants the Copy (EXTRACT) permission</strong><br><small class="controls__note">Copy (EXTRACT) is the right the item names. The parameter applies when EncryptionEnabled is set and EncryptionProtectionType is Template, per the reference. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › label › Access control › Configure access control settings › Assign permissions now › Assign permissions › Choose permissions <a href="https://learn.microsoft.com/purview/encryption-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label&gt; -EncryptionRightsDefinitions &lt;Identity1:Rights1,Rights2&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether SharePoint and OneDrive support sensitivity labels on PDFs</strong><br><small>Tenant</small><br><small class="controls__note">Existing tenant setting. Microsoft has not said whether the new screen capture block depends on it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Policies › Auto-labeling policies › Protect PDFs with Auto-labeling <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableSensitivityLabelforPDF $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for the PDF viewer's screen capture block</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented lever is the label's permissions, which decide whether Copy (EXTRACT) is granted. Microsoft Learn documents no separate switch for the viewer's screen capture block at the time of writing (November 2026), so the third row records that gap. The tenant setting for label support on PDFs is an existing control; the item does not say the block depends on it.

The usage rights page says that in some applications Copy also allows the entire document to be saved unencrypted, and that the right lets Microsoft 365 Copilot and other AI apps summarise the content for the user. Set-Label runs in Security & Compliance PowerShell and needs assigned permissions there.

## Open questions

- Is the block on by default, and can an administrator turn it off? Watch the roadmap item and Message center.
- Is the block decided by the viewer's own rights or by the label, given that one label can grant different users different permissions?
- Does the block depend on label support for PDFs being enabled in SharePoint and OneDrive?
- What happens in browsers other than Edge, and do tools outside the browser still capture the viewer?
- Will Microsoft publish a Learn page for this viewer behaviour and any licence it needs?

<!-- rationale
risk: Low. The item adds a restriction for sensitivity-labelled PDFs and no new data access; what remains is that the item names only Microsoft Edge and that Microsoft has not stated the default.
cost: Low. The only cost the sources show is admin and help desk time; no meter or feature-specific licence is documented, and sensitivity labels need the licences on the Purview service description.
impact: Medium. People who open label-protected PDFs without the Copy permission in the web viewer in Edge are the ones who notice; unlabelled files are outside the item's description.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls: first row / admin-path: The printed route goes directly from selecting a sensitivity label to Access control and its permission settings. | Found: To edit an existing label, select it, and then select the Edit label icon. ... This action starts the Edit sensitivity label configuration, which lets you change all the label settings. | Fix: Replace the path with 'Solutions > Information Protection > Sensitivity labels > label > Edit label > Define the scope for this label > Files & other data assets > Choose protection settings for the types of items you selected > Control access > Access control > Configure access control settings > Assign permissions now > Assign permissions > Choose permissions'. The entry and Edit label step are documented at https://learn.microsoft.com/purview/create-sensitivity-labels; the scope and Control access choices are documented at https://learn.microsoft.com/purview/encryption-sensitivity-labels. Keep both sources, which the briefing already cites. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and licensing.notes / licensing: The licensing model is included under the existing sensitivity-labelling product licences. | Found: Feature | Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium ... Manual Sensitivity Labeling | Included | Fix: Keep model included, but name a documented licence in the notes: 'The service description lists Manual Sensitivity Labeling as included with Microsoft 365 E3, among other plans. Administrators and end users need the appropriate licences for the labelling functionality they use. No licence specific to this PDF viewer behaviour is published.' | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
