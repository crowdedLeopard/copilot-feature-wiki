---
title: "Microsoft Purview Endpoint DLP: include or exclude default file path exclusions on Windows"
slug: "microsoft-purview-endpoint-data-loss-prevention-add-control-to-include-or-exclude-default"
roadmapId: 560057
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a control to include or exclude a Microsoft-managed list of default file path exclusions for Endpoint DLP on Windows. Security and compliance admins should check which paths they exclude by hand today."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint DLP as Included in Microsoft 365 E5/A5/G5 and the other plans it names. Nothing specific to this control is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp"]
sources:
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 560057"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560057"
    kind: "roadmap"
videos: []
related: ["endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc"]
controls:
  - governs: "Which Windows file paths Endpoint DLP excludes (administrator-entered exclusions)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > File path exclusions for Windows"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings @{\"Setting\"=\"PathExclusion\"; \"Value\"=\"C:\\Windows\";}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    note: "Applies to manually entered paths today, not to the new Microsoft-managed list. Security & Compliance PowerShell only."
  - governs: "Whether the Microsoft-managed default Windows exclusions are included or excluded"
    scope: "tenant"
    ui: null
    api: null
    note: "Described on the roadmap only. Learn documents a toggle for recommended macOS exclusions but none for Windows."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-14T22:41:38"
changes:
  - date: "2026-11-23"
    note: "New briefing: roadmap plan for a Microsoft-managed list of default Windows file path exclusions in Endpoint DLP, with what Learn documents today."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 40 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Correction after the independent check: removed three unsupported statements on identity, coexistence of exclusion layers and restored monitoring, and replaced them with points to confirm."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 46 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1169e3ecf73396b93c18f2eab9a8dc3f"
---

## What's changing

Microsoft plans to add a control that lets administrators include or exclude a default list of file path exclusions for Endpoint DLP on Windows. The roadmap item says customers previously had to configure system-file exclusions manually, that the feature provides the list by default with the option to include or exclude those paths, and that Microsoft manages the list "to ensure accuracy and ease of management".

Microsoft Learn does not yet describe this Windows control, so the behaviour above is the roadmap's description. Learn does document the current settings: under File path exclusions for Windows, administrators add their own paths, and a section titled "Windows file paths excluded by default" lists two paths that are already excluded, `%SystemDrive%\\Users\\*(1)\\AppData\\Roaming` and `%SystemDrive%\\Users\\*(1)\\AppData\\Local`. Learn says files in excluded locations are not audited and are not subject to DLP policy enforcement. For macOS, the same page documents an **Include recommended file path exclusions for Mac** toggle; it documents no equivalent toggle for Windows.

The roadmap item is In development, with a preview target of May CY2026 and a general availability target of August CY2026. Both months have passed at the time of writing (November 2026) and the record has not moved to Rolling out or Launched, so treat the dates as unconfirmed. The record lists Worldwide (Standard Multi-Tenant) only. Microsoft has not stated what happens on arrival: whether the Microsoft-managed list is included or excluded until an administrator chooses.

## Why it matters

Path exclusions decide which Windows files Endpoint DLP leaves unmonitored, so the setting affects audit coverage and enforcement across every onboarded device. A Microsoft-managed list would save administrators from maintaining system-path exclusions by hand, but the roadmap does not say how the list changes over time or how an administrator sees what it contains.

Because Microsoft has not stated the default, assume no source says existing behaviour changes, and decide before the control arrives whether you want Microsoft's list included. Compare it with the exclusions you maintain today so that a path you rely on being monitored is not excluded.

## Risk assessment

**Data exposure**
- Files in excluded paths are not audited and are not subject to DLP policy enforcement, per Learn. Including a Microsoft-managed list widens that unmonitored area to whatever the list contains, which Microsoft has not yet published for this control.
- Confirm whether excluding the Microsoft-managed list restores monitoring for the system paths you need to cover. The roadmap gives no information about the performance effect of doing so.

**Security & identity**
- The roadmap describes a path-exclusion setting and does not describe new data access or permissions.

**Autonomy & actions**
- No autonomous actions are described. The roadmap says the list is managed by Microsoft, so confirm whether Microsoft can change the list's contents without an administrator action and how changes are announced.

**Change & support**
- Confirm how the Microsoft-managed default list interacts with administrator-entered Windows path exclusions before using it to troubleshoot missing audit activity.
- The Learn page already lists two Windows paths as excluded by default, so an existing tenant has default exclusions today; confirm how the new list relates to them.

## Cost and licensing

The Microsoft Purview service description lists Endpoint data loss prevention as Included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The Endpoint DLP getting-started page points to Microsoft's licensing guidance and names no licence of its own.

No licence, meter or charge specific to this control is published at the time of writing (November 2026), and the roadmap item names none. The indirect cost is administrator time to compare the Microsoft-managed list with your own exclusions.

## Scope

The roadmap item covers Microsoft Purview Endpoint DLP on Windows, with the record listing Worldwide (Standard Multi-Tenant) as the only cloud, platform Web, and release phases General Availability and Preview. Learn documents Windows exclusion paths for Windows 10 and Windows 11 devices.

Endpoint DLP settings apply to all DLP policies for devices, according to Learn, so the control would apply tenant-wide rather than to a single policy. Devices must be onboarded to Endpoint DLP for any of this to matter. Which roles can change the new control is not yet published.

## Governance guidance

### Before rollout
- Export or list every path currently entered under File path exclusions for Windows and record why each was added.
- Compare your list with the two Windows paths Learn documents as excluded by default, so you know what is already excluded.
- Decide, with your security team, whether Endpoint DLP should monitor system paths that a Microsoft-managed list might exclude.

### At rollout
- Check the File path exclusions for Windows page in the Microsoft Purview portal for a new include or exclude control and read what Microsoft says it covers.
- Record the setting you choose and the date, because Microsoft manages the underlying list.

### After rollout
- Test with a file in a path from the managed list and confirm in activity explorer whether activity is audited.
- Review the settings again when Microsoft updates the Learn page or Message center, since the list is described as Microsoft-managed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Windows file paths Endpoint DLP excludes (administrator-entered exclusions)</strong><br><small>Tenant</small><br><small class="controls__note">Applies to manually entered paths today, not to the new Microsoft-managed list. Security &amp; Compliance PowerShell only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › File path exclusions for Windows <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings @{&quot;Setting&quot;=&quot;PathExclusion&quot;; &quot;Value&quot;=&quot;C:\Windows&quot;;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft-managed default Windows exclusions are included or excluded</strong><br><small>Tenant</small><br><small class="controls__note">Described on the roadmap only. Learn documents a toggle for recommended macOS exclusions but none for Windows.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is the setting administrators use today to exclude their own Windows paths; it is not the new control. The new include or exclude control is shown as a row with both sides not yet documented, because Learn does not document it at the time of writing (November 2026).

The PowerShell example values for Set-PolicyConfig show `PathExclusion` entries added one by one. The reference describes no setting for the Microsoft-managed list. Learn describes Endpoint DLP settings as applying to all DLP policies for devices.

## Open questions

- Is the Microsoft-managed list of default Windows file path exclusions included or excluded until an administrator chooses? Watch the Learn page Configure endpoint data loss prevention settings and Message center.
- Which paths does the Microsoft-managed list contain, and how does an administrator see it? The Learn page lists only two default Windows paths today.
- Does Microsoft change the list over time without administrator action, and how are changes announced?
- Will the control be available through Security & Compliance PowerShell, and which role is needed to change it?
- The August CY2026 target has passed with the item still In development: what is the current availability date?

<!-- rationale
risk: Low. The roadmap describes a new control over exclusions, and the default state is not stated, so this rates today's behaviour continuing; Learn says files in excluded paths are not audited or enforced.
cost: Low. The only cost the sources show is admin time to review exclusions; Endpoint DLP is listed as included in several plans, and no licence or charge specific to this control is published.
impact: Low. This is an Endpoint DLP setting that DLP and security administrators configure; end users would only notice a change in which files DLP audits or restricts.
-->
