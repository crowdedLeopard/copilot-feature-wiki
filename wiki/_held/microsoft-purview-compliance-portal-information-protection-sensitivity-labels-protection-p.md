---
title: "Microsoft Purview: sensitivity label protection policies for Azure Blob Storage and Data Lake Storage Gen2"
slug: "microsoft-purview-compliance-portal-information-protection-sensitivity-labels-protection-p"
roadmapId: 394282
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans label-based protection policies for Azure Blob Storage and Data Lake Storage Gen2. They restrict labelled data to chosen users and bill per asset under pay-as-you-go. Nothing changes until an admin sets one up."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Learn page lists a Microsoft 365 E5 licence and setup of the pay-as-you-go billing model as the prerequisite. The meter is assets in scope of a protection policy per day; the rate is on Microsoft's pay-as-you-go pricing page."
audiences: ["security","compliance","finops","service-owner"]
tags: ["purview","information-protection","sensitivity-labels","azure-storage","pay-as-you-go","auto-labeling","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap 394282"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=394282"
    kind: "roadmap"
  - title: "Get started with protection policies (preview)"
    url: "https://learn.microsoft.com/purview/data-gov-protection-policy"
    kind: "learn"
  - title: "Authoring and publishing protection policies for Azure sources (preview)"
    url: "https://learn.microsoft.com/purview/data-gov-protection-policy-azure-sources"
    kind: "learn"
  - title: "Apply sensitivity labels to your data in Data Map (preview)"
    url: "https://learn.microsoft.com/purview/data-map-sensitivity-labels-apply"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Set-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    kind: "learn"
videos: []
related: ["sensitivity-labels"]
controls:
  - governs: "Protection policy that restricts access to labelled Azure storage data"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Policies > Protection policies > New protection policy"
      docs: "https://learn.microsoft.com/purview/data-gov-protection-policy-azure-sources"
    api: null
    note: "Needs the Information Protection admin and Data Map reader roles listed on the page. Documented as preview."
  - governs: "Whether a registered storage source accepts data policy enforcement"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Map > Data sources > source > Data policy enforcement"
      docs: "https://learn.microsoft.com/purview/data-gov-protection-policy-azure-sources"
    api: null
    note: "Learn names the Data Owner/Admin as the user who enables a source for data policy enforcement."
  - governs: "Where each sensitivity label can be applied (label scope)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Sensitivity labels > Create a label > Define the scope for this label > Files & other data assets"
      docs: "https://learn.microsoft.com/purview/data-map-sensitivity-labels-apply"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label name> -ContentType \"File, Email, PurviewAssets\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Existing labels are edited with Edit label. Set-Label runs in Security & Compliance PowerShell. Does not itself create or enable a protection policy."
  - governs: "Pay-as-you-go usage of the Information Protection meter"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Requires Global Reader, Security Reader or Global Admin. Usage center is in preview."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-06-27T22:15:28"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 394282: Azure Storage protection policies, with the Learn setup steps, the E5 plus pay-as-you-go prerequisite and the per-asset meter."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 58 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 54
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "12e73b093d0cc6d872f9987713e5f0d5"
---

## What's changing

Microsoft Purview Information Protection is getting protection policies for Azure Blob Storage and Azure Data Lake Storage Gen2. The roadmap item says admins can apply sensitivity labels and the related protections to these sources, extending their existing label scheme beyond Microsoft 365 documents and emails.

Microsoft Learn already documents the mechanism, marked as preview. A protection policy names one or more sensitivity labels and up to 10 storage resources; Learn states that "Everyone in your org will be denied access to labeled items except for the users and groups you add here." Learn says that after these policies are enabled, access control is imposed automatically whenever Information Protection detects sensitive information.

The setup chain on the Learn pages is: scope sensitivity labels to Files & other data assets, register the storage account in the Data Map, turn on Data policy enforcement for the source, scan it, wait at least 24 hours, then create the policy. Learn describes labels reaching the data through an auto-labeling policy and a Data Map scan.

The roadmap item is In development with a General Availability target of August CY2025, a date that has passed at the time of writing (November 2026); the Learn pages still carry the preview label. Microsoft lists the same feature for Microsoft Fabric under a separate roadmap item, 420331. This page covers Azure Storage (item 394282), Worldwide (Standard Multi-Tenant), Web.

## Why it matters

This extends label-based access control to storage that sits outside Microsoft 365, so the labels you already use for documents can also restrict who reads labelled files in Blob Storage and Data Lake Storage Gen2. For a service owner the trade-off is access control that follows the label against an allow-list you must maintain.

Microsoft has not stated that anything happens on arrival: the Learn steps start with an admin registering sources, enabling enforcement and creating the policy, so treat this as a new control to review and cost, not a change that reaches users on its own. Budget owners should note that the meter counts assets in scope, not only labelled ones.

## Risk assessment

**Data exposure**
- A protection policy applies to assets carrying the labels it names, so label coverage from the auto-labeling policy and scan shapes what it protects. Learn states that auto-labeling for Data Map locations does not support custom sensitive info types, trainable classifiers or Exact Data Match as conditions.

**Security & identity**
- The allow-list is the control. Everyone outside it is denied access to labelled items, so an over-broad group weakens the policy and a narrow one blocks legitimate readers.
- Learn warns that service principal accounts running data governance scans must be in a security group on the allow-list, or later scans can be blocked on labelled files.
- Setup needs Information Protection admin roles plus Data Map reader roles, and a data source administrator to enable enforcement.

**Autonomy & actions**
- Once a policy is on, enforcement follows detection and labelling without a per-item approval. The policy can be created with or without being turned on straight away.

**Change & support**
- Learn limits a policy to 10 resources, and states that a storage account with a customer-managed key does not work for protection policies.
- The pages are preview documentation and carry a retirement notice for Microsoft Purview data governance capabilities; expect the documented behaviour to move.

## Cost and licensing

Licence: Learn lists "Microsoft 365 E5 license and setup of the pay-as-you-go billing model" as the prerequisite for protection policies on Azure sources (Get started with protection policies).

Meter: the billing models page lists the Information Protection meter for sensitivity labels applied to non-Microsoft 365 data sources as the number of assets in scope of a protection policy per day. For Blob and ADLS the asset is a file or resource set. An asset counts when it sits in a location in the policy's scope, whether or not it matches the policy's conditions, and counts once however many policies cover it. Charges come through an Azure bill at month end, so the tenant must be associated with an active Azure subscription.

The per-asset rate is on Microsoft's pay-as-you-go pricing page, linked from the billing models page. Use the Usage center to watch consumption; it is itself in preview. Indirect cost is admin time for role setup, label scoping, scanning and allow-list upkeep.

## Scope

Roadmap record: Worldwide (Standard Multi-Tenant) cloud, Web platform, release phase General Availability, status In development.

Sources: Azure Blob Storage and Azure Data Lake Storage Gen2. Prerequisites on Learn: an existing Purview account upgraded to the single tenant model and the enterprise version, labels scoped to Files & other data assets, sources registered in the Data Map, Data policy enforcement set to On, and a scan at least 24 hours before policy creation. Registration needs a data source administrator in the collection holding the source.

Limits on Learn: up to 10 resources per policy, and storage accounts with a customer-managed key do not work.

## Governance guidance

### Before rollout
- Confirm the Microsoft 365 E5 licence and pay-as-you-go billing set up with an Azure subscription, and ask finance who owns the Azure bill.
- Assign the Information Protection and Data Map reader roles to the admins who will author policies, as the Learn page lists them.
- Scope the labels you want to use to Files & other data assets.
- Decide the allow-list of users and groups, and put the data governance scan service principals in a security group on it.

### At rollout
- Register and scan one non-production storage account first, enabling Data policy enforcement on that source only.
- Create the protection policy with the label and the resources, and choose whether to turn it on straight away.
- Check a policy's details after submitting it, as Learn instructs.

### After rollout
- Review the Usage center pay-as-you-go page for the Information Protection meter and compare asset counts with expectations.
- Edit the policy to change its allow-list or scope, or delete it, from Information Protection > Policies > Protection policies.
- Recheck the Learn pages for general availability and for changes tied to the data governance retirement notice.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Protection policy that restricts access to labelled Azure storage data</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Information Protection admin and Data Map reader roles listed on the page. Documented as preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Policies › Protection policies › New protection policy <a href="https://learn.microsoft.com/purview/data-gov-protection-policy-azure-sources" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a registered storage source accepts data policy enforcement</strong><br><small class="controls__note">Learn names the Data Owner/Admin as the user who enables a source for data policy enforcement.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Map › Data sources › source › Data policy enforcement <a href="https://learn.microsoft.com/purview/data-gov-protection-policy-azure-sources" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where each sensitivity label can be applied (label scope)</strong><br><small>Tenant</small><br><small class="controls__note">Existing labels are edited with Edit label. Set-Label runs in Security &amp; Compliance PowerShell. Does not itself create or enable a protection policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Sensitivity labels › Create a label › Define the scope for this label › Files &amp; other data assets <a href="https://learn.microsoft.com/purview/data-map-sensitivity-labels-apply" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label name&gt; -ContentType &quot;File, Email, PurviewAssets&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go usage of the Information Protection meter</strong><br><small>Tenant</small><br><small class="controls__note">Requires Global Reader, Security Reader or Global Admin. Usage center is in preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Protection policies are authored in the Microsoft Purview portal by someone with the Information Protection admin roles plus the Data Map reader roles Learn lists; enabling Data policy enforcement on a source is a separate step for a data source administrator. The usage page requires Global Reader, Security Reader or Global Admin.

The controls work as a chain: labels reach assets through label scope, an auto-labeling policy and a scan, and the protection policy then restricts the labelled assets. Microsoft Learn documents no API or PowerShell cmdlet for creating protection policies or enabling Data policy enforcement at the time of writing (November 2026), so use the portal. The Set-Label row governs label scope only, not the policy.

## Open questions

- When will protection policies for Azure Storage reach General Availability, given the roadmap target of August CY2025 has passed and the Learn pages still say preview? Watch the roadmap item and the Learn page.
- Do the protection policy pages remain supported as Microsoft moves Purview data governance capabilities into Fabric? The pages carry a retirement notice for data governance capabilities and do not say whether protection policies are covered.
- Does Microsoft plan an API or PowerShell route for protection policies and Data policy enforcement? Learn documents none at the time of writing.
- What happens to existing protection policies if the Information Protection pay-as-you-go feature is paused in the Usage center? The page lists it as pausable but does not say.

<!-- rationale
risk: Medium. A protection policy denies access to labelled items for everyone except the users and groups the admin lists, so a wrong allow-list or a missed scanner account can block people and scans.
cost: Variable. Microsoft's prerequisite is a Microsoft 365 E5 licence plus the pay-as-you-go billing model, metered as the number of assets in scope of a protection policy per day and billed through Azure.
impact: Medium. Information Protection admins and data source administrators set it up, and anyone who reads labelled blobs or Data Lake files in scope notices when access is restricted.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Risk assessment: Security & identity; Governance guidance; Governance controls / role: Policy authors need the Information Protection admin roles plus Data Map reader roles, as the page lists them. | Found: User needs the roles from within the built-in role group “Information Protection”, along with new roles for data map reader, insights reader, scan reader, source reader. | Fix: Replace the abbreviated role requirement throughout with: 'Policy authors need the roles in the Information Protection role group plus Data Map Reader, Insights Reader, Scan Reader and Source Reader.' In the Before rollout bullet, say 'Assign the Information Protection role-group roles plus Data Map Reader, Insights Reader, Scan Reader and Source Reader to policy authors.' The existing cited Azure-sources page explicitly requires all four reader roles. | Source: https://learn.microsoft.com/purview/data-gov-protection-policy-azure-sources
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls: first paragraph / role: A data source administrator is the role needed to enable Data policy enforcement. | Found: To enable Data policy enforcement, you must have both specific Identity and Access Management (IAM) privileges on the resource as well as specific Microsoft Purview privileges | Fix: Replace the enforcement-role clause in both places with: 'Enabling Data policy enforcement requires the Microsoft Purview Data source admin role for the collection or an inheritable parent collection, plus either IAM Owner or both IAM Contributor and IAM User Access Administrator on the resource ARM path or an ancestor.' Cite https://learn.microsoft.com/purview/legacy/how-to-enable-data-policy-enforcement and add that URL to sources. Do not change the separate registration-role statement. | Source: https://learn.microsoft.com/purview/legacy/how-to-enable-data-policy-enforcement
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: meter counts assets; Cost and licensing: Counting assets / cost: An asset in an in-scope location counts whether or not it matches the protection policy's conditions. | Found: The asset doesn't have to match a policy's conditions to be counted, it just has to be in a location that's in the scope of a policy. | Fix: Qualify the two asset-count statements with: 'The billing page's general counting rule includes assets that do not match conditions, but its protection-policy example counts only the 50 Confidential-labeled tables out of 100. Confirm the effective billable scope before budgeting.' Both passages are at https://learn.microsoft.com/purview/purview-billing-models#counting-assets; do not silently resolve this inconsistency. | Source: https://learn.microsoft.com/purview/purview-billing-models
- [supported, minor] front matter: licensing.notes; Cost and licensing: pricing pointer / cost: The billing models page directs readers to Microsoft's pay-as-you-go pricing page for pricing. | Found: Understand pricing and estimate your expected monthly costs for pay-as-you-go capabilities: Microsoft pay-as-you-go pricing | Fix: Narrow 'The per-asset rate is on Microsoft's pay-as-you-go pricing page' to 'The billing models page links to Microsoft pay-as-you-go pricing for cost estimates.' Make licensing.notes use the same wording. The link was read, but the pricing destination could not be opened in this run, so a currently published feature-specific rate was not independently verified. | Source: https://learn.microsoft.com/purview/purview-billing-models
- [supported, minor] Governance guidance: After rollout, edit/delete policy / admin-path: An existing protection policy can be edited or deleted from Information Protection > Policies > Protection policies. | Found: Select Policies, then select Protection policies. Select the policy you want to manage. To change any of the details, select the Edit policy button. To delete the policy, select Delete policy. | Fix: Complete the existing guidance path as 'Information Protection > Policies > Protection policies > policy > Edit policy or Delete policy'. The printed route reaches the correct list but stops before its management actions. | Source: https://learn.microsoft.com/purview/data-gov-protection-policy-azure-sources
- [contradicted, minor] front matter: risk; rationale: risk / consistency: The medium risk rating is justified by mistakes in an administrator-configured allow-list. | Found: defaultState: "admin-opt-in"; summary: "Nothing changes until an admin sets one up."; rationale: "Medium. ... a wrong allow-list or a missed scanner account can block people and scans." | Fix: Set risk to low and replace the rationale with: 'Low. This new control restricts nothing until an administrator configures and enables a protection policy; existing behaviour continues if nobody acts.' The assessment scale rates the unconfigured default of a new control, not misconfiguration after opting in.
- [contradicted, minor] Governance guidance: Before rollout, assigning roles; Governance controls table / consistency: Every control the governance checklist asks administrators to configure appears in the controls table. | Found: Before rollout: "Assign the Information Protection and Data Map reader roles to the admins who will author policies"; the controls table covers policies, enforcement, label scope and usage, not role assignment. | Fix: The Before rollout role-assignment step has no corresponding controls-table row. Keep this as a coverage limitation; do not add a control row as part of this correction.
-->
