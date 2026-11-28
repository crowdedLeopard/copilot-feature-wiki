---
title: "Microsoft Purview Endpoint DLP: protect unsaved content from printing, USB and network shares (Worldwide)"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-enforce-dlp-protection-upon-new-c"
roadmapId: 511791
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap lists as launched an Endpoint DLP change to monitor or block printing, or moving to USB or a network share, of files with unsaved sensitive content. Learn still documents the old gap, so test existing device rules before relying on it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as Included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. Nothing specific to unsaved content is published."
audiences: ["security","compliance","change-adoption"]
tags: ["endpoint-dlp","dlp","purview","device-onboarding"]
sources:
  - title: "Microsoft 365 Roadmap 511791"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=511791"
    kind: "roadmap"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "docs"
  - title: "What's new in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/whats-new"
    kind: "learn"
  - title: "Whether a device rule audits, warns or blocks printing and copying to USB or network shares (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails"
    kind: "learn"
  - title: "Whether a device rule audits, warns or blocks printing and copying to USB or network shares (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-enforce-dlp-protection-upon-new-content-be","endpoint-dlp","sensitive-information-types","role-groups"]
controls:
  - governs: "Whether a device rule audits, warns or blocks printing and copying to USB or network shares"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > Devices > rule > Actions > Audit or restrict activities on devices > Apply restrictions to specific activity"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity \"<rule name>\" -EndpointDlpRestrictions @{\"Setting\"=\"RemovableMedia\"; \"Value\"=\"Block\"}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Settings include Print, RemovableMedia and NetworkShare. Applies where user and device are both in scope. Learn does not yet say whether it covers unsaved content."
  - governs: "Separate switch for protection of unsaved content"
    scope: "tenant"
    ui: null
    api: null
    note: "Not listed under Endpoint settings or in Set-PolicyConfig at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-04T23:00:45"
changes:
  - date: "2026-11-28"
    note: "New briefing: the roadmap lists the item as launched for Worldwide, while Learn still documents that unsaved data is not scanned and no dedicated setting is documented."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 39 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the Scope platform list: removed Windows Server 2019 and later, which Learn supports only with exclusions and after server enablement."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 43
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e0b79aca713ca9f7bda427cb04081c58"
---

## What's changing

Microsoft is extending Endpoint DLP (the part of Microsoft Purview Data Loss Prevention that acts on onboarded Windows and macOS devices) to files whose sensitive content has not yet been saved. The roadmap item states that it will "monitor or protect file with unsaved sensitive content from being printed or being moved to USB or network share".

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn's current text still describes the gap the item addresses: under **Endpoint DLP and Unsaved Files**, it states that if data is never saved to a file on the local device, Endpoint DLP cannot scan or classify it, and that a Word document saved directly to a USB device without first being stored locally cannot be inspected or blocked. Learn says files are scanned each time they are created or modified. Microsoft has not stated whether the new behaviour applies to existing rules on arrival, which apps it covers, or what users see.

The roadmap record lists the item as **Launched**, General Availability, with a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The record and Learn therefore disagree: the roadmap says launched, while Learn, at the time of writing (November 2026), still documents unsaved data as out of Endpoint DLP's reach. No Message Center post was supplied for this item.

## Why it matters

Printing, copying to USB and copying to a network share are device activities Endpoint DLP rules can block, and a user who drafts sensitive text in a new document and sends it straight to a printer or USB stick is the case Learn says current rules miss. If the roadmap's change works as described, that gap closes for tenants that already restrict these activities. Until you have seen it work on your own devices, treat Learn's statement as the position to report to auditors.

Microsoft has not stated what happens on arrival. If the protection attaches to existing Block or Block with override rules, users may meet new blocks on unsaved work, which lands on the helpdesk. If it needs configuring, nothing documented tells you how, and the gap stays open.

## Risk assessment

**Data exposure**
- Learn states that Endpoint DLP cannot scan or classify data never saved to the local device, so unsaved sensitive content saved straight to USB is outside current rules. The roadmap item is intended to close this; Learn does not yet document how or when it reaches a device.

**Security & identity**
- No change: the roadmap item describes no new identity, permission or sign-in behaviour.

**Autonomy & actions**
- The actions are the existing device activity restrictions. Learn documents block, warn or audit for **Print**, **Copy to USB removable device** and **Copy to a network share**. Microsoft has not said whether unsaved content is governed by those same rule actions or by a separate setting.

**Change & support**
- If existing Block or Block with override rules begin to act on unsaved documents, users will meet blocks while their work is unsaved. Microsoft has not described what happens to the unsaved content when an action is blocked.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as **Included** in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. This item is an Endpoint DLP capability; Microsoft publishes nothing specific to unsaved-content protection.

**Meter.** The service description publishes no meter for Endpoint DLP activity restrictions at the time of writing (November 2026).

**Indirect costs.** Admin time to test existing device rules against unsaved documents, and helpdesk time if users meet new blocks.

## Scope

- **Users and devices:** Learn states that for a DLP policy to be enforced on an endpoint, both the user and the device must be included in the policy scope.
- **Platforms:** Learn lists Print, Copy to USB removable device and Copy to a network share as supported on Windows 10 (21H2, 22H2) and Windows 11 (21H2, 22H2) on x64, Windows 11 (21H2, 22H2) on ARM64, and the three latest released macOS versions. The roadmap record lists the platform as Web. Which platforms get unsaved-content protection is not yet documented.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Rollout:** the record lists the item as Launched, General Availability, with a target of April CY2026.
- **Roles:** the `EndpointDlpRestrictions` parameter of `Set-DlpComplianceRule` requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

## Governance guidance

### Before rollout
- List the device rules that set **Copy to a removable USB device**, **Copy to a network share** or **Print** to Block or Block with override; these are the rules whose reach the roadmap item describes extending.
- Check that the users and devices you expect are both in each rule's scope, since Learn says a policy is enforced on an endpoint only when both are.
- Brief the helpdesk that blocks may start to appear on documents users have not yet saved.

### At rollout
- Test on one onboarded pilot device: put test sensitive data in a new, unsaved Word document, try to print it and save it straight to a USB drive, and record what the rule does.
- Set a test rule for these activities to Audit before relying on Block, so you see whether unsaved content is matched at all.

### After rollout
- Recheck the **Endpoint DLP and Unsaved Files** section of Learn's Endpoint DLP page; until it changes, report the documented gap as open.
- Repeat the pilot test on macOS devices before assuming the protection covers them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a device rule audits, warns or blocks printing and copying to USB or network shares</strong><br><small class="controls__note">Settings include Print, RemovableMedia and NetworkShare. Applies where user and device are both in scope. Learn does not yet say whether it covers unsaved content.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › Devices › rule › Actions › Audit or restrict activities on devices › Apply restrictions to specific activity <a href="https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &quot;&lt;rule name&gt;&quot; -EndpointDlpRestrictions @{&quot;Setting&quot;=&quot;RemovableMedia&quot;; &quot;Value&quot;=&quot;Block&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for protection of unsaved content</strong><br><small>Tenant</small><br><small class="controls__note">Not listed under Endpoint settings or in Set-PolicyConfig at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rule action row governs printing and copying to USB or network shares for files Endpoint DLP has scanned; Learn does not yet say whether it covers unsaved content. In PowerShell, the `Block` or `Warn` values also need the `NotifyUser` parameter, and `EndpointDlpRestrictions` requires the Compliance Administrator or Compliance Data Administrator role in Microsoft Entra ID. The policy walkthrough the path is taken from is written for files that fail scanning, a scenario Learn marks as preview. Microsoft Learn documents no tenant or policy setting specific to unsaved content at the time of writing (November 2026).

## Open questions

- Does unsaved-content protection apply automatically to existing device rules that restrict printing, USB and network-share copies, or does it need a setting? Watch the Endpoint DLP Learn page and Message center.
- When will Learn's **Endpoint DLP and Unsaved Files** section be updated to match the roadmap's Launched status?
- Which apps and platforms are covered: Office desktop apps only, or others; Windows and macOS alike? The roadmap lists only Web.
- What happens to the unsaved content when a print or copy is blocked, and what does the user see?
- Do Activity explorer and DLP alerts record events on unsaved content in the same way as for saved files?

<!-- rationale
risk: Medium. Learn still states that Endpoint DLP cannot inspect or block data never saved to the device, and Microsoft has not said whether existing device rules start acting on unsaved content.
cost: Low. Endpoint DLP is included in Microsoft 365 E5/A5/G5 and the other plans the Purview service description lists; the known cost is admin and helpdesk time to test and explain new blocks.
impact: Medium. Users of onboarded devices in the scope of device rules that restrict printing, USB or network-share copies may meet warnings or blocks on documents they have not yet saved.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Purview portal path reaches Apply restrictions to specific activity in a device policy rule. | Found: Select the Custom from the Categories then Custom policy template from Regulations. ... Scope the location to Devices only. ... In Actions: ... Select Audit or restrict activities on devices. ... Select Apply restrictions to specific activity | Fix: Expand controls[0].ui.path and its rendered copy to 'Data Loss Prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom policy > Admin units > Full directory > Devices > rule > Actions > Audit or restrict activities on devices > Apply restrictions to specific activity > Copy to a removable USB device > Block with override'. This is the USB restriction route given at https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails; the same page separately documents Copy to a network share > Block with override. | Source: https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails
-->
