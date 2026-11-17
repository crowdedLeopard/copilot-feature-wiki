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
  notes: "Cowork is metered in Copilot Credits through usage-based billing, and Microsoft Learn says users of Cowork plugins need Microsoft 365 Copilot licences. A rate or licence statement for this skill is not yet published."
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
  - title: "Build and edit model-driven apps with AI code generation tools"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/model-driven-app-external-tools"
    kind: "learn"
  - title: "Who can use Cowork, and the credit limits that apply (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
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
      path: "Copilot > Cost Management > Configuration > + Add spending policy"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "General Cowork control. A policy that selects Cowork grants access; a low limit does not block it. The Graph API is beta."
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
    note: "General plugin control: Microsoft has not confirmed this skill is a plugin. API is beta and needs a Microsoft Agent 365 licence."
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
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap plan for a model-app-builder skill in Copilot Cowork; Learn documents the Cowork controls but not the skill itself."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 70
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "1c80335d2926f05bdc5bb62d8289c016"
---

## What's changing

The roadmap item says information workers can use the model-app-builder skill in Copilot Cowork to create and refine model-driven apps from natural-language requirements. Cowork turns a business scenario into an app specification and build plan for review, and then creates the model-driven app and its supporting Power Apps and Microsoft Dataverse artifacts. Makers can keep iterating in Cowork or open the generated artifacts in Power Apps.

Microsoft Learn does not describe the Cowork version yet (November 2026), so the paragraph above is the roadmap's description. Learn does document a skill of the same name for AI code generation tools such as GitHub Copilot CLI and Claude Code. Treat it as background, not as confirmation of how Cowork behaves. That page says the skill presents an app spec and a dry-run build plan, that "No app artifacts are created until you approve the plan", and that it can create tables, forms, views, business rules and security roles.

The roadmap item is In development, with a preview targeted for November CY2026 and general availability targeted for January CY2027. It lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and a release channel of Not applicable. Neither the roadmap nor Microsoft Learn states whether the skill is on or off on arrival.

## Why it matters

This gives makers a conversational route to creating Dataverse tables, apps and security roles in a Power Platform environment, without opening each Power Apps designer. Expect more apps and schemas to appear faster, and expect the review burden to move to whoever governs the environment.

Microsoft has not stated what happens on arrival if nobody acts. Cowork access is already controlled by spending policies in the Microsoft 365 admin center, so the practical audience is whoever sits in a policy that selects Cowork. Confirm that list, and the environments those people can build in, before the preview starts.

## Risk assessment

**Data exposure**

- The generated tables and security roles live in a Dataverse environment. Learn says, for the code-tools version of the skill, that it adds security roles "based on the planned personas and data access needs". Treat those roles as unreviewed until a person has checked them, and check them before the app is shared.
- The roadmap does not say which data the Cowork skill reads to write the spec. Microsoft has not documented this at the time of writing.

**Security & identity**

- For the code-tools version, Learn requires "permission to create and modify Dataverse and model-driven app artifacts" in the target environment. Microsoft has not said how the Cowork version obtains that access or which account it uses. Confirm this before relying on environment security roles to limit it.

**Autonomy & actions**

- The roadmap says the build plan is reviewed before the app is created. The skill writes to the environment after approval, so the approval step is the control. Learn says for the code-tools version: "Review and test new or edited artifacts for correctness, security, accessibility, and compliance with your organization's standards before sharing the app."

**Change & support**

- The feature is in preview first. For the code-tools version Learn says the skill "is updated regularly", "doesn't currently support every model-driven app artifact or concept", and that changes made outside the skill can affect later AI-assisted edits. Expect support requests where makers edit a generated app in Power Apps and then ask Cowork to change it again.

## Cost and licensing

Microsoft has not published a licence or price for this skill. What Learn states for Cowork generally:

- Cowork uses usage-based billing, and "Activities such as model responses, tool and skill calls, image generation, and browser tasks count toward your organization's consumption" (Manage Copilot Cowork for your organization). The meter is Copilot Credits. See [Copilot Credits](/concepts/copilot-credits/).
- Admins must enable usage-based billing before users can access Cowork. Access is granted by a spending policy that selects Cowork, and a low credit limit does not block access (row 1 of the controls table).
- Learn says users of Cowork plugins must have Microsoft 365 Copilot licences. It does not say whether this skill is delivered as a plugin.

Not yet published: the credits this skill consumes, and whether the artifacts it creates draw on Power Platform or Dataverse capacity. Admin time for reviewing generated apps is an indirect cost.

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

- Inspect the security roles and tables the skill created in Power Apps before the app is shared, and remove any access the scenario does not need.
- Compare Cowork consumption with the limits in your spending policies (row 1). Learn says credit limits are "a spending safeguard, not a real-time access gate", so a user can start tasks after reaching a limit.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Cowork, and the credit limits that apply</strong><br><small>Group</small><br><small class="controls__note">General Cowork control. A policy that selects Cowork grants access; a low limit does not block it. The Graph API is beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy <a href="https://learn.microsoft.com/copilot/cowork/cowork-admin-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Cowork plugin is available to users, or blocked</strong><br><small>App</small><br><small class="controls__note">General plugin control: Microsoft has not confirmed this skill is a plugin. API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Block <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold security roles in a Power Platform environment</strong><br><small>Environment</small><br><small class="controls__note">General control. Needs the System Administrator role by default. Microsoft has not confirmed how the Cowork skill uses environment roles.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin assign-user --environment &lt;environment-id&gt; --user &lt;upn&gt; --role &quot;&lt;role-name&gt;&quot;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the model-app-builder skill in Cowork</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Cowork access follows spending-policy scope, not the credit limit and not the Cowork entry under Agents > All Agents, which Learn says has no effect on who can use Cowork. Removing someone from every policy that selects Cowork removes access.

The plugin availability row applies only if the skill ships as a Cowork plugin, which Microsoft has not confirmed. The Package Management API is in beta, needs a Microsoft Agent 365 licence, supports delegated permissions only and is not available in the US Government or China clouds listed on its page. Environment security roles are the existing Power Platform control over who can build in an environment, and they are not documented as a control specific to this skill. Microsoft Learn documents no separate tenant-wide switch for this skill at the time of writing (November 2026).

## Open questions

- Which Power Platform environment does the Cowork skill build into, and under whose identity and permissions does it write there? Watch the Learn page for Cowork and Power Apps.
- Is the skill delivered as a Cowork plugin, so that it can be allowed or blocked under Agents > Tools, or is it built in? Watch the Manage plugins for Cowork page.
- How many Copilot Credits does a build or an edit consume, and does any Power Platform or Dataverse capacity apply? Watch the Copilot Credits pages and Message center.
- Is the skill on or off by default when the preview starts in November CY2026, and is a separate admin switch planned? Watch the roadmap item and Message center.

<!-- rationale
risk: Medium. The roadmap says the skill creates a model-driven app and Dataverse artifacts after the user reviews a plan; Microsoft Learn does not yet say which environment, identity or roles the Cowork version uses.
cost: Variable. Cowork activity, including skill calls, counts toward usage-based billing in Copilot Credits; what this skill consumes is not yet published.
impact: Medium. The roadmap lists the feature scope as admins or makers, so makers are the people who will notice it first.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters; Risk assessment: Data exposure; Governance guidance: After rollout / behaviour: The planned Cowork skill creates Dataverse tables and security roles, without opening each designer. | Found: Searched: '"model-app-builder" "Cowork" "security roles"'; read the roadmap, code-tools skill, Cowork build-apps and Dataverse-plugin pages. Role creation is explicit for the code-tools skill and a separate Dataverse plugin, not this named Cowork skill. | Fix: Replace the first sentence of Why it matters with 'This gives makers a conversational route to creating model-driven apps and supporting Power Apps and Dataverse artifacts.' Replace the first Data exposure sentence with 'Review the generated Dataverse artifacts before sharing the app.' In After rollout, replace 'the security roles and tables the skill created' with 'the generated app and its supporting artifacts'. Keep the explicitly attributed code-tools background.
- [contradicted, blocker] Cost and licensing; Open questions / cost: Whether the generated artifacts draw on Power Platform or Dataverse capacity is not yet published. | Found: Tracks structured data stored directly in Dataverse, including table rows, metadata, and relational data created by Power Apps, Power Automate, Dynamics 365 customer engagement apps (Dynamics 365 Sales, Dynamics 365 Service, Dynamics 365 Marketing), and custom model-driven apps. | Fix: Replace 'Not yet published: the credits this skill consumes, and whether the artifacts it creates draw on Power Platform or Dataverse capacity' with 'Not yet published: the credits this skill consumes. Dataverse database capacity covers table rows, metadata and relational data created by custom model-driven apps; capacity reporting excludes trial, preview, support and developer environments.' Cite https://learn.microsoft.com/power-platform/admin/capacity-storage. In Open questions, remove 'and does any Power Platform or Dataverse capacity apply?' and retain the question about build/edit Copilot Credits. | Source: https://learn.microsoft.com/power-platform/admin/capacity-storage
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; front matter: licensing.notes; rationale: cost / cost: Cowork consumption is measured in Copilot Credits. | Found: Use spending policies in the Cost Management dashboard to control access and Copilot Credit spending for AI experiences enabled by usage-based billing. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits to sources for the Copilot Credit meter and policy billing facts. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits
- [supported, minor] controls[1].governs; Governance guidance: At rollout / behaviour: Administrators can block a Cowork plugin to make it unavailable to users. | Found: Blocking takes effect for new conversations. Conversations already in progress that use the plugin continue until they end. | Fix: Append to controls[1].note and the corresponding rendered note: 'Blocking takes effect for new conversations; conversations already using the plugin continue until they end.' | Source: https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins
- [supported, minor] Governance controls; Governance guidance: Before rollout / applicability: Environment security roles are an existing general control over who can create Dataverse artifacts. | Found: A system or custom security role that has Create, Read, and Write privileges to the Entity table. These privileges allow the user to create and edit tables in Dataverse. | Fix: Add https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-entities-portal to sources for the statement about security roles controlling table creation. Retain the caveat that the Cowork skill's use of roles is unconfirmed. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-entities-portal
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Cowork takes actions after user approval. | Found: Cowork doesn't take actions without your approval. You can also pause Cowork at any time (to finish the current step, or immediately), resume when you're ready, or cancel the task entirely. | Fix: Cite https://learn.microsoft.com/copilot/cowork/get-started for Cowork's general approval requirement. Replace 'The skill writes to the environment after approval, so the approval step is the control' with 'Cowork generally requires approval before taking actions; the roadmap describes a build plan for review before app creation.' This avoids presenting the code-tools skill's exact approval sequence as a separately documented Cowork implementation. | Source: https://learn.microsoft.com/copilot/cowork/get-started
-->
