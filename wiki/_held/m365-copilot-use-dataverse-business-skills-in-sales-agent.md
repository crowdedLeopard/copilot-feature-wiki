---
title: "Sales agent: follow Dataverse business skills for your sales processes"
slug: "m365-copilot-use-dataverse-business-skills-in-sales-agent"
roadmapId: 571394
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Sales agent can follow business skills: natural-language process instructions stored in Dataverse. Admins turn on Work IQ and Dataverse MCP access per environment. Learn documents it as preview; review fit before skills reach sellers."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn lists Microsoft 365 Copilot and Dynamics 365 Sales licences as prerequisites for Sales agent users, and a Dynamics 365 Sales licence for the environment. A separate price or meter for business skills is not yet published."
audiences: ["power-platform-admin","m365-admin","maker","end-user"]
tags: ["sales-agent","business-skills","dataverse","work-iq","dataverse-mcp","mcp","skills","dynamics-365","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 571394"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571394"
    kind: "roadmap"
  - title: "Enable business skills in Dataverse for Sales agent (preview)"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse"
    kind: "learn"
  - title: "Create and use business skills"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    kind: "learn"
  - title: "Business skills overview"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Use Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/use-sales-chat"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Whether Sales agent can reach the Dataverse MCP server (Enterprise Copilot Platform client) (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
    kind: "learn"
  - title: "Whether an individual business skill is available to agents (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/skill"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-cowork-access-business-applications-with-work-iq","m365-copilot-enable-semantic-model-in-sales-agent","work-iq","mcp","security-roles"]
controls:
  - governs: "Whether Work IQ, and so business skills, is on in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    api: null
    note: "Environment administrator. Learn says turning Work IQ off stops agents using Dataverse business skills in the environment."
  - governs: "Whether Sales agent can reach the Dataverse MCP server (Enterprise Copilot Platform client)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Go to Advanced Settings > Active Allowed MCP Clients > Enterprise Copilot Platform > Is Enabled"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse"
    api:
      kind: "rest"
      call: "PATCH [organization URI]/api/data/v9.2/allowedmcpclients(allowedmcpclientid)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
    note: "The request body sets isenabled. Affects Sales agent only."
  - governs: "Whether any MCP client can use the Dataverse MCP server in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Allow MCP clients to interact with Dataverse MCP server (GA version)"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse"
    api: null
    note: "Learn lists this as the way to block all MCP clients, not only Sales agent."
  - governs: "Whether an individual business skill is available to agents"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "environment > More > Business skills > skill > Deactivate"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    api:
      kind: "rest"
      call: "PATCH [organization URI]/api/data/v9.2/skills(skillid)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/skill"
    note: "The request body sets statecode. Deactivating keeps the skill's content and version history."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-02T22:01:21"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item, based on the preview Learn pages for enabling business skills in Dataverse for Sales agent."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 61
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "43de085812b44001fe397f90910538ff"
---

## What's changing

Sales agent in Microsoft 365 Copilot can use business skills: natural-language instructions, stored in Dataverse, that describe how your organisation does a piece of work. The roadmap item gives lead qualification, pipeline reviews, account planning, opportunity scoring and account briefs as examples. Sellers ask Sales agent questions in natural language, and the answers follow the skills their organisation has defined.

Microsoft's Learn page for this feature (marked prerelease documentation) says Sales agent finds and uses these skills with your Dynamics 365 data through the Dataverse Model Context Protocol (MCP) server, once the required Dataverse features are enabled. An administrator turns on Work IQ in the environment and checks that the **Enterprise Copilot Platform** MCP client is enabled, which the page says is the client Sales agent uses to reach the Dataverse MCP server. Skill authors then create a skill in Power Apps, activate it, and test it by asking Sales agent "What business skills do I have?". Business skills are not supported when Sales agent is used on a mobile device.

The roadmap item is In development, with a preview target of September CY2026 and a General Availability target of November CY2026; it lists Worldwide (Standard Multi-Tenant) and the Desktop and Web platforms. Learn already documents the feature as a preview, so the preview describes today's behaviour and not the final design.

## Why it matters

Business skills let an organisation put its own sales process in front of every seller who uses Sales agent, without changing the agent itself. That is also the risk: the text of a skill decides how the agent answers, and anyone who can author and share a skill can change what sellers are told.

The roadmap says administrators enable the required Dataverse capabilities, and the Learn steps ask for that, so nothing reaches sellers until a skill exists and is shared. Learn also says Work IQ is on by default for new public production environments (with exceptions), so check which environments already have it on before you plan the rollout.

## Risk assessment

**Data exposure**

- Skills can carry attached reference files; Learn gives policy documents, standard operating procedures, templates, forms and calculations as examples. Treat each skill and its resources as content that sellers' agent sessions can retrieve.
- A skill can be made available to everyone in the environment (general access). Check how each skill is shared on the Business skills page before activating it.

**Security & identity**

- Learn says business skills follow Dataverse security patterns and that the same permissions apply in Copilot, Work IQ-connected agents and agents connected directly to the Dataverse MCP server. Users need at least the Basic User security role to see organisation-level skills.
- Sharing a skill by security role needs the user to hold both that role and the Skill Sharing Role, so a role alone does not grant access.

**Autonomy & actions**

- Learn describes skills as natural-language instructions and not executable code, and says the agent uses its connected tools to carry out the process. Which tools Sales agent can call while following a skill is something to confirm before you write skills that update CRM records.
- Learn says agent selection of skills is probabilistic, so the same request may not always pick the same skill.

**Change & support**

- The Learn page is preview documentation and may change. The Business skills page does not currently show per-skill runtime usage or feedback, so plan test cases for support questions.
- Changes to MCP or Work IQ settings apply to new agent interactions; users might need to refresh an existing session.

## Cost and licensing

Learn lists these prerequisites for the Dataverse business skills page: the environment has an appropriate licence for Dynamics 365 Sales and Dataverse, and users who access Sales agent have the required Microsoft 365 Copilot and Dynamics 365 Sales licences.

The Use Sales agent page gives two licensing options. A Microsoft 365 Copilot licence plus access to Dynamics 365 Sales or Salesforce gives CRM data and Microsoft 365 Graph grounding. Dynamics 365 Sales Enterprise or Premium access without a Microsoft 365 Copilot licence gives CRM data only.

A separate price, meter or credit rate for business skills is not yet published. The indirect cost is the time of the people who write, test and share skills.

## Scope

Sellers use skills through Sales agent in Microsoft 365 Copilot. The Learn page names System Administrator, System Customizer, Environment Maker or Power Platform Administrator permissions for administrators and skill authors in the Dynamics 365 environment, and at least the Basic User security role for each user who needs the skills.

Sales agent must be connected to the same Dynamics 365 organisation in which business skills are enabled; the page says to check this under Sources in Sales agent. The roadmap item lists Worldwide (Standard Multi-Tenant) only, and the Desktop and Web platforms. Business skills are not supported on mobile.

Learn documents a separate page for Sales agent connected to Salesforce; this briefing covers the Dataverse (Dynamics 365) route only.

## Governance guidance

### Before rollout

- Identify the Dynamics 365 environments that Sales agent is connected to, and check which of them already have **Work IQ** turned on (Power Platform administrator).
- Decide who may author skills: the Learn page names System Administrator, System Customizer, Environment Maker and Power Platform Administrator permissions, and Environment Maker can create and share skills they own.
- Agree a naming and review process for skills, so each skill has a clear description of what it does and when to use it.

### At rollout

- Turn on Work IQ for the pilot environment, and confirm that **Enterprise Copilot Platform** is enabled in the Allowed MCP Clients list.
- Create one simple read-only test skill, activate it, and ask Sales agent "What business skills do I have?" with a test seller account that holds at least the Basic User role.
- Use the Share command on the Business skills page, and use Manage access to review who has access, before widening access beyond the author.

### After rollout

- Review active skills and deactivate any that give wrong or outdated guidance.
- Collect seller feedback through test requests, since the Business skills page shows no per-skill usage.
- Re-read the Learn page when the roadmap target month arrives, because the preview documentation may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ, and so business skills, is on in an environment</strong><br><small>Environment</small><br><small class="controls__note">Environment administrator. Learn says turning Work IQ off stops agents using Dataverse business skills in the environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Sales agent can reach the Dataverse MCP server (Enterprise Copilot Platform client)</strong><br><small>Environment</small><br><small class="controls__note">The request body sets isenabled. Affects Sales agent only.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Go to Advanced Settings › Active Allowed MCP Clients › Enterprise Copilot Platform › Is Enabled <a href="https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [organization URI]/api/data/v9.2/allowedmcpclients(allowedmcpclientid)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether any MCP client can use the Dataverse MCP server in an environment</strong><br><small>Environment</small><br><small class="controls__note">Learn lists this as the way to block all MCP clients, not only Sales agent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Allow MCP clients to interact with Dataverse MCP server (GA version) <a href="https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual business skill is available to agents</strong><br><small>Environment</small><br><small class="controls__note">The request body sets statecode. Deactivating keeps the skill's content and version history.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › More › Business skills › skill › Deactivate <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [organization URI]/api/data/v9.2/skills(skillid)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/skill" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first three rows are the switches Learn names for turning business skills for Sales agent on or off in an environment, from the broadest effect to the narrowest. Turning off Work IQ prevents agents from using Dataverse business skills in the environment; clearing the MCP setting blocks all MCP clients; disabling the Enterprise Copilot Platform client blocks Sales agent only.

Learn documents no automation for the two Features-page toggles at the time of writing (November 2026). The Enterprise Copilot Platform client is a record in the allowed MCP clients table, so the call in the table changes that record.

Who can see an individual skill is set with the Share command on the Business skills page (general access, security role access or direct access); see /concepts/security-roles/ for how Dataverse roles work.

## Open questions

- Which tools can Sales agent call when it follows a skill, and can a skill lead it to update CRM records? Watch the Sales agent pages on Microsoft Learn.
- Will Microsoft publish a licence or meter specific to business skills when the feature reaches General Availability in the November CY2026 target? Watch Message center and the Sales agent licensing page.
- How will existing environments be handled, given that Learn says the plan to turn on Business Applications in Work IQ for existing environments has been deferred?
- Which parts of the preview behaviour on the Learn page will change before General Availability?

<!-- rationale
risk: Medium. A business skill steers Sales agent's answers and can be shared with everyone in an environment, so a wrong or over-shared skill reaches sellers; the Learn page is preview documentation.
cost: Low. The Learn page lists Microsoft 365 Copilot and Dynamics 365 Sales licences as prerequisites for Sales agent users; a separate charge for business skills is not yet published, so the known cost is admin and author time.
impact: Medium. Sellers using Sales agent notice changed answers once skills are active; admins, makers and skill authors do the set-up.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: second paragraph / behaviour: Nothing reaches sellers until a skill exists and is shared. | Found: Basic User | Can create skills that they own.Can use skills they have access to. | Fix: Replace 'so nothing reaches sellers until a skill exists and is shared' with 'so a skill must exist, be active and be accessible to the seller before Sales agent can use it'. Owners can use their own skills; sharing is not a universal prerequisite. See https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills#test-and-troubleshoot-skill-use. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview
- [unsupported, blocker] controls[1].note; Governance controls table and first paragraph / applicability: Disabling the Enterprise Copilot Platform client affects Sales agent only. | Found: Searched: Dataverse MCP Enterprise Copilot Platform only; Enterprise Copilot Platform. Read business-skills-dataverse, data-platform-mcp-disable and business-skills-salesforce excerpts. None establishes exclusive use of this client by Sales agent. | Fix: Replace 'Affects Sales agent only' with 'Blocks Sales agent MCP access' in the note and rendered table. Replace 'disabling the Enterprise Copilot Platform client blocks Sales agent only' with 'disabling the Enterprise Copilot Platform client blocks Sales agent MCP access'. The documented scope is at https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse#disable-business-skills-or-mcp-access.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: final paragraph / availability: Learn has a separate business-skills page for Sales agent connected to Salesforce. | Found: Enable business skills for Salesforce in the Sales agent (preview) | Fix: Cite https://learn.microsoft.com/microsoft-sales-copilot/business-skills-salesforce for the statement that a separate Salesforce page exists. | Source: https://learn.microsoft.com/microsoft-sales-copilot/business-skills-salesforce
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's instruction to use Share and Manage access has a corresponding control row. | Found: Use the Share command on the Business skills page, and use Manage access to review who has access ... [The controls rows cover Work IQ, one MCP client, all MCP clients and skill deactivation, not skill sharing.] | Fix: The At rollout step directing readers to Share and Manage access has no corresponding controls-table row. Remove that checklist bullet; keep the existing sharing explanation in Governance controls.
-->
