---
title: "PowerPoint: Copilot for creating and editing presentations in GCC"
slug: "m365-copilot-copilot-in-powerpoint-for-government-clouds"
roadmapId: 561322
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap says Copilot in PowerPoint is rolling out to GCC for Microsoft 365 Copilot-licensed users, with brand kit support. No admin switch for it is documented; the licence is the control. Check your tenant's availability."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The roadmap states the feature is available to Microsoft 365 Copilot-licensed users. Microsoft's service description calls Microsoft 365 Copilot an add-on plan. No feature-specific charge is documented."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","powerpoint","microsoft-365-apps","licensing","admin-controls","gcc"]
sources:
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "How to Enable Enterprise Brand Images with PowerPoint Copilot"
    url: "https://learn.microsoft.com/sharepoint/enable-enterprise-brand-images-powerpoint-copilot"
    kind: "learn"
  - title: "Configure brand kit governance and organizational assets"
    url: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 561322"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561322"
    kind: "roadmap"
videos: []
related: ["m365-copilot-edit-your-document-with-copilot-in-powerpoint-in-government-clouds-gcc-high","m365-copilot-edit-your-document-with-copilot-in-powerpoint-in-government-clouds","m365-copilot-copilot-cowork-for-government-clouds"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence this capability requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Requires at least License Administrator or User Administrator. Governs the Copilot licence, not a switch specific to Copilot in PowerPoint."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: roadmap says rolling out to GCC, while Microsoft's service description still lists Edit with Copilot in PowerPoint as not currently available in GCC."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 61
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "c9e7ffd619dbc33330440b5e8b7e6402"
---

## What's changing

Microsoft plans to make Copilot in PowerPoint available in the GCC (Government Community Cloud) environment. The roadmap item says users can create, edit and refine presentations through conversation inside the presentation: start a new deck or build on an existing one, ask Copilot to generate slides, update content, improve layouts and polish design while preserving formatting, structure and branding. It says Copilot uses files, meetings, emails and more, and connects to a brand kit so users can apply branded templates, insert brand-approved images and check brand compliance.

The roadmap record lists the platforms as Desktop and Web, the release phase as General Availability and the status as Rolling out, with a target of October CY2026. These are Microsoft's plans as the record gives them; the record was fetched on 13 November 2026 and the target month has passed. No Message Center post was supplied with the item, and the record has no more-info link.

Microsoft's service description for Microsoft Copilot reads differently at the time of writing (November 2026). Its feature-availability table, which Microsoft says shows availability as of the page's last update, lists "Copilot Chat in Word, Excel, PowerPoint, and OneNote" as available in GCC, and "Edit with Copilot in Word, Excel, PowerPoint, and OneNote" as "Not currently available" in GCC. The table does not say which row this roadmap item corresponds to, and the page's last-update date was not captured, so the two sources may simply differ in age.

## Why it matters

For a GCC tenant this decides whether licensed users can build and rewrite decks with Copilot, and whether brand-approved assets feed into it. Microsoft's government-cloud overview says feature availability might differ between cloud environments and that release timing typically lags commercial, so expect pilot users to see a narrower feature set than commercial documentation shows.

Microsoft has not stated what happens on arrival, so this page does not assume that users get it automatically or that an admin must enable it. The roadmap ties it to Microsoft 365 Copilot licences, so the licences you have assigned are the practical boundary on who is affected.

## Risk assessment

**Data exposure**
- The roadmap says Copilot uses users' files, meetings and emails to shape slides. Microsoft's government-cloud overview says Microsoft Copilot's prompts, responses and generated content stay in the government cloud. How access to those sources is scoped for this specific feature is not described on the pages read; confirm it in a pilot.
- Generated slides can carry content from one source into a deck that is shared more widely. Licence assignment is the control that limits who can generate them.

**Security & identity**
- No identity or sign-in change is described for this feature. Licence assignment decides which accounts are entitled to it.

**Autonomy & actions**
- The roadmap describes Copilot editing slides, layouts and design inside the user's own presentation in response to prompts. It does not describe actions outside the presentation.

**Change & support**
- Microsoft's service description and the roadmap differ on whether editing with Copilot in PowerPoint is available in GCC. Expect support questions if a user's experience does not match the roadmap wording.
- Brand-kit features depend on brand kits being set up by your brand managers. The brand kit pages read do not state cloud availability, so confirm they work in your GCC tenant before promising branded output.

## Cost and licensing

The roadmap says the feature is available to Microsoft 365 Copilot-licensed users. Microsoft's service description states that Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites, and its footnote for premium features says a Microsoft 365 Copilot licence is required. Microsoft's licence-options page says Microsoft Copilot is available as an add-on in GCC, GCC High and DoD for eligible plans; check eligibility there before buying.

The service description and licence-options pages document no separate charge or meter for Copilot in PowerPoint at the time of writing (November 2026). Treat the cost as the add-on licence for users who do not hold it, plus admin and training time.

The service description also says Copilot Chat in Word, Excel, PowerPoint and OneNote is available for Microsoft 365 Copilot (Basic) and (Premium) users, and that Copilot Chat is not currently available in Web apps for Basic users in GCC, GCC High and DoD. Microsoft does not say which tier this roadmap item covers, so rely on the roadmap's licensed-users wording.

## Scope

The roadmap lists the cloud as GCC, the platforms as Desktop and Web, and the release phase as General Availability. GCC High and DoD are separate roadmap items with their own pages on this site. The audience is Microsoft 365 Copilot-licensed users, per the roadmap.

Microsoft's feature-availability table is the place to check which Copilot features each cloud has. Brand-kit use depends on a published brand kit, and Microsoft's brand-image page describes setting this up by publishing the organisation's Brand Kit or linking a SharePoint Organizational Asset Library or Templafy library to it.

## Governance guidance

### Before rollout
- Compare the roadmap description with the feature-availability table in Microsoft's Copilot service description, and note the differences for your help desk.
- Review which users hold the Microsoft 365 Copilot licence, using the licence-assignment row in the controls table.
- Ask your brand managers whether a published brand kit exists, and confirm with Microsoft that brand kits work in your GCC tenant.

### At rollout
- Pilot with a small licensed group on Desktop and Web, and record which of the roadmap's create, edit and brand-compliance abilities they actually see.
- Assign the licence only to the group you intend, using the licence-assignment row.

### After rollout
- Re-read the service description table each month, since Microsoft says it shows availability as of its last update.
- Review sharing on the SharePoint and OneDrive files your pilot users hold, because the roadmap says Copilot draws on their files, meetings and emails.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence this capability requires</strong><br><small>User</small><br><small class="controls__note">Requires at least License Administrator or User Administrator. Governs the Copilot licence, not a switch specific to Copilot in PowerPoint.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Licence assignment requires at least the License Administrator or User Administrator role, per Microsoft's page. The Copilot settings page in the Microsoft 365 admin center lists no setting named for Copilot in PowerPoint at the time of writing (November 2026), so the table does not claim a feature-specific switch.

Brand kit access is governed by two Microsoft 365 Apps admin center policies, Enterprise Brand Manager and Restrict brand kit creation, described at [Configure brand kit governance and organizational assets](https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets). They control who publishes and creates brand kits, not whether Copilot in PowerPoint is available.

## Open questions

- Which service-description row does this roadmap item correspond to, and when will Microsoft update the GCC availability for "Edit with Copilot in PowerPoint"? Watch the Microsoft Copilot service description and Message center.
- Does the feature arrive on for licensed users, or must an admin enable it? Microsoft has not stated a default.
- Are brand kits and organisational image libraries available to GCC tenants, and does the brand-compliance check work there?
- How is access to a user's files, meetings and emails scoped for this feature in GCC? Watch the Learn Copilot privacy pages.

<!-- rationale
risk: Medium. The roadmap says Copilot draws on users' files, meetings and emails to build slides, and Microsoft has not stated a default or a switch specific to this feature, so the licence is the lever.
cost: Low. The roadmap says it is for Microsoft 365 Copilot-licensed users, and the pages read document no separate charge or meter for it; the add-on licence itself is bought separately, so the cost is admin and adoption time.
impact: Medium. Licensed GCC users who build decks, plus brand managers, will notice it; unlicensed users are not named as in scope by the roadmap.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: How access to users' source files, meetings and emails is scoped for this feature is not documented. | Found: Microsoft Copilot only surfaces organizational data to which individual users have at least view permissions. | Fix: Replace the source-access absence sentence with 'Microsoft documents that Copilot only surfaces organizational data to which individual users have at least view permissions.' Cite https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy. Remove the corresponding Open questions bullet: the government-cloud overview also states that Copilot inherits the underlying environment's security and compliance controls. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
- [contradicted, blocker] front matter: cost; Cost and licensing; rationale: cost / consistency: Cost is low, meaning indirect cost only, although the page also budgets an add-on licence for users who do not hold it. | Found: Treat the cost as the add-on licence for users who do not hold it, plus admin and training time. / Low. ... the add-on licence itself is bought separately, so the cost is admin and adoption time. | Fix: Set cost to 'medium' and replace the cost rationale with 'Medium. Users who do not already hold Microsoft 365 Copilot need the add-on licence; existing licensed users have admin and adoption costs. The cited pages document no separate PowerPoint-specific charge or meter.' This matches the scale for add-on licences for a subset of users rather than indirect cost only.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / behaviour: Brand-kit features depend on brand managers setting up brand kits. | Found: Enterprise Brand Manager policy | Who can publish, edit, and manage official brand kits. | Members of the brand manager mail-enabled security group specified in the policy. | Fix: Narrow the sentence to 'Organization-wide use of official brand kits depends on authorized brand managers publishing them.' The source distinguishes official kits from personal kits, which permitted users can create. | Source: https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist asks readers to check published brand kits and review file sharing, but neither has a controls-table row. | Found: Ask your brand managers whether a published brand kit exists ... / Review sharing on the SharePoint and OneDrive files your pilot users hold ... / The table contains only licence assignment. | Fix: Remove the checklist bullet that asks brand managers to check for a published kit and the After rollout bullet that asks readers to review SharePoint and OneDrive sharing. Those controls have no table rows; this correction does not add rows.
-->
