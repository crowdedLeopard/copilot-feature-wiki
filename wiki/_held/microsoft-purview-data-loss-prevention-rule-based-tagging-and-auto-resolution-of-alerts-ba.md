---
title: "Microsoft Purview DLP: rules to auto-resolve and tag alerts"
slug: "microsoft-purview-data-loss-prevention-rule-based-tagging-and-auto-resolution-of-alerts-ba"
roadmapId: 568371
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans DLP rules that resolve or tag predictable alerts automatically. Preview is targeted for December CY2026. Microsoft Learn does not describe the feature yet, so admins should plan the rule design now."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Microsoft Learn states licence requirements for configuring DLP alerts in general (see Cost and licensing), but none specific to auto-resolution or tagging rules."
audiences: ["security","compliance"]
tags: ["purview","dlp","defender-xdr","governance"]
sources:
  - title: "Get started with the Data Loss Prevention Alerts dashboard"
    url: "https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started"
    kind: "learn"
  - title: "Get started with the data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alerts-get-started"
    kind: "learn"
  - title: "Learn about investigating data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alert-investigation-learn"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 568371"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568371"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-loss-prevention-sla-based-alert-reporting-dashboard","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","endpoint-dlp"]
controls:
  - governs: "Rules that automatically resolve or tag DLP alerts"
    scope: "tenant"
    ui: null
    api: null
    note: "Planned per the roadmap item (In development). Today an analyst sets alert Status to Resolved by hand; no rule setting is documented."
confidence: "low"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-21"
    note: "New briefing: planned DLP rules that auto-resolve and tag alerts, known only from the roadmap item."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 43
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "a44cd5cdf5a0b0409287e1a4ff2ea435"
---

## What's changing

Microsoft plans rules that tell Microsoft Purview Data Loss Prevention (DLP) in advance how to handle predictable alerts. The roadmap item describes two rule outcomes: resolving alerts an organisation does not need to see, and tagging alerts so they can be found and routed. Its examples are resolving Low-severity alerts for mail sent only to trusted partner domains, and labelling every alert from a Legal department as a "Business Process".

The roadmap item states that a rule is defined once and that DLP then applies it automatically to every new alert. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description: where rules are created, which conditions they support, how tags are named and whether a resolved alert stays visible are not documented at the time of writing (November 2026).

The roadmap record lists the status as In development, with a preview target of December CY2026 and a general availability target of February CY2027. It lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. These are Microsoft's targets, not commitments.

For context, Microsoft Learn documents the alert handling that exists today. Alerts are configured in DLP policy rules, can be investigated in the Microsoft Defender XDR dashboard (the recommended place) and the Microsoft Purview portal, and an analyst sets an alert's Status to Resolved by hand once the required action is taken. Rule-based resolution would automate a step that is manual in that description.

## Why it matters

Triage queues fill with alerts that a team already knows are harmless, and this feature is aimed at that noise. A well-scoped rule could remove predictable alerts from the queue and attach tags that route the rest, which matters most to security operations and compliance teams who work DLP alerts every day.

The trade-off is that an automatic resolution is a decision made before anyone sees the alert. Microsoft has not stated what happens on arrival or whether any rule exists by default, so treat the feature as something to design deliberately: agree which alert types are safe to resolve, who owns the rules and how often they are reviewed, before preview opens in December CY2026.

## Risk assessment

**Data exposure**
- No new data access is described in the roadmap item. The risk is indirect: an alert that is resolved automatically is one that no analyst reviews, so a rule that matches more mail, sites or users than intended could hide a real exfiltration event.
- The roadmap's own example (Low-severity alerts for mail sent to trusted partner domains) shows the kind of condition that needs careful scoping, because a trusted domain list is only as accurate as its upkeep.

**Security & identity**
- Microsoft Learn documents that DLP alert management requires the Manage alerts role plus either DLP Compliance Management or View-Only DLP Compliance Management. Which role will create or edit auto-resolution and tagging rules is not yet documented.

**Autonomy & actions**
- The roadmap says DLP applies a rule automatically to every new alert. That is an action taken without a person approving it each time, so rule changes deserve the same review as a policy change.
- Whether a resolved alert remains searchable, and how long, is not documented. Microsoft Learn says the DLP alert management dashboard retains alerts for 30 days and that audit log retention configuration controls how long an alert remains visible in the console.

**Change & support**
- Analysts may see fewer alerts, or alerts that arrive already tagged, once rules exist. Tell the triage team which rules are active so a missing alert is not mistaken for a policy fault.
- Microsoft Learn documents a separate, existing way to associate custom tags with DLP incidents in the Microsoft Defender portal. Whether the new tags are the same thing is not documented.

## Cost and licensing

Microsoft has not published a licence requirement, meter or price for alert auto-resolution and tagging rules at the time of writing (November 2026), and the roadmap item names none.

For DLP alerts in general, Microsoft Learn states that single-event alert configuration is available to organisations with a DLP subscription (E1, E3, E5, F1, G1, E3, G3, E5, G5), and that aggregated alert configuration needs an A5, E5 or G5 subscription, or an E1, F1, G1, E3 or G3 subscription with one of several named add-ons. Those statements are about generating alerts. They do not say which licence covers rules that resolve or tag them.

The cost the sources show is indirect: admin time to design, test and review rules. Check the DLP licensing page for your subscription again when Microsoft publishes documentation for the feature.

## Scope

The roadmap record lists the cloud as Worldwide (Standard Multi-Tenant) and the platform as Web. It lists the release phases as General Availability and Preview, with a preview target of December CY2026 and a general availability target of February CY2027. No US Government cloud is listed on the record; that is a record fact and not a statement that the feature is unavailable there.

The roadmap says rules apply to every new alert once defined. Which DLP workloads the rules cover (Microsoft Learn lists Exchange email, SharePoint sites, OneDrive accounts, Teams chat and channel messages, devices, instances, on-premises repositories, and Fabric and Power BI as workloads whose alerts appear in the dashboard) is not stated for this feature. Roles that can create rules, prerequisites and rollout mechanics are not yet documented.

## Governance guidance

### Before rollout
- Review the current volume and mix of DLP alerts in the DLP Alerts dashboard (Microsoft Purview portal > Data loss prevention > Alerts) to identify which alert types are predictable enough to resolve automatically.
- Draft a rule register that names, for each proposed rule, its owner, the condition, the outcome (resolve or tag) and a review date.
- Agree with legal, compliance and security operations which tags the organisation wants, using the roadmap's "Business Process" label for Legal as a pattern to test rather than a documented default.
- Confirm who holds the Manage alerts role and the DLP Compliance Management roles today, since rule authorship is likely to sit with the same people.

### At rollout
- Start with tagging rules before resolving rules, so analysts can see what a rule would have matched while every alert is still visible.
- Test any resolving rule on a narrow set of low-severity alerts before widening it, and record what was resolved.
- Tell the triage team which rules are active, so that a missing alert is not reported as a policy fault.

### After rollout
- Sample automatically resolved alerts on a schedule and look for true positives that a rule hid.
- Review trusted-domain and department conditions whenever partners or reporting lines change.
- Check whether resolved alerts remain available for the retention period you need, and whether audit evidence of the automatic resolution exists, once Microsoft documents it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Rules that automatically resolve or tag DLP alerts</strong><br><small>Tenant</small><br><small class="controls__note">Planned per the roadmap item (In development). Today an analyst sets alert Status to Resolved by hand; no rule setting is documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn does not document an admin setting or API for auto-resolution and tagging rules at the time of writing (November 2026), so the table records that gap. Until the feature ships, the existing alert controls are manual: an analyst sets an alert's Status to Resolved after the required action, and alerts are configured in DLP policy rules.

A Microsoft Graph or Defender call that updates an existing alert's status is a different operation from a rule that resolves alerts as they arrive, and nothing read for this briefing links the two.

## Open questions

- Where will rules be created and managed (the Microsoft Purview portal, the Microsoft Defender portal, or both), and is there a PowerShell or API surface? Watch the Microsoft Purview DLP alerts pages on Microsoft Learn and Message center.
- Which roles may create, edit and delete rules, and are rule changes written to the audit log?
- Is a rule off until an admin defines it, and does preview change anything for tenants that do not opt in? Microsoft has not stated the default.
- Does an automatically resolved alert stay visible to analysts and in reports, and for how long?
- Does the feature carry a specific licence requirement, given that aggregated alert configuration already depends on subscription level?
- Are the tags the same as the custom tags used on DLP incidents in the Microsoft Defender portal?

<!-- rationale
risk: Low. No source says current alert behaviour changes on arrival, so the exposure rests on rules an admin later writes: a rule that is too broad could resolve genuine alerts before anyone triages them.
cost: Low. The only cost the sources show is admin time to design and review rules; a licence or meter for this feature is not yet published.
impact: Low. The people who notice are the compliance and security staff who triage DLP alerts; end users are not described as affected.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: Until the feature ships / behaviour: Until the planned feature ships, existing alert controls are manual. | Found: Alert tuning (previously alert suppression) lets you hide or resolve alerts automatically when expected organizational behavior occurs and rule conditions are met. | Fix: Replace 'Until the feature ships, the existing alert controls are manual:' with 'In the documented Purview dashboard procedure,'. Keep the following analyst-resolution and policy-rule facts. Existing Defender alert tuning and Graph alert updates must not be described as manual-only controls. | Source: https://learn.microsoft.com/defender-xdr/investigate-alerts
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing / licensing: The licensing model is unknown because no licence specific to auto-resolution and tagging rules is published. | Found: The per-user licensing model is the familiar Microsoft 365 E3/E5/A5/F5/G5 model. It remains unchanged. This licensing model enables you to apply Microsoft Purview controls and protections to Microsoft 365 and Windows/macOS endpoint-based assets. | Fix: Set licensing.model to included. Replace the notes with: 'Microsoft Purview controls for Microsoft 365 and Windows/macOS endpoint assets use the Microsoft 365 E3/E5/A5/F5/G5 per-user licensing model. A requirement specific to alert auto-resolution and tagging rules is not yet published.' Cite https://learn.microsoft.com/purview/purview-billing-models. Keep the existing alert-configuration licensing qualifications. | Source: https://learn.microsoft.com/purview/purview-billing-models
- [supported, minor] What's changing: existing alert handling / behaviour: The Defender XDR dashboard is the recommended location for investigating and managing DLP alerts. | Found: The Microsoft Defender XDR dashboard is the recommended location for investigating and managing DLP alerts. | Fix: Add to the existing context paragraph: 'The Defender DLP investigation page says its built-in DLP alert tuning rule, effective in early October 2026, converts DLP signals to behaviors; disable that rule to continue seeing them as alerts in Defender XDR.' Cite https://learn.microsoft.com/defender-xdr/dlp-investigate-alerts-defender. That page qualifies the older Purview guidance. | Source: https://learn.microsoft.com/purview/dlp-alerts-get-started
- [supported, minor] Governance controls: Microsoft Graph or Defender call / behaviour: Updating an existing alert's status with an API is a different operation from defining a rule for arriving alerts. | Found: Update the properties of an alert object in an organization based on the specified alert id property. | Fix: Cite https://learn.microsoft.com/graph/api/security-alert-update?view=graph-rest-1.0 for the existing-alert API distinction; the briefing currently cites no reference for that operation. | Source: https://learn.microsoft.com/graph/api/security-alert-update?view=graph-rest-1.0
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every existing control the checklist asks the reader to review or take stock of appears in the controls table. | Found: Review the current volume and mix of DLP alerts in the DLP Alerts dashboard; Confirm who holds the Manage alerts role and the DLP Compliance Management roles today. The only table row is Rules that automatically resolve or tag DLP alerts. | Fix: The Before rollout steps reviewing the existing DLP Alerts dashboard and taking stock of existing role assignments have no controls rows. Remove those two checklist steps; do not add unverified control rows.
- [supported, minor] Why it matters: before preview opens / date: Preview opens in December CY2026. | Found: "status": "In development", "previewDate": "December CY2026" | Fix: Replace 'before preview opens in December CY2026' with 'ahead of the roadmap's December CY2026 preview target'.
-->
