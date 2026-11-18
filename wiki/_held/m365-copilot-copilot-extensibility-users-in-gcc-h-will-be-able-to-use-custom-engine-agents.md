---
title: "Microsoft 365 Copilot: custom engine agents for GCC High users"
slug: "m365-copilot-copilot-extensibility-users-in-gcc-h-will-be-able-to-use-custom-engine-agents"
roadmapId: 503771
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists custom engine agents as launched for GCC High users of Microsoft 365 Copilot. Microsoft Learn does not yet confirm this for GCC High, so check your tenant and the agent block control before relying on it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this GCC High release. Learn says custom engine agents need hosting outside Microsoft 365 at an additional cost, and Copilot Studio US Government licensing is the same as public cloud."
audiences: ["m365-admin","service-owner","security","maker"]
tags: ["custom-engine-agents","m365-copilot","copilot-studio","extensibility","agents","agent-governance","m365-admin-center","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 503771"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503771"
    kind: "roadmap"
  - title: "Custom engine agents for Microsoft 365 overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent"
    kind: "learn"
  - title: "Custom engine agent architecture"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/custom-engine-agent-architecture"
    kind: "learn"
  - title: "Compare declarative and custom engine agents"
    url: "https://learn.microsoft.com/plugins/agents-overview"
    kind: "learn"
  - title: "Known issues"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Copilot Studio for US Government customers"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing-gcc"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-users-will-be-able-to-upload-files-stored-locally-or-in","m365-copilot-agent-lifecycle-management-rules","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u"]
controls:
  - governs: "Whether an agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General agent control; not confirmed for custom engine agents in GCC High. The API page marks US Government L4 as not available, is beta and requires a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap lists custom engine agents as launched for GCC High, but Learn availability tables do not yet confirm it."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 51
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "c5e6254735aedd77604dc6eab06e5a8c"
---

## What's changing

Microsoft's roadmap item 503771 states that users in GCC High (GCC-H) will be able to use custom engine agents. The record gives the status as Launched, the release phase as General Availability, the platform as Web and the target date as August CY2026. It has no more-info link and no preview date.

Microsoft Learn describes custom engine agents as agents that give developers control over orchestration, language models and API integrations while staying compatible with Microsoft 365. They can be built with Copilot Studio (low-code), the Microsoft 365 Agents SDK, the Teams SDK or Microsoft Foundry. Learn does not describe a GCC High-specific version of the feature, so what follows about behaviour is general to custom engine agents.

The Learn sources do not fully agree with the roadmap at the time of writing (November 2026). The Microsoft Copilot service description's feature availability table has rows for declarative agents and Agent Builder in GCC High but no row for custom engine agents. The Copilot Studio US Government page lists "Teams & Microsoft Copilot Channel" as available in GCC and not in GCC High. Both pages may lag the roadmap, so treat the roadmap's Launched status as Microsoft's statement and confirm in your own tenant.

## Why it matters

For a GCC High tenant this means an agent whose orchestration logic and model sit outside Microsoft 365 can appear in Microsoft 365 Copilot. That changes where prompts are processed and who operates the component, which matters in a boundary built around US government compliance. The Copilot Studio US Government page says third-party applications and services connected through connectors or Azure Bot Service skills are not covered by its compliance and data protection commitments.

Microsoft has not stated whether the capability is on, off or something an administrator enables, so do not assume either. The practical view is to treat each custom engine agent as a new external component to approve, and to find out now whether the agent block control and the agent list work for these agents in your tenant.

## Risk assessment

**Data exposure**

- Learn says custom engine agents typically require hosting outside Microsoft 365, such as Azure. Prompts sent to the agent therefore reach a service that the builder operates; confirm that the host and any model it calls fit your GCC High data boundary.
- Learn says prompts and responses in Copilot Chat and Teams are stored in line with Microsoft 365 terms, and that admins can use Content Search or Microsoft Purview to view and manage them.
- The known-issues page says sensitivity labels aren't supported for custom engine agents, so label-based protection does not apply to what these agents return.

**Security & identity**

- The Microsoft 365 Agents Toolkit publishing route is listed as unsupported in Microsoft 365 Government tenants, and authenticated custom actions are listed as unsupported in the same list. Which route a GCC High builder uses is therefore a question to settle before they start.

**Autonomy & actions**

- Learn lists proactive automation among custom engine agent characteristics: agents can programmatically trigger workflows and take actions across enterprise applications. Learn does not say which of these actions a GCC High tenant can use, so review each agent's actions before approval.
- The Copilot Studio US Government page lists triggers and autonomous agents as not available in GCC or GCC High.

**Change & support**

- The known-issues page lists unsupported behaviour for custom engine agents in Microsoft 365 Copilot: no file or image attachments, no proactive notifications, and no support in Outlook, Word, Excel, PowerPoint or the Microsoft Edge browser. Expect support calls from users who assume they work.
- Microsoft Learn's roadmap-versus-documentation gap (see What's changing) is itself a support risk: users may be told the feature exists before it works in the tenant.

## Cost and licensing

Microsoft has not published a licence or meter specific to custom engine agents in GCC High. The roadmap item names none.

Learn does give three related facts. Custom engine agents typically require hosting outside Microsoft 365, such as Azure, at an additional cost (Compare declarative and custom engine agents). The extensibility cost page tells builders of a custom engine agent to budget for their own orchestration, models and hosting. For Copilot Studio as a build tool, the US Government page says licensing for Copilot Studio US Government plans is the same as for public cloud.

The known-issues page lists support for usage billing for extensibility features as not currently supported in Microsoft 365 Government tenants. That page does not say which meters it means, so confirm with your account team how any Copilot Credits-based costs would apply in GCC High. Hosting and admin time are the indirect costs you can plan for now.

## Scope

The roadmap record lists the cloud as GCC High, the platform as Web and the release phase as General Availability. Microsoft has not said which users or licences are required for GCC High, how the rollout is staged, or whether a tenant must enable it.

Learn states that custom engine agents are supported in app manifest version 1.21 and later. The known-issues page lists them as unsupported in Outlook, Word, Excel, PowerPoint and the Microsoft Edge browser.

The Copilot Studio US Government page says GCC High uses Microsoft Entra ID for Government for customer identities and lists Copilot Studio feature limits for GCC High, including that Triggers / Autonomous Agents are not available.

## Governance guidance

### Before rollout

- Ask Microsoft through your account team, or watch Message center, to confirm that custom engine agents are enabled in your GCC High tenant, given the gap between the roadmap and the Learn pages.
- Ask each builder where the orchestrator and model will be hosted, and check that the host fits your GCC High boundary and authorisation requirements.
- Check the Agents > All agents list in the Microsoft 365 admin center to see how agents appear in your tenant, and note who may use the block control (first row of the table).
- Decide which build route is allowed, because the Agents Toolkit publishing route is listed as unsupported in Microsoft 365 Government tenants.

### At rollout

- Pilot with a small group on the Web client and test the documented limitations: attachments, sensitivity labels and the Microsoft 365 apps where these agents are listed as unsupported.
- Confirm that a pilot agent shows up in the agent list, and that blocking it in the admin center removes it for users.
- Tell makers that the roadmap says GCC High is supported while Learn pages are not yet aligned, so they set expectations with their users.

### After rollout

- Review the agent list regularly and block any agent whose owner, host or actions you cannot account for.
- Use Content Search or Microsoft Purview to review stored prompts and responses for custom engine agents.
- Re-read the Copilot service description availability table and the extensibility known-issues page for updates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">General agent control; not confirmed for custom engine agents in GCC High. The API page marks US Government L4 as not available, is beta and requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The admin centre action blocks an agent for the entire organisation. The Learn page says blocking a Copilot Studio or Agent Builder agent affects its availability in Microsoft Copilot and in other host products such as Outlook and Teams. It describes the same action for SharePoint and Microsoft Foundry agents as affecting only Microsoft Copilot Chat.

The page's government note says GCC High and GCC Moderate environments support publishing agents to the organisation. It does not say that every action in its table works in GCC High, and it does not say that a custom engine agent built with the Agents SDK appears in the list. Confirm both in your tenant.

The Microsoft Graph block call is a beta API that needs the delegated permission CopilotPackages.ReadWrite.All and a Microsoft Agent 365 licence. Its page marks US Government L4 as not available, so treat it as a reference and not as a GCC High option until Microsoft confirms otherwise.

Microsoft Learn documents no switch specific to custom engine agents for GCC High at the time of writing (November 2026).

## Open questions

- Which licence, if any, do GCC High users need to use custom engine agents, and does the Microsoft 365 Copilot licence cover it? Watch the roadmap item and the Microsoft 365 Copilot licensing pages.
- Is the capability on by default in GCC High tenants, or must an administrator enable it? Watch Message center and the Learn extensibility pages.
- When will the Copilot service description availability table and the Copilot Studio US Government page show custom engine agents and the Microsoft Copilot channel for GCC High?
- Do the Agents SDK, Teams SDK and Foundry routes work in GCC High given the listed Government-tenant limits on the Agents Toolkit and usage billing?
- Does the admin centre block action, and the Microsoft Graph block API, apply to custom engine agents in GCC High?

<!-- rationale
risk: Medium. A custom engine agent brings its own orchestrator and model, hosted outside Microsoft 365, into a GCC High tenant; the admin block control covers availability, but Microsoft has not stated a default or tenant switch for GCC High.
cost: Low. The only cost the sources show is indirect: hosting, models and orchestration that the agent's builder provides. Licensing for this GCC High release is not yet published.
impact: Medium. Makers and developers in GCC High tenants and the users they publish agents to notice it; the roadmap lists the Web platform only.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing; Cost and licensing; Scope; Open questions; rationale: cost / licensing: The licensing model and required user licences are wholly unpublished for this GCC High release. | Found: | Custom engine agents | ✅ | ✅ | ✅ | Usage-based billing isn't supported in Microsoft 365 Government Community Cloud High (GCCH) and Government Community Cloud (GCC) environments. | Fix: Set licensing.model to 'mixed'. Replace the blanket licensing-unknown statements with 'Learn lists custom engine agents for Copilot Chat users without usage-based billing and for licensed Microsoft 365 Copilot users. Builder-operated hosting and models have separate costs. Usage-based billing is not supported in GCC or GCCH; a separate licence or meter specific to this GCC High release is not named.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites and the existing hosting/cost sources. Narrow the licensing open question to any release-specific requirements, rather than whether any access model has been published. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites
- [contradicted, blocker] front matter: cost; Cost and licensing; rationale: cost / consistency: Cost is low because hosting, models and orchestration are indirect costs only. | Found: Briefing: 'Low. The only cost the sources show is indirect: hosting, models and orchestration that the agent's builder provides.' Learn: 'Instead, the cost depends on the Azure services consumed in the app.' | Fix: Set cost to 'variable'. Replace the cost rationale with 'Variable. Builder-operated agents can incur Azure hosting and model consumption charges; a separate meter specific to this GCC High release is not named.' Replace 'Hosting and admin time are the indirect costs' with 'Hosting and model usage are direct service costs; admin time is an indirect cost.' Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/faq to sources. The schema reserves low for indirect costs only and defines variable for metered Azure consumption. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/faq#license-questions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Why it matters; Risk assessment: Data exposure; Cost and licensing; rationale: risk / behaviour: Custom engine agents typically use hosting outside Microsoft 365, with builder-controlled processing and additional hosting costs. | Found: Require additional hosting outside of Microsoft 365, typically with cloud services such as Azure, at an additional cost. | Fix: Qualify the hosting statements, including licensing.notes and the risk rationale: 'Pro-code custom engine agents use builder-provided orchestration and hosting; Copilot Studio provides a managed alternative.' The same comparison table says 'Hosted in Microsoft 365 with Copilot Studio or externally with custom solutions such as Azure AI', and https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent describes Copilot Studio as fully managed. | Source: https://learn.microsoft.com/plugins/agents-overview
- [supported, minor] Risk assessment: Data exposure; Governance guidance: At rollout / applicability: The known-issues page lists sensitivity labels as unsupported for custom engine agents. | Found: These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. Sensitivity labels aren't supported. | Fix: Replace the bullet with 'For custom engine agents built using the Microsoft 365 Agents Toolkit and Microsoft 365 Agents SDK, the known-issues page lists sensitivity labels as unsupported.' Retain that scope in the pilot advice; remove the broader inference about all label-based protection. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [supported, minor] Risk assessment: Security & identity; Governance guidance: Before rollout; Open questions / availability: Publishing custom engine agents through Microsoft 365 Agents Toolkit is unsupported in Microsoft 365 Government tenants. | Found: Publishing agents via the Microsoft 365 Agents Toolkit isn't supported in Microsoft 365 Government tenants. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/m365-agents-sdk to sources and cite it for the custom engine agent publishing restriction; the government list on the currently cited known-issues page sits under Declarative agents. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/m365-agents-sdk
- [supported, minor] Risk assessment: Security & identity / availability: The known-issues page lists authenticated custom actions as unsupported in Microsoft 365 Government tenants. | Found: The following known issues apply to declarative agents. The following features aren't currently supported in Microsoft 365 Government tenants: - Authenticated custom actions. | Fix: Replace the authenticated-actions clause with 'Under Declarative agents, the same page lists authenticated custom actions as unsupported in Microsoft 365 Government tenants; it does not establish a restriction on custom engine agents' own authenticated API calls.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [supported, minor] Risk assessment: Change & support; Governance guidance: At rollout / behaviour: Custom engine agents in Microsoft 365 Copilot do not support file or image attachments in chats. | Found: These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. Custom engine agents don't support file or image attachments in agent chats. | Fix: Qualify the attachments statement and pilot advice with 'For custom engine agents built using the Microsoft 365 Agents Toolkit and Microsoft 365 Agents SDK in Microsoft 365 Copilot'. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [supported, minor] Risk assessment: Change & support / behaviour: Proactive notifications are unsupported for custom engine agents in Microsoft 365 Copilot. | Found: These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. Proactive notifications aren't supported. | Fix: Qualify the proactive-notification limitation with 'For custom engine agents built using the Microsoft 365 Agents Toolkit and Microsoft 365 Agents SDK in Microsoft 365 Copilot'. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [supported, minor] Risk assessment: Change & support; Scope; Governance guidance: At rollout / availability: The known-issues page lists custom engine agents as unsupported in Outlook, Word, Excel, PowerPoint and the Microsoft Edge browser. | Found: Custom engine agents aren't supported in Outlook, Word, Excel, PowerPoint, and the Microsoft Edge browser. | Fix: Add 'The known-issues table scopes these limitations to agents built using Microsoft 365 Agents Toolkit and Microsoft 365 Agents SDK. The comparison page nevertheless says custom engine agents can run in Teams, Word, Excel and Edge, so the Learn sources disagree on app support.' Cite the already listed https://learn.microsoft.com/plugins/agents-overview. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [supported, minor] Cost and licensing; Open questions / availability: The known-issues page lists usage billing for extensibility features as unsupported in Microsoft 365 Government tenants. | Found: Support for usage billing for extensibility features. For details about features that require usage billing, see Agent capabilities and licensing models. | Fix: Replace 'That page does not say which meters it means' and the resulting general billing uncertainty with 'The linked prerequisites page explicitly states that usage-based billing is unsupported in GCC and GCCH.' Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites to sources; keep questions only about separate hosting or release-specific charges. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells administrators to use Content Search or Microsoft Purview, but the controls table contains only agent blocking. | Found: Use Content Search or Microsoft Purview to review stored prompts and responses for custom engine agents. Control: Whether an agent is available to anyone in the organisation. | Fix: Remove the Content Search/Microsoft Purview action bullet from Governance guidance: After rollout. Keep the supported background statement in Risk assessment; no new control row or unverified path is required.
-->
