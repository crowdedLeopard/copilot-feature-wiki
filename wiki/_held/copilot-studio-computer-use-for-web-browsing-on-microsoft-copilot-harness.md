---
title: "Copilot Studio: computer use for web browsing on the Microsoft Copilot harness"
slug: "copilot-studio-computer-use-for-web-browsing-on-microsoft-copilot-harness"
roadmapId: 576272
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Planned: Copilot Studio agents on the Microsoft Copilot harness will browse websites, extract data and download files. Usage is billed in Copilot Credits; Learn does not yet document the controls for this harness."
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
  notes: "Microsoft Copilot harness usage is billed in Copilot Credits and is not included in a Microsoft 365 Copilot licence. A credit rate for browsing on this harness is not yet published."
audiences: ["power-platform-admin","security","finops","maker"]
tags: ["copilot-studio","copilot-harness","computer-use","web-browsing","agents","copilot-credits","usage-based-billing","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576272"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576272"
    kind: "roadmap"
  - title: "About agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    kind: "learn"
  - title: "Automate web and desktop apps with computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use"
    kind: "learn"
  - title: "Administer computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    kind: "learn"
  - title: "FAQ for the computer use tool"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/faqs-computer-use"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
videos: []
related: ["copilot-credits","data-policies","microsoft-copilot-studio-agent-sharing-amongst-makers","copilot-studio-block-maker-provided-credentials","copilot-studio-require-human-approval-for-tool-calls"]
controls:
  - governs: "Whether computer use can be added to agents in an environment (documented for the standard harness)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Computer use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    api:
      kind: "pac-cli"
      call: "pac env update-settings --environment <envid> --name iscomputeruseinmcsenabled --value false"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use"
    note: "The page is written for the standard harness. Microsoft has not confirmed it governs browsing on the Microsoft Copilot harness."
  - governs: "Copilot Credits allocated to an environment and whether it can draw on tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with entitlementId MCSMessages and an enforcementRules entry of ruleType TenantPool, enabled false"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Needs Power Platform Administrator or Global Administrator. A pay-as-you-go plan linked to the environment can still allow usage."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-10-28T20:19:16"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576272."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Separated this item from the standard-harness computer use tool, re-sourced Copilot Credit billing and controls to Microsoft Copilot harness pages, and moved action to review."
  - date: "2026-11-17"
    note: "Corrected: environment tenant-pool draw is read-only under a published environment group rule; added agent-limit margin and agent flow qualifications; reworded the preview open question as a target."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: the credit allocation API call now shows the full request; the governance note no longer says cost controls are the only levers; removed three checklist steps with no table row; added that an agent must consume credits before limits can be set."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 94 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "New briefing: roadmap plans browsing for Copilot Studio agents on the Microsoft Copilot harness; Learn lists computer use as Planned there, so controls and credit rate are not yet documented."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-17"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 79
  unconfirmed: 0
  contradicted: 3
  attempts: 5
  hash: "f1ca0750601eb80e53746c087b3c058a"
---

## What's changing

The roadmap item states that Microsoft Copilot Studio agents powered by the Microsoft Copilot harness will be able to browse and interact with websites as a native capability. Using natural-language instructions, agents can navigate web pages, extract information and download files, then use that information and those files with other tools to complete end-to-end workflows, beyond configured knowledge sources and API-based integrations.

Microsoft Learn does not describe this capability for the Microsoft Copilot harness yet. Its feature comparison for the harness lists computer use as supported on the standard harness and "Planned" on the Microsoft Copilot harness. What follows about behaviour is therefore the roadmap's description, with the existing computer use tool (documented for the standard harness) as background only. The roadmap does not say whether browsing on this harness is that same tool, or which browser or machine it runs on.

For the standard harness, Learn describes computer use as a tool that works with websites and desktop apps by selecting buttons, choosing menus and entering text, through a virtual mouse and keyboard on a computer you set up.

The roadmap record shows status In development, with a preview date of November CY2026 and a target date of January CY2027, for Worldwide (Standard Multi-Tenant) and the web platform. Its release phases are General Availability and Preview. These are Microsoft's targets, not commitments.

## Why it matters

This moves agents from reading configured knowledge and calling APIs to acting through web pages, which changes both spend and exposure. Every activity on the Microsoft Copilot harness bills in Copilot Credits, and browsing tasks that take many steps are the kind of workload that can drain an environment's allocation. Web content is also untrusted input to an agent that can click and type.

Microsoft has not stated what happens on arrival, so the default is unknown and no source says existing agents change. Plan on the basis that a maker can try it once preview begins: decide before then which environments host Microsoft Copilot harness agents, how many credits they may draw, and whether the standard-harness computer use switch is expected to apply.

## Risk assessment

**Data exposure**
- The roadmap says agents use extracted information and downloaded files alongside other tools, so data read on a site can feed whatever else the agent can call. The standard-harness guidance gives the example of extracting client data and then emailing it with an email tool.
- On the standard harness, computer use can operate on any website or application by default, and an access control allow-list is optional. Microsoft has not said whether this harness has an equivalent.
- The harness comparison lists DLP and governance controls as supported on the Microsoft Copilot harness. Microsoft has not said which data policy rules cover browsing (see [data policies](/concepts/data-policies/)).

**Security & identity**
- Microsoft's FAQ for the computer use tool warns that computer-use agents might encounter prompt injection attacks, where hidden commands in web pages or screenshots try to influence actions, and advises trusted, isolated environments. Whether the same applies on this harness is not documented.
- On the standard harness the credentials option defaults to the maker's credentials, and a shared agent with that setting lets anyone using it act with the original author's access on the configured machine. How identity works for browsing on this harness is not yet documented.

**Autonomy & actions**
- Standard-harness sample instructions tell the tool to submit forms without asking for permission, and the FAQ says the tool is not intended for financial transactions. An agent following instructions can therefore change data in third-party sites with no approval step unless the maker adds one.
- On the standard harness, human supervision pauses a run for a reviewer, but the FAQ says not to rely on it as a safety fail-safe. Whether it exists for this harness is not documented.

**Change & support**
- Preview is targeted for November CY2026 and general availability for January CY2027, so behaviour and controls may move between the two.
- The FAQ lists known limitations including repeated actions and getting stuck; on a credit-billed harness, a stuck run costs credits. When an environment has no available credits, experiences that need them can stop for makers and end users.

## Cost and licensing

**Licence.** Microsoft's cost-management page for the Microsoft Copilot harness says these agents use consumption-based billing and that this usage isn't included with a user's Microsoft 365 Copilot licence. Microsoft's billing overview says credits are charged for large language model tokens, tools and the harness itself, from the moment a maker starts building.

**Meter.** Copilot Credits, charged to the environment where the agent runs (see [Copilot Credits](/concepts/copilot-credits/)). The credit rate for browsing on the Microsoft Copilot harness is not yet published. For comparison only, the standard-harness computer use tool charges 5 Copilot Credits per step, or 15 with a premium model.

**Caps.** An environment can be given an allocation with drawing from tenant capacity turned off, and an agent can be given a monthly limit with **Stop usage**. Pay-as-you-go budgets and alerts in Azure notify but do not stop consumption, according to the same page. The environment allocation is the second row of the table below.

**Indirect cost.** Admin and maker time to set limits. Any machine or browser cost for this harness is not yet published.

## Scope

The roadmap lists Microsoft Copilot Studio, the web platform and Worldwide (Standard Multi-Tenant). The record does not list US Government clouds; it does not say whether the feature is available there.

The Microsoft Copilot harness has no maker-access setting of its own, and Microsoft points administrators to existing Copilot Studio and environment permissions for who can build. Managing Copilot Studio capacity needs the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

Rollout mechanics, prerequisites and who sees the capability first are not yet published.

## Governance guidance

### Before rollout
- Decide which environments may host Microsoft Copilot harness agents, and allocate Copilot Credits to them with **Draw from the available capacity in my tenant** cleared (second table row). A Power Platform Administrator or Global Administrator does this.
- Record whether the **Computer use** environment setting is on in those environments (first table row). Learn documents it for the standard harness; wait for Microsoft to confirm it governs browsing on this harness.
- Ask your data policy owners which connectors and tools an agent could combine with browsing; see [data policies](/concepts/data-policies/).

### At rollout
- Try the capability in a non-production environment with a small credit allocation and watch the agent's credits on its **Monitor** page.
- Limit who can author in environments with large allocations, using environment permissions, because the harness has no maker-access setting of its own.
- Tell makers to name exact sites in their instructions and to keep sensitive systems out of scope until Microsoft documents access controls for this harness.

### After rollout
- Review month-to-date billed credits per agent under **Licensing** > **Copilot Studio** in the Power Platform admin center, and set an agent monthly limit with **Stop usage** where a workload needs a hard stop.
- Use the **Harness** column in the agent inventory to list agents on the Microsoft Copilot harness.
- Watch Message center and the Learn page on the Microsoft Copilot harness for browsing documentation, then re-check each control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether computer use can be added to agents in an environment (documented for the standard harness)</strong><br><small>Environment</small><br><small class="controls__note">The page is written for the standard harness. Microsoft has not confirmed it governs browsing on the Microsoft Copilot harness.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Computer use <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac env update-settings --environment &lt;envid&gt; --name iscomputeruseinmcsenabled --value false</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/administer-computer-use" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Credits allocated to an environment and whether it can draw on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Needs Power Platform Administrator or Global Administrator. A pay-as-you-go plan linked to the environment can still allow usage.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with entitlementId MCSMessages and an enforcementRules entry of ruleType TenantPool, enabled false</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are controls that exist today, and neither is confirmed by Microsoft to govern browsing on the Microsoft Copilot harness. The first is documented for the standard harness only. The second caps spend for the whole environment, shared with other Copilot Studio agents and features.

Other standard-harness controls on the computer use pages are not rows because their paths or APIs are tied to that harness: a tenant setting, **Hosted browser in computer use** (Manage > Tenant settings), the tool's optional **Access control** allow-list and **Enforce HTTPS** option, and human supervision. Agent monthly limits are set under **Manage Agents** in the same Licensing area as row two.

When a published environment group rule governs **Draw from the available capacity in my tenant**, the environment-level setting becomes read-only and programmatic requests can't override it.

## Open questions

- Is browsing on the Microsoft Copilot harness the existing computer use tool, and does the **Computer use** environment setting or the **Hosted browser in computer use** tenant setting govern it? Watch the harness comparison page and the computer use pages on Learn.
- What does it cost? The Copilot Credit rate for browsing on this harness is not yet published; watch the billing overview and Message center.
- Is it on, off or opt-in when preview starts, and does it reach existing agents? Microsoft has not stated a default.
- Which browser or machine does it run on, and whose identity does it use for signed-in sites? Not yet documented.
- Which data policy rules and site allow-lists apply to browsing, and is there an audit trail for the pages an agent visits? Not yet documented.

<!-- rationale
risk: High. An agent that acts on websites can be steered by hostile page content, and Microsoft's own FAQ for the existing computer use tool warns of prompt injection and unintended actions; controls for this harness are not yet documented.
cost: Variable. Agents on the Microsoft Copilot harness are billed in Copilot Credits for all usage; the rate for browsing on this harness is not yet published (the standard-harness tool charges 5 credits per step).
impact: Medium. Makers on the Microsoft Copilot harness gain the capability, and anyone using their agents is affected; Microsoft has not said it is switched on for anyone by default.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls table / command: The printed PUT instruction with entitlementId MCSMessages and a TenantPool enforcementRules entry is a complete operation to allocate environment credits and disable tenant-pool draw. | Found: scope = @{ environmentId = $environmentId } ... allocatedEntitlements = @( ... entitlementId = "MCSMessages" ... allocation = @{ quantity = 5000 } ... enforcementRules = @( ... @{ ruleType = "TenantPool"; enabled = $false } | Fix: Replace controls[1].api.call and the rendered call with: PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with Authorization: Bearer <access-token>, Content-Type: application/json, and body {"scope":{"environmentId":"<environment-id>"},"allocatedEntitlements":[{"entitlementId":"MCSMessages","allocation":{"quantity":<credits>},"enforcementRules":[{"ruleType":"TenantPool","enabled":false}]}]}. The cited tutorial supplies the method, base URL, version and body; its use of variables explains the pre-check's literal-URL miss, but the omitted scope and allocation remain a real defect. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, blocker] Governance controls: paragraph beginning Both rows / applicability: Neither table row is confirmed by Microsoft to govern browsing on the Microsoft Copilot harness, including the environment cost-control row. | Found: The capacity and consumption controls in the Power Platform admin center apply across Copilot Studio. They aren't exclusive to the Microsoft Copilot harness. | Fix: Replace the paragraph with: 'Both rows are controls that exist today. Microsoft has not confirmed that the first, documented for the standard harness, governs browsing on the Microsoft Copilot harness. The second governs prepaid capacity for the whole environment across Copilot Studio, including Microsoft Copilot harness agents; a linked pay-as-you-go plan can still allow usage.' In the summary and risk rationale, narrow 'controls for this harness are not yet documented' to 'browsing-specific access and identity controls are not yet documented', so the gap does not obscure documented platform-wide cost controls. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Caps; Governance guidance: After rollout / cost: An agent can be given a monthly Copilot Credit limit with Stop usage. | Found: Enter the monthly Copilot Credit limit. ... Turn on **Stop usage** if the agent should be turned off when it reaches the limit. | Fix: Qualify the monthly-limit instruction with 'An agent must consume some credits before you can set limits', and cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/faqs-copilot-harness#how-can-i-control-how-much-an-agent-powered-by-the-microsoft-copilot-harness-spends. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
- [contradicted, minor] Governance guidance; Governance controls table / consistency: All controls that the governance checklist tells readers to configure or inspect are represented in the controls table. | Found: Checklist: 'Limit who can author ... using environment permissions'; 'set an agent monthly limit with Stop usage'; 'Use the Harness column'. Table: Computer use environment setting and environment credit allocation only. | Fix: The checklist steps for authoring permissions, agent monthly limits and Harness-column inventory inspection have no corresponding controls-table rows. This finding identifies the mismatch only; it does not request additional rows or unverified control details.
- [supported, minor] Governance guidance: After rollout; Cost and licensing: Caps / cost: An agent monthly limit with Stop usage provides a workload stopping point. | Found: To create a workload-level stopping point, also configure an agent limit with **Stop usage**. | Fix: Qualify the 'hard stop' guidance with: 'Limits are not applied instantly, so allow a margin in limits and notification thresholds. An agent monthly limit does not stop agent flows it calls; those are checked separately against environment capacity.' Cite https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#manage-monthly-consumption-limits-for-copilot-studio-agents, which explicitly gives both qualifications. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
-->
