---
title: "Copilot Studio: block maker-provided credentials for tool authentication"
slug: "copilot-studio-block-maker-provided-credentials"
roadmapId: 566997
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Admins can stop makers choosing their own credentials when they connect tools to agents, forcing end-user authentication so an agent never acts with more access than the person using it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "September CY2025"
risk: "high"
cost: "none"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Environment-level setting. Environment-group configuration needs Managed Environments and a tenant admin role. No additional licence for the control."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["copilot-studio","maker-credentials","end-user-authentication","connectors","oversharing","managed-environments","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 566997"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566997"
    kind: "roadmap"
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Automatic security scan in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/security-scan"
    kind: "learn"
  - title: "Secure your Copilot Studio projects"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/sec-gov-phase3"
    kind: "learn"
  - title: "Sharing of agents that embed maker credentials (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    kind: "learn"
  - title: "Which credential a given tool uses (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    kind: "learn"
videos: []
related: ["copilot-studio-safe-sharing-credential-oversharing","copilot-studio-share-autonomous-agents-run-only","copilot-studio-mcp-tools-in-agents","agent-identity"]
controls:
  - governs: "Which credential types makers may choose for tools"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments (or Environment groups) > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    api: null
    note: "Environment Admin for a single environment; Power Platform admin for environment groups."
  - governs: "Sharing of agents that embed maker credentials"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Threat detection > Sharing agent with embedded maker credentials > Set up"
      docs: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    api: null
  - governs: "Which credential a given tool uses"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > tool > Details > Additional details > Authentication"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    api: null
    note: "Maker-side. The admin setting removes options from this list rather than overriding a saved choice."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-07-02T23:12:48"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "claude-fable-5-1"
  engine: "manual"
  claims: 32
  confirmed: 24
  unconfirmed: 4
  contradicted: 4
  attempts: 1
---

## What's changing

When a maker adds a tool to a Copilot Studio agent (a connector, a Power Automate flow, an MCP server), they choose whose credentials the tool runs with. **End-user credentials** prompt each person to sign in at run time. **Maker-provided credentials** store the maker's own connection, so every user of the agent acts with the maker's permissions in the target system.

This feature gives administrators a **Control maker credential options** setting in the Power Platform admin center. It can be set per environment or, with Managed Environments, per environment group. Allowed values are end-user credentials, maker-provided credentials, or both. The default is both.

When an administrator removes the maker-provided option, the change applies immediately to every existing and new agent in the environment: all tools switch to require end-user credentials at run time, and makers lose the option in the Copilot Studio authoring UI. Microsoft's own warning in the documentation is blunt: prepare makers and users first, because the next conversation with an affected agent will ask the user to sign in to the connected service.

The roadmap item shows public preview in September 2025 and a General Availability target of August 2026; the admin center setting is documented and working today, while the roadmap status still reads "In development".

## Why it matters

Maker-provided credentials are the most common way an agent leaks privilege. A maker with write access to a finance SharePoint site builds a helpful agent, shares it with the department, and every user can now read (or through a flow, change) what only the maker was entitled to. Copilot Studio's automatic security scan warns makers about this at publish time, but a warning is not a control.

This setting is the control. It is also one of the few agent governance switches that changes behaviour the moment it is saved, so it needs a communications plan rather than a quiet toggle. Pair it with the companion feature that blocks *sharing* of agents that still rely on maker connections.

## Risk assessment

**Data exposure**
- Ungoverned, agents can expose any data the maker's account can reach, across connectors, to anyone the agent is shared with. This is the primary risk the feature removes.
- Governed, each user sees only what their own account allows, which also makes Purview audit records attributable to the right person.

**Security & identity**
- Enforcing end-user credentials means stored maker connections are no longer used at run time; fewer long-lived connections exist to be abused.
- Agents that legitimately need a service identity (for example a ticketing integration) should move to a service principal, API key or managed identity connection rather than a person's account.

**Autonomy & actions**
- Autonomous (trigger-based) agents cannot prompt a user to sign in. Blocking maker credentials in an environment that hosts autonomous agents will break them unless they use system identities or the run-only sharing model where each user supplies connections.

**Change & support**
- Immediate effect across all agents in scope. Expect a spike in "my agent asks me to sign in" tickets on day one.
- Flows called from agents that use maker-only credentials will fail until reconfigured.

## Cost and licensing

- No licence cost for the setting itself. It is a Power Platform admin center environment feature.
- Configuring at environment-group scale requires **Managed Environments**, which in turn needs standalone Power Platform or Copilot Studio licences for the users of those environments.
- Indirect cost: maker time to re-author connections, and help desk time during the switch.

## Scope

- All Copilot Studio agents in the selected environment or environment group, existing and new.
- Worldwide (standard multi-tenant). No government cloud dates published.
- Roles: Environment Admin for a single environment; Power Platform Administrator or Global Administrator for environment groups. Environments inside a group inherit the group setting and cannot be configured individually.
- Affects connectors, flows and MCP tools that offer a credential choice. Knowledge sources follow their own authentication model.

## Governance guidance

**Before rollout**
- Inventory agents per environment and identify tools configured with maker-provided credentials (Copilot Studio agent status and the security scan surface this).
- Decide the environment classes where only end-user credentials are allowed (recommend: all production and any environment with agents shared beyond the maker).
- Provide an approved pattern for service identities so makers have somewhere to go when a tool genuinely needs non-user credentials.
- Draft the user-facing notice: "agents will ask you to sign in to connected services from <date>".

**At rollout**
- Apply the setting at environment-group level so new environments inherit it.
- Enforce in development environments first, then production, allowing a week between for makers to reconfigure flows.
- Publish the change to makers through maker guidelines or welcome content in the Power Platform admin center.

**After rollout**
- Monitor agent failure rates and help desk volume for two weeks.
- Add "credential model" to the agent review checklist so new agents are built end-user-first.
- Review environments that were exempted and set a date to re-assess.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which credential types makers may choose for tools</strong><br><small>Environment</small><br><small class="controls__note">Environment Admin for a single environment; Power Platform admin for environment groups.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments (or Environment groups) › environment › Settings › Product › Features › Copilot Studio agents › Control maker credential options <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sharing of agents that embed maker credentials</strong><br><small>Environment group</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Threat detection › Sharing agent with embedded maker credentials › Set up <a href="https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which credential a given tool uses</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. The admin setting removes options from this list rather than overriding a saved choice.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › tool › Details › Additional details › Authentication <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No PowerShell, Graph or pac CLI equivalent is documented for the credential option setting, so automation has to fall back on environment group rules in the portal. Agents that already use maker-provided credentials keep working until the tool is edited; the agent's security scan flags them. The related safe-sharing control is covered in the [Copilot Studio safe sharing briefing](/features/copilot-studio-safe-sharing-credential-oversharing/).

## Open questions

- The roadmap status has not moved to Launched even though the control is documented; confirm in Message center whether the GA announcement includes government clouds.
- Whether the setting will gain a report-only mode (log violations without enforcing) is not stated.
- Behaviour for tools added through connected MCP servers that embed their own OAuth app is described only indirectly.

<!-- rationale
risk: High. Left in the default state, agents can act with maker privileges for every user, which is the clearest oversharing path in the platform. The control removes it but changes behaviour instantly.
cost: None. Environment setting; Managed Environments only needed for group scale.
impact: Medium. Makers and users of affected agents notice sign-in prompts; most end users of Copilot do not.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by claude-fable-5-1)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[1].ui / admin-path: The sharing control is at Power Platform admin center > Security > Threat detection > Sharing agent with embedded maker credentials > Set up, with scope environment group. | Found: On the navigation pane, select Security, and then select Threat detection. Select Sharing agent with embedded maker credentials. A panel opens. ... Select Set up. ... You can configure the setting for an individual environment or an environment group. | Fix: Add a note that this control is in preview (the cited page is headed 'Control sharing agents with embedded maker credentials (preview)' and marked prerelease), and widen the scope: the page configures it per environment or per environment group, and a second Learn page gives the per-environment path Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials with modes 'All sharing allowed' and 'Safe sharing enforced' (https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials). Cite it. | Source: https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials
- [contradicted, blocker] controls[2].note; Governance controls / behaviour: Agents that already use maker-provided credentials keep working until the tool is edited; the admin setting removes options from the maker's list rather than overriding a saved choice. | Found: All tools for all agents in the impacted environments instantly change to require end-user credentials at runtime. ... Once active, all existing and new agents in that environment adhere to this rule. ... If the maker previously had a tool configured with their credentials, they might be prompted to | Fix: Replace both statements: once the setting is saved, every tool in every existing and new agent in the environment requires end-user credentials at run time, and a maker whose tool is still configured for their own credentials may be prompted to change it before publishing (https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication). | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication
- [contradicted, blocker] front matter: defaultState / consistency: The default state is 'on'. | Found: Page: 'By default, both End-user and Maker-provided credentials are enabled.' | Front matter: defaultState on. The standard's default state for a feature that is itself a control is admin-opt-in when the sources say it restricts nothing until an admin configures it. | Fix: Set defaultState to admin-opt-in: the setting restricts nothing until an administrator changes it. Then reconsider action: act-now rested on 'on by default'; with status In development and nothing enforced by default, prepare fits the standard's definition. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Environment-group configuration needs Managed Environments. | Found: Environment groups can only contain managed environments. | Fix: Cite https://learn.microsoft.com/power-platform/admin/environment-groups for the Managed Environments requirement; none of the cited pages states it. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [unsupported, blocker] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: No additional licence is required for the control itself. | Found: Searched: the cited page's Prerequisites section lists 'Power Platform admin permissions' and nothing else; no Microsoft page read states that the setting needs no licence, and 'Managed Environments licensing' pages speak only to managed environments. | Fix: Replace 'No additional licence for the control' and 'No licence cost for the setting itself' with the narrower statement the page supports: the setting's prerequisites list Power Platform admin permissions and name no licence (https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication#prerequisites).
- [supported, minor] Cost and licensing / licensing: Managed Environments needs standalone Power Platform or Copilot Studio licences for the users of those environments. | Found: When you activate managed environments in an environment, all active usage requires one of these standalone licenses or pay-as-you-go meters. | Fix: Cite https://learn.microsoft.com/power-platform/admin/managed-environment-licensing and add that pay-as-you-go meters for Power Apps per app, Power Pages and Copilot Studio also qualify. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-licensing
- [unsupported, major] Risk assessment: Data exposure / behaviour: With end-user credentials enforced, Purview audit records are attributable to the right person. | Found: Searched: 'Copilot Studio audit logs Purview tool actions attributed to end user when end-user credentials used'; opened purview/ai-copilot-studio and purview/audit-copilot. They describe audit records of prompts and responses and who interacted with the agent; none states how tool actions are attri | Fix: Remove 'which also makes Purview audit records attributable to the right person', or cite a Microsoft page that states how Copilot Studio audit records attribute tool actions.
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: Blocking maker credentials breaks autonomous agents unless they use system identities or the run-only sharing model where each user supplies connections. | Found: When maker-provided credentials are prevented from being used, agents require real-time user interaction because each tool call must be authenticated with a live user sign-in. As a result, agents triggered by scheduled or autonomous events, or that attempt to run in the background, fail due to missi | Fix: Replace with: when maker-provided credentials are blocked, agents triggered by scheduled or autonomous events, or that run in the background, fail because every tool call needs a live user sign-in, and Microsoft documents no exception for system identities or run-only sharing (https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication#scope-of-enforcement-and-experience). | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication#scope-of-enforcement-and-experience
- [unsupported, major] Risk assessment: Security & identity / behaviour: Agents that need a service identity can move to a service principal, API key or managed identity connection under this setting. | Found: Searched: configure-no-maker-authentication documents only End-user and Maker-provided credentials and says all agent triggers must involve an active user; configure-sharing-agents-embedded-maker-credentials names service principals, API keys and managed identities only as connection types to review | Fix: Remove the advice, or move it to Open questions: no page read documents a non-user credential type that stays available once maker-provided credentials are blocked.
- [contradicted, blocker] Risk assessment: Change & support / behaviour: Flows called from agents that use maker-only credentials fail until reconfigured. | Found: The control over the authentication type covers connectors, built-in actions, and embedded Power Automate flows equally. A Power Automate flow as a tool in the agent also requires each user to sign in for any connections that flow uses. | Fix: Replace with: flows used as tools are covered in the same way, and each user is prompted to sign in for the connections the flow uses (https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication#scope-of-enforcement-and-experience). | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication#scope-of-enforcement-and-experience
- [supported, minor] Scope / behaviour: The control affects connectors, flows and MCP tools that offer a credential choice. | Found: The control over the authentication type covers connectors, built-in actions, and embedded Power Automate flows equally. | Fix: List what the page lists: connectors, built-in actions and embedded Power Automate flows. MCP tools are not named on the page; the tools page says only that an MCP server's Details section is similar to other tools (https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent). | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication#scope-of-enforcement-and-experience
- [unsupported, major] Scope / behaviour: Knowledge sources follow their own authentication model. | Found: Searched: 'Copilot Studio knowledge sources authentication end user maker credentials SharePoint knowledge agent author authentication'; knowledge-add-sharepoint says generative answers run on behalf of the chatting user under the agent's authentication settings, but no page read relates knowledge-s | Fix: Remove the sentence, or cite a Microsoft page that states how knowledge-source authentication behaves when maker-provided credentials are blocked.
- [supported, minor] Governance guidance: Before rollout / behaviour: Copilot Studio agent status surfaces tools configured with maker-provided credentials. | Found: Copilot Studio surfaces connection-sharing violations in Agent status. For an authenticated agent that you didn't share, a warning appears indicating how many connections violate the administrator's connection-sharing policy. | Fix: Say that Agent status reports connection-sharing policy violations when the sharing control is enforced, and cite https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits; the security scan is what warns about maker-provided credentials generally. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits#control-sharing-of-agents-that-use-maker-provided-credentials
-->
