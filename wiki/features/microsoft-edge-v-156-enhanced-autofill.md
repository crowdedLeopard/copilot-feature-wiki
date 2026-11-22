---
title: "Microsoft Edge: Enhanced Autofill adds passports and driver's licences on desktop"
slug: "microsoft-edge-v-156-enhanced-autofill"
roadmapId: 554938
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge 156 on desktop can autofill passports, driver's licences and other document types as well as addresses. Microsoft has not stated the default; AutofillSettings can block identity documents, but not on personal Microsoft account profiles."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Edge 156 release note entry for Enhanced Autofill names no licence, plan or meter."
audiences: ["m365-admin","security","end-user"]
tags: ["microsoft-edge","autofill","privacy","policy"]
sources:
  - title: "Microsoft 365 Roadmap 554938"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=554938"
    kind: "roadmap"
  - title: "Microsoft Edge release notes for Stable and Extended Stable Channels"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "User data and privacy in Microsoft Edge"
    url: "https://learn.microsoft.com/legal/microsoft-edge/privacy"
    kind: "learn"
  - title: "AutofillSettings"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings"
    kind: "learn"
  - title: "AutofillAddressEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofilladdressenabled"
    kind: "learn"
videos: []
related: ["microsoft-edge-select-password-from-the-context-menu","microsoft-edge-autolaunch-opt-in-experience-for-managed-devices"]
controls:
  - governs: "Which AutoFill data types, including identity documents, are blocked on specific sites"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Block AutoFill data types for specific sites"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value AutofillSettings (REG_SZ)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings"
    note: "Set blocked_types to include identity_docs. Per profile; mandatory only. Does not apply to profiles signed in with a personal Microsoft account. Documents the policy as supported from Edge 154."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-22"
    note: "First briefing: Enhanced Autofill launched in Edge 156 on desktop; AutofillSettings with identity_docs is the documented policy to block identity documents."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: storage and sync statement, personal Microsoft account exclusion for AutofillSettings, URL-pattern wording and the AutofillAddressEnabled replacement settings."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 50
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "779e9220ff428408a04766b4227f8855"
---

## What's changing

Microsoft Edge can now autofill more document types on desktop. The roadmap item states: "For desktop users, Microsoft Edge can now autofill additional document types—including passports, driver’s licenses, and other specialized forms—on top of your saved addresses." The Microsoft Edge release notes list it as "Enhanced Autofill" under Feature Updates for version 156.0.4314.42, released on 22 October 2026 to the Stable channel. The same entry also appears in earlier release notes, including the Edge 148 Stable notes of 7 May 2026, which call it a controlled feature rollout.

No dedicated Microsoft Learn page for Enhanced Autofill was found at the time of writing (November 2026), so what a user sees when filling a form is not described here beyond the release note text. Microsoft's privacy page states that, when signed in and syncing, autofill data syncs across Edge versions signed in with the same credentials, and all autofill data is stored on encrypted Microsoft servers when syncing. Where identity documents are stored locally is not described.

The roadmap record gives the status as Launched, the target as October CY2026, the release phase as General Availability, the platform as Web and the cloud as Worldwide (Standard Multi-Tenant). Microsoft has not stated whether the feature is on by default or whether each user chooses to use it.

## Why it matters

Passports and driver's licences are among the most sensitive personal data a browser profile can hold. If Edge on your desktops now fills identity documents, your acceptable-use guidance for browser-saved data may need to say whether staff may store them there.

Microsoft has not stated what happens on arrival, so plan on the change being present on Edge 156 and later desktops until you have checked. Microsoft documents a policy, AutofillSettings, that can block identity documents by URL pattern, and the wiki's view is that the decision to use it is best taken now, before users build up saved documents. The policy does not apply to profiles signed in with a personal Microsoft account.

## Risk assessment

**Data exposure**

- Identity document data (the AutofillSettings page names passports, driver's licenses and national IDs under its `identity_docs` type) can be filled into and saved from web forms. Microsoft's privacy page says autofill data is stored on encrypted Microsoft servers when syncing is on; where identity documents are stored locally is not described.
- AutofillSettings blocks both filling and saving for a data type on the URL patterns you list. If you do not configure it, the page states that no AutoFill data types are blocked by domain.

**Security & identity**

- Filling identity documents into the wrong site is a phishing and over-sharing risk. `identity_docs` in AutofillSettings, with a URL pattern of `*`, is the documented way to switch the type off; the page says the wildcard matches any URL with any scheme, port and path. The policy does not apply to profiles signed in with a personal Microsoft account.

**Autonomy & actions**

- The release note describes no agent or autonomous action: it describes autofill of document types for desktop users.

**Change & support**

- Expect questions about Edge offering additional document fields. The AutofillSettings page lists support from Edge 154 on Windows, macOS, Android and iOS.
- The Edge 156 release notes list AutofillAddressEnabled as deprecated. Its Learn page says it is currently supported but will become obsolete in a future release, so review any existing address-autofill policy you rely on.

## Cost and licensing

The Edge 156 release note entry for Enhanced Autofill names no licence, plan or meter, and licensing for this feature is not yet published. The roadmap record lists no licence either.

The cost the sources show is administrator time: deciding whether to block identity documents, writing the AutofillSettings value and telling users. No price, credit rate or limit is published for this feature.

## Scope

The roadmap item names desktop users of Microsoft Edge, and the release note appears under Edge version 156.0.4314.42 for the Stable channel, dated 22 October 2026. The roadmap record lists the platform as Web, the release phase as General Availability and the cloud as Worldwide (Standard Multi-Tenant); no other cloud is listed.

The AutofillSettings policy is documented as supported on Windows, macOS, Android and iOS from version 154, can be set as mandatory but not recommended, and applies per profile. It does not apply to profiles signed in with a personal Microsoft account. Microsoft Learn names no admin role or prerequisite for the feature itself.

## Governance guidance

### Before rollout

- Decide whether staff may save identity documents (passports, driver's licences, national IDs) in Edge, and record the answer in your acceptable-use or endpoint guidance.
- Check which devices run Edge 156 or later on desktop, so you know who already has the feature.
- Review any existing use of the deprecated AutofillAddressEnabled policy and plan its replacement with AutofillSettings, as that policy's page directs.

### At rollout

- Set AutofillSettings with the `identity_docs` blocked type and the URL pattern `*` through Group Policy or the registry if you decide to block identity documents everywhere. The policy does not apply to profiles signed in with a personal Microsoft account.
- Use narrower URL patterns instead of `*` to block identity documents only on matching sites; sites that match no entry remain unblocked by this policy. Blocked types from multiple matching entries are combined.
- Tell users what changes, including that blocking also removes the prompt to save or import new data of that type on those sites.

### After rollout

- Test a form on a managed desktop to confirm the policy takes effect, and review the Edge release notes and Message center for any default-state or licensing statement.
- Revisit the policy each time Microsoft publishes a Learn page for Enhanced Autofill.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which AutoFill data types, including identity documents, are blocked on specific sites</strong><br><small>User</small><br><small class="controls__note">Set blocked_types to include identity_docs. Per profile; mandatory only. Does not apply to profiles signed in with a personal Microsoft account. Documents the policy as supported from Edge 154.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Block AutoFill data types for specific sites <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value AutofillSettings (REG_SZ)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

AutofillSettings is a dictionary policy: each entry has a `url_pattern` and a `blocked_types` list, and unconfigured means no AutoFill data types are blocked by domain. The `identity_docs` type blocks filling and saving identity documents, including passports, driver's licences and national IDs, on matching sites. It does not apply to profiles signed in with a personal Microsoft account.

The deprecated AutofillAddressEnabled policy remains supported for now; its page says to configure AutofillSettings with url_pattern set to "*" and blocked_types set to ["contact_info", "identity_docs", "travel"] to preserve disabled address autofill.

## Open questions

- Is Enhanced Autofill on by default, or does each user opt in? Watch the Edge release notes and Message center for a statement.
- Does Microsoft Edge for Business or any licence govern the feature? No licence is published at the time of writing (November 2026).
- Where are identity documents stored locally? Watch for a Learn page on Enhanced Autofill.
- Does AutofillSettings with `identity_docs` cover every document type Enhanced Autofill offers, including the "other specialized forms" in the roadmap text?

<!-- rationale
risk: Medium. Edge can now autofill identity documents such as passports and driver's licences, and the documented control, AutofillSettings, blocks no AutoFill data type by domain until an administrator configures it.
cost: Low. The Learn release note names no licence or meter, so the only cost the sources show is administrator time to decide on the policy. Licensing for this feature is not yet published.
impact: Medium. The roadmap item aims the change at desktop Edge users who fill in web forms; Microsoft has not stated whether it is on by default.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist asks administrators to review appears in the controls table. | Found: Checklist: "Review any existing use of the deprecated AutofillAddressEnabled policy". The controls table has one row, for AutofillSettings, and none for AutofillAddressEnabled. | Fix: Remove the Before rollout checklist bullet beginning 'Review any existing use of the deprecated AutofillAddressEnabled policy'. Keep the verified deprecation and replacement information in Risk assessment and Governance controls; do not add a control row.
-->
