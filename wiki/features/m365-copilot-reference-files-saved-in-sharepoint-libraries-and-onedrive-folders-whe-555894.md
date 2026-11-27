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
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn describes the Microsoft 365 Copilot add-on licence as the full Copilot experience in PowerPoint. Users with Microsoft 365 Copilot (Basic), unlike Copilot Chat (Basic), can use Copilot in PowerPoint without the add-on; some features are subject to fair use limits. The release-note entry does not distinguish entitlement for implicit file references."
audiences: ["m365-admin","security","change-adoption"]
tags: ["powerpoint","m365-copilot","sharepoint","onedrive","oversharing","dlp","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap 555894"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555894"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot & Microsoft 365 Copilot Chat"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot"
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
    note: "The request body's removeLicenses collection removes a licence. Governs the add-on tier only. Users with Microsoft 365 Copilot (Basic), unlike Copilot Chat (Basic), can use Copilot in PowerPoint without the add-on."
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
    note: "The route selects the policy location. Rule condition is Content contains > Sensitivity labels. The API call is the reference's Copilot example, after New-DlpCompliancePolicy -EnforcementPlanes @(\"CopilotExperiences\") creates the policy."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-20"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 555894, the Web entry for referencing SharePoint and OneDrive files in Copilot prompts in PowerPoint."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: default state is now user-opt-in, label inheritance is documented, and the licence wording is qualified for Copilot Chat (Basic) and Microsoft 365 Copilot (Basic)."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "30583ae83f3e11bc29e2ba44a4ca3a8c"
---

## What's changing

Users can now name a SharePoint or OneDrive file in a Copilot prompt when creating a presentation in PowerPoint, and Copilot can use that file as context. The Learn release note says Copilot in PowerPoint "can now recognize references to files stored in SharePoint and OneDrive when you mention them in your prompt, such as by file or document name", and that these implicit file references were not previously supported for files in those locations. Users no longer have to attach or upload the file first.

This briefing covers roadmap item 555894, which lists the Web platform. Microsoft lists the feature under three roadmap ids: 555894 (Web), 555895 (Desktop) and 555897 (Mac), and the release note lists Windows, Mac and Web. The roadmap item calls it Agent Mode in PowerPoint; the release note calls it Copilot in PowerPoint and carries the same roadmap id, so this briefing treats them as one feature.

The roadmap record shows status Launched, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and a target date of June CY2026. The Learn release notes list the item under updates released between September 22, 2026, and October 06, 2026, later than the roadmap's target month. Learn says Copilot features are introduced gradually, to a subset of users in a tenant before the rest.

## Why it matters

Copilot works within the signed-in user's existing access, so this change adds no new permission, but it makes it easier to pull a file into a deck: a document name in a prompt is enough. In tenants where libraries or OneDrive folders are overshared, a user can now draw on that content without searching for it first, which makes oversharing cleanup and label coverage more relevant to PowerPoint.

The release note describes an available capability invoked by naming a file in a prompt, and describes no feature-specific admin switch as of November 2026. Nothing here forces an admin action, which is why this is a review item: check that the controls you already rely on for Copilot cover this path.

## Risk assessment

**Data exposure**
- Files named in a prompt are used as context under the user's own access. Learn states that Copilot "respects existing SharePoint and OneDrive permissions. If content is already overshared, Copilot can surface it to anyone who has access." Oversharing is the exposure; Restricted Content Discovery (SharePoint sites only) and a DLP policy for labelled files are the documented levers.
- The generated deck is a new file built from the referenced content. Copilot in PowerPoint supports sensitivity-label inheritance for newly created content: it inherits the source label and its protection settings, using the highest-priority label when multiple source files are used. Label inheritance is not supported for content encrypted with user-defined permissions. Test this with a labelled file before relying on it.

**Security & identity**
- Learn says Microsoft Copilot presents only data that each individual can access using the same underlying controls as other Microsoft 365 services. The release note does not describe which component fetches the referenced file.
- A DLP policy on the Microsoft Copilot, Copilot Chat, and Copilot Cowork location with a sensitivity-label condition excludes labelled items from processing. Excluded items still appear in citations, but their content is not used.

**Autonomy & actions**
- The release note describes a user naming a file in a prompt and asking Copilot to build a presentation from it. It describes no background, scheduled or write action on the source file.

**Change & support**
- The feature sits under three roadmap ids across Web, Desktop and Mac, so expect questions about why the behaviour differs by app. Check each platform's availability before telling users it works everywhere.
- A change to a DLP policy can take up to four hours to reach Copilot, and Restricted Content Discovery changes need time to propagate, so tell users that new restrictions are not instant.

## Cost and licensing

The release note and roadmap item name no licence tier, meter or charge for this feature. Learn's Copilot overview describes users who hold the Microsoft 365 Copilot add-on licence as having the full experience of Copilot in Word, Excel, PowerPoint and OneNote. Users with Microsoft 365 Copilot (Basic), unlike Copilot Chat (Basic), can use Copilot in those apps without the add-on; some features are subject to fair use limits. Learn documents Basic and Premium experiences for Copilot in PowerPoint; the release-note entry does not distinguish entitlement specifically for implicit SharePoint and OneDrive file references.

The controls that limit this feature carry their own requirements. Restricted Content Discovery can be configured if the organisation is licensed for Copilot and has SharePoint Advanced Management available. The DLP page for Copilot refers licensing to Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions. Indirect cost is admin time to review site permissions, build DLP policies and brief users.

## Scope

**Users and licences:** people who use Copilot in PowerPoint to create a presentation. The release-note entry does not distinguish entitlement specifically for this feature (see Cost and licensing).

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
- Confirm which users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center, since the release-note entry does not distinguish entitlement for this feature.
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
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence</strong><br><small>User</small><br><small class="controls__note">The request body's removeLicenses collection removes a licence. Governs the add-on tier only. Users with Microsoft 365 Copilot (Basic), unlike Copilot Chat (Basic), can use Copilot in PowerPoint without the add-on.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites are hidden from Copilot discovery</strong><br><small>Site</small><br><small class="controls__note">SharePoint sites only; not supported for OneDrive sites. Does not change permissions. Whether it covers a file named in a PowerPoint prompt is not stated.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sensitivity-labelled files Copilot may process</strong><br><small>Tenant</small><br><small class="controls__note">The route selects the policy location. Rule condition is Content contains &gt; Sensitivity labels. The API call is the reference's Copilot example, after New-DlpCompliancePolicy -EnforcementPlanes @(&quot;CopilotExperiences&quot;) creates the policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -AdvancedRule $advrule -RestrictAccess @(@{setting=&quot;ExcludeContentProcessing&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These rows are general Copilot controls. The release note describes no setting specific to file references in PowerPoint, so none of them is confirmed as a switch for this feature alone.

- **Licence:** removing the Microsoft 365 Copilot add-on licence governs the add-on tier only. Users with Microsoft 365 Copilot (Basic), unlike Copilot Chat (Basic), can use Copilot in PowerPoint without the add-on; some features are subject to fair use limits. The sources found do not establish whether removing the add-on removes access to this specific file-reference capability.
- **Restricted Content Discovery:** applies to SharePoint sites, not OneDrive sites. It does not change permissions, and Learn says it does not affect experiences that operate on content already in use by the user. Whether a file named in a PowerPoint prompt counts as that is not stated. By default only SharePoint administrators manage it.
- **DLP for Copilot:** the page says the label-exclusion feature is available in Copilot in Word, Excel and PowerPoint. It supports stored files and items actively open, and is evaluated at file open in those apps, so a label applied mid-session takes effect the next time the file is opened.

## Open questions

- Which licence tier includes this feature: the Microsoft 365 Copilot add-on, Microsoft 365 Copilot (Basic), or both? Watch the Microsoft 365 Copilot release notes and licensing pages.
- Is there an admin or per-user setting that turns file references off? Watch Message center and the Learn release notes.
- Does Restricted Content Discovery apply to a file named in a PowerPoint prompt in the same way as it does to discovery in Copilot Chat?
- Does availability differ between Web, Desktop and Mac, given the three roadmap ids and a release-note date later than the June CY2026 target?

<!-- rationale
risk: Low. Learn says Copilot respects existing SharePoint and OneDrive permissions, so the feature works within current access; files that are already overshared can still be surfaced to anyone who has access.
cost: Low. The only cost the sources show is admin time to review permissions and DLP; the release note names no licence tier, meter or charge for this feature, and its entry does not distinguish entitlement for it.
impact: Medium. Anyone using Copilot to create presentations in PowerPoint for the web can name a file in a prompt instead of attaching it, so the change reaches deck authors, not only admins.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: The generated presentation is a new file built from referenced content. | Found: Now, when creating a presentation using Copilot from an existing presentation, it creates the new presentation in a new file without affecting the original presentation. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#september-30,-2025 to sources for the new-file statement. | Source: https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#september-30,-2025
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist tells readers to rely on is represented in the controls table. | Found: Plan separately for OneDrive: Restricted Content Discovery is not supported for OneDrive sites, so rely on permissions and DLP there. The table contains licence assignment, Restricted Content Discovery and DLP rows, but no permissions row. | Fix: Replace the OneDrive checklist bullet with: 'Plan separately for OneDrive: Restricted Content Discovery is not supported for OneDrive sites; check the DLP policy described in the controls table.'
-->
