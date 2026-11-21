---
title: "Microsoft Purview: sensitivity label groups replace parent labels (GCC, GCC High and DoD)"
slug: "microsoft-purview-compliance-portal-information-protection-sensitivity-label-grouping-mode"
roadmapId: 386901
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to replace parent labels with label groups in GCC, GCC High and DoD (target November CY2026). Label admins should plan for the migration, which Learn describes as irreversible."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Learn says per-user subscriptions support sensitivity labels, with requirements that depend on the features used, and that admins also need a licence to manage them. No licence or price specific to label groups is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","information-protection","sensitivity-labels","governance","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 386901"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=386901"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 386900"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=386900"
    kind: "roadmap"
  - title: "Migrate parent sensitivity labels to label groups"
    url: "https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme"
    kind: "learn"
  - title: "Learn about sensitivity labels"
    url: "https://learn.microsoft.com/purview/sensitivity-labels"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "New-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-label"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
videos: []
related: ["sensitivity-labels"]
controls:
  - governs: "Migration of parent labels to label groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Migrate to the modern label scheme > Get started > Review new scheme > New label scheme > Migrate"
      docs: "https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme"
    api: null
    note: "Banner appears only where migration is available. The Set-PolicyConfig reference lists -MigrateLabelScheme but does not document its effect; no verified migration call is given here."
  - governs: "Creating a label group to hold labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > + Create > Label group"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api: null
    note: "The New-Label reference lists -IsLabelGroup but does not document its effect; no verified label-group creation call is given here."
  - governs: "Which labels a policy publishes, including new same-name sublabels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy > Choose sensitivity labels to publish > Choose sensitivity labels to publish"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity <policy> -RemoveLabels <label>"
      docs: "https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme"
    note: "The migration page uses this command to unpublish the new sublabels. Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-28T22:58:08"
changes:
  - date: "2026-11-21"
    note: "First briefing for roadmap item 386901, the GCC, GCC High and DoD entry for label groups replacing parent labels."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 67 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: label-group creation and migration PowerShell sides now read Not yet documented, portal paths completed, licensing page named, one unsupported checklist step removed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 71
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "f2fae9a080a99868912078f1f392e123"
---

## What's changing

The roadmap item states that the sensitivity labelling scheme will be simplified to consist of labels and label groupings. These groupings let admins organise and categorise their labels, which was previously done with parent labels. This item covers GCC, GCC High and DoD on the web, as General Availability. The roadmap status is In development with a target of November CY2026, and Microsoft's target is not a launch date.

Microsoft Learn already describes the replacement without naming a cloud. It says label groups are now replacing parent labels, that label groups have configuration options only for name, description, colour and priority, and that you can't publish label groups themselves, only the labels within them. Migrating converts existing parent labels into label groups. Learn calls the migration irreversible.

Where a parent label is configured for encryption, content marking, auto-labelling or PowerShell advanced settings, is included in a different publishing policy from its sublabels, or has a different label scope from its sublabels, migration also creates a sublabel with the same name, GUID and settings as the parent. The new label group receives a new GUID. Learn says that, without reconfiguration, this sublabel is available to select in a policy where the parent label couldn't be selected before.

Learn says migration is automatic for tenants created on or after October 1, 2025, or where migration would not create a new same-name sublabel. Otherwise an admin starts it from a banner on the Sensitivity labels page, and the page says migration is gradually rolling out. Microsoft has not stated how this applies in GCC, GCC High and DoD. Microsoft also lists the feature under roadmap item 386900 for Worldwide (Standard Multi-Tenant), with status Launched and a target of December CY2025.

## Why it matters

The practical exposure is the same-name sublabels. A parent label that was never meant to be applied by itself, but carries encryption or content markings, can turn into a label users may choose once a policy publishes it. Plan the decision, to unpublish or to edit, before migration runs, because Learn says the migration cannot be reversed.

Microsoft has not stated what happens on arrival in GCC, GCC High and DoD. No source says existing label behaviour changes before an admin acts, but Learn does describe automatic migration for tenants that have no applicable parent labels, so treat the change as one that may arrive without a click and prepare now.

## Risk assessment

**Data exposure**
- A parent label with encryption or content marking produces a same-name sublabel with the parent's settings. Until it is edited or unpublished, it is selectable in any policy that publishes it. The label policy row in the controls table is the control.

**Security & identity**
- The sublabel keeps the parent's GUID and the label group gets a new one. Services or scripts that referenced the parent by GUID therefore keep pointing at the sublabel, not the group. Check any advanced settings that name the GUID.

**Autonomy & actions**
- Label groups can't be published and hold no settings beyond name, description, colour and priority, so they apply nothing to content by themselves. Migration is automatic in the cases Learn lists and irreversible once run.

**Change & support**
- The New label scheme page flags naming conflicts that must be fixed before migration, because sublabels need a unique name from their parent label.
- Learn does not recommend changing label configuration during migration, because changes will likely be lost, and says to allow up to 24 hours.
- Learn says sublabels in the same label group don't support the justification setting for lowering a label.

## Cost and licensing

Learn's Get started with sensitivity labels page says per-user subscriptions support sensitivity labels for Microsoft 365 apps and services, that the requirements depend on the features used, and that admins also need a licence to manage labels. It points to the Microsoft Purview service description for feature-level licensing.

No licence, meter or price specific to label groups or to the migration is published at the time of writing (November 2026). The indirect cost is admin time to review the new label scheme, resolve naming conflicts, test in a non-production tenant and unpublish or edit same-name sublabels.

## Scope

The roadmap record lists GCC, GCC High and DoD, the web platform and General Availability. Learn's overview says that for US Government tenants sensitivity labels are supported for all platforms. Neither Learn page on label groups or migration states which clouds the modern label scheme covers, so treat availability in these clouds as following the roadmap target until Microsoft says otherwise.

The audience is anyone who manages sensitivity labels. Learn lists the Information Protection role groups, the Sensitivity Label Administrator role added to a new role group, and the Compliance Data Administrator, Compliance Administrator and Security Administrator role groups as ways to get the needed permissions. The migration page tells admins to hold permissions to create and manage sensitivity labels first.

## Governance guidance

### Before rollout
- Check whether the Migrate to the modern label scheme banner appears on the Sensitivity labels page in your tenant, as Learn says availability is gradual.
- Open the New label scheme page, resolve any naming conflicts, and list which parent labels will create a same-name sublabel.
- Record which label policies publish each parent label, using Script One from the migration page, before migrating.
- Test the migration in a test tenant with the same label configuration, as Learn recommends.

### At rollout
- Run Migrate only after the review, and avoid changing label configuration while it runs.
- Unpublish new same-name sublabels from their policies, by editing the policy or running Script Two, if you do not want users to select them.
- Create new label groups for new categories with + Create > Label group.

### After rollout
- Confirm the Sensitivity labels page shows that migration is complete.
- Allow 24 hours for label and policy changes to propagate before troubleshooting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Migration of parent labels to label groups</strong><br><small>Tenant</small><br><small class="controls__note">Banner appears only where migration is available. The Set-PolicyConfig reference lists -MigrateLabelScheme but does not document its effect; no verified migration call is given here.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Migrate to the modern label scheme › Get started › Review new scheme › New label scheme › Migrate <a href="https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a label group to hold labels</strong><br><small>Tenant</small><br><small class="controls__note">The New-Label reference lists -IsLabelGroup but does not document its effect; no verified label-group creation call is given here.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › + Create › Label group <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which labels a policy publishes, including new same-name sublabels</strong><br><small>Tenant</small><br><small class="controls__note">The migration page uses this command to unpublish the new sublabels. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy › Choose sensitivity labels to publish › Choose sensitivity labels to publish <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &lt;policy&gt; -RemoveLabels &lt;label&gt;</code> <a href="https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Creating and managing labels needs the Information Protection role groups or the other roles listed on the get-started page. The Set-PolicyConfig reference lists the -MigrateLabelScheme switch and the New-Label reference lists -IsLabelGroup, but neither documents its effect, so no verified migration or label-group creation call is given here; use the portal.

Unpublishing a same-name sublabel is done in the label policy, not on the label. Learn says you can't publish label groups themselves, only the labels within them.

## Open questions

- Will the modern label scheme and the migration banner reach GCC, GCC High and DoD tenants in November CY2026, and will migration run automatically for tenants with no applicable parent labels? Watch roadmap item 386901 and the migration page on Learn.
- Does the Learn migration guidance, including the 24-hour allowance, apply unchanged in the US Government clouds?
- What does Set-PolicyConfig -MigrateLabelScheme do, and is it a supported way to script migration?
- Will Microsoft publish any licence requirement specific to label groups, beyond the existing sensitivity labels licensing?

<!-- rationale
risk: Medium. Learn says label migration is irreversible, and a parent label that carries encryption, content marking or auto-labelling becomes a same-name sublabel that policies can publish.
cost: Low. The only cost the sources show is admin time to review and migrate labels. Sensitivity labels need per-user licences that depend on the features used, and no licence or meter specific to label groups is published.
impact: Low. Label administrators do the work. Learn says label groups look and behave the same to users, though a same-name sublabel can add a choice in a policy.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: third paragraph / behaviour: Having a different label scope from its sublabels is sufficient for a parent label to create a same-name sublabel. | Found: A sublabel is configured for a label scope that the parent label isn't configured for. Within the same label policy, the parent label has one or more scopes that aren't configured for any of its sublabels. | Fix: Replace 'or has a different label scope from its sublabels' with 'or has a sublabel configured for a scope the parent does not have, or, within the same label policy, has a scope not configured for any of its sublabels'. These are the specific scope conditions at https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme. | Source: https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme
-->
