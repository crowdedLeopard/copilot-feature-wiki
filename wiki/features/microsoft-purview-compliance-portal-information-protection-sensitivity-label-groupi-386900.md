---
title: "Microsoft Purview: sensitivity label groups replace parent labels (Worldwide)"
slug: "microsoft-purview-compliance-portal-information-protection-sensitivity-label-groupi-386900"
roadmapId: 386900
topic: "governance"
products: ["Microsoft Purview"]
summary: "In Worldwide tenants, label groups replace parent labels for organising sensitivity labels. Migration is automatic in some tenants and admin-started in others; label admins should review same-name sublabels first, as it cannot be undone."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "July CY2025"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Learn's Get started with sensitivity labels page says per-user subscriptions support sensitivity labels, with requirements depending on the features used, and that admins also need a licence to manage labels. Nothing specific to label groups is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","information-protection","sensitivity-labels","migration","governance"]
sources:
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
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "New-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-label"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
  - title: "Who can create and manage sensitivity labels and label groups (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-information-protection-sensitivity-label-grouping-mode","sensitivity-labels","role-groups"]
controls:
  - governs: "Whether and when existing parent labels are migrated to label groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Migrate to the modern label scheme > Get started > Review new scheme > New label scheme > Migrate"
      docs: "https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme"
    api: null
    note: "The banner appears only where migration is available to the tenant. Irreversible. Set-PolicyConfig lists -MigrateLabelScheme but its reference does not describe the parameter."
  - governs: "Creating a label group to hold labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > + Create > Label group"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api: null
    note: "Modern label scheme only. New-Label lists an -IsLabelGroup switch but its reference does not describe the parameter."
  - governs: "Which labels a policy publishes, including same-name sublabels created by migration"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy > Choose sensitivity labels to publish > Choose sensitivity labels to publish"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity <policy> -RemoveLabels <label>"
      docs: "https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme"
    note: "The migration page uses this command in Script Two to unpublish new sublabels. Security & Compliance PowerShell."
  - governs: "Who can create and manage sensitivity labels and label groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Use an Information Protection role group, or a custom group with Sensitivity Label Administrator. The portal steps need the Role management role."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-04T23:15:54"
changes:
  - date: "2026-11-27"
    note: "First briefing for roadmap item 386900, the Worldwide entry for label groups replacing parent labels."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 70
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "835299fdfbe5a7b8f96e07927e75b201"
---

## What's changing

Sensitivity labels in Microsoft Purview are now organised with label groups instead of parent labels. The roadmap item states that the labelling scheme will be simplified to consist only of labels and label groupings, which let admins organise and categorise labels, previously done with parent labels.

Microsoft Learn says label groups are now replacing parent labels. They look and behave the same to users, but have configuration options only for name, descriptions, colour and priority, and you can't publish label groups themselves, only the labels within them. Learn calls the result the modern label scheme. In it, admins create a group from **+ Create** > **Label group** on the **Sensitivity labels** page, then move labels in with the **Move into group** action or create labels inside the group.

Existing parent labels are converted by a migration. Learn says migration is automatic for a new tenant beginning October 1, 2025, and where migration of parent labels won't create a new sublabel with the same name. Otherwise an admin starts it from a **Migrate to the modern label scheme** banner on the **Sensitivity labels** page; Learn says migration is gradually rolling out, so the banner might not yet be available for a tenant. Learn describes the migration as irreversible.

This item covers Worldwide (Standard Multi-Tenant) on the web. Its roadmap status is Launched, with a preview date of July CY2025 and a target of December CY2025, and its release phases are Preview and General Availability. Microsoft lists the same feature for GCC, GCC High and DoD under roadmap item 386901, with status In development and a target of November CY2026.

## Why it matters

The exposure is in the same-name sublabels. Where a parent label carries encryption, content marking, auto-labelling or PowerShell advanced settings, sits in a different publishing policy from its sublabels, or has a different scope from them, migration creates a sublabel with the parent's name, GUID and settings. Learn says that, without reconfiguration, this sublabel is available to select in a policy where the parent couldn't be selected before. A parent label that was only ever a heading can therefore become a label users apply to documents and email.

In tenants that Learn says migrate automatically, the scheme changes without an admin acting. In other tenants nothing migrates until an admin selects **Migrate**, but because the step cannot be reversed, the decision on each same-name sublabel (unpublish it, edit it or leave it) should be taken before anyone starts. Learn does not say whether tenants that see the banner will eventually be migrated without an admin starting it.

## Risk assessment

**Data exposure**
- A same-name sublabel created from a parent label keeps the parent's settings, so its encryption and content markings apply to whatever users label with it. Until it is unpublished or edited, it can be selected in any policy that publishes it. The publishing policy row in the controls table is the control.

**Security & identity**
- The new sublabel inherits the parent label's GUID and the label group gets a new GUID. Learn recommends GUIDs rather than names for advanced settings, so configurations that named the parent's GUID now point at the sublabel, not at the group. Check them after migration.

**Autonomy & actions**
- Label groups can't be published and support no settings beyond name, description, colour and priority, so a group applies nothing to content itself. The migration is the one action with lasting effect: automatic in the cases Learn lists, admin-started otherwise, and irreversible.

**Change & support**
- The **New label scheme** page flags naming conflicts that must be resolved before migration, because sublabels must have a unique name from their parent label.
- Learn does not recommend changing label configuration while migration runs, because changes will likely be lost, and says to allow up to 24 hours.
- Learn says sublabels in the same label group don't support the setting that requires users to justify lowering a label, so expect that prompt to stop between labels in one group.

## Cost and licensing

Learn's **Get started with sensitivity labels** page says a number of per-user subscriptions support sensitivity labels for Microsoft 365 apps and services, that the licensing requirements for users depend on the features used, and that admins also need a licence to manage sensitivity labels. It points to the Microsoft Purview service description for feature-level requirements.

Microsoft publishes no separate licence, meter or price for label groups or for the migration at the time of writing (November 2026). The indirect cost is admin time: reviewing the proposed scheme, resolving naming conflicts, testing in a test tenant, as Learn recommends, and unpublishing or editing same-name sublabels.

## Scope

- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it. GCC, GCC High and DoD are tracked under roadmap item 386901.
- **Platform:** web, in the Microsoft Purview portal under **Solutions** > **Information Protection** > **Sensitivity labels**.
- **Rollout:** automatic migration for new tenants beginning October 1, 2025 and where no same-name sublabel would be created; a banner-started migration elsewhere, which Learn says is gradually rolling out.
- **Roles:** Learn lists the **Information Protection**, **Information Protection Admins**, **Information Protection Analysts**, **Information Protection Investigators** and **Information Protection Readers** role groups for creating and managing labels, or a custom role group with the **Sensitivity Label Administrator** role, or the **Compliance Data Administrator**, **Compliance Administrator** or **Security Administrator** role groups.
- **Users:** label groups look and behave the same to users; the labels they can apply are still set by publishing policies.

## Governance guidance

### Before rollout
- Open the **Migrate to the modern label scheme** banner, select **Review new scheme** and download the **New label scheme** CSV to list which parent labels will create same-name sublabels.
- Remove label actions such as encryption or content marking from parent labels never used on their own, then restart the migration review to confirm fewer same-name sublabels.
- Rename any sublabel that shares its parent label's name, as the **New label scheme** page requires.
- Run the migration first in a test tenant with the same label configuration, as Learn recommends.
- Run Script One from the migration page in Security & Compliance PowerShell if you plan to unpublish same-name sublabels automatically, and keep the session open.

### At rollout
- Select **Migrate** at a time when no one else is editing labels, and freeze label changes for up to 24 hours.
- Confirm the green message bar on the **Sensitivity labels** page that shows the tenant is on the modern label scheme.

### After rollout
- Run Script Two, or edit each publishing policy, to unpublish the same-name sublabels you decided to withdraw.
- Check advanced settings and integrations that referenced parent labels by GUID, since the sublabel kept the parent's GUID and the group has a new one.
- Tell label admins to create groups with **+ Create** > **Label group** and to use **Move into group** rather than sublabels.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether and when existing parent labels are migrated to label groups</strong><br><small>Tenant</small><br><small class="controls__note">The banner appears only where migration is available to the tenant. Irreversible. Set-PolicyConfig lists -MigrateLabelScheme but its reference does not describe the parameter.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Migrate to the modern label scheme › Get started › Review new scheme › New label scheme › Migrate <a href="https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a label group to hold labels</strong><br><small>Tenant</small><br><small class="controls__note">Modern label scheme only. New-Label lists an -IsLabelGroup switch but its reference does not describe the parameter.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › + Create › Label group <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which labels a policy publishes, including same-name sublabels created by migration</strong><br><small>Tenant</small><br><small class="controls__note">The migration page uses this command in Script Two to unpublish new sublabels. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy › Choose sensitivity labels to publish › Choose sensitivity labels to publish <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &lt;policy&gt; -RemoveLabels &lt;label&gt;</code> <a href="https://learn.microsoft.com/purview/migrate-sensitivity-label-scheme" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can create and manage sensitivity labels and label groups</strong><br><small>Tenant</small><br><small class="controls__note">Use an Information Protection role group, or a custom group with Sensitivity Label Administrator. The portal steps need the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Migration and label-group creation are portal actions. The New-Label reference lists an -IsLabelGroup switch and the Set-PolicyConfig reference lists -MigrateLabelScheme and -MigrateLabelSchemeDisplayNames, but neither reference describes what those parameters do at the time of writing (November 2026), so no scripted call is given for them. Unpublishing same-name sublabels is the one step Learn scripts, with Set-LabelPolicy in Security & Compliance PowerShell. Learn says the permissions to create and manage labels are not needed to apply labels in apps. Adding people to a Purview role group in the portal needs an account with the Role management role.

## Open questions

- Will tenants that still see the **Migrate to the modern label scheme** banner be migrated without an admin starting it, and if so when? Watch Message center and the migration page.
- What do the New-Label -IsLabelGroup and Set-PolicyConfig -MigrateLabelScheme parameters do, and are they supported for scripted migration? Watch the cmdlet references.
- Will tenants that remain on the classic label scheme keep the ability to create parent labels and sublabels, and for how long?
- Do third-party apps that read label hierarchies by GUID need changes once label groups carry new GUIDs?

<!-- rationale
risk: Medium. Migration can turn a parent label that carries encryption or content marking into a same-name sublabel that users can select where a policy publishes it, and Learn says the migration is irreversible.
cost: Low. Sensitivity labels already need per-user licences; Microsoft publishes no licence, meter or price specific to label groups, so the cost is admin time to review, test and tidy the label scheme.
impact: Low. Learn says label groups look and behave the same to users; the people who notice are the admins who configure labels and label policies.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The governance checklist asks readers to edit label actions, rename sublabels and check advanced settings, but those controls have no table row. | Found: Remove label actions such as encryption or content marking ... Rename any sublabel ... Check advanced settings ... The table covers migration, group creation, publishing policies and role-group membership. | Fix: Remove the Before rollout bullets beginning 'Remove label actions' and 'Rename any sublabel', and the After rollout bullet beginning 'Check advanced settings': these label-configuration checklist steps have no matching controls-table row.
-->
