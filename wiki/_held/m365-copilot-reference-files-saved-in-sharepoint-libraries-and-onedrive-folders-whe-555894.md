---
title: "PowerPoint on the web: Copilot Agent Mode can reference SharePoint and OneDrive files named in a prompt"
slug: "m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894"
roadmapId: 555894
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Users of Copilot in PowerPoint for the web can name a SharePoint or OneDrive file in a prompt when building a deck. It is launched and follows existing permissions; review oversharing and label controls."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn describes the Microsoft 365 Copilot add-on licence as the full Copilot experience in PowerPoint, and users without it as able to use Copilot in PowerPoint subject to fair use limits. Which of these covers this feature is not yet published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["powerpoint","m365-copilot","sharepoint","onedrive","oversharing","dlp","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap 555894"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555894"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","sensitivity-labels"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot add-on licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense"
    note: "The request body's removeLicenses collection removes a licence. Governs the add-on tier only; users without it can still use Copilot in PowerPoint within fair use limits."
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
  - governs: "Which sensitivity-labelled files Copilot may process"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -AdvancedRule $advrule -RestrictAccess @(@{setting=\"ExcludeContentProcessing\";value=\"Block\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Rule condition is Content contains > Sensitivity labels. The API call is the reference's Copilot example, after New-DlpCompliancePolicy -EnforcementPlanes @(\"CopilotExperiences\") creates the policy."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 555894, the Web entry for referencing SharePoint and OneDrive files in Copilot prompts in PowerPoint."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 53
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "75dfe30c7823bbbf9011fea49eadc68d"
---

## What's changing

Users can now name a SharePoint or OneDrive file in a Copilot prompt when creating a presentation in PowerPoint, and Copilot can use that file as context. The Learn release note says Copilot in PowerPoint "can now recognize references to files stored in SharePoint and OneDrive when you mention them in your prompt, such as by file or document name", and that these implicit file references were not previously supported for files in those locations. Users no longer have to attach or upload the file first.

This briefing covers roadmap item 555894, which lists the Web platform. Microsoft lists the feature under three roadmap ids: 555894 (Web), 555895 (Desktop) and 555897 (Mac), and the release note lists Windows, Mac and Web. The roadmap item calls it Agent Mode in PowerPoint; the release note calls it Copilot in PowerPoint and carries the same roadmap id, so this briefing treats them as one feature.

The roadmap record shows status Launched, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and a target date of June CY2026. The Learn release notes list the item under updates released between September 22, 2026, and October 06, 2026, later than the roadmap's target month. Learn says Copilot features are introduced gradually, to a subset of users in a tenant before the rest.

## Why it matters

Copilot works within the signed-in user's existing access, so this change adds no new permission, but it makes it easier to pull a file into a deck: a document name in a prompt is enough. In tenants where libraries or OneDrive folders are overshared, a user can now draw on that content without searching for it first, which makes oversharing cleanup and label coverage more relevant to PowerPoint.

Microsoft's release note states no default state and describes no admin setting for this feature, so the default is recorded as not stated. No source says existing behaviour changes for users who do not mention a file in a prompt. Nothing here forces an admin action, which is why this is a review item: check that the controls you already rely on for Copilot cover this path.

## Risk assessment

**Data exposure**
- Files named in a prompt are used as context under the user's own access. Learn states that Copilot "respects existing SharePoint and OneDrive permissions. If content is already overshared, Copilot can surface it to anyone who has access." Oversharing is the exposure; Restricted Content Discovery (SharePoint sites only) and a DLP policy for labelled files are the documented levers.
- The generated deck is a new file built from the referenced content. Microsoft has not described which label or location it takes, so confirm this in a test before relying on labels to follow the content.

**Security & identity**
- Learn says Microsoft Copilot presents only data that each individual can access using the same underlying controls as other Microsoft 365 services. The release note does not describe which component fetches the referenced file.
- A DLP policy on the Microsoft Copilot, Copilot Chat, and Copilot Cowork location with a sensitivity-label condition excludes labelled items from processing. Excluded items still appear in citations, but their content is not used.

**Autonomy & actions**
- The release note describes a user naming a file in a prompt and asking Copilot to build a presentation from it. It describes no background, scheduled or write action on the source file.

**Change & support**
- The feature sits under three roadmap ids across Web, Desktop and Mac, so expect questions about why the behaviour differs by app. Check each platform's availability before telling users it works everywhere.
- A change to a DLP policy can take up to four hours to reach Copilot, and Restricted Content Discovery changes need time to propagate, so tell users that new restrictions are not instant.

## Cost and licensing

The release note and roadmap item name no licence tier, meter or charge for this feature. Learn's Copilot overview describes users who hold the Microsoft 365 Copilot add-on licence as having the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and users without it as able to use Copilot in those apps subject to fair use limits. Which tier includes file references from SharePoint and OneDrive is not yet published.

The controls that limit this feature carry their own requirements. Restricted Content Discovery can be configured if the organisation is licensed for Copilot and has SharePoint Advanced Management available. The DLP page for Copilot refers licensing to Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions. Indirect cost is admin time to review site permissions, build DLP policies and brief users.

## Scope

**Users and licences:** people who use Copilot in PowerPoint to create a presentation. The licence that covers this feature is not yet published (see Cost and licensing).

**Platform:** this roadmap item lists Web. Items 555895 (Desktop) and 555897 (Mac) are separate roadmap entries for the same feature, and the release note lists Windows, Mac and Web.

**Clouds:** the record lists Worldwide (Standard Multi-Tenant) only.

**Rollout:** status Launched, General Availability. Learn says Copilot features reach a subset of users within a tenant before expanding across the organisation.

**Content:** files in SharePoint libraries and OneDrive folders that the user can already access.

## Governance guidance

### Before rollout
- Review which SharePoint sites hold overshared content and apply Restricted Content Discovery to those that need review before Copilot can discover them (SharePoint admin center, see the controls table).
- Plan separately for OneDrive: Restricted Content Discovery is not supported for OneDrive sites, so rely on permissions and DLP there.
- Create or check a DLP policy on the Microsoft Copilot, Copilot Chat, and Copilot Cowork location that excludes files with your highest-sensitivity labels, and run it in simulation mode first.

### At rollout
- Confirm which users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center, since the licence tier covering this feature is not yet published.
- Brief deck authors that naming a file in a prompt uses their own access, and ask them to check generated slides against the source file.
- Allow up to four hours for DLP policy changes to reach Copilot before testing.

### After rollout
- Test with a labelled file covered by your DLP policy and confirm it appears in citations without its content being used.
- Check the label and location of a deck built from a labelled source, and record the result for the helpdesk.
- Re-read the Microsoft 365 Copilot release notes and the roadmap item for default-state or licensing detail.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence</strong><br><small>User</small><br><small class="controls__note">The request body's removeLicenses collection removes a licence. Governs the add-on tier only; users without it can still use Copilot in PowerPoint within fair use limits.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites are hidden from Copilot discovery</strong><br><small>Site</small><br><small class="controls__note">SharePoint sites only; not supported for OneDrive sites. Does not change permissions. Whether it covers a file named in a PowerPoint prompt is not stated.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sensitivity-labelled files Copilot may process</strong><br><small>Tenant</small><br><small class="controls__note">Rule condition is Content contains &gt; Sensitivity labels. The API call is the reference's Copilot example, after New-DlpCompliancePolicy -EnforcementPlanes @(&quot;CopilotExperiences&quot;) creates the policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -AdvancedRule $advrule -RestrictAccess @(@{setting=&quot;ExcludeContentProcessing&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These rows are general Copilot controls. The release note describes no setting specific to file references in PowerPoint, so none of them is confirmed as a switch for this feature alone.

- **Licence:** removing the Microsoft 365 Copilot add-on licence governs the add-on tier only. Learn says users without it can still use Copilot in PowerPoint within fair use limits, so this row does not switch the feature off.
- **Restricted Content Discovery:** applies to SharePoint sites, not OneDrive sites. It does not change permissions, and Learn says it does not affect experiences that operate on content already in use by the user. Whether a file named in a PowerPoint prompt counts as that is not stated. By default only SharePoint administrators manage it.
- **DLP for Copilot:** the page says the label-exclusion feature is available in Copilot in Word, Excel and PowerPoint. It supports stored files and items actively open, and is evaluated at file open in those apps, so a label applied mid-session takes effect the next time the file is opened.

## Open questions

- Which licence tier includes this feature: the Microsoft 365 Copilot add-on, the Basic experience, or both? Watch the Microsoft 365 Copilot release notes and licensing pages.
- Is there an admin or per-user setting that turns file references off, and what is the default on arrival? Watch Message center and the Learn release notes.
- Do Restricted Content Discovery and the DLP label exclusion apply to a file named in a PowerPoint prompt in the same way as they do to discovery in Copilot Chat?
- Which sensitivity label, if any, does a deck take when it is built from a labelled SharePoint or OneDrive file?
- Does availability differ between Web, Desktop and Mac, given the three roadmap ids and a release-note date later than the June CY2026 target?

<!-- rationale
risk: Low. Learn says Copilot respects existing SharePoint and OneDrive permissions, so the feature works within current access; files that are already overshared can still be surfaced to anyone who has access.
cost: Low. The only cost the sources show is admin time to review permissions and DLP; the release note names no licence tier, meter or charge for this feature, so its licensing is not yet published.
impact: Medium. Anyone using Copilot to create presentations in PowerPoint for the web can name a file in a prompt instead of attaching it, so the change reaches deck authors, not only admins.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions / default: The default state should be recorded as unknown. | Found: You can now reference files saved in SharePoint libraries and OneDrive folders when creating a presentation with Copilot in PowerPoint. ... In your prompt, reference a file saved in SharePoint or OneDrive by the document name and/or owner of the document. | Fix: Set defaultState to user-opt-in under the standard's definition for an available capability a user chooses to use. Replace the default-state explanation with 'The release note describes an available capability invoked by naming a file in a prompt; no feature-specific admin switch was found as of November 2026.' Remove the open question about its arrival default, retaining the question about a separate switch. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: Microsoft has not described which sensitivity label a presentation created from labeled source content takes. | Found: If you use Copilot in Word, Copilot in PowerPoint, and Copilot in Outlook to create new content based on an item that has a sensitivity label applied, the sensitivity label from the source file is automatically inherited, with the label's protection settings. | Fix: Replace the label-absence statement and corresponding open question with 'Copilot in PowerPoint supports sensitivity-label inheritance for newly created content: it inherits the source label and its protection settings, using the highest-priority label when multiple source files are used. Label inheritance is not supported for content encrypted with user-defined permissions.' Cite https://learn.microsoft.com/purview/ai-m365-copilot and https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing. Retain the advice to test and the separate location question. | Source: https://learn.microsoft.com/purview/ai-m365-copilot
- [contradicted, blocker] front matter: licensing.notes; controls[0].note; Cost and licensing; Governance controls: Licence / licensing: Users without the Copilot add-on license can still use Copilot in PowerPoint within fair use limits. | Found: Copilot Chat (Basic) license ... You don't have the Microsoft 365 Copilot add-on license and don't have access to Copilot in Word, Excel, PowerPoint, and OneNote. | Fix: Qualify each occurrence: 'Users with Microsoft 365 Copilot (Basic), unlike Copilot Chat (Basic), can use Copilot in PowerPoint without the Copilot add-on; some features are subject to fair use limits.' The cited overview distinguishes these two non-add-on experiences. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [unsupported, blocker] Governance controls: Licence / applicability: Removing the Microsoft 365 Copilot add-on license does not switch the implicit-file-reference feature off. | Found: Searched: 'Copilot PowerPoint SharePoint OneDrive file references licensing Microsoft 365 Copilot Basic full experience'. Read Copilot overview, License options for Microsoft Copilot and the feature release note; none establishes continued access to this specific capability after license removal. | Fix: Replace 'so this row does not switch the feature off' with 'The sources found do not establish whether removing the add-on removes access to this specific file-reference capability.' Basic access to Copilot in PowerPoint does not by itself establish access to every capability.
- [contradicted, blocker] Open questions: DLP applicability / absence: Whether DLP label exclusion applies to a stored file referenced in a PowerPoint prompt remains unconfirmed. | Found: This feature is available in Microsoft 365 Copilot, Copilot Chat, Cowork, and Copilot in Word, Excel, and PowerPoint. ... File items, which are stored and items that are actively open. | Fix: Remove DLP label exclusion from the open question 'Do Restricted Content Discovery and the DLP label exclusion apply ...'. Retain the Restricted Content Discovery question alone. The DLP page explicitly covers Copilot in PowerPoint and stored files; the briefing already correctly states that coverage in Governance controls. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Creating a presentation from referenced content produces a new presentation file. | Found: Now, when creating a presentation using Copilot from an existing presentation, it creates the new presentation in a new file without affecting the original presentation. | Fix: Cite https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#september-30,-2025 for the new-file behavior. | Source: https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#september-30,-2025
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope; Governance guidance; Open questions / absence: A license-tier distinction specific to implicit SharePoint and OneDrive file references is not published in the feature entry or licensing material found. | Found: Searched: 'Copilot PowerPoint SharePoint OneDrive file references licensing Microsoft 365 Copilot Basic full experience'. Read the release-note entry, Copilot overview and License options for Microsoft Copilot; no distinction specific to implicit file references found. | Fix: Narrow 'The licence that covers this feature is not yet published' and equivalent statements to 'Learn documents Basic and Premium experiences for Copilot in PowerPoint; the release-note entry does not distinguish entitlement specifically for implicit SharePoint and OneDrive file references.' Keep the general product licensing facts.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The Purview route through Data Loss Prevention > Policies > Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork selects the policy location for the label-exclusion control. | Found: Go to Data Loss Prevention > Policies and select + Create policy. ... Select the Custom template, then Custom policy. ... On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Clarify the row note: 'This route selects the policy location. Configure a rule with Content contains > Sensitivity labels and the Prevent Copilot and Cowork from processing content action.' The printed route is correct but stops before the label-exclusion rule. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
-->
