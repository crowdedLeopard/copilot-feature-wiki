---
title: "Microsoft Edge: Rewrite by Copilot gains enterprise data protection"
slug: "microsoft-edge-rewrite-by-copilot-in-edge-is-being-upgraded-to-include-enterprise-data-pro"
roadmapId: 420335
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft plans to give Rewrite by Copilot in Edge enterprise data protection for Microsoft Entra ID users. The roadmap says release is paused with a January CY2027 target; admins should plan comms and check the Edge policy."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Microsoft has not published a licence or meter for this change. The ComposeInlineEnabled policy page says eligible users with access to Microsoft 365 Copilot Chat can use the writing features."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["copilot-chat","microsoft-edge","enterprise-data-protection","entra-id","privacy","dlp","policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 420335"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=420335"
    kind: "roadmap"
  - title: "ComposeInlineEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled"
    kind: "learn"
  - title: "Configuring Copilot Features"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    kind: "learn"
  - title: "Enterprise data protection in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/enterprise-data-protection"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Beta Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-beta-channel"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/edge"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search"]
controls:
  - governs: "Whether users can use Rewrite and the other Commercial Writing features in Edge"
    scope: "user"
    ui:
      surface: "Group Policy (Microsoft Edge ADMX)"
      path: "Administrative Templates > Microsoft Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value ComposeInlineEnabled (REG_DWORD; 0x00000000 = disabled); macOS preference key ComposeInlineEnabled"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled"
    note: "Policy name: Commercial Writing (GP name). Per profile, Entra accounts only. Microsoft has not confirmed it applies to the enterprise data protection upgrade."
  - governs: "Edge setting for AI-generated text and editing"
    scope: "group"
    ui:
      surface: "Microsoft Edge management service"
      path: "Copilot > AI-generated text and editing"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    api: null
    note: "The page does not name Rewrite or ComposeInlineEnabled for this setting. Assigned through a new or existing configuration policy."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item; records the March 20, 2026 pause and the Edge policy that governs Rewrite."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 45
  unconfirmed: 2
  contradicted: 4
  attempts: 1
---

## What's changing

Microsoft plans to add enterprise data protection to Rewrite by Copilot in Microsoft Edge. Rewrite lets users edit typed text for tone, format and length within an open page. The roadmap item states that, once Rewrite is available, users signed in with a Microsoft Entra ID will have enterprise data protection when using it.

Microsoft Learn documents a Rewrite-style capability already. The ComposeInlineEnabled policy page says it lets eligible users with access to Microsoft 365 Copilot Chat draft, rewrite and dictate text in web editing fields in Microsoft Edge, and that it requires a Microsoft Entra account. That page does not mention the enterprise data protection upgrade or the pause, so it is not clear whether it describes the feature this roadmap item covers. A September 17, 2025 Edge Beta release note (version 141.0.3537.25) listed the same upgrade as a controlled rollout.

The roadmap record shows status In development, a target of January CY2027, release phase General Availability, Web platform and the Worldwide (Standard Multi-Tenant) cloud. It also carries an update dated March 20, 2026: Microsoft paused release of the feature temporarily and said it will announce new timelines. Treat January CY2027 as a target only; no replacement timeline appears in the record.

## Why it matters

For a service owner, this is a data-handling change more than a new feature. Rewrite is powered by Microsoft 365 Copilot Chat, so text typed into web editing fields reaches Copilot, and enterprise data protection is the commitment set that governs how Microsoft treats it. Microsoft's enterprise data protection page says prompts and responses are protected by the same contractual terms that cover Exchange email and SharePoint files, and that prompts and responses are not used to train foundation models.

If nobody acts, users will meet a Rewrite option with no guidance from you. Decide now whether Rewrite is allowed in your tenant, since the Edge policy is already documented, and brief users before the target date.

## Risk assessment

**Data exposure**

- Rewrite is powered by Microsoft 365 Copilot Chat, so the text a user edits reaches Copilot. Enterprise data protection is the control the roadmap says will cover that traffic; the Learn pages read do not describe how it applies to Rewrite specifically, so confirm it before relying on it.
- Per the ComposeInlineEnabled page, the writing features are not available when data loss prevention (DLP) policies block access to the page, so existing DLP policies that block a page also stop Rewrite there.

**Security & identity**

- The enterprise protections apply to Microsoft Entra accounts only: the policy page says the features require a Microsoft Entra account and are not available with personal Microsoft accounts.

**Autonomy & actions**

- The roadmap describes Rewrite as editing text a user has typed, for tone, format and length. No autonomous action is described.

**Change & support**

- The roadmap says release is paused with no new timeline, so expect the feature to appear late or in stages. Expect questions about why the option shows for some users and not others.
    - The policy page says that when ComposeInlineEnabled is not configured the writing features are available by default, subject to feature availability, so users may already see Rewrite-style options before this upgrade lands.

## Cost and licensing

Microsoft has not published a licence requirement or meter for this change. The roadmap record names none, and the ComposeInlineEnabled policy page says the writing features are for eligible users with access to Microsoft 365 Copilot Chat; it adds that users licensed for Microsoft 365 Copilot (Premium) can also use WorkIQ grounding when available.

No meter, charge or cap for Rewrite is documented at the time of writing (November 2026). The known cost is admin time: reviewing the Edge policy, checking DLP coverage and communicating with users.

## Scope

Users: the roadmap says users signed in with a Microsoft Entra ID. Personal Microsoft accounts are out of scope for the enterprise protections.

Cloud and platform: the record lists Worldwide (Standard Multi-Tenant) and Web only. The ComposeInlineEnabled page lists support from version 115 on Windows and macOS, and no support on Android or iOS.

Rollout: status In development with a January CY2027 target, and release paused according to the March 20, 2026 update. The default state is not stated for this change.

## Governance guidance

### Before rollout

- Decide whether Rewrite should be allowed, and record the decision with the Edge ComposeInlineEnabled policy (Commercial Writing in Group Policy).
- Check which pages your DLP policies block, because Rewrite is unavailable on them.
- Confirm which Edge versions your devices run, as the policy is listed for version 115 and later on Windows and macOS.

### At rollout

- Tell users that Rewrite works only when signed in with a Microsoft Entra account, and that personal accounts are excluded.
- Set the policy to Enabled or Disabled in the Edge management service or Group Policy to match your decision.

### After rollout

- Watch the roadmap item and Message center for a new release timeline, since release is paused.
- Review help desk reports of Rewrite appearing or missing, and compare them with the policy state.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use Rewrite and the other Commercial Writing features in Edge</strong><br><small>User</small><br><small class="controls__note">Policy name: Commercial Writing (GP name). Per profile, Entra accounts only. Microsoft has not confirmed it applies to the enterprise data protection upgrade.</small></td><td data-label="Admin UI"><strong>Group Policy (Microsoft Edge ADMX)</strong><br>Administrative Templates › Microsoft Edge <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value ComposeInlineEnabled (REG_DWORD; 0x00000000 = disabled); macOS preference key ComposeInlineEnabled</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Edge setting for AI-generated text and editing</strong><br><small>Group</small><br><small class="controls__note">The page does not name Rewrite or ComposeInlineEnabled for this setting. Assigned through a new or existing configuration policy.</small></td><td data-label="Admin UI"><strong>Microsoft Edge management service</strong><br>Copilot › AI-generated text and editing <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The ComposeInlineEnabled policy page states three outcomes: if enabled, eligible users can use the features and cannot turn Commercial Writing off in Edge settings; if not configured, the features are available by default and users can turn them off using 'Collaborate with Copilot as you write on the web'; if disabled, users cannot use them. The policy is per profile and can be mandatory but not recommended.

The Edge management service page lists a setting named AI-generated text and editing but does not name Rewrite or the ComposeInlineEnabled policy, so Microsoft has not confirmed that it governs this feature. No API or PowerShell surface for it is documented at the time of writing (November 2026). DLP is a general control: the policy page says the features are unavailable where DLP blocks the page, but its configuration path was not read for this feature.

## Open questions

- When will Microsoft publish a new release timeline for the paused Rewrite upgrade? Watch the roadmap item and Message center.
- Does the ComposeInlineEnabled policy (Commercial Writing) govern the enterprise-data-protection version of Rewrite described by the roadmap, or is it a separate feature?
- Which licence, if any, will Rewrite with enterprise data protection require, and will it be metered? Microsoft has not published this.
- Will the feature be on or off by default on arrival, and will existing Rewrite users see any change? The record does not say.

<!-- rationale
risk: Low. The change adds data protection to a feature that sends typed text to Copilot; it does not widen data access, and an Edge policy (ComposeInlineEnabled) can switch Rewrite off.
cost: Low. The only cost the sources show is admin time to review policy and tell users; the licence for this change is not yet published.
impact: Medium. Anyone signed in to Edge with a Microsoft Entra ID can see a Rewrite option on editable text, so many users could notice it, though each use is user-initiated.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] summary; Risk assessment: Change & support; Scope; Open questions / date: Release remains paused with no new timeline available to administrators. | Found: Updated November 9, 2026: We have updated the timeline. ... General Availability (Worldwide): We will begin rolling late January 2027 ... and expect to complete rollout by late January 2027 | Fix: Report both sources: the roadmap retains its March pause and January CY2027 target, but MC1146821, updated November 9, 2026, expects Worldwide rollout to begin and complete in late January 2027. Replace the stale pause-only summary, rollout guidance and timeline question, and cite https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1146821.
- [contradicted, blocker] front matter: defaultState; Scope; Open questions / default: The arrival default for this change is unknown. | Found: Writing Assistance will be enabled by default for Edge for Business users. | Fix: Set defaultState to on. State that MC1146821 says Writing Assistance will be enabled by default for Edge for Business users; replace the unknown-default statements and cite the supplied post.
- [supported, minor] controls[1].scope; Governance controls table / applicability: Edge management service configuration policies can be assigned through groups. | Found: These configurations are stored in the cloud and the settings can be applied to a user's browser through group assignment or group policy. | Fix: Add https://learn.microsoft.com/deployedge/microsoft-edge-management-service to sources to substantiate group assignment. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-management-service
- [unsupported, blocker] Governance guidance: At rollout / applicability: Setting the policy to Enabled or Disabled in the Edge management service governs Rewrite. | Found: Searched: Edge management service AI-generated text and editing API PowerShell configuration policy; Edge management AI-generated text Graph. Read Configuring Copilot Features and ComposeInlineEnabled; the former never maps its setting to Rewrite or ComposeInlineEnabled. | Fix: Restrict the Rewrite instruction to the documented ComposeInlineEnabled Group Policy or registry control. Retain the management-service setting only as a separately documented setting whose Rewrite mapping is unconfirmed, matching the table's existing caveat.
- [supported, minor] Why it matters; Risk assessment: Data exposure; rationale: risk / behaviour: Text submitted to Rewrite is sent to Microsoft for processing. | Found: Text that you've highlighted or inputted for Compose is sent to Microsoft after you click the Rewrite or Generate button, not while you're selecting text. | Fix: Add https://learn.microsoft.com/legal/microsoft-edge/privacy#compose to sources and clarify that submission occurs after Rewrite or Generate is invoked, rather than suggesting all typing is transmitted. | Source: https://learn.microsoft.com/legal/microsoft-edge/privacy#compose
- [unsupported, minor] rationale: risk / behaviour: The change does not widen data access. | Found: Searched: Rewrite Edge enterprise data protection data access. Read roadmap, ComposeInlineEnabled, enterprise data protection, Manage Copilot Chat and Beta release-note passage; none establishes an unchanged data-access boundary for the upgrade. | Fix: Remove 'it does not widen data access'. Explain the low-risk judgement in terms of the planned additional protection and documented disabling control without asserting an undocumented data-access comparison.
- [contradicted, minor] rationale: impact / availability: Anyone signed in to Edge with a Microsoft Entra ID can see Rewrite on editable text. | Found: Enables eligible users with access to Microsoft 365 Copilot Chat ... subject to feature availability and other applicable policies. | Fix: Replace 'Anyone signed in to Edge with a Microsoft Entra ID' with 'Eligible Edge for Business users with access to Copilot Chat, subject to rollout, policy and DLP restrictions'. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/composeinlineenabled
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The governance checklist asks administrators to check DLP policies, but the controls table has no DLP row. | Found: Check which pages your DLP policies block, because Rewrite is unavailable on them. ... Controls table: Commercial Writing; AI-generated text and editing. | Fix: Add a DLP control row covering the page-content restriction. Research and cite its actual configuration surface and automation equivalent before populating the row; do not use null merely because the writer did not read the configuration path.
- [supported, minor] controls[0].note; What's changing; Open questions / absence: The sources do not explicitly confirm that the policy named ComposeInlineEnabled governs the specific enterprise-data-protection upgrade. | Found: Searched: Edge Rewrite enterprise data protection default enabled InlineComposeEnabled ComposeInlineEnabled. Read policy, Beta upgrade note and MC1146821. The notice identifies this roadmap item but names InlineComposeEnabled, unlike the policy reference's ComposeInlineEnabled. | Fix: Replace the broad uncertainty with the precise discrepancy: MC1146821 explicitly associates Writing Assistance with this roadmap item and names InlineComposeEnabled as its control, while the Learn reference documents ComposeInlineEnabled for Rewrite. Cite the supplied notice and do not silently treat the two identifiers as interchangeable.
-->
