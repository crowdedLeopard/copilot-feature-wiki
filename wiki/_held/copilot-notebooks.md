---
kind: "concept"
title: "Copilot Notebooks: where does the content live, and who can switch it off?"
slug: "copilot-notebooks"
summary: "Copilot Notebooks is a persistent workspace that grounds Copilot on a user's chats, references and files. Administrators use one Cloud Policy setting to allow or block creation and decide where the content, licensing and compliance reach."
created: "2026-11-24"
updated: "2026-11-24"
version: 1
tags: ["copilot-notebooks","copilot-pages","cloud-policy","m365-copilot","ediscovery","data-governance","admin-controls","licensing"]
covers: []
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
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
related: ["cloud-policy","ediscovery","retention","sensitivity-labels","auditing","teams-meetings-in-copilot-notebooks","onenote-multimodal-capture-in-copilot-notebooks-android","m365-copilot-copilot-workspaces-updates"]
controls:
  - governs: "Whether users can create and view Copilot Pages and Copilot Notebooks"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview Graph beta. Set resourceType microsoft.copilot.copilotpagesnotebooks, value 0 or 1. The Graph route works only against tenant-level policies."
confidence: "medium"
dependents: 9
changes:
  - date: "2026-11-24"
    note: "New concept page: where Copilot Notebooks content is stored, the Cloud Policy setting that controls creation, licensing and compliance limits."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 75 statements contradicted, 3 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 70
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "b1214523ad9b0d1b4fdd026643cba72b"
---

## What it is

Copilot Notebooks is a persistent workspace where users keep related chats, references and generated content together, so that Copilot can ground its answers on the notebook's accumulated context. Microsoft's release notes describe it as letting users "organize related chats, output creations, and references into a persistent AI workspace".

There are two experiences. The Microsoft Copilot app offers a lighter, faster version, and the full-featured Notebooks experience remains available in OneNote. Both are governed by the same setting.

### Where the content lives

Microsoft's storage page says Pages and Notebooks are stored in OneDrive for Business. Notebooks created before November 2025 remain in a user-owned SharePoint Embedded container that is also used by Loop My workspace. That page treats these as legacy items and says they have not moved to OneDrive for Business. The admin policies and requirements pages still describe only the SharePoint Embedded container; read them with that distinction in mind.

Notebooks create `.pod` files. Files a user adds to a notebook stay in OneDrive and SharePoint where they are stored. In the SharePoint admin centre, PowerShell and Purview audit data, the legacy container always appears with the application name `Loop`, so there is no Notebooks-specific filter.

### Who sets what

Creation is controlled by one Cloud Policy setting, *Create and view Copilot Pages and Copilot Notebooks*, which you scope to all users or to a group. See [Cloud Policy](/concepts/cloud-policy/) for how policy configurations, scopes and priorities work.

## Why it matters

The setting decides whether users can create Notebooks at all, and its default favours availability: Microsoft's table lists the default as Enabled, and "Not configured" leaves creation available. A licensed user can therefore build a notebook of chats, files and meeting content unless you act, and the content then follows the retention, eDiscovery and sharing rules of OneDrive or SharePoint Embedded rather than of a new store.

The switch is blunt. Microsoft's admin policies page lists one Cloud Policy setting for creating Notebooks and does not give individual notebook features, such as new file types as references, their own setting. If you need to hold back one feature, the page gives you only the choice of blocking creation for a scoped group. Briefings such as [Teams meetings as references](/features/teams-meetings-in-copilot-notebooks/) show this mechanism at work.

## Cost and licensing

Microsoft's requirements page lists the licence for Notebooks as a Microsoft Copilot licence, and its text says "the Microsoft Copilot or Copilot Chat license". The Tenant Configuration Management page says Notebooks "require a Microsoft 365 Copilot license". The pages word this differently, so confirm which licence your users hold before budgeting.

Storage is not a separate charge on these pages. Content in OneDrive for Business counts against the user's OneDrive storage limit. Legacy content in SharePoint Embedded counts against the organisation's SharePoint storage quota. The requirements and storage pages publish no separate meter or price for Notebooks. If your organisation disabled OneDrive creation for some users, those users cannot create Notebooks whatever the policy says.

## Risks and limits

- **Disabling creation hides existing Notebooks.** The Notebooks module is hidden in the Microsoft Copilot app and sharing links to Notebooks stop working. Existing items are not deleted, and the files stay in OneDrive and SharePoint.
- **One container, two policies (legacy content).** The legacy container is created when either the Copilot policy or the Loop *Create Loop workspaces in Loop* policy allows it. Disabling only one still lets the other app create it; disable both for the same user.
- **Recovery differs by storage.** For legacy Notebooks there is no end-user recycle bin, and neither administrators nor users can recover an individually deleted notebook. The storage page says deleted pages and notebooks can be found in the OneDrive recycle bin for the OneDrive-stored items.
- **Compliance gaps.** Information Barriers are not supported for SharePoint Embedded content. Conditional Access applies only to the whole Microsoft Copilot app. Notebooks have no container sensitivity label, because they share a container with Copilot Pages.
- **No per-container quota.** Microsoft states there is no admin control to set quota limits on individual containers.
- **Delayed effect.** A policy change can take up to 90 minutes to show, or up to 24 hours if no policy configuration existed before.
- **Blocked WebSockets.** Real-time collaboration needs WebSocket traffic to `*.svc.ms` and `*.office.com`.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Preview Graph beta. Set resourceType microsoft.copilot.copilotpagesnotebooks, value 0 or 1. The Graph route works only against tenant-level policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Cloud Policy lists Office Apps Administrator as the recommended role, with Security Administrator and Global Administrator also supported. For the Graph route, Microsoft names AI Administrator as the least-privileged signed-in role for remediation and `applyOnce`.

**Scoping.** Choose All users or a group. To enable for a subset, assign the policy to Group A as Enabled and to All users as Disabled, with Group A at the lower priority number.

**Graph route.** The setting is among the Copilot resources of Tenant Configuration Management, which is in preview. Microsoft says this works only against tenant-level policies, so a group-level policy for the same setting makes monitoring and remediation fail.

**Watching.** Audit logs are available for all events and can be searched in Purview. Purview eDiscovery supports Notebooks, with review and HTML export needing a Premium licence. Retention policies configured for all SharePoint sites are enforced. See [eDiscovery](/concepts/ediscovery/) and [retention](/concepts/retention/).

The setting does not delete or move content, and it does not set sensitivity labels, retention or Conditional Access.

## What to check

- Check whether *Create and view Copilot Pages and Copilot Notebooks* is configured in any policy configuration, and at which scope and priority.
- Confirm which users hold the Microsoft Copilot or Copilot Chat licence the requirements page names.
- Identify legacy Notebooks created before November 2025 and the user-owned containers that hold them.
- Review whether Loop workspace creation is also disabled for any group where you want no container created.
- Test that WebSocket traffic to the endpoints Microsoft lists reaches users.
- Search the Purview audit log for the `.pod` file extension to see Notebooks activity.
- Confirm that your eDiscovery managers know to add the user-owned container as a data source.

## Open questions

- Which licence does Notebooks actually need: Microsoft 365 Copilot, or the Copilot Chat licence the requirements page also names?
- When will the admin policies and requirements pages describe OneDrive for Business storage as well as the legacy SharePoint Embedded container?
- Does Microsoft intend to add settings for individual notebook features, such as audio overview or new reference types, beyond the creation policy?
- What happens to the policy and storage when Copilot Notebooks becomes Copilot Workspaces, as described in [the Workspaces briefing](/features/m365-copilot-copilot-workspaces-updates/)?

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Cost and licensing / cost: Storage is not a separate charge on the cited pages. | Found: Searched: Copilot Notebooks no additional storage pricing meter; Copilot Notebooks separate charge. Read requirements, storage and licensing pages. They describe quota accounting, not an explicit assurance of no separate charge. | Fix: Remove 'Storage is not a separate charge on these pages.' Keep the verified quota statements and the narrower sentence that the requirements and storage pages publish no separate meter or price.
- [unsupported, major] Governance controls: final paragraph / behaviour: The creation setting does not move notebook content. | Found: Searched: Copilot Notebooks creation policy disabled does not move content storage sensitivity labels retention Conditional Access. Read admin policies and storage; existing items are not deleted and references remain available, but neither states a no-movement guarantee for notebook content. | Fix: Remove 'or move' from 'The setting does not delete or move content.' The remaining non-deletion statement is explicitly documented.
- [unsupported, major] Open questions: Workspaces / behaviour: Copilot Notebooks will become Copilot Workspaces. | Found: Searched: Copilot Notebooks Copilot Workspaces; Copilot Workspaces Notebooks November 2026; site:support.microsoft.com Copilot Workspaces. Searched the full cited release-notes text for Workspaces and renaming; found no supporting passage. | Fix: Replace the final open question with 'How will future changes to Copilot Notebooks affect its policy and storage?' Remove the assertion of a Workspaces rename; the linked wiki briefing is not Microsoft evidence.
- [contradicted, blocker] summary; Governance controls: final paragraph / consistency: The summary presents the creation setting as deciding storage, licensing and compliance reach, unlike the body. | Found: Administrators use one Cloud Policy setting to allow or block creation and decide where the content, licensing and compliance reach. / The setting does not delete or move content, and it does not set sensitivity labels, retention or Conditional Access. | Fix: Replace the summary's second sentence with 'Administrators can allow or block creation through Cloud Policy; storage, licensing and compliance have separate requirements.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risks and limits: Compliance gaps / applicability: Information Barriers are not supported for SharePoint Embedded content. | Found: Information Barriers are not supported for content stored in SharePoint Embedded containers. | Fix: Replace this sentence with 'The Copilot compliance summary says Information Barriers are unsupported for Notebooks; the SharePoint Embedded security page separately documents a beta informationBarrier property, leaving its applicability to Notebooks unresolved.' Cite https://learn.microsoft.com/sharepoint/dev/embedded/compliance/security-and-compliance, which says the beta fileStorageContainer informationBarrier property manages a container's information barrier. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary
- [supported, minor] controls[0].api / command: POST /beta/admin/configurationManagement/configurationMonitors can apply the notebook creation setting. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. | Fix: Keep the method and path, but add to the row's note: 'Set mode to applyOnce to apply the baseline; the default monitorOnly mode only detects drift.' The reference documents both modes and defaults mode to monitorOnly. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] controls[0].note; Governance controls table / command: The resource uses value 0 or 1 for the creation setting. | Found: The value property is a string, not a Boolean or a number. ... 0 disables the setting; 1 enables the setting. | Fix: Replace 'value 0 or 1' with 'properties.value as the string "0" (disabled) or "1" (enabled)' in the row note and its rendered copy. The copilotpagesnotebooks parameter table allows these values and the sample places value under properties. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources
- [contradicted, minor] What to check: Loop workspace creation; Governance controls table / consistency: The checklist asks readers to review Loop workspace creation, but the controls table has no row for that control. | Found: Review whether Loop workspace creation is also disabled for any group where you want no container created. / The sole table row is Whether users can create and view Copilot Pages and Copilot Notebooks. | Fix: Remove the Loop workspace creation checklist bullet, which has no corresponding control row. Retain the already supported explanation of the two-policy interaction in Risks and limits.
- [supported, minor] Why it matters; Risks and limits: Compliance gaps; sources / applicability: The storage-governance premise also relies on a Microsoft page not listed in sources. | Found: Supported consuming tenant Microsoft 365 settings and Microsoft Purview capabilities apply to the app documents stored there. | Fix: Add https://learn.microsoft.com/sharepoint/dev/embedded/compliance/security-and-compliance to sources, titled 'Plan security, compliance, and governance'. It supports the storage-governance premise and documents the platform-level beta Information Barriers qualification. | Source: https://learn.microsoft.com/sharepoint/dev/embedded/compliance/security-and-compliance
-->
