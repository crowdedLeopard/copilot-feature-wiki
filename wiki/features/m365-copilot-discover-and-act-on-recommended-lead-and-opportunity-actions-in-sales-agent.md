---
title: "Sales agent: recommended lead and opportunity actions in Microsoft 365 Copilot"
slug: "m365-copilot-discover-and-act-on-recommended-lead-and-opportunity-actions-in-sales-agent"
roadmapId: 579977
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a single prioritised list of lead and opportunity actions for sellers in Sales agent, on by default, targeted for November CY2026. Admins should check access, licensing and capacity now."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published for this item. Learn says Sales agent in Microsoft 365 Copilot is available to users with a Microsoft 365 Copilot licence, and that recommended actions in Dynamics 365 Sales are charged per action processed."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["sales-agent","m365-copilot","agents","dynamics-365","usage-based-billing","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 579977"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579977"
    kind: "roadmap"
  - title: "Recommended actions overview"
    url: "https://learn.microsoft.com/dynamics365/sales/recommended-actions-overview"
    kind: "learn"
  - title: "Configure Recommended Actions agent"
    url: "https://learn.microsoft.com/dynamics365/sales/configure-recommended-actions"
    kind: "learn"
  - title: "Manage risks and prioritize actions based on AI recommendations"
    url: "https://learn.microsoft.com/dynamics365/sales/next-best-actions-to-manage-opportunities"
    kind: "learn"
  - title: "Manage consumption-based billing for agent capabilities"
    url: "https://learn.microsoft.com/dynamics365/sales/copilot-consumption-based-billing"
    kind: "learn"
  - title: "Manage access to Sales agent and Dynamics 365 Sales plugins across Microsoft apps"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    kind: "learn"
  - title: "Set up Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat"
    kind: "learn"
  - title: "Welcome to Sales agent"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/introduction"
    kind: "learn"
  - title: "Agents, Copilot, and AI capabilities in Dynamics 365 apps"
    url: "https://learn.microsoft.com/dynamics365/copilot/ai-get-started"
    kind: "learn"
  - title: "Quick start guide: Connect a custom agent to Recommended Actions"
    url: "https://learn.microsoft.com/dynamics365/sales/connect-custom-agent-recommended-actions"
    kind: "learn"
  - title: "Configure recommended actions for Sales Opportunity Agent"
    url: "https://learn.microsoft.com/dynamics365/sales/configure-sales-opportunity-agent-connected-skills"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether Sales agent can be used in Microsoft 365 Copilot, and by which groups"
    scope: "tenant"
    ui:
      surface: "Sales agent administrator settings"
      path: "Tenant > Access settings > Allow access to Sales agent"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    api: null
    note: "Role: Global Administrator, Exchange Administrator or Power Platform Administrator. Governs Sales agent as a whole; Microsoft has not documented it as a switch for recommended actions."
  - governs: "Whether a source agent's actions appear in the recommended actions experience (Dynamics 365 Sales)"
    scope: "agent"
    ui:
      surface: "Dynamics 365 Sales Hub app settings"
      path: "Change area > App Settings > General settings > Dynamics 365 AI hub > Create and manage agents > agent > Connected skills > Recommended Actions"
      docs: "https://learn.microsoft.com/dynamics365/sales/configure-recommended-actions"
    api: null
    note: "Documented for the Recommended Actions agent in Dynamics 365 Sales. Microsoft has not confirmed it governs the Sales agent experience in Microsoft 365 Copilot."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-13T19:37:39"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item. Learn documents no Sales agent page for it yet, so cost, controls and behaviour rest on neighbouring Dynamics 365 Sales pages and are marked as background."
  - date: "2026-11-16"
    note: "Corrected after the independent check: cost rating changed to low, the unsupported 'without notice' wording replaced, and the Copilot credits wording and Sales Opportunity Agent preview toggle added."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 60
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "bb378295de954cc33a63ea8520f96082"
---

## What's changing

Microsoft plans to give sellers one prioritised list of recommended lead and opportunity actions inside Sales agent. The roadmap item says sellers can review each recommended action, see its details and business context, and act from the same place, without watching each agent separately.

The roadmap item says the initial release covers lead outreach actions from Sales qualification agent and opportunity risk actions from Sales opportunity agent. It states that recommended actions will be turned on by default, and that additional agents, including custom agents, are a future direction and not part of this initial commitment.

The roadmap record lists the item as In development, with a target date of November CY2026 and no preview date. It lists Worldwide (Standard Multi-Tenant), General Availability and Web. These are Microsoft's targets, not commitments.

At the time of writing (November 2026), no Microsoft Learn page describes this feature in the Sales agent in Microsoft 365 Copilot. Learn does document a Recommended Actions agent in Dynamics 365 Sales that "evaluates actions from multiple agents and presents them in a single, prioritized experience". Treat that page as background: it describes a Dynamics 365 Sales list page carousel, and Microsoft has not said it is the same experience.

## Why it matters

If the roadmap wording holds, this reaches sellers by default in about the month the item targets (November CY2026), so the first notice may be a seller asking why Sales agent is now ranking their leads. Service owners need to know before then who sees it, what it can trigger and what it consumes.

The larger gap is spend. Dynamics 365 Sales documentation says recommended actions are charged by the number of actions processed. Microsoft has not published whether Sales agent in Microsoft 365 Copilot uses that meter for this item, so finance and capacity owners should ask now rather than find out from a bill or a depleted quota.

## Risk assessment

**Data exposure**

- The roadmap item describes lead and opportunity recommendations drawn from Sales qualification agent and Sales opportunity agent. Learn says users can access only the CRM environments, records, tables and fields their assigned security roles and privileges permit, so CRM security roles are the boundary to check.
- Microsoft has not documented what additional data the ranking reads for this feature. Treat the Dynamics 365 scoring description as background only.

**Security & identity**

- Sales agent access is controlled per application with Microsoft Entra security groups (see the controls table). Learn states these settings control access only and do not grant access to CRM data.
- The default after automatic installation matters: Learn says auto-installed users are blocked in Microsoft 365 Copilot by default, while other eligible users have access.

**Autonomy & actions**

- The roadmap item says sellers act on a recommended step from the same experience. Which actions can be taken, and whether any run without a seller's confirmation, is not yet documented for this item.
- Learn describes Sales Qualification Agent as able to send outreach emails, so lead outreach actions touch external recipients. Whether recommended actions send mail is not documented.

**Change & support**

- The roadmap says recommended actions will be on by default, so plan seller communication before the target month. Plan a support answer for "why is this lead ranked first".
- Learn documents thumbs up or thumbs down feedback on action cards in Dynamics 365 Sales; it does not say whether the same feedback exists here.

## Cost and licensing

Licensing for this roadmap item is not yet published.

What Learn does say, as background. Sales agent in Microsoft 365 Copilot "is available to users who have access to a Microsoft 365 Copilot license" (Set up Sales agent in Microsoft 365 Copilot). Another page says access to either Dynamics 365 Sales Enterprise or Dynamics 365 Sales Premium can make a user eligible for Sales agent and automatic distribution, and that additional Microsoft 365 licences or entitlements might be required for Microsoft 365-grounded features.

For the meter, the Dynamics 365 Sales recommended actions overview says the system "charges for recommended actions based on the number of actions the prioritization engine processes", and lists Sales Opportunity Agent and Sales Qualification Agent as charged. The billing page says these capabilities use Microsoft Copilot Studio messages, with prepaid capacity or pay-as-you-go, and that when quota is depleted "the AI capability is unavailable until more capacity is added". The Dynamics 365 Sales page on connecting a custom agent to Recommended Actions instead says "Recommended Actions uses Copilot credits", so the two pages use different terms. Microsoft has not stated that either applies to Sales agent in Microsoft 365 Copilot, and no rate for recommended actions is published on the pages read.

## Scope

The record lists Worldwide (Standard Multi-Tenant) and the Web platform, at General Availability. It does not list the US Government clouds.

Sellers who use Sales agent are in scope. Learn says Sales agent works with Dynamics 365 Sales and Salesforce, and is useful only when users are connected to a CRM system. The roadmap item names only Sales qualification agent and Sales opportunity agent as sources in the initial release.

Prerequisites for this feature are not yet documented. The roles that can change Sales agent access settings are Global Administrator, Exchange Administrator or Power Platform Administrator.

## Governance guidance

### Before rollout

- Confirm in Sales agent administrator settings (Tenant > Access settings > Allow access to Sales agent) which applications are on and whether **Restrict auto-installed users** is set, so you know who would see recommended actions.
- Decide on a pilot group. Learn suggests clearing **Restrict auto-installed users** and using **Allow access** groups to limit a pilot to selected users.
- Ask your Microsoft account team whether recommended actions in Sales agent consume Copilot Studio messages, and which capacity or pay-as-you-go plan would be charged.
- Check that Sales Qualification Agent and Sales Opportunity Agent are configured, because those are the two sources the roadmap names.

### At rollout

- Verify the Sales agent access toggle for Microsoft 365 Copilot and the Entra security groups under **Allow access** and **Restrict access** match your intended audience.
- Check the Recommended Actions toggle under **Connected skills** for each source agent in Dynamics 365 Sales, and note that Microsoft has not confirmed that toggle governs this feature.
- Tell sellers that a ranked list is arriving by default and where to report wrong rankings.

### After rollout

- Review Copilot Studio message capacity and pay-as-you-go usage if your Dynamics 365 Sales environment is linked to a Power Platform environment, as the billing page describes.
- Re-check Message center and the Sales agent Learn pages, since Microsoft documents this item only through the roadmap at the time of writing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Sales agent can be used in Microsoft 365 Copilot, and by which groups</strong><br><small>Tenant</small><br><small class="controls__note">Role: Global Administrator, Exchange Administrator or Power Platform Administrator. Governs Sales agent as a whole; Microsoft has not documented it as a switch for recommended actions.</small></td><td data-label="Admin UI"><strong>Sales agent administrator settings</strong><br>Tenant › Access settings › Allow access to Sales agent <a href="https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a source agent's actions appear in the recommended actions experience (Dynamics 365 Sales)</strong><br><small>Agent</small><br><small class="controls__note">Documented for the Recommended Actions agent in Dynamics 365 Sales. Microsoft has not confirmed it governs the Sales agent experience in Microsoft 365 Copilot.</small></td><td data-label="Admin UI"><strong>Dynamics 365 Sales Hub app settings</strong><br>Change area › App Settings › General settings › Dynamics 365 AI hub › Create and manage agents › agent › Connected skills › Recommended Actions <a href="https://learn.microsoft.com/dynamics365/sales/configure-recommended-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No documented control switches recommended actions in Sales agent in Microsoft 365 Copilot off while leaving Sales agent on. The two rows that exist govern neighbouring things.

The tenant access settings control whether Sales agent can be used in each application and by whom. They do not install apps, assign licences or grant CRM data access. The changes can take up to 15 minutes to take effect, and Entra group membership changes up to one hour.

The Dynamics 365 toggle is documented for the Recommended Actions agent in Dynamics 365 Sales. Learn says disabling it keeps the source agent running but its insights no longer appear in the recommended actions interface. A separate Learn page marks the Sales Opportunity Agent integration with recommended actions as a preview feature and places its toggle under Advanced > Connected skills > Recommended action. No PowerShell, Graph or other API was found for either control at the time of writing.

## Open questions

- Is the recommended actions experience in Sales agent in Microsoft 365 Copilot the same capability as the Dynamics 365 Sales Recommended Actions agent, and does the Recommended Actions toggle govern it? Watch the Sales agent pages on Microsoft Learn.
- Is the experience charged per action processed using Copilot Studio messages, or covered by the Microsoft 365 Copilot licence? Watch the Sales agent and Dynamics 365 billing pages.
- Which actions can a seller take from the list, and does any of them send email or update CRM records without a confirmation step?
- Will there be a tenant setting to turn recommended actions off separately from Sales agent before the November CY2026 target? Watch Message center and the roadmap item.

<!-- rationale
risk: Medium. The roadmap item says recommended actions will be on by default, and sellers act on CRM leads and opportunities, but the documented Sales agent access settings and CRM privileges still apply. No control for this feature itself is documented.
cost: Low. The known cost is administrator preparation and seller communication; licensing and metering for this roadmap item are not yet published.
impact: High. The roadmap item states the feature is on by default, so every seller who can use Sales agent would see a changed experience without an admin action.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist's capacity and pay-as-you-go monitoring control has no corresponding controls-table row. | Found: Checklist: 'Review Copilot Studio message capacity and pay-as-you-go usage'. The two table rows cover tenant Sales agent access and source-agent Recommended Actions integration, not capacity monitoring. | Fix: Remove the After rollout bullet beginning 'Review Copilot Studio message capacity and pay-as-you-go usage'; it names a control not represented in the existing controls table.
-->
