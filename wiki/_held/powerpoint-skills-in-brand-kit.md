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
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Microsoft documents Copilot in PowerPoint at two levels: Microsoft 365 Copilot (Basic) without the add-on, and the full experience with the Microsoft 365 Copilot add-on. Which level includes skills in Brand Kit is not yet published."
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
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 49
  unconfirmed: 0
  contradicted: 7
  attempts: 1
  hash: "d30d8014c3ea934bef89b9b72acbb17e"
---

## What's changing

Microsoft plans to let users upload a skill, a Markdown (.md) file, into a Brand Kit and then use that skill within Copilot in PowerPoint. The roadmap item's whole description is: "Upload skill (.md file) in Brand Kit and use within PPT Copilot". Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

Brand kits themselves are documented. Microsoft's brand kit governance page says they can include logos, colour palettes, fonts, images and templates, and that two Cloud Policy settings decide who can create personal brand kits and who can publish or manage official brand kits for the organisation. The page does not mention skills. Separately, the Microsoft 365 Copilot release notes for 6 October 2026 list user-defined custom skills in Copilot in PowerPoint on Windows; Microsoft has not said how that feature relates to skills stored in a Brand Kit.

The roadmap record lists the item as **In development**, targeted for **October CY2026**, General Availability, on Desktop, in the Worldwide (Standard Multi-Tenant) cloud. That target month has passed while the status still reads In development, so treat the date as a target that has not yet been met. Microsoft has not stated whether the feature is on when it arrives.

## Why it matters

A skill is a set of written instructions for Copilot. Putting one inside a brand kit means the instructions can be shared the same way the kit is shared, and an official brand kit is published to the whole organisation. That turns the brand manager group into the people who decide what instructions Copilot in PowerPoint receives for branded decks, not only which logos and fonts it uses.

Microsoft has not stated what happens on arrival or whether an administrator switch exists for skills in Brand Kit. No source says existing brand kits change. The decision worth taking now is who sits in the brand manager and brand kit creation groups, because those are the documented controls closest to this feature.

## Risk assessment

**Data exposure**
- The roadmap describes uploading a .md file into a brand kit. Microsoft has not documented where the skill file is stored or who can read it once a kit is published; confirm this before brand managers upload skills that name internal processes or sources.

**Security & identity**
- The brand kit governance page states that membership of the mail-enabled security group named in each policy grants access, and that group ownership alone does not grant permission to publish or edit official brand kits. Keep the brand manager group small, because its members decide what an official kit contains.

**Autonomy & actions**
- A skill steers what Copilot does in PowerPoint. Microsoft has not described what a Brand Kit skill can instruct Copilot to do, whether it can reference files, or whether users see the skill's text before it runs.

**Change & support**
- Users may ask why Copilot produces different decks depending on the brand kit selected. Expect questions to reach whoever owns brand kits, not only IT.

## Cost and licensing

**Licence.** The Microsoft Copilot overview page says users without the Microsoft 365 Copilot add-on licence can use Copilot in PowerPoint as Microsoft 365 Copilot (Basic), and users with the add-on licence have the full experience of Copilot in PowerPoint. Which of these includes skills in Brand Kit is not yet published.

**Meter.** Microsoft documents no meter for this feature at the time of writing (November 2026).

**Indirect costs.** Admin time to create the mail-enabled security groups and set the two brand kit policies in the Microsoft 365 Apps admin center, and brand team time to write and maintain skill files.

## Scope

- **Platforms:** Desktop, as the roadmap record lists it.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Release phase:** General Availability, targeted for October CY2026; status In development.
- **Prerequisites for brand kits:** the governance page lists an organisation assets library, an administrator with privileges to manage groups and policy configurations, and two mail-enabled security groups (brand managers, and users who can create personal brand kits).
- **Roles:** the Cloud Policy overview recommends the Office Apps Administrator role for managing Cloud Policy; Security Administrator and Global Administrator are also supported.
- Rollout mechanics and any skill-specific prerequisites are not yet published.

## Governance guidance

### Before rollout
- Check who is in the brand manager security group named in the **Elevated role for Brand Managers** policy, since its members publish official brand kits to the organisation.
- Decide whether the **Restrict brand kit creation** policy should limit personal brand kit creation to a named group, and set it in the Microsoft 365 Apps admin center.
- Agree with the brand team who writes, reviews and approves skill files before they go into an official kit.

### At rollout
- Confirm on the Microsoft 365 roadmap and in Message center whether skills in Brand Kit arrive on by default and whether a separate setting governs them.
- Test with a pilot brand manager whether adding a skill to a brand kit is limited by the two brand kit policies.
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

The two brand kit policies are Cloud Policy settings in the Microsoft 365 Apps admin center and are independent: a user must satisfy both to publish a personal brand kit as an official one. The governance page describes them as controlling who can create, edit, publish and manage brand kits; it does not mention skills, so whether they govern who can add a skill to a kit is still to be confirmed. The Elevated role for Brand Managers policy must sit in a tenant-scoped policy configuration at priority 0. Changes can take up to 24 hours. The Graph Tenant Configuration Management list of Copilot Cloud Policy settings includes no brand kit setting at the time of writing (November 2026).

## Open questions

- Is skills in Brand Kit on by default when it reaches a tenant, and is there an admin setting to turn it off? Watch Message center and the brand kit governance page.
- Do the Restrict brand kit creation and Elevated role for Brand Managers policies decide who can add or change a skill in a brand kit?
- Which licence level includes skills in Brand Kit: Microsoft 365 Copilot (Basic), or only the Microsoft 365 Copilot add-on?
- Where is an uploaded skill file stored, and are uploads and edits recorded in the audit log?
- How do Brand Kit skills relate to the user-defined custom skills already listed for Copilot in PowerPoint on Windows?

<!-- rationale
risk: Medium. A skill is a Markdown file of instructions that would travel with a brand kit to everyone who uses it; the existing brand kit policies govern who creates and publishes kits, but Microsoft has not documented how they apply to skills.
cost: Low. The only cost the sources show is admin time to set the brand kit policies and review skill content; which Copilot licence covers skills in Brand Kit is not yet published.
impact: Medium. Brand managers and the people who build presentations with Copilot in PowerPoint on desktop notice it; other users are unaffected.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: second paragraph; Open questions: final bullet / absence: Microsoft has not said how PowerPoint custom skills relate to skills stored in a Brand Kit. | Found: To learn more about skills, see Use custom skills with Copilot in PowerPoint. ... Uploaded skills can be a `.md` file or a `.zip` file. For skill format guidance, see Use custom skills with Copilot in PowerPoint. | Fix: Replace the relationship-gap sentence with: 'Microsoft documents Brand Kit skills as shared skills for Copilot in PowerPoint and links to the same custom-skill format guidance.' Cite https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint and remove the final Open questions bullet. | Source: https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint
- [contradicted, blocker] Why it matters: first paragraph; Governance guidance: Before rollout / availability: An official brand kit is published to the whole organisation. | Found: To share a Brand Kit, select Share, search for people or groups (or turn on Share with everyone in my organization), choose Can edit or Can view, and then select Save changes. Sharing doesn't publish Draft changes. | Fix: Replace 'an official brand kit is published to the whole organisation' with 'official brand kits are governed by brand managers; access is controlled through sharing with people, groups or everyone in the organization'. In the Before rollout bullet, replace 'publish official brand kits to the organisation' with 'publish and manage official brand kits'. Cite https://support.microsoft.com/en-us/microsoft-365-copilot/configure-brand-kit-access-and-governance. | Source: https://support.microsoft.com/en-us/microsoft-365-copilot/configure-brand-kit-access-and-governance
- [contradicted, blocker] front matter: defaultState; What's changing; Why it matters; Open questions / default: The feature's default state is unknown because Microsoft has not stated what happens on arrival. | Found: Once added, your brand skill is ready for anyone who has shared access to the Brand kit. ... With the Brand kit selected, select +, and then select Choose skills. | Fix: Set defaultState to 'user-opt-in'. Replace the default-unknown statements with: 'Microsoft documents a user-selected capability: add a skill to a Brand Kit, select that kit in Copilot in PowerPoint, and choose the skill. Access depends on Brand Kit permissions.' Cite https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint. Retain the narrower question about a separate tenant-wide switch. | Source: https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint
- [contradicted, blocker] Risk assessment: Autonomy & actions / absence: Microsoft has not described what a Brand Kit skill can instruct Copilot to do. | Found: Skills provide Copilot in PowerPoint with information to complete repeatable tasks. ... The body section is your instructions, telling Copilot how to do the task. | Fix: Remove 'what a Brand Kit skill can instruct Copilot to do' from the documentation-gap sentence. Microsoft links Brand Kit skills to this custom-skill guidance, which defines instruction-based tasks and supplies a worked executive-summary-slide example. Retain only the narrower unanswered questions about file references and pre-run visibility. | Source: https://support.microsoft.com/en-us/powerpoint/copilot/copilot-in-powerpoint-skills
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because Microsoft has not published whether Basic or the Copilot add-on covers skills in Brand Kit. | Found: This feature requires a Microsoft Copilot Premium license. ... A Brand Kit can bring together ... skills and connectors for how those elements should be used. | Fix: Set licensing.model to 'included' and replace the licensing-gap text with: 'Brand Kits require a Microsoft Copilot Premium license. Microsoft's Brand Kit access guidance specifies a work or school account with a Copilot add-on license for Microsoft 365.' Cite https://support.microsoft.com/topic/create-and-manage-official-brand-kits-in-microsoft-365-copilot-app-6bc8a5a7-5697-466b-9e1f-302a38d44afc and https://support.microsoft.com/en-us/microsoft-365-copilot/configure-brand-kit-access-and-governance. Remove the Basic-versus-add-on open question. Replace the cost rationale's unpublished-licensing clause with 'Brand Kits require Copilot Premium; budget for licences where intended users do not already have them.' | Source: https://support.microsoft.com/topic/create-and-manage-official-brand-kits-in-microsoft-365-copilot-app-6bc8a5a7-5697-466b-9e1f-302a38d44afc
- [contradicted, blocker] Scope: final bullet / absence: No skill-specific prerequisites are published. | Found: Select a Brand kit that you own or have shared editing access to. ... Uploaded skills can be a `.md` file or a `.zip` file. For skill format guidance, see Use custom skills with Copilot in PowerPoint. | Fix: Replace 'Rollout mechanics and any skill-specific prerequisites are not yet published' with: 'Feature-specific rollout mechanics are not published. Adding a skill requires a Brand Kit you own or have shared editing access to; Microsoft supports .md and .zip uploads and links to its custom-skill format guidance.' Cite https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint. | Source: https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint
- [contradicted, blocker] Governance controls: closing paragraph; Why it matters; Open questions; rationale: risk / applicability: Whether brand kit creation and management policies govern who can add skills to kits remains unconfirmed. | Found: Select a Brand kit that you own or have shared editing access to. ... Next to each skill, select Edit or Delete as needed. | Fix: Replace the prose and risk-rationale caveat with: 'Adding a skill requires ownership or shared editing access to the Brand Kit. Brand Kit creation and editing are governed by the documented kit policies; only brand managers can edit official kits.' Cite https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint and https://support.microsoft.com/en-us/microsoft-365-copilot/configure-brand-kit-access-and-governance. Remove the Open questions bullet asking whether the two policies decide who can add or change a skill. Keep the narrower absence of a separate tenant-wide skills switch. | Source: https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: first paragraph / absence: Microsoft Learn does not describe the feature, so the briefing relies on the roadmap description for its behaviour. | Found: Searched: '"PowerPoint" "skills" "Brand Kit"' and '"skills in Brand Kit"'. No feature-specific Learn article found. Opened Microsoft Support's Brand Skill support for Copilot in PowerPoint, which documents uploading and using the skills. | Fix: Replace the documentation-gap sentence with: 'Microsoft Support now documents uploading and using Brand Kit skills, although the roadmap record still says In development.' Cite https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint. Do not describe the passed target as proof the capability is unavailable.
- [supported, minor] Why it matters: first sentence; Risk assessment: Autonomy & actions; rationale: risk / behaviour: A skill is a set of written instructions that steers Copilot's work in PowerPoint. | Found: Skills are reusable, instruction-based capabilities that provide agents with domain expertise, workflows, and task-specific guidance. ... The body section is your instructions, telling Copilot how to do the task. | Fix: Add https://support.microsoft.com/en-us/powerpoint/copilot/copilot-in-powerpoint-skills to sources for the definition of a skill. | Source: https://support.microsoft.com/en-us/powerpoint/copilot/copilot-in-powerpoint-skills
- [supported, minor] Why it matters: first paragraph; rationale: risk / behaviour: Putting a skill in a brand kit makes it shareable with the people who have access to the kit. | Found: Once added, your brand skill is ready for anyone who has shared access to the Brand kit. | Fix: Cite https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint for the sharing statement and the risk rationale. | Source: https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint
- [supported, minor] Why it matters: first paragraph; Risk assessment: Security & identity / role: Brand managers control the content, including skills, in official brand kits used for branded presentations. | Found: Once a Brand Kit has been made official, only brand managers can make edits and changes to the Brand Kit. ... Brand Kit skills allow you to share skills with anyone who has access to the Brand Kit. | Fix: Add https://support.microsoft.com/topic/create-and-manage-official-brand-kits-in-microsoft-365-copilot-app-6bc8a5a7-5697-466b-9e1f-302a38d44afc to sources for official-kit editing and skills. | Source: https://support.microsoft.com/topic/create-and-manage-official-brand-kits-in-microsoft-365-copilot-app-6bc8a5a7-5697-466b-9e1f-302a38d44afc
- [supported, minor] Risk assessment: Data exposure / absence: Microsoft has not documented who can read the uploaded skill file once a kit is published. | Found: Searched: '"PowerPoint" "Brand Kit" "skills" "stored" share files'. Read Brand Skill support and Configure access and governance for Brand Kits; neither explicitly describes raw skill-file read permissions. | Fix: Narrow the data-exposure sentence to: 'Microsoft documents that a Brand Kit skill is available for use by anyone with shared access to the kit; its storage location and raw file-read permissions are not stated.' Cite https://support.microsoft.com/en-us/powerpoint/copilot/brand-skill-support-copilot-powerpoint.
-->
