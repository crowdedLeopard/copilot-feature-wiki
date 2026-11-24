---
title: "Microsoft Teams: AI phishing detection in chat messages"
slug: "microsoft-teams-phishing-detection-in-teams-messaging"
roadmapId: 575288
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams is rolling out AI detection of phishing and social engineering in chats, mainly first contact from external people. Users may see warnings. Microsoft's notice says no admin action is required to enable it."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor Microsoft's notice MC1519866 names a licence or meter for this detection."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["teams","threat-detection","ai","impersonation","privacy","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 575288"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575288"
    kind: "roadmap"
  - title: "MC1519866: Microsoft Teams: Phishing detection for messaging"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1519866"
    kind: "message-center"
  - title: "Set-CsTeamsMessagingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    kind: "learn"
  - title: "End user reporting for Security"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reporting-security"
    kind: "learn"
  - title: "Security detections report in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report"
    kind: "learn"
videos: []
related: ["microsoft-teams-report-a-security-concern-in-meetings","microsoft-teams-customize-blocked-file-extensions-for-weaponizable-file-protection"]
controls:
  - governs: "Tenant switch for content-based phishing detection in Teams messages"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -ContentBasedPhishingCheck Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    note: "Reference says the feature has not been released; Microsoft has not confirmed it governs this AI detection. MC1519866 says no new admin configuration is required."
  - governs: "Whether users can report incorrect security detections in Teams messages"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Messaging settings > Messaging safety > Report incorrect security detections"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reporting-security"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -ReportIncorrectSecurityDetections Enabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    note: "General control: the page describes messages flagged by Link Protection; Microsoft has not confirmed it covers this detection."
  - governs: "Review of security detections generated for Teams communications"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Analytics & reports > Protection reports > View reports > Security detections"
      docs: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report"
    api: null
    note: "General control: Microsoft has not confirmed this AI detection appears in the report."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-17"
    note: "New briefing: AI phishing detection in Teams messaging, rolling out from November 2026, with the unconfirmed tenant parameter and related reporting controls."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 56 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 57
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "92cfead0c946b7d2aa9e57a67d131a8e"
---

## What's changing

Teams is adding AI-powered phishing detection that uses the context of a conversation to spot phishing, social engineering, impersonation attempts and deceptive intent. The roadmap item describes it as aimed at higher-risk messaging scenarios, primarily external first-contact chats, and says users may see warnings when suspicious activity is detected.

Microsoft's notice MC1519866 adds detail. Detection looks at suspicious behaviour that may not include a malicious link or file. For most users it focuses on external first-contact chats, and Teams mobile users in China may also get additional protection for in-tenant conversations. During initial quality validation, detection may run in the background without showing warnings; after validation, users may see a warning. The notice says the capability is used only for security protection, that customer message content is not retained by the detection system for model training or other secondary uses, and that no new admin configuration is required. Microsoft Learn does not yet describe this feature, so its behaviour on this page is the roadmap's and the notice's description.

The roadmap item is Rolling out, targeted for November CY2026, for Worldwide (Standard Multi-Tenant) on Android, Desktop, iOS, Mac and Web, in Targeted Release and General Availability phases. MC1519866 gives Targeted Release as beginning in early November 2026 and expected to complete by mid-November 2026, and General Availability (Worldwide) as beginning in early December 2026 and expected to complete by mid-December 2026. The notice gives no act-by date.

## Why it matters

This protection reaches users without an administrator choosing it, so the work for a service owner is communication and readiness rather than configuration. Users who receive a first message from an outside person may start to see warnings, and some of those warnings will be about messages that are legitimate. Microsoft's notice recommends reviewing organisational guidance for interacting with unfamiliar external contacts and reminding users to report suspicious activity or incorrect detections through the Teams reporting experiences.

It also changes what Teams does with message content: the notice answers "Yes" to whether the change alters how existing customer data is processed and whether it introduces AI that interacts with customer data. Privacy and compliance teams should expect questions and should read the notice's retention statement for themselves.

## Risk assessment

**Data exposure**

- Teams analyses conversation context to detect suspicious behaviour. MC1519866 states that customer message content is not retained by the detection system for model training or other secondary uses, and that the capability is used only for security protection. Confirm this against your own data-protection assessment, because the notice flags both a data-processing change and an AI/ML change.

**Security & identity**

- The detection targets phishing, social engineering and impersonation in chat, including cases without a malicious link or file. It is a warning to the user: the roadmap item and notice describe warnings, and neither describes blocking or removing messages.
- A detection is only as useful as the user's reaction to it. External first contact remains the main route, so keep your external access settings under review alongside this change.

**Autonomy & actions**

- The sources describe warnings shown to users. They do not describe automated actions on messages, accounts or senders.

**Change & support**

- During initial quality validation, detection may run without showing warnings, so users may see the first warnings some time after the capability reaches the tenant.
- Expect help-desk questions about warnings on legitimate external contacts. The notice points users to reporting experiences for incorrect detections; the tenant setting for that is in the controls table, with the caveat that Microsoft has not confirmed it covers this detection.
- Teams mobile users in China may receive additional protection for in-tenant conversations, which differs from the external-first-contact focus elsewhere.

## Cost and licensing

No licence, meter or price is published for this feature. The roadmap item names none, and MC1519866 says no new admin configuration is required but does not say whether the detection needs any licence. Licensing is therefore not yet published, and this page does not state that the feature is free.

The cost that can be named is indirect: communications to users, updated guidance on unfamiliar external contacts, and help-desk time for warnings on legitimate messages.

## Scope

- **Who:** The notice says detection focuses on external first-contact chats for most users. Teams mobile users in China may also receive protection for in-tenant conversations.
- **Clouds:** The roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Android, Desktop, iOS, Mac and Web, per the roadmap item.
- **Rollout:** Targeted Release early to mid-November 2026, then General Availability (Worldwide) early to mid-December 2026, per MC1519866. Roadmap dates are Microsoft's targets.
- **Prerequisites:** The notice names none and says no new admin configuration is required.

## Governance guidance

### Before rollout

- Tell help desk and security operations that Teams warnings about suspected phishing in external first-contact chats are coming, and decide who handles reports of incorrect detections.
- Update your guidance on unfamiliar external contacts, as Microsoft's notice MC1519866 recommends.
- Brief privacy and compliance owners on the notice's statements that content is used only for security protection and is not retained for model training or other secondary uses.
- Check the current value of the Teams messaging configuration setting for content-based phishing detection with `Get-CsTeamsMessagingConfiguration`, and note that Microsoft has not confirmed it governs this feature.

### At rollout

- Watch Message center for updates to MC1519866 as Targeted Release (November 2026) moves to General Availability (December 2026).
- Confirm the **Report incorrect security detections** setting in the Teams admin center matches your intent, once Microsoft confirms it applies to this detection.
- Remind users how to report suspicious activity and incorrect detections in Teams.

### After rollout

- Review the Security detections report in the Teams admin center for the detections it lists, and check whether this feature's detections appear in it once Microsoft confirms that.
- Collect user feedback on false warnings and feed it into your external-contact guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for content-based phishing detection in Teams messages</strong><br><small>Tenant</small><br><small class="controls__note">Reference says the feature has not been released; Microsoft has not confirmed it governs this AI detection. MC1519866 says no new admin configuration is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -ContentBasedPhishingCheck Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can report incorrect security detections in Teams messages</strong><br><small>Tenant</small><br><small class="controls__note">General control: the page describes messages flagged by Link Protection; Microsoft has not confirmed it covers this detection.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging settings › Messaging safety › Report incorrect security detections <a href="https://learn.microsoft.com/microsoftteams/end-user-reporting-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -ReportIncorrectSecurityDetections Enabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Review of security detections generated for Teams communications</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed this AI detection appears in the report.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Analytics &amp; reports › Protection reports › View reports › Security detections <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin centre setting for this detection at the time of writing (November 2026), and MC1519866 says no new admin configuration is required. The only related switch found is the Teams PowerShell parameter `-ContentBasedPhishingCheck`, whose reference page says the feature has not been released; treat it as unconfirmed for this feature until Microsoft says otherwise.

The incorrect-detection reporting setting and the Security detections report are existing Teams controls. The reporting setting's page describes messages flagged by Link Protection, and the report's page lists impersonation, malicious URL and weaponizable file detections. Microsoft has not said whether either covers this AI detection.

Microsoft Learn documents no API for the Security detections report at the time of writing (November 2026).

## Open questions

- Does `-ContentBasedPhishingCheck` turn this AI detection on or off for a tenant, and when is it released? Watch the Set-CsTeamsMessagingConfiguration reference and MC1519866.
- Which licence, if any, does the detection need? Watch the Teams security documentation and Message center for a licensing statement.
- Do this feature's detections appear in the Security detections report, and can users report incorrect ones through **Report incorrect security detections**? Watch the Teams admin centre reporting pages.
- What does the warning say and can the user act on it, for example block or report the sender? The notice does not describe it.
- Will the feature be offered in the US Government clouds? The roadmap item lists Worldwide only and Microsoft has not said more.

<!-- rationale
risk: Low. Detection stays inside Teams messaging and only warns users; the exposure to manage is AI analysis of conversation content and warnings that turn out to be wrong.
cost: Low. No licence or meter is published for this feature, so the only known cost is admin time for communications and support; licensing is not yet published.
impact: Medium. It is on for the tenant without admin action, but Microsoft says it focuses on external first-contact chats, so users notice it only when a warning appears.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; Cost and licensing; Open questions / licensing: The licensing model is unknown because no licence specific to this detection is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included'. Replace the licensing notes with 'Each user in the organization must have a Teams license to use Teams, except for joining meetings anonymously. No licence specific to this detection is published.' Add https://learn.microsoft.com/microsoftteams/user-access to sources and use those same sentences at the start of Cost and licensing. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [supported, minor] Governance guidance: Before rollout / command / command: Get-CsTeamsMessagingConfiguration reads the current tenant messaging configuration. | Found: The command shown in Example 1 returns teams messaging configuration information for the current tenant. | Fix: Add https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmessagingconfiguration to sources for the read-only command in Governance guidance. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmessagingconfiguration
- [unsupported, minor] rationale: risk / behaviour: Detection only warns users. | Found: Searched: Teams AI phishing content detection warnings block retention licensing government clouds; "Phishing content detection in Microsoft Teams". Read roadmap record, MC1519866, Teams security guide and Set reference; possible warnings are described, but no exclusive limit on behavior is stated. | Fix: Replace 'Detection stays inside Teams messaging and only warns users' with 'The roadmap and notice describe detection in Teams messaging and possible warnings to users'.
-->
