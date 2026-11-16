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
tags: ["teams","defender-for-office-365","threat-detection","impersonation","privacy","monitoring","admin-center","user-experience"]
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
    api: null
    note: "Role: Global Administrator or Teams Administrator. The page gives the setting name but no full navigation path. Page is marked Preview."
  - governs: "Whether the Defender portal monitors reported Teams items"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Settings > Email & collaboration > Teams user reported settings tab > Monitor reported items in Microsoft Teams"
      docs: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    api: null
    note: "Role: Organization Management or Security Administrator. On by default for new tenants; existing tenants must enable it. Meaningful only if Teams reporting is on."
  - governs: "Where administrators review reported meetings in Defender"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Submissions page > User reported tab"
      docs: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    api: null
    note: "Detailed submissions need Defender for Office 365 Plan 1 or Plan 2, or Defender XDR, per Microsoft's notice. Meeting reports raise the same alert policies as reported calls."
  - governs: "Where administrators review user reports in Teams"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Analytics & reports > Protection reports > View reports tab > User reported security submissions"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    api: null
    note: "The Learn page lists Calling, Chats and channels, and User categories only; a meetings category is not documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing: covers default-on meeting reporting, the Teams admin center and Defender settings, and gaps between the notice and the Preview Learn page."
version: 1
---

## What's changing

Microsoft Teams now lets meeting participants report a meeting, or an individual participant, as a security concern during or after the meeting. The roadmap item describes reporting of suspicious, malicious or potentially fraudulent activity such as impersonation, phishing and scams, with reports feeding Microsoft security and administrative workflows.

Microsoft's notice MC1466296 (published 2026-09-02) says users will see a **Report a concern** option in the participant tile and participant pane, and can mark a previously reported participant as **Not a concern**. It says relevant meeting metadata and limited contextual information are collected for investigation, and that the capability "will be enabled by default". The notice sets no act-by date and gives Microsoft's end date as 2026-11-30.

The Learn page for the feature, which is still titled "(Preview)" at the time of writing (November 2026), words the entry points differently: **More (...) > Report a security concern** during a meeting, and **Report** on a participant tile or in the roster. Expect the label to vary between clients and documents. Users can also report after the meeting ends from the Teams post-meeting experience.

The roadmap record gives status Launched and a target of September CY2026, with Targeted Release and General Availability phases in the Worldwide (Standard Multi-Tenant) cloud. The notice gives Targeted Release from late September 2026 and General Availability (Worldwide) from mid-October to late October 2026. The roadmap lists Android, Desktop, iOS and Mac; the notice names Windows, Mac and web. Learn's client list marks the iOS and Android apps as "messages only" for Teams reporting, so treat mobile meeting reporting as unconfirmed.

## Why it matters

This gives your security team a new signal for meeting-borne social engineering, such as an impersonator joining a call, and it arrives without anyone choosing it. Every user on a supported client can submit a report from the first meeting after rollout, so the question is no longer whether to enable it but whether anyone is ready to receive the reports.

If nobody acts, reports land in the Defender portal and Teams admin center with no agreed owner, users get no guidance on when to use **Report a concern** or **Not a concern**, and meeting and participant metadata is copied to Microsoft for review. Settle who triages reports, and what users are told, before the queue fills.

## Risk assessment

**Data exposure**

- Submitting a report copies meeting metadata and meeting participant metadata to Microsoft for algorithm review. Microsoft's page says personnel might review that metadata, which is typically not permitted for Teams items, and that submitted content is stored in data centres in the USA. The Defender portal setting **Monitor reported items in Microsoft Teams** is the documented control over sharing; confirm your data-residency position with your privacy team.

**Security & identity**

- Reviewing reports needs the right roles: Organization Management or Security Administrator for the Defender portal setting, and Global Administrator or Teams Administrator for Teams admin center reporting settings. Detailed review in the Defender portal depends on Defender for Office 365 or Defender XDR, so a tenant without them has a thinner view.
- Reported meetings and participants raise the same alert policies as reported calls. Microsoft states these alerts do not generate automated investigation and response (AIR) investigations at the time of writing, so triage is manual.

**Autonomy & actions**

- The documents describe reports as signals for administrators to investigate, and no automatic action against a reported participant is described. Any removal, block or follow-up is a manual step under your own process.

**Change & support**

- Users can report the same item more than once and reported items remain visible to them, so expect duplicates and reports about legitimate participants. The **Not a concern** feedback option exists to separate these, but it only helps if users are told about it.
- Labels differ between Microsoft's notice and the Learn page, which will produce helpdesk questions until your guidance names the exact wording users see.

## Cost and licensing

Microsoft's page on Teams user reporting states that, in organisations with Microsoft Defender for Office 365 Plan 1 or Plan 2, or Microsoft Defender XDR, admins can decide whether users can report messages, calls, meetings or meeting participants. The notice adds that detailed reported-meeting submissions in the Microsoft Defender portal are for those same licences. Which licence a tenant needs to see meeting reports in the Teams admin center is not stated.

No price, meter or cap for meeting reporting is published at the time of writing (November 2026). The practical cost is analyst time to triage reports and the effort of updating user guidance and incident response documentation.

## Scope

**Users and clients.** The notice says users participating in Teams meetings on Windows, Mac and web are affected. The roadmap also lists Android and iOS; Learn's client list limits the iOS and Android apps to messages only.

**Clouds.** The roadmap lists Worldwide (Standard Multi-Tenant) only. Learn's page on Teams user reporting states that reporting of calls, meetings and messages is not supported in US Government organisations (GCC, GCC High and DoD).

**Roles.** Global Administrator or Teams Administrator configure reporting in the Teams admin center; Organization Management or Security Administrator change the Defender portal setting.

**Prerequisites.** The Defender portal setting **Monitor reported items in Microsoft Teams** is on by default for new tenants; existing tenants need to enable it, or reported items may not appear on the **User reported** tab.

## Governance guidance

### Before rollout

- Check the **Allow users to report meetings** setting in the Teams admin center and decide whether to leave reporting on for all users, as Microsoft's notice says it is enabled by default.
- Verify that **Monitor reported items in Microsoft Teams** is on in the Defender portal; existing tenants need to enable it.
- Confirm that the people who will triage reports hold Organization Management or Security Administrator in the Defender portal, and Global Administrator or Teams Administrator for Teams admin center settings.
- Agree who owns triage of Teams meeting reports and add the meeting alerts to your incident response process.

### At rollout

- Tell users when to use **Report a concern** and when to use **Not a concern**, using the labels they see on their client.
- Check that reported test items appear on the **User reported** tab of the Defender portal **Submissions** page.
- Review the alert policies for reported calls, which also cover reported meetings and participants, so the right team receives them.

### After rollout

- Review reports weekly in the Defender portal **Submissions** page and in the Teams admin center **Protection reports**, and note duplicate or mistaken reports to refine user guidance.
- Check whether the Teams admin center report lists a meetings category, because the Learn page lists only calling, chats and channels, and user.
- Update security awareness training and incident response documentation, as Microsoft's notice recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can report meetings and meeting participants</strong><br><small class="controls__note">Role: Global Administrator or Teams Administrator. The page gives the setting name but no full navigation path. Page is marked Preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Policy or settings page that controls reporting for Teams meetings › Allow users to report meetings <a href="https://learn.microsoft.com/microsoftteams/end-user-reporting-teams-meeting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Defender portal monitors reported Teams items</strong><br><small>Tenant</small><br><small class="controls__note">Role: Organization Management or Security Administrator. On by default for new tenants; existing tenants must enable it. Meaningful only if Teams reporting is on.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Email &amp; collaboration › Teams user reported settings tab › Monitor reported items in Microsoft Teams <a href="https://learn.microsoft.com/defender-office-365/submissions-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where administrators review reported meetings in Defender</strong><br><small>Tenant</small><br><small class="controls__note">Detailed submissions need Defender for Office 365 Plan 1 or Plan 2, or Defender XDR, per Microsoft's notice. Meeting reports raise the same alert policies as reported calls.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Submissions page › User reported tab <a href="https://learn.microsoft.com/defender-office-365/submissions-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where administrators review user reports in Teams</strong><br><small>Tenant</small><br><small class="controls__note">The Learn page lists Calling, Chats and channels, and User categories only; a meetings category is not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Analytics &amp; reports › Protection reports › View reports tab › User reported security submissions <a href="https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Two settings must agree: the Teams admin center setting decides whether users can report at all, and the Defender portal setting decides whether reports are monitored and shared with Microsoft. Microsoft says the Defender setting is irrelevant when the Teams setting is off, and that it is separate from the setting that makes the option available.

The meetings page gives the setting name **Allow users to report meetings** but no navigation path, while Learn's Teams user reporting page documents a **Report a security concern** toggle in Messaging policies for messages. Microsoft does not confirm that toggle governs meetings, so do not rely on it for that purpose.

Learn also documents Exchange Online PowerShell (`Set-ReportSubmissionPolicy`) for where reported Teams items go, but its parameter names refer to chat messages and the page does not confirm meeting coverage. No separate meeting-reporting parameter appears in `Set-CsTeamsMeetingPolicy` at the time of writing (November 2026), and no Graph endpoint for meeting reports was found.

## Open questions

- What is the navigation path in the Teams admin center for **Allow users to report meetings**, and is it a per-user policy or a tenant-wide setting? Watch the Learn page for Teams meeting reporting.
- Will the Teams admin center **User reported security submissions** report add a meetings category? Microsoft's notice says report information appears there, but the Learn page lists calling, chats and channels, and user.
- Does reporting work on the Teams iOS and Android apps for meetings? The roadmap lists both platforms, the notice names Windows, Mac and web, and Learn marks mobile as messages only.
- Which licence is needed to see meeting reports in the Teams admin center for tenants without Defender for Office 365 or Defender XDR?
- When will the Learn page drop its Preview label, and will the **Report a concern** and **Report a security concern** labels be aligned? Watch Message center and the Learn page.

<!-- rationale
risk: Medium. The option is on by default and copies meeting and participant metadata to Microsoft, but Microsoft documents a Teams admin center setting and a Defender portal setting that cover it.
cost: Low. Microsoft's pages name Defender for Office 365 or Defender XDR as the licences behind reporting, and publish no price or meter for this feature; the known cost is triage time.
impact: High. Microsoft's notice says the option is enabled by default, so users on supported Teams clients see a new Report a concern entry in every meeting without any admin action.
-->
