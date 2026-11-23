---
title: "Outlook: 1-year and 2-year offline email sync options in new Outlook for Windows"
slug: "outlook-1-year-and-2-year-options-for-email-sync-window-offline-settings"
roadmapId: 560535
topic: "modern-work"
products: ["Outlook"]
summary: "New Outlook for Windows users will be able to keep 1 or 2 years of email offline. Users choose it in Offline settings; no admin action is required, and no admin setting for the value is documented yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn says using new or classic Outlook for Windows with a Microsoft 365 organisational address needs a plan that includes the desktop Microsoft 365 apps. Nothing specific to this option is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","new-outlook","exchange","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 560535"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560535"
    kind: "roadmap"
  - title: "Release notes for Outlook for Windows (new)"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "View or modify policy properties in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Only a subset of your Exchange mailbox items are synchronized in Outlook"
    url: "https://learn.microsoft.com/troubleshoot/outlook/user-interface/only-subset-items-synchronized"
    kind: "learn"
videos: []
related: ["outlook-offline-settings-days-of-email-to-save-admin-policy","outlook-all-accounts-view-unified-inbox-brings-your-email-into-a-single-inbox-view","outlook-new-cloud-policy-controls","cloud-policy"]
controls:
  - governs: "Which values of \"Days of email to save\" users can choose (admin setting)"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin setting or API for the offline sync window at the time of writing (November 2026)."
  - governs: "Whether new Outlook for Windows can be used offline at all (existing control)"
    scope: "other"
    ui:
      surface: "Exchange admin center"
      path: "Roles > Outlook web app policies > policy > Access > Manage access > Offline access"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    api:
      kind: "powershell"
      call: "Set-OwaMailboxPolicy -Identity <policy name> -OfflineEnabledWin $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    note: "Existing control: allows or blocks offline use of new Outlook for Windows. It does not set the number of days to save."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-25T23:13:41"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: users get 1-year and 2-year offline sync options, targeted November CY2026; Learn documents no admin control for the value yet."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 37 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 35
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "34838b76d04d8f2822f6400f42d4554b"
---

## What's changing

The roadmap item says users of the new Outlook for Windows can choose to save 1 year or 2 years of email on their device for offline access, in addition to the existing offline options. The new options are listed under Settings > General > Offline > Days of email to save.

Microsoft Learn does not describe the 1-year and 2-year options yet, so what follows about their behaviour is the roadmap's description. For background, the new Outlook release notes for May 30, 2025 (version 20250523006.11) say the default mail sync window in offline mode was expanded from seven days to 30 days.

The record lists the item as In development, targeted for November CY2026, with General Availability as the release phase, in Worldwide (Standard Multi-Tenant). The record's platform field says Web, although its description is about the new Outlook for Windows; this briefing follows the description. The target is a plan, not a commitment.

## Why it matters

"Days of email to save" decides how much mail new Outlook keeps on the device, so a 1-year or 2-year choice means more local storage, a larger first sync and more mail readable without a connection. For most tenants this is a user-level change that needs awareness rather than configuration.

The roadmap says users can choose the new options. Microsoft has not said that the default value or any existing user's value changes, so plan on no source saying existing behaviour changes. Decide whether longer offline windows suit your devices and data-handling rules, because Microsoft Learn documents no admin setting for the number of days at the time of writing (November 2026).

## Risk assessment

**Data exposure**

- Choosing 1 or 2 years keeps more of a mailbox cached on each Windows device. Mail older than the current window becomes available offline, which widens what is on the device if it is lost or shared. No admin control over the window is documented; the existing offline switch is the only related control (see the controls table).

**Security & identity**

- No change documented: the roadmap describes a longer saved window, not a new sign-in or permission path.

**Autonomy & actions**

- No change: the roadmap describes no automated action.

**Change & support**

- A user who moves to a longer window may see a larger sync and more disk use. Microsoft's guidance on raising the sync window is for classic Outlook, which warns that applying a higher value to hundreds or more clients at the same time could adversely affect available network bandwidth; it is not stated for this option.
- Expect questions from users who want more offline mail than the default, and from users who find older mail missing offline when they keep the shorter default.

## Cost and licensing

Microsoft Learn's licensing page for new Outlook for Windows says that using the Outlook for Windows desktop app, classic or new, with a Microsoft 365 organisational email address needs a plan that includes the desktop versions of the Microsoft 365 apps. The roadmap record names no licence for this option, and no price or meter specific to it is published at the time of writing (November 2026).

Indirect costs are local disk use on each device, sync traffic for the first download of a longer window, and admin time to brief the service desk.

## Scope

The roadmap item concerns the new Outlook for Windows and the "Days of email to save" setting under Settings > General > Offline. The record lists Worldwide (Standard Multi-Tenant) only and General Availability as the release phase.

Who can use the longer options, whether any account type is excluded, and how much storage they need are not stated. The same Learn licensing page says Microsoft 365 accounts with a Frontline licence cannot be added to new Outlook.

## Governance guidance

### Before rollout

- Record the current "Days of email to save" value on a pilot device under Settings > General > Offline, so you know what users see today.
- Check whether `OfflineEnabledWin` is set on your Outlook on the web mailbox policies, because it allows or blocks offline use of new Outlook for Windows altogether.
- Check free disk space on the device models that run new Outlook, since a 1-year or 2-year window caches more mail locally.

### At rollout

- Watch Message center and the new Outlook for Windows release notes for the version that adds the options.
- Tell service-desk staff that users choose the window themselves in Settings > General > Offline.

### After rollout

- Ask pilot users with large mailboxes to try a longer window and report disk use and first-sync time.
- Revisit the offline policy if Microsoft documents an admin control for the number of days.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which values of &quot;Days of email to save&quot; users can choose (admin setting)</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin setting or API for the offline sync window at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether new Outlook for Windows can be used offline at all (existing control)</strong><br><small class="controls__note">Existing control: allows or blocks offline use of new Outlook for Windows. It does not set the number of days to save.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Roles › Outlook web app policies › policy › Access › Manage access › Offline access <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OwaMailboxPolicy -Identity &lt;policy name&gt; -OfflineEnabledWin $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin control for the "Days of email to save" value is documented at the time of writing (November 2026), so the first row records that gap. The second row is an existing control: `OfflineEnabledWin` allows or blocks use of new Outlook for Windows offline. It does not set the number of days, and it is not a way to stop users choosing a 1-year or 2-year window while leaving offline mode on.

The EAC route and the cmdlet come from two different Learn pages; the EAC page lists an Offline access section in the policy's access settings, and the policy management page names the `OfflineEnabledWin` parameter.

## Open questions

- Will an admin setting or policy cover the number of days to save for the new options, and where will it be documented? Watch Message center and the Learn page Policy Management in new Outlook for Windows.
- Is the default value of "Days of email to save" unchanged when the 1-year and 2-year options arrive?
- Is there a storage or mailbox-size limit that stops the longer windows on some devices or account types?
- Why does the roadmap record list the platform as Web when the description names the new Outlook for Windows?

<!-- rationale
risk: Low. It extends a setting users already choose in Offline settings, so no new data source or permission appears; the exposure is more cached mail on each device if users pick the longer windows.
cost: Low. The only costs the sources show are admin time and the extra local storage and sync traffic of longer windows; no licence or meter specific to this option is published.
impact: Low. Only users who open Settings > General > Offline and pick a longer window notice it; nothing in the record says existing values change.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / absence: The existing offline switch is the only related control. | Found: The AttachmentsOfflineEnabledWin parameter specifies whether file attachments are available for offline use in Outlook (formerly known as the new Outlook for Windows). This parameter only applies when offline capabilities are enabled in Outlook. | Fix: Replace 'the existing offline switch is the only related control (see the controls table)' with 'the existing OfflineEnabledWin switch allows or blocks offline use altogether (see the controls table)'. Do not add another control row. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; rendered controls table; Governance controls / admin-path: Exchange admin center > Roles > Outlook web app policies > policy > Access > Manage access > Offline access reaches the documented offline-access section. | Found: In the EAC, go to Roles > Outlook web app policies. ... In the Details flyout that opens ... Access: Select Manage access. In the Edit access flyout ... File access ... Offline access | Fix: Use the fuller path 'Roles > Outlook web app policies > policy > Details > Access > Manage access > Edit access > Offline access'. Keep the route described as reaching the Offline access section; the cited page does not name an individual switch within that section. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks readers to check the user-side Days of email to save control, but the controls table has no user-side row. | Found: Record the current "Days of email to save" value on a pilot device under Settings > General > Offline; table rows: Which values ... (admin setting); Whether new Outlook for Windows can be used offline at all (existing control). | Fix: The checklist's user-side 'Days of email to save' control has no table row. Remove the 'Record the current "Days of email to save" value' checklist bullet; do not add another row.
-->
