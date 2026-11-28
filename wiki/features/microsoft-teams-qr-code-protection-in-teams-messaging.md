---
title: "Microsoft Teams: QR code images from external senders are blurred by default"
slug: "microsoft-teams-qr-code-protection-in-teams-messaging"
roadmapId: 570439
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams blurs images containing QR codes in messages from external senders until the recipient selects Reveal QR code. It is on by default with no admin switch, so the action is to brief users and the help desk."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Each user in the organisation needs a Teams license to use Teams, except for joining meetings anonymously. Microsoft has not published a licensing requirement specific to QR code obscuring at the time of writing (November 2026)."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["teams","threat-detection","user-experience","mobile","admin-controls","guest-access"]
sources:
  - title: "QR code obscuring in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/qr-code-obscuring-teams-messages"
    kind: "learn"
  - title: "MC1470410: (Updated) Microsoft Teams: QR code protection for messages from external users"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1470410"
    kind: "message-center"
  - title: "IT Admins - Manage external meetings and chat with people and organizations using Microsoft identities"
    url: "https://learn.microsoft.com/microsoftteams/trusted-organizations-external-meetings-chat"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Microsoft Teams: QR code protection in Teams messaging"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570439"
    kind: "roadmap"
  - title: "Set-CsTenantFederationConfiguration"
    url: "https://learn.microsoft.com/powershell/module/teams/set-cstenantfederationconfiguration"
    kind: "learn"
videos: []
related: ["microsoft-teams-phishing-detection-in-teams-messaging","microsoft-teams-customize-blocked-file-extensions-for-weaponizable-file-protection","microsoft-teams-facilitator-s-enhanced-protection-skill-can-alert-you-to-potential-scams"]
controls:
  - governs: "Whether QR code obscuring in Teams messages from external users is on"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn states the experience is enabled by default with no admin controls to enable or disable it."
  - governs: "Organisation-level external domain list for Teams chat"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Users > External access > Teams and Skype for Business users in external organizations > Block only specific external domains > Block external domains"
      docs: "https://learn.microsoft.com/microsoftteams/trusted-organizations-external-meetings-chat"
    api:
      kind: "powershell"
      call: "Set-CsTenantFederationConfiguration -BlockedDomains <domain list>"
      docs: "https://learn.microsoft.com/powershell/module/teams/set-cstenantfederationconfiguration"
    note: "Sets the organisation-level external domain list. Custom external access policies can inherit the organisation-level domain list or specify a different list for assigned users. Does not change QR code image display."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-20"
    note: "First briefing: Teams blurs QR code images from external senders by default, with no admin control documented."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: external domain row now notes custom policies take precedence, licensing set to included Teams license, impact raised to high, risk rationale narrowed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: removed the claim that a tenant cannot tune the behaviour, and restated how custom external access policies relate to the organisation domain list."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 43 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-28"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 43
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0af48b49a0b5af0d9558de2fe401ec45"
---

## What's changing

Microsoft Teams blurs images that contain QR codes when they arrive in messages from external senders. The user selects **Reveal QR code** to view or scan the image. Microsoft Learn describes this as a precautionary protection that encourages more deliberate interaction with QR codes, which can be used in phishing and fraud attempts ([QR code obscuring in Microsoft Teams](https://learn.microsoft.com/microsoftteams/qr-code-obscuring-teams-messages)).

A blurred image does not mean Teams has judged the QR code to be malicious. Learn says Teams applies the protection to reduce risk and help users make more informed decisions, and the Message Center post says the same. Learn states the experience is enabled by default, applies to QR codes in Teams messages sent by external users and is supported on Teams desktop, web and mobile. For users in China on Teams mobile, it applies to messages sent by both internal and external users.

The roadmap record gives the status as Rolling out, with a target of October CY2026, for Worldwide (Standard Multi-Tenant), in Targeted Release and General Availability, on Android, Desktop, iOS, Mac and Web. Microsoft's notice MC1470410, last updated 3 November 2026, moves the timeline: Targeted Release begins in mid-October 2026 and is expected to complete in mid-October 2026, and General Availability (Worldwide) begins in late October 2026 and is expected to complete by the end of November 2026. The post lists no act-by date.

## Why it matters

This is a user-facing change that arrives without any administrator action. Users in organisations that allow external communication will start seeing blurred images in external chats, and some will ask the help desk why an image will not display. Microsoft's notice recommends that administrators tell users that QR code images from external senders may appear blurred, remind them to verify the sender before revealing or scanning, review phishing and QR code awareness material, and update help desk documentation.

The protection is a prompt, not a block: one selection of **Reveal QR code** shows the image. Treat it as a reason to refresh user guidance on QR code phishing, not as a replacement for controls on who can message your users.

## Risk assessment

**Data exposure**
- No new data access is described. The feature changes how an image from an external sender is displayed until the recipient reveals it.
- A revealed QR code can still lead a user to a phishing or fraud site; Learn describes the blur as precautionary and not a finding that the code is malicious.

**Security & identity**
- The protection applies to QR codes in messages from external senders on desktop, web and mobile. Learn does not describe how Teams detects QR codes in an image, so do not assume every QR code is caught.
- Learn states that there are no admin controls to enable or disable the behaviour. The organisation-level external domain list (see the controls table) sets which external domains your users can communicate with; custom external access policies can inherit the organisation-level domain list or specify a different list for assigned users.

**Autonomy & actions**
- No autonomous action is described: the user chooses to reveal the image.

**Change & support**
- Expect questions from users who receive legitimate QR codes, such as event or vendor codes, from external contacts and find them blurred.
- Users in China on Teams mobile see the behaviour for internal senders as well, according to the Learn page.

## Cost and licensing

Each user in the organisation needs a Teams license to use Teams, except for joining meetings anonymously ([Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access)). Microsoft has not published a licensing requirement specific to QR code obscuring at the time of writing (November 2026). The Message Center post says no administrator configuration or policy changes are required.

The cost the sources show is indirect: updating user awareness material and help desk documentation, as Microsoft's notice recommends.

## Scope

**Who is affected.** Microsoft's notice lists organisations that allow communication with external users in Teams, users who receive Teams messages from external senders, and the Teams administrators and support teams that manage external collaboration policies.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant). It lists Android, Desktop, iOS, Mac and Web, and Learn states support on Teams desktop, web and mobile clients.

**Rollout.** Status is Rolling out with a target of October CY2026. MC1470410 gives the window in the first section. The post says the feature will be enabled by default as part of the rollout.

**Out of scope.** The Learn page describes obscuring for QR codes in Teams messages; it does not describe other content types.

## Governance guidance

### Before rollout
- Tell users that QR code images from external senders may appear blurred, and that a blurred image is not a verdict from Teams that the code is malicious.
- Update help desk documentation with the **Reveal QR code** step and the guidance to verify the sender before revealing or scanning.
- Review the organisation-level external domain list in the Teams admin center (see the external domain row in the controls table).

### At rollout
- Check that the expected window applies to your tenant: Targeted Release from mid-October 2026 and General Availability from late October to the end of November 2026, per MC1470410.
- Collect help desk tickets about blurred images from external contacts to find trusted senders that need briefing.

### After rollout
- Reinforce phishing and QR code awareness material for external collaboration.
- Review the Learn page and Message Center for any change to the admin control position, as Learn states none exists at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether QR code obscuring in Teams messages from external users is on</strong><br><small>Tenant</small><br><small class="controls__note">Learn states the experience is enabled by default with no admin controls to enable or disable it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Organisation-level external domain list for Teams chat</strong><br><small>Tenant</small><br><small class="controls__note">Sets the organisation-level external domain list. Custom external access policies can inherit the organisation-level domain list or specify a different list for assigned users. Does not change QR code image display.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › External access › Teams and Skype for Business users in external organizations › Block only specific external domains › Block external domains <a href="https://learn.microsoft.com/microsoftteams/trusted-organizations-external-meetings-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTenantFederationConfiguration -BlockedDomains &lt;domain list&gt;</code> <a href="https://learn.microsoft.com/powershell/module/teams/set-cstenantfederationconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn states there are no admin controls to enable or disable QR code obscuring, so the first row has no admin centre path and no API. The external domain row sets the organisation-level external domain list; custom external access policies can inherit the organisation-level domain list or specify a different list for assigned users. It does not change how a QR code image from an allowed sender is displayed.

As the feature page and notice describe it, the blurring applies automatically to QR code images from external senders, with no administrator configuration.

## Open questions

- Will Microsoft add an admin control or an allow list for trusted external senders or domains? Learn states none exists at the time of writing (November 2026); watch the Learn page and MC1470410.
- Does QR code obscuring carry a licensing requirement of its own? Microsoft has not published one at the time of writing (November 2026); each user needs a Teams license to use Teams.
- How does Teams decide that an image contains a QR code, and what happens to images it does not detect? The Learn page does not say.
- Does the roadmap target of October CY2026 still hold given MC1470410 gives General Availability completion by the end of November 2026? Watch the roadmap record and the post.

<!-- rationale
risk: Low. The change adds a protection; Microsoft does not describe new data access. The remaining exposure is that users can still reveal and scan a QR code from an external sender, and Learn documents no admin control over the behaviour.
cost: Low. The only cost the sources show is admin and help desk time for user communication. Each user needs a Teams license to use Teams, and Microsoft has not published a licensing requirement specific to QR code obscuring.
impact: High. It changes default behaviour for users who receive images with QR codes from external senders, so those users and the help desk will notice; users with no such messages will not.
-->
