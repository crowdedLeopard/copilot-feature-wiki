---
title: "Microsoft Teams: invite people to register for events by email"
slug: "microsoft-teams-invite-attendees-to-register"
roadmapId: 573250
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Organisers of Teams events with registration can email invitations with a registration link. Admins need no preparation, but Microsoft says a tenant without a custom domain for Microsoft 365 notifications will be restricted."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says all eligible Teams licences include the foundational event capabilities, and lists basic registration among them. No licence or price specific to invitations is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-events","m365-admin-center","user-experience","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 573250"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573250"
    kind: "roadmap"
  - title: "MC1537353: (Updated) Microsoft Teams: Invite attendees to register"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1537353"
    kind: "message-center"
  - title: "Manage email communications for events"
    url: "https://learn.microsoft.com/microsoftteams/manage-email-communications"
    kind: "learn"
  - title: "Select the domain to use for email from Microsoft 365 products"
    url: "https://learn.microsoft.com/microsoft-365/admin/email/select-domain-to-use-for-email-from-microsoft-365-products"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Manage event registration in the Microsoft Teams Events app"
    url: "https://support.microsoft.com/teams/meetings-events/events-app-manage-registration"
    kind: "docs"
videos: []
related: ["microsoft-teams-ability-to-separate-out-the-townhall-attendee-invites","microsoft-teams-teams-events-attendance-and-engagement-report-policy","microsoft-teams-external-presenter-support-for-event-group-chat"]
controls:
  - governs: "Sending domain for Microsoft 365 system notification emails, including Teams events"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Organization profile > Send email notifications from your domain > Use a custom send-from domain address"
      docs: "https://learn.microsoft.com/microsoft-365/admin/email/select-domain-to-use-for-email-from-microsoft-365-products"
    api: null
    note: "Opt-in setting per the page; can take up to 24 hours to take effect. Microsoft's notice MC1537353 says a missing custom domain restricts this feature."
  - governs: "Who can attend events up to 1,000 attendees, such as webinars"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Who can attend events up to 1k attendees"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -EventAccessType EveryoneInCompanyExcludingGuests"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Existing control; it decides who can attend, not who can be invited. Default is Everyone."
  - governs: "Who can attend events optimised for a large audience, such as town halls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Who can attend events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Existing control; it decides who can attend, not who can be invited. Default is Everyone."
  - governs: "Switch to turn Invite to register on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-19"
    note: "New briefing: Teams event organisers can email invitations to register; Microsoft's notice asks admins to configure a custom domain for Microsoft 365 notifications."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Corrected the sending-domain admin path to end at Use a custom send-from domain address, and updated the roadmap status in the text to Rolling out."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 63
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "24fbe76225e3aff9cc984a43c12b6435"
---

## What's changing

Teams organisers can send email invitations that link to the registration page of a Teams event that has registration turned on. Microsoft's notice MC1537353 describes this as an expansion of the existing Invite to register experience: organisers select people, and each receives an email with a link to register.

Per the notice, Invite to register is available across event access types: public, organisation-wide, and events limited to specific people and groups. For public and organisation-wide events, an invitation does not change who is eligible to register. For events limited to specific people and groups, the selected audience continues to decide registration eligibility.

The roadmap item (status Rolling out, target November CY2026, General Availability, Worldwide (Standard Multi-Tenant) and GCC, platform Web) matches the notice. The notice, updated 10 November 2026, moves the rollout to start in late November 2026 (previously mid-November) and finish in late November 2026. Microsoft Learn does not yet describe Invite to register itself, so how the feature behaves beyond the roadmap and the notice is not documented at the time of writing (November 2026).

## Why it matters

The visible change is for organisers; the admin-side effect comes from email delivery. The notice says that a tenant without a custom domain configured for Microsoft 365 notifications will have this capability restricted because of spam concerns, and asks admins to configure the domain to allow full use. Teams events already recommends a custom sending domain for event emails, saying it improves deliverability and reduces spam classification.

If nobody acts, Microsoft's notice says no special preparation is required, but organisers in a tenant without the custom domain should expect the restriction the notice describes. Microsoft has not said what the restriction looks like to an organiser, so plan to test it with a pilot organiser rather than wait for support calls.

## Risk assessment

**Data exposure**
- Invitations go to the people and groups an organiser selects. Microsoft's notice says that for public and organisation-wide events an invitation does not change who is eligible to register, so the exposure is the invitation email itself, not new access to the event. Confirm with a pilot organiser what each invitation contains.

**Security & identity**
- For events limited to specific people and groups, the notice says the selected audience continues to determine registration eligibility, so an invitation does not widen access.
- Invitations sent from Microsoft's default addresses may be less recognisable to recipients. Learn says event emails then come from Microsoft-provided addresses and that a custom domain builds greater trust for external audiences receiving invitations.

**Autonomy & actions**
- The notice says organisers select people to receive an email invitation, so each send is an organiser's choice.

**Change & support**
- Without a custom domain for Microsoft 365 notifications the notice says the capability is restricted, which is likely to generate organiser questions. Learn says the domain setting can take up to 24 hours to take effect, so configure it before the late November 2026 rollout.

## Cost and licensing

Microsoft Learn's Teams events licensing page says all eligible Teams licences include the foundational capabilities needed to create and run events, and its foundational feature table lists basic registration. Invite to register is not named on that page, and no licence, price or meter specific to invitations is published at the time of writing (November 2026).

The indirect cost is admin time to verify a domain and select it under the Microsoft 365 notification setting. Learn says only domains registered within the tenant can be used and that domain ownership must be verified.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and GCC, the Web platform and General Availability. Microsoft's notice gives a late November 2026 rollout for Worldwide and GCC.

The notice says Invite to register applies to events with registration enabled, across public, organisation-wide and specific-people-and-groups events. On the Events app, Learn says the registration setting is chosen while scheduling and cannot be changed after the event is first saved, so only events scheduled with registration can use invitations.

The notice names one prerequisite for full use: a custom domain configured for Microsoft 365 notifications. Learn lists Microsoft Teams among the products that support that setting.

## Governance guidance

### Before rollout
- Check whether the tenant already uses **Send email notifications from your domain** in the Microsoft 365 admin center, and plan a verified domain if it does not (see the first controls row).
- Allow 24 hours between saving the domain setting and the late November 2026 rollout, since Learn says the setting can take up to 24 hours to take effect.
- Tell event organisers that invitation emails will come from the domain you choose, and ask them to expect restrictions if no domain is set.

### At rollout
- Send a test invitation from a pilot organiser and confirm the email arrives and shows the sender address you expect.
- Confirm which Events policies apply to organisers, since the policies in the controls table still decide who can attend.

### After rollout
- Review support requests from organisers about invitations that were restricted or not delivered, and check the sending-domain setting first.
- Watch Message center and the Teams events Learn pages for documentation of Invite to register itself.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Sending domain for Microsoft 365 system notification emails, including Teams events</strong><br><small>Tenant</small><br><small class="controls__note">Opt-in setting per the page; can take up to 24 hours to take effect. Microsoft's notice MC1537353 says a missing custom domain restricts this feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Organization profile › Send email notifications from your domain › Use a custom send-from domain address <a href="https://learn.microsoft.com/microsoft-365/admin/email/select-domain-to-use-for-email-from-microsoft-365-products" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can attend events up to 1,000 attendees, such as webinars</strong><br><small>User</small><br><small class="controls__note">Existing control; it decides who can attend, not who can be invited. Default is Everyone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Who can attend events up to 1k attendees <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -EventAccessType EveryoneInCompanyExcludingGuests</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can attend events optimised for a large audience, such as town halls</strong><br><small>User</small><br><small class="controls__note">Existing control; it decides who can attend, not who can be invited. Default is Everyone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Who can attend events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TownhallEventAttendeeAccess EveryoneInOrganizationAndGuests</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to turn Invite to register on or off</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Invite to register on/off setting is documented at the time of writing (November 2026), so the sending domain is the control Microsoft's notice points to. The attendee-access policies listed above decide who can attend events created by organisers with the policy; Microsoft's notice says that for public and organisation-wide events an invitation does not change who is eligible to register.

The attendee-access settings are per Events policy and default to Everyone, per the Learn page. The notice also names events limited to specific people and groups as an access type; confirm how that type is set before relying on these policies for it.

## Open questions

- Is there a Teams admin center setting or PowerShell parameter to turn Invite to register off for a policy? Watch the Teams events policy pages on Learn and Message center.
- What exactly is restricted in a tenant without a custom domain for Microsoft 365 notifications: sending, recipient types, volume? Watch MC1537353 and the Manage email communications for events page.
- Is a licence beyond the foundational Teams events licences needed for invitations? Watch the Teams events licensing page.
- Do invitations appear in the event email template list or the audit log? Watch the Learn pages for event emails and events audit.

<!-- rationale
risk: Low. Microsoft's notice MC1537353 says sending an invitation does not change who is eligible to register for public or organisation-wide events, so the feature adds email, not access.
cost: Low. The only cost shown is admin time to set up a custom sending domain; no separate licence or meter for invitations is published at the time of writing (November 2026).
impact: Medium. Event organisers notice it, and recipients get invitation emails; admins see an effect only if the tenant has no custom domain for Microsoft 365 notifications.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api; Governance controls table / command: Set-CsTeamsEventsPolicy -Identity <policy name> -EventAccessType EveryoneInCompanyExcludingGuests restricts smaller-event attendance to users in the organisation. | Found: To only allow users in your organization to attend events with up to 1,000 attendees created by organizers with this policy, run the following command: Set-CsTeamsEventsPolicy -Identity <policy name> -EventAccessType EveryoneInCompanyExcludingGuests | Fix: Add to Governance controls: 'The Set-CsTeamsEventsPolicy reference still labels Events policy as preview, although the admin guidance documents these settings without that label.' Cite https://learn.microsoft.com/powershell/module/teams/set-csteamseventspolicy, which states 'Note that this policy is currently still in preview.' This qualification covers both printed commands; neither call needs changing. | Source: https://learn.microsoft.com/microsoftteams/set-up-events
-->
