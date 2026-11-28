---
title: "PowerPoint on desktop: attach and reference an image when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555881"
roadmapId: 555881
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Agent Mode in PowerPoint on desktop can now use an image a user attaches when creating a presentation. The roadmap status is Launched. No administrator setting or action is documented for it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview says users with the Microsoft 365 Copilot add-on licence get the full experience of Copilot in PowerPoint. A licence tier or price specific to image referencing is not yet published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap 555881"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555881"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
videos: []
related: ["m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894","powerpoint-async-notifications-for-powerpoint-agent-windows-desktop"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Role: at least License Administrator or User Administrator. Licence control only; it does not switch image attachment on or off separately."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-22T22:57:16"
changes:
  - date: "2026-11-21"
    note: "New briefing for the Desktop roadmap item 555881; Mac (555890) and Web (555882) are tracked as separate items."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the controls note: the table documents licence assignment, not a feature-specific switch, and Microsoft's privacy page lists connected-experience controls that affect Copilot in PowerPoint."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 55 statements confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 51 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 51
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "354eb289285da0c2d73d60591eb6178f"
---

## What's changing

Copilot Agent Mode in PowerPoint on desktop can now use an image that the user attaches to a prompt when creating a presentation. The roadmap item states: "You can now attach and reference an image when creating a presentation with Copilot using Agent Mode in PowerPoint." The roadmap record lists the item as Launched, with a target date of July CY2026, release phase General Availability, platform Desktop and the Worldwide (Standard Multi-Tenant) cloud.

Microsoft's Learn release notes list the feature under October 27, 2026, as "Attach and reference an image when creating a presentation with Copilot in PowerPoint" for Windows, Web and Mac, under roadmap IDs 555890, 555881 and 555882. The note says Copilot in PowerPoint "now allows users to reference attached images during presentation creation" and that previously image referencing was not supported. Its steps are to use the Copilot pane to enter a prompt and attach an image. The note does not mention Agent Mode, and it lists three platforms where this roadmap item lists Desktop; this page reports both as written.

Microsoft lists the feature under three roadmap items. This page covers 555881 (Desktop, target July CY2026). Item 555882 covers Web (target July CY2026) and item 555890 covers Mac (target April CY2026); the record shows the same status, cloud and release phase for all three.

## Why it matters

This is a small change inside a Copilot feature that licensed users already have, so the work for an administrator is awareness, not configuration. Users can now bring an image into the prompt, so expect questions from users about what is safe to attach.

The roadmap status is Launched, so the wiki's view is to treat the feature as available to licensed users and to cover it in existing Copilot usage guidance. No source says existing behaviour changes for users who do not attach an image.

## Risk assessment

**Data exposure**

- A user chooses which image to attach, so what Copilot receives depends on the user's judgement. Images of whiteboards, screenshots or documents can carry confidential text. Microsoft's release note says the update improves content integration "without altering security or privacy controls".

**Security & identity**

- No change documented: the release note describes no new permission, identity or sign-in step for attaching an image.

**Autonomy & actions**

- The roadmap item places the feature in Agent Mode, and Microsoft Learn's release note describes it as referencing an image to produce slides that the user then reviews. Microsoft has not described what Agent Mode does with an image beyond that, so confirm in a pilot before assuming how it uses one.

**Change & support**

- Users may expect the same image support on every platform. The release note lists Windows, Web and Mac, and Microsoft tracks the platforms as separate roadmap items with different target dates, so support calls about "missing" image attachment may come from differing builds or platforms.

## Cost and licensing

The licence is the Microsoft 365 Copilot licence that covers Copilot in PowerPoint. Microsoft's Copilot overview says users with the Microsoft 365 Copilot add-on licence have "access to the full experience of Copilot in Word, Excel, PowerPoint, and OneNote". The same page says users without the add-on licence can still use Copilot in those apps under the Microsoft 365 Copilot (Basic) licence, and the requirements page says chat experiences in Word, Excel and PowerPoint vary depending on the user's licence and tenant configuration.

Which of those tiers includes image referencing is not yet published, and the release note and roadmap item name no price or meter for it. No meter is documented for this feature at the time of writing (November 2026). The indirect cost is administrator and help-desk time to brief users on what to attach. Source: [Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview).

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Desktop platform, with release phase General Availability and status Launched. Microsoft's release note lists Windows, Web and Mac for the same feature across three roadmap items; web is item 555882 and Mac is item 555890.

Users need Copilot in PowerPoint, which Microsoft ties to the Microsoft 365 Copilot (Basic) or add-on licence experience described in its overview. Microsoft's requirements page also says chat experiences in Word, Excel and PowerPoint vary with the user's licence and tenant configuration. The roadmap record and the release note state no minimum PowerPoint build and no administrator role for using the feature, and the record does not say whether Desktop includes both Windows and Mac.

## Governance guidance

### Before rollout

- Confirm which users hold the Microsoft 365 Copilot licence that gives them Copilot in PowerPoint, using the licence row in the controls table.
- Decide what staff may attach to a Copilot prompt, and add images to your existing guidance on what can be shared with Copilot.
- Test the attach-image step on the desktop build your users run, using the steps in Microsoft's release note, before telling users it is available.

### At rollout

- Tell Copilot-licensed PowerPoint users that they can attach an image to a prompt in the Copilot pane, and say what is not appropriate to attach.
- Direct questions about missing image attachment to a platform and build check first, because Microsoft tracks Desktop, Web and Mac as separate roadmap items.

### After rollout

- Watch Microsoft's release notes and the roadmap for items 555881, 555882 and 555890 for changes to platforms or dates.
- Review help-desk tickets about image attachment after the first month, and update the guidance if users attach sensitive material.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Role: at least License Administrator or User Administrator. Licence control only; it does not switch image attachment on or off separately.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls table documents Copilot licence assignment, not a feature-specific image-attachment switch; assigning licences needs at least the License Administrator or User Administrator role, per Microsoft's licence page. The licence decides who has Copilot in PowerPoint; it is not a switch for image attachment alone.

Microsoft's privacy page says that if you turn off connected experiences that analyze your content on devices in your organization, Microsoft Copilot features won't be available to your users in PowerPoint and the other apps it lists. See [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy).

Microsoft's release note for this feature describes no administrator setting for image attachment.

## Open questions

- Does the roadmap's Desktop platform cover both Windows and Mac, given that Mac is tracked separately as item 555890? Watch the roadmap record for item 555881.
- Is image referencing available to users with the Microsoft 365 Copilot (Basic) licence, or only to users with the add-on licence? Watch Microsoft's Copilot overview and the release notes.
- Does Microsoft plan an administrator control for attaching images in Copilot in PowerPoint? Watch Message center and the Copilot admin centre settings page.
- Is the attachment behaviour in the release note the same as what the roadmap calls Agent Mode? Watch the Learn release notes for a feature page.

<!-- rationale
risk: Low. Users choose to attach an image to a prompt, and Microsoft's release note says the update does not alter security or privacy controls. The gap is what users choose to attach.
cost: Low. Learn documents no separate meter or price for this feature; the known cost is the Microsoft 365 Copilot licence users already need for full Copilot in PowerPoint, plus communication time. Which licence tier covers image referencing is not yet published.
impact: Low. Only users who attach an image to a Copilot prompt in PowerPoint notice the change; nothing in the sources says existing behaviour changes for anyone else.
-->
