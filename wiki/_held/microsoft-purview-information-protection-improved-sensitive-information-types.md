---
title: "Microsoft Purview: improved built-in sensitive information types"
slug: "microsoft-purview-information-protection-improved-sensitive-information-types"
roadmapId: 579195
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to improve its built-in sensitive information types so they detect sensitive data more precisely. Learn gives no detail yet; admins relying on them in DLP or labelling should plan to retest."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for the improvement. The sensitive information types page says an E5 licence is required for credential scanning SITs; its Licensing section names no licence for other built-in SITs."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","sensitive-information-types","information-protection","dlp","classifiers","auto-labeling"]
sources:
  - title: "Microsoft 365 Roadmap 579195"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579195"
    kind: "roadmap"
  - title: "Learn about sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"
    kind: "learn"
  - title: "Create custom sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    kind: "learn"
  - title: "Create a custom sensitive information type using PowerShell"
    url: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type-in-scc-powershell"
    kind: "learn"
  - title: "Get-DlpSensitiveInformationType"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype?view=exchange-ps"
    kind: "learn"
  - title: "What's new in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/whats-new"
    kind: "learn"
videos: []
related: ["microsoft-purview-unified-classification-management-experience","sensitivity-labels","microsoft-purview-information-protection-auto-labeling-for-legacy-office-files","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Which sensitive information types exist in the tenant and their recommended confidence"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types"
      docs: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    api:
      kind: "powershell"
      call: "Get-DlpSensitiveInformationType -Identity \"Credit Card Number\" | Format-List"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype?view=exchange-ps"
    note: "Read-only inspection in Security & Compliance PowerShell; it does not change a SIT. The portal page also shows match counts and the Test option."
  - governs: "Custom copies of built-in sensitive information types"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types > sensitive information type > Copy"
      docs: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    api:
      kind: "powershell"
      call: "New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('PathToUnicodeXMLFile'))"
      docs: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type-in-scc-powershell"
    note: "Creates a custom SIT you own; it does not edit the built-in one. Some SITs can't be copied."
  - governs: "Opting in to, opting out of or delaying the improved built-in SITs"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T19:05:12"
changes:
  - date: "2026-11-20"
    note: "New briefing: roadmap plans improved built-in sensitive information types; Learn gives no detail yet, so the page covers how SITs work today and what to retest."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 49 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 47
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "61825aaa41688702bfe1c8b3fa87a4af"
---

## What's changing

The Microsoft 365 roadmap item says Microsoft is improving its out-of-the-box sensitive information types (SITs) "to identify sensitive data more precisely and reliably". SITs are the pattern-based classifiers that detect things such as social security, credit card or bank account numbers.

Microsoft Learn does not yet describe this improvement at the time of writing (November 2026), so which SITs change, and how their detection changes, is not stated. Everything about behaviour below is the roadmap's description plus what Learn documents about SITs in general.

Learn documents that built-in SITs are created by Microsoft, show up in the Microsoft Purview portal by default and can't be edited, though they can be copied as templates for custom SITs.

The roadmap record gives the status as In development, with a preview targeted for January CY2027 and general availability targeted for March CY2027. It lists Worldwide (Standard Multi-Tenant) and the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

Built-in SITs are inputs to other controls. Learn lists Data Loss Prevention policies, sensitivity labels, retention labels, insider risk management, communication compliance and auto-labeling policies among the places SITs are used. A change in what a built-in SIT matches therefore changes what those policies see, in whichever direction the improvement goes.

Microsoft has not stated what happens on arrival, or whether existing policies pick up the improved definitions without an admin acting. The sensible position is to plan for match counts shifting around the preview window and to have a baseline to compare against.

## Risk assessment

**Data exposure**
- Built-in SITs are referenced by DLP, labelling, retention, insider risk and communication compliance policies. If the improved definitions match differently, items those policies act on can change, and the roadmap does not say whether matches increase or decrease. The first row of the controls table is where you list the SITs in use.
- Learn says a high confidence level returns the fewest false positives but might return more false negatives, so a policy pinned to high confidence could behave differently from one at low confidence if matching shifts.

**Security & identity**
- No change is described: the roadmap names no new permission, identity or connection.

**Autonomy & actions**
- A SIT detects; what happens next comes from the policy that uses it. A shift in matches changes how often those policies fire, without any change to the policies themselves.

**Change & support**
- Learn says the same SIT can produce different results across Exchange, SharePoint and OneDrive, and endpoint DLP, so retest in each workload you use.
- Learn states that Microsoft Customer Service & Support can't assist with creating custom classifications or regular expression patterns, which matters if the response to changed matching is to build custom copies.

## Cost and licensing

No licence or meter for the improvement is published. The sensitive information types page says an E5 licence is required to use credential scanning SITs, and its Licensing section names no licence for other built-in SITs. The page for creating custom SITs points to Microsoft 365 licensing guidance without naming a licence for SITs.

Microsoft Learn documents no separate meter or charge for the improvement at the time of writing (November 2026). The indirect cost is admin time to retest. Learn also says that testing any SIT needs at least one Exchange Online licence in the tenant, otherwise the Test option is greyed out.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview. A preview is targeted for January CY2027 and general availability for March CY2027.

Which SITs are in scope, which roles manage them for this change and whether it reaches tenants automatically are not stated. Learn describes the Sensitive info types page as listing all sensitive information types in the Microsoft Purview portal.

## Governance guidance

### Before rollout
- List the built-in SITs your DLP, labelling, retention, insider risk and communication compliance policies depend on, using the Sensitive info types page or Get-DlpSensitiveInformationType (first row of the controls table).
- Record the current match count for each SIT in Sensitive info types and Content explorer as a baseline.
- Prepare sample files for each SIT in use and test them with the Test option, which reports matches per confidence level.
- Tell DLP, labelling and records owners that match counts may change from the preview window.

### At rollout
- Watch Message center and the What's new in Microsoft Purview page for a notice that names the affected SITs and any admin action.
- Retest the sample files and compare the matches at each confidence level with the baseline.

### After rollout
- Compare match counts in Sensitive info types and Content explorer with the baseline, and use Match or Not a Match feedback on items that look wrong.
- Retest in each workload where the SIT is used, since results can differ between mail, SharePoint and OneDrive, and endpoint.
- Review any custom copies of built-in SITs (second row of the controls table) and decide whether each is still needed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which sensitive information types exist in the tenant and their recommended confidence</strong><br><small>Tenant</small><br><small class="controls__note">Read-only inspection in Security &amp; Compliance PowerShell; it does not change a SIT. The portal page also shows match counts and the Test option.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types <a href="https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-DlpSensitiveInformationType -Identity &quot;Credit Card Number&quot; | Format-List</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom copies of built-in sensitive information types</strong><br><small>Tenant</small><br><small class="controls__note">Creates a custom SIT you own; it does not edit the built-in one. Some SITs can't be copied.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types › sensitive information type › Copy <a href="https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('PathToUnicodeXMLFile'))</code> <a href="https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type-in-scc-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Opting in to, opting out of or delaying the improved built-in SITs</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Built-in SITs can't be edited, so the controls are for inspecting them and for creating custom copies of your own. The page that covers copying lists SITs that can't be copied, so check a SIT is copyable before planning around a copy.

Microsoft Learn documents no setting to opt in to, opt out of or delay the improvement at the time of writing (November 2026), which is why the third row has no surface. The Security & Compliance PowerShell cmdlet that lists SITs reads them and does not change them. Permissions for these actions were not established for this change.

## Open questions

- Which built-in SITs are being improved, and what changes in their detection (patterns, keywords, validators, confidence)? Watch the Learn page on sensitive information type entity definitions and Message center.
- Do the improved definitions replace the current ones in existing DLP and labelling policies, or are they added alongside them?
- Do later Microsoft changes to a built-in SIT reach custom copies made from it?
- Is there a licence requirement or a tenant control for the improvement? Watch the sensitive information types page and Microsoft 365 licensing guidance.

<!-- rationale
risk: Medium. Built-in sensitive information types feed DLP, labelling and other policies, so a change in what they match can change which items those policies act on; Microsoft has not said how the improvement reaches existing policies.
cost: Low. The only cost the sources show is admin time to retest policies; a licence or meter for the improvement is not yet published.
impact: Low. Compliance and security admins would notice match counts shift; the roadmap item describes no end-user screen or setting.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Data exposure; Governance guidance: Before rollout, first bullet / command: The first control row's SIT list or Get-DlpSensitiveInformationType identifies the SITs in use by the tenant's policies. | Found: Searched: Get-DlpSensitiveInformationType find sensitive information types used in policies references. Read the Get reference and custom-SIT creation page; they describe defined or all SITs, not a policy-dependency inventory. | Fix: Remove 'The first row of the controls table is where you list the SITs in use.' Replace the first Before rollout bullet with 'Inventory available built-in SITs using the Sensitive info types page or Get-DlpSensitiveInformationType (first row of the controls table).' The reference at https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype?view=exchange-ps documents available definitions, not policy dependencies.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; Open questions / licensing: No licensing specific to the improvement is published, represented by licensing.model unknown. | Found: The per-user licensing model is the familiar Microsoft 365 E3/E5/A5/F5/G5 model. It remains unchanged. This licensing model enables you to apply Microsoft Purview controls and protections to Microsoft 365 and Windows/macOS endpoint-based assets. | Fix: Set licensing.model to included and cite https://learn.microsoft.com/purview/purview-billing-models. Begin the notes: 'For Microsoft 365 and Windows/macOS endpoint assets, Purview uses the Microsoft 365 E3/E5/A5/F5/G5 per-user licensing model. No licensing specific to this improvement is published.' Retain the credential-scanning qualification. The existing unknown value understates the published product-level model; the searched SIT and service-description pages do not name an improvement-specific entitlement. | Source: https://learn.microsoft.com/purview/purview-billing-models
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control the governance checklist tells readers to use is represented in the controls table. | Found: Checklist: 'test them with the Test option', 'Content explorer', and 'use Match or Not a Match feedback'. Table: SIT inventory, custom copies, and opting in to, opting out of or delaying improved SITs. | Fix: The Before rollout sample-file testing step, the Before/After rollout Content explorer baseline steps, and the After rollout Match/Not a Match feedback step name controls without their own controls-table rows.
-->
