---
title: "Microsoft Purview Data Lifecycle Management: billing meter change for non-Microsoft 365 AI retention"
slug: "microsoft-purview-data-lifecycle-management-dlm-meter-change"
roadmapId: 560324
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to move Data Lifecycle Management billing for non-Microsoft 365 AI prompts and responses to a new meter, targeted March CY2027. Customers must migrate from the legacy meter; finance and compliance owners should prepare."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Microsoft Learn lists pay-as-you-go as the billing model for retention policies that cover non-Microsoft 365 AI interactions. The new meter's rates are in the roadmap item; Learn's billing models page states no DLM rate."
audiences: ["compliance","finops","m365-admin"]
tags: ["purview","data-lifecycle-management","retention","pay-as-you-go","usage-based-billing","licensing","finops"]
sources:
  - title: "Microsoft 365 Roadmap item 560324"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560324"
    kind: "roadmap"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "PowerShell cmdlets for retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention-cmdlets"
    kind: "learn"
  - title: "New-AppRetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-legacy-teams-retention-policies-covering-copil","ediscovery","auditing"]
controls:
  - governs: "Which non-Microsoft 365 AI interactions are covered by a retention policy, and so managed and billed"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "New-AppRetentionCompliancePolicy -Name <String> -Applications <String[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy"
    note: "Locations chosen in the wizard are Microsoft Copilot experiences, Enterprise AI apps and Other AI apps. The cmdlet creates the policy; it does not change billing."
  - governs: "Viewing and pausing pay-as-you-go DLM usage"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Usage center is in preview. The page lists Data lifecycle management as pausable; it does not say what pausing does to retention policies."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T18:34:37"
changes:
  - date: "2026-11-20"
    note: "First briefing on the planned Data Lifecycle Management meter change for non-Microsoft 365 AI retention, targeted March CY2027."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 44 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 44 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 44
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bf7797d03640cfacb4a5a18680287b55"
---

## What's changing

Microsoft plans to change how Data Lifecycle Management (DLM, the Microsoft Purview solution that retains and deletes content) is billed for non-Microsoft 365 generative AI prompts and responses. The roadmap item says customers will need to migrate from the legacy meter to a new meter.

The roadmap description gives two framings of the new model. It first says billing will be based on the volume of data retained, for example 1 GB of retained AI prompts and responses billed at $0.25 per GB per month (about $0.0082 per GB per day). It then says DLM is billed on the total volume of text messages managed by a DLM policy, with each non-Microsoft 365 generative AI prompt and response treated as an individual text message, at a rate equivalent to $6 per one million text messages per month. The record does not say how the two framings relate.

Today, Microsoft Learn's billing models page lists the DLM pay-as-you-go unit as the number of non-Microsoft 365 Copilot or AI app interactions (prompts and responses) under a retention policy, and says Microsoft 365 Copilot experiences aren't charged. Learn does not yet describe the new meter or the migration, so what follows about the new model is the roadmap's description.

The roadmap record shows status In development, a target of March CY2027, release phase General Availability, Worldwide (Standard Multi-Tenant) and the Web platform. The target is a plan, not a commitment.

## Why it matters

This is a change to what a retention policy costs, not to what it does. Any tenant whose DLM retention policies cover Enterprise AI apps or Other AI apps is already billed through Azure pay-as-you-go, so the new meter changes the figure on a bill that finance already receives. Microsoft's own analysis, as the roadmap item reports it, is that the overall cost is expected to be cost-neutral or lower; the item gives no figures behind that, so test it against your own volumes.

The roadmap item does not say what happens on arrival if nobody acts, or how the migration from the legacy meter is carried out. Plan on the migration needing an owner and a baseline of today's usage, and watch Message center and the roadmap item for the instructions.

## Risk assessment

**Data exposure**
- No new data access is described. The roadmap item says each non-Microsoft 365 AI prompt and response continues to be retained and deleted according to the retention settings configured in Microsoft Purview, so the retention controls in the table below are unchanged by this item.

**Security & identity**
- No change is described. Billing runs through an Azure subscription associated with the tenant, according to Microsoft Learn, so check who holds access to that subscription as you would for any pay-as-you-go meter.

**Autonomy & actions**
- No change: the roadmap item describes a meter, not an agent or an automated action.

**Change & support**
- Migration from the legacy meter is described as a customer task. A missed or mistimed migration is a billing risk, and the roadmap item gives no mechanism, so treat the steps as unconfirmed until Microsoft publishes them.
- The Microsoft Purview Usage center can pause pay-as-you-go DLM (see the controls table). Learn does not say what pausing does to retention policies that cover AI apps, so confirm that before using it as a cost control.

## Cost and licensing

**Licence.** Learn's get-started page says you must set up pay-as-you-go billing to create retention policies that include the locations Microsoft Copilot experiences, Enterprise AI apps and Other AI apps, and that there's no charge for Microsoft 365 Copilot interactions. The billing models page says the pay-as-you-go billing mechanisms are Azure based, so the tenant must be associated with an active Azure subscription.

**Meter.** Per the roadmap item, the new model bills managed text messages in storage at a rate equivalent to $6 per one million text messages per month, and describes retained AI data at $0.25 per GB per month. As an example built only from the roadmap's rate, 10 million managed text messages would be billed at $60 per month. Learn's billing models page currently lists the unit as interactions under a retention policy and states no DLM rate; it points to the Azure pricing page for rates.

**Cap.** No spend cap for this meter is documented. The Usage center pause toggle is the only billing control Learn lists for DLM.

**Not yet published.** The date on which the legacy meter stops, the migration steps and the way the new meter appears on the Azure bill are not yet published.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant), the Web platform and the General Availability release phase. It names no other clouds; the record does not say whether US Government clouds are affected.

The item concerns non-Microsoft 365 generative AI prompts and responses covered by a DLM policy. Learn says Microsoft 365 Copilot interactions aren't charged. For AI apps other than Microsoft 365 Copilot and Copilot Studio, Learn says a collection policy that includes the setting to capture content is needed before prompts and responses can be retained.

Tenants need pay-as-you-go billing set up, with an Azure subscription associated, to have retention policies for the AI-app locations.

## Governance guidance

### Before rollout
- Identify which retention policies include the Microsoft Copilot experiences, Enterprise AI apps or Other AI apps locations (Purview portal, Retention policies row in the controls table), and who owns each.
- Record the current DLM line in the Usage center pay-as-you-go page as a baseline, using an account that can open it.
- Confirm which Azure subscription the tenant's pay-as-you-go charges go to, and tell its owner that the DLM meter is changing.
- Check Message center and the roadmap item for migration steps before the March CY2027 target.

### At rollout
- Follow Microsoft's migration instructions when they are published, and keep a record of when the tenant moves to the new meter.
- Compare the first Azure bill and the Usage center figures with the baseline.
- Avoid pausing DLM in the Usage center until Microsoft has said what pausing does to retention and deletion.

### After rollout
- Review whether each AI-app retention policy still needs its current scope, since the policy scope decides what is managed and billed.
- Test the roadmap's cost-neutral-or-lower expectation against your actual usage and report variance to finance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which non-Microsoft 365 AI interactions are covered by a retention policy, and so managed and billed</strong><br><small>Tenant</small><br><small class="controls__note">Locations chosen in the wizard are Microsoft Copilot experiences, Enterprise AI apps and Other AI apps. The cmdlet creates the policy; it does not change billing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AppRetentionCompliancePolicy -Name &lt;String&gt; -Applications &lt;String[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Viewing and pausing pay-as-you-go DLM usage</strong><br><small>Tenant</small><br><small class="controls__note">Usage center is in preview. The page lists Data lifecycle management as pausable; it does not say what pausing does to retention policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are existing controls that an administrator uses today; Microsoft Learn does not document a control specific to the new meter. The retention policy row decides which AI interactions fall under a policy at all; the Usage center row is where DLM usage is viewed and where the feature can be paused.

The Usage center is in preview, according to its Learn page, and the page lists the roles that can open it. Microsoft Learn documents no command or API for the Usage center pause toggle at the time of writing (November 2026). The Learn pages read do not say what pausing DLM does to retention policies that are already in place.

## Open questions

- Which model applies to the new meter: bytes retained ($0.25 per GB per month) or managed text messages ($6 per one million per month)? Watch the roadmap item and Microsoft's billing models page.
- What is the legacy meter, and is it the interactions-based unit Learn lists today? Microsoft's billing models page is where this would be stated.
- How does the migration happen, and does anything change for tenants that take no action? Watch Message center.
- What does pausing DLM in the Usage center do to retention and deletion of AI-app prompts and responses?
- Does the new meter apply outside Worldwide (Standard Multi-Tenant)? The roadmap item lists only that cloud.

<!-- rationale
risk: Low. The roadmap item describes a billing change only and names no new data access, identity or autonomy; the exposure is a bill that differs from budget.
cost: Variable. DLM for non-Microsoft 365 AI apps is metered pay-as-you-go through Azure; the roadmap item states a new rate of $6 per one million text messages per month and expects cost-neutral or lower.
impact: Low. Compliance administrators and whoever owns the Azure bill notice; the roadmap item describes no change for end users or for how policies retain and delete.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls; Governance guidance / Before rollout / admin-path: Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy opens the relevant wizard in the Microsoft Purview portal. | Found: Sign in to the Microsoft Purview portal > Solutions > Data Lifecycle Management > Policies > Retention policies. | Fix: Extend controls[0].ui.path and the rendered path to 'Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Assign admin units > Full directory > Choose the type of retention policy to create > Static > Choose locations to apply the policy', the documented static-policy route at https://learn.microsoft.com/purview/create-retention-policies. The current path correctly opens the wizard but stops before its location selector. | Source: https://learn.microsoft.com/purview/create-retention-policies
- [supported, minor] controls[0].note; Governance controls / behaviour: The existing application-retention locations include Microsoft Copilot experiences, Enterprise AI apps and Other AI apps. | Found: Microsoft Copilot experiences: Currently in Preview. ... Enterprise AI apps: Currently in Preview. ... Other AI apps: Currently in Preview. | Fix: Add 'The cmdlet reference currently marks these three AI application location groups as Preview.' to controls[0].note and the rendered row, citing https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy. This is the preview status of the existing retention locations, not the roadmap meter's release phase. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy
-->
