---
title: "Microsoft Purview: OCR scanning of images for DLP in SharePoint and OneDrive (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-sharepoi"
roadmapId: 160010
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans OCR so Purview DLP can detect sensitive text in images in SharePoint and OneDrive for GCC, GCC High and DoD. Learn describes OCR as optional and pay-as-you-go; target April CY2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says OCR needs Microsoft Syntex pay-as-you-go billing in an Azure subscription, after which a Compliance admin can configure OCR in Microsoft Purview without any extra setup or licensing requirements. The USD meter is $0.001 per transaction. The document processing licensing page separately requires a Microsoft 365 licence for users of pay-as-you-go services."
audiences: ["compliance","security","finops","m365-admin"]
tags: ["purview","dlp","sharepoint","onedrive","sensitive-information-types","pay-as-you-go","ocr","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 160010"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=160010"
    kind: "roadmap"
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
  - title: "Licensing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing"
    kind: "learn"
  - title: "What's new with pay-as-you-go services in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-whats-new"
    kind: "learn"
  - title: "Set up and manage optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    kind: "learn"
  - title: "Overview of optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr-overview"
    kind: "learn"
  - title: "Configure Microsoft Purview for Zero Trust: Protect data"
    url: "https://learn.microsoft.com/purview/zero-trust-purview-protect-data"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Start-SPOSiteOpticalCharacterRecognitionBackfill"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spositeopticalcharacterrecognitionbackfill"
    kind: "learn"
  - title: "ocrSettings resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-ocrsettings"
    kind: "learn"
videos: []
related: ["sensitive-information-types","microsoft-purview-compliance-portal-data-loss-prevention-decoupling-of-policy-tips-and-ema","microsoft-purview-information-protection-auto-labeling-scale-increase-for-sh-us-government"]
controls:
  - governs: "Which locations and groups Purview OCR scans, including SharePoint and OneDrive"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "Requires a Purview role group such as Compliance administrator. Learn describes OCR as optional and enabled at tenant level."
  - governs: "Whether pay-as-you-go billing for document processing, which OCR needs, is connected"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services > Set up billing > Azure subscription"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing"
    api: null
    note: "Needs a SharePoint or Global administrator, plus Owner or Contributor on the Azure subscription. The pay-as-you-go What's new page documents a newer entry point, Billing > Pay-as-you-go; the setup page still gives this route."
  - governs: "Which SharePoint sites are enabled for the OCR service"
    scope: "site"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition > Select the SharePoint libraries where you would like to enable optical character recognition > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -OpticalCharacterRecognitionScope <SyntexFeatureScopeValue>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "In the Enable optical character recognition in Microsoft 365 panel, choose All sites, Selected sites (up to 100) or No sites. Site scope only; Learn does not say it covers OneDrive. Needs a SharePoint or Global administrator."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: OCR for DLP in SharePoint and OneDrive, its pay-as-you-go billing, and the Purview and SharePoint settings that control it."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: default state now Not stated for the US Government clouds, GCC pay-as-you-go availability and cost estimator limits added, and control paths extended."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 77
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a742a08b34c58d2cfda4fbb7818d0efc"
---

## What's changing

The roadmap item states that Microsoft plans optical character recognition (OCR) support in Microsoft Purview, so that sensitive content in images is detected and data loss prevention (DLP) policies can then prevent that data leaving SharePoint Online and OneDrive. The record names JPG, JPEG, PNG, TIFF, BMP and image-only PDF as the supported file types. Its status is In development with a target of April CY2027, release phases General Availability and Preview, clouds GCC, GCC High and DoD, and platform Web. The target is a plan, not a delivery date.

Microsoft Learn already documents OCR scanning in Purview. It describes OCR as an optional feature that you must enable at the tenant level; after that you select the locations to scan, which can include SharePoint and OneDrive. Microsoft says Purview then applies your existing DLP, records management and insider risk management policies to images as well as text. Learn's own example is a DLP condition on the Credit Card sensitive information type, which then matches card numbers in both text and images. The Learn page does not say which clouds it describes, so treat it as the description of the Purview feature and the roadmap item as the plan for the US Government clouds.

The Learn list of SharePoint and OneDrive file types is longer than the roadmap's: it includes BMP, PNG, JPEG, JPG, JFIF, GIF, TIF, TIFF, HEIC, HEIF and many camera raw formats, PDFs (scanned and hybrid), and embedded images in DOCX, PPTX and XLSX files. Learn also states that images must be 50 MB or smaller on SharePoint and OneDrive, between 50 x 50 and 16,000 x 16,000 pixels, that only the first 2 million characters of text are extracted, and that, on its Purview OCR page, only images uploaded after OCR is enabled are scanned. It adds that OCR settings in general take effect about an hour after you turn them on.

## Why it matters

Microsoft's Zero Trust guidance for Purview states that without OCR, DLP and auto-labeling policies cannot scan image-based content such as scanned documents, screenshots and invoices. For a government tenant, this item is the route to DLP rules covering image files in SharePoint and OneDrive, which is the exfiltration gap the roadmap text describes.

The change comes with a bill and a setup task. Learn describes OCR as billed per transaction through an Azure subscription, so someone has to own that subscription before the compliance team can switch scanning on. If nobody acts, Learn's description of OCR as optional points to images staying unscanned, but Microsoft has not stated what happens on arrival in GCC, GCC High and DoD. Images already in libraries are also outside scanning, because Learn says only images uploaded after OCR is enabled are scanned.

## Risk assessment

**Data exposure**
- Until OCR is configured, DLP rules cannot see text in images, per Microsoft's Zero Trust guidance. Plan for sensitive data in screenshots and scans to remain undetected until then.
- Learn's Purview OCR page says only images uploaded after OCR is enabled are scanned, so existing library images stay outside scanning. The SharePoint PowerShell reference separately documents OCR backfill for previously unprocessed files on OCR-enabled sites; government-cloud applicability is not stated.
- Learn's SharePoint OCR overview says that for an image file the extracted text is stored in the Extracted text metadata column, so text from images becomes visible as library metadata; check who can read those columns. For PDF and TIFF files, the extracted text is indexed in search but is not available in the metadata column.

**Security & identity**
- Learn lists the Purview role groups that can configure OCR (Compliance administrator, Compliance data administrator, Global administrator, Information Protection, Information Protection Admin) and says a Global or SharePoint administrator sets up billing. Review who holds these.

**Autonomy & actions**
- No change: OCR is a scanning step that supplies results to the DLP, records management and insider risk policies you already run.

**Change & support**
- Rules that match a sensitive information type will start matching images once OCR covers a location. Expect new matches and user questions on SharePoint and OneDrive, and test policy actions on a pilot scope first.
- Learn's SharePoint OCR page says OCR is turned on for libraries in all SharePoint sites once an Azure subscription is linked, so linking billing can start scanning and charges beyond what the compliance team scoped.

## Cost and licensing

**Licence.** Learn says OCR requires pay-as-you-go billing for Microsoft Syntex (you do not need to set up Syntex itself). After billing is entered, Learn says a Compliance admin can configure OCR in Microsoft Purview without any extra setup or licensing requirements. Source: [Learn about optical character recognition in Microsoft Purview](https://learn.microsoft.com/purview/ocr-learn-about). The [document processing licensing page](https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing) separately requires a Microsoft 365 licence for users of pay-as-you-go services, so the absence of an extra OCR licence does not remove that base requirement.

**Meter.** Charges appear on service meters in the Azure subscription you chose when setting up pay-as-you-go billing. The document processing pricing page lists optical character recognition at $0.001/transaction (USD). Each image scanned counts as one transaction and each page of a PDF is charged separately, so a 10-page PDF is 10 scans. That pricing page says processing occurs every time the file is edited, and the Purview page says there is no caching mechanism for standalone images in SharePoint and OneDrive; however, in embedded file types, if only text is updated, images are not scanned again. Using a scanned image in several policies across DLP, insider risk management, auto-labeling and records management carries no extra charge, per Learn.

**Planning.** Learn offers an OCR cost estimator (preview) that projects charges for chosen locations before you enable OCR. The [estimator](https://learn.microsoft.com/purview/ocr-cost-estimator) does not cover embedded images or images in PDFs in SharePoint and OneDrive, so actual bills may exceed the estimate. Compare billed usage in Microsoft Cost Management for Azure; Learn says usage can take up to 24 hours to appear.

**Not yet published.** A rate for GCC, GCC High and DoD is not yet published: the pricing page gives a single USD rate and does not name clouds.

## Scope

The roadmap item lists GCC, GCC High and DoD, platform Web, and the SharePoint Online and OneDrive locations. Learn's description of OCR also covers Exchange, Teams, and Windows and macOS devices, which this roadmap item does not name.

**Who configures it.** A Global or SharePoint administrator sets up pay-as-you-go billing, and needs Owner or Contributor rights on the Azure subscription. A Compliance admin configures the OCR settings in the Microsoft Purview portal.

**Prerequisites.** An Azure pay-as-you-go subscription in the tenant. At the time of writing (November 2026), Learn states that pay-as-you-go licensing and the services that require it are not yet available in GCC ([Licensing for document processing](https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing)). The roadmap nevertheless targets this OCR release for April CY2027; billing and availability for that future release remain to be confirmed. That page names only GCC; whether pay-as-you-go billing is offered in GCC High and DoD is not stated there. Rollout mechanics and per-user licence requirements for the US Government clouds are not stated either.

## Governance guidance

### Before rollout
- Ask the Global administrator to confirm an Azure subscription and resource group exist in the tenant, and who owns the Azure meter charges.
- Agree a budget owner before billing is linked.
- List the DLP policies that use sensitive information types and cover SharePoint and OneDrive, and decide which should act on images first.
- Decide which SharePoint sites OCR should cover, because Learn says linking billing turns the SharePoint OCR service on for all sites by default.

### At rollout
- Set up pay-as-you-go billing for document processing in the Microsoft 365 admin center (Global or SharePoint administrator), following the documented general workflow, which Learn says is not yet available in GCC.
- Choose the locations and groups OCR scans in the Microsoft Purview portal, starting with SharePoint and OneDrive.
- Limit the SharePoint sites enabled for OCR if the default of all sites is wider than intended.
- Allow about an hour for OCR settings to take effect and upload test images afterwards, because Learn says only images uploaded after OCR is enabled are scanned.

### After rollout
- Tell SharePoint and OneDrive users that images can now trigger the DLP rules that already apply to their documents.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which locations and groups Purview OCR scans, including SharePoint and OneDrive</strong><br><small>Tenant</small><br><small class="controls__note">Requires a Purview role group such as Compliance administrator. Learn describes OCR as optional and enabled at tenant level.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether pay-as-you-go billing for document processing, which OCR needs, is connected</strong><br><small>Tenant</small><br><small class="controls__note">Needs a SharePoint or Global administrator, plus Owner or Contributor on the Azure subscription. The pay-as-you-go What's new page documents a newer entry point, Billing &gt; Pay-as-you-go; the setup page still gives this route.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Pay-as-you-go services › Billing › Document processing services › Set up billing › Azure subscription <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites are enabled for the OCR service</strong><br><small>Site</small><br><small class="controls__note">In the Enable optical character recognition in Microsoft 365 panel, choose All sites, Selected sites (up to 100) or No sites. Site scope only; Learn does not say it covers OneDrive. Needs a SharePoint or Global administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Pay-as-you-go services › Settings › Document &amp; image services › Optical character recognition › Select the SharePoint libraries where you would like to enable optical character recognition › Edit <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/ocr" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -OpticalCharacterRecognitionScope &lt;SyntexFeatureScopeValue&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Purview OCR setting and the SharePoint site setting are separate controls. Learn says that if different sites are specified for the OCR service and for DLP, the maximum number of sites is enabled for OCR and you are not charged twice for processing; a narrow Purview scope does not stop the SharePoint service being on for more sites.

The paths and call in the table are the documented general workflow, not a workflow Learn describes as currently available in GCC. Purview OCR settings need one of the role groups Learn lists. Billing needs a SharePoint administrator or Global administrator, and Owner or Contributor on the Azure subscription. The Microsoft Graph ocrSettings resource is documented for an eDiscovery case, not for these tenant settings. Do not treat it as a control for this item.

## Open questions

- Does Microsoft Learn's OCR behaviour, including the SharePoint and OneDrive file types and limits, apply unchanged to GCC, GCC High and DoD when this item reaches General Availability? Watch the roadmap item and the Purview OCR page.
- At the time of writing (November 2026), Learn states that pay-as-you-go licensing and the services that require it are not yet available in GCC, while the roadmap targets this OCR release for April CY2027. Will pay-as-you-go billing be offered in GCC, GCC High and DoD by then, and at what OCR rate? Watch the document processing licensing and pricing pages.
- Will the roadmap's file types (JPG, JPEG, PNG, TIFF, BMP, image-only PDF) be the supported set in the US Government clouds, given Learn lists more for SharePoint and OneDrive?
- Which release phase applies to which cloud, given the record lists both General Availability and Preview? Watch the roadmap item.

<!-- rationale
risk: Medium. OCR lets existing DLP policies act on text inside images, which needs configuration and testing; Learn describes the general Purview OCR feature as optional and enabled at tenant level, but Microsoft has not stated what happens on arrival in GCC, GCC High and DoD.
cost: Variable. Learn describes OCR as billed pay-as-you-go through an Azure subscription, with a published rate of $0.001 per transaction, each image or PDF page counting as one; a rate for the US Government clouds is not yet published.
impact: Low. Compliance and billing administrators do the setup; other users notice only when a DLP rule they already work under starts matching text inside an image.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Autonomy & actions / applicability: Configured OCR extends existing insider risk management policies to images. | Found: Microsoft Purview applies your existing policies for data loss prevention (DLP), records management, and insider risk management (IRM) to images and text-based content. | Fix: Add: 'The Insider Risk Management setup page still calls its OCR integration preview and lists Windows endpoint devices, SharePoint Online and Teams, excluding Exchange Online and OneDrive: https://learn.microsoft.com/purview/insider-risk-management-configure#step-4-recommended-configure-prerequisites-for-policies.' | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] What's changing / behaviour: The Purview OCR page states a maximum image file size of 50 MB for SharePoint and OneDrive. | Found: File size (SharePoint, OneDrive, Windows, and macOS endpoints) | 50 MB max | Fix: After the 50 MB limit, add: 'The SharePoint OCR overview instead says images must be less than 50 MB: https://learn.microsoft.com/microsoft-365/documentprocessing/ocr-overview#file-limitations.' | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] Cost and licensing: Meter; rationale: cost / cost: Each scanned standalone image counts as one transaction according to the Purview page. | Found: Each image scanned counts as one transaction. This pricing means that stand-alone images (JPEG, JPG, PNG, BMP, or TIFF) each count as a single transaction. | Fix: Add after the image transaction statement: 'The document processing pricing table instead counts pages processed for TIF and TIFF files: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services#document-processing-services.' Apply the same qualification to the cost rationale. | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] controls[0].ui; Governance controls: row 1 / admin-path: Purview OCR location and group settings are reached through Microsoft Purview portal > Settings > Optical character recognition (OCR). | Found: Sign in to the Microsoft Purview portal. Select Settings. Select Optical character recognition (OCR) to enter your OCR configuration settings. Select the locations where you want to scan images. Select the groups that you want included or excluded from OCR scans. | Fix: Keep the documented path and append ' > locations > groups' so controls[0].ui.path ends at the selections that govern scanning. These are the location and group selections in https://learn.microsoft.com/purview/ocr-learn-about#configure-your-ocr-settings; update the rendered row consistently. | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] controls[1].ui; Governance controls: row 2 / admin-path: Document processing billing is reached through Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services > Set up billing > Azure subscription. | Found: On the Pay-as-you-go services page, on the Billing tab, select Document processing services. On the Set up billing and turn on services panel, in the Set up billing section, under Azure subscription, select the dropdown | Fix: Set controls[1].ui.path to 'Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services > Set up billing and turn on services > Set up billing > Azure subscription'. The missing panel heading is documented at https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing; update the rendered row consistently. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing
- [supported, minor] controls[2].ui; Governance controls: row 3 / admin-path: SharePoint OCR site scope is reached through the documented Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition > library selection heading > Edit route. | Found: On the Optical character recognition panel, under Select the SharePoint libraries where you would like to enable optical character recognition, select Edit. On the Enable optical character recognition in Microsoft 365 panel, change the setting from All sites to Selected sites (up to 100) or No sites | Fix: Extend controls[2].ui.path to 'Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition > Select the SharePoint libraries where you would like to enable optical character recognition > Edit > Enable optical character recognition in Microsoft 365 > All sites / Selected sites (up to 100) / No sites', as documented at https://learn.microsoft.com/microsoft-365/documentprocessing/ocr#manage-sites-enabled-for-ocr. Update the rendered row consistently. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/ocr
-->
