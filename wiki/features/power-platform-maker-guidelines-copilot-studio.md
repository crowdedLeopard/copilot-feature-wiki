---
title: "Power Platform: maker guidelines shown inside the Copilot Studio Review pane"
slug: "power-platform-maker-guidelines-copilot-studio"
roadmapId: 570967
desk: "power-platform"
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
videos: []
related: ["copilot-studio-safe-sharing-credential-oversharing","copilot-studio-block-maker-provided-credentials","managed-environments"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-09-25T22:37:50"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Power Platform admin center > **Copilot** > **Settings** > **Maker guidelines** > **Environments** or **Environment groups** tab > **Edit setting** / **Edit rule**: message, button link, button label, contact email.
- Power Platform admin center > **Manage** > **Environment groups** > group > **Rules** > **Add rules** > **Maker guidelines** > **Publish rules**.
- Power Platform admin center > **Copilot** > **Settings** > **Maker guidance**: custom guidance message for blocked items and the agent status View action.
- Power Platform admin center > environment > **Edit Managed Environment** > **Maker welcome content**: first-run guidance with optional consent logging.

## Open questions

- Whether rich text or localisation will be supported at General Availability.
- Whether the same guidance surface will extend to Power Apps and Power Automate makers.

<!-- rationale
risk: Low. Informational control with no data or behaviour change.
cost: None. Managed Environments prerequisite is the only dependency.
impact: Low. Only makers in managed environments see it.
-->
