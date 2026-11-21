---
title: "Microsoft Purview: network DLP policies for all websites through Entra Internet Access"
slug: "microsoft-purview-data-loss-prevention-apply-purview-network-data-security-dlp-policies-to"
roadmapId: 575285
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let network data security DLP policies cover all websites, or all except named cloud apps, through Entra Internet Access. Security and compliance admins decide scope; Microsoft has not stated the default."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn says network data security with Entra Global Secure Access requires Microsoft 365 E7 per-seat licences, or Purview E5 (or equivalent) per-seat licences and Entra Internet Access (or equivalent) licences. Users also need Entra ID P1 or P2 for Internet Access. No price for the new scope is published."
audiences: ["security","compliance","m365-admin"]
tags: ["dlp","network-data-security","global-secure-access","purview","entra-id","defender-for-cloud-apps","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 575285"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575285"
    kind: "roadmap"
  - title: "Learn about Microsoft Purview Network Data Security"
    url: "https://learn.microsoft.com/purview/dlp-network-data-security-learn"
    kind: "learn"
  - title: "Use Network Data Security to help prevent sharing sensitive information with unmanaged AI"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    kind: "learn"
  - title: "Create content policies for network content filtering"
    url: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    kind: "learn"
  - title: "What is Global Secure Access?"
    url: "https://learn.microsoft.com/entra/global-secure-access/overview-what-is-global-secure-access"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m","microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-558437","microsoft-purview-data-loss-prevention-expanded-inline-protection-for-unmanaged-apps-in-ed","microsoft-purview-endpoint-data-loss-prevention-extend-purview-data-security-to-the-networ"]
controls:
  - governs: "Which cloud apps and websites a network DLP policy covers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > app scope"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api: null
    note: "Documents today's choices (catalog apps, adaptive app scopes). The all-websites option is not yet documented."
  - governs: "Whether a DLP policy is enforced on network traffic"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > app scope > Choose where to enforce the policy > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -EnforcementPlanes @(\"Network\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "The cmdlet creates the policy; the reference lists Network as a valid value without describing it. Security & Compliance PowerShell."
  - governs: "Whether Global Secure Access sends content to Purview for inspection"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Global Secure Access > Secure > Content policies > + Create Policy > Rules"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api: null
    note: "Needs the Global Secure Access Administrator role. On Rules, add a new rule, then select Action > Scan with Purview. Learn's content policy page gives portal steps only."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-21"
    note: "New briefing: roadmap item 575285, Purview network DLP scoped to all websites through Entra Internet Access, with the documented network data security prerequisites and limits."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: default state is now unknown, the Entra Scan with Purview path ends at Rules with the rule step in the note, the Purview paths include the app scope step, and the checklist and licensing notes are narrowed to documented facts."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 61
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "587514c5047a81dbfed3bb48fc1a326b"
---

## What's changing

Microsoft plans to let administrators scope Microsoft Purview network data security data loss prevention (DLP) policies, integrated with Microsoft Entra Global Secure Access (GSA) Internet Access, to apply to all websites or to all websites except specific cloud apps. The roadmap item says this lets admins protect cloud apps and websites that are not in the Defender Cloud App Catalog.

Microsoft Learn does not describe the all-websites scope yet, so the paragraph above is the roadmap's description. What Learn documents today is the surrounding feature. Network data security DLP policies take their data sources from unmanaged cloud apps in the Microsoft Defender for Cloud Apps cloud app catalog (over 35,000 discoverable cloud apps) and from adaptive app scopes, which are categories such as generative AI, cloud storage, collaboration, social network and webmail. The policies support the Audit only and Block actions.

The roadmap item is In development, with a preview target of November CY2026 and a general availability target of December CY2026. It lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

Today a network DLP policy reaches a website because an administrator picked it from the catalog or from an adaptive app scope. A scope of all websites, with named exceptions, would turn that list into a default posture and widen the traffic the policy can audit or block. That is a policy-design decision for your security and compliance owners, not only for whoever runs Global Secure Access, because a GSA content policy and a Purview DLP policy both have to be in place.

Microsoft has not stated whether existing policies change scope on arrival; no source says existing behaviour changes. Use the preview window to settle licences and prerequisites, which Learn requires for network data security through GSA whatever the scope.

## Risk assessment

**Data exposure**
- The roadmap presents the new scope as the way to protect apps and websites outside the Defender Cloud App Catalog. Until it ships, Learn describes policy coverage in terms of catalog apps and adaptive app scopes.
- A wider scope does not remove Learn's documented inspection limits: Scan with Purview supports content up to 3 MB for files and text, OCR is not yet supported for traffic sent to Purview, and traffic that cannot be mapped to an Entra user identity is not sent to Purview. The network data security overview separately lists inline evaluation limits of 4 MB for uploadText and downloadText and 3 MB for uploadFile and downloadFile; the Entra content policy page gives 3 MB for both content types.
- Learn says Purview network data security policies don't apply to B2B guest users.

**Security & identity**
- Learn lists prerequisites for the GSA integration: an Entra ID joined device, a Transport Layer Security (TLS) inspection policy and a GSA Internet Access content policy. A site only reaches Purview through that chain, so an all-websites DLP policy does nothing for devices outside it.
- Two role sets are involved: Global Secure Access Administrator for the content policy, and a Purview role such as DLP Compliance Management or Information Protection Admin for the DLP policy.

**Autonomy & actions**
- The documented actions are Audit only and Block. A Block rule over a broad scope can stop uploads to sites the business relies on, so start with Audit only, or with simulation mode, which Learn offers when you choose the policy mode.
- When Purview inspection cannot complete, Learn says the traffic is allowed (fail-open), so a Block rule is not a guarantee that every transfer is stopped.

**Change & support**
- Learn says to allow up to 24 hours after configuring the integration for policies to reach the network security solution and for the first data to appear.
- To investigate a user report, filter Activity explorer for the network enforcement plane and check the GSA traffic logs for the PurviewStatus field, which identifies transactions that skipped inspection.
- The DLP walkthrough on Learn notes that some features used in the scenario are in preview, and the roadmap item lists both Preview and General Availability phases.

## Cost and licensing

Learn says network data security with Microsoft Entra Global Secure Access requires one of two licence combinations: Microsoft 365 E7 per-seat licences, or Purview E5 (or equivalent) per-seat licences together with Entra Internet Access (or equivalent) licences. The Global Secure Access licensing overview also says users need a Microsoft Entra ID P1 or Microsoft Entra ID P2 licence to use Microsoft Entra Internet Access. The same Purview page says pay-as-you-go does not have to be set up for the GSA integration; it is required for the non-Microsoft SASE and secure browser integrations.

The GSA content policy page lists a valid Microsoft Entra Internet Access licence and a valid Microsoft Purview licence for Scan with Purview inspection. Another note on that page says that if Data loss prevention is missing from the Purview portal you may need a Microsoft 365 E5/A5 subscription or a Microsoft Purview DLP add-on.

A price, meter or licence rule specific to the all-websites scope is not yet published. Indirect costs are admin time to run the policy in audit or simulation first, and a possible rise in alert volume for the DLP team, which depends on the scope you choose.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, with Preview and General Availability phases, and targets of November CY2026 for preview and December CY2026 for general availability.

Learn places the following prerequisites on the GSA integration: the device must be Entra ID joined (the DLP walkthrough) or Microsoft Entra ID joined or hybrid joined (the content policy page); a TLS inspection policy; the Internet Access traffic forwarding profile enabled; and the Global Secure Access client on Windows or macOS. Scan with Purview applies to traffic mapped to an Entra user identity, and Purview network data security policies don't apply to B2B guest users.

## Governance guidance

### Before rollout
- Confirm which licence route you hold, Microsoft 365 E7 or Purview E5 plus Entra Internet Access, and take the answer to your licensing owner before preview testing.
- Plan a test environment that meets the documented GSA prerequisites.
- Assign a Global Secure Access Administrator for the content policy and a Purview DLP role holder for the DLP policy, so one team can finish both halves.
- List the websites and cloud apps users legitimately send data to, so you know which exceptions you would want if the all-websites scope offers them.

### At rollout
- Create the Inline web traffic DLP policy in the Microsoft Purview portal and enable Network and non-Microsoft secure browsers, as the Learn walkthrough shows; the new scope option itself is not yet documented.
- Create or edit the Entra content policy rule with the Scan with Purview action, and match its activities to the actions in the DLP rule.
- Pilot the policy before broader deployment.

### After rollout
- Investigate user reports with the documented Purview and GSA monitoring tools.
- Re-read the Learn page for network data security policies when the preview starts, and update your scope and exceptions to match what it documents.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which cloud apps and websites a network DLP policy covers</strong><br><small>Tenant</small><br><small class="controls__note">Documents today's choices (catalog apps, adaptive app scopes). The all-websites option is not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › + Add cloud apps › Adaptive app scopes › app scope <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP policy is enforced on network traffic</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet creates the policy; the reference lists Network as a valid value without describing it. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › + Add cloud apps › Adaptive app scopes › app scope › Choose where to enforce the policy › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -EnforcementPlanes @(&quot;Network&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Global Secure Access sends content to Purview for inspection</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Global Secure Access Administrator role. On Rules, add a new rule, then select Action &gt; Scan with Purview. Learn's content policy page gives portal steps only.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Global Secure Access › Secure › Content policies › + Create Policy › Rules <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The DLP policy in Purview and the content policy in Entra are separate objects. Learn says that without a matching Purview DLP policy, the content policy cannot inspect selected file or text content or enforce audit or block decisions, so check both. The Entra steps need the Global Secure Access Administrator role; Conditional Access changes need the Conditional Access Administrator role.

The cmdlet reference lists Network as a value of -EnforcementPlanes but does not describe it, so confirm the value in a test tenant. Microsoft Learn documents no parameter for choosing cloud apps in a network policy at the time of writing (November 2026), and its content policy page gives portal steps only.

## Open questions

- How will the all-websites scope and its exceptions appear in the Add cloud apps picker, and how are exceptions chosen? Watch the Learn page on creating a DLP policy with network data security and Message center.
- Will existing Inline web traffic policies change scope on arrival, or only policies an administrator edits? The roadmap item does not say.
- Does the broader scope carry a price or meter of its own for GSA customers? No rate specific to the scope is published.
- Which parts of the all-websites scope are in preview, and do the documented limits (3 MB content size, no OCR, no B2B guests) apply unchanged?
- Will a PowerShell or Graph parameter set the cloud app scope of a network DLP policy?

<!-- rationale
risk: Medium. A network DLP policy scoped to all websites could audit or block traffic well beyond today's named apps, and Learn says inspection is fail-open and limited to traffic mapped to an Entra user.
cost: Medium. Network data security through Global Secure Access needs Microsoft 365 E7, or Purview E5 plus Entra Internet Access, per seat; no price specific to the new scope is published.
impact: Medium. Users whose traffic routes through the Global Secure Access client and falls in the policy scope notice blocks and alerts; admins in Purview and Entra do the configuring.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity, first bullet / applicability: A site only reaches Purview through the stated Entra ID joined device chain, so an all-websites DLP policy does nothing for devices outside it. | Found: The Global Secure Access client requires a device (or virtual machine) that is either Microsoft Entra ID joined or Microsoft Entra ID Hybrid joined. | Fix: Remove 'A site only reaches Purview through that chain, so an all-websites DLP policy does nothing for devices outside it.' Retain Scope's distinction between the walkthrough's Entra ID joined requirement and the content-policy page's joined-or-hybrid-joined requirement. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: The network data security overview says pay-as-you-go setup is not required for GSA integration. | Found: Pay-as-you-go is not required to be set up for integration with Microsoft Entra Global Secure Access. | Fix: Keep the GSA-specific statement, but add: 'The general Purview billing-models table also lists Network Data Security under pay-as-you-go without distinguishing integrations; the network data security overview explicitly exempts GSA from pay-as-you-go setup.' Cite https://learn.microsoft.com/purview/purview-billing-models. | Source: https://learn.microsoft.com/purview/dlp-network-data-security-learn
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview path shown reaches the adaptive app scope selection for a network DLP policy. | Found: Select Data loss prevention > Policies > + Create policy. ... Select Custom from the Categories list and then select Custom policy from the Regulations list. ... Select + Add cloud apps. Select the Adaptive app scopes tab, then choose All unmanaged AI apps | Fix: Expand controls[0].ui.path and its rendered row to 'Data loss prevention > Policies > + Create policy > Inline web traffic > Categories > Custom > Regulations > Custom policy > + Add cloud apps > Adaptive app scopes > app scope'. Categories and Regulations are omitted headings, not wrong choices. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance: At rollout / admin-path: The Purview path shown reaches Network and non-Microsoft secure browsers enforcement. | Found: Select Custom from the Categories list and then select Custom policy from the Regulations list. ... On the Choose where to enforce the policy page, ensure Network and non-Microsoft secure browsers is On | Fix: Expand controls[1].ui.path and its rendered row to 'Data loss prevention > Policies > + Create policy > Inline web traffic > Categories > Custom > Regulations > Custom policy > + Add cloud apps > Adaptive app scopes > app scope > Choose where to enforce the policy > Network and non-Microsoft secure browsers'. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [supported, minor] controls[2].ui; controls[2].note; Governance controls table; Governance guidance: At rollout / admin-path: The Entra path reaches the Rules page, where a new rule's Action can be set to Scan with Purview. | Found: Browse to Global Secure Access > Secure > Content policies. ... Select + Create Policy. ... On the Rules tab: Add a new rule. ... To use data policies configured in Microsoft Purview, select Scan with Purview. | Fix: Expand controls[2].ui.path and its rendered row to 'Global Secure Access > Secure > Content policies > + Create Policy > Basics > Rules > rule > Action > Scan with Purview'. Retain the note explaining that the rule is added on Rules. The current path stops on the correct page but not at the action. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist tells readers to investigate with Purview and GSA monitoring tools, but neither monitoring control appears in the controls table. | Found: After rollout: 'Investigate user reports with the documented Purview and GSA monitoring tools.' Controls table: app scope, network enforcement, and sending content for inspection only. | Fix: Remove the After rollout checklist bullet 'Investigate user reports with the documented Purview and GSA monitoring tools.' The verified monitoring advice can remain in Risk assessment; do not add control rows during this correction.
-->
