---
title: "Microsoft Edge: Microsoft 365 Copilot Chat answers from open tabs and YouTube videos"
slug: "microsoft-edge-ground-m365-copilot-chat-in-edge-for-business"
roadmapId: 499423
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat in the Edge for Business side pane can now answer from a user's open tabs and YouTube videos. Page access is on by default outside the EU; admins should set the page-context policy before users rely on it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "none"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview says Copilot Chat (Basic) is included with eligible Microsoft 365 licences and lists Copilot Chat in Edge among its entry points. Nothing licence-specific to multi-tab or YouTube grounding is published."
audiences: ["m365-admin","security","compliance"]
tags: ["microsoft-edge","edge-for-business","copilot-chat","dlp","group-policy","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 499423"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499423"
    kind: "roadmap"
  - title: "EdgeEntraCopilotPageContext"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "Microsoft 365 Copilot Chat in Edge and Access to Page Content"
    url: "https://learn.microsoft.com/deployedge/edge-learnmore-copilot-page-summary-results"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Configuring Copilot Features"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    kind: "learn"
  - title: "Get started with configuration policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    kind: "learn"
  - title: "Configure Microsoft Edge policy settings on Windows devices"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
  - title: "Microsoft365CopilotChatIconEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled"
    kind: "learn"
videos: []
related: ["microsoft-edge-v-149-unifying-copilot-chat-policy-controls","microsoft-edge-ask-copilot-about-an-image","microsoft-edge-auto-open-copilot-side-pane-for-outlook-links","microsoft-purview-data-loss-prevention-expanded-inline-protection-for-unmanaged-apps-in-ed"]
controls:
  - governs: "Whether Copilot in the Edge side pane can read page content, browsing history and video transcripts"
    scope: "user"
    ui:
      surface: "Group Policy Editor"
      path: "Administrative Templates > Microsoft Edge > Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EdgeEntraCopilotPageContext (REG_DWORD), 0x00000000 disables, 0x00000001 enables"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    note: "Mandatory only; under Computer Configuration or User Configuration > Policies. Applies to Microsoft Entra profiles on Windows and macOS 130+. Disabling also turns off M365LinksAutoOpenCopilotEnabled."
  - governs: "Whether Microsoft 365 Copilot Chat may use browser context such as page content, set from the cloud"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > Copilot > Access to browser context"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    api: null
    note: "Microsoft Edge management service; not available to GCC plans. Device GPO or MDM policies override conflicting Edge management service policies by default; EdgeManagementPolicyOverridesPlatformPolicy can reverse that precedence."
  - governs: "Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar"
    scope: "user"
    ui:
      surface: "Group Policy Editor"
      path: "Computer Configuration or User Configuration > Policies > Administrative Templates > Microsoft Edge > Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value Microsoft365CopilotChatIconEnabled (REG_DWORD), 0x00000000 hides the icon"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled"
    note: "Controls the toolbar icon only; its page does not describe it as controlling page-content access. Windows and macOS 139+."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-27"
    note: "New briefing: Copilot Chat in Edge for Business grounds answers in open tabs and YouTube videos, governed by the EdgeEntraCopilotPageContext policy."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: multi-tab grounding described as multiple open tabs, not every tab; Edge management service precedence now notes EdgeManagementPolicyOverridesPlatformPolicy; toolbar-icon path completed; DLP statement attributed to the policy reference."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ab09e9410574769d05ac8813b612fc7f"
---

## What's changing

Microsoft 365 Copilot Chat in the Microsoft Edge for Business side pane can ground its answers in the user's open browser tabs and in YouTube videos, rather than only the page currently in view. The roadmap item describes it as getting "relevant answers and insights about your open browser tabs and YouTube videos directly from the Edge side pane".

Microsoft's Edge Stable release notes for version 146.0.3856.72 (March 20, 2026) say Copilot Chat in Edge "will soon be able to answer contextual questions about a user's open window", extending the existing capability that can only access the open page, and that existing user settings, policies and DLP (data loss prevention) considerations continue to be respected. The Edge 153.0.4234.32 release notes (September 10, 2026) add a **Summarize** toggle to the YouTube video hover overlay for eligible Edge for Business users, which opens Copilot Chat to summarise the video; its availability follows the organisation's Copilot page-context policy, user consent and DLP protections.

Access is governed by the existing `EdgeEntraCopilotPageContext` policy, which covers page content, browsing history and video transcripts. If the policy is not configured, access is enabled by default in non-EU regions, disabled by default in EU regions, and users can turn it on or off in Edge settings. Microsoft documents page-content access as supported for intranet sites such as SharePoint, public sites, Outlook Web App and PDFs, and not supported for Office documents or Office documents embedded in SharePoint.

The roadmap item is Launched, General Availability, with a target of October CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the Web platform.

## Why it matters

This widens what one prompt can send to Copilot: a user with an intranet page, an Outlook Web App message and a PDF open in separate tabs can ask one question across all of them. Outside the EU this works on arrival unless the page-context policy has been set, so the organisation's existing decision about single-page summarisation now also decides multi-tab and video grounding. Tenants that left the policy unconfigured on the assumption that users summarise one page at a time should revisit that choice.

In EU regions access is off by default but each user can turn it on in Edge settings unless the policy is set, so the outcome there depends on users. Pages covered by DLP policies are excluded even when the policy allows access, which makes DLP coverage of sensitive web apps the main data boundary beyond the on/off policy.

## Risk assessment

**Data exposure**
- Copilot can read content from several open tabs at once, including SharePoint intranet pages, Outlook Web App and PDFs, which raises how much organisational content enters a single Copilot Chat conversation. `EdgeEntraCopilotPageContext` set to disabled stops access to page content, browsing history and video transcripts.
- Pages protected by DLP policies are not read even when the policy is enabled, so sensitive web apps without DLP coverage remain readable.

**Security & identity**
- The policy applies only to users signed in to Edge with a Microsoft Entra account; it does not apply to profiles signed in with a Microsoft account, so personal profiles on the same device fall outside it.

**Autonomy & actions**
- No change: Copilot reads tab content when the user starts a contextual query in the side pane or from Edge; Microsoft describes no action it takes on pages.

**Change & support**
- Users who switched off page access in Edge settings keep that choice unless the policy is set, so behaviour can differ between users; setting the policy as mandatory removes the user toggle.
- Disabling the policy also disables the `M365LinksAutoOpenCopilotEnabled` feature.

## Cost and licensing

Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) says Copilot Chat (Basic) is the baseline experience included with eligible Microsoft 365 licences, lists Copilot Chat in Edge as one way to reach it, and says it can be used to summarise website content and some document types displayed in Edge. The `Microsoft365CopilotChatIconEnabled` policy page describes the Edge toolbar icon as shown for Microsoft 365 Copilot licensed and unlicensed users.

The same overview says some Copilot Chat features are subject to fair use limits. No meter or price specific to multi-tab or YouTube grounding is published. The indirect cost is admin time to decide and deploy the page-context policy.

## Scope

- **Users:** people signed in to Microsoft Edge for Business with a Microsoft Entra account and using Copilot in the side pane; the policy does not apply to Microsoft account profiles.
- **Regions:** with the policy unconfigured, access is enabled by default in non-EU regions and disabled by default in EU regions.
- **Platforms:** the `EdgeEntraCopilotPageContext` policy is supported on Windows and macOS from version 130 and not supported on Android or iOS. The roadmap item lists Web.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant). The Microsoft Edge management service is currently not available to customers with GCC plans.
- **Roles:** the Microsoft Edge management service requires the Microsoft Edge Administrator role.
- **Out of scope:** Office documents, and Office documents embedded in SharePoint, are listed as not supported for page-content access.

## Governance guidance

### Before rollout
- Decide whether Copilot Chat in Edge may read open tabs, browsing history and video transcripts, and record the decision separately for EU and non-EU users, since the unconfigured default differs.
- Confirm who holds the Microsoft Edge Administrator role if you will use the Microsoft Edge management service.

### At rollout
- Set `EdgeEntraCopilotPageContext` through Group Policy, the registry or the Edge management service **Access to browser context** setting, as enabled or disabled, rather than leaving it to each user.
- Tell users that Copilot Chat in the side pane can now answer contextual questions across multiple open tabs and summarise YouTube videos, and which pages it will not read.

### After rollout
- Open `edge://policy` on a sample device to check that the policy value applied.
- Review the policy when Microsoft extends page-content support to further document types.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in the Edge side pane can read page content, browsing history and video transcripts</strong><br><small>User</small><br><small class="controls__note">Mandatory only; under Computer Configuration or User Configuration &gt; Policies. Applies to Microsoft Entra profiles on Windows and macOS 130+. Disabling also turns off M365LinksAutoOpenCopilotEnabled.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EdgeEntraCopilotPageContext (REG_DWORD), 0x00000000 disables, 0x00000001 enables</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft 365 Copilot Chat may use browser context such as page content, set from the cloud</strong><br><small>Group</small><br><small class="controls__note">Microsoft Edge management service; not available to GCC plans. Device GPO or MDM policies override conflicting Edge management service policies by default; EdgeManagementPolicyOverridesPlatformPolicy can reverse that precedence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Copilot › Access to browser context <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar</strong><br><small>User</small><br><small class="controls__note">Controls the toolbar icon only; its page does not describe it as controlling page-content access. Windows and macOS 139+.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Computer Configuration or User Configuration › Policies › Administrative Templates › Microsoft Edge › Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value Microsoft365CopilotChatIconEnabled (REG_DWORD), 0x00000000 hides the icon</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

`EdgeEntraCopilotPageContext` is the documented control for page content, browsing history and video transcripts in the side pane; Microsoft's release notes say the multi-tab capability and the YouTube Summarize toggle respect it. When it is not configured, users can change the setting in Edge settings. It applies only to Microsoft Entra profiles.

Device GPO or MDM policies override conflicting Edge management service policies by default; `EdgeManagementPolicyOverridesPlatformPolicy` can reverse that precedence. The Edge management service requires the Microsoft Edge Administrator role.

Hiding the toolbar icon with `Microsoft365CopilotChatIconEnabled` controls whether the icon shows; its page does not describe it as controlling page-content access.

The `EdgeEntraCopilotPageContext` reference says Copilot can't access page content on pages protected by DLP policies, even if the policy is enabled.

## Open questions

- Will Microsoft offer a setting that allows single-page summarisation while blocking grounding across all open tabs? Watch the Edge policy reference.
- How many open tabs, and how much content per tab, can one Copilot Chat prompt use? Watch the Edge release notes.
- Is YouTube transcript grounding treated differently from other video sites? Watch the `EdgeEntraCopilotPageContext` policy page.
- Will Office documents, currently not supported, become readable from open tabs? Watch the Copilot page-content support page.

<!-- rationale
risk: Medium. Copilot can read content from multiple open tabs, browsing history and video transcripts when a user asks, and this is enabled by default outside the EU; one Edge policy and DLP-protected pages limit it.
cost: None. Microsoft describes Copilot Chat, including Copilot Chat in Edge, as included with eligible Microsoft 365 licences; no separate meter is documented for this capability.
impact: High. Every Edge for Business user signed in with a Microsoft Entra account outside the EU gets page-content access by default, so most users can ask about their open tabs.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] rationale: impact; Why it matters / default: Every Entra-signed-in Edge for Business user outside the EU gets page-content access by default. | Found: If you don't configure this policy: ... Access is enabled by default in non-EU regions. ... Users can turn this setting on or off in Microsoft Edge settings. | Fix: Replace the impact rationale with 'High. Page-content access is enabled by default outside the EU when the policy is unconfigured, while existing user settings continue to be respected.' In Why it matters, replace 'Outside the EU this works on arrival unless the page-context policy has been set' with 'Outside the EU access is enabled by default when the page-context policy is unconfigured, while existing user settings continue to be respected.' The existing cited Stable release notes explicitly preserve existing user settings. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext
-->
