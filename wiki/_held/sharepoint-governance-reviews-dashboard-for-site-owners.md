---
title: "SharePoint: Governance Reviews Dashboard for site owners"
slug: "sharepoint-governance-reviews-dashboard-for-site-owners"
roadmapId: 560541
topic: "modern-work"
products: ["SharePoint"]
summary: "Microsoft plans one dashboard where site owners see pending inactivity, ownership and attestation reviews for their sites. Admins should brief owners and review their site lifecycle policies; no admin switch is documented yet."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "No licence for the dashboard itself is published. The site lifecycle policies that send comparable reviews need a base Microsoft 365 subscription plus a Microsoft Copilot licence, the SharePoint Advanced Management Plan 1 add-on or Microsoft 365 E7."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["sharepoint","sharepoint-advanced-management","lifecycle","governance","policy"]
sources:
  - title: "Microsoft 365 Roadmap 560541"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560541"
    kind: "roadmap"
  - title: "SharePoint site lifecycle management"
    url: "https://learn.microsoft.com/sharepoint/site-lifecycle-management"
    kind: "learn"
  - title: "Request recurring site attestations for SharePoint sites"
    url: "https://learn.microsoft.com/sharepoint/request-site-attestations"
    kind: "learn"
  - title: "Manage inactive sites by using inactive site policies"
    url: "https://learn.microsoft.com/sharepoint/inactive-site-policy"
    kind: "learn"
  - title: "Create a SharePoint site ownership policy"
    url: "https://learn.microsoft.com/sharepoint/site-ownership-policy"
    kind: "learn"
  - title: "Prerequisites for SharePoint Advanced Management"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites"
    kind: "learn"
videos: []
related: ["sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group"]
controls:
  - governs: "Whether the Governance Reviews Dashboard is available to site owners"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for the dashboard is documented at the time of writing (November 2026)."
  - governs: "Which sites owners are asked to attest to (existing site attestation policy)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Policies > Site lifecycle management > Site attestation policies > Open > Create a policy"
      docs: "https://learn.microsoft.com/sharepoint/request-site-attestations"
    api: null
    note: "Existing policy that emails review requests; not confirmed as the source of dashboard items. Steps start from a SharePoint administrator."
  - governs: "Which sites owners are asked to confirm as still in use (existing inactive site policy)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Policies > Site lifecycle management > Inactive site policies > Open > + Create policy"
      docs: "https://learn.microsoft.com/sharepoint/inactive-site-policy"
    api: null
    note: "Existing policy that emails owners or site admins; not confirmed as the source of dashboard items."
  - governs: "Which sites must meet an ownership requirement (existing site ownership policy)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Policies > Site lifecycle management > Site ownership policies > Open > + Create policy"
      docs: "https://learn.microsoft.com/sharepoint/site-ownership-policy"
    api: null
    note: "Existing policy that notifies selected recipients; not confirmed as the source of dashboard items."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-20"
    note: "New briefing: roadmap-only description of the dashboard, set beside the documented site lifecycle management policies it appears to relate to."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 68 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 66
  unconfirmed: 2
  contradicted: 0
  attempts: 1
  hash: "813eaf16bfcdc2dde05d9e90fb371b93"
---

## What's changing

Microsoft plans a Governance Reviews Dashboard for SharePoint site owners: one view of every pending site governance review across the sites they own. The roadmap names three review types (inactivity, ownership and attestation) and says the dashboard shows required actions, due timelines and site enforcement status, and lets owners act from the same place. It also says the dashboard, combined with consolidated policy notifications, replaces multiple emails with one actionable surface.

Microsoft Learn does not describe this dashboard or consolidated policy notifications yet, so what is said here about the dashboard is the roadmap's description. What Learn does document today is SharePoint site lifecycle management, part of SharePoint Advanced Management, with three policy types: [site ownership](https://learn.microsoft.com/sharepoint/site-ownership-policy), [inactive site](https://learn.microsoft.com/sharepoint/inactive-site-policy) and [site attestation](https://learn.microsoft.com/sharepoint/request-site-attestations) policies. Those policies notify site owners or site administrators by email, using Outlook Actionable Messages so recipients can complete governance actions from the message. The roadmap's three review types match these three policy types, but Microsoft has not said the dashboard is built on them.

The roadmap item is In development with a target of November CY2026, for Worldwide (Standard Multi-Tenant) on the Web. The description says the dashboard is being introduced in Private Preview, while the record lists the release phases General Availability and Targeted Release; Microsoft has not reconciled the two.

## Why it matters

If your tenant already runs site lifecycle management policies, site owners are the people who answer them, and unanswered reviews can end in enforcement. Learn says that after multiple notification attempts the policies can set sites to read-only mode or archive them after a configurable read-only period. A dashboard that changes where and how owners respond is therefore a support and communication matter, even though it adds no new data.

Microsoft has not stated what happens on arrival, or whether an administrator can switch the dashboard on or off. Treat it as something owners may start to see, and agree with your SharePoint admins who will answer owners' questions. No source says existing policy behaviour changes, so there is nothing to reconfigure yet.

## Risk assessment

**Data exposure**

- The roadmap scopes the dashboard to the sites a person owns and lists reviews, required actions, due timelines and enforcement status. Microsoft has not described any other data it shows.

**Security & identity**

- Attestation reviews ask owners to confirm whether a site is still needed and whether its ownership, membership, permissions and sharing settings remain appropriate. If the dashboard lets owners act on those items, wrong answers affect who can reach the site; Microsoft has not said which actions the dashboard offers.

**Autonomy & actions**

- Existing lifecycle policies can set a site to read-only mode, or archive it after a read-only period, when no response is received. Microsoft has not said whether a response given in the dashboard counts the same as one given from the email, so confirm this before relying on either to stop enforcement.

**Change & support**

- Owners are told to expect fewer emails and one place to act. Expect questions from owners who look for the old emails, and from admins about why the roadmap says Private Preview while listing General Availability and Targeted Release.

## Cost and licensing

Microsoft has not published a licence or price for the Governance Reviews Dashboard. The SharePoint Advanced Management prerequisites page, which the lifecycle policy pages point to, requires a base subscription (Office 365 E3, E5 or A5; Microsoft 365 E1, E3, E5 or A5; or Microsoft 365 GCC, GCC-High or DoD). It then requires at least one user with a Microsoft Copilot licence, or a subscription that includes SharePoint K, P1 or P2 plus the SharePoint Advanced Management Plan 1 add-on, or Microsoft 365 E7.

Those prerequisites cover the site lifecycle management policies. Whether the dashboard has the same requirements is not stated. The page lists no meter. The costs the sources show are indirect: admin time to review policies and owner communication.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. The dashboard is aimed at site owners, across the sites they own. Microsoft has not said whether site administrators or co-owners see it.

To create site lifecycle policies, Learn's steps start from a SharePoint administrator in the SharePoint admin center; the prerequisites page also names the SharePoint Advanced Management Administrator role. Rollout mechanics, prerequisites for the dashboard itself and any tenant switch are not stated.

## Governance guidance

### Before rollout

- Review which site ownership, inactive site and site attestation policies exist in the SharePoint admin center, and note which are in Active mode (see the controls table).
- Confirm your tenant meets the SharePoint Advanced Management prerequisites if you plan to rely on these policies.
- Tell site owners that the roadmap expects one dashboard and fewer emails, and that policy reviews remain their responsibility.

### At rollout

- Watch the Microsoft 365 roadmap item and Message center for the dashboard's status, preview scope and any admin setting.
- Avoid overlapping policies of the same type on the same sites; Learn says overlap makes notification timing and enforcement harder to predict.

### After rollout

- Compare each policy's execution report with owner responses, and check for sites placed in read-only mode that owners say they answered.
- Ask a pilot group of owners whether the dashboard shows the same reviews as their emails.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Governance Reviews Dashboard is available to site owners</strong><br><small>Tenant</small><br><small class="controls__note">No setting for the dashboard is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which sites owners are asked to attest to (existing site attestation policy)</strong><br><small>Site</small><br><small class="controls__note">Existing policy that emails review requests; not confirmed as the source of dashboard items. Steps start from a SharePoint administrator.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Policies › Site lifecycle management › Site attestation policies › Open › Create a policy <a href="https://learn.microsoft.com/sharepoint/request-site-attestations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which sites owners are asked to confirm as still in use (existing inactive site policy)</strong><br><small>Site</small><br><small class="controls__note">Existing policy that emails owners or site admins; not confirmed as the source of dashboard items.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Policies › Site lifecycle management › Inactive site policies › Open › + Create policy <a href="https://learn.microsoft.com/sharepoint/inactive-site-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which sites must meet an ownership requirement (existing site ownership policy)</strong><br><small>Site</small><br><small class="controls__note">Existing policy that notifies selected recipients; not confirmed as the source of dashboard items.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Policies › Site lifecycle management › Site ownership policies › Open › + Create policy <a href="https://learn.microsoft.com/sharepoint/site-ownership-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant switch for the dashboard is documented at the time of writing (November 2026), so the first row is empty on both sides. The other rows are today's site lifecycle policies, which send reviews by email; Microsoft has not said they control the dashboard.

Learn says policies of different types notify independently, and that disabling or deleting a policy stops future notifications and enforcement actions without reversing actions already applied. Microsoft Learn documents no PowerShell or Graph operation for these policies at the time of writing (November 2026), so they are configured in the SharePoint admin center.

## Open questions

- Is the dashboard in Private Preview, or does the General Availability and Targeted Release phase in the roadmap record apply? Watch the roadmap item.
- Can an administrator turn the dashboard on or off, and is it on when it arrives? Watch Message center and the SharePoint site lifecycle management page on Learn.
- Are the three review types the ownership, inactive site and attestation policies, and does a response in the dashboard count as a response to the email for enforcement timing?
- Does the dashboard need the SharePoint Advanced Management licence prerequisites, or something else?
- Which actions can owners take from the dashboard, and do site administrators or co-owners see it?

<!-- rationale
risk: Low. The roadmap describes a view and action surface for reviews on sites a person already owns, with no new data access; the default is not stated, so this is rated on today's behaviour continuing.
cost: Low. The only cost the sources show is admin time and owner communication; a licence specific to the dashboard is not yet published, and the policies behind such reviews need the SharePoint Advanced Management prerequisites.
impact: Medium. Site owners are the people who notice: the roadmap says the dashboard and consolidated notifications replace multiple emails with one place to act.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters; rationale: risk / behaviour: The dashboard adds no new data or data access. | Found: Searched: SharePoint Governance Reviews Dashboard no new data access permissions existing policy behavior; opened site-lifecycle-management and searched policy documentation. The roadmap specifies displayed reviews, not an assurance of unchanged data access. | Fix: Remove 'even though it adds no new data' from Why it matters and 'with no new data access' from the risk rationale. Retain the verified statement that the roadmap scopes reviews to sites the person owns.
- [unsupported, blocker] front matter: licensing.model / licensing: The dashboard has a mixed licensing model. | Found: Searched: SharePoint Governance Reviews Dashboard licensing pricing SharePoint Advanced Management; checked SAM prerequisites, Copilot feature table and SharePoint service description. Mixed dashboard entitlement is not stated; the alternatives documented are for SAM policies. | Fix: Set licensing.model to 'included' for the published product-level requirement, not 'mixed' based on neighbouring policies. Prepend licensing.notes with 'To access SharePoint, users need a licence that includes SharePoint; requirements specific to the dashboard are not yet published.' Cite https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description, which states that SharePoint users need an assigned licence including SharePoint. Retain the existing policy prerequisites explicitly as background, not dashboard entitlement.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls: attestation row / admin-path: SharePoint admin center > Policies > Site lifecycle management > Site attestation policies > Open > Create a policy reaches creation of the existing attestation policy. | Found: In the navigation pane, expand Policies, and then select Site lifecycle management. Under Site attestation policies, select Open. Then select Create a policy. | Fix: The printed route opens the creation wizard rather than selecting its target sites. Extend the path to 'Policies > Site lifecycle management > Site attestation policies > Open > Create a policy > Overview > Set policy scope' and append to the note: 'Choose the target sites on Set policy scope.' | Source: https://learn.microsoft.com/sharepoint/request-site-attestations
- [supported, minor] controls[2].ui; Governance controls: inactive-site row / admin-path: SharePoint admin center > Policies > Site lifecycle management > Inactive site policies > Open > + Create policy reaches creation of an existing inactive site policy. | Found: In the navigation pane, expand Policies, and then select Site lifecycle management. Under Inactive site policies, select Open. Select + Create policy. | Fix: The printed route opens the creation wizard rather than selecting its target sites. Extend the path to 'Policies > Site lifecycle management > Inactive site policies > Open > + Create policy > Set policy scope' and append to the note: 'Choose the target sites on Set policy scope.' | Source: https://learn.microsoft.com/sharepoint/inactive-site-policy
- [supported, minor] controls[3].ui; Governance controls: ownership row / admin-path: SharePoint admin center > Policies > Site lifecycle management > Site ownership policies > Open > + Create policy reaches creation of an existing site ownership policy. | Found: In the navigation pane, expand Policies, and then select Site lifecycle management. Under Site ownership policies, select Open. Then, select + Create policy. | Fix: The printed route opens the creation wizard rather than setting ownership requirements. Keep the printed path and append to the note: 'This opens the policy creation wizard. Choose the target sites on Set policy scope, then set ownership criteria on Configure policy.' | Source: https://learn.microsoft.com/sharepoint/site-ownership-policy
-->
