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
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 49
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "a90af7d557ba875cf97a64cd2f68091f"
---

## What's changing

Copilot in PowerPoint on desktop can now use an existing PowerPoint file as a reference when a user creates a presentation. The roadmap item words it as referencing the content of a PowerPoint file when creating a presentation with Agent Mode in PowerPoint. Microsoft's Copilot release notes describe the same change as reusing text content and style and theme from existing decks.

In the release notes, the user opens PowerPoint, starts edit with Copilot, selects Reference file, chooses a PowerPoint presentation and asks Copilot to create a new presentation using content or style from it. The entry says the capability respects existing file permissions and access controls. It also says that before this update Copilot in PowerPoint could not directly use content or styling from another presentation in a creation or editing workflow.

The roadmap record lists this item as Launched, General Availability, with a target of March CY2026, for Worldwide (Standard Multi-Tenant) and the Desktop platform. Microsoft lists the capability under three roadmap items: this one (desktop), 555889 (Mac) and 555892 (Web). Learn's release note for all three sits under July 01, 2026 (updates released between June 17, 2026, and July 01, 2026) and is labelled for Windows, Web and Mac. The roadmap target and the release-note date differ, and both are reported as given. The release notes also say Copilot features roll out gradually to a subset of users within a tenant before expanding across the organisation.

## Why it matters

For a service owner this is a small, user-driven change: a deck a user picks with Reference file becomes source material for a new deck. Microsoft says existing file permissions apply, so in the wiki's view the realistic exposure is oversharing, meaning decks that people can open but should not be able to.

Microsoft has not stated whether the capability is on by default or whether an admin setting governs it, and no source says existing behaviour changes. If nobody acts, licensed users on desktop will gain the option as it rolls out. The useful work is confirming who holds the licence and whether permissions on shared decks are sound before users start reusing them.

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

- Ask pilot users whether referenced content surfaced anything that should not have been reachable, and fix permissions on the source deck.
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
- [contradicted, blocker] Why it matters; front matter: defaultState / consistency: Despite reporting the arrival default as unknown, the briefing promises that licensed desktop users will gain the option if nobody acts. | Found: defaultState: "unknown"; "Microsoft has not stated whether the capability is on by default or whether an admin setting governs it"; "If nobody acts, licensed users on desktop will gain the option as it rolls out." | Fix: Remove 'If nobody acts, licensed users on desktop will gain the option as it rolls out.' Keep the narrower statement that Microsoft has not stated the arrival default specifically for Reference file; the release note supplies user steps, not an automatic-enablement promise.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist directs administrators to fix source-deck permissions, but neither control row documents source-deck permissions. | Found: "fix permissions on the source deck"; the controls table contains only licence assignment and Restricted Content Discovery, which the page itself says changes discoverability rather than permissions. | Fix: Remove ', and fix permissions on the source deck' from the After rollout checklist bullet so it asks pilot users to report unexpected exposure without directing an undocumented control change.
-->
