---
title: "SharePoint: create, upload and publish HTML pages, with Copilot drafting"
slug: "sharepoint-html-pages"
roadmapId: 569208
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "SharePoint authors can create HTML pages with Copilot or upload .html files to Site Pages and publish them. Microsoft says no admin action is required; Copilot licences and site-level controls decide who sees it."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft 365 Copilot licence. Learn lists \"Create HTML, Word, Excel, or PowerPoint files\" among the capabilities included with it; advanced work uses Copilot Credits. No licence statement is published for uploading HTML without Copilot."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["sharepoint","m365-copilot","copilot-in-sharepoint","restricted-content-discovery","oversharing","licensing","copilot-credits"]
sources:
  - title: "SharePoint: HTML pages"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569208"
    kind: "roadmap"
  - title: "MC1479517: SharePoint: HTML pages"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1479517"
    kind: "message-center"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
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
related: ["m365-copilot-copilot-in-sharepoint","copilot-credits","spending-policies"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence needed for Copilot-assisted HTML page creation"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Minimum role: License Administrator or User Administrator. Does not govern uploading an .html file."
  - governs: "Whether a site shows Copilot entry points and takes part in Copilot discovery"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Removes the Copilot button, AI actions menus and Create pages with AI on the site. Learn does not say it removes the HTML page entry or upload. Needs a Copilot licence and SharePoint Advanced Management."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-20"
    note: "First briefing: HTML pages in SharePoint, with rollout window from MC1479517 and the Copilot licence and Restricted Content Discovery controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 68
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "ddca11140bba50762be6d4130f727f05"
---

## What's changing

SharePoint is adding HTML pages, a page type stored in the Site Pages library alongside existing ASPX pages. Authors can have Copilot in SharePoint draft an HTML page, or upload their own `.html` file, then render it as a page, edit it, publish it and share it. The roadmap item describes this as a new way to present content next to ASPX pages.

Microsoft's notice MC1479517 lists the entry points: **+ New** > **HTML page** on a site, the floating Copilot button, **+ Create** > **HTML page** on the Publish landing page, and upload of `.html` files or folders from the Site Pages library. Users describe the page in a prompt, can attach files for context, and Copilot creates a draft and opens it in edit mode. Text can be edited directly or through the Copilot chat pane. The same notice says the site-scoped Agent creation entry point is removed from the **+ New** menu on site pages, while agent creation remains in the command bar of a document library or list and in the context menu of selected files.

The roadmap record shows status Rolling out, target October CY2026, release phases General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) and Web. MC1479517 (published 25 September 2026) gives the schedule as public preview from early October 2026, and general availability (Worldwide) beginning mid-November 2026 and completing by late December 2026. Microsoft Learn's Copilot in SharePoint page says general availability of Copilot in SharePoint begins rolling out on 30 September 2026, so the two Microsoft sources give different start points; use the notice's window for this feature. MC1479517 points to a Learn article, "Create, upload, edit, and publish HTML pages in SharePoint", which a Learn search did not return at the time of writing (November 2026). What this page says about behaviour therefore rests on the notice and on Learn's Copilot in SharePoint pages.

## Why it matters

This adds a way for any author to put generated or imported HTML into a SharePoint site, with a Copilot-drafted starting point. The notice says no admin action is required before rollout, and Learn says no opt-in step is required for everyday Copilot in SharePoint capabilities for licensed users, so expect the option to appear for authors as the rollout reaches your tenant.

The notice states that published pages are visible to users who already have permission to view the page, and that publishing does not grant new permissions. The practical exposure is therefore content: a page built from attached files can show their content to everyone who can view the page. Decide which sites should keep Copilot entry points, and tell authors what they may attach and publish.

## Risk assessment

**Data exposure**
- Copilot builds the page from the prompt and from files the user attaches or is authorised to access (MC1479517). Anything pulled into a page is readable by everyone who can view that page, so check page audiences on sites that hold sensitive files. Restricted Content Discovery removes Copilot entry points on a site (see the controls table).
- HTML pages created or uploaded are stored in the Site Pages library under existing SharePoint storage and retention behaviour (MC1479517), so existing retention and site permissions apply to them.

**Security & identity**
- Permissions do not change: the notice says publishing does not grant new permissions. Access to Copilot-assisted creation depends on Copilot licensing, SharePoint permissions and organisational Copilot controls.
- How SharePoint treats scripts or other active content inside uploaded or generated HTML is not described in the notice or on the Copilot in SharePoint page. Treat that as something to confirm before encouraging uploads from outside sources.

**Autonomy & actions**
- The notice describes Copilot creating a draft and opening it in edit mode; users then edit, publish and share. The notice does not describe Copilot publishing on its own.

**Change & support**
- Authors get new entry points (+ New, Copilot button, Publish landing page, Site Pages upload). Expect help-desk questions about where HTML pages sit next to ASPX pages.
- The site-scoped Agent creation entry point disappears from the + New menu on site pages; authors who used it need the document-library command bar or file context menu instead.

## Cost and licensing

**Licence.** Copilot-assisted creation depends on existing Copilot licensing (MC1479517). The Copilot in SharePoint page says users must hold an active Microsoft 365 Copilot licence, that everyday capabilities are included with it at no extra cost, and that its included capabilities list "Create HTML, Word, Excel, or PowerPoint files" and "Create and edit pages, libraries, or lists". The page does not name HTML pages as a feature, so treat that as the closest published licence statement. No licence statement is published for uploading an `.html` file without Copilot.

**Meter.** Advanced work in Copilot in SharePoint consumes Copilot Credits through usage-based billing, set up with a spending policy in the Microsoft 365 admin center that includes **Advanced work in SharePoint**. Learn says credit consumption varies by task type, complexity and content volume. No credit rate specific to HTML page creation is published.

**Indirect cost.** Admin and communication time: author guidance, licence checks and, where needed, site-level settings. MC1479517 states that pages are stored per existing SharePoint storage and retention behaviour.

## Scope

**Users.** SharePoint authors who create, upload, edit, publish or share pages, and users with access to Copilot in SharePoint for HTML page creation (MC1479517). Everyday Copilot in SharePoint needs a Microsoft 365 Copilot licence.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and Web. Learn's Copilot in SharePoint page says Microsoft 365 Government (GCC, GCC High, DoD), Office 365 air-gapped cloud environments and Microsoft 365 operated by 21Vianet don't currently support Copilot in SharePoint.

**Rollout.** Public preview from early October 2026; general availability (Worldwide) from mid-November 2026 to late December 2026, per MC1479517. The notice sets no act-by date.

**Where it lives.** HTML pages are stored in the Site Pages library of the site.

## Governance guidance

### Before rollout
- Confirm which authors hold a Microsoft 365 Copilot licence, using Billing > Licenses in the Microsoft 365 admin center, because Copilot-assisted HTML page creation depends on Copilot licensing.
- Identify sites that should not offer Copilot entry points yet, such as sites under permission review, and decide whether to apply Restricted Content Discovery to them.
- Brief authors on what to attach to a prompt and what to publish, and that publishing does not grant new permissions.
- Update internal page-authoring guidance, and tell authors that the site-scoped Agent creation entry point is leaving the + New menu.

### At rollout
- Watch Message center for MC1479517 updates and for the Learn article it references.
- Test the + New > HTML page flow and an `.html` upload on a non-production site, using an account with a Copilot licence and one without.
- Check whether Restricted Content Discovery sites still show HTML page entry points, and record the result for your help desk.

### After rollout
- Review published HTML pages on sites that hold sensitive files, and compare each page's audience with the files it was built from.
- Review spending policies if authors report Copilot asking to spend credits during HTML page work.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence needed for Copilot-assisted HTML page creation</strong><br><small>User</small><br><small class="controls__note">Minimum role: License Administrator or User Administrator. Does not govern uploading an .html file.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a site shows Copilot entry points and takes part in Copilot discovery</strong><br><small>Site</small><br><small class="controls__note">Removes the Copilot button, AI actions menus and Create pages with AI on the site. Learn does not say it removes the HTML page entry or upload. Needs a Copilot licence and SharePoint Advanced Management.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Copilot licence controls who can use Copilot-assisted creation; it does not govern uploading an `.html` file. Restricted Content Discovery is a site-level setting: Learn says that when it is on, Copilot in SharePoint and AI actions don't appear on the site, and lists the Copilot button, AI actions menus and **Create pages with AI** as removed entry points. Learn does not say whether the **+ New** > **HTML page** entry or the upload path is also removed. Learn also describes it as designed as a temporary governance control and requires a Copilot licence and SharePoint Advanced Management for it.

Site owners have a **Site AI** panel (**Settings** > **Site AI**) that can hide the Copilot button on site pages for site visitors only. After 1 November 2026 Learn says to manage Copilot in SharePoint availability with Site AI settings and Restricted Content Discovery; the preview `KnowledgeAgent` PowerShell parameters are retiring. The Copilot in SharePoint page and MC1479517 describe no setting specific to HTML pages.

Learn names License Administrator or User Administrator as the minimum role to assign licences.

## Open questions

- Does Restricted Content Discovery, or the Site AI panel, remove the **+ New** > **HTML page** entry and the Site Pages upload on a site? Watch the Learn Restricted Content Discovery page.
- Is there a tenant-wide or per-site switch for HTML pages themselves, including upload without Copilot? Watch the Learn article that MC1479517 references.
- How does SharePoint handle scripts and other active content in uploaded or generated HTML, and do the custom script settings apply to it?
- Is Copilot-assisted HTML page creation an included everyday capability or advanced work billed in Copilot Credits, and does uploading HTML need a Copilot licence?
- Which date applies to your tenant: Learn's 30 September 2026 start for Copilot in SharePoint, or MC1479517's mid-November to late December 2026 general availability window?

<!-- rationale
risk: Medium. Authors can generate HTML pages from prompts and attached files and publish them with no admin step; existing permissions and site-level Copilot controls cover most, but not all, of the exposure.
cost: Low. Copilot-assisted creation depends on the Microsoft 365 Copilot licence users already hold, so the cost shown is admin and communication time; no credit rate specific to HTML pages is published.
impact: Medium. SharePoint authors and Copilot-licensed users see a new HTML page option in the + New menu and Copilot button; readers of published pages see only the page.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[0].note; Governance controls table and prose / licensing: The Microsoft 365 Copilot licence does not govern uploading an .html file. | Found: Searched: "SharePoint" "HTML pages" "upload" "license"; SharePoint HTML page creation Copilot Credits rate upload HTML license. Read MC1479517 and Copilot in SharePoint get-started; neither states that uploads are exempt from Copilot licensing. | Fix: Replace 'Does not govern uploading an .html file.' in controls[0].note and the rendered table with 'No licence statement specific to uploading HTML without Copilot is published.' Replace the first prose sentence under the table with 'The Copilot licence controls who can use Copilot-assisted creation; no licence statement specific to uploading HTML without Copilot is published.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Scope; rationale: cost / licensing: Everyday Copilot-assisted creation is included in an active Microsoft 365 Copilot licence. | Found: Users must have an active Microsoft 365 Copilot license. Everyday Copilot in SharePoint capabilities are included with this license at no extra cost, and no opt-in step is required. | Fix: Add before the Learn-derived licensing explanation: 'The cited Learn page still labels Copilot in SharePoint as public preview while describing its transition to general availability.' | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Restricted Content Discovery is at SharePoint admin center > Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot. | Found: In the SharePoint admin center, expand Sites and select Active sites. Select the site you want to configure. Open the Settings tab, and then turn Restrict content from Microsoft Copilot on. | Fix: Keep the cited path. Add: 'Microsoft's readiness guidance uses the alternative label Restrict content discovery > On for this setting.' Cite https://learn.microsoft.com/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management#step-3-prevent-accidental-oversharing, which says 'Under Restrict content discovery, select On.' | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks administrators to review spending policies, but the controls table has no spending-policy row. | Found: Review spending policies if authors report Copilot asking to spend credits during HTML page work. The controls table lists only Copilot licence assignment and Restricted Content Discovery. | Fix: Remove the 'Review spending policies if authors report Copilot asking to spend credits during HTML page work' checklist bullet; the spending-policy advice has no corresponding controls-table row.
-->
