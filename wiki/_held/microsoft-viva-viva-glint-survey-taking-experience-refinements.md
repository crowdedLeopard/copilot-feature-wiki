---
title: "Viva Glint: survey-taking refinements to comment auto-save, a single Next button and auto-scroll"
slug: "microsoft-viva-viva-glint-survey-taking-experience-refinements"
roadmapId: 570429
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint survey takers get refined comment auto-save, one Next button in place of Skip and Done, and changed auto-scroll when they update answers. No new admin setting is documented; brief survey owners and update help text."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Viva Glint's licensing page says a Viva Suite or Viva Glint subscription plan is required to use Viva Glint, and that individual user licence assignment isn't required. A licence or price specific to these refinements is not yet published."
audiences: ["service-owner","change-adoption"]
tags: ["viva-glint","user-experience","survey-questions","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 570429"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570429"
    kind: "roadmap"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "FAQs for Viva Glint survey takers"
    url: "https://learn.microsoft.com/viva/glint/start/faqs-survey-takers"
    kind: "learn"
  - title: "Complete Program Setup for a Viva Glint survey"
    url: "https://learn.microsoft.com/viva/glint/setup/program-set-up"
    kind: "learn"
  - title: "Viva Glint Questions setup"
    url: "https://learn.microsoft.com/viva/glint/setup/questions-setup"
    kind: "learn"
  - title: "Admins editing a live Viva Glint survey"
    url: "https://learn.microsoft.com/viva/glint/setup/change-live-survey"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
videos: []
related: ["microsoft-viva-viva-glint-copilot-assisted-commenting-in-glint-survey-taking","microsoft-viva-viva-glint-enhanced-multiple-choice-questions-with-up-to-500-options","microsoft-viva-viva-glint-custom-confidentiality-statements"]
controls:
  - governs: "Tenant-wide switch for the survey-taking refinements"
    scope: "tenant"
    ui: null
    api: null
    note: "Viva feature access management lists only Copilot in Viva Glint for Glint at the time of writing (November 2026)."
  - governs: "Whether a comment box shows after each rating item, or the survey moves on automatically"
    scope: "other"
    ui:
      surface: "Viva Glint admin dashboard"
      path: "Configuration > Surveys > Survey programs > program > Program Setup > Auto-expand comments input"
      docs: "https://learn.microsoft.com/viva/glint/setup/program-set-up"
    api: null
    note: "Per survey program. Disabled by default; applies to rating items only. An existing setting, not documented as governing the new auto-scroll."
  - governs: "Whether survey takers may skip a rating or multiple-choice question"
    scope: "other"
    ui:
      surface: "Viva Glint admin dashboard"
      path: "Configuration > Surveys > Survey programs > survey > Questions > question > Edit Question > Optional question"
      docs: "https://learn.microsoft.com/viva/glint/setup/questions-setup"
    api: null
    note: "Per question. Open-ended questions are always optional. Not editable while the survey is live."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: Glint survey-taking refinements, with the Program Setup and question settings that shape the same survey moments."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "c659b43a38dd54500e24b1964434250d"
---

## What's changing

Viva Glint changes how employees move through a survey. The roadmap item describes three refinements to the survey-taking experience: updates to how comments are auto-saved, the "Skip" and "Done" buttons consolidated into a single "Next" button, and refined auto-scroll behaviour when a survey taker updates an answer, intended to give the taker more control over moving between questions.

Microsoft Learn does not describe these refinements yet, so what follows about their behaviour is the roadmap's description. Learn's survey-taker FAQ says the Glint survey automatically saves answers so a taker can return with the same link, and at the time of writing (November 2026) it still tells takers to make sure they have chosen "Skip" or "Next" when appropriate. The roadmap names "Skip" and "Done" as the buttons being consolidated; the two sources describe the buttons differently. Microsoft has not stated whether the refinements reach every survey automatically or depend on any setting.

The roadmap item lists the change as Launched, General Availability, on the Web platform, with a target of September CY2026, for Worldwide (Standard Multi-Tenant) and GCC.

## Why it matters

This is a change to something every survey taker already uses, so the main work for a Glint service owner is communication and help-desk readiness rather than configuration. Employees who were told to look for "Skip" or "Done", or who are used to how the survey currently scrolls when they change an answer, will find the survey behaves differently. Organisations that copied Microsoft's survey-taker FAQ into their own intranet or survey communications should expect that text to describe buttons the survey no longer shows.

Microsoft has not stated what happens on arrival, and Learn documents no switch for these refinements. The settings that already shape the same moments, **Auto-expand comments input** in Program Setup and **Optional question** on each item, stay in admins' hands, and how the new navigation works alongside them is the question to settle in a test survey before the next live cycle.

## Risk assessment

**Data exposure**
- No new data collection is described: the roadmap changes how comments are auto-saved, not what is collected. How the updated comment auto-save treats a comment typed but not yet moved past is not documented; see Open questions.

**Security & identity**
- No change: the roadmap describes no change to how survey takers sign in or reach a survey.

**Autonomy & actions**
- No change: the refinements alter navigation and scrolling inside the survey and take no action on the taker's behalf beyond what the roadmap describes.

**Change & support**
- A single "Next" button replaces "Skip" and "Done", per the roadmap. Learn's survey-taker FAQ still refers to "Skip" or "Next" at the time of writing, so internal guidance built from it will be out of step; expect questions to survey owners and managers.
- With **Auto-expand comments input** disabled (its default), Learn says the survey automatically moves to the next item. The roadmap's refined auto-scroll touches the same moment, and how the two interact is not documented, so survey owners should check the behaviour in a test survey rather than assume it.
- Whether a taker may move past a question without answering is still set per item by **Optional question**; with one button for both skipping and completing, takers may not see which items are mandatory as clearly. Learn's FAQ says that unless noted, all questions are mandatory.

## Cost and licensing

- **Licence:** the Viva Glint licensing page says the purchase of a Viva Suite or Viva Glint subscription plan is required for using Microsoft Viva Glint, and that individual user licence assignment isn't required. These refinements are part of the survey-taking experience of that product.
- **Meter:** none is documented for this change; the licensing page bills by subscription, with the number of active licences expected to be at least the number of active users in the app.
- **Indirect costs:** survey owners' time to run a test survey and update survey-taker instructions, FAQs and communications.
- **Not yet published:** a licence or price specific to these refinements.

## Scope

- **Who sees it:** survey takers in Viva Glint surveys, according to the roadmap. The record does not limit it to particular survey types.
- **Clouds:** Worldwide (Standard Multi-Tenant) and GCC, as the roadmap record lists them.
- **Platform:** Web, per the record. Learn lists Microsoft Edge, Google Chrome, Safari, Mozilla Firefox, iOS Safari and Android Chrome as supported for surveys.
- **Who configures related settings:** program administrators, whom Learn's Program Setup page describes as the role that can set up, manage, edit and report on all surveys in the program.
- **Rollout:** status Launched, General Availability, target September CY2026. Microsoft has not stated whether any setting or survey state affects which surveys get the refinements.

## Governance guidance

### Before rollout
- Launch a test survey to an internal team and confirm how the single Next button behaves on mandatory, optional and open-ended items.
- Check each program's **Auto-expand comments input** setting in Program Setup and decide, from the test survey, whether the refined auto-scroll changes your choice.
- Review which items have **Optional question** enabled, since one Next button now serves both skipping and completing an item.

### At rollout
- Update intranet pages, survey invitations and manager talking points that tell employees to use "Skip" or "Done".
- Brief managers and the help desk that survey navigation has changed, so questions about the missing buttons go to the Glint survey owner.

### After rollout
- Compare comment counts and completion rates for the first survey cycle after the change with the previous cycle, to see whether the new auto-save and navigation changed comment volume.
- Watch Microsoft's survey-taker FAQ for updated wording on the buttons and link employees to it once it matches.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the survey-taking refinements</strong><br><small>Tenant</small><br><small class="controls__note">Viva feature access management lists only Copilot in Viva Glint for Glint at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a comment box shows after each rating item, or the survey moves on automatically</strong><br><small class="controls__note">Per survey program. Disabled by default; applies to rating items only. An existing setting, not documented as governing the new auto-scroll.</small></td><td data-label="Admin UI"><strong>Viva Glint admin dashboard</strong><br>Configuration › Surveys › Survey programs › program › Program Setup › Auto-expand comments input <a href="https://learn.microsoft.com/viva/glint/setup/program-set-up" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether survey takers may skip a rating or multiple-choice question</strong><br><small class="controls__note">Per question. Open-ended questions are always optional. Not editable while the survey is live.</small></td><td data-label="Admin UI"><strong>Viva Glint admin dashboard</strong><br>Configuration › Surveys › Survey programs › survey › Questions › question › Edit Question › Optional question <a href="https://learn.microsoft.com/viva/glint/setup/questions-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents no admin switch for these refinements; the Viva feature access management page lists only Copilot in Viva Glint as a manageable Glint feature at the time of writing (November 2026). The two Glint settings in the table are existing controls over the same survey moments, not controls over the refinements themselves. **Auto-expand comments input** is set per survey program, is disabled by default and applies to rating items only. **Optional question** is set per item; Learn says open-ended questions are always optional and have no such setting, and that while a survey is live only language text, instruction text and comment placeholder text can be edited.

## Open questions

- Do the refinements apply to every Glint survey automatically, or does any program setting or survey state (such as a live survey) decide when they appear? Watch the Viva Glint Learn pages.
- How does the refined auto-scroll behave when **Auto-expand comments input** is disabled, given that Learn says the survey then moves to the next item by itself?
- How does the single Next button show a survey taker that a question is mandatory, and what happens when a taker selects Next on a mandatory question left unanswered?
- What does the updated comment auto-save keep if a taker leaves a survey part-way through a comment, and is that text retained or submitted when the survey closes?
- When will Microsoft's survey-taker FAQ be updated to describe the Next button instead of "Skip"?

<!-- rationale
risk: Low. The roadmap describes changes to buttons, scrolling and comment auto-saving inside surveys Glint already runs; nothing in it adds new data access, sharing or automated actions.
cost: Low. Viva Glint already requires a Viva Suite or Viva Glint subscription plan; the only cost the sources show is the time to update survey-taker guidance. A licence specific to this change is not yet published.
impact: Medium. Every employee who takes a Glint survey meets the new Next button and changed scrolling, but only while taking a survey; the roadmap describes no change for admins or dashboard users.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].governs and note; Why it matters; Risk assessment; Governance guidance; Governance controls / applicability: Optional question is presented without a survey-program qualification as the per-item control allowing rating and multiple-choice questions to be skipped. | Found: This documentation applies only to Engagement survey programs. If you are creating a 360 feedback program, please refer to the 360-specific documentation here. | Fix: Add 'For Engagement survey programs only; this route is not the 360 feedback setup route' to controls[2].note and its rendered note. Qualify the corresponding prose and checklist instructions as applying to Engagement survey programs. Keep the existing path. Cite https://learn.microsoft.com/viva/glint/setup/questions-setup for the qualification; the linked 360 page uses Survey Questions in Cycle Settings instead. | Source: https://learn.microsoft.com/viva/glint/setup/questions-setup
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The comment-expansion control is at Configuration > Surveys > Survey programs > program > Program Setup > Auto-expand comments input in the Viva Glint admin dashboard. | Found: The Program Setup page is the first section in Program Summary for a Microsoft Viva Glint survey. In the first section on the Program setup page, define, enable, or disable each field: Auto-expand comments input. | Fix: Insert the omitted Program Summary heading: 'Configuration > Surveys > Survey programs > program > Program Summary > Program Setup > Auto-expand comments input'. Questions setup, already cited, supplies Configuration > Surveys > Survey programs and selection of the survey; the cited Program Setup page supplies the control. | Source: https://learn.microsoft.com/viva/glint/setup/program-set-up
-->
