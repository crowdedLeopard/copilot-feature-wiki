---
title: "Microsoft Teams: separate invites for town hall attendees, presenters and co-organizers"
slug: "microsoft-teams-ability-to-separate-out-the-townhall-attendee-invites"
roadmapId: 476488
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams town hall invites will be split by role, so presenters get their own calendar invite and attendee invites can be managed separately. Rolls out automatically from January 2027; Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor MC1009930 names a licence or meter for this change. Teams events capacity licensing is on the Plan for Teams events page."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-events","gcc","gcc-high"]
sources:
  - title: "MC1009930: (Updated) Microsoft Teams: Distinguish invites among Attendee, Presenter, and Co-organizer emails"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1009930"
    kind: "message-center"
  - title: "Manage email communications for events"
    url: "https://learn.microsoft.com/microsoftteams/manage-email-communications"
    kind: "learn"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 476488"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=476488"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-teams-events-attendance-and-engagement-report-policy","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events","microsoft-teams-external-presenter-support-for-event-group-chat"]
controls:
  - governs: "Whether role-based town hall invites are used"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice says the rollout is automatic with no admin action required; no switch is documented at the time of writing (November 2026)."
  - governs: "Whether organizers and co-organizers can edit event email templates"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Customize event emails"
      docs: "https://learn.microsoft.com/microsoftteams/manage-email-communications"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowEmailEditing Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/manage-email-communications"
    note: "General control: Microsoft has not confirmed it applies to the separated invites. It governs editing of email templates, not who receives which invite."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: town hall invites split by role, with the timeline MC1009930 updated on 16 November 2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 47 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 49 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 48
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "5f76c0951b1437736bc49c47e39be994"
---

## What's changing

Microsoft Teams will send town hall invite emails according to each participant's role. Microsoft's notice MC1009930 says event organizers will get an email explaining the specific roles of participants in the event, and each presenter will get a separate calendar invite. The stated aim is that organizers of town halls can maintain separate invites for attendees.

The roadmap item describes this as a backend change that addresses the "separation of attendee" invites from the events crew. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's and the notice's description. Neither says what each invite contains or how the roles are set in the invite, and neither names a setting.

The roadmap lists the item as In development, with a target date of January CY2027, for Worldwide (Standard Multi-Tenant), GCC and GCC High, on Desktop and Mac, in Targeted Release and General Availability. MC1009930 was updated on 16 November 2026 with a later timeline. Targeted Release: rollout begins early January 2027 (previously early December 2026) and is expected to complete by mid-January 2027 (previously mid-December 2026). General Availability (Worldwide, GCC, GCC High): rollout begins mid-January 2027 (previously mid-December 2026) and is expected to complete by late January 2027 (previously mid-January). The notice has no act-by date.

## Why it matters

The roadmap item frames this as separating attendee invites from the events crew. It matters to service owners mainly because event teams will see different mail and calendar items from January 2027, and the helpdesk may be asked why a presenter's invite differs from an attendee's.

Microsoft states the rollout is automatic and that no admin action is required, so if nobody acts the change still arrives. Microsoft's notice suggests notifying users and updating documentation. This briefing's view is that the people to brief are event organizers and presenters, ahead of the Targeted Release window opening in early January 2027.

## Risk assessment

**Data exposure**

- No new data source is described. The change concerns which invite each role receives. Microsoft has not said what each invite contains, so ask a test organizer to compare the presenter, co-organizer and attendee invites once the change reaches your tenant.

**Security & identity**

- Neither the roadmap item nor MC1009930 says this change alters who can attend or present.

**Autonomy & actions**

- No change: the notice describes invites sent to participants and does not describe any action taken on a user's behalf.

**Change & support**

- Presenters receive a separate calendar invite, so existing instructions that tell presenters to forward or reuse the attendee invite may no longer match what they see. Update event runbooks and helpdesk scripts for town halls.
- MC1009930 gives Targeted Release an earlier rollout window than General Availability, so users in Targeted Release may see the new invites first. Tell event teams which window applies to them.

## Cost and licensing

No licence or meter is named for this change in the roadmap item or in MC1009930, and Microsoft has not published a licence for it. The cost known today is indirect: admin time to brief event organizers and update documentation.

The Plan for Teams events page states that with an Attendee Capacity Pack add-on licence, organizers can scale events up to 100,000 attendees. That is the licensing for event capacity, and Microsoft has not said it relates to this change.

## Scope

The change applies to Teams town hall invites for organizers, co-organizers, presenters and attendees, as described in MC1009930. The roadmap item lists Worldwide (Standard Multi-Tenant), GCC and GCC High, and the Desktop and Mac platforms. MC1009930 gives the General Availability rollout for Worldwide, GCC and GCC High.

The roadmap item and the notice name no prerequisite, role or licence. Rollout is automatic according to the notice.

## Governance guidance

### Before rollout

- Brief town hall organizers and presenters that presenters will get a separate calendar invite from January 2027, using the dates in MC1009930.
- Identify which users are in Targeted Release, since Microsoft's notice gives them an earlier window than General Availability.
- Review any internal town hall runbooks that describe how invites reach presenters and attendees, and mark the steps to confirm after rollout.

### At rollout

- Ask a test organizer to schedule a town hall and compare the organizer email, presenter invite and attendee invite as they arrive.
- Check whether the event email customisation setting in the controls table is set as you expect, as Microsoft has not said whether it applies to this change.

### After rollout

- Collect questions from event teams and update helpdesk guidance for town hall invites.
- Read MC1009930 again for further date changes, as the notice has already been updated once with a later timeline.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether role-based town hall invites are used</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice says the rollout is automatic with no admin action required; no switch is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether organizers and co-organizers can edit event email templates</strong><br><small>User</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the separated invites. It governs editing of email templates, not who receives which invite.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Customize event emails <a href="https://learn.microsoft.com/microsoftteams/manage-email-communications" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowEmailEditing Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-email-communications" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice names no setting that turns this change on or off, and Microsoft Learn documents none at the time of writing (November 2026). The second row is an existing control for event emails; Microsoft has not confirmed it applies to the separated invites.

The event email page says organizers and co-organizers can edit a listed set of email templates, and that the domain used to send event emails can be configured in the Microsoft 365 admin center. Neither is a control over how invites are separated by role.

## Open questions

- What does each invite (organizer email, presenter calendar invite, attendee invite) contain, and what does a co-organizer receive? Watch MC1009930 and the Plan for Teams events page on Microsoft Learn.
- Is there an admin or organizer setting to keep the previous invite behaviour? Watch the Teams events policy reference and Message center.
- Does the Customize event emails setting cover the new invites? Watch the Manage email communications for events page.
- Is any licence required for this change, or does it follow the existing town hall licensing? Watch the Teams events licensing overview.

<!-- rationale
risk: Low. The change alters which invite each participant role receives and adds no new data access; no setting for it is documented, so the exposure is mainly confusion if users are not told.
cost: Low. The roadmap item and Microsoft's notice MC1009930 name no licence or meter; the known cost is admin and communications time. Licensing for this change is not yet published.
impact: Medium. Town hall organizers, co-organizers and presenters get different invites from January 2027, so event teams notice; Microsoft's notice says the change arrives automatically.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: Licensing is unknown because Microsoft has not published licensing specific to separated town hall invites. | Found: All eligible Teams licenses include the foundational capabilities needed to create and run events, engage attendees, review attendance reports, and publish event recordings. | Fix: Set licensing.model to 'included'. Replace the licensing notes with 'Teams events are included in eligible licences, including Office 365 E3 and Microsoft 365 E3. Microsoft has not published licensing specific to role-separated invites.' Cite https://learn.microsoft.com/microsoftteams/events-licensing. In Cost and licensing and the cost rationale, replace the blanket unpublished-licensing statement with 'No licensing specific to role-separated invites is published.' | Source: https://learn.microsoft.com/microsoftteams/events-licensing
- [supported, minor] controls[1].api; Governance controls table / command: Set-CsTeamsEventsPolicy -Identity <policy name> -AllowEmailEditing Disabled turns off event email-template editing. | Found: The following example turns off -AllowEmailEditing so organizers and co-organizers can't edit email templates: Set-CsTeamsEventsPolicy -Identity <policy name> -AllowEmailEditing Disabled | Fix: Keep the command. Add 'The Set-CsTeamsEventsPolicy reference labels this policy as preview' to controls[1].note and the rendered row note. Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps, which says 'Note that this policy is currently still in preview.' The email-management guide does not state that qualification. | Source: https://learn.microsoft.com/microsoftteams/manage-email-communications
- [supported, minor] controls[1].scope; Governance controls table / applicability: The event email-editing policy has user-level scope. | Found: User-level policy for tenant admin to configure options for customizing Teams events experiences. | Fix: Add https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps to sources; keep the user scope. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps
- [supported, minor] summary; Why it matters; Governance guidance: Before rollout; rationale: impact / date: The changed invitations arrive from January 2027. | Found: Targeted Release: We will begin rolling out early January 2027 General Availability (Worldwide, GCC, GCC High): We will begin rolling out mid-January 2027 | Fix: In the summary replace 'Rolls out automatically from January 2027' with 'Automatic rollout is expected to begin in January 2027'. In Why it matters, Before rollout and the impact rationale, replace 'from January 2027' with 'with rollout expected to begin in January 2027'. Keep the detailed attributed notice windows unchanged.
- [unsupported, minor] rationale: risk / behaviour: The change adds no new data access. | Found: Searched: Teams town hall separate role invitations new data access security permissions change. Read the roadmap, MC1009930, Plan for Teams events, Manage email communications and Graph town hall API use cases; none establishes that data access is unchanged. | Fix: Replace 'adds no new data access' with 'describes no new data access' in the risk rationale, matching the body's narrower description of what the notices say.
-->
