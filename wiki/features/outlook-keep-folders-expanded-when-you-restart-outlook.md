---
title: "Outlook: folders and shared mailboxes stay expanded or collapsed after a restart"
slug: "outlook-keep-folders-expanded-when-you-restart-outlook"
roadmapId: 579187
topic: "modern-work"
products: ["Outlook"]
summary: "New Outlook for Windows and Outlook on the web will remember which folders and shared mailboxes a user expanded or collapsed. A display change only; no admin setting is documented, so tell users and helpdesk."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Uses the licence Outlook already needs: new Outlook for Windows requires a plan that includes the desktop Microsoft 365 apps, and Business Basic gives web and mobile Outlook. Nothing specific to this feature is published."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["outlook","new-outlook","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 579187"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579187"
    kind: "roadmap"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Create a mailbox policy in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/create-outlook-web-app-mailbox-policy"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
videos: []
related: ["outlook-all-accounts-view-unified-inbox-brings-your-email-into-a-single-inbox-view","outlook-new-cloud-policy-controls","outlook-instantly-find-rules-quick-steps-and-more-by-name"]
controls:
  - governs: "Whether Outlook remembers expanded and collapsed folders and shared mailboxes"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin setting or policy for this behaviour at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-27"
    note: "New briefing: folder pane remembers expanded and collapsed folders and shared mailboxes after a restart; no admin setting documented."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 28 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 28
  confirmed: 27
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "218573b60cd4b34326222144eb0d5997"
---

## What's changing

Outlook will remember which folders and shared mailboxes a user has expanded or collapsed in the folder pane, and show them the same way when the app is restarted. The roadmap item says users can pick up where they left off without opening the same folder branches again.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The item is tagged for new Outlook for Windows and lists the Desktop and Web platforms. Microsoft has not stated whether the behaviour is on by default or something each user turns on, nor where the remembered state is kept.

The roadmap item is **In development**, with a General Availability target of **February CY2027**, for the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

This is a convenience change to the folder pane, and its main effect on a tenant is on support. People who work from several shared mailboxes, such as service desks and assistants, tend to collapse and expand the same branches many times a day; if the state now persists, a folder that a user collapsed weeks ago stays collapsed, and some will report it as a missing folder. Expect a short-lived rise in "my folders have moved" tickets rather than any change in access.

Microsoft has not stated what happens on arrival. No source says that existing access to folders or shared mailboxes changes.

## Risk assessment

**Data exposure**
- No change described: the roadmap item concerns how folders already in the folder pane are displayed, not which mailboxes or folders appear there.

**Security & identity**
- No change described: the roadmap item says nothing about sign-in, permissions or delegation.

**Autonomy & actions**
- No change: the feature takes no action on mail.

**Change & support**
- A folder or shared mailbox left collapsed stays collapsed after a restart, which users may read as a folder having disappeared. Brief the helpdesk to check whether the parent folder or mailbox is collapsed before troubleshooting further.
- Microsoft Learn documents no admin setting for this behaviour at the time of writing (November 2026); see the controls table.

## Cost and licensing

No licence specific to this feature is published. It is part of Outlook, so it takes Outlook's own licensing. The page *Understand licensing in new Outlook for Windows* says that to use the Outlook for Windows desktop app, classic or new, with a Microsoft 365 organisational email address, "you need to purchase a plan that includes the desktop versions of the Microsoft 365 apps", and that the Business Basic plan provides access through the web and mobile versions of Outlook.

Microsoft publishes no meter or separate charge for this feature. The indirect cost is a note in user communications and a helpdesk briefing.

## Scope

- **Clients:** the roadmap item is tagged for new Outlook for Windows and lists the Desktop and Web platforms. It does not mention classic Outlook for Windows, Outlook for Mac or Outlook mobile.
- **Users:** anyone using those clients; the change matters most to people with many folders or several shared mailboxes in the folder pane. The licensing page says accounts with a Microsoft 365 Frontline licence cannot be added to new Outlook and must use the web and mobile versions.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Rollout:** General Availability, targeted for February CY2027.

## Governance guidance

### Before rollout
- Add a line to the next Outlook change communication telling users that folders and shared mailboxes will reopen expanded or collapsed as they left them.
- Brief the service desk that a "missing" folder or shared mailbox after this change may simply be collapsed in the folder pane.
- Watch Message center for a post on this roadmap item that confirms the default and the rollout window.

### At rollout
- Confirm on a pilot user's new Outlook for Windows and Outlook on the web that collapsed shared mailboxes stay collapsed after a restart.
- Check whether the state carries between the two clients, and tell the service desk what you find.

### After rollout
- Review service desk tickets about missing folders or shared mailboxes in the first weeks and update the knowledge article if collapsed folders are the cause.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Outlook remembers expanded and collapsed folders and shared mailboxes</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin setting or policy for this behaviour at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for this behaviour at the time of writing (November 2026). Most Outlook on the web mailbox policies apply to both Outlook on the web and new Outlook for Windows; the features list for those policies in the Exchange admin center includes no folder pane setting, and the Set-OwaMailboxPolicy reference has no parameter for it. If Microsoft adds a control, expect it to be announced in Message center.

## Open questions

- Is the behaviour on for every user when it arrives, or a setting each user turns on? Watch Message center for a post on roadmap item 579187.
- Is the expanded or collapsed state kept per device or with the mailbox, and does it carry between new Outlook for Windows and Outlook on the web?
- Does the change also reach classic Outlook for Windows, Outlook for Mac or Outlook mobile?
- Will Microsoft add an admin setting, such as a mailbox policy parameter, to control it?

<!-- rationale
risk: Low. The roadmap item describes a change to how the folder pane is displayed after a restart, not to which mailboxes or folders a user can open.
cost: Low. Microsoft publishes no separate licence or meter for this feature; the only cost the sources show is a line in user and helpdesk communications.
impact: Medium. Users of new Outlook for Windows and Outlook on the web with deep folder trees or several shared mailboxes will notice the folder pane opening as they left it.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions; summary / behaviour: The feature takes no action on mail and is a display change only. | Found: Searched: Outlook remember collapsed storage mailbox device mail actions; Outlook remember expanded collapsed folders shared mailboxes restart default state stored settings policy. Read roadmap and Policy Management; neither explicitly states that no action on mail occurs. | Fix: Replace 'No change: the feature takes no action on mail.' with 'No action on mail is described in the roadmap item.' Replace 'A display change only' in the summary with 'The roadmap describes a display change'.
-->
