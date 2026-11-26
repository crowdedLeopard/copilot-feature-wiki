---
title: "OneDrive: Prompt Gallery for Copilot in OneDrive on the web"
slug: "onedrive-prompt-gallery-for-copilot"
roadmapId: 571308
topic: "m365-copilot"
products: ["OneDrive","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in OneDrive on the web gains a Prompt Gallery of ready-made prompts for file tasks. The roadmap lists it as launched. No admin switch for the gallery is documented; check who holds Copilot licences and brief users."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans, and Microsoft Learn names integration with SharePoint and OneDrive as a core feature of it. No licence terms specific to the Prompt Gallery in OneDrive are published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["onedrive","m365-copilot","prompt-gallery","adoption","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 571308"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571308"
    kind: "roadmap"
  - title: "Understand Prompt Gallery in Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-prompt-gallery"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Required configuration for Copilot guidance for Sensitive and Regulated customers"
    url: "https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig"
    kind: "learn"
  - title: "Organizational prompts overview"
    url: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Which users hold the Microsoft Copilot licence that carries Copilot in OneDrive (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft Copilot licence that carries Copilot in OneDrive (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["onedrive-improved-capabilities-for-files-with-copilot-in-onedrive-web","m365-copilot-discover-graph-connector-prompts-in-the-prompt-gallery-when-using-copilot-cha","microsoft-copilot-microsoft-m365-delegated-prompt-publishing-for-organization-prompts"]
controls:
  - governs: "Which users hold the Microsoft Copilot licence that carries Copilot in OneDrive"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Needs at least License Administrator or User Administrator. Governs all of Copilot in OneDrive, not the gallery alone."
  - governs: "Tenant-wide switch for the Prompt Gallery in OneDrive"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-26"
    note: "New briefing: Prompt Gallery in Copilot in OneDrive on the web, launched October CY2026, with licence control and documented gaps."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 49 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 45
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "59f6e3df6d0b30d84f90cc4d5ab32dc0"
---

## What's changing

Copilot in OneDrive on the web gets a Prompt Gallery: a set of ready-to-use prompts for common file tasks that users can open, adapt and run. Microsoft Learn does not describe this OneDrive gallery yet, so what follows about its behaviour is the roadmap's description.

The roadmap item says users reach the gallery from the Copilot button in the bottom-right corner of OneDrive, or from the **+** button in the Copilot chat pane, and then select **Open Prompt Gallery**. Prompts are grouped into categories such as Create, Analyze, Find and Collaborate, and users can customise a prompt to fit their needs before running it.

Microsoft Learn does document a Prompt Gallery for Microsoft Copilot and Copilot Chat, with Microsoft-curated prompts under **Suggested**, prompts users save under **Your Prompts** and prompts shared with a team under **Teams** ([Understand Prompt Gallery in Copilot](https://learn.microsoft.com/copilot/manage/copilot-prompt-gallery)). Whether the OneDrive gallery is the same catalogue, with the same saving and sharing, is not stated.

The roadmap item's status is Launched, with release phase General Availability, a target date of October CY2026 and a preview date of October CY2026. It lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform only.

## Why it matters

This is an adoption aid rather than a new capability: it makes the file skills Copilot in OneDrive already has easier to find. Expect more people with Copilot licences to try Copilot on their OneDrive files once ready-made prompts sit one click from the Copilot button, which is useful for adoption programmes and may bring questions to the help desk about what each prompt does.

Microsoft has not stated whether the gallery appears for everyone with Copilot in OneDrive or needs anything to be switched on. No source says existing behaviour of Copilot in OneDrive changes, and Microsoft Learn documents no setting that hides the gallery on its own at the time of writing (November 2026), so the practical lever is who holds a Microsoft Copilot licence.

## Risk assessment

**Data exposure**
- The roadmap describes prompts that users run in Copilot in OneDrive; it does not describe the gallery reaching any data that Copilot in OneDrive does not already use. Who can use Copilot in OneDrive at all is decided by the Microsoft Copilot licence (first row of the controls table).
- For the Copilot Prompt Gallery, Microsoft Learn says user-created prompts are stored in user and group collections in the Microsoft 365 Substrate data store, within the tenant boundary. Whether prompts customised in OneDrive are saved there is not stated.

**Security & identity**
- No change described: the record introduces no new sign-in, identity or permission.

**Autonomy & actions**
- No change described: the user picks and runs each prompt; the record describes nothing that runs without the user.

**Change & support**
- A new entry point in the OneDrive Copilot pane and a new **+** menu option will prompt questions from users, and from users without a Copilot licence who hear about it. Microsoft Learn documents no tenant switch for the gallery alone, so communication is the main tool.

## Cost and licensing

- **Licence:** [License options for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/copilot-license-options) says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education plans. [Required configuration for Copilot guidance for Sensitive and Regulated customers](https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig) describes integration with SharePoint in Microsoft 365 and OneDrive as a core feature in Microsoft Copilot, and says Copilot is only available to users with a licence assigned.
- **Meter:** none is documented for this feature at the time of writing.
- **Caps:** not applicable; no metered use is described.
- **Indirect costs:** user communication and help-desk time.
- **Not yet published:** licence terms specific to the Prompt Gallery in OneDrive, including whether users with Copilot Chat but no Microsoft Copilot licence see it.

## Scope

- **Users:** people who use Copilot in OneDrive on the web. Integration with OneDrive is documented as part of the Microsoft Copilot licence; the gallery's own eligibility is not yet published.
- **Roles:** assigning the licence needs at least the License Administrator or User Administrator role ([Assign or unassign licenses](https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users)).
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Web, per the roadmap item. OneDrive desktop and mobile apps are not listed.
- **Rollout:** status Launched, General Availability, target October CY2026.

## Governance guidance

### Before rollout
- Confirm which users hold a Microsoft Copilot licence in the Microsoft 365 admin center (Users > Active users), since that licence carries the OneDrive integration.
- Decide whether your Copilot adoption material should point users to the OneDrive Prompt Gallery and its Create, Analyze, Find and Collaborate categories.

### At rollout
- Tell OneDrive users where the gallery is: the Copilot button in the bottom-right corner, or the + button in the Copilot chat pane, then Open Prompt Gallery.
- Brief the help desk that the gallery is part of Copilot in OneDrive on the web, and that Microsoft documents no separate admin setting for it.

### After rollout
- Watch Message center and the Microsoft 365 Copilot release notes for an admin setting, licence terms or saving behaviour specific to the OneDrive gallery.
- Review the licence assignment above when users without a Copilot licence ask for access to the gallery.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft Copilot licence that carries Copilot in OneDrive</strong><br><small>User</small><br><small class="controls__note">Needs at least License Administrator or User Administrator. Governs all of Copilot in OneDrive, not the gallery alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Prompt Gallery in OneDrive</strong><br><small>Tenant</small><br><small class="controls__note">No setting documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Microsoft Copilot licence is the documented control over who can use Copilot in OneDrive; Microsoft Learn documents no setting that turns off the Prompt Gallery in OneDrive while leaving Copilot in OneDrive on, either in the Microsoft 365 admin center Copilot settings or in the SharePoint Online PowerShell `Set-SPOTenant` reference, at the time of writing (November 2026). Assigning licences needs at least the License Administrator or User Administrator role. Licences can also be assigned by group membership in Microsoft Entra ID.

## Open questions

- Is the OneDrive Prompt Gallery the same catalogue as the Copilot Prompt Gallery, so that prompts users customise and save in OneDrive appear under **Your Prompts** and in the admin export? Watch the [Prompt Gallery](https://learn.microsoft.com/copilot/manage/copilot-prompt-gallery) page.
- Will organisational prompts published in the Microsoft 365 admin center appear in the OneDrive gallery? The [organisational prompts page](https://learn.microsoft.com/copilot/manage/organizational-prompts) lists Copilot Chat, Microsoft Edge and Microsoft Teams only.
- Do users with Copilot Chat but no Microsoft Copilot licence see the gallery in OneDrive?
- Will Microsoft add a setting to hide the gallery without turning off Copilot in OneDrive? Watch Message center.

<!-- rationale
risk: Low. The roadmap describes ready-made prompts that users choose to open and run in Copilot in OneDrive; nothing in the record describes new data access or actions.
cost: Low. The Copilot in OneDrive integration comes with the Microsoft Copilot licence; Microsoft publishes no separate charge or licence for the gallery, so the known cost is user communication.
impact: Low. Only people who open Copilot in OneDrive on the web and choose Open Prompt Gallery see it; administrators are not asked to do anything.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model / consistency: The gallery's licensing model is add-on, rather than included in the licence already required for Copilot in OneDrive. | Found: licensing: model: "add-on"; rationale: cost: "The Copilot in OneDrive integration comes with the Microsoft Copilot licence". SCHEMA defines included as "part of a licence the product already needs; name it". | Fix: Set licensing.model to "included": this is a new option inside Copilot in OneDrive, whose Microsoft Copilot licence requirement the notes already document. Retain the notes explaining Microsoft Copilot's E7/add-on purchase options and the absence of gallery-specific terms.
- [contradicted, blocker] Risk assessment: Data exposure; controls[0].note; Governance controls / applicability: Who can use Copilot in OneDrive is decided by holding the Microsoft Copilot licence. | Found: contains eight separate components, which you can enable or disable for individual users. Integration with SharePoint in Microsoft 365 and OneDrive is a core feature in Microsoft Copilot. Enable this license item unless you disable SharePoint in Microsoft 365 and OneDrive. | Fix: Replace "Who can use Copilot in OneDrive at all is decided by the Microsoft Copilot licence" with "A Microsoft Copilot licence is required for Copilot in OneDrive; its Microsoft Copilot in SharePoint licence item must also be enabled." Qualify the existing row note and licence-control prose with that same requirement, citing https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig. | Source: https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig
- [unsupported, blocker] Cost and licensing: Caps / cost: Caps are not applicable to this feature. | Found: Searched: OneDrive Copilot Prompt Gallery pricing meter limits separate license. Read Copilot license-options and copilot-prompt-gallery pages; neither states that caps are inapplicable. Absence of a published gallery meter does not establish absence of applicable limits. | Fix: Remove the Caps bullet. Retain the narrower, verified Meter statement that no meter is documented for this feature.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Copilot in OneDrive already has document and file skills that the gallery helps users discover. | Found: Microsoft Copilot in OneDrive is an innovative AI-powered assistant designed to help you interact with your documents by extracting information, comparing the key differences, summarizing files and generating insights. | Fix: Cite https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-application-card#key-features-or-capabilities for the existing file skills. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-application-card#key-features-or-capabilities
- [unsupported, minor] rationale: impact / behaviour: Only users who open Copilot in OneDrive and choose Open Prompt Gallery see the gallery. | Found: Searched: OneDrive "Open Prompt Gallery"; "OneDrive" "Prompt Gallery" "enabled". Read roadmap description and Copilot gallery page. The record gives access routes but does not state that opening the Copilot pane first is required for every route or that no other display occurs. | Fix: Replace the first sentence of the impact rationale with "Low. The roadmap describes users choosing Open Prompt Gallery in Copilot in OneDrive on the web."
-->
