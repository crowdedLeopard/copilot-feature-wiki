---
title: "Microsoft Word: choose the model used by Copilot Agent Mode on the web"
slug: "m365-copilot-when-using-agent-mode-in-word-you-will-be-able-to-manually-select-which-model"
roadmapId: 545012
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap says Agent Mode in Word on the web will let users pick the model. Microsoft has published no Learn page, default or licence for it; check your Anthropic provider setting and watch for details."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education plans (Learn licence options page). A licence or rate specific to model choice in Agent Mode in Word is not yet published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["word","m365-copilot","model-selector","anthropic","agents"]
sources:
  - title: "Microsoft 365 Roadmap item 545012"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=545012"
    kind: "roadmap"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Assign AI provider access to users and groups"
    url: "https://learn.microsoft.com/copilot/implement/copilot-ai-provider-user-sec-group-access"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["m365-copilot-chat-usage-based-billing-models-model-selector"]
controls:
  - governs: "Which users can access Anthropic models in Copilot experiences"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "AI Administrator or Global Administrator role. Applied per AI provider, not per model. Not confirmed to cover every model Agent Mode will offer."
  - governs: "Tenant or per-app switch for model choice in Agent Mode in Word"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-01-13T00:00:10"
changes:
  - date: "2026-11-22"
    note: "New briefing: roadmap item 545012, model choice in Agent Mode in Word on the web; no Learn page or default yet."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 49 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: reworded the opening of Why it matters, the pilot bullet and the Anthropic path, and added the apps-only regional default."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a69ad6e8fd8322c40f794f05a4b82a49"
---

## What's changing

The roadmap item states that Agent Mode in Word will let users choose from multiple models, so they can select the right model for their task. The record names no models, no admin settings and no rollout mechanics. It lists Web as the platform and Worldwide (Standard Multi-Tenant) as the cloud.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. For Microsoft Copilot in general, Learn says users can select different models with the model selector in the UI, and that by default Copilot uses a real-time router to adjust the underlying model based on the prompt. Whether Agent Mode in Word follows that pattern is not stated.

The roadmap lists the item as In development with a target of February CY2026 and a General Availability release phase. That target month has passed while the status is still In development, and the record was last modified on 13 January 2026, so treat the date as a stale target.

Separately, the Microsoft 365 Copilot release notes for 11 August 2026 list a Word entry, "Choose Anthropic models when editing with Copilot in Word" [Web], which says Copilot in Word supports selecting Anthropic models alongside existing OpenAI models. Whether that entry is the same capability as this roadmap item is not stated.

## Why it matters

The roadmap plans to give users a choice of model for their Word task. The control Microsoft documents for third-party providers is the AI provider setting in the Microsoft 365 admin center, which is applied at the provider level, not the model level. Plan around that control now, because Learn describes no switch specific to this feature.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes, and do not assume that nothing will change. Check Message center and the Learn page before the item moves beyond In development.

## Risk assessment

**Data exposure**

- If the picker offers Anthropic's Claude models, Learn says Claude models in Copilot in Microsoft 365 apps are currently excluded from the EU Data Boundary and, where applicable, in-country processing commitments. Which models Agent Mode will offer is not stated. The Anthropic provider setting (first row of the controls table) is the documented control.
- Learn describes "Anthropic models with Data Retention" as off by default for all scenarios, so they need a separate opt-in by the tenant admin. The roadmap does not say whether Agent Mode would list such models.

**Security & identity**

- Provider access can be limited to named users or Microsoft Entra ID security groups, applied at the AI provider level, not the AI model level. Whether one model can be hidden from the Agent Mode picker while its provider stays available is not documented.

**Autonomy & actions**

- The roadmap description covers choosing a model and mentions no new permissions, data sources or actions. Confirm with Microsoft whether the choice of model changes what Agent Mode can do.

**Change & support**

- Expect users to compare output between models and to ask the service desk which one to use. Prepare short guidance once Microsoft names the models.
- For tenants in the EU, EFTA and the UK, Learn says the "All users for Microsoft 365 apps only" Anthropic option is removed on 9 December 2026, and that tenants with it selected or with no selection move to "All users". Check the setting before that date.

## Cost and licensing

Microsoft's licence options page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans. The Microsoft Copilot overview describes the Microsoft 365 Copilot (Premium) licence as the one with access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote.

A licence requirement or credit rate specific to choosing a model in Agent Mode in Word is not yet published, and the sources read do not say whether choosing a different model changes consumption. The indirect cost is admin time to review the provider setting and to brief users.

## Scope

The roadmap lists Word and Microsoft Copilot (Microsoft 365) as the products, Web as the platform, Worldwide (Standard Multi-Tenant) as the cloud and General Availability as the release phase. The users in scope, the licence they need and any prerequisites are not stated.

For Anthropic models in general, Learn says Microsoft enables Claude models by default for most customers in the commercial cloud, excluding the EU, EFTA and the UK, where they are disabled by default. The separate apps-only guidance says the setting is enabled by default for EU, EFTA and UK tenants created after 25 March 2026; check the actual tenant setting. Changing the provider setting needs the AI Administrator or Global Administrator role. These statements are about Anthropic models and the provider setting, not about this feature.

## Governance guidance

### Before rollout

- Open the Anthropic provider setting in the Microsoft 365 admin center and record whether Anthropic is available to all users, specific users and groups, or no users.
- Decide whether processing outside the EU Data Boundary is acceptable if Claude models appear in the picker, and involve your data protection lead in that decision.
- If your tenant is in the EU, EFTA or the UK, review the Anthropic setting before 9 December 2026, when the "All users for Microsoft 365 apps only" option is removed.
- Brief the service desk that the roadmap plans model choice in Agent Mode in Word on the web, and that no date or model list is confirmed.

### At rollout

- Watch Message center and the Microsoft 365 Copilot release notes for this item moving beyond In development.
- Confirm with Microsoft which models the picker lists before widening access.
- Pilot Anthropic access with a security group: when access to that provider is restricted by user or group assignment, only the assigned users can use Copilot features that rely on Anthropic.

### After rollout

- Collect feedback from pilot users on which models they choose and why.
- Re-check the provider setting after any Microsoft change notice, and re-read this briefing when the roadmap status or target date changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can access Anthropic models in Copilot experiences</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator role. Applied per AI provider, not per model. Not confirmed to cover every model Agent Mode will offer.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or per-app switch for model choice in Agent Mode in Word</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is the control Microsoft documents for Anthropic models across Copilot experiences; it is not a switch for this feature. Changing it needs the AI Administrator or Global Administrator role. Learn says provider assignments apply at the provider level, not the model level, and are enforced across Microsoft Copilot and Copilot Studio.

Because the models Agent Mode will offer are not stated, the provider setting may not cover every model in the picker. The second row records that Microsoft Learn documents no tenant or per-app switch for the model choice in Agent Mode in Word at the time of writing (November 2026).

## Open questions

- Which models and providers will the Agent Mode picker in Word list, and will it include models that need a separate opt-in? Watch the Learn page for Copilot in Word and Message center.
- What is the default on arrival: does the picker appear for all Agent Mode users, and is it governed by the Anthropic provider setting?
- Is the August 2026 release notes entry "Choose Anthropic models when editing with Copilot in Word" the same capability as this roadmap item?
- Does choosing a model change the licence needed or the Copilot Credits consumed?
- Is the February CY2026 target still current, given the status is still In development?

<!-- rationale
risk: Medium. If the picker offers Anthropic models, Learn says Claude models in Copilot in Microsoft 365 apps are outside the EU Data Boundary; which models Agent Mode will offer is not stated.
cost: Low. No licence or meter specific to model choice in Agent Mode is published; the known cost is the Microsoft Copilot licence users already need, plus admin time.
impact: Medium. Users of Agent Mode in Word on the web would see a choice of models; Microsoft has not stated whether the picker is on by default.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; Open questions / absence: The documentation found does not establish whether changing models in this particular Agent Mode picker changes credit consumption. | Found: Searched: Word Agent Mode model selection Copilot Credits billing rate; Word model usage-based billing. Read USL/UBB and billing overview: general model selection is included in USL and frontier models can use credits, but this picker is not identified. | Fix: Replace 'the sources read do not say whether choosing a different model changes consumption' with 'Microsoft documents general Copilot model selection as part of the user subscription licence, while advanced AI and frontier models can require usage-based billing and consume Copilot Credits. How those rules map to the models offered by this specific Agent Mode picker is not stated.' Cite https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing and https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits.
-->
