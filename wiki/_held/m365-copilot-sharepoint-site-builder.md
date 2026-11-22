---
title: "SharePoint: Copilot Site Builder creates a site after users confirm a plan"
slug: "m365-copilot-sharepoint-site-builder"
roadmapId: 576708
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a Copilot feature that builds a SharePoint site once a user reviews and confirms a site plan. Roadmap target is December CY2026. Check Copilot licences, Copilot Credits and site-creation settings."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's Create sites with AI page says users need an active Copilot licence. The Get started page lists creating entire sites and solutions under capabilities that require Copilot Credits through usage-based billing. A credit rate specific to site creation is not yet published."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["sharepoint","m365-copilot","copilot-in-sharepoint","copilot-credits","spending-policies","usage-based-billing","restricted-content-discovery"]
sources:
  - title: "Microsoft 365 Roadmap 576708"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576708"
    kind: "roadmap"
  - title: "Create sites with AI"
    url: "https://learn.microsoft.com/sharepoint/create-sites-with-ai"
    kind: "learn"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Manage site creation in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-site-creation"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","copilot-credits","spending-policies","sharepoint-html-pages"]
controls:
  - governs: "Whether Copilot and AI entry points appear on selected sites"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Needs a Microsoft Copilot licence and SharePoint Advanced Management. Affects discoverability, not permissions. Learn does not say how it applies to the Build entry point."
  - governs: "Copilot Credits limits and billing method for the spending policy covering advanced work in SharePoint"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Add spending policy > Agents and services > Advanced work in SharePoint"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. The request body sets displayName, periodLimit, perUserLimit or billingMethods. Whether Site Builder falls under Advanced work in SharePoint is not stated."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-22"
    note: "New briefing: Site Builder for SharePoint is in development, with Learn describing a plan-then-confirm flow in preview and unresolved licensing and availability."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 76 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 69
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "3a86c15fb3b9e7abb1e6ab0ec5c6be86"
---

## What's changing

The roadmap item (576708, status In development) says the feature lets users create new SharePoint sites with Copilot, and that users can review and confirm a clear site plan before Copilot builds the site. The record lists Preview and General Availability phases, a preview date of October CY2026 and a target date of December CY2026, for Worldwide (Standard Multi-Tenant) on the web. These are Microsoft's targets, not shipped dates. The record links to no Learn page.

Microsoft Learn's [Create sites with AI](https://learn.microsoft.com/sharepoint/create-sites-with-ai) page describes a flow that matches the roadmap description, and marks it as still in preview. A user sends Copilot in SharePoint a prompt that includes "create new site", or selects Build in the left navigation (new SharePoint experience). Copilot may ask clarifying questions, then proposes a plan and a visual outline that can include pages, lists, libraries, columns and views. The user refines the plan through chat, and the page says Copilot does not create anything until the user requests creation and selects Confirm.

After Confirm, the page says Copilot creates the site, configures navigation and settings, creates lists and libraries, creates pages with sample content, and adds sample documents and list items. Execution can take up to 15 minutes. During the preview, Learn lists unsupported scenarios, including complex Power Automate flows, permission and sharing set-up, column and row formatting, advanced web parts and third-party integrations.

This briefing reads the roadmap description alongside that Learn page; treat details of the final design as unconfirmed until the roadmap item moves to Launched.

## Why it matters

This is a new way to start SharePoint sites, and it spreads site creation to anyone who is allowed to create sites and holds a Copilot licence. Each confirmed plan produces a site with its own lists, libraries, pages and sample content, so expect more sites for owners and support teams to look after.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. The two Learn pages differ on availability (see Scope), and the credit question decides who pays. Decide before December CY2026 who may use it and who funds it.

## Risk assessment

**Data exposure**

- Created sites include sample pages, documents and list items. Learn lists permission and sharing set-up among the unsupported preview scenarios and shows a Finish site setup panel that recommends sharing the site as a next step, so check a new site's access before sharing it.
- Restricted Content Discovery removes AI entry points such as the Copilot button and Create pages with AI from the sites it covers, but the Create sites with AI page does not say how it applies to the Build entry point. Confirm this in a test tenant.

**Security & identity**

- Learn does not describe which identity Copilot uses to create the site and its content. Confirm this before relying on existing permission boundaries.

**Autonomy & actions**

- Creation starts only after the user asks for it and selects Confirm, according to the Create sites with AI page. Once confirmed, Copilot creates the site, navigation, lists, libraries and pages without further approval steps being described.
- Users with credits are asked to approve credit use before Copilot moves into advanced work, according to the Get started page. Whether site creation triggers that prompt is not stated.

**Change & support**

- More sites means more owners to assign and more content to govern. A creation run takes up to 15 minutes and the page tells users not to close the browser, so expect support questions about interrupted runs.
- Preview limits (no permission set-up, no complex Power Automate flows) mean users will finish some set-up by hand.

## Cost and licensing

**Licence.** The Create sites with AI page says users need an active Copilot licence and must be allowed to create SharePoint sites; the Get started page says users must have an active Microsoft 365 Copilot licence for Copilot in SharePoint.

**Meter.** The Get started page says Copilot in SharePoint uses a hybrid model: everyday capabilities are included with the Microsoft 365 Copilot licence, and advanced work requires usage-based billing and consumes Copilot Credits. It lists "Create entire sites and solutions" under the Copilot Credits column. Whether Site Builder is billed as that advanced work is not stated by Microsoft, and the Create sites with AI page does not mention credits.

**Controls on spend.** Advanced capabilities need usage-based billing enabled through a spending policy in the Microsoft 365 admin center, with available Copilot Credits. The Get started page says existing policies might include newly available services automatically if **Allow new agents and services as they become available** is on. See the spending policy row in the controls table and [Copilot Credits](/concepts/copilot-credits/).

**Not yet published.** A credit rate specific to creating a site is not yet published on the Get started page, which says consumption varies with the type and complexity of the task.

## Scope

**Who.** Users need an active Copilot licence and permission to create SharePoint sites; the Create sites with AI page says that if users are not enabled for self-service site creation, SharePoint administrators can create sites with AI on their behalf.

**Availability.** The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform. The Get started page notes that Microsoft 365 Government (GCC, GCC High, DoD), air-gapped clouds and Microsoft 365 operated by 21Vianet do not currently support Copilot in SharePoint.

**Two pages, two availability models.** The Create sites with AI page says the tenant must opt into the Copilot in SharePoint preview with the All Sites or Exclude Selected Sites configuration. The Get started page says those preview PowerShell controls (`KnowledgeAgentScope` and related parameters) are retiring, that existing settings were honoured until November 1, 2026, and that availability is then managed through Site AI settings and Restricted Content Discovery. The date has passed at the time of writing (November 2026). Which model applies to Site Builder is not stated.

**Rollout.** The roadmap target is December CY2026; Microsoft has not stated a default for this feature.

## Governance guidance

### Before rollout

- Confirm with your SharePoint administrators whether self-service site creation is enabled for the pilot users, since the Create sites with AI page lists it as a prerequisite; the setting is described on [Manage site creation in SharePoint](https://learn.microsoft.com/sharepoint/manage-site-creation).
- Decide which users need Copilot Credits. The Get started page suggests prioritising site managers and content managers, and says most other SharePoint users likely do not need credits.
- Identify sites that need review before AI features appear, and plan to use Restricted Content Discovery for them.

### At rollout

- Create or review the spending policy in the Microsoft 365 admin center, and check whether **Allow new agents and services as they become available** is on for existing policies.
- Apply Restrict content from Microsoft Copilot to sites you want kept out of AI experiences, and test whether Build still appears for users.
- Brief pilot users on the confirm step, the 15-minute run time and the preview's unsupported scenarios.

### After rollout

- Review newly created sites for ownership and sharing before they are opened to more people.
- Check spending policy limits and alerts against actual Copilot Credits use, and watch the Learn pages for a credit rate.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot and AI entry points appear on selected sites</strong><br><small>Site</small><br><small class="controls__note">Needs a Microsoft Copilot licence and SharePoint Advanced Management. Affects discoverability, not permissions. Learn does not say how it applies to the Build entry point.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Credits limits and billing method for the spending policy covering advanced work in SharePoint</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. The request body sets displayName, periodLimit, perUserLimit or billingMethods. Whether Site Builder falls under Advanced work in SharePoint is not stated.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Add spending policy › Agents and services › Advanced work in SharePoint <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Three controls apply today to Copilot in SharePoint. None is documented as a switch for Site Builder specifically.

- Restricted Content Discovery is managed by SharePoint administrators by default; the Learn page says delegation to site administrators needs a separate tenant setting. Its page states that it affects discoverability, not permissions.
- The spending policy row sets limits and the billing method. The Update spendingPolicy page lists displayName, periodLimit, perUserLimit and billingMethods as updatable properties and describes a `/beta` API that can change.
- Site creation permission and the Copilot licence are prerequisites, described in Scope and Cost and licensing, not controls over this feature's availability.

## Open questions

- Is Site Builder billed as Copilot Credits advanced work ("Create entire sites and solutions") or covered by the Microsoft 365 Copilot licence, and what is the credit rate? Watch the Copilot in SharePoint Get started page and Message center.
- Is the feature on by default for licensed users at general availability, and which availability controls apply after the preview PowerShell controls retire?
- Does Restricted Content Discovery or Site AI settings remove the Build entry point and site creation for covered sites?
- Which identity does Copilot use to create the site and content, and who becomes the site's owner?
- Will permission and sharing set-up, unsupported in preview, be supported at general availability?

<!-- rationale
risk: Medium. After a user selects Confirm, Copilot creates the site, lists, libraries, pages and sample content itself; existing site and discovery controls cover it, but users can start new sites at scale.
cost: Variable. Learn lists creating entire sites and solutions as advanced work that consumes Copilot Credits, while the Create sites with AI page names a Microsoft Copilot licence as its licence prerequisite; a rate for this feature is not yet published.
impact: Medium. Users with a Microsoft Copilot licence who are allowed to create sites notice it; Learn says SharePoint administrators can create sites with AI on behalf of users who are not.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; rationale: impact / availability: Anyone allowed to create sites who holds a Copilot licence can use this capability. | Found: A SharePoint Administrator must enable the preview for your tenant. Your tenant must opt into the preview by using the All Sites or Exclude Selected Sites configuration. | Fix: Replace the eligibility sentence in Why it matters and its counterpart in the impact rationale with: 'The preview page requires a Copilot licence, permission to create sites and tenant preview enablement using All Sites or Exclude Selected Sites; the Get started page lists creating entire sites under capabilities requiring Copilot Credits.' Keep Scope's explanation that the two pages differ on availability. | Source: https://learn.microsoft.com/sharepoint/create-sites-with-ai
- [contradicted, blocker] Cost and licensing: Meter; controls[1].note; Open questions / absence: Microsoft has not stated whether Site Builder is advanced work requiring Copilot Credits. | Found: Requires Copilot Credits ... Create entire sites and solutions | Fix: Replace the prose caveat with: 'The Get started page lists creating entire sites and solutions as advanced work requiring Copilot Credits.' Replace the controls[1] note's final sentence with the same sentence; keep its Beta API and request-body text. Narrow the first Open question to: 'What is the credit rate for creating a site? Watch the Copilot in SharePoint Get started page and Message center.' | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, blocker] Risk assessment: Autonomy & actions / absence: It is not stated whether site creation triggers the credit-approval prompt. | Found: Requires Copilot Credits ... Create entire sites and solutions ... When a prompt requires an advanced capability ... Copilot asks the user to approve credit use before continuing. | Fix: Replace 'Whether site creation triggers that prompt is not stated' with: 'The Get started page lists creating entire sites and solutions among these advanced capabilities.' | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, blocker] Governance controls: prerequisites sentence / applicability: Site creation permission and the Copilot licence are not controls over this feature's availability. | Found: Users need an active Copilot license to create sites with AI. ... Users must be allowed to create SharePoint sites in your organization. | Fix: Replace the last Governance controls bullet with: 'Site creation permission and the Copilot licence determine eligibility to create sites with AI; they are prerequisites rather than a dedicated Site Builder switch.' | Source: https://learn.microsoft.com/sharepoint/create-sites-with-ai
- [unsupported, major] Why it matters: Each confirmed plan / behaviour: Every confirmed plan produces a site with its own lists, libraries, pages and sample content. | Found: Searched: 'SharePoint create sites with AI Copilot identity permissions site owner creation Confirm advanced work credit approval'. Read Create sites with AI: the plan 'can include' these components and creation follows the plan; it does not guarantee every confirmed plan contains all of them. | Fix: Replace 'Each confirmed plan produces a site with its own lists, libraries, pages and sample content' with 'Copilot creates a site according to the confirmed plan, which can include lists, libraries, pages and sample content'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Controls on spend; Governance guidance / behaviour: Existing policies may automatically include new services when Allow new agents and services as they become available is enabled. | Found: Existing cost management policies might automatically include newly available services if the Allow new agents and services as they become available option is turned on for the policy. | Fix: Add after this sentence: 'The usage-based billing overview calls this setting Auto-apply new services and says it is enabled by default for spending policies.' Cite https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits, whose Services managed by usage-based billing section uses that label. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [supported, minor] controls[1].ui / admin-path: The route Copilot > Cost management > Add spending policy > Agents and services > Advanced work in SharePoint reaches the spending-policy limits and billing control. | Found: Under Access scope, choose whether the policy applies to all users or to specific security groups. ... Under Agents and services, select Advanced work in SharePoint. ... Set Limits and alerts for the policy, choose a Billing method | Fix: Replace controls[1].ui.path and its rendered counterpart with 'Copilot > Cost management > Add spending policy > Access scope > Agents and services > Advanced work in SharePoint > Limits and alerts > Billing method'. The current route prints correct steps but omits the scope step and stops before the limits and billing method. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [unsupported, minor] rationale: risk / applicability: Existing site and discovery controls cover Site Builder. | Found: Searched: 'SharePoint create sites with AI Site Builder default enable disable Build Restricted Content Discovery Site AI settings'; 'SharePoint Build Restricted Content Discovery'. Read Create sites with AI, Get started, Restricted Content Discovery and Manage site creation; no blanket coverage sta | Fix: Replace the risk rationale with: 'Medium. After a user selects Confirm, Copilot creates the site, lists, libraries, pages and sample content itself; permission and sharing set-up are unsupported in preview, so new sites need review before sharing.'
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to check self-service site creation, but no controls row covers that setting. | Found: Confirm with your SharePoint administrators whether self-service site creation is enabled for the pilot users ... Table rows: Whether Copilot and AI entry points appear on selected sites; Copilot Credits limits and billing method | Fix: Remove the first Before rollout checklist bullet about checking self-service site creation, leaving the existing prerequisite and reference in Scope and Cost and licensing. This resolves the checklist/table mismatch without adding a control row.
-->
