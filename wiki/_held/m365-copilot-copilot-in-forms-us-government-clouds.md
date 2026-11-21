---
title: "Microsoft Forms: Copilot in Forms for US Government clouds"
slug: "m365-copilot-copilot-in-forms-us-government-clouds"
roadmapId: 561485
topic: "m365-copilot"
products: ["Forms","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in Forms is rolling out to GCC, GCC High and DoD, covering drafting, sending, Copilot Insights and on-canvas editing. Licensing, default state and an admin switch are not yet published, so plan before users find it."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Microsoft Learn calls Microsoft 365 Copilot an add-on plan and lists Forms question drafting among the in-app features of Microsoft 365 Copilot (Basic). The licence for each feature in GCC, GCC High and DoD is not yet published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["microsoft-forms","m365-copilot","copilot","ai","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 561485"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561485"
    kind: "roadmap"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Administrator settings for Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/administrator-settings-microsoft-forms"
    kind: "learn"
  - title: "Admin information"
    url: "https://learn.microsoft.com/microsoft-forms/admin-information"
    kind: "learn"
  - title: "Set up Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/set-up-microsoft-forms"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "The Copilot Suggestions in Microsoft Forms are disruptive and unwanted. - Microsoft Q&A"
    url: "https://learn.microsoft.com/answers/a/12621246"
    kind: "docs"
videos: []
related: ["m365-copilot-copilot-in-powerpoint-for-government-clouds","m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds"]
controls:
  - governs: "Whether Copilot in Forms is available to users in the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "Existing Forms controls (Conditional Access on the Microsoft Forms cloud app, Forms admin settings) do not name Copilot in Forms."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-21"
    note: "First briefing for Copilot in Forms in the US Government clouds; licence, default state and an admin switch are not yet published."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 48
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "b810193cca61e5faf9c6a5b53262e880"
---

## What's changing

Microsoft is enabling Copilot in Microsoft Forms for the US Government clouds (GCC, GCC High and DoD). The roadmap item describes AI help across the life of a form: creating it, refining it, sending it and analysing the results.

The roadmap item names four groups of features: Draft with Copilot, distribution and monitoring, Copilot Insights, and on-canvas Copilot features such as Rewrite question, Continue writing and Answer explanations. The item lists Web as the only platform and General Availability as the release phase.

The roadmap status is Rolling out, with a target date of September CY2026. That target has passed, so treat the rollout as in progress in your tenant rather than complete. No Message center post was supplied with the item. Microsoft Learn has no page for the Government-cloud version of these features, so what this briefing says about behaviour comes from the roadmap description. Microsoft has not stated what happens on arrival, such as whether the features appear automatically for eligible users.

## Why it matters

Copilot in Forms adds a generative AI layer to a tool that many organisations use to collect staff, citizen and supplier responses. Drafting works from what a user types or references. Copilot Insights works on the responses a form has collected, and responses are often the sensitive part.

Microsoft has not stated whether the features switch on for users automatically or what licence each needs in these clouds. Plan on users meeting them during the rollout, and settle your position on licensing and acceptable use before they do.

## Risk assessment

**Data exposure**
- Copilot Insights is described by the roadmap item as analysing results, so form responses become input to Copilot. Identify forms that collect personal or sensitive answers before staff use Insights on them.
- Microsoft Learn states that Microsoft Copilot in the US Government clouds operates within the customer's government cloud tenant and that prompts, responses and generated content stay in the government cloud. That page describes Microsoft Copilot in general and does not mention Forms, so confirm it covers these features.

**Security & identity**
- No change is documented to how users sign in to Forms. Microsoft Learn documents Forms access control through Microsoft Entra Conditional Access applied to the Microsoft Forms cloud app; this is an existing control and not specific to Copilot.

**Autonomy & actions**
- The roadmap item lists distribution and monitoring among the features, and the Learn release notes describe drafting and sending invitations in a separate commercial roadmap item (553136). Whether Copilot in Forms in the US Government clouds sends anything without a person confirming it is not yet documented.

**Change & support**
- No documented admin switch turns Copilot in Forms off, so the support route for unwanted use is user guidance, not a setting. Brief the service desk before the rollout reaches users.

## Cost and licensing

The licence for Copilot in Forms in the US Government clouds is not yet published. What Microsoft Learn does state is general. The Microsoft 365 Copilot service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. The Microsoft Copilot overview lists "Forms: Draft questions to create surveys, polls and other forms" among the in-app features of Microsoft 365 Copilot (Basic), which it defines as users without the Copilot add-on licence.

The Learn release notes list a separate roadmap item (553136) for a Copilot chat pane in Forms and say it is available to Microsoft 365 Copilot licensed business users. That item is not this one, so do not assume the same licence split applies in GCC, GCC High or DoD.

No meter or credit rate for Copilot in Forms is published. Indirect cost is admin time: licence review, user guidance and checking Message center.

## Scope

The roadmap item covers GCC, GCC High and DoD, on the Web platform, at General Availability, with status Rolling out and a target of September CY2026.

The Microsoft Copilot service description does not list a Forms row in its feature availability table for the US Government clouds. Whether availability differs between GCC, GCC High and DoD is not stated by Microsoft Learn; the roadmap item lists all three. The roles that manage Copilot in Forms and any prerequisites are not yet documented.

## Governance guidance

### Before rollout
- Check Message center and the roadmap item for the rollout window in your cloud, as Microsoft has not stated the default state.
- Identify the forms in use that collect personal or sensitive responses and ask the owners whether they plan to use Copilot Insights on them.
- Ask your Microsoft account team or licensing partner which Microsoft 365 Copilot licence covers Copilot in Forms in your government cloud.
- Write the acceptable-use guidance for AI on survey responses, covering who may use Insights and on which forms.

### At rollout
- Test Copilot in Forms with a pilot owner on a non-sensitive form and note what Draft with Copilot, distribution and Insights show.
- Brief the service desk and form owners that the new Copilot options are arriving.
- Record the date the options first appear in your tenant against the roadmap target of September CY2026.

### After rollout
- Review reported problems and decide whether the lack of a documented switch is acceptable under your policy.
- Re-check Microsoft Learn for a Government-cloud page covering Copilot in Forms and update your guidance when one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in Forms is available to users in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Existing Forms controls (Conditional Access on the Microsoft Forms cloud app, Forms admin settings) do not name Copilot in Forms.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table records a control that is not yet documented. Microsoft Forms has admin settings in the Microsoft 365 admin center (external sharing, recording names, phishing protection and Bing and YouTube), but the Learn page for them lists no Copilot setting and states that the settings are available for Office 365 Education and Microsoft 365 Apps for business customers. Do not treat them as a control over Copilot in Forms.

A Microsoft Q&A moderator answer states that Microsoft Forms has no user-facing option to disable Copilot suggestions during form creation. That is a community answer and not Microsoft's product documentation, so confirm with Microsoft before relying on it.

## Open questions

- Which Microsoft 365 Copilot licence, if any, does each Copilot in Forms feature need in GCC, GCC High and DoD? Watch the Microsoft Copilot service description and Message center.
- Are the features on by default for eligible users, and can an administrator turn them off for a tenant or group, or by script? Watch Message center and the Forms admin documentation.
- Does the Copilot data-boundary statement for the US Government clouds apply to Draft with Copilot and Copilot Insights in Forms?
- Does the rollout differ between GCC, GCC High and DoD, given that Microsoft says feature availability aligns with each environment's boundaries?

<!-- rationale
risk: Medium. Copilot in Forms covers form drafting and the analysis of responses, and Microsoft Learn documents no admin switch for it at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin time and licence checking; which Microsoft 365 Copilot licence covers each Copilot in Forms feature in the US Government clouds is not yet published.
impact: Medium. Anyone who builds or sends forms, such as survey owners, HR and communications teams, will see new Copilot options in Forms; Microsoft has not stated who is licensed for them.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: licensing.model / licensing: The government-cloud feature has a mixed licensing model. | Found: Searched: Microsoft Forms Copilot government licensing GCC 561485; Copilot in Forms government GCC licensing prerequisites default. Read Copilot overview, service description and license options; none establishes a mixed entitlement split for this government-cloud feature. | Fix: Replace licensing.model 'mixed' with 'unknown' for the government-cloud per-feature entitlement split; retain the notes distinguishing the published general Copilot licensing from the unpublished government-cloud split. Do not infer mixed entitlement from commercial feature documentation.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / applicability: The government-cloud Copilot data-boundary statement is unconfirmed for Copilot in Forms because the overview does not name Forms. | Found: Microsoft Copilot is available in GCC, GCC High, and DoD, and operates entirely within the customer's U.S. government cloud tenant. ... Prompts, responses, and generated content stay in the government cloud. | Fix: Delete 'That page describes Microsoft Copilot in general and does not mention Forms, so confirm it covers these features' and the corresponding data-boundary open question. Retain the preceding general government-cloud Copilot statement and its citation; the stated reach includes this Copilot capability. | Source: https://learn.microsoft.com/copilot/plan/gov-overview
- [contradicted, blocker] Risk assessment: Change & support / applicability: The response to unwanted Copilot use is user guidance rather than any setting. | Found: When you turn off Microsoft Forms for a user, that person can't use Microsoft Forms. ... You can also choose to turn off or turn on Microsoft Forms for your entire organization. | Fix: Replace the sentence with 'Microsoft Learn documents no separate Copilot in Forms off switch at the time of writing (November 2026).' Remove 'so the support route for unwanted use is user guidance, not a setting'; blocking Forms itself remains a documented broader control. | Source: https://learn.microsoft.com/microsoft-forms/administrator-settings-microsoft-forms
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Forms drafting works from user-entered prompts. | Found: Use natural language to describe the form you need, and Copilot will generate it for you. | Fix: Cite https://learn.microsoft.com/microsoft-365/copilot/release-notes-archive#february,-2024 for the statement that drafting uses user-entered descriptions. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes-archive#february,-2024
- [supported, minor] Why it matters / behaviour: Forms drafting can use material the user references. | Found: When creating a form with Copilot, users can now reference existing documents such as Word, Excel, and PowerPoint. Users can also reference an existing form by pasting the form's URL into the prompt box. | Fix: Cite https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#may-29,-2025 for reference-based drafting, and introduce this sentence with 'Microsoft documents Forms drafting generally as follows' rather than presenting it as government-specific documentation. | Source: https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#may-29,-2025
- [supported, minor] Why it matters; Risk assessment: Data exposure / behaviour: Forms Copilot insights analyse the collected form responses. | Found: When your form data is ready, Copilot can help you analyze and arrive at insights for your form. From the responses page, Copilot can provide early insights to help you get a quick overview. | Fix: Cite https://techcommunity.microsoft.com/blog/microsoftformsblog/introducing-new-agentic-features-for-copilot-in-forms-%E2%80%93-create-refine-and-share-/4406237 for the factual premise that insights use collected responses. | Source: https://techcommunity.microsoft.com/blog/microsoftformsblog/introducing-new-agentic-features-for-copilot-in-forms-%E2%80%93-create-refine-and-share-/4406237
- [unsupported, minor] rationale: impact / availability: Anyone who builds or sends forms will see the new Copilot options. | Found: Searched: Copilot Forms GCC GCC High DoD license default admin disable Copilot Insights; Microsoft Forms Copilot government licensing GCC 561485. Read roadmap, Copilot overview and service description; none promises availability to every form builder or sender. | Fix: Replace the impact rationale with 'Medium. Form owners, such as survey owners, HR and communications teams, are the potential audience for the new options; Microsoft has not stated the government-cloud eligibility or arrival default.'
-->
