---
title: "Outlook: enhanced calendar-sharing architecture for delegates in new Outlook for Windows and Outlook on the web"
slug: "outlook-support-for-enhanced-calendar-sharing-architecture-in-the-new-outlook-for-windows"
roadmapId: 477373
topic: "modern-work"
products: ["Outlook"]
summary: "Microsoft plans a more reliable calendar-sharing architecture in new Outlook for Windows and on the web so delegates always see current events. The default is not stated; no admin switch is documented. Brief delegates and the help desk."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Comes with Outlook: new Outlook for Windows needs a plan that includes the desktop Microsoft 365 apps, and Business Basic gives the web version. Microsoft has published no licence specific to this change."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["outlook","new-outlook","exchange","delegation","sharing","powershell"]
sources:
  - title: "Calendar sharing in Exchange Online"
    url: "https://learn.microsoft.com/exchange/sharing/calendar-share-overview"
    kind: "learn"
  - title: "Shared calendar is missing old events or shows only one year of history"
    url: "https://learn.microsoft.com/troubleshoot/exchange/calendars/sharing/shared-calendar-history-missing"
    kind: "learn"
  - title: "Resolve issues with modern calendar sharing"
    url: "https://learn.microsoft.com/troubleshoot/exchange/calendars/sharing/resolve-modern-calendar-share-issues"
    kind: "learn"
  - title: "Shared calendar appears in delegate's Online Archive folder"
    url: "https://learn.microsoft.com/troubleshoot/exchange/calendars/shared-calendar-in-delegate-online-archive"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Outlook: Support for enhanced calendar-sharing architecture in the New Outlook for Windows and Web"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=477373"
    kind: "roadmap"
  - title: "How far back an upgraded shared calendar's copy in the delegate's mailbox syncs (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxcalendarfolder"
    kind: "learn"
videos: []
related: ["outlook-grant-mail-delegate-sharing-permissions-from-the-new-outlook","outlook-keep-folder-sharing-within-your-organization-s-policies","outlook-new-cloud-policy-controls"]
controls:
  - governs: "Whether the enhanced calendar-sharing architecture is used in new Outlook and Outlook on the web"
    scope: "tenant"
    ui: null
    api: null
    note: "The REST updates for calendars Group Policy setting is documented for classic Outlook only."
  - governs: "How far back an upgraded shared calendar's copy in the delegate's mailbox syncs"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-MailboxCalendarFolder -Identity <MailboxFolderIdParameter> -SharedCalendarSyncStartDate <DateTime>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxcalendarfolder"
    note: "Applies to calendars upgraded to the improved model; target the receiver-side folder. Needs FullDetails, Editor or Delegate access. Not confirmed for this roadmap item."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-22T23:00:43"
changes:
  - date: "2026-11-25"
    note: "New briefing: planned calendar-sharing architecture for delegates in new Outlook and on the web, with the documented improved model and its sync-history control."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: clouds now reported as listed in the roadmap record, not as an exclusion; autonomy line narrowed to what the roadmap describes; upgrade qualified to eligible calendars; removed the MRM checklist step that had no control row."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 50 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 50
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ac9ffcea0611579763448923fd6ec437"
---

## What's changing

Microsoft plans to move calendar sharing in new Outlook for Windows and Outlook on the web onto an "enhanced calendar-sharing architecture". The roadmap item states that the update improves the reliability of calendar sharing and ensures that the events delegates see are always up to date. Microsoft Learn does not describe this roadmap item yet, so what follows about its behaviour is the roadmap's description.

The roadmap item does not name the architecture. The closest documented design is the [improved shared-calendar model in Exchange Online](https://learn.microsoft.com/exchange/sharing/calendar-share-overview): Exchange Online synchronises the calendar from the principal's mailbox to a local copy in the delegate's mailbox, and the delegate's Outlook client synchronises with that local copy. That model is available only where both mailboxes are hosted in Exchange Online, and eligible existing shared calendars are upgraded to it in the background without users re-sharing or accepting new invitations. Whether this roadmap item brings that model to new Outlook and the web, or something else, is not stated.

The roadmap record lists the item as **In development**, General Availability, for the Worldwide (Standard Multi-Tenant) cloud on Desktop and Web, with a target of **April CY2026**. That target has passed and the record was last modified in September 2025, so treat the date as out of date. No Message center post was supplied for this item.

## Why it matters

Delegate calendars are where support tickets cluster: an assistant books over a meeting the principal already moved, or works from a stale view. A change to how those views sync touches a small group of users who are often supporting senior staff, so a mistake is visible. If this item follows the documented improved model, delegates' mailboxes hold a copy of each calendar they manage, which changes where old events live and how retention treats them.

Microsoft has not stated what happens on arrival: whether the new architecture switches on for everyone, rolls out gradually or needs action. No source says users must do anything. Plan on it arriving as a background change to an existing feature, and prepare delegates and the help desk rather than a configuration project.

## Risk assessment

**Data exposure**
- No change is described to who can see a calendar: the roadmap item speaks only of reliability and freshness.
- In the documented improved model the principal's calendar is copied into the delegate's mailbox. Where a delegate's mailbox has a messaging records management (MRM) retention policy whose default policy tag archives the whole mailbox, MRM archives those shared calendar folders after the retention period, and revoking delegate access does not remove the archived copies ([Microsoft Learn](https://learn.microsoft.com/troubleshoot/exchange/calendars/shared-calendar-in-delegate-online-archive)). Whether this roadmap item uses that model is not stated.

**Security & identity**
- No change: the roadmap item describes no new permission, role or sign-in. Delegate rights are still the calendar permissions the owner grants.

**Autonomy & actions**
- The roadmap item describes no autonomous actions.

**Change & support**
- In the improved model an upgraded copy includes events from up to one year before the upgrade date by default, so a delegate may report older events missing. An administrator can move that boundary with `SharedCalendarSyncStartDate` (see the controls table).
- Cross-tenant and internet calendar scenarios can have longer synchronisation intervals in the improved model, so "always up to date" is a same-tenant expectation.

## Cost and licensing

**Licence.** This is a change inside Outlook. The [licensing page for new Outlook for Windows](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options) says that using the Outlook for Windows desktop app (classic or new) with a Microsoft 365 organisational address needs a plan that includes the desktop versions of the Microsoft 365 apps, and that Business Basic gives the web and mobile versions of Outlook. Users with Frontline licences must use the web and mobile versions.

**Meter.** No meter is documented for this change at the time of writing (November 2026).

**Indirect costs.** Help desk time while delegates adjust, and Exchange administrator time if older events need re-syncing.

**Not yet published.** A licence or price specific to this change.

## Scope

- **Users:** principals who share calendars and the delegates who manage them, in new Outlook for Windows and Outlook on the web (roadmap platforms: Desktop and Web).
- **Mailboxes:** the documented improved model requires both the owner's and the recipient's mailboxes to be hosted in Exchange Online, explicit permission to the shared calendar and a supported Outlook client.
- **Clouds:** Worldwide (Standard Multi-Tenant) is the cloud listed in the roadmap record. No US Government cloud is listed.
- **Out of scope:** classic Outlook for Windows, which has its own shared calendar improvements and Group Policy setting.
- **Rollout:** not stated; the April CY2026 target has passed with the item still In development.

## Governance guidance

### Before rollout
- List the principals and delegates in your organisation who manage shared calendars in new Outlook or Outlook on the web, and tell them Microsoft plans a change to how delegate views sync.
- Give the help desk the Learn pages on the improved shared-calendar model and on missing older events, so a one-year history gap is not logged as data loss.

### At rollout
- Watch Message center for a post about roadmap item 477373 that states the rollout window and the default.
- Compare a delegate's view in Outlook on the web with the owner's calendar for a few pilot pairs, treating Outlook on the web as the mailbox-side comparison point as the troubleshooting page advises.

### After rollout
- Inspect a receiver-side shared-calendar folder with `Get-MailboxCalendarFolder` when a delegate reports older events missing.
- Set `SharedCalendarSyncStartDate` on that receiver-side folder only where the delegate needs more history, warning them that events can briefly disappear while the calendar resynchronises.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the enhanced calendar-sharing architecture is used in new Outlook and Outlook on the web</strong><br><small>Tenant</small><br><small class="controls__note">The REST updates for calendars Group Policy setting is documented for classic Outlook only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>How far back an upgraded shared calendar's copy in the delegate's mailbox syncs</strong><br><small>User</small><br><small class="controls__note">Applies to calendars upgraded to the improved model; target the receiver-side folder. Needs FullDetails, Editor or Delegate access. Not confirmed for this roadmap item.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MailboxCalendarFolder -Identity &lt;MailboxFolderIdParameter&gt; -SharedCalendarSyncStartDate &lt;DateTime&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxcalendarfolder" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant or per-user switch for this change in new Outlook or Outlook on the web at the time of writing (November 2026). The **REST updates for calendars** Group Policy setting that the calendar-sharing overview mentions is documented for supported versions of classic Outlook only, so it does not govern this item.

`SharedCalendarSyncStartDate` applies to calendars upgraded to the improved model; whether this roadmap item uses that model is not stated. Run it against the shared-calendar folder in the receiver's mailbox, not the owner's calendar. The troubleshooting page says it requires a supported upgraded calendar and FullDetails, Editor or Delegate access.

## Open questions

- Is the enhanced architecture in this item the improved shared-calendar model Exchange Online documents for classic Outlook, with a local copy in the delegate's mailbox? Watch the Learn [calendar-sharing overview](https://learn.microsoft.com/exchange/sharing/calendar-share-overview).
- Will it switch on for all users automatically, and is there any way to defer it for particular mailboxes? Watch Message center.
- What is the new rollout date now that the April CY2026 target has passed? Watch the roadmap item.
- Does MRM archiving of shared calendar folders in delegates' mailboxes apply to calendars shared through new Outlook and Outlook on the web after this change?

<!-- rationale
risk: Low. The roadmap item describes a reliability change to calendar sharing that already exists; no source says it widens who can see a calendar or what a delegate can do.
cost: Low. The only cost the sources show is admin and help desk time; no licence or meter specific to this change is published.
impact: Medium. Delegates, such as executive assistants, and people who share their calendars notice how shared calendars sync; other users see no change.
-->
