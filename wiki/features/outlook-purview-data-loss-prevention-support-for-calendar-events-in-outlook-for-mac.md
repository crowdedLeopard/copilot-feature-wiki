---
title: "Outlook for Mac: Purview Data Loss Prevention for calendar events"
slug: "outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-for-mac"
roadmapId: 569717
topic: "modern-work"
products: ["Outlook"]
summary: "Microsoft plans DLP policy support for calendar events in Outlook for Mac. Compliance and Exchange admins should check how existing Purview DLP policies would apply to meeting subjects and invites. Default and calendar-specific licensing are not yet stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "General Exchange Online DLP licensing includes Microsoft 365 E3 and Exchange Online Plan 2 among the qualifying plans listed in the Microsoft Purview service description. Calendar-specific licensing has not yet been published."
audiences: ["compliance","security","m365-admin"]
tags: ["outlook","dlp","purview","exchange","microsoft-365-apps","gcc","gcc-high","dod"]
sources:
  - title: "Data loss prevention policy tip reference for Outlook for Android, iOS, and macOS"
    url: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    kind: "learn"
  - title: "Data loss prevention policy tip reference for Outlook for Microsoft 365"
    url: "https://learn.microsoft.com/purview/dlp-ol365-win32-policy-tips"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569717"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569717"
    kind: "roadmap"
  - title: "Which mailboxes a DLP policy covers, and whether it simulates or enforces (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Resolve issues that affect DLP policy tips"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/data-loss-prevention-policy-tips"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Help prevent sharing credit card numbers through email"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi"]
controls:
  - governs: "Whether Outlook shows Purview DLP policy tips (documented for email in Outlook for macOS)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Create > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "General control for email policy tips; not confirmed for calendar events. When creating a configuration, enter its name and choose the user or group scope before Configure Settings."
  - governs: "Which mailboxes a DLP policy covers, and whether it simulates or enforces"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Policies > + Create policy"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -ExchangeLocation All -Mode <PolicyMode>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Opens policy creation; for Exchange email continue via Enterprise applications & devices > Custom > Custom > Exchange email, then Run the policy in simulation mode. -ExchangeLocation takes no mailbox list. Not confirmed for calendar events."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-24"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-17"
    note: "New briefing: Purview DLP for calendar events in Outlook for Mac, In development with a November CY2026 target; default and licence not yet stated."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the New-DlpCompliancePolicy call (-ExchangeLocation accepts only All), reworded the Block action statement as general DLP behaviour, and removed the Activity explorer checklist bullet."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the Microsoft 365 Apps admin center path for the policy-tip setting, extended the Purview portal path, added the general Exchange DLP licensing entitlement and the conflicting troubleshooting note."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "98b5c77ff696783b2c46e8ef811407bf"
---

## What's changing

Microsoft plans to let Microsoft Purview Data Loss Prevention (DLP) policies apply to calendar events in Outlook for Mac. The roadmap item states that organisations will be able to detect and help prevent the sharing of sensitive information in meeting subjects, descriptions and invite content, through policy tips, user remediation and policy enforcement.

Microsoft Learn does not describe this calendar capability yet, so what follows about its behaviour is the roadmap's description. Learn does document DLP policy tips for email in Outlook for Android, iOS and macOS. Microsoft's troubleshooting article still says policy tips are not supported for Outlook for Mac iOS clients, conflicting with this dedicated reference. The dedicated page states that "Policy Tip UI is turned off by default in Outlook for Android, iOS, and macOS" and that an administrator enables it with the policy "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" in the Microsoft 365 Apps admin center. Microsoft has not said whether the same switch, or the same default, applies to calendar events.

The roadmap item is In development, with a target of November CY2026, release phase General Availability, platform Mac. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The date is a target, not a commitment, and the item has no preview date or more-info link.

## Why it matters

Meeting subjects and invite text are free text that people write quickly and send to many recipients, often outside the organisation. Today the Learn page for Outlook for Android, iOS and macOS describes DLP policy tips for email only, and it says "All actions and information types for email communications are supported." This change is meant to close the gap for calendar events on Mac.

Microsoft has not stated what happens on arrival: whether existing Exchange-scoped DLP policies begin to evaluate Mac calendar events automatically, or whether an admin must switch something on. Treat this as something to confirm rather than assume. The practical view is that any rule that blocks or requires a justification could start to affect Mac users' meeting invites, so test in simulation mode before the target month and tell Mac users what to expect.

## Risk assessment

**Data exposure**
- The roadmap item names meeting subjects, descriptions and invite content as the content to be checked. Until Microsoft documents the behaviour, treat calendar events on Outlook for Mac as content your current email DLP rules may not yet cover.
- The Learn policy tip reference for Outlook for Microsoft 365 states "Policy tips aren't supported for meeting invitations." That page is for Outlook for Microsoft 365, and Microsoft has not said whether the limit applies to Outlook for Mac or to this change.

**Security & identity**
- No change to sign-in or permissions is described. DLP policy creation needs membership of one of the role groups listed on the Learn page "Create and deploy data loss prevention policies", so keep that group small.

**Autonomy & actions**
- The roadmap item mentions "policy enforcement" without detail. Learn documents Block with override and Block as general DLP actions; Microsoft has not yet documented which actions apply to calendar events in Outlook for Mac.

**Change & support**
- Policy tips for Outlook for Android, iOS and macOS email are off by default, so an invite-specific tip may also be off until an admin enables it. Microsoft has not confirmed this for calendar events.
- Expect help-desk questions from Mac users who see a tip on a meeting that a Windows colleague does not, because Microsoft has not said when calendar support reaches other Outlook clients.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for DLP on calendar events in Outlook for Mac. The Learn DLP pages that cover Outlook policy tips and policy deployment point to Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions for licensing, and name no calendar-specific licence.

The Microsoft Purview service description lists Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2) and Exchange Online Plan 2 among the licences that provide rights to benefit from DLP for Exchange Online, SharePoint Online and OneDrive for Business. That is general Exchange DLP entitlement; it does not confirm calendar-specific coverage, and calendar-specific licensing has not yet been published.

The known cost is indirect: admin time to scope and test policies, and communication to Mac users. No Copilot Credits or pay-as-you-go meter is documented for this feature at the time of writing (November 2026). Check the licence guidance linked from the Learn page before budgeting for new users.

## Scope

The roadmap item names Outlook, the Mac platform and the clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Whether it covers every Outlook for Mac build or release channel is not stated.

Existing Learn guidance for DLP policy tips in Outlook for Android, iOS and macOS lets administrators target the policy-tip setting to individuals or groups in the Microsoft 365 Apps admin center. Whether that targeting applies to calendar events is not confirmed. DLP policies are created in the Microsoft Purview portal by members of the role groups the Learn page lists.

## Governance guidance

### Before rollout
- Review which Exchange-scoped DLP policies and rules exist in the Microsoft Purview portal, and note which use block or override actions that would matter for meeting invites.
- Check the current state of the "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" policy in the Microsoft 365 Apps admin center, and decide a pilot group of Mac users.
- Draft a short note for Mac users and the help desk on what a policy tip on a meeting invite means.

### At rollout
- Watch Message center and the Microsoft 365 Roadmap item for the November CY2026 target and any statement of default.
- Run the policies in simulation mode with policy tips for the pilot group before turning enforcement on, as the Learn deployment guidance recommends.
- Test with a sample invite containing a sensitive information type on Outlook for Mac, once the feature is available in your tenant, and confirm what the user sees.

### After rollout
- Tune rules that produce false positives on meeting text before moving a policy from simulation to full enforcement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Outlook shows Purview DLP policy tips (documented for email in Outlook for macOS)</strong><br><small>Tenant</small><br><small class="controls__note">General control for email policy tips; not confirmed for calendar events. When creating a configuration, enter its name and choose the user or group scope before Configure Settings.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Create › Configure Settings › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which mailboxes a DLP policy covers, and whether it simulates or enforces</strong><br><small>Tenant</small><br><small class="controls__note">Opens policy creation; for Exchange email continue via Enterprise applications &amp; devices &gt; Custom &gt; Custom &gt; Exchange email, then Run the policy in simulation mode. -ExchangeLocation takes no mailbox list. Not confirmed for calendar events.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Policies › + Create policy <a href="https://learn.microsoft.com/purview/dlp-create-policy-cc-email" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -ExchangeLocation All -Mode &lt;PolicyMode&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are general controls. Microsoft has not confirmed that either one governs calendar events in Outlook for Mac, because no Learn page describes the feature yet.

The policy-tip switch is documented for email in Outlook for Android, iOS and macOS and can be targeted to individuals or groups. The DLP policy row covers location scope, state (simulation, simulation with policy tips, on, off) and actions. Creating policies needs membership of one of the role groups listed on the Learn deployment page. Microsoft Learn documents no API for the Microsoft 365 Apps admin center policy at the time of writing (November 2026).

## Open questions

- Is DLP evaluation of Outlook for Mac calendar events on by default when the feature arrives, or does an admin have to enable it? Watch Message center and the roadmap item.
- Does the Microsoft 365 Apps admin center policy "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" control policy tips for calendar events, or is there a separate setting?
- Which DLP conditions and actions will apply to meeting subjects, descriptions and invite content, and does the Learn note that policy tips aren't supported for meeting invitations in Outlook for Microsoft 365 change?
- Which licence do users need for calendar-event DLP, and will it differ from email DLP?
- Will calendar-event detections appear in Activity explorer and alerts, and will the Exchange location in a DLP policy cover calendar events?

<!-- rationale
risk: Medium. Existing DLP policies may start to warn or block users who write meetings in Outlook for Mac, and Microsoft has not stated whether this is on by default, so plan communication and testing.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence or meter for calendar-event DLP, and the Learn DLP pages direct readers to Microsoft 365 licensing guidance.
impact: Medium. Users of Outlook for Mac who write meeting invites in the scope of a DLP policy would notice policy tips and any enforcement; users on other platforms are not named by the roadmap item.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Solutions > Data Loss Prevention > Policies > + Create policy opens policy creation in the Microsoft Purview portal for configuring scope and policy state. | Found: Open the Data loss prevention solution and go to Policies > + Create policy. ... Choose where to apply the policy. Select only the Exchange email location. ... Select Next, then select Run the policy in simulation mode. | Fix: Extend controls[1].ui.path and the rendered path to 'Solutions > Data Loss Prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Choose where to apply the policy > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > Run the policy in simulation mode'. The cited https://learn.microsoft.com/purview/dlp-create-policy-cc-email supplies these steps; configure and save the desired rule between Create rule and the policy-state choice. | Source: https://learn.microsoft.com/purview/dlp-create-policy-cc-email
- [supported, minor] Why it matters / behaviour: The dedicated mobile/macOS Learn reference says all actions and information types for email communications are supported. | Found: All actions and information types for email communications are supported. | Fix: After the quoted support statement, add: 'Microsoft's broader DLP policy-tip support matrix instead describes Outlook Mac support as a subset, varying by version and licence.' Cite https://learn.microsoft.com/purview/dlp-policy-tips-reference#support-matrix-for-dlp-policy-tips-across-microsoft-apps, whose Outlook Mac row says 'Varies by version and license' and 'Subset', and add that URL to sources. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
-->
