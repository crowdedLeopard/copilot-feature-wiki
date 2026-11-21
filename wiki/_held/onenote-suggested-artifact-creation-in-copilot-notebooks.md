---
title: "OneNote: Copilot Notebooks suggest artifacts to create"
slug: "onenote-suggested-artifact-creation-in-copilot-notebooks"
roadmapId: 566870
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Notebooks in OneNote now suggest Word, Excel and PowerPoint files to create from notebook content and Microsoft 365 context. On by default for eligible users; no admin action is required and no switch for the suggestions is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "August CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn's requirements page says users need the Microsoft Copilot or Copilot Chat licence for Copilot Notebooks; Microsoft's notice MC1411727 names Microsoft 365 Copilot (Premium). No price or meter specific to artifact suggestions is documented at the time of writing (November 2026)."
audiences: ["m365-admin","change-adoption","security"]
tags: ["copilot-notebooks","m365-copilot","onenote","cloud-policy","excel","word","powerpoint","document-generation"]
sources:
  - title: "Microsoft 365 Roadmap 566870"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566870"
    kind: "roadmap"
  - title: "MC1411727: (Updated) Copilot Notebooks: Suggested artifacts for faster content creation"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1411727"
    kind: "message-center"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements?view=o365-worldwide"
    kind: "learn"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration?view=o365-worldwide"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-windows","m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content","m365-copilot-structured-document-generation-with-forms","copilot-credits"]
controls:
  - governs: "Whether users can create and use Copilot Pages and Copilot Notebooks"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Setting: Create and view Copilot Pages and Copilot Notebooks, default Enabled; covers Notebooks as a whole. API is preview: applyOnce mode, resource microsoft.copilot.copilotpagesnotebooks, tenant-level policies only."
  - governs: "Who holds the licence Copilot Notebooks need"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Requires at least the License Administrator or User Administrator role. Which product to choose follows the licence named on Learn's requirements page."
  - governs: "A separate switch for suggested artifacts"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1411727 says no new administrative controls are described."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-21T00:31:46"
changes:
  - date: "2026-11-21"
    note: "First briefing: Copilot Notebooks in OneNote suggest Word, Excel and PowerPoint artifacts; on by default, with no separate admin switch documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 77
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "83ce6d0bab5edd1a0f7f81211c259b7b"
---

## What's changing

Copilot Notebooks in OneNote now suggest artifacts for a user to create: Word documents, Excel workbooks and PowerPoint presentations. The roadmap item says the suggestions are based on Microsoft 365 knowledge and the content in the notebook, and that selecting a suggestion makes Copilot generate the artifact.

Microsoft's notice MC1411727 adds that suggestions are generated from notebook references, pages and Microsoft 365 context, that users can generate content from pre-populated prompts that include relevant notebook information, and that support for further artifact types, including PDFs and Pages, is planned for a future release. The notice says the feature is available by default for eligible users and that no admin configuration is required.

The roadmap record lists the feature as Launched, with a preview target of July CY2026 and a general availability target of August CY2026, for Desktop and Web in the Worldwide (Standard Multi-Tenant) cloud. MC1411727 (last updated 2026-10-16, end date 2026-12-14, no act-by date) gives Public Preview as beginning in early July 2026 and finishing by late August 2026, and General Availability as beginning in late August 2026 (previously late July) and expected to finish by early November 2026 (previously late September). Microsoft Learn has no page for this feature itself at the time of writing (November 2026), so the behaviour above is the roadmap's and the notice's description.

## Why it matters

This is a new AI-driven prompt to users that arrives without an admin choosing it. Microsoft's notice says it introduces additional AI-driven processing of existing customer data to decide which artifacts to recommend, and that no new administrative controls are described. For a service owner the practical change is more generated Word, Excel and PowerPoint files, created from notebook material, in the hands of every user who has Copilot Notebooks.

If nobody acts, the notice says users who are eligible get the suggestions by default. Plan for the support and training load now: Microsoft recommends reviewing user-facing communications, informing help desk teams and updating training and adoption materials.

## Risk assessment

**Data exposure**
- Suggestions use notebook references, pages and the user's Microsoft 365 context (MC1411727). The generated artifact is built from the same notebook material, so a notebook that mixes sensitive and general sources can lead to a suggested file that draws on both. Review what users add to notebooks before relying on the suggestions.
- Copilot Notebooks are stored in a user-owned SharePoint Embedded container that appears with the application name `Loop` in the SharePoint admin center, PowerShell and Purview audit data, so audit and storage queries for this feature are not separable from Loop.

**Security & identity**
- The notice says the feature appears available to users who already have permission to create artifacts in Copilot Notebooks. It does not describe a separate permission model for the suggestions.

**Autonomy & actions**
- The user selects a suggestion before Copilot generates the artifact, per the roadmap description. The notice says users remain in control of whether they use suggested artifacts, but does not say whether the recommendation experience can be switched off by an individual user.

**Change & support**
- The notice names PDFs and Pages as future artifact types, so the suggestion list is expected to change after this release.
- The only documented lever is the Cloud Policy setting that governs Copilot Pages and Copilot Notebooks creation, which is broader than this feature: when creation is disabled, users are unable to create new Pages or Notebooks and the Notebooks module is hidden in the Microsoft Copilot app.

## Cost and licensing

Learn's requirements page says Copilot Notebooks need the Microsoft Copilot or Copilot Chat licence; its summary table lists the Copilot Notebooks licence as a Microsoft Copilot licence. Microsoft's notice MC1411727 says the affected organisations are those licensed for Microsoft 365 Copilot (Premium) with access to Copilot Notebooks. The two pages word the licence differently; use the notice and the requirements page together when checking who is covered.

The pages read name no separate licence, add-on, meter or credit rate for artifact suggestions, and the requirements page lists no meter for Copilot Notebooks. A rate specific to this feature is not yet published. Notebook files count against the organisation's SharePoint quota, because Copilot Notebooks are stored in a user-owned SharePoint Embedded container.

The indirect costs the notice points to are user communication, help desk briefing and training updates.

## Scope

The roadmap record lists Desktop and Web, and the Worldwide (Standard Multi-Tenant) cloud. Microsoft's notice says the people affected are users who can currently create artifacts within Copilot Notebooks and organisations licensed for Microsoft 365 Copilot (Premium) with access to Copilot Notebooks. The supported artifact types are Word, Excel and PowerPoint.

Users need the licence described under Cost and licensing. For full Copilot Notebooks functionality, Learn lists an Exchange Online mailbox for @mentions and says that Copilot Pages and Notebooks are not created for people whose OneDrive creation has been disabled. The Cloud Policy setting for Pages and Notebooks creation applies to all users or to the groups chosen in the policy's scope.

## Governance guidance

### Before rollout
- Confirm which users hold the Microsoft Copilot or Copilot Chat licence that Learn lists for Copilot Notebooks, using the licence row in the controls table.
- Decide whether the existing Cloud Policy setting for Copilot Pages and Copilot Notebooks creation should stay Enabled for all users, a group, or nobody, knowing it does not target the suggestions alone.
- Brief help desk teams on the new suggestions in Copilot Notebooks, as Microsoft's notice recommends.

### At rollout
- Update user-facing communications and training so people know that selecting a suggestion makes Copilot generate a Word, Excel or PowerPoint file.
- Check that group-scoped Cloud Policy configurations are in the priority order you intend, because the highest priority applies when a user is in several groups.
- Allow up to 90 minutes for a Cloud Policy change to reach users when other policy configurations already exist, and up to 24 hours when none did.

### After rollout
- Watch Message center and the Learn admin policies page for a setting that controls artifact suggestions on their own.
- Review the files users generate from notebooks with your usual Purview audit and retention routines, remembering that the container shows as `Loop`.
- Update training again when PDF and Pages support is added, as the notice says it will be.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and use Copilot Pages and Copilot Notebooks</strong><br><small>Group</small><br><small class="controls__note">Setting: Create and view Copilot Pages and Copilot Notebooks, default Enabled; covers Notebooks as a whole. API is preview: applyOnce mode, resource microsoft.copilot.copilotpagesnotebooks, tenant-level policies only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the licence Copilot Notebooks need</strong><br><small>User</small><br><small class="controls__note">Requires at least the License Administrator or User Administrator role. Which product to choose follows the licence named on Learn's requirements page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate switch for suggested artifacts</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1411727 says no new administrative controls are described.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Cloud Policy setting governs Copilot Pages and Copilot Notebooks creation and integration as a whole. Learn does not state what it does to the artifact suggestions in a notebook that already exists. When creation is disabled, existing Pages and Notebooks are not deleted, users can still view and edit existing items if they have permission, and sharing links to Copilot Notebooks do not work. It needs the Office Apps Administrator role (recommended), Security Administrator or Global Administrator.

The Graph route is a preview Tenant Configuration Management API and works only on tenant-level policies in the Microsoft 365 Apps admin center; it fails for a setting configured in a group-level policy there. The row for artifact suggestions is empty because Microsoft's notice says no new administrative controls are described.

## Open questions

- Does the Cloud Policy setting *Create and view Copilot Pages and Copilot Notebooks* stop suggestions in notebooks that already exist, or only creation of new ones? Watch the Learn admin policies page for Copilot Pages and Copilot Notebooks.
- Will Microsoft add a setting that turns off suggested artifacts without disabling Copilot Notebooks? Microsoft's notice says no new administrative controls are described; watch Message center for an update to MC1411727.
- Is recommendation activity visible in audit, reporting or compliance experiences? The notice says it does not specify this.
- Which licence entitles a user: the Microsoft Copilot or Copilot Chat licence on Learn's requirements page, or Microsoft 365 Copilot (Premium) as the notice words it? Watch the requirements page.
- Does generating an artifact from a suggestion draw on Copilot Credits or any other meter? None is documented at the time of writing (November 2026).

<!-- rationale
risk: Medium. The suggestions come from AI processing of notebook content and Microsoft 365 context and are on by default, while Microsoft's notice describes no new admin control; the documented lever is the tenant-wide Cloud Policy for Copilot Notebooks creation.
cost: Low. Learn names the Microsoft Copilot or Copilot Chat licence users need for Copilot Notebooks, and no meter or rate for artifact suggestions is documented, so the known cost is communication, training and help-desk time.
impact: Medium. Users who can use Copilot Notebooks see new suggestions inside the notebook, and Microsoft's notice asks administrators to brief help desk teams and update training.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Change & support / applicability: Cloud Policy for Copilot Pages and Copilot Notebooks creation is the only documented governance lever. | Found: Conditional Access: Only applies at the app level. ... applies to the entire app at m365.cloud.microsoft. ... Retention policies ... are enforced for all Copilot Pages and Copilot Notebooks. | Fix: Replace 'The only documented lever is the Cloud Policy setting' with 'The documented Cloud Policy setting'. Keep the remainder of the sentence; do not imply that Microsoft documents no other governance controls. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary?view=o365-worldwide
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Audit and storage queries for this feature are not separable from Loop. | Found: There's no separate Copilot Pages or Copilot Notebooks application filter. | Fix: Replace 'so audit and storage queries for this feature are not separable from Loop' with 'so there is no separate Copilot Pages or Copilot Notebooks application filter'. This preserves the documented limitation without implying that other audit filters are unavailable. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements?view=o365-worldwide
- [supported, minor] controls[0].ui / admin-path: The Microsoft 365 Apps admin center path ends at Configure Settings after Customization, Policy Management and the creation wizard. | Found: Under Customization, select Policy Management. ... On the Policy configurations page, select Create. ... On the Configure Settings page, select the policies that you want to include in the policy configuration. | Fix: Extend controls[0].ui.path to 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks'. Cite the existing admin policies source for the final setting. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] controls[0].api / command: POST /beta/admin/configurationManagement/configurationMonitors can apply the Copilot Pages and Notebooks policy in applyOnce mode. | Found: Create a new configurationMonitor ... applies a desired-state baseline once in applyOnce mode. ... POST /admin/configurationManagement/configurationMonitors | Fix: Keep the call. Add to controls[0].note: 'Set mode to applyOnce and set baseline.resources[].properties.value for microsoft.copilot.copilotpagesnotebooks to "0" to disable or "1" to enable.' The value property is documented at https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] Governance guidance: After rollout / applicability: Purview audit and retention routines can be used for Copilot Notebooks content. | Found: This article covers Purview integration for SharePoint Embedded containers used by Copilot Pages, Copilot Notebooks, and Loop workspaces. ... All SharePoint Embedded containers are targeted using the "All SharePoint Sites" scope in Microsoft Purview. | Fix: Add https://learn.microsoft.com/microsoft-365/loop/purview-management?view=o365-worldwide to sources to support the existing advice about auditing and retention. | Source: https://learn.microsoft.com/microsoft-365/loop/purview-management?view=o365-worldwide
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist asks administrators to review audit and retention routines without corresponding control rows. | Found: Review the files users generate from notebooks with your usual Purview audit and retention routines ... Table rows: Pages and Notebooks creation; licence holders; separate artifact switch. | Fix: Remove the After rollout bullet beginning 'Review the files users generate from notebooks with your usual Purview audit and retention routines'; the checklist names audit and retention controls that have no table rows.
- [contradicted, minor] front matter: action / consistency: The action rating is prepare despite a launched, on-by-default change rated medium risk. | Found: status: "launched"; defaultState: "on"; risk: "medium"; action: "prepare"; Plan for the support and training load now | Fix: Set action to 'act-now': the change is launched, reaches eligible users without admin action, has medium risk, and the page identifies a control decision and communications to complete now.
-->
