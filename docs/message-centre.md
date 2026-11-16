# Connecting Message Center to the ledger

The Microsoft 365 Message Center has no public feed. Every tenant sees its own copy of the posts
Microsoft sends to administrators, so the ledger reads them from one tenant through Microsoft Graph
and republishes only the text Microsoft sends to every tenant. This page is the one-off setup. It
takes about ten minutes in the Microsoft Entra admin center and the repository's settings, and
needs no code.

## What the ledger does with the posts

- Reads `GET /admin/serviceAnnouncement/messages` with the application permission
  `ServiceMessage.Read.All` (read-only, no user signed in) at the start of each daily run.
- Keeps a post only when it is about a product the ledger covers, and files it under the topic of
  the roadmap item it names (or its services, or its title).
- Runs a publication screen before anything is written to the repository. A post is kept back,
  and only its id and the reason recorded, when it:
  - carries Microsoft's **Data privacy** tag (only Global Administrators and Message Center
    Privacy Readers may see those);
  - has attachments;
  - names the tenant (its display name or verified domains, read from Graph when
    `Organization.Read.All` is also granted, plus any words in `MC_TENANT_WORDS`);
  - contains an email address or a GUID;
  - is worded for one organisation ("we have identified that your organization...", "your
    tenant is affected").
- Writes the surviving posts to `raw/message-center/<id>.json` (title, dates, category, the
  roadmap ids the post names, the body with scripts, images and attributes stripped) and the index
  `data/message-center.json`.
- Gives the writer and the checker the posts for a roadmap item alongside its record, so briefings
  quote the rollout window and the act-by date, and queues a refresh of any briefing whose post is
  newer than the page.
- Shows the posts on the site: `/message-centre/` (act-by dates first), one page per post, a
  "Message Centre notices" section and an "Act by" fact on each matching briefing, an "Act by"
  strip on the home page, and a section in the weekly digest.

## Which tenant

Any tenant with Microsoft 365 receives the same general posts. Two things differ by tenant: which
services it has (a tenant without Power Platform or Copilot licences receives fewer posts about
them), and the tenant-specific posts, which the screen keeps back anyway. A tenant that holds
Microsoft 365 E5 or E3 with Copilot and Power Platform licences sees the widest set. A trial or
developer tenant works, with fewer posts. Whichever tenant is used, nothing identifying it is
published: the app has no access to mail, files, users or settings, and the screen removes posts
that could describe the organisation.

## Setup

### 1. Register an application

In the [Microsoft Entra admin center](https://entra.microsoft.com), under **Identity › Applications
› App registrations**, choose **New registration**. Name it `Release Ledger Message Center reader`,
leave the account type as single tenant, leave the redirect URI empty, and register. Note the
**Application (client) ID** and the **Directory (tenant) ID** from the overview page.

### 2. Grant the permission

Under **API permissions**, choose **Add a permission › Microsoft Graph › Application permissions**,
tick `ServiceMessage.Read.All`, and add it. Optionally add `Organization.Read.All` as well: it lets
the ingest step read the tenant's display name and verified domains so the screen can look for them
(without it, put those words in the `MC_TENANT_WORDS` variable instead). Then choose **Grant admin
consent for <tenant>** and confirm. Both permissions are read-only.

### 3. Let the workflow sign in

Choose one of these. The federated credential is the better one: there is no secret to store or
rotate, and only this repository's `main` branch can use it.

**Federated credential (recommended).** Under **Certificates & secrets › Federated credentials**,
choose **Add credential**, scenario **GitHub Actions deploying Azure resources**, and fill in:

| Field | Value |
| --- | --- |
| Organization | `crowdedLeopard` |
| Repository | `copilot-feature-wiki` |
| Entity type | Branch |
| Branch | `main` |
| Name | `release-ledger-main` |

The audience stays `api://AzureADTokenExchange`. Nothing else is needed: the workflow already
requests an OIDC token (`id-token: write`) and the ingest step exchanges it for a Graph token.

**Client secret (alternative).** Under **Certificates & secrets › Client secrets**, choose
**New client secret**, pick an expiry, and copy the value once. Store it as the repository secret
`MC_CLIENT_SECRET` (step 4). When it expires, the daily run reports "Message Centre: skipped" with
the reason, and a new secret fixes it.

### 4. Tell the repository

In the repository, under **Settings › Secrets and variables › Actions**:

| Name | Where | Value |
| --- | --- | --- |
| `MC_TENANT_ID` | Variables (or Secrets) | the Directory (tenant) ID |
| `MC_CLIENT_ID` | Variables (or Secrets) | the Application (client) ID |
| `MC_CLIENT_SECRET` | Secrets | only if a client secret was chosen in step 3 |
| `MC_TENANT_WORDS` | Variables, optional | comma-separated words the screen should also treat as identifying the tenant (the company name and its domains), if `Organization.Read.All` was not granted |

Ids are not secrets, but storing them as secrets is fine too; the workflow reads either.

### 5. Run it

Run the **Daily curation and deploy** workflow from the Actions tab, or wait for the next scheduled
run. The run summary shows a line such as `message-center: 148 posts read (federated credential),
131 in scope and published, 131 new, 0 changed, 12 outside the topics, 5 withheld by the tenant
screen (3 privacy-tag, 2 attachments); 131 in the ledger, 4 with an act-by date ahead`. The posts
appear on `/message-centre/` after the deploy.

## Checking it is safe

- `data/message-center.json` lists every published post's id and summary and, under `withheld`,
  the ids and reason codes of posts the screen kept back. The withheld posts' text is never
  written anywhere.
- Each post page carries Microsoft's text only, with links, scripts, images and attributes
  stripped. Nothing about the tenant appears on the page.
- The app can be removed at any time in Entra (**App registrations › delete**); the ledger then
  keeps the posts already published and the run reports that the source is not configured.

## Local testing

```bash
MC_FIXTURE=path/to/graph-messages.json npm run ingest:mc    # a saved Graph response, no sign-in
MC_TENANT_ID=... MC_CLIENT_ID=... MC_CLIENT_SECRET=... npm run ingest:mc
npm test                                                     # includes the screen's unit tests
```
