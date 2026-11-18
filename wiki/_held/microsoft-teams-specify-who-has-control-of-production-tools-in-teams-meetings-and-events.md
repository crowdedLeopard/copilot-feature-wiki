---
title: "Microsoft Teams: organisers choose who controls production tools in meetings with presenters and webinars"
slug: "microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events"
roadmapId: 567305
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "A new meeting option, Who has control of production tools, lets organisers name who can use Manage what attendees see and the Green Room. It is on by default and Microsoft says no admin action is required."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap record, Message Center post MC1443520 and the Microsoft Support page on production tools name no licence or meter for this option."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-events","meeting-policy","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 567305"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567305"
    kind: "roadmap"
  - title: "MC1443520"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1443520"
    kind: "message-center"
  - title: "Control town hall production tools in Microsoft Teams"
    url: "https://support.microsoft.com/office/control-town-hall-production-tools-in-microsoft-teams-8a19026b-43d1-45e3-b306-35610d83e5f1"
    kind: "docs"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-external-presenter-support-for-event-group-chat"]
controls:
  - governs: "Whether organisers can use the production tools option (tenant switch or default)"
    scope: "tenant"
    ui: null
    api: null
    note: "Plan for Teams events lists the town hall version as 'No control' for admins; webinars and meetings with presenters are not covered there."
  - governs: "Who can control production tools in an event (organiser setting)"
    scope: "user"
    ui:
      surface: "Microsoft Teams (organiser meeting options)"
      path: "Calendar > town hall > View event > Manage event > Meeting options > Production tools > Who has control of production tools"
      docs: "https://support.microsoft.com/office/control-town-hall-production-tools-in-microsoft-teams-8a19026b-43d1-45e3-b306-35610d83e5f1"
    api: null
    note: "Path is documented for town halls; the page does not cover webinars or meetings with presenters. Set by the organiser, not an admin."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 567305, based on the roadmap record, MC1443520 and the town hall documentation."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 47
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "dd9be4564a986774858e656617c4fc25"
---

## What's changing

Teams adds a meeting option called **Who has control of production tools** for meetings with presenters and webinars. The roadmap item says organisers use it to designate who has access to the controls in Manage what attendees see and to the Green Room during the event.

Message Center post MC1443520 says the option is enabled by default for eligible meetings with presenters and webinars, and that organisers can separate production responsibilities from presenter responsibilities. It names the Teams desktop app and the Teams web app as the platforms; the roadmap record lists Desktop, Mac and Web. The post does not say which people hold production control before an organiser changes the option.

Microsoft's Support page on production tools describes the same option for town halls. It lets an organiser pick **Organizer and co-organizers**, **Organizer, co-organizers, and presenters**, or **Specific people**, and says people with control can start the event, manage what attendees see and end the event. That page does not mention webinars or meetings with presenters, so treat it as the closest documentation of the behaviour, not a description of this item.

The roadmap record gives status Rolling out and a target date of August CY2026, with General Availability and Targeted Release phases for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. MC1443520 was last updated on 2026-09-22 with a new timeline: Targeted Release from mid-August 2026, and General Availability from late August 2026, expected to complete by end of October 2026 (previously mid-September). The post lists 2026-11-30 as Microsoft's end date and sets no act-by date.

## Why it matters

This is a user-facing event control that arrives without admin action, so the practical work is communication. Organisers of webinars and presenter-led meetings gain a way to hand production tasks to named people; those people then hold controls that change what attendees see. Microsoft's post frames this as reducing the risk of unintended changes during live events.

The wiki's view is that service owners should expect questions from event teams and check that organisers know the option exists. Because the post says the option is enabled by default but does not say who holds production control until an organiser sets it, confirm that behaviour in a test event before a high-profile webinar.

## Risk assessment

**Data exposure**
- No new data access is described. The option decides who can use Manage what attendees see and the Green Room controls in an event; the roadmap item and MC1443520 describe no new data being read or stored.

**Security & identity**
- Production control is granted by an organiser, per event. On the town hall page, **Specific people** requires that people are already added to the event, so designation draws on the event's existing attendee list. Whether this holds for webinars is not stated.
- Microsoft's Plan for Teams events page lists the town hall version of this option as "No control" for admins, so a tenant-level setting should not be assumed.

**Autonomy & actions**
- No automated or AI action is described. People with control can, on the town hall page, start the event, manage what attendees see and end the event; the wiki's view is that organisers should name only people they trust with those actions.

**Change & support**
- Organisers will see a new option in meeting options. Expect help-desk questions from event teams about who can start, end or spotlight in a live event, and update event-production runbooks as MC1443520 recommends.

## Cost and licensing

No licence, meter or price is named for this option in the roadmap record, MC1443520 or the Microsoft Support page on production tools, and Microsoft Learn documents none at the time of writing (November 2026). Licensing is not yet published.

The only cost the sources show is indirect: MC1443520 recommends informing organisers, updating internal training or event-production documentation and reviewing live event workflows.

## Scope

- **Who sees it:** per MC1443520, organisers of meetings with presenters and webinars, and the designated production staff who support live events.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Platforms:** the roadmap record lists Desktop, Mac and Web; MC1443520 names the Teams desktop app and the Teams web app.
- **Rollout:** Targeted Release began mid-August 2026; General Availability was due to begin late August 2026 and complete by end of October 2026 (MC1443520, updated 2026-09-22). The roadmap record still shows status Rolling out.
- **Prerequisites:** none are listed in the roadmap record or MC1443520. The town hall Support page says **Specific people** must already be added to the event.

## Governance guidance

### Before rollout
- Tell organisers of webinars and presenter-led meetings that the **Who has control of production tools** option is arriving, as MC1443520 recommends.
- Update event-production runbooks and training to say who should be designated for starting, ending and managing what attendees see.
- Review planned live events to decide whether dedicated production staff should be assigned with this option, as the post suggests.

### At rollout
- Run a test webinar and check which people hold production control before an organiser changes the option, since Microsoft has not stated the starting value.
- Confirm in a test event whether the options match the town hall page (**Organizer and co-organizers**, **Organizer, co-organizers, and presenters**, **Specific people**) for webinars and meetings with presenters.

### After rollout
- Collect organiser feedback and help-desk tickets on production control during live events.
- Check Message Center and the Teams events pages for documentation of this option for webinars and for any admin policy.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether organisers can use the production tools option (tenant switch or default)</strong><br><small>Tenant</small><br><small class="controls__note">Plan for Teams events lists the town hall version as 'No control' for admins; webinars and meetings with presenters are not covered there.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can control production tools in an event (organiser setting)</strong><br><small>User</small><br><small class="controls__note">Path is documented for town halls; the page does not cover webinars or meetings with presenters. Set by the organiser, not an admin.</small></td><td data-label="Admin UI"><strong>Microsoft Teams (organiser meeting options)</strong><br>Calendar › town hall › View event › Manage event › Meeting options › Production tools › Who has control of production tools <a href="https://support.microsoft.com/office/control-town-hall-production-tools-in-microsoft-teams-8a19026b-43d1-45e3-b306-35610d83e5f1" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's Plan for Teams events page lists the town hall version of this option with "No control" for admins, and the MicrosoftTeams module's Set-CsTeamsEventsPolicy syntax lists no production-tools parameter, so the first row records that no admin switch is documented at the time of writing (November 2026). The Learn page does not cover webinars or meetings with presenters for this option.

The organiser setting is set per event, before or during the event. The path in the second row is taken from the town hall Support page, and the town hall page notes that changes made during an event take effect immediately. The same page documents no API call for the option.

## Open questions

- Who holds production control in a meeting with presenters or a webinar before the organiser changes the option, and what does "enabled by default" mean for the dropdown? Watch MC1443520 and the Teams events documentation.
- Will Microsoft add a tenant policy to restrict or set a default for who can control production tools? The town hall comparison lists admins as having no control.
- Do the town hall choices (**Organizer and co-organizers**, **Organizer, co-organizers, and presenters**, **Specific people**) apply unchanged to webinars and meetings with presenters?
- Does the option need a licence or have a licence-dependent feature, such as Teams Premium? None is named at the time of writing (November 2026).

<!-- rationale
risk: Low. The option only changes which people in an event already hold production controls, and Microsoft's notice says it is enabled by default; what the default setting of the dropdown is has not been stated.
cost: Low. The only cost the sources show is admin and organiser time for communication and training; no licence or meter is named, and licensing is not yet published.
impact: Medium. Organisers of meetings with presenters and webinars, and the production staff they designate, will see a new option in meeting options; other users will not.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is not yet published, and Microsoft Learn documents no licensing for the option's capabilities. | Found: Advanced event features: These licenses provide the full Teams events feature set. They include the foundational capabilities plus advanced features such as event workflows, customization, production controls, monitoring, insights, and higher engagement event capacity. | Fix: Retain licensing.model 'unknown' only for separate licensing of the new dropdown. Replace the unqualified unpublished-licensing statements in licensing.notes, Cost and licensing, Open questions and the cost rationale with: 'Microsoft publishes licensing for the event capabilities this option controls: Manage what attendees see is an advanced event feature, available with licences including Office 365 E1, E3 and E5 and Microsoft 365 E3, E5 and E7. Separate licensing or a meter for the new production-control dropdown is not specified.' Cite https://learn.microsoft.com/microsoftteams/events-licensing. Retain the low cost rating for the documented communication and training work. | Source: https://learn.microsoft.com/microsoftteams/events-licensing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; What's changing; Scope / record: Microsoft is introducing Who has control of production tools for meetings with presenters and webinars. | Found: Microsoft Teams is introducing a new meeting option for meetings with presenters and webinars that allows organizers to specify who has control of production tools during an event. | Fix: Add: 'Microsoft Learn currently differs from the notice: its feature comparison marks this option unavailable for meetings and events up to 1,000 attendees, and available for events optimized for large audiences.' Cite https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison.
- [supported, minor] What's changing; Scope: Rollout / record: Targeted Release began in mid-August 2026. | Found: Targeted Release: Beginning in mid-August 2026 and expect to complete by late August 2026 | Fix: Replace 'Targeted Release began mid-August 2026' in Scope with 'Targeted Release was scheduled to begin in mid-August 2026'; the notice gives a schedule, not confirmation of the actual start.
-->
