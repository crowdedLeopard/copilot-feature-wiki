---
title: "Power Apps: build model-driven apps with Copilot Cowork"
slug: "power-apps-build-model-driven-apps-with-copilot-cowork"
roadmapId: 579979
topic: "power-platform"
products: ["Power Apps","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a model-app-builder skill in Copilot Cowork that drafts and builds model-driven apps and Dataverse artifacts from a plain-language brief. Preview is targeted for November 2026; admins should decide who builds, and where."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Cowork requires a Microsoft 365 Copilot licence and is metered in Copilot Credits through usage-based billing. Any additional licence requirement or credit rate specific to this skill is not yet published."
audiences: ["power-platform-admin","m365-admin","maker","finops"]
tags: ["power-apps","model-driven-apps","cowork","dataverse","copilot-credits","spending-policies","security-roles","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap 579979"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579979"
    kind: "roadmap"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Determine access controls for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-access"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "Get started with Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/get-started"
    kind: "learn"
  - title: "Copilot Cowork common questions"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-faq"
    kind: "learn"
  - title: "Build and edit model-driven apps with AI code generation tools"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/model-driven-app-external-tools"
    kind: "learn"
  - title: "Dataverse capacity-based storage details"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-storage"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "Create and edit tables in Power Apps"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-entities-portal"
    kind: "learn"
  - title: "Whether a Cowork plugin is available to users, or blocked (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users hold security roles in a Power Platform environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Which users hold security roles in a Power Platform environment (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    kind: "learn"
videos: []
related: ["copilot-credits","managed-environments","power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith","power-apps-use-dataverse-custom-apis-in-generative-pages"]
controls:
  - governs: "Who can use Cowork, and the credit limits that apply"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Identity > Specific groups > Select agents and services > Cowork > Set limits and alerts"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Selecting Cowork grants access; a low limit does not block it. Beta API: sets serviceSettings (serviceId cowork, state enabled), periodLimit, perUserLimit. Group policies are created disabled; link their audience first."
  - governs: "Whether a Cowork plugin is available to users, or blocked"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Users > Block"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General plugin control; not confirmed for this skill. API is beta, needs an Agent 365 licence. Blocking takes effect for new conversations; conversations already using the plugin continue until they end."
  - governs: "Which users hold security roles in a Power Platform environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "pac-cli"
      call: "pac admin assign-user --environment <environment-id> --user <upn> --role \"<role-name>\""
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    note: "General control. Needs the System Administrator role by default. Microsoft has not confirmed how the Cowork skill uses environment roles."
  - governs: "Tenant-wide switch for the model-app-builder skill in Cowork"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap plan for a model-app-builder skill in Copilot Cowork; Learn documents the Cowork controls but not the skill itself."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed the unsupported claim that the Cowork skill creates security roles; replaced the Dataverse capacity gap with the documented capacity rule; narrowed the approval statement."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: Cost and licensing and the licensing note now state that Cowork requires a Microsoft 365 Copilot licence and enabled usage-based billing, with any skill-specific licence or credit rate not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 76 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: the Cowork spending-policy path now runs through the wizard steps to the limits, and the Graph row notes the request properties and that group policies are created disabled."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: the Security & identity bullet, risk rationale and first open question now say Cowork actions are authorized through the user's Microsoft 365 account, and that the skill's Dataverse connection mechanism is not yet documented."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 75 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-19"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 75
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bc376d36b5334f4cb2c956f5c6aba473"
---

## What's changing

The roadmap item says information workers can use the model-app-builder skill in Copilot Cowork to create and refine model-driven apps from natural-language requirements. Cowork turns a business scenario into an app specification and build plan for review, and then creates the model-driven app and its supporting Power Apps and Microsoft Dataverse artifacts. Makers can keep iterating in Cowork or open the generated artifacts in Power Apps.

Microsoft Learn does not describe the Cowork version yet (November 2026), so the paragraph above is the roadmap's description. Learn does document a skill of the same name for AI code generation tools such as GitHub Copilot CLI and Claude Code. Treat it as background, not as confirmation of how Cowork behaves. That page says the skill presents an app spec and a dry-run build plan, that "No app artifacts are created until you approve the plan", and that it can create tables, forms, views, business rules and security roles.

The roadmap item is In development, with a preview targeted for November CY2026 and general availability targeted for January CY2027. It lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and a release channel of Not applicable. Neither the roadmap nor Microsoft Learn states whether the skill is on or off on arrival.

## Why it matters

This gives makers a conversational route to creating model-driven apps and supporting Power Apps and Dataverse artifacts. Expect more apps and schemas to appear faster, and expect the review burden to move to whoever governs the environment.

Microsoft has not stated what happens on arrival if nobody acts. Cowork access is already controlled by spending policies in the Microsoft 365 admin center, so the practical audience is whoever sits in a policy that selects Cowork. Confirm that list, and the environments those people can build in, before the preview starts.

## Risk assessment

**Data exposure**

- Review the generated Dataverse artifacts before sharing the app. Learn says, for the code-tools version of the skill, that it adds security roles "based on the planned personas and data access needs". Treat those roles as unreviewed until a person has checked them, and check them before the app is shared.
- The roadmap does not say which data the Cowork skill reads to write the spec. Microsoft has not documented this at the time of writing.

**Security & identity**

- For the code-tools version, Learn requires "permission to create and modify Dataverse and model-driven app artifacts" in the target environment. Microsoft says every Cowork action is authorized through your Microsoft 365 account; the model-app-builder skill's specific Dataverse connection mechanism is not yet documented. Confirm that mechanism before relying on environment security roles to limit it.

**Autonomy & actions**

- Cowork generally requires approval before taking actions; the roadmap describes a build plan for review before app creation. Learn says for the code-tools version: "Review and test new or edited artifacts for correctness, security, accessibility, and compliance with your organization's standards before sharing the app."

**Change & support**

- The feature is in preview first. For the code-tools version Learn says the skill "is updated regularly", "doesn't currently support every model-driven app artifact or concept", and that changes made outside the skill can affect later AI-assisted edits. Expect support requests where makers edit a generated app in Power Apps and then ask Cowork to change it again.

## Cost and licensing

Cowork requires an active Microsoft 365 Copilot licence and enabled usage-based billing. Microsoft has not published an additional licence requirement or a credit rate specific to the model-app-builder skill. What Learn states for Cowork generally:

- Cowork uses usage-based billing, and "Activities such as model responses, tool and skill calls, image generation, and browser tasks count toward your organization's consumption" (Manage Copilot Cowork for your organization). The meter is Copilot Credits. See [Copilot Credits](/concepts/copilot-credits/).
- Admins must enable usage-based billing before users can access Cowork. Access is granted by a spending policy that selects Cowork, and a low credit limit does not block access (row 1 of the controls table).
- Learn says users of Cowork plugins must have Microsoft 365 Copilot licences. It does not say whether this skill is delivered as a plugin.

Not yet published: the credits this skill consumes. [Dataverse database capacity](https://learn.microsoft.com/power-platform/admin/capacity-storage) covers table rows, metadata and relational data created by custom model-driven apps; capacity reporting excludes trial, preview, support and developer environments. Admin time for reviewing generated apps is an indirect cost.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, with the feature scope "Admins or makers" and the Power Apps and Microsoft Copilot (Microsoft 365) products. No other cloud is listed on the roadmap item.

A user needs access to Cowork, which Learn says comes from a spending policy that selects Cowork. Managing Cowork plugins needs a tenant administrator or the Copilot administrator role. Assigning Power Platform security roles in the admin centre needs the System Administrator role by default. Prerequisites specific to this skill, such as the environment it targets, are not yet documented.

## Governance guidance

### Before rollout

- Check which users are in scope of a spending policy that selects Cowork in the Microsoft 365 admin center (row 1). Those users can use Cowork whatever their credit limit.
- List the Power Platform environments where those people hold security roles that let them create tables and apps (row 3). Learn requires create and modify permission on Dataverse and model-driven app artifacts for the code-tools version of the skill.
- Decide who will review generated apps before they are shared, and brief those makers that they should approve the plan only when it matches their intent.

### At rollout

- Pilot with a security group by scoping a Cowork-selecting spending policy to that group (row 1).
- Check whether the skill appears under Agents > Tools once the preview starts. If it does, set its availability there or block it (row 2). Microsoft has not confirmed that it does.
- Ask pilot makers to test the generated app against their own scenarios before sharing it.

### After rollout

- Inspect the generated app and its supporting artifacts in Power Apps before the app is shared, and remove any access the scenario does not need.
- Compare Cowork consumption with the limits in your spending policies (row 1). Learn says credit limits are "a spending safeguard, not a real-time access gate", so a user can start tasks after reaching a limit.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Cowork, and the credit limits that apply</strong><br><small>Group</small><br><small class="controls__note">Selecting Cowork grants access; a low limit does not block it. Beta API: sets serviceSettings (serviceId cowork, state enabled), periodLimit, perUserLimit. Group policies are created disabled; link their audience first.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Identity › Specific groups › Select agents and services › Cowork › Set limits and alerts <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Cowork plugin is available to users, or blocked</strong><br><small>App</small><br><small class="controls__note">General plugin control; not confirmed for this skill. API is beta, needs an Agent 365 licence. Blocking takes effect for new conversations; conversations already using the plugin continue until they end.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Block <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold security roles in a Power Platform environment</strong><br><small>Environment</small><br><small class="controls__note">General control. Needs the System Administrator role by default. Microsoft has not confirmed how the Cowork skill uses environment roles.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin assign-user --environment &lt;environment-id&gt; --user &lt;upn&gt; --role &quot;&lt;role-name&gt;&quot;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the model-app-builder skill in Cowork</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Cowork access follows spending-policy scope, not the credit limit and not the Cowork entry under Agents > All Agents, which Learn says has no effect on who can use Cowork. Removing someone from every policy that selects Cowork removes access.

The plugin availability row applies only if the skill ships as a Cowork plugin, which Microsoft has not confirmed. The Package Management API is in beta, needs a Microsoft Agent 365 licence, supports delegated permissions only and is not available in the US Government or China clouds listed on its page. Environment security roles are the existing Power Platform control over who can build in an environment, and they are not documented as a control specific to this skill. Microsoft Learn documents no separate tenant-wide switch for this skill at the time of writing (November 2026).

## Open questions

- Which Power Platform environment does the Cowork skill build into, and how does it establish its Dataverse connection? Watch the Learn page for Cowork and Power Apps.
- Is the skill delivered as a Cowork plugin, so that it can be allowed or blocked under Agents > Tools, or is it built in? Watch the Manage plugins for Cowork page.
- How many Copilot Credits does a build or an edit consume? Watch the Copilot Credits pages and Message center.
- Is the skill on or off by default when the preview starts in November CY2026, and is a separate admin switch planned? Watch the roadmap item and Message center.

<!-- rationale
risk: Medium. The roadmap says the skill creates a model-driven app and Dataverse artifacts after the user reviews a plan; Microsoft Learn does not yet say which environment or Dataverse connection mechanism the Cowork version uses.
cost: Variable. Cowork activity, including skill calls, counts toward usage-based billing in Copilot Credits; what this skill consumes is not yet published.
impact: Medium. The roadmap lists the feature scope as admins or makers, so makers are the people who will notice it first.
-->
