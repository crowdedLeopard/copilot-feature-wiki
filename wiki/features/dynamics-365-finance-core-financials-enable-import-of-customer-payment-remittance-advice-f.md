---
title: "Dynamics 365 Finance: AI import of customer payment remittance advice for settlement"
slug: "dynamics-365-finance-core-financials-enable-import-of-customer-payment-remittance-advice-f"
roadmapId: 576741
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Finance"]
summary: "Microsoft plans AI import and matching of customer remittance advice in Dynamics 365 Finance, feeding payment journals and settlement. Preview targeted for March CY2027. Controls, default and licence are not yet documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "March CY2027"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence or meter, and the Microsoft Learn pages for Copilot in finance and operations apps list no entry for this feature."
audiences: ["finops","service-owner","power-platform-admin"]
tags: ["dynamics-365","finance-and-operations","accounting","ai","power-platform","automation"]
sources:
  - title: "Microsoft 365 Roadmap 576741"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576741"
    kind: "roadmap"
  - title: "Overview of Copilot capabilities in finance and operations apps"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/copilot/copilot-for-finance-operations"
    kind: "learn"
  - title: "Customer payment overview"
    url: "https://learn.microsoft.com/dynamics365/finance/cash-bank-management/tasks/customer-payment-overview"
    kind: "learn"
videos: []
related: ["dynamics-365-finance-business-performance-mcp-for-erp-analytics"]
controls:
  - governs: "Enabling or disabling remittance advice import and AI processing"
    scope: "other"
    ui: null
    api: null
    note: "No setting, role or admin centre path is documented. The roadmap says only that admins, makers or marketers enable it for end users."
confidence: "low"
created: "2026-11-21"
updated: "2026-11-28"
roadmapModified: "2026-10-16T19:08:26"
changes:
  - date: "2026-11-21"
    note: "New briefing. Microsoft Learn does not yet describe this feature, so the page rests on the roadmap record."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 47 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 47 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the Data exposure bullet, which stated what remittance advice usually contains; it now advises inspecting your own samples. Reworded the preview date in the summary and added the customer payment overview as a source."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 46 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "22a44c1157a353c0fb27a7d07320e846"
---

## What's changing

The roadmap item describes a Dynamics 365 Finance capability that imports customer payment and remittance advice, scans and maps it using AI, matches it with data in Dynamics 365 Finance, and passes the details into customer payment journals and the settlement process. It also lists reports on payment and settlement status, outstanding invoices and overall cash flow.

The roadmap text says the AI processing happens "in the integrated Power Platform environment". It does not say which Power Platform components are involved, and it does not say which file or message formats are accepted. Microsoft Learn does not describe this feature yet, so everything on this page about its behaviour is the roadmap's description.

The roadmap record gives the status as In development, with a preview targeted for March CY2027 and general availability targeted for June CY2027. Both are Microsoft's targets, not commitments. The record lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview. Its "Enabled for" line reads "Enabled by admins/makers/marketers for end users"; the roadmap does not say whether the feature is on or off when it arrives.

## Why it matters

This change puts AI between customer remittance documents and the payment journal lines that drive settlement of open invoices. That is financial data feeding postings, so the review step, the error handling and the audit trail matter more than the time saving the roadmap promises.

Microsoft has not stated what happens on arrival, so base your plan on the roadmap dates and on no source saying existing behaviour changes. A finance service owner can use the lead time before the March CY2027 preview to decide who would test it and what evidence of correct matching they would need.

## Risk assessment

**Data exposure**

- Treat imported remittance documents as sensitive financial data and inspect your samples for customer identifiers, invoice references and payment amounts before testing. The roadmap says the documents are imported, scanned and mapped by AI in the integrated Power Platform environment; where that data is processed and stored is not yet documented.

**Security & identity**

- Microsoft has not documented which account the import runs as or which roles can use it, so confirm both before enabling it for the accounts receivable team.

**Autonomy & actions**

- The roadmap says remittance details are integrated into customer payment journals and the settlement process. Whether a person reviews matches before they are settled is not stated; confirm this in preview, because a wrong match could settle the wrong invoice.

**Change & support**

- A preview is targeted for March CY2027 and general availability for June CY2027. Expect the preview to change before general availability, and plan finance-team training and support for matching exceptions.

## Cost and licensing

No licence, meter or price for this feature is published at the time of writing (November 2026). The roadmap item names none, and the Microsoft Learn overview of Copilot capabilities in finance and operations apps lists no entry for it.

The roadmap says the AI processing runs in the integrated Power Platform environment. Microsoft has not said whether that incurs a Power Platform or Copilot Credits charge, so a rate for this feature is not yet published. Indirect costs known today are finance-team time to test the preview and to handle exceptions.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform. It lists Dynamics 365 Finance and Microsoft Copilot (Microsoft 365) as products, with release phases Preview (targeted March CY2027) and General Availability (targeted June CY2027).

The "Enabled for" line says "Enabled by admins/makers/marketers for end users". Prerequisites, supported roles, supported file formats and which users or legal entities are covered are not yet documented. Microsoft has not said how the feature is rolled out.

## Governance guidance

### Before rollout

- Identify the accounts receivable owner who would test remittance import and approve its matching rules.
- List the remittance sources your customers use today (email attachments, bank portals, files) so you can check them against the formats Microsoft documents later.
- Ask your Microsoft account team or Dynamics 365 partner which licence and which Power Platform environment the feature needs.

### At rollout

- Test the preview in a non-production Finance environment first, using remittance samples with sensitive customer details removed.
- Confirm whether imported matches wait for a person's review before they reach a customer payment journal.

### After rollout

- Compare settled invoices against the remittance advice for a sample of each batch, and record the mismatch rate.
- Review the roadmap item and Microsoft's release notes for changes to the March CY2027 and June CY2027 targets.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enabling or disabling remittance advice import and AI processing</strong><br><small class="controls__note">No setting, role or admin centre path is documented. The roadmap says only that admins, makers or marketers enable it for end users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no control for this feature at the time of writing (November 2026), so the table records the gap. The roadmap's "Enabled for" line says admins, makers or marketers enable it for end users, but it does not name a setting, role or admin centre. Treat any enablement path as unconfirmed until Microsoft publishes it.

## Open questions

- Is the feature on or off when it arrives, and where does an administrator enable or disable it? Watch the roadmap item and Message center.
- Which licence, Power Platform capacity or Copilot Credits meter applies to the AI scanning and mapping? Watch the Dynamics 365 Finance Learn pages.
- Does a person review matches before they reach customer payment journals and settlement?
- Which remittance formats and channels are supported, and where is the document data processed and stored?

<!-- rationale
risk: Medium. The roadmap describes AI scanning and mapping of customer payment documents that feed payment journals and settlement, and Microsoft has not documented any control or default for it.
cost: Low. The only cost the sources show is admin and finance-team time; the licence and any meter for this feature are not yet published, so this rating may change.
impact: Medium. The roadmap says admins, makers or marketers enable it for end users; in practice the accounts receivable team that handles customer payments is the group that would notice.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; summary; Cost and licensing / licensing: Licensing is unknown because no licence specific to this feature has been published. | Found: Customers must acquire and assign appropriate subscription licenses for their users in the Microsoft 365 admin center, following Microsoft's product terms. | Fix: Set licensing.model to included. Replace licensing.notes and the first sentence of Cost and licensing with: 'Dynamics 365 Finance users need appropriate subscription licences based on their assigned security roles. Licence requirements, meters and prices specific to this feature are not yet published.' Cite https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/sysadmin/stay-compliant-user-license-requirement. Replace the summary's last sentence with: 'Feature-specific controls, default and additional licensing requirements are not yet documented.' Do not infer that AI processing has no additional charge. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/sysadmin/stay-compliant-user-license-requirement
-->
