---
title: "Microsoft 365 Copilot: accounting skills in Excel and Cowork"
slug: "m365-copilot-m365-accounting-skills"
roadmapId: 578864
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "Accounting skills for reconciliations, journal entries and reporting are planned for Copilot in Excel and Cowork. Admins can block the Cowork plugin; Excel controls and any separate price are not yet documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Manage plugins page says users of Cowork plugins must have Microsoft 365 Copilot licences assigned. No separate price or meter for accounting skills, and no licence statement for the Excel side, is published."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["m365-copilot","cowork","skills","plugins","frontier-program","excel","accounting","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 578864"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578864"
    kind: "roadmap"
  - title: "Available plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-available-plugins"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Overview of Copilot skills for Excel (preview)"
    url: "https://learn.microsoft.com/office/dev/add-ins/excel/excel-skills"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-cowork-access-business-applications-with-work-iq","auditing"]
controls:
  - governs: "Whether the Accounting for Cowork plugin is blocked or available to users or groups"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Users > Block"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Role: tenant administrator or Copilot administrator. The API needs an Agent 365 licence; its page does not name plugins, so confirm the plugin appears as a package."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 578864: accounting skills for Excel and Cowork, with the Cowork plugin block control and open questions on Excel."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 56
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "44e4898362c5d10c4ff792b5991430c6"
---

## What's changing

The roadmap item adds accounting skills to Copilot in Excel and Cowork. Its description lists three groups of tasks: reconciling accounts (comparing balances and transactions, identifying discrepancies and preparing reconciling items for review), drafting journal entries (accruals, reclassifications, allocations, reversals and recurring entries, with checks for required inputs and balanced entries), and reporting (analysing financial performance against plan and explaining what changed). It adds that further capabilities span audit, tax, FP&A, compliance and training.

The record also says finance professionals will be able to start an audit trail whenever they invoke an accounting capability. If chosen, it creates a record in their chat history of what Copilot changed and why. The roadmap states this is available today in Excel and coming soon to Cowork. It reports that in seven days of limited Insiders availability more than 8,000 unique users invoked accounting skills over 44,000 times across more than 18,000 Copilot conversations.

On Cowork, Microsoft Learn documents a plugin called Accounting for Cowork (Frontier), described as currently available for users in the Frontier program. It includes skills for journal entries, reconciliation, financial statements, budget and forecast, financial presentations and tax preparation. A user adds it from the Plugins page in Cowork. The roadmap item does not name this plugin, so confirm that the two are the same before relying on the Learn page. At the time of writing (November 2026), the Learn pages found describe the Cowork plugin and not the Excel accounting skills, so the Excel behaviour below is the roadmap's description.

The roadmap shows the status as In development, with a preview date of October CY2026 and a target date of November CY2026, for Desktop, Mac and Web in the Worldwide (Standard Multi-Tenant) cloud, in General Availability and Preview phases. The Learn page describes the Cowork plugin as already available to Frontier users, which differs from the roadmap's status. Treat the roadmap dates as Microsoft's targets.

## Why it matters

This puts an AI assistant into accounting work: reconciliations, journal entries and reporting. Microsoft's Learn page for the Cowork plugin says Copilot does not provide accounting, tax, audit or financial advice, that output must be reviewed and verified against source records before entries are posted to a system of record, and that the plugin does not replace an organisation's internal controls, review or approval processes. For a service owner, that makes the change a question of finance controls as much as of IT.

Microsoft has not stated what happens on arrival in Excel, so no source says existing behaviour changes. The Cowork plugin is added by the user from the Plugins page or deployed by an administrator. Decide now whether finance staff in your tenant should use it, so that the answer is in place before the November CY2026 target.

## Risk assessment

**Data exposure**

- The Cowork plugin is described as working from financial data in connected systems and materials the user provides, such as trial balances, general ledger and subledger detail, bank statements, invoices, budgets and supporting schedules. That puts finance records into Copilot conversations. Row 1 of the controls table limits who can use the plugin.
- The Excel skills work on workbooks, so test them on a sample workbook before pointing them at live ledger extracts.

**Security & identity**

- Managing the plugin needs a tenant administrator or the Copilot administrator role, so limit who holds those roles.
- Confirm which identity the skills use when they reach connected accounting systems before connecting a production ledger.

**Autonomy & actions**

- The skills draft journal entries and prepare reconciling items, and the roadmap describes them as prepared for review. The Learn page warns that output must be verified before posting, so require a named reviewer and approval before any entry reaches a system of record.
- The audit trail is an option each user chooses when invoking a capability, according to the roadmap. Do not treat it as an enforced control.

**Change & support**

- The roadmap shows In development with a November CY2026 target, while Learn describes the Cowork plugin as available to Frontier users, so users may ask for it before the roadmap date. Agree the answer in advance.
- The roadmap says the audit trail is available in Excel today and coming soon to Cowork, so users may see different behaviour in the two apps.

## Cost and licensing

Licence: Microsoft's Manage plugins page lists, as a prerequisite, that users who use Cowork plugins must have Microsoft 365 Copilot licences assigned. That page also says admins need to be a tenant administrator or have the Copilot administrator role.

Meter: no separate price, meter or credit rate for accounting skills is published on the pages read at the time of writing (November 2026). Whether Cowork or Excel use of these skills draws on a Copilot Credits meter is not stated for this feature; see [Copilot Credits](/concepts/copilot-credits/) for how that meter works generally.

Indirect cost: finance reviewers need time to verify Copilot's output, as Microsoft's page requires. The Graph block call in the controls table needs a Microsoft Agent 365 licence according to its reference page.

## Scope

Users: finance and accounting staff who use Excel or Cowork. For Cowork plugins, Microsoft's page requires Microsoft 365 Copilot licences for users. Cowork availability for this plugin is described as currently available for users in the Frontier program.

Platforms and cloud, from the roadmap record: Desktop, Mac and Web, in the Worldwide (Standard Multi-Tenant) cloud. Release phases are General Availability and Preview. Rollout mechanics for Excel are not stated.

Roles: a tenant administrator or the Copilot administrator role manages Cowork plugins in the Microsoft 365 admin center.

## Governance guidance

### Before rollout

- Decide with the finance lead which accountants may use accounting skills, and whether the Cowork plugin should be available to everyone or to specific groups (controls table, row 1).
- Confirm with Microsoft's documentation or your account team whether the roadmap item and the Accounting for Cowork (Frontier) plugin are the same capability.
- Write a review rule for AI-drafted journal entries and reconciliations that names who verifies output before it is posted, in line with Microsoft's warning.

### At rollout

- Set the plugin to be available to specific users or groups, or block it, on its Users tab in the Microsoft 365 admin center if the pilot is limited to finance.
- Tell pilot users that the audit trail is a choice they make when invoking a capability, and ask them to switch it on for entries and reconciliations.

### After rollout

- Search Microsoft Purview audit logs for Copilot activities, which Microsoft says capture Cowork and plugin interactions, to see who is using the plugin.
- Re-check the Learn plugin page for any move out of Frontier and for Excel documentation when the roadmap status changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Accounting for Cowork plugin is blocked or available to users or groups</strong><br><small>Tenant</small><br><small class="controls__note">Role: tenant administrator or Copilot administrator. The API needs an Agent 365 licence; its page does not name plugins, so confirm the plugin appears as a package.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Block <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking a plugin takes effect for new conversations; conversations already in progress that use the plugin continue until they end. Microsoft's page names the plugin availability options as available to all users, available to specific users or groups, or block.

This row governs the Cowork plugin only. The Learn pages read do not describe a control for the Excel accounting skills. Plugin activity appears in Microsoft Purview audit logs under Copilot activities; see [Auditing](/concepts/auditing/).

## Open questions

- Which admin control, if any, turns the Excel accounting skills on or off, and where is it documented? Watch the Microsoft 365 roadmap item and Learn.
- Is the audit trail setting something an administrator can require, or does each user choose it, in Excel and in Cowork when it arrives?
- Does use of accounting skills in Excel or Cowork consume Copilot Credits or need any licence beyond Microsoft 365 Copilot?
- Is the roadmap item the same capability as the Accounting for Cowork (Frontier) plugin, and when does it move out of the Frontier program?

<!-- rationale
risk: Medium. Accountants will point Copilot at ledgers, bank statements and journal entries, and Microsoft's own page says its output must be verified before entries are posted; the plugin can be blocked, but no Excel-side control is documented.
cost: Low. Microsoft's plugin page lists Microsoft 365 Copilot licences as the prerequisite for Cowork plugin users and publishes no separate accounting price; the known cost is admin and review time.
impact: Medium. Finance and accounting staff notice it, with roadmap figures of more than 8,000 Insiders users in seven days; most other users do not.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The built-in Excel accounting skills work on workbooks. | Found: Searched: Copilot in Excel accounting skills workbook; Excel Copilot accounting skills. Read excel-skills, which describes custom skills using Office.js, not these built-in accounting skills; the roadmap does not specify their workbook interaction. | Fix: Remove the unsupported premise and retain the advice as: 'Test the Excel accounting experience on a sample workbook before using live ledger extracts.'
- [contradicted, blocker] front matter: licensing.model / licensing: The feature's licensing model is included, without a consumption component. | Found: Cowork uses a usage-based billing model. Activities such as model responses, tool and skill calls, image generation, and browser tasks count toward your organization's consumption. | Fix: Set licensing.model to 'mixed'. In licensing.notes retain the documented Microsoft 365 Copilot prerequisite and add: 'Cowork uses usage-based billing in Copilot Credits, including skill calls.' Cite https://learn.microsoft.com/copilot/cowork/cowork-admin-governance and https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits. | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance
- [contradicted, blocker] Cost and licensing: Meter; Open questions / cost: Whether Cowork use of accounting skills draws on a Copilot Credits meter is not stated. | Found: Cowork uses a usage-based billing model. Activities such as model responses, tool and skill calls, image generation, and browser tasks count toward your organization's consumption. | Fix: Replace the sentence beginning 'Whether Cowork or Excel use' with: 'Cowork skill calls count toward usage-based consumption measured in Copilot Credits; no accounting-specific rate was found.' Cite https://learn.microsoft.com/copilot/cowork/cowork-admin-governance and https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits. Narrow the related open question to accounting-specific Excel licensing or consumption. | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance
- [contradicted, blocker] front matter: licensing.notes / licensing: No licence statement is published for the Excel side. | Found: Everyday AI experiences, such as chat and Copilot in Microsoft 365 apps, are included with your Microsoft 365 Copilot license. | Fix: Replace 'no licence statement for the Excel side, is published' with 'Copilot in Microsoft 365 apps is included with a Microsoft 365 Copilot licence; no additional accounting-specific Excel licence requirement was found'. Cite https://learn.microsoft.com/microsoft-365/commerce/usage-based-billing-faq-microsoft-365-copilot-business?view=o365-worldwide. Do not equate absence of accounting-specific documentation with absence of the product's licensing statement. | Source: https://learn.microsoft.com/microsoft-365/commerce/usage-based-billing-faq-microsoft-365-copilot-business?view=o365-worldwide
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost is low because the known cost is only admin and review time. | Found: Briefing: 'the known cost is admin and review time.' Microsoft: 'Cowork uses a usage-based billing model. Activities such as model responses, tool and skill calls, image generation, and browser tasks count toward your organization's consumption.' | Fix: Set cost to 'variable'. Replace the cost rationale with: 'Variable. Cowork skill calls consume Copilot Credits under usage-based billing; admin and finance review time add indirect cost. No accounting-specific tariff was found.' Cite https://learn.microsoft.com/copilot/cowork/cowork-admin-governance and https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits. | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Retain the call and add to the row note: 'This beta API is subject to change and is not supported for production applications.' The cited reference explicitly gives that warning. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [supported, minor] controls[0].governs; controls[0].api / applicability: Copilot package management includes tools such as plugins, making the block operation relevant to a plugin package. | Found: To return titles that contain tools, such as plugins, MCP servers, and skills, filter on elementTypes. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list to sources; it supplies the documented connection between package management and plugins that the block reference alone does not state. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist instructs readers to search Purview audit logs, but that control has no controls-table row. | Found: Checklist: 'Search Microsoft Purview audit logs for Copilot activities'. The only controls row is 'Whether the Accounting for Cowork plugin is blocked or available to users or groups'. | Fix: The 'After rollout' step beginning 'Search Microsoft Purview audit logs' names a control with no table row. Remove that checklist step; the separately supported audit-logging description can remain.
-->
