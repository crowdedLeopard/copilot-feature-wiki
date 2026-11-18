---
title: "Copilot Studio: conversational set-up of connector connections with in-chat sign-in"
slug: "microsoft-copilot-studio-conversational-configuration-of-connectors-in-copilot-studio"
roadmapId: 569930
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio is rolling out in-chat sign-in for the connectors an agent needs, replacing a full settings experience. Admins have no stated action; makers and users will notice, and data policies still govern connectors."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. The Learn pages for agents on the Microsoft Copilot harness say that using, building, testing and evaluating agents might consume Copilot Credits."
audiences: ["power-platform-admin","maker","end-user","change-adoption"]
tags: ["copilot-studio","connectors","authentication","end-user-authentication","data-policies","tools","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 569930"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569930"
    kind: "roadmap"
  - title: "Set up your connections when an agent asks"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/end-user-connections"
    kind: "learn"
  - title: "Add a tool to an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-tools-custom-agent"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
videos: []
related: ["data-policies","copilot-credits","copilot-studio-block-maker-provided-credentials","copilot-studio-require-human-approval-for-tool-calls","mcp"]
controls:
  - governs: "Which connectors agent makers can use as tools"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Next > Next > connector > three dots > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy-id> -Classification <group> -Connectors <connector-list>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "General control: Microsoft has not confirmed how it applies to the in-chat sign-in. The path is for a new policy; use Edit Policy for an existing one. Requires admin rights over the scope."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item; Microsoft Learn does not name the feature, so behaviour is taken from the related Learn page on in-chat connection requests."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the data policy path to include the connector's three-dots menu before Block, and stated that -Classification Blocked puts connectors in the Blocked group."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 47
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "7b52495d5cc5c34d64dac32e5eecfd2f"
---

## What's changing

The roadmap item describes a way to configure the connectors an agent needs through the conversation: the user signs in inside the chat instead of working through a full settings experience. The roadmap item gives no further detail and has no "more info" link.

Microsoft Learn does not name this roadmap item, so what follows about behaviour is a related Learn page, not a confirmed description of this feature. That page, "Set up your connections when an agent asks", covers agents built with the Microsoft Copilot harness. It says that when an agent needs a connection the user has not set up, it pauses and shows a **Connection Required** card in the chat. The card has **Set up connection**, **Retry** and **Deny** buttons. **Set up connection** opens a **Manage your connections** page, where the user connects each item the action needs, then returns to the chat.

The same page says the connections concern tools, flows and AI models that sign in with each user's own account, and that connections are saved for each agent and each channel. In Microsoft Teams the agent retries the action automatically after the user connects.

The roadmap record gives status Rolling out, release phase General Availability, a target of September CY2026, the Worldwide (Standard Multi-Tenant) cloud, and the platforms Desktop, Mac and Web. The target month has passed; the record has no later date.

## Why it matters

Nothing in the roadmap item or Microsoft Learn states whether this arrives on or off, so Microsoft has not stated what happens on arrival. Plan on the assumption that makers and users will meet a new sign-in step in chat, and that some will ask support how to connect, reconnect or disconnect.

The practical question for a service owner is whether your connector governance still holds when the user, not the maker, is the one signing in. The Learn page on adding tools says a tool blocked by a data policy cannot be selected, and that publishing or running an agent that uses it can fail. That is the control to check first; whether it is evaluated again at the in-chat sign-in step is not stated.

## Risk assessment

**Data exposure**

- Tools that sign in with each user's own account use that user's connection, per the Learn page on end-user connections. What an agent can reach through such a tool therefore depends on the account and connection the user picks in the **Create or pick connections** dialog, where the user can select an existing connection or create a new one.
- Data policies block connectors as tools for makers (Power Platform admin center data policies). Learn does not state how they apply at the in-chat step, so confirm with a test agent.

**Security & identity**

- Connections are saved for each agent and each channel, so the same user may hold several connections to the same service. Users can remove them with **Disconnect**, which cannot be undone.
- A connection can show **Expired** (sign-in expired or revoked) or **Stale** (the agent changed after the user connected). Expect re-sign-in prompts after agent edits.

**Autonomy & actions**

- The agent pauses at the **Connection Required** card, and **Deny** cancels the action without a retry. Learn does not describe what happens when no user is present in the chat to respond; treat that as unconfirmed for autonomous agents.

**Change & support**

- Users who chat with the same agent in several channels set up connections in each channel, which is a likely source of support questions.

## Cost and licensing

No licence and no price are published for this feature: the roadmap item names none, and the Learn page on end-user connections lists none. Not yet published.

The Learn pages on setting up connections and on adding tools for agents on the Microsoft Copilot harness both carry a note that the harness uses usage-based billing and that using, building, testing and evaluating agents might consume Copilot Credits. Whether the connection step itself consumes credits is not stated. See [Copilot Credits](/concepts/copilot-credits/) for the meter and [Spending policies](/concepts/spending-policies/) for caps.

Indirect cost is admin and support time for the new sign-in step, and for reconnecting after an agent changes.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud only, with the platforms Desktop, Mac and Web, and the release phase General Availability. Other clouds are not listed on the record; that is not a statement that the feature is unavailable there.

The Learn page on end-user connections is written for agents on the Microsoft Copilot harness and mentions Microsoft Teams as a channel where the agent retries automatically. Whether the roadmap item covers other harnesses or channels is not stated. The Learn page on adding tools lists an agent created with the Microsoft Copilot harness as the prerequisite and names no licence.

## Governance guidance

### Before rollout

- Identify which agents in your tenant use connector tools that sign in with each user's own account, by asking makers and reviewing each agent's Tools list.
- Review the data policies that cover the environments where those agents live, and check which connectors they block (data policies row in the controls table).
- Brief makers and help desk staff on the **Connection Required** card and the **Manage your connections** page, using the Learn page "Set up your connections when an agent asks".

### At rollout

- Test with a non-production agent that uses a connector you block, and note what the user sees at the in-chat step.
- Check the Message center and the roadmap item for an updated date or a Microsoft notice for this item.

### After rollout

- Collect support questions about **Expired** and **Stale** connections and feed them back to makers.
- Re-check Learn for an admin setting specific to this feature and add it to your controls inventory if one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors agent makers can use as tools</strong><br><small>Environment</small><br><small class="controls__note">General control: Microsoft has not confirmed how it applies to the in-chat sign-in. The path is for a new policy; use Edit Policy for an existing one. Requires admin rights over the scope.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Next › Next › connector › three dots › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy-id&gt; -Classification &lt;group&gt; -Connectors &lt;connector-list&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Data policies are a general control: Microsoft Learn states that a data policy can block a connector as a tool for agent makers, but does not state how a data policy interacts with the in-chat sign-in step. The control is configured by a Power Platform administrator.

The PowerShell side classifies connectors in a data policy group. Use -Classification Blocked to put the connectors in the Blocked group.

Users manage their own connections on the **Manage your connections** page; that is a user-side control, not an admin one.

## Open questions

- Does this roadmap item correspond to the Connection Required card and Manage your connections page on Learn, and which harnesses and channels does it cover? Watch the roadmap item and the Learn page.
- Is there a tenant or environment setting that turns the in-chat sign-in off? Watch Learn and Message center.
- Do data policies and the blocking of maker-provided credentials apply when a user connects in chat? Watch the Learn data policy page.
- Does the connection step consume Copilot Credits, and at what rate? Watch the Copilot Studio billing pages.

<!-- rationale
risk: Low. The roadmap item describes a simpler sign-in step, not new data access, and the Learn pages show connectors still sit under data policies; no source says the in-chat step changes that.
cost: Low. No licence or meter is published for this feature; the cost shown is admin and support time. The Learn page for the Microsoft Copilot harness notes that using agents might consume Copilot Credits.
impact: Medium. Makers and the people chatting with agents see the new sign-in step, because the roadmap item says it replaces a full settings experience. Admins see nothing unless they receive tickets.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because no licence is published for this feature. | Found: To use Copilot Studio, you need one of the following configurations: - Copilot Studio user license (free). - Copilot Studio authors role in Power Platform admin center. - Microsoft 365 Copilot license - Copilot Studio trial license. | Fix: Set licensing.model to mixed and cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. Replace the blanket licensing absence in the notes, Cost and licensing, and cost rationale with: 'Copilot Studio documents access through a Copilot Studio user license requiring a tenant prepaid Copilot Credit pack subscription, the Copilot Studio authors role for applicable pay-as-you-go scenarios, a Microsoft 365 Copilot license, or a trial. The trial permits testing but not publishing. No separate entitlement for this connection experience is published.' Retain the distinct statement that a charge for the connection step itself is not stated. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout / behaviour: An agent has a tools list that makers can review. | Found: In the agent navigation bar, select the Build tab. 3. The tools list appears in the components panel on the right, below the Tools button. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-manage to sources for the advice to review each agent's tools list. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-manage
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Power Platform admin center > Security > Data and privacy > Data policy > New Policy > Next > Next > connector > three dots > Block reaches connector blocking. | Found: Select Next. The Add an environment page appears. - To add an environment to your data policy, select the environment in the Available tab, and then select Add to policy. Select Next. The Assign connectors page appears. | Fix: Include the omitted environment selection and wizard headings in both copies of the path: 'Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Available > environment > Add to policy > Next > Assign connectors > connector > three dots > Block'. The cited page also confirms the final three-dots > Block steps; this is not a nonexistent-path finding. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] Governance controls / role: A Power Platform administrator can configure the data-policy control. | Found: | Data policies | | | | | | View and manage tenant policies | Yes | Yes | Yes | No | | View and manage environment policies | Yes | Yes | Yes | No | | Fix: Add https://learn.microsoft.com/power-platform/admin/use-service-admin-role-manage-tenant to sources; its permission matrix confirms Power Platform administrators can manage tenant and environment data policies. | Source: https://learn.microsoft.com/power-platform/admin/use-service-admin-role-manage-tenant
-->
