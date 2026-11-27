---
title: "Outlook: remember whether the online archive is expanded or collapsed in the folder pane"
slug: "outlook-remember-your-online-archive-folder-pane-state"
roadmapId: 579188
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook on the web and the new Outlook for Windows will remember whether a user's online archive is expanded or collapsed in the folder pane. A convenience change for users with an archive mailbox; there is nothing for administrators to configure."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "included"
  notes: "Nothing specific to this change is published. It applies to the online archive, which Exchange Online Plan 2, Microsoft 365 Business Premium, E3 and E5 and Office 365 E3 and E5 include; Exchange Online Plan 1, Business Basic, Business Standard, E1 and F3 need the Exchange Online Archiving add-on."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["outlook","new-outlook","archive-mailboxes","exchange","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap: Outlook: Remember your online archive folder pane state"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579188"
    kind: "roadmap"
  - title: "Exchange Online Archiving service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/exchange-online-archiving-service-description/exchange-online-archiving-service-description"
    kind: "learn"
  - title: "Enable archive mailboxes for Microsoft 365"
    url: "https://learn.microsoft.com/purview/enable-archive-mailboxes"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Map classic Outlook policies to new Outlook"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/map-classic-outlook-policies-to-new-outlook"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Release notes for Outlook for Windows (new) Targeted Release"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new-targeted"
    kind: "learn"
  - title: "Archive mailbox doesn't appear in Outlook or Outlook on the web"
    url: "https://learn.microsoft.com/troubleshoot/outlook/profiles-and-accounts/archive-mailbox-not-visible"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which mailboxes have an online archive, and so which users the change can affect"
    scope: "user"
    ui:
      surface: "Exchange admin center"
      path: "Recipients > Mailboxes > mailbox > Others > Mailbox archive > Manage mailbox archive > Mailbox archive"
      docs: "https://learn.microsoft.com/purview/enable-archive-mailboxes"
    api:
      kind: "powershell"
      call: "Enable-Mailbox -Identity <username> -Archive"
      docs: "https://learn.microsoft.com/purview/enable-archive-mailboxes"
    note: "Requires the Mail Recipients role. Existing control: it decides whether a mailbox has an archive, not how Outlook displays it."
  - governs: "Tenant or policy switch for remembering the archive's folder pane state"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap item describes this as client behaviour; no administrator setting for it is documented."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-27"
    note: "New briefing: Outlook on the web and new Outlook for Windows will remember the online archive's expanded or collapsed state, targeted for February CY2027."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 5 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: narrowed the mailbox-policy sentence to 'most' policies, and replaced assurances about access, archive contents and mail actions with what the roadmap item describes."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 61
  unconfirmed: 0
  contradicted: 4
  attempts: 2
  hash: "30d6569f85402685037d4b8f1cdb8bd4"
---

## What's changing

Outlook will remember whether a user's online archive is expanded or collapsed in the folder pane, and show it the same way when the user comes back. Microsoft Learn does not describe this change yet, so what follows about its behaviour is the roadmap item's description.

The roadmap item states that Outlook on the web and the new Outlook for Windows will each keep their own saved state, so a user who collapses the archive in one client may still see it expanded in the other. Microsoft's stated aim is to save users from expanding or collapsing the archive repeatedly as they move around the mailbox. Classic Outlook for Windows, Outlook for Mac and mobile are not named in the item.

The item is **In development**, with a General Availability target of **February CY2027**, for the Worldwide (Standard Multi-Tenant) cloud on the Desktop and Web platforms. Microsoft has not stated whether the behaviour is on for everyone on arrival or whether users or administrators can turn it off. At the time of writing (November 2026), the new Outlook for Windows Targeted Release notes do not list it.

## Why it matters

This is a user-interface convenience. The roadmap describes a display-state change and does not describe new access to archive content. For a service owner, the practical effect is fewer small complaints from users with large archives who find the archive folder tree reopening, or closing, every time they return to the mailbox.

Microsoft has not stated what happens on arrival. No source says anything beyond the folder pane's display will change, so there is nothing to configure ahead of the target date. The one thing worth knowing for the help desk is that the two clients keep separate states, so differing views between Outlook on the web and the new Outlook are expected, not a sync fault.

## Risk assessment

**Data exposure**
- The roadmap describes remembering whether the archive is expanded or collapsed; it describes no new access to archive content.

**Security & identity**
- The roadmap describes a display-state change and does not describe new access to archive content.

**Autonomy & actions**
- The roadmap describes remembering the archive's expanded or collapsed state; it describes no mail-processing action.

**Change & support**
- Because Outlook on the web and the new Outlook for Windows keep separate saved states, users who work in both may report that the archive looks different in each. Brief the help desk that this is the described behaviour.
- A user who cannot see the archive at all can be pointed to Microsoft's troubleshooting page for a missing archive mailbox.

## Cost and licensing

**Licence.** Microsoft has published nothing specific to this change. It applies to the online archive, which the [Exchange Online Archiving service description](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-archiving-service-description/exchange-online-archiving-service-description) says is already included in Exchange Online Plan 2, Microsoft 365 Business Premium, Microsoft 365 E3, Microsoft 365 E5, Microsoft 365 F5 Compliance, Office 365 A3, Office 365 A5, Office 365 E3 and Office 365 E5. For Exchange Online Plan 1, Exchange Online Kiosk, Microsoft 365 Business Basic, Microsoft 365 Business Standard, Office 365 E1, Office 365 A1, Office 365 G1, Office 365 F3 and Microsoft 365 F3, the same page lists Exchange Online Archiving as an add-on.

**Meter.** No meter is documented for this change at the time of writing (November 2026).

**Indirect costs.** A sentence in user or help desk communications, if you choose to mention it.

## Scope

- **Users:** people whose mailbox has an online archive and who use Outlook on the web or the new Outlook for Windows. Classic Outlook for Windows is not named in the roadmap item.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platforms:** Desktop and Web.
- **Release phase:** General Availability, targeted for February CY2027.
- **Prerequisite:** the mailbox must have an archive. Enabling one requires the Mail Recipients role in Exchange Online, which by default is assigned to the Recipient Management and Organization Management role groups.

## Governance guidance

### Before rollout
- Note the change for the help desk: the archive's expanded or collapsed state is kept separately in Outlook on the web and the new Outlook for Windows.

### At rollout
- Watch Message center and the new Outlook for Windows release notes for the announcement, and check whether it names a default or a user setting.

### After rollout
- Send users who report a missing archive, rather than one that stays collapsed, to the steps in Microsoft's troubleshooting page for archive mailboxes that do not appear in Outlook.
- Check in the Exchange admin center under Recipients > Mailboxes that the users who report archive problems have an archive enabled.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which mailboxes have an online archive, and so which users the change can affect</strong><br><small>User</small><br><small class="controls__note">Requires the Mail Recipients role. Existing control: it decides whether a mailbox has an archive, not how Outlook displays it.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Recipients › Mailboxes › mailbox › Others › Mailbox archive › Manage mailbox archive › Mailbox archive <a href="https://learn.microsoft.com/purview/enable-archive-mailboxes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Enable-Mailbox -Identity &lt;username&gt; -Archive</code> <a href="https://learn.microsoft.com/purview/enable-archive-mailboxes" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or policy switch for remembering the archive's folder pane state</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap item describes this as client behaviour; no administrator setting for it is documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no administrator setting for whether Outlook remembers the archive's folder pane state at the time of writing (November 2026); the roadmap item describes it as client behaviour.

The Set-OwaMailboxPolicy reference lists a ShowOnlineArchiveEnabled parameter, available only in Exchange Online, and Microsoft's page mapping classic Outlook policies to new Outlook points to it for mailbox archive settings. The reference carries no description of what the parameter does at the time of writing, so it is not listed as a control here. Most mailbox policies apply to both Outlook on the web and new Outlook for Windows, so those policies cannot be enabled on one client but not the other ([Policy Management in new Outlook for Windows](https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management)).

Enabling or disabling an archive needs the Mail Recipients role. Disabling an archive is not a way to manage this change: after 30 days the archive's contents are permanently deleted.

## Open questions

- Will remembering the archive's expanded or collapsed state be on for every user on arrival, or a setting each user turns on? Watch Message center and the new Outlook for Windows release notes.
- Will the remembered state also apply to shared mailboxes' online archives and to archives opened by delegates?
- Will classic Outlook for Windows or Outlook for Mac get the same behaviour, or only Outlook on the web and the new Outlook for Windows as the roadmap item names?
- Does the remembered state follow the user across devices in the new Outlook for Windows, or is it kept per device?

<!-- rationale
risk: Low. The roadmap describes a display-state change and does not describe new access to archive content.
cost: Low. Microsoft publishes no licence or meter for this change; the online archive itself comes with the Exchange Online plans that include archiving or the Exchange Online Archiving add-on. The only cost is a line in user communications.
impact: Low. Only users who have an online archive and use Outlook on the web or the new Outlook for Windows will notice, and only as the archive staying expanded or collapsed between visits.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.notes / licensing: Exchange Online Plan 1 users need the Exchange Online Archiving add-on for the online archive. | Found: | Feature | Exchange Server | Exchange Online Plan 1 | Exchange Online Plan 2 | Exchange Online Kiosk | | Archive mailboxes | 100 GB | 50 GB | 1.5 TB | Not available | | Fix: Remove Exchange Online Plan 1 from the licensing.notes list of plans that 'need' the add-on. Add: 'Exchange Online Plan 1 includes a 50 GB archive mailbox.' Cite https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#storage-limits. | Source: https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits
- [contradicted, blocker] front matter: licensing.notes / licensing: Microsoft 365 Business Basic users need the Exchange Online Archiving add-on for the online archive. | Found: | Feature | Microsoft 365 Business Basic and Standard | Microsoft 365 Business Premium ... | Archive mailboxes^7,8^ | 50 GB | 1.5 TB^1^ ... | Fix: Remove Business Basic from the licensing.notes list of plans that 'need' the add-on. Add: 'Microsoft 365 Business Basic includes a 50 GB archive mailbox.' Cite https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#storage-limits. | Source: https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits
- [contradicted, blocker] front matter: licensing.notes / licensing: Microsoft 365 Business Standard users need the Exchange Online Archiving add-on for the online archive. | Found: | Feature | Microsoft 365 Business Basic and Standard | Microsoft 365 Business Premium ... | Archive mailboxes^7,8^ | 50 GB | 1.5 TB^1^ ... | Fix: Remove Business Standard from the licensing.notes list of plans that 'need' the add-on. Add: 'Microsoft 365 Business Standard includes a 50 GB archive mailbox.' Cite https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#storage-limits. | Source: https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits
- [contradicted, blocker] front matter: licensing.notes / licensing: Office 365 E1 users need the Exchange Online Archiving add-on for the online archive. | Found: | Feature | Microsoft 365 Business Basic and Standard | Microsoft 365 Business Premium | Microsoft 365 Enterprise E3/E5 | Office 365 Enterprise E1 | ... | Archive mailboxes^7,8^ | 50 GB | 1.5 TB^1^ | 1.5 TB^1^ | 50 GB | ... | Fix: Remove E1 from the licensing.notes list of plans that 'need' the add-on. Add: 'Office 365 E1 includes a 50 GB archive mailbox.' Cite https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#storage-limits. | Source: https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits
-->
