---
title: "Microsoft Purview Endpoint DLP: classify Azure RMS protected Office files on Windows (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-endpoint-data-loss-prevention-endpoint-dlp-support-cla"
roadmapId: 503780
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP in GCC, GCC High and DoD is to classify Office files on Windows devices that carry Azure RMS protection, so device DLP rules may start matching them. Check device rules and just-in-time protection settings."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint Data Loss Prevention as included in Microsoft 365 E5/A5/G5, the Microsoft Purview Suite plans and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. Nothing specific to this capability is published."
audiences: ["security","compliance","end-user"]
tags: ["purview","dlp","endpoint-dlp","encryption","just-in-time-protection","information-protection","gcc","gcc-high","dod"]
sources:
  - title: "Get started with Microsoft Purview Data Loss Prevention just-in-time protection"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    kind: "learn"
  - title: "Learn about Microsoft Purview Data Loss Prevention just-in-time protection"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about-jit"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Analyze endpoint DLP diagnostic logs"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/analyze-endpoint-dlp-diagnostic-logs"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "docs"
  - title: "Microsoft 365 Roadmap item 503780"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503780"
    kind: "roadmap"
videos: []
related: ["endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-allow-customer-to-scope-jit-audit-to-speci","microsoft-purview-endpoint-data-loss-prevention-archive-file-classification-behavior-chang","sensitivity-labels","classifiers"]
controls:
  - governs: "Whether just-in-time protection evaluates files on devices"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Just-in-time protection > Choose which locations to monitor > Devices"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    api: null
    note: "Requires antimalware client 4.18.23080 or later. Allow at least an hour for setting changes to reach devices."
  - governs: "What Endpoint DLP does when classification fails under just-in-time protection"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Just-in-time protection > Fallback action in case of failure"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    api: null
    note: "Options are Allow users to complete actions and Block users from completing actions."
  - governs: "Folders on Windows devices that Endpoint DLP does not classify or protect"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview > Data loss prevention settings > Endpoint settings > File path exclusions for Windows"
      docs: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EndpointDlpGlobalSettings @(@{\"Setting\"=\"PathExclusion\"; \"Value\"=\"<file path>\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    note: "Security & Compliance PowerShell. Applies to all DLP policies for devices."
  - governs: "Separate switch for classifying Azure RMS protected Office files"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-08T23:11:07"
changes:
  - date: "2026-11-26"
    note: "New briefing: Endpoint DLP classification of Azure RMS protected Office files on Windows for GCC, GCC High and DoD, with the just-in-time protection and path exclusion controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 50
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "7d9eac88946c1ad8bce75294ce17b456"
---

## What's changing

Endpoint DLP (data loss prevention on onboarded devices) is to classify Office files stored on Windows devices that have Azure Rights Management (Azure RMS) protection applied. The roadmap item states that classification is triggered when a file is used in applications, or when just-in-time classification is enabled. Microsoft Learn does not describe this capability yet, so what follows about its behaviour is the roadmap's description.

For background, the Endpoint DLP overview says that every time a file is created or modified it is fully scanned for sensitive information types and labels, and then evaluated against DLP policies. Microsoft's troubleshooting guide for Endpoint DLP diagnostic logs still says that "DLP can't evaluate password-protected or encrypted files". The roadmap item and that page disagree for RMS protected Office files at the time of writing (November 2026).

This item covers the GCC, GCC High and DoD clouds. Its status is Rolling out, with a target of June CY2026 and a release phase of General Availability. Microsoft lists the same feature under roadmap item 500895 for Worldwide (Standard Multi-Tenant), where it is Launched with a target of April CY2026. No Message Center post was supplied for this item.

## Why it matters

Device DLP rules that look for sensitive information types in Office files can, once this rolls out, see inside files that Azure RMS protects. A protected file holding, say, financial data could start to match a rule with **Block** or **Block with override** for copy to USB, print or upload. That is the point of the change, but it can surprise users and the help desk.

Microsoft has not stated whether this classification is on by default or needs a setting. No source says an admin switch is needed, and the roadmap describes it as something Endpoint DLP "can now" do, so plan for it to apply to onboarded Windows devices in these clouds. Tenants that use just-in-time protection should expect it to evaluate protected Office files as well, according to the roadmap.

## Risk assessment

**Data exposure**
- The change widens what device DLP rules can match on: the roadmap describes classification of protected files, not any change to who can open them. Whether content from protected files is sent to the cloud classification service when advanced classification is on is not documented (see Open questions).

**Security & identity**
- No change described: the roadmap item covers classification only and says nothing about identities or permissions on protected files.

**Autonomy & actions**
- Existing device rules act on newly classified files with whatever action they already have. With just-in-time protection on, Endpoint DLP blocks egress activities on monitored files until policy evaluation completes, and the **Fallback action in case of failure** setting decides what happens when classification fails.

**Change & support**
- Users may see new policy tips or blocks on protected Office documents. Microsoft's diagnostic-log guide still says encrypted files can't be evaluated, so support staff working from it may misread results.

## Cost and licensing

- **Licence:** the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. This capability is part of Endpoint DLP; nothing licensed separately for it is published.
- **Meter:** none is documented for this capability.
- **Indirect costs:** admin time to review which device rules start matching protected files, and help-desk time for users who meet new blocks.

## Scope

- **Clouds:** GCC, GCC High and DoD, as the roadmap record lists them. Worldwide is covered by roadmap item 500895.
- **Devices:** Windows devices, per the roadmap description. Devices must be onboarded: the Endpoint DLP overview says you need to onboard all the devices you want to use as locations in DLP policies.
- **Files:** Office files with Azure RMS protection applied, per the roadmap.
- **Just-in-time protection prerequisite:** Microsoft says the antimalware client version 4.18.23080 or later must be deployed before just-in-time protection can be deployed.
- **Status:** Rolling out; target June CY2026; General Availability.

## Governance guidance

### Before rollout
- List the device DLP rules that use **Block** or **Block with override** for copy to USB, network share, print or upload, and identify which would match content typically held in RMS protected Office files.
- Check the **Just-in-time protection** settings in the Microsoft Purview portal: whether **Devices** is selected and which **Fallback action in case of failure** is set.
- Review **File path exclusions for Windows** so folders holding protected files are excluded only where intended; files in excluded paths aren't audited or subject to policy enforcement.
- Brief the help desk that protected Office files may now trigger device policy tips and blocks.

### At rollout
- Watch activity explorer for new rule matches on protected Office files from onboarded Windows devices.
- Allow at least an hour for any change to just-in-time protection settings to reach devices before judging its effect.

### After rollout
- Compare blocks on protected Office files with the rules' intent and adjust rules or exclusions.
- Recheck the fallback action if users report blocks where classification failed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether just-in-time protection evaluates files on devices</strong><br><small>Tenant</small><br><small class="controls__note">Requires antimalware client 4.18.23080 or later. Allow at least an hour for setting changes to reach devices.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Just-in-time protection › Choose which locations to monitor › Devices <a href="https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>What Endpoint DLP does when classification fails under just-in-time protection</strong><br><small>Tenant</small><br><small class="controls__note">Options are Allow users to complete actions and Block users from completing actions.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Just-in-time protection › Fallback action in case of failure <a href="https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Folders on Windows devices that Endpoint DLP does not classify or protect</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Applies to all DLP policies for devices.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview › Data loss prevention settings › Endpoint settings › File path exclusions for Windows <a href="https://learn.microsoft.com/purview/dlp-configure-endpoint-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EndpointDlpGlobalSettings @(@{&quot;Setting&quot;=&quot;PathExclusion&quot;; &quot;Value&quot;=&quot;&lt;file path&gt;&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for classifying Azure RMS protected Office files</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Microsoft Learn documents no setting that turns classification of RMS protected Office files on or off by itself at the time of writing (November 2026). The **Disable classification** endpoint setting excludes whole file extensions from Endpoint DLP classification, which would stop content scanning of all files with that extension, protected or not.
- The fallback action decides enforcement only when classification fails; Microsoft says it doesn't change whether JIT Block is triggered.
- Just-in-time protection applies to Windows 10, Windows 11 and macOS; this item concerns Windows devices.
- File path exclusions for Windows stop Endpoint DLP classification and protection for files in those folders, which is broader than the separate file path exclusions inside just-in-time protection.

## Open questions

- Is classification of RMS protected Office files on by default for every onboarded Windows device, or does it depend on a setting? Watch the Endpoint DLP overview on Microsoft Learn.
- When advanced classification is on, is content from RMS protected files sent to the cloud classification service for scanning?
- Will Microsoft update the diagnostic-log guide, which still says DLP can't evaluate encrypted files?
- Does the capability cover Office files protected by a sensitivity label with encryption, or only files with Azure RMS protection applied directly?

<!-- rationale
risk: Medium. Existing device DLP rules may start matching Azure RMS protected Office files that Endpoint DLP classifies, so their block actions may apply to those files; the existing Endpoint DLP settings govern the outcome.
cost: Low. Endpoint DLP is listed as included in Microsoft 365 E5/A5/G5 and the Purview suites; the known cost is admin time to review rule matches and user support for new blocks.
impact: Medium. Users who open, copy or print Azure RMS protected Office files on onboarded Windows devices are the ones who may see new policy tips or blocks.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: With JIT on, Endpoint DLP blocks egress activities on monitored files until policy evaluation completes. | Found: Just-in-time protection blocks egress activities on these monitored files until policy evaluation completes successfully: Items that have never been evaluated. Items on which the evaluation has gone stale. | Fix: Replace that clause with 'Just-in-time protection can block egress activities while policy evaluation completes; the detailed JIT guide qualifies blocking by user scope, applicable Block or Block with override rules, allowed destinations, resume support and evaluation time.' The overview gives the broad statement, but acknowledge the more specific account at https://learn.microsoft.com/purview/endpoint-dlp-learn-about-jit#how-jit-protection-works, already cited in sources. | Source: https://learn.microsoft.com/purview/endpoint-dlp-learn-about
- [contradicted, minor] Governance guidance: Before rollout and At rollout; controls / consistency: The governance checklist names device DLP rules and activity explorer, but neither has a controls-table row. | Found: List the device DLP rules that use Block or Block with override... Watch activity explorer for new rule matches... The table contains only JIT monitoring, JIT fallback, Windows path exclusions and the absent RMS-specific switch. | Fix: Remove the checklist bullets beginning 'List the device DLP rules', 'Watch activity explorer' and 'Compare blocks on protected Office files'; these steps ask readers to review or adjust controls without table rows. Do not add rows as part of this correction.
-->
