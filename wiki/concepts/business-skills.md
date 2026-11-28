---
kind: "concept"
title: "Business skills: which written processes do agents follow, and who controls them?"
slug: "business-skills"
summary: "Business skills are natural-language process instructions stored as records in a Dataverse environment, which Copilot and agents discover and follow. Administrators decide which environments have them, which routes reach them and who can share them."
created: "2026-11-27"
updated: "2026-11-28"
version: 2
tags: ["business-skills","dataverse","work-iq","dataverse-mcp","mcp","security-roles","power-platform-admin-center","agent-governance","solutions"]
covers: []
sources:
  - title: "Business skills overview"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview"
    kind: "learn"
  - title: "Create and use business skills"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    kind: "learn"
  - title: "Business Skill (Skill) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/skill"
    kind: "learn"
  - title: "skill EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/skill"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "allowedmcpclient EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
    kind: "learn"
  - title: "Enable business skills in Dataverse for Sales agent (preview)"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
related: ["work-iq","mcp","security-roles","copilot-credits","work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","m365-copilot-use-dataverse-business-skills-in-sales-agent","m365-copilot-copilot-cowork-access-business-applications-with-work-iq"]
controls:
  - governs: "Whether business skills are available in an environment (Work IQ)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Also turns on semantic modelling and Dataverse data in Microsoft 365 Copilot Chat, Research and Agent Builder. Needs an environment administrator account."
  - governs: "Whether a skill is active for agents to use"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "More > Business skills > skill > Deactivate"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    api:
      kind: "rest"
      call: "PATCH [organization URI]/api/data/v9.2/skills(<skillid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/skill"
    note: "The request body sets statecode (0 Active, 1 Inactive). Deactivating keeps the skill's content and version history."
  - governs: "Which users can use business applications through Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "No users, All users (the default) or Specific groups. Governs the Microsoft 365 Copilot route only, not agents on the Dataverse MCP server."
  - governs: "Whether the Work IQ MCP server is available to connected AI experiences and coding agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Applies to the entire Work IQ MCP server. AI Administrator role."
  - governs: "Which MCP clients can reach the Dataverse MCP server, and so skills, directly"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Advanced Settings > client > Is Enabled"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api:
      kind: "rest"
      call: "PATCH [organization URI]/api/data/v9.2/allowedmcpclients(<allowedmcpclientid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
    note: "The request body sets isenabled. Power Platform administrator role. The Copilot Studio client is enabled for all environments by default."
confidence: "high"
dependents: 6
changes:
  - date: "2026-11-27"
    note: "New concept page explaining business skills: how agents find and follow them, who can share them, what they cost and the environment and tenant controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 96 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: role-based sharing needs both the selected role and Skill Sharing Role (general and direct access are unaffected); Work IQ governs availability; change timing and session refresh are stated for Sales agent only; sharing switch absence reworded as undocumented."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 118 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 118
  confirmed: 117
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "09fc96a8170d948063bb242d504e32d8"
---

## What it is

A business skill is a set of natural-language instructions, stored as a record in a Dataverse environment, that tells an agent how your organisation does one type of work: the steps, the information required and the business rules that apply. Microsoft states that business skills are not executable code; they guide an agent much as a written procedure guides a new employee.

### How it works

Each skill has three layers: frontmatter (name, description and optional key-value metadata), instructions (the full skill body) and resources (attached reference files). An agent searches the connected environment for skills the current identity can access, compares the name and description with the user's request, retrieves the full instructions and resources of a relevant skill, and then uses its own connected tools to carry out the process. Microsoft describes this selection as probabilistic.

Skills reach agents by two routes:

| Route | What it reaches |
|---|---|
| Business Applications in [Work IQ](/concepts/work-iq/) | Copilot Chat, Copilot Cowork and agents connected to the Work IQ MCP server, across environments available to the user |
| Dataverse MCP server | An agent connected directly to one Dataverse environment |

Makers create skills in Power Apps under **More > Business skills**, by writing them, by using the Skill Builder agent, or by uploading a `Skill.md` or `.zip` file. Copilot or an agent connected to Work IQ or the Dataverse MCP server can also create and update skills; the Dataverse MCP server's `upsert_skill` and `delete_skill` tools create, update and delete them. A skill has only one active version: **Save** keeps a working copy, **Save and activate** makes it the version agents use, and version history records who changed or activated each version. Skills are solution-aware, and a solution export includes only the active version.

Skills are user-owned records in the Business Skill (`skill`) table. The owner can give general access to everyone in the environment (view only), access by Dataverse security role, or direct access to users or groups, with view or edit permission. The Work IQ overview lists business skills as preview.

Briefings such as [dynamic skills](/features/work-iq-dynamic-skills/) use "skills" in a wider Work IQ sense; this page covers the Dataverse records only.

## Why it matters

Business skills turn a written process into something agents act on. The agent carries out the steps with its own connected tools, under the identity it runs as, so a badly worded or outdated skill changes how work is done by every agent that finds it. The pages document activation as the owner's choice, so expect makers with the Environment Maker role to publish skills to a whole environment unless your own process says otherwise.

The gate is the environment's **Work IQ** setting, which turns on business skills; when it is off they are not available in the environment. Microsoft documents Business Applications in Work IQ as on by default for new public production environments, with exceptions for EU and EFTA, government-related and nonproduction environments, and has deferred the plan to turn it on for existing environments. The Manage feature settings page still lists the earlier Dataverse intelligence (Work IQ) setting with a default of Off, so check the setting itself rather than relying on either page.

## Cost and licensing

The business skills pages name no licence specific to skills. Creating one needs a Dataverse environment with Work IQ turned on and a security role that allows it. Using skills through Business Applications in Work IQ needs access to a supported Copilot experience or connected agent, and the create page points to the Work IQ licensing requirements: the Work IQ API is paid for through a usage-based model that uses Copilot Credits (see [Copilot Credits](/concepts/copilot-credits/)).

Microsoft tracks this cost by the experience used, not by a business applications category. Work IQ consumption that supports a Cowork task is attributed to Cowork; coding agents or custom integrations that call Work IQ directly appear under Work IQ API; in Microsoft 365 Copilot Chat the applicable entitlement includes business-data grounding. Limits are set with [spending policies](/concepts/spending-policies/) on the consuming experience. One request can involve multiple tool calls and reasoning steps, so the cost of following a skill varies. A credit rate specific to business skills is not yet published.

## Risks and limits

- **Guidance, not enforcement.** Agent selection is probabilistic, so an agent may skip the right skill or pick a near match; a skill does not stop an agent doing something its tools and permissions allow.
- **Two-role trap.** Access through a Dataverse security role requires both the selected role and Skill Sharing Role; either alone is not enough for that route.
- **Participation is not access control.** Microsoft states that Work IQ participation settings don't prevent agentic access to environment data; App Access controls that (see [Work IQ](/concepts/work-iq/)).
- **Copilot Studio reads little of a resource.** With a Copilot Studio agent only text-based resource files are supported, and the agent reads only the first 20 KB. Resources are limited to 20 MB and uploads to 30 MB.
- **Deletion is permanent.** Deleting a skill can't be undone and agents that reference it can no longer use it; deactivating keeps content and version history.
- **No usage view.** The Business skills page doesn't show per-skill runtime usage, so you cannot see from it which agents follow which skill.
- **Cloud reach.** Business Applications in Work IQ isn't currently available in sovereign or government clouds, including DoD, GCC and GCC High.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether business skills are available in an environment (Work IQ)</strong><br><small>Environment</small><br><small class="controls__note">Also turns on semantic modelling and Dataverse data in Microsoft 365 Copilot Chat, Research and Agent Builder. Needs an environment administrator account.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a skill is active for agents to use</strong><br><small>Maker</small><br><small class="controls__note">The request body sets statecode (0 Active, 1 Inactive). Deactivating keeps the skill's content and version history.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>More › Business skills › skill › Deactivate <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [organization URI]/api/data/v9.2/skills(&lt;skillid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/skill" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use business applications through Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">No users, All users (the default) or Specific groups. Governs the Microsoft 365 Copilot route only, not agents on the Dataverse MCP server.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Work IQ MCP server is available to connected AI experiences and coding agents</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the entire Work IQ MCP server. AI Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which MCP clients can reach the Dataverse MCP server, and so skills, directly</strong><br><small>Environment</small><br><small class="controls__note">The request body sets isenabled. Power Platform administrator role. The Copilot Studio client is enabled for all environments by default.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Advanced Settings › client › Is Enabled <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [organization URI]/api/data/v9.2/allowedmcpclients(&lt;allowedmcpclientid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Power Platform Administrator manages environment settings and allowed Dataverse MCP clients; AI Administrator manages the Microsoft 365 admin center settings. For skills themselves, Basic User can create skills they own, Environment Maker can create and share skills they own, and System Administrator or System Customizer can create and share skills. Admins can share a skill with any security role; other owners only with roles assigned to them.

**No admin-centre sharing switch is documented.** Each owner shares a skill from **Business skills > Share**. Role-based sharing works only once an administrator assigns the **Skill Sharing Role** (see [Dataverse security roles](/concepts/security-roles/)).

**How the controls stack.** The Work IQ setting decides whether business skills are available in an environment. The Copilot audience setting governs only the Microsoft 365 Copilot route, the Work IQ MCP block applies to the entire server, and allowed MCP clients govern agents connecting directly to Dataverse; the Microsoft Copilot Studio client is enabled for all environments by default. For Sales agent, Microsoft states that these changes apply to new agent interactions, and Sales agent users might need to refresh an existing session.

**Watching.** Version history records who changed or activated each version; the Business skills page shows no per-skill runtime usage.

## What to check

- Check the **Work IQ** setting on each production environment, and turn it off where no agent should follow business skills.
- Open **Business skills** in Power Apps for each Work IQ environment and list the active skills, their owners and who has access.
- Review the audience for **Business Applications data in Work IQ available to Copilot** in the Microsoft 365 admin center.
- Check whether **Work IQ MCP** is available or blocked under **Agents > Tools**.
- Review which Dataverse MCP clients have **Is Enabled** set to **Yes** in each environment that holds skills.

## Open questions

- When will Microsoft state general availability for business skills, which the Work IQ overview lists as preview?
- Which default applies to the environment **Work IQ** setting: on for new public production environments, or Off as the Manage feature settings page lists?
- Is there a Power Platform API, PowerShell or CLI command for the environment Work IQ setting?
- Which audit events, if any, record an agent retrieving and following a skill?
- Will Microsoft publish a consumption rate for following a skill, separate from the experience that uses it?

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] What to check: list active skills, owners and access / consistency: Every control the checklist asks readers to review appears in the controls table. | Found: Checklist: "list the active skills, their owners and who has access". Table: availability, activation, Copilot audience, Work IQ MCP blocking and allowed Dataverse MCP clients; no skill-sharing row. | Fix: Narrow the checklist bullet to: 'Open Business skills in Power Apps for each Work IQ environment and list the active skills.'
-->
