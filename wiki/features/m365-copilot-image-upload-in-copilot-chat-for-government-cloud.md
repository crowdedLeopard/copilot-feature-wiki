---
title: "Microsoft 365 Copilot Chat: image upload for GCC, GCC High and DoD"
slug: "m365-copilot-image-upload-in-copilot-chat-for-government-cloud"
roadmapId: 551194
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Users in US Government clouds can upload images to Copilot Chat and ask about them. The roadmap lists it as launched. Microsoft Learn documents no separate admin switch for it, so decide whether the existing controls are enough."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview describes Copilot Chat (Basic) as \"the standalone baseline experience included with eligible Microsoft 365 licenses\", with some features subject to fair use limits. No licence or meter specific to image upload is published."
audiences: ["m365-admin","security","compliance"]
tags: ["copilot-chat","m365-copilot","enterprise-data-protection","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 551194"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=551194"
    kind: "roadmap"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Privacy and protections"
    url: "https://learn.microsoft.com/copilot/plan/privacy-and-protections"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
videos: []
related: ["m365-copilot-m365-admin-center-usage-reports-copilot-chat-for-gcc-gcc-high-and-dod","m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise","m365-copilot-now-smarter-with-visuals-copilot-chat-leverages-embedded-images-for-richer-mo"]
controls:
  - governs: "Whether users can use the Copilot app, which includes Copilot Chat, at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator per the page. Blocks the whole app for all users in the organisation, not image upload alone. Page: CoPilot app settings apply to Microsoft Copilot and Copilot Chat."
  - governs: "A switch for image upload in Copilot Chat on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents none at the time of writing (November 2026). The Copilot image generation setting is documented for image generation, not upload."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-19T23:30:43"
changes:
  - date: "2026-11-25"
    note: "New briefing: image upload in Copilot Chat for GCC, GCC High and DoD, launched per the roadmap; Learn has no page for it yet."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 38 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 38
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ea8372b0d76c3d4d69afe06d364f2b12"
---

## What's changing

Microsoft's roadmap item says image upload in Microsoft 365 Copilot lets users upload images and ask Copilot for insights based on them, and that Microsoft is bringing this to Government Cloud environments with parity to existing Copilot experiences, operating within applicable Government Cloud boundaries.

The roadmap record lists status Launched, a target date of February CY2026, release phase General Availability, and clouds GCC, GCC High and DoD. Platforms are Android, Desktop, iOS, Mac and Web. Microsoft's Copilot service description says the Microsoft Copilot app isn't available as a Mac desktop app for GCC, GCCH or DoD, so what Mac covers for this item is not clear from the sources.

Microsoft Learn has no page for this feature, so what follows about behaviour is the roadmap's description plus general Copilot Chat pages. Those pages describe uploading a file with the '+' button or by drag and drop, and do not separately describe images. The service description lists Chat as available in GCC, GCCH and DoD, and notes that Chat isn't available in the Edge sidebar in those clouds. Microsoft has not stated what happens on arrival, so the default state is shown as Not stated.

## Why it matters

Image upload gives users another way to put content in front of Copilot. A screenshot of a spreadsheet, a whiteboard or a form can carry the same sensitive detail as a file, and government tenants are the ones most likely to hold controlled or regulated information.

Microsoft says Copilot in US government clouds operates within the customer's government cloud tenant, and that prompts, responses and generated content stay in the government cloud. That is the boundary the roadmap item refers to. Microsoft has not stated whether image upload starts for everyone or needs anything from an administrator, so this is a decision to take deliberately, not one to find out about from users.

## Risk assessment

**Data exposure**
- Users supply the content themselves, so an image can contain sensitive information that no admin selected. Microsoft's privacy page says uploaded files are stored in a user's OneDrive for Business as part of enterprise data protection; it does not separately say the same of images, so confirm that before relying on it for retention or discovery.
- Microsoft states that Copilot in US government cloud environments keeps prompts, responses and generated content in the government cloud. The page is general and does not mention image upload.

**Security & identity**
- Microsoft Learn documents no setting that turns image upload off on its own (see the controls table). The documented controls are broader: blocking the Copilot app in Integrated Apps, which the page says applies to both Microsoft Copilot and Copilot Chat.
- Admin access to the Copilot settings page is through an admin role such as AI Administrator, per Microsoft's configuration page.

**Autonomy & actions**
- No change documented: the roadmap describes a user uploading an image and asking for insights, with no autonomous action described.

**Change & support**
- Expect questions about what Copilot can read in an image and whether it is kept. Microsoft's Copilot overview says some Copilot Chat features are subject to fair use limits; whether image upload is one is not stated.
- Platform differences are possible: the roadmap lists Mac, while Microsoft's service description says the Microsoft Copilot app isn't available as a Mac desktop app in GCC, GCCH or DoD.

## Cost and licensing

Microsoft's Copilot overview describes Copilot Chat (Basic) as "the standalone baseline experience included with eligible Microsoft 365 licenses", and adds that some features are subject to fair use limits. The same page says the Microsoft 365 Copilot add-on licence gives the full Copilot experience in Word, Excel, PowerPoint and OneNote. Microsoft's service description separately says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. The overview page is not specific to government clouds.

A licence or meter specific to image upload is not yet published, and the roadmap item names none. Indirect cost is admin time to decide on the controls below and to brief users.

## Scope

The roadmap lists GCC, GCC High and DoD, and the platforms Android, Desktop, iOS, Mac and Web. The status is Launched with a target of February CY2026.

Users in scope are those who use Copilot Chat in those clouds; Microsoft's service description lists Chat as available in GCC, GCCH and DoD. It also says Chat isn't available in the Edge sidebar in those clouds and that the Microsoft Copilot app isn't available as a Mac desktop app there. Roles for configuring Copilot settings are described by Microsoft as an appropriate admin role such as AI Administrator; the Integrated Apps controls are described as available to Global Administrators.

## Governance guidance

### Before rollout
- Decide whether image upload in Copilot Chat is acceptable for the information your users handle, and record which of the controls in the table you rely on.
- Ask your security and compliance owners to confirm how images uploaded to Copilot Chat are stored and discovered in your government tenant, because Microsoft's page names uploaded files and not images.
- Check which platforms your users use, given the roadmap lists Mac and the service description says the Microsoft Copilot app isn't available as a Mac desktop app in government clouds.

### At rollout
- Tell users what they may and may not upload as an image, with examples that match your data handling rules.
- Test image upload in Copilot Chat with a pilot group and note any behaviour that differs from commercial documentation.

### After rollout
- Collect help-desk questions and user feedback about image upload, and record any request for a narrower control.
- Watch Message center and the roadmap item for a documented setting or licence statement for image upload, and revisit this page when one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use the Copilot app, which includes Copilot Chat, at all</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator per the page. Blocks the whole app for all users in the organisation, not image upload alone. Page: CoPilot app settings apply to Microsoft Copilot and Copilot Chat.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch for image upload in Copilot Chat on its own</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents none at the time of writing (November 2026). The Copilot image generation setting is documented for image generation, not upload.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No documented control targets image upload on its own, so the table lists the broadest control that does exist and the gap. Blocking the Copilot app in Integrated Apps is a blunt, tenant-wide step: Microsoft's page says the settings apply to both Microsoft Copilot and Copilot Chat, and it describes these controls as available to Global Administrators. The page does not say whether the portal behaves the same in every government cloud.

Microsoft's configuration page lists a separate Copilot image generation setting that allows or prevents image-generation experiences. It is described as covering image generation; this briefing does not treat it as a control over image upload.

## Open questions

- Is there, or will there be, an admin setting for image upload alone in GCC, GCC High and DoD? Watch the Microsoft 365 admin center Copilot settings page and Message center.
- Are uploaded images stored and discoverable in the same way as uploaded files in government clouds? Watch the Copilot privacy and protections page.
- Is image upload subject to Copilot Chat fair use limits, and does any licence or meter apply specifically to it? Watch the Copilot overview page.
- What does the Mac platform on the roadmap item cover, given the service description says the Microsoft Copilot app isn't available as a Mac desktop app in government clouds?

<!-- rationale
risk: Medium. Users can add images, which may show sensitive screens or documents, to prompts, and Microsoft Learn documents no switch for image upload alone; whole-app and tenant-level controls still apply.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence or meter specific to image upload, and Copilot Chat (Basic) is described as included with eligible Microsoft 365 licences.
impact: Medium. People who use Copilot Chat in GCC, GCC High or DoD tenants can notice the new option; the Learn pages read do not say it starts for everyone or that anyone must turn it on.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Microsoft says Copilot in US government clouds operates entirely within the customer's government cloud tenant. | Found: Microsoft Copilot is available in GCC, GCC High, and DoD, and operates entirely within the customer's U.S. government cloud tenant. | Fix: After the government-boundary paragraph add: 'Microsoft separately warns that optional Anthropic models for non-federal GCC customers process Customer Data outside its FedRAMP-authorized U.S. Government cloud.' Cite https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc, which says: 'When enabled, these Anthropic AI models process Customer Data outside Microsoft’s FedRAMP-authorized U.S. Government cloud.' | Source: https://learn.microsoft.com/copilot/plan/gov-overview
- [supported, minor] Why it matters; Risk assessment: Data exposure / behaviour: Microsoft's government overview says prompts, responses and generated content stay in the government cloud. | Found: Prompts, responses, and generated content stay in the government cloud. | Fix: Qualify the repeated boundary statement in Risk assessment with: 'Microsoft separately warns that optional Anthropic models for non-federal GCC customers process Customer Data outside its FedRAMP-authorized U.S. Government cloud.' Cite https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc alongside the general overview; do not infer that the image-upload feature itself uses those models. | Source: https://learn.microsoft.com/copilot/plan/gov-overview
- [supported, minor] controls[0].governs/note; Risk assessment: Security & identity; Governance controls; rationale: risk / applicability: Blocking the Copilot app through Integrated Apps applies to Microsoft Copilot and Copilot Chat and can block Chat access broadly. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: Add https://learn.microsoft.com/copilot/manage/manage-copilot-chat to sources for the broad blocking claim. Add to the existing control note: 'Microsoft guidance differs on Teams: Manage Copilot Chat says this block includes Teams, while the linked cross-application app page says Teams continues to honor Teams admin center settings.' The linked page states: 'The app is only be blocked in the Microsoft Copilot application and Outlook.' | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
-->
