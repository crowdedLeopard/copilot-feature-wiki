---
title: "Microsoft Purview DLP: Security Copilot insights on policy coverage (GCC, GCC High, DoD)"
slug: "data-loss-prevention-dlp-policy-change-insights-with-security-copilot"
roadmapId: 472031
topic: "governance"
products: ["Microsoft Purview"]
summary: "Planned for September CY2027: DLP admins in GCC, GCC High and DoD could ask Security Copilot to summarise how selected DLP policies are set up. It is read-only and needs a Security Copilot licence; nothing is stated about arrival."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2027"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says the organisation must be licensed for Microsoft Security Copilot. Microsoft 365 E5 and E7 customers get 400 SCUs a month per 1,000 paid user licences, up to 10,000, at no additional cost; other customers use the existing Security Copilot pricing model."
audiences: ["security","compliance"]
tags: ["dlp","purview","security-copilot","copilot-control-system","classifiers","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 472031"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=472031"
    kind: "roadmap"
  - title: "Test your Data Loss Prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    kind: "learn"
  - title: "Security Copilot in Microsoft Purview Overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-overview"
    kind: "learn"
  - title: "Manage plugins in Microsoft Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-plugins"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Configure Copilot settings with the owner role"
    url: "https://learn.microsoft.com/copilot/security/owner-settings"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-healt-us-government","sensitive-information-types"]
controls:
  - governs: "Whether the Purview source is enabled in Security Copilot, which the embedded Purview experiences need"
    scope: "other"
    ui:
      surface: "Microsoft Security Copilot"
      path: "Sources > Manage plugins > Purview"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-overview"
    api: null
    note: "Learn says the Purview source is enabled by default and must be on for standalone and embedded experiences. Not specific to policy insights."
  - governs: "Which preinstalled Security Copilot plugins are available to all users or restricted to owners only"
    scope: "tenant"
    ui:
      surface: "Microsoft Security Copilot"
      path: "Owner > Plugin settings"
      docs: "https://learn.microsoft.com/copilot/security/manage-plugins"
    api: null
    note: "Owner role. Settings apply to standalone and embedded experiences; Learn warns that restricting access is immediate for all users. The page does not label the preinstalled-plugin option."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-09T22:36:54"
changes:
  - date: "2026-11-21"
    note: "New briefing: Security Copilot policy insights for Purview DLP in GCC, GCC High and DoD, targeted September CY2027 and In development."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 67 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 60
  unconfirmed: 3
  contradicted: 4
  attempts: 1
  hash: "14cc0d28fe8f7ce7bf0d1eb7b427b6d7"
---

## What's changing

The roadmap item says Copilot for Security in Data Loss Prevention (DLP) will be able to summarise DLP policies, so that DLP administrators can see how policies cover locations, classifiers and notifications, across all policies or a selected few. Administrators would use prompts to get a deeper view of how a policy is configured. The item is listed as In development, with a General Availability target of September CY2027, for GCC, GCC High and DoD on the web. The roadmap record gives no more information link and no preview date.

Microsoft Learn describes a preview Security Copilot skill that matches this description, although the roadmap does not link to it. "Get insights with Copilot" is embedded in the Microsoft Purview DLP policy page. An administrator selects one or several policies and selects the **Get insights with Copilot** button. Learn says the response covers where the policies look for sensitive information, what kind of sensitive information they look for, what scenarios trigger them, how end users are affected and how admins are notified. Administrators can then pivot by administrative unit, by the locations DLP protects and by the types of data classified.

The Learn page marks this feature as preview and does not say which Microsoft clouds it covers. Treat its behaviour as the preview's, not as the final GCC, GCC High and DoD design, and treat the roadmap item as a plan.

## Why it matters

This is a review aid for DLP policy owners, not an enforcement change. Policies accumulate across locations, rules and notification settings, and the feature is aimed at the question "what are these policies actually doing?", which the roadmap says helps administrators align their data posture regularly and correct it. Microsoft has not stated what happens on arrival, so no source says existing behaviour changes: the feature adds an analysis option and leaves policies as they are.

The practical decisions are about licensing and access: whether your tenant has Security Copilot, who holds the role that reaches the feature, and how much of your SCU allowance this kind of query is allowed to use.

## Risk assessment

**Data exposure**
- Security Copilot processes Microsoft 365 data to answer prompts. Microsoft's inclusion page says relevant Customer Data may be copied, processed and stored by Security Copilot to provide responses, and that access is scoped to the products and permissions the organisation has configured. DLP policy definitions (locations, classifiers, notification recipients) become input to those responses.
- The Security Copilot owner settings let an owner stop sharing Microsoft 365 service data with Copilot; the inclusion page says the organisation then cannot use Copilot with Microsoft products such as Microsoft Purview.

**Security & identity**
- Learn lists the Information protection admin role as the prerequisite for the preview skill. Check who holds that role before the feature arrives, because it decides who can read policy summaries.
- Microsoft Learn describes the preview skill as generating information about selected policies; it does not describe it changing them.

**Autonomy & actions**
- No change in the sources read: the feature summarises and the administrator corrects policies by the existing DLP route. Nothing in the roadmap text says it edits policies.

**Change & support**
- Summaries are AI-generated, so help-desk and compliance teams should treat them as a prompt to check the policy itself, not as the record of its configuration.
- Microsoft documents the Purview source in Security Copilot as a switch that affects both the standalone and embedded experiences; turning it off to control this feature also removes other embedded Purview Security Copilot features.

## Cost and licensing

Learn says the organisation must be licensed for Microsoft Security Copilot to use the preview "Get insights with Copilot" skill ([Test your Data Loss Prevention policies](https://learn.microsoft.com/purview/dlp-test-dlp-policies)). Security Copilot is measured in Security Compute Units (SCUs).

Microsoft 365 E5 and E7 customers get 400 SCUs each month for every 1,000 paid user licences, up to 10,000 SCUs a month, at no additional cost. Allocations reset monthly and do not roll over. The inclusion page covers all chat, promptbook and agentic scenarios across Microsoft Purview among its core experiences, and says usage beyond the allocation will be throttled at a future date. Customers without Microsoft 365 E5 or E7 licences use the existing Security Copilot pricing model ([Security Copilot for Microsoft 365 E5 and E7](https://learn.microsoft.com/copilot/security/security-copilot-inclusion)).

A per-query SCU rate for policy insights is not yet published. Whether the E5 and E7 inclusion applies in GCC, GCC High and DoD is also not stated on the pages read. Indirect cost is the administrator time spent reviewing summaries.

## Scope

**Audience.** DLP administrators in Microsoft Purview. The preview skill requires an account in the Information protection admin role and an organisation licensed for Microsoft Security Copilot.

**Clouds and platforms.** The roadmap record lists GCC, GCC High and DoD, on the web, with a General Availability target of September CY2027. The status is In development. Absence from other clouds on the roadmap is a record fact, not a statement that the feature is unavailable there.

**Prerequisite.** Learn says Security Copilot in Purview is enabled by default and must be enabled for both the standalone and embedded experiences to work.

## Governance guidance

### Before rollout
- Confirm with your licensing owner whether your tenant has Security Copilot through Microsoft 365 E5 or E7 inclusion or through the existing pricing model, and whether either applies in your government cloud.
- List the accounts in the Information protection admin role, because Learn names it as the prerequisite for the matching preview skill.
- Check whether the Purview source is switched on in Security Copilot (Sources > Manage plugins > Purview) and whether an owner has restricted preinstalled plugins to owners only.

### At rollout
- Watch Message center and the roadmap item for a status change from In development and for any statement on defaults and cloud availability.
- Try the feature on a small set of policies first and compare each summary with the policy's own settings.

### After rollout
- Review SCU use in Security Copilot's usage dashboard against your allocation.
- Record in your DLP change process that summaries are a review aid and that policy changes still go through the existing DLP route.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Purview source is enabled in Security Copilot, which the embedded Purview experiences need</strong><br><small class="controls__note">Learn says the Purview source is enabled by default and must be on for standalone and embedded experiences. Not specific to policy insights.</small></td><td data-label="Admin UI"><strong>Microsoft Security Copilot</strong><br>Sources › Manage plugins › Purview <a href="https://learn.microsoft.com/purview/copilot-in-purview-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which preinstalled Security Copilot plugins are available to all users or restricted to owners only</strong><br><small>Tenant</small><br><small class="controls__note">Owner role. Settings apply to standalone and embedded experiences; Learn warns that restricting access is immediate for all users. The page does not label the preinstalled-plugin option.</small></td><td data-label="Admin UI"><strong>Microsoft Security Copilot</strong><br>Owner › Plugin settings <a href="https://learn.microsoft.com/copilot/security/manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Two Security Copilot settings affect whether the feature can answer. The Purview source toggle controls both the standalone and embedded Purview experiences, so it is not specific to policy insights. The owner's preinstalled plugin restriction, per Learn, applies to both standalone and embedded Security Copilot experiences and is an immediate change that affects all users of those experiences.

Microsoft Learn documents no DLP-specific switch for the policy-insights skill at the time of writing (November 2026). The roles are Security Copilot owner for plugin settings and, for the preview skill, the Information protection admin role. Owner settings can also stop sharing Microsoft 365 service data with Copilot, which the inclusion page says prevents use with Purview.

## Open questions

- Is the "Get insights with Copilot" preview skill the feature behind this roadmap item, and does it reach GCC, GCC High and DoD? Watch the Learn page on testing DLP policies and the roadmap item.
- What is the default state on arrival, and is there a DLP-specific admin switch? Microsoft has not stated either.
- Does the Microsoft 365 E5 and E7 SCU inclusion apply in GCC, GCC High and DoD, and what SCU rate does a policy-insights query use? Watch the Security Copilot inclusion page.
- Will the GA version keep the Information protection admin role requirement and the pivots by administrative unit, location and data type that the preview describes?

<!-- rationale
risk: Low. The roadmap describes summaries of how policies are configured, not changes to them, and Learn lists the Information protection admin role as a prerequisite for the matching preview skill; the default state is not stated, so this rates today's behaviour continuing.
cost: Variable. Security Copilot is metered in Security Compute Units (SCUs); Microsoft 365 E5 and E7 include a monthly SCU allowance, and a rate for this feature is not yet published.
impact: Low. Only DLP administrators who use the Purview DLP policies page are affected; end users see no change.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] summary; Why it matters; Risk assessment: Autonomy & actions; Governance guidance / behaviour: The feature is read-only, leaves policies as they are and cannot itself change enforcement. | Found: Searched: Security Copilot DLP Get insights with Copilot policy insights read only edit policies default admin disable switch; Security Copilot policy read-only. Read DLP testing and Purview overview; they describe generated policy information, not an explicit read-only guarantee. | Fix: Remove 'It is read-only' from the summary, 'not an enforcement change' and 'and leaves policies as they are' from Why it matters. Replace the asserted no-change wording in Autonomy & actions and the final After rollout bullet with 'The roadmap describes policy summaries and does not say it edits policies.'
- [unsupported, major] Risk assessment: Data exposure / behaviour: Policy definitions, including locations, classifiers and notification recipients, become inputs to Copilot responses. | Found: Searched: Security Copilot DLP policy definitions classifiers notification recipients data inputs insights. Read DLP testing, Purview overview, inclusion and privacy search excerpts; they describe response contents and data handling, not this exact input payload. | Fix: Remove 'DLP policy definitions (locations, classifiers, notification recipients) become input to those responses.' The verified response contents already appear in What's changing.
- [contradicted, blocker] controls[0].api; Governance controls table / absence: No API or automation operation is documented for enabling or disabling the Purview plugin source. | Found: Update the navigation property plugins in security. Update-MgBetaSecurityCopilotWorkspacePlugin -PluginName <string> -WorkspaceId <string> ... [-IsEnabled]. Displays whether the plugin is enabled for use within the catalogScope. | Fix: Replace controls[0].api null with kind 'powershell', call 'Update-MgBetaSecurityCopilotWorkspacePlugin -WorkspaceId <workspace-id> -PluginName <plugin-name> -IsEnabled:$false', and docs https://learn.microsoft.com/powershell/module/microsoft.graph.beta.security/update-mgbetasecuritycopilotworkspaceplugin?view=graph-powershell-beta. Add to the note: 'The beta cmdlet updates a workspace plugin's enabled state within its catalog scope; its documentation does not establish government-cloud availability.' Use a plugin-name placeholder rather than inventing the Purview plugin identifier. | Source: https://learn.microsoft.com/powershell/module/microsoft.graph.beta.security/update-mgbetasecuritycopilotworkspaceplugin?view=graph-powershell-beta
- [contradicted, blocker] Cost and licensing; What's changing; Governance guidance: Before rollout; Open questions / absence: Government-cloud applicability of current Security Copilot and its E5/E7 inclusion is unstated. | Found: This documentation is only intended for customers using commercial clouds. Currently, Security Copilot isn't designed for use by customers using US government clouds, including but not limited to GCC, GCC High, DoD, and Microsoft Azure Government. | Fix: Replace the government-cloud absence sentence in Cost and licensing with 'Current Security Copilot onboarding guidance is for commercial clouds and says Security Copilot is not designed for GCC, GCC High, DoD or Azure Government. The roadmap nevertheless targets this DLP feature for GCC, GCC High and DoD in September CY2027; its future government-cloud entitlement is not yet published.' Cite https://learn.microsoft.com/copilot/security/get-started-security-copilot and add it to sources. Add that current restriction to the preview-cloud discussion in What's changing. Change the first Before rollout bullet to 'Confirm with your licensing owner what entitlement Microsoft publishes for the planned government-cloud rollout; do not assume current commercial E5/E7 inclusion applies.' Narrow the Open questions inclusion question to the future rollout. | Source: https://learn.microsoft.com/copilot/security/get-started-security-copilot
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft Security Copilot > Owner > Plugin settings reaches the page for restricting preinstalled plugins. | Found: On the left navigation, navigate to Owner. Select Plugin settings. ... Choose to manage preinstalled plugin availability and restrict access. | Fix: Keep 'Owner > Plugin settings' as the documented route, but append to the note: 'On that page, manage preinstalled plugin availability and choose All users or Owners only.' The path ends on the correct page; Microsoft does not provide a further exact setting label in this text. | Source: https://learn.microsoft.com/copilot/security/manage-plugins
- [unsupported, minor] rationale: impact / behaviour: Only DLP administrators using the policy page are affected and end users see no change. | Found: Searched: Security Copilot DLP Get insights with Copilot policy insights read only edit policies default admin disable switch; Security Copilot policy read-only. Read DLP testing and Purview overview; they name the admin skill and outputs, not an exhaustive no-end-user-impact guarantee. | Fix: Replace the impact rationale with 'Low. The documented preview skill is embedded in the DLP policy page and requires the Information protection admin role, so the direct audience is DLP administrators.'
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist tells readers to list Information protection admin accounts, but the table has no role-access row. | Found: List the accounts in the Information protection admin role ... Controls table rows: Purview source enabled; preinstalled plugin availability. | Fix: Remove the checklist bullet 'List the accounts in the Information protection admin role, because Learn names it as the prerequisite for the matching preview skill.' Keep the verified role prerequisite in Scope; this correction does not add a control row.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells readers to review usage in the SCU dashboard, but the table has no usage-monitoring row. | Found: Review SCU use in Security Copilot's usage dashboard against your allocation. Controls table rows: Purview source enabled; preinstalled plugin availability. | Fix: Remove the After rollout checklist bullet 'Review SCU use in Security Copilot's usage dashboard against your allocation.' This correction does not add a control row.
-->
