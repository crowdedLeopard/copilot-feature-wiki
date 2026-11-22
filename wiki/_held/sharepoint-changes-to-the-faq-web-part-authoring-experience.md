---
title: "SharePoint: FAQ web part becomes non-AI, with AI FAQ generation in Copilot in SharePoint"
slug: "sharepoint-changes-to-the-faq-web-part-authoring-experience"
roadmapId: 570647
topic: "modern-work"
products: ["SharePoint"]
summary: "The SharePoint FAQ web part drops its built-in AI authoring; AI FAQ creation and import move to Copilot in SharePoint. No admin action is required, but tell authors and update training."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn says everyday Copilot in SharePoint capabilities are included with the Microsoft 365 Copilot licence and advanced work consumes Copilot Credits. Whether FAQ generation counts as everyday or advanced work is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","copilot-in-sharepoint","m365-copilot","restricted-content-discovery","sharepoint-news","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 570647"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570647"
    kind: "roadmap"
  - title: "MC1476319: Microsoft SharePoint: Changes to the FAQ web part authoring experience"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1476319"
    kind: "message-center"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","sharepoint-html-pages"]
controls:
  - governs: "Whether Copilot in SharePoint and AI actions appear on a site"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Existing setting, not specific to the FAQ web part. SharePoint administrators manage it by default; needs a Microsoft Copilot licence."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-22"
    note: "First briefing on the FAQ web part moving to non-AI authoring, with AI FAQ generation in Copilot in SharePoint."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "7f54b08e0037b5452d450e86ef324c6b"
---

## What's changing

The SharePoint FAQ web part will offer a standard, non-AI experience for manually creating, editing and managing FAQs. AI-assisted FAQ creation and import will move to the Copilot in SharePoint authoring experience, where authors use natural-language prompts and selected grounding sources to generate FAQ content that is saved to the compatible FAQ web part. Existing FAQ web parts and their content will continue to render without migration.

Microsoft's notice MC1476319 (published 2026-09-21) says the change affects authors who create or edit FAQs on SharePoint pages and news posts, and users who use AI-assisted authoring to generate or import FAQ content. It says rollout for Worldwide and GCC begins in late October 2026 and is expected to complete in early November 2026.

The roadmap item shows status Rolling out, target October CY2026, release phase General Availability, platform Web, and clouds Worldwide (Standard Multi-Tenant) and GCC. The target is Microsoft's plan, not a commitment.

Microsoft Learn does not describe the FAQ web part change itself at the time of writing (November 2026), so what this page says about its behaviour is the roadmap and notice description. Learn does describe Copilot in SharePoint, which is where the AI route moves.

## Why it matters

For most tenants this is a communication change, not a configuration change. Authors who relied on AI inside the FAQ web part will have to find the same capability in Copilot in SharePoint, and any training material or support article that shows the old AI workflow becomes out of date. Microsoft's notice recommends informing authors and site owners and updating training, support documentation and governance guidance.

The change also ties AI FAQ generation to Copilot in SharePoint's licensing and availability controls. Learn says users of Copilot in SharePoint need a Microsoft 365 Copilot licence, so expect authors without one to ask where the AI option went. The notice says no administrative action is required, and the roadmap item describes the FAQ web part's manual route as standard and non-AI.

## Risk assessment

**Data exposure**

- Authors choose grounding sources in Copilot in SharePoint when generating FAQs (roadmap and MC1476319). Microsoft's description does not say which sources can be selected or how they relate to the author's permissions; confirm this in a test site before authors rely on it.
- Existing FAQ web parts and their content continue to render without migration, so published FAQ content stays where it is.

**Security & identity**

- No new identity or permission model is described for the FAQ web part. Restricted Content Discovery, where enabled on a site, removes Copilot in SharePoint and AI actions from that site according to Learn, which limits where the AI route is available.

**Autonomy & actions**

- Generated FAQ content is saved to the compatible FAQ web part (MC1476319). Microsoft's description does not say whether an author reviews it before it is saved or published; confirm in a test page before authors use it on live pages.

**Change & support**

- Authors who generated or imported FAQs with AI in the web part will no longer find that route there. Expect help-desk questions and out-of-date internal guides until training is updated, as the notice recommends.

## Cost and licensing

Learn's Copilot in SharePoint page says users must have an active Microsoft 365 Copilot licence, and that everyday Copilot in SharePoint capabilities are included with it at no extra cost. It also says advanced work requires usage-based billing and consumes Copilot Credits, set up through a spending policy in the Microsoft 365 admin center.

The Learn page does not name FAQ generation, so whether it counts as everyday or advanced work, and any Copilot Credits rate for it, is not yet published. The manual, non-AI authoring route is described by the roadmap item and the notice without any licence statement.

Indirect costs are admin and communication time: telling authors and site owners, and updating training and governance documents.

## Scope

**Who:** SharePoint authors and site owners who create or edit FAQs on SharePoint pages and news posts, and users who use AI-assisted authoring to generate or import FAQ content (MC1476319).

**Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, platform Web. Learn's Copilot in SharePoint page says GCC, GCC High, DoD, Office 365 air-gapped cloud environments and Microsoft 365 operated by 21Vianet do not currently support Copilot in SharePoint. The roadmap and that page therefore point in different directions for GCC; see Open questions.

**Rollout:** the notice gives late October 2026 to early November 2026 for Worldwide and GCC. **Prerequisites:** Learn lists a Microsoft 365 Copilot licence for using Copilot in SharePoint.

## Governance guidance

### Before rollout

- Tell SharePoint authors and site owners that AI FAQ creation and import move to Copilot in SharePoint, as Microsoft's notice recommends.
- Update internal training, support documentation and governance guidance that describe the AI workflow inside the FAQ web part.
- Check which authors hold a Microsoft 365 Copilot licence, since Learn lists that licence as the prerequisite for Copilot in SharePoint.

### At rollout

- Test FAQ generation in Copilot in SharePoint on a non-production page and note whether authors can review the result before it is saved to the FAQ web part.
- Check whether sites with Restricted Content Discovery enabled still show the AI entry points authors expect; Learn says Copilot in SharePoint and AI actions do not appear there.

### After rollout

- Confirm that existing FAQ web parts on key pages and news posts still render as before.
- Review help-desk requests about missing AI options and add the answer to the updated guidance.
- Watch Message center and the Copilot in SharePoint Learn page for any Copilot Credits statement on FAQ generation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in SharePoint and AI actions appear on a site</strong><br><small>Site</small><br><small class="controls__note">Existing setting, not specific to the FAQ web part. SharePoint administrators manage it by default; needs a Microsoft Copilot licence.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting specific to the FAQ web part's authoring experience at the time of writing (November 2026), and the notice says no administrative action is required. The one documented control that governs where the AI route appears is Restricted Content Discovery, an existing site-level setting.

By default only SharePoint administrators manage it; Learn describes optional delegation to site administrators. It needs a Microsoft Copilot licence and the page's prerequisites. Learn describes it as removing AI entry points such as the Copilot button and Create pages with AI; it does not say how it affects the FAQ web part itself, so treat it as an existing control, not a switch for this change.

The preview PowerShell availability settings for Copilot in SharePoint remain in effect only until November 1, 2026 per Learn; after that date Learn points to Site AI settings and Restricted Content Discovery.

## Open questions

- Does FAQ generation in Copilot in SharePoint count as everyday work included with the Microsoft 365 Copilot licence, or as advanced work billed in Copilot Credits? Watch the Copilot in SharePoint Learn page.
- Will AI FAQ generation be available in GCC? The roadmap and MC1476319 list GCC, while Learn says GCC does not currently support Copilot in SharePoint.
- Which grounding sources can authors select, and does the result reach the author's review before it is saved to the FAQ web part? Watch the Microsoft Support article on authoring with Copilot in SharePoint linked from the notice.
- Does Restricted Content Discovery on a site remove the FAQ generation option? Learn lists entry points it removes but does not name this one.

<!-- rationale
risk: Low. The change moves an existing AI authoring route to Copilot in SharePoint and leaves existing FAQ web parts rendering as they do now; Microsoft's notice MC1476319 says no administrative action is required.
cost: Low. The known costs are author communication and training updates; Copilot in SharePoint needs a Microsoft 365 Copilot licence, and a Copilot Credits rate for FAQ generation is not yet published.
impact: Medium. SharePoint authors who create or edit FAQs on pages and news posts, and those who use AI to generate or import FAQ content, will find the AI route in a different place.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: paragraph after table / applicability: Restricted Content Discovery is the one documented control governing where the AI route appears. | Found: The Site AI settings panel lets site owners manage how users interact with AI on their site, including Copilot in SharePoint. Owners can: Hide the Copilot button on site pages for site visitors only. | Fix: Replace 'The one documented control that governs where the AI route appears is Restricted Content Discovery, an existing site-level setting.' with 'Restricted Content Discovery is an existing site-level setting that governs where Copilot in SharePoint and AI actions appear.' | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Cost and licensing; Scope; Governance guidance; rationale: cost / licensing: Users must have an active Microsoft 365 Copilot licence to use Copilot in SharePoint. | Found: Users must have an active Microsoft 365 Copilot license. | Fix: Add to Cost and licensing: 'The cited Learn page still labels Copilot in SharePoint public preview while stating that general availability begins rolling out on September 30, 2026; its requirements describe that documented transition.' Do not change the FAQ roadmap release phase. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
-->
