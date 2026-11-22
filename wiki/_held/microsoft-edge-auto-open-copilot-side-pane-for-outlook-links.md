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
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Automatically open Copilot side pane with contextual insights for links opened from Outlook"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value M365LinksAutoOpenCopilotEnabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled"
    note: "Enable or leave unconfigured: pane opens. Disable: it does not. Mandatory only. The page says the policy is not yet supported."
  - governs: "Whether Copilot can read page content for Entra account profiles (disabling also disables this feature)"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EdgeEntraCopilotPageContext (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    note: "Unconfigured: enabled in non-EU regions, disabled in EU regions; users can change it in Edge settings. Copilot can't read DLP-protected pages."
  - governs: "Whether Copilot can read page content for Entra ID profiles (disabling also disables this feature)"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Control Copilot access to page context for Microsoft Entra ID profiles"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value CopilotPageContext (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext"
    note: "Does not control Copilot with enterprise data protection; EdgeEntraCopilotPageContext does."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-16T22:00:35"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item, built from the roadmap record and Microsoft's Edge policy pages."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 53
  unconfirmed: 4
  contradicted: 2
  attempts: 1
  hash: "2bf9605f9a688e96be5e870ce3c415ef"
---

## What's changing

Microsoft Edge plans to open the Copilot side pane automatically when a user opens an eligible web link from an Outlook email. The roadmap item says the pane offers contextual insights and actionable suggestion chips based on the email and the destination content, such as highlighting key points and recommending next actions.

Microsoft's policy page for M365LinksAutoOpenCopilotEnabled narrows the scope: it covers eligible web links from Outlook emails sent from the same tenant, and Copilot can use the originating Outlook email as context. The page lists support on Windows and macOS from Edge version 148, and none on Android or iOS. The same page says the policy "is not yet supported", so it is a description of planned behaviour, not shipped behaviour.

The roadmap item is In development, with a General Availability target of December CY2026, for Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not commitments. The policy page does not define which links are "eligible".

## Why it matters

Unless an administrator sets the policy, Microsoft's policy page says the Copilot side pane opens automatically for eligible links. That means a new, unrequested Copilot surface next to every same-tenant email link a user opens in Edge, with Copilot reading page content and the email to produce its suggestions.

The feature depends on Copilot's access to page content, so existing page-context and DLP decisions now also decide whether users see this pane. Settle those before December, then decide whether to leave the auto-open on or switch it off and tell users.

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
- Review which pages your DLP policies protect, since Copilot can't read those pages.

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
<tr><td data-label="Control"><strong>Whether Edge opens the Copilot side pane automatically for Outlook links</strong><br><small>Tenant</small><br><small class="controls__note">Enable or leave unconfigured: pane opens. Disable: it does not. Mandatory only. The page says the policy is not yet supported.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Automatically open Copilot side pane with contextual insights for links opened from Outlook <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value M365LinksAutoOpenCopilotEnabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot can read page content for Entra account profiles (disabling also disables this feature)</strong><br><small>Tenant</small><br><small class="controls__note">Unconfigured: enabled in non-EU regions, disabled in EU regions; users can change it in Edge settings. Copilot can't read DLP-protected pages.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to Microsoft Edge page content, browsing history, and video transcript for Entra account user profiles when using Copilot in the Microsoft Edge sidepane <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EdgeEntraCopilotPageContext (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot can read page content for Entra ID profiles (disabling also disables this feature)</strong><br><small>Tenant</small><br><small class="controls__note">Does not control Copilot with enterprise data protection; EdgeEntraCopilotPageContext does.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Control Copilot access to page context for Microsoft Entra ID profiles <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value CopilotPageContext (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
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

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / availability: The new pane appears next to every same-tenant email link a user opens in Edge. | Found: This policy controls whether Microsoft Edge automatically opens the Microsoft Copilot side pane when users open eligible web links from Outlook emails sent from the same tenant. | Fix: Replace "next to every same-tenant email link a user opens in Edge" with "when a user opens an eligible web link from an Outlook email sent from the same tenant". The policy does not promise coverage of every link. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled
- [unsupported, blocker] Why it matters / applicability: DLP decisions determine whether users see the automatically opening pane. | Found: Searched: "M365LinksAutoOpenCopilotEnabled" DLP protected pages automatic pane visibility. Read all three policy references and Purview DLP excerpts; DLP blocks page-content access, but none states that it suppresses this pane's automatic opening. | Fix: Replace "so existing page-context and DLP decisions now also decide whether users see this pane" with "so disabling either page-context policy also disables the auto-open feature. DLP-protected page content remains inaccessible to Copilot."
- [unsupported, blocker] controls[0].scope; Governance controls table / applicability: The auto-open Group Policy and registry control has tenant scope. | Found: Searched: "M365LinksAutoOpenCopilotEnabled" tenant policy per profile scope. Read the policy reference: "Per Profile: Yes". The documented Group Policy and registry setting does not state tenant-wide enforcement. | Fix: Set controls[0].scope to "user" and replace the rendered "Tenant" label with "User". Append to its note: "Applies per Edge profile." The reference documents profile-scoped application, not a tenant-wide switch.
- [unsupported, blocker] controls[1].scope; Governance controls table / applicability: The EdgeEntraCopilotPageContext Group Policy and registry control has tenant scope. | Found: Searched: "M365LinksAutoOpenCopilotEnabled" tenant policy per profile scope. Read EdgeEntraCopilotPageContext: "Per Profile: Yes"; it applies only to Entra-account users in Edge's side pane. No tenant-wide enforcement is stated. | Fix: Set controls[1].scope to "user" and replace the rendered "Tenant" label with "User". Append to its note: "Applies per Edge profile."
- [unsupported, blocker] controls[2].scope; Governance controls table / applicability: The CopilotPageContext Group Policy and registry control has tenant scope. | Found: Searched: "M365LinksAutoOpenCopilotEnabled" tenant policy per profile scope. Read CopilotPageContext: "Per Profile: Yes" and "This policy applies only to Microsoft Entra ID profiles in Microsoft Edge." No tenant-wide enforcement is stated. | Fix: Set controls[2].scope to "user" and replace the rendered "Tenant" label with "User". Append to its note: "Applies per Edge profile."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; controls[0].note; Governance controls; Open questions / availability: The policy reference says the policy is not yet supported at the time of writing. | Found: This policy is not yet supported. When support becomes available, eligible links from Outlook emails sent from the same tenant can open with the Copilot side pane. | Fix: After the not-yet-supported statement, add: "Intune's June 8, 2026 update nevertheless lists this policy as a configuration option; the policy reference still says it is not yet supported." Cite https://learn.microsoft.com/intune/whats-new/#week-of-june-8,-2026-service-release-2605, which lists the Enabled, unconfigured and Disabled options without the unsupported qualification. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365linksautoopencopilotenabled
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks administrators to review DLP policies, but the controls table has no DLP-policy row. | Found: Checklist: "Review which pages your DLP policies protect". The three control rows are M365LinksAutoOpenCopilotEnabled, EdgeEntraCopilotPageContext and CopilotPageContext. | Fix: Remove the checklist bullet "Review which pages your DLP policies protect, since Copilot can't read those pages." Keep the supported DLP restriction in Risk assessment; do not add an unverified control row.
-->
