---
title: "Microsoft Teams: users can report a security concern in meetings"
slug: "microsoft-teams-report-a-security-concern-in-meetings"
roadmapId: 569207
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams adds a Report a concern option in meetings, on by default, so users can flag phishing, impersonation or scams. Reports reach Defender and the Teams admin center; admins should check settings and brief users."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Microsoft's pages tie reporting to Microsoft Defender for Office 365 Plan 1 or Plan 2, or Microsoft Defender XDR. No separate price or meter for meeting reporting is published at the time of writing (November 2026)."
audiences: ["security","m365-admin","change-adoption","compliance"]
tags: ["teams","defender-for-office-365","threat-detection","impersonation","privacy","monitoring","admin-center","user-experience","powershell"]
sources:
  - title: "Report a security concern in Microsoft Teams meetings (Preview)"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reporting-teams-meeting"
    kind: "learn"
  - title: "User reported settings in Microsoft Teams"
    url: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    kind: "learn"
  - title: "User reported security submissions report in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    kind: "learn"
  - title: "Security Operations Guide for Teams protection in Microsoft Defender for Office 365"
    url: "https://learn.microsoft.com/defender-office-365/mdo-support-teams-sec-ops-guide"
    kind: "learn"
  - title: "Set-CsTeamsMeetingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration"
    kind: "learn"
  - title: "Alert policies in the Microsoft Defender portal"
    url: "https://learn.microsoft.com/defender-xdr/alert-policies"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "MC1466296: Microsoft Teams: Report security concerns in meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1466296"
    kind: "message-center"
  - title: "Microsoft Teams: Report a Security Concern in Meetings"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569207"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Whether users can report meetings and meeting participants"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Policy or settings page that controls reporting for Teams meetings > Allow users to report meetings"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reporting-teams-meeting"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -Identity Global -ReportMeeting Enabled|Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration"
    note: "Role: Global Administrator or Teams Administrator. Learn does not say -ReportMeeting is the setting behind the admin centre toggle. The meeting page is marked Preview and gives no full path."
  - governs: "Where reported Teams items are sent (Microsoft, reporting mailbox or both)"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Settings > Email & collaboration > Teams user reported settings tab > Reported item destinations > Send the reported items to"
      docs: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    api:
      kind: "powershell"
      call: "Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -ReportChatMessageEnabled $true -ReportChatMessageToCustomizedAddressEnabled $true -ReportChatMessageAddresses \"<reporting-mailbox>\""
      docs: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    note: "Call shown sends to Microsoft and the reporting mailbox (Exchange Online PowerShell). Parameters refer to chat messages; the SecOps guide says meeting reports follow the same Teams user reported settings."
  - governs: "Whether the Defender portal monitors reported Teams items"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Settings > Email & collaboration > Teams user reported settings tab > Microsoft Teams > Monitor reported items in Microsoft Teams"
      docs: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    api: null
    note: "Role: Organization Management or Security Administrator. On by default for new tenants; existing tenants must enable it. Meaningful only if Teams reporting is on."
  - governs: "Where administrators review reported meetings in Defender"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Submissions > User reported tab"
      docs: "https://learn.microsoft.com/defender-office-365/mdo-support-teams-sec-ops-guide"
    api: null
    note: "Detailed submissions need Defender for Office 365 Plan 1 or Plan 2, or Defender XDR, per Microsoft's notice. Also reachable from View submission in the Defender XDR incident."
  - governs: "Alerts raised by reported meetings and participants"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Email & collaboration > Policies & rules > Alert policy"
      docs: "https://learn.microsoft.com/defender-xdr/alert-policies"
    api: null
    note: "Meeting reports use the reported-call alert policies. Manage Alerts is required to create and edit alert policies. Built-in policies can be turned off or on, given recipients and a daily notification limit; other settings can't be edited."
  - governs: "Where administrators review user reports in Teams"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Analytics & reports > Protection reports > View reports tab > User reported security submissions"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    api: null
    note: "The Learn page lists Calling, Chats and channels, and User categories only; a meetings category is not documented at the time of writing (November 2026)."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing: covers default-on meeting reporting, the Teams admin center and Defender settings, and gaps between the notice and the Preview Learn page."
  - date: "2026-11-16"
    note: "Corrected after verification: reports now qualified by destination and online-mailbox requirement; fixed the Defender path; added destination, ReportMeeting and alert policy controls."
  - date: "2026-11-17"
    note: "Corrected after verification: replaced the destination PowerShell call with the complete documented example, removed New-ProtectionAlert from the alert row, stated what built-in alert policies allow, and softened the manual-action claim."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 73
  unconfirmed: 0
  contradicted: 1
  attempts: 3
  hash: "e40789c8f68015eba62439073009b97c"
---

## What's changing

Microsoft Teams now lets meeting participants report a meeting, or an individual participant, as a security concern during or after the meeting. The roadmap item describes reporting of suspicious, malicious or potentially fraudulent activity such as impersonation, phishing and scams, with reports feeding Microsoft security and administrative workflows.

Microsoft's notice MC1466296 (published 2026-09-02) says users will see a **Report a concern** option in the participant tile and participant pane, and can mark a previously reported participant as **Not a concern**. It says relevant meeting metadata and limited contextual information are collected for investigation, and that the capability "will be enabled by default". The notice sets no act-by date and gives Microsoft's end date as 2026-11-30.

Learn words the entry points slightly differently. The Defender for Office 365 pages say **More (...) > Report a concern** during a meeting, **Report** on a participant tile or in the roster, and **Report a concern** from the post-meeting experience. The dedicated meeting page, still titled "(Preview)" at the time of writing (November 2026), says **Report a security concern**. Expect the label to vary between documents.

The roadmap record gives status Launched and a target of September CY2026, with Targeted Release and General Availability phases in the Worldwide (Standard Multi-Tenant) cloud. The notice gives Targeted Release beginning in late September 2026 and expected to complete by late September 2026, and General Availability (Worldwide) from mid-October to late October 2026. The roadmap lists Android, Desktop, iOS and Mac; the notice names Windows, Mac and web. Learn marks the iOS and Android apps as "messages only" for Teams reporting, so mobile meeting reporting is unconfirmed.

## Why it matters

This gives your security team a new signal for meeting-borne social engineering, such as an impersonator joining a call, and it arrives without anyone choosing it. Eligible users on supported clients, with an online Teams mailbox, can submit a report from the first meeting after rollout, so the question is no longer whether to enable it but whether anyone is ready to receive the reports.

If nobody acts, reports land in the Defender portal and Teams admin center with no agreed owner, users get no guidance on when to use **Report a concern** or **Not a concern**, and, where the destination is set to include Microsoft, meeting and participant metadata is copied for review. Settle who triages reports, where they are sent and what users are told before the queue fills.

## Risk assessment

**Data exposure**

- When a report is sent to Microsoft, meeting metadata and meeting participant metadata are copied and included in ongoing algorithm reviews. Microsoft says its personnel might review that metadata, which is typically not permitted for Teams items, and that submitted content is stored in data centres in the USA.
- Where reports go is set by **Send the reported items to** in the Defender portal: **Microsoft and my reporting mailbox** (the default Microsoft cites), **Microsoft only**, or **My reporting mailbox only**. With the last option, items do not go to Microsoft unless an admin submits them manually from the **User reported** tab. Confirm your data-residency position with your privacy team before leaving the default.

**Security & identity**

- Reviewing reports needs the right roles: Organization Management or Security Administrator for the Defender portal setting, and Global Administrator or Teams Administrator for Teams admin center reporting settings.
- Reporting works only for users with an online Teams mailbox, and the reporting mailbox must be an Exchange Online mailbox. Users on-premises are not covered, so they cannot send these reports.
- Reported meetings and participants raise the same alert policies as reported calls. Microsoft states these alerts do not generate automated investigation and response (AIR) investigations at the time of writing, so triage is manual.

**Autonomy & actions**

- Microsoft's pages describe reports as signals for administrators to investigate; none describes an automatic action against a reported participant at the time of writing (November 2026). Plan who will investigate and decide any removal, blocking or follow-up under your incident response process.

**Change & support**

- Reported items remain visible to users and users can report the same item more than once, so expect duplicates and reports about legitimate participants. **Not a concern** exists to separate these, but only helps if users are told about it.
- Labels differ between documents (**Report a concern** and **Report a security concern**), which will produce helpdesk questions until your guidance names the wording users see.

## Cost and licensing

Microsoft's page on Teams user reporting states that, in organisations with Microsoft Defender for Office 365 Plan 1 or Plan 2, or Microsoft Defender XDR, admins can decide whether users can report messages, calls, meetings or meeting participants. The meeting reporting page says users can report suspicious meetings in organisations with Microsoft Defender for Office 365 or Microsoft Defender XDR. The notice adds that detailed reported-meeting submissions in the Microsoft Defender portal are for those same licences.

Which licence a tenant needs to see meeting reports in the Teams admin center is not stated. No price, meter or cap for meeting reporting is published at the time of writing (November 2026). The practical cost is analyst time to triage reports and the effort of updating user guidance and incident response documentation.

## Scope

**Users and clients.** The notice says users participating in Teams meetings on Windows, Mac and web are affected. The roadmap also lists Android and iOS; Learn limits the iOS and Android apps to messages only.

**Mailboxes.** User reporting in Teams is supported only for users with an online Teams mailbox, and the reporting mailbox must be an Exchange Online mailbox. On-premises mailboxes are not supported in either case.

**Clouds.** The roadmap lists Worldwide (Standard Multi-Tenant) only. Learn states that reporting of calls, meetings and messages is not supported in US Government organisations (GCC, GCC High and DoD).

**Roles.** Global Administrator or Teams Administrator configure reporting in the Teams admin center; Organization Management or Security Administrator change the Defender portal setting.

**Prerequisites.** The Defender portal setting **Monitor reported items in Microsoft Teams** is on by default for new tenants; existing tenants need to enable it, or reported items may not show correctly on the **User reported** tab.

## Governance guidance

### Before rollout

- Decide whether to leave meeting reporting on for everyone, as the notice says it is enabled by default, using **Allow users to report meetings** in the Teams admin center or the tenant-wide `-ReportMeeting` parameter.
- Set **Send the reported items to** in the Defender portal to the destination your privacy team accepts, knowing that **My reporting mailbox only** keeps items from Microsoft unless an admin submits them.
- Verify that **Monitor reported items in Microsoft Teams** is on in the Defender portal; existing tenants need to enable it.
- Confirm that the people who will triage reports hold Organization Management or Security Administrator for Defender settings, and Global Administrator or Teams Administrator for Teams admin center settings.

### At rollout

- Tell users when to use **Report a concern** and when to use **Not a concern**, using the labels they see on their client.
- Check that a reported test item appears on the **User reported** tab of the Defender portal **Submissions** page.
- Route the alert policies for reported calls, which also cover reported meetings and participants, to the team that will triage them.

### After rollout

- Review reports in the Defender portal **Submissions** page and in the Teams admin center **Protection reports**, and note duplicate or mistaken reports to refine user guidance.
- Check whether the Teams admin center report adds a meetings category, because the Learn page lists only Calling, Chats and channels, and User.
- Update security awareness training and incident response documentation, as Microsoft's notice recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can report meetings and meeting participants</strong><br><small class="controls__note">Role: Global Administrator or Teams Administrator. Learn does not say -ReportMeeting is the setting behind the admin centre toggle. The meeting page is marked Preview and gives no full path.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Policy or settings page that controls reporting for Teams meetings › Allow users to report meetings <a href="https://learn.microsoft.com/microsoftteams/end-user-reporting-teams-meeting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity Global -ReportMeeting Enabled|Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where reported Teams items are sent (Microsoft, reporting mailbox or both)</strong><br><small>Tenant</small><br><small class="controls__note">Call shown sends to Microsoft and the reporting mailbox (Exchange Online PowerShell). Parameters refer to chat messages; the SecOps guide says meeting reports follow the same Teams user reported settings.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Email &amp; collaboration › Teams user reported settings tab › Reported item destinations › Send the reported items to <a href="https://learn.microsoft.com/defender-office-365/submissions-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -ReportChatMessageEnabled $true -ReportChatMessageToCustomizedAddressEnabled $true -ReportChatMessageAddresses &quot;&lt;reporting-mailbox&gt;&quot;</code> <a href="https://learn.microsoft.com/defender-office-365/submissions-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Defender portal monitors reported Teams items</strong><br><small>Tenant</small><br><small class="controls__note">Role: Organization Management or Security Administrator. On by default for new tenants; existing tenants must enable it. Meaningful only if Teams reporting is on.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Email &amp; collaboration › Teams user reported settings tab › Microsoft Teams › Monitor reported items in Microsoft Teams <a href="https://learn.microsoft.com/defender-office-365/submissions-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where administrators review reported meetings in Defender</strong><br><small>Tenant</small><br><small class="controls__note">Detailed submissions need Defender for Office 365 Plan 1 or Plan 2, or Defender XDR, per Microsoft's notice. Also reachable from View submission in the Defender XDR incident.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Submissions › User reported tab <a href="https://learn.microsoft.com/defender-office-365/mdo-support-teams-sec-ops-guide" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Alerts raised by reported meetings and participants</strong><br><small>Tenant</small><br><small class="controls__note">Meeting reports use the reported-call alert policies. Manage Alerts is required to create and edit alert policies. Built-in policies can be turned off or on, given recipients and a daily notification limit; other settings can't be edited.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Email &amp; collaboration › Policies &amp; rules › Alert policy <a href="https://learn.microsoft.com/defender-xdr/alert-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where administrators review user reports in Teams</strong><br><small>Tenant</small><br><small class="controls__note">The Learn page lists Calling, Chats and channels, and User categories only; a meetings category is not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Analytics &amp; reports › Protection reports › View reports tab › User reported security submissions <a href="https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Two layers must agree. The Teams side decides whether users can report at all; the Defender portal decides where reports go and whether they are monitored. Microsoft says the Defender monitoring setting is irrelevant when Teams reporting is off.

The meeting page gives the setting name **Allow users to report meetings** but no full navigation path. Learn documents `-ReportMeeting` as the parameter that controls whether users get the meeting reporting options, but does not say it is the same setting as the admin centre toggle. Learn also documents a **Report a security concern** toggle in Messaging policies; that page describes messages and does not confirm it governs meetings.

The Exchange Online PowerShell destination parameters are named for chat messages. Microsoft's Defender for Office 365 SecOps guide states that reported meetings and participants follow the Teams user reported settings. For **Microsoft only**, Learn gives `Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -ReportChatMessageEnabled $true -ReportChatMessageToCustomizedAddressEnabled $false -EnableUserEmailNotification $true`. At the time of writing (November 2026), no Graph endpoint for meeting reports has been found in Learn.

No supported command for changing the built-in alert policies that reported meetings use was established, so that row has no API entry.

## Open questions

- What is the navigation path in the Teams admin center for **Allow users to report meetings**, and is it the same setting as the `-ReportMeeting` parameter of `Set-CsTeamsMeetingConfiguration`? Watch the Learn page for Teams meeting reporting.
- Will the Teams admin center **User reported security submissions** report add a meetings category? The notice says report information appears there, but the Learn page lists Calling, Chats and channels, and User.
- Does reporting work on the Teams iOS and Android apps for meetings? The roadmap lists both platforms, the notice names Windows, Mac and web, and Learn marks mobile as messages only.
- Which licence is needed to see meeting reports in the Teams admin center for tenants without Defender for Office 365 or Defender XDR?
- When will the dedicated Learn page drop its Preview label, and will **Report a concern** and **Report a security concern** be aligned? Watch Message center and the Learn page.

<!-- rationale
risk: Medium. The option is on by default and, when reports go to Microsoft, copies meeting and participant metadata for review; Microsoft documents a Teams setting, a Defender destination setting and a PowerShell parameter that cover it.
cost: Low. Microsoft's pages tie meeting reporting to Defender for Office 365 Plan 1 or Plan 2, or Defender XDR, and publish no separate price or meter for it; the known cost is triage time.
impact: High. Microsoft's notice says the capability is enabled by default, so eligible users on supported clients see Report a concern in meetings without any admin action; reporting needs an online Teams mailbox.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model / licensing: The licensing model is unknown, meaning Microsoft has not yet published it. | Found: Microsoft Defender for Office 365 Plan 1 provides the following extra Teams protection features: Report Teams items: Users can report Teams messages, calls, meetings, or meeting participants as malicious or not malicious. | Fix: Set licensing.model to "included". Start licensing.notes with "Meeting and participant reporting is included in Microsoft Defender for Office 365 Plan 1 and Plan 2." Cite https://learn.microsoft.com/defender-office-365/mdo-support-teams-about, whose feature table lists user-reported meetings and participants in both plans. Retain the separately qualified uncertainty about Teams admin center access without Defender. | Source: https://learn.microsoft.com/defender-office-365/mdo-support-teams-about
-->
