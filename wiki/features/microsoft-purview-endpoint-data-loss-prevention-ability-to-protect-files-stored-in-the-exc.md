---
title: "Microsoft Purview Endpoint DLP: protect files in excluded Windows folders"
slug: "microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc"
roadmapId: 562992
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP is planned to enforce policy on files in excluded Windows folders such as AppData and Temp during egress actions. Admins must opt in; users could see blocked copy, print or upload actions."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Existing Endpoint DLP licensing applies to Windows endpoint protections; the eligible suites are listed in the Microsoft Purview service description. No change-specific additional licence has been published as of November 2026."
audiences: ["security","compliance","m365-admin","change-adoption"]
tags: ["endpoint-dlp","dlp","purview","data-governance","policy","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 562992"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562992"
    kind: "roadmap"
  - title: "MC1384420: Microsoft Purview | Endpoint Data Loss Prevention - Ability to protect files stored in the excluded folders in Windows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1384420"
    kind: "message-center"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"]
controls:
  - governs: "Protection of files in excluded Windows folders"
    scope: "other"
    ui: null
    api: null
    note: "Described in MC1384420 but not yet documented on Learn, in the portal or in the Set-PolicyConfig reference at the time of writing (November 2026). Configuration scope not yet published."
  - governs: "Which Windows folders Endpoint DLP excludes today"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > File path exclusions for Windows"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings @(@{\"Setting\"=\"PathExclusion\"; \"Value\"=\"<path>\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps"
    note: "Existing control for exclusions, not for the new feature. The cmdlet is available only in Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-17"
    note: "New briefing: planned Endpoint DLP protection for files in excluded Windows folders, rollout now late February 2027 per MC1384420."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: licensing model set to included with the billing-models source; first control row scope changed to other; two policy-mode checklist bullets removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 50
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "eb0e3c8095f13f124ff699428b18e123"
---

## What's changing

Microsoft plans to let Endpoint data loss prevention (DLP) apply policy to files stored in Windows folders that Endpoint DLP normally excludes, such as AppData directories and temporary folders. The roadmap item describes this as protection for files in commonly excluded folders, including Temp and AppData.

Microsoft's notice MC1384420 says policy checks will apply during egress actions: copying, printing, saving to network shares and uploading to cloud services. In audit mode, the user's action continues and is logged. In block mode, restricted actions are prevented. If both audit and block policies apply to a user, block takes precedence. The notice says admins can extend protection to excluded folders, and that admins must review excluded Windows folder paths and update Endpoint DLP policies to enable it.

The roadmap item is In development with a target of February CY2027, release phase General Availability, Worldwide (Standard Multi-Tenant) cloud. MC1384420 (last updated 28 October 2026) says rollout begins in late February 2027, previously mid-December, and is expected to complete by mid-March 2027, previously the end of December. The notice sets no act-by date. The roadmap record lists the platform as Web, while the notice names Windows endpoints; treat the notice as the more specific statement. Microsoft Learn does not describe this feature yet, so its behaviour here is as the roadmap item and the notice state it.

## Why it matters

Today the Learn page for Endpoint DLP settings says files in excluded locations are not audited and are not subject to DLP policy enforcement, and it lists two AppData paths as excluded by default. Users and applications write to AppData and temporary folders, so sensitive files can sit there outside policy. This change is aimed at that gap.

Because the notice describes admins enabling the protection, nothing in the sources says existing behaviour changes on arrival. The decision is yours: which excluded paths to bring under enforcement, and whether to start in audit mode. Block mode in these folders is likely to surface blocked actions from applications that stage files there, so plan a pilot and a support briefing before enforcing.

## Risk assessment

**Data exposure**
- Files in excluded folders such as AppData and temporary directories are outside Endpoint DLP enforcement today, per the Learn settings page. Until you extend protection, sensitive files in those paths can leave through copy, print, network-share save or cloud upload without policy action.
- Audit mode logs actions on sensitive files in protected excluded paths, which creates new audit data to review.

**Security & identity**
- No change to identity or permissions is described. The notice requires Microsoft Defender anti-malware client 4.18.26051 or later on devices before the feature is enabled; devices below that version are a gap to find before you enable it.

**Autonomy & actions**
- In block mode the policy prevents the restricted action itself, such as copying to removable media, uploading to cloud services or printing. Where audit and block policies both apply to a user, block takes precedence, so an existing block policy can start to apply to newly covered paths.

**Change & support**
- Users may see blocked copy, print, network-share or upload actions on files they previously handled freely. Brief the service desk before enforcement.
- Microsoft recommends an audit-mode pilot first. Widening the protected paths is an admin decision, and the setting that does it is not yet documented on Microsoft Learn.

## Cost and licensing

No licence specific to this change is published at the time of writing (November 2026). The roadmap item and MC1384420 name none, and no meter is documented for it.

The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. Existing Endpoint DLP licensing applies to Windows endpoint protections; the eligible suites are listed in the Microsoft Purview service description. No change-specific additional licence has been published as of November 2026. The Microsoft Purview billing models page describes per-user licensing as the model that applies Purview controls and protections to Microsoft 365 and Windows/macOS endpoint-based assets.

Indirect costs are admin time to review excluded paths and extend policies, rolling out the anti-malware client update the notice requires, a pilot in audit mode, and user and service desk communication.

## Scope

MC1384420 says the change affects admins and users in organisations that use Microsoft Purview Endpoint DLP on Windows devices. The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud only and does not list other clouds; that is a record fact, not a statement that the feature is unavailable elsewhere.

The notice requires Microsoft Defender anti-malware client version 4.18.26051 or later, deployed before the feature is enabled. Rollout is planned to begin in late February 2027 and complete by mid-March 2027. Which admin roles can configure the new setting is not yet published; the existing path exclusions are changed in the Microsoft Purview portal under Endpoint settings, and the Set-PolicyConfig cmdlet is available only in Security & Compliance PowerShell.

## Governance guidance

### Before rollout
- Inventory devices by Microsoft Defender anti-malware client version and update any below 4.18.26051, which the notice requires before enabling the feature.
- Review the current list in the File path exclusions for Windows row of the controls table, including the two AppData paths Learn lists as excluded by default, and decide which paths could hold sensitive files.
- Brief the service desk and affected users on possible blocked copy, print, network-share and upload actions.

### At rollout
- Watch Message center for MC1384420 updates; the timeline has already moved from mid-December 2026 to late February 2027.
- Start with an audit-mode pilot on a small device group, as the notice recommends, before any block-mode enforcement.
- Enable protection for excluded folders once Microsoft documents where the setting lives; its path is not yet documented.

### After rollout
- Review audit-mode events for files in the newly covered paths and check for noise from applications that write to those folders.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Protection of files in excluded Windows folders</strong><br><small class="controls__note">Described in MC1384420 but not yet documented on Learn, in the portal or in the Set-PolicyConfig reference at the time of writing (November 2026). Configuration scope not yet published.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Windows folders Endpoint DLP excludes today</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for exclusions, not for the new feature. The cmdlet is available only in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › File path exclusions for Windows <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings @(@{&quot;Setting&quot;=&quot;PathExclusion&quot;; &quot;Value&quot;=&quot;&lt;path&gt;&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting that turns on protection for excluded folders is not yet documented on Microsoft Learn, so the first row shows both sides as not yet documented. MC1384420 refers to a protected exclusion paths list and shows Endpoint DLP settings for excluded Windows folders, but gives no path or command.

The second row is the existing exclusion list that defines which folders are excluded today. It is not a control over the new feature; the Learn page says files in excluded locations are not audited and are not subject to DLP policy enforcement. Whether editing this list interacts with the new setting is not stated. Audit or block behaviour comes from the Endpoint DLP policy actions you already configure, per the notice.

## Open questions

- Where in the Microsoft Purview portal and through which PowerShell or API call do admins turn on protection for excluded folders? Watch the Learn page Configure endpoint data loss prevention settings and MC1384420.
- Is protection set per path, per policy or tenant-wide, and how does it interact with the existing File path exclusions for Windows list?
- Does the change need a licence beyond those that already include Endpoint DLP? Watch the Microsoft Purview service description.
- Does the feature apply to Windows Server devices onboarded to Endpoint DLP, and to the US Government clouds that the roadmap record does not list?
- Why does the roadmap record list the platform as Web when MC1384420 describes Windows endpoints?

<!-- rationale
risk: Medium. Once an admin enables it, block-mode policies can stop copy, print, network-share and cloud-upload actions on files in folders that were previously outside enforcement, so it needs a pilot and communication.
cost: Low. The only costs the sources show are admin time, device updates and user communication; no licence specific to this change is published yet.
impact: Medium. Users on Windows devices covered by Endpoint DLP policies notice it only if an admin extends enforcement to excluded folders; the affected group is that policy scope, not every user.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Applications write data in application-data and temporary folders. | Found: The folders where your app can store data. These folders (local, roaming and temporary) are created when your app is installed. | Fix: Add https://learn.microsoft.com/windows/apps/develop/files/file-access-permissions to sources to support the application-storage premise in 'Users and applications write to AppData and temporary folders'. | Source: https://learn.microsoft.com/windows/apps/develop/files/file-access-permissions
-->
