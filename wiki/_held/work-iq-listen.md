---
title: "Work IQ: Listen lets agents subscribe to workplace events"
slug: "work-iq-listen"
roadmapId: 570867
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Work IQ Listen notifies third-party agents when events occur, such as an unanswered flagged email or a missed meeting. Learn documents it as a public preview billed in Copilot Credits; admins should review before pilots."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft says Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing in Copilot Credits. The Listen page says it uses existing Work IQ credit consumption rates and gives no credit figure."
audiences: ["m365-admin","security","finops","service-owner"]
tags: ["work-iq","mcp","agents","triggers","copilot-credits","usage-based-billing"]
sources:
  - title: "Work IQ Listen developer guide (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/listen"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "June 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-june"
    kind: "learn"
  - title: "Microsoft 365 Roadmap: Work IQ: Listen"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570867"
    kind: "roadmap"
videos: []
related: ["work-iq","work-iq-agent-policy-governance","autonomous-agents","copilot-credits","work-iq-retrieve"]
controls:
  - governs: "Whether the Work IQ MCP server, which Listen runs through, is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "AI Administrator role. Applies to the entire Work IQ MCP server, not to Listen alone."
  - governs: "Work IQ MCP tenant policy for MCP tool requests"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "On or off for the tenant; can take up to 24 hours to apply. Policy cannot grant access beyond the user's own."
  - governs: "Copilot Credit spending and consumption for Work IQ API"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta, delegated only. The request body can update periodLimit, perUserLimit and billingMethods."
  - governs: "Tenant switch to turn Work IQ Listen on"
    scope: "tenant"
    ui: null
    api: null
    note: "The Listen page says Listen must be turned on for the tenant during the preview and to contact the Listen team."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-21"
    note: "New briefing: roadmap item for Work IQ Listen, with the public-preview guide's event catalogue, Copilot Credit billing and the Work IQ MCP controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 109 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 109
  confirmed: 108
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "666e1e1e56c0f0f0815230af854d8a4b"
---

## What's changing

Work IQ Listen is planned to let agents listen for supported Work IQ events and respond as relevant changes occur. The roadmap item gives the status as In development, a preview date of November CY2026 and a target of January CY2027, for Worldwide (Standard Multi-Tenant) on Web, with General Availability and Preview as release phases. These dates are Microsoft's targets.

Microsoft Learn already documents Listen as a public preview: third-party agents and apps subscribe to workplace events instead of polling a mailbox or calendar. Listen uses a 'doorbell' model. When an event matches, it calls the developer's registered HTTPS endpoint with identifiers and an opaque event reference, and the agent then fetches the event through the Work IQ MCP server with the user's delegated token. The roadmap status (In development) and the Learn page (public preview, must be enabled for the tenant) are reported as each gives them. The Learn page describes the preview; schemas, tool names and payload fields can change before general availability.

The preview catalogue has seven event scenarios: a flagged email still unanswered, a mention awaiting a response, a shared file not reviewed, an upcoming one-on-one meeting, a missed meeting, a meeting recap that assigns the user action items, and an upcoming meeting with external guests. Availability can vary by tenant. Events fire after their condition has held for a period of time, and only once per condition.

The preview supports only the Work IQ MCP server with delegated authentication; REST, A2A and app-only access are not available. Events cannot be filtered on content, and the page lists no ordering, exactly-once, replay, test-event or latency commitment.

## Why it matters

Listen turns Work IQ from something an agent asks into something that can start an agent. A developer, inside your organisation or at a vendor, can ask for an agent to be woken by a user's mail, chat, file and meeting activity. That moves the question for a service owner from 'what may this agent read when asked?' to 'which agents may be started by what my users do?'.

Microsoft has not stated what happens on arrival at general availability; the Learn page says only that, during the preview, Listen must be turned on for the tenant. Treat this as a capability to review before the first pilot rather than a change that needs action today, and decide beforehand whether the Work IQ MCP server, its tenant policy and Copilot Credit billing are open to such pilots.

## Risk assessment

**Data exposure**

- A notification carries identifiers and an opaque event reference, not work content. The agent then fetches the event and related items such as the flagged message, shared file or meeting recap with the user's delegated identity, so what it can read follows that user's permissions, sensitivity labels and the Work IQ MCP tenant policy. The notification itself goes to an HTTPS endpoint the developer controls, and the guide says to treat event references as opaque and sensitive.
- Meeting recaps and action items can contain AI-generated content, so an agent that acts on them can pass on a wrong owner or date.

**Security & identity**

- Access is delegated: the guide requires delegated permissions with admin and user consent and states that app-only access is not supported. The consent decision for the developer's Microsoft Entra app registration is where an organisation decides which agents may use Listen.
- The guide does not specify the challenge response format or callback authentication contract, so confirm both with the Listen team before an app receives live notifications.

**Autonomy & actions**

- A subscription starts an agent with no user in a conversation. The guide tells developers to prepare outcomes privately and to get the user's explicit approval for the exact action before sending, sharing, posting or scheduling; it lists the approval experience among the components the developer builds, so it is the developer's design and not a tenant setting.
- Delivery is at least once, so an agent that acts on every notification can repeat an action unless it deduplicates on the keys the guide lists.
- When the Work IQ MCP policy is on, mutation operations such as create, update, delete and action requests are not allowed by default.

**Change & support**

- Preview schemas and tool names can change, and the preview has no test-event API, so pilots depend on real activity in a test tenant.
- The guide does not specify how a subscription is cancelled, and disabling a receiver does not cancel a subscription on the service side, so abandoned pilots can leave subscriptions behind.

## Cost and licensing

**Licence.** The Work IQ overview states that Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing. Microsoft's June 2026 partner announcement adds that there is no separate Work IQ API subscription, SKU or per-user licence. The Listen page lists no licence among its requirements.

**Meter.** Copilot Credits. The Listen page says Listen uses existing Work IQ credit consumption rates: creating a subscription is subject to the Work IQ Tool API rate, notifications that wake the agent are not charged during the preview, and fetching events and related content is charged as standard Work IQ tool calls. Preview pricing can change before general availability. Work IQ API usage consumes Copilot Credits shared with other eligible services.

**Where it is managed.** The Copilot Credits overview names Work IQ API among the services whose consumption and spending admins manage under Copilot > Cost management in the Microsoft admin center; the controls table gives the path and the Graph call for spending policies. Enabling Work IQ needs a usage-based billing plan with an Azure subscription and resource group.

**Indirect costs.** The developer builds a callback receiver, a worker, an approval experience, a state store and, as recommended, a durable queue; that is engineering and hosting cost for whoever builds the agent.

**Not yet published.** The Listen and Work IQ overview pages give no credit figure for the Work IQ Tool API rate; the overview points to the Work IQ licensing page for details. Whether notifications stay uncharged after the preview is Not yet published.

## Scope

**Users and licences.** Each subscription belongs to the user whose work the event describes, and one person's agent does not receive another person's events. No licence is named on the Listen page; billing is by Copilot Credits (see Cost and licensing).

**Roles.** The Work IQ enablement page requires a user with the Global Administrator role for the one-time Work IQ setup. The Work IQ MCP server access page lists the AI Administrator role for settings in the Microsoft 365 admin center. The policy page names no role beyond an account with permission to manage tenant-level Work IQ or Copilot settings.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform.

**Prerequisites in the preview.** Work IQ enabled in the tenant, Listen turned on for the tenant (the page says to contact the Listen team), the Work IQ MCP server and an MCP client, a Microsoft Entra app registration with delegated permissions and admin and user consent, and a publicly reachable HTTPS callback endpoint.

**Out of scope in the preview.** REST, A2A and app-only access, events outside the seven catalogue scenarios, and filtering events on content.

## Governance guidance

### Before rollout

- Ask developers and vendors which of the seven event scenarios they want, which users they would subscribe and where their HTTPS callback is hosted.
- Review whether the Work IQ MCP server is available and whether the Work IQ MCP tenant policy is on, using the first two rows of the controls table, because Listen is reached only through that server.
- Confirm the usage-based billing plan and Azure subscription that Work IQ needs, and agree who watches Copilot Credit consumption in Cost management.
- Require each developer to state the delegated Work IQ permissions their app registration needs, since the guide calls for admin and user consent.

### At rollout

- Contact the Listen team, as the Listen page directs, if a pilot needs Listen turned on for the tenant; the Learn page documents no admin centre setting for it.
- Limit the pilot to named test users and synthetic data, because events fire from real activity.
- Ask pilot developers to show the callback authentication approach the Listen team confirmed, their deduplication keys and the approval step before any visible action.

### After rollout

- Check Copilot Credit consumption for Work IQ API in Cost management after the first week of the pilot.
- Ask the Listen team how to cancel each pilot subscription before the pilot starts, because the guide does not specify the operation.
- Re-read the Listen page before each pilot phase, as schemas, tool names and payload fields can change during the preview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Work IQ MCP server, which Listen runs through, is available</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator role. Applies to the entire Work IQ MCP server, not to Listen alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP tenant policy for MCP tool requests</strong><br><small>Tenant</small><br><small class="controls__note">On or off for the tenant; can take up to 24 hours to apply. Policy cannot grant access beyond the user's own.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot Credit spending and consumption for Work IQ API</strong><br><small>Tenant</small><br><small class="controls__note">Beta, delegated only. The request body can update periodLimit, perUserLimit and billingMethods.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch to turn Work IQ Listen on</strong><br><small>Tenant</small><br><small class="controls__note">The Listen page says Listen must be turned on for the tenant during the preview and to contact the Listen team.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Listen-specific switch, setting or admin API is documented, so the controls are the ones that govern the Work IQ MCP server it runs through. The Block control applies to the entire Work IQ MCP server, not to Listen alone.

The tenant policy applies across the tenant and can take up to 24 hours to take effect. Policy cannot grant access beyond what the signed-in user is already allowed to access. Whether the policy's default rule on mutation operations covers the creation of a Listen subscription is not stated on the policy or Listen pages.

The spending policy call is a Microsoft Graph /beta/ call and supports delegated permissions only; the request body can update periodLimit and perUserLimit. Whether a limit ends Work IQ API use is not read on these pages, so do not assume a limit stops it.

## Open questions

- Will Listen be on or off by default for tenants at general availability, and will administrators get a tenant setting for it? Watch the Listen page and Message center.
- Does the Work IQ MCP policy's default rule on mutation operations apply to creating a Listen subscription through `create_entity`? Watch the policy governance page for Work IQ MCP.
- What credit rate applies to the Work IQ Tool API calls Listen uses, and will notifications stay uncharged after the preview? Watch the Work IQ licensing page.
- How are subscriptions cancelled, and can an administrator see or remove the subscriptions in a tenant? Watch the Listen page.
- What are the challenge response format and callback authentication contract? The guide says to confirm them with the Listen team.

<!-- rationale
risk: Medium. Listen wakes a developer's HTTPS endpoint on mail, chat, file and meeting conditions, and the agent then reads that user's context through Work IQ. The guide lists the approval step before visible actions among components the developer builds.
cost: Variable. The meter is Copilot Credits: Listen uses existing Work IQ rates, and fetching events and related content is charged as standard Work IQ tool calls. Notifications are not charged during the preview.
impact: Low. In the documented preview, the people who notice are developers and admins setting it up; each subscription covers one user's own events.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: mutation caveat; Open questions: create_entity / absence: Whether the policy's default mutation restriction covers creating a Listen subscription is not stated. | Found: A separate tenant policy layer evaluates each tool request and blocks mutation operations by default. Administrators can enable supported create, update, delete, and action requests through tenant policy. | Fix: Replace the mutation caveat with: 'Listen creates subscriptions with create_entity. Work IQ MCP tenant policy evaluates each tool request and blocks mutation operations by default; administrators can enable supported creation requests through tenant policy. Exact policy behaviour can depend on tenant configuration.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference alongside the existing Listen and policy pages, and remove the corresponding Open questions bullet. This states the documented general reach without inventing a Listen-specific exception or guaranteed tenant outcome. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / applicability: Work IQ reads enforce sensitivity labels. | Found: Microsoft 365 permissions, sensitivity labels, and compliance policies are enforced automatically. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview to sources for the statement that sensitivity labels govern Work IQ reads. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview
- [supported, minor] controls[1].ui / admin-path: Microsoft 365 admin center > Agents > Tools > Work IQ MCP > Policy reaches tenant policy settings. | Found: In the left navigation, select Agents > Tools. In the tools registry, select Work IQ MCP. On the Work IQ MCP details pane, select the Policy tab when it's available. | Fix: Keep 'Agents > Tools > Work IQ MCP > Policy'; append to controls[1].note: 'The Policy tab is shown when available; review the current policy state there, then turn policy on or off as needed.' The cited page documents this final action but supplies no further setting label. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] controls[2].note / command: The request body can update billingMethods. | Found: When changing stored non-pay-as-you-go funding to include pay-as-you-go, supply a complete billingInstrument; no separate billing endpoint or action is used. | Fix: Append to controls[2].note: 'Changing non-pay-as-you-go funding to include pay-as-you-go also requires a complete billingInstrument with billingSubscriptionId, billingResourceGroup and billingRegion.' Keep the method and path unchanged. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update
- [supported, minor] Governance controls: spending limit caveat / absence: The cited billing overview and spending policy update reference do not establish whether a limit ends Work IQ API use. | Found: Searched: "Work IQ" "licensing" "Tool API" credits rate. Read billing overview and spendingPolicy update in full: no Work IQ limit enforcement rule. Search excerpts from Plan licensing and cost additionally state that retries do not resolve exhausted spending limits. | Fix: Replace 'Whether a limit ends Work IQ API use is not read on these pages, so do not assume a limit stops it' with 'A spending policy defines limits, not a reserved credit allocation; repeated retries will not resolve an exhausted spending limit.' Cite https://learn.microsoft.com/plugins/cost-considerations. The original is narrowly true about its two references but omits the additional documented Work IQ guidance.
-->
