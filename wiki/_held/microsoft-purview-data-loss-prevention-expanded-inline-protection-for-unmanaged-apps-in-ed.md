---
title: "Microsoft Purview: DLP inline protection for more unmanaged AI apps in Edge for Business"
slug: "microsoft-purview-data-loss-prevention-expanded-inline-protection-for-unmanaged-apps-in-ed"
roadmapId: 571396
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP and collection policies will cover a broader set of unmanaged generative AI apps in Edge for Business. Admins use existing policy screens; the roadmap gives no action date, so review how your policies are scoped."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists inline DLP data protection for cloud apps in the browser as Included for Microsoft 365 E5/A5, the Microsoft Purview Suite editions and Office 365 E5/A5. Nothing specific to the expanded app set is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","edge-for-business","microsoft-edge","ai","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap: item 571396"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571396"
    kind: "roadmap"
  - title: "Learn about Data Loss Prevention for Cloud Apps in Edge for Business"
    url: "https://learn.microsoft.com/purview/dlp-browser-dlp-learn"
    kind: "learn"
  - title: "Help prevent sharing via Microsoft Edge for Business to unmanaged AI apps from managed devices"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-block-to-ai-via-edge"
    kind: "learn"
  - title: "Automatic activation of your Microsoft Purview policy in Microsoft Edge"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-dlp-purview-configuration"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-558437","microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m","microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-edge-expanded-enforcement-controls-for-data-loss-prevention-connectors"]
controls:
  - governs: "Which unmanaged AI apps an inline DLP policy covers, and where it is enforced"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > All unmanaged AI apps"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-block-to-ai-via-edge"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -EnforcementPlanes @(\"Browser\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Security & Compliance PowerShell. The cmdlet creates the policy for the Browser enforcement plane; scope and rule actions are set elsewhere. The example in the Learn article is hypothetical."
  - governs: "Resync of the automatic Edge and Intune configuration for Purview DLP protections"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Edge > Monitoring > Microsoft Purview DLP protections > Sync now"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-dlp-purview-configuration"
    api: null
    note: "Does not create or update policies or groups where the admin lacks the required permissions."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item: documents today's Edge for Business inline DLP for unmanaged AI apps and flags what the expansion has not yet published."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 70 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 65
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "17944bd97cf91a0b46ed3f290f15951c"
---

## What's changing

The roadmap item states that Microsoft Purview collection and data loss prevention (DLP) policies will support browser inline protection for a significantly broader set of unmanaged generative AI apps in Edge for Business. Admins use existing Purview policy experiences to detect and protect sensitive data shared through supported browser activities. The item is In development, with a preview targeted for January CY2027 and general availability targeted for February CY2027, for Worldwide (Standard Multi-Tenant) on the Web platform.

The feature builds on what Microsoft Learn documents today (November 2026). Edge for Business enforces Purview DLP policies inline, and policies for unmanaged apps apply on Windows 10 and Windows 11 desktop devices managed by Microsoft Intune, across all Edge browser profiles. The supported unmanaged apps currently include ChatGPT (consumer), Google Gemini, DeepSeek and Perplexity AI. Microsoft Learn does not yet describe the expanded set, so what follows about it is the roadmap's description only.

A policy is created in the Microsoft Purview portal under **Inline web traffic**, where **Adaptive app scopes** > **All unmanaged AI apps** selects the apps. Learn states that adaptive app scopes apply only to the supported unmanaged AI apps in Edge for Business. After the first such policy is saved, the Microsoft Edge management service automatically creates Edge configuration policies, Intune policies and security groups outside Purview. When the policy blocks, users in scope cannot use unprotected browsers where the policy does not apply.

## Why it matters

Browser inline protection decides how much of your sensitive data can reach consumer AI tools unseen. Each app the supported list adds is one more destination that a policy can audit or block. Each app that is missing is one where staff can paste or upload data with no Purview detection from this control. Expect the security and compliance teams to need a refreshed view of which apps each policy covers once the list grows.

If nobody acts, Microsoft has not stated what happens to existing policies when the list expands. Plan on the assumption that a policy scoped to all unmanaged AI apps could start to affect more sites, and check this when the preview arrives rather than discover it through user complaints.

## Risk assessment

**Data exposure**
- Coverage depends on the supported-app list. Learn notes that detection is based on the destination app's traffic, which is not always exactly the same as the originating app, and that some apps such as ChatGPT, Runway and Meta AI might intermittently send content in encoded form or through dynamically generated endpoints, which can affect enforcement.
- Inline evaluation covers up to 4 MB of content for uploadText and files up to 3 MB for uploadFile, so check larger items against these documented limits.

**Security & identity**
- Microsoft Purview browser and network data security policies do not apply to B2B guest users, so guests are outside this control.
- Learn states that a policy targeting an app whose URL is shared across instances can capture both consumer and enterprise versions, for example ChatGPT consumer and ChatGPT enterprise. Review scope so sanctioned enterprise tools are not blocked unintentionally.

**Autonomy & actions**
- Activation creates Edge configuration policies, Intune policies and two security groups automatically. Learn describes the auto-created policies as read-only, so changes are made in the Purview policy.

**Change & support**
- When a policy blocks, users in scope are blocked from Firefox and other browsers, and Chrome use might be allowed but with a set list of unmanaged generative AI apps blocked. Expect helpdesk calls from users who use other browsers.
- If the automatic sync fails, Learn states that policies are not applied in Edge for Business until an admin resyncs.
- Endpoint DLP policies take priority over inline policies where the same user, context and action are configured in both.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Purview DLP inline data protection for data sharing to cloud apps in the browser as Included for Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5 Information Protection and Governance, and for Office 365 E5/A5. The Learn page for browser DLP points to the Microsoft 365 plans and service descriptions for licensing.

**Meter.** A price or meter specific to the expanded app set is not yet published. The same service description lists DLP inline protection across the network as a pay-as-you-go capability, which is a different feature from the browser one.

**Indirect costs.** Expect admin time to review policy scope, plus support time for users blocked in other browsers. Activation needs roles in Microsoft Edge administration, Microsoft Intune administration and Directory Reader, so budget for who holds them.

## Scope

**Users and devices.** Policies for unmanaged apps apply to Edge for Business on Windows 10 and Windows 11 desktop devices managed by Microsoft Intune, in all Edge profiles. Learn lists Edge for Business versions from 144, in the two latest stable versions. B2B guest users are outside these policies.

**Roles.** Fully activating a policy needs Directory Reader, Microsoft Edge administration and Microsoft Intune administration permissions. Learn points to its DLP deployment page for the permissions to create and deploy DLP policies.

**Cloud and rollout.** The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform, with preview targeted for January CY2027 and general availability for February CY2027. Learn states that inline protection for unmanaged apps does not support tenants that use multi-admin approval in Microsoft Intune.

## Governance guidance

### Before rollout
- List the DLP and collection policies that use **Inline web traffic** with **Adaptive app scopes** > **All unmanaged AI apps**, and note which users and groups each includes (controls table, row 1).
- Confirm that the admins who will save the first policy hold Directory Reader, Microsoft Edge administration and Microsoft Intune administration permissions.
- Check whether the tenant uses multi-admin approval in Microsoft Intune, which Learn states this protection does not support.
- Compare users in scope with any Endpoint DLP policies for the same actions, because Endpoint DLP takes priority.

### At rollout
- Run new or changed policies in simulation mode first, as the Learn walkthrough does, before switching to enforcement.
- Include every catalogue entry for an app when you target it by name, for example both QwenAI and Qwen Chat.
- Tell users in block scope which browsers stop working and that Edge for Business is unaffected.

### After rollout
- Review activity in Activity explorer, filtering by enforcement plane set to browser.
- Watch Purview for a sync error and, if one appears, resync from Settings > Edge > Monitoring in the admin centre (controls table, row 2).
- Re-read the Learn supported-apps list when the preview starts, and compare it with the apps each policy covers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which unmanaged AI apps an inline DLP policy covers, and where it is enforced</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The cmdlet creates the policy for the Browser enforcement plane; scope and rule actions are set elsewhere. The example in the Learn article is hypothetical.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › + Add cloud apps › Adaptive app scopes › All unmanaged AI apps <a href="https://learn.microsoft.com/purview/dlp-create-policy-block-to-ai-via-edge" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -EnforcementPlanes @(&quot;Browser&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Resync of the automatic Edge and Intune configuration for Purview DLP protections</strong><br><small>Tenant</small><br><small class="controls__note">Does not create or update policies or groups where the admin lacks the required permissions.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Edge › Monitoring › Microsoft Purview DLP protections › Sync now <a href="https://learn.microsoft.com/deployedge/microsoft-edge-dlp-purview-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Policy scope, rules and actions are all set in the Purview policy; the auto-created Edge configuration policies, Intune policies and security groups are read-only and are updated by editing the Purview policy. Row 1's cmdlet creates the policy for the browser enforcement plane and does not by itself set the scope, rules or actions. Resync does not create or update policies or groups where the admin lacks the required permissions. Learn documents the supported-app list on the browser DLP page, and the roadmap item does not yet state how the expanded list is applied to existing policies.

## Open questions

- Which apps make up the expanded set, and when will the Learn page on browser DLP list them? Watch the Learn page and Message center.
- Will existing policies scoped to **All unmanaged AI apps** cover newly supported apps automatically, or must admins edit them?
- Will the preview (January CY2027) and general availability (February CY2027) differ in apps or supported activities?
- Is any licence or meter change planned for the expanded set? Watch the Microsoft Purview service description.

<!-- rationale
risk: Medium. A policy set to Block also blocks users from unprotected browsers, and the roadmap does not say whether existing policies will pick up the new apps. The default on arrival is not stated.
cost: Low. The Purview service description lists inline DLP for cloud apps in the browser as included in E5-level licences, so the known cost is admin and support time. Pricing for this expansion is not yet published.
impact: Medium. Users inside a policy's scope who use generative AI sites in Edge for Business see audits or blocks, and users under a Block policy also lose access to other browsers.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance controls: paragraph after table / behaviour: The automatically created security groups are read-only. | Found: Searched: '"Purview" "security groups" "read-only" "Edge"'; read microsoft-edge-dlp-purview-configuration, including How it works and FAQs. It calls policies read-only and groups automatically managed, but does not state that the security groups are read-only. | Fix: Replace 'the auto-created Edge configuration policies, Intune policies and security groups are read-only and are updated by editing the Purview policy' with 'the auto-created Edge configuration policies and Intune policies are read-only; these policies and the security groups update automatically when the Purview policy changes'. Source: https://learn.microsoft.com/deployedge/microsoft-edge-dlp-purview-configuration.
- [contradicted, blocker] Scope: Users and devices / availability: Learn lists these Edge for Business features as starting with version 144. | Found: These features are available in the two latest stable versions of Edge for Business, starting with version 158. | Fix: Replace 'Learn lists Edge for Business versions from 144, in the two latest stable versions' with 'Learn lists these features as available in the two latest stable versions of Edge for Business, starting with version 158'. Source: https://learn.microsoft.com/purview/dlp-browser-dlp-learn#supported-browsers. | Source: https://learn.microsoft.com/purview/dlp-browser-dlp-learn
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; What's changing; Governance controls / admin-path: The printed Purview portal path reaches the All unmanaged AI apps scope for an inline DLP policy. | Found: Select + Add cloud apps > Adaptive app scopes Select All unmanaged AI apps > Add. On the Choose where to enforce the policy step, select Edge for Business. | Fix: The printed path reaches app selection but omits the enforcement choice named in the control. Use 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > All unmanaged AI apps > Choose where to enforce the policy > Edge for Business' in controls[0].ui.path and the rendered table. | Source: https://learn.microsoft.com/purview/dlp-create-policy-block-to-ai-via-edge
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control the governance checklist asks readers to check or take stock of is represented in the controls table. | Found: Check whether the tenant uses multi-admin approval in Microsoft Intune Compare users in scope with any Endpoint DLP policies for the same actions Review activity in Activity explorer The table contains only inline policy scope/enforcement and configuration resync. | Fix: The Before rollout checks for Intune multi-admin approval and overlapping Endpoint DLP policies, and the After rollout Activity explorer review, have no corresponding controls-table rows. Do not add rows as part of this correction.
-->
