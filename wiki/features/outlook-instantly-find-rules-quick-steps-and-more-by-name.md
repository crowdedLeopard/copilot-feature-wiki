---
title: "Outlook: search by name in Rules, Quick Steps, Conditional Formatting and Search Folders"
slug: "outlook-instantly-find-rules-quick-steps-and-more-by-name"
roadmapId: 557678
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook adds name search to its lists of rules, Quick Steps, conditional formatting and Search Folders. Launched on the roadmap; Learn's release notes confirm the search box for inbox rules only. No admin action is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Outlook's licensing page says a plan that includes the desktop Microsoft 365 apps is needed to use Outlook for Windows (classic or new) with an organisational address. A licence specific to this feature is not yet published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["outlook","new-outlook","exchange","user-experience"]
sources:
  - title: "Release notes for Outlook for Windows (new)"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new"
    kind: "learn"
  - title: "Release notes for Outlook for Windows (new) Targeted Release"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new-targeted"
    kind: "learn"
  - title: "View or modify policy properties in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Outlook: Instantly Find Rules, Quick Steps, and More by Name"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557678"
    kind: "roadmap"
videos: []
related: ["outlook-new-cloud-policy-controls","outlook-reply-with-a-template-in-rules"]
controls:
  - governs: "Whether users can view, create or modify server-side inbox rules"
    scope: "user"
    ui:
      surface: "Exchange admin center"
      path: "Roles > Outlook web app policies > policy > Features > Manage features"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    api:
      kind: "powershell"
      call: "Set-OwaMailboxPolicy -Identity <policy name> -RulesEnabled $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    note: "Existing control over rules, not over the search box. The page lists Information management among the expandable sections of Manage features; it does not name the setting's section."
  - governs: "Whether Search Folders are available in Outlook on the web"
    scope: "user"
    ui:
      surface: "Exchange admin center"
      path: "Roles > Outlook web app policies > policy > Features > Manage features"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    api:
      kind: "powershell"
      call: "Set-OwaMailboxPolicy -Identity <policy name> -SearchFoldersEnabled $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    note: "Existing control over Search Folders in Outlook on the web, not over the search box. The page does not say which section of Manage features holds it."
  - governs: "Switch for the name search box in Rules, Quick Steps, Conditional Formatting and Search Folders"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-25"
    note: "First briefing for this item: roadmap Launched; Learn's release notes confirm the search box for inbox rules only."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 38 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 36
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "9674f0d7e4cfce6f8b4d58dda4f54e6b"
---

## What's changing

Outlook adds a name search to the lists where users manage mailbox automation. The roadmap item says users can search within Rules, Conditional Formatting, Quick Steps and Search Folders, and filter each list by name by typing a few characters.

Microsoft Learn confirms part of this. The release notes for Outlook for Windows (new) say under October 30, 2026: "Inbox rule settings now include a search box." The release notes read for this briefing do not mention a search box for Quick Steps, conditional formatting or Search Folders, so those three rest on the roadmap description alone at the time of writing (November 2026).

The roadmap record lists the platform as Web, while its description carries the hashtag #newoutlookforwindows and the Learn release note is for new Outlook for Windows. No Learn page describing the feature on Outlook on the web was found, so which clients show each search box is not confirmed here.

The roadmap record gives the status as Launched, with a preview date of April CY2026 and a target date of May CY2026. The release note's date (October 30, 2026) is later than both; the two sources are reported as they stand.

## Why it matters

This is a convenience change that stays inside Outlook's existing lists, so an administrator's main job is to know it exists. Users who keep many inbox rules or Quick Steps will find items faster, and fewer of them may ask the help desk how to locate a rule.

Microsoft has not stated a setting that switches the search box on or off for an organisation. The release note and roadmap describe it as part of the app, so no action by an administrator is needed to receive it.

## Risk assessment

**Data exposure**
- No new data access is described: the roadmap says users filter lists of rules, Quick Steps, conditional formatting and Search Folders by name. The lists are the user's own settings.

**Security & identity**
- No change documented. Inbox rules stay governed by the existing Outlook on the web mailbox policy setting that decides whether users can view, create or modify server-side rules (see the controls table).

**Autonomy & actions**
- No change: the search only narrows what a list shows. Rules still run as the user configured them.

**Change & support**
- Help-desk guidance that tells users to scroll through the rules list will be out of date for clients that show the search box. Confirm which of your clients show it before updating guidance, because Learn documents it only for inbox rules in new Outlook for Windows.

## Cost and licensing

Microsoft's Outlook licensing page says that, to use the Outlook for Windows desktop app (classic or new) with a Microsoft 365 organisational email address, you need a plan that includes the desktop versions of the Microsoft 365 apps. That is the page's requirement for the app; it does not mention this feature.

Neither the roadmap record nor the release notes name a separate licence, meter or price for the name search. A licence specific to this feature is not yet published. The cost known from the sources is admin time to tell users about it.

## Scope

The roadmap record lists the cloud as Worldwide (Standard Multi-Tenant) and the platform as Web, with release phases General Availability and Preview. The Learn release note for the inbox-rule search box is in the release notes for Outlook for Windows (new), dated October 30, 2026, and it also appears in the Targeted Release notes for that client.

The record lists no US Government clouds. The record does not state which roles or licences are needed, and Microsoft has not stated a prerequisite beyond using Outlook. Users act on their own lists; there is no role-based element in the description.

## Governance guidance

### Before rollout
- Check which Outlook clients your users run (Outlook on the web, new Outlook for Windows) so you know where the inbox-rule search box is documented.
- Review the Outlook on the web mailbox policy that governs Inbox rules, to confirm whether users can use rules in your tenant.

### At rollout
- Tell users that the rules list in new Outlook for Windows includes a search box, using the Learn release notes as the reference.
- Update help-desk notes for finding a rule, and mark Quick Steps, conditional formatting and Search Folders as unconfirmed until Learn documents them.

### After rollout
- Ask a pilot group whether the search boxes appear for Quick Steps, conditional formatting and Search Folders, and record which clients show them.
- Watch the Outlook for Windows (new) release notes and Message center for any announcement that describes the other three lists.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can view, create or modify server-side inbox rules</strong><br><small>User</small><br><small class="controls__note">Existing control over rules, not over the search box. The page lists Information management among the expandable sections of Manage features; it does not name the setting's section.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Roles › Outlook web app policies › policy › Features › Manage features <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OwaMailboxPolicy -Identity &lt;policy name&gt; -RulesEnabled $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Search Folders are available in Outlook on the web</strong><br><small>User</small><br><small class="controls__note">Existing control over Search Folders in Outlook on the web, not over the search box. The page does not say which section of Manage features holds it.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Roles › Outlook web app policies › policy › Features › Manage features <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OwaMailboxPolicy -Identity &lt;policy name&gt; -SearchFoldersEnabled $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for the name search box in Rules, Quick Steps, Conditional Formatting and Search Folders</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting is documented for this search box itself. The rows above are existing controls over the lists the search works in; they decide whether the lists are available, not whether the search box appears.

The Learn page for the mailbox policy says its settings apply to Outlook on the web and the new Outlook for Windows. Per the cmdlet reference, RulesEnabled decides whether a user can view, create or modify server-side rules in Outlook on the web, and SearchFoldersEnabled decides whether Search Folders are available in Outlook on the web. Learn's cmdlet reference lists no parameter for Quick Steps or conditional formatting. Changes to these policies might take up to 60 minutes to take effect, per the Set-OwaMailboxPolicy page.

## Open questions

- Which clients show a search box for Quick Steps, conditional formatting and Search Folders, given that the Learn release note read covers only inbox rules? Watch the Outlook for Windows (new) release notes.
- The roadmap lists the platform as Web while the Learn release note is for new Outlook for Windows: does Outlook on the web have the same search boxes, and from when?
- Is there any setting, such as a Cloud Policy or mailbox policy option, that turns the search boxes off? None is documented at the time of writing (November 2026).
- Does the feature need a licence beyond the plan that already covers Outlook? Microsoft has not published one specific to it.

<!-- rationale
risk: Low. The roadmap describes filtering existing lists by name inside Outlook; it describes no new data access, and no administrator setting is needed to use it.
cost: Low. Only admin time (user communication) is a known cost; Microsoft has published no licence or charge specific to this feature, and Outlook's own licensing page applies to the app.
impact: Low. Users with long lists of rules or Quick Steps notice a search box; the roadmap describes no change to what the lists do.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Rules still run as the user configured them after the search-box change. | Found: Searched: Outlook rules Quick Steps conditional formatting Search Folders user own settings rules run automatically configured. Read release notes, roadmap and Inbox management and EWS excerpt; these describe search and general rule execution, not unchanged execution after this update. | Fix: Replace 'Rules still run as the user configured them' with 'The roadmap describes filtering the list by name, not changing rule actions.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Exchange admin center > Roles > Outlook web app policies > policy > Features > Manage features reaches the page for managing inbox-rule availability. | Found: In the EAC, go to Roles > Outlook web app policies. Features: Select Manage features. In the Edit features flyout that opens, the available settings are visible in the following expandable sections: | Fix: Use 'Roles > Outlook web app policies > policy > Features > Manage features > Edit features'. Replace the note's navigation qualification with 'This route opens the feature-management flyout; the cited page does not identify the section or setting label for Inbox rules.' | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Exchange admin center > Roles > Outlook web app policies > policy > Features > Manage features reaches the mailbox-policy feature-management page for Search Folders. | Found: On the Outlook web app policies page, select the policy that you want to view or configure by clicking anywhere in the row other than the button option that appears next to the Name column. Features: Select Manage features. | Fix: Use 'Roles > Outlook web app policies > policy > Features > Manage features > Edit features'. Replace the note's navigation qualification with 'This route opens the feature-management flyout; the cited page does not identify the section or setting label for Search Folders.' | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties
- [supported, minor] Scope / absence: Microsoft has not stated a prerequisite beyond using Outlook for these name-search boxes. | Found: Searched: Outlook name search inbox rules Quick Steps Search Folders feature license pricing prerequisites Outlook web. Read Outlook licensing and both release-note pages; no prerequisites specific to name search were stated, but general desktop licensing is documented. | Fix: Replace 'Microsoft has not stated a prerequisite beyond using Outlook' with 'Microsoft has not published prerequisites specific to these name-search boxes beyond Outlook's general licensing requirements.'
- [contradicted, minor] front matter: impact; rationale: impact / consistency: An impact rating of low fits this automatically delivered interface change. | Found: impact: "low" defaultState: "on" Low. Users with long lists of rules or Quick Steps notice a search box. Scale: low means admins only or a small opt-in group; high includes a change to default behaviour. | Fix: Set impact to 'high' and replace its rationale with 'High. The inbox-rule settings search box is an automatically delivered interface change in new Outlook for Windows, although its practical benefit is greatest for users with long lists.'
-->
