---
title: "Microsoft Purview Endpoint DLP: protect unsaved content from printing, USB and network shares"
slug: "microsoft-purview-endpoint-data-loss-prevention-enforce-dlp-protection-upon-new-content-be"
roadmapId: 560397
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let Endpoint DLP monitor or block printing, or moving to USB or a network share, of files whose sensitive content has not yet been saved. Microsoft has not said whether existing rules pick it up; test before relying on it."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. Nothing specific to unsaved-content protection is published."
audiences: ["security","compliance","change-adoption"]
tags: ["endpoint-dlp","dlp","purview","sensitive-information-types","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 560397"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560397"
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
  - title: "Help protect files that Endpoint Data Loss Prevention fails to scan"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails"
    kind: "learn"
  - title: "Whether a device rule audits, warns or blocks printing and copying to USB or network shares (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc","sensitive-information-types","role-groups"]
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
    note: "Settings include Print, RemovableMedia and NetworkShare. Applies to users and devices both in scope. Learn does not yet say whether it covers unsaved content."
  - governs: "Separate switch for protection of unsaved content"
    scope: "tenant"
    ui: null
    api: null
    note: "Not listed under Endpoint settings or in Set-PolicyConfig at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-27"
    note: "New briefing: roadmap item rolling out; Learn still documents that unsaved data is not scanned, and no dedicated setting is documented."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 36 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the supported platforms for print, USB and network-share restrictions to Learn's Windows versions and macOS releases and removed an unsupported claim about which activities rules most often block."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 40
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "056ee3fab2e444c1b279ea4094885779"
---

## What's changing

Microsoft plans to extend Endpoint DLP (the part of Microsoft Purview Data Loss Prevention that acts on onboarded Windows and macOS devices) to files whose sensitive content has not yet been saved. The roadmap item states that it will "monitor or protect file with unsaved sensitive content from being printed or being moved to USB or network share".

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn's current text says the opposite of the roadmap: under **Endpoint DLP and Unsaved Files**, it states that if data is never saved to a file on the local device, Endpoint DLP cannot scan or classify it, and that if a user opens a document in Word and saves it directly to a USB device without first storing it locally, Endpoint DLP cannot inspect or block that action. Learn classifies files when they are created or modified. Microsoft has not stated whether the new behaviour applies to existing rules on arrival, which apps it covers, or what users see.

The roadmap record lists the item as **Rolling out**, General Availability, with a target of May CY2026. It lists the GCC, GCC High and DoD clouds and the Web platform. No Message Center post was supplied for this item.

## Why it matters

Print, copy to USB and copy to a network share are device activities Endpoint DLP rules can block, and Learn documents a gap for content that has never been saved locally. A user who drafts sensitive text in a new document and sends it straight to a printer or USB stick is the case this item addresses. Until it works in your tenant, Learn's statement stands: such a direct save to USB is not inspected or blocked.

Microsoft has not stated what happens on arrival. If the protection attaches to existing rules, users may meet new warnings or blocks on unsaved work, which lands on the helpdesk. If it needs configuring, the gap stays open until someone does. Either way, test it before telling auditors the gap is closed.

## Risk assessment

**Data exposure**
- Learn states that Endpoint DLP cannot scan or classify data never saved to the local device, so unsaved sensitive content printed or saved straight to USB is outside current rules. The roadmap item is intended to close this; whether it has reached a given device is not documented.

**Security & identity**
- No change: the roadmap item describes no new identity, permission or sign-in behaviour.

**Autonomy & actions**
- The actions are the existing Endpoint DLP activity restrictions (audit, warn, block). Learn documents block, warn or audit for **Print**, **Copy to USB removable device** and **Copy to a network share**. Microsoft has not said whether unsaved content uses the same rule actions or a separate setting.

**Change & support**
- If existing Block or Block with override rules start to act on unsaved documents, users will see blocks they have not met before while their work is still unsaved. Microsoft has not described what happens to the unsaved content when an action is blocked.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as **Included** in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. This roadmap item is an Endpoint DLP capability; Microsoft publishes nothing specific to unsaved-content protection.

**Meter.** Microsoft documents no meter for Endpoint DLP activity restrictions at the time of writing (November 2026).

**Indirect costs.** Admin time to test existing device rules against unsaved documents, and helpdesk time if users meet new blocks.

## Scope

- **Users and devices:** an Endpoint DLP policy is enforced on an endpoint only when both the user and the device are in the policy's scope, per Learn.
- **Platforms:** Learn lists Print, Copy to USB removable device and Copy to a network share as supported on Windows 10 and Windows 11 (21H2, 22H2) on x64, Windows 11 (21H2, 22H2) on ARM64, and the three latest released macOS versions. The roadmap record lists the platform as Web. Which platforms get unsaved-content protection is not yet documented.
- **Clouds:** the roadmap record lists GCC, GCC High and DoD.
- **Rollout:** the record lists the item as Rolling out, with a target of May CY2026.
- **Roles:** the `EndpointDlpRestrictions` parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID.

## Governance guidance

### Before rollout
- List the device-scoped DLP rules that set **Print**, **Copy to a removable USB device** or **Copy to a network share** to Block or Block with override; these are the rules whose reach this item describes extending.
- Check that the users and devices you expect are both in each rule's scope, since Learn says a policy is enforced only when both are.
- Brief the helpdesk that blocks may start to appear on documents users have not yet saved.

### At rollout
- Test on one onboarded pilot device: put test sensitive data in a new, unsaved Word document, then try to print it and save it straight to a USB drive, and record what the rule does.
- Use **Audit** in a test rule for these activities before relying on Block, so you see whether unsaved content is matched at all.

### After rollout
- Recheck the **Endpoint DLP and Unsaved Files** section of Learn's Endpoint DLP page; until it changes, treat the documented gap as open.
- Repeat the pilot test on macOS devices before assuming the protection covers them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a device rule audits, warns or blocks printing and copying to USB or network shares</strong><br><small class="controls__note">Settings include Print, RemovableMedia and NetworkShare. Applies to users and devices both in scope. Learn does not yet say whether it covers unsaved content.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › Devices › rule › Actions › Audit or restrict activities on devices › Apply restrictions to specific activity <a href="https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &quot;&lt;rule name&gt;&quot; -EndpointDlpRestrictions @{&quot;Setting&quot;=&quot;RemovableMedia&quot;; &quot;Value&quot;=&quot;Block&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for protection of unsaved content</strong><br><small>Tenant</small><br><small class="controls__note">Not listed under Endpoint settings or in Set-PolicyConfig at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The activity restrictions are set per rule. On the PowerShell side, using Block or Warn in `EndpointDlpRestrictions` also needs the `NotifyUser` parameter, and the parameter requires the Compliance Administrator or Compliance Data Administrator role in Microsoft Entra ID. Endpoint settings (**Data loss prevention** > **Overview** > **Data loss prevention settings** > **Endpoint settings**) apply to all DLP policies for devices; at the time of writing (November 2026) Learn lists no setting there for unsaved content, and `Set-PolicyConfig` lists no parameter for it. Microsoft Learn does not yet say whether the per-rule restrictions apply to unsaved content.

## Open questions

- Does unsaved-content protection apply automatically to existing rules that restrict print, USB or network share copies, or does it need a new setting? Watch Message center and the Endpoint DLP Learn page.
- Which apps does it cover: Office apps only, or any app on the device?
- Which platforms get it? The roadmap lists Web; Learn documents these activities on Windows and macOS.
- What happens to the user's unsaved content when an action is blocked, and how is the event shown in Activity explorer without a file path?
- The roadmap record lists only GCC, GCC High and DoD. Is there a separate item for the worldwide cloud?

<!-- rationale
risk: Medium. Microsoft Learn still says Endpoint DLP cannot scan or classify data never saved on the device, so unsaved sensitive content can leave by USB uninspected until this works; whether existing rules gain it automatically is not stated.
cost: Low. Endpoint DLP is included in Microsoft 365 E5/A5/G5 and the Purview suites the service description lists; the known cost is admin time to test rules. No price specific to this feature is published.
impact: Medium. Users on onboarded devices who fall under rules restricting print, USB or network share copies would notice new warnings or blocks on unsaved work; others see nothing.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Purview portal route reaches the device activity restrictions in the custom policy wizard. | Found: Select the Custom from the Categories then Custom policy template from Regulations. ... Select Full directory under Admin units. ... Scope the location to Devices only. ... Select Audit or restrict activities on devices. ... Select Apply restrictions to specific activity | Fix: Replace the path with 'Data Loss Prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom policy > Admin units > Full directory > Devices > rule > Actions > Audit or restrict activities on devices > Apply restrictions to specific activity'. The existing steps are in the documented order; the omitted headings and administrative-scope selection warrant only a minor. The path may end at the restrictions control without reproducing the sample rule's condition. | Source: https://learn.microsoft.com/purview/dlp-create-policy-edlp-scan-fails
- [contradicted, minor] Governance guidance: Before rollout, second bullet / consistency: The checklist directs administrators to check user and device policy scope, but no controls-table row governs that scope. | Found: Check that the users and devices you expect are both in each rule's scope ...; controls rows: Whether a device rule audits, warns or blocks printing and copying to USB or network shares; Separate switch for protection of unsaved content. | Fix: Remove the Before rollout bullet beginning 'Check that the users and devices you expect are both in each rule's scope'. User/device policy scoping has no corresponding control row; the verified scope requirement can remain in Scope and the existing control's note.
-->
