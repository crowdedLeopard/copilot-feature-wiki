---
title: "Microsoft Purview DLP: act on classification failures in Exchange Online"
slug: "microsoft-purview-data-loss-prevention-default-protection-controls-for-exchange-online-in"
roadmapId: 569477
topic: "governance"
products: ["Microsoft Purview"]
summary: "Exchange Online DLP rules can match timeout, throttling and other classification failures separately. It is an admin-enabled setting, in preview on Learn; review it if mail rules depend on attachment scanning."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists the licences that give rights to DLP for Exchange Online, such as Microsoft 365 E5/A5/G5/E3/A3/G3. The feature page names no separate licence, and no price or meter for it is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","exchange","sensitive-information-types","classifiers","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 569477"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569477"
    kind: "roadmap"
  - title: "Configure default protection for classification failures in Data loss prevention for Exchange (preview)"
    url: "https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection"
    kind: "learn"
  - title: "Data loss prevention Exchange conditions and actions reference"
    url: "https://learn.microsoft.com/purview/dlp-exchange-conditions-and-actions"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-count-of-labelled-documents-condition","sensitive-information-types","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Whether Exchange Online DLP detects classification failures"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data loss prevention > Scan failure settings for Exchange"
      docs: "https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -DlpErrorHandlingConfig $json"
      docs: "https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection"
    note: "Preview. Exchange Online only. $json is '{\"Classification\":{\"State\":1}}'; State 0 disables. Allow up to one hour to synchronise."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item, based on the preview Learn page for Exchange Online classification failure detection."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 44
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "77bb7d479625687b1646e3403cbde59b"
---

## What's changing

Microsoft Purview data loss prevention (DLP) policies for Exchange Online can detect and act on classification failures: cases where the classification service cannot fully scan an attachment. Microsoft Learn documents this in a page titled "Configure default protection for classification failures in Data loss prevention for Exchange (preview)".

The change has two parts. First, an administrator turns on classification failure detection. After that, the existing conditions **Document couldn't be scanned** and **Document didn't complete scanning** also detect classification failures such as timeouts, throttling and other errors. By default they detect only text extraction failures (for example a file that cannot be opened, an unsupported format or a password-protected file). Second, the **DocumentScanFailures** condition lets a rule act differently on **Timeout**, **Throttled** or **Other** failures. It is combined with one of the two conditions above using AND and cannot be used on its own.

The setting applies to Exchange Online only; Learn says it does not affect SharePoint, OneDrive, Teams or Endpoint DLP policies. The roadmap record gives status In development with a target of September CY2026, release phase General Availability, and clouds GCC, GCC High and DoD. Its description says the feature is available in public preview, and the Learn page is marked preview. Treat the Learn page as describing the preview, not a final design.

## Why it matters

Attachment scanning can fail for reasons unrelated to content, such as a timeout or throttling in the classification service. With detection off, a rule that relies on the two scan conditions matches text extraction failures only, so classification failures are not visible to those rules. This feature lets you decide what each failure type should trigger, for example audit-only for throttling and something stricter for timeouts, instead of one blanket response.

Because the setting is administrator-enabled, nothing changes in a tenant until someone turns it on. Once it is on, Learn warns that tenants with existing rules that use these conditions might see an increase in DLP rule matches, so the first weeks need monitoring.

## Risk assessment

**Data exposure**
- With detection off, the two scan conditions detect only text extraction failures, so a rule built on them does not match a classification failure such as a timeout or throttling. Turning detection on closes that gap for Exchange Online attachments only.
- Scan-failure rules detect failures only from classifiers DLP has already evaluated. A content-detection rule placed after a scan-failure rule can have its failure missed, so rule order matters (see Governance).

**Security & identity**
- No new identity or permission model is described on the feature page. The setting is tenant-wide for Exchange Online DLP; Learn names no per-user or per-policy scope for it.

**Autonomy & actions**
- The actions are whatever your rules specify. The Learn example uses Audit for timeout, throttling and other failures, and Block for content rules. A block action on a scan-failure condition would apply to every message whose attachment hits that failure type.

**Change & support**
- Learn states that existing rules using the two conditions might produce more matches after enabling. Expect more alerts and possibly more user queries if those rules block or notify.
- Allow up to one hour for the setting to synchronise before testing, as Learn advises.

## Cost and licensing

The Microsoft Purview service description lists the licences that provide rights to Microsoft Purview Data Loss Prevention for Exchange Online, SharePoint Online and OneDrive for Business, including Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium and Exchange Online Plan 2. The feature page names no separate licence, and it describes no meter, so this briefing treats the feature as part of DLP for Exchange Online.

No price or credit rate for the feature is published. The costs shown by the sources are indirect: administrator time to enable the setting, write rules for each failure type and tune them against the extra matches Learn warns about.

## Scope

- **Workload:** Exchange Online only. Learn says the setting does not affect SharePoint, OneDrive, Teams or Endpoint DLP policies.
- **Clouds and platform:** the roadmap record lists GCC, GCC High and DoD, with platform Web. The feature page itself states no cloud availability.
- **Status:** the roadmap record shows In development with a target of September CY2026; Learn marks the page preview.
- **Rollout:** the setting is switched on in the Microsoft Purview portal or through Security & Compliance PowerShell, and Learn says to allow up to one hour for it to synchronise across the service.
- **Rules:** the conditions apply to rules that already use **Document couldn't be scanned** or **Document didn't complete scanning**; **DocumentScanFailures** must be combined with one of them.

## Governance guidance

### Before rollout
- Inventory the Exchange Online DLP rules that use **Document couldn't be scanned** or **Document didn't complete scanning**, because Learn says enabling detection can increase their matches.
- Decide the action for each failure type (**Timeout**, **Throttled**, **Other**), starting with audit-only as in Learn's example.
- Plan rule priorities so content-detection rules sit above scan-failure rules, as Learn advises.
- Confirm which role your organisation uses to change DLP settings and rules before delegating the work.

### At rollout
- Turn on **Scan failure settings for Exchange** in the Microsoft Purview portal, or run the Security & Compliance PowerShell command in the controls table.
- Wait up to one hour for synchronisation before testing rule behaviour.
- Add rules that combine **DocumentScanFailures** with one of the two scan conditions using AND.

### After rollout
- Review DLP rule match volumes for the rules that already used the two scan conditions and tune any that now over-match.
- Check that scan-failure rules still rank below content rules after any policy changes.
- Watch the Learn page and Message center for changes between preview and general availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Exchange Online DLP detects classification failures</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Exchange Online only. $json is '{&quot;Classification&quot;:{&quot;State&quot;:1}}'; State 0 disables. Allow up to one hour to synchronise.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data loss prevention › Scan failure settings for Exchange <a href="https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -DlpErrorHandlingConfig $json</code> <a href="https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Enabling detection is a single setting that Learn says applies to Exchange Online only; disabling it uses the same PowerShell command with State set to 0. The request value in the command is the JSON string `{"Classification":{"State":1}}`.

The Set-PolicyConfig cmdlet reference does not list a -DlpErrorHandlingConfig parameter at the time of writing (November 2026), so the command is given as the feature page prints it.

The per-failure-type behaviour is set in rules through the **DocumentScanFailures** condition, which the Exchange conditions reference lists for Security & Compliance PowerShell. This briefing gives no admin-centre path or rule cmdlet call for that condition, because neither was read on a page. Rule priority interacts with it: content rules should rank above scan-failure rules.

## Open questions

- Do the GCC, GCC High and DoD clouds listed on the roadmap item get the setting at the same time as other clouds? The Learn page states no cloud availability; watch the roadmap item and the Learn page.
- Will the preview behaviour of the scan conditions and **DocumentScanFailures** change before general availability, given the roadmap's September CY2026 target and In development status?
- Will the Set-PolicyConfig reference gain a -DlpErrorHandlingConfig entry, and will the portal toggle remain the only documented admin-centre control?
- Which message outcome applies when a scan fails and detection is off? The feature page does not describe what happens to the message.

<!-- rationale
risk: Medium. Until an administrator turns detection on, the scan-failure conditions detect only text extraction failures, so a rule built on them does not match classification failures such as timeouts; turning it on can also raise rule matches.
cost: Low. The feature page names no licence or meter; the cost is admin time to enable the setting, add rules and tune them. DLP for Exchange Online sits under the licences in the Microsoft Purview service description.
impact: Low. Administrators enable it and write the rules. Senders notice only if a rule they trigger blocks or flags messages whose attachments failed to scan.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Autonomy & actions / applicability: A block action on a scan-failure condition would apply to every message whose attachment hits that failure type. | Found: Whether an action takes effect or not depends on how you configure the mode of the policy. | Fix: Remove the sentence 'A block action on a scan-failure condition would apply to every message whose attachment hits that failure type.' The unconditional 'every message' disregards policy scope, policy mode and the classifier-ordering limitation already described on the page. | Source: https://learn.microsoft.com/purview/dlp-policy-reference
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance / admin-path: The enabling control is reached in Microsoft Purview portal through Settings > Data loss prevention > Scan failure settings for Exchange. | Found: go to Settings on the left navigation menu > Data loss prevention > Scan failure settings for Exchange. In Scan failure settings for Exchange turn on the toggle. | Fix: Extend controls[0].ui.path and the matching rendered table path to 'Settings > Data loss prevention > Scan failure settings for Exchange > toggle'. The source gives an unlabelled toggle on that page; the current route correctly reaches the page but stops before the control. | Source: https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist tells readers to configure failure-type rules and review rule priorities and match volumes, but those controls have no table rows. | Found: Checklist: 'Add rules that combine DocumentScanFailures'; 'Check that scan-failure rules still rank below content rules'; 'Review DLP rule match volumes'. The only table row governs 'Whether Exchange Online DLP detects classification failures'. | Fix: The checklist's scan-failure rule configuration, rule-priority review and rule-match-volume review have no controls-table rows. Remove those checklist instructions if retaining the current one-row table; keep the explanatory prose. Do not add unverified control rows.
-->
