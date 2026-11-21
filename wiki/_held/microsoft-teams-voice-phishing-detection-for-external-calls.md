---
title: "Microsoft Teams: voice phishing detection for external calls"
slug: "microsoft-teams-voice-phishing-detection-for-external-calls"
roadmapId: 580443
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams plans AI alerts for suspected social engineering on one-to-one calls from outside your organisation. A calling policy setting exists, but Learn says it has no effect yet. Check the default alert mode before the January 2027 target."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Mobile"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Users need a Microsoft Teams license to use Teams. Microsoft has not published an additional licence requirement specific to voice phishing detection."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","threat-detection","ai","powershell","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 580443"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580443"
    kind: "roadmap"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    kind: "learn"
  - title: "New-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamscallingpolicy"
    kind: "learn"
  - title: "End user reporting for Teams Calling (Preview)"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reporting-teams-calling"
    kind: "learn"
  - title: "User reported settings in Microsoft Teams"
    url: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Calling policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    kind: "learn"
  - title: "Teams calling overview"
    url: "https://learn.microsoft.com/microsoftteams/cloud-voice-landing-page"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
videos: []
related: ["microsoft-teams-facilitator-s-enhanced-protection-skill-can-alert-you-to-potential-scams","microsoft-teams-phishing-detection-in-teams-messaging","microsoft-teams-third-party-synthetic-audio-and-video-detection-in-microsoft-teams"]
controls:
  - governs: "Which alert mode users get for suspected voice phishing on calls"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -VoicePhishingDetection None"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    note: "Values: BannerAndAudio (default), Banner, Audio, None. Learn says the feature is not fully released, so the setting has no effect yet. New-CsTeamsCallingPolicy has the same parameter."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: December CY2026 target, plus the VoicePhishingDetection calling policy parameter, which Learn says has no effect until release."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 41 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: default state is now Not stated, call reporting carries its Defender qualification, licensing cites the Teams licence requirement, and the calling policy inventory step is removed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 46 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Target date updated to January CY2027 to match the roadmap record; added that the User reported settings page also covers Defender for Office 365 Plan 1 for call reporting."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 54
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "28f0be6b237c86823bd2c3a2053dbfae"
---

## What's changing

Teams is adding AI detection of voice phishing (vishing) during one-to-one calls with people outside the caller's organisation. The roadmap item states that Teams analyses conversations for signs of social engineering and alerts the recipient when it detects suspicious activity, so the recipient can decide how to proceed.

Microsoft Learn documents a calling policy parameter for it. The Set-CsTeamsCallingPolicy reference says the Voice Phishing Detection policy enables AI-based detection of voice phishing attempts during live inbound Microsoft Teams calls. The parameter takes BannerAndAudio (visual and voice alerts), Banner (visual alert only), Audio (voice alert only) or None (no alerts), and its default value is BannerAndAudio. The same page notes that the feature has not been fully released yet, so the setting has no effect.

The roadmap item is In development, with a target of January CY2027, release phase General Availability, Worldwide (Standard Multi-Tenant) only, on Android, Desktop, iOS, Mac and Mobile. These are Microsoft's targets, not commitments. Microsoft Learn has no dedicated page describing the feature, so what it analyses, how detection works and what the alert looks like beyond the banner and voice options is the roadmap's description only.

## Why it matters

Microsoft lists BannerAndAudio as the parameter default, but says the setting currently has no effect. Microsoft has not stated whether alerts will automatically reach users when the feature is released.

For a security team the value is a warning at the moment of the call, aimed at the person being targeted. The cost is a new kind of in-call interruption that helpdesk and staff who regularly take calls from partners and customers should expect, and a processing question that Microsoft has not yet answered: where call conversations are analysed and what is retained.

## Risk assessment

**Data exposure**

- The roadmap item says Teams analyses conversations on one-to-one external calls. Microsoft has not published where that analysis happens, what is stored or whether results are logged, so privacy and works-council reviews cannot yet be completed from Microsoft's text.

**Security & identity**

- This is a detection and alerting feature. The roadmap and the cmdlet reference describe alerts to the recipient, not blocking or ending calls. Detection can still miss an attack or flag a legitimate caller, so it supports, rather than replaces, user training.
- Learn documents separate user reporting of calls (the end user reporting page is marked Preview). In organisations with Microsoft Defender for Office 365 Plan 2 or Microsoft Defender XDR, users can report suspicious calls when Report call is enabled in the Teams calling policy. Microsoft's User reported settings in Microsoft Teams page also includes Defender for Office 365 Plan 1 for call reporting. Reporting must also be enabled in the Defender portal for reported calls to show up correctly. The same page says users can report a call incorrectly flagged as "Scam Suspected" as not a security concern. Whether voice phishing detection produces that "Scam Suspected" flag is not stated.

**Autonomy & actions**

- No autonomous action is described. The recipient decides how to proceed after an alert, per the roadmap item.

**Change & support**

- With the BannerAndAudio default, users may hear an audio alert during live calls. Expect questions from users on calls with external suppliers or customers, and from users who find the audio alert disruptive. The None, Banner and Audio values of the calling policy parameter are the documented ways to change what users get.

## Cost and licensing

Users need a Microsoft Teams license to use Teams. Microsoft has not published an additional licence requirement specific to voice phishing detection. The roadmap item names no licence, and the Set-CsTeamsCallingPolicy reference, which documents the VoicePhishingDetection parameter, states none.

The cost the sources show is indirect: admin time to review calling policies, and user communication before the target of January CY2027. A price or meter for this feature is not yet published.

## Scope

- **Users:** one-to-one calls with people outside the user's organisation, per the roadmap item. The Learn parameter description says live inbound Teams calls. Microsoft has not said which description is narrower, for example whether outbound external calls are covered.
- **Policy:** the setting is a parameter of the Teams calling policy (Set-CsTeamsCallingPolicy and New-CsTeamsCallingPolicy), so it is set per policy. Learn says the Teams Calling Policy controls which calling and call forwarding features are available to users.
- **Clouds:** the roadmap lists Worldwide (Standard Multi-Tenant) only. That is a record fact, not a statement that other clouds are excluded.
- **Platforms:** Android, Desktop, iOS, Mac and Mobile, per the roadmap record.
- **Rollout:** In development, targeted for January CY2027. The Learn reference notes the feature has not been fully released and the setting has no effect yet.

## Governance guidance

### Before rollout

- Decide per user group whether BannerAndAudio, Banner, Audio or None is appropriate, and record the reason, for example quiet-office roles that may prefer Banner.
- Ask your privacy or compliance lead to review the roadmap description (AI analysis of call conversations) and note that Microsoft has not yet published how call content is processed.

### At rollout

- Tell staff who take external calls that Teams may show or play a warning during a call, and that the warning is advice and not a block.
- Set VoicePhishingDetection explicitly in the calling policies where you want a mode other than the BannerAndAudio default.
- Where call reporting is enabled, remind users how to report suspicious calls and how to report a wrongly flagged call, as described on the end user reporting page.

### After rollout

- Collect helpdesk reports of false alerts and missed scams, and compare them with the policy mode in use for those users.
- Watch Message center and the Set-CsTeamsCallingPolicy reference for the release and for any admin centre setting, licence or data handling statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which alert mode users get for suspected voice phishing on calls</strong><br><small>User</small><br><small class="controls__note">Values: BannerAndAudio (default), Banner, Audio, None. Learn says the feature is not fully released, so the setting has no effect yet. New-CsTeamsCallingPolicy has the same parameter.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -VoicePhishingDetection None</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented control is the VoicePhishingDetection parameter on the Teams calling policy. Learn documents it in PowerShell only at the time of writing (November 2026); the Teams admin center label for it is not documented on the pages read, so the table shows the admin centre side as Not yet documented. Microsoft Learn also says the setting has no effect until the feature is fully released, so setting None today changes nothing observable.

Learn says calling policies can be applied at a global, group and user level; the parameter's own page does not say how a group-level assignment interacts with it. No separate tenant-wide switch for the feature is described apart from the calling policy.

## Open questions

- Does a licence, plan or meter apply to voice phishing detection? Watch the roadmap item and the Teams calling policy reference.
- Where is call audio or its transcript analysed, is anything retained, and is the result visible to administrators or in audit logs? Watch Message center and Microsoft Learn.
- Does detection cover only inbound calls, as the cmdlet reference says, or all one-to-one external calls, as the roadmap says?
- Which Teams admin center setting will expose the VoicePhishingDetection values, and will it be in Voice > Calling policies?
- Does the Defender portal receive anything when an alert is raised or a user reports a flagged call as not a security concern?

<!-- rationale
risk: Medium. The feature analyses call conversations with AI and the policy parameter defaults to BannerAndAudio alerts, while Microsoft has not described where or how call content is processed.
cost: Low. The only cost the sources show is admin time and user communication; a licence or meter for this feature is not yet published.
impact: Medium. Users who take one-to-one calls from outside the organisation would see alerts, but only when Teams detects suspicious activity on a call.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Open questions: Defender portal, report as not a security concern / absence: Whether the Defender portal receives anything when a user reports a flagged call as not a security concern is left as unpublished. | Found: Metadata from the reported Teams items (for example, senders/callers, recipients, reported by, meeting and participant details, and item details) is available on the User reported tab on the Submissions page. | Fix: Replace the final Open questions bullet with: 'Does the Defender portal receive anything automatically when a voice phishing detection alert is raised?' Remove the user-report branch: https://learn.microsoft.com/defender-office-365/submissions-teams documents report metadata in Submissions and says the 'Teams call reported by user as a not security risk' alert policy generates alerts by default. | Source: https://learn.microsoft.com/defender-office-365/submissions-teams
-->
