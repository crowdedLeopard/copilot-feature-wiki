---
title: "Microsoft Edge: auto-open Copilot side pane for links opened from Outlook"
slug: "microsoft-edge-auto-open-copilot-side-pane-for-outlook-links"
roadmapId: 557561
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge plans to open the Copilot side pane on its own when users open eligible links from same-tenant Outlook emails. Microsoft's policy page says it is on unless an admin sets M365LinksAutoOpenCopilotEnabled to disabled."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "No licence for this feature is yet published: the policy page names none. Microsoft's Copilot requirements page says Copilot Chat is available to users with an eligible Microsoft 365 subscription; which Copilot experience this pane uses is not stated."
audiences: ["m365-admin","security","change-adoption"]
tags: ["microsoft-edge","outlook","copilot","admin-controls"]
sources:
  - title: "M365LinksAutoOpenCopilotEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled"
    kind: "learn"
  - title: "EdgeEntraCopilotPageContext"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    kind: "learn"
  - title: "CopilotPageContext"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 557561"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557561"
    kind: "roadmap"
videos: []
related: ["microsoft-edge-ask-copilot-about-an-image","microsoft-edge-upgraded-copilot-new-tab-page","endpoint-dlp"]
controls:
  - governs: "Whether Edge opens the Copilot side pane automatically for Outlook links"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Automatically open Copilot side pane with contextual insights for links opened from Outlook"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value M365LinksAutoOpenCopilotEnabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled"
    note: "Enable or leave unconfigured: pane opens. Disable: it does not. Mandatory only. The page says the policy is not yet supported. Applies per Edge profile."
  - governs: "Whether Copilot can read page content for Entra account profiles (disabling also disables this feature)"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EdgeEntraCopilotPageContext (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    note: "Unconfigured: enabled in non-EU regions, disabled in EU regions; users can change it in Edge settings. Copilot can't read DLP-protected pages. Applies per Edge profile."
  - governs: "Whether Copilot can read page content for Entra ID profiles (disabling also disables this feature)"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Control Copilot access to page context for Microsoft Entra ID profiles"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value CopilotPageContext (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext"
    note: "Does not control Copilot with enterprise data protection; EdgeEntraCopilotPageContext does. Applies per Edge profile."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-16T22:00:35"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item, built from the roadmap record and Microsoft's Edge policy pages."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: policy controls now shown as user (per-profile) scope; reworded the availability and DLP statements in Why it matters; removed the DLP review checklist step."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7b59f84e71527865d82d6518206cbdf0"
---

## What's changing

Microsoft Edge plans to open the Copilot side pane automatically when a user opens an eligible web link from an Outlook email. The roadmap item says the pane offers contextual insights and actionable suggestion chips based on the email and the destination content, such as highlighting key points and recommending next actions.

Microsoft's policy page for M365LinksAutoOpenCopilotEnabled narrows the scope: it covers eligible web links from Outlook emails sent from the same tenant, and Copilot can use the originating Outlook email as context. The page lists support on Windows and macOS from Edge version 148, and none on Android or iOS. The same page says the policy "is not yet supported", so it is a description of planned behaviour, not shipped behaviour.

The roadmap item is In development, with a General Availability target of December CY2026, for Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not commitments. The policy page does not define which links are "eligible".

## Why it matters

Unless an administrator sets the policy, Microsoft's policy page says the Copilot side pane opens automatically for eligible links. That means a new, unrequested Copilot surface when a user opens an eligible web link from an Outlook email sent from the same tenant, with Copilot reading page content and the email to produce its suggestions.

The feature depends on Copilot's access to page content, so disabling either page-context policy also disables the auto-open feature. DLP-protected page content remains inaccessible to Copilot. Settle those before December, then decide whether to leave the auto-open on or switch it off and tell users.

## Risk assessment

**Data exposure**
- Copilot can use the originating Outlook email as context alongside the destination web page, so email content and page content reach the same side-pane session. The policy page documents no separate control over how much of the email is used.
- The page-context policies say Copilot can't access page content on pages protected by data loss prevention (DLP) policies, even if page access is enabled.

**Security & identity**
- The policy page limits the feature to emails sent from the same tenant. Links from external senders are not described as covered.
- Page-context access is governed by EdgeEntraCopilotPageContext for Entra account profiles; setting it to disabled also disables this feature.

**Autonomy & actions**
- The roadmap item describes suggestion chips and recommended next actions. Microsoft has not described what a chip can do without the user's approval, so check this once the feature ships.

**Change & support**
- Expect help-desk questions about a pane opening unprompted from email links. The policy page lists the policy as mandatory and not recommended.

## Cost and licensing

The policy page names no licence, meter or charge for this feature, and the roadmap item names none. Microsoft's Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that a Microsoft Copilot licence is required for licensed Microsoft Copilot capabilities. Which of these covers the auto-opened side pane is not yet published.

The cost known today is indirect: administrator time to review the policies below and to brief users.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the General Availability phase; the item is In development with a December CY2026 target. The policy page lists Windows and macOS from Edge version 148 and no support on Android or iOS.

The feature applies to eligible links in Outlook emails sent from the same tenant. The page-context policy it depends on applies to users signed in to Edge with a Microsoft Entra account. When EdgeEntraCopilotPageContext is not configured, its page says access is enabled by default in non-EU regions and disabled by default in EU regions.

## Governance guidance

### Before rollout
- Check whether EdgeEntraCopilotPageContext and CopilotPageContext are configured in your Edge policies; either one set to disabled turns this feature off.
- Decide whether users in your tenant should get the auto-opening side pane, and set M365LinksAutoOpenCopilotEnabled accordingly.

### At rollout
- Deploy the M365LinksAutoOpenCopilotEnabled value you chose to Edge on Windows and macOS before Edge version 148 reaches users.
- Tell users and the help desk that the Copilot side pane may open when they click links in Outlook emails.

### After rollout
- Test a same-tenant email link on a managed device and confirm the side pane behaves as the policy says.
- Re-read the policy page for the removal of the "not yet supported" note and for any change in what counts as an eligible link.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge opens the Copilot side pane automatically for Outlook links</strong><br><small>User</small><br><small class="controls__note">Enable or leave unconfigured: pane opens. Disable: it does not. Mandatory only. The page says the policy is not yet supported. Applies per Edge profile.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Automatically open Copilot side pane with contextual insights for links opened from Outlook <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value M365LinksAutoOpenCopilotEnabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot can read page content for Entra account profiles (disabling also disables this feature)</strong><br><small>User</small><br><small class="controls__note">Unconfigured: enabled in non-EU regions, disabled in EU regions; users can change it in Edge settings. Copilot can't read DLP-protected pages. Applies per Edge profile.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EdgeEntraCopilotPageContext (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot can read page content for Entra ID profiles (disabling also disables this feature)</strong><br><small>User</small><br><small class="controls__note">Does not control Copilot with enterprise data protection; EdgeEntraCopilotPageContext does. Applies per Edge profile.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to page context for Microsoft Entra ID profiles <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value CopilotPageContext (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Disabling either page-context policy also disables this feature, so those two rows are a second route to switch it off, at the cost of removing page access for all Copilot side-pane queries covered by that policy. EdgeEntraCopilotPageContext covers Microsoft 365 Copilot Chat and Microsoft Copilot with enterprise data protection in the side pane; CopilotPageContext does not control access for Copilot with enterprise data protection, which EdgeEntraCopilotPageContext controls.

M365LinksAutoOpenCopilotEnabled is documented as mandatory-only and applies per profile. Its page marks it as not yet supported at the time of writing (November 2026).

## Open questions

- Which links count as "eligible" links from Outlook emails? Watch the M365LinksAutoOpenCopilotEnabled policy page.
- Which licence or Copilot experience does the auto-opened side pane use, and is any meter involved? Watch the Microsoft 365 Roadmap item and Copilot requirements page.
- In EU regions, where EdgeEntraCopilotPageContext is disabled by default when unconfigured, does an unconfigured tenant therefore not get the auto-open pane? The pages do not say.
- When will the policy be supported, and what will Message center say about the rollout?

<!-- rationale
risk: Medium. Copilot would read the destination page and the originating email for contextual suggestions, and the policy page says an unconfigured tenant gets the side pane; page-content and DLP controls exist but must be checked.
cost: Low. The only cost the sources show is admin time to review the policies; the licence this feature needs is not yet published.
impact: High. It changes what happens when users click links in Outlook emails: a side pane opens without the user asking, for every user the feature reaches.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; controls[0].note; Governance controls / availability: The policy page marks the policy as not yet supported, so the briefing treats its behaviour as planned. | Found: This policy is not yet supported. When support becomes available, eligible links from Outlook emails sent from the same tenant can open with the Copilot side pane. | Fix: After the not-yet-supported statement, add: 'Microsoft's Intune June 8, 2026 release notes describe this policy and automatic opening from Edge 148 in present terms, while the policy reference still says it is not yet supported and the roadmap remains In development.' Cite https://learn.microsoft.com/intune/whats-new/#week-of-june-8,-2026-service-release-2605. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled
- [supported, minor] Governance controls / applicability: EdgeEntraCopilotPageContext covers Microsoft 365 Copilot Chat and enterprise-data-protected Copilot in the Edge side pane. | Found: This chart covers the behavior of Microsoft 365 Copilot Chat in Edge for Business which is accessible in the sidepane. | Fix: Add https://learn.microsoft.com/deployedge/edge-learnmore-copilot-page-summary-results to sources for the Copilot Chat side-pane identification. The cited EdgeEntraCopilotPageContext reference gives its reach as Copilot experiences in the side pane, including Microsoft 365 Copilot Business Chat and Microsoft Copilot with enterprise data protection. | Source: https://learn.microsoft.com/deployedge/edge-learnmore-copilot-page-summary-results
-->
