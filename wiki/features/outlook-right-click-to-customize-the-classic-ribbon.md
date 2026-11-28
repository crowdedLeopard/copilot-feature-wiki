---
title: "Outlook: right-click to customise the classic ribbon in new Outlook for Windows and Outlook on the web"
slug: "outlook-right-click-to-customize-the-classic-ribbon"
roadmapId: 570664
topic: "modern-work"
products: ["Outlook"]
summary: "Users of new Outlook for Windows and Outlook on the web can right-click the classic ribbon to choose and reorder the commands and groups on the Home and View tabs. Microsoft says no admin action is required."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Comes with the Outlook clients: new Outlook for Windows needs a plan that includes the desktop versions of the Microsoft 365 apps, and Business Basic gives the web version. No licence specific to ribbon customisation is published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["outlook","new-outlook","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 570664"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570664"
    kind: "roadmap"
  - title: "MC1485120: (Updated) Outlook (new): Right-click to customize the classic ribbon"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1485120"
    kind: "message-center"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "View or modify policy properties in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Manage updates in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-updates-new-outlook-windows"
    kind: "learn"
  - title: "Release notes for Outlook for Windows (new)"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new"
    kind: "learn"
videos: []
related: ["outlook-new-cloud-policy-controls","outlook-sort-your-subfolders-from-a-to-z"]
controls:
  - governs: "Whether users can customise the classic ribbon, or a layout set by an administrator"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026). Customisation is each user's choice in the client."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-28"
    note: "New briefing: right-click ribbon customisation for the Home and View tabs, rolling out per MC1485120, with no documented admin control."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 30 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 30
  confirmed: 29
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "90b78139df64cd106b7e5417b825efbc"
---

## What's changing

Users can now customise the classic ribbon in new Outlook for Windows and Outlook on the web by right-clicking it. Microsoft's notice MC1485120 says users right-click the ribbon on the **Home** or **View** tab, select the **Customize** button, then choose which commands and groups appear on those two tabs and arrange them in their preferred order.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's and the notice's description. Neither says anything about other tabs, the simplified ribbon or how a user returns to the standard layout.

The roadmap item is **Rolling out**, General Availability, with a target of October CY2026, for the Worldwide (Standard Multi-Tenant) cloud. The record lists Web as the platform, while its description and MC1485120 name both new Outlook for Windows and Outlook on the web. MC1485120 (published 1 October 2026, updated 5 October 2026) says the worldwide rollout began in late September 2026 and is expected to complete by mid-November 2026, and that no action is required. It sets no act-by date.

## Why it matters

This is a personalisation change: each user decides what their own ribbon shows, and Microsoft asks nothing of administrators. Its main effect on a tenant is on support. Once users can hide and reorder commands, two people's ribbons may no longer match, so training material, screenshots and helpdesk scripts that say "select X on the Home tab" may not match what a given user sees.

If nobody acts, users who never right-click the ribbon keep the layout they have, and users who find the **Customize** option can change theirs. Microsoft Learn documents no admin setting to turn the option off or to push a standard layout at the time of writing (November 2026), so the response is communication, not configuration.

## Risk assessment

**Data exposure**
- No change: the roadmap item and MC1485120 describe only which commands and groups appear on the Home and View tabs, and mention no new data access.

**Security & identity**
- No change described. Where an administrator has turned a feature off by policy, Microsoft's release notes for new Outlook say the **Share to Teams** button is hidden from the ribbon and menu; whether the customisation menu respects such policies for every command is not documented (see Open questions).

**Autonomy & actions**
- No change: the feature rearranges commands and takes no action on mail.

**Change & support**
- A user who hides a group such as the one holding a reporting or classification button may report it as missing. Microsoft Learn documents no admin control to prevent this (see Governance controls), so the helpdesk needs to know the right-click **Customize** route.
- Training guides and screenshots that rely on the default Home and View tabs may stop matching what customised users see.

## Cost and licensing

**Licence.** The feature is part of the Outlook clients. Microsoft's licensing page for new Outlook says that to use the Outlook for Windows desktop app (classic or new) with an organisational address, users need a plan that includes the desktop versions of the Microsoft 365 apps, and that the Business Basic plan provides the web and mobile versions of Outlook ([Understand licensing in new Outlook for Windows](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options)). No licence or charge specific to ribbon customisation is published.

**Meter.** None is documented for this feature.

**Indirect costs.** Helpdesk time for users who hide commands, and updating any internal guides that show the default ribbon.

## Scope

- **Users:** Microsoft Outlook users on new Outlook for Windows and Outlook on the web, per MC1485120. The roadmap record lists the Web platform only.
- **Configuration:** each user customises their own ribbon. Microsoft Learn documents no admin role or setting for it.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists. No government clouds are listed on the record.
- **Rollout:** General Availability worldwide from late September 2026, expected to complete by mid-November 2026 (MC1485120). Microsoft's update guidance for new Outlook says new features reach Targeted Release for 30 days before Standard Release.
- **Tabs:** the notice names the Home and View tabs only.

## Governance guidance

### Before rollout
- Tell helpdesk staff that users can right-click the ribbon on the Home or View tab and select **Customize** to change which commands and groups appear.
- Identify internal guides and training screenshots that tell users to select a command on the Home or View tab, and note that a customised ribbon may differ.

### At rollout
- Check in a test mailbox on both new Outlook for Windows and Outlook on the web that the **Customize** option appears and how a user restores the original layout.
- Test, in a mailbox where an administrator has turned a feature off (such as Share to Teams), whether its command can be added back through **Customize**.

### After rollout
- Add the right-click **Customize** route to helpdesk scripts for "missing button" calls.
- Watch Message center and the new Outlook release notes for any admin policy that sets or locks the ribbon layout.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can customise the classic ribbon, or a layout set by an administrator</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026). Customisation is each user's choice in the client.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting, in the Exchange admin center or in Exchange Online PowerShell, that turns ribbon customisation off or sets a layout for users, at the time of writing (November 2026). The Outlook web app mailbox policies that govern features in Outlook on the web and new Outlook for Windows (Exchange admin center > Roles > Outlook web app policies) list no ribbon option, and the Set-OwaMailboxPolicy reference has no parameter for it. Customisation is a per-user choice made in the client.

## Open questions

- Is there, or will there be, an Outlook web app policy parameter or Cloud Policy setting to turn off ribbon customisation or deploy a standard layout? Watch the Set-OwaMailboxPolicy reference and Message center.
- Can a user add back, through **Customize**, a command whose feature an administrator has disabled by policy, or does the policy still hide it?
- Does a user's customised ribbon follow them between new Outlook for Windows and Outlook on the web, and between devices?
- Do buttons from web add-ins appear in the customisation menu, and can users hide them?
- How does a user reset the Home and View tabs to the default layout?

<!-- rationale
risk: Low. The change lets each user rearrange or hide ribbon commands on the Home and View tabs; neither the roadmap item nor MC1485120 describes any new data access.
cost: Low. It comes with the Outlook clients users already have; the only cost the sources show is helpdesk and communication time. No feature-specific licence is published.
impact: Low. The ribbon only changes for users who choose to customise it; the helpdesk notices when someone hides a command and cannot find it again.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature takes no action on mail. | Found: Searched: '"new Outlook" "ribbon" "customization" "mail" data access'. Read the roadmap, MC1485120 and new Outlook release notes; search results describe VSTO ribbon actions, not this feature. No text explicitly states this no-action guarantee. | Fix: Replace 'No change: the feature rearranges commands and takes no action on mail.' with 'The roadmap item and MC1485120 describe choosing and rearranging the commands and groups displayed on the Home and View tabs.'
-->
