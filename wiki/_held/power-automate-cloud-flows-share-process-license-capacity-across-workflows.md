---
title: "Power Automate: share Process license capacity across cloud flows with flow groups"
slug: "power-automate-cloud-flows-share-process-license-capacity-across-workflows"
roadmapId: 576824
topic: "power-platform"
products: ["Power Automate"]
summary: "Flow groups let makers share one Power Automate Process license's daily action capacity across up to 25 solution-aware cloud flows. Nothing changes until a maker creates a group; admins need to decide who does."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "Flow groups draw on a Power Automate Process license (250,000 actions per day per license), a capacity licence bought separately from user licences. The flow group pages publish no separate price or meter for flow groups."
audiences: ["power-platform-admin","finops","maker","service-owner"]
tags: ["power-automate","licensing","cost-management","finops","solutions","automation"]
sources:
  - title: "Microsoft 365 Roadmap 576824"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576824"
    kind: "roadmap"
  - title: "Share Process license capacity with flow groups"
    url: "https://learn.microsoft.com/power-automate/flow-groups"
    kind: "learn"
  - title: "Create and manage a flow group"
    url: "https://learn.microsoft.com/power-automate/create-flow-group"
    kind: "learn"
  - title: "Types of Power Automate licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types"
    kind: "learn"
  - title: "Flow Group (flowgroup) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/flowgroup"
    kind: "learn"
  - title: "Create a table row using the Web API"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/create-entity-web-api"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Flow group creation"
    scope: "environment"
    ui:
      surface: "Power Automate (maker)"
      path: "environment > More > Flow groups > New flow group"
      docs: "https://learn.microsoft.com/power-automate/create-flow-group"
    api:
      kind: "rest"
      call: "POST <organization-uri>/api/data/v9.2/flowgroups"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/flowgroup"
    note: "Maker-side. The API creates a Dataverse group row; this call does not document assigning Process capacity or adding flows. Use the maker UI for those operations. Which roles may call the table is not stated."
  - governs: "Tenant or environment switch to turn flow groups off"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn states no admin action is required to enable the feature and documents no switch to disable it at the time of writing (November 2026)."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-16T19:09:32"
changes:
  - date: "2026-11-17"
    note: "First briefing on flow groups for sharing Process license capacity across cloud flows."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: cost wording now says no separate price or meter is published; REST row narrowed to flow group creation with the versioned Dataverse call; impact rationale trimmed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 64
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "d2ba55a29318966be921244779516e4b"
---

## What's changing

Power Automate now lets makers put up to 25 solution-aware cloud flows into a flow group that shares the capacity of one Process license, instead of giving each flow its own. A Process license provides 250,000 actions per day; assigned to a flow group, all member flows share that single daily pool and consumption is measured against the group total, not per flow.

A flow group has firm limits. It works in a single environment, takes one Process license (stacking is not available for flow groups), and a flow can belong to only one group at a time. Parent and child flows are separate members: adding a parent does not add its child flows, and each one counts toward the 25-flow limit. Cloud flows outside a solution, desktop flows, business process flows and flows already covered by a per-user Power Automate plan are not eligible.

The roadmap item is marked Launched with a target of July CY2026, for Worldwide (Standard Multi-Tenant), on the web, at General Availability. Learn says flow groups start rolling out in July 2026, become available automatically with no admin action to enable them, and that if the **Flow groups** option is missing the feature has not yet reached your environment.

## Why it matters

This is a licence-allocation tool. It lets an organisation cover several moderate-volume flows with one Process license rather than buying one per flow, which is the saving the roadmap item describes. The decision it creates for administrators is who may build groups and how the shared pool is watched, because one busy flow draws on the same 250,000 actions per day as every other member.

Microsoft has not stated that anything changes for existing flows on arrival; the feature appears for makers who choose to use it. Expect questions from makers about licensing and plan for flows that stop when a licence is changed, because the page documents that removing a member's Process license or switching its plan suspends it.

## Risk assessment

**Data exposure**

- No change documented: flow groups assign licence capacity and Learn describes no new data access.

**Security & identity**

- Learn lists Power Automate maker permissions as the prerequisite for using flow groups. No page read describes a separate role or approval step, so confirm who in your tenant can create groups and assign Process capacity to them.

**Autonomy & actions**

- Consumption is measured against the group total, so a high-volume member can use the shared pool. Learn suggests moving a flow that consistently dominates the group out and giving it a dedicated Process license. What happens to other members when the pool is exhausted is not stated.

**Change & support**

- Removing a flow's Process license or switching it to a different plan removes it from its group and suspends flows that depended on the group until they are relicensed. Plan support responses for suspended flows.
- Group membership and licence assignments are environment-specific and do not transfer through managed solutions or pipelines, so create or verify the group in each target environment and add each deployed flow.
- A parent flow added to a group does not bring its child flows; a child left out does not use the shared capacity.

## Cost and licensing

Flow groups need a Power Automate Process license with available capacity in the environment; creating a group fails if the environment has no Process capacity. Each Process license includes up to 250,000 actions per day, and a flow group takes one Process license, so the group's shared pool is 250,000 actions per day (Learn: [Share Process license capacity with flow groups](https://learn.microsoft.com/power-automate/flow-groups) and [Types of Power Automate licenses](https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types)).

The flow group pages name no separate licence, price or meter for flow groups, and no price for the Process license itself. Flows already covered by a per-user Power Automate plan are not eligible for a group. Stacking Process licenses is not available for flow groups: a flow that needs more than 250,000 actions per day needs Process licenses assigned directly to that flow.

The indirect cost is admin and maker time to size groups, create or verify them per environment and monitor the shared pool.

## Scope

Flow groups apply to solution-aware cloud flows in a single environment, with Process capacity available in that environment and users who hold Power Automate maker permissions. The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform; the record lists no other clouds. Learn describes a rollout that begins in July 2026 and continues across regions, so some environments may not show the **Flow groups** option yet.

Not eligible: cloud flows not in a solution, desktop flows (RPA), business process flows, and flows already covered by a per-user Power Automate plan.

## Governance guidance

### Before rollout

- Confirm which environments hold Process licenses with available capacity, since a group cannot be created otherwise.
- Decide which makers may create flow groups and tell them the limits: 25 flows, one Process license, one environment, one group per flow.
- Identify candidate flows by their daily action count; Learn suggests the flow's **Analytics** page, and describes predictable, moderate volumes as good candidates.
- Check that candidate flows are in solutions, and list their child flows, which must be added separately.

### At rollout

- Create the group in the environment that holds the Process capacity and add each parent and child flow explicitly.
- Keep flows with high volumes (Learn mentions flows regularly above 100,000 actions per day) on dedicated Process licenses.
- Record group names and owners so that licence changes to a member flow are not made without knowing the group effect.

### After rollout

- Review group consumption regularly and move a dominant flow out to its own Process license.
- Recreate or verify the group in the target environment after each solution or pipeline deployment, and confirm each flow is turned on and licensed.
- Check for flows suspended after a Process license was removed or a plan was switched.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Flow group creation</strong><br><small>Environment</small><br><small class="controls__note">Maker-side. The API creates a Dataverse group row; this call does not document assigning Process capacity or adding flows. Use the maker UI for those operations. Which roles may call the table is not stated.</small></td><td data-label="Admin UI"><strong>Power Automate (maker)</strong><br>environment › More › Flow groups › New flow group <a href="https://learn.microsoft.com/power-automate/create-flow-group" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST &lt;organization-uri&gt;/api/data/v9.2/flowgroups</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/flowgroup" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch to turn flow groups off</strong><br><small>Tenant</small><br><small class="controls__note">Learn states no admin action is required to enable the feature and documents no switch to disable it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Flow groups are built by makers in Power Automate; the controls above govern the group itself. Learn documents no admin setting that turns flow groups off, or that limits who may create them beyond maker permissions, at the time of writing (November 2026), and the feature page states that no admin action is required to enable it.

The Dataverse flowgroup table is documented with create, update, delete and retrieve operations; the reference does not say which roles may call them, so confirm roles before scripting. The Power Platform admin center has a Power Automate usage report that Learn recommends for deciding which flows need dedicated capacity ([Create and manage a flow group](https://learn.microsoft.com/power-automate/create-flow-group)); it reports usage and does not set a limit.

The Analytics usage check and the regular group-consumption review in the governance guidance have no monitoring row in the table above.

## Open questions

- Which roles can create or change flow groups beyond "Power Automate maker permissions", and can an administrator restrict this? Watch the Learn pages on flow groups.
- What happens to member flows when the group's shared 250,000 actions per day are exceeded? The flow group pages do not say.
- Is there a price or extra meter for flow groups, or for the Process license they use, on the licensing pages? None is stated on the flow group pages.
- When does the rollout finish across regions? Learn says it continues across regions without dates; check Message center.

<!-- rationale
risk: Medium. Removing a flow's Process license or changing its plan removes it from its group and suspends flows that relied on the group's capacity until they are relicensed.
cost: Low. The flow group pages publish no separate price or meter for flow groups themselves; they use an existing Power Automate Process license, so the cost is the licence already bought plus admin time. No price is stated on the flow group pages.
impact: Medium. Makers and flow owners who hold or request Process capacity see a new Flow groups page and licensing option.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost is low, meaning indirect cost only, because the required Process licence is assumed already bought. | Found: Power Automate Process: Capacity license (paid). The briefing says licensing.model: add-on but cost: low; the standard defines low as indirect cost only and medium as add-on licences for a subset of users, or predictable consumption. | Fix: Set cost to medium. Replace the cost rationale with: "Medium. Flow groups require paid Power Automate Process capacity. Existing available capacity can be reused; otherwise Process licences must be purchased, with admin and maker time in addition." | Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: The usage report reports consumption rather than setting a limit. | Found: The Power Automate Usage page in the Power Platform admin center shows which users and flows in your tenant are exceeding their daily Power Automate action or request limits. | Fix: Add https://learn.microsoft.com/power-platform/admin/power-automate-licensing/power-automate-usage-report to sources for the statement about the report's function. | Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/power-automate-usage-report
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist instructs readers to check Analytics and review group consumption, but neither monitoring control has a table row. | Found: Identify candidate flows by their daily action count; Learn suggests the flow's Analytics page. Review group consumption regularly. The Analytics usage check and the regular group-consumption review in the governance guidance have no monitoring row in the table above. | Fix: The checklist's Analytics daily-action check and regular group-consumption review are the monitoring steps without corresponding controls-table rows.
-->
