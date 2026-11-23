---
title: "Microsoft Purview Endpoint DLP: protect Recall snapshots on Copilot+ PCs"
slug: "microsoft-purview-endpoint-data-loss-prevention-expand-protection-to-copilot-pc-devices-fo"
roadmapId: 560396
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP policies can now audit or block sensitive content from Windows Recall snapshots on Copilot+ PCs. Purview and Intune admins must both configure it; nothing happens until they do."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "The Learn page for DLP protections for Recall links to Microsoft 365 Enterprise Plans and the Microsoft 365 security and compliance licensing guidance and names no licence itself. Licensing specific to this feature is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","sensitivity-labels","sensitive-information-types","windows-recall","copilot-plus-pc","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 560396"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560396"
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
  - title: "Create a DLP policy that uses device scoping"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["endpoint-dlp","sensitivity-labels","sensitive-information-types","microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr","microsoft-purview-endpoint-data-loss-prevention-protect-sensitive-data-across-agent-to-hum"]
controls:
  - governs: "Whether DLP audits or blocks sensitive content in Recall snapshots"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > policies > Create policy > Enterprise applications & devices > Actions > Audit or restrict activities on devices > Restrictions in Windows Recall in Copilot+ PCs > Restrict content in Windows Recall"
      docs: "https://learn.microsoft.com/purview/dlp-recall-get-started"
    api: null
    note: "Choices are Audit only or Block. Wizard steps between Enterprise applications & devices and Actions (template, name, locations) are not given on the Recall page."
  - governs: "Which DLP provider Recall asks about sensitive windows"
    scope: "other"
    ui:
      surface: "Local Group Policy Editor"
      path: "Computer Configuration > Administrative Templates > Windows Components > Windows AI > Set Data Loss Prevention Provider"
      docs: "https://learn.microsoft.com/windows/client-management/manage-recall"
    api:
      kind: "other"
      call: "./Device/Vendor/MSFT/Policy/Config/WindowsAI/SetDataLossPreventionProvider"
      docs: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-windowsai"
    note: "Device scope. Applies to Enterprise and Education client SKUs only. Also settable through Intune, whose path the pages do not give."
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
    note: "The Recall DLP page sets this to Disable so users can opt in. Administrators cannot enable saving snapshots for users."
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
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-23"
    note: "First briefing: Learn now documents the Recall restriction in Endpoint DLP policies, the Windows DLP provider policy and the prerequisites."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 63
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "168d8d89a8dd28b180170f2af4445d85"
---

## What's changing

Microsoft Purview Endpoint data loss prevention (DLP) can now restrict what Windows Recall saves on Copilot+ PCs. Recall is a Copilot+ PC feature that lets users search locally saved snapshots of their screen. A DLP policy can audit or block snapshots that contain sensitive information types (SITs) or sensitivity-labelled items.

Microsoft Learn documents the setting in a DLP policy for Enterprise applications & devices, under **Restrictions in Windows Recall in Copilot+ PCs** > **Restrict content in Windows Recall**, with the choices **Audit only** or **Block**. With **Audit only**, the user sees no notification and the event is logged in the DLP reports. With **Block**, the sensitive content is not included in the snapshot. Microsoft's Recall page adds that enforcement is applied at window level: Recall removes only the windows the DLP provider identifies as holding blocked sensitive data and keeps the rest of the snapshot.

The Learn page lists the content covered: sensitivity-labelled Teams channels and Teams meeting chats, labelled emails in Outlook, locally stored files with labels or SITs, files with labels or SITs opened in Word, Excel or PowerPoint on the device, and labelled or SIT-matching files opened in the Microsoft 365 Copilot app web apps in Microsoft Edge for Business.

The roadmap item says Purview admins author Endpoint DLP custom policies that integrate with Recall set up by Intune admins, for Copilot+ PC devices exclusively, and describes Microsoft as determining whether policies exist to prevent capture of windows with restricted labels and SITs. Learn now documents the setting, so the roadmap wording reads as the earlier plan. The record shows status Launched, target May CY2026, release phase General Availability, clouds GCC, GCC High and DoD, and lists the platform as Web.

## Why it matters

Recall keeps a searchable local history of what appeared on screen, so a window holding a labelled document or a SIT match can end up in a snapshot unless something stops it. This feature gives Purview administrators a way to apply the same labels and SIT definitions they already use for Endpoint DLP to that history, instead of relying only on Recall's own filtering.

It matters only where Recall is allowed. Microsoft's Manage Recall page says Recall is disabled and removed by default on managed devices, and that users must opt in to saving snapshots. If your organisation does not allow Recall, there is nothing to do except keep that decision under review. If it does, plan the DLP policy and the device settings together, because the Learn page requires both.

## Risk assessment

**Data exposure**
- Without the Recall restriction in a DLP policy, snapshots on an opted-in Copilot+ PC can contain windows with labelled or SIT-matching content. Recall's own **Sensitive information filtering** setting is enabled by default on the device; Microsoft's pages do not describe how it combines with a Purview policy.
- Coverage is limited to the content types the Learn page lists (Teams channels and meeting chats, Outlook emails, local files, files opened in Office apps, and Microsoft 365 Copilot app web apps in Edge for Business). Content outside that list is not documented as covered.
- **Audit only** logs the event but leaves the content in the snapshot's window; only **Block** keeps the content out of the snapshot.

**Security & identity**
- The link between Recall and Purview is the Windows **Set Data Loss Prevention Provider** policy. If it is missing, or cleared later, Microsoft's page says Recall stops invoking a DLP provider and snapshots already stored are unaffected.
- The policy applies to Enterprise and Education client SKUs only, according to the policy CSP page, so Pro devices need separate treatment.

**Autonomy & actions**
- Administrators cannot start Recall snapshots for users: Microsoft's page says saving snapshots requires each user's opt-in consent. The DLP setting only changes what a snapshot may contain.

**Change & support**
- Two teams own the pieces: Purview administrators write the policy, and Intune or Group Policy administrators set the device policies. Agree who owns each before rollout.
- Device prerequisites include minimum Teams and Office desktop app versions and Microsoft Edge for Business. A device below them is a likely reason for missing events.

## Cost and licensing

The Learn page for DLP protections for Recall has a Licensing section that links to Microsoft 365 Enterprise Plans and the Microsoft 365 security and compliance licensing guidance and names no licence itself. A licence statement specific to this feature is therefore not yet published, and the licence your tenant needs for Endpoint DLP should be read from those pages.

The Learn page names no meter, credit or usage charge for the Recall restriction. The costs the page does show are administrator time and the prerequisites: Endpoint DLP enabled for the tenant the Copilot+ PC is onboarded to, Microsoft Intune running on the tenant to create Windows tenant policies, and Copilot+ PC hardware meeting the Recall requirements.

## Scope

**Devices:** Copilot+ PCs that meet the Recall prerequisites in Manage Recall and are onboarded to Endpoint DLP. The roadmap item says Copilot+ PC devices exclusively. The Windows policy that connects Recall to Purview applies to Enterprise and Education client SKUs.

**Users:** only users who have opted in to saving Recall snapshots are affected, once an administrator has made Recall available to them.

**Roles:** the Learn page says the account that creates and deploys DLP policies must be a member of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role group. Intune or Group Policy access is needed for the device settings.

**Clouds and platform:** the roadmap item lists GCC, GCC High and DoD and the platform Web. The Recall DLP Learn page does not mention cloud availability.

**Prerequisites listed by Learn:** Teams version 25290.205.4069.4 or higher, Office desktop apps (Word, Excel, PowerPoint) version 19127 or higher, a minimum Windows build and anti-malware client version, and Microsoft Edge for Business.

## Governance guidance

### Before rollout
- Decide whether Recall is allowed at all. Check the **Allow Recall to be enabled** and **Turn off saving snapshots for Recall** device policies, which Microsoft says control availability and opt-in.
- Confirm the Copilot+ PCs meet the Recall prerequisites and the minimum Windows, anti-malware, Teams and Office versions in the Learn page, and are onboarded to Endpoint DLP.
- Identify which labels and SITs matter for Recall, and check they are already used in your Endpoint DLP policies.
- Assign a Purview administrator in one of the permitted role groups and an Intune or Group Policy administrator for the device settings.

### At rollout
- Set the **Set Data Loss Prevention Provider** policy on pilot devices to the Purview value given on the Manage Recall page.
- Create or edit a DLP policy under Enterprise applications & devices and choose **Audit only** under **Restrict content in Windows Recall**, scoped to the pilot devices.
- Confirm the policy state and scope with the deployment guidance on the Create and deploy data loss prevention policies page, starting from simulation mode.

### After rollout
- Review Recall events in Microsoft Purview Activity Explorer and the DLP reports to see which windows match.
- Move the policy to **Block** once the audit results are clean, then widen the device scope.
- Re-check devices after Windows, Teams or Office updates, because the feature depends on minimum versions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP audits or blocks sensitive content in Recall snapshots</strong><br><small>Tenant</small><br><small class="controls__note">Choices are Audit only or Block. Wizard steps between Enterprise applications &amp; devices and Actions (template, name, locations) are not given on the Recall page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › policies › Create policy › Enterprise applications &amp; devices › Actions › Audit or restrict activities on devices › Restrictions in Windows Recall in Copilot+ PCs › Restrict content in Windows Recall <a href="https://learn.microsoft.com/purview/dlp-recall-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which DLP provider Recall asks about sensitive windows</strong><br><small class="controls__note">Device scope. Applies to Enterprise and Education client SKUs only. Also settable through Intune, whose path the pages do not give.</small></td><td data-label="Admin UI"><strong>Local Group Policy Editor</strong><br>Computer Configuration › Administrative Templates › Windows Components › Windows AI › Set Data Loss Prevention Provider <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/WindowsAI/SetDataLossPreventionProvider</code> <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-windowsai" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users may choose to save Recall snapshots</strong><br><small class="controls__note">The Recall DLP page sets this to Disable so users can opt in. Administrators cannot enable saving snapshots for users.</small></td><td data-label="Admin UI"><strong>Local Group Policy Editor</strong><br>Computer Configuration › Administrative Templates › Windows Components › Windows AI › Turn off saving snapshots for Recall <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/WindowsAI/DisableAIDataAnalysis</code> <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Recall is available on a managed device</strong><br><small class="controls__note">Recall is disabled and removed by default on managed devices. Disabling the policy deletes snapshots already saved.</small></td><td data-label="Admin UI"><strong>Local Group Policy Editor</strong><br>Computer Configuration › Administrative Templates › Windows Components › Windows AI › Allow Recall to be enabled <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/WindowsAI/AllowRecallEnablement</code> <a href="https://learn.microsoft.com/windows/client-management/manage-recall" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two layers have to agree. The Purview portal DLP policy decides whether Recall content is audited or blocked. The Windows **Set Data Loss Prevention Provider** policy decides whether Recall asks Purview at all, and Microsoft's page says clearing it stops Recall invoking a DLP provider. The Allow Recall and snapshot policies decide whether a user can opt in.

Microsoft Learn documents no PowerShell parameter for the Recall restriction at the time of writing (November 2026), so the DLP policy side is shown as not yet documented for automation. The Learn page for the device policies says to use either Microsoft Intune or Local Group Policy Editor but gives no Intune path, so the rows below give the Group Policy path and the CSP URI the pages print. Purview is currently the only supported DLP provider for Recall, according to the Manage Recall page.

## Open questions

- Which licence does the Recall restriction need beyond what Endpoint DLP already requires? Watch the Recall DLP Learn page and the Microsoft 365 security and compliance licensing guidance.
- Is the setting available in GCC, GCC High and DoD? The roadmap lists those clouds; the Learn page does not mention clouds.
- How does Recall's default **Sensitive information filtering** interact with a Purview Block policy for the same content?
- Is there a PowerShell or Graph operation to set **Restrict content in Windows Recall** in a DLP rule, and which Intune settings path applies? Watch the Set-DlpComplianceRule reference and the Recall DLP page.

<!-- rationale
risk: Medium. Where an organisation lets users opt in to Recall, snapshots can hold sensitive content until a Purview DLP policy with a Recall restriction and the Recall DLP provider setting are both in place.
cost: Low. Learn names no extra licence or meter for this setting and points to Microsoft 365 licensing guidance; the cost known is admin time across Purview and Intune. Licensing specific to this feature is not yet published.
impact: Low. Administrators configure it, and only users on Copilot+ PCs who have opted in to saving Recall snapshots would see sensitive windows left out of them.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The printed creation route reaches Actions directly after Enterprise applications & devices. | Found: Select the Custom from the Categories then Custom policy template from Regulations. Select Next. ... Scope the location to only the Devices location. ... Create a rule with the following values: | Fix: Replace controls[0].ui.path and its rendered copy with the documented existing-policy route: 'Data loss prevention > policies > policy > Edit policy > Customize advanced DLP rules > rule > Actions > Audit or restrict activities on devices > Restrictions in Windows Recall in Copilot+ PCs > Restrict content in Windows Recall'. Replace the wizard-gap note with 'Edit an existing rule; choices are Audit only or Block.' Retain the Recall docs link and cite https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure for the route to editing a rule. | Source: https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown because no Recall-specific entitlement is published. | Found: Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection & Governance ... Endpoint Data Loss Prevention (DLP) | Included | Fix: Set licensing.model to 'included'. Replace the licensing notes with 'Endpoint DLP is included with Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. No additional Recall-specific licence requirement is published at the time of writing (November 2026).' Give this same product-level requirement in Cost and licensing and cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-data-loss-prevention-endpoint-data-loss-protection-dlp. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-data-loss-prevention-endpoint-data-loss-protection-dlp
- [supported, minor] What's changing; Why it matters / behaviour: The briefing describes Recall's behaviour without flagging its preview status. | Found: Recall (preview) allows users to search locally saved and locally analyzed snapshots of their screen using natural language. | Fix: Change the Recall definition in What's changing to 'Recall (preview) is a Copilot+ PC feature that lets users search locally saved snapshots of their screen.' Keep the roadmap's General Availability phase for the DLP change; the preview qualification is for Recall. | Source: https://learn.microsoft.com/windows/client-management/manage-recall
- [contradicted, minor] Governance guidance: At rollout; After rollout / consistency: The checklist tells administrators to check policy state and scope and review Activity Explorer and DLP reports, but those controls have no corresponding table rows. | Found: Confirm the policy state and scope ... starting from simulation mode. / Review Recall events in Microsoft Purview Activity Explorer and the DLP reports. / The table contains the Recall action, provider, snapshot-saving and Recall-availability controls only. | Fix: The 'Confirm the policy state and scope' and 'Review Recall events in Microsoft Purview Activity Explorer and the DLP reports' checklist steps lack corresponding controls-table rows. Remove these two checklist bullets; do not add rows in this correction.
-->
