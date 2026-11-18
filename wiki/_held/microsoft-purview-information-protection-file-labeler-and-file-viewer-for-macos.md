---
title: "Microsoft Purview Information Protection: File Labeler and File Viewer for macOS"
slug: "microsoft-purview-information-protection-file-labeler-and-file-viewer-for-macos"
roadmapId: 561327
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans macOS versions of the Information Protection File Labeler and File Viewer. Mac users download them separately; Microsoft's notice says no immediate admin action is required and existing label policies still apply."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Microsoft's Windows client page says a cloud-based subscription for sensitivity labeling is required to use the client. No licence or price specific to the macOS client is yet published."
audiences: ["security","compliance","m365-admin","end-user"]
tags: ["purview","information-protection","sensitivity-labels","encryption","macos"]
sources:
  - title: "Microsoft 365 Roadmap 561327"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561327"
    kind: "roadmap"
  - title: "MC1326509: (Updated) Microsoft Purview: Information Protection- File Labeler and File Viewer for MacOS"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1326509"
    kind: "message-center"
  - title: "Extend sensitivity labeling on Windows"
    url: "https://learn.microsoft.com/purview/information-protection-client"
    kind: "learn"
  - title: "Learn about Advanced label-based protection for all files on devices"
    url: "https://learn.microsoft.com/purview/dlp-learn-about-advanced-label-protection"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g"]
controls:
  - governs: "Which sensitivity labels are published to which users and groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Publish label"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity <policy name> -AddLabels <label names>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy?view=exchange-ps"
    note: "Existing control, not specific to macOS. Microsoft's notice says existing labelling policies continue to govern across platforms. Set-LabelPolicy works only in Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing: macOS File Labeler and File Viewer, with the October 2026 timeline update from MC1326509."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 55
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "aa4c9431d32da72d53697d42ecb25634"
---

## What's changing

Microsoft Purview Information Protection is adding macOS versions of its File Labeler and File Viewer. Microsoft's notice MC1326509 says the clients let Mac users apply, change and remove sensitivity labels on supported files (Office documents, PDFs, images, text files and other types), label one file or several, and open protected files, including .pfile-based formats, that their originating applications do not support. Labels and protection stay on a file when it is shared or moved.

The notice describes parity with the Windows File Labeler and File Viewer, with these stated exceptions: Advanced label-based protection is not supported in this release, and selecting a folder does not show the option, so the user has to select files. The client is not pre-installed and is downloaded separately, from the Microsoft Purview Information Protection page.

On Windows, Microsoft Learn describes the File Labeler as the tool that applies sensitivity labels and encryption from File Explorer and the Viewer as the tool that opens encrypted files, as part of an information protection client that runs on Windows only. Microsoft Learn has no page for the macOS clients at the time of writing (November 2026), so what is said here about their behaviour is the roadmap description and the notice.

The roadmap item is In development, with a preview target of May CY2026 and a General Availability target of January CY2027. MC1326509, updated on 13 October 2026, says the public preview download was due on or around 29 May 2026 and General Availability (Worldwide) rollout begins late January 2027, to complete by mid-November 2027. The roadmap record lists the platform as Web, while the description and the notice say macOS; this page follows the description and the notice.

## Why it matters

This extends labelling and protected-file viewing to macOS, with the experience Microsoft's notice says already exists on Windows. For a service owner the question is consistency: Mac users will be able to remove or change labels on files, and open protected files, under the same label policies you already publish. Those policies are the control, so check that they read correctly for people on Macs.

Microsoft's notice says no immediate action is required. The client is not pre-installed, so it reaches users when someone downloads it; the notice suggests informing macOS users and downloading the client when it becomes available. Microsoft's Learn pages do not yet say whether an admin can restrict who installs it.

## Risk assessment

**Data exposure**
- Mac users can open protected files, including .pfile-based formats, outside their originating applications. Access still depends on the permissions in the label's protection, which the notice says remain governed by existing policies.
- Advanced label-based protection is excluded. On Windows, Microsoft Learn describes it as an endpoint DLP setting that lets labelled, encrypted files other than Office and PDF keep their file name extension; without it the extension changes and the file opens in the Viewer. How the macOS client treats such files is not described, so confirm it in a pilot before relying on it.

**Security & identity**
- The client lets users remove or change labels as well as apply them. Whether a user may do so follows the label policy, so review the policy settings that decide who can lower or remove a label before Mac users get the client.
- Which account and sign-in method the macOS client uses is not described by Microsoft yet.

**Autonomy & actions**
- No change: the notice describes user-driven labelling of selected files, and no autonomous behaviour is described.

**Change & support**
- The client is separate software that Mac users download, so expect questions about where to get it and which version to use. The notice says selecting a folder does not show the option, which users may find unexpected if they know the Windows behaviour.
- Because Mac and Windows differ on Advanced label-based protection, support staff should not assume identical results for the same file on both platforms.

## Cost and licensing

Microsoft's page on the Windows information protection client says: "You must have a cloud-based subscription for sensitivity labeling using the Microsoft Purview Information Protection client or scanner" and points to Microsoft 365 licensing guidance for security and compliance. That page describes the Windows client. A licence or price specific to the macOS File Labeler and File Viewer is not yet published, and the notice names no meter or charge.

The costs the sources show are indirect: communicating the availability to Mac users, distributing the download, and testing label behaviour on macOS before wider use.

## Scope

Microsoft's notice names two groups: users on macOS who work with labelled and protected files, and admins managing Microsoft Purview Information Protection. The roadmap record lists the cloud as Worldwide (Standard Multi-Tenant) and the platform as Web, which differs from the macOS platform in the description and the notice.

Rollout: the notice gives a public preview download on or around 29 May 2026 and General Availability (Worldwide) beginning late January 2027 and completing by mid-November 2027. The client is downloaded separately and is not pre-installed. Existing sensitivity labelling policies continue to apply, per the notice. Supported macOS versions and system requirements are not stated in the sources read.

## Governance guidance

### Before rollout
- Review published label policies for cross-platform needs, as the notice suggests, so that labels and protection settings behave acceptably for Mac users (see the first controls row).
- Identify which Mac users work with labelled or protected files and decide who should be told about the client.
- Check which of your protected files rely on Advanced label-based protection on Windows, since the macOS release does not support it.

### At rollout
- Tell macOS users that the File Labeler and File Viewer are a separate download from the Microsoft Purview Information Protection page and are not pre-installed.
- Run a small pilot on Macs, labelling and opening files of the types your users handle, and compare the result with the same files on Windows.

### After rollout
- Collect user reports on folder selection and on files that do not open as expected, and compare them with the Windows client's behaviour.
- Re-check the roadmap item and MC1326509 for timeline updates, as the notice was already updated once on 13 October 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which sensitivity labels are published to which users and groups</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not specific to macOS. Microsoft's notice says existing labelling policies continue to govern across platforms. Set-LabelPolicy works only in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Publish label <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &lt;policy name&gt; -AddLabels &lt;label names&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The one documented control is the label publishing policy, which decides which users and groups receive which sensitivity labels. Microsoft's notice says existing Purview labelling policies and controls continue to govern behaviour across platforms; the Learn page on creating and publishing labels does not mention macOS, so treat that statement as Microsoft's notice and verify it in a pilot.

The Set-LabelPolicy cmdlet works only in Security & Compliance PowerShell and needs assigned permissions in the Microsoft Purview portal. No separate switch to allow or block the macOS clients is documented at the time of writing.

## Open questions

- Which macOS versions and system requirements does the client support? Watch the Microsoft Purview Information Protection download page and the Learn documentation.
- Can an admin control who installs the macOS client or which users may use it, beyond label policies? Watch Message center and Learn.
- How does the macOS client treat encrypted files other than Office and PDF without Advanced label-based protection? Watch Learn.
- Which licence covers the macOS clients, and is it the same as the Windows client? Watch the Microsoft Purview service description.
- Will the January CY2027 General Availability target hold, given the October 2026 timeline update? Watch MC1326509.

<!-- rationale
risk: Medium. Mac users gain a client that can apply, change and remove sensitivity labels and open protected files, but Microsoft's notice MC1326509 says existing labelling policies continue to govern it.
cost: Low. The only cost the sources show is admin time to tell Mac users and distribute the download; the licence and any price for the macOS client are not yet published.
impact: Medium. Mac users who work with labelled or protected files notice it, and so do the admins who manage Information Protection; the client is not pre-installed.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Security & identity / applicability: Label policy settings decide who may lower or remove a label. | Found: Searched: sensitivity label policy remove downgrade labels justification permissions File Labeler. Read create-sensitivity-labels, sensitivity-labels and Label and protect files in File Explorer in Windows; found justification settings and separate protection-removal rights. | Fix: Replace 'Whether a user may do so follows the label policy, so review the policy settings that decide who can lower or remove a label before Mac users get the client.' with 'Microsoft's notice says existing sensitivity labeling policies continue to apply; test label changes and removal with representative Mac users before wider deployment.'
- [contradicted, blocker] front matter: licensing.model; Cost and licensing; Open questions; rationale: cost / licensing: The licensing model for using the macOS clients is unknown because Microsoft has not published which licensing covers them. | Found: This licensing model enables you to apply Microsoft Purview controls and protections to Microsoft 365 and Windows/macOS endpoint-based assets. | Fix: Set licensing.model to 'per-user'. Add https://learn.microsoft.com/purview/purview-billing-models to sources and state: 'Microsoft describes protections on Windows/macOS endpoint-based assets under its per-user licensing model. A separate licence or price specific to these macOS clients is not yet published.' Replace the broad licensing question with 'Will Microsoft publish licensing conditions specific to these macOS clients?' and narrow the rationale's unpublished-licensing wording to macOS-client-specific conditions. | Source: https://learn.microsoft.com/purview/purview-billing-models
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / applicability: Access to protected content depends on the permissions in its encryption. | Found: Control access to content by using encryption for emails, meeting invites, and documents to prevent unauthorized people from accessing this data. | Fix: Add https://learn.microsoft.com/purview/sensitivity-labels to sources for the general encryption-based access-control statement; retain the notice as the source for existing policies continuing on macOS. | Source: https://learn.microsoft.com/purview/sensitivity-labels
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to take stock of Advanced label-based protection although the table has only a label publishing policy row. | Found: Check which of your protected files rely on Advanced label-based protection on Windows; table: Which sensitivity labels are published to which users and groups. | Fix: Remove the Before rollout bullet 'Check which of your protected files rely on Advanced label-based protection on Windows, since the macOS release does not support it.' The risk assessment already records the exclusion and recommends a pilot; no additional control row is requested.
-->
