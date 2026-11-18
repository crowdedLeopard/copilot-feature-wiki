---
title: "Microsoft Purview: DLP for network traffic through Entra Global Secure Access Internet Access"
slug: "microsoft-purview-integration-with-entra-gsa-internet-access-to-enable-sensitive-file-filt"
roadmapId: 522096
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP policies can inspect and block sensitive files and text sent to unmanaged cloud and AI apps through Entra Global Secure Access. It needs configuration in both portals and add-on licences; nothing changes until then."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn: Microsoft 365 E7, or Purview E5 (or equivalent) plus Entra Internet Access (or equivalent) licences. Microsoft's notice names E3 or E5 tenants and pay-as-you-go; Learn says pay-as-you-go is not required for this integration."
audiences: ["security","compliance","m365-admin","finops"]
tags: ["purview","dlp","global-secure-access","network-data-security","conditional-access","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap 522096"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=522096"
    kind: "roadmap"
  - title: "MC1181769: Microsoft Purview: Integration with Entra GSA Internet Access to enable sensitive file filtering at the network layer"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1181769"
    kind: "message-center"
  - title: "Create content policies for network content filtering"
    url: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    kind: "learn"
  - title: "Learn about Microsoft Purview Network Data Security"
    url: "https://learn.microsoft.com/purview/dlp-network-data-security-learn"
    kind: "learn"
  - title: "Use Network Data Security to help prevent sharing sensitive information with unmanaged AI"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    kind: "learn"
  - title: "What is Global Secure Access?"
    url: "https://learn.microsoft.com/entra/global-secure-access/overview-what-is-global-secure-access"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Create conditionalAccessPolicy"
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-1.0"
    kind: "learn"
  - title: "filteringRule resource type"
    url: "https://learn.microsoft.com/graph/api/resources/networkaccess-filteringrule?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Which traffic is sent to Purview for inspection (content policy rule with Scan with Purview)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Global Secure Access > Secure > Content policies > + Create Policy > Rules > rule > Action > Scan with Purview"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api: null
    note: "Requires the Global Secure Access Administrator role. Needs a matching Purview DLP policy. Learn documents no Graph operation for content policy rules at the time of writing (November 2026)."
  - governs: "Whether sensitive files and text sent to unmanaged cloud apps are audited or blocked (Inline web traffic DLP policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -EnforcementPlanes @(\"Network\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Security & Compliance PowerShell. The reference lists Network as an EnforcementPlanes value without describing it; confirm it targets this scenario. Rule action: Restrict browser and network activities."
  - governs: "Which users the Global Secure Access security profile applies to (Conditional Access)"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Protection > Conditional Access > + Create new policy > Session > Use Global Secure Access Security Profile"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api:
      kind: "graph"
      call: "POST /v1.0/identity/conditionalAccess/policies"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-1.0"
    note: "Requires the Conditional Access Administrator role. The Graph operation creates any Conditional Access policy; the Learn feature page gives the security profile session control only in the portal."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item, covering the Global Secure Access integration, licensing differences between sources and the three configuration points."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 79
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "a2d5f11a95acb328324eeda0d1b21466"
---

## What's changing

Microsoft Purview data loss prevention (DLP) can now be applied to files and text in transit by integrating with Microsoft Entra Global Secure Access Internet Access. In an Entra content policy, a rule with the action **Scan with Purview** sends matching traffic to Purview; Purview evaluates it against a DLP policy, and Global Secure Access enforces the result. Learn describes the Purview actions as **Audit only** and **Block**.

On the Purview side, a new **Inline web traffic** policy scenario is used. Learn says the destinations can be unmanaged cloud apps from the Microsoft Defender for Cloud Apps catalogue (over 35,000 discoverable apps) or adaptive app scopes such as generative AI, cloud storage, collaboration, social network and webmail. The activities are text or files sent to, and received from, those apps. Matches appear in DLP alerts and in activity explorer, where events can be filtered by the enforcement plane *network*. Microsoft's notice MC1181769 says the feature is available by default but requires configuration to activate.

The roadmap record shows status Launched, with a target of September CY2026, a preview date of November CY2025 and release phases General Availability and Preview. MC1181769 (updated 11 September 2026) says general availability rollout begins at the end of September and completes by the end of October 2026, previously the end of September. It sets no act-by date. One Learn page for the DLP policy scenario still says some features in it are in preview.

## Why it matters

This gives security and compliance teams a control point on traffic to generative AI and file-sharing sites that is separate from the browser or app a person chooses. The wiki's view is that its value depends on both halves being configured: Learn says a content policy using Scan with Purview cannot inspect or enforce without a matching Purview DLP policy that targets inline web traffic.

If nobody acts, the notice says activation needs configuration, so expect no new blocking. Plan for the work to span the Global Secure Access administrator, the Conditional Access administrator and the Purview DLP team, and for the licences to be settled before anyone is scoped in.

## Risk assessment

**Data exposure**
- Matching file and text content is forwarded from Global Secure Access to Purview for inspection, and the notice lists this as altering how existing customer data is processed. Scope content policy destinations to the apps you intend to cover.
- Inspection has documented gaps: Learn gives a 3 MB limit for files and says OCR is not yet supported, and it says files encoded within JSON or split across encrypted requests may escape inspection. The two Learn pages give different text limits (3 MB and 4 MB), so test your own cases.
- Learn says that when Purview inspection cannot complete, for example a payload too large or an internal error, traffic is allowed (fail-open). The **PurviewStatus** field in the traffic logs identifies those transactions.

**Security & identity**
- Learn says Scan with Purview applies only to traffic associated with an Entra user identity, and that Purview network data security policies do not apply to B2B guest users. Traffic that cannot be mapped to a user is not sent to Purview.
- Learn requires TLS inspection and the Global Secure Access client on Windows or macOS, on a device that is Microsoft Entra ID joined or hybrid joined. QUIC (UDP) is not supported, so traffic falls back to TCP where the site allows it.

**Autonomy & actions**
- With the Block action, Global Secure Access stops the matched upload or text. Learn offers simulation mode on the DLP policy and shows a blocked ChatGPT upload as an error to the user.
- Learn cautions that blocking HTML or JSON text types in a basic content rule can block normal web and API traffic, and says requests are rate limited and traffic is blocked (fail-closed) when limits are exceeded.

**Change & support**
- Two portals must agree: Learn says the actions in the Purview rule should match the activities and content types in the content policy. Expect helpdesk questions when a mismatch lets traffic through or an upload fails.
- Learn says policies can take up to 24 hours to reach the network solution after the integration is configured, and up to 30 minutes for data on a request to appear in the audit log and activity explorer.

## Cost and licensing

**Licence.** Learn's network data security page says the Global Secure Access integration requires one of two combinations: Microsoft 365 E7 per-seat licences, or Purview E5 (or equivalent) per-seat licences and Entra Internet Access (or equivalent) licences. The Global Secure Access overview says Entra Internet Access is included in the Microsoft Entra Suite licence and sold standalone, that users need Microsoft Entra ID P1 or P2, and that most Global Secure Access services use a per-user model. The content policy page lists a valid Entra Internet Access licence and a valid Purview licence for Scan with Purview, and says basic content filtering works without a Purview licence.

**Differences between sources.** Microsoft's notice says affected tenants have Microsoft 365 E3 or E5 licences, while the DLP note on the content policy page mentions a Microsoft 365 E5/A5 subscription or a Microsoft Purview DLP add-on. Quote the Learn network data security page in a budget request and confirm the rest with Microsoft.

**Pay-as-you-go.** The notice says a global admin must activate Purview pay-as-you-go and that no charges apply during public preview. Learn says pay-as-you-go is not required for the Global Secure Access integration, and ties its request-based meter to non-Microsoft SASE and secure browser integrations. Treat this as an open question.

**Indirect costs.** Time for the Global Secure Access, Conditional Access and Purview administrators, client deployment and TLS inspection set-up. The Global Secure Access overview points to Microsoft Entra Plans & Pricing for licence costs; no price is quoted here.

## Scope

**Who is affected.** Users covered by the Internet Access traffic forwarding profile and by a Conditional Access policy that applies the Global Secure Access security profile. Learn says network content filtering is supported with the Internet access profile only. The notice names Microsoft 365 tenants with E3 or E5 licences and the admins who manage Purview DLP and Entra Global Secure Access.

**Roles.** Learn lists the Global Secure Access Administrator role for Global Secure Access settings and the Conditional Access Administrator role for Conditional Access policies. For Purview DLP it names a role such as DLP Compliance Management or Information Protection Admin.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn requires the Global Secure Access client on Windows or macOS.

**Prerequisites.** Per Learn: the Internet Access traffic profile with correct user assignments, a TLS inspection policy, a content policy, a security profile linked to a Conditional Access policy, and a matching Inline web traffic DLP policy in Purview.

## Governance guidance

### Before rollout
- Confirm the licence position for the in-scope users against the Learn network data security page, and ask Microsoft whether the pay-as-you-go step in MC1181769 applies to you.
- Assign the Global Secure Access Administrator, Conditional Access Administrator and a Purview DLP role to named people before work starts.
- Inventory which AI and file-sharing apps and which user groups you intend to cover, and list the URLs and FQDNs each app uses for uploads.
- Check that target devices are Microsoft Entra ID joined or hybrid joined and run the Global Secure Access client on Windows or macOS.

### At rollout
- Enable the Internet Access traffic profile and TLS inspection, then create a content policy rule with the action Scan with Purview and link it to a security profile.
- Create the Inline web traffic DLP policy in Purview with matching actions, and start in simulation mode before turning it on.
- Scope the Conditional Access policy to a pilot group first, using the Use Global Secure Access Security Profile session control.

### After rollout
- Review DLP alerts and activity explorer in the Microsoft Purview portal for matches, filtering for network activities.
- Check the Global Secure Access traffic logs for the **PurviewStatus** field to find transactions that skipped inspection.
- Retest after any change to an app's upload endpoints, because the content policy depends on the URLs and FQDNs you listed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which traffic is sent to Purview for inspection (content policy rule with Scan with Purview)</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Global Secure Access Administrator role. Needs a matching Purview DLP policy. Learn documents no Graph operation for content policy rules at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Global Secure Access › Secure › Content policies › + Create Policy › Rules › rule › Action › Scan with Purview <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether sensitive files and text sent to unmanaged cloud apps are audited or blocked (Inline web traffic DLP policy)</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The reference lists Network as an EnforcementPlanes value without describing it; confirm it targets this scenario. Rule action: Restrict browser and network activities.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -EnforcementPlanes @(&quot;Network&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users the Global Secure Access security profile applies to (Conditional Access)</strong><br><small>User</small><br><small class="controls__note">Requires the Conditional Access Administrator role. The Graph operation creates any Conditional Access policy; the Learn feature page gives the security profile session control only in the portal.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Protection › Conditional Access › + Create new policy › Session › Use Global Secure Access Security Profile <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/identity/conditionalAccess/policies</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All three rows are needed for enforcement: the content policy chooses what is sent to Purview, the Purview policy decides audit or block, and Conditional Access applies the security profile to users. The Purview policy page describes selecting **Network and non-Microsoft secure browsers** as the enforcement location and **Restrict browser and network activities** as the rule action.

The TLS inspection policy and the Internet Access traffic forwarding profile are prerequisites on the Learn page and are set up on their own Global Secure Access pages, which the content policy page links to. Troubleshooting and review use Purview DLP alerts, activity explorer and the Global Secure Access traffic logs.

## Open questions

- Does the pay-as-you-go activation step in MC1181769 apply to the Global Secure Access integration, given that Learn says it is not required? Watch the notice and the Purview billing models page.
- Which licence statement applies to a tenant: E3 or E5 (the notice), E7 or Purview E5 plus Entra Internet Access (Learn), or E5/A5 or a DLP add-on (the content policy page)?
- Which parts of the DLP policy scenario are still preview now that the roadmap shows the item as Launched, as the scenario page still says some features are in preview?
- Is the inline text limit 3 MB (content policy page) or 4 MB (network data security page)?
- Will Microsoft document a Microsoft Graph operation for content policy rules? Watch the Global Secure Access Graph reference.

<!-- rationale
risk: Low. Microsoft's notice says the feature is available by default but needs configuration to activate, so an untouched tenant sees no change; once configured, inspection can fail open and leave gaps.
cost: Medium. Learn lists Microsoft 365 E7, or Purview E5 plus Entra Internet Access licences, for the Global Secure Access integration; admin time in two portals comes on top.
impact: Medium. Only users routed through Internet Access and covered by a Conditional Access policy are affected, but those users can see uploads blocked to AI and file-sharing sites.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls: second row / admin-path: The printed Purview path ending at Network and non-Microsoft secure browsers reaches the control deciding whether sensitive transfers are audited or blocked. | Found: Under Actions, select + Add an action > Restrict browser and network activities. Select the actions that match your content policy scenario and set each action to Audit or Block as appropriate: | Fix: Extend controls[1].ui.path and the rendered row to 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > app categories > Choose where to enforce the policy > Network and non-Microsoft secure browsers > Create or customize advanced DLP rules > + Create rule > Actions > + Add an action > Restrict browser and network activities > activity > Audit or Block', following https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering. The existing final step only enables the enforcement location; it does not select audit or block. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
- [contradicted, blocker] controls[1].api; controls[1].note; Governance controls: second row / command: New-DlpCompliancePolicy -EnforcementPlanes @("Network") sets whether sensitive files and text are audited or blocked. | Found: Use the New-DlpCompliancePolicy cmdlet to create data loss prevention (DLP) policies in the Microsoft Purview compliance portal. DLP policies contain DLP rules that identify, monitor, and protect sensitive information. | Fix: Remove this policy-creation call from controls[1].api and its rendered automation cell, setting the side to null. Replace the automation portion of the note with 'The New-DlpCompliancePolicy reference accepts Network for EnforcementPlanes, but that parameter selects the enforcement layer and does not configure the audit or block rule action.' Retain 'Rule action: Restrict browser and network activities.' The rule reference found by searching, https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps, describes rules as defining actions; no scenario-specific rule-action syntax was established by the search. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps
- [contradicted, blocker] controls[2].api; controls[2].note; Governance controls: third row / command: POST /v1.0/identity/conditionalAccess/policies can configure which users receive the Global Secure Access security profile. | Found: APIs under the /beta version in Microsoft Graph are subject to change. globalSecureAccessFilteringProfile | globalSecureAccessFilteringProfileSessionControl | Session control to link to Global Secure Access security profiles or filtering profiles. | Fix: Replace the call with 'POST /beta/identity/conditionalAccess/policies' and docs with 'https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta'. Replace the Graph portion of the note with 'Preview API; production use is not supported. The request body sets sessionControls.globalSecureAccessFilteringProfile.profileId and isEnabled; conditions.users scopes the users.' Add https://learn.microsoft.com/graph/tutorial-entra-internet-access and https://learn.microsoft.com/graph/api/resources/conditionalaccesssessioncontrols?view=graph-rest-beta to sources. The tutorial's Step 3 explicitly demonstrates this beta operation; the v1.0 session-controls reference has no globalSecureAccessFilteringProfile property. | Source: https://learn.microsoft.com/graph/api/resources/conditionalaccesssessioncontrols?view=graph-rest-beta
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: After rollout / behaviour: Policy matches appear in DLP alerts. | Found: If a data loss prevention policy is matched, and you have configured alerts, they will be available in DLP alerts. | Fix: Qualify the sentence as 'Matches appear in DLP alerts when alerts are configured, and in activity explorer.' The cited network data security page makes alert generation conditional on configuration. | Source: https://learn.microsoft.com/purview/dlp-network-data-security-learn
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: Every control the rollout checklist tells the reader to configure has a controls-table row. | Found: Enable the Internet Access traffic profile and TLS inspection, then create a content policy rule with the action Scan with Purview and link it to a security profile. | The table has only content policy inspection, Inline web traffic DLP, and Conditional Access rows. | Fix: The first At rollout bullet instructs readers to enable the Internet Access traffic profile, configure TLS inspection and link a content policy to a security profile, without corresponding table rows. Narrow that bullet to 'Create a content policy rule with the action Scan with Purview.' Keep the existing prerequisite descriptions elsewhere; this correction does not require adding rows.
-->
