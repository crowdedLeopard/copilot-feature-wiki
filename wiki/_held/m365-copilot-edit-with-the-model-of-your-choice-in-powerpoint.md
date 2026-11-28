---
title: "PowerPoint: choose an OpenAI or Anthropic model when creating or editing with Copilot"
slug: "m365-copilot-edit-with-the-model-of-your-choice-in-powerpoint"
roadmapId: 558443
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft 365 Copilot users can pick the model, including Anthropic's Claude, that Copilot in PowerPoint uses to create or edit decks. Admins control Claude through the AI provider settings; EU, EFTA and UK options change on December 9, 2026."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The roadmap item says the model choice is available to Microsoft 365 Copilot-licensed users. No separate add-on or meter for it is named in the record."
audiences: ["m365-admin","compliance","security","change-adoption"]
tags: ["m365-copilot","powerpoint","anthropic","model-selector","eu-data-boundary","data-residency"]
sources:
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Assign AI provider access to users and groups"
    url: "https://learn.microsoft.com/copilot/implement/copilot-ai-provider-user-sec-group-access"
    kind: "learn"
  - title: "OpenAI as a subprocessor in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/openai-subprocessor"
    kind: "learn"
  - title: "Release notes for Office for Mac"
    url: "https://learn.microsoft.com/officeupdates/release-notes-office-for-mac"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 558443"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558443"
    kind: "roadmap"
  - title: "Which users may use Anthropic (Claude) models, including in Edit with Copilot (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Whether Claude is limited to Copilot in Excel, PowerPoint and Word (EU, EFTA and UK) (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps#manage-the-setting-in-the-microsoft-365-admin-center"
    kind: "learn"
  - title: "Which users may use OpenAI-operated models (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/openai-subprocessor#enable-the-use-of-openai-operated-models"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-it-admins-will-be-able-to-enable-anthropic-models-by-sp","m365-copilot-when-using-agent-mode-in-word-you-will-be-able-to-manually-select-which-model","m365-copilot-agent-mode-in-excel-for-desktop-apps","data-residency"]
controls:
  - governs: "Which users may use Anthropic (Claude) models, including in Edit with Copilot"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. Assigned per provider; up to 999 users and groups. Default No users in EU, EFTA and UK; on for most other commercial tenants."
  - governs: "Whether Claude is limited to Copilot in Excel, PowerPoint and Word (EU, EFTA and UK)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose which users can access Anthropic models > All users for Microsoft 365 apps only"
      docs: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps#manage-the-setting-in-the-microsoft-365-admin-center"
    api: null
    note: "Withdrawn on December 9, 2026: tenants with this option or no selection move to All users."
  - governs: "Which users may use OpenAI-operated models"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > OpenAI > Choose which users can access OpenAI operated models"
      docs: "https://learn.microsoft.com/copilot/implement/openai-subprocessor#enable-the-use-of-openai-operated-models"
    api: null
    note: "Covers only OpenAI-operated models; Microsoft-operated (Azure OpenAI) models stay available. Enabled for all users of eligible commercial customers since July 24, 2026."
  - governs: "Switch for model choice in Copilot in PowerPoint alone"
    scope: "tenant"
    ui: null
    api: null
    note: "The provider settings above apply across Copilot experiences, not to PowerPoint only."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-29T23:15:48"
changes:
  - date: "2026-11-28"
    note: "New briefing: model choice in Copilot in PowerPoint, the Anthropic and OpenAI provider settings that govern it, and the December 9, 2026 change for EU, EFTA and UK tenants."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 55
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "cb9953be84586ceb8f923a1c1eb79f69"
---

## What's changing

Copilot in PowerPoint lets users choose which AI model it uses when they create or edit a presentation. The roadmap item names both OpenAI and Anthropic models and says the choice is available to Microsoft 365 Copilot-licensed users.

Microsoft Learn has no page for the PowerPoint model choice itself, so what it looks like in PowerPoint comes from the roadmap description. Microsoft's page on Claude models does name this kind of capability: "In capabilities such as Edit with Copilot in Microsoft 365 apps or Researcher, users can select Claude." Whether Claude appears depends on the tenant's **AI providers operating as Microsoft subprocessors** setting in the Microsoft 365 admin center. Microsoft enables Claude models by default for most commercial cloud customers, but not in the EU, EFTA or UK, where the default is **No users**. OpenAI-operated models have been enabled for all users of eligible commercial customers since July 24, 2026, unless an admin selects **No users**.

For EU, EFTA and UK tenants a separate option, **All users for Microsoft 365 apps only**, limits Claude to Copilot in Excel, PowerPoint and Word. Microsoft's page says this option is enabled by default for tenants in those regions created after March 25, 2026. On **December 9, 2026** the option is withdrawn: tenants that selected it, or never made a selection, move to **All users**. Microsoft points to a Message center post sent on November 9, 2026 titled "Action may be required: Claude models in Microsoft Copilot."

The roadmap item is **Launched**, General Availability, with a target of April CY2026, for Desktop, Mac and Web in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

The model choice decides which company processes the presentation content and the prompt. Choosing Claude means Anthropic processes it as a Microsoft subprocessor. In most commercial tenants that is already allowed by default, so PowerPoint users can pick Claude without anyone in IT acting. For EU, EFTA and UK tenants, the December 9 change can widen Claude from Office apps to every Copilot experience, or turn it on where nobody made a choice. Tenants that want to keep Claude off must have **No users** or a specific group selected before then.

The control works per provider, not per app. The same assignment that lets someone choose Claude in PowerPoint also governs Claude in Copilot, Researcher and Copilot Studio. Before changing it, check which other features depend on it.

## Risk assessment

**Data exposure**
- Choosing Claude sends prompt and deck content to Anthropic. Microsoft's page says Claude models are currently excluded from the EU Data Boundary and in-country processing commitments, and are coming into the EU Data Boundary starting in December 2026. Assign Anthropic access by user or group to limit who can choose it.
- Anthropic models labelled "with Data Retention" are stored by Anthropic under Anthropic's own terms. Microsoft says these are off by default for all scenarios and need their own admin opt-in.
- OpenAI-operated models are excluded from in-country processing commitments but are included in the EU Data Boundary, except where Microsoft's EU Data Boundary documentation notes otherwise.

**Security & identity**
- Access is assigned to individual users, Microsoft Entra ID security groups or nested groups. Up to 999 combined user and group assignments are supported per AI provider. Changing the setting requires the AI Administrator or Global Administrator role.

**Autonomy & actions**
- No change described: the roadmap item adds a choice of model for the existing create and edit experience, not new actions.

**Change & support**
- The same prompt can give different slides depending on the model chosen, so expect questions from users. Microsoft also warns that some features are only available when Claude models are enabled.
- The December 9, 2026 change to the EU, EFTA and UK options can change which users have Claude without anyone acting.

## Cost and licensing

- **Licence:** the roadmap item says the model choice is "Available to Microsoft 365 Copilot–licensed users". Microsoft's Office for Mac release notes (Version 16.109, May 12, 2026) describe Edit with Copilot in PowerPoint itself as "available with Microsoft 365 Copilot (Basic)". They do not mention model choice.
- **Meter:** the roadmap record names no add-on or meter for choosing a model.
- **Indirect cost:** admin time to review the Anthropic and OpenAI provider settings before December 9, 2026, and to tell users about the model choice.

## Scope

- **Users:** Microsoft 365 Copilot-licensed users, according to the roadmap item. Where access to a provider is restricted, only the assigned users or group members can use Copilot features that rely on it.
- **Roles:** AI Administrator or Global Administrator to change the provider settings.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item. Microsoft says Claude models are not available to federal GCC customers, GCC High or DoD. OpenAI-operated models are not currently available in government or sovereign clouds.
- **Platforms:** Desktop, Mac and Web.
- **Regional default:** Claude is on by default in most commercial regions and off (**No users**) in the EU, EFTA and UK.

## Governance guidance

### Before rollout
- Check the Anthropic setting in the Microsoft 365 admin center before December 9, 2026 if your tenant is in the EU, EFTA or UK. Select **No users** or a specific group if **All users for Microsoft 365 apps only** or no selection would otherwise become **All users**.
- Decide which users or security groups may use Claude. Assign them under **Choose who can access Anthropic models for Copilot and generative AI experiences**.
- Decide whether OpenAI-operated models stay at **All users**. This setting does not remove the Microsoft-operated GPT models.
- Confirm with compliance whether processing outside the EU Data Boundary is acceptable until Claude comes into it.

### At rollout
- Tell PowerPoint users which models they may choose and how the data-handling terms differ by provider.
- Confirm that the AI Administrator role, not only Global Administrator, is held by whoever owns these settings.

### After rollout
- Re-check the Anthropic assignment after December 9, 2026 to confirm it moved as Microsoft's table says.
- Review the assignment list as group membership changes. It is limited to 999 combined users and groups per provider.
- Watch the Message center for notices about Claude entering the EU Data Boundary or new models in Edit with Copilot.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users may use Anthropic (Claude) models, including in Edit with Copilot</strong><br><small>User</small><br><small class="controls__note">AI Administrator or Global Administrator. Assigned per provider; up to 999 users and groups. Default No users in EU, EFTA and UK; on for most other commercial tenants.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Claude is limited to Copilot in Excel, PowerPoint and Word (EU, EFTA and UK)</strong><br><small>Tenant</small><br><small class="controls__note">Withdrawn on December 9, 2026: tenants with this option or no selection move to All users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose which users can access Anthropic models › All users for Microsoft 365 apps only <a href="https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps#manage-the-setting-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use OpenAI-operated models</strong><br><small>User</small><br><small class="controls__note">Covers only OpenAI-operated models; Microsoft-operated (Azure OpenAI) models stay available. Enabled for all users of eligible commercial customers since July 24, 2026.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › OpenAI › Choose which users can access OpenAI operated models <a href="https://learn.microsoft.com/copilot/implement/openai-subprocessor#enable-the-use-of-openai-operated-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for model choice in Copilot in PowerPoint alone</strong><br><small>Tenant</small><br><small class="controls__note">The provider settings above apply across Copilot experiences, not to PowerPoint only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both provider settings are assigned per provider, not per model, and Microsoft says they are enforced across Microsoft Copilot and Copilot Studio experiences. Turning Anthropic off for a user therefore removes Claude from Copilot features beyond PowerPoint. The OpenAI setting covers only OpenAI-operated models. Microsoft-operated models (Azure OpenAI) stay available whatever it is set to. Microsoft Learn documents no setting that turns the model choice on or off in PowerPoint alone at the time of writing (November 2026). The Microsoft Graph Copilot policy settings API lists no AI provider setting among the identifiers it supports.

## Open questions

- Which model does Copilot in PowerPoint use when a user makes no choice, and does it differ by region? Watch the Microsoft 365 Copilot release notes.
- Will Anthropic models with Data Retention, such as Fable-class models, be offered in PowerPoint's model choice once an admin opts in to them?
- Is the model a user chose recorded in the Microsoft Purview audit log or Copilot usage reports?
- Will Microsoft add an API for the AI provider settings, which the Microsoft Graph Copilot policy settings API does not cover today?

<!-- rationale
risk: Medium. Choosing Claude sends presentation content to Anthropic as a Microsoft subprocessor, outside the EU Data Boundary for now; provider-level user and group assignments in the Microsoft 365 admin center cover it.
cost: Low. The roadmap item makes it available to Microsoft 365 Copilot-licensed users and names no add-on or meter; the cost is admin time to review the AI provider settings.
impact: Medium. Microsoft 365 Copilot-licensed users who create or edit presentations with Copilot in PowerPoint see the model choice; other users notice nothing.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState / default: The PowerPoint model-choice feature is on by default without administrator action. | Found: Searched: PowerPoint Copilot model selection choose OpenAI Anthropic model default admin disable model picker policy; "PowerPoint" "model" "default" "Edit with Copilot". Read roadmap, provider and apps-only pages, and Copilot release-note excerpts; no selector rollout default stated. | Fix: Set defaultState to "unknown". State: "The roadmap says model choice is available to Microsoft 365 Copilot-licensed users but does not state its rollout default; the provider defaults described below are separate."
- [contradicted, blocker] Why it matters / applicability: Tenants that want to keep Claude off can select either No users or a specific group before December 9. | Found: When access is restricted by user or group assignment, only the specified users or group members can use Copilot features that rely on that AI provider. | Fix: Replace the sentence with: "Tenants that want to keep Claude off for everyone must select No users before December 9, 2026; selecting specific users and groups instead allows those assigned users to use Claude." | Source: https://learn.microsoft.com/copilot/implement/copilot-ai-provider-user-sec-group-access
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: The Message center notice is titled Action may be required: Claude models in Microsoft Copilot. | Found: with a title that starts with "Action may be required: Claude models in Microsoft Copilot." | Fix: Replace "titled" with "whose title starts with" before the quoted Message center title. | Source: https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps
-->
