---
title: "Microsoft Purview DLP: guided diagnostics for why a policy acted"
slug: "microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"
roadmapId: 561032
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP adds a guided view of why an action was taken on a document: which policies fired, in what order, and which conditions were true. E5 tenants also get Security Copilot insights. Microsoft says no action is required."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Neither the roadmap nor notice MC1293479 names a licence for the base diagnostics. The Copilot-powered insights are for Microsoft 365 E5 customers with eligible Copilot licensing; the SCU rate for them is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","security-copilot","debugging","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 561032"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561032"
    kind: "roadmap"
  - title: "MC1293479: (Updated) Microsoft Purview | Data Loss Prevention: New guided diagnostics experience for DLP"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1293479"
    kind: "message-center"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Test your Data Loss Prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    kind: "learn"
  - title: "Security Copilot in Microsoft Purview Overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-overview"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Understand how Security Copilot is auto provisioned for eligible Microsoft 365 E5 and E7 customers"
    url: "https://learn.microsoft.com/copilot/security/auto-provisioning-security-copilot"
    kind: "learn"
  - title: "Privacy and data security in Microsoft Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/privacy-data-security"
    kind: "learn"
  - title: "Configure Copilot settings with the owner role"
    url: "https://learn.microsoft.com/copilot/security/owner-settings"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges"]
controls:
  - governs: "Availability of the guided diagnostics experience, and who can see it"
    scope: "tenant"
    ui: null
    api: null
    note: "Notice MC1293479 says it is available to all users who have permission to view DLP policies. No tenant switch is documented at the time of writing (November 2026)."
  - governs: "Whether Security Copilot can query Microsoft 365 services such as Microsoft Purview for data"
    scope: "tenant"
    ui:
      surface: "Security Copilot portal"
      path: "Settings > Owner settings"
      docs: "https://learn.microsoft.com/copilot/security/privacy-data-security"
    api: null
    note: "General Security Copilot control; Microsoft has not confirmed it governs the DLP insights. Needs the Security Copilot owner role. Default is ON where auto-provisioned for E5 or E7."
  - governs: "Whether the Microsoft Purview source is enabled in Security Copilot"
    scope: "tenant"
    ui:
      surface: "Security Copilot portal"
      path: "Sources > Manage plugins > Purview"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-overview"
    api: null
    note: "General Security Copilot control; Microsoft has not confirmed it governs the DLP insights. Learn says Security Copilot in Purview is enabled by default."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: the launched DLP guided diagnostics, the E5 Security Copilot insights, and the Security Copilot settings that may govern them."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 68
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "04b771161f799b8194709054889b18a1"
---

## What's changing

Microsoft is adding a guided diagnostics experience to Microsoft Purview Data Loss Prevention (DLP). The roadmap item says it gives a clear summary of why a DLP action was taken on a document: which policies were triggered, the order of evaluation, and which conditions evaluated as true or false. Microsoft Learn has no page for this experience at the time of writing (November 2026), so what follows about its behaviour is the description in the roadmap item and in Microsoft's notice.

Microsoft's notice MC1293479 says the experience appears in the Microsoft Purview portal, is available to all users who have permission to view DLP policies, and shows the policy evaluation order, the conditions that matched and the action taken (allow, block, audit). The notice also says existing DLP policies and enforcement behaviour are not changed.

For Microsoft 365 E5 customers, the roadmap item adds Copilot-powered insights and tailored recommendations for troubleshooting and policy optimisation. The notice calls these Security Copilot-powered insights, says they are available only to customers with eligible Microsoft 365 E5 and Copilot licensing, and says they analyse existing DLP configuration data and diagnostic metadata, add no new customer content sources and do not change DLP enforcement decisions.

The roadmap item is Launched, with a preview target of September CY2026 and a general availability target of October CY2026, for Worldwide (Standard Multi-Tenant) on the web. The notice, updated 4 August 2026, gave public preview as early September 2026 and said Microsoft expected to begin the Worldwide general availability rollout in October 2026. It sets no act-by date.

## Why it matters

This is a support-load change. When someone asks why a file was blocked, or why a policy did not fire, the people who own DLP get a per-document explanation of evaluation order and matched conditions. Learn documents that rules run in priority order within a policy and that, across Exchange, SharePoint and OneDrive, the first rule evaluated with the most restrictive action is enforced, so evaluation order is often the answer. Expect fewer escalations to the DLP owners and better evidence when tuning rules.

Microsoft's notice says no action is required and that the experience appears for administrators, so plan on it being there. The exposure to think about is who sees it: the notice ties availability to permission to view DLP policies, and that group may be wider than the people who write DLP rules. Microsoft has not said which DLP locations or condition types the diagnostics cover, so do not assume they replace the checks you run today.

## Risk assessment

**Data exposure**

- The diagnostics describe, per document, which policies and conditions matched. The notice makes them available to all users who can view DLP policies, so expect those users to see how your rules are written. Microsoft has not said what document detail is shown. No control that limits who sees the diagnostics is documented (controls table, row 1).
- Microsoft Learn says Security Copilot may copy, process and store relevant Customer Data to provide responses. Microsoft has not said whether that applies to the DLP insights; the notice says the insights add no new customer content sources.

**Security & identity**

- Who counts as having permission to view DLP policies is not defined in the notice. Confirm which roles hold it in your tenant before relying on it.
- The Copilot-powered insights run on Security Copilot. Its Microsoft 365 data access setting defaults to ON where Security Copilot is auto-provisioned through E5 or E7; whether switching it off removes the insights is unconfirmed (rows 2 and 3).

**Autonomy & actions**

- No change: the notice says the experience does not change enforcement and Copilot does not change DLP enforcement decisions. The insights are described as recommendations for troubleshooting and policy optimisation.

**Change & support**

- The notice suggests updating internal DLP troubleshooting documentation and telling security and compliance teams about the new flow. Helpdesk staff who use Test-DlpPolicies today will have two tools that may disagree on coverage.
- Microsoft's documentation links were still to come when the notice was updated, so runbooks cannot yet cite a Microsoft page for the experience.

## Cost and licensing

**Licence.** Neither the roadmap item nor notice MC1293479 names a licence for the base diagnostics beyond permission to view DLP policies; the licence for it is not yet published. The Copilot-powered insights are for Microsoft 365 E5 customers; the notice says they are available only to customers with eligible Microsoft 365 E5 and Copilot licensing.

**Meter.** Security Copilot is measured in Security Compute Units (SCUs). Microsoft Learn says Microsoft 365 E5 and E7 customers have 400 SCUs each month for every 1,000 paid user licences, up to 10,000 SCUs each month, at no additional cost, and that usage beyond that will be throttled at a future date, when customers can scale at $6 USD per SCU on a pay-as-you-go basis. Customers without E5 or E7 licences can continue to use Security Copilot under its existing pricing model. Whether the DLP insights consume SCUs, and at what rate, is not yet published. SCU use can be tracked in the usage dashboard in the Security Copilot standalone portal.

**Indirect costs.** Admin time to brief the DLP owners and update runbooks. Sources: [Learn about Security Copilot for Microsoft 365 E5 and E7 included customers](https://learn.microsoft.com/copilot/security/security-copilot-inclusion).

## Scope

- **Users:** the notice says the diagnostics are available to all users who have permission to view DLP policies, and the Copilot-powered insights to customers with eligible Microsoft 365 E5 and Copilot licensing.
- **Where:** the Microsoft Purview portal; the roadmap lists the platform as Web.
- **Clouds:** the roadmap lists Worldwide (Standard Multi-Tenant); the notice refers to commercial tenants. The roadmap item does not list GCC, GCC High or DoD.
- **Rollout:** the roadmap status is Launched (preview target September CY2026, general availability target October CY2026). The notice says it does not change existing DLP policies or enforcement.
- **Not stated:** which DLP locations (Exchange, SharePoint, OneDrive, Teams, endpoints) and which condition types the diagnostics cover.

## Governance guidance

### Before rollout

- Ask the DLP owners which roles in your tenant can view DLP policies, because the notice makes the diagnostics available to everyone with that permission (row 1).
- Check whether your tenant has eligible Microsoft 365 E5 and Copilot licensing, so you know whether the Copilot-powered insights should appear.
- Note the current state of the Security Copilot Purview source and Microsoft 365 data access settings (rows 2 and 3), so any change in the insights can be traced to them if Microsoft confirms they apply.
- Update internal DLP troubleshooting runbooks to mention the new diagnostics, as the notice suggests.

### At rollout

- Tell the security and compliance teams that the guided diagnostics flow is in the Microsoft Purview portal, as the notice suggests.
- Run the diagnostics on a document you know a DLP policy has acted on, and compare the result with a Test-DlpPolicies report for the same SharePoint or OneDrive item to see what each shows.
- Record which DLP locations and condition types the diagnostics explain in your tenant, since Microsoft has not said.

### After rollout

- Watch Message center and Microsoft Learn for the documentation the notice says will follow, and update runbooks and this briefing's controls when it appears.
- Where the Copilot-powered insights are in use, review SCU consumption in the Security Copilot usage dashboard.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Availability of the guided diagnostics experience, and who can see it</strong><br><small>Tenant</small><br><small class="controls__note">Notice MC1293479 says it is available to all users who have permission to view DLP policies. No tenant switch is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Security Copilot can query Microsoft 365 services such as Microsoft Purview for data</strong><br><small>Tenant</small><br><small class="controls__note">General Security Copilot control; Microsoft has not confirmed it governs the DLP insights. Needs the Security Copilot owner role. Default is ON where auto-provisioned for E5 or E7.</small></td><td data-label="Admin UI"><strong>Security Copilot portal</strong><br>Settings › Owner settings <a href="https://learn.microsoft.com/copilot/security/privacy-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft Purview source is enabled in Security Copilot</strong><br><small>Tenant</small><br><small class="controls__note">General Security Copilot control; Microsoft has not confirmed it governs the DLP insights. Learn says Security Copilot in Purview is enabled by default.</small></td><td data-label="Admin UI"><strong>Security Copilot portal</strong><br>Sources › Manage plugins › Purview <a href="https://learn.microsoft.com/purview/copilot-in-purview-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting that turns the guided diagnostics on or off, or restricts who sees them, is documented at the time of writing (November 2026), so row 1 is empty on both sides. Rows 2 and 3 are Security Copilot controls; changing Owner settings needs the Security Copilot owner role. Microsoft has not said whether either one governs the DLP insights.

Test-DlpPolicies is an existing alternative, not a control over the new experience. Learn describes it as showing which DLP policies scoped to SharePoint and OneDrive match an individual item there, and it does not work with complex, grouped or nested conditions. It emails its report to the SMTP address given in -SendReportTo.

## Open questions

- Which DLP locations (Exchange, SharePoint, OneDrive, Teams, endpoints) and condition types do the guided diagnostics cover? Watch the Microsoft Learn page the notice says will follow.
- Can an administrator restrict who sees the diagnostics, and which roles hold the permission to view DLP policies that the notice relies on?
- Does the base diagnostics experience need any licence, and do the Copilot-powered insights consume Security Compute Units from the E5 inclusion, at what rate?
- Does turning off the Security Copilot Purview source or its Microsoft 365 data access setting remove the insights?

<!-- rationale
risk: Low. Microsoft's notice says existing DLP policies and enforcement are not changed and no new customer content sources are introduced; the experience explains DLP decisions rather than making them.
cost: Low. Admin time is the only certain cost. No licence is published for the base diagnostics, and whether the E5 Copilot-powered insights draw on Security Compute Units is not yet published.
impact: Low. It is aimed at administrators and compliance staff who troubleshoot DLP; Microsoft's notice says there is no impact to user workflows.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / applicability: Microsoft has not said whether Security Copilot's documented data processing applies to the DLP insights. | Found: Microsoft Security products purchased by you may share data, including Customer Data, as described in the product documentation. Customer Data shared with Security Copilot is governed by the Product Terms, Data Protection Addendum, and documentation applicable to Security Copilot. | Fix: Replace the uncertainty sentence with: 'Data shared with Security Copilot is governed by Security Copilot product terms, data protection commitments and documentation; the notice identifies existing DLP configuration data and diagnostic metadata as inputs.' Keep the narrower statement that the notice introduces no new customer content sources. | Source: https://learn.microsoft.com/copilot/security/privacy-data-security
- [contradicted, blocker] controls[1].note; Risk assessment: Security & identity; Governance controls; Open questions / applicability: Microsoft has not confirmed whether disabling Microsoft 365 data access governs the DLP Security Copilot insights. | Found: Customers can choose not to share their Microsoft 365 service data with Copilot in the Owner settings page. However, the organization won't be able to use Copilot with Microsoft 365 products such as like Microsoft Purview. | Fix: Replace the unconfirmed-applicability statements for row 2 with: 'The Microsoft 365 services data access setting governs Security Copilot integration with Purview; disabling it prevents the organisation from using Copilot with Purview.' Cite the already-listed Security Copilot inclusion page. Remove the corresponding open question about whether this setting removes the insights. | Source: https://learn.microsoft.com/copilot/security/security-copilot-inclusion
- [contradicted, blocker] controls[2].note; Governance guidance; Governance controls; Open questions / applicability: Microsoft has not confirmed whether the Purview source toggle governs the DLP Security Copilot insights. | Found: Security Copilot in Purview must be enabled for both the standalone and embedded experiences to work. | Fix: Replace the unconfirmed-applicability statements for row 3 with: 'Microsoft documents the Purview source as required for both standalone and embedded Security Copilot experiences in Purview.' Remove the corresponding open question and the condition 'if Microsoft confirms they apply' from the checklist. | Source: https://learn.microsoft.com/purview/copilot-in-purview-overview
- [contradicted, blocker] controls[2].scope; Governance controls: row 3 / applicability: The Sources > Manage plugins > Purview toggle is a tenant-wide control. | Found: To personalize the way Security Copilot interacts with you ... Turn any plugin on or off ... Select which plugins Security Copilot uses as a data source by turning service toggles on or off. | Fix: Change controls[2].scope and the rendered scope from tenant to user. Add to its note: 'This source toggle personalises the user's active plugins; it is not the organisation-wide plugin availability restriction.' Cite https://learn.microsoft.com/copilot/security/use-plugins for the distinction. | Source: https://learn.microsoft.com/copilot/security/use-plugins
- [contradicted, blocker] Cost and licensing: Meter; Open questions; rationale: cost / cost: Whether the DLP Security Copilot insights consume SCUs is not yet published. | Found: You consume SCUs in the following scenarios: ... Running embedded Security Copilot experiences ... Running other Security Copilot features and capabilities | Fix: Replace the consumption uncertainty with: 'The Security Copilot-powered insights consume SCUs under the platform's embedded-experience capacity model; a rate specific to these diagnostics is not yet published.' Cite https://learn.microsoft.com/copilot/security/security-compute-units-capacity. Retain only the feature-specific rate question. | Source: https://learn.microsoft.com/copilot/security/security-compute-units-capacity
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost is low because admin time is the only certain cost and SCU consumption is unconfirmed. | Found: Briefing: 'Admin time is the only certain cost' and 'whether ... insights draw on Security Compute Units is not yet published.' Source: 'You consume SCUs ... Running embedded Security Copilot experiences'. The standard defines variable as metered. | Fix: Set cost to 'variable'. Replace the cost rationale with: 'Variable. Security Copilot-powered insights consume Security Compute Units, including allocated E5 capacity; a rate specific to these diagnostics is not yet published. Admin time is an additional indirect cost, and no licence specific to the base diagnostics is published.' Cite https://learn.microsoft.com/copilot/security/security-compute-units-capacity. | Source: https://learn.microsoft.com/copilot/security/security-compute-units-capacity
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: Microsoft 365 services data access is configured in the Security Copilot portal under Settings > Owner settings. | Found: Configuring Microsoft 365 services data access ... In Security Copilot, go to Settings > Owner settings. | Fix: Keep the cited path, but add: 'Microsoft documentation also describes Owner > Owner settings in the home menu; see https://learn.microsoft.com/copilot/security/navigating-security-copilot#use-the-home-menu.' That page lists Owner settings under Owner and describes Settings as theme, time zone and language preferences. | Source: https://learn.microsoft.com/copilot/security/privacy-data-security
-->
