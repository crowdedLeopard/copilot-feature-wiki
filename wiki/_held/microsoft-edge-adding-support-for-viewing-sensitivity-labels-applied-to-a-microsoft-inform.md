---
title: "Microsoft Edge: view sensitivity labels on MIP protected PDFs in the new PDF viewer"
slug: "microsoft-edge-adding-support-for-viewing-sensitivity-labels-applied-to-a-microsoft-inform"
roadmapId: 489232
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft plans to show the sensitivity label on MIP protected PDFs in Edge's new PDF viewer. Microsoft has not stated a default or a switch, so check which PDF reader your users get and who opens protected PDFs."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Edge PDF reader page says a licence is required for MIP. The Purview service description says users need the appropriate licences for the functionality they use. No licence specific to this feature is published."
audiences: ["m365-admin","security","compliance"]
tags: ["microsoft-edge","sensitivity-labels","information-protection","purview","pdf-viewer"]
sources:
  - title: "Microsoft 365 Roadmap 489232"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=489232"
    kind: "roadmap"
  - title: "PDF reader in Microsoft Edge"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-pdf"
    kind: "learn"
  - title: "View protected PDFs using Microsoft Edge on Windows or Mac"
    url: "https://learn.microsoft.com/azure/information-protection/rms-client/protected-pdf-readers"
    kind: "learn"
  - title: "NewPDFReaderEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newpdfreaderenabled"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Security"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-365-security-compliance-licensing-guidance"
    kind: "learn"
  - title: "Microsoft Edge - Policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-edge-allow-users-to-translate-pdf-documents-into-their-preferred-language","onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-onedrive-sharepoint-web-vi","endpoint-dlp"]
controls:
  - governs: "Whether Edge uses the new Adobe Acrobat powered PDF reader (deprecated policy)"
    scope: "tenant"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Microsoft Edge built-in PDF reader powered by Adobe Acrobat enabled (deprecated)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newpdfreaderenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value NewPDFReaderEnabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newpdfreaderenabled"
    note: "Deprecated from Edge 156, planned obsolete from 162. The roadmap says this feature is in the new PDF viewer; Learn does not say this policy governs label display."
  - governs: "A setting that shows or hides the sensitivity label in the PDF viewer"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-21"
    note: "New briefing on the planned sensitivity label display for MIP protected PDFs in Edge's new PDF viewer."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 43 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 34
  unconfirmed: 2
  contradicted: 7
  attempts: 1
  hash: "a7da8e5ef0bb04eb38863164e3b78519"
---

## What's changing

Microsoft plans to let users see the sensitivity label applied to a Microsoft Information Protection (MIP) protected PDF when they open it in the new PDF viewer in Microsoft Edge. The roadmap item says the aim is that enterprise customers are well informed of the data classification so they can handle such documents appropriately.

Microsoft Learn does not yet describe this feature, so what follows about its behaviour is the roadmap's description. Learn's page on the Edge PDF reader already says users can view MIP protected files saved locally or in the cloud, and that the file opens if the signed-in profile has at least view permissions. It does not describe a label display. Learn also documents a built-in PDF reader powered by Adobe Acrobat's rendering engine, controlled by the NewPDFReaderEnabled policy; whether that is the viewer this item means is the roadmap's wording ("the new PDF viewer"), not something Learn states.

The roadmap record shows the status as In development, with a target of November CY2026, for Worldwide (Standard Multi-Tenant), on the Web platform, at General Availability. These are Microsoft's targets, not commitments. Microsoft has not stated what happens on arrival, the Edge version, or the rollout mechanism.

## Why it matters

For a service owner this is a visibility change: users who open protected PDFs in Edge may see the classification Microsoft Purview Information Protection applied, which supports handling the document correctly. It does not by itself add or change protection, so it only helps if your labels are applied consistently to PDFs.

Microsoft has not stated what happens on arrival or whether an administrator can turn the display off, so plan on the display appearing in the new PDF viewer and keep your label names and descriptions clear enough for end users to read.

## Risk assessment

**Data exposure**
- The roadmap describes showing the label already applied to a protected PDF. No new data access is described. Existing access still follows the file's permissions: Learn says the file opens in Edge if the signed-in profile has at least view permissions.
- A label's display name is shown to whoever can open the PDF. Check that label names do not reveal sensitive project or customer names.

**Security & identity**
- Learn's protected PDF page lists work or school credentials as the supported sign-in for opening protected PDFs in Edge, and the Edge PDF reader page says viewing files with consumer identities is currently not supported. Users signed in with another profile may not see a protected PDF open, or its label.
- Showing a label informs users; it is not described as an enforcement control. Rights restrictions still come from the label's encryption settings in Purview.

**Autonomy & actions**
- No autonomous action is described. The roadmap item describes viewing a label only.

**Change & support**
- Expect help-desk questions from users who see a label they do not recognise on a PDF. Microsoft has not stated the rollout mechanism, so helpdesk briefing is the main control.
- The NewPDFReaderEnabled policy is deprecated from Microsoft Edge version 156 and planned to become obsolete from version 162, after which organisations can no longer use it to opt out of the new PDF reader.

## Cost and licensing

Microsoft's PDF reader in Microsoft Edge page says "A license is required for MIP" and links Microsoft 365 licensing guidance. The Microsoft Purview service description says administrators and end users need the appropriate licences for the Information Protection features they use. The roadmap item and Learn name no separate licence, price or meter for this feature, so the cost known today is admin and communication time.

A licence-level or price specific to the label display is not yet published. Check the licensing guidance for your plans before assuming that every user who opens a protected PDF is licensed for MIP.

## Scope

The roadmap lists the cloud as Worldwide (Standard Multi-Tenant), the platform as Web, and the release phase as General Availability. It states that the change will be in the new PDF viewer on Microsoft Edge and is aimed at enterprise customers. US Government clouds are not listed on the roadmap item; Microsoft has not stated whether the feature will reach them.

Learn's protected PDF page lists work or school credentials as the supported sign-in for opening protected PDFs in Edge. The Edge PDF reader page says viewing with consumer identities is currently not supported. Which Edge versions will show labels, and whether macOS is covered, are not yet published.

## Governance guidance

### Before rollout
- Inventory which PDFs carry MIP protection and which sensitivity labels apply, using the Microsoft Purview portal, so you know what users will start to see.
- Check the NewPDFReaderEnabled policy in your Group Policy or registry settings and note that Microsoft plans to make it obsolete from Edge version 162.
- Review label display names for wording that would confuse users or disclose sensitive detail.
- Brief the service desk that a label may appear when users open protected PDFs in Edge.

### At rollout
- Open a test protected PDF in Edge with a work account and confirm whether the label is displayed, because Microsoft has not documented the experience yet.
- Confirm which Edge version and PDF reader your test devices use before judging the result.

### After rollout
- Watch Message center and the Edge PDF reader page on Microsoft Learn for the documented behaviour, default and any controls.
- Collect user feedback on whether the label display matches your classification scheme, and correct the label names or descriptions where it does not.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge uses the new Adobe Acrobat powered PDF reader (deprecated policy)</strong><br><small>Tenant</small><br><small class="controls__note">Deprecated from Edge 156, planned obsolete from 162. The roadmap says this feature is in the new PDF viewer; Learn does not say this policy governs label display.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Microsoft Edge built-in PDF reader powered by Adobe Acrobat enabled (deprecated) <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/newpdfreaderenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value NewPDFReaderEnabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/newpdfreaderenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A setting that shows or hides the sensitivity label in the PDF viewer</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented control adjacent to this feature is the NewPDFReaderEnabled policy, which Learn describes as choosing the new Adobe Acrobat powered PDF reader. It is deprecated, and Learn does not state that it governs label display. Microsoft Learn documents no setting that shows or hides the sensitivity label in the PDF viewer at the time of writing (November 2026).

Whether a user can open a protected PDF at all is decided by the file's permissions and the signed-in profile, per the Edge PDF reader page, not by an Edge setting.

## Open questions

- Will the label display be on by default for everyone, or does it depend on a policy or rollout stage? Watch the Microsoft 365 roadmap item and Message center.
- Is there an Edge policy or management service setting that turns the label display off? Watch the Edge policy reference and the PDF reader page on Learn.
- Which Edge versions and platforms will show the label, and is the macOS PDF viewer covered?
- Does the display cover labels applied without encryption, or only PDFs protected by MIP encryption?
- Is the feature tied to the new PDF viewer that the NewPDFReaderEnabled policy selects, and what does the viewer do once that policy becomes obsolete?

<!-- rationale
risk: Low. The roadmap describes displaying a label already applied to a protected PDF; no new data access, sharing or autonomous action is described, and no default is stated.
cost: Low. Microsoft Learn says a licence is required for MIP and names no separate licence or meter for this feature, so the known cost is admin and communication time.
impact: Low. The roadmap describes a read-only display of the label for people who open MIP protected PDFs in Edge; it does not describe any change to who can open them.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Governance guidance: At rollout / absence: Microsoft Learn does not yet describe the sensitivity-label viewing feature, so its behaviour is known only from the roadmap. | Found: Adding support for viewing Sensitivity labels applied to a Microsoft Information Protection (MIP) Protected PDF ... This change is available in the new Microsoft Edge built-in PDF reader. | Fix: Replace the documentation-gap sentence with: 'The roadmap still lists In development with a November CY2026 target, but Microsoft's Stable channel release notes for version 138.0.3351.55, dated June 26, 2025, already describe sensitivity-label viewing in the new built-in PDF reader as available through a controlled feature rollout.' Cite https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025. In At rollout, replace 'because Microsoft has not documented the experience yet' with 'to verify availability on your test devices'. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025
- [contradicted, blocker] What's changing; Scope; Open questions / absence: Microsoft has not published an Edge version for sensitivity-label viewing. | Found: Version 138.0.3351.55: June 26, 2025 ... Adding support for viewing Sensitivity labels applied to a Microsoft Information Protection (MIP) Protected PDF | Fix: Remove the claims that the Edge version is unpublished. State: 'The Stable channel release notes document the feature under version 138.0.3351.55, dated June 26, 2025.' Cite https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025. Narrow the versions-and-platforms open question to 'Is sensitivity-label display covered on macOS?' | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025
- [contradicted, blocker] What's changing; Risk assessment: Change & support / absence: Microsoft has not stated the rollout mechanism. | Found: This change is available in the new Microsoft Edge built-in PDF reader. Note: This is a controlled feature rollout. If you don't see this feature, check back as we continue our rollout. | Fix: Replace each rollout-mechanism gap with: 'Microsoft's Stable channel release notes describe a controlled feature rollout; the feature might not yet be visible on every device.' Cite https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025
- [unsupported, major] Why it matters / behaviour: The label-display feature does not itself add or change protection. | Found: Searched: Edge sensitivity label PDF viewing display name encryption permissions protection. Read Edge PDF reader, Stable archive label-display entry and Purview encryption search passages; none explicitly states that this feature cannot change protection. | Fix: Replace 'It does not by itself add or change protection' with 'The roadmap describes label visibility rather than a change to protection'.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The label's display name is shown to whoever can open the PDF. | Found: Searched: Edge sensitivity label PDF viewing display name encryption permissions protection. Read Edge PDF reader and Stable archive label-display entry; neither specifies the displayed field or guarantees display for every reader who can open the PDF. | Fix: Replace 'A label's display name is shown to whoever can open the PDF' with 'The roadmap describes showing the sensitivity label to enterprise customers who view protected PDFs'. Keep the advice to avoid sensitive label names.
- [contradicted, blocker] Governance controls / absence: NewPDFReaderEnabled is the only documented control adjacent to this feature. | Found: Disables the internal PDF viewer in Microsoft Edge. If you enable this policy Microsoft Edge treats PDF files as downloads and lets users open them with the default application. | Fix: Replace 'The only documented control adjacent to this feature is the NewPDFReaderEnabled policy' with 'The controls table includes the NewPDFReaderEnabled policy'. Do not add a control row. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/alwaysopenpdfexternally#supported-versions
- [contradicted, blocker] Governance controls / applicability: Whether a protected PDF can open in Edge is not affected by an Edge setting. | Found: If you enable this policy Microsoft Edge treats PDF files as downloads and lets users open them with the default application. If Microsoft Edge is the default PDF reader, PDF files aren't downloaded and continue to open in Microsoft Edge. | Fix: Replace the final Governance controls paragraph with: 'The Edge PDF reader page says the signed-in profile needs at least view permissions to open a protected PDF.' Remove 'not by an Edge setting'. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/alwaysopenpdfexternally#supported-versions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / applicability: A protected PDF's usage restrictions come from the sensitivity label's encryption permissions, not merely its visible label. | Found: When you choose which permissions to allow for those users or groups, you can select either: ... A predefined permissions level ... Custom permissions, where you choose one or more usage rights. | Fix: Add https://learn.microsoft.com/purview/encryption-sensitivity-labels to sources for the statement about encryption permissions. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels#assign-permissions-now
- [supported, minor] Governance guidance: Before rollout / behaviour: The Microsoft Purview portal can be used to inventory sensitivity-labelled content. | Found: Content explorer shows a current snapshot of the items that have a sensitivity label, a retention label, or are classified as a sensitive information type in your organization. | Fix: Add https://learn.microsoft.com/purview/data-classification-content-explorer to sources for the inventory guidance. Narrow the bullet to 'Inventory sensitivity-labelled content in the Microsoft Purview portal to identify PDFs to test'. | Source: https://learn.microsoft.com/purview/data-classification-content-explorer#content-explorer
- [supported, minor] Governance guidance: Before rollout, After rollout / behaviour: Administrators can review and edit sensitivity-label names and descriptions. | Found: To edit an existing label, select it, and then select the Edit label icon. ... This action starts the Edit sensitivity label configuration, which lets you change all the label settings. | Fix: Add https://learn.microsoft.com/purview/create-sensitivity-labels to sources for the label review and correction advice. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels#create-and-configure-sensitivity-labels
- [contradicted, minor] Governance guidance; controls / consistency: The checklist asks readers to inventory labelled PDFs and review or correct label names, but neither control appears in the controls table. | Found: Inventory which PDFs carry MIP protection ... Review label display names ... correct the label names or descriptions ... Controls table: NewPDFReaderEnabled; setting that shows or hides the sensitivity label. | Fix: The Before rollout inventory and label-name review bullets, and After rollout label-name correction instruction, have no corresponding control rows. Record this checklist/table mismatch; do not add rows as part of this correction.
- [contradicted, minor] front matter: action / consistency: The review action rating treats this display change as something that changes nothing until an administrator or maker chooses it. | Found: This change is available in the new Microsoft Edge built-in PDF reader. Note: This is a controlled feature rollout. If you don't see this feature, check back as we continue our rollout. | Fix: Set action to 'prepare': the documented controlled rollout brings a visible change to users, and the briefing recommends communication rather than opting into a new admin control. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025
-->
