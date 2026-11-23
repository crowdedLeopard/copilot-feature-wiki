---
kind: "concept"
title: "Microsoft Purview classifiers: what recognises sensitive content, and who controls it?"
slug: "classifiers"
summary: "Classifiers are the Microsoft Purview rules and models that identify sensitive content for DLP, labels and other policies. This page covers the classifier types, trainable classifiers, on-demand classification and their cost and controls."
created: "2026-11-23"
updated: "2026-11-23"
version: 1
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
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users"
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
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "The Usage center is in preview. Access needs Global Reader, Security Reader or Global Admin."
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
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 82
  unconfirmed: 2
  contradicted: 4
  attempts: 1
  hash: "4695dc27338bf23adc12b900f0c6c1f3"
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
Microsoft provides pretrained trainable classifiers that are ready to use, and you can train custom ones. A custom classifier needs at least 50 positive samples (up to 500) and at least 150 negative samples (up to 1,500), kept in separate SharePoint folders. After training, which takes 24 hours or less, you publish it for use. Once published, it is available as a condition in Office auto-labeling with sensitivity labels, auto-apply retention label policies and Communication compliance.

### On-demand classification
On-demand classification scans files at rest in SharePoint, OneDrive and endpoints, including files never classified or not modified for a long time. It updates classification results; matching policies decide any resulting action. It is not an auto-labeling simulation.

## Why it matters

Classifiers are the shared input that other Purview features match on. Microsoft lists data loss prevention, sensitivity label conditions, auto-apply retention labels and Communication compliance as places to use them. A change to a classifier therefore changes what every policy that uses it matches, which is why the page's policy count is worth checking before you edit one. See [unified Classifiers page](/features/microsoft-purview-unified-classification-management-experience/) for the change that brings these types together.

On-demand classification is where classification meets existing content. Each scanned file is evaluated against DLP, Information Protection, Data Lifecycle Management and Insider Risk Management policies, so a scan can trigger actions on files nobody has touched for years, and it is metered. See [recurring classifier refresh](/features/microsoft-purview-recurring-classifier-refresh/) for the planned extension.

## Cost and licensing

Microsoft's trainable classifier and on-demand classification pages do not name a licence; they point to the Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions. The Microsoft Purview service description lists, for auto-applying retention labels with a trainable classifier, Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Information Protection and Governance. Check the service description for the policy type you will use the classifier in.

On-demand classification uses pay-as-you-go billing, per-user licensing, or both. Pay-as-you-go is billed through an Azure subscription associated with the tenant, and its unit of measure is the asset, counted by the number classified per scan. The billed amount can be lower than the estimate if items or locations are skipped, for example empty files or a cancelled scan. Cost follows the total number of files scanned, not the number of classifiers, though broader classifier selection can bring more files into scope. Rates are on Microsoft's Purview pay-as-you-go pricing page, not repeated here. For the meter in general, see [Microsoft Purview pay-as-you-go billing](https://learn.microsoft.com/purview/purview-billing-models).

## Risks and limits

- **Encrypted items are not classified.** Microsoft states that classifiers only work with items that aren't encrypted, so encrypted content can pass a policy that depends on a classifier.
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
<tr><td data-label="Control"><strong>Who can open the Classifiers page (Purview role-group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Editing needs the Role management role. Entra roles such as Compliance administrator also open the page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Creating a custom trainable classifier from seed content</strong><br><small>Tenant</small><br><small class="controls__note">Compliance admin or Security admin access. Publish with Publish for use once training completes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Data classification › Classifiers › Trainable classifiers › Create trainable classifier <a href="https://learn.microsoft.com/purview/trainable-classifiers-get-started-with" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>An on-demand classification scan: scope, classifiers, date range and file extensions</strong><br><small>Tenant</small><br><small class="controls__note">Compliance Administrator role group runs scans. The cmdlet is in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › On-demand classification › New scan <a href="https://learn.microsoft.com/purview/on-demand-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SensitiveInformationScan -Name &quot;&lt;scan name&gt;&quot; -SharePointLocation All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether On-Demand Classification pay-as-you-go usage is paused or active</strong><br><small>Tenant</small><br><small class="controls__note">The Usage center is in preview. Access needs Global Reader, Security Reader or Global Admin.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the new Classifiers experience</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft says the new experience is in preview and runs alongside the existing ones.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Access to the Classifiers page comes from a Microsoft Entra role (Global administrator, Compliance administrator, Security administrator or Compliance data administrator) or from a Purview role group (Information Protection, Information Protection Admins, Analysts, Investigators or Readers). Microsoft advises using the role with least privilege.

To create a trainable classifier, sign in with Compliance admin or Security admin access; the account also needs access to the seed content folders. To run an on-demand scan you must be in the Compliance Administrator role group; viewing results needs Content Explorer Content Viewer or Content Explorer List Viewer. For SharePoint scans, adaptive scopes and administrative units can scope the scan.

A classifier only recognises content. DLP, labelling, retention and the other policies that use it decide what happens next, and pausing On-Demand Classification in the Usage center governs billing, not the classifiers themselves.

## What to check

- Review who holds the Entra roles and Information Protection role groups that open the Classifiers page.
- Open the Classifiers page and read each classifier's policy count before you change or delete it.
- Confirm your licence against the service description for each policy type that uses a trainable classifier.
- Prepare separate positive and negative seed folders, and the account that will own the classifier, before you create a custom trainable classifier.
- Review the estimate and the active policies before you select Start classification on an on-demand scan.
- Check Usage center > Pay-as-you-go for On-Demand Classification usage and whether it is paused.

## Open questions

- Can the new Classifiers experience be switched off for the whole tenant? Microsoft says the new and existing experiences run side by side; no switch is documented.
- Is there a PowerShell, Graph or other API to create, train or publish a trainable classifier? None is documented in the pages read.
- Which licence covers trainable classifiers in DLP and sensitivity label conditions? The pages point to the service description, which names retention auto-apply licences.
- Does a scan's estimate match the final charge for your tenant? Microsoft says the billed amount may be lower than the estimate.

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What it is: Trainable classifiers; What to check / applicability: Separate SharePoint folders are sufficient locations for positive and negative seed content, without further folder restrictions. | Found: Place the positive and negative seed content in separate SharePoint folders. Use a Communication site or other SharePoint site type, but not a Teams folder type or a OneDrive folder. Each folder must be dedicated to holding only the seed content. | Fix: Qualify 'kept in separate SharePoint folders' with ', using a Communication site or another SharePoint site type, not Teams or OneDrive folders; each folder must contain only seed content'. Carry that restriction into the seed-folder checklist bullet. | Source: https://learn.microsoft.com/purview/trainable-classifiers-get-started-with
- [contradicted, blocker] What it is: Trainable classifiers; conflicts with Risks and limits / applicability: A published custom classifier is available as a condition in Communication Compliance. | Found: Microsoft Purview Communication Compliance supports the use of the Microsoft provided trainable classifiers only. Custom trainable classifiers aren't supported. | Fix: Delete 'and Communication compliance' from the custom-classifier publication sentence. Keep the existing Risks and limits statement that Communication Compliance accepts only Microsoft-provided trainable classifiers; the source's publication paragraph does not override its explicit exclusion. | Source: https://learn.microsoft.com/purview/trainable-classifiers-get-started-with
- [unsupported, major] Why it matters / behaviour: Recurring classifier refresh is a planned extension of on-demand classification. | Found: Searched: Microsoft Purview recurring classifier refresh classification schedule; "Microsoft Purview" "recurring classifier refresh". Read on-demand-classification and search excerpts for auto-label-classification-simulation, endpoints-best-practices and Data Estate Insights; none states this plan. | Fix: Replace 'See [recurring classifier refresh](/features/microsoft-purview-recurring-classifier-refresh/) for the planned extension' with 'See also [recurring classifier refresh](/features/microsoft-purview-recurring-classifier-refresh/)'. Leave plans and roadmap status to the linked briefing.
- [contradicted, blocker] Risks and limits: Encrypted items / behaviour: Encrypted items cannot be classified by Purview classifiers generally. | Found: For Word, Excel, and PowerPoint files, and uploaded PDF files, SharePoint and OneDrive recognize the label and can now process the contents of the encrypted file. ... data loss prevention (DLP) policies support content in these files. | Fix: Replace the entire bullet with '**Trainable classifiers only work with unencrypted items.** Microsoft states this limitation on its trainable-classifier page.' The cited trainable-classifier limitation does not establish a prohibition for all classifier types or all encryption scenarios. | Source: https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files
- [unsupported, blocker] Governance controls: final paragraph / applicability: Pausing On-Demand Classification governs billing rather than the classifiers themselves. | Found: Searched: Microsoft Purview Usage center pause On-Demand Classification pay as you go PowerShell API billing stops feature; "Purview" "Usage center" "pause" "billing" "continue". Read purview-billing-usage, purview-billing-models and on-demand-classification; no billing-only effect is stated. | Fix: Replace the clause 'and pausing On-Demand Classification in the Usage center governs billing, not the classifiers themselves' with a separate sentence: 'The Usage center Pay-as-you-go page lets you toggle On-Demand Classification between paused and active states.' Do not infer which processing continues while paused.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Trainable classifiers / behaviour: Training takes 24 hours or less. | Found: In preview: The following process automates the testing of trainable classifiers ... Within 24 hours or less, the trainable classifier processes the seed data and builds a prediction model. | Fix: Replace 'After training, which takes 24 hours or less, you publish it for use' with 'In the preview creation workflow, the classifier builds its prediction model within 24 hours or less; after training and automatic testing complete, you publish it for use'. | Source: https://learn.microsoft.com/purview/trainable-classifiers-get-started-with
- [supported, minor] controls[0].ui / admin-path: Purview role-group membership is managed through Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users. | Found: Go to Settings > Roles and scopes ... Select Role groups. ... On Role groups for Microsoft Purview solutions, select a Microsoft Purview role group ... Select Edit ... On Edit members of the role group, select Choose users or Choose groups. | Fix: Include the omitted page heading: 'Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users'. All printed steps are in the documented order. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] controls[3].ui; What to check / admin-path: The On-Demand Classification paused/active control is on Microsoft Purview portal > Usage center > Pay-as-you-go. | Found: Usage center > Pay-as-you-go ... The pay-as-you-go usage page also lets you toggle the features listed between paused and active states. ... On-Demand Classification | Yes | Yes | Fix: Extend the path to 'Usage center > Pay-as-you-go > On-Demand Classification' and state in the note that its toggle selects paused or active. The current path correctly reaches the page that holds the control. | Source: https://learn.microsoft.com/purview/purview-billing-usage
- [supported, minor] Governance controls; controls[0]; What to check / role: The Information Protection family of Purview role groups provides Classifiers page access. | Found: Applicable Microsoft Purview role groups ... Information Protection ... Information Protection Admins ... Information Protection Analysts ... Information Protection Investigators ... Information Protection Readers | Fix: Write all role-group names in full instead of abbreviating the shared prefix: '(Information Protection, Information Protection Admins, Information Protection Analysts, Information Protection Investigators or Information Protection Readers)'. | Source: https://learn.microsoft.com/purview/data-classification-overview
- [contradicted, minor] What to check; Governance controls table / consistency: The checklist's classifier policy-count inspection and active-policy review do not have corresponding control rows. | Found: Open the Classifiers page and read each classifier's policy count ... Review the estimate and the active policies ... The table covers role membership, classifier creation, scan configuration, usage pause and the experience switch, not policy dependency inspection or active-policy review. | Fix: The policy-count inspection and active-policy review checklist steps have no corresponding rows. Remove those two review instructions from What to check; retain the existing dependency and policy-review advice in the prose. No additional control row is requested.
-->
