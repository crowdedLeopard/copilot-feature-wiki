---
title: "Microsoft Copilot: Agent Mode in PowerPoint builds presentations from Work IQ"
slug: "m365-copilot-create-presentations-with-work-iq-using-agent-mode-in-copilot-in-powerpoint"
roadmapId: 555874
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Agent Mode in Copilot in PowerPoint on desktop can build a presentation from a user's Work IQ: files, meetings and emails. Launched per the roadmap. Microsoft has not stated the default, so check who holds the Copilot licence."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Work IQ is included with Microsoft 365 Copilot (Premium) and is available to licensed users in all Microsoft 365 Copilot experiences. Learn names no licence or price specific to Agent Mode in PowerPoint."
audiences: ["m365-admin","security","change-adoption"]
tags: ["powerpoint","m365-copilot","work-iq","agents","restricted-content-discovery","licensing"]
sources:
  - title: "Microsoft 365 Roadmap item 555874"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555874"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Privacy and protections"
    url: "https://learn.microsoft.com/copilot/plan/privacy-and-protections"
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
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot & Microsoft 365 Copilot Chat"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot"
    kind: "learn"
videos: []
related: ["work-iq","restricted-content-discovery","m365-copilot-powerpoint-agent","m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-ag-555884","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that gives access to Work IQ"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "At least License Administrator or User Administrator. Learn ties Work IQ to Microsoft 365 Copilot (Premium); it names no licence specific to Agent Mode in PowerPoint."
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
    note: "Needs a Microsoft Copilot licence and SharePoint Advanced Management. Applies to Microsoft Copilot discovery scenarios, including tenant-wide content discovery; not content already in use, such as an open document."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-21T23:00:01"
changes:
  - date: "2026-11-25"
    note: "First briefing: Agent Mode in Copilot in PowerPoint can build presentations from Work IQ; Learn documents it only in release notes, with licensing tied to Work IQ."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 51 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: Work IQ licensing and meter wording, Restricted Content Discovery reach, the Work IQ on/off statement and one data-exposure sentence."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: removed the claim that detail beyond the release notes is not documented, removed the sensitivity-label question that Learn answers, and narrowed the risk rationale."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: removed the open question about Microsoft 365 Copilot (Basic) entitlement to Work IQ, which the Microsoft Copilot overview answers."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6551c4173657457bd436d471be796323"
---

## What's changing

Agent Mode in Copilot in PowerPoint can now create a presentation based on a user's Work IQ. The roadmap item says this saves users the work of finding the right files, meetings and emails to compose relevant slides. The Microsoft 365 Copilot release notes say Copilot in PowerPoint now uses Work IQ to automatically gather relevant files, meetings and emails to help build presentations, and list the entry under July 01, 2026 for Windows.

The release notes give the user steps: open PowerPoint, select 'Edit with Copilot', choose to create a presentation based on your Work IQ, then review and customise the generated slides. They say the integration maintains data security by accessing only authorised content. Microsoft Learn describes Work IQ as an intelligence layer that enables agents access to reason over organizational data, content and tools.

The roadmap record gives the status as Launched, with a target of March CY2026, the release phase General Availability, the platform Desktop and the cloud Worldwide (Standard Multi-Tenant). The release-notes date (July 01, 2026) and the roadmap target (March CY2026) are both reported as Microsoft gives them. The feature-specific description on Microsoft Learn is in the release notes at the time of writing (November 2026). Learn's Microsoft Purview page for Copilot also says Copilot in Word, Copilot in PowerPoint, and Copilot in Outlook support sensitivity label inheritance for newly created content.

## Why it matters

This moves deck building from files a user picks to content Copilot finds across the user's files, meetings and emails. A deck can therefore carry material the author did not think to attach, and the quality of what it finds depends on how tidy permissions are in SharePoint, OneDrive, Exchange and Teams. Microsoft Learn says Copilot works with content in Microsoft Graph that the user has permission to access, so oversharing that already exists becomes easier to surface in slides.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes for users without the Copilot licence. For licensed users, the sensible stance is to treat this as a capability to review: confirm who is licensed, decide whether sites need to be kept out of Copilot discovery, and brief presenters to check every generated slide before it is shared.

## Risk assessment

**Data exposure**
- The release notes say Copilot gathers relevant files, meetings and emails for the deck. Learn's Copilot privacy page says Copilot works with content in Microsoft Graph that the user has permission to access, so existing oversharing can make sensitive source material available to Copilot when it gathers relevant content. The controls that apply are Restricted Content Discovery for chosen SharePoint sites and licence assignment (see the controls table).
- Generated slides can combine content from several sources into one file that is then easy to share, so presenters need to check what a deck contains before it leaves their hands.

**Security & identity**
- The release notes say only authorised content is accessed, so the user's own permissions are the boundary. Confirm with Microsoft which identity the feature runs under before relying on that boundary for sensitive sites.

**Autonomy & actions**
- The release notes describe Copilot gathering content and building slides that the user then reviews and customises. The review step is where a person catches content that should not be in the deck.

**Change & support**
- Expect questions about why a deck contains material from a meeting or email the user did not name. The licence a user holds decides whether Work IQ grounding is available: Learn says full work data through Work IQ is only available for users with the Microsoft Copilot licence.

## Cost and licensing

Learn's Microsoft Copilot overview says Work IQ is included with Microsoft 365 Copilot (Premium), and the Work IQ overview says that for licensed users Work IQ is available in all Microsoft 365 Copilot experiences and agents. Learn's privacy page says access to full work data as part of Work IQ and semantic indexing is only available for users with the Microsoft Copilot license.

The Work IQ API is a separate usage-based billing offering, which Learn says is billed in Copilot Credits for custom apps, agents and integrations. Work IQ in Microsoft 365 Copilot (Premium) is included; the distinct Work IQ API offering is usage-based for custom apps, agents and integrations ([Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview)). Learn names no separate feature-specific meter, price or licence for Agent Mode in PowerPoint at the time of writing (November 2026). The indirect cost is admin time for licence assignment and any site-level restrictions.

## Scope

The roadmap record lists the platform Desktop, the release phase General Availability and the cloud Worldwide (Standard Multi-Tenant). The release notes list the entry for Windows. The roadmap record does not list the US Government clouds for this item.

The users in scope are those with the Microsoft Copilot licence, since Learn says full work data through Work IQ is available only to them. The roadmap description names no rollout mechanism, release channel or admin prerequisite.

## Governance guidance

### Before rollout
- Confirm which users hold the Microsoft 365 Copilot licence, since Learn ties Work IQ to that licence; the License Administrator or User Administrator role is the least Learn names for assigning licences.
- Review SharePoint sites that hold material not meant for broad discovery and decide whether to apply Restricted Content Discovery, which Learn describes as a temporary control while permissions are reviewed.
- Identify the presenters who will use it first and tell them that decks may include content from files, meetings and emails they did not name.

### At rollout
- Ask pilot users to compare generated slides against their source files, meetings and emails before sharing.
- Check that Restricted Content Discovery sites are excluded from what pilot users see in generated decks, bearing in mind Learn says the control does not affect experiences on content already in use, such as summarising an open document.

### After rollout
- Watch Message center and the Microsoft 365 Copilot release notes for any documentation specific to Agent Mode in PowerPoint, including default state and licensing.
- Re-check licence assignments when people change role, since the licence decides who has Work IQ grounding.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives access to Work IQ</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator. Learn ties Work IQ to Microsoft 365 Copilot (Premium); it names no licence specific to Agent Mode in PowerPoint.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from</strong><br><small>Site</small><br><small class="controls__note">Needs a Microsoft Copilot licence and SharePoint Advanced Management. Applies to Microsoft Copilot discovery scenarios, including tenant-wide content discovery; not content already in use, such as an open document.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls in the table are general Copilot controls, not settings for Agent Mode in PowerPoint. Licence assignment controls entitlement to Work IQ grounding included with Microsoft 365 Copilot (Premium); Work IQ API access is independent of that licence and is usage-based ([Work IQ overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/)). Restricted Content Discovery applies to Microsoft Copilot discovery scenarios, including tenant-wide content discovery; it does not affect experiences on content already in use, such as summarising an open document ([Restrict discovery of SharePoint sites and content](https://learn.microsoft.com/sharepoint/restricted-content-discovery)).

Learn's Microsoft Copilot overview says Work IQ can be turned on or off, without identifying the setting or who controls it. It adds that, with Work IQ off, Copilot responses are not grounded in Microsoft Graph and Work IQ. How that setting relates to Agent Mode in PowerPoint is an open question below. Restricted Content Discovery does not change permissions, and by default only SharePoint administrators can manage it.

## Open questions

- What is the default state of Agent Mode in PowerPoint with Work IQ for a licensed user, and does anything change for tenants that do nothing? Watch Message center and the Microsoft 365 Copilot release notes.
- Where is the Work IQ on/off setting that Learn's Microsoft Copilot overview describes, and does it switch off the Work IQ grounding in Agent Mode in PowerPoint?

<!-- rationale
risk: Medium. The feature gathers files, meetings and emails into new slides, so relevant authorised source content can end up in a deck; Learn's release note says it accesses only authorised content, which keeps existing permissions as the boundary.
cost: Low. Learn says Work IQ is included with Microsoft 365 Copilot (Premium) and names no separate meter for this feature; the known cost is licence assignment and admin time.
impact: Medium. Licensed users who build decks in PowerPoint on desktop will notice it; the roadmap lists Desktop as the only platform.
-->
