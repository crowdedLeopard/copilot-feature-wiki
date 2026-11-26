---
title: "Microsoft Purview Endpoint DLP: OCR scanning of images embedded in Office, archive and PDF files on devices"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-for-endpoints-optical-character-r"
roadmapId: 381750
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to extend Purview OCR on onboarded devices from standalone images to images inside Office files, archives and hybrid PDFs. Rollout is paused. Each scanned image is billed, so tenants with device OCR should plan for more transactions."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "consumption"
  notes: "OCR needs document processing pay-as-you-go billing linked to an Azure subscription and is metered at $0.001 per transaction; the OCR page says no extra licensing is needed once billing is set up. How embedded images on devices are counted is not yet published."
audiences: ["compliance","security","finops","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","ocr","pay-as-you-go","sensitive-information-types"]
sources:
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Set up pay-as-you-go billing for document processing"
    url: "https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "docs"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Estimate your OCR costs"
    url: "https://learn.microsoft.com/purview/ocr-cost-estimator"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 381750"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=381750"
    kind: "roadmap"
videos: []
related: ["endpoint-dlp","microsoft-purview-compliance-portal-endpoint-data-loss-prevention-optical-character-recogn","microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-embedded","microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr","sensitive-information-types"]
controls:
  - governs: "Whether OCR scans images on devices, and for which groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "Locations and included or excluded groups are chosen on this page. Configured by the compliance admin; takes effect in about an hour."
  - governs: "Which Azure subscription is billed for OCR transactions"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Setup > Billing and licenses > Activate pay-as-you-go services > Get started > Pay-as-you-go services > Billing > Document processing services > Set up billing and turn on services > Set up billing > Azure subscription"
      docs: "https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing"
    api: null
    note: "SharePoint Administrator or Global Administrator, plus owner or contributor rights on the Azure subscription. Covers all document processing services."
  - governs: "Daily bandwidth each device may use for cloud classification, including OCR"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api: null
    note: "Applies per device; default 1,024 MB per day per the OCR page. OCR stops scanning images on a device once reached."
  - governs: "Folders on Windows devices that Endpoint DLP, and so OCR, does not scan"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > File path exclusions for Windows"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings @(@{\"Setting\"=\"PathExclusion\"; \"Value\"=\"<folder path>\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    note: "Security & Compliance PowerShell. Files in excluded paths are not audited or subject to DLP enforcement."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-26"
    note: "New briefing: planned OCR of embedded images on devices, its paused rollout, the OCR meter and the device bandwidth and exclusion controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: default state now Not stated; cost estimator advice replaced (it does not estimate embedded images on endpoints); endpoint file-type wording narrowed to the OCR page; billing path completed; checklist steps without control rows removed."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 77 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 76
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "f44cbc063e6590d8588d998c5e533b34"
---

## What's changing

Microsoft plans to let optical character recognition (OCR) in Microsoft Purview read images embedded inside files on onboarded devices, not only standalone image files. The roadmap item names Office files (XLSX, DOCX, PPTX), container files (zip, rar, 7z and more) and PDF files, including hybrid PDFs that hold both images and searchable text. Image-only PDFs are already supported.

OCR is an optional feature that an administrator must enable at tenant level, then choose the locations to scan, devices among them. Once it is configured, Microsoft Purview applies existing data loss prevention (DLP), records management and insider risk management policies to text found in images. Microsoft has not stated whether tenants that already scan devices will get embedded-image scanning automatically when the rollout resumes.

The roadmap item lists the change as Launched, with a General Availability target of June CY2026 and a preview date of April CY2026, but its description adds: "Updated May 20, 2026: We have paused rollout and will resume soon." Microsoft Learn's OCR page, at the time of writing (November 2026), still lists only JPEG, JPG, PNG, BMP, TIFF and PDF (image only) for Teams, Windows and macOS endpoints, while it already lists embedded images for Exchange and for SharePoint and OneDrive. Microsoft Learn does not describe the device extension yet, so what follows about its behaviour is the roadmap's description.

## Why it matters

The [OCR page](https://learn.microsoft.com/purview/ocr-learn-about) currently lists standalone image formats and image-only PDFs for endpoints, but not embedded images in Office or archive files. When this lands, device DLP policies that look for sensitive information types will also match on those images, so expect more matches, alerts and enforcement on files users copy, upload or print, and more OCR transactions on the Azure bill.

Tenants that have not set up OCR are not affected, because OCR does nothing until it is configured. For tenants that already scan devices, Microsoft has not stated whether the new file types are picked up without further action, so plan as if they will be: check the bill, the per-device bandwidth limit and the folders excluded from scanning before the rollout resumes.

## Risk assessment

**Data exposure**
- When OCR is turned on for Windows and macOS devices, the devices send content to the cloud for scanning. Embedded images in Office files, archives and PDFs add to what is sent. The OCR page says the endpoint cache keeps only the classifiers found and the image hash, not customer data.
- Folders excluded in Endpoint DLP settings are not scanned by OCR, so an exclusion list built for performance also leaves images there unchecked.

**Security & identity**
- No change to identity: OCR settings are configured by compliance administrators, and the billing link needs a SharePoint Administrator or Global Administrator with owner or contributor rights on the Azure subscription.

**Autonomy & actions**
- OCR itself takes no action. Existing DLP policies for devices act on what it finds, so a block or audit rule written for text now applies to text in embedded images too. Insider risk management also uses sensitive information types found in images on devices for risk scoring.

**Change & support**
- Expect help desk contacts when files that passed yesterday are matched today. The bandwidth limit adds an uneven effect: the OCR page says OCR stops scanning images on a device once its daily limit is reached, so heavy users may be scanned less than light ones.
- The rollout is paused with no new date, so the timing of these effects is not known.

## Cost and licensing

**Licence.** The [OCR page](https://learn.microsoft.com/purview/ocr-learn-about) says a Global admin must set up pay-as-you-go billing to enable OCR, and that once billing information is entered, OCR can be configured "without any extra setup or licensing requirements".

**Meter.** OCR is a document processing pay-as-you-go service billed to the Azure subscription you link. The [pricing page](https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services) lists Optical character recognition at $0.001 per transaction (USD). The OCR page says each image scanned counts as one transaction and each page of a PDF is charged separately. Expect a file with several embedded images to produce several transactions; how embedded images in files on devices are counted, and whether a per-file limit applies as it does for Exchange (20 embedded images per file), is not yet published. Charges appear in Microsoft Cost Management for Azure under Cost analysis.

**Limits.** Devices have an advanced classification bandwidth limit, 1,024 MB per device per day by default; the OCR page says OCR stops scanning images once it is reached. It limits scanning, and so spend, per device; it is not a tenant spending cap, and administrators can raise it or choose **Do not limit bandwidth. Unlimited**. Endpoint scans are cached for 30 days on each device, and a scanned image can be used by any number of policies at no extra charge.

**Indirect costs.** Admin time to review DLP matches and actual OCR charges before rollout resumes.

## Scope

- **Locations:** onboarded devices ("endpoint" in the roadmap item); the OCR page lists Windows and macOS devices as OCR locations. The item's platform is listed as Web.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists them.
- **Prerequisites:** pay-as-you-go billing for document processing, OCR configured with devices as a location, and network settings that allow `blob.core.windows.net` endpoints. Endpoint image files up to 50 MB are scanned.
- **Roles:** the compliance admin configures OCR settings; creating and deploying policies needs Compliance administrator, Compliance data administrator, Global administrator, Information Protection or Information Protection Admin. Billing needs SharePoint Administrator or Global Administrator.
- **Rollout:** listed as Launched but paused since 20 May 2026. OCR settings generally take effect about an hour after they are turned on.

## Governance guidance

### Before rollout
- Check whether devices are an OCR location under Settings > Optical character recognition (OCR) in the Microsoft Purview portal, and which groups are included.
- Confirm which Azure subscription pays for document processing in the Microsoft 365 admin center, and who owns it.
- Do not use the OCR cost estimator (preview) to estimate this endpoint extension: Microsoft documents embedded-image estimation only for Exchange and assumes four images per endpoint PDF.
- Review the advanced classification bandwidth limit in Endpoint settings, since OCR stops on a device when it is reached.

### At rollout
- Watch for the roadmap item and Message center to say the rollout has resumed, and for the OCR page to list embedded images for endpoints.
- Tell the service desk that files containing images of sensitive data may now trigger DLP on devices.

### After rollout
- Review File path exclusions for Windows, because OCR does not scan images in excluded folders.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether OCR scans images on devices, and for which groups</strong><br><small>Tenant</small><br><small class="controls__note">Locations and included or excluded groups are chosen on this page. Configured by the compliance admin; takes effect in about an hour.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Azure subscription is billed for OCR transactions</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint Administrator or Global Administrator, plus owner or contributor rights on the Azure subscription. Covers all document processing services.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Setup › Billing and licenses › Activate pay-as-you-go services › Get started › Pay-as-you-go services › Billing › Document processing services › Set up billing and turn on services › Set up billing › Azure subscription <a href="https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Daily bandwidth each device may use for cloud classification, including OCR</strong><br><small>Tenant</small><br><small class="controls__note">Applies per device; default 1,024 MB per day per the OCR page. OCR stops scanning images on a device once reached.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › Advanced classification scanning and protection <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Folders on Windows devices that Endpoint DLP, and so OCR, does not scan</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Files in excluded paths are not audited or subject to DLP enforcement.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › File path exclusions for Windows <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings @(@{&quot;Setting&quot;=&quot;PathExclusion&quot;; &quot;Value&quot;=&quot;&lt;folder path&gt;&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The OCR settings page decides whether devices are scanned at all; the bandwidth limit and file path exclusions then narrow what is scanned on each device. Disconnecting the Azure subscription from document processing billing affects every document processing service that bills to it, not OCR alone. The Purview device list shows whether a device's [advanced classification bandwidth usage was exceeded](https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync) in the past 24 hours. Microsoft Learn documents no setting that turns embedded-image scanning on or off separately from device OCR at the time of writing (November 2026). See /concepts/endpoint-dlp/ and /concepts/sensitive-information-types/.

## Open questions

- When will the paused rollout resume, and will Message center announce it? Watch the roadmap item.
- Will tenants that already scan devices with OCR get embedded-image scanning automatically, or must they opt in? Watch the OCR page.
- How are embedded images in files on devices counted for billing, and is there a per-file limit like Exchange's 20 embedded images?
- Does embedded-image scanning apply to Windows and macOS devices alike, and to which archive formats beyond zip, rar and 7z?

<!-- rationale
risk: Medium. Once OCR covers devices, existing DLP policies apply to text read from images, so more files can match and be acted on, and device content is sent to the cloud for scanning.
cost: Variable. OCR is billed through document processing pay-as-you-go at $0.001 per transaction to an Azure subscription, and each scanned image counts as one transaction.
impact: Medium. Users on onboarded devices in OCR scope may see new DLP matches on Office, archive and PDF files; tenants without device OCR see nothing.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The endpoint embedded-image extension makes no change to identity. | Found: Searched: Purview OCR scanning actions existing policies identity permissions embedded images endpoint. Read ocr-learn-about, syntex-azure-billing, endpoint-dlp-learn-about and roadmap description; they document current roles but do not state that this extension leaves identity unchanged. | Fix: Remove 'No change to identity:' and begin the existing sentence 'OCR settings are configured by compliance administrators'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; Cost and licensing: Meter; rationale: cost / cost: Each scanned image counts as a billed transaction, and each PDF page is charged separately. | Found: Each image scanned counts as one transaction. This pricing means that stand-alone images (JPEG, JPG, PNG, BMP, or TIFF) each count as a single transaction. It also means that each page in a PDF file is charged separately. | Fix: Replace 'Each scanned image is billed' in the summary with 'OCR is metered per transaction'. Add to Meter: 'Microsoft's promotion page lists 2,500 OCR pages per tenant per month at no charge through December 2026, with excess usage billed; the pricing page still gives June 2026 as the promotion end date.' Cite https://learn.microsoft.com/microsoft-365/documentprocessing/promo-syntex?view=o365-worldwide. This reports the conflicting Microsoft pages without changing the published $0.001 transaction rate. | Source: https://learn.microsoft.com/purview/ocr-learn-about
-->
