---
title: "Copilot Studio: web browsing for agents on the Microsoft Copilot harness"
slug: "copilot-studio-computer-use-for-web-browsing-on-microsoft-copilot-harness"
roadmapId: 576272
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Roadmap item: Copilot Studio agents on the Microsoft Copilot harness will browse websites and download files. No browsing-specific control or rate is documented yet; harness agents already bill Copilot Credits."
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
action: "review"
licensing:
  model: "consumption"
  notes: "Agents on the Microsoft Copilot harness consume Copilot Credits for all usage, and Microsoft says this usage isn't included with a Microsoft 365 Copilot licence. A rate for web browsing is not yet published."
audiences: ["power-platform-admin","security","finops","maker"]
tags: ["copilot-studio","copilot-harness","web-browsing","computer-use","agents","copilot-credits","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap 576272"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576272"
    kind: "roadmap"
  - title: "Harnesses in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Automate web and desktop apps with computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use"
    kind: "learn"
  - title: "Administer computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    kind: "learn"
  - title: "Configure where computer use runs"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-where-computer-use-runs"
    kind: "learn"
  - title: "Configure Global Secure Access, the Secure Web, and AI Gateway for agents"
    url: "https://learn.microsoft.com/power-platform/admin/security/secure-web-ai-gateway-agents"
    kind: "learn"
  - title: "Hosted browser for computer use (preview) (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use#disable-hosted-browser"
    kind: "learn"
  - title: "Allowed websites and HTTPS enforcement for the computer use tool (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use#configure-optional-settings"
    kind: "learn"
videos: []
related: ["copilot-credits","copilot-studio-require-human-approval-for-tool-calls","data-policies","copilot-studio-mcp-tools-in-agents"]
controls:
  - governs: "Prepaid Copilot Credits allocated to an environment, and whether it can draw from the tenant pool"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (entitlementId MCSMessages, enforcement rule TenantPool)"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Role: Power Platform Administrator, Global Administrator or equivalent. Applies across Copilot Studio, not only this harness; a linked pay-as-you-go plan can still be billed."
  - governs: "Monthly Copilot Credit limit for one agent, with a stop at the limit"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    api: null
    note: "Turn on Stop usage to turn the agent off at the limit. No programmatic call for agent limits was found at the time of writing."
  - governs: "Whether the standard-harness computer use tool is available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Computer use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    api:
      kind: "pac-cli"
      call: "pac env update-settings --environment <envid> --name iscomputeruseinmcsenabled --value false"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    note: "Existing control for the computer use tool on the standard harness. Microsoft has not confirmed it applies to the new capability."
  - governs: "Hosted browser for computer use (preview)"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings > Hosted browser in computer use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use#disable-hosted-browser"
    api: null
    note: "Existing control for the preview hosted browser of the standard-harness tool; Microsoft has not confirmed it applies to the new capability."
  - governs: "Allowed websites and HTTPS enforcement for the computer use tool"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > Add tool > New tool > Computer use > Add and configure > Access control"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use#configure-optional-settings"
    api: null
    note: "Maker-side, per tool. Enforce HTTPS is a separate option on the same page. Not confirmed for the new capability."
  - governs: "Forwarding agent traffic to Global Secure Access for web content, threat and file filtering"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Identity & access > Global Secure Access for Agents > environment > Set up"
      docs: "https://learn.microsoft.com/power-platform/admin/security/secure-web-ai-gateway-agents"
    api: null
    note: "General control: needs Global Secure Access onboarding and Power Platform Administrator. Microsoft has not confirmed it covers browsing on this harness."
  - governs: "Switch or site allow list specific to web browsing on the Microsoft Copilot harness"
    scope: "tenant"
    ui: null
    api: null
    note: "Searched for at the time of writing (November 2026); the roadmap item names no control of its own."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-28T20:19:16"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576272."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Separated this item from the standard-harness computer use tool, re-sourced Copilot Credit billing and controls to Microsoft Copilot harness pages, and moved action to review."
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 76
  unconfirmed: 0
  contradicted: 2
  attempts: 2
---

## What's changing

Microsoft's roadmap item 576272 describes web browsing as a native capability for Copilot Studio agents powered by the Microsoft Copilot harness. Using natural-language instructions, agents can navigate web pages, extract information and download files, then use them with other tools in end-to-end workflows, beyond configured knowledge sources and API-based integrations.

Microsoft Learn does not describe this capability yet, so what is known about its behaviour is the roadmap's description. Learn describes the Microsoft Copilot harness as the runtime for "reasoning-heavy, multi-step work". It does not list a browsing tool for it at the time of writing (November 2026).

Do not confuse it with the existing computer use tool. That page says it describes features of agents powered by the standard harness, and it runs on a Windows machine: a hosted browser (preview), a Cloud PC pool (preview) or a bring-your-own machine. Whether the new capability shares its settings is not documented.

The roadmap record gives the status as In development, with a preview target of November CY2026 and a target of January CY2027. It lists General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. The record does not say whether the capability is on by default.

## Why it matters

This would let agents reach websites no administrator has connected, which is a different exposure from a governed connector or knowledge source. Pages and downloaded files can hold content that steers or misleads an agent, and nothing documented says which sites an administrator can exclude for this capability.

If nobody acts, nothing in the sources says existing agents change. The decisions that can be taken now are cost and authoring: the Microsoft Copilot harness bills Copilot Credits for all usage, so credit limits and who can build agents are the levers available today. Treat network and site restrictions as open until Microsoft documents them.

## Risk assessment

**Data exposure**
- The roadmap says agents can extract information from pages and download files into workflows. Learn documents no restriction on which sites or file types apply to this capability. The Global Secure Access for Agents control can filter web content and file uploads and downloads for supported agent traffic, but its page does not say browsing on the Microsoft Copilot harness is covered.

**Security & identity**
- Learn documents no identity model for browsing on this harness, including whether agents sign in to sites and with whose credentials. For the standard-harness computer use tool, maker-provided credentials are the default and sharing the agent lets anyone act with the author's access; do not assume the new capability behaves the same way.

**Autonomy & actions**
- Agents on this harness plan steps and adjust on their own, and the roadmap adds website interaction to that. No approval step specific to browsing is documented.

**Change & support**
- Dates are targets and the capability is not yet launched. Credit use for the Microsoft Copilot harness starts when someone starts building, so test runs of browsing agents would consume credits.

## Cost and licensing

Agents on the Microsoft Copilot harness use consumption-based billing. Learn says this usage isn't included with a user's Microsoft 365 Copilot licence, and that for the harness, Copilot Credits are charged for LLM tokens, tools (including knowledge and MCPs) and the harness itself. Credits are charged from the moment someone starts building, including previews and tests. Sources: billing overview and the Power Platform admin centre cost guide for the harness.

A browsing-specific credit rate is not yet published. For comparison only, the standard-harness computer use tool states 5 Copilot Credits per step, or 15 with a premium model. Do not use that as an estimate for this capability.

Credits are charged to the environment where the agent runs, not to individual makers. Cap them with an environment allocation with **Draw from the available capacity in my tenant** cleared, and an agent monthly limit with **Stop usage**. Usage can still continue through a linked pay-as-you-go plan, and Azure budgets and alerts notify but do not stop consumption. Both controls are in the controls table.

## Scope

The roadmap lists Microsoft Copilot Studio, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. Other clouds are not listed on the record.

The capability is aimed at Copilot Studio agents on the Microsoft Copilot harness. Licence prerequisites, roles and rollout mechanics for it are not yet published. For cost controls, Learn requires the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

The Microsoft Copilot harness has no maker-access setting of its own, so authoring is controlled by existing Copilot Studio and environment permissions.

## Governance guidance

### Before rollout
- Allocate Copilot Credits to the environments that will host Microsoft Copilot harness agents and clear **Draw from the available capacity in my tenant**, so browsing agents cannot draw on the tenant pool.
- Check who can build agents in those environments, because the harness has no maker-access setting of its own; use environment and security-role assignments.
- Decide whether Global Secure Access for Agents is in scope for those environments, and confirm with Microsoft whether it covers this capability before relying on it.

### At rollout
- Set an agent monthly limit with **Stop usage** on any agent given web browsing, with a notification threshold.
- Pilot in a governed environment with a small group of makers, and compare the credits consumed per run against the allocation.
- Record which agents use browsing, using the **Harness** column in the agent inventory to find Microsoft Copilot harness agents.

### After rollout
- Review agent and environment credit consumption together in Licensing > Copilot Studio.
- Re-read the Learn pages for the Microsoft Copilot harness when Microsoft documents browsing, and add any control that appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Prepaid Copilot Credits allocated to an environment, and whether it can draw from the tenant pool</strong><br><small>Environment</small><br><small class="controls__note">Role: Power Platform Administrator, Global Administrator or equivalent. Applies across Copilot Studio, not only this harness; a linked pay-as-you-go plan can still be billed.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (entitlementId MCSMessages, enforcement rule TenantPool)</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit for one agent, with a stop at the limit</strong><br><small>Agent</small><br><small class="controls__note">Turn on Stop usage to turn the agent off at the limit. No programmatic call for agent limits was found at the time of writing.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the standard-harness computer use tool is available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Existing control for the computer use tool on the standard harness. Microsoft has not confirmed it applies to the new capability.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Computer use <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac env update-settings --environment &lt;envid&gt; --name iscomputeruseinmcsenabled --value false</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Hosted browser for computer use (preview)</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for the preview hosted browser of the standard-harness tool; Microsoft has not confirmed it applies to the new capability.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings › Hosted browser in computer use <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use#disable-hosted-browser" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowed websites and HTTPS enforcement for the computer use tool</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, per tool. Enforce HTTPS is a separate option on the same page. Not confirmed for the new capability.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › Add tool › New tool › Computer use › Add and configure › Access control <a href="https://learn.microsoft.com/microsoft-copilot-studio/computer-use#configure-optional-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Forwarding agent traffic to Global Secure Access for web content, threat and file filtering</strong><br><small>Environment</small><br><small class="controls__note">General control: needs Global Secure Access onboarding and Power Platform Administrator. Microsoft has not confirmed it covers browsing on this harness.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Identity &amp; access › Global Secure Access for Agents › environment › Set up <a href="https://learn.microsoft.com/power-platform/admin/security/secure-web-ai-gateway-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch or site allow list specific to web browsing on the Microsoft Copilot harness</strong><br><small>Tenant</small><br><small class="controls__note">Searched for at the time of writing (November 2026); the roadmap item names no control of its own.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting specific to web browsing on the Microsoft Copilot harness is documented at the time of writing (November 2026), so the last row is empty. The cost controls are the only documented levers confirmed for this harness. They cap spend, not where an agent browses.

The computer use rows are existing controls for the standard-harness tool. Learn does not say they apply to the new capability; treat them as today's alternatives. The environment toggle covers only the computer use tool, the hosted browser tenant setting covers only the preview hosted browser, and the **Access control** allow list is set by the maker per tool. Learn notes that it stops the model acting on sites outside the list but not opening them.

Global Secure Access for Agents is a general control: it needs the tenant onboarded to Global Secure Access, and its page lists HTTP node, connector, MCP and custom-tool traffic and states that Copilot Studio Bing search transactions are not supported. Learn does not say whether browsing traffic from this harness is forwarded.

## Open questions

- Which admin settings will govern web browsing on the Microsoft Copilot harness, and will the computer use environment toggle or tenant settings apply? Watch the Learn pages on administering computer use and the harness.
- What Copilot Credit rate applies to a browsing step or download, and will it differ by model? Watch the billing overview for the harness.
- Can administrators restrict which sites an agent may visit, at tenant or environment level, and does Global Secure Access for Agents see this traffic?
- How will browsing handle sign-in to websites, and are downloaded files scanned or labelled before an agent passes them to other tools?
- Is the capability on by default for existing Microsoft Copilot harness agents when it reaches preview in November CY2026? Watch Message center.

<!-- rationale
risk: High. Agents would navigate websites and download files on their own, and Microsoft documents no control specific to this capability, so exposure rests on general limits.
cost: Variable. The meter is Copilot Credits: agents on the Microsoft Copilot harness bill for all usage, outside a Microsoft 365 Copilot licence, and no browsing-specific rate is yet published.
impact: Medium. Makers and owners of Microsoft Copilot harness agents would notice first; end users only if an agent they use is given browsing.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Cost and licensing; Governance guidance: Before rollout; controls[0] / applicability: Administrators can clear tenant-pool draw at environment level or update it programmatically without a group-policy qualification. | Found: If a published environment group rule governs Draw from the available capacity in my tenant, you can't override the setting for an individual environment. | Fix: Qualify the environment instructions and controls[0].note: if a published environment-group rule governs tenant-pool draw, the environment setting is read-only and API/SDK updates fail with TenantPoolLockedByPolicy. Change and republish the group rule, or remove the environment from the group, before changing the environment setting. After removal it retains the group's last value. The cited tutorial and harness cost guide both document this. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[1].governs; controls[1].note; Cost and licensing; Governance guidance: At rollout / cost: Turning on Stop usage turns the agent off at its monthly credit limit. | Found: Turn on Stop usage if the agent should be turned off when it reaches the limit. | Fix: Keep Stop usage but add the qualifications at https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#manage-monthly-consumption-limits-for-copilot-studio-agents: limits are not applied instantly, so allow margin; an agent limit does not stop agent flows it calls, which are checked separately. Cite that page. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The governance checklist tells administrators to check authoring permissions, but no controls row represents that control. | Found: Check who can build agents in those environments, because the harness has no maker-access setting of its own; use environment and security-role assignments. | Fix: Add a row governing who can create agents through existing Copilot Studio/environment permissions. Source it to the harness cost guide's 'Control who can build' section and its linked environment-access documentation; read the actual UI/API reference before supplying a path or marking an automation surface absent.
- [supported, minor] Open questions: final bullet / record: The final open question describes preview as happening in November CY2026 rather than retaining the target qualification. | Found: "status": "In development", "previewDate": "November CY2026" | Fix: Replace 'when it reaches preview in November CY2026' with 'if it reaches preview at the roadmap's November CY2026 target'.
-->
