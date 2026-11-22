---
title: "Microsoft Purview DLP: Security Copilot explanations of policy changes"
slug: "microsoft-purview-data-loss-prevention-dlp-policy-change-insights-with-security-copilot"
roadmapId: 559106
topic: "governance"
products: ["Microsoft Purview"]
summary: "Planned Security Copilot summaries of what changed after each DLP policy update in Microsoft Purview. Optional and admin-facing; licensing and any switch are not yet published, so no action is needed yet."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says a related Purview DLP feature needs a Security Copilot licence. Security Copilot is included for Microsoft 365 E5 and E7 customers (400 SCUs a month per 1,000 licences), or provisioned in SCUs otherwise. Nothing feature-specific is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","security-copilot","governance","ai"]
sources:
  - title: "Microsoft 365 Roadmap 559106"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559106"
    kind: "roadmap"
  - title: "Test your Data Loss Prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    kind: "learn"
  - title: "Security Copilot in Microsoft Purview Overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-overview"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Microsoft Security Copilot Frequently Asked Questions"
    url: "https://learn.microsoft.com/copilot/security/faq-security-copilot"
    kind: "learn"
videos: []
related: ["data-loss-prevention-dlp-policy-change-insights-with-security-copilot","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","endpoint-dlp"]
controls:
  - governs: "Separate on/off switch for DLP policy change explanations"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented for this feature. The Purview source in Security Copilot is a related control; Learn does not say it governs this feature alone."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-22"
    note: "New briefing: Security Copilot explanations of DLP policy changes in Microsoft Purview, with Security Copilot licensing and SCU rules and no documented switch yet."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 62 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 55
  unconfirmed: 3
  contradicted: 4
  attempts: 1
  hash: "85ba558549f915dd013dd19184da9fbc"
---

## What's changing

The roadmap item describes a Microsoft Security Copilot capability in Microsoft Purview Data Loss Prevention (DLP) that writes a plain-language explanation of what changed in a DLP policy after each update. It would compare the policy version before and after the update and explain what changed, where it changed (rule, condition, action, location and so on), the impact of the change and the potential enforcement implications. The roadmap states the goal as removing manual comparison of policy versions.

Microsoft Learn does not describe this feature yet (at the time of writing, November 2026), so what is stated here about its behaviour is the roadmap's description. The closest documented capability is **Get insights with Copilot**, a Security Copilot skill on the Purview DLP policies page. Learn marks it as in preview and describes it as explaining what selected policies are doing and where they are active, not what changed between versions. Do not treat its behaviour as the behaviour of this feature.

The roadmap record lists the item as In development, with a preview target of September CY2026 and a general availability target of October CY2026. Both targets are earlier than today (22 November 2026) while the status is still In development, and the record was last modified on 28 July 2026, so treat the dates as unconfirmed. The record lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

DLP policies decide what the organisation blocks, audits or lets through, so a quiet edit to a rule, condition or location can change enforcement without anyone noticing. A generated explanation of each update could help a compliance team review changes faster. It is also a new Security Copilot dependency in a governance workflow, with its own licensing and a source that is AI-generated.

Microsoft has not stated what happens on arrival or whether an administrator has to switch anything on, and no source says existing DLP behaviour changes. Nothing needs doing now beyond checking how the tenant would get Security Copilot and who would review the explanations.

## Risk assessment

**Data exposure**
- The roadmap says the capability analyses the pre-update and post-update versions of a DLP policy, so rule, condition, action and location settings are the input. Microsoft's Security Copilot inclusion page says relevant Customer Data may be copied, processed and stored by Security Copilot to provide responses. How this feature handles policy data is not described.
- That page also says that if an organisation chooses not to share Microsoft 365 service data with Security Copilot in Owner settings, it cannot use Security Copilot with Microsoft products such as Microsoft Purview.

**Security & identity**
- The role needed for this feature is not yet published. For the related Get insights with Copilot feature, Learn requires the Information protection admin role. Do not assume the same role applies here.
- An AI summary of enforcement implications can be wrong or incomplete. Compare it with the policy itself before relying on it for an approval or audit decision.

**Autonomy & actions**
- The roadmap describes explanations only. It states no action that edits, rolls back or approves a policy, so the briefing assumes none.

**Change & support**
- The roadmap lists both Preview and General Availability, and the target dates have passed with the status still In development. Expect the behaviour, wording and licensing to be settled only when Learn documents it.
- Each explanation may draw on the tenant's Security Copilot capacity. SCU use for this feature is not yet published.

## Cost and licensing

Licence: the roadmap names Microsoft Security Copilot as the engine. For the related Get insights with Copilot feature, Learn lists two prerequisites: the organisation must be licensed for Microsoft Security Copilot, and the account must be in the Information protection admin role. A licence statement specific to this feature is not yet published.

Meter: Security Copilot is measured in Security Compute Units (SCUs). Microsoft's inclusion page says Microsoft 365 E5 and E7 customers get 400 SCUs each month for every 1,000 paid user licences, up to 10,000 SCUs each month, at no additional cost, and that allocations reset monthly and do not roll over. The same page says usage beyond the allocation will be throttled at a future date, after which customers can scale beyond it at $6 USD for each SCU on a pay-as-you-go basis, with 30 days' advance notice.

Customers without Microsoft 365 E5 or E7 licences continue to use the existing Security Copilot pricing model. Microsoft's Security Copilot FAQ says provisioned SCUs are billed hourly and overage SCUs can be set from 0 to 999 and are billed only when used. Usage can be tracked in the in-product usage dashboard in the Security Copilot standalone portal.

Not yet published: whether this feature consumes SCUs and how many per explanation.

## Scope

Who: compliance and security administrators who maintain Purview DLP policies. The roadmap names these two groups as the audience and does not describe end-user behaviour.

Clouds and platforms: the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Release phases listed are Preview and General Availability. A separate briefing covers the roadmap item for GCC, GCC High and DoD.

Prerequisites: none are published for this feature. The related Get insights with Copilot feature requires a Security Copilot licence and the Information protection admin role. Learn states that the Microsoft Purview source in Security Copilot is enabled by default and that the embedded experiences need it enabled.

## Governance guidance

### Before rollout
- Confirm with your licensing owner how the tenant gets Security Copilot: Microsoft 365 E5 or E7 inclusion, or provisioned SCUs.
- List who edits DLP policies and who reviews changes, so you know who would read the explanations.
- Record how DLP policy changes are approved today, so an explanation can be compared with the approved change.

### At rollout
- Compare each early explanation with the policy's actual rules, conditions, actions and locations before relying on it.
- Keep the existing DLP change approval step. The roadmap describes explanations only.
- Read the Learn page for this feature when it appears, and note the role and licence it names.

### After rollout
- Watch SCU consumption in the Security Copilot usage dashboard once the feature is in use.
- Ask reviewers whether the explanations matched the real change, and report mismatches to Microsoft through the feedback option Security Copilot provides.
- Re-read this briefing when the roadmap status moves from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Separate on/off switch for DLP policy change explanations</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented for this feature. The Purview source in Security Copilot is a related control; Learn does not say it governs this feature alone.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting or API for policy change explanations at the time of writing (November 2026), so the table shows the gap. Nothing is documented that lets an administrator turn this feature on or off separately.

Two related controls exist for Security Copilot in Purview. In the Security Copilot portal, the Purview source is switched on the Manage plugins page, and Learn states that it is enabled by default and that the embedded experiences need it on. Learn does not say that this toggle governs this feature. Security Copilot owners can also control whether Microsoft 365 service data is shared with Security Copilot in Owner settings, which Learn says affects use with Purview. Neither is a control over this feature alone.

## Open questions

- Does the feature consume SCUs, and how many per explanation? Watch the Security Copilot SCU and capacity pages on Learn.
- Which role is required to see the explanations: Information protection admin, as for Get insights with Copilot, or another? Watch the Purview DLP pages on Learn.
- Is there a tenant setting to turn the explanations on or off, and is it on by default? Watch Message center and Learn.
- The Preview and General Availability targets (September and October CY2026) have passed with the status still In development. When will it reach tenants? Watch the Microsoft 365 roadmap item.
- Where are the explanations stored, and are they kept as part of the policy's version history? Not yet described by Microsoft.

<!-- rationale
risk: Low. The roadmap describes read-only explanations of DLP policy changes for admins, with no stated change to enforcement; the default state is not stated, so this rates today's behaviour continuing.
cost: Variable. The roadmap says it uses Security Copilot, which is metered in Security Compute Units (SCUs); Microsoft has not published a rate or SCU use for this feature.
impact: Low. Only compliance and security administrators who edit or review DLP policies would see the explanations; end users are not described as affected.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary / default: The capability is optional. | Found: Searched: 'DLP policy change insights' Security Copilot SCU license default on off. Read roadmap, DLP testing, Purview Copilot overview and inclusion pages; none states this capability is optional or requires a user's choice. | Fix: Replace 'Optional and admin-facing' with 'Admin-facing; arrival behaviour is not stated'. Keep defaultState as unknown.
- [contradicted, blocker] summary / consistency: Licensing is not yet published. | Found: summary: 'licensing and any switch are not yet published'; licensing.model: 'mixed'; licensing.notes: 'Security Copilot is included for Microsoft 365 E5 and E7 customers ... or provisioned in SCUs otherwise.' | Fix: Replace 'licensing and any switch are not yet published' with 'Security Copilot licensing applies; a feature-specific switch is not yet documented'. This preserves the published product-level entitlement and the narrower feature-specific gap.
- [contradicted, blocker] Cost and licensing; Risk assessment: Change & support; Open questions / absence: Whether the feature consumes SCUs is not yet published. | Found: You consume SCUs in the following scenarios: ... Running embedded Security Copilot experiences ... Running other Security Copilot features and capabilities | Fix: Replace the unresolved consumption statement with: 'Microsoft documents SCU consumption for Security Copilot experiences and capabilities; an SCU amount per DLP policy change explanation is not yet published.' Cite https://learn.microsoft.com/copilot/security/security-compute-units-capacity. In Open questions, ask only 'How many SCUs does each explanation consume?' | Source: https://learn.microsoft.com/copilot/security/security-compute-units-capacity
- [contradicted, blocker] Governance controls: second paragraph / absence: Learn does not say the Purview source toggle governs this Security Copilot capability in Purview. | Found: Security Copilot in Purview must be enabled for both the standalone and embedded experiences to work. | Fix: Replace 'Learn does not say that this toggle governs this feature' with 'This is a prerequisite for Security Copilot standalone and embedded experiences in Purview, not a switch for policy change explanations alone.' Retain the narrower statement that no separate feature-only switch is documented. | Source: https://learn.microsoft.com/purview/copilot-in-purview-overview
- [unsupported, major] rationale: risk; Risk assessment: Autonomy & actions / behaviour: The feature is read-only and performs no policy edits, rollbacks or approvals. | Found: Searched: 'DLP' 'policy change' 'Copilot'; DLP policy change insights enable disable PowerShell Set-DlpCompliancePolicy API. Read roadmap and Purview overview; the roadmap describes explanations but does not state read-only operation or prohibit policy actions. | Fix: Replace 'read-only explanations' in the risk rationale with 'explanations'. Replace 'so the briefing assumes none' with 'those actions are not described'. Keep the supported statement that the roadmap describes no policy-editing action.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: The FAQ says provisioned SCUs are billed hourly. | Found: Provisioned SCUs are required to activate capacity and are billed hourly. | Fix: Add: 'The FAQ also calls provisioned SCUs billed monthly elsewhere; the capacity reference specifies hourly provisioned-capacity billing.' Cite https://learn.microsoft.com/copilot/security/security-compute-units-capacity, which states 'Provisioned capacity is billed per hour'. | Source: https://learn.microsoft.com/copilot/security/faq-security-copilot
- [supported, minor] Cost and licensing / cost: The FAQ says overage SCUs can be set from 0 to 999. | Found: Overage SCUs can be set from 0 to 999 and are billed only when used. | Fix: Append: 'The capacity reference additionally documents an unlimited overage setting.' Cite https://learn.microsoft.com/copilot/security/security-compute-units-capacity, which says overage capacity 'Can be configured with a maximum limit or set to unlimited'. | Source: https://learn.microsoft.com/copilot/security/faq-security-copilot
- [supported, minor] Governance controls / role: Security Copilot owners manage Owner settings. | Found: You need the Security Copilot owner role to manage owner settings. | Fix: Add https://learn.microsoft.com/copilot/security/owner-settings to sources to support the owner-role statement. | Source: https://learn.microsoft.com/copilot/security/owner-settings
- [supported, minor] Governance controls / admin-path: The Purview source toggle is on the Manage plugins page in the Security Copilot portal. | Found: Open https://securitycopilot.microsoft.com/. Open Sources in the prompt bar. On the Manage plugins page, set the Purview toggle to On to enable or Off to disable. | Fix: Replace the location-only sentence with: 'In the Security Copilot portal, open Sources in the prompt bar, then on Manage plugins set the Purview toggle to On or Off.' | Source: https://learn.microsoft.com/purview/copilot-in-purview-overview
- [unsupported, minor] rationale: impact / behaviour: Only compliance and security administrators who edit or review DLP policies would see the explanations. | Found: Searched: 'DLP policy' 'change insights' permissions default storage; 'Security Copilot' 'DLP' 'policy changes' license role storage. The roadmap identifies intended audiences but supplies no exhaustive viewer restriction. | Fix: Replace the first sentence of the impact rationale with: 'Low. The roadmap identifies compliance and security administrators as the intended audience for the explanations.' Keep 'end users are not described as affected'.
- [supported, minor] Why it matters / behaviour: DLP policies determine protective actions such as monitoring and blocking, and edits to their conditions or scope can change enforcement. | Found: DLP policies monitor the activities that users take on sensitive items and, if the policy conditions are met, take protective actions. | Fix: Add https://learn.microsoft.com/purview/dlp-learn-about-dlp to sources to support the explanation of DLP enforcement. | Source: https://learn.microsoft.com/purview/dlp-learn-about-dlp
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist directs readers to monitor SCU consumption, but the controls table has no usage-monitoring row. | Found: After rollout: 'Watch SCU consumption in the Security Copilot usage dashboard once the feature is in use.' The controls table contains only 'Separate on/off switch for DLP policy change explanations'. | Fix: Remove the 'Watch SCU consumption in the Security Copilot usage dashboard once the feature is in use' checklist bullet because it names a control absent from the table. The cost section may retain the documented dashboard information.
-->
