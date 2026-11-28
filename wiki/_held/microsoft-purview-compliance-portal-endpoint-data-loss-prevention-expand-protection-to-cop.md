---
title: "Microsoft Purview Endpoint DLP: keep sensitive windows out of Windows Recall snapshots on Copilot+ PCs (Worldwide)"
slug: "microsoft-purview-compliance-portal-endpoint-data-loss-prevention-expand-protection-to-cop"
roadmapId: 502519
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP policies can audit or block sensitive-labelled and SIT-matching content in Windows Recall snapshots on Copilot+ PCs. It needs a Purview policy and a Windows device policy; it does nothing until admins set both."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Purview service description lists Endpoint DLP as included with Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. No Recall-specific licence is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","windows-recall","copilot-plus-pc","sensitivity-labels","sensitive-information-types","intune","group-policy"]
sources:
  - title: "Microsoft 365 Roadmap 502519"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502519"
    kind: "roadmap"
  - title: "Get started with data loss prevention protections for Recall"
    url: "https://learn.microsoft.com/purview/dlp-recall-get-started"
    kind: "learn"
  - title: "Manage Recall"
    url: "https://learn.microsoft.com/windows/client-management/manage-recall"
    kind: "learn"
  - title: "Policy CSP - WindowsAI"
    url: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-windowsai"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Create policy to detect and alert on U.S. PII data exposure"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-expand-protection-to-copilot-pc-devices-fo","endpoint-dlp","role-groups","microsoft-purview-endpoint-data-loss-prevention-protect-sensitive-data-across-agent-to-hum"]
controls:
  - governs: "Whether DLP audits or blocks sensitive content in Recall snapshots"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Actions > Audit or restrict activities on devices > Restrictions in Windows Recall in Copilot+ PCs > Restrict content in Windows Recall"
      docs: "https://learn.microsoft.com/purview/dlp-recall-get-started"
    api: null
    note: "Enterprise applications & devices policies. Choices are Audit only or Block. Marked in preview in the DLP policy reference."
  - governs: "Which DLP provider Recall consults about sensitive windows"
    scope: "other"
    ui:
      surface: "Local Group Policy Editor"
      path: "Computer Configuration > Administrative Templates > Windows Components > Windows AI > Set Data Loss Prevention Provider"
      docs: "https://learn.microsoft.com/windows/client-management/manage-recall"
    api:
      kind: "other"
      call: "./Device/Vendor/MSFT/Policy/Config/WindowsAI/SetDataLossPreventionProvider"
      docs: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-windowsai"
    note: "Device scope; Enterprise and Education client SKUs only. Required for DLP protections for Recall. Clearing it stops Recall invoking a DLP provider."
  - governs: "Whether users may choose to save Recall snapshots"
    scope: "other"
    ui:
      surface: "Local Group Policy Editor"
      path: "Computer Configuration > Administrative Templates > Windows Components > Windows AI > Turn off saving snapshots for Recall"
      docs: "https://learn.microsoft.com/windows/client-management/manage-recall"
    api:
      kind: "other"
      call: "./Device/Vendor/MSFT/Policy/Config/WindowsAI/DisableAIDataAnalysis"
      docs: "https://learn.microsoft.com/windows/client-management/manage-recall"
    note: "The Recall DLP page sets it to Disable so users can opt in. Enabling it deletes snapshots already saved."
  - governs: "Whether Recall is available on a managed device"
    scope: "other"
    ui:
      surface: "Local Group Policy Editor"
      path: "Computer Configuration > Administrative Templates > Windows Components > Windows AI > Allow Recall to be enabled"
      docs: "https://learn.microsoft.com/windows/client-management/manage-recall"
    api:
      kind: "other"
      call: "./Device/Vendor/MSFT/Policy/Config/WindowsAI/AllowRecallEnablement"
      docs: "https://learn.microsoft.com/windows/client-management/manage-recall"
    note: "Recall is disabled and removed by default on managed devices. Disabling the policy deletes snapshots already saved."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-15T22:00:42"
changes:
  - date: "2026-11-28"
    note: "First briefing for the Worldwide roadmap item: the Recall restriction in Endpoint DLP rules, the Windows DLP provider policy, prerequisites and licensing."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 68 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 66
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "2640516cae0377e5b63774ea85caf4b6"
---

## What's changing

Microsoft Purview Endpoint data loss prevention (DLP) can now restrict what Windows Recall saves on Copilot+ PCs. Recall (preview) lets users search locally saved snapshots of their screen; a DLP rule can audit or block snapshots that contain sensitive information types (SITs) or sensitivity-labelled items.

Microsoft Learn documents the setting in DLP policies for **Enterprise applications & devices**, under **Actions** > **Audit or restrict activities on devices** > **Restrictions in Windows Recall in Copilot+ PCs** > **Restrict content in Windows Recall**, with the choices **Audit only** or **Block**. With **Audit only**, the user sees no notification and the event is logged in the DLP reports. With **Block**, the sensitive content is not included in the snapshot. Microsoft's Manage Recall page says enforcement is applied at window level: Recall removes only the windows the DLP provider identifies and keeps the rest of the snapshot.

The Learn page lists the content covered: sensitivity-labelled Teams channels and Teams meeting chats, labelled emails in Outlook, locally stored files with labels or SITs, cloud files with labels or SITs opened in Word, Excel or PowerPoint on the device, and such files opened in the Microsoft 365 Copilot app web apps in Microsoft Edge for Business.

The roadmap item shows status Launched, preview from November CY2025, a target of April CY2026, release phases General Availability and Preview, the Worldwide (Standard Multi-Tenant) cloud and the platform Web. Microsoft's DLP policy reference still marks **Restrictions in Windows Recall in Copilot+ PCs** as in preview.

## Why it matters

Recall keeps a searchable local history of what appeared on screen, so a window showing a labelled document or a SIT match can end up in a snapshot. This control lets Purview administrators apply the labels and SITs they already use in Endpoint DLP to that history, rather than relying only on Recall's own **Sensitive information filtering**, which the Manage Recall page says is enabled by default.

It matters only where Recall is allowed. The Manage Recall page says Recall is disabled and removed by default on managed devices and that saving snapshots needs each user's consent. If your organisation keeps Recall off, nothing here needs doing. If it allows Recall, plan the DLP rule and the device policy together: the Learn page marks the Windows DLP provider policy as required, and without it Recall does not ask Purview.

## Risk assessment

**Data exposure**
- On an opted-in Copilot+ PC with no Recall restriction in a DLP rule, snapshots can contain windows with labelled or SIT-matching content. Microsoft's pages do not describe how Recall's own **Sensitive information filtering** combines with a Purview rule.
- **Audit only** logs the event but leaves the window in the snapshot; **Block** keeps the sensitive content out.
- Coverage is the content list on the Learn page. Other apps and windows are not listed there.

**Security & identity**
- The link between Recall and Purview is the Windows **Set Data Loss Prevention Provider** policy. The Manage Recall page says removing or clearing it stops Recall invoking a DLP provider, and snapshots already stored are unaffected.
- The policy CSP page says the setting applies to Enterprise and Education client SKUs only; Pro is not listed.

**Autonomy & actions**
- No change: the feature takes no action beyond leaving content out of snapshots. The Manage Recall page says IT admins cannot start saving snapshots for users.

**Change & support**
- Purview administrators write the rule; Intune or Group Policy administrators set the device policies. Each half fails silently without the other.
- The Learn page sets minimum Windows, anti-malware, Teams and Office versions and requires Microsoft Edge for Business. A device below them is a likely cause of missing events.

## Cost and licensing

**Licence.** Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as included with Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The Recall DLP Learn page's Licensing section points to Microsoft 365 Enterprise Plans and the Microsoft 365 security and compliance licensing guidance, and names no licence specific to the Recall restriction.

**Meter.** The Recall DLP Learn page names no meter or usage charge for this setting.

**Indirect costs.** Administrator time in Purview and Intune, Copilot+ PC hardware that meets the Recall requirements, and the prerequisite that Microsoft Intune is running on the tenant to create Windows tenant policies.

## Scope

**Devices:** Copilot+ PCs that meet the Recall prerequisites on the Manage Recall page and are onboarded to Endpoint DLP. The roadmap item says Copilot+ PC devices exclusively. The **Set Data Loss Prevention Provider** policy applies to Enterprise and Education client SKUs.

**Users:** users who have opted in to saving Recall snapshots on devices where administrators have made Recall available.

**Roles:** the account that creates and deploys DLP policies must be a member of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role group. Device policies are set with Microsoft Intune or Local Group Policy Editor.

**Prerequisites on the Learn page:** Windows build greater than 262100.67225, anti-malware client 4.18.2508.5 or higher, Teams 25290.205.4069.4 or higher, Office desktop apps (Word, Excel, PowerPoint) 19127 or higher, and Microsoft Edge for Business.

**Cloud and platform:** the roadmap item lists Worldwide (Standard Multi-Tenant) and the platform Web.

## Governance guidance

### Before rollout
- Decide whether Recall is allowed at all, using the **Allow Recall to be enabled** and **Turn off saving snapshots for Recall** device policies.
- Confirm target Copilot+ PCs run Enterprise or Education, meet the minimum Windows, anti-malware, Teams and Office versions, and are onboarded to Endpoint DLP.
- Choose the labels and SITs that must never appear in Recall, and check they already appear in your Endpoint DLP rules.
- Name a Purview administrator in one of the permitted role groups and an Intune or Group Policy owner for the device policies.

### At rollout
- Set **Set Data Loss Prevention Provider** on pilot devices to the Purview value given on the Manage Recall page.
- Edit a DLP rule in an Enterprise applications & devices policy and set **Restrict content in Windows Recall** to **Audit only** first.

### After rollout
- Move **Restrict content in Windows Recall** to **Block** once the audit events show the expected matches.
- Recheck that **Set Data Loss Prevention Provider** is still applied after device policy changes, because clearing it stops Recall asking Purview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP audits or blocks sensitive content in Recall snapshots</strong><br><small>Tenant</small><br><small class="controls__note">Enterprise applications &amp; devices policies. Choices are Audit only or Block. Marked in preview in the DLP policy reference.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule › Actions › Audit or restrict activities on devices › Restrictions in Windows Recall in Copilot+ PCs › Restrict content in Windows Recall <a href="https://learn.microsoft.com/purview/dlp-recall-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which DLP provider Recall consults about sensitive windows</strong><br><small class="controls__note">Device scope; Enterprise and Education client SKUs only. Required for DLP protections for Recall. Clearing it stops Recall invoking a DLP provider.</small></td><td data-label="Admin UI"><strong>Local Group Policy Editor</strong><br>Computer Configuration › Administrative Templates › Windows Components › Windows AI › Set Data Loss Prevention Provider <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/WindowsAI/SetDataLossPreventionProvider</code> <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-windowsai" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users may choose to save Recall snapshots</strong><br><small class="controls__note">The Recall DLP page sets it to Disable so users can opt in. Enabling it deletes snapshots already saved.</small></td><td data-label="Admin UI"><strong>Local Group Policy Editor</strong><br>Computer Configuration › Administrative Templates › Windows Components › Windows AI › Turn off saving snapshots for Recall <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/WindowsAI/DisableAIDataAnalysis</code> <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Recall is available on a managed device</strong><br><small class="controls__note">Recall is disabled and removed by default on managed devices. Disabling the policy deletes snapshots already saved.</small></td><td data-label="Admin UI"><strong>Local Group Policy Editor</strong><br>Computer Configuration › Administrative Templates › Windows Components › Windows AI › Allow Recall to be enabled <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/WindowsAI/AllowRecallEnablement</code> <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two layers have to agree. The Purview DLP rule decides whether Recall content is audited or blocked; the Windows **Set Data Loss Prevention Provider** policy decides whether Recall consults Purview at all. The Manage Recall page says Purview is currently the only supported DLP provider for Recall.

The **Set-DlpComplianceRule** cmdlet's **EndpointDlpRestrictions** parameter sets Endpoint DLP restrictions, but its reference names no setting value for Windows Recall at the time of writing (November 2026). The Recall DLP page says the device policies can be set with Microsoft Intune or Local Group Policy Editor; the table gives the Group Policy path and the CSP each page prints. Recall-related events appear in Activity explorer, according to the Recall DLP page.

## Open questions

- Will the **Restrictions in Windows Recall in Copilot+ PCs** setting lose its preview label in the DLP policy reference, matching the roadmap's General Availability phase?
- Which **EndpointDlpRestrictions** setting value, if any, sets the Recall restriction in PowerShell? Watch the Set-DlpComplianceRule reference.
- How does Recall's default **Sensitive information filtering** interact with a Purview **Block** rule for the same content?
- Will the content list grow beyond Teams, Outlook, Office desktop apps, local files and Edge for Business? Watch the Recall DLP Learn page.

<!-- rationale
risk: Medium. Where an organisation allows Recall and users opt in, snapshots can hold windows with labelled or SIT-matching content until a DLP rule set to Block and the Windows DLP provider policy are both in place.
cost: Low. Endpoint DLP is included in Microsoft 365 E5 and the other plans the Purview service description lists; no meter is documented for the Recall restriction. The known cost is Purview and Intune admin time.
impact: Low. Administrators configure it, and only opted-in Recall users on onboarded Copilot+ PCs would find sensitive windows left out of their snapshots.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: The feature takes no action beyond leaving content out of snapshots. | Found: If you select Audit only, then the user doesn't see any notification when a snapshot is taken that contains sensitive information. However, the event is logged in the DLP reports. | Fix: Replace 'No change: the feature takes no action beyond leaving content out of snapshots.' with 'The feature can audit sensitive-content snapshot events or exclude sensitive content from snapshots.' This also resolves the conflict with the page's Audit only description. Source: https://learn.microsoft.com/purview/dlp-recall-get-started. | Source: https://learn.microsoft.com/purview/dlp-recall-get-started
- [unsupported, major] Risk assessment: Change & support / behaviour: Each configuration half fails silently without the other. | Found: Searched: Recall DLP provider policy missing DLP rule fails silently audit action; Recall DLP no policy snapshot. Read dlp-recall-get-started, Manage Recall and DLP Provider API error-handling excerpts. Sources require configuration but do not state both missing-half cases fail silently. | Fix: Remove 'Each half fails silently without the other.' The preceding sentence and documented requirement for both configuration layers can remain.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Risk assessment: Security & identity; Scope; Governance guidance / availability: The provider policy is device-scoped and applies only to Enterprise and Education client SKUs, not Pro. | Found: This setting applies to Enterprise and Education client SKUs only. | Fix: Qualify the existing Enterprise/Education statement with: 'The same CSP page's editions table also marks IoT Enterprise / IoT Enterprise LTSC as supported, although its explanatory text says Enterprise and Education only.' Cite https://learn.microsoft.com/windows/client-management/mdm/policy-csp-windowsai#setdatalosspreventionprovider. | Source: https://learn.microsoft.com/windows/client-management/mdm/policy-csp-windowsai
-->
