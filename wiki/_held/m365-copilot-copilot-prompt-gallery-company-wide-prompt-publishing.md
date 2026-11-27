---
title: "Microsoft Copilot: publish organisation prompts to every user from the Microsoft 365 admin center"
slug: "m365-copilot-copilot-prompt-gallery-company-wide-prompt-publishing"
roadmapId: 486695
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)","OneNote","PowerPoint","Word"]
summary: "Admins can create, import and pin company prompts that every Copilot Chat user then sees as suggestions. Nothing reaches users until an admin publishes, so the decision is who may publish and what."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Organisation prompts appear in Microsoft Copilot Chat, which Microsoft's requirements page says is available to users with an eligible Microsoft 365 subscription. The organisational prompts page lists admin roles as its prerequisites and names no licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["organisation-prompts","prompt-gallery","prompt-lab","copilot-chat","m365-admin-center","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 486695"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=486695"
    kind: "roadmap"
  - title: "Organizational prompts overview"
    url: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Assign admin roles in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "copilotAdmin resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadmin"
    kind: "learn"
  - title: "Who holds AI Administrator or Search Editor, the roles that can publish organisation prompts (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["microsoft-copilot-microsoft-m365-delegated-prompt-publishing-for-organization-prompts","m365-copilot-discover-graph-connector-prompts-in-the-prompt-gallery-when-using-copilot-cha","m365-copilot-copilot-extensibility-improve-discovery-of-champion-connector-prompts-for-use"]
controls:
  - governs: "Publishing a new organisation prompt to every user in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Prompts > Create prompt"
      docs: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    api: null
    note: "AI Administrator or Search Editor, or a role with equivalent permissions. Import prompts on the same page takes up to 100 prompts per file; limit 1,000 per tenant."
  - governs: "Which organisation prompts are pinned as suggested prompts in Copilot Chat"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Prompts > prompt > more options menu (...) > Pin prompt"
      docs: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    api: null
    note: "Up to four prompts can be pinned."
  - governs: "Withdrawing an organisation prompt from users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Prompts > prompt > Delete"
      docs: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    api: null
    note: "Deletion is permanent; use Export all prompts first."
  - governs: "Who holds AI Administrator or Search Editor, the roles that can publish organisation prompts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Roles > Role assignments > Microsoft Entra ID > role > Assigned > Add users"
      docs: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "The request body sets principalId and roleDefinitionId. Privileged Role Administrator is the least privileged role for the Graph call."
  - governs: "Showing organisation prompts to only some users or groups"
    scope: "group"
    ui: null
    api: null
    note: "Published prompts are shared with users across the organisation; the Department field only filters the prompt lab."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-07-07T23:01:01"
changes:
  - date: "2026-11-27"
    note: "New briefing: organisation prompts published from Copilot > Prompts in the Microsoft 365 admin center, with roles, limits and the controls that exist."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 63 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 58
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "186e6d101d8a830a6fc4a173f7ad2ee8"
---

## What's changing

Administrators can now write their own Copilot prompts and publish them to everyone in the tenant. Microsoft Learn calls these **organizational prompts** and documents them under **Copilot > Prompts** in the Microsoft 365 admin center, where admins can create, edit, delete, import, export and pin them. The tenant can hold up to 1,000 published prompts, and Microsoft says a new or edited prompt typically takes about 3 hours to show in the prompt lab.

Users meet the prompts in three places, according to the Learn page: a **Suggested** button on the Copilot Chat home page that lists up to four pinned prompts, the prompt lab (where users can search and filter by task type and department), and as typeahead suggestions while they type. Selecting a prompt puts it in the Copilot Chat message box without submitting it, so the user can change it first. Each prompt carries a **Supported apps** field naming the Copilot surfaces where it should appear, and a **Language** field; Microsoft states that automatic translation isn't available, so each language needs its own prompt.

The roadmap item, titled *Copilot Prompt Gallery - Company-wide prompt publishing*, has the status Launched, General Availability, with a June CY2026 target, for the Worldwide (Standard Multi-Tenant) cloud on desktop and web. The Microsoft 365 Copilot release notes record it on July 15, 2026. The record lists Excel, OneNote, PowerPoint and Word among its products, while the Learn page names Microsoft Copilot Chat, Microsoft Edge and Microsoft Teams as where published prompts are displayed.

## Why it matters

This gives the organisation an editorial channel into every user's Copilot Chat: whatever an AI Administrator or Search Editor publishes is suggested to users as they type. That is useful for adoption, and it also means prompt wording, including any internal process names or system references in up to 8,000 characters of prompt text, becomes visible across the tenant. The Learn page describes no approval step and no way to show a prompt to only some users.

If nobody acts, users see no organisation prompts: the page describes prompts reaching users once an administrator publishes them. The decision for a service owner is who holds the two publishing roles, who owns the content, and how prompts are reviewed and retired.

## Risk assessment

**Data exposure**
- Prompt text is shown to users across the organisation in the prompt lab and autosuggest. A prompt that names confidential projects, customers or internal systems discloses them to every Copilot Chat user; review wording before publishing.
- The **Description** field is documented as internal context for other admins and not shown to end users, so reviewer notes belong there, not in the prompt.

**Security & identity**
- Search Editor is one of the two roles that can publish. Microsoft Entra describes it as managing editorial content such as bookmarks and Q and As, so people given it for Microsoft Search can also publish prompts to everyone. Check its holders under **Roles > Role assignments**.

**Autonomy & actions**
- No autonomous behaviour: selecting a prompt places it in the message box but does not submit it, and the user sends it.

**Change & support**
- Pinned prompts appear behind a new **Suggested** button on the Copilot Chat home page; expect user questions when the first prompts land.
- Deletion is permanent. Export all prompts before bulk changes.
- Microsoft says edits typically take about 3 hours to appear, so a corrected prompt does not reach users straight away.

## Cost and licensing

- **Licence:** organisation prompts are displayed in Microsoft Copilot Chat. The [Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements) page says Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that a Microsoft Copilot licence is not required for eligible users. The [organizational prompts](https://learn.microsoft.com/copilot/manage/organizational-prompts) page lists admin roles as its prerequisites and names no licence; no licence term specific to this feature is published.
- **Meter:** none is documented for publishing or using organisation prompts at the time of writing (November 2026).
- **Indirect costs:** writing, translating (one prompt per language) and reviewing prompts, and watching the per-prompt analytics. The tenant limit is 1,000 published prompts; import takes up to 100 prompts and 5 MB per file.

## Scope

- **Who sees prompts:** users of Microsoft Copilot Chat in the organisation; the Learn page names Copilot Chat, Microsoft Edge and Microsoft Teams as display surfaces. The roadmap record lists Excel, Microsoft Copilot (Microsoft 365), OneNote, PowerPoint and Word.
- **Who publishes:** AI Administrator or Search Editor, or a role with equivalent permissions.
- **Cloud:** Worldwide (Standard Multi-Tenant), per the roadmap record.
- **Platforms:** Desktop and Web, per the roadmap record.
- **Limits:** 1,000 prompts per tenant, four pinned, 100 prompts per import file.
- **Related change:** delegating publishing to users and groups is a separate roadmap item; see [delegated publishing of organisation prompts](/features/microsoft-copilot-microsoft-m365-delegated-prompt-publishing-for-organization-prompts/).

## Governance guidance

### Before rollout
- List who holds AI Administrator and Search Editor under **Roles > Role assignments** in the Microsoft 365 admin center, and remove Search Editor from anyone who should not publish to the whole tenant.
- Name an owner for the prompt library and agree a review step for prompt wording before anyone selects **Publish**.
- Decide which languages you will publish in, since each language needs its own prompt.

### At rollout
- Build the first set through **Import prompts** using the downloaded template, and keep the CSV as the reviewed source.
- Pin up to four prompts that suit most users, and tell users about the **Suggested** button in Copilot Chat.
- Allow about 3 hours before checking that new prompts appear in the prompt lab.

### After rollout
- Review **Active users** and **Submissions** for each prompt over 7, 14 or 28 days and retire prompts nobody uses.
- Run **Export all prompts** before any bulk edit or deletion, as deletion is permanent.
- Recheck Search Editor and AI Administrator assignments when people change roles.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Publishing a new organisation prompt to every user in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Search Editor, or a role with equivalent permissions. Import prompts on the same page takes up to 100 prompts per file; limit 1,000 per tenant.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Prompts › Create prompt <a href="https://learn.microsoft.com/copilot/manage/organizational-prompts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which organisation prompts are pinned as suggested prompts in Copilot Chat</strong><br><small>Tenant</small><br><small class="controls__note">Up to four prompts can be pinned.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Prompts › prompt › more options menu (...) › Pin prompt <a href="https://learn.microsoft.com/copilot/manage/organizational-prompts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Withdrawing an organisation prompt from users</strong><br><small>Tenant</small><br><small class="controls__note">Deletion is permanent; use Export all prompts first.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Prompts › prompt › Delete <a href="https://learn.microsoft.com/copilot/manage/organizational-prompts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds AI Administrator or Search Editor, the roles that can publish organisation prompts</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets principalId and roleDefinitionId. Privileged Role Administrator is the least privileged role for the Graph call.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Roles › Role assignments › Microsoft Entra ID › role › Assigned › Add users <a href="https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Showing organisation prompts to only some users or groups</strong><br><small>Group</small><br><small class="controls__note">Published prompts are shared with users across the organisation; the Department field only filters the prompt lab.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents organisation prompts as managed in the Microsoft 365 admin center; the Microsoft Graph Copilot admin settings reference lists no organisational prompts resource at the time of writing (November 2026), so there is no documented way to script publishing. The Learn page documents no setting to show a prompt to particular users or groups, and it describes published prompts as shared with users in your organisation. Publishing rights come from the AI Administrator and Search Editor roles; assigning roles through Microsoft Graph needs Privileged Role Administrator at least. The **Supported apps** field on each prompt chooses the Copilot surfaces where it appears, not the audience.

## Open questions

- Are creating, editing and deleting organisation prompts written to the Microsoft Purview audit log, and under which operation? Watch the Purview audit log activities page.
- Will Microsoft add targeting so that a prompt can be shown to one department or group rather than the whole tenant? Watch the organizational prompts page and Message center.
- When will organisation prompts appear inside Word, Excel, PowerPoint and OneNote, which the roadmap record lists but the Learn page does not name as display surfaces?
- Will a Microsoft Graph API for managing organisation prompts be published, so that the library can be kept in source control?

<!-- rationale
risk: Low. Nothing reaches users until an AI Administrator or Search Editor publishes a prompt, and a selected prompt is only placed in the chat box, not sent.
cost: Low. Copilot Chat is available with an eligible Microsoft 365 subscription; the cost the sources show is admin and content-owner time to write and maintain the prompts.
impact: Low. On arrival only admins see the new Prompts page; once prompts are published they appear to users across the organisation, with no documented way to target groups.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].note; Governance controls / role: Assigning roles through Microsoft Graph requires at least Privileged Role Administrator, without distinguishing delegated and application access. | Found: Application | RoleManagement.ReadWrite.Directory ... For delegated access using work or school accounts, the signed-in user must be assigned a supported Microsoft Entra role or a custom role that grants the permissions required for this operation. | Fix: Replace the role sentence in controls[3].note and the rendered table with 'For delegated access, Privileged Role Administrator is the least privileged supported built-in role; a custom role granting the required permissions is also supported.' Replace the prose sentence with 'For delegated Microsoft Graph role assignment, the signed-in user needs Privileged Role Administrator or a custom role granting the required permissions.' Retain the principalId and roleDefinitionId sentence. | Source: https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0
- [unsupported, major] Scope: Related change / behaviour: Delegating organisation prompt publishing to users and groups is a separate roadmap item. | Found: Searched: Copilot delegated prompt publishing organization prompts users groups roadmap; "Copilot" "delegated prompt publishing"; "Copilot Prompt Gallery" "delegate" "publish". Read release-notes and organizational-prompts; returned excerpts do not establish that separate item. | Fix: Remove the Scope bullet beginning 'Related change: delegating publishing to users and groups is a separate roadmap item'. The linked wiki briefing is not Microsoft evidence.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Copilot > Prompts > Create prompt is the route for publishing a new prompt. | Found: Expand Copilot and select Prompts to display the list of organizational prompts. ... Select Create prompt. ... Select Publish to save and publish the prompt to your tenant. | Fix: Extend controls[0].ui.path to 'Copilot > Prompts > Create prompt > Publish' and mirror it in the rendered table. The current path correctly reaches the creation page but stops before its publishing control. | Source: https://learn.microsoft.com/copilot/manage/organizational-prompts
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist tells readers to use Import prompts, but that control has no row in the table. | Found: Build the first set through Import prompts using the downloaded template ... Controls rows cover Create prompt, Pin prompt, Delete, role assignment and audience targeting; import is mentioned only in a row note. | Fix: Remove the checklist bullet 'Build the first set through Import prompts using the downloaded template, and keep the CSV as the reviewed source.' It names an import control without a table row; do not add a row as part of this correction.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to run Export all prompts, but that control has no row in the table. | Found: Run Export all prompts before any bulk edit or deletion, as deletion is permanent. ... The controls table has a Delete row with an export recommendation, but no Export all prompts row. | Fix: Replace that checklist bullet with 'Retire unwanted prompts using the Delete control; deletion is permanent.' This uses the existing control row without adding a new one.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to review Active users and Submissions, but analytics has no row in the table. | Found: Review Active users and Submissions for each prompt over 7, 14 or 28 days and retire prompts nobody uses. ... No controls row covers prompt analytics. | Fix: Remove the checklist bullet beginning 'Review Active users and Submissions for each prompt over 7, 14 or 28 days'. The analytics control has no table row; do not add one as part of this correction.
-->
