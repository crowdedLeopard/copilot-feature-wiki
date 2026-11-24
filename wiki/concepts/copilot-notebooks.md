---
kind: "concept"
title: "Copilot Notebooks: where does the content live, and who can switch it off?"
slug: "copilot-notebooks"
summary: "Copilot Notebooks is a persistent workspace that grounds Copilot on a user's chats, references and files. Administrators can allow or block creation through Cloud Policy; storage, licensing and compliance have separate requirements."
created: "2026-11-24"
updated: "2026-11-24"
version: 2
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
  - title: "Plan security, compliance, and governance"
    url: "https://learn.microsoft.com/sharepoint/dev/embedded/compliance/security-and-compliance"
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
    note: "Preview Graph beta. resourceType microsoft.copilot.copilotpagesnotebooks; properties.value as the string \"0\" (disabled) or \"1\" (enabled). Mode applyOnce applies it; default monitorOnly only detects drift. Tenant-level only."
confidence: "medium"
dependents: 9
changes:
  - date: "2026-11-24"
    note: "New concept page: where Copilot Notebooks content is stored, the Cloud Policy setting that controls creation, licensing and compliance limits."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 75 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: removed the unsupported no-separate-charge, no-move and Workspaces-rename statements, aligned the summary with the body, and clarified the Graph row and Information Barriers."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 76 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 75
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "819b9abd6946eac0d3f98c7752b2314c"
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

Content in OneDrive for Business counts against the user's OneDrive storage limit. Legacy content in SharePoint Embedded counts against the organisation's SharePoint storage quota. The requirements and storage pages publish no separate meter or price for Notebooks. If your organisation disabled OneDrive creation for some users, those users cannot create Notebooks whatever the policy says.

## Risks and limits

- **Disabling creation hides existing Notebooks.** The Notebooks module is hidden in the Microsoft Copilot app and sharing links to Notebooks stop working. Existing items are not deleted, and the files stay in OneDrive and SharePoint.
- **One container, two policies (legacy content).** The legacy container is created when either the Copilot policy or the Loop *Create Loop workspaces in Loop* policy allows it. Disabling only one still lets the other app create it; disable both for the same user.
- **Recovery differs by storage.** For legacy Notebooks there is no end-user recycle bin, and neither administrators nor users can recover an individually deleted notebook. The storage page says deleted pages and notebooks can be found in the OneDrive recycle bin for the OneDrive-stored items.
- **Compliance gaps.** The Copilot compliance summary says Information Barriers are unsupported for Notebooks; the SharePoint Embedded security page separately documents a beta informationBarrier property, leaving its applicability to Notebooks unresolved. Conditional Access applies only to the whole Microsoft Copilot app. Notebooks have no container sensitivity label, because they share a container with Copilot Pages.
- **No per-container quota.** Microsoft states there is no admin control to set quota limits on individual containers.
- **Delayed effect.** A policy change can take up to 90 minutes to show, or up to 24 hours if no policy configuration existed before.
- **Blocked WebSockets.** Real-time collaboration needs WebSocket traffic to `*.svc.ms` and `*.office.com`.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Preview Graph beta. resourceType microsoft.copilot.copilotpagesnotebooks; properties.value as the string &quot;0&quot; (disabled) or &quot;1&quot; (enabled). Mode applyOnce applies it; default monitorOnly only detects drift. Tenant-level only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Cloud Policy lists Office Apps Administrator as the recommended role, with Security Administrator and Global Administrator also supported. For the Graph route, Microsoft names AI Administrator as the least-privileged signed-in role for remediation and `applyOnce`.

**Scoping.** Choose All users or a group. To enable for a subset, assign the policy to Group A as Enabled and to All users as Disabled, with Group A at the lower priority number.

**Graph route.** The setting is among the Copilot resources of Tenant Configuration Management, which is in preview. Microsoft says this works only against tenant-level policies, so a group-level policy for the same setting makes monitoring and remediation fail.

**Watching.** Audit logs are available for all events and can be searched in Purview. Purview eDiscovery supports Notebooks, with review and HTML export needing a Premium licence. Retention policies configured for all SharePoint sites are enforced. See [eDiscovery](/concepts/ediscovery/) and [retention](/concepts/retention/).

The setting does not delete content, and it does not set sensitivity labels, retention or Conditional Access.

## What to check

- Check whether *Create and view Copilot Pages and Copilot Notebooks* is configured in any policy configuration, and at which scope and priority.
- Confirm which users hold the Microsoft Copilot or Copilot Chat licence the requirements page names.
- Identify legacy Notebooks created before November 2025 and the user-owned containers that hold them.
- Test that WebSocket traffic to the endpoints Microsoft lists reaches users.
- Search the Purview audit log for the `.pod` file extension to see Notebooks activity.
- Confirm that your eDiscovery managers know to add the user-owned container as a data source.

## Open questions

- Which licence does Notebooks actually need: Microsoft 365 Copilot, or the Copilot Chat licence the requirements page also names?
- When will the admin policies and requirements pages describe OneDrive for Business storage as well as the legacy SharePoint Embedded container?
- Does Microsoft intend to add settings for individual notebook features, such as audio overview or new reference types, beyond the creation policy?
- How will future changes to Copilot Notebooks affect its policy and storage?

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risks and limits: Compliance gaps / applicability: Conditional Access applies only to the entire Microsoft Copilot app. | Found: Only applies at the app level. Because Copilot Pages and Copilot Notebooks are features of the Microsoft Copilot app, Conditional Access applies to the entire app at m365.cloud.microsoft. | Fix: Replace the sentence with: 'The Copilot compliance summary describes Conditional Access as app-level only; the SharePoint Embedded security page separately documents container-level ConditionalAccessPolicy, so the guidance differs for legacy storage.' Both cited pages were read. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary
- [supported, minor] Risks and limits: Compliance gaps / applicability: Notebooks have no container sensitivity label. | Found: Copilot Notebooks don't have container sensitivity labels because they share a container with all Copilot Pages. | Fix: Replace the sentence with: 'The Copilot compliance summary says Notebooks have no container sensitivity labels because they share a container with Copilot Pages; the SharePoint Embedded security page separately documents setting container sensitivity labels, so the guidance differs for legacy storage.' | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary
- [contradicted, minor] What to check; Governance controls table / consistency: The checklist names Purview audit searching and eDiscovery data-source configuration, but the controls table contains only the creation policy. | Found: Search the Purview audit log for the `.pod` file extension ... Confirm that your eDiscovery managers know to add the user-owned container as a data source. Table: Whether users can create and view Copilot Pages and Copilot Notebooks. | Fix: Remove the two checklist bullets beginning 'Search the Purview audit log' and 'Confirm that your eDiscovery managers' so the checklist does not direct readers to controls absent from the table. Keep the supported Watching prose; do not add control rows in this correction.
-->
