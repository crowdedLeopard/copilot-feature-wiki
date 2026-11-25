---
title: "Microsoft Purview: network data security with Entra Internet Access (Global Secure Access)"
slug: "microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v"
roadmapId: 566528
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP policies can now inspect text, prompts and files at the network layer through Entra Internet Access. Administrator-configured: nothing is enforced until policies exist. Needs Microsoft 365 E7, or Purview E5 plus Internet Access."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "July CY2026"
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn lists one of two per-seat combinations: Microsoft 365 E7, or Purview E5 (or equivalent) plus Entra Internet Access (or equivalent). Pay-as-you-go is not required for the Entra Global Secure Access integration."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","network-data-security","entra-id","global-secure-access","conditional-access","sensitivity-labels","sensitive-information-types","ai","licensing","e7"]
sources:
  - title: "Roadmap item 566528"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566528"
    kind: "roadmap"
  - title: "MC1419797: Microsoft Purview | Data Loss Prevention - Extend Purview data security to the network layer via Entra GSA integration"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1419797"
    kind: "message-center"
  - title: "Learn about Microsoft Purview Network Data Security"
    url: "https://learn.microsoft.com/purview/dlp-network-data-security-learn"
    kind: "learn"
  - title: "Use Network Data Security to help prevent sharing sensitive information with unmanaged AI"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    kind: "learn"
  - title: "Create content policies for network content filtering"
    url: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    kind: "learn"
  - title: "Tutorial: Configure content policies"
    url: "https://learn.microsoft.com/entra/global-secure-access/tutorial-internet-access-content-policies"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Create conditionalAccessPolicy (beta)"
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta"
    kind: "learn"
  - title: "conditionalAccessSessionControls resource type (beta)"
    url: "https://learn.microsoft.com/graph/api/resources/conditionalaccesssessioncontrols?view=graph-rest-beta"
    kind: "learn"
  - title: "globalSecureAccessFilteringProfileSessionControl resource type (beta)"
    url: "https://learn.microsoft.com/graph/api/resources/globalsecureaccessfilteringprofilesessioncontrol?view=graph-rest-beta"
    kind: "learn"
  - title: "conditionalAccessUsers resource type (beta)"
    url: "https://learn.microsoft.com/graph/api/resources/conditionalaccessusers?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft 365 and Office 365 platform service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/office-365-platform-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps","microsoft-edge-expanded-enforcement-controls-for-data-loss-prevention-connectors"]
controls:
  - governs: "Purview DLP policy that enforces on network traffic"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > Choose where to enforce the policy > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -EnforcementPlanes @(\"Network\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Wizard: cloud apps and scope are chosen before the enforcement page. PowerShell creates the policy only, in Security & Compliance PowerShell."
  - governs: "Entra content policy rule that sends content to Purview for inspection"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Global Secure Access > Secure > Content policies > + Create Policy > Rules > Add rule > Action > Scan with Purview"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api: null
    note: "Requires the Global Secure Access Administrator role. The policy is then linked to a security profile."
  - governs: "Which users the Global Secure Access security profile applies to"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Protection > Conditional Access > + Create new policy > Session > Use Global Secure Access Security Profile"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api:
      kind: "graph"
      call: "POST /beta/identity/conditionalAccess/policies"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta"
    note: "Graph beta: conditions.users.includeGroups sets the groups; sessionControls.globalSecureAccessFilteringProfile sets isEnabled and profileId. Beta APIs are subject to change and not supported for production use."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-18"
    note: "New briefing: Purview network data security through Entra Internet Access, now Launched, with licences, limits and the three controls to set."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 80 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: fixed the Scan with Purview and security-profile link paths, moved the Conditional Access Graph call to beta, narrowed the coverage statements and replaced the pricing pointer."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 89
  confirmed: 88
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "d2f9a1b5cd2b4722a97a8c592c64cf32"
---

## What's changing

Microsoft Purview network data security now works with Microsoft Entra Internet Access, part of Microsoft Entra Global Secure Access (GSA). Administrators can inspect text, prompts and files sent from managed devices to generative AI apps, cloud storage, webmail, social media and similar destinations, and audit or block them using Purview data loss prevention (DLP) policies. The roadmap item also describes risky-user detection through Insider Risk Management and alerts surfaced in Purview and Microsoft Defender.

The roadmap status is Launched, with a target date of September CY2026 and a preview date of July CY2026; the release phases listed are General Availability and Preview. Microsoft's notice MC1419797 gives a public preview from early July 2026 to late July 2026 and general availability (Worldwide) from late September 2026 to late October 2026. It says the integration becomes available automatically in eligible tenants and that it is administrator-configured and not enabled for enforcement until policies are created and deployed.

Learn describes two policies working together. An Entra content policy rule with the **Scan with Purview** action sends file and text content for inspection, and a matching Purview DLP policy of type **Inline web traffic** decides the outcome. Purview supports **Audit only** and **Block** actions, and the conditions can use sensitive information types, sensitivity labels or the user's risk level. Targets include unmanaged apps from the Microsoft Defender for Cloud Apps catalogue and adaptive app scopes such as generative AI, cloud storage, collaboration, social network and webmail. Some features in the Learn DLP scenario are marked as preview.

Microsoft's sources differ on one point. MC1419797 recommends reviewing pay-as-you-go billing for Purview network data security, while the Learn page says pay-as-you-go is not required for the Entra Global Secure Access integration; it applies to non-Microsoft SASE and secure browser integrations.

## Why it matters

This gives security and compliance teams a way to apply existing Purview classifiers to traffic that never touches a managed app, including prompts typed into unsanctioned AI tools. It extends the reach of DLP, but it also puts content inspection onto the Global Secure Access path, so the Entra and Purview teams now share responsibility for one control.

Microsoft's notice says nothing is enforced until policies are created and deployed, so if nobody acts, existing behaviour continues. The decision for service owners is whether to pilot it now, which depends on the licence position and on whether TLS inspection and the Global Secure Access client are already deployed.

## Risk assessment

**Data exposure**

- Text and files sent to AI and cloud apps are sent to Purview for classification and policy evaluation. If a collection policy has content capture configured, the full conversation with the AI app is captured and sent to Purview as well.
- Inspection can be skipped. When Purview inspection cannot complete, for example a payload too large or an internal error, traffic is allowed (fail-open); the GSA traffic logs flag these with the **PurviewStatus** field. The GSA page gives a 3 MB maximum for file and text content, while the Purview page gives 4 MB for text and 3 MB for files. OCR is not yet supported.
- Some unmanaged AI apps, such as ChatGPT, can send content in encoded form or through dynamic endpoints, which Learn says can affect enforcement.

**Security & identity**

- Scan with Purview applies only to traffic associated with an Entra user identity, and Purview network data security policies do not apply to B2B guest users.
- Policies that target an unmanaged app can capture both consumer and enterprise versions when the app's URL is shared, so a block can hit sanctioned enterprise use.
- For the Conditional Access deployment described here, review the security-profile assignment when checking pilot coverage.

**Autonomy & actions**

- The Block action stops the activity. Learn cautions that blocking HTML or JSON text types can block normal web and API traffic.
- When GSA API rate limits are exceeded, traffic is blocked (fail-closed). A content rule can be scoped to AI agent traffic with the **Session type** condition.

**Change & support**

- Prerequisites are TLS inspection, the Internet Access traffic forwarding profile and the GSA client on Entra ID joined or hybrid joined devices; QUIC (UDP) is not supported.
- Allow up to 24 hours for policies to reach the network security solution, and up to 30 minutes for a request to appear in the audit log and activity explorer. Expect support calls from users whose uploads are blocked.

## Cost and licensing

Learn's network data security page says that Microsoft Entra Global Secure Access integration requires one of two per-seat combinations: Microsoft 365 E7, or Purview E5 (or equivalent) together with Entra Internet Access (or equivalent). The GSA content policy page lists a valid Entra Internet Access licence and a valid Purview licence (required for Scan with Purview inspection) as prerequisites, and says basic content filtering works without a Purview licence.

The same Learn page says pay-as-you-go is not required for the Entra integration. For non-Microsoft SASE and secure browser integrations it requires Purview E5 (or equivalent) plus pay-as-you-go, billed per request, where a request is each network call from a device or browser to a website or API. MC1419797 nevertheless lists reviewing pay-as-you-go billing as a preparation step.

Indirect costs are admin time across Entra and Purview, TLS inspection and client deployment, and support load from blocked uploads. For enterprise plan pricing, see [Compare Microsoft 365 Enterprise plans](https://www.microsoft.com/microsoft-365/compare-microsoft-365-enterprise-plans).

## Scope

**Who is covered:** the deployment described here targets users whose traffic is routed through Global Secure Access Internet Access and whose Conditional Access policy applies the configured security profile. Learn lists Windows and macOS for the GSA client, and devices must be Entra ID joined or hybrid joined. B2B guests and traffic that cannot be mapped to an Entra user are not inspected.

**Roles:** Global Secure Access Administrator configures GSA settings and Conditional Access Administrator configures Conditional Access. In Purview, Learn names roles such as DLP Compliance Management or Information Protection Admin for seeing Data loss prevention.

**Cloud and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web.

**Rollout:** per MC1419797, available automatically in eligible tenants as rollout completes, with no enforcement until policies are deployed. Network content filtering supports the Internet Access profile only.

## Governance guidance

### Before rollout

- Confirm which users hold Microsoft 365 E7, or Purview E5 (or equivalent) and Entra Internet Access (or equivalent), before choosing a pilot group.
- Check with your Global Secure Access administrators that the Internet Access forwarding profile, a TLS inspection policy and the GSA client on Entra ID joined or hybrid joined devices are in place.
- List the unmanaged AI and cloud apps you want covered, using the Defender for Cloud Apps catalogue entries, and include every catalogue entry for an app that has several.

### At rollout

- Create an Entra content policy rule with the **Scan with Purview** action, link it to a security profile and use the Conditional Access Administrator role to assign that profile to a pilot group (rows 2 and 3).
- Create the matching Purview DLP policy for Inline web traffic with **Network and non-Microsoft secure browsers** on, and use simulation mode first (row 1).
- Match the text and file actions in the DLP rule to the activities and content types in the content rule.

### After rollout

- Review Data loss prevention > Alerts and Activity explorer filtered for Network DLP activities.
- Query GSA traffic logs for the PurviewStatus field to find transactions that skipped inspection.
- Check pilot users' reports of blocked normal traffic before widening the Conditional Access assignment.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Purview DLP policy that enforces on network traffic</strong><br><small>Tenant</small><br><small class="controls__note">Wizard: cloud apps and scope are chosen before the enforcement page. PowerShell creates the policy only, in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › Choose where to enforce the policy › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -EnforcementPlanes @(&quot;Network&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Entra content policy rule that sends content to Purview for inspection</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Global Secure Access Administrator role. The policy is then linked to a security profile.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Global Secure Access › Secure › Content policies › + Create Policy › Rules › Add rule › Action › Scan with Purview <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users the Global Secure Access security profile applies to</strong><br><small>Group</small><br><small class="controls__note">Graph beta: conditions.users.includeGroups sets the groups; sessionControls.globalSecureAccessFilteringProfile sets isEnabled and profileId. Beta APIs are subject to change and not supported for production use.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Protection › Conditional Access › + Create new policy › Session › Use Global Secure Access Security Profile <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/identity/conditionalAccess/policies</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Scan with Purview needs both halves: Learn says that without a matching Purview DLP policy targeting inline web traffic, the content policy cannot inspect content or enforce audit or block decisions. Purview alerts and Activity explorer apply only when Scan with Purview is used; for basic Allow or Block content rules, Learn points to the Global Secure Access traffic logs. The content policy is linked to a security profile (Global Secure Access > Secure > Security profiles > profile > Link policies > + Link a policy > Existing Content policy > Policy name > content policy), and the Conditional Access policy applies that profile. Learn's network data security page also describes collection policies, which collect network data for discovery without enforcement.

Graph beta: conditions.users.includeGroups supplies the group IDs; sessionControls.globalSecureAccessFilteringProfile sets isEnabled to true and profileId to the security profile ID. Beta APIs are subject to change and not supported for production use.

## Open questions

- Which size limit applies to Scan with Purview inspection: 3 MB for file and text content (GSA page) or 4 MB for text and 3 MB for files (Purview page)? Watch both Learn pages.
- Does the Entra integration incur any pay-as-you-go charge, given that MC1419797 recommends reviewing it and the Learn page says it is not required? Watch the Learn licensing section and Message center.
- How does Insider Risk Management, described in the roadmap item, use network DLP activity, and where is it configured? The network data security page lists activity explorer, DSPM and DLP alerts as places the data appears.
- Will a Microsoft Graph or other API for Entra content policies be documented? Watch the Global Secure Access Graph reference.

<!-- rationale
risk: Low. Microsoft's notice says the capability is administrator-configured and not enforced until policies are created and deployed, so exposure is unchanged by default. Residual risks are blocking rules that catch normal traffic and inspection that fails open.
cost: Medium. Learn requires Microsoft 365 E7, or Purview E5 (or equivalent) plus Entra Internet Access (or equivalent), per seat, for the users covered. Pay-as-you-go is not required for the Entra integration.
impact: Medium. Users in the configured pilot group can see uploads and prompts to AI and cloud apps blocked.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: first row / admin-path: The printed Microsoft Purview wizard path reaches Network and non-Microsoft secure browsers. | Found: Select Custom from the Categories list and then select Custom policy from the Regulations list. | Fix: Use the full path: Data loss prevention > Policies > + Create policy > Inline web traffic > Categories > Custom > Regulations > Custom policy > Choose where to enforce the policy > Network and non-Microsoft secure browsers. The omitted cloud-app and user-scope selections are permissible abbreviations. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [supported, minor] controls[1].ui; Governance controls: second row / admin-path: The printed Entra Content policies creation path reaches Action > Scan with Purview. | Found: On the Basics tab: ... On the Rules tab: ... Select the appropriate option for the Action menu: ... To use data policies configured in Microsoft Purview, select Scan with Purview. | Fix: Use Global Secure Access > Secure > Content policies > + Create Policy > Basics > Rules > Add rule > Action > Scan with Purview. Add rule is explicitly documented in the already-cited https://learn.microsoft.com/entra/global-secure-access/tutorial-internet-access-content-policies. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
- [supported, minor] controls[2].ui; Governance controls: third row / admin-path: The printed Entra Conditional Access creation path reaches Use Global Secure Access Security Profile. | Found: Set the Target resources to All internet resources with Global Secure Access. ... Under Session, select Use Global Secure Access Security Profile and select the security profile you created. | Fix: Use Identity > Protection > Conditional Access > + Create new policy > Target resources > All internet resources with Global Secure Access > Session > Use Global Secure Access Security Profile. The omitted resource-scope selection is a permissible abbreviation, not a wrong route. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
- [supported, minor] title; What's changing: first paragraph / behaviour: Microsoft Entra Internet Access is part of Global Secure Access. | Found: Global Secure Access is the unifying term used for both Microsoft Entra Internet Access and Microsoft Entra Private Access. | Fix: Add https://learn.microsoft.com/entra/global-secure-access/overview-what-is-global-secure-access to sources for this product relationship. | Source: https://learn.microsoft.com/entra/global-secure-access/overview-what-is-global-secure-access
- [contradicted, minor] Governance guidance compared with Governance controls / consistency: Every control the governance checklist asks administrators to check, set or monitor has a corresponding table row. | Found: Checklist: Internet Access forwarding profile; TLS inspection policy; link it to a security profile; Alerts and Activity explorer; GSA traffic logs. Table: Purview DLP policy; Entra content policy rule; security-profile user assignment. | Fix: Checklist/table coverage mismatch: the forwarding profile, TLS inspection policy, content-policy link to a security profile, Purview alerts/Activity explorer and GSA traffic logs have no corresponding table rows. Do not add rows as part of this correction.
-->
