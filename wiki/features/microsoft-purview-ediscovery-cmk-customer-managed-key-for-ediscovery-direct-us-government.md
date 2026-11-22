---
title: "Microsoft Purview eDiscovery: customer-managed keys for direct export (GCC, GCC High, DoD)"
slug: "microsoft-purview-ediscovery-cmk-customer-managed-key-for-ediscovery-direct-us-government"
roadmapId: 565373
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans customer-managed key (CMK) encryption for eDiscovery direct export in GCC, GCC High and DoD, targeted January CY2027. Learn describes it as enabled on request, so tenants using Customer Key decide whether to ask."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn names no licence specific to this feature. It relies on Customer Key, which the Purview service description lists as included in Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5 plans, among others. Customer Key for Multiple Workloads needs at least as many licences as Exchange or Teams users. Exporting needs an eDiscovery user with a Microsoft 365 Enterprise E3 or E5 licence."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","ediscovery","encryption","customer-key","data-export","data-governance","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565373"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565373"
    kind: "roadmap"
  - title: "Export search results in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-export"
    kind: "learn"
  - title: "Set up Customer Key"
    url: "https://learn.microsoft.com/purview/customer-key-set-up"
    kind: "learn"
  - title: "Manage Customer Key encryption policies"
    url: "https://learn.microsoft.com/purview/customer-key-manage"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
  - title: "Set-M365DataAtRestEncryptionPolicyAssignment"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-m365dataatrestencryptionpolicyassignment"
    kind: "learn"
videos: []
related: ["microsoft-purview-ediscovery-cmk-customer-managed-key-for-ediscovery-direct-export","ediscovery"]
controls:
  - governs: "Whether CMK for eDiscovery direct export is enabled for the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn gives a request to Microsoft Support or your Customer Success Account Manager as the way to enable it. The section is labelled preview."
  - governs: "The data encryption policy assigned to the tenant, a prerequisite for CMK direct export"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-M365DataAtRestEncryptionPolicyAssignment -DataEncryptionPolicy <PolicyName or ID>"
      docs: "https://learn.microsoft.com/purview/customer-key-manage"
    note: "Exchange Online PowerShell, Exchange admin permissions. Multi-workload DEP assignment; the eDiscovery page does not name the DEP type. It assigns the policy, so do not use it as a status check."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-22"
    note: "First briefing for CMK on eDiscovery direct export in GCC, GCC High and DoD (roadmap item 565373); the Worldwide item is 557684."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: added the tenant licence-count rule for Customer Key for Multiple Workloads, reworded the DEP assignment note and removed the checklist pointer to a controls row."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1992d54221f0da5bc6235c1aa5e496f9"
---

## What's changing

Microsoft plans to let organisations that use Customer Key (customer-managed key, CMK) extend that protection to Microsoft Purview eDiscovery direct export packages. The roadmap item describes it as customer-managed key options for the data in the direct export workflow, adding to the Microsoft-managed encryption already in place.

This roadmap item covers the GCC, GCC High and DoD clouds on the web, with a General Availability phase and a January CY2027 target. Its status is In development. Microsoft lists the Worldwide version of the feature under a separate roadmap item, 557684; see [the Worldwide briefing](/features/microsoft-purview-ediscovery-cmk-customer-managed-key-for-ediscovery-direct-export/).

The behaviour comes from the [Export search results in eDiscovery](https://learn.microsoft.com/purview/edisc-search-export) page, whose section is headed "Enable CMK (Customer Managed Key) for direct exports (preview)". It says that for organisations that configure Customer Key through the Microsoft 365 Data-at-Rest Encryption Platform (MDEP) with a Data Encryption Policy (DEP) in policy assigned status, exported investigation data is encrypted at rest using tenant-specific encryption scopes backed by customer-managed keys, once the feature is enabled. The page does not name the US Government clouds, so whether and when it applies to GCC, GCC High and DoD rests on the roadmap item.

## Why it matters

For a US Government tenant that already uses Customer Key, this would put direct export packages held in eDiscovery under keys the organisation controls, which may matter when a security or compliance owner assesses key control over investigation data.

If nobody acts, no source says existing export behaviour changes: the Learn page lists a request to Microsoft Support as a prerequisite, so the decision for a Customer Key tenant is whether to ask once the feature reaches its cloud. The target is January CY2027 and the Learn page still labels the section preview, so treat timing as a plan.

## Risk assessment

**Data exposure**

- Direct export packages would be encrypted at rest with the tenant's customer-managed keys once the feature is enabled. Data at rest in an eDiscovery review set is not included at this time, so investigation data in a review set stays outside this protection.
- The page says the tenant must remain CMK enabled at the time of the export. It does not say what an export does if the tenant is not; confirm that with Microsoft before relying on the protection.

**Security & identity**

- The protection depends on a DEP in PolicyAssigned state and on Azure Key Vault configured under the standard Customer Key setup, so key custody sits with whoever administers the two Azure subscriptions Customer Key requires.
- Search export packages expire 14 days after the export is created and cannot be recovered afterwards, per the same Learn page; this is a property of search exports generally, not of CMK.

**Autonomy & actions**

- Encryption is applied to the export package by the service when it is enabled; Learn describes no step for the exporting user.

**Change & support**

- Enablement is a request to Microsoft Support or your Customer Success Account Manager, so plan lead time and a named contact.
- For GCC High and DoD tenants, Customer Key setup itself calls for a Microsoft Support request to onboard for US Government tenants, so the two requests may need coordinating.

## Cost and licensing

Learn names no licence and no charge specific to CMK on direct export. The prerequisite is Customer Key, and the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) says each user who benefits from Customer Key requires a licence. For Customer Key for Multiple Workloads, the tenant must have at least as many Customer Key licences as users assigned Exchange or Teams licences, whichever is greater. SharePoint is licensed separately and excluded from that count. Microsoft periodically validates the count; insufficient eligible licences cause encryption to revert to default service encryption. Its plan table lists Customer Key as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5. That page does not say how it applies to the US Government clouds.

Customer Key setup lists two paid Azure subscriptions (Free, Trial, Sponsorship, MSDN and Legacy Support are not eligible) as a prerequisite, per [Set up Customer Key](https://learn.microsoft.com/purview/customer-key-set-up); Azure charges are outside this briefing.

To export, the [Export search results in eDiscovery](https://learn.microsoft.com/purview/edisc-search-export) page says the eDiscovery user needs a Microsoft 365 Enterprise E3 or E5 licence, and for SharePoint content the account must also have a Microsoft SharePoint E3 licence. That requirement is not specific to CMK.

## Scope

**Who:** tenants that use Customer Key with a DEP in PolicyAssigned state and have asked Microsoft Support to enable CMK for eDiscovery direct export. The people affected are the administrators who maintain Customer Key and the eDiscovery users who run direct exports.

**Clouds and platforms:** the roadmap item lists GCC, GCC High and DoD, on the web. Microsoft's Purview planning pages for [GCC High](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments) and [GCC](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments) list Customer Key data-at-rest encryption for Microsoft 365 as Available; they do not mention eDiscovery direct export.

**Prerequisites (Learn export page):** the feature enabled for the organisation through Microsoft Support or a Customer Success Account Manager; Azure Key Vault configured following the standard Customer Key setup; and a DEP in PolicyAssigned state via the MDEP onboarding cmdlets.

**Out of scope:** review set data at rest, per the Learn page. Microsoft lists the Worldwide cloud under roadmap item 557684.

## Governance guidance

### Before rollout

- Decide with security and compliance leads whether direct export packages need to sit under your own keys, and name who will make the request to Microsoft Support.
- Confirm that Customer Key is configured and that your DEP is in PolicyAssigned state. Do not run the assignment cmdlet as a status check: it assigns a policy at the tenant level.
- Check Customer Key licensing against the Purview service description, and check that exporting users hold the Microsoft 365 Enterprise E3 or E5 licence the export page requires.
- Ask your Microsoft contact which DEP type satisfies the PolicyAssigned prerequisite and whether GCC, GCC High or DoD changes the request route, because the export page names neither.

### At rollout

- Request enablement from Microsoft Support or your Customer Success Account Manager, since the Learn page gives this as the way to enable the feature for a tenant.
- Run a test direct export once Microsoft confirms enablement, and confirm with your contact that it was encrypted with your key.
- Tell eDiscovery users that review set data is not covered by this feature.

### After rollout

- Keep the DEP assignment in place so that the tenant remains CMK enabled at export time.
- Download search export packages within 14 days, before they expire.
- Watch Message center and the Export search results in eDiscovery page for the general availability date and any change to the preview label.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether CMK for eDiscovery direct export is enabled for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Learn gives a request to Microsoft Support or your Customer Success Account Manager as the way to enable it. The section is labelled preview.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>The data encryption policy assigned to the tenant, a prerequisite for CMK direct export</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell, Exchange admin permissions. Multi-workload DEP assignment; the eDiscovery page does not name the DEP type. It assigns the policy, so do not use it as a status check.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-M365DataAtRestEncryptionPolicyAssignment -DataEncryptionPolicy &lt;PolicyName or ID&gt;</code> <a href="https://learn.microsoft.com/purview/customer-key-manage" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Nothing in Microsoft's pages read for this briefing gives an administrator a switch for the feature: Learn describes enablement as a request to Microsoft Support or your Customer Success Account Manager. DEP assignment is a prerequisite for the feature, not its enablement setting.

The Customer Key manage page says all DEP operations run through Exchange Online PowerShell and need Exchange admin permissions. It documents the assignment cmdlet for a multi-workload DEP; the eDiscovery page does not say which DEP type it requires, so confirm that before relying on it. The cmdlet changes the tenant's assigned policy and is not a read-only check.

## Open questions

- Which DEP type satisfies the PolicyAssigned prerequisite: the multi-workload DEP assigned with `Set-M365DataAtRestEncryptionPolicyAssignment`, or another? Watch the Export search results in eDiscovery page.
- Does the Learn page's request route for CMK on direct export differ for GCC, GCC High and DoD tenants, given that Customer Key setup for GCC High and DoD needs a US Government onboarding request? Watch the Learn page and the roadmap item.
- What does a direct export do if the tenant is not CMK enabled at export time, and can an administrator see whether a given export was encrypted with the customer key? The page says only that the tenant must remain CMK enabled.
- Will the feature stay request-only at general availability in January CY2027, or become available without a support request? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. Learn says the feature is enabled by a request to Microsoft Support, so no source says existing export behaviour changes until a tenant asks; the exposure that remains is review set data, which is not covered.
cost: Low. Learn names no charge specific to CMK on direct export; the cost is Customer Key itself (licences, two paid Azure subscriptions) and admin time.
impact: Low. Only administrators who set up Customer Key and the eDiscovery users who run direct exports are involved; Learn describes no change to the export steps.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: Before rollout / absence: The export documentation does not name U.S. government clouds for the CMK feature or specify a cloud-specific enablement route. | Found: Searched: GCC, DoD, CMK and MDEP in edisc-search-export; read its CMK prerequisites and download guidance. The CMK section has no government-cloud qualification, although later download guidance names GCC and GCCH. | Fix: Replace 'The page does not name the US Government clouds' with 'The CMK section does not specify availability or an enablement route for GCC, GCC High or DoD.' In the checklist, refer to the CMK section rather than the whole export page.
- [supported, minor] controls[1].note; Governance controls; Governance guidance: Before rollout; Open questions / applicability: The correctly documented multi-workload assignment control is qualified with a caveat that the export page does not explicitly name its DEP type. | Found: | -Scenario | Workload: MDEP (Multiple Workloads) or EXO (Exchange) | MDEP or EXO | | Fix: Keep the correct command, but replace the DEP-type caveat in the note and prose with 'The export page requires a DEP assigned through MDEP; Customer Key setup identifies MDEP as Multiple Workloads.' Remove the first Open questions bullet and the checklist request to identify the DEP type. The existing cited setup page documents this mapping. | Source: https://learn.microsoft.com/purview/customer-key-set-up
- [supported, minor] Open questions: final bullet / date: The final open question describes general availability in January CY2027 without identifying that date as a target. | Found: "status": "In development", "targetDate": "January CY2027", "releasePhase": ["General Availability"] | Fix: Replace the final question with 'Will the feature stay request-only at general availability, currently targeted for January CY2027, or become available without a support request? Watch the roadmap item and Message center.'
-->
