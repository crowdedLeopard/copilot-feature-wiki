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
  model: "unknown"
  notes: "Not yet published for this capability. Learn lists a OneDrive licence and an active OneDrive site for existing Copilot Pages (Requirements for Copilot Pages and Copilot Notebooks)."
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
      call: "Tenant Configuration Management (Graph beta): resourceType microsoft.copilot.copilotpagesnotebooks, properties.value 0 (disable) or 1 (enable)"
      docs: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    note: "Documented for existing Pages, not confirmed for the new capability. Graph side is preview, tenant-level policies only; AI Administrator for remediation."
  - governs: "Whether Copilot runs AI-generated code previews in Copilot Chat and Copilot Pages"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center (Cloud Policy)"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "General control for existing Pages; Microsoft has not confirmed it applies to the new reports and dashboards. The Copilot resource list for Tenant Configuration Management has no code-preview resource at the time of writing (November 2026)."
  - governs: "Tenant-wide switch for the new interactive reports and dashboards capability"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no separate setting at the time of writing (November 2026); the roadmap item names none."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T22:45:29"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap plan for interactive reports and dashboards in Copilot Pages, with the existing Pages controls and what is not yet confirmed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 68
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "c5faefce6c1c8bfd1b7059bc18f3d4a2"
---

## What's changing

The roadmap item describes a way to turn ideas and source material into interactive reports and dashboards with Pages. A user starts with a prompt and brings content, visuals, charts and interactive elements together in one shareable Page, where they work with collaborators and agents. The text also says users can edit content on the Page directly, like any other Microsoft 365 file.

Microsoft Learn does not describe this capability yet, so what follows about its behaviour is the roadmap's description. Learn does document Copilot Pages as they exist today: an interactive, shareable canvas in Microsoft 365 Copilot Chat designed for multiplayer AI collaboration. Whether the new reports and dashboards use the same storage, policies and licence as those Pages is not stated.

The roadmap record lists the item as In development, with a preview target of November CY2026 and a general availability target of December CY2026. These are Microsoft's targets, not shipped dates. The record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, and its release phases are General Availability and Preview.

## Why it matters

Pages moves from a shared scratchpad towards a place where reports and dashboards are assembled and shared, so the content may be more consequential than a pasted chat answer. Microsoft has not stated what happens on arrival, so plan on no source saying existing behaviour changes, and check the Pages controls you already have rather than assuming they cover the new capability.

The practical view: Learn documents a Cloud Policy switch for Copilot Pages that is Enabled by default, plus Purview support for the files Pages create. Decide before the December CY2026 target whether your organisation wants dashboards built from organisational data to be shareable by link, and who should be able to create them.

## Risk assessment

**Data exposure**

- The roadmap says users bring source material together on a Page and share it. Learn says existing Copilot Pages are stored in OneDrive for Business, and that sensitivity labels are available for Copilot Pages and DLP rules are enforced with policy tips. Whether the new reports follow the same storage and labelling is not stated.
- Learn says retention policies configured for all SharePoint sites are enforced for Copilot Pages and Copilot Notebooks, and that Purview eDiscovery and audit search cover them. Check that these reach dashboards once they appear.

**Security & identity**

- Learn says Conditional Access applies to the whole Microsoft Copilot app, not to Pages separately, and that Information Barriers are not supported for content in SharePoint Embedded containers, which is where Pages created before November 2025 remain. If you rely on Information Barriers, confirm where new reports are stored.
- The roadmap says collaborators and agents work on the Page. Microsoft has not described which agents, under whose identity, or with what permissions.

**Autonomy & actions**

- Learn describes a separate Cloud Policy setting for AI-generated code previews in Copilot Chat and Copilot Pages, including lightweight apps. Microsoft has not said whether interactive elements in the new Pages rely on it.
- The roadmap does not say whether agents can change a Page without a person approving the edit.

**Change & support**

- Learn says that without Loop components enabled, Copilot Pages are only interactive within the Microsoft Copilot app and supported chat experiences, so a dashboard shared into Teams or Outlook may not behave as users expect.
- Learn says Cloud Policy changes can take up to 90 minutes to apply when policy configurations already exist, and up to 24 hours when none did. A policy change made on the day of rollout will not take effect immediately.

## Cost and licensing

The licence for the new reports and dashboards capability is not yet published. For existing Copilot Pages, the Learn requirements page says users need a OneDrive licence and an active OneDrive site, and that if the licence is later removed from a user with an existing OneDrive site, Copilot Pages continue to work. Copilot Notebooks need a Microsoft Copilot or Copilot Chat licence on the same page.

No meter or Copilot Credits rate is documented for Pages at the time of writing (November 2026). Learn says Pages are stored in OneDrive for Business and count against the user's OneDrive storage limit; Pages created before November 2025 stay in a user-owned SharePoint Embedded container that counts against the organisation's SharePoint storage quota. Expect admin time for policy and communications as the indirect cost.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; no other cloud is listed. Not listed for GCC, GCC High or DoD on the roadmap item is a record fact, not a statement that the feature is unavailable there.

Who receives it, and whether it arrives on by default, is not stated. For existing Copilot Pages, Learn says a OneDrive site is required, that creation is blocked for people whose OneDrive creation is disabled, and that Exchange Online mailboxes are needed for full functionality including @mentions. Network requirements include WebSocket traffic to `*.svc.ms` and `*.office.com` for real-time collaboration. Whether these also apply to the new capability is not stated.

## Governance guidance

### Before rollout

- Check the current value of the Cloud Policy setting **Create and view Copilot Pages and Copilot Notebooks** and which groups it targets (first row of the controls table). Learn gives its default as Enabled.
- Confirm that WebSocket traffic to `*.svc.ms` and `*.office.com` is allowed, since Learn lists it for real-time collaboration in existing Pages.
- Decide whether Loop components stay enabled in Teams and Outlook, because Learn ties interactive Pages there to Loop components.
- Ask Microsoft through your account team, and watch Message center, whether the new capability is governed by the existing Pages policy.

### At rollout

- Test the preview with a pilot group using the two-group pattern Learn describes in Cloud Policy (a group set to Enabled at lower priority number, with All users set to Disabled), if you want it limited to a subset.
- Check that the **Enable code previews for AI-generated content** setting reflects your intent, since Microsoft has not said whether the new Pages depend on it.
- Allow for the up to 90 minutes or 24 hours Learn gives for Cloud Policy changes to apply.

### After rollout

- Search the Purview audit log for page activity, filtering on `"SourceFileExtension":"page"` as Learn describes for Copilot Pages, and confirm the new dashboards appear.
- Test that sensitivity labels, retention and DLP behave on a dashboard Page as Learn says they do for Copilot Pages.
- Update your open questions list when Microsoft publishes a Learn page for the capability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages</strong><br><small>User</small><br><small class="controls__note">Documented for existing Pages, not confirmed for the new capability. Graph side is preview, tenant-level policies only; AI Administrator for remediation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center (Cloud Policy)</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>Tenant Configuration Management (Graph beta): resourceType microsoft.copilot.copilotpagesnotebooks, properties.value 0 (disable) or 1 (enable)</code> <a href="https://learn.microsoft.com/graph/utcm-copilot-resources" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot runs AI-generated code previews in Copilot Chat and Copilot Pages</strong><br><small>User</small><br><small class="controls__note">General control for existing Pages; Microsoft has not confirmed it applies to the new reports and dashboards. The Copilot resource list for Tenant Configuration Management has no code-preview resource at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center (Cloud Policy)</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the new interactive reports and dashboards capability</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no separate setting at the time of writing (November 2026); the roadmap item names none.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both Cloud Policy settings in the table are documented for existing Copilot Pages. Microsoft has not confirmed that they govern the new reports and dashboards capability, so treat them as the closest existing controls.

Learn says disabling creation does not delete existing Pages: users can still view and edit existing items if they have permission. To prevent the shared user-owned container from being created, Learn says to disable both the Copilot Pages and Copilot Notebooks policy and the Loop **Create Loop workspaces in Loop** policy for the same user. The Graph row is a preview Tenant Configuration Management resource; Learn says TCM supports these settings only in tenant-level policies in the Microsoft 365 Apps admin center, and names AI Administrator as the least-privileged role for the signed-in user for remediation and applyOnce.

Purview retention, sensitivity labels and DLP are covered for Copilot Pages on the compliance summary page: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary. Their admin paths are not repeated here.

## Open questions

- Does the existing Cloud Policy setting **Create and view Copilot Pages and Copilot Notebooks** govern the new reports and dashboards? Watch the Learn page Admin policies for Copilot Pages and Copilot Notebooks.
- What licence does the capability need, and is any Copilot Credits or other meter charged? Not yet published; watch Message center and the Learn requirements page.
- Which agents can work on a Page, under whose identity, and can they change content without a person approving? Not stated on the roadmap item.
- Is the capability on by default for users who already have Copilot Pages, and who receives the November CY2026 preview? Not stated.
- Do the new interactive elements depend on the AI-generated code previews setting?

<!-- rationale
risk: Medium. Pages can combine source material, charts and collaborator and agent edits, and Microsoft has not said which existing Pages controls govern the new capability; existing Pages are covered by Cloud Policy, labels and retention.
cost: Low. Licensing for the new capability is not yet published; the only cost the sources show is admin time and storage, since Learn lists a OneDrive licence for existing Copilot Pages.
impact: Medium. People who create or share Pages in Microsoft 365 Copilot Chat would notice first; the roadmap item names the Web platform and does not say who receives it automatically.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[0].api; Governance controls: first table row / command: The printed Tenant Configuration Management resource description supplies a Graph call that configures Pages creation. | Found: Searched: tenantConfigurationManagement applyOnce POST configuration resource Microsoft Graph beta. Read utcm-copilot-resources and configurationmanagement-post-configurationmonitors?view=graph-rest-beta; the printed text is resource metadata, not an HTTP request. | Fix: Replace api.call with 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors; Content-Type: application/json; body: <configurationMonitor with displayName, mode="applyOnce", and baseline>' and api.docs with https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Move the resource metadata to the row note: 'The baseline resources array uses resourceType microsoft.copilot.copilotpagesnotebooks, resourceVersion 1 and properties.value "0" to disable or "1" to enable; see https://learn.microsoft.com/graph/utcm-copilot-resources. The calling app needs delegated ConfigurationMonitoring.ReadWrite.All, the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs AI Administrator. The target setting must not be configured in any group-level policy.' Preserve the existing preview and tenant-only qualifications. Update the rendered row identically.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure; Cost and licensing / behaviour: Existing Pages are stored in OneDrive for Business. | Found: Pages and Notebooks are stored in OneDrive for Business: the same visible file system where Word, Excel, and PowerPoint files live. | Fix: After the storage paragraph add: 'Microsoft's cited pages disagree: the storage overview says current Pages use OneDrive for Business and the user's OneDrive quota, while the admin policies, requirements and compliance summary pages describe Pages as using a user-owned SharePoint Embedded container and the organisation's SharePoint quota.' These are https://learn.microsoft.com/microsoft-365/loop/cpcn-storage, https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration, https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements and https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-storage
- [supported, minor] Risk assessment: Change & support / behaviour: A policy change on rollout day should not be relied on to take effect immediately. | Found: In case you create a new policy configuration or change the configuration for an existing policy, there can be a delay in the change being reflected | Fix: Replace 'A policy change made on the day of rollout will not take effect immediately' with 'A policy change made on the day of rollout may not take effect immediately.' The source documents a possible delay, not a guaranteed minimum delay. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [supported, minor] Cost and licensing / licensing: The requirements page says Copilot Notebooks need a Microsoft Copilot or Copilot Chat licence. | Found: Copilot Notebooks ... Users need the Microsoft Copilot or Copilot Chat license. | Fix: Append: 'The cited Tenant Configuration Management reference instead says Copilot Notebooks also require a Microsoft 365 Copilot license (https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type).' This reports the disagreement without choosing a licensing interpretation. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist includes network, Loop components, audit, sensitivity labels, retention and DLP checks with no corresponding controls-table rows. | Found: Checklist: 'Confirm that WebSocket traffic ... is allowed'; 'Decide whether Loop components stay enabled'; 'Search the Purview audit log'; 'Test that sensitivity labels, retention and DLP behave'. Table: Pages creation, code previews and an undocumented feature-wide switch only. | Fix: Remove the Before rollout bullets beginning 'Confirm that WebSocket traffic' and 'Decide whether Loop components stay enabled', and the After rollout bullets beginning 'Search the Purview audit log' and 'Test that sensitivity labels, retention and DLP behave'. Keep the already verified factual background in Scope and Risk assessment; do not add unverified control rows.
-->
