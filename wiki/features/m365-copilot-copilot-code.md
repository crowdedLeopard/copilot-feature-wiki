---
title: "Microsoft Copilot: Copilot Code builds software and apps from plain-language descriptions"
slug: "m365-copilot-copilot-code"
roadmapId: 571887
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Code is a Code tab in Microsoft Copilot that builds software from plain-language prompts and can publish apps to Copilot Managed Runtime. Microsoft Learn says it needs a spending policy and lists it as a Frontier preview."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "A Microsoft Copilot licence is required for work accounts, and Copilot Code usage is billed in Copilot Credits through a spending policy. Running a published app needs Power Apps Premium or a Copilot Managed Runtime spending policy."
audiences: ["m365-admin","security","finops","maker"]
tags: ["copilot","copilot-code","coding-agents","github","copilot-credits","spending-policies","usage-based-billing","work-iq","frontier-program","copilot-managed-runtime"]
sources:
  - title: "Microsoft 365 Roadmap 571887"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571887"
    kind: "roadmap"
  - title: "Copilot Code (Frontier)"
    url: "https://learn.microsoft.com/copilot/code/"
    kind: "learn"
  - title: "Use Copilot Code (Frontier)"
    url: "https://learn.microsoft.com/copilot/code/use-code"
    kind: "learn"
  - title: "Work with GitHub in Copilot Code (Frontier)"
    url: "https://learn.microsoft.com/copilot/code/code-github"
    kind: "learn"
  - title: "Manage Copilot Code for your organization (Frontier)"
    url: "https://learn.microsoft.com/copilot/code/code-admin"
    kind: "learn"
  - title: "Sandbox in Copilot Code (Frontier)"
    url: "https://learn.microsoft.com/copilot/code/code-secure-local-execution"
    kind: "learn"
  - title: "Copilot Code (Frontier) requirements"
    url: "https://learn.microsoft.com/copilot/code/code-requirements"
    kind: "learn"
  - title: "Microsoft Copilot Managed Runtime overview for admins"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/apps/"
    kind: "learn"
  - title: "Manage licensing and Copilot Credits for apps on Copilot Managed Runtime"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/apps/licensing-credits"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Import custom ADMX and ADML administrative templates into Microsoft Intune (public preview)"
    url: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/import-custom-admx-templates"
    kind: "learn"
  - title: "Usage-Based Billing and Cost Management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "What is Microsoft Copilot?"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
videos: []
related: ["copilot-credits","work-iq","managed-environments","mcp","copilot-studio-cost-management-m365-admin-center"]
controls:
  - governs: "Who can use and build with Copilot Code, and their monthly spend limit"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Configuration > + Add spending policy > Identity > Specific groups > Select agents and services > Copilot Code > Set limits and alerts"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Beta API. Body sets periodLimit, perUserLimit, serviceSettings; displayName and @odata.type required. Created disabled. Example shows serviceId cowork and workIQ, not Copilot Code. Needs Billing Administrator or Global Administrator."
  - governs: "Whether the local sandbox is required and what outbound network access it allows"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune (Microsoft Copilot ADMX templates)"
      path: "Devices > Manage devices > Configuration > Create > New policy > Windows 10 and later > Templates > Imported Administrative templates (Preview) > Create > Configuration settings > Microsoft Copilot > Code Tab"
      docs: "https://learn.microsoft.com/copilot/code/code-admin"
    api:
      kind: "other"
      call: "macOS: set CopilotDeviceCodeTabSandboxEnabled and CopilotDeviceCodeTabOutboundNetworkAccessMode in domain com.microsoft.Copilot"
      docs: "https://learn.microsoft.com/copilot/code/code-admin"
    note: "Import the Microsoft Copilot ADMX templates first. Device policy for local sessions only; it does not affect Copilot Code cloud agent sessions."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: Copilot Code, documented on Learn as a Frontier preview that needs a spending policy, with the roadmap's In development status and December CY2026 target."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: default state is now Not stated, because spending policies auto-apply new services by default; added the Premium licence statement and trimmed checklist steps that had no controls-table row."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 108 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 104 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the admin paths for the spending policy wizard and the Intune sandbox policies, shortened the Graph call, and narrowed the sandbox default to managed devices."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 94 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 94
  confirmed: 94
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "86d63a1c6f92dcaf4b0d1a427277b541"
---

## What's changing

Copilot Code is a **Code** tab in Microsoft Copilot where a person describes the software they want and Copilot Code builds it, shows a live preview and iterates with them. Microsoft Learn lists dashboards, internal tools, static websites, data transforms and scripts as examples. With the user's permission it can use their Microsoft 365 documents, emails, meetings and calendar as context, which the roadmap item describes as grounding by Work IQ (see [Work IQ](/concepts/work-iq/)).

Apps can be published to Copilot Managed Runtime and shared with people in the organisation. Learn says building does not publish an app: publishing is a separate step that happens only when the user asks for it. Connecting GitHub is optional; once connected, Copilot Code can create branches and commits, push changes and open draft pull requests.

The roadmap item is "In development", with a preview target of October CY2026 and a General Availability target of December CY2026, for Worldwide (Standard Multi-Tenant) on Android, Desktop, iOS, Mac and Web. Microsoft Learn already documents the feature, and at the time of writing (November 2026) its pages mark Copilot Code as a preview feature that requires membership of the Frontier preview programme. Treat the December date as a target, not as availability.

## Why it matters

Copilot Code puts a coding agent in the hands of people who do not usually build software, and it can reach Microsoft 365 content, the local file system, the network and GitHub. The spend is also new: Learn states that Copilot Code is a usage-based billing feature that requires a spending policy, so the first decision is who goes in that policy and with what limit.

Microsoft Learn says the feature needs a Microsoft Copilot licence with the Code tab enabled by the organisation, and a spending policy. A spending policy is required, but that does not necessarily mean a new Copilot Code opt-in: existing spending policies have Auto-apply new services selected by default and can automatically include Code. Review existing policy coverage before assuming users cannot build. Microsoft has not stated whether the Code tab itself is on or off in a new tenant.

## Risk assessment

**Data exposure**

- With the user's permission, Copilot Code uses Microsoft 365 documents, emails, meetings and calendar as context. The policy setting "Organizational Data in Copilot Code" is documented as on for cloud sessions and off for local sessions by default.
- Sharing a published app does not share its underlying data: people see only the data they already have permission to access in connected sources, and may be asked to approve a connection. Apps on Copilot Managed Runtime inherit the default environment group settings for connectors, sharing and external content.

**Security & identity**

- A Microsoft Entra work account is the required sign-in. The GitHub connection policy is documented as off by default, and Learn says the administrator must enable GitHub in Copilot Code. Once on, code can be pushed to GitHub, so settle which GitHub services and accounts are allowed first (the "Allowed Github Connections list" defaults to Both).

**Autonomy & actions**

- By default Copilot Code asks permission before network calls, use of extensions and MCP, shell commands, and file access outside folders already in use. The "Auto-approve setting" is documented as on by default and lets users approve actions without confirming each one, and **Always allow** stays on until the user turns it off.
- For local sessions on managed devices, the sandbox is required if the sandbox policy is not configured. It does not apply to cloud agent sessions, and it does not restrict an app a user runs outside a Copilot Code session.

**Change & support**

- Preview behaviour can change before general availability. Local sandbox support needs Windows 11 24H2 or later or a Mac; Windows 10 is not supported, and users on unsupported devices can run projects in the cloud.
- A published app is not usable by everyone it is shared with: each person running it needs Power Apps Premium or coverage in a Copilot Managed Runtime spending policy, so expect support requests from users who open a shared app and cannot run it.

## Cost and licensing

**Licence.** For a work account, Microsoft Learn lists a Microsoft Copilot licence and the Code tab enabled by your organisation as the requirement ([Copilot Code requirements](https://learn.microsoft.com/copilot/code/code-requirements)). The Copilot Managed Runtime licensing page says the licence does not include Cowork or Code usage, which is billed in Copilot Credits. The [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview#copilot-features-in-microsoft-365-apps) is more specific, stating that usage-based billing capabilities require a Microsoft 365 Copilot (Premium) licence.

**Meter.** Copilot Code is a usage-based billing feature and requires a spending policy. You create it in the Microsoft 365 admin center under Copilot > Cost management > Configuration > + Add spending policy, choose Identity as the scope, select Copilot Code under Select agents and services, and can set a per-user limit under Set limits and alerts. Spending policies are limits, not purchases: a policy does not reserve credits, and you pay for what is consumed. See [Copilot Credits](/concepts/copilot-credits/). The same page says building is the most credit-intensive part of the app lifecycle and advises sizing build limits separately from run limits.

**Running published apps.** Running an app requires Power Apps Premium or Copilot Credits through a spending policy that includes Copilot Managed Runtime. The licensing page gives 0.1 Copilot Credits per API call the app makes, with specialised services such as Work IQ APIs charged separately at their own rates.

**Not yet published.** A credit rate for building with Copilot Code is not on the pages read at the time of writing (November 2026), and nothing there says what the roadmap's General Availability date changes about licensing.

## Scope

**Users and licences.** Work accounts need a Microsoft Copilot licence with the Code tab enabled by the organisation. Learn also documents personal Microsoft accounts on a supported Microsoft Copilot consumer plan. Learn currently requires Frontier preview membership.

**Platforms.** The record lists Android, Desktop, iOS, Mac and Web. Learn lists Windows (x64 and Arm) and Mac in the Microsoft Copilot desktop app, the web at https://m365.cloud.microsoft for cloud development, and iOS, iPadOS and Android for cloud sessions only; local sessions are not available on mobile.

**Clouds.** The record lists Worldwide (Standard Multi-Tenant) only.

**Apps.** Publishing to Copilot Managed Runtime is documented as a preview feature. Each Managed Runtime app appears in the Microsoft 365 admin center.

## Governance guidance

### Before rollout

- Create a spending policy for Copilot Code that covers only a pilot group and sets a per-user limit (controls table, row 1); Learn says only users included in one can build apps.

### At rollout

- Set the sandbox policies on Windows through the Copilot policy templates or on macOS through the com.microsoft.Copilot domain (controls table, row 2).
- Tell pilot makers that publishing is a separate step and that each person running a shared app needs Power Apps Premium or Managed Runtime spending policy coverage.
- Brief makers on the permission prompts and on **Always allow**, which stays on until disabled.

### After rollout

- Review consumption against the per-user limit in Copilot > Cost management and size build limits separately from run limits.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use and build with Copilot Code, and their monthly spend limit</strong><br><small>User</small><br><small class="controls__note">Beta API. Body sets periodLimit, perUserLimit, serviceSettings; displayName and @odata.type required. Created disabled. Example shows serviceId cowork and workIQ, not Copilot Code. Needs Billing Administrator or Global Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Configuration › + Add spending policy › Identity › Specific groups › Select agents and services › Copilot Code › Set limits and alerts <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the local sandbox is required and what outbound network access it allows</strong><br><small>Tenant</small><br><small class="controls__note">Import the Microsoft Copilot ADMX templates first. Device policy for local sessions only; it does not affect Copilot Code cloud agent sessions.</small></td><td data-label="Admin UI"><strong>Microsoft Intune (Microsoft Copilot ADMX templates)</strong><br>Devices › Manage devices › Configuration › Create › New policy › Windows 10 and later › Templates › Imported Administrative templates (Preview) › Create › Configuration settings › Microsoft Copilot › Code Tab <a href="https://learn.microsoft.com/copilot/code/code-admin" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>macOS: set CopilotDeviceCodeTabSandboxEnabled and CopilotDeviceCodeTabOutboundNetworkAccessMode in domain com.microsoft.Copilot</code> <a href="https://learn.microsoft.com/copilot/code/code-admin" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn names the Copilot Code policy settings (Pre-install Copilot Code components, Auto-approve setting, Copilot Code execution location, GitHub connection, Allowed Github Connections list, Organizational Data in Copilot Code) and their defaults, but at the time of writing (November 2026) it gives no admin centre path or API for them, so they are not in the table. Only the Windows and macOS device policies for the sandbox and preinstall have a documented location.

On Windows, the Microsoft Copilot ADMX and ADML policy templates must first be imported into Intune before the Code Tab policies appear. Creating a spending policy through Microsoft Graph also needs the Billing Administrator or Global Administrator directory role. The sandbox policies do not affect cloud agent sessions, so cloud sessions are limited through the spending policy and the execution location setting instead.

Copilot Code is a Frontier preview feature, so the Copilot Frontier setting (Copilot > Settings > View all > Copilot Frontier in the Microsoft 365 admin center) also decides which users or groups can access eligible preview features. Learn says audit logs exist, but the page read gives no location or event names.

## Open questions

- Where in the Microsoft 365 admin center, or by which API, are the Copilot Code policy settings such as GitHub connection and Organizational Data in Copilot Code configured? Watch the [Manage Copilot Code for your organization](https://learn.microsoft.com/copilot/code/code-admin) page.
- Is the Code tab on or off by default in a new tenant, and what changes for it at General Availability, targeted for December CY2026 on the roadmap?
- What credit rate applies to building with Copilot Code, and can an alert or cap act on build usage separately from running apps?
- Where are the Copilot Code audit logs read, and which event names do they use?
- Will the Frontier requirement and the preview status of publishing to Copilot Managed Runtime end when the roadmap item reaches General Availability?

<!-- rationale
risk: Medium. Copilot Code can run commands, use Microsoft 365 content as context and push to GitHub, but Microsoft Learn documents consent prompts, a sandbox for local sessions and admin policies over each.
cost: Variable. Usage is metered in Copilot Credits through a spending policy, on top of the Microsoft Copilot licence; a credit rate for building with Copilot Code is not yet published.
impact: Medium. Makers and developers who are included notice it; Microsoft Learn says only users in a spending policy for Copilot Code can build apps, so other users are not reached until included.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Cost and licensing / admin-path: The printed spending-policy wizard path reaches group scope, service selection and the limits section. | Found: Select the Configuration tab and then select + Add spending policy. ... Define the policy scope ... Create and name the policy and then choose Identity as the scope. | Fix: Insert the documented heading after '+ Add spending policy': 'Copilot > Cost management > Configuration > + Add spending policy > Define the policy scope > Identity > Specific groups > Select agents and services > Copilot Code > Set limits and alerts'. The remaining labels are supported by this page and the already-cited https://learn.microsoft.com/microsoft-365/admin/manage/apps/licensing-credits. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
-->
