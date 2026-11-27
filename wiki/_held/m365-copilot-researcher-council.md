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
action: "act-now"
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
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 64
  unconfirmed: 3
  contradicted: 1
  attempts: 1
  hash: "39e49b7993d255fe0c3142c340667f23"
---

## What's changing

Researcher, the deep research agent in Microsoft 365 Copilot, gains **Council**: one question is run through models from different providers in parallel, so the user can compare the outputs and see where they agree and conflict.

Microsoft Learn has no page for Council yet. Microsoft's announcement on the Microsoft Copilot Blog (30 March 2026) describes it: Council is available when **Model Council** is selected in the model picker in Researcher, and it runs an Anthropic and an OpenAI model simultaneously, each producing a complete, standalone report. A dedicated judge model then evaluates both reports and writes a summary of key findings, where the models agree or diverge, and what each contributed. It sits beside **Critique**, the default Researcher mode under **Auto**, which also combines models from Anthropic and OpenAI.

The blog says Council has been broadly available in the Microsoft Frontier program (Microsoft's opt-in preview for pre-release features) since March 2026. The roadmap item is **In development**, with a preview date of March CY2026 and a general availability target of December CY2026, for the Worldwide cloud on desktop and web. Microsoft has not said whether Council will still need Frontier enrolment once it reaches general availability.

## Why it matters

In Council, every run sends the same prompt, and the work data Researcher retrieves for it, to an Anthropic model as well as an OpenAI model. Whether that is acceptable is a data-processing decision, not a feature decision: Microsoft's Anthropic page says Claude models in Researcher are excluded from the EU Data Boundary and in-country processing commitments, while the Researcher FAQ says Researcher adheres to the EU and Microsoft 365 boundaries. Tenants that left Anthropic at its default (on outside the EU/EFTA and UK) have, in effect, already said yes.

Council is something each user chooses in the model picker, so nothing runs through it until someone selects it. With the general availability target only days away, the time to confirm the Anthropic and OpenAI provider assignments, and to tell Researcher users what a Council report is and is not, is before December 2026.

## Risk assessment

**Data exposure**
- Each Council run uses an Anthropic model. Claude models in Researcher are excluded from the EU Data Boundary per Microsoft's Anthropic page, while the Researcher FAQ says Researcher adheres to the EU and Microsoft 365 boundaries; the two pages disagree. The **AI providers operating as Microsoft subprocessors** setting decides who can use Anthropic models.
- The FAQ says that, by default, the content of Researcher sessions isn't directly accessible to admins or compliance tools, so Council reports are not something to plan an eDiscovery process around.

**Security & identity**
- No change to identity: Microsoft describes no new account or permission for Council. Provider access is assigned to users or Microsoft Entra ID security groups, up to 999 combined assignments per AI provider.

**Autonomy & actions**
- Council produces reports only; the blog describes no actions on data. The risk is decision quality: a judge model's summary of agreement can be read as verification. Users should still check the citations.

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
- Tell Researcher users that **Model Council** sends their question and retrieved work content to an Anthropic and an OpenAI model, and that the judge's summary is not a fact check.
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

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters; Governance guidance: At rollout / behaviour: Every Council run sends the work data Researcher retrieves to both the Anthropic and the OpenAI model. | Found: Searched: Researcher Council same prompt retrieved enterprise data sent Anthropic OpenAI models permissions account actions. Opened Council blog, Researcher overview and FAQ, AI Subprocessors overview and both provider pages; none specifies this per-model grounding-data distribution. | Fix: In Why it matters replace the opening sentence with 'Council runs an Anthropic and an OpenAI model simultaneously; Microsoft has not documented how retrieved work content is distributed between those models.' In Governance guidance replace 'sends their question and retrieved work content to an Anthropic and an OpenAI model' with 'runs an Anthropic and an OpenAI model simultaneously'. The announcement documents parallel reports, not the asserted work-content routing.
- [unsupported, major] Risk assessment: Security & identity / behaviour: Council makes no change to identity. | Found: Searched: '"Council" "Researcher" "permissions"' and Researcher Council same prompt retrieved enterprise data sent Anthropic OpenAI models permissions account actions. Opened Council blog, provider guidance and Researcher FAQ; none states that Council makes no identity change. | Fix: Replace 'No change to identity: Microsoft describes no new account or permission for Council' with 'Microsoft has not documented a Council-specific account or permission at the time of writing (November 2026)'. Lack of a documented change does not establish that there is no change.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Council produces reports only. | Found: Searched: Researcher Council same prompt retrieved enterprise data sent Anthropic OpenAI models permissions account actions. Opened Council blog and Researcher overview and FAQ; they describe reports but do not state an exhaustive report-only restriction. | Fix: Replace 'Council produces reports only; the blog describes no actions on data' with 'The Council announcement describes report generation and comparison; it does not describe actions on data'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / absence: Microsoft Learn has no page for Council yet. | Found: Searched: '"Council" "Researcher"' and '"Researcher" "Council" "admin"'; opened Researcher overview and FAQ. No dedicated Council page found; Learn's May 2026 Partner Center announcements do describe Council. | Fix: Replace 'Microsoft Learn has no page for Council yet' with 'No dedicated Microsoft Learn configuration page for Council was found at the time of writing (November 2026)'; Learn does mention Council at https://learn.microsoft.com/partner-center/announcements/2026-may#2026-agents-move-into-action.
- [supported, minor] summary; Why it matters; Governance guidance: At rollout / behaviour: Council runs the same question or prompt across multiple models. | Found: Council (in Researcher) runs a single prompt across multiple models in parallel and surfaces where they agree, disagree, and add unique value | Fix: Add https://learn.microsoft.com/partner-center/announcements/2026-may#2026-agents-move-into-action to sources as 'May 2026 announcements'. | Source: https://learn.microsoft.com/partner-center/announcements/2026-may#2026-agents-move-into-action
- [supported, minor] controls[2].ui; Governance guidance: Before rollout / admin-path: Frontier enrolment is managed at Microsoft 365 admin center > Copilot > Settings > View all > Copilot Frontier > Turn on Frontier. | Found: go to Copilot > Settings. Select the View all tab. Select Copilot Frontier. To opt in to Frontier preview, toggle Turn on Frontier to On. Choose how Frontier access is assigned in your organization | Fix: For the row governing which users are enrolled, extend the existing path to 'Copilot > Settings > View all > Copilot Frontier > Turn on Frontier > Specific users and groups'; note that All users is the alternative assignment. The current path reaches the correct pane but stops before its user assignment. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier
- [supported, minor] controls[3].api / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block APIs under the /beta version are subject to change. Use of these APIs in production applications is not supported. | Fix: Keep the call unchanged and append to controls[3].note: 'The Graph blocking API is beta, subject to change, and not supported for production applications.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, minor] front matter: action; front matter: defaultState; Why it matters / consistency: The act-now rating fits the standard for an optional mode that users must choose. | Found: action: "act-now"; defaultState: "user-opt-in"; "Council is something each user chooses in the model picker, so nothing runs through it until someone selects it." | Fix: Set action to 'review'. Under the assessment scale, an optional capability is review when no verified source says existing behaviour changes without a choice; proximity of the GA target alone does not meet the act-now definition.
-->
