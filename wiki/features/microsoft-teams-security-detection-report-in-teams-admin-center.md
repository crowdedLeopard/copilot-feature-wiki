---
title: "Microsoft Teams: Security detections report in the Teams admin center"
slug: "microsoft-teams-security-detection-report-in-teams-admin-center"
roadmapId: 560702
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "A new Teams admin center report lists impersonation, malicious URL and weaponizable file detections in Teams messaging and exports them to CSV. It is a view for admins; Microsoft has not stated whether anything needs enabling."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Teams is licensed through qualifying Microsoft 365 offerings or a standalone Teams SKU. A requirement specific to the Security detections report is not yet published."
audiences: ["m365-admin","security"]
tags: ["teams","admin-center","threat-detection","weaponizable-file-protection"]
sources:
  - title: "Microsoft 365 Roadmap 560702"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560702"
    kind: "roadmap"
  - title: "Security detections report in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report"
    kind: "learn"
  - title: "Microsoft Teams analytics and reporting"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-reporting-reference"
    kind: "learn"
  - title: "Weaponizable File Protection in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration?view=teams-ps"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
videos: []
related: ["microsoft-teams-customize-blocked-file-extensions-for-weaponizable-file-protection","microsoft-teams-phishing-detection-in-teams-messaging","microsoft-teams-near-real-time-detection-of-malicious-qr-codes-in-messages","ediscovery"]
controls:
  - governs: "Viewing and exporting security detections in Teams"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Analytics & reports > Protection reports > View reports > Report > Security detections"
      docs: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report"
    api: null
    note: "Teams or Skype for Business administrator, or Global reader (tenant-level aggregate only), per the Teams reporting reference."
  - governs: "Weaponizable File Protection, which blocks messages with listed file types in chats and channels"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Messaging settings > Messaging safety > Scan messages for file types that are not allowed"
      docs: "https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -FileTypeCheck \"Enabled\" -Identity Global"
      docs: "https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams"
    note: "Controls the protection, not the report. The feature page says the blocked file-type list is not configurable, but the PowerShell reference documents CustomBlockList with FileTypeBlockList when FileTypeCheck is Enabled."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-23"
    note: "First briefing for the Security detections report in the Teams admin center."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 53 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: removed the unsupported no-action and no-change statements, recorded Teams product-level licensing, updated the Weaponizable File Protection note, and trimmed checklist items without matching control rows."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "71a4308f7c9b1b8dbf8b2cc1a337aa81"
---

## What's changing

The Teams admin center has a new **Security detections** report. Microsoft Learn describes it as a centralised view of security detections generated for Teams communications, where admins can review potentially malicious conversations, investigate detection details and export the results to a CSV file. The report includes detections generated by Teams security protections, such as impersonation, malicious URL and weaponizable file detections.

The report has a chart, which counts detections in the selected date range, and a table of the individual detections. Each row shows the detection date, sender name and email, detection type and recipient. For group chats, channels or meetings, the report shows the conversation type instead of listing every recipient. For impersonation detections it also shows whether the recipient accepted, blocked or unblocked the conversation, with the date and time. The chart and the table have separate export options. The exported CSV contains every column in the report plus **Sender MRI**, **Recipient email**, **Recipient ID** and **Thread ID**.

The roadmap item has the status Launched, a target date of August CY2026, release phase General Availability, platform Web and cloud Worldwide (Standard Multi-Tenant). Microsoft Learn documents the report on its own page, and the Teams reporting reference lists it as available in the public cloud and not in GCC, GCC High or DoD. Microsoft has not stated whether the report is on or off when it arrives.

## Why it matters

This report gives a security or Teams administrator one place to see who sent a flagged message, to whom, and what kind of detection fired, and the export carries the identifiers needed to follow up: the sender MRI to block a sender on the External Access page, and the thread ID to find the conversation in Microsoft Purview eDiscovery.

The report provides a view of detections generated by Teams security protections. The exposure is on the data side: the export holds personal data about senders and recipients, so decide who may run and export it and where the CSV is stored. Microsoft has not stated what happens on arrival, so check whether the report already appears in your tenant.

## Risk assessment

**Data exposure**
- The table shows sender name, sender email and recipient, and the exported CSV adds Sender MRI, Recipient email, Recipient ID and Thread ID. Treat the CSV as personal data and store it accordingly.
- Learn says the sender email might be unavailable for users of Teams for personal use, depending on the sender's privacy settings.

**Security & identity**
- The report is a view of detections raised by Teams security protections. Weaponizable File Protection is set separately (see the controls table).
- Access to the report follows admin roles: the Teams reporting reference names Teams or Skype for Business administrator and Global reader, and says Global reader sees only tenant-level aggregate data with no per-user or team data.

**Autonomy & actions**
- No autonomous action is documented. Admins decide what to do with a detection, for example blocking the sender by MRI on the External Access page.

**Change & support**
- Admins can see the recipient's accept, block or unblock choice after an impersonation detection. For other detection types that field is blank, so do not expect recipient actions for malicious URL or weaponizable file detections.
- Expect help-desk questions from recipients who ask why a message was flagged; the report is where support staff can check the detection type.

## Cost and licensing

Microsoft Teams is licensed through qualifying Microsoft 365 offerings or a standalone Teams SKU, per the Teams service description. A licence requirement or meter specific to this report is not yet published. The Security detections report page lists no prerequisites, and the Teams reporting reference states which admin roles can open reports but names no licence.

The cost the sources show is admin time: running the report, exporting the CSV and following up on detections. No meter, price or cap is documented for the report at the time of writing (November 2026).

## Scope

The report is in the Teams admin center and is Web-only on the roadmap record. The record lists Worldwide (Standard Multi-Tenant) as the cloud. The Teams reporting reference lists the report as Yes for Public and No for GCC, GCC High and DoD.

To open Teams admin center reports, the reporting reference says you must be assigned the Teams or Skype for Business administrator role, or Global reader (tenant-level aggregate only, with no per-user or team data). The report covers detections for Teams communications; its documented detection types are impersonation, malicious URL and weaponizable file. The report page documents no other prerequisite.

## Governance guidance

### Before rollout
- Decide where exported CSVs are stored and who can open them, because the export includes recipient email and recipient ID.
- Check whether Weaponizable File Protection is turned on, using the Messaging safety row in the controls table.

### At rollout
- Open **Analytics & reports** > **Protection reports** in the Teams admin center and run **Security detections** for the last 30 days to see what your tenant has.
- Export the chart and the table separately, and compare the two so you know which one carries the investigation fields.

### After rollout
- Run the report on a regular schedule and review impersonation detections where the recipient accepted the conversation.
- Re-read the report page for changes to columns, date ranges or licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Viewing and exporting security detections in Teams</strong><br><small>Tenant</small><br><small class="controls__note">Teams or Skype for Business administrator, or Global reader (tenant-level aggregate only), per the Teams reporting reference.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Analytics &amp; reports › Protection reports › View reports › Report › Security detections <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Weaponizable File Protection, which blocks messages with listed file types in chats and channels</strong><br><small>Tenant</small><br><small class="controls__note">Controls the protection, not the report. The feature page says the blocked file-type list is not configurable, but the PowerShell reference documents CustomBlockList with FileTypeBlockList when FileTypeCheck is Enabled.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging settings › Messaging safety › Scan messages for file types that are not allowed <a href="https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -FileTypeCheck &quot;Enabled&quot; -Identity Global</code> <a href="https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The report has no setting of its own that Learn documents: it is a view, opened by admins with the roles named under Scope. The Weaponizable File Protection row governs the protection, not the report, and Learn lists weaponizable file detections among the report's contents without describing how the two settings relate. Microsoft Learn documents no PowerShell or Graph operation for the report at the time of writing (November 2026), so the export in the admin centre is the documented way to get the data out.

The Sender MRI column is meant for blocking the sender on the External Access page of the Teams admin center; that page's path is not covered here.

## Open questions

- Which licence, if any, does the Security detections report require? Watch the report's Learn page and the Teams reporting reference.
- Is the report available to admins automatically at launch, or does anything need enabling? Microsoft has not stated a default.
- How far back can the date range go, and how long does Teams keep detection records? The report page gives only predefined ranges such as Last 7 days and Last 30 days as examples.
- Does the setting that conceals user names in Teams reports apply to this report? The reference names three other reports for that setting.

<!-- rationale
risk: Low. The report only shows detections that Teams security protections have already raised, and the exported CSV adds sender and recipient identifiers that need handling as personal data.
cost: Low. The only cost the sources show is admin time to review and export detections; no licence requirement or meter specific to this report is published.
impact: Low. Teams and security administrators notice it; the report displays sender and recipient information for administrators.
-->
