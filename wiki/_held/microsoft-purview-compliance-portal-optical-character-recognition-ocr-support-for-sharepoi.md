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
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says OCR needs Microsoft Syntex pay-as-you-go billing in an Azure subscription, after which a Compliance admin can configure OCR in Microsoft Purview without any extra setup or licensing requirements. The USD meter is $0.001 per transaction."
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
      path: "Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing"
    api: null
    note: "Needs a SharePoint administrator or Global administrator, plus Owner or Contributor on the Azure subscription."
  - governs: "Which SharePoint sites are enabled for the OCR service"
    scope: "site"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -OpticalCharacterRecognitionScope <SyntexFeatureScopeValue>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "SharePoint site scope only; Learn does not say it covers OneDrive. Needs a SharePoint administrator or Global administrator."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: OCR for DLP in SharePoint and OneDrive, its pay-as-you-go billing, and the Purview and SharePoint settings that control it."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 60
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "c26e2c90dca7720c3732c4789f39ef8f"
---

## What's changing

The roadmap item states that Microsoft plans optical character recognition (OCR) support in Microsoft Purview, so that sensitive content in images is detected and data loss prevention (DLP) policies can then prevent that data leaving SharePoint Online and OneDrive. The record names JPG, JPEG, PNG, TIFF, BMP and image-only PDF as the supported file types. Its status is In development with a target of April CY2027, release phases General Availability and Preview, clouds GCC, GCC High and DoD, and platform Web. The target is a plan, not a delivery date.

Microsoft Learn already documents OCR scanning in Purview. It describes OCR as an optional feature that you must enable at the tenant level; after that you select the locations to scan, which can include SharePoint and OneDrive. Microsoft says Purview then applies your existing DLP, records management and insider risk management policies to images as well as text. Learn's own example is a DLP condition on the Credit Card sensitive information type, which then matches card numbers in both text and images. The Learn page does not say which clouds it describes, so treat it as the description of the Purview feature and the roadmap item as the plan for the US Government clouds.

The Learn list of SharePoint and OneDrive file types is longer than the roadmap's: it includes BMP, PNG, JPEG, JPG, JFIF, GIF, TIF, TIFF, HEIC, HEIF and many camera raw formats, PDFs (scanned and hybrid), and embedded images in DOCX, PPTX and XLSX files. Learn also states that images must be 50 MB or smaller on SharePoint and OneDrive, between 50 x 50 and 16,000 x 16,000 pixels, that only the first 2 million characters of text are extracted, and that only images uploaded after OCR is enabled are scanned. It adds that OCR settings in general take effect about an hour after you turn them on.

## Why it matters

Microsoft's Zero Trust guidance for Purview states that without OCR, DLP and auto-labeling policies cannot scan image-based content such as scanned documents, screenshots and invoices. For a government tenant, this item is the route to DLP rules covering image files in SharePoint and OneDrive, which is the exfiltration gap the roadmap text describes.

The change comes with a bill and a setup task. Learn describes OCR as billed per transaction through an Azure subscription, so someone has to own that subscription before the compliance team can switch scanning on. If nobody acts, Learn's description of OCR as optional points to images staying unscanned, but Microsoft has not stated what happens on arrival in GCC, GCC High and DoD. Images already in libraries are also outside scanning, because Learn says only images uploaded after OCR is enabled are scanned.

## Risk assessment

**Data exposure**
- Until OCR is configured, DLP rules cannot see text in images, per Microsoft's Zero Trust guidance. Plan for sensitive data in screenshots and scans to remain undetected until then.
- Images uploaded before OCR is enabled are not scanned, so existing libraries keep whatever exposure they have now.
- Learn's SharePoint OCR overview says that for an image file the extracted text is stored in the Extracted text metadata column, so text from images becomes visible as library metadata; check who can read those columns.

**Security & identity**
- Learn lists the Purview role groups that can configure OCR (Compliance administrator, Compliance data administrator, Global administrator, Information Protection, Information Protection Admin) and says a Global or SharePoint administrator sets up billing. Review who holds these.

**Autonomy & actions**
- No change: OCR is a scanning step that feeds the DLP, records management and insider risk policies you already run. Any block or restriction comes from those policies.

**Change & support**
- Rules that match a sensitive information type will start matching images once OCR covers a location. Expect new matches and user questions on SharePoint and OneDrive, and test policy actions on a pilot scope first.
- Learn's SharePoint OCR page says OCR is turned on for libraries in all SharePoint sites once an Azure subscription is linked, so linking billing can start scanning and charges beyond what the compliance team scoped.

## Cost and licensing

**Licence.** Learn says OCR requires pay-as-you-go billing for Microsoft Syntex (you do not need to set up Syntex itself). After billing is entered, Learn says a Compliance admin can configure OCR in Microsoft Purview without any extra setup or licensing requirements. Source: [Learn about optical character recognition in Microsoft Purview](https://learn.microsoft.com/purview/ocr-learn-about).

**Meter.** Charges appear on service meters in the Azure subscription you chose when setting up pay-as-you-go billing. The document processing pricing page lists optical character recognition at $0.001/transaction (USD). Each image scanned counts as one transaction and each page of a PDF is charged separately, so a 10-page PDF is 10 scans. That pricing page says processing occurs every time the file is edited, and the Purview page says there is no caching mechanism for standalone images in SharePoint and OneDrive. Using a scanned image in several policies across DLP, insider risk management, auto-labeling and records management carries no extra charge, per Learn.

**Planning.** Learn offers an OCR cost estimator (preview) that projects charges for chosen locations before you enable OCR. Compare billed usage against it in Microsoft Cost Management for Azure; Learn says usage can take up to 24 hours to appear.

**Not yet published.** A rate for GCC, GCC High and DoD is not yet published: the pricing page gives a single USD rate and does not name clouds.

## Scope

The roadmap item lists GCC, GCC High and DoD, platform Web, and the SharePoint Online and OneDrive locations. Learn's description of OCR also covers Exchange, Teams, and Windows and macOS devices, which this roadmap item does not name.

**Who configures it.** A Global or SharePoint administrator sets up pay-as-you-go billing, and needs Owner or Contributor rights on the Azure subscription. A Compliance admin configures the OCR settings in the Microsoft Purview portal.

**Prerequisites.** An Azure pay-as-you-go subscription in the tenant. Rollout mechanics, per-user licence requirements and the cloud availability of the Learn-described behaviour are not stated in the pages read for the US Government clouds.

## Governance guidance

### Before rollout
- Ask the Global administrator to confirm an Azure subscription and resource group exist in the tenant, and who owns the Azure meter charges.
- Use the OCR cost estimator (preview) on SharePoint and OneDrive to project charges, and agree a budget owner before billing is linked.
- List the DLP policies that use sensitive information types and cover SharePoint and OneDrive, and decide which should act on images first.
- Decide which SharePoint sites OCR should cover, because Learn says linking billing turns the SharePoint OCR service on for all sites by default.

### At rollout
- Set up pay-as-you-go billing for document processing in the Microsoft 365 admin center (Global or SharePoint administrator).
- Choose the locations and groups OCR scans in the Microsoft Purview portal, starting with SharePoint and OneDrive.
- Limit the SharePoint sites enabled for OCR if the default of all sites is wider than intended.
- Allow about an hour for OCR settings to take effect and upload test images afterwards, because earlier uploads are not scanned.

### After rollout
- Compare Azure charges for the OCR meter against the estimate in Microsoft Cost Management for Azure.
- Review DLP matches on images with the compliance team and tune the sensitive information types that produce false positives.
- Tell SharePoint and OneDrive users that images can now trigger the DLP rules that already apply to their documents.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which locations and groups Purview OCR scans, including SharePoint and OneDrive</strong><br><small>Tenant</small><br><small class="controls__note">Requires a Purview role group such as Compliance administrator. Learn describes OCR as optional and enabled at tenant level.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether pay-as-you-go billing for document processing, which OCR needs, is connected</strong><br><small>Tenant</small><br><small class="controls__note">Needs a SharePoint administrator or Global administrator, plus Owner or Contributor on the Azure subscription.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Pay-as-you-go services › Billing › Document processing services <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites are enabled for the OCR service</strong><br><small>Site</small><br><small class="controls__note">SharePoint site scope only; Learn does not say it covers OneDrive. Needs a SharePoint administrator or Global administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Pay-as-you-go services › Settings › Document &amp; image services › Optical character recognition <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/ocr" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -OpticalCharacterRecognitionScope &lt;SyntexFeatureScopeValue&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Purview OCR setting and the SharePoint site setting are separate controls. Learn says that if different sites are specified for the OCR service and for DLP, the maximum number of sites is enabled for OCR and you are not charged twice for processing; a narrow Purview scope does not stop the SharePoint service being on for more sites.

Purview OCR settings need one of the role groups Learn lists. Billing needs a SharePoint administrator or Global administrator, and Owner or Contributor on the Azure subscription. The Microsoft Graph ocrSettings resource is documented for an eDiscovery case, not for these tenant settings. Do not treat it as a control for this item.

## Open questions

- Does Microsoft Learn's OCR behaviour, including the SharePoint and OneDrive file types and limits, apply unchanged to GCC, GCC High and DoD when this item reaches General Availability? Watch the roadmap item and the Purview OCR page.
- What does Microsoft charge for OCR in the US Government clouds, and is Syntex pay-as-you-go billing offered there? Watch the pay-as-you-go pricing page.
- Will the roadmap's file types (JPG, JPEG, PNG, TIFF, BMP, image-only PDF) be the supported set in the US Government clouds, given Learn lists more for SharePoint and OneDrive?
- Which release phase applies to which cloud, given the record lists both General Availability and Preview? Watch the roadmap item.

<!-- rationale
risk: Medium. OCR lets existing DLP policies act on text inside images, which needs configuration and testing; Learn describes OCR as an optional feature enabled at tenant level, so the exposure is misconfiguration and spend, not default behaviour.
cost: Variable. Learn describes OCR as billed pay-as-you-go through an Azure subscription, with a published rate of $0.001 per transaction, each image or PDF page counting as one; a rate for the US Government clouds is not yet published.
impact: Low. Compliance and billing administrators do the setup; other users notice only when a DLP rule they already work under starts matching text inside an image.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Planning; Governance guidance: Before rollout / cost: The preview OCR cost estimator projects SharePoint and OneDrive charges before enablement, without any stated exclusions. | Found: Estimation for embedded images in SharePoint and OneDrive is not supported yet. ... Estimation of images in pdf files isn't supported in SharePoint and OneDrive. As a result, your actual OCR bill for SharePoint and OneDrive may be higher than estimated | Fix: Add immediately after recommending the estimator: 'The estimator does not cover embedded images or images in PDFs in SharePoint and OneDrive, so actual bills may exceed the estimate.' Retain the preview label and cite https://learn.microsoft.com/purview/ocr-cost-estimator. | Source: https://learn.microsoft.com/purview/ocr-cost-estimator
- [contradicted, blocker] Scope: Prerequisites; Open questions: Syntex billing availability / absence: Cloud availability of the Learn-described behaviour, including whether Syntex pay-as-you-go is offered in the government clouds, is unstated. | Found: For Government Community Cloud (GCC) organizations, pay-as-you-go licensing-and the services that require pay-as-you-go licensing-aren't yet available. | Fix: Replace the blanket availability gap and the GCC part of the billing question with: 'At the time of writing (November 2026), Learn states that pay-as-you-go licensing and services requiring it are not yet available in GCC. The roadmap nevertheless targets this OCR release for April CY2027; billing and availability for that future release remain to be confirmed.' Cite https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing. Qualify the setup checklist and controls as the documented general workflow, not a currently available GCC workflow; retain only the narrower unanswered questions for GCC High and DoD. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Any block or restriction comes exclusively from the existing DLP, records management and insider risk policies. | Found: Searched: Purview OCR block policies scanning. Read OCR feature and SharePoint overview pages; they describe scanning and applying policies, but do not state that every possible block or restriction comes exclusively from those policies. | Fix: Remove 'Any block or restriction comes from those policies.' Keep the narrower supported statement that OCR scanning supplies results to existing policies.
- [contradicted, blocker] front matter: defaultState; Why it matters; rationale: risk / consistency: The government-cloud change has a known admin-opt-in default. | Found: defaultState: "admin-opt-in" ... Microsoft has not stated what happens on arrival in GCC, GCC High and DoD. | Fix: Set defaultState to 'unknown' and retain 'Microsoft has not stated what happens on arrival in GCC, GCC High and DoD.' Keep the general Learn feature's optional enablement explicitly separate from this release's unconfirmed arrival behaviour. Searches for 'Purview OCR GCC GCC High DoD default rollout' and the supplied roadmap did not establish a default for this government-cloud release.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Risk assessment; Governance guidance / behaviour: Only images uploaded after OCR is enabled are scanned, leaving existing library images outside scanning. | Found: Only images uploaded after OCR is enabled are scanned. | Fix: Attribute this restriction to the Purview OCR page rather than presenting it as absolute. Add: 'The SharePoint PowerShell reference separately documents OCR backfill for previously unprocessed files on OCR-enabled sites; government-cloud applicability is not stated.' Cite https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spositeopticalcharacterrecognitionbackfill, which says it processes files that have never been OCR processed or have been modified since the last process. | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] Risk assessment: Data exposure / behaviour: SharePoint OCR stores extracted image text in the Extracted text metadata column. | Found: When you apply OCR to an image file, the text is stored in the Extracted text metadata column. When you apply OCR to a PDF or TIFF file, the extracted text is indexed in search but not available in the metadata column. | Fix: Add to the metadata sentence: 'For PDF and TIFF files, the extracted text is indexed in search but is not available in the metadata column.' | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/ocr-overview
- [supported, minor] front matter: licensing.notes; Cost and licensing: Licence / licensing: After Syntex billing information is entered, a Compliance admin can configure Purview OCR without extra setup or licensing requirements. | Found: After you enter billing information in Microsoft Syntex, your Compliance admin can configure OCR in Microsoft Purview without any extra setup or licensing requirements. | Fix: Keep the attributed statement, and add: 'The document processing licensing page separately requires a Microsoft 365 licence for users of pay-as-you-go services.' Cite https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing, which states organization-wide access is provided users have a Microsoft 365 license. Do not imply that the absence of an extra OCR licence removes that base requirement. | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] Cost and licensing: Meter / cost: The pricing page says processing occurs every time the file is edited. | Found: Processing occurs every time the file is edited. | Fix: Keep the attribution to the pricing page, but add the cited Purview page's qualification: 'However, in embedded file types, if only text is updated, images are not scanned again.' | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Document processing billing is reached through Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services in the Microsoft 365 admin center. | Found: Select Settings > Org settings. On the Services tab, select Pay-as-you-go services. ... On the Pay-as-you-go services page, on the Billing tab, select Document processing services. | Fix: The printed route reaches the correct billing panel but stops before the control. Extend it to 'Settings > Org settings > Services > Pay-as-you-go services > Billing > Document processing services > Set up billing > Azure subscription'. For disconnection, the cited page continues through 'Edit billing information > Manage billing > Disconnect Azure subscription'. Also acknowledge that https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-whats-new documents a newer activation entry point, 'Billing > Pay-as-you-go', while the cited setup page still gives the older route. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-azure-billing
- [supported, minor] controls[2].ui; Governance controls table / admin-path: SharePoint OCR site scope is reached through Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition in the Microsoft 365 admin center. | Found: On the Pay-as-you-go services page, select the Settings tab. Under Document & image services, select Optical character recognition. ... select Edit. ... change the setting from All sites to Selected sites (up to 100) or No sites. | Fix: Extend the path from the correct OCR panel to its scope control: 'Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > Optical character recognition > Select the SharePoint libraries where you would like to enable optical character recognition > Edit > Enable optical character recognition in Microsoft 365 > All sites / Selected sites (up to 100) / No sites'. | Source: https://learn.microsoft.com/microsoft-365/documentprocessing/ocr
- [contradicted, minor] Governance guidance; Governance controls table / consistency: Every control the governance checklist asks readers to use or review is represented in the controls table. | Found: Use the OCR cost estimator (preview) ... Compare Azure charges ... in Microsoft Cost Management for Azure. ... tune the sensitive information types ... Table rows cover OCR locations, billing connection and SharePoint OCR sites. | Fix: The checklist's cost estimator, Cost Management monitoring, and DLP/sensitive-information-type review and tuning have no control rows. To correct without adding rows, remove those checklist steps; retain their supported discussion in the existing cost and risk sections.
-->
