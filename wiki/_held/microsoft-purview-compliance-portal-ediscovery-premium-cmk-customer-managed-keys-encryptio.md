---
title: "Microsoft Purview eDiscovery (Premium): customer-managed keys for review set data at rest"
slug: "microsoft-purview-compliance-portal-ediscovery-premium-cmk-customer-managed-keys-encryptio"
roadmapId: 117569
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let organisations encrypt eDiscovery (Premium) review set data with their own keys. Roadmap preview is December CY2026. Compliance and security admins decide whether to adopt it; nothing is stated to change on arrival."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn's Purview service description lists Customer Key as included in Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5 plans, with a licence needed per user who benefits. A licence statement specific to review sets is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["ediscovery","customer-key","encryption","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap: item 117569"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=117569"
    kind: "roadmap"
  - title: "Add search results to a review set in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-add-to-review-set"
    kind: "learn"
  - title: "Overview of Service encryption with Microsoft Purview Customer Key"
    url: "https://learn.microsoft.com/purview/customer-key-overview"
    kind: "learn"
  - title: "Set up Customer Key"
    url: "https://learn.microsoft.com/purview/customer-key-set-up"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
videos: []
related: ["ediscovery","microsoft-purview-ediscovery-cmk-customer-managed-key-for-ediscovery-direct-export"]
controls:
  - governs: "Whether the tenant is onboarded to Customer Key, which Learn says applies to review set content"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-CustomerKeyOnboardingRequest -Organization <tenantID> -Scenario <Scenario> -OnboardingMode Enable"
      docs: "https://learn.microsoft.com/purview/customer-key-set-up"
    note: "Scenario takes MDEP (Multiple Workloads) or EXO (Exchange); which applies to review sets is not stated. Needs Exchange admin permissions."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-04-09T23:15:51"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: roadmap plan for customer-managed keys on review sets, with the Learn statement that Customer Key already applies to review set content."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 48
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "55eb091900d8f32df1c52e12f47f4053"
---

## What's changing

Microsoft plans to add customer-managed key (CMK) support for data at rest in eDiscovery (Premium) review sets. The roadmap item describes it as an option that lets an organisation manage its own encryption keys for review set data, in addition to the Microsoft-managed encryption already in place.

The roadmap item is the only source that describes this planned feature. Microsoft Learn already has one related statement: the page on adding search results to a review set says that if a tenant is configured with Customer Key, review set content at rest is encrypted with the customer-managed key. Learn adds that review set content sits in Microsoft-managed Azure Storage provisioned per case, in the region matching the case's geo. The roadmap says the feature is in development while Learn already states this, so treat the Learn sentence as the documented behaviour and confirm with Microsoft whether it is the same capability.

The roadmap item lists status In development, a preview target of December CY2026 and a general availability target of February CY2027, for the Worldwide (Standard Multi-Tenant) cloud on the web. These are targets, not commitments. The item has no more-info link and no Message center post was supplied for it.

## Why it matters

Review sets hold copies of mailbox, SharePoint and Teams content gathered for legal and investigation work. For organisations that control their own keys through Customer Key, this item is about whether those copies are encrypted under their keys, and Learn's review set page already states that Customer Key applies.

If nobody acts, Microsoft has not stated that anything changes in your tenant. The roadmap describes the existing Microsoft-managed encryption as staying in place, so the practical decision is whether your compliance team wants review set data under your keys, and whether your Customer Key set-up is ready for that.

## Risk assessment

**Data exposure**
- Review set content is copied from the live services into Azure Storage that Learn describes as Microsoft-owned and Microsoft-managed, provisioned per case. A customer-managed key adds a layer of encryption to that copy. Learn says Customer Key encrypts only data at rest in the cloud, so confirm separately who can open a case.

**Security & identity**
- Customer Key works by authorising Microsoft 365 to use keys you hold in Azure Key Vault or Managed HSM, and its set-up page requires Key Vault Administrators and Key Vault Contributors roles. Treat holders of those roles as part of the eDiscovery security boundary once review sets depend on your keys.

**Autonomy & actions**
- No autonomous behaviour is described. The feature concerns encryption of stored review set data.

**Change & support**
- Microsoft has not said whether review set content already in a case is re-encrypted, or what happens to Add to review set jobs if a key becomes unavailable. Confirm both with Microsoft before relying on your own keys for active cases.
- The set-up route for Customer Key goes through Exchange Online PowerShell and two Azure subscriptions, so expect the work to fall to the team that already runs Customer Key, not to eDiscovery managers.

## Cost and licensing

Microsoft Learn's Purview service description lists Customer Key as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance and Office 365 E5/A5/G5. It states that each user who benefits from Customer Key requires a licence and that requirements vary by workload. For the multiple-workloads policy type, a tenant that does not hold enough eligible licences reverts to default service encryption. Which workload category a review set falls under is not yet published.

The Customer Key set-up page lists two paid Azure subscriptions as a prerequisite (Free, Trial, Sponsorship, MSDN and Legacy Support are not eligible). The pages read publish no Azure Key Vault or Managed HSM price for this feature, so budget for those separately.

eDiscovery (Premium) itself needs its own entitlement: Learn's eDiscovery permissions page says a user whose data is analysed with premium features must be assigned an Office 365 E5 or Microsoft 365 E5 licence, or an E1/E3 licence plus a Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on. A price or licence statement specific to customer-managed keys on review sets is not yet published.

## Scope

The roadmap item lists the Worldwide (Standard Multi-Tenant) cloud, the web platform and Microsoft Purview as the product. It lists General Availability and Preview as release phases, with a preview target of December CY2026 and a general availability target of February CY2027. No US Government cloud is listed on the item.

Learn's review set page ties the behaviour to tenants configured with Customer Key, and says review set storage is provisioned per case, not per review set. Customer Key set-up requires Exchange admin permissions and two paid Azure subscriptions. Which Customer Key data encryption policy type, if any, covers review sets is not stated.

## Governance guidance

### Before rollout
- Check whether your tenant already uses Customer Key, using the onboarding row in the controls table, and who owns the Azure Key Vault or Managed HSM resources behind it.
- Confirm your Customer Key licence count against the users assigned Exchange or Teams licences, since Learn says a tenant without enough eligible licences reverts to default service encryption for the multiple-workloads policy.
- Ask your Microsoft contact or watch Message center for which data encryption policy type covers review sets before you commit to a key design.
- Brief your eDiscovery administrators that, per Learn, review set storage is provisioned per case, and agree who contacts the key vault team if a case has a problem.

### At rollout
- Watch the roadmap item and Message center for the status to move from In development; the preview is targeted for December CY2026.
- Run a small test search through Add to review set in a non-critical case and track it on the Process manager page, to see that processing completes under your key set-up.

### After rollout
- Review who holds the Key Vault Administrators and Key Vault Contributors roles on the vaults used for Customer Key.
- Re-check the Learn review set page and Customer Key pages for changes to how review sets are covered.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the tenant is onboarded to Customer Key, which Learn says applies to review set content</strong><br><small>Tenant</small><br><small class="controls__note">Scenario takes MDEP (Multiple Workloads) or EXO (Exchange); which applies to review sets is not stated. Needs Exchange admin permissions.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CustomerKeyOnboardingRequest -Organization &lt;tenantID&gt; -Scenario &lt;Scenario&gt; -OnboardingMode Enable</code> <a href="https://learn.microsoft.com/purview/customer-key-set-up" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Customer Key is configured through PowerShell: the set-up page says all Customer Key operations run through Exchange Online PowerShell and requires Exchange admin permissions. Microsoft Learn documents no review-set-specific switch for customer-managed keys at the time of writing (November 2026), so the single row above is the tenant-level Customer Key onboarding the review set page refers to. It is not a control created for this roadmap item.

The onboarding service is documented for the Multiple Workloads and Exchange scenarios, and SharePoint and OneDrive have a separate onboarding section. Which scenario applies to review sets is not stated. The account running onboarding needs service principal registration permissions and the Reader role on each Azure Key Vault used.

## Open questions

- Which Customer Key data encryption policy type, if any, covers eDiscovery review set data? Watch the Customer Key overview and set-up pages.
- Is the roadmap's planned CMK option the capability Learn's review set page already describes? Watch the roadmap item and Message center.
- What happens to existing review set content and in-flight Add to review set jobs when a key is assigned, rotated or revoked?
- Is a licence or charge specific to customer-managed keys on review sets planned? Watch the Purview service description.

<!-- rationale
risk: Low. The roadmap describes customer-managed keys as an option added to the Microsoft-managed encryption already in place, so existing protection stays; the risk that remains is key-management mistakes if you opt in.
cost: Low. Learn lists Customer Key as included in Microsoft 365 E5-level plans; the set-up page requires two paid Azure subscriptions, and no price specific to review sets is published.
impact: Low. Compliance admins, key vault administrators and eDiscovery managers are the people who would notice; reviewers using a review set are not described as changing how they work.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance: After rollout / role: Customer Key setup requires Key Vault Administrators and Key Vault Contributors without distinguishing Key Vault from Managed HSM. | Found: The setup process differs depending on whether you're using Azure Key Vault or Managed HSM. ... Assign user roles to your Managed HSM: Managed HSM Administrators are responsible for day-to-day management tasks | Fix: Change the role clause to 'for Azure Key Vault configurations, its set-up page requires Key Vault Administrators and Key Vault Contributors roles'. Qualify the After rollout role-review bullet as applying to Azure Key Vault configurations. This preserves the documented roles without applying them to Managed HSM. | Source: https://learn.microsoft.com/purview/customer-key-set-up
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / command: The onboarding table's Enable command can be used to check whether the tenant already uses Customer Key. | Found: Use the Enable mode when you're ready to onboard your tenant to Customer Key. This mode enables Customer Key for the workload you specify using the -Scenario parameter. | Fix: Replace the first Before rollout bullet with 'Confirm with your Customer Key service owner whether the tenant already uses Customer Key and who owns the Azure Key Vault or Managed HSM resources behind it.' Do not direct a status check to the Enable command. | Source: https://learn.microsoft.com/purview/customer-key-set-up
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The cost rating is low, meaning indirect costs only, despite the documented Azure key-management charges. | Found: Azure Key Vault standard and premium tiers bill on a transactional basis, with an extra monthly per-key charge for premium hardware-backed keys. ... Azure Key Vault Managed HSM ... bill at a fixed hourly rate. | Fix: Set cost to 'variable'. Replace its rationale with 'Variable. Customer Key setup requires paid Azure resources: Key Vault bills transactions and premium hardware-backed keys monthly, while Managed HSM bills hourly. No review-set-specific charge is published.' Add https://learn.microsoft.com/azure/security/fundamentals/key-management to sources. | Source: https://learn.microsoft.com/azure/security/fundamentals/key-management
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Scope; controls[0].governs / applicability: Learn says Customer Key encrypts review set content at rest when the tenant is configured with Customer Key. | Found: Yes. If your tenant is configured with Customer Key, review set content at rest is encrypted with the customer-managed key. | Fix: After the Learn statement, add: 'However, Microsoft's direct-export documentation says, "Data at rest in an eDiscovery review set isn't included at this time." These Microsoft pages disagree; confirm review set coverage with Microsoft.' Cite https://learn.microsoft.com/purview/edisc-search-export alongside the existing review set source. | Source: https://learn.microsoft.com/purview/edisc-search-add-to-review-set
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells readers to review Key Vault role assignments, but the controls table contains only Customer Key onboarding. | Found: Review who holds the Key Vault Administrators and Key Vault Contributors roles on the vaults used for Customer Key. ... Whether the tenant is onboarded to Customer Key | Fix: The After rollout step reviewing Key Vault role assignments has no corresponding controls-table row. Remove that checklist step if retaining the onboarding-only table; do not add a new control row as part of this correction.
-->
