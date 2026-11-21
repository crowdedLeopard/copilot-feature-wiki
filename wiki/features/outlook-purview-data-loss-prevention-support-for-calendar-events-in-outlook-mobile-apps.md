---
title: "Outlook mobile: Purview Data Loss Prevention for calendar events on iOS and Android"
slug: "outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-mobile-apps"
roadmapId: 569716
topic: "modern-work"
products: ["Outlook"]
summary: "Microsoft plans Purview DLP support for calendar events in Outlook for iOS and Android. Compliance and Exchange admins should check how existing DLP policies would reach meeting invites. Default and licence are not yet stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for calendar events. The Learn page for Outlook for Microsoft 365 DLP policy tips points to Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions for licensing and names no calendar-specific licence."
audiences: ["compliance","security","m365-admin"]
tags: ["outlook","mobile","dlp","purview","exchange","microsoft-365-apps","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 569716"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569716"
    kind: "roadmap"
  - title: "Data loss prevention policy tip reference for Outlook for Android, iOS, and macOS"
    url: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    kind: "learn"
  - title: "Data loss prevention policy tip reference for Outlook for Microsoft 365"
    url: "https://learn.microsoft.com/purview/dlp-ol365-win32-policy-tips"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Use Microsoft Purview data loss prevention policies for non-Microsoft connected apps (preview)"
    url: "https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-for-mac","outlook-purview-dlp-wait-on-send-support-for-outlook-mobile-apps","outlook-purview-label-inheritance-from-email-attachment-for-ios-and-android"]
controls:
  - governs: "Whether Outlook for Android, iOS and macOS shows Purview DLP policy tips (documented for email)"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "General control for email; Microsoft has not confirmed it applies to calendar events. Default is Disabled. Can be targeted to individuals or groups."
  - governs: "Which mailboxes a DLP policy covers, and whether it simulates or enforces"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Policies > + Create policy"
      docs: "https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -ExchangeLocation All -Mode <PolicyMode>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "General control; the UI page documents non-Microsoft connected app policies (preview). The cmdlet runs in Security & Compliance PowerShell; -ExchangeLocation accepts only All. Not confirmed for calendar events."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-24T22:41:12"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item: Purview DLP for calendar events in Outlook for iOS and Android, In development with a September CY2026 target; default and licence not yet stated."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 52
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "dd19e4b4af8b72c993f3d57221222b19"
---

## What's changing

Microsoft plans to let Microsoft Purview Data Loss Prevention (DLP) policies apply to calendar events in Outlook for iOS and Android. The roadmap item states that organisations will be able to detect and help prevent the sharing of sensitive information in meeting subjects, descriptions and invite content, through policy tips, user remediation and policy enforcement.

Microsoft Learn does not describe this calendar capability yet, so what follows about its behaviour is the roadmap's description. Learn does document DLP for email in Outlook for Android and iOS. Its policy tip reference says "Policy Tip UI is turned off by default in Outlook for Android, iOS, and macOS" and that an administrator enables it with the policy "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" in the Microsoft 365 Apps admin center. Microsoft has not said whether the same switch, or the same default, applies to calendar events.

One Learn page points the other way for another client: the policy tip reference for Outlook for Microsoft 365 states "Policy tips aren't supported for meeting invitations." That page is about Outlook for Microsoft 365, not the mobile apps, and Microsoft has not said whether the limit applies to mobile or survives this change.

The roadmap item is In development, with a target of September CY2026 for General Availability on Android and iOS, in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. That target month has passed at the time of writing (November 2026) and the item is still In development. The date is Microsoft's target, not a commitment. The item has no preview date and no more-info link.

## Why it matters

Meeting subjects and invite text are free text that people write quickly, often on a phone, and send to many recipients, some outside the organisation. Learn describes the mobile DLP experience in terms of email: "All actions and information types for email communications are supported." This change is meant to extend DLP checking to calendar events on mobile.

Microsoft has not stated what happens on arrival: whether existing Exchange-scoped DLP policies begin to evaluate mobile calendar events automatically, or whether an admin must switch something on. Plan on no source saying existing behaviour changes, but treat the point as something to confirm. Any rule that blocks or asks for a justification could affect mobile users' invites, so test in simulation mode and tell mobile users what to expect before the feature reaches your tenant.

## Risk assessment

**Data exposure**
- The roadmap item names meeting subjects, descriptions and invite content as the content to be checked. Until Microsoft documents the behaviour, treat calendar events written in Outlook for iOS and Android as content your current email DLP rules may not cover.
- The Learn page for Outlook for Microsoft 365 states "Policy tips aren't supported for meeting invitations." Microsoft has not said whether that applies to mobile, so test with a real invite rather than relying on an email test.

**Security & identity**
- No change to sign-in or permissions is described. Creating DLP policies needs assigned permissions in Security & Compliance PowerShell, so confirm who holds them before changing rules that mobile users will see.

**Autonomy & actions**
- The roadmap item mentions "policy enforcement" without detail. Microsoft has not documented which DLP actions apply to calendar events on mobile, so a rule that blocks or requires a justification may behave differently for invites than for email.

**Change & support**
- Policy tips for Outlook for Android, iOS and macOS email are off by default, so an invite-specific tip may also be off until an admin enables it. Microsoft has not confirmed this for calendar events.
- Expect help-desk questions from mobile users who see a tip on a meeting that a desktop colleague does not, because Microsoft has not said when calendar support reaches each client.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for DLP on calendar events in Outlook for iOS and Android, and the roadmap item names none.

The Learn page for Outlook for Microsoft 365 DLP policy tips says "For information on licensing, see" Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions. The mobile policy tip reference says the oversharing dialog for email is available "when used with the necessary licenses and configuration". Neither page names a calendar-specific licence, and the second does not say which licences are necessary.

The cost the sources show is indirect: admin time to scope and test policies, and communication to mobile users. No Copilot Credits or pay-as-you-go meter is documented for this feature at the time of writing (November 2026).

## Scope

The roadmap item names Outlook, the Android and iOS platforms, and the clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with General Availability as the release phase. Whether it covers every Outlook for iOS and Android version is not stated.

The existing policy-tip switch is a Cloud Policy setting in the Microsoft 365 Apps admin center. The Cloud Policy overview says policies only apply to user objects and that policy settings are available for devices running Windows, macOS, iOS and Android, although not all settings are available for all operating systems. Learn says you can target the policy-tip policy to individuals or groups. Whether that targeting applies to calendar events is not confirmed.

## Governance guidance

### Before rollout
- Review which Exchange-scoped DLP policies and rules exist in the Microsoft Purview portal, and note which use block or override actions that would matter for meeting invites.
- Check the current state of the "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" policy in the Microsoft 365 Apps admin center, and choose a pilot group of mobile users.
- Draft a short note for mobile users and the help desk on what a policy tip on a meeting invite means.

### At rollout
- Watch Message center and the Microsoft 365 Roadmap item for the status change and any statement of default.
- Run policies in a simulation mode (TestWithNotifications or TestWithoutNotifications) for the pilot group before turning enforcement on.
- Test with a sample invite that contains a sensitive information type in Outlook for iOS and Android, once the feature reaches your tenant, and record what the user sees.

### After rollout
- Tune rules that produce false positives on meeting text before moving a policy from simulation to enforcement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Outlook for Android, iOS and macOS shows Purview DLP policy tips (documented for email)</strong><br><small>Group</small><br><small class="controls__note">General control for email; Microsoft has not confirmed it applies to calendar events. Default is Disabled. Can be targeted to individuals or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which mailboxes a DLP policy covers, and whether it simulates or enforces</strong><br><small>Tenant</small><br><small class="controls__note">General control; the UI page documents non-Microsoft connected app policies (preview). The cmdlet runs in Security &amp; Compliance PowerShell; -ExchangeLocation accepts only All. Not confirmed for calendar events.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Policies › + Create policy <a href="https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -ExchangeLocation All -Mode &lt;PolicyMode&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are general controls. Microsoft has not confirmed that either governs calendar events in Outlook for iOS and Android, because no Learn page describes the feature yet.

The policy-tip switch is documented for email in Outlook for Android, iOS and macOS. The Cloud Policy overview lists Office Apps Administrator (recommended), Security Administrator and Global Administrator as built-in roles that can access and manage Cloud Policy. Microsoft Learn documents no API for Microsoft 365 Apps admin center policies at the time of writing (November 2026).

The DLP policy row covers which locations a policy includes and its mode: Enable, Disable, TestWithNotifications or TestWithoutNotifications. Using the cmdlet needs permissions assigned in Security & Compliance PowerShell.

## Open questions

- Is DLP evaluation of calendar events in Outlook for iOS and Android on by default when the feature arrives, or must an admin enable it? Watch Message center and the roadmap item.
- Does the Microsoft 365 Apps admin center policy "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" control tips for calendar events, or is there a separate setting?
- Which DLP conditions and actions will apply to meeting subjects, descriptions and invite content, and does the Learn statement that policy tips aren't supported for meeting invitations in Outlook for Microsoft 365 change?
- Which licence do users need for calendar-event DLP, and will it differ from email DLP?
- The September CY2026 target has passed with the item still In development: what is the new target?

<!-- rationale
risk: Medium. Existing DLP policies could start to warn or block mobile users who write meeting subjects and invites, and Microsoft has not stated whether that happens by default, so rated on today's behaviour continuing.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence or meter for calendar-event DLP on mobile.
impact: Medium. Outlook for iOS and Android users who write meeting invites within a DLP policy's scope would notice policy tips and any enforcement; the roadmap item names no other audience.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; summary; Cost and licensing; rationale: cost / licensing: Licensing is unknown because Microsoft has not published a calendar-specific requirement. | Found: Which licenses provide the rights for a user to benefit from the service? ... Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2 | Fix: Set licensing.model to included and distinguish the product-level entitlement from the narrower gap: 'Microsoft's Purview service description lists Microsoft 365 E3 among the licences providing rights to DLP for Exchange Online. A requirement specific to calendar-event DLP on Outlook mobile is not yet published.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. In the summary, replace 'Default and licence are not yet stated' with 'Default and calendar-specific licensing are not yet stated'. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The policy-tip setting is reached through Microsoft 365 Apps admin center > Customization > Policy Management > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook. | Found: Under Customization, select Policy Management. ... Open the configuration details of the policy configuration you want to change by selecting it. ... navigate to the Policies section | Fix: The automatic missing-word finding is not a setting-name error: the mobile reference contains the exact label. Complete the existing-configuration route as 'Customization > Policy Management > policy configuration > Policies > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook'. Keep the mobile reference as docs; the already-cited Cloud Policy overview documents the intervening configuration and Policies section. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] controls[1].ui; controls[1].note; Governance controls table / admin-path: Microsoft Purview portal > Solutions > Data Loss Prevention > Policies > + Create policy is the entry point for setting a DLP policy's mailbox scope and mode. | Found: Go to Solutions > Data Loss Prevention > Policies > + Create policy. | Fix: The printed steps correctly reach the policy-creation wizard, so this is an early-stopping path, not a wrong route. Replace controls[1].ui.docs with https://learn.microsoft.com/purview/dlp-create-policy-cc-email and cite it: that page documents the Exchange email location and Run the policy in simulation mode, whereas the existing reference is expressly for non-Microsoft app policies that cannot include Exchange or simulate. Keep the printed entry path and replace the note with 'Starts policy creation; select Exchange email for the location and choose the policy mode later in the wizard. The cmdlet runs in Security & Compliance PowerShell; -ExchangeLocation accepts only All. Calendar-specific behavior is not yet documented.' | Source: https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist asks readers to review block or override rule actions and tune rules, but no controls row covers rule conditions or actions. | Found: Review which Exchange-scoped DLP policies and rules exist ... note which use block or override actions ... Tune rules that produce false positives ... [The DLP row governs] Which mailboxes a DLP policy covers, and whether it simulates or enforces | Fix: Narrow the first Before rollout bullet to 'Review which Exchange-scoped DLP policies exist in the Microsoft Purview portal and note their scope and mode.' Remove the After rollout bullet telling readers to tune rules: rule conditions and actions have no corresponding controls row. Do not add a new row as part of this correction.
-->
