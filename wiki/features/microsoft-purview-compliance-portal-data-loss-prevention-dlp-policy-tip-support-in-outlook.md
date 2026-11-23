---
title: "Outlook for Mac: Purview DLP policy tips (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-dlp-policy-tip-support-in-outlook"
roadmapId: 484854
topic: "governance"
products: ["Microsoft Purview"]
summary: "Outlook for Mac can show Purview DLP policy tips while a user writes an email. Learn says the tip UI is off until an admin enables a Cloud Policy setting, so choose which groups see it first."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Cloud Policy supports most Microsoft 365 plans that include Microsoft 365 Apps; targeted users need a supported licence. The Purview service description lists Microsoft 365 E5/A5/G5/E3/A3/G3 and Exchange Online Plan 2 among licences for DLP for Exchange Online. A Mac-specific advanced policy tip licence list is not yet published."
audiences: ["security","compliance","m365-admin","change-adoption"]
tags: ["dlp","outlook","macos","purview","exchange","cloud-policy","sensitive-information-types","sensitivity-labels","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 484854"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=484854"
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
  - title: "Resolve issues that affect DLP policy tips"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/data-loss-prevention-policy-tips"
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
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["outlook-purview-dlp-wait-on-send-support-for-mac","microsoft-purview-compliance-portal-dlp-policy-tip-support-in-outlook-mobile","cloud-policy","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-for-mac","sensitive-information-types"]
controls:
  - governs: "Whether DLP policy tips appear in Outlook for Mac for chosen users or groups"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "Default Disabled. Role: Office Apps Administrator recommended; Security Administrator and Global Administrator also supported. Steps are on the Cloud Policy overview page."
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
    note: "Policy tips are set per rule. The UI path is the Exchange email walkthrough; tip text is plain text up to 256 characters."
  - governs: "Whether a rule lets the sender override the policy tip"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom > Admin units > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -NotifyAllowOverride WithJustification"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    note: "Per rule. Walkthrough option under Policy tips: Allow override from M365 services. Learn says set BlockAccess to true with a suitable BlockAccessScope, or the user finds no override option."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-23"
    note: "First briefing for the US Government (GCC, GCC High, DoD) roadmap item: Outlook for Mac DLP policy tips are off by default and enabled through a Cloud Policy setting; Learn pages disagree on Mac support."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 58
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "a1d0e652c942f7a4201cae28b6b3970d"
---

## What's changing

Outlook for Mac can show Microsoft Purview Data Loss Prevention (DLP) policy tips: a notice inside the message being written when it matches a DLP rule. The roadmap description says users see the tip in the mail tip UI and can remove non-compliant recipients or override the policy if necessary. The Learn page for this feature says Outlook for Android, iOS and macOS "now supports data loss prevention (DLP) policy tips with commonly used predicates and exceptions, advanced classifiers, and override capabilities".

The same page says the policy tip UI is turned off by default, so that administrators can test and train users before deployment. It is enabled with the policy "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" in the Microsoft 365 Apps admin center, which can be targeted to individuals or groups. The page says all actions and information types for email communications are supported, and lists custom sensitive information types (SITs), sensitivity labels and trainable classifiers as supported.

Other Microsoft pages read differently, and this briefing reports both. The general DLP policy tips support matrix describes Outlook Mac conditions and actions as a subset, and sensitive information type support as varying by version and licence. The older troubleshooting article still says policy tips are not supported for Outlook for Mac iOS clients and suggests Outlook on the web as a workaround. Pilot on real Outlook for Mac clients before relying on either page.

The roadmap record lists the item as Launched with a target of July CY2026, release phases General Availability and Preview, and the clouds GCC, GCC High and DoD. It lists the platform as Web, although the title and the Learn page concern Outlook for Mac. The record gives no preview date.

## Why it matters

Because Learn documents the tip UI as off until you enable the setting, Outlook for Mac users see no tips unless an administrator acts, so rollout is a choice about which groups go first and when users are told. Microsoft frames the default as time to test and train, and a pilot group is the practical way to use it.

The benefit is that a sender sees the conflict while still writing the message. The cost is support load and a decision about override: Learn says the override option is per rule and overrides all of the actions in the rule, so each rule that allows it lets a Mac sender proceed.

## Risk assessment

**Data exposure**
- Tips are driven by DLP rules the tenant already has: Learn says DLP policy tip settings are configured in DLP policies. With the Cloud Policy setting at its default (Disabled), Learn says policy tips aren't shown. Whether a rule's other actions behave differently on Outlook for Mac while the tip UI is off is not stated on the page (see Open questions).
- A rule that allows override lets the sender proceed; Learn says a business justification, where required, is logged and can be viewed in the DLP reports in the Reports section of the portal.

**Security & identity**
- The setting is delivered through Cloud Policy, which applies only to user objects that are in Microsoft Entra ID and hold a supported licence. A user outside the targeted group, or without a supported licence, is outside its reach.
- When content matches several rules, only the policy tip from the most restrictive rule with the highest priority is shown, so the tip on a Mac may not come from the rule you expect.

**Autonomy & actions**
- No change in autonomy: the roadmap description has the user remove recipients or override, and any blocking is set in the DLP rule itself.

**Change & support**
- The Learn pages disagree on Outlook for Mac support (mobile reference: supported; troubleshooting article: not supported for Outlook for Mac iOS clients). Test before telling the help desk what to expect.
- Custom policy tip text is plain text of up to 256 characters, with no HTML or tokens. Cloud Policy says not all policy settings are available for all operating systems.

## Cost and licensing

**Licence.** The Cloud Policy overview says Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps, and that user objects must be in Microsoft Entra ID with a supported licence assigned. The Purview service description lists Microsoft 365 E5/A5/G5/E3/A3/G3 and Exchange Online Plan 2 among the licences that give rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business. Cloud Policy licensing alone does not establish DLP entitlement, so check both for each targeted user.

**Background: Outlook for Microsoft 365 (desktop).** The same service description says advanced DLP policy tip support (additional conditions, advanced classifiers, the oversharing dialog) needs, for each scoped user, Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, or Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. That list is written for Outlook for Microsoft 365 and is not presented as the Outlook for Mac requirement. A licence list specific to Outlook for Mac policy tips is not yet published.

**Meter.** The service description and the feature page publish no meter or per-use charge for policy tips. The remaining costs are admin time to create and pilot a Cloud Policy configuration, a licence check per targeted user, and user communication.

## Scope

**Who.** Users in the Microsoft Entra groups an administrator targets in a Cloud Policy configuration; Learn says policies can be targeted to individuals or groups and apply to user objects only.

**Clouds and admin centre.** The roadmap record lists GCC, GCC High and DoD. The Cloud Policy overview gives the Microsoft 365 Apps admin center at https://config.office.com for commercial and US Government customers, https://config.office365.us for GCC High and https://config.apps.mil for DoD.

**Apps and platforms.** Outlook for macOS, per the reference page that covers Outlook for Android, iOS and macOS. The roadmap record lists the platform as Web. The Outlook for Mac versions and licences required are not stated on that page.

**Rollout.** The record gives the status as Launched. The tip UI stays off for a user until the setting is Enabled for them.

## Governance guidance

### Before rollout
- Pick a pilot Microsoft Entra group of Outlook for Mac users and confirm each member holds a licence that Cloud Policy and DLP for Exchange Online accept.
- List the DLP rules in the Microsoft Purview portal that have user notifications and policy tips switched on, and decide which of them Mac senders should see.
- Name an owner with the Office Apps Administrator role for the Cloud Policy configuration.
- Plan to test on a real Outlook for Mac client, because the Learn pages disagree on whether it is supported.

### At rollout
- Create a Cloud Policy configuration scoped to the pilot group in the Microsoft 365 Apps admin center and set "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" to Enabled.
- Set the tip text on each rule in plain text of no more than 256 characters, and set the override option only on rules where a sender may proceed.
- Tell pilot users what the tip looks like and what override does for each rule.

### After rollout
- Compare the tip each pilot user saw with the rule you expected, remembering that only the most restrictive, highest priority matching rule's tip is shown.
- Review override justifications in the DLP reports in the Reports section of the Microsoft Purview portal.
- Widen the Cloud Policy scope to further groups once tip text and override settings are right.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP policy tips appear in Outlook for Mac for chosen users or groups</strong><br><small>Group</small><br><small class="controls__note">Default Disabled. Role: Office Apps Administrator recommended; Security Administrator and Global Administrator also supported. Steps are on the Cloud Policy overview page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP rule shows a policy tip and what it says</strong><br><small class="controls__note">Policy tips are set per rule. The UI path is the Exchange email walkthrough; tip text is plain text up to 256 characters.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom › Admin units › Full directory › Exchange email › Define policy settings › Create or customize advanced DLP rules › Create rule › User notifications › Policy tips <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -NotifyUser Owner -NotifyPolicyTipCustomText &quot;&lt;text&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a rule lets the sender override the policy tip</strong><br><small class="controls__note">Per rule. Walkthrough option under Policy tips: Allow override from M365 services. Learn says set BlockAccess to true with a suitable BlockAccessScope, or the user finds no override option.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom › Admin units › Full directory › Exchange email › Define policy settings › Create or customize advanced DLP rules › Create rule › User notifications › Policy tips <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -NotifyAllowOverride WithJustification</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Whether tips appear on Outlook for Mac is decided by the Cloud Policy setting, which can target individuals or groups. What the tip says and whether the user can override are decided per DLP rule in the Microsoft Purview portal. The rule defines when a tip is shown; the Cloud Policy setting decides whether the UI appears.

Cloud Policy lists Office Apps Administrator (recommended), Security Administrator and Global Administrator as its supported roles. To create DLP policies the Microsoft Purview page lists membership of Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator. Microsoft Learn documents no PowerShell or Graph operation for the Cloud Policy setting at the time of writing (November 2026).

The override option sits on the rule: Learn says to set BlockAccess to true with a suitable BlockAccessScope when using NotifyAllowOverride, otherwise the user doesn't find an override option.

## Open questions

- Which Outlook for Mac versions and which licences does the policy tip UI require? The reference page for Outlook for Android, iOS and macOS states neither; watch that page and the Purview service description.
- Which Learn page is current on Outlook for Mac support: the reference page (supported, all email actions and information types), the support matrix (subset) or the troubleshooting article (not supported)? Watch those three pages.
- When the Cloud Policy setting is Disabled, do other actions in a DLP rule still apply to mail sent from Outlook for Mac? The reference page states only that policy tips aren't shown.
- Will Microsoft document a PowerShell, Graph or other API for the Cloud Policy setting? Watch the Cloud Policy overview page.

<!-- rationale
risk: Low. Learn says the policy tip UI is off by default in Outlook for Android, iOS and macOS until an administrator enables a Cloud Policy setting, and the tips draw on DLP rules the tenant already holds.
cost: Low. The pages read show licences but no meter for this feature; the known cost is admin time, a licence check for targeted users and user communication. A Mac-specific licence list is not yet published.
impact: Medium. Outlook for Mac users in the groups an administrator targets see tips while composing, with whatever text and override choices the DLP rules define; users outside the scope see no change.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The printed Purview Custom-policy wizard path reaches User notifications > Policy tips for an Exchange email rule. | Found: Select Custom from the Categories list. Select Custom from the Regulations list. ... Select Full directory under Admin units. ... Set the User notifications toggle to On. Select Policy tips | Fix: Include the omitted list headings in controls[1].ui and its table copy: 'Data loss prevention > Policies > + Create policy > Categories > Custom > Regulations > Custom > Admin units > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips'. The cited https://learn.microsoft.com/purview/dlp-osp-get-started supports this route. | Source: https://learn.microsoft.com/purview/dlp-osp-get-started
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The printed Purview rule path reaches the page containing the policy-tip override choice. | Found: Set the User notifications toggle to On. Select Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only). If already selected, uncheck the Allow override from M365 services option. | Fix: Use the complete walkthrough route to the row's deciding option in controls[2].ui and its table copy: 'Data loss prevention > Policies > + Create policy > Categories > Custom > Regulations > Custom > Admin units > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only) > Allow override from M365 services'. Keep the note identifying this as the Exchange email walkthrough, not a claim that Mac supports the oversharing dialog. The route is documented at https://learn.microsoft.com/purview/dlp-osp-get-started. | Source: https://learn.microsoft.com/purview/dlp-osp-get-started
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells administrators to review override justifications, but the controls table has no reporting row for that step. | Found: Review override justifications in the DLP reports in the Reports section of the Microsoft Purview portal. The table covers only tip-UI availability, rule tip text and rule overrides. | Fix: Remove the After rollout checklist bullet 'Review override justifications in the DLP reports in the Reports section of the Microsoft Purview portal.' Its reporting fact can remain in Risk assessment; do not add a control row during this correction.
-->
