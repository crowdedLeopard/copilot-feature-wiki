---
title: "Microsoft Purview DLP: act on classification failures in Exchange Online (Worldwide)"
slug: "microsoft-purview-data-loss-prevention-granular-classification-error-controls-exchange-onl"
roadmapId: 561916
topic: "governance"
products: ["Microsoft Purview"]
summary: "Exchange Online DLP rules can act separately on timeout, throttling and other classification failures once an admin turns on detection. Review it if mail rules depend on attachment scanning."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists the licences that give rights to DLP for Exchange Online, such as Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium. The feature page names no separate licence, and no price or meter for it is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","exchange","sensitive-information-types","classifiers"]
sources:
  - title: "Microsoft 365 Roadmap 561916"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561916"
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
related: ["microsoft-purview-data-loss-prevention-default-protection-controls-for-exchange-online-in","microsoft-purview-data-loss-prevention-count-of-labelled-documents-condition","sensitive-information-types"]
controls:
  - governs: "Whether Exchange Online DLP detects classification failures"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data loss prevention > Scan failure settings for Exchange > toggle"
      docs: "https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -DlpErrorHandlingConfig $json"
      docs: "https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection"
    note: "Preview page. Exchange Online only. $json is '{\"Classification\":{\"State\":1}}'; State 0 disables. Allow up to one hour to synchronise."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-13T22:42:07"
changes:
  - date: "2026-11-23"
    note: "First briefing for the Worldwide roadmap item: Exchange Online DLP rules can act on timeout, throttling and other classification failures once detection is enabled."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 51 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 49
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "162104164109ef5f398415275d763c3b"
---

## What's changing

Microsoft Purview data loss prevention (DLP) policies for Exchange Online can detect and act on classification failures: cases where the classification service can't fully scan a document. Microsoft Learn documents this on a page titled "Configure default protection for classification failures in Data loss prevention for Exchange (preview)".

There are two parts. First, an administrator turns on classification failure detection. By default the conditions **Document couldn't be scanned** and **Document didn't complete scanning** detect only text extraction failures, such as a file that couldn't be opened, an unsupported format or a password-protected file. After detection is enabled they also detect classification failures such as timeouts, throttling and other errors. Second, the **DocumentScanFailures** condition lets a rule take different actions for **Timeout**, **Throttled** or **Other** failures. It is combined with one of the two conditions above using AND and can't be used on its own.

The setting applies to Exchange Online only; Learn says it doesn't affect SharePoint, OneDrive, Teams or Endpoint DLP policies. The roadmap record gives status Launched, with a preview date of July CY2026 and a target date of August CY2026, release phases General Availability and Preview, cloud Worldwide (Standard Multi-Tenant) and platform Web. The roadmap description says the capability is available in public preview, and the Learn page is marked preview, so treat that page as describing the preview rather than a final design.

## Why it matters

Attachment scanning can fail for reasons unrelated to the content, such as a timeout or throttling in the classification service. With detection off, a rule built on the two scan conditions matches text extraction failures only. This feature lets you decide what each failure type should trigger, for example audit-only for throttling and something stricter for timeouts, instead of one blanket response for all failures.

The Learn page describes detection as something you enable, so the wiki reads the default as admin-opt-in: no source says existing behaviour changes until someone turns it on. Once it is on, Learn notes that tenants with existing rules using these conditions might see an increase in DLP rule matches, so plan to watch the first weeks.

## Risk assessment

**Data exposure**
- With detection off, the two scan conditions detect only text extraction failures, so a rule built on them does not match a classification failure such as a timeout or throttling. Turning detection on addresses that for Exchange Online attachments only.
- Scan-failure rules detect failures only from classifiers that DLP has already evaluated. A content-detection rule placed after a scan-failure rule can have its classifier failure missed, so rule priority matters (see Governance).

**Security & identity**
- The feature page describes no new identity or permission model. The setting is a single Exchange Online DLP setting; Learn names no per-user or per-policy scope for it.

**Autonomy & actions**
- The actions are whatever your rules specify. The Learn example uses Block for content rules and Audit for timeout, throttling and other scan errors.

**Change & support**
- Learn states that existing rules using the two conditions might produce more matches after detection is enabled. Expect more alerts, and possibly more user queries where those rules block or notify.
- Learn says to allow up to one hour for the setting to synchronise before validating policy behaviour.

## Cost and licensing

The Microsoft Purview service description lists the licences that provide rights to Microsoft Purview Data Loss Prevention for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3, and the Microsoft Purview Suite. This briefing treats the feature as part of DLP for Exchange Online; the feature page itself names no separate licence.

A price or meter specific to this feature is not yet published. The costs the sources show are indirect: administrator time to enable the setting, write rules for each failure type and tune them against the extra matches Learn warns about.

## Scope

- **Workload:** Exchange Online only. Learn says the setting doesn't affect SharePoint, OneDrive, Teams or Endpoint DLP policies.
- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and platform Web.
- **Status:** the roadmap record shows Launched, with a July CY2026 preview date and an August CY2026 target date; Learn marks the page as preview.
- **Rollout:** the setting is turned on in the Microsoft Purview portal or through Security & Compliance PowerShell, and Learn says to allow up to one hour for it to synchronise across the service.
- **Rules:** the improved behaviour applies to rules that use **Document couldn't be scanned** or **Document didn't complete scanning**; **DocumentScanFailures** must be combined with one of them.

## Governance guidance

### Before rollout
- List the Exchange Online DLP rules that use **Document couldn't be scanned** or **Document didn't complete scanning**, because Learn says these may match more often once detection is on.
- Decide the action for each failure type (**Timeout**, **Throttled**, **Other**), for example Audit as in the Learn example, before writing rules.
- Plan rule priority so content-detection rules sit above scan-failure rules, as the Learn example does (content rules at priorities 1–3, scan-failure rules at 4–6).

### At rollout
- Turn on **Scan failure settings for Exchange** in the Microsoft Purview portal, or run the Security & Compliance PowerShell command in the controls table.
- Wait up to one hour for synchronisation before testing rule behaviour.
- Add rules that combine **DocumentScanFailures** with one of the two scan conditions using AND.

### After rollout
- Compare DLP rule match counts with the period before enabling, since Learn warns of an increase for existing rules.
- Watch the Learn page and Message center for changes between the preview and the final design.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Exchange Online DLP detects classification failures</strong><br><small>Tenant</small><br><small class="controls__note">Preview page. Exchange Online only. $json is '{&quot;Classification&quot;:{&quot;State&quot;:1}}'; State 0 disables. Allow up to one hour to synchronise.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data loss prevention › Scan failure settings for Exchange › toggle <a href="https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -DlpErrorHandlingConfig $json</code> <a href="https://learn.microsoft.com/purview/dlp-exchange-classification-failure-protection" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Enabling detection is a single Exchange Online setting. To switch it off, Learn says to set State to 0 in the same PowerShell command. The request value is the JSON string `{"Classification":{"State":1}}`.

The Set-PolicyConfig cmdlet reference does not list a -DlpErrorHandlingConfig parameter at the time of writing (November 2026), so the command is given as the feature page prints it.

The per-failure-type behaviour is set in rules through the **DocumentScanFailures** condition, which the Exchange conditions reference lists as a Security & Compliance PowerShell condition parameter. This briefing gives no rule cmdlet call or portal path for it because none was read for this condition. Rule priority interacts with it: Learn advises ranking content-detection rules above scan-failure rules.

## Open questions

- Will the behaviour of the scan conditions and **DocumentScanFailures** change between the preview and the final design? Watch the Learn page, which is marked preview.
- Will the Set-PolicyConfig reference gain a -DlpErrorHandlingConfig entry, and which role does Microsoft say is needed to change the setting? Watch the Set-PolicyConfig reference and the feature page.
- Which message outcome applies when a scan fails and detection is off? The feature page does not describe what happens to the message.
- Will a licence statement or meter specific to this feature be published? Watch the Microsoft Purview service description.

<!-- rationale
risk: Medium. Until an administrator turns detection on, the scan conditions detect only text extraction failures, so a classification failure such as a timeout or throttling is not matched; turning it on can also raise rule matches.
cost: Low. The feature page names no licence or meter; the cost is admin time to enable the setting and tune rules. DLP for Exchange Online sits under the licences in the Microsoft Purview service description.
impact: Low. Administrators and DLP rule authors make the change. Senders notice only if a rule they trigger blocks or flags a message whose attachment failed to scan.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: Senders notice the change only if a rule they trigger blocks or flags a message whose attachment failed to scan. | Found: Searched: Exchange DLP classification failure detection sender impact notifications audit only. Read feature page and Exchange conditions/actions reference; they document configurable actions but do not establish blocking or flagging as the only sender-visible outcomes. | Fix: Remove 'only': replace the sentence with 'Senders may notice the change if a rule they trigger blocks or flags a message whose attachment failed to scan.'
- [contradicted, minor] Governance guidance: Before rollout and At rollout; controls / consistency: Every rule control the governance checklist tells administrators to review or configure appears in the controls table. | Found: Checklist: 'Plan rule priority so content-detection rules sit above scan-failure rules' and 'Add rules that combine DocumentScanFailures with one of the two scan conditions using AND.' Table: 'Whether Exchange Online DLP detects classification failures' only. | Fix: The checklist steps that review scan-condition rules, choose per-failure-type actions, set rule priority and add DocumentScanFailures rules have no corresponding controls row. Do not add rows as part of this correction.
-->
