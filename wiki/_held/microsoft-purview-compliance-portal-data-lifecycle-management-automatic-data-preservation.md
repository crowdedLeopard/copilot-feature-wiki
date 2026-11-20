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
  model: "included"
  notes: "Microsoft 365 E5 includes Adaptive Protection. A licence requirement specific to this data lifecycle management integration is not yet published."
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
  - title: "Compare Microsoft Copilot in Microsoft 365 E3, E5, and E7"
    url: "https://learn.microsoft.com/copilot/plan/compare-copilot-e3-e5-e7"
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
      path: "Solutions > Settings > Solution settings > Data lifecycle management > Adaptive protection > Adaptive protection in Data Lifecycle Management"
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
  - date: "2026-11-20"
    note: "Corrected after verification: removed blanket eDiscovery access and portal-only claims, named the tenant-wide Adaptive Protection off switch, completed the setting path, added the Microsoft 365 E5 listing, and dropped the risk-level review step."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 59
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "fffaadd2ef7a668f40ce5a0d549ba320"
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
- Content deleted by an Elevated-risk user stays in SharePoint, OneDrive or Exchange for 120 days, and Learn says it remains accessible for search and eDiscovery from the secured locations the workload uses. The preserved content remains accessible for search and eDiscovery from the secured locations used by the workload.
- Learn says the retention period cannot be changed at this time, so a shorter deletion obligation cannot be met by editing the policy; the feature-specific off switch is the Adaptive protection in Data Lifecycle Management setting.

**Security & identity**
- The trigger is the Elevated insider risk level, which Insider Risk Management assigns from policy activity. A wrong level means ordinary users' deletions are held, or a risky user's are not. Review the risk level definitions in Adaptive Protection.
- Turning the setting off removes the retention labels it applied, so held items become eligible for permanent deletion. Restrict who can change it to the Insider Risk Management or Insider Risk Management Admins role groups.

**Autonomy & actions**
- Labels are applied without anyone approving each deletion: the single label and auto-labeling policy are not visible in the Microsoft Purview portal and are not managed by admins. Monitor through the audit events "Retained file proactively" and "Retained email item proactively".

**Change & support**
- Users see a deletion that appears to work while the item is held, which may generate support questions. Tenants that configured Adaptive Protection before the integration released must opt in, according to Learn, so behaviour can differ between tenants.

## Cost and licensing

Microsoft's comparison of Microsoft 365 E3, E5 and E7 lists Adaptive Protection in the Microsoft 365 E5 column. A licence requirement or price specific to this integration is not yet published on the pages that describe it. The Adaptive Protection article tells readers to see the Microsoft 365, Office 365, Enterprise Mobility + Security, and Windows 11 Subscriptions page for the licensing requirements of Adaptive Protection with data loss prevention, data lifecycle management and Conditional Access, and does not name a licence. Check your entitlement on that page.

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
- Watch Learn and the roadmap item for the general availability default, licensing and any change to the fixed 120-day period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Adaptive Protection applies automatic retention to deleted content</strong><br><small>Tenant</small><br><small class="controls__note">Setting name: Adaptive protection in Data Lifecycle Management. Cannot be turned on unless Adaptive Protection is on. Turning it off removes labels already applied. Preview on Learn.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Settings › Solution settings › Data lifecycle management › Adaptive protection › Adaptive protection in Data Lifecycle Management <a href="https://learn.microsoft.com/purview/retention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Adaptive Protection is turned on for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Role group required: Insider Risk Management or Insider Risk Management Admins. Turning it off stops insider risk levels being shared with data lifecycle management.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Adaptive protection › Adaptive Protection settings › Adaptive Protection <a href="https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of items retained proactively by Adaptive Protection</strong><br><small>Tenant</small><br><small class="controls__note">Activities to select: Retained file proactively (SharePoint, OneDrive) and Retained email item proactively (Exchange), under Retention policy and retention label activities. Needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting has a portal path but, at the time of writing (November 2026), Microsoft Learn documents no PowerShell or Graph operation for it. Turning off Adaptive protection in Data Lifecycle Management does not affect other Adaptive Protection policies, according to Learn, but it removes the labels already applied.

The setting is available only while Adaptive Protection itself is on for the tenant; the Adaptive Protection page lists the Insider Risk Management or Insider Risk Management Admins role group for configuring and updating its settings. Audit search is the only monitoring route the pages give for this feature, and Learn says data lifecycle management metrics do not currently appear on the Adaptive Protection dashboard.

## Open questions

- What will the general availability release do on arrival: is the retention policy created and applied automatically when Adaptive Protection is on, or does an admin opt in? Learn's quick setup and retention pages say it is created automatically for tenants that have not yet turned Adaptive Protection on, while the custom setup note says an explicit opt-in is needed. Watch the Adaptive Protection and retention pages on Learn.
- Is a licence specific to this integration required beyond the Microsoft 365 E5 listing, and is any meter or storage charge planned? Watch the subscriptions page Learn links.
- Will the 120-day period become configurable, or be set per risk level or location? Learn says it cannot be changed at this time.
- Will any PowerShell or Graph operation be published for the Adaptive protection in Data Lifecycle Management setting?

<!-- rationale
risk: Medium. Content deleted by Elevated-risk users is held for 120 days with a fixed period that admins cannot change, so deletion duties and eDiscovery reach need a decision; the default on arrival is not stated.
cost: Low. The only cost the pages show is admin time; Learn lists Adaptive Protection under Microsoft 365 E5, and a licence or meter specific to this integration is not yet published.
impact: Low. Compliance and security admins configure it, and only users at the Elevated insider risk level are affected; Learn says users do not see the retention label.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; rationale: cost; Open questions / cost: The only cost the pages show is administrative time, with storage charges left entirely as a question about future plans. | Found: Because the Preservation Hold library is included in the site's storage quota, you might need to increase your storage when you use retention settings for SharePoint, OneDrive, and Microsoft 365 groups. | Fix: Replace the final sentence of Cost and licensing with: 'Plan for admin time to review the setting, brief records and legal owners, and monitor audit events. Retained SharePoint and OneDrive content also counts against the site's storage quota, and Microsoft says storage might need to be increased.' In the cost rationale, replace 'The only cost the pages show is admin time' with 'Plan for admin time and storage headroom for retained SharePoint and OneDrive content'. In Open questions, change 'any meter or storage charge planned' to 'a separate integration-specific meter planned'. Cite the already-listed https://learn.microsoft.com/purview/retention; do not infer a storage price or mandatory storage purchase. | Source: https://learn.microsoft.com/purview/retention
-->
