---
title: "Viva Glint: Rewrite with Copilot for survey comments"
slug: "microsoft-viva-viva-glint-copilot-assisted-commenting-in-glint-survey-taking"
roadmapId: 560595
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint survey takers can ask Copilot to rewrite comments they have written. Microsoft Learn says the setting is off by default, so administrators decide whether and for whom to turn it on in the Microsoft 365 admin center."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn's Copilot in Viva Glint pages require a licence for Viva Glint, Microsoft Viva Suite or Microsoft Viva Workplace Analytics and Employee Feedback, and not a Microsoft Copilot licence. Nothing specific to survey takers is published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["viva-glint","copilot","viva-feature-access-management","privacy","admin-controls","m365-admin-center","user-experience","gcc"]
sources:
  - title: "Copilot in Glint Survey Taking - Rewrite Comments with Copilot"
    url: "https://learn.microsoft.com/viva/glint/setup/rewrite-comments-copilot-viva-glint"
    kind: "learn"
  - title: "Manage Viva Glint Copilot access in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access"
    kind: "learn"
  - title: "Data, privacy, and security for Microsoft Copilot in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/copilot-privacy"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Microsoft Viva: Viva Glint - Copilot assisted commenting in Glint survey taking"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560595"
    kind: "roadmap"
videos: []
related: ["viva-feature-access-management","microsoft-viva-glint-teams-notification-customization","microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center"]
controls:
  - governs: "Whether survey takers can use Rewrite with Copilot, for the organisation or selected users and groups"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Viva Glint > Manage settings for Microsoft Copilot in Viva Glint"
      docs: "https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access"
    api: null
    note: "Route to Glint's Copilot access pane; the pages do not place the Survey Taking setting within it. Global, Viva Glint Tenant or AI Administrator. Off by default."
  - governs: "Whether Rewrite with Copilot can be switched on or off for individual surveys or programmes"
    scope: "other"
    ui: null
    api: null
    note: "The feature page states that the feature cannot be enabled or disabled for individual surveys or programs."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-22"
    note: "New briefing: Rewrite with Copilot in Viva Glint surveys, its off-by-default setting and the gaps in its documented controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 54
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "ebb8cd9ba30668829558b251d660de01"
---

## What's changing

Viva Glint survey takers can use Rewrite with Copilot to get alternative wordings of a comment they have already written. Microsoft Learn describes it as a way to improve clarity, adjust tone and reduce distinctive writing styles that might make comments recognisable, while aiming to preserve the writer's original intent. The suggestions are optional, and the survey taker decides whether to use the feature and whether to accept a rewrite.

Learn says a dedicated setting titled Copilot in Viva Glint Survey Taking in the Microsoft 365 admin center controls the feature, and that the setting is off by default. It can be managed separately from the existing Copilot in Viva Glint setting. It cannot be switched on or off for individual surveys or programs. Survey takers must be authenticated into Glint with Microsoft Entra ID, and the feature is not available when a survey is opened through a personalised link or with attribute-based authentication.

The roadmap item lists the status as Launched, with a target date of September CY2026, release phase General Availability, platform Web and clouds Worldwide (Standard Multi-Tenant) and GCC. Microsoft Learn describes the feature as supporting all languages in Viva Glint's survey experience, including more than 60 languages.

## Why it matters

This feature puts generative AI in front of employees at the moment they write candid feedback, which is the most sensitive step in a Viva Glint survey. The roadmap item frames the benefit as perceived security: reducing identifiable writing patterns and the effort of refining feedback, to encourage participation, longer responses and more candid comments. An administrator who enables it is therefore also making a statement to employees about how their comments are handled.

If nobody acts, Learn says the setting stays off, so survey takers see no change. The decision is whether to switch it on, for whom, and what to tell employees first. Because Learn states that Glint reports and exports do not show which comments were rewritten, survey owners cannot later separate rewritten comments from original ones, so settle the communication and any works council or privacy review before enabling it.

## Risk assessment

**Data exposure**
- The comment text is sent to Copilot to produce suggestions. Learn says the feature temporarily uses the original text, that the text is not retained after the survey taker submits the response, and that unaccepted suggestions are not saved as survey data. The interactions are not used to train generative AI foundation models.
- Where the text is processed for this feature is not described on the pages that cover it. The Copilot in Viva Glint privacy page describes processing for that product's features (Azure OpenAI Service, Microsoft 365 service boundary, regional data residency) but does not name Rewrite with Copilot, so confirm before telling employees that those statements apply.
- Rewritten text can differ from what the person wrote. Learn says the aim is to preserve intent, not that it always does, and reports cannot show which comments were rewritten. Expect some submitted comments to carry wording the respondent did not originally choose.

**Security & identity**
- Access follows the survey taker's Microsoft Entra ID sign-in. Surveys opened through personalised links or attribute-based authentication do not offer the feature, so those respondents are outside any pilot or communication about it.
- Learn says Copilot in Viva Glint is unavailable to Microsoft Entra cross-tenant guest users. It lists Copilot Highlights, the chat panel and comment summarisation as hidden for them and does not mention Rewrite with Copilot, so how this applies to guest survey takers is not stated.

**Autonomy & actions**
- The feature acts only on request and only on text the survey taker wrote. Learn states that Rewrite with Copilot provides rewritten versions of the survey taker's own comments and does not write comments for them. The survey taker chooses whether to accept a suggestion.

**Change & support**
- Nothing changes for survey takers until the setting is turned on. After a change in the admin centre, the Copilot access page says policy changes can take up to 24 hours to reach users, so plan pilots with that delay.
- Learn says some users may see an error about potentially offensive input because the feature follows Azure AI Content Safety harm categories, and that false positives are possible. Survey takers can use the feedback option in the feature to report them. Brief the Viva Glint support contact on this message.

## Cost and licensing

Learn's Manage Viva Glint Copilot access page says a licence for Viva Glint, Microsoft Viva Suite or Microsoft Viva Workplace Analytics and Employee Feedback is required to access Copilot in Viva Glint, and that a Microsoft Copilot licence is not required. The Rewrite with Copilot page names no licence of its own, so treat the Viva Glint licence as the stated requirement and note that nothing specific to survey takers is published.

The Rewrite with Copilot page and the Copilot in Viva Glint privacy page name no meter, credit rate or price for this feature. A rate for this feature is not yet published; confirm with your Microsoft account team if you budget on consumption.

The indirect cost is admin time to configure the setting, communications to employees, and any privacy or works council review of letting an AI service see draft comments.

## Scope

- **Who sees it:** survey takers who authenticate to Glint with Microsoft Entra ID and for whom an administrator has enabled the setting, either organisation-wide or for specific users or groups.
- **Not available:** surveys opened through personalised links or with attribute-based authentication, and any user or organisation for whom Copilot is disabled. It cannot be enabled per survey or per programme.
- **Who configures it:** the Copilot access page says Copilot in Viva Glint can be managed by Global Administrators, Viva Glint Tenant Administrators and AI Administrators.
- **Clouds and platform:** the roadmap item lists Worldwide (Standard Multi-Tenant) and GCC, and the Web platform.
- **Guests:** how cross-tenant guest survey takers are treated is not stated for this feature.

## Governance guidance

### Before rollout
- List which of your Viva Glint surveys are opened through personalised links or attribute-based authentication, because those respondents will not get the feature.
- Agree with your privacy, HR and works council contacts whether employees may use an AI rewrite on survey comments, and what they will be told about how the text is handled.
- Identify who holds the Global Administrator, Viva Glint Tenant Administrator or AI Administrator role to change the setting.
- Decide on a pilot group of Microsoft Entra users or groups rather than the whole organisation.

### At rollout
- Turn on the Copilot in Viva Glint Survey Taking setting for the pilot users or groups in the Microsoft 365 admin center, using the control in the table below.
- Allow up to 24 hours for the change to reach users before judging the pilot, and avoid further changes in that window.
- Tell survey takers that the feature only rewrites their own text, is optional, and that unaccepted suggestions are not saved.

### After rollout
- Ask pilot survey takers for feedback directly, because Glint reports and exports do not show which comments were rewritten.
- Collect reports of the potentially offensive input message and send false positives through the feedback option in the feature.
- Review the scope and widen or narrow it using the same setting, and recheck the Learn pages for a per-survey control or further detail.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether survey takers can use Rewrite with Copilot, for the organisation or selected users and groups</strong><br><small>Tenant</small><br><small class="controls__note">Route to Glint's Copilot access pane; the pages do not place the Survey Taking setting within it. Global, Viva Glint Tenant or AI Administrator. Off by default.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Viva Glint › Manage settings for Microsoft Copilot in Viva Glint <a href="https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Rewrite with Copilot can be switched on or off for individual surveys or programmes</strong><br><small class="controls__note">The feature page states that the feature cannot be enabled or disabled for individual surveys or programs.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The feature page describes one dedicated setting, titled Copilot in Viva Glint Survey Taking, and says it can be managed independently of the existing Copilot in Viva Glint setting. The path in the table is the route to Copilot in Viva Glint access that the feature page links for guidance, and the pages read do not say where the Survey Taking setting sits within it. Learn does not name the featureId for this setting in the Viva Feature Access Management PowerShell documentation at the time of writing (November 2026), so the table gives no call.

The Copilot access page says Global Administrators, Viva Glint Tenant Administrators and AI Administrators can manage Copilot in Viva Glint, and that policy changes can take up to 24 hours to take effect. Learn states that the setting cannot be applied to individual surveys or programs.

## Open questions

- Where does the Copilot in Viva Glint Survey Taking setting appear in the Microsoft 365 admin center, and is it manageable through Viva Feature Access Management PowerShell with a documented featureId? Watch the Manage Viva Glint Copilot access page.
- The Rewrite with Copilot page lists Copilot being disabled for the user or organisation as a case where the feature is unavailable. Does that mean the existing Copilot in Viva Glint setting, the Survey Taking setting, or both?
- Do the data processing, residency and EU Data Boundary statements on the Copilot in Viva Glint privacy page apply to Rewrite with Copilot?
- Is the feature available to cross-tenant guest survey takers, and do survey takers need a Viva Glint licence of their own to use it?

<!-- rationale
risk: Low. Microsoft Learn says the Copilot in Viva Glint Survey Taking setting is off by default, and the feature only rewrites text the survey taker has already written.
cost: Low. The only cost the pages show is admin time and communications. Learn names a Viva Glint licence for Copilot in Viva Glint and no Microsoft Copilot licence; no meter for this feature is published.
impact: Low. Nobody sees the feature until an administrator turns the setting on; after that, the people who notice are survey takers who write comments.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions: processing, residency and EU Data Boundary / absence: Microsoft has not described processing or established the applicability of its Copilot in Viva Glint processing and residency statements to this feature. | Found: When using Copilot in Viva Glint features (such as comment summarization in Copilot in Viva Glint), raw survey responses, prompts, and respondent user attributes are processed entirely within the Microsoft 365 service boundary. | Fix: Replace the second Data exposure bullet with: 'Microsoft states that Copilot in Viva Glint features process raw survey responses, prompts and respondent user attributes within the Microsoft 365 service boundary, use Microsoft-hosted models through Azure OpenAI Service, and align LLM processing with Viva Glint data-residency commitments for the tenant region.' Keep the existing citation https://learn.microsoft.com/viva/glint/setup/copilot-privacy. Remove the Open question asking whether these product-wide statements apply to Rewrite with Copilot; the page states their reach for Copilot in Viva Glint features, not only its summarisation example. | Source: https://learn.microsoft.com/viva/glint/setup/copilot-privacy
- [contradicted, blocker] Risk assessment: Security & identity; Scope: Guests; Open questions: guests / absence: How the cross-tenant guest restriction applies to guest survey takers using this feature is not stated. | Found: Cross-tenant guest users are evaluated separately from VFAM precedence. Copilot in Viva Glint is unavailable to these users regardless of the organization-wide setting or any custom policy. | Fix: Replace the guest caveat in Risk assessment and Scope with: 'Copilot in Viva Glint is unavailable to Microsoft Entra cross-tenant guest users regardless of the organisation-wide setting or any custom policy.' Cite https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access. Remove the guest-availability part of the final Open question. The page's examples introduced by 'including' do not limit its product-wide guest restriction. | Source: https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access
-->
