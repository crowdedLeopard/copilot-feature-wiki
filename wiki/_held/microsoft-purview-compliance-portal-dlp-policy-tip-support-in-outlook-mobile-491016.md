---
title: "Outlook mobile: Purview DLP policy tips for iOS and Android (Worldwide)"
slug: "microsoft-purview-compliance-portal-dlp-policy-tip-support-in-outlook-mobile-491016"
roadmapId: 491016
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP policy tips for Outlook for Android and iOS. Learn says the tip UI is off by default; an admin enables it per user or group in the Microsoft 365 Apps admin center. This item covers Worldwide; GCC, GCC High and DoD are item 491017."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: "December CY2025"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Microsoft's Purview service description requires one of several E5-tier licences for each scoped user for advanced DLP policy tips in Outlook for Microsoft 365. The mobile page says 'the necessary licenses' without naming them."
audiences: ["compliance","security","m365-admin","end-user"]
tags: ["dlp","outlook","mobile","purview","cloud-policy","exchange"]
sources:
  - title: "Microsoft 365 Roadmap 491016"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=491016"
    kind: "roadmap"
  - title: "Data loss prevention policy tip reference for Outlook for Android, iOS, and macOS"
    url: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    kind: "learn"
  - title: "Data loss prevention policy tips reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-tips-reference"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Whether a DLP rule's policy tip also shows as a popup dialog (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    kind: "learn"
  - title: "Whether a DLP rule's policy tip also shows as a popup dialog (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Audit records of changes to Cloud Policy configurations (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-dlp-policy-tip-support-in-outlook-mobile","outlook-purview-dlp-wait-on-send-support-for-outlook-mobile-apps","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-mobile-apps","cloud-policy","auditing"]
controls:
  - governs: "Whether DLP policy tips appear in Outlook for Android, iOS and macOS, and for which users or groups"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "Default is Disabled. Roles per Learn: Office Apps Administrator, Security Administrator or Global Administrator. Steps to the policy are on the Cloud Policy overview page."
  - governs: "Whether a DLP rule's policy tip also shows as a popup dialog"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule name> -NotifyPolicyTipDisplayOption Dialog"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Path ends at the policy list; the rule's policy tip option is set inside the policy. The cmdlet runs in Security & Compliance PowerShell; the Dialog value is documented as exchange only."
  - governs: "Audit records of changes to Cloud Policy configurations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Learn says Cloud Policy supports Purview auditing, tracked when auditing is enabled. Needs the Audit Logs or View-Only Audit Logs role."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-25T23:13:41"
changes:
  - date: "2026-11-23"
    note: "New briefing for the Worldwide roadmap item: policy tip UI is off by default and enabled per user or group in the Microsoft 365 Apps admin center."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 53
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "b64125ff6d8e123be2483fe8d4c8bf4f"
---

## What's changing

Microsoft Purview data loss prevention (DLP) policy tips can be shown in Outlook for Android and iOS. Microsoft Learn describes the support as covering commonly used predicates and exceptions, advanced classifiers and override capabilities, and its page covers Android, iOS and macOS together. A policy tip is the warning a sender sees while composing an email that matches a DLP rule.

The tip UI is off by default. Learn says it is turned off 'to allow for administrators to test and perform user training prior to deployment'. To switch it on, an administrator enables the policy setting *Enable Purview Data Loss Prevention (DLP) policy tips in Outlook* in the Microsoft 365 Apps admin center, under Customization and Policy Management. Learn says policies can be targeted to individuals or groups.

On content, the mobile page says all custom and exact data match sensitive information types, sensitivity labels, retention labels and trainable classifiers are supported, and that all actions and information types for email communications are supported. Microsoft's separate policy tip support matrix describes the Outlook mobile row more narrowly, as 'Varies by version and license' for sensitive information types and 'Subset' for conditions and actions. The two pages differ, so confirm the conditions you rely on in a pilot. For Android and iOS the page also describes an oversharing dialog that shows popups for warning, override or block actions. The same page says Outlook for Android and iOS does not yet support DLP Wait-to-Send.

The roadmap record for item 491016 has status Launched, release phase General Availability, a preview date of December CY2025 and a target date of March CY2026, for Worldwide (Standard Multi-Tenant). It lists the platform as Web although the title and Learn describe Outlook mobile. Microsoft lists the feature separately for GCC, GCC High and DoD as item 491017 (Launched, target January CY2026); see the related briefing.

## Why it matters

This is a control to adopt, not a change that lands on users by itself: Learn documents the tip UI as off by default, so existing mobile users see nothing new until an administrator enables the setting. Plan the enablement, because a tip that appears on a phone is the first time many senders meet a DLP rule that has so far only acted on desktop or web mail.

The practical value is consistency: a rule that warns or asks for an override in Outlook on other clients can be seen on Android and iOS once the setting is on for that user. The gaps to plan around are the documented lack of Wait-to-Send on mobile and the difference between the mobile page and the support matrix on which conditions show tips.

## Risk assessment

**Data exposure**
- The mobile page describes a sender-facing display: a policy tip and, on Android and iOS, an oversharing dialog with warning, override or block actions. Where a rule allows an override, the dialog uses 'a noncustomizable set of justification options', so check which override reasons your users will see before enabling it.
- Tips depend on existing DLP rules; they do not replace enforcement. The rule's actions are set in the DLP policy (see the DLP rule row in the controls table).

**Security & identity**
- The Microsoft 365 Apps admin center setting is managed by the Cloud Policy roles Learn lists (Office Apps Administrator, Security Administrator, Global Administrator). Learn says targeted user objects must be in Microsoft Entra ID with a supported licence, so a user outside the targeted group or without a licence may not get the setting.

**Autonomy & actions**
- No change: the feature shows a tip to the person composing the message and acts through the DLP rule that already exists.

**Change & support**
- Expect questions from users who see a tip on mobile that they never saw before. Learn says the UI is off by default so that administrators can test and train users first.
- The mobile page says Outlook for Android and iOS does not yet support DLP Wait-to-Send, and the support matrix says supported conditions and SITs vary by version and licence. Test your real rules on a mobile pilot group.

## Cost and licensing

No separate price or meter for mobile policy tips is published on the pages read; the licence question is partly answered. Microsoft's Purview service description lists, for advanced DLP policy tip support in Outlook for Microsoft 365 (additional conditions, advanced classifiers, oversharing dialog), these licences for each scoped user: Microsoft 365 E5/A5/G5; Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW; Microsoft 365 E5/A5/F5/G5 Information Protection & Governance.

The mobile page says the oversharing dialog is available for Android and iOS users 'when used with the necessary licenses and configuration' and does not name them. Whether the Outlook for Microsoft 365 list applies unchanged to mobile is not stated on that page.

Cloud Policy, the service behind the Microsoft 365 Apps admin center setting, supports most Microsoft 365 subscription plans that include Microsoft 365 Apps; Learn tells readers to check their licensing documentation for specific requirements. The indirect cost is administrator time to pilot and user communication.

## Scope

Users: those you target with the policy setting in the Microsoft 365 Apps admin center, individually or by group; users and groups must be in Microsoft Entra ID, with a supported licence. Cloud Policy settings are available on Windows, macOS, iOS and Android, though not every setting is available on every operating system.

Roles: Cloud Policy can be managed by the Office Apps Administrator (recommended), Security Administrator or Global Administrator roles. Creating DLP rules needs membership of one of the role groups listed on Learn's DLP deployment page.

Clouds and platforms: the roadmap record lists Worldwide (Standard Multi-Tenant) and the platform Web. Item 491017 covers GCC, GCC High and DoD. Rollout: the record says Launched; Learn describes an administrator-enabled setting rather than a staged rollout.

## Governance guidance

### Before rollout
- Choose a pilot group of mobile Outlook users and create a Microsoft 365 Apps admin center policy configuration scoped to it (see the Cloud Policy row in the controls table). Admin roles: Office Apps Administrator, Security Administrator or Global Administrator.
- Review the DLP rules that cover Exchange email and note which conditions and actions they use, then compare them with the mobile page and the support matrix. The two pages differ on how many conditions show tips.
- Confirm which licences your pilot users hold against the Purview service description list, since the mobile page names no licence.
- Brief users that the tip and any override justification dialog will appear on their phone.

### At rollout
- Enable *Enable Purview Data Loss Prevention (DLP) policy tips in Outlook* for the pilot group only.
- Check how the tip and, on Android and iOS, the oversharing dialog behave for your real rules, including override choices.
- Record the gap that Wait-to-Send is not yet supported in Outlook for Android and iOS.

### After rollout
- Search the unified audit log for Cloud Policy configuration changes (see the audit row in the controls table) to see who changed the setting.
- Widen the targeted groups once pilot feedback is in, and keep the DLP rule's override and notification choices under review.
- Watch the Learn page and Message center for changes to the supported conditions and for Wait-to-Send.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP policy tips appear in Outlook for Android, iOS and macOS, and for which users or groups</strong><br><small>Group</small><br><small class="controls__note">Default is Disabled. Roles per Learn: Office Apps Administrator, Security Administrator or Global Administrator. Steps to the policy are on the Cloud Policy overview page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Configure Settings › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP rule's policy tip also shows as a popup dialog</strong><br><small>Tenant</small><br><small class="controls__note">Path ends at the policy list; the rule's policy tip option is set inside the policy. The cmdlet runs in Security &amp; Compliance PowerShell; the Dialog value is documented as exchange only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule name&gt; -NotifyPolicyTipDisplayOption Dialog</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit records of changes to Cloud Policy configurations</strong><br><small>Tenant</small><br><small class="controls__note">Learn says Cloud Policy supports Purview auditing, tracked when auditing is enabled. Needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The policy setting is the on/off control for the tip UI: Learn lists its default as Disabled and says policy tips are shown when it is Enabled. Targeting is by individuals or groups. Learn documents the admin centre steps; Microsoft Learn documents no API for Cloud Policy configurations at the time of writing (November 2026), so the table prints that side as not yet documented.

The DLP rule controls what a tip says and what a user can do; the Cloud Policy setting controls only whether the UI is shown. The DLP Purview row gives the portal start of the route to a rule; the notification and tip options sit inside the rule, and the oversharing page that names the dialog option is written for Outlook for Microsoft 365, not mobile.

## Open questions

- Which licences does Outlook for Android and iOS policy tip support need, and is the Outlook for Microsoft 365 list in the Purview service description the same for mobile? Watch the mobile policy tip page and the service description.
- Which DLP conditions and sensitive information types show tips on mobile: 'all' on the mobile page, or 'Subset' and 'Varies by version and license' in the support matrix?
- When will Outlook for Android and iOS support DLP Wait-to-Send? The mobile page points to the Microsoft 365 Roadmap.
- The roadmap record lists the platform as Web for a feature titled Outlook Mobile: is that an error in the record? Watch the roadmap item.

<!-- rationale
risk: Low. Microsoft Learn says the policy tip UI is turned off by default in Outlook for Android, iOS and macOS, so nothing is shown until an administrator enables the policy setting for chosen users or groups.
cost: Medium. Microsoft's Purview service description lists per-user licences (Microsoft 365 E5/A5/G5, Microsoft Purview Suite, Information Protection & Governance) for advanced policy tips in Outlook for Microsoft 365; the mobile page names none.
impact: Low. Learn documents the tip UI as off by default, so only users an administrator targets would notice it.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Where a rule allows an override, the dialog uses a noncustomizable set of justification options. | Found: Customized oversharing dialog You can choose to tailor your oversharing dialog with a customized title, body, and dynamic variables like %%MatchedRecipientsList%%, and justification options. | Fix: Replace the sentence with: "For the default oversharing dialog, when applicable, Learn describes a noncustomizable set of justification options to override the policy; check which override reasons your users will see before enabling it." The default-dialog qualification is stated at https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [unsupported, major] Why it matters / behaviour: A mobile tip will be the first encounter many senders have with a rule that has so far acted only on desktop or web mail. | Found: Searched: '"DLP policy" "first time" "mobile" policy tips composing sender'; opened the mobile policy-tip reference, policy-tip support matrix and oversharing setup page. None establishes senders' prior encounters or rules having acted only on desktop/web mail. | Fix: Replace the sentence with: "Plan the enablement and user communication before showing policy tips on mobile."
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: Medium is the supported cost rating for this mobile feature because advanced Outlook for Microsoft 365 tips require E5-tier licenses. | Found: cost: "medium" ... Whether the Outlook for Microsoft 365 list applies unchanged to mobile is not stated on that page. ... The indirect cost is administrator time to pilot and user communication. | Fix: Set cost to "low". Replace the cost rationale with: "Low. The known cost is administrator time to pilot and communicate the change; the mobile page does not name the required licences, and it does not state whether the advanced Outlook for Microsoft 365 licence list applies unchanged to mobile." Keep the qualified desktop license list in Cost and licensing. The schema requires low when licensing is unresolved and the known cost is administrator time.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: Microsoft Purview portal > Data loss prevention > Policies is the documented starting page for configuring a DLP rule's popup dialog. | Found: Sign in to the Microsoft Purview portal > Data loss prevention > Policies ... Select Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only). | Fix: Retain the accurate policy-list path, but replace its note's first sentence with: "Path stops at the policy list; the documented rule option is Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only), with User notifications set to On." See https://learn.microsoft.com/purview/dlp-osp-get-started. | Source: https://learn.microsoft.com/purview/dlp-osp-get-started
- [supported, minor] Governance controls / behaviour: The DLP rule determines policy-tip text and permitted user actions. | Found: For each rule in a DLP policy, you can configure policy tips to: ... You can use the default text (see the tables below) or enter custom text about your organization's specific policies. ... Allow the person to override the DLP policy. | Fix: Add https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips to sources for the description of DLP-rule notifications and policy-tip content. The UI on/off setting is already supported by the cited mobile reference. | Source: https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips
-->
