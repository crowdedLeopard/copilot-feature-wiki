---
title: "Microsoft Teams: AI Interpreter for town halls and webinars"
slug: "microsoft-teams-ai-interpreter-for-teams-events"
roadmapId: 576711
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans AI audio interpretation for Teams town halls and webinars, with organisers choosing the languages. Licensing, default and admin controls are not yet published; no action is needed before the February CY2027 target."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for events. The Interpreter agent page lists Teams events as not supported; for meetings it gives a Microsoft Copilot licence (simultaneous) and Copilot Credits charged to the organiser's billing policy (consecutive)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-events","interpreter-agent","meeting-policy","real-time","ai"]
sources:
  - title: "Microsoft Teams: AI Interpreter for Teams Events"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576711"
    kind: "roadmap"
  - title: "Manage Interpreter agent for your organization"
    url: "https://learn.microsoft.com/microsoftteams/interpreter-agent-teams"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Meetings and events feature and capacity comparison"
    url: "https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison"
    kind: "learn"
videos: []
related: ["microsoft-teams-interpreter-agent-support-in-teams-rooms-on-android","meeting-policy","copilot-credits"]
controls:
  - governs: "Whether AI Interpreter can be used in town halls and webinars"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no events-specific setting at the time of writing (November 2026)."
  - governs: "Whether users can use Interpreter in Teams meetings (not documented for events)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AIInterpreter Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/interpreter-agent-teams"
    note: "Enabled by default. Governs meetings; the Interpreter page lists Teams events as not supported and says to manage Interpreter with PowerShell."
  - governs: "Whether organisers can create events optimised for a large audience (town halls)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Blunt fallback: stops town halls for organisers with this policy, not interpretation alone. The Set-CsTeamsEventsPolicy reference labels this policy as currently still in preview."
  - governs: "Whether organisers can create events with up to 1,000 attendees (webinars)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events up to 1k attendees"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowWebinars Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Blunt fallback: stops webinars for organisers with this policy, not interpretation alone. The Set-CsTeamsEventsPolicy reference labels this policy as currently still in preview."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-26"
    note: "New briefing: AI Interpreter for Teams town halls and webinars, in development with a February CY2027 target."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: town hall caption languages without Teams Premium, consecutive interpretation prerequisites in the cost rationale, removed an unsupported claim about human interpreters, and noted the events policy is in preview."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "084770483182bde3cec17aa4296ef5ca"
---

## What's changing

Microsoft plans to add real-time, AI-powered audio interpretation to Teams town halls and webinars. According to the roadmap item, organisers configure the supported languages for their event, and attendees follow the event in their preferred language as interpreted audio, which goes beyond translated captions.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The existing [Interpreter agent](https://learn.microsoft.com/microsoftteams/interpreter-agent-teams) works in Teams meetings and calls, and its admin page lists Teams events as not supported at the time of writing (November 2026). Microsoft has not said how the events version relates to that agent, or whether it shares its policies, voices or languages.

The item is **In development**, with a target of **February CY2027**, for General Availability and Targeted Release. The record lists the Worldwide (Standard Multi-Tenant) cloud and the Android, Desktop, iOS, Mac and Web platforms. No Message Center post has been supplied for it.

## Why it matters

Town halls and webinars are often the largest and most outward-facing Teams sessions an organisation runs, and can include external attendees. Interpreted audio means a spoken message reaches those audiences in words generated by an AI service rather than said by the presenter, so communications and legal teams will want a say in when it is used. For meetings, Microsoft describes Interpreter as real-time speech-to-speech translation using Azure Cognitive Services, with a bot that transmits meeting audio for cloud-based processing; whether events work the same way is not documented.

Microsoft has not stated what happens on arrival: whether organisers see the option automatically or an administrator must enable it. No source says existing events change unless an organiser configures languages. Cost is the other open point: the meetings version is tied to Microsoft Copilot licences and Copilot Credits, and the model for events is not yet published.

## Risk assessment

**Data exposure**
- Event audio would be sent for AI interpretation. For meetings, Microsoft documents that a bot transmits audio for cloud-based processing; the processing path and data handling for events are not yet documented.

**Security & identity**
- In meetings, Interpreter can simulate a speaker's voice, governed by the meeting policy's -VoiceSimulationInInterpreter parameter. Whether events offer voice simulation, and which setting would govern it, is not documented.

**Autonomy & actions**
- Interpretation speaks for the presenter in another language. A mistranslated announcement in a company-wide town hall reaches every listener of that language at once.

**Change & support**
- Microsoft Learn documents no events policy setting for interpretation at the time of writing (November 2026). Until one appears, the documented way to keep it out of events is to stop organisers creating town halls or webinars through the Teams events policy.
- Organisers and helpdesk staff will need to explain the difference between translated captions and interpreted audio, and which licence each needs.

## Cost and licensing

**Licence for this feature:** Not yet published. The [Interpreter agent page](https://learn.microsoft.com/microsoftteams/interpreter-agent-teams) lists Teams events as not supported, so its licensing does not describe this feature.

**What the meetings version needs, for comparison:** the same page states that the Interpreter agent is available as part of the Microsoft Copilot license, with 20 hours of interpretation included per user per month. Consecutive interpretation in meetings is a usage-based billing experience that consumes [Copilot Credits](/concepts/copilot-credits/), charged to the eligible meeting organiser's applicable billing policy. Microsoft's [meetings and events feature comparison](https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison) instead lists Interpreter for meetings as "Premium or Microsoft Copilot"; the Interpreter prerequisites page lists Microsoft Copilot.

**Related events feature:** for live translated captions, the meeting or event organiser must have a Teams Premium licence, according to the [captions admin page](https://learn.microsoft.com/microsoftteams/meeting-transcription-captions). For events optimized for large audiences, such as town halls, organisers can preselect up to ten languages for attendees to use during the event without Teams Premium.

**Indirect costs:** admin time to decide policy, and organiser time to set languages and brief presenters. A meter, rate or included hours for events are not yet published.

## Scope

- **Events:** town halls and webinars, per the roadmap item. Ordinary Teams meetings are covered by the existing Interpreter agent, not this item.
- **Who configures it:** event organisers choose the languages, per the roadmap item. Which roles or licences they need is not yet published.
- **Languages:** not yet published for events. For meetings, Interpreter supports Chinese (Mandarin), English, French, German, Italian, Japanese, Korean, Portuguese and Spanish.
- **Clouds:** Worldwide (Standard Multi-Tenant), as listed on the roadmap record.
- **Platforms:** Android, Desktop, iOS, Mac and Web.
- **Rollout:** Targeted Release and General Availability, target February CY2027.

## Governance guidance

### Before rollout
- Decide with communications and legal teams whether AI-interpreted audio is acceptable in company-wide town halls and in public webinars.
- Check which events policies have **Events optimized for a large audience** and **Events up to 1k attendees** turned on, so you know which organisers could use the feature.
- Check the current -AIInterpreter value in your Teams meeting policies, so the events decision is consistent with what meetings allow.
- Watch Message center and the Interpreter agent page for the events licensing model and any new events policy setting.

### At rollout
- Confirm whether the option appears for organisers by default or needs an administrator to enable it, and record the answer for the helpdesk.
- Brief town hall and webinar organisers on choosing languages and on telling attendees that the audio is AI-interpreted.

### After rollout
- Review a sample of interpreted events with organisers for accuracy in the languages your audiences use.
- Reconcile any Copilot licence or Copilot Credits use against the events model once Microsoft publishes it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI Interpreter can be used in town halls and webinars</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no events-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can use Interpreter in Teams meetings (not documented for events)</strong><br><small>User</small><br><small class="controls__note">Enabled by default. Governs meetings; the Interpreter page lists Teams events as not supported and says to manage Interpreter with PowerShell.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AIInterpreter Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/interpreter-agent-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers can create events optimised for a large audience (town halls)</strong><br><small>User</small><br><small class="controls__note">Blunt fallback: stops town halls for organisers with this policy, not interpretation alone. The Set-CsTeamsEventsPolicy reference labels this policy as currently still in preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers can create events with up to 1,000 attendees (webinars)</strong><br><small>User</small><br><small class="controls__note">Blunt fallback: stops webinars for organisers with this policy, not interpretation alone. The Set-CsTeamsEventsPolicy reference labels this policy as currently still in preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events up to 1k attendees <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowWebinars Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no events-specific control for AI interpretation at the time of writing (November 2026): the Set-CsTeamsEventsPolicy syntax lists no interpretation parameter, and the Interpreter agent page lists Teams events as not supported. The meeting policy -AIInterpreter row governs Interpreter in meetings; it is not documented to govern events. The Interpreter page states that PowerShell is used to manage Interpreter for the entire organisation. The two events policy rows stop organisers creating town halls or webinars altogether, which removes far more than interpretation; if the value is changed to Off after an event is scheduled, the organiser can't run or start that event.

## Open questions

- Will AI Interpreter for events be on for organisers by default, and will a new Teams events policy setting control it? Watch Message center and the Teams events admin pages.
- Which licence does an organiser or attendee need, and does use consume Copilot Credits or the 20 included hours of a Microsoft Copilot licence? Watch the Interpreter agent page.
- Do the meeting policy -AIInterpreter and -VoiceSimulationInInterpreter settings apply to town halls and webinars?
- Which languages will events support, and can external attendees listen to interpreted audio?
- Is event audio processed the same way as in meetings, and does interpreted audio appear in event recordings or transcripts?

<!-- rationale
risk: Medium. Event audio would be interpreted by an AI service for large and possibly external audiences, and Microsoft Learn documents no events-specific switch yet; the documented fallback is to stop town halls or webinars.
cost: Low. Licensing is not yet published, so the only known cost is admin and organiser time. Consecutive interpretation in meetings requires Microsoft Copilot (Premium) for the organiser and Copilot Credits usage-based billing; budget once Microsoft publishes the events model.
impact: Medium. Town hall and webinar organisers and their attendees notice it, in events where an organiser sets up interpretation languages.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; summary; Cost and licensing; rationale: cost / licensing: Licensing specific to AI Interpreter for events is not yet published, represented by licensing model unknown. | Found: each user in your organization must have a Teams license before they can use Teams. Searched: Teams events town hall webinar AI audio interpreter pricing Copilot Credits billing license; opened Interpreter agent, events-licensing and feature comparison. No feature-specific entitlement is stated. | Fix: Set licensing.model to included to reflect the published product-level requirement, and begin licensing.notes and the licensing paragraph with: 'Teams requires a Teams license for each user in the organisation, except for joining meetings anonymously. Licensing specific to AI Interpreter for events is not yet published.' Cite https://learn.microsoft.com/microsoftteams/user-access. Do not claim that a Teams license alone entitles users to events interpretation. | Source: https://learn.microsoft.com/microsoftteams/user-access
-->
