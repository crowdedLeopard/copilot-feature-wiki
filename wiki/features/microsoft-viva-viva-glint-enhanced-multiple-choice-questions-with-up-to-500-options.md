---
title: "Viva Glint: multiple-choice questions with up to 500 options"
slug: "microsoft-viva-viva-glint-enhanced-multiple-choice-questions-with-up-to-500-options"
roadmapId: 569606
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint survey admins will be able to build multiple-choice questions with up to 500 options, loaded from a CSV file. Survey admins choose whether to use CSV upload when editing questions; no separate setting or licence is published."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
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
  - title: "Privacy protection within feedback reporting"
    url: "https://learn.microsoft.com/viva/glint/setup/privacy-protection-reporting"
    kind: "learn"
  - title: "Admins editing a live Viva Glint survey"
    url: "https://learn.microsoft.com/viva/glint/setup/change-live-survey"
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
  - date: "2026-11-23"
    note: "Corrected after the independent check: default state now user-opt-in, live-survey and small-group reporting guidance now follow Learn, and the unsupported 'nothing to turn off centrally' wording is removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 41 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 41
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1555f8edcede34de8c52d9b78e90b51e"
---

## What's changing

Microsoft Learn documents multiple-choice questions with up to 500 options and CSV upload of response options. The roadmap item says Viva Glint administrators will be able to create such questions and to upload the options from a CSV file. For questions with more than 50 options, the roadmap says survey takers can search and filter the available responses, and that reporting will support the expanded option set.

The Viva Glint Questions setup page lists "CSV upload for option fields" as an editable field on multiple-choice questions, lets survey admins add options in bulk, and says it supports up to 500 options per question. That page says it applies only to Engagement survey programs and points 360 feedback programs to separate documentation. Learn does not describe the search and filter behaviour for long lists, so that part rests on the roadmap text.

The roadmap record gives the status as In development, with a target date of September CY2026 and release phase General Availability, for Web on Worldwide (Standard Multi-Tenant). The target month has passed at the time of writing (November 2026) and the record still shows In development, so treat the target as unconfirmed and check the Viva Glint app for the CSV option before relying on it.

## Why it matters

Long option lists make it practical to ask questions such as department, location or skill from a single multiple-choice item. For the survey admin, bulk upload replaces entering each option by hand. For survey takers, the roadmap says search and filter are available for lists with more than 50 options.

Survey admins choose whether to use CSV upload when editing questions; rollout mechanics for response search are not stated. Expect the extra work to fall on survey design, testing and reporting rather than on tenant settings.

## Risk assessment

**Data exposure**
- Long option lists such as team or location names can reveal which small groups exist, so review the option text before it is uploaded.
- The Multiple Choice Question Report lists each response option vertically and shows a percentage by the attribute chosen for the section. With up to 500 options, expect many options to have few or no responses. Microsoft documents a default minimum response threshold of five for multiple-choice items; responses below a team threshold are aggregated and rolled up to the next level ([Privacy protection within feedback reporting](https://learn.microsoft.com/viva/glint/setup/privacy-protection-reporting)).

**Security & identity**
- No change described: the roadmap item names no new identity, permission or sign-in. Viva Glint Service Administrators set up programs and surveys, so the new capability sits with that role.

**Autonomy & actions**
- No change: the roadmap item describes no automated action.

**Change & support**
- Learn warns that overwriting an existing option with a different label causes trend issues in reports and confusion in raw data exports; it tells admins to use "+ Add new choice" and to set "Show" to "Hide" to retire an option. Do not change multiple-choice options during a live survey; Microsoft documents those fields as disabled until the survey is no longer live ([Admins editing a live Viva Glint survey](https://learn.microsoft.com/viva/glint/setup/change-live-survey)).
- Test long and short option lists in a survey preview and write help text for people who have not used a searchable list; Learn does not yet describe the search behaviour.

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
- Build the question in a test survey and use the survey preview to check the option list, and the search and filter behaviour the roadmap describes for long lists.
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

Microsoft Learn documents no tenant or survey-level switch for the 500-option limit, CSV upload or search for long lists at the time of writing (November 2026). A related control is who is a Viva Glint Service Administrator and so sets up surveys. Learn's role page lists Service Administrator among the roles the Microsoft 365 Global Administrator or Viva Glint Tenant Administrator assigns.

## Open questions

- When will the 500-option limit and CSV upload be generally available, given the September CY2026 target has passed and the roadmap still shows In development? Watch the roadmap item and Message center.
- Does the search and filter for lists over 50 options appear for survey takers on every program type and on mobile, and which Learn page will document it?
- How does the Multiple Choice Question Report display questions with hundreds of options?
- Does the 500-option limit apply outside Engagement survey programs, such as 360 programs?

<!-- rationale
risk: Low. It extends an existing question type inside Viva Glint, and no new data source or access is described; Learn describes CSV upload as an editable question field that survey authors choose to use.
cost: Low. Viva Glint's licensing page names a Viva Suite or Viva Glint subscription; no charge specific to this feature is published, so the known cost is admin time to build and test long lists.
impact: Low. The documented CSV capability is chosen by survey authors when editing multiple-choice questions.
-->
