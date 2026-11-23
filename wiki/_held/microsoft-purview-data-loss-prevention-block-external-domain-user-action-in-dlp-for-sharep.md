---
title: "Microsoft Purview DLP: block named external domains or users from SharePoint and OneDrive files"
slug: "microsoft-purview-data-loss-prevention-block-external-domain-user-action-in-dlp-for-sharep"
roadmapId: 557191
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP rules for SharePoint and OneDrive can now block access for listed external domains or guest users. Nothing changes until an admin adds the action to a rule. Learn still labels it public preview."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's service description lists Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium and others as licences that give rights to DLP for SharePoint Online and OneDrive. No licence specific to this action is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","sharepoint","onedrive","sharing"]
sources:
  - title: "Microsoft 365 Roadmap 557191"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557191"
    kind: "roadmap"
  - title: "Help prevent sharing sensitive items via SharePoint and OneDrive with external users"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-adaptive-scopes-for-dlp-for-sharepoint","sensitivity-labels","sensitive-information-types"]
controls:
  - governs: "Which external domains or users a DLP rule blocks from SharePoint and OneDrive files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Create rule > Actions > Restrict access or encrypt the content in Microsoft 365 locations > Block access for specific external domains or users"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    api: null
    note: "Public preview on Learn. Rule action sits under Block users from receiving email or accessing shared SharePoint, OneDrive. SharePoint sites and OneDrive accounts only. Domain IS, User IS and IS NOT entries are set in the rule."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-10T22:43:02"
changes:
  - date: "2026-11-23"
    note: "New briefing: DLP can block listed external domains or users on SharePoint and OneDrive; Learn still says public preview while the roadmap says Launched."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 44
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "60c569346def3e3c29b5d1e4ac9a35e4"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) gains a block option for SharePoint and OneDrive: **Block access for specific external domains or users**. The roadmap item says admins can configure DLP policies that block file access for specific external domains or individual users.

Microsoft Learn documents it as a sub-option of the action **Restrict access or encrypt the content in Microsoft 365 locations**, for SharePoint and OneDrive only. In the rule you list each domain with **Domain IS** and each user with **User IS**, and you can add **Domain IS NOT** or **User IS NOT** entries to allow specific domains or users that would otherwise match a block entry. Internal users and domains can't be blocked with this sub-option; Learn says to use **Block everyone** for those.

Learn states that the block takes effect where a user or domain appears in both the allow and block lists (most restrictive wins). It also states that alerting is supported for this action, and that user notification and override capability are not.

The roadmap record shows status Launched, with a preview date of April CY2026 and a target date of July CY2026, for Worldwide (Standard Multi-Tenant) on the web. The Learn pages read for this briefing still describe the sub-option as public preview at the time of writing (November 2026), so the two sources differ on the release phase. Learn's preview limitations are that image files aren't protected and that multiple audit records can be generated for certain actions on a blocked file by a blocked user.

## Why it matters

Alongside **Block everyone** and **Block only people from outside your organization**, this sub-option lets a compliance team name the partners, competitors or individual guests to block, and leave other external collaboration alone. That is useful where blanket external blocking would stop legitimate work.

The roadmap describes an option that admins configure in DLP policies. If nobody acts, the wiki expects existing DLP rules and sharing settings to keep behaving as they do today. Treat the preview limits as real: a rule that blocks by domain still leaves image files unprotected, and users get no policy tip or override for it.

## Risk assessment

**Data exposure**
- Image files aren't protected by this sub-option while it is labelled public preview, so a blocked domain can still reach images that match the rule. Keep a broader control, such as **Block only people outside your organization**, for content where that gap matters.
- Only external domains and users can be listed. Learn says internal users and domains can't be blocked with this sub-option, so internal restrictions stay on **Block everyone**.

**Security & identity**
- Blocking is by domain or user SMTP address. A person using a different address or a different domain is not covered by an entry for the original one; the wiki's reading is that the list needs maintaining as partners and guests change.
- Where an address is on both an allow entry and a block entry, Learn says the block takes effect.

**Autonomy & actions**
- The action blocks access when a rule matches. Learn says user notification and override are not supported for it, so plan how a blocked partner will ask for access outside the DLP rule. Alerting is supported.

**Change & support**
- Two Learn pages word the evaluation of allow and block rules differently ("per rule" and "across all matching rules"), and both say users in neither list are blocked by default where a file matches both kinds of rule. Test any rule that combines allow and block entries before you rely on it.
- Multiple audit records can be generated for certain actions on a blocked file by a blocked user, which can inflate alert and audit counts during preview.

## Cost and licensing

No separate price or meter for this action is published at the time of writing (November 2026). The pages read for it, the Learn scenario and the DLP policy reference, state no licence for the sub-option itself.

Microsoft's Purview service description covers DLP for Exchange Online, SharePoint Online and OneDrive for Business. It lists these licences as giving rights to the service: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3, and Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW. The wiki reads a new action inside that DLP service as covered by the same licences, but a licence specific to this action is not yet published.

Indirect costs are admin time to list, test and maintain domains and users, and any extra alert handling from the duplicated audit records Learn describes.

## Scope

The action applies to the **SharePoint sites** and **OneDrive accounts** locations; Learn says it is available for SharePoint and OneDrive only. The roadmap lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with General Availability and Preview as release phases. No Message Center post was supplied for this item.

Learn says the account that creates and deploys DLP policies must be a member of one of these role groups: Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator.

The Learn scenario builds the rule as a custom policy under **Enterprise applications & devices**. Rule conditions, exclusions, incident reports and the policy's scope work as in the main external-sharing scenario.

## Governance guidance

### Before rollout
- List the external domains and guest addresses to block, and the allow entries that must override a block entry.
- Decide which content the rule covers by choosing sensitive information types or sensitivity labels, as the Learn scenario does with Social Security numbers, credit card numbers and the Confidential label.
- Check whether image files matter for your data, and keep a broader block for any content where the preview gap is unacceptable.

### At rollout
- Create the rule with the sub-option in a test policy first, following the Learn procedure that leaves the policy off while it is built.
- Confirm which domains and users the rule blocks by testing a file that matches it with a listed and an unlisted external user, particularly where allow and block entries overlap.
- Turn on alerts to admins for the rule, since Learn says alerting is supported and user notification is not.

### After rollout
- Review DLP alerts and audit records for blocked-user activity, bearing in mind that duplicate records can occur.
- Update the domain and user lists when partners or guests change.
- Watch the Learn pages for the sub-option leaving public preview and for the image-file limitation being lifted.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which external domains or users a DLP rule blocks from SharePoint and OneDrive files</strong><br><small>Tenant</small><br><small class="controls__note">Public preview on Learn. Rule action sits under Block users from receiving email or accessing shared SharePoint, OneDrive. SharePoint sites and OneDrive accounts only. Domain IS, User IS and IS NOT entries are set in the rule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Create rule › Actions › Restrict access or encrypt the content in Microsoft 365 locations › Block access for specific external domains or users <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented admin surface is the Microsoft Purview portal rule editor. Microsoft Learn documents no PowerShell parameter or API operation for the domain and user lists at the time of writing (November 2026). `New-DlpComplianceRule` documents `-BlockAccessScope` values of All, PerUser and PerAnonymousUser, which are scopes for blocking everyone, external users or Anyone-link users, not lists of domains or users.

The policy must include the SharePoint sites and OneDrive accounts locations. Roles are those in the Scope section. For existing alternatives, the Learn scenario's **Block only people outside your organization** blocks every external recipient and **Block everyone** covers internal users; neither lets you name specific external domains.

## Open questions

- Does a user in neither list get blocked or allowed? Learn's intent statement says all other external recipients are allowed, but the rules note says users in neither list are blocked by default where a file matches both an allow rule and a block rule, and the two pages word the evaluation differently. Watch the Learn pages for clarification.
- When will Learn drop the public preview label, given the roadmap shows Launched? Watch the roadmap item and the DLP policy reference.
- Will PowerShell or an API gain a way to set the domain and user lists? Watch the `New-DlpComplianceRule` reference.
- Will image files be protected, and will user notification and override be supported once preview ends?

<!-- rationale
risk: Low. The action blocks nothing until an admin adds it to a DLP rule, so the exposure left at default is whatever sharing allows today. Learn lists preview gaps: image files are not protected.
cost: Low. The only cost the sources show is admin time to build and test rules; Microsoft lists DLP for SharePoint and OneDrive under its existing Microsoft 365 licences and publishes no separate price for this action.
impact: Low. Compliance admins configure it, and only external people on a block list notice, when a matching file stops opening for them. Learn says user notifications are not supported for this action.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls / command: New-DlpComplianceRule BlockAccessScope offers All, PerUser and PerAnonymousUser for blocking everyone, external users and Anyone-link users respectively. | Found: All: Blocks access to everyone except the owner and the last modifier. PerUser: Blocks access to external users. PerAnonymousUser: Blocks access to people through the "Anyone with the link" option in SharePoint and OneDrive. | Fix: Replace the sentence with '`New-DlpComplianceRule` documents `-BlockAccessScope` values of All (everyone except the owner and last modifier), PerUser (external users) and PerAnonymousUser (people using the Anyone with the link option in SharePoint and OneDrive); these are blocking scopes, not domain or user lists.' Use https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule
- [contradicted, blocker] Governance controls: policy locations / applicability: The policy must include both SharePoint sites and OneDrive accounts. | Found: Every policy is scoped to one or more locations, such as Exchange, SharePoint in Microsoft 365, Teams, and Devices. | Fix: Replace 'The policy must include the SharePoint sites and OneDrive accounts locations' with 'Select the SharePoint sites and/or OneDrive accounts locations that you intend this policy to cover.' The scenario selects both to cover both workloads, not as a universal requirement. The scope rule is at https://learn.microsoft.com/purview/dlp-create-deploy-policy and this action's supported locations are at https://learn.microsoft.com/purview/dlp-policy-reference. | Source: https://learn.microsoft.com/purview/dlp-create-deploy-policy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Purview portal path reaches the specific-external-domain-or-user action through Data loss prevention, Policies, Create policy, Enterprise applications & devices, Custom and Create rule. | Found: Select Custom from both the Categories list and the Regulations list. On the Customize advanced DLP rules page, select + Create rule. | Fix: Expand the abbreviated route to 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom > Define policy settings > Create or customize advanced DLP rules > Customize advanced DLP rules > Create rule > Actions > Restrict access or encrypt the content in Microsoft 365 locations > Block users from receiving email or accessing shared SharePoint, OneDrive > Block access for specific external domains or users'. The source's numbered variant steps also omit the Block users grouping, so its omission alone is not evidence of an unusable route. Use https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [contradicted, minor] rationale: impact / consistency: Only external people on a block list notice the change when a matching file stops opening. | Found: rationale: "only external people on a block list notice"; Risk assessment: "users in neither list are blocked by default where a file matches both kinds of rule". | Fix: Replace the factual portion of the impact rationale with 'Compliance admins configure it. External collaborators can notice when a matching file stops opening; Learn notes that users in neither list are also blocked by default when a file matches both an allow rule and a block rule. User notifications are not supported.' Keep the low impact judgement; the correction concerns the factual limitation, not the rating. See https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external.
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist names controls not represented in the controls table. | Found: Checklist: choose sensitive information types or sensitivity labels; keep a broader block; leave the policy off; turn on alerts. Table: only 'Which external domains or users a DLP rule blocks from SharePoint and OneDrive files'. | Fix: The Before rollout content-condition and broader-block steps, and the At rollout policy-state and admin-alert steps have no corresponding control rows. This is a table/checklist coverage finding, not a request to add control rows.
-->
