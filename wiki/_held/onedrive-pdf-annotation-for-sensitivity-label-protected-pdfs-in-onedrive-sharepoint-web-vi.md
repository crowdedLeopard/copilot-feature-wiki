---
title: "OneDrive and SharePoint: annotate sensitivity-label protected PDFs in the web viewer"
slug: "onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-onedrive-sharepoint-web-vi"
roadmapId: 576276
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "Microsoft plans to let users with the right usage rights annotate sensitivity-label protected PDFs in OneDrive and SharePoint on the web, keeping the label and encryption. Targeted January CY2027; no admin action is documented yet."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn says a number of per-user subscriptions support sensitivity labels and that requirements depend on the features used. A licence or rate specific to annotating protected PDFs is not yet published."
audiences: ["m365-admin","security","compliance"]
tags: ["sensitivity-labels","onedrive","sharepoint","encryption","information-protection","purview","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 576276"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576276"
    kind: "roadmap"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Features available for PDFs in OneDrive in Web and mobiles/iPads"
    url: "https://learn.microsoft.com/sharepoint/onedrive-pdf-features"
    kind: "learn"
  - title: "Configure usage rights for the Azure Rights Management service"
    url: "https://learn.microsoft.com/purview/rights-management-usage-rights"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
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
videos: []
related: ["sensitivity-labels"]
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
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "Existing control; Learn does not say this feature depends on it. In the portal, the Protect PDFs with Auto-labeling banner turns it on. The cmdlet needs the SharePoint Online administrator role."
  - governs: "Which users hold which usage rights on files a label encrypts"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <MasterIdParameter> -EncryptionRightsDefinitions <EncryptionRightsDefinitionsParameter>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Existing control. Encryption settings are on the label's Access control page (Assign permissions now). The label encryption settings restrict access to the content; the rights required specifically for annotation are not yet documented."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item: records the plan, the existing PDF label and encryption controls, and what Microsoft has not yet published."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the controls note: label encryption settings govern access to protected files; annotation rights are not yet documented. Added the banner step to row 1's path."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the controls note: edits to a label's encryption permissions reach existing files when users reauthenticate, not immediately for every file."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-28"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 46
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "454c4863a3edbfafc17a6b7335b087cf"
---

## What's changing

The roadmap item states that Microsoft is enabling PDF annotation for sensitivity-label protected PDFs in OneDrive and SharePoint on the web. Users who have the appropriate usage rights would annotate these PDFs in place in the browser, and the file's sensitivity label, encryption and usage rights are preserved when changes are saved.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn documents annotation tools for PDFs in the OneDrive viewer in general, and documents how SharePoint and OneDrive handle label-encrypted PDFs once PDF support is turned on for the tenant. It does not connect the two.

The roadmap record shows status In development, a target of January CY2027, release phases General Availability and Targeted Release, and platform Web. The clouds listed are Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The target is Microsoft's plan, not a commitment. Neither the roadmap nor Learn states a default state or rollout mechanics.

## Why it matters

This adds a way to change the content of a file that carries encryption, from the browser. The roadmap ties it to "appropriate usage rights", so in the wiki's view the label's encryption permissions are what decide who can annotate, and they are worth checking before the feature arrives.

Microsoft has not stated what happens on arrival, so the advice here rests on no source saying that existing behaviour changes. The practical effect for a tenant is a likely rise in questions from users about who may annotate which protected PDF, and a need to confirm that the label and encryption survive a save.

## Risk assessment

**Data exposure**
- Annotations are saved into a labelled, encrypted PDF. The roadmap says the label, encryption and usage rights are preserved on save; Learn does not describe how, so confirm it with a test file. The label's encryption permissions (controls table, row 2) decide who holds usage rights.
- Learn says that for files encrypted with an on-premises key, or with Double Key Encryption, the service behaviour for processing file contents doesn't change. The roadmap does not say whether annotation covers those PDFs.

**Security & identity**
- "Appropriate usage rights" is the roadmap's wording. Learn defines **Edit Content, Edit** and **Save** as separate usage rights, but which of them annotation needs is not yet documented.
- Learn states that sensitivity labels don't support signed PDFs, so expect signed PDFs to fall outside this feature until Microsoft says otherwise.

**Autonomy & actions**
- No change: the roadmap describes users annotating in the browser, and no automated or agent action is described.

**Change & support**
- Learn documents PDF support for sensitivity labels as a tenant setting whose default is False. Whether annotating protected PDFs depends on that setting is not stated, so check its state (controls table, row 1).

## Cost and licensing

Licence: the Learn page "Get started with sensitivity labels" says a number of different per-user subscriptions support sensitivity labels for Microsoft 365 apps and services, that the licensing requirements for users depend on the features you use, and that admins also need a licence to manage labels. The Learn page on PDFs in OneDrive lists annotation and markup tools among the features available free of cost for OneDrive work or school accounts; it does not mention label-protected PDFs.

Meter: no meter is documented for this feature at the time of writing (November 2026). A licence or rate specific to annotating protected PDFs is not yet published.

Indirect cost: admin time to check the controls below and test the behaviour, and user communication. Running `Set-SPOTenant` requires the SharePoint Online administrator role.

## Scope

The roadmap record lists OneDrive and SharePoint, platform Web, and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds, with release phases General Availability and Targeted Release. It is aimed at users who hold the appropriate usage rights on a label-protected PDF.

Prerequisites are not documented for this feature. Learn documents PDF support for sensitivity labels in SharePoint and OneDrive as a separate tenant setting, and states that sensitivity labels don't support signed PDFs. Rollout mechanics and a default state are not stated.

## Governance guidance

### Before rollout
- Check whether PDF support for sensitivity labels is on in your tenant, using row 1 of the controls table; Learn documents its default as False.
- Review the encryption permissions on the labels users apply to PDFs, using row 2, so you know who holds Edit Content, Edit and Save rights.
- List the labelled PDFs that use Double Key Encryption or an on-premises key, or that are signed, because Learn documents them as outside normal label processing.

### At rollout
- Annotate a test labelled PDF in the OneDrive and SharePoint web viewer as users with different usage rights, then reopen it to confirm the label and encryption are unchanged.
- Watch Message center and the roadmap item for the status to move from In development.

### After rollout
- Ask the service desk to log questions about who can annotate protected PDFs, and feed them back into the label permissions in row 2.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether SharePoint and OneDrive support sensitivity labels on PDFs (existing tenant setting)</strong><br><small>Tenant</small><br><small class="controls__note">Existing control; Learn does not say this feature depends on it. In the portal, the Protect PDFs with Auto-labeling banner turns it on. The cmdlet needs the SharePoint Online administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Policies › Auto-labeling policies › Protect PDFs with Auto-labeling <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableSensitivityLabelforPDF $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold which usage rights on files a label encrypts</strong><br><small class="controls__note">Existing control. Encryption settings are on the label's Access control page (Assign permissions now). The label encryption settings restrict access to the content; the rights required specifically for annotation are not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;MasterIdParameter&gt; -EncryptionRightsDefinitions &lt;EncryptionRightsDefinitionsParameter&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are existing controls over labelled PDFs. Label encryption settings govern access to the protected content. Which usage rights annotation requires, and whether it depends on the PDF support setting in row 1, are not yet documented. Row 1 needs the SharePoint Online administrator role for the cmdlet; for Microsoft 365 Multi-Geo, Learn says to connect to each geo-location and run the command separately. For labels configured with Assign permissions now, changes to users or permissions apply to existing encrypted items when users authenticate with the encryption service; users with an existing use licence receive the changes when it expires and they reauthenticate, so test before editing a label in use.

## Open questions

- Which usage rights count as "appropriate usage rights" for annotation: Edit Content, Edit, Save, or another combination? Watch the Learn pages on usage rights and the roadmap item.
- Does annotating protected PDFs depend on the tenant's PDF support setting for sensitivity labels? Watch the Learn page on sensitivity labels in SharePoint and OneDrive.
- Does the feature cover PDFs protected with Double Key Encryption or an on-premises key, or only cloud-key encryption?
- Is there a default state, a rollout schedule or an admin setting for this feature? Watch Message center for a post on this item.
- Will a licence or meter specific to this feature be published?

<!-- rationale
risk: Low. The roadmap item says the label, encryption and usage rights are preserved when annotations are saved, so the data boundary should not move; Learn does not yet describe the feature, so this rests on the roadmap's plan.
cost: Low. The only cost the sources show is admin time to test it; a licence or meter specific to this feature is not yet published, and sensitivity labels already need a per-user subscription.
impact: Low. Only users who open label-protected PDFs in the OneDrive or SharePoint web viewer, and hold usage rights on them, would notice.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls / command: Set-Label -Identity <MasterIdParameter> -EncryptionRightsDefinitions <EncryptionRightsDefinitionsParameter> is the call that changes users' encryption usage rights. | Found: This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false and the EncryptionProtectionType parameter value is Template. | Fix: Replace controls[1].api.call and the matching rendered call with 'Set-Label -Identity <MasterIdParameter> -EncryptionEnabled $true -EncryptionProtectionType Template -EncryptionRightsDefinitions <EncryptionRightsDefinitionsParameter>'. The reference explicitly conditions EncryptionRightsDefinitions on these encryption parameters; the replacement keeps encryption enabled while setting template-based rights. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-label
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls / admin-path: Solutions > Information Protection > Sensitivity labels in the Microsoft Purview portal is the route given for managing label encryption permissions. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Sensitivity labels ... To edit an existing label, select it, and then select the Edit label icon. | Fix: Extend controls[1].ui.path and the matching rendered path to 'Solutions > Information Protection > Sensitivity labels > label > Edit label > Define the scope for this label > Files & other data assets > Choose protection settings for the types of items you selected > Control access > Access control > Configure access control settings > Assign permissions now > Assign permissions > Choose permissions'. Set controls[1].ui.docs and its rendered Learn link to https://learn.microsoft.com/purview/encryption-sensitivity-labels, which documents the permission settings; retain create-sensitivity-labels in sources for the editing route. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
-->
