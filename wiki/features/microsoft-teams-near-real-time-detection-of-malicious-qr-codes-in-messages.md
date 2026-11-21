---
title: "Microsoft Teams: near-real-time detection of malicious QR codes in messages"
slug: "microsoft-teams-near-real-time-detection-of-malicious-qr-codes-in-messages"
roadmapId: 576198
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams will warn users when a QR code image in a chat or channel leads to a malicious destination. It is covered by the existing Malicious URL protection setting, on by default; no admin action is required, but users and help desk need briefing."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says malicious URL protection is available to all Teams users as baseline protection and does not require an additional licence. No licence or meter specific to QR code detection is published at the time of writing (November 2026)."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["teams","threat-detection","admin-controls","user-experience","mobile","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 576198"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576198"
    kind: "roadmap"
  - title: "Malicious URL protection in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/malicious-url-protection-teams"
    kind: "learn"
  - title: "QR code obscuring in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/qr-code-obscuring-teams-messages"
    kind: "learn"
  - title: "Set-CsTeamsMessagingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration?view=teams-ps"
    kind: "learn"
  - title: "MC1526651: (Updated) Microsoft Teams: Malicious QR code detection in messages"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1526651"
    kind: "message-center"
videos: []
related: ["microsoft-teams-qr-code-protection-in-teams-messaging","microsoft-teams-phishing-detection-in-teams-messaging","microsoft-teams-customize-blocked-file-extensions-for-weaponizable-file-protection","microsoft-teams-voice-phishing-detection-for-external-calls"]
controls:
  - governs: "Malicious URL protection, which Microsoft says covers QR code detection"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Messaging > Messaging settings > Messaging safety > Malicious URL protection"
      docs: "https://learn.microsoft.com/microsoftteams/malicious-url-protection-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -UrlReputationCheck Enabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration?view=teams-ps"
    note: "Learn calls it a tenant-level setting, enabled by default. The cmdlet page describes UrlReputationCheck (Enabled or Disabled) as malicious URL detection but does not name the admin center toggle."
  - governs: "A switch for QR code detection separate from Malicious URL protection"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1526651 says no separate configuration is available or required for malicious QR code detection."
  - governs: "Blurring of QR code images from external senders"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says the blurring experience is enabled by default and there are no admin controls to enable or disable it."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-17T00:31:56"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item, including the November 10, 2026 timeline update in MC1526651 (rollout mid to late November 2026)."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 51 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 50
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "388e9d057d4f96eed5eb2af99b14c61f"
---

## What's changing

Teams is extending malicious URL protection to QR codes. It will decode the destination of a QR code in an inline image shared in a 1:1 chat, group chat, meeting chat or channel, check it, and show an extra warning when the destination is judged malicious. This applies to internal and external senders (Message Center post MC1526651).

When a malicious QR code is detected, users see the warning "This message contains a link that might be harmful" and a "Learn about file and link safety" link. Blurring is a separate, existing experience: images with QR codes from external senders are already blurred by default, internal ones are not, and a blurred image does not mean Teams found the code malicious. For users on Teams mobile in China, MC1526651 says QR code images are blurred whatever the sender, and messages containing a malicious QR code will be blocked.

Microsoft's Learn page on malicious URL protection already lists URLs embedded in QR codes among what it covers, and says Teams warns both the sender and all recipients when a URL is flagged. The roadmap item (target November CY2026, status Rolling out) and MC1526651 are the source for timing: the November 10, 2026 update moved general availability for Worldwide to begin in mid-November 2026 and complete by late November 2026. MC1526651 gives no act-by date and says no admin action is required.

## Why it matters

QR codes in images are a way to carry a phishing link past text-based link checks, and this change brings them under the same protection as typed URLs. Because it rides on a setting that Learn says is enabled by default, most tenants will get it without doing anything, so the work is communication, not configuration.

The practical effect is on users and the help desk. A new warning will appear on messages that previously showed only a blur, and people may read the blur as a verdict. MC1526651 recommends telling users and help desk staff about the warning and that blurring does not mean a QR code was found malicious.

## Risk assessment

**Data exposure**
- MC1526651 describes Teams decoding and evaluating the QR code destination in inline images shared in chats, meeting chats and channels, internal and external. If your privacy review needs to know how that evaluation handles message content, confirm it with Microsoft before rollout.

**Security & identity**
- The protection warns and does not block: Learn says malicious URL protection "doesn't block URLs on click", so a user can still proceed past a warning. Safe Links and zero-hour auto purge (ZAP) are the Defender for Office 365 capabilities that Learn lists as blocking or removing, and they require Defender for Office 365 Plan 1 or Plan 2.
- Detection is tied to the Malicious URL protection setting. An organisation that has turned that setting off should treat QR codes as uncovered by this feature until it confirms otherwise; MC1526651 says organisations with it enabled receive QR detection.
- In external conversations, Learn says protection applies to all participants if any organisation in the conversation has it enabled.

**Autonomy & actions**
- No autonomous actions are described. The outcome is a warning to users; for Teams mobile in China, MC1526651 says messages containing a malicious QR code are blocked.

**Change & support**
- Expect questions about the new warning and about why an image is blurred but not flagged. MC1526651 recommends updating internal Teams messaging security documentation and briefing the help desk.
- Learn describes the warning as covering URLs "identified as potentially malicious", so tell users a warning is a signal to be careful, not proof of harm.

## Cost and licensing

Learn's malicious URL protection page says the protection is available for all Teams users as part of baseline protection and does not require an additional licence. MC1526651 says no separate configuration is available or required for QR code detection and that it is managed by the existing Malicious URL protection setting.

No meter, price or licence specific to QR code detection is published at the time of writing (November 2026). The indirect cost is admin and help desk time to brief users. Safe Links and ZAP for Teams are separate, and Learn says they require a Defender for Office 365 Plan 1 or Plan 2 licence.

## Scope

Users: everyone who uses Teams messaging, in 1:1 chats, group chats, meeting chats and channels, internal and external (MC1526651). Learn describes the setting as tenant-level, applying to all users when enabled.

Clouds listed on the roadmap item: Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Platforms: Android, Desktop, iOS, Mac and Web. MC1526651's rollout schedule names only General Availability (Worldwide); Learn says admins in GCC, GCC High and DoD tenants can turn malicious URL protection on or off and that it is enabled by default.

Release phase on the roadmap item is General Availability, status Rolling out, target November CY2026. Learn says new tenants get the protection as part of Teams baseline security protection without admin configuration; existing tenants control it in the Teams admin center.

## Governance guidance

### Before rollout
- Check whether Malicious URL protection is on in the Teams admin center, as set out in the controls table, because QR detection follows it.
- Brief the help desk on the warning text "This message contains a link that might be harmful" and on the difference between a blurred QR code and a flagged one.
- Update internal Teams messaging security guidance, as MC1526651 recommends.

### At rollout
- Send a short note to users that a QR code in a chat or channel may now carry a warning, and that they should not proceed past it without a reason.
- Watch support tickets for reports of the new warning from mid-November to late November 2026, the window in MC1526651.

### After rollout
- Confirm the setting is still in the state you chose, using the Teams admin center path or the PowerShell parameter in the controls table.
- Review help desk tickets for wrongly flagged QR codes and decide whether your guidance to users needs adjusting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Malicious URL protection, which Microsoft says covers QR code detection</strong><br><small>Tenant</small><br><small class="controls__note">Learn calls it a tenant-level setting, enabled by default. The cmdlet page describes UrlReputationCheck (Enabled or Disabled) as malicious URL detection but does not name the admin center toggle.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging › Messaging settings › Messaging safety › Malicious URL protection <a href="https://learn.microsoft.com/microsoftteams/malicious-url-protection-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -UrlReputationCheck Enabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for QR code detection separate from Malicious URL protection</strong><br><small>Tenant</small><br><small class="controls__note">MC1526651 says no separate configuration is available or required for malicious QR code detection.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blurring of QR code images from external senders</strong><br><small>Tenant</small><br><small class="controls__note">Learn says the blurring experience is enabled by default and there are no admin controls to enable or disable it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The one control is the existing Malicious URL protection setting. Learn describes it as tenant-level, with no per-user or per-group scope given. MC1526651 says no separate configuration exists for QR code detection, so turning the setting off is the only documented lever and affects typed URLs as well.

The PowerShell parameter UrlReputationCheck is described on its reference page as enabling malicious URL detection in Teams messages; that page does not name the admin center toggle, so confirm both change the same behaviour in a test tenant. MC1526651 gives the admin path as Settings and policies > Messaging Safety; Learn gives Messaging > Messaging settings > Messaging safety. The table follows Learn.

## Open questions

- Which admin center path is current: Messaging > Messaging settings > Messaging safety (Learn) or Settings and policies > Messaging Safety (MC1526651)? Watch the Learn page and MC1526651.
- When will QR detection reach GCC, GCC High and DoD? The roadmap item lists those clouds, but the MC1526651 schedule names only Worldwide.
- Does detection cover QR codes outside inline images, such as files or other attachments? MC1526651 refers only to inline images.
- Does the PowerShell parameter UrlReputationCheck control the same behaviour as the Malicious URL protection toggle, and so QR detection? Watch the Set-CsTeamsMessagingConfiguration reference.

<!-- rationale
risk: Low. The change adds a warning on detected malicious QR codes and stays inside the existing Malicious URL protection setting; Microsoft's page says that protection warns and does not block links on click.
cost: Low. Learn says malicious URL protection is available to all Teams users and does not require an additional licence; the only cost shown is admin and help desk time to communicate the new warning.
impact: Medium. Every Teams messaging user is covered, but users see something new only when a malicious QR code is detected, so the people who notice are recipients of flagged messages and the help desk.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: QR codes in images can carry phishing links past text-based link checks. | Found: Searched: QR codes images phishing bypass text based URL link detection Microsoft Teams. Read malicious URL protection and QR obscuring, and returned Teams security and phishing excerpts; none states the claimed bypass of text-based checks. | Fix: Replace 'QR codes in images are a way to carry a phishing link past text-based link checks, and this change brings them under the same protection as typed URLs.' with 'This change brings destinations in QR codes under the same malicious URL protection as typed URLs.'
-->
