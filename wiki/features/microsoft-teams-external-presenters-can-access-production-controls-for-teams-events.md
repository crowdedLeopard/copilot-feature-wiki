---
title: "Microsoft Teams: external presenters can control event production tools"
slug: "microsoft-teams-external-presenters-can-access-production-controls-for-teams-events"
roadmapId: 567298
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Event organisers can give federated (B2B) and guest users control of production tools in Teams events. It is an organiser choice; the roadmap and Learn show no admin switch, so tell organisers and check join verification."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Production controls are included in Advanced event features, with event capabilities determined by the organiser licence; enterprise licences listed are Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7. Microsoft has not published a licence requirement specific to the external presenter holding production control."
audiences: ["m365-admin","security","service-owner","change-adoption"]
tags: ["teams","teams-events","guest-access","cross-tenant","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 567298"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567298"
    kind: "roadmap"
  - title: "MC1443517: (Updated) Microsoft Teams: External presenters can manage event production controls"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1443517"
    kind: "message-center"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Control town hall production tools in Microsoft Teams"
    url: "https://support.microsoft.com/office/control-town-hall-production-tools-in-microsoft-teams-8a19026b-43d1-45e3-b306-35610d83e5f1"
    kind: "docs"
  - title: "Manage what attendees see in Teams meetings"
    url: "https://support.microsoft.com/office/manage-what-attendees-see-in-teams-meetings-19bfd690-8122-49f4-bc04-c2c5f69b4e16"
    kind: "docs"
  - title: "Manage join verification for external presenters in Teams events"
    url: "https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Meetings and events feature and capacity comparison"
    url: "https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison"
    kind: "learn"
videos: []
related: ["microsoft-teams-external-presenter-support-for-event-group-chat","meeting-policy","microsoft-teams-teams-events-attendance-and-engagement-report-policy"]
controls:
  - governs: "Who has control of production tools in an event (organiser setting)"
    scope: "other"
    ui:
      surface: "Teams (organiser, event meeting options)"
      path: "Calendar > town hall > View event > Manage event > Meeting options > Production tools > Who has control of production tools"
      docs: "https://support.microsoft.com/office/control-town-hall-production-tools-in-microsoft-teams-8a19026b-43d1-45e3-b306-35610d83e5f1"
    api: null
    note: "Set by the organiser, not an admin. The page lists internal options and does not yet mention external users. Learn documents no admin switch or API for it."
  - governs: "Whether external presenters must verify their identity before joining events"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Verify external presenters before joining an event"
      docs: "https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -ExternalPresenterJoinVerification EOTP"
      docs: "https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification"
    note: "Existing control for anonymous and unverified external presenters. Microsoft has not confirmed it covers production control. Default is No verification needed."
  - governs: "Whether organisers can create events optimised for large audiences (blunt fallback)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Existing control; turning it Off after scheduling stops users running or starting the event. It does not target external presenters or production control."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-25"
roadmapModified: "2026-08-05T22:47:32"
changes:
  - date: "2026-11-18"
    note: "New briefing: organisers can give federated and guest users production control; no admin control for it is documented, so existing events policy settings are listed as fallbacks."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the licensing statement (event capabilities depend on the organiser's licence) and the event-type statement (the feature comparison lists the setting for events optimised for large audiences); updated open questions to match."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the licensing model: production controls are listed under Advanced event features, which depend on the organiser's licence. Added a source for the shared-content statement."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f15f3f114e4096f03e6c26d97453c163"
---

## What's changing

Microsoft Teams event organisers can name federated (B2B) users and guest users in the **Who has control of production tools** setting, so trusted external producers, agencies and vendors can run an event and manage what attendees see. The roadmap item describes this as supporting organisations that work with third-party event producers.

Microsoft's notice MC1443517 (published 2026-07-31, last updated 2026-11-17) says the capability is available only when an organiser explicitly assigns production control access, and that existing events and configurations are not modified automatically. It asks for no admin action before rollout and recommends that administrators review guidance for events with external participants, tell organisers, decide which external presenters or partners may receive production control, and update training.

Microsoft Learn does not yet describe the external-user behaviour. The town hall page on production tools lists the options **Organizer and co-organizers**, **Organizer, co-organizers, and presenters** and **Specific people**, and says people with production control can start the event, manage what attendees see and end the event. It does not mention external users, so what follows about external behaviour is the roadmap item's and the notice's description.

The roadmap record gives the status as Rolling out with a target of August CY2026, in Targeted Release and General Availability, for Worldwide, GCC, GCC High and DoD, on Desktop, Mac and Web. MC1443517 gives Targeted Release as beginning in early August 2026 and expected to complete by early October 2026, and General Availability as beginning early August 2026 and expected to complete by late November 2026 (previously early November).

## Why it matters

This moves a sensitive role, running the live event, outside the tenant. A production controller can change what attendees see, and the town hall page adds starting and ending the event, so the choice of external person matters as much as the choice of internal co-organiser.

The decision sits with each organiser. The Teams events planning page lists "Who has control of production tools" as organiser-controlled with no admin control, so the practical levers are communication, the existing events policy settings and verification of external presenters. If nobody acts, nothing in the sources says existing events change; the exposure arises when an organiser assigns the role.

## Risk assessment

**Data exposure**
- Production control determines what attendees see, so an external controller can put presenters or shared content on the live stage. What else an external controller can reach is not stated in the sources, so test with a non-sensitive event before approving vendors for sensitive ones.

**Security & identity**
- The notice names federated (B2B) and guest users. Unverified external presenters are treated as anonymous users in the event, so join verification (events policy row in the table) is the documented check on who an external presenter is. Learn does not say whether it applies to production control specifically.
- The planning page shows admins have no control over inviting external presenters, and none over production tool assignment.

**Autonomy & actions**
- Production control includes starting and ending the event, per the town hall page. A mistake or a misused role by an external person can end a live event for attendees. No admin control limits this per person.

**Change & support**
- Organisers decide, so expect help-desk and event-team questions rather than a policy change. The notice's recommended steps are guidance, training and agreeing which partners may receive production control.
- The notice's updated timeline moved the General Availability completion from early November to late November 2026, so confirm in your tenant before briefing organisers.

## Cost and licensing

Microsoft has not published a licence requirement or price specific to external presenters holding production control (Not yet published). The roadmap record and MC1443517 name no licence and no meter.

The Teams events licensing overview groups licences into Foundational and Advanced event features. It says Advanced event features include "production controls", and that to access the full set of Teams events features users must have a licence from the Advanced category. It lists Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7 for Enterprise. Event capabilities depend on the organiser's licence; production controls are Advanced event features. Microsoft has not published a licence requirement specific to the external presenter holding production control.

The indirect cost is admin and organiser time: briefing organisers, agreeing which vendors may be trusted and updating training. No meter is documented for this feature at the time of writing (November 2026).

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Desktop, Mac and Web, in Targeted Release and General Availability. MC1443517 gives the rollout windows quoted above.

The notice says affected people are organisations that use Teams events, event organisers who work with external presenters, and federated (B2B) and guest users invited to events. It says organisers can grant production control to those users. Learn's production tools page describes town halls. Microsoft's feature comparison lists Who has control of production tools for events optimised for large audiences, not for the Events up to 1,000 attendees category.

An external presenter must still be added to the event first: the Learn page says that for the **Specific people** option people must already be added to the town hall to appear in the search field.

## Governance guidance

### Before rollout
- Tell event organisers about the new option, as the notice recommends, and name who may approve external producers.
- Decide which agencies, vendors or partners may receive production control, and record that as event guidance.
- Decide whether to require identity verification for external presenters with the events policy row in the table, and test it with an external presenter.
- Update organiser training and any event runbooks that assume only internal staff run production.

### At rollout
- Ask organisers to assign production control only to named external people (the **Specific people** option) rather than to all presenters.
- Confirm which external presenters hold production control in each event before it starts, using the event's meeting options.
- Check the rollout in your tenant against the notice's windows; General Availability is expected to finish by late November 2026.

### After rollout
- Review feedback from organisers and events that used external producers, and adjust guidance.
- Revisit the events policy rows in the table if you decide a blunter control is needed, knowing they do not target external presenters.
- Watch MC1443517 and the Teams events planning page for the admin control or licensing detail Microsoft has not yet published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who has control of production tools in an event (organiser setting)</strong><br><small class="controls__note">Set by the organiser, not an admin. The page lists internal options and does not yet mention external users. Learn documents no admin switch or API for it.</small></td><td data-label="Admin UI"><strong>Teams (organiser, event meeting options)</strong><br>Calendar › town hall › View event › Manage event › Meeting options › Production tools › Who has control of production tools <a href="https://support.microsoft.com/office/control-town-hall-production-tools-in-microsoft-teams-8a19026b-43d1-45e3-b306-35610d83e5f1" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether external presenters must verify their identity before joining events</strong><br><small>User</small><br><small class="controls__note">Existing control for anonymous and unverified external presenters. Microsoft has not confirmed it covers production control. Default is No verification needed.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Verify external presenters before joining an event <a href="https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -ExternalPresenterJoinVerification EOTP</code> <a href="https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers can create events optimised for large audiences (blunt fallback)</strong><br><small>User</small><br><small class="controls__note">Existing control; turning it Off after scheduling stops users running or starting the event. It does not target external presenters or production control.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Production control is set by the organiser in the event's meeting options, not by an admin. The planning page lists no admin control for it, and Microsoft Learn documents no events policy parameter for who holds production control at the time of writing (November 2026).

The two events policy rows are existing controls an admin can use today. Join verification covers whether external presenters verify their identity before joining. The AllowTownhalls row is a blunt control over whether organisers with the policy can create events optimised for large audiences. Neither targets production control.

## Open questions

- Does Microsoft plan an admin setting or policy parameter to restrict external production control? Watch Message center MC1443517 and the Teams events planning page.
- Which licence, if any, must the external presenter hold to receive production control? Watch the Teams events licensing overview.
- Does join verification apply to federated and guest users given production control, or only to unverified external presenters? Watch the join verification page.
- Will the General Availability window finish by late November 2026 as MC1443517 now states, given it has moved before?

<!-- rationale
risk: Medium. People outside the organisation can be given production control (the town hall page lists starting and ending the event and managing what attendees see), and Microsoft Learn documents no admin setting for it.
cost: Low. The only cost the sources show is admin and organiser time; licensing for external presenters in particular is not yet published, and no meter is documented for this feature at the time of writing (November 2026).
impact: Low. Only organisers who work with external producers and the presenters they pick notice it, and Microsoft's notice says existing events and configurations are not changed automatically.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api; Governance controls table / command: Set-CsTeamsEventsPolicy -Identity <policy name> -ExternalPresenterJoinVerification EOTP requires external presenter identity verification. | Found: To require external presenters to verify their identity before joining events created by organizers with this policy ... Set-CsTeamsEventsPolicy -Identity <policy name> -ExternalPresenterJoinVerification EOTP | Fix: Keep the documented call. Add this sentence to the row note and cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps: 'The join-verification guide documents this parameter, but the cmdlet reference currently omits it and describes the events policy as still in preview.' | Source: https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification
-->
