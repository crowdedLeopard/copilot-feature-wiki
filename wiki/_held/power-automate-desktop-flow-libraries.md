---
title: "Power Automate: desktop flow libraries of reusable subflows"
slug: "power-automate-desktop-flow-libraries"
roadmapId: 579910
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers will be able to publish libraries of reusable subflows and use them across desktop flows. Preview is targeted for January CY2027. Licensing, controls and sharing rules are not yet published; no admin action is required."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and the Microsoft Learn page listing premium RPA features does not mention desktop flow libraries at the time of writing (November 2026)."
audiences: ["maker","power-platform-admin","change-adoption"]
tags: ["power-automate","desktop-flows","automation","governance"]
sources:
  - title: "Microsoft 365 Roadmap 579910"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579910"
    kind: "roadmap"
  - title: "Create and manage desktop flow templates"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/create-desktop-flow-templates"
    kind: "learn"
  - title: "Premium RPA features"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/premium-features"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
videos: []
related: ["power-automate-desktop-flows-configure-notifications-for-desktop-flow-checker-in-admin-por","power-automate-ai-assisted-ui-automation-repair","managed-environments"]
controls:
  - governs: "Whether desktop flow libraries are available in an environment or tenant"
    scope: "environment"
    ui: null
    api: null
    note: "Microsoft Learn documents no library-specific setting at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap-only description of desktop flow libraries, with the template comparison and open questions on licensing, sharing and controls."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 44 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 41
  unconfirmed: 3
  contradicted: 0
  attempts: 1
  hash: "b21413956adb32219f874afb407cb472"
---

## What's changing

Power Automate plans to add desktop flow libraries. According to the roadmap item, makers will be able to create and publish libraries of reusable automation building blocks (subflows) and use them across multiple desktop flows. Microsoft's stated aims are to centralise commonly used automation logic, reduce duplication, simplify maintenance and promote consistent automation practices.

Microsoft Learn does not describe desktop flow libraries yet (at the time of writing, November 2026), so everything about their behaviour here is the roadmap's description. In particular, the roadmap does not say whether a flow that uses a library refers to the published library or takes a copy of it, who can publish or consume a library, or which Power Automate for desktop version is needed.

The closest documented capability is desktop flow templates, which are a separate feature. Learn describes a template as helping makers "reuse and standardize automation logic across multiple desktop flows", and says a flow created from a template is an independent copy: publishing an updated template does not update existing flows. Do not assume libraries behave this way or the opposite.

The roadmap record shows status In development, with a preview targeted for January CY2027 and a target date of March CY2027. It lists General Availability and Preview as release phases, the Desktop platform and the Worldwide (Standard Multi-Tenant) cloud. These are Microsoft's targets, not commitments.

## Why it matters

Libraries would put shared automation logic in one place that many desktop flows depend on. For a service owner that changes where review effort should go: logic that several flows rely on needs an owner, a review step and a naming convention before makers start publishing.

Microsoft has not stated what happens on arrival or whether an administrator has to enable anything, and no source says existing behaviour changes. That makes this a capability to review ahead of the January CY2027 preview target, not an action to take now.

## Risk assessment

**Data exposure**

- A library's subflows contain automation actions that may touch files, applications or connectors. Microsoft has not described which connections or credentials a library subflow uses when a flow calls it, so confirm this in the preview before makers put sensitive steps into shared libraries.

**Security & identity**

- Who may publish, edit or consume a library is not yet documented. For comparison, Learn documents template sharing with co-owner (editable) and user (read-only) access levels; do not assume libraries follow the same model.

**Autonomy & actions**

- The roadmap item describes reusable building blocks inside desktop flows and no agent or autonomous behaviour. A flow that already runs unattended would only change if its maker adds a library to it.

**Change & support**

- If a flow refers to a published library rather than copying it, an edit to the library could reach every flow that uses it. If libraries behave like templates, flows keep a copy and do not receive updates. Microsoft has not said which applies, so plan to test it in preview before agreeing a change process.
- The Power Automate for desktop version required is not stated; confirm it before planning an update for machines that run flows.

## Cost and licensing

Licence: Not yet published. The roadmap item names no licence for desktop flow libraries. Learn's Premium RPA features page lists features such as UI elements collections ("Create, share, and use groups of predefined UI elements in multiple desktop flows") and does not list desktop flow libraries at the time of writing (November 2026). Whether libraries follow the premium RPA features is therefore unconfirmed.

Meter: No meter is documented for this feature at the time of writing.

Indirect cost: maker and administrator time to define what belongs in a library and who reviews it. Whether library content uses Dataverse storage is not stated.

## Scope

The roadmap item names Power Automate, the Desktop platform and the Worldwide (Standard Multi-Tenant) cloud; no other clouds are listed on the item. Users, licences, roles and environments in scope are not yet published, and no rollout mechanics or prerequisites are documented. The roadmap lists both Preview and General Availability phases, with a preview targeted for January CY2027 and a target date of March CY2027.

## Governance guidance

### Before rollout

- Ask the Power Automate maker community which subflows they copy between desktop flows today, to see what a library would hold first.
- Draft a short standard for library naming, ownership and review that you can adjust once Microsoft documents sharing and permissions.
- Check which environments are used for desktop flows, so you know where a preview would first appear.

### At rollout

- Test one library in a non-production environment and confirm whether a flow refers to the library or copies it, before agreeing how library changes are approved.
- Confirm which identity and connections a library subflow runs with, and whether existing Flow checker rules and data policies apply to it.
- Confirm the Power Automate for desktop version required and update the machines that need it.

### After rollout

- Check each controls row against Microsoft Learn once documentation appears, and add any setting or API that Microsoft documents.
- Review which libraries makers have published and who owns them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether desktop flow libraries are available in an environment or tenant</strong><br><small>Environment</small><br><small class="controls__note">Microsoft Learn documents no library-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No library-specific setting is documented, so the table has one row stating that gap. Existing environment-level controls for desktop flows, such as the Features page in Power Platform admin center, are documented for other desktop flow capabilities and Microsoft has not confirmed that they cover libraries. Until Microsoft says otherwise, control sits with who is given maker access to an environment.

## Open questions

- Does a flow that uses a library refer to the published library, or take a copy as desktop flow templates do? Watch the Power Automate for desktop release notes and the Learn desktop flows pages.
- Who can publish, edit and consume a library, and how is access shared? Watch the Learn desktop flows pages.
- Which licence does using or publishing a library need, and is any meter or storage charged? Watch the Premium RPA features page and Power Automate pricing.
- Is there an environment or tenant setting to turn libraries off or limit them, and does it have a Power Platform API, PowerShell or pac CLI equivalent? Watch the Power Platform admin center Features page.

<!-- rationale
risk: Low. The roadmap describes an authoring capability for makers and no source says existing flows change; how shared library content is permissioned and updated is not yet documented, so rate on today's behaviour continuing.
cost: Low. The only cost the sources show is admin and maker time to agree reuse standards; Microsoft has not published a licence or meter for desktop flow libraries.
impact: Medium. Makers who build desktop flows would notice it; the roadmap item names no end-user or admin-facing change.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Governance controls: final sentence / applicability: Until library-specific documentation appears, control over libraries sits with who is given maker access to an environment. | Found: Searched: "desktop flow libraries" connections credentials sharing permissions version storage; Power Automate desktop flows libraries data policies environment maker access unattended existing flows. Read Manage security for Power Automate; it does not establish library access requirements. | Fix: Remove 'Until Microsoft says otherwise, control sits with who is given maker access to an environment.' The general Environment maker role documentation does not establish library permissions.
- [unsupported, blocker] Risk assessment: Autonomy & actions / default: A flow that already runs unattended would only change if its maker adds a library to it. | Found: Searched: "desktop flow libraries" "unattended" "existing". Read roadmap and search excerpts from Manage desktop flows and Run unattended desktop flows; no passage guarantees existing flows change only when their maker adds a library. | Fix: Replace 'A flow that already runs unattended would only change if its maker adds a library to it.' with 'The roadmap does not describe any change to existing unattended flows.'
- [unsupported, blocker] summary: final clause / default: No administrator action is required. | Found: Searched: "desktop flow libraries" "admin" "action"; "desktop flow libraries" enable disable tenant environment setting default rollout. Read roadmap and Manage feature settings; neither says no administrator action is required. | Fix: Replace '; no admin action is required' with '; Microsoft has not stated whether admin enablement is required'. Keep defaultState as unknown.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Desktop automation actions in reusable subflows may interact with files and applications. | Found: It allows you to automate both legacy applications, such as terminal emulators, modern web and desktop applications, Excel files, and folders. | Fix: Add 'Introduction to desktop flows' (https://learn.microsoft.com/power-automate/desktop-flows/introduction) to sources for the general files-and-applications automation premise. | Source: https://learn.microsoft.com/power-automate/desktop-flows/introduction
-->
