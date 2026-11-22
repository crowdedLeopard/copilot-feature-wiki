---
title: "Microsoft Edge: watermarking protection for sensitive content"
slug: "microsoft-edge-watermarking-protection"
roadmapId: 547827
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge for Business will overlay a fixed watermark on content that a DLP policy restricts. Admins turn it on per user group in the Edge management service. Learn documents it as a preview; the roadmap targets December CY2026."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Learn preview page lists Microsoft 365 E5 (preferred) or E3 licensing as a requirement. It names no separate add-on, price or meter, and Microsoft has not published whether licences beyond E5 and E3 apply."
audiences: ["security","compliance","m365-admin"]
tags: ["edge-for-business","microsoft-edge","dlp","purview","sensitivity-labels","intune-app-protection","watermarking"]
sources:
  - title: "Microsoft 365 Roadmap 547827"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=547827"
    kind: "roadmap"
  - title: "Watermarking Protection in Microsoft Edge for Business (In Preview)"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-watermark-protection"
    kind: "learn"
  - title: "Configuring DLP Features in Microsoft Edge"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-enabling-dlp-features"
    kind: "learn"
  - title: "Get started with configuration policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    kind: "learn"
  - title: "Use the Edge API in Microsoft Graph to manage browsers"
    url: "https://learn.microsoft.com/graph/browser-edge-concept-overview"
    kind: "learn"
videos: []
related: ["sensitivity-labels","endpoint-dlp","microsoft-edge-expanded-enforcement-controls-for-data-loss-prevention-connectors","microsoft-purview-data-loss-prevention-upgraded-inline-protection-for-microsoft-entra-mana","microsoft-edge-enhanced-security-mode-plus"]
controls:
  - governs: "Whether Watermarking is turned on for a group of users"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > configuration policy > Customization Settings > Security Settings > Watermarking"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-enabling-dlp-features"
    api: null
    note: "Requires the Microsoft Edge Administrator role. The preview page says to scope the profile to user identity, not device. Preview feature; labels may change."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-22"
    note: "First briefing on Edge watermarking: documented as a preview, enforcement-triggered, with an Edge management service toggle and no documented API."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 54
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "75d6e767f706b5cc3195d00db414facc"
---

## What's changing

Watermarking Protection in Microsoft Edge for Business overlays a persistent, semi-transparent watermark across content that a data protection policy restricts. Microsoft's description says it is meant to deter unauthorised sharing, support compliance efforts and make users more aware when they handle confidential information. The browser renders the watermark, and the Learn page says users cannot remove or alter it.

The Learn page is marked "In Preview" and describes the preview, not a final design. It says the watermark shows on regular tabs, split-screen tabs, pop-up and app windows, local PDFs with sensitivity labelling, MIP-labelled PDFs, reading mode, and in printing and screenshots. It lists the sidebar and Shoreline surfaces as not supported and planned for the future. The text is fixed: "Confidential – Don't share" followed by the user name and a timestamp, and the page says neither users nor admins can change it today. Customisable, dynamic watermarks are planned for a future release.

The watermark follows enforcement, not classification. The page says a watermark appears only when a policy applies an actual restriction action (for example block copy, block upload or block print) from a DLP provider: a Purview label policy, a Purview session policy, an eDLP Purview policy or Intune. It is not rendered when a sensitivity label applies no restriction, or when the matching DLP policy is set to Audit only.

The roadmap record shows the item as In development, targeted for December CY2026, General Availability, Worldwide (Standard Multi-Tenant), platform Web. Microsoft's dates are targets.

## Why it matters

For a service owner this is a deterrent layered on policies you already run, not a new protection. It makes screenshots, photographs and printouts of restricted content traceable to a user name and time, which helps in awareness campaigns and in later investigations. Because it appears only where a restriction action applies, a tenant whose DLP policies are all in Audit only will see no watermark at all, and people who expect one on every labelled page will be wrong.

Microsoft has not stated what happens on arrival at general availability, so no source says existing behaviour changes. The preview page describes an admin turning the toggle on, which makes this a capability to review and pilot rather than something to act on before a deadline.

## Risk assessment

**Data exposure**
- The watermark adds no new data access. It is drawn over content already shown in the browser, so exposure stays where your block actions leave it.
- A watermark does not stop copying. Where a label applies no restriction, or a DLP policy is Audit only, the page says nothing is rendered, so unrestricted content looks unprotected to users.
- Sidebar and Shoreline surfaces are listed as not supported, so content shown there carries no watermark until Microsoft adds them.

**Security & identity**
- The watermark text includes the user name and a timestamp, so screenshots shared outside the organisation will carry them. Tell staff before rollout.
- The profile must be scoped to user identity, not device, per the Learn page. A device-scoped assignment is a listed cause of a missing watermark.

**Autonomy & actions**
- No autonomous actions are described. The watermark is a display effect of a policy decision made by Purview or Intune.

**Change & support**
- Support calls are most likely to be "no watermark". The page names the cause as a policy carrying Audit only instead of a block action, and gives `edge://policy`, scope and Edge 142 or later as checks.
- The text cannot be edited by admins today, so wording requests (language, classification name) have no control to meet them yet.

## Cost and licensing

The Learn preview page lists these requirements: Microsoft Edge 142 or later, Microsoft 365 E5 (preferred) or E3 licensing, admin access to the Edge Management Service portal, and Targeted Release enabled for the tenant. The page names no separate add-on, price or meter, and does not say what "preferred" means for E3 tenants; treat that as a question for Microsoft.

A separate Learn page on DLP features in Edge says its guidance applies to Microsoft 365 E3 customers configuring Edge for Business DLP through Intune mobile application management (MAM), and points E5 customers who want per-site or per-app boundaries to Microsoft Purview DLP. The indirect costs are admin time to scope the profile, to review DLP policies for block actions and to brief users.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), platform Web and the General Availability phase. Microsoft's roadmap target is December CY2026, and the Learn page already documents a preview.

Prerequisites from the preview page are Edge 142 or later, E5 (preferred) or E3, Targeted Release and access to the Edge management service. The Edge management service page says you must be a Microsoft Edge Administrator to use it in the Microsoft 365 admin center. The profile must be assigned to a user group and scoped to user identity, not device.

The DLP features page describes a second route: a configuration policy of type Cloud for Windows 10+ with Watermarking enabled, which gives a profile-wide watermark for users who also have at least one Intune app protection policy.

## Governance guidance

### Before rollout
- Inventory which Purview label, session and eDLP policies and which Intune app protection policies carry a block action, since the page says audit-only policies draw no watermark.
- Check that pilot devices run Edge 142 or later, and that Targeted Release is enabled for the tenant.
- Pick a pilot Microsoft Entra group and confirm the profile will be scoped to user identity, not device.
- Draft a user notice explaining that the user name and a timestamp appear on screen, in print and in screenshots.

### At rollout
- Create the configuration policy in the Edge management service, assign it to the pilot group and turn on Watermarking in its Security Settings.
- Confirm that a Microsoft Edge Administrator performs the change, as the management service requires that role.
- Test one block-action policy and one audit-only policy to see the difference users will see.

### After rollout
- Open `edge://policy` on a pilot device to confirm the watermarking policy is applied and the user is in scope.
- Review support tickets for "no watermark" and check each one for an audit-only action first.
- Re-read the Learn page at general availability, because the preview limits and text options may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Watermarking is turned on for a group of users</strong><br><small>Group</small><br><small class="controls__note">Requires the Microsoft Edge Administrator role. The preview page says to scope the profile to user identity, not device. Preview feature; labels may change.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › configuration policy › Customization Settings › Security Settings › Watermarking <a href="https://learn.microsoft.com/deployedge/microsoft-edge-enabling-dlp-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

One setting turns the watermark on: the Watermarking toggle in the Edge management service. What triggers it is a restriction action set in the DLP provider (a Purview label, session or eDLP policy, or Intune), so those policies decide which content is watermarked, not the Edge toggle.

The Edge management service page says policies applied through it are overridden if they conflict with a Group Policy Object or an MDM policy set on the device. The preview page asks for a profile scoped to user identity, and the Edge administrator role is needed to reach the service. Learn documents no Microsoft Graph or Edge policy for the toggle at the time of writing (November 2026).

## Open questions

- What is the default state of Watermarking at general availability, and will it differ from the preview? Watch the Learn watermarking page and the roadmap item.
- Does E3 licensing work fully for the Purview-triggered watermark, or only for the Intune MAM route, given the Learn page prefers E5?
- Will an admin be able to edit the watermark text or turn off the user name and timestamp? The page says customisable, dynamic watermarks are planned.
- Will the sidebar and Shoreline surfaces be supported, and by when?
- Will the toggle get a Graph or Edge policy for scripted deployment?

<!-- rationale
risk: Low. The watermark is a visible deterrent that adds no new data access, and the Learn page says it appears only where a policy applies a restriction action, so it does not replace blocking or auditing. The default at general availability is not stated.
cost: Low. The Learn preview page lists Microsoft 365 E5 (preferred) or E3 licensing and Edge 142 or later as requirements and names no separate price or meter, so the known cost is admin time and user communication.
impact: Low. Only users in the groups an admin assigns the setting to will see the watermark, on content that a policy restricts; the default at general availability is not stated.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: policy precedence / behaviour: Edge management service policies are overridden whenever they conflict with a GPO or MDM policy on the device. | Found: If you want the Microsoft Edge management service policy to override MDM/GPM policy you can set the override in the EdgeManagementPolicyOverridesPlatformPolicy policy. This is a private policy and must be set via the registry. | Fix: Replace the sentence with: 'By default, conflicting device GPO or MDM policies override Edge management service policies; EdgeManagementPolicyOverridesPlatformPolicy can reverse that precedence.' Cite https://learn.microsoft.com/deployedge/microsoft-edge-management-service. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-management-service
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: The watermark adds no new data access. | Found: Searched: Microsoft Edge watermarking protection data access copying autonomous actions watermark display. Opened learn.microsoft.com/deployedge/microsoft-edge-management-watermark-protection and the DLP configuration page. They describe a browser overlay, not an assurance of no new data access. | Fix: Replace 'The watermark adds no new data access' with 'The browser renders a semi-transparent overlay across the content area' in Risk assessment and remove 'that adds no new data access' from the risk rationale. Cite https://learn.microsoft.com/deployedge/microsoft-edge-management-watermark-protection.
- [unsupported, major] Risk assessment: Data exposure / behaviour: A watermark does not stop copying. | Found: Searched: Microsoft Edge watermarking protection data access copying autonomous actions watermark display. Read the feature and DLP configuration pages; they describe deterrence and separate restriction actions, but do not state that watermarking does not stop copying. | Fix: Replace 'A watermark does not stop copying' with 'Microsoft describes watermarking as a deterrent to unauthorised sharing'. Cite https://learn.microsoft.com/deployedge/microsoft-edge-management-watermark-protection.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: table / admin-path: The Watermarking path is Microsoft 365 admin center > Settings > Microsoft Edge > configuration policy > Customization Settings > Security Settings > Watermarking. | Found: In the Edge Management Service (admin.microsoft.com → Settings → Microsoft Edge) In your Configuration policy, navigate to Customization Settings → Security Settings. Enable Watermarking for users who are receiving MAM policies. | Fix: Use 'Settings > Microsoft Edge > Configuration policies > configuration policy > Properties > Customization Settings > Security Settings > Watermarking'. The omitted tab lists the policies and Properties is the details page; the starting route is documented by the already cited https://learn.microsoft.com/deployedge/microsoft-edge-management-service. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-enabling-dlp-features
- [contradicted, minor] Governance guidance: Before rollout; Governance controls: table / consistency: The checklist tells readers to inventory DLP and Intune app protection policies and check Targeted Release, but those controls have no table rows. | Found: Inventory which Purview label, session and eDLP policies and which Intune app protection policies carry a block action. Check ... that Targeted Release is enabled for the tenant. Table: Whether Watermarking is turned on for a group of users. | Fix: Flag the Before rollout instructions to inventory Purview/Intune protection policies and check Targeted Release as checklist steps with no corresponding controls-table rows; do not add unverified paths or commands.
-->
