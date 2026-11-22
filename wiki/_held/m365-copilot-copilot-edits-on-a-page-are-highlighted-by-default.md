---
title: "Microsoft Copilot: Copilot edits on a Page are highlighted by default"
slug: "m365-copilot-copilot-edits-on-a-page-are-highlighted-by-default"
roadmapId: 509112
topic: "m365-copilot"
products: ["Microsoft 365 app","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to highlight changes Copilot makes when editing a Page on the web, on by default, so users can review them. No admin switch for the highlighting is documented, and no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The Copilot Pages requirements page lists a OneDrive licence (with an active OneDrive site) as the licence for Copilot Pages. No licence or charge specific to highlighting is published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["copilot-pages","m365-copilot","copilot","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 509112"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=509112"
    kind: "roadmap"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-storage"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
videos: []
related: ["cloud-policy","m365-copilot-copilot-can-edit-your-document-by-default-in-word"]
controls:
  - governs: "Whether users can create and view Copilot Pages and Copilot Notebooks (existing control, not a switch for highlighting)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Covers creation and integration only; existing Pages stay viewable and editable. Can be scoped to groups. Office Apps Administrator is the recommended role."
  - governs: "Whether Copilot edits on a Page are highlighted"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-10-31T22:00:11"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; Microsoft Learn does not yet describe the highlighting, so the page rests on the roadmap text and the Copilot Pages admin pages."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 46
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "27b9dd0011617063a19b2ed565e00632"
---

## What's changing

The roadmap item states that when a user uses Copilot to edit a Page, the changes will be highlighted by default, to make it easier to review and confirm the edits. The roadmap record lists the web as the only platform, Worldwide (Standard Multi-Tenant) as the only cloud and General Availability as the release phase.

The record does not name the product behind "a Page". This briefing reads it as Copilot Pages (the `.page` files that Microsoft Learn documents for the Microsoft Copilot app), which is an assumption to confirm. Microsoft Learn does not yet describe the highlighting itself, so everything about how it looks or behaves comes from the one-sentence roadmap description. The record does not say whether users can turn the highlighting off, or how a user confirms or rejects an edit.

The record lists the status as In development with a target of November CY2025. That month has passed (today is 22 November 2026) and the record, last fetched 13 November 2026, still shows In development, so treat the date as a target that has slipped or a record that is out of date, and check the roadmap item before you plan around it.

## Why it matters

This is a small change to how people review AI edits, and it arrives on by default according to the roadmap description. For a service owner the practical effect is support and communication: users editing Pages with Copilot would see a new highlight on changed text, and some will ask what it means or how to clear it. Microsoft has not said how to clear it, so give your help desk nothing more than the roadmap wording until Learn describes it.

It does not touch your data boundaries as far as the sources say. If nobody acts, the roadmap description says the highlighting is on; there is no admin step that gates it. Plan a short note to Copilot Pages users rather than a configuration project.

## Risk assessment

**Data exposure**
- No change stated: the roadmap describes how edits are shown, not what Copilot can read. Copilot Pages are stored in OneDrive for Business, and the existing creation policy (see the controls table) does not remove access to existing Pages.

**Security & identity**
- No change stated: the record mentions no new permissions or sign-in behaviour.

**Autonomy & actions**
- Highlighting makes Copilot's edits easier to spot, which supports review; the record does not say Copilot edits Pages automatically or without a request from the user.

**Change & support**
- A default-on visual change on the web can prompt questions. No setting specific to highlighting is documented at the time of writing (November 2026), so the only admin lever is the Cloud Policy creation setting, which governs creation and integration of Pages and not how edits are displayed.
- The record's target of November CY2025 has passed while the status is In development, so rollout timing is unclear; watch Message center for a notice.

## Cost and licensing

The Copilot Pages requirements page states that users need a OneDrive licence and an active OneDrive site for Copilot Pages; if a OneDrive site exists and the licence is later removed, Copilot Pages continue to work. Microsoft's pages read for this briefing publish no separate licence, meter or charge for highlighting Copilot edits, and the roadmap record states none.

Pages created since November 2025 are stored in OneDrive for Business and count against the user's OneDrive storage limit, per the Copilot Pages storage page. Indirect cost is the admin and training time for a short user notice. Whether Copilot's edit capability itself needs a Microsoft Copilot licence for Pages is not stated on the requirements page, which lists a Microsoft Copilot or Copilot Chat licence only for Copilot Notebooks.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and the web as the platform; it lists no other cloud or platform. That is a record fact, not a statement that other clouds are excluded.

The products in the record are the Microsoft 365 app and Microsoft Copilot (Microsoft 365). Users in scope are those who edit a Page with Copilot. For Copilot Pages, the requirements page lists a OneDrive licence, an active OneDrive site and, for full features such as @mentions, an Exchange Online mailbox. The roadmap record names no rollout mechanism, channel or prerequisite for the highlighting.

## Governance guidance

### Before rollout
- Confirm with the roadmap item and Message center whether the Page in this item is Copilot Pages, and whether the rollout has started, since the November CY2025 target has passed.
- Identify who uses Copilot Pages by checking OneDrive licensing and the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks (see the controls table).
- Draft a short note for those users saying that Copilot's edits to a Page are planned to appear highlighted by default.

### At rollout
- Watch Message center for a notice that gives a rollout window or an act-by date, and add it to your change calendar.
- Brief the help desk with the roadmap wording only, and avoid describing how to dismiss or turn off highlights until Microsoft documents it.

### After rollout
- Check on the web that edits Copilot makes to a Page are highlighted, and record what users see and whether they can clear it.
- Re-read the Copilot Pages admin policies page for a new setting covering highlighting, and add a control row if one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks (existing control, not a switch for highlighting)</strong><br><small>Tenant</small><br><small class="controls__note">Covers creation and integration only; existing Pages stay viewable and editable. Can be scoped to groups. Office Apps Administrator is the recommended role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot edits on a Page are highlighted</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented control that touches this area is the Cloud Policy setting for creation of Copilot Pages and Copilot Notebooks. It governs creation and integration; Learn says existing Pages are not deleted and users can still view and edit existing items if they have permission. It is therefore not a way to switch off highlighting.

The Cloud Policy overview lists Office Apps Administrator as the recommended role for managing it, and the Copilot Pages policy page says a change can take up to 90 minutes to be reflected where policy configurations already exist, or up to 24 hours where none did. No setting for the highlighting itself is documented at the time of writing (November 2026).

## Open questions

- Is "a Page" in this item Copilot Pages in the Microsoft Copilot app, or another Page surface? Watch the roadmap item and the Copilot Pages Learn pages.
- Can users or admins turn the highlighting off, and is there an admin setting? Watch the Copilot Pages admin policies page.
- Does the highlighting need a Microsoft Copilot licence beyond the OneDrive licence Learn lists for Copilot Pages? Watch the Copilot Pages requirements page.
- When will it roll out, given the November CY2025 target has passed? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. The roadmap describes a visual cue on edits Copilot makes to a Page; it states no new data access, no new actions and no change to who can edit.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a separate licence or charge for highlighting.
impact: Medium. People who edit Pages with Copilot on the web would see edits highlighted without choosing it; admins are not asked to do anything.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table / absence: No API or automation for the Pages and Notebooks creation control is documented. | Found: The 20 Copilot resources are Office Cloud Policy Service (OCPS) settings. TCM supports these settings only in tenant-level policies in the Microsoft 365 Apps admin center. | Fix: Set controls[0].api.kind to 'graph', call to 'POST /beta/admin/configurationManagement/configurationMonitors', and docs to 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Add to its note: 'Preview TCM automation uses mode=applyOnce and an inline baseline resource of type microsoft.copilot.copilotpagesnotebooks, resourceVersion 1, with properties.value set to the string "0" to disable or "1" to enable. It supports tenant-level policies only and fails if this setting is configured in a group-level policy. It requires delegated ConfigurationMonitoring.ReadWrite.All for the calling app, delegated CopilotPolicySettings.ReadWrite for the TCM service principal, and AI Administrator for the signed-in user.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources as well. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Copilot Pages are stored in OneDrive for Business without a qualification for older Pages. | Found: Copilot Pages and Copilot Notebooks created before November 2025 continue to be stored in the user-owned SharePoint Embedded container. These legacy Copilot Pages and legacy Copilot Notebooks haven't moved to OneDrive for Business. | Fix: Replace 'Copilot Pages are stored in OneDrive for Business' with 'The storage page says Pages created since November 2025 are stored in OneDrive for Business; older Pages remain in SharePoint Embedded.' | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-storage
- [contradicted, blocker] Risk assessment: Change & support; Governance controls / applicability: The Cloud Policy creation setting is the only documented admin control touching the Copilot Pages area. | Found: Code previews in Copilot Chat and Copilot Pages | Cloud Policy: Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages | Enabled | Fix: Replace 'the only admin lever is the Cloud Policy creation setting' with 'the table shows the existing Cloud Policy creation setting'. Replace 'The only documented control that touches this area is the Cloud Policy setting for creation of Copilot Pages and Copilot Notebooks' with 'The table shows the Cloud Policy setting for creation of Copilot Pages and Copilot Notebooks'. Do not claim that other Pages controls are absent. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / behaviour: Pages created since November 2025 are stored in OneDrive for Business. | Found: Pages and Notebooks are stored in OneDrive for Business | Fix: Add after the storage paragraph: 'Microsoft's cited requirements and admin-policy pages still describe Pages as stored in SharePoint Embedded and charged against the organisation's SharePoint quota, whereas the storage page distinguishes pre-November 2025 legacy Pages from newer Pages.' | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-storage
- [contradicted, minor] front matter: impact; rationale: impact / consistency: A default-on change that users see without choosing it is rated medium impact. | Found: impact: medium; 'People who edit Pages with Copilot on the web would see edits highlighted without choosing it'; assessment scale: high includes 'a change to default behaviour'. | Fix: Set impact to 'high' and replace the impact rationale with 'High. The roadmap describes a change to default behaviour: edits made with Copilot on the web are planned to be highlighted without users choosing it.'
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks administrators to check OneDrive licensing, but the controls table has no licence-assignment row. | Found: 'Identify who uses Copilot Pages by checking OneDrive licensing and the Cloud Policy setting'; the table contains only the Pages creation policy and the highlighting-setting gap. | Fix: Remove 'OneDrive licensing and' from that checklist bullet so it refers only to the Cloud Policy setting already represented in the table.
-->
