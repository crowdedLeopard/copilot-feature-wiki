---
title: "Microsoft Edge: Ask Copilot about an image from the context menu"
slug: "microsoft-edge-ask-copilot-about-an-image"
roadmapId: 566864
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "Edge plans a context-menu option to send a web image to Copilot for questions. Targeted January CY2027. Its default is not stated; the roadmap names two Edge policies as admin controls, so check them before it lands."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription and that a Microsoft Copilot licence is required for licensed Copilot capabilities. Which applies to this feature is not yet published."
audiences: ["m365-admin","security","end-user"]
tags: ["microsoft-edge","edge-for-business","copilot-chat","m365-copilot","policy"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Edge: Ask Copilot about an image"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566864"
    kind: "roadmap"
  - title: "EdgeEntraCopilotPageContext"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    kind: "learn"
  - title: "Microsoft365CopilotChatIconEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled"
    kind: "learn"
  - title: "Configuring Copilot Features"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
videos: []
related: ["microsoft-edge-rewrite-by-copilot-in-edge-is-being-upgraded-to-include-enterprise-data-pro"]
controls:
  - governs: "Copilot access to page content, browsing history and video transcript in the Edge side pane"
    scope: "user"
    ui:
      surface: "Group Policy"
      path: "Administrative Templates > Microsoft Edge > Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    api:
      kind: "other"
      call: "Registry value EdgeEntraCopilotPageContext (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    note: "Named by the roadmap for this feature; the policy page does not mention images. Entra account profiles only. Windows and macOS 130 or later."
  - governs: "Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar"
    scope: "user"
    ui:
      surface: "Group Policy"
      path: "Administrative Templates > Microsoft Edge > Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled"
    api:
      kind: "other"
      call: "Registry value Microsoft365CopilotChatIconEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled"
    note: "Named by the roadmap for this feature; the policy page covers the toolbar icon for Copilot in the side pane. Windows and macOS 139 or later. Can be recommended."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-19"
    note: "New briefing: the roadmap plans an Edge context-menu option to ask Copilot about an image, with two named Edge policies and no Learn page for the feature yet."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 53
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "6bc55cbad18ea434094c7bde2f82a5ef"
---

## What's changing

Microsoft plans to let users in Microsoft Edge send an image from a web page to Copilot from the Edge context menu, so they can ask questions about it and get insights without leaving the browser. The roadmap item calls this "Ask Copilot about an image" and says admins can control availability with the EdgeEntraCopilotPageContext and Microsoft365CopilotChatIconEnabled policies.

Microsoft Learn does not describe this feature yet, so what is said about its behaviour here is the roadmap's description. The two policies named in the roadmap are documented on Learn, but their pages describe Copilot in the Edge side pane and do not mention images or the context menu.

The roadmap item shows the status as In development, with a target of January CY2027, release phase General Availability, platform Web and the Worldwide (Standard Multi-Tenant) cloud. The target is a plan, not a commitment. The roadmap lists Microsoft Edge and Microsoft Copilot (Microsoft 365) as the products.

## Why it matters

A right-click option that sends web content to Copilot adds a new route from the browser to a Copilot service. Microsoft has not stated whether the option appears for users on arrival, so plan on the basis that no source says existing behaviour changes, and confirm the Edge policy settings your organisation already uses.

The two policies the roadmap names are the controls to check first. EdgeEntraCopilotPageContext already governs what Copilot in the Edge side pane may read for Entra account profiles, and an organisation that has set it deliberately should find out whether the image option follows it.

## Risk assessment

**Data exposure**

- The roadmap says images from the web are sent to Copilot. The EdgeEntraCopilotPageContext page says Copilot cannot access page content on pages protected by data loss prevention (DLP) policies, even if the policy is enabled. It does not say whether an image on such a page is covered, so test this before relying on it.
- Where the policy is not configured, the page says access is enabled by default in non-EU regions and disabled by default in EU regions, and users can change it in Edge settings. That is the policy's documented default for side pane page access, not a statement about this feature.

**Security & identity**

- EdgeEntraCopilotPageContext applies only to users signed in to Edge with a Microsoft Entra account. It does not apply to a profile signed in with a Microsoft account, so personal profiles on managed devices sit outside it.
- The policy is supported on Windows and macOS from version 130 and is not supported on Android or iOS. The roadmap lists the platform as Web; whether the image option exists on mobile is not stated.

**Autonomy & actions**

- The roadmap describes a user-initiated action from the context menu. It does not describe Copilot acting on its own.

**Change & support**

- Microsoft365CopilotChatIconEnabled controls whether the Copilot icon shows in the Edge for Business toolbar. Its page does not say it controls a context-menu item, so disabling the icon may not remove the image option. Confirm in a pilot.
- Expect questions from users who see a new right-click entry; the roadmap gives no user-facing documentation to point them to yet.

## Cost and licensing

No price or meter for this feature is published. The roadmap item and the two policy pages name no licence for it.

Microsoft's Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and lists a Microsoft Copilot licence as required for licensed Microsoft Copilot capabilities. It does not say which of the two covers the image option, so the licence for this feature is not yet published.

The cost known today is admin time to review the two Edge policies and brief users.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the platform Web, and lists no US Government clouds. That is a record fact, not a statement that the feature is unavailable elsewhere.

The EdgeEntraCopilotPageContext page says it applies to users signed in to Edge with a Microsoft Entra account who use Copilot in the side pane, including Microsoft 365 Copilot Business Chat and Microsoft Copilot with enterprise data protection. Microsoft365CopilotChatIconEnabled applies to Entra ID Edge profiles, for both Microsoft 365 Copilot licensed and unlicensed users, and only when users access Copilot in the side pane. Both policies are supported on Windows and macOS only.

## Governance guidance

### Before rollout

- Check whether EdgeEntraCopilotPageContext is set in your Edge policy source, and record the value; the first control row gives where it lives.
- Check whether Microsoft365CopilotChatIconEnabled is set, and decide whether the toolbar icon should show for your users (second control row).
- Identify which pages your DLP policies protect, so a pilot can test whether an image on such a page can be sent to Copilot.

### At rollout

- Pilot with a small group of Entra-signed-in Edge users on Windows and macOS and note whether the right-click option appears with each policy set to enabled and disabled.
- Tell pilot users what the option sends to Copilot, once Microsoft documents it.

### After rollout

- Re-check the two policy pages and the Microsoft 365 roadmap item for a Learn page on the image feature, a licence statement and a change of default.
- Review user questions about the new menu entry and update internal guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot access to page content, browsing history and video transcript in the Edge side pane</strong><br><small>User</small><br><small class="controls__note">Named by the roadmap for this feature; the policy page does not mention images. Entra account profiles only. Windows and macOS 130 or later.</small></td><td data-label="Admin UI"><strong>Group Policy</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value EdgeEntraCopilotPageContext (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar</strong><br><small>User</small><br><small class="controls__note">Named by the roadmap for this feature; the policy page covers the toolbar icon for Copilot in the side pane. Windows and macOS 139 or later. Can be recommended.</small></td><td data-label="Admin UI"><strong>Group Policy</strong><br>Administrative Templates › Microsoft Edge › Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar <a href="https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value Microsoft365CopilotChatIconEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are Edge policies that the roadmap item names as the availability controls for this feature. Their Learn pages describe the Copilot side pane and say nothing about images or the context menu, so whether each policy switches the image option off is not yet confirmed by Microsoft.

Microsoft Learn's Edge management service page for Copilot features lists dropdowns for Access to browser context and Copilot icon in the toolbar. It does not name the policies behind them, so treat those dropdowns as a separate page to check, not as a documented route to either row.

EdgeEntraCopilotPageContext is mandatory-only, and the page says it cannot be set as recommended. Microsoft365CopilotChatIconEnabled can be mandatory or recommended.

## Open questions

- Does EdgeEntraCopilotPageContext, or any other policy, switch the context-menu image option off? Watch the two policy pages and the roadmap item.
- Is the option on by default when it arrives, and does the EU default for page access apply to it? Watch Message center.
- Which licence covers it: Copilot Chat for eligible subscriptions or a Microsoft Copilot licence? Watch the Copilot requirements page.
- Do DLP policies that protect a page also stop an image on that page being sent to Copilot?
- Is the image option available on Android and iOS, where both policies are not supported?

<!-- rationale
risk: Medium. Images from web pages go to Copilot, and Learn does not say whether the page-content policy or its data loss prevention exclusion covers images, so the existing controls only mostly cover it.
cost: Low. The only cost the sources show is admin time to review two Edge policies; a licence or meter specific to this feature is not yet published.
impact: Medium. Users signed in to Edge with a work account who right-click images would notice it; Microsoft has not stated whether it arrives on by default.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model / consistency: The feature's licensing model is mixed, although its notes and body say which entitlement covers it is not published. | Found: model: "mixed"; "Which applies to this feature is not yet published."; "the licence for this feature is not yet published." | Fix: Change licensing.model from "mixed" to "unknown" to match the stated uncertainty about this feature's entitlement; retain the documented general Copilot requirements in the notes. No source checked establishes that this image option uses a mixed entitlement model.
- [contradicted, blocker] Governance controls; Open questions / absence: Microsoft has not confirmed whether the named policies switch off availability of the image option. | Found: Admins can control availability to this feature using the EdgeEntraCopilotPageContext and Microsoft365CopilotChatIconEnabled policies. | Fix: Replace the final sentence of the first paragraph after the controls table with: "The roadmap states that admins can control this feature's availability using these policies; their Learn pages do not yet describe the image-specific interaction." Replace the first Open questions bullet with: "How do the two named policies interact for the image context-menu option? Watch the two policy pages and the roadmap item."
-->
