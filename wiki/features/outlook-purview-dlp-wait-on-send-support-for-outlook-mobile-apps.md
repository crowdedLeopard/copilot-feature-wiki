---
title: "Outlook mobile: Purview DLP wait-on-send for iOS and Android"
slug: "outlook-purview-dlp-wait-on-send-support-for-outlook-mobile-apps"
roadmapId: 569718
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for iOS and Android is planned to hold a message until Microsoft Purview DLP has evaluated it, with a configurable wait. Targeted for November CY2026. Controls for mobile are not yet documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the mobile feature. The mobile oversharing dialog is documented as available \"when used with the necessary licenses and configuration\"; the desktop oversharing pop-ups page names Microsoft 365 E5."
audiences: ["m365-admin","compliance","security"]
tags: ["outlook","mobile","dlp","purview","exchange","powershell","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 569718"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569718"
    kind: "roadmap"
  - title: "Data loss prevention policy tip reference for Outlook for Android, iOS, and macOS"
    url: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    kind: "learn"
  - title: "Data loss prevention policy tip reference for new Outlook for Windows"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference-new-outlook"
    kind: "learn"
  - title: "Get started with oversharing pop-ups in Outlook"
    url: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    kind: "learn"
  - title: "Set-OrganizationConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Outlook waits for DLP evaluation before sending, and for how long (Exchange organisation parameters)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-OrganizationConfig -DLPWaitOnSendEnabled $true -DLPWaitOnSendTimeout <seconds>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    note: "Documented for new Outlook for Windows; Microsoft has not confirmed it applies to Outlook for iOS and Android. Needs Exchange permissions for the parameters."
  - governs: "Whether DLP policy tips show in Outlook for Android, iOS and macOS"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "Policy name: Enable Purview Data Loss Prevention (DLP) policy tips in Outlook. Not documented as the control for wait-on-send. Learn says policies can be targeted to individuals or groups."
  - governs: "Which messages a DLP rule evaluates, and whether it shows a dialog before send"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -NotifyUser Owner -NotifyPolicyTipDisplayOption Dialog -ContentContainsSensitiveInformation <label conditions>"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    note: "General control from the oversharing pop-ups page, whose example is Outlook for Microsoft 365. The mobile page says the dialog is enabled in a DLP rule."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-17"
    note: "First briefing for this roadmap item."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the new Outlook timeout behaviour (1 to 9998 seconds allows override, 9999 blocks send until evaluation completes) and added the Purview service description licences."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d9633740ebdf9a35fde9dde829859a11"
---

## What's changing

Outlook for iOS and Android is planned to support Microsoft Purview Data Loss Prevention (DLP) wait-on-send policies. The roadmap item says organisations can require a DLP evaluation before an email is sent and configure how long users must wait for the evaluation to complete.

Microsoft Learn does not describe the mobile behaviour yet, so what follows about it is the roadmap's description. The Learn page for Outlook for Android, iOS and macOS DLP policy tips says that Outlook for Android and iOS "doesn't yet support" DLP Wait-to-Send and points to the Microsoft 365 Roadmap for announcements, which agrees with the roadmap status.

For comparison, the Learn page for new Outlook for Windows documents the same capability as controlled through two Exchange organisation parameters: `DLPWaitOnSendEnabled` (default false) and `DLPWaitOnSendTimeout` (range 0–10,000 seconds on that page, default 9999), which sets how long Outlook waits for evaluation before offering an override. The Set-OrganizationConfig reference instead gives a valid range of 0 to 9999 seconds. For new Outlook, a timeout of 1 to 9998 seconds permits an override after that wait; 0 shows Send Anyway immediately; 9999 prevents sending until evaluation completes. That page describes new Outlook, not the mobile apps; Microsoft has not said that the mobile apps will read the same settings or behave the same way.

The roadmap item is In development, with a target of November CY2026 for General Availability on Android and iOS, in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The date is Microsoft's target, not a commitment.

## Why it matters

Today the mobile apps are the gap in pre-send DLP checking: Microsoft documents that Outlook for Android and iOS does not yet support DLP Wait-to-Send. Once the roadmap item ships, administrators who already use wait-on-send for desktop clients will want the same rule to cover mobile, and the wait length becomes a user-experience decision to make, because a long wait on a phone is more noticeable than on a desktop.

Microsoft has not stated what happens on arrival, so plan on no source saying existing behaviour changes. Settle who owns the decision and what you will tell users before the feature appears in your tenant.

## Risk assessment

**Data exposure**
- Until the feature ships, Microsoft documents that Outlook for Android and iOS does not yet support DLP Wait-to-Send, so a message sent from mobile is not documented as being held for DLP evaluation first. Any DLP rule that relies on evaluation before send is therefore not a guarantee for mobile senders.
- For new Outlook, a timeout of 1 to 9998 seconds permits an override after that wait; 0 shows Send Anyway immediately; 9999 prevents sending until evaluation completes. Whether the mobile apps offer an override, and how any timeout value behaves there, is not documented.

**Security & identity**
- No change to identity or sign-in is described. Policy creation sits with the Purview roles; confirm who in your organisation holds them before changing DLP rules that mobile users will see.

**Autonomy & actions**
- No change: the roadmap describes a hold on send for evaluation, not an automated action by Outlook.

**Change & support**
- Expect help-desk questions about delayed sends and the override prompt once the setting is enabled. Evaluation time can vary, and the desktop page notes it depends on factors such as internet speed, content length and the number of policies, which matters on mobile networks; that page covers Outlook for Microsoft 365, so treat the point as something to test on mobile.
- The policy tip UI is documented as turned off by default in Outlook for Android, iOS and macOS, so check the state of that policy before communicating anything to users.

## Cost and licensing

Microsoft has not published a licence or meter for DLP wait-on-send in Outlook for iOS and Android. The roadmap item names none.

Two related pages give partial guidance. The Learn page for Outlook for Android, iOS and macOS DLP policy tips says the oversharing dialog is available "when used with the necessary licenses and configuration", and its licensing section names no licence. The page on oversharing pop-ups in Outlook says they require a Microsoft 365 E5 subscription along with a version of Outlook that supports them; that page's example is Outlook for Microsoft 365, so confirm whether the same condition applies to the mobile wait-on-send feature. The Microsoft Purview service description lists additional qualifying licences for advanced Outlook for Microsoft 365 policy tips, including the oversharing dialog: Microsoft 365 E5/A5/G5; Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW; and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance.

The cost the sources show is indirect: admin time to configure the DLP rule and the wait, and communication to users.

## Scope

The roadmap item lists Outlook on Android and iOS, with clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and General Availability as the release phase. The target is November CY2026 and the status is In development.

Prerequisites are not documented for the mobile feature. The Learn pages describe DLP policy rules that apply to Exchange email, created in the Microsoft Purview portal by members of the role groups the oversharing pop-ups page lists (for example Compliance administrator or Security administrator). Rollout mechanics, release channels and the default are not stated.

## Governance guidance

### Before rollout
- Inventory the Purview DLP rules that cover Exchange email and note which use the dialog-before-send option, so you know what mobile users will meet when wait-on-send arrives.
- Check whether the Microsoft 365 Apps admin center policy that shows DLP policy tips in Outlook is enabled for the mobile users you plan to include; Learn documents it as disabled by default.
- Decide, with the compliance owner, a wait length and who may override once Microsoft documents how the mobile apps behave.
- Plan a pilot group of mobile users and prepare a short note for the help desk on delayed sends.

### At rollout
- Watch Message center and the roadmap item for the mobile documentation and for the controls that apply to Outlook for iOS and Android.
- Once Microsoft confirms the Exchange organisation parameters apply to mobile, set `DLPWaitOnSendEnabled` and `DLPWaitOnSendTimeout` with `Set-OrganizationConfig` and test a send from iOS and Android.
- Test a message that matches a block rule and one that matches a warn or override rule on a mobile network.

### After rollout
- Review help-desk tickets about slow or held sends and adjust the timeout.
- Re-read the Outlook for Android, iOS and macOS DLP page, which at the time of writing (November 2026) says wait-on-send is not yet supported, and update your internal guidance when it changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Outlook waits for DLP evaluation before sending, and for how long (Exchange organisation parameters)</strong><br><small>Tenant</small><br><small class="controls__note">Documented for new Outlook for Windows; Microsoft has not confirmed it applies to Outlook for iOS and Android. Needs Exchange permissions for the parameters.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -DLPWaitOnSendEnabled $true -DLPWaitOnSendTimeout &lt;seconds&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether DLP policy tips show in Outlook for Android, iOS and macOS</strong><br><small>Group</small><br><small class="controls__note">Policy name: Enable Purview Data Loss Prevention (DLP) policy tips in Outlook. Not documented as the control for wait-on-send. Learn says policies can be targeted to individuals or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which messages a DLP rule evaluates, and whether it shows a dialog before send</strong><br><small>Tenant</small><br><small class="controls__note">General control from the oversharing pop-ups page, whose example is Outlook for Microsoft 365. The mobile page says the dialog is enabled in a DLP rule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -NotifyUser Owner -NotifyPolicyTipDisplayOption Dialog -ContentContainsSensitiveInformation &lt;label conditions&gt;</code> <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents the Exchange organisation parameters for new Outlook for Windows and says that wait-to-send there is "controlled solely" through them. No page documents the same parameters for the mobile apps. The mobile page links to Set-OrganizationConfig for Exchange mailbox parameters, but does not confirm it applies to the mobile feature, so treat that row as a general control until Microsoft confirms it.

The Microsoft 365 Apps admin center policy governs whether DLP policy tips show in Outlook for Android, iOS and macOS. It is not documented as the switch for wait-on-send. Role requirements for the Exchange parameters are set by Exchange permissions; Learn tells administrators to find the permissions required for each parameter.

## Open questions

- Will Outlook for iOS and Android read `DLPWaitOnSendEnabled` and `DLPWaitOnSendTimeout` from Exchange Online, or use a different control? Watch the Outlook for Android, iOS and macOS DLP page and Message center.
- Is the feature on or off when it arrives, and is there a per-user or per-group way to scope it?
- What licence do users need for mobile wait-on-send, and does it match the Microsoft 365 E5 condition on the desktop oversharing pop-ups page?
- What does the user see while evaluation runs, and is there a "Send anyway" override on mobile when the timeout passes?
- Does availability in GCC, GCC High and DoD follow the same timeline as Worldwide?

<!-- rationale
risk: Medium. Learn says Outlook for Android and iOS does not yet support DLP wait-on-send, so mobile sends are not held for evaluation today; the default for the new support is not stated.
cost: Low. The only cost the sources show is admin time to configure and communicate the wait; Microsoft has not published a licence or meter for the mobile feature.
impact: Medium. Users who send mail from Outlook for iOS and Android under a DLP policy would notice a wait or override prompt if the feature is enabled; Microsoft has not said whether it starts enabled.
-->
