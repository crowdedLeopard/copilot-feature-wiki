---
title: "Microsoft Purview: retention for Microsoft 365 Copilot memory"
slug: "microsoft-purview-data-lifecycle-management-retention-for-copilot-memory"
roadmapId: 569612
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap lists retention and versioning for Copilot memory in Purview as launched, but Microsoft Learn still says Purview retention does not apply to memory. Compliance admins should confirm the behaviour before relying on it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The Purview service description lists Microsoft 365 E3/E5 plus Microsoft 365 Copilot (and two other combinations) for retention policies that apply to Copilot interactions. Nothing specific to memory retention is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","data-lifecycle-management","retention","memory","m365-copilot","exchange","ediscovery"]
sources:
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Learn about retention for Copilot & AI apps"
    url: "https://learn.microsoft.com/purview/retention-policies-copilot"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "New-AppRetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569612"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569612"
    kind: "roadmap"
videos: []
related: ["ediscovery","auditing","microsoft-purview-data-lifecycle-management-legacy-teams-retention-policies-covering-copil"]
controls:
  - governs: "Retention policy for Microsoft Copilot experiences (not documented as covering memory)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "New-AppRetentionCompliancePolicy -Name \"<PolicyName>\" -Applications \"User:M365Copilot,CopilotForSecurity,CopilotinFabricPowerBI,CopilotStudio,CopilotinBusinessApplicationplatformsSales,SQLCopilot\" -ExchangeLocation All"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy"
    note: "Learn says Purview retention policies and labels don't apply to Copilot memory. The Microsoft Copilot experiences location is the one Learn documents for Copilot interactions."
  - governs: "Whether Copilot memory can be used (Enhanced personalization control)"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "The request body sets isEnabledInOrganization and optionally disabledForGroup. Beta API; delegated access needs at least the People Administrator role."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-21"
    note: "New briefing: the roadmap lists retention for Copilot memory as launched, while Learn still says Purview retention does not apply to memory."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected licensing model to not yet published, narrowed the Enhanced personalization statement to saved memories, and removed two unsupported risk statements and the eDiscovery roles checklist step."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 49
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "87c7fc80d78c3143a2e5885d17b4c58f"
---

## What's changing

The roadmap item says administrators will be able to configure retention for Microsoft 365 Copilot memory, so that historical versions of memory items are preserved for security, compliance and investigation. It describes retention and versioning support for inactive memory items, while active memory continues to be managed by the Copilot experience.

Copilot memory covers saved memories and details inferred from chat history. Both the roadmap item and Microsoft Learn say these items sit in a hidden folder in the user's Exchange mailbox.

The roadmap lists the item as Launched, with a target of September CY2026, General Availability, Worldwide (Standard Multi-Tenant) and the Web platform. Microsoft Learn does not yet describe this feature. Its page on Copilot personalization and memory is marked as preview and says retention policies and retention labels configured in Purview don't apply to Copilot memory, and that there are no admin controls to enforce retention rules specifically for Copilot memory. Those two statements disagree, and this briefing reports both. What the roadmap says about versioning of inactive items is the roadmap's description, not documented behaviour.

## Why it matters

If your organisation retains Copilot interactions for regulatory or investigation reasons, memory is a separate store of personal, inferred detail about each user. Learn says that a Purview policy such as "delete after three months" for Copilot Chat interactions does not delete memories, and the roadmap now promises retention and versioning for them. Until the two are reconciled, treat existing Copilot interaction retention policies as not covering memory.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. The practical task is to check, in a test tenant or with Microsoft support, what is and is not preserved before telling auditors that memory is covered.

## Risk assessment

**Data exposure**
- Memory items are stored in the user's Exchange mailbox in a hidden folder, and Learn says admins can find them with Purview eDiscovery or Content Search by searching item class IPM.Contact. Preserving historical versions would retain older inferred details about users, so review who holds eDiscovery roles (see /concepts/ediscovery/).

**Security & identity**
- Learn states that memory and personalisation actions don't generate audit log entries in Purview, so changes to memory cannot be reconstructed from the audit log. See /concepts/auditing/.

**Autonomy & actions**
- No change documented: the roadmap says active memory continues to be managed by the Copilot experience, and Learn says admins can't restrict what information is added to memory.

**Change & support**
- Learn and the roadmap disagree on whether Purview retention reaches memory. Helpdesk and compliance answers about "is memory retained" should wait until Microsoft updates its documentation.
- The Learn page on memory is marked preview, while the roadmap says General Availability.

## Cost and licensing

No separate meter or price for memory retention is published at the time of writing (November 2026). The Learn page on Copilot memory says memory is available to Copilot Chat users with and without a Microsoft Copilot licence.

For Purview retention policies that apply to Copilot interactions, the Microsoft Purview service description lists these licences as providing user rights: Microsoft 365 E3/E5 + Microsoft 365 Copilot; Microsoft 365 E3 + Microsoft Purview Suite + Microsoft 365 Copilot; and Microsoft 365 E3 + Microsoft E5 Information Protection and Governance + Microsoft 365 Copilot. Whether a memory retention capability uses these licences is not yet published.

Indirect cost is admin time to test retention behaviour and any extra mailbox storage for retained items; Microsoft has not published storage figures for memory.

## Scope

The roadmap lists Microsoft Purview, Worldwide (Standard Multi-Tenant), General Availability and the Web platform. It does not list US Government clouds; that is a record fact, not a statement that the feature is unavailable there.

Memory belongs to users of Copilot Chat and Microsoft 365 Copilot, and Learn says it is stored in each user's Exchange mailbox. The Enhanced personalization control is on by default, according to Learn, and when it is turned off Copilot stops applying saved memories but does not remove those saved memories. Roles needed to configure memory retention are not yet published; for ordinary retention policies, Learn points to the data lifecycle management permissions page.

## Governance guidance

### Before rollout
- Ask Microsoft support or read Message center to confirm which Purview setting, if any, controls retention of Copilot memory, since the Learn page on memory says none applies.
- List which existing retention policies include the **Microsoft Copilot experiences** location and record that Learn says they do not delete memories.

### At rollout
- Test with a pilot user: create a memory, apply the retention configuration you are evaluating, and check whether versions of inactive memory items appear in an eDiscovery search for item class IPM.Contact.
- Decide whether to keep the Enhanced personalization control on for the tenant, or disable it for a group, while retention behaviour is unconfirmed.

### After rollout
- Re-read the Learn page on Copilot personalization and memory after each Microsoft update and amend your compliance statements when its retention section changes.
- Document for auditors that memory actions are not written to the Purview audit log, per Learn.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Retention policy for Microsoft Copilot experiences (not documented as covering memory)</strong><br><small>Tenant</small><br><small class="controls__note">Learn says Purview retention policies and labels don't apply to Copilot memory. The Microsoft Copilot experiences location is the one Learn documents for Copilot interactions.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AppRetentionCompliancePolicy -Name &quot;&lt;PolicyName&gt;&quot; -Applications &quot;User:M365Copilot,CopilotForSecurity,CopilotinFabricPowerBI,CopilotStudio,CopilotinBusinessApplicationplatformsSales,SQLCopilot&quot; -ExchangeLocation All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot memory can be used (Enhanced personalization control)</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets isEnabledInOrganization and optionally disabledForGroup. Beta API; delegated access needs at least the People Administrator role.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The retention policy row governs Copilot prompts and responses. Learn does not document a memory-specific location, and its memory page says Purview retention policies and labels do not apply to memory, so do not treat this row as a memory control until Microsoft documents it. A retention policy created with New-AppRetentionCompliancePolicy needs a rule created separately with New-AppRetentionComplianceRule. The Microsoft Copilot experiences value is marked preview in the cmdlet reference.

The Enhanced personalization row controls whether memory can be used at all. It is a beta Graph API, and the least privileged supported Microsoft Entra role for delegated access is People Administrator. Microsoft Learn documents no admin centre path for it in the pages read at the time of writing (November 2026).

## Open questions

- Which Purview setting, if any, enables retention and versioning of Copilot memory, and is it part of the existing Microsoft Copilot experiences retention location? Watch the Learn page on retention for Copilot & AI apps and Message center.
- When will the Learn page on Copilot memory be updated to match the roadmap's Launched status, given that it currently says retention policies don't apply to memory?
- What counts as an inactive memory item, how many versions are kept, and for how long? The roadmap does not say.
- Is a licence beyond those listed for retention of Copilot interactions needed for memory retention, and is any storage charge made?

<!-- rationale
risk: Medium. The roadmap says memory retention has launched, but the Learn page on Copilot memory says Purview retention policies don't apply to memory, so a team could rely on a control that Learn says does not cover it.
cost: Low. The only cost the sources show is admin time and the existing Purview licences listed for retention policies that cover Copilot interactions; no separate meter or price for memory retention is published.
impact: Low. Compliance and security administrators notice it. The roadmap describes retention of inactive memory items while the Copilot experience keeps managing active memory, so end users are not described as changed.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview route Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy starts the retention-policy wizard. | Found: Sign in to the Microsoft Purview portal > Solutions > Data Lifecycle Management > Policies > Retention policies. ... Select New retention policy to start the Create retention policy configuration | Fix: For a static policy, extend the path to 'Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Choose the type of retention policy to create > Static > Choose locations to apply the policy > Microsoft Copilot experiences > Decide if you want to retain content, delete it, or both', as documented at https://learn.microsoft.com/purview/create-retention-policies. | Source: https://learn.microsoft.com/purview/create-retention-policies
- [contradicted, minor] Governance guidance: At rollout / consistency: The pilot checklist instructs readers to check an eDiscovery search, but the controls table has no corresponding search row. | Found: check whether versions of inactive memory items appear in an eDiscovery search for item class IPM.Contact. ... Table rows: Retention policy for Microsoft Copilot experiences; Whether Copilot memory can be used (Enhanced personalization control). | Fix: Remove the eDiscovery-search step from the pilot checklist; it names a control that has no row in the controls table. Do not add a row as part of this correction.
-->
