---
title: "Microsoft 365 Copilot: embedded knowledge files in declarative agents built with the toolkit"
slug: "m365-copilot-copilot-extensibility-embedded-knowledge-capability-support-for-declarative-a"
roadmapId: 474448
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Developers can package Word, PowerPoint and PDF files inside a declarative agent for grounding. Learn still marks toolkit support as unavailable; administrators should check sideloading, agent blocking and Copilot Credits billing."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "May CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's agent licensing table lists embedded file content as available to users with a Microsoft 365 Copilot licence or in tenants with usage-based (pay-as-you-go) billing, consumed as Copilot Credits, and not to Copilot Chat users without usage-based billing."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["m365-copilot","declarative-agents","knowledge-grounding","extensibility","sensitivity-labels","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 474448"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=474448"
    kind: "roadmap"
  - title: "Add knowledge sources to your declarative agent"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/knowledge-sources"
    kind: "learn"
  - title: "Declarative agent schema 1.9 for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-manifest-1.9"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    kind: "learn"
  - title: "Understand agent details in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-details"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether an agent is blocked for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Whether users can upload custom apps, which building toolkit agents requires (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsappsetuppolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["declarative-agents","knowledge-grounding","m365-copilot-now-smarter-with-visuals-declarative-agents-leverage-embedded-images-for-rich","copilot-credits","sensitivity-labels"]
controls:
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocks the whole agent, not only its embedded knowledge. Graph call is beta and needs a Microsoft Agent 365 licence for the Package Management API."
  - governs: "Whether users can upload custom apps, which building toolkit agents requires"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Setup policies > Global (Org-wide default) > Upload custom apps"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    api:
      kind: "powershell"
      call: "Set-CsTeamsAppSetupPolicy -Identity <policy name> -AllowSideLoading $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsappsetuppolicy?view=teams-ps"
    note: "The cmdlet reference asks admins to create and modify app setup policies in the Teams admin center."
  - governs: "Tenant switch for embedded knowledge in declarative agents"
    scope: "tenant"
    ui: null
    api: null
    note: "Use agent blocking and custom app upload policy instead."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-12T23:15:41"
changes:
  - date: "2026-11-25"
    note: "New briefing: embedded knowledge for toolkit-built declarative agents, with Learn's conflicting availability, licensing and the controls that apply."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 47
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "26d18612cc7a24725d9be305fa466903"
---

## What's changing

Developers can add files to a declarative agent's package so that the agent grounds its answers in them. The roadmap item states that developers and makers can embed knowledge (pdf, doc/docx, ppt) into declarative agents built with Teams Toolkit; Microsoft Learn's developer pages refer to Microsoft 365 Agents Toolkit.

The declarative agent manifest reference (schema 1.9) documents an `EmbeddedKnowledge` capability that "indicates that the declarative agent can use files locally in the app package". The files are listed by relative path, at most 10 of them, each up to 1 MB, and must be Word (.doc, .docx), PowerPoint (.ppt, .pptx), Excel (.xls, .xlsx), plain text (.txt) or PDF. The developer declares the capability in the agent's manifest.

The roadmap record and Microsoft Learn disagree on availability. The roadmap item is **Launched** (General Availability, target May CY2025, Worldwide). Microsoft Learn's knowledge sources page marks embedded file content as configurable in Agent Builder but not in Agents Toolkit, and the manifest reference's note on the sensitivity label property says "Embedded Files are not enabled yet". Treat the toolkit route as documented but not confirmed as working until Learn changes.

Agent Builder, the no-code builder in Microsoft 365 Copilot, has its own file upload route for embedded file content, with different limits and storage in SharePoint Embedded containers. That route is a separate feature; see [/features/m365-copilot-now-smarter-with-visuals-declarative-agents-leverage-embedded-images-for-rich/](/features/m365-copilot-now-smarter-with-visuals-declarative-agents-leverage-embedded-images-for-rich/) for a related change.

## Why it matters

Embedded files move organisational content into the agent itself rather than leaving it in SharePoint or OneDrive, where site permissions decide who reads it. Microsoft states that Information Barriers are not supported on embedded files and that any user who can access the agent can see responses grounded in them. Who the agent is deployed to therefore becomes the access control for that content.

Embedded knowledge is something a developer chooses to declare in an agent's manifest; Microsoft Learn documents no tenant-wide switch for it at the time of writing (November 2026). The decisions for a service owner are who may upload custom apps, which agents are allowed, and whether the tenant's usage-based billing should fund agents grounded in tenant data for unlicensed users.

## Risk assessment

**Data exposure**
- Any user who can access the agent can see responses grounded in the embedded files, and Information Barriers are not supported on them. The control is the agent's audience or blocking it (controls table).
- The service applies sensitivity labels to embedded content only when the agent is created with Agent Builder, so a toolkit-built agent carrying labelled files does not get the agent-level label at the time of writing (November 2026).

**Security & identity**
- Building and testing toolkit agents requires an administrator to allow custom app uploads in Teams, which widens who can install unreviewed app packages. Scope the setup policy to developers.

**Autonomy & actions**
- No change: embedded knowledge adds content the agent can read, not actions it can take.

**Change & support**
- Learn and the roadmap disagree on whether the toolkit route works, so expect developer questions and failed builds until Microsoft aligns them.

## Cost and licensing

**Licence.** Microsoft's "Agent capabilities and licensing models" table lists "Custom knowledge: Embedded file content" as available to licensed Microsoft 365 Copilot users and to Copilot Chat users in tenants with usage-based billing, and not to Copilot Chat users without it. The knowledge sources page also marks embedded file content as needing a licence or metered usage.

**Meter.** Usage-based billing is consumed as Copilot Credits; the same page says usage billing applies to agents grounded in tenant data, while agents grounded in public data or instructions are free to use, and that it needs an Azure subscription and a billing policy in the Microsoft 365 admin center. A Copilot Credits rate specific to embedded knowledge is not yet published.

**Indirect costs.** For files uploaded through Agent Builder, Microsoft says the content is stored in SharePoint Embedded and counts against the tenant's OneDrive and SharePoint capacity. Where files packaged with the toolkit are stored, and whether they count against capacity, is not yet published.

## Scope

- **Who builds:** developers using Microsoft 365 Agents Toolkit (the roadmap item says Teams Toolkit); building with it requires an administrator to allow custom app uploads.
- **Who uses:** users the agent is deployed to, with a Microsoft 365 Copilot licence or in a tenant with usage-based billing.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). Microsoft states that embedded file content is not supported in GCC, and that usage-based billing is not supported in GCC or GCC High.
- **Platform:** Developer, per the roadmap record.
- **Limits:** up to 10 files of 1 MB each in the manifest.

## Governance guidance

### Before rollout
- Decide which developers may upload custom apps, and scope the Teams app setup policy to them rather than the Global (Org-wide default) policy.
- Agree with developers which documents may be embedded, given that Information Barriers do not apply and the agent-level sensitivity label is applied only to Agent Builder agents.
- Confirm whether usage-based billing in the tenant should cover agents grounded in tenant data for users without a Microsoft 365 Copilot licence.

### At rollout
- Ask developers to test the `EmbeddedKnowledge` capability in a development tenant first, since Learn marks the toolkit route as unavailable.
- Limit each agent's deployment to the users entitled to read every embedded file.

### After rollout
- Block any agent whose embedded files should not be visible to its audience, in the Microsoft 365 admin center or through the Graph block call.
- Watch the knowledge sources page and the manifest reference for the toolkit route being enabled.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Blocks the whole agent, not only its embedded knowledge. Graph call is beta and needs a Microsoft Agent 365 licence for the Package Management API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can upload custom apps, which building toolkit agents requires</strong><br><small>User</small><br><small class="controls__note">The cmdlet reference asks admins to create and modify app setup policies in the Teams admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Setup policies › Global (Org-wide default) › Upload custom apps <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAppSetupPolicy -Identity &lt;policy name&gt; -AllowSideLoading $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsappsetuppolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for embedded knowledge in declarative agents</strong><br><small>Tenant</small><br><small class="controls__note">Use agent blocking and custom app upload policy instead.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant setting that turns embedded knowledge on or off separately from the agent at the time of writing (November 2026); control sits with who may upload custom apps and which agents are allowed. The Teams cmdlet reference says app setup policies should be created and modified in the Teams admin center, not with `Set-CsTeamsAppSetupPolicy`. The Graph block call is a beta API, needs the CopilotPackages.ReadWrite.All delegated permission and, per its reference, a Microsoft Agent 365 licence for the Package Management API. For Agent Builder agents, the **All agents** page can filter to agents that use embedded files ([agent details](https://learn.microsoft.com/microsoft-agent-365/admin/agent-details#manage-agents-with-embedded-file-content-as-a-knowledge-source)).

## Open questions

- Does the `EmbeddedKnowledge` capability work today in agents built with Agents Toolkit, given that Learn still marks it unavailable there? Watch the knowledge sources page.
- Where are files packaged with a toolkit agent stored, and do they count against SharePoint and OneDrive capacity?
- Will the sensitivity label property in the manifest apply to toolkit-embedded files once Microsoft enables it?
- Do toolkit agents with embedded files appear in the All agents filter for agents that use embedded files?

<!-- rationale
risk: Medium. Microsoft states that Information Barriers are not supported on embedded files, so anyone who can reach the agent can see answers grounded in them; blocking the agent is the documented control.
cost: Variable. Embedded file content needs a Microsoft 365 Copilot licence or usage-based billing, which is consumed as Copilot Credits; no rate specific to this capability is published.
impact: Medium. Developers and makers who build declarative agents use it, and only the users of the agents they deploy see the results.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Scope: Who uses; Governance guidance: At rollout; rationale: impact / applicability: Who the agent is deployed to is the access boundary, and only users of agents deployed to them see the results. | Found: Under Publish, select the users or groups who can install the agent. Under Deploy (optional), select the users or groups who will have the agent preinstalled. | Fix: Replace 'Who the agent is deployed to therefore becomes the access control for that content' with 'Who can access the agent therefore becomes the access boundary for that content.' In Scope, say 'Users who can access the agent' instead of 'users the agent is deployed to'. Remove the At rollout bullet directing readers to limit deployment. End the impact rationale with 'users who can access those agents see the results'. Deployment alone controls preinstallation, not all access; the distinction is documented at https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview#upload-custom-agent. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview#upload-custom-agent
- [contradicted, blocker] controls[1].api; rendered controls table / command: Set-CsTeamsAppSetupPolicy -Identity <policy name> -AllowSideLoading $false is offered as the automation administrators should use to configure custom app uploads. | Found: but do not use this cmdlet. We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center | Fix: Remove controls[1] and its rendered table row rather than offering this prohibited cmdlet as automation or falsely marking automation undocumented. In Governance controls, retain the verified UI as: 'Configure custom app uploads in Teams admin center > Teams apps > Setup policies > Global (Org-wide default) > Upload custom apps. Microsoft documents Set-CsTeamsAppSetupPolicy for completeness but says not to use it; create and modify app setup policies in the Teams admin center.' Retain the prerequisites and cmdlet references. Remove the Before rollout checklist bullet directing readers to scope the setup policy, since the corrected table will have no row for that control. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsappsetuppolicy?view=teams-ps
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: Agent Builder is a no-code builder in Microsoft 365 Copilot. | Found: Agent Builder provides a simple interface that you can use to quickly build declarative agents by using natural language. This article describes how to use Agent Builder to build an agent for Microsoft 365 Copilot. | Fix: Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents for the description of Agent Builder. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks administrators to confirm tenant usage-based billing, but the controls table has no billing control row. | Found: Confirm whether usage-based billing in the tenant should cover agents grounded in tenant data for users without a Microsoft 365 Copilot licence. Controls table: agent blocking; custom app uploads; tenant embedded knowledge switch. | Fix: Remove the checklist bullet 'Confirm whether usage-based billing in the tenant should cover agents grounded in tenant data for users without a Microsoft 365 Copilot licence.' It asks readers to check a billing control absent from the table; retain the verified billing explanation in Cost and licensing.
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist asks administrators to limit each agent's audience, but the controls table contains no audience or access control row. | Found: Limit each agent's deployment to the users entitled to read every embedded file. Controls table: agent blocking; custom app uploads; tenant embedded knowledge switch. | Fix: Remove the At rollout bullet directing administrators to limit deployment or access: this control has no table row. Keep the corrected access-boundary explanation in Why it matters; do not add a new control row as part of this correction.
-->
