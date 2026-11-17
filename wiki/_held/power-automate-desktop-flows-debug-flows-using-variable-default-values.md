---
title: "Power Automate: debug desktop flows using variable default values"
slug: "power-automate-desktop-flows-debug-flows-using-variable-default-values"
roadmapId: 576784
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers can set a default value on a desktop flow variable in the designer and start a debug run from a chosen action using those values. No admin action is needed; Microsoft Learn documents no admin switch."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published as a separate licence statement. The Learn page for this feature (Manage variables and the variables pane) names no licence or meter."
audiences: ["maker","power-platform-admin","change-adoption"]
tags: ["power-automate","desktop-flows","debugging","automation"]
sources:
  - title: "Microsoft 365 Roadmap 576784"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576784"
    kind: "roadmap"
  - title: "Manage variables and the variables pane"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/manage-variables"
    kind: "learn"
  - title: "Debug a desktop flow"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/debugging-flow"
    kind: "learn"
  - title: "Get ready to debug"
    url: "https://learn.microsoft.com/power-automate/guidance/rpa-sap-playbook/getting-ready-to-debug"
    kind: "learn"
videos: []
related: ["power-automate-ai-assisted-ui-automation-repair"]
controls:
  - governs: "Whether a flow variable has a default value used by debug runs"
    scope: "maker"
    ui:
      surface: "Power Automate for desktop (maker)"
      path: "Variables pane > flow variable > Edit flow variable > Default value"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/manage-variables"
    api: null
    note: "Maker-side only. Clearing the default value turns the behaviour off for that variable, per the roadmap."
  - governs: "Tenant or environment switch for variable default values in debug runs"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin setting or API for this at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-16T19:09:02"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: documents the Edit flow variable default value and the Run from here with default values command."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 43 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 35
  unconfirmed: 4
  contradicted: 4
  attempts: 1
  hash: "1b135a127acf07c09b85a28a5e4d24f7"
---

## What's changing

Makers can assign a default value to a variable in the Power Automate for desktop flow designer and then start a debug run from a chosen action, with those defaults applied. Microsoft Learn describes this as a way to test different scenarios without modifying actions or restarting the flow from the beginning.

On the **Variables** pane, a maker opens the **Edit flow variable** dialog and sets **Default value** and a default data type. The maker then right-clicks an action and selects **Run from here with default values** (Alt+F5). Learn's existing **Run from here** command is a separate command that starts at an action and ignores earlier ones.

The roadmap item states that the feature is enabled automatically, that the value is applied only during debug runs and does not affect production executions, and that clearing the default value restores standard variable handling. Those three points come from the roadmap description; the Learn page describes the defaults as used when starting a run with defaults.

The roadmap record shows status Launched, target date June CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platform Web. The Learn page describes the desktop flow designer in Power Automate for desktop, so the roadmap's platform label does not match where the feature is used. Microsoft Learn does not state a minimum Power Automate for desktop version for this feature.

## Why it matters

This is a maker productivity change with a small governance footprint. Nothing reaches users, data or spend without a maker choosing to use it, and Microsoft has not described an administrator switch for it, so there is nothing for an administrator to approve or block.

The point for service owners is where the values end up. Learn says default values on sensitive input variables are not protected in the action modals and the flow definition in Dataverse, so makers should not use real credentials or personal data as debug defaults. Microsoft has not stated whether flow-variable defaults set for this feature are stored with the flow definition.

## Risk assessment

**Data exposure**
- A maker who types a real password, PIN or customer value as a default may leave it in the saved flow. Learn says default values of sensitive input variables are not protected in the action modals and the flow definition in Dataverse; Microsoft has not said how flow-variable defaults set for this feature are stored.
- Marking a variable as sensitive masks its value in the designer UI, which Learn describes as basic protection against someone looking at the screen.

**Security & identity**
- No change documented: the feature does not add a connection, identity or permission. Who can open and edit a desktop flow is governed by the existing sharing of the flow.

**Autonomy & actions**
- Run from here with default values starts a debug run in the maker's designer. The actions after the chosen step still run against real systems, so a test that starts mid-flow can still write to them.

**Change & support**
- Makers get a faster way to test branches. A default left on a variable could mask a missing input; the roadmap says defaults apply only to debug runs, and a Learn walkthrough elsewhere tells makers to delete default values before leaving the authoring experience.
- Learn lists one known issue: flows built or edited with Power Automate for desktop 2.14 or later cannot be opened or run in older versions.

## Cost and licensing

The Learn page for this feature, Manage variables and the variables pane, names no licence, meter or charge for it, and the roadmap item names none. Whether a separate licence applies is Not yet published.

The indirect cost is maker time to learn the commands and, where makers use sensitive values, a short rule on what may be used as a default.

## Scope

**Who:** makers who edit desktop flows in the Power Automate for desktop designer. The roadmap states that it is enabled automatically for admins, makers and marketers.

**Clouds and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and the platform Web. No other cloud is listed on the item, which is a record fact and not a statement that it is unavailable elsewhere.

**Rollout and prerequisites:** the roadmap shows status Launched with a June CY2026 target. Microsoft Learn names no minimum Power Automate for desktop version or other prerequisite for this feature.

## Governance guidance

### Before rollout
- Tell makers that default values are for debugging, and agree what may be used as one: use test data, not production credentials or personal data.
- Check that makers know to mark variables holding secrets as sensitive in the **Edit flow variable** dialog.

### At rollout
- Share the **Run from here with default values** command (Alt+F5) with makers who maintain complex desktop flows.
- Confirm with a pilot maker which Power Automate for desktop version they need, since Microsoft Learn names none for this feature.

### After rollout
- Ask makers to clear default values they no longer need, and sample shared flows for defaults that contain real values.
- Watch Message center and the Manage variables page for an administrator setting or API, which Microsoft Learn does not document at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a flow variable has a default value used by debug runs</strong><br><small>Maker</small><br><small class="controls__note">Maker-side only. Clearing the default value turns the behaviour off for that variable, per the roadmap.</small></td><td data-label="Admin UI"><strong>Power Automate for desktop (maker)</strong><br>Variables pane › flow variable › Edit flow variable › Default value <a href="https://learn.microsoft.com/power-automate/desktop-flows/manage-variables" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch for variable default values in debug runs</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin setting or API for this at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are maker-side. Microsoft Learn documents no tenant or environment setting that turns the feature off at the time of writing (November 2026), so the only brake is the maker's own choice to set a default value; the roadmap says clearing the default value restores standard handling.

Sensitive-variable masking is a separate maker setting on the same page and does not make a default value safe to store: see the risk assessment.

## Open questions

- Are default values set on flow variables stored in the flow definition in Dataverse, and are they protected when the variable is marked as sensitive? Watch the Manage variables page.
- Which minimum Power Automate for desktop version includes **Run from here with default values**? Microsoft Learn names none.
- Will Microsoft add an environment or tenant setting to turn the feature off? None is documented at the time of writing (November 2026).
- Does the roadmap's platform label Web mean anything for the designer, which Learn describes in Power Automate for desktop?

<!-- rationale
risk: Low. It is a designer-side debugging aid for makers, and Microsoft Learn documents no new data access; the one exposure to watch is default values kept in the flow definition.
cost: Low. The only cost the sources show is maker time and training; the Learn page for this feature names no licence or meter, and the roadmap item states none.
impact: Low. Only makers who build and debug desktop flows in the designer notice it; production runs are described by the roadmap as unaffected.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Risk assessment: Data exposure; Open questions / absence: Microsoft has not stated whether flow-variable defaults are stored with the flow definition in Dataverse. | Found: The limit applies to the definition of the desktop flow saved in Dataverse, which can't exceed 16M characters. The issue can occur with a large desktop flow, such as when actions have large property values or variables have large default values. | Fix: Replace the storage-absence statements with: 'For desktop flows saved in Dataverse using v2 schema, Microsoft documents variable default values as contributing to the stored flow definition.' Cite https://learn.microsoft.com/power-automate/desktop-flows/schema. Narrow the open question to protection of flow-variable debug defaults when marked sensitive. | Source: https://learn.microsoft.com/power-automate/desktop-flows/schema
- [unsupported, major] Risk assessment: Security & identity / behaviour: The feature does not add a connection. | Found: Searched: "Run from here with default values" license permission connection storage. Opened manage-variables, debugging-flow and developer/desktop-flow-public-apis; none explicitly states this connection assurance. | Fix: Remove 'connection' from the assurance, or replace the whole sentence with 'The roadmap describes a designer-side debugging capability.'
- [unsupported, major] Risk assessment: Security & identity / behaviour: The feature does not add an identity. | Found: Searched: "Run from here with default values" license permission connection storage. Opened manage-variables, debugging-flow and developer/desktop-flow-public-apis; no passage specifies an unchanged identity model for this feature. | Fix: Remove 'identity' from the assurance, or replace the whole sentence with 'The roadmap describes a designer-side debugging capability.'
- [unsupported, blocker] Risk assessment: Security & identity / role: The feature does not add a permission. | Found: Searched: "Run from here with default values" license permission connection storage. Opened manage-variables, governance and developer/desktop-flow-public-apis; no passage states this feature needs no additional permissions. | Fix: Remove the assurance about permissions; replace the whole sentence with 'The roadmap describes a designer-side debugging capability.'
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The actions after the chosen step still run against real systems and can write to them. | Found: Searched: Power Automate desktop debug run actions real data test environment updates production; "Power Automate" "debugging" "production" "data". Opened manage-variables and debugging-flow; neither explicitly describes target-system writes for this command. | Fix: Replace the sentence with advice: 'Before testing mid-flow, confirm which systems the remaining actions target and whether those actions can write data.'
- [contradicted, blocker] Governance controls / consistency: Both controls rows are maker-side. | Found: Both rows are maker-side. / governs: "Tenant or environment switch for variable default values in debug runs"; scope: "tenant" | Fix: Replace 'Both rows are maker-side.' with 'The documented default-value setting is maker-side; the second row records the absence of a dedicated tenant or environment switch.'
- [contradicted, blocker] Governance controls; Why it matters / applicability: The maker's choice is the only brake and there is nothing for an administrator to approve or block. | Found: To restrict access to Power Automate for desktop on a workstation with Windows 10 or Windows 11, use AppLocker. | Fix: Replace 'so there is nothing for an administrator to approve or block' with 'so no feature-specific administrator enablement is documented'. Replace 'so the only brake is the maker's own choice to set a default value' with 'the documented feature-specific choice is the maker setting a default value'. | Source: https://learn.microsoft.com/power-automate/desktop-flows/governance
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / applicability: Existing desktop-flow access controls govern who can open and edit a flow. | Found: To enable other makers to manage your flow and collaborate on it, share it with them with **Co-owner access**. | Fix: Add https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data to sources for the existing flow-access claim. | Source: https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist tells readers to check sensitive-variable masking, but the controls table has no masking row. | Found: Check that makers know to mark variables holding secrets as sensitive in the **Edit flow variable** dialog. / Controls rows cover variable defaults and an undocumented tenant or environment switch. | Fix: Remove the checklist bullet 'Check that makers know to mark variables holding secrets as sensitive in the **Edit flow variable** dialog.' The risk assessment can retain its documented masking explanation.
-->
