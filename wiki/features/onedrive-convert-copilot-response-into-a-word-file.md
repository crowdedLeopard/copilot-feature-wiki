---
title: "OneDrive: convert a Copilot response into a Word file on the web"
slug: "onedrive-convert-copilot-response-into-a-word-file"
roadmapId: 469502
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","OneDrive"]
summary: "Microsoft plans a one-click option in OneDrive on the web to turn a Copilot response, such as a summary or FAQ, into a Word document, for users with a Copilot licence. No switch for this option alone is documented; the target date has passed."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The roadmap item says the feature requires a Microsoft Copilot for Microsoft 365 licence, and Microsoft says Copilot in OneDrive is bundled as a part of Microsoft Copilot. Microsoft Learn says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans. No separate terms for this option are published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["onedrive","m365-copilot","word","document-generation","licensing","dlp"]
sources:
  - title: "OneDrive: Convert Copilot response into a Word file"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=469502"
    kind: "roadmap"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes"
    kind: "learn"
  - title: "Frequently asked questions about Copilot in OneDrive"
    url: "https://support.microsoft.com/office/frequently-asked-questions-about-copilot-in-onedrive-1bd55d10-7c46-417c-ab3d-e9c7be346947"
    kind: "docs"
  - title: "Get started with Copilot in OneDrive"
    url: "https://support.microsoft.com/office/get-started-with-copilot-in-onedrive-7fc81e10-e0cf-4da8-af2e-9876a2770e5d"
    kind: "docs"
  - title: "Which users hold the Microsoft Copilot licence that the roadmap item says this option requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft Copilot licence that the roadmap item says this option requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["onedrive-improved-capabilities-for-files-with-copilot-in-onedrive-web","microsoft-purview-data-loss-prevention-to-prevent-m365-copilot-processing-content-with-sen","m365-copilot-session-and-response-sharing-in-m365-copilot","sensitivity-labels"]
controls:
  - governs: "Tenant-wide switch for converting Copilot responses into Word files in OneDrive on the web"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no OneDrive-specific switch for this option at the time of writing (November 2026)."
  - governs: "Which users hold the Microsoft Copilot licence that the roadmap item says this option requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "At least License Administrator or User Administrator. Governs all licensed Copilot capabilities, not this option alone."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2024-11-20T00:15:49"
changes:
  - date: "2026-11-26"
    note: "New briefing: roadmap plan for converting Copilot responses to Word in OneDrive on the web, with Copilot licensing and the licence-assignment control."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 38 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: licensing model is now included (Copilot in OneDrive is bundled with Microsoft Copilot); added the documented Microsoft Copilot for SharePoint service-plan switch alongside licence assignment; removed an unsupported claim about Copilot output staying in the chat pane."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 37 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 37
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bfb9943a004870eaeb7775973b92f06c"
---

## What's changing

Microsoft plans to let users of Copilot in OneDrive on the web turn a Copilot response into a Word document with one click. The roadmap item gives a summary or an FAQ that Copilot generated as examples, and says the option will work on any Copilot response.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The item says the feature requires a Microsoft Copilot for Microsoft 365 licence and will be available to commercial customers on OneDrive on the web. Microsoft has since renamed Microsoft 365 Copilot to Microsoft Copilot, which is the name Learn now uses for that licence. The roadmap does not say where the new Word file is saved, what it is named, or whether it carries the sensitivity label of the files Copilot drew on.

The roadmap item lists the feature as **In development**, for General Availability, with a target of **April CY2025**, on the Web platform, in the Worldwide (Standard Multi-Tenant) cloud. That target is about 19 months before this briefing was written (November 2026) and the status has not moved, so treat the date as out of date rather than as a plan.

## Why it matters

The planned conversion gives users a one-click way to turn a Copilot response into a Word document. That makes AI-generated summaries easier to circulate, and harder to tell apart from documents a person wrote, once they leave OneDrive. For the service owner the questions are where the file lands, whether it inherits protection from its source files, and whether users understand that they are sharing Copilot output.

The roadmap describes an option each licensed user chooses to use, and Microsoft Learn documents no admin switch for it at the time of writing (November 2026). If nobody acts, users with a Copilot licence would be able to use it when it ships. Licence assignment is one documented lever. Microsoft also documents disabling the Microsoft Copilot for SharePoint service plan, which disables Copilot in both OneDrive and SharePoint ([Frequently asked questions about Copilot in OneDrive](https://support.microsoft.com/office/frequently-asked-questions-about-copilot-in-onedrive-1bd55d10-7c46-417c-ab3d-e9c7be346947)).

## Risk assessment

**Data exposure**
- The response being converted is one the user can already see, and Microsoft's Copilot data protection page says Copilot respects existing SharePoint and OneDrive permissions. The new exposure is the file: where it is saved and who it is then shared with is not documented for this feature.
- Microsoft's page says a Data Loss Prevention (DLP) policy for Copilot can keep Copilot from summarising labelled files and emails. Confirm at rollout how that policy interacts with this option. Whether the Word file carries the label of its source files is not documented; see [Microsoft Purview DLP and Copilot label restrictions](/features/microsoft-purview-data-loss-prevention-to-prevent-m365-copilot-processing-content-with-sen/).

**Security & identity**
- Nothing new described: the roadmap item mentions no new sign-in, permission or identity behaviour.

**Autonomy & actions**
- The roadmap describes a one-click action the user takes on a response; it describes no file being created without that action.

**Change & support**
- Expect questions from users who find the option missing: the roadmap ties it to the Copilot licence, so unlicensed users of OneDrive on the web will not have it.
- Copilot output saved as an ordinary Word file can be mistaken for reviewed content. Tell users the file is a draft to check.

## Cost and licensing

**Licence.** The roadmap item says the feature requires a Microsoft Copilot for Microsoft 365 licence. Microsoft's [Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements) page says users need a Microsoft Copilot license and a qualifying prerequisite license. The [License options for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/copilot-license-options) page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education plans, and lists the eligible prerequisite plans. Microsoft's [Frequently asked questions about Copilot in OneDrive](https://support.microsoft.com/office/frequently-asked-questions-about-copilot-in-onedrive-1bd55d10-7c46-417c-ab3d-e9c7be346947) says Copilot in OneDrive is bundled as a part of Microsoft Copilot and is always on for licensed users.

**Meter.** Microsoft publishes no meter or separate price for this option at the time of writing (November 2026).

**Indirect costs.** Each conversion creates a Word file, so expect some extra content in users' storage; where the file is stored is not yet documented. Plan for a short user communication.

## Scope

- **Users:** those with a Microsoft Copilot licence, according to the roadmap item. Microsoft's requirements page also says some Copilot features require the user to have a OneDrive account.
- **Admin roles:** assigning the Copilot licence needs at least the License Administrator or User Administrator role.
- **Clouds:** Worldwide (Standard Multi-Tenant) is the only cloud the roadmap item lists. The item says commercial customers.
- **Platforms:** Web (OneDrive on the web). No desktop or mobile client is listed.
- **Rollout:** In development, target April CY2025, General Availability. No Message Center post is supplied for this item.

## Governance guidance

### Before rollout
- Check which users hold a Microsoft Copilot licence in the Microsoft 365 admin center (Users > Active users), since the roadmap ties the option to that licence.
- Decide what users should be told about saving Copilot output as Word documents, including that the file is unreviewed AI output.
- Watch Message center and the Microsoft 365 Copilot release notes for this item, because its April CY2025 target has passed without a status change.

### At rollout
- Convert a response in a test account and record where the Word file is saved, what it is named and whether it carries a sensitivity label.
- Send the user communication to Copilot-licensed OneDrive users once the option appears.

### After rollout
- Decide whether withholding this option warrants restricting broader Copilot access; no conversion-only switch is documented.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for converting Copilot responses into Word files in OneDrive on the web</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no OneDrive-specific switch for this option at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft Copilot licence that the roadmap item says this option requires</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator. Governs all licensed Copilot capabilities, not this option alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no switch that turns this option on or off separately from Copilot in OneDrive at the time of writing (November 2026). Licence assignment is one documented lever. Microsoft also documents disabling the Microsoft Copilot for SharePoint service plan, which disables Copilot in both OneDrive and SharePoint ([Frequently asked questions about Copilot in OneDrive](https://support.microsoft.com/office/frequently-asked-questions-about-copilot-in-onedrive-1bd55d10-7c46-417c-ab3d-e9c7be346947)). Microsoft's requirements page says the licence is required for licensed Microsoft Copilot capabilities in general, so withholding it affects far more than this option. Assigning licences needs at least the License Administrator or User Administrator role. The roadmap item does not say whether the converted file is covered by sensitivity labels or retention policies; check that at rollout.

## Open questions

- Where is the Word file saved (the user's OneDrive root, the folder being viewed, or elsewhere), and what is it named? Watch the Copilot in OneDrive documentation.
- Does the Word file inherit the sensitivity label of the files the response drew on?
- Will there be an admin setting to turn the option off without removing the Copilot licence?
- Is the conversion recorded in the Microsoft Purview audit log as a Copilot interaction, a file creation, or both?
- With the April CY2025 target passed, is the feature still planned, or has it shipped under another roadmap item? Watch Message center.

<!-- rationale
risk: Low. The roadmap describes a user turning a Copilot response they already see into a Word file; Microsoft has not documented where that file is saved or how it is labelled, so confirm both before relying on existing OneDrive controls.
cost: Low. The roadmap item requires the Copilot licence that Copilot in OneDrive already needs; Microsoft publishes no separate price or meter for this option, so the known cost is communication and support time.
impact: Low. Only users with a Microsoft Copilot licence who use Copilot in OneDrive on the web see the option, and each chooses whether to use it.
-->
