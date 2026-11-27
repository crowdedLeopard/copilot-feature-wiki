---
title: "Microsoft Purview DSPM: Copilot Prompt Gallery of built-in Security Copilot prompts"
slug: "microsoft-purview-compliance-portal-copilot-prompt-gallery-in-data-security-posture-manage"
roadmapId: 492618
topic: "governance"
products: ["Microsoft Purview"]
summary: "Data Security Posture Management (classic) adds a gallery of built-in Security Copilot prompts on its Overview page. Each run uses Security Compute Units; admins should check who holds DSPM and Security Copilot roles."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2025"
previewDate: "October CY2025"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "DSPM (classic) needs a Microsoft 365 E5 or Microsoft Purview Suite licence. Prompts run on Security Copilot, which bills SCUs; eligible Microsoft 365 E5 and E7 customers whose tenants have been enabled receive automatically provisioned Security Copilot capacity; customers without Security Copilot inclusion must provision SCUs."
audiences: ["security","compliance","finops"]
tags: ["purview","dspm","security-copilot","prompt-gallery","role-groups","auditing","security-compute-units"]
sources:
  - title: "Microsoft 365 Roadmap 492618"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=492618"
    kind: "roadmap"
  - title: "Use Microsoft Security Copilot with Data Security Posture Management - (classic)"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-copilot"
    kind: "learn"
  - title: "Get started with Data Security Posture Management - (classic)"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-get-started"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-permissions"
    kind: "learn"
  - title: "Microsoft Security Copilot Security Compute Units and capacity"
    url: "https://learn.microsoft.com/copilot/security/security-compute-units-capacity"
    kind: "learn"
  - title: "Understand how Security Copilot is auto provisioned for eligible Microsoft 365 E5 and E7 customers"
    url: "https://learn.microsoft.com/copilot/security/auto-provisioning-security-copilot"
    kind: "learn"
  - title: "Manage security compute unit usage in Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-usage"
    kind: "learn"
  - title: "Understand authentication in Microsoft Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/authentication"
    kind: "learn"
  - title: "Navigate Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/navigating-security-copilot"
    kind: "learn"
  - title: "Access the Security Copilot audit log"
    url: "https://learn.microsoft.com/copilot/security/audit-log"
    kind: "learn"
  - title: "Manage plugins in Microsoft Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-plugins"
    kind: "learn"
  - title: "Who holds the Data Security Viewer role needed for Security Copilot in DSPM (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who holds the Data Security Viewer role needed for Security Copilot in DSPM (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience","microsoft-purview-data-security-posture-management-data-security-posture-agent-in-dspm","role-groups","auditing","microsoft-purview-data-loss-prevention-dlp-policy-change-insights-with-security-copilot"]
controls:
  - governs: "A switch to show or hide the DSPM Copilot prompt gallery itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents the gallery as built-in prompts on the DSPM (classic) Overview page with no separate setting, at the time of writing (November 2026)."
  - governs: "Who holds the Data Security Viewer role needed for Security Copilot in DSPM"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Choose a role group that holds the Data Security Viewer role, such as Data Security Viewers. Needs the Role management role."
  - governs: "Who can use Security Copilot (Copilot owner or contributor)"
    scope: "user"
    ui:
      surface: "Security Copilot portal"
      path: "Home menu > Owner > Role assignment > Add members"
      docs: "https://learn.microsoft.com/copilot/security/authentication"
    api: null
    note: "Default contributor assignment is the Recommended Microsoft Security roles group; some tenants still have Everyone assigned."
  - governs: "Which preinstalled plugins are available to all users or owners only"
    scope: "tenant"
    ui:
      surface: "Security Copilot portal"
      path: "Owner > Plugin settings > preinstalled plugin > All users or Owners only"
      docs: "https://learn.microsoft.com/copilot/security/manage-plugins"
    api: null
    note: "Owners only. Applies to standalone and embedded experiences; restriction takes effect immediately."
  - governs: "Maximum overage SCUs the tenant can consume beyond provisioned capacity"
    scope: "tenant"
    ui:
      surface: "Security Copilot portal"
      path: "Home menu > Owner > Owner settings > Number of overage units > Change"
      docs: "https://learn.microsoft.com/copilot/security/manage-usage"
    api: null
    note: "Needs Azure capacity owner or contributor who is also a Security Copilot owner. Can also be changed in the Azure portal."
  - governs: "SCU consumption by user, plugin and Copilot experience"
    scope: "tenant"
    ui:
      surface: "Security Copilot portal"
      path: "Home menu > Owner settings > Usage monitoring"
      docs: "https://learn.microsoft.com/copilot/security/manage-usage"
    api: null
    note: "Copilot owners. Up to 90 days of data; exportable to Excel. Microsoft documentation differs: the Navigate Security Copilot page lists Usage monitoring directly under Home menu > Owner, alongside Owner settings."
  - governs: "Whether Security Copilot activity is logged to the Purview unified audit log"
    scope: "tenant"
    ui:
      surface: "Security Copilot portal"
      path: "Home menu > Owner > Owner settings > Logging audit data in Microsoft Purview"
      docs: "https://learn.microsoft.com/copilot/security/audit-log"
    api: null
    note: "Security Administrator. Prompt and response content is captured only through DSPM for AI."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-25T23:15:45"
changes:
  - date: "2026-11-27"
    note: "New briefing: the DSPM (classic) Copilot prompt gallery, its SCU billing, and the Purview and Security Copilot controls that govern who can use it."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected SCU provisioning to cover Microsoft 365 E5 and E7 inclusion, noted that Security Copilot roles go to role-assignable groups, completed the plugin settings path and noted the two documented routes to Usage monitoring."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 87
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d751b6b81c7b2bec1d19be2f6ab7a790"
---

## What's changing

Data Security Posture Management (DSPM, the Purview solution that reports on unprotected sensitive data and risky user activity) includes a **Copilot prompt gallery**: a set of built-in Security Copilot prompts that a data security analyst can browse, customise and run.

Microsoft Learn describes it on the DSPM (classic) Security Copilot page. An analyst opens it with **View more in prompt gallery** in the **Get started with Security Copilot featured promptbooks** section of the DSPM **Overview** page, then either edits a built-in prompt or runs it directly in Copilot. Prompts are grouped into five categories: Alerts and policies, Data at risk, Potentially risky users, Potentially suspicious activity, and Sensitive data. The gallery sits beside two featured six-prompt promptbooks (Risky user investigation and Sensitive data protection). Answers draw on DSPM's scanned data from Data Loss Prevention (DLP), Information Protection and Insider Risk Management, cover the last 10 days unless a date range is given, and look back at most 30 days.

The roadmap item is **Launched**, with a target date of August CY2025 and a preview date of October CY2025, and lists both General Availability and Preview as release phases. Note that the Learn page is for the **classic** version of DSPM, which Microsoft says has been replaced by a new version and will not receive its improvements.

## Why it matters

The gallery itself is a convenience, but it lowers the effort of asking Security Copilot pointed questions about named users: their sensitive data activity, possible exfiltration and risk level. That makes two existing decisions more visible: who holds the Data Security Viewer role (which DSPM requires for Security Copilot) together with Security Copilot access, and how much SCU capacity the tenant lets analysts spend. Every prompt and promptbook run is billed in SCUs, and a six-prompt promptbook is six calls.

If nobody acts, the gallery is simply available to analysts who already meet the prerequisites; Learn describes it as prompts a user chooses to run and documents no separate switch for it. Expect SCU consumption from DSPM to rise if analysts adopt it, and check that the overage setting reflects the budget.

## Risk assessment

**Data exposure**
- Prompts such as 'Show all sensitive data activities performed by <upn>' return per-user activity, alert and risk information to whoever runs them. Access is set by the Data Security Viewer role and the Security Copilot role; the Purview role group row and the Security Copilot role assignment row govern it.
- Security Copilot audit records reach the unified audit log only if the **Logging audit data in Microsoft Purview** owner setting is on, and prompt and response content is captured only through DSPM for AI.

**Security & identity**
- Security Copilot uses on-behalf-of authentication and does not go beyond the user's own access, so the gallery adds no new permission path. The exposure is in broad default contributor assignments such as an **Everyone** group that some tenants still have.

**Autonomy & actions**
- No change: Learn describes the gallery as prompts that a user selects and runs. The promptbooks suggest policy changes and DLP rules; no source says they apply them.

**Change & support**
- The documentation is for DSPM (classic), which Microsoft has replaced. Analysts working in the new DSPM may not find the gallery where this page describes it.
- When provisioned and overage SCUs are used up, analysts cannot submit more prompts until the next hour, in embedded experiences such as DSPM too.

## Cost and licensing

- **Licence.** The DSPM (classic) get-started page states that DSPM needs a Microsoft 365 E5 or Microsoft Purview Suite (formerly Microsoft 365 E5 Compliance) licence. It also requires the organisation to be configured for Security Copilot.
- **Meter.** Security Copilot bills Security Compute Units. The SCU page lists running embedded Security Copilot experiences among the scenarios that consume SCUs. Eligible Microsoft 365 E5 and E7 customers whose tenants have been enabled receive automatically provisioned Security Copilot capacity; customers without Security Copilot inclusion must provision SCUs. Provisioned SCUs are set up in advance (at least one) and billed per hour; overage SCUs are billed on use, to one decimal place. Generally available and public preview capabilities are both charged. The price per SCU is on Microsoft's Security Copilot pricing page.
- **Cap.** Overage capacity can be set to a maximum or to unlimited. When provisioned and overage SCUs are both used up, analysts cannot submit more prompts until capacity refreshes the next hour (see the overage row in the controls table).
- **Indirect costs.** Opting in to DSPM turns on analytics in Insider Risk Management and DLP if they are not already on, and the first scan can take up to three days.
- **Not yet published.** Microsoft publishes no SCU figure for the gallery's prompts; the SCU page gives only worked examples.

## Scope

- **Who:** users with a DSPM role; the Data Security Viewer role is required to use Security Copilot in DSPM. Users whose permissions are restricted to administrative units cannot access DSPM.
- **Security Copilot access:** a Copilot owner or contributor assignment. By default contributor access goes to the **Recommended Microsoft Security roles** group, and several Purview roles inherit owner access.
- **Prerequisites:** DSPM opted in and its automated scan complete, and the organisation onboarded to Security Copilot.
- **Where:** the Microsoft Purview portal, **Data Security Posture Management (classic)** > **Overview**, on the web.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.

## Governance guidance

### Before rollout
- Review who holds the Data Security Viewer role and other DSPM roles in the Purview portal role groups, and remove anyone who should not query per-user activity.
- Check the Security Copilot **Role assignment** page for an **Everyone** group in **Copilot contributor**, and replace it with the recommended roles or named role-assignable security groups.
- Set **Number of overage units** in Security Copilot owner settings to a maximum that matches the budget, rather than unlimited.

### At rollout
- Turn on **Logging audit data in Microsoft Purview** in Security Copilot owner settings so DSPM prompt activity reaches the unified audit log.
- Tell data security analysts that each gallery prompt and promptbook run uses SCUs, and that results default to the last 10 days unless they give a date range.

### After rollout
- Review the Security Copilot **Usage monitoring** dashboard, filtered by **Copilot experience** and **Category**, for SCU spend from embedded and promptbook sessions.
- Check whether your analysts work in DSPM (classic) or the new DSPM, and update internal guidance to match.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>A switch to show or hide the DSPM Copilot prompt gallery itself</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents the gallery as built-in prompts on the DSPM (classic) Overview page with no separate setting, at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Data Security Viewer role needed for Security Copilot in DSPM</strong><br><small>Group</small><br><small class="controls__note">Choose a role group that holds the Data Security Viewer role, such as Data Security Viewers. Needs the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can use Security Copilot (Copilot owner or contributor)</strong><br><small>User</small><br><small class="controls__note">Default contributor assignment is the Recommended Microsoft Security roles group; some tenants still have Everyone assigned.</small></td><td data-label="Admin UI"><strong>Security Copilot portal</strong><br>Home menu › Owner › Role assignment › Add members <a href="https://learn.microsoft.com/copilot/security/authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which preinstalled plugins are available to all users or owners only</strong><br><small>Tenant</small><br><small class="controls__note">Owners only. Applies to standalone and embedded experiences; restriction takes effect immediately.</small></td><td data-label="Admin UI"><strong>Security Copilot portal</strong><br>Owner › Plugin settings › preinstalled plugin › All users or Owners only <a href="https://learn.microsoft.com/copilot/security/manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Maximum overage SCUs the tenant can consume beyond provisioned capacity</strong><br><small>Tenant</small><br><small class="controls__note">Needs Azure capacity owner or contributor who is also a Security Copilot owner. Can also be changed in the Azure portal.</small></td><td data-label="Admin UI"><strong>Security Copilot portal</strong><br>Home menu › Owner › Owner settings › Number of overage units › Change <a href="https://learn.microsoft.com/copilot/security/manage-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>SCU consumption by user, plugin and Copilot experience</strong><br><small>Tenant</small><br><small class="controls__note">Copilot owners. Up to 90 days of data; exportable to Excel. Microsoft documentation differs: the Navigate Security Copilot page lists Usage monitoring directly under Home menu &gt; Owner, alongside Owner settings.</small></td><td data-label="Admin UI"><strong>Security Copilot portal</strong><br>Home menu › Owner settings › Usage monitoring <a href="https://learn.microsoft.com/copilot/security/manage-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Security Copilot activity is logged to the Purview unified audit log</strong><br><small>Tenant</small><br><small class="controls__note">Security Administrator. Prompt and response content is captured only through DSPM for AI.</small></td><td data-label="Admin UI"><strong>Security Copilot portal</strong><br>Home menu › Owner › Owner settings › Logging audit data in Microsoft Purview <a href="https://learn.microsoft.com/copilot/security/audit-log" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- The Security Copilot settings (role assignment, plugin settings, owner settings and usage monitoring) sit under the **Owner** menu, which only Security Copilot owners see. Changing provisioned or overage SCUs also needs Azure capacity owner or contributor rights.
- Restricting a preinstalled plugin to **Owners only** takes effect immediately and applies to embedded experiences as well as the standalone portal.
- Security Copilot roles control access to the platform only; they give no access to security data, which still depends on Purview roles such as Data Security Viewer. Both have to be in place for the gallery to work.
- Role group changes in the Purview portal need the *Role management* role.

## Open questions

- Is the Copilot prompt gallery available in the new DSPM, or only in DSPM (classic)? Watch the new DSPM Learn pages.
- Which Security Copilot plugin does the DSPM embedded experience use, so that restricting it in **Plugin settings** can be targeted? Watch the DSPM Security Copilot Learn page.
- How many SCUs does a typical gallery prompt or DSPM promptbook consume? Watch the SCU capacity page and the usage dashboard.
- What does the roadmap's Preview phase, listed alongside General Availability, still cover? Watch Message center.

<!-- rationale
risk: Low. The gallery adds ready-made prompts to the existing Security Copilot experience in DSPM, which uses on-behalf-of authentication and does not go beyond the access the user already has.
cost: Variable. DSPM needs Microsoft 365 E5 or Microsoft Purview Suite, and every prompt run consumes Security Compute Units (SCUs), the Security Copilot meter, from provisioned, overage or E5 and E7 default capacity.
impact: Low. Only data security staff who hold a DSPM role and Security Copilot access see the gallery; end users notice nothing.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: Every prompt and promptbook run is billed in SCUs / cost: Every prompt and promptbook run is billed in SCUs. | Found: Provisioned capacity is billed by the hour while the overage capacity is billed on usage. ... Runs a prompt | 3.0 SCUs ... Runs a promptbook | 3.7 SCUs | Fix: Replace with 'Every prompt and promptbook run consumes SCUs.' Add 'For enabled Microsoft 365 E5 and E7 inclusion tenants, usage deducts from included monthly capacity rather than generating hourly capacity charges.' Cite https://learn.microsoft.com/copilot/security/security-copilot-inclusion, which says the default capacity 'isn't billed hourly' and its UI cost values are 'informational only, not charges'. | Source: https://learn.microsoft.com/copilot/security/security-compute-units-capacity
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Security Copilot role assignment is reached through Home menu > Owner > Role assignment > Add members. | Found: Select the home menu. Select Role assignment > Add members. ... Select the person or group. Select the Security Copilot role to assign (Copilot owner or Copilot contributor). | Fix: Extend the path to 'Home menu > Owner > Role assignment > Add members > Copilot owner or Copilot contributor'. The current route reaches the correct dialog but stops before choosing the role; the cited Navigate Security Copilot page supplies the Owner menu step. | Source: https://learn.microsoft.com/copilot/security/authentication
-->
