---
title: "Microsoft Edge: expanded enforcement controls for Data Loss Prevention connectors"
slug: "microsoft-edge-expanded-enforcement-controls-for-data-loss-prevention-connectors"
roadmapId: 579894
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft plans more enforcement controls for Edge for Business DLP connectors: download, upload, paste and print, a required bypass justification and admin guidance. Admins using a connector should review it; Learn does not yet document the new controls."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the new controls. Learn says Edge for Business connectors extend security investments at no additional cost; the third-party DLP product behind each connector has its own licence."
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
  - title: "OnFileAttachedEnterpriseConnector"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector"
    kind: "learn"
  - title: "OnBulkDataEntryEnterpriseConnector"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector"
    kind: "learn"
  - title: "Understand Data Loss Prevention (DLP) in Microsoft Edge for Business"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-security-dlp"
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
    api: null
    note: "Role: Microsoft Edge Administrator. A configuration policy must exist first. For Symantec: Discover Connectors > Symantec DLP Connector > Set up."
  - governs: "Paste, upload and print connector settings, including the fallback verdict"
    scope: "other"
    ui:
      surface: "Intune admin center"
      path: "Configuration settings > Microsoft Edge > Configuration policy for files attached for Microsoft Edge for Business Data Loss Prevention Connectors"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-connectors-symantec"
    api:
      kind: "other"
      call: "Edge policies OnBulkDataEntryEnterpriseConnector, OnFileAttachedEnterpriseConnector, OnPrintEnterpriseConnector (Group Policy or registry); fields block_until_verdict, default_action"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector"
    note: "The paste and print equivalents sit beside the upload policy under the same Microsoft Edge group."
  - governs: "Whether users must give a justification to bypass a warning"
    scope: "other"
    ui: null
    api:
      kind: "other"
      call: "require_justification_tags field in OnFileAttachedEnterpriseConnector and OnBulkDataEntryEnterpriseConnector"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector"
    note: "Documents the field as it is today; the roadmap's planned justification control is not documented."
  - governs: "Administrator-defined guidance shown to users"
    scope: "other"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap item 579894, In development, targeted December CY2026; Learn documents the existing connectors but not the new controls."
version: 1
---

## What's changing

Microsoft plans to extend the Data Loss Prevention (DLP) connectors in Microsoft Edge for Business. The roadmap item says administrators will be able to configure more consistent enforcement across download, upload, paste and print, and adds a required bypass justification and administrator-defined guidance.

Microsoft Learn does not describe the new controls yet, so the paragraph above is the roadmap's description. What Learn does document today is the existing connector: Edge for Business sends content from specific user actions to an on-device DLP agent and waits for the verdict before proceeding. The connector overview lists Symantec DLP, Trellix and Cisco Secure Access as providers, and paste, print and upload as the actions that can send content (at the time of writing, November 2026, download is not on that list).

Learn already documents a `require_justification_tags` field in the paste and upload connector policies, which makes users enter a justification before bypassing a warning. The roadmap does not say whether the planned justification control builds on that field or replaces it.

The roadmap item is In development with a target of December CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant), platform Web. Dates are Microsoft's targets, not commitments.

## Why it matters

If you run a third-party DLP product through an Edge connector, this decides how strictly the browser enforces its verdicts and what users see when they are stopped. Today the connector policies let you choose, per action, whether Edge waits for a verdict and what happens when the agent cannot be reached. A planned justification requirement would add an audit trail to bypasses, and administrator-defined guidance would let you explain a block in your own words.

If nobody acts, nothing changes: connectors need an admin to set them up. Organisations that already rely on one should plan to revisit their fail-open or fail-closed choice and their communication to users once Learn documents the new controls.

## Risk assessment

**Data exposure**

- Each connector sends page content from the chosen user actions to the on-device DLP agent. The roadmap item does not say the new controls widen what is sent; confirm that when Learn documents them.
- The fallback verdict decides what leaks when the agent is unreachable. Learn says the setting "determines the default verdict if a communication error between Edge and the DLP agent occurs"; Symantec's recommended value for `default_action` is `allow`, so a failure lets content through unless you change it.

**Security & identity**

- A bypass justification is a user-entered statement, not an approval. Learn documents `require_justification_tags` as listing the analysis tags whose bypassable warnings require a justification; if the field is omitted, no justification is required.
- Connectors work for users signed in to Edge for Business with a Microsoft Entra ID, per the Symantec setup page.

**Autonomy & actions**

- No change: the connector evaluates user actions in the browser and takes no actions of its own.

**Change & support**

- Stricter or more consistent enforcement may start blocking uploads, pastes or prints that were previously allowed, which raises help-desk calls. The wiki's view: pilot with a small group before widening.
- Learn lists different minimum versions: Edge 135.0.3179.85 for connectors, and Windows 137 or macOS 151 on the policy pages. Check which applies before rollout.

## Cost and licensing

Microsoft has not published a licence or price for the new controls (Not yet published). The Microsoft Edge for Business Security Connectors page says connectors extend the reach of your security investments "at no additional cost"; it does not say whether that covers the planned controls.

The connector calls a third-party DLP agent (Symantec DLP Endpoint, Trellix DLP Endpoint or Cisco Secure Access), so that product's licence is a separate cost that Learn does not describe. The Learn prerequisites name Edge for Business, Microsoft Edge administrator permissions and a supported operating system, and name no licence. Admin time for policy changes and user communication is the indirect cost.

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

- Pilot the new controls with one group by assigning a separate configuration policy, once Learn documents them.
- Send users a short note explaining what a justification prompt is for and who reads the answers.
- Confirm on a test device at edge://policy that the connector policies show Status OK.

### After rollout

- Review blocks and justifications reported through the DLP provider's console and any Edge reporting connector.
- Revisit the fail-open or fail-closed choice if the agent was unreachable for any period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which providers and browser actions send content to a DLP connector</strong><br><small>Tenant</small><br><small class="controls__note">Role: Microsoft Edge Administrator. A configuration policy must exist first. For Symantec: Discover Connectors &gt; Symantec DLP Connector &gt; Set up.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Connectors <a href="https://learn.microsoft.com/deployedge/microsoft-edge-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Paste, upload and print connector settings, including the fallback verdict</strong><br><small class="controls__note">The paste and print equivalents sit beside the upload policy under the same Microsoft Edge group.</small></td><td data-label="Admin UI"><strong>Intune admin center</strong><br>Configuration settings › Microsoft Edge › Configuration policy for files attached for Microsoft Edge for Business Data Loss Prevention Connectors <a href="https://learn.microsoft.com/deployedge/microsoft-edge-connectors-symantec" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Edge policies OnBulkDataEntryEnterpriseConnector, OnFileAttachedEnterpriseConnector, OnPrintEnterpriseConnector (Group Policy or registry); fields block_until_verdict, default_action</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onfileattachedenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users must give a justification to bypass a warning</strong><br><small class="controls__note">Documents the field as it is today; the roadmap's planned justification control is not documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>require_justification_tags field in OnFileAttachedEnterpriseConnector and OnBulkDataEntryEnterpriseConnector</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/onbulkdataentryenterpriseconnector" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Administrator-defined guidance shown to users</strong><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents connector setup in the Edge Management Service and as three Edge policies that can be deployed with Group Policy or Microsoft Intune. Learn does not document an admin centre setting or API for the planned bypass justification or administrator guidance, so those rows show Not yet documented. The `require_justification_tags` field exists today in the paste and upload policies; the print policy page was not read.

A configuration policy must exist before you can assign a connector. Microsoft Edge Administrator permissions in the Microsoft 365 admin center are listed as a prerequisite. Purview's own Edge DLP policies are a separate control and do not configure these connectors.

## Open questions

- Does the planned required bypass justification extend the existing `require_justification_tags` policy field, or is it a new control? Watch the Edge policy reference and Message center.
- Which new policy fields or admin centre settings will configure administrator-defined guidance, and will the Edge Management Service expose them?
- Will download become a user action that can be sent to a connector, and for which providers?
- Will the new controls need a particular Edge version, and will Learn state a licence or cost for them?
- Where will justifications be recorded, and can administrators read them?

<!-- rationale
risk: Low. Connectors do nothing until an admin configures them, and the roadmap item adds controls rather than new data access. The risk that remains is a connector left at its fail-open fallback, which Learn lets you set to allow.
cost: Low. Learn says Edge for Business connectors extend security investments at no additional cost, but the DLP agent they call is a separate product. Licensing for the new controls is not yet published, so the known cost is admin time.
impact: Low. Admins who run a Symantec, Trellix or Cisco Secure Access connector configure it. Their users would notice only prompts that ask for a justification or show guidance, and only once the controls ship.
-->
