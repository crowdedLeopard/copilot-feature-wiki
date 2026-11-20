---
title: "Microsoft Edge: upgraded Copilot new tab page, off by default"
slug: "microsoft-edge-upgraded-copilot-new-tab-page"
roadmapId: 566703
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "Edge's Copilot new tab page joins web search, Microsoft 365 Copilot chat and work cards. It is off by default; admins turn it on with the CopilotNewTabPageEnabled policy. No action is needed unless you want it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "off"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft's notice MC1440972 says users must have a Microsoft 365 Copilot licence. The policy page says users without one might see limited relevance in prompt cards. No separate price or meter is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-edge","edge-for-business","m365-copilot","copilot-chat","user-experience","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 566703"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566703"
    kind: "roadmap"
  - title: "MC1440972: (Updated) Microsoft Edge: Upgraded Copilot new tab page"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1440972"
    kind: "message-center"
  - title: "Configure the Copilot new tab page"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page"
    kind: "learn"
  - title: "CopilotNewTabPageEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotnewtabpageenabled"
    kind: "learn"
  - title: "ConfigureNTPFeedTabVisibility"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/configurentpfeedtabvisibility"
    kind: "learn"
  - title: "Configuring Copilot Features"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    kind: "learn"
videos: []
related: ["microsoft-edge-top-sites-in-edge-search-bar","microsoft-edge-ask-copilot-about-an-image","microsoft-edge-rewrite-by-copilot-in-edge-is-being-upgraded-to-include-enterprise-data-pro"]
controls:
  - governs: "Whether the Copilot new tab page is on, and for which users or groups"
    scope: "group"
    ui:
      surface: "Edge management service (Microsoft 365 admin center)"
      path: "Edge management service > Copilot > Copilot new tab page"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page"
    api:
      kind: "other"
      call: "Edge policy CopilotNewTabPageEnabled = Enabled (registry: SOFTWARE\\Policies\\Microsoft\\Edge, REG_DWORD 0x00000001)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotnewtabpageenabled"
    note: "Needs Global admin or Edge admin in the management service. Applies to Microsoft Entra ID profiles, not MSA profiles. Disabled or not configured means off."
  - governs: "Whether the Discover or Work feed tabs show on the Copilot new tab page"
    scope: "user"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Startup, home page and new tab page > Configure whether the Discover or Work feed tabs are shown on the Copilot new tab page."
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/configurentpfeedtabvisibility"
    api:
      kind: "other"
      call: "Edge policy ConfigureNTPFeedTabVisibility = 1 (EnableOnlyWork) or 2 (EnableOnlyDiscover) (registry: SOFTWARE\\Policies\\Microsoft\\Edge, REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/configurentpfeedtabvisibility"
    note: "Windows and macOS version 148 or later; not supported on Android or iOS. Needs a browser restart."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-20"
    note: "First briefing: the Copilot new tab page is off by default, controlled by CopilotNewTabPageEnabled, and Microsoft's notice says users need a Microsoft 365 Copilot licence."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 78
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "b1164fd5162a987a385d90ee996c25ba"
---

## What's changing

Microsoft Edge is upgrading its Copilot new tab page so that web search, navigation and Microsoft 365 Copilot chat share one search box. Microsoft's notice MC1440972 lists enhanced chat and compose, suggested actions, work cards that may surface files and calendar events, an app launcher, pinned quick links and updated theme settings. [Microsoft's Learn page](https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page) also describes a Copilot side rail that gives access to chat, agents and skills, tasks, and Cowork.

The page is off by default. Microsoft's notice says it applies only to organisations that enabled it with the `CopilotNewTabPageEnabled` policy, and that users who are not enabled keep the existing new tab page. The policy page adds a second route: if the policy is not configured, users can turn the page on through user settings. If the policy is enabled, the page is on.

The roadmap record gives the status as Launched, with a target of November CY2026 and a preview date of September CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform. MC1440972 (updated 13 October 2026) gives a public preview from late September 2026 to mid-October 2026 and general availability from early November 2026 for Worldwide. It sets no act-by date, and Microsoft's end date for the notice is 14 December 2026.

The Learn page says that from Microsoft Edge version 153 the Discover feed and feed toggle will be limited. It also says that in version 148 some users may not see the Work feed, Discover feed or feed toggle if their tenant or locale is outside supported language markets.

## Why it matters

This change matters to you only if you enable the page, or if the policy is left unconfigured and users switch it on. Microsoft's notice says that when it is on, work cards may surface organisational files and calendar events, and that users can send queries straight to Microsoft 365 Copilot from the search box. That puts a Copilot entry point and a stream of work content on the page users see most often, so it is a decision for the owner of Copilot rollout, not only the Edge administrator.

If nobody acts and the policy stays unconfigured, the policy page says the page is off, but that users can turn it on in their own settings. Plan on that rather than assuming it never appears: decide whether you want it, then set the policy deliberately for the groups you choose.

## Risk assessment

**Data exposure**
- Work cards can show organisational files and calendar events on the new tab page, and suggested prompts draw on the same kind of content (MC1440972; policy page). Anyone who can see a user's screen or shares it sees those cards, so review the groups you assign before enabling.
- Microsoft's notice asks administrators to evaluate the effect of surfacing files and calendar events through work cards. Users can turn **Cards** off in the new tab page settings, per the Learn FAQ.

**Security & identity**
- The policy applies only to Microsoft Entra ID profiles and does not apply to the Copilot new tab page on Microsoft account (MSA) profiles, per the policy page. Staff who browse in a personal profile are outside this policy.
- Assignment is by Microsoft Entra group or all users in the Edge management service, so group membership decides who is exposed.

**Autonomy & actions**
- The side rail brings chat, agents and skills, tasks, and Cowork into the page. Treat each as a Copilot capability reached from a new place, and confirm that the controls you already apply to Copilot, agents and Cowork cover it.

**Change & support**
- Enabling the page in the Edge management service also sets other recommended Copilot settings to Enabled; the page says you can adjust them individually. Check them after enabling.
- Policy updates can take up to 90 minutes to reach devices, per the Learn page, which matters for support when a user reports a different page layout.
- Feed behaviour differs by Edge version and language market, as above.

## Cost and licensing

Microsoft's notice MC1440972 says that to access this experience users must have a Microsoft 365 Copilot licence, and recommends verifying that affected users have one before enabling. The `CopilotNewTabPageEnabled` policy page words it differently: users without a Microsoft 365 Copilot licence might experience limited relevance in Copilot prompt card content. The two statements are reported as Microsoft gives them; the pages do not reconcile them.

The Learn configure page lists a Microsoft Entra group as its only prerequisite and names no licence there. It publishes no separate price or meter for the new tab page, and a charge for the page is not stated. For tenants already licensed, the main cost is administrator time to choose groups, test and brief users. For tenants without licences for the target users, the cost is the Microsoft 365 Copilot licence Microsoft's notice names; its price is outside these pages.

## Scope

- **Users:** those assigned the configuration in the Edge management service (all users or selected Microsoft Entra groups). Users who are not enabled keep the existing new tab page, and the existing new tab page policies stay unchanged for them (Learn configure page).
- **Profiles:** Microsoft Entra ID profiles in Microsoft Edge for Business; not MSA profiles (policy page).
- **Versions:** the policy page lists Windows, macOS, Android and iOS at version 148 or later.
- **Roles:** the Learn page says to sign in to the Edge management service with an account that has Global admin or Edge admin privileges.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform.
- **Rollout:** per MC1440972, public preview from late September to mid-October 2026 and general availability from early November 2026.
- **Existing policies:** the page supports most new tab page policies, such as `NewTabPageAppLauncherEnabled` and `NewTabPageManagedQuickLinks`; `NewTabPageBingChatEnabled` is listed as unsupported.

## Governance guidance

### Before rollout
- Decide which Microsoft Entra security groups should receive the page, and create them in the Microsoft 365 admin center if they do not exist; the Learn page lists the group as the prerequisite.
- Confirm the target users hold a Microsoft 365 Copilot licence, as MC1440972 asks.
- Assess whether work cards surfacing files and calendar events fit your AI governance and compliance requirements, as the notice recommends.
- Check the new tab page policies you already set (quick links, app launcher, background types) against the supported list on the Learn page.

### At rollout
- Enable the Copilot new tab page in the Edge management service (Copilot tab) and assign it to the chosen groups, signing in with a Global admin or Edge admin account.
- Review the other Copilot settings that the same step sets to Enabled, and adjust each one that you do not want.
- Decide whether the `ConfigureNTPFeedTabVisibility` policy should limit the Discover or Work feed tabs for your users.
- Notify affected users and update guidance, as MC1440972 recommends.

### After rollout
- Verify on a targeted device with `edge://policy` and **Reload Policies** that `CopilotNewTabPageEnabled` shows TRUE, then restart the browser and open a new tab.
- Allow up to 90 minutes for the configuration to download before treating a missing page as a fault.
- Set the policy explicitly if you do not want it: the policy page says that when it is not configured users can turn the page on themselves.
- Recheck feed behaviour once your devices reach Edge version 153.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot new tab page is on, and for which users or groups</strong><br><small>Group</small><br><small class="controls__note">Needs Global admin or Edge admin in the management service. Applies to Microsoft Entra ID profiles, not MSA profiles. Disabled or not configured means off.</small></td><td data-label="Admin UI"><strong>Edge management service (Microsoft 365 admin center)</strong><br>Edge management service › Copilot › Copilot new tab page <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Edge policy CopilotNewTabPageEnabled = Enabled (registry: SOFTWARE\Policies\Microsoft\Edge, REG_DWORD 0x00000001)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotnewtabpageenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Discover or Work feed tabs show on the Copilot new tab page</strong><br><small>User</small><br><small class="controls__note">Windows and macOS version 148 or later; not supported on Android or iOS. Needs a browser restart.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Startup, home page and new tab page › Configure whether the Discover or Work feed tabs are shown on the Copilot new tab page. <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/configurentpfeedtabvisibility" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Edge policy ConfigureNTPFeedTabVisibility = 1 (EnableOnlyWork) or 2 (EnableOnlyDiscover) (registry: SOFTWARE\Policies\Microsoft\Edge, REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/configurentpfeedtabvisibility" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Edge management service route and the policy are two ways to set the same availability policy. The Learn page says enabling in the management service also enables other recommended Copilot settings, which you can adjust individually. Those settings (access to browser context, the Copilot icon in the toolbar, the Copilot search box, AI-generated text and editing) are listed on [Configuring Copilot Features](https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features) and are separate controls from this one.

The Learn FAQ describes work cards and the experience itself as user-level settings that users may be able to turn off, depending on the organisation's settings; they are not admin controls and are not rows in the table. The management service route needs a Global admin or Edge admin account.

## Open questions

- Which licence statement governs access: MC1440972 says users must have a Microsoft 365 Copilot licence, while the policy page says users without one might see limited prompt-card relevance. Which parts of the page work without a licence? Watch the Learn configure page and Message center.
- Is there an admin setting that turns off work cards separately from the whole page? The Learn FAQ describes turning off Cards only as a user setting in the new tab page settings.
- How does the separate Copilot search box setting in the Edge management service interact with the Copilot new tab page setting? The Learn page does not describe it.
- How will the Discover feed limit from Edge version 153 change what `ConfigureNTPFeedTabVisibility` controls?

<!-- rationale
risk: Medium. Once on, work cards can surface files and calendar events on each new tab. It is off by default, but when the policy is not configured users can turn it on themselves.
cost: Low. Microsoft's notice says users need a Microsoft 365 Copilot licence; no separate price or meter for the page is published, so the known cost is admin time and communications.
impact: Low. Only users for whom the page is enabled see it; everyone else keeps the existing Edge new tab page, so the people who notice are those in the groups you target.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; Cost and licensing; rationale: cost / consistency: The low cost rating and indirect-cost-only rationale agree with the page's identified licence dependency. | Found: cost: "low"; "the known cost is admin time and communications"; "For tenants without licences for the target users, the cost is the Microsoft 365 Copilot licence Microsoft's notice names" | Fix: Set cost to medium. Replace the cost rationale with: "Medium. Microsoft's notice says target users need a Microsoft 365 Copilot licence, so enabling for users who are not already licensed can require add-on licences. For already licensed users, rollout adds administrator time and communications."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is add-on, referring to the Microsoft 365 Copilot licence named in the notice. | Found: Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Fix: Add https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot to sources to support the add-on classification. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls / consistency: Every control that the governance checklist asks administrators to check or adjust has a controls-table row. | Found: "Check the new tab page policies you already set (quick links, app launcher, background types)"; "Review the other Copilot settings ... and adjust each one"; the table contains only availability and feed visibility. | Fix: The Before rollout step about quick links, app launcher and background types, and the At rollout step about adjusting other recommended Copilot settings, name controls without table rows. Remove these two checklist bullets; retain the existing explanatory prose.
-->
