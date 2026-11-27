---
title: "Microsoft Purview eDiscovery: customer-managed keys for direct export (Worldwide)"
slug: "microsoft-purview-ediscovery-cmk-customer-managed-key-for-ediscovery-direct-export"
roadmapId: 557684
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to encrypt eDiscovery direct export packages with your Customer Key keys (Worldwide). It is enabled on request to Microsoft Support, so tenants using Customer Key decide whether to ask."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn names no licence specific to this feature. It needs Customer Key, which the Purview service description lists as included in Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5 plans. Exporting needs an eDiscovery user with an E3 or E5 licence; for SharePoint content the account also needs a SharePoint E3 licence."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","ediscovery","encryption","customer-key","data-export","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap 557684"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557684"
    kind: "roadmap"
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
  - title: "Set-M365DataAtRestEncryptionPolicyAssignment"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-m365dataatrestencryptionpolicyassignment"
    kind: "learn"
  - title: "MC1289726: (Updated) Microsoft Purview: eDiscovery - CMK (Customer managed key) for eDiscovery direct export"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1289726"
    kind: "message-center"
videos: []
related: ["microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges"]
controls:
  - governs: "Whether CMK for eDiscovery direct export is enabled for the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "Enabled by a request to Microsoft Support or your Customer Success Account Manager. Preview per the Learn page."
  - governs: "The data encryption policy assigned to the tenant, a prerequisite for CMK direct export"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-M365DataAtRestEncryptionPolicyAssignment -DataEncryptionPolicy <PolicyName or ID>"
      docs: "https://learn.microsoft.com/purview/customer-key-manage"
    note: "Exchange Online PowerShell, Exchange admin permissions. Multi-workload DEP assignment; the eDiscovery page does not name the DEP type."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-20"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-19"
    note: "First briefing for CMK on eDiscovery direct export, Worldwide item; GCC, GCC High and DoD are on roadmap item 565373."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: reworded the key-custody claim to export packages at rest, added the SharePoint E3 licence qualification, and removed the instruction to use the assignment cmdlet as a status check."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 53 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 52
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "68cf7ba5c0196259a0a84c1bdfdd4963"
---

## What's changing

Microsoft is extending Customer Key (customer-managed key, CMK) protection to Microsoft Purview eDiscovery direct export. When it is enabled for a tenant, exported investigation data is encrypted at rest using tenant-specific encryption scopes backed by customer-managed keys, as the [Export search results in eDiscovery](https://learn.microsoft.com/purview/edisc-search-export) page describes it. The roadmap item describes this as adding to the Microsoft-managed encryption already in place.

It applies to tenants that have configured Customer Key through the Microsoft 365 Data-at-Rest Encryption Platform (MDEP) with a Data Encryption Policy (DEP) in PolicyAssigned status. Microsoft's notice MC1289726 says that, for these tenants, export packages are encrypted with the organisation's key based on the existing DEP configuration, validated through MDEP at export time, with no change to the eDiscovery user experience and no new toggle. The same notice says the feature is enabled only for specific tenants that ask Microsoft Support, and that an export proceeds without CMK encryption if CMK is not properly configured through MDEP at export time.

The Learn page labels the section "Enable CMK (Customer Managed Key) for direct exports (preview)" and says review set data at rest is not included at this time. The roadmap lists this item as In development with a preview target of April CY2026 and a general availability target of December CY2026, for Worldwide (Standard Multi-Tenant) on the web. MC1289726 (updated 14 August 2026) gives a public preview rollout from early May to early June 2026 and a worldwide general availability rollout from late December 2026 to early January 2027, previously early to end of September. Microsoft lists the GCC, GCC High and DoD clouds under a separate roadmap item, [565373](https://www.microsoft.com/microsoft-365/roadmap?id=565373), targeted January CY2027.

## Why it matters

Organisations that already use Customer Key can extend customer-controlled encryption to direct export packages at rest in eDiscovery storage. This matters when assessing key-control requirements for that service-held copy of investigation data.

If nobody acts, no source says existing export behaviour changes: Microsoft's notice says it is enabled for specific tenants by request, and the Learn page lists a support request as a prerequisite. The decision for a Customer Key tenant is whether to ask.

## Risk assessment

**Data exposure**

- Direct export packages are covered by the tenant's CMK once enabled. Review set data at rest is not included at this time, so investigation data held in a review set stays outside this protection.
- Per MC1289726, direct export jobs proceed without CMK encryption if the tenant does not have CMK properly configured through MDEP at export time. A lapsed or broken DEP therefore produces exports under the previous protection without a block. The Learn page says the tenant must remain CMK enabled at the time of the export.

**Security & identity**

- The protection depends on a DEP in PolicyAssigned status and Azure Key Vault set up under the standard Customer Key process, so key custody sits with whoever administers the two Azure subscriptions Customer Key requires.
- Exported data keeps the 14-day retention that MC1289726 says CMK does not change. Search export packages expire 14 days after creation and cannot be recovered afterwards, per the Learn page.

**Autonomy & actions**

- No change: the feature adds no agent or automated action. Encryption is applied by the service during the export.

**Change & support**

- Enablement needs a support request, so plan lead time and a named contact (Microsoft Support or your Customer Success Account Manager).
- Microsoft states that encryption scopes, storage accounts and containers are managed automatically, with no additional storage configuration needed.

## Cost and licensing

Microsoft's pages read for this briefing name no charge and no licence specific to CMK on direct export. The Learn export page and MC1289726 list prerequisites, and none is a separate SKU.

The prerequisite is Customer Key. The [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) says each user who benefits from Customer Key requires a licence, and lists Customer Key as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5. For multiple workloads it says the tenant must hold at least as many Customer Key licences as users assigned Exchange or Teams licences, whichever is greater.

Setting up Customer Key requires two paid Azure subscriptions, per the setup page, so Azure billing for those subscriptions and their key vaults applies to the tenant. The Azure rates are not covered here. To export, the eDiscovery user needs a Microsoft 365 Enterprise E3 or E5 licence, per the Learn export page; that requirement is not specific to CMK. When exporting SharePoint content, the account must also have a Microsoft SharePoint E3 licence; otherwise, SharePoint items might not export as expected.

## Scope

**Who:** Microsoft 365 tenants that have Customer Key enabled through MDEP with a DEP in PolicyAssigned status and have asked Microsoft Support to enable CMK for eDiscovery direct export. Administrators and investigators who run direct exports in the Microsoft Purview portal are the people affected.

**Clouds and platforms:** This roadmap item lists Worldwide (Standard Multi-Tenant) and the web. GCC, GCC High and DoD appear on roadmap item [565373](https://www.microsoft.com/microsoft-365/roadmap?id=565373), a separate item with a January CY2027 target.

**Prerequisites (Learn export page):** the CMK direct export feature is enabled for the organisation through Microsoft Support or a Customer Success Account Manager; Azure Key Vault is configured following the standard Customer Key setup; and a DEP is in PolicyAssigned state via the MDEP onboarding cmdlets. Customer Key setup itself calls for Exchange admin permissions and two paid Azure subscriptions.

**Out of scope:** review set data at rest is not included at this time, per the Learn page.

## Governance guidance

### Before rollout

- Decide with your security and compliance leads whether direct export packages need to sit under your own keys, and name the owner of the request to Microsoft Support.
- Confirm that Customer Key is configured and that your DEP is in PolicyAssigned status. Do not run the assignment command in the controls table as a status check: it changes the tenant's policy assignment.
- Check licensing for Customer Key against the Purview service description, and check that exporting users hold the E3 or E5 licence the export page requires. When exporting SharePoint content, the account must also have a Microsoft SharePoint E3 licence; otherwise, SharePoint items might not export as expected.
- Ask your Microsoft contact which DEP type satisfies the PolicyAssigned prerequisite, because the export page does not say.

### At rollout

- Request enablement from Microsoft Support or your Customer Success Account Manager, since Learn says this is how the feature is enabled for a tenant.
- Run a test direct export after Microsoft confirms enablement and confirm with your contact that it was encrypted with your key, as the notice says unconfigured tenants export without CMK.
- Tell eDiscovery managers that the export experience is unchanged and that review set data is not covered.

### After rollout

- Monitor the DEP assignment so that the tenant remains CMK enabled at export time.
- Download export packages within the 14 days before they expire.
- Watch the Message center and the Export search results in eDiscovery page for the general availability date and any change to the preview label.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether CMK for eDiscovery direct export is enabled for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Enabled by a request to Microsoft Support or your Customer Success Account Manager. Preview per the Learn page.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>The data encryption policy assigned to the tenant, a prerequisite for CMK direct export</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell, Exchange admin permissions. Multi-workload DEP assignment; the eDiscovery page does not name the DEP type.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-M365DataAtRestEncryptionPolicyAssignment -DataEncryptionPolicy &lt;PolicyName or ID&gt;</code> <a href="https://learn.microsoft.com/purview/customer-key-manage" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

There is no new toggle: MC1289726 says behaviour is governed by existing Data Encryption Policies. The tenant-level on switch is a request to Microsoft Support, not a setting an administrator can change.

The Customer Key pages say all Customer Key operations run through Exchange Online PowerShell and require Exchange admin permissions. The assignment cmdlet is the Customer Key page's multi-workload DEP assignment. The eDiscovery page does not say which DEP type it requires, so confirm that before relying on it.

Disabling or rolling back a multi-workload DEP is documented as a separate process: rolling back from Customer Key for multiple workloads is a Microsoft Support request, per the Customer Key manage page.

## Open questions

- Which DEP type satisfies the PolicyAssigned prerequisite: the multi-workload DEP assigned with `Set-M365DataAtRestEncryptionPolicyAssignment`, or something else? Watch the Export search results in eDiscovery page.
- Is there a way to see, in the export process report or the portal, whether a given direct export was encrypted with the customer key? Microsoft has not said, and the notice says exports without valid CMK proceed unencrypted by CMK.
- Will the feature stay request-only at general availability in late December 2026, or become available without a support request? Watch MC1289726 and the roadmap item.
- What happens to exports already created if a tenant later rolls back or revokes its keys? Watch the Customer Key manage page.

<!-- rationale
risk: Low. Microsoft's notice says it is enabled for specific tenants on request to Microsoft Support, so nothing changes until a tenant asks. The one trap: exports proceed without CMK encryption if CMK is not valid at export time.
cost: Low. No Microsoft page read names a separate charge for CMK on direct export. The cost is that of the Customer Key prerequisites (licences, two paid Azure subscriptions) and admin time.
impact: Low. Administrators and the investigators who run direct exports are affected, and Microsoft's notice says the eDiscovery user experience does not change.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature adds no agent or automated action. | Found: Searched: 'eDiscovery CMK agent automatic actions'; opened edisc-search-export and read MC1289726. These describe automatic export encryption but give no blanket assurance about agents or autonomous actions. | Fix: Remove 'No change: the feature adds no agent or automated action.' Retain 'Encryption is applied by the service during the export.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: The Customer Key pages say all Customer Key operations run through Exchange Online PowerShell. | Found: Permissions: Exchange admin permissions (all Customer Key operations run through Exchange Online PowerShell) | Fix: Replace the sentence with 'Multi-workload DEP assignment uses Exchange Online PowerShell and requires Exchange admin permissions.' The cited https://learn.microsoft.com/purview/customer-key-manage also directs SharePoint configuration through SharePoint PowerShell and Key Vault operations through Azure PowerShell. | Source: https://learn.microsoft.com/purview/customer-key-set-up
-->
