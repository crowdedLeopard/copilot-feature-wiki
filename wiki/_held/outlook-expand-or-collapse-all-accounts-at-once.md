---
title: "Outlook: expand or collapse all accounts in the folder pane at once"
slug: "outlook-expand-or-collapse-all-accounts-at-once"
roadmapId: 579189
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook on desktop and web is planned to let users expand or collapse every account in the folder pane in one step. It is a layout convenience for people with several accounts; no admin setting for it is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "none"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Part of Outlook. Microsoft's licensing page says the new Outlook for Windows desktop app with a work address needs a plan that includes the desktop Microsoft 365 apps; Business Basic gives web and mobile Outlook. Nothing specific to this option is published."
audiences: ["m365-admin","change-adoption"]
tags: ["outlook","new-outlook","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 579189"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579189"
    kind: "roadmap"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Supported accounts in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/supported-account-types"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Manage All Accounts view in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
videos: []
related: ["outlook-all-accounts-view-unified-inbox-brings-your-email-into-a-single-inbox-view","outlook-new-cloud-policy-controls"]
controls:
  - governs: "Admin switch or default for expanding or collapsing all accounts in the folder pane"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no Cloud Policy or mailbox policy setting for this option at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-27"
    note: "New briefing: planned option to expand or collapse all accounts in Outlook's folder pane at once, targeted for February CY2027."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 37 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 36
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "4fbd341b747c3acc8ba8fa7de9f0c26f"
---

## What's changing

Microsoft plans to let users expand or collapse every account in Outlook's folder pane at once, instead of opening or closing each account one by one. The roadmap item states that this makes it easier to navigate multiple accounts or keep the folder pane compact, and tags it for the new Outlook for Windows.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap presents it as something each user chooses to do in the folder pane. It does not say where the command will appear, whether Outlook remembers the expanded or collapsed state, or that the folder pane changes for anyone who does not use it.

This is a separate change from the [All Accounts view](/features/outlook-all-accounts-view-unified-inbox-brings-your-email-into-a-single-inbox-view/), which brings email from connected accounts into one view and for which Microsoft documents a Cloud Policy.

The roadmap item lists the feature as In development, for General Availability, with a target of February CY2027, on Desktop and Web, in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

For administrators this is a layout convenience, not a change to data, identity or spend. It matters to people who keep several accounts in Outlook: new Outlook for Windows supports Microsoft 365 work and school accounts alongside Outlook.com, Gmail, Yahoo, iCloud and IMAP or POP accounts, and shared and delegated mailboxes can be opened from the folder list too. Expect the main effect to be on how-to questions and on internal guides that show the folder pane.

If nobody acts, the roadmap describes users gaining an option they choose to use; no source says the folder pane's existing layout changes. There is nothing to configure, so the only work is keeping user guidance current once the option ships.

## Risk assessment

**Data exposure**
- No change: the roadmap describes how accounts already in the folder pane are displayed, not which mailboxes or data a user can open.

**Security & identity**
- No change: the option does not add accounts or change how users sign in to them, as the roadmap describes it.

**Autonomy & actions**
- No change: the roadmap describes an action a user takes in the folder pane; nothing in it runs on its own.

**Change & support**
- Users with many accounts may collapse them all and then ask the helpdesk where their folders went. Microsoft has not documented where the command sits, so helpdesk scripts can only be updated once it ships.

## Cost and licensing

**Licence.** The option is part of Outlook. Microsoft's page *Understand licensing in new Outlook for Windows* states that using the Outlook for Windows desktop app with a Microsoft 365 organisational email address needs a plan that includes the desktop versions of the Microsoft 365 apps, and that the Business Basic plan provides the web and mobile versions of Outlook. For people with several accounts, the same page says that if any account signed into the app has a licence for the desktop applications, other types of account can be added.

**Meter.** Microsoft publishes no meter, charge or licence specific to this option.

**Indirect cost.** Small: updating user guides and helpdesk scripts that show the folder pane.

## Scope

- **Users:** people who use Outlook with more than one account in the folder pane.
- **Platforms:** Desktop and Web, as the roadmap item lists them; the description is tagged for the new Outlook for Windows and does not mention classic Outlook.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item.
- **Rollout:** In development, General Availability, target February CY2027.
- **Admin roles:** none to assign; Microsoft Learn documents no admin setting for this option at the time of writing (November 2026).

## Governance guidance

### Before rollout
- Note the February CY2027 target in your Outlook change calendar and watch Message center for a post about roadmap item 579189.
- List the internal guides and helpdesk scripts that show the folder pane with several accounts, so they can be updated when the option ships.

### At rollout
- Check in new Outlook for Windows and on the web where the expand-all and collapse-all command appears, and add it to guidance for people with several accounts.

### After rollout
- Update helpdesk scripts for missing-folder questions to cover accounts that a user has collapsed all at once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin switch or default for expanding or collapsing all accounts in the folder pane</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no Cloud Policy or mailbox policy setting for this option at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for this option at the time of writing (November 2026): neither a Cloud Policy setting nor an Outlook on the web mailbox policy parameter. The nearest documented control is the Cloud Policy for the All Accounts view, which sets whether that combined view is shown by default and whether users can change it; it governs a different feature, covered on [its own page](/features/outlook-all-accounts-view-unified-inbox-brings-your-email-into-a-single-inbox-view/).

## Open questions

- Where will the expand-all and collapse-all command sit in the folder pane, and will it reach new Outlook for Windows and Outlook on the web at the same time? Watch Message center and the roadmap item.
- Will Outlook remember whether accounts were left expanded or collapsed between sessions?
- Will Microsoft add a Cloud Policy or mailbox policy setting for the folder pane's starting state, as it has for the All Accounts view?
- Does the option also expand or collapse shared and delegated mailboxes opened from the folder list?

<!-- rationale
risk: Low. The roadmap describes a change to how accounts already added to Outlook are shown in the folder pane, not to which data users can reach or what Outlook does on its own.
cost: None. The option is part of Outlook, which users already need a licence for; Microsoft publishes no separate licence or charge for it. The only indirect cost is updating user guides.
impact: Low. Only people with several accounts in Outlook who choose to use the option will notice it.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Licence, final sentence / licensing: If any signed-in account has a desktop-app licence, other account types can be added, without stating the page's Frontline-account exception. | Found: Can Microsoft 365 accounts with a Frontline license be added to new Outlook? No. | Fix: Narrow the final sentence to: "For people with several accounts, the same page says that once an account with a qualifying desktop-app licence is added, secondary accounts licensed for Business Basic or E1 can also be added." This wording is supported by https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options and does not imply the separate Frontline exclusion is waived. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options
-->
