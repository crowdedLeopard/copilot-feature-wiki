---
title: "Microsoft Purview Endpoint DLP: protect files sent over FTP and SFTP"
slug: "microsoft-purview-endpoint-data-loss-prevention-protect-sensitive-data-over-ftp-and-sftp-w"
roadmapId: 565868
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP can audit or block sensitive files sent over FTP and SFTP from managed Windows devices. Microsoft says it is not on by default: an admin must add the activity to a device policy rule."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint DLP as included in Microsoft 365 E5/A5/G5 and the other suites it names. The FTP and SFTP page lists no separate licence, price or meter."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","endpoint-dlp","dlp","sensitive-information-types","sensitivity-labels","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565868"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565868"
    kind: "roadmap"
  - title: "MC1404319: (Updated) Microsoft Purview: Endpoint data loss prevention support for FTP and SFTP"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1404319"
    kind: "message-center"
  - title: "Protect FTP and SFTP transfers with Microsoft Purview Endpoint DLP"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-ftp-sftp-short"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Get started with collecting files that match data loss prevention policies from devices"
    url: "https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started"
    kind: "learn"
  - title: "Get started with activity explorer"
    url: "https://learn.microsoft.com/purview/data-classification-activity-explorer"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Export-ActivityExplorerData"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with","auditing"]
controls:
  - governs: "Whether Endpoint DLP audits or restricts FTP and SFTP transfers"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Locations > Devices > rule > Actions > Audit or restrict activities on devices > File activities for all apps > Apply restrictions to specific activity > FTP and SFTP transfers"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-ftp-sftp-short"
    api: null
    note: "Choose Audit only, Block, Block with override or Allow. Needs permission to create and deploy DLP policies."
  - governs: "Where FTP and SFTP events are reviewed"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Activity explorer"
      docs: "https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started"
    api:
      kind: "powershell"
      call: "Export-ActivityExplorerData -StartTime <DateTime> -EndTime <DateTime> -OutputFormat Json"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata"
    note: "Reads events; does not change policy. Security & Compliance PowerShell. The reference lists no FTP or SFTP activity filter value."
  - governs: "Whether matched FTP and SFTP files are saved as evidence, and where"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Endpoint DLP settings > Setup evidence collection for file activities on devices"
      docs: "https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started"
    api: null
    note: "The DLP rule must also select Collect original file as evidence for all selected file activities on Endpoint and the FTP and SFTP transfers activity."
  - governs: "Per-device configuration and policy sync status"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Read-only status. The call is an advanced hunting query in the Microsoft Defender portal, not a policy setting."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "First briefing: Endpoint DLP FTP and SFTP support is launched, not on by default, and set per device rule."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 56
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "5cb3b4b1040bc7c923cb8318b3d587a7"
---

## What's changing

Microsoft Purview Endpoint data loss prevention (DLP) can now monitor and protect sensitive data transferred over FTP and SFTP from managed Windows devices. Microsoft Learn says Endpoint DLP evaluates these transfers against policy rules, as it does other device activities such as copying to USB devices or network shares, and that the events appear in Activity explorer.

An admin turns it on per rule. In a device policy rule, under Actions, **Audit or restrict activities on devices** now offers an **FTP and SFTP transfers** checkbox with the actions Audit only, Block, Block with override and Allow. Microsoft's notice MC1404319 states that FTP and SFTP protection is not enabled by default and that administrators must configure it in Endpoint DLP policies. Matched transfers are evaluated against the conditions, scope and actions in the rule. FTP and SFTP transfers also support full file evidence collection, which can save a complete copy of a matched file.

The roadmap item is Launched, with a preview target of September CY2026 and a general availability target of October CY2026, listed for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. MC1404319 (updated 11 August 2026) gives the preview as beginning early September 2026 and completing by the end of September 2026, and general availability as beginning and completing in October 2026. It sets no act-by date. The roadmap lists the platform as Web, while the Learn page and MC1404319 describe managed Windows devices.

## Why it matters

This adds a third transfer route, FTP and SFTP, to the device activities Endpoint DLP already covers, and Microsoft's notice describes it as closing a gap in protection across common transfer methods. If nobody acts, Microsoft's notice says FTP and SFTP protection is not enabled, so existing Endpoint DLP rules do not gain the new coverage on their own.

The practical decision is when to add the activity to an existing device rule and with which action. Microsoft recommends a small pilot group and Audit only first. Treat the first weeks as discovery: Activity explorer will show who sends which files over FTP or SFTP before anyone is blocked.

## Risk assessment

**Data exposure**
- A rule that selects **FTP and SFTP transfers** evaluates those transfers against the rule's conditions, such as sensitive information types or sensitivity labels. Microsoft's notice says protection is not enabled by default, so a transfer is only covered by a rule that selects the activity.
- Full file evidence collection can save a complete copy of each matched file. That creates a second store of sensitive content, so scope the storage and its access deliberately (see the controls table).

**Security & identity**
- Previewing evidence needs the Data Classification Content Viewer role and downloading it needs Data Classification Content Download. Viewing events in Activity explorer needs one of the roles or role groups the Activity explorer page lists, such as Information Protection Analyst or Information Protection Investigator.
- The Learn page lists devices onboarded to Microsoft Purview as a prerequisite, so a device that is not onboarded is outside this feature.

**Autonomy & actions**
- Block and Block with override act on the transfer itself, and Learn shows an end-user notification for a blocked FTP transfer. A Block rule applied before an audit period can interrupt legitimate transfers; use Audit only first, as Learn recommends.

**Change & support**
- Activity explorer is not a real-time view, reports up to 30 days of data, and devices report endpoint activities only while online, so expect delays and gaps when checking whether a rule fired.
- Users on a device that has not received the latest policy are not covered by it; check the device's policy sync status before treating a missing event as a defect.

## Cost and licensing

The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The FTP and SFTP page lists onboarded devices and permissions as its prerequisites and names no separate licence, price or meter for this capability.

Indirect costs are admin time to review and tune rules and, if you use evidence collection, storage. Learn tells admins using a customer-managed Azure storage account to consider access tiers and Azure storage account pricing, and the evidence collection page lets you choose a customer-managed or Microsoft-managed store and view the managed store's usage.

## Scope

Users and devices: managed Windows devices onboarded to Microsoft Purview, with the policy scoped to the users or device groups you choose on the Locations page. MC1404319 lists admins managing Endpoint DLP and users on managed Windows devices as affected.

Permissions: the Learn page requires permissions to create and deploy DLP policies and to view Activity explorer, and tells admins to use the least-privileged roles needed.

Clouds and rollout: the roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with general availability in October CY2026 per MC1404319. The roadmap lists the platform as Web; Learn describes the feature for managed Windows devices.

## Governance guidance

### Before rollout
- Review your existing Endpoint DLP device policies and decide which rules should cover FTP and SFTP, as MC1404319 recommends.
- Check device onboarding and policy sync status for the devices in scope, so the new rule reaches them.
- Decide whether to use full file evidence collection for these transfers and, if so, who may preview and download the evidence.

### At rollout
- Add **FTP and SFTP transfers** to a rule scoped to a small pilot group and set the action to Audit only.
- Add the conditions you want to detect, such as sensitive information types or sensitivity labels.
- Turn on policy tips under User notifications only once you are ready for users to see them.

### After rollout
- Filter Activity explorer to File transfer by FTP/SFTP and review the user, device, file, matched policy and action of each transfer.
- Refine the conditions from what you observe, then move to Block with override or Block for the transfers that need it.
- Re-check device policy sync status after each policy change, because devices must be online to receive it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Endpoint DLP audits or restricts FTP and SFTP transfers</strong><br><small>Group</small><br><small class="controls__note">Choose Audit only, Block, Block with override or Allow. Needs permission to create and deploy DLP policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Locations › Devices › rule › Actions › Audit or restrict activities on devices › File activities for all apps › Apply restrictions to specific activity › FTP and SFTP transfers <a href="https://learn.microsoft.com/purview/endpoint-dlp-ftp-sftp-short" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where FTP and SFTP events are reviewed</strong><br><small>Tenant</small><br><small class="controls__note">Reads events; does not change policy. Security &amp; Compliance PowerShell. The reference lists no FTP or SFTP activity filter value.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Activity explorer <a href="https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Export-ActivityExplorerData -StartTime &lt;DateTime&gt; -EndTime &lt;DateTime&gt; -OutputFormat Json</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether matched FTP and SFTP files are saved as evidence, and where</strong><br><small>Tenant</small><br><small class="controls__note">The DLP rule must also select Collect original file as evidence for all selected file activities on Endpoint and the FTP and SFTP transfers activity.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Endpoint DLP settings › Setup evidence collection for file activities on devices <a href="https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration and policy sync status</strong><br><small class="controls__note">Read-only status. The call is an advanced hunting query in the Microsoft Defender portal, not a policy setting.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls table covers where the FTP and SFTP action is set, how events are reviewed, where evidence is stored and how device status is checked. Creating and deploying the policy and viewing Activity explorer each need their own permissions, as the Learn page's prerequisites state.

Microsoft Learn documents no automation for the FTP and SFTP action at the time of writing (November 2026): the New-DlpComplianceRule reference lists example -EndpointDlpRestrictions settings such as Print, NetworkShare and RemovableMedia, none for FTP or SFTP. The Export-ActivityExplorerData reference lists no FTP or SFTP activity value among its activity filters, so confirm what the export returns for these events before scripting around it.

## Open questions

- Which FTP and SFTP clients and transfer directions does Endpoint DLP evaluate? Watch the feature's Learn page.
- Will Microsoft document a PowerShell setting name for the FTP and SFTP action in the Security & Compliance PowerShell reference?
- Will the feature be documented for platforms other than managed Windows devices, given the roadmap lists the platform as Web? Watch the Learn page and Message center.
- Will an FTP or SFTP value be added to the Export-ActivityExplorerData activity filters?

<!-- rationale
risk: Low. Microsoft's notice MC1404319 says FTP and SFTP protection is not enabled by default, so nothing is enforced until an admin configures a rule; a Block action can later interrupt users' transfers.
cost: Low. The Purview service description lists Endpoint DLP as included in Microsoft 365 E5 and the other suites it names; the remaining cost is admin time and, if evidence collection is used, Azure storage.
impact: Low. Admins who manage Endpoint DLP and users on managed Windows devices who transfer files over FTP or SFTP notice it, and only where a rule applies the activity.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; Cost and licensing; rationale: cost / cost: The cost is low, meaning indirect costs only, with evidence storage classified alongside admin time as an indirect cost. | Found: | Charges | Storage costs are charged in addition to the cost of your Entra subscription. | Storage cost today is included in E5. | Fix: Set cost to variable to cover the optional Azure storage consumption the briefing includes. Replace the indirect-cost sentence with 'Admin time is an indirect cost. Customer-managed evidence storage has additional Azure storage charges; Microsoft-managed evidence storage is currently included in E5.' Replace the cost rationale with 'Variable. Endpoint DLP is included in the listed licences, but choosing customer-managed evidence collection adds Azure storage consumption charges; Microsoft-managed evidence storage is currently included in E5.' Cite https://learn.microsoft.com/purview/dlp-copy-matched-items-learn for this distinction. | Source: https://learn.microsoft.com/purview/dlp-copy-matched-items-learn
- [unsupported, major] Why it matters / behaviour: FTP and SFTP add a third transfer route to Endpoint DLP. | Found: Searched: Endpoint DLP "third" "FTP" transfer route. Read endpoint-dlp-ftp-sftp-short and MC1404319; neither numbers transfer routes or calls FTP/SFTP the third route. Learn describes USB and network shares as examples, not an exhaustive prior list. | Fix: Replace 'This adds a third transfer route, FTP and SFTP, to the device activities Endpoint DLP already covers' with 'This adds FTP and SFTP transfers to the device activities Endpoint DLP covers'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist tells readers to enable policy tips, but no controls-table row represents that control. | Found: Checklist: 'Turn on policy tips under User notifications only once you are ready for users to see them.' The table's four rows cover transfer actions, event review, evidence storage and device status, not policy tips. | Fix: Remove the 'Turn on policy tips under User notifications only once you are ready for users to see them' checklist bullet; the policy-tips step has no row in the controls table.
-->
