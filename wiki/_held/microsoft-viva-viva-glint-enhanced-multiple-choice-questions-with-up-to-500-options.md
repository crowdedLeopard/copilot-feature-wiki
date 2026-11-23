---
title: "Viva Glint: multiple-choice questions with up to 500 options"
slug: "microsoft-viva-viva-glint-enhanced-multiple-choice-questions-with-up-to-500-options"
roadmapId: 569606
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint survey admins will be able to build multiple-choice questions with up to 500 options, loaded from a CSV file. No admin action is needed, and no separate setting or licence is published for it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Viva Glint's licensing page says a Viva Suite or Viva Glint subscription plan is required to use Viva Glint. A licence or price specific to this feature is not yet published."
audiences: ["m365-admin","change-adoption"]
tags: ["viva-glint","survey-questions","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 569606"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569606"
    kind: "roadmap"
  - title: "Viva Glint Questions setup"
    url: "https://learn.microsoft.com/viva/glint/setup/questions-setup"
    kind: "learn"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "Key roles for Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/start/role-definitions"
    kind: "learn"
  - title: "Use the Viva Glint Multiple Choice Question Report"
    url: "https://learn.microsoft.com/viva/glint/reports/multi-choice-report"
    kind: "learn"
  - title: "Microsoft Viva Glint 360 Survey Questions setup"
    url: "https://learn.microsoft.com/viva/glint/setup/360-add-edit-cycle-questions"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Tenant or survey-level switch for long option lists, CSV option upload and search"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn's Questions setup page lists CSV upload as an editable question field and describes no separate switch. Viva Glint Service Administrators set up surveys."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-20T22:38:45"
changes:
  - date: "2026-11-23"
    note: "First briefing for this roadmap item."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 42 statements contradicted, 5 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 33
  unconfirmed: 5
  contradicted: 4
  attempts: 1
  hash: "175e2096b963b94c327ae00277ae3c8d"
---

## What's changing

The roadmap item says Viva Glint administrators will be able to create multiple-choice questions with up to 500 options and to upload the options from a CSV file. For questions with more than 50 options, survey takers will be able to search and filter the available responses. The item also says reporting will support the expanded option set.

Microsoft Learn already documents part of this. The Viva Glint Questions setup page lists "CSV upload for option fields" as an editable field on multiple-choice questions, lets survey admins add options in bulk, and says it supports up to 500 options per question. That page says it applies only to Engagement survey programs and points 360 feedback programs to separate documentation. Learn does not describe the search and filter behaviour for lists over 50 options, so that part rests on the roadmap text.

The roadmap record gives the status as In development, with a target date of September CY2026 and release phase General Availability, for Web on Worldwide (Standard Multi-Tenant). The target month has passed at the time of writing (November 2026) and the record still shows In development, so treat the target as unconfirmed and check the Viva Glint app for the CSV option before relying on it.

## Why it matters

Long option lists make it practical to ask questions such as department, location or skill from a single multiple-choice item. For the survey admin, bulk upload replaces entering each option by hand. For survey takers, the roadmap says search and filter appear once a list has more than 50 options.

Microsoft has not stated what happens on arrival, and no source says existing surveys change. Plan on nothing changing for current questions until an admin builds a question with a long list, and expect the extra work to fall on survey design, testing and reporting rather than on tenant settings.

## Risk assessment

**Data exposure**
- Long option lists such as team or location names can reveal which small groups exist, so review the option text before it is uploaded.
- The Multiple Choice Question Report lists each response option vertically and shows a percentage by the attribute chosen for the section. With up to 500 options, expect many options to have few or no responses; how Viva Glint treats small groups in that report for this feature is not described.

**Security & identity**
- No change described: the roadmap item names no new identity, permission or sign-in. Viva Glint Service Administrators set up programs and surveys, so the new capability sits with that role.

**Autonomy & actions**
- No change: the roadmap item describes no automated action.

**Change & support**
- Learn warns that overwriting an existing option with a different label causes trend issues in reports and confusion in raw data exports; it tells admins to use "+ Add new choice" and to set "Show" to "Hide" to retire an option. A CSV re-upload on a live question needs the same care.
- Survey takers will see search and filter only for questions with more than 50 options, per the roadmap, so test long and short lists in a survey preview and write help text for people who have not used a searchable list.

## Cost and licensing

Viva Glint's licensing page says the purchase of a Viva Suite or Viva Glint subscription plan is required for using Microsoft Viva Glint, and that individual user licence assignment isn't required for using Viva Glint (it is required for the Pulse-Glint integration). That requirement covers a new option inside the product; a charge or licence specific to the 500-option capability is not yet published.

The Questions setup page that documents CSV upload gives no price or meter for it. The cost that is known is admin time to prepare, upload and test option lists, and to update translations where a survey uses several languages.

## Scope

Audience: survey admins who build questions, and survey takers who answer them. The Questions setup page is written for a Viva Glint Administrator, and the role definitions page says the Viva Glint Service Administrator "sets up programs and surveys, distribution lists, and reporting features".

The roadmap record lists Worldwide (Standard Multi-Tenant) only, the Web platform and General Availability. Learn's Questions setup page says it applies only to Engagement survey programs, so confirm separately whether other program types, such as 360, get the larger limit; Learn does not say.

## Governance guidance

### Before rollout
- Ask the Viva Glint Service Administrator which surveys need a long single-choice or multi-select list, and who owns the option text.
- Check whether the CSV upload field appears on a multiple-choice question in the Viva Glint app, since the roadmap item still shows In development.
- Read the Questions setup guidance on adding and retiring options before planning any change to a live question.

### At rollout
- Build the question in a test survey and use the survey preview to check the option list, and for lists over 50 options the search and filter behaviour the roadmap describes.
- Use "+ Add new choice" for later additions and the "Show" toggle set to "Hide" to retire options, as Learn directs.
- Tell survey takers that long lists can be searched, if the preview shows it.

### After rollout
- Open the Multiple Choice Question Report for a survey with a long list and check that all options appear and read clearly.
- Review raw data exports for survey questions whose options were changed, because the Questions setup page says relabelling options causes confusion there.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or survey-level switch for long option lists, CSV option upload and search</strong><br><small>Tenant</small><br><small class="controls__note">Learn's Questions setup page lists CSV upload as an editable question field and describes no separate switch. Viva Glint Service Administrators set up surveys.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant or survey-level switch for the 500-option limit, CSV upload or search for long lists at the time of writing (November 2026), so there is nothing to turn off centrally. The control available is who is a Viva Glint Service Administrator and so sets up surveys. Learn's role page lists Service Administrator among the roles the Microsoft 365 Global Administrator or Viva Glint Tenant Administrator assigns.

## Open questions

- When will the 500-option limit and CSV upload be generally available, given the September CY2026 target has passed and the roadmap still shows In development? Watch the roadmap item and Message center.
- Does the search and filter for lists over 50 options appear for survey takers on every program type and on mobile, and which Learn page will document it?
- How does the Multiple Choice Question Report display questions with hundreds of options, including small groups?
- Does the 500-option limit apply outside Engagement survey programs, such as 360 programs?

<!-- rationale
risk: Low. It extends an existing question type inside Viva Glint, and no new data source or access is described; the roadmap record does not state a default.
cost: Low. Viva Glint's licensing page names a Viva Suite or Viva Glint subscription; no charge specific to this feature is published, so the known cost is admin time to build and test long lists.
impact: Low. Survey admins who build multiple-choice questions notice it first; survey takers see it only in surveys where an admin adds a long option list.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary / default: No admin action is needed. | Found: Searched: Viva Glint CSV multiple choice 500 options "default" "admin action". Opened Questions setup and Advanced Configuration; neither states that this rollout requires no admin action. The roadmap record contains no rollout instructions. | Fix: Replace 'No admin action is needed' with 'Survey admins choose whether to use CSV upload when editing questions'.
- [contradicted, blocker] front matter: defaultState; Why it matters; rationale: risk / default: The default state of the CSV and long-option-list capability is unknown. | Found: CSV upload for option fields | Survey admins can upload a CSV file to add multiple choice response options in bulk, rather than entering each option individually. Supports up to 500 options per question. | Multiple Choice | Editable | Fix: Set defaultState to 'user-opt-in': Learn describes an editable question capability the survey author chooses to use, and the targeted switch search found no separate enablement control. Replace the arrival-state sentence with 'Survey admins choose whether to use CSV upload when editing questions; rollout mechanics for response search are not stated.' | Source: https://learn.microsoft.com/viva/glint/setup/questions-setup
- [unsupported, blocker] What's changing; Why it matters; Risk assessment: Change & support / behaviour: Survey takers get search and filter only when a question has more than 50 options, according to the roadmap. | Found: Searched: Viva Glint multiple choice 500 options search filter 50 default existing questions rollout; "Viva Glint" "500" "50"; "569606" "Glint". Read supplied roadmap record, Questions setup and roadmap landing page; none supplies this threshold. | Fix: Remove the statements that search and filter appear above 50 options, including the 'only' claim and the threshold-specific testing rationale. The supplied roadmap record has no description, and the Microsoft text retrieved does not establish that limit.
- [unsupported, major] What's changing / record: The roadmap item says reporting will support the expanded option set. | Found: Searched: "569606" "Glint"; Viva Glint multiple choice 500 options search filter 50 default existing questions rollout. Read roadmap record and roadmap landing page; neither provides this promise. Multiple Choice Question Report describes general reporting, not 500-option support. | Fix: Remove 'The item also says reporting will support the expanded option set.'
- [unsupported, blocker] Why it matters; rationale: impact / default: Current questions will not change until an administrator builds a question with a long list. | Found: Searched: Viva Glint multiple choice 500 options search filter 50 default existing questions rollout. Opened Questions setup and live survey editing guidance; neither states that this rollout leaves every existing question unchanged until a new question is built. | Fix: Remove 'Plan on nothing changing for current questions until an admin builds a question with a long list'. Replace the impact rationale's exclusivity claim with 'Low. The documented CSV capability is chosen by survey authors when editing multiple-choice questions.'
- [contradicted, blocker] Risk assessment: Data exposure / absence: How Viva Glint treats small groups in reporting for this multiple-choice feature is not described. | Found: By default, the minimum response threshold for rating or multiple-choice items is five. ... If the minimum response threshold isn't met for a user's team, their responses aren't reported. Instead, responses are aggregated with and rolled up to the next level. | Fix: Replace the absence clause with: 'Microsoft documents a default minimum response threshold of five for multiple-choice items; responses below a team threshold are aggregated and rolled up to the next level.' Cite https://learn.microsoft.com/viva/glint/setup/privacy-protection-reporting. Do not imply that a new option count leaves these general protections unconfirmed. | Source: https://learn.microsoft.com/viva/glint/setup/privacy-protection-reporting
- [contradicted, blocker] Risk assessment: Change & support / behaviour: A CSV option re-upload on a live question can be handled with the same care as ordinary option editing. | Found: To ensure the integrity of the survey results, don't adjust any rating scale or multiple-choice options. ... You can edit language text, instruction text, and comment placeholder text only. Other fields are disabled and can't be edited until the survey is no longer live. | Fix: Replace 'A CSV re-upload on a live question needs the same care' with 'Do not change multiple-choice options during a live survey; Microsoft documents those fields as disabled until the survey is no longer live.' Cite https://learn.microsoft.com/viva/glint/setup/change-live-survey. | Source: https://learn.microsoft.com/viva/glint/setup/change-live-survey
- [unsupported, blocker] Governance controls / applicability: There is nothing that turns this capability off centrally. | Found: Searched: Viva Glint multiple choice CSV 500 options tenant survey enable disable PowerShell Graph API switch. Opened Questions setup and Advanced Configuration. No separate switch was found, but neither page states that central restriction is impossible. | Fix: Delete 'so there is nothing to turn off centrally'. Keep the narrower, dated statement that Microsoft Learn documents no separate feature switch.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; summary; What's changing; Risk assessment / behaviour: Viva Glint multiple-choice questions support up to 500 options. | Found: Supports up to 500 options per question. | Fix: Replace the first sentence of What's changing with: 'Microsoft Learn documents multiple-choice questions with up to 500 options and CSV upload of response options.' The supplied roadmap record has a matching title but no description supporting the attributed CSV and behaviour details. | Source: https://learn.microsoft.com/viva/glint/setup/questions-setup
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist's option-editing controls are represented in the controls table. | Found: Checklist: 'Use "+ Add new choice" for later additions and the "Show" toggle set to "Hide" to retire options.' The only controls row covers a missing tenant or survey-level switch. | Fix: Remove the At rollout checklist bullet beginning 'Use "+ Add new choice"'. The same documented option-editing advice already appears under Change & support; do not add a control row as part of this correction.
-->
