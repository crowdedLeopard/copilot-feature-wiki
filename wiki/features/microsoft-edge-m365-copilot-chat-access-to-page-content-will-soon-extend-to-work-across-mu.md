---
title: "Microsoft Edge: Microsoft 365 Copilot Chat answers questions across multiple open tabs"
slug: "microsoft-edge-m365-copilot-chat-access-to-page-content-will-soon-extend-to-work-across-mu"
roadmapId: 496364
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat in the Edge side pane extends page access from the open page to the user's open window. Access is on by default outside the EU unless the page-context policy is set, so admins should confirm that setting now."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "none"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview says Copilot Chat (Basic) is included with eligible Microsoft 365 licences and lists Copilot Chat in Edge among its entry points. Nothing licence-specific to multi-tab context is published."
audiences: ["m365-admin","security","compliance"]
tags: ["microsoft-edge","edge-for-business","copilot-chat","dlp","group-policy","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 496364"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=496364"
    kind: "roadmap"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "Release notes for Microsoft Edge Beta Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-beta-channel"
    kind: "learn"
  - title: "Microsoft 365 Copilot Chat in Edge and Access to Page Content"
    url: "https://learn.microsoft.com/deployedge/edge-learnmore-copilot-page-summary-results"
    kind: "learn"
  - title: "EdgeEntraCopilotPageContext"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    kind: "learn"
  - title: "Get started with configuration policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    kind: "learn"
  - title: "Configuring Copilot Features"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    kind: "learn"
  - title: "Configure the Copilot new tab page"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
videos: []
related: ["microsoft-edge-ground-m365-copilot-chat-in-edge-for-business","microsoft-edge-v-149-unifying-copilot-chat-policy-controls","endpoint-dlp","microsoft-edge-auto-open-copilot-side-pane-for-outlook-links"]
controls:
  - governs: "Whether Copilot in the Edge side pane can access page content, browsing history and video transcripts"
    scope: "user"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EdgeEntraCopilotPageContext (REG_DWORD), 0x00000000 disables, 0x00000001 enables"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    note: "Mandatory only. Microsoft Entra profiles on Windows and macOS 130+; macOS preference key EdgeEntraCopilotPageContext. Disabling also turns off M365LinksAutoOpenCopilotEnabled."
  - governs: "Whether Microsoft 365 Copilot Chat may use browser context such as page content, set from the cloud"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > Copilot > Access to browser context"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    api: null
    note: "Microsoft Edge management service; needs the Microsoft Edge Administrator role; not available to GCC plans. Conflicting GPO or MDM policy on the device overrides it."
  - governs: "Separate switch for multi-tab context, apart from single-page access"
    scope: "user"
    ui: null
    api: null
    note: "Microsoft Learn documents no such policy at the time of writing (November 2026); the page-context policy covers page content as a whole."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-16T23:00:10"
changes:
  - date: "2026-11-27"
    note: "New briefing: Copilot Chat in Edge extends page access from the open page to the user's open window, governed by the EdgeEntraCopilotPageContext policy."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 74 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 72
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "6b73c8efa5256202aef4dc0b6d96d2f3"
---

## What's changing

Microsoft 365 Copilot Chat in Microsoft Edge can answer contextual questions about a user's open window, not only the page currently in view. The roadmap item says this extends the existing capability, which can only access the open page, and that all existing user settings, policies and DLP (data loss prevention) considerations will continue to be respected.

Microsoft announced the change in the Edge Beta release notes for version 146.0.3856.13 (February 19, 2026) and the Edge Stable release notes for version 146.0.3856.59 (March 13, 2026), both marking it as a controlled feature rollout: users who do not see it yet should check back as the rollout continues. The Stable notes for 146.0.3856.72 (March 20, 2026) still describe it as something Copilot Chat "will soon be able" to do.

The two Microsoft sources do not yet agree. The Learn page [Microsoft 365 Copilot Chat in Edge and Access to Page Content](https://learn.microsoft.com/deployedge/edge-learnmore-copilot-page-summary-results) still describes contextual grounding as applying to "the tab currently being viewed by the user", and says it works only in the Edge side pane. It lists page access as supported for intranet sites such as SharePoint (but not Office documents embedded in SharePoint), public sites, Outlook Web App and PDFs, and not supported for Office documents.

The roadmap record gives the status as Launched, General Availability, with a target of February CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the Web platform. A separate briefing covers [grounding in open tabs and YouTube videos](/features/microsoft-edge-ground-m365-copilot-chat-in-edge-for-business/).

## Why it matters

One prompt can now pull in content from several tabs at once: an intranet page, an Outlook Web App message and a PDF open side by side can all feed the same answer. The decision an organisation already took about single-page summarisation now also decides this wider access, because Microsoft says existing policies continue to apply and the `EdgeEntraCopilotPageContext` policy covers page content for contextual queries.

If nobody acts, the policy's own defaults decide: access is enabled in non-EU regions, disabled in EU regions, and users can turn it on or off in Edge settings. Tenants that left the policy unconfigured because users summarised one page at a time should look at that choice again now that the scope is the whole window.

## Risk assessment

**Data exposure**
- Copilot Chat can read content from several open tabs in one question, including SharePoint intranet pages, Outlook Web App and PDFs, so more organisational content enters a single conversation. Setting `EdgeEntraCopilotPageContext` to disabled stops Copilot accessing page content, browsing history and video transcripts.
- The policy page says Copilot can't access page content on pages protected by DLP policies, even when the policy is enabled. Microsoft lists the Purview Endpoint DLP, Purview DLP and Intune MAM settings that block it; sensitive web apps outside those policies stay readable.

**Security & identity**
- The policy applies only to users signed in to Edge with a Microsoft Entra account and does not apply to profiles signed in with a Microsoft account.

**Autonomy & actions**
- No change: the policy page describes Copilot reading page content when users start contextual queries; Microsoft describes no action taken on the pages.

**Change & support**
- Because this is a controlled feature rollout, users in the same tenant may see multi-tab answers at different times, which can generate support questions.
- Where the policy is unconfigured, each user's Edge setting decides, so behaviour can differ between users; disabling the policy also disables the `M365LinksAutoOpenCopilotEnabled` feature.

## Cost and licensing

Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) says Copilot Chat (Basic) is the standalone baseline experience included with eligible Microsoft 365 licences, lists Copilot Chat in Edge as one way to reach it, and says it can be used to summarise website content and some document types displayed in Edge. The same page says some features are subject to fair use limits.

No meter, price or licence specific to multi-tab context is published. The indirect cost is admin time to decide and deploy the page-context policy and to brief users.

## Scope

- **Users:** people using Microsoft 365 Copilot Chat in the Edge for Business side pane while signed in with a Microsoft Entra account. The Learn page says contextual grounding applies only to Copilot in the Edge sidebar, not to desktop or full-screen instances.
- **Platforms:** the roadmap lists Web. The `EdgeEntraCopilotPageContext` policy is supported on Windows and macOS from version 130 and not on Android or iOS.
- **Clouds:** the roadmap lists Worldwide (Standard Multi-Tenant). The Microsoft Edge management service is not available to customers with GCC plans.
- **Rollout:** a controlled feature rollout from Edge 146, per the Edge release notes.
- **Roles:** the Microsoft Edge management service in the Microsoft 365 admin center requires the Microsoft Edge Administrator role.

## Governance guidance

### Before rollout
- Decide whether Copilot Chat in Edge should read page content at all, and set `EdgeEntraCopilotPageContext` as a mandatory policy through Group Policy or the registry rather than leaving it to each user.
- Check whether the **Access to browser context** setting is already configured in the Microsoft Edge management service, and confirm it does not conflict with device Group Policy, which takes precedence by default.
- Brief the helpdesk that multi-tab answers arrive through a controlled rollout and may appear for some users before others.

### At rollout
- Test on a pilot device by opening several tabs, including an Outlook Web App message and a SharePoint page, and asking Copilot Chat in the side pane a question that spans them.
- Confirm in edge://policy on a pilot device that `EdgeEntraCopilotPageContext` shows the value you deployed.

### After rollout
- Revisit the policy for EU-region users, where access is off by default but users can turn it on in Edge settings unless the policy is set.
- Re-check the Edge release notes and the page-content Learn page for an update describing multi-tab behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in the Edge side pane can access page content, browsing history and video transcripts</strong><br><small>User</small><br><small class="controls__note">Mandatory only. Microsoft Entra profiles on Windows and macOS 130+; macOS preference key EdgeEntraCopilotPageContext. Disabling also turns off M365LinksAutoOpenCopilotEnabled.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EdgeEntraCopilotPageContext (REG_DWORD), 0x00000000 disables, 0x00000001 enables</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft 365 Copilot Chat may use browser context such as page content, set from the cloud</strong><br><small>Group</small><br><small class="controls__note">Microsoft Edge management service; needs the Microsoft Edge Administrator role; not available to GCC plans. Conflicting GPO or MDM policy on the device overrides it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Copilot › Access to browser context <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for multi-tab context, apart from single-page access</strong><br><small>User</small><br><small class="controls__note">Microsoft Learn documents no such policy at the time of writing (November 2026); the page-context policy covers page content as a whole.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

`EdgeEntraCopilotPageContext` is the documented on/off switch for Copilot's page access; it can be mandatory but not recommended, refreshes dynamically and applies per profile. The Edge management service page says policies it applies are overridden by a conflicting Group Policy Object or MDM policy on the device, unless `EdgeManagementPolicyOverridesPlatformPolicy` is set through the registry. DLP is a separate boundary: the [page-content Learn page](https://learn.microsoft.com/deployedge/edge-learnmore-copilot-page-summary-results) lists the Purview Endpoint DLP sensitive service domain group, Purview DLP and Intune MAM settings under which Copilot is blocked from page content. Microsoft Learn documents no separate Edge policy that allows single-page access while blocking multi-tab context at the time of writing (November 2026).

## Open questions

- How many tabs, and which tabs in the window, does Copilot Chat read for one question, and does it read tabs the user has not looked at? Watch the page-content Learn page.
- When will Microsoft update the page-content Learn page, which still describes grounding in the tab currently being viewed, to cover multi-tab context?
- Will Microsoft add a separate policy to allow single-page access while blocking multi-tab context? Watch the Edge policy reference and release notes.
- Does a DLP block on one tab stop Copilot reading only that tab, or the whole multi-tab question?

<!-- rationale
risk: Medium. Copilot can draw on several open tabs in one question, widening what enters a chat, but the existing EdgeEntraCopilotPageContext policy and DLP protections still govern page access.
cost: None. Microsoft's Copilot overview says Copilot Chat (Basic) is included with eligible Microsoft 365 licences and lists Copilot Chat in Edge as a way to reach it; no meter for multi-tab context is published.
impact: High. Every Edge for Business user with Copilot Chat in the side pane gets wider page context where the policy is left unconfigured outside the EU.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters; Risk assessment: Data exposure / behaviour: A single question can combine an intranet page, an Outlook Web App message and a PDF from different tabs into the same answer. | Found: Searched: 'Microsoft 365 Copilot Chat Edge multiple open tabs contextual question SharePoint Outlook PDFs actions DLP unprotected pages'; read Edge 146 notes, the page-content table and Zero Trust summarization excerpt. No specific mixed-content, single-answer scenario found. | Fix: Replace the first sentence of Why it matters with 'Copilot Chat extends contextual questions from the open page to the user's open window.' In the first Data exposure bullet, replace 'including SharePoint intranet pages, Outlook Web App and PDFs' with 'where page access is permitted'. Keep the separately attributed supported-document table description.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Scope: Roles; Governance controls table / role: Access to the Edge management experience requires the Microsoft Edge Administrator role. | Found: You must be a Microsoft Edge Administrator to access the experience in Microsoft 365 Admin Center | Fix: Replace the role wording with 'Use an account with Microsoft Edge Administrator or Global Administrator privileges.' The also-cited https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page says to sign in with 'Global admin or Edge admin privileges'. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-management-service
- [supported, minor] Scope: Rollout / availability: The feature is described as a controlled rollout from Edge 146. | Found: Version 146.0.3856.59: March 13, 2026 (Stable) Microsoft 365 Copilot Chat support for multiple open tabs This is a controlled feature rollout. | Fix: Replace the rollout bullet with 'The Edge 146 Stable release notes describe a controlled feature rollout.' This avoids implying a minimum version for all channels: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-beta-channel already lists the same controlled-rollout announcement under Beta 143.0.3650.7, November 6, 2025. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel
- [supported, minor] Risk assessment: Data exposure / behaviour: Sensitive web apps outside the described protection policies can remain readable by Copilot. | Found: PDFs or sites for internal apps and services that are not protected by Microsoft Purview DLP policies, MAM policies, or MDM policies | Fix: Replace 'sensitive web apps outside those policies stay readable' with 'with page access enabled, internal app sites not protected by Microsoft Purview DLP, MAM or MDM policies can be summarized'. Cite https://learn.microsoft.com/security/zero-trust/copilots/zero-trust-microsoft-copilot, which supplies that premise. | Source: https://learn.microsoft.com/security/zero-trust/copilots/zero-trust-microsoft-copilot
- [supported, minor] Governance guidance: At rollout / admin-path: An administrator can verify the deployed EdgeEntraCopilotPageContext value at edge://policy. | Found: On a target client device, open Microsoft Edge and go to edge://policy to see all policies that are applied. | Fix: Add https://learn.microsoft.com/deployedge/configure-microsoft-edge to sources for the general policy-verification instruction; the currently cited new-tab-page page demonstrates verification specifically for CopilotNewTabPageEnabled. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
- [contradicted, minor] rationale: impact / behaviour: Every Edge for Business user with Copilot Chat in the side pane gets wider page context when the policy is unconfigured outside the EU. | Found: If you don't configure this policy: - Access is enabled by default in non-EU regions. - Access is disabled by default in EU regions. - Users can turn this setting on or off in Microsoft Edge settings. | Fix: Replace the impact rationale with 'High. Edge for Business users with page access enabled get wider page context in Copilot Chat in the side pane; access is on by default outside the EU when the policy is unconfigured.' Existing user settings remain respected, so an unconfigured policy does not mean every user has access. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext
-->
