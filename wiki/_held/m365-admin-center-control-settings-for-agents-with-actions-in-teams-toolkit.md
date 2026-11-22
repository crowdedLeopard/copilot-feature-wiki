---
title: "Microsoft 365 admin center: control publishing of agents with actions built in Teams Toolkit"
slug: "m365-admin-center-control-settings-for-agents-with-actions-in-teams-toolkit"
roadmapId: 487847
topic: "governance"
products: ["Microsoft 365 Admin Center"]
summary: "Microsoft plans an admin centre control over whether makers can publish agents with actions built in Teams Toolkit. The December CY2025 target has passed and Learn does not describe it yet, so nothing is required of admins now."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "December CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this control. The roadmap record names no licence, and the Advanced package uploads page lists the AI Admin role as its only prerequisite and names no licence."
audiences: ["m365-admin","security","maker"]
tags: ["m365-admin-center","agents","agent-governance","copilot-control-system","declarative-agents","publish-controls","admin-controls"]
sources:
  - title: "Manage advanced package uploads"
    url: "https://learn.microsoft.com/copilot/manage/configure-copilot-advanced-package-uploads"
    kind: "learn"
  - title: "Manage agent requests in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    kind: "learn"
  - title: "Publish Teams apps using Microsoft 365 Agents Toolkit"
    url: "https://learn.microsoft.com/microsoftteams/platform/toolkit/publish"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "copilotPackage: reject"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reject"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 487847"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=487847"
    kind: "roadmap"
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","m365-copilot-copilot-extensibility-admins-can-deploy-and-govern-agents-with-mcp-in-the-m36","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin"]
controls:
  - governs: "Who can upload advanced agent and plugin packages"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > All settings > Advanced package uploads"
      docs: "https://learn.microsoft.com/copilot/manage/configure-copilot-advanced-package-uploads"
    api: null
    note: "Role: AI Admin. Learn does not confirm this is the control the roadmap item describes. Basic packages are not affected."
  - governs: "Approving or rejecting requested agents before they are published"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > agent > Publish to store / Reject submission"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{packageId}/reject"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reject"
    note: "The API side rejects a pending submission only; its page says the Package Management API requires a Microsoft Agent 365 license. Beta."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-09-24T23:15:27"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap control for publishing agents with actions from Teams Toolkit, with the nearest documented controls and the open question of whether they are the same."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "00a267432f3be00b3a6f8414cae00b7c"
---

## What's changing

The roadmap item says Microsoft is introducing a new control in the Microsoft 365 admin center that lets admins decide whether agent makers can publish advanced agents (agents with actions) for their tenants. The control is described as applying specifically to advanced agents created from Teams Toolkit. Learn now calls that tool Microsoft 365 Agents Toolkit and says it was previously known as Teams Toolkit.

The roadmap record lists the item as In development, General Availability, Worldwide (Standard Multi-Tenant), Web, with a preview date and target date of December CY2025. That target has passed at the time of writing (November 2026) and the record still reads In development, so treat the dates as a plan. Microsoft Learn has no page for this item, so what follows about its behaviour is the roadmap's description plus the nearest documented controls.

Learn documents an **Advanced package uploads** setting in the Microsoft 365 admin center. It controls who can upload advanced agent and plugin packages, where an advanced agent is a package that uses either a Declarative Agent with actions or an MCP server. Basic package uploads remain allowed, and the setting applies to packages that members of your organisation upload, not to Microsoft or third-party built agents. Learn does not say whether this is the control the roadmap item describes: the roadmap speaks of publishing, the page of uploading.

Today, Learn says the Agents Toolkit publish step submits the app to the Teams admin center, where an admin can approve it for the organisation's app store, and that agents made with the toolkit can be submitted for admin approval in the Microsoft 365 admin center Requests list.

## Why it matters

Agents with actions can invoke custom actions, so deciding who may publish them is a decision about what your tenant's agents can do, not only about who may build them. Learn tells admins reviewing a request to confirm the capabilities, data sources, permissions and custom actions the agent can invoke, which makes publishing a review step for every submission.

Microsoft has not stated what happens when the new control arrives, or what its default is. No source says existing behaviour changes, so expect the approval step to remain the documented gate until Microsoft says more. The case for acting early is modest: read your current Advanced package uploads setting and decide whether the maker population that builds agents with actions should be narrower.

## Risk assessment

**Data exposure**
- Agents with actions can invoke custom actions against the systems they are wired to. The Requests details show an agent's data sources and custom actions, so a reviewer can see them before publishing; the new control's own effect on this is not described.

**Security & identity**
- The publishing wizard has a **Review permissions** step where the admin grants consent to the permissions the agent requests. A rushed approval is the exposure; the Requests list, not the new control, is where that consent is given.

**Autonomy & actions**
- The roadmap item targets agents with actions built in the toolkit. Learn's definition of an advanced package also includes MCP servers; whether the new control covers MCP servers is not stated.

**Change & support**
- If publishing or uploading is restricted, makers will see their submissions refused or blocked and will raise it with support. What happens to agents already published, or to requests already pending, when the control is set is not stated.

## Cost and licensing

No licence or meter is yet published for the control the roadmap describes. The roadmap record names none. The Advanced package uploads page lists the AI Admin role as its prerequisite and names no licence.

One adjacent fact: the Graph call that rejects a pending package submission is in the Package Management API, whose page says access requires a Microsoft Agent 365 license. That page covers the API, not the admin centre screens, and Microsoft has not said whether the new control carries the same requirement.

Indirect cost is admin time: reviewing requests, setting who may upload, and telling makers what changed.

## Scope

- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web. Other clouds are not listed on the record.
- **Who it targets:** the roadmap says advanced agents (agents with actions) created from Teams Toolkit. Learn's Advanced package uploads setting applies to packages uploaded by members of your organisation and does not relate to Microsoft or third-party built agents.
- **Roles:** the Advanced package uploads page names the AI Admin role for managing that setting. The role for the new control is not yet published.
- **Rollout:** the roadmap target is December CY2025; Microsoft has not stated a rollout mechanism or whether a Message center post will announce it.

## Governance guidance

### Before rollout
- Identify which makers build agents with actions or MCP servers, for example in Microsoft 365 Agents Toolkit, so you know who a restriction would reach.
- Read the current **Advanced package uploads** setting (first row of the controls table) and record whether it is set to All users, No users or Specific users or groups.
- Confirm who holds the AI Administrator role, since the setting page names AI Admin.

### At rollout
- Watch Message center and the roadmap item for a post that says whether the new control is a new setting or the Advanced package uploads setting.
- Review each pending agent in **Requests** (second row of the table), checking its custom actions and the permissions it asks for before you select **Publish to store**.
- Select **Reject submission** for requests that do not meet your criteria, rather than leaving them pending.

### After rollout
- Re-open the Learn page and the roadmap item to see whether the status moved from In development.
- Compare the control's effect against your record of the earlier setting, and tell makers what was restricted.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can upload advanced agent and plugin packages</strong><br><small>Tenant</small><br><small class="controls__note">Role: AI Admin. Learn does not confirm this is the control the roadmap item describes. Basic packages are not affected.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › All settings › Advanced package uploads <a href="https://learn.microsoft.com/copilot/manage/configure-copilot-advanced-package-uploads" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approving or rejecting requested agents before they are published</strong><br><small>Agent</small><br><small class="controls__note">The API side rejects a pending submission only; its page says the Package Management API requires a Microsoft Agent 365 license. Beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › agent › Publish to store / Reject submission <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{packageId}/reject</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reject" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Advanced package uploads** is a tenant setting with three options: All users, No users, or Specific users or groups. Microsoft Learn documents no Graph or PowerShell call for it at the time of writing (November 2026). The Graph policy settings list names five other Copilot settings, and the Tenant Configuration Management Copilot resources page lists none for package uploads.

**Requests** is a per-agent decision, not a tenant switch: an admin publishes or rejects each submission. The Graph call in the table rejects a pending submission only, is in beta, and its request body takes optional `version` and `reviewerComment` properties.

The Agent settings page also documents **Agent and plugin access**, which controls which types of agents and plugins users can view and install from the agent catalog, including those built by your organisation. That governs installation, not who may publish.

## Open questions

- Is the control in roadmap item 487847 the existing **Advanced package uploads** setting, or a separate setting for agents built in Teams Toolkit? Watch the roadmap item and the Manage advanced package uploads page.
- What is the control's default when it arrives, and does anything change for tenants that do nothing? Microsoft has not stated it.
- Does it restrict publishing, uploading or both, and what happens to agents already published and requests already pending?
- Does it cover MCP servers as well as agents with actions?
- Which licence, if any, does the control need, and will an API be documented for it?

<!-- rationale
risk: Medium. Agents with actions can invoke custom actions, and Microsoft has not stated the new control's default; the documented admin approval step in the Requests list is the gate that exists today.
cost: Low. The only cost the sources show is admin time spent reviewing agent requests; no licence or meter is yet published for this control.
impact: Medium. The roadmap aims the control at agent makers who build in the toolkit and at the admins who approve their agents, not at end users.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Roles / absence: The role for managing the new Copilot agent publishing control is not yet published. | Found: Assign the AI Administrator role to users who need to do the following tasks: ... Manage all aspects of Microsoft Copilot ... Approve and publish line-of-business copilot agents | Fix: Replace 'The role for the new control is not yet published' with 'Microsoft documents AI Administrator as managing all aspects of Microsoft Copilot, including approving and publishing line-of-business copilot agents; no separate role requirement specific to this planned control is stated.' Cite https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#ai-administrator. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#ai-administrator
- [contradicted, blocker] Governance controls: Requests paragraph / command: The reject request body's version property is optional, without a qualification about supplying the matching submitted version. | Found: The schema defines both parameters as optional. This doesn't mean that omitting version selects the latest or pending version. Supply the version of the staged submission you're rejecting. | Fix: Replace 'its request body takes optional `version` and `reviewerComment` properties' with 'its request body defines `version` and `reviewerComment` as optional in the schema, but Microsoft instructs callers to supply the version of the staged submission being rejected; omitting `version` does not select the latest or pending version.' Keep the existing reject reference citation. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reject
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because no requirement specific to the new publishing control is published. | Found: Your organization has the required subscription and licenses for either Microsoft 365, Microsoft Copilot, or Microsoft Agent 365. | Fix: Set licensing.model to included and replace its notes with: 'Agent management requires the applicable Microsoft 365, Microsoft Copilot, or Microsoft Agent 365 subscription and licenses. No licensing requirement specific to this planned control is published.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview. Keep the narrower feature-specific licensing gap in Cost and licensing rather than implying that product-level entitlement is unknown. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview
-->
