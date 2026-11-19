---
title: "Microsoft Purview: DLP for file and text traffic through Entra Global Secure Access Internet Access"
slug: "microsoft-purview-integration-with-entra-gsa-internet-access-to-enable-sensitive-file-filt"
roadmapId: 522096
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP gains an Inline web traffic policy that inspects files and text sent to unmanaged cloud apps through Entra Global Secure Access. Nothing is enforced until admins configure both sides, and licences are required."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn says network data security with Entra Global Secure Access requires Microsoft 365 E7 per-seat licences, or Purview E5 (or equivalent) per-seat licences and Entra Internet Access (or equivalent) licences. A price for either is not stated on that page."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","network-data-security","global-secure-access","conditional-access","pay-as-you-go","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap item 522096"
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
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m","sensitivity-labels","auditing"]
controls:
  - governs: "Which Purview DLP policy inspects and acts on network traffic"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > Choose where to enforce the policy > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -EnforcementPlanes @(\"Network\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Security & Compliance PowerShell. The portal steps then add a rule with Content contains conditions and the Restrict browser and network activities action, set to Audit or Block."
  - governs: "Which traffic Global Secure Access sends to Purview for inspection"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Global Secure Access > Secure > Content policies > + Create Policy > Rules > Action > Scan with Purview"
      docs: "https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering"
    api: null
    note: "Needs the Global Secure Access Administrator role. The rule is linked to a security profile and then to a Conditional Access policy."
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
  - date: "2026-11-19"
    note: "First briefing: covers the two-sided setup, the licence combinations Learn lists, the pay-as-you-go conflict between notice and Learn, and the inspection gaps."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-19"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 79
  unconfirmed: 0
  contradicted: 3
  attempts: 5
  hash: "8d68f405dfd89e7c781b1198c9e5f48d"
---

## What's changing

Purview Data Loss Prevention (DLP) can now run as an **Inline web traffic** policy that acts on files and text leaving the network for unmanaged cloud apps. The traffic is routed through Microsoft Entra Global Secure Access Internet Access, which sends matching content to Purview for inspection. Microsoft's notice MC1181769 describes it as a way to stop sensitive files reaching untrusted cloud apps, including generative AI platforms, cloud storage and content-sharing services, through browsers, apps, APIs and add-ins, with alerts and incidents managed in Purview and Microsoft Defender.

The feature has two halves. In the Microsoft Entra admin center, a Global Secure Access administrator creates a content policy rule whose action is **Scan with Purview**, links the policy to a security profile and attaches that profile to a Conditional Access policy. In the Microsoft Purview portal, a matching DLP policy decides whether to audit or block. Learn states that without a matching Purview DLP policy the content policy cannot inspect content or enforce audit or block decisions. The notice says admins can target more than 35,000 unmanaged cloud apps, and Learn lists four activities: text sent, text received, file uploaded and file downloaded, each set to **Audit** or **Block**.

The roadmap record shows status Launched, with a General Availability target of September CY2026 and a preview date of November CY2025; its description says the GA release has moved. Microsoft's notice, last updated 2026-09-11, gives a public preview rollout from mid-November 2025 to mid-December 2025 and a general availability rollout beginning at the end of September and completing by the end of October 2026 (previously the end of September). The notice's end date is 2026-11-30 and it sets no act-by date. Learn's Purview scenario article for network data security still carries the note that some features it uses are in preview, so confirm in your tenant which parts are generally available.

## Why it matters

This closes a gap that endpoint and Microsoft 365 DLP do not reach: files and text sent from managed devices to apps the organisation has not sanctioned. The notice says the feature is available by default but needs configuration to activate, so nothing is enforced until both the Global Secure Access rule and the Purview policy exist. If nobody acts, existing behaviour continues and uploads to unmanaged apps stay as open as they are today.

The work spans two teams that often sit apart, the network or identity team that owns Global Secure Access and the compliance team that owns DLP. It also depends on TLS inspection, a licence combination and a Conditional Access policy, so plan the joint owner and licences before piloting.

## Risk assessment

**Data exposure**

- Until a Scan with Purview rule and a matching Inline web traffic DLP policy both exist, sensitive files and text can still reach unmanaged apps; Learn says the content policy cannot enforce audit or block decisions without the DLP policy.
- Learn lists limits that leave content uninspected: the maximum content size for Scan with Purview is 3 MB for files and text, OCR is not yet supported, and WebSocket traffic bypasses file-type filtering although text types are still evaluated.
- Learn says file detection is limited to files sent as unencoded or multipart request and response bodies, so an app that encodes a file inside JSON or splits it across encrypted requests may not be inspected.
- Traffic is allowed (fail-open) where Purview inspection cannot complete; Learn says such transactions can be found in Traffic logs using the PurviewStatus field.

**Security & identity**

- Scan with Purview applies only to traffic that can be mapped to an Entra user identity; Learn says other traffic is not sent to Purview. Learn also says network data security policies do not apply to B2B guest users.
- Enforcement relies on the Conditional Access policy that carries the Global Secure Access security profile, so users outside that policy's scope are not covered.
- Learn says the Global Secure Access client runs on Windows or macOS and requires an Entra ID joined or hybrid joined device.

**Autonomy & actions**

- A **Block** action stops the matched upload or download for the user; Learn's network data security page lists Audit only and Block as the supported actions.
- Learn says requests are subject to API rate limiting, and traffic is blocked (fail-closed) when limits are exceeded.

**Change & support**

- A blocked upload will reach the helpdesk. Learn cautions that blocking HTML or JSON text types in a basic content rule can block normal web and API traffic.
- Learn says to allow up to 24 hours for policies to reach the network security solution and for the first data to appear, so test results may lag.

## Cost and licensing

Learn's network data security page says integration with Microsoft Entra Global Secure Access requires one of two licence combinations: Microsoft 365 E7 per-seat licences, or Purview E5 (or equivalent) per-seat licences and Entra Internet Access (or equivalent) licences. The Global Secure Access content policy page also lists a valid Microsoft Entra Internet Access licence and a valid Microsoft Purview licence, required for Scan with Purview inspection, as prerequisites. Basic content filtering that does not use Purview needs no Purview licence.

Pay-as-you-go is a conflict between sources. Microsoft's notice MC1181769 says a global admin must activate Purview pay-as-you-go to enable the capability and that no charges apply during public preview. Learn's network data security page says pay-as-you-go is not required for the Global Secure Access integration, and that its request-based pay-as-you-go billing applies to non-Microsoft SASE and secure browser integrations. Confirm in your tenant before budgeting for either.

The notice describes affected tenants as Microsoft 365 E3 or E5; Learn's licence combinations above are the more specific statement. A price for Entra Internet Access or for Purview E5 is not stated on those pages. Admin time for TLS inspection, rule design and testing is the other cost.

## Scope

**Who is covered.** Users whose traffic is mapped to an Entra identity and routed through Global Secure Access Internet Access under the Conditional Access policy that carries the security profile. Learn says B2B guest users are not covered by network data security policies.

**Roles.** Learn lists the Global Secure Access Administrator role to configure Global Secure Access settings and the Conditional Access Administrator role for Conditional Access policies. In Purview, it says you need a role such as DLP Compliance Management or Information Protection Admin, and a Microsoft 365 E5/A5 subscription or a Microsoft Purview DLP add-on.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the platform Web. Learn says the Global Secure Access client installs on Windows or macOS, and that the Internet Access traffic forwarding profile and a TLS inspection policy must be configured first.

**Rollout.** The roadmap status is Launched; the notice gives the general availability rollout as end of September to end of October 2026.

## Governance guidance

### Before rollout

- Assign an owner in each of security and network teams, and confirm the Global Secure Access Administrator, Conditional Access Administrator and DLP Compliance Management (or Information Protection Admin) roles are held by the right people.
- Confirm licences against Learn's two combinations (Microsoft 365 E7, or Purview E5 plus Entra Internet Access) for the pilot users, and ask your Microsoft account team whether pay-as-you-go activation applies, given the notice and Learn differ.
- Enable the Internet Access traffic forwarding profile, check user assignments and configure a TLS inspection policy before any content rule is created.
- Choose pilot apps and the Purview sensitivity labels or sensitive information types to match, and list the file and text activities you want to audit first.

### At rollout

- Create the Inline web traffic DLP policy with **Network and non-Microsoft secure browsers** enabled, and run it in simulation mode or with the action set to **Audit** before using **Block**.
- Create a Global Secure Access content policy with a **Scan with Purview** rule whose activities and content types match the DLP rule's actions, link it to a security profile and attach the profile to a Conditional Access policy for the pilot group.
- Validate each activity you rely on with a test file or text, and confirm the result in Traffic logs and in Purview.
- Tell the helpdesk which upload and download blocks to expect and what the user sees.

### After rollout

- Review Purview **Data loss prevention > Alerts** and Activity explorer for the Network DLP activities filter, and Global Secure Access Traffic logs for transactions with a PurviewStatus showing skipped inspection.
- Widen the user group and app scope in steps, and switch audit rules to block only after reviewing false positives.
- Recheck the notice and Learn for the pay-as-you-go position and the GA rollout status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Purview DLP policy inspects and acts on network traffic</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The portal steps then add a rule with Content contains conditions and the Restrict browser and network activities action, set to Audit or Block.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › Choose where to enforce the policy › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -EnforcementPlanes @(&quot;Network&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which traffic Global Secure Access sends to Purview for inspection</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Global Secure Access Administrator role. The rule is linked to a security profile and then to a Conditional Access policy.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Global Secure Access › Secure › Content policies › + Create Policy › Rules › Action › Scan with Purview <a href="https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both sides must be configured. A **Scan with Purview** rule has no effect on content without a matching Inline web traffic DLP policy, and a DLP policy has nothing to inspect until Global Secure Access routes traffic to it. Learn says the actions in the Purview rule should match the content types and activities in the Global Secure Access content policy.

The content policy takes effect through a security profile linked in **Global Secure Access > Secure > Security profiles** and a Conditional Access policy that sets **Use Global Secure Access Security Profile** under Session. Those steps are described on the same Learn page and need the Global Secure Access Administrator and Conditional Access Administrator roles respectively.

Learn says Purview alerts and Activity explorer apply only when Scan with Purview is used; a basic Allow or Block content policy is reviewed in Global Secure Access traffic logs instead.

## Open questions

- Does pay-as-you-go activation apply to the Global Secure Access integration? Microsoft's notice MC1181769 says a global admin must activate it, while Learn's network data security page says it is not required; watch the notice and that page.
- Which licences apply to tenants that hold only Microsoft 365 E3 or E5? The notice names E3 or E5, while Learn names Microsoft 365 E7 or Purview E5 plus Entra Internet Access.
- Is every part of the feature now generally available? The roadmap record says Launched, the notice gives a general availability rollout ending by the end of October 2026, and Learn's Purview scenario article still carries a preview note.
- Will Microsoft document a Microsoft Graph operation for Global Secure Access content policies, so rules can be scripted alongside the DLP policy?

<!-- rationale
risk: Medium. Microsoft's notice says the feature needs configuration to activate, so uploads to unmanaged apps stay uncontrolled until then, and Learn lists gaps once active: traffic that cannot be mapped to an Entra user, and inspection that fails open.
cost: Medium. Learn requires Microsoft 365 E7, or Purview E5 plus Entra Internet Access licences, for the Global Secure Access route; notice MC1181769 also asks a global admin to activate Purview pay-as-you-go, which Learn says is not required.
impact: Low. Security, compliance and network administrators do the setup; end users notice only if a rule blocks an upload or download for the users and apps in scope.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: first sentence / applicability: Endpoint and Microsoft 365 DLP do not reach files and text sent from managed devices to unsanctioned apps. | Found: This scenario demonstrates how to restrict unintentional sharing of sensitive information to unapproved cloud applications and services using Microsoft Purview DLP. | Fix: Replace the first sentence with: 'This extends Purview DLP inspection to files and text routed through Global Secure Access to unmanaged cloud apps.' The cited content filtering page supports that narrower statement; do not claim Endpoint DLP cannot protect sharing to unapproved apps. | Source: https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-cloud-apps-services
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: Global Secure Access > Secure > Content policies > + Create Policy > Rules > Action > Scan with Purview reaches the content rule action. | Found: On the Rules tab: 1. Add a new rule. 2. Enter the Rule name, Description, Priority, and Status as appropriate. 3. Select the appropriate option for the Action menu | Fix: The Action menu is inside a new rule, not directly on the Rules tab. Replace both copies with 'Global Secure Access > Secure > Content policies > + Create Policy > Basics > Rules > add a new rule > Action > Scan with Purview', following https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Purview path reaches Network and non-Microsoft secure browsers during Inline web traffic policy creation. | Found: Configure the cloud apps to monitor: ... Select + Add cloud apps. ... On the Adaptive app scopes tab, choose the app categories ... On the Choose where to enforce the policy page, ensure Network and non-Microsoft secure browsers is enabled | Fix: Include the omitted app-scope selection in both copies of the path: 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > app categories > Choose where to enforce the policy > Network and non-Microsoft secure browsers'. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-network-content-filtering
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The governance checklist tells readers to configure or check controls not represented by controls-table rows. | Found: Checklist: 'Enable the Internet Access traffic forwarding profile, check user assignments and configure a TLS inspection policy'; 'Review Purview Data loss prevention > Alerts and Activity explorer'. The table has only DLP policy and content policy rows. | Fix: Remove the Before rollout bullet beginning 'Enable the Internet Access traffic forwarding profile' and the After rollout bullet beginning 'Review Purview'. Replace the At rollout content-policy bullet with 'Create a Global Secure Access content policy with a Scan with Purview rule whose activities and content types match the DLP rule's actions.' Replace its validation bullet with 'Validate each activity you rely on with a test file or text.' These remove checklist instructions for forwarding, TLS, profile linking, Conditional Access and monitoring controls that lack rows; retain the factual explanations elsewhere.
-->
