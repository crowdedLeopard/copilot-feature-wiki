---
title: "OneDrive for iPad: presentation mode for PDFs"
slug: "onedrive-presentation-mode-for-pdfs-in-the-ios-app-on-ipad"
roadmapId: 573697
topic: "modern-work"
products: ["OneDrive"]
summary: "OneDrive for iPad gets a Presentation button in the PDF viewer that locks pages against swipe scrolling. Microsoft says it is on by default with no admin control; no admin action is required, but helpdesk should be told."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Microsoft's notice names no licence or meter for presentation mode and says it is enabled by default for all OneDrive for Business customers. The Learn PDF features page does not list it."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["onedrive","pdf-viewer","mobile","user-experience"]
sources:
  - title: "OneDrive: Presentation mode for PDFs in the iOS app on iPad"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573697"
    kind: "roadmap"
  - title: "MC1558041: Microsoft OneDrive for iPad: Presentation mode for PDFs"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1558041"
    kind: "message-center"
  - title: "Features available for PDFs in OneDrive in Web and mobiles/iPads"
    url: "https://learn.microsoft.com/sharepoint/onedrive-pdf-features"
    kind: "learn"
videos: []
related: ["onedrive-pdf-annotation-for-sensitivity-label-protected-pdfs-in-onedrive-sharepoint-web-vi"]
controls:
  - governs: "Tenant switch for presentation mode in OneDrive for iPad"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1558041 says no admin control or tenant configuration is available for this feature."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-23"
    note: "New briefing: presentation mode for PDFs in OneDrive for iPad, rolling out from early December 2026 per MC1558041."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 46 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "9a9fb888d3e92c0e59ee4e0ce3851a37"
---

## What's changing

Microsoft is adding presentation mode to the OneDrive app for iPad. Users select a new **Presentation** button in the PDF viewer to enter a focused, view-only experience that prevents free gesture scrolling between pages, so a page does not change by accident while presenting and the file does not have to be moved to another app. The feature is not available on iPhone.

Microsoft's notice MC1558041 adds detail: presentation mode supports all PDFs, shows them without editing controls, and does not intentionally change them or create a new copy. Free scrolling or swiping between pages is disabled, and users switch pages only by selecting the on-screen navigation buttons.

The roadmap item is In development with a target of December CY2026 for General Availability, Worldwide (Standard Multi-Tenant), on iOS. MC1558041, published 2026-11-17, says rollout begins in early December 2026 and is expected to complete by late December 2026. Microsoft Learn does not yet describe presentation mode, so this page rests on the roadmap record and the notice.

## Why it matters

This is a small change to an end-user viewer, and the notice says no administrative action is required before rollout. It matters mainly for support: staff who present PDFs from OneDrive on iPad will see a new button and a viewer that ignores swipes, and may ask helpdesk why page swiping stopped working.

Microsoft's notice says the feature is enabled by default for all OneDrive for Business customers, so it arrives whether or not anyone plans for it. Microsoft recommends informing helpdesk and support teams and updating internal user guidance for presenting PDFs from the OneDrive app for iPad.

## Risk assessment

**Data exposure**
- Microsoft's notice says presentation mode does not intentionally change file storage, permissions, sharing, retention or audit behaviour, and that existing OneDrive access permissions and protections applied to the PDF continue to apply. It reports no compliance considerations.

**Security & identity**
- No change reported: the notice describes a display change in the PDF viewer and mentions no new sign-in, sharing or permission step.

**Autonomy & actions**
- No change: presentation mode is a view-only experience without editing controls, and a user starts it by selecting the Presentation button.

**Change & support**
- Swiping between pages is disabled in presentation mode, so users who expect gestures may report it as a fault until they learn to use the on-screen navigation buttons.
- The button appears only in the iPad app and not on iPhone, so guidance should name the device.

## Cost and licensing

Microsoft has not published a licence or meter for presentation mode. The notice says the feature is enabled by default for all OneDrive for Business customers and names no additional licence or charge. The Learn page on PDF features in OneDrive lists freemium and premium PDF features, and presentation mode is not among them at the time of writing (November 2026).

The known cost is indirect: admin time to brief helpdesk and update user guidance, as the notice recommends.

## Scope

**Users and devices:** users who open and present PDF files in the OneDrive app for iPad. The feature is not available on iPhone.

**Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the iOS platform. It lists no other cloud.

**Rollout:** MC1558041 gives early December 2026 to late December 2026 for General Availability (Worldwide). The roadmap target is December CY2026.

**Configuration:** Microsoft's notice says no admin control or tenant configuration is available for this feature.

## Governance guidance

### Before rollout
- Tell helpdesk and support teams about the Presentation button and the disabled swipe between pages, as MC1558041 recommends.
- Update internal user guidance for presenting PDFs from the OneDrive app for iPad, and state that iPhone is not supported.
- Identify teams that present from iPads, such as sales or field staff, and brief their managers.

### At rollout
- Check with a pilot iPad user that the Presentation button appears in the PDF viewer once the app update reaches them, remembering that rollout runs from early to late December 2026.
- Direct questions about missing swipe gestures to the on-screen navigation buttons described in the notice.

### After rollout
- Collect user and helpdesk feedback on presentation mode and note recurring questions in your guidance.
- Watch Message center and the roadmap item for changes to the target date, licensing or admin controls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for presentation mode in OneDrive for iPad</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1558041 says no admin control or tenant configuration is available for this feature.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice says no admin control or tenant configuration is available for this feature, so the table records the gap and no switch is listed. Existing OneDrive access permissions and protections applied to the PDF continue to apply, according to the notice.

## Open questions

- Does Microsoft intend to publish a Learn page for presentation mode, and will it state the licence that covers it? Watch the Learn PDF features page and Message center.
- Which OneDrive app version on iPad includes the Presentation button? Microsoft has not said at the time of writing.
- Will an admin control for presentation mode be added later? The notice says none is available now.

<!-- rationale
risk: Low. Microsoft's notice says presentation mode changes how a PDF is displayed and does not intentionally change file storage, permissions, sharing, retention or audit behaviour.
cost: Low. The only cost the sources show is admin time to brief helpdesk and update user guidance; no licence or meter for this feature is yet published.
impact: Low. Only users who open and present PDFs in the OneDrive app on iPad notice it, and they choose to use it by selecting the Presentation button.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance guidance: At rollout / behaviour: The Presentation button appears when an app update reaches the iPad user. | Found: Searched: OneDrive iPad Presentation button PDF presentation mode app version release; OneDrive presentation mode licensing pricing app update iPad version. Read roadmap, MC1558041, PDF features and OneDrive deployment/update excerpts; no iPad app-update delivery mechanism stated. | Fix: Replace the first At rollout bullet with: 'Check with a pilot iPad user that the Presentation button appears in the PDF viewer during rollout, which Microsoft says begins in early December 2026 and is expected to complete by late December 2026.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because Microsoft has not published a licence specific to presentation mode. | Found: OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan. | Fix: Set licensing.model to included. Replace 'Not yet published' in licensing.notes and the opening licensing sentence with: 'OneDrive is included in Microsoft 365 and Office 365 plans and SharePoint plans, or purchased as a standalone plan. Microsoft has not published licensing specific to presentation mode.' Cite https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description. Retain the narrower feature-specific gap in the rationale and open question. | Source: https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description
-->
