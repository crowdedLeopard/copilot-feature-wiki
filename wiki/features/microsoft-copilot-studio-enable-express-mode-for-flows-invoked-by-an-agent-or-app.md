---
title: "Copilot Studio: express mode speeds up flows called by an agent or app"
slug: "microsoft-copilot-studio-enable-express-mode-for-flows-invoked-by-an-agent-or-app"
roadmapId: 566999
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Makers can turn on express mode per agent flow so flows called by an agent or app finish inside the two-minute window. Learn documents it as preview, with limits; no tenant switch is documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Express mode is available only for flows under the Copilot Studio plan, with no added cost. Actions are still billed under Copilot Studio metering; the billing reference exempts test runs and qualifying agent-triggered runs for authenticated Microsoft 365 Copilot licensed users, not autonomous-agent runs. No separate licence is documented."
audiences: ["maker","power-platform-admin","service-owner"]
tags: ["agent-flows","copilot-studio","power-automate","performance","automation"]
sources:
  - title: "Speed up agent flow execution with express mode (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-express-mode"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management#overage-enforcement"
    kind: "learn"
  - title: "Power Automate environments move to new architecture"
    url: "https://learn.microsoft.com/power-automate/environment-architecture"
    kind: "learn"
  - title: "Create an agent flow as a tool"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create"
    kind: "learn"
  - title: "Manage Power Automate flows"
    url: "https://learn.microsoft.com/power-platform/admin/manage-power-automate"
    kind: "learn"
  - title: "Disable-AdminFlow"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/disable-adminflow"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 566999"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566999"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Whether express mode is turned on for an individual agent flow"
    scope: "other"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Flows > flow > Overview > Details > Edit > Express mode"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-express-mode"
    api: null
    note: "Maker-side, preview. Also available on the trigger card in the flow designer. Learn documents no API for the toggle at the time of writing."
  - governs: "Tenant or environment switch for express mode"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no administrator setting for express mode at the time of writing (November 2026)."
  - governs: "Whether a flow runs at all (existing control, not specific to express mode)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Resources > Flows > flow > Disable"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-power-automate"
    api:
      kind: "powershell"
      call: "Disable-AdminFlow -EnvironmentName <environment name> -FlowName <flow name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/disable-adminflow"
    note: "Environment Admin, Global admin or Power Platform admin. Stops the whole flow; it does not turn off express mode alone."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-07-10T21:58:35"
changes:
  - date: "2026-11-18"
    note: "New briefing: express mode for agent flows, documented on Learn as preview with per-flow limits, no added cost and no administrator switch."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: cost rating changed to variable (actions stay metered), unsupported 'actions unchanged' claim replaced, billing exemptions and the 100-action safe limit qualified."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ad94704fa0f3f029de6826520d745a9a"
---

## What's changing

Express mode is a per-flow setting in Copilot Studio that Microsoft says helps agent flows run faster. It applies to flows that an agent or an app calls, using the **When an agent calls a flow** or **When an app calls a flow** trigger. The roadmap item describes it as making agents and apps receive timely, reliable responses by speeding up flow run times and reducing timeout failures.

Microsoft Learn documents the feature in [Speed up agent flow execution with express mode (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-express-mode). Without express mode, an agent flow started by an agent or app fails if it takes longer than two minutes to respond to the caller. The page says express mode increases the likelihood that flows complete inside that window. It is not a way past it: with express mode on, flows must still complete in two minutes.

A maker turns it on from the flow's details panel or from the trigger card in the designer. The flow needs a Response action (**Respond to agent** or **Respond to app**) and a Copilot Studio plan, and its Power Automate environment must be on the new infrastructure. Microsoft says it is upgrading environments and that you do not need to act to upgrade yours.

The roadmap item is "In development" with a preview date of November CY2025 and a target of November CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web. The Learn page is marked prerelease documentation, so its limits and behaviour may change. Microsoft's separate page on creating an agent flow as a tool cites a 100-second action limit for agents and links to the express mode page; the express mode page itself says two minutes.

## Why it matters

Express mode is a maker-side performance option, and it needs attention mostly because it changes what happens at the edges. Flows that move a lot of data, use Delay or webhook actions, or run long loops can fail under express mode where they ran before, and the failure reaches the agent or app that called them.

Microsoft has not stated a default for the toggle on arrival, and the Learn page describes turning it on per flow. This briefing therefore treats it as something makers choose, and no source says existing flows change behaviour by themselves. Service owners should decide who may use it, confirm that the flows they depend on suit its limits, and check the billing position with whoever owns Copilot Studio capacity.

## Risk assessment

**Data exposure**
- Microsoft's page describes no new data access. Express mode caps what a flow can carry: 64 KB for data passed in an individual action (connector response) and 1,024 characters in variable content. Flows that return large connector responses can fail at runtime, so keep data-heavy flows out of it.

**Security & identity**
- The page does not describe any change to the connections or identity a flow runs under. Confirm that with the maker's test results before relying on it for flows that act on sensitive systems.

**Autonomy & actions**
- Express mode can help an agent flow respond faster and avoid a timeout failure.
- **Delay** and webhook actions are not supported with express mode on, and errors appear when the flow is saved.

**Change & support**
- Documented limits give support teams specific causes to look for: no more than 100 actions in a flow run (loops count one per iteration), 100 items in an **Apply to each** loop, 100 iterations in a **Do until** loop, and the 64 KB and 1,024-character limits above. Microsoft calls 100 actions a safe limit; more may work depending on flow size and data processing.
- Troubleshooting is harder: automatic testing does not work in the flow designer, loop iterations may not appear in **Run details** when a connector response exceeds the memory limit, and live activity does not display during a run.
- The toggle appears only in environments on the new architecture. A maker in an environment that has not been upgraded will not see it.

## Cost and licensing

Express mode is available only for flows under the Copilot Studio plan, and the Learn page says there is no added cost to run flows in this mode. The page adds that you are still billed for the number of actions used under Copilot Studio metering. Its prerequisites list a Copilot Studio plan associated with the flow and no separate licence.

The meter is therefore the one Copilot Studio flows already use, counted per action. The billing reference exempts test runs and qualifying agent-triggered runs for authenticated Microsoft 365 Copilot licensed users; autonomous-agent runs are not exempt. AI tools inside flows are metered separately. Microsoft has not published a rate for express mode; the page states none. No cap or budget control specific to express mode is documented at the time of writing (November 2026). Indirect costs are maker and admin time to test flows, and the support time spent on flows that exceed the limits.

## Scope

**Who and what:** flows with the **When an agent calls a flow** or **When an app calls a flow** trigger and a Response action, with a Copilot Studio plan associated. Makers turn it on; the Learn page names no administrator role for it.

**Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform, and both General Availability and Preview as release phases. Other clouds are not listed on the record.

**Rollout:** the Learn page says express mode is currently available only in upgraded environments on the new architecture (SelfHost Multitenant) and that Microsoft is upgrading environments. Microsoft's architecture page says some flows might block an environment upgrade, and describes how to check an environment's `environmentFlowHostingType` value. If the toggle does not appear on the trigger card, the page says the environment does not support the feature yet.

## Governance guidance

### Before rollout
- Check which environments already show the express mode toggle on the trigger card of a flow with the **When an agent calls a flow** trigger; Microsoft's availability test is to look for it there.
- Ask makers which flows blocked an environment upgrade; the architecture page recommends updating flows that might block it.
- Agree with the owner of Copilot Studio capacity that express mode adds no charge but actions still count under Copilot Studio metering.
- Treat the feature as preview until Microsoft changes the Learn page and the roadmap status.

### At rollout
- Tell makers to test each flow in a development environment before turning express mode on, because a failed test points to variable size or memory limits that production would hit too.
- Tell makers to keep Delay and webhook actions, flows without a Response action and data-heavy flows off express mode.
- Point makers to the documented limits: the recommended safe limit of 100 actions per run, 100 items or iterations per loop, 1,024-character variables and 64 KB per connector response.

### After rollout
- Review failed runs of flows with express mode on; the runtime error message names the limit that was hit, and the page advises running such flows with express mode off.
- Revisit the Learn page when the roadmap status changes from In development, since limits may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether express mode is turned on for an individual agent flow</strong><br><small class="controls__note">Maker-side, preview. Also available on the trigger card in the flow designer. Learn documents no API for the toggle at the time of writing.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Flows › flow › Overview › Details › Edit › Express mode <a href="https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-express-mode" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch for express mode</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no administrator setting for express mode at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a flow runs at all (existing control, not specific to express mode)</strong><br><small>Environment</small><br><small class="controls__note">Environment Admin, Global admin or Power Platform admin. Stops the whole flow; it does not turn off express mode alone.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Resources › Flows › flow › Disable <a href="https://learn.microsoft.com/power-platform/admin/manage-power-automate" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Disable-AdminFlow -EnvironmentName &lt;environment name&gt; -FlowName &lt;flow name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/disable-adminflow" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Express mode is controlled by the maker, flow by flow. Microsoft Learn documents no tenant-wide or environment-level switch for it and no API for the toggle at the time of writing (November 2026).

The nearest existing administrator control stops a whole flow, so it is a blunt instrument: Environment Admin, Global admin or Power Platform admin can disable or enable a flow, and that affects the flow's other behaviour as well as express mode. It is not a control over express mode itself.

## Open questions

- Is express mode off by default on each flow, and will it become on by default at general availability? Microsoft has not stated a default; watch the Learn page and Message center.
- Will Microsoft add an environment or tenant control, or an API, for express mode? None is documented at the time of writing (November 2026).
- Which time limit applies to agents on the standard harness: the two minutes on the express mode page, or the 100-second action limit on the page about creating an agent flow as a tool?
- Will the limits (100 actions, 64 KB, 1,024 characters) change when the feature reaches general availability, given the roadmap target of November CY2026?

<!-- rationale
risk: Low. Makers choose it flow by flow, and Microsoft's page describes no new data access; the exposure is flows failing at the documented express mode limits.
cost: Variable. Express mode adds no surcharge, but flow actions remain subject to Copilot Studio metering and its documented exemptions.
impact: Low. Makers who build agent flows notice it; Microsoft documents it as a per-flow toggle, and flow response failures can affect the calling agent or app.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Risk assessment: Autonomy & actions / behaviour: Turning on express mode helps called flows finish inside the two-minute window. | Found: This feature increases the likelihood that agent flows can complete within the two-minute window and provide a response in time. | Fix: In the summary, replace 'so flows called by an agent or app finish inside the two-minute window' with 'to increase the likelihood that flows called by an agent or app finish inside the two-minute window'. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-express-mode
-->
