---
title: "Microsoft Teams Rooms and shared devices: passwordless sign-in for Entra resource accounts"
slug: "microsoft-teams-entra-passwordless-resource-account-support-for-teams-rooms-on-windows-and"
roadmapId: 558853
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Windows and Android, Teams panels and Teams phones can move their resource accounts to passwordless sign-in. Migration is optional and started by an administrator in the Pro Management portal."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Android","Teams and Surface Devices"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Learn page requires the resource account to hold a Teams Rooms licence (Windows and Android rooms) or a Teams Shared Space licence (panels and phones). A separate licence or meter for the migration is not named on that page."
audiences: ["m365-admin","security","service-owner"]
tags: ["teams-rooms","pro-management-portal","entra-id","authentication","identity","migration","teams","gcc","gcc-high"]
sources:
  - title: "Transition to Password-less Teams Shared Space device Resource Accounts"
    url: "https://learn.microsoft.com/microsoftteams/rooms/passwordlessentraresourceaccounts"
    kind: "learn"
  - title: "Set as a Resource Accounts for Shared Devices in Teams Rooms Pro Management"
    url: "https://learn.microsoft.com/microsoftteams/rooms/set-as-resource-account-for-shared-teams-devices"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Resource accounts"
    url: "https://learn.microsoft.com/microsoftteams/rooms/resource-accounts"
    kind: "learn"
  - title: "Update user"
    url: "https://learn.microsoft.com/graph/api/user-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 558853"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558853"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p"]
controls:
  - governs: "Scheduling passwordless migration of selected resource accounts and devices"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Planning > Resource Accounts > Migration > resource accounts > Schedule migration"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/passwordlessentraresourceaccounts"
    api: null
    note: "Requires the Teams Administrator role. The wizard offers migrate now or the next maintenance window. Migration is optional and not automatic."
  - governs: "Running the built-in Cleanup password wizard on migrated resource accounts"
    scope: "user"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Planning > Resource Accounts > Migration > resource accounts > Cleanup password"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/passwordlessentraresourceaccounts"
    api: null
    note: "Needs a portal role that can edit Resource Accounts plus Password Administrator, User Administrator or Global Administrator able to reset the target account. Not supported for Teams Shared Device-licensed accounts."
  - governs: "Marking a shared device account as a resource account without migrating"
    scope: "user"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Planning > Resource Accounts > shared device accounts > Set as Resource"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/set-as-resource-account-for-shared-teams-devices"
    api: null
    note: "Teams Administrator. The page says migration sets the account as a resource, so this step is not needed before migrating."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-26"
roadmapModified: "2026-08-05T22:47:32"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: passwordless Entra resource accounts for Teams Rooms, panels and phones, with the Pro Management portal migration and password cleanup steps."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 87 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: narrowed the Cleanup password row and automation statement, qualified the cleanup role and synchronised-account guidance, and updated portal paths and the panel licence sentence."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 98 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 99 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after the independent check: the resource-account bullet no longer says migration removes file and recording access, and the After rollout checklist keeps only the Cleanup password step."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 99 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 99
  confirmed: 99
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7c9be82f84843359c3e6ede80430f555"
---

## What's changing

Teams Rooms on Windows, Teams Rooms on Android, Teams panels and Teams phones can now sign in with a device-bound credential on their Entra resource account instead of a stored username and password. The roadmap item describes this as secure, passwordless sign-in that separates device and user identities, with a migration wizard and a progress dashboard in the Pro Management portal.

Microsoft Learn documents the process on its page for transitioning to passwordless resource accounts. An administrator with the Teams Administrator role signs in to the Teams Rooms Pro Management portal, selects eligible resource accounts and schedules a migration, either immediately or in the next maintenance window. The page says the existing resource account creation process stays the same and that devices must first be deployed with a username and password and then transitioned.

In the background, the page says the migration sets the account as a resource, connects the device to Entra ID to request its secure token, validates sign-in and updates the portal with migration status. On Teams Rooms on Windows, the Teams Rooms app moves from the local 'Skype' Windows user account to signing in to Windows with the resource account. If the device cannot sign in, the transition is rolled back automatically.

The roadmap record shows the item as Rolling out, General Availability, with a target of August CY2026, for Worldwide (Standard Multi-Tenant), GCC and GCC High on Android and Teams and Surface Devices. No Message Center post was supplied with the record.

## Why it matters

Resource accounts for rooms, panels and phones normally rely on a stored password that someone has to create, store and rotate. Moving the device to a device-bound credential lets you stop depending on that password for sign-in, and Microsoft's page states that a device stays signed in if the account password is later changed.

Nothing happens on arrival unless an administrator acts: Microsoft's page says migration is administrator-initiated, is not automatic and is currently optional. The decision for a service owner is therefore whether and when to migrate, how to test it, and who is allowed to clean up the old passwords, because the page says the password is not removed from the account by the migration.

## Risk assessment

**Data exposure**

- The migration changes how the device authenticates, and the page says authentication to Microsoft 365 services such as Teams, Intune and the Pro Management portal does not change.
- Marking an account as a resource is part of migration. Microsoft lists removal from meeting chats after the call ends as a benefit.

**Security & identity**

- The password stays in Microsoft Entra ID after migration. Microsoft recommends running the cleanup steps or rotating the password manually; until then the old password remains a valid credential for the account.
- Cleanup requires a portal role that can edit Resource Accounts and Password Administrator, User Administrator or Global Administrator with permission to reset the target account. An administrative-unit-scoped Password Administrator can reset only nonadministrator accounts in that unit; Password Administrator might not reset accounts with an Entra administrative role or membership or ownership of a role-assignable group. Remove unnecessary privileged assignments or use an appropriate higher-privileged role. Teams Administrator alone does not allow a password reset, so plan the role assignments separately from the migration.
- For accounts synchronized from Windows Server Active Directory, reset or scramble the password in the source directory unless password writeback is enabled and the domain is managed. For federated accounts, change the password through the identity provider. The built-in wizard covers cloud-managed accounts.

**Autonomy & actions**

- No change to what the device can do: Microsoft's page says only the authentication method changes.

**Change & support**

- Reverting is disruptive on Teams Rooms on Windows: the page says a device reset using the manufacturer's recovery image or the recovery tool is required. On Android devices, a full account sign-out removes the token.
- Crestron Teams Rooms on Windows devices are documented as not currently compatible; Microsoft Entra hybrid joined Windows rooms are not supported for migration.
- Replacing a device or changing credentials means signing in with the password first and migrating again.

## Cost and licensing

The Learn page requires the resource account to be licensed before it can be converted: Teams Rooms on Windows and Teams Rooms on Android need a Teams Rooms licence, and Teams panels and Teams phones need a Teams Shared Space licence. The passwordless page says a panel sharing a room device's resource account needs no additional Teams Shared Space licence; the Teams Rooms licensing page separately says Teams Rooms Basic cannot license panels and Teams Rooms Pro can. The page names no other licence for the migration.

The passwordless page names no meter, price or credit rate for the migration itself. The indirect cost is administrator time: testing on a small batch (which Microsoft recommends), scheduling, verifying sign-in and cleaning up passwords. Role assignment for password cleanup is a one-time Microsoft Entra configuration according to the page.

See Microsoft's Teams Rooms licences page for what Teams Rooms Basic and Teams Rooms Pro include; whether any Pro Management portal feature used here depends on the Pro licence is not stated on the passwordless page.

## Scope

The migration covers Teams Rooms on Windows, Teams Rooms on Android, Teams panels and Teams phones; Microsoft's page says common area phones with an eligible account and supported licence count as Teams phones. Panels signed in with the same account as a room migrate with it at the same time.

Prerequisites on the Learn page include a Teams resource account already signed in on the device, visible in the Pro Management portal, created in Entra ID or synchronised to it (Password Hash Sync and Pass-through Authentication accounts are supported; on-premises-only accounts are not). Teams Rooms on Windows needs Windows 11 24H2 build 26100.8655 or later, Microsoft Entra join to the same tenant and a minimum Teams Rooms app version. The Android devices need Android OS 10 or later and minimum app versions for the device app, the Authenticator app and the Teams Admin Agent app, as the page lists.

The passwordless page does not list clouds. The roadmap record lists Worldwide (Standard Multi-Tenant), GCC and GCC High. The Resource accounts page separately says managing resource accounts is not available for GCC tenants; this differs from the roadmap cloud list. Direct deployment as passwordless is not available yet; Microsoft's page says it will come in the future.

## Governance guidance

### Before rollout

- Inventory resource accounts and devices in the Pro Management portal (Planning > Resource Accounts) and confirm each device meets the Windows or Android version and app prerequisites on the Learn page.
- Check join state and make: exclude Microsoft Entra hybrid joined Windows rooms and Crestron Teams Rooms on Windows devices, which the page documents as unsupported or not compatible.
- Confirm each resource account holds the licence the page requires (Teams Rooms, or Teams Shared Space for panels and phones).

### At rollout

- Migrate a small batch first, as Microsoft recommends, using Schedule migration on the Migration tab, and choose migrate now or the next maintenance window.
- Verify that each room reports healthy in the Pro Management portal and starts without repeated sign-in prompts.
- Review the failure reason in the portal's detail panel for any account that fails, fix it and retry.

### After rollout

- Run Cleanup password for migrated cloud-managed accounts.
- Record the revert procedure for each device type before migrating further devices.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Scheduling passwordless migration of selected resource accounts and devices</strong><br><small class="controls__note">Requires the Teams Administrator role. The wizard offers migrate now or the next maintenance window. Migration is optional and not automatic.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Planning › Resource Accounts › Migration › resource accounts › Schedule migration <a href="https://learn.microsoft.com/microsoftteams/rooms/passwordlessentraresourceaccounts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Running the built-in Cleanup password wizard on migrated resource accounts</strong><br><small>User</small><br><small class="controls__note">Needs a portal role that can edit Resource Accounts plus Password Administrator, User Administrator or Global Administrator able to reset the target account. Not supported for Teams Shared Device-licensed accounts.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Planning › Resource Accounts › Migration › resource accounts › Cleanup password <a href="https://learn.microsoft.com/microsoftteams/rooms/passwordlessentraresourceaccounts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Marking a shared device account as a resource account without migrating</strong><br><small>User</small><br><small class="controls__note">Teams Administrator. The page says migration sets the account as a resource, so this step is not needed before migrating.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Planning › Resource Accounts › shared device accounts › Set as Resource <a href="https://learn.microsoft.com/microsoftteams/rooms/set-as-resource-account-for-shared-teams-devices" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

All three controls are in the Teams Rooms Pro Management portal. No automation is documented for scheduling migration, running the portal Cleanup password wizard or Set as Resource at the time of writing (November 2026). Microsoft Graph separately documents resetting a user's password by updating passwordProfile; this is not the portal wizard.

There is no tenant-wide switch to enable or block passwordless migration on the page; migration happens when an administrator schedules it for selected accounts. Teams Administrator is needed to set an account as a resource and schedule the migration. Cleanup password needs a portal role that can edit Resource Accounts and Password Administrator, User Administrator or Global Administrator with permission to reset the target account. An administrative-unit-scoped Password Administrator can reset only nonadministrator accounts in that unit, and Password Administrator might not reset accounts with an Entra administrative role or membership or ownership of a role-assignable group. The portal does not support Cleanup password for accounts with a Teams Shared Device license; reset those in Microsoft Entra instead.

## Open questions

- Which Teams Rooms and Teams Shared Space licence tiers are supported for migration? The Learn page says only "Teams Rooms license"; watch the passwordless and Teams Rooms licences pages.
- Will Microsoft document an API or PowerShell route to schedule migrations and run the portal Cleanup password wizard at scale? Watch the Pro Management portal pages on Learn.
- Which clouds is the Learn page's procedure available in? The roadmap record lists Worldwide, GCC and GCC High; the Learn page does not list clouds.
- When will deployment directly to passwordless, without an initial username and password, ship? The page says it will come in the future; watch the Learn page and Message center.
- Will other administrator roles, including Global Administrator, be allowed to schedule migrations? The page says other roles are planned.

<!-- rationale
risk: Low. Migration is optional and administrator-initiated, and Microsoft's page says the transition rolls back automatically if the device cannot sign in; the account's password stays in Entra ID until cleaned up.
cost: Low. The Learn page names the device licences the resource account must already hold (Teams Rooms or Teams Shared Space) and lists no separate meter; the cost is admin time for testing, scheduling and password cleanup.
impact: Low. Teams device administrators do the work, and Microsoft's page says end users notice no changes to device functionality.
-->
