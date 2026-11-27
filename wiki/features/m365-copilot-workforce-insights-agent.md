---
title: "Microsoft 365 Copilot: Workforce Insights agent for leaders, managers and delegates"
slug: "m365-copilot-workforce-insights-agent"
roadmapId: 515145
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans the Workforce Insights agent for November 2026. It answers leaders' questions about org structure, skills and work patterns. Learn marks it Frontier for now; admins control install, data access and delegation."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Teams and Surface Devices","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Workforce Insights is available to users with paid Microsoft Copilot licences, and delegates need one too. People Skills comes with Microsoft Copilot or Viva licences and does not need a separate licence. No price or credit meter is given on the pages read."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["m365-copilot","agents","organizational-data-service","delegation","frontier-program","privacy","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap: Workforce Insights Agent"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=515145"
    kind: "roadmap"
  - title: "Workforce Insights agent"
    url: "https://learn.microsoft.com/copilot/manage/workforce-insights-agent"
    kind: "learn"
  - title: "Workforce Insights Agent overview (Frontier)"
    url: "https://learn.microsoft.com/copilot/manage/overview-wfi-agent"
    kind: "learn"
  - title: "Configure Workforce Insights Agent (Frontier)"
    url: "https://learn.microsoft.com/copilot/manage/configure-workforce-insights-agent"
    kind: "learn"
  - title: "Manage access to Workforce Insights Agent"
    url: "https://learn.microsoft.com/copilot/manage/manage-access-wfi-agent"
    kind: "learn"
  - title: "Set access policies for data in Microsoft 365"
    url: "https://learn.microsoft.com/viva/set-access-policies"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Add-WorkforceInsightsDelegationAccess"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-workforceinsightsdelegationaccess?view=exchange-ps"
    kind: "learn"
  - title: "Overview of People Skills"
    url: "https://learn.microsoft.com/microsoft-365/copilot/people-skills-overview"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "Which users and groups the agent is installed for, including a pilot group (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "Whether the agent is blocked for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which users and groups the agent is installed for, including a pilot group"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Workforce Insights (Frontier) > Install"
      docs: "https://learn.microsoft.com/copilot/manage/configure-workforce-insights-agent"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "Deployment scope uses deployedTo and acquireUsersAndGroups; availability uses availableTo and allowedUsersAndGroups. Beta API: needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; not for production."
  - governs: "Whether the agent is blocked for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Workforce Insights (Frontier) > Block > Block agent"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Learn's Workforce Insights page says admins can block the agent for all users. The beta Package Management API needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; not for production."
  - governs: "Which employee groups can see each organisational data attribute"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Setup > Migration and Imports > Microsoft 365 Organizational Data Service > Settings > Organization-wide access policy > Edit access policies"
      docs: "https://learn.microsoft.com/viva/set-access-policies"
    api: null
    note: "Global Administrator or Organizational Data Source Administrator. Custom attributes default to the Staging policy, which releases data to no users until configured."
  - governs: "Admin-assigned delegate access to a leader's insights"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Add-WorkforceInsightsDelegationAccess -Delegate <Guid> -Delegator <Guid>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-workforceinsightsdelegationaccess?view=exchange-ps"
    note: "Exchange Online PowerShell 3.9.2-Preview1 or later; Global Administrator or AI Administrator. Get- and Remove- variants list and remove access."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-07T23:01:35"
changes:
  - date: "2026-11-20"
    note: "First briefing for the Workforce Insights agent: roadmap target November CY2026, Frontier-era Learn documentation, licence requirements and four admin controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 81 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: People Skills needs no separate licence (licensing now included), access policies are no longer listed as chat-configurable, and the install and block controls now show their beta Graph package APIs."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 84 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 84
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "3cc578f3f0371539ceb1b040f24b98e6"
---

## What's changing

The roadmap item describes the Workforce Insights (WFI) agent in Microsoft 365 Copilot as an agent that helps leaders, managers and their delegates understand their organisation: its structure, team composition, skills inventories and flexible work patterns, in Copilot or Teams. The record lists it as In development with a target of November CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud, and the Android, Desktop, iOS, Mac, Teams and Surface Devices and Web platforms. The date is Microsoft's target, not a commitment.

Microsoft Learn already documents an agent with this name, and marks it as part of the Microsoft Frontier program and "subject to change". Learn says the agent helps leaders and their delegates understand organisation composition, summarise workforce-planning guidance based on skills, identify skills and find team members by attributes such as level, location and title. It draws on Organizational Data, custom attributes sent to Workforce Insights and People Skills data, and responses depend on the user's role and the policies the admin sets. Learn describes the Frontier release, so treat it as the best guide to the general availability release, not a confirmed description of it.

Admins can configure attribute descriptions, organisation context, organisation-specific prompts (up to six, tenant-wide) and a custom AI disclaimer, either on the agent's home page or by chatting with the agent, which saves a change only after the admin confirms it. Admins can also override how managers are identified with a custom SupervisorIndicator attribute. Microsoft has not stated whether the agent is on or off for tenants when it reaches general availability.

## Why it matters

This agent turns HR-style data (reporting lines, levels, locations, skills and any custom attributes you upload) into answers for leaders, so it changes who can learn what about people, not just which tool they use. What a manager or delegate sees depends on the access policies on each attribute. Learn gives a manager-confidential custom attribute called salary as its example of data a delegate can query, so the policy settings matter more than the agent's install settings.

Because Microsoft has not stated the default on arrival, plan on the roadmap target of November 2026 and settle the policy and licence questions first. Learn also says the agent is not built to monitor behaviour, manage performance or make employment decisions, and that admins must follow their organisation's legal and business rules, including Works Council guidance. Involve HR and legal before any broad rollout.

## Risk assessment

**Data exposure**
- Custom attributes can include manager-only fields. Learn's example is a salary attribute, and a delegate assigned by the manager can query data in that column. Access policies decide who sees each attribute; Learn says custom attributes default to the Staging policy, which releases data to no users until an admin configures it.
- Organisation context can appear in answers. Learn says to assume everyone in the company can see what you enter, and organisation-specific prompts apply to the whole company, not to groups or roles. Keep both free of employee-level or sensitive detail.

**Security & identity**
- Admin-assigned delegation uses Exchange Online PowerShell cmdlets that need the Global Administrator or AI Administrator role. Learn names the Organizational Data Source Administrator for importing data and organisation-specific prompts, so split these duties across roles.
- Delegates need a paid Microsoft Copilot licence, and manager-level policies reach delegates only where the policy allows delegate access.

**Autonomy & actions**
- Learn describes question answering and admin-side chat that proposes changes and saves them only after confirmation. No autonomous action on employee data is described. Learn says the agent is not built to make employment decisions, but it cannot stop leaders using its answers that way; say so in your communication.

**Change & support**
- The agent is marked Frontier and subject to change, and admin, delegation and report experiences are limited to English. Expect behaviour to move between the Frontier release and general availability.
- Learn says SupervisorIndicator and WeeklyBadgeDays stopped being sent as reserved fields from 1 October 2026, so tenants using them must have copied them to renamed custom fields. Organisation context changes can take up to 15 minutes to take effect.

## Cost and licensing

Learn says Workforce Insights is available to users with paid Microsoft Copilot licences, and that delegates also need a paid Microsoft Copilot licence (Workforce Insights agent page). The configuration page says the Frontier release requires a paid Microsoft 365 Copilot licence and that the tenant enrols in the Microsoft Frontier program. People Skills comes with Microsoft Copilot or Viva licences and does not need a separate licence; skills queries require People Skills to be enabled and its licensing requirements met (People Skills overview).

The pages read give no separate price, add-on SKU or Copilot Credits rate for the agent at the time of writing (November 2026). The practical costs are admin time and HR data preparation. Whether the general availability release changes the Frontier enrolment requirement is not yet published.

## Scope

**Users and licences.** Leaders, managers and delegates with paid Microsoft Copilot licences. Users see data according to their role and the access policies set by the admin: Learn says a manager sees public and manager-only data about their team, and an individual contributor sees only public data unless an expanded data scope was provided.

**Roles.** Learn lists Global Administrator (rare tasks), AI Administrator (Copilot and agents) and Organizational Data Source Administrator (importing and maintaining org data) for Workforce Insights.

**Cloud and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) only, on Android, Desktop, iOS, Mac, Teams and Surface Devices and Web. The record lists no US Government cloud.

**Prerequisites.** Organisational data uploaded to Microsoft 365 Profile; People Skills set up and enabled, with its licensing requirements met, for skills queries; Frontier enrolment for the release Learn documents.

## Governance guidance

### Before rollout
- Confirm which leaders, managers and delegates hold a paid Microsoft 365 Copilot licence, and decide whether to set up People Skills for skills questions.
- Review the organisation-wide access policies for every custom attribute you share with Workforce Insights, and decide who the manager-level policies and delegate access should reach.
- Assign AI Administrator and Organizational Data Source Administrator for routine work and keep Global Administrator for rare tasks, as Learn advises.
- Check whether your tenant used SupervisorIndicator or WeeklyBadgeDays as reserved fields, and copy them to renamed custom fields.
- Agree with HR, legal and any works council what leaders may use the answers for.

### At rollout
- Pilot by installing the agent for specified users or groups from Agents > All agents in the Microsoft 365 admin center, then widen.
- Confirm an attribute description for each custom column; Learn says columns without a confirmed description are not used by the agent.
- Publish organisation context, any organisation-specific prompts and the custom AI disclaimer from the agent's home page after testing them with real questions.
- Decide whether admin-assigned delegation is needed and who runs the cmdlets.

### After rollout
- Test with a manager, a delegate and an individual contributor to confirm each sees only the scope their policies allow.
- List a leader's delegates with Get-WorkforceInsightsDelegationAccess and remove any that are no longer needed.
- Review role holders and access policies whenever attributes, managers or business needs change.
- Re-read the Learn pages when the agent moves from Frontier to general availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups the agent is installed for, including a pilot group</strong><br><small>User</small><br><small class="controls__note">Deployment scope uses deployedTo and acquireUsersAndGroups; availability uses availableTo and allowedUsersAndGroups. Beta API: needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; not for production.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Workforce Insights (Frontier) › Install <a href="https://learn.microsoft.com/copilot/manage/configure-workforce-insights-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the agent is blocked for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Learn's Workforce Insights page says admins can block the agent for all users. The beta Package Management API needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; not for production.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Workforce Insights (Frontier) › Block › Block agent <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which employee groups can see each organisational data attribute</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator or Organizational Data Source Administrator. Custom attributes default to the Staging policy, which releases data to no users until configured.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Setup › Migration and Imports › Microsoft 365 Organizational Data Service › Settings › Organization-wide access policy › Edit access policies <a href="https://learn.microsoft.com/viva/set-access-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin-assigned delegate access to a leader's insights</strong><br><small>User</small><br><small class="controls__note">Exchange Online PowerShell 3.9.2-Preview1 or later; Global Administrator or AI Administrator. Get- and Remove- variants list and remove access.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-WorkforceInsightsDelegationAccess -Delegate &lt;Guid&gt; -Delegator &lt;Guid&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-workforceinsightsdelegationaccess?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Agent access and data access are separate controls. Learn says changing agent access does not change a user's data access in other apps, so blocking or limiting the agent does not alter the access policies, and the access policies apply to organisational queries in Microsoft 365 Copilot as well as to this agent.

The delegate-access cmdlets need Exchange Online PowerShell 3.9.2-Preview1 or later and run as AI Administrator or Global Administrator. Learn also lists Get-WorkforceInsightsDelegationAccess and Remove-WorkforceInsightsDelegationAccess for reviewing and removing delegate access. Separately, the access policy settings include an Allow users to delegate access option, which decides whether a delegate gets the user's population scope for attributes under that policy.

Learn says admins can stop users assigning delegates by using Microsoft 365 control access to features with PowerShell under the module name WorkforceInsights; the Workforce Insights agent page does not give the command, so it is not a row here. Organisation context, prompts and the AI disclaimer are set from the Workforce Insights home page, and Learn's steps for them start at that page, not at an admin centre menu.

## Open questions

- Will the agent be on, off or available for admins to install when it reaches general availability? Watch the Learn pages and Message center for a default.
- Does general availability keep the Frontier enrolment requirement and the "paid Microsoft 365 Copilot licence" rule that the Frontier pages state?
- Which audit events and usage reports record Workforce Insights questions and admin changes? Watch the Learn pages for the agent's Activity view in the admin centre.
- Does general availability change these beta package-management APIs?

<!-- rationale
risk: Medium. The agent answers from organisational attributes, including manager-only custom fields that delegates can query; existing access policies and install controls cover this, but custom attributes need configuring first.
cost: Low. Learn requires a paid Microsoft 365 Copilot licence for users and delegates; People Skills comes with Microsoft Copilot or Viva licences and needs no separate licence, so the new cost is admin time to configure data, policies and rollout.
impact: Medium. Leaders, managers and their delegates notice it, and anyone whose attributes feed it is affected by what the access policies reveal; most staff will not use it directly.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The printed organizational-data access-policy route reaches the page listing configurable policies. | Found: Under the Organization-wide access policy section, select Edit access policies. ... To edit one of the configurable access policies, select the access policy from the list, then select Edit access policy. | Fix: Extend controls[2].ui.path and its rendered route to 'Settings > Setup > Migration and Imports > Microsoft 365 Organizational Data Service > Settings > Organization-wide access policy > Edit access policies > policy > Edit access policy'. The cited page documents Users and Population group there. | Source: https://learn.microsoft.com/viva/set-access-policies
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls table / consistency: The checklist's configuration controls are all represented in the controls table. | Found: Assign AI Administrator and Organizational Data Source Administrator; copy them to renamed custom fields; Confirm an attribute description; Publish organisation context ... prompts and ... disclaimer. The table covers only installation, blocking, access policies and delegation. | Fix: The role-assignment, reserved-field migration, attribute-description and context/prompt/disclaimer checklist steps have no corresponding controls-table rows. Remove those four configuration bullets from the checklist, retaining their documented explanations elsewhere; do not add rows.
-->
