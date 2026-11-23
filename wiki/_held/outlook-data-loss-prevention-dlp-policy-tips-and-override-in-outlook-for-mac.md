---
title: "Outlook for Mac: DLP policy tips and override"
slug: "outlook-data-loss-prevention-dlp-policy-tips-and-override-in-outlook-for-mac"
roadmapId: 558689
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for Mac now supports Purview DLP policy tips with override. Microsoft documents the tip UI as off by default; an admin turns it on in Cloud Policy and sets override per DLP rule."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "May CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn's Purview service description lists the licences that cover DLP for Exchange Online. The Mac reference says support varies by version and licence and gives no Mac-specific licence list."
audiences: ["compliance","security","m365-admin","end-user"]
tags: ["outlook","dlp","purview","macos","cloud-policy","exchange"]
sources:
  - title: "Microsoft 365 Roadmap 558689"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558689"
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
  - title: "Get started with oversharing pop-ups in Outlook"
    url: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
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
videos: []
related: ["outlook-purview-dlp-wait-on-send-support-for-mac","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-for-mac","cloud-policy","sensitivity-labels"]
controls:
  - governs: "Whether DLP policy tips appear in Outlook for Mac"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook"
      docs: "https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref"
    api: null
    note: "Default Disabled. Target individuals or groups. Roles: Office Apps Administrator (recommended), Security Administrator or Global Administrator. Governs the tip UI, not the DLP rules."
  - governs: "Whether a DLP rule lets users override its policy tip, and whether a justification is required"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Allow override from M365 services"
      docs: "https://learn.microsoft.com/purview/dlp-osp-get-started"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -BlockAccess $true -NotifyAllowOverride WithJustification"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    note: "Path read on the Outlook oversharing pop-up page; the Mac reference gives no separate Mac path. Override is per rule. WithoutJustification disables the justification buttons."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-23"
    note: "First briefing: policy tip UI is documented as off by default on Mac and enabled through Cloud Policy; override is set per DLP rule."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 52
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "728002b8d4dedafbe5940e64ae8307c5"
---

## What's changing

Outlook for Mac now supports Microsoft Purview Data Loss Prevention (DLP) policy tips with an override option. According to the roadmap item, when sensitive content is detected users are alerted with inline tips or pop-ups, based on rules an administrator configures. Microsoft's Learn reference for Outlook for Android, iOS and macOS says these clients support policy tips "with commonly used predicates and exceptions, advanced classifiers, and override capabilities".

The policy tip UI is off by default. Learn says this is so administrators can test and train users before deployment. To switch it on, an administrator enables the Microsoft 365 Apps admin center policy "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" (Cloud Policy), which can be targeted at individuals or groups. The reference lists all actions and information types for email as supported, and all custom and exact data match (EDM) sensitive information types, sensitivity labels, retention labels and trainable classifiers.

Two points differ between pages. The reference's oversharing dialog section names Outlook for Android and iOS and does not name macOS, so whether Mac shows a pre-send pop-up of that kind is open. Separately, the Learn troubleshooting article "Resolve issues that affect DLP policy tips" still says policy tips are currently not supported for Outlook for Mac iOS clients, while the platform reference documents Mac support. Both are reported here as Microsoft states them.

The roadmap record gives the status as Launched, with a target of May CY2026 and a preview date of November CY2025. It lists the release phases General Availability and Preview, the Mac platform and the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

For a service owner this is a new way for DLP rules to reach Mac senders: a rule that already evaluates Exchange email can now warn a Mac user, and where the rule allows it, let them override. Because Learn documents the tip UI as off by default, a tenant that does nothing gets no policy tip UI on Mac from this change. The decisions are when to enable it, for which Mac users, and which rules may allow override.

Override deserves the most attention. Learn says the override option is per rule and overrides all of the actions in that rule, so a rule that allows override on content you consider high risk lets the sender proceed. Where a justification is required, Learn says it is logged and can be viewed in the DLP reports in the portal's Reports section.

## Risk assessment

**Data exposure**
- Until the Cloud Policy setting is enabled, Mac senders see no policy tip UI, because Learn documents it as off by default. Enable it for a pilot group first.
- A rule that allows override lets the sender continue past the warning. Learn says an override applies to all actions in the rule and, where several rules match, overriding the most restrictive rule also overrides the others. Allow override only on rules where that outcome is acceptable.

**Security & identity**
- The setting is delivered by Cloud Policy to users in the groups you target, and DLP rules are managed in the Microsoft Purview portal by DLP role holders. The pages read describe no new permission or identity for the feature.

**Autonomy & actions**
- The user chooses whether to override. The actions that follow a match are the ones the DLP rule defines; the pages read describe no further automated action.

**Change & support**
- Two Microsoft pages disagree on Mac support (see What's changing), so help desk staff may find the older troubleshooting advice. Tell them which page your tenant follows.
- A rule set to allow override with a justification option shows the override only if BlockAccess is also true; otherwise Learn says the user does not find an override option. Test each rule before widening the scope.

## Cost and licensing

Learn's reference for Android, iOS and macOS has a "Licensing requirements" heading but lists no licences under it. Its support matrix says policy tip support on Outlook Mac "Varies by version and license". A Mac-specific licence requirement is not yet published.

The Microsoft Purview service description lists the licences that give users the rights to DLP for Exchange Online: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2) and Exchange Online Plan 2, among others. For advanced DLP policy tips in Outlook for Microsoft 365, which adds more conditions, advanced classifiers and the oversharing dialog, it lists Microsoft 365 E5/A5/G5, the Microsoft Purview Suite and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The Learn page on oversharing pop-ups says they require a Microsoft 365 E5 subscription. Learn does not say which of these tiers applies to Mac, so confirm before targeting E3 users.

No meter or per-use charge for Mac policy tips is documented at the time of writing (November 2026). The indirect cost is admin time to build rules, pilot and train users.

## Scope

The roadmap record lists the Mac platform and the Worldwide (Standard Multi-Tenant) cloud, and no other cloud. The Learn reference covers Outlook for Android, iOS and macOS together. The page does not state a minimum Outlook for Mac version.

The tip UI setting is targeted at individuals or groups through Cloud Policy, which Learn says offers policy settings for devices running Windows, macOS, iOS and Android, although not every setting is available on every operating system. Cloud Policy roles are Office Apps Administrator (recommended), Security Administrator or Global Administrator. DLP rules are created by members of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role groups.

## Governance guidance

### Before rollout
- Review which DLP rules cover the Exchange email location and which allow override, in the Microsoft Purview portal (see the second row of the controls table).
- Check that every rule that should offer override also sets BlockAccess to true, as Learn requires for the override option to appear.
- Confirm licences for the Mac users you plan to target against the Purview service description and the Outlook policy tip reference, because Learn says support varies by licence.
- Create a Microsoft Entra group of pilot Mac users for the Cloud Policy configuration.

### At rollout
- Create a Cloud Policy configuration in the Microsoft 365 Apps admin center that enables "Enable Purview Data Loss Prevention (DLP) policy tips in Outlook" for the pilot group (first row of the controls table), using an Office Apps Administrator or another listed role.
- Send test messages that match each rule on a Mac and confirm the tip, the override choice and any justification prompt behave as designed.
- Brief pilot users on when they may override and what justification to give.

### After rollout
- Review override and justification records in the DLP reports in the Reports section of the Microsoft Purview portal, and tighten rules that users override often.
- Widen the Cloud Policy scope once the pilot results are acceptable.
- Re-read the Learn reference for Outlook for Android, iOS and macOS for Mac version, licence and dialog details, which are not yet published there.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP policy tips appear in Outlook for Mac</strong><br><small>User</small><br><small class="controls__note">Default Disabled. Target individuals or groups. Roles: Office Apps Administrator (recommended), Security Administrator or Global Administrator. Governs the tip UI, not the DLP rules.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Configure Settings › Enable Purview Data Loss Prevention (DLP) policy tips in Outlook <a href="https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP rule lets users override its policy tip, and whether a justification is required</strong><br><small>Tenant</small><br><small class="controls__note">Path read on the Outlook oversharing pop-up page; the Mac reference gives no separate Mac path. Override is per rule. WithoutJustification disables the justification buttons.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom › Full directory › Exchange email › Define policy settings › Create or customize advanced DLP rules › Create rule › User notifications › Allow override from M365 services <a href="https://learn.microsoft.com/purview/dlp-osp-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -BlockAccess $true -NotifyAllowOverride WithJustification</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Cloud Policy setting decides whether the policy tip UI appears for the users it targets; the DLP rule decides the tip text, whether override is offered and the actions applied. Learn describes the setting as controlling the tip UI and does not describe it as changing which rules are evaluated. Microsoft Learn documents no PowerShell or Graph operation for Cloud Policy settings at the time of writing (November 2026), so the first row's automation side shows Not yet documented.

The override call creates a rule. Learn says that for NotifyAllowOverride set to WithoutJustification, WithJustification or FalsePositives, BlockAccess must be true. The second row's portal path is read on the Learn page for oversharing pop-ups in Outlook; the Mac reference lists override capabilities but gives no separate Mac path.

## Open questions

- Does Outlook for Mac show a pre-send oversharing pop-up, as Learn describes for Outlook for Android and iOS, or only inline policy tips? Watch the Learn reference for Outlook for Android, iOS and macOS.
- Which licence tier do Mac users need, given that Learn says support varies by version and licence? Watch the Purview service description.
- Which Outlook for Mac version is the minimum? The reference page states none at the time of writing.
- Which Microsoft page is current on Mac policy tip support, the platform reference or the troubleshooting article? Watch the troubleshooting article for a correction.

<!-- rationale
risk: Low. Learn documents the policy tip UI as off by default in Outlook for macOS, so nothing changes for users until an admin enables it; the feature warns users and adds no new data access.
cost: Low. Learn documents no meter or separate price for Mac policy tips; the cost is admin time plus the Purview DLP licences, with advanced Outlook policy tips listed for E5-class licences.
impact: Low. Only Mac Outlook users in the groups an admin targets see the tips, and only when they match a DLP rule; admins choose the pilot scope.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The cited Purview procedure reaches Allow override from M365 services directly after User notifications. | Found: Set the User notifications toggle to On. Select Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only). If already selected, uncheck the Allow override from M365 services option. | Fix: Replace the path with 'Data loss prevention > Policies > + Create policy > Custom > Custom > Full directory > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > User notifications > Policy tips > Show the policy tip as a dialog for the end user before send (available for Exchange workload only) > Allow override from M365 services', as documented at https://learn.microsoft.com/purview/dlp-osp-get-started. Retain the note identifying this as the oversharing procedure rather than a separate documented Mac dialog path. | Source: https://learn.microsoft.com/purview/dlp-osp-get-started
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: The platform reference lists all actions and information types for email communications as supported. | Found: All actions and information types for email communications are supported. | Fix: After this sentence add: 'The general policy-tip support matrix instead describes Outlook Mac conditions and actions as a subset and sensitive information types as varying by version and licence.' Both pages are already cited; the differing matrix is at https://learn.microsoft.com/purview/dlp-policy-tips-reference. | Source: https://learn.microsoft.com/purview/dlp-outlook-mobile-policy-tip-ref
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope; Governance guidance; Open questions / licensing: The reference matrix says Outlook Mac support varies by version and licence. | Found: Outlook Mac ... Sensitive information types supported ... Varies by version and license. ... Conditions and actions supported ... Subset. | Fix: Replace 'The Mac reference says support varies by version and licence' in licensing.notes with 'The general policy-tip support matrix says Outlook Mac sensitive information type support varies by version and licence'. In Cost and licensing replace 'Its support matrix says policy tip support on Outlook Mac "Varies by version and license"' with 'The general policy-tip support matrix says sensitive information type support on Outlook Mac "Varies by version and license"'. The matrix is at https://learn.microsoft.com/purview/dlp-policy-tips-reference. | Source: https://learn.microsoft.com/purview/dlp-policy-tips-reference
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Cloud Policy route runs through Customization, Policy Management, a policy configuration and Configure Settings to the named DLP policy-tip setting. | Found: Under Customization, select Policy Management. ... On the Configure Settings page, select the policies that you want to include in the policy configuration. | Fix: Use the fully documented creation route: 'Customization > Policy Management > Policy configurations > Create > Choose the scope > Configure Settings > Enable Purview Data Loss Prevention (DLP) policy tips in Outlook'. The overview supplies the wizard route and the existing docs URL supplies the final policy setting; retain both existing sources. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] Governance controls: final paragraph / command: Learn describes NotifyAllowOverride values WithoutJustification, WithJustification and FalsePositives as requiring BlockAccess true. | Found: If you set the NotifyAllowOverride action to WithoutJustification or WithJustification or FalsePositives, make sure BlockAccess is set to true and BlockAccessScope has appropriate value. | Fix: Replace this sentence with 'Learn says that for NotifyAllowOverride set to WithoutJustification or WithJustification, BlockAccess must be true and BlockAccessScope must have an appropriate value.' The notification page writes FalsePositives, but the cited New-DlpComplianceRule reference lists FalsePositive instead; removing the disputed value avoids teaching an invalid parameter value. | Source: https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips
- [unsupported, minor] rationale: risk / behaviour: The feature adds no new data access. | Found: Searched: Outlook Mac DLP policy tips new permissions identity automated actions data access. Opened mobile policy-tip reference, notification reference, oversharing setup and Cloud Policy overview; none states that Mac policy tips add no new data access. | Fix: Remove 'and adds no new data access' from the risk rationale. Keep the supported disabled-default rationale.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist asks administrators to review DLP reports, but the controls table contains no reporting row. | Found: After rollout: 'Review override and justification records in the DLP reports in the Reports section'. Controls table: 'Whether DLP policy tips appear' and 'Whether a DLP rule lets users override'; no reporting row. | Fix: The After rollout DLP-report review step has no controls-table row. Do not add a row during correction; remove that checklist bullet to align the checklist with the existing table, leaving the supported reporting explanation in Why it matters.
-->
