---
title: "Copilot Studio: web browsing for agents on the Microsoft Copilot harness"
slug: "copilot-studio-computer-use-for-web-browsing-on-microsoft-copilot-harness"
roadmapId: 576272
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio agents will browse and interact with websites natively on the Microsoft Copilot harness: navigating, extracting information and downloading files."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Existing computer use costs 5 Copilot Credits per step (15 for premium models). This feature is not yet priced."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["copilot-studio","web-browsing","computer-use","agents","copilot-harness"]
sources:
  - title: "Microsoft 365 Roadmap item 576272"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576272"
    kind: "roadmap"
  - title: "Automate web and desktop apps with computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use"
    kind: "learn"
  - title: "FAQ for the computer use tool"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/faqs-computer-use"
    kind: "learn"
  - title: "Whether computer use is available in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    kind: "learn"
  - title: "Hosted browser for computer use (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use#disable-hosted-browser"
    kind: "learn"
  - title: "Allowed sites and HTTPS enforcement for an agent's browsing (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use#configure-optional-settings"
    kind: "learn"
videos: []
related: ["copilot-studio-require-human-approval-for-tool-calls","copilot-studio-mcp-tools-in-agents","copilot-credits","data-policies"]
controls:
  - governs: "Whether computer use is available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Computer use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    api:
      kind: "pac-cli"
      call: "pac env update-settings --environment <environment-id> --name iscomputeruseinmcsenabled --value false"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
  - governs: "Hosted browser for computer use"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings > Hosted browser in computer use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use#disable-hosted-browser"
    api: null
  - governs: "Allowed sites and HTTPS enforcement for an agent's browsing"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > Computer use > allow list and Enforce HTTPS"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use#configure-optional-settings"
    api: null
    note: "Maker-side, per agent."
  - governs: "Switch specific to web browsing on the Microsoft Copilot harness"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap entry names no control of its own; the computer use settings above are the nearest documented levers."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-28T20:19:16"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576272."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 38
  unconfirmed: 1
  contradicted: 3
  attempts: 1
---

## What's changing

Copilot Studio agents will be able to browse and interact with websites as a native capability powered by the Microsoft Copilot harness. With natural-language instructions, agents can navigate pages, extract information and download files, then use them with other tools to complete end-to-end workflows.

This extends reach beyond configured knowledge sources and API integrations. The roadmap target is January 2027, Worldwide, status In development.

Copilot Studio already offers a computer use tool that interprets screens and acts through a virtual mouse and keyboard on a hosted browser or your own machine. How the harness capability differs is not yet documented.

## Why it matters

Web interaction opens agents to untrusted content and external accounts. Learn warns that computer use can take unintended actions through ambiguous instructions or unexpected on-screen content.

## Risk assessment

**Data exposure**
- Agents can download files and extract page content into workflows.

**Security & identity**
- Credentials and sessions used on websites need careful scoping; Learn lists an allow list and Enforce HTTPS for computer use.

**Autonomy & actions**
- Autonomous agents can act without a person watching.

**Change & support**
- Site changes and throttling affect reliability.

## Cost and licensing

Not yet published for this capability. For computer use, Learn states 5 Copilot Credits per step, or 15 with a premium model, billed through the Agent action feature.

## Scope

Copilot Studio agents on the Microsoft Copilot harness in Worldwide (Standard Multi-Tenant).

## Governance guidance

### Before rollout
- Decide which sites agents may visit and set allow lists where available.
- Review data policies and external model settings.

### At rollout
- Pilot with low-risk sites and test runs.
- Require human approval for sensitive actions.

### After rollout
- Review run logs and credit use.
- Update allow lists as needs change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether computer use is available in an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Computer use <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac env update-settings --environment &lt;environment-id&gt; --name iscomputeruseinmcsenabled --value false</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Hosted browser for computer use</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings › Hosted browser in computer use <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use#disable-hosted-browser" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowed sites and HTTPS enforcement for an agent's browsing</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, per agent.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › Computer use › allow list and Enforce HTTPS <a href="https://learn.microsoft.com/microsoft-copilot-studio/computer-use#configure-optional-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to web browsing on the Microsoft Copilot harness</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap entry names no control of its own; the computer use settings above are the nearest documented levers.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The environment feature is the only switch with a documented command-line equivalent. The tenant settings page lists the hosted browser toggle but Learn gives no property name for it in `Set-TenantSettings`, so treat it as portal-only until that appears. Allow lists are set by makers and are not enforced centrally; connector data policies and endpoint filtering remain the admin-side way to constrain what an agent can reach. Watch the [computer use administration page](https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use) for a harness-specific setting.

## Open questions

- Whether computer use controls apply to the harness capability.
- Credit billing and limits.
- Handling of authenticated sites and downloaded files.

<!-- rationale
risk: High. Agents act on live websites, may download files and enter data, and screen content can steer them in unintended ways.
cost: Variable. Computer use today bills Copilot Credits per step; billing for this native capability is not yet published.
impact: Medium. Affects makers and owners of agents that gain web access, and the sites they interact with.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What's changing / behaviour: Existing computer use can run on a hosted browser or a machine the customer provides. | Found: When you add computer use to an agent, you have the following options:
- Hosted browser
- Cloud PC pool
- Bring-your-own machine | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/configure-where-computer-use-runs and call the existing hosted browser a preview. Keep this explicitly separate from the planned harness capability. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-where-computer-use-runs
- [supported, minor] Risk assessment: Change & support / behaviour: Throttling can affect computer-use reliability. | Found: The hosted browser lets you get started quickly with computer use. However, it's not recommended for production use. Usage might be throttled based on demand. | Fix: Say 'The existing hosted browser preview may be throttled based on demand' and cite https://learn.microsoft.com/microsoft-copilot-studio/configure-where-computer-use-runs. Do not imply that a throttling policy is already documented for the planned harness capability. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-where-computer-use-runs
- [supported, minor] front matter: licensing.model, cost; rationale: cost / licensing: The consumption licensing model and variable cost rating reflect Copilot Credit metering. | Found: For experiences powered by the Microsoft Copilot harness, Copilot Credits are charged for large language model (LLM) tokens, tools (including knowledge and MCPs), and the harness itself. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview for consumption billing and the variable rating. State that harness agents already consume Copilot Credits, while a web-browsing-specific rate is not yet published; do not base these fields only on the neighbouring standard-harness tool. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [contradicted, blocker] controls[2].ui; Governance controls: third table row / admin-path: The maker path for site restrictions and HTTPS is Tools > Computer use > allow list and Enforce HTTPS. | Found: Go to the Tools page for your agent and select Add tool. ... select New tool. ... Select Computer use. ... Select Add and configure. ... Access control ... Enforce HTTPS | Fix: Replace the path in front matter and the rendered table with 'Tools > Add tool > New tool > Computer use > Add and configure > Access control / Enforce HTTPS'. Explain that instructions are supplied before Add and configure, and that Access control and Enforce HTTPS are separate options on that configuration page. The current final label does not exist. | Source: https://learn.microsoft.com/microsoft-copilot-studio/computer-use#configure-optional-settings
- [unsupported, blocker] Governance controls: following prose / applicability: Allow lists are not enforced centrally. | Found: Searched: Copilot Studio computer use centrally allow; computer use allow list API configuration centrally. Read computer-use and configure-where-computer-use-runs; maker configuration is documented, but no blanket absence of central enforcement is stated. Learn also recommends Edge policies via Int | Fix: Replace the absolute statement with 'The Access control allow list is configured in the computer-use tool by its maker; no tenant-wide administration surface for that list is documented as of November 2026.' If discussing other controls, note that Learn recommends Edge policies via Intune for managed machines, while the hosted browser is not managed by the tenant's Intune policies. Cite computer-use#best-practices and configure-where-computer-use-runs.
- [supported, minor] Governance controls: following prose / applicability: Connector data policies and endpoint filtering provide administrator-side restrictions on agents' access to services. | Found: Data policies let you govern how agents connect and interact with data and services ... Alternatively, if you want to allow or deny specific HTTP endpoints instead of blocking all HTTP calls, use endpoint filtering. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention and narrow the sentence to connector access and supported HTTP/knowledge-source endpoints. State that this documentation does not establish a website allow list for native harness computer-use browsing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [contradicted, minor] Governance guidance; controls / consistency: The governance checklist asks readers to review controls that have no corresponding control rows. | Found: Review data policies and external model settings. ... Require human approval for sensitive actions. ... Review run logs and credit use. No corresponding rows appear among the table's four controls. | Fix: Add rows for the data-policy, external-model and approval controls the checklist recommends, with documented surfaces and explicit applicability caveats for the planned capability. Represent monitoring controls if readers are asked to configure them; otherwise keep log and credit review as operational advice rather than implying an undocumented control.
- [contradicted, minor] front matter: action / consistency: The prepare action rating treats this as a change that arrives without a maker choosing it. | Found: action: prepare; defaultState: unknown; Open questions: Whether computer use controls apply to the harness capability. The roadmap describes a new capability, not a mandatory replacement or automatic change to existing agents. | Fix: Set action to 'review'. The standard assigns review to a new capability with an unstated default when no source says existing behaviour changes automatically; the roadmap supplies no such statement.
-->
