---
title: "PowerPoint on desktop: reference a PowerPoint file when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-the-content-of-a-powerpoint-file-when-creating-a-presentatio-555887"
roadmapId: 555887
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in PowerPoint on desktop can use an existing PowerPoint file as a reference when a user creates a presentation. Launched; users choose the file, and Microsoft says file permissions still apply. No admin step is described."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Reference file uses edit with Copilot in PowerPoint. The Microsoft Copilot service description marks edit with Copilot as a Microsoft 365 Copilot (Premium) feature requiring a Microsoft 365 Copilot licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot","oversharing","restricted-content-discovery","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 555887"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555887"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-the-content-of-a-powerpoint-file-when-creating-a-presentation-with","m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-presentatio","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","restricted-content-discovery"]
controls:
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
    note: "At least License Administrator or User Administrator. Existing route for licences; not a switch for this capability."
  - governs: "Which SharePoint sites Microsoft Copilot can discover content from"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "By default only SharePoint administrators can manage it. Existing control; Learn doesn't say it covers Reference file."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-24"
    note: "New briefing for the desktop item: reference a PowerPoint file in Copilot in PowerPoint, with licence and Restricted Content Discovery controls."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: removed the claim that licensed users gain the option if nobody acts, and the instruction to fix source-deck permissions."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected licensing: the Microsoft Copilot service description marks edit with Copilot as a Premium feature needing a Microsoft 365 Copilot licence; removed the unsupported 'no change' claim and narrowed what the control rows cover."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Correction: Why it matters now says Microsoft has stated no default or switch specific to Reference file, and that connected-experience privacy controls can disable Copilot in PowerPoint; the open question no longer asks about an admin setting."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "70ca02692a4d1a66f13a8228329cf951"
---

## What's changing

Copilot in PowerPoint on desktop can now use an existing PowerPoint file as a reference when a user creates a presentation. The roadmap item words it as referencing the content of a PowerPoint file when creating a presentation with Agent Mode in PowerPoint. Microsoft's Copilot release notes describe the same change as reusing text content and style and theme from existing decks.

In the release notes, the user opens PowerPoint, starts edit with Copilot, selects Reference file, chooses a PowerPoint presentation and asks Copilot to create a new presentation using content or style from it. The entry says the capability respects existing file permissions and access controls. It also says that before this update Copilot in PowerPoint could not directly use content or styling from another presentation in a creation or editing workflow.

The roadmap record lists this item as Launched, General Availability, with a target of March CY2026, for Worldwide (Standard Multi-Tenant) and the Desktop platform. Microsoft lists the capability under three roadmap items: this one (desktop), 555889 (Mac) and 555892 (Web). Learn's release note for all three sits under July 01, 2026 (updates released between June 17, 2026, and July 01, 2026) and is labelled for Windows, Web and Mac. The roadmap target and the release-note date differ, and both are reported as given. The release notes also say Copilot features roll out gradually to a subset of users within a tenant before expanding across the organisation.

## Why it matters

For a service owner this is a small, user-driven change: a deck a user picks with Reference file becomes source material for a new deck. Microsoft says existing file permissions apply, so in the wiki's view the realistic exposure is oversharing, meaning decks that people can open but should not be able to.

Microsoft has not stated a default specifically for Reference file or documented a switch specific to it. Broader connected-experience privacy controls can disable Copilot in PowerPoint on current Windows and Mac apps. The useful work is confirming who holds the licence and whether permissions on shared decks are sound before users start reusing them.

## Risk assessment

**Data exposure**

- Copilot reads a PowerPoint file the user selects and reuses its text, style and theme. Microsoft says this respects file permissions, so a deck the user can open can feed a new deck. Oversharing on SharePoint or OneDrive decks is the mechanism to fix. The rows govern licence assignment and SharePoint discoverability; neither changes file permissions.

**Security & identity**

- The release note describes access following the user's existing file permissions and adds no new sign-in or consent step. No identity change to plan for.

**Autonomy & actions**

- The described flow is user-initiated: the user selects Reference file and asks Copilot to create a presentation or apply a style. The roadmap title refers to Agent Mode, and the release note uses the name Copilot in PowerPoint.

**Change & support**

- Rollout is gradual within a tenant, so colleagues on the same licence can see the option on different days. The feature appears under two names (Agent Mode on the roadmap, edit with Copilot in the release note) and under three roadmap items by platform, so help-desk answers should not assume one platform.

## Cost and licensing

Learn's Copilot overview (Microsoft Copilot overview) describes three in-app tiers. A user without the Microsoft 365 Copilot add-on licence and without access to Copilot in Word, Excel, PowerPoint and OneNote is on Copilot Chat (Basic). A user without the add-on who can use Copilot in those apps is on Microsoft 365 Copilot (Basic), whose listed PowerPoint features include creating presentations from prompts or existing content. A user with the add-on has the full experience of Copilot in those apps (Premium). The overview adds that some features are subject to fair use limits.

Reference file is used through edit with Copilot in PowerPoint, which the Microsoft Copilot service description identifies as a Premium capability requiring a Microsoft 365 Copilot licence. Whether a fair use limit applies to Reference file is not yet published.

Learn publishes no separate meter or price for this capability at the time of writing (November 2026). The release note names no licence. Indirect costs are admin time to check licence assignment and permissions, and help-desk briefing.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Desktop platform for this item; Mac and Web are separate roadmap items. Users need Copilot access in PowerPoint with a Microsoft 365 Copilot licence for the Premium editing experience; Learn says users on Copilot Chat (Basic) don't have access to Copilot in PowerPoint. Rollout is gradual within a tenant, per the release notes. The roadmap record lists no other clouds, and this briefing does not say the capability is unavailable elsewhere. At least the License Administrator or User Administrator role is needed to assign licences.

## Governance guidance

### Before rollout

- Check which users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (licence assignment row), because Learn ties access to Copilot in PowerPoint to the tier.
- List the SharePoint sites that hold decks with sensitive content and decide whether to apply Restricted Content Discovery to them while permissions are reviewed (Restricted Content Discovery row).
- Brief the help desk that the option appears as Reference file under edit with Copilot, and that the roadmap calls it Agent Mode.

### At rollout

- Expect the option to appear for different users on different days within the tenant.
- Run a pilot in which users reference a deck they own and a deck they can only read, and confirm the results match their file permissions.

### After rollout

- Ask pilot users whether referenced content surfaced anything that should not have been reachable.
- Re-read the roadmap item and Learn release notes for changes to platforms, clouds or licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Microsoft 365 Copilot licence</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator. Existing route for licences; not a switch for this capability.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from</strong><br><small>Site</small><br><small class="controls__note">By default only SharePoint administrators can manage it. Existing control; Learn doesn't say it covers Reference file.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Neither row is specific to this capability. The Copilot settings page in the Microsoft 365 admin center lists settings under User access, Data access, Copilot actions and Other settings, and none is named for Copilot in PowerPoint or Reference file.

The licence row decides who has the tier Learn ties to Copilot in PowerPoint; the required admin role is in the note. Restricted Content Discovery changes discoverability, not permissions, and Learn says it is for SharePoint sites and not supported for OneDrive sites. Learn says it doesn't affect experiences that operate on content already in use by the user, and does not say whether it applies to a file chosen with Reference file.

## Open questions

- Is Reference file on by default? The release note gives the user steps only; watch the Learn release notes and the Message center.
- Do fair use limits apply to Reference file? Watch the Microsoft Copilot overview page.
- Does Restricted Content Discovery stop a file in a restricted SharePoint site from being used as a Reference file? Watch the Restricted Content Discovery page.
- Why does the roadmap target (March CY2026) differ from the release-note date (July 01, 2026)? Watch the roadmap item.

<!-- rationale
risk: Low. Microsoft says the capability respects existing file permissions and access controls, and the user picks the file, so the exposure is decks users can already open.
cost: Low. Learn names no separate meter or price for this capability; the cost is the Copilot licence users already need, plus admin time to check permissions and brief the help desk.
impact: Medium. It reaches PowerPoint users on desktop who have Copilot access, but each user chooses whether to reference a file.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Restricted Content Discovery is configured in SharePoint admin center > Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot. | Found: In the SharePoint admin center, expand Sites and select Active sites. Select the site you want to configure. Open the Settings tab, and then turn Restrict content from Microsoft Copilot on. | Fix: Keep the cited path. Add to the control note: 'Microsoft's readiness guide alternatively labels the setting Restrict content discovery > On.' Cite https://learn.microsoft.com/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management#step-3-prevent-accidental-oversharing, which says 'Under Restrict content discovery, select On.' | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
-->
