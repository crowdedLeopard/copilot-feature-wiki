---
kind: "concept"
title: "Cloud Policy service for Microsoft 365: which settings does each user's Office get?"
slug: "cloud-policy"
summary: "Cloud Policy is the service behind the Microsoft 365 Apps admin center that enforces Office and Copilot client settings on a signed-in user's device. Use it to decide who gets which setting, in what priority order, and to see who changed it."
created: "2026-11-21"
updated: "2026-11-21"
version: 2
tags: ["cloud-policy","microsoft-365-apps","policy","admin-controls","copilot-pages","copilot-notebooks","auditing"]
covers: []
sources:
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Manage Copilot Pages and Copilot Notebooks in your organization"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
related: ["outlook-new-cloud-policy-controls","m365-copilot-build-interactive-reports-and-dashboards-with-pages","onenote-multimodal-capture-in-copilot-notebooks-windows","auditing"]
controls:
  - governs: "Which users a policy configuration applies to"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Options are all users, specific groups, or anonymous Office for the web users. Needs a role such as Office Apps Administrator."
  - governs: "Which policy configuration wins when a user is in several groups"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Reorder priority"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "0 is the highest priority."
  - governs: "Whether users can create and view Copilot Pages and Copilot Notebooks"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Beta, tenant-level only. Set mode to applyOnce; it defaults to monitorOnly. Use resourceType microsoft.copilot.copilotpagesnotebooks; properties.value is the string \"0\" (disable) or \"1\" (enable)."
  - governs: "Whether Copilot runs AI-generated code previews in Copilot Chat and Copilot Pages"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "The TCM Copilot resources page lists no resource for this setting at the time of writing (November 2026)."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-21"
    note: "First concept page for Cloud Policy: scope, priority, delivery delays, Copilot Pages and Notebooks settings, audit events and the preview Graph route."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected: Not configured default now notes the OneDrive-disabled exception; app restart is generally, not always, required; removed 'no effect' line for Apps for business; Graph row note states applyOnce mode and string values; dropped audit-search checklist item."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 77
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e0c5b58bb312c678b9942e7a739014c3"
---

## What it is

Cloud Policy service for Microsoft 365 enforces policy settings for Microsoft 365 Apps for enterprise on a user's device, even if the device isn't domain joined or otherwise managed. The settings follow the signed-in user rather than the machine, and are managed in the Microsoft 365 Apps admin center (config.office.com).

**How it works.** An administrator creates a *policy configuration*: a name, a scope and a set of chosen policy settings. The scope is all users, specific Microsoft Entra groups, or users who anonymously access documents through Office for the web. The Click-to-Run service that Microsoft 365 Apps uses checks in with Cloud Policy, receives the settings that match the signed-in user and applies them the next time the user opens an Office app.

**What it governs.** Settings are available for Windows, macOS, iOS and Android, although not every setting exists on every operating system. Some settings also apply to Office for the web and Loop. Only user-based settings exist; computer-based settings do not. Microsoft says new user-based Office settings are added automatically, so no ADMX/ADML files need downloading.

**Copilot settings.** Microsoft's Tenant Configuration Management (TCM) reference describes 20 Copilot resources as Cloud Policy settings, and the Copilot Pages and Copilot Notebooks documentation names Cloud Policy as the way IT administrators control creation and use. That is why Copilot briefings keep pointing here; see [Outlook: Cloud Policy controls](/features/outlook-new-cloud-policy-controls/) for a non-Copilot example.

## Why it matters

Cloud Policy is where an administrator decides, per user group, whether a client-side feature is available, and where the answer for a given user is settled by priority when groups overlap. Not configured leaves creation and integration available, except that users for whom the organisation has disabled OneDrive creation cannot create Copilot Pages or Copilot Notebooks, regardless of this policy.

Because the settings are user-based and delivered at check-in, a change is not instant and not device-wide: it reaches users through their group membership, their primary signed-in account and generally an app restart, with exceptions for some privacy-control policies. Plan rollouts and tests around those delays rather than expecting immediate enforcement.

## Cost and licensing

Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps; Microsoft tells administrators to check the licensing documentation for specific requirements. Microsoft 365 operated by 21Vianet is not supported. Users must be in Microsoft Entra ID with a supported licence assigned.

The overview page publishes no separate price or meter for Cloud Policy. A feature that a setting governs can have its own licence: the TCM reference notes that Copilot Notebooks also require a Microsoft 365 Copilot licence. That belongs to the feature, so check the briefing for it.

## Risks and limits

- **Wrong product edition.** A policy configuration cannot be applied to volume licensed Click-to-Run versions such as Office LTSC Professional Plus 2021 or Office Standard 2019. For Microsoft 365 Apps for business, only privacy-control settings are supported.
- **Users, not devices.** Policies apply only to user objects, and device objects in a group are ignored. A user without a supported licence receives nothing.
- **Conflicting groups.** If a user is in several targeted groups with conflicting settings, the highest priority wins, and 0 is the highest. A misordered list gives a user the opposite of the setting you intended.
- **Delay and restart.** Office policy changes generally require an app restart, but some privacy-control policies apply without restarting Office apps. On Windows only the primary signed-in account's policies apply. Microsoft's Copilot Pages page says a change can take up to 90 minutes where policy configurations already existed, and up to 24 hours where none did.
- **Overrides Group Policy.** Cloud Policy settings take precedence over Group Policy on Windows Server and over preference or locally applied settings, so an existing GPO value can be silently replaced.
- **No health view.** The health status feature was retired in March 2022 and Microsoft gives no date for replacement reporting, so confirm enforcement on a test device.
- **Scripting is narrow.** The Graph route Microsoft documents covers only tenant-level policies, in preview. A setting also configured in a group-level policy makes monitoring and applyOnce fail for that resource.
- **Network.** Devices need access to the endpoints Microsoft lists, such as *.config.office.com in commercial and GCC.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users a policy configuration applies to</strong><br><small>Group</small><br><small class="controls__note">Options are all users, specific groups, or anonymous Office for the web users. Needs a role such as Office Apps Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which policy configuration wins when a user is in several groups</strong><br><small>Group</small><br><small class="controls__note">0 is the highest priority.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Reorder priority <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small>Group</small><br><small class="controls__note">Beta, tenant-level only. Set mode to applyOnce; it defaults to monitorOnly. Use resourceType microsoft.copilot.copilotpagesnotebooks; properties.value is the string &quot;0&quot; (disable) or &quot;1&quot; (enable).</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot runs AI-generated code previews in Copilot Chat and Copilot Pages</strong><br><small>Group</small><br><small class="controls__note">The TCM Copilot resources page lists no resource for this setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** Microsoft recommends the Office Apps Administrator role; Security Administrator and Global Administrator also work. For Graph remediation and applyOnce on Copilot settings, AI Administrator is the least-privileged role for the signed-in user.

**Access.** Commercial and US Government customers use config.office.com, or the Microsoft Intune admin center under Apps > Policy > Policies for Office apps. GCC High and DoD customers use separate addresses, given on the overview page.

**Audit.** With auditing enabled, Cloud Policy records creation, deletion and update of policy configurations and priority changes, with operations such as CreatedPolicyConfig and UpdatedPolicyConfigPriority. See [Microsoft Purview Audit](/concepts/auditing/). No admin path or command for the audit search is a row here because it is Purview's.

**To scope one group.** Microsoft's pattern is two configurations: the targeted group at priority 0 with the value you want, and All users at priority 1 with the opposite value.

## What to check

- Open Customization > Policy Management and list the policy configurations, their scopes and their priority order.
- Confirm which Microsoft Entra groups are targeted and that members hold a supported licence.
- Review the Create and view Copilot Pages and Copilot Notebooks setting in the group each user falls in.
- Review the code previews setting if Copilot Chat or Pages should not run AI-generated code previews.
- Test a change on a pilot user after restarting the Office app, allowing for the 90-minute or 24-hour delay.

## Open questions

- Does Microsoft document automation for group-level Cloud Policy configurations? At the time of writing (November 2026) the Graph route found covers tenant-level policies only, and in preview.
- When will the advanced health reporting for Cloud Policy that Microsoft says it plans arrive? No date is published.
- How should an administrator script the code previews setting? The TCM Copilot resources page lists no resource for it.
