---
title: "Outlook: share proposed meeting times in an email, with one-click booking for one-on-one meetings"
slug: "outlook-share-availability"
roadmapId: 580444
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook users will be able to insert selected free time slots into an email, and recipients of a one-on-one invitation can book one with a click. Microsoft documents no admin switch for it yet; review it and brief users."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Comes with Outlook. Using the Outlook for Windows desktop app with a work address needs a plan that includes the desktop Microsoft 365 apps; Business Basic gives web and mobile Outlook. No licence specific to this feature is published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["outlook","new-outlook","exchange"]
sources:
  - title: "Outlook: Share Availability"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580444"
    kind: "roadmap"
  - title: "View or modify policy properties in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Enable or disable user access to Outlook for Windows in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Turn off Personal Bookings"
    url: "https://learn.microsoft.com/microsoft-365/bookings/bookings-in-outlook"
    kind: "learn"
videos: []
related: ["outlook-new-cloud-policy-controls"]
controls:
  - governs: "Whether users can insert availability into emails and let recipients book from it"
    scope: "tenant"
    ui: null
    api: null
    note: "No mailbox policy setting or cmdlet parameter for this feature is documented at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-26"
    note: "First briefing for roadmap item 580444: Share availability in Outlook, targeted for January CY2027."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 40 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 39
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "1fd91f32bf8cc674fee63c9f3e9ff600"
---

## What's changing

Outlook will let a user pick free time slots from their calendar and insert them into an email, instead of typing dates and times by hand. According to the roadmap item, this works directly from the calendar or while composing an email, and for one-on-one meetings the recipient can select one of the offered times to book the meeting with one click.

Microsoft Learn does not describe this feature yet (November 2026), so what follows about its behaviour is the roadmap's description. Microsoft has not said whether the option appears for every user on arrival, how the booking click works for a recipient outside the organisation, or what the inserted slots look like to a recipient on another mail client.

The roadmap item is **In development**, with a General Availability target of **January CY2027**. It lists the Desktop and Web platforms and the Worldwide (Standard Multi-Tenant) cloud, and its description is tagged #newoutlook.

## Why it matters

This puts a user's free time into the body of an email, where it travels with the message to whoever receives or forwards it. Today a user can type the same times by hand, so the information is not new, but a one-click insert makes it more common, and for one-on-one meetings a recipient can book the meeting with one click. Expect questions from users and from the people they email about how the booking link works.

Microsoft has not stated whether the feature is available to users on arrival or needs an administrator to enable it. No source says existing behaviour changes, and nothing has to be configured before January; the decision for now is whether the absence of a documented switch matters for your organisation.

## Risk assessment

**Data exposure**
- Inserted time slots reveal when the sender is free to whoever receives the message. The sender chooses the slots; Microsoft Learn documents no setting specific to this feature at the time of writing.

**Security & identity**
- Microsoft has not said whether a recipient must sign in to book a slot, or whether external recipients can book. Until it does, treat this as an open question rather than a risk to mitigate.

**Autonomy & actions**
- For one-on-one meetings the roadmap describes a recipient booking a meeting with one click. Microsoft has not said whether the sender confirms the booking or whether it is added to the calendar directly.

**Change & support**
- A new compose and calendar option in Outlook on the web and the desktop app. Expect "how do I share my availability" and "why did a meeting appear" questions once it reaches users.

## Cost and licensing

**Licence.** The feature is part of Outlook. Microsoft's licensing page for the new Outlook for Windows says that using the Outlook for Windows desktop app with a Microsoft 365 organisational email address needs a plan that includes the desktop versions of the Microsoft 365 apps, and that Business Basic provides the web and mobile versions of Outlook ([Understand licensing in new Outlook for Windows](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options)). Frontline licences are limited to the web and mobile versions of Outlook.

**Meter.** No meter or charge is documented for this feature at the time of writing.

**Indirect cost.** Helpdesk time and user communication.

**Not yet published.** Whether the feature needs anything beyond the Outlook licence a user already has, and whether it is available on every plan that includes Outlook on the web.

## Scope

- **Users:** Outlook users who arrange meetings; the roadmap does not narrow it further.
- **Platforms:** Desktop and Web, as the roadmap record lists them; the description is tagged #newoutlook. Mobile platforms are not listed on the record.
- **Cloud:** Worldwide (Standard Multi-Tenant) on the record. Other clouds are not listed.
- **Release phase:** General Availability, targeted for January CY2027.
- **Roles:** No admin role is documented for this feature, because no setting for it is documented.
- **Prerequisites:** Not yet published beyond the Outlook licence above.

## Governance guidance

### Before rollout
- Watch Message center for a post about roadmap item 580444 that states the default state and any admin setting.
- Decide whether users sharing free time slots with external recipients is acceptable for your organisation, so you can respond quickly if Microsoft adds a setting.
- Prepare a short user note explaining what the inserted slots show and that recipients can book one-on-one meetings from them.

### At rollout
- Test the feature with a pilot mailbox: send slots to an internal and an external address and record what each recipient sees and whether booking needs sign-in.
- Check whether a booked slot lands on the sender's calendar directly or as a request, and brief the helpdesk on the answer.

### After rollout
- Track helpdesk tickets about unexpected meetings or booking links and feed them into the user note.
- Recheck the Set-OwaMailboxPolicy reference and the Outlook web app policies features list for a new setting that covers this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can insert availability into emails and let recipients book from it</strong><br><small>Tenant</small><br><small class="controls__note">No mailbox policy setting or cmdlet parameter for this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Mailbox policies for Outlook on the web (Exchange admin center > Roles > Outlook web app policies, or Set-OwaMailboxPolicy) control the Outlook on the web and Outlook for Windows experience for users, which is where a switch for this feature would be expected. At the time of writing (November 2026) neither the policy features list nor the cmdlet reference names a setting for sharing availability in an email.

## Open questions

- Will Share availability be on for all Outlook users when it reaches General Availability, or will administrators have to enable it? Watch Message center and the Outlook release notes.
- Will Microsoft add an Outlook web app mailbox policy setting or Cloud Policy setting to turn it off for some or all users?
- Can external recipients book a one-on-one meeting from the inserted slots, and do they need to sign in to do so?
- Does the one-click booking use Personal Bookings? Personal Bookings can be turned on or off for the organisation or for specific users, but Microsoft has not said whether that setting also governs this feature.
- Does the sender approve a booking, or does it go straight onto their calendar?

<!-- rationale
risk: Low. Each user chooses which time slots to send, and the roadmap describes nothing beyond that sender's calendar times; how recipient booking works is not yet documented.
cost: Low. The feature sits inside Outlook, which the user's Microsoft 365 plan already licenses; the only cost the sources show is admin and helpdesk time. Nothing specific to this feature is published.
impact: Medium. People who arrange meetings by email in Outlook on the web and on the desktop will see a new option, and the people they email will see the inserted times.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / default: Nothing has to be configured before January. | Found: Searched: Outlook "Share Availability" "580444" default prerequisites license billing external authentication confirmation. Read roadmap, overview and policy-management page; none establishes that administrators will have no configuration requirement before rollout. | Fix: Remove 'and nothing has to be configured before January'. Use: 'No source says existing behaviour changes; the decision for now is whether the absence of a documented switch matters for your organisation.' The absence of published enablement requirements does not establish that no configuration will be needed.
-->
