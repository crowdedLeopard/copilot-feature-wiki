---
title: "Outlook: sort a folder's subfolders from A to Z in new Outlook for Windows and Outlook on the web"
slug: "outlook-sort-your-subfolders-from-a-to-z"
roadmapId: 579186
topic: "modern-work"
products: ["Outlook"]
summary: "Users of new Outlook for Windows and Outlook on the web will be able to sort a folder's subfolders alphabetically from the parent folder. A per-user display option with no documented admin setting; awareness only."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Uses the licence Outlook already needs: new Outlook for Windows requires a plan that includes the desktop Microsoft 365 apps, and Business Basic gives web and mobile Outlook. Nothing specific to this feature is published."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["outlook","new-outlook","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 579186"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579186"
    kind: "roadmap"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Set-MailboxMessageConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxmessageconfiguration"
    kind: "learn"
videos: []
related: ["outlook-keep-folders-expanded-when-you-restart-outlook","outlook-instantly-find-rules-quick-steps-and-more-by-name","outlook-new-cloud-policy-controls"]
controls:
  - governs: "Whether users can sort a folder's subfolders A to Z"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin setting, mailbox policy parameter or mailbox configuration parameter for folder sort order at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-27"
    note: "New briefing: users will be able to sort a folder's subfolders A to Z in new Outlook for Windows and Outlook on the web; no admin setting documented."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 35 statements contradicted, 6 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 35
  confirmed: 29
  unconfirmed: 6
  contradicted: 0
  attempts: 1
  hash: "122c3c555a51d0d4b6646294e280da0c"
---

## What's changing

Users will be able to sort the subfolders of a folder alphabetically, from A to Z, by acting on the parent folder. The roadmap item says this saves rearranging subfolders one by one and helps keep long folder lists in order.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The item is tagged for new Outlook for Windows and lists the Desktop and Web platforms. It describes sorting as something a user does from the parent folder; Microsoft has not said whether the sort replaces a custom folder order the user has set, whether it applies to shared mailboxes, or whether the order carries to other Outlook clients.

The roadmap item is **In development**, with a General Availability target of **February CY2027**, for the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

This is a convenience change to the folder pane, and it matters to a tenant mainly through support. People who file mail into dozens of subfolders often ask the service desk how to put them in order; once this arrives, the answer is a user action rather than manual dragging. Because the roadmap item describes sorting as something each user chooses to do from a parent folder, a user's folder order changes only when that user sorts.

The change does not touch permissions, retention or where mail is stored, as the roadmap describes it. There is nothing for an administrator to configure: Microsoft Learn documents no admin setting for folder sorting at the time of writing (November 2026).

## Risk assessment

**Data exposure**
- No change described: the roadmap item concerns the order in which existing subfolders are shown, not which folders or mailboxes a user can see.

**Security & identity**
- No change described: the roadmap item says nothing about sign-in, permissions or delegation.

**Autonomy & actions**
- No change: sorting reorders the folder list when a user asks for it and takes no action on mail.

**Change & support**
- A user who sorts a parent folder may lose a hand-arranged subfolder order, if the sort replaces it; Microsoft has not said whether it does. Expect a few "my folders moved" tickets from users who try the option.
- Microsoft Learn documents no admin setting for this behaviour at the time of writing (November 2026); see the controls table.

## Cost and licensing

No licence specific to this feature is published. It is part of Outlook, so it takes Outlook's own licensing. The page *Understand licensing in new Outlook for Windows* says that to use the Outlook for Windows desktop app, classic or new, with a Microsoft 365 organisational email address, "you need to purchase a plan that includes the desktop versions of the Microsoft 365 apps", and that the Business Basic plan provides access through the web and mobile versions of Outlook.

That page publishes no meter or separate charge for this feature. The indirect cost is a line in user communications and a helpdesk note.

## Scope

- **Clients:** the roadmap item is tagged for new Outlook for Windows and lists the Desktop and Web platforms. It does not mention classic Outlook for Windows, Outlook for Mac or Outlook mobile.
- **Users:** anyone using those clients who chooses to sort a folder's subfolders. The licensing page says users with a Microsoft 365 Frontline licence are required to use the web and mobile versions of Outlook, so for them this arrives through Outlook on the web.
- **Roles:** no admin role is involved; Microsoft Learn documents no admin setting for the feature.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Rollout:** General Availability, targeted for February CY2027.

## Governance guidance

### Before rollout
- Add a line to the next Outlook change communication telling users they will be able to sort a folder's subfolders A to Z from the parent folder.
- Watch Message center for a post on roadmap item 579186 that gives the rollout window and says whether the sort replaces a custom folder order.

### At rollout
- Try the sort on a pilot user's new Outlook for Windows and Outlook on the web, and note whether a hand-arranged order is overwritten and whether the order shows the same in the other client.
- Update the service desk knowledge article on folder order with what the pilot shows.

### After rollout
- Review service desk tickets about folder order in the first weeks and point users to the new option where it answers them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can sort a folder's subfolders A to Z</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin setting, mailbox policy parameter or mailbox configuration parameter for folder sort order at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for sorting subfolders at the time of writing (November 2026). Most Outlook on the web mailbox policies apply to both Outlook on the web and new Outlook for Windows, but neither the Set-OwaMailboxPolicy reference nor the Set-MailboxMessageConfiguration reference has a parameter for folder sort order. If Microsoft adds a control, expect it to be announced in Message center.

## Open questions

- Does sorting a parent folder replace a custom subfolder order the user has set, and can the user go back to it? Watch Message center for a post on roadmap item 579186.
- Is the sorted order kept with the mailbox, so that it shows the same in Outlook on the web, new Outlook for Windows and other Outlook clients, or per device?
- Does the option work on folders in shared mailboxes and other accounts added to new Outlook?
- Does the change also reach classic Outlook for Windows, Outlook for Mac or Outlook mobile?

<!-- rationale
risk: Low. The roadmap item describes a change to the order in which a user's own subfolders are shown, not to which folders or mailboxes anyone can open.
cost: Low. Microsoft publishes no separate licence or meter for this feature; it comes with the licence Outlook already needs, and the only cost is a line in user and helpdesk communications.
impact: Low. Only users who choose to sort a folder's subfolders see a change, mostly people who file mail into long folder lists.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters; rationale: impact / default: A user's folder order changes only when that user sorts, and only users who choose to sort see a change. | Found: Searched: Outlook sort subfolders A to Z parent folder custom order shared mailboxes sync; Outlook sort subfolders A to Z automatic default permissions retention mail storage. Read roadmap, policy-management and mailFolder; none establishes this exclusive guarantee. | Fix: Replace the final sentence of the first Why it matters paragraph with 'The roadmap describes a user-initiated sort from a parent folder.' Replace the impact rationale with 'Low. The roadmap describes an optional sorting action for people managing subfolder lists.' Keep defaultState as user-opt-in; do not claim that only the initiating user can see an order change while synchronization and shared-mailbox behavior remain undocumented.
- [unsupported, major] Why it matters: second paragraph / behaviour: The change does not touch permissions. | Found: Searched: Outlook sort subfolders A to Z automatic default permissions retention mail storage. Read roadmap and policy-management; the roadmap describes sorting but does not state that permissions are unaffected. | Fix: Replace 'The change does not touch permissions, retention or where mail is stored, as the roadmap describes it.' with 'The roadmap describes subfolder sorting; it does not describe changes to permissions, retention or mail storage.'
- [unsupported, major] Why it matters: second paragraph / behaviour: The change does not touch retention. | Found: Searched: Outlook sort subfolders A to Z automatic default permissions retention mail storage. Read roadmap and search results; general retention-policy documentation does not state what this feature does to retention. | Fix: Use the replacement sentence given for the permissions claim: 'The roadmap describes subfolder sorting; it does not describe changes to permissions, retention or mail storage.'
- [unsupported, major] Why it matters: second paragraph / behaviour: The change does not touch where mail is stored. | Found: Searched: Outlook sort subfolders A to Z automatic default permissions retention mail storage. Read roadmap and Graph mailFolder reference; neither specifies storage behavior for this planned sort. | Fix: Use the replacement sentence given for the permissions claim: 'The roadmap describes subfolder sorting; it does not describe changes to permissions, retention or mail storage.'
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Sorting takes no action on mail. | Found: Searched: Outlook sort subfolders A to Z automatic default permissions retention mail storage. Read roadmap, policy-management and Graph mailFolder reference; none expressly documents the absence of mail actions for this feature. | Fix: Replace the bullet with: No mail action is described: the roadmap says users will be able to sort a folder's subfolders alphabetically from the parent folder.
- [unsupported, blocker] Scope: Roles / role: No admin role is involved. | Found: Searched: new Outlook folder sort order admin policy Cloud Policy Set-OwaMailboxPolicy Set-MailboxMessageConfiguration. Read policy-management and both cmdlet references; no feature-specific setting was found, but none states that no admin role is involved. | Fix: Remove 'no admin role is involved;' and retain 'Microsoft Learn documents no admin setting for the feature.' An absence of a documented switch does not establish a role requirement or its absence.
-->
