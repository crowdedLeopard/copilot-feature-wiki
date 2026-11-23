---
title: "Microsoft Purview Endpoint DLP: detect sensitivity labels on files inside archives"
slug: "microsoft-purview-data-loss-prevention-endpoint-dlp-now-detects-sensitivity-labels-on-file"
roadmapId: 566617
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to change how Endpoint DLP classifies and enforces on .zip and similar archives, including detecting sensitivity labels inside them. Review your device policies before the December 2026 preview target."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "act-now"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and the other plans it names. A licence or charge specific to this change is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","sensitivity-labels","information-protection"]
sources:
  - title: "Microsoft 365 Roadmap 566617"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566617"
    kind: "roadmap"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Use sensitivity labels as conditions in DLP policies"
    url: "https://learn.microsoft.com/purview/dlp-sensitivity-label-as-condition"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
videos: []
related: ["endpoint-dlp","sensitivity-labels","microsoft-purview-endpoint-data-loss-prevention-archive-file-classification-behavior-chang","microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc"]
controls:
  - governs: "Endpoint DLP settings that apply to all DLP policies for devices"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings <PswsHashtable[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    note: "No setting specific to archive label detection is documented. Includes the Disable classification setting for file extensions. The cmdlet runs in Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-06T23:00:50"
changes:
  - date: "2026-11-23"
    note: "First briefing: the roadmap plans Endpoint DLP label detection and changed enforcement for archives; Learn does not yet describe the change."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: removed the Windows Server availability claim, set the action to act-now, dropped checklist steps with no controls-table row, and added the DLP policy deployment page as a source."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 44 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 44
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4d5eb5c175656c88cf10abe3637c668a"
---

## What's changing

Endpoint Data Loss Prevention (DLP) is planned to detect sensitivity labels on files inside archives such as .zip. The roadmap item describes the change as altering how archive files and "similar container formats" are classified and enforced, improving detection accuracy and giving administrators "finer control" over how content within archives is protected.

Microsoft Learn does not describe this change yet, so what follows about behaviour is the roadmap's description. The roadmap does not say which archive formats are covered, what the finer control is, or what changes for rules that already exist. Learn's current page on sensitivity labels as DLP conditions lists the supported file types for endpoint devices as .docx, .xlsx, .pptx, .pdf and .pfile, and does not name archive formats. Separately, Learn's Endpoint DLP page lists archive formats such as .zip, .rar, .7z and .tar among the files Endpoint DLP monitors on Windows.

The roadmap item has the status In development, with a preview target of December CY2026 and a general availability target of January CY2027. The release phases listed are Preview and General Availability, the cloud is Worldwide (Standard Multi-Tenant), and the platform is listed as Web. These are Microsoft's targets, not commitments.

## Why it matters

If your device policies use a sensitivity label as a condition, an archive that holds labelled files may start to match rules it did not match before. That could mean new blocks, overrides or alerts on archives that users already move around, and different results in the reports your analysts read. Microsoft has not stated whether the change is on by default, so plan on the roadmap's wording that classification and enforcement of archives change, not on nothing changing.

The practical view is to find out now which device rules use sensitivity label conditions and where archives are common, so the preview can be tested against real workflows. Detecting labels more accurately is a gain for protection, but it moves the line between what is audited and what is blocked.

## Risk assessment

**Data exposure**

- Archives that hold labelled files may be treated differently by Endpoint DLP rules that use a sensitivity label condition. Learn's list of file types supported for that condition on endpoint devices does not currently name archives, so confirm in the preview what is detected.
- The roadmap does not say whether label detection inside an archive depends on the label's protection settings. This is an open question below.

**Security & identity**

- No change to identity or roles is described. Configuring Endpoint DLP settings and device policies needs the Purview roles you already use for them.

**Autonomy & actions**

- The roadmap says the update changes how archives are "classified and enforced". Actions already set on device rules, such as Block or Block with override, may therefore apply to archive content that they did not reach before. Microsoft has not described the actions in detail.

**Change & support**

- Helpdesk teams may see users report blocked or flagged archives after the change. Brief them before the preview reaches your tenant.
- Endpoint DLP settings apply to all DLP policies for devices, and Learn documents no setting specific to this change at the time of writing (November 2026), so rollback by a dedicated switch should not be assumed.

## Cost and licensing

The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and in Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. That is the entitlement for Endpoint DLP as a whole.

A licence, meter or charge specific to archive label detection is not yet published, and the roadmap item names none. The cost the sources show is indirect: admin time to review device policies, test the preview and brief support teams.

## Scope

- **Who is affected:** organisations using Endpoint DLP on onboarded devices. Learn lists archive monitoring support on Windows 10/11 and macOS (the three latest released major versions), but the roadmap does not say which operating systems this change covers.
- **Cloud:** the roadmap lists Worldwide (Standard Multi-Tenant). Other clouds are not listed on the item.
- **Platform:** the roadmap record lists the platform as Web, which does not match an endpoint feature; confirm the operating systems in the preview.
- **Rollout:** preview targeted for December CY2026 and general availability for January CY2027. Microsoft has not stated rollout mechanics or prerequisites.
- **Prerequisite:** the devices must be onboarded to Microsoft Purview for Endpoint DLP policies to apply to them.

## Governance guidance

### Before rollout

- Find the teams and workflows that store or send .zip and other archives from onboarded devices.
- Review the Endpoint settings listed in the controls table, including how your file extension and classification settings treat archive extensions.
- Plan to brief the service desk about possible changes to what is blocked or flagged.

### At rollout

- Test the change on a small group of onboarded devices when the preview becomes available, using archives that contain labelled files.

### After rollout

- Update your policy documentation with how archives are now evaluated, using what Microsoft Learn says once it describes the change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Endpoint DLP settings that apply to all DLP policies for devices</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to archive label detection is documented. Includes the Disable classification setting for file extensions. The cmdlet runs in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings &lt;PswsHashtable[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents the Endpoint settings as a tenant-wide set that applies to all DLP policies for devices. It documents no setting specific to detecting sensitivity labels inside archives, so the row in the table is the nearest control and not a switch for this change.

The Endpoint settings page also describes a Disable classification setting that excludes file extensions on the Monitored files list from content scanning. Treat that as a present-day alternative whose effect on this change is not documented, and test it before relying on it.

## Open questions

- Is the change on by default, or does an administrator turn it on or configure it? Watch the roadmap item and the Endpoint DLP page on Microsoft Learn.
- Which archive formats and which operating systems are covered, and does label detection work for labelled files that are encrypted?
- What is the "finer control" the roadmap mentions, and where will administrators find it?
- How does this change interact with the separate roadmap item on archive file classification on Windows (see the related briefing)?

<!-- rationale
risk: Medium. The roadmap says Endpoint DLP is changing how archives are classified and enforced, so existing device rules may match archive content differently; Microsoft has not said whether it is on by default.
cost: Low. The Microsoft Purview service description lists Endpoint DLP as included in Microsoft 365 E5 and the other plans it names; the only cost the sources show is admin time, and nothing specific to this change is published.
impact: Medium. Compliance and security teams who tune device policies, and users who store or send archives on onboarded devices, are the people who would notice changed matches.
-->
