---
title: "PowerPoint on the web: attach and reference an image when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555882"
roadmapId: 555882
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in PowerPoint for the web can now use an image a user attaches when creating a presentation. The roadmap status is Launched. No administrator setting for it is documented, and no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview says the Microsoft 365 Copilot add-on licence gives access to the full experience of Copilot in PowerPoint. A licence tier or price specific to image referencing is not yet published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap 555882"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555882"
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
related: ["m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555881","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894","powerpoint-async-notifications-for-powerpoint-agent-web"]
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
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-21"
    note: "New briefing for the Web roadmap item 555882; Desktop (555881) and Mac (555890) are tracked as separate items."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 49 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 48
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "8a4775974cb9064938d81222edce2849"
---

## What's changing

Copilot in PowerPoint for the web can now use an image that a user attaches when creating a presentation. The roadmap item states: "You can now reference an image when creating a presentation with Copilot using Agent Mode in PowerPoint." The roadmap record lists this item (555882) as Launched, with a target date of July CY2026, release phase General Availability, platform Web and the Worldwide (Standard Multi-Tenant) cloud.

Microsoft's Learn release notes list the feature under October 27, 2026, as "Attach and reference an image when creating a presentation with Copilot in PowerPoint" for Windows, Web and Mac. The note says Copilot in PowerPoint "now allows users to reference attached images during presentation creation" and that previously image referencing was not supported, limiting content to text only. Its steps are to use the Copilot pane to enter a prompt, attach an image and review the generated slides. The note does not mention Agent Mode, so this page reports the roadmap's Agent Mode wording and the release note's wording as each is written.

Microsoft lists the feature under three roadmap items. This page covers 555882 (Web, target July CY2026). Item 555881 covers Desktop (target July CY2026) and item 555890 covers Mac (target April CY2026); all three show the same status, cloud and release phase.

## Why it matters

This is a small addition to a Copilot feature that licensed users already have, so the work for an administrator is awareness, not configuration. Users can now bring an image into a prompt, so expect questions about what is appropriate to attach.

The roadmap status is Launched, so the wiki's view is to treat the feature as available to licensed users of PowerPoint for the web and to cover it in existing Copilot usage guidance. No source says existing behaviour changes for users who do not attach an image.

## Risk assessment

**Data exposure**

- A user chooses which image to attach, so what Copilot receives depends on the user's judgement. Screenshots, photographed whiteboards or scanned documents can carry confidential text. Microsoft's release note says the update improves content integration "without altering security or privacy controls".

**Security & identity**

- No change documented: the release note describes no new permission, identity or sign-in step for attaching an image.

**Autonomy & actions**

- The roadmap item places the feature in Agent Mode, while the release note describes a user attaching an image in the Copilot pane and then reviewing the generated slides. Microsoft has not described what Agent Mode does with an image beyond that, so confirm in a pilot before assuming how it uses one.

**Change & support**

- Users may expect the same image support on every platform. Microsoft tracks Web, Desktop and Mac as separate roadmap items with different target dates, so reports of "missing" image attachment may come from a platform or build difference.

## Cost and licensing

The licence is the Microsoft 365 Copilot licence that covers Copilot in PowerPoint. Microsoft's Copilot overview says users with the Microsoft 365 Copilot add-on licence have "access to the full experience of Copilot in Word, Excel, PowerPoint, and OneNote". The same page says users without the add-on licence can still use Copilot in those apps under the Microsoft 365 Copilot (Basic) licence, and Microsoft's requirements page says chat experiences in Word, Excel and PowerPoint vary depending on the user's licence and tenant configuration.

Which of those tiers includes image referencing is not yet published, and the release note and roadmap item name no price or meter for it. The indirect cost is administrator and help-desk time to brief users on what to attach. Sources: [Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) and [Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements).

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, with release phase General Availability and status Launched. Microsoft's release note lists Windows, Web and Mac for the same feature across three roadmap items; Desktop is item 555881 and Mac is item 555890.

Users need Copilot in PowerPoint, which Microsoft's overview ties to the Microsoft 365 Copilot (Basic) or add-on licence experience. Microsoft's requirements page also says that for Copilot to work in PowerPoint for the web, third-party cookies must be enabled. The roadmap record and the release note state no administrator role for using the feature.

## Governance guidance

### Before rollout

- Confirm which users hold the Microsoft 365 Copilot licence that gives them Copilot in PowerPoint, using the licence row in the controls table.
- Check that browser policy allows third-party cookies for PowerPoint for the web, because Microsoft's requirements page says Copilot needs them there.
- Decide what staff may attach to a Copilot prompt, and add images to your existing guidance on what can be shared with Copilot.

### At rollout

- Tell Copilot-licensed users of PowerPoint for the web that they can attach an image in the Copilot pane, and say what is not appropriate to attach.
- Test the attach-image step in PowerPoint for the web, using the steps in Microsoft's release note, before telling users it is available.

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

The table documents Copilot licence assignment, not a feature-specific switch for image attachment. Assigning licences needs at least the License Administrator or User Administrator role, per Microsoft's licence page. The licence decides who has Copilot in PowerPoint; it does not switch image attachment on or off by itself.

Microsoft's privacy page says that if you turn off connected experiences that analyze your content on devices in your organisation, Microsoft Copilot features won't be available to your users in PowerPoint and the other apps it lists, and it names Windows, Mac, iOS and Android devices. See [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy). The page does not name the web in that sentence.

Microsoft's release note for this feature describes no administrator setting for image attachment.

## Open questions

- Is image referencing available to users with the Microsoft 365 Copilot (Basic) licence, or only to users with the add-on licence? Watch Microsoft's Copilot overview and the release notes.
- Is the attach-an-image behaviour in the release note the same as what the roadmap calls Agent Mode in PowerPoint? Watch the Learn release notes for a feature page.
- Does Microsoft plan an administrator control for attaching images in Copilot in PowerPoint? Watch Message center and the Learn Copilot admin pages.
- Do the privacy controls for connected experiences that analyze content also apply to Copilot in PowerPoint for the web? Watch the privacy page for the platforms it lists.

<!-- rationale
risk: Low. A user chooses whether to attach an image, and Microsoft's release note says the update does not alter security or privacy controls. What users choose to attach is the remaining exposure.
cost: Low. Learn names no separate price or meter for image referencing; the known cost is the Microsoft 365 Copilot licence users already need for the full Copilot experience in PowerPoint, plus communication time.
impact: Low. Only licensed users who attach an image to a Copilot prompt in PowerPoint for the web notice the change; no source says existing behaviour changes for anyone else.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / availability: The privacy page names Windows, Mac, iOS and Android for this connected-experience control. | Found: This applies to when you're running the most current version of these apps on Windows, Mac, iOS, or Android devices. | Fix: Replace 'and it names Windows, Mac, iOS and Android devices' with 'and says this applies when running the most current version of these apps on Windows, Mac, iOS or Android devices'. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
- [supported, minor] Governance controls; Open questions: connected experiences / absence: The cited privacy page's analyze-content sentence does not name the web. | Found: This applies to when you're running the most current version of these apps on Windows, Mac, iOS, or Android devices. | Fix: Keep the accurate observation about the cited sentence, but replace the final Open questions bullet with: 'Microsoft's sensitive and regulated customer guidance says Copilot requires the Analyze Content connected experience category and that web experiences are controlled exclusively by Cloud Policy.' Cite and add to sources https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig#connected-experiences. That page states: 'The web experiences and modern apps are controlled exclusively by the Cloud Policy.' | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to check browser policy, but the controls table has no corresponding browser-policy row. | Found: Check that browser policy allows third-party cookies for PowerPoint for the web. The table's sole row governs which users hold the Microsoft 365 Copilot licence. | Fix: Replace the Before rollout browser-policy bullet with 'Confirm that Copilot works in PowerPoint for the web before communicating the feature.' Retain the documented third-party-cookie prerequisite in Scope; do not add an unverified control row.
-->
