---
title: "Microsoft Edge: one policy now controls Copilot Chat in the toolbar"
slug: "microsoft-edge-v-149-unifying-copilot-chat-policy-controls"
roadmapId: 561041
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "From Edge 149, the Microsoft365CopilotChatIconEnabled policy is the standard control for Copilot Chat; extension and sidebar policies no longer affect it. Admins who hid Copilot by blocking its extension need to switch."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The policy is an Edge setting. Its Learn page lists no licence requirement and says it covers licensed and unlicensed users; Microsoft's Windows documentation says the web scope of Microsoft Copilot Chat is available at no additional cost to Microsoft Entra account users."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-edge","edge-for-business","copilot-chat","m365-copilot","admin-controls","governance"]
sources:
  - title: "Microsoft 365 Roadmap 561041"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561041"
    kind: "roadmap"
  - title: "Microsoft365CopilotChatIconEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "ExtensionSettings"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/extensionsettings"
    kind: "learn"
  - title: "Configure Microsoft Edge policy settings in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/configure-edge"
    kind: "learn"
  - title: "Step 5: Settings Catalog for Microsoft Edge for Business (windows)"
    url: "https://learn.microsoft.com/intune/solutions/edge-data-security/settings-catalog-step-5"
    kind: "learn"
  - title: "Use the Intune settings catalog to configure settings"
    url: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/"
    kind: "learn"
  - title: "Updated Windows and Microsoft Copilot Chat experience"
    url: "https://learn.microsoft.com/windows/client-management/manage-windows-copilot"
    kind: "learn"
videos: []
related: ["microsoft-edge-auto-open-copilot-side-pane-for-outlook-links","microsoft-edge-upgraded-copilot-new-tab-page","microsoft-edge-ask-copilot-about-an-image"]
controls:
  - governs: "Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar"
    scope: "user"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Create > New policy > Settings catalog > Add settings > Microsoft Edge"
      docs: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/configure-edge"
    api:
      kind: "other"
      call: "Registry value Microsoft365CopilotChatIconEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled"
    note: "In the settings picker, search for the policy name. Windows registry is shown; Group Policy path is Administrative Templates/Microsoft Edge. Entra ID profiles only. Intune needs the Policy and Profile Manager role."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-09T20:46:16"
changes:
  - date: "2026-11-24"
    note: "New briefing: Edge 149 makes Microsoft365CopilotChatIconEnabled the Copilot Chat toolbar control; extension and sidebar policies no longer apply."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 48 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 44
  unconfirmed: 1
  contradicted: 3
  attempts: 0
  hash: "56dc1c892ca2f0dbec1d7f2e234d605e"
---

## What's changing

From Microsoft Edge version 149, the `Microsoft365CopilotChatIconEnabled` policy is the standard way to configure Copilot Chat in Edge. Extension and sidebar policies no longer affect the appearance or functionality of Copilot Chat.

The Edge 149 Stable release notes (version 149.0.4022.52, June 04, 2026) explain what moved. Previously, this behaviour was controlled by blocking the Copilot extension, either explicitly or by using the `*` wildcard in the `ExtensionSettings` or `ExtensionInstallBlockList` policies. The `ExtensionSettings` page now states that, starting in Edge 149, `Microsoft365CopilotChatIconEnabled` controls the display of Copilot in the toolbar.

The same notes say Copilot address bar suggestions were also tied to extension policy settings, and that from Edge 149 admins can use the `CopilotAddressBarSuggestionsEnabled` policy to manage them.

The policy page describes the behaviour: for users in a Microsoft Entra ID Edge profile, it controls whether the Microsoft 365 Copilot Chat icon shows in the Microsoft Edge for Business toolbar, for licensed and unlicensed users. It applies only when users access Copilot in the sidepane. If enabled, or not configured, Copilot shows in the toolbar; if disabled, it does not. When not configured, users can turn it on or off with the Show Copilot toggle in settings.

The roadmap record lists the item as Launched, with a target of June CY2026, for Worldwide (Standard Multi-Tenant), General Availability, on the Web platform.

## Why it matters

Teams that hid Copilot Chat by blocking the Copilot extension, or with a sidebar policy, can no longer rely on that. The release notes state those policies no longer affect Copilot Chat in Edge 149, so a tenant that has not set `Microsoft365CopilotChatIconEnabled` may find Copilot Chat showing in the toolbar where it was hidden before.

The change is a simplification: one policy for the toolbar icon, one for address bar suggestions. The cost is a migration. Read your existing Edge policy set for extension and sidebar rules aimed at Copilot, and replace them with the explicit policy so the setting is visible and testable.

## Risk assessment

**Data exposure**
- Copilot Chat can appear in the Edge toolbar for users where an extension block previously hid it. The policy page says that with the policy unconfigured, Copilot shows in the toolbar and users can toggle it with the Show Copilot setting. Set the policy to disabled to keep it hidden.
- Address bar suggestions from Copilot were tied to extension policy; from Edge 149 `CopilotAddressBarSuggestionsEnabled` governs them. Review that setting separately from the toolbar icon.

**Security & identity**
- The policy page says it applies to users in a Microsoft Entra ID Edge profile and that it does not apply to a profile signed in with a Microsoft account. Check which of your users work in Entra ID profiles.

**Autonomy & actions**
- No change: the policy controls whether the icon shows in the toolbar and applies when users access Copilot in the sidepane. It adds no new agent behaviour.

**Change & support**
- Help desk calls are likely where users who lost or gained the Copilot icon after upgrading to Edge 149 ask why. Any `ExtensionSettings` or `ExtensionInstallBlockList` rule that targeted the Copilot extension no longer hides Copilot Chat, so remove it from your documentation of how Copilot is controlled.
- The policy page lists Windows and macOS version 139 or later as supported and Android and iOS as not supported.

## Cost and licensing

The policy page names no licence and no meter. It states the policy controls the icon for Microsoft 365 Copilot licensed and unlicensed users. Microsoft's Windows documentation says the web scope of Microsoft Copilot Chat is available at no additional cost to customers signed in with a Microsoft Entra account.

The cost that remains is admin time: finding extension and sidebar rules that targeted Copilot, setting the new policy through Group Policy, a mobile device management tool or the Intune settings catalog, and answering user questions.

## Scope

The policy applies to users in a Microsoft Entra ID Edge profile and not to a profile signed in with a Microsoft account, per the policy page. It lists Windows and macOS 139 or later as supported, and Android and iOS as not supported. It can be set as mandatory or recommended, applies per profile, and supports dynamic policy refresh.

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud, General Availability as the release phase and Web as the platform. The Edge 149 Stable release notes carry the change under version 149.0.4022.52, June 04, 2026.

## Governance guidance

### Before rollout
- Inventory `ExtensionSettings` and `ExtensionInstallBlockList` rules that block the Copilot extension or use the `*` wildcard, because the release notes say they no longer control Copilot Chat.
- Decide whether Copilot should show in the Edge toolbar for users in Entra ID profiles, and whether the Show Copilot toggle in settings should stay in users' hands.
- Decide separately whether Copilot address bar suggestions are wanted, using `CopilotAddressBarSuggestionsEnabled`.

### At rollout
- Create an Intune settings catalog policy for Microsoft Edge, or the equivalent Group Policy or registry value, and set `Microsoft365CopilotChatIconEnabled` to match the decision.
- Choose mandatory or recommended: the policy supports both, and a recommended value lets users override it.
- Assign the policy to the groups that use Entra ID Edge profiles.

### After rollout
- Open `edge://policy` on test devices to confirm the policy is applied, as the Intune settings catalog page suggests for checking Edge policies.
- Remove obsolete Copilot-targeting extension rules once the new policy is confirmed.
- Watch for user reports after the Edge 149 upgrade and update support guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Microsoft 365 Copilot Chat icon shows in the Edge for Business toolbar</strong><br><small>User</small><br><small class="controls__note">In the settings picker, search for the policy name. Windows registry is shown; Group Policy path is Administrative Templates/Microsoft Edge. Entra ID profiles only. Intune needs the Policy and Profile Manager role.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Create › New policy › Settings catalog › Add settings › Microsoft Edge <a href="https://learn.microsoft.com/intune/device-configuration/settings-catalog/configure-edge" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value Microsoft365CopilotChatIconEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-browser-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The policy can be mandatory or recommended. The policy page says it applies only when users access Copilot in the sidepane.

The `ExtensionSettings` and `ExtensionInstallBlockList` policies still exist, but the release notes state they no longer affect Copilot Chat. Do not treat them as controls for this feature. The Intune policy needs at least the Policy and Profile Manager role, per the Intune page.

## Open questions

- Which sidebar policies does the release note mean when it says extension and sidebar policies no longer affect Copilot Chat? Watch the Edge release notes and the policy pages for the list.
- How does Edge treat users in profiles that are not signed in with a Microsoft Entra ID account, now that extension blocks no longer apply? Watch the policy page for changes.
- Will a Microsoft 365 admin center setting for the Edge Copilot icon be added? Watch Message center and the roadmap.
- Does the policy page's Windows and macOS version 139 support mean tenants on Edge 139 to 148 have the new behaviour, or only Edge 149 and later? Compare the policy page with the Edge release notes.

<!-- rationale
risk: Medium. Per the roadmap and Edge release notes, extension and sidebar policies no longer affect Copilot Chat in Edge 149, so a tenant that hid Copilot that way may now show it until the policy is set.
cost: Low. The only cost shown is admin time to move to the policy; the policy page names no licence or meter, and says it applies to Microsoft 365 Copilot licensed and unlicensed users.
impact: Medium. Users in Microsoft Entra ID Edge profiles notice if the Copilot icon appears or disappears; admins who relied on extension or sidebar blocks notice first.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The change adds no new agent behaviour. | Found: Searched: Microsoft Edge 149 Microsoft365CopilotChatIconEnabled unifying policy new agent behavior autonomy; read the icon policy reference and the Edge 149 unifying-controls release note. Neither states that agent behaviour is unchanged. | Fix: Remove 'No change:' and 'It adds no new agent behaviour.' Retain 'The policy controls whether the icon shows in the toolbar and applies when users access Copilot in the sidepane.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The Intune route is Devices > Manage devices > Configuration > Create > New policy > Settings catalog > Add settings > Microsoft Edge. | Found: Select Devices > Manage devices > Configuration > Create > New policy. Profile type: Select Settings catalog. In Configuration settings, select Add settings, and search for Edge: Select the Microsoft Edge category. | Fix: The route reaches the settings picker but stops before the setting. Use 'Devices > Manage devices > Configuration > Create > New policy > Settings catalog > Configuration settings > Add settings > Microsoft Edge > Feature controls > Control whether Microsoft Copilot Chat shows in the Microsoft Edge for Business toolbar'. State in the note that Platform is Windows 10 and later or macOS and that the picker uses the display name, as listed at https://learn.microsoft.com/intune/solutions/edge-data-security/settings-catalog-step-5. | Source: https://learn.microsoft.com/intune/device-configuration/settings-catalog/configure-edge
- [supported, minor] Cost and licensing: mobile device management tool / applicability: Microsoft Edge policies can be configured using a mobile device management tool. | Found: You can configure Microsoft Edge on Windows 10/11 using MDM with your preferred Enterprise Mobility Management (EMM) or MDM provider that supports ADMX Ingestion. | Fix: Cite https://learn.microsoft.com/deployedge/configure-edge-with-mdm for the statement about using a mobile device management tool. | Source: https://learn.microsoft.com/deployedge/configure-edge-with-mdm
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits a launched, medium-risk change that can restore toolbar visibility without administrator action. | Found: action: "prepare"; status: "launched"; risk: "medium"; 'a tenant that has not set Microsoft365CopilotChatIconEnabled may find Copilot Chat showing in the toolbar where it was hidden before.' | Fix: Set action to 'act-now': the standard assigns that rating to launched changes reaching users without administrator action when risk is medium and there is a control to set.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: Medium impact fits this change to default toolbar behaviour. | Found: impact: "medium"; 'Users in Microsoft Entra ID Edge profiles notice if the Copilot icon appears or disappears'; 'a tenant that has not set Microsoft365CopilotChatIconEnabled may find Copilot Chat showing in the toolbar where it was hidden before.' | Fix: Set impact to 'high' and begin its rationale 'High.': the standard explicitly assigns high impact to a change to default behaviour. Keep the existing explanation of which users notice.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: Every control the governance checklist asks readers to decide or configure appears in the controls table. | Found: 'Decide separately whether Copilot address bar suggestions are wanted, using CopilotAddressBarSuggestionsEnabled.' The controls table contains only the Microsoft 365 Copilot Chat toolbar icon control. | Fix: The Before rollout step for CopilotAddressBarSuggestionsEnabled has no controls-table row. Remove that checklist step; the explanatory address-bar discussion can remain.
-->
