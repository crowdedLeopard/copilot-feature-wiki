---
title: "Microsoft Purview Endpoint DLP: AI skill to investigate policy sync and device health"
slug: "microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i"
roadmapId: 562016
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a Security Copilot AI skill in Endpoint DLP that flags unhealthy policy sync and device configuration. Preview targeted June CY2027, general availability July CY2027. Microsoft says no immediate action is required."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2027"
previewDate: "June CY2027"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's notice says the feature needs Security Copilot and SCUs. Learn says Microsoft 365 E5 and E7 include SCUs monthly; the SCU rate for this skill is not yet published; the inclusion rule covers all Purview agentic scenarios."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","ai","monitoring","security-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 562016"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562016"
    kind: "roadmap"
  - title: "MC1381121"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1381121"
    kind: "message-center"
  - title: "Security Copilot in Microsoft Purview Overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-overview"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Monitor device health with the device health reports dashboard"
    url: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"]
controls:
  - governs: "Tenant switch for the AI-powered policy sync and device health skill"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting to enable, disable or scope the skill is documented at the time of writing (November 2026)."
  - governs: "Per-device configuration status and policy sync status"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "Microsoft Defender portal Advanced hunting: DeviceInfo | where DlpInfo != \"\" | project DlpInfo"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Today's manual route, not a control over the AI skill. Read-only view of status and device attributes."
  - governs: "Device readiness for policy updates and Endpoint DLP features"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Device report"
      docs: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    api: null
    note: "Requires Compliance Administrator, Security Administrator or Global Administrator. Indicators show devices at risk of missing updates, not confirmed failures."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap-only description of the agent skill, with the existing Endpoint DLP device health controls recorded as today's alternative."
  - date: "2026-11-16"
    note: "First briefing for roadmap item 565374: roadmap-only description of the AI capability, with today's documented device status and health tools shown as the manual route."
  - date: "2026-11-17"
    note: "Rewritten for roadmap item 562016: Worldwide cloud, preview June CY2027 and general availability July CY2027, with the Security Copilot and SCU requirement from MC1381121."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 73 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed the Purview source control row and two unsupported statements, stated that the E5 and E7 inclusion rule covers all Purview agentic scenarios, and removed the usage-dashboard checklist step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 72
  unconfirmed: 0
  contradicted: 3
  attempts: 2
  hash: "547157fc4176a197f83de2a0a50d1d03"
---

## What's changing

Microsoft plans to add Policy Sync and Device Health AI skills to Microsoft Purview Endpoint Data Loss Prevention (Endpoint DLP, the Purview feature that monitors and restricts how sensitive items are used on onboarded devices). The roadmap item describes an AI agent skill to detect and alert unhealthy policy sync and device configuration.

Microsoft's notice MC1381121 adds detail: real-time visibility into DLP policy deployment across endpoints, automatic identification of impacted devices and sync failures, and root cause explanations with recommended remediation actions. It says the experience will be available within DLP policy and device views in Microsoft Purview, and that the feature requires Security Copilot capabilities to be available in the tenant. Microsoft Learn does not describe this skill yet, so this behaviour is Microsoft's description in the notice, not documented product behaviour.

The notice states that no immediate action is required and does not say whether the skill is on or off when it arrives. Its rollout schedule is a public preview beginning early June 2027 and a Worldwide rollout beginning early July 2027. The notice was last updated on 10 November 2026 with a revised timeline.

The roadmap record lists the item as In development, with a Preview release phase targeted for June CY2027 and General Availability targeted for July CY2027, for Worldwide (Standard Multi-Tenant) on the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

Learn states that devices must be online for the policy update to happen, and that a device whose Policy sync status is **Not updated** has not synced the latest policy updates. A diagnostic skill that names impacted devices and likely causes could shorten troubleshooting.

The cost and licensing side deserves more attention than the risk side. The notice ties the feature to Security Copilot and Security Compute Units, so decide now who owns that capacity. Microsoft has not stated what happens on arrival if nobody acts, and no source says existing Endpoint DLP behaviour changes.

## Risk assessment

**Data exposure**
- The notice describes analysis of DLP policy sync status and device health, and answers Yes to whether the change introduces AI capabilities that interact with or provide access to customer data. Which data the skill reads is not stated beyond that.
- Learn's Security Copilot inclusion page says relevant Customer Data may be copied, processed and stored by Security Copilot to provide responses.

**Security & identity**
- Microsoft's notice asks admins to verify they have appropriate permissions to access DLP policies and device views in Microsoft Purview. The roles the skill itself needs are not stated.
- Which identity the skill runs under is not stated.

**Autonomy & actions**
- The notice describes root cause explanations and recommended remediation actions. It does not say the skill changes devices or policies itself.

**Change & support**
- Treat the AI's root causes as a second opinion until Microsoft documents how they are produced. Learn's troubleshooting page already gives remediation steps in the device details pane and a workflow diagram for devices showing **Not updated** or **Not available**.
- Learn lists OS, Defender engine version, Defender client version, MDATP device ID and Valid user as the values to record for a support ticket.

## Cost and licensing

Microsoft has not published a price or licence for this skill. Microsoft's notice says the feature requires Security Copilot capabilities to be available in the tenant, and its preparation steps include confirming that Security Compute Units are provisioned to support AI experiences. The SCU is the meter, and the rate this skill consumes is not yet published.

Learn's Security Copilot inclusion page says customers with Microsoft 365 E5 and E7 have 400 SCUs each month for every 1,000 paid user licences, up to 10,000 SCUs each month, at no additional cost, and that customers without those licences can continue to use the existing Security Copilot pricing model. It lists the core experiences as all chat, promptbook and agentic scenarios across Microsoft Purview, among others. The roadmap item calls this an AI agent skill; the inclusion rule covers all Microsoft Purview agentic scenarios, and the skill's SCU consumption rate is not yet published.

The same page says usage beyond the allocated SCUs will be throttled at a future date, when customers can scale beyond the allocation at $6 USD per SCU on a pay-as-you-go basis, with 30 days' notice. Usage is tracked in the usage dashboard in the Security Copilot standalone portal. Indirect cost is admin time to review the output.

## Scope

The roadmap lists Microsoft Purview as the product, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. Other clouds are not listed on the record, which is a record fact and not a statement that the skill is unavailable there.

Microsoft's notice names admins managing Endpoint DLP policies in Microsoft Purview as the people affected, and lists the Microsoft Purview compliance portal, Endpoint DLP and Security Copilot as the services involved. The devices in scope are those onboarded to Endpoint DLP; Learn's device health reports dashboard requires devices to be onboarded and actively reporting device telemetry. Whether the skill covers both Windows and macOS devices is not stated.

## Governance guidance

### Before rollout
- Confirm with the Security Copilot owner whether Security Copilot is enabled and SCUs are provisioned, as Microsoft's notice advises, and agree who funds extra capacity if the tenant is not covered by Microsoft 365 E5 or E7 inclusion.
- Check that the Purview source is on in Security Copilot, because Learn says Security Copilot in Purview must be enabled for its embedded experiences.
- Record how many devices show **Not updated** or **Not available** for Policy sync status in the Devices list, so the skill's output can be judged against a baseline.
- Assign Compliance Administrator or Security Administrator to the people who will triage device health, the least-privileged roles Learn names for the device health reports dashboard.

### At rollout
- Watch Message center and the roadmap item for the public preview in early June 2027 and the Worldwide rollout in early July 2027, as MC1381121 gives them.
- Check where the skill appears in the DLP policy and device views before telling teams to use it.
- Compare each AI-generated root cause with the device details pane and the Learn workflow diagram before changing a device.

### After rollout
- Review the device health reports dashboard regularly for offline devices, outdated Defender versions and configuration issues, as Learn recommends.
- Query the DlpInfo column of the DeviceInfo table in Advanced hunting to report on configuration validity and policy modification times.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for the AI-powered policy sync and device health skill</strong><br><small>Tenant</small><br><small class="controls__note">No setting to enable, disable or scope the skill is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration status and policy sync status</strong><br><small class="controls__note">Today's manual route, not a control over the AI skill. Read-only view of status and device attributes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Microsoft Defender portal Advanced hunting: DeviceInfo | where DlpInfo != &quot;&quot; | project DlpInfo</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Device readiness for policy updates and Endpoint DLP features</strong><br><small class="controls__note">Requires Compliance Administrator, Security Administrator or Global Administrator. Indicators show devices at risk of missing updates, not confirmed failures.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Device report <a href="https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant switch, role or API specific to this skill at the time of writing (November 2026), so the first row states that gap. The Purview source in Security Copilot is a general control; Microsoft has not confirmed that it governs this skill.

The last two rows are today's manual tools for the same problem and do not govern the skill. Reaching the device health reports dashboard needs Compliance Administrator, Security Administrator or Global Administrator. Learn says status in the Devices list can take up to 2 hours to update, so a freshly fixed device may still show **Not updated**.

## Open questions

- At what rate will the skill consume Security Compute Units? Watch the Security Copilot inclusion page and Message center.
- Can admins turn the skill off or limit it to certain roles, separately from the Purview source in Security Copilot? No setting is documented yet.
- What data are root cause explanations built from, and is the activity audited?
- Is the skill on or off when it arrives, in preview and at general availability? Microsoft's notice does not say.
- Will it cover macOS as well as Windows devices, and will it reach clouds other than Worldwide?

<!-- rationale
risk: Low. The roadmap and Microsoft's notice describe diagnostics on policy sync and device health, not a change to what Endpoint DLP enforces. The default state is not stated, so this rates today's behaviour continuing.
cost: Variable. Microsoft's notice says the feature requires Security Copilot and asks admins to confirm Security Compute Units (SCUs) are provisioned. SCUs are the meter; the rate for this skill is not yet published.
impact: Low. The notice names admins who manage Endpoint DLP policies in the Microsoft Purview portal as the people affected. End users are not described as noticing it.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: opening sentence / licensing: Microsoft has not published a licence for this skill. | Found: Core Experiences: All chat, promptbook, and agentic scenarios across Microsoft Entra, Microsoft Intune, Microsoft Purview, Microsoft Defender, and the standalone Security Copilot portal. | Fix: Replace 'Microsoft has not published a price or licence for this skill.' with 'Microsoft has not published a skill-specific SCU consumption rate.' Keep the following published Security Copilot prerequisite and E5/E7 inclusion explanation. | Source: https://learn.microsoft.com/copilot/security/security-copilot-inclusion
- [contradicted, blocker] Governance controls: Purview source qualification / applicability: Microsoft has not confirmed that the Purview source in Security Copilot governs this skill. | Found: Security Copilot in Purview must be enabled for both the standalone and embedded experiences to work. | Fix: Replace 'The Purview source in Security Copilot is a general control; Microsoft has not confirmed that it governs this skill.' with 'The Purview source is a general prerequisite for Security Copilot embedded experiences in Purview, which includes the experience described in MC1381121; it is not a switch specific to this skill.' Cite https://learn.microsoft.com/purview/copilot-in-purview-overview. | Source: https://learn.microsoft.com/purview/copilot-in-purview-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist instructs readers to check Security Copilot enablement, SCU provisioning and the Purview source, but these controls have no rows. | Found: Checklist: 'Confirm ... whether Security Copilot is enabled and SCUs are provisioned' and 'Check that the Purview source is on'. Table: skill-specific tenant switch, per-device status and device readiness only. | Fix: Remove the checklist bullet beginning 'Check that the Purview source is on'. Replace the first Before rollout bullet with 'Agree with the Security Copilot owner who funds extra capacity if the tenant is not covered by Microsoft 365 E5 or E7 inclusion.' The prerequisite facts can remain in the prose.
-->
