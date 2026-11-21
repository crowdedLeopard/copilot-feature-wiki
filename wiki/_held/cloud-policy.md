---
kind: "concept"
title: "Cloud Policy service for Microsoft 365: which settings does each user's Office get?"
slug: "cloud-policy"
summary: "Cloud Policy is the service behind the Microsoft 365 Apps admin center that enforces Office and Copilot client settings on a signed-in user's device. Use it to decide who gets which setting, in what priority order, and to see who changed it."
created: "2026-11-21"
updated: "2026-11-21"
version: 1
tags: ["cloud-policy","microsoft-365-apps","policy","admin-controls","copilot-pages","copilot-notebooks","auditing"]
covers: []
sources:
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
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
    note: "Graph is beta and tenant-level only. Baseline resourceType microsoft.copilot.copilotpagesnotebooks sets value to 0 or 1. See the TCM Copilot resources page."
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
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 63
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "41fdcc57f66d6db37544e7d4f7918357"
---

## What it is

Cloud Policy service for Microsoft 365 enforces policy settings for Microsoft 365 Apps for enterprise on a user's device, even if the device isn't domain joined or otherwise managed. The settings follow the signed-in user rather than the machine, and are managed in the Microsoft 365 Apps admin center (config.office.com).

**How it works.** An administrator creates a *policy configuration*: a name, a scope and a set of chosen policy settings. The scope is all users, specific Microsoft Entra groups, or users who anonymously access documents through Office for the web. The Click-to-Run service that Microsoft 365 Apps uses checks in with Cloud Policy, receives the settings that match the signed-in user and applies them the next time the user opens an Office app.

**What it governs.** Settings are available for Windows, macOS, iOS and Android, although not every setting exists on every operating system. Some settings also apply to Office for the web and Loop. Only user-based settings exist; computer-based settings do not. Microsoft says new user-based Office settings are added automatically, so no ADMX/ADML files need downloading.

**Copilot settings.** Microsoft's Tenant Configuration Management (TCM) reference describes 20 Copilot resources as Cloud Policy settings, and the Copilot Pages and Copilot Notebooks documentation names Cloud Policy as the way IT administrators control creation and use. That is why Copilot briefings keep pointing here; see [Outlook: Cloud Policy controls](/features/outlook-new-cloud-policy-controls/) for a non-Copilot example.

## Why it matters

Cloud Policy is where an administrator decides, per user group, whether a client-side feature is available, and where the answer for a given user is settled by priority when groups overlap. For Copilot Pages and Copilot Notebooks, Microsoft documents the creation setting as Enabled by default, and Not configured as leaving creation and integration available. A tenant that never sets the policy therefore leaves that feature open to users.

Because the settings are user-based and delivered at check-in, a change is not instant and not device-wide: it reaches users through their group membership, their primary signed-in account and an app restart. Plan rollouts and tests around those delays rather than expecting immediate enforcement.

## Cost and licensing

Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps; Microsoft tells administrators to check the licensing documentation for specific requirements. Microsoft 365 operated by 21Vianet is not supported. Users must be in Microsoft Entra ID with a supported licence assigned.

The overview page publishes no separate price or meter for Cloud Policy. A feature that a setting governs can have its own licence: the TCM reference notes that Copilot Notebooks also require a Microsoft 365 Copilot licence. That belongs to the feature, so check the briefing for it.

## Risks and limits

- **Wrong product edition.** A policy configuration cannot be applied to volume licensed Click-to-Run versions such as Office LTSC Professional Plus 2021 or Office Standard 2019. For Microsoft 365 Apps for business, only privacy-control settings are supported. Expect no effect on those clients.
- **Users, not devices.** Policies apply only to user objects, and device objects in a group are ignored. A user without a supported licence receives nothing.
- **Conflicting groups.** If a user is in several targeted groups with conflicting settings, the highest priority wins, and 0 is the highest. A misordered list gives a user the opposite of the setting you intended.
- **Delay and restart.** Settings apply only when the Office app restarts. On Windows only the primary signed-in account's policies apply. Microsoft's Copilot Pages page says a change can take up to 90 minutes where policy configurations already existed, and up to 24 hours where none did.
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
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small>Group</small><br><small class="controls__note">Graph is beta and tenant-level only. Baseline resourceType microsoft.copilot.copilotpagesnotebooks sets value to 0 or 1. See the TCM Copilot resources page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
- Search the Purview audit log for UpdatedPolicyConfig and UpdatedPolicyConfigPriority events after any change.

## Open questions

- Does Microsoft document automation for group-level Cloud Policy configurations? At the time of writing (November 2026) the Graph route found covers tenant-level policies only, and in preview.
- When will the advanced health reporting for Cloud Policy that Microsoft says it plans arrive? No date is published.
- How should an administrator script the code previews setting? The TCM Copilot resources page lists no resource for it.

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / default: Not configured leaves creation and integration available, so a tenant that never sets the policy leaves the feature open to users. | Found: If your organization disabled the creation of OneDrive, regardless of the setting noted here, these people in your organization can't create Copilot Pages or Copilot Notebooks. | Fix: Replace the final two sentences of the first Why it matters paragraph with: 'Not configured leaves creation and integration available, except that users for whom the organisation has disabled OneDrive creation cannot create Copilot Pages or Copilot Notebooks, regardless of this policy.' | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [contradicted, blocker] Risks and limits: Wrong product edition / consistency: The concluding advice says to expect no effect on the clients just named, including Microsoft 365 Apps for business. | Found: For Microsoft 365 Apps for business, only privacy-control settings are supported. Expect no effect on those clients. | Fix: Remove 'Expect no effect on those clients.' It conflicts with both the preceding sentence and the overview's documented support for privacy controls in Microsoft 365 Apps for business.
- [contradicted, blocker] Why it matters; Risks and limits: Delay and restart / behaviour: Settings apply only when the Office app restarts. | Found: If the primary account is switched, most of the policies assigned to that account will not apply until the Office apps are restarted. Some policies related to privacy controls will apply without restarting any Office apps. | Fix: Replace 'Settings apply only when the Office app restarts.' with 'Office policy changes generally require an app restart, but some privacy-control policies apply without restarting Office apps.' In Why it matters replace 'and an app restart' with 'and generally an app restart, with exceptions for some privacy-control policies'. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Copilot settings / applicability: New Outlook supplies a non-Copilot example of Cloud Policy controls. | Found: Disable contact support is configured via Cloud Policy for a Microsoft 365 organization from the Microsoft 365 Apps admin center, specifically on the Office Policies page. | Fix: Add https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management to sources for the non-Copilot Outlook example; the linked wiki briefing is not evidence. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management
- [supported, minor] controls[2].api / command: POST /beta/admin/configurationManagement/configurationMonitors can apply the Pages and Notebooks baseline setting. | Found: Create a new configurationMonitor object that runs periodically ... to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. mode ... Optional; defaults to monitorOnly. | Fix: Keep the method and path. Replace the row note with: 'Graph is beta and tenant-level only. Set mode to applyOnce; otherwise the call defaults to monitorOnly and does not apply the setting. In baseline.resources, use resourceType microsoft.copilot.copilotpagesnotebooks and properties.value as the string "0" (disable) or "1" (enable).' The mode is documented at the API link and the resource properties at https://learn.microsoft.com/graph/utcm-copilot-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [contradicted, minor] What to check: audit search; Governance controls: Audit / consistency: The checklist asks readers to search the Purview audit log, but the controls table has no audit-search row. | Found: Search the Purview audit log for UpdatedPolicyConfig and UpdatedPolicyConfigPriority events after any change. No admin path or command for the audit search is a row here because it is Purview's. | Fix: Remove the final audit-search bullet from What to check, retaining the audit explanation and link to the auditing concept in Governance controls. This resolves the checklist/table mismatch without adding a control row.
-->
