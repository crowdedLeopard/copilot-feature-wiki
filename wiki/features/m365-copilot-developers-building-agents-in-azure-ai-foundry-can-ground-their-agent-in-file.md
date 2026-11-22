---
title: "Microsoft Foundry: ground agents in SharePoint files through the SharePoint tool"
slug: "m365-copilot-developers-building-agents-in-azure-ai-foundry-can-ground-their-agent-in-file"
roadmapId: 476496
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Developers building agents in Microsoft Foundry can ground them in SharePoint files under each user's own permissions. Needs a Copilot licence or Retrieval API pay-as-you-go; preview. Tenant-level default not stated."
status: "in-development"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "June CY2025"
previewDate: "March CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "The Learn prerequisites give two routes: a Microsoft 365 Copilot licence, or Retrieval API pay-as-you-go for users without one (preview, $0.10 per API call). Both are on the Learn pages cited below."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["microsoft-foundry","sharepoint","knowledge-grounding","pay-as-you-go","m365-copilot","agents","extensibility","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 476496"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=476496"
    kind: "roadmap"
  - title: "Use SharePoint tool with the agent API (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/sharepoint"
    kind: "learn"
  - title: "Overview of the Microsoft 365 Copilot Retrieval API"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api-reference/retrieval-api-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot Retrieval API pay-as-you-go consumption (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/ai-services/retrieval/paygo-retrieval"
    kind: "learn"
  - title: "Role-based access control for Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "az role assignment"
    url: "https://learn.microsoft.com/cli/azure/role/assignment"
    kind: "learn"
videos: []
related: ["knowledge-grounding","copilot-credits"]
controls:
  - governs: "Who holds the Foundry User role needed to use the SharePoint tool"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "Foundry resource > Access control (IAM)"
      docs: "https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry"
    api:
      kind: "azure-cli"
      call: "az role assignment create --assignee <assignee> --role \"53ca6127-db72-4b80-b1b0-d745d6d5456d\" --scope <scope>"
      docs: "https://learn.microsoft.com/cli/azure/role/assignment"
    note: "The SharePoint tool page requires at least Foundry User for developers and end users. Role assignment needs rights to assign roles. Does not limit which sites are read."
  - governs: "Whether users without a Microsoft 365 Copilot licence can use Retrieval API pay-as-you-go"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing & usage > Pay-as-you-go > Microsoft 365 Copilot Retrieval API"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/ai-services/retrieval/paygo-retrieval"
    api: null
    note: "Preview. Takes about two hours to propagate; charges apply to calls made while disablement propagates. Needs an Azure subscription and resource group, with Owner or Contributor access on the subscription in good standing."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-02-06T00:15:02"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item; maps the roadmap's Tenant Graph grounding to the Foundry SharePoint tool (preview) and records its licence routes, pay-as-you-go price and two controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected: the pay-as-you-go Azure prerequisite now names Owner or Contributor access; the summary no longer says nothing is forced on admins; the CLI example uses the Foundry User role ID."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 64
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "ac15f4d320f09c09c212cf5ffea0fb7b"
---

## What's changing

The roadmap item says developers building agents in Azure AI Foundry can ground their agent in files stored in SharePoint. Its description calls this "Tenant Graph grounding", which gives agents relevant information from Microsoft Graph, including SharePoint files, and says the capability is now available to Foundry developers.

Microsoft Learn does not use the term "Tenant Graph grounding" on the page that appears closest to this item: the SharePoint tool (preview) for Microsoft Foundry Agent Service. That page describes an agent that can retrieve relevant text from SharePoint documents the user can access and then answer from it, using identity passthrough (On-Behalf-Of) so SharePoint permissions apply to every request. This briefing treats that page as the best match and flags the mapping in Open questions.

As documented, a developer adds the SharePoint tool to an agent, creates a SharePoint connection that holds a site URL or folder URL, and runs the agent with the signed-in user's identity. Limits on the Learn page include one SharePoint tool per agent, text-only retrieval, at most 25 results and 200 requests per user per hour, and no support when the agent is published to Microsoft Teams.

The roadmap record shows status In development, with a preview target of March CY2025 and a general availability target of June CY2025, and lists Worldwide (Standard Multi-Tenant), the Developer platform and the release phases General Availability, Preview and Targeted Release. Those dates are Microsoft's targets. The Learn page marks the SharePoint tool as preview and says the preview has no service-level agreement, which differs from a status of In development with a June CY2025 target that has already passed.

## Why it matters

This puts SharePoint content in front of agents that developers build outside Microsoft 365 Copilot itself. For a service owner the questions are who may build such agents, which SharePoint sites they will read, and who pays when the people using them do not hold a Microsoft 365 Copilot licence.

Microsoft has not stated what happens on arrival at tenant level, so no source supports saying that nothing changes or that admins must opt in. What the Learn page does show is that a developer has to add the tool and a connection to each agent. Plan on SharePoint permission hygiene and the licence route being settled before developers start, because the tool applies whatever access the signed-in user already has.

## Risk assessment

**Data exposure**
- The tool retrieves text from the SharePoint site or folder named in the connection, using the signed-in user's identity, so SharePoint permissions continue to apply to every request. An over-shared site is as readable to the agent as it is to the user. The Learn page tells developers to check one user who can read a document and one who cannot before making the agent available.
- With pay-as-you-go enabled, any app in the tenant that has the required Retrieval API permissions can call the Retrieval API on behalf of a user who has pay-as-you-go enabled, which widens who can trigger retrieval beyond the Foundry tool.

**Security & identity**
- Only user identity authentication is supported; app-only (service principal) authentication is not. The SharePoint site and the Foundry project must be in the same Microsoft Entra tenant, and cross-tenant token exchange is not supported.
- Developers and end users need at least the Foundry User role and READ access to the SharePoint site. Foundry role assignment is the access gate on the Azure side (row 1 of the table).

**Autonomy & actions**
- The tool as documented retrieves text extracts for the agent to answer from. What an agent does with an answer depends on how its developer built it, which this tool page does not cover.

**Change & support**
- The Learn page is marked preview, and Microsoft's preview terms say previews carry no service-level agreement and are not recommended for production workloads. Retrieval API pay-as-you-go is also a preview.
- Expect throttling at 200 requests per user per hour and a 25-result ceiling per call, and expect agents published to Microsoft Teams not to work with the tool.

## Cost and licensing

**Licence.** The Learn prerequisites say developers and end users have a Microsoft 365 Copilot licence, as the Microsoft Copilot Retrieval API requires. The Retrieval API overview says the API is available at no extra cost to users with a Microsoft 365 Copilot add-on licence.

**Meter.** For users without that licence, the SharePoint tool can be used through Retrieval API pay-as-you-go consumption (preview). Billing is by the number of API calls that applications in the tenant make to the Retrieval API on behalf of non-Copilot-licensed users with pay-as-you-go enabled. The preview price is $0.10 per API call, under the meter named "Pay as you go Copilot Credit". Usage is visible as meter events in the Azure subscription the customer chooses. Pay-as-you-go needs an Azure subscription and resource group, with Owner or Contributor access on the subscription in good standing, a Microsoft 365 tenancy with admin access, and at least one Microsoft 365 Copilot licence in the tenant before enablement and during use.

**Not covered here.** Pay-as-you-go does not cover user-level data sources such as OneDrive. Costs of the Foundry project itself are outside the pages this briefing relies on.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Developer platform. Microsoft Copilot (Microsoft 365) is the product named on the record. Nothing in the record lists other clouds.

The Learn page applies to developers and end users of an agent built in Microsoft Foundry Agent Service: each needs the Foundry User role on the Foundry project and READ access to the SharePoint site, and either a Microsoft 365 Copilot licence or pay-as-you-go. The SharePoint tenant and Foundry project must be in the same Microsoft Entra tenant. The connection is scoped to one site or folder URL, and an agent can have one SharePoint tool. SDK support is listed for Python, C#, JavaScript, Java and REST.

## Governance guidance

### Before rollout
- Review sharing and permissions on the SharePoint sites developers plan to connect, because the tool applies each signed-in user's existing access.
- Decide the licence route for developers and end users: Microsoft 365 Copilot licence, or Retrieval API pay-as-you-go (row 2).
- Confirm that the Foundry project and the SharePoint tenant are in the same Microsoft Entra tenant.
- Grant the Foundry User role only to developers and testers who need it (row 1).

### At rollout
- Run the Learn page's permission-trimmed retrieval check with one user who can read a test document and one who cannot, before the agent is made available.
- Allow about two hours for pay-as-you-go enablement or disablement to propagate, and expect the first API call after enablement to possibly fail.
- Keep each connection pointed at a specific site or folder URL rather than a broad location.

### After rollout
- Review Retrieval API meter events in the Azure subscription chosen for pay-as-you-go.
- Re-check the role assignments on the Foundry resource and project when developers change teams.
- Watch the roadmap item and the Learn page for the move from preview to general availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds the Foundry User role needed to use the SharePoint tool</strong><br><small class="controls__note">The SharePoint tool page requires at least Foundry User for developers and end users. Role assignment needs rights to assign roles. Does not limit which sites are read.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Foundry resource › Access control (IAM) <a href="https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az role assignment create --assignee &lt;assignee&gt; --role &quot;53ca6127-db72-4b80-b1b0-d745d6d5456d&quot; --scope &lt;scope&gt;</code> <a href="https://learn.microsoft.com/cli/azure/role/assignment" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users without a Microsoft 365 Copilot licence can use Retrieval API pay-as-you-go</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Takes about two hours to propagate; charges apply to calls made while disablement propagates. Needs an Azure subscription and resource group, with Owner or Contributor access on the subscription in good standing.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing &amp; usage › Pay-as-you-go › Microsoft 365 Copilot Retrieval API <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/ai-services/retrieval/paygo-retrieval" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Foundry User is the minimum role the SharePoint tool page names. The Foundry RBAC page also lists Foundry Agent Consumer as a least-privilege role for users who only interact with agents; whether it is enough for this tool is not stated on the SharePoint tool page.

Pay-as-you-go applies to Retrieval API calls made for non-Copilot-licensed users, and after it is enabled any app in the tenant with the required Retrieval API permissions can call the API on behalf of a pay-as-you-go user. Disabling takes about two hours to propagate, and charges apply to calls made during that time.

SharePoint's Restricted Content Discovery governs organisation-wide search and Microsoft Copilot discovery for selected sites. Its page does not name the Retrieval API or Foundry, so whether it limits this tool is an open question.

## Open questions

- Is the roadmap's "Tenant Graph grounding" the same capability as the SharePoint tool (preview) in Foundry Agent Service? Watch the roadmap item and the Foundry SharePoint tool page.
- When will the roadmap status move from In development, given that its June CY2025 target has passed and Learn already documents a preview? Watch the roadmap item.
- Does SharePoint Restricted Content Discovery, or another tenant search restriction, limit what the Foundry SharePoint tool can retrieve? Watch the Restricted Content Discovery page.
- What happens on arrival at tenant level, and is there an administrator switch for the tool in Microsoft 365? Watch Message center and the Learn page.
- Is there a published way to enable Retrieval API pay-as-you-go by script, and a published spending limit? Watch the pay-as-you-go page.

<!-- rationale
risk: Medium. Agents retrieve SharePoint text under each signed-in user's permissions, so existing oversharing would show up in agent answers; delegated identity and SharePoint permissions are the main control.
cost: Variable. Users without a Microsoft 365 Copilot licence are billed pay-as-you-go through Azure at a preview price of $0.10 per Retrieval API call; users with a Copilot add-on licence have no extra Retrieval API charge.
impact: Low. The roadmap item is aimed at developers building agents in Foundry, a small group, plus whoever uses the agents they build.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Foundry User assignments can be managed in Azure portal at Foundry resource > Access control (IAM). | Found: In the Azure portal, open your Foundry resource and go to Access control (IAM). Create a role assignment for Foundry User, set Members to User, group, or service principal, select your user principal | Fix: The path stops on the correct page. Extend controls[0].ui.path and its rendered equivalent to 'Foundry resource > Access control (IAM) > role assignment > Foundry User > Members > User, group, or service principal > user principal', following https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry. | Source: https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry
- [supported, minor] controls[1].ui / admin-path: Retrieval API pay-as-you-go is enabled or disabled at Microsoft 365 admin center > Copilot > Billing & usage > Pay-as-you-go > Microsoft 365 Copilot Retrieval API. | Found: To enable and disable the pay-as-you-go consumption service, in the Microsoft 365 admin center, go to Copilot > Billing & usage > Pay-as-you-go > Microsoft 365 Copilot Retrieval API. | Fix: Keep the feature-specific documented path, but append to controls[1].note: 'The general setup page instead routes through Copilot > Cost management > Classic Billing & usage > Pay-as-you-go > service > Manage billing policy connections > Connection status (Connected).' Cite https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot, which gives that alternative route. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/ai-services/retrieval/paygo-retrieval
- [contradicted, minor] Governance guidance; Governance controls table / consistency: Every control the governance checklist asks readers to review or configure is represented in the controls table. | Found: Review sharing and permissions ... Keep each connection pointed at a specific site or folder URL ... Review Retrieval API meter events ... Table rows: Who holds the Foundry User role; Whether users without a Microsoft 365 Copilot licence can use Retrieval API pay-as-you-go. | Fix: Remove the three checklist bullets beginning 'Review sharing and permissions', 'Keep each connection pointed', and 'Review Retrieval API meter events': these name controls absent from the table. Their underlying facts already appear in the risk, scope and cost sections; do not add control rows.
-->
