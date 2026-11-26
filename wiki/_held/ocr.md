---
kind: "concept"
title: "Optical character recognition (OCR): which images does Microsoft 365 read for sensitive text, and what does it cost?"
slug: "ocr"
summary: "OCR reads text inside images so that Microsoft Purview policies and SharePoint search can act on it. Administrators use it to decide which locations, groups and devices have their images scanned, and so how many billable transactions the tenant runs."
created: "2026-11-26"
updated: "2026-11-26"
version: 1
tags: ["ocr","purview","dlp","endpoint-dlp","sensitive-information-types","pay-as-you-go","cost-management","insider-risk-management","ediscovery","sharepoint"]
covers: []
sources:
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Estimate your OCR costs"
    url: "https://learn.microsoft.com/purview/ocr-cost-estimator"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Set up pay-as-you-go billing for document processing"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing"
    kind: "learn"
  - title: "Set up and manage optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    kind: "learn"
  - title: "Overview of optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr-overview"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Learn about search and analytics settings in eDiscovery cases"
    url: "https://learn.microsoft.com/purview/edisc-settings-search-analytics"
    kind: "learn"
  - title: "Add search results to a review set in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-add-to-review-set"
    kind: "learn"
  - title: "Update ediscoveryCaseSettings"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update"
    kind: "learn"
  - title: "Supported file types in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-ref-supported-file-types"
    kind: "learn"
  - title: "Create and manage Communication Compliance policies"
    url: "https://learn.microsoft.com/purview/communication-compliance-policies"
    kind: "learn"
related: ["endpoint-dlp","sensitive-information-types","classifiers","ediscovery","insider-risk-management","microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-embedded","microsoft-purview-compliance-portal-data-loss-prevention-for-endpoints-optical-character-r","microsoft-purview-data-security-investigations-introducing-ocr-support"]
controls:
  - governs: "Whether Purview OCR scans images, in which locations and for which groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "Locations and included or excluded groups are chosen here, as is the Exchange sender scope. Settings take effect about an hour after being turned on."
  - governs: "Which Azure subscription pays for OCR and other document processing services"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Setup > Billing and licenses > Activate pay-as-you-go services > Get started > Pay-as-you-go services > Billing > Document processing services > Set up billing > Azure subscription"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing"
    api: null
    note: "SharePoint Administrator or Global Administrator, plus owner or contributor rights on the Azure subscription."
  - governs: "Which SharePoint sites the OCR service processes"
    scope: "site"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition > Select the SharePoint libraries where you would like to enable optical character recognition > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -OpticalCharacterRecognitionScope <SyntexFeatureScopeValue>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "Choices are All sites, Selected sites (up to 100) or No sites. Selected sites are listed with -OpticalCharacterRecognitionSelectedSitesList."
  - governs: "How much data each device may send to the cloud for classification, including OCR, per day"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api: null
    note: "The limit applies per device over a rolling 24 hours. The OCR default is 1,024 MB per device per day."
  - governs: "One-time estimate of OCR charges before scanning starts"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR) > Estimate the cost of an OCR scan for free > Try for free"
      docs: "https://learn.microsoft.com/purview/ocr-cost-estimator"
    api: null
    note: "Preview. Usable once per customer and cannot run at the same time as OCR."
  - governs: "Whether OCR runs on images added to an eDiscovery case's review sets"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Case settings > Search & analytics > Optical Character Recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/edisc-settings-search-analytics"
    api:
      kind: "graph"
      call: "PATCH /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/settings"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update"
    note: "Per case. The request body sets ocr (ocrSettings, with isEnabled). Separate from the tenant OCR setting and does not incur its charges."
confidence: "high"
dependents: 9
changes:
  - date: "2026-11-26"
    note: "New concept page: how OCR in Microsoft Purview and the SharePoint OCR service are billed per transaction, where scope is set and what the cost estimator does not cover."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 76
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "b25bb77c3713f0bff33ff500bed914a8"
---

## What it is

Optical character recognition (OCR) reads the text inside an image, such as a scanned form, a photographed card or a screenshot, so that Microsoft 365 can treat it like any other text. In Microsoft Purview it is an optional tenant-level setting: once it is on, your existing data loss prevention (DLP), insider risk management and records management policies look for sensitive information in images as well as in text, in the locations you choose.

### How it works

- **Billing first.** OCR runs only after pay-as-you-go billing for document processing (the billing Microsoft's pages still call Microsoft Syntex billing) is connected to an Azure subscription in the Microsoft 365 admin center.
- **Then scope.** In the Microsoft Purview portal a compliance admin picks the locations to scan (Exchange, SharePoint, OneDrive, Teams, and Windows and macOS devices) and the groups to include or exclude.
- **No new classifiers.** Once OCR is configured, existing [sensitive information types](/concepts/sensitive-information-types/), exact data match types, trainable classifiers and fingerprint types scan images as well as documents and email. See also [classifiers](/concepts/classifiers/).

### Four things called OCR

| Variant | What it does | Charge |
| --- | --- | --- |
| Purview OCR (tenant setting) | Lets DLP, insider risk and records management policies read text in images | OCR pay-as-you-go meter |
| SharePoint OCR service | Extracts text from images in SharePoint libraries so it is indexed in search and available to compliance features | OCR pay-as-you-go meter |
| eDiscovery case OCR | Extracts image text when items are added to a review set, set per case | Does not incur the tenant setting's charges |
| Data Security Investigations | Extracts image text automatically while preparing items for AI analysis | Not an additional charge |

Communication Compliance has its own built-in OCR and does not use the tenant OCR settings.

## Why it matters

Without OCR, a DLP rule that looks for credit card numbers finds them in an email body but not in a photograph of the card attached to it. With OCR, the same rule covers both, and every image scanned is a billable transaction. The decision OCR asks of an administrator is a trade between coverage and spend: which locations, which groups and which devices.

The billing connection reaches further than Purview. Microsoft's setup page for the SharePoint OCR service says that once an Azure subscription is linked to pay-as-you-go, OCR is automatically set up and enabled for all SharePoint sites, and that by default the service is on for libraries in all sites. Expect connecting billing for Purview OCR to start search-indexing OCR on every site unless the site setting is narrowed. Where the Purview scope and the service's sites differ, Microsoft says the larger set of sites is enabled and processing is not charged twice.

## Cost and licensing

- **Licence:** once billing information is entered, a compliance admin can configure OCR in Microsoft Purview without any extra setup or licensing requirements. Billing needs an Azure subscription in the same tenant and a resource group in it.
- **Meter:** Microsoft's document processing price list gives optical character recognition at $0.001 (USD) per transaction. A transaction is a page of an image, PDF or TIFF file, or an embedded image in a Teams chat or email message, and processing occurs every time the file is edited.
- **How Purview counts:** each image scanned is one transaction, and each page of a PDF is charged separately, so a 10-page PDF is 10 scans. One scanned image can be used by any number of DLP, insider risk, auto-labelling and records management policies at no extra charge.
- **Caching:** small images in Exchange, such as logos and signatures, are billed once per unique image across the tenant over a moving five-day window; on endpoints the cache lasts 30 days; standalone images in SharePoint and OneDrive are not cached.
- **Where it is charged:** the linked Azure subscription. Usage appears in Microsoft Cost Management, filtered by product, with a Site tag, and can take up to 24 hours to appear. These charges do not apply to a Microsoft Azure Consumption Commitment (MACC).

## Risks and limits

- **Only new images.** Only images uploaded after OCR is enabled are scanned, so content stored before that date is not checked for sensitive text in images.
- **Email volume.** By default incoming, internal and outgoing email are all scanned. Moving from **All sender groups** to **Specific sender groups**, or selecting **Advanced Setting (Only Exchange)** to scan only mail sent outside the organisation, reduces transactions. DLP policy tips are not supported for images in Exchange.
- **Device bandwidth.** On Windows and macOS devices the default limit is 1,024 MB of data per device per day, and OCR stops scanning images once it is reached. Raising it widens coverage and spend. Folders excluded in endpoint DLP settings are not scanned, and devices need network access to blob.core.windows.net endpoints. See [Endpoint DLP](/concepts/endpoint-dlp/).
- **Size limits.** Files up to 20 MB in Exchange and Teams and 50 MB elsewhere; images from 50 × 50 to 16,000 × 16,000 pixels; only the first 2 million characters are extracted; Exchange scans up to 20 embedded images per file.
- **Estimates run low for SharePoint and OneDrive.** The cost estimator does not estimate PDFs or embedded images there, so Microsoft warns the actual bill may be higher.
- **One estimate only.** The estimator (preview) can be used once per customer, cannot run at the same time as OCR, and its dashboard data is deleted 90 days after it is first turned on.
- **Separate switches.** Turning on tenant OCR does not turn on eDiscovery OCR, which is set per case.
- **Delay.** OCR settings generally take effect about an hour after they are turned on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Purview OCR scans images, in which locations and for which groups</strong><br><small>Tenant</small><br><small class="controls__note">Locations and included or excluded groups are chosen here, as is the Exchange sender scope. Settings take effect about an hour after being turned on.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Azure subscription pays for OCR and other document processing services</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint Administrator or Global Administrator, plus owner or contributor rights on the Azure subscription.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Setup › Billing and licenses › Activate pay-as-you-go services › Get started › Pay-as-you-go services › Billing › Document processing services › Set up billing › Azure subscription <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites the OCR service processes</strong><br><small>Site</small><br><small class="controls__note">Choices are All sites, Selected sites (up to 100) or No sites. Selected sites are listed with -OpticalCharacterRecognitionSelectedSitesList.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Pay-as-you-go services › Settings › Document &amp; image services › Optical character recognition › Select the SharePoint libraries where you would like to enable optical character recognition › Edit <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/ocr" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -OpticalCharacterRecognitionScope &lt;SyntexFeatureScopeValue&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How much data each device may send to the cloud for classification, including OCR, per day</strong><br><small>Tenant</small><br><small class="controls__note">The limit applies per device over a rolling 24 hours. The OCR default is 1,024 MB per device per day.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › Advanced classification scanning and protection <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>One-time estimate of OCR charges before scanning starts</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Usable once per customer and cannot run at the same time as OCR.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) › Estimate the cost of an OCR scan for free › Try for free <a href="https://learn.microsoft.com/purview/ocr-cost-estimator" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether OCR runs on images added to an eDiscovery case's review sets</strong><br><small class="controls__note">Per case. The request body sets ocr (ocrSettings, with isEnabled). Separate from the tenant OCR setting and does not incur its charges.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Case settings › Search &amp; analytics › Optical Character Recognition (OCR) <a href="https://learn.microsoft.com/purview/edisc-settings-search-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/settings</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Three roles share the work. Connecting billing needs the SharePoint Administrator or Global Administrator role and owner or contributor rights on the Azure subscription. The Purview OCR settings are configured by the compliance admin; to create and deploy the policies that use OCR, an account must be in the Compliance administrator, Compliance data administrator, Global administrator, Information Protection or Information Protection Admin role group (see [role groups](/concepts/role-groups/)). Reading OCR costs in Cost Management needs at least read access to the billing resource group.

The billing connection is shared by all document processing services: disconnecting the Azure subscription (**Settings > Org settings > Pay-as-you-go services > Billing > Document processing services > Edit billing information > Disconnect Azure subscription**) applies to them as a whole, not to OCR alone. Microsoft Learn documents no PowerShell or Graph equivalent for the Purview OCR settings at the time of writing (November 2026).

## What to check

- Run the OCR cost estimator before turning OCR on, and download its reports before the dashboard data is deleted.
- Review the Purview OCR settings: which locations and groups are in scope, and whether Exchange scans all sender groups.
- Check the SharePoint OCR site setting in the Microsoft 365 admin center, which covers all sites once billing is linked.
- Confirm which Azure subscription and resource group Document processing services bill to, and who can read its costs in Cost Management.
- Review the advanced classification bandwidth limit before adding devices to OCR scope.
- Turn on OCR in each eDiscovery case where reviewers need image text.

## Open questions

- Will Microsoft publish a PowerShell or Graph interface for the Purview OCR settings (locations, groups and the Exchange advanced setting)?
- Which audit records are written for each OCR transaction, and in which workloads?
- The Communication Compliance page calls the tenant settings "OCR (preview) settings" while the Purview OCR page carries no preview label: which is current?
- Is there any way to stop OCR charges at a spending limit, rather than only by narrowing scope or disconnecting billing?

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What it is: eDiscovery case OCR; controls[5].governs; What to check / applicability: Turning on case OCR extracts image text when items are added to review sets, without specifying the advanced-indexing condition. | Found: OCR processing only occurs on files that are reindexed during the Advanced indexing process. | Fix: Replace the eDiscovery variant's description with 'Extracts image text from files reindexed during Advanced indexing and added to a review set, when enabled per case.' Add to controls[5].note: 'OCR runs only on items processed during Advanced indexing, if that option is selected in the search query.' Change the final checklist item to 'Enable case OCR where needed; it processes only files reindexed during Advanced indexing.' The cited settings page explicitly warns that some attachments added to review sets are not processed. | Source: https://learn.microsoft.com/purview/edisc-settings-search-analytics
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: credit card photograph example / behaviour: Without OCR, DLP cannot scan the credit card number inside an attached photograph. | Found: Without OCR, DLP policies, and auto-labeling policies can't scan image-based content, scanned documents, screenshots, and invoices, leaving sensitive data in images unprotected. | Fix: Add https://learn.microsoft.com/purview/zero-trust-purview-protect-data to sources; it explicitly supports the negative half of the example. | Source: https://learn.microsoft.com/purview/zero-trust-purview-protect-data
- [supported, minor] Why it matters: billing connection; What to check / default: Linking Azure billing automatically enables the SharePoint OCR service for libraries in all sites. | Found: After an Azure subscription is linked to pay-as-you-go, OCR will be automatically set up and enabled for all SharePoint sites. | Fix: After the all-sites statement add: 'The OCR overview qualifies supported sites: subsites are not supported.' Both pages are already cited; https://learn.microsoft.com/microsoft-365/documentprocessing/ocr-overview states 'Subsites aren't supported.' | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/ocr
- [supported, minor] Cost and licensing: Meter / cost: Processing occurs every time a file is edited. | Found: Processing occurs every time the file is edited. | Fix: Append: 'The Purview OCR page separately says that in embedded file types, if only text is updated, images are not scanned again.' This preserves both cited pages' statements: https://learn.microsoft.com/purview/ocr-learn-about qualifies the price list's general edit rule. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services
- [supported, minor] controls[1].ui / admin-path: The billing subscription is selected through the stated Setup > Billing and licenses > Activate pay-as-you-go services route. | Found: On the Set up billing and turn on services panel, in the Set up billing section, under Azure subscription, select the dropdown | Fix: Use the full path: 'Setup > Billing and licenses > Activate pay-as-you-go services > Get started > Pay-as-you-go services > Billing > Document processing services > Set up billing and turn on services > Set up billing > Azure subscription'. The omitted panel name is a heading, not a missing choice. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing
- [supported, minor] controls[2].ui / admin-path: The stated Org settings > Pay-as-you-go services route reaches the Edit button for SharePoint OCR site scope. | Found: On the Optical character recognition panel, under Select the SharePoint libraries where you would like to enable optical character recognition, select Edit. | Fix: Extend the existing path after 'Edit' with '> Enable optical character recognition in Microsoft 365 > All sites / Selected sites (up to 100) / No sites'. The current path reaches the correct panel but stops before its scope choices. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/ocr
- [supported, minor] Governance controls: disconnect billing path / admin-path: The stated Settings > Org settings > Pay-as-you-go services route reaches Disconnect Azure subscription. | Found: On the Manage billing panel, under Azure subscription, select Edit billing information. 4. Under Manage billing, select Disconnect Azure subscription. | Fix: Use 'Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services > Manage billing > Azure subscription > Edit billing information > Manage billing > Disconnect Azure subscription'. The omitted Services tab lists the item; the other omissions are headings. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing
- [contradicted, minor] What to check: Cost Management access / consistency: Every control named in What to check has a controls-table row. | Found: Confirm which Azure subscription and resource group Document processing services bill to, and who can read its costs in Cost Management. | Fix: Remove 'and who can read its costs in Cost Management' from the checklist item. Billing selection has a row, but reviewing Cost Management read access does not; the factual permission guidance can remain in the governance prose.
-->
