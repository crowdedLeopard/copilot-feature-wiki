---
title: "Work IQ: agents select the most relevant skills for each request"
slug: "work-iq-dynamic-skills"
roadmapId: 570869
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Work IQ agents are planned to pick the most relevant skills per request. Microsoft Learn has no page on the feature yet; admins can review skill availability in Agents > Tools and decide who may use skills."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Work IQ follows the published access rules: Microsoft 365 Copilot licensed users have access in Microsoft 365 Copilot experiences and agents; custom and third-party agents are subject to usage-based billing, and users without that licence are billed on usage. A rate for dynamic skill selection is Not yet published."
audiences: ["m365-admin","service-owner","maker","security"]
tags: ["work-iq","agents","business-skills","mcp","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap 570869"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570869"
    kind: "roadmap"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq"
    kind: "learn"
  - title: "Business skills overview"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "copilotPackage resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/resources/copilotpackage"
    kind: "learn"
videos: []
related: ["work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","work-iq","work-iq-execute-recipes","mcp","work-iq-agent-policy-governance"]
controls:
  - governs: "Blocking a skill package so agents cannot use it"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > plugin or skill > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General control: Microsoft has not confirmed it applies to dynamically selected skills. Graph API is beta and needs an Agent 365 licence."
  - governs: "Which users can use a skill package"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > plugin > Users"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "General control for skill packages, not confirmed for this feature. The request body sets availableTo to allowedForNone to make the package unavailable to all users. Beta API needs an Agent 365 licence."
  - governs: "Setting specific to dynamic skill selection"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no such setting at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-11-17T20:22:13"
changes:
  - date: "2026-11-17"
    note: "New briefing from roadmap item 570869; Microsoft Learn has no page on this feature yet, so it rests on the roadmap text and related Work IQ pages."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: removed an unsupported caveat on Work IQ's user-scoped boundary and added the Graph Update package call for skill-package user availability."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the licensing model to mixed and replaced the 'licence not yet published' statements with Work IQ's published access rules; tidied the Update package call and added the copilotPackage resource source."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0553eea413ac5beb2f79ba380cbb000f"
---

## What's changing

The roadmap item says Microsoft plans to enable agents to select and use the most relevant skills dynamically for each request. It is listed under Work IQ and Microsoft Copilot (Microsoft 365), for the Developer platform.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Which skills are in scope, how an agent chooses between them and what an administrator sees are Not yet documented. Learn does describe skills in Work IQ in general: skills provide task-specific instructions that help Copilot and agents complete specialized work, and tools are what carry out the actions.

For business skills, a related Work IQ capability, Learn describes the pattern this feature may resemble: the agent compares skill names and descriptions with the user's request, retrieves the instructions of a relevant skill and uses its connected tools. Learn is explicit that agent selection is probabilistic. Whether this roadmap item uses the same mechanism is not stated.

The record gives a status of In development, a preview target of October CY2026 and a general availability target of November CY2026, for Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not commitments, and the release phases listed are General Availability and Preview.

## Why it matters

If agents choose skills per request, the instructions that shape an agent's behaviour are no longer fixed when the agent is built. Service owners should expect that two similar requests may be handled with different skills, and that the quality of skill names and descriptions starts to matter. Learn's own advice for business skills is to test representative requests before sharing a skill broadly.

Microsoft has not stated how this arrives or whether anything changes for existing agents, so no source says existing behaviour changes. Nothing is known to need action before the target month, but this is a reasonable point to check who can upload and make skills available in your tenant.

## Risk assessment

**Data exposure**
- Microsoft has not said which data a selected skill can reach. Learn says Work IQ actions are user scoped, so a request runs in the context of a specific user and accesses only what that user is allowed to see or do.

**Security & identity**
- Learn documents package-level controls for skills in the Microsoft 365 admin center: availability for all, no or specific users and groups, and a Block action that prevents users and agents from accessing a skill package. These are the controls that exist today for skill packages, and Microsoft has not confirmed they govern skills chosen dynamically.

**Autonomy & actions**
- Skill selection is made by the agent for each request. For business skills Learn says selection is probabilistic, so an agent may apply a skill an owner did not expect. Learn describes skills as the instructions for what actions to take, while tools execute them, so the effect depends on which tools the agent has.

**Change & support**
- Support teams should expect hard-to-reproduce behaviour if the same request can lead to different skills. How selected skills are logged is Not yet documented for this feature; Learn says every Work IQ tool invocation is logged and evaluated.

## Cost and licensing

Work IQ follows the published access rules: Microsoft 365 Copilot licensed users have access in Microsoft 365 Copilot experiences and agents; custom and third-party agents are subject to usage-based billing, and users without a Microsoft 365 Copilot licence are billed based on usage. Work IQ API usage consumes Copilot Credits. A separate rate or meter for dynamic skill selection is Not yet published.

The Work IQ overview page on Learn sets the general rule for Work IQ: API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing. For Microsoft 365 Copilot licensed users, Work IQ is available in all Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents. Users without a Microsoft 365 Copilot licence are billed based on usage. Work IQ API usage consumes Copilot Credits shared with other eligible services, and cost can be managed in the Microsoft 365 admin center. See /concepts/copilot-credits/.

What is not yet published is a rate or meter specific to dynamic skill selection. Managing skill packages through the Package Management API requires a Microsoft Agent 365 licence, per its Learn page.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Developer platform; it lists no other cloud. The record lists release phases General Availability and Preview, with targets of October CY2026 (preview) and November CY2026.

Who receives the feature and what prerequisites apply are Not yet documented. Licensing follows the Work IQ access rules in Cost and licensing, and a separate rate or meter for dynamic skill selection is Not yet published. Learn says skills and Work IQ requests are user scoped in general, and that the Microsoft 365 admin center controls apply to skill packages. Rollout mechanics are not stated.

## Governance guidance

### Before rollout
- Inventory the skill packages already in your tenant under Agents > Tools in the Microsoft 365 admin center, and note who owns each one.
- Decide who should be able to use each skill package: all users, no users or specific users and groups.
- Ask developers building Work IQ agents whether they plan to depend on dynamic skill selection, and what their skill descriptions say.

### At rollout
- Block skill packages you do not want agents to use, once Microsoft confirms that Block also applies to skills chosen dynamically.
- Test representative requests against agents before widening access, since Learn describes agent skill selection for business skills as probabilistic.

### After rollout
- Watch Message center and the Learn Work IQ pages for documentation of this feature, its default and its billing.
- Track Copilot Credits consumption of Work IQ agents with your finance team, as usage-based billing applies to Work IQ in general.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Blocking a skill package so agents cannot use it</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to dynamically selected skills. Graph API is beta and needs an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › plugin or skill › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use a skill package</strong><br><small>User</small><br><small class="controls__note">General control for skill packages, not confirmed for this feature. The request body sets availableTo to allowedForNone to make the package unavailable to all users. Beta API needs an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › plugin › Users <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Setting specific to dynamic skill selection</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table lists the controls Learn documents for skill packages. Microsoft has not confirmed that any of them governs skills selected dynamically: they apply to the package that holds a skill, not to the agent's choice between skills.

The package-level actions are not separate controls for each included component, per Learn. The Package Management API requires a Microsoft Agent 365 licence, its block operation is preview and its delegated permission is CopilotPackages.ReadWrite.All. The Package Management API overview lists list, get, update, block, unblock and reassign operations. The beta Update package operation updates user availability through availableTo and allowedUsersAndGroups. Microsoft Learn documents no setting specific to dynamic skill selection at the time of writing (November 2026).

## Open questions

- Which skills does an agent choose between: business skills in Dataverse, skills uploaded as packages, or both? Watch the Work IQ Learn pages.
- Can an administrator limit or switch off dynamic selection, and is it on by default? Watch Message center for a notice.
- Is a rate or meter specific to dynamic skill selection published, and how does it appear in Copilot Credits reporting?
- Are skill selections recorded in audit or usage logs, and where can administrators read them?

<!-- rationale
risk: Medium. The roadmap says agents will choose skills themselves per request, and Learn documents skill selection for business skills as probabilistic; no setting specific to this feature is documented.
cost: Variable. Work IQ API usage consumes Copilot Credits per Microsoft Learn; whether dynamic skill selection adds its own charge is not yet published.
impact: Medium. Developers, makers and the users of their agents would notice different skills being applied; the roadmap lists the Developer platform.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: related business skills / behaviour: Business skills are a related Work IQ capability supplying process instructions to agents. | Found: Business skills with Dataverse intelligence (preview) are natural-language instructions that encode your organization's processes, policies, and domain knowledge in a format agents can interpret and execute. | Fix: Change 'For business skills, a related Work IQ capability' to 'For business skills, a related Work IQ capability documented as preview'. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq#skills-and-tools
-->
