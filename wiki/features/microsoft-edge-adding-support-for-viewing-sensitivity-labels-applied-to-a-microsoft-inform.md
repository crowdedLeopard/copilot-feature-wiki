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
action: "prepare"
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
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1380335155-june-26,-2025"
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
  - title: "Learn about sensitivity labels: encryption"
    url: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    kind: "learn"
  - title: "Get started with content explorer"
    url: "https://learn.microsoft.com/purview/data-classification-content-explorer"
    kind: "learn"
  - title: "Create and configure sensitivity labels"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
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
  - date: "2026-11-21"
    note: "Corrected after the independent check: the Stable channel release notes document the feature (version 138.0.3351.55, controlled rollout); action is now prepare."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 42
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "ad5257502ba9d130ed433c4acdd8bfdd"
---

## What's changing

Microsoft plans to let users see the sensitivity label applied to a Microsoft Information Protection (MIP) protected PDF when they open it in the new PDF viewer in Microsoft Edge. The roadmap item says the aim is that enterprise customers are well informed of the data classification so they can handle such documents appropriately.

The roadmap still lists In development with a November CY2026 target, but Microsoft's Stable channel release notes for version 138.0.3351.55, dated June 26, 2025, already describe sensitivity-label viewing in the new built-in PDF reader as available through a controlled feature rollout. Learn's page on the Edge PDF reader already says users can view MIP protected files saved locally or in the cloud, and that the file opens if the signed-in profile has at least view permissions. Learn also documents a built-in PDF reader powered by Adobe Acrobat's rendering engine, controlled by the NewPDFReaderEnabled policy; whether that is the viewer this item means is the roadmap's wording ("the new PDF viewer"), not something Learn states.

The roadmap record shows the status as In development, with a target of November CY2026, for Worldwide (Standard Multi-Tenant), on the Web platform, at General Availability. These are Microsoft's targets, not commitments. Microsoft has not stated what happens on arrival. Microsoft's Stable channel release notes describe a controlled feature rollout; the feature might not yet be visible on every device.

## Why it matters

For a service owner this is a visibility change: users who open protected PDFs in Edge may see the classification Microsoft Purview Information Protection applied, which supports handling the document correctly. The roadmap describes label visibility rather than a change to protection, so it only helps if your labels are applied consistently to PDFs.

Microsoft has not stated what happens on arrival or whether an administrator can turn the display off, so plan on the display appearing in the new PDF viewer and keep your label names and descriptions clear enough for end users to read.

## Risk assessment

**Data exposure**
- The roadmap describes showing the label already applied to a protected PDF. No new data access is described. Existing access still follows the file's permissions: Learn says the file opens in Edge if the signed-in profile has at least view permissions.
- The roadmap describes showing the sensitivity label to enterprise customers who view protected PDFs. Check that label names do not reveal sensitive project or customer names.

**Security & identity**
- Learn's protected PDF page lists work or school credentials as the supported sign-in for opening protected PDFs in Edge, and the Edge PDF reader page says viewing files with consumer identities is currently not supported. Users signed in with another profile may not see a protected PDF open, or its label.
- Showing a label informs users; it is not described as an enforcement control. Rights restrictions still come from the label's encryption settings in Purview.

**Autonomy & actions**
- No autonomous action is described. The roadmap item describes viewing a label only.

**Change & support**
- Expect help-desk questions from users who see a label they do not recognise on a PDF. Microsoft's Stable channel release notes describe a controlled feature rollout; the feature might not yet be visible on every device. Helpdesk briefing is the main control.
- The NewPDFReaderEnabled policy is deprecated from Microsoft Edge version 156 and planned to become obsolete from version 162, after which organisations can no longer use it to opt out of the new PDF reader.

## Cost and licensing

Microsoft's PDF reader in Microsoft Edge page says "A license is required for MIP" and links Microsoft 365 licensing guidance. The Microsoft Purview service description says administrators and end users need the appropriate licences for the Information Protection features they use. The roadmap item and Learn name no separate licence, price or meter for this feature, so the cost known today is admin and communication time.

A licence-level or price specific to the label display is not yet published. Check the licensing guidance for your plans before assuming that every user who opens a protected PDF is licensed for MIP.

## Scope

The roadmap lists the cloud as Worldwide (Standard Multi-Tenant), the platform as Web, and the release phase as General Availability. It states that the change will be in the new PDF viewer on Microsoft Edge and is aimed at enterprise customers. US Government clouds are not listed on the roadmap item; Microsoft has not stated whether the feature will reach them.

Learn's protected PDF page lists work or school credentials as the supported sign-in for opening protected PDFs in Edge. The Edge PDF reader page says viewing with consumer identities is currently not supported. The Stable channel release notes document the feature under version 138.0.3351.55, dated June 26, 2025. Whether macOS is covered is not yet published.

## Governance guidance

### Before rollout
- Inventory sensitivity-labelled content in the Microsoft Purview portal to identify PDFs to test.
- Check the NewPDFReaderEnabled policy in your Group Policy or registry settings and note that Microsoft plans to make it obsolete from Edge version 162.
- Review label display names for wording that would confuse users or disclose sensitive detail.
- Brief the service desk that a label may appear when users open protected PDFs in Edge.

### At rollout
- Open a test protected PDF in Edge with a work account and confirm whether the label is displayed, to verify availability on your test devices.
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

The controls table includes the NewPDFReaderEnabled policy, which Learn describes as choosing the new Adobe Acrobat powered PDF reader. It is deprecated, and Learn does not state that it governs label display. Microsoft Learn documents no setting that shows or hides the sensitivity label in the PDF viewer at the time of writing (November 2026).

The Edge PDF reader page says the signed-in profile needs at least view permissions to open a protected PDF.

## Open questions

- Will the label display be on by default for everyone, or does it depend on a policy or rollout stage? Watch the Microsoft 365 roadmap item and Message center.
- Is there an Edge policy or management service setting that turns the label display off? Watch the Edge policy reference and the PDF reader page on Learn.
- Is sensitivity-label display covered on macOS?
- Does the display cover labels applied without encryption, or only PDFs protected by MIP encryption?
- Is the feature tied to the new PDF viewer that the NewPDFReaderEnabled policy selects, and what does the viewer do once that policy becomes obsolete?

<!-- rationale
risk: Low. The roadmap describes displaying a label already applied to a protected PDF; no new data access, sharing or autonomous action is described, and no default is stated.
cost: Low. Microsoft Learn says a licence is required for MIP and names no separate licence or meter for this feature, so the known cost is admin and communication time.
impact: Low. The roadmap describes a read-only display of the label for people who open MIP protected PDFs in Edge; it does not describe any change to who can open them.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Risk assessment: Change & support; Governance guidance / availability: The policy reference plans NewPDFReaderEnabled obsolescence starting in Edge 162. | Found: The policy will remain supported for a minimum of 6 major releases and is planned to become obsolete starting in Microsoft Edge version 162. | Fix: Add to the retirement sentence: 'Microsoft's September 2026 PDF-partnership FAQ instead schedules removal of the legacy PDF engine in Edge 156.' Cite https://techcommunity.microsoft.com/blog/microsoftedgeinsider/microsoft-edge-and-adobe-partner-to-improve-the-pdf-experience/3733481; its FAQ says 'The PDF engine in the Microsoft Edge built-in PDF reader is scheduled to be removed in Edge version 156.' Keep the policy reference's 162 plan attributed to that reference. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/newpdfreaderenabled
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist instructs administrators to review label display names, but the controls table contains no sensitivity-label configuration control. | Found: Review label display names for wording that would confuse users or disclose sensitive detail. | Table controls: Whether Edge uses the new Adobe Acrobat powered PDF reader (deprecated policy); A setting that shows or hides the sensitivity label in the PDF viewer. | Fix: Remove the Before rollout bullet 'Review label display names for wording that would confuse users or disclose sensitive detail.' Do not add a controls row.
-->
