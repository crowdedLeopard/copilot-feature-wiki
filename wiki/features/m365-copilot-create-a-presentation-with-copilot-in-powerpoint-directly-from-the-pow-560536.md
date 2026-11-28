---
title: "PowerPoint for Mac: start a Copilot presentation from PowerPoint Home"
slug: "m365-copilot-create-a-presentation-with-copilot-in-powerpoint-directly-from-the-pow-560536"
roadmapId: 560536
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "PowerPoint for Mac gets an option on PowerPoint Home (File menu) to create a presentation with Copilot. Microsoft says it is on by default for eligible users and needs no admin action; tell Mac users it is there."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "MC1311973 names users assigned a Microsoft Copilot licence. The Microsoft Copilot overview lists creating presentations from prompts among PowerPoint features for Microsoft 365 Copilot (Basic), users without the add-on. No price specific to this entry point is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["powerpoint","m365-copilot","macos","microsoft-365-apps","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 560536"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560536"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 560694"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560694"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 560537"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560537"
    kind: "roadmap"
  - title: "MC1311973: PowerPoint for Mac: Create a presentation with Copilot directly from PowerPoint Home"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1311973"
    kind: "message-center"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Release Notes for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use preferences to manage privacy controls for Office for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Add a property list file to macOS devices using Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos"
    kind: "learn"
  - title: "Update macOSCustomAppConfiguration"
    url: "https://learn.microsoft.com/graph/api/intune-deviceconfig-macoscustomappconfiguration-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Which users hold a Microsoft 365 Copilot licence (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Microsoft 365 Copilot licence (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["cloud-policy","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po","m365-copilot-reference-the-content-of-a-powerpoint-file-when-creating-a-presentatio-555889"]
controls:
  - governs: "Whether the Copilot option on PowerPoint Home can be hidden on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for this entry point at the time of writing (November 2026)."
  - governs: "Whether Copilot features, including this option, are available in PowerPoint and other Office apps on Mac"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    api: null
    note: "Office Apps Administrator is the recommended role; Security Administrator and Global Administrator are also supported. Also covers other experiences that analyse content, such as PowerPoint Designer."
  - governs: "Connected experiences that analyse content on managed Macs"
    scope: "other"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Create > New policy > macOS > Templates > Preference file > Create > Basics > Configuration settings > Property list file"
      docs: "https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos"
    api:
      kind: "graph"
      call: "PATCH /beta/deviceManagement/deviceConfigurations/{deviceConfigurationId}"
      docs: "https://learn.microsoft.com/graph/api/intune-deviceconfig-macoscustomappconfiguration-update?view=graph-rest-beta"
    note: "Intune-enrolled, MDM-managed Macs; Policy and Profile Manager role. Domain com.microsoft.office, OfficeExperiencesAnalyzingContentPreference Boolean FALSE. Graph: beta API, needs an active Intune licence."
  - governs: "Which users hold a Microsoft 365 Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Decides the Premium tier. Not documented as removing this option from Microsoft 365 Copilot (Basic) users."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-06-01T23:15:29"
changes:
  - date: "2026-11-28"
    note: "New briefing for the PowerPoint for Mac Home entry point to Copilot presentation creation, with MC1311973 and the Mac connected-experiences control."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 53 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the managed-Mac control: added the Intune admin center preference-file path and the Graph beta update call in place of the preference tuple; added the full Cloud Policy path and its supported roles."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f5686c6ad285fa1d39848cefa5bdab31"
---

## What's changing

PowerPoint for Mac gains an option on PowerPoint Home, in the File menu, to create a new presentation with Copilot, so a user can start from a prompt without first opening a blank or existing file.

Microsoft's notice MC1311973 says the option is available as soon as PowerPoint is opened, is enabled by default for eligible users, respects existing Microsoft 365 and Copilot policies, and needs no admin configuration change. It names users on PowerPoint for Mac who are assigned a Microsoft Copilot licence. The notice's introduction refers to "Copilot in PowerPoint for Windows" while its title and its list of who is affected name PowerPoint for Mac; the roadmap record for this item lists Mac only. Microsoft Learn does not describe this Mac entry point on a page of its own, so what follows about its behaviour comes from the roadmap item and the notice.

The roadmap item is **Rolling out**, General Availability, targeted for May CY2026, for Worldwide (Standard Multi-Tenant). MC1311973 (published 15 May 2026) says rollout begins in late May 2026 and sets no act-by date. Microsoft lists the same feature under item 560694 (Desktop, Rolling out) and item 560537 (Web, Launched).

## Why it matters

The option starts Copilot's presentation creation, which Microsoft's Copilot overview already lists among PowerPoint features. What changes is visibility: Copilot becomes something a Mac user can pick straight from PowerPoint Home, so expect more first-time use of Copilot drafting, and questions to the service desk about why some colleagues see the option and others do not.

If nobody acts, the option appears for eligible users as it rolls out. For organisations that keep Copilot out of the Office apps on Mac, the documented setting is the connected-experiences privacy control, which makes Copilot features unavailable across Excel, OneNote, Outlook, PowerPoint and Word, not this entry point alone.

## Risk assessment

**Data exposure**
- No change described: the notice presents a new starting point for Copilot's presentation creation and says existing Microsoft 365 and Copilot policies are respected.

**Security & identity**
- No change described: the notice names no new permission or sign-in requirement.

**Autonomy & actions**
- The option creates a presentation for the user who asks for it; Microsoft describes nothing that acts without the user.

**Change & support**
- Who sees the option depends on licence: the notice names Copilot-licensed users, while the Microsoft Copilot overview lists presentation creation for Microsoft 365 Copilot (Basic) users too. Expect questions until the tenant confirms which of its users see it.
- Where Macs have the connected-experiences preference set to `FALSE`, Microsoft documents that Copilot features are not available in PowerPoint.

## Cost and licensing

**Licence.** MC1311973 says users who are assigned a Microsoft Copilot licence are affected. The [Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes three tiers: Copilot Chat (Basic) users do not have access to Copilot in Word, Excel, PowerPoint and OneNote; Microsoft 365 Copilot (Basic) users, without the add-on, can use Copilot in those apps, including "Create presentations from prompts or existing content" in PowerPoint; Microsoft 365 Copilot (Premium) users hold the add-on licence. The web release of the same feature (item 560537) is described in the [release notes](https://learn.microsoft.com/microsoft-365/copilot/release-notes) as available to Microsoft 365 Copilot Basic and Premium users. Microsoft has not said whether the Mac entry point follows the notice or the overview for Basic users.

**Meter.** No meter or credit charge is documented for this entry point. The overview says some features are subject to fair use limits.

**Indirect costs.** A note to PowerPoint for Mac users.

## Scope

- **Users:** PowerPoint for Mac users. MC1311973 names those assigned a Microsoft Copilot licence; see Cost and licensing for the Basic tier.
- **Platform:** Mac (this item). Desktop and web are covered by items 560694 and 560537.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the record lists them.
- **Rollout:** General Availability; MC1311973 says rollout begins in late May 2026.
- **Roles:** Office Apps Administrator is the recommended role for Cloud Policy; the [Cloud Policy overview](https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy) also lists Security Administrator and Global Administrator as supported roles. Copilot settings in the Microsoft 365 admin center use a role such as **AI Administrator**.

## Governance guidance

### Before rollout
- Confirm which PowerPoint for Mac users hold a Microsoft 365 Copilot licence under Users > Active users in the Microsoft 365 admin center, so the service desk knows who should see the option.
- Check whether a Mac configuration profile or Cloud Policy disables **Allow the use of connected experiences in Office that analyze content**; on those Macs, Copilot features are not available in PowerPoint.
- Prepare a short note for Mac users on where the option sits (PowerPoint Home, File menu).

### At rollout
- Ask a Copilot-licensed Mac pilot user and a Mac user without the add-on to open PowerPoint and record whether each sees the option, to settle the Basic-tier question for your tenant.
- Send the user note once the option appears for the pilot.

### After rollout
- Watch MC1311973 and the Microsoft 365 Copilot release notes for a Mac entry and any change to which licence tiers get the option.
- Log service desk questions about the option to see whether licence-driven differences cause confusion.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot option on PowerPoint Home can be hidden on its own</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for this entry point at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot features, including this option, are available in PowerPoint and other Office apps on Mac</strong><br><small>Group</small><br><small class="controls__note">Office Apps Administrator is the recommended role; Security Administrator and Global Administrator are also supported. Also covers other experiences that analyse content, such as PowerPoint Designer.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connected experiences that analyse content on managed Macs</strong><br><small class="controls__note">Intune-enrolled, MDM-managed Macs; Policy and Profile Manager role. Domain com.microsoft.office, OfficeExperiencesAnalyzingContentPreference Boolean FALSE. Graph: beta API, needs an active Intune licence.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Create › New policy › macOS › Templates › Preference file › Create › Basics › Configuration settings › Property list file <a href="https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/deviceManagement/deviceConfigurations/{deviceConfigurationId}</code> <a href="https://learn.microsoft.com/graph/api/intune-deviceconfig-macoscustomappconfiguration-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft 365 Copilot licence</strong><br><small>User</small><br><small class="controls__note">Decides the Premium tier. Not documented as removing this option from Microsoft 365 Copilot (Basic) users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting for the PowerPoint Home entry point itself at the time of writing (November 2026). The connected-experiences control is broad: it covers experiences that analyse content, such as PowerPoint Designer, and makes Copilot features unavailable in Excel, OneNote, Outlook, PowerPoint and Word. When the Mac preference is enforced through a configuration profile or MDM, users cannot change it. The Graph call updates an existing Intune macOSCustomAppConfiguration; its request body sets bundleId to com.microsoft.office and configurationXml to the UTF-8 encoded preference XML containing OfficeExperiencesAnalyzingContentPreference with Boolean FALSE. The licence row decides who has the Microsoft 365 Copilot add-on; it is not documented as removing this option from Microsoft 365 Copilot (Basic) users.

## Open questions

- Do Microsoft 365 Copilot (Basic) users on PowerPoint for Mac see the Home option, as the overview's PowerPoint feature list suggests, or only Copilot-licensed users, as MC1311973 says? Watch the Microsoft 365 Copilot release notes.
- Will Microsoft add a setting to hide the Copilot option on PowerPoint Home without turning off connected experiences across the Office apps? Watch Message center.
- Does MC1311973's reference to PowerPoint for Windows mean the desktop item 560694 follows the same rollout window as Mac?

<!-- rationale
risk: Low. This is a new place to start Copilot's existing presentation creation, and Microsoft's notice MC1311973 says existing Microsoft 365 and Copilot policies are respected.
cost: Low. No new licence or meter is documented for this entry point; the only cost the sources show is the time to tell PowerPoint for Mac users about it.
impact: Medium. It appears by default on PowerPoint Home for eligible PowerPoint for Mac users, a defined group rather than the whole organisation.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].api; Governance controls table / command: PATCH /beta/deviceManagement/deviceConfigurations/{deviceConfigurationId} updates the existing Intune macOSCustomAppConfiguration used for the preference. | Found: Update the properties of a macOSCustomAppConfiguration object. [...] PATCH https://graph.microsoft.com/beta/deviceManagement/deviceConfigurations/{deviceConfigurationId} [...] bundleId [...] configurationXml | Fix: Append to controls[2].note: 'The Graph request body sets bundleId to com.microsoft.office and configurationXml to the UTF-8 encoded preference XML containing OfficeExperiencesAnalyzingContentPreference with Boolean FALSE.' These properties are documented at https://learn.microsoft.com/graph/api/intune-deviceconfig-macoscustomappconfiguration-update?view=graph-rest-beta and already explained in the prose. | Source: https://learn.microsoft.com/graph/api/intune-deviceconfig-macoscustomappconfiguration-update?view=graph-rest-beta
-->
