---
title: "Power Automate: self-healing repairs desktop flow selector failures with AI"
slug: "power-automate-self-healing"
roadmapId: 579906
topic: "power-platform"
products: ["Power Automate"]
summary: "Power Automate for desktop plans an AI fallback that finds a replacement UI selector when one breaks. Makers opt in per action; administrators control the AI model settings it depends on. Optional, so review."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2027"
previewDate: "April CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The preview page says self-healing is available for organization premium accounts at no extra cost and that usage might be subject to service limits or changes. Licensing for general availability is not yet published."
audiences: ["power-platform-admin","m365-admin","maker","security"]
tags: ["power-automate","desktop-flows","ui-automation","selectors","ai","resilience","copilot-in-power-automate","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 579906"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579906"
    kind: "roadmap"
  - title: "Self-healing (preview)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    kind: "learn"
  - title: "Allow external language models for generative responses"
    url: "https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Governance in Power Automate for desktop"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/governance"
    kind: "learn"
  - title: "Set-PowerPlatformGenerativeAiSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings?view=pa-ps-latest"
    kind: "learn"
  - title: "Handle errors in desktop flows"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/errors#configure-error-handling-functionality"
    kind: "learn"
  - title: "Power Automate for desktop - Build 2608"
    url: "https://learn.microsoft.com/power-platform/released-versions/power-automate-desktop/2608"
    kind: "learn"
  - title: "Copilot in Power Automate"
    url: "https://learn.microsoft.com/power-automate/copilot-overview"
    kind: "learn"
videos: []
related: ["power-automate-ai-assisted-ui-automation-repair","managed-environments"]
controls:
  - governs: "Whether the Anthropic provider is enabled as a subprocessor for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > AI providers operating as Microsoft subprocessors > Anthropic"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    api: null
    note: "A Microsoft 365 AI administrator enables the provider. The provider's own guidance also includes View all: Copilot > Settings > View all > AI providers operating as Microsoft subprocessors."
  - governs: "Whether Anthropic models are allowed in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Platform > External models > Anthropic"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    api: null
    note: "A Power Platform system admin allows the provider's models. The external models guidance also gives the environment path Manage > Environments > environment > Settings > Product > Features, where the setting is turned On or Off."
  - governs: "Whether Anthropic models are allowed across an environment group"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environment groups > environment group > Add rules > Power Platform Anthropic"
      docs: "https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses"
    api: null
    note: "Environments in an environment group must be managed environments. Select Apply changes to publish the rules."
  - governs: "Whether the environment allows data to move across regions for generative AI features"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Generative AI features > Edit > Move data across regions"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    api:
      kind: "powershell"
      call: "Set-PowerPlatformGenerativeAiSettings -EnvironmentName <environment-id> -CrossGeoDataMovement $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings?view=pa-ps-latest"
    note: "Learn says the checkbox isn't displayed or needed for US cloud regions."
  - governs: "Whether Copilot in Power Automate is on"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Automate > Copilot in Power Automate > On"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    api: null
    note: "A general Copilot in Power Automate setting that Learn lists as required for self-healing; it is not specific to self-healing."
  - governs: "Whether self-healing is turned on for an individual action"
    scope: "maker"
    ui:
      surface: "Power Automate for desktop (maker)"
      path: "action > Error handling > Self-healing (Preview)"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    api: null
    note: "Needs Power Automate for desktop 2.66 or higher and a supported action."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-21"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: self-healing for desktop flows is in preview on Learn; the roadmap plans a general availability log-only option that Learn does not yet describe."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the EU Data Boundary statement to the documented exclusion for Claude models, and added the supported-error screen detail and the alternative admin paths."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 74 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 83 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected: added the documented PowerShell cmdlet for the cross-region data movement setting, reworded the data-capture sentence, and added the Anthropic step to two admin paths and two documentation notes."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 79 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 70
  unconfirmed: 3
  contradicted: 6
  attempts: 1
  hash: "d019e712ce0f9922e330928250a4a175"
---

## What's changing

Self-healing is an AI fallback for desktop flows in Power Automate for desktop. When a UI or browser automation action cannot find its element because the selector no longer matches, the feature uses AI to identify the intended element and generate an alternative selector. The roadmap item describes it as an agentic feature that improves the resilience of desktop flows.

The roadmap item says the preview phase has an action-level opt-in for automatically trying to recover from a selector error. General availability is planned to add a flow-level opt-in that only logs the alternative, working selector when an error occurs, without applying the fix at runtime. Microsoft Learn documents only the preview behaviour at the time of writing (November 2026); it does not describe the flow-level log-only option.

The Learn page, marked as prerelease documentation, says that when a supported action fails with an *Element not found* error, error handling runs in this order: retry policy, self-healing, 'Set variable / Run subflow' rules, then Continue flow run / Throw error. If the repair succeeds the flow continues; if it fails, normal error handling resumes. Learn says self-healing is runtime-only, applies to console and cloud (attended and unattended) runs and has no effect during designer runs. It covers specific actions that interact with a single UI element, and *Element not found* and *Window not found* errors. *Element not found* errors are captured on primary and secondary screens; *Window not found* errors are captured only when the window is found on the main screen. The general error-handling article still lists only Element not found errors, whereas the dedicated self-healing page lists both.

The roadmap record lists the item as In development, with a preview date of April CY2026 and a general availability target of March CY2027 for the Worldwide (Standard Multi-Tenant) cloud on the Desktop platform. The Learn page documents a preview that needs Power Automate for desktop version 2.66 or higher, and says self-healing isn't currently available in government clouds (GCC, GCC High, DoD) or sovereign clouds.

## Why it matters

Self-healing captures information from the desktop when it is invoked to fix a broken selector, so it is a data-handling decision as well as a reliability feature. Learn says that when it is invoked, Power Automate for desktop captures a screenshot of the missing UI element, the parent window title and the full desktop image, and that two large language models, GPT-4.1 mini and Claude Sonnet 4.5, are currently used in combination. Flows that run on desktops showing sensitive applications are the ones to look at first.

Nothing in the sources says existing flows change on arrival: Learn describes self-healing as turned on per action by the maker, once the admin settings are in place. Expect makers to ask for it when selectors break, and plan where support staff will look for repair details, because the Power Automate portal doesn't currently surface self-healing details in action-level logs.

## Risk assessment

**Data exposure**

- Self-healing captures a screenshot of the missing element, the parent window title and the full desktop image, per the Learn page. Treat any machine that runs flows against sensitive applications as in scope for what a full desktop image can show.
- Self-healing requires the Anthropic provider to be enabled as a subprocessor in the Microsoft 365 admin center and in Power Platform, and requires **Move data across regions** where that checkbox applies. Microsoft excludes Claude models deployed in Power Platform from the EU Data Boundary and, where applicable, in-country processing commitments; self-healing uses Claude Sonnet 4.5.

**Security & identity**

- Learn says Microsoft enables Anthropic models by default for most customers in commercial cloud (excluding EU/EFTA and UK), so the provider prerequisite may already be met in your tenant. Check it rather than assuming it is off.

**Autonomy & actions**

- A repaired selector is applied during the run, and the flow continues. Learn says self-healing might occasionally identify an unintended UI element, so an automated click or selection could land on the wrong control in a live application. Learn says the repaired selector is recorded in the action logs as `repairWithAIInfo`; review it after runs that used it.
- The planned general availability log-only mode would record the alternative selector without applying it. It is not documented yet.

**Change & support**

- Learn says the Power Automate portal doesn't currently surface self-healing details in action-level logs; the summary is on the desktop flow run page, with details from up to three successful attempts. Plan for support staff to look in the desktop run page or local logs.
- The feature is in preview, and the page says usage might be subject to service limits or changes.

## Cost and licensing

The Learn page for the preview says self-healing is currently available for organization premium accounts at no extra cost, and that usage might be subject to service limits or changes. That is a preview statement and is not a commitment for general availability.

Microsoft Learn documents no meter, credit rate or cap for self-healing at the time of writing (November 2026), and licensing for general availability is not yet published. Indirect costs are admin time to set the model prerequisites and maker time to review repaired selectors.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Desktop platform. Learn says self-healing isn't currently available in government clouds (GCC, GCC High, DoD) or sovereign clouds, and that it is currently available for organization premium accounts.

Prerequisites on the Learn page: Power Automate for desktop version 2.66 or higher; the Anthropic provider enabled as a subprocessor in the Microsoft 365 admin center; Anthropic enabled in the Power Platform admin center at environment or environment group level; **Move data across regions** selected on the environment's **Generative AI features** card where it is shown; and **Copilot in Power Automate** turned on. The Microsoft 365 admin centre step is done by a Microsoft 365 AI administrator and the environment step by a Power Platform system admin, per the external models page.

Self-healing applies to supported UI and browser automation actions that interact with a single UI element. It doesn't apply to window or screen handling actions or actions that interact with multiple elements, such as 'Drag and drop UI element in window'. The desktop build 2608 release notes instead say self-healing is now also supported for window manipulation actions in UI automation.

## Governance guidance

### Before rollout

- Decide which environments may use self-healing, then check whether the Anthropic provider is already enabled in the Microsoft 365 admin center, since Learn says Microsoft enables it by default for most commercial customers.
- Review which desktops run flows against sensitive applications, because the full desktop image is captured when self-healing is invoked.
- Review the documented EU Data Boundary exclusion for Claude models before enabling self-healing in regulated environments (see [Managed Environments](/concepts/managed-environments/) for the tier environment group rules require).

### At rollout

- Enable **Anthropic** under External models for pilot environments, or add the **Power Platform Anthropic** rule to an environment group, and keep other environments off.
- Select **Move data across regions** on the **Generative AI features** card for pilot environments outside US cloud regions, and turn on **Copilot in Power Automate**.
- Ask pilot makers to turn on **Self-healing (Preview)** only on supported actions, from Power Automate for desktop 2.66 or higher.

### After rollout

- Read the self-healing summary on the desktop flow run page and the `repairWithAIInfo` property in local action logs to confirm repairs picked the intended element.
- Ask makers to update the flow's selectors once a repair has proved correct, so the action stops depending on a runtime repair.
- Re-check the Learn page when the roadmap's general availability target of March CY2027 approaches, for the log-only option and licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Anthropic provider is enabled as a subprocessor for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">A Microsoft 365 AI administrator enables the provider. The provider's own guidance also includes View all: Copilot &gt; Settings &gt; View all &gt; AI providers operating as Microsoft subprocessors.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › AI providers operating as Microsoft subprocessors › Anthropic <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic models are allowed in an environment</strong><br><small>Environment</small><br><small class="controls__note">A Power Platform system admin allows the provider's models. The external models guidance also gives the environment path Manage &gt; Environments &gt; environment &gt; Settings &gt; Product &gt; Features, where the setting is turned On or Off.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Platform › External models › Anthropic <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic models are allowed across an environment group</strong><br><small>Environment group</small><br><small class="controls__note">Environments in an environment group must be managed environments. Select Apply changes to publish the rules.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environment groups › environment group › Add rules › Power Platform Anthropic <a href="https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the environment allows data to move across regions for generative AI features</strong><br><small>Environment</small><br><small class="controls__note">Learn says the checkbox isn't displayed or needed for US cloud regions.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Generative AI features › Edit › Move data across regions <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PowerPlatformGenerativeAiSettings -EnvironmentName &lt;environment-id&gt; -CrossGeoDataMovement $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot in Power Automate is on</strong><br><small>Tenant</small><br><small class="controls__note">A general Copilot in Power Automate setting that Learn lists as required for self-healing; it is not specific to self-healing.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Automate › Copilot in Power Automate › On <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether self-healing is turned on for an individual action</strong><br><small>Maker</small><br><small class="controls__note">Needs Power Automate for desktop 2.66 or higher and a supported action.</small></td><td data-label="Admin UI"><strong>Power Automate for desktop (maker)</strong><br>action › Error handling › Self-healing (Preview) <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Learn page lists the four admin settings and the maker toggle as requirements, and names no setting specific to self-healing. The Anthropic and **Copilot in Power Automate** settings are not specific to self-healing, so confirm what else relies on them before changing them.

A Microsoft 365 AI administrator enables the provider; a Power Platform system admin allows it in an environment or environment group. Environments in an environment group must be managed environments. Microsoft Learn documents no API for these settings that covers Anthropic or the **Copilot in Power Automate** switch at the time of writing (November 2026).

For logs, Learn points to a registry setting (`DisableRunFilesCleanup` under `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Power Automate Desktop\Global`, value 1) that keeps `Actions.log` on the machine that hosted the run, which includes the `repairWithAIInfo` property.

## Open questions

- What does the general availability flow-level log-only option look like in the designer and the admin centre, and can administrators require it? Watch the Learn page and the roadmap item.
- What licence and meter will apply at general availability, and will the preview's no-extra-cost position continue?
- What happens to the captured screenshots?
- Will Microsoft add a self-healing-specific tenant or environment switch, and an API for the settings it depends on?

<!-- rationale
risk: Medium. When self-healing runs, Learn says it captures a screenshot of the missing element, the parent window title and the full desktop image for AI models, and it might occasionally pick the wrong element.
cost: Low. The preview page says self-healing is available for organization premium accounts at no extra cost, but usage might be subject to service limits or changes; licensing for general availability is not yet published.
impact: Low. Makers choose it action by action in the designer, so the people who notice are desktop flow makers and the administrators who set the AI model prerequisites.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Risk assessment: Data exposure; Governance guidance; rationale: risk / behaviour: Self-healing captures the full desktop image. | Found: including a screenshot of the missing UI element, the title of its parent window, and an image of that window | Fix: Replace every 'full desktop image' or 'full desktop' capture statement with 'an image of the parent window'. Narrow the sensitive-desktop advice to the captured parent-window image, including in the risk rationale. | Source: https://learn.microsoft.com/power-automate/desktop-flows/self-healing
- [contradicted, blocker] Why it matters; Risk assessment: Data exposure / behaviour: Self-healing currently combines GPT-4.1 mini and Claude Sonnet 4.5. | Found: Self-healing is powered by the GPT‑6 Luna model. | Fix: Replace the two-model statement with 'Learn says self-healing is powered by GPT-6 Luna.' Remove 'self-healing uses Claude Sonnet 4.5' and the advice to review Claude's EU Data Boundary exclusion as a self-healing requirement. | Source: https://learn.microsoft.com/power-automate/desktop-flows/self-healing
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The cited self-healing page documents Microsoft 365 admin center > Copilot > Settings > AI providers operating as Microsoft subprocessors > Anthropic. | Found: Go to the Microsoft 365 admin center and select Copilot > Settings > View all. ... Select AI providers operating as Microsoft subprocessors. ... select Anthropic, and Save. | Fix: If retained as a general provider control, set the path to 'Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Anthropic' and docs to https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor. The current self-healing docs URL shows neither this control nor its last steps; do not present it as a self-healing prerequisite. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The cited self-healing page documents Power Platform admin center > Copilot > Settings > Power Platform > External models > Anthropic. | Found: select Manage. ... select Environments, and then select the environment. ... select Settings. ... select Product > Features. ... turn each applicable model provider setting On or Off. | Fix: If retained as a general provider control, replace the path with 'Manage > Environments > environment > Settings > Product > Features > Anthropic' and docs with https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses. The current self-healing docs URL shows neither the control nor its last steps; remove its presentation as a self-healing prerequisite. | Source: https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses
- [unsupported, blocker] Scope; Risk assessment: Data exposure; Governance guidance; Governance controls / applicability: Self-healing requires Anthropic enabled as a Microsoft 365 subprocessor. | Found: Searched: "self-healing" "Anthropic" prerequisites Power Automate. Opened self-healing, connect-to-ai-subprocessor and allow-llm-generative-responses; no current passage makes Anthropic a self-healing prerequisite. | Fix: Remove the Microsoft 365 Anthropic prerequisite and the Before rollout instruction to check or enable it for self-healing. Replace 'four admin settings' with 'two admin settings': Move data across regions where shown and Copilot in Power Automate.
- [unsupported, blocker] Scope; Risk assessment: Data exposure; Governance guidance: At rollout / applicability: Self-healing requires Anthropic enabled at Power Platform environment or environment-group level. | Found: Searched: "self-healing" "Anthropic" prerequisites Power Automate. Read self-healing and allow-llm-generative-responses; the latter describes external models generally, not Anthropic as a current self-healing requirement. | Fix: Remove Anthropic environment and environment-group enablement from the self-healing prerequisites and rollout checklist. Do not describe these general external-model controls as required for self-healing.
- [contradicted, blocker] Why it matters; Risk assessment: Change & support / behaviour: The Power Automate portal does not currently surface self-healing details in action-level logs. | Found: The Power Automate portal surfaces self-healing details in the action-level logs of the flow runs where self-healing was invoked, mentioning the selector that was used per case in each successful self-healing attempt. | Fix: Replace both negative portal-log statements with 'The Power Automate portal surfaces self-healing details in action-level logs, including the selector used in each successful attempt.' Remove the advice that support staff must use desktop summaries or local logs because the portal lacks these details. | Source: https://learn.microsoft.com/power-automate/desktop-flows/self-healing
- [unsupported, major] Risk assessment: Autonomy & actions; Governance guidance: After rollout; Governance controls / behaviour: Repaired selectors are recorded in local Actions.log in the repairWithAIInfo property. | Found: Searched: "self-healing" "repairWithAIInfo"; Power Automate self-healing repairWithAIInfo Actions.log DisableRunFilesCleanup. Read self-healing and searched governance for repairWithAIInfo; neither documents the property. | Fix: Remove the repairWithAIInfo property claim, its local-log review instruction and the assertion that Actions.log includes that property. Retain the separately documented registry setting only as a general action-log retention setting.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance guidance: At rollout / admin-path: Power Platform admin center > Manage > Environment groups > environment group > Add rules > Power Platform Anthropic reaches the group rule. | Found: select Environment groups, and then select the environment group. ... Select the Add rules tab. ... Select the checkbox ... Power Platform Anthropic ... Select each rule to see its details page, confirm or configure its feature settings | Fix: The path reaches rule selection but stops before configuration. Add to the existing note: 'Select the rule, configure its feature settings, then select Save, Add and Apply changes.' | Source: https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist's instruction to inspect self-healing summaries and repairWithAIInfo logs has no corresponding monitoring row in the controls table. | Found: After rollout: Read the self-healing summary on the desktop flow run page and the repairWithAIInfo property in local action logs. Controls table: provider, environment models, group models, cross-region movement, Copilot and per-action toggle only. | Fix: Remove the After rollout bullet directing readers to inspect the run summary and repairWithAIInfo logs; it has no monitoring row in the controls table. Do not add a row.
-->
