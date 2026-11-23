---
title: "Exchange Online: change a meeting organiser with PowerShell"
slug: "m365-change-meeting-organizer-via-powershell-cmdlet-in-exchange-online"
roadmapId: 554937
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Exchange Online administrators can move a meeting or meeting series to a new organiser with Invoke-ChangeMeetingOrganizer. Nothing changes until an admin runs it; external attendees get a new invitation."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor the Invoke-ChangeMeetingOrganizer reference page names a licence or meter for this cmdlet."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["exchange","outlook","powershell","teams","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 554937"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=554937"
    kind: "roadmap"
  - title: "Invoke-ChangeMeetingOrganizer"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-changemeetingorganizer?view=exchange-ps"
    kind: "learn"
  - title: "Exchange Online service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Changing the organiser of a meeting or meeting series"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Invoke-ChangeMeetingOrganizer -Identity <mailbox> -EventId <EventId> -NewOrganizer <SMTP address>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-changemeetingorganizer?view=exchange-ps"
    note: "Exchange Online only; needs assigned permissions, role not named on the page. Use -Subject instead of -EventId for a subject match, -WhatIf to preview."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-23"
    note: "First briefing: the Invoke-ChangeMeetingOrganizer cmdlet, its limits for external attendees and Teams meetings, and the gaps in licensing and roles."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "298d399fda32a84536d672db2c52baa3"
---

## What's changing

Exchange Online administrators can now change the organiser of an existing meeting or meeting series with the Invoke-ChangeMeetingOrganizer cmdlet. The roadmap item gives continuity as the reason: a long-running series can keep its history when the organiser changes role, is on leave or is being offboarded. It also states that the new organiser can maintain the event's properties, including time, recurrence, attendees and description.

The cmdlet reference says the change takes effect from the next instance of the series or from a date you set with `-TransferSeriesStartDate`. Instances before that date stay in the original organiser's calendar; later instances move to the new organiser's calendar. The previous organiser is not kept as an attendee, though the new organiser can invite them again. Attendees in the same Exchange Online organisation do not need to re-RSVP, and their calendar entries are updated silently, keeping local settings such as Reminder and Category.

The reference page also sets out what is not seamless. Attendees outside the organisation, and attendees with on-premises mailboxes in a hybrid deployment, receive a message from the old organiser ending the series and then an invitation from the new organiser, so they need to re-RSVP. For Teams-enabled meetings the cmdlet does not change the organiser of the Teams online meeting, and the new organiser should update the series with new Teams meeting information. OneDrive attachments and links may not be accessible to the new organiser.

The roadmap record shows the item as Launched in General Availability, with a target of June CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The roadmap item also says a later feature will let users change the organiser in Modern Calendar in OWA, New Outlook and Teams, with the new organiser having to accept before the transfer completes; that feature is not part of this item.

## Why it matters

The cmdlet gives administrators a scripted way to hand a recurring series to someone else during offboarding, leave or a role change. For a service owner the useful point is the boundary: the transfer is clean for attendees in your Exchange Online organisation and disruptive for everyone else.

No source says existing behaviour changes for users on arrival, so if nobody acts nothing happens to any meeting. The decision is whether to add the cmdlet to your offboarding and leave-of-absence procedures, and how to handle the Teams meeting link and external attendees when you do.

## Risk assessment

**Data exposure**

- The new organiser takes over the meeting's properties as they are, including description and attendee list (reference: the meeting's properties are transferred as-is). Check what the description contains before choosing a recipient.
- For OneDrive attachments and links the new organiser might not have permission to open the file, so a transferred series can carry broken links until the new organiser re-adds a copy.

**Security & identity**

- Running the cmdlet needs assigned Exchange permissions, and the reference does not name a role (see the notes under the controls table). Grant it narrowly, because the cmdlet takes the current organiser's mailbox as `-Identity` and changes who owns that mailbox's meetings.
- The reference says the new organiser must be a user in the same Exchange Online organisation, so plan transfers within the tenant.

**Autonomy & actions**

- The cmdlet acts only when an administrator runs it. `-WhatIf` shows what a command would do without changing anything, and a subject match that finds several meetings returns a list instead of changing one.
- A transfer sends messages on behalf of the series to external and hybrid attendees (an ending message from the old organiser, then an invitation from the new one), and more messages for each rescheduled instance after the effective date.

**Change & support**

- Teams-enabled meetings keep the old Teams online meeting organiser, so the new organiser may be unable to join or manage the meeting until they update the series. Expect help desk calls after offboarding transfers.
- A series that has been transferred once cannot have the portion that remains on the original organiser's calendar transferred again. The reference page also says the cmdlet transfers only meetings on the user's default calendar and not meetings in Group or Shared mailboxes.

## Cost and licensing

No licence or meter for this cmdlet is documented. The roadmap item and the Invoke-ChangeMeetingOrganizer reference page name none, and the page lists no charge. A licence for this feature is not yet published; the Exchange Online service description, searched at the time of writing (November 2026), does not mention it either.

The costs the sources show are indirect: administrator time to find the meeting and run the command, and communication to external attendees who receive a new invitation and must re-RSVP.

## Scope

The cmdlet is available only in the cloud-based service and applies to Exchange Online. The new organiser must be a user in the same Exchange Online organisation and does not need to be an attendee of the meeting.

The reference page limits it to meetings on the user's default calendar; meetings in Group or Shared mailboxes are not covered, and the page says to add the new organiser to the mailbox instead. The `-EventId` value must identify the recurring series, not a single instance.

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the Web platform. The reference page says that if the cmdlet is not yet available in an organisation, running it returns "Transfer meeting action is disabled" and makes no changes.

## Governance guidance

### Before rollout

- Decide who in your organisation may run `Invoke-ChangeMeetingOrganizer`, and check the permissions assigned for it against the guidance on finding the permissions required to run any Exchange cmdlet.
- Add the transfer to your offboarding and leave procedures, with the owner of the step named.
- Write the message you will send to external and hybrid attendees, who receive an ending message and a new invitation.

### At rollout

- Run the command with `-WhatIf` first, then without it, using `-EventId` rather than `-Subject` where a subject could match several meetings.
- Set `-TransferSeriesStartDate` when the handover should start on a particular future date, as the default is the next instance.
- Ask the new organiser to update the series with new Teams meeting information for Teams-enabled meetings, and to re-add any OneDrive attachments they cannot open.

### After rollout

- Check the new organiser's calendar and a sample internal attendee's calendar to confirm the series moved.
- Track help desk contacts from external attendees and new organisers, and adjust the procedure where the same problem recurs.
- Watch Message center and the cmdlet reference for the later feature that lets users change the organiser themselves.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Changing the organiser of a meeting or meeting series</strong><br><small>User</small><br><small class="controls__note">Exchange Online only; needs assigned permissions, role not named on the page. Use -Subject instead of -EventId for a subject match, -WhatIf to preview.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Invoke-ChangeMeetingOrganizer -Identity &lt;mailbox&gt; -EventId &lt;EventId&gt; -NewOrganizer &lt;SMTP address&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-changemeetingorganizer?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only documented control is the cmdlet itself. The reference page says you need assigned permissions to run it and links to guidance on finding the permissions required, but does not name a role or role group for this cmdlet, so confirm which role groups hold it in your tenant. Microsoft Learn documents no admin-centre screen for the transfer at the time of writing (November 2026).

The cmdlet has no tenant-wide on or off switch documented on its reference page. `-WhatIf` and `-Confirm` are the cmdlet's own safety switches and apply per command.

## Open questions

- Which licence, if any, does this cmdlet require, and will Microsoft publish it on the Exchange Online service description or the cmdlet page?
- Which Exchange role or role group is assigned the cmdlet by default, and can it be delegated to a narrower group?
- Does a transfer produce an audit record, and under which event name? The cmdlet page does not say.
- When will the user-initiated transfer in Modern Calendar in OWA, New Outlook and Teams be available, and will it need the same permissions as the cmdlet? Watch the roadmap and Message center.

<!-- rationale
risk: Medium. The cmdlet changes who owns a meeting, and for attendees outside the organisation it ends the old series and sends a new invitation; the Teams online meeting is not updated.
cost: Low. The only cost the sources show is admin time and attendee communication; the roadmap item and the cmdlet page name no licence or meter, and licensing is not yet published.
impact: Low. Only administrators run it, and only the attendees of meetings an admin chooses to transfer notice; nothing reaches other users unless an admin acts.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because a licence specific to this cmdlet has not been published. | Found: Each user who accesses the Exchange Online service must be assigned to a subscription plan, and each user subscription has its own mailbox. | Fix: Set licensing.model to included. Replace the licensing notes with: 'Each user who accesses Exchange Online must be assigned to a subscription plan. No cmdlet-specific licence or meter is documented at the time of writing (November 2026).' Cite the existing Exchange Online service description. Replace 'A licence for this feature is not yet published' in Cost and licensing with 'Exchange Online publishes a user subscription requirement, but no cmdlet-specific licence is documented.' Replace 'licensing is not yet published' in the cost rationale with 'no cmdlet-specific licence or meter is documented'. | Source: https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description
- [supported, minor] Governance guidance: Before rollout; Governance controls / behaviour: Microsoft provides guidance for discovering the roles and role groups that permit a particular Exchange cmdlet in the tenant. | Found: This procedure shows the role-based access control (RBAC) management roles and role groups that give you access to a specified cmdlet | Fix: Add https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions to sources and link 'guidance on finding the permissions required to run any Exchange cmdlet' to that page. | Source: https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions
-->
