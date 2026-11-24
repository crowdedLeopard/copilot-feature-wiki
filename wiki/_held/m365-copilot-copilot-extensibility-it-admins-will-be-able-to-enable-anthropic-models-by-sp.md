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
defaultState: "on"
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
updated: "2026-11-24"
roadmapModified: "2026-04-27T23:15:13"
changes:
  - date: "2026-11-24"
    note: "New briefing: Learn's user and group assignment for Anthropic models, its regional defaults and the December 9, 2026 option changes."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 48
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "932b667e11219da271b359b8d62ac1d2"
---

## What's changing

Administrators can decide which users and Microsoft Entra ID security groups may use Anthropic's Claude models in Microsoft Copilot and Copilot Studio. Microsoft Learn documents this on its page "Assign AI provider access to users and groups": assignments are made in the Microsoft 365 admin center, and individual users, security groups and nested security groups can be assigned, up to 999 combined user and group assignments per AI provider.

The assignment applies to the AI provider, not to an individual model. When access is restricted this way, Learn says only the specified users or group members can use Copilot features that rely on that provider. Users who are not assigned might be unable to use features that depend on the provider, or see agent behaviour change where a model provider is required. Learn lists the enforcement points as Microsoft Copilot apps, custom agents built in Copilot Studio and experiences managed through the Power Platform admin center.

The roadmap item describes admin controls for Anthropic as a model provider for specific users and groups. It is marked Launched, with a target of April CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) and platform Web. The roadmap record links to no Learn page; the control above is the one Learn documents that matches the description.

## Why it matters

Claude models are a different processor from the OpenAI models many tenants first assessed. Learn says Microsoft enables Claude models on by default for most customers in commercial cloud (excluding EU/EFTA and UK), and that Claude models in Microsoft offerings are currently excluded from the EU Data Boundary. If nobody acts in those regions, Claude models are therefore already available to users, and the user and group control is how a service owner narrows that to an approved population.

In the EU, EFTA and UK the default is the reverse: Claude models are disabled by default. Learn also says that from December 9, 2026 the setting's options are renamed and some selections change, so a tenant that has never chosen an option should check it now rather than discover the new value later.

## Risk assessment

**Data exposure**
- Where Anthropic operates as a Microsoft subprocessor, Learn says the Microsoft Product Terms and Data Protection Addendum apply. Models labelled "Anthropic models with Data Retention" are different: Learn says Anthropic stores most inputs and outputs for up to 30 days, under Anthropic's own terms. Those models are off for everyone until the tenant admin opts in and chooses which users or groups can access them.
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

The roadmap lists Worldwide (Standard Multi-Tenant) only, with platform Web. Learn's default differs by region: on for most commercial customers outside the EU, EFTA and UK, and disabled by default in those regions. Changing the setting requires the AI Administrator or Global Administrator role.

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
- Review group membership on a schedule, because group changes change who can use Claude.
- Re-check the setting before December 9, 2026, when Learn says option names and some selections change.
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

Copilot Studio and Power Platform have a second layer. After a provider is enabled in Microsoft 365, a Power Platform system admin allows its models in an environment (Power Platform admin center > Manage > Environments > environment > Settings > Product > Features) or through environment group rules, per the Power Platform page "Allow external language models for generative responses". Learn says the Microsoft 365 setting is the first step and does not by itself make models available there.

Anthropic models with Data Retention have their own opt-in in the Microsoft 365 admin center, off for all scenarios until the tenant admin enables them and chooses which users or groups may use them.

## Open questions

- Is there a Microsoft Graph or PowerShell call for assigning Anthropic access to users and groups? Microsoft Learn documents none at the time of writing; watch the Microsoft 365 Copilot admin settings API reference.
- Does Microsoft publish a licence or price specific to Claude models in Copilot? None is documented on the pages read; watch the Microsoft Copilot requirements page and Message center.
- Does the roadmap item correspond exactly to the Specific users and groups option? The record has no more-info link, so watch the roadmap entry and the Learn page "Assign AI provider access to users and groups".
- How will the December 9, 2026 option changes, documented on the EU, EFTA and UK page, apply to tenants outside those regions? Watch the Message center post Learn names.
- What do unassigned users see in Copilot when a feature needs Anthropic? Learn says only that they might be unable to use it.

<!-- rationale
risk: Medium. Learn says Claude models are on by default for most commercial customers and sit outside the EU Data Boundary, so the user and group control only limits exposure once an admin sets it.
cost: Low. The Learn pages read name no separate licence, price or meter for Anthropic models; the known cost is admin time and the Copilot licence users already need.
impact: Medium. Only users left out of an assignment notice, because Copilot features that depend on Anthropic may be unavailable to them or behave differently; admins make the change.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState / default: The new user and group access control is on by default. | Found: Searched: AI provider user group assignments Anthropic access restriction default all users Microsoft Copilot. Opened assignment and both Anthropic setting pages; they state regional model availability, not that the new assignment control starts enforcing by default. | Fix: Set defaultState to unknown for this new control. State: 'Microsoft documents regional defaults for Claude model availability, but does not state the new assignment control's default enforcement state.' Keep the separately attributed regional availability facts.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Anthropic stores most inputs and outputs for up to 30 days, with no longer-retention qualification given. | Found: If Anthropic's trust and safety classifiers identify potential violations of Anthropic's Usage Policy, Anthropic may retain content (inputs and outputs) for up to two years and trust and safety classification scores for up to seven years. | Fix: Append to the 30-day statement: 'If Anthropic's trust and safety classifiers identify potential Usage Policy violations, content may be retained for up to two years and trust and safety classification scores for up to seven years.' | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [contradicted, blocker] Open questions: unassigned users / absence: Microsoft Learn says only that unassigned users might be unable to use a feature, without documenting what they see. | Found: Users who aren't granted access to the model receive the "Agent Blocked" error. | Fix: Remove 'Learn says only that they might be unable to use it.' The narrower question 'What do unassigned users see across other Copilot experiences?' can remain; the known-issues page documents an Agent Blocked error for Copilot Studio agents added to Microsoft 365 Copilot or Teams. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues#copilot-studio-agents
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Scope / default: Claude models are disabled by default in EU/EFTA and UK. | Found: Customers within the EU Data Boundary and customers in the UK have Claude models disabled by default. | Fix: After this attributed general default, add: 'The separate apps-only article says its setting is enabled by default for EU/EFTA/UK tenants created after March 25, 2026, so check the tenant's actual selection.' Cite https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [supported, minor] Why it matters; Governance guidance; Open questions; changes / date: Setting option names and some selections change on December 9, 2026. | Found: If the All users for Microsoft 365 apps only option is currently selected, the selection will change to the All users option. If you haven't previously made any selection, your selection will change to All users. | Fix: Replace 'options are renamed and some selections change' with: 'For EU/EFTA/UK tenants, All users for Microsoft 365 apps only is removed on December 9, 2026; that selection and no previous selection change to All users. Other selections, including No users, remain unchanged.' | Source: https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps
- [supported, minor] Governance controls: Power Platform environment path / admin-path: Manage > Environments > environment > Settings > Product > Features reaches the environment's provider settings. | Found: On the Settings page, select Product > Features. On the Features page, turn each applicable model provider setting On or Off. | Fix: Extend the path to 'Power Platform admin center > Manage > Environments > environment > Settings > Product > Features > applicable model provider setting (On or Off)' as documented at https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses. | Source: https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks administrators to review security group membership, but the table has no membership-management row. | Found: Review group membership on a schedule ...; table rows cover provider assignment and disabling Anthropic, not management of Entra security group membership. | Fix: Remove the checklist instruction 'Review group membership on a schedule, because group changes change who can use Claude.' Retain the explanatory membership risk in Security & identity; do not add a control row.
-->
