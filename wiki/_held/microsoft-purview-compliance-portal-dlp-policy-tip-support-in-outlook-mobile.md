---
title: "Outlook mobile: Purview DLP policy tips for iOS and Android (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-dlp-policy-tip-support-in-outlook-mobile"
roadmapId: 491017
topic: "governance"
products: ["Microsoft Purview"]
summary: "Outlook for Android and iOS can show Purview DLP policy tips; this roadmap item covers GCC, GCC High and DoD. Learn says the tip UI is off until an admin enables a Cloud Policy setting. Advanced tips need E5-level licences."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Purview service description lists licences required for each scoped user for advanced DLP policy tip support in Outlook for Microsoft 365, including E5 suites and an add-on. A licence list specific to Outlook mobile is not yet published."
audiences: ["security","compliance","m365-admin","change-adoption"]
tags: ["dlp","outlook","mobile","purview","exchange","cloud-policy","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 491017"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=491017"
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
  - title: "Whether a DLP rule shows a policy tip and what it says (PowerShell)"
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
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Default Disabled. Role: Office Apps Administrator recommended. Setting named on the Outlook mobile policy tip reference page."
  - governs: "Whether a DLP rule shows a policy tip and what it says"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom > Create or customize advanced DLP rules > Create rule > User notifications"
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
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 61
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "fe02353dc8abdac48bfe1027c0b431cd"
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
- Default tip text for Outlook messages is "Your email message conflicts with a policy in your organization." Custom policy tip text is plain text of up to 256 characters, with no HTML or tokens, so brief the help desk on what users will read.
- Cloud Policy delivers settings to Windows, macOS, iOS and Android devices, although not every setting is available on every operating system.

## Cost and licensing

**Licence.** Microsoft's Purview service description says that advanced DLP policy tip support, which makes additional DLP conditions, advanced classifiers, the oversharing dialog and more available, requires one of these licences for each scoped user: Microsoft 365 E5/A5/G5; Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW; or Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. That section is headed for Outlook for Microsoft 365. The support matrix for Outlook mobile says sensitive information type support "Varies by version and license" and points to the Outlook for Microsoft 365 reference. A licence list written for Outlook mobile is not yet published.

**Meter.** The service description lists licences for advanced policy tips and names no meter or per-use charge. No separate meter is documented for policy tips on Outlook mobile at the time of writing (November 2026).

**Indirect costs.** Admin time to create a Cloud Policy configuration and pilot it, a licence check for every user you scope, and user communication and help-desk preparation. Cloud Policy needs a supported licence on each targeted user.

## Scope

**Who.** Users and groups an administrator targets in a Cloud Policy configuration; the Learn page says policies can be targeted to individuals or groups. Targets must be user objects in Microsoft Entra ID with a supported licence, and Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps.

**Clouds and admin centre.** The roadmap record lists GCC, GCC High and DoD for this item; Worldwide is item 491016. Cloud Policy documents its admin centre at https://config.office.com for commercial and US Government customers, https://config.office365.us for GCC High and https://config.apps.mil for DoD.

**Apps.** Outlook for Android and iOS (the Learn page also covers macOS). Policy tips aren't supported in the Word, Excel and PowerPoint mobile apps, according to the DLP policy tips reference.

**Rollout.** Status is Launched per the roadmap record. The tip UI stays off for a user until the setting is Enabled for them.

## Governance guidance

### Before rollout
- Check that every user you plan to scope holds one of the licences in the Purview service description for advanced policy tips, and that Cloud Policy supports their plan.
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
<tr><td data-label="Control"><strong>Whether DLP policy tips appear in Outlook for Android and iOS for chosen users</strong><br><small>Group</small><br><small class="controls__note">Default Disabled. Role: Office Apps Administrator recommended. Setting named on the Outlook mobile policy tip reference page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP rule shows a policy tip and what it says</strong><br><small class="controls__note">Policy tips are configured per rule. Page shows the wizard for Exchange email; tip text is plain text up to 256 characters.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom › Create or customize advanced DLP rules › Create rule › User notifications <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -NotifyUser Owner -NotifyPolicyTipCustomText &quot;&lt;text&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
risk: Low. Learn says the policy tip UI is turned off by default in Outlook mobile, so nothing new reaches users until an administrator enables the Cloud Policy setting; the feature adds a warning, not a new data path.
cost: Medium. Advanced policy tip support needs a licence for each scoped user (Microsoft 365 E5/A5/G5, a Purview suite or the E5 Information Protection & Governance add-on); no separate meter is published.
impact: Medium. Only the users or groups an administrator targets will see tips in Outlook for Android and iOS, so the people who notice are those in the scope you choose.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[0].ui / admin-path: The linked Cloud Policy overview documents the printed creation path through Configure Settings to 'Enable Purview Data Loss Prevention (DLP) policy tips in Outlook'. | Found: Searched: Cloud Policy service Enable Purview DLP policy tips Outlook Microsoft Graph PowerShell API policy configuration. Opened overview-cloud-policy and dlp-outlook-mobile-policy-tip-ref: the overview gives the wizard but never names the deciding setting; the mobile page does. | Fix: Keep the path, which is supported by the two cited pages together, but change controls[0].ui.docs and the rendered row's Learn link to https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref, which documents the control's own setting. Retain the Cloud Policy overview in sources for the wizard steps.
- [contradicted, blocker] controls[1].ui / admin-path: The policy-creation route reaches the tip control via Custom > Custom > Create or customize advanced DLP rules > Create rule > User notifications without a location choice. | Found: Select Full directory under Admin units. Select only the Exchange email location. Select Next. On the Define policy settings page, select Create or customize advanced DLP rules. | Fix: Replace the front-matter and rendered route with 'Data loss prevention > Policies > + Create policy > Custom > Custom > Admin units > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips' in Microsoft Purview portal, citing https://learn.microsoft.com/purview/dlp-osp-get-started. | Source: https://learn.microsoft.com/purview/dlp-osp-get-started
- [contradicted, blocker] Risk assessment: Change & support / behaviour: The default policy tip text for Outlook messages is 'Your email message conflicts with a policy in your organization.' | Found: Default text for policy tips in email ... Your email conflicts with a policy in your organization. | Fix: Replace the sentence's quoted text with 'Your email conflicts with a policy in your organization.' The version containing 'message' belongs to the article's default email notification table, not its policy tip table. | Source: https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / record: The same feature has a separate roadmap item numbered 491016. | Found: "id": 491016; "title": "Microsoft Purview Compliance Portal: DLP Policy Tip Support in Outlook Mobile" | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=491016 to sources as a roadmap source titled 'Microsoft 365 Roadmap 491016'; its record supports the separate item's status, target, preview and cloud.
- [supported, minor] title; summary; What's changing; Scope / behaviour: Outlook for Android and iOS supports Purview DLP policy tips, and the mobile reference also covers macOS. | Found: Outlook for Android, iOS, and macOS now supports data loss prevention (DLP) policy tips with commonly used predicates and exceptions, advanced classifiers, and override capabilities. | Fix: Add: 'The mobile reference documents support for Android, iOS and macOS, although the troubleshooting article still says policy tips are not supported for "Outlook for Mac iOS clients".' The conflicting article is https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/data-loss-prevention-policy-tips. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [supported, minor] What's changing; Risk assessment: Data exposure / behaviour: The mobile reference says all actions and information types for email communications are supported. | Found: All actions and information types for email communications are supported. | Fix: Add: 'The general support matrix describes Outlook mobile conditions and actions as a subset and links to the Outlook for Microsoft 365 reference, whereas the mobile reference says all actions and information types for email communications are supported.' Cite https://learn.microsoft.com/purview/dlp-policy-tips-reference. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [unsupported, minor] rationale: risk / behaviour: The feature introduces no new data path. | Found: Searched: Outlook mobile DLP policy tips new data access data processing data path warning. Opened mobile policy tip reference and notifications reference; they document tips and rule actions, not whether enabling mobile tips introduces a new data path. | Fix: Remove 'not a new data path' from the risk rationale. Keep the supported explanation that the policy tip UI is off by default until an administrator enables it.
-->
