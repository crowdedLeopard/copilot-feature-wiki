---
title: "PowerPoint on Mac: attach and reference an image when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po"
roadmapId: 555890
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Agent Mode in PowerPoint on Mac can now reference an attached image when creating a presentation. The roadmap status is Launched. No separate admin switch or action is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview says users with the Microsoft 365 Copilot add-on licence get the full experience of Copilot in PowerPoint. Which licence tier covers image referencing specifically is not yet published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["powerpoint","macos","m365-copilot","copilot"]
sources:
  - title: "Microsoft 365 Roadmap 555890"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555890"
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
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Governs licence assignment for all of Copilot in PowerPoint, not image referencing alone. Needs at least the License Administrator or User Administrator role."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-22T22:57:16"
changes:
  - date: "2026-11-21"
    note: "First briefing for the Mac roadmap item; Microsoft lists the feature under three roadmap ids and Learn has only release-note coverage."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: default state is now user-opt-in, rollout text cites the release notes' safe deployment model, and connected-experiences privacy controls are described as documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 57 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6cea7e67fb896787add318df6a70d5a7"
---

## What's changing

Users can now attach an image to a prompt and have Copilot reference it when creating a presentation in PowerPoint. The roadmap item describes this as referencing an image when creating a presentation with Copilot using Agent Mode, and this item (555890) lists the Mac platform only.

Microsoft's Copilot release notes list the change under October 27, 2026 for Windows, Web and Mac, and name three roadmap ids for it: 555890, 555881 and 555882. Microsoft lists the feature under all three ids, and the roadmap records for the other two cover Desktop and Web. The release notes say image referencing was not supported before, so content was limited to text only, and that the update works without altering security or privacy controls.

The user steps in the release notes are to open PowerPoint, enter a prompt in the Copilot pane, attach an image and review the generated slides. Microsoft Learn has no separate page for this feature at the time of writing (November 2026), so what follows about behaviour is the release note's description.

The roadmap record shows status Launched with a target of April CY2026. The release notes entry is dated October 27, 2026, and the sibling roadmap items for Desktop and Web carry a July CY2026 target. The roadmap carries no preview date.

## Why it matters

For a service owner this is a small change in what users can feed to Copilot: an image they choose to attach now becomes input for presentation creation on Mac. Users choose an image to attach in the Copilot pane; no image-specific admin switch is documented as of November 2026, so assume Mac users who already have Copilot in PowerPoint may use it.

The practical effect is mostly on support and expectations. Users may ask why image referencing works on one platform and not another, and may attach images that contain customer or internal material. Brief them on what they should and should not attach until Microsoft documents how attached images are handled.

## Risk assessment

**Data exposure**

- A user decides which image to attach in the Copilot pane, so the exposure is whatever people choose to upload. Microsoft Learn does not yet describe how attached images are processed or stored for this feature; see Open questions.
- Microsoft's release note says the update works without altering security or privacy controls. That is Microsoft's statement about the change, not a description of an image-specific control.

**Security & identity**

- No new identity or permission model is described. Access to the feature follows the user's Microsoft 365 Copilot licensing (see Cost and licensing), which an admin manages by assigning licences.

**Autonomy & actions**

- The release note describes Copilot generating slides that incorporate the referenced image, with the user reviewing the result. No action outside the presentation is described.

**Change & support**

- Image referencing is listed per platform under three roadmap ids with different target months, so users on Windows, Web and Mac may see it at different times. Expect help-desk questions that reflect this.
- Microsoft documents no feature-specific admin switch for image referencing at the time of writing (November 2026), so a licence change is the control Microsoft documents that governs who has Copilot in PowerPoint at all.

## Cost and licensing

Microsoft's Copilot overview compares licence tiers. It says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and that some users without the add-on can use Copilot in PowerPoint under the Microsoft 365 Copilot (Basic) licence. It also says users with only the Copilot Chat (Basic) licence do not have access to Copilot in PowerPoint. Source: [Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview).

Which of those tiers covers image referencing in Agent Mode specifically is not yet published. The release notes entry names no licence, price or meter, and the overview page names usage-based billing for Copilot Cowork, Copilot Code and Autopilot. A credit rate or charge specific to this feature is not yet published.

Indirect cost is admin time to confirm licence assignment and to brief Mac users on what to attach.

## Scope

- **Platform:** this roadmap item (555890) lists Mac. Items 555881 (Desktop) and 555882 (Web) cover the other platforms and have their own records.
- **Cloud:** the roadmap lists Worldwide (Standard Multi-Tenant) only.
- **Release phase and status:** General Availability, status Launched, target April CY2026 on this item. The release notes entry for the change is dated October 27, 2026.
- **Users:** people with access to Copilot in PowerPoint under the licensing described above. Microsoft has not published a prerequisite specific to image referencing.
- **Rollout:** the Copilot release notes describe a safe deployment model: features gradually roll out to a subset of users within a tenant before expanding across the organisation ([release notes](https://learn.microsoft.com/microsoft-365/copilot/release-notes)).

## Governance guidance

### Before rollout

- Confirm which Mac users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (Users > Active users > user > Licenses and Apps > Licenses), so you know who can use Copilot in PowerPoint.
- Decide what guidance to give users on attaching images that contain customer, personal or confidential content.
- Check the Microsoft 365 Copilot release notes for any change to platform availability before announcing the feature.

### At rollout

- Tell Mac users that the Copilot pane in PowerPoint accepts an attached image as a reference when creating a presentation, and that results need review.
- Ask the help desk to log reports that mention image attachments so you can separate rollout timing from real faults.

### After rollout

- Review who holds the Copilot licence if licence use or user feedback shows unexpected access.
- Re-check Microsoft Learn for a page on this feature that documents handling of attached images, defaults or admin controls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Governs licence assignment for all of Copilot in PowerPoint, not image referencing alone. Needs at least the License Administrator or User Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Licence assignment is one documented control over the licensed Copilot in PowerPoint experience, and it needs at least the License Administrator or User Administrator role. It governs the whole of Copilot in PowerPoint, not image referencing alone.

Microsoft Learn documents no switch specific to attaching images in Agent Mode at the time of writing (November 2026). Microsoft's Copilot requirements page says the privacy controls for connected experiences can affect the availability of Copilot features, and links to its page on those controls. Microsoft's [privacy page](https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy) says turning off connected experiences that analyse content makes Copilot features unavailable in PowerPoint, including on Mac when running the most current app version; turning off all connected experiences also makes those features unavailable.

## Open questions

- Can an administrator turn image referencing off separately from the rest of Copilot in PowerPoint? Watch Message center and the Microsoft 365 Copilot release notes.
- How are attached images processed and stored when Copilot creates a presentation, and do sensitivity labels or retention apply to them? Watch the Copilot privacy and Agent Mode pages on Microsoft Learn.
- Which licence tier, Microsoft 365 Copilot (Basic) or the add-on, includes image referencing in Agent Mode?
- Why does this item show a target of April CY2026 while the release notes entry is dated October 27, 2026 and the sibling items target July CY2026?

<!-- rationale
risk: Low. Microsoft's release note says the update does not alter security or privacy controls, and the image is something the user chooses to attach in a prompt.
cost: Low. Microsoft documents no separate charge or meter for this capability; the only known cost is the Microsoft 365 Copilot licensing that Copilot in PowerPoint already needs, plus admin and communication time.
impact: Low. This roadmap item covers the Mac platform only, so the people who notice are Copilot users creating presentations in PowerPoint on Mac.
-->
