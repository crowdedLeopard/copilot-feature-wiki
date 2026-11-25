---
title: "Microsoft Edge: expanded enforcement controls for Data Loss Prevention connectors"
slug: "microsoft-edge-expanded-enforcement-controls-for-data-loss-prevention-connectors"
roadmapId: 579894
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft plans more enforcement controls for Edge for Business DLP connectors: download, upload, paste, print, a bypass justification and admin guidance. Admins using a connector should review it; Learn documents related policy fields today."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the new controls. Learn says Edge for Business connectors extend security investments at no additional cost. The connectors integrate with third-party security products; Microsoft Learn does not specify their licensing or charges here."
audiences: ["security","m365-admin","compliance"]
tags: ["dlp","m365-admin-center","policy","data-governance","edge-for-business"]
sources:
  - title: "Microsoft 365 Roadmap 579894"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579894"
    kind: "roadmap"
  - title: "Data Loss Prevention Connectors"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-connectors-data-loss-prevention-overview"
    kind: "learn"
  - title: "Microsoft Edge for Business Security Connectors"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-connectors-overview"
    kind: "learn"
  - title: "Set up a Symantec DLP Connector"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-connectors-symantec"
    kind: "learn"
  - title: "Set up a Trellix DLP Connector"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-connectors-trellix"
    kind: "learn"
  - title: "OnFileAttachedEnterpriseConnector"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector"
    kind: "learn"
  - title: "OnBulkDataEntryEnterpriseConnector"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector"
    kind: "learn"
  - title: "OnPrintEnterpriseConnector"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onprintenterpriseconnector"
    kind: "learn"
  - title: "Configure Microsoft Edge for Windows with policy settings"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
  - title: "Understand Data Loss Prevention (DLP) in Microsoft Edge for Business"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-security-dlp"
    kind: "learn"
  - title: "Get started with configuration policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which providers and browser actions send content to a DLP connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > Connectors"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-connectors-overview"
    api:
      kind: "other"
      call: "OnFileAttachedEnterpriseConnector policy (Group Policy or registry); fields service_provider, enable, disable"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector"
    note: "Role: Microsoft Edge Administrator. A configuration policy must exist first. For Symantec: Discover Connectors > Symantec DLP Connector > Set up. The API side covers the upload action only."
  - governs: "Paste, upload and print connector settings, including the fallback verdict"
    scope: "other"
    ui:
      surface: "Intune admin center"
      path: "Devices > Configuration > policy > Configuration settings > Microsoft Edge > Configuration policy for files attached for Microsoft Edge for Business Data Loss Prevention Connectors"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-connectors-symantec"
    api:
      kind: "other"
      call: "OnFileAttachedEnterpriseConnector policy (Group Policy or registry); fields block_until_verdict, default_action"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector"
    note: "The paste and print equivalents sit beside the upload policy under the same Microsoft Edge group. The API side covers the upload policy only."
  - governs: "Whether users must give a justification to bypass a warning"
    scope: "other"
    ui:
      surface: "Group Policy Editor"
      path: "Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Configuration policy for bulk data entry for Microsoft Edge for Business Data Loss Prevention Connectors"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector"
    api:
      kind: "other"
      call: "require_justification_tags field in OnBulkDataEntryEnterpriseConnector policy (Group Policy or registry)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector"
    note: "Documents the paste policy field as it is today. require_justification_tags sets the analysis tags requiring justification."
  - governs: "Administrator-defined guidance shown to users"
    scope: "other"
    ui:
      surface: "Group Policy Editor"
      path: "Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Configuration policy for bulk data entry for Microsoft Edge for Business Data Loss Prevention Connectors"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector"
    api:
      kind: "other"
      call: "custom_messages field in OnBulkDataEntryEnterpriseConnector policy (Group Policy or registry)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector"
    note: "The paste policy custom_messages field supplies tag-based guidance for non-clean results. Each entry identifies a tag and a message; messages should be at most 200 displayed characters. Verdict-provided messages take precedence."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-25"
roadmapModified: "2026-11-17T00:31:56"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap item 579894, In development, targeted December CY2026; Learn documents the existing connectors but not the new controls."
  - date: "2026-11-16"
    note: "Corrected after verification: default state is now not stated, third-party licensing claims removed, audit-trail and justification-reporting claims removed, and connector policy automation entries narrowed to the upload and paste references."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 61 statements not yet confirmed"
  - date: "2026-11-17"
    note: "Corrected after verification: connector behaviour and verdict-waiting now stated as Learn documents them, impact rationale narrowed, Trellix source added, and target date updated to the roadmap's January CY2027."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: Intune admin center path now starts at Devices > Configuration, and two rollout checklist steps without matching control rows were removed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: Learn documents require_justification_tags and custom_messages in the paste, upload and print connector policies, so the justification and guidance rows now show their fields and Group Policy paths."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 72
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "db88e120dcb4bc6ee7992238080e19e4"
---

## What's changing

Microsoft plans to extend the Data Loss Prevention (DLP) connectors in Microsoft Edge for Business. The roadmap item says administrators will be able to configure more consistent enforcement across download, upload, paste and print, and adds a required bypass justification and administrator-defined guidance.

The paragraph above is the roadmap's description. Learn documents `require_justification_tags` and `custom_messages` in the paste, upload and print connector policies. The roadmap remains In development and does not explain how its planned changes relate to these documented fields. What Learn documents today is the existing connector: Edge for Business sends content from specific user actions to an on-device DLP agent. The policy reference says Edge waits for the agent's response when `block_until_verdict` is set to 1; any other integer value lets the page access the data immediately. The connector overview lists Symantec DLP, Trellix and Cisco Secure Access as providers, and paste, print and upload as the actions that can send content (at the time of writing, November 2026, download is not on that list).

The `require_justification_tags` field lists the analysis tags whose bypassable warnings require the user to enter a justification before proceeding. The `custom_messages` field provides administrator guidance for non-clean analysis results. The roadmap does not say whether the planned justification and guidance controls build on those fields or replace them.

The roadmap item is In development with a target of January CY2027, release phase General Availability, Worldwide (Standard Multi-Tenant), platform Web. Dates are Microsoft's targets, not commitments.

## Why it matters

If you run a third-party DLP product through an Edge connector, this decides how strictly the browser enforces its verdicts and what users see when they are stopped. Today the connector policies let you choose, per action, whether Edge waits for a verdict and what happens when the agent cannot be reached. The planned requirement would ask users to explain bypasses; Microsoft has not documented whether those explanations are retained or available to administrators. Administrator-defined guidance would let you explain a block in your own words.

Existing connectors require configuration; Microsoft has not stated defaults for the new controls or their effect on existing configurations. Organisations that already rely on one should plan to revisit their fail-open or fail-closed choice and their communication to users once Microsoft explains how the planned controls relate to the documented fields.

## Risk assessment

**Data exposure**

- Each connector sends page content from the chosen user actions to the on-device DLP agent. The roadmap item does not say the new controls widen what is sent; confirm that when Microsoft explains the planned controls.
- The fallback verdict decides what leaks when the agent is unreachable. Learn says the setting "determines the default verdict if a communication error between Edge and the DLP agent occurs"; Symantec's recommended value for `default_action` is `allow`, so a failure lets content through unless you change it.

**Security & identity**

- A bypass justification is a user-entered statement, not an approval. Learn documents `require_justification_tags` as listing the analysis tags whose bypassable warnings require a justification; if the field is omitted, no justification is required.
- Connectors work for users signed in to Edge for Business with a Microsoft Entra ID, per the Symantec setup page.

**Autonomy & actions**

- The documented connector sends content from specific user actions to an on-device DLP agent and enforces its verdict.

**Change & support**

- Stricter or more consistent enforcement may start blocking uploads, pastes or prints that were previously allowed, which raises help-desk calls. The wiki's view: pilot with a small group before widening.
- Learn lists different minimum versions: Edge 135.0.3179.85 for connectors, and Windows 137 or macOS 151 on the policy pages. Check which applies before rollout.

## Cost and licensing

Microsoft has not published a licence or price for the new controls (Not yet published). The Microsoft Edge for Business Security Connectors page says connectors extend the reach of your security investments "at no additional cost"; it does not say whether that covers the planned controls.

The connectors integrate with third-party security products (Symantec DLP Endpoint, Trellix DLP Endpoint or Cisco Secure Access); Microsoft Learn does not specify their licensing or charges here. Confirm vendor entitlements separately. The Learn prerequisites name Edge for Business, Microsoft Edge administrator permissions and a supported operating system, and name no licence. Admin time for policy changes and user communication is the indirect cost.

## Scope

Clouds, platform and phase as the record gives them: Worldwide (Standard Multi-Tenant), Web, General Availability.

- **Prerequisites today (Learn):** Microsoft Edge version 135.0.3179.85 or greater, Microsoft Edge Administrator permissions in Microsoft 365 Admin Center, and Windows 10/11 or Windows Server 2016 or later.
- **Policy pages:** the connector policies list Windows 137 or later and macOS 151 or later as supported, and Android and iOS as not supported.
- **Who is covered:** users signed in to Edge for Business with a Microsoft Entra ID, on devices that have a supported DLP agent.
- **Not the same as Purview browser DLP:** Edge for Business also enforces Microsoft Purview DLP policies inline. That is a separate route; the connector sends content to a third-party agent.

## Governance guidance

### Before rollout

- Inventory which connectors are configured (Symantec DLP, Trellix or Cisco Secure Access) in the Edge Management Service, and which actions each one scans.
- Decide whether each action should fail open or closed when the agent is unreachable, and record why.
- Check that deployed Edge versions meet the versions on the policy pages (Windows 137 or later, macOS 151 or later).

### At rollout

- Send users a short note explaining what a justification prompt is for and who reads the answers.

### After rollout

- Validate with your DLP provider whether bypass justifications are reported before relying on them.
- Revisit the fail-open or fail-closed choice if the agent was unreachable for any period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which providers and browser actions send content to a DLP connector</strong><br><small>Tenant</small><br><small class="controls__note">Role: Microsoft Edge Administrator. A configuration policy must exist first. For Symantec: Discover Connectors &gt; Symantec DLP Connector &gt; Set up. The API side covers the upload action only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Connectors <a href="https://learn.microsoft.com/deployedge/microsoft-edge-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>OnFileAttachedEnterpriseConnector policy (Group Policy or registry); fields service_provider, enable, disable</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Paste, upload and print connector settings, including the fallback verdict</strong><br><small class="controls__note">The paste and print equivalents sit beside the upload policy under the same Microsoft Edge group. The API side covers the upload policy only.</small></td><td data-label="Admin UI"><strong>Intune admin center</strong><br>Devices › Configuration › policy › Configuration settings › Microsoft Edge › Configuration policy for files attached for Microsoft Edge for Business Data Loss Prevention Connectors <a href="https://learn.microsoft.com/deployedge/microsoft-edge-connectors-symantec" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>OnFileAttachedEnterpriseConnector policy (Group Policy or registry); fields block_until_verdict, default_action</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users must give a justification to bypass a warning</strong><br><small class="controls__note">Documents the paste policy field as it is today. require_justification_tags sets the analysis tags requiring justification.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Computer Configuration › Policies › Administrative Templates › Microsoft Edge › Configuration policy for bulk data entry for Microsoft Edge for Business Data Loss Prevention Connectors <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>require_justification_tags field in OnBulkDataEntryEnterpriseConnector policy (Group Policy or registry)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Administrator-defined guidance shown to users</strong><br><small class="controls__note">The paste policy custom_messages field supplies tag-based guidance for non-clean results. Each entry identifies a tag and a message; messages should be at most 200 displayed characters. Verdict-provided messages take precedence.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Computer Configuration › Policies › Administrative Templates › Microsoft Edge › Configuration policy for bulk data entry for Microsoft Edge for Business Data Loss Prevention Connectors <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>custom_messages field in OnBulkDataEntryEnterpriseConnector policy (Group Policy or registry)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents connector setup in the Edge Management Service and as three Edge policies that can be deployed with Group Policy or Microsoft Intune. The `require_justification_tags` and `custom_messages` fields exist today in the paste policy (OnBulkDataEntryEnterpriseConnector), the upload policy (OnFileAttachedEnterpriseConnector, https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector) and the print policy (OnPrintEnterpriseConnector, https://learn.microsoft.com/deployedge/microsoft-edge-policies/onprintenterpriseconnector). The last two rows show those fields as the paste policy documents them.

The automation entries link the upload and paste policy references; the print policy reference is linked above.

A configuration policy must exist before you can assign a connector. Microsoft Edge Administrator permissions in the Microsoft 365 admin center are listed as a prerequisite. Purview's own Edge DLP policies are a separate control and do not configure these connectors.

## Open questions

- Does the planned required bypass justification extend the existing `require_justification_tags` policy field, or is it a new control? Watch the Edge policy reference and Message center.
- Will the Edge Management Service expose the `custom_messages` field that Learn documents in the connector policies, and does the planned guidance control use it?
- Will download become a user action that can be sent to a connector, and for which providers?
- Will the new controls need a particular Edge version, and will Learn state a licence or cost for them?
- Where will justifications be recorded, and can administrators read them?

<!-- rationale
risk: Low. Microsoft has not stated the default for the new controls, so this rates today's behaviour continuing: connectors need configuration and the roadmap item adds controls, not data access. The remaining risk is a connector left at its fail-open fallback, which Learn lets you set to allow.
cost: Low. Learn says Edge for Business connectors extend security investments at no additional cost. Licensing for the new controls is not yet published, so the known cost is admin time; confirm third-party vendor entitlements separately.
impact: Low. Admins who run a Symantec, Trellix or Cisco Secure Access connector configure it. Learn documents user-entered bypass justification and custom_messages guidance for non-clean results; the roadmap does not explain how its planned change relates to those fields.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Settings > Microsoft Edge > Connectors reaches the page listing connector configurations. | Found: In the main left navigation bar, go to Settings > Microsoft Edge. Navigate to the Connectors tab. | Fix: For the Symantec example, give the remaining route in controls[0].note: 'Settings > Microsoft Edge > Connectors > Discover Connectors > Symantec DLP Connector > Set up > Chosen policy > Enable data loss prevention for browser actions'. The setup and action-selection steps are documented at https://learn.microsoft.com/deployedge/microsoft-edge-connectors-symantec. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-connectors-overview
-->
