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
