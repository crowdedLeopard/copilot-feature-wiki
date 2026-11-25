---
title: "Exchange: custom retention periods for message trace data"
slug: "exchange-message-trace-custom-retention"
roadmapId: 542929
topic: "modern-work"
products: ["Exchange"]
summary: "Microsoft plans to let organisations pick a message trace retention period from a predefined set. Learn still documents 90 days, not configurable. Administrators need to act only once a setting appears."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. The message trace page in the Exchange admin center lists administrator roles as its prerequisites and names no licence."
audiences: ["m365-admin","compliance","security"]
tags: ["exchange","retention","message-trace"]
sources:
  - title: "Exchange: Message Trace - Custom Retention"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=542929"
    kind: "roadmap"
  - title: "Message Trace FAQ in Exchange Online"
    url: "https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-faq"
    kind: "learn"
  - title: "Message trace in the Exchange admin center in Exchange Online"
    url: "https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac"
    kind: "learn"
  - title: "Reporting features and troubleshooting tools"
    url: "https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/reporting-features-and-troubleshooting-tools"
    kind: "learn"
  - title: "Set-OrganizationConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig?view=exchange-ps"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Message trace retention period"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap plans a choice of predefined periods; Learn documents no setting yet (November 2026). The FAQ says the period is not configurable."
  - governs: "Searching message trace data within the current 90-day window"
    scope: "tenant"
    ui:
      surface: "Exchange admin center"
      path: "Mail flow > Message trace"
      docs: "https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac"
    api:
      kind: "powershell"
      call: "Get-MessageTraceV2 -StartDate <start date> -EndDate <end date>"
      docs: "https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac"
    note: "Reads data only; it does not set retention. Needs Organization Management, Global Administrator or Exchange Administrator."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-12-19T23:00:49"
changes:
  - date: "2026-11-25"
    note: "New briefing: roadmap plans selectable message trace retention periods; Learn still documents a fixed 90 days and no setting."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 38 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 37
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "d74ae54f0aa09cfeaaf44cb0ff560c7c"
---

## What's changing

Microsoft plans to introduce customisable retention options for message trace logs. The roadmap item states that organisations will be able to choose from a predefined set of retention periods. It does not list the periods, say who sets the choice or say where it will be set.

Microsoft Learn does not describe this feature yet, so what follows about the planned behaviour is the roadmap's description. Learn does describe today's behaviour: the Message Trace FAQ says message trace data is retained for 90 days by default, that this retention period is not configurable, and that data is automatically purged after 90 days. The planned option therefore differs from what Learn currently documents, and Learn has not yet been updated to reflect it.

The roadmap item (ID 542929) is "In development", with a target date of December CY2026, for Worldwide (Standard Multi-Tenant), on the Web platform, at the General Availability release phase. The date is a Microsoft target, not a commitment. Microsoft has not stated what happens on arrival, including whether the 90-day period stays in place until an administrator chooses another.

## Why it matters

Message trace is where administrators and the service desk find out whether a message was received, rejected, deferred or delivered. How long that record is kept decides how far back a mail-flow or security investigation can go, so a selectable period is relevant to compliance and security teams as well as to Exchange administrators.

If nobody acts, Microsoft has not said whether anything changes, so plan on today's documented 90-day period and treat any change as something to confirm when Microsoft publishes the periods. The useful preparation is to agree internally which retention period your organisation would want, so the choice can be made quickly once it exists.

## Risk assessment

**Data exposure**
- The retention period decides how long message trace data about each message's handling is kept. The roadmap says the periods will be predefined, and Microsoft has not said whether they are shorter or longer than today's 90 days, so the effect on exposure cannot be rated yet.

**Security & identity**
- A shorter period would reduce how far back an investigation can search; a longer one would extend it. Today's documented search window is the last 90 days, queried 10 days at a time, so investigations that depend on older data cannot rely on message trace now.
- Microsoft has not published which roles will be able to change the period. Message trace itself is run by Organization Management, Global Administrator or Exchange Administrator holders.

**Autonomy & actions**
- No change documented: message trace reads and reports on mail flow, and the roadmap item describes no automated action.

**Change & support**
- Support runbooks that assume 90 days will need review once Microsoft publishes the periods. Learn currently says the period is not configurable, so documentation, scripts and internal guidance may describe it that way until Microsoft updates its pages.

## Cost and licensing

Microsoft has not published a licence requirement, meter or price for custom message trace retention. The Message trace page in the Exchange admin center lists administrator roles as its prerequisites and names no licence, and the Exchange Online service description page on reporting features and troubleshooting tools states none for message trace. No meter or charge is documented for this feature at the time of writing (November 2026).

The cost the sources show is administrator time to choose a period, update runbooks and brief the service desk. If a longer period is offered, whether it carries a charge is not yet published.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and the General Availability release phase; no other cloud is listed on the item. Microsoft has not published the rollout mechanics or prerequisites for the feature.

Message trace today is run from the Exchange admin center (Mail flow > Message trace) or with Exchange Online PowerShell. The Message trace page says membership in the Organization Management role group, or the Global Administrator or Exchange Administrator roles, gives the permissions needed for the message trace procedures. Which roles will be able to change the retention period is not yet published.

## Governance guidance

### Before rollout
- Record the current documented position: 90 days, not configurable, per the Message Trace FAQ.
- Ask compliance and security owners which period your organisation would want from a predefined set, and what investigations depend on older message trace data.
- List the people who hold Organization Management, Exchange Administrator or Global Administrator, so you know who could be asked to make the choice.

### At rollout
- Watch Message center and the Message Trace FAQ for the list of retention periods and where the setting lives.
- Check the Message trace page in the Exchange admin center once Microsoft announces availability, and confirm the period before relying on it.

### After rollout
- Update runbooks and service desk guidance that quote 90 days.
- Record the period you chose and who approved it in your retention documentation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Message trace retention period</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap plans a choice of predefined periods; Learn documents no setting yet (November 2026). The FAQ says the period is not configurable.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching message trace data within the current 90-day window</strong><br><small>Tenant</small><br><small class="controls__note">Reads data only; it does not set retention. Needs Organization Management, Global Administrator or Exchange Administrator.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Mail flow › Message trace <a href="https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-MessageTraceV2 -StartDate &lt;start date&gt; -EndDate &lt;end date&gt;</code> <a href="https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents no setting for the message trace retention period at the time of writing (November 2026), so the first row has no path or call. The second row is the control administrators use today to search message trace data inside the 90-day window; it does not change retention.

The Message trace page requires Organization Management, or the Global Administrator or Exchange Administrator role, for running traces. Microsoft has not said which role will change retention.

## Open questions

- Which retention periods will Microsoft offer, and are they shorter or longer than today's 90 days? Watch the Message Trace FAQ and Message center.
- What is the default on arrival: does 90 days stay until an administrator chooses another period?
- Where will the setting live (Exchange admin center, PowerShell or both), and which role can change it?
- Will a longer period need a licence or carry a charge? No licence or meter is published for this feature.

<!-- rationale
risk: Low. The roadmap item describes an option organisations choose, and Microsoft has not stated what happens on arrival, so the rating assumes today's documented 90-day retention carries on until an administrator chooses otherwise.
cost: Low. The only cost the sources show is administrator time to choose and record a period; a licence or meter for this feature is not yet published.
impact: Low. Message trace is an administrator and support tool run from the Exchange admin center or PowerShell, so mainly Exchange administrators and service desk staff would notice.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity, first bullet / behaviour: Today's message trace search window is queried only 10 days at a time. | Found: If you specify a date/time range that's even slightly greater than 10 days: The results are available only as a downloadable CSV file (an Enhanced summary report or an Extended report). | Fix: Replace 'Today's documented search window is the last 90 days, queried 10 days at a time' with 'Today's documented search window is the last 90 days; Get-MessageTraceV2 returns at most 10 days of data per query'. The ten-day limit is specific to that cmdlet and near-real-time summary queries, not downloadable reports. The existing cited FAQ documents the cmdlet limit. | Source: https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Scope; Governance controls table / admin-path: The Exchange admin center route to searching message trace is Mail flow > Message trace. | Found: In the EAC at https://admin.exchange.microsoft.com, go to Mail flow > Message trace. ... On the Message trace page, you can start a new default trace by selecting ... Start a trace. | Fix: The path reaches the correct page but stops before the search control. Extend controls[1].ui.path and its rendered table path to 'Mail flow > Message trace > Start a trace > New message trace > Search', as documented at https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac. | Source: https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/message-trace-modern-eac
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown because requirements specific to custom retention are unpublished. | Found: These features are available for all Business (basic, standard, and premium), Enterprise (E1, E3, E5 and F3) and Exchange Online plans (1, 2 and Kiosk) ... Message trace and auditing reports are accessible via direct access to the Exchange admin center (EAC) management interface | Fix: Set licensing.model to 'included' for a new option inside a licensed product. Replace licensing.notes with 'Message trace is available with Exchange Online plans (1, 2 and Kiosk). Microsoft has not published licensing or pricing specific to custom retention.' Cite https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description in sources. This records the existing entitlement without claiming that longer retention is free. | Source: https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description
-->
