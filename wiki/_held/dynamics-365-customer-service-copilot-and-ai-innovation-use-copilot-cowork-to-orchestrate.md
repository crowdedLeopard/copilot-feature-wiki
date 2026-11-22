---
title: "Dynamics 365 Customer Service: Customer Service skills in Copilot Cowork"
slug: "dynamics-365-customer-service-copilot-and-ai-innovation-use-copilot-cowork-to-orchestrate"
roadmapId: 576851
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "A Customer Service plugin lets service representatives run case workflows on Dynamics 365 data from Copilot Cowork. Access rests on the Service app, Cowork spending policies and Dynamics roles; check all three."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn requires Cowork access under the organisation's licensing and spending policy plus 'applicable Dynamics 365 Customer Service licensing', without naming a licence. Cowork usage is billed in Copilot Credits."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["customer-service","dynamics-365","cowork","plugins","skills","copilot-credits","spending-policies","human-in-the-loop","write-actions"]
sources:
  - title: "Microsoft 365 Roadmap 576851"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576851"
    kind: "roadmap"
  - title: "Use Customer Service skills in Copilot Cowork"
    url: "https://learn.microsoft.com/dynamics365/customer-service/use/use-copilot-cowork-service-skills"
    kind: "learn"
  - title: "Manage the Service app in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Determine access controls for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-access"
    kind: "learn"
  - title: "Create spendingPolicyServiceSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "copilotPackage resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/resources/copilotpackage"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-cowork-access-business-applications-with-work-iq","spending-policies","copilot-credits","security-roles","dynamics-365-customer-service-copilot-and-ai-innovation-improve-customer-outcomes-with-ser"]
controls:
  - governs: "Which users can use Cowork at all (spending policies that select Cowork)"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Select agents and services"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    note: "Select Cowork on the Select agents and services step. The request body sets serviceId and state. Beta API."
  - governs: "Which users the Service app (and so the Customer Service plugin) is available to and installed for"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > Service > Users > Available to"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "The request body sets availableTo and allowedUsersAndGroups. Requires a Microsoft Agent 365 licence. Beta API; the reference page does not name the Service app."
  - governs: "Whether the Service app is blocked for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > Service > Block"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocking can also affect Service Agent. Requires a Microsoft Agent 365 licence. Beta API; the reference page does not name the Service app."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-16T19:09:47"
changes:
  - date: "2026-11-22"
    note: "New briefing: Customer Service plugin in Copilot Cowork, with the Service app and Cowork spending-policy controls, and the sources' conflicting statements on its default."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 81 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 81
  confirmed: 78
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "64d74bef38c965189b1f3c1f7d427405"
---

## What's changing

The roadmap item says the Customer Service plugin in Copilot Cowork is available out of the box for service representatives, who can use its skills after an administrator enables the plugin for them in Cowork settings. It lists seven capabilities: prioritising and enriching cases, flagging cases where severity does not match urgency signals, a one-screen case brief at intake, root-cause and ranked resolution suggestions, knowledge article matching, template-based customer email drafts for representative review, and escalation packets for the next owner.

Microsoft Learn documents the plugin on [Use Customer Service skills in Copilot Cowork](https://learn.microsoft.com/dynamics365/customer-service/use/use-copilot-cowork-service-skills). It says the skills are delivered through the Service app, which "might already be installed in your organization". A representative opens Cowork, goes to Customize, searches for Service and turns on the toggle, then selects the Dynamics 365 environment in the plugin's Settings. Every task is grounded in live Dynamics 365 case data and Microsoft 365 context such as emails, meetings and chats. Checkpoints let representatives review and approve proposed field updates and actions before anything is committed to Dynamics 365, and the page notes that service-related tool calls "might require user approval".

The sources describe arrival differently. The roadmap says an administrator enables the plugin; the Learn page gives a user toggle and an app that may already be installed; and the Cowork plugin page says Dynamics 365 Customer Service and Sales integrations are enabled by default and can be disabled in the Microsoft 365 admin center. The default state is therefore treated as not stated.

The roadmap record shows status Launched, with a preview target of May CY2026 and a general availability target of June CY2026 (release phases: General Availability and Preview), for Worldwide (Standard Multi-Tenant) on the web.

## Why it matters

This puts an agentic workflow in front of service representatives, with Dynamics 365 case data and their Microsoft 365 content in the same task. Two administrative gates decide who gets it: the Service app's assignment in the Microsoft 365 admin center, and Cowork access, which Microsoft says is granted by any spending policy that selects Cowork. Dynamics 365 security roles then decide which records the plugin can touch.

Because the Service app might already be installed and Cowork access follows spending-policy scope, check both today rather than after representatives start asking. No source says existing behaviour changes if you do nothing, but Microsoft has not stated what happens on arrival, so the safe assumption is that a licensed representative already in a Cowork spending policy could find the plugin.

## Risk assessment

**Data exposure**

- The plugin reads live Dynamics 365 case data together with Microsoft 365 emails, meetings and chats. Microsoft says Cowork operates within the Dynamics 365 and Microsoft 365 permissions already in place, so over-broad Dynamics security roles or oversharing in Microsoft 365 widen what a task can pull in.
- Microsoft's Service app page advises reviewing destination-service terms and your organisation's data policies before allowing service information to be processed by another experience.

**Security & identity**

- Dynamics 365 plugins use Microsoft Entra ID authentication, and administrators cannot sign in on behalf of users: each representative completes the sign-in or consent flow and selects the environment. Check which environment each representative connects to before records are retrieved or changed.
- Microsoft states that Dynamics 365 security roles continue to determine service-data access, and that Microsoft 365 administrator roles should not be handed out to make the plugin appear.

**Autonomy & actions**

- The plugin can propose field updates and actions in Dynamics 365. Checkpoints let the representative approve them before they are committed, and Learn says tool calls might require approval. The page does not list which calls skip approval, so treat approval as a checkpoint to confirm in a pilot.
- Drafted customer replies are for representative review, per the roadmap item.

**Change & support**

- The Service app packages Service Agent and the Customer Service plugins for supported Copilot experiences, and Microsoft says removing it can affect more than one experience. Blocking or uninstalling it to stop Cowork use can also stop Service Agent.
- App installation does not enable Cowork or grant Dynamics 365 data access, and an environment chosen in another Copilot experience might not apply to Cowork, so expect support questions about missing records or tools.

## Cost and licensing

**Licences.** Learn says representatives need access to Copilot Cowork under the organisation's applicable licensing and spending policy, applicable Dynamics 365 Customer Service licensing, and permission to the intended environment and records. That page refers to the Customer Service licensing without naming a licence. The Cowork plugin management page separately says users of Cowork plugins must have Microsoft 365 Copilot licences assigned. Installing the Service app from Microsoft Marketplace needs permissions equivalent to the tenant administrator and a paid licence for using its capabilities.

**Meter.** Cowork uses usage-based billing. Model responses, tool and skill calls, image generation and browser tasks count towards the organisation's consumption, and administrators see usage and set per-user or per-group limits in the Microsoft 365 admin center (Copilot > Cost Management). See [Copilot Credits](/concepts/copilot-credits/) and [spending policies](/concepts/spending-policies/).

**Limits.** A low credit limit does not block Cowork access, and Microsoft says limits are a spending safeguard rather than a real-time gate because enforcement is evaluated asynchronously. A credit rate specific to the Customer Service plugin is not published on its Learn page.

**Indirect costs.** Administrator time to align the Service app scopes, spending policies and Dynamics roles; Purview audit entries for Copilot activities are provided by Audit Standard at no extra cost, according to the plugin management page.

## Scope

Representatives who hold the Service app assignment, have Cowork access, and have Dynamics 365 security-role access to the intended Customer Service environment. The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform, and describes the plugin as enabled by admins, makers or marketers for end users.

Administrators who manage plugins need to be a tenant administrator or hold the Copilot administrator role. A read-only role is not sufficient to install or consent to the Service app. Each representative selects the Dynamics 365 environment: Cowork picks it automatically only where one environment is available. Custom skills can also be created and installed from the user's OneDrive, per the Learn page.

## Governance guidance

### Before rollout

- Check the Service app in Microsoft 365 admin center > Agents > All agents > Registry. Compare **Installed to** and **Available to** on its **Users** tab, because the app might already be installed.
- List every spending policy that selects Cowork (Copilot > Cost Management > Configuration). Any user in scope of one of them can use Cowork, whatever its credit limit.
- Ask the Dynamics 365 administrator to confirm the Customer Service licensing for the pilot representatives, their security roles ([Dataverse security roles](/concepts/security-roles/)) and the Customer Service MCP configuration the Learn page says must be in place.
- Confirm that pilot representatives hold Microsoft 365 Copilot licences, as the plugin management page requires.

### At rollout

- Align **Installed to** and **Available to** to the pilot group; Microsoft says changing only **Available to** does not narrow a broader deployment.
- Test with a representative's regular account rather than an administrator account, as Microsoft advises.
- Brief representatives on selecting the environment in the plugin's Settings and on approving or rejecting checkpoints before updates are committed.

### After rollout

- Review Cowork consumption and per-user limits in Copilot > Cost Management, and remember that lowering a limit does not remove access.
- Search the Microsoft Purview audit log for Copilot activities to see how Cowork and its plugins are used.
- Weigh any decision to block or uninstall the Service app against its effect on Service Agent before acting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use Cowork at all (spending policies that select Cowork)</strong><br><small>Group</small><br><small class="controls__note">Select Cowork on the Select agents and services step. The request body sets serviceId and state. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Select agents and services <a href="https://learn.microsoft.com/copilot/cowork/cowork-admin-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users the Service app (and so the Customer Service plugin) is available to and installed for</strong><br><small>Group</small><br><small class="controls__note">The request body sets availableTo and allowedUsersAndGroups. Requires a Microsoft Agent 365 licence. Beta API; the reference page does not name the Service app.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › Service › Users › Available to <a href="https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Service app is blocked for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Blocking can also affect Service Agent. Requires a Microsoft Agent 365 licence. Beta API; the reference page does not name the Service app.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › Service › Block <a href="https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting specific to the Customer Service plugin inside Cowork is documented beyond the Service app's own scopes, so the rows combine the controls Microsoft documents for the app and for Cowork access. Microsoft calls the Service app's deployment and availability scopes independent, and says organisation-wide installation can override a limited scope.

The spending-policy update API changes only a policy's display name, limits and billing methods; adding Cowork to a policy is a separate service-settings call. The Cowork plugin page also treats the plugin as manageable under Agents > Tools in the Microsoft 365 admin center, and says the Customer Service integration is enabled by default and can be disabled in the Microsoft 365 admin center. Dynamics 365 security roles, which decide record access, are managed in Dynamics 365 rather than in these rows.

## Open questions

- What is the default on arrival: does the Customer Service plugin appear for Cowork users once the Service app is installed, does each user turn it on, or does an administrator enable it, as the roadmap says? Watch the roadmap item and the Learn plugin page.
- Which specific Dynamics 365 Customer Service licence does a representative need, and does the plugin's use consume Copilot Credits beyond Cowork's own usage? Watch the Learn plugin page.
- Which Customer Service MCP configuration and Dynamics 365 privileges must be in place, and which tool calls require approval? Watch Learn's Customer Service MCP tools overview.
- Does the Package Management API in Microsoft Graph expose the Service app as a package? Watch the Microsoft Graph reference for copilotPackage.

<!-- rationale
risk: Medium. The plugin reads live case data with Microsoft 365 context and proposes field updates, but it runs within each user's existing permissions and proposed updates go through representative checkpoints.
cost: Variable. Cowork is billed by usage in Copilot Credits, and the plugin also needs Dynamics 365 Customer Service licensing. A credit rate specific to the plugin is not published on its Learn page.
impact: Medium. Service representatives and their supervisors notice it; other users are unaffected unless the Service app is also assigned to them.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; controls[1].governs; Governance controls table / admin-path: Agents > All agents > Registry > Service > Users > Available to controls both availability and installation targets. | Found: Installed to or Installed for identifies preinstallation targets. Available to controls who can install or use the app. These scopes are independent. | Fix: Narrow controls[1].governs and the matching table label to 'Which users can install or use the Service app and its Customer Service plugin'. Keep the existing Available to path; it is correct for availability, not preinstallation. | Source: https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app
- [contradicted, blocker] Governance controls: first paragraph / absence: No Customer Service plugin setting inside Cowork is documented beyond the Service app's scopes. | Found: Go to Customize and search for Service. Turn on the toggle. | Fix: Replace the first sentence with 'The rows show the Service app controls and Cowork access controls.' The existing user-toggle and integration-control descriptions should remain; do not assert that no other setting is documented. | Source: https://learn.microsoft.com/dynamics365/customer-service/use/use-copilot-cowork-service-skills
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Cowork policy control is under Copilot > Cost Management > Configuration > + Add spending policy > Select agents and services. | Found: On the Scope user and group step, choose Specific groups and select the security group. On the Select agents and services step, select Cowork. | Fix: Set controls[0].ui.path and its rendered path to 'Copilot > Cost Management > Configuration > + Add spending policy > Scope user and group > Specific groups > Select agents and services'. Retain the note to select Cowork. | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance
- [supported, minor] controls[1].api; controls[1].note; Governance controls table / command: PATCH /beta/copilot/admin/catalog/packages/{id} updates package availability and deployment. | Found: availableTo | Enum value specifying which users or groups within the tenant can access this package. Required if updating allowedUsersAndGroups. acquireUsersAndGroups | Users/groups for whom the package is deployed. | Fix: Apply the availability-only narrowing in the controls[1].governs fix. The existing availableTo and allowedUsersAndGroups note then correctly describes the operation for the narrowed row; do not present those properties as setting installation targets. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / cost: Cowork consumption is measured in Copilot Credits. | Found: You can type /cost in Cowork to see the approximate Copilot Credit usage for a task, how many credits you have used this month, and how many remain. | Fix: Add 'Credit usage for Microsoft Copilot Cowork tasks' at https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-cost to sources to directly support the named meter. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-cost
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist names controls that have no corresponding controls-table row. | Found: Align Installed to and Available to to the pilot group; Review Cowork consumption and per-user limits; Search the Microsoft Purview audit log. The table lists Cowork access, Service availability and Service blocking only. | Fix: The checklist's Installed to, Dynamics security-role, per-user-limit and Purview audit steps have no corresponding table rows. Remove those instructions from the checklist; do not add unverified control rows.
-->
