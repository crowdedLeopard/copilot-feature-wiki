---
title: "Microsoft Purview Data Lifecycle Management: automatic preservation of deleted content for high-risk users"
slug: "microsoft-purview-compliance-portal-data-lifecycle-management-automatic-data-preservation"
roadmapId: 392839
topic: "governance"
products: ["Microsoft Purview"]
summary: "Adaptive Protection will retain SharePoint, OneDrive and Exchange content deleted by users at the Elevated insider risk level, using an automatic retention label. Compliance and security admins should confirm the setting before general availability."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "June CY2024"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this integration. The Adaptive Protection page refers readers to the Microsoft 365, Office 365, Enterprise Mobility + Security, and Windows 11 Subscriptions page for licensing requirements and names no licence itself."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","data-lifecycle-management","insider-risk-management","adaptive-protection","retention","ediscovery","auditing"]
sources:
  - title: "Help dynamically mitigate risks with Adaptive Protection"
    url: "https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection"
    kind: "learn"
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 392839"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=392839"
    kind: "roadmap"
videos: []
related: ["ediscovery","auditing","microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep"]
controls:
  - governs: "Whether Adaptive Protection applies automatic retention to deleted content"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Settings > Solution settings > Data lifecycle management > Adaptive protection"
      docs: "https://learn.microsoft.com/purview/retention"
    api: null
    note: "Setting name: Adaptive protection in Data Lifecycle Management. Cannot be turned on unless Adaptive Protection is on. Turning it off removes labels already applied. Preview on Learn."
  - governs: "Whether Adaptive Protection is turned on for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Adaptive protection > Adaptive Protection settings > Adaptive Protection"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection"
    api: null
    note: "Role group required: Insider Risk Management or Insider Risk Management Admins. Turning it off stops insider risk levels being shared with data lifecycle management."
  - governs: "Audit records of items retained proactively by Adaptive Protection"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Activities to select: Retained file proactively (SharePoint, OneDrive) and Retained email item proactively (Exchange), under Retention policy and retention label activities. Needs the Audit Logs or View-Only Audit Logs role."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-20"
    note: "New briefing: Adaptive Protection will automatically retain content deleted by Elevated-risk users for 120 days; Learn documents the preview, and licensing and the general availability default are not yet published."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 52
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "cf85d6f76a0485ddf62d95d391019401"
---

## What's changing

The roadmap item says the integration between Adaptive Protection and Data Lifecycle Management will automatically apply retention labels to preserve deleted emails and files, based on a user's insider risk level. Adaptive Protection is the Microsoft Purview feature that moves users in and out of policies as their insider risk levels change.

Microsoft Learn already describes this behaviour, and marks it as in preview. When Adaptive Protection is on, content that a user at the Elevated risk level deletes from SharePoint, OneDrive or Exchange gets a retention label automatically and is retained for 120 days. The label goes only on unlabelled content, and users do not see it. After 120 days the items become eligible for permanent deletion. Learn states that, at the time of writing (November 2026), the retention period cannot be changed and different policies cannot be assigned per risk level or location.

The roadmap item is In development, with a target of January CY2027, and lists General Availability and Preview as release phases (preview date June CY2024). Worldwide (Standard Multi-Tenant) is the only cloud listed, and the platform is Web. Dates are Microsoft's targets.

## Why it matters

This gives security teams a safety net against an insider who deletes data before leaving, without anyone writing a retention policy: the preserved copy stays searchable for eDiscovery. The trade-off is that deletion no longer means deletion for these users for 120 days, so records, privacy and legal owners should know the behaviour exists before it affects a real deletion request.

Microsoft has not stated what the general availability release does on arrival, and Learn's pages differ on whether turning on Adaptive Protection applies the policy automatically or needs an explicit opt-in. No source says existing behaviour changes for tenants that do nothing, so treat this as a capability to review, and confirm the setting's state in your tenant.

## Risk assessment

**Data exposure**
- Content deleted by an Elevated-risk user stays in SharePoint, OneDrive or Exchange for 120 days, and Learn says it remains accessible for search and eDiscovery from the secured locations the workload uses. Anyone with eDiscovery access can therefore find items the user thought were deleted.
- Learn says the retention period cannot be changed at this time, so a shorter deletion obligation cannot be met by editing the policy; the only documented off switch is the Adaptive protection in Data Lifecycle Management setting.

**Security & identity**
- The trigger is the Elevated insider risk level, which Insider Risk Management assigns from policy activity. A wrong level means ordinary users' deletions are held, or a risky user's are not. Review the risk level definitions in Adaptive Protection.
- Turning the setting off removes the retention labels it applied, so held items become eligible for permanent deletion. Restrict who can change it to the Insider Risk Management or Insider Risk Management Admins role groups.

**Autonomy & actions**
- Labels are applied without anyone approving each deletion: the single label and auto-labeling policy are not visible in the Microsoft Purview portal and are not managed by admins. Monitor through the audit events "Retained file proactively" and "Retained email item proactively".

**Change & support**
- Users see a deletion that appears to work while the item is held, which may generate support questions. Tenants that configured Adaptive Protection before the integration released must opt in, according to Learn, so behaviour can differ between tenants.

## Cost and licensing

Microsoft has not published a licence requirement or price for this integration on the pages that describe it. The Adaptive Protection article tells readers to see the Microsoft 365, Office 365, Enterprise Mobility + Security, and Windows 11 Subscriptions page for the licensing requirements of Adaptive Protection with data loss prevention, data lifecycle management and Conditional Access, and does not name a licence. Check your entitlement on that page.

The Learn pages read publish no separate meter or per-use charge for the automatic retention label. The cost the pages show is admin time to review the setting, brief records and legal owners, and monitor the audit events.

## Scope

- **Who is affected:** users that Insider Risk Management assigns the Elevated risk level; their deletions from SharePoint, OneDrive and Exchange are covered.
- **Content:** unlabelled content only, according to Learn; content that already carries a retention label is not mentioned as covered.
- **Prerequisite:** the Adaptive protection in Data Lifecycle Management setting cannot be turned on unless Adaptive Protection is turned on for the tenant. Configuring Adaptive Protection requires the Insider Risk Management or Insider Risk Management Admins role group.
- **Rollout:** quick setup can take up to 72 hours to complete, and Adaptive Protection actions can take up to 36 hours to apply after it is turned on.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web. Other clouds are not listed on the roadmap item; that is a record fact, not a statement of unavailability.

## Governance guidance

### Before rollout
- Read the Microsoft 365, Office 365, Enterprise Mobility + Security, and Windows 11 Subscriptions page that the Adaptive Protection article links, and confirm your licences cover Insider Risk Management, data lifecycle management and Adaptive Protection.
- Check whether Adaptive Protection is already on in your tenant, because Learn says tenants that enabled it before this integration released must opt in to create the retention policy.
- Tell records, legal and privacy owners that deleted content from Elevated-risk users will be retained for 120 days and remain searchable in eDiscovery, with no per-tenant way to change the period.
- Assign the Insider Risk Management or Insider Risk Management Admins role group to the people who will own the setting.

### At rollout
- Open the Adaptive protection in Data Lifecycle Management setting and record whether it is on or off.
- Decide whether to keep it on; turning it off removes the labels it applied and makes held items eligible for permanent deletion.
- Allow up to 36 hours after turning Adaptive Protection on before you expect retention actions on user activity.

### After rollout
- Search the audit log for "Retained file proactively" and "Retained email item proactively" to see which users and items are being held.
- Review who sits at the Elevated risk level, since that population decides whose deletions are held.
- Watch Learn and the roadmap item for the general availability default, licensing and any change to the fixed 120-day period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Adaptive Protection applies automatic retention to deleted content</strong><br><small>Tenant</small><br><small class="controls__note">Setting name: Adaptive protection in Data Lifecycle Management. Cannot be turned on unless Adaptive Protection is on. Turning it off removes labels already applied. Preview on Learn.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Settings › Solution settings › Data lifecycle management › Adaptive protection <a href="https://learn.microsoft.com/purview/retention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Adaptive Protection is turned on for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Role group required: Insider Risk Management or Insider Risk Management Admins. Turning it off stops insider risk levels being shared with data lifecycle management.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Adaptive protection › Adaptive Protection settings › Adaptive Protection <a href="https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of items retained proactively by Adaptive Protection</strong><br><small>Tenant</small><br><small class="controls__note">Activities to select: Retained file proactively (SharePoint, OneDrive) and Retained email item proactively (Exchange), under Retention policy and retention label activities. Needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting has a portal path but, at the time of writing (November 2026), Microsoft Learn documents no PowerShell or Graph operation for it, so changes are portal-only. Turning off Adaptive protection in Data Lifecycle Management does not affect other Adaptive Protection policies, according to Learn, but it removes the labels already applied.

The setting is available only while Adaptive Protection itself is on for the tenant; the Adaptive Protection page lists the Insider Risk Management or Insider Risk Management Admins role group for configuring and updating its settings. Audit search is the only monitoring route the pages give for this feature, and Learn says data lifecycle management metrics do not currently appear on the Adaptive Protection dashboard.

## Open questions

- What will the general availability release do on arrival: is the retention policy created and applied automatically when Adaptive Protection is on, or does an admin opt in? Learn's quick setup and retention pages say it is created automatically for tenants that have not yet turned Adaptive Protection on, while the custom setup note says an explicit opt-in is needed. Watch the Adaptive Protection and retention pages on Learn.
- Which licence covers this integration, and is any meter or storage charge planned? Watch the subscriptions page Learn links.
- Will the 120-day period become configurable, or be set per risk level or location? Learn says it cannot be changed at this time.
- Will any PowerShell or Graph operation be published for the Adaptive protection in Data Lifecycle Management setting?

<!-- rationale
risk: Medium. Content deleted by Elevated-risk users is held for 120 days with a fixed period that admins cannot change, so deletion duties and eDiscovery reach need a decision; the default on arrival is not stated.
cost: Low. The only cost the pages show is admin time; Learn names no licence or meter for this integration and points to a Microsoft 365 subscriptions page for licensing requirements.
impact: Low. Compliance and security admins configure it, and only users at the Elevated insider risk level are affected; Learn says users do not see the retention label.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / role: Anyone with eDiscovery access can find the preserved items. | Found: This role lets users access review sets in eDiscovery. ... This role doesn't allow the user to preview the results of a search that's associated with the case or do other search or case management tasks. | Fix: Replace 'Anyone with eDiscovery access can therefore find items the user thought were deleted.' with 'The preserved content remains accessible for search and eDiscovery from the secured locations used by the workload.' This wording is supported by the already cited https://learn.microsoft.com/purview/retention and makes no blanket permissions claim. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [contradicted, blocker] Risk assessment: Data exposure / applicability: The Adaptive protection in Data Lifecycle Management setting is the only documented off switch. | Found: To disable Adaptive Protection, select the Adaptive Protection settings tab and turn Adaptive Protection Off. ... the system stops assigning insider risk levels to users and stops sharing them with data loss prevention, data lifecycle management, and Conditional Access. | Fix: Replace 'the only documented off switch is the Adaptive protection in Data Lifecycle Management setting' with 'the feature-specific off switch is the Adaptive protection in Data Lifecycle Management setting'. The tenant-wide Adaptive Protection switch is also documented, including in the briefing's second control row. | Source: https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection
- [unsupported, blocker] Governance controls: first paragraph / applicability: Changes to the retention setting are portal-only. | Found: Searched: Adaptive protection Data Lifecycle Management enable disable PowerShell Graph Set AdaptiveProtection retention. Read retention, retention-cmdlets and Adaptive Protection; no statement rules out other surfaces. | Fix: Delete ', so changes are portal-only' from the first sentence. Keep the narrower, verified statement that Microsoft Learn documents no PowerShell or Graph operation for the setting at the time of writing.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The retention setting is reached through Microsoft Purview portal > Solutions > Settings > Solution settings > Data lifecycle management > Adaptive protection. | Found: Solutions > Settings > Solution settings> Data lifecycle management > Adaptive protection. ... For Adaptive protection in Data Lifecycle Management, turn the setting off | Fix: Complete the path as 'Solutions > Settings > Solution settings > Data lifecycle management > Adaptive protection > Adaptive protection in Data Lifecycle Management'. The existing path stops on the correct page but omits the setting itself. | Source: https://learn.microsoft.com/purview/retention
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because no integration-specific entitlement is published. | Found: Manage insider risk and communication compliance ... Microsoft 365 E5 ... Insider Risk Management, Communication Compliance, Adaptive Protection, and related advanced controls. | Fix: Set licensing.model to 'included'. Replace the licensing notes with 'Microsoft 365 E5 includes Adaptive Protection. A licence requirement specific to this data lifecycle management integration is not yet published.' Cite https://learn.microsoft.com/copilot/plan/compare-copilot-e3-e5-e7. Use the same distinction in Cost and licensing and the cost rationale instead of treating all entitlement as unknown. | Source: https://learn.microsoft.com/copilot/plan/compare-copilot-e3-e5-e7
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks administrators to review the Elevated-risk population, but the controls table has no corresponding user-risk review control. | Found: Review who sits at the Elevated risk level, since that population decides whose deletions are held. ... Controls cover automatic retention, the tenant Adaptive Protection switch, and audit records. | Fix: The checklist step 'Review who sits at the Elevated risk level, since that population decides whose deletions are held' has no corresponding controls-table row. Remove that step from the checklist; this correction does not require adding a row.
-->
