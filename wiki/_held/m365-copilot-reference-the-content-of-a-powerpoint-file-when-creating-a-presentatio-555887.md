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
  model: "mixed"
  notes: "Learn's Copilot overview says users without the Microsoft 365 Copilot add-on licence can use Copilot in PowerPoint (Basic) and add-on users get the full experience (Premium). Which tier covers this capability is not yet published."
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
updated: "2026-11-24"
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
version: 2
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 52
  unconfirmed: 1
  contradicted: 3
  attempts: 2
  hash: "71d23088ac6e86c678e52d8de003507b"
---

## What's changing

Copilot in PowerPoint on desktop can now use an existing PowerPoint file as a reference when a user creates a presentation. The roadmap item words it as referencing the content of a PowerPoint file when creating a presentation with Agent Mode in PowerPoint. Microsoft's Copilot release notes describe the same change as reusing text content and style and theme from existing decks.

In the release notes, the user opens PowerPoint, starts edit with Copilot, selects Reference file, chooses a PowerPoint presentation and asks Copilot to create a new presentation using content or style from it. The entry says the capability respects existing file permissions and access controls. It also says that before this update Copilot in PowerPoint could not directly use content or styling from another presentation in a creation or editing workflow.

The roadmap record lists this item as Launched, General Availability, with a target of March CY2026, for Worldwide (Standard Multi-Tenant) and the Desktop platform. Microsoft lists the capability under three roadmap items: this one (desktop), 555889 (Mac) and 555892 (Web). Learn's release note for all three sits under July 01, 2026 (updates released between June 17, 2026, and July 01, 2026) and is labelled for Windows, Web and Mac. The roadmap target and the release-note date differ, and both are reported as given. The release notes also say Copilot features roll out gradually to a subset of users within a tenant before expanding across the organisation.

## Why it matters

For a service owner this is a small, user-driven change: a deck a user picks with Reference file becomes source material for a new deck. Microsoft says existing file permissions apply, so in the wiki's view the realistic exposure is oversharing, meaning decks that people can open but should not be able to.

Microsoft has not stated whether the capability is on by default or whether an admin setting governs it, and no source says existing behaviour changes. The useful work is confirming who holds the licence and whether permissions on shared decks are sound before users start reusing them.

## Risk assessment

**Data exposure**

- Copilot reads a PowerPoint file the user selects and reuses its text, style and theme. Microsoft says this respects file permissions, so a deck the user can open can feed a new deck. Oversharing on SharePoint or OneDrive decks is the mechanism to fix; the licence row and the Restricted Content Discovery row cover part of it.

**Security & identity**

- The release note describes access following the user's existing file permissions and adds no new sign-in or consent step. No identity change to plan for.

**Autonomy & actions**

- The described flow is user-initiated: the user selects Reference file and asks Copilot to create a presentation or apply a style. The roadmap title refers to Agent Mode, and the release note uses the name Copilot in PowerPoint.

**Change & support**

- Rollout is gradual within a tenant, so colleagues on the same licence can see the option on different days. The feature appears under two names (Agent Mode on the roadmap, edit with Copilot in the release note) and under three roadmap items by platform, so help-desk answers should not assume one platform.

## Cost and licensing

Learn's Copilot overview (Microsoft Copilot overview) describes three in-app tiers. A user without the Microsoft 365 Copilot add-on licence and without access to Copilot in Word, Excel, PowerPoint and OneNote is on Copilot Chat (Basic). A user without the add-on who can use Copilot in those apps is on Microsoft 365 Copilot (Basic), whose listed PowerPoint features include creating presentations from prompts or existing content. A user with the add-on has the full experience of Copilot in those apps (Premium). The overview adds that some features are subject to fair use limits. Which tier covers Reference file, and whether a fair use limit applies to it, is not yet published.

Learn publishes no separate meter or price for this capability at the time of writing (November 2026). The release note names no licence. Indirect costs are admin time to check licence assignment and permissions, and help-desk briefing.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Desktop platform for this item; Mac and Web are separate roadmap items. Users need Copilot access in PowerPoint under one of the tiers above; Learn says users on Copilot Chat (Basic) don't have access to Copilot in PowerPoint. Rollout is gradual within a tenant, per the release notes. The roadmap record lists no other clouds, and this briefing does not say the capability is unavailable elsewhere. At least the License Administrator or User Administrator role is needed to assign licences.

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

- Is Reference file on by default, and does any admin setting turn it off? The release note gives the user steps only; watch the Learn release notes and the Message center.
- Which licence tier covers Reference file, and do fair use limits apply to it? Watch the Microsoft Copilot overview page.
- Does Restricted Content Discovery stop a file in a restricted SharePoint site from being used as a Reference file? Watch the Restricted Content Discovery page.
- Why does the roadmap target (March CY2026) differ from the release-note date (July 01, 2026)? Watch the roadmap item.

<!-- rationale
risk: Low. Microsoft says the capability respects existing file permissions and access controls, and the user picks the file, so the exposure is decks users can already open.
cost: Low. Learn names no separate meter or price for this capability; the cost is the Copilot licence users already need, plus admin time to check permissions and brief the help desk.
impact: Medium. It reaches PowerPoint users on desktop who have Copilot access, but each user chooses whether to reference a file.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / behaviour: No source says existing behaviour changes. | Found: Previously, Copilot in power point could not directly use content or styling from another PowerPoint presentation as part of a presentation creation or editing workflow. With this update, users can: | Fix: Remove ', and no source says existing behaviour changes'. The release note explicitly describes a change from the previous creation and editing behaviour; keep the narrower statement about an unpublished feature-specific enablement state. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] front matter: licensing.model / licensing: Reference file has a mixed licensing model based on Basic and Premium in-app access. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote^2^ ^2^Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Set licensing.model to 'included'. Replace the licensing notes with 'Reference file uses edit with Copilot in PowerPoint. The Microsoft Copilot service description marks edit with Copilot as a Microsoft 365 Copilot (Premium) feature requiring a Microsoft 365 Copilot licence.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Scope; Open questions / absence: Microsoft has not published which licence tier covers Reference file, leaving Basic or Premium as possibilities. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote^2^ ^2^Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Replace the tier-unknown statements with 'Reference file is used through edit with Copilot in PowerPoint, which the Microsoft Copilot service description identifies as a Premium capability requiring a Microsoft 365 Copilot licence.' In Scope replace 'under one of the tiers above' with 'with a Microsoft 365 Copilot licence for the Premium editing experience'. Remove the licence-tier part of the open question, retaining the question about feature-specific fair use limits. Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [unsupported, blocker] Risk assessment: Data exposure / applicability: The licence and Restricted Content Discovery rows cover part of the oversharing exposure from explicitly referenced SharePoint or OneDrive decks. | Found: Searched: Restricted Content Discovery Reference file PowerPoint selected presentation. Read restricted-content-discovery, assign-licenses-to-users and release-notes; no support for the rows governing explicitly referenced deck oversharing. | Fix: Replace '; the licence row and the Restricted Content Discovery row cover part of it' with '. The rows govern licence assignment and SharePoint discoverability; neither changes file permissions.' This keeps the distinction already documented at https://learn.microsoft.com/sharepoint/restricted-content-discovery and https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users.
-->
