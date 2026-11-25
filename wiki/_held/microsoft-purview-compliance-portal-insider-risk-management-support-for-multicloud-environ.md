---
title: "Microsoft Purview Insider Risk Management: multicloud risk indicators"
slug: "microsoft-purview-compliance-portal-insider-risk-management-support-for-multicloud-environ"
roadmapId: 475858
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans cloud risk indicators for Insider Risk Management covering Azure, AWS, Box, Dropbox, Google Drive and GitHub. Learn documents them as opt-in and billed pay-as-you-go, so plan before enabling."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Insider Risk Management needs a supported subscription with licences assigned to users; cloud indicators also need pay-as-you-go billing, which Learn says is billed through an Azure subscription. Unit prices are not stated on the Learn pages read."
audiences: ["compliance","security","finops"]
tags: ["insider-risk-management","purview","multicloud","pay-as-you-go","defender-for-cloud-apps","third-party-apps","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 475858"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=475858"
    kind: "roadmap"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Use reports in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Connect apps to get visibility and control with Microsoft Defender for Cloud Apps"
    url: "https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-pay-as-you-go-model-for-other-generative-ai-apps","microsoft-purview-compliance-portal-insider-risk-management-microsoft-fabric-risk-indicato","microsoft-purview-compliance-portal-insider-risk-management-generative-ai-apps-activities"]
controls:
  - governs: "Which cloud indicators are available to Insider Risk Management policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Cloud storage and cloud service indicators sit under Built-in indicators; they require apps connected in Defender and pay-as-you-go billing."
  - governs: "Which cloud apps are connected so their activity can reach Insider Risk Management"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Cloud Apps > Connected apps > Connect an app"
      docs: "https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps"
    api: null
    note: "Learn gives each app its own connector guide; the connection is a prerequisite for the cloud indicators, not an Insider Risk Management setting."
  - governs: "Pay-as-you-go usage of Insider Risk Management"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Shows usage; the page lists Insider Risk Management as not pausable. The Usage center is in preview. Role requirements are on the linked page."
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management Admins role group can also configure policies and settings."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-07-11T22:00:02"
changes:
  - date: "2026-11-25"
    note: "First briefing: Learn already documents the cloud indicators as preview and pay-as-you-go, while the roadmap still shows In development with a June CY2026 target."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 59
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "d344b156a36f430e0fc41dc036871391"
---

## What's changing

The roadmap item says Insider Risk Management will extend its detection into multicloud environments with ready-to-use risk indicators for Azure, AWS and SaaS apps including Box, Dropbox, Google Drive and GitHub, and that organisations can use them in data theft and data leaks policies. The record lists General Availability for the Web, in GCC, GCC High and DoD, with status In development and a target of June CY2026. That target month has passed at the time of writing (25 November 2026) while the record still shows In development; it was last modified on 11 July 2025.

Microsoft Learn already documents cloud indicators for Insider Risk Management, marked preview. Cloud storage indicators cover Google Drive, Box and Dropbox, and cloud service indicators cover Amazon S3 and Azure (Storage and SQL Server). The Learn pages read name no GitHub indicator, so the roadmap and Learn differ on the app list and on status.

Learn says all global indicators are disabled by default and that an admin must select indicators before a policy can use them. To select the cloud indicators, you must first connect the relevant cloud apps in Microsoft Defender. Learn also says these indicators require pay-as-you-go billing.

## Why it matters

For a compliance or security owner, this adds activity in non-Microsoft locations to the signals Insider Risk Management scores, so a departing-user or data-leak policy can reflect what a user did in Box, Dropbox, Google Drive, Amazon S3 or Azure as well as in Microsoft 365. Learn documents the indicators as off until selected, so if nobody acts the cloud indicators are not in use; the roadmap record states no rollout default of its own.

For a finance owner, the change is a new metered cost. Learn bills these indicators by usage through an Azure subscription, and the Usage center lists Insider Risk Management as not pausable, so agree who owns the Azure bill and the alert thresholds before anyone ticks the indicators.

## Risk assessment

**Data exposure**
- Once apps are connected and indicators selected, Learn says Insider Risk Management processes user activities for the non-Microsoft 365 indicators in data theft and data leak policies to generate insights, alerts and cases. Analysts then see user activity from Box, Dropbox, Google Drive, Amazon S3 and Azure. Indicators can be turned off per app in settings, for example Box and Google Drive but not Dropbox.
- The roadmap record says users are pseudonymised by default and that role-based access controls and audit logs apply.

**Security & identity**
- The cloud indicators depend on a connection made in Microsoft Defender (Cloud Apps > Connected apps). Learn says each cloud app has its own enablement process with its own permissions and authentication steps, so the people who can connect apps there decide which activity can reach Insider Risk Management.

**Autonomy & actions**
- Learn says policy indicators determine a risk score for an in-scope user, which analysts review as alerts. Confirm in the Learn pages for each indicator what is detected before relying on it: discovery, collection, exfiltration and deletion for cloud storage apps; defence evasion, exfiltration, deletion and privilege escalation for Amazon S3 and Azure.

**Change & support**
- Billing follows usage, so a low threshold on a busy app can raise both alert volume and the Azure bill. The Usage center lists Insider Risk Management as not pausable, and the Usage center itself is marked preview.
- Learn marks the cloud indicators as preview, while the roadmap targets General Availability; expect behaviour and app coverage to change.

## Cost and licensing

**Licence.** Learn says administrators must confirm the organisation has a supported subscription for Insider Risk Management and assign the appropriate licences to users (Get started with Insider Risk Management). That page names no plan in the section read.

**Meter.** Learn says the cloud indicators require pay-as-you-go billing. The billing models page says the mechanism is Azure based, so the Microsoft 365 tenant must be associated with an active Azure subscription, and a bill is generated at the end of the month. For Insider Risk Management, a processing unit represents the compute required to process 10,000 such user activities, billed on data security processing units, and the page's table gives the unit of measure as a data security processing unit measured daily. Cloud storage apps (Box, Dropbox, Google Drive) and cloud services (AWS, Azure) are billed this way.

**Not yet published.** The billing models page states no price per processing unit; it links to Microsoft's pay-as-you-go pricing page. The Usage center page describes no spending limit for Insider Risk Management, and lists it as not pausable.

**Indirect cost.** Admin time to connect apps in Defender, tune thresholds and review the extra alerts.

## Scope

**Who and what.** Insider Risk Management data theft and data leaks policies are the policy types the roadmap names. Learn's policy templates page says the data theft by departing users template can include cloud indicators for Box, Dropbox, Google Drive, Amazon S3 and Azure.

**Roles.** Learn lists the Insider Risk Management and Insider Risk Management Admins role groups as able to configure policies and settings.

**Clouds and platform.** The roadmap record lists GCC, GCC High and DoD, and the Web platform. The Learn pages on cloud indicators do not say which clouds they apply to, and the GCC High plan page's Insider Risk Management rows name no cloud storage or cloud service indicators.

**Prerequisites.** Apps connected in Microsoft Defender, indicators selected in Insider Risk Management settings, and pay-as-you-go billing enabled.

## Governance guidance

### Before rollout
- Decide who owns the Azure subscription that the pay-as-you-go bill will go to, and confirm the tenant is associated with it (billing models page).
- Agree with the app owners for Box, Dropbox, Google Drive, Amazon S3 and Azure which of them to connect in Microsoft Defender (Cloud Apps > Connected apps), since only connected apps offer indicators.
- Check the Insider Risk Management role groups so only intended staff can change policies and settings.
- Ask your Microsoft account team whether GitHub, and the three US Government clouds, are covered, because the Learn pages read do not say.

### At rollout
- Connect one app first in Microsoft Defender and select only that app's indicators under Insider Risk Management > Settings > Policy indicators.
- Add the indicators to a data theft or data leaks policy and set thresholds deliberately rather than leaving defaults, to limit processing-unit use.

### After rollout
- Watch the Insider Risk Management line in Usage center > Pay-as-you-go against your budget; it cannot be paused there.
- Review the pay-as-you-go usage report in Insider Risk Management Reports for the indicators driving most usage, and turn off app indicators that add cost without useful alerts.
- Watch the roadmap item and the Learn pages for the move from preview to General Availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which cloud indicators are available to Insider Risk Management policies</strong><br><small>Tenant</small><br><small class="controls__note">Cloud storage and cloud service indicators sit under Built-in indicators; they require apps connected in Defender and pay-as-you-go billing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which cloud apps are connected so their activity can reach Insider Risk Management</strong><br><small>Tenant</small><br><small class="controls__note">Learn gives each app its own connector guide; the connection is a prerequisite for the cloud indicators, not an Insider Risk Management setting.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Cloud Apps › Connected apps › Connect an app <a href="https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go usage of Insider Risk Management</strong><br><small>Tenant</small><br><small class="controls__note">Shows usage; the page lists Insider Risk Management as not pausable. The Usage center is in preview. Role requirements are on the linked page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">The Insider Risk Management Admins role group can also configure policies and settings.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Settings sit in three places: Defender decides which apps are connected, Insider Risk Management settings decide which indicators exist, and the Usage center shows the bill. No single switch turns the multicloud capability on or off.

Learn says the indicators selected on the Policy indicators settings page can't be individually configured when creating or editing a policy in the workflow, so choose them deliberately there. The Usage center lists Insider Risk Management as not pausable, so disabling the indicators or disconnecting the app is the route to reduce activity. Microsoft Learn documents no automation for these settings at the time of writing (November 2026), apart from role group membership.

## Open questions

- Will Insider Risk Management ship GitHub indicators? The roadmap names GitHub, but the Learn pages read list only Google Drive, Box, Dropbox, Amazon S3 and Azure. Watch the Policy indicators page on Microsoft Learn.
- Which indicators will be available in GCC, GCC High and DoD, which the record lists? Watch the Purview GCC High plan page and the roadmap item.
- What is the price per data security processing unit, and will a spending limit or a pause be offered for Insider Risk Management in the Usage center? Watch the Purview billing models page.
- When do the preview cloud indicators reach General Availability, given the record still shows In development with a June CY2026 target that has passed? Watch the roadmap item.

<!-- rationale
risk: Low. Learn says global indicators are disabled by default and cloud indicators need apps connected in Microsoft Defender first, so nothing is scored until an admin opts in; the exposure is user-activity data and billing once enabled.
cost: Variable. Learn says Insider Risk Management cloud indicators are billed pay-as-you-go through an Azure subscription, on data security processing units of 10,000 user activities each.
impact: Low. Administrators and Insider Risk Management analysts configure and review it; it changes nothing until an admin enables the indicators.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Licence / absence: The Get started page names no plan in the licensing section read. | Found: If you don't have an existing Microsoft 365 Enterprise E5 plan and want to try Insider Risk Management, you can add Microsoft 365 to your existing subscription or sign up for a trial of Microsoft 365 Enterprise E5. | Fix: Remove 'That page names no plan in the section read.' The Subscriptions and licensing section explicitly names Microsoft 365 Enterprise E5; keep the preceding supported subscription-and-user-licensing sentence. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [unsupported, blocker] Risk assessment: Change & support; Governance guidance: At rollout / cost: A low alert threshold can raise the Azure bill, and setting thresholds deliberately limits processing-unit use. | Found: Searched: 'Insider Risk Management cloud indicators thresholds reduce processing units billing'; read purview-billing-models, settings-policy-indicators and reports. They document activity-based processing charges and alert thresholds, but not this asserted cost relationship. | Fix: Replace 'Billing follows usage, so a low threshold on a busy app can raise both alert volume and the Azure bill.' with 'Billing follows processed user activities; indicator thresholds affect alert volume.' In the At rollout bullet, replace 'set thresholds deliberately rather than leaving defaults, to limit processing-unit use' with 'set thresholds deliberately to tune alert volume'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Risk assessment: Security & identity; Governance guidance / admin-path: The cited Microsoft Defender portal guide gives Cloud Apps > Connected apps > Connect an app. | Found: Go to Cloud Apps > Connected apps. 3. Select Connect an app or Add a new connector. | Fix: Keep the cited route, but add to this row's note: 'The Defender get-started guide instead gives Settings > Cloud Apps > Connected Apps > App Connectors > +Connect an app.' Cite https://learn.microsoft.com/defender-cloud-apps/get-started#access-defender-for-cloud-apps, whose excerpt gives that alternative route. | Source: https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps
- [supported, minor] Governance controls: final paragraph / behaviour: The Policy indicators page says globally selected indicators cannot be individually configured while creating or editing a policy. | Found: The indicators you select on the Policy indicators settings page can't be individually configured when creating or editing an insider risk policy in the policy workflow. | Fix: Remove this sentence to avoid presenting one side of conflicting documentation. The already-cited https://learn.microsoft.com/purview/insider-risk-management-configure#step-6-required-create-an-insider-risk-management-policy also says 'Select the indicators you want to apply to the policy' and describes custom policy indicator thresholds. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control that the governance checklist asks the reader to configure or check appears in the controls table. | Found: The checklist says 'confirm the tenant is associated with it', 'Add the indicators to a data theft or data leaks policy' and 'Review the pay-as-you-go usage report'; the table covers indicator settings, app connections, Usage center and role membership. | Fix: The Before rollout Azure-subscription association check, At rollout policy configuration and threshold step, and After rollout Insider Risk Management Reports check have no corresponding control rows. The claim that no single multicloud switch exists is likewise not represented by a both-null row.
-->
