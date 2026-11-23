---
kind: "concept"
title: "Microsoft Purview classifiers: what recognises sensitive content, and who controls it?"
slug: "classifiers"
summary: "Classifiers are the Microsoft Purview rules and models that identify sensitive content for DLP, labels and other policies. This page covers the classifier types, trainable classifiers, on-demand classification and their cost and controls."
created: "2026-11-23"
updated: "2026-11-23"
version: 2
tags: ["classifiers","purview","information-protection","dlp","sensitive-information-types","sensitivity-labels","auto-labeling","pay-as-you-go","retention"]
covers: []
sources:
  - title: "Microsoft Purview classifiers overview"
    url: "https://learn.microsoft.com/purview/data-classification-overview"
    kind: "learn"
  - title: "Learn about trainable classifiers"
    url: "https://learn.microsoft.com/purview/trainable-classifiers-learn-about"
    kind: "learn"
  - title: "Get started with trainable classifiers"
    url: "https://learn.microsoft.com/purview/trainable-classifiers-get-started-with"
    kind: "learn"
  - title: "Create and analyze an on-demand classification scan"
    url: "https://learn.microsoft.com/purview/on-demand-classification"
    kind: "learn"
  - title: "New-SensitiveInformationScan"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
related: ["sensitive-information-types","sensitivity-labels","endpoint-dlp","microsoft-purview-unified-classification-management-experience","microsoft-purview-recurring-classifier-refresh","microsoft-purview-compliance-portal-information-protection-scan-existing-files-in-sharepoi"]
controls:
  - governs: "Who can open the Classifiers page (Purview role-group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Editing needs the Role management role. Entra roles such as Compliance administrator also open the page."
  - governs: "Creating a custom trainable classifier from seed content"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Data classification > Classifiers > Trainable classifiers > Create trainable classifier"
      docs: "https://learn.microsoft.com/purview/trainable-classifiers-get-started-with"
    api: null
    note: "Compliance admin or Security admin access. Publish with Publish for use once training completes."
  - governs: "An on-demand classification scan: scope, classifiers, date range and file extensions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > On-demand classification > New scan"
      docs: "https://learn.microsoft.com/purview/on-demand-classification"
    api:
      kind: "powershell"
      call: "New-SensitiveInformationScan -Name \"<scan name>\" -SharePointLocation All"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan"
    note: "Compliance Administrator role group runs scans. The cmdlet is in Security & Compliance PowerShell."
  - governs: "Whether On-Demand Classification pay-as-you-go usage is paused or active"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go > On-Demand Classification"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Its toggle selects paused or active. The Usage center is in preview. Access needs Global Reader, Security Reader or Global Admin."
  - governs: "Tenant-wide switch for the new Classifiers experience"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft says the new experience is in preview and runs alongside the existing ones."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-23"
    note: "New page: the Purview classifier types, trainable classifiers and on-demand classification, with cost, limits and controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 88 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected: seed-folder rules, Communication compliance and custom classifiers, encryption limit, and Usage center pause wording; role-group names and paths made exact."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 90 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 90
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "edef7f998f2ed189366a4b8552bd35ed"
---

## What it is

A **classifier** is a Microsoft Purview rule or model that recognises a kind of sensitive content, so that policies and labels can act on it. The **Classifiers** page brings the classification types together in one place where administrators discover, create, inspect and manage them, and it shows how many policies use each classifier. That page is in preview and sits alongside the existing classification experiences; changes made in either appear in both.

| Classifier type | What it recognises |
| --- | --- |
| Sensitive information types (SITs) | Patterns such as social security, credit card or bank account numbers. See [Sensitive information types](/concepts/sensitive-information-types/) |
| Named entities | Person names, physical addresses, and medical terms and conditions, using dictionaries and patterns |
| Exact data match | Exact values |
| Trainable classifiers | Content categories, learned from samples rather than patterns |
| Credentials | Credentials from supported services and environments |
| Document fingerprinting | Content that is a variation of a template |

### Trainable classifiers
Microsoft provides pretrained trainable classifiers that are ready to use, and you can train custom ones. A custom classifier needs at least 50 positive samples (up to 500) and at least 150 negative samples (up to 1,500), kept in separate SharePoint folders, using a Communication site or another SharePoint site type, not Teams or OneDrive folders; each folder must contain only seed content. In the preview creation workflow, the classifier builds its prediction model within 24 hours or less; after training and automatic testing complete, you publish it for use. Once published, it is available as a condition in Office auto-labeling with sensitivity labels and auto-apply retention label policies.

### On-demand classification
On-demand classification scans files at rest in SharePoint, OneDrive and endpoints, including files never classified or not modified for a long time. It updates classification results; matching policies decide any resulting action. It is not an auto-labeling simulation.

## Why it matters

Classifiers are the shared input that other Purview features match on. Microsoft lists data loss prevention, sensitivity label conditions, auto-apply retention labels and Communication compliance as places to use them. A change to a classifier therefore changes what every policy that uses it matches, which is why the page's policy count is worth checking before you edit one. See [unified Classifiers page](/features/microsoft-purview-unified-classification-management-experience/) for the change that brings these types together.

On-demand classification is where classification meets existing content. Each scanned file is evaluated against DLP, Information Protection, Data Lifecycle Management and Insider Risk Management policies, so a scan can trigger actions on files nobody has touched for years, and it is metered. See also [recurring classifier refresh](/features/microsoft-purview-recurring-classifier-refresh/).

## Cost and licensing

Microsoft's trainable classifier and on-demand classification pages do not name a licence; they point to the Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions. The Microsoft Purview service description lists, for auto-applying retention labels with a trainable classifier, Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Information Protection and Governance. Check the service description for the policy type you will use the classifier in.

On-demand classification uses pay-as-you-go billing, per-user licensing, or both. Pay-as-you-go is billed through an Azure subscription associated with the tenant, and its unit of measure is the asset, counted by the number classified per scan. The billed amount can be lower than the estimate if items or locations are skipped, for example empty files or a cancelled scan. Cost follows the total number of files scanned, not the number of classifiers, though broader classifier selection can bring more files into scope. Rates are on Microsoft's Purview pay-as-you-go pricing page, not repeated here. For the meter in general, see [Microsoft Purview pay-as-you-go billing](https://learn.microsoft.com/purview/purview-billing-models).

## Risks and limits

- **Trainable classifiers only work with unencrypted items.** Microsoft states this limitation on its trainable-classifier page.
- **Custom trainable classifiers are English only**, and Communication compliance accepts only Microsoft provided trainable classifiers, so a custom classifier cannot feed that policy.
- **A published custom classifier cannot be retrained.** You remove it and start again with larger samples, so test before you publish.
- **Only the creator can train a custom classifier and review its predictions by default**, so choose the creating account deliberately.
- **Seed content must be text.** Image files and image-only PDFs are not supported for training or testing.
- **Choosing specific classifiers narrows an on-demand scan's effect.** Only those classifiers have their results updated; others may stay unevaluated and may not trigger their policies.
- **A scan can act on old files.** Review active policies, including any that apply or remove sensitivity labels, before you start.
- **Scan limits apply.** A SharePoint or OneDrive scan processes up to 150,000 locations and 100 million files, and you can select up to 50 classifiers at a time. A location in scope of several active scans is processed by only one.
- **Exact data match rescans previously classified files**, which can raise scan cost; excluding the exact data match classifier from the scope avoids that.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open the Classifiers page (Purview role-group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Editing needs the Role management role. Entra roles such as Compliance administrator also open the page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Creating a custom trainable classifier from seed content</strong><br><small>Tenant</small><br><small class="controls__note">Compliance admin or Security admin access. Publish with Publish for use once training completes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Data classification › Classifiers › Trainable classifiers › Create trainable classifier <a href="https://learn.microsoft.com/purview/trainable-classifiers-get-started-with" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>An on-demand classification scan: scope, classifiers, date range and file extensions</strong><br><small>Tenant</small><br><small class="controls__note">Compliance Administrator role group runs scans. The cmdlet is in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › On-demand classification › New scan <a href="https://learn.microsoft.com/purview/on-demand-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SensitiveInformationScan -Name &quot;&lt;scan name&gt;&quot; -SharePointLocation All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether On-Demand Classification pay-as-you-go usage is paused or active</strong><br><small>Tenant</small><br><small class="controls__note">Its toggle selects paused or active. The Usage center is in preview. Access needs Global Reader, Security Reader or Global Admin.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go › On-Demand Classification <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the new Classifiers experience</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft says the new experience is in preview and runs alongside the existing ones.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Access to the Classifiers page comes from a Microsoft Entra role (Global administrator, Compliance administrator, Security administrator or Compliance data administrator) or from a Purview role group (Information Protection, Information Protection Admins, Information Protection Analysts, Information Protection Investigators or Information Protection Readers). Microsoft advises using the role with least privilege.

To create a trainable classifier, sign in with Compliance admin or Security admin access; the account also needs access to the seed content folders. To run an on-demand scan you must be in the Compliance Administrator role group; viewing results needs Content Explorer Content Viewer or Content Explorer List Viewer. For SharePoint scans, adaptive scopes and administrative units can scope the scan.

A classifier only recognises content. DLP, labelling, retention and the other policies that use it decide what happens next. The Usage center Pay-as-you-go page lets you toggle On-Demand Classification between paused and active states.

## What to check

- Review who holds the Entra roles and Information Protection role groups that open the Classifiers page.
- Confirm your licence against the service description for each policy type that uses a trainable classifier.
- Prepare separate positive and negative seed folders, each dedicated to seed content and not in a Teams folder type or OneDrive, and the account that will own the classifier, before you create a custom trainable classifier.
- Check Usage center > Pay-as-you-go for On-Demand Classification usage and whether it is paused.

## Open questions

- Can the new Classifiers experience be switched off for the whole tenant? Microsoft says the new and existing experiences run side by side; no switch is documented.
- Is there a PowerShell, Graph or other API to create, train or publish a trainable classifier? None is documented in the pages read.
- Which licence covers trainable classifiers in DLP and sensitivity label conditions? The pages point to the service description, which names retention auto-apply licences.
- Does a scan's estimate match the final charge for your tenant? Microsoft says the billed amount may be lower than the estimate.

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: scanned-file policy evaluation / applicability: Scanned files are evaluated against DLP, Information Protection, Data Lifecycle Management and Insider Risk Management policies. | Found: Files are evaluated against DLP, Microsoft Information Protection (MIP), data lifecycle management (DLM), and insider risk management (IRM) policies simultaneously. | Fix: Add https://learn.microsoft.com/purview/on-demand-classification-endpoints to sources: it supports endpoint policy evaluation; the existing on-demand-classification citation states this under SharePoint and OneDrive considerations. | Source: https://learn.microsoft.com/purview/on-demand-classification-endpoints
- [supported, minor] Cost and licensing: retention auto-apply licences / licensing: The service description lists E5/A5/G5, Purview Suite/EDU/GOV/FLW, Defender + Purview Suite FLW, and E5/A5/F5/G5 Information Protection and Governance for trainable-classifier retention auto-apply. | Found: To auto-apply retention labels using a trainable classifier, the following licenses provide user rights: Microsoft 365 E5/A5/G5 Microsoft Purview Suite/EDU/GOV/FLW Microsoft Defender + Purview Suite FLW Microsoft 365 E5/A5/F5/G5 Information Protection and Governance | Fix: Add: 'Microsoft's education guide differs: it says Microsoft 365 A5 does not include machine learning-based auto classification and requires additional licensing.' Cite https://learn.microsoft.com/microsoft-365/education/guide/4-advanced/security/advanced-security-data-lifecycle-management#machine-learning-based-retention alongside the existing service description. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] Risks and limits: exact data match / behaviour: EDM on-demand scans rescan previously classified files. | Found: Tenants using EDM classifiers should be aware that On-Demand Classification scans (including estimation and classification) rescan previously classified files | Fix: Add after the EDM bullet: 'Endpoint guidance separately says eligible previously classified files with unchanged content and classifiers retain their results without rescanning.' Cite https://learn.microsoft.com/purview/endpoints-best-practices#previously-classified-files; its eligibility requirements qualify reuse. | Source: https://learn.microsoft.com/purview/on-demand-classification
-->
