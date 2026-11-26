---
title: "Copilot Studio: discover and add skills from the skills catalog"
slug: "microsoft-copilot-studio-discover-and-add-skills-from-the-skill-catalog"
roadmapId: 571880
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers will be able to browse and add approved organisational skills in Copilot Studio instead of rebuilding them per agent. Roadmap status is In development; Microsoft has not said whether an admin must act."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's usage-based billing page says agents on the Microsoft Copilot harness may consume Copilot Credits. No licence or rate specific to the skills catalog is published at the time of writing (November 2026)."
audiences: ["m365-admin","power-platform-admin","maker","security"]
tags: ["copilot-studio","skills","agents","cowork","plugins","agent-registry","m365-admin-center","copilot-credits","sharing","copilot-harness"]
sources:
  - title: "Microsoft 365 Roadmap 571880"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571880"
    kind: "roadmap"
  - title: "Manage and delete skills in an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-manage"
    kind: "learn"
  - title: "Share agents with other users and makers (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    kind: "learn"
  - title: "Skills overview for agents (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-overview"
    kind: "learn"
  - title: "Add and manage an uploaded skill (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-add-existing"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Administer Microsoft 365 Copilot plugins"
    url: "https://learn.microsoft.com/plugins/administrator-guide"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "Which users and groups can use a skill package (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "Blocking a skill package across the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Inventory of skill packages in the tenant (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
videos: []
related: ["copilot-credits","microsoft-copilot-studio-agent-sharing-amongst-makers","copilot-studio-share-autonomous-agents-run-only","mcp","power-platform-maker-guidelines-copilot-studio"]
controls:
  - governs: "Which users and groups can use a skill package"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > plugin or skill > Users"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "General control: Microsoft has not confirmed it applies to the Copilot Studio skills catalog. API is preview and needs a Microsoft Agent 365 licence. The request body sets availableTo and allowedUsersAndGroups."
  - governs: "Blocking a skill package across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > skill > Block > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General control: not confirmed for the Copilot Studio catalog. Applies to standalone skill packages; a bundled skill has no block of its own. API is preview."
  - governs: "Inventory of skill packages in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry"
      docs: "https://learn.microsoft.com/plugins/administrator-guide"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'AgentSkills')"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    note: "General control: not confirmed to list Copilot Studio catalog skills. API needs a Microsoft Agent 365 licence."
  - governs: "Who a maker shares a skill with"
    scope: "maker"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Agents > agent > Build > skill > … > Share > Share"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-manage"
    api: null
    note: "Maker-side only; preview. Options are Only you, or specific users or groups. Microsoft Learn documents no API for it at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-18"
    note: "First briefing for this roadmap item; Microsoft Learn documents a preview Browse skills flow, but not the catalog itself."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: the user-availability Graph request now shows the full body, the unsupported data-reach statement was replaced, the credit-rate sentence was reworded and an unmatched credit-monitoring checklist item was removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: the maker Share path now starts from the Agents page, and the user-availability Graph call shows the endpoint only, with the body properties named in the note."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 60
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "42c0b254030d5affa4709d3b5a07a1f2"
---

## What's changing

Copilot Studio is gaining a skills catalog where makers can discover, reuse and selectively share approved organisational skills instead of recreating the same instructions and workflows for every agent. The roadmap description says the shared catalog is powered by Microsoft 365 App Store, so shared skills can extend across experiences such as Copilot Studio, Microsoft 365 Copilot and Cowork, with centralised governance.

Microsoft Learn does not yet describe a catalog by that name, so the details of the catalog itself are the roadmap's description. What Learn does document, as preview, is a maker flow that looks like its first step: on an agent's **Build** tab, a maker selects the **+** icon next to **Skills**, chooses **Browse skills (preview)** and adds a skill from those shared with them. The Learn page says the skills available are the ones shared by admins or skill owners. Whether this is the same catalog as the roadmap's is not stated.

Per the Learn page, a skill is a name, a description and instructions that tell the agent how to handle a type of task, and an added shared skill is a snapshot that keeps a reference to the original. Makers are notified when an agent uses an older version and can choose to update. Makers can also share a skill they created with only themselves or with specific users or groups.

The roadmap item is In development, with a preview target of September CY2026 and a general availability target of October CY2026 for Worldwide (Standard Multi-Tenant), on the Web platform. Both month targets have passed as of 18 November 2026 and the record still shows In development, so treat the dates as unconfirmed.

## Why it matters

A skill is text that changes how an agent behaves, and the catalog makes it easy to spread one skill across many agents. A weak or unreviewed skill can propagate into every agent that adds it, and the documented flow has a maker add one from the Build tab. Because the roadmap says skills can reach Microsoft 365 Copilot and Cowork as well, the effect may not stay inside Copilot Studio.

Microsoft has not stated what happens on arrival or which admin setting governs the Copilot Studio catalog. The wiki's view: treat it as a maker capability that arrives without an admin switch until Microsoft documents one, and use the existing package controls for skills in the Microsoft 365 admin centre as the nearest lever.

## Risk assessment

**Data exposure**

- A shared skill is instructions, and its package can include supporting files such as scripts, templates and reference documents. Anyone a skill is shared with can add it to their agents, so review what a shared skill contains before it is shared widely.
- The Learn page does not say what data a catalog skill can reach. Confirm the skill's data-access boundaries before using it with organisational data.

**Security & identity**

- Sharing is chosen by the skill's owner: the preview page offers **Only you** or **Specific users or groups in your organization**. Microsoft Learn documents no tenant-level switch for this maker sharing control at the time of writing (November 2026).
- Package-level controls in the Microsoft 365 admin centre can block a standalone skill package and scope it to users, but Microsoft's guidance says a skill bundled in a package has no blocking control of its own.

**Autonomy & actions**

- The orchestration runtime decides when to activate a skill from the user's request and the skill's description, so a skill can change what an agent does without the user asking for it by name. A skill can also instruct the agent to use a specific tool.
- Microsoft does not describe an approval step for adding a shared skill beyond the maker selecting **Add**.

**Change & support**

- A shared skill is a snapshot with a reference to the original. An owner who edits and reshares a skill creates a new version, and makers receive an update notification when they open an agent on an older one. Plan who owns updates.
- The browse flow is preview documentation and is subject to change.

## Cost and licensing

No licence specific to the skills catalog is published at the time of writing (November 2026). The Learn page for adding shared skills carries a note that the Microsoft Copilot harness uses usage-based billing and that using, building, testing and evaluating agents might consume Copilot Credits. Microsoft's billing overview adds that on this harness credits are charged from the moment a maker starts building. See [Copilot Credits](/concepts/copilot-credits/).

No rate for browsing, adding or sharing a skill is published. No catalog-specific credit rate is published; agents using shared skills remain subject to their documented harness billing.

If you automate skill governance through the Package Management API in Microsoft Graph, Microsoft's reference says access requires a Microsoft Agent 365 licence. Admin time for reviewing and owning shared skills is the other cost.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform; no US Government cloud is listed on the record. The record lists both General Availability and Preview as release phases.

The Learn browse flow is documented as preview. The skills overview describes two skill types for the Customer Conversation harness, and the shared-skill page does not say which harnesses Browse skills covers.

Roles for the catalog are not documented. The Learn page for managing plugins and skills names AI Administrator and Global Administrator only for approving MCP server requests, not for skills.

## Governance guidance

### Before rollout

- Decide who in your organisation may share skills, and agree a review step before a skill is shared with groups, given that the catalog's own approval flow is not yet documented.
- Check the maker-side **Share** control and tell makers to share with named users or groups, not wider than needed.
- List the skill packages already in your tenant under the registry control in the controls table, so you know what exists before the catalog arrives.

### At rollout

- Watch Message center and the Learn page for skills in Copilot Studio for the catalog's release and any admin setting.
- Confirm with a test maker whether **Browse skills (preview)** appears for your tenant and which skills it lists.
- Use package block and user availability in the controls table for standalone skill packages if a skill must be withdrawn.

### After rollout

- Review who shared which skills and re-review a skill whenever its owner reshares an edited version.
- Reassess the risk rating once Microsoft documents the catalog's controls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can use a skill package</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the Copilot Studio skills catalog. API is preview and needs a Microsoft Agent 365 licence. The request body sets availableTo and allowedUsersAndGroups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › plugin or skill › Users <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking a skill package across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">General control: not confirmed for the Copilot Studio catalog. Applies to standalone skill packages; a bundled skill has no block of its own. API is preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › skill › Block › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Inventory of skill packages in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">General control: not confirmed to list Copilot Studio catalog skills. API needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry <a href="https://learn.microsoft.com/plugins/administrator-guide" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'AgentSkills')</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who a maker shares a skill with</strong><br><small>Maker</small><br><small class="controls__note">Maker-side only; preview. Options are Only you, or specific users or groups. Microsoft Learn documents no API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agents › agent › Build › skill › … › Share › Share <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These controls are general ones for plugin and skill packages in the Microsoft 365 admin centre. Microsoft has not confirmed that they govern the Copilot Studio skills catalog, so check a test skill before relying on them. The Learn page says Copilot Studio and Power Platform can have separate controls for their components and connections.

A bundled skill has no blocking control of its own; blocking applies to the package. The Learn page also says some skills, such as those used in Word, Excel and PowerPoint, are stored in OneDrive and not in the plugin registry. The page also describes **Agents** > **Settings** > **Agent and plugin access**, which sets which publisher categories (Microsoft, your organisation or certified external publishers) users can access for plugins. The block and update operations in the Package Management API are preview.

## Open questions

- Is the Copilot Studio skills catalog the same store as the Microsoft 365 admin centre's plugin and skill registry, and do its package controls apply? Watch the Learn skills pages and Message center.
- Is there a tenant-level setting to disable **Browse skills (preview)** or to limit who may share skills in Copilot Studio?
- Which licence and what Copilot Credit rate apply to the catalog, if any beyond the harness billing already documented?
- Does a shared skill reaching Microsoft 365 Copilot and Cowork follow the same sharing audience, and who approves it?
- The roadmap targets of September and October CY2026 have passed with the status still In development: when will the status change?

<!-- rationale
risk: Medium. A shared skill is instructions that steer an agent, and the documented flow has a maker select Add; existing package controls in the Microsoft 365 admin centre may cover it, but Microsoft has not confirmed that.
cost: Variable. Agents on the Microsoft Copilot harness are billed in Copilot Credits; no charge specific to the skills catalog is published, and the Package Management API needs a Microsoft Agent 365 licence.
impact: Medium. Makers who build agents in Copilot Studio see the catalog and the people they share skills with are affected; end users notice only through changed agent behaviour.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / absence: Administrators should treat the capability as arriving without an administrator switch until Microsoft documents one. | Found: Searched: "Copilot Studio" "Browse skills" "disable"; "Copilot Studio" "skill sharing" "tenant". Read skills-manage and power-platform/admin/skills-copilot-studio-rule: the latter documents environment skills controls but does not resolve their coverage of Browse skills. | Fix: Replace the sentence with: "The wiki's view: no source says existing agent behaviour changes; confirm which controls apply to Browse skills before relying on package controls." Do not turn the lack of a catalog-specific procedure into an assumption that no administrator switch governs the capability.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Security & identity; controls[3].note / behaviour: The detailed preview sharing instructions offer Only you or Specific users or groups in your organization. | Found: Only you: Keeps the skill private to your account. ... Specific users or groups in your organization: Lets you add people or groups by name or email address. | Fix: Add: "The What's new page also describes sharing with your whole organisation, whereas the detailed sharing instructions list Only you and specific users or groups." Cite https://learn.microsoft.com/microsoft-copilot-studio/whats-new#notable-changes, which says "share your own skills with specific people or your whole organization". | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-manage
- [supported, minor] controls[3].ui; Governance controls table; Governance guidance: Before rollout / admin-path: The maker sharing route is Agents > agent > Build > skill > more options > Share > Share. | Found: Select the Build tab. ... the Skills section shows the skills ... Select the skill you want to share ... Select the three dots (...) and then select Share. ... On the details page, select Share in the upper-right corner. | Fix: Include the omitted Skills section heading in both representations: "Agents > agent > Build > Skills > skill > … > Share > Share". The already-cited https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent supplies the starting step: "Open the agent from the Agents page". | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-manage
-->
