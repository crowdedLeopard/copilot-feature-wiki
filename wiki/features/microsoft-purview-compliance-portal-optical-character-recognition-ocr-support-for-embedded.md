---
title: "Microsoft Purview: OCR scans images embedded in Office files and PDFs in SharePoint and OneDrive"
slug: "microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-embedded"
roadmapId: 497912
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview OCR is planned to read images embedded in DOCX, PPTX, XLSX and hybrid PDFs in SharePoint and OneDrive for sensitive information. It is optional and billed pay-as-you-go, so compliance and SharePoint admins choose scope and watch spend."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "OCR is billed pay-as-you-go through an Azure subscription; the pricing page lists $0.001/transaction (USD). The Purview OCR page names no extra licence once billing is set up. Pay-as-you-go is documented as not yet available for GCC."
audiences: ["compliance","m365-admin","finops","security"]
tags: ["ocr","purview","dlp","sharepoint","onedrive","sensitive-information-types","pay-as-you-go","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 497912"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497912"
    kind: "roadmap"
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Overview of optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr-overview"
    kind: "learn"
  - title: "Set up and manage optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Set up pay-as-you-go billing for document processing"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing"
    kind: "learn"
  - title: "Licensing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing"
    kind: "learn"
  - title: "Try out pay-as-you-go services for document processing"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/promo-syntex"
    kind: "learn"
  - title: "Estimate your OCR costs"
    url: "https://learn.microsoft.com/purview/ocr-cost-estimator"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Start-SPOSiteOpticalCharacterRecognitionBackfill"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spositeopticalcharacterrecognitionbackfill"
    kind: "learn"
  - title: "Tutorial: Create and manage budgets"
    url: "https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-sharepoi","sensitive-information-types","microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr","microsoft-purview-compliance-portal-ocr-audit-logs","classifiers"]
controls:
  - governs: "Which locations and groups Purview scans with OCR"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "Compliance admin configures it. Settings take about an hour to take effect. The estimator (preview) is on the same page."
  - governs: "Which SharePoint sites OCR runs on"
    scope: "site"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition > Select the SharePoint libraries where you would like to enable optical character recognition > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -OpticalCharacterRecognitionSelectedSitesList <String[]>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "SharePoint Administrator or Global Administrator. The call needs pay-as-you-go billing and OCR scope already set to SelectedSites, takes up to 100 site URLs and by default overwrites the selected-sites list."
  - governs: "Azure subscription that bills OCR and other document processing services"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services > Set up billing and turn on services > Set up billing > Azure subscription"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing"
    api: null
    note: "Needs SharePoint Administrator or Global Administrator and owner or contributor rights on the Azure subscription. The same page covers disconnecting the subscription."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-07-03T23:00:54"
changes:
  - date: "2026-11-25"
    note: "New briefing: embedded-image OCR for Office files and PDFs in SharePoint and OneDrive, its pay-as-you-go meter, the two scope settings and the GCC billing question."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 75 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: dropped an unsupported 'until now' claim; noted that Azure budgets alert on OCR spend but do not stop it; described the Set-SPOTenant selected-sites parameter and its prerequisites; completed the billing path; removed three checklist steps with no control row."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 87
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8954eda4f433ec75c7dea2504d6c5b38"
---

## What's changing

The roadmap item plans optical character recognition (OCR) in Microsoft Purview to scan images embedded in DOCX, PPTX and XLSX files, and scanned or hybrid PDFs (searchable text plus images), for sensitive information. This is in addition to the support for standalone images.

Microsoft Learn already documents this behaviour for SharePoint and OneDrive. The Purview OCR page lists embedded images in DOCX, PPTX and XLSX, and scanned and hybrid PDFs, as supported file types for SharePoint and OneDrive, and the SharePoint OCR page says images added to Office files are scanned and the extracted text is indexed for search and used by compliance solutions. The roadmap record still shows the item as In development with a target of September CY2025, a target that has passed; this briefing reports both and does not decide which is current for your tenant.

OCR is an optional feature that is enabled at the tenant level. Once it is on, Purview applies existing data loss prevention (DLP), records management and insider risk management policies to images, and existing sensitive information types, trainable classifiers, exact data match and fingerprint types scan images as well as documents. Learn states that only images uploaded after OCR is enabled are scanned. The roadmap record lists GCC, GCC High and DoD, the General Availability release phase and the Web platform.

## Why it matters

OCR lets policies match sensitive text inside images as well as the text of a file. With embedded-image support, the same policies can match text inside a screenshot pasted into a Word, PowerPoint or Excel file, or inside a scanned page of a PDF. Expect more matches in DLP and records management reports, and an OCR charge for every image scanned.

Microsoft Learn describes OCR as optional and as needing pay-as-you-go billing, so the sources do not say that existing behaviour changes for tenants that have not set it up. The setup page does say that once an Azure subscription is linked to pay-as-you-go, OCR is set up and enabled for all SharePoint sites, so settle the site scope before billing is connected.

## Risk assessment

**Data exposure**
- The SharePoint OCR page says text extracted from images in Office files is indexed for search and integrated into compliance solutions. Expect text that sat inside images to appear in search results and in DLP, retention and insider risk matching. Check the sites in scope first (see the controls table).
- Scanning has limits: images must be between 50 x 50 and 16,000 x 16,000 pixels, SharePoint and OneDrive files are limited to 50 MB, and OCR extracts the first 2 million characters of text. A policy that finds nothing is not proof that an image holds nothing.

**Security & identity**
- Setting up billing needs the SharePoint Administrator or Global Administrator role plus owner or contributor rights on the Azure subscription. Purview OCR settings are configured by the compliance admin. Keep these assignments narrow.
- The SharePoint OCR service is available for SharePoint sites including hub sites and the primary site of a site collection; subsites are not supported, so do not assume subsite content is scanned.

**Autonomy & actions**
- OCR itself only extracts text. What follows is whatever action your existing DLP, records management or insider risk policies already take when a sensitive information type matches, now including matches found in images.

**Change & support**
- Only images uploaded after OCR is enabled are scanned. For SharePoint, the Start-SPOSiteOpticalCharacterRecognitionBackfill cmdlet starts OCR for files never processed or modified since the last run; its reference warns that it incurs cost and cannot be cancelled once started.
- OCR settings generally take effect about an hour after you turn them on. For PDFs, Microsoft points to Adobe's requirements for using Purview DLP features with PDF files.

## Cost and licensing

**Licence.** The Purview OCR page says that after billing information is entered in Microsoft Syntex, the compliance admin can configure OCR in Purview without any extra setup or licensing requirements. The licensing page says any user in the tenant can use these services provided they have a Microsoft 365 licence. You do not need to set up Microsoft Syntex itself.

**Meter.** OCR is billed through an Azure subscription at $0.001/transaction (USD) on the pricing page. Each image scanned is one transaction and each page of a PDF is charged separately. The meter counts the pages of PDF, TIF or TIFF files and, for Teams chats and email, embedded images, and the page says processing occurs every time the file is edited. For embedded file types, Purview does not rescan images when only text is updated, and SharePoint de-duplicates images to avoid duplicate charges. Each scanned image can be used in any number of DLP, insider risk, auto-labeling and records management policies at no extra charge. Charges appear in Microsoft Cost Management for Azure.

**Try-out capacity.** The pricing page says limited included monthly capacity is available through June 2026 for tenants with pay-as-you-go billing set up; the try-out page says through December 2026.

**Estimating.** The OCR cost estimator (preview) projects costs before you enable OCR, but its limitations say that estimating embedded images in SharePoint and OneDrive, and images in PDFs there, is not supported, so the actual SharePoint and OneDrive bill may be higher than estimated.

**Not yet published.** A rate or meter line specific to embedded images in Office files in SharePoint and OneDrive, and a spending cap for OCR. Azure Cost Management budgets can monitor the Azure subscription used for OCR billing and send threshold alerts; they do not stop consumption ([Tutorial: Create and manage budgets](https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets)).

## Scope

**Who and what.** OCR is configured at the tenant level and covers the locations you select; for this item, SharePoint and OneDrive. Supported files there include images (BMP, PNG, JPEG, GIF, TIFF, HEIC and many raw camera formats), scanned and hybrid PDFs, and embedded images in DOCX, PPTX and XLSX. More than 150 languages are supported.

**Roles.** Compliance admins configure OCR in the Purview portal. SharePoint Administrator or Global Administrator is needed to set up billing and to manage the SharePoint sites enabled for OCR in the Microsoft 365 admin center.

**Clouds.** The roadmap record lists GCC, GCC High and DoD. The document processing licensing page says pay-as-you-go, and the services that require it, are not yet available for GCC organisations, and OCR requires pay-as-you-go billing. How the roadmap listing and that statement fit together is an open question.

**Rollout.** The roadmap target is September CY2025, status In development. Learn describes the embedded-image support as available.

## Governance guidance

### Before rollout
- Ask the Global admin whether an Azure pay-as-you-go subscription is already linked for document processing; linking one enables OCR for all SharePoint sites unless you narrow the scope (billing and site scope rows).
- Run the OCR cost estimator (preview) from the OCR settings page in the Purview portal (first row), and treat its SharePoint and OneDrive figures as a floor because embedded images are not estimated there.
- Decide whether OCR should run on all sites, up to 100 selected sites, or no sites (second row), and list the sites that hold scanned forms, screenshots and image-heavy Office files.

### At rollout
- Select the SharePoint and OneDrive locations and the groups to include or exclude in the Purview OCR settings (first row).
- Confirm who holds the compliance admin role for Purview and the SharePoint Administrator or Global Administrator role for the Microsoft 365 admin center side.
- Allow about an hour for settings to take effect before testing with a file that contains an image with test data.

### After rollout
- Watch the roadmap item and Message center for a status change and for GCC-specific billing guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which locations and groups Purview scans with OCR</strong><br><small>Tenant</small><br><small class="controls__note">Compliance admin configures it. Settings take about an hour to take effect. The estimator (preview) is on the same page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites OCR runs on</strong><br><small>Site</small><br><small class="controls__note">SharePoint Administrator or Global Administrator. The call needs pay-as-you-go billing and OCR scope already set to SelectedSites, takes up to 100 site URLs and by default overwrites the selected-sites list.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Pay-as-you-go services › Settings › Document &amp; image services › Optical character recognition › Select the SharePoint libraries where you would like to enable optical character recognition › Edit <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/ocr" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -OpticalCharacterRecognitionSelectedSitesList &lt;String[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Azure subscription that bills OCR and other document processing services</strong><br><small>Tenant</small><br><small class="controls__note">Needs SharePoint Administrator or Global Administrator and owner or contributor rights on the Azure subscription. The same page covers disconnecting the subscription.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Pay-as-you-go services › Billing › Document processing services › Set up billing and turn on services › Set up billing › Azure subscription <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Two settings decide scope: the Purview OCR settings choose locations and groups, and the Microsoft 365 admin center setting chooses SharePoint sites. The SharePoint OCR page says the compliance admin can specify which SharePoint sites to include for DLP; if the two lists differ, the larger number of sites is enabled for OCR, and processing is not charged twice.

Microsoft Learn documents no PowerShell, Graph or other API for the Purview OCR settings at the time of writing (November 2026). The Set-SPOTenant reference documents -OpticalCharacterRecognitionSelectedSitesList as replacing, by default, the selected-sites list with up to 100 site URLs; it requires OCR scope SelectedSites and pay-as-you-go billing.

Only the billing subscription and site selection are admin-centre settings; neither is a spending cap, and unlinking billing is a different step from choosing sites.

## Open questions

- The roadmap shows this item as In development with a September CY2025 target, while Learn documents embedded-image OCR for SharePoint and OneDrive as supported. Has it reached every tenant, and will the roadmap record be updated? Watch the roadmap item and Message center.
- How do GCC, GCC High and DoD tenants pay for OCR, given that the licensing page says pay-as-you-go is not yet available for GCC and says nothing about GCC High or DoD? Watch the document processing licensing page.
- Which meter line applies to embedded images in Office files in SharePoint and OneDrive? The pricing page names embedded images only for Teams chats and email.
- Is there a cap that stops OCR charges? Watch the pay-as-you-go billing page.
- Does the included monthly capacity end in June 2026 or December 2026? The pricing and try-out pages differ.

<!-- rationale
risk: Medium. Text inside images in Office files and PDFs becomes visible to existing DLP, records management and insider risk policies, and Learn describes OCR as optional, so it needs configuration and communication rather than closing a new data path.
cost: Variable. OCR is metered pay-as-you-go through an Azure subscription at $0.001/transaction (USD) on Microsoft's pricing page, and no spending cap for it is documented.
impact: Low. Compliance and SharePoint admins configure it; end users would notice it where a policy matches text found in an image.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls: table / admin-path: The printed Microsoft 365 admin center site-selection path reaches Edit on the OCR panel. | Found: On the Optical character recognition panel, under Select the SharePoint libraries where you would like to enable optical character recognition, select Edit. | Fix: Append ' > Enable optical character recognition in Microsoft 365 > Selected sites (up to 100)' to controls[1].ui.path and its rendered table path. The existing steps are correct but stop before the site-scope setting; the same panel also offers All sites and No sites. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/ocr
- [supported, minor] controls[2].note; Risk assessment / role: Billing setup requires owner or contributor rights on the Azure subscription. | Found: You must have owner or contributor rights to the Azure subscription that you want to use for pay-as-you-go billing. | Fix: Add to the billing permissions sentence: 'The separate Microsoft 365 billing setup page also requires Owner or Contributor rights to the resource group.' Cite https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup, whose Before you begin section says 'You must have Owner or Contributor rights to the Azure subscription and resource group.' | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing
- [supported, minor] What's changing; Risk assessment; rationale: risk / applicability: Configured OCR extends existing insider risk policies to images, with SharePoint listed as a supported location. | Found: SharePoint sites | Data loss prevention Insider risk management Considers sensitive information types and trainable classifiers present in images for risk scoring. | Fix: Add: 'The insider risk setup page still describes these OCR settings as preview and lists Windows endpoints, SharePoint Online and Teams, not Exchange Online or OneDrive, for that preview.' Cite https://learn.microsoft.com/purview/insider-risk-management-configure#step-4-recommended-configure-prerequisites-for-policies. The cited general OCR page does not mark these settings preview. | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] Cost and licensing: Estimating; Governance guidance: Before rollout / behaviour: The preview OCR cost estimator projects costs before OCR is enabled. | Found: The tool scans your selected locations ... and projects how much OCR processing will cost before you enable it. | Fix: Qualify the estimator checklist sentence with: 'Use it only before OCR is enabled and if your tenant has not already used its one-time estimation opportunity; OCR and the estimator cannot run simultaneously, and the estimator cannot be re-enabled.' These restrictions are in the cited estimator page's Limitations section. | Source: https://learn.microsoft.com/purview/ocr-cost-estimator
-->
