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
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: the preview documentation requires Managed Environments but gives no feature-specific licence or charge. Managed Environments need a qualifying standalone licence or pay-as-you-go meter."
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
  - title: "Licensing requirements for managed environments"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-licensing"
    kind: "learn"
  - title: "Environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    kind: "learn"
  - title: "Custom guidance message for blocked items in the agent status pane (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status#custom-guidance-message-preview"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Maker guidelines message, link and contact"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Maker guidelines > Environments > environment > Edit setting"
      docs: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    api: null
    note: "Preview."
  - governs: "Maker guidelines as an environment group rule"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environment groups > group > Rules > Add rules > Maker guidelines > Save > Publish rules"
      docs: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    api: null
    note: "Preview. Add rules is needed only if Maker guidelines is not already listed."
  - governs: "Custom guidance message for blocked items in the agent status pane"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Copilot Studio > Maker guidance"
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
  - date: "2026-11-16"
    note: "Corrected after verification: removed unsupported history, role, cost and 'portal-only' claims; licensing now unknown and cost low; fixed admin paths and docs links."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected after verification: custom guidance path now includes the Copilot Studio section; removed the environment-admin role gap and the unsupported claim that the feature moves no data."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 47
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "afece02d48afe6348e61666f5648cf1d"
---

## What's changing

**Maker guidelines** is a Power Platform admin center setting that lets administrators place a message in front of Copilot Studio makers while they build. The message appears in the **Review** pane of Copilot Studio, next to the agent's blockers and warnings, under the heading "A message from your admin". It stays visible when the agent has no issues, so it is a standing notice rather than an error explanation.

Administrators configure it per managed environment or per environment group. Microsoft Learn documents Maker guidelines as prerelease (preview) content, so the details below are current preview behaviour and may change. The message is plain text up to 400 characters, with an optional HTTPS button link, a button label of up to 50 characters and a contact email. Environment-group rules override environment-level messages.

A related preview, **custom guidance message**, replaces the generic "Contact your admin" prompt that appears when a maker hits a blocked connector or channel. Its Learn page places it under **Maker guidance** with different field labels and an option to show the message from Agent status, so the two documented experiences may be one panel or two; confirm in the admin center.

The roadmap item (status: In development) lists a preview target of September CY2026 and a General Availability target of November CY2026.

## Why it matters

Governance controls (data policies, credential rules, sharing limits) are only half of a maker programme; the other half is telling makers what is approved and where to go for help. Guidance kept only on an intranet page can be easy to miss. Putting it in the Review pane means the guidance is shown at the moment a maker is deciding which connector, model or channel to use, and the contact email gives blocked makers a route other than a help desk ticket.

It is a low-risk, low-cost change whose value depends entirely on the quality of the 400 characters you write.

## Risk assessment

**Data exposure**
- The documented function is to display admin-authored guidance and links to help.

**Security & identity**
- The button link is an HTTPS URL that makers will click; keep it on a trusted internal site and review who can edit the setting (Power Platform administrators with group edit rights).

**Autonomy & actions**
- Not applicable.

**Change & support**
- The documented custom guidance message preview is not localised, so multinational tenants need a language-neutral message or per-environment variants.
- For the custom guidance message preview, the link remains clickable even if the destination is unreachable; stale links damage trust in the guidance.

## Cost and licensing

- Feature-specific licensing and pricing for maker guidelines are not yet published. The preview page lists Managed Environments as its prerequisite and names no other licence or charge.
- Requires **Managed Environments**. Per Microsoft's licensing page, managed environments are included as an entitlement in licences such as Power Apps Premium, Power Automate Premium, Microsoft Copilot Studio, Power Pages, Dynamics 365 Premium, Enterprise, Team Members and Dynamics 365 Customer Insights, and pay-as-you-go meters for Power Apps per app, Power Pages and Copilot Studio also qualify. When you activate managed environments, all active usage requires one of these standalone licences or meters. The page refers to the Microsoft Power Platform Licensing Guide for the current list.
- Indirect: time to write and maintain the guidance and to answer the contact mailbox.

## Scope

- Copilot Studio makers in managed environments or environment groups where the message is configured or the rule is published.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: the Maker guidelines page is written for Power Platform administrators, and Learn documents creating environment groups and configuring their rules for Power Platform tenant administrators.

## Governance guidance

### Before rollout
- Draft one message per environment class (sandbox, development, production). Say which tools, models, connectors and channels are approved and where to request exceptions.
- Set up a shared mailbox or request form for the contact and button link so replies are tracked.

### At rollout
- Publish as an environment-group rule so environments added to that group inherit the message.
- Enable the custom guidance message for blocked items at the same time so blocked makers see the same route to help.

### After rollout
- Review the contact mailbox monthly; recurring questions indicate a missing approved pattern.
- Update the message when data policies or approved connector lists change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Maker guidelines message, link and contact</strong><br><small>Environment</small><br><small class="controls__note">Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Maker guidelines › Environments › environment › Edit setting <a href="https://learn.microsoft.com/power-platform/admin/maker-guidelines" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Maker guidelines as an environment group rule</strong><br><small>Environment group</small><br><small class="controls__note">Preview. Add rules is needed only if Maker guidelines is not already listed.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environment groups › group › Rules › Add rules › Maker guidelines › Save › Publish rules <a href="https://learn.microsoft.com/power-platform/admin/maker-guidelines" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Custom guidance message for blocked items in the agent status pane</strong><br><small>Environment</small><br><small class="controls__note">Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Copilot Studio › Maker guidance <a href="https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status#custom-guidance-message-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

As of November 2026, Microsoft documents portal configuration but no automation equivalent for these settings. Guidelines display organisational expectations and links to help. Environment group rules apply the same text to every environment in the group and need Managed Environments, because environment groups can only contain managed environments. Maker welcome content is a separate message that sets expectations when makers first enter the product.

## Open questions

- Whether rich text or localisation will be supported at General Availability.
- Whether the same guidance surface will extend to Power Apps and Power Automate makers.

<!-- rationale
risk: Low. The documented function is to display organisational guidance and links to help in the Review pane.
cost: Low. The known cost is admin time to write and maintain the message. Feature-specific licensing is not yet published; the feature needs Managed Environments, which have their own licensing.
impact: Low. The audience is Copilot Studio makers in managed environments where an admin has configured the message.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: At rollout; controls[2].note / behaviour: The related custom guidance message preview replaces Contact your admin when a maker encounters blocked connectors or channels. | Found: This article describes features used in agents or agent flows powered by the standard harness. As an admin, you can set an environment-level guidance message for users when they encounter a blocked or disabled capability. This plain-text message replaces the default Contact your admin prompt. | Fix: Replace the first custom-guidance sentence with: 'For agents and agent flows powered by the standard harness, a related preview, custom guidance message, replaces the generic "Contact your admin" prompt that appears when a maker hits a blocked connector or channel.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status
-->
