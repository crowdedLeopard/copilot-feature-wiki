---
title: "Microsoft Purview Insider Risk Management: OCR scanning of images for risk scoring (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-insider-risk-management-ocr-support-in-insider-risk-ma"
roadmapId: 171185
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management policies can score sensitive text found in images in SharePoint, Teams and on Windows devices. Purview OCR is optional and admin-enabled, and needs pay-as-you-go billing, charged per image scanned."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Insider Risk Management needs a supported Microsoft 365 subscription with licences assigned to users. OCR itself is billed pay-as-you-go to an Azure subscription; Microsoft Learn says no extra licensing is needed once that billing is set up."
audiences: ["compliance","security","finops","m365-admin"]
tags: ["purview","insider-risk-management","ocr","pay-as-you-go","sensitive-information-types","classifiers","endpoint-dlp","sharepoint","teams","gcc","gcc-high","dod"]
sources:
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Set up pay-as-you-go billing for document processing"
    url: "https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Licensing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing"
    kind: "learn"
  - title: "Set up and manage optical character recognition"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/ocr"
    kind: "learn"
  - title: "Try out pay-as-you-go services for document processing"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/promo-syntex"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "ocrSettings resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-ocrsettings"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 171185"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=171185"
    kind: "roadmap"
videos: []
related: ["insider-risk-management","microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-sharepoi","microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr","endpoint-dlp","classifiers"]
controls:
  - governs: "Whether OCR scans images, in which locations and for which groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR) > locations > groups"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "Tenant-wide; shared by the Purview solutions that use OCR, including DLP and Insider Risk Management. Configured by the Compliance admin; takes effect in about an hour."
  - governs: "OCR for Insider Risk Management separately from DLP and records management"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn describes OCR as configured once at tenant level for the whole Purview stack."
  - governs: "Azure subscription that OCR pay-as-you-go charges are billed to"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Setup > Billing and licenses > Activate pay-as-you-go services > Get started > Pay-as-you-go services > Billing > Document processing services > Set up billing and turn on services > Set up billing > Azure subscription"
      docs: "https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing"
    api: null
    note: "Requires SharePoint Administrator or Global Administrator, plus owner or contributor rights on the Azure subscription."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-06-16T23:15:08"
changes:
  - date: "2026-11-25"
    note: "New briefing: OCR for Insider Risk Management, with the tenant OCR setting, pay-as-you-go billing route and per-transaction rate."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: GCC pay-as-you-go availability now stated from the document processing licensing page; full billing and OCR paths; default-state wording narrowed; cost example and included capacity dates clarified; two checklist items removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f85513198d3f1278109bd5a343f7f078"
---

## What's changing

Microsoft plans to let Insider Risk Management use optical character recognition (OCR, which reads text inside images) so that its policies can detect risky activity involving images in SharePoint, Teams messages and endpoint devices. Insider Risk Management is the Microsoft Purview solution that correlates user activity signals to flag possible data theft, leaks and security violations.

Microsoft Learn already documents this as a preview. After OCR settings are configured, existing insider risk policies apply to both images and documents, and for the preview Insider Risk Management scans Windows endpoint devices, SharePoint Online and Teams; Exchange Online and OneDrive are not supported. The OCR page says Insider Risk Management considers sensitive information types and trainable classifiers present in images for risk scoring. OCR settings do not apply to forensic evidence clips.

OCR is a single tenant-level setting in the Microsoft Purview portal, shared across the Purview solutions that use it, including data loss prevention (DLP), records management and Insider Risk Management. Purview describes tenant OCR scanning as optional and administrator-enabled, and only images uploaded after it is enabled are scanned. Settings generally take effect about an hour after they are turned on.

The roadmap item is In development with a target of January CY2026, for General Availability, and lists GCC, GCC High and DoD. That target month has passed while the item remains In development, and Learn still labels the Insider Risk Management OCR settings as preview.

## Why it matters

With OCR on, the same sensitive information types and trainable classifiers that Insider Risk Management already uses can detect text in images such as screenshots and scanned PDFs. Expect risk scores and alerts to rise for activity involving images, which means more for analysts to triage as well as better coverage.

Purview describes tenant OCR scanning as optional and administrator-enabled. The document processing setup page separately says linking pay-as-you-go automatically enables OCR for all SharePoint sites ([Set up and manage optical character recognition](https://learn.microsoft.com/microsoft-365/documentprocessing/ocr)). The decision is really about the tenant-wide OCR setting, because the locations and groups chosen there serve DLP, records management and Insider Risk Management together. A tenant that already runs OCR for DLP brings images into insider risk scoring for SharePoint, Teams and devices without a separate switch, and Microsoft says a scanned image can be used by any number of policies across these solutions at no extra charge.

## Risk assessment

**Data exposure**
- On Windows and macOS devices, turning on OCR makes devices send messages to the cloud for scanning. On endpoints only the image hash and the classifiers identified are cached locally, and Microsoft states customer data is not stored. Device scanning is limited by the Endpoint DLP bandwidth setting.
- Images now contribute to risk scores, so insider risk analysts may see alerts driven by image content. Insider Risk Management pseudonymises users by default and applies role-based access, per the roadmap description.

**Security & identity**
- OCR works through existing classifiers and existing insider risk policies. The pay-as-you-go connection needs a SharePoint Administrator or Global Administrator plus owner or contributor rights on the Azure subscription, which widens who touches compliance spend.

**Autonomy & actions**
- Existing insider risk policies apply to images as they do to documents, so whatever those policies already do follows from image matches too.

**Change & support**
- Scanning stops on a device once its daily bandwidth limit is reached (default 1,024 MB per device per day), so coverage can be patchy on heavy users. Endpoints also need network settings that allow blob.core.windows.net endpoints.
- Image size limits apply: 20 MB for Teams, 50 MB for SharePoint and endpoints. Images uploaded before OCR was enabled are not scanned.

## Cost and licensing

**Licence.** Insider Risk Management needs a supported subscription with licences assigned to users ([Get started with Insider Risk Management](https://learn.microsoft.com/purview/insider-risk-management-configure)). For OCR, the Purview OCR page says that after billing information is entered, the Compliance admin can configure OCR "without any extra setup or licensing requirements".

**Meter.** OCR requires pay-as-you-go billing for document processing services, connected to an Azure subscription in the same tenant. Each image scanned counts as one transaction, and each page of a PDF is charged separately. Microsoft's pay-as-you-go pricing page for document processing lists Optical character recognition at $0.001 per transaction (USD). At the list rate, before any included capacity, 100,000 billable OCR transactions would cost $100. The pricing page describes included capacity through June 2026, while the [trial page](https://learn.microsoft.com/microsoft-365/documentprocessing/promo-syntex) says through December 2026 and lists 2,500 OCR pages per tenant per month. Charges appear in Microsoft Cost Management for Azure under Cost analysis; usage can take up to 24 hours to appear.

**Reducing the bill.** Endpoint results are cached for 30 days per device; there is no caching for standalone images in SharePoint and OneDrive. A scanned image can be used in any number of DLP, insider risk management, auto-labeling and records management policies at no extra charge. Microsoft provides an [OCR cost estimator](https://learn.microsoft.com/purview/ocr-learn-about).

**Caps.** Microsoft Learn documents no spending cap for OCR at the time of writing (November 2026). The levers are the locations and groups in the OCR settings and, on devices, the bandwidth limit, at which OCR stops scanning images.

## Scope

- **Locations for Insider Risk Management (preview):** Windows endpoint devices, SharePoint Online and Teams. Exchange Online and OneDrive are not supported for the preview.
- **File types:** for Teams and endpoints, JPEG, JPG, PNG, BMP, TIFF and image-only PDF; SharePoint supports a longer list including embedded images in DOCX, PPTX and XLSX.
- **Roles:** the Compliance admin configures OCR settings; a Global or SharePoint admin sets up pay-as-you-go billing.
- **Prerequisites:** an Azure pay-as-you-go subscription and resource group in the same tenant.
- **Clouds:** the roadmap record lists GCC, GCC High and DoD.
- **Platforms:** Web, per the record.
- **Out of scope:** forensic evidence clips; eDiscovery OCR, which is a separate per-case setting.

## Governance guidance

### Before rollout
- Decide with the DLP and records management owners whether to enable OCR, since the tenant setting serves all three solutions at once.
- Estimate image volumes in the SharePoint sites, Teams and devices you would scan, and price them with the OCR cost estimator at the published per-transaction rate.
- Where document processing pay-as-you-go is available, ask a SharePoint Administrator to connect document processing pay-as-you-go billing to a chosen Azure subscription and resource group (Microsoft 365 admin center > Setup > Billing and licenses > Activate pay-as-you-go services > Get started > Pay-as-you-go services > Billing > Document processing services > Set up billing and turn on services > Set up billing > Azure subscription), and give the finance owner read access to that resource group for Cost Management.

### At rollout
- Have the Compliance admin open Microsoft Purview portal > Settings > Optical character recognition (OCR) and choose only the locations and groups that insider risk policies actually need.
- Brief insider risk analysts that alerts may now be driven by text in images, and that images uploaded before enablement are not scanned.

### After rollout
- Narrow the OCR groups or locations if alert volume or spend exceeds what the insider risk team can use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether OCR scans images, in which locations and for which groups</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-wide; shared by the Purview solutions that use OCR, including DLP and Insider Risk Management. Configured by the Compliance admin; takes effect in about an hour.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) › locations › groups <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>OCR for Insider Risk Management separately from DLP and records management</strong><br><small>Tenant</small><br><small class="controls__note">Learn describes OCR as configured once at tenant level for the whole Purview stack.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Azure subscription that OCR pay-as-you-go charges are billed to</strong><br><small>Tenant</small><br><small class="controls__note">Requires SharePoint Administrator or Global Administrator, plus owner or contributor rights on the Azure subscription.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Setup › Billing and licenses › Activate pay-as-you-go services › Get started › Pay-as-you-go services › Billing › Document processing services › Set up billing and turn on services › Set up billing › Azure subscription <a href="https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The OCR setting is tenant-wide and shared: the locations and groups chosen apply across the Purview solutions that use OCR, DLP and records management included, and Microsoft Learn documents no setting that turns OCR on for Insider Risk Management alone (November 2026). The Microsoft Graph ocrSettings resource covers eDiscovery cases only, not this tenant setting.

On devices, scanning volume is also governed by the Endpoint DLP bandwidth limit under Advanced classification scanning and protection, and folders excluded in Endpoint DLP file path exclusions are not scanned by OCR; see [Configure endpoint data loss prevention settings](https://learn.microsoft.com/purview/dlp-configure-endpoint-settings).

Billing and scanning are held by different roles: a SharePoint or Global Administrator with owner or contributor rights on the Azure subscription connects billing, while the Compliance admin chooses what is scanned.

## Open questions

- When will Insider Risk Management OCR leave preview, given the January CY2026 target has passed with the item still In development? Watch the roadmap item and the Get started with Insider Risk Management page.
- Will Exchange Online and OneDrive be added as Insider Risk Management OCR locations at general availability?
- Microsoft's document processing licensing page says pay-as-you-go and services requiring it are not yet available to GCC organisations, although this roadmap item lists GCC, GCC High and DoD. When will the billing OCR depends on reach GCC tenants? Watch [Licensing for document processing](https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing).
- Will Microsoft publish a PowerShell or Graph method to configure tenant OCR settings, so the scope can be scripted and audited?

<!-- rationale
risk: Low. Purview describes tenant OCR scanning as optional and administrator-enabled; once on, image findings feed the existing Insider Risk Management policies and their access controls.
cost: Variable. OCR is billed through the pay-as-you-go meter for document processing on an Azure subscription, listed at $0.001 per transaction, where each image or PDF page counts as one transaction.
impact: Low. The change is in what Insider Risk Management policies detect once OCR is on; the people who work with it are compliance admins and insider risk analysts.
-->
