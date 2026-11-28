---
title: "Outlook for iOS: PDF previewer opens sensitivity-label protected PDFs and adds a navigation toolbar"
slug: "outlook-improved-pdf-preview-on-ios"
roadmapId: 564970
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for iPhone and iPad can now preview PDFs protected by a sensitivity label, with a built-in toolbar. No admin switch is documented; tell helpdesk and test how label restrictions are honoured."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["iOS"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "No licence specific to this previewer is published. The Microsoft Purview service description says end users need the appropriate licences to use Information Protection in their client apps, and gives different plans for different labelling features."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["outlook","ios","mobile","pdf-viewer","sensitivity-labels","information-protection","encryption","purview","gcc","gcc-high","dod"]
sources:
  - title: "Outlook: Improved PDF Preview on iOS"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564970"
    kind: "roadmap"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Message encryption FAQ"
    url: "https://learn.microsoft.com/purview/ome-faq"
    kind: "learn"
  - title: "Configure usage rights for the Azure Rights Management service"
    url: "https://learn.microsoft.com/purview/rights-management-usage-rights"
    kind: "learn"
  - title: "Outlook for iOS and Android in Exchange Online: FAQ"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq"
    kind: "learn"
  - title: "Deploying Outlook for iOS and Android app configuration settings in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-configuration-with-microsoft-intune"
    kind: "learn"
  - title: "Active Directory Rights Management Services Mobile Device Extension"
    url: "https://learn.microsoft.com/azure/information-protection/active-directory-rights-manage-mobile-device"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Whether PDF attachments on messages encrypted with Microsoft Purview Message Encryption are encrypted too (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-irmconfiguration"
    kind: "learn"
videos: []
related: ["onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-the-onedrive-apps-ios-and","sensitivity-labels","outlook-purview-label-inheritance-from-email-attachment-for-ios-and-android","outlook-export-to-pdf-preserving-sensitivity-labels","outlook-enhanced-user-interface-updates-for-iphone-and-ipad"]
controls:
  - governs: "Whether the Outlook for iOS PDF previewer is available to users"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin switch or app configuration key for PDF preview in Outlook for iOS at the time of writing (November 2026)."
  - governs: "Whether PDF attachments on messages encrypted with Microsoft Purview Message Encryption are encrypted too"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-IRMConfiguration -EnablePdfEncryption $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-irmconfiguration"
    note: "Exchange Online only. Needs at least the Information Rights Management role. The PDF inherits the encrypted email's permissions. Applies to Message Encryption, not to labelled messages."
confidence: "low"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: launched PDF previewer for label-protected PDFs in Outlook for iOS, with the Exchange Online PDF encryption setting and the documented gaps."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 46 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "37a9bb378e8c41eecac2ea39f39aa77e"
---

## What's changing

The PDF previewer in Outlook for iOS now opens PDFs protected by a sensitivity label, and gains a built-in toolbar of controls for moving around the document. The roadmap item calls these "MIP-label protected PDFs" (MIP is Microsoft Information Protection).

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Microsoft has not stated whether the previewer is on for every user on arrival, which app version brings it, or how it handles the restrictions a label can carry, such as blocking print or copy.

The roadmap item lists the change as Launched, in General Availability, for iOS, with a target date of July CY2026. It lists the Worldwide, GCC, GCC High and DoD clouds. No Message center post was supplied for this item.

## Why it matters

Microsoft retired the Azure Information Protection app for iOS and Android between May 30, 2025 and May 30, 2026, and recommends opening protected non-Office files in other productivity apps. Expect protected-PDF questions from iPhone and iPad users to land on Outlook, and expect users to treat it as the place to read labelled PDFs on the move.

Microsoft has not stated what happens on arrival, and no source says existing label behaviour changes. The open point for a service owner is enforcement: a label that blocks printing or copying is only as strong as the app that shows the file, and Microsoft has not documented how this previewer applies those rights.

## Risk assessment

**Data exposure**
- The previewer shows PDFs the user received; the roadmap describes no new place the file is stored or sent. Whether print, copy, save and share from the previewer honour a label's usage restrictions is not yet documented, so test it before telling users to rely on it.

**Security & identity**
- For messages, the Outlook for iOS and Android FAQ says Exchange decrypts protected messages before passing them to the client, and the app does no decryption itself. Microsoft has not said whether protected PDF attachments follow the same server-side route or are decrypted on the device.
- The sensitivity labels page says labels in Outlook for iOS and Android need a mailbox hosted in Exchange Online; on-premises mailboxes are not supported.

**Autonomy & actions**
- No change: the roadmap describes a viewer, with no automated action.

**Change & support**
- Any user guidance that points to the retired Azure Information Protection app for opening protected PDFs on iOS is out of date and needs replacing.

## Cost and licensing

Microsoft publishes no licence specific to previewing protected PDFs in Outlook for iOS. The Microsoft Purview service description says users benefit from Information Protection by being able to consume content that has sensitivity labels applied, and that end users need the appropriate licences to use the functionality in their client apps. It lists Manual Sensitivity Labeling as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, Office 365 E5/A5/E3/A3 and other plans, and in the same section says sensitivity labelling, including automatic or policy-based labelling, requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance. Check the plans you hold against that page.

No meter is documented for this feature. The direct cost is admin and helpdesk time: testing, updating user guidance and handling questions.

## Scope

- **Platforms:** iOS, as the roadmap lists it (Outlook for iPhone and iPad). The roadmap item names no Android change.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, as the roadmap lists them.
- **Mailboxes:** the sensitivity labels page says labels in Outlook for iOS and Android need the mailbox to be hosted in Exchange Online.
- **Rollout:** Launched, General Availability, target date July CY2026. The minimum Outlook for iOS version is not yet published.

## Governance guidance

### Before rollout
- Decide whether PDFs attached to messages encrypted with Microsoft Purview Message Encryption should be encrypted too, and set EnablePdfEncryption with Set-IRMConfiguration accordingly (controls table).
- Confirm that users who read protected PDFs on iPhone and iPad have mailboxes in Exchange Online, since the labels page excludes on-premises mailboxes.
- Identify users and guidance that still point to the retired Azure Information Protection app for opening protected PDFs on iOS.

### At rollout
- Test with a label-encrypted PDF from your own tenant on a current Outlook for iOS build, checking whether print, copy, save and share honour the label's restrictions.
- Brief the helpdesk that the roadmap describes protected PDFs opening in Outlook's previewer on iOS, and update the protected-PDF article for mobile users with what your test showed.

### After rollout
- Watch Message center and the Outlook for iOS and Android FAQ for documentation of how the previewer handles usage rights.
- Repeat the test after changing a label's encryption settings, before telling users the change is covered.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Outlook for iOS PDF previewer is available to users</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin switch or app configuration key for PDF preview in Outlook for iOS at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether PDF attachments on messages encrypted with Microsoft Purview Message Encryption are encrypted too</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online only. Needs at least the Information Rights Management role. The PDF inherits the encrypted email's permissions. Applies to Message Encryption, not to labelled messages.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-IRMConfiguration -EnablePdfEncryption $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-irmconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns the Outlook for iOS PDF previewer on or off at the time of writing (November 2026); the Outlook for iOS and Android app configuration keys include none for PDF preview or attachments beyond the sync window. What an administrator can decide is whether PDFs reach users protected at all. EnablePdfEncryption needs at least the Information Rights Management role, according to the Message encryption FAQ, and applies to Microsoft Purview Message Encryption: the usage rights page says the PDF then inherits the same permissions as the encrypted email. The sensitivity labels page, by contrast, says Outlook doesn't currently support PDF attachments inheriting encryption from a labelled message, so labelling an email is not documented as a way to protect the PDFs attached to it.

## Open questions

- Does the Outlook for iOS previewer honour each usage right a label can carry (print, copy, save, share), and what does it show when a right is missing? Watch the Outlook for iOS and Android FAQ.
- Are protected PDF attachments decrypted by Exchange before delivery, as protected messages are, or on the device?
- Which minimum Outlook for iOS version brings the new previewer, and is it on for every user on arrival?
- Will Outlook for Android get the same previewer? The roadmap item lists iOS only.
- Will Microsoft add PDF preview in Outlook for iOS to the Message encryption FAQ's list of clients that preview encrypted attachments?

<!-- rationale
risk: Low. The roadmap describes a viewer for PDFs users already receive; Microsoft describes no new sharing, storage or automated action, though how the previewer enforces label restrictions is not documented.
cost: Low. The only cost the sources show is admin and helpdesk time; Microsoft publishes no licence or meter specific to this previewer.
impact: Medium. Outlook for iOS users who receive label-protected PDFs notice the change, as does the helpdesk that supports them.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; summary; What's changing; Scope; Governance guidance / record: The Outlook for iOS PDF previewer now supports sensitivity-label protected PDFs. | Found: MIP-label protected PDFs are now supported in the PDF previewer along with a built-in control's toolbar for easier navigation. | Fix: Add to What's changing: 'The Outlook for iOS and Android FAQ still says iOS native attachment preview does not support rights management and reports an error for rights-protected attachments; the roadmap now describes protected-PDF support.' The FAQ passage is at https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq#architecture-and-security.
- [supported, minor] What's changing / behaviour: MIP means Microsoft Information Protection. | Found: Are you looking for Microsoft Purview Information Protection, formerly Microsoft Information Protection (MIP)? | Fix: Replace '(MIP is Microsoft Information Protection)' with '(MIP is the former name Microsoft Information Protection, now Microsoft Purview Information Protection)' and add https://learn.microsoft.com/azure/information-protection/what-is-information-protection to sources. | Source: https://learn.microsoft.com/azure/information-protection/what-is-information-protection
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown. | Found: commercial users require an Office 365 or Microsoft 365 subscription that includes the Office desktop applications: Microsoft 365 Apps for Business, Microsoft 365 Business Standard, Microsoft 365 Apps for enterprise, Office 365 Enterprise E3, Office 365 Enterprise E5 | Fix: Set licensing.model to 'included'. Prepend to licensing.notes: 'The Outlook mobile FAQ documents commercial-use subscriptions including Office 365 Enterprise E3 and E5. It also allows Office 365 Enterprise E1, F1 and A1, Microsoft 365 Business Basic and Exchange Online-only subscriptions on devices with integrated screens 10.1 inches diagonally or less.' Retain the existing previewer-specific licensing gap and Information Protection licensing notes; the FAQ is already cited. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq
-->
