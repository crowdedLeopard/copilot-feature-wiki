---
title: "Word and Cowork: legal plugins for Microsoft 365 Copilot add legal skills"
slug: "word-legal-plugins-in-copilot"
roadmapId: 571884
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft 365 Copilot is adding legal plugins: on by default in Word desktop for Copilot subscribers, added by users in Cowork. Each has its own admin control. Microsoft's notice says no admin setup is required."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "October CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "The Word legal plugin is enabled for Microsoft 365 Copilot commercial subscribers. Cowork also uses usage-based billing through Copilot Credits, including consumption from skill calls; Cowork access requires a spending policy that includes the user and selects Cowork. Manage Copilot for legal names no separate legal-plugin price or meter."
audiences: ["m365-admin","compliance","security","change-adoption"]
tags: ["m365-copilot","word","cowork","plugins","cloud-policy","microsoft-365-apps","m365-admin-center"]
sources:
  - title: "Manage Copilot for legal"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-for-legal"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "Available plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-available-plugins"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Plan Licensing and Cost for Microsoft 365 Copilot Extensibility"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "MC1509799: Microsoft 365 Copilot: Legal plugins in Word and Cowork"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1509799"
    kind: "message-center"
  - title: "Word: Legal plugins in Copilot (Microsoft 365 Roadmap 571884)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571884"
    kind: "roadmap"
videos: []
related: ["word-legal-plugin","cloud-policy","m365-copilot-copilot-cowork-for-government-clouds","app-management"]
controls:
  - governs: "Whether the legal plugin is available in Copilot in Word desktop, per user group"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Legal Skills in M365 Copilot in Word"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Policy name given on the Manage Copilot for legal page. Applies only when the Office app is restarted. Does not govern the Cowork plugin."
  - governs: "Whether the Legal for Cowork plugin can be used by anyone in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Users > Block"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Tenant or Copilot administrator role. New conversations only. Not the Word plugin. Package Management API preview; needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; beta not supported in production."
  - governs: "Which users or groups can find the Legal for Cowork plugin"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Users > Available to specific users or groups"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "Body sets allowedUsersAndGroups and required availableTo (allowedForSome for a selected audience). Preview API: needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; beta not supported in production."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-23"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-22"
    note: "First briefing for the Worldwide legal plugins in Word and Cowork: Word plugin on by default, Cowork plugin added by users, with the separate admin control for each."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected: added the beta Graph block and availability operations for the Cowork plugin, licensing now mixed with Cowork usage-based billing (cost variable), softened rollout wording and removed the audit checklist step."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 76 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 78
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "9faa408de94bb907d94640f8869c48f9"
---

## What's changing

Microsoft 365 Copilot is getting legal plugins in Word and Cowork. The roadmap item describes them as purpose-built skills to help legal professionals summarise, draft, review and redline legal documents, which can use work context from Microsoft 365 and connect to supported third-party legal sources.

The two plugins arrive differently. Microsoft Learn says that within Word desktop the legal plugin is enabled for all Microsoft 365 Copilot commercial subscribers by default, and that Copilot can then use legal skills to complete legal tasks in Word. In Cowork, Learn says end users must add the legal plugin themselves before Copilot can use its skills; Learn names it "Legal for Cowork", while Microsoft's notice MC1509799 calls it the "Cowork for Legal plugin". MC1509799 lists the uses as reviewing contracts against playbooks, drafting contracts from templates and precedent agreements, comparing contracts with precedents, templates and policies, and explaining tracked changes.

MC1509799 also says the Legal Agent is being retired and that existing Legal Agent users will lose access to the product. The notice gives a rollout window: public preview began in late April 2026 and is expected to finish by mid-December 2026, and general availability (Worldwide) begins in mid-October 2026 and is expected to finish by mid-December 2026. The roadmap item shows status Rolling out, a target of October CY2026, a preview date of April CY2026, Worldwide (Standard Multi-Tenant) and Desktop. The notice sets no act-by date and says no admin setup is required. A separate roadmap item covers the GCC version: [Word: legal plugin for Copilot](/features/word-legal-plugin/).

## Why it matters

If nobody acts, the Word plugin is available to Microsoft 365 Copilot commercial subscribers in Word desktop, because Learn says it is enabled by default. The Cowork plugin does not appear for users on its own: Learn says users must add it, although an administrator can also deploy it. Legal teams handle privileged and confidential material, so the decision is whether you want AI legal skills available to every licensed Word user, or only to selected groups.

The two plugins sit in two different admin centres and need two separate decisions. Microsoft's notice names both controls and says each can be turned off for all users, so settle the answer with your legal and compliance leads before the rollout is expected to complete by mid-December 2026.

## Risk assessment

**Data exposure**

- Microsoft's notice MC1509799 says the plugins can use work context from Microsoft 365 and connect to supported third-party legal sources. The notice does not identify specific third-party products and does not specify changes to data storage or caching, so treat the data boundary as unconfirmed until Microsoft says more.
- The notice's compliance table says the change alters how existing customer data is processed, stored or accessed. Include legal and privacy owners in the decision to allow it.

**Security & identity**

- The Word plugin is governed by a Cloud Policy configuration, which targets all users or specific groups. Cloud Policy applies policies only when the Office app is restarted, so a restriction does not take effect in an open Word session.
- The Cowork plugin is governed in the Microsoft 365 admin center, where availability can be set to specific users or security groups, or the plugin can be blocked for everyone.
- Learn says Microsoft Purview Information Barriers are not currently supported for plugin or skill management and sharing in Cowork. Check this before you rely on Information Barriers to separate legal teams.

**Autonomy & actions**

- The skills draft, review and redline legal documents. Learn's Cowork plugin page says Copilot does not provide legal advice or professional determinations and that AI-generated content might be inaccurate, so output needs review by a qualified legal professional.

**Change & support**

- Legal Agent users lose access to that product. Expect help desk questions on where the legal skills moved: Word desktop for the Word plugin, and the Cowork plugin that users add.
- The Cowork plugin has two names across Microsoft's pages ("Legal for Cowork" on Learn, "Cowork for Legal plugin" in MC1509799), which can confuse administrators looking for it in Agents > Tools.

## Cost and licensing

Learn's Manage Copilot for legal page says the Word plugin is enabled for all Microsoft 365 Copilot commercial subscribers, and the Manage plugins for Copilot Cowork page says users of Cowork plugins must have Microsoft 365 Copilot licences assigned. MC1509799 says users with Microsoft 365 Copilot commercial licences are affected and asks administrators to make sure licences are assigned to eligible users.

Cowork also uses usage-based billing through Copilot Credits, including consumption from skill calls. Learn says Cowork access requires a spending policy that includes the user and selects Cowork. See [Manage Copilot Cowork for your organization](https://learn.microsoft.com/copilot/cowork/cowork-admin-governance) and [Plan Licensing and Cost for Microsoft 365 Copilot Extensibility](https://learn.microsoft.com/plugins/cost-considerations).

The Manage Copilot for legal page names no separate legal-plugin price or meter. Any charge for the third-party legal sources the plugins can connect to is not covered by these pages.

Indirect costs are admin time to decide and configure the two controls, communication to legal teams, and updated help desk guidance. Learn says Audit Standard provides Cowork plugin activity logs at no extra cost.

## Scope

**Users and licences.** Microsoft 365 Copilot commercial licences (MC1509799). The Word plugin applies in Word desktop; the Cowork plugin applies in Cowork.

**Clouds and platforms.** The roadmap item lists Worldwide (Standard Multi-Tenant) and Desktop. GCC is covered by a separate roadmap item.

**Roles.** Learn says Cloud Policy can be managed with the Office Apps Administrator role (recommended), Security Administrator or Global Administrator. Managing Cowork plugins needs a tenant administrator or the Copilot administrator role.

**Rollout.** Public preview began in late April 2026 and MC1509799 scheduled general availability (Worldwide) to begin rolling out in mid-October 2026; MC1509799 expects both to complete by mid-December 2026.

## Governance guidance

### Before rollout

- Decide with legal, privacy and compliance leads whether the Word plugin and the Cowork plugin are wanted, and for which groups, since the Word plugin is on by default for Microsoft 365 Copilot commercial subscribers.
- Create or choose Microsoft Entra security groups for the legal teams, because the Cloud Policy configuration and the Cowork plugin's availability setting can both target groups.
- Confirm which legal-team users hold Microsoft 365 Copilot licences, as MC1509799 asks and Learn requires for Cowork plugins.
- Ask legal teams which third-party legal sources they expect to connect, and have security review them before use.

### At rollout

- To keep the Word plugin away from some users, create a policy configuration in the Microsoft 365 Apps admin center that includes "Legal Skills in M365 Copilot in Word" and scope it to the groups concerned.
- To control the Cowork plugin, open Agents > Tools in the Microsoft 365 admin center and block it, or limit it to specific users or groups.
- Tell users that a Word restart is needed before a Cloud Policy change takes effect.
- Tell legal-team users to add the legal plugin in Cowork, or deploy it to them from the same page.

### After rollout

- Update help desk guidance for the retirement of the Legal Agent.
- Check MC1509799 and the Manage Copilot for legal page for changes before mid-December 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the legal plugin is available in Copilot in Word desktop, per user group</strong><br><small>Group</small><br><small class="controls__note">Policy name given on the Manage Copilot for legal page. Applies only when the Office app is restarted. Does not govern the Cowork plugin.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Legal Skills in M365 Copilot in Word <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Legal for Cowork plugin can be used by anyone in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Tenant or Copilot administrator role. New conversations only. Not the Word plugin. Package Management API preview; needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; beta not supported in production.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Block <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can find the Legal for Cowork plugin</strong><br><small>Group</small><br><small class="controls__note">Body sets allowedUsersAndGroups and required availableTo (allowedForSome for a selected audience). Preview API: needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All; beta not supported in production.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Available to specific users or groups <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says the two legal plugins are each managed differently, and the rows above are separate controls: the Word policy does not govern the Cowork plugin, and the Cowork settings do not govern Word. The roadmap item and MC1509799 describe no single switch for both.

At the time of writing (November 2026), Microsoft Learn documents no PowerShell or Graph operation for the Cloud Policy configuration. For Cowork plugins in the organization catalog, the Package Management API documents beta blocking and availability updates. These APIs require a Microsoft Agent 365 licence, and production use of beta APIs is not supported.

A Cowork block takes effect for new conversations; conversations already in progress continue until they end.

## Open questions

- Which third-party legal sources can the plugins connect to, and what data is sent to them? MC1509799 does not identify them. Watch the notice and the Manage Copilot for legal page.
- What does "work context from Microsoft 365" cover for each plugin, and does the Word plugin follow the same sharing and labelling restrictions as other Copilot features? Watch the Manage Copilot for legal page.
- Does connecting a third-party legal source need a separate subscription with that provider? Watch the Manage Copilot for legal page.
- Is the Cowork plugin shown to administrators as "Legal for Cowork" or "Cowork for Legal" in Agents > Tools? Check the name before blocking it.

<!-- rationale
risk: Medium. The Word plugin is on by default for Microsoft 365 Copilot commercial subscribers, and Microsoft says the plugins can use work context from Microsoft 365 and connect to third-party legal sources; a control exists for each plugin.
cost: Variable. Cowork consumes Copilot Credits, including for skill calls; legal-plugin rollout also needs admin and communication time.
impact: Medium. Legal teams are the intended users, but the Word plugin is enabled for all Microsoft 365 Copilot commercial subscribers in Word desktop, so any licensed user can meet it.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope: Clouds and platforms / record: A separate roadmap item covers the GCC Word legal plugin. | Found: Roadmap item 571885: "title": "Word: legal plugin", "clouds": ["GCC"], "platforms": ["Desktop"] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=571885 to sources for the separate GCC roadmap claim.
- [contradicted, minor] Governance guidance: At rollout, deployment bullet; Governance controls / consistency: The checklist's instruction to deploy the Cowork plugin has a corresponding control row. | Found: Tell legal-team users to add the legal plugin in Cowork, or deploy it to them from the same page. The table contains Word availability, Cowork blocking and Cowork availability, not deployment. | Fix: Remove ', or deploy it to them from the same page' from the At rollout checklist bullet; this deployment instruction has no control row.
- [contradicted, minor] Governance guidance: Before rollout, licence bullet; Governance controls / consistency: The checklist's instruction to check users' license assignments has a corresponding control row. | Found: Confirm which legal-team users hold Microsoft 365 Copilot licences, as MC1509799 asks and Learn requires for Cowork plugins. The controls table has no license-assignment row. | Fix: Remove the 'Confirm which legal-team users hold Microsoft 365 Copilot licences, as MC1509799 asks and Learn requires for Cowork plugins' checklist bullet; retain the license requirement in Cost and licensing.
-->
