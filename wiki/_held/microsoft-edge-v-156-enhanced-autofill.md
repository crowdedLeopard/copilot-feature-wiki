---
title: "Microsoft Edge: Enhanced Autofill adds passports and driver's licences on desktop"
slug: "microsoft-edge-v-156-enhanced-autofill"
roadmapId: 554938
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge 156 on desktop can autofill passports, driver's licences and other document types as well as addresses. Microsoft has not stated the default; the AutofillSettings policy can block identity documents."
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
    note: "Set blocked_types to include identity_docs. Per profile; mandatory only. Documents the policy as supported from Edge 154."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-22"
    note: "First briefing: Enhanced Autofill launched in Edge 156 on desktop; AutofillSettings with identity_docs is the documented policy to block identity documents."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 41
  unconfirmed: 0
  contradicted: 8
  attempts: 1
  hash: "3b63462743f0bca90fa52a19b92927dc"
---

## What's changing

Microsoft Edge can now autofill more document types on desktop. The roadmap item states: "For desktop users, Microsoft Edge can now autofill additional document types—including passports, driver’s licenses, and other specialized forms—on top of your saved addresses." The Microsoft Edge release notes list it as "Enhanced Autofill" under Feature Updates for version 156.0.4314.42, released on 22 October 2026 to the Stable channel.

Microsoft Learn describes the feature only through that release note entry and the roadmap text. It does not yet have its own page, so what a user sees when filling a form, and where saved documents are kept, is not described here.

The roadmap record gives the status as Launched, the target as October CY2026, the release phase as General Availability, the platform as Web and the cloud as Worldwide (Standard Multi-Tenant). Microsoft has not stated whether the feature is on by default or whether each user chooses to use it.

## Why it matters

Passports and driver's licences are among the most sensitive personal data a browser profile can hold. If Edge on your desktops now fills identity documents, your acceptable-use guidance for browser-saved data may need to say whether staff may store them there.

Microsoft has not stated what happens on arrival, so plan on the change being present on Edge 156 and later desktops until you have checked. Microsoft documents a policy, AutofillSettings, that can block identity documents by URL pattern, and the wiki's view is that the decision to use it is best taken now, before users build up saved documents.

## Risk assessment

**Data exposure**

- Identity document data (the AutofillSettings page names passports, driver's licenses and national IDs under its `identity_docs` type) can be filled into and saved from web forms. Microsoft's release note does not say where saved documents are stored or whether they roam, so confirm that before you answer questions about it.
- AutofillSettings blocks both filling and saving for a data type on the URL patterns you list. If you do not configure it, the page states that no AutoFill data types are blocked by domain.

**Security & identity**

- Filling identity documents into the wrong site is a phishing and over-sharing risk. `identity_docs` in AutofillSettings, with a URL pattern of `*`, is the documented way to switch the type off; the page says the wildcard matches any URL with any scheme, port and path.

**Autonomy & actions**

- The release note describes no agent or autonomous action: it describes autofill of document types for desktop users.

**Change & support**

- Expect questions about why Edge offers document fields it did not before. The AutofillSettings page lists support from Edge 154 on Windows, macOS, Android and iOS.
- The Edge 156 release notes list AutofillAddressEnabled as deprecated. Its Learn page says it is currently supported but will become obsolete in a future release, so review any existing address-autofill policy you rely on.

## Cost and licensing

The Edge 156 release note entry for Enhanced Autofill names no licence, plan or meter, and licensing for this feature is not yet published. The roadmap record lists no licence either.

The cost the sources show is administrator time: deciding whether to block identity documents, writing the AutofillSettings value and telling users. No price, credit rate or limit is published for this feature.

## Scope

The roadmap item names desktop users of Microsoft Edge, and the release note appears under Edge version 156.0.4314.42 for the Stable channel, dated 22 October 2026. The roadmap record lists the platform as Web, the release phase as General Availability and the cloud as Worldwide (Standard Multi-Tenant); no other cloud is listed.

The AutofillSettings policy is documented as supported on Windows, macOS, Android and iOS from version 154, can be set as mandatory but not recommended, and applies per profile. Microsoft Learn names no admin role or prerequisite for the feature itself.

## Governance guidance

### Before rollout

- Decide whether staff may save identity documents (passports, driver's licences, national IDs) in Edge, and record the answer in your acceptable-use or endpoint guidance.
- Check which devices run Edge 156 or later on desktop, using your Edge update reporting, so you know who already has the feature.
- Review any existing use of the deprecated AutofillAddressEnabled policy and plan its replacement with AutofillSettings, as that policy's page directs.

### At rollout

- Set AutofillSettings with the `identity_docs` blocked type and the URL pattern `*` through Group Policy or the registry if you decide to block identity documents everywhere.
- Add narrower URL patterns instead of `*` where you want to allow identity documents on named sites only, remembering the page says blocked types from multiple matching entries are combined.
- Tell users what changes, including that blocking also removes the prompt to save or import new data of that type on those sites.

### After rollout

- Test a form on a managed desktop to confirm the policy takes effect, and review the Edge release notes and Message center for any default-state or licensing statement.
- Revisit the policy each time Microsoft publishes a Learn page for Enhanced Autofill.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which AutoFill data types, including identity documents, are blocked on specific sites</strong><br><small>User</small><br><small class="controls__note">Set blocked_types to include identity_docs. Per profile; mandatory only. Documents the policy as supported from Edge 154.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Block AutoFill data types for specific sites <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value AutofillSettings (REG_SZ)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

AutofillSettings is a dictionary policy: each entry has a `url_pattern` and a `blocked_types` list, and unconfigured means no AutoFill data types are blocked by domain. Its `identity_docs` type uses the same examples as the roadmap item, but Microsoft Learn does not state that Enhanced Autofill is governed by it, so confirm on a test device.

The deprecated AutofillAddressEnabled policy remains supported for now; its page says to use AutofillSettings with `contact_info`, `identity_docs` and `travel` blocked to keep the behaviour of disabling AutoFill for addresses.

## Open questions

- Is Enhanced Autofill on by default, or does each user opt in? Watch the Edge release notes and Message center for a statement.
- Does Microsoft Edge for Business or any licence govern the feature? No licence is published at the time of writing (November 2026).
- Where are saved identity documents stored, and do they roam with Edge sync? Watch for a Learn page on Enhanced Autofill.
- Does AutofillSettings with `identity_docs` cover every document type Enhanced Autofill offers, including the "other specialized forms" in the roadmap text?

<!-- rationale
risk: Medium. Edge can now autofill identity documents such as passports and driver's licences, and the documented control, AutofillSettings, blocks no AutoFill data type by domain until an administrator configures it.
cost: Low. The Learn release note names no licence or meter, so the only cost the sources show is administrator time to decide on the policy. Licensing for this feature is not yet published.
impact: Medium. The roadmap item aims the change at desktop Edge users who fill in web forms; Microsoft has not stated whether it is on by default.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing / absence: Microsoft Learn describes Enhanced Autofill only through the cited Edge 156 release note entry and roadmap text. | Found: Enhanced Autofill. For desktop users, Microsoft Edge can now autofill additional document types—including passports, driver’s licenses, and other specialized forms—on top of your saved addresses. Note: This is a controlled feature rollout. | Fix: Remove 'Microsoft Learn describes the feature only through that release note entry and the roadmap text.' Keep the narrower statement that no dedicated Learn page was found; other release-note entries also describe the feature. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-beta-channel#version-1480396712-april-16,-2026
- [contradicted, blocker] What's changing; Open questions: saved documents and sync / absence: Where saved autofill documents are stored and whether they roam remains an undocumented question. | Found: If you're signed in and syncing, your autofill data is synced across all versions of Microsoft Edge where you're signed in with the same credentials. When syncing, all autofill data is stored on encrypted Microsoft servers. | Fix: Replace the storage/sync gap with: 'Microsoft's privacy page states that, when signed in and syncing, autofill data syncs across Edge versions signed in with the same credentials, and all autofill data is stored on encrypted Microsoft servers when syncing.' Cite https://learn.microsoft.com/legal/microsoft-edge/privacy#autofill. Narrow the open question to 'Where are identity documents stored locally?' | Source: https://learn.microsoft.com/legal/microsoft-edge/privacy#autofill
- [contradicted, blocker] controls[0].note and scope; summary; Risk assessment; Governance guidance: At rollout / applicability: AutofillSettings can block identity documents for the browser profiles in scope without any account-type qualification. | Found: Per Profile: Yes Applies to a profile that is signed in with a Microsoft account: No | Fix: Add to controls[0].note and the prose recommending this policy: 'This policy does not apply to profiles signed in with a personal Microsoft account.' Qualify the summary's policy claim the same way. Retain the documented Group Policy path and registry value. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings
- [contradicted, blocker] Governance controls; Governance guidance: Before rollout / behaviour: The page recommends blocking contact_info, identity_docs and travel to preserve disabled address autofill but omits the required wildcard URL-pattern qualification. | Found: To keep the current behavior of disabling AutoFill for addresses, configure AutofillSettings with "url_pattern" set to "*" and "blocked_types" set to ["contact_info", "identity_docs", "travel"]. | Fix: Replace the final Governance controls sentence with: 'The deprecated AutofillAddressEnabled policy remains supported for now; its page says to configure AutofillSettings with url_pattern set to "*" and blocked_types set to ["contact_info", "identity_docs", "travel"] to preserve disabled address autofill.' Retain the cited AutofillAddressEnabled page. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofilladdressenabled
- [contradicted, blocker] Governance controls / absence: Microsoft Learn does not state that AutofillSettings governs Enhanced Autofill identity documents. | Found: "identity_docs": Blocks filling and saving of identity documents (for example, passports, driver's licenses, and national IDs). | Fix: Replace 'Its identity_docs type uses the same examples as the roadmap item, but Microsoft Learn does not state that Enhanced Autofill is governed by it, so confirm on a test device.' with 'The identity_docs type blocks filling and saving identity documents, including passports, driver's licences and national IDs, on matching sites. It does not apply to profiles signed in with a personal Microsoft account.' Keep the separate testing advice. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings
- [contradicted, blocker] Governance guidance: At rollout / behaviour: Replacing * with narrower URL patterns allows identity documents on named sites only. | Found: Setting this policy allows you to specify which AutoFill data types are blocked on specific URL patterns. If a URL matches multiple pattern entries in the list, the blocked types from all matching entries are combined. | Fix: Replace the bullet with: 'Use narrower URL patterns instead of "*" to block identity documents only on matching sites; sites that match no entry remain unblocked by this policy. Blocked types from multiple matching entries are combined.' Do not describe these patterns as an allowlist. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/autofillsettings
- [contradicted, blocker] Risk assessment: Change & support / behaviour: The Edge 156 change introduces document fields that Edge did not offer before. | Found: Enhanced Autofill. For desktop users, Microsoft Edge can now autofill additional document types-including passports, driver's licenses, and other specialized forms-on top of your saved addresses. Note: This is a controlled feature rollout. | Fix: Replace 'Expect questions about why Edge offers document fields it did not before.' with 'Expect questions about Edge offering additional document fields.' Do not imply that this capability first appeared in Edge 156; the May 2026 Edge 148 Stable notes already describe its controlled rollout. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel#version-1480396754-may-07,-2026-stable
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks administrators to check Edge update reporting, but the controls table has no reporting row. | Found: Check which devices run Edge 156 or later on desktop, using your Edge update reporting Table: Which AutoFill data types, including identity documents, are blocked on specific sites | Fix: Remove 'using your Edge update reporting' from the device-version check so it does not direct readers to a reporting control absent from the table. Do not add a control row.
-->
