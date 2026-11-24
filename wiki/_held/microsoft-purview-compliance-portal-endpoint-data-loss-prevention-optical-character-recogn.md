---
title: "Microsoft Purview Endpoint DLP: OCR scanning of images on Mac devices"
slug: "microsoft-purview-compliance-portal-endpoint-data-loss-prevention-optical-character-recogn"
roadmapId: 410247
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans OCR image scanning on Mac endpoints so Purview DLP can match sensitive text in images. Learn documents OCR as a tenant-level, pay-as-you-go setting; review billing, bandwidth and scope before the January CY2027 target."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says a Global admin must set up pay-as-you-go billing to enable OCR, and that once billing is entered a Compliance admin can configure OCR without any extra setup or licensing requirements. Learn's pricing page lists $0.001/transaction."
audiences: ["compliance","security","m365-admin","finops"]
tags: ["ocr","endpoint-dlp","dlp","macos","purview","pay-as-you-go","sensitive-information-types","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 410247"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=410247"
    kind: "roadmap"
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Estimate your OCR costs"
    url: "https://learn.microsoft.com/purview/ocr-cost-estimator"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/syntex/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Set up pay-as-you-go billing for document processing"
    url: "https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing"
    kind: "learn"
  - title: "Licensing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/syntex/syntex-licensing"
    kind: "learn"
  - title: "Onboard macOS devices into Microsoft 365 overview"
    url: "https://learn.microsoft.com/purview/device-onboarding-macos-overview"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
videos: []
related: ["endpoint-dlp","microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr","microsoft-purview-compliance-portal-optical-character-recognition-ocr-support-for-sharepoi","sensitive-information-types"]
controls:
  - governs: "Whether OCR scans images, and for which locations and groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Optical character recognition (OCR)"
      docs: "https://learn.microsoft.com/purview/ocr-learn-about"
    api: null
    note: "The page names the Compliance admin for configuration. Settings take effect about an hour after turning on. Pay-as-you-go billing must be set up first."
  - governs: "How much content each device may send to the cloud for OCR in a rolling 24 hours"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api: null
    note: "Applies per device. The OCR page gives a default of 1,024 MB per device per day and says OCR stops scanning images once it is reached."
  - governs: "Which folders on Mac devices Endpoint DLP, and so OCR, does not scan"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > File path exclusions for Mac"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings @(@{\"Setting\"=\"PathExclusion\"; \"Value\"=\"<path>\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    note: "Security & Compliance PowerShell. The reference's PathExclusion examples are Windows paths. Learn says the macOS recommended exclusion list is on by default."
  - governs: "Which onboarded devices are configured and in sync, and whether the bandwidth limit was exceeded"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Read-only monitoring today, not a control over OCR. The query runs in Advanced hunting in the Microsoft Defender portal."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-04-06T23:15:32"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: Learn already documents macOS OCR while the roadmap shows In development with a January CY2027 target."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 75
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "cd85dd53ccbd460b9f6e9ed891f15652"
---

## What's changing

The roadmap item states that Microsoft is adding optical character recognition (OCR) support on Mac endpoints, so that Purview policies such as data loss prevention (DLP) and auto-labelling can detect sensitive content in images and apply policies to protect them. The record says images are not supported for content scanning on Mac endpoint devices today.

Microsoft Learn already describes OCR as covering macOS. Its OCR page says OCR is an optional feature that you must enable at the tenant level, lists macOS devices among the places where images can be scanned, and says Microsoft Purview then applies your existing DLP, records management and insider risk management policies to images and text-based content. For Teams, Windows and macOS endpoints it lists JPEG, JPG, PNG, BMP, TIFF and image-only PDF files, up to 50 MB, between 50 × 50 and 16,000 × 16,000 pixels. This briefing does not reconcile that Learn text with the roadmap status: the roadmap is Microsoft's plan and the Learn page is current documentation.

The record gives the status as In development, the release phase as General Availability and the target as January CY2027. That is a target, not a commitment, and the record gives no preview date. It lists GCC, GCC High and DoD, and lists the platform as Web.

## Why it matters

If your Macs hold screenshots, scanned forms or photographed documents, the roadmap item says content in those images is outside content scanning on Mac endpoints today. Once OCR covers them, the sensitive information types in your existing policies are applied to text in images, so rules that were quiet on Macs can start matching, and users can meet warnings or blocks they have not met before. Which action fires is decided by your existing rules, not by anything new in this change.

Microsoft has not stated what happens on arrival, so this briefing does not assume it. No source says existing behaviour changes, which makes this a review item: confirm billing, the per-device bandwidth limit and the file path exclusions before January CY2027, and decide whether images on Macs should be in scope of OCR in your tenant.

## Risk assessment

**Data exposure**
- Learn says that when OCR is turned on for Windows and macOS devices, the devices start sending messages to the cloud for scanning, so image content from Macs leaves the device for classification. Learn says the endpoint cache keeps only the classifiers identified on the image and the image hash.
- Learn says images in folders excluded in the endpoint DLP settings are not scanned. The macOS recommended exclusion list is on by default, so check what it leaves unscanned before relying on OCR coverage.
- Learn says only images uploaded after OCR is enabled are scanned; do not treat enabling OCR as a sweep of images already held.

**Security & identity**
- Learn asks that, for endpoint devices, network settings do not obstruct OCR and that a wildcard allowing blob.core.windows.net endpoints is present. Check proxy and firewall rules on your Mac fleet against that requirement.
- Learn names the Compliance admin for OCR settings and a Global or SharePoint admin for billing, so two teams have to coordinate.

**Autonomy & actions**
- OCR only extracts text; the policies you already have act on it. Learn's macOS onboarding page lists actions that can block, warn or audit on macOS (copy to USB, copy to network shares, print, copy to clipboard, upload to cloud, access by unallowed apps). Expect a rule that uses the Content Contains condition to apply those actions to matching images.

**Change & support**
- Learn gives a default bandwidth limit of 1,024 MB of data per device per day and says OCR stops scanning images once it is reached. Expect uneven coverage on Macs that handle many images until the limit is raised.
- Learn says OCR settings take effect about an hour after you turn them on, so allow for that when testing.

## Cost and licensing

Learn's OCR page says that, because it is an optional feature, your Global admin must set up pay-as-you-go billing to enable OCR, and that you do not need to set up Microsoft Syntex itself. It says that after billing information is entered, a Compliance admin can configure OCR in Microsoft Purview without any extra setup or licensing requirements.

The meter: Learn's pay-as-you-go pricing page lists optical character recognition at $0.001/transaction. The OCR page says each image scanned counts as one transaction and each page of a PDF file is charged separately. For endpoints, it says the cache is kept for 30 days, and that each scanned image can be used in any number of policies across DLP, insider risk management, auto-labelling and records management at no extra charge. Usage is monitored in Microsoft Cost Management for Azure.

Learn describes a free OCR cost estimator (preview) in the Microsoft Purview portal that can be used only once per customer. Learn's Syntex billing page sets up billing in the Microsoft 365 admin center under Setup, in the Billing and licenses section, and needs an Azure subscription and resource group in the same tenant; it names SharePoint Administrator or Global Administrator for that task. Indirect costs are admin time, network allow-listing and any bandwidth increase. Endpoint DLP licensing is covered by the Microsoft 365 licensing guidance that the macOS onboarding page points to; this briefing does not restate it.

Government clouds: Learn's document processing licensing page says that for GCC organisations pay-as-you-go licensing, and the services that require it, aren't yet available, and it lists optical character recognition among those services. That note names GCC only; the roadmap item lists GCC, GCC High and DoD.

## Scope

**Users and devices.** The Learn OCR page lists macOS devices as a location you can select once OCR is enabled. Macs must already be managed through Intune, JAMF Pro or another MDM solution and onboarded to Microsoft Purview; the onboarding page covers the three latest macOS versions on x64 and M1, M2 and M3 (ARM64) processors.

**Roles.** The Compliance admin configures OCR settings; a Global or SharePoint admin sets up pay-as-you-go billing.

**Clouds and platforms.** The roadmap record lists GCC, GCC High and DoD and the platform Web. See Cost and licensing for the Learn note on GCC pay-as-you-go.

**Rollout.** The record gives a January CY2027 target and no rollout mechanics; Microsoft has not stated a default.

**Limits Learn gives.** JPEG, JPG, PNG, BMP, TIFF and image-only PDF; 50 MB maximum file size; 50 × 50 to 16,000 × 16,000 pixels; the first 2 million characters of text.

## Governance guidance

### Before rollout
- Ask your Global admin to confirm that an Azure pay-as-you-go subscription and billing are in place, as Learn lists them as prerequisites, and tell finance the OCR meter is $0.001/transaction.
- Use the OCR cost estimator in the Microsoft Purview portal (Settings > Optical character recognition (OCR)) before you enable OCR; it can be used once.
- Check onboarded Macs in the device list and confirm Configuration status and Policy sync status are Updated.
- Review the file path exclusions for Mac, including the recommended list toggle, so you know which folders OCR will not scan.
- Check proxy and firewall rules against Learn's blob.core.windows.net wildcard requirement for endpoint devices.

### At rollout
- Have the Compliance admin enable OCR and select the device location once billing is confirmed; allow about an hour for the setting to take effect.
- Review which existing DLP rules use Content Contains conditions with Mac actions, and consider auditing before blocking.
- Set the per-device bandwidth limit deliberately rather than leaving the 1,024 MB per day default unexamined.

### After rollout
- Watch the OCR meter in Microsoft Cost Management for Azure against your estimate.
- Query the device attribute that shows advanced classification bandwidth usage exceeded, and raise the limit if OCR stops on busy Macs.
- Re-read Learn's OCR and Endpoint DLP pages when the roadmap status changes from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether OCR scans images, and for which locations and groups</strong><br><small>Tenant</small><br><small class="controls__note">The page names the Compliance admin for configuration. Settings take effect about an hour after turning on. Pay-as-you-go billing must be set up first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Optical character recognition (OCR) <a href="https://learn.microsoft.com/purview/ocr-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>How much content each device may send to the cloud for OCR in a rolling 24 hours</strong><br><small>Tenant</small><br><small class="controls__note">Applies per device. The OCR page gives a default of 1,024 MB per device per day and says OCR stops scanning images once it is reached.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › Advanced classification scanning and protection <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which folders on Mac devices Endpoint DLP, and so OCR, does not scan</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The reference's PathExclusion examples are Windows paths. Learn says the macOS recommended exclusion list is on by default.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › File path exclusions for Mac <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings @(@{&quot;Setting&quot;=&quot;PathExclusion&quot;; &quot;Value&quot;=&quot;&lt;path&gt;&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which onboarded devices are configured and in sync, and whether the bandwidth limit was exceeded</strong><br><small>Tenant</small><br><small class="controls__note">Read-only monitoring today, not a control over OCR. The query runs in Advanced hunting in the Microsoft Defender portal.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no PowerShell or Graph operation for the OCR tenant setting or for the per-device bandwidth limit, so those rows show no automation. The Set-PolicyConfig reference documents path exclusions through -EndpointDlpGlobalSettings, with Windows paths as its examples.

The controls interact: a path exclusion removes images in that folder from OCR whatever the OCR settings say, and the bandwidth limit stops OCR for a device when reached. The device list is monitoring, not enforcement.

## Open questions

- Learn already lists macOS among OCR locations while the roadmap shows In development with a January CY2027 target. What changes in January CY2027, and does a tenant that already has OCR enabled for devices get macOS image scanning without further action? Watch roadmap item 410247 and the Learn OCR page.
- Will OCR on Mac be available and billable in GCC, GCC High and DoD? Learn's licensing note says GCC pay-as-you-go isn't yet available, and the roadmap lists all three clouds. Watch the document processing licensing page.
- Which macOS Defender client version, if any, does OCR need? Watch the macOS onboarding overview.
- Will a rate specific to endpoint OCR be published, or does the $0.001/transaction meter apply unchanged? Watch Learn's pay-as-you-go pricing page.

<!-- rationale
risk: Medium. Once OCR is on, Mac devices send image content to the cloud for scanning and existing DLP policies can act on images. Microsoft has not stated whether tenants with OCR already on for devices get macOS scanning automatically.
cost: Variable. OCR is billed pay-as-you-go through an Azure subscription; Learn's pricing page lists $0.001/transaction for optical character recognition, and each image scanned counts as one transaction.
impact: Medium. Users of onboarded Macs notice only where an existing DLP policy matches text in an image; compliance admins configure OCR for the tenant and a Global or SharePoint admin sets up billing.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: second paragraph / behaviour: The sentence grouping Teams with Windows and macOS endpoints gives Teams a maximum OCR file size of 50 MB. | Found: File size (Exchange, Teams) | 20 MB max | Fix: Replace the sentence with: 'For Teams, Windows and macOS endpoints it lists JPEG, JPG, PNG, BMP, TIFF and image-only PDF files. The maximum file size is 20 MB for Teams and 50 MB for Windows and macOS endpoints; image resolution must be between 50 × 50 and 16,000 × 16,000 pixels.' | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [contradicted, blocker] Cost and licensing; Scope: Roles; Risk assessment: Security & identity; rationale: impact / role: A SharePoint Administrator or Global Administrator can set up pay-as-you-go billing, without naming the additional Azure permissions needed. | Found: You must be a SharePoint Administrator or Global Administrator ... You must have owner or contributor rights to the Azure subscription that you want to use for pay-as-you-go billing. | Fix: Qualify the billing-role statements with: 'The administrator setting up billing must also have owner or contributor rights to the Azure subscription used for pay-as-you-go billing.' The requirement is stated at https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing. | Source: https://learn.microsoft.com/microsoft-365/syntex/syntex-azure-billing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: OCR row / admin-path: The tenant OCR configuration is reached through Microsoft Purview portal > Settings > Optical character recognition (OCR). | Found: Select Settings. Select Optical character recognition (OCR) to enter your OCR configuration settings. Select the locations where you want to scan images. Select the groups that you want included or excluded from OCR scans. | Fix: The route reaches the correct settings page but stops before selecting scope. Keep the path and append to the row note: 'Select the locations where you want to scan images, then the groups to include or exclude from OCR scans.' | Source: https://learn.microsoft.com/purview/ocr-learn-about
- [supported, minor] controls[1].ui; controls[1].note; Risk assessment: Change & support; Governance controls / admin-path: The per-device rolling 24-hour OCR bandwidth control is under Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection. | Found: set a limit on how much bandwidth can be used in a rolling 24-hour period. You configure the limit in Endpoint DLP settings and it applies per device. | Fix: Extend the path to 'Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > Advanced classification scanning and protection > Allocated bandwidth limits'. The subsetting is named at the already-cited https://learn.microsoft.com/purview/endpoint-dlp-learn-about. | Source: https://learn.microsoft.com/purview/dlp-configure-endpoint-settings
- [supported, minor] controls[3].ui; Governance controls: device monitoring row; Governance guidance / admin-path: Microsoft Purview portal > Settings > Device onboarding > Devices provides configuration, policy-sync and bandwidth-exceeded monitoring for onboarded devices. | Found: Sign in to the Microsoft Purview portal > Settings ... > Device onboarding > Devices. ... Select a device to open the details pane for more information on the specific device attributes under Device details. | Fix: For the bandwidth-exceeded detail, extend the route to 'Settings > Device onboarding > Devices > device > Device details'. The existing shorter route correctly reaches the device list. | Source: https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist names controls not represented by the four controls-table rows. | Found: Use the OCR cost estimator ... Check proxy and firewall rules ... Review which existing DLP rules ... Watch the OCR meter in Microsoft Cost Management for Azure | Fix: The checklist steps asking the reader to confirm billing setup, use the OCR cost estimator, check proxy/firewall rules, review existing DLP rules and watch usage in Cost Management have no corresponding controls-table rows. The four current rows cover OCR configuration, bandwidth, Mac exclusions and device monitoring.
- [supported, minor] Governance guidance: Before rollout, OCR cost estimator / admin-path: The OCR cost estimator is reached from Microsoft Purview portal > Settings > Optical character recognition (OCR). | Found: Select Settings. Select Optical character recognition (OCR). Under Estimate the cost of an OCR scan for free, select Try for free. | Fix: If retaining the estimator instruction, give 'Settings > Optical character recognition (OCR) > Estimate the cost of an OCR scan for free > Try for free', followed by 'Select the locations and choose Run estimation'. The current path stops on the correct page. | Source: https://learn.microsoft.com/purview/ocr-cost-estimator
-->
