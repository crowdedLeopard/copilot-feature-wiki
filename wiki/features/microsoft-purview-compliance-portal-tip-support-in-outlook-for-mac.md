---
title: "Outlook for Mac: Purview DLP policy tips with override"
slug: "microsoft-purview-compliance-portal-tip-support-in-outlook-for-mac"
roadmapId: 498491
topic: "governance"
products: ["Microsoft Purview"]
summary: "Outlook for Mac supports Purview DLP policy tips, with override where a rule allows it. Learn documents the tip UI as off by default: an administrator enables it in Cloud Policy and sets override per DLP rule."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Purview service description licenses DLP for Exchange Online with plans including Microsoft 365 E3 and E5. It does not separately identify the advanced policy-tip entitlement for Outlook for Mac; its advanced policy-tip entry names Outlook for Microsoft 365."
audiences: ["compliance","security","m365-admin"]
tags: ["dlp","purview","outlook","macos","cloud-policy","exchange"]
sources:
  - title: "Microsoft 365 Roadmap 498491"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498491"
    kind: "roadmap"
  - title: "Data loss prevention policy tip reference for Outlook for Android, iOS, and macOS"
    url: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    kind: "learn"
  - title: "Data loss prevention policy tips reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-tips-reference"
    kind: "learn"
  - title: "Send email notifications and show policy tips for DLP policies"
    url: "https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Resolve issues that affect DLP policy tips"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/data-loss-prevention-policy-tips"
    kind: "learn"
  - title: "Get started with oversharing pop-ups in Outlook"
    url: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Learn about data loss prevention"
    url: "https://learn.microsoft.com/purview/dlp-learn-about-dlp"
    kind: "learn"
videos: []
related: ["outlook-purview-dlp-wait-on-send-support-for-mac","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-for-mac","microsoft-purview-compliance-portal-dlp-policy-tip-support-in-outlook-mobile","cloud-policy"]
controls:
  - governs: "Whether DLP policy tips are shown in Outlook for Mac"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "Default Disabled: policy tips aren't shown. Can target individuals or groups. Cloud Policy steps are on the Cloud Policy overview page."
  - governs: "Whether a DLP rule lets users override its policy tip"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -NotifyAllowOverride WithJustification"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Path is from the oversharing walkthrough, not a Mac page. For an override option to appear, set BlockAccess to true and give BlockAccessScope an appropriate value, as Learn requires."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-25T23:13:41"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: Launched; Learn documents the policy tip UI as off by default and enabled through Cloud Policy, with override set per DLP rule."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the override requirement to include BlockAccessScope, and restated licensing: DLP for Exchange Online plans are published, the Mac advanced policy-tip entitlement is not."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0892ed65278f55e18bbf67d4ebd35f55"
---

## What's changing

Outlook for Mac gains Microsoft Purview data loss prevention (DLP) policy tips. According to the roadmap item, users see a real-time notification in the mail tip UI when an email contains sensitive information that violates an organisational policy, and can remove non-compliant recipients or override the policy if that is allowed. Microsoft Learn's reference for Outlook for Android, iOS and macOS says these clients support DLP policy tips "with commonly used predicates and exceptions, advanced classifiers, and override capabilities". The remove-recipients option is described only in the roadmap text; the Learn pages read do not describe it.

Learn documents the policy tip UI as off by default: it is "turned off by default in Outlook for Android, iOS, and macOS to allow for administrators to test and perform user training prior to deployment". To show tips, an administrator enables the Microsoft 365 Apps admin center policy "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" (Cloud Policy, Microsoft's service for setting Office policies by user or group), which can target individuals or groups. The reference says all actions and information types for email communications are supported, along with all custom and exact data match sensitive information types, sensitivity labels, retention labels and trainable classifiers.

Two Microsoft pages differ on how far Mac support goes, and both are reported as written. The general policy tip support matrix lists Outlook Mac with conditions and actions as a "Subset" and sensitive information type support as varying by version and licence. Separately, the troubleshooting article "Resolve issues that affect DLP policy tips" says policy tips are currently not supported for Outlook for Mac iOS clients, while the platform reference documents macOS support. The reference's oversharing dialog section names Outlook for Android and iOS and does not name macOS.

The roadmap record gives the status as Launched, with a preview target of February CY2026 and a target of June CY2026. It lists the release phases General Availability and Preview and the Worldwide (Standard Multi-Tenant) cloud. It lists the platform as Web, although the title and description name Outlook for Mac.

## Why it matters

This extends existing DLP rules to another client. A rule that already evaluates Exchange email can now warn a Mac sender and, where the rule allows it, let them override. Because Learn documents the tip UI as off by default, a tenant that does nothing gets no policy tip UI on Mac from this change. The decisions are when to enable it, for which Mac users, and which rules may allow override.

Override needs the most attention. Learn says the override option is per rule and overrides all of the actions in that rule, so a rule that allows override on content you treat as high risk lets the sender carry on. The advanced policy-tip entitlement for Mac is also not yet published, so confirm it before targeting users who do not hold E5-level licences.

## Risk assessment

**Data exposure**
- Until the Cloud Policy setting is enabled, Mac senders get no policy tip UI, because Learn documents it as off by default. Pilot with a small group first.
- A rule that allows override lets the sender continue past the warning. Learn says the override is per rule, and that overriding the most restrictive matching rule also overrides any other rules the content matched. Allow override only on rules where that outcome is acceptable.
- The support matrix describes Outlook Mac conditions and actions as a subset, so test each rule on a Mac before relying on the tip as the warning.

**Security & identity**
- The enabling setting is a Cloud Policy policy targeted at individuals or groups. DLP rules are created by members of the role groups the DLP walkthrough lists, such as Compliance administrator and Security administrator.

**Autonomy & actions**
- The user chooses whether to override where the rule allows it. The actions that follow a match are the ones the DLP rule defines.

**Change & support**
- The Learn troubleshooting article and the platform reference disagree on Mac support, so help desk staff may find the older advice. Tell them which page your tenant follows.
- Learn says that if NotifyAllowOverride is set, BlockAccess must be true and BlockAccessScope must have an appropriate value, or the tip appears without an override option. Test every rule before widening the scope.

## Cost and licensing

The Purview service description licenses DLP for Exchange Online with plans including Microsoft 365 E3 and E5. It does not separately identify the advanced policy-tip entitlement for Outlook for Mac. The Mac reference has a "Licensing requirements" heading with no licence listed under it, and the support matrix says sensitive information type support on Outlook Mac "Varies by version and license".

For advanced DLP policy tip support in Outlook for Microsoft 365, which adds more conditions, advanced classifiers and the oversharing dialog, the same service description requires licences for each scoped user, among them Microsoft 365 E5/A5/G5. That entry names Outlook for Microsoft 365, not Mac, so treat it as a lead and not as the Mac requirement. The troubleshooting article also points to Microsoft's "Outlook license requirements for Exchange features" page for the Outlook client licences that support policy tips.

The cost Learn supports is indirect: admin time to enable the setting, tune rules and brief users and the help desk.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and no other, and the Web platform alongside a title and description that name Outlook for Mac. The Learn reference covers Outlook for Android, iOS and macOS together and states no minimum Outlook for Mac version.

The tip UI setting is targeted at individuals or groups through Cloud Policy. DLP rules are created by members of the role groups the DLP walkthrough lists, which include Compliance administrator and Security administrator. Rollout mechanics beyond the record's preview and target dates are not described.

## Governance guidance

### Before rollout
- Identify the DLP rules that cover Exchange email and decide which of them may allow override. Override is set per rule in the Microsoft Purview portal (controls table, second row).
- Confirm with Microsoft or your account team whether the advanced policy-tip entitlement applies to your Mac users, since Learn does not state it for Mac.
- Choose a pilot Microsoft Entra group of Mac users to target in Cloud Policy.
- Brief the help desk on the differing Learn guidance on Mac support.

### At rollout
- Create a Cloud Policy configuration scoped to the pilot group that enables "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" (controls table, first row).
- Test on a Mac with one rule that only notifies and one that blocks with override, checking that the override option appears.
- Check that rules allowing override have BlockAccess set to true and BlockAccessScope set to an appropriate value, as Learn requires for the override option to show.

### After rollout
- Widen the Cloud Policy scope in steps as the pilot confirms the tips behave as intended.
- Review which rules allow override and tighten any that let senders pass content you consider high risk.
- Re-check the Mac reference and the service description for a Mac licence statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP policy tips are shown in Outlook for Mac</strong><br><small>User</small><br><small class="controls__note">Default Disabled: policy tips aren't shown. Can target individuals or groups. Cloud Policy steps are on the Cloud Policy overview page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP rule lets users override its policy tip</strong><br><small>Tenant</small><br><small class="controls__note">Path is from the oversharing walkthrough, not a Mac page. For an override option to appear, set BlockAccess to true and give BlockAccessScope an appropriate value, as Learn requires.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom › Full directory › Exchange email › Define policy settings › Create or customize advanced DLP rules › Create rule › User notifications › Policy tips <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -NotifyAllowOverride WithJustification</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Cloud Policy setting is documented as deciding whether policy tips are shown; override is a property of each DLP rule. The two are set in different admin centres, so enabling the tip UI does not by itself change which rules allow override.

The override path comes from Learn's walkthrough for oversharing pop-ups in Outlook for Microsoft 365 and is not a Mac-specific page. Microsoft Learn documents no API or cmdlet for the Cloud Policy setting at the time of writing (November 2026).

## Open questions

- Which licences cover advanced DLP policy tips in Outlook for Mac? The Mac reference has a Licensing requirements heading with nothing under it; watch that page and the Microsoft Purview service description.
- Does Outlook for Mac show the option to remove non-compliant recipients that the roadmap describes, and where will Microsoft document it?
- Which Outlook for Mac versions show policy tips? Learn's Mac reference names none.
- Does Outlook for Mac show the pre-send oversharing dialog? The reference's oversharing section names Android and iOS only.
- Will Microsoft update the troubleshooting article that says policy tips are not supported for Outlook for Mac?

<!-- rationale
risk: Low. Learn documents the policy tip UI as off by default in Outlook for macOS, so nothing reaches Mac users until an administrator enables it. Rules that allow override are the exposure that remains.
cost: Low. The documented cost is admin time to enable the tip UI and tune rules. DLP for Exchange Online is licensed under plans such as Microsoft 365 E3 and E5; an advanced policy-tip entitlement for Outlook for Mac is not yet published.
impact: Low. Mac users in the groups an administrator targets see tips where a DLP rule matches; the roadmap lists the Worldwide cloud and Learn documents the tip UI as off by default.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table and prose / admin-path: The Purview route through DLP Policies, the Custom policy wizard, Exchange email and Create rule reaches User notifications and Policy tips for configuring rule override. | Found: Set the User notifications toggle to On. Select Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only). If already selected, uncheck the Allow override from M365 services option. | Fix: Extend controls[1].ui.path and the rendered table to 'Data loss prevention > Policies > + Create policy > Custom > Custom > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips > Allow override from M365 services'. The cited walkthrough documents this option; select it when override is intended rather than following the walkthrough's no-override example. | Source: https://learn.microsoft.com/purview/dlp-osp-get-started
-->
