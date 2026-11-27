---
title: "Microsoft 365 Copilot: Critique in Researcher, with Claude reviewing GPT drafts"
slug: "m365-copilot-critique-in-researcher"
roadmapId: 558538
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a Critique capability in the Researcher agent in which GPT drafts a response and Anthropic's Claude reviews it. Decide who may use Anthropic models before the December 2026 target."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The Researcher FAQ describes Researcher as part of the core default experience for Microsoft Copilot licensed users; users need a Microsoft Copilot licence and a qualifying prerequisite licence. Nothing specific to Critique is published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["researcher","anthropic","m365-copilot","eu-data-boundary","model-selector","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap 558538"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558538"
    kind: "roadmap"
  - title: "Introducing multi-model intelligence in Researcher"
    url: "https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-multi-model-intelligence-in-researcher/4506011"
    kind: "blog"
  - title: "May 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-may#2026-agents-move-into-action"
    kind: "learn"
  - title: "Microsoft Copilot Researcher agent frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/faq-researcher"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Which users may use Anthropic (Claude) models, and so features that rely on them (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Whether Researcher, and so Critique, is available in the tenant at all (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether Researcher, and so Critique, is available in the tenant at all (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["data-residency","m365-copilot-researcher-agent-for-gcc","agent-registry","m365-copilot-easier-access-to-researcher-in-microsoft-word"]
controls:
  - governs: "Which users may use Anthropic (Claude) models, and so features that rely on them"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. Applies at provider level across Microsoft Copilot and Copilot Studio; default is on for most commercial tenants, No users in EU, EFTA and UK."
  - governs: "Whether Researcher, and so Critique, is available in the tenant at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocks Researcher as a whole, not Critique alone. The Graph call is beta and requires a Microsoft Agent 365 licence."
  - governs: "Tenant switch for Critique separate from Researcher and the Anthropic setting"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no Critique-specific setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-08-04T22:45:42"
changes:
  - date: "2026-11-27"
    note: "New briefing: Critique in Researcher, with the Anthropic subprocessor setting and the Researcher block as today's controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: Critique is documented as live in the Frontier program and as Researcher's default when Auto is selected; default state set to on and action to act-now."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 50 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 50
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e98b5cc934409e0b91c41fe7797213e4"
---

## What's changing

Microsoft plans a Critique capability in Researcher, the Microsoft 365 Copilot agent for deep, multi-step research. The roadmap item states that responses are generated by GPT and Claude working together, with GPT drafting an initial response and Claude reviewing it for accuracy, completeness and citation integrity.

Microsoft Learn's May 2026 announcements describe Critique in Researcher as live in the Frontier program, using multiple leading models to cross-check drafting, accuracy and citations. Microsoft's March 30, 2026 announcement says Critique will be the default experience in Researcher when Auto is selected in the model picker, and announces availability in the Frontier program. The Researcher FAQ says users can already pick the model and mode in the model picker at the top right of the Researcher page, and the Anthropic subprocessor page says users can select **Claude** in Researcher.

The roadmap item is **In development**, with a preview target of March CY2026 and a general availability target of December CY2026, for the Worldwide (Standard Multi-Tenant) cloud on Desktop and Web. These are Microsoft's targets.

## Why it matters

Critique ties a Researcher answer to two model providers rather than one. Anthropic models reach Microsoft 365 Copilot as a Microsoft subprocessor, and Microsoft states that Claude models in Researcher are currently excluded from the EU Data Boundary and in-country processing commitments. Microsoft turns Claude models on by default for most commercial tenants outside the EU, EFTA and UK, so in those tenants the decision about Claude has usually already been made by default. EU, EFTA and UK tenants start at **No users**, but the Microsoft 365 apps page announces a change on December 9, 2026 that enables Claude models for all users in tenants that chose the apps-only option or chose nothing.

Microsoft's announcement says Critique will be the default experience in Researcher when Auto is selected in the model picker, so Researcher users who keep Auto selected meet Critique without choosing it. Microsoft has not stated what Researcher does for a user who is not allowed to use Anthropic models. The setting to check is therefore the Anthropic subprocessor assignment, before the December target.

## Risk assessment

**Data exposure**
- The roadmap says Claude reviews the GPT draft. Microsoft states that Claude models in Researcher are excluded from the EU Data Boundary, while the Researcher FAQ says Researcher adheres to the EU and Microsoft 365 boundaries. Both statements are Microsoft's; confirm with Microsoft which applies to Critique before allowing it for EU users.
- The Anthropic subprocessor setting decides which users can use features that rely on Claude.

**Security & identity**
- No change described: the roadmap item names no new sign-in, permission or identity for Critique.

**Autonomy & actions**
- No change: the roadmap describes review of a written response, not new actions.

**Change & support**
- Answers may differ from today's Researcher output and take a different form; expect questions from Researcher users once it appears.
- Turning Anthropic off can remove features: Microsoft warns that certain features may no longer be accessible if Anthropic is disabled as a subprocessor.

## Cost and licensing

The Researcher FAQ says Researcher is part of the core default experience for Microsoft Copilot licensed users. The Microsoft Copilot requirements page says users need a Microsoft Copilot licence and a qualifying prerequisite licence.

A licence, price or meter specific to Critique is not yet published. The Researcher FAQ gives a usage limit of 25 queries per user per month for Researcher; Microsoft has not said whether Critique counts against it differently.

Scripting the agent block through Microsoft Graph needs a Microsoft Agent 365 licence, according to the Package Management API reference.

## Scope

- **Users:** Researcher users, who per the FAQ are Microsoft Copilot licensed users.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap lists it.
- **Platforms:** Desktop and Web, per the roadmap.
- **Prerequisite in practice:** access to Anthropic models through the **AI providers operating as Microsoft subprocessors** setting, which is on by default for most commercial tenants and set to **No users** by default in the EU, EFTA and UK.
- **Roles:** the AI Administrator or Global Administrator role manages the Anthropic subprocessor setting.

## Governance guidance

### Before rollout
- Check who is assigned under **Choose who can access Anthropic models for Copilot and generative AI experiences** in the Microsoft 365 admin center, as an AI Administrator.
- Decide, with your data protection lead, whether processing outside the EU Data Boundary is acceptable for Researcher answers, and narrow the Anthropic assignment to a security group if not.
- Check, in EU, EFTA and UK tenants, whether the December 9, 2026 change to the apps-only option will enable Claude for all your users.
### At rollout
- Watch Message center for a post on Critique that states whether it follows the Anthropic assignment.
- Tell Researcher users that answers may be reviewed by a second model, and where to report wrong citations.
### After rollout
- Block Researcher for the tenant through **Agents > All agents** if Critique proves unacceptable and no narrower setting appears; this removes Researcher as a whole.
- Recheck the Anthropic assignment after group membership changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users may use Anthropic (Claude) models, and so features that rely on them</strong><br><small>User</small><br><small class="controls__note">AI Administrator or Global Administrator. Applies at provider level across Microsoft Copilot and Copilot Studio; default is on for most commercial tenants, No users in EU, EFTA and UK.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Researcher, and so Critique, is available in the tenant at all</strong><br><small>Tenant</small><br><small class="controls__note">Blocks Researcher as a whole, not Critique alone. The Graph call is beta and requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for Critique separate from Researcher and the Anthropic setting</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no Critique-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Anthropic subprocessor assignment is applied at the provider level across Microsoft Copilot and Copilot Studio, and only assigned users can use Copilot features or agents that rely on that provider. Critique relies on Claude by the roadmap's description. What Researcher does for an unassigned user (falls back to GPT alone, or hides Critique) is not documented.

For Researcher and Analyst, the **Edit users** panel is disabled, so availability is managed by blocking the agent for the whole tenant. Changing the Anthropic setting needs the AI Administrator or Global Administrator role. The Graph block call requires a Microsoft Agent 365 licence.

## Open questions

- What does Researcher do for a user who is not assigned Anthropic models: answer with GPT alone, or hide Critique?
- Does Critique processing fall under the EU Data Boundary exclusion Microsoft states for Claude models in Researcher, given the FAQ's statement that Researcher adheres to the EU boundary?
- What does the Claude review step receive: the draft only, or also the prompt and the sources Researcher found?
- Will Microsoft add a tenant setting for Critique separate from the Anthropic subprocessor setting?

<!-- rationale
risk: Medium. Critique puts an Anthropic model into Researcher answers, and Microsoft says Claude models in Researcher are excluded from the EU Data Boundary; the existing Anthropic subprocessor setting governs who can use features that rely on Claude.
cost: Low. Researcher is part of the default experience for Microsoft Copilot licensed users; no licence, price or meter specific to Critique is published, so the known cost is admin time.
impact: Medium. Researcher users using Auto encounter the Critique experience described in Microsoft's announcement.
-->
