---
title: "PowerPoint (Desktop): reference SharePoint and OneDrive files when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat"
roadmapId: 555895
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in PowerPoint on Desktop can now use a SharePoint or OneDrive file named in a prompt as source material. It reads what the user can already open; no admin action is documented, and the default is not stated."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft describes Microsoft 365 Copilot as an add-on plan and the Premium licence as the full experience of Copilot in PowerPoint. Which licence tier covers this feature, and any meter, is not yet published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["powerpoint","m365-copilot","sharepoint","onedrive","oversharing","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap 555895"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555895"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
videos: []
related: ["sensitivity-labels"]
controls:
  - governs: "Whether this file-reference capability is available to users"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
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
    note: "Applies to organization-wide search and Microsoft Copilot discovery scenarios, including tenant-wide content discovery. Existing permissions and direct access are unchanged."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 555895, the Desktop entry for referencing SharePoint and OneDrive files in Copilot Agent Mode in PowerPoint."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: rollout wording, Restricted Content Discovery and DLP coverage, and the EXTRACT requirement; removed two checklist steps and one open question."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 54 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 55 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3a3f9ab20a0eac8b1188076886b2c890"
---

## What's changing

Users creating a presentation with Copilot in PowerPoint can mention a file saved in SharePoint or OneDrive in their prompt, and Copilot can use that file as context. The Microsoft 365 Copilot release notes say Copilot "can now recognize references to files stored in SharePoint and OneDrive when you mention them in your prompt, such as by file or document name", and describe the file as one the user names by document name and/or owner, without attaching or uploading it.

The roadmap item describes this for Agent Mode in PowerPoint. The release notes entry (October 06, 2026) uses the wording "Copilot in PowerPoint" and does not mention Agent Mode. It lists three roadmap ids, 555894, 555895 and 555897, for Windows, Mac and Web. Microsoft lists the feature under these three roadmap items, which differ only by platform: this page covers item 555895, which the roadmap lists for Desktop; 555894 is listed for Web and 555897 for Mac.

The roadmap record shows status Launched, target June CY2026, release phase General Availability, and the Worldwide (Standard Multi-Tenant) cloud. The release notes entry says that these implicit file references were not previously supported for files in these locations. Microsoft Learn describes no admin setting for the feature and states no default at the time of writing (November 2026). The release notes describe Copilot features as gradually rolling out to a subset of users within a tenant before expanding across the organization; they give no feature-specific rollout schedule.

## Why it matters

The change matters because it adds an easier route from a prompt to files that users can already reach. Microsoft's data protection page says Copilot respects existing SharePoint and OneDrive permissions and that, if content is already overshared, Copilot can surface it to anyone who has access. A user who can open a badly permissioned file can now name it in a prompt and have it summarised into a new deck.

Microsoft has not stated what happens on arrival, so base any plan on the fact that no source says existing behaviour changes for users who do not use the feature. Expect the questions to come from users who start naming files in prompts, and from owners of sites whose content then appears in a presentation they did not expect.

## Risk assessment

**Data exposure**
- Files in SharePoint libraries and OneDrive folders become reachable from a prompt by name. Microsoft's data protection page says Copilot respects existing SharePoint and OneDrive permissions, so overshared files are the exposure. Restricted Content Discovery limits what appears in Copilot and organisation-wide search (see the controls table).
- Generated slides can carry content from the referenced file into a new file. A DLP policy for Copilot can keep Copilot from summarising labelled files and emails, according to the same page. Microsoft documents sensitivity-label-based DLP blocking of file processing in Copilot in PowerPoint; protected items may still appear in citations, but their content is not used in the response.

**Security & identity**
- Sensitivity labels still matter. Per Microsoft, Copilot and agents cannot access unopened documents in SharePoint and OneDrive that are labelled and encrypted with user-defined permissions, with two stated exceptions: a default sensitivity label that extends SharePoint permissions to downloaded documents, or a document the user references directly by typing "/". In both cases, the user must also have the EXTRACT usage right.
- Restricted Content Discovery governs organization-wide search and Microsoft Copilot discovery scenarios, including tenant-wide content discovery; it does not change permissions or prevent direct access to content.

**Autonomy & actions**
- The release notes describe the user naming a file and asking Copilot to create a presentation. They describe no action on the source file and no write access to SharePoint or OneDrive.

**Change & support**
- Users may expect Copilot to find a file by name or owner and be confused when it does not. Plan a short note to users of Copilot in PowerPoint.
    - Because Copilot respects existing permissions, a result that surprises a user usually points back to the permissions or labels on the source file.

## Cost and licensing

Microsoft's service description page calls Microsoft 365 Copilot an add-on plan with specific licensing prerequisites. The Microsoft Copilot overview describes the Premium licence as the Microsoft 365 Copilot add-on licence with the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and describes a Basic experience for users without the add-on that can use Copilot in those apps, subject to fair use limits. Which of these covers file references from SharePoint and OneDrive is not yet published for this feature.

The release notes entry for this feature names no separate charge or meter, and a meter for it is not yet published. The indirect costs are admin time to review oversharing on sites and libraries and communication to users.

## Scope

- **Users:** people who use Copilot in PowerPoint to create a presentation. The roadmap record does not name a licence for the feature; see Cost and licensing.
- **Files:** those saved in SharePoint libraries and OneDrive folders, per the roadmap description. Copilot respects existing SharePoint and OneDrive permissions, per Microsoft's data protection page.
- **Platform:** the roadmap lists this item for Desktop. Items 555894 (Web) and 555897 (Mac) are separate roadmap entries for the same feature.
- **Cloud:** Worldwide (Standard Multi-Tenant), per the roadmap record.
- **Status:** Launched, target June CY2026, General Availability, per the roadmap record. The release notes entry is dated October 06, 2026.
- **Rollout and prerequisites:** The release notes describe Copilot features as gradually rolling out to a subset of users within a tenant before expanding across the organization; they give no feature-specific rollout schedule.

## Governance guidance

### Before rollout
- Decide which sites to place under Restricted Content Discovery (SharePoint admin center > Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot) where content must stay accessible but not be discoverable by Copilot.

### At rollout
- Tell users of Copilot in PowerPoint that they can name a SharePoint or OneDrive file by document name and/or owner in a prompt, and that Copilot works from files they can already open.
- Ask pilot users to test a prompt that names a restricted file, to confirm it is not used.

### After rollout
- Review user reports of decks that contain unexpected content and trace each back to the permission on the source file.
- Re-check the Microsoft 365 Copilot release notes and the roadmap item for an admin setting, a default state or licensing detail.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether this file-reference capability is available to users</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites are hidden from Copilot discovery</strong><br><small>Site</small><br><small class="controls__note">Applies to organization-wide search and Microsoft Copilot discovery scenarios, including tenant-wide content discovery. Existing permissions and direct access are unchanged.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Restricted Content Discovery is an existing SharePoint control; it is not specific to this feature. Microsoft's page describes it as intended for Microsoft Copilot deployment and governance scenarios and says changes can take time to propagate through search and Microsoft Copilot experiences. By default only SharePoint administrators can manage it. It governs organization-wide search and Microsoft Copilot discovery scenarios, including tenant-wide content discovery; it does not change permissions or prevent direct access to content. Test a restricted site with this feature before relying on it.

Microsoft Learn documents no switch that turns this file-reference capability on or off at the time of writing (November 2026), so the first row records that gap. Permissions, sensitivity labels and DLP for Copilot are described on Microsoft's data protection page, which this briefing cites; they are not listed as rows here.

## Open questions

- Is the file-reference capability on by default for all users with Copilot in PowerPoint, and is there an admin setting to turn it off? Watch the Microsoft 365 Copilot release notes and the roadmap item.
- Which Copilot licence tier covers file references in Agent Mode in PowerPoint, and is any Copilot Credits meter involved?

<!-- rationale
risk: Medium. Copilot can now pull a named SharePoint or OneDrive file into a new deck, so content that is overshared becomes easier to surface; existing permissions, labels and Restricted Content Discovery still apply.
cost: Low. Microsoft publishes no separate meter or charge for this feature; the known cost is the Microsoft 365 Copilot licence the user needs for the full experience in PowerPoint, plus admin time to review oversharing.
impact: Medium. Users of Copilot in PowerPoint on Desktop notice it, because they can name a file in a prompt instead of attaching it; it does not change anything for users who do not use Copilot in PowerPoint.
-->
