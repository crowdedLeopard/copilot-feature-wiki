---
title: "Microsoft 365 admin center: Google Identity Sync from Google Workspace to Entra ID"
slug: "m365-admin-center-google-to-entra-identity-sync-service"
roadmapId: 470023
topic: "governance"
products: ["Microsoft 365","Microsoft 365 Admin Center","Microsoft Entra"]
summary: "An admin-started, one-way sync creates Microsoft Entra users and Microsoft 365 groups from Google Workspace in the Microsoft 365 admin center. Learn limits it to tenants under 300 licensed users; no licence for the tool is published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2025"
previewDate: "December CY2024"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the tool itself. The Learn page says to assign users the licences required for the Microsoft 365 services being migrated to once the sync is verified."
audiences: ["m365-admin","security","change-adoption"]
tags: ["google-workspace","m365-admin-center","entra-id","migration","identity","exchange","onedrive"]
sources:
  - title: "Microsoft 365 Roadmap 470023"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=470023"
    kind: "roadmap"
  - title: "Google Identity Sync"
    url: "https://learn.microsoft.com/sharepointmigration/google-identity-sync"
    kind: "learn"
  - title: "Migrate Google Workspace to Microsoft 365 with Migration Manager"
    url: "https://learn.microsoft.com/sharepointmigration/mm-google-overview"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Google Identity Sync is run: starting the user and group sync"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Setup > Migration resources > Self-service migration and import tools > Explore migration & imports tools > Google Workspace > Sync users and groups > Sync Users > Sync users"
      docs: "https://learn.microsoft.com/sharepointmigration/google-identity-sync"
    api: null
    note: "The page names no administrator role for this tool. Connection and domain mapping come first; Sync groups is selected afterwards on the same page."
  - governs: "Which Google Workspace domains are synchronised (domain mapping)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Setup > Migration resources > Self-service migration and import tools > Explore migration & imports tools > Google Workspace > Sync users and groups > Domain mapping > Map domains"
      docs: "https://learn.microsoft.com/sharepointmigration/google-identity-sync"
    api: null
    note: "Finalize domain mapping locks the mappings; they cannot be edited afterwards."
  - governs: "Tenant-wide switch to turn Google Identity Sync off or restrict who may use it"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2024-11-22T23:15:35"
changes:
  - date: "2026-11-22"
    note: "First briefing: Learn now documents Google Identity Sync (under 300 licensed users) while the roadmap still shows In development with a January CY2025 target."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the Sync groups description (existing matching groups are left unchanged), reworded the no-published-licence statement, and extended the start-sync path."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 77
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "7b1ffc70545bce9597a563b4d02da190"
---

## What's changing

Google Identity Sync is a one-way synchronisation of user and group identities from Google Workspace to Microsoft 365, run from the Microsoft 365 admin center. Microsoft Learn describes it as reducing the effort of provisioning Microsoft Entra ID users and groups, and as preparing identities for a migration of Gmail, Google Drive and other Google content.

The Learn page describes this behaviour. An administrator connects to Google Workspace, signs in as a Google administrator and installs the required migration app there. The tool then discovers users and groups, and the administrator maps Google domains to Microsoft 365 domains and finalises the mapping, after which it cannot be edited. Selecting **Sync users** creates Entra users with the same email alias in the mapped domain: active Google users become enabled, suspended Google users become disabled, and archived users are not included. An Entra user that already has the same alias is not overwritten. **Sync groups** then synchronises Google groups in mapped domains, creating a Microsoft 365 group where no corresponding group exists. Matching existing group objects are left unchanged, while member and owner assignments are synchronised.

The roadmap item describes the scope more widely: an onboarding and synchronisation tool for customers moving from Google, to create identities and move Drive and Mail content into OneDrive and Exchange Online. The Identity Sync page covers identities only. The roadmap record gives status In development, a preview target of December CY2024 and a General Availability target of January CY2025, with Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform. Both target months have passed, the record still shows In development, and the Learn page describes the steps without marking the feature as preview.

The Learn page states that the feature is available to tenants with fewer than 300 licensed users and that support for more than 300 licensed users will be available in a future release.

## Why it matters

For a tenant moving off Google Workspace, this tool creates the Entra accounts and Microsoft 365 groups that mail and file migrations map to, so it is a tool for provisioning them in bulk. The Learn page describes it as a step an administrator starts. The consequences are accounts and groups appearing in your directory with Google's names, departments and group memberships.

The point to plan for is re-sync. Learn warns that re-syncing groups can remove member and owner assignments added only in Microsoft 365, so anyone adjusting group membership in Microsoft 365 during a migration can lose those changes.

## Risk assessment

**Data exposure**
- The sync copies Google profile attributes into Entra: primary email as userPrincipalName, name, work telephone number, department and job title. Check that your directory may hold those fields before you sync.
- Groups are created in Microsoft 365 with the Google group's name, description and email alias on the default Microsoft 365 domain, and the member list comes with them. External users and custom-permission members are not synchronised.

**Security & identity**
- Connecting requires a Google administrator to install a migration app in Google Workspace and sign in. Treat that Google administrator account and the installed app as part of the migration's access path.
- Suspended Google users arrive as disabled Entra users and active ones as enabled. Enabled accounts exist in your tenant before anyone assigns licences, so confirm each active Google account belongs there.
- Learn says that for synchronised Entra users with administrative roles the telephoneNumber attribute is not updated during sync, for security reasons.

**Autonomy & actions**
- The sync runs when an administrator selects **Sync users**, **Sync groups** or a re-sync. The Learn page does not describe a schedule.
- A re-sync applies Google changes to existing Microsoft 365 groups, including role updates, and can remove assignments made only in Microsoft 365. Deleting a user or group in Google does not modify the corresponding Entra user or Microsoft 365 group.

**Change & support**
- Domain mapping cannot be edited once finalised, so check each mapping before you finalise it.
- Tenants with more than 300 licensed users are outside the documented scope for now.
- Failed or skipped items appear in the downloadable sync reports; Learn says to resolve failed operations before continuing with migration.

## Cost and licensing

Microsoft Learn names no licence and no price for Google Identity Sync itself. The Identity Sync page and the Migration Manager overview describe the steps and limits but publish no tool-specific licence or price, so the licensing model is recorded as not yet published.

What the page does say is that, once synchronisation is complete and verified, you assign users the licences required for the Microsoft 365 services you are migrating to. For an Exchange migration that starts with mail users, assign the Exchange licence after the batch converts them to mailboxes, within 30 days. Those licence costs and the admin time spent mapping domains and checking reports are the indirect costs. No meter is documented for the sync at the time of writing (November 2026).

## Scope

**Who and where.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn says the feature is available to tenants with fewer than 300 licensed users.

**What is synchronised.** Google Workspace users and groups whose email addresses belong to the mapped domains. Group members and owners are included; external users and custom-permission members are not.

**Prerequisites.** A Google Workspace administrator account that can install the required migration app, and a Microsoft 365 admin center sign-in. The Identity Sync page names no Microsoft administrator role. The Migration Manager overview for Google Drive lists OneDrive/SharePoint admin, Microsoft 365 Migration Administrator or Global admin for that migration, and which of them applies to Identity Sync is not stated.

**Arrival.** The page describes an administrator-run tool reached from Setup > Migration resources. The roadmap does not describe a rollout to users.

## Governance guidance

### Before rollout
- Confirm the licensed user count is below 300, because Learn documents the feature only for those tenants.
- List the Google domains and the matching Microsoft 365 domains, because domain mapping cannot be edited once finalised.
- Check the Entra directory for users who already share an email alias with a Google user: an existing user is not overwritten.
- Agree who will act as the Google administrator that installs the migration app, and which Microsoft administrator role runs the tool.

### At rollout
- Run **Sync users** first, then **Sync groups**, as the page orders them.
- Download the user, group and member sync reports and resolve every Failed or Skipped item using the Message field.
- Assign licences for the services being migrated only after the user sync is complete and verified.

### After rollout
- Compare each destination group's members and owners in the Microsoft 365 admin center with the Google group before any re-sync.
- Review disabled Entra users that came from suspended Google accounts and decide whether they stay.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Google Identity Sync is run: starting the user and group sync</strong><br><small>Tenant</small><br><small class="controls__note">The page names no administrator role for this tool. Connection and domain mapping come first; Sync groups is selected afterwards on the same page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Setup › Migration resources › Self-service migration and import tools › Explore migration &amp; imports tools › Google Workspace › Sync users and groups › Sync Users › Sync users <a href="https://learn.microsoft.com/sharepointmigration/google-identity-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Google Workspace domains are synchronised (domain mapping)</strong><br><small>Tenant</small><br><small class="controls__note">Finalize domain mapping locks the mappings; they cannot be edited afterwards.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Setup › Migration resources › Self-service migration and import tools › Explore migration &amp; imports tools › Google Workspace › Sync users and groups › Domain mapping › Map domains <a href="https://learn.microsoft.com/sharepointmigration/google-identity-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn Google Identity Sync off or restrict who may use it</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents the tool as a guided flow in the Microsoft 365 admin center. It documents no tenant setting that turns the tool off or limits who can use it, and no API for it, at the time of writing (November 2026).

The Identity Sync page names no administrator role. Learn's Migration Manager page for Google Drive lists OneDrive/SharePoint admin, Microsoft 365 Migration Administrator and Global admin as the roles for that migration, and this briefing does not carry them over to Identity Sync.

Domain mapping is a one-way gate: once finalised it cannot be edited, and user sync cannot start before it is done.

## Open questions

- Which Microsoft administrator role is required to run Google Identity Sync, and does the Microsoft 365 Migration Administrator role cover it? Watch the Google Identity Sync Learn page.
- When will tenants with more than 300 licensed users be supported, and when does the roadmap status move from In development, given the January CY2025 target has passed?
- Is any licence or fee attached to the tool, apart from the licences users need for the services they migrate to?
- Will the tool gain a tenant setting to turn it off, an API or audit events for sync runs? Watch the roadmap item and the Learn page.

<!-- rationale
risk: Medium. Re-syncing groups can remove owners and members added only in Microsoft 365, and the sync creates Entra users; nothing runs until an administrator starts it.
cost: Low. Admin time is the only cost the sources show; users then need licences for the services they migrate to. No price or licence for the sync tool itself is published.
impact: Low. Administrators of a tenant moving from Google Workspace use it, and Learn limits it to tenants with fewer than 300 licensed users.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout and After rollout; controls / consistency: The checklist names sync-report monitoring, licence assignment and destination membership review controls without corresponding controls-table rows. | Found: Checklist: "Download the user, group and member sync reports"; "Assign licences"; "Compare each destination group's members and owners". Controls table: starting sync; domain mapping; absent tenant-wide disable/restriction switch. | Fix: The At rollout steps for downloading sync reports and assigning licences, and the After rollout step for reviewing destination members and owners, have no corresponding controls-table rows. Record this checklist/table mismatch; do not add control rows as part of this correction.
-->
