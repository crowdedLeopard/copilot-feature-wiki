---
title: "Power Apps: Power Apps CLI commands to find connectors and create connections for code apps"
slug: "powerapps-building-modern-apps-use-cli-to-discover-create-and-wire-connectors-in-code-apps"
roadmapId: 576782
topic: "power-platform"
products: ["Power Apps"]
summary: "Developers can list connectors and create connections for code apps from the Power Apps CLI, and coding agents can run the same steps. Admins decide whether code apps are enabled per environment; no new admin action is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "No licence or meter is documented for the CLI commands. Code apps overview: end users need a Power Apps Premium licence, pay-as-you-go, an App Pass or auto-claim. Connector licence class is not documented for this feature."
audiences: ["power-platform-admin","maker","security"]
tags: ["power-apps","code-apps","power-apps-cli","connectors","coding-agents","data-policies","governance"]
sources:
  - title: "Microsoft 365 Roadmap 576782"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576782"
    kind: "roadmap"
  - title: "Quickstart: Create a code app using the Power Apps CLI"
    url: "https://learn.microsoft.com/power-apps/developer/code-apps/how-to/npm-quickstart"
    kind: "learn"
  - title: "How to: Create a connection from the Power Apps CLI"
    url: "https://learn.microsoft.com/power-apps/developer/code-apps/how-to/create-connection"
    kind: "learn"
  - title: "Power Apps CLI command reference"
    url: "https://learn.microsoft.com/power-apps/developer/code-apps/reference/cli"
    kind: "learn"
  - title: "How to: Connect your code app to data"
    url: "https://learn.microsoft.com/power-apps/developer/code-apps/how-to/connect-to-data"
    kind: "learn"
  - title: "Quickstart: Build a code app with GitHub Copilot"
    url: "https://learn.microsoft.com/power-apps/developer/code-apps/how-to/quickstart-github-copilot"
    kind: "learn"
  - title: "Power Apps code apps overview"
    url: "https://learn.microsoft.com/power-apps/developer/code-apps/overview"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features#power-apps-code-apps"
    kind: "learn"
  - title: "EnvironmentManagementSetting.PowerAppsAllowCodeApps Property"
    url: "https://learn.microsoft.com/dotnet/api/microsoft.powerplatform.management.models.environmentmanagementsetting.powerappsallowcodeapps?view=power-platform-latest"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/create-dlp-policy"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Manage connections in canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/add-manage-connections"
    kind: "learn"
videos: []
related: ["power-apps-use-power-platform-connectors-in-generative-pages","data-policies"]
controls:
  - governs: "Whether code apps run in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Power Apps code apps > Enable code apps"
      docs: "https://learn.microsoft.com/power-apps/developer/code-apps/overview"
    api: null
    note: "Power Platform admins and environment admins can set it; configurable for several environments through environment groups and rules. Learn lists the default as Off."
  - governs: "Which connectors code apps may use or combine"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > connector > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/create-dlp-policy"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy-guid> -Connectors <connector-objects> -Classification <General|Confidential|Blocked>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    note: "Not confirmed for the CLI commands. The UI path blocks a blockable connector in an existing policy. Classification: Non-business (General), Business (Confidential) or Blocked; each connector object needs id, type, name."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:09:00"
changes:
  - date: "2026-11-18"
    note: "First briefing for this roadmap item."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 50 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: broad data-access claim narrowed, unsupported API entry removed, data policy path, roles and blockable-connector wording fixed, connector-licence inference dropped."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 67 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: cost rationale now says no CLI-specific licence or meter is documented, and the connection-review checklist step without a controls-table row was removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the data policy control row: the admin path now reaches the Block action in an existing policy, and the PowerShell call is Add-ConnectorsToPolicy."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 70 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-18"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0e463ba147e72d2bb621d18ed2a10d73"
---

## What's changing

The Power Apps CLI for code apps gains commands that let a developer find the connectors available in an environment and create a connection to one from the terminal. The roadmap item describes this as wiring connectors into code apps without switching tools or configuring connections in the maker portal. It also covers new agent.md files and how-to articles that show coding agents doing connector discovery and connection creation as part of prompt-to-app workflows.

Microsoft Learn documents the commands. `pa connector list` lists connectors in the environment configured for the code app (with `--search` and `--json` options), and `pa connection create --connector <connector-id>` creates a connection and returns its connection ID. That ID is then used when the connector is added to the app as a data source. Both run from an initialised code app project. A separate Learn quickstart describes a code apps preview plugin for GitHub Copilot CLI: after you approve a plan, the agent runs the code apps CLI to scaffold, initialise, add connectors and build the app.

The roadmap record gives status Launched, with a preview date of June CY2026 and a target date of July CY2026. Release phases are listed as General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the Web platform. The record says it is enabled for admins, makers and marketers automatically. Microsoft Learn does not describe the agent.md files at the time of writing (November 2026), so what they contain is the roadmap's description.

## Why it matters

This shortens the path from a developer's terminal to a connected, published code app, and lets an AI agent take some of those steps. For a service owner the connection is the thing to watch: Learn says `pa connection create` creates it in the environment configured for the code app. After adding a connection as a data source, the app can call the generated services for that data source.

If nobody acts, nothing changes for tenants that have not enabled code apps: the Learn feature settings page lists the Enable code apps setting with a default of Off. In environments where it is on, developers can use the commands straight away. Microsoft has not documented a separate switch for the CLI commands, so the controls that matter are the environment setting and data policies.

## Risk assessment

**Data exposure**
- After adding a connection as a data source, the app can call the generated services for that data source. The code apps overview lists data loss policy enforcement during app launch as a supported management capability. Whether a data policy also stops the connection being created from the CLI is not documented.
- The code apps overview says the end user sees a consent dialog for connector permissions.

**Security & identity**
- The quickstart says the agent checks that you are authenticated against the right tenant before it builds. Confirm which account the agent uses before letting developers run it against production environments.
- Learn lists Excel Online (Business) and Excel Online (OneDrive) as connectors that are not yet supported for code apps; all other connectors are described as officially supported.

**Autonomy & actions**
- With the code apps plugin, a coding agent runs the CLI after the developer approves a plan, including adding connectors. Approval of the plan is the human check; Learn does not describe an admin approval step.

**Change & support**
- The roadmap item says connections are created without the maker portal. Expect support questions about which connections a code app uses and who created them.

## Cost and licensing

No licence or meter is documented for the CLI commands themselves at the time of writing (November 2026); the roadmap item and the CLI pages name none.

The code apps overview says end users who run code apps need a Power Apps Premium licence, pay-as-you-go enabled, an App Pass, or auto-claim enabled (which assigns a premium licence automatically if one is available in the tenant). That requirement belongs to code apps in general, not to this change.

The data policy page classes each connector by whether its use requires a Premium licence or is included in the Built-in/Standard licence for Power Platform. Microsoft has not published a rate or limit specific to this feature. Indirect cost is developer and admin time to review the connections created.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. No other clouds are listed on the record.

The users affected are developers and makers who build code apps. Prerequisites on Learn: a Power Platform environment with code apps enabled, Node.js LTS, Git and the Power Apps CLI, and an initialised code app for the connection commands. Power Platform admins and environment admins can set the environment option that enables code apps.

Release phases on the record are General Availability and Preview. Microsoft Learn does not say which commands are in preview.

## Governance guidance

### Before rollout
- Check which environments have Enable code apps turned on, and decide which should keep it (Power Platform admin center, environment settings).
- Review the data policies that cover those environments, and confirm unwanted blockable connectors are in the Blocked group.
- Agree with developers which environment the CLI and the coding agent may target, since the connector list and connections come from the environment configured for the app.

### At rollout
- Tell developers and makers that `pa connection create` makes a connection in the environment configured for the code app.
- Ask developers to record the connection ID returned and which connector each code app uses.
- Turn on Enable code apps only in the environments where you want this development path, using environment groups and rules if you manage many environments.

### After rollout
- Confirm that data policy changes take effect for published code apps by testing an app that uses a newly blocked connector.
- Check for Microsoft Learn pages describing the agent.md guidance, and review what those agents are told to do.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether code apps run in an environment</strong><br><small>Environment</small><br><small class="controls__note">Power Platform admins and environment admins can set it; configurable for several environments through environment groups and rules. Learn lists the default as Off.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Power Apps code apps › Enable code apps <a href="https://learn.microsoft.com/power-apps/developer/code-apps/overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which connectors code apps may use or combine</strong><br><small>Environment</small><br><small class="controls__note">Not confirmed for the CLI commands. The UI path blocks a blockable connector in an existing policy. Classification: Non-business (General), Business (Confidential) or Blocked; each connector object needs id, type, name.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy › policy › Edit Policy › Prebuilt connectors › connector › Block <a href="https://learn.microsoft.com/power-platform/admin/create-dlp-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy-guid&gt; -Connectors &lt;connector-objects&gt; -Classification &lt;General|Confidential|Blocked&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The environment setting decides whether code apps run at all: Learn says that if it is turned off, those apps do not run. It is documented as an environment setting that Power Platform admins and environment admins can change, and it can be configured for several environments at once with environment groups and rules. The .NET SDK exposes nullable Boolean PowerAppsAllowCodeApps on EnvironmentManagementSetting; the property reference does not give a runnable update operation.

Data policies are a general Power Platform control. The code apps overview lists data loss policy enforcement during app launch as supported for code apps. Microsoft Learn does not say that a data policy blocks the CLI commands that list connectors or create connections, so treat the policy as a control over what the app can use, not over what developers can create.

Tenant-level policies require the Power Platform Administrator role. Environment-level policies require Power Apps Environment Admin permissions, or the System Administrator role for environments with a Dataverse database. No admin control specific to the connector commands is documented at the time of writing (November 2026).

## Open questions

- Does a data policy or any other admin control stop `pa connection create` from creating a connection to a blocked connector, or does it apply only when the app launches? Watch the Learn code apps pages.
- What do the new agent.md files instruct coding agents to do, and which account do those agents act under? Microsoft Learn does not describe them yet.
- Which of the CLI commands are in preview and which are generally available, given the roadmap lists both phases?
- Do connectors with a Premium licence class change what end users need to run a code app built this way? Watch the code apps overview.

<!-- rationale
risk: Medium. Connections for code apps can now be created from a terminal, or by a coding agent running the CLI, without the maker portal; existing controls (the environment's code apps toggle and data policies) apply but need checking.
cost: Low. No CLI-specific licence or meter is documented at the time of writing (November 2026); the known incremental cost is developer and admin time. Existing code-app licensing requirements still apply.
impact: Low. Developers and makers who build code apps notice it; the code apps setting on an environment is documented as off by default, so most users see no change.
-->
