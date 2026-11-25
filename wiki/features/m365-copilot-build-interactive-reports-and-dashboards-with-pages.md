---
title: "Microsoft Copilot: build interactive reports and dashboards with Pages"
slug: "m365-copilot-build-interactive-reports-and-dashboards-with-pages"
roadmapId: 580445
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans interactive reports and dashboards in Copilot Pages, with preview targeted for November 2026 and general availability for December 2026. No Learn page covers it yet; existing Pages controls may apply."
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
  notes: "Copilot Pages require a OneDrive licence and an active OneDrive site. No licence specific to the new reports and dashboards option is yet published."
audiences: ["m365-admin","service-owner","security","compliance"]
tags: ["m365-copilot","copilot-chat","copilot-pages","cloud-policy","sensitivity-labels","microsoft-graph","agents"]
sources:
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-storage"
    kind: "learn"
  - title: "Summary of governance, lifecycle, and compliance capabilities for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 580445"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580445"
    kind: "roadmap"
videos: []
related: ["m365-copilot-session-and-response-sharing-in-m365-copilot"]
controls:
  - governs: "Whether users can create and view Copilot Pages"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center (Cloud Policy)"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "The creation policy governs creation and integration of Pages and Notebooks. Preview, tenant-level only. Body: mode=\"applyOnce\", inline baseline, resourceType microsoft.copilot.copilotpagesnotebooks, properties.value \"0\" or \"1\"."
  - governs: "Whether Copilot runs AI-generated code previews in Copilot Chat and Copilot Pages"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center (Cloud Policy)"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Governs AI-generated code previews in Copilot Chat and Copilot Pages; whether the new interactive elements use code previews is not stated. The TCM Copilot resource list has no code-preview resource (November 2026)."
  - governs: "Tenant-wide switch for the new interactive reports and dashboards capability"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no separate setting at the time of writing (November 2026); the roadmap item names none."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-25"
roadmapModified: "2026-11-17T22:45:29"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap plan for interactive reports and dashboards in Copilot Pages, with the existing Pages controls and what is not yet confirmed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: the Graph row now gives the configurationMonitors call with the Copilot Pages resource in the note; added the storage and Notebooks licence disagreements; removed four checklist items that had no controls row."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Correction: stated that labelling and Pages prerequisites are documented for Copilot Pages generally, set licensing to the OneDrive licence Learn lists, simplified the Graph call, and removed the caveat that existing Pages policies may not apply."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 83 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 83
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "570163b962c7a768105577cc4784e763"
---

## What's changing

The roadmap item describes a way to turn ideas and source material into interactive reports and dashboards with Pages. A user starts with a prompt and brings content, visuals, charts and interactive elements together in one shareable Page, where they work with collaborators and agents. The text also says users can edit content on the Page directly, like any other Microsoft 365 file.

Microsoft Learn does not describe this capability yet, so what follows about its behaviour is the roadmap's description. Learn does document Copilot Pages as they exist today: an interactive, shareable canvas in Microsoft 365 Copilot Chat designed for multiplayer AI collaboration.

The roadmap record lists the item as In development, with a preview target of November CY2026 and a general availability target of December CY2026. These are Microsoft's targets, not shipped dates. The record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, and its release phases are General Availability and Preview.

## Why it matters

Pages moves from a shared scratchpad towards a place where reports and dashboards are assembled and shared, so the content may be more consequential than a pasted chat answer. Microsoft has not stated what happens on arrival, so plan on no source saying existing behaviour changes, and check the Pages controls you already have.

The practical view: Learn documents a Cloud Policy switch for Copilot Pages that is Enabled by default, plus Purview support for the files Pages create. Decide before the December CY2026 target whether your organisation wants dashboards built from organisational data to be shareable by link, and who should be able to create them.

## Risk assessment

**Data exposure**

- The roadmap says users bring source material together on a Page and share it. Learn says existing Copilot Pages are stored in OneDrive for Business, and that sensitivity labels are available for Copilot Pages and DLP rules are enforced with policy tips. Learn documents sensitivity labels for Copilot Pages across storage types; its storage pages disagree as described below.
- Learn says retention policies configured for all SharePoint sites are enforced for Copilot Pages and Copilot Notebooks, and that Purview eDiscovery and audit search cover them. Check that these reach dashboards once they appear.

**Security & identity**

- Learn says Conditional Access applies to the whole Microsoft Copilot app, not to Pages separately, and that Information Barriers are not supported for content in SharePoint Embedded containers, which is where Pages created before November 2025 remain. If you rely on Information Barriers, confirm where new reports are stored.
- The roadmap says collaborators and agents work on the Page. Microsoft has not described which agents, under whose identity, or with what permissions.

**Autonomy & actions**

- Learn describes a separate Cloud Policy setting for AI-generated code previews in Copilot Chat and Copilot Pages, including lightweight apps. Microsoft has not said whether interactive elements in the new Pages rely on it.
- The roadmap does not say whether agents can change a Page without a person approving the edit.

**Change & support**

- Learn says that without Loop components enabled, Copilot Pages are only interactive within the Microsoft Copilot app and supported chat experiences, so a dashboard shared into Teams or Outlook may not behave as users expect.
- Learn says Cloud Policy changes can take up to 90 minutes to apply when policy configurations already exist, and up to 24 hours when none did. A policy change made on the day of rollout may not take effect immediately.

## Cost and licensing

Copilot Pages require a OneDrive licence and an active OneDrive site. No licence specific to the new reports and dashboards option is yet published. The Learn requirements page also says that if the licence is later removed from a user with an existing OneDrive site, Copilot Pages continue to work. Copilot Notebooks need a Microsoft Copilot or Copilot Chat licence on the same page. The cited Tenant Configuration Management reference instead says Copilot Notebooks also require a Microsoft 365 Copilot license (https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type).

No meter or Copilot Credits rate is documented for Pages at the time of writing (November 2026). Learn says Pages are stored in OneDrive for Business and count against the user's OneDrive storage limit; Pages created before November 2025 stay in a user-owned SharePoint Embedded container that counts against the organisation's SharePoint storage quota. Expect admin time for policy and communications as the indirect cost.

Microsoft's cited pages disagree: the storage overview says current Pages use OneDrive for Business and the user's OneDrive quota, while the admin policies, requirements and compliance summary pages describe Pages as using a user-owned SharePoint Embedded container and the organisation's SharePoint quota. These are https://learn.microsoft.com/microsoft-365/loop/cpcn-storage, https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration, https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements and https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; no other cloud is listed. Not listed for GCC, GCC High or DoD on the roadmap item is a record fact, not a statement that the feature is unavailable there.

Who receives it, and whether it arrives on by default, is not stated. For existing Copilot Pages, Learn says a OneDrive site is required, that creation is blocked for people whose OneDrive creation is disabled, and that Exchange Online mailboxes are needed for full functionality including @mentions. Network requirements include WebSocket traffic to `*.svc.ms` and `*.office.com` for real-time collaboration. These are the published requirements for Copilot Pages; no additional prerequisite specific to the new reports and dashboards option was found.

## Governance guidance

### Before rollout

- Check the current value of the Cloud Policy setting **Create and view Copilot Pages and Copilot Notebooks** and which groups it targets (first row of the controls table). Learn gives its default as Enabled.
- Ask Microsoft through your account team, and watch Message center, whether the new interactive elements depend on the code-preview setting.

### At rollout

- Test the preview with a pilot group using the two-group pattern Learn describes in Cloud Policy (a group set to Enabled at lower priority number, with All users set to Disabled), if you want it limited to a subset.
- Check that the **Enable code previews for AI-generated content** setting reflects your intent, since Microsoft has not said whether the new Pages depend on it.
- Allow for the up to 90 minutes or 24 hours Learn gives for Cloud Policy changes to apply.

### After rollout

- Update your open questions list when Microsoft publishes a Learn page for the capability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages</strong><br><small>User</small><br><small class="controls__note">The creation policy governs creation and integration of Pages and Notebooks. Preview, tenant-level only. Body: mode=&quot;applyOnce&quot;, inline baseline, resourceType microsoft.copilot.copilotpagesnotebooks, properties.value &quot;0&quot; or &quot;1&quot;.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center (Cloud Policy)</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot runs AI-generated code previews in Copilot Chat and Copilot Pages</strong><br><small>User</small><br><small class="controls__note">Governs AI-generated code previews in Copilot Chat and Copilot Pages; whether the new interactive elements use code previews is not stated. The TCM Copilot resource list has no code-preview resource (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center (Cloud Policy)</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the new interactive reports and dashboards capability</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no separate setting at the time of writing (November 2026); the roadmap item names none.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both Cloud Policy settings in the table are documented for Copilot Pages. The creation policy governs creation and integration of Copilot Pages and Copilot Notebooks. The code-preview policy governs AI-generated code previews in Copilot Chat and Copilot Pages; whether the new interactive elements use code previews is not stated.

Learn says disabling creation does not delete existing Pages: users can still view and edit existing items if they have permission. The TCM reference gives a narrower Copilot Chat result: "When disabled, Copilot Chat doesn't provide live access to view or edit shared Loop files" (https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type). To prevent the shared user-owned container from being created, Learn says to disable both the Copilot Pages and Copilot Notebooks policy and the Loop **Create Loop workspaces in Loop** policy for the same user. The Graph row is a preview Tenant Configuration Management call; Learn says TCM supports these settings only in tenant-level policies in the Microsoft 365 Apps admin center, and the target setting must not be configured in any group-level policy.

For the Graph row, the calling app needs delegated ConfigurationMonitoring.ReadWrite.All, the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs AI Administrator, which Learn names as the least-privileged role for remediation and applyOnce. The baseline resources array uses resourceType microsoft.copilot.copilotpagesnotebooks, resourceVersion 1 and properties.value "0" to disable or "1" to enable; see https://learn.microsoft.com/graph/utcm-copilot-resources.

Purview retention, sensitivity labels and DLP are covered for Copilot Pages on the compliance summary page: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary. Their admin paths are not repeated here.

## Open questions

- Does any licence or meter specific to the new reports and dashboards apply beyond the OneDrive licence Learn lists for Copilot Pages? Not yet published; watch Message center and the Learn requirements page.
- Which agents can work on a Page, under whose identity, and can they change content without a person approving? Not stated on the roadmap item.
- Is the capability on by default for users who already have Copilot Pages, and who receives the November CY2026 preview? Not stated.
- Do the new interactive elements depend on the AI-generated code previews setting?

<!-- rationale
risk: Medium. Pages can combine source material, charts and collaborator and agent edits; existing Pages are covered by Cloud Policy, labels and retention, and Microsoft has not stated what happens on arrival.
cost: Low. Learn lists a OneDrive licence for Copilot Pages; no licence specific to the new capability is yet published, and the only other cost the sources show is admin time and storage.
impact: Medium. People who create or share Pages in Microsoft 365 Copilot Chat would notice first; the roadmap item names the Web platform and does not say who receives it automatically.
-->
