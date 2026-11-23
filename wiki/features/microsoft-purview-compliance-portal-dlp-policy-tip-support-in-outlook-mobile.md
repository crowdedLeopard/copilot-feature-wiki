---
title: "Outlook mobile: Purview DLP policy tips for iOS and Android (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-dlp-policy-tip-support-in-outlook-mobile"
roadmapId: 491017
topic: "governance"
products: ["Microsoft Purview"]
summary: "Outlook for Android and iOS can show Purview DLP policy tips; this roadmap item covers GCC, GCC High and DoD. Learn says the tip UI is off until an admin enables a Cloud Policy setting."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps; each targeted user needs a supported licence. A licence list specific to Outlook mobile policy tips is not yet published."
audiences: ["security","compliance","m365-admin","change-adoption"]
tags: ["dlp","outlook","mobile","purview","exchange","cloud-policy","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 491017"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=491017"
    kind: "roadmap"
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
  - title: "Send email notifications and show policy tips for DLP policies"
    url: "https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips"
    kind: "learn"
  - title: "Get started with oversharing pop-ups in Outlook"
    url: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Resolve issues that affect DLP policy tips"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/data-loss-prevention-policy-tips"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["outlook-purview-dlp-wait-on-send-support-for-outlook-mobile-apps","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-mobile-apps","cloud-policy","sensitive-information-types","sensitivity-labels"]
controls:
  - governs: "Whether DLP policy tips appear in Outlook for Android and iOS for chosen users"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "Default Disabled. Role: Office Apps Administrator recommended. Setting named on the Outlook mobile policy tip reference page."
  - governs: "Whether a DLP rule shows a policy tip and what it says"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom > Admin units > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -NotifyUser Owner -NotifyPolicyTipCustomText \"<text>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    note: "Policy tips are configured per rule. Page shows the wizard for Exchange email; tip text is plain text up to 256 characters."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-23"
    note: "First briefing for the US Government (GCC, GCC High, DoD) roadmap item: Outlook mobile DLP policy tips are off by default and enabled through a Cloud Policy setting."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 65 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Correction: controls row 1 now links the mobile reference page, row 2 gives the full Purview portal route, the default email policy tip text is corrected, and the risk rationale no longer says anything about data paths."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 68 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Correction: licensing model now rests on Cloud Policy's plan and licence requirement, cost lowered to low, and the desktop E5-level licence list is labelled as Outlook for Microsoft 365 background, not a mobile requirement."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 61
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "e572612543b96d08f31a066045393058"
---

## What's changing

Outlook for Android and iOS can show Microsoft Purview Data Loss Prevention (DLP) policy tips: a warning inside the message being written when it matches a DLP rule. The roadmap item states the aim as real-time alerts that help users avoid accidentally sharing sensitive information. Item 491017 is listed as Launched, General Availability, with a target of January CY2026, for GCC, GCC High and DoD. Microsoft lists the same feature under a separate Worldwide item, 491016 (Launched, target March CY2026, preview December CY2025). The record lists the platform as Web, although the title and the Learn page concern Outlook mobile.

The Learn reference page says Outlook for Android, iOS and macOS "now supports data loss prevention (DLP) policy tips with commonly used predicates and exceptions, advanced classifiers, and override capabilities". It states that all actions and information types for email communications are supported, and that all custom and exact data match sensitive information types, sensitivity labels, retention labels and trainable classifiers are supported.

The page also says the policy tip UI is turned off by default so that administrators can test and train users before deployment. It is enabled with the setting "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" in the Microsoft 365 Apps admin center, which can be targeted to individuals or groups. The clouds for this item come from the roadmap record.

The same page says the oversharing dialog (a pop-up for warn, override or block actions) is available to Outlook for Android and iOS users "when used with the necessary licenses and configuration". A separate briefing covers wait-on-send for Outlook mobile: [Outlook mobile: Purview DLP wait-on-send for iOS and Android](/features/outlook-purview-dlp-wait-on-send-support-for-outlook-mobile-apps/).

## Why it matters

Microsoft Learn documents the tip UI as off until you enable it, so users on Outlook mobile see no tips unless you act. For a service owner this makes the rollout a deliberate choice: you decide which groups get tips first and when users are told. Microsoft frames the default as time to test and train before deployment, and the wiki's view is to use a pilot group for that.

The benefit is that a sender sees the conflict while still writing, on the device many people use for quick replies. The cost is support load: users who have only met tips on desktop or the web will meet them on a phone, with whatever text and override options your DLP rules define.

## Risk assessment

**Data exposure**
- Tip triggers come from the DLP rules you already hold: the Learn page says policy tip settings are configured in DLP policies. The mobile page lists the conditions it supports as all actions and information types for email communications.
- With the setting left at its default (Disabled), Learn says tips aren't shown. Whether the rule's own actions, such as blocking, behave differently on mobile when the UI is off is not stated (see Open questions).

**Security & identity**
- The setting is delivered through the Cloud Policy service, which applies policies to user objects that are in Microsoft Entra ID and have a supported licence assigned. A user outside the targeted group, or without a supported licence, is outside the setting's reach.
- Cloud Policy lists Office Apps Administrator as the recommended role, with Security Administrator and Global Administrator also supported.

**Autonomy & actions**
- Override is a per-rule choice: Learn says the override option is per rule and overrides all of the actions in the rule. A rule that allows override lets the sender proceed, so review which rules you let mobile users override.
- When content matches several rules, only the policy tip from the most restrictive rule with the highest priority is shown, so the tip a user sees on mobile may not come from the rule you expect.

**Change & support**
- Default tip text for Outlook messages is "Your email conflicts with a policy in your organization." Custom policy tip text is plain text of up to 256 characters, with no HTML or tokens, so brief the help desk on what users will read.
- Cloud Policy delivers settings to Windows, macOS, iOS and Android devices, although not every setting is available on every operating system.

## Cost and licensing

**Licence.** The Cloud Policy overview says Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps, and that user objects must be present in Microsoft Entra ID and have a supported licence assigned. A licence list specific to advanced policy tips on Outlook mobile is not yet published: the mobile reference page says the oversharing dialog is available "when used with the necessary licenses and configuration", and its Licensing requirements heading shows no text.

**Background: Outlook for Microsoft 365 (desktop).** Microsoft's Purview service description, under policy tips for Outlook for Microsoft 365, says advanced DLP policy tip support, which makes additional DLP conditions, advanced classifiers, the oversharing dialog and more available, requires one of these licences for each scoped user: Microsoft 365 E5/A5/G5; Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW; or Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. That list is written for Outlook for Microsoft 365 and is not presented here as the Outlook mobile requirement; whether it applies to mobile is not stated.

**Meter.** The service description lists licences for advanced policy tips and names no meter or per-use charge. No separate meter is documented for policy tips on Outlook mobile at the time of writing (November 2026).

**Indirect costs.** Admin time to create a Cloud Policy configuration and pilot it, a licence check for every user you scope, and user communication and help-desk preparation. Cloud Policy needs a supported licence on each targeted user.

## Scope

**Who.** Users and groups an administrator targets in a Cloud Policy configuration; the Learn page says policies can be targeted to individuals or groups. Targets must be user objects in Microsoft Entra ID with a supported licence, and Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps.

**Clouds and admin centre.** The roadmap record lists GCC, GCC High and DoD for this item; Worldwide is item 491016. Cloud Policy documents its admin centre at https://config.office.com for commercial and US Government customers, https://config.office365.us for GCC High and https://config.apps.mil for DoD.

**Apps.** Outlook for Android and iOS (the Learn page also covers macOS). Policy tips aren't supported in the Word, Excel and PowerPoint mobile apps, according to the DLP policy tips reference.

**Rollout.** Status is Launched per the roadmap record. The tip UI stays off for a user until the setting is Enabled for them.

## Governance guidance

### Before rollout
- Check that Cloud Policy supports each targeted user's plan; confirm the mobile advanced-policy-tip licence requirement before expanding the pilot.
- List the DLP rules in the Microsoft Purview portal that have user notifications and policy tips turned on, and decide which of them mobile users should see.
- Create a pilot Microsoft Entra group and name an owner with the Office Apps Administrator role for the Cloud Policy configuration.
- Write plain-text tip text of no more than 256 characters, and decide whether each rule allows override.

### At rollout
- Create a Cloud Policy configuration in the Microsoft 365 Apps admin center scoped to the pilot group, and set "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" to Enabled.
- Tell pilot users what the tip looks like and what the override option does, using the text from your rules.
- Ask pilot users to test with mail that matches a rule on Outlook for Android and iOS.

### After rollout
- Compare what pilot users saw with the rule you expected, bearing in mind that only the most restrictive, highest priority matching rule's tip is shown.
- Widen the Cloud Policy scope to further groups once the pilot text and override settings are right.
- Revisit rule text and override settings after the first weeks of user questions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP policy tips appear in Outlook for Android and iOS for chosen users</strong><br><small>Group</small><br><small class="controls__note">Default Disabled. Role: Office Apps Administrator recommended. Setting named on the Outlook mobile policy tip reference page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP rule shows a policy tip and what it says</strong><br><small class="controls__note">Policy tips are configured per rule. Page shows the wizard for Exchange email; tip text is plain text up to 256 characters.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom › Admin units › Full directory › Exchange email › Define policy settings › Create or customize advanced DLP rules › Create rule › User notifications › Policy tips <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -NotifyUser Owner -NotifyPolicyTipCustomText &quot;&lt;text&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Whether tips appear on mobile is decided by the Cloud Policy setting, which can target individuals or groups; what the tip says, and whether the user can override, is decided per DLP rule in the Microsoft Purview portal. The two controls work together: the rule defines when a tip is shown and the Cloud Policy setting decides whether the UI appears.

Cloud Policy roles are Office Apps Administrator (recommended), Security Administrator and Global Administrator. DLP rule changes need the Purview roles named on Learn, for example Compliance administrator or Information Protection. Microsoft Learn documents no PowerShell or Graph operation for the Cloud Policy setting at the time of writing (November 2026).

## Open questions

- Will Microsoft publish a licence list written for Outlook mobile? The Licensing requirements heading on the mobile reference page shows no text; watch that page and the Purview service description.
- When the Cloud Policy setting is Disabled, do DLP rule actions such as block or override still apply to mail sent from Outlook mobile? The reference page states only that policy tips aren't shown.
- Does Microsoft document a PowerShell, Graph or other API for the Cloud Policy setting? Watch the Cloud Policy overview page.
- Does the availability of this feature differ between the Worldwide item (491016) and this US Government item (491017) beyond the dates on the roadmap? Watch the roadmap entries and the mobile reference page.

<!-- rationale
risk: Low. Learn says the policy tip UI is turned off by default in Outlook mobile, so nothing new reaches users until an administrator enables the Cloud Policy setting.
cost: Low. Known costs are admin time, pilot testing and user communication; licensing specific to advanced Outlook mobile policy tips is not yet published.
impact: Medium. Only the users or groups an administrator targets will see tips in Outlook for Android and iOS, so the people who notice are those in the scope you choose.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; summary; What's changing; Scope / behaviour: Outlook for Android and iOS supports Purview DLP policy tips; the reference also covers macOS. | Found: Outlook for Android, iOS, and macOS now supports data loss prevention (DLP) policy tips with commonly used predicates and exceptions, advanced classifiers, and override capabilities. | Fix: Add: 'The current mobile reference documents support, while the older troubleshooting article still says policy tips are not supported for Outlook for Mac iOS clients.' Cite https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/data-loss-prevention-policy-tips. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [supported, minor] What's changing; Risk assessment: Data exposure / behaviour: The mobile reference says all actions and information types for email communications are supported. | Found: All actions and information types for email communications are supported. | Fix: Add: 'The general DLP support matrix instead describes mobile conditions and actions as a subset and sensitive-information-type support as varying by version and licence.' Cite https://learn.microsoft.com/purview/dlp-policy-tips-reference. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [supported, minor] front matter: licensing.model and notes; Cost and licensing / licensing: The feature's licensing model is included, with a supported Cloud Policy licence required for targeted users. | Found: Which licenses provide the rights for a user to benefit from the service? ... Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2 | Fix: Keep model included, but add to licensing notes: 'The Purview service description lists Microsoft 365 E5/A5/G5/E3/A3/G3 and Exchange Online Plan 2 among the licences providing rights to DLP for Exchange Online; Cloud Policy licensing alone does not establish DLP entitlement. A mobile-specific advanced-policy-tip licence list is not yet published.' Retain the cited Purview service description URL. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [contradicted, minor] Governance guidance: Before rollout and After rollout; controls[1] / consistency: The governance checklist's instruction to decide and revisit rule override settings has no corresponding override control in the table. | Found: decide whether each rule allows override ... Revisit rule text and override settings ... controls[1] gives User notifications > Policy tips and -NotifyPolicyTipCustomText, not an override-setting path or parameter. | Fix: Remove 'and decide whether each rule allows override' from Before rollout, and replace 'Revisit rule text and override settings after the first weeks of user questions' with 'Revisit rule text after the first weeks of user questions.' No additional control row is requested.
-->
