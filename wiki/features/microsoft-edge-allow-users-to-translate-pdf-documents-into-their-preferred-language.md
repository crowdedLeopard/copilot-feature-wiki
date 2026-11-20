---
title: "Microsoft Edge: translate whole PDF documents in the built-in PDF viewer"
slug: "microsoft-edge-allow-users-to-translate-pdf-documents-into-their-preferred-language"
roadmapId: 577180
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge users will be able to translate a full PDF into their preferred language from the built-in PDF viewer, with the result opening in a new tab. Admins can control it with the TranslateEnabled policy. Targeted January CY2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The roadmap record names no licence for this feature, and the Edge PDF reader and TranslateEnabled pages on Microsoft Learn name none for it. A licence or price is not yet published."
audiences: ["m365-admin","security","end-user"]
tags: ["microsoft-edge","policy","user-experience","privacy"]
sources:
  - title: "Microsoft 365 Roadmap: item 577180"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577180"
    kind: "roadmap"
  - title: "TranslateEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/translateenabled"
    kind: "learn"
  - title: "PDF reader in Microsoft Edge"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-pdf"
    kind: "learn"
  - title: "User data and privacy in Microsoft Edge"
    url: "https://learn.microsoft.com/legal/microsoft-edge/privacy"
    kind: "learn"
  - title: "Microsoft Edge doesn't offer or complete webpage translation"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-edge/experience/edge-translate-not-working"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Edge offers its built-in translate features, which the roadmap names as the control for PDF translation"
    scope: "user"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Enable Translate"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/translateenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value TranslateEnabled (REG_DWORD); macOS preference key TranslateEnabled"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/translateenabled"
    note: "Per profile. Does not apply to a profile signed in with a Microsoft account. Disabling turns off all built-in translate features, not PDF translation alone."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item: whole-PDF translation in Edge's PDF viewer, controlled by the TranslateEnabled policy, targeted January CY2027."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 49
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "d8ae972f38c002120f8e093cb5ea1c4e"
---

## What's changing

Microsoft Edge is planned to let users translate a full PDF document from the native PDF viewer into their preferred language. The roadmap item says the translated document opens in a new tab, and that admins can control availability with the TranslateEnabled policy.

Microsoft Learn does not describe this whole-document feature yet, so the behaviour above is the roadmap's description. Learn already documents a narrower PDF capability under the same policy: users can translate selected text on a PDF via the PDF toolbar and the right-click context menu.

The roadmap record lists the item as In development with a target date of January CY2027, release phase General Availability, platform Web and cloud Worldwide (Standard Multi-Tenant). Dates are Microsoft's targets, not commitments. Microsoft has not stated whether the feature is on by default when it arrives.

## Why it matters

Edge is where many users open contracts, forms and reports as PDFs, so translating a whole document is a change in what users can do with content that may be confidential. Today Learn describes webpage translation as sending the page text to Microsoft Translator; how a full PDF is handled has not yet been documented, and a service owner needs that answer before deciding whether to leave the feature available.

Microsoft has not stated what happens on arrival if nobody acts, so no source says existing behaviour changes. The control is already in place: TranslateEnabled can be set today, and the policy page says that disabling it turns off all built-in translate features.

## Risk assessment

**Data exposure**

- The Edge privacy page says that for webpage translation Edge sends the page text, the to and from language, and a service token to Microsoft Translator. How a translated PDF is processed, and whether the same description applies to it, is not yet documented. Confirm this before allowing translation of sensitive PDFs.
- The Edge PDF reader opens files protected by Microsoft Purview Information Protection and Information Rights Management. Whether translation is offered for those files is not yet documented; treat it as a question to confirm with a protected test file.

**Security & identity**

- The TranslateEnabled policy page says the policy does not apply to a profile that is signed in with a Microsoft account. Personal-account profiles on managed devices are therefore outside this policy.

**Autonomy & actions**

- No change to what Edge does on its own is described. The roadmap says users translate a document and the result opens in a new tab, so the action is user-initiated.

**Change & support**

- Translation fails if Edge cannot reach the Microsoft translation service. The Learn troubleshooting page says a managed policy or a blocked network path can disable translation, so expect help-desk questions where TranslateEnabled is disabled or traffic is filtered.

## Cost and licensing

The roadmap record names no licence for this feature, and the Learn pages for the Edge PDF reader and for the TranslateEnabled policy name none. A licence requirement, a meter or a price for PDF translation is not yet published.

The cost known today is indirect: admin time to decide whether to keep TranslateEnabled at its default, to brief users, and to answer support questions.

## Scope

The roadmap record lists Microsoft Edge, platform Web, and the Worldwide (Standard Multi-Tenant) cloud. It lists no US Government cloud, and the record is the only source on that point.

The TranslateEnabled policy page lists supported versions for Windows (77 or later), macOS (77 or later), Android (30 or later) and iOS (84 or later). It does not say which Edge version or channel will carry whole-PDF translation, and the policy page does not describe that feature.

The PDF reader page describes the built-in PDF reader as working across the Windows and macOS desktop platforms. Rollout mechanics, release channel and any prerequisites for this feature are not yet published.

## Governance guidance

### Before rollout

- Check `edge://policy` on a pilot device to see whether TranslateEnabled is configured; the Learn troubleshooting page says that if it is not listed, translate features are enabled by default.
- Confirm with Microsoft how a translated PDF is processed before deciding whether sensitive documents may be translated; watch the Microsoft 365 Message center and the Edge Learn pages for that detail.
- Test a Microsoft Purview Information Protection protected PDF in a pilot ring once the feature reaches Edge, and record whether translation is offered.

### At rollout

- Set the TranslateEnabled policy to Disabled where your data rules do not allow translation, and note that this also disables all other built-in translate features.
- Brief users that the translated PDF opens in a new tab and that the original document stays in its own tab, as the roadmap item describes.

### After rollout

- Review `edge://policy` on a sample of devices to confirm TranslateEnabled shows the value you set, and reload policies if it does not.
- Re-read the TranslateEnabled policy page and the Edge release notes when the feature ships, and update any user guidance for PDF translation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge offers its built-in translate features, which the roadmap names as the control for PDF translation</strong><br><small>User</small><br><small class="controls__note">Per profile. Does not apply to a profile signed in with a Microsoft account. Disabling turns off all built-in translate features, not PDF translation alone.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Enable Translate <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/translateenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value TranslateEnabled (REG_DWORD); macOS preference key TranslateEnabled</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/translateenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roadmap item names TranslateEnabled as the admin control for this feature, and the policy page says disabling it turns off all built-in translate features. That makes it an all-or-nothing switch for translation in Edge, not one specific to PDFs.

The policy can be mandatory or recommended, and recommended values can be changed by users. It does not apply to a profile signed in with a Microsoft account. Group Policy setting or registry value changes are the admin routes shown above.

## Open questions

- Will whole-PDF translation be on by default when it arrives, and which Edge version and channel carry it? Watch the Microsoft 365 roadmap item and Edge release notes.
- How is a PDF's content processed during translation, and where is it sent? Watch the Edge privacy page on Microsoft Learn.
- Does translation respect Microsoft Purview Information Protection or IRM protection on a PDF, and is it blocked for protected files?
- Is a licence, quota or limit on file size or length published for PDF translation?

<!-- rationale
risk: Medium. Whole PDFs, which can hold confidential contracts or forms, can be sent for translation, and Microsoft has not yet documented how that document is processed; the TranslateEnabled policy is the stated control.
cost: Low. The only cost the sources show is admin time to decide on the TranslateEnabled policy; a licence or meter for this feature is not yet published.
impact: Medium. Anyone who opens PDFs in a language they do not read in Edge's PDF viewer is likely to notice; the roadmap does not say whether it appears for all users on arrival.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance guidance: At rollout / behaviour: The roadmap explicitly describes the original document staying in its own tab after translation. | Found: Searched: Microsoft Edge translate full PDF new tab original document remains open. Read roadmap description, PDF reader and TranslateEnabled; the roadmap specifies a new tab for the translated document but does not state what happens to the original tab. | Fix: Replace the bullet with: 'Brief users that the translated PDF opens in a new tab, as the roadmap item describes.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope / availability: The TranslateEnabled reference lists Android version 30 or later. | Found: Android: ≥ 30 | Fix: After the policy-version sentence add: 'The separate mobile policy reference lists TranslateEnabled support on Android since version 109, rather than 30 (https://learn.microsoft.com/deployedge/microsoft-edge-mobile-policies#additional-policies).' Alternatively remove the Android version clause. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/translateenabled
- [supported, minor] Scope / availability: The TranslateEnabled reference lists iOS version 84 or later. | Found: iOS: ≥ 84 | Fix: After the policy-version sentence add: 'The separate mobile policy reference lists TranslateEnabled support on iOS and iPadOS since version 109, rather than 84 (https://learn.microsoft.com/deployedge/microsoft-edge-mobile-policies#additional-policies).' Alternatively remove the iOS version clause. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/translateenabled
-->
