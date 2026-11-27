---
title: "Microsoft 365 Copilot: Model Council in Researcher runs Anthropic and OpenAI models side by side"
slug: "m365-copilot-researcher-council"
roadmapId: 553213
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Researcher gains a Model Council mode that sends one question to an Anthropic and an OpenAI model and compares the reports. Users pick it; admins decide through the AI provider settings, Frontier and the Researcher block."
status: "in-development"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Researcher FAQ says Researcher is part of the core default experience for Microsoft Copilot licensed users; Frontier features for Copilot need a Microsoft Copilot licence. No Council-specific licence or price is published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["researcher","m365-copilot","anthropic","model-selector","frontier-program","eu-data-boundary"]
sources:
  - title: "Microsoft 365 Roadmap 553213"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=553213"
    kind: "roadmap"
  - title: "Introducing multi-model intelligence in Researcher"
    url: "https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-multi-model-intelligence-in-researcher/4506011"
    kind: "blog"
  - title: "Microsoft Copilot Researcher agent frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/faq-researcher"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "OpenAI as a subprocessor in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/openai-subprocessor"
    kind: "learn"
  - title: "Assign AI provider access to users and groups"
    url: "https://learn.microsoft.com/copilot/implement/copilot-ai-provider-user-sec-group-access"
    kind: "learn"
  - title: "Get started with the Microsoft Frontier Program"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "May 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-may#2026-agents-move-into-action"
    kind: "learn"
  - title: "Which users may use Anthropic (Claude) models, and so run Council (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Whether Researcher, including Council, is blocked for the whole organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether Researcher, including Council, is blocked for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["frontier-program","data-residency","web-search","agent-registry"]
controls:
  - governs: "Which users may use Anthropic (Claude) models, and so run Council"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. Assignments apply at provider level across Microsoft Copilot and Copilot Studio. Off by default in the EU, EFTA and UK."
  - governs: "Which users may use OpenAI-operated models"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > OpenAI > Choose which users can access OpenAI operated models"
      docs: "https://learn.microsoft.com/copilot/implement/openai-subprocessor"
    api: null
    note: "Affects only models operated by OpenAI; Microsoft-operated GPT models stay available. Not confirmed to stop Council's OpenAI model."
  - governs: "Which users are enrolled in Frontier, where Council is in preview"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Copilot Frontier > Turn on Frontier"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    api: null
    note: "The Tenant Configuration Management frontier resource is described as controlling experimental Frontier features in Microsoft 365 web apps, not this enrolment."
  - governs: "Whether Researcher, including Council, is blocked for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Removes Researcher entirely, not Council alone; Edit users is disabled for Researcher. The Package Management API requires a Microsoft Agent 365 licence."
  - governs: "Tenant switch for Council alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no Council-specific setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-08-04T22:45:42"
changes:
  - date: "2026-11-27"
    note: "New briefing: Model Council in Researcher, its Anthropic and OpenAI model use, and the provider, Frontier and Researcher block controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 68 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected after the independent check: action is now review; removed unsupported statements on how work content reaches each model, on identity and on report-only behaviour."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "510cb2667202be6bb5d46ac286d34dd6"
---

## What's changing

Researcher, the deep research agent in Microsoft 365 Copilot, gains **Council**: one question is run through models from different providers in parallel, so the user can compare the outputs and see where they agree and conflict.

Microsoft Learn has no page for Council yet. Microsoft's announcement on the Microsoft Copilot Blog (30 March 2026) describes it: Council is available when **Model Council** is selected in the model picker in Researcher, and it runs an Anthropic and an OpenAI model simultaneously, each producing a complete, standalone report. A dedicated judge model then evaluates both reports and writes a summary of key findings, where the models agree or diverge, and what each contributed. It sits beside **Critique**, the default Researcher mode under **Auto**, which also combines models from Anthropic and OpenAI.

The blog says Council has been broadly available in the Microsoft Frontier program (Microsoft's opt-in preview for pre-release features) since March 2026. The roadmap item is **In development**, with a preview date of March CY2026 and a general availability target of December CY2026, for the Worldwide cloud on desktop and web. Microsoft has not said whether Council will still need Frontier enrolment once it reaches general availability.

## Why it matters

Council runs an Anthropic and an OpenAI model simultaneously; Microsoft has not documented how retrieved work content is distributed between those models. Whether that is acceptable is a data-processing decision, not a feature decision: Microsoft's Anthropic page says Claude models in Researcher are excluded from the EU Data Boundary and in-country processing commitments, while the Researcher FAQ says Researcher adheres to the EU and Microsoft 365 boundaries. Tenants that left Anthropic at its default (on outside the EU/EFTA and UK) have, in effect, already said yes.

Council is something each user chooses in the model picker, so nothing runs through it until someone selects it. With the general availability target only days away, the time to confirm the Anthropic and OpenAI provider assignments, and to tell Researcher users what a Council report is and is not, is before December 2026.

## Risk assessment

**Data exposure**
- Each Council run uses an Anthropic model. Claude models in Researcher are excluded from the EU Data Boundary per Microsoft's Anthropic page, while the Researcher FAQ says Researcher adheres to the EU and Microsoft 365 boundaries; the two pages disagree. The **AI providers operating as Microsoft subprocessors** setting decides who can use Anthropic models.
- The FAQ says that, by default, the content of Researcher sessions isn't directly accessible to admins or compliance tools, so Council reports are not something to plan an eDiscovery process around.

**Security & identity**
- Microsoft has not documented a Council-specific account or permission at the time of writing (November 2026). Provider access is assigned to users or Microsoft Entra ID security groups, up to 999 combined assignments per AI provider.

**Autonomy & actions**
- The Council announcement describes report generation and comparison; it does not describe actions on data. The risk is decision quality: a judge model's summary of agreement can be read as verification. Users should still check the citations.

**Change & support**
- During preview, Frontier features carry no HIPAA Business Associate Agreement coverage and do not comply with ISO 27001, 27002 or 27018, according to the Frontier page. Regulated teams enrolled in Frontier should not use Council for regulated content.
- Expect support calls from EU/EFTA and UK users who cannot see Council: Claude models are off by default there, and a Frontier feature that relies on a provider the admin has not enabled is not usable.

## Cost and licensing

- **Licence:** the Researcher FAQ says Researcher is part of the core default experience for Microsoft Copilot licensed users. The Frontier page says users need a Microsoft Copilot licence, or a licence that includes access to Copilot, to use Frontier features for Copilot.
- **Meter:** no meter or price specific to Council is published at the time of writing (November 2026). The Frontier page notes that certain Frontier experiences may only be available on a paid basis.
- **Limits:** the Researcher FAQ gives a maximum of 25 queries per user per month for Researcher. Microsoft has not said how a Council run counts against it.
- **Indirect costs:** admin time to review AI provider assignments and Frontier enrolment, and guidance for users on reading Council reports.

## Scope

- **Users:** Researcher users with a Microsoft Copilot licence; during preview, only users enrolled in Frontier.
- **Providers:** Council needs Anthropic models. These are on by default for most commercial customers and off by default (**No users**) in the EU, EFTA and UK, per Microsoft's Anthropic page.
- **Roles:** the AI provider settings need the AI Administrator or Global Administrator role.
- **Clouds and platforms:** the roadmap item lists Worldwide (Standard Multi-Tenant), desktop and web. It does not list the US Government clouds.
- **Rollout:** release phases listed are Preview, Targeted Release and General Availability; general availability is targeted for December CY2026.

## Governance guidance

### Before rollout
- Check who is assigned under **Choose who can access Anthropic models for Copilot and generative AI experiences**, because that list decides who can run Council at all.
- Decide, with your data protection officer, whether Anthropic processing outside the EU Data Boundary is acceptable for Researcher work, and set the Anthropic assignment to match.
- Check who is enrolled in **Copilot Frontier**, since Council is a Frontier feature during preview and Frontier lacks HIPAA BAA and ISO 27001 coverage.
### At rollout
- Tell Researcher users that **Model Council** runs an Anthropic and an OpenAI model simultaneously, and that the judge's summary is not a fact check.
- Block Researcher under **Agents > All agents** only if your organisation cannot accept multi-provider processing, since this removes Researcher for everyone.
### After rollout
- Watch Message center and the Researcher FAQ for a Council-specific setting or a change to the 25-query monthly limit.
- Recheck the AI provider assignments when Microsoft adds providers, since assignments apply to all current and future third-party model providers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users may use Anthropic (Claude) models, and so run Council</strong><br><small>User</small><br><small class="controls__note">AI Administrator or Global Administrator. Assignments apply at provider level across Microsoft Copilot and Copilot Studio. Off by default in the EU, EFTA and UK.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use OpenAI-operated models</strong><br><small>User</small><br><small class="controls__note">Affects only models operated by OpenAI; Microsoft-operated GPT models stay available. Not confirmed to stop Council's OpenAI model.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › OpenAI › Choose which users can access OpenAI operated models <a href="https://learn.microsoft.com/copilot/implement/openai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users are enrolled in Frontier, where Council is in preview</strong><br><small>User</small><br><small class="controls__note">The Tenant Configuration Management frontier resource is described as controlling experimental Frontier features in Microsoft 365 web apps, not this enrolment.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Copilot Frontier › Turn on Frontier <a href="https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Researcher, including Council, is blocked for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Removes Researcher entirely, not Council alone; Edit users is disabled for Researcher. The Package Management API requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for Council alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no Council-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Council-specific switch is documented. Council is reached through three wider controls: the Anthropic provider assignment (the decisive one, since Council always runs an Anthropic model), Frontier enrolment during preview, and the tenant-wide Researcher block. The Frontier page says Frontier never enables AI providers on your behalf, and a Frontier feature that relies on a provider you have not enabled is not usable.

The OpenAI subprocessor setting controls only models operated by OpenAI; Microsoft-operated (Azure OpenAI) models stay available when it is off. Microsoft has not said which kind of OpenAI model Council uses, so turning OpenAI off may not stop Council.

The provider settings need the AI Administrator or Global Administrator role. The Researcher FAQ also names the tenant web search toggle: if web search is off, Researcher won't use web data (see /concepts/web-search/).

## Open questions

- Will Council at general availability (target December CY2026) still need Frontier enrolment, or appear for every Researcher user? Watch Message center.
- Which provider's model is the judge that writes the summary, and is Council's OpenAI model operated by OpenAI or by Microsoft? Watch the Researcher FAQ.
- Does one Council run count as one or more of the 25 Researcher queries per user per month?
- Will Microsoft add a Council-specific admin setting, or a Microsoft Graph API for the AI provider assignments?
- How will Microsoft reconcile the Researcher FAQ's EU boundary statement with the Anthropic page's EU Data Boundary exclusion for Council runs?

<!-- rationale
risk: Medium. Council always runs an Anthropic model, and Microsoft's Anthropic page says Claude models in Researcher are excluded from the EU Data Boundary; the AI provider settings control who can use them.
cost: Low. Researcher comes with the Microsoft Copilot licence according to the Researcher FAQ; no Council-specific price or meter is published, so the known cost is admin time and user guidance.
impact: Medium. Only Researcher users who choose Model Council in the model picker notice it, typically analysts and decision-makers preparing high-stakes reports.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].api; Governance controls table / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage. ... POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block ... Use of these APIs in production applications is not supported. | Fix: Append to controls[3].note: 'The blocking API is beta, subject to change and unsupported for production applications.' The reference is https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [supported, minor] What's changing / absence: Learn has no dedicated Council feature page yet, although the briefing says it has no page for Council. | Found: Council (in Researcher) runs a single prompt across multiple models in parallel and surfaces where they agree, disagree, and add unique value | Fix: Replace 'Microsoft Learn has no page for Council yet.' with 'Microsoft Learn mentions Council in its May 2026 announcements, but does not yet provide a dedicated Council feature page.' Retain the cited May announcements URL. | Source: https://learn.microsoft.com/partner-center/announcements/2026-may#2026-agents-move-into-action
-->
