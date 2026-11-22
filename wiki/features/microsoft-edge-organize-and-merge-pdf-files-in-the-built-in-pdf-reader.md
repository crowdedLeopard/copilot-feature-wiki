---
title: "Microsoft Edge: organise and merge PDF files in the built-in PDF reader"
slug: "microsoft-edge-organize-and-merge-pdf-files-in-the-built-in-pdf-reader"
roadmapId: 577186
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Planned for January CY2027: Edge's PDF reader will let users extract, delete, rotate and reorder pages and merge PDFs. The roadmap names a PdfOrganizeAndMergeEnabled policy; Learn does not document it yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The roadmap item names no licence. The Learn page for the Edge PDF reader names a licence only for Microsoft Purview Information Protection (MIP) protected files, not for page editing or merging. Not yet published for this feature."
audiences: ["m365-admin","security","end-user"]
tags: ["microsoft-edge","pdf-viewer","policy","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 577186"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577186"
    kind: "roadmap"
  - title: "PDF reader in Microsoft Edge"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-pdf"
    kind: "learn"
  - title: "Microsoft Edge - Policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies"
    kind: "learn"
  - title: "Configure Microsoft Edge policy settings on Windows devices"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
videos: []
related: ["microsoft-edge-allow-users-to-translate-pdf-documents-into-their-preferred-language","microsoft-edge-adding-support-for-viewing-sensitivity-labels-applied-to-a-microsoft-inform"]
controls:
  - governs: "Whether users can organise and merge PDF files in the Edge PDF reader (PdfOrganizeAndMergeEnabled)"
    scope: "other"
    ui: null
    api: null
    note: "The roadmap item names this policy; Learn's Edge policy reference has no page for it at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-22"
    note: "New briefing: planned PDF page organising and merging in the Edge PDF reader; policy named on the roadmap but not yet documented on Learn."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 43 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the policy control's scope to Other, because Microsoft has not documented whether PdfOrganizeAndMergeEnabled applies per device or per user."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 42 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 42
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1319c3f6ee3367f0f6ba420d910a1e6c"
---

## What's changing

Microsoft plans to let users organise and merge PDF files inside the Microsoft Edge built-in PDF reader. According to the roadmap item, users can select pages to extract, delete, rotate or reorder, and save the result as a new PDF file. They can also merge the open PDF file with other PDF files that are open in Edge tabs or stored on their device, to create a single PDF file.

The roadmap item says files are processed on the device and the original files aren't modified. It also says administrators can manage the feature with the PdfOrganizeAndMergeEnabled policy.

The roadmap item has the status In development, with a target date of January CY2027, the General Availability release phase, the Web platform and the Worldwide (Standard Multi-Tenant) cloud. The date is a target, not a commitment. Microsoft Learn does not describe this feature yet, so what is written here about its behaviour is the roadmap's description.

## Why it matters

This adds editing actions to a reader that users already use for PDFs in Edge, so it is a change for anyone who opens PDF files in the browser rather than a separate PDF tool. Merging with PDFs from other tabs or from the device means a new file can combine content from several sources, which is worth a moment's thought where files carry different sensitivity.

Microsoft has not stated whether the feature is on by default. Until it does, base planning on the roadmap's statement that a policy exists, and do not assume the feature stays off or that it arrives switched on.

## Risk assessment

**Data exposure**
- The roadmap says merging works with PDFs open in Edge tabs or stored on the device, and that files are processed on the device with the originals unmodified. The saved result is a new PDF file, so combined content can end up in a file that is handled differently from its sources. Whether that new file keeps any protection from its source files is not yet documented.

**Security & identity**
- The Learn page for the Edge PDF reader describes opening Microsoft Purview Information Protection protected files, but nothing in the roadmap item or on that page says how organising or merging treats a protected PDF. Confirm this before relying on label protection for merged output.

**Autonomy & actions**
- No change: the roadmap describes actions a user starts by selecting pages or files, and nothing in it suggests the feature acts without a person.

**Change & support**
- Expect questions from users who find new page-editing options in the PDF reader. The roadmap names the PdfOrganizeAndMergeEnabled policy as the admin control, but its reference page is not yet documented, so support teams have no published setting to point to.

## Cost and licensing

The roadmap item names no licence, meter or price for this feature. The Learn page "PDF reader in Microsoft Edge" says the PDF reader is deployed and updated with the rest of the Edge browser, and mentions a licence requirement only for MIP protected files. No licence for organising or merging PDF files is published, so the licensing model is recorded as not yet published.

The only cost the sources show is admin and support time: deciding on the PdfOrganizeAndMergeEnabled policy and telling users what the new actions do.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and the General Availability release phase, with a target of January CY2027. No other cloud is listed on the roadmap item; that is a record fact, not a statement that the feature is unavailable elsewhere.

The feature is part of the Edge built-in PDF reader, which Learn says is deployed and updated with the rest of Edge. Which Edge version and operating systems will include it is not yet published.

## Governance guidance

### Before rollout
- Ask the team that manages Edge policy whether the PdfOrganizeAndMergeEnabled policy has appeared in the Microsoft Edge policy reference for the Edge version you deploy.
- Identify the groups that handle sensitive or protected PDFs, such as legal and finance, and decide whether they should get the feature.
- Check how your Purview sensitivity labels and rights-managed PDFs behave when merged, using a pilot device as soon as the feature is available.

### At rollout
- Test the new page and merge actions on a small pilot ring before wider deployment.
- Set the PdfOrganizeAndMergeEnabled policy to match your decision once it is documented, and confirm it is applied by opening edge://policy on a test device.
- Tell users that merged output is saved as a new PDF file and that the originals are not modified, as the roadmap describes.

### After rollout
- Review support requests about PDF editing and merging for patterns such as lost protection or unexpected file copies.
- Re-read the Edge policy reference and release notes each release for the policy's description and default.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can organise and merge PDF files in the Edge PDF reader (PdfOrganizeAndMergeEnabled)</strong><br><small class="controls__note">The roadmap item names this policy; Learn's Edge policy reference has no page for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The roadmap names one control, the PdfOrganizeAndMergeEnabled policy, and no admin centre path or API for it is documented at the time of writing (November 2026). Learn says Edge policies can be configured with group policy objects or the registry; the Edge policy reference gives each policy its own page, and this one does not have a page yet.

The policy's default, its scope (device or user) and what it disables exactly are not yet documented. Do not assume it also governs other PDF reader features.

## Open questions

- Is the feature on by default when it arrives, and what does the PdfOrganizeAndMergeEnabled policy do when it is not configured? Watch the Edge policy reference and the Edge release notes.
- Which Edge version and which operating systems will include organising and merging PDFs, given that the roadmap lists only the Web platform?
- Does merging or extracting pages from a Purview-protected or label-protected PDF keep the protection on the new file? Watch the Learn page for the Edge PDF reader.
- Which licence, if any, is needed to use the feature? Watch Message center and the roadmap item.

<!-- rationale
risk: Low. The roadmap says files are processed on the device and the originals are not modified, so the change stays inside existing file boundaries. The default and the policy's behaviour are not yet documented.
cost: Low. The roadmap item names no licence or meter, and the only cost the sources show is admin time to decide on the PdfOrganizeAndMergeEnabled policy. Licensing is not yet published.
impact: Medium. It adds new editing actions to the PDF reader that users already have in Edge, so people who handle PDFs will notice it. Microsoft has not stated whether it is on by default.
-->
