---
title: "Microsoft Purview Endpoint DLP: OCR scanning of images on Windows devices (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr"
roadmapId: 160008
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP is planned to read text inside images and image-only PDFs on Windows devices for GCC, GCC High and DoD tenants. Learn documents OCR as an optional, pay-as-you-go setting; administrators choose whether to enable it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says OCR requires Microsoft Syntex pay-as-you-go billing in Azure, with no other setup or licensing requirement for the Compliance admin. Learn says pay-as-you-go licensing is not yet available for GCC. Rates for the US Government clouds are not yet published."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["dlp","endpoint-dlp","purview","sensitive-information-types","pay-as-you-go","information-protection","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 160008"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=160008"
    kind: "roadmap"
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Estimate your OCR costs"
    url: "https://learn.microsoft.com/purview/ocr-cost-estimator"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Set up pay-as-you-go billing for document processing"
    url: "https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing"
    kind: "learn"
  - title: "Licensing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing"
    kind: "learn"
  - title: "Protect data with Microsoft Purview"
    url: "https://learn.microsoft.com/purview/zero-trust-purview-protect-data"
    kind: "learn"
  - title: "ocrSettings resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-ocrsettings?view=graph-rest-1.0"
    kind: "docs"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps"
    kind: "learn"
videos: []
related: ["endpoint-dlp","sensitive-information-types"]
controls:
  - governs: "Whether OCR scans images, and for which locations and groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "Learn lists five roles, including Compliance administrator and Global administrator. Billing: Global or SharePoint admin with owner or contributor rights to the Azure subscription."
  - governs: "Daily bandwidth each device may use for cloud classification, including OCR"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api: null
    note: "Learn gives the OCR default as 1,024 MB of data per device per day and says OCR stops scanning images once it is reached."
  - governs: "Folders on Windows devices that Endpoint DLP, and so OCR, does not scan"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > File path exclusions for Windows"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings @(@{\"Setting\"=\"PathExclusion\"; \"Value\"=\"<folder>\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps"
    note: "Existing control, not specific to OCR. Excluded files are not audited and are not subject to DLP policy enforcement."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-21"
    note: "First briefing for the roadmap item on OCR support in Endpoint DLP for GCC, GCC High and DoD."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected billing roles (Azure owner or contributor rights), bandwidth-limit resume wording, the Endpoint cost estimator Windows Update prerequisite, GCC pay-as-you-go availability and the Windows KB requirements."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected: Windows file path exclusions can be set with Set-PolicyConfig -EndpointDlpGlobalSettings (PathExclusion); removed the DLP-rule test step that had no controls row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0fe02c1134a2f964b4dcfb4cbdb72335"
---

## What's changing

The Microsoft 365 roadmap item says optical character recognition (OCR) support will detect sensitive content in images and then apply data loss prevention (DLP) policies to stop that content leaving Windows endpoint devices. The first release is described as covering JPG, JPEG, PNG, TIFF, BMP and image-only PDF files. The record lists the clouds as GCC, GCC High and DoD, the release phase as General Availability, the status as In development and the target date as March CY2027. It is a target, not a commitment.

Microsoft Learn already documents OCR for Microsoft Purview in general. It describes OCR scanning as an optional feature that you must enable at the tenant level, after which you select the locations to scan, including Windows and macOS devices. Once enabled, existing DLP conditions such as *content contains sensitive information* with a sensitive information type (for example Credit Card) are applied to text in images as well as text in documents. For Teams, Windows and macOS endpoints, Learn lists the file types as JPEG, JPG, PNG, BMP, TIFF and PDF (image only), which matches the roadmap.

Learn's OCR page does not say which clouds it covers, so what it describes is not confirmed here for GCC, GCC High or DoD. The Purview planning page for GCC High lists Endpoint data loss prevention as Available but has no row for OCR in DLP, and says its status is subject to change. Treat the Learn behaviour below as the documented design and the roadmap's government-cloud dates as the plan.

## Why it matters

Until OCR is on, a screenshot or scan of a document is an image to DLP, so a rule that looks for sensitive information types in text has nothing to read. The roadmap item presents OCR as the way to close that gap for images leaving a Windows endpoint, which matters to government-cloud organisations that already rely on Endpoint DLP.

The change brings a cost decision with it. Learn says OCR is billed per image or PDF page through Microsoft Syntex pay-as-you-go billing, and that devices start sending images to the cloud for scanning once it is on. Learn describes OCR as optional, so the wiki's view is that nothing happens if nobody acts, but the gap in image coverage stays. Use the OCR cost estimator before enabling it.

## Risk assessment

**Data exposure**

- Learn says that when OCR is turned on for Windows and macOS devices, the devices start sending messages to the cloud for scanning. Expect image content from onboarded devices to leave the device for cloud scanning once OCR is enabled. Check that this fits your government-cloud data-handling rules before you enable it.
- Learn says OCR does not scan images in folders you exclude under the Endpoint DLP file path exclusions. It also says that files in excluded locations are not audited and are not subject to DLP policy enforcement, so those paths stay outside image protection.
- Images are scanned only if they are uploaded after OCR is enabled, and only the first 2 million characters of text are extracted, so older images and text beyond that point are not covered.

**Security & identity**

- Learn lists the role groups that can create and deploy policies for OCR: Compliance administrator, Compliance data administrator, Global administrator, Information Protection and Information Protection Admin. Setting up pay-as-you-go billing needs a Global or SharePoint admin, who also needs owner or contributor rights to the Azure subscription. Review who holds these roles.
- Learn says that for an Endpoint device, network settings must not obstruct OCR and a wildcard should allow blob.core.windows.net endpoints. Confirm what your government-cloud firewall rules allow before relying on image scanning.

**Autonomy & actions**

- OCR itself reads images; the action taken on a match comes from your existing DLP rules, because Learn says OCR applies existing DLP policies to images and text-based content. An image that matches a blocking rule is therefore treated like a document that matches it.

**Change & support**

- Learn says OCR stops scanning images once the per-device daily bandwidth limit is reached (default 1,024 MB of data per device per day). Images after that point go unscanned until cumulative bandwidth usage drops below the rolling 24-hour limit or you increase the limit; expect support questions about inconsistent matches.
- Learn says OCR settings take effect about an hour after you turn them on.

## Cost and licensing

Learn says OCR is an optional feature and that your Global admin must set up pay-as-you-go billing to enable it, by adding a subscription as described in its Microsoft Syntex billing instructions. It adds that you do not need to set up Microsoft Syntex itself, and that after billing is entered the Compliance admin can configure OCR in the Microsoft Purview portal without extra setup or licensing requirements (https://learn.microsoft.com/purview/ocr-learn-about). The billing set-up page says you must be a SharePoint Administrator or Global Administrator to set up the service, and that you must have owner or contributor rights to the Azure subscription you use for billing (https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing).

The meter is one transaction per scanned image. Each stand-alone image counts once and each page of a PDF is charged separately, so a 10-page PDF counts as 10 scans. The Microsoft 365 pay-as-you-go pricing page lists optical character recognition at $0.001/transaction. Each scanned image can be used in any number of policies across DLP, insider risk management, auto-labeling and records management at no extra charge. For Endpoint, Learn says the cache is maintained for 30 days, held locally on each device, to reduce repeat charges.

The OCR cost estimator (preview) can project OCR scanning cost for locations including Endpoint before you enable OCR. For Endpoint, first install the latest Windows Update released on February 29, 2024 or later (https://learn.microsoft.com/purview/ocr-cost-estimator).

Microsoft's document-processing licensing page says pay-as-you-go licensing and the services that require it are not yet available for GCC (https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-licensing). The roadmap still targets Endpoint OCR for GCC, GCC High and DoD in March CY2027; how that planned release will be billed remains unconfirmed, and a rate specific to GCC, GCC High or DoD is not yet published. Indirect costs are the admin time to set up billing and tune bandwidth and exclusions.

## Scope

The record lists the clouds as GCC, GCC High and DoD, the release phase as General Availability and the platform as Web, although the description is about Windows endpoint devices. Learn documents OCR for Windows and macOS devices; the roadmap item covers Windows endpoint devices only.

File types for Windows endpoints are JPEG, JPG, PNG, BMP, TIFF and PDF (image only), with a 50 MB maximum file size and an image resolution between 50 × 50 px and 16,000 × 16,000 px. Learn lists the Windows versions that support advanced classification scanning and protection: all Windows 11 versions, Windows 10 versions 20H1/21H1 or higher (KB 5006738) and Windows 10 RS5 (KB 5006744). The same page also requires KB5016688 for Windows 10 and KB5016691 for Windows 11 to use advanced classification. Learn's OCR page lists no Windows version requirement of its own.

Prerequisites in Learn are an Azure pay-as-you-go subscription, Syntex pay-as-you-go billing set up by a Global or SharePoint admin who has owner or contributor rights to the Azure subscription, and OCR enabled at the tenant level by the Compliance admin.

## Governance guidance

### Before rollout

- Ask the Global admin to confirm an Azure pay-as-you-go subscription exists for the tenant, and confirm with Microsoft how Syntex billing will apply in your government cloud, since Learn says pay-as-you-go licensing is not yet available for GCC.
- Review the Endpoint DLP file path exclusions, because OCR does not scan images in excluded folders.

### At rollout

- Enable OCR in the Microsoft Purview portal settings and select Devices as a location.
- Review the advanced classification bandwidth limit in Endpoint DLP settings, since OCR stops scanning images once the daily limit is reached.

### After rollout

- Compare actual OCR charges against the estimate and watch the device bandwidth limit for images that go unscanned.
- Watch the roadmap item and Message center for the confirmed government-cloud availability date.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether OCR scans images, and for which locations and groups</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists five roles, including Compliance administrator and Global administrator. Billing: Global or SharePoint admin with owner or contributor rights to the Azure subscription.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Daily bandwidth each device may use for cloud classification, including OCR</strong><br><small>Tenant</small><br><small class="controls__note">Learn gives the OCR default as 1,024 MB of data per device per day and says OCR stops scanning images once it is reached.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › Advanced classification scanning and protection <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Folders on Windows devices that Endpoint DLP, and so OCR, does not scan</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not specific to OCR. Excluded files are not audited and are not subject to DLP policy enforcement.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › File path exclusions for Windows <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings @(@{&quot;Setting&quot;=&quot;PathExclusion&quot;; &quot;Value&quot;=&quot;&lt;folder&gt;&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

OCR is a tenant-level setting that applies across the Purview stack; the Endpoint DLP settings are separate and apply to all DLP policies for devices. The OCR location selection and your existing DLP rules together decide what is scanned and acted on.

When the bandwidth limit is reached, Learn says OCR stops scanning images until cumulative bandwidth usage drops below the rolling 24-hour limit or you increase the limit, and file path exclusions also remove those paths from DLP audit and enforcement. At the time of writing (November 2026), Microsoft Learn documents no PowerShell cmdlet, Microsoft Graph or other API for tenant OCR settings or the Endpoint DLP bandwidth limit. Windows file path exclusions can be configured in Security & Compliance PowerShell with Set-PolicyConfig -EndpointDlpGlobalSettings using Setting="PathExclusion" and Value for the folder path; the Graph ocrSettings resource applies to an eDiscovery case.

## Open questions

- Is OCR for Windows endpoints available in GCC, GCC High and DoD at the roadmap's March CY2027 target, and will Learn's OCR page say which clouds it covers? Watch the roadmap item and the OCR Learn page.
- How will the planned government-cloud Endpoint OCR release be billed, given that Learn currently says Syntex pay-as-you-go licensing is unavailable for GCC? Watch the pay-as-you-go pricing and licensing pages.
- Does the Windows version support list for advanced classification apply to OCR on endpoints? Watch the Endpoint DLP settings page.
- Will an API or PowerShell cmdlet be documented for tenant OCR settings and the Endpoint DLP bandwidth limit? Watch the Purview PowerShell reference.

<!-- rationale
risk: Low. Learn describes OCR as an optional feature that must be enabled at the tenant level, so nothing changes for users until an administrator turns it on; once on, devices send images to the cloud for scanning.
cost: Variable. Learn says OCR needs Microsoft Syntex pay-as-you-go billing and counts each image, or each PDF page, as one transaction. Learn says pay-as-you-go licensing is not yet available for GCC; how the government-cloud release will be billed is not stated.
impact: Low. Administrators decide whether to enable OCR; users on onboarded Windows devices would notice only where an existing Endpoint DLP rule matches sensitive text found in an image.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Tenant OCR configuration is at Microsoft Purview portal > Settings > Optical character recognition (OCR). | Found: Sign in to the Microsoft Purview portal. Select Settings. Select Optical character recognition (OCR) to enter your OCR configuration settings. Select the locations where you want to scan images. Select the groups that you want included or excluded from OCR scans. | Fix: The path reaches the correct configuration page. Extend it to 'Settings > Optical character recognition (OCR) > locations > groups' to include the documented selections, using https://learn.microsoft.com/purview/ocr-learn-about. | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The bandwidth setting is under Microsoft Purview portal > Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection. | Found: go to Data loss prevention > Overview > Data loss prevention settings > Endpoint settings. If bandwidth usage isn't a concern, select Do not limit bandwidth. Unlimited to allow unlimited bandwidth use. | Fix: The path reaches the correct section. For the documented unlimited option, extend it to 'Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection > Do not limit bandwidth. Unlimited', per https://learn.microsoft.com/purview/dlp-configure-endpoint-settings. | Source: https://learn.microsoft.com/purview/dlp-configure-endpoint-settings
- [supported, minor] What's changing / behaviour: Learn documents OCR scanning as an existing Purview capability. | Found: By using optical character recognition (OCR) scanning, Microsoft Purview can scan images for sensitive information. OCR scanning is an optional feature that you must enable at the tenant level. | Fix: Add: 'The Communication Compliance documentation still calls the separate Purview OCR settings preview, although the general OCR page does not mark them that way.' Cite https://learn.microsoft.com/purview/communication-compliance-policies#policy-settings, which says 'Microsoft Purview includes OCR (preview) settings' for its DLP and related solutions. Keep the roadmap General Availability phase unchanged. | Source: https://learn.microsoft.com/purview/ocr-learn-about
-->
