---
title: "Microsoft 365 Copilot: share files from iPhone and iPad apps to start a Copilot Chat"
slug: "m365-copilot-initiate-copilot-chat-by-sharing-files-to-the-m365-copilot-app-on-iphone-and"
roadmapId: 500633
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "On iPhone and iPad, sharing a Word, Excel or PowerPoint file to the Microsoft 365 Copilot app uploads it to Copilot Chat. Users choose to do it; Microsoft Learn documents no setting specific to this share path."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS"]
targetDate: "October CY2025"
previewDate: "September CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Copilot Chat (Basic) is included with eligible Microsoft 365 licences and that users with a Copilot licence get the full Microsoft Copilot app experience. A licence or meter specific to this feature is not yet published."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["m365-copilot","copilot-chat","file-upload","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 500633"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500633"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Get started with the Microsoft Copilot app"
    url: "https://learn.microsoft.com/copilot/plan/copilot-app-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "How to Manage Data Transfer Between iOS Apps in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/app-management/protection/manage-data-transfer-ios"
    kind: "learn"
  - title: "Microsoft Intune Protected Apps"
    url: "https://learn.microsoft.com/intune/app-management/ref-protected-apps"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-users-will-be-able-to-upload-files-stored-locally-or-in","m365-copilot-capture-voice-notes-in-the-m365-copilot-mobile-app","app-management"]
controls:
  - governs: "Access to organisational Copilot Chat through the Copilot app"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Admins only. Blocks organisational Copilot Chat access, including for licensed users; blocked users see a turned-off screen. Not documented to remove the iOS share target or to govern personal-account access."
  - governs: "A switch for sharing files into Copilot Chat from other iOS apps"
    scope: "user"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-09T23:15:32"
changes:
  - date: "2026-11-24"
    note: "New briefing: sharing Word, Excel and PowerPoint files from iPhone and iPad apps to the Copilot app starts a Copilot Chat; launched per the roadmap, no feature-specific admin setting documented."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 34 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: Intune app protection now stated as listed for Microsoft Copilot on iOS, and the Integrated Apps control described as blocking organisational Copilot Chat access, not as removing the app or the only tenant control."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 43 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 43
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a2e516ff3c2a709f7b1aa4bb42b52c6b"
---

## What's changing

Users on iPhone and iPad can now start a Copilot Chat by sharing a file to the Microsoft 365 Copilot app. The roadmap item states that when a user shares a Word, Excel or PowerPoint file from a third-party app (including Files) and chooses Microsoft 365 Copilot as the target app, the file is uploaded to chat. The user can then open a preview of the file or continue the conversation with Copilot Chat.

The roadmap item lists status Launched, a target date of October CY2025 and a preview date of September CY2025. The release phase is General Availability, the platform is iOS, and the only cloud listed is Worldwide (Standard Multi-Tenant). No Message Center post was supplied for this item.

Microsoft Learn has no page for this feature that was found at the time of writing (November 2026), so what the briefing says about its behaviour is the roadmap's description. Learn now says the Microsoft 365 Copilot app is called Microsoft Copilot; the roadmap item still uses the older name.

## Why it matters

This adds a way for work files held in other apps on a phone or tablet to reach Copilot Chat, so the question for a service owner is whether that path fits your data-handling rules. Learn documents uploading a file as one way to give Copilot Chat organisational content, so the capability itself is not new; the share route from third-party apps is.

Microsoft has not stated a default beyond the roadmap's description that a user chooses the share action, so the page rates the default as user-opt-in. If nobody acts, no source says existing behaviour changes: users who already have the app and choose to share a file will use it. Plan a short user message and a test on a managed device rather than a tenant-wide change.

## Risk assessment

**Data exposure**
- The roadmap says a shared file is uploaded to chat, so the content of a Word, Excel or PowerPoint file leaves a third-party app and enters Copilot Chat. Learn says users with Microsoft Entra accounts get Enterprise Data Protection for prompts and responses. Confirm which account (work or personal) receives a shared file before relying on that protection.

**Security & identity**
- Learn says chats, files and protections stay separate by the account the user signs in with, and that users should sign in with their work or school account to receive enterprise protections. Which account a shared file goes to is not described.
- Microsoft lists Microsoft Copilot for iOS as supporting core Intune app protection policies, including data-transfer restrictions. Test how the assigned policy handles this share route.

**Autonomy & actions**
- No change documented: the roadmap describes an upload the user starts, followed by a preview or a conversation the user continues.

**Change & support**
- Expect questions from iPhone and iPad users about where a shared file goes and which account it uses. Integrated Apps provides a control over organisational Copilot Chat access, rather than a dedicated switch for this sharing route.

## Cost and licensing

**Licence.** Learn says Copilot Chat (Basic) is the standalone baseline experience included with eligible Microsoft 365 licences, and that users with a Copilot licence get the full Microsoft Copilot app experience. The roadmap item names no licence for this feature, and no page read gives a licence or meter specific to it.

**Meter.** A credit rate or meter specific to sharing a file to the app is not yet published. Admin time to brief users and test the path is the only cost the sources show.

## Scope

The roadmap item lists iOS as the platform, which the item describes as iPhone and iPad, General Availability as the release phase and Worldwide (Standard Multi-Tenant) as the only cloud. It lists no other cloud, which is a record fact and not a statement that the feature is unavailable elsewhere.

The roadmap names Word, Excel and PowerPoint files shared from a third-party app, including Files. Users need the Microsoft Copilot app on the device; Learn's overview of the app describes iOS devices as a supported client. The roadmap names no role or prerequisite for administrators.

## Governance guidance

### Before rollout
- Decide with your security team whether work files in third-party iPhone and iPad apps may be shared into Copilot Chat, and write the answer into your user guidance.
- Tell users to sign in to the Microsoft Copilot app with their work or school account so they receive enterprise protections, and to look for the Work label and the green data protection shield.

### At rollout
- Test sharing a Word, Excel and PowerPoint file from the Files app on a managed iPhone or iPad, and record which account the file lands in.

### After rollout
- Decide whether blocking organisational Copilot Chat access through Integrated Apps is acceptable if the test shows files reaching an account you do not want to receive them; Microsoft does not describe whether this removes the iOS share target.
- Watch the Learn page for the Copilot app and Message center for a page or setting specific to this share path.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to organisational Copilot Chat through the Copilot app</strong><br><small>Tenant</small><br><small class="controls__note">Global Admins only. Blocks organisational Copilot Chat access, including for licensed users; blocked users see a turned-off screen. Not documented to remove the iOS share target or to govern personal-account access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch for sharing files into Copilot Chat from other iOS apps</strong><br><small>User</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control that reaches this feature is blocking Copilot through Integrated Apps. The page says its Integrated Apps controls are only available to Global Admins. Blocking Copilot there blocks organisational Copilot Chat access, including for licensed users, and blocked users see a Copilot Chat was turned off for your organization screen. Microsoft does not describe whether this removes the iOS share target, and this is not a control over personal Microsoft-account access.

Microsoft Learn documents no setting specific to sharing files to the Copilot app on iPhone and iPad at the time of writing (November 2026). Microsoft lists Microsoft Copilot for iOS as supporting core Intune app protection policies, including data-transfer restrictions; Intune documents the Send org data to other apps and Receive data from other apps settings for iOS app protection policies. Test how the assigned policy handles this share route.

## Open questions

- Does a file shared from another iOS app go to the user's work or school account or to a personal Microsoft account when both can be signed in? Watch the Microsoft Copilot app pages on Learn.
- How does an assigned Intune app protection policy behave on this particular sharing route on iPhone and iPad?
- Is there a licence or meter specific to this feature, and does a shared file count toward any usage limit? Watch the Copilot overview and release notes pages.
- Will Microsoft publish a dedicated admin setting for this share path? Watch the Learn page for the Copilot app and Message center.

<!-- rationale
risk: Low. A user picks one file and shares it to the app; Learn already describes uploading a file as a way to give Copilot Chat organisational content. Microsoft lists Microsoft Copilot for iOS as supporting core Intune app protection policies; test how an assigned policy handles this share route.
cost: Low. Learn says Copilot Chat (Basic) is included with eligible Microsoft 365 licences; a licence or meter specific to this feature is not yet published, so only admin and communication time is known.
impact: Low. Only iPhone and iPad users who choose to share a file to the app notice it; nothing changes for other users or platforms.
-->
