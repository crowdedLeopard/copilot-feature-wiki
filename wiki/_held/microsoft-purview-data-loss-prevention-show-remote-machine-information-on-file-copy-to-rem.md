---
title: "Microsoft Purview DLP: show remote machine information for file copies to Remote Desktop"
slug: "microsoft-purview-data-loss-prevention-show-remote-machine-information-on-file-copy-to-rem"
roadmapId: 526791
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap says admins will see which remote machine a sensitive file was copied to over RDP. Learn does not yet describe where it appears or any admin switch for it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: "December CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists Endpoint DLP as Included for Microsoft 365 E5/A5/G5, Purview Suite and Information Protection & Governance plans. Nothing specific to this item is published."
audiences: ["security","compliance"]
tags: ["dlp","endpoint-dlp","purview","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 526791"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=526791"
    kind: "roadmap"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Get started with activity explorer"
    url: "https://learn.microsoft.com/purview/data-classification-activity-explorer"
    kind: "learn"
  - title: "Get started with the Data Loss Prevention Alerts dashboard"
    url: "https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Help protect files that Endpoint Data Loss Prevention fails to scan"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["endpoint-dlp","auditing","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Whether a DLP rule audits or restricts copies to a remote desktop session"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > rule > Actions > Audit or restrict activities on devices > Apply restrictions to specific activity > Copy or move using RDP"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <ComplianceRuleIdParameter> -EndpointDlpRestrictions <PswsHashtable[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Existing control for the RDP activity, not for the new information. Security & Compliance PowerShell only; the reference gives the parameter type only. Path follows the page's custom-policy example."
  - governs: "Whether the unified audit log records activity, which activity explorer reads"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Needs the Audit Logs role in Exchange Online. The banner appears only if auditing is not already on."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-23"
    note: "First briefing: roadmap status Launched; Learn does not yet describe where the remote machine information appears."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 40 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 36
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "a646e476ba6bb3f6284c516f84002b04"
---

## What's changing

The roadmap item says an administrator should be able to see destination machine information when an end user copies a sensitive file to a remote machine through RDP (Remote Desktop Protocol). That is the whole description: it names no screen, field, policy setting or licence.

Microsoft Learn does not describe this item at the time of writing (November 2026), so the behaviour above is the roadmap's description. Learn documents the activity it most likely relates to: Endpoint DLP's **Copy or move using RDP**, which "detects when a user attempts to copy an item to a remote desktop session". It is supported on Windows 10, Windows 11 and Windows Server 2019 and later, and is not supported on macOS. The roadmap item does not name this activity, so treat the link as the wiki's reading.

The roadmap record gives the status as Launched, with a preview date of December CY2025 and a target date of January CY2026. The release phases are General Availability and Preview, the cloud is Worldwide (Standard Multi-Tenant) and the platform is listed as Web. The record does not say which release phase applies to which part, whether the information is on by default, or where administrators will see it.

## Why it matters

When a DLP event shows that a sensitive file went to a remote desktop session, the first question for an investigator is which machine received it. A destination machine detail lets the reviewer separate a copy to a sanctioned jump host from a copy to an unknown machine, without asking the user.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. The practical step is to confirm in your own tenant whether RDP events now carry the detail, and which role groups can see it, before you rely on it in an investigation procedure.

## Risk assessment

**Data exposure**
- The detail is about the destination of a file copy, so it may identify internal or external machines. The roadmap does not say where it is shown, so confirm that only the role groups that already see DLP alerts can read it. The DLP Alerts dashboard needs the Manage alerts role plus DLP Compliance Management or View-Only DLP Compliance Management.

**Security & identity**
- The item adds visibility, not enforcement. Restricting RDP copies stays with the rule action **Copy or move using RDP**; the roadmap does not say this item changes what can be blocked.

**Autonomy & actions**
- No autonomous behaviour is described. The roadmap describes admins seeing information.

**Change & support**
- Reviewers may see a new field on RDP events once it appears. Update investigation runbooks only after you have seen where and when it is populated.
- Activity explorer is not real time: it takes its data from the unified audit log, so allow time before treating a missing detail as a defect.

## Cost and licensing

Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as **Included** for Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance plans. The Endpoint DLP getting-started page refers readers to the Microsoft 365 licensing guidance for licensing.

No price, meter or separate licence for this item is published; the roadmap record states none. Indirect cost is admin time to check where the information appears and update investigation procedures.

DLP alerts and activity explorer draw on the unified audit log, so check that auditing is on. Learn says audit logging is on by default for Microsoft 365 organisations, but not for Small and Medium Business licences or unmanaged trial tenants.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud only and the platform as Web. It does not list GCC, GCC High or DoD; that is a record fact, not a statement that the item is unavailable there.

Learn documents the RDP activity for onboarded Windows 10, Windows 11 and Windows Server 2019 and later devices, and not for macOS. Whether this item covers every device type that supports the activity is not stated.

Administrators reading DLP alerts need the Manage alerts role plus DLP Compliance Management or View-Only DLP Compliance Management. Who sees the new information is not stated.

## Governance guidance

### Before rollout
- Confirm which devices are onboarded and in scope of a DLP policy that includes **Copy or move using RDP**, because the roadmap item gives no other trigger.
- Check that auditing is on in the Microsoft Purview portal, since activity explorer data comes from the unified audit log.
- List the roles that review DLP alerts and confirm they hold the roles the alerts dashboard requires.

### At rollout
- Open a recent RDP-related event in the DLP Alerts dashboard and in activity explorer to see whether destination machine information is present.
- Record where the information appears, and what it shows for each RDP event, in your investigation runbook.

### After rollout
- Review RDP events for destinations that are not approved remote hosts, using the new detail where it appears.
- Re-check the Endpoint DLP page on Microsoft Learn for a description of the feature and for any licensing detail.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a DLP rule audits or restricts copies to a remote desktop session</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for the RDP activity, not for the new information. Security &amp; Compliance PowerShell only; the reference gives the parameter type only. Path follows the page's custom-policy example.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › rule › Actions › Audit or restrict activities on devices › Apply restrictions to specific activity › Copy or move using RDP <a href="https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;ComplianceRuleIdParameter&gt; -EndpointDlpRestrictions &lt;PswsHashtable[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity, which activity explorer reads</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs role in Exchange Online. The banner appears only if auditing is not already on.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting that switches this item on or off is documented on the Learn pages for Endpoint DLP, activity explorer or DLP alerts at the time of writing (November 2026). The rows below are the existing controls around the RDP activity; they do not control the remote machine information.

The policy rule decides whether a copy over RDP is audited or restricted. Auditing must be on for activity explorer to receive events. Viewing alerts needs the roles listed under Scope.

## Open questions

- Where will the remote machine information appear: the DLP Alerts dashboard, activity explorer, the audit log or several of them? Watch the Endpoint DLP page on Microsoft Learn and Message center.
- Which details are shown about the destination machine, and for which RDP scenarios?
- Is the information on by default, or does an admin have to enable it?
- Is any licence or meter specific to this item, beyond the Endpoint DLP entry in the Purview service description?
- Does the roadmap's Preview phase mean a part of the information is still in preview, and which part?

<!-- rationale
risk: Low. The roadmap describes extra detail for admins about an RDP file copy that DLP already detects; it names no new data access, action or user-facing behaviour.
cost: Low. The only cost the sources show is admin time. Endpoint DLP is listed as included in the Microsoft 365 E5-level suites; no price or meter specific to this item is published.
impact: Low. The roadmap says administrators will see the information, so DLP admins and alert investigators notice it; end users are not mentioned.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Scope / availability: The RDP activity is supported on onboarded Windows 10, Windows 11 and Windows Server 2019 and later devices without further stated qualifications. | Found: By default, Endpoint DLP isn't enabled for Windows servers when they're initially onboarded. Before you can see Endpoint DLP events for your servers in Activity Explorer, you must first Enable Endpoint DLP for Windows Servers. | Fix: Qualify the Windows Server statement in What's changing and Scope: 'Windows servers require Enable Endpoint DLP for Windows Servers after onboarding; Domain Controllers and Server Core installations are not supported.' Cite https://learn.microsoft.com/purview/endpoint-dlp-learn-about. This qualifies the existing activity, not the new item's coverage. | Source: https://learn.microsoft.com/purview/endpoint-dlp-learn-about
- [unsupported, blocker] controls[0].api; Governance controls table / command: Set-DlpComplianceRule -Identity <ComplianceRuleIdParameter> -EndpointDlpRestrictions <PswsHashtable[]> is documented as the automation for auditing or restricting RDP copies. | Found: Searched: EndpointDlpRestrictions RDP; EndpointDlpRestrictions RemoteDesktop Rdp Setting; RDP Set-DlpComplianceRule. Opened Set-DlpComplianceRule, Get-PolicyConfig and Set-PolicyConfig; parameters exist, but no RDP setting mapping or statement that this operation sets the RDP control. | Fix: Set controls[0].api to null. The reference documents general Endpoint DLP restrictions but does not document the setting that selects Copy or move using RDP. Do not invent a Setting value or describe the generic parameter as a verified RDP operation.
- [contradicted, blocker] controls[0].note; Governance controls table / command: The Set-DlpComplianceRule reference gives only the EndpointDlpRestrictions parameter type. | Found: The EndpointDlpRestrictions parameter specifies the restricted endpoints for Endpoint DLP. This parameter uses the following syntax: @(@{"Setting"="<Setting>"; "Value"="<Value>"},...). The available values for <Value> are: Audit, Block, Ignore, or Warn. | Fix: Remove 'the reference gives the parameter type only' from controls[0].note and its rendered table note. The current reference gives syntax, action values, examples and an Entra role requirement, although it does not identify the RDP Setting value. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / behaviour: DLP alerts also draw on telemetry that first enters the Microsoft 365 audit logs. | Found: The telemetry goes into the Microsoft 365 audit Logs first, is processed, and makes its way to different reporting tools. | Fix: Add https://learn.microsoft.com/purview/dlp-learn-about-dlp#viewing-policy-application-results to sources for the statement that DLP alerts draw on the audit log. | Source: https://learn.microsoft.com/purview/dlp-learn-about-dlp#viewing-policy-application-results
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Purview custom-policy path reaches the Copy or move using RDP activity control. | Found: Select Full directory under Admin units. Scope the location to Devices only. Create a rule where: ... In Actions: Select Audit or restrict activities on devices. ... Select Apply restrictions to specific activity ... Copy or move using RDP | Fix: Restore the omitted scope choices: 'Data Loss Prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > Admin units > Full directory > Devices > rule > Actions > Audit or restrict activities on devices > Apply restrictions to specific activity > Copy or move using RDP'. Keep the note that this follows the custom-policy example, not its scan-failure condition. | Source: https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks readers to check device onboarding and alert-access roles, but neither control appears in the controls table. | Found: Confirm which devices are onboarded ... List the roles that review DLP alerts ... Controls table: Whether a DLP rule audits or restricts copies ... Whether the unified audit log records activity | Fix: The 'Confirm which devices are onboarded' and 'List the roles that review DLP alerts' checklist steps have no corresponding control rows. Remove those checklist instructions rather than adding unverified rows; retain the supported device and role facts in Scope.
-->
