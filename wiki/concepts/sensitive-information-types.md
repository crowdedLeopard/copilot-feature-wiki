---
kind: "concept"
title: "Sensitive information types: how does Purview recognise sensitive data?"
slug: "sensitive-information-types"
summary: "Sensitive information types (SITs) are Microsoft Purview's pattern-based detectors for data such as card or national ID numbers. Administrators use them to decide what DLP, labelling and other rules match, and at what confidence."
created: "2026-11-20"
updated: "2026-11-28"
version: 3
tags: ["sensitive-information-types","classifiers","dlp","information-protection","auto-labeling","purview","endpoint-dlp"]
covers: []
sources:
  - title: "Learn about sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"
    kind: "learn"
  - title: "Create custom sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    kind: "learn"
  - title: "Sensitive information type limits"
    url: "https://learn.microsoft.com/purview/sit-limits"
    kind: "learn"
  - title: "Create a custom sensitive information type using PowerShell"
    url: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type-in-scc-powershell"
    kind: "learn"
  - title: "Remove a custom sensitive information type using PowerShell"
    url: "https://learn.microsoft.com/purview/sit-remove-a-custom-sensitive-information-type-in-powershell"
    kind: "learn"
  - title: "Test sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-test-a-sit"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Create a DLP policy to quarantine files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    kind: "learn"
  - title: "New-DlpSensitiveInformationTypeRulePackage"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpsensitiveinformationtyperulepackage"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "Get-DlpSensitiveInformationType"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype"
    kind: "learn"
  - title: "sensitiveType resource type"
    url: "https://learn.microsoft.com/graph/api/resources/sensitivetype?view=graph-rest-beta"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Automatically apply a retention label to retain or delete content"
    url: "https://learn.microsoft.com/purview/apply-retention-labels-automatically"
    kind: "learn"
related: ["endpoint-dlp","sensitivity-labels","microsoft-purview-information-protection-improved-sensitive-information-types"]
controls:
  - governs: "Creating a custom sensitive information type, or copying a built-in one to edit"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types > Create sensitive info type"
      docs: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    api:
      kind: "powershell"
      call: "New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('<path to Unicode XML file>'))"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpsensitiveinformationtyperulepackage"
    note: "To copy, select a SIT on this page and choose Copy. SITs with 10 text processors or restricted text processors cannot be copied directly in the UI; use PowerShell for those. PowerShell imports an XML rule package."
  - governs: "Which sensitive information types a DLP rule matches, with confidence level and instance count"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > Create or customize advanced DLP rules > + Create rule > Add condition > Content contains > Add > Sensitive info types"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -ContentContainsSensitiveInformation <hashtable>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    note: "The reference's examples show the hashtable naming the SIT. Other Purview solutions that use SITs have their own policy surfaces."
  - governs: "Inventory of SITs in the tenant and each one's recommended confidence level"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types"
      docs: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    api:
      kind: "powershell"
      call: "Get-DlpSensitiveInformationType -Identity \"<SIT name>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype"
    note: "Read-only view, not a setting. The RecommendedConfidence property gives the recommended level."
confidence: "medium"
dependents: 52
changes:
  - date: "2026-11-20"
    note: "First concept page on sensitive information types: what they are, their limits, licensing and where to manage them."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 82 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 110 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: Why it matters no longer says a SIT change alters every referencing rule; the copy control notes that SITs with 10 or restricted text processors must be copied in PowerShell; removed checklist items with no control row."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 117 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: the DLP Content contains condition now says confidence level and instance count are chosen for each SIT, not for labels; added the Purview permissions and retention auto-apply pages as sources."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 121 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 121
  confirmed: 121
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ae770853e88c4f6fe9c30a98e42b8079"
---

## What it is

A sensitive information type (SIT) is a pattern-based classifier in Microsoft Purview that detects a kind of sensitive data, such as social security, credit card or bank account numbers, so that other Purview solutions can act on the items that contain it. Microsoft provides a large number of preconfigured SITs, and administrators can create their own.

**Parts of a SIT.** Each SIT has a name, a description and one or more patterns. A pattern has a primary element (a regular expression with or without a checksum validation, a keyword list, a keyword dictionary or a function), optional supporting elements that add corroborating evidence, a confidence level and a proximity: how many characters may separate a supporting element from the primary element.

**Confidence levels.** Low confidence has a value of 65, medium 75 and high 85. Low confidence returns all low, medium and high matches, so it finds the most but produces the most false positives. High confidence returns the fewest false positives but the most false negatives.

| Category | What it is |
| --- | --- |
| Built-in | Created by Microsoft; cannot be edited, but can be copied as a template |
| Named entity | Detects person names, physical addresses and medical terms; cannot be edited or copied. Bundled ones match every case in a class, such as All physical addresses |
| Custom | Defined by you, or copied from a built-in SIT and modified |
| Exact data match (EDM) | Created from scratch to match exact values held in a database you define |

**Where SITs are used.** Microsoft lists Data Loss Prevention policies, sensitivity labels, retention labels, Insider Risk Management, Communication Compliance, auto-labeling policies and Microsoft Priva. In a DLP rule, the Content contains condition picks SITs alongside sensitivity labels, retention labels and trainable classifiers. For each SIT, you can choose a confidence level and an instance count.

## Why it matters

SITs are used by DLP policies, sensitivity labels, retention labels and other Purview solutions. The rule that uses the SIT, not the SIT, decides what happens next (block, label, retain, alert). See [Microsoft Purview: improved built-in sensitive information types](/features/microsoft-purview-information-protection-improved-sensitive-information-types/) for a related briefing.

The confidence level and instance count chosen in each rule set the balance between missed data and false alarms. Microsoft says the same SIT can return different results in email in transit, files at rest in SharePoint and OneDrive, and files on managed devices, so a rule that works in one workload is not proof for another. A poorly tuned custom SIT also has a cost outside DLP: Endpoint DLP classifies files against every SIT in the tenant, used or not.

## Cost and licensing

The SIT overview page states one licence requirement: an E5 licence is required to use credential scanning SITs. The custom SIT page refers readers to Microsoft's Microsoft 365 Enterprise Plans and security and compliance licensing guidance for licensing; the SIT pages state no per-SIT price or meter. Licensing for the solution that uses a SIT (DLP, labelling, Insider Risk Management) is governed by that solution's own page. Using the Test SIT option needs at least one Exchange Online licence in the tenant.

## Risks and limits

- **Wrong confidence level.** High confidence misses more real matches (false negatives); low confidence flags more items that are not sensitive. Retest rules after any change to a SIT.
- **Built-in SITs are not editable.** To change one you copy it, which creates a custom SIT you must maintain. Named entity SITs cannot be copied, and Microsoft lists SITs that cannot be copied, including U.S. driver's license number and EU passport number.
- **Custom regular expressions are restricted.** Positional anchors (`^`, `$`) must not be used, and multiple top-level capturing groups are blocked during validation. Microsoft Customer Service & Support cannot assist with creating custom classifications or regex patterns.
- **Published limits.** 500 custom SITs through the portal, 10 rule packages, 50 SITs and 150KB per rule package, 1024 characters per regex, 20 distinct regexes per SIT, 2048 keyword-list terms of up to 50 characters. Microsoft asks for a support ticket if you need more than 500 custom SITs.
- **New SITs and existing SharePoint or OneDrive content.** Content must be recrawled before a new custom SIT identifies it; crawling follows a schedule unless you request a recrawl.
- **Endpoint DLP.** Files are classified against all SITs in the tenant, including unused custom ones, which can cause excessive classification traffic. A bundled named entity SIT in an endpoint policy needs Advanced classification scanning and protection. See [Endpoint DLP](/concepts/endpoint-dlp/).
- **Deleting a SIT in use.** Check that no DLP policy or Exchange mail flow rule still references it before removal.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating a custom sensitive information type, or copying a built-in one to edit</strong><br><small>Tenant</small><br><small class="controls__note">To copy, select a SIT on this page and choose Copy. SITs with 10 text processors or restricted text processors cannot be copied directly in the UI; use PowerShell for those. PowerShell imports an XML rule package.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types › Create sensitive info type <a href="https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('&lt;path to Unicode XML file&gt;'))</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpsensitiveinformationtyperulepackage" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sensitive information types a DLP rule matches, with confidence level and instance count</strong><br><small>Tenant</small><br><small class="controls__note">The reference's examples show the hashtable naming the SIT. Other Purview solutions that use SITs have their own policy surfaces.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › Create or customize advanced DLP rules › + Create rule › Add condition › Content contains › Add › Sensitive info types <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -ContentContainsSensitiveInformation &lt;hashtable&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Inventory of SITs in the tenant and each one's recommended confidence level</strong><br><small>Tenant</small><br><small class="controls__note">Read-only view, not a setting. The RecommendedConfidence property gives the recommended level.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types <a href="https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-DlpSensitiveInformationType -Identity &quot;&lt;SIT name&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Creating, copying and testing SITs in the portal needs a Purview role group. Microsoft's test page lists Compliance Administrator, Compliance Data Administrator, Security Administrator, Communication Compliance Admins, Information Protection Admins, Information Protection Investigators and Organization Management, plus a role or role group in Exchange. Security & Compliance PowerShell cmdlets need assigned permissions.

Removing a custom SIT through PowerShell means editing and re-importing its rule package, or removing the whole custom rule package with `Remove-DlpSensitiveInformationTypeRulePackage -Identity "<rule package>"`, which deletes every custom SIT in it. Microsoft Graph documents a `sensitiveType` resource only under `/beta/`; no Graph call is given in the table. Sensitivity labels are a separate mechanism: see [Sensitivity labels](/concepts/sensitivity-labels/).

## What to check

- Run `Get-DlpSensitiveInformationType` and review the Sensitive info types tab to list custom SITs; custom ones have a Publisher other than Microsoft Corporation.
- Compare each DLP rule's confidence level and instance count (min 1 to 500, max 1 to 500 or Any) with the SIT's RecommendedConfidence value.

## Open questions

- Does Microsoft document how and when changes to built-in SIT definitions reach a tenant, and any way to defer them?
- Is a supported Microsoft Graph operation for creating or editing SITs planned? The Graph reference describes a `sensitiveType` resource under `/beta/`.
- Which licence does each solution that uses SITs require beyond the E5 requirement for credential scanning SITs?

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: The printed Purview DLP policy creation route reaches a rule's Content contains > Add > Sensitive info types control. | Found: Under Conditions, select Add condition > Content contains > Add > Sensitive info types. | Fix: Set controls[1].ui.path and the matching table path to 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom policy > Admin units > locations > Define policy settings > Create or customize advanced DLP rules > + Create rule > Conditions > Add condition > Content contains > Add > Sensitive info types'. Here 'locations' is the policy-scope selection step. These omitted headings and scope choices are on https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine; the existing selectable labels are correct and in order. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
- [supported, minor] Why it matters; Cost and licensing: supporting sources / behaviour: Microsoft documents SIT-conditioned sensitivity labeling and solution-specific licensing, but the page omits those supporting pages from its sources. | Found: When you select the Sensitive info types option, you see the same list of sensitive information types as when you create a data loss prevention (DLP) policy. | Fix: Add these two supporting pages to sources: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically and https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. They support the labeling-action and solution-licensing statements; no additional product or licensing detail is needed. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
-->
