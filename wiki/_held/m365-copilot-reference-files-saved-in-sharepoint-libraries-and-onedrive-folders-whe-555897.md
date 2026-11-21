---
title: "PowerPoint on Mac: reference SharePoint and OneDrive files when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555897"
roadmapId: 555897
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Agent Mode in PowerPoint on Mac can use SharePoint and OneDrive files named in a prompt as source for a new deck. Launched; the release note names no admin setting, so review oversharing controls."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's Copilot overview says the Microsoft 365 Copilot add-on licence gives the full experience of Copilot in PowerPoint, and that users with Microsoft 365 Copilot (Basic) can also use Copilot in PowerPoint. Entitlement specific to this feature is not yet published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot","sharepoint","onedrive","oversharing","restricted-content-discovery","macos"]
sources:
  - title: "Microsoft 365 Roadmap 555897"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555897"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894"]
controls:
  - governs: "Which SharePoint sites are hidden from Copilot discovery"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "SharePoint sites only; not supported for OneDrive sites. Does not change permissions. Whether it covers a file named in a PowerPoint prompt is not stated."
  - governs: "Which users hold the Microsoft 365 Copilot add-on licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Minimum role: License Administrator or User Administrator. Governs the add-on tier only; users with Microsoft 365 Copilot (Basic) can also use Copilot in PowerPoint without it."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-23T22:59:12"
changes:
  - date: "2026-11-21"
    note: "First briefing for roadmap item 555897, the Mac entry for referencing SharePoint and OneDrive files in Copilot prompts in PowerPoint."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the licence-assignment note: it governs the add-on tier, not all Copilot in PowerPoint access. Removed the permissions-review wording that had no matching controls row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "13caf02fd228f1d1a4cd05dc619abd90"
---

## What's changing

Users creating a presentation with Copilot in PowerPoint can now name a file saved in SharePoint or OneDrive in their prompt, and Copilot can use that file as context. The Learn release note says Copilot in PowerPoint "can now recognize references to files stored in SharePoint and OneDrive when you mention them in your prompt, such as by file or document name", and that these implicit file references were not previously supported for files in those locations. Its example steps tell users to reference the file "by the document name and/or owner of the document".

This briefing covers roadmap item 555897, which lists the Mac platform. Microsoft lists the feature under three roadmap items: 555894 (Web), 555895 (Desktop) and 555897 (Mac). The release note lists Windows, Mac and Web under one entry that carries all three ids. The roadmap item calls the feature Agent Mode in PowerPoint and the release note calls it Copilot in PowerPoint; the shared roadmap id is why this briefing treats them as one feature.

The roadmap record shows status Launched, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and a target date of June CY2026. The Learn release notes place the entry under updates released between September 22, 2026, and October 06, 2026. The release note and the roadmap record do not state a default state or a feature-specific admin setting.

## Why it matters

The change makes it easier to pull existing content into a deck: a document name in a prompt is enough, with no need to find and attach the file. Learn's privacy page says Microsoft Copilot presents only data that each individual can access using the same underlying controls as other Microsoft 365 services, so this adds no permission. In tenants where libraries or OneDrive folders are overshared, however, a user can now draw on that content without searching for it first, which makes oversharing cleanup more relevant to PowerPoint on Mac.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. No admin action is forced, which is why this is a review item: check that the controls you already rely on for Copilot cover this path, and tell Mac users how the feature works.

## Risk assessment

**Data exposure**
- A file named in a prompt is used as context for the deck. Learn's privacy page says Microsoft Copilot presents only data that each individual can access, so exposure follows existing permissions: oversharing on a library or OneDrive folder becomes easier to reach by name.
- Restricted Content Discovery limits discovery of selected SharePoint sites in organisation-wide search results and Microsoft Copilot responses, but its page says it is not supported for OneDrive sites and does not change permissions. Whether it stops a file named in a PowerPoint prompt is not stated.

**Security & identity**
- No change documented: the release note describes no new permission, identity or connection. It does not say which component fetches the named file; confirm this before changing any network or proxy rule for Mac clients.

**Autonomy & actions**
- The release note describes a user naming a file and asking Copilot to create a presentation from it. It describes no background, scheduled or write action on the source file.

**Change & support**
- The feature sits under three roadmap items, so expect questions about whether it behaves the same on Web, Windows and Mac.
- Restricted Content Discovery changes take time to propagate: the page says an update for a site with more than 500,000 items could take more than a week to fully process, so tell site owners that new restrictions are not instant.

## Cost and licensing

**Licence.** The release note and roadmap record name no licence tier or meter for this feature, and Microsoft has not published entitlement specific to it. Learn's Copilot overview says users with the Microsoft 365 Copilot add-on licence have the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and that users with Microsoft 365 Copilot (Basic) can use Copilot in those apps without the add-on. For both, some features are subject to fair use limits. Whether Basic users can reference organisational files by name is not stated.

**Meter.** No meter or credit rate for this feature is published at the time of writing (November 2026).

**Indirect cost.** Admin time to review site permissions and brief users. Restricted Content Discovery, if used, is configurable when the organisation is licensed for Copilot and has SharePoint Advanced Management available, per its page.

## Scope

**Users and licences:** people who create presentations with Copilot in PowerPoint; see Cost and licensing for what Learn says about add-on and Basic entitlement.

**Platform:** this roadmap item lists Mac. Items 555894 (Web) and 555895 (Desktop) are separate roadmap entries for the same feature, and the release note lists Windows, Mac and Web.

**Clouds:** the record lists Worldwide (Standard Multi-Tenant) only.

**Rollout:** status Launched, release phase General Availability, with a target date of June CY2026.

**Content:** files in SharePoint libraries and OneDrive folders, referenced by file or document name in a prompt.

## Governance guidance

### Before rollout
- Apply Restricted Content Discovery to the SharePoint sites that need a permissions review before Copilot can discover them (SharePoint admin center, see the controls table).
- Plan separately for OneDrive: Restricted Content Discovery is not supported for OneDrive sites.
- Check with the SharePoint administrators that the Restricted Content Discovery prerequisites are met, including SharePoint Advanced Management.

### At rollout
- Confirm which users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center; a License Administrator or User Administrator is the minimum role the licence page names.
- Brief Mac deck authors that naming a file in a prompt draws on their own access, and ask them to check generated slides against the source file.

### After rollout
- Test on a Mac with a file in a site you have restricted, and record whether Copilot uses it when named in a prompt.
- Re-read the Microsoft 365 Copilot release notes and the roadmap item for default state, licensing and admin-setting detail.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which SharePoint sites are hidden from Copilot discovery</strong><br><small>Site</small><br><small class="controls__note">SharePoint sites only; not supported for OneDrive sites. Does not change permissions. Whether it covers a file named in a PowerPoint prompt is not stated.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence</strong><br><small>User</small><br><small class="controls__note">Minimum role: License Administrator or User Administrator. Governs the add-on tier only; users with Microsoft 365 Copilot (Basic) can also use Copilot in PowerPoint without it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting specific to this feature is documented at the time of writing (November 2026): both rows below are existing Copilot controls, and neither is described as governing implicit file references. The licence-assignment row governs the add-on tier, not all Copilot in PowerPoint access; Microsoft 365 Copilot (Basic) users can also use Copilot in PowerPoint without the add-on.

Restricted Content Discovery works at site level, changes discoverability and not permissions, and by default can be managed only by SharePoint administrators, per its page.

## Open questions

- Does Restricted Content Discovery stop Copilot in PowerPoint from using a SharePoint file that a user names in a prompt? Watch the Restricted Content Discovery page on Learn.
- Which licence entitles a user to reference SharePoint and OneDrive files by name: the Microsoft 365 Copilot add-on, or also Microsoft 365 Copilot (Basic)? Watch the Copilot overview page and the release notes.
- Is the capability on for every eligible user on arrival, or does it roll out in stages by tenant? Watch Message center and the release notes.
- Which sensitivity-label and data loss prevention behaviours apply to a file referenced by name in PowerPoint on Mac? Watch the Microsoft Purview pages for Copilot.

<!-- rationale
risk: Low. Learn says Copilot presents only data each person can already access, so no new permission is granted, but a file name in a prompt now draws overshared content into a deck.
cost: Low. The release note names no licence or meter for this feature, so the cost the sources show is admin time; entitlement specific to this feature is not yet published.
impact: Low. Only people who create presentations with Copilot in PowerPoint on Mac notice it, as a new way to name source files in a prompt.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Open questions: arrival / absence: Microsoft has not stated what happens on arrival, leaving staged rollout as an open question. | Found: Copilot features are introduced using a safe deployment model, gradually rolling out to a subset of users within a tenant before expanding across the organization. | Fix: Replace 'Microsoft has not stated what happens on arrival' with 'The release notes describe gradual rollout to a subset of users within a tenant before expansion across the organization; this entry does not specify the feature-specific default state.' Replace the arrival question with 'What is the feature-specific default state? Watch Message center and the release notes.' | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].governs; Risk assessment: Data exposure; Governance guidance / applicability: Restricted Content Discovery limits discovery of selected SharePoint sites in organization-wide search and Microsoft Copilot responses. | Found: Restricted Content Discovery helps you limit discovery of content from specific SharePoint sites, including recently interacted files, in organization-wide search results and Microsoft Copilot responses | Fix: Add: 'Microsoft pages differ on recently interacted content: the Restricted Content Discovery page includes recently interacted files in its scope, while https://learn.microsoft.com/copilot/manage/copilot-search-manage#manage-access-to-files-and-sites says sites are excluded unless the user owns or has recently interacted with their content.' Cite that second page. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
-->
