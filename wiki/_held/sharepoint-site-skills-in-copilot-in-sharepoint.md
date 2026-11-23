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
defaultState: "unknown"
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
    api: null
    note: "Site owners; edit, replace, download and version restore are on the Skill detail page only. Microsoft Learn documents no API for site skills at the time of writing (November 2026)."
  - governs: "Tenant-wide switch to turn site skills on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says there are no separate admin controls to turn skills on or off."
  - governs: "Spending limits for advanced work in Copilot in SharePoint"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Add spending policy > Agents and services > Advanced work in SharePoint"
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
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 71
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "3009083518589a5d86033041452ab02b"
---

## What's changing

The roadmap item describes "enhanced Site Skills management capabilities, including skill editing, version control, publishing, restoration, and cross-site duplication" for Copilot in SharePoint. It is listed as In development with a target of September CY2026, for Worldwide (Standard Multi-Tenant), Web, General Availability. The record names no preview date and no admin action.

Microsoft Learn already describes much of this. On the **Site skills** page (**Settings** > **Site skills**), Learn says site owners can upload, review, edit, enable, disable, copy, replace, restore, download and delete site skills. In a skill's **Skill detail** page the **Versions** tab lets you review or restore an earlier version; restoring creates a new current version and does not overwrite the version history. Learn describes no separate "publish" step, so what the roadmap means by publishing is not yet documented. Where the roadmap says "In development" and Learn already documents the actions, both statements stand.

A site skill is a Markdown file in the site's **Agent Assets** library (`/Agent Assets/Skills/<skill-name>/SKILL.md`), owned and managed by the site admin. A site skill can load only on its associated site. New and uploaded skills are enabled by default, per Learn. Skills cannot connect to external systems or run custom code, and they act only with the permissions of the person running them.

Learn's Get started page says Copilot in SharePoint is in public preview, with general availability beginning to roll out on September 30, 2026. This briefing therefore treats the skills behaviour above as the documented design, and anything the roadmap adds beyond it as a plan.

## Why it matters

Site skills turn a repeatable workflow into a shared instruction set that Copilot follows for everyone on the site. Editing, versions, restore and copy to other sites make those instruction sets easier to change and to spread, so a skill written for one team can end up on many sites. Treat each skill as shared configuration that deserves an owner and a review habit.

Microsoft has not stated what happens on arrival, so base your plan on no source saying that existing behaviour changes. Learn documents no separate admin switch for skills, so the practical levers are site permissions, Restricted Content Discovery and the credit policy for advanced work.

## Risk assessment

**Data exposure**
- A site skill is stored as a file in the site's Agent Assets library, so the instructions in it are readable by whoever has access to that library. Learn says standard SharePoint governance (permissions, retention, sensitivity labels, auditing) can be applied to the skill files; check that nobody puts sensitive instructions or sample data in a skill.
- Copying a skill to other sites moves the instructions, not access: Learn says a skill can act only on content the person running it can already access.

**Security & identity**
- By default anyone with Edit permission on a site can create a site skill and anyone with View permission can use it. Edit and version restore let any such creator change what Copilot does for everyone on the site; restricting this means breaking permission inheritance on the Agent Assets library, as Learn describes.
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
- Decide who may create site skills: by default every user with Edit permission can, so review Edit membership on sites where a shared skill would change how documents or lists are handled.
- Plan to break permission inheritance on the Agent Assets library for sites that need tighter control, as Learn describes.
- Identify sites that must stay out of Copilot and add them to Restricted Content Discovery.
- Check whether a spending policy covering **Advanced work in SharePoint** exists before owners build skills for scheduled automations.

### At rollout
- Tell site owners where the Site skills page is (**Settings** > **Site skills**) and that edit, replace, download and version restore are only on the Skill detail page.
- Ask owners to name each skill's purpose and keep sensitive content out of skill files.
- Test a restore on a non-production site to confirm it creates a new current version.

### After rollout
- Review the Site skills list (name, source, status, last modified, creator) on key sites for unexpected skills or recent edits.
- Search the Microsoft Purview audit log for activity on the Agent Assets library files; the audit event names for skill actions are not yet documented.
- Watch Copilot Credits consumption in Cost management for advanced work.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in SharePoint and its AI entry points appear on a site</strong><br><small>Site</small><br><small class="controls__note">Existing setting. Get started says Copilot in SharePoint and AI actions don't appear on a restricted site. By default only SharePoint administrators manage it.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which site skills exist, are enabled, edited, restored or copied on a site</strong><br><small>Site</small><br><small class="controls__note">Site owners; edit, replace, download and version restore are on the Skill detail page only. Microsoft Learn documents no API for site skills at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>SharePoint site (site owner)</strong><br>Settings › Site skills <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-skills" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn site skills on or off</strong><br><small>Tenant</small><br><small class="controls__note">Learn says there are no separate admin controls to turn skills on or off.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending limits for advanced work in Copilot in SharePoint</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; the request body sets periodLimit, perUserLimit or billingMethods. The Graph page does not name which services a policy covers.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Add spending policy › Agents and services › Advanced work in SharePoint <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says there are no separate admin controls to turn skills on or off, so the controls above are indirect. Restricted Content Discovery works per site and, per the Get started page, Copilot in SharePoint and AI actions don't appear on a restricted site; Learn's skills page does not describe what happens to existing skills there. By default only SharePoint administrators can manage Restricted Content Discovery.

The preview tenant availability parameters (`KnowledgeAgentScope` on `Set-SPOTenant`) are being retired; Learn says existing settings are honoured until November 1, 2026 and afterwards availability is managed with Site AI settings (Settings > Site AI, site owners) and Restricted Content Discovery. Site AI settings can hide the Copilot button for site visitors only; they are not a skills control.

Permissions on the Agent Assets library are the only documented way to change who can create or use site skills. A spending policy governs credit use for advanced work, not skill editing or versioning.

## Open questions

- What does the roadmap's "publishing" mean for a site skill, and is a draft separate from the version Copilot runs? Watch the Extend Copilot in SharePoint with skills page and the roadmap item.
- Does copying a skill to other sites need any permission on the target site beyond what Learn lists for creating skills?
- Which audit events record skill edits, restores and copies in the Microsoft Purview audit log?
- Will Microsoft state a default for these management features, or add a tenant-level switch for skills?
- Does a Copilot Credits rate apply to skill management actions, or only to running skills in advanced work?

<!-- rationale
risk: Medium. By default anyone with Edit permission on a site can create a site skill and anyone with View can run it, and Learn documents no separate admin control to turn skills off; existing controls (permissions, Restricted Content Discovery) mostly cover it.
cost: Low. Learn lists "Create and manage skills" among the capabilities included with the Microsoft 365 Copilot licence; skills used in scheduled AI automations fall under advanced work billed in Copilot Credits.
impact: Medium. Site owners and members of sites that use skills notice it; it reaches users with a Microsoft 365 Copilot licence on sites where Copilot in SharePoint is available, not every user.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Security & identity / role: Any user permitted to create a site skill can also edit and restore its versions through the management experience. | Found: Searched: SharePoint Copilot site skills edit restore permissions site members Edit Skill detail; SharePoint restore previous version permissions Edit Contribute version history. Read skills page: Edit is specified for creation; management actions are attributed to site owners. | Fix: Replace 'Edit and version restore let any such creator change what Copilot does for everyone on the site' with 'Learn documents skill editing and version restore for site owners.' Keep the separately supported creation and use permissions.
- [contradicted, blocker] controls[1].api; controls[1].note; Governance controls table / absence: Microsoft Learn documents no API for managing site skills, including their editing. | Found: Provide the contents of a new file or update the contents of an existing file in a single API call. ... PUT /drives/{drive-id}/items/{item-id}/content | Fix: Replace controls[1].api with kind 'graph', call 'PUT /v1.0/drives/{drive-id}/items/{item-id}/content', docs 'https://learn.microsoft.com/graph/api/driveitem-put-content?view=graph-rest-1.0'. Replace the no-API note with 'The API replaces the existing SKILL.md file contents; it is not a dedicated skill lifecycle API. Preserve the skill file format. Sensitivity-labeled files require delegated authentication for content replacement.' The skills page explicitly documents direct .md editing; do not claim this API enables or disables skills. Add the Graph reference to sources and update the rendered row. | Source: https://learn.microsoft.com/graph/api/driveitem-put-content?view=graph-rest-1.0
- [unsupported, blocker] Governance controls / absence: Permissions on the Agent Assets library are the only documented way to change who can create or use site skills. | Found: Searched: Copilot SharePoint site skills permissions Agent Assets library only control restrict create use. Read skills governance and prerequisites plus site-access search excerpts. Learn documents library permissions, but does not state their exclusivity over site-access controls. | Fix: Replace the sentence with 'Learn documents breaking permission inheritance on the Agent Assets library and applying more restrictive permissions to change the default creation and use model.'
- [contradicted, blocker] Governance guidance: After rollout; Open questions / absence: Audit event names for skill actions are not documented. | Found: Modified file | FileModified | User or system account modifies the content or the properties of a document on a site. | Fix: Narrow the checklist clause to 'dedicated site-skill lifecycle audit event names are not yet documented as of November 2026'. Narrow the open question to 'Will Microsoft publish dedicated site-skill lifecycle audit events beyond standard SharePoint file auditing?' The skills page expressly applies standard file auditing to skill files; generic file event names are documented. | Source: https://learn.microsoft.com/purview/audit-log-activities
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls table; Cost and licensing / admin-path: The spending-policy route is Copilot > Cost management > Add spending policy > Agents and services > Advanced work in SharePoint. | Found: Under Access scope, choose whether the policy applies to all users or to specific security groups. ... Under Agents and services, select Advanced work in SharePoint. ... Set Limits and alerts for the policy | Fix: Expand controls[3].ui.path and the rendered route to 'Copilot > Cost management > Add spending policy > Access scope > Agents and services > Advanced work in SharePoint > Limits and alerts'. The current route correctly reaches the wizard but omits the scope section and ends before the limits named by the row. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [supported, minor] Governance guidance: After rollout / admin-path: Administrators can monitor advanced-work Copilot Credits consumption in Cost management. | Found: In the Microsoft admin center, Copilot > Cost management, admins can monitor Copilot Credit consumption and manage spending associated with the supported services | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits to sources for the monitoring instruction. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The governance checklist directs readers to controls that are missing from the controls table. | Found: Plan to break permission inheritance on the Agent Assets library ... Search the Microsoft Purview audit log ... Watch Copilot Credits consumption in Cost management | Fix: The checklist steps for Agent Assets permission inheritance, Purview audit searching and credit-consumption monitoring have no corresponding control rows.
-->
