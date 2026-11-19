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
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta"
    kind: "learn"
  - title: "conditionalAccessSessionControls resource type"
    url: "https://learn.microsoft.com/graph/api/resources/conditionalaccesssessioncontrols?view=graph-rest-beta"
    kind: "learn"
  - title: "Configure Microsoft Entra Internet Access using Microsoft Graph APIs"
    url: "https://learn.microsoft.com/graph/tutorial-entra-internet-access"
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
      path: "Global Secure Access > Secure > Content policies > + Create Policy > Basics > Rules > rule > Action > Scan with Purview"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api: null
    note: "Requires the Global Secure Access Administrator role. Needs a matching Purview DLP policy. Learn documents no Graph operation for content policy rules at the time of writing (November 2026)."
  - governs: "Whether sensitive files and text sent to unmanaged cloud apps are audited or blocked (Inline web traffic DLP policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > Choose where to enforce the policy > Network and non-Microsoft secure browsers > Create or customize advanced DLP rules"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api: null
    note: "New-DlpCompliancePolicy accepts Network for EnforcementPlanes, but that parameter selects the enforcement layer, not the audit or block action. In the rule: Actions > + Add an action > Restrict browser and network activities."
  - governs: "Which users the Global Secure Access security profile applies to (Conditional Access)"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Protection > Conditional Access > + Create new policy > Session > Use Global Secure Access Security Profile"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api:
      kind: "graph"
      call: "POST /beta/identity/conditionalAccess/policies"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta"
    note: "Conditional Access Administrator role. Preview API; production use is not supported. The request body sets sessionControls.globalSecureAccessFilteringProfile.profileId and isEnabled; conditions.users scopes the users."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item, covering the Global Secure Access integration, licensing differences between sources and the three configuration points."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the Purview policy path to the audit or block setting, removed the policy-creation PowerShell call, moved the Conditional Access Graph call to the documented beta endpoint, and qualified DLP alerts."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the Purview policy path to include the enforcement-location and advanced-rules steps, and removed two After rollout checklist bullets that had no controls-table row."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the Purview policy path to include the Custom and Custom policy choices and the enforcement location, and added the Basics step to the Entra content policy path."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-19"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 92
  confirmed: 91
  unconfirmed: 0
  contradicted: 1
  attempts: 4
  hash: "9cad30f37bc139d6e193228ed63a1539"
---

## What's changing

Microsoft Purview data loss prevention (DLP) can now be applied to files and text in transit by integrating with Microsoft Entra Global Secure Access Internet Access. In an Entra content policy, a rule with the action **Scan with Purview** sends matching traffic to Purview; Purview evaluates it against a DLP policy, and Global Secure Access enforces the result. Learn describes the Purview actions as **Audit only** and **Block**.

On the Purview side, a new **Inline web traffic** policy scenario is used. Learn says the destinations can be unmanaged cloud apps from the Microsoft Defender for Cloud Apps catalogue (over 35,000 discoverable apps) or adaptive app scopes such as generative AI, cloud storage, collaboration, social network and webmail. The activities are text or files sent to, and received from, those apps. Matches appear in DLP alerts when alerts are configured, and in activity explorer, where events can be filtered by the enforcement plane *network*. Microsoft's notice MC1181769 says the feature is available by default but requires configuration to activate.

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
- Create a content policy rule with the action Scan with Purview.
- Create the Inline web traffic DLP policy in Purview with matching actions, and start in simulation mode before turning it on.
- Scope the Conditional Access policy to a pilot group first, using the Use Global Secure Access Security Profile session control.

### After rollout
- Retest after any change to an app's upload endpoints, because the content policy depends on the URLs and FQDNs you listed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which traffic is sent to Purview for inspection (content policy rule with Scan with Purview)</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Global Secure Access Administrator role. Needs a matching Purview DLP policy. Learn documents no Graph operation for content policy rules at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Global Secure Access › Secure › Content policies › + Create Policy › Basics › Rules › rule › Action › Scan with Purview <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether sensitive files and text sent to unmanaged cloud apps are audited or blocked (Inline web traffic DLP policy)</strong><br><small>Tenant</small><br><small class="controls__note">New-DlpCompliancePolicy accepts Network for EnforcementPlanes, but that parameter selects the enforcement layer, not the audit or block action. In the rule: Actions &gt; + Add an action &gt; Restrict browser and network activities.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › Choose where to enforce the policy › Network and non-Microsoft secure browsers › Create or customize advanced DLP rules <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users the Global Secure Access security profile applies to (Conditional Access)</strong><br><small>User</small><br><small class="controls__note">Conditional Access Administrator role. Preview API; production use is not supported. The request body sets sessionControls.globalSecureAccessFilteringProfile.profileId and isEnabled; conditions.users scopes the users.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Protection › Conditional Access › + Create new policy › Session › Use Global Secure Access Security Profile <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/identity/conditionalAccess/policies</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All three rows are needed for enforcement: the content policy chooses what is sent to Purview, the Purview policy decides audit or block, and Conditional Access applies the security profile to users. The Purview policy page describes selecting **Network and non-Microsoft secure browsers** as the enforcement location and **Restrict browser and network activities** as the rule action.

The TLS inspection policy and the Internet Access traffic forwarding profile are prerequisites on the Learn page and are set up on their own Global Secure Access pages, which the content policy page links to. Troubleshooting and review use Purview DLP alerts, activity explorer and the Global Secure Access traffic logs.

## Open questions

- Does the pay-as-you-go activation step in MC1181769 apply to the Global Secure Access integration, given that Learn says it is not required? Watch the notice and the Purview billing models page.
- Which licence statement applies to a tenant: E3 or E5 (the notice), E7 or Purview E5 plus Entra Internet Access (Learn), or E5/A5 or a DLP add-on (the content policy page)?
- Which parts of the DLP policy scenario are still preview now that the roadmap shows the item as Launched, as the scenario page still says some features in it are in preview?
- Is the inline text limit 3 MB (content policy page) or 4 MB (network data security page)?
- Will Microsoft document a Microsoft Graph operation for content policy rules? Watch the Global Secure Access Graph reference.

<!-- rationale
risk: Low. Microsoft's notice says the feature is available by default but needs configuration to activate, so an untouched tenant sees no change; once configured, inspection can fail open and leave gaps.
cost: Medium. Learn lists Microsoft 365 E7, or Purview E5 plus Entra Internet Access licences, for the Global Secure Access integration; admin time in two portals comes on top.
impact: Medium. Only users routed through Internet Access and covered by a Conditional Access policy are affected, but those users can see uploads blocked to AI and file-sharing sites.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; controls[1].note; Governance controls: second row / admin-path: The printed Purview route reaches the audit or block control, with its remaining action steps supplied by the row note. | Found: Select Create or customize advanced DLP rules and select Next. Select + Create rule and configure the rule: ... Under Actions, select + Add an action > Restrict browser and network activities. | Fix: Replace controls[1].ui.path with 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > Choose where to enforce the policy > Network and non-Microsoft secure browsers > Create or customize advanced DLP rules > + Create rule > Actions > + Add an action > Restrict browser and network activities'. Keep the note explaining that the relevant activities are set to Audit or Block there. The cited page documents the missing + Create rule step between the printed path and the note's action steps. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
-->
