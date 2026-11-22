---
title: "Microsoft 365 admin center: unified Google Workspace migration for Gmail and Google Drive"
slug: "m365-admin-center-unified-google-workspace-migration"
roadmapId: 470139
topic: "governance"
products: ["Microsoft 365 Admin Center"]
summary: "One Microsoft 365 admin center page to start and track Gmail and Google Drive migrations from Google Workspace. Learn describes a simplified Gmail flow for up to 1,000 source mailboxes, subject to tenant availability."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Migrated mailboxes require Exchange licences. No licence or charge specific to the unified page or simplified flow is published."
audiences: ["m365-admin","service-owner","security"]
tags: ["migration","m365-admin-center","exchange","onedrive","sharepoint"]
sources:
  - title: "Microsoft 365 Roadmap 470139"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=470139"
    kind: "roadmap"
  - title: "Consolidated migration of data from Google Workspace to Microsoft 365 Exchange"
    url: "https://learn.microsoft.com/exchange/mailbox-migration/consolidated-gws-migration"
    kind: "learn"
  - title: "Simplified Gmail Migration (SGM) for Small and Medium Businesses"
    url: "https://learn.microsoft.com/exchange/mailbox-migration/custom-migration-small-business-from-gmail"
    kind: "learn"
  - title: "Microsoft 365 Mail migration – Google marketplace app for mailbox migrations"
    url: "https://learn.microsoft.com/exchange/mailbox-migration/google-marketplace-app-migration"
    kind: "learn"
  - title: "Migrate Google Workspace to Microsoft 365 with Migration Manager"
    url: "https://learn.microsoft.com/sharepointmigration/mm-google-overview"
    kind: "learn"
  - title: "Frequently Asked Questions: Migration Manager Google"
    url: "https://learn.microsoft.com/sharepointmigration/mm-faqs-google"
    kind: "learn"
  - title: "Migration Admin role"
    url: "https://learn.microsoft.com/sharepointmigration/mm-migration-admin-role"
    kind: "learn"
  - title: "Set up Microsoft 365 for Google Workspace migration"
    url: "https://learn.microsoft.com/microsoft-365/admin/moveto-microsoft-365/set-up-microsoft-365-forgoogle"
    kind: "learn"
  - title: "Migrate business email and calendar from Google Workspace"
    url: "https://learn.microsoft.com/microsoft-365/admin/moveto-microsoft-365/migrate-email"
    kind: "learn"
  - title: "Perform a Google Workspace (formerly G Suite) migration to Microsoft 365 or Office 365"
    url: "https://learn.microsoft.com/exchange/mailbox-migration/perform-g-suite-migration"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Who can run Migration Manager for Google Drive migration"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Select the Microsoft 365 Migration Administrator role. The role page ties it to Migration Manager, not the Gmail flow. The request body sets roleDefinitionId, principalId and directoryScopeId (/ for tenant scope)."
  - governs: "Tenant switch to hide or turn off the Google Workspace migration page"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2024-11-22T23:15:35"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: the unified Google Workspace migration page, the 1000-mailbox boundary for the simplified Gmail flow, and the role and licensing gaps."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: qualified the simplified Gmail flow by Learn's availability note, fixed the admin path, aligned the checklist with the controls table, and set licensing to included."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ae93c0a6d301b83abb4d7eda3b6bb4f6"
---

## What's changing

The roadmap item describes one page in the Microsoft 365 admin center from which an administrator starts and monitors migration of Google Workspace workloads, Gmail and Google Drive, to Microsoft 365. It adds that tenants with fewer than 1,000 Google Workspace users get a revamped, step-by-step Gmail migration flow.

Microsoft Learn describes this experience in its article on consolidated migration from Google Workspace. In it, a tenant administrator opens the Google migration dashboard, adds the source domain, and then sees a **Mail** tile and a **Drive** tile. For Gmail, the solution looks up the number of users in the Google domain. A source of more than 1000 users is guided to the large-tenant Gmail migration experience; 1000 users or fewer is guided to Simplified Gmail migration. The roadmap says "fewer than 1,000" and Learn says "less than or equal to 1000", so confirm the boundary for a tenant near that size. Drive migration is sent to Migration Manager, which copies content to OneDrive and SharePoint.

The Simplified Gmail migration page describes the flow: sign in to Google with migration admin credentials, install a Google Marketplace app called Microsoft 365 Mail Migration, confirm Google credentials again, choose mailboxes, select the data (mail, calendar, contacts, rules, permissions and delegates) and date range, then choose **Complete Migration** and change DNS entries. Microsoft's two workflows are one for regular-sized mailboxes and one for large mailboxes (over 80 GB).

The roadmap record lists the status as In development with a target of March CY2025, which has passed. Learn's consolidated page says the experience was being launched for Mail and Drive in October 2024. Treat the roadmap status as the record and check the admin center for what your tenant shows.

## Why it matters

A migration moves a whole organisation's mail and files, so the page matters most to the service owner who decides when, and under which Google and Microsoft accounts, it runs. Microsoft has not stated what happens on arrival, so no source says existing behaviour changes for a tenant that does nothing; the exposure comes when an admin starts a migration.

Where the simplified flow is available, the unified page also decides which Gmail route a tenant gets: at or below 1000 source mailboxes it is the simplified flow, above that the large-tenant flow. Plan for the route your mailbox count selects.

## Risk assessment

**Data exposure**
- Installing the Microsoft 365 Mail Migration app grants Google API permissions, listed on Microsoft's app page, for reading directory and usage data and for migrating Gmail, calendar, contacts and tasks. Review that list with your Google administrator before approving the install.
- The app page says the app does not modify or delete data in the Google mail, calendar, contacts or tasks. The Drive FAQ says Migration Manager never deletes source data.
- For Drive, the FAQ says file-level permission migration is off by default and external sharing links are not recreated, so access on the migrated copy can differ from the source. Verify the result before retiring Google.

**Security & identity**
- A Google Workspace administrator must sign in and install the app, and for the large-tenant route a Google super administrator must authorise domain-wide delegation. Use named migration accounts and remove access when the migration ends.
- On the Microsoft side, Migration Manager lists OneDrive/SharePoint admin, Global admin or the Microsoft 365 Migration Administrator role. The last is the narrowest of the three.

**Autonomy & actions**
- Migration runs are started by an administrator. After the first Drive run, selecting **Migrate** again starts a delta sync, and Microsoft says the Simplified Gmail migration keeps syncing new mail for 72 hours after you confirm the DNS change.

**Change & support**
- Mail routing changes at completion. Plan the DNS change window, because propagation is documented as taking from a minute to 72 hours.
- Microsoft lists group, Teams and other workloads as future additions, so the page does not yet cover them.

## Cost and licensing

Microsoft Learn's consolidated migration article and the Simplified Gmail migration article state no licence, price or meter for the unified page or the simplified flow, so a charge for the tool is not yet published. The Migration Manager Google overview page also lists roles and access prerequisites and names no licence.

Migrated mailboxes still need Exchange licences. In the large-tenant batch article, Microsoft says to assign Exchange licences within 30 days after the batch starts and mail users are converted to mailboxes. That statement is made for the batch route; the simplified flow's page does not repeat it.

Indirect costs are admin time, Google-side administration (domain verification, DNS and the app install), and the destination storage for migrated mail and files, none of which has a published figure on these pages.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud, Web as the platform and General Availability as the release phase. Microsoft's classic Google Workspace migration article says that method is not currently available for GCC High or DoD.

The simplified Gmail flow is for a Google source of 1000 mailboxes or fewer; above that the large-tenant route applies. The Simplified Gmail article also says the feature is not available worldwide pending Google app verification and gives an estimated worldwide launch of late October 2024; confirm availability in your tenant. The Drive route uses Migration Manager, which has a Lite experience that is enabled by default for tenants with fewer than 300 Microsoft 365 licences when the project is created. Learn's setup page gives the route in as Setup > Migration resources > Self-service migration and import tools > Explore migration & imports tools > Google Workspace. Prerequisites include a Google Workspace administrator who can install the app, a verified domain, and for the large-tenant route the Recipient Management role group in Exchange Online.

## Governance guidance

### Before rollout
- Decide which Microsoft 365 role runs the Drive migration, preferring the Microsoft 365 Migration Administrator role to Global admin, and assign it in the Microsoft Entra admin center.
- Confirm your Google mailbox count against the 1000 boundary, so you know whether the simplified flow or the large-tenant flow applies.
- Ask the Google Workspace administrator to review the permissions the Microsoft 365 Mail Migration app requests before installing it.

### At rollout
- Start from Setup > Migration resources > Self-service migration and import tools > Explore migration & imports tools > Google Workspace in the Microsoft 365 admin center and add the source domain on the Google migration dashboard.

### After rollout
- Compare migrated mail and file access with the source and recreate external sharing links by hand, as the Drive FAQ advises.
- Remove the Microsoft 365 Mail Migration app and the migration admin accounts from Google once migration is finished and verified.
- Check the Microsoft 365 admin center and Message center for new workloads added to the page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run Migration Manager for Google Drive migration</strong><br><small>Tenant</small><br><small class="controls__note">Select the Microsoft 365 Migration Administrator role. The role page ties it to Migration Manager, not the Gmail flow. The request body sets roleDefinitionId, principalId and directoryScopeId (/ for tenant scope).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch to hide or turn off the Google Workspace migration page</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The role row governs who can run Migration Manager for the Drive route. Microsoft's pages read for this briefing do not say which Microsoft 365 role starts the Gmail flow on the consolidated dashboard, and the large-tenant article requires at least the Recipient Management role group in Exchange Online.

Microsoft Learn documents no tenant-level switch to hide or disable the Google migration page at the time of writing (November 2026). Google-side controls, such as who can install Marketplace apps and authorise domain-wide delegation, are set in the Google Admin console and not in Microsoft 365.

## Open questions

- What licence or charge, if any, applies to the unified Google migration page and the simplified Gmail flow? Watch the consolidated migration article and Message center.
- Is the simplified-flow boundary fewer than 1,000 users, as the roadmap says, or 1000 or fewer, as Learn says?
- Which Microsoft 365 role is needed to start the Gmail migration from the consolidated dashboard?
- Why does the roadmap item still show In development with a March CY2025 target when Learn describes the experience as launched in October 2024?

<!-- rationale
risk: Medium. Migration needs a Google Workspace administrator to install a Microsoft app that is granted Google API permissions over mail, calendar, contacts and tasks, and it copies organisational data into Microsoft 365.
cost: Low. The sources show admin time and Exchange licences for migrated mailboxes; a price or meter for the unified page is not yet published.
impact: Low. Admins who run the migration notice the new page; end users are affected by the mailbox and file moves, not by the page itself.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: Domain-wide delegation is authorized in the Google Admin console, not through a Microsoft 365 setting. | Found: Go to the Google Workspace Admin page https://admin.google.com/AdminHome and sign in as Google Workspace admin for your tenant. Click Security, then click API Controls, and then click Manage Domain Wide Delegation. | Fix: Add https://learn.microsoft.com/exchange/mailbox-migration/manually-configuring-gsuite-for-migration to sources for the statement that domain-wide delegation is controlled in the Google Admin console. | Source: https://learn.microsoft.com/exchange/mailbox-migration/manually-configuring-gsuite-for-migration
-->
