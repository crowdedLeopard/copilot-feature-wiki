---
title: "Outlook for Mac: Purview DLP wait-on-send support"
slug: "outlook-purview-dlp-wait-on-send-support-for-mac"
roadmapId: 569719
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for Mac is planned to hold an email for a Purview DLP check before it is sent, with a configurable wait. Mac controls are not yet documented; plan a pilot and watch Learn for the settings."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for Outlook for Mac. Learn says oversharing pop-ups require a Microsoft 365 E5 subscription; the Microsoft Purview service description lists further plans for advanced Outlook policy tips but does not specify Mac wait on send."
audiences: ["m365-admin","compliance","security","change-adoption"]
tags: ["outlook","purview","dlp","exchange","powershell","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 569719"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569719"
    kind: "roadmap"
  - title: "Get started with oversharing pop-ups in Outlook"
    url: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    kind: "learn"
  - title: "Data loss prevention policy tip reference for Outlook for Android, iOS, and macOS"
    url: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    kind: "learn"
  - title: "Data loss prevention policy tip reference for new Outlook for Windows"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference-new-outlook"
    kind: "learn"
  - title: "Data loss prevention policy tip reference for Outlook for Microsoft 365"
    url: "https://learn.microsoft.com/purview/dlp-ol365-win32-policy-tips"
    kind: "learn"
  - title: "Set-OrganizationConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi"]
controls:
  - governs: "Wait-on-send switch and timeout (Exchange Online organisation setting)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-OrganizationConfig -DLPWaitOnSendEnabled $true -DLPWaitOnSendTimeout <seconds>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    note: "Documented for new Outlook for Windows. General control: Microsoft has not confirmed it applies to Outlook for Mac."
  - governs: "Whether DLP policy tips appear in Outlook for Mac"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "Policy 'Enable Purview Data Loss Prevention (DLP) policy tips in Outlook'; can be targeted to individuals or groups. It governs policy tips, not wait on send."
  - governs: "Which messages a DLP rule evaluates and the pre-send dialog"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <name> -Policy <policy> -NotifyUser Owner -NotifyPolicyTipDisplayOption \"Dialog\" -ContentContainsSensitiveInformation <label condition> -ExceptIfRecipientDomainIs <trusted domains>"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    note: "Existing Exchange-location DLP rules. Learn describes the dialog option for Outlook for Microsoft 365; Mac support is not confirmed. The call abbreviates Learn's warn-rule example, given in full below the table."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap plan for Outlook for Mac wait on send, with the related settings Learn documents for other clients."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the wait-on-send timeout and Send anyway description for Outlook for Microsoft 365, and replaced the incomplete New-DlpComplianceRule example with the full warn-rule example from Learn."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the New-DlpComplianceRule call to the full documented warn-rule example, including -NotifyUser Owner and the trusted-domain exception."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the New-DlpComplianceRule call to Learn's full warn-rule example (label and trusted-domain parameters included), and added the Purview service description's licence list for advanced Outlook policy tips."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0737861ab09f3cfeb1e2537b38786d6c"
---

## What's changing

Outlook for Mac is planned to support Microsoft Purview Data Loss Prevention (DLP) wait-on-send policies. The roadmap item states that organisations can require a DLP evaluation before an email is sent and configure how long users must wait for that evaluation to complete.

Microsoft Learn does not describe this feature for Outlook for Mac yet, so what follows about Mac behaviour is the roadmap's description. Learn does document wait on send for other Outlook clients. For Outlook for Microsoft 365 it is set with the *dlpwaitonsendtimeout* registry key or the Group Policy setting **Specify wait time to evaluate sensitive content**. For new Outlook for Windows it is set with the Exchange Online parameters `DLPWaitOnSendEnabled` and `DLPWaitOnSendTimeout`. The Learn page on policy tips for Outlook for Android, iOS and macOS names Android and iOS, not macOS, in its wait on send section, where it says wait on send is not yet supported.

The roadmap item is In development, with a target date of November CY2026 (a target, not a commitment), the General Availability release phase, the Mac platform, and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds listed. The roadmap item gives no preview date and no "more info" link, and the record does not say whether the feature is on or off by default.

## Why it matters

If Microsoft ships this as described, Outlook for Mac users covered by a DLP policy can be held at the point of sending until the policy has evaluated the message, rather than the check running after Send. For a service owner that closes a gap between Mac and the clients where wait on send is already documented, but only if the policy and the Mac setting are configured and tested first.

Microsoft has not stated what happens on arrival, so do not assume either that nothing changes or that the check starts automatically. The practical view: treat the November CY2026 target as the point at which to confirm the Mac setting and licensing, and pilot with a small group of Mac users before widening it, because the wait length is what users will notice.

## Risk assessment

**Data exposure**

- Where wait on send is not enabled, Learn says for Outlook for Microsoft 365 that the message is sent immediately and the DLP service evaluates it and applies the policy actions afterwards. Microsoft has not said whether Outlook for Mac behaves the same, so confirm this for Mac before relying on pre-send blocking.
- The control that decides whether a pre-send check happens on Mac is not yet documented (see the controls table).

**Security & identity**

- On other clients, some timeout configurations allow a bypass. For Outlook for Microsoft 365, a configured wait of 0 to 9999 seconds offers **Send anyway** if evaluation has not completed; values above 9999 are replaced with 10000 and hold the message until evaluation completes without an override. For new Outlook for Windows, a timeout of 0 shows **Send Anyway** immediately. Whether Mac offers the same bypass, and how the timeout is set, is not yet documented.
- DLP rules that block still apply: Learn says that if the block rules in the policy are met, the message is blocked regardless of how **Policy tips** is configured.

**Autonomy & actions**

- No change: the user still chooses to send the message; the feature adds an evaluation step before it leaves.

**Change & support**

- Expect Mac users to meet a wait or dialog on Send. Learn notes for Outlook for Microsoft 365 that evaluation time varies with internet speed, content length and the number of policies, so some users see the wait more often than others.
- Policy tips are off by default in Outlook for Android, iOS and macOS until an admin enables the Microsoft 365 Apps admin center policy, so Mac users may not see DLP prompts at all until that is set.

## Cost and licensing

Microsoft has not published a licence requirement or price for wait on send in Outlook for Mac. The roadmap item names no licence, and Learn has no page for the Mac feature.

For comparison, the Learn page "Get started with oversharing pop-ups in Outlook" states that oversharing pop-ups require a Microsoft 365 E5 subscription, and the Learn page for Outlook for Microsoft 365 lists the wait on send dialog as applying to Online E5 users with connected experience enabled. The Microsoft Purview service description also lists Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance for advanced Outlook policy-tip support including the oversharing dialog; it does not specify Mac wait-on-send licensing. Do not assume the same applies to Mac until Microsoft says so.

No meter is documented for this feature at the time of writing (November 2026). The known indirect cost is admin time to build the DLP rule, set the wait, and test with Mac users.

## Scope

The roadmap item lists the Mac platform and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds, with General Availability as the release phase and a target of November CY2026. The roadmap names Outlook for Mac only; it gives no Outlook for Mac version or release channel.

The account that creates and deploys DLP policies must be in one of the role groups Learn lists: Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator. Roles for the Mac wait-on-send setting itself are not yet documented.

A wait-on-send check relies on a DLP policy scoped to the Exchange location. For the pre-send dialog, Learn describes the rule option **Show the policy tip as a dialog for the end user before send (available for Exchange workload only)**.

## Governance guidance

### Before rollout

- Review the DLP policies and rules scoped to the Exchange location, and decide which would apply to Mac users (Purview DLP rule row in the controls table).
- Check whether the Microsoft 365 Apps admin center policy **Enable Purview Data Loss Prevention (DLP) policy tips in Outlook** is enabled for the Mac users you intend to pilot (policy tips row).
- Confirm with your licensing owner which licence Microsoft expects for the feature on Mac, because the licence is not yet published.
- Draft a short note for Mac users explaining that Send may pause while a message is checked.

### At rollout

- Pilot with a small group of Mac users, using the policy-tips policy's group targeting, before widening.
- Set the wait length only once Microsoft confirms which setting governs it on Mac; the Exchange Online parameters in the controls table are documented for new Outlook for Windows, so treat them as applying to Mac once Microsoft confirms it.
- Test a message that matches a block rule and one that matches a warn rule, and record what a Mac user sees.

### After rollout

- Ask pilot users how long the wait lasts and how often it appears, then adjust the wait before expanding.
- Check the Microsoft 365 Roadmap item and Microsoft Learn for the Mac settings and licensing, and update your runbook when they are published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Wait-on-send switch and timeout (Exchange Online organisation setting)</strong><br><small>Tenant</small><br><small class="controls__note">Documented for new Outlook for Windows. General control: Microsoft has not confirmed it applies to Outlook for Mac.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -DLPWaitOnSendEnabled $true -DLPWaitOnSendTimeout &lt;seconds&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether DLP policy tips appear in Outlook for Mac</strong><br><small>User</small><br><small class="controls__note">Policy 'Enable Purview Data Loss Prevention (DLP) policy tips in Outlook'; can be targeted to individuals or groups. It governs policy tips, not wait on send.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which messages a DLP rule evaluates and the pre-send dialog</strong><br><small>Tenant</small><br><small class="controls__note">Existing Exchange-location DLP rules. Learn describes the dialog option for Outlook for Microsoft 365; Mac support is not confirmed. The call abbreviates Learn's warn-rule example, given in full below the table.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;name&gt; -Policy &lt;policy&gt; -NotifyUser Owner -NotifyPolicyTipDisplayOption &quot;Dialog&quot; -ContentContainsSensitiveInformation &lt;label condition&gt; -ExceptIfRecipientDomainIs &lt;trusted domains&gt;</code> <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Exchange Online parameters are documented on Learn for new Outlook for Windows, and the Learn page describes that wait-to-send experience as controlled through them. Microsoft has not confirmed that they govern Outlook for Mac, so the row is a general control for the same capability on another client.

The policy tips setting is documented for Android, iOS and macOS. It decides whether DLP policy tips show in Outlook; it is not a setting for wait on send. Targeting by individuals or groups is a documented feature of that policy.

Microsoft Learn documents no admin centre path for the Exchange wait-to-send parameters and no API for the policy tips policy at the time of writing (November 2026). Learn documents the registry key and Group Policy setting for Outlook for Microsoft 365; no page ties them to Outlook for Mac.

Full warn-rule example from Learn for the third row, where `<Label GUID>` is the sensitivity label's GUID and the domains are trusted recipient domains:

```powershell
New-DlpComplianceRule -Name <name> -Policy <policy> -NotifyUser Owner -NotifyPolicyTipDisplayOption "Dialog" -ContentContainsSensitiveInformation @(@{operator = "And"; groups = @(@{operator="Or";name="Default";labels=@(@{name=<Label GUID>;type="Sensitivity"})})}) -ExceptIfRecipientDomainIs @("contoso.com","microsoft.com")
```

## Open questions

- Which setting controls wait on send and its timeout in Outlook for Mac: the Exchange Online `DLPWaitOnSendEnabled` and `DLPWaitOnSendTimeout` parameters, a Microsoft 365 Apps admin center policy, or something else? Watch the Learn page on policy tips for Outlook for Android, iOS and macOS.
- Is wait on send on or off by default for Outlook for Mac when it arrives, and does the Mac client offer the same **Send anyway** override after a timeout?
- Which licence does Outlook for Mac wait on send need: E5, as Learn states for oversharing pop-ups, or something else? Watch the Learn licensing pages and Message center.
- Which Outlook for Mac versions and update channels get the feature, and will it reach GCC, GCC High and DoD on the same date as Worldwide?

<!-- rationale
risk: Low. The change adds a pre-send check to Outlook for Mac and stays inside existing DLP policy; Microsoft has not stated the default, so rating assumes mail on Mac keeps being sent as today until an admin acts.
cost: Low. The only cost the sources show is admin time to configure and test; licensing for Mac is not yet published, and Learn ties the equivalent Outlook for Microsoft 365 feature to E5 users.
impact: Medium. Users of Outlook for Mac in scope of a DLP policy would notice a wait or a dialog on Send; Windows and web users are not the audience of this roadmap item.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because a requirement specific to Outlook for Mac wait on send is not published. | Found: Searched: Outlook Mac Purview DLP wait on send default timeout licensing price administrator settings. Read Purview service description and Mac/mobile, classic and new Outlook references; general Exchange DLP entitlements are published, but no Mac wait-on-send-specific requirement. | Fix: Set licensing.model to included under the standard's product-level licensing rule. Add to licensing.notes and Cost and licensing: 'Exchange Online DLP requires an eligible licence, such as Microsoft 365 E3 or E5; Microsoft has not published a requirement specific to Mac wait on send.' Use the already cited Microsoft Purview service description. Retain the caveat against assuming Windows oversharing requirements apply to Mac.
- [supported, minor] controls[1].ui; Governance controls: second row / admin-path: Microsoft 365 Apps admin center > Customization > Policy Management reaches the management area for the Mac policy-tips setting. | Found: You can access this policy under Customization and Policy Management. | Fix: Extend the path to 'Customization > Policy Management > Create > Choose the scope > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook > Enabled'. Cite https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy alongside the current reference for the creation steps. The existing path is correct but stops at the policy list. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [supported, minor] controls[1].note; Governance controls; Governance guidance: Before rollout / applicability: Enable Purview Data Loss Prevention (DLP) policy tips in Outlook controls policy-tip UI in Outlook for Mac. | Found: To enable Policy Tip UI to appear in Outlook for Android, iOS, and macOS, you must enable the policy listed in the following section in the Microsoft 365 Apps Admin Center. | Fix: Add to the control note: 'The platform reference documents Mac policy tips, although Resolve issues that affect DLP policy tips still says policy tips are not supported for Outlook for Mac iOS clients.' Cite https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/data-loss-prevention-policy-tips#client-doesn't-support-mailtips for that conflicting statement; retain the platform reference as the basis for the control. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [supported, minor] controls[2].ui; Governance controls: third row / admin-path: Microsoft Purview portal > Data loss prevention > Policies reaches the policies used for oversharing dialog configuration. | Found: Sign in to the Microsoft Purview portal > Data loss prevention > Policies | Fix: Extend the path to 'Data loss prevention > Policies > + Create policy > Custom (Categories) > Custom (Regulations) > Full directory (Admin units) > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only)'. State in the note that User notifications must be On. The existing path is correct but stops at the policies list. | Source: https://learn.microsoft.com/purview/dlp-osp-get-started
-->
