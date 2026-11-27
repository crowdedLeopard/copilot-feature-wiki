---
title: "Microsoft 365 Copilot: Copilot Cowork for GCC and GCC High"
slug: "m365-copilot-copilot-cowork-for-government-clouds"
roadmapId: 571637
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Cowork, which carries out tasks across mail, calendar, Teams and files, is planned for GCC and GCC High. Learn says admins turn it on by adding users to a spending policy; it is billed on usage."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's GCC page says Cowork requires a Microsoft 365 GCC Copilot license, with no separate Cowork license, and is billed based on usage. Prepaid Copilot Credits, pay-as-you-go or pre-purchase packs are the funding options it lists."
audiences: ["m365-admin","security","finops","compliance"]
tags: ["cowork","m365-copilot","copilot-credits","spending-policies","usage-based-billing","web-search","m365-admin-center","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 571637"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571637"
    kind: "roadmap"
  - title: "Copilot Cowork in Government Community Cloud (GCC)"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-government"
    kind: "learn"
  - title: "Copilot Cowork overview"
    url: "https://learn.microsoft.com/copilot/cowork/"
    kind: "learn"
  - title: "Determine access controls for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-access"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Use the local browser with Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-local-browser"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Create spendingPolicyServiceSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Microsoft Graph national cloud deployments"
    url: "https://learn.microsoft.com/graph/deployments"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-cowork-access-business-applications-with-work-iq","spending-policies","copilot-credits","m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds","m365-copilot-m365-accounting-skills"]
controls:
  - governs: "Which users can use Cowork (spending policy that selects Cowork)"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Policy scope > Identity > Specific groups > group > Select agents and services > Cowork"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    note: "Access grant for Cowork. The reference's example uses another serviceId and gives no Cowork value; the body needs serviceId and state. Beta API. The GCC page says worldwide spending-policy steps aren't government setup guidance."
  - governs: "Whether Cowork can search the web"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview TCM: mode applyOnce, resource microsoft.copilot.allowwebsearch, value \"0\" enables, \"1\" disables. Tenant-level policies only. Needs AI Administrator. Global service only, not GCC High. See notes below."
  - governs: "Whether Cowork can use Microsoft Edge on users' devices"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View All > Cowork settings > Allow browser access"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-local-browser"
    api: null
    note: "The page says this is disabled by default and applies to worldwide and GCC tenants, but also names a default-off Local Browsing Allowed policy for GCC. See Open questions."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-09-18T22:00:04"
changes:
  - date: "2026-11-20"
    note: "New briefing: Cowork for GCC and GCC High, with the GCC page's access, licensing, approval and web search details and the roadmap and Learn differences."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the spending-policy path, added the preview Graph automation for the web search policy, and removed three checklist steps that had no controls row."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 77
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "724b95530907a8af115619753671b2cb"
---

## What's changing

Copilot Cowork, the Microsoft 365 Copilot capability that carries out tasks on a user's behalf, is on the roadmap for GCC and GCC High. The roadmap item states that Cowork "automatically grounds the work in your emails, meetings, messages, files, and data". It is In development, with a target of November CY2026, release phase General Availability, and platforms Android, Desktop, iOS, Mac and Web.

Microsoft Learn already has a page for GCC that says "Copilot Cowork is available in Government Community Cloud (GCC)". The roadmap status and that page differ, and this briefing reports both. The same page says it covers GCC only, and Microsoft Learn has no Cowork page for GCC High at the time of writing (November 2026). Treat what follows as the GCC description, and confirm it for GCC High when Microsoft publishes one.

The GCC page lists these differences from the worldwide experience: GPT-6.1 models hosted in Azure Government with Anthropic models not available; every action needs the user's explicit approval, with Always allow as an option for users; web search is off by default; event-driven tasks support mail and calendar triggers only; App Builder and functional plugins are listed as not currently available; and device access is listed as web. The Cowork overview adds that GCC access includes the Microsoft 365 Copilot web app and mobile progress checks and approvals, which is narrower than the five platforms on the roadmap item.

## Why it matters

Nothing reaches users until an administrator acts. Microsoft's GCC page says tenant admins turn Cowork on by adding users to a spending policy that includes Cowork, and the worldwide access page says a user with no policy that selects Cowork has no access. The page also says Cowork honours existing permissions, so what it can reach for a user is set by your current sharing and data access. Expect any oversharing in mail, Teams and SharePoint to become visible once people ask Cowork to gather material.

The decisions land on three teams: the service owner (who is in the pilot group), finance (credits are consumed on usage) and compliance (Microsoft's page says Purview features are not yet supported in GCC). If nobody acts, the sources describe no change to your tenant.

## Risk assessment

**Data exposure**
- Cowork grounds its work in a user's emails, meetings, messages, files and data (roadmap description), and Microsoft's GCC page says it honours existing permissions. Oversharing on sites and mailboxes the user can reach becomes material Cowork can draw on; fix it before opening access.
- Microsoft's admin page says Cowork runs within the GCC boundary in GCC, and that Purview features are not yet supported there. Confirm with your compliance team that this is acceptable before the pilot.

**Security & identity**
- The GCC troubleshooting table refers to a Cowork service principal and consented permissions. Have an identity administrator review that service principal and the permissions it requests before consent.
- Web search is off by default in government clouds and needs the Copilot web search policy in the cloud policy service. Leave it off until the data-handling review is done.

**Autonomy & actions**
- Cowork can send mail, post in Teams, schedule meetings and create files. The GCC page says each needs explicit approval, and that Always allow is an option for users, so a user can choose to skip later approval prompts.
- Event-driven tasks in GCC support mail and calendar triggers; the worldwide admin page says automated tasks run as the user who created them.

**Change & support**
- Anthropic models, App Builder and functional plugins are not available in GCC per Microsoft's page. Users who have seen worldwide demos will ask for them; set expectations in your communication.
- The roadmap lists Android, Desktop, iOS, Mac and Web, but the Learn GCC pages describe web access and mobile progress checks and approvals. Expect support questions about the desktop app.

## Cost and licensing

**Licence.** Microsoft's GCC page says Cowork requires a Microsoft 365 GCC Copilot license, with no separate Cowork license.

**Meter.** It is billed based on usage. The page says government tenants can buy prepaid Copilot Credits with no Azure subscription required, or connect an Azure subscription and choose pay-as-you-go or pre-purchase packs. Credits are consumed through spending policies in the Microsoft 365 admin center (Copilot > Cost Management > Configuration).

**Limits.** The worldwide spending-policy pages say a policy's monthly limit ends a user's access to the selected services for the rest of the month, and that enforcement is evaluated asynchronously, so a user might start tasks after the limit is reached. The same pages say a low limit does not remove access: removing the user from every policy that selects Cowork does. The GCC page says the worldwide spending-policy procedure is not government setup guidance, so confirm these behaviours in your tenant.

**Not yet published.** A credit rate for Cowork tasks in GCC is not given on the GCC page.

## Scope

**Clouds and platforms.** The roadmap item lists GCC and GCC High, and platforms Android, Desktop, iOS, Mac and Web. Microsoft Learn's Cowork page covers GCC only and lists Web; the overview adds mobile progress checks and approvals.

**Users and licences.** Users need a Microsoft 365 GCC Copilot license and must be in the scope of a spending policy that includes Cowork.

**Roles.** The Graph reference for creating a spending policy states it requires the Billing Administrator or Global Administrator directory role. The Cloud Policy service page lists Office Apps Administrator (recommended), Security Administrator and Global Administrator for the web search policy.

**Rollout.** Microsoft's GCC page tells admins to check Message Center for availability information for their tenant. No Message Center post was supplied with the roadmap record.

## Governance guidance

### Before rollout
- Check Message Center and the Learn GCC page for availability in your tenant, and confirm whether your tenant is GCC or GCC High; the Cowork page covers GCC only.
- Confirm that pilot users hold a Microsoft 365 GCC Copilot licence, and decide with finance whether the billing method is prepaid Copilot Credits or an Azure subscription.
- Ask compliance to accept or reject running Cowork while Purview features are not yet supported in GCC.

### At rollout
- Create a spending policy scoped to a pilot security group that selects Cowork (controls table, row 1), and keep users outside it.
- Leave the Copilot web search policy unconfigured unless you have approved web search (row 2), and leave browser access off unless approved (row 3).
- Brief the pilot group that every action needs their approval and that Always allow is a user choice.

### After rollout
- Re-read the Learn GCC page for changes to models, triggers, App Builder and platforms before widening access.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use Cowork (spending policy that selects Cowork)</strong><br><small>Group</small><br><small class="controls__note">Access grant for Cowork. The reference's example uses another serviceId and gives no Cowork value; the body needs serviceId and state. Beta API. The GCC page says worldwide spending-policy steps aren't government setup guidance.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Policy scope › Identity › Specific groups › group › Select agents and services › Cowork <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Cowork can search the web</strong><br><small>Tenant</small><br><small class="controls__note">Preview TCM: mode applyOnce, resource microsoft.copilot.allowwebsearch, value &quot;0&quot; enables, &quot;1&quot; disables. Tenant-level policies only. Needs AI Administrator. Global service only, not GCC High. See notes below.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Cowork can use Microsoft Edge on users' devices</strong><br><small>Tenant</small><br><small class="controls__note">The page says this is disabled by default and applies to worldwide and GCC tenants, but also names a default-off Local Browsing Allowed policy for GCC. See Open questions.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View All › Cowork settings › Allow browser access <a href="https://learn.microsoft.com/copilot/cowork/cowork-local-browser" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The spending policy is the access control: Microsoft's worldwide access page says any user in the scope of a policy that selects Cowork can use it, even with a low credit limit, and that removing access means removing the user from every such policy. The GCC page says the worldwide procedure is not government setup guidance, so verify in a pilot.

The Graph reference for creating a spending policy states that it requires the Billing Administrator or Global Administrator directory role. The web search policy lives in the Cloud Policy service, not in the Microsoft 365 admin center; GCC High admins reach the Microsoft 365 Apps admin center at config.office365.us. In the Apps admin center, select Allow web search in Copilot on the Configure Settings page; the setting is off by default in government clouds.

The web search automation is the preview Tenant Configuration Management (TCM) API in Microsoft Graph beta. A monitor in applyOnce mode with a microsoft.copilot.allowwebsearch resource (resourceVersion 1) sets properties.value to "0" to enable web search or "1" to disable it in Microsoft 365 Copilot and Copilot Chat. Microsoft states that TCM supports these Copilot settings only in tenant-level policies, so the setting must not be configured in a group-level policy. Creating an applyOnce monitor supports delegated permissions only: the signed-in user needs the AI Administrator role and the TCM service principal needs delegated CopilotPolicySettings.ReadWrite. Microsoft states that TCM is available only in the global service, not in national clouds. Its national cloud page says GCC uses the worldwide Graph endpoint and GCC High uses graph.microsoft.us, so this call is not available to GCC High tenants.

The browser-use page gives a path and a policy name for GCC that do not obviously match; see Open questions.

## Open questions

- When will Cowork reach GCC High tenants, and will Microsoft publish a GCC High page? Watch Message Center and the Learn GCC page; the roadmap target is November CY2026.
- Does the **Auto-apply new services** setting, which Microsoft's spending policy page says is selected by default, add Cowork to existing GCC spending policies automatically? The GCC page does not say.
- Which roadmap platforms (Android, Desktop, iOS, Mac) will be available in GCC beyond web and mobile progress checks and approvals?
- When will Purview features, which Microsoft says are not yet supported for Cowork in GCC, be available, and will Cowork activity be auditable in the meantime?
- For browser use in GCC, is the control the **Allow browser access** setting under Cowork settings or the Local Browsing Allowed policy that the same page names?

<!-- rationale
risk: Medium. Cowork acts on mail, calendar, Teams and files, and Microsoft's GCC page says every action needs explicit approval, with Always allow as a user option. Purview features are not yet supported in GCC.
cost: Variable. Cowork needs a Microsoft 365 GCC Copilot licence and is billed on usage, so Copilot Credits consumption is the meter. The GCC page gives no Cowork credit rate.
impact: Low. Microsoft's GCC page has admins turn Cowork on by adding users to a spending policy, so the people who notice are the groups an admin chooses.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls / admin-path: The web-search policy route in the Apps admin center ends at Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings. | Found: Under Customization, select Policy Management. ... On the Policy configurations page, select Create. ... On the Configure Settings page, select the policies that you want to include in the policy configuration. | Fix: Extend controls[1].ui.path and the rendered path to 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot'. The existing route reaches the correct page; the final policy name is documented at https://learn.microsoft.com/copilot/plan/manage-public-web-access, already cited. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] controls[1].note; Governance controls / availability: TCM is available only in the global service, so the web-search applyOnce call is unavailable to GCC High. | Found: These capabilities are available in preview through Microsoft Graph beta. TCM is available only in the global service, not in national clouds. | Fix: Replace 'Global service only, not GCC High' in controls[1].note with 'Government-cloud availability differs between Microsoft pages; see below.' Replace the categorical global-only and GCC High exclusion sentences with: 'The remediation/applyOnce support page says TCM is available only in the global service, but the create-configurationMonitor reference lists US Government L4 and L5 as supported. Confirm web-search applyOnce availability for GCC High before relying on this API.' Both https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources and https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta are already cited. | Source: https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources
- [supported, minor] controls[2].ui; Governance controls / admin-path: The browser article gives Microsoft 365 admin center > Copilot > Settings > View All > Cowork settings > Allow browser access. | Found: From the menu, select Copilot > Settings > View All > Cowork settings. ... Under Allow browser access, select Allow Cowork to use the Microsoft Edge browser to perform tasks on behalf of users. | Fix: Extend controls[2].ui.path and the rendered path to 'Copilot > Settings > View All > Cowork settings > Allow browser access > Allow Cowork to use the Microsoft Edge browser to perform tasks on behalf of users', as given at https://learn.microsoft.com/copilot/cowork/cowork-local-browser#admin-control. Keep the existing warning about conflicting GCC guidance. | Source: https://learn.microsoft.com/copilot/cowork/cowork-local-browser
-->
