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
  - date: "2026-11-22"
    note: "Corrected after verification: the data-processing bullet now states what the Copilot in Viva Glint privacy page says, and the guest-user restriction is stated as Learn gives it."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: removed the controls-table row that gave the existing Copilot in Viva Glint pane's path as the Survey Taking setting's location, which Microsoft does not document."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 54
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "40f27efef66d8864556f27c31e6f3bd3"
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
- Microsoft states that Copilot in Viva Glint features process raw survey responses, prompts and respondent user attributes within the Microsoft 365 service boundary, use Microsoft-hosted models through Azure OpenAI Service, and align LLM processing with Viva Glint data-residency commitments for the tenant region.
- Rewritten text can differ from what the person wrote. Learn says the aim is to preserve intent, not that it always does, and reports cannot show which comments were rewritten. Expect some submitted comments to carry wording the respondent did not originally choose.

**Security & identity**
- Access follows the survey taker's Microsoft Entra ID sign-in. Surveys opened through personalised links or attribute-based authentication do not offer the feature, so those respondents are outside any pilot or communication about it.
- Copilot in Viva Glint is unavailable to Microsoft Entra cross-tenant guest users regardless of the organisation-wide setting or any custom policy.

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
- **Guests:** Copilot in Viva Glint is unavailable to Microsoft Entra cross-tenant guest users regardless of the organisation-wide setting or any custom policy.

## Governance guidance

### Before rollout
- List which of your Viva Glint surveys are opened through personalised links or attribute-based authentication, because those respondents will not get the feature.
- Agree with your privacy, HR and works council contacts whether employees may use an AI rewrite on survey comments, and what they will be told about how the text is handled.
- Identify who holds the Global Administrator, Viva Glint Tenant Administrator or AI Administrator role to change the setting.
- Decide on a pilot group of Microsoft Entra users or groups rather than the whole organisation.

### At rollout
- Turn on the Copilot in Viva Glint Survey Taking setting for the pilot users or groups in the Microsoft 365 admin center. Microsoft documents the setting but does not give its exact navigation path.
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
<tr><td data-label="Control"><strong>Whether Rewrite with Copilot can be switched on or off for individual surveys or programmes</strong><br><small class="controls__note">The feature page states that the feature cannot be enabled or disabled for individual surveys or programs.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The feature page describes one dedicated setting, titled Copilot in Viva Glint Survey Taking, and says it can be managed independently of the existing Copilot in Viva Glint setting. Microsoft documents the setting but does not give its exact navigation path, so the table has no row for it; the feature page links to [Manage Copilot access in the Microsoft 365 admin center](https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access) for guidance. Learn does not name the featureId for this setting in the Viva Feature Access Management PowerShell documentation at the time of writing (November 2026), so no call is given.

The Copilot access page says Global Administrators, Viva Glint Tenant Administrators and AI Administrators can manage Copilot in Viva Glint, and that policy changes can take up to 24 hours to take effect. Learn states that the setting cannot be applied to individual surveys or programs.

## Open questions

- Where does the Copilot in Viva Glint Survey Taking setting appear in the Microsoft 365 admin center, and is it manageable through Viva Feature Access Management PowerShell with a documented featureId? Watch the Manage Viva Glint Copilot access page.
- The Rewrite with Copilot page lists Copilot being disabled for the user or organisation as a case where the feature is unavailable. Does that mean the existing Copilot in Viva Glint setting, the Survey Taking setting, or both?
- Do survey takers need a Viva Glint licence of their own to use it?

<!-- rationale
risk: Low. Microsoft Learn says the Copilot in Viva Glint Survey Taking setting is off by default, and the feature only rewrites text the survey taker has already written.
cost: Low. The only cost the pages show is admin time and communications. Learn names a Viva Glint licence for Copilot in Viva Glint and no Microsoft Copilot licence; no meter for this feature is published.
impact: Low. Nobody sees the feature until an administrator turns the setting on; after that, the people who notice are survey takers who write comments.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The checklist tells readers to enable and review the Survey Taking access setting without a matching controls-table row. | Found: Turn on the Copilot in Viva Glint Survey Taking setting for the pilot users or groups in the Microsoft 365 admin center. / Microsoft documents the setting but does not give its exact navigation path, so the table has no row for it | Fix: The At rollout step beginning 'Turn on the Copilot in Viva Glint Survey Taking setting' and the After rollout step beginning 'Review the scope' name an access control with no table row. Remove those checklist directives; retain the documented setting and navigation gap in Governance controls.
-->
