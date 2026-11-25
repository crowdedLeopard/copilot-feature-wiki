---
title: "Microsoft Teams: report a message or an external user for a security concern in US Government clouds"
slug: "microsoft-teams-report-a-message-or-an-external-user-for-security-concern-in-gov-clouds"
roadmapId: 569609
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users in GCC, GCC High and DoD can report suspicious messages and external users, and the reports reach the Teams admin center. Plan triage and check the messaging policy toggle; Learn's Gov support is unclear."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn describes reporting for organisations with Defender for Office 365 Plan 2 or Defender XDR (another page also lists Plan 1). Defender for Office 365 can be an add-on licence or included in subscriptions such as Microsoft 365 E5. Entitlement for this Government rollout is not published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","threat-detection","admin-controls","defender-for-office-365","guest-access","policy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 569609"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569609"
    kind: "roadmap"
  - title: "End user reporting for Security"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reporting-security"
    kind: "learn"
  - title: "User reported security submissions report in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    kind: "learn"
  - title: "User reported settings in Microsoft Teams"
    url: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    kind: "learn"
  - title: "Use the Submissions page to submit suspected spam, phish, URLs, legitimate email getting blocked, and email attachments to Microsoft"
    url: "https://learn.microsoft.com/defender-office-365/submissions-admin"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Supported Microsoft Teams resources for Tenant Configuration Management"
    url: "https://learn.microsoft.com/graph/utcm-teams-resources"
    kind: "learn"
  - title: "Privacy and data handling for security reports in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/security-report-privacy"
    kind: "learn"
  - title: "Microsoft Teams analytics and reporting"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-reporting-reference#teams-reporting-reference"
    kind: "learn"
videos: []
related: ["microsoft-teams-report-suspicious-guest-invitations","microsoft-teams-report-a-security-concern-in-meetings","microsoft-teams-phishing-detection-in-teams-messaging"]
controls:
  - governs: "Whether users can report messages and external users as a security concern"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Messaging policies > policy > Report a security concern"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reporting-security"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingPolicy -Identity <policy name> -AllowSecurityEndUserReporting $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy?view=teams-ps"
    note: "Role: Global Administrator or Teams Administrator. In the new experience the policy is under Settings & policies. Cloud availability for this setting is not stated."
  - governs: "Where admins review user-reported chat and channel messages and external users"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Analytics & reports > Protection reports > View reports > Report > User reported security submissions"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    api: null
    note: "Report categories: Calling, Chats and channels, User. CSV export is available in the admin center."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-25"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-18"
    note: "New briefing: Gov-cloud user reporting of Teams messages and external users, with a flagged disagreement between the roadmap and Learn on Gov support."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: licensing model changed to mixed, with the Defender add-on or subscription wording; report path now includes the Report step; risk rationale and After rollout checklist trimmed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Correction: replaced the open question on whether reports go to Microsoft with Learn's statement that report data is shared for threat analysis; added the Gov-cloud availability in the Teams reporting reference and the Communication Compliance pop-up note; action changed to review."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 55 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c9cac5a637eef74067f26bf415a9d48d"
---

## What's changing

The roadmap item states that users in the US Government clouds (GCC, GCC High and DoD) can report suspicious messages and external users within Teams, and that the reports appear in the Teams admin center so admins can investigate and act. Its status is Rolling out, with a target of November CY2026, in the General Availability phase, on Android, Desktop, iOS, Mac and Web.

Microsoft Learn describes the reporting experience on its page [End user reporting for Security](https://learn.microsoft.com/microsoftteams/end-user-reporting-security). To report a message, a user goes to a chat or channel message, selects **... > Report this message** and chooses **Security concern**. The Defender reporting instructions instead label the selection **Security risk - Spam, phishing, malicious content** ([User reported settings in Microsoft Teams](https://learn.microsoft.com/defender-office-365/submissions-teams#report-malicious-messages-in-teams)). If reporting for Microsoft Purview Communication Compliance is turned off, users might see a confirmation pop-up instead of the selection. To report an external user, the user ticks **Report this person** while blocking them, from an external chat request or from the user's profile card.

Admins review the reports in the Teams admin center under the **User reported security submissions** report, which has **Chats and channels** and **User** categories and can be exported to CSV ([Learn](https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal)).

The sources disagree on clouds. The Learn pages about this reporting do not name any cloud, while Microsoft's page [User reported settings in Microsoft Teams](https://learn.microsoft.com/defender-office-365/submissions-teams) states that user reporting of calls, meetings and messages is not supported in GCC, GCC High and DoD. That note does not mention external users, and it may predate this rollout. The Teams reporting reference also lists User reported security submissions as unavailable in GCC, GCC High and DoD, in contrast to the roadmap ([Teams reporting reference](https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-reporting-reference#teams-reporting-reference)). Both are reported here as written; the roadmap is the later statement of plan.

## Why it matters

This gives security teams in regulated tenants a signal from the people who see phishing, impersonation and spam first, and a list of reported external users with identifiers they can use to block them. It only helps if someone owns the queue: reports that nobody reads are a false assurance.

Microsoft has not stated what happens on arrival in these clouds, so no source says existing behaviour changes. Because the roadmap says users can now report, plan on users seeing the option. Check the messaging policy setting, brief the help desk and name who triages before the option appears.

## Risk assessment

**Data exposure**
- Reports carry data about the reported item. For chats and channels the exported CSV includes the sender's domain, a participant list of up to 20 entries and any reporter comments; for users it includes the reported user's name and email address if available. Restrict who can open the report in the Teams admin center.
- Learn's Defender page says that when a Teams item is reported to Microsoft, message content and up to fifteen messages before and after it might be shared for analysis. Whether reports from US Government tenants are shared that way is not stated.

**Security & identity**
- Reporting an external user happens while blocking them. The report supplies the reported user's identifier, which Learn says admins can use to block that user on the **External Access** page of the Teams admin center.
- Learn says message senders are not notified that their messages were reported, so reports do not alert the sender.

**Autonomy & actions**
- Reporting is started by the user, and the pages describe admins reviewing reports and exporting them. Blocking is a separate admin action; treat each report as a lead to verify, not a verdict.

**Change & support**
- Users can report the same item more than once, so expect duplicate reports and some wrongly reported items. Tell users when to use **Report this message** and when to use **Not a security concern**.
- Learn says the Defender portal supports user reporting of messages but not yet of external users, so external-user reports are visible in the Teams admin center report rather than on the Defender Submissions page.

## Cost and licensing

Learn describes this reporting for organisations with Microsoft Defender for Office 365 Plan 2 or Microsoft Defender XDR ([End user reporting for Security](https://learn.microsoft.com/microsoftteams/end-user-reporting-security)); the page [User reported settings in Microsoft Teams](https://learn.microsoft.com/defender-office-365/submissions-teams) lists Defender for Office 365 Plan 1 or Plan 2, or Defender XDR. The prerequisites of the admin center report page name no licence, only that the reporting settings are turned on.

Learn says Defender for Office 365 Plan 1 or Plan 2 can be acquired as add-on licences or included in subscriptions such as Microsoft 365 E5 ([Submissions page](https://learn.microsoft.com/defender-office-365/submissions-admin#admin-options-for-user-reported-messages)), so a separate add-on is not universally required. Which licence covers this feature in US Government clouds is not yet published.

A price or meter for this feature in US Government clouds is not yet published. The indirect cost is the admin time to triage reports and to brief users.

## Scope

- **Clouds:** GCC, GCC High and DoD, as the roadmap record lists them. Learn's Defender page states that user reporting of calls, meetings and messages is not supported in those clouds (see What's changing).
- **Platforms:** Android, Desktop, iOS, Mac and Web, per the roadmap record.
- **Users:** users covered by a messaging policy with **Report a security concern** turned on; Learn says the setting is configured per messaging policy.
- **Roles:** Learn says viewing or configuring user reporting in the Teams admin center needs the Global Administrator or Teams Administrator role.
- **Rollout:** Rolling out, target November CY2026, General Availability. No Message Center post was supplied for this item.

## Governance guidance

### Before rollout
- Open the Teams admin center messaging policies and confirm whether **Report a security concern** is on in each policy that covers Gov users.
- Name the security admin who reviews **User reported security submissions** and agree how often.
- Decide whether Defender for Office 365 or Defender XDR is licensed, since Learn frames reporting for organisations with them.
- Draft a short note for users on when to report a message or an external user.

### At rollout
- Check that users can see **Report this message** and, when blocking an external user, **Report this person**.
- Run the report once and export a CSV to confirm who can see it and what it contains.
- Brief the help desk that senders are not notified and that duplicate reports are possible.

### After rollout
- Review the **Chats and channels** and **User** categories on a regular schedule.
- Re-read the Learn pages for Gov cloud wording and for any change to the Defender portal behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can report messages and external users as a security concern</strong><br><small>User</small><br><small class="controls__note">Role: Global Administrator or Teams Administrator. In the new experience the policy is under Settings &amp; policies. Cloud availability for this setting is not stated.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging policies › policy › Report a security concern <a href="https://learn.microsoft.com/microsoftteams/end-user-reporting-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingPolicy -Identity &lt;policy name&gt; -AllowSecurityEndUserReporting $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where admins review user-reported chat and channel messages and external users</strong><br><small>Tenant</small><br><small class="controls__note">Report categories: Calling, Chats and channels, User. CSV export is available in the admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Analytics &amp; reports › Protection reports › View reports › Report › User reported security submissions <a href="https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Two settings are involved for messages: the Teams admin center toggle decides whether users can report, and Learn says the Defender portal setting must also be on for reports to appear on the Defender **Submissions** > **User reported** tab. Learn says the Defender portal does not yet support reporting of external users, so those reports are visible only in the Teams admin center report. Learn gives the newer route to the same policy as **Settings & policies**. No API for reading the reports is documented on the report page at the time of writing (November 2026).

## Open questions

- Do the Learn pages on end-user reporting apply in GCC, GCC High and DoD now, given that the Defender page says user reporting is not supported there? Watch the Learn pages and the roadmap item.
- Is **Report a security concern** on or off by default in the US Government clouds? Microsoft has not stated it.
- Which Defender licence, if any, do US Government tenants need? The Learn pages list different plans and no Gov-specific licence is published.
- Microsoft states that Teams security-report data is also shared with Microsoft for threat analysis and service protection ([Privacy and data handling for security reports in Microsoft Teams](https://learn.microsoft.com/microsoftteams/security-report-privacy)).
- Will an API or export feed for user reported security submissions be documented? Only the admin center view and CSV export are documented at the time of writing.

<!-- rationale
risk: Low. The feature adds a user-initiated reporting signal for admins. Its default in these clouds is not stated, so this rates today's behaviour continuing, with one messaging policy toggle as the control.
cost: Low. The only cost the sources show is admin time to triage reports; Learn frames reporting for organisations with Defender for Office 365 or Defender XDR, and no price or meter for this feature is published.
impact: Medium. Every user in a messaging policy that allows it sees new report options, and security admins gain a report queue to review and act on.
-->
