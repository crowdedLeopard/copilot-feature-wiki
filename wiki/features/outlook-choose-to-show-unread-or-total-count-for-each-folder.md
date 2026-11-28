---
title: "Outlook: choose unread or total item count for each folder in the folder pane"
slug: "outlook-choose-to-show-unread-or-total-count-for-each-folder"
roadmapId: 563807
topic: "modern-work"
products: ["Outlook"]
summary: "Users of new Outlook for Windows and Outlook on the web can right-click a folder to show its total item count instead of its unread count. It is a personal display choice; Microsoft documents no admin setting, so no admin action is needed."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Part of Outlook. New Outlook for Windows with a work account needs a plan that includes the desktop Microsoft 365 apps; Business Basic gives the web and mobile versions of Outlook. Nothing specific to this option is published."
audiences: ["m365-admin","change-adoption"]
tags: ["outlook","new-outlook","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 563807"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=563807"
    kind: "roadmap"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Deployment overview for the new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/deployment-new-outlook"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "View or configure Outlook on the web mailbox policy properties in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Set-MailboxMessageConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxmessageconfiguration"
    kind: "learn"
videos: []
related: ["outlook-sort-your-subfolders-from-a-to-z","outlook-keep-folders-expanded-when-you-restart-outlook","outlook-expand-or-collapse-all-accounts-at-once","outlook-remember-your-online-archive-folder-pane-state"]
controls:
  - governs: "Whether users get the per-folder unread or total count option at all"
    scope: "tenant"
    ui: null
    api: null
    note: "The Outlook web app policies in the Exchange admin center and Set-OwaMailboxPolicy list no folder count setting at the time of writing (November 2026)."
  - governs: "Which count a given user's folders show, set by an administrator"
    scope: "user"
    ui: null
    api: null
    note: "Set-MailboxMessageConfiguration, which holds other per-mailbox Outlook on the web display settings, lists no folder count parameter at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-28"
    note: "New briefing: per-folder choice of unread or total item count in new Outlook for Windows and Outlook on the web, with no documented admin setting."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 32 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the cost rating from none to low: the known cost is helpdesk communication time, and Microsoft has not published a separate price or meter for this option."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 39 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 39
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c13d9911e3477fe396e397db3011a893"
---

## What's changing

Each folder in the Outlook folder pane can show either its unread count or its total item count, and the user picks which, folder by folder. The roadmap item says the choice is made by right-clicking a folder and choosing whether to show the total or unread count, and that until now Outlook displayed only unread counts.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap describes it as giving users more control over how they keep track of email "without changing how anything else works". It does not say which count a folder shows before a user makes a choice, or whether a choice made in one client follows the user to another.

The roadmap record lists the item as Rolling out, with a preview date of September CY2026 and a target date of October CY2026, for the Desktop and Web platforms, and tags it #newoutlookforwindows. Release phases listed are General Availability and Preview.

## Why it matters

For a service owner this is a communication item, not a governance one. The count is a number about a folder the user already has in their folder pane; the roadmap describes no change to what users can open, send or share. Microsoft documents no admin setting for it, and the roadmap describes it as a choice each user makes for each folder.

The practical effect is on support. A user who switches a busy folder to total count will see a much larger number than before, which can read as a backlog of unread mail. Helpdesk staff who know the option exists can resolve that in one step from the folder's right-click menu.

## Risk assessment

**Data exposure**
- No change: the roadmap describes a display choice for counts of items already in the user's folders.

**Security & identity**
- No change: nothing in the roadmap item touches sign-in, permissions or sharing.

**Autonomy & actions**
- No change: the roadmap describes the option as changing which number a folder shows, without changing how anything else works.

**Change & support**
- A folder set to total count shows a larger number than users are used to, which can prompt "I have hundreds of unread emails" tickets. Microsoft documents no admin setting to fix the count for users (see the controls table), so the fix is the user's own right-click choice.

## Cost and licensing

The option is part of Outlook and comes with the licence Outlook needs. The [licensing page for new Outlook for Windows](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options) says that using the Outlook for Windows desktop app with a Microsoft 365 organisational email address needs a plan that includes the desktop versions of the Microsoft 365 apps, and that the Business Basic plan gives access through the web and mobile versions of Outlook. The same page says users with Microsoft 365 frontline licences are required to use the web and mobile versions.

Microsoft publishes no separate licence, meter or charge for this option. The only cost the sources show is the time to tell helpdesk staff about it.

## Scope

- **Clients:** the record lists the Desktop and Web platforms and tags the item #newoutlookforwindows; it does not name classic Outlook for Windows, Outlook for Mac or Outlook mobile.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, as the record lists them.
- **Users:** anyone who uses new Outlook for Windows or Outlook on the web under the licences above. Microsoft's deployment overview says Outlook on the web needs to be enabled for the mailboxes of users who are to get new Outlook for Windows.
- **Who sets it:** each user, per folder. Microsoft Learn documents no admin role or setting for it at the time of writing (November 2026).

## Governance guidance

### Before rollout
- Tell helpdesk staff that a folder showing a much larger number than usual may be set to total item count, and that the user switches it back by right-clicking the folder.
- Add the right-click choice to new Outlook for Windows adoption notes for teams that track how many items sit in shared or project folders.

### At rollout
- Check in a pilot mailbox in new Outlook for Windows and Outlook on the web which count a folder shows before anyone changes it.
- Check in the same pilot whether a folder switched to total count in one client shows total count in the other.

### After rollout
- Watch Message center and the Policy Management in new Outlook for Windows page for an admin setting for folder counts, since none is documented today (see the controls table).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users get the per-folder unread or total count option at all</strong><br><small>Tenant</small><br><small class="controls__note">The Outlook web app policies in the Exchange admin center and Set-OwaMailboxPolicy list no folder count setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which count a given user's folders show, set by an administrator</strong><br><small>User</small><br><small class="controls__note">Set-MailboxMessageConfiguration, which holds other per-mailbox Outlook on the web display settings, lists no folder count parameter at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The roadmap item describes this as a choice each user makes per folder. Outlook on the web mailbox policies, which Microsoft says mostly apply to both Outlook on the web and new Outlook for Windows, have no folder count setting in the Set-OwaMailboxPolicy reference at the time of writing (November 2026). Set-MailboxMessageConfiguration, which sets per-mailbox Outlook on the web settings such as MailFolderPaneExpanded, has no folder count parameter either.

## Open questions

- Which count does a folder show before the user chooses: unread, as today, for every folder? Watch the Message center post for this item, if one is published.
- Is the choice stored with the mailbox, so that it follows the user between new Outlook for Windows and Outlook on the web, or kept per device?
- Does the option also work for shared mailboxes, delegated folders, the online archive and Favorites?
- Will Microsoft add an Outlook on the web mailbox policy or Set-MailboxMessageConfiguration parameter for it? Watch the Set-OwaMailboxPolicy reference.

<!-- rationale
risk: Low. A per-folder display choice in the user's own folder pane; the roadmap item describes no new data access, sharing or automation.
cost: Low. The known cost is helpdesk communication time; Microsoft has not published a separate price or meter for this option.
impact: Low. Only users who right-click a folder and switch its count notice a difference; the roadmap says nothing else changes.
-->
