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
  - title: "Governance in Power Automate for desktop"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/governance"
    kind: "learn"
videos: []
related: ["power-automate-ai-assisted-ui-automation-repair","managed-environments"]
controls:
  - governs: "Whether the Anthropic provider is enabled as a subprocessor for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > AI providers operating as Microsoft subprocessors"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    api: null
    note: "A Microsoft 365 AI administrator enables the provider. Learn lists this as a requirement for self-healing."
  - governs: "Whether Anthropic models are allowed in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Platform > External models"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/self-healing"
    api: null
    note: "Set at environment or environment group level. A Power Platform system admin allows the provider's models."
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
    api: null
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
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: self-healing for desktop flows is in preview on Learn; the roadmap plans a general availability log-only option that Learn does not yet describe."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 62
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "cd50c9290e6565b7209559c74a5d1e8b"
---

## What's changing

Self-healing is an AI fallback for desktop flows in Power Automate for desktop. When a UI or browser automation action cannot find its element because the selector no longer matches, the feature uses AI to identify the intended element and generate an alternative selector. The roadmap item describes it as an agentic feature that improves the resilience of desktop flows.

The roadmap item says the preview phase has an action-level opt-in for automatically trying to recover from a selector error. General availability is planned to add a flow-level opt-in that only logs the alternative, working selector when an error occurs, without applying the fix at runtime. Microsoft Learn documents only the preview behaviour at the time of writing (November 2026); it does not describe the flow-level log-only option.

The Learn page, marked as prerelease documentation, says that when a supported action fails with an *Element not found* error, error handling runs in this order: retry policy, self-healing, 'Set variable / Run subflow' rules, then Continue flow run / Throw error. If the repair succeeds the flow continues; if it fails, normal error handling resumes. Learn says self-healing is runtime-only, applies to console and cloud (attended and unattended) runs and has no effect during designer runs. It covers specific actions that interact with a single UI element, and *Element not found* and *Window not found* errors.

The roadmap record lists the item as In development, with a preview date of April CY2026 and a general availability target of March CY2027 for the Worldwide (Standard Multi-Tenant) cloud on the Desktop platform. The Learn page documents a preview that needs Power Automate for desktop version 2.66 or higher, and says self-healing isn't currently available in government clouds (GCC, GCC High, DoD) or sovereign clouds.

## Why it matters

Self-healing sends information from the machine running the flow to AI models in order to fix a broken selector, so it is a data-handling decision as well as a reliability feature. Learn says that when it is invoked, Power Automate for desktop captures a screenshot of the missing UI element, the parent window title and the full desktop image, and that two large language models, GPT-4.1 mini and Claude Sonnet 4.5, are currently used in combination. Flows that run on desktops showing sensitive applications are the ones to look at first.

Nothing in the sources says existing flows change on arrival: Learn describes self-healing as turned on per action by the maker, once the admin settings are in place. Expect makers to ask for it when selectors break, and plan where support staff will look for repair details, because the Power Automate portal doesn't currently surface self-healing details in action-level logs.

## Risk assessment

**Data exposure**

- Self-healing captures a screenshot of the missing element, the parent window title and the full desktop image, per the Learn page. Treat any machine that runs flows against sensitive applications as in scope for what a full desktop image can show.
- Self-healing requires the Anthropic provider to be enabled as a subprocessor in the Microsoft 365 admin center and in Power Platform, and requires **Move data across regions** where that checkbox applies. The external models page states Anthropic models in Copilot Studio are currently excluded from EU Data Boundary commitments; Microsoft has not said whether that applies to self-healing.

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

Self-healing applies to supported UI and browser automation actions that interact with a single UI element. It doesn't apply to window or screen handling actions or actions that interact with multiple elements, such as 'Drag and drop UI element in window'.

## Governance guidance

### Before rollout

- Decide which environments may use self-healing, then check whether the Anthropic provider is already enabled in the Microsoft 365 admin center, since Learn says Microsoft enables it by default for most commercial customers.
- Review which desktops run flows against sensitive applications, because the full desktop image is captured when self-healing is invoked.
- Confirm with Microsoft whether the data-movement and EU Data Boundary position of the models applies to self-healing before enabling it in regulated environments (see [Managed Environments](/concepts/managed-environments/) for the tier environment group rules require).

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
<tr><td data-label="Control"><strong>Whether the Anthropic provider is enabled as a subprocessor for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">A Microsoft 365 AI administrator enables the provider. Learn lists this as a requirement for self-healing.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › AI providers operating as Microsoft subprocessors <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic models are allowed in an environment</strong><br><small>Environment</small><br><small class="controls__note">Set at environment or environment group level. A Power Platform system admin allows the provider's models.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Platform › External models <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic models are allowed across an environment group</strong><br><small>Environment group</small><br><small class="controls__note">Environments in an environment group must be managed environments. Select Apply changes to publish the rules.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environment groups › environment group › Add rules › Power Platform Anthropic <a href="https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the environment allows data to move across regions for generative AI features</strong><br><small>Environment</small><br><small class="controls__note">Learn says the checkbox isn't displayed or needed for US cloud regions.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Generative AI features › Edit › Move data across regions <a href="https://learn.microsoft.com/power-automate/desktop-flows/self-healing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
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
- Do the EU Data Boundary and data-movement terms for Anthropic and OpenAI models apply to self-healing, and what happens to the captured screenshots?
- Will Microsoft add a self-healing-specific tenant or environment switch, and an API for the settings it depends on?

<!-- rationale
risk: Medium. When self-healing runs, Learn says it captures a screenshot of the missing element, the parent window title and the full desktop image for AI models, and it might occasionally pick the wrong element.
cost: Low. The preview page says self-healing is available for organization premium accounts at no extra cost, but usage might be subject to service limits or changes; licensing for general availability is not yet published.
impact: Low. Makers choose it action by action in the designer, so the people who notice are desktop flow makers and the administrators who set the AI model prerequisites.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance: Before rollout; Open questions / absence: Microsoft has not said whether the Anthropic EU Data Boundary exclusion applies to self-healing. | Found: Claude models deployed in Microsoft offerings such as Microsoft Copilot, Researcher, Copilot Studio, Power Platform, and Copilot in Microsoft 365 apps are currently excluded from the EU Data Boundary, and when applicable, in-country processing commitments. | Fix: Replace 'Microsoft has not said whether that applies to self-healing' with 'Microsoft excludes Claude models deployed in Power Platform from the EU Data Boundary and, where applicable, in-country processing commitments; self-healing uses Claude Sonnet 4.5.' Cite https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor. In Before rollout, replace the EU Data Boundary applicability question with 'Review the documented EU Data Boundary exclusion for Claude models before enabling self-healing in regulated environments.' In Open questions, remove the EU Data Boundary applicability question and retain the question about what happens to captured screenshots. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: supported errors / behaviour: Self-healing covers Element not found and Window not found errors. | Found: Applies only to Element not found and Window not found errors. Element not found errors are captured in both primary and secondary screens, while Window not found errors are only captured when the window is found in the main screen. | Fix: Add to the supported-errors sentence: 'Element not found errors are captured on primary and secondary screens; Window not found errors are captured only when the window is found on the main screen.' | Source: https://learn.microsoft.com/power-automate/desktop-flows/self-healing
- [supported, minor] controls[0].ui; Scope; Governance controls table / admin-path: The self-healing prerequisite enables the tenant Anthropic subprocessor in Microsoft 365 admin center at Copilot > Settings > AI providers operating as Microsoft subprocessors. | Found: In Microsoft 365 admin center, go to Copilot > Settings, and then select AI providers operating as Microsoft subprocessors. Enable the Anthropic provider as a subprocessor for your organization. | Fix: Keep the cited self-healing path, but add this note: 'The provider's own guidance also includes View all: Copilot > Settings > View all > AI providers operating as Microsoft subprocessors.' Cite https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor. | Source: https://learn.microsoft.com/power-automate/desktop-flows/self-healing
- [supported, minor] controls[1].ui; Scope; Governance controls table / admin-path: The self-healing prerequisite allows Anthropic at environment or environment-group level through Power Platform admin center > Copilot > Settings > Power Platform > External models. | Found: In Power Platform admin center, go to Copilot > Settings, and then under the Power Platform section, expand External models and enable Anthropic as a subprocessor at environment or environment group level. | Fix: Keep the self-healing path and add: 'The external models guidance also gives the environment path Manage > Environments > environment > Settings > Product > Features, where the model provider setting is turned On or Off.' Cite https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses. | Source: https://learn.microsoft.com/power-automate/desktop-flows/self-healing
-->
