---
title: "Microsoft 365 Copilot: assign Anthropic model access to specific users and groups"
slug: "m365-copilot-copilot-extensibility-it-admins-will-be-able-to-enable-anthropic-models-by-sp"
roadmapId: 557371
topic: "m365-copilot"
products: ["Microsoft 365","Microsoft Copilot (Microsoft 365)"]
summary: "Admins can limit Anthropic's Claude models in Microsoft Copilot and Copilot Studio to chosen users or Entra security groups. Launched; in most commercial regions Claude is on by default, so review who can use it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn's requirements page says Microsoft Copilot needs a Microsoft Copilot licence plus a qualifying prerequisite licence. The Anthropic pages name no separate licence or price for Claude models."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["anthropic","m365-copilot","copilot-studio","admin-controls","m365-admin-center","data-governance"]
sources:
  - title: "Assign AI provider access to users and groups"
    url: "https://learn.microsoft.com/copilot/implement/copilot-ai-provider-user-sec-group-access"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Allow external language models for generative responses"
    url: "https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "copilotAdminSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadminsetting"
    kind: "learn"
  - title: "Known issues for Microsoft 365 Copilot extensibility"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 557371"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557371"
    kind: "roadmap"
videos: []
related: ["m365-copilot-chat-usage-based-billing-models-model-selector","m365-copilot-when-using-agent-mode-in-word-you-will-be-able-to-manually-select-which-model"]
controls:
  - governs: "Which users and security groups can use Anthropic models in Copilot and Copilot Studio"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "AI Administrator or Global Administrator role. Assignment is per provider, not per model, up to 999 combined user and group assignments."
  - governs: "Whether Anthropic is available as a Microsoft subprocessor at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > User access > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Disable Anthropic as a Microsoft subprocessor"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "For regions where Anthropic is on by default. Users then have no option to use Claude models. Copilot Studio and Power Platform have further settings in the Power Platform admin center."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2026-04-27T23:15:13"
changes:
  - date: "2026-11-24"
    note: "New briefing: Learn's user and group assignment for Anthropic models, its regional defaults and the December 9, 2026 option changes."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: default state now unknown for the assignment control, Anthropic's longer retention for flagged content added, the Agent Blocked error documented, December 9, 2026 changes restated, and the group-membership checklist step removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: noted that environment groups need Managed Environments and removed the unsupported claim about which models tenants first assessed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "702dcf5815ed7593c792a817b237761b"
---

## What's changing

Administrators can decide which users and Microsoft Entra ID security groups may use Anthropic's Claude models in Microsoft Copilot and Copilot Studio. Microsoft Learn documents this on its page "Assign AI provider access to users and groups": assignments are made in the Microsoft 365 admin center, and individual users, security groups and nested security groups can be assigned, up to 999 combined user and group assignments per AI provider.

The assignment applies to the AI provider, not to an individual model. When access is restricted this way, Learn says only the specified users or group members can use Copilot features that rely on that provider. Users who are not assigned might be unable to use features that depend on the provider, or see agent behaviour change where a model provider is required. Learn lists the enforcement points as Microsoft Copilot apps, custom agents built in Copilot Studio and experiences managed through the Power Platform admin center.

The roadmap item describes admin controls for Anthropic as a model provider for specific users and groups. It is marked Launched, with a target of April CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) and platform Web. The roadmap record links to no Learn page; the control above is the one Learn documents that matches the description.

## Why it matters

Claude models are a different processor from the OpenAI models. Learn says Microsoft enables Claude models on by default for most customers in commercial cloud (excluding EU/EFTA and UK), and that Claude models in Microsoft offerings are currently excluded from the EU Data Boundary. If nobody acts in those regions, Claude models are therefore already available to users, and the user and group control is how a service owner narrows that to an approved population. Microsoft documents these regional defaults for Claude model availability, but does not state the new assignment control's default enforcement state.

In the EU, EFTA and UK, Learn's general default is the reverse: Claude models are disabled by default. The separate apps-only article says its setting is enabled by default for EU/EFTA/UK tenants created after March 25, 2026, so check the tenant's actual selection. For EU/EFTA/UK tenants, All users for Microsoft 365 apps only is removed on December 9, 2026; that selection and no previous selection change to All users. Other selections, including No users, don't change. A tenant that has never chosen an option should check it now rather than discover the new value later.

## Risk assessment

**Data exposure**
- Where Anthropic operates as a Microsoft subprocessor, Learn says the Microsoft Product Terms and Data Protection Addendum apply. Models labelled "Anthropic models with Data Retention" are different: Learn says Anthropic stores most inputs and outputs for up to 30 days, under Anthropic's own terms. If Anthropic's trust and safety classifiers identify potential Usage Policy violations, content may be retained for up to two years and trust and safety classification scores for up to seven years. Those models are off for everyone until the tenant admin opts in and chooses which users or groups can access them.
- Learn says Claude models in Microsoft offerings are currently excluded from the EU Data Boundary. It also says Claude models are coming into the EU Data Boundary starting in December 2026. Check which statement applies to your tenant at the time you decide.

**Security & identity**
- Access is tied to Microsoft Entra ID users and security groups. Whoever manages those groups therefore also decides who can use Claude, so review who can edit membership of any group you assign.
- Changing the setting needs the AI Administrator or Global Administrator role.

**Autonomy & actions**
- The assignment is enforced for custom agents built in Copilot Studio as well as Copilot apps. An agent that relies on Anthropic can behave differently for a user who is not assigned, so test agents with an unassigned account.

**Change & support**
- Assignments apply to the provider, not the model, so you cannot allow one Claude model and block another with this control.
- Expect support questions from users left out: Learn says they might be unable to use features that depend on the provider.

## Cost and licensing

Learn's "Microsoft Copilot requirements" page says users need a Microsoft Copilot licence and a qualifying prerequisite licence for Microsoft Copilot, and that Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. The Anthropic pages read for this briefing ("Claude models from Anthropic in Microsoft Online Services" and "Assign AI provider access to users and groups") describe terms and controls and name no separate licence, price or meter for Claude models at the time of writing (November 2026).

The indirect cost is admin time: choosing or building security groups, setting the assignment and answering questions from users left out. A separate admin step is needed for Copilot Studio and Power Platform: Learn says enabling a provider in Microsoft 365 does not automatically make its models available in Power Platform.

## Scope

The assignment covers individual users, Microsoft Entra ID security groups and nested security groups, up to 999 combined assignments per AI provider. It is enforced across the Microsoft 365 admin center, the Power Platform admin center and Copilot Studio, per Learn.

The roadmap lists Worldwide (Standard Multi-Tenant) only, with platform Web. Learn's default differs by region: on for most commercial customers outside the EU, EFTA and UK, and disabled by default in those regions. The separate apps-only article says its setting is enabled by default for EU/EFTA/UK tenants created after March 25, 2026, so check the tenant's actual selection. Changing the setting requires the AI Administrator or Global Administrator role.

## Governance guidance

### Before rollout
- Check the current **AI providers operating as Microsoft subprocessors** setting for Anthropic in the Microsoft 365 admin center (first control in the table), and note whether your tenant is in a region where it is on or off by default.
- Decide whether Anthropic should be on for everyone, off, or limited to named users and groups, and agree it with security and compliance given the EU Data Boundary statements above.
- Build or choose Microsoft Entra ID security groups for the approved users, keeping within 999 combined user and group assignments.
- Confirm that the person making the change holds the AI Administrator or Global Administrator role.

### At rollout
- Select the approved users or groups under **Choose who can access Anthropic models for Copilot and generative AI experiences** and save.
- Tell unassigned users that Copilot features depending on Anthropic might be unavailable to them.
- Test an agent that uses Claude with an assigned and an unassigned account.

### After rollout
- Re-check the setting before December 9, 2026, when Learn says the All users for Microsoft 365 apps only option is removed for EU/EFTA/UK tenants.
- Watch Message center for Anthropic changes, including any move of Claude models into the EU Data Boundary.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and security groups can use Anthropic models in Copilot and Copilot Studio</strong><br><small>Group</small><br><small class="controls__note">AI Administrator or Global Administrator role. Assignment is per provider, not per model, up to 999 combined user and group assignments.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic is available as a Microsoft subprocessor at all</strong><br><small>Tenant</small><br><small class="controls__note">For regions where Anthropic is on by default. Users then have no option to use Claude models. Copilot Studio and Power Platform have further settings in the Power Platform admin center.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › User access › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Disable Anthropic as a Microsoft subprocessor <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are set by the AI Administrator or Global Administrator role. The assignment row limits who can use Anthropic; the disable row removes the Claude option for everyone, and Learn says you can enable Claude models again later.

Copilot Studio and Power Platform have a second layer. After a provider is enabled in Microsoft 365, a Power Platform system admin allows its models in an environment (Power Platform admin center > Manage > Environments > environment > Settings > Product > Features > applicable model provider setting (On or Off)) or through environment group rules, per the Power Platform page "Allow external language models for generative responses". For the environment-group route, environments in the group must be Managed Environments. Learn says the Microsoft 365 setting is the first step and does not by itself make models available there.

Anthropic models with Data Retention have their own opt-in in the Microsoft 365 admin center, off for all scenarios until the tenant admin enables them and chooses which users or groups may use them.

## Open questions

- Is there a Microsoft Graph or PowerShell call for assigning Anthropic access to users and groups? Microsoft Learn documents none at the time of writing; watch the Microsoft 365 Copilot admin settings API reference.
- Does Microsoft publish a licence or price specific to Claude models in Copilot? None is documented on the pages read; watch the Microsoft Copilot requirements page and Message center.
- Does the roadmap item correspond exactly to the Specific users and groups option? The record has no more-info link, so watch the roadmap entry and the Learn page "Assign AI provider access to users and groups".
- How will the December 9, 2026 option changes, documented on the EU, EFTA and UK page, apply to tenants outside those regions? Watch the Message center post Learn names.
- What do unassigned users see across other Copilot experiences? The known-issues page documents an "Agent Blocked" error for Copilot Studio agents added to Microsoft 365 Copilot or Teams.

<!-- rationale
risk: Medium. Learn says Claude models are on by default for most commercial customers and sit outside the EU Data Boundary; Learn does not state the default for the new user and group assignment control.
cost: Low. The Learn pages read name no separate licence, price or meter for Anthropic models; the known cost is admin time and the Copilot licence users already need.
impact: Medium. Only users left out of an assignment notice, because Copilot features that depend on Anthropic may be unavailable to them or behave differently; admins make the change.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Claude models use a different processor from OpenAI models. | Found: Anthropic is a subprocessor for Microsoft Copilot. ... OpenAI is a subprocessor for Microsoft Copilot. | Fix: Add https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-application-card to sources for the sentence identifying the different processors. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-application-card
-->
