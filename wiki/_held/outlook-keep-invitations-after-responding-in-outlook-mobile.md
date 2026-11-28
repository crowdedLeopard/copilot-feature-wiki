---
title: "Outlook mobile: users choose whether meeting invitations stay in the inbox after they respond"
slug: "outlook-keep-invitations-after-responding-in-outlook-mobile"
roadmapId: 559794
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for iOS and Android gets a personal \"Delete Invite After RSVP\" setting under Settings > Calendar. It is a per-user choice; Microsoft documents no admin default or lock for it. No admin action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Android","iOS"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Covered by the licence Outlook for iOS and Android needs: commercial users require an Office 365 or Microsoft 365 subscription that includes the Office desktop apps, with E1, F1, A1, Business Basic and Exchange Online-only plans limited to screens of 10.1 inches or less."
audiences: ["m365-admin","end-user"]
tags: ["outlook","mobile","ios","exchange","personal-settings","user-experience","gcc","gcc-high"]
sources:
  - title: "Outlook: Keep Invitations After Responding in Outlook Mobile"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559794"
    kind: "roadmap"
  - title: "Outlook for iOS and Android in Exchange Online: FAQ"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq"
    kind: "learn"
  - title: "Deploying Outlook for iOS and Android app configuration settings in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-configuration-with-microsoft-intune"
    kind: "learn"
  - title: "Set-MailboxCalendarConfiguration (ExchangePowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxcalendarconfiguration"
    kind: "learn"
videos: []
related: ["outlook-duplicate-events-in-outlook-mobile-apps","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-mobile-apps","outlook-copilot-chat-sheet-ux-update-for-mobile"]
controls:
  - governs: "Admin default or lock for the Delete Invite After RSVP toggle in Outlook for iOS and Android"
    scope: "user"
    ui: null
    api: null
    note: "The general app configuration settings for Outlook for iOS and Android list no setting for meeting invitations at the time of writing (November 2026)."
  - governs: "Mailbox calendar parameter DeleteMeetingRequestOnRespond (Microsoft publishes no description of it)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-MailboxCalendarConfiguration -Identity <MailboxIdParameter> -DeleteMeetingRequestOnRespond $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxcalendarconfiguration"
    note: "Exchange Online only; needs Organization Management or Recipient Management. Not documented whether Outlook mobile's toggle reads or writes this parameter."
confidence: "low"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-28"
    note: "New briefing: Outlook mobile Delete Invite After RSVP toggle, its licensing and the absence of an admin control."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 39 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 34
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "5a4ab71064f1efb9fe37011f1ec013df"
---

## What's changing

Outlook for iOS and Android gains a setting that lets each user decide whether a meeting invitation is removed from their inbox once they have responded to it. The roadmap item says users go to settings, then calendar, and turn **Delete Invite After RSVP** off or on.

Microsoft Learn does not describe this feature yet, so what is said here about its behaviour is the roadmap's description. Microsoft has not stated whether the toggle starts on or off, so it is not known whether existing mobile users will see a change in how invitations are handled before they touch it.

The roadmap item lists the feature as Launched and generally available on Android and iOS, with a target of May CY2026, for Worldwide (Standard Multi-Tenant), GCC and GCC High.

## Why it matters

For a service owner this is a user-comfort change, not a governance one. The roadmap describes a choice each user makes in the app, and Microsoft documents no admin setting that presets or locks it for Outlook mobile. Expect occasional helpdesk questions from users who find accepted invitations have gone from their inbox, or who now see them stay; the answer is this toggle.

Microsoft has not stated what the toggle is set to on arrival. No source says existing behaviour changes for users who leave it alone, so there is nothing to configure before or after it lands.

## Risk assessment

**Data exposure**
- No change: the setting decides whether the user's own invitation emails stay in their inbox and reaches no new data.

**Security & identity**
- No change: no new sign-in, permission or connection is described.

**Autonomy & actions**
- With the toggle on, the app removes the invitation from the inbox after the user responds, according to the roadmap description. Microsoft has not described whether the email is moved to Deleted Items or removed in another way, which matters to users who rely on the invitation email as a record.

**Change & support**
- Support staff will see questions about invitations disappearing or staying. Exchange Online has a mailbox calendar parameter named DeleteMeetingRequestOnRespond, but Microsoft publishes no description of it and does not say whether Outlook mobile's toggle reads or writes it, so do not assume that changing one changes the other.

## Cost and licensing

The licence is the one Outlook for iOS and Android already needs. The Outlook for iOS and Android FAQ on Microsoft Learn states that commercial users require an Office 365 or Microsoft 365 subscription that includes the Office desktop applications (Microsoft 365 Apps for Business, Microsoft 365 Business Standard, Microsoft 365 Apps for enterprise, Office 365 Enterprise E3 or E5, or their Government and Education versions). Users with Office 365 Enterprise E1, Office 365 F1, Office 365 A1, Microsoft 365 Business Basic, or only an Exchange Online licence may use the app on devices with integrated screens of 10.1 inches diagonally or less.

No meter applies, and Microsoft publishes nothing about this setting that is licensed or charged separately. The only indirect cost is helpdesk time answering questions about the toggle.

## Scope

- **Users:** anyone signed in to Outlook for iOS or Android with a work account, within the app licensing described above.
- **Platforms:** Android and iOS, as the roadmap record lists them.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC and GCC High, as the roadmap record lists them. DoD is not listed on the roadmap item.
- **Roles:** the setting is changed by each user in the app. Administrators in the Organization Management or Recipient Management role groups can set mailbox calendar settings with Set-MailboxCalendarConfiguration, but whether that reaches this toggle is not documented.
- **Rollout:** the roadmap record gives status Launched, release phase General Availability, target May CY2026.

## Governance guidance

### Before rollout
- Add a short helpdesk note explaining the Delete Invite After RSVP toggle under Settings > Calendar in Outlook for iOS and Android.

### At rollout
- Check on a test device whether the toggle starts on or off, so helpdesk guidance matches what users see.
- Tell users who keep invitation emails as a record of meetings where the toggle is.

### After rollout
- Route complaints about invitations vanishing or staying in the inbox to the toggle before opening an Exchange Online case.
- Avoid running Set-MailboxCalendarConfiguration -DeleteMeetingRequestOnRespond to change mobile behaviour until Microsoft documents what the parameter does and whether Outlook mobile follows it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin default or lock for the Delete Invite After RSVP toggle in Outlook for iOS and Android</strong><br><small>User</small><br><small class="controls__note">The general app configuration settings for Outlook for iOS and Android list no setting for meeting invitations at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Mailbox calendar parameter DeleteMeetingRequestOnRespond (Microsoft publishes no description of it)</strong><br><small>User</small><br><small class="controls__note">Exchange Online only; needs Organization Management or Recipient Management. Not documented whether Outlook mobile's toggle reads or writes this parameter.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MailboxCalendarConfiguration -Identity &lt;MailboxIdParameter&gt; -DeleteMeetingRequestOnRespond $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxcalendarconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin control for Outlook mobile's Delete Invite After RSVP toggle at the time of writing (November 2026). The general app configuration settings that Outlook for iOS and Android accepts from Intune or another UEM (unified endpoint management) tool cover items such as Focused Inbox, Sync Calendars, Block external images and Default Font, and none of them concerns meeting invitations.

The Exchange Online parameter DeleteMeetingRequestOnRespond is listed on the Set-MailboxCalendarConfiguration reference as a Boolean available only in the cloud-based service, with no description. The cmdlet page says the cmdlet primarily lets users manage their own calendar settings in Outlook on the web Options, and that members of the Organization Management or Recipient Management role groups can configure those settings for users. Treat it as a per-mailbox Outlook on the web setting until Microsoft says otherwise.

## Open questions

- Does the Delete Invite After RSVP toggle start on or off for existing Outlook mobile users? Watch the Outlook for iOS and Android documentation on Microsoft Learn.
- Is the mobile toggle the same mailbox setting as DeleteMeetingRequestOnRespond, so that a change in Outlook on the web or by Set-MailboxCalendarConfiguration carries across to the app? Watch the cmdlet reference for a description of the parameter.
- Will Microsoft add an app configuration key so organisations can preset or lock the toggle on managed devices? Watch the Outlook for iOS and Android app configuration page.
- When the toggle is on, is the invitation moved to Deleted Items or removed another way?

<!-- rationale
risk: Low. The setting only decides whether a user's own invitation emails stay in their inbox after they respond; it reaches no new data and acts on nothing beyond the user's mailbox.
cost: None. It is a setting inside Outlook for iOS and Android, which commercial users already need a qualifying Microsoft 365 or Office 365 subscription to use; nothing separate is published for it.
impact: Low. Only mobile users who open Settings and change the toggle notice anything; Microsoft has not stated the toggle's starting value.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState / consistency: The defaultState value user-opt-in accurately describes this new control's state on arrival. | Found: defaultState: "user-opt-in"; "Microsoft has not stated whether the toggle starts on or off, so it is not known whether existing mobile users will see a change ... before they touch it." | Fix: Set defaultState to "unknown". For a feature that is itself a new control, the standard requires unknown when its initial state is not stated; the existence of a personal choice and absence of an admin switch do not establish its initial behaviour.
- [unsupported, blocker] Cost and licensing / cost: No meter applies. | Found: Searched: Outlook mobile Delete Invite After RSVP licensing pricing meter charge. Opened Outlook mobile FAQ and app configuration; neither says the feature is unmetered. Absence of a published feature meter does not establish that none applies. | Fix: Replace "No meter applies" with "Microsoft publishes no meter specific to this setting at the time of writing (November 2026)".
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: The feature reaches no new data and acts on nothing beyond the user's mailbox. | Found: Searched: "Delete Invite After RSVP" "Outlook". Opened Outlook mobile FAQ, app configuration and cmdlet reference. The roadmap describes inbox invitation handling but does not establish exhaustive data access or processing boundaries for this feature. | Fix: Replace the Data exposure bullet with "The roadmap describes a control over invitation emails in the user's inbox." Replace the risk rationale with "Low. The documented change is a personal control over whether invitation emails stay in the inbox after a response."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / default: Only mobile users who open Settings and change the toggle notice anything. | Found: Searched: Outlook mobile "Delete Invite After RSVP" default on off Deleted Items; "Delete Invite After RSVP" "Outlook". Opened Outlook mobile FAQ, app configuration and cmdlet reference; no source establishes unchanged behaviour for users who do nothing. | Fix: Replace the impact rationale with: "Low. This is a personal invitation-handling control in Outlook mobile; Microsoft has not stated its starting value or whether existing behaviour changes for users who leave it alone."
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: Every control the checklist tells readers to check appears in the controls table. | Found: "Check on a test device whether the toggle starts on or off"; the table contains "Admin default or lock" and "Mailbox calendar parameter DeleteMeetingRequestOnRespond", not the personal Delete Invite After RSVP control. | Fix: Remove the checklist bullet "Check on a test device whether the toggle starts on or off, so helpdesk guidance matches what users see." It asks readers to check a personal control not represented in the table; do not add a control row as part of this correction.
-->
