---
title: "Access: rounded corners on form controls with CornerRadius"
slug: "access-rounded-corners-on-access-form-controls"
roadmapId: 561854
topic: "modern-work"
products: ["Access"]
summary: "Microsoft plans a CornerRadius property so Access form controls can have rounded corners. The change is cosmetic and described as something designers apply. No admin action is documented, and licensing is not feature-specific."
status: "in-development"
releasePhase: ["Current Channel","General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn lists Access among the apps in Microsoft 365 Apps, which needs an assigned licence. No licence or price specific to CornerRadius is published at the time of writing (November 2026)."
audiences: ["m365-admin","maker","change-adoption"]
tags: ["access","microsoft-365-apps","release-channels","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 561854"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561854"
    kind: "roadmap"
  - title: "About Microsoft 365 Apps in the enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/deploy/about-microsoft-365-apps"
    kind: "learn"
  - title: "Release notes for Current Channel"
    url: "https://learn.microsoft.com/officeupdates/current-channel"
    kind: "learn"
  - title: "Release Notes for Office Current Channel (Preview)"
    url: "https://learn.microsoft.com/officeupdates/current-channel-preview"
    kind: "learn"
  - title: "Object model (Access)"
    url: "https://learn.microsoft.com/office/vba/api/overview/access/object-model"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Administrator switch for rounded corners on Access form controls"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting is documented. Designers set the property per control, as the roadmap describes."
confidence: "low"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-20"
    note: "New briefing: planned CornerRadius property for Access form controls; Learn has no page on it yet."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 3 of 37 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 3 of 40 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 36
  unconfirmed: 3
  contradicted: 1
  attempts: 0
  hash: "234a01e73cff71bbcba75ad51f87cc3d"
---

## What's changing

Microsoft plans to add a CornerRadius property to Access, so that form controls can have rounded corners. The roadmap item says this brings "a softer, more modern look" to Access app designs. It gives no further detail on which controls support the property, how designers set it, or what the default value is.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. At the time of writing (November 2026), the Current Channel and Current Channel (Preview) release notes on Learn list no CornerRadius entry, and the Access VBA object model reference page returned by search does not mention the property.

The roadmap item has the status In development, with a target date of October CY2026 and a preview date of September CY2026. Its release phases are Current Channel, General Availability and Preview, its platform is Desktop, and its cloud is Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not commitments. The October CY2026 target month has passed while the status still reads In development, so treat the timing as unconfirmed until the status changes.

## Why it matters

For most tenants this is a cosmetic change to a desktop app that few people manage centrally. It matters mainly to teams that maintain Access forms with a house style, or that keep screenshots and training material of those forms, because a control's appearance could change once designers use the property.

Microsoft has not stated what happens on arrival, so this page does not claim that existing forms stay as they are or that they change. The wiki's view is that the risk is low and that the useful action is to tell Access form owners the property is planned and ask them to check their forms in a test copy once it appears in their update channel.

## Risk assessment

**Data exposure**
- No change is described: the roadmap item covers how form controls look and mentions no new data access.

**Security & identity**
- No change is described: the item mentions no new permissions, sign-in or identity behaviour.

**Autonomy & actions**
- No change is described: CornerRadius is a design property, and the roadmap item describes no automated action.

**Change & support**
- Forms that rely on a fixed look, such as screenshots in user guides or helpdesk scripts that describe a control's shape, could look different once designers apply the property; Microsoft has not said whether existing controls change by default.
- The roadmap lists Current Channel and Preview as release phases, so users on different update channels could see the property at different times. Microsoft Learn's release notes list no CornerRadius entry yet.

## Cost and licensing

Microsoft Learn's "About Microsoft 365 Apps in the enterprise" page lists Access among the apps in Microsoft 365 Apps and says a user must have a Microsoft 365 account and an assigned licence to use the apps. The roadmap item names no separate licence for CornerRadius, and no price or meter for it is published at the time of writing (November 2026).

The indirect cost is the time to test existing Access forms and to update user guidance if the appearance of controls changes.

## Scope

The roadmap item lists Desktop as the platform, Worldwide (Standard Multi-Tenant) as the cloud, and Current Channel, General Availability and Preview as release phases. It lists no US Government cloud.

Which Access file formats, form types and control types support CornerRadius is not stated in the roadmap item. Roles needed to use it are not stated either; the roadmap says designers add rounded corners to form controls.

## Governance guidance

### Before rollout
- Identify Access databases whose forms carry a house style or appear in screenshots in user guides, and tell their owners that a CornerRadius property is planned.
- Check which update channel the Microsoft 365 Apps devices of those users are on, so you know when the property can first reach them.

### At rollout
- Test a copy of one representative form once the property appears in your update channel, before form owners apply it to production databases.
- Brief helpdesk staff that rounded controls are a planned visual change, not a fault.

### After rollout
- Update screenshots and training material for the forms whose owners adopt the property.
- Re-read the roadmap item and the Current Channel release notes for a CornerRadius entry and for any default behaviour Microsoft states.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Administrator switch for rounded corners on Access form controls</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting is documented. Designers set the property per control, as the roadmap describes.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no CornerRadius property for Access and no administrator setting for it, so the table records the missing switch rather than a path. Which update channel a device is on decides when the property can first reach it, according to the roadmap's release phases.

## Open questions

- Is CornerRadius off, zero or non-zero by default on existing form controls? Watch the roadmap item and the Current Channel release notes on Microsoft Learn.
- Which Access control types support CornerRadius, and is it set in the property sheet, in VBA, or both? Watch the Access VBA reference on Microsoft Learn.
- Will any administrator setting or policy govern the property? None is documented at the time of writing.
- Why is the status still In development after the October CY2026 target month? Watch the roadmap item for a status change.

<!-- rationale
risk: Low. The roadmap describes a cosmetic property for form controls; it adds no data access, identity or automation, and no source says existing forms change on arrival.
cost: Low. Access is part of Microsoft 365 Apps, and no feature-specific licence or meter is published; the cost the sources show is testing and communication time.
impact: Low. Only people who design or use Access desktop forms would notice a rounded control; administrators have nothing to configure in a documented admin centre.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: risk / behaviour: CornerRadius adds no data access. | Found: Searched: "Access" "CornerRadius" data access permissions identity automation; read the roadmap, Access Object model and both cited release-note pages. No source explicitly establishes unchanged data access. | Fix: Replace the risk rationale with: 'Low. The roadmap describes a cosmetic property for form controls and mentions no new data access, identity behaviour or automated actions; Microsoft has not stated whether existing forms change on arrival.'
- [unsupported, minor] rationale: risk / behaviour: CornerRadius adds no identity behaviour. | Found: Searched: "Access" "CornerRadius" data access permissions identity automation; read the roadmap, Access Object model and both cited release-note pages. No source explicitly establishes unchanged identity behaviour. | Fix: Replace the risk rationale with: 'Low. The roadmap describes a cosmetic property for form controls and mentions no new data access, identity behaviour or automated actions; Microsoft has not stated whether existing forms change on arrival.'
- [unsupported, minor] rationale: risk / behaviour: CornerRadius adds no automation. | Found: Searched: "Access" "CornerRadius" data access permissions identity automation; read the roadmap, Access Object model and both cited release-note pages. No source explicitly establishes that CornerRadius adds no automation. | Fix: Replace the risk rationale with: 'Low. The roadmap describes a cosmetic property for form controls and mentions no new data access, identity behaviour or automated actions; Microsoft has not stated whether existing forms change on arrival.'
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist asks the reader to check appears in the controls table. | Found: Checklist: 'Check which update channel the Microsoft 365 Apps devices of those users are on'. The controls table contains only 'Administrator switch for rounded corners on Access form controls'. | Fix: Remove the Before rollout bullet beginning 'Check which update channel': it has no corresponding controls-table row. Do not add a control row.
-->
