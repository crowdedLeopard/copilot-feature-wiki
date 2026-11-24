---
title: "Microsoft Purview Data Security Investigations: integration with DSPM, Defender XDR and Insider Risk Management"
slug: "microsoft-purview-data-security-investigations-introducing-integration-with-data-security"
roadmapId: 518226
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview Data Security Investigations is gaining DSPM insights and deeper Defender XDR and Insider Risk Management links. Learn documents a pay-as-you-go DSPM option in preview, so security and compliance admins should review the cost."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn's billing page says Data Security Investigations billing rests on stored data and AI compute capacity, not on a dedicated plan or licence. Storage is billed per GB per month and AI analysis uses compute units, both pay-as-you-go. DSPM lists a supporting licence as a prerequisite."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","data-security-investigations","dspm","defender-xdr","insider-risk-management","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap 518226"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=518226"
    kind: "roadmap"
  - title: "Learn about Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations"
    kind: "learn"
  - title: "Create an investigation in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-investigation"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Get started with Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-get-started"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-permissions"
    kind: "learn"
  - title: "Considerations for Microsoft Purview Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-considerations"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-insider-risk-management-data-security-investigations-i","microsoft-purview-data-security-investigations-analyze-files-tied-to-endpoint-dlp-alerts","microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience","microsoft-purview-insider-risk-management-irm-alerts-in-xdr","insider-risk-management"]
controls:
  - governs: "Whether proactive AI insights create and refresh a DSPM investigation every 24 hours"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM (preview) > Objectives > Prevent exfiltration to risky destinations > View objective > Exfiltration risk patterns > Proactive AI insights"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-investigation"
    api: null
    note: "Preview. The page describes turning the toggle on; the investigation consumes DSI storage and AI meters while it is enabled."
  - governs: "Who holds the Data Security Investigations Admins, Investigators and Reviewers roles"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The DSI page documents the portal steps only; the cmdlet is the general role group command. Compliance Administrator and Organization Management role groups already include DSI access."
  - governs: "Whether DSI storage is billed to an Azure subscription and AI capacity is set up"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Setup tasks > Setup pay-as-you-go-billing for data storage"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "AI capacity is a second setup task, Set up AI capacity, which needs the Data Security Investigations Admins role group. The storage task needs Global Administrator and a resource group Owner or Contributor."
  - governs: "Storage and compute unit usage per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Visible only to Data Security Investigations Admin role holders; billing data can take up to 48 hours to appear. It reports usage and does not set a limit."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2025-11-18T17:15:10"
changes:
  - date: "2026-11-24"
    note: "New briefing: DSI integration with DSPM, Defender XDR and Insider Risk Management, with the documented pay-as-you-go cost of the DSPM proactive AI insights toggle."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 81
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "6fec65dd725f81fe8a210ad24ed90c38"
---

## What's changing

The roadmap item says insights from Microsoft Purview Data Security Investigations (DSI) are being incorporated into Data Security Posture Management (DSPM) to support the prevention of sensitive content exfiltration, and that DSI's integrations with Microsoft Defender XDR and Insider Risk Management are being enhanced, reflecting feedback from the Public Preview. The item names no further detail about the Defender XDR or Insider Risk Management changes.

Microsoft Learn documents the DSPM side as a preview. The DSPM objective **Prevent exfiltration to risky destinations** lets an analyst create an investigation by hand, and offers **Proactive AI insights (preview)**, an opt-in toggle that creates and refreshes a single investigation for the tenant every 24 hours. That investigation covers recently exfiltrated sensitive data across five fixed risk categories (credentials and access information, personally identifiable information, financial information, confidential information and intellectual property) and is scoped to sensitive data exfiltrated in the last 30 days. Learn also documents creating an investigation from a Defender XDR incident and from an Insider Risk Management case; it does not say which parts of those routes are the enhancements the roadmap refers to.

The roadmap record shows status In development, a target of February CY2026, a preview date of November CY2025, release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform. The record was last modified on 18 November 2025. The target month has passed at the time of writing (November 2026) and the record still reads In development, so treat the date as unconfirmed.

## Why it matters

The decision this change puts in front of a service owner is spend. Learn says the DSPM investigation consumes DSI storage and AI analysis meters while the toggle is enabled, and that charges are ongoing because the investigation refreshes every 24 hours. Billing has to be configured before DSI can be used at all, so an organisation that has never set it up has a prerequisite to complete before it can use any of these integrations.

It also concentrates evidence. An investigation built from DSPM holds a set of recently exfiltrated sensitive content that analysts can then examine with AI, so who holds a DSI role matters more once it is populated. Microsoft has not stated what happens on arrival for the roadmap's changes. The documented DSPM toggle is opt-in, so no source says existing behaviour changes; the wiki's view is to treat this as a capability to evaluate and budget for, not an emergency.

## Risk assessment

**Data exposure**

- Investigations created from DSPM are scoped to all sensitive data exfiltrated from the organisation in the last 30 days, then analysable with AI. The result is a concentrated set of sensitive content inside one investigation; access is governed by DSI role groups (controls table, row 2).
- Learn lets you choose where compute units are used (ANZ, EU, UK or US) and lets you opt in to AI processing anywhere in the world; confirm the choice made during AI capacity set-up matches your data residency position (controls table, row 3).

**Security & identity**

- Global administrators must also be assigned to a DSI role group to create and access investigations. Members of the Compliance Administrator and Organization Management role groups already have DSI administrative and contributor access, so audit those groups before relying on the DSI role groups alone (controls table, row 2).
- DSI activities are automatically logged in the unified audit log, which gives a record of who did what in an investigation.

**Autonomy & actions**

- Proactive AI insights refresh on a 24-hour cycle without an analyst starting each run. The same investigation can be used for purge: DSI supports soft purge and hard purge to remove or permanently delete items from data sources, and Admins and Investigators can create and run purge queries.
- In Defender XDR, a banner to create an investigation automatically appears on incidents that might contain sensitive information, which nudges analysts toward starting chargeable work.

**Change & support**

- Preview limits apply: the proactive investigation uses five fixed categories, and custom category templates and per-item deletion within it are not supported.
- Investigations created from Defender XDR incidents or Insider Risk Management cases with more than approximately 3,000 items might not return complete results, and an investigation cannot mix mailboxes with files or email messages.

## Cost and licensing

**Licence.** The DSI billing page says billing is based solely on stored data and the computing capacity needed for AI analysis, and is not based on a dedicated enterprise plan or licence. DSPM, which hosts the new objective, lists a supporting licence for the solution as a prerequisite and points to the Microsoft Purview service description for which licence.

**Meters.** There are two. The storage meter is pay-as-you-go, per GB per month for data in all investigations, with charges starting when items are added to an investigation's scope. AI capacity is also pay-as-you-go and is measured in compute units. Both are billed through an Azure subscription in the same tenant. For storage rates, the billing page points to the Azure pricing page for Purview.

**Proactive AI insights.** Storage and AI compute charges continue while the toggle is enabled: each 24-hour refresh uses compute units, and the investigation consumes storage continuously. Learn advises configuring billing before turning the toggle on because the auto-created investigation incurs costs immediately.

**Spend controls.** The billing page recommends the in-product cost estimator, Azure budgets for the DSI resource group and meter level, and alerts at thresholds such as 50%, 75% or 90%. It describes these as alerts and budgets; it does not say that use stops at a threshold. Deleting an investigation stops the storage charge for its data, and the **Pay-as-you-go usage dashboard** shows storage and compute units per investigation (controls table, row 4), with up to 48 hours before the latest billing data appears.

## Scope

**Who and where.** The roadmap lists Worldwide (Standard Multi-Tenant) only and the Web platform. Analysts use DSI, DSPM and the Microsoft Purview portal; Defender XDR users create investigations from incidents in the Microsoft Defender portal.

**Roles.** DSI has Admins, Investigators and Reviewers role groups. Creating an investigation from a Defender XDR incident requires the Security Administrator or Security Operator role. Creating one from an Insider Risk Management case requires the Insider Risk Management or Insider Risk Management Investigator role. The DSPM permissions page lists the role groups able to create a data security investigation as Compliance Administrator, Data Security Management, Insider Risk Management Admin, Organization Management, Data Security Investigations Admin and Data Security Investigations Investigator, and marks the Microsoft Entra Global Administrator and Compliance Administrator roles as not supported for that activity.

**Prerequisites.** An Azure subscription in the same tenant as Microsoft Purview, an Azure resource group, the Global Administrator role, and the resource group Owner or Contributor role. Configuring AI capacity needs membership of the Data Security Investigations Admins role group. Learn marks the DSPM proactive insights as preview, so its limits are not the final design.

## Governance guidance

### Before rollout

- Configure billing first: link an Azure subscription and resource group for the storage meter and set up AI capacity, using a Global Administrator and a resource group Owner or Contributor (controls table, row 3).
- Estimate monthly cost with the in-product **Estimate costs** tool and create Azure budgets and threshold alerts for the DSI resource group.
- Assign named people to the Data Security Investigations Admins, Investigators and Reviewers role groups, keep at least one Admin, and check who already holds DSI access through Compliance Administrator or Organization Management (controls table, row 2).
- Confirm which Security Administrator, Security Operator and Insider Risk Management role holders will be able to start investigations from Defender XDR and Insider Risk Management cases.

### At rollout

- Turn on **Proactive AI insights** only after billing is configured, and consider doing so with a pilot team that expects the 24-hour refresh cycle (controls table, row 1).
- Choose the AI processing location deliberately during AI capacity set-up, and decide whether to opt in to processing anywhere in the world (controls table, row 3).
- Tell analysts that investigations from Defender XDR and Insider Risk Management cases of more than approximately 3,000 items might return incomplete results.

### After rollout

- Watch the Pay-as-you-go usage dashboard for storage and compute per investigation, allowing for the 48-hour delay (controls table, row 4).
- Delete completed investigations to stop their storage charge, after exporting any results that must be kept.
- Re-check the roadmap item and the DSI Learn pages when the status moves from In development, because the proactive insights page is a preview description.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether proactive AI insights create and refresh a DSPM investigation every 24 hours</strong><br><small>Tenant</small><br><small class="controls__note">Preview. The page describes turning the toggle on; the investigation consumes DSI storage and AI meters while it is enabled.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM (preview) › Objectives › Prevent exfiltration to risky destinations › View objective › Exfiltration risk patterns › Proactive AI insights <a href="https://learn.microsoft.com/purview/data-security-investigations-investigation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Data Security Investigations Admins, Investigators and Reviewers roles</strong><br><small>Tenant</small><br><small class="controls__note">The DSI page documents the portal steps only; the cmdlet is the general role group command. Compliance Administrator and Organization Management role groups already include DSI access.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether DSI storage is billed to an Azure subscription and AI capacity is set up</strong><br><small>Tenant</small><br><small class="controls__note">AI capacity is a second setup task, Set up AI capacity, which needs the Data Security Investigations Admins role group. The storage task needs Global Administrator and a resource group Owner or Contributor.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Setup tasks › Setup pay-as-you-go-billing for data storage <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Storage and compute unit usage per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Visible only to Data Security Investigations Admin role holders; billing data can take up to 48 hours to appear. It reports usage and does not set a limit.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

DSI has no dedicated tenant-wide switch in the sources: the opt-in toggle in DSPM governs proactive investigations, billing set-up governs whether DSI can be used at all, and role groups govern who can create and open investigations. Microsoft Learn documents no API, PowerShell or Microsoft Graph operation for the proactive toggle, for billing set-up or for the usage dashboard at the time of writing (November 2026); only the role group membership row has a command.

Configuring AI capacity needs the Data Security Investigations Admins role group, and only that role can open the usage dashboard. The Add-RoleGroupMember cmdlet is the general role group command; the DSI permissions page itself gives portal steps only. Azure budgets and alerts are set in Azure, not in the Purview portal; this page does not give their path.

## Open questions

- Which Defender XDR and Insider Risk Management enhancements does the roadmap item cover, and do they change how investigations are created from incidents and cases today? Watch the roadmap item and the DSI Learn page.
- Will Proactive AI insights leave preview at general availability, and will the opt-in toggle and the five fixed risk categories stay as they are?
- Who is added as a member of the auto-created DSPM investigation, and can its access be restricted beyond the investigation settings?
- Is there a documented way to stop spend rather than alert on it for the storage and AI capacity meters, once the toggle is on?
- Will the roadmap's Worldwide-only listing be extended to other clouds?

<!-- rationale
risk: Medium. The documented DSPM option, a preview toggle, creates and refreshes an AI-analysed investigation of recently exfiltrated sensitive data every 24 hours with continuing charges; Microsoft has not stated a default for the roadmap's changes.
cost: Variable. Data Security Investigations is billed pay-as-you-go: a storage meter per GB per month plus AI compute units, through an Azure subscription. Learn says no dedicated plan or licence is needed.
impact: Low. Security and compliance administrators and the investigators they assign are the people who would notice; nothing in the sources shows a change for end users.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Scope: Roles; Governance guidance / role: Either the Security Administrator or Security Operator role alone suffices to create an investigation from a Defender XDR incident. | Found: Searched: 'Data Security Investigations Security Operator Security Administrator'; opened investigation instructions; read scc-permissions and Entra search excerpts. Instructions say 'must have the following roles assigned' and list both; no passage establishes either Entra role alone. | Fix: Replace 'requires the Security Administrator or Security Operator role' with 'Learn lists Security Administrator and Security Operator under the roles required to create investigations in the Microsoft Defender portal.' Use https://learn.microsoft.com/purview/data-security-investigations-investigation#create-an-investigation-from-defender-xdr; do not assert that either role alone is sufficient.
- [contradicted, blocker] Open questions: stop spend / absence: Whether Microsoft documents a way to stop spending for the storage and AI meters remains an open question. | Found: To stop billing for Data Security Investigations, disable both storage meter and AI capacity support. This action deletes all investigations in Data Security Investigations and deletes compute units for your resource group. | Fix: Remove this open question and replace it in Spend controls with: 'Microsoft documents stopping billing by deleting all investigations and the DSI compute unit capacity resource. This is irreversible; export or preserve investigation results first.' Cite https://learn.microsoft.com/purview/data-security-investigations-billing#stop-billing. Do not describe this shutdown as an automatic budget cap. | Source: https://learn.microsoft.com/purview/data-security-investigations-billing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Meters; rationale: cost / cost: Both pay-as-you-go components are billed through an Azure subscription. | Found: The billing mechanisms are Azure based, so you must associate your Microsoft 365 tenant with an active Azure subscription. An Azure bill is generated at the end of the month for the total number of pay-as-you-go charges across all Microsoft solutions. | Fix: Add https://learn.microsoft.com/purview/purview-billing-models to sources for the Azure billing statement. | Source: https://learn.microsoft.com/purview/purview-billing-models
- [supported, minor] Why it matters; Governance controls / behaviour: Billing must be configured before DSI or any of its integrations can be used at all. | Found: Before you can use Data Security Investigations in your organization, you must configure both billing models. | Fix: Narrow both statements to 'Billing must be configured before investigations can be viewed and analysed; Learn says a manual DSPM investigation can be created before DSI is configured.' The exception is at https://learn.microsoft.com/purview/data-security-investigations-investigation#create-a-manual-investigation-from-dspm: 'the investigation is created but you need to configure Data Security Investigations before you can view the investigation.' | Source: https://learn.microsoft.com/purview/data-security-investigations-billing
- [supported, minor] controls[1].note; Risk assessment: Security & identity; Governance guidance / role: Compliance Administrator role group members automatically have DSI administrative and contributor access. | Found: Members of the Compliance Administrator and Organization Management role groups automatically have Data Security Investigations administrative and contributor access. | Fix: Replace the combined access sentence with 'Compliance Administrator has full DSI administrative access; Organization Management has administrative and contributor access.' Cite the existing https://learn.microsoft.com/purview/data-security-investigations-permissions table, which lists only the Admin role for Compliance Administrator, and note that the get-started page describes both groups as having administrative and contributor access. | Source: https://learn.microsoft.com/purview/data-security-investigations-get-started
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: DSI supports soft and hard purge to remove or permanently delete items from data sources. | Found: Data Security Investigations supports soft purge and hard purge options to remove or permanently delete items from data sources. | Fix: Qualify the sentence: 'Soft purge supports Exchange mailbox items only; hard purge supports Exchange mailbox items and Teams messages. Holds and retention policies preserve purged items until the hold is removed or retention expires.' Cite https://learn.microsoft.com/purview/data-security-investigations-mitigation-actions#purge, which gives these qualifications to the overview's general statement. | Source: https://learn.microsoft.com/purview/data-security-investigations
- [supported, minor] Risk assessment: Autonomy & actions / applicability: Purge queries can be run within an investigation rather than requiring a separate investigation. | Found: Select an investigation or select Create investigation to create a new investigation. On the Search tab, select the data sources that contain the items you want to purge. | Fix: Add https://learn.microsoft.com/purview/data-security-investigations-mitigation-actions to sources for purge within an existing investigation; retain the separately stated preview restriction on per-item deletion. | Source: https://learn.microsoft.com/purview/data-security-investigations-mitigation-actions
- [supported, minor] Scope: Roles / role: DSPM lists Compliance Administrator, Data Security Management, Insider Risk Management Admin, Organization Management, Data Security Investigations Admin and Investigator for creating an investigation. | Found: Create data security investigation | ... | Compliance Administrator Data Security Management Insider Risk Management Admin Organization Management Data Security Investigations Admin Data Security Investigations Investigator | Fix: Add 'The same DSPM table marks the Microsoft Purview Compliance Administrator role-group column as not supported, despite listing Compliance Administrator among the additional role groups; the DSI permissions page explicitly grants that group full administrative access.' These conflicting statements are at the already cited DSPM permissions page and https://learn.microsoft.com/purview/data-security-investigations-permissions#additional-role-groups-with-data-security-investigations-access. | Source: https://learn.microsoft.com/purview/data-security-posture-management-permissions
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist directs administrators to use Estimate costs and create Azure budgets and threshold alerts, but these controls have no table row. | Found: Estimate monthly cost with the in-product Estimate costs tool and create Azure budgets and threshold alerts for the DSI resource group. Table rows: proactive AI insights; role membership; billing setup; usage dashboard. | Fix: Remove the checklist bullet 'Estimate monthly cost with the in-product Estimate costs tool and create Azure budgets and threshold alerts for the DSI resource group.' Keep the verified cost-management recommendations in Cost and licensing; do not add control rows during correction.
- [contradicted, minor] Governance controls / consistency: The prose states that a dedicated tenant-wide switch is absent, but no both-null row records that gap. | Found: DSI has no dedicated tenant-wide switch in the sources. Controls rows cover proactive AI insights, role membership, billing setup and usage reporting; none records a separate tenant-wide switch. | Fix: Remove 'DSI has no dedicated tenant-wide switch in the sources:' and start the paragraph 'The opt-in toggle in DSPM governs proactive investigations'. This removes the unrepresented absence without adding a control row.
-->
