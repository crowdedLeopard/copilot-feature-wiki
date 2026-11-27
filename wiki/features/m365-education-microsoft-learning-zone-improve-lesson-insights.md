---
title: "Microsoft Learning Zone: lesson-level insights on where a class struggles and each student's answers"
slug: "m365-education-microsoft-learning-zone-improve-lesson-insights"
roadmapId: 577544
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft plans richer lesson reports in Learning Zone: class-wide common mistakes plus each student's answers, for educators. No new licence is published; admins should brief educators and check who can see student results."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Learning Zone is available to organisations with a Microsoft 365 Education A1, A3 or A5 licence, at no additional cost with an eligible education licence (Deploy Microsoft Learning Zone). Nothing specific to lesson insights is published."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["education","learning-zone","privacy"]
sources:
  - title: "Deploy Microsoft Learning Zone"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577544"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577544"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Whether Learning Zone, and so its lesson insights, is available to the organisation"
    scope: "tenant"
    ui:
      surface: "Learning Zone admin page (aka.ms/LearningZoneAdmin)"
      path: "Access settings"
      docs: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone"
    api: null
    note: "Under Access settings, turn off access to Learning Zone. Sign in with an administrator account. Turns off the whole app, not only reports."
  - governs: "Separate switch for lesson insights or the per-student answer view"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-27"
    note: "New briefing on the planned Learning Zone lesson insights improvement, with licensing and the organisation-wide access setting from Microsoft Learn."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 44 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 44
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ed6480598bba6589fe73d785490fb179"
---

## What's changing

Microsoft plans to improve the lesson insights in Microsoft Learning Zone so that educators can see where a class is struggling and which students need support. The roadmap item states that educators get lesson-level results for every student, aggregated responses that show the mistakes many students made in a lesson, and the option to open each student's answers to plan targeted follow-up.

Learning Zone is a Windows app in which educators turn their materials into interactive lessons, assign them, teach them live, and "use built-in reports to see where learners need support", according to Microsoft Learn. Learners complete lessons in a web browser through a link, a join code or a Microsoft Teams assignment. Microsoft Learn does not describe the improved lesson insights yet, so what follows about the new behaviour is the roadmap's description.

The roadmap item is **In development**, targeted for **December CY2026**, as a General Availability release on Desktop and Web, for the Worldwide (Standard Multi-Tenant) cloud. Microsoft has not stated whether the improved insights replace the current reports automatically or need any setting.

## Why it matters

This puts individual student answers, not only scores, in front of educators in one view. For a school that already lets educators use Learning Zone, that is the purpose of the app, but it is still student data surfaced in a new way, so data protection officers and safeguarding leads may want to know about it before educators start using it. The app is available to everyone in eligible organisations by default unless an administrator turns it off, so in most education tenants the audience for this change already exists.

Microsoft has not stated what happens on arrival. No source says existing behaviour changes beyond the reports educators see. The practical work is communication: tell educators what the new view shows, and confirm that the per-student view fits your school's policy on who may see learner responses.

## Risk assessment

**Data exposure**
- The roadmap describes educators opening each student's answers for a lesson. Microsoft has not described who besides the assigning educator can see these results (for example co-teachers), so confirm this before rollout. Learning Zone user data is stored in the European Union, the United States or Australia, and some AI processing for lesson generation might take place in a different geography from where data is stored.

**Security & identity**
- No change described: Learning Zone uses the Microsoft 365 Education sign-in and applies the institution's policies to access, content creation and sharing.

**Autonomy & actions**
- No change described: the roadmap describes a reporting view that educators read; follow-up is planned by the educator.

**Change & support**
- Educators who already use Learning Zone reports will meet a different results view; expect questions on how aggregated mistakes are calculated. The admin control Microsoft Learn documents is the organisation-wide Learning Zone access setting, which turns off the whole app rather than this view.

## Cost and licensing

**Licence.** According to Deploy Microsoft Learning Zone, Learning Zone is available to organisations with a Microsoft 365 Education A1, A3 or A5 licence, and educators must sign in with an account in an education tenant to create and manage lessons. The page states there is no additional cost for Learning Zone when it is used with an eligible education licence. Lesson insights is part of Learning Zone's reports, so it falls under that statement; no licence or price specific to the improved insights is published.

**Meter.** No meter is documented for Learning Zone reports at the time of writing (November 2026).

**Devices.** The same page says viewing reports is available on any Windows 11 PC; the slide limit on lesson generation applies to generation, not to reports.

**Indirect cost.** Admin and adoption time to brief educators and, where needed, update guidance on viewing learner responses.

## Scope

- **Who:** educators who assign Learning Zone lessons, per the roadmap item. Learning Zone is available to organisations with Microsoft 365 Education A1, A3 or A5.
- **Platforms:** Desktop and Web, per the roadmap record. Microsoft Learn says educators use the Windows app on Windows 11 PCs, and learners complete lessons in a browser on computers and tablets; phones are not supported.
- **Clouds:** Worldwide (Standard Multi-Tenant) is the only cloud listed on the roadmap item.
- **Rollout:** targeted for December CY2026 as General Availability; rollout mechanics are not stated.
- **Admin:** an administrator account is needed for the Learning Zone admin page.

## Governance guidance

### Before rollout
- Confirm whether Learning Zone is turned on for your organisation on the Learning Zone admin page under Access settings.
- Brief your data protection lead that educators will see each student's answers and class-wide common mistakes per lesson.
- Prepare a short note for educators on what the new lesson insights show and how it fits your school's policy on learner data.

### At rollout
- Check with a pilot educator that per-student results show only the students in the classes they assigned the lesson to.
- Share the educator note through your usual staff channel once the new view appears.

### After rollout
- Collect educator questions about the aggregated mistakes view and feed them back through your Microsoft support route.
- Watch Message center and the Deploy Microsoft Learning Zone page for any new setting covering reports.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Learning Zone, and so its lesson insights, is available to the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Under Access settings, turn off access to Learning Zone. Sign in with an administrator account. Turns off the whole app, not only reports.</small></td><td data-label="Admin UI"><strong>Learning Zone admin page (aka.ms/LearningZoneAdmin)</strong><br>Access settings <a href="https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for lesson insights or the per-student answer view</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Learning Zone admin page (https://aka.ms/LearningZoneAdmin) holds the organisation-wide access setting; Microsoft Learn says to sign in there with an administrator account but does not name a specific role. That setting turns Learning Zone off for the organisation as a whole. Microsoft Learn documents no setting that turns off lesson insights or the per-student answer view on its own, and no PowerShell or Graph equivalent for the access setting, at the time of writing (November 2026).

## Open questions

- Who besides the educator who assigned a lesson can see each student's answers in the improved lesson insights? Watch the Deploy Microsoft Learning Zone page.
- Will the improved insights replace the current Learning Zone reports for all educators automatically in December CY2026, or roll out gradually? Watch Message center.
- Does the new per-student view change what Learning Zone stores about learner responses, or for how long? Watch the Learning Zone data collection article linked from Microsoft Learn.
- Will Microsoft add a setting to manage reports separately from turning off Learning Zone as a whole?

<!-- rationale
risk: Low. The roadmap describes educators seeing their own students' lesson answers inside Learning Zone, an app that already has reports; nothing suggests data leaves the app or that it acts on its own.
cost: None. Microsoft Learn says there is no additional cost for Learning Zone with an eligible education licence (Microsoft 365 Education A1, A3 or A5); no separate charge for lesson insights is published.
impact: Medium. Educators who assign Learning Zone lessons notice a changed reports experience; students do not see a change described by the roadmap.
-->
