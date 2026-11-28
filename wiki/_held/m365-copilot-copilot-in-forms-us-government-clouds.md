---
title: "Microsoft Forms: Copilot in Forms for US Government clouds"
slug: "m365-copilot-copilot-in-forms-us-government-clouds"
roadmapId: 561485
topic: "m365-copilot"
products: ["Forms","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in Forms is rolling out to GCC, GCC High and DoD, covering drafting, sending, Copilot Insights and on-canvas editing. The Forms FAQ requires a Microsoft Copilot licence; the default state and an admin switch are not yet published."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "add-on"
  notes: "The Forms FAQ requires a valid Microsoft Copilot licence, which Microsoft offers as an add-on in GCC, GCC High and DoD. The Copilot overview separately lists Forms question drafting under Microsoft 365 Copilot (Basic), without the add-on; the government-cloud feature-by-feature split is not specified."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["microsoft-forms","m365-copilot","copilot","ai","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 561485"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561485"
    kind: "roadmap"
  - title: "Frequently asked questions about Copilot in Forms"
    url: "https://support.microsoft.com/office/frequently-asked-questions-about-copilot-in-forms-c9941b72-b32e-4c7e-9af9-e603929bb1d2"
    kind: "docs"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#ai-administrator"
    kind: "learn"
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
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Archived Release Notes for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes-archive#february,-2024"
    kind: "learn"
  - title: "2025 Release Notes for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#may-29,-2025"
    kind: "learn"
  - title: "Evolving the Copilot experience in Microsoft Forms"
    url: "https://techcommunity.microsoft.com/blog/microsoftformsblog/evolving-the-copilot-experience-in-microsoft-forms/4534667"
    kind: "blog"
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
updated: "2026-11-28"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-21"
    note: "First briefing for Copilot in Forms in the US Government clouds; licence, default state and an admin switch are not yet published."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: licensing model set to not yet published, the government-cloud data-boundary statement no longer caveated, and the unwanted-use sentence now says no separate Copilot off switch is documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after the independent check: the Scope gap now covers only government-cloud-specific prerequisites, and sources for drafting inputs and the commercial Forms Copilot rollout were added."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after the independent check: licensing now cites the Forms FAQ's Copilot licence requirement and the government-cloud add-on, cost raised to medium, and Scope names the AI Administrator role."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-28"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 3
  hash: "dd086af9bf0673556d4e1597523d5140"
---

## What's changing

Microsoft is enabling Copilot in Microsoft Forms for the US Government clouds (GCC, GCC High and DoD). The roadmap item describes AI help across the life of a form: creating it, refining it, sending it and analysing the results.

The roadmap item names four groups of features: Draft with Copilot, distribution and monitoring, Copilot Insights, and on-canvas Copilot features such as Rewrite question, Continue writing and Answer explanations. The item lists Web as the only platform and General Availability as the release phase.

The roadmap status is Rolling out, with a target date of September CY2026. That target has passed, so treat the rollout as in progress in your tenant rather than complete. No Message center post was supplied with the item. Microsoft Learn has no page for the Government-cloud version of these features, so what this briefing says about behaviour comes from the roadmap description. Microsoft has not stated what happens on arrival, such as whether the features appear automatically for eligible users.

## Why it matters

Copilot in Forms adds a generative AI layer to a tool that many organisations use to collect staff, citizen and supplier responses. Drafting works from what a user types or references. Copilot Insights works on the responses a form has collected, and responses are often the sensitive part.

Microsoft has not stated whether the features switch on for users automatically, and the government-cloud feature-by-feature licence split is not specified. Plan on users meeting them during the rollout, and settle your position on licensing and acceptable use before they do.

## Risk assessment

**Data exposure**
- Copilot Insights is described by the roadmap item as analysing results, so form responses become input to Copilot. Identify forms that collect personal or sensitive answers before staff use Insights on them.
- Microsoft Learn states that Microsoft Copilot in the US Government clouds operates within the customer's government cloud tenant and that prompts, responses and generated content stay in the government cloud.

**Security & identity**
- No change is documented to how users sign in to Forms. Microsoft Learn documents Forms access control through Microsoft Entra Conditional Access applied to the Microsoft Forms cloud app; this is an existing control and not specific to Copilot.

**Autonomy & actions**
- The roadmap item lists distribution and monitoring among the features, and the Learn release notes describe drafting and sending invitations in a separate commercial roadmap item (553136). Whether Copilot in Forms in the US Government clouds sends anything without a person confirming it is not yet documented.

**Change & support**
- Microsoft Learn documents no separate Copilot in Forms off switch at the time of writing (November 2026). Brief the service desk before the rollout reaches users.

## Cost and licensing

The Forms FAQ (Frequently asked questions about Copilot in Forms) requires a valid Microsoft Copilot licence. Microsoft offers that licence as an add-on in GCC, GCC High and DoD (License options for Microsoft Copilot). The Microsoft 365 Copilot service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. The Copilot overview separately lists "Forms: Draft questions to create surveys, polls and other forms" under Microsoft 365 Copilot (Basic), which it defines as users without the Copilot add-on licence; the government-cloud feature-by-feature split is not specified. The Forms FAQ separately says a valid Microsoft Copilot licence is required for Copilot in Forms, so these Microsoft pages do not describe the drafting entitlement consistently.

The Learn release notes list a separate roadmap item (553136) for a Copilot chat pane in Forms and say it is available to Microsoft 365 Copilot licensed business users. That item is not this one, so do not assume the same licence split applies in GCC, GCC High or DoD.

No meter or credit rate for Copilot in Forms is published. Indirect cost is admin time: licence review, user guidance and checking Message center.

## Scope

The roadmap item covers GCC, GCC High and DoD, on the Web platform, at General Availability, with status Rolling out and a target of September CY2026.

The Microsoft Copilot service description does not list a Forms row in its feature availability table for the US Government clouds. Whether availability differs between GCC, GCC High and DoD is not stated by Microsoft Learn; the roadmap item lists all three. Microsoft documents AI Administrator as a role for managing all aspects of Microsoft Copilot; no Forms-specific availability switch is documented. Any government-cloud-specific prerequisites are not yet documented.

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

- Which Microsoft 365 Copilot licence does each Copilot in Forms feature need in GCC, GCC High and DoD? Watch the Microsoft Copilot service description and Message center.
- Are the features on by default for eligible users, and can an administrator turn them off for a tenant or group, or by script? Watch Message center and the Forms admin documentation.
- Does the rollout differ between GCC, GCC High and DoD, given that Microsoft says feature availability aligns with each environment's boundaries?

<!-- rationale
risk: Medium. Copilot in Forms covers form drafting and the analysis of responses, and Microsoft Learn documents no admin switch for it at the time of writing (November 2026).
cost: Medium. The Forms FAQ requires a valid Microsoft Copilot licence, offered as an add-on in government clouds, so form owners without it may need licensing. The overview separately lists Basic question drafting; the government-cloud feature split remains unspecified.
impact: Medium. Form owners, such as survey owners, HR and communications teams, are the potential audience for the new options; Microsoft has not stated the government-cloud eligibility or arrival default.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: final sentence / absence: Any government-cloud-specific prerequisites are not yet documented. | Found: The following plans are eligible prerequisite licenses for Microsoft Copilot. ... US Government ... Microsoft 365 G5; Microsoft 365 G3; Microsoft 365 F1 ... Office 365 G5; Office 365 G3; Office 365 G1; Office 365 F3 | Fix: Remove 'Any government-cloud-specific prerequisites are not yet documented.' Microsoft publishes eligible prerequisite licences in the US Government section of https://learn.microsoft.com/copilot/plan/copilot-license-options. Keep the separate, narrower statement that the government-cloud feature-by-feature licence split is not specified. | Source: https://learn.microsoft.com/copilot/plan/copilot-license-options
-->
