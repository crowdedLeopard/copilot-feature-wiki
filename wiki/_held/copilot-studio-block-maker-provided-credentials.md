---
title: "Copilot Studio: block maker-provided credentials for tool authentication"
slug: "copilot-studio-block-maker-provided-credentials"
roadmapId: 566997
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Admins can stop makers authenticating agent tools with their own credentials, so each user signs in as themselves. Nothing changes until an admin sets it, and the change takes effect at once."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "September CY2025"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "The Learn page lists Power Platform admin permissions as its only prerequisite and names no licence. Environment groups can only contain managed environments, which carry their own licensing requirements."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["copilot-studio","maker-credentials","end-user-authentication","connectors","oversharing","managed-environments","environment-groups","power-platform-admin-center","autonomous-agents"]
sources:
  - title: "Microsoft 365 Roadmap 566997"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566997"
    kind: "roadmap"
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Configure sharing agents with embedded maker credentials"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    kind: "learn"
  - title: "Control sharing agents with embedded maker credentials (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    kind: "learn"
  - title: "Add tools to custom agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    kind: "learn"
  - title: "Environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    kind: "learn"
  - title: "Licensing requirements for managed environments"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-licensing"
    kind: "learn"
videos: []
related: ["copilot-studio-safe-sharing-credential-oversharing","copilot-studio-share-autonomous-agents-run-only","managed-environments","agent-identity"]
controls:
  - governs: "Which credential types makers may choose for agent tools"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments (or Environment groups) > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    api: null
    note: "Environment Admin for one environment; Power Platform Administrator or Global Admin for environment groups. Takes effect immediately for all tools in scope."
  - governs: "Sharing of agents that embed maker credentials (environment)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    api: null
    note: "General control: governs sharing and publishing only, not run time, and does not unshare existing agents. Modes: All sharing allowed, Safe sharing enforced."
  - governs: "Sharing of agents that embed maker credentials (environment or group)"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Threat detection > Sharing agent with embedded maker credentials > Set up"
      docs: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    api: null
    note: "Preview: the Learn page is prerelease documentation and subject to change. Configurable per environment or per environment group."
  - governs: "Which credential a given tool uses"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > tool > Details > Additional details > Authentication"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    api: null
    note: "Maker-side. Learn says By default, user authentication applies."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-07-02T23:12:48"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default state is now admin-opt-in and action is prepare; licensing claims narrowed to what Learn states; added the environment-level sharing control; removed unsupported claims about audit, service identities and knowledge sources."
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 58
  unconfirmed: 0
  contradicted: 1
  attempts: 2
---

## What's changing

Copilot Studio gets an administrator setting, **Control maker credential options**, that decides how makers may authenticate the tools they add to an agent. A tool such as a connector or Power Automate flow can run with the maker's own credentials or with each end user's. Microsoft Learn describes the setting as letting administrators choose end-user credentials, maker-provided credentials, or both.

The Learn page states that, by default, both **End-user** and **Maker-provided** credentials are enabled, so nothing is restricted until an administrator changes the setting. It is configured in the Power Platform admin center for an environment or an environment group.

The effect of restricting it is immediate. Learn warns that the feature turns off the maker's ability to select their credentials at once, that all tools for all agents in the affected environments change to require end-user credentials at run time, and that new conversations with those agents prompt the user to sign in to the connected service.

The roadmap item (target August CY2026, preview September CY2025, status In development) lists the release phases General Availability and Preview for the Worldwide cloud. The target month has passed and the status has not moved, while Microsoft Learn already documents the setting and its steps.

## Why it matters

This is the control that removes the main way an agent exceeds its users' permissions. Learn's own example is an end user retrieving information or performing actions that only the maker's account is permitted to do. Left at its default, the exposure stays: any maker can still configure a tool with their own credentials.

It is also a change that lands on users the moment it is saved, so treat it as a rollout with communications, not a quiet toggle. Agents that rely on schedules or background triggers will stop working, so find them before you enforce.

## Risk assessment

**Data exposure**
- Left at the default, a tool configured with the maker's credentials runs as the maker for everyone who uses the agent, so users can reach data or actions only the maker could. Restricting the setting to end-user credentials means each user only has access to what their own account allows.
- The separate sharing control (see the controls table) targets agents that embed maker credentials, but it governs sharing and publishing, not running.

**Security & identity**
- With end-user credentials enforced, no stored maker credentials are used at run time. Learn documents no other credential type that stays available once maker-provided credentials are blocked.
- Where an environment is in an environment group, the group's setting overrides the environment's, and the environment's options are unavailable.

**Autonomy & actions**
- When maker-provided credentials are prevented, each tool call needs a live user sign-in. Learn states that agents triggered by scheduled or autonomous events, or that run in the background, fail due to missing credentials, and that all agent triggers must involve an active user.

**Change & support**
- All existing and new agents in scope change at once. Expect sign-in prompts for users and questions from makers who previously saved a tool with their own credentials, who might be prompted to change it before publishing.
- Flows used as tools are covered in the same way: each user signs in for the connections the flow uses.

## Cost and licensing

The setting's Learn page lists Power Platform admin permissions as its only prerequisite and names no licence. No meter is documented for it at the time of writing (November 2026).

Environment groups can only contain managed environments. Learn's Managed Environments licensing page says that when you activate managed environments, all active usage requires a qualifying standalone licence or pay-as-you-go meter, and that pay-as-you-go meters for Power Apps per app, Power Pages and Copilot Studio also qualify. Managing per environment avoids the group requirement but not any licensing on the environment itself.

The known indirect costs are maker time to reconfigure tools and help desk time when users are prompted to sign in. Microsoft has not published a separate price for this control.

## Scope

- Copilot Studio agents in the selected environment or environment group, existing and new.
- Covers connectors, built-in actions and embedded Power Automate flows equally. MCP tools are not named on the Learn page.
- Roles: Environment Admin for a single environment; Power Platform Administrator or Global Admin for environment groups. If the environment is in a group, you must be a tenant admin with access to the group.
- The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. No other cloud is listed on the record.
- The policy applies per environment or environment group, and environment group settings override any environment settings.

## Governance guidance

### Before rollout
- Find agents with scheduled, autonomous or background triggers in each environment, because Learn says they fail once maker-provided credentials are blocked.
- Choose the environments to restrict first, starting with a development environment, and decide whether to set the group or individual environments.
- List tools makers have configured under **Authentication** in Copilot Studio and ask the owners to confirm the credential each needs.
- Tell makers and users that new conversations with affected agents will ask for sign-in to the connected service.

### At rollout
- Set **Control maker credential options** in the Power Platform admin center, in the group if the environment belongs to one.
- Allow a minute for propagation, then test an agent with a connector tool and one with a flow tool.
- Consider running the sharing control in **All sharing allowed** mode first to see which agents embed maker credentials.

### After rollout
- Check with makers whose tools were set to their own credentials, since they might be prompted to change them before publishing.
- Record which environments still allow maker-provided credentials and why.
- Re-check the Learn page for a documented API or PowerShell equivalent before scripting this.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which credential types makers may choose for agent tools</strong><br><small>Environment</small><br><small class="controls__note">Environment Admin for one environment; Power Platform Administrator or Global Admin for environment groups. Takes effect immediately for all tools in scope.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments (or Environment groups) › environment › Settings › Product › Features › Copilot Studio agents › Control maker credential options <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sharing of agents that embed maker credentials (environment)</strong><br><small>Environment</small><br><small class="controls__note">General control: governs sharing and publishing only, not run time, and does not unshare existing agents. Modes: All sharing allowed, Safe sharing enforced.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Features › Sharing agents with embedded maker credentials <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sharing of agents that embed maker credentials (environment or group)</strong><br><small>Environment group</small><br><small class="controls__note">Preview: the Learn page is prerelease documentation and subject to change. Configurable per environment or per environment group.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Threat detection › Sharing agent with embedded maker credentials › Set up <a href="https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which credential a given tool uses</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Learn says By default, user authentication applies.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › tool › Details › Additional details › Authentication <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is the control this item describes; the others are neighbours and are not substitutes. The credential option is a Power Platform admin center setting, and Learn documents no PowerShell, REST or CLI call for it at the time of writing (November 2026).

The sharing control governs publishing and sharing, not run time, and does not retroactively unshare agents. The credential option, in contrast, changes how every tool in scope authenticates. The maker-side **Authentication** field is where the choice is made; once the admin setting is saved, tools in scope require end-user credentials at run time.

## Open questions

- Will the credential option setting get a PowerShell, Power Platform API or pac CLI equivalent, so enforcement can be scripted across environments? Watch the Learn page.
- Is there a way to exempt a single autonomous agent that needs a non-user identity, given that Learn documents no exception? Watch the Learn page and Message center.
- When will the roadmap status move from In development, given that the August CY2026 target has passed and Learn documents the setting?
- Does the setting reach other clouds? The roadmap lists only Worldwide (Standard Multi-Tenant).

<!-- rationale
risk: High. The default allows both End-user and Maker-provided credentials, so agents can keep acting with a maker's access for every user until an admin restricts it.
cost: Low. The setting's prerequisites name admin permissions and no licence; environment groups need Managed Environments, whose licensing is published. Admin and maker time is the known cost.
impact: Medium. Makers lose an option, and users of affected agents are asked to sign in to connected services; autonomous and scheduled agents fail.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] summary; What's changing; Risk assessment: Change & support; Governance guidance: Before rollout; rationale: impact / behaviour: New conversations with affected agents prompt users to sign in to the connected service. | Found: Enforcing the use of end-user credentials prompts the end user to sign in (to the relevant service or connector) when needed. ... the agent might use that existing authentication session. | Fix: Qualify the sign-in descriptions with 'if needed'; the same Learn page says existing authorized sessions can be reused, so not every new conversation necessarily presents a fresh sign-in prompt. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: The complete Threat detection path is Security > Threat detection > Sharing agent with embedded maker credentials > Set up. | Found: In the Environment groups tab, select the environment group for which you want to configure the setting. ... In the Environments tab, select the environment for which you want to configure the setting. ... Select Set up. | Fix: Replace the path in controls[2].ui and the rendered table with 'Security > Threat detection > Sharing agent with embedded maker credentials > Environment groups (or Environments) > environment group (or environment) > Set up'. The cited page requires choosing the tab and target before Set up. | Source: https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials
- [supported, minor] controls[3].ui; Governance controls table; Governance controls; Governance guidance: Before rollout / admin-path: The maker chooses tool credentials under Tools > tool > Details > Additional details > Authentication. | Found: Go to the Tools page for your agent, and select the tool from the list of tools. ... Details ... Additional details ... Authentication: Select whether to use the user's (End user) or maker's (Maker-provided) credentials for the tool. | Fix: Keep the cited path, but add that https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors calls the connector field 'Credentials to use' under Overview > Details > Additional details, whereas the general tools page calls it 'Authentication'. Cite both rather than implying identical labels in every tool experience. | Source: https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent
-->
