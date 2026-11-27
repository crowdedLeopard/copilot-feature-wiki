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
    note: "Microsoft Edge management service; requires Microsoft Edge Administrator. Assigned through a configuration policy; a conflicting GPO or MDM policy on the device overrides it. Not available to GCC plans."
  - governs: "Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar"
    scope: "user"
    ui:
      surface: "Group Policy Editor"
      path: "Administrative Templates > Microsoft Edge > Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar"
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
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 62
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "87c2e5ea497b4c4e3575473ab12b87a8"
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
- Disabling the policy also disables the `M365LinksAutoOpenCopilotEnabled` feature, which auto-opens Copilot for Microsoft 365 links.

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
- Check which sensitive web apps used in Edge are covered by Microsoft Purview DLP policies, because Copilot does not read pages protected by DLP.
- Confirm who holds the Microsoft Edge Administrator role if you will use the Microsoft Edge management service.

### At rollout
- Set `EdgeEntraCopilotPageContext` through Group Policy, the registry or the Edge management service **Access to browser context** setting, as enabled or disabled, rather than leaving it to each user.
- Tell users that Copilot Chat in the side pane can now answer from all open tabs and summarise YouTube videos, and which pages it will not read.
- Note that disabling page access also turns off Copilot auto-opening for Microsoft 365 links, and tell affected users.

### After rollout
- Open `edge://policy` on a sample device to check that the policy value applied.
- Review the policy when Microsoft extends page-content support to further document types.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in the Edge side pane can read page content, browsing history and video transcripts</strong><br><small>User</small><br><small class="controls__note">Mandatory only; under Computer Configuration or User Configuration &gt; Policies. Applies to Microsoft Entra profiles on Windows and macOS 130+. Disabling also turns off M365LinksAutoOpenCopilotEnabled.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EdgeEntraCopilotPageContext (REG_DWORD), 0x00000000 disables, 0x00000001 enables</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft 365 Copilot Chat may use browser context such as page content, set from the cloud</strong><br><small>Group</small><br><small class="controls__note">Microsoft Edge management service; requires Microsoft Edge Administrator. Assigned through a configuration policy; a conflicting GPO or MDM policy on the device overrides it. Not available to GCC plans.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Copilot › Access to browser context <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar</strong><br><small>User</small><br><small class="controls__note">Controls the toolbar icon only; its page does not describe it as controlling page-content access. Windows and macOS 139+.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Administrative Templates › Microsoft Edge › Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value Microsoft365CopilotChatIconEnabled (REG_DWORD), 0x00000000 hides the icon</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

`EdgeEntraCopilotPageContext` is the documented control for page content, browsing history and video transcripts in the side pane; Microsoft's release notes say the multi-tab capability and the YouTube Summarize toggle respect it. When it is not configured, users can change the setting in Edge settings. It applies only to Microsoft Entra profiles.

Policies set through the Microsoft Edge management service are overridden by a conflicting Group Policy Object or MDM policy on the device. The Edge management service requires the Microsoft Edge Administrator role.

Hiding the toolbar icon with `Microsoft365CopilotChatIconEnabled` controls whether the icon shows; its page does not describe it as controlling page-content access.

Regardless of the policy, Copilot does not access page content on pages protected by DLP policies.

## Open questions

- Will Microsoft offer a setting that allows single-page summarisation while blocking grounding across all open tabs? Watch the Edge policy reference.
- How many open tabs, and how much content per tab, can one Copilot Chat prompt use? Watch the Edge release notes.
- Is YouTube transcript grounding treated differently from other video sites? Watch the `EdgeEntraCopilotPageContext` policy page.
- Will Office documents, currently not supported, become readable from open tabs? Watch the Copilot page-content support page.

<!-- rationale
risk: Medium. Copilot can read the content of every open tab, browsing history and video transcripts when a user asks, and this is enabled by default outside the EU; one Edge policy and DLP-protected pages limit it.
cost: None. Microsoft describes Copilot Chat, including Copilot Chat in Edge, as included with eligible Microsoft 365 licences; no separate meter is documented for this capability.
impact: High. Every Edge for Business user signed in with a Microsoft Entra account outside the EU gets page-content access by default, so most users can ask about their open tabs.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] rationale: risk; Governance guidance: At rollout / behaviour: Copilot can read every open tab, or answer from all open tabs, in one contextual query. | Found: Searched: 'Copilot tabs all window Edge' and 'Copilot multi-tab limit'; searched archived Stable release notes for 'all open tabs' and 'every open tab'; read page-content support and EdgeEntraCopilotPageContext. Sources describe multiple tabs or an open window, not every tab. | Fix: Replace 'the content of every open tab' in the risk rationale with 'content from multiple open tabs'. Replace 'answer from all open tabs' in Governance guidance with 'answer contextual questions across multiple open tabs'.
- [contradicted, blocker] controls[1].note; Governance controls: second paragraph / behaviour: A conflicting device GPO or MDM policy overrides Edge management service policies without qualification. | Found: If you want the Microsoft Edge management service policy to override MDM/GPM policy you can set the override in the EdgeManagementPolicyOverridesPlatformPolicy policy. | Fix: Replace both unconditional precedence statements with: 'Device GPO or MDM policies override conflicting Edge management service policies by default; EdgeManagementPolicyOverridesPlatformPolicy can reverse that precedence.' The qualification is documented under Control policy source precedence at https://learn.microsoft.com/deployedge/microsoft-edge-management-service. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-management-service
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Risk assessment; Governance guidance; Governance controls / applicability: Copilot cannot access DLP-protected page content even when the page-context policy permits access. | Found: Copilot can't access page content on pages protected by data loss prevention (DLP) policies, even if this policy is enabled. | Fix: Attribute the blanket DLP statement to the EdgeEntraCopilotPageContext reference. Add: 'Separate Protected Session documentation describes an admin-enabled public preview from Edge 158 that can use supported protected content in the current tab, but not additional tabs; explicit AI-access blocks still apply.' Cite https://learn.microsoft.com/deployedge/microsoft-edge-management-protected-session. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext
- [supported, minor] Risk assessment: Change & support; Governance guidance: At rollout / behaviour: M365LinksAutoOpenCopilotEnabled is described as automatically opening the Copilot side pane for Microsoft 365 links. | Found: Automatically open Copilot side pane with contextual insights for links opened from Outlook | Fix: Keep only 'Disabling the policy also disables the M365LinksAutoOpenCopilotEnabled feature' and remove the statements implying a currently working general Microsoft 365-link auto-open experience. Its own reference narrows this to eligible links from same-tenant Outlook emails and says 'This policy is not yet supported': https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel
- [supported, minor] controls[2].ui / admin-path: Administrative Templates > Microsoft Edge contains the named Copilot toolbar-icon control in Group Policy Editor. | Found: GP name: Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar - GP path (Mandatory): Administrative Templates/Microsoft Edge | Fix: Include the configuration scope and Policies prefix documented at https://learn.microsoft.com/deployedge/configure-microsoft-edge: 'Computer Configuration or User Configuration > Policies > Administrative Templates > Microsoft Edge > Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar'. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks readers to check Purview DLP coverage, but the controls table has no DLP row. | Found: Check which sensitive web apps used in Edge are covered by Microsoft Purview DLP policies. The table contains only page-context policy, cloud browser-context settings and toolbar-icon visibility. | Fix: Remove the checklist instruction to check Purview DLP coverage; this control is not represented in the existing controls table. Keep the separately sourced explanation of DLP behaviour.
-->
