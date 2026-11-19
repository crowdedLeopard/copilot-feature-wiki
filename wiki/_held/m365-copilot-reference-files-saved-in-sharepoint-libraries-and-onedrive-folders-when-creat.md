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
    note: "Existing SharePoint control for Microsoft Copilot experiences generally; not confirmed by its page for Agent Mode in PowerPoint. Permissions are unchanged."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 555895, the Desktop entry for referencing SharePoint and OneDrive files in Copilot Agent Mode in PowerPoint."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 43
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "3188a020af7653df88ccbac3fbc5d8ee"
---

## What's changing

Users creating a presentation with Copilot in PowerPoint can mention a file saved in SharePoint or OneDrive in their prompt, and Copilot can use that file as context. The Microsoft 365 Copilot release notes say Copilot "can now recognize references to files stored in SharePoint and OneDrive when you mention them in your prompt, such as by file or document name", and describe the file as one the user names by document name and/or owner, without attaching or uploading it.

The roadmap item describes this for Agent Mode in PowerPoint. The release notes entry (October 06, 2026) uses the wording "Copilot in PowerPoint" and does not mention Agent Mode. It lists three roadmap ids, 555894, 555895 and 555897, for Windows, Mac and Web. Microsoft lists the feature under these three roadmap items, which differ only by platform: this page covers item 555895, which the roadmap lists for Desktop; 555894 is listed for Web and 555897 for Mac.

The roadmap record shows status Launched, target June CY2026, release phase General Availability, and the Worldwide (Standard Multi-Tenant) cloud. The release notes entry says that these implicit file references were not previously supported for files in these locations. Microsoft Learn does not describe an admin setting, a default state or a rollout mechanism for the feature at the time of writing (November 2026).

## Why it matters

The change matters because it adds an easier route from a prompt to files that users can already reach. Microsoft's data protection page says Copilot respects existing SharePoint and OneDrive permissions and that, if content is already overshared, Copilot can surface it to anyone who has access. A user who can open a badly permissioned file can now name it in a prompt and have it summarised into a new deck.

Microsoft has not stated what happens on arrival, so base any plan on the fact that no source says existing behaviour changes for users who do not use the feature. Expect the questions to come from users who start naming files in prompts, and from owners of sites whose content then appears in a presentation they did not expect.

## Risk assessment

**Data exposure**
- Files in SharePoint libraries and OneDrive folders become reachable from a prompt by name. Microsoft's data protection page says Copilot respects existing SharePoint and OneDrive permissions, so overshared files are the exposure. Restricted Content Discovery limits what appears in Copilot and organisation-wide search (see the controls table).
- Generated slides can carry content from the referenced file into a new file. A DLP policy for Copilot can keep Copilot from summarising labelled files and emails, according to the same page.

**Security & identity**
- Sensitivity labels still matter. Per Microsoft, Copilot and agents cannot access unopened documents in SharePoint and OneDrive that are labelled and encrypted with user-defined permissions, with two stated exceptions: a default sensitivity label that extends SharePoint permissions to downloaded documents, or a document the user references directly by typing "/", where the user must also have the EXTRACT usage right.
- Whether this feature's file lookup honours Restricted Content Discovery is for Microsoft to confirm; the RCD page states the setting for Microsoft Copilot experiences generally.

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
- **Rollout and prerequisites:** Not stated for this feature.

## Governance guidance

### Before rollout
- Identify which SharePoint sites and OneDrive libraries hold content that users should not be able to pull into a presentation, and review their permissions; Copilot respects existing permissions, so oversharing is the exposure.
- Decide which sites to place under Restricted Content Discovery (SharePoint admin center > Sites > Active sites) where content must stay accessible but not be discoverable by Copilot.
- Check that sensitivity labels and any DLP policy for Copilot cover the files that matter.

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
<tr><td data-label="Control"><strong>Which SharePoint sites are hidden from Copilot discovery</strong><br><small>Site</small><br><small class="controls__note">Existing SharePoint control for Microsoft Copilot experiences generally; not confirmed by its page for Agent Mode in PowerPoint. Permissions are unchanged.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Restricted Content Discovery is an existing SharePoint control; it is not specific to this feature. Microsoft's page describes it as intended for Microsoft Copilot deployment and governance scenarios and says changes can take time to propagate through search and Microsoft Copilot experiences. By default only SharePoint administrators can manage it. The page does not name Agent Mode in PowerPoint, so test a restricted site with this feature before relying on it.

Microsoft Learn documents no switch that turns this file-reference capability on or off at the time of writing (November 2026), so the first row records that gap. Permissions, sensitivity labels and DLP for Copilot are described on Microsoft's data protection page, which this briefing cites; they are not listed as rows here.

## Open questions

- Is the file-reference capability on by default for all users with Copilot in PowerPoint, and is there an admin setting to turn it off? Watch the Microsoft 365 Copilot release notes and the roadmap item.
- Which Copilot licence tier covers file references in Agent Mode in PowerPoint, and is any Copilot Credits meter involved?
- Does file lookup in Agent Mode honour Restricted Content Discovery and DLP for Copilot on Desktop in the same way as Copilot Chat?

<!-- rationale
risk: Medium. Copilot can now pull a named SharePoint or OneDrive file into a new deck, so content that is overshared becomes easier to surface; existing permissions, labels and Restricted Content Discovery still apply.
cost: Low. Microsoft publishes no separate meter or charge for this feature; the known cost is the Microsoft 365 Copilot licence the user needs for the full experience in PowerPoint, plus admin time to review oversharing.
impact: Medium. Users of Copilot in PowerPoint on Desktop notice it, because they can name a file in a prompt instead of attaching it; it does not change anything for users who do not use Copilot in PowerPoint.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Scope: Rollout and prerequisites / absence: Microsoft Learn describes no rollout mechanism for this feature. | Found: Copilot features are introduced using a safe deployment model, gradually rolling out to a subset of users within a tenant before expanding across the organization. | Fix: Replace the rollout absence in both sections with: 'The release notes describe Copilot features as gradually rolling out to a subset of users within a tenant before expanding across the organization; they give no feature-specific rollout schedule.' | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls; Open questions; rationale: risk / absence: Whether Restricted Content Discovery governs this Copilot file lookup is unconfirmed because its page does not name Agent Mode in PowerPoint. | Found: Restricted Content Discovery affects organization-wide search experiences (SharePoint home, Office.com, Bing) and Microsoft Copilot discovery scenarios, including experiences that rely on tenant-wide content discovery. | Fix: Replace the prose applicability caveats with: 'Restricted Content Discovery governs organization-wide search and Microsoft Copilot discovery scenarios, including tenant-wide content discovery; it does not change permissions or prevent direct access to content.' Remove the RCD applicability question. Keep testing advice as advice, not as evidence that the general control is unconfirmed. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [contradicted, blocker] Risk assessment: Security & identity / behaviour: The encryption-exception sentence attaches the additional EXTRACT requirement to the direct-reference exception without retaining it for the default-label exception. | Found: In both cases, the user must also have the EXTRACT usage right. | Fix: End the exception list after 'typing "/"' and add: 'In both cases, the user must also have the EXTRACT usage right.' | Source: https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing
- [contradicted, blocker] Open questions: DLP for Copilot on Desktop / absence: Whether DLP for Copilot covers this PowerPoint file-processing scenario remains unconfirmed. | Found: Block files and emails with sensitivity labels from being processed This feature is available in Microsoft 365 Copilot, Copilot Chat, Cowork, and Copilot in Word, Excel, and PowerPoint. | Fix: Remove the DLP applicability question and add this source. Replace it with the factual sentence: 'Microsoft documents sensitivity-label-based DLP blocking of file processing in Copilot in PowerPoint; protected items may still appear in citations, but their content is not used in the response.' | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note / applicability: The row presents Restricted Content Discovery as a general Copilot control not confirmed for Agent Mode in PowerPoint. | Found: Restricted Content Discovery affects organization-wide search experiences (SharePoint home, Office.com, Bing) and Microsoft Copilot discovery scenarios, including experiences that rely on tenant-wide content discovery. | Fix: Replace the note in front matter and the rendered table with: 'Applies to organization-wide search and Microsoft Copilot discovery scenarios, including tenant-wide content discovery. Existing permissions and direct access are unchanged.' | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [supported, minor] Governance guidance: Before rollout / admin-path: The abbreviated path SharePoint admin center > Sites > Active sites leads to the sites on which Restricted Content Discovery is configured. | Found: In the SharePoint admin center, expand Sites and select Active sites. Select the site you want to configure. Open the Settings tab, and then turn Restrict content from Microsoft Copilot on. | Fix: Expand the parenthetical path to 'SharePoint admin center > Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot', matching the existing controls row. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The governance checklist asks readers to review permissions, sensitivity labels and DLP, but those controls have no table rows. | Found: review their permissions; Check that sensitivity labels and any DLP policy for Copilot cover the files that matter. / Permissions, sensitivity labels and DLP ... are not listed as rows here. | Fix: The Before rollout permission-review and sensitivity-label/DLP checklist steps have no corresponding controls rows. Remove those checklist steps to align the checklist with the existing table; retain the documented protection facts in the risk section.
-->
