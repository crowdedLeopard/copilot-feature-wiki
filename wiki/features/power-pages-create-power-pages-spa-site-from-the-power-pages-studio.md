---
title: "Power Pages: create a single-page application (SPA) site from Power Pages studio"
slug: "power-pages-create-power-pages-spa-site-from-the-power-pages-studio"
roadmapId: 573277
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages studio will let makers create a single-page application (SPA) site directly; the roadmap targets November CY2026. Learn does not yet describe the studio flow, and the default state is not stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Power Pages licensing is capacity based (authenticated and anonymous users per website per month) with pay-as-you-go meters for each, and Power Apps and Dynamics 365 licences carry some use rights. No licence or meter specific to SPA sites is published."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["power-pages","design-studio","power-platform-cli","table-permissions","licensing","dataverse","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 573277"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573277"
    kind: "roadmap"
  - title: "Create and deploy a single-page application in Power Pages"
    url: "https://learn.microsoft.com/power-pages/configure/create-code-sites"
    kind: "learn"
  - title: "Create a site with Power Pages"
    url: "https://learn.microsoft.com/power-pages/getting-started/create-manage"
    kind: "learn"
  - title: "Control site creation in a tenant"
    url: "https://learn.microsoft.com/power-pages/admin/control-site-creation"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "Website capacity consumption reports"
    url: "https://learn.microsoft.com/power-pages/admin/website-consumption-reports"
    kind: "learn"
  - title: "Manage privacy and security settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-privacy-security"
    kind: "learn"
  - title: "Files and images overview"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/files-images-overview"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
  - title: "Get started with the Power Pages plugin for GitHub Copilot CLI and Claude Code"
    url: "https://learn.microsoft.com/power-pages/configure/create-code-site-using-claude-code"
    kind: "learn"
videos: []
related: ["power-pages-plugin-support-for-github-copilot-cli-and-claude-code-to-create-and-edit-tradi","power-pages-professional-developer-experiences-control-power-pages-components-using-client","power-pages-design-studio-configure-authentication-with-security-agent"]
controls:
  - governs: "Whether non-administrators can create Power Pages sites in the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-TenantSettings -RequestBody @{ \"disablePortalsCreationByNonAdminUsers\" = $true }"
      docs: "https://learn.microsoft.com/power-pages/admin/control-site-creation"
    note: "Set to $false to allow site creation again. Administrators are users with the Dynamics 365 administrator or Power Platform administrator Azure role."
  - governs: "Which file extensions an environment blocks from upload, including .js files that SPA code needs"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Privacy + Security > Blocked Attachments"
      docs: "https://learn.microsoft.com/power-pages/configure/create-code-sites"
    api:
      kind: "rest"
      call: "PATCH /organizations(organizationid)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "The request body sets blockedattachments. Affects all uploads in the environment, not only Power Pages."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "New briefing: the roadmap's studio SPA site creation (target November CY2026), with what Learn documents for SPA sites, their licensing basis and the controls that apply."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected: Power Pages use rights for Power Apps per app, per user and Dynamics 365 enterprise licences now carry their environment and recognition conditions; three checklist steps with no controls-table row were removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 82 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 82
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "928e848d9c36e5e86f730bc4e8e78bf8"
---

## What's changing

The roadmap item states that Power Pages studio will let makers create a modern single-page application (SPA) site directly, then keep building and customising it with their preferred development tools and frameworks. The record shows the status as In development, a target of November CY2026, the General Availability release phase, the Web platform and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds. Dates are Microsoft's targets, not commitments.

Microsoft Learn does not yet describe the studio flow at the time of writing (November 2026), so what follows about how SPA sites behave comes from Learn's page on SPA sites, which documents creating them with the Power Platform CLI. That page defines an SPA site as a Power Pages site that runs entirely in the user's browser (client-side rendering). After a site is uploaded with `pac pages upload-code-site`, it appears in the **Inactive sites** list in Power Pages and has to be activated before users can reach it.

The same page lists differences from traditional sites: the pages workspace and Liquid templates are not supported, and out-of-the-box components such as lists and forms are not currently supported. It also says SPA sites are managed only through source code and CLI tools, while the roadmap item describes a studio entry point. Both statements are reported as given; how they fit together is not yet documented.

Learn separately documents creating SPA sites from a curated template with the Power Pages plugin for GitHub Copilot CLI and Claude Code: see [the plugin briefing](/features/power-pages-plugin-support-for-github-copilot-cli-and-claude-code-to-create-and-edit-tradi/).

## Why it matters

Microsoft has not stated what happens on arrival, so the safe assumption is that no source says existing behaviour changes. If the studio option appears for everyone who can already create Power Pages sites, it widens who can start a code-first site that reads and writes Dataverse data.

For a service owner the questions are the ones that apply to any Power Pages site: which environment hosts it, which table permissions and web roles it relies on, and how its users are licensed. The SPA page says these sites use the same security model as traditional sites, so existing Power Pages governance is the starting point, and the exposures that differ are the ones in the next section.

## Risk assessment

**Data exposure**
- SPA code reaches Dataverse through Power Pages Web APIs. Learn says to make sure the required Web APIs are enabled and that table permissions and web roles are configured before using them, so a site is only as restricted as those settings.
- A site created in the default environment risks sharing data with other users unintentionally, according to the site-creation page, which does not recommend creating sites there.

**Security & identity**
- Learn's setup requires environments to allow JavaScript file uploads. In Dataverse the blocked file extensions list is described as preventing upload or download of attachment types considered dangerous, so removing `js` relaxes that for the whole environment.
- Each new site automatically has a default Microsoft Entra ID provider. Learn's local-development steps turn on bearer authentication site settings and set site visibility to Public, and the page says to apply them only in development environments.

**Autonomy & actions**
- Where makers use an AI coding agent to produce SPA code, Learn's page on the Power Pages plugin warns that generated code and configuration can be inaccurate, so review it before deploying.

**Change & support**
- Makers moving from traditional sites should expect differences: no pages workspace, no Liquid, and no out-of-the-box lists and forms, so support questions will be about missing studio features. The SPA page says SEO support is limited.

## Cost and licensing

The Power Platform licensing FAQ says Power Pages licensing is capacity based, with two capacity types: **Authenticated users per website/month** and **Anonymous users per website/month**. Each has a subscription capacity licence and a pay-as-you-go meter; the authenticated meter measures unique authenticated users per website per month. Capacity must be allocated to a Power Platform environment by an administrator, and the Power Platform admin center capacity page lets administrators download Power Pages authenticated and anonymous reports.

The FAQ also says authenticated users licensed with Power Apps or Dynamics 365 enterprise licences have use rights for Power Pages. Power Apps per app users can access one Power Pages website in the environment to which Power Apps per app capacity licences are assigned, and Power Apps per user licences give unlimited websites. Dynamics 365 enterprise licences give unlimited websites, which must map to the licensed Dynamics 365 application context and the same environment. For Power Apps per-user/premium licences and Dynamics 365 enterprise licences to be recognised, users must access the site using their Entra ID through the out-of-the-box Azure AD provider and have the licence assigned in the same tenant as the site.

Learn describes an SPA site as a Power Pages site, so these rules are the starting point for budgeting. The SPA page lists its prerequisites without naming a licence, and a licence or meter specific to SPA sites is not yet published. Indirect cost includes maker and developer time to build and review the site code.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds and the Web platform. It lists the release phase as General Availability, with a November CY2026 target.

The site-creation page says creating a site needs a user account with Read-Write Access Mode and the System administrator role, and that where website creation is disabled in the tenant, users need the Dynamics 365 administrator or Power Platform administrator role. The studio flow's own requirements are not yet documented.

For the CLI route, the SPA page lists as prerequisites Power Platform CLI version 1.44.x or later and a Power Pages site on version 9.7.4.x or later, with JavaScript file uploads allowed in the Dataverse environment. Whether the studio flow has the same prerequisites is not stated.

## Governance guidance

### Before rollout
- Decide which environments may host SPA sites and tell makers not to create sites in the default environment, as the site-creation page advises.
- Decide whether site creation stays with all makers or moves to administrators, using the tenant setting in the controls table.

### At rollout
- Watch the Message center and the roadmap item for the studio option and its default, since neither is stated yet.
- Hold off removing `js` from an environment's blocked file extensions until a team needs it, and record which environment you change.

### After rollout
- Re-check the blocked file extensions in each environment that allows `js` uploads, and revert it where the need has ended.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether non-administrators can create Power Pages sites in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Set to $false to allow site creation again. Administrators are users with the Dynamics 365 administrator or Power Platform administrator Azure role.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-TenantSettings -RequestBody @{ &quot;disablePortalsCreationByNonAdminUsers&quot; = $true }</code> <a href="https://learn.microsoft.com/power-pages/admin/control-site-creation" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which file extensions an environment blocks from upload, including .js files that SPA code needs</strong><br><small>Environment</small><br><small class="controls__note">The request body sets blockedattachments. Affects all uploads in the environment, not only Power Pages.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Privacy + Security › Blocked Attachments <a href="https://learn.microsoft.com/power-pages/configure/create-code-sites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /organizations(organizationid)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The tenant setting restricts site creation to administrators; the page defines administrators as users with the Dynamics 365 administrator or Power Platform administrator Azure roles. It does not describe the studio SPA option, and Microsoft Learn documents no admin centre path for the setting at the time of writing (November 2026).

The blocked file extensions row is an existing environment control that Learn's SPA setup refers to. Changing it affects every file upload in that environment, not only Power Pages. It is not a control over SPA sites themselves.

No setting that switches the studio's SPA option on or off is documented yet. Table permissions and web roles govern what a site's Web API calls can reach, as the SPA page states, but they are per-site settings and not covered by these rows.

## Open questions

- Does the studio option create the same kind of SPA site that Learn documents for the CLI, including the same prerequisites and the JavaScript upload setting? Watch the Power Pages documentation for the studio flow.
- Will the studio SPA option be available to every maker or gated by a setting, and will it be on by default? The roadmap record does not say; watch Message center.
- Will an administrator control specific to SPA creation be published, or does the tenant site-creation setting cover it?
- Will a licence or meter specific to SPA sites be published, or will they use the existing Power Pages capacity?

<!-- rationale
risk: Medium. SPA sites read and write Dataverse through Power Pages Web APIs under the same table permissions and web roles as other sites, and Learn's setup asks environments to allow .js uploads. No default is stated, so this is rated on today's behaviour continuing.
cost: Variable. Power Pages is licensed by authenticated and anonymous user capacity per website, with a pay-as-you-go meter for each. A licence or meter specific to SPA sites is not yet published.
impact: Low. Makers and administrators who create sites notice it first; site visitors are affected only by sites that someone builds.
-->
