---
title: "SharePoint: Remove-SPOFontFile cmdlet to delete brand font files"
slug: "sharepoint-powershell-support-for-brand-fonts-deletion"
roadmapId: 569720
topic: "modern-work"
products: ["SharePoint"]
summary: "The Remove-SPOFontFile cmdlet lets SharePoint administrators delete custom brand font files from the Brand Fonts library in all geos. Nothing in the sources says it runs unless an administrator calls it."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "SharePoint's service description says users accessing SharePoint need an assigned licence that includes SharePoint. No licence specific to Remove-SPOFontFile is published at the time of writing (November 2026). Fonts used in Microsoft 365 applications need their own font licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","brand-center","powershell","public-cdn"]
sources:
  - title: "Remove-SPOFontFile"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spofontfile?view=sharepoint-ps"
    kind: "learn"
  - title: "Remove-SPOFontPackage"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spofontpackage?view=sharepoint-ps"
    kind: "learn"
  - title: "Get-SPOFontPackage"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spofontpackage?view=sharepoint-ps"
    kind: "learn"
  - title: "Brand Fonts"
    url: "https://learn.microsoft.com/sharepoint/brand-fonts"
    kind: "learn"
  - title: "SharePoint brand center"
    url: "https://learn.microsoft.com/sharepoint/brand-center-overview"
    kind: "learn"
  - title: "Font packages"
    url: "https://learn.microsoft.com/sharepoint/brand-center-font-packages"
    kind: "learn"
  - title: "Font Licensing for the brand center"
    url: "https://learn.microsoft.com/sharepoint/brand-font-licensing"
    kind: "learn"
  - title: "Get started with SharePoint Online Management Shell"
    url: "https://learn.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online"
    kind: "learn"
  - title: "SharePoint service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description"
    kind: "learn"
  - title: "SharePoint: PowerShell support for brand fonts deletion"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569720"
    kind: "roadmap"
videos: []
related: ["m365-admin-center-optional-public-cdn-support-in-brand-center-setup"]
controls:
  - governs: "Deleting a custom brand font file from the Brand Fonts library in all geos"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Remove-SPOFontFile -Name <font file name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spofontfile?view=sharepoint-ps"
    note: "Only allowed on the primary geo; a satellite geo gives a warning. The reference names no required role."
  - governs: "Whether a custom brand font is available for experiences, without deleting it"
    scope: "other"
    ui:
      surface: "SharePoint brand center app"
      path: "Brand Fonts library > font file > Visible"
      docs: "https://learn.microsoft.com/sharepoint/brand-fonts"
    api: null
    note: "Today's alternative to deletion: hides the font from selection; the file stays in the library."
  - governs: "Removing a brand font package that uses a font file"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Remove-SPOFontPackage -Identity <font package GUID>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spofontpackage?view=sharepoint-ps"
    note: "Removes the package only; it does not delete the associated brand font files."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-21"
    note: "New briefing: the Remove-SPOFontFile cmdlet for deleting brand font files, with its Learn reference already published while the roadmap item is In development."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 53 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Before rollout checklist (font files in the brand center app, font packages via Get-SPOFontPackage; dropped the Public CDN check) and set the licence model to included, citing the SharePoint service description."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 55 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 53
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "1be08a2bf69934bcbba999db8b100dd3"
---

## What's changing

SharePoint is adding a PowerShell cmdlet, `Remove-SPOFontFile`, that deletes a custom brand font file from the tenant's Brand Fonts library, the library the SharePoint brand center uses for custom fonts. The roadmap item says administrators can use it to remove fonts that are no longer approved, licensed or needed.

The cmdlet reference on Microsoft Learn says the font file is deleted from the primary geo and all satellite geos, and that it is no longer available for use in SharePoint afterwards. The reference also says the operation is only allowed on the primary geo location, and that trying it from a satellite geo gives a warning. It takes one mandatory parameter, `-Name`, the name of the font file, and returns a `BrandFontFileDeleteResult` object for each geo location with the deletion status.

Pages that already use the removed font stay readable and the font falls back to the Microsoft-defined font. Font packages that use the deleted file are not updated or deleted automatically. The Brand Fonts page describes the **Visible** property in the brand center app for controlling a font's availability, and points to the cmdlet for removal.

The roadmap item (ID 569720) is In development with a target of September CY2026, for Worldwide (Standard Multi-Tenant), on the Web, in General Availability and Targeted Release phases. Learn already documents the cmdlet at the time of writing (November 2026), although the roadmap status has not yet moved to Launched.

## Why it matters

Brand fonts are hosted publicly, and Learn's font licensing page says to avoid the feature if your fonts have licence restrictions such as limits on cloud hosting. Removal gives a licensing or brand owner a scripted way to withdraw a font from the tenant once it is no longer approved or its licence has lapsed, in every geo at once.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. The cmdlet matters when a font must be withdrawn: a deletion removes the file but leaves any font packages that reference it in place, so the follow-up work on packages and the pages that use them stays with the administrator.

## Risk assessment

**Data exposure**
- The font licensing page says published font files and a font catalog are stored publicly and are accessible to anyone with the URLs. Whether `Remove-SPOFontFile` also removes those public copies is not stated; confirm before relying on it to withdraw a restricted font.

**Security & identity**
- No change to identity or access is described. The reference page names no required role; the SharePoint Online Management Shell page signs in with a SharePoint administrator account. Confirm which role your administrators need before delegating the task.

**Autonomy & actions**
- The cmdlet acts only on the file named in `-Name` and deletes it from the primary geo and all satellite geos. A wrong file name or a font still in use takes effect in every geo, so check the name and the packages that use it first.

**Change & support**
- Pages that use a removed font fall back to the Microsoft-defined font, so their look can change for readers. Font packages that reference the deleted file are not updated, so expect support questions about packages that still list a font that no longer exists.

## Cost and licensing

Microsoft Learn's pages for the cmdlet and for Brand Fonts name no licence and no meter for removing a brand font file, and the brand center overview names no licence for the brand center itself. SharePoint's service description says users accessing SharePoint need an assigned licence that includes SharePoint; no licence specific to `Remove-SPOFontFile` is published at the time of writing (November 2026). The only cost the sources show is administrator time.

Two existing rules apply to the surrounding setup. The brand center overview says brand fonts require Public CDN, and that a Global Administrator must enable it before brand managers can add fonts. The font licensing page says any font used in Microsoft 365 applications requires a font licence that covers the intended use, and that for fonts Microsoft did not supply you need to review the licence agreements yourself. Removing a font does not change those obligations.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. It lists General Availability and Targeted Release as the release phases, with a September CY2026 target. The item lists no other clouds.

The cmdlet is in the Microsoft.Online.SharePoint.PowerShell module (SharePoint Online Management Shell). It targets the tenant's Brand Fonts library, which belongs to the brand center. The brand center overview says only one brand center is created, in the primary geo, which the cmdlet reference matches: the operation is only allowed on the primary geo location. Brand fonts depend on Public CDN being enabled for the tenant. A Global Administrator sets up the brand center, and site owners of the brand center site can use the app.

## Governance guidance

### Before rollout
- Confirm with brand managers whether custom brand fonts are in use.
- Identify font files in the Brand Fonts library that are no longer approved, using the brand center app, and inspect custom font packages with `Get-SPOFontPackage`.
- Agree with brand managers which administrator account runs the cmdlet and which role it needs, because the reference page names none.
- Decide how to handle font packages that reference a file you plan to delete.

### At rollout
- Update the SharePoint Online Management Shell module, then run `Remove-SPOFontFile -Name <font file name>` from a session connected to the primary geo.
- Read the returned `BrandFontFileDeleteResult` for each geo location to confirm the deletion status.
- Where you want to stop offering a font without deleting it, edit its **Visible** property in the Brand Fonts library instead.

### After rollout
- Review sites and Viva Connections experiences that used the deleted font, which now show the Microsoft-defined fallback font.
- Remove or edit font packages that still reference the deleted file; removing a package with `Remove-SPOFontPackage` does not delete the font files.
- Record the removal against the font licence that prompted it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Deleting a custom brand font file from the Brand Fonts library in all geos</strong><br><small>Tenant</small><br><small class="controls__note">Only allowed on the primary geo; a satellite geo gives a warning. The reference names no required role.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-SPOFontFile -Name &lt;font file name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spofontfile?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a custom brand font is available for experiences, without deleting it</strong><br><small class="controls__note">Today's alternative to deletion: hides the font from selection; the file stays in the library.</small></td><td data-label="Admin UI"><strong>SharePoint brand center app</strong><br>Brand Fonts library › font file › Visible <a href="https://learn.microsoft.com/sharepoint/brand-fonts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removing a brand font package that uses a font file</strong><br><small>Tenant</small><br><small class="controls__note">Removes the package only; it does not delete the associated brand font files.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-SPOFontPackage -Identity &lt;font package GUID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spofontpackage?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

`Remove-SPOFontFile` is a tenant-wide, all-geo deletion, run only from the primary geo. The reference page names no role for it. Learn documents the Visible property as the way to control a font's availability without removing it, and it documents no cmdlet for that property at the time of writing (November 2026).

Deleting a file does not delete or update the font packages that use it, and removing a package does not delete the font files, so tidying a withdrawn font takes both controls. The Learn page for font packages says packages cannot be deleted from the brand center app, only edited or made not visible.

## Open questions

- Which administrator role does `Remove-SPOFontFile` require? The reference page names none. Watch the cmdlet reference page.
- Does removal also delete the publicly stored copy of the font file and its font catalog entry, which the font licensing page says are accessible to anyone with the URLs? Watch the Brand Fonts and font licensing pages.
- Is the cmdlet off or on for tenants on arrival, and when will the roadmap status move from In development to Launched? Watch Message center and the roadmap item.
- Is there a way to see which sites and pages use a font file before deleting it, other than checking font packages? Watch the Brand Fonts page.
- Is a removal logged in the audit log? Watch the Microsoft Purview audit documentation.

<!-- rationale
risk: Low. The cmdlet deletes a font file only when an administrator runs it, and Learn says pages using a removed font stay readable and fall back to the Microsoft-defined font.
cost: Low. The only cost the sources show is administrator time; no licence or meter for the cmdlet is published, and the organisation remains responsible for its own font licences.
impact: Low. Administrators and brand managers use it; readers of pages that use a deleted font would see the Microsoft-defined fallback font.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance guidance: After rollout / behaviour: Viva Connections experiences using the deleted font now show the Microsoft-defined fallback font. | Found: Searched: Viva Connections removed font fallback Remove-SPOFontFile. Read Remove-SPOFontFile, Brand Fonts and Font packages; they establish page fallback and Viva font usage, but do not explicitly state the deletion fallback for Viva Connections experiences. | Fix: Replace the first After rollout bullet with 'Review sites that used the deleted font, whose pages now show the Microsoft-defined fallback font.' The page fallback is documented at https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spofontfile?view=sharepoint-ps.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist names package inspection and editing operations that have no corresponding controls-table row. | Found: Checklist: "inspect custom font packages with Get-SPOFontPackage"; "Remove or edit font packages". Table: file deletion, file Visible and package removal only. | Fix: Remove 'and inspect custom font packages with `Get-SPOFontPackage`' from the Before rollout bullet, and change 'Remove or edit font packages' to 'Remove font packages' in the After rollout bullet; these checklist operations have no table row. Do not add rows.
-->
