---
title: "PowerPoint on Mac: reference an attached deck's style when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-pres-555878"
roadmapId: 555878
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Mac users can attach an existing PowerPoint deck so Copilot applies its theme and styles to a new presentation. Users choose it per request; no admin action is documented, and Microsoft publishes no separate charge."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Copilot overview describes Copilot in PowerPoint in a Basic tier without the add-on licence and a Premium tier with it. Which tier covers this feature is not yet published; no charge specific to it is published."
audiences: ["m365-admin","change-adoption"]
tags: ["m365-copilot","powerpoint","macos","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap 555878"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555878"
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
videos: []
related: ["m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555897"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence tier that gives access to Copilot in PowerPoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing licence control, not a switch for this feature. Needs at least the License Administrator or User Administrator role."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-05T22:47:32"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item: Mac platform, Launched, with release-notes confirmation and the licence control."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 38 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 37
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "2c9843e6f6ae6f05c8a43ddabc72dd2c"
---

## What's changing

Mac users can attach an existing PowerPoint deck when they ask Copilot in PowerPoint to create a presentation, and Copilot applies the attached deck's theme and styles to the new deck. The roadmap item describes this as referencing a file "when creating a presentation with Copilot in PowerPoint using Agent Mode".

Microsoft's release notes describe the behaviour: "Copilot in PowerPoint now supports attaching an existing presentation when creating and editing a new one. Previously, new presentations used default themes. Now, Copilot applies the attached file’s theme and styles to the new deck, ensuring design consistency." The steps given are to create a new presentation with Copilot, use the 'Attach file' feature to select an existing deck, and ask Copilot to generate slides in the attached deck's style.

The roadmap record for this item (555878) lists the platform as Mac, the cloud as Worldwide (Standard Multi-Tenant) and the release phase as General Availability. Its status is Launched with a target of June CY2026. The description text still carries a June 5, 2026 note that the feature was in development and would begin rolling out in mid-June 2026, so the description and the status differ. The release-notes entry, which covers updates released between October 28, 2026 and November 3, 2026, lists the platforms as Windows and Mac and names roadmap items 555878 and 555880. Microsoft lists the feature under further roadmap items for other platforms, including 555879 (Web) and 555880 (Desktop); this page covers 555878 only.

The feature is described in Microsoft Learn's release notes. Microsoft Learn has no separate page for it at the time of writing (November 2026), so what follows about behaviour is the release-notes entry's description.

## Why it matters

This is a convenience change for people who already use Copilot in PowerPoint on a Mac. It lets them keep a new deck on the look of an existing one, which the release notes present as a way to reduce manual formatting and keep branding consistent. For a service owner it adds a new kind of input, an attached deck, to a Copilot request, but the entry describes it as applying theme and styles.

If nobody acts, users with the right licence and a current build can start using it. Release notes say Copilot features roll out gradually to a subset of users within a tenant before expanding, so expect uneven availability between Mac users for a while. The practical work is communication and confirming who holds the Copilot licence, not configuration.

## Risk assessment

**Data exposure**

- The user chooses which deck to attach, and Copilot applies its theme and styles. Confirm with users that they attach decks they are entitled to reuse, and ask whether content in the attached deck beyond theme and styles reaches the new deck or the prompt, because the entry describes theme and styles only.

**Security & identity**

- The entry describes no new sign-in, permission or connector. Access still follows the user's Copilot licence, which an administrator manages per user (see the controls table).

**Autonomy & actions**

- The output is a new presentation generated from the user's request. Users should review the generated slides before sharing, as with other Copilot-generated content.

**Change & support**

- Expect questions from Mac users about where "Attach file" appears, and about why a colleague on Windows or the web sees the feature at a different time: the roadmap tracks Mac, Desktop and Web as separate items, and rollout is gradual within a tenant.

## Cost and licensing

The release-notes entry names no licence for this feature. Microsoft's Copilot overview (https://learn.microsoft.com/copilot/plan/copilot-overview) describes two tiers that apply to Copilot in PowerPoint. Users without the Microsoft 365 Copilot add-on licence can use Copilot in Word, Excel, PowerPoint and OneNote under the Basic licence; users with the add-on licence get the full experience of Copilot in those apps. Some features are subject to fair use limits.

Which of those tiers covers attaching a deck is not yet published, and no meter, credit rate or charge specific to this feature is published at the time of writing. The known indirect cost is administrator and adoption time. Admins who change licence assignments use the Microsoft 365 admin center or Microsoft Graph PowerShell (see the controls table).

## Scope

- **Platform:** Mac, per roadmap item 555878. The release-notes entry lists Windows and Mac; Windows or desktop is covered by roadmap item 555880 and the web by 555879.
- **Cloud:** Worldwide (Standard Multi-Tenant), per the roadmap record.
- **Release phase and status:** General Availability; status Launched; target June CY2026.
- **Users:** People using Copilot in PowerPoint who choose to attach a deck. The licence tier that applies to this feature is not yet published.
- **Rollout:** Microsoft's release notes say Copilot features roll out gradually to a subset of users within a tenant before expanding across the organisation.

## Governance guidance

### Before rollout

- Check which Mac users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center (Users > Active users > Licenses and Apps) so you know who can be expected to see the feature.
- Decide which existing decks you want people to use as the style reference, such as an approved corporate template, and tell users which ones.

### At rollout

- Tell Mac users the steps Microsoft gives: create a new presentation with Copilot, use 'Attach file' to select an existing deck, and ask Copilot to use the attached deck's style.
- Tell users that availability may differ between Mac, Windows and web users while the rollout reaches each platform.

### After rollout

- Ask pilot users whether the generated decks match the attached style and whether the attached deck's content appears where it should not, and raise any case with Microsoft support.
- Re-check the Microsoft 365 Copilot release notes for a Learn page or admin guidance specific to this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence tier that gives access to Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Existing licence control, not a switch for this feature. Needs at least the License Administrator or User Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Licence assignment is the only control this briefing documents for the feature. It decides who holds the Microsoft 365 Copilot add-on licence, which is the difference between the two Copilot tiers Microsoft describes for PowerPoint. It does not switch this feature on or off separately, and Microsoft Learn documents no feature-specific admin setting for it at the time of writing (November 2026). Assigning licences needs at least the License Administrator or User Administrator role.

## Open questions

- Which Copilot licence tier (Basic or the Microsoft 365 Copilot add-on) includes attaching a deck as a style reference? Watch the Microsoft 365 Copilot release notes and the Copilot overview page.
- Does Copilot use anything from the attached deck beyond its theme and styles, such as slide text or images? Watch for a Learn page on Copilot in PowerPoint.
- Is there an admin setting that controls this feature separately from Copilot in PowerPoint? Watch Message center and the Learn admin pages.
- Will the Mac release-notes entry and the roadmap item agree on platforms? The record lists Mac only, while the release-notes entry lists Windows and Mac.

<!-- rationale
risk: Low. The feature applies an attached deck's theme and styles to a new presentation, and the release-notes entry describes no new data source, connector or autonomous action.
cost: Low. The release-notes entry names no licence or meter for this feature; users need whichever Microsoft 365 Copilot licence tier already gives them Copilot in PowerPoint, so the known cost is admin time.
impact: Low. Only Mac users who already use Copilot in PowerPoint and choose to attach a deck will notice it; the roadmap lists the Windows and web versions under separate items.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: licensing.model / licensing: The attached-deck style feature has a mixed licensing model. | Found: Searched: PowerPoint Agent Mode attach presentation theme styles licensing requirements credit meter Basic Premium; PowerPoint Copilot style licensing. Opened Copilot overview and release-notes: they describe product tiers, not a mixed entitlement model for this feature. | Fix: Set licensing.model to "included" for a new option inside the existing licensed product, retaining the notes' distinction between Microsoft 365 Copilot (Basic) and Microsoft 365 Copilot (Premium) and the narrow uncertainty about this feature's tier. The product overview lists presentation creation and editing among existing in-app capabilities: https://learn.microsoft.com/copilot/plan/copilot-overview.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: The licence-check route is Microsoft 365 admin center > Users > Active users > Licenses and Apps. | Found: go to the Users > Active users page. Select the row of the user that you want to assign a license to. In the right pane, select Licenses and Apps. Expand the Licenses section | Fix: In Governance guidance's licence-check bullet, replace the shortened parenthetical path with "Users > Active users > user > Licenses and Apps > Licenses". Selecting the user is a scope-selection step omitted from the otherwise correct path; https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users documents it. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
-->
