---
title: "Microsoft Dataverse: unlicensed Entra users as activity recipients"
slug: "microsoft-dataverse-add-users-without-licenses-to-activity-recipient-fields"
roadmapId: 574121
topic: "power-platform"
products: ["Microsoft 365 app","Dynamics 365 Sales","Dynamics 365 Customer Service","Microsoft Dataverse"]
summary: "Any active Microsoft Entra user can be added to activity recipient fields in Dynamics 365 apps without a Dataverse or Power Apps licence; the created user records stay disabled."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Recipients need no Dataverse or Power Apps licence. Disabled records cannot sign in to or run Dynamics 365 apps."
audiences: ["power-platform-admin","m365-admin","security","service-owner"]
tags: ["dataverse","dynamics-365","activities","unlicensed-users","entra-id","power-platform-admin-center"]
sources:
  - title: "Add users without licenses to activity recipient fields (preview)"
    url: "https://learn.microsoft.com/en-us/power-platform/admin/add-unlicensed-users-activities"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 574121"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574121"
    kind: "roadmap"
videos: []
related: ["managed-environments","dataverse-agent-users-entra-agent-identity","microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column"]
confidence: "high"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: unlicensed Entra users as activity recipients in Dataverse, in development."
version: 1
---

## What's changing

By default only users with a Dataverse or Power Apps licence can be added to activities in Dynamics 365 apps. This feature, *Activities for users without licenses*, lets any active Microsoft Entra user be a recipient: the To, Cc or Bcc fields of an email, attendees on appointments, or Call From and Call To on phone calls.

The user lookup uses the Microsoft Entra ID table, a virtual Dataverse table of active Entra users. When someone is chosen, Dataverse creates a disabled unlicensed-user record in the environment. That user cannot sign in to or run Dynamics 365 apps.

When a licence is later assigned, the record becomes a licensed user, and earlier activities stay linked to the same record. The roadmap shows a preview from October 2026 and general availability targeted for January 2027 in Worldwide.

## Why it matters

Teams previously had to license colleagues or work around the limit to log activities with them. This removes that friction, but it widens the directory data visible inside Dataverse and creates user rows that did not exist before.

Security and compliance owners should consider the effect on record counts, user reports and data retention.

## Risk assessment

**Data exposure**
- All users in the tenant need read permission on the Microsoft Entra ID table, so basic directory details become visible in the lookup.

**Security & identity**
- Created records are disabled and do not grant Dynamics 365 app access.

**Autonomy & actions**
- No autonomous behaviour.

**Change & support**
- Disabled user rows appear in the environment; reports of users may need filtering.

## Cost and licensing

No extra licence is needed for recipients. Learn says users without licences cannot use Dynamics 365 apps. Administrator effort is needed to grant the Entra ID table read permission and to enable the setting. No charge for the feature is published.

## Scope

Environments with Dynamics 365 apps such as Sales and Customer Service, in the Worldwide cloud. Setting is per environment. Requires Privileged Role Administrator for the security role step and Power Platform administrator for the toggle.

## Governance guidance

### Before rollout
- [ ] Review which directory attributes the Microsoft Entra ID table exposes.
- [ ] Plan the security role change: update existing roles or create a custom role with read on the Entra ID table.
- [ ] Agree with privacy owners on creating Dataverse rows for non-licensed staff.

### At rollout
- [ ] Enable the setting in a test environment first.
- [ ] Assign the read role to all users before turning on the feature.

### After rollout
- [ ] Review disabled user records created.
- [ ] Check reports and automations that count users.
- [ ] Confirm licence assignment converts users as expected.

## Admin controls

In the Power Platform admin center: Manage > Environments > select environment > Settings > Product > Features > Activities for users without licenses, then select *Add anyone with an Entra ID to an activity's recipients fields*. Grant the read permission on the Microsoft Entra ID table through security roles first.

## Open questions

- Does the feature cover Microsoft 365 apps beyond Dynamics 365 surfaces?
- How are the disabled records audited and cleaned up?
- Is the setting preview-only until January 2027?

<!-- rationale
risk: Medium. It needs read access to the Entra ID table for all users and creates user records in Dataverse, though the records are disabled and grant no app access.
cost: Low. The point is to avoid buying licences for recipients; cost is admin effort. A later licence assignment converts the user automatically.
impact: Medium. Sales and service users who send email or schedule meetings with colleagues gain broader recipient lookup.
-->
