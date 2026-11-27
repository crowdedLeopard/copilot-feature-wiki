---
title: "PowerPoint: upload skills to a Brand Kit for use by Copilot in PowerPoint"
slug: "powerpoint-skills-in-brand-kit"
roadmapId: 569018
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let users upload a skill (.md file) into a Brand Kit and use it in Copilot in PowerPoint on desktop. Admins should review who can edit and publish brand kits before the skill files become part of them."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Brand Kits require a Microsoft Copilot Premium license. Microsoft's Brand Kit access guidance specifies a work or school account with a Copilot add-on license for Microsoft 365 to create Brand Kits."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","brand-kits","skills","m365-copilot","cloud-policy"]
sources:
  - title: "Configure brand kit governance and organizational assets"
    url: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Brand Skill support for Copilot in PowerPoint"
    url: "https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint"
    kind: "docs"
  - title: "Configure access and governance for Brand Kits"
    url: "https://support.microsoft.com/en-us/microsoft-365-copilot/configure-brand-kit-access-and-governance"
    kind: "docs"
  - title: "Create and manage official Brand kits in the Microsoft Copilot app"
    url: "https://support.microsoft.com/topic/create-and-manage-official-brand-kits-in-microsoft-365-copilot-app-6bc8a5a7-5697-466b-9e1f-302a38d44afc"
    kind: "docs"
  - title: "Use custom skills with Copilot in PowerPoint"
    url: "https://support.microsoft.com/en-us/powerpoint/copilot/copilot-in-powerpoint-skills"
    kind: "docs"
  - title: "PowerPoint: Skills in Brand Kit"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569018"
    kind: "roadmap"
videos: []
related: ["cloud-policy","m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-presentatio","m365-copilot-copilot-chat-apply-your-brand-kit-and-style-to-visual-creations"]
controls:
  - governs: "Who can publish, edit and manage official brand kits for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy > Policies > Elevated role for Brand Managers"
      docs: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    api: null
    note: "Set to Enabled with the brand manager group's email address, in a tenant-scoped policy at priority 0. The page does not say it covers skills."
  - governs: "Who can create and edit personal brand kits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy > Start with the basics > Choose the scope > Configure Settings > Restrict brand kit creation"
      docs: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    api: null
    note: "Set Configuration setting to Enabled and give the security group email address. The page does not say it covers skills."
  - governs: "Tenant-wide switch for skills in Brand Kit"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to skills in Brand Kit is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-09-23T22:59:12"
changes:
  - date: "2026-11-27"
    note: "New briefing: skills uploaded to a Brand Kit for Copilot in PowerPoint on desktop, with the two brand kit Cloud Policy settings."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: Microsoft Support now documents Brand Kit skills; default set to user-opt-in, licensing to Copilot Premium, and skill access tied to Brand Kit edit and share permissions."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 62
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "62bcc02402a8c972a50e8a5761cb9e02"
---

## What's changing

Microsoft plans to let users upload a skill, a Markdown (.md) file, into a Brand Kit and then use that skill within Copilot in PowerPoint. The roadmap item's whole description is: "Upload skill (.md file) in Brand Kit and use within PPT Copilot". Microsoft Support now documents uploading and using Brand Kit skills, although the roadmap record still says In development. Microsoft documents a user-selected capability: add a skill to a Brand Kit, select that kit in Copilot in PowerPoint, and choose the skill. Access depends on Brand Kit permissions.

Brand kits themselves are documented. Microsoft's brand kit governance page says they can include logos, colour palettes, fonts, images and templates, and that two Cloud Policy settings decide who can create personal brand kits and who can publish or manage official brand kits for the organisation. The page does not mention skills. Separately, the Microsoft 365 Copilot release notes for 6 October 2026 list user-defined custom skills in Copilot in PowerPoint on Windows. Microsoft documents Brand Kit skills as shared skills for Copilot in PowerPoint and links to the same custom-skill format guidance.

The roadmap record lists the item as **In development**, targeted for **October CY2026**, General Availability, on Desktop, in the Worldwide (Standard Multi-Tenant) cloud. That target month has passed while the status still reads In development.

## Why it matters

A skill is a set of written instructions for Copilot. Putting one inside a brand kit means the instructions can be shared the same way the kit is shared, and official brand kits are governed by brand managers; access is controlled through sharing with people, groups or everyone in the organisation. That turns the brand manager group into the people who decide what instructions Copilot in PowerPoint receives for branded decks, not only which logos and fonts it uses.

Microsoft documents skills in Brand Kit as something a user chooses: a skill is added to a Brand Kit, and a user selects that kit in Copilot in PowerPoint and chooses the skill. No source says existing brand kits change. Adding a skill requires ownership or shared editing access to the Brand Kit. Brand Kit creation and editing are governed by the documented kit policies; only brand managers can edit official kits. The decision worth taking now is who sits in the brand manager and brand kit creation groups.

## Risk assessment

**Data exposure**
- The roadmap describes uploading a .md file into a brand kit. Microsoft documents that a Brand Kit skill is available for use by anyone with shared access to the kit; its storage location and raw file-read permissions are not stated. Confirm this before brand managers upload skills that name internal processes or sources.

**Security & identity**
- The brand kit governance page states that membership of the mail-enabled security group named in each policy grants access, and that group ownership alone does not grant permission to publish or edit official brand kits. Keep the brand manager group small, because its members decide what an official kit contains.

**Autonomy & actions**
- A skill steers what Copilot does in PowerPoint: Microsoft's custom-skill guidance describes a skill's body as instructions telling Copilot how to do the task. Microsoft has not described whether a Brand Kit skill can reference files, or whether users see the skill's text before it runs.

**Change & support**
- Users may ask why Copilot produces different decks depending on the brand kit selected. Expect questions to reach whoever owns brand kits, not only IT.

## Cost and licensing

**Licence.** The Microsoft Copilot overview page says users without the Microsoft 365 Copilot add-on licence can use Copilot in PowerPoint as Microsoft 365 Copilot (Basic), and users with the add-on licence have the full experience of Copilot in PowerPoint. Brand Kits require a Microsoft Copilot Premium license, according to Microsoft's page on creating and managing official Brand Kits. Microsoft's Brand Kit access guidance specifies a work or school account with a Copilot add-on license for Microsoft 365 to create Brand Kits.

**Meter.** Microsoft documents no meter for this feature at the time of writing (November 2026).

**Indirect costs.** Admin time to create the mail-enabled security groups and set the two brand kit policies in the Microsoft 365 Apps admin center, and brand team time to write and maintain skill files.

## Scope

- **Platforms:** Desktop, as the roadmap record lists it.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Release phase:** General Availability, targeted for October CY2026; status In development.
- **Prerequisites for brand kits:** the governance page lists an organisation assets library, an administrator with privileges to manage groups and policy configurations, and two mail-enabled security groups (brand managers, and users who can create personal brand kits).
- **Roles:** the Cloud Policy overview recommends the Office Apps Administrator role for managing Cloud Policy; Security Administrator and Global Administrator are also supported.
- Feature-specific rollout mechanics are not published. Adding a skill requires a Brand Kit you own or have shared editing access to; Microsoft supports .md and .zip uploads and links to its custom-skill format guidance.

## Governance guidance

### Before rollout
- Check who is in the brand manager security group named in the **Elevated role for Brand Managers** policy, since its members publish and manage official brand kits.
- Decide whether the **Restrict brand kit creation** policy should limit personal brand kit creation to a named group, and set it in the Microsoft 365 Apps admin center.
- Agree with the brand team who writes, reviews and approves skill files before they go into an official kit.

### At rollout
- Confirm on the Microsoft 365 roadmap and in Message center whether a separate setting governs skills in Brand Kit.
- Check which people and groups have **Can edit** access to each shared brand kit, since they can add skills to it.
- Allow for policy changes taking up to 24 hours to take effect when timing any change to the groups.

### After rollout
- Review official brand kits for the skills they contain whenever the brand manager group changes.
- Search the Microsoft Purview audit log for Cloud Policy changes to the brand kit policies.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can publish, edit and manage official brand kits for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Set to Enabled with the brand manager group's email address, in a tenant-scoped policy at priority 0. The page does not say it covers skills.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Policies › Elevated role for Brand Managers <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create and edit personal brand kits</strong><br><small>Tenant</small><br><small class="controls__note">Set Configuration setting to Enabled and give the security group email address. The page does not say it covers skills.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Start with the basics › Choose the scope › Configure Settings › Restrict brand kit creation <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for skills in Brand Kit</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to skills in Brand Kit is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The two brand kit policies are Cloud Policy settings in the Microsoft 365 Apps admin center and are independent: a user must satisfy both to publish a personal brand kit as an official one. Adding a skill requires ownership or shared editing access to the Brand Kit. Brand Kit creation and editing are governed by the documented kit policies; only brand managers can edit official kits. The Elevated role for Brand Managers policy must sit in a tenant-scoped policy configuration at priority 0. Changes can take up to 24 hours. The Graph Tenant Configuration Management list of Copilot Cloud Policy settings includes no brand kit setting at the time of writing (November 2026).

## Open questions

- Is there a tenant-wide admin setting to turn skills in Brand Kit off, separate from the brand kit policies? Watch Message center and the brand kit governance page.
- Where is an uploaded skill file stored, and are uploads and edits recorded in the audit log?

<!-- rationale
risk: Medium. A skill is a file of instructions that is available to everyone who has shared access to the brand kit holding it; adding one requires ownership or shared editing access to the kit, and only brand managers can edit official kits.
cost: Low. Beyond the licence, the cost the sources show is admin time to set the brand kit policies and review skill content. Brand Kits require Copilot Premium; budget for licences where intended users do not already have them.
impact: Medium. Brand managers and the people who build presentations with Copilot in PowerPoint on desktop notice it; other users are unaffected.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls table / applicability: The official kit policy row cautions that the governance page does not say it covers skills. | Found: Enterprise Brand Manager policy | Who can publish, edit, and manage official brand kits. | Fix: In controls[0].note and the rendered row, replace 'The page does not say it covers skills.' with 'This policy controls who can publish, edit and manage official brand kits.' The cited policy scope covers kits without excluding those containing skills. | Source: https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets
- [supported, minor] controls[1].note; Governance controls table / applicability: The personal kit policy row cautions that the governance page does not say it covers skills. | Found: Restrict brand kit creation policy | Who can create and edit personal brand kits. | Fix: In controls[1].note and the rendered row, replace 'The page does not say it covers skills.' with 'This policy controls who can create and edit personal brand kits.' The cited policy scope covers kits without excluding those containing skills. | Source: https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist asks readers to review Can edit sharing access, but the controls table has no sharing-permissions row. | Found: Check which people and groups have Can edit access to each shared brand kit, since they can add skills to it. The table contains only the two kit policies and the missing tenant-wide skill switch. | Fix: Remove the At rollout bullet 'Check which people and groups have **Can edit** access to each shared brand kit, since they can add skills to it.' It names a sharing-permissions control absent from the table; do not add a control row in this correction.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks readers to search the Purview audit log, but the controls table has no audit row. | Found: Search the Microsoft Purview audit log for Cloud Policy changes to the brand kit policies. The table contains only the two kit policies and the missing tenant-wide skill switch. | Fix: Remove the After rollout bullet 'Search the Microsoft Purview audit log for Cloud Policy changes to the brand kit policies.' It names an audit control absent from the table; do not add a control row in this correction.
-->
