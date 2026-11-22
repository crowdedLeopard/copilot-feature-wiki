---
title: "Microsoft Copilot: comment on a Page to ask Copilot questions or request edits"
slug: "m365-copilot-use-copilot-to-make-on-canvas-edits-on-pages"
roadmapId: 580449
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans comments on a Page that ask Copilot questions or request edits, with people and Copilot working together. Preview is targeted for November CY2026. No feature-specific admin switch is documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Copilot Pages requirements page lists a OneDrive licence (with an active OneDrive site) as the Copilot Pages licence. No licence, meter or charge specific to comment-driven edits is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["copilot-pages","m365-copilot","copilot","real-time","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 580449"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580449"
    kind: "roadmap"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Use eDiscovery with Copilot Pages"
    url: "https://learn.microsoft.com/microsoft-365/loop/copilot-pages-ediscovery?view=o365-worldwide"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-edits-on-a-page-are-highlighted-by-default","m365-copilot-build-interactive-reports-and-dashboards-with-pages","cloud-policy","ediscovery"]
controls:
  - governs: "Whether users can create and view Copilot Pages and Copilot Notebooks (existing control)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Not a switch for comment-driven edits; existing Pages stay editable by people with permission. Can be scoped to a group. API is the beta Tenant Configuration Management API; value takes 0 or 1."
  - governs: "Whether Copilot can be asked to edit a Page through comments"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-17T22:45:29"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; Microsoft Learn does not yet describe comment-driven edits, so the page rests on the roadmap text and the Copilot Pages admin pages."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 48 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 43
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "2cbb6c22039b45c690d1c30fa940678d"
---

## What's changing

The roadmap item states that Copilot would move into the flow of collaboration on a Page and not stay in the chat box. Users would leave comments on a Page to ask Copilot questions or request targeted edits, and people and Copilot would work across the Page while seeing each other's presence and changes.

The record does not name the product behind "Page". This briefing reads it as Copilot Pages (the shareable `.page` files that Microsoft Learn describes as collaborative canvases where users and Microsoft Copilot create and refine content together in real time). That reading is an assumption to confirm. Microsoft Learn does not yet describe comment-driven edits, so everything about how the feature behaves comes from the roadmap description.

The record lists the status as In development, with a preview targeted for November CY2026 and a target of December CY2026. The release phases are Preview and General Availability, the platform is the web and the cloud is Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not commitments, and the record was last fetched on 18 November 2026.

## Why it matters

This moves Copilot from a private chat into a shared document that several people can open. The roadmap text says Copilot would act on requests left as comments, which makes a Page a place where an AI edit can be requested by one person and seen by others. For a service owner the questions are who can ask Copilot to change a shared Page, whose permissions apply when it does, and how the change is reviewed. Microsoft has not said how any of these work.

Microsoft has not stated what happens on arrival, so base planning on the roadmap targets and on no source saying that existing behaviour changes. The controls you hold today are the Cloud Policy creation setting and whatever sharing rules apply to the Page files; neither is documented as specific to this feature.

## Risk assessment

**Data exposure**
- Comments and edits would sit on a shared Page, so anyone with access to the Page can see them. Learn says Copilot Pages are shareable files stored in a SharePoint Embedded container shared with Loop My workspace, so Page access follows the file's sharing and not a separate Copilot setting.
- Microsoft has not described what content Copilot reads when answering a comment. Confirm this before assuming it is limited to the Page itself.

**Security & identity**
- Microsoft has not described whose permissions Copilot uses when it applies a requested edit. Treat this as something to confirm, not as a given.
- Real-time features need WebSocket traffic allowed to `*.svc.ms` and `*.office.com`, which the Pages requirements page already lists for live editing and presence.

**Autonomy & actions**
- The roadmap says Copilot would make targeted edits requested in comments. Microsoft has not said whether an edit needs the requester's or another person's approval before it appears on the Page.
- Disabling the creation policy does not remove existing Pages: Learn says users can still view and edit existing items if they have permission. That policy is therefore not a way to stop edits to Pages that already exist.

**Change & support**
- Users who share Pages may see Copilot activity from colleagues' comments. Prepare a short note for Pages users on what comments to Copilot do, once Microsoft documents it.
- Existing Pages stay discoverable through search and Purview, and admins can export them, so edits made through comments fall inside the same discovery routes Learn describes for Pages.

## Cost and licensing

**Licence.** The Copilot Pages requirements page says users need a OneDrive licence and an active OneDrive site for Copilot Pages. It lists the Microsoft Copilot or Copilot Chat licence for Copilot Notebooks, not for Pages. No licence specific to comment-driven edits is published.

**Meter.** No meter, credit rate or charge specific to this feature is published at the time of writing (November 2026).

**Indirect costs.** Admin time to review the Cloud Policy setting and to brief Pages users. Storage for Pages counts toward your organisation's SharePoint quota, per the Copilot Pages admin page.

## Scope

The roadmap record lists the web as the only platform and Worldwide (Standard Multi-Tenant) as the only cloud. It lists Preview and General Availability as release phases; GCC, GCC High and DoD are not listed on the record.

Copilot Pages need a OneDrive licence and an active OneDrive site. Users with Exchange Online mailboxes get full functionality, including @mentions; users with Exchange on-premises mailboxes have limited capabilities, per the requirements page. Whether comment-driven Copilot edits have further prerequisites is not described yet.

The Cloud Policy setting that governs Pages creation can be scoped to all users or to a group.

## Governance guidance

### Before rollout
- Confirm that the roadmap's "Page" means Copilot Pages by watching the roadmap item and the Microsoft Learn Copilot Pages pages for a description of comment-driven edits.
- Check how the Cloud Policy setting **Create and view Copilot Pages and Copilot Notebooks** is set today, and who it applies to, using the first controls row.
- Confirm that WebSocket traffic to `*.svc.ms` and `*.office.com` is allowed on your network, as the requirements page lists for live editing and presence.

### At rollout
- Decide whether to leave Pages creation enabled for everyone or to scope it to a group; the setting affects creation and integration, and existing Pages stay editable by people with permission.
- Tell Pages users that comments may be used to ask Copilot questions or request edits once the feature reaches them, and ask them to report unexpected edits.
- Watch Message center for a notice that gives the rollout window and any default for this feature.

### After rollout
- Review a sample of shared Pages for Copilot-made edits and who requested them, once Microsoft documents how edits are attributed.
- Include Pages in eDiscovery and Purview searches where your policies require it; Learn says existing Pages are discoverable and exportable.
- Revisit this briefing when Learn publishes a page for the feature, and update the controls table if a feature-specific setting appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks (existing control)</strong><br><small>Tenant</small><br><small class="controls__note">Not a switch for comment-driven edits; existing Pages stay editable by people with permission. Can be scoped to a group. API is the beta Tenant Configuration Management API; value takes 0 or 1.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot can be asked to edit a Page through comments</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The one documented control is the Cloud Policy setting that governs creation and use of Copilot Pages and Copilot Notebooks. Its Learn page says that when creation is disabled, users cannot create new Pages or Notebooks, existing items are not deleted, and users can still view and edit existing items if they have permission. It is not documented as a switch for comment-driven Copilot edits.

The Graph row is a preview Tenant Configuration Management call. Learn lists a Copilot Pages and Notebooks resource with a `value` property where `0` disables and `1` enables the setting. The second row records that no feature-specific switch is documented at the time of writing (November 2026).

## Open questions

- Does Microsoft Learn describe comment-driven edits as Copilot Pages, and is "Page" in the roadmap item the same `.page` file? Watch the roadmap item and the Copilot Pages Learn pages.
- Which identity and permissions does Copilot use when it applies an edit requested in a comment, and can a requester ask for changes they could not make themselves?
- Is the feature on, off or opt-in when it arrives, and will Microsoft send a Message center notice with a rollout window?
- Will an admin setting separate from the creation policy control comment-driven Copilot edits, and will an audit event record them?
- Will comment-driven edits need a licence or meter beyond the OneDrive licence listed for Copilot Pages?

<!-- rationale
risk: Medium. Copilot would change a shared Page when asked in a comment; the only documented control is the existing Cloud Policy creation setting, which does not stop edits to existing Pages.
cost: Low. The only licence Learn names for Copilot Pages is a OneDrive licence with an active OneDrive site; no licence or meter specific to this feature is published, so the known cost is admin time.
impact: Medium. People who already use Copilot Pages on the web would notice a new way to work with Copilot; users who do not use Pages would not.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Scope; rationale: cost / licensing: Users need a OneDrive licence and an active OneDrive site for Copilot Pages. | Found: Users need a OneDrive license and an active OneDrive site. If a OneDrive site exists and the license is later removed, Copilot Pages continue to work. | Fix: Where the OneDrive requirement is stated, add: 'If a OneDrive site exists and the licence is later removed, Copilot Pages continue to work.' Keep the feature-specific licensing gap separate. Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements
- [unsupported, major] Risk assessment: Data exposure / behaviour: Anyone with access to the Page can see its comments and edits. | Found: Searched: Copilot Pages comments ask Copilot targeted edits permissions approval; Copilot Pages comments Copilot edits default permissions approval. Read cpcn-permission, copilot-pages-ediscovery and Get started with Microsoft Copilot Pages; none states comment visibility for every access level. | Fix: Replace the first sentence with: 'The roadmap describes people and Copilot working across the Page while seeing presence and changes.' Remove the universal claim about visibility of comments.
- [contradicted, blocker] Risk assessment: Data exposure / absence: Microsoft has not described what content Copilot reads when answering a comment. | Found: When Copilot operates on a Copilot Page, the Page is the grounding artifact for the interaction. | Fix: Replace the bullet with: 'Microsoft Learn says the Page is the grounding artifact when Copilot operates on a Copilot Page. Whether comment-driven requests can use additional content is not yet described; confirm that before assuming grounding is limited to the Page.' Cite https://learn.microsoft.com/microsoft-365/loop/copilot-pages-ediscovery?view=o365-worldwide. | Source: https://learn.microsoft.com/microsoft-365/loop/copilot-pages-ediscovery?view=o365-worldwide
- [contradicted, blocker] Governance controls; rationale: risk / absence: The creation Cloud Policy setting is the only documented governance control for Pages. | Found: Copilot Pages support Microsoft Purview sensitivity labels. Users can view or change a label by selecting the shield icon at the top of a Page, subject to their permissions and the organization's label policies. | Fix: Replace 'The one documented control is' with 'The existing availability control shown here is'. Replace the risk rationale with: 'Medium. Copilot would change a shared Page when asked in a comment; the existing Cloud Policy creation setting does not stop every route to editing existing Pages.' Do not claim that Pages have no other documented governance controls. | Source: https://learn.microsoft.com/microsoft-365/loop/copilot-pages-ediscovery?view=o365-worldwide
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Data exposure / applicability: Page access follows the file's sharing settings rather than a separate Copilot permission setting. | Found: Page Sharing: Grants access to a specific page (not the whole notebook) with options for edit or read-only access. The user can choose to use a company share link or people-specific share link, based on your organizational sharing settings. | Fix: Cite 'Overview of Copilot Pages and Copilot Notebooks permissions' at https://learn.microsoft.com/microsoft-365/loop/cpcn-permission?view=o365-worldwide for the sharing-permissions statement. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-permission?view=o365-worldwide
- [supported, minor] controls[0].note; Risk assessment; Governance controls; Governance guidance; rationale: risk / applicability: Disabling creation leaves existing items viewable and editable by people with permission, rather than stopping every route to editing. | Found: Users can still view and edit existing items if they have permission. | Fix: Add to controls[0].note: 'The Graph resource reference additionally says disabling the setting removes live access to view or edit shared Loop files in Copilot Chat.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type; do not imply all editing surfaces remain unchanged. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The setting is reached in Microsoft 365 Apps admin center via Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks. | Found: Select Customization from the left pane. Select Policy Management. Create a new policy configuration or edit an existing one. From the Choose the scope dropdown list ... In Configure Settings ... For Create and view Copilot Pages and Copilot Notebooks | Fix: Keep the path. Add https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy to sources: its 'Steps for creating a policy configuration' identifies config.office.com as the Microsoft 365 Apps admin center, while the cited feature page supplies the setting's steps. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [supported, minor] controls[0].api; Governance controls table and prose / command: POST /beta/admin/configurationManagement/configurationMonitors can apply the Pages and Notebooks setting. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. | Fix: Keep the method and path. Add to controls[0].note: 'Set mode to applyOnce; it defaults to monitorOnly. The baseline resource is microsoft.copilot.copilotpagesnotebooks, resourceVersion 1, with properties.value set to "0" or "1".' The resource and values are documented at https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: Every governance-checklist control to check or configure appears in the controls table. | Found: Checklist: 'Confirm that WebSocket traffic ... is allowed on your network'; 'Include Pages in eDiscovery and Purview searches'. Table: Pages creation policy and undocumented comment-edit switch only. | Fix: The WebSocket/firewall check and the eDiscovery search-scope check have no table rows. Remove those two checklist bullets to satisfy the table-consistency rule without adding unverified control rows; keep their supported factual descriptions elsewhere.
-->
