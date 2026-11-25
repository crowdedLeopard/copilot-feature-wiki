---
title: "Power Pages: SDK for native mobile apps and kiosks"
slug: "power-pages-sdk-software-development-kit"
roadmapId: 577419
topic: "power-platform"
products: ["Power Pages"]
summary: "Microsoft plans a Power Pages SDK so developers can build native mobile apps and kiosks on a Power Pages backend. No Learn page exists yet; administrators should check licensing and data exposure before makers adopt it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the SDK. Power Pages itself is licensed by authenticated user and anonymous user capacity, with pay-as-you-go meters for each, and Power Pages Web API calls require a Power Pages licence."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["power-pages","mobile","web-api","authentication","authorisation","table-permissions","web-roles","dataverse","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap 577419"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577419"
    kind: "roadmap"
  - title: "Portals Web API overview"
    url: "https://learn.microsoft.com/power-pages/configure/web-api-overview"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "Configure site settings for websites"
    url: "https://learn.microsoft.com/power-pages/configure/configure-site-settings"
    kind: "learn"
  - title: "Configuring table permissions"
    url: "https://learn.microsoft.com/power-pages/security/table-permissions"
    kind: "learn"
  - title: "Overview of sites as progressive web apps"
    url: "https://learn.microsoft.com/power-pages/configure/progressive-web-apps"
    kind: "learn"
  - title: "Which Dataverse tables a site exposes through the portals Web API (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/mspp_sitesetting"
    kind: "learn"
  - title: "Which records and privileges web roles get on each table (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/powerpagecomponent"
    kind: "learn"
videos: []
related: ["power-pages-first-class-support-for-connector-apis-in-power-pages","power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver","power-pages-design-studio-configure-authentication-with-security-agent","power-pages-administration-and-governance-manage-external-authentication-providers-with-gr","power-pages-professional-developer-experiences-control-power-pages-components-using-client"]
controls:
  - governs: "Which Dataverse tables a site exposes through the portals Web API"
    scope: "site"
    ui:
      surface: "Portal Management app"
      path: "Website > Site settings"
      docs: "https://learn.microsoft.com/power-pages/configure/configure-site-settings"
    api:
      kind: "rest"
      call: "POST [organization URI]/api/data/v9.2/mspp_sitesettings with body {\"mspp_name\":\"Webapi/<table-name>/enabled\",\"mspp_value\":\"true\",\"mspp_websiteid@odata.bind\":\"<website-entity-reference>\"}"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/mspp_sitesetting"
    note: "General control: Microsoft has not confirmed it applies to the SDK. Creates the enabled setting only, not a complete Web API configuration. Documented default for Webapi/<table-name>/enabled is False."
  - governs: "Which records and privileges web roles get on each table"
    scope: "site"
    ui:
      surface: "Power Pages design studio"
      path: "Security > Protect > Table permissions"
      docs: "https://learn.microsoft.com/power-pages/security/table-permissions"
    api:
      kind: "rest"
      call: "GET [organization URI]/api/data/v9.2/powerpagecomponents"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/powerpagecomponent"
    note: "General control: Microsoft has not confirmed it applies to the SDK. A table permission takes effect only when associated with a web role. API: read-only inventory; type 18 = Table Permission. Not a permission-setting call."
  - governs: "Whether the SDK can be switched off for a site or tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no such control at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "First briefing for this roadmap item. Microsoft Learn has no SDK page yet, so the page rests on the roadmap text and existing Power Pages documentation."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: fixed the site-setting request body, replaced the table-permission API call with a read-only inventory call, set cost to low, and removed an unsupported monitoring step."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 53 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 59
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "6283cf641bdaebe31abd928ce8e0530f"
---

## What's changing

Microsoft plans a Software Development Kit (SDK) for Power Pages. The roadmap item describes it as a way to "build native mobile applications or kiosks using Power Pages as the backend foundation with support for authentication, authorization, APIs, data access, and reusable mobile capabilities."

Microsoft Learn does not describe this SDK at the time of writing (November 2026), so everything about its behaviour on this page is the roadmap's description. Which platforms and languages it supports, how apps sign in, and which Power Pages APIs it calls are not yet documented.

The roadmap item is In development. It lists a Preview phase with a target of January CY2027 and a General Availability phase with a target of March CY2027, for Worldwide (Standard Multi-Tenant) on the Web platform. These are Microsoft's targets, not commitments.

For context, Learn already documents turning a Power Pages site into a progressive web app (PWA), which gives a site a native app-like look and feel. That is a different mechanism from this SDK, and Microsoft has not said how the two relate.

## Why it matters

Today a Power Pages site is a website. An SDK for native apps and kiosks would let teams put a Power Pages backend behind software that is installed on phones or shared devices, outside the browser your site-level controls were designed around. Microsoft has not stated whether the SDK is on or off by default, so plan on the basis that no source says existing sites change, and that makers or developers decide to adopt it.

The decisions that fall to an administrator are the same ones that apply to any Power Pages data access: which Dataverse tables are exposed, which web roles can read or write them, and whose licence counts when a native app signs in. Settle who owns those decisions before the January CY2027 preview target.

## Risk assessment

**Data exposure**
- The roadmap item names "data access" as an SDK capability. Microsoft has not said which API it uses. The portals Web API, which Learn documents, only serves tables whose `Webapi/<table-name>/enabled` site setting is turned on and which have table permissions linked to a web role, so check those before assuming an SDK app can reach more than a site page can.
- Learn says the portals Web API "isn't optimized for third-party services or application integration". Whether SDK apps count as that kind of use is an open question.

**Security & identity**
- The roadmap item names authentication and authorization as supported. Which identity providers the SDK accepts, and how a native app or an unattended kiosk signs in, is not yet documented. Confirm this before approving a kiosk that runs without a person present.
- Table permissions and web roles are the documented record-level controls on a Power Pages site. Microsoft has not confirmed they apply to SDK-built apps.

**Autonomy & actions**
- The roadmap item says nothing about agents or automatic actions. No change is described here beyond apps being able to call the backend the SDK exposes.

**Change & support**
- The release phase is listed as both Preview and General Availability. Treat preview behaviour, limits and licensing as provisional when it appears.
- Native apps installed on devices are a new support surface for a team that currently supports sites. Decide who supports them, and whether they are distributed through app stores or managed devices, before makers commit.

## Cost and licensing

The licence an SDK-built app needs is not yet published. The roadmap item names no licence or meter.

What Learn documents for Power Pages generally: licensing is capacity based, with authenticated users per website per month and anonymous users per website per month, and each has a pay-as-you-go meter that counts the actual unique users in a month (Power Platform licensing FAQs). The portals Web API page adds that Web API operations require a Power Pages licence: calls by anonymous users count towards anonymous user capacity, and calls by authenticated users require applicable authenticated user capacity licences.

Whether native app users are counted the same way is not yet published. Indirect costs are developer and maker time, and the cost of supporting installed apps.

## Scope

- **Product and clouds:** Power Pages, in Worldwide (Standard Multi-Tenant) per the roadmap item. No other cloud is listed. That is a record fact, not a statement that other clouds are excluded.
- **Platforms:** the roadmap lists Web as the platform; the description is about native mobile apps and kiosks. Which operating systems and device types the SDK supports is not yet documented.
- **Rollout:** Preview targeted for January CY2027 and General Availability for March CY2027, both as targets. The default state and any admin switch are not stated.
- **Prerequisites and roles:** not yet documented. For the existing Web API, makers need site settings and table permissions linked to web roles.

## Governance guidance

### Before rollout
- Ask makers and developers whether any team plans to use the SDK, and for which data, so you know which sites and tables could be involved.
- Review which Power Pages sites already enable the Web API and which table permissions and web roles they grant, using the controls in the table below.
- Confirm with your licensing contact how authenticated and anonymous user capacity or the pay-as-you-go meters would apply once Microsoft publishes SDK licensing.

### At rollout
- Read the Preview documentation as soon as Microsoft publishes it, and note which sign-in methods, roles and APIs it names.
- Test with one site and a limited set of web roles before any production kiosk or device is enrolled.
- Check whether Microsoft documents an administrator control for the SDK itself; none is documented at the time of writing.

### After rollout
- Compare site settings and table permissions on sites used by SDK apps with what makers intended, and remove any Web API exposure that is not needed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Dataverse tables a site exposes through the portals Web API</strong><br><small>Site</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the SDK. Creates the enabled setting only, not a complete Web API configuration. Documented default for Webapi/&lt;table-name&gt;/enabled is False.</small></td><td data-label="Admin UI"><strong>Portal Management app</strong><br>Website › Site settings <a href="https://learn.microsoft.com/power-pages/configure/configure-site-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [organization URI]/api/data/v9.2/mspp_sitesettings with body {&quot;mspp_name&quot;:&quot;Webapi/&lt;table-name&gt;/enabled&quot;,&quot;mspp_value&quot;:&quot;true&quot;,&quot;mspp_websiteid@odata.bind&quot;:&quot;&lt;website-entity-reference&gt;&quot;}</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/mspp_sitesetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which records and privileges web roles get on each table</strong><br><small>Site</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the SDK. A table permission takes effect only when associated with a web role. API: read-only inventory; type 18 = Table Permission. Not a permission-setting call.</small></td><td data-label="Admin UI"><strong>Power Pages design studio</strong><br>Security › Protect › Table permissions <a href="https://learn.microsoft.com/power-pages/security/table-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [organization URI]/api/data/v9.2/powerpagecomponents</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/powerpagecomponent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the SDK can be switched off for a site or tenant</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no such control at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first two rows are existing Power Pages controls for the portals Web API. Microsoft has not confirmed that the SDK uses the Web API, site settings or table permissions, so treat them as the nearest documented controls, not as controls over the SDK.

The Web API reference says table permissions follow the user's web role, and that a table permission takes effect only when associated with at least one web role. Learn documents no setting that switches the SDK itself on or off for a site or a tenant at the time of writing (November 2026); the third row records that gap.

## Open questions

- Which licence does an SDK-built app user need, and do native app users count towards authenticated or anonymous user capacity? Watch the Power Platform licensing FAQs and Message center.
- Does the SDK call the portals Web API and honour site settings, table permissions and web roles, or does it use a different data path?
- Which identity providers and sign-in flows does the SDK support, and how does an unattended kiosk authenticate?
- Is there an administrator switch for the SDK, and is it on or off by default? Watch for Preview documentation as the January CY2027 preview target approaches.
- Which platforms and device types are supported, given the roadmap lists Web as the platform?

<!-- rationale
risk: Medium. The SDK would put a new kind of client in front of Dataverse data held behind a Power Pages site, and Microsoft has not yet said which existing site controls it relies on.
cost: Low. The known costs are developer, maker and support time; SDK licensing and whether website user meters apply are not yet published.
impact: Low. The roadmap item describes a developer capability, so makers and developers notice first; end users meet it only if a team ships a native app or kiosk built on it.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls: second row / command: GET /api/data/v9.2/powerpagecomponents is the automation alongside the control deciding table-permission records and privileges. | Found: Update operations use the HTTP PATCH verb. Pass a JSON object containing the properties you want to update to the URI that represents the record. | Fix: Replace the read-only inventory call with 'PATCH [organization URI]/api/data/v9.2/mspp_entitypermissions(<permission-id>)' and set docs to https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/mspp_entitypermission. Replace the inventory/type-18 note with: 'Updates an existing table permission: mspp_scope sets the access type; mspp_read, mspp_write, mspp_create, mspp_delete, mspp_append and mspp_appendto set privileges. Association with a web role is still required.' Retain the SDK applicability caveat and apply the same replacement to the rendered row. The original GET exists and the note correctly calls it read-only, but it does not configure this control. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/update-delete-table-rows
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown, while the notes describe Power Pages' general licensing. | Found: Power Pages (formerly Power Apps portals) licensing is capacity based and offers two types of capacities based on user type: Authenticated users per website/month and Anonymous users per website/month. | Fix: Set licensing.model to 'mixed' to reflect the published general product model. Retain the qualification that SDK-specific licensing and how native-app users are counted are not yet published; the website licensing FAQ does not settle those narrower questions. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq#power-pages
- [supported, minor] Why it matters / behaviour: An existing Power Pages site is a website. | Found: Microsoft Power Pages is a secure, enterprise-grade, low-code software as a service (SaaS) platform for creating, hosting, and administering modern external-facing business websites. | Fix: Add https://learn.microsoft.com/power-pages/introduction to sources; it supports the existing-website context but is not currently cited. | Source: https://learn.microsoft.com/power-pages/introduction
- [supported, minor] controls[0].ui; Governance controls: first row / admin-path: Portal Management app > Website > Site settings reaches the site-setting control. | Found: Using the Portal Management app, select Site settings under the Website section. ... To edit an existing setting, select the Site Setting listed in the grid. | Fix: Extend the existing-setting route to 'Website > Site settings > site setting' in front matter and the rendered table. The current route reaches the correct list but stops before opening the setting. | Source: https://learn.microsoft.com/power-pages/configure/configure-site-settings
- [supported, minor] controls[0].api; Governance controls: first row / command: POST to /api/data/v9.2/mspp_sitesettings can create the enabled site setting using the printed name, value and website binding. | Found: Entity set path: [organization URI]/api/data/v9.2/mspp_sitesettings; Operations supported: POSTGETPATCHDELETE; mspp_name; mspp_value; mspp_websiteid | mspp_website | Fix: Set api.call and the rendered call to 'POST [organization URI]/api/data/v9.2/mspp_sitesettings', without a body. Add to the note: 'The request body sets mspp_name to Webapi/<table-name>/enabled, mspp_value to true, and mspp_websiteid@odata.bind to the website reference.' | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/mspp_sitesetting
- [supported, minor] controls[1].ui; Governance controls: second row / admin-path: Power Pages design studio > Security > Protect > Table permissions reaches table-permission configuration. | Found: In the design studio from the side menu, select Security. ... in the Protect section, select Table permissions ... Select the table permission that you want to edit | Fix: Extend the existing-permission route to 'Security > Protect > Table permissions > table permission' in front matter and the rendered table. The current route reaches the correct list but stops before opening a permission. | Source: https://learn.microsoft.com/power-pages/security/table-permissions
-->
