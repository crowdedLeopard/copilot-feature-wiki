---
title: "Microsoft 365 Copilot: People Skills removal and deletion admin control"
slug: "m365-copilot-people-skills-removal-and-deletion-admin-control"
roadmapId: 565905
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "A Microsoft 365 admin centre setting lets administrators permanently delete the People Skills library and users' skills data. Nothing happens unless an admin uses it, and deleted data is not restored."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The People Skills overview says People Skills comes with Microsoft Copilot or Viva licences and does not need a separate licence. The removal page names no licence or meter of its own."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["people-skills","m365-admin-center","m365-copilot","data-governance","privacy","admin-controls","viva-feature-access-management"]
sources:
  - title: "Microsoft 365 Roadmap 565905"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565905"
    kind: "roadmap"
  - title: "Manage your skills library in People Skills"
    url: "https://learn.microsoft.com/copilot/manage/people-skills-manage-skills-library"
    kind: "learn"
  - title: "Overview of People Skills"
    url: "https://learn.microsoft.com/copilot/manage/people-skills-overview"
    kind: "learn"
  - title: "Privacy, sharing, and access controls in People Skills"
    url: "https://learn.microsoft.com/copilot/manage/people-skills-sharing-inferencing-controls"
    kind: "learn"
  - title: "Set up People Skills"
    url: "https://learn.microsoft.com/copilot/manage/people-skills-setup"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","auditing"]
controls:
  - governs: "Permanent removal of the tenant's People Skills library and all users' skills data"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Data access > People Skills in Microsoft Copilot > Settings > People Skills removal and deletion"
      docs: "https://learn.microsoft.com/copilot/manage/people-skills-manage-skills-library"
    api: null
    note: "Global Administrator, Knowledge Admin or AI admin. People Skills must already be set up. Permanent: deleted data is not restored on re-setup."
  - governs: "Whether People Skills user experiences are on for the tenant, groups or users (deletes user-level data, not the library)"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Feature access management > People Skills"
      docs: "https://learn.microsoft.com/copilot/manage/people-skills-sharing-inferencing-controls"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId PeopleSkills -FeatureId SkillsUserExperienceControl -Name MultipleGroups -IsFeatureEnabled $false -GroupIds group1@contoso.com,group2@contoso.com"
      docs: "https://learn.microsoft.com/copilot/manage/people-skills-sharing-inferencing-controls"
    note: "Existing narrower alternative, not the removal control. In the policy, choose the People Skills user experiences feature. Turning it off deletes affected users' skills data but not the skills library."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-24T22:41:12"
changes:
  - date: "2026-11-21"
    note: "First briefing: documents the People Skills removal and deletion control, who can use it, what it deletes and its timings."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 58
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "b1bf8988e5283104042ec981a8eb9b7b"
---

## What's changing

The roadmap item describes a new admin control in the People Skills settings that permanently removes the organisation's People Skills data from the tenant. Microsoft Learn documents it as the **People Skills removal and deletion** control on the Manage People Skills page in the Microsoft 365 admin center. The roadmap states the control is admin-only with no automatic changes.

Removal deletes the organisation's skills library and all library data, including custom skills, and all users' confirmed, inferred and imported skills data. Afterwards users no longer see skills on their profile card, and skills data no longer flows into Microsoft Copilot, Microsoft Viva or other Microsoft 365 skills experiences.

Microsoft says most data is deleted within 48–72 hours. Skills data in Viva Learning can take up to one week to be fully deleted, although the Viva Learning skills experience is turned off immediately. Learn warns that removal is permanent: deleted data is not restored if you set up People Skills again, and Microsoft recommends waiting at least one week before doing so.

The roadmap record lists the item as Launched, General Availability, with a target of July CY2026, for Worldwide (Standard Multi-Tenant) on Web.

## Why it matters

This gives data-governance and compliance teams a documented way to offboard the whole tenant from People Skills, rather than removing skills a few at a time. The existing alternatives are narrower: deleting individual library skills, or turning off the People Skills user experiences control for chosen users or groups, which deletes those users' data but not the library.

The roadmap says the control makes no automatic changes, so if nobody acts, People Skills data stays as it is. The decision is therefore whether your organisation wants to keep People Skills at all, and who is allowed to make a permanent, tenant-wide deletion.

## Risk assessment

**Data exposure**

- Removal permanently deletes the skills library, custom skills and every user's confirmed, inferred and imported skills data. Learn says deleted data is not restored on re-setup, so take any export you need first. The manage page lists an import or export option that covers the custom skills library and confirmed user skills.
- Learn states that most data is deleted within 48–72 hours and Viva Learning data within a week, so expect remnants to be visible for that period.

**Security & identity**

- The control is available to a Global Administrator, Knowledge Admin or AI admin once People Skills is set up. Check who holds those roles, because one confirmed action removes the data for the whole tenant.
- The set-up page lists AI administrator and Knowledge administrator as the roles that can set up People Skills; the removal page adds Global Administrator.

**Autonomy & actions**

- The roadmap says the control is admin-only with no automatic changes. After an administrator confirms in the dialog, Learn says deletion begins automatically and needs no further action.

**Change & support**

- Users stop seeing skills on profile cards, and skills no longer reach Copilot or Viva experiences. Expect questions from people who used skills in Copilot people queries or Viva Learning.
- The Viva Learning skills experience is turned off immediately, before the data is fully deleted.

## Cost and licensing

Microsoft's People Skills overview says People Skills comes with your Microsoft Copilot or Viva licences and does not need a separate licence. It describes three service plans: People Skills - Foundation, People Skills - Advanced and Microsoft Copilot in Productivity Apps. The removal section of the manage page lists set-up and an administrator role as its prerequisites and names no licence or meter.

The cost that follows from the change is indirect: administrator time to decide, export what you need and run the removal, and the effort of repeating the initial setup if you return to People Skills later.

## Scope

People Skills must already be set up in the tenant; Learn says the control isn't available to tenants that have not deployed People Skills. The roles named on the removal page are Global Administrator, Knowledge Admin and AI admin.

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with no US Government cloud listed. The overview footnote says People Skills is available in the Microsoft 365 commercial public cloud, excluding EDU. The removal is tenant-wide: it deletes the library and all users' skills data, not a chosen group.

## Governance guidance

### Before rollout

- Decide whether the aim is to leave People Skills entirely or to restrict it for some users; the People Skills user experiences control can be scoped to groups and users and deletes user-level data for them, but not the library.
- Export anything you need to keep, using the import or export option on the manage page, which covers the custom skills library and confirmed user skills.
- Confirm which of your Global Administrators, Knowledge Admins or AI admins will run the removal, and obtain compliance sign-off, because the deletion is permanent.
- Tell service desk and Viva Learning owners that skills disappear from profile cards and that the Viva Learning skills experience turns off immediately.

### At rollout

- Open the control from the path in the controls table, read the confirmation dialog that lists the data to be removed, and select **Delete People Skills** only when sign-off is recorded.
- Record the time you confirmed, so you can check the 48–72 hour and one-week windows Learn gives.

### After rollout

- Check profile cards, Copilot people queries and Viva Learning after 48–72 hours and again after a week.
- Search the audit log for the People Skills activities TenantSkillsLibraryDeleted, UserDataDeleted and TenantOffboardCompleted, and note which appear for your run (see [Microsoft Purview Audit](/concepts/auditing/)).
- Wait at least one week and repeat the initial setup if you decide to return to People Skills, and plan to rebuild the library, because deleted data is not restored.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Permanent removal of the tenant's People Skills library and all users' skills data</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator, Knowledge Admin or AI admin. People Skills must already be set up. Permanent: deleted data is not restored on re-setup.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Data access › People Skills in Microsoft Copilot › Settings › People Skills removal and deletion <a href="https://learn.microsoft.com/copilot/manage/people-skills-manage-skills-library" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether People Skills user experiences are on for the tenant, groups or users (deletes user-level data, not the library)</strong><br><small>Group</small><br><small class="controls__note">Existing narrower alternative, not the removal control. In the policy, choose the People Skills user experiences feature. Turning it off deletes affected users' skills data but not the skills library.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Feature access management › People Skills <a href="https://learn.microsoft.com/copilot/manage/people-skills-sharing-inferencing-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId PeopleSkills -FeatureId SkillsUserExperienceControl -Name MultipleGroups -IsFeatureEnabled $false -GroupIds group1@contoso.com,group2@contoso.com</code> <a href="https://learn.microsoft.com/copilot/manage/people-skills-sharing-inferencing-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The removal control is a single admin centre action on the Manage People Skills page that acts on the whole tenant. The narrower existing control is **People Skills user experiences**, a Feature access management policy that can be scoped to the tenant, groups or users. Turning it off permanently deletes the affected users' confirmed, AI-inferred and imported skills, and Learn says it does not delete or deprovision the skills library. It is the parent of the other People Skills admin controls.

Learn says Feature access management changes take up to 24 hours to complete and up to 72 hours to propagate across all experiences. The removal page gives its own timings of 48–72 hours for most data and up to one week for Viva Learning.

## Open questions

- Which audit operations does the removal control raise? The audit log lists TenantSkillsLibraryDeleted, UserDataDeleted and TenantOffboardCompleted as generated during offboarding; watch the Audit log activities page for the link to this control.
- What happens to skills held in the User Profile Application (UPA) after removal? The overview says UPA skills are hidden from the profile card when People Skills is deployed; watch the overview page for what returns.
- Does removal also delete skills data already shared with Viva Insights, such as the skills landscape report? Watch the manage page and overview for more detail.
- Is a PowerShell or Graph operation planned for tenant-level removal? Watch the manage page and Message center.

<!-- rationale
risk: Low. Nothing is deleted unless a Global Administrator, Knowledge Admin or AI admin starts it; the exposure that remains is permanent, tenant-wide loss of skills data if it is started by mistake.
cost: Low. Microsoft's People Skills overview says the service comes with Microsoft Copilot or Viva licences and needs no separate licence; the removal page names no licence or meter. The cost is admin time and re-setup if you return.
impact: Low. Only administrators see the control and nothing changes until it is used. If it is used, users lose skills on profile cards and in Copilot and Viva skills experiences.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Settings > Viva > Settings > Feature access management > People Skills reaches the page holding the user-experiences policy control. | Found: Select Feature access management ... select People Skills ... Click on Add policy ... Select People Skills in Apps and services ... Select the Feature ... People Skills user experiences ... Select your Access setting | Fix: Extend controls[1].ui.path and the rendered path to 'Settings > Viva > Settings > Feature access management > People Skills > Add policy > Apps and services: People Skills > Feature: People Skills user experiences > Access setting'. The printed path stops early on the correct page; this is the remaining route documented at https://learn.microsoft.com/copilot/manage/people-skills-sharing-inferencing-controls. | Source: https://learn.microsoft.com/copilot/manage/people-skills-sharing-inferencing-controls
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The governance checklist directs administrators to export skills, but the controls table has no export row. | Found: Export anything you need to keep, using the import or export option on the manage page ... / Table controls: Permanent removal ...; Whether People Skills user experiences are on ... | Fix: Remove the 'Export anything you need to keep, using the import or export option on the manage page, which covers the custom skills library and confirmed user skills' bullet from Governance guidance: Before rollout. Retain the existing export advice in Risk assessment; do not add a control row.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The governance checklist directs administrators to search the audit log, but the controls table has no audit row. | Found: Search the audit log for the People Skills activities TenantSkillsLibraryDeleted, UserDataDeleted and TenantOffboardCompleted ... / Table controls: Permanent removal ...; Whether People Skills user experiences are on ... | Fix: Remove the 'Search the audit log for the People Skills activities TenantSkillsLibraryDeleted, UserDataDeleted and TenantOffboardCompleted, and note which appear for your run' bullet, including its concept link, from Governance guidance: After rollout. Retain the documented operation names in Open questions; do not add a control row.
-->
