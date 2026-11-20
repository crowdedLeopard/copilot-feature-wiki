---
title: "Planner: Planner Plugin lets Copilot Cowork read and update plans and tasks"
slug: "planner-capabilities-in-microsoft-cowork"
roadmapId: 567315
topic: "m365-copilot"
products: ["Planner","Microsoft Copilot (Microsoft 365)"]
summary: "The Planner Plugin lets Copilot Cowork read, create and update Planner plans and tasks and use them to act across Microsoft 365, with user approval. An admin installs it or makes it available; nothing is required by a deadline."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Teams and Surface Devices","Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Cowork plugin users must have Microsoft 365 Copilot licences assigned, and Cowork is billed by usage in Copilot Credits through a spending policy that selects Cowork. A credit rate specific to the Planner Plugin is not yet published."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["planner","cowork","plugins","m365-copilot","write-actions","human-in-the-loop","usage-based-billing","spending-policies","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 567315"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567315"
    kind: "roadmap"
  - title: "Manage the Planner Plugin for Copilot Cowork"
    url: "https://learn.microsoft.com/planner/manage-planner-plugin-cowork"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Determine access controls for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-access"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "MC1540339: Microsoft Planner: Planner capabilities in Copilot Cowork through the Planner Plugin"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1540339"
    kind: "message-center"
  - title: "Whether the Planner Plugin is installed for, available to or blocked for users (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users have access to Cowork and the credit limits on that access (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
videos: []
related: ["spending-policies","copilot-credits","planner-planner-agent-in-copilot-v2-improvements","m365-copilot-copilot-cowork-access-business-applications-with-work-iq","m365-copilot-copilot-cowork-for-government-clouds"]
controls:
  - governs: "Whether the Planner Plugin is installed for, available to or blocked for users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Planner Plugin > Users"
      docs: "https://learn.microsoft.com/planner/manage-planner-plugin-cowork"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Admin role: Global Administrator or Copilot Administrator. Users tab offers Available to all users, Available to specific users or groups, and Block. The Graph call blocks only (beta, preview; needs a Microsoft Agent 365 licence)."
  - governs: "Which users have access to Cowork and the credit limits on that access"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Select agents and services"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Select Cowork on the Select agents and services step. A low limit does not remove access. The API call updates displayName, periodLimit, perUserLimit and billingMethods (beta)."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-20"
    note: "New briefing: the Planner Plugin for Copilot Cowork, its admin-opt-in deployment, approval model, licensing and the controls that govern it."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 99 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 99
  confirmed: 98
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "34bdca31ba0957116505c3fa65c3d53a"
---

## What's changing

The Planner Plugin connects Microsoft Planner to Copilot Cowork. The roadmap item says users can view, create and update plans, buckets, goals and tasks from Cowork, and that Cowork can help carry out Planner tasks across Microsoft 365: drafting and sending emails, scheduling meetings, posting updates to Teams and working with files. It can then write progress back to Planner with the user's approval.

Microsoft's notice MC1540339 (published 5 November 2026) adds detail: Cowork can use Planner task notes, checklists and attachments as context, turn existing content into proposed plans, generate visual status reports, and run scheduled or event-triggered requests. Users review and approve changes before Cowork updates Planner. The Learn page for administrators describes the plugin as created by Microsoft Corporation, distributed through the Microsoft 365 App Store, and with a connector that reads and updates plans, tasks, buckets and goals on behalf of the signed-in user. Users find it in Microsoft Copilot under Plugins > Cowork.

On arrival, the Learn page says the plugin is available to users with an active Microsoft 365 Copilot licence after an admin enables or deploys it. An admin can install it for all users or for specific users and groups, so users get it automatically, or make it available so eligible users add it themselves.

The roadmap item is Rolling out, with a General Availability and Preview release phase, a preview date of October CY2026 and a target date of November CY2026. MC1540339 says Microsoft began rolling out General Availability (Worldwide) in late October 2026 and expects to complete by late November 2026, and that the experience is available now in Frontier with general availability targeted for November 2026. The notice sets no act-by date. The roadmap lists Worldwide (Standard Multi-Tenant) only, on desktop, Teams and Surface devices, and web.

## Why it matters

This puts a write-capable AI assistant in front of Planner data. Cowork can read task notes, checklists and attachments, and the Learn page says it can also use other Microsoft 365 content the user already has access to, such as files, email and meetings, to help with a task. The plugin acts within the signed-in user's existing Planner permissions and does not grant new access, so the exposure is whatever each user could already reach, now reachable through a conversational route.

If nobody acts, the Learn page describes the plugin as available after an admin enables or deploys it, so most tenants decide whether, and for whom, to install it. The wiki's view is that a pilot group is the sensible start: the plugin depends on Cowork access, which is granted through spending policies, so the cost and access questions need answering together with the Planner ones.

## Risk assessment

**Data exposure**

- Cowork can use Planner task notes, checklists, attachments, owners and due dates as context for work across Microsoft 365 (MC1540339). The Learn page says it respects existing Planner and Microsoft 365 permissions and can use other content the user already has access to. Oversharing in plans therefore carries into Cowork answers; the controls table covers who gets the plugin, not what a plan contains.
- The Learn page says Microsoft Purview Information Barriers aren't currently supported for Cowork plugin management and sharing. Tenants that rely on Information Barriers should account for that before installing the plugin.

**Security & identity**

- The plugin acts on behalf of the signed-in user and the Learn page says it grants no new access. Users may be asked to connect the first time they use it, and an administrator cannot complete that step for them, so expect a consent or sign-in step per user.
- Cowork and plugin activity is recorded in Microsoft Purview audit logs under Copilot activities.

**Autonomy & actions**

- Cowork can write to Planner (update progress, complete checklist items, add deliverable links, mark tasks complete) and can send emails, schedule meetings and post to Teams from Planner context. The Learn page says every change to Planner is shown to the user and needs their approval, and that tasks are marked complete only after the user confirms.
- MC1540339 says scheduled or event-triggered requests still need approval for Planner changes. The Cowork governance page says Cowork asks for approval before an automated task sends an email, posts a message or changes a shared system, and that users can pre-authorise actions when they create a task. Whether pre-authorisation can cover Planner writes is an open question.

**Change & support**

- Admin-installed plugins cannot be removed by users, who can turn them off for their own conversations. Expect helpdesk questions about the connect step, and about users who cannot find the plugin because it is blocked or they are outside the assigned group.
- Blocking applies to new conversations; conversations already in progress continue until they end.

## Cost and licensing

Users who use Cowork plugins must have Microsoft 365 Copilot licences assigned (Manage plugins for Copilot Cowork). The Planner Plugin page lists the same licence, Copilot Cowork enabled for the organisation, and user access to Planner as prerequisites.

Cowork is billed by usage. The Cowork governance page says activities such as model responses, tool and skill calls, image generation and browser tasks count toward the organisation's consumption, and that admins can set per-user or per-group limits. Access to Cowork comes from a spending policy that selects Cowork (see the second controls row). Learn says a low credit limit does not remove access, and that limit enforcement is evaluated asynchronously, so a user may start tasks after the limit is reached.

Learn states that Audit (Standard) provides the Copilot activity logs at no additional cost. Indirect costs are admin time to deploy and support the plugin and user guidance. A Copilot Credit rate specific to Planner Plugin actions is not yet published.

## Scope

**Users and licences.** Users need an active Microsoft 365 Copilot licence, access to Copilot Cowork and access to Planner. Cowork access itself depends on a spending policy that selects Cowork.

**Roles.** The Planner Plugin page lists Global Administrator or Copilot Administrator as the admin role.

**Cloud and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) only, on desktop, Teams and Surface devices, and web.

**Rollout.** MC1540339 gives late October to late November 2026 for General Availability (Worldwide), with Frontier access available now. Availability cannot be scoped by country or region; Learn says to use security groups instead.

## Governance guidance

### Before rollout

- Confirm that intended users hold Microsoft 365 Copilot licences and are in the scope of a spending policy that selects Cowork (second row of the controls table).
- Choose a pilot security group, as the Learn page suggests, and decide whether to install the plugin for them or make it available for them to add.
- Check whether Microsoft Purview Information Barriers are in use in the tenant, because Learn says they aren't currently supported for Cowork plugin management and sharing.
- Review who can reach sensitive Planner plans, since the plugin works within each user's existing access.

### At rollout

- Install or make the Planner Plugin available to the pilot group in the Microsoft 365 admin center (first row of the controls table).
- Tell users they must complete the plugin's connect step themselves, and that Cowork asks them to approve changes before it writes to Planner.
- Update helpdesk guidance for the not-connected and cannot-find-the-plugin cases the Learn page lists.

### After rollout

- Search the Microsoft Purview audit log under Copilot activities for Cowork and plugin activity.
- Watch Cowork credit consumption in Copilot > Cost Management against the spending policy limits.
- Block the plugin from the Users tab if a problem appears (first row of the controls table), remembering that conversations already in progress continue.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Planner Plugin is installed for, available to or blocked for users</strong><br><small>Tenant</small><br><small class="controls__note">Admin role: Global Administrator or Copilot Administrator. Users tab offers Available to all users, Available to specific users or groups, and Block. The Graph call blocks only (beta, preview; needs a Microsoft Agent 365 licence).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Planner Plugin › Users <a href="https://learn.microsoft.com/planner/manage-planner-plugin-cowork" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users have access to Cowork and the credit limits on that access</strong><br><small>User</small><br><small class="controls__note">Select Cowork on the Select agents and services step. A low limit does not remove access. The API call updates displayName, periodLimit, perUserLimit and billingMethods (beta).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Select agents and services <a href="https://learn.microsoft.com/copilot/cowork/cowork-admin-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The plugin is governed through the same Agents > Tools page as other Cowork plugins. Learn lists the settings as Installed for all users, Installed for specific users or groups, Available to all users, Available to specific users or groups, and Blocked. Installing for users is done under Agents > Tools > Planner Plugin by selecting Installed for, then All users or Specific users/groups.

The Graph call in the first row blocks a package. The Package Management API overview describes a package as including plugins, and the API is a beta, preview operation that needs a Microsoft Agent 365 licence. The reference does not name the Planner Plugin.

The second row governs Cowork access, not the plugin. The Cowork governance page says the Cowork entry under Agents > All agents no longer controls access; a spending policy that selects Cowork does. The Graph call changes a policy's displayName, periodLimit, perUserLimit and billingMethods; the reference does not list the services a policy selects among the updatable properties.

## Open questions

- What Copilot Credit rate applies to Planner Plugin actions in Cowork? Watch the Copilot Cowork governance page and the Copilot Credits guidance.
- Can a user pre-authorise Planner writes in a scheduled or event-triggered Cowork task, given that MC1540339 says changes to Planner still require approval and the Cowork governance page says users can pre-authorise actions? Watch the Planner Plugin page.
- The roadmap item lists General Availability and Preview phases and the notice says Frontier access is available now with general availability targeted for November 2026. When does the General Availability rollout complete in your tenant? Watch MC1540339 and the roadmap item.
- The roadmap item lists Worldwide only. Will the Planner Plugin reach government clouds, and where will Microsoft say so? Watch the roadmap item and the Cowork in GCC page.

<!-- rationale
risk: Medium. Cowork can write to Planner and act across Microsoft 365 using Planner context, but users approve changes and the plugin acts within each user's existing Planner permissions.
cost: Variable. Users need a Microsoft 365 Copilot licence, and Cowork activity, including tool and skill calls, counts as usage-based consumption under a spending policy. A rate for this plugin is not yet published.
impact: Medium. Licensed Copilot users who work in Planner and Cowork notice it once an admin installs it or makes it available; users outside that group see nothing.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Planner Plugin availability is managed in Microsoft 365 admin center under Agents > Tools > Planner Plugin > Users. | Found: To block the plugin, go to Agents > Tools, select Planner Plugin, open the Users tab, and select Block. | Fix: The path reaches the correct tab but stops before its controls. Extend it to 'Agents > Tools > Planner Plugin > Users > Available to specific users or groups'; retain the alternative availability and Block options in the note, and the separate installation route in the prose. | Source: https://learn.microsoft.com/planner/manage-planner-plugin-cowork
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Cowork service selection is reached through Copilot > Cost Management > Configuration > + Add spending policy > Select agents and services. | Found: On the Scope user and group step, choose Specific groups and select the security group. On the Select agents and services step, select Cowork. | Fix: Include the omitted audience-selection step: 'Copilot > Cost Management > Configuration > + Add spending policy > Scope user and group > Specific groups > group > Select agents and services > Cowork'. This is the pilot-group route documented by the cited governance page. | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance
- [supported, minor] front matter: licensing.model and licensing.notes / licensing: The mixed licensing model combines a Microsoft 365 Copilot licence requirement with Cowork usage-based billing. | Found: Services managed by usage-based billing in the Microsoft admin center now include: Cowork (Copilot license required) | Fix: Add https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits to sources, titled 'Understand usage-based billing and cost management for Copilot Credits'. It explicitly connects Cowork to Copilot Credit billing and documents consumption monitoring under Copilot > Cost management. | Source: https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist's audit-monitoring instruction is represented in the controls table. | Found: Checklist: 'Search the Microsoft Purview audit log under Copilot activities for Cowork and plugin activity.' The table contains only plugin availability and Cowork access/credit-limit rows. | Fix: Remove the After rollout checklist bullet 'Search the Microsoft Purview audit log under Copilot activities for Cowork and plugin activity.' Keep the verified audit description in Risk assessment and Cost and licensing; do not add a control row during this correction.
-->
