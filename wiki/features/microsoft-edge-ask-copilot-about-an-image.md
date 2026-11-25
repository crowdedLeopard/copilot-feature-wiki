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
  model: "included"
  notes: "Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. Licensed Microsoft Copilot capabilities require a Microsoft Copilot licence and a qualifying prerequisite licence. No image-option-specific licence requirement is published."
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
    note: "Named by the roadmap for this feature; the policy explicitly covers sharing an image with Copilot from the context menu. Entra account profiles only. Windows and macOS 130 or later."
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
updated: "2026-11-25"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-19"
    note: "New briefing: the roadmap plans an Edge context-menu option to ask Copilot about an image, with two named Edge policies and no Learn page for the feature yet."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: licensing model set to unknown, and the roadmap's statement that the two named policies control availability is now reported as stated, with the image-specific interaction listed as an open question."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: EdgeEntraCopilotPageContext now documents image sharing from the context menu and its DLP exclusion; licensing model set to included for the product-level entitlement."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "48e96a6341fa1a716bdf9b8f8f51f1b1"
---

## What's changing

Microsoft plans to let users in Microsoft Edge send an image from a web page to Copilot from the Edge context menu, so they can ask questions about it and get insights without leaving the browser. The roadmap item calls this "Ask Copilot about an image" and says admins can control availability with the EdgeEntraCopilotPageContext and Microsoft365CopilotChatIconEnabled policies.

Microsoft Learn now explicitly includes sharing an image from the context menu ("Ask Copilot about this image") in [EdgeEntraCopilotPageContext](https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext). The roadmap still lists the feature as In development, targeted for January CY2027. Microsoft365CopilotChatIconEnabled documents toolbar visibility but not its image-menu interaction.

The roadmap item shows the status as In development, with a target of January CY2027, release phase General Availability, platform Web and the Worldwide (Standard Multi-Tenant) cloud. The target is a plan, not a commitment. The roadmap lists Microsoft Edge and Microsoft Copilot (Microsoft 365) as the products.

## Why it matters

A right-click option that sends web content to Copilot adds a new route from the browser to a Copilot service. Microsoft has not stated whether the option appears for users on arrival, so plan on the basis that no source says existing behaviour changes, and confirm the Edge policy settings your organisation already uses.

The two policies the roadmap names are the controls to check first. EdgeEntraCopilotPageContext already governs what Copilot in the Edge side pane may read for Entra account profiles, and its page lists sharing an image from the context menu among what it covers, so an organisation that has set it deliberately should check that setting before the option arrives.

## Risk assessment

**Data exposure**

- The roadmap says images from the web are sent to Copilot. The policy's documented contextual queries include image sharing, and the EdgeEntraCopilotPageContext page says Copilot cannot access page content on pages protected by data loss prevention (DLP) policies, even if the policy is enabled. Test this in a pilot to validate enforcement.
- Where the policy is not configured, the page says access is enabled by default in non-EU regions and disabled by default in EU regions, and users can change it in Edge settings. These are the access defaults for the documented contextual queries, including image sharing; the page does not state whether the image menu entry itself appears automatically on rollout.

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

Microsoft's Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that licensed Microsoft Copilot capabilities need a Microsoft Copilot licence and a qualifying prerequisite licence. The page publishes no image-option-specific licence requirement.

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
<tr><td data-label="Control"><strong>Copilot access to page content, browsing history and video transcript in the Edge side pane</strong><br><small>User</small><br><small class="controls__note">Named by the roadmap for this feature; the policy explicitly covers sharing an image with Copilot from the context menu. Entra account profiles only. Windows and macOS 130 or later.</small></td><td data-label="Admin UI"><strong>Group Policy</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value EdgeEntraCopilotPageContext (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar</strong><br><small>User</small><br><small class="controls__note">Named by the roadmap for this feature; the policy page covers the toolbar icon for Copilot in the side pane. Windows and macOS 139 or later. Can be recommended.</small></td><td data-label="Admin UI"><strong>Group Policy</strong><br>Administrative Templates › Microsoft Edge › Control whether Microsoft 365 Copilot Chat shows in the Microsoft Edge for Business toolbar <a href="https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value Microsoft365CopilotChatIconEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are Edge policies that the roadmap item names as the availability controls for this feature. EdgeEntraCopilotPageContext explicitly covers the image context-menu action; Microsoft365CopilotChatIconEnabled documents toolbar visibility but not its image-menu interaction.

Microsoft Learn's Edge management service page for Copilot features lists dropdowns for Access to browser context and Copilot icon in the toolbar. It does not name the policies behind them, so treat those dropdowns as a separate page to check, not as a documented route to either row.

EdgeEntraCopilotPageContext is mandatory-only, and the page says it cannot be set as recommended. Microsoft365CopilotChatIconEnabled can be mandatory or recommended.

## Open questions

- How do the two named policies interact for the image context-menu option? Watch the two policy pages and the roadmap item.
- Is the option on by default when it arrives? Watch Message center.
- Does the image option need a Microsoft Copilot licence, or is it available with Copilot Chat for eligible subscriptions? Watch the Copilot requirements page.
- Is the image option available on Android and iOS, where both policies are not supported?

<!-- rationale
risk: Medium. Images from web pages go to Copilot; the EdgeEntraCopilotPageContext policy documents image sharing and a DLP exclusion, but the arrival default is not stated, so existing controls only mostly cover it.
cost: Low. The only cost the sources show is admin time to review two Edge policies; a licence or meter specific to this feature is not yet published.
impact: Medium. Users signed in to Edge with a work account who right-click images would notice it; Microsoft has not stated whether it arrives on by default.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout, DLP bullet / consistency: The checklist asks readers to take stock of DLP protection, but the controls table has no DLP row. | Found: Identify which pages your DLP policies protect, so a pilot can test whether an image on such a page can be sent to Copilot. The table contains only EdgeEntraCopilotPageContext and Microsoft365CopilotChatIconEnabled. | Fix: Remove the Before rollout bullet 'Identify which pages your DLP policies protect, so a pilot can test whether an image on such a page can be sent to Copilot.' It names a checklist control without a table row; retain the sourced DLP exclusion and pilot advice in Risk assessment.
-->
