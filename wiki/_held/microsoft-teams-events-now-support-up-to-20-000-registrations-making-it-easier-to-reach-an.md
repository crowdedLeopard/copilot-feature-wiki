---
title: "Microsoft Teams: events registration capacity rises to 20,000"
slug: "microsoft-teams-events-now-support-up-to-20-000-registrations-making-it-easier-to-reach-an"
roadmapId: 574110
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams webinars and town halls will accept up to 20,000 registrations per event from December 2026. Over 3,000 needs an Attendee Capacity Pack for the organiser. No admin action is required, but pack sizing needs checking."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Teams Enterprise organisers can allow up to 3,000 registrations; up to 20,000 needs an Attendee Capacity Pack, an add-on for Teams Enterprise (MC1557760; Learn pack page). A price for packs is not yet published on those pages."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["teams","teams-events","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 574110"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574110"
    kind: "roadmap"
  - title: "MC1557760: Microsoft Teams: Registration capacity for town halls and webinars increases to 20,000"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1557760"
    kind: "message-center"
  - title: "Attendee Capacity Pack for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack"
    kind: "learn"
  - title: "Manage Attendee Capacity Pack add-on licenses for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage"
    kind: "learn"
  - title: "Meetings and events feature and capacity comparison"
    url: "https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
videos: []
related: ["microsoft-teams-invite-attendees-to-register","microsoft-teams-ability-to-separate-out-the-townhall-attendee-invites","microsoft-teams-teams-events-attendance-and-engagement-report-policy"]
controls:
  - governs: "Attendee Capacity Pack assignment to organisers"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Add-on Licenses > Teams Events > Licenses > Assign to new users"
      docs: "https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage"
    api: null
    note: "Global Administrator role to manage; Teams Administrator is read-only. One pack per organiser."
  - governs: "Whether users can create webinars (events up to 1,000 attendees)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events up to 1k attendees"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowWebinars Enabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Existing control. Learn labels it by 1,000 attendees; whether it governs webinars above that size is not stated."
  - governs: "Whether users can create events optimised for a large audience (town halls)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Enabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Existing control; Microsoft's notice says events policies don't change."
  - governs: "Who can attend town halls created under a policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Who can attend events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallEventAttendeeAccess Everyone"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Existing control. The matching setting for events up to 1,000 attendees is EventAccessType."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-16T22:00:35"
changes:
  - date: "2026-11-22"
    note: "First briefing: registration capacity for Teams webinars and town halls rises to 20,000 from December 2026, with the Attendee Capacity Pack needed above 3,000."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 55
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "6850752d034fcd7579210fda3cfce1a1"
---

## What's changing

From December 2026, registration capacity for Microsoft Teams town halls and webinars scales with the event's attendee capacity, up to 20,000 registrations per event. Microsoft's notice MC1557760 (published 2026-11-17) says organisers with Teams Enterprise can allow up to 3,000 registrations and organisers with Attendee Capacity Packs can allow up to 20,000.

The notice gives a Worldwide General Availability rollout starting in early December 2026 and expected to complete by late December 2026, and states no action is required. It adds that large webinars with registration don't support broadcast-style streaming, which is available with town halls, that organisers still need the right events policy, and that Microsoft plans to support more registrations per event in future releases.

The roadmap record (item 574110) lists the item as In development, with a target date of December CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. Dates are Microsoft's targets, not commitments.

The Learn page [Meetings and events feature and capacity comparison](https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison) still lists registration as up to 1,000 attendees at the time of writing (November 2026). The notice and the roadmap are the later statements of the new limit.

## Why it matters

Registration limits decide which events an organiser can plan with sign-up. Anything in internal training or guidance that quotes a 1,000-registration limit will be out of date once the rollout reaches your tenant; the notice itself suggests updating such material.

The change arrives without an admin step, so the practical decision is licensing. Organisers who need more than 3,000 registrations need an Attendee Capacity Pack of the right size, and Microsoft Learn says each organiser can be assigned only one pack. Decide which organisers need which size before the rollout, so large registration events are not planned beyond what the licence allows.

## Risk assessment

**Data exposure**
- No change is documented to what data the feature reads or where it goes: MC1557760 lists no compliance considerations and says existing Teams events policies and admin controls don't change.

**Security & identity**
- Events policies still decide who can schedule events and who can attend them. Check the attendee-access settings (see the controls table) before organisers open registration to a much larger audience.

**Autonomy & actions**
- No autonomous behaviour is described: the capacity is something an organiser sets when scheduling an event.

**Change & support**
- Organisers without a pack are limited to 3,000 registrations, so expect support questions from people who read 20,000 and assume it applies to them.
- Large webinars with registration don't support broadcast-style streaming, which town halls do (MC1557760); organisers choosing between the two formats may need guidance.
- If an assigned pack is later removed, Learn says upcoming events might no longer be eligible to run at the originally scheduled capacity; Teams notifies both the admin and the organiser.

## Cost and licensing

**Licence.** Per MC1557760, organisers with Teams Enterprise can allow up to 3,000 registrations and organisers with Attendee Capacity Packs can allow up to 20,000. Learn describes Attendee Capacity Packs as add-on licences for Teams Enterprise that let organisers host events beyond the 3,000-attendee limit, in sizes of 5K, 10K, 20K, 35K, 50K, 75K and 100K ([Attendee Capacity Pack for Teams events](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/attendee-capacity-pack)).

**How packs combine.** Learn states that the capacity included with Teams Enterprise and a pack aren't combined (a 20,000 pack gives 20,000, not 23,000), and that each organiser can be assigned only one pack.

**Price.** A price for Attendee Capacity Packs is not yet published on the Learn pages for packs, and a registration-specific charge is not yet published either. Buying and assigning packs is covered in the controls table.

## Scope

**Who is affected.** Organisers of Teams town halls and webinars that use registration, and admins who manage Teams events policies and Attendee Capacity Pack licences (MC1557760).

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with General Availability and Targeted Release phases. The notice gives a Worldwide rollout from early December 2026 to late December 2026.

**Prerequisites.** Organisers need the right events policy. The notice says no new policy access is needed, only the right Attendee Capacity Pack where applicable. Learn says a Global Administrator manages pack assignments in the Teams admin center; Teams Administrators have read-only access.

## Governance guidance

### Before rollout
- Identify organisers who plan events needing more than 3,000 registrations and decide which pack size each needs, remembering that one pack is assigned per organiser (Add-on Licenses > Teams Events row in the controls table).
- Check the current stock of packs and who holds them on the Teams Events page of the Teams admin center.
- Review the Events policies in the controls table to confirm the webinar and town hall settings match who should schedule and attend large events.
- Update internal training and documentation that quote a 1,000-registration limit, as the notice recommends.

### At rollout
- Tell organisers the new limits: up to 3,000 registrations with Teams Enterprise, up to 20,000 with a pack, rolling out between early and late December 2026 per MC1557760.
- Assign packs through the Teams admin center, using the Licenses tab, to organisers who need them.
- Explain to organisers that large webinars with registration don't support broadcast-style streaming, which town halls do.

### After rollout
- Check the Usage reports tab on the Teams Events page to see how packs are used across the organisation.
- Review the event inventory before removing or changing a pack, because Learn warns upcoming events may no longer run at the scheduled capacity.
- Confirm with a pilot organiser that registration above 3,000 works with their assigned pack, and raise any gap with Microsoft.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Attendee Capacity Pack assignment to organisers</strong><br><small>User</small><br><small class="controls__note">Global Administrator role to manage; Teams Administrator is read-only. One pack per organiser.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Add-on Licenses › Teams Events › Licenses › Assign to new users <a href="https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create webinars (events up to 1,000 attendees)</strong><br><small>User</small><br><small class="controls__note">Existing control. Learn labels it by 1,000 attendees; whether it governs webinars above that size is not stated.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events up to 1k attendees <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowWebinars Enabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can create events optimised for a large audience (town halls)</strong><br><small>User</small><br><small class="controls__note">Existing control; Microsoft's notice says events policies don't change.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Enabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can attend town halls created under a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. The matching setting for events up to 1,000 attendees is EventAccessType.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Who can attend events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallEventAttendeeAccess Everyone</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The pack assignment is done in the Teams admin center and, per Learn, needs the Global Administrator role; Teams Administrators have read-only access to License Management. Microsoft Learn's pack pages document the Teams admin center only for assignment.

The events policy toggles are labelled by attendee count (up to 1k attendees and optimised for a large audience). Microsoft's notice says existing events policies and admin controls don't change; it does not say which toggle governs a webinar with more than 1,000 registrations. Treat the rows as the existing controls the notice points to, and confirm the behaviour in a pilot.

No separate admin setting for the registration limit itself is documented at the time of writing (November 2026).

## Open questions

- Which events policy setting applies to webinars with more than 1,000 registrations, given the toggle is labelled "Events up to 1k attendees"? Watch the Learn page on managing who can schedule events and Message center.
- Will registration limits for each pack size below 20K follow the pack's attendee capacity exactly? Watch the Learn feature comparison page, which still lists registration at 1,000 attendees.
- What do Attendee Capacity Packs cost, and is there any charge specific to registration above 3,000? Not yet published on the Learn pack pages.
- Is there an API or script for assigning Attendee Capacity Packs? Not documented on the Learn pack pages at the time of writing.

<!-- rationale
risk: Low. Microsoft's notice MC1557760 says existing events policies and admin controls don't change and lists no compliance considerations; the exposure is organisers planning events the licence cannot cover.
cost: Medium. Registration above 3,000 per event needs an Attendee Capacity Pack, an add-on licence assigned per organiser; Microsoft Learn's pack pages state no price at the time of writing.
impact: Medium. Organisers of webinars and town halls with registration see the higher limit; other users and admins notice only if they manage events policies or pack licences.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table; Open questions / absence: No API or script is documented for assigning Attendee Capacity Packs. | Found: You can use the Microsoft 365 admin center or PowerShell to assign licenses to users in your organization. | Fix: Replace controls[0].api null with kind 'graph', call 'POST /v1.0/users/{id}/assignLicense', docs 'https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0'. Add to the row note: 'The request body uses addLicenses with the purchased pack skuId; removeLicenses identifies licences to remove.' Cite that reference and https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses. Remove the Open questions bullet implying assignment automation is undocumented. The general Teams add-on assignment guide covers the licence class that the cited pack page explicitly places these packs in; absence from the pack-specific pages does not establish absence of automation. | Source: https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: targetDate; summary; What's changing; changes[0] / record: The roadmap target is December CY2026, expressed as firm December availability in the summary and opening prose. | Found: "targetDate": "December CY2026", "status": "In development" | Fix: Change the summary's first sentence to 'Teams webinars and town halls are expected to gain up to 20,000 registrations per event during December 2026.' Change 'From December 2026' in What's changing to 'During the planned December 2026 rollout'. The roadmap target remains 'December CY2026', not a commitment.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance / admin-path: The pack assignment path is Teams admin center > Add-on Licenses > Teams Events > Licenses > Assign to new users. | Found: In the Teams admin center, go to Add-on Licenses > Teams Events. On the Licenses tab, select Assign to new users to get started. | Fix: Extend controls[0].ui.path to 'Add-on Licenses > Teams Events > Licenses > Assign to new users > Assign Add-on licenses > Attendee pack'. The cited page says to select the organisers in the pane and select each user's pack size in the Attendee pack column; the existing path stops at the entry to that pane. | Source: https://learn.microsoft.com/microsoftteams/attendee-capacity-pack-manage
- [contradicted, minor] Cost and licensing: Price; Governance controls table / consistency: The prose says buying and assigning packs are covered in the controls table, but the table contains assignment only. | Found: Buying and assigning packs is covered in the controls table. / Attendee Capacity Pack assignment to organisers: Add-on Licenses > Teams Events > Licenses > Assign to new users | Fix: Replace 'Buying and assigning packs is covered in the controls table.' with 'Assigning packs is covered in the controls table.' Do not add a purchase row.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells administrators to check Usage reports, but that monitoring control has no table row. | Found: Check the Usage reports tab on the Teams Events page to see how packs are used across the organisation. / Table rows: pack assignment, webinar creation, large-audience event creation, town hall attendee access. | Fix: Remove the 'Check the Usage reports tab' checklist bullet to keep the checklist aligned with the existing table. Do not add a control row.
- [contradicted, minor] Governance controls: final paragraph; Governance controls table / consistency: The prose reports a missing separate registration-limit control, but the controls table does not show that gap. | Found: No separate admin setting for the registration limit itself is documented at the time of writing (November 2026). / Table rows: pack assignment and three existing events-policy controls. | Fix: Remove the final Governance controls sentence about the separate registration-limit setting so the prose does not claim a missing control absent from the table. Do not add a row.
-->
