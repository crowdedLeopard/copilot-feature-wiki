---
kind: "concept"
title: "Endpoint DLP: what Microsoft Purview enforces on onboarded devices"
slug: "endpoint-dlp"
summary: "Endpoint DLP extends Microsoft Purview Data Loss Prevention to onboarded Windows and macOS devices. Use it to audit or restrict file activity per user and device, and to see which devices have the latest policy."
created: "2026-11-20"
updated: "2026-11-20"
version: 2
tags: ["endpoint-dlp","dlp","purview","device-onboarding","just-in-time-protection","sensitivity-labels","macos"]
covers: ["device-onboarding","just-in-time-protection"]
sources:
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Onboard Windows devices into Microsoft 365 overview"
    url: "https://learn.microsoft.com/purview/device-onboarding-overview"
    kind: "learn"
  - title: "Monitor device health with the device health reports dashboard"
    url: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    kind: "learn"
  - title: "Create a DLP policy that uses device scoping"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping"
    kind: "learn"
  - title: "Get started with Microsoft Purview Data Loss Prevention just-in-time protection"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    kind: "learn"
  - title: "Learn about Microsoft Purview Data Loss Prevention just-in-time protection"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about-jit"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Get started with activity explorer"
    url: "https://learn.microsoft.com/purview/data-classification-activity-explorer"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Export-ActivityExplorerData"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata?view=exchange-ps"
    kind: "learn"
related: ["data-policies","sensitivity-labels","auditing","microsoft-purview-endpoint-data-loss-prevention-allow-customer-to-scope-jit-audit-to-speci","microsoft-purview-endpoint-data-loss-prevention-protect-sensitive-data-over-ftp-and-sftp-w","microsoft-purview-data-loss-prevention-reduce-policy-sync-status-sla-on-the-purview-ui-fro","microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc"]
controls:
  - governs: "Which devices and users an Endpoint DLP policy applies to"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > Admin units > Full directory > Devices > Edit > Specific devices and device groups"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -EndpointDlpLocation <MultiValuedProperty>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Security & Compliance PowerShell. Selects accounts by name, email or All; not the UI's device-group selector. Needs Compliance Administrator or Compliance Data Administrator (Entra). User and device must both be in scope."
  - governs: "Endpoint settings shared by all device policies (path exclusions, restricted apps, domains, servers)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings <PswsHashtable[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps"
    note: "Security & Compliance PowerShell only. The cmdlet modifies the endpoint restrictions configured in the organisation."
  - governs: "Whether devices are onboarded and can be used as DLP locations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices > Turn on device onboarding"
      docs: "https://learn.microsoft.com/purview/device-onboarding-overview"
    api: null
    note: "Needs Security admin, Compliance admin or Global admin (Entra roles; Purview roles are not supported)."
  - governs: "Per-device configuration status and policy sync status"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "Microsoft Defender portal advanced hunting (KQL): DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Read-only status. In the Defender portal, expand the DlpInfo column to see Endpoint DLP device details."
  - governs: "Whether just-in-time protection blocks egress on unevaluated files, and the fallback when classification fails"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Just-in-time protection > Fallback action in case of failure"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    api: null
    note: "Select Devices under Choose which locations to monitor. Allow at least an hour for changes to reach devices."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-20"
    note: "New concept page explaining Endpoint DLP, its onboarding, policy sync, controls and licensing."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: classification wording and platform qualifications, offline-device behaviour limited to Windows, JIT blocking conditions, and two control paths."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 98 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 98
  confirmed: 98
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d792fae4d9b6183b6a3a4558982e565f"
---

## What it is

Endpoint DLP is the part of Microsoft Purview Data Loss Prevention that monitors, and can restrict, what users do with sensitive files on onboarded Windows and macOS devices. Microsoft describes it as extending DLP's activity monitoring and protection to Windows 10/11, macOS (the three latest released major versions) and certain Windows Server versions. It is not the same mechanism as Power Platform data policies, which are covered in [Data policies](/concepts/data-policies/).

**How it works**

- **Onboarding comes first.** A device must be onboarded before it can be a DLP location. Onboarding is shared with Microsoft Defender for Endpoint (MDE): onboarding in the Microsoft Purview portal also onboards the device into MDE. Windows devices must be Microsoft Entra joined, hybrid joined or registered, with Real-time protection and Behavior monitor enabled.
- **Files are classified on creation or modification.** On Windows 10/11 and macOS, a file is fully scanned for sensitive information types and labels whenever it is created or modified. Reading an already classified file triggers re-evaluation if the policies, rules or sensitive information types changed.
- **Policies are scoped by user and device.** A policy that includes the **Devices** location is enforced only where both the user and the device are in scope. A device needs access to all endpoint policies because it can have several users.
- **Endpoint settings sit above the policies.** One set of settings applies to all DLP policies for devices.
- **Activities.** Rules can audit or restrict actions such as copying to USB, copying to a network share, printing, copying to the clipboard and uploading to a restricted cloud service domain. Platform support differs: copy or move using RDP is listed as not supported on macOS.
- **Just-in-time (JIT) protection** can block egress on monitored unevaluated or stale files while policy evaluation completes; blocking depends on user scope, DLP actions, allowed destinations and pause/resume support. See [Learn about just-in-time protection](https://learn.microsoft.com/purview/endpoint-dlp-learn-about-jit).

## Why it matters

Endpoint DLP decides which devices and users are covered and which file activities are audited or blocked, and Activity explorer shows the result. Enforcement happens on the device, so the device's state is part of the control: an offline Windows device keeps enforcing existing policies on existing files, and a policy changed meanwhile is not pushed to it.

Onboarded devices audit activity on Word, PowerPoint, Excel, PDF and .csv files even when no policy targets them, unless **Always audit file activity for devices** is turned off, so activity data appears before any policy exists. Windows servers differ: Microsoft documents that Endpoint DLP is not enabled for them when they are first onboarded.

## Cost and licensing

Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as **Included** for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The Endpoint DLP getting-started page publishes no separate price or meter and refers readers to Microsoft's licensing guidance.

The Activity explorer interface requires E5/A5/G5 licensing; the underlying data aggregation continues for E3/A3/G3 tenants. Evidence collection copies matched files to an Azure storage account that you create, and Microsoft points to Azure storage account pricing and access tiers for it. Evidence collection is in preview on macOS.

## Risks and limits

- **Offline Windows devices run old policy.** Existing policies continue to be enforced on existing files while a Windows device is offline; a policy updated meanwhile is not pushed to it until it is back online, and policy changes reach it after it reconnects. Microsoft states that this offline functionality is not supported on macOS.
- **Users who do not meet the onboarding criteria.** If a policy is scoped to devices whose signed-in users do not meet the criteria, exclude those users or devices explicitly; Microsoft warns that otherwise enforcement may be unintended.
- **Excluded paths are unmonitored.** Files in excluded locations are not audited and are not subject to DLP policy enforcement. Windows excludes the AppData Roaming and Local folders under user profiles by default.
- **Advanced classification has a bandwidth limit.** Once a limit you set is exceeded, content stops going to the cloud and exact data match, named entities, trainable classifiers and credential classifiers are unavailable until usage drops. Text files over 64 MB are not scanned by it.
- **Windows servers.** Domain Controllers and Server Core installations are not supported, and other servers need the **Endpoint DLP support for onboarded servers** toggle turned on.
- **Virtual desktops.** USB storage devices are treated as network shares, so monitor **Copy to a network share** to catch USB copies.
- **JIT blocking affects users.** Allow at least an hour for JIT setting changes to reach devices, and do not choose **Block users from completing actions** as the fallback until you understand the impact.
- **Cross-tenant labels.** Endpoint DLP cannot detect a sensitivity label from another tenant on a document.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which devices and users an Endpoint DLP policy applies to</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Selects accounts by name, email or All; not the UI's device-group selector. Needs Compliance Administrator or Compliance Data Administrator (Entra). User and device must both be in scope.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › Admin units › Full directory › Devices › Edit › Specific devices and device groups <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -EndpointDlpLocation &lt;MultiValuedProperty&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Endpoint settings shared by all device policies (path exclusions, restricted apps, domains, servers)</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell only. The cmdlet modifies the endpoint restrictions configured in the organisation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings &lt;PswsHashtable[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether devices are onboarded and can be used as DLP locations</strong><br><small>Tenant</small><br><small class="controls__note">Needs Security admin, Compliance admin or Global admin (Entra roles; Purview roles are not supported).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices › Turn on device onboarding <a href="https://learn.microsoft.com/purview/device-onboarding-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration status and policy sync status</strong><br><small class="controls__note">Read-only status. In the Defender portal, expand the DlpInfo column to see Endpoint DLP device details.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Microsoft Defender portal advanced hunting (KQL): DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether just-in-time protection blocks egress on unevaluated files, and the fallback when classification fails</strong><br><small>Tenant</small><br><small class="controls__note">Select Devices under Choose which locations to monitor. Allow at least an hour for changes to reach devices.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Just-in-time protection › Fallback action in case of failure <a href="https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** Device management supports Entra roles only; Purview roles are not supported. Security admin, Compliance admin or Global admin can turn on device monitoring and open the onboarding page. The device health report needs Compliance Administrator, Security Administrator or Global Administrator.

**How the controls interact.** The policy decides who and which devices are in scope; the endpoint settings (including file path exclusions for Windows, **Always audit file activity for devices** and the servers toggle) apply to every device policy. JIT is configured separately.

**Where it is watched.** Activity explorer reports up to 30 days of data. The **Device report** (Settings > Device onboarding > Device report) highlights devices at risk of missing future policy updates; it does not confirm that an update failed. The **Policy status** report is on the Data loss prevention Overview page. Activity data can be exported with `Export-ActivityExplorerData`. Briefings such as [FTP and SFTP protection](/features/microsoft-purview-endpoint-data-loss-prevention-protect-sensitive-data-over-ftp-and-sftp-w/) show settings being applied.

## What to check

- Review the **Devices** list for devices whose configuration status or policy sync status is **Not updated** or **Not available**.
- Confirm that every user in a Devices-scoped policy meets the onboarding criteria, or exclude them.
- Review the file path exclusions in Endpoint settings and decide whether the Windows defaults are acceptable.
- Check whether Windows servers appear in the Devices list, and whether the servers toggle is on.
- Verify who holds Security admin, Compliance admin or Global admin, since device onboarding supports Entra roles only.
- Inspect the JIT locations and fallback action before moving it to block.

## Open questions

- How quickly does an online device receive a changed policy? The troubleshooting page gives up to 2 hours for the status to update, not for the policy itself.
- Does Microsoft document an API or PowerShell route for turning on device onboarding or configuring JIT protection? None was found at the time of writing (November 2026).
- Which setting names does the `-EndpointDlpGlobalSettings` parameter of `Set-PolicyConfig` accept for each Endpoint settings option?

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What it is / availability: The Endpoint DLP overview describes macOS support as the three latest released major versions. | Found: macOS (the three latest released major versions) | Fix: After the platform-support sentence, add: 'The Purview service description instead lists macOS Catalina 10.15 and higher.' The conflicting wording is at https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-data-loss-prevention-endpoint-data-loss-protection-dlp. | Source: https://learn.microsoft.com/purview/endpoint-dlp-learn-about
- [supported, minor] What it is / behaviour: Endpoint DLP is a different mechanism from Power Platform data policies. | Found: Power Platform admin center data policies allow administrators to control access to these connectors in various ways to help reduce risk in your organization. | Fix: Add https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention to sources for the comparison with connector-governing Power Platform data policies. Retain the cited Endpoint DLP overview for device-file protection. | Source: https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention
- [supported, minor] controls[0].ui; Governance controls: policy scoping row / admin-path: The printed Purview policy-creation path reaches Specific devices and device groups. | Found: Select the Custom from the Categories then Custom policy template from Regulations. ... Accept the default Full directory under Admin units. ... Select Edit on the Devices location. ... Select Specific devices and device groups | Fix: In controls[0].ui.path and the rendered table, restore the omitted headings: 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom policy > Admin units > Full directory > Devices > Edit > Specific devices and device groups'. The printed choices are correct and ordered. | Source: https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping
-->
