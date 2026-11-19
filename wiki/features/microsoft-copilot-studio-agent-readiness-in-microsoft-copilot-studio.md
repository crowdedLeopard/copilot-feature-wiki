---
title: "Copilot Studio: Review panel shows agent readiness and policy blocks while building"
slug: "microsoft-copilot-studio-agent-readiness-in-microsoft-copilot-studio"
roadmapId: 568762
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio makers get an always-visible Review indicator that lists issues blocking or putting at risk a publish, and tools blocked by data policy appear disabled. Admins can add contact and guidance messages for makers."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "The Microsoft Copilot harness uses usage-based billing measured in Copilot Credits. An individually assigned Copilot Studio user license is not required to access this harness; creating agents depends on applicable Copilot Studio and environment permissions. No separate Review-panel licence or meter is documented."
audiences: ["power-platform-admin","maker","change-adoption","security"]
tags: ["copilot-studio","copilot-harness","agents","data-policies","maker-guidelines","publish-controls","governance","managed-environments"]
sources:
  - title: "Microsoft 365 Roadmap 568762"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568762"
    kind: "roadmap"
  - title: "Review agent readiness and status in Microsoft Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-status"
    kind: "learn"
  - title: "Review agent readiness and issue status in Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status"
    kind: "learn"
  - title: "About agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Which tools, connectors, models and skills makers can use (shown as disabled in Review) (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Set-DlpPolicy (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Maker guidelines message shown in the Review pane (preview) (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    kind: "learn"
videos: []
related: ["power-platform-maker-guidelines-copilot-studio","data-policies","copilot-credits","managed-environments"]
controls:
  - governs: "Which tools, connectors, models and skills makers can use (shown as disabled in Review)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit Policy > Next > Next > connector > ⋮ > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Set-DlpPolicy -PolicyName <policy name> -UpdatedPolicy <DLPPolicyDefinition object>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-dlppolicy?view=pa-ps-latest"
    note: "General control that Review reports on. UpdatedPolicy supplies the updated DLPPolicyDefinition object."
  - governs: "Contact email and Learn more link shown with data policy errors"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-PowerAppDlpErrorSettings -TenantId \"<tenant ID>\" -ErrorSettings $ErrorSettingsObj"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    note: "Use Set-PowerAppDlpErrorSettings to update. The page warns the settings apply to all Power Platform apps in the tenant."
  - governs: "Maker guidelines message shown in the Review pane (preview)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Maker guidelines > Environments > environment > Edit setting"
      docs: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    api: null
    note: "Preview. Managed environments only. Environment groups use the Environment groups tab and Edit rule."
  - governs: "Custom guidance message for blocked or disabled capabilities (preview)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Copilot Studio > Maker guidance > environment > Edit setting"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status"
    api: null
    note: "Documented as preview on the standard harness Agent status page. Plain text up to 400 characters."
  - governs: "Switch to hide or turn off the Review panel"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-18"
    note: "New briefing on the Copilot Studio Review panel, its policy-block display and the admin guidance settings."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 69 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: removed an unsupported before-and-after claim, narrowed the sign-in issue statement, and fixed the Maker guidance admin path."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: licensing model now consumption (Copilot harness usage-based billing, no individual Copilot Studio licence required), and the data policy control now names Set-DlpPolicy instead of the read-only Get-DlpPolicy."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: removed the statement that Microsoft Learn names no role for the guidance settings, and the matching role wording in Open questions."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9ee22629b1384b947f4b31a73d59ce01"
---

## What's changing

Copilot Studio now shows makers a **Review** entry point while they build an agent. Microsoft Learn describes it for agents powered by the Microsoft Copilot harness as a single place to see issues that affect the agent's readiness, governance and security, including problems caused by data policies and Advanced Connector Policies. The Review icon sits in the top menu bar, is always visible while the agent is built, and shows the number of outstanding issues.

Issues are grouped as **Blocking** (they prevent publishing) or **Warning** (they do not block publishing but might affect behaviour or compliance). Learn gives examples: a data policy blocks a tool, connector or knowledge source the agent uses; sign-in is not required, so anyone with the link can use the agent; no channel is configured; the agent uses an experimental or preview model. Each issue carries a call to action such as **Update settings** or **Contact admin**.

When a data policy or Advanced Connector Policy blocks a tool, connector, AI model or skill, Learn says the item appears disabled wherever a maker would select it, and a hover on the cross icon explains why. A second Learn page, for agents on the standard harness, describes an **Agent status** summary on the agent's Overview page with a **Review** button. That page is marked as prerelease documentation, adds an **Info** severity and a draft/published state per issue, and says policy-blocked channel cards appear grayed out. Learn says agents on the standard harness remain fully supported alongside Microsoft Copilot harness agents, and the roadmap item does not say which harness it covers.

The roadmap item lists this as Launched, General Availability, with a target of September CY2026, for Worldwide (Standard Multi-Tenant) on Web.

## Why it matters

Review turns your data policy decisions into something makers see at build time. A blocked connector appears disabled with a reason before a maker configures it, and the issue list names a call to action such as **Contact admin**. Expect makers to bring those blocks to you, so decide now what they will be told.

Review is a reporting view, not a control. Learn says the Review panel does not replace admin-level governance or compliance reporting, and warnings do not stop publishing. The roadmap and Learn describe the icon as always visible while building, and no admin switch for it is documented, so the default is on; makers will see Review whether or not you prepare guidance.

## Risk assessment

**Data exposure**

- No new data access is documented. Review reports on the agent's configuration and on organisational policy, so the exposure to watch is makers seeing why a policy blocked an item; keep any custom message free of sensitive detail.

**Security & identity**

- Review can surface an issue when sign-in is not required, so anyone with the link can use the agent. Warnings do not stop publishing; do not treat the Review panel as enforcement.

**Autonomy & actions**

- No autonomous behaviour is described. Each issue has a call to action (**Update settings** or **Contact admin**) that takes the maker to where it can be resolved.

**Change & support**

- Blocked items appear disabled, so expect makers to ask about policy blocks while building. Learn says a default message appears unless your organisation has configured contact guidance.
- Two Learn pages describe the experience for two harnesses, one marked prerelease, and the preview settings may change; confirm what makers in your tenant actually see before writing help-desk guidance.

## Cost and licensing

The Learn page for Review lists no licence and describes no meter for the panel itself, and Microsoft has not published a separate price at the time of writing (November 2026). Its note says the harness used to build the agent uses usage-based billing and that using, building, testing and evaluating agents might consume Copilot Credits (see /concepts/copilot-credits/).

The maker guidelines setting is documented as available only for managed environments (see /concepts/managed-environments/ for the licensing condition on that tier). The indirect cost is admin time to configure messages and answer maker questions.

## Scope

Review is described for agents powered by the Microsoft Copilot harness, shown to the maker in the Copilot Studio build experience. The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; it lists no other clouds, which is a record fact and not a statement that other clouds are excluded.

The Agent status summary on the Overview page is documented for standard harness agents and marked prerelease. The guidance settings are configured in the Power Platform admin center per environment or environment group.

## Governance guidance

### Before rollout

- List the data policies that apply to the environments where makers build agents (Power Platform admin center > Security > Data and privacy > Data policy), because policy blocks are what Review surfaces.
- Decide whether data policy errors should carry a contact email and a Learn more link, and note that the documented cmdlet applies to all Power Platform apps in the tenant.
- Check which environments are managed, since the maker guidelines setting is documented as available only for managed environments.

### At rollout

- Tell makers that Blocking issues stop publishing and Warnings do not, and review any sign-in issue before publishing.
- Set a maker guidelines message with **Maker selects Review** for the environments or environment groups you want, remembering that it is a preview setting.
- Configure the custom guidance message for blocked items under **Maker guidance** if you want it, and test which message a maker sees.

### After rollout

- Review help-desk requests that cite Review or disabled items, and update the 400-character messages to answer the common ones.
- Re-check Learn for the preview settings and for how the two guidance settings relate.
- Re-run your data policy inventory after any policy change, because the standard harness page says a previously allowed resource can later be blocked.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which tools, connectors, models and skills makers can use (shown as disabled in Review)</strong><br><small>Environment</small><br><small class="controls__note">General control that Review reports on. UpdatedPolicy supplies the updated DLPPolicyDefinition object.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit Policy › Next › Next › connector › ⋮ › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpPolicy -PolicyName &lt;policy name&gt; -UpdatedPolicy &lt;DLPPolicyDefinition object&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Contact email and Learn more link shown with data policy errors</strong><br><small>Tenant</small><br><small class="controls__note">Use Set-PowerAppDlpErrorSettings to update. The page warns the settings apply to all Power Platform apps in the tenant.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpErrorSettings -TenantId &quot;&lt;tenant ID&gt;&quot; -ErrorSettings $ErrorSettingsObj</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Maker guidelines message shown in the Review pane (preview)</strong><br><small>Environment</small><br><small class="controls__note">Preview. Managed environments only. Environment groups use the Environment groups tab and Edit rule.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Maker guidelines › Environments › environment › Edit setting <a href="https://learn.microsoft.com/power-platform/admin/maker-guidelines" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Custom guidance message for blocked or disabled capabilities (preview)</strong><br><small>Environment</small><br><small class="controls__note">Documented as preview on the standard harness Agent status page. Plain text up to 400 characters.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Copilot Studio › Maker guidance › environment › Edit setting <a href="https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch to hide or turn off the Review panel</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Data policies are the control that blocks items; Review only reports them, and Learn says it does not replace admin-level governance or compliance reporting. Microsoft Learn documents no setting that hides or turns off the Review panel at the time of writing (November 2026).

Learn documents two guidance settings in the Power Platform admin center: **Maker guidelines** (preview, managed environments only) and **Maker guidance** (documented as preview, on the standard harness Agent status page). It does not say how they relate, so confirm which message appears for your agents. Custom guidance messages are not localised, and an environment group message overrides the environment-level message. Microsoft Learn documents no API for the two guidance settings at the time of writing.

## Open questions

- Does the Review panel on Microsoft Copilot harness agents and the Agent status summary on standard harness agents come from the same service, and which does the roadmap item cover? Watch the Learn pages and Message center.
- How do Maker guidelines and Maker guidance interact when both are configured for one environment? Watch the maker guidelines Learn page.
- Will Microsoft publish a licence or meter specific to Review, or a setting to hide it? Watch the Copilot Studio billing pages.
- Are the guidance settings moving from preview to general availability, and with what API support? Watch the Learn pages and What's new.

<!-- rationale
risk: Low. Review reports issues to makers; no new data access is documented. Warnings do not stop publishing, so existing data policies remain the enforcement.
cost: Low. Microsoft Learn names no licence or meter for Review itself; the cost is admin and maker time, and the harness page notes that building and testing agents might consume Copilot Credits.
impact: Medium. Makers building agents on the Microsoft Copilot harness see the Review icon and disabled items, and their questions about policy blocks will reach admins.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: managed-environments parenthetical / licensing: Managed environments have a licensing condition. | Found: When you activate managed environments in an environment, all active usage requires one of these standalone licenses or pay-as-you-go meters. | Fix: Add https://learn.microsoft.com/power-platform/admin/managed-environment-licensing to sources as 'Licensing requirements for managed environments' to support the existing reference to that tier's licensing condition. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-licensing
-->
