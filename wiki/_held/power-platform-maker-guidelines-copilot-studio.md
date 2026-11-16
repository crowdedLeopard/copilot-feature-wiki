---
title: "Power Platform: maker guidelines shown inside the Copilot Studio Review pane"
slug: "power-platform-maker-guidelines-copilot-studio"
roadmapId: 570967
topic: "power-platform"
products: ["Microsoft Power Platform governance and administration"]
summary: "Admins can publish a 400-character message, a link and a contact address that Copilot Studio makers see in the Review pane next to their agent's blockers and warnings, per managed environment or environment group."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "none"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Available only for Managed Environments, which require standalone Power Platform or Copilot Studio licences for users of those environments."
audiences: ["power-platform-admin","maker","change-adoption","service-owner"]
tags: ["power-platform","copilot-studio","maker-guidelines","managed-environments","environment-groups","governance","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 570967"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570967"
    kind: "roadmap"
  - title: "Configure maker guidelines for Copilot Studio (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    kind: "learn"
  - title: "Review agent readiness and issue status in Microsoft Copilot Studio: custom guidance message"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status"
    kind: "learn"
  - title: "Enable maker welcome content"
    url: "https://learn.microsoft.com/power-platform/admin/welcome-content"
    kind: "learn"
  - title: "Maker guidelines as an environment group rule (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups-rules"
    kind: "learn"
  - title: "Custom guidance message for blocked items in the agent status pane (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status#custom-guidance-message-preview"
    kind: "learn"
videos: []
related: ["copilot-studio-safe-sharing-credential-oversharing","copilot-studio-block-maker-provided-credentials","managed-environments"]
controls:
  - governs: "Maker guidelines message, link and contact"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Maker guidelines > Environments or Environment groups > Edit setting"
      docs: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    api: null
  - governs: "Maker guidelines as an environment group rule"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environment groups > group > Rules > Add rules > Maker guidelines > Publish rules"
      docs: "https://learn.microsoft.com/power-platform/admin/environment-groups-rules"
    api: null
  - governs: "Custom guidance message for blocked items in the agent status pane"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Maker guidance"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status#custom-guidance-message-preview"
    api: null
    note: "Preview."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-09-25T22:37:50"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 38
  unconfirmed: 7
  contradicted: 4
  attempts: 1
---

## What's changing

**Maker guidelines** is a Power Platform admin center setting that lets administrators place a message in front of Copilot Studio makers while they build. The message appears in the **Review** pane of Copilot Studio, next to the agent's blockers and warnings, under the heading "A message from your admin". It stays visible when the agent has no issues, so it is a standing notice rather than an error explanation.

Administrators configure it per managed environment or per environment group. The message is plain text up to 400 characters, with an optional HTTPS button link, a button label of up to 50 characters and a contact email. Environment-group rules override environment-level messages. A related preview, **custom guidance message**, replaces the generic "Contact your admin" prompt that appears when a maker hits a blocked connector or channel; it uses the same panel in the admin center.

Public preview is listed for September 2026 and General Availability for November 2026.

## Why it matters

Governance controls (data policies, credential rules, sharing limits) are only half of a maker programme; the other half is telling makers what is approved and where to go for help. Until now that lived in a SharePoint page nobody opened. Putting it in the Review pane means the guidance is read at the moment a maker is deciding which connector, model or channel to use, and the contact email gives blocked makers a route other than a help desk ticket.

It is a low-risk, low-cost change whose value depends entirely on the quality of the 400 characters you write.

## Risk assessment

**Data exposure**
- None. The feature displays admin-authored text.

**Security & identity**
- The button link is an HTTPS URL that makers will click; keep it on a trusted internal site and review who can edit the setting (Power Platform administrators with group access).

**Autonomy & actions**
- Not applicable.

**Change & support**
- Messages are not localised; multinational tenants need a language-neutral message or per-environment variants.
- The link works even if the destination is down; stale links damage trust in the guidance.

## Cost and licensing

- No cost for the feature.
- Requires **Managed Environments**. Environments can only be managed when their users hold standalone Power Platform or Copilot Studio licences (not just Microsoft 365 seeded rights), so this may not be available in the default environment unless it is already managed.
- Indirect: time to write and maintain the guidance and to answer the contact mailbox.

## Scope

- Copilot Studio makers in managed environments or environment groups where the rule is published.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: Power Platform Administrator (environment groups) or environment admin with access to Copilot settings.

## Governance guidance

**Before rollout**
- Draft one message per environment class (sandbox, development, production). Say which tools, models, connectors and channels are approved and where to request exceptions.
- Set up a shared mailbox or request form for the contact and button link so replies are tracked.

**At rollout**
- Publish as an environment-group rule so new environments inherit the message.
- Enable the custom guidance message for blocked items at the same time so blocked makers see the same route to help.

**After rollout**
- Review the contact mailbox monthly; recurring questions indicate a missing approved pattern.
- Update the message when data policies or approved connector lists change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Maker guidelines message, link and contact</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Maker guidelines › Environments or Environment groups › Edit setting <a href="https://learn.microsoft.com/power-platform/admin/maker-guidelines" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Maker guidelines as an environment group rule</strong><br><small>Environment group</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environment groups › group › Rules › Add rules › Maker guidelines › Publish rules <a href="https://learn.microsoft.com/power-platform/admin/environment-groups-rules" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Custom guidance message for blocked items in the agent status pane</strong><br><small>Environment</small><br><small class="controls__note">Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Maker guidance <a href="https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status#custom-guidance-message-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

All three settings are portal-only. Guidelines are advisory text: they tell makers what the organisation expects but enforce nothing, so pair them with the data policies and sharing limits they describe. Environment group rules push the same text to every environment in the group and need Managed Environments. Maker welcome content, set when editing a Managed Environment, is a separate first-run message.

## Open questions

- Whether rich text or localisation will be supported at General Availability.
- Whether the same guidance surface will extend to Power Apps and Power Automate makers.

<!-- rationale
risk: Low. Informational control with no data or behaviour change.
cost: None. Managed Environments prerequisite is the only dependency.
impact: Low. Only makers in managed environments see it.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What's changing / behaviour: Maker guidelines use plain text. | Found: Configure maker guidelines for Copilot Studio (preview)
[This article is prerelease documentation and is subject to change.]
Enter a plain-text message of up to 400 characters. | Fix: Identify Maker guidelines itself as preview, not just the related custom guidance message. Introduce the configuration details as current preview behaviour, and retain November CY2026 as the roadmap's GA target. | Source: https://learn.microsoft.com/power-platform/admin/maker-guidelines
- [supported, minor] What's changing / admin-path: The Review guidance and blocked-item guidance use the same admin configuration panel. | Found: Under Agent status, select either or both of the Display guidance messaging when makers select View on Agent status and Display guidance messaging in popovers for blocked items check boxes. | Fix: Report the documentation difference rather than asserting an unqualified single panel: authoring-agent-status documents both placements under Maker guidance, while https://learn.microsoft.com/power-platform/admin/maker-guidelines documents Review guidance under Maker guidelines with different field labels. | Source: https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status
- [unsupported, major] Why it matters / behaviour: Until now maker guidance lived in a SharePoint page nobody opened. | Found: Searched: Copilot Studio maker guidelines previously SharePoint guidance; "maker guidelines" "localization" "SharePoint". Opened maker-guidelines, authoring-agent-status and welcome-content; none states this history or readership. | Fix: Remove the sentence beginning 'Until now'. Alternatively label the scenario as analysis: 'Guidance kept only on an intranet page can be easy to miss.'
- [supported, minor] Risk assessment; Scope / role: Power Platform administrators with appropriate group edit rights can manage environment-group rules. | Found: After you create the environment group, Power Platform tenant administrators can immediately add managed environments or configure the group's rules. | Fix: Add https://learn.microsoft.com/power-platform/admin/environment-groups to sources for group configuration permissions and required group-level edit rights. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [unsupported, blocker] Scope / role: An environment admin with access to Copilot settings can configure this feature. | Found: Searched: "maker guidelines" "environment admin"; "maker guidelines" "administrator" "cost". Opened maker-guidelines, environment-groups and use-service-admin-role-manage-tenant; no feature-specific environment-admin permission is stated. | Fix: Remove 'or environment admin with access to Copilot settings'. State that the feature documentation names Power Platform administrators; environment-admin eligibility for this setting is not yet documented.
- [supported, minor] Risk assessment / behaviour: Guidance messages are not localised. | Found: Custom guidance messages aren't localized. The message appears exactly as configured, regardless of users' language settings. | Fix: Specify 'The documented custom guidance message preview is not localised' so the limit is tied to the source's named preview experience rather than presented as a final Maker guidelines restriction. | Source: https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status
- [supported, minor] Risk assessment / behaviour: Link functionality remains available even if the destination URL is unreachable. | Found: Link functionality remains available even if the destination URL is unreachable. Maintain valid links for the best experience. | Fix: Tie this statement explicitly to the documented custom guidance message preview and say 'the link remains clickable', not that the destination works. | Source: https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing / licensing: Managed Environments require users to hold standalone Power Platform or Copilot Studio licences. | Found: Pay-as-you-go meters for Power Apps per app, Power Pages, and Copilot Studio also qualify. When you activate managed environments in an environment, all active usage requires one of these standalone licenses or pay-as-you-go meters. | Fix: Replace the licence-only prerequisite with 'All active usage in Managed Environments needs a qualifying standalone licence or qualifying pay-as-you-go meter; Microsoft 365 seeded rights alone are insufficient.' Cite managed-environment-licensing and name qualifying plans or link its current list, including Dynamics 365 entitlements. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-licensing
- [unsupported, blocker] front matter: licensing.model / licensing: Maker guidelines licensing is included in the product's existing licence. | Found: Searched: "maker guidelines" licensing cost localized administrator; "maker guidelines" "free". Opened maker-guidelines and managed-environment-licensing; the latter establishes Managed Environments entitlements, not feature-specific inclusion. | Fix: Set licensing.model to 'unknown'. State that the preview documentation requires Managed Environments but does not publish feature-specific licensing or additional-charge terms; separately describe the documented Managed Environments prerequisites.
- [unsupported, blocker] front matter: cost; Cost and licensing; rationale: cost / cost: There is no cost for the feature and Managed Environments is its only cost dependency. | Found: Searched: "maker guidelines" "administrator" "cost"; "maker guidelines" "free"; "maker guidelines" licensing cost localized administrator. Opened maker-guidelines and managed-environment-licensing; neither states that this feature is free. | Fix: Remove 'No cost for the feature'. Set cost to 'low' for the known authoring and maintenance effort; say feature-specific licensing and pricing are not yet published, and update the cost rationale accordingly.
- [supported, minor] Governance guidance: At rollout / behaviour: New environments added to a group inherit its published rules. | Found: When an environment is added to the group, it inherits the group's published rules. | Fix: Cite https://learn.microsoft.com/power-platform/admin/environment-groups and say 'new environments added to that group inherit the message'; publishing a rule alone does not put every new environment into the group. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [unsupported, major] Governance controls; rationale: risk / behaviour: Guidelines enforce nothing and cause no behaviour change beyond displaying guidance. | Found: Searched: "maker guidelines" enforcement advisory policy. Opened maker-guidelines and authoring-agent-status; they document displayed guidance but do not expressly establish the blanket 'enforce nothing' assertion. | Fix: Replace the absolute statement with the documented function: 'Guidelines display organisational expectations and links to help.' Keep pairing guidance with enforcement controls as the wiki's recommendation, not an asserted exhaustive product limitation.
- [supported, minor] Governance controls / behaviour: Published environment-group rules apply the group's configuration to every member environment. | Found: When a rule is published at the environment group level, it's enforced across every environment within that group. | Fix: Add https://learn.microsoft.com/power-platform/admin/environment-groups to sources for rule propagation. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [supported, minor] Governance controls / licensing: Environment groups require their member environments to be managed. | Found: Environment groups can only contain managed environments. | Fix: Add https://learn.microsoft.com/power-platform/admin/environment-groups to sources for this prerequisite. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: Both the Environments and Environment groups branches under Maker guidelines end in Edit setting. | Found: Environment group in the Copilot area: Select Copilot > Settings, and then select Maker guidelines. Select the Environment groups tab, select the environment group, and then select Edit rule. | Fix: Keep this environment-scoped row as 'Copilot > Settings > Maker guidelines > Environments > environment > Edit setting'. If retaining the group alternative, give its distinct path ending 'Environment groups > group > Edit rule'. Update the rendered table too. | Source: https://learn.microsoft.com/power-platform/admin/maker-guidelines
- [unsupported, blocker] controls[1].ui; Governance controls table / admin-path: The cited environment-groups-rules page documents the Manage > Environment groups > group > Rules > Add rules > Maker guidelines > Publish rules path. | Found: Searched: "maker guidelines" "environment group" "API". Opened environment-groups-rules: it lists rules but gives no configuration path. Opened maker-guidelines and environment-groups, which document the steps. | Fix: Change controls[1].ui.docs and its rendered Learn link to https://learn.microsoft.com/power-platform/admin/maker-guidelines. That page documents Manage > Environment groups > group > Rules, conditional Add rules, opening Maker guidelines, Save and Publish rules. Make Add rules conditional and include Save before Publish rules.
- [unsupported, blocker] Governance controls / absence: All three settings are portal-only. | Found: Searched: "maker guidelines" "PowerShell" API; "maker guidance" "API" "PowerShell"; "custom guidance message" API automation Copilot Studio. Opened maker-guidelines and authoring-agent-status; neither states an exclusive portal-only restriction. | Fix: Replace 'All three settings are portal-only' with 'As of November 2026, Microsoft documents portal configuration but no automation equivalent for these settings.' Retain the null API entries as documentation gaps, not proof that automation cannot exist.
- [contradicted, minor] Governance controls: advice to pair guidelines with data policies / consistency: The page tells readers to pair guidelines with data policies but supplies no data-policy control row. | Found: Prose: 'pair them with the data policies and sharing limits they describe.' The table contains only maker guidelines, its environment-group rule and custom guidance messaging. | Fix: Add a general data-policy control row if retaining the instruction, citing https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention after checking its control surfaces; explain that it enforces agent boundaries rather than the message text. Alternatively remove the instruction.
- [contradicted, minor] Governance controls: advice to pair guidelines with sharing limits / consistency: The page tells readers to pair guidelines with sharing limits but supplies no sharing-control row. | Found: Prose: 'pair them with the data policies and sharing limits they describe.' None of the three table rows records sharing limits. | Fix: Add a separate, sourced agent-sharing control row if retaining this instruction, clearly distinguishing enforcement from guidance messaging, or remove the instruction to configure sharing limits from this briefing.
-->
