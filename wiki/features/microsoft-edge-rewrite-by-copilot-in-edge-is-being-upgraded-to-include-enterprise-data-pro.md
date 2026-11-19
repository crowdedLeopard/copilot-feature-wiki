---
title: "Microsoft Edge: Rewrite by Copilot (Writing Assistance) gains enterprise data protection"
slug: "microsoft-edge-rewrite-by-copilot-in-edge-is-being-upgraded-to-include-enterprise-data-pro"
roadmapId: 420335
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft's notice MC1146821 says Writing Assistance in Edge for Business will be on by default, rolling late January 2027. Admins should plan user comms and review the Edge policy and DLP rules before then."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The writing features require access to Microsoft 365 Copilot Chat, which requires an eligible Microsoft 365 subscription; an additional Microsoft Copilot license is not required for eligible users. A separate meter for this change is not yet published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["copilot-chat","microsoft-edge","edge-for-business","enterprise-data-protection","entra-id","dlp","policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 420335"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=420335"
    kind: "roadmap"
  - title: "MC1146821: (Updated) Rewrite with Microsoft 365 Copilot Chat coming soon to Edge for Business users"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1146821"
    kind: "message-center"
  - title: "ComposeInlineEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "User data and privacy in Microsoft Edge"
    url: "https://learn.microsoft.com/legal/microsoft-edge/privacy#compose"
    kind: "learn"
  - title: "Configuring Copilot Features"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    kind: "learn"
  - title: "Microsoft 365 Copilot Chat in Edge and Access to Page Content"
    url: "https://learn.microsoft.com/deployedge/edge-learnmore-copilot-page-summary-results"
    kind: "learn"
  - title: "Pages where DLP stops the writing features working (Endpoint DLP sensitive service domain groups) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-cloud-apps-services"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search"]
controls:
  - governs: "Whether users can use the Commercial Writing features (Rewrite) in Edge"
    scope: "user"
    ui:
      surface: "Group Policy (Microsoft Edge ADMX)"
      path: "Administrative Templates > Microsoft Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value ComposeInlineEnabled (REG_DWORD; 0x00000000 = disabled); macOS preference key ComposeInlineEnabled"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled"
    note: "GP name: Commercial Writing. Per profile; Entra accounts only. MC1146821 names InlineComposeEnabled instead; the mapping is unconfirmed."
  - governs: "The InlineComposeEnabled policy named in MC1146821"
    scope: "other"
    ui: null
    api: null
    note: "Named in Microsoft's notice only; no Learn page documents it at the time of writing (November 2026)."
  - governs: "Edge management service setting for AI-generated text and editing"
    scope: "other"
    ui:
      surface: "Microsoft Edge management service"
      path: "Copilot > AI-generated text and editing"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    api: null
    note: "The page does not name Rewrite, Writing Assistance or either policy. Assigned through a new or existing configuration policy."
  - governs: "Pages where DLP stops the writing features working (Endpoint DLP sensitive service domain groups)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Settings > Data Loss Prevention > Endpoint DLP settings > Browser and domain restrictions to sensitive data > Sensitive service domain groups"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-cloud-apps-services"
    api: null
    note: "General control. The blocking settings are listed for Copilot Chat in the Edge sidepane; Microsoft has not confirmed they cover Writing Assistance."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-19"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item; records the March 20, 2026 pause and the Edge policy that governs Rewrite."
  - date: "2026-11-16"
    note: "Added Microsoft's notice MC1146821: default now on, rollout late January 2027, and its InlineComposeEnabled policy name; added a DLP control row and corrected unsupported claims."
  - date: "2026-11-17"
    note: "Corrected: removed the New-DlpCompliancePolicy call from the DLP row, replaced the claim that any page not covered by DLP or Edge policy is open to the feature, softened the late January 2027 timing and dropped Intune MAM from the checklist."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Corrected the WorkIQ grounding clause in Cost and licensing to match the ComposeInlineEnabled policy page, adding its qualification."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected: removed the unsupported March 20, 2026 pause claim, set licensing to included (Copilot Chat needs an eligible Microsoft 365 subscription, no extra Copilot license), and cited the Edge privacy page for text transfer."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "82b596947c9bb71853a1ac7e7730659f"
---

## What's changing

Microsoft plans to add enterprise data protection to Rewrite by Copilot in Microsoft Edge, which lets users edit typed text for tone, format and length. The roadmap item states that, once Rewrite is available, users signed in with a Microsoft Entra ID will have enterprise data protection when using it.

Microsoft's notice MC1146821 (updated November 9, 2026) says it is associated with this roadmap item and describes the same capability as Writing Assistance, powered by Microsoft 365 Copilot Chat. Users highlight editable text and right-click to open the context menu. The notice says Writing Assistance will be enabled by default for Edge for Business users, and that it will not work on content where Data Loss Prevention (DLP) policies restrict Microsoft 365 Copilot from accessing page content. It names the InlineComposeEnabled policy setting as the admin control and says no admin action is required before rollout.

The roadmap shows In development and a January CY2027 target. MC1146821 expects Worldwide rollout to begin and complete in late January 2027, previously end of October 2026 for the start and late October for completion. It sets no act-by date. Treat these dates as targets.

The notice and Microsoft Learn also differ on the policy name. The notice says InlineComposeEnabled; the Learn policy reference documents ComposeInlineEnabled (Commercial Writing), which enables eligible users with access to Microsoft 365 Copilot Chat to draft, rewrite and dictate text in web editing fields in Edge. At the time of writing (November 2026) no Learn page documents a policy named InlineComposeEnabled, so do not assume the two names are the same setting.

## Why it matters

This puts a generative AI writing option in front of Edge for Business users by default, which means text typed into web editing fields can be sent to Microsoft 365 Copilot Chat when a user invokes it. Enterprise data protection is the commitment the roadmap says will cover that use for Microsoft Entra ID users; decide whether you are content to rely on it for the sites your staff type into.

If nobody acts, Microsoft currently expects eligible users to receive the right-click option during the late January 2027 rollout with no guidance from you, and eligible users can use the writing features in supported web editing fields, subject to feature availability and other applicable policies ([ComposeInlineEnabled](https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled)). Decide before then whether to allow it, and brief users and the service desk.

## Risk assessment

**Data exposure**

- Writing Assistance is powered by Microsoft 365 Copilot Chat (MC1146821), so text a user chooses to rewrite goes to Copilot. Microsoft's Edge privacy page says text highlighted or inputted for Compose is sent to Microsoft after the user clicks the Rewrite or Generate button ([User data and privacy in Microsoft Edge](https://learn.microsoft.com/legal/microsoft-edge/privacy#compose)). The roadmap says enterprise data protection will apply for users signed in with a Microsoft Entra ID; the Learn pages read do not describe how it applies to this feature specifically.
- The notice and the policy page say the feature is unavailable where DLP blocks access. The Learn page on Copilot Chat page-content access lists the Purview and Intune MAM settings that block Copilot Chat in the Edge sidepane; Microsoft has not confirmed that the same list governs Writing Assistance.

**Security & identity**

- The ComposeInlineEnabled page says the features require a Microsoft Entra account and are not available with personal Microsoft accounts. It also says the policy does not apply to a profile signed in with a Microsoft account.

**Autonomy & actions**

- Users invoke the feature themselves through the right-click menu (MC1146821); no autonomous action is described.

**Change & support**

- The feature is on by default per MC1146821, and the Learn policy page says an unconfigured policy leaves the writing features available. Expect questions about the new menu item and about why it is missing on DLP-protected pages.
- The notice moved rollout from October 2026 to January 2027; confirm Message center before briefing users.

## Cost and licensing

The writing features require access to Microsoft 365 Copilot Chat. Copilot Chat requires an eligible Microsoft 365 subscription; an additional Microsoft Copilot license is not required for eligible users ([Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements), [ComposeInlineEnabled](https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled)). A separate meter for this change is not yet published. The ComposeInlineEnabled policy page adds that users licensed for Microsoft 365 Copilot (Premium) can also use WorkIQ grounding when available, subject to content permissions and tenant controls. That page lists no price.

No meter or cap for this feature is documented at the time of writing (November 2026). The known cost is admin time: setting the Edge policy, reviewing DLP coverage and communicating with users.

## Scope

Users: Edge for Business users signed in with a Microsoft Entra ID (roadmap and MC1146821). Personal Microsoft accounts are outside the Commercial Writing features per the policy page.

Cloud and platform: the record lists Worldwide (Standard Multi-Tenant) and Web. Absence of other clouds from the record is not a statement that the feature is unavailable there. The policy page lists support from version 115 on Windows and macOS and no support on Android or iOS.

Rollout: MC1146821 says Worldwide rollout begins and completes in late January 2027. The roadmap target is January CY2027 and the status is In development. Prerequisite per the policy page: Microsoft 365 Copilot Chat must be available to the intended users.

## Governance guidance

### Before rollout

- Decide whether to allow Writing Assistance, then plan to set the ComposeInlineEnabled policy (Commercial Writing in Group Policy) to match.
- Ask your Edge administrator whether InlineComposeEnabled, the name used in MC1146821, appears in your Edge policy templates, and test which policy actually switches the feature off.
- Review Purview Endpoint DLP rules that block copy, print, download or upload on sensitive sites, because the notice says Writing Assistance does not work where DLP restricts Copilot access to page content.
- Confirm devices run Edge 115 or later on Windows or macOS.

### At rollout

- Tell users that the feature works only when signed in with a Microsoft Entra account and appears in the right-click menu on editable text.
- Check the Edge management service Copilot tab setting AI-generated text and editing and assign it through a configuration policy if you use that service; treat it as a separate control until Microsoft confirms it governs this feature.

### After rollout

- Watch Message center and the roadmap item for further timeline changes to MC1146821.
- Compare service desk reports of the option appearing or missing with policy and DLP state.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use the Commercial Writing features (Rewrite) in Edge</strong><br><small>User</small><br><small class="controls__note">GP name: Commercial Writing. Per profile; Entra accounts only. MC1146821 names InlineComposeEnabled instead; the mapping is unconfirmed.</small></td><td data-label="Admin UI"><strong>Group Policy (Microsoft Edge ADMX)</strong><br>Administrative Templates › Microsoft Edge <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value ComposeInlineEnabled (REG_DWORD; 0x00000000 = disabled); macOS preference key ComposeInlineEnabled</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The InlineComposeEnabled policy named in MC1146821</strong><br><small class="controls__note">Named in Microsoft's notice only; no Learn page documents it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Edge management service setting for AI-generated text and editing</strong><br><small class="controls__note">The page does not name Rewrite, Writing Assistance or either policy. Assigned through a new or existing configuration policy.</small></td><td data-label="Admin UI"><strong>Microsoft Edge management service</strong><br>Copilot › AI-generated text and editing <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pages where DLP stops the writing features working (Endpoint DLP sensitive service domain groups)</strong><br><small>Tenant</small><br><small class="controls__note">General control. The blocking settings are listed for Copilot Chat in the Edge sidepane; Microsoft has not confirmed they cover Writing Assistance.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Settings › Data Loss Prevention › Endpoint DLP settings › Browser and domain restrictions to sensitive data › Sensitive service domain groups <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-cloud-apps-services" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The ComposeInlineEnabled page gives three outcomes: enabled, eligible users can use the features and cannot turn Commercial Writing off in Edge settings; not configured, the features are available by default and users can turn them off using 'Collaborate with Copilot as you write on the web'; disabled, users cannot use them. It is per profile and can be mandatory but not recommended.

Microsoft's notice names InlineComposeEnabled, which no Learn page documents at the time of writing (November 2026), and Learn documents ComposeInlineEnabled. The table therefore records both and does not treat them as one setting.

The Edge management service page lists AI-generated text and editing but does not name Rewrite, Writing Assistance or either policy. No API or PowerShell surface for it appears in Microsoft Learn at the time of writing. The DLP row is a general control: the policy page says the features are unavailable where DLP blocks access, but the listed blocking settings are documented for Copilot Chat in the Edge sidepane. Microsoft Learn documents no PowerShell equivalent for configuring sensitive service domain groups at the time of writing (November 2026).

## Open questions

- Is InlineComposeEnabled in MC1146821 the same setting as the documented ComposeInlineEnabled policy, or a separate control? Watch Message center and the Edge policy reference.
- Will the late January 2027 rollout hold? Watch MC1146821 and the roadmap.
- Will Microsoft publish a separate meter or price for Writing Assistance with enterprise data protection? Watch the ComposeInlineEnabled Learn page and Message center.
- Which DLP settings block Writing Assistance specifically, as opposed to Copilot Chat in the Edge sidepane? Watch the Learn page on Copilot Chat access to page content.

<!-- rationale
risk: Medium. Microsoft's notice says the feature is enabled by default for Edge for Business users and sends text to Microsoft 365 Copilot Chat; an Edge policy and DLP can limit it, but both need setting.
cost: Low. The writing features need access to Microsoft 365 Copilot Chat, which requires an eligible Microsoft 365 subscription and no additional Microsoft Copilot license for eligible users; the cost shown is admin time.
impact: High. Microsoft's notice says Writing Assistance is enabled by default for Edge for Business users, so eligible users will see a new option in the right-click menu on editable text.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: With the policy unconfigured, users can turn Commercial Writing off using 'Collaborate with Copilot as you write on the web' in Edge settings. | Found: Users can turn Commercial Writing off using 'Collaborate with Copilot as you write on the web' in Microsoft Edge settings. | Fix: Append: "Microsoft's Edge privacy page instead names the user toggle 'Draft with Microsoft 365 Copilot as you write on the web' under Settings > Languages > Writing assistance (https://learn.microsoft.com/legal/microsoft-edge/privacy#compose); the two pages differ on this label." Keep the policy-reference wording attributed to that reference. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled
-->
