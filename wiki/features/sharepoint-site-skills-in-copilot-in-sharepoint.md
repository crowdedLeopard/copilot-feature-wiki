---
title: "SharePoint: edit, version, restore and copy site skills in Copilot in SharePoint"
slug: "sharepoint-site-skills-in-copilot-in-sharepoint"
roadmapId: 570155
topic: "modern-work"
products: ["SharePoint"]
summary: "The roadmap plans richer management of site skills in Copilot in SharePoint: edit, versions, publish, restore, copy to other sites. Site owners get new controls; no tenant-wide off switch is documented. Review before use."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Skill management is listed as included with the Microsoft 365 Copilot licence; advanced work, such as skills in scheduled AI automations, requires usage-based billing and Copilot Credits. No rate specific to site skills is published."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["sharepoint","copilot-in-sharepoint","skills","version-history","restore","m365-copilot","governance","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 570155"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570155"
    kind: "roadmap"
  - title: "Extend Copilot in SharePoint with skills"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-skills"
    kind: "learn"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Upload or replace the contents of a driveItem"
    url: "https://learn.microsoft.com/graph/api/driveitem-put-content?view=graph-rest-1.0"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","restricted-content-discovery","spending-policies","copilot-credits"]
controls:
  - governs: "Whether Copilot in SharePoint and its AI entry points appear on a site"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Existing setting. Get started says Copilot in SharePoint and AI actions don't appear on a restricted site. By default only SharePoint administrators manage it."
  - governs: "Which site skills exist, are enabled, edited, restored or copied on a site"
    scope: "site"
    ui:
      surface: "SharePoint site (site owner)"
      path: "Settings > Site skills"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-skills"
    api:
      kind: "graph"
      call: "PUT /v1.0/drives/{drive-id}/items/{item-id}/content"
      docs: "https://learn.microsoft.com/graph/api/driveitem-put-content?view=graph-rest-1.0"
    note: "Site owners; edit, replace, download and version restore are on the Skill detail page only. The API replaces existing SKILL.md contents; it is not a skill lifecycle API. Keep the file format; labelled files need delegated auth."
  - governs: "Tenant-wide switch to turn site skills on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says there are no separate admin controls to turn skills on or off."
  - governs: "Spending limits for advanced work in Copilot in SharePoint"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Add spending policy > Access scope > Agents and services > Advanced work in SharePoint > Limits and alerts"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API; the request body sets periodLimit, perUserLimit or billingMethods. The Graph page does not name which services a policy covers."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-31T23:13:25"
changes:
  - date: "2026-11-23"
    note: "First briefing for roadmap item 570155: documents the Site skills page actions Learn already describes and the gaps around publishing, defaults and admin switches."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 76 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: site-skill edit and restore attributed to site owners, Graph file-content API added to the site skills row, audit-event and permission statements narrowed, spending-policy path completed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 99 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: default state set to user-opt-in per Learn, open question on a default removed, and two governance checklist steps that had no controls-table row removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 100 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 100
  confirmed: 100
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3244959ce4bb687faadc2dd17d1ed13c"
---

## What's changing

The roadmap item describes "enhanced Site Skills management capabilities, including skill editing, version control, publishing, restoration, and cross-site duplication" for Copilot in SharePoint. It is listed as In development with a target of September CY2026, for Worldwide (Standard Multi-Tenant), Web, General Availability. The record names no preview date and no admin action.

Microsoft Learn already describes much of this. On the **Site skills** page (**Settings** > **Site skills**), Learn says site owners can upload, review, edit, enable, disable, copy, replace, restore, download and delete site skills. In a skill's **Skill detail** page the **Versions** tab lets you review or restore an earlier version; restoring creates a new current version and does not overwrite the version history. Learn describes no separate "publish" step, so what the roadmap means by publishing is not yet documented. Where the roadmap says "In development" and Learn already documents the actions, both statements stand.

A site skill is a Markdown file in the site's **Agent Assets** library (`/Agent Assets/Skills/<skill-name>/SKILL.md`), owned and managed by the site admin. A site skill can load only on its associated site. New and uploaded skills are enabled by default, per Learn. Skills cannot connect to external systems or run custom code, and they act only with the permissions of the person running them.

Learn's Get started page says Copilot in SharePoint is in public preview, with general availability beginning to roll out on September 30, 2026. This briefing therefore treats the skills behaviour above as the documented design, and anything the roadmap adds beyond it as a plan.

## Why it matters

Site skills turn a repeatable workflow into a shared instruction set that Copilot follows for everyone on the site. Editing, versions, restore and copy to other sites make those instruction sets easier to change and to spread, so a skill written for one team can end up on many sites. Treat each skill as shared configuration that deserves an owner and a review habit.

Site skills are available within Copilot in SharePoint without a separate skills admin switch; users choose to create or use them, subject to site permissions. Learn documents no separate admin switch for skills, so the practical levers are site permissions, Restricted Content Discovery and the credit policy for advanced work.

## Risk assessment

**Data exposure**
- A site skill is stored as a file in the site's Agent Assets library, so the instructions in it are readable by whoever has access to that library. Learn says standard SharePoint governance (permissions, retention, sensitivity labels, auditing) can be applied to the skill files; check that nobody puts sensitive instructions or sample data in a skill.
- Copying a skill to other sites moves the instructions, not access: Learn says a skill can act only on content the person running it can already access.

**Security & identity**
- By default anyone with Edit permission on a site can create a site skill and anyone with View permission can use it. Learn documents skill editing and version restore for site owners. If you need a different creation and use model, Learn describes breaking permission inheritance on the Agent Assets library and applying more restrictive permissions.
- Skills do not expand user permissions, so a skill cannot reach content its runner cannot already open.

**Autonomy & actions**
- Learn's own site skill example adds document names to a list, so skills can write to SharePoint content the user can edit. Learn says skills cannot connect to external systems or execute custom code.
- Skills in scheduled AI automations are listed under advanced work that consumes Copilot Credits; confirm which of your skills would be used that way.

**Change & support**
- Restoring an earlier version creates a new current version, so history stays and a bad edit can be reversed; the roadmap's publish step is not yet described, so confirm whether drafts are separate from what Copilot runs.
- Skill edit, replace, download and version restore are available only in the Skill detail page, which matters for help-desk instructions.

## Cost and licensing

**Licence.** Learn's Get started page says users need an active Microsoft 365 Copilot licence, and that everyday capabilities, including "Create and manage skills", are included with it at no extra cost, with no opt-in step.

**Meter.** Advanced work requires usage-based billing and consumes Copilot Credits. The same page lists "skills in scheduled AI automations" under that advanced work. Setting this up needs a spending policy in the Microsoft 365 admin center (Copilot > Cost management) that includes **Advanced work in SharePoint**. Learn says credit use varies with the type and complexity of the task and the content involved.

**Not yet published.** A Copilot Credits rate specific to skill editing, versioning, restore or cross-site copy is not yet published, and the roadmap item states no licence of its own. See [Copilot Credits](/concepts/copilot-credits/) and [Spending policies](/concepts/spending-policies/).

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant), Web and General Availability; it lists no US Government cloud. Learn's Get started page says GCC, GCC High, DoD, air-gapped Office 365 environments and Microsoft 365 operated by 21Vianet don't currently support Copilot in SharePoint.

Users need a Microsoft 365 Copilot licence and access to a SharePoint site where Copilot in SharePoint is available. Creating skills needs Edit permission on the site and running them needs View. Site owners manage skills on the **Site skills** page. A site skill is available only on its associated site; a personal skill lives in the owner's OneDrive and is not part of this roadmap item's description.

Copilot in SharePoint is in public preview per Learn, with general availability beginning to roll out on September 30, 2026 and capabilities appearing as the rollout progresses.

## Governance guidance

### Before rollout
- Decide whether site skills fit the site's shared document and list workflows.
- Identify sites that must stay out of Copilot and add them to Restricted Content Discovery.
- Check whether a spending policy covering **Advanced work in SharePoint** exists before owners build skills for scheduled automations.

### At rollout
- Tell site owners where the Site skills page is (**Settings** > **Site skills**) and that edit, replace, download and version restore are only on the Skill detail page.
- Ask owners to name each skill's purpose and keep sensitive content out of skill files.
- Test a restore on a non-production site to confirm it creates a new current version.

### After rollout
- Review the Site skills list (name, source, status, last modified, creator) on key sites for unexpected skills or recent edits.
- Note that dedicated site-skill lifecycle audit event names are not yet documented as of November 2026.
- Watch Copilot Credits consumption in Cost management for advanced work.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in SharePoint and its AI entry points appear on a site</strong><br><small>Site</small><br><small class="controls__note">Existing setting. Get started says Copilot in SharePoint and AI actions don't appear on a restricted site. By default only SharePoint administrators manage it.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which site skills exist, are enabled, edited, restored or copied on a site</strong><br><small>Site</small><br><small class="controls__note">Site owners; edit, replace, download and version restore are on the Skill detail page only. The API replaces existing SKILL.md contents; it is not a skill lifecycle API. Keep the file format; labelled files need delegated auth.</small></td><td data-label="Admin UI"><strong>SharePoint site (site owner)</strong><br>Settings › Site skills <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-skills" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PUT /v1.0/drives/{drive-id}/items/{item-id}/content</code> <a href="https://learn.microsoft.com/graph/api/driveitem-put-content?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn site skills on or off</strong><br><small>Tenant</small><br><small class="controls__note">Learn says there are no separate admin controls to turn skills on or off.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending limits for advanced work in Copilot in SharePoint</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; the request body sets periodLimit, perUserLimit or billingMethods. The Graph page does not name which services a policy covers.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Add spending policy › Access scope › Agents and services › Advanced work in SharePoint › Limits and alerts <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says there are no separate admin controls to turn skills on or off, so the controls above are indirect. Restricted Content Discovery works per site and, per the Get started page, Copilot in SharePoint and AI actions don't appear on a restricted site; Learn's skills page does not describe what happens to existing skills there. By default only SharePoint administrators can manage Restricted Content Discovery.

The preview tenant availability parameters (`KnowledgeAgentScope` on `Set-SPOTenant`) are being retired; Learn says existing settings are honoured until November 1, 2026 and afterwards availability is managed with Site AI settings (Settings > Site AI, site owners) and Restricted Content Discovery. Site AI settings can hide the Copilot button for site visitors only; they are not a skills control.

Learn documents breaking permission inheritance on the Agent Assets library and applying more restrictive permissions to change the default creation and use model. A spending policy governs credit use for advanced work, not skill editing or versioning.

## Open questions

- What does the roadmap's "publishing" mean for a site skill, and is a draft separate from the version Copilot runs? Watch the Extend Copilot in SharePoint with skills page and the roadmap item.
- Does copying a skill to other sites need any permission on the target site beyond what Learn lists for creating skills?
- Will Microsoft publish dedicated site-skill lifecycle audit events beyond standard SharePoint file auditing?
- Will Microsoft add a tenant-level switch for skills?
- Does a Copilot Credits rate apply to skill management actions, or only to running skills in advanced work?

<!-- rationale
risk: Medium. By default anyone with Edit permission on a site can create a site skill and anyone with View can run it, and Learn documents no separate admin control to turn skills off; existing controls (permissions, Restricted Content Discovery) mostly cover it.
cost: Low. Learn lists "Create and manage skills" among the capabilities included with the Microsoft 365 Copilot licence; skills used in scheduled AI automations fall under advanced work billed in Copilot Credits.
impact: Medium. Site owners and members of sites that use skills notice it; it reaches users with a Microsoft 365 Copilot licence on sites where Copilot in SharePoint is available, not every user.
-->
