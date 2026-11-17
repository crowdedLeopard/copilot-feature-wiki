---
title: "Copilot Studio: share agents with other makers on the Microsoft Copilot harness"
slug: "microsoft-copilot-studio-agent-sharing-amongst-makers"
roadmapId: 569475
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers can share agents built on the Microsoft Copilot harness with other makers as Viewer or Editor. Launched per the roadmap; sharing is maker-driven, and admins limit it through Managed Environments sharing rules."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The Learn page lists a Microsoft Copilot Studio per-user licence for users you share with, and says the harness uses usage-based billing that might consume Copilot Credits. No price for sharing itself is published."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["copilot-studio","copilot-harness","sharing","sharing-limits","security-roles","agents","managed-environments","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 569475"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569475"
    kind: "roadmap"
  - title: "Share agents with other users and makers (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
  - title: "Limit sharing"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    kind: "learn"
  - title: "FAQ for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/faqs-copilot-harness"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether makers can share agents as Editor or Viewer, with security groups, and how many viewers"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > managed environment > Edit Managed Environments > Manage sharing"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    api:
      kind: "powershell"
      call: "Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration $governanceConfiguration"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    note: "Managed Environments only. Documented for Copilot Studio agents; Learn does not say in terms that it governs the Microsoft Copilot harness Share panel."
  - governs: "Tenant-wide switch that turns maker-to-maker agent sharing off"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant-wide setting found in the pages read; sharing is limited per environment."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-16"
    note: "First briefing: records the roadmap's Viewer and Editor sharing against Learn's narrower wording, and the Managed Environments sharing rules that limit it."
  - date: "2026-11-16"
    note: "Corrected the PowerShell example for Editor sharing limits, narrowed the viewer visibility statement and aligned the risk rationale on connection credentials."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 56
  unconfirmed: 0
  contradicted: 4
  attempts: 2
  hash: "76b50383a113c5b540d1698074fdc05d"
---

## What's changing

Copilot Studio makers can share an agent built on the Microsoft Copilot harness (the redesigned agent-building experience in Copilot Studio) with other makers. The roadmap item says makers can grant **Agent Viewer** (view analytics and evaluations only) or **Editor** (view, edit, configure, share, publish) access, with security roles assigned automatically.

On Microsoft Learn, the sharing steps are: open the agent from the **Agents** page, select **Share** near **Publish**, enter users or security groups, and select **Share**. Viewers can see the agent in their list, open it to view details and test it, but cannot edit it. The Learn page lists prerequisites: user authentication set to **Authenticate with Microsoft**, a Microsoft Copilot Studio per-user licence for the users you share with, and the agent published to **Teams + Microsoft 365** with **Make agent available in Microsoft Copilot** turned on.

The sources do not fully agree. The Learn page says that with the new share experience "you can only give viewing rights to agents you share" and sends makers to the standard harness or to environment security roles for editing rights. The same page shows a Share panel whose permission list includes **Can edit** and **Can view analytics**. Neither the Learn page nor the roadmap item says how the roadmap's Agent Viewer and Editor map to the Learn wording. This briefing reports both rather than choosing.

The roadmap item shows status Launched, with a preview date of September CY2026 and a target date of October CY2026, release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) only, on the web.

## Why it matters

Sharing with makers moves an agent from one person's project to a team's, and an Editor can then change instructions, tools and publication. In most tenants that means more people able to change what an agent does, with no admin switch needed, because the roadmap and Learn describe sharing as something makers do.

If nobody acts, the controls that decide who may share are those already set in each Managed Environment. Check them now, particularly for environments where makers build on the Microsoft Copilot harness, and confirm with a test agent that they apply to the new experience.

## Risk assessment

**Data exposure**
- Learn says viewers can open the agent to view details and test it; it does not specify which instructions or knowledge configuration details are visible. Sharing to security groups widens this; the **Only share with individuals (no security groups)** rule restricts it where it applies.
- Learn warns that connections are tied to the identity of each individual agent user, so a shared agent might work for its maker and fail for others. That is a support effect rather than an exposure.

**Security & identity**
- Learn states that when a tool uses a maker's credentials, other users of the agent can perform operations by using the permissions associated with those credentials. Sharing with an Editor extends who can configure such tools.
- Learn says Editor permissions can only be given to individual users, not security groups, on the classic Editor and Viewer model. Whether the same limit holds for the harness's Editor access is not stated.

**Autonomy & actions**
- An Editor can edit, configure, share and publish the agent per the roadmap item and the Editor definition on Learn, so changes to what the agent does can be made by someone other than the owner. No approval step for those changes is documented.

**Change & support**
- Sharing rules are enforced when a user tries to share and do not affect access that existed before the rules were set; after rules are saved, enforcement can take up to an hour.
- Learn's page and the roadmap describe viewer and editor access differently, which will generate maker questions until the pages align.

## Cost and licensing

Sharing has no separate charge documented. The cost that applies is the harness's. The Learn page says: "The harness used to build this agent uses usage-based billing. Using, building, testing, and evaluating agents might consume Copilot Credits." Shared agents are therefore a way for more people to consume credits; see [Copilot Credits](/concepts/copilot-credits/).

The Learn sharing page lists, as a prerequisite, that users you share with have a Microsoft Copilot Studio per-user licence, and that users without one can sign up for a trial. The same page does not say whether that applies to makers given Editor access. The FAQ names admin cost controls in the Power Platform admin center, including environment credit allocations and agent limits; the paths were not read for this briefing.

Not yet published: any pricing specific to Agent Viewer or Editor access, and whether the roadmap's Editor access carries a licence requirement beyond the one on the Learn page.

## Scope

Worldwide (Standard Multi-Tenant) is the only cloud on the roadmap record; the platform is the web. The record lists General Availability and Preview release phases without saying which parts are in which phase.

It applies to agents built on the Microsoft Copilot harness. Learn says the classic experience is described on a different page, and that the Share steps above are for the new agent experience. The roles that can limit sharing are not stated on the pages read; the Limit sharing page says the rules apply in managed environments.

## Governance guidance

### Before rollout
- Identify which Managed Environments host Microsoft Copilot harness agents and read their **Manage sharing** rules in the Power Platform admin center.
- Decide whether makers may grant Editor access, and whether sharing with security groups is acceptable, then set the matching sharing rules.
- Check that the people who will receive Viewer or Editor access hold a Microsoft Copilot Studio per-user licence, as the Learn prerequisites require.

### At rollout
- Test with a non-production agent: share it as Viewer and as Editor, and check whether the environment's sharing rules block each case.
- Tell makers that the Learn page and the roadmap describe viewer and editor rights differently, and point them to the sharing steps on Learn.
- Review agents that use maker credentials before they are shared; see [Copilot Studio: block maker-provided credentials](/features/copilot-studio-block-maker-provided-credentials/).

### After rollout
- Re-check the sharing rules after each Learn update, since enforcement applies only to new sharing and existing access stays.
- Review credit use in the environments hosting shared agents using the cost controls in the Power Platform admin center.
- Remove access that is no longer needed through the **Share** panel's delete icon.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can share agents as Editor or Viewer, with security groups, and how many viewers</strong><br><small>Environment</small><br><small class="controls__note">Managed Environments only. Documented for Copilot Studio agents; Learn does not say in terms that it governs the Microsoft Copilot harness Share panel.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Manage sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch that turns maker-to-maker agent sharing off</strong><br><small>Tenant</small><br><small class="controls__note">No tenant-wide setting found in the pages read; sharing is limited per environment.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The sharing rules are a Managed Environments control, so they need a managed environment; the Limit sharing page and the Copilot Studio page that describes them cover the Editor and Viewer model, and neither page says in terms that the rules govern the new harness's Share panel. The harness FAQ does list "Managed environment sharing controls and environment security groups" as the control for who agents are shared with, so the rules are likely to apply, but verify this with a test agent.

The PowerShell call in the table is the last step of the Learn script that turns off sharing with individuals as Editors. Before it, the script retrieves the environment with `Get-AdminPowerAppEnvironment -EnvironmentName <EnvironmentId>`, assigns `$governanceConfiguration = $environment.Internal.properties.governanceConfiguration`, and adds `bot-authoringSharingDisabled` with value `True` using `$governanceConfiguration.settings.extendedSettings | Add-Member -MemberType NoteProperty -Name 'bot-authoringSharingDisabled' -Value True -Force`. That example disables Editor sharing only; the same Limit sharing page documents `bot-limitSharingMode` and `bot-maxLimitUserSharing` for the security group and viewer limits.

The rules are enforced only when someone tries to share and apply only to agents that require authentication. They can be applied at scale through environment groups and rules.

Assigning editing rights through environment security roles is a separate route described on the Learn sharing page; its admin path was not read for this briefing. The documented controls are per environment: no tenant-wide switch for maker-to-maker sharing was found at the time of writing (November 2026).

## Open questions

- How do the roadmap's Agent Viewer and Editor map to the Learn wording, which says the new share experience can only give viewing rights? Watch the Learn page on sharing agents (Microsoft Copilot) and the roadmap item.
- Which security roles are assigned automatically, and are they visible in the Power Platform admin center?
- Do the Managed Environments sharing rules, including **Let people grant Editor permissions when agents are shared**, apply to harness agents as they do to classic agents?
- Is a Microsoft Copilot Studio per-user licence needed for makers given Editor access, or only for viewers and users?
- Will Microsoft publish how sharing changes on harness agents are logged and reported? Watch the Learn sharing page and Message center.

<!-- rationale
risk: Medium. An Editor can edit, configure, share and publish an agent per the roadmap, and when tools use maker-provided credentials, shared-agent users can act with the maker's permissions; tools set to end-user credentials use each user's own connection.
cost: Variable. Microsoft Learn says the Microsoft Copilot harness uses usage-based billing, so using, building, testing and evaluating shared agents might consume Copilot Credits; no separate charge for sharing is documented.
impact: Medium. Makers and the people they share with notice it; end users who only chat with an agent do not need Editor or Viewer access.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Governance controls: first paragraph; Open questions / applicability: Whether Managed Environments sharing rules govern Microsoft Copilot harness sharing remains unconfirmed and only likely. | Found: Admins govern it with four kinds of control: who can build agents, how much an agent can spend, what data and connectors it can reach, and who it can be shared with. - Who agents are shared with: Managed environment sharing controls and environment security groups | Fix: Replace the unconfirmed-applicability wording in the control note and Governance controls with: 'The Microsoft Copilot harness FAQ identifies Managed environment sharing controls and environment security groups as controls over who agents are shared with.' Remove the Open questions bullet asking whether those controls apply. A recommendation to test enforcement can remain, but not a claim that Microsoft has not confirmed applicability. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/faqs-copilot-harness
- [contradicted, blocker] Risk assessment: Security & identity / applicability: The restriction on granting Editor permissions to security groups is documented only for classic agents, leaving harness Editor access unstated. | Found: When you set sharing controls in the Power Platform admin center, you can enforce how makers share **Editor** or **Viewer** assignments with other individuals for their agents in Copilot Studio. | Fix: Replace that bullet with: 'Learn states that Editor permissions can only be given to individual users, not security groups.' Remove the unsupported classic-only qualification and the sentence saying the harness limit is not stated. The harness sharing page links to this control documentation for assigning editing rights. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Share panel permission list / behaviour: The sharing page shows a Share panel with Can edit and Can view analytics options. | Found: Screenshot of the Share panel permission dropdown with Can use selected and highlighted, alongside Can edit, Can view analytics, and Remove access options. | Fix: Replace the screenshot sentence with: 'In its preview section on sharing autonomous agents for users to run, the same page shows a Share panel whose permission list includes Can edit and Can view analytics.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells administrators to review credit use through Power Platform cost controls, but the controls table has no corresponding row. | Found: Review credit use in the environments hosting shared agents using the cost controls in the Power Platform admin center. | Table rows cover environment sharing rules and a tenant-wide sharing switch only. | Fix: Remove the After rollout checklist bullet directing readers to review credit use through cost controls; the cost-control references can remain in Cost and licensing. This resolves the unmatched checklist control without adding a row.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist directs readers to remove access through Share, but the controls table has no access-removal row. | Found: Remove access that is no longer needed through the **Share** panel's delete icon. | Table rows cover environment sharing rules and a tenant-wide sharing switch only. | Fix: Remove the After rollout checklist bullet about the Share panel's delete icon to resolve the unmatched checklist control without adding a row.
-->
