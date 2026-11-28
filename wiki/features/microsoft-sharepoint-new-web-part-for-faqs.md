---
title: "SharePoint: FAQ web part that uses Microsoft 365 Copilot to curate FAQs from grounding data"
slug: "microsoft-sharepoint-new-web-part-for-faqs"
roadmapId: 482198
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","SharePoint"]
summary: "A SharePoint FAQ web part that uses Microsoft 365 Copilot to help content owners draft FAQs from connected data. Microsoft says it is still in preview, and a later roadmap item moves AI FAQ authoring to Copilot in SharePoint. Review before authors rely on it."
status: "launched"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "No Microsoft page names the licence for this web part. For the route roadmap item 570647 describes, Learn says Copilot in SharePoint needs a Microsoft 365 Copilot licence, with advanced work billed in Copilot Credits."
audiences: ["service-owner","m365-admin","change-adoption"]
tags: ["sharepoint","copilot-in-sharepoint","m365-copilot","restricted-content-discovery","human-in-the-loop","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 482198"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=482198"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 570647"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570647"
    kind: "roadmap"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant?view=sharepoint-ps"
    kind: "learn"
videos: []
related: ["sharepoint-changes-to-the-faq-web-part-authoring-experience","m365-copilot-copilot-in-sharepoint","restricted-content-discovery","copilot-credits"]
controls:
  - governs: "Whether AI entry points, including Copilot in SharePoint, appear on a SharePoint site"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Existing setting, not specific to this web part; Learn's examples of removed entry points do not name the FAQ web part. SharePoint administrators manage it by default."
  - governs: "Tenant-wide switch for the FAQ web part or its AI features"
    scope: "tenant"
    ui: null
    api: null
    note: "Set-SPOTenant -DisabledWebPartIds disables only the web parts its reference lists, and the FAQ web part is not among them."
confidence: "low"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-06T23:15:10"
changes:
  - date: "2026-11-28"
    note: "First briefing on the AI-assisted SharePoint FAQ web part, noting the record's status conflict and the later roadmap item 570647 that moves AI FAQ authoring to Copilot in SharePoint."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "93ff879cc65de5a065fc710331f8fbfa"
---

## What's changing

The roadmap item describes a new SharePoint FAQ web part, powered by Microsoft 365 Copilot, that helps content owners curate FAQs on pages by working with agents and connected grounding data. It describes a "Human-in-the-Loop" approach intended to keep the FAQs accurate, but does not say who reviews the content or when. Microsoft Learn does not describe this web part at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. Microsoft has not stated whether the web part or its AI features are available to authors without an administrator doing anything.

The record and its own description disagree on status. The record shows status Launched, target April CY2026, release phases General Availability, Preview and Targeted Release, platform Web. The description says the item was mistakenly marked as launched and that the correct status is In Development, and an update dated February 24, 2026 says it is still in Preview and that Microsoft expects to move it to general availability later this year.

A later roadmap item, 570647 (status Launched, target October CY2026), states that the FAQ web part will provide a standard, non-AI experience for manually creating, editing and managing FAQs, and that AI-assisted FAQ creation and import move to the Copilot in SharePoint authoring experience. It also states that existing FAQ web parts and their content continue to render without migration. Read together, the two items suggest the AI authoring described here now sits in Copilot in SharePoint rather than inside the web part; see [the briefing on that change](/features/sharepoint-changes-to-the-faq-web-part-authoring-experience/).

## Why it matters

An FAQ is published content: whatever Copilot drafts and an author accepts is read by everyone who can open the page. That makes the grounding data the web part draws on the main question for a service owner, and Microsoft has not documented which sources an author can connect or whose permissions apply when the web part reads them. The roadmap's "Human-in-the-Loop" wording suggests an author reviews drafts, but the review step is not described.

Microsoft has not stated what happens on arrival, and no source says existing FAQ pages change under this item. The practical work is to find out which FAQ authoring route your tenant now has (this item's AI web part, or the non-AI web part with AI generation in Copilot in SharePoint that item 570647 describes) and to tell authors before their guidance and the product disagree.

## Risk assessment

**Data exposure**

- The roadmap says the web part curates FAQs from "connected grounding data". Microsoft has not documented which sources can be connected or whether generated answers reflect each reader's access to those sources; text drawn from a narrowly shared document could reach the page's whole audience once an author publishes it. Restricted Content Discovery removes AI entry points from a site (see the controls table), but Learn's examples do not name the FAQ web part.

**Security & identity**

- Microsoft has not described which identity the web part uses to read grounding data or call agents. Confirm in a test site before authors use it on sites with sensitive content.

**Autonomy & actions**

- The roadmap mentions working "with agents" and a human-in-the-loop approach, but not whether generated FAQs can be published or refreshed without an author approving each change. Treat that as unconfirmed.

**Change & support**

- Two roadmap items describe the FAQ web part differently: this one with built-in AI, item 570647 with non-AI authoring and AI generation in Copilot in SharePoint. Expect authors to find training material and the product out of step. Set-SPOTenant -DisabledWebPartIds, which disables certain web parts tenant-wide, does not list the FAQ web part.

## Cost and licensing

**Licence for this web part:** not yet published. The roadmap says the web part is powered by Microsoft 365 Copilot, but no Microsoft Learn page names the licence an author needs for it.

**The Copilot in SharePoint route:** for the route that roadmap item 570647 describes, the Learn page [Get started with Copilot in SharePoint](https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started) says users must have an active Microsoft 365 Copilot licence, and that everyday Copilot in SharePoint capabilities are included with it at no extra cost. Advanced work requires usage-based billing and consumes Copilot Credits; users need usage-based billing enabled through a spending policy in the Microsoft 365 admin center. That page does not mention FAQs, so whether FAQ generation counts as everyday or advanced work, and any Copilot Credits rate for it, is not yet published. The page still describes Copilot in SharePoint as in public preview, with general availability beginning to roll out on September 30, 2026.

**Indirect costs:** admin time to test the authoring route, and communication and training time for site owners and page authors. See [Copilot Credits](/concepts/copilot-credits/) for how the meter works.

## Scope

**Who:** content owners who curate FAQs on SharePoint pages (roadmap). The roles that can configure the web part are not yet documented; Restricted Content Discovery is managed by SharePoint administrators by default.

**Clouds and platforms:** the record lists Worldwide (Standard Multi-Tenant) and GCC, platform Web. Learn's Copilot in SharePoint page says GCC, GCC High, DoD, Office 365 air-gapped cloud environments and Microsoft 365 operated by 21Vianet don't currently support Copilot in SharePoint, which matters for GCC tenants if AI FAQ generation now runs there.

**Rollout:** the record's release phases include Targeted Release and Preview; the description says Microsoft expects general availability later this year (2026). **Prerequisites:** not yet documented for this web part.

## Governance guidance

### Before rollout

- Confirm on a test site which FAQ authoring route your tenant has: AI inside the FAQ web part (this item) or non-AI authoring with AI generation in Copilot in SharePoint (item 570647).
- Tell site owners and page authors which route applies, and update internal guides that describe AI inside the FAQ web part.
- Run Start-SPORestrictedContentDiscoverabilityReport to list sites with Restricted Content Discovery on, so you know where AI entry points are already removed.

### At rollout

- Test FAQ generation on a non-production page using a document shared more narrowly than the page, and record whether that content appears in the generated FAQ.
- Check whether an author must accept each generated question and answer before it appears on the page.
- Check whether the AI FAQ options appear on a test site where Restricted Content Discovery is on.

### After rollout

- Review FAQ web parts on widely read sites, such as home, HR and IT sites, for content drawn from restricted documents.
- Watch Message center and roadmap items 482198 and 570647 for the general availability date and any licensing statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI entry points, including Copilot in SharePoint, appear on a SharePoint site</strong><br><small>Site</small><br><small class="controls__note">Existing setting, not specific to this web part; Learn's examples of removed entry points do not name the FAQ web part. SharePoint administrators manage it by default.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the FAQ web part or its AI features</strong><br><small>Tenant</small><br><small class="controls__note">Set-SPOTenant -DisabledWebPartIds disables only the web parts its reference lists, and the FAQ web part is not among them.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting specific to the FAQ web part or its AI features at the time of writing (November 2026). Restricted Content Discovery is an existing site-level setting: Learn says users on a restricted site don't see entry points such as the Copilot button, AI actions menus or Create pages with AI, and that Copilot in SharePoint and AI actions don't appear there. It does not change permissions, and Learn lists a Microsoft Copilot licence as a prerequisite. The Set-SPOTenant -DisabledWebPartIds parameter can stop listed web parts being added to or rendering on pages, but its reference lists only Amazon Kindle, YouTube, Twitter, Embed, Microsoft Bookings and Stream.

## Open questions

- Is the AI FAQ web part described in this item still planned, or has roadmap item 570647 replaced it? Watch both roadmap items and Message center.
- Which licence does AI FAQ generation need, and does Copilot in SharePoint treat it as everyday work or as advanced work billed in Copilot Credits? Watch the Copilot in SharePoint Learn page.
- Which grounding sources can authors connect, and does a generated FAQ respect each reader's access to those sources?
- Is there a tenant or site setting to turn off AI FAQ generation, and does Restricted Content Discovery remove it?
- Will AI FAQ generation be available in GCC, given that Learn says Copilot in SharePoint is not currently supported there?

<!-- rationale
risk: Medium. Authors publish FAQ text that Microsoft 365 Copilot drafts from connected grounding data onto pages others read, and Microsoft documents no setting specific to this web part at the time of writing.
cost: Low. The only cost the sources show is admin and communication time. Licensing for this web part is not yet published, although the roadmap says it is powered by Microsoft 365 Copilot.
impact: Medium. The roadmap item is aimed at content owners who curate FAQs on SharePoint pages, a specific role rather than most users.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Data exposure; rationale: risk / behaviour: FAQ text saved to a published SharePoint page is visible to the page's audience rather than remaining a private Copilot draft. | Found: Publish the latest version of a sitePage resource, which makes the version of the page available to all users. | Fix: Add https://learn.microsoft.com/graph/api/sitepage-publish?view=graph-rest-1.0 to sources as the basis for the published-page visibility statement. Keep the statement scoped to content on a published page, as it already is. | Source: https://learn.microsoft.com/graph/api/sitepage-publish?view=graph-rest-1.0
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: Feature-specific entitlement for the original FAQ web part is unpublished, so the page labels its licensing model unknown. | Found: To access SharePoint, users in your organization need to be assigned a license that includes SharePoint. | Fix: Set licensing.model to included for the SharePoint base entitlement. Replace the first licensing.notes sentence and the first Cost and licensing paragraph with: 'SharePoint access requires a licence that includes SharePoint. Microsoft has not published a licence requirement specific to the original AI FAQ web part.' Cite https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description. Preserve the separate Microsoft 365 Copilot requirement for the Copilot in SharePoint authoring route; do not claim that the base SharePoint licence includes AI authoring. | Source: https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description
-->
